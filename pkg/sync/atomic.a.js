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
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   �/��sync/atomicatomicgithub.com/gopherjs/gopherjs/js�D
$$ exports $$
pv0atomicsync/atomic<	AddInt32 addr
delta  	AddInt64 addr

delta
 
 	AddUint32 addr
delta  	AddUint64 addr
delta  	AddUintptr addr
delta  	&CompareAndSwapInt32 addroldnew   	&CompareAndSwapInt64 addr
old
new
   	*CompareAndSwapPointer addr0old0new0   	(CompareAndSwapUint32 addroldnew   	(CompareAndSwapUint64 addroldnew   	*CompareAndSwapUintptr addroldnew   	LoadInt32 addr  	LoadInt64 addr
 
 	LoadPointer addr0 0 	LoadUint32 addr  	LoadUint64 addr  	LoadUintptr addr  	StoreInt32 addrval  	StoreInt64 addr
val
  	StorePointer addr0val0  	StoreUint32 addrval  	StoreUint64 addrval  	StoreUintptr addrval  	SwapInt32 addrnew  	SwapInt64 addr
new
 
 	SwapPointer addr0new0 0 	SwapUint32 addrnew  	SwapUint64 addrnew  	SwapUintptr addrnew  
Value noCopy noCopy  Lock �    v    Loadv� x   
Storev�x    )A/A=$packages["github.com/gopherjs/gopherjs/js"];a    $r=A.$init();$s=1;case 1:if($c){$c=false;$r=$r.$blk();}if($r&&$r.$blk!==undefined){break s;} AF��AF=$pkg.Value=$newType(0,$kindStruct,"atomic.Value",true,"sync/atomic",true,function(noCopy_,v_){this.$val=this;if(arguments.length===0){this.noCopy=new AJ.ptr();this.v=$ifaceNil;return;}this.noCopy=noCopy_;this.v=v_;});��AK.methods=[{prop:"Load",name:"Load",pkg:"",typ:$funcType([],[$emptyInterface],false)},{prop:"Store",name:"Store",pkg:"",typ:$funcType([$emptyInterface],[],false)}];��AF.init("sync/atomic",[{prop:"noCopy",name:"noCopy",exported:false,typ:AJ,tag:""},{prop:"v",name:"v",exported:false,typ:$emptyInterface,tag:""}]);Valuesync/atomic.AKsync/atomic.Valuesync/atomic.noCopy AG��AG=$pkg.ifaceWords=$newType(0,$kindStruct,"atomic.ifaceWords",true,"sync/atomic",false,function(typ_,data_){this.$val=this;if(arguments.length===0){this.typ=0;this.data=0;return;}this.typ=typ_;this.data=data_;});��AG.init("sync/atomic",[{prop:"typ",name:"typ",exported:false,typ:$UnsafePointer,tag:""},{prop:"data",name:"data",exported:false,typ:$UnsafePointer,tag:""}]);
ifaceWordssync/atomic.ifaceWords AJ��AJ=$pkg.noCopy=$newType(0,$kindStruct,"atomic.noCopy",true,"sync/atomic",false,function(){this.$val=this;if(arguments.length===0){return;}});IAL.methods=[{prop:"Lock",name:"Lock",pkg:"",typ:$funcType([],[],false)}];AJ.init("",[]);noCopysync/atomic.ALsync/atomic.noCopy AKAK=$ptrType(AF);AKsync/atomic.Value ALAL=$ptrType(AJ);ALsync/atomic.noCopy sync/atomic.SwapInt32BnB=function(ad,ae){var $ptr,ad,ae,af;   �af=ad.$get();   �ad.$set(ae);   �return af;    };$pkg.SwapInt32=B;	SwapInt32sync/atomic.SwapInt32 sync/atomic.SwapInt64CnC=function(ad,ae){var $ptr,ad,ae,af;   �af=ad.$get();   �ad.$set(ae);   �return af;    };$pkg.SwapInt64=C;	SwapInt64sync/atomic.SwapInt64 sync/atomic.SwapUint32DoD=function(ad,ae){var $ptr,ad,ae,af;  ?af=ad.$get();  Mad.$set(ae);  Zreturn af;    };$pkg.SwapUint32=D;
SwapUint32sync/atomic.SwapUint32 sync/atomic.SwapUint64EoE=function(ad,ae){var $ptr,ad,ae,af;  �af=ad.$get();  �ad.$set(ae);  �return af;    };$pkg.SwapUint64=E;
SwapUint64sync/atomic.SwapUint64 sync/atomic.SwapUintptrFpF=function(ad,ae){var $ptr,ad,ae,af;  �af=ad.$get();  ad.$set(ae);  return af;    };$pkg.SwapUintptr=F;SwapUintptrsync/atomic.SwapUintptr sync/atomic.SwapPointerGpG=function(ad,ae){var $ptr,ad,ae,af;  saf=ad.$get();  �ad.$set(ae);  �return af;    };$pkg.SwapPointer=G;SwapPointersync/atomic.SwapPointer sync/atomic.CompareAndSwapInt32H��H=function(ad,ae,af){var $ptr,ad,ae,af;    if(ad.$get()===ae){  �ad.$set(af);  �return true;    }  return false;    };$pkg.CompareAndSwapInt32=H;CompareAndSwapInt32sync/atomic.CompareAndSwapInt32 sync/atomic.CompareAndSwapInt64I��I=function(ad,ae,af){var $ptr,ad,ae,af,ag;    if((ag=ad.$get(),(ag.$high===ae.$high&&ag.$low===ae.$low))){  nad.$set(af);  |return true;    }  �return false;    };$pkg.CompareAndSwapInt64=I;CompareAndSwapInt64sync/atomic.CompareAndSwapInt64  sync/atomic.CompareAndSwapUint32J��J=function(ad,ae,af){var $ptr,ad,ae,af;    if(ad.$get()===ae){  �ad.$set(af);  �return true;    }  return false;    };$pkg.CompareAndSwapUint32=J;CompareAndSwapUint32 sync/atomic.CompareAndSwapUint32  sync/atomic.CompareAndSwapUint64K��K=function(ad,ae,af){var $ptr,ad,ae,af,ag;    if((ag=ad.$get(),(ag.$high===ae.$high&&ag.$low===ae.$low))){  tad.$set(af);  �return true;    }  �return false;    };$pkg.CompareAndSwapUint64=K;CompareAndSwapUint64 sync/atomic.CompareAndSwapUint64 !sync/atomic.CompareAndSwapUintptrL��L=function(ad,ae,af){var $ptr,ad,ae,af;    if(ad.$get()===ae){  �ad.$set(af);  return true;    }  return false;    };$pkg.CompareAndSwapUintptr=L;CompareAndSwapUintptr!sync/atomic.CompareAndSwapUintptr !sync/atomic.CompareAndSwapPointerM��M=function(ad,ae,af){var $ptr,ad,ae,af;    if(ad.$get()===ae){  �ad.$set(af);  �return true;    }  �return false;    };$pkg.CompareAndSwapPointer=M;CompareAndSwapPointer!sync/atomic.CompareAndSwapPointer sync/atomic.AddInt32NsN=function(ad,ae){var $ptr,ad,ae,af;  �af=ad.$get()+ae>>0;  ad.$set(af);  return af;    };$pkg.AddInt32=N;AddInt32sync/atomic.AddInt32 sync/atomic.AddUint32OuO=function(ad,ae){var $ptr,ad,ae,af;  Saf=ad.$get()+ae>>>0;  iad.$set(af);  vreturn af;    };$pkg.AddUint32=O;	AddUint32sync/atomic.AddUint32 sync/atomic.AddInt64P��P=function(ad,ae){var $ptr,ad,ae,af,ag;  �ag=(af=ad.$get(),new $Int64(af.$high+ae.$high,af.$low+ae.$low));  �ad.$set(ag);  �return ag;    };$pkg.AddInt64=P;AddInt64sync/atomic.AddInt64 sync/atomic.AddUint64Q��Q=function(ad,ae){var $ptr,ad,ae,af,ag;  ag=(af=ad.$get(),new $Uint64(af.$high+ae.$high,af.$low+ae.$low));  1ad.$set(ag);  >return ag;    };$pkg.AddUint64=Q;	AddUint64sync/atomic.AddUint64 sync/atomic.AddUintptrRvR=function(ad,ae){var $ptr,ad,ae,af;  �af=ad.$get()+ae>>>0;  �ad.$set(af);  �return af;    };$pkg.AddUintptr=R;
AddUintptrsync/atomic.AddUintptr sync/atomic.LoadInt32SIS=function(ad){var $ptr,ad;  �return ad.$get();    };$pkg.LoadInt32=S;	LoadInt32sync/atomic.LoadInt32 sync/atomic.LoadInt64TIT=function(ad){var $ptr,ad;  return ad.$get();    };$pkg.LoadInt64=T;	LoadInt64sync/atomic.LoadInt64 sync/atomic.LoadUint32UJU=function(ad){var $ptr,ad;  Hreturn ad.$get();    };$pkg.LoadUint32=U;
LoadUint32sync/atomic.LoadUint32 sync/atomic.LoadUint64VJV=function(ad){var $ptr,ad;  �return ad.$get();    };$pkg.LoadUint64=V;
LoadUint64sync/atomic.LoadUint64 sync/atomic.LoadUintptrWKW=function(ad){var $ptr,ad;  �return ad.$get();    };$pkg.LoadUintptr=W;LoadUintptrsync/atomic.LoadUintptr sync/atomic.LoadPointerXKX=function(ad){var $ptr,ad;  	return ad.$get();    };$pkg.LoadPointer=X;LoadPointersync/atomic.LoadPointer sync/atomic.StoreInt32YKY=function(ad,ae){var $ptr,ad,ae;  	?ad.$set(ae);    };$pkg.StoreInt32=Y;
StoreInt32sync/atomic.StoreInt32 sync/atomic.StoreInt64ZKZ=function(ad,ae){var $ptr,ad,ae;  	yad.$set(ae);    };$pkg.StoreInt64=Z;
StoreInt64sync/atomic.StoreInt64 sync/atomic.StoreUint32AANAA=function(ad,ae){var $ptr,ad,ae;  	�ad.$set(ae);    };$pkg.StoreUint32=AA;StoreUint32sync/atomic.StoreUint32 sync/atomic.StoreUint64ABNAB=function(ad,ae){var $ptr,ad,ae;  	�ad.$set(ae);    };$pkg.StoreUint64=AB;StoreUint64sync/atomic.StoreUint64 sync/atomic.StoreUintptrACOAC=function(ad,ae){var $ptr,ad,ae;  
3ad.$set(ae);    };$pkg.StoreUintptr=AC;StoreUintptrsync/atomic.StoreUintptr sync/atomic.StorePointerADOAD=function(ad,ae){var $ptr,ad,ae;  
�ad.$set(ae);    };$pkg.StorePointer=AD;StorePointersync/atomic.StorePointer (*sync/atomic.Value).Load��AF.ptr.prototype.Load=function(){var $ptr,ad,ae;ad=$ifaceNil;  
�ae=this;    ad=ae.v;return ad;    };AF.prototype.Load=function(){return this.$val.Load();};Valuesync/atomic.Value (*sync/atomic.Value).Store��AF.ptr.prototype.Store=function(ad){var $ptr,ad,ae;  
�ae=this;    if($interfaceIsEqual(ad,$ifaceNil)){   $panic(new $String("sync/atomic: store of nil value into Value"));    }    if(!($interfaceIsEqual(ae.v,$ifaceNil))&&!(ad.constructor===ae.v.constructor)){  �$panic(new $String("sync/atomic: store of inconsistently typed value into Value"));    }  �ae.v=ad;    };AF.prototype.Store=function(ad){return this.$val.Store(ad);};Valuesync/atomic.Value sync/atomic.panic64AEtAE=function(){var $ptr;  !�$panic(new $String("sync/atomic: broken 64-bit atomic operations (buggy QEMU)"));    };panic64sync/atomic.panic64 sync/atomic.runtime_procPinAHcAH=function(){$throwRuntimeError("native function not implemented: sync/atomic.runtime_procPin");};runtime_procPinsync/atomic.runtime_procPin sync/atomic.runtime_procUnpinAIeAI=function(){$throwRuntimeError("native function not implemented: sync/atomic.runtime_procUnpin");};runtime_procUnpinsync/atomic.runtime_procUnpin (*sync/atomic.noCopy).LockhAJ.ptr.prototype.Lock=function(){var $ptr;    };AJ.prototype.Lock=function(){return this.$val.Lock();};noCopysync/atomic.noCopy �	�{"Base":11526,"Files":[{"Name":"/src/sync/atomic/atomic.go","Base":1,"Size":3060,"Lines":[0,13,14,29,30,39,49,50,85,87,88,135,149,162,174,176,177,224,238,251,263,265,266,317,331,344,356,358,359,410,424,437,449,451,452,507,521,534,546,548,549,625,639,652,664,666,667,728,747,761,775,778,792,794,795,856,875,889,903,906,920,922,923,987,1006,1020,1034,1037,1051,1053,1054,1118,1137,1151,1165,1168,1182,1184,1185,1252,1271,1285,1299,1302,1316,1318,1319,1400,1419,1433,1447,1450,1464,1466,1467,1515,1537,1550,1562,1564,1565,1617,1639,1652,1664,1666,1667,1715,1737,1750,1762,1764,1765,1817,1839,1852,1864,1866,1867,1923,1945,1958,1970,1972,1973,2009,2023,2025,2026,2062,2076,2078,2079,2118,2132,2134,2135,2174,2188,2190,2191,2233,2247,2249,2250,2306,2320,2322,2323,2365,2378,2380,2381,2423,2436,2438,2439,2484,2497,2499,2500,2545,2558,2560,2561,2609,2622,2624,2625,2687,2700,2702,2703,2744,2756,2758,2759,2798,2813,2867,2870,2975,3046,3049,3058],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.3yb4TYabM8/goroot/src/sync/atomic/doc.go","Base":3062,"Size":5654,"Lines":[0,55,109,159,160,222,277,280,340,413,474,508,548,551,624,642,645,660,675,689,692,762,805,808,829,845,861,866,882,885,956,974,977,995,1011,1014,1084,1147,1165,1168,1183,1184,1193,1203,1205,1206,1304,1307,1402,1405,1488,1565,1637,1656,1657,1741,1792,1793,1877,1928,1929,2014,2069,2070,2155,2210,2211,2297,2356,2357,2443,2523,2524,2607,2676,2677,2760,2829,2830,2914,2986,2987,3071,3143,3144,3230,3305,3306,3399,3488,3489,3559,3611,3612,3683,3773,3837,3893,3894,3964,4016,4017,4088,4178,4242,4298,4299,4371,4431,4432,4469,4509,4510,4547,4587,4588,4626,4669,4670,4708,4751,4752,4791,4837,4838,4877,4937,4938,4986,5026,5027,5075,5115,5116,5165,5208,5209,5258,5301,5302,5352,5398,5399,5449,5509,5510,5567,5584,5652],"Infos":null},{"Name":"/var/folders/tw/kgz4v2kn4n7d7ryg5k_z3dk40000gn/T/gopherjs_playground.3yb4TYabM8/goroot/src/sync/atomic/value.go","Base":8717,"Size":2808,"Lines":[0,55,109,159,160,175,176,185,195,197,198,274,333,386,445,448,495,515,530,531,546,548,549,603,628,649,670,672,673,729,798,839,879,908,956,992,1005,1008,1039,1080,1094,1110,1118,1120,1121,1164,1247,1308,1347,1362,1416,1419,1459,1500,1507,1537,1555,1591,1649,1708,1758,1779,1853,1877,1890,1895,1923,1958,1991,2014,2024,2028,2063,2100,2158,2198,2210,2214,2273,2294,2366,2370,2404,2413,2416,2418,2419,2473,2496,2521,2522,2586,2610,2613,2684,2700,2721,2722,2783],"Infos":null}]}
 