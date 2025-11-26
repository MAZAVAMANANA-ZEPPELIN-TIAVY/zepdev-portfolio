function cr(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Nt={exports:{}},lt={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ge;function dr(){if(ge)return lt;ge=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function e(r,n,o){var i=null;if(o!==void 0&&(i=""+o),n.key!==void 0&&(i=""+n.key),"key"in n){o={};for(var f in n)f!=="key"&&(o[f]=n[f])}else o=n;return n=o.ref,{$$typeof:t,type:r,key:i,ref:n!==void 0?n:null,props:o}}return lt.Fragment=a,lt.jsx=e,lt.jsxs=e,lt}var be;function mr(){return be||(be=1,Nt.exports=dr()),Nt.exports}mr();var Ft={exports:{}},S={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e;function pr(){if(_e)return S;_e=1;var t=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),n=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),i=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),c=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),h=Symbol.iterator;function x(s){return s===null||typeof s!="object"?null:(s=h&&s[h]||s["@@iterator"],typeof s=="function"?s:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},u=Object.assign,p={};function g(s,m,w){this.props=s,this.context=m,this.refs=p,this.updater=w||_}g.prototype.isReactComponent={},g.prototype.setState=function(s,m){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,m,"setState")},g.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function k(){}k.prototype=g.prototype;function A(s,m,w){this.props=s,this.context=m,this.refs=p,this.updater=w||_}var O=A.prototype=new k;O.constructor=A,u(O,g.prototype),O.isPureReactComponent=!0;var I=Array.isArray,v={H:null,A:null,T:null,S:null,V:null},j=Object.prototype.hasOwnProperty;function z(s,m,w,T,C,N){return w=N.ref,{$$typeof:t,type:s,key:m,ref:w!==void 0?w:null,props:N}}function M(s,m){return z(s.type,m,void 0,void 0,void 0,s.props)}function ft(s){return typeof s=="object"&&s!==null&&s.$$typeof===t}function ir(s){var m={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(w){return m[w]})}var ve=/\/+/g;function Rt(s,m){return typeof s=="object"&&s!==null&&s.key!=null?ir(""+s.key):m.toString(36)}function ye(){}function sr(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(ye,ye):(s.status="pending",s.then(function(m){s.status==="pending"&&(s.status="fulfilled",s.value=m)},function(m){s.status==="pending"&&(s.status="rejected",s.reason=m)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function et(s,m,w,T,C){var N=typeof s;(N==="undefined"||N==="boolean")&&(s=null);var E=!1;if(s===null)E=!0;else switch(N){case"bigint":case"string":case"number":E=!0;break;case"object":switch(s.$$typeof){case t:case a:E=!0;break;case y:return E=s._init,et(E(s._payload),m,w,T,C)}}if(E)return C=C(s),E=T===""?"."+Rt(s,0):T,I(C)?(w="",E!=null&&(w=E.replace(ve,"$&/")+"/"),et(C,m,w,"",function(ur){return ur})):C!=null&&(ft(C)&&(C=M(C,w+(C.key==null||s&&s.key===C.key?"":(""+C.key).replace(ve,"$&/")+"/")+E)),m.push(C)),1;E=0;var q=T===""?".":T+":";if(I(s))for(var F=0;F<s.length;F++)T=s[F],N=q+Rt(T,F),E+=et(T,m,w,N,C);else if(F=x(s),typeof F=="function")for(s=F.call(s),F=0;!(T=s.next()).done;)T=T.value,N=q+Rt(T,F++),E+=et(T,m,w,N,C);else if(N==="object"){if(typeof s.then=="function")return et(sr(s),m,w,T,C);throw m=String(s),Error("Objects are not valid as a React child (found: "+(m==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":m)+"). If you meant to render a collection of children, use an array instead.")}return E}function ht(s,m,w){if(s==null)return s;var T=[],C=0;return et(s,T,"","",function(N){return m.call(w,N,C++)}),T}function fr(s){if(s._status===-1){var m=s._result;m=m(),m.then(function(w){(s._status===0||s._status===-1)&&(s._status=1,s._result=w)},function(w){(s._status===0||s._status===-1)&&(s._status=2,s._result=w)}),s._status===-1&&(s._status=0,s._result=m)}if(s._status===1)return s._result.default;throw s._result}var he=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var m=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(m))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)};function lr(){}return S.Children={map:ht,forEach:function(s,m,w){ht(s,function(){m.apply(this,arguments)},w)},count:function(s){var m=0;return ht(s,function(){m++}),m},toArray:function(s){return ht(s,function(m){return m})||[]},only:function(s){if(!ft(s))throw Error("React.Children.only expected to receive a single React element child.");return s}},S.Component=g,S.Fragment=e,S.Profiler=n,S.PureComponent=A,S.StrictMode=r,S.Suspense=l,S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=v,S.__COMPILER_RUNTIME={__proto__:null,c:function(s){return v.H.useMemoCache(s)}},S.cache=function(s){return function(){return s.apply(null,arguments)}},S.cloneElement=function(s,m,w){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var T=u({},s.props),C=s.key,N=void 0;if(m!=null)for(E in m.ref!==void 0&&(N=void 0),m.key!==void 0&&(C=""+m.key),m)!j.call(m,E)||E==="key"||E==="__self"||E==="__source"||E==="ref"&&m.ref===void 0||(T[E]=m[E]);var E=arguments.length-2;if(E===1)T.children=w;else if(1<E){for(var q=Array(E),F=0;F<E;F++)q[F]=arguments[F+2];T.children=q}return z(s.type,C,void 0,void 0,N,T)},S.createContext=function(s){return s={$$typeof:i,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:o,_context:s},s},S.createElement=function(s,m,w){var T,C={},N=null;if(m!=null)for(T in m.key!==void 0&&(N=""+m.key),m)j.call(m,T)&&T!=="key"&&T!=="__self"&&T!=="__source"&&(C[T]=m[T]);var E=arguments.length-2;if(E===1)C.children=w;else if(1<E){for(var q=Array(E),F=0;F<E;F++)q[F]=arguments[F+2];C.children=q}if(s&&s.defaultProps)for(T in E=s.defaultProps,E)C[T]===void 0&&(C[T]=E[T]);return z(s,N,void 0,void 0,null,C)},S.createRef=function(){return{current:null}},S.forwardRef=function(s){return{$$typeof:f,render:s}},S.isValidElement=ft,S.lazy=function(s){return{$$typeof:y,_payload:{_status:-1,_result:s},_init:fr}},S.memo=function(s,m){return{$$typeof:c,type:s,compare:m===void 0?null:m}},S.startTransition=function(s){var m=v.T,w={};v.T=w;try{var T=s(),C=v.S;C!==null&&C(w,T),typeof T=="object"&&T!==null&&typeof T.then=="function"&&T.then(lr,he)}catch(N){he(N)}finally{v.T=m}},S.unstable_useCacheRefresh=function(){return v.H.useCacheRefresh()},S.use=function(s){return v.H.use(s)},S.useActionState=function(s,m,w){return v.H.useActionState(s,m,w)},S.useCallback=function(s,m){return v.H.useCallback(s,m)},S.useContext=function(s){return v.H.useContext(s)},S.useDebugValue=function(){},S.useDeferredValue=function(s,m){return v.H.useDeferredValue(s,m)},S.useEffect=function(s,m,w){var T=v.H;if(typeof w=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return T.useEffect(s,m)},S.useId=function(){return v.H.useId()},S.useImperativeHandle=function(s,m,w){return v.H.useImperativeHandle(s,m,w)},S.useInsertionEffect=function(s,m){return v.H.useInsertionEffect(s,m)},S.useLayoutEffect=function(s,m){return v.H.useLayoutEffect(s,m)},S.useMemo=function(s,m){return v.H.useMemo(s,m)},S.useOptimistic=function(s,m){return v.H.useOptimistic(s,m)},S.useReducer=function(s,m,w){return v.H.useReducer(s,m,w)},S.useRef=function(s){return v.H.useRef(s)},S.useState=function(s){return v.H.useState(s)},S.useSyncExternalStore=function(s,m,w){return v.H.useSyncExternalStore(s,m,w)},S.useTransition=function(){return v.H.useTransition()},S.version="19.1.0",S}var xe;function vr(){return xe||(xe=1,Ft.exports=pr()),Ft.exports}var aa=vr();const ra=cr(aa);/*!
 * Font Awesome Free 7.0.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Wt(t,a){(a==null||a>t.length)&&(a=t.length);for(var e=0,r=Array(a);e<a;e++)r[e]=t[e];return r}function yr(t){if(Array.isArray(t))return t}function hr(t){if(Array.isArray(t))return Wt(t)}function gr(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}function br(t,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,na(r.key),r)}}function _r(t,a,e){return a&&br(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function _t(t,a){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=re(t))||a){e&&(t=e);var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,f=!1;return{s:function(){e=e.call(t)},n:function(){var l=e.next();return i=l.done,l},e:function(l){f=!0,o=l},f:function(){try{i||e.return==null||e.return()}finally{if(f)throw o}}}}function P(t,a,e){return(a=na(a))in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function xr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function wr(t,a){var e=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(e!=null){var r,n,o,i,f=[],l=!0,c=!1;try{if(o=(e=e.call(t)).next,a===0){if(Object(e)!==e)return;l=!1}else for(;!(l=(r=o.call(e)).done)&&(f.push(r.value),f.length!==a);l=!0);}catch(y){c=!0,n=y}finally{try{if(!l&&e.return!=null&&(i=e.return(),Object(i)!==i))return}finally{if(c)throw n}}return f}}function Tr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function we(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);a&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,r)}return e}function d(t){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?we(Object(e),!0).forEach(function(r){P(t,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):we(Object(e)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))})}return t}function Et(t,a){return yr(t)||wr(t,a)||re(t,a)||Tr()}function U(t){return hr(t)||xr(t)||re(t)||kr()}function Sr(t,a){if(typeof t!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var r=e.call(t,a);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function na(t){var a=Sr(t,"string");return typeof a=="symbol"?a:a+""}function kt(t){"@babel/helpers - typeof";return kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},kt(t)}function re(t,a){if(t){if(typeof t=="string")return Wt(t,a);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Wt(t,a):void 0}}var Te=function(){},ne={},oa={},ia=null,sa={mark:Te,measure:Te};try{typeof window<"u"&&(ne=window),typeof document<"u"&&(oa=document),typeof MutationObserver<"u"&&(ia=MutationObserver),typeof performance<"u"&&(sa=performance)}catch{}var Ar=ne.navigator||{},ke=Ar.userAgent,Se=ke===void 0?"":ke,V=ne,R=oa,Ae=ia,gt=sa;V.document;var G=!!R.documentElement&&!!R.head&&typeof R.addEventListener=="function"&&typeof R.createElement=="function",fa=~Se.indexOf("MSIE")||~Se.indexOf("Trident/"),jt,Er=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Pr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,la={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},Ir={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},ua=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],L="classic",pt="duotone",ca="sharp",da="sharp-duotone",ma="chisel",pa="etch",va="jelly",ya="jelly-duo",ha="jelly-fill",ga="notdog",ba="notdog-duo",_a="slab",xa="slab-press",wa="thumbprint",Ta="whiteboard",Cr="Classic",Or="Duotone",Rr="Sharp",Nr="Sharp Duotone",Fr="Chisel",jr="Etch",Lr="Jelly",Mr="Jelly Duo",$r="Jelly Fill",zr="Notdog",Dr="Notdog Duo",Ur="Slab",Wr="Slab Press",Yr="Thumbprint",Hr="Whiteboard",ka=[L,pt,ca,da,ma,pa,va,ya,ha,ga,ba,_a,xa,wa,Ta];jt={},P(P(P(P(P(P(P(P(P(P(jt,L,Cr),pt,Or),ca,Rr),da,Nr),ma,Fr),pa,jr),va,Lr),ya,Mr),ha,$r),ga,zr),P(P(P(P(P(jt,ba,Dr),_a,Ur),xa,Wr),wa,Yr),Ta,Hr);var Br={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},Xr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},Gr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),qr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},Sa=["fak","fa-kit","fakd","fa-kit-duotone"],Ee={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Vr=["kit"],Jr="kit",Kr="kit-duotone",Zr="Kit",Qr="Kit Duotone";P(P({},Jr,Zr),Kr,Qr);var tn={kit:{"fa-kit":"fak"}},en={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},an={kit:{fak:"fa-kit"}},Pe={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Lt,bt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},rn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],nn="classic",on="duotone",sn="sharp",fn="sharp-duotone",ln="chisel",un="etch",cn="jelly",dn="jelly-duo",mn="jelly-fill",pn="notdog",vn="notdog-duo",yn="slab",hn="slab-press",gn="thumbprint",bn="whiteboard",_n="Classic",xn="Duotone",wn="Sharp",Tn="Sharp Duotone",kn="Chisel",Sn="Etch",An="Jelly",En="Jelly Duo",Pn="Jelly Fill",In="Notdog",Cn="Notdog Duo",On="Slab",Rn="Slab Press",Nn="Thumbprint",Fn="Whiteboard";Lt={},P(P(P(P(P(P(P(P(P(P(Lt,nn,_n),on,xn),sn,wn),fn,Tn),ln,kn),un,Sn),cn,An),dn,En),mn,Pn),pn,In),P(P(P(P(P(Lt,vn,Cn),yn,On),hn,Rn),gn,Nn),bn,Fn);var jn="kit",Ln="kit-duotone",Mn="Kit",$n="Kit Duotone";P(P({},jn,Mn),Ln,$n);var zn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},Dn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Yt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},Un=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],Aa=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(rn,Un),Wn=["solid","regular","light","thin","duotone","brands","semibold"],Ea=[1,2,3,4,5,6,7,8,9,10],Yn=Ea.concat([11,12,13,14,15,16,17,18,19,20]),Hn=["aw","fw","pull-left","pull-right"],Bn=[].concat(U(Object.keys(Dn)),Wn,Hn,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",bt.GROUP,bt.SWAP_OPACITY,bt.PRIMARY,bt.SECONDARY]).concat(Ea.map(function(t){return"".concat(t,"x")})).concat(Yn.map(function(t){return"w-".concat(t)})),Xn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},B="___FONT_AWESOME___",Ht=16,Pa="fa",Ia="svg-inline--fa",Q="data-fa-i2svg",Bt="data-fa-pseudo-element",Gn="data-fa-pseudo-element-pending",oe="data-prefix",ie="data-icon",Ie="fontawesome-i2svg",qn="async",Vn=["HTML","HEAD","STYLE","SCRIPT"],Ca=["::before","::after",":before",":after"],Oa=function(){try{return!0}catch{return!1}}();function vt(t){return new Proxy(t,{get:function(e,r){return r in e?e[r]:e[L]}})}var Ra=d({},la);Ra[L]=d(d(d(d({},{"fa-duotone":"duotone"}),la[L]),Ee.kit),Ee["kit-duotone"]);var Jn=vt(Ra),Xt=d({},qr);Xt[L]=d(d(d(d({},{duotone:"fad"}),Xt[L]),Pe.kit),Pe["kit-duotone"]);var Ce=vt(Xt),Gt=d({},Yt);Gt[L]=d(d({},Gt[L]),an.kit);var se=vt(Gt),qt=d({},zn);qt[L]=d(d({},qt[L]),tn.kit);vt(qt);var Kn=Er,Na="fa-layers-text",Zn=Pr,Qn=d({},Br);vt(Qn);var to=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Mt=Ir,eo=[].concat(U(Vr),U(Bn)),ct=V.FontAwesomeConfig||{};function ao(t){var a=R.querySelector("script["+t+"]");if(a)return a.getAttribute(t)}function ro(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(R&&typeof R.querySelector=="function"){var no=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];no.forEach(function(t){var a=Et(t,2),e=a[0],r=a[1],n=ro(ao(e));n!=null&&(ct[r]=n)})}var Fa={styleDefault:"solid",familyDefault:L,cssPrefix:Pa,replacementClass:Ia,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ct.familyPrefix&&(ct.cssPrefix=ct.familyPrefix);var it=d(d({},Fa),ct);it.autoReplaceSvg||(it.observeMutations=!1);var b={};Object.keys(Fa).forEach(function(t){Object.defineProperty(b,t,{enumerable:!0,set:function(e){it[t]=e,dt.forEach(function(r){return r(b)})},get:function(){return it[t]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(a){it.cssPrefix=a,dt.forEach(function(e){return e(b)})},get:function(){return it.cssPrefix}});V.FontAwesomeConfig=b;var dt=[];function oo(t){return dt.push(t),function(){dt.splice(dt.indexOf(t),1)}}var at=Ht,W={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function io(t){if(!(!t||!G)){var a=R.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=t;for(var e=R.head.childNodes,r=null,n=e.length-1;n>-1;n--){var o=e[n],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return R.head.insertBefore(a,r),t}}var so="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Oe(){for(var t=12,a="";t-- >0;)a+=so[Math.random()*62|0];return a}function st(t){for(var a=[],e=(t||[]).length>>>0;e--;)a[e]=t[e];return a}function fe(t){return t.classList?st(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(a){return a})}function ja(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fo(t){return Object.keys(t||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(ja(t[e]),'" ')},"").trim()}function Pt(t){return Object.keys(t||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(t[e].trim(),";")},"")}function le(t){return t.size!==W.size||t.x!==W.x||t.y!==W.y||t.rotate!==W.rotate||t.flipX||t.flipY}function lo(t){var a=t.transform,e=t.containerWidth,r=t.iconWidth,n={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),i="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(f)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:c}}function uo(t){var a=t.transform,e=t.width,r=e===void 0?Ht:e,n=t.height,o=n===void 0?Ht:n,i="";return fa?i+="translate(".concat(a.x/at-r/2,"em, ").concat(a.y/at-o/2,"em) "):i+="translate(calc(-50% + ".concat(a.x/at,"em), calc(-50% + ").concat(a.y/at,"em)) "),i+="scale(".concat(a.size/at*(a.flipX?-1:1),", ").concat(a.size/at*(a.flipY?-1:1),") "),i+="rotate(".concat(a.rotate,"deg) "),i}var co=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function La(){var t=Pa,a=Ia,e=b.cssPrefix,r=b.replacementClass,n=co;if(e!==t||r!==a){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),f=new RegExp("\\.".concat(a),"g");n=n.replace(o,".".concat(e,"-")).replace(i,"--".concat(e,"-")).replace(f,".".concat(r))}return n}var Re=!1;function $t(){b.autoAddCss&&!Re&&(io(La()),Re=!0)}var mo={mixout:function(){return{dom:{css:La,insertCss:$t}}},hooks:function(){return{beforeDOMElementCreation:function(){$t()},beforeI2svg:function(){$t()}}}},X=V||{};X[B]||(X[B]={});X[B].styles||(X[B].styles={});X[B].hooks||(X[B].hooks={});X[B].shims||(X[B].shims=[]);var D=X[B],Ma=[],$a=function(){R.removeEventListener("DOMContentLoaded",$a),St=1,Ma.map(function(a){return a()})},St=!1;G&&(St=(R.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(R.readyState),St||R.addEventListener("DOMContentLoaded",$a));function po(t){G&&(St?setTimeout(t,0):Ma.push(t))}function yt(t){var a=t.tag,e=t.attributes,r=e===void 0?{}:e,n=t.children,o=n===void 0?[]:n;return typeof t=="string"?ja(t):"<".concat(a," ").concat(fo(r),">").concat(o.map(yt).join(""),"</").concat(a,">")}function Ne(t,a,e){if(t&&t[a]&&t[a][e])return{prefix:a,iconName:e,icon:t[a][e]}}var zt=function(a,e,r,n){var o=Object.keys(a),i=o.length,f=e,l,c,y;for(r===void 0?(l=1,y=a[o[0]]):(l=0,y=r);l<i;l++)c=o[l],y=f(y,a[c],c,a);return y};function za(t){return U(t).length!==1?null:t.codePointAt(0).toString(16)}function Fe(t){return Object.keys(t).reduce(function(a,e){var r=t[e],n=!!r.icon;return n?a[r.iconName]=r.icon:a[e]=r,a},{})}function Vt(t,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,n=r===void 0?!1:r,o=Fe(a);typeof D.hooks.addPack=="function"&&!n?D.hooks.addPack(t,Fe(a)):D.styles[t]=d(d({},D.styles[t]||{}),o),t==="fas"&&Vt("fa",a)}var mt=D.styles,vo=D.shims,Da=Object.keys(se),yo=Da.reduce(function(t,a){return t[a]=Object.keys(se[a]),t},{}),ue=null,Ua={},Wa={},Ya={},Ha={},Ba={};function ho(t){return~eo.indexOf(t)}function go(t,a){var e=a.split("-"),r=e[0],n=e.slice(1).join("-");return r===t&&n!==""&&!ho(n)?n:null}var Xa=function(){var a=function(o){return zt(mt,function(i,f,l){return i[l]=zt(f,o,{}),i},{})};Ua=a(function(n,o,i){if(o[3]&&(n[o[3]]=i),o[2]){var f=o[2].filter(function(l){return typeof l=="number"});f.forEach(function(l){n[l.toString(16)]=i})}return n}),Wa=a(function(n,o,i){if(n[i]=i,o[2]){var f=o[2].filter(function(l){return typeof l=="string"});f.forEach(function(l){n[l]=i})}return n}),Ba=a(function(n,o,i){var f=o[2];return n[i]=i,f.forEach(function(l){n[l]=i}),n});var e="far"in mt||b.autoFetchSvg,r=zt(vo,function(n,o){var i=o[0],f=o[1],l=o[2];return f==="far"&&!e&&(f="fas"),typeof i=="string"&&(n.names[i]={prefix:f,iconName:l}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:f,iconName:l}),n},{names:{},unicodes:{}});Ya=r.names,Ha=r.unicodes,ue=It(b.styleDefault,{family:b.familyDefault})};oo(function(t){ue=It(t.styleDefault,{family:b.familyDefault})});Xa();function ce(t,a){return(Ua[t]||{})[a]}function bo(t,a){return(Wa[t]||{})[a]}function Z(t,a){return(Ba[t]||{})[a]}function Ga(t){return Ya[t]||{prefix:null,iconName:null}}function _o(t){var a=Ha[t],e=ce("fas",t);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function J(){return ue}var qa=function(){return{prefix:null,iconName:null,rest:[]}};function xo(t){var a=L,e=Da.reduce(function(r,n){return r[n]="".concat(b.cssPrefix,"-").concat(n),r},{});return ka.forEach(function(r){(t.includes(e[r])||t.some(function(n){return yo[r].includes(n)}))&&(a=r)}),a}function It(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?L:e,n=Jn[r][t];if(r===pt&&!t)return"fad";var o=Ce[r][t]||Ce[r][n],i=t in D.styles?t:null,f=o||i||null;return f}function wo(t){var a=[],e=null;return t.forEach(function(r){var n=go(b.cssPrefix,r);n?e=n:r&&a.push(r)}),{iconName:e,rest:a}}function je(t){return t.sort().filter(function(a,e,r){return r.indexOf(a)===e})}var Le=Aa.concat(Sa);function Ct(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.skipLookups,r=e===void 0?!1:e,n=null,o=je(t.filter(function(_){return Le.includes(_)})),i=je(t.filter(function(_){return!Le.includes(_)})),f=o.filter(function(_){return n=_,!ua.includes(_)}),l=Et(f,1),c=l[0],y=c===void 0?null:c,h=xo(o),x=d(d({},wo(i)),{},{prefix:It(y,{family:h})});return d(d(d({},x),Ao({values:t,family:h,styles:mt,config:b,canonical:x,givenPrefix:n})),To(r,n,x))}function To(t,a,e){var r=e.prefix,n=e.iconName;if(t||!r||!n)return{prefix:r,iconName:n};var o=a==="fa"?Ga(n):{},i=Z(r,n);return n=o.iconName||i||n,r=o.prefix||r,r==="far"&&!mt.far&&mt.fas&&!b.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var ko=ka.filter(function(t){return t!==L||t!==pt}),So=Object.keys(Yt).filter(function(t){return t!==L}).map(function(t){return Object.keys(Yt[t])}).flat();function Ao(t){var a=t.values,e=t.family,r=t.canonical,n=t.givenPrefix,o=n===void 0?"":n,i=t.styles,f=i===void 0?{}:i,l=t.config,c=l===void 0?{}:l,y=e===pt,h=a.includes("fa-duotone")||a.includes("fad"),x=c.familyDefault==="duotone",_=r.prefix==="fad"||r.prefix==="fa-duotone";if(!y&&(h||x||_)&&(r.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(r.prefix="fab"),!r.prefix&&ko.includes(e)){var u=Object.keys(f).find(function(g){return So.includes(g)});if(u||c.autoFetchSvg){var p=Gr.get(e).defaultShortPrefixId;r.prefix=p,r.iconName=Z(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||o==="fa")&&(r.prefix=J()||"fas"),r}var Eo=function(){function t(){gr(this,t),this.definitions={}}return _r(t,[{key:"add",value:function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(f){e.definitions[f]=d(d({},e.definitions[f]||{}),i[f]),Vt(f,i[f]);var l=se[L][f];l&&Vt(l,i[f]),Xa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(o){var i=n[o],f=i.prefix,l=i.iconName,c=i.icon,y=c[2];e[f]||(e[f]={}),y.length>0&&y.forEach(function(h){typeof h=="string"&&(e[f][h]=c)}),e[f][l]=c}),e}}])}(),Me=[],nt={},ot={},Po=Object.keys(ot);function Io(t,a){var e=a.mixoutsTo;return Me=t,nt={},Object.keys(ot).forEach(function(r){Po.indexOf(r)===-1&&delete ot[r]}),Me.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(i){typeof n[i]=="function"&&(e[i]=n[i]),kt(n[i])==="object"&&Object.keys(n[i]).forEach(function(f){e[i]||(e[i]={}),e[i][f]=n[i][f]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(i){nt[i]||(nt[i]=[]),nt[i].push(o[i])})}r.provides&&r.provides(ot)}),e}function Jt(t,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),n=2;n<e;n++)r[n-2]=arguments[n];var o=nt[t]||[];return o.forEach(function(i){a=i.apply(null,[a].concat(r))}),a}function tt(t){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var n=nt[t]||[];n.forEach(function(o){o.apply(null,e)})}function K(){var t=arguments[0],a=Array.prototype.slice.call(arguments,1);return ot[t]?ot[t].apply(null,a):void 0}function Kt(t){t.prefix==="fa"&&(t.prefix="fas");var a=t.iconName,e=t.prefix||J();if(a)return a=Z(e,a)||a,Ne(Va.definitions,e,a)||Ne(D.styles,e,a)}var Va=new Eo,Co=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,tt("noAuto")},Oo={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return G?(tt("beforeI2svg",a),K("pseudoElements2svg",a),K("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,po(function(){No({autoReplaceSvgRoot:e}),tt("watch",a)})}},Ro={icon:function(a){if(a===null)return null;if(kt(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:Z(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=It(a[0]);return{prefix:r,iconName:Z(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(b.cssPrefix,"-"))>-1||a.match(Kn))){var n=Ct(a.split(" "),{skipLookups:!0});return{prefix:n.prefix||J(),iconName:Z(n.prefix,n.iconName)||n.iconName}}if(typeof a=="string"){var o=J();return{prefix:o,iconName:Z(o,a)||a}}}},$={noAuto:Co,config:b,dom:Oo,parse:Ro,library:Va,findIconDefinition:Kt,toHtml:yt},No=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?R:e;(Object.keys(D.styles).length>0||b.autoFetchSvg)&&G&&b.autoReplaceSvg&&$.dom.i2svg({node:r})};function Ot(t,a){return Object.defineProperty(t,"abstract",{get:a}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return yt(r)})}}),Object.defineProperty(t,"node",{get:function(){if(G){var r=R.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function Fo(t){var a=t.children,e=t.main,r=t.mask,n=t.attributes,o=t.styles,i=t.transform;if(le(i)&&e.found&&!r.found){var f=e.width,l=e.height,c={x:f/l/2,y:.5};n.style=Pt(d(d({},o),{},{"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")}))}return[{tag:"svg",attributes:n,children:a}]}function jo(t){var a=t.prefix,e=t.iconName,r=t.children,n=t.attributes,o=t.symbol,i=o===!0?"".concat(a,"-").concat(b.cssPrefix,"-").concat(e):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},n),{},{id:i}),children:r}]}]}function Lo(t){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(e){return e in t})}function de(t){var a=t.icons,e=a.main,r=a.mask,n=t.prefix,o=t.iconName,i=t.transform,f=t.symbol,l=t.maskId,c=t.extra,y=t.watchable,h=y===void 0?!1:y,x=r.found?r:e,_=x.width,u=x.height,p=[b.replacementClass,o?"".concat(b.cssPrefix,"-").concat(o):""].filter(function(v){return c.classes.indexOf(v)===-1}).filter(function(v){return v!==""||!!v}).concat(c.classes).join(" "),g={children:[],attributes:d(d({},c.attributes),{},{"data-prefix":n,"data-icon":o,class:p,role:c.attributes.role||"img",viewBox:"0 0 ".concat(_," ").concat(u)})};!Lo(c.attributes)&&!c.attributes["aria-hidden"]&&(g.attributes["aria-hidden"]="true"),h&&(g.attributes[Q]="");var k=d(d({},g),{},{prefix:n,iconName:o,main:e,mask:r,maskId:l,transform:i,symbol:f,styles:d({},c.styles)}),A=r.found&&e.found?K("generateAbstractMask",k)||{children:[],attributes:{}}:K("generateAbstractIcon",k)||{children:[],attributes:{}},O=A.children,I=A.attributes;return k.children=O,k.attributes=I,f?jo(k):Fo(k)}function $e(t){var a=t.content,e=t.width,r=t.height,n=t.transform,o=t.extra,i=t.watchable,f=i===void 0?!1:i,l=d(d({},o.attributes),{},{class:o.classes.join(" ")});f&&(l[Q]="");var c=d({},o.styles);le(n)&&(c.transform=uo({transform:n,width:e,height:r}),c["-webkit-transform"]=c.transform);var y=Pt(c);y.length>0&&(l.style=y);var h=[];return h.push({tag:"span",attributes:l,children:[a]}),h}function Mo(t){var a=t.content,e=t.extra,r=d(d({},e.attributes),{},{class:e.classes.join(" ")}),n=Pt(e.styles);n.length>0&&(r.style=n);var o=[];return o.push({tag:"span",attributes:r,children:[a]}),o}var Dt=D.styles;function Zt(t){var a=t[0],e=t[1],r=t.slice(4),n=Et(r,1),o=n[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(Mt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Mt.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Mt.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:a,height:e,icon:i}}var $o={found:!1,width:512,height:512};function zo(t,a){!Oa&&!b.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(a,'" is missing.'))}function Qt(t,a){var e=a;return a==="fa"&&b.styleDefault!==null&&(a=J()),new Promise(function(r,n){if(e==="fa"){var o=Ga(t)||{};t=o.iconName||t,a=o.prefix||a}if(t&&a&&Dt[a]&&Dt[a][t]){var i=Dt[a][t];return r(Zt(i))}zo(t,a),r(d(d({},$o),{},{icon:b.showMissingIcons&&t?K("missingIconAbstract")||{}:{}}))})}var ze=function(){},te=b.measurePerformance&&gt&&gt.mark&&gt.measure?gt:{mark:ze,measure:ze},ut='FA "7.0.1"',Do=function(a){return te.mark("".concat(ut," ").concat(a," begins")),function(){return Ja(a)}},Ja=function(a){te.mark("".concat(ut," ").concat(a," ends")),te.measure("".concat(ut," ").concat(a),"".concat(ut," ").concat(a," begins"),"".concat(ut," ").concat(a," ends"))},me={begin:Do,end:Ja},xt=function(){};function De(t){var a=t.getAttribute?t.getAttribute(Q):null;return typeof a=="string"}function Uo(t){var a=t.getAttribute?t.getAttribute(oe):null,e=t.getAttribute?t.getAttribute(ie):null;return a&&e}function Wo(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(b.replacementClass)}function Yo(){if(b.autoReplaceSvg===!0)return wt.replace;var t=wt[b.autoReplaceSvg];return t||wt.replace}function Ho(t){return R.createElementNS("http://www.w3.org/2000/svg",t)}function Bo(t){return R.createElement(t)}function Ka(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?t.tag==="svg"?Ho:Bo:e;if(typeof t=="string")return R.createTextNode(t);var n=r(t.tag);Object.keys(t.attributes||[]).forEach(function(i){n.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){n.appendChild(Ka(i,{ceFn:r}))}),n}function Xo(t){var a=" ".concat(t.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var wt={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(n){e.parentNode.insertBefore(Ka(n),e)}),e.getAttribute(Q)===null&&b.keepOriginalSource){var r=R.createComment(Xo(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~fe(e).indexOf(b.replacementClass))return wt.replace(a);var n=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(f,l){return l===b.replacementClass||l.match(n)?f.toSvg.push(l):f.toNode.push(l),f},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}var i=r.map(function(f){return yt(f)}).join(`
`);e.setAttribute(Q,""),e.innerHTML=i}};function Ue(t){t()}function Za(t,a){var e=typeof a=="function"?a:xt;if(t.length===0)e();else{var r=Ue;b.mutateApproach===qn&&(r=V.requestAnimationFrame||Ue),r(function(){var n=Yo(),o=me.begin("mutate");t.map(n),o(),e()})}}var pe=!1;function Qa(){pe=!0}function ee(){pe=!1}var At=null;function We(t){if(Ae&&b.observeMutations){var a=t.treeCallback,e=a===void 0?xt:a,r=t.nodeCallback,n=r===void 0?xt:r,o=t.pseudoElementsCallback,i=o===void 0?xt:o,f=t.observeMutationsRoot,l=f===void 0?R:f;At=new Ae(function(c){if(!pe){var y=J();st(c).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!De(h.addedNodes[0])&&(b.searchPseudoElements&&i(h.target),e(h.target)),h.type==="attributes"&&h.target.parentNode&&b.searchPseudoElements&&i([h.target],!0),h.type==="attributes"&&De(h.target)&&~to.indexOf(h.attributeName))if(h.attributeName==="class"&&Uo(h.target)){var x=Ct(fe(h.target)),_=x.prefix,u=x.iconName;h.target.setAttribute(oe,_||y),u&&h.target.setAttribute(ie,u)}else Wo(h.target)&&n(h.target)})}}),G&&At.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Go(){At&&At.disconnect()}function qo(t){var a=t.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,n){var o=n.split(":"),i=o[0],f=o.slice(1);return i&&f.length>0&&(r[i]=f.join(":").trim()),r},{})),e}function Vo(t){var a=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",n=Ct(fe(t));return n.prefix||(n.prefix=J()),a&&e&&(n.prefix=a,n.iconName=e),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=bo(n.prefix,t.innerText)||ce(n.prefix,za(t.innerText))),!n.iconName&&b.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=t.firstChild.data)),n}function Jo(t){var a=st(t.attributes).reduce(function(e,r){return e.name!=="class"&&e.name!=="style"&&(e[r.name]=r.value),e},{});return a}function Ko(){return{iconName:null,prefix:null,transform:W,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ye(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=Vo(t),r=e.iconName,n=e.prefix,o=e.rest,i=Jo(t),f=Jt("parseNodeAttributes",{},t),l=a.styleParser?qo(t):[];return d({iconName:r,prefix:n,transform:W,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},f)}var Zo=D.styles;function tr(t){var a=b.autoReplaceSvg==="nest"?Ye(t,{styleParser:!1}):Ye(t);return~a.extra.classes.indexOf(Na)?K("generateLayersText",t,a):K("generateSvgReplacementMutation",t,a)}function Qo(){return[].concat(U(Sa),U(Aa))}function He(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!G)return Promise.resolve();var e=R.documentElement.classList,r=function(h){return e.add("".concat(Ie,"-").concat(h))},n=function(h){return e.remove("".concat(Ie,"-").concat(h))},o=b.autoFetchSvg?Qo():ua.concat(Object.keys(Zo));o.includes("fa")||o.push("fa");var i=[".".concat(Na,":not([").concat(Q,"])")].concat(o.map(function(y){return".".concat(y,":not([").concat(Q,"])")})).join(", ");if(i.length===0)return Promise.resolve();var f=[];try{f=st(t.querySelectorAll(i))}catch{}if(f.length>0)r("pending"),n("complete");else return Promise.resolve();var l=me.begin("onTree"),c=f.reduce(function(y,h){try{var x=tr(h);x&&y.push(x)}catch(_){Oa||_.name==="MissingIcon"&&console.error(_)}return y},[]);return new Promise(function(y,h){Promise.all(c).then(function(x){Za(x,function(){r("active"),r("complete"),n("pending"),typeof a=="function"&&a(),l(),y()})}).catch(function(x){l(),h(x)})})}function ti(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;tr(t).then(function(e){e&&Za([e],a)})}function ei(t){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:Kt(a||{}),n=e.mask;return n&&(n=(n||{}).icon?n:Kt(n||{})),t(r,d(d({},e),{},{mask:n}))}}var ai=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,n=r===void 0?W:r,o=e.symbol,i=o===void 0?!1:o,f=e.mask,l=f===void 0?null:f,c=e.maskId,y=c===void 0?null:c,h=e.classes,x=h===void 0?[]:h,_=e.attributes,u=_===void 0?{}:_,p=e.styles,g=p===void 0?{}:p;if(a){var k=a.prefix,A=a.iconName,O=a.icon;return Ot(d({type:"icon"},a),function(){return tt("beforeDOMElementCreation",{iconDefinition:a,params:e}),de({icons:{main:Zt(O),mask:l?Zt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:A,transform:d(d({},W),n),symbol:i,maskId:y,extra:{attributes:u,styles:g,classes:x}})})}},ri={mixout:function(){return{icon:ei(ai)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=He,e.nodeCallback=ti,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,n=r===void 0?R:r,o=e.callback,i=o===void 0?function(){}:o;return He(n,i)},a.generateSvgReplacementMutation=function(e,r){var n=r.iconName,o=r.prefix,i=r.transform,f=r.symbol,l=r.mask,c=r.maskId,y=r.extra;return new Promise(function(h,x){Promise.all([Qt(n,o),l.iconName?Qt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var u=Et(_,2),p=u[0],g=u[1];h([e,de({icons:{main:p,mask:g},prefix:o,iconName:n,transform:i,symbol:f,maskId:c,extra:y,watchable:!0})])}).catch(x)})},a.generateAbstractIcon=function(e){var r=e.children,n=e.attributes,o=e.main,i=e.transform,f=e.styles,l=Pt(f);l.length>0&&(n.style=l);var c;return le(i)&&(c=K("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),r.push(c||o.icon),{children:r,attributes:n}}}},ni={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,o=n===void 0?[]:n;return Ot({type:"layer"},function(){tt("beforeDOMElementCreation",{assembler:e,params:r});var i=[];return e(function(f){Array.isArray(f)?f.map(function(l){i=i.concat(l.abstract)}):i=i.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers")].concat(U(o)).join(" ")},children:i}]})}}}},oi={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,o=n===void 0?[]:n,i=r.attributes,f=i===void 0?{}:i,l=r.styles,c=l===void 0?{}:l;return Ot({type:"counter",content:e},function(){return tt("beforeDOMElementCreation",{content:e,params:r}),Mo({content:e.toString(),extra:{attributes:f,styles:c,classes:["".concat(b.cssPrefix,"-layers-counter")].concat(U(o))}})})}}}},ii={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,o=n===void 0?W:n,i=r.classes,f=i===void 0?[]:i,l=r.attributes,c=l===void 0?{}:l,y=r.styles,h=y===void 0?{}:y;return Ot({type:"text",content:e},function(){return tt("beforeDOMElementCreation",{content:e,params:r}),$e({content:e,transform:d(d({},W),o),extra:{attributes:c,styles:h,classes:["".concat(b.cssPrefix,"-layers-text")].concat(U(f))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var n=r.transform,o=r.extra,i=null,f=null;if(fa){var l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();i=c.width/l,f=c.height/l}return Promise.resolve([e,$e({content:e.innerHTML,width:i,height:f,transform:n,extra:o,watchable:!0})])}}},er=new RegExp('"',"ug"),Be=[1105920,1112319],Xe=d(d(d(d({},{FontAwesome:{normal:"fas",400:"fas"}}),Xr),Xn),en),ae=Object.keys(Xe).reduce(function(t,a){return t[a.toLowerCase()]=Xe[a],t},{}),si=Object.keys(ae).reduce(function(t,a){var e=ae[a];return t[a]=e[900]||U(Object.entries(e))[0][1],t},{});function fi(t){var a=t.replace(er,"");return za(U(a)[0]||"")}function li(t){var a=t.getPropertyValue("font-feature-settings").includes("ss01"),e=t.getPropertyValue("content"),r=e.replace(er,""),n=r.codePointAt(0),o=n>=Be[0]&&n<=Be[1],i=r.length===2?r[0]===r[1]:!1;return o||i||a}function ui(t,a){var e=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(a),n=isNaN(r)?"normal":r;return(ae[e]||{})[n]||si[e]}function Ge(t,a){var e="".concat(Gn).concat(a.replace(":","-"));return new Promise(function(r,n){if(t.getAttribute(e)!==null)return r();var o=st(t.children),i=o.filter(function(j){return j.getAttribute(Bt)===a})[0],f=V.getComputedStyle(t,a),l=f.getPropertyValue("font-family"),c=l.match(Zn),y=f.getPropertyValue("font-weight"),h=f.getPropertyValue("content");if(i&&!c)return t.removeChild(i),r();if(c&&h!=="none"&&h!==""){var x=f.getPropertyValue("content"),_=ui(l,y),u=fi(x),p=c[0].startsWith("FontAwesome"),g=li(f),k=ce(_,u),A=k;if(p){var O=_o(u);O.iconName&&O.prefix&&(k=O.iconName,_=O.prefix)}if(k&&!g&&(!i||i.getAttribute(oe)!==_||i.getAttribute(ie)!==A)){t.setAttribute(e,A),i&&t.removeChild(i);var I=Ko(),v=I.extra;v.attributes[Bt]=a,Qt(k,_).then(function(j){var z=de(d(d({},I),{},{icons:{main:j,mask:qa()},prefix:_,iconName:A,extra:v,watchable:!0})),M=R.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=z.map(function(ft){return yt(ft)}).join(`
`),t.removeAttribute(e),r()}).catch(n)}else r()}else r()})}function ci(t){return Promise.all([Ge(t,"::before"),Ge(t,"::after")])}function di(t){return t.parentNode!==document.head&&!~Vn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Bt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}var mi=function(a){return!!a&&Ca.some(function(e){return a.includes(e)})},pi=function(a){if(!a)return[];var e=new Set,r=a.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(c){return c.trim()})});var n=_t(r),o;try{for(n.s();!(o=n.n()).done;){var i=o.value;if(mi(i)){var f=Ca.reduce(function(l,c){return l.replace(c,"")},i);f!==""&&f!=="*"&&e.add(f)}}}catch(l){n.e(l)}finally{n.f()}return e};function qe(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(G){var e;if(a)e=t;else if(b.searchPseudoElementsFullScan)e=t.querySelectorAll("*");else{var r=new Set,n=_t(document.styleSheets),o;try{for(n.s();!(o=n.n()).done;){var i=o.value;try{var f=_t(i.cssRules),l;try{for(f.s();!(l=f.n()).done;){var c=l.value,y=pi(c.selectorText),h=_t(y),x;try{for(h.s();!(x=h.n()).done;){var _=x.value;r.add(_)}}catch(p){h.e(p)}finally{h.f()}}}catch(p){f.e(p)}finally{f.f()}}catch(p){b.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(p.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(p){n.e(p)}finally{n.f()}if(!r.size)return;var u=Array.from(r).join(", ");try{e=t.querySelectorAll(u)}catch{}}return new Promise(function(p,g){var k=st(e).filter(di).map(ci),A=me.begin("searchPseudoElements");Qa(),Promise.all(k).then(function(){A(),ee(),p()}).catch(function(){A(),ee(),g()})})}}var vi={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=qe,e}}},provides:function(a){a.pseudoElements2svg=function(e){var r=e.node,n=r===void 0?R:r;b.searchPseudoElements&&qe(n)}}},Ve=!1,yi={mixout:function(){return{dom:{unwatch:function(){Qa(),Ve=!0}}}},hooks:function(){return{bootstrap:function(){We(Jt("mutationObserverCallbacks",{}))},noAuto:function(){Go()},watch:function(e){var r=e.observeMutationsRoot;Ve?ee():We(Jt("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Je=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,n){var o=n.toLowerCase().split("-"),i=o[0],f=o.slice(1).join("-");if(i&&f==="h")return r.flipX=!0,r;if(i&&f==="v")return r.flipY=!0,r;if(f=parseFloat(f),isNaN(f))return r;switch(i){case"grow":r.size=r.size+f;break;case"shrink":r.size=r.size-f;break;case"left":r.x=r.x-f;break;case"right":r.x=r.x+f;break;case"up":r.y=r.y-f;break;case"down":r.y=r.y+f;break;case"rotate":r.rotate=r.rotate+f;break}return r},e)},hi={mixout:function(){return{parse:{transform:function(e){return Je(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,r){var n=r.getAttribute("data-fa-transform");return n&&(e.transform=Je(n)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var r=e.main,n=e.transform,o=e.containerWidth,i=e.iconWidth,f={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),c="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),y="rotate(".concat(n.rotate," 0 0)"),h={transform:"".concat(l," ").concat(c," ").concat(y)},x={transform:"translate(".concat(i/2*-1," -256)")},_={outer:f,inner:h,path:x};return{tag:"g",attributes:d({},_.outer),children:[{tag:"g",attributes:d({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:d(d({},r.icon.attributes),_.path)}]}]}}}},Ut={x:0,y:0,width:"100%",height:"100%"};function Ke(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||a)&&(t.attributes.fill="black"),t}function gi(t){return t.tag==="g"?t.children:[t]}var bi={hooks:function(){return{parseNodeAttributes:function(e,r){var n=r.getAttribute("data-fa-mask"),o=n?Ct(n.split(" ").map(function(i){return i.trim()})):qa();return o.prefix||(o.prefix=J()),e.mask=o,e.maskId=r.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var r=e.children,n=e.attributes,o=e.main,i=e.mask,f=e.maskId,l=e.transform,c=o.width,y=o.icon,h=i.width,x=i.icon,_=lo({transform:l,containerWidth:h,iconWidth:c}),u={tag:"rect",attributes:d(d({},Ut),{},{fill:"white"})},p=y.children?{children:y.children.map(Ke)}:{},g={tag:"g",attributes:d({},_.inner),children:[Ke(d({tag:y.tag,attributes:d(d({},y.attributes),_.path)},p))]},k={tag:"g",attributes:d({},_.outer),children:[g]},A="mask-".concat(f||Oe()),O="clip-".concat(f||Oe()),I={tag:"mask",attributes:d(d({},Ut),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[u,k]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:gi(x)},I]};return r.push(v,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(A,")")},Ut)}),{children:r,attributes:n}}}},_i={provides:function(a){var e=!1;V.matchMedia&&(e=V.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:d(d({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=d(d({},o),{},{attributeName:"opacity"}),f={tag:"circle",attributes:d(d({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:d(d({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},i),{},{values:"1;0;1;1;0;1;"})}),r.push(f),r.push({tag:"path",attributes:d(d({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:d(d({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||r.push({tag:"path",attributes:d(d({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},xi={hooks:function(){return{parseNodeAttributes:function(e,r){var n=r.getAttribute("data-fa-symbol"),o=n===null?!1:n===""?!0:n;return e.symbol=o,e}}}},wi=[mo,ri,ni,oi,ii,vi,yi,hi,bi,_i,xi];Io(wi,{mixoutsTo:$});$.noAuto;var Ti=$.config;$.library;$.dom;var ar=$.parse;$.findIconDefinition;$.toHtml;var ki=$.icon;$.layer;$.text;$.counter;function Si(t){return t=t-0,t===t}function rr(t){return Si(t)?t:(t=t.replaceAll(/[_-]+(.)?/g,(a,e)=>e?e.toUpperCase():""),t.charAt(0).toLowerCase()+t.slice(1))}function Ai(t){return t.charAt(0).toUpperCase()+t.slice(1)}var rt=new Map,Ei=1e3;function Pi(t){if(rt.has(t))return rt.get(t);const a={};let e=0;const r=t.length;for(;e<r;){const n=t.indexOf(";",e),o=n===-1?r:n,i=t.slice(e,o).trim();if(i){const f=i.indexOf(":");if(f>0){const l=i.slice(0,f).trim(),c=i.slice(f+1).trim();if(l&&c){const y=rr(l);a[y.startsWith("webkit")?Ai(y):y]=c}}}e=o+1}if(rt.size===Ei){const n=rt.keys().next().value;n&&rt.delete(n)}return rt.set(t,a),a}function nr(t,a,e={}){if(typeof a=="string")return a;const r=(a.children||[]).map(c=>nr(t,c)),n=a.attributes||{},o={};for(const[c,y]of Object.entries(n))switch(!0){case c==="class":{o.className=y,delete n.class;break}case c==="style":{o.style=Pi(String(y));break}case c.startsWith("aria-"):case c.startsWith("data-"):{o[c.toLowerCase()]=y;break}default:o[rr(c)]=y}const{style:i,"aria-label":f,...l}=e;return i&&(o.style=o.style?{...o.style,...i}:i),f&&(o["aria-label"]=f,o["aria-hidden"]="false"),t(a.tag,{...l,...o},...r)}var Ze=(t,a)=>{const e=aa.useId();return t||(a?e:void 0)},Ii=class{constructor(t="react-fontawesome"){this.enabled=!1;let a=!1;try{a=typeof process<"u"&&!1}catch{}this.scope=t,this.enabled=a}log(...t){this.enabled&&console.log(`[${this.scope}]`,...t)}warn(...t){this.enabled&&console.warn(`[${this.scope}]`,...t)}error(...t){this.enabled&&console.error(`[${this.scope}]`,...t)}},Ci="searchPseudoElementsFullScan"in Ti?"7.0.0":"6.0.0",Oi=Number.parseInt(Ci)>=7,Y={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},Ri={left:"fa-pull-left",right:"fa-pull-right"},Ni={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Fi={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},H={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function ji(t){const{beat:a,fade:e,beatFade:r,bounce:n,shake:o,spin:i,spinPulse:f,spinReverse:l,pulse:c,fixedWidth:y,inverse:h,border:x,flip:_,size:u,rotation:p,pull:g,swapOpacity:k,rotateBy:A,widthAuto:O,className:I}=t,v=[];return I&&v.push(...I.split(" ")),a&&v.push(Y.beat),e&&v.push(Y.fade),r&&v.push(Y.beatFade),n&&v.push(Y.bounce),o&&v.push(Y.shake),i&&v.push(Y.spin),l&&v.push(Y.spinReverse),f&&v.push(Y.spinPulse),c&&v.push(Y.pulse),y&&v.push(H.fixedWidth),h&&v.push(H.inverse),x&&v.push(H.border),_===!0&&v.push(H.flip),(_==="horizontal"||_==="both")&&v.push(H.flipHorizontal),(_==="vertical"||_==="both")&&v.push(H.flipVertical),u!=null&&v.push(Fi[u]),p!=null&&p!==0&&v.push(Ni[p]),g!=null&&v.push(Ri[g]),k&&v.push(H.swapOpacity),Oi&&(A&&v.push(H.rotateBy),O&&v.push(H.widthAuto)),v}var Li=t=>typeof t=="object"&&"icon"in t&&!!t.icon;function Qe(t){if(t)return Li(t)?t:ar.icon(t)}function Mi(t){return Object.keys(t)}var ta=new Ii("FontAwesomeIcon"),or={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},$i=new Set(Object.keys(or)),zi=ra.forwardRef((t,a)=>{const e={...or,...t},{icon:r,mask:n,symbol:o,title:i,titleId:f,maskId:l,transform:c}=e,y=Ze(l,!!n),h=Ze(f,!!i),x=Qe(r);if(!x)return ta.error("Icon lookup is undefined",r),null;const _=ji(e),u=typeof c=="string"?ar.transform(c):c,p=Qe(n),g=ki(x,{..._.length>0&&{classes:_},...u&&{transform:u},...p&&{mask:p},symbol:o,title:i,titleId:h,maskId:y});if(!g)return ta.error("Could not find icon",x),null;const{abstract:k}=g,A={ref:a};for(const O of Mi(e))$i.has(O)||(A[O]=e[O]);return Di(k[0],A)});zi.displayName="FontAwesomeIcon";var Di=nr.bind(null,ra.createElement),Tt={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */var Ui=Tt.exports,ea;function Wi(){return ea||(ea=1,function(t,a){(function(e,r){t.exports=r()})(Ui,function(){var e={};e.version="0.2.0";var r=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};e.configure=function(u){var p,g;for(p in u)g=u[p],g!==void 0&&u.hasOwnProperty(p)&&(r[p]=g);return this},e.status=null,e.set=function(u){var p=e.isStarted();u=n(u,r.minimum,1),e.status=u===1?null:u;var g=e.render(!p),k=g.querySelector(r.barSelector),A=r.speed,O=r.easing;return g.offsetWidth,f(function(I){r.positionUsing===""&&(r.positionUsing=e.getPositioningCSS()),l(k,i(u,A,O)),u===1?(l(g,{transition:"none",opacity:1}),g.offsetWidth,setTimeout(function(){l(g,{transition:"all "+A+"ms linear",opacity:0}),setTimeout(function(){e.remove(),I()},A)},A)):setTimeout(I,A)}),this},e.isStarted=function(){return typeof e.status=="number"},e.start=function(){e.status||e.set(0);var u=function(){setTimeout(function(){e.status&&(e.trickle(),u())},r.trickleSpeed)};return r.trickle&&u(),this},e.done=function(u){return!u&&!e.status?this:e.inc(.3+.5*Math.random()).set(1)},e.inc=function(u){var p=e.status;return p?(typeof u!="number"&&(u=(1-p)*n(Math.random()*p,.1,.95)),p=n(p+u,0,.994),e.set(p)):e.start()},e.trickle=function(){return e.inc(Math.random()*r.trickleRate)},function(){var u=0,p=0;e.promise=function(g){return!g||g.state()==="resolved"?this:(p===0&&e.start(),u++,p++,g.always(function(){p--,p===0?(u=0,e.done()):e.set((u-p)/u)}),this)}}(),e.render=function(u){if(e.isRendered())return document.getElementById("nprogress");y(document.documentElement,"nprogress-busy");var p=document.createElement("div");p.id="nprogress",p.innerHTML=r.template;var g=p.querySelector(r.barSelector),k=u?"-100":o(e.status||0),A=document.querySelector(r.parent),O;return l(g,{transition:"all 0 linear",transform:"translate3d("+k+"%,0,0)"}),r.showSpinner||(O=p.querySelector(r.spinnerSelector),O&&_(O)),A!=document.body&&y(A,"nprogress-custom-parent"),A.appendChild(p),p},e.remove=function(){h(document.documentElement,"nprogress-busy"),h(document.querySelector(r.parent),"nprogress-custom-parent");var u=document.getElementById("nprogress");u&&_(u)},e.isRendered=function(){return!!document.getElementById("nprogress")},e.getPositioningCSS=function(){var u=document.body.style,p="WebkitTransform"in u?"Webkit":"MozTransform"in u?"Moz":"msTransform"in u?"ms":"OTransform"in u?"O":"";return p+"Perspective"in u?"translate3d":p+"Transform"in u?"translate":"margin"};function n(u,p,g){return u<p?p:u>g?g:u}function o(u){return(-1+u)*100}function i(u,p,g){var k;return r.positionUsing==="translate3d"?k={transform:"translate3d("+o(u)+"%,0,0)"}:r.positionUsing==="translate"?k={transform:"translate("+o(u)+"%,0)"}:k={"margin-left":o(u)+"%"},k.transition="all "+p+"ms "+g,k}var f=function(){var u=[];function p(){var g=u.shift();g&&g(p)}return function(g){u.push(g),u.length==1&&p()}}(),l=function(){var u=["Webkit","O","Moz","ms"],p={};function g(I){return I.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(v,j){return j.toUpperCase()})}function k(I){var v=document.body.style;if(I in v)return I;for(var j=u.length,z=I.charAt(0).toUpperCase()+I.slice(1),M;j--;)if(M=u[j]+z,M in v)return M;return I}function A(I){return I=g(I),p[I]||(p[I]=k(I))}function O(I,v,j){v=A(v),I.style[v]=j}return function(I,v){var j=arguments,z,M;if(j.length==2)for(z in v)M=v[z],M!==void 0&&v.hasOwnProperty(z)&&O(I,z,M);else O(I,j[1],j[2])}}();function c(u,p){var g=typeof u=="string"?u:x(u);return g.indexOf(" "+p+" ")>=0}function y(u,p){var g=x(u),k=g+p;c(g,p)||(u.className=k.substring(1))}function h(u,p){var g=x(u),k;c(u,p)&&(k=g.replace(" "+p+" "," "),u.className=k.substring(1,k.length-1))}function x(u){return(" "+(u.className||"")+" ").replace(/\s+/gi," ")}function _(u){u&&u.parentNode&&u.parentNode.removeChild(u)}return e})}(Tt)),Tt.exports}Wi();function Yi(t){if(typeof document>"u")return;let a=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",a.firstChild?a.insertBefore(e,a.firstChild):a.appendChild(e),e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}Yi(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
