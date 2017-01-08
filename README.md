# Have language playground

This is a web playground for the Have programming language. See it running on http://havelang.org/playground/.

This project was possible thanks to [GopherJS](https://gopherjs.org), and it is actually based on the [GopherJS playground](https://github.com/gopherjs/gopherjs.github.io/playground).

## Development

To update the entire playground environment, just run `go generate github.com/vrok/have-playground`. It will install your local version of GopherJS compiler, build the playground, make a temporary copy of Go to /tmp/gopherjsplayground_goroot, rebuild and copy the standard library into the `pkg` directory.

Working on the playground application itself is made easier by using the `gopherjs serve` command to rebuild and serve the playground every time you refresh the browser.

```bash
gopherjs serve
```

Then open <http://localhost:8080/github.com/vrok/have-playground>.
