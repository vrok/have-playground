package main

import (
	"bytes"
	"errors"
	"fmt"
	"go/ast"
	"go/format"
	"go/parser"
	"go/scanner"
	"go/token"
	"go/types"
	"path"
	"strings"
	"time"

	"github.com/gopherjs/gopherjs.github.io/playground/internal/imports"
	"github.com/gopherjs/gopherjs/compiler"
	"github.com/gopherjs/gopherjs/js"
	"github.com/neelance/go-angularjs"
	"github.com/vrok/have/have"
	"honnef.co/go/js/dom"
	"honnef.co/go/js/xhr"
)

type Line map[string]string

var output []Line

//const snippetStoreHost = "snippets.gopherjs.org"
const snippetStoreHost = "pkgz/"

// Implements PkgLocator
type pkgLocator struct {
	snippet string
}

// Until we have a reliable Go to Have interoperabilit layer, we have to do this.
var fakePkgs = []*struct {
	name, code string
}{
	{
		name: "fmt",
		code: `package fmt
func Printf(format string, a ...interface{}) (n int, err error) {}
func Println(a ...interface{}) (n int, err error) {}`,
	},
}

func (gpl *pkgLocator) Locate(relativePath string) ([]*have.File, error) {
	if relativePath == "main" {
		return []*have.File{have.NewFile("main.go", gpl.snippet)}, nil
	}
	for _, pkg := range fakePkgs {
		if pkg.name == relativePath {
			return []*have.File{have.NewFile(path.Join(relativePath, "main.go"), pkg.code)}, nil
		}
	}
	return nil, fmt.Errorf("Couldn't find package %s (note that just a tiny subset of Go's std lib is available now)")
}

func haveToGo(haveCode string) (string, error) {
	manager := have.NewPkgManager(&pkgLocator{snippet: haveCode})

	pkg, errs := manager.Load("main")
	if len(errs) > 0 {
		err := errs[0]
		if compErr, ok := err.(*have.CompileError); ok {
			return "", errors.New(compErr.PrettyString(manager.Fset))
		}
		return "", err
	}

	for _, f := range pkg.Files {
		if f.Name == have.BuiltinsFileName {
			continue
		}
		return f.GenerateCode(), nil
	}
	return "", fmt.Errorf("Something went wrong!")
}

func main() {
	var location = dom.GetWindow().Top().Location() // We might be inside an iframe, but want to use the location of topmost window.

	codeReady := make(chan struct{}) // Used to synchronize when "code" value is ready.

	app := angularjs.NewModule("playground", nil, nil)

	app.NewController("PlaygroundCtrl", func(scope *angularjs.Scope) {
		if strings.HasPrefix(location.Hash, "#/") {
			id := location.Hash[2:]

			req := xhr.NewRequest("GET", "http://"+snippetStoreHost+"/p/"+id)
			req.ResponseType = xhr.ArrayBuffer
			go func() {
				err := req.Send(nil)
				if err != nil || req.Status != 200 {
					scope.Apply(func() {
						scope.Set("output", []Line{Line{"type": "err", "content": `failed to load snippet "` + id + `"`}})
					})
					return
				}

				data := js.Global.Get("Uint8Array").New(req.Response).Interface().([]byte)
				scope.Apply(func() {
					scope.Set("code", string(data))
					close(codeReady)
				})
			}()
		} else {
			scope.Set("code", `package main

import "fmt"

func main() {
	fmt.Println("Hello, playground")
	print("Hello, JS console")
}`)
			close(codeReady)
		}
		scope.Set("imports", true)
		scope.Set("shareUrl", "")
		scope.Set("showShareUrl", false)

		packages := make(map[string]*compiler.Archive)
		var pkgsToLoad map[string]struct{}
		importContext := &compiler.ImportContext{
			Packages: make(map[string]*types.Package),
			Import: func(path string) (*compiler.Archive, error) {
				if pkg, found := packages[path]; found {
					return pkg, nil
				}
				pkgsToLoad[path] = struct{}{}
				return &compiler.Archive{}, nil
			},
		}
		fileSet := token.NewFileSet()
		pkgsReceived := 0

		setupEnvironment(scope)

		codeArea := angularjs.ElementById("code")
		codeArea.On("input", func(e *angularjs.Event) {
			scope.Set("showShareUrl", false)
			location.Hash = ""
		})
		codeArea.On("keydown", func(e *angularjs.Event) {
			toInsert := ""
			switch e.KeyCode {
			case '\t':
				toInsert = "\t"
			case '\r':
				toInsert = "\n"
				start := codeArea.Prop("selectionStart").Int()
				code := scope.Get("code").String()
				i := strings.LastIndex(code[:start], "\n") + 1
				for i < start {
					c := code[i]
					if c != ' ' && c != '\t' {
						break
					}
					toInsert += string(c)
					i++
				}
			}
			if toInsert != "" {
				scope.Set("showShareUrl", false)
				location.Hash = ""

				start := codeArea.Prop("selectionStart").Int()
				end := codeArea.Prop("selectionEnd").Int()
				code := scope.Get("code").String()
				scope.Apply(func() {
					scope.Set("code", code[:start]+toInsert+code[end:])
				})
				codeArea.SetProp("selectionStart", start+len(toInsert))
				codeArea.SetProp("selectionEnd", start+len(toInsert))
				e.PreventDefault()
			}
		})

		var run func(bool)
		run = func(loadOnly bool) {
			output = nil
			scope.Set("output", output)
			pkgsToLoad = make(map[string]struct{})

			var goCode, err = haveToGo(scope.Get("code").String())
			if err != nil {
				scope.Set("output", []Line{Line{"type": "err", "content": err.Error()}})
				return
			}

			file, err := parser.ParseFile(fileSet, "main.go", []byte(goCode), parser.ParseComments)
			if err != nil {
				if list, ok := err.(scanner.ErrorList); ok {
					for _, entry := range list {
						output = append(output, Line{"type": "err", "content": entry.Error()})
					}
					scope.Set("output", output)
					return
				}
				scope.Set("output", []Line{Line{"type": "err", "content": err.Error()}})
				return
			}

			mainPkg, err := compiler.Compile("main", []*ast.File{file}, fileSet, importContext, false)
			packages["main"] = mainPkg
			if err != nil && len(pkgsToLoad) == 0 {
				if list, ok := err.(compiler.ErrorList); ok {
					var output []Line
					for _, entry := range list {
						output = append(output, Line{"type": "err", "content": entry.Error()})
					}
					scope.Set("output", output)
					return
				}
				scope.Set("output", []Line{Line{"type": "err", "content": err.Error()}})
				return
			}

			var allPkgs []*compiler.Archive
			if len(pkgsToLoad) == 0 {
				allPkgs, _ = compiler.ImportDependencies(mainPkg, importContext.Import)
			}

			if len(pkgsToLoad) != 0 {
				pkgsReceived = 0
				for path := range pkgsToLoad {
					req := xhr.NewRequest("GET", "pkg/"+path+".a.js")
					req.ResponseType = xhr.ArrayBuffer
					go func(path string) {
						err := req.Send(nil)
						if err != nil || req.Status != 200 {
							scope.Apply(func() {
								scope.Set("output", []Line{Line{"type": "err", "content": `failed to load package "` + path + `"`}})
							})
							return
						}

						data := js.Global.Get("Uint8Array").New(req.Response).Interface().([]byte)
						packages[path], err = compiler.ReadArchive(path+".a", path, bytes.NewReader(data), importContext.Packages)
						if err != nil {
							scope.Apply(func() {
								scope.Set("output", []Line{Line{"type": "err", "content": err.Error()}})
							})
							return
						}
						pkgsReceived++
						if pkgsReceived == len(pkgsToLoad) {
							run(loadOnly)
						}
					}(path)
				}
				return
			}

			if loadOnly {
				return
			}

			jsCode := bytes.NewBuffer(nil)
			jsCode.WriteString("try{\n")
			compiler.WriteProgramCode(allPkgs, &compiler.SourceMapFilter{Writer: jsCode})
			jsCode.WriteString("} catch (err) {\ngoPanicHandler(err.message);\n}\n")
			js.Global.Set("$checkForDeadlock", true)
			js.Global.Call("eval", js.InternalObject(jsCode.String()))
		}
		scope.Set("run", run)
		go func() {
			<-codeReady // Wait for "code" value to be ready.
			run(true)
		}()

		scope.Set("format", func() {
			go func() {
				code := []byte(scope.Get("code").String())
				var out []byte
				var err error
				switch scope.Get("imports").Bool() {
				case true:
					out, err = imports.Process("prog.go", code, nil)
				case false:
					out, err = format.Source(code)
				}
				if err != nil {
					scope.Apply(func() {
						scope.Set("output", []Line{Line{"type": "err", "content": err.Error()}})
					})
					return
				}
				scope.Apply(func() {
					scope.Set("code", string(out))
					scope.Set("output", []Line{})
				})
			}()
		})

		scope.Set("share", func() {
			req := xhr.NewRequest("POST", "http://"+snippetStoreHost+"/share")
			req.ResponseType = xhr.ArrayBuffer
			go func() {
				err := req.Send([]byte(scope.Get("code").String())) // Send as binary.
				if err != nil || req.Status != 200 {
					scope.Apply(func() {
						scope.Set("output", []Line{Line{"type": "err", "content": `failed to share snippet`}})
					})
					return
				}

				data := js.Global.Get("Uint8Array").New(req.Response).Interface().([]byte)
				scope.Apply(func() {
					id := string(data)

					location.Hash = "#/" + id

					scope.Set("shareUrl", location.String())
					scope.Set("showShareUrl", true)
					// TODO: Do this better using AngularJS.
					//       Perhaps using http://stackoverflow.com/questions/14833326/how-to-set-focus-on-input-field/18295416.
					go func() {
						time.Sleep(time.Millisecond)
						dom.GetWindow().Document().GetElementByID("share-url").(*dom.HTMLInputElement).Select()
					}()
				})
			}()
		})

		// Start watching for hashchange events, and reload snippet if it happens.
		dom.GetWindow().Top().AddEventListener("hashchange", false, func(event dom.Event) {
			event.PreventDefault()

			if strings.HasPrefix(location.Hash, "#/") {
				id := location.Hash[2:]

				req := xhr.NewRequest("GET", "http://"+snippetStoreHost+"/p/"+id)
				req.ResponseType = xhr.ArrayBuffer
				go func() {
					err := req.Send(nil)
					if err != nil || req.Status != 200 {
						scope.Apply(func() {
							scope.Set("output", []Line{Line{"type": "err", "content": `failed to load snippet "` + id + `"`}})
						})
						return
					}

					data := js.Global.Get("Uint8Array").New(req.Response).Interface().([]byte)
					scope.Apply(func() {
						scope.Set("code", string(data))
					})
				}()
			}
		})
	})
}

func setupEnvironment(scope *angularjs.Scope) {
	js.Global.Set("goPrintToConsole", js.InternalObject(func(b []byte) {
		lines := strings.Split(string(b), "\n")
		if len(output) == 0 || output[len(output)-1]["type"] != "out" {
			output = append(output, Line{"type": "out", "content": ""})
		}
		output[len(output)-1]["content"] += lines[0]
		for i := 1; i < len(lines); i++ {
			output = append(output, Line{"type": "out", "content": lines[i]})
		}
		scope.Set("output", output)
		scope.EvalAsync(func() {
			time.AfterFunc(0, func() {
				box := angularjs.ElementById("output")
				box.SetProp("scrollTop", box.Prop("scrollHeight"))
			})
		})
	}))
	js.Global.Set("goPanicHandler", js.InternalObject(func(msg string) {
		output = append(output, Line{"type": "err", "content": "panic: " + msg})
		scope.Set("output", output)
	}))
}
