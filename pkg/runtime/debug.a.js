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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �3|��runtime/debugdebugosruntimesorttime�e
$$ exports $$
pv0
debugruntime/debug	FreeOSMemory    GCStats LastGCTimetimetimesec
 nsec locLocationname  zonezonename  offset 
isDST    txzoneTranswhen
 
index 
isstd  
isutc    cacheStart
 cacheEnd
 cacheZoneJ getlD  D StringlD    lookuplDsec

name offset
isDST 
start
end
 lookupFirstZonelD   firstZoneUsedlD    lookupNamelDname unix
offset
isDST ok   TStringt>    Formatt>layout    AppendFormatt>b2layout  2 
Aftert>u>   Beforet>u>   
Equalt>u>   IsZerot>    abst>   locabst> name offsetabs Datet> year
month
MonthStringm�    day Yeart>   
Montht>  � Dayt>   Weekdayt>  WeekdayStringd�     ISOWeekt> yearweek 
Clockt> hourminsec Hourt>   Minutet>   Secondt>   Nanosecondt>   YearDayt>   Addt>dDuration

Stringd�    Nanosecondsd�  
 Secondsd�   Minutesd�   
Hoursd�    > Subt>u> � AddDatet>
yearsmonthsdays > datet>full year
month�dayyday UTCt>  > 
Localt>  > Int>locD > Locationt>  D Zonet> name offset Unixt>  
 UnixNanot>  
 MarshalBinaryt>  2 6 UnmarshalBinaryt>data2 6 GobEncodet>  2 6 GobDecodet>data2 6 MarshalJSONt>  2 6 UnmarshalJSONt>data2 6 MarshalTextt>  2 6 UnmarshalTextt>data2 6 Truncatet>d� > 
Roundt>d� >  
NumGC
 PauseTotal� 
Pause� PauseEnd> PauseQuantiles�  	PrintStack    	ReadGCStats 
stats:  	SetGCPercent percent  	SetMaxStack 
bytes  	SetMaxThreads threads  	SetPanicOnFault enabled    	SetTraceback 
level   	
Stack   2 	WriteHeapDump fd  DD=$packages["os"];a    $r=D.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} AA=$packages["runtime"];a    $r=A.$init();$s=2;case 2:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} BB=$packages["sort"];a    $r=B.$init();$s=3;case 3:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} CC=$packages["time"];a    $r=C.$init();$s=4;case 4:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} F�F=$pkg.GCStats=$newType(0,$kindStruct,"debug.GCStats",true,"runtime/debug",true,function(LastGC_,NumGC_,PauseTotal_,Pause_,PauseEnd_,PauseQuantiles_){this.$val=this;if(arguments.length===0){this.LastGC=new C.Time.ptr(new $Int64(0,0),0,AA.nil);this.NumGC=new $Int64(0,0);this.PauseTotal=new C.Duration(0,0);this.Pause=W.nil;this.PauseEnd=Y.nil;this.PauseQuantiles=W.nil;return;}this.LastGC=LastGC_;this.NumGC=NumGC_;this.PauseTotal=PauseTotal_;this.Pause=Pause_;this.PauseEnd=PauseEnd_;this.PauseQuantiles=PauseQuantiles_;});��F.init("",[{prop:"LastGC",name:"LastGC",exported:true,typ:C.Time,tag:""},{prop:"NumGC",name:"NumGC",exported:true,typ:$Int64,tag:""},{prop:"PauseTotal",name:"PauseTotal",exported:true,typ:C.Duration,tag:""},{prop:"Pause",name:"Pause",exported:true,typ:W,tag:""},{prop:"PauseEnd",name:"PauseEnd",exported:true,typ:Y,tag:""},{prop:"PauseQuantiles",name:"PauseQuantiles",exported:true,typ:W,tag:""}]);GCStatsruntime/debug.AAruntime/debug.GCStatsruntime/debug.Wruntime/debug.Ytime.Durationtime.Location	time.Time H]H=$pkg.byDuration=$newType(12,$kindSlice,"debug.byDuration",true,"runtime/debug",false,null);��H.methods=[{prop:"Len",name:"Len",pkg:"",typ:$funcType([],[$Int],false)},{prop:"Swap",name:"Swap",pkg:"",typ:$funcType([$Int,$Int],[],false)},{prop:"Less",name:"Less",pkg:"",typ:$funcType([$Int,$Int],[$Bool],false)}];H.init(C.Duration);
byDurationruntime/debug.byDurationtime.Duration WW=$sliceType(C.Duration);Wtime.Duration XX=$ptrType(W);Xruntime/debug.W YY=$sliceType(C.Time);Y	time.Time ZZ=$sliceType($Uint8);Z AAAA=$ptrType(C.Location);AAtime.Location runtime/debug.setGCPercentE0E=function(b){var $ptr,b;   @return 100;    };setGCPercentruntime/debug.setGCPercent runtime/debug.ReadGCStatsG�)G=function(b){var $ptr,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,$s,$r;$s=0;var $f,$c=false;if(this!==undefined&&this.$blk!==undefined){$f=this;$c=true;$ptr=$f.$ptr;b=$f.b;c=$f.c;d=$f.d;e=$f.e;f=$f.f;g=$f.g;h=$f.h;i=$f.i;j=$f.j;k=$f.k;l=$f.l;m=$f.m;n=$f.n;o=$f.o;p=$f.p;q=$f.q;r=$f.r;s=$f.s;t=$f.t;u=$f.u;v=$f.v;w=$f.w;x=$f.x;y=$f.y;z=$f.z;$s=$f.$s;$r=$f.$r;}s:while(true){switch($s){case 0:    if(b.Pause.$capacity<515){  �b.Pause=$makeSlice(W,515);    }  &R((b.$ptr_Pause||(b.$ptr_Pause=new X(function(){return this.$target.Pause;},function($v){this.$target.Pause=$v;},b))));  Ac=b.Pause.$length-3>>0;  \C.Time.copy(b.LastGC,C.Unix(new $Int64(0,0),(d=(e=b.Pause,((c<0||c>=e.$length)?$throwRuntimeError("index out of range"):e.$array[e.$offset+c])),new $Int64(d.$high,d.$low))));  �b.NumGC=(f=(g=b.Pause,h=c+1>>0,((h<0||h>=g.$length)?$throwRuntimeError("index out of range"):g.$array[g.$offset+h])),new $Int64(f.$high,f.$low));  �b.PauseTotal=(i=b.Pause,j=c+2>>0,((j<0||j>=i.$length)?$throwRuntimeError("index out of range"):i.$array[i.$offset+j]));  �c=(k=c/(2),(k===k&&k!==1/0&&k!==-1/0)?k>>0:$throwRuntimeError("integer divide by zero"));  		b.Pause=$subslice(b.Pause,0,c);    if(b.PauseEnd.$capacity<256){  	Ob.PauseEnd=$makeSlice(Y,0,256);    }  	�b.PauseEnd=$subslice(b.PauseEnd,0,0);  	�l=$subslice(b.Pause,c,(c+c>>0));m=0;while(true){if(!(m<l.$length)){break;}n=((m<0||m>=l.$length)?$throwRuntimeError("index out of range"):l.$array[l.$offset+m]);  	�b.PauseEnd=$append(b.PauseEnd,C.Unix(new $Int64(0,0),new $Int64(n.$high,n.$low)));    m++;}  
if(b.PauseQuantiles.$length>0){$s=1;continue;}$s=2;continue;    case 1:  
?if(c===0){$s=3;continue;}$s=4;continue;    case 3:  
No=b.PauseQuantiles;p=0;while(true){if(!(p<o.$length)){break;}q=p;  
x(r=b.PauseQuantiles,((q<0||q>=r.$length)?$throwRuntimeError("index out of range"):r.$array[r.$offset+q]=new C.Duration(0,0)));    p++;}    $s=5;continue;case 4:  s=$subslice(b.Pause,c,(c+c>>0));  ?$copySlice(s,b.Pause);  \$r=B.Sort($subslice(new H(s.$array),s.$offset,s.$offset+s.$length));$s=6;case 6:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;}  }t=b.PauseQuantiles.$length-1>>0;  �u=0;while(true){if(!(u<t)){break;}  �(x=b.PauseQuantiles,((u<0||u>=x.$length)?$throwRuntimeError("index out of range"):x.$array[x.$offset+u]=(v=(w=($imul(s.$length,u))/t,(w===w&&w!==1/0&&w!==-1/0)?w>>0:$throwRuntimeError("integer divide by zero")),((v<0||v>=s.$length)?$throwRuntimeError("index out of range"):s.$array[s.$offset+v]))));  �u=u+(1)>>0;    }  �(z=b.PauseQuantiles,((t<0||t>=z.$length)?$throwRuntimeError("index out of range"):z.$array[z.$offset+t]=(y=s.$length-1>>0,((y<0||y>=s.$length)?$throwRuntimeError("index out of range"):s.$array[s.$offset+y]))));    case 5:    case 2:    $s=-1;return;return;}return;}if($f===undefined){$f={$blk:G};}$f.$ptr=$ptr;$f.b=b;$f.c=c;$f.d=d;$f.e=e;$f.f=f;$f.g=g;$f.h=h;$f.i=i;$f.j=j;$f.k=k;$f.l=l;$f.m=m;$f.n=n;$f.o=o;$f.p=p;$f.q=q;$f.r=r;$f.s=s;$f.t=t;$f.u=u;$f.v=v;$f.w=w;$f.x=x;$f.y=y;$f.z=z;$f.$s=$s;$f.$r=$r;return $f;};$pkg.ReadGCStats=G;ReadGCStats
runtime/debug.ReadGCStatsruntime/debug.Wruntime/debug.Xruntime/debug.Yruntime/debug.byDurationruntime/debug.readGCStats	sort.Sorttime.Duration	time.Time	time.Unix (runtime/debug.byDuration).Len��H.prototype.Len=function(){var $ptr,b;  _b=this;  �return b.$length;    };$ptrType(H).prototype.Len=function(){return this.$get().Len();};
byDurationruntime/debug.byDuration (runtime/debug.byDuration).Swap��H.prototype.Swap=function(b,c){var $ptr,b,c,d,e,f;  �d=this;  �e=((c<0||c>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+c]);f=((b<0||b>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+b]);((b<0||b>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+b]=e);((c<0||c>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+c]=f);    };$ptrType(H).prototype.Swap=function(b,c){return this.$get().Swap(b,c);};
byDurationruntime/debug.byDuration (runtime/debug.byDuration).Less�~H.prototype.Less=function(b,c){var $ptr,b,c,d,e,f;  �d=this;  return(e=((b<0||b>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+b]),f=((c<0||c>=d.$length)?$throwRuntimeError("index out of range"):d.$array[d.$offset+c]),(e.$high<f.$high||(e.$high===f.$high&&e.$low<f.$low)));    };$ptrType(H).prototype.Less=function(b,c){return this.$get().Less(b,c);};
byDurationruntime/debug.byDuration runtime/debug.SetGCPercentIeI=function(b){var $ptr,b,c;  �c=E((b>>0));  A.GC();  !return(c>>0);    };$pkg.SetGCPercent=I;SetGCPercent
runtime.GCruntime/debug.SetGCPercentruntime/debug.setGCPercent runtime/debug.FreeOSMemoryJ:J=function(){var $ptr;  FS();    };$pkg.FreeOSMemory=J;FreeOSMemoryruntime/debug.FreeOSMemoryruntime/debug.freeOSMemory runtime/debug.SetMaxStackKDK=function(b){var $ptr,b;  Hreturn T(b);    };$pkg.SetMaxStack=K;SetMaxStackruntime/debug.SetMaxStackruntime/debug.setMaxStack runtime/debug.SetMaxThreadsLFL=function(b){var $ptr,b;  �return V(b);    };$pkg.SetMaxThreads=L;SetMaxThreadsruntime/debug.SetMaxThreadsruntime/debug.setMaxThreads runtime/debug.SetPanicOnFaultMHM=function(b){var $ptr,b;  0return U(b);    };$pkg.SetPanicOnFault=M;SetPanicOnFaultruntime/debug.SetPanicOnFaultruntime/debug.setPanicOnFault runtime/debug.WriteHeapDumpNwN=function(){$throwRuntimeError("native function not implemented: runtime/debug.WriteHeapDump");};$pkg.WriteHeapDump=N;WriteHeapDumpruntime/debug.WriteHeapDump runtime/debug.SetTracebackOuO=function(){$throwRuntimeError("native function not implemented: runtime/debug.SetTraceback");};$pkg.SetTraceback=O;SetTracebackruntime/debug.SetTraceback runtime/debug.PrintStackPHP=function(){var $ptr;  �D.Stderr.Write(Q());    };$pkg.PrintStack=P;
PrintStack	os.Stderrruntime/debug.PrintStackruntime/debug.Stack runtime/debug.StackQ��Q=function(){var $ptr,b,c;  �b=$makeSlice(Z,1024);  �while(true){  �c=A.Stack(b,false);    if(c<b.$length){  !return $subslice(b,0,c);    }  6b=$makeSlice(Z,($imul(2,b.$length)));    }    };$pkg.Stack=Q;Stackruntime.Stackruntime/debug.Stackruntime/debug.Z runtime/debug.readGCStatsR`R=function(){$throwRuntimeError("native function not implemented: runtime/debug.readGCStats");};readGCStatsruntime/debug.readGCStats runtime/debug.freeOSMemorySaS=function(){$throwRuntimeError("native function not implemented: runtime/debug.freeOSMemory");};freeOSMemoryruntime/debug.freeOSMemory runtime/debug.setMaxStackT`T=function(){$throwRuntimeError("native function not implemented: runtime/debug.setMaxStack");};setMaxStackruntime/debug.setMaxStack runtime/debug.setPanicOnFaultUdU=function(){$throwRuntimeError("native function not implemented: runtime/debug.setPanicOnFault");};setPanicOnFaultruntime/debug.setPanicOnFault runtime/debug.setMaxThreadsVbV=function(){$throwRuntimeError("native function not implemented: runtime/debug.setMaxThreads");};setMaxThreadsruntime/debug.setMaxThreads ��{"Base":8430,"Files":[{"Name":"/src/runtime/debug/debug.go","Base":1,"Size":76,"Lines":[0,13,14,28,29,62,74],"Infos":null},{"Name":"/var/folders/r9/r3sk3cdd4t74q6fylx_h6wvm0000gp/T/gopherjs_playground.0IXW6NFDwd/goroot/src/runtime/debug/garbage.go","Base":78,"Size":7191,"Lines":[0,55,109,159,160,174,175,184,195,203,211,213,214,279,301,360,425,492,560,638,670,672,673,742,809,885,952,1029,1092,1163,1206,1241,1303,1366,1430,1486,1511,1569,1607,1659,1662,1663,1729,1797,1860,1919,1987,2007,2034,2061,2113,2152,2189,2234,2265,2266,2303,2353,2356,2393,2436,2503,2506,2507,2543,2557,2598,2630,2635,2646,2711,2764,2798,2827,2860,2899,2928,2983,2988,3040,3044,3047,3049,3050,3082,3083,3141,3209,3272,3273,3336,3406,3487,3533,3602,3652,3706,3743,3780,3794,3811,3813,3814,3873,3933,4000,4065,4087,4103,4105,4106,4160,4204,4268,4292,4337,4413,4416,4480,4550,4567,4601,4628,4630,4631,4692,4764,4799,4846,4888,4891,4968,5042,5130,5203,5206,5272,5340,5411,5449,5480,5482,5483,5556,5631,5710,5778,5850,5922,5977,6035,6071,6113,6146,6148,6149,6218,6254,6257,6330,6400,6467,6528,6531,6604,6635,6636,6704,6774,6807,6870,6935,6994,7048,7113,7159],"Infos":null},{"Name":"/var/folders/r9/r3sk3cdd4t74q6fylx_h6wvm0000gp/T/gopherjs_playground.0IXW6NFDwd/goroot/src/runtime/debug/stack.go","Base":7270,"Size":756,"Lines":[0,55,109,159,160,236,257,271,272,281,287,298,300,301,383,403,429,431,432,505,587,609,636,643,676,696,714,718,751,754],"Infos":null},{"Name":"/var/folders/r9/r3sk3cdd4t74q6fylx_h6wvm0000gp/T/gopherjs_playground.0IXW6NFDwd/goroot/src/runtime/debug/stubs.go","Base":8027,"Size":402,"Lines":[0,55,109,159,160,174,175,184,192,194,195,230,265,285,311,342,374],"Infos":null}]}
 