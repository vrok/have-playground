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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �1���encoding/hexhexbyteserrorsfmtio�m
$$ exports $$
pv0hexencoding/hex	Decode dst2src:  6 	DecodeString s  2 6 	DecodedLen x  	Dump data2   	Dumper wWriterioio 
Write p2nerr6   WriteCloserCloser 
Close   6  H   	Encode dst2src\  	EncodeToString src2   	EncodedLen n  ErrLength6 InvalidByteError 2
Errored    AA=$packages["bytes"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["errors"];a    $r=B.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["fmt"];a    $r=C.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} DD=$packages["io"];a    $r=D.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} GdG=$pkg.InvalidByteError=$newType(1,$kindUint8,"hex.InvalidByteError",true,"encoding/hex",true,null);QG.methods=[{prop:"Error",name:"Error",pkg:"",typ:$funcType([],[$String],false)}];InvalidByteErrorencoding/hex.InvalidByteError O�EO=$pkg.dumper=$newType(0,$kindStruct,"hex.dumper",true,"encoding/hex",false,function(w_,rightChars_,buf_,used_,n_){this.$val=this;if(arguments.length===0){this.w=$ifaceNil;this.rightChars=U.zero();this.buf=V.zero();this.used=0;this.n=0;return;}this.w=w_;this.rightChars=rightChars_;this.buf=buf_;this.used=used_;this.n=n_;});��W.methods=[{prop:"Write",name:"Write",pkg:"",typ:$funcType([R],[$Int,$error],false)},{prop:"Close",name:"Close",pkg:"",typ:$funcType([],[$error],false)}];�3O.init("encoding/hex",[{prop:"w",name:"w",exported:false,typ:D.Writer,tag:""},{prop:"rightChars",name:"rightChars",exported:false,typ:U,tag:""},{prop:"buf",name:"buf",exported:false,typ:V,tag:""},{prop:"used",name:"used",exported:false,typ:$Int,tag:""},{prop:"n",name:"n",exported:false,typ:$Uint,tag:""}]);dumperencoding/hex.Rencoding/hex.Uencoding/hex.Vencoding/hex.Wencoding/hex.dumper	io.Writer QQ=$sliceType($emptyInterface);Q RR=$sliceType($Uint8);R SS=$arrayType($Uint8,4);S TT=$arrayType($Uint8,64);T UU=$arrayType($Uint8,18);U VV=$arrayType($Uint8,14);V WW=$ptrType(O);Wencoding/hex.dumper 	ErrLength A    $pkg.ErrLength=B.New("encoding/hex: odd length hex string");encoding/hex.ErrLength
errors.New encoding/hex.EncodedLenEIE=function(a){var $ptr,a;  �return $imul(a,2);    };$pkg.EncodedLen=E;
EncodedLenencoding/hex.EncodedLen encoding/hex.EncodeF�*F=function(a,b){var $ptr,a,b,c,d,e,f,g,h;  �c=b;d=0;while(true){if(!(d<c.$length)){break;}e=d;f=((d<0||d>=c.$length)?$throwRuntimeError("index out of range"):c.$array[c.$offset+d]);  �(g=$imul(e,2),((g<0||g>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+g]="0123456789abcdef".charCodeAt((f>>>4<<24>>>24))));  �(h=($imul(e,2))+1>>0,((h<0||h>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+h]="0123456789abcdef".charCodeAt(((f&15)>>>0))));    d++;}  return $imul(b.$length,2);    };$pkg.Encode=F;Encodeencoding/hex.Encode %(encoding/hex.InvalidByteError).Error�UG.prototype.Error=function(){var $ptr,a,b,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:  a=this.$val;  =b=C.Sprintf("encoding/hex: invalid byte: %#U",new Q([new $Int32((a>>0))]));$s=1;case 1:if($c){$c=false;b=b.$blk();}if(b&&b.$blk!==undefined){break s;}$s=-1;return b;return b;    }return;}if($f===undefined){$f={$blk:G.prototype.Error};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.$s=$s;$f.$r=$r;return $f;};$ptrType(G).prototype.Error=function(){return new G(this.$get()).Error();};InvalidByteErrorencoding/hex.InvalidByteErrorencoding/hex.Qfmt.Sprintf encoding/hex.DecodedLenH��H=function(a){var $ptr,a,b;  �return(b=a/2,(b===b&&b!==1/0&&b!==-1/0)?b>>0:$throwRuntimeError("integer divide by zero"));    };$pkg.DecodedLen=H;
DecodedLenencoding/hex.DecodedLen encoding/hex.DecodeI�xI=function(a,b){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o;    if((c=b.$length%2,c===c?c:$throwRuntimeError("integer divide by zero"))===1){  �return[0,$pkg.ErrLength];    }  �d=0;while(true){if(!(d<(e=b.$length/2,(e===e&&e!==1/0&&e!==-1/0)?e>>0:$throwRuntimeError("integer divide by zero")))){break;}  �f=J((g=$imul(d,2),((g<0||g>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+g])));h=f[0];i=f[1];    if(!i){  return[0,new G(((j=$imul(d,2),((j<0||j>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+j]))<<24>>>24))];    }  Jk=J((l=($imul(d,2))+1>>0,((l<0||l>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+l])));m=k[0];i=k[1];    if(!i){  yreturn[0,new G(((n=($imul(d,2))+1>>0,((n<0||n>=b.$length)?$throwRuntimeError("index out of range"):b.$array[b.$offset+n]))<<24>>>24))];    }  �((d<0||d>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+d]=((((h<<4<<24>>>24))|m)>>>0));  �d=d+(1)>>0;    }  �return[(o=b.$length/2,(o===o&&o!==1/0&&o!==-1/0)?o>>0:$throwRuntimeError("integer divide by zero")),$ifaceNil];    };$pkg.Decode=I;Decodeencoding/hex.Decodeencoding/hex.ErrLengthencoding/hex.InvalidByteErrorencoding/hex.fromHexChar encoding/hex.fromHexCharJ�J=function(a){var $ptr,a;    if(48<=a&&a<=57){  xreturn[a-48<<24>>>24,true];    }else if(97<=a&&a<=102){  �return[(a-97<<24>>>24)+10<<24>>>24,true];    }else if(65<=a&&a<=70){  �return[(a-65<<24>>>24)+10<<24>>>24,true];    }  return[0,false];    };fromHexCharencoding/hex.fromHexChar encoding/hex.EncodeToStringK��K=function(a){var $ptr,a,b;  zb=$makeSlice(R,E(a.$length));  �F(b,a);  �return $bytesToString(b);    };$pkg.EncodeToString=K;EncodeToStringencoding/hex.Encodeencoding/hex.EncodeToStringencoding/hex.EncodedLenencoding/hex.R encoding/hex.DecodeStringL��L=function(a){var $ptr,a,b,c,d,e;  	Gb=new R($stringToBytes(a));  	Yc=$makeSlice(R,H(b.$length));  	�d=I(c,b);e=d[1];    if(!($interfaceIsEqual(e,$ifaceNil))){  	�return[R.nil,e];    }  	�return[c,$ifaceNil];    };$pkg.DecodeString=L;DecodeStringencoding/hex.Decodeencoding/hex.DecodeStringencoding/hex.DecodedLenencoding/hex.R encoding/hex.DumpM��M=function(a){var $ptr,a,b,c,d,e,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=[b];  
�b[0]=new A.Buffer.ptr(R.nil,0,S.zero(),T.zero(),0);  
�c=N(b[0]);  
�d=c.Write(a);$s=1;case 1:if($c){$c=false;d=d.$blk();}if(d&&d.$blk!==undefined){break s;}d;  
�e=c.Close();$s=2;case 2:if($c){$c=false;e=e.$blk();}if(e&&e.$blk!==undefined){break s;}e;  
�$s=-1;return b[0].String();return b[0].String();    }return;}if($f===undefined){$f={$blk:M};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.$s=$s;$f.$r=$r;return $f;};$pkg.Dump=M;Dumpbytes.Bufferencoding/hex.Dumpencoding/hex.Dumperencoding/hex.Rencoding/hex.Sencoding/hex.T encoding/hex.DumperN]N=function(a){var $ptr,a;  �return new O.ptr(a,U.zero(),V.zero(),0,0);    };$pkg.Dumper=N;Dumperencoding/hex.Dumperencoding/hex.Uencoding/hex.Vencoding/hex.dumper encoding/hex.toCharPXP=function(a){var $ptr,a;    if(a<32||a>126){  �return 46;    }  �return a;    };toCharencoding/hex.toChar (*encoding/hex.dumper).Write�	O.ptr.prototype.Write=function(a){var $ptr,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:b=0;c=$ifaceNil;  �d=this;  �e=a;f=0;case 1:if(!(f<e.$length)){$s=2;continue;}g=f;  if(d.used===0){$s=3;continue;}$s=4;continue;    case 3:  dd.buf[0]=((d.n>>>24>>>0)<<24>>>24);  �d.buf[1]=((d.n>>>16>>>0)<<24>>>24);  �d.buf[2]=((d.n>>>8>>>0)<<24>>>24);  �d.buf[3]=(d.n<<24>>>24);  �F($subslice(new R(d.buf),4),$subslice(new R(d.buf),0,4));  �d.buf[12]=32;  d.buf[13]=32;  i=d.w.Write($subslice(new R(d.buf),4));$s=5;case 5:if($c){$c=false;i=i.$blk();}if(i&&i.$blk!==undefined){break s;}h=i;c=h[1];    if(!($interfaceIsEqual(c,$ifaceNil))){  P$s=-1;return[b,c];return[b,c];    }    case 4:  bF(new R(d.buf),$subslice(a,g,(g+1>>0)));  �d.buf[2]=32;  �j=3;    if(d.used===7){  �d.buf[3]=32;  �j=4;    }else if(d.used===15){  xd.buf[3]=32;  �d.buf[4]=124;  �j=5;    }  �l=d.w.Write($subslice(new R(d.buf),0,j));$s=6;case 6:if($c){$c=false;l=l.$blk();}if(l&&l.$blk!==undefined){break s;}k=l;c=k[1];    if(!($interfaceIsEqual(c,$ifaceNil))){  �$s=-1;return[b,c];return[b,c];    }  �b=b+(1)>>0;  �(m=d.rightChars,n=d.used,((n<0||n>=m.length)?$throwRuntimeError("index out of range"):m[n]=P(((g<0||g>=a.$length)?$throwRuntimeError("index out of range"):a.$array[a.$offset+g]))));  d.used=d.used+(1)>>0;  "d.n=d.n+(1)>>>0;  *if(d.used===16){$s=7;continue;}$s=8;continue;    case 7:  ?d.rightChars[16]=124;  Yd.rightChars[17]=10;  tp=d.w.Write(new R(d.rightChars));$s=9;case 9:if($c){$c=false;p=p.$blk();}if(p&&p.$blk!==undefined){break s;}o=p;c=o[1];    if(!($interfaceIsEqual(c,$ifaceNil))){  �$s=-1;return[b,c];return[b,c];    }  �d.used=0;    case 8:    f++;$s=1;continue;case 2:  �$s=-1;return[b,c];return[b,c];    }return;}if($f===undefined){$f={$blk:O.ptr.prototype.Write};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.$s=$s;$f.$r=$r;return $f;};O.prototype.Write=function(a){return this.$val.Write(a);};dumperencoding/hex.Encodeencoding/hex.Rencoding/hex.dumperencoding/hex.toChar (*encoding/hex.dumper).Close��O.ptr.prototype.Close=function(){var $ptr,a,b,c,d,e,f,g,h,i,j,k,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;a=$f.a;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:a=$ifaceNil;  �b=this;    if(b.used===0){  V$s=-1;return a;return a;    }  ab.buf[0]=32;  qb.buf[1]=32;  �b.buf[2]=32;  �b.buf[3]=32;  �b.buf[4]=124;  �c=b.used;  �case 1:if(!(b.used<16)){$s=2;continue;}  �d=3;    if(b.used===7){  �d=4;    }else if(b.used===15){  d=5;    }  $f=b.w.Write($subslice(new R(b.buf),0,d));$s=3;case 3:if($c){$c=false;f=f.$blk();}if(f&&f.$blk!==undefined){break s;}e=f;a=e[1];    if(!($interfaceIsEqual(a,$ifaceNil))){  W$s=-1;return a;return a;    }  db.used=b.used+(1)>>0;    $s=1;continue;case 2:  q(g=b.rightChars,((c<0||c>=g.length)?$throwRuntimeError("index out of range"):g[c]=124));  �(h=b.rightChars,i=c+1>>0,((i<0||i>=h.length)?$throwRuntimeError("index out of range"):h[i]=10));  �k=b.w.Write($subslice(new R(b.rightChars),0,(c+2>>0)));$s=4;case 4:if($c){$c=false;k=k.$blk();}if(k&&k.$blk!==undefined){break s;}j=k;a=j[1];  �$s=-1;return a;return a;    }return;}if($f===undefined){$f={$blk:O.ptr.prototype.Close};}$f.$ptr=$ptr;$f.a=a;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.$s=$s;$f.$r=$r;return $f;};O.prototype.Close=function(){return this.$val.Close();};dumperencoding/hex.Rencoding/hex.dumper ��{"Base":5091,"Files":[{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.3yb4TYabM8/goroot/src/encoding/hex/hex.go","Base":1,"Size":5089,"Lines":[0,55,109,159,160,221,233,234,243,252,262,269,275,277,278,314,315,382,426,427,475,532,607,650,685,710,738,770,773,774,795,797,798,854,920,921,1012,1039,1040,1083,1147,1149,1150,1194,1195,1271,1306,1309,1392,1436,1458,1480,1483,1484,1519,1552,1563,1603,1607,1642,1653,1695,1699,1723,1726,1727,1753,1755,1756,1831,1871,1881,1909,1932,1960,1988,2016,2044,2047,2048,2065,2067,2068,2127,2168,2211,2229,2249,2251,2252,2327,2373,2391,2434,2462,2479,2497,2500,2517,2519,2520,2600,2675,2707,2729,2753,2773,2789,2810,2812,2813,2891,2970,2979,3021,3043,3045,3046,3067,3089,3110,3131,3187,3230,3232,3233,3260,3284,3297,3300,3310,3312,3313,3370,3398,3481,3563,3586,3605,3659,3680,3710,3740,3769,3793,3825,3844,3863,3896,3915,3926,3931,3935,3967,3984,3993,4012,4066,4084,4093,4120,4176,4212,4230,4248,4257,4261,4293,4311,4321,4325,4331,4372,4383,4391,4411,4437,4464,4503,4522,4533,4538,4552,4556,4559,4567,4569,4570,4609,4673,4691,4700,4703,4719,4735,4751,4767,4783,4801,4820,4829,4848,4857,4884,4893,4897,4929,4947,4957,4961,4972,4975,5003,5034,5079,5087],"Infos":null}]}
 