����Archive�� 
ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified   ��[]string��   ��[]*compiler.Decl�� ��  ������ 
FullName Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �F���net/http/internalinternalbufiobyteserrorsfmtio�N
$$ exports $$
pv0internal"net/http/internalErrLineTooLong6*FlushAfterChunkWriter   Writer
bufio
bufioerr6 buf2 n wrWriterioio 
Write p2nerr6   
Resetb>wD  
Flushb>  6 
flushb>  6 Availableb>   Bufferedb>   
Writeb>p2nnerr6 WriteByteb>c2 6 WriteRuneb>r4sizeerr6 WriteStringb>s   6 ReadFromb>rReader Read p2nerr6  n
err6   LocalhostCert2LocalhostKey2	 NewChunkedReader rv v 	 NewChunkedWriter wD WriteCloserCloser 
Close   6  D   "AA=$packages["bufio"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["bytes"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["errors"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["fmt"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} EE=$packages["io"];a    $r=E.$init();$s=5;case 5:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} G�+G=$pkg.chunkedReader=$newType(0,$kindStruct,"internal.chunkedReader",true,"net/http/internal",false,function(r_,n_,err_,buf_){this.$val=this;if(arguments.length===0){this.r=Q.nil;this.n=new $Uint64(0,0);this.err=$ifaceNil;this.buf=R.zero();return;}this.r=r_;this.n=n_;this.err=err_;this.buf=buf_;});�U.methods=[{prop:"beginChunk",name:"beginChunk",pkg:"net/http/internal",typ:$funcType([],[],false)},{prop:"chunkHeaderAvailable",name:"chunkHeaderAvailable",pkg:"net/http/internal",typ:$funcType([],[$Bool],false)},{prop:"Read",name:"Read",pkg:"",typ:$funcType([P],[$Int,$error],false)}];��G.init("net/http/internal",[{prop:"r",name:"r",exported:false,typ:Q,tag:""},{prop:"n",name:"n",exported:false,typ:$Uint64,tag:""},{prop:"err",name:"err",exported:false,typ:$error,tag:""},{prop:"buf",name:"buf",exported:false,typ:R,tag:""}]);chunkedReadernet/http/internal.Pnet/http/internal.Qnet/http/internal.Rnet/http/internal.Unet/http/internal.chunkedReader M��M=$pkg.chunkedWriter=$newType(0,$kindStruct,"internal.chunkedWriter",true,"net/http/internal",false,function(Wire_){this.$val=this;if(arguments.length===0){this.Wire=$ifaceNil;return;}this.Wire=Wire_;});��V.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([P],[$Int,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];IM.init("",[{prop:"Wire",name:"Wire",exported:true,typ:E.Writer,tag:""}]);chunkedWriter	io.Writernet/http/internal.Pnet/http/internal.Vnet/http/internal.chunkedWriter N��N=$pkg.FlushAfterChunkWriter=$newType(0,$kindStruct,"internal.FlushAfterChunkWriter",true,"net/http/internal",true,function(Writer_){this.$val=this;if(arguments.length===0){this.Writer=W.nil;return;}this.Writer=Writer_;});@N.init("",[{prop:"Writer",name:"",exported:true,typ:W,tag:""}]);FlushAfterChunkWriterbufio.Writer'net/http/internal.FlushAfterChunkWriternet/http/internal.W PP=$sliceType($Uint8);P QQ=$ptrType(A.Reader);Qbufio.Reader RR=$arrayType($Uint8,2);R SS=$sliceType($emptyInterface);S TT=$ptrType(N);T'net/http/internal.FlushAfterChunkWriter UU=$ptrType(G);Unet/http/internal.chunkedReader VV=$ptrType(M);Vnet/http/internal.chunkedWriter WW=$ptrType(A.Writer);Wbufio.Writer ErrLineTooLong LocalhostCert LocalhostKey 7    $pkg.ErrLineTooLong=C.New("header line too long");
errors.New net/http/internal.ErrLineTooLong �L    $pkg.LocalhostCert=new P($stringToBytes("-----BEGIN CERTIFICATE-----\nMIICEzCCAXygAwIBAgIQMIMChMLGrR+QvmQvpwAU6zANBgkqhkiG9w0BAQsFADAS\nMRAwDgYDVQQKEwdBY21lIENvMCAXDTcwMDEwMTAwMDAwMFoYDzIwODQwMTI5MTYw\nMDAwWjASMRAwDgYDVQQKEwdBY21lIENvMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCB\niQKBgQDuLnQAI3mDgey3VBzWnB2L39JUU4txjeVE6myuDqkM/uGlfjb9SjY1bIw4\niA5sBBZzHi3z0h1YV8QPuxEbi4nW91IJm2gsvvZhIrCHS3l6afab4pZBl2+XsDul\nrKBxKKtD1rGxlG4LjncdabFn9gvLZad2bSysqz/qTAUStTvqJQIDAQABo2gwZjAO\nBgNVHQ8BAf8EBAMCAqQwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDwYDVR0TAQH/BAUw\nAwEB/zAuBgNVHREEJzAlggtleGFtcGxlLmNvbYcEfwAAAYcQAAAAAAAAAAAAAAAA\nAAAAATANBgkqhkiG9w0BAQsFAAOBgQCEcetwO59EWk7WiJsG4x8SY+UIAA+flUI9\ntyC4lNhbcF2Idq9greZwbYCqTTTr2XiRNSMLCOjKyI7ukPoPjo16ocHj+P3vZGfs\nh1fIw3cSS2OolhloGw/XM6RWPWtPAlGykKLciQrBru5NAPvCMsb/I1DAceTiotQM\nfblo6RBxUQ==\n-----END CERTIFICATE-----"));LocalhostCertnet/http/internal.LocalhostCertnet/http/internal.P ��    $pkg.LocalhostKey=new P($stringToBytes("-----BEGIN RSA PRIVATE KEY-----\nMIICXgIBAAKBgQDuLnQAI3mDgey3VBzWnB2L39JUU4txjeVE6myuDqkM/uGlfjb9\nSjY1bIw4iA5sBBZzHi3z0h1YV8QPuxEbi4nW91IJm2gsvvZhIrCHS3l6afab4pZB\nl2+XsDulrKBxKKtD1rGxlG4LjncdabFn9gvLZad2bSysqz/qTAUStTvqJQIDAQAB\nAoGAGRzwwir7XvBOAy5tM/uV6e+Zf6anZzus1s1Y1ClbjbE6HXbnWWF/wbZGOpet\n3Zm4vD6MXc7jpTLryzTQIvVdfQbRc6+MUVeLKwZatTXtdZrhu+Jk7hx0nTPy8Jcb\nuJqFk541aEw+mMogY/xEcfbWd6IOkp+4xqjlFLBEDytgbIECQQDvH/E6nk+hgN4H\nqzzVtxxr397vWrjrIgPbJpQvBsafG7b0dA4AFjwVbFLmQcj2PprIMmPcQrooz8vp\njy4SHEg1AkEA/v13/5M47K9vCxmb8QeD/asydfsgS5TeuNi8DoUBEmiSJwma7FXY\nfFUtxuvL7XvjwjN5B30pNEbc6Iuyt7y4MQJBAIt21su4b3sjXNueLKH85Q+phy2U\nfQtuUE9txblTu14q3N7gHRZB4ZMhFYyDy8CKrN2cPg/Fvyt0Xlp/DoCzjA0CQQDU\ny2ptGsuSmgUtWj3NM9xuwYPm+Z/F84K6+ARYiZ6PYj013sovGKUFfYAqVXVlxtIX\nqyUBnu3X9ps8ZfjLZO7BAkEAlT4R5Yl6cGhaJQYZHOde3JEMhNRcVFMO8dJDaFeo\nf9Oeos0UUothgiDktdQHxdNEwLjQf7lJJBzV+5OtwswCWA==\n-----END RSA PRIVATE KEY-----"));LocalhostKeynet/http/internal.LocalhostKeynet/http/internal.P "net/http/internal.NewChunkedReaderF��F=function(a){var $ptr,a,b,c,d;  �b=$assertType(a,Q,true);c=b[0];d=b[1];    if(!d){  �c=A.NewReader(a);    }  �return new G.ptr(c,new $Uint64(0,0),$ifaceNil,R.zero());    };$pkg.NewChunkedReader=F;NewChunkedReaderbufio.NewReaderbufio.Reader"net/http/internal.NewChunkedReadernet/http/internal.Qnet/http/internal.Rnet/http/internal.chunkedReader -(*net/http/internal.chunkedReader).beginChunk�tG.ptr.prototype.beginChunk=function(){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  ca=this;  �b=P.nil;  �d=H(a.r);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;b=c[0];a.err=c[1];    if(!($interfaceIsEqual(a.err,$ifaceNil))){  �$s=-1;return;return;    }  �e=O(b);a.n=e[0];a.err=e[1];    if(!($interfaceIsEqual(a.err,$ifaceNil))){  '$s=-1;return;return;    }    if((f=a.n,(f.$high===0&&f.$low===0))){  Ca.err=E.EOF;    }    $s=-1;return;return;}return;}if($f===undefined){$f={$blk:G.ptr.prototype.beginChunk};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.beginChunk=function(){return this.$val.beginChunk();};chunkedReaderbeginChunk~io.EOFnet/http/internal.Pnet/http/internal.chunkedReadernet/http/internal.parseHexUintnet/http/internal.readChunkLine 7(*net/http/internal.chunkedReader).chunkHeaderAvailable�'G.ptr.prototype.chunkHeaderAvailable=function(){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  _a=this;  �b=a.r.Buffered();  �if(b>0){$s=1;continue;}$s=2;continue;    case 1:  �d=a.r.Peek(b);$s=3;case 3:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}c=d;e=c[0];  �$s=-1;return B.IndexByte(e,10)>=0;return B.IndexByte(e,10)>=0;    case 2:  �$s=-1;return false;return false;    }return;}if($f===undefined){$f={$blk:G.ptr.prototype.chunkHeaderAvailable};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.chunkHeaderAvailable=function(){return this.$val.chunkHeaderAvailable();};chunkedReaderchunkHeaderAvailable~bytes.IndexBytenet/http/internal.chunkedReader '(*net/http/internal.chunkedReader).Read��G.ptr.prototype.Read=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;  d=this;  Icase 1:if(!($interfaceIsEqual(d.err,$ifaceNil))){$s=2;continue;}  _if((e=d.n,(e.$high===0&&e.$low===0))){$s=3;continue;}$s=4;continue;    case 3:  qif(!(b>0)){f=false;$s=7;continue s;}g=d.chunkHeaderAvailable();$s=8;case 8:if($c){$c=false;g=g.$blk();}if(g&&g.$blk!==undefined){break s;}f=!g;case 7:if(f){$s=5;continue;}$s=6;continue;    case 5:  �$s=2;continue;    case 6:  $r=d.beginChunk();$s=9;case 9:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  $s=1;continue;    case 4:    if(a.$length===0){  7$s=2;continue;    }  Ch=a;    if((i=new $Uint64(0,h.$length),j=d.n,(i.$high>j.$high||(i.$high===j.$high&&i.$low>j.$low)))){  ph=$subslice(h,0,$flatten64(d.n));    }  �k=0;  �m=d.r.Read(h);$s=10;case 10:if($c){$c=false;m=m.$blk();}if(m&&m.$blk!==undefined){break s;}l=m;k=l[0];d.err=l[1];  �b=b+(k)>>0;  �a=$subslice(a,k);  �d.n=(n=d.n,o=new $Uint64(0,k),new $Uint64(n.$high-o.$high,n.$low-o.$low));  >if((p=d.n,(p.$high===0&&p.$low===0))&&$interfaceIsEqual(d.err,$ifaceNil)){$s=11;continue;}$s=12;continue;    case 11:  dr=E.ReadFull(d.r,$subslice(new P(d.buf),0,2));$s=13;case 13:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}q=r;d.err=q[1];    if($interfaceIsEqual(d.err,$ifaceNil)){    if(!((d.buf[0]===13))||!((d.buf[1]===10))){  �d.err=C.New("malformed chunked encoding");    }    }    case 12:    $s=1;continue;case 2:    s=b;t=d.err;b=s;c=t;$s=-1;return[b,c];return[b,c];    }return;}if($f===undefined){$f={$blk:G.ptr.prototype.Read};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.$s=$s;$f.$r=$r;return $f;};G.prototype.Read=function(a){return this.$val.Read(a);};chunkedReader
errors.Newio.ReadFullnet/http/internal.Pnet/http/internal.beginChunk~'net/http/internal.chunkHeaderAvailable~net/http/internal.chunkedReader net/http/internal.readChunkLineH��H=function(a){var $ptr,a,b,c,d,e,f,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  
&c=a.ReadSlice(10);$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[0];e=b[1];    if(!($interfaceIsEqual(e,$ifaceNil))){    if($interfaceIsEqual(e,E.EOF)){  
�e=E.ErrUnexpectedEOF;    }else if($interfaceIsEqual(e,A.ErrBufferFull)){  e=$pkg.ErrLineTooLong;    }  1$s=-1;return[P.nil,e];return[P.nil,e];    }    if(d.$length>=4096){  d$s=-1;return[P.nil,$pkg.ErrLineTooLong];return[P.nil,$pkg.ErrLineTooLong];    }  �d=I(d);  �f=K(d);d=f[0];e=f[1];    if(!($interfaceIsEqual(e,$ifaceNil))){  �$s=-1;return[P.nil,e];return[P.nil,e];    }  �$s=-1;return[d,$ifaceNil];return[d,$ifaceNil];    }return;}if($f===undefined){$f={$blk:H};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.$s=$s;$f.$r=$r;return $f;};readChunkLinebufio.ErrBufferFullio.EOFio.ErrUnexpectedEOF net/http/internal.ErrLineTooLongnet/http/internal.Pnet/http/internal.readChunkLine&net/http/internal.removeChunkExtension(net/http/internal.trimTrailingWhitespace (net/http/internal.trimTrailingWhitespaceI��I=function(a){var $ptr,a,b;  +while(true){if(!(a.$length>0&&J((b=a.$length-1>>0,((b<0||b>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+b]))))){break;}  [a=$subslice(a,0,(a.$length-1>>0));    }  preturn a;    };trimTrailingWhitespacenet/http/internal.isASCIISpace(net/http/internal.trimTrailingWhitespace net/http/internal.isASCIISpaceJQJ=function(a){var $ptr,a;  �return(a===32)||(a===9)||(a===10)||(a===13);    };isASCIISpacenet/http/internal.isASCIISpace &net/http/internal.removeChunkExtensionK��K=function(a){var $ptr,a,b;  �b=B.IndexByte(a,59);    if(b===-1){  �return[a,$ifaceNil];    }  �return[$subslice(a,0,b),$ifaceNil];    };removeChunkExtensionbytes.IndexByte&net/http/internal.removeChunkExtension "net/http/internal.NewChunkedWriterLQL=function(a){var $ptr,a;  �return new M.ptr(a);    };$pkg.NewChunkedWriter=L;NewChunkedWriter"net/http/internal.NewChunkedWriternet/http/internal.chunkedWriter ((*net/http/internal.chunkedWriter).Write��M.ptr.prototype.Write=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;  �d=this;    if(a.$length===0){    e=0;f=$ifaceNil;b=e;c=f;$s=-1;return[b,c];return[b,c];    }  Ih=D.Fprintf(d.Wire,"%x\r\n",new S([new $Int(a.$length)]));$s=1;case 1:if($c){$c=false;h=h.$blk();}if(h&&h.$blk!==undefined){break s;}g=h;c=g[1];    if(!($interfaceIsEqual(c,$ifaceNil))){    i=0;j=c;b=i;c=j;$s=-1;return[b,c];return[b,c];    }  �l=d.Wire.Write(a);$s=2;case 2:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}k=l;b=k[0];c=k[1];    if(!($interfaceIsEqual(c,$ifaceNil))){  �$s=-1;return[b,c];return[b,c];    }    if(!((b===a.$length))){  �c=E.ErrShortWrite;  $s=-1;return[b,c];return[b,c];    }  n=E.WriteString(d.Wire,"\r\n");$s=3;case 3:if($c){$c=false;n=n.$blk();}if(n&&n.$blk!==undefined){break s;}m=n;c=m[1];    if(!($interfaceIsEqual(c,$ifaceNil))){  O$s=-1;return[b,c];return[b,c];    }  ]o=$assertType(d.Wire,T,true);p=o[0];q=o[1];  Zif(q){$s=4;continue;}$s=5;continue;    case 4:  �r=p.Writer.Flush();$s=6;case 6:if($c){$c=false;r=r.$blk();}if(r&&r.$blk!==undefined){break s;}c=r;    case 5:  �$s=-1;return[b,c];return[b,c];    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.Write};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.Write=function(a){return this.$val.Write(a);};chunkedWriterfmt.Fprintfio.ErrShortWriteio.WriteString'net/http/internal.FlushAfterChunkWriternet/http/internal.Snet/http/internal.Tnet/http/internal.chunkedWriter ((*net/http/internal.chunkedWriter).Close�JM.ptr.prototype.Close=function(){var $ptr,a,b,c,d,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  �a=this;  �c=E.WriteString(a.Wire,"0\r\n");$s=1;case 1:if($c){$c=false;c=c.$blk();}if(c&&c.$blk!==undefined){break s;}b=c;d=b[1];  $s=-1;return d;return d;    }return;}if($f===undefined){$f={$blk:M.ptr.prototype.Close};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.$s=$s;$f.$r=$r;return $f;};M.prototype.Close=function(){return this.$val.Close();};chunkedWriterio.WriteStringnet/http/internal.chunkedWriter net/http/internal.parseHexUintO��O=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l;b=new $Uint64(0,0);c=$ifaceNil;  �d=a;e=0;while(true){if(!(e<d.$length)){break;}f=e;g=((e<0||e>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+e]);    if(48<=g&&g<=57){  g=g-48<<24>>>24;    }else if(97<=g&&g<=102){  <g=(g-97<<24>>>24)+10<<24>>>24;    }else if(65<=g&&g<=70){  mg=(g-65<<24>>>24)+10<<24>>>24;    }else{    h=new $Uint64(0,0);i=C.New("invalid byte in chunk length");b=h;c=i;return[b,c];    }    if(f===16){    j=new $Uint64(0,0);k=C.New("http chunk length too large");b=j;c=k;return[b,c];    }  b=$shiftLeft64(b,(4));  b=(l=new $Uint64(0,g),new $Uint64(b.$high|l.$high,(b.$low|l.$low)>>>0));    e++;}  .return[b,c];    };parseHexUint
errors.Newnet/http/internal.parseHexUint ��{"Base":8459,"Files":[{"Name":"/var/folders/r9/r3sk3cdd4t74q6fylx_h6wvm0000gp/T/gopherjs_playground.0IXW6NFDwd/goroot/src/net/http/internal/chunked.go","Base":1,"Size":6198,"Lines":[0,55,109,159,160,221,222,289,311,328,329,338,347,356,366,373,379,381,382,444,445,501,502,587,640,715,718,793,857,904,933,943,969,972,1002,1004,1005,1033,1052,1089,1100,1113,1115,1116,1156,1176,1193,1229,1249,1258,1261,1296,1316,1325,1328,1344,1362,1365,1367,1368,1423,1445,1457,1483,1525,1528,1542,1544,1545,1607,1628,1645,1689,1739,1774,1784,1789,1808,1820,1824,1843,1852,1856,1868,1900,1922,1926,1939,1970,1980,1993,2014,2069,2107,2141,2206,2254,2309,2315,2320,2324,2327,2345,2347,2348,2391,2437,2489,2542,2596,2625,2642,2682,2743,2764,2793,2834,2858,2862,2880,2883,2913,2942,2945,2976,3010,3027,3045,3048,3063,3065,3066,3113,3160,3179,3182,3192,3194,3195,3228,3284,3286,3287,3347,3363,3381,3405,3433,3473,3527,3560,3577,3593,3596,3657,3716,3737,3759,3761,3762,3843,3924,3992,3995,4062,4125,4191,4260,4296,4348,4374,4376,4377,4452,4514,4542,4558,4560,4561,4613,4692,4755,4820,4821,4891,4912,4928,4931,4932,5001,5017,5020,5067,5076,5079,5100,5125,5134,5137,5196,5205,5208,5261,5280,5283,5291,5293,5294,5335,5379,5391,5393,5394,5463,5531,5601,5666,5731,5767,5782,5784,5785,5837,5860,5871,5900,5915,5944,5964,5993,6013,6024,6080,6084,6099,6154,6158,6168,6185,6188,6196],"Infos":null},{"Name":"/var/folders/r9/r3sk3cdd4t74q6fylx_h6wvm0000gp/T/gopherjs_playground.0IXW6NFDwd/goroot/src/net/http/internal/testcert.go","Base":6200,"Size":2258,"Lines":[0,55,109,159,160,177,178,234,300,334,471,527,592,657,722,787,852,917,982,1047,1112,1177,1242,1255,1283,1284,1338,1397,1462,1527,1592,1657,1722,1787,1852,1917,1982,2047,2112,2177,2226],"Infos":null}]}
 