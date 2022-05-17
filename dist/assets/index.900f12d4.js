var Mg=Object.defineProperty,bg=Object.defineProperties;var Fg=Object.getOwnPropertyDescriptors;var io=Object.getOwnPropertySymbols;var Cc=Object.prototype.hasOwnProperty,Rc=Object.prototype.propertyIsEnumerable;var Tc=(t,e,n)=>e in t?Mg(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,b=(t,e)=>{for(var n in e||(e={}))Cc.call(e,n)&&Tc(t,n,e[n]);if(io)for(var n of io(e))Rc.call(e,n)&&Tc(t,n,e[n]);return t},j=(t,e)=>bg(t,Fg(e));var W=(t,e)=>{var n={};for(var r in t)Cc.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&io)for(var r of io(t))e.indexOf(r)<0&&Rc.call(t,r)&&(n[r]=t[r]);return n};const Ug=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Ug();var v={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hi=Symbol.for("react.element"),zg=Symbol.for("react.portal"),$g=Symbol.for("react.fragment"),jg=Symbol.for("react.strict_mode"),Bg=Symbol.for("react.profiler"),Vg=Symbol.for("react.provider"),Wg=Symbol.for("react.context"),Hg=Symbol.for("react.forward_ref"),Kg=Symbol.for("react.suspense"),Gg=Symbol.for("react.memo"),qg=Symbol.for("react.lazy"),Pc=Symbol.iterator;function Qg(t){return t===null||typeof t!="object"?null:(t=Pc&&t[Pc]||t["@@iterator"],typeof t=="function"?t:null)}var Cf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rf=Object.assign,Pf={};function Or(t,e,n){this.props=t,this.context=e,this.refs=Pf,this.updater=n||Cf}Or.prototype.isReactComponent={};Or.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Or.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Nf(){}Nf.prototype=Or.prototype;function Ql(t,e,n){this.props=t,this.context=e,this.refs=Pf,this.updater=n||Cf}var Yl=Ql.prototype=new Nf;Yl.constructor=Ql;Rf(Yl,Or.prototype);Yl.isPureReactComponent=!0;var Nc=Array.isArray,xf=Object.prototype.hasOwnProperty,Jl={current:null},Of={key:!0,ref:!0,__self:!0,__source:!0};function Af(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)xf.call(e,r)&&!Of.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Hi,type:t,key:o,ref:s,props:i,_owner:Jl.current}}function Yg(t,e){return{$$typeof:Hi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xl(t){return typeof t=="object"&&t!==null&&t.$$typeof===Hi}function Jg(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xc=/\/+/g;function na(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Jg(""+t.key):e.toString(36)}function Co(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Hi:case zg:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+na(s,0):r,Nc(i)?(n="",t!=null&&(n=t.replace(xc,"$&/")+"/"),Co(i,e,n,"",function(u){return u})):i!=null&&(Xl(i)&&(i=Yg(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(xc,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",Nc(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+na(o,a);s+=Co(o,e,n,l,i)}else if(l=Qg(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+na(o,a++),s+=Co(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function oo(t,e,n){if(t==null)return t;var r=[],i=0;return Co(t,r,"","",function(o){return e.call(n,o,i++)}),r}function Xg(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ce={current:null},Ro={transition:null},Zg={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:Jl};M.Children={map:oo,forEach:function(t,e,n){oo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return oo(t,function(){e++}),e},toArray:function(t){return oo(t,function(e){return e})||[]},only:function(t){if(!Xl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};M.Component=Or;M.Fragment=$g;M.Profiler=Bg;M.PureComponent=Ql;M.StrictMode=jg;M.Suspense=Kg;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zg;M.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Rf({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Jl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xf.call(e,l)&&!Of.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Hi,type:t.type,key:i,ref:o,props:r,_owner:s}};M.createContext=function(t){return t={$$typeof:Wg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Vg,_context:t},t.Consumer=t};M.createElement=Af;M.createFactory=function(t){var e=Af.bind(null,t);return e.type=t,e};M.createRef=function(){return{current:null}};M.forwardRef=function(t){return{$$typeof:Hg,render:t}};M.isValidElement=Xl;M.lazy=function(t){return{$$typeof:qg,_payload:{_status:-1,_result:t},_init:Xg}};M.memo=function(t,e){return{$$typeof:Gg,type:t,compare:e===void 0?null:e}};M.startTransition=function(t){var e=Ro.transition;Ro.transition={};try{t()}finally{Ro.transition=e}};M.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};M.useCallback=function(t,e){return Ce.current.useCallback(t,e)};M.useContext=function(t){return Ce.current.useContext(t)};M.useDebugValue=function(){};M.useDeferredValue=function(t){return Ce.current.useDeferredValue(t)};M.useEffect=function(t,e){return Ce.current.useEffect(t,e)};M.useId=function(){return Ce.current.useId()};M.useImperativeHandle=function(t,e,n){return Ce.current.useImperativeHandle(t,e,n)};M.useInsertionEffect=function(t,e){return Ce.current.useInsertionEffect(t,e)};M.useLayoutEffect=function(t,e){return Ce.current.useLayoutEffect(t,e)};M.useMemo=function(t,e){return Ce.current.useMemo(t,e)};M.useReducer=function(t,e,n){return Ce.current.useReducer(t,e,n)};M.useRef=function(t){return Ce.current.useRef(t)};M.useState=function(t){return Ce.current.useState(t)};M.useSyncExternalStore=function(t,e,n){return Ce.current.useSyncExternalStore(t,e,n)};M.useTransition=function(){return Ce.current.useTransition()};M.version="18.1.0";v.exports=M;var St=v.exports,Ua={},Zl={exports:{}},$e={},Lf={exports:{}},Df={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,L){var D=N.length;N.push(L);e:for(;0<D;){var te=D-1>>>1,ce=N[te];if(0<i(ce,L))N[te]=L,N[D]=ce,D=te;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var L=N[0],D=N.pop();if(D!==L){N[0]=D;e:for(var te=0,ce=N.length,no=ce>>>1;te<no;){var _n=2*(te+1)-1,ta=N[_n],wn=_n+1,ro=N[wn];if(0>i(ta,D))wn<ce&&0>i(ro,ta)?(N[te]=ro,N[wn]=D,te=wn):(N[te]=ta,N[_n]=D,te=_n);else if(wn<ce&&0>i(ro,D))N[te]=ro,N[wn]=D,te=wn;else break e}}return L}function i(N,L){var D=N.sortIndex-L.sortIndex;return D!==0?D:N.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,d=3,g=!1,y=!1,C=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=N)r(u),L.sortIndex=L.expirationTime,e(l,L);else break;L=n(u)}}function w(N){if(C=!1,m(N),!y)if(n(l)!==null)y=!0,Zs(T);else{var L=n(u);L!==null&&ea(w,L.startTime-N)}}function T(N,L){y=!1,C&&(C=!1,p(S),S=-1),g=!0;var D=d;try{for(m(L),f=n(l);f!==null&&(!(f.expirationTime>L)||N&&!Q());){var te=f.callback;if(typeof te=="function"){f.callback=null,d=f.priorityLevel;var ce=te(f.expirationTime<=L);L=t.unstable_now(),typeof ce=="function"?f.callback=ce:f===n(l)&&r(l),m(L)}else r(l);f=n(l)}if(f!==null)var no=!0;else{var _n=n(u);_n!==null&&ea(w,_n.startTime-L),no=!1}return no}finally{f=null,d=D,g=!1}}var R=!1,E=null,S=-1,A=5,O=-1;function Q(){return!(t.unstable_now()-O<A)}function Be(){if(E!==null){var N=t.unstable_now();O=N;var L=!0;try{L=E(!0,N)}finally{L?Et():(R=!1,E=null)}}else R=!1}var Et;if(typeof h=="function")Et=function(){h(Be)};else if(typeof MessageChannel!="undefined"){var yn=new MessageChannel,Sc=yn.port2;yn.port1.onmessage=Be,Et=function(){Sc.postMessage(null)}}else Et=function(){x(Be,0)};function Zs(N){E=N,R||(R=!0,Et())}function ea(N,L){S=x(function(){N(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,Zs(T))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(d){case 1:case 2:case 3:var L=3;break;default:L=d}var D=d;d=L;try{return N()}finally{d=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,L){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var D=d;d=N;try{return L()}finally{d=D}},t.unstable_scheduleCallback=function(N,L,D){var te=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?te+D:te):D=te,N){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=D+ce,N={id:c++,callback:L,priorityLevel:N,startTime:D,expirationTime:ce,sortIndex:-1},D>te?(N.sortIndex=D,e(u,N),n(l)===null&&N===n(u)&&(C?(p(S),S=-1):C=!0,ea(w,D-te))):(N.sortIndex=ce,e(l,N),y||g||(y=!0,Zs(T))),N},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(N){var L=d;return function(){var D=d;d=L;try{return N.apply(this,arguments)}finally{d=D}}}})(Df);Lf.exports=Df;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf=v.exports,ze=Lf.exports;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bf=new Set,wi={};function Kn(t,e){Ir(t,e),Ir(t+"Capture",e)}function Ir(t,e){for(wi[t]=e,t=0;t<e.length;t++)bf.add(e[t])}var Lt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),za=Object.prototype.hasOwnProperty,ev=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oc={},Ac={};function tv(t){return za.call(Ac,t)?!0:za.call(Oc,t)?!1:ev.test(t)?Ac[t]=!0:(Oc[t]=!0,!1)}function nv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rv(t,e,n,r){if(e===null||typeof e=="undefined"||nv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Re(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ye[t]=new Re(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ye[e]=new Re(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ye[t]=new Re(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ye[t]=new Re(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ye[t]=new Re(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ye[t]=new Re(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ye[t]=new Re(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ye[t]=new Re(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ye[t]=new Re(t,5,!1,t.toLowerCase(),null,!1,!1)});var eu=/[\-:]([a-z])/g;function tu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(eu,tu);ye[e]=new Re(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(eu,tu);ye[e]=new Re(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(eu,tu);ye[e]=new Re(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ye[t]=new Re(t,1,!1,t.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ye[t]=new Re(t,1,!1,t.toLowerCase(),null,!0,!0)});function nu(t,e,n,r){var i=ye.hasOwnProperty(e)?ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rv(e,n,i,r)&&(n=null),r||i===null?tv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ut=Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,so=Symbol.for("react.element"),er=Symbol.for("react.portal"),tr=Symbol.for("react.fragment"),ru=Symbol.for("react.strict_mode"),$a=Symbol.for("react.profiler"),Ff=Symbol.for("react.provider"),Uf=Symbol.for("react.context"),iu=Symbol.for("react.forward_ref"),ja=Symbol.for("react.suspense"),Ba=Symbol.for("react.suspense_list"),ou=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),zf=Symbol.for("react.offscreen"),Lc=Symbol.iterator;function Wr(t){return t===null||typeof t!="object"?null:(t=Lc&&t[Lc]||t["@@iterator"],typeof t=="function"?t:null)}var X=Object.assign,ra;function ri(t){if(ra===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ra=e&&e[1]||""}return`
`+ra+t}var ia=!1;function oa(t,e){if(!t||ia)return"";ia=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{ia=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ri(t):""}function iv(t){switch(t.tag){case 5:return ri(t.type);case 16:return ri("Lazy");case 13:return ri("Suspense");case 19:return ri("SuspenseList");case 0:case 2:case 15:return t=oa(t.type,!1),t;case 11:return t=oa(t.type.render,!1),t;case 1:return t=oa(t.type,!0),t;default:return""}}function Va(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case tr:return"Fragment";case er:return"Portal";case $a:return"Profiler";case ru:return"StrictMode";case ja:return"Suspense";case Ba:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Uf:return(t.displayName||"Context")+".Consumer";case Ff:return(t._context.displayName||"Context")+".Provider";case iu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ou:return e=t.displayName||null,e!==null?e:Va(t.type)||"Memo";case Wt:e=t._payload,t=t._init;try{return Va(t(e))}catch{}}return null}function ov(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Va(e);case 8:return e===ru?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ln(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $f(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sv(t){var e=$f(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ao(t){t._valueTracker||(t._valueTracker=sv(t))}function jf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$f(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bo(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wa(t,e){var n=e.checked;return X({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Dc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ln(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bf(t,e){e=e.checked,e!=null&&nu(t,"checked",e,!1)}function Ha(t,e){Bf(t,e);var n=ln(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ka(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ka(t,e.type,ln(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ka(t,e,n){(e!=="number"||Bo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ii=Array.isArray;function hr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ln(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ga(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return X({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(ii(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ln(n)}}function Vf(t,e){var n=ln(e.value),r=ln(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lo,Hf=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ei(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},av=["Webkit","ms","Moz","O"];Object.keys(ui).forEach(function(t){av.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ui[e]=ui[t]})});function Kf(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ui.hasOwnProperty(t)&&ui[t]?(""+e).trim():e+"px"}function Gf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kf(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var lv=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qa(t,e){if(e){if(lv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Ya(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ja=null;function su(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xa=null,pr=null,mr=null;function Uc(t){if(t=qi(t)){if(typeof Xa!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Cs(e),Xa(t.stateNode,t.type,e))}}function qf(t){pr?mr?mr.push(t):mr=[t]:pr=t}function Qf(){if(pr){var t=pr,e=mr;if(mr=pr=null,Uc(t),e)for(t=0;t<e.length;t++)Uc(e[t])}}function Yf(t,e){return t(e)}function Jf(){}var sa=!1;function Xf(t,e,n){if(sa)return t(e,n);sa=!0;try{return Yf(t,e,n)}finally{sa=!1,(pr!==null||mr!==null)&&(Jf(),Qf())}}function Ii(t,e){var n=t.stateNode;if(n===null)return null;var r=Cs(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Za=!1;if(Lt)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Za=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Za=!1}function uv(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ci=!1,Vo=null,Wo=!1,el=null,cv={onError:function(t){ci=!0,Vo=t}};function dv(t,e,n,r,i,o,s,a,l){ci=!1,Vo=null,uv.apply(cv,arguments)}function fv(t,e,n,r,i,o,s,a,l){if(dv.apply(this,arguments),ci){if(ci){var u=Vo;ci=!1,Vo=null}else throw Error(I(198));Wo||(Wo=!0,el=u)}}function Gn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zc(t){if(Gn(t)!==t)throw Error(I(188))}function hv(t){var e=t.alternate;if(!e){if(e=Gn(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return zc(i),t;if(o===r)return zc(i),e;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function eh(t){return t=hv(t),t!==null?th(t):null}function th(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=th(t);if(e!==null)return e;t=t.sibling}return null}var nh=ze.unstable_scheduleCallback,$c=ze.unstable_cancelCallback,pv=ze.unstable_shouldYield,mv=ze.unstable_requestPaint,ne=ze.unstable_now,gv=ze.unstable_getCurrentPriorityLevel,au=ze.unstable_ImmediatePriority,rh=ze.unstable_UserBlockingPriority,Ho=ze.unstable_NormalPriority,vv=ze.unstable_LowPriority,ih=ze.unstable_IdlePriority,Is=null,gt=null;function yv(t){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(Is,t,void 0,(t.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:Ev,_v=Math.log,wv=Math.LN2;function Ev(t){return t>>>=0,t===0?32:31-(_v(t)/wv|0)|0}var uo=64,co=4194304;function oi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ko(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=oi(a):(o&=s,o!==0&&(r=oi(o)))}else s=n&~i,s!==0?r=oi(s):o!==0&&(r=oi(o));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rt(e),i=1<<n,r|=t[n],e&=~i;return r}function Iv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-rt(o),a=1<<s,l=i[s];l===-1?((a&n)===0||(a&r)!==0)&&(i[s]=Iv(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function tl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function oh(){var t=uo;return uo<<=1,(uo&4194240)===0&&(uo=64),t}function aa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ki(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rt(e),t[e]=n}function Sv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rt(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function lu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var $=0;function sh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ah,uu,lh,uh,ch,nl=!1,fo=[],Xt=null,Zt=null,en=null,ki=new Map,Si=new Map,Gt=[],Tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jc(t,e){switch(t){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":ki.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(e.pointerId)}}function Kr(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=qi(e),e!==null&&uu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Cv(t,e,n,r,i){switch(e){case"focusin":return Xt=Kr(Xt,t,e,n,r,i),!0;case"dragenter":return Zt=Kr(Zt,t,e,n,r,i),!0;case"mouseover":return en=Kr(en,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return ki.set(o,Kr(ki.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Si.set(o,Kr(Si.get(o)||null,t,e,n,r,i)),!0}return!1}function dh(t){var e=Rn(t.target);if(e!==null){var n=Gn(e);if(n!==null){if(e=n.tag,e===13){if(e=Zf(n),e!==null){t.blockedOn=e,ch(t.priority,function(){lh(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Po(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ja=r,n.target.dispatchEvent(r),Ja=null}else return e=qi(n),e!==null&&uu(e),t.blockedOn=n,!1;e.shift()}return!0}function Bc(t,e,n){Po(t)&&n.delete(e)}function Rv(){nl=!1,Xt!==null&&Po(Xt)&&(Xt=null),Zt!==null&&Po(Zt)&&(Zt=null),en!==null&&Po(en)&&(en=null),ki.forEach(Bc),Si.forEach(Bc)}function Gr(t,e){t.blockedOn===e&&(t.blockedOn=null,nl||(nl=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,Rv)))}function Ti(t){function e(i){return Gr(i,t)}if(0<fo.length){Gr(fo[0],t);for(var n=1;n<fo.length;n++){var r=fo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xt!==null&&Gr(Xt,t),Zt!==null&&Gr(Zt,t),en!==null&&Gr(en,t),ki.forEach(e),Si.forEach(e),n=0;n<Gt.length;n++)r=Gt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gt.length&&(n=Gt[0],n.blockedOn===null);)dh(n),n.blockedOn===null&&Gt.shift()}var gr=Ut.ReactCurrentBatchConfig,Go=!0;function Pv(t,e,n,r){var i=$,o=gr.transition;gr.transition=null;try{$=1,cu(t,e,n,r)}finally{$=i,gr.transition=o}}function Nv(t,e,n,r){var i=$,o=gr.transition;gr.transition=null;try{$=4,cu(t,e,n,r)}finally{$=i,gr.transition=o}}function cu(t,e,n,r){if(Go){var i=rl(t,e,n,r);if(i===null)va(t,e,r,qo,n),jc(t,r);else if(Cv(i,t,e,n,r))r.stopPropagation();else if(jc(t,r),e&4&&-1<Tv.indexOf(t)){for(;i!==null;){var o=qi(i);if(o!==null&&ah(o),o=rl(t,e,n,r),o===null&&va(t,e,r,qo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else va(t,e,r,null,n)}}var qo=null;function rl(t,e,n,r){if(qo=null,t=su(r),t=Rn(t),t!==null)if(e=Gn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qo=t,null}function fh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gv()){case au:return 1;case rh:return 4;case Ho:case vv:return 16;case ih:return 536870912;default:return 16}default:return 16}}var Qt=null,du=null,No=null;function hh(){if(No)return No;var t,e=du,n=e.length,r,i="value"in Qt?Qt.value:Qt.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return No=i.slice(t,1<r?1-r:void 0)}function xo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ho(){return!0}function Vc(){return!1}function je(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ho:Vc,this.isPropagationStopped=Vc,this}return X(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),e}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fu=je(Ar),Gi=X({},Ar,{view:0,detail:0}),xv=je(Gi),la,ua,qr,ks=X({},Gi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qr&&(qr&&t.type==="mousemove"?(la=t.screenX-qr.screenX,ua=t.screenY-qr.screenY):ua=la=0,qr=t),la)},movementY:function(t){return"movementY"in t?t.movementY:ua}}),Wc=je(ks),Ov=X({},ks,{dataTransfer:0}),Av=je(Ov),Lv=X({},Gi,{relatedTarget:0}),ca=je(Lv),Dv=X({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Mv=je(Dv),bv=X({},Ar,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fv=je(bv),Uv=X({},Ar,{data:0}),Hc=je(Uv),zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jv[t])?!!e[t]:!1}function hu(){return Bv}var Vv=X({},Gi,{key:function(t){if(t.key){var e=zv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$v[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(t){return t.type==="keypress"?xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wv=je(Vv),Hv=X({},ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kc=je(Hv),Kv=X({},Gi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),Gv=je(Kv),qv=X({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qv=je(qv),Yv=X({},ks,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jv=je(Yv),Xv=[9,13,27,32],pu=Lt&&"CompositionEvent"in window,di=null;Lt&&"documentMode"in document&&(di=document.documentMode);var Zv=Lt&&"TextEvent"in window&&!di,ph=Lt&&(!pu||di&&8<di&&11>=di),Gc=String.fromCharCode(32),qc=!1;function mh(t,e){switch(t){case"keyup":return Xv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var nr=!1;function ey(t,e){switch(t){case"compositionend":return gh(e);case"keypress":return e.which!==32?null:(qc=!0,Gc);case"textInput":return t=e.data,t===Gc&&qc?null:t;default:return null}}function ty(t,e){if(nr)return t==="compositionend"||!pu&&mh(t,e)?(t=hh(),No=du=Qt=null,nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ph&&e.locale!=="ko"?null:e.data;default:return null}}var ny={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ny[t.type]:e==="textarea"}function vh(t,e,n,r){qf(r),e=Qo(e,"onChange"),0<e.length&&(n=new fu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fi=null,Ci=null;function ry(t){Ph(t,0)}function Ss(t){var e=or(t);if(jf(e))return t}function iy(t,e){if(t==="change")return e}var yh=!1;if(Lt){var da;if(Lt){var fa="oninput"in document;if(!fa){var Yc=document.createElement("div");Yc.setAttribute("oninput","return;"),fa=typeof Yc.oninput=="function"}da=fa}else da=!1;yh=da&&(!document.documentMode||9<document.documentMode)}function Jc(){fi&&(fi.detachEvent("onpropertychange",_h),Ci=fi=null)}function _h(t){if(t.propertyName==="value"&&Ss(Ci)){var e=[];vh(e,Ci,t,su(t)),Xf(ry,e)}}function oy(t,e,n){t==="focusin"?(Jc(),fi=e,Ci=n,fi.attachEvent("onpropertychange",_h)):t==="focusout"&&Jc()}function sy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ss(Ci)}function ay(t,e){if(t==="click")return Ss(e)}function ly(t,e){if(t==="input"||t==="change")return Ss(e)}function uy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ot=typeof Object.is=="function"?Object.is:uy;function Ri(t,e){if(ot(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!za.call(e,i)||!ot(t[i],e[i]))return!1}return!0}function Xc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zc(t,e){var n=Xc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xc(n)}}function wh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Eh(){for(var t=window,e=Bo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bo(t.document)}return e}function mu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cy(t){var e=Eh(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&wh(n.ownerDocument.documentElement,n)){if(r!==null&&mu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Zc(n,o);var s=Zc(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dy=Lt&&"documentMode"in document&&11>=document.documentMode,rr=null,il=null,hi=null,ol=!1;function ed(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ol||rr==null||rr!==Bo(r)||(r=rr,"selectionStart"in r&&mu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hi&&Ri(hi,r)||(hi=r,r=Qo(il,"onSelect"),0<r.length&&(e=new fu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=rr)))}function po(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ir={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},ha={},Ih={};Lt&&(Ih=document.createElement("div").style,"AnimationEvent"in window||(delete ir.animationend.animation,delete ir.animationiteration.animation,delete ir.animationstart.animation),"TransitionEvent"in window||delete ir.transitionend.transition);function Ts(t){if(ha[t])return ha[t];if(!ir[t])return t;var e=ir[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ih)return ha[t]=e[n];return t}var kh=Ts("animationend"),Sh=Ts("animationiteration"),Th=Ts("animationstart"),Ch=Ts("transitionend"),Rh=new Map,td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pn(t,e){Rh.set(t,e),Kn(e,[t])}for(var pa=0;pa<td.length;pa++){var ma=td[pa],fy=ma.toLowerCase(),hy=ma[0].toUpperCase()+ma.slice(1);pn(fy,"on"+hy)}pn(kh,"onAnimationEnd");pn(Sh,"onAnimationIteration");pn(Th,"onAnimationStart");pn("dblclick","onDoubleClick");pn("focusin","onFocus");pn("focusout","onBlur");pn(Ch,"onTransitionEnd");Ir("onMouseEnter",["mouseout","mouseover"]);Ir("onMouseLeave",["mouseout","mouseover"]);Ir("onPointerEnter",["pointerout","pointerover"]);Ir("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var si="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),py=new Set("cancel close invalid load scroll toggle".split(" ").concat(si));function nd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,fv(r,e,void 0,t),t.currentTarget=null}function Ph(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;nd(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;nd(i,a,u),o=l}}}if(Wo)throw t=el,Wo=!1,el=null,t}function H(t,e){var n=e[cl];n===void 0&&(n=e[cl]=new Set);var r=t+"__bubble";n.has(r)||(Nh(e,t,2,!1),n.add(r))}function ga(t,e,n){var r=0;e&&(r|=4),Nh(n,t,r,e)}var mo="_reactListening"+Math.random().toString(36).slice(2);function Pi(t){if(!t[mo]){t[mo]=!0,bf.forEach(function(n){n!=="selectionchange"&&(py.has(n)||ga(n,!1,t),ga(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[mo]||(e[mo]=!0,ga("selectionchange",!1,e))}}function Nh(t,e,n,r){switch(fh(e)){case 1:var i=Pv;break;case 4:i=Nv;break;default:i=cu}n=i.bind(null,e,n,t),i=void 0,!Za||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function va(t,e,n,r,i){var o=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Rn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Xf(function(){var u=o,c=su(n),f=[];e:{var d=Rh.get(t);if(d!==void 0){var g=fu,y=t;switch(t){case"keypress":if(xo(n)===0)break e;case"keydown":case"keyup":g=Wv;break;case"focusin":y="focus",g=ca;break;case"focusout":y="blur",g=ca;break;case"beforeblur":case"afterblur":g=ca;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Wc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Gv;break;case kh:case Sh:case Th:g=Mv;break;case Ch:g=Qv;break;case"scroll":g=xv;break;case"wheel":g=Jv;break;case"copy":case"cut":case"paste":g=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Kc}var C=(e&4)!==0,x=!C&&t==="scroll",p=C?d!==null?d+"Capture":null:d;C=[];for(var h=u,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Ii(h,p),w!=null&&C.push(Ni(h,w,m)))),x)break;h=h.return}0<C.length&&(d=new g(d,y,null,n,c),f.push({event:d,listeners:C}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==Ja&&(y=n.relatedTarget||n.fromElement)&&(Rn(y)||y[Dt]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Rn(y):null,y!==null&&(x=Gn(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(C=Wc,w="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(C=Kc,w="onPointerLeave",p="onPointerEnter",h="pointer"),x=g==null?d:or(g),m=y==null?d:or(y),d=new C(w,h+"leave",g,n,c),d.target=x,d.relatedTarget=m,w=null,Rn(c)===u&&(C=new C(p,h+"enter",y,n,c),C.target=m,C.relatedTarget=x,w=C),x=w,g&&y)t:{for(C=g,p=y,h=0,m=C;m;m=Jn(m))h++;for(m=0,w=p;w;w=Jn(w))m++;for(;0<h-m;)C=Jn(C),h--;for(;0<m-h;)p=Jn(p),m--;for(;h--;){if(C===p||p!==null&&C===p.alternate)break t;C=Jn(C),p=Jn(p)}C=null}else C=null;g!==null&&rd(f,d,g,C,!1),y!==null&&x!==null&&rd(f,x,y,C,!0)}}e:{if(d=u?or(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var T=iy;else if(Qc(d))if(yh)T=ly;else{T=sy;var R=oy}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=ay);if(T&&(T=T(t,u))){vh(f,T,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&Ka(d,"number",d.value)}switch(R=u?or(u):window,t){case"focusin":(Qc(R)||R.contentEditable==="true")&&(rr=R,il=u,hi=null);break;case"focusout":hi=il=rr=null;break;case"mousedown":ol=!0;break;case"contextmenu":case"mouseup":case"dragend":ol=!1,ed(f,n,c);break;case"selectionchange":if(dy)break;case"keydown":case"keyup":ed(f,n,c)}var E;if(pu)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else nr?mh(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(ph&&n.locale!=="ko"&&(nr||S!=="onCompositionStart"?S==="onCompositionEnd"&&nr&&(E=hh()):(Qt=c,du="value"in Qt?Qt.value:Qt.textContent,nr=!0)),R=Qo(u,S),0<R.length&&(S=new Hc(S,t,null,n,c),f.push({event:S,listeners:R}),E?S.data=E:(E=gh(n),E!==null&&(S.data=E)))),(E=Zv?ey(t,n):ty(t,n))&&(u=Qo(u,"onBeforeInput"),0<u.length&&(c=new Hc("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=E))}Ph(f,e)})}function Ni(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Qo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ii(t,n),o!=null&&r.unshift(Ni(t,o,i)),o=Ii(t,e),o!=null&&r.push(Ni(t,o,i))),t=t.return}return r}function Jn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rd(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ii(n,o),l!=null&&s.unshift(Ni(n,l,a))):i||(l=Ii(n,o),l!=null&&s.push(Ni(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var my=/\r\n?/g,gy=/\u0000|\uFFFD/g;function id(t){return(typeof t=="string"?t:""+t).replace(my,`
`).replace(gy,"")}function go(t,e,n){if(e=id(e),id(t)!==e&&n)throw Error(I(425))}function Yo(){}var sl=null,al=null;function ll(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ul=typeof setTimeout=="function"?setTimeout:void 0,vy=typeof clearTimeout=="function"?clearTimeout:void 0,od=typeof Promise=="function"?Promise:void 0,yy=typeof queueMicrotask=="function"?queueMicrotask:typeof od!="undefined"?function(t){return od.resolve(null).then(t).catch(_y)}:ul;function _y(t){setTimeout(function(){throw t})}function ya(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ti(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ti(e)}function Tt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Lr=Math.random().toString(36).slice(2),ct="__reactFiber$"+Lr,xi="__reactProps$"+Lr,Dt="__reactContainer$"+Lr,cl="__reactEvents$"+Lr,wy="__reactListeners$"+Lr,Ey="__reactHandles$"+Lr;function Rn(t){var e=t[ct];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dt]||n[ct]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sd(t);t!==null;){if(n=t[ct])return n;t=sd(t)}return e}t=n,n=t.parentNode}return null}function qi(t){return t=t[ct]||t[Dt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function or(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Cs(t){return t[xi]||null}var dl=[],sr=-1;function mn(t){return{current:t}}function G(t){0>sr||(t.current=dl[sr],dl[sr]=null,sr--)}function V(t,e){sr++,dl[sr]=t.current,t.current=e}var un={},ke=mn(un),Ae=mn(!1),bn=un;function kr(t,e){var n=t.type.contextTypes;if(!n)return un;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Le(t){return t=t.childContextTypes,t!=null}function Jo(){G(Ae),G(ke)}function ad(t,e,n){if(ke.current!==un)throw Error(I(168));V(ke,e),V(Ae,n)}function xh(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,ov(t)||"Unknown",i));return X({},n,r)}function Xo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||un,bn=ke.current,V(ke,t),V(Ae,Ae.current),!0}function ld(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=xh(t,e,bn),r.__reactInternalMemoizedMergedChildContext=t,G(Ae),G(ke),V(ke,t)):G(Ae),V(Ae,n)}var kt=null,Rs=!1,_a=!1;function Oh(t){kt===null?kt=[t]:kt.push(t)}function Iy(t){Rs=!0,Oh(t)}function gn(){if(!_a&&kt!==null){_a=!0;var t=0,e=$;try{var n=kt;for($=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}kt=null,Rs=!1}catch(i){throw kt!==null&&(kt=kt.slice(t+1)),nh(au,gn),i}finally{$=e,_a=!1}}return null}var ky=Ut.ReactCurrentBatchConfig;function Ze(t,e){if(t&&t.defaultProps){e=X({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Zo=mn(null),es=null,ar=null,gu=null;function vu(){gu=ar=es=null}function yu(t){var e=Zo.current;G(Zo),t._currentValue=e}function fl(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function vr(t,e){es=t,gu=ar=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Oe=!0),t.firstContext=null)}function Qe(t){var e=t._currentValue;if(gu!==t)if(t={context:t,memoizedValue:e,next:null},ar===null){if(es===null)throw Error(I(308));ar=t,es.dependencies={lanes:0,firstContext:t}}else ar=ar.next=t;return e}var nt=null,Ht=!1;function _u(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ah(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tn(t,e){var n=t.updateQueue;n!==null&&(n=n.shared,Ep(t)?(t=n.interleaved,t===null?(e.next=e,nt===null?nt=[n]:nt.push(n)):(e.next=t.next,t.next=e),n.interleaved=e):(t=n.pending,t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e))}function Oo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lu(t,n)}}function ud(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ts(t,e,n,r){var i=t.updateQueue;Ht=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,C=a;switch(d=e,g=n,C.tag){case 1:if(y=C.payload,typeof y=="function"){f=y.call(g,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=C.payload,d=typeof y=="function"?y.call(g,f,d):y,d==null)break e;f=X({},f,d);break e;case 2:Ht=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);zn|=s,t.lanes=s,t.memoizedState=f}}function cd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Lh=new Mf.Component().refs;function hl(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:X({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ps={isMounted:function(t){return(t=t._reactInternals)?Gn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Te(),i=rn(t),o=xt(r,i);o.payload=e,n!=null&&(o.callback=n),tn(t,o),e=Ge(t,i,r),e!==null&&Oo(e,t,i)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Te(),i=rn(t),o=xt(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),tn(t,o),e=Ge(t,i,r),e!==null&&Oo(e,t,i)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Te(),r=rn(t),i=xt(n,r);i.tag=2,e!=null&&(i.callback=e),tn(t,i),e=Ge(t,r,n),e!==null&&Oo(e,t,r)}};function dd(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ri(n,r)||!Ri(i,o):!0}function Dh(t,e,n){var r=!1,i=un,o=e.contextType;return typeof o=="object"&&o!==null?o=Qe(o):(i=Le(e)?bn:ke.current,r=e.contextTypes,o=(r=r!=null)?kr(t,i):un),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ps,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function fd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ps.enqueueReplaceState(e,e.state,null)}function pl(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Lh,_u(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Qe(o):(o=Le(e)?bn:ke.current,i.context=kr(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(hl(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ps.enqueueReplaceState(i,i.state,null),ts(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}var lr=[],ur=0,ns=null,rs=0,Ve=[],We=0,Fn=null,Ct=1,Rt="";function En(t,e){lr[ur++]=rs,lr[ur++]=ns,ns=t,rs=e}function Mh(t,e,n){Ve[We++]=Ct,Ve[We++]=Rt,Ve[We++]=Fn,Fn=t;var r=Ct;t=Rt;var i=32-rt(r)-1;r&=~(1<<i),n+=1;var o=32-rt(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ct=1<<32-rt(e)+i|n<<i|r,Rt=o+t}else Ct=1<<o|n<<i|r,Rt=t}function wu(t){t.return!==null&&(En(t,1),Mh(t,1,0))}function Eu(t){for(;t===ns;)ns=lr[--ur],lr[ur]=null,rs=lr[--ur],lr[ur]=null;for(;t===Fn;)Fn=Ve[--We],Ve[We]=null,Rt=Ve[--We],Ve[We]=null,Ct=Ve[--We],Ve[We]=null}var Ue=null,xe=null,q=!1,tt=null;function bh(t,e){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ue=t,xe=Tt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ue=t,xe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fn!==null?{id:Ct,overflow:Rt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ue=t,xe=null,!0):!1;default:return!1}}function ml(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gl(t){if(q){var e=xe;if(e){var n=e;if(!hd(t,e)){if(ml(t))throw Error(I(418));e=Tt(n.nextSibling);var r=Ue;e&&hd(t,e)?bh(r,n):(t.flags=t.flags&-4097|2,q=!1,Ue=t)}}else{if(ml(t))throw Error(I(418));t.flags=t.flags&-4097|2,q=!1,Ue=t}}}function pd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ue=t}function Qr(t){if(t!==Ue)return!1;if(!q)return pd(t),q=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ll(t.type,t.memoizedProps)),e&&(e=xe)){if(ml(t)){for(t=xe;t;)t=Tt(t.nextSibling);throw Error(I(418))}for(;e;)bh(t,e),e=Tt(e.nextSibling)}if(pd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xe=Tt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xe=null}}else xe=Ue?Tt(t.stateNode.nextSibling):null;return!0}function Sr(){xe=Ue=null,q=!1}function Iu(t){tt===null?tt=[t]:tt.push(t)}function Yr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===Lh&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function vo(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function md(t){var e=t._init;return e(t._payload)}function Fh(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=cn(p,h),p.index=0,p.sibling=null,p}function o(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function s(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,m,w){return h===null||h.tag!==6?(h=Ta(m,p.mode,w),h.return=p,h):(h=i(h,m),h.return=p,h)}function l(p,h,m,w){var T=m.type;return T===tr?c(p,h,m.props.children,w,m.key):h!==null&&(h.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Wt&&md(T)===h.type)?(w=i(h,m.props),w.ref=Yr(p,h,m),w.return=p,w):(w=bo(m.type,m.key,m.props,null,p.mode,w),w.ref=Yr(p,h,m),w.return=p,w)}function u(p,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Ca(m,p.mode,w),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function c(p,h,m,w,T){return h===null||h.tag!==7?(h=An(m,p.mode,w,T),h.return=p,h):(h=i(h,m),h.return=p,h)}function f(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ta(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case so:return m=bo(h.type,h.key,h.props,null,p.mode,m),m.ref=Yr(p,null,h),m.return=p,m;case er:return h=Ca(h,p.mode,m),h.return=p,h;case Wt:var w=h._init;return f(p,w(h._payload),m)}if(ii(h)||Wr(h))return h=An(h,p.mode,m,null),h.return=p,h;vo(p,h)}return null}function d(p,h,m,w){var T=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(p,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case so:return m.key===T?l(p,h,m,w):null;case er:return m.key===T?u(p,h,m,w):null;case Wt:return T=m._init,d(p,h,T(m._payload),w)}if(ii(m)||Wr(m))return T!==null?null:c(p,h,m,w,null);vo(p,m)}return null}function g(p,h,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(h,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case so:return p=p.get(w.key===null?m:w.key)||null,l(h,p,w,T);case er:return p=p.get(w.key===null?m:w.key)||null,u(h,p,w,T);case Wt:var R=w._init;return g(p,h,m,R(w._payload),T)}if(ii(w)||Wr(w))return p=p.get(m)||null,c(h,p,w,T,null);vo(h,w)}return null}function y(p,h,m,w){for(var T=null,R=null,E=h,S=h=0,A=null;E!==null&&S<m.length;S++){E.index>S?(A=E,E=null):A=E.sibling;var O=d(p,E,m[S],w);if(O===null){E===null&&(E=A);break}t&&E&&O.alternate===null&&e(p,E),h=o(O,h,S),R===null?T=O:R.sibling=O,R=O,E=A}if(S===m.length)return n(p,E),q&&En(p,S),T;if(E===null){for(;S<m.length;S++)E=f(p,m[S],w),E!==null&&(h=o(E,h,S),R===null?T=E:R.sibling=E,R=E);return q&&En(p,S),T}for(E=r(p,E);S<m.length;S++)A=g(E,p,S,m[S],w),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?S:A.key),h=o(A,h,S),R===null?T=A:R.sibling=A,R=A);return t&&E.forEach(function(Q){return e(p,Q)}),q&&En(p,S),T}function C(p,h,m,w){var T=Wr(m);if(typeof T!="function")throw Error(I(150));if(m=T.call(m),m==null)throw Error(I(151));for(var R=T=null,E=h,S=h=0,A=null,O=m.next();E!==null&&!O.done;S++,O=m.next()){E.index>S?(A=E,E=null):A=E.sibling;var Q=d(p,E,O.value,w);if(Q===null){E===null&&(E=A);break}t&&E&&Q.alternate===null&&e(p,E),h=o(Q,h,S),R===null?T=Q:R.sibling=Q,R=Q,E=A}if(O.done)return n(p,E),q&&En(p,S),T;if(E===null){for(;!O.done;S++,O=m.next())O=f(p,O.value,w),O!==null&&(h=o(O,h,S),R===null?T=O:R.sibling=O,R=O);return q&&En(p,S),T}for(E=r(p,E);!O.done;S++,O=m.next())O=g(E,p,S,O.value,w),O!==null&&(t&&O.alternate!==null&&E.delete(O.key===null?S:O.key),h=o(O,h,S),R===null?T=O:R.sibling=O,R=O);return t&&E.forEach(function(Be){return e(p,Be)}),q&&En(p,S),T}function x(p,h,m,w){if(typeof m=="object"&&m!==null&&m.type===tr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case so:e:{for(var T=m.key,R=h;R!==null;){if(R.key===T){if(T=m.type,T===tr){if(R.tag===7){n(p,R.sibling),h=i(R,m.props.children),h.return=p,p=h;break e}}else if(R.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Wt&&md(T)===R.type){n(p,R.sibling),h=i(R,m.props),h.ref=Yr(p,R,m),h.return=p,p=h;break e}n(p,R);break}else e(p,R);R=R.sibling}m.type===tr?(h=An(m.props.children,p.mode,w,m.key),h.return=p,p=h):(w=bo(m.type,m.key,m.props,null,p.mode,w),w.ref=Yr(p,h,m),w.return=p,p=w)}return s(p);case er:e:{for(R=m.key;h!==null;){if(h.key===R)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=Ca(m,p.mode,w),h.return=p,p=h}return s(p);case Wt:return R=m._init,x(p,h,R(m._payload),w)}if(ii(m))return y(p,h,m,w);if(Wr(m))return C(p,h,m,w);vo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=Ta(m,p.mode,w),h.return=p,p=h),s(p)):n(p,h)}return x}var Tr=Fh(!0),Uh=Fh(!1),Qi={},vt=mn(Qi),Oi=mn(Qi),Ai=mn(Qi);function Pn(t){if(t===Qi)throw Error(I(174));return t}function ku(t,e){switch(V(Ai,e),V(Oi,t),V(vt,Qi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qa(e,t)}G(vt),V(vt,e)}function Cr(){G(vt),G(Oi),G(Ai)}function zh(t){Pn(Ai.current);var e=Pn(vt.current),n=qa(e,t.type);e!==n&&(V(Oi,t),V(vt,n))}function Su(t){Oi.current===t&&(G(vt),G(Oi))}var Y=mn(0);function is(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wa=[];function Tu(){for(var t=0;t<wa.length;t++)wa[t]._workInProgressVersionPrimary=null;wa.length=0}var Ao=Ut.ReactCurrentDispatcher,Ea=Ut.ReactCurrentBatchConfig,Un=0,J=null,oe=null,de=null,os=!1,pi=!1,Li=0,Sy=0;function we(){throw Error(I(321))}function Cu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ot(t[n],e[n]))return!1;return!0}function Ru(t,e,n,r,i,o){if(Un=o,J=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ao.current=t===null||t.memoizedState===null?Py:Ny,t=n(r,i),pi){o=0;do{if(pi=!1,Li=0,25<=o)throw Error(I(301));o+=1,de=oe=null,e.updateQueue=null,Ao.current=xy,t=n(r,i)}while(pi)}if(Ao.current=ss,e=oe!==null&&oe.next!==null,Un=0,de=oe=J=null,os=!1,e)throw Error(I(300));return t}function Pu(){var t=Li!==0;return Li=0,t}function ut(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?J.memoizedState=de=t:de=de.next=t,de}function Ye(){if(oe===null){var t=J.alternate;t=t!==null?t.memoizedState:null}else t=oe.next;var e=de===null?J.memoizedState:de.next;if(e!==null)de=e,oe=t;else{if(t===null)throw Error(I(310));oe=t,t={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},de===null?J.memoizedState=de=t:de=de.next=t}return de}function Di(t,e){return typeof e=="function"?e(t):e}function Ia(t){var e=Ye(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=oe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Un&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,J.lanes|=c,zn|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,ot(r,e.memoizedState)||(Oe=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,J.lanes|=o,zn|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ka(t){var e=Ye(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);ot(o,e.memoizedState)||(Oe=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function $h(){}function jh(t,e){var n=J,r=Ye(),i=e(),o=!ot(r.memoizedState,i);if(o&&(r.memoizedState=i,Oe=!0),r=r.queue,Nu(Wh.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Mi(9,Vh.bind(null,n,r,i,e),void 0,null),le===null)throw Error(I(349));(Un&30)!==0||Bh(n,e,i)}return i}function Bh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=J.updateQueue,e===null?(e={lastEffect:null,stores:null},J.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vh(t,e,n,r){e.value=n,e.getSnapshot=r,Hh(e)&&Ge(t,1,-1)}function Wh(t,e,n){return n(function(){Hh(e)&&Ge(t,1,-1)})}function Hh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ot(t,n)}catch{return!0}}function gd(t){var e=ut();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Di,lastRenderedState:t},e.queue=t,t=t.dispatch=Ry.bind(null,J,t),[e.memoizedState,t]}function Mi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=J.updateQueue,e===null?(e={lastEffect:null,stores:null},J.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Kh(){return Ye().memoizedState}function Lo(t,e,n,r){var i=ut();J.flags|=t,i.memoizedState=Mi(1|e,n,void 0,r===void 0?null:r)}function Ns(t,e,n,r){var i=Ye();r=r===void 0?null:r;var o=void 0;if(oe!==null){var s=oe.memoizedState;if(o=s.destroy,r!==null&&Cu(r,s.deps)){i.memoizedState=Mi(e,n,o,r);return}}J.flags|=t,i.memoizedState=Mi(1|e,n,o,r)}function vd(t,e){return Lo(8390656,8,t,e)}function Nu(t,e){return Ns(2048,8,t,e)}function Gh(t,e){return Ns(4,2,t,e)}function qh(t,e){return Ns(4,4,t,e)}function Qh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yh(t,e,n){return n=n!=null?n.concat([t]):null,Ns(4,4,Qh.bind(null,e,t),n)}function xu(){}function Jh(t,e){var n=Ye();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Xh(t,e){var n=Ye();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Cu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Zh(t,e,n){return(Un&21)===0?(t.baseState&&(t.baseState=!1,Oe=!0),t.memoizedState=n):(ot(n,e)||(n=oh(),J.lanes|=n,zn|=n,t.baseState=!0),e)}function Ty(t,e){var n=$;$=n!==0&&4>n?n:4,t(!0);var r=Ea.transition;Ea.transition={};try{t(!1),e()}finally{$=n,Ea.transition=r}}function ep(){return Ye().memoizedState}function Cy(t,e,n){var r=rn(t);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tp(t)?np(e,n):(rp(t,e,n),n=Te(),t=Ge(t,r,n),t!==null&&ip(t,e,r))}function Ry(t,e,n){var r=rn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tp(t))np(e,i);else{rp(t,e,i);var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,ot(a,s))return}catch{}finally{}n=Te(),t=Ge(t,r,n),t!==null&&ip(t,e,r)}}function tp(t){var e=t.alternate;return t===J||e!==null&&e===J}function np(t,e){pi=os=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rp(t,e,n){Ep(t)?(t=e.interleaved,t===null?(n.next=n,nt===null?nt=[e]:nt.push(e)):(n.next=t.next,t.next=n),e.interleaved=n):(t=e.pending,t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n)}function ip(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lu(t,n)}}var ss={readContext:Qe,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},Py={readContext:Qe,useCallback:function(t,e){return ut().memoizedState=[t,e===void 0?null:e],t},useContext:Qe,useEffect:vd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Lo(4194308,4,Qh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Lo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Lo(4,2,t,e)},useMemo:function(t,e){var n=ut();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ut();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Cy.bind(null,J,t),[r.memoizedState,t]},useRef:function(t){var e=ut();return t={current:t},e.memoizedState=t},useState:gd,useDebugValue:xu,useDeferredValue:function(t){return ut().memoizedState=t},useTransition:function(){var t=gd(!1),e=t[0];return t=Ty.bind(null,t[1]),ut().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=J,i=ut();if(q){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),le===null)throw Error(I(349));(Un&30)!==0||Bh(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,vd(Wh.bind(null,r,o,t),[t]),r.flags|=2048,Mi(9,Vh.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=ut(),e=le.identifierPrefix;if(q){var n=Rt,r=Ct;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Li++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Sy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ny={readContext:Qe,useCallback:Jh,useContext:Qe,useEffect:Nu,useImperativeHandle:Yh,useInsertionEffect:Gh,useLayoutEffect:qh,useMemo:Xh,useReducer:Ia,useRef:Kh,useState:function(){return Ia(Di)},useDebugValue:xu,useDeferredValue:function(t){var e=Ye();return Zh(e,oe.memoizedState,t)},useTransition:function(){var t=Ia(Di)[0],e=Ye().memoizedState;return[t,e]},useMutableSource:$h,useSyncExternalStore:jh,useId:ep,unstable_isNewReconciler:!1},xy={readContext:Qe,useCallback:Jh,useContext:Qe,useEffect:Nu,useImperativeHandle:Yh,useInsertionEffect:Gh,useLayoutEffect:qh,useMemo:Xh,useReducer:ka,useRef:Kh,useState:function(){return ka(Di)},useDebugValue:xu,useDeferredValue:function(t){var e=Ye();return oe===null?e.memoizedState=t:Zh(e,oe.memoizedState,t)},useTransition:function(){var t=ka(Di)[0],e=Ye().memoizedState;return[t,e]},useMutableSource:$h,useSyncExternalStore:jh,useId:ep,unstable_isNewReconciler:!1};function Ou(t,e){try{var n="",r=e;do n+=iv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i}}function vl(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Oy=typeof WeakMap=="function"?WeakMap:Map;function op(t,e,n){n=xt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ls||(ls=!0,Cl=r),vl(t,e)},n}function sp(t,e,n){n=xt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){vl(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){vl(t,e),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function yd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Oy;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Wy.bind(null,t,e,n),e.then(t,t))}function _d(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wd(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xt(-1,1),e.tag=2,tn(n,e))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var ap,yl,lp,up;ap=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yl=function(){};lp=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pn(vt.current);var o=null;switch(n){case"input":i=Wa(t,i),r=Wa(t,r),o=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),o=[];break;case"textarea":i=Ga(t,i),r=Ga(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yo)}Qa(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(wi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(wi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};up=function(t,e,n,r){n!==r&&(e.flags|=4)};function Jr(t,e){if(!q)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ee(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ay(t,e,n){var r=e.pendingProps;switch(Eu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(e),null;case 1:return Le(e.type)&&Jo(),Ee(e),null;case 3:return r=e.stateNode,Cr(),G(Ae),G(ke),Tu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qr(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,tt!==null&&(Nl(tt),tt=null))),yl(t,e),Ee(e),null;case 5:Su(e);var i=Pn(Ai.current);if(n=e.type,t!==null&&e.stateNode!=null)lp(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return Ee(e),null}if(t=Pn(vt.current),Qr(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[ct]=e,r[xi]=o,t=(e.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<si.length;i++)H(si[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Dc(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":bc(r,o),H("invalid",r)}Qa(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&go(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&go(r.textContent,a,t),i=["children",""+a]):wi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&H("scroll",r)}switch(n){case"input":ao(r),Mc(r,o,!0);break;case"textarea":ao(r),Fc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Yo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[ct]=e,t[xi]=r,ap(t,e,!1,!1),e.stateNode=t;e:{switch(s=Ya(n,r),n){case"dialog":H("cancel",t),H("close",t),i=r;break;case"iframe":case"object":case"embed":H("load",t),i=r;break;case"video":case"audio":for(i=0;i<si.length;i++)H(si[i],t);i=r;break;case"source":H("error",t),i=r;break;case"img":case"image":case"link":H("error",t),H("load",t),i=r;break;case"details":H("toggle",t),i=r;break;case"input":Dc(t,r),i=Wa(t,r),H("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),H("invalid",t);break;case"textarea":bc(t,r),i=Ga(t,r),H("invalid",t);break;default:i=r}Qa(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Gf(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hf(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ei(t,l):typeof l=="number"&&Ei(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(wi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&H("scroll",t):l!=null&&nu(t,o,l,s))}switch(n){case"input":ao(t),Mc(t,r,!1);break;case"textarea":ao(t),Fc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ln(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?hr(t,!!r.multiple,o,!1):r.defaultValue!=null&&hr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Yo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ee(e),null;case 6:if(t&&e.stateNode!=null)up(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Pn(Ai.current),Pn(vt.current),Qr(e)){if(r=e.stateNode,n=e.memoizedProps,r[ct]=e,(o=r.nodeValue!==n)&&(t=Ue,t!==null))switch(t.tag){case 3:go(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&go(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ct]=e,e.stateNode=r}return Ee(e),null;case 13:if(G(Y),r=e.memoizedState,q&&xe!==null&&(e.mode&1)!==0&&(e.flags&128)===0){for(r=xe;r;)r=Tt(r.nextSibling);return Sr(),e.flags|=98560,e}if(r!==null&&r.dehydrated!==null){if(r=Qr(e),t===null){if(!r)throw Error(I(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(I(317));r[ct]=e}else Sr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;return Ee(e),null}return tt!==null&&(Nl(tt),tt=null),(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?Qr(e):n=t.memoizedState!==null,r!==n&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Y.current&1)!==0?ae===0&&(ae=3):Fu())),e.updateQueue!==null&&(e.flags|=4),Ee(e),null);case 4:return Cr(),yl(t,e),t===null&&Pi(e.stateNode.containerInfo),Ee(e),null;case 10:return yu(e.type._context),Ee(e),null;case 17:return Le(e.type)&&Jo(),Ee(e),null;case 19:if(G(Y),o=e.memoizedState,o===null)return Ee(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Jr(o,!1);else{if(ae!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=is(t),s!==null){for(e.flags|=128,Jr(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return V(Y,Y.current&1|2),e.child}t=t.sibling}o.tail!==null&&ne()>Rr&&(e.flags|=128,r=!0,Jr(o,!1),e.lanes=4194304)}else{if(!r)if(t=is(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Jr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!q)return Ee(e),null}else 2*ne()-o.renderingStartTime>Rr&&n!==1073741824&&(e.flags|=128,r=!0,Jr(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=ne(),e.sibling=null,n=Y.current,V(Y,r?n&1|2:n&1),e):(Ee(e),null);case 22:case 23:return bu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Me&1073741824)!==0&&(Ee(e),e.subtreeFlags&6&&(e.flags|=8192)):Ee(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}var Ly=Ut.ReactCurrentOwner,Oe=!1;function Se(t,e,n,r){e.child=t===null?Uh(e,null,n,r):Tr(e,t.child,n,r)}function Ed(t,e,n,r,i){n=n.render;var o=e.ref;return vr(e,i),r=Ru(t,e,n,r,o,i),n=Pu(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mt(t,e,i)):(q&&n&&wu(e),e.flags|=1,Se(t,e,r,i),e.child)}function Id(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Uu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,cp(t,e,o,r,i)):(t=bo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,(t.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ri,n(s,r)&&t.ref===e.ref)return Mt(t,e,i)}return e.flags|=1,t=cn(o,r),t.ref=e.ref,t.return=e,e.child=t}function cp(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Ri(o,r)&&t.ref===e.ref)if(Oe=!1,e.pendingProps=r=o,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Oe=!0);else return e.lanes=t.lanes,Mt(t,e,i)}return _l(t,e,n,r,i)}function dp(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(dr,Me),Me|=n;else if((n&1073741824)!==0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(dr,Me),Me|=r;else return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,V(dr,Me),Me|=t,null;else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,V(dr,Me),Me|=r;return Se(t,e,i,n),e.child}function fp(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _l(t,e,n,r,i){var o=Le(n)?bn:ke.current;return o=kr(e,o),vr(e,i),n=Ru(t,e,n,r,o,i),r=Pu(),t!==null&&!Oe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mt(t,e,i)):(q&&r&&wu(e),e.flags|=1,Se(t,e,n,i),e.child)}function kd(t,e,n,r,i){if(Le(n)){var o=!0;Xo(e)}else o=!1;if(vr(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),Dh(e,n,r),pl(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qe(u):(u=Le(n)?bn:ke.current,u=kr(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&fd(e,s,r,u),Ht=!1;var d=e.memoizedState;s.state=d,ts(e,r,s,i),l=e.memoizedState,a!==r||d!==l||Ae.current||Ht?(typeof c=="function"&&(hl(e,n,c,r),l=e.memoizedState),(a=Ht||dd(e,n,a,r,d,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Ah(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ze(e.type,a),s.props=u,f=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Qe(l):(l=Le(n)?bn:ke.current,l=kr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&fd(e,s,r,l),Ht=!1,d=e.memoizedState,s.state=d,ts(e,r,s,i);var y=e.memoizedState;a!==f||d!==y||Ae.current||Ht?(typeof g=="function"&&(hl(e,n,g,r),y=e.memoizedState),(u=Ht||dd(e,n,u,r,d,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return wl(t,e,n,r,o,i)}function wl(t,e,n,r,i,o){fp(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&ld(e,n,!1),Mt(t,e,o);r=e.stateNode,Ly.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Tr(e,t.child,null,o),e.child=Tr(e,null,a,o)):Se(t,e,a,o),e.memoizedState=r.state,i&&ld(e,n,!0),e.child}function hp(t){var e=t.stateNode;e.pendingContext?ad(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ad(t,e.context,!1),ku(t,e.containerInfo)}function Sd(t,e,n,r,i){return Sr(),Iu(i),e.flags|=256,Se(t,e,n,r),e.child}var yo={dehydrated:null,treeContext:null,retryLane:0};function _o(t){return{baseLanes:t,cachePool:null,transitions:null}}function Td(t,e){return{baseLanes:t.baseLanes|e,cachePool:null,transitions:t.transitions}}function pp(t,e,n){var r=e.pendingProps,i=Y.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),V(Y,i&1),t===null)return gl(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(i=r.children,t=r.fallback,o?(r=e.mode,o=e.child,i={mode:"hidden",children:i},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=i):o=ds(i,r,0,null),t=An(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=_o(n),e.memoizedState=yo,t):El(e,i));if(i=t.memoizedState,i!==null){if(a=i.dehydrated,a!==null){if(s)return e.flags&256?(e.flags&=-257,wo(t,e,n,Error(I(422)))):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=ds({mode:"visible",children:r.children},i,0,null),o=An(o,i,n,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,(e.mode&1)!==0&&Tr(e,t.child,null,n),e.child.memoizedState=_o(n),e.memoizedState=yo,o);if((e.mode&1)===0)e=wo(t,e,n,null);else if(a.data==="$!")e=wo(t,e,n,Error(I(419)));else if(r=(n&t.childLanes)!==0,Oe||r){if(r=le,r!==null){switch(n&-n){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}r=(o&(r.suspendedLanes|n))!==0?0:o,r!==0&&r!==i.retryLane&&(i.retryLane=r,Ge(t,r,-1))}Fu(),e=wo(t,e,n,Error(I(421)))}else a.data==="$?"?(e.flags|=128,e.child=t.child,e=Hy.bind(null,t),a._reactRetry=e,e=null):(n=i.treeContext,xe=Tt(a.nextSibling),Ue=e,q=!0,tt=null,n!==null&&(Ve[We++]=Ct,Ve[We++]=Rt,Ve[We++]=Fn,Ct=n.id,Rt=n.overflow,Fn=e),e=El(e,e.pendingProps.children),e.flags|=4096);return e}return o?(r=Rd(t,e,r.children,r.fallback,n),o=e.child,i=t.child.memoizedState,o.memoizedState=i===null?_o(n):Td(i,n),o.childLanes=t.childLanes&~n,e.memoizedState=yo,r):(n=Cd(t,e,r.children,n),e.memoizedState=null,n)}return o?(r=Rd(t,e,r.children,r.fallback,n),o=e.child,i=t.child.memoizedState,o.memoizedState=i===null?_o(n):Td(i,n),o.childLanes=t.childLanes&~n,e.memoizedState=yo,r):(n=Cd(t,e,r.children,n),e.memoizedState=null,n)}function El(t,e){return e=ds({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Cd(t,e,n,r){var i=t.child;return t=i.sibling,n=cn(i,{mode:"visible",children:n}),(e.mode&1)===0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=n}function Rd(t,e,n,r,i){var o=e.mode;t=t.child;var s=t.sibling,a={mode:"hidden",children:n};return(o&1)===0&&e.child!==t?(n=e.child,n.childLanes=0,n.pendingProps=a,e.deletions=null):(n=cn(t,a),n.subtreeFlags=t.subtreeFlags&14680064),s!==null?r=cn(s,r):(r=An(r,o,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function wo(t,e,n,r){return r!==null&&Iu(r),Tr(e,t.child,null,n),t=El(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Pd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),fl(t.return,e,n)}function Sa(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function mp(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(Se(t,e,r.children,n),r=Y.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pd(t,n,e);else if(t.tag===19)Pd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(V(Y,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&is(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sa(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&is(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sa(e,!0,n,null,o);break;case"together":Sa(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Mt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zn|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=cn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Dy(t,e,n){switch(e.tag){case 3:hp(e),Sr();break;case 5:zh(e);break;case 1:Le(e.type)&&Xo(e);break;case 4:ku(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;V(Zo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(V(Y,Y.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?pp(t,e,n):(V(Y,Y.current&1),t=Mt(t,e,n),t!==null?t.sibling:null);V(Y,Y.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return mp(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Y,Y.current),r)break;return null;case 22:case 23:return e.lanes=0,dp(t,e,n)}return Mt(t,e,n)}function My(t,e){switch(Eu(e),e.tag){case 1:return Le(e.type)&&Jo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cr(),G(Ae),G(ke),Tu(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Su(e),null;case 13:if(G(Y),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));Sr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return G(Y),null;case 4:return Cr(),null;case 10:return yu(e.type._context),null;case 22:case 23:return bu(),null;case 24:return null;default:return null}}var Eo=!1,Ie=!1,by=typeof WeakSet=="function"?WeakSet:Set,P=null;function cr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(t,e,r)}else n.current=null}function Il(t,e,n){try{n()}catch(r){ee(t,e,r)}}var Nd=!1;function Fy(t,e){if(sl=Go,t=Eh(),mu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===t)break t;if(d===n&&++u===i&&(a=s),d===o&&++c===r&&(l=s),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(al={focusedElem:t,selectionRange:n},Go=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var C=y.memoizedProps,x=y.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?C:Ze(e.type,C),x);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;if(m.nodeType===1)m.textContent="";else if(m.nodeType===9){var w=m.body;w!=null&&(w.textContent="")}break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(T){ee(e,e.return,T)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return y=Nd,Nd=!1,y}function mi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Il(e,n,o)}i=i.next}while(i!==r)}}function xs(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function kl(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gp(t){var e=t.alternate;e!==null&&(t.alternate=null,gp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ct],delete e[xi],delete e[cl],delete e[wy],delete e[Ey])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vp(t){return t.tag===5||t.tag===3||t.tag===4}function xd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yo));else if(r!==4&&(t=t.child,t!==null))for(Sl(t,e,n),t=t.sibling;t!==null;)Sl(t,e,n),t=t.sibling}function Tl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Tl(t,e,n),t=t.sibling;t!==null;)Tl(t,e,n),t=t.sibling}var me=null,et=!1;function Bt(t,e,n){for(n=n.child;n!==null;)yp(t,e,n),n=n.sibling}function yp(t,e,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(Is,n)}catch{}switch(n.tag){case 5:Ie||cr(n,e);case 6:var r=me,i=et;me=null,Bt(t,e,n),me=r,et=i,me!==null&&(et?(t=me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):me.removeChild(n.stateNode));break;case 18:me!==null&&(et?(t=me,n=n.stateNode,t.nodeType===8?ya(t.parentNode,n):t.nodeType===1&&ya(t,n),Ti(t)):ya(me,n.stateNode));break;case 4:r=me,i=et,me=n.stateNode.containerInfo,et=!0,Bt(t,e,n),me=r,et=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&Il(n,e,s),i=i.next}while(i!==r)}Bt(t,e,n);break;case 1:if(!Ie&&(cr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,e,a)}Bt(t,e,n);break;case 21:Bt(t,e,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,Bt(t,e,n),Ie=r):Bt(t,e,n);break;default:Bt(t,e,n)}}function Od(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new by),e.forEach(function(r){var i=Ky.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Xe(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:me=a.stateNode,et=!1;break e;case 3:me=a.stateNode.containerInfo,et=!0;break e;case 4:me=a.stateNode.containerInfo,et=!0;break e}a=a.return}if(me===null)throw Error(I(160));yp(o,s,i),me=null,et=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ee(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_p(e,t),e=e.sibling}function _p(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xe(e,t),lt(t),r&4){try{mi(3,t,t.return),xs(3,t)}catch(y){ee(t,t.return,y)}try{mi(5,t,t.return)}catch(y){ee(t,t.return,y)}}break;case 1:Xe(e,t),lt(t),r&512&&n!==null&&cr(n,n.return);break;case 5:if(Xe(e,t),lt(t),r&512&&n!==null&&cr(n,n.return),t.flags&32){var i=t.stateNode;try{Ei(i,"")}catch(y){ee(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Bf(i,o),Ya(a,s);var u=Ya(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?Gf(i,f):c==="dangerouslySetInnerHTML"?Hf(i,f):c==="children"?Ei(i,f):nu(i,c,f,u)}switch(a){case"input":Ha(i,o);break;case"textarea":Vf(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?hr(i,!!o.multiple,g,!1):d!==!!o.multiple&&(o.defaultValue!=null?hr(i,!!o.multiple,o.defaultValue,!0):hr(i,!!o.multiple,o.multiple?[]:"",!1))}i[xi]=o}catch(y){ee(t,t.return,y)}}break;case 6:if(Xe(e,t),lt(t),r&4){if(t.stateNode===null)throw Error(I(162));u=t.stateNode,c=t.memoizedProps;try{u.nodeValue=c}catch(y){ee(t,t.return,y)}}break;case 3:if(Xe(e,t),lt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ti(e.containerInfo)}catch(y){ee(t,t.return,y)}break;case 4:Xe(e,t),lt(t);break;case 13:Xe(e,t),lt(t),u=t.child,u.flags&8192&&u.memoizedState!==null&&(u.alternate===null||u.alternate.memoizedState===null)&&(Du=ne()),r&4&&Od(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Ie=(c=Ie)||u,Xe(e,t),Ie=c):Xe(e,t),lt(t),r&8192){c=t.memoizedState!==null;e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Kf("display",s))}catch(y){ee(t,t.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){ee(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}if(c&&!u&&(t.mode&1)!==0)for(P=t,t=t.child;t!==null;){for(u=P=t;P!==null;){switch(c=P,f=c.child,c.tag){case 0:case 11:case 14:case 15:mi(4,c,c.return);break;case 1:if(cr(c,c.return),o=c.stateNode,typeof o.componentWillUnmount=="function"){d=c,g=c.return;try{i=d,o.props=i.memoizedProps,o.state=i.memoizedState,o.componentWillUnmount()}catch(y){ee(d,g,y)}}break;case 5:cr(c,c.return);break;case 22:if(c.memoizedState!==null){Ld(u);continue}}f!==null?(f.return=c,P=f):Ld(u)}t=t.sibling}}break;case 19:Xe(e,t),lt(t),r&4&&Od(t);break;case 21:break;default:Xe(e,t),lt(t)}}function lt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vp(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ei(i,""),r.flags&=-33);var o=xd(t);Tl(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=xd(t);Sl(t,a,s);break;default:throw Error(I(161))}}catch(l){ee(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Uy(t,e,n){P=t,wp(t)}function wp(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Eo;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ie;a=Eo;var u=Ie;if(Eo=s,(Ie=l)&&!u)for(P=i;P!==null;)s=P,l=s.child,s.tag===22&&s.memoizedState!==null?Dd(i):l!==null?(l.return=s,P=l):Dd(i);for(;o!==null;)P=o,wp(o),o=o.sibling;P=i,Eo=a,Ie=u}Ad(t)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,P=o):Ad(t)}}function Ad(t){for(;P!==null;){var e=P;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Ie||xs(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ze(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&cd(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cd(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ti(f)}}}break;case 19:case 17:case 21:case 22:case 23:break;default:throw Error(I(163))}Ie||e.flags&512&&kl(e)}catch(d){ee(e,e.return,d)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function Ld(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function Dd(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xs(4,e)}catch(l){ee(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ee(e,i,l)}}var o=e.return;try{kl(e)}catch(l){ee(e,o,l)}break;case 5:var s=e.return;try{kl(e)}catch(l){ee(e,s,l)}}}catch(l){ee(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var zy=Math.ceil,as=Ut.ReactCurrentDispatcher,Au=Ut.ReactCurrentOwner,Ke=Ut.ReactCurrentBatchConfig,U=0,le=null,re=null,ge=0,Me=0,dr=mn(0),ae=0,bi=null,zn=0,Os=0,Lu=0,gi=null,Ne=null,Du=0,Rr=1/0,It=null,ls=!1,Cl=null,nn=null,Io=!1,Yt=null,us=0,vi=0,Rl=null,Do=-1,Mo=0;function Te(){return(U&6)!==0?ne():Do!==-1?Do:Do=ne()}function rn(t){return(t.mode&1)===0?1:(U&2)!==0&&ge!==0?ge&-ge:ky.transition!==null?(Mo===0&&(Mo=oh()),Mo):(t=$,t!==0||(t=window.event,t=t===void 0?16:fh(t.type)),t)}function Ge(t,e,n){if(50<vi)throw vi=0,Rl=null,Error(I(185));var r=As(t,e);return r===null?null:(Ki(r,e,n),((U&2)===0||r!==le)&&(r===le&&((U&2)===0&&(Os|=e),ae===4&&qt(r,ge)),De(r,n),e===1&&U===0&&(t.mode&1)===0&&(Rr=ne()+500,Rs&&gn())),r)}function As(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function Ep(t){return(le!==null||nt!==null)&&(t.mode&1)!==0&&(U&2)===0}function De(t,e){var n=t.callbackNode;kv(t,e);var r=Ko(t,t===le?ge:0);if(r===0)n!==null&&$c(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$c(n),e===1)t.tag===0?Iy(Md.bind(null,t)):Oh(Md.bind(null,t)),yy(function(){U===0&&gn()}),n=null;else{switch(sh(r)){case 1:n=au;break;case 4:n=rh;break;case 16:n=Ho;break;case 536870912:n=ih;break;default:n=Ho}n=Np(n,Ip.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ip(t,e){if(Do=-1,Mo=0,(U&6)!==0)throw Error(I(327));var n=t.callbackNode;if(yr()&&t.callbackNode!==n)return null;var r=Ko(t,t===le?ge:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=cs(t,r);else{e=r;var i=U;U|=2;var o=Sp();(le!==t||ge!==e)&&(It=null,Rr=ne()+500,On(t,e));do try{By();break}catch(a){kp(t,a)}while(1);vu(),as.current=o,U=i,re!==null?e=0:(le=null,ge=0,e=ae)}if(e!==0){if(e===2&&(i=tl(t),i!==0&&(r=i,e=Pl(t,i))),e===1)throw n=bi,On(t,0),qt(t,r),De(t,ne()),n;if(e===6)qt(t,r);else{if(i=t.current.alternate,(r&30)===0&&!$y(i)&&(e=cs(t,r),e===2&&(o=tl(t),o!==0&&(r=o,e=Pl(t,o))),e===1))throw n=bi,On(t,0),qt(t,r),De(t,ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:In(t,Ne,It);break;case 3:if(qt(t,r),(r&130023424)===r&&(e=Du+500-ne(),10<e)){if(Ko(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Te(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ul(In.bind(null,t,Ne,It),e);break}In(t,Ne,It);break;case 4:if(qt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-rt(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zy(r/1960))-r,10<r){t.timeoutHandle=ul(In.bind(null,t,Ne,It),r);break}In(t,Ne,It);break;case 5:In(t,Ne,It);break;default:throw Error(I(329))}}}return De(t,ne()),t.callbackNode===n?Ip.bind(null,t):null}function Pl(t,e){var n=gi;return t.current.memoizedState.isDehydrated&&(On(t,e).flags|=256),t=cs(t,e),t!==2&&(e=Ne,Ne=n,e!==null&&Nl(e)),t}function Nl(t){Ne===null?Ne=t:Ne.push.apply(Ne,t)}function $y(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ot(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qt(t,e){for(e&=~Lu,e&=~Os,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rt(e),r=1<<n;t[n]=-1,e&=~r}}function Md(t){if((U&6)!==0)throw Error(I(327));yr();var e=Ko(t,0);if((e&1)===0)return De(t,ne()),null;var n=cs(t,e);if(t.tag!==0&&n===2){var r=tl(t);r!==0&&(e=r,n=Pl(t,r))}if(n===1)throw n=bi,On(t,0),qt(t,e),De(t,ne()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,In(t,Ne,It),De(t,ne()),null}function Mu(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(Rr=ne()+500,Rs&&gn())}}function $n(t){Yt!==null&&Yt.tag===0&&(U&6)===0&&yr();var e=U;U|=1;var n=Ke.transition,r=$;try{if(Ke.transition=null,$=1,t)return t()}finally{$=r,Ke.transition=n,U=e,(U&6)===0&&gn()}}function bu(){Me=dr.current,G(dr)}function On(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vy(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Eu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jo();break;case 3:Cr(),G(Ae),G(ke),Tu();break;case 5:Su(r);break;case 4:Cr();break;case 13:G(Y);break;case 19:G(Y);break;case 10:yu(r.type._context);break;case 22:case 23:bu()}n=n.return}if(le=t,re=t=cn(t.current,null),ge=Me=e,ae=0,bi=null,Lu=Os=zn=0,Ne=gi=null,nt!==null){for(e=0;e<nt.length;e++)if(n=nt[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}nt=null}return t}function kp(t,e){do{var n=re;try{if(vu(),Ao.current=ss,os){for(var r=J.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}os=!1}if(Un=0,de=oe=J=null,pi=!1,Li=0,Au.current=null,n===null||n.return===null){ae=1,bi=e,re=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=ge,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=_d(s);if(g!==null){g.flags&=-257,wd(g,s,a,o,e),g.mode&1&&yd(o,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var C=new Set;C.add(l),e.updateQueue=C}else y.add(l);break e}else{if((e&1)===0){yd(o,u,e),Fu();break e}l=Error(I(426))}}else if(q&&a.mode&1){var x=_d(s);if(x!==null){(x.flags&65536)===0&&(x.flags|=256),wd(x,s,a,o,e),Iu(l);break e}}o=l,ae!==4&&(ae=2),gi===null?gi=[o]:gi.push(o),l=Ou(l,a),a=s;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var p=op(a,l,e);ud(a,p);break e;case 1:o=l;var h=a.type,m=a.stateNode;if((a.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(nn===null||!nn.has(m)))){a.flags|=65536,e&=-e,a.lanes|=e;var w=sp(a,o,e);ud(a,w);break e}}a=a.return}while(a!==null)}Cp(n)}catch(T){e=T,re===n&&n!==null&&(re=n=n.return);continue}break}while(1)}function Sp(){var t=as.current;return as.current=ss,t===null?ss:t}function Fu(){(ae===0||ae===3||ae===2)&&(ae=4),le===null||(zn&268435455)===0&&(Os&268435455)===0||qt(le,ge)}function cs(t,e){var n=U;U|=2;var r=Sp();(le!==t||ge!==e)&&(It=null,On(t,e));do try{jy();break}catch(i){kp(t,i)}while(1);if(vu(),U=n,as.current=r,re!==null)throw Error(I(261));return le=null,ge=0,ae}function jy(){for(;re!==null;)Tp(re)}function By(){for(;re!==null&&!pv();)Tp(re)}function Tp(t){var e=Pp(t.alternate,t,Me);t.memoizedProps=t.pendingProps,e===null?Cp(t):re=e,Au.current=null}function Cp(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=Ay(n,e,Me),n!==null){re=n;return}}else{if(n=My(n,e),n!==null){n.flags&=32767,re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ae=6,re=null;return}}if(e=e.sibling,e!==null){re=e;return}re=e=t}while(e!==null);ae===0&&(ae=5)}function In(t,e,n){var r=$,i=Ke.transition;try{Ke.transition=null,$=1,Vy(t,e,n,r)}finally{Ke.transition=i,$=r}return null}function Vy(t,e,n,r){do yr();while(Yt!==null);if((U&6)!==0)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Sv(t,o),t===le&&(re=le=null,ge=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Io||(Io=!0,Np(Ho,function(){return yr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Ke.transition,Ke.transition=null;var s=$;$=1;var a=U;U|=4,Au.current=null,Fy(t,n),_p(n,t),cy(al),Go=!!sl,al=sl=null,t.current=n,Uy(n),mv(),U=a,$=s,Ke.transition=o}else t.current=n;if(Io&&(Io=!1,Yt=t,us=i),o=t.pendingLanes,o===0&&(nn=null),yv(n.stateNode),De(t,ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)r(e[n]);if(ls)throw ls=!1,t=Cl,Cl=null,t;return(us&1)!==0&&t.tag!==0&&yr(),o=t.pendingLanes,(o&1)!==0?t===Rl?vi++:(vi=0,Rl=t):vi=0,gn(),null}function yr(){if(Yt!==null){var t=sh(us),e=Ke.transition,n=$;try{if(Ke.transition=null,$=16>t?16:t,Yt===null)var r=!1;else{if(t=Yt,Yt=null,us=0,(U&6)!==0)throw Error(I(331));var i=U;for(U|=4,P=t.current;P!==null;){var o=P,s=o.child;if((P.flags&16)!==0){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:mi(8,c,o)}var f=c.child;if(f!==null)f.return=c,P=f;else for(;P!==null;){c=P;var d=c.sibling,g=c.return;if(gp(c),c===u){P=null;break}if(d!==null){d.return=g,P=d;break}P=g}}}var y=o.alternate;if(y!==null){var C=y.child;if(C!==null){y.child=null;do{var x=C.sibling;C.sibling=null,C=x}while(C!==null)}}P=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,P=s;else e:for(;P!==null;){if(o=P,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:mi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,P=p;break e}P=o.return}}var h=t.current;for(P=h;P!==null;){s=P;var m=s.child;if((s.subtreeFlags&2064)!==0&&m!==null)m.return=s,P=m;else e:for(s=h;P!==null;){if(a=P,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:xs(9,a)}}catch(T){ee(a,a.return,T)}if(a===s){P=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,P=w;break e}P=a.return}}if(U=i,gn(),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(Is,t)}catch{}r=!0}return r}finally{$=n,Ke.transition=e}}return!1}function bd(t,e,n){e=Ou(n,e),e=op(t,e,1),tn(t,e),e=Te(),t=As(t,1),t!==null&&(Ki(t,1,e),De(t,e))}function ee(t,e,n){if(t.tag===3)bd(t,t,n);else for(;e!==null;){if(e.tag===3){bd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){t=Ou(n,t),t=sp(e,t,1),tn(e,t),t=Te(),e=As(e,1),e!==null&&(Ki(e,1,t),De(e,t));break}}e=e.return}}function Wy(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Te(),t.pingedLanes|=t.suspendedLanes&n,le===t&&(ge&n)===n&&(ae===4||ae===3&&(ge&130023424)===ge&&500>ne()-Du?On(t,0):Lu|=n),De(t,e)}function Rp(t,e){e===0&&((t.mode&1)===0?e=1:(e=co,co<<=1,(co&130023424)===0&&(co=4194304)));var n=Te();t=As(t,e),t!==null&&(Ki(t,e,n),De(t,n))}function Hy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Rp(t,n)}function Ky(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Rp(t,n)}var Pp;Pp=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ae.current)Oe=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Oe=!1,Dy(t,e,n);Oe=(t.flags&131072)!==0}else Oe=!1,q&&(e.flags&1048576)!==0&&Mh(e,rs,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps;var i=kr(e,ke.current);vr(e,n),i=Ru(null,e,r,t,i,n);var o=Pu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Le(r)?(o=!0,Xo(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,_u(e),i.updater=Ps,e.stateNode=i,i._reactInternals=e,pl(e,r,t,n),e=wl(null,e,r,!0,o,n)):(e.tag=0,q&&o&&wu(e),Se(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=qy(r),t=Ze(r,t),i){case 0:e=_l(null,e,r,t,n);break e;case 1:e=kd(null,e,r,t,n);break e;case 11:e=Ed(null,e,r,t,n);break e;case 14:e=Id(null,e,r,Ze(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),_l(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),kd(t,e,r,i,n);case 3:e:{if(hp(e),t===null)throw Error(I(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Ah(t,e),ts(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=Error(I(423)),e=Sd(t,e,r,n,i);break e}else if(r!==i){i=Error(I(424)),e=Sd(t,e,r,n,i);break e}else for(xe=Tt(e.stateNode.containerInfo.firstChild),Ue=e,q=!0,tt=null,n=Uh(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),r===i){e=Mt(t,e,n);break e}Se(t,e,r,n)}e=e.child}return e;case 5:return zh(e),t===null&&gl(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,ll(r,i)?s=null:o!==null&&ll(r,o)&&(e.flags|=32),fp(t,e),Se(t,e,s,n),e.child;case 6:return t===null&&gl(e),null;case 13:return pp(t,e,n);case 4:return ku(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Tr(e,null,r,n):Se(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),Ed(t,e,r,i,n);case 7:return Se(t,e,e.pendingProps,n),e.child;case 8:return Se(t,e,e.pendingProps.children,n),e.child;case 12:return Se(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,V(Zo,r._currentValue),r._currentValue=s,o!==null)if(ot(o.value,s)){if(o.children===i.children&&!Ae.current){e=Mt(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=xt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),fl(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),fl(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Se(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,vr(e,n),i=Qe(i),r=r(i),e.flags|=1,Se(t,e,r,n),e.child;case 14:return r=e.type,i=Ze(r,e.pendingProps),i=Ze(r.type,i),Id(t,e,r,i,n);case 15:return cp(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Le(r)?(t=!0,Xo(e)):t=!1,vr(e,n),Dh(e,r,i),pl(e,r,i,n),wl(null,e,r,!0,t,n);case 19:return mp(t,e,n);case 22:return dp(t,e,n)}throw Error(I(156,e.tag))};function Np(t,e){return nh(t,e)}function Gy(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(t,e,n,r){return new Gy(t,e,n,r)}function Uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qy(t){if(typeof t=="function")return Uu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===iu)return 11;if(t===ou)return 14}return 2}function cn(t,e){var n=t.alternate;return n===null?(n=He(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bo(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Uu(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case tr:return An(n.children,i,o,e);case ru:s=8,i|=8;break;case $a:return t=He(12,n,e,i|2),t.elementType=$a,t.lanes=o,t;case ja:return t=He(13,n,e,i),t.elementType=ja,t.lanes=o,t;case Ba:return t=He(19,n,e,i),t.elementType=Ba,t.lanes=o,t;case zf:return ds(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ff:s=10;break e;case Uf:s=9;break e;case iu:s=11;break e;case ou:s=14;break e;case Wt:s=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=He(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function An(t,e,n,r){return t=He(7,t,r,e),t.lanes=n,t}function ds(t,e,n,r){return t=He(22,t,r,e),t.elementType=zf,t.lanes=n,t.stateNode={},t}function Ta(t,e,n){return t=He(6,t,null,e),t.lanes=n,t}function Ca(t,e,n){return e=He(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Qy(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=aa(0),this.expirationTimes=aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zu(t,e,n,r,i,o,s,a,l){return t=new Qy(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=He(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_u(o),t}function Yy(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:er,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function xp(t){if(!t)return un;t=t._reactInternals;e:{if(Gn(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Le(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(Le(n))return xh(t,n,e)}return e}function Op(t,e,n,r,i,o,s,a,l){return t=zu(n,r,!0,t,i,o,s,a,l),t.context=xp(null),n=t.current,r=Te(),i=rn(n),o=xt(r,i),o.callback=e!=null?e:null,tn(n,o),t.current.lanes=i,Ki(t,i,r),De(t,r),t}function Ls(t,e,n,r){var i=e.current,o=Te(),s=rn(i);return n=xp(n),e.context===null?e.context=n:e.pendingContext=n,e=xt(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),tn(i,e),t=Ge(i,s,o),t!==null&&Oo(t,i,s),s}function fs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $u(t,e){Fd(t,e),(t=t.alternate)&&Fd(t,e)}function Jy(){return null}var Ap=typeof reportError=="function"?reportError:function(t){console.error(t)};function ju(t){this._internalRoot=t}Ds.prototype.render=ju.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Ls(t,e,null,null)};Ds.prototype.unmount=ju.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$n(function(){Ls(null,t,null,null)}),e[Dt]=null}};function Ds(t){this._internalRoot=t}Ds.prototype.unstable_scheduleHydration=function(t){if(t){var e=uh();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gt.length&&e!==0&&e<Gt[n].priority;n++);Gt.splice(n,0,t),n===0&&dh(t)}};function Bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ms(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ud(){}function Xy(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=fs(s);o.call(u)}}var s=Op(e,r,t,0,null,!1,!1,"",Ud);return t._reactRootContainer=s,t[Dt]=s.current,Pi(t.nodeType===8?t.parentNode:t),$n(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=fs(l);a.call(u)}}var l=zu(t,0,!1,null,null,!1,!1,"",Ud);return t._reactRootContainer=l,t[Dt]=l.current,Pi(t.nodeType===8?t.parentNode:t),$n(function(){Ls(e,l,n,r)}),l}function bs(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=fs(s);a.call(l)}}Ls(e,s,t,i)}else s=Xy(n,e,t,i,r);return fs(s)}ah=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oi(e.pendingLanes);n!==0&&(lu(e,n|1),De(e,ne()),(U&6)===0&&(Rr=ne()+500,gn()))}break;case 13:var r=Te();$n(function(){return Ge(t,1,r)}),$u(t,1)}};uu=function(t){if(t.tag===13){var e=Te();Ge(t,134217728,e),$u(t,134217728)}};lh=function(t){if(t.tag===13){var e=Te(),n=rn(t);Ge(t,n,e),$u(t,n)}};uh=function(){return $};ch=function(t,e){var n=$;try{return $=t,e()}finally{$=n}};Xa=function(t,e,n){switch(e){case"input":if(Ha(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Cs(r);if(!i)throw Error(I(90));jf(r),Ha(r,i)}}}break;case"textarea":Vf(t,n);break;case"select":e=n.value,e!=null&&hr(t,!!n.multiple,e,!1)}};Yf=Mu;Jf=$n;var Zy={usingClientEntryPoint:!1,Events:[qi,or,Cs,qf,Qf,Mu]},Xr={findFiberByHostInstance:Rn,bundleType:0,version:"18.1.0",rendererPackageName:"react-dom"},e0={bundleType:Xr.bundleType,version:Xr.version,rendererPackageName:Xr.rendererPackageName,rendererConfig:Xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ut.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=eh(t),t===null?null:t.stateNode},findFiberByHostInstance:Xr.findFiberByHostInstance||Jy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.1.0-next-22edb9f77-20220426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{Is=ko.inject(e0),gt=ko}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zy;$e.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bu(e))throw Error(I(200));return Yy(t,e,null,n)};$e.createRoot=function(t,e){if(!Bu(t))throw Error(I(299));var n=!1,r="",i=Ap;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=zu(t,1,!1,null,null,n,!1,r,i),t[Dt]=e.current,Pi(t.nodeType===8?t.parentNode:t),new ju(e)};$e.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=eh(e),t=t===null?null:t.stateNode,t};$e.flushSync=function(t){return $n(t)};$e.hydrate=function(t,e,n){if(!Ms(e))throw Error(I(200));return bs(null,t,e,!0,n)};$e.hydrateRoot=function(t,e,n){if(!Bu(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Ap;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Op(e,null,t,1,n!=null?n:null,i,!1,o,s),t[Dt]=e.current,Pi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ds(e)};$e.render=function(t,e,n){if(!Ms(e))throw Error(I(200));return bs(null,t,e,!1,n)};$e.unmountComponentAtNode=function(t){if(!Ms(t))throw Error(I(40));return t._reactRootContainer?($n(function(){bs(null,null,t,!1,function(){t._reactRootContainer=null,t[Dt]=null})}),!0):!1};$e.unstable_batchedUpdates=Mu;$e.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ms(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return bs(t,e,n,!1,r)};$e.version="18.1.0-next-22edb9f77-20220426";function Lp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lp)}catch(t){console.error(t)}}Lp(),Zl.exports=$e;var Fo=Zl.exports,zd=Zl.exports;Ua.createRoot=zd.createRoot,Ua.hydrateRoot=zd.hydrateRoot;var Dp={exports:{}};/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(!!o){var s=typeof o;if(s==="string"||s==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&r.push(a)}}else if(s==="object")if(o.toString===Object.prototype.toString)for(var l in o)e.call(o,l)&&o[l]&&r.push(l);else r.push(o.toString())}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Dp);var Z=Dp.exports;function Fi(){return Fi=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fi.apply(this,arguments)}function Mp(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function $d(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function t0(t){var e=n0(t,"string");return typeof e=="symbol"?e:String(e)}function n0(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function r0(t,e,n){var r=v.exports.useRef(t!==void 0),i=v.exports.useState(e),o=i[0],s=i[1],a=t!==void 0,l=r.current;return r.current=a,!a&&l&&o!==e&&s(e),[a?t:o,v.exports.useCallback(function(u){for(var c=arguments.length,f=new Array(c>1?c-1:0),d=1;d<c;d++)f[d-1]=arguments[d];n&&n.apply(void 0,[u].concat(f)),s(u)},[n])]}function i0(t,e){return Object.keys(e).reduce(function(n,r){var i,o=n,s=o[$d(r)],a=o[r],l=Mp(o,[$d(r),r].map(t0)),u=e[r],c=r0(a,s,t[u]),f=c[0],d=c[1];return Fi({},l,(i={},i[r]=f,i[u]=d,i))},t)}function xl(t,e){return xl=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},xl(t,e)}function o0(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,xl(t,e)}var Fs={exports:{}},Us={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0=v.exports,a0=Symbol.for("react.element"),l0=Symbol.for("react.fragment"),u0=Object.prototype.hasOwnProperty,c0=s0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d0={key:!0,ref:!0,__self:!0,__source:!0};function bp(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)u0.call(e,r)&&!d0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:a0,type:t,key:o,ref:s,props:i,_owner:c0.current}}Us.Fragment=l0;Us.jsx=bp;Us.jsxs=bp;Fs.exports=Us;const _=Fs.exports.jsx,K=Fs.exports.jsxs,Dr=Fs.exports.Fragment,f0=["xxl","xl","lg","md","sm","xs"],Fp=v.exports.createContext({prefixes:{},breakpoints:f0});function fe(t,e){const{prefixes:n}=v.exports.useContext(Fp);return t||n[e]||e}function h0(){const{breakpoints:t}=v.exports.useContext(Fp);return t}function p0(t){return t&&t.ownerDocument||document}function m0(t){var e=p0(t);return e&&e.defaultView||window}function g0(t,e){return m0(t).getComputedStyle(t,e)}var v0=/([A-Z])/g;function y0(t){return t.replace(v0,"-$1").toLowerCase()}var _0=/^ms-/;function So(t){return y0(t).replace(_0,"-ms-")}var w0=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function E0(t){return!!(t&&w0.test(t))}function Up(t,e){var n="",r="";if(typeof e=="string")return t.style.getPropertyValue(So(e))||g0(t).getPropertyValue(So(e));Object.keys(e).forEach(function(i){var o=e[i];!o&&o!==0?t.style.removeProperty(So(i)):E0(i)?r+=i+"("+o+") ":n+=So(i)+": "+o+";"}),r&&(n+="transform: "+r+";"),t.style.cssText+=";"+n}var zp={exports:{}},I0="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",k0=I0,S0=k0;function $p(){}function jp(){}jp.resetWarningCache=$p;var T0=function(){function t(r,i,o,s,a,l){if(l!==S0){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:jp,resetWarningCache:$p};return n.PropTypes=n,n};zp.exports=T0();var Ot=zp.exports,jd={disabled:!1},Bp=St.createContext(null),ai="unmounted",kn="exited",Kt="entering",Cn="entered",Ol="exiting",zt=function(t){o0(e,t);function e(r,i){var o;o=t.call(this,r,i)||this;var s=i,a=s&&!s.isMounting?r.enter:r.appear,l;return o.appearStatus=null,r.in?a?(l=kn,o.appearStatus=Kt):l=Cn:r.unmountOnExit||r.mountOnEnter?l=ai:l=kn,o.state={status:l},o.nextCallback=null,o}e.getDerivedStateFromProps=function(i,o){var s=i.in;return s&&o.status===ai?{status:kn}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var o=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==Kt&&s!==Cn&&(o=Kt):(s===Kt||s===Cn)&&(o=Ol)}this.updateStatus(!1,o)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,o,s,a;return o=s=a=i,i!=null&&typeof i!="number"&&(o=i.exit,s=i.enter,a=i.appear!==void 0?i.appear:s),{exit:o,enter:s,appear:a}},n.updateStatus=function(i,o){i===void 0&&(i=!1),o!==null?(this.cancelNextCallback(),o===Kt?this.performEnter(i):this.performExit()):this.props.unmountOnExit&&this.state.status===kn&&this.setState({status:ai})},n.performEnter=function(i){var o=this,s=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[Fo.findDOMNode(this),a],u=l[0],c=l[1],f=this.getTimeouts(),d=a?f.appear:f.enter;if(!i&&!s||jd.disabled){this.safeSetState({status:Cn},function(){o.props.onEntered(u)});return}this.props.onEnter(u,c),this.safeSetState({status:Kt},function(){o.props.onEntering(u,c),o.onTransitionEnd(d,function(){o.safeSetState({status:Cn},function(){o.props.onEntered(u,c)})})})},n.performExit=function(){var i=this,o=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:Fo.findDOMNode(this);if(!o||jd.disabled){this.safeSetState({status:kn},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Ol},function(){i.props.onExiting(a),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:kn},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,o){o=this.setNextCallback(o),this.setState(i,o)},n.setNextCallback=function(i){var o=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,o.nextCallback=null,i(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(i,o){this.setNextCallback(o);var s=this.props.nodeRef?this.props.nodeRef.current:Fo.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=l[0],c=l[1];this.props.addEndListener(u,c)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===ai)return null;var o=this.props,s=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var a=Mp(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return St.createElement(Bp.Provider,{value:null},typeof s=="function"?s(i,a):St.cloneElement(St.Children.only(s),a))},e}(St.Component);zt.contextType=Bp;zt.propTypes={};function Xn(){}zt.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Xn,onEntering:Xn,onEntered:Xn,onExit:Xn,onExiting:Xn,onExited:Xn};zt.UNMOUNTED=ai;zt.EXITED=kn;zt.ENTERING=Kt;zt.ENTERED=Cn;zt.EXITING=Ol;var C0=!!(typeof window!="undefined"&&window.document&&window.document.createElement),Al=!1,Ll=!1;try{var Ra={get passive(){return Al=!0},get once(){return Ll=Al=!0}};C0&&(window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,!0))}catch{}function R0(t,e,n,r){if(r&&typeof r!="boolean"&&!Ll){var i=r.once,o=r.capture,s=n;!Ll&&i&&(s=n.__once||function a(l){this.removeEventListener(e,a,o),n.call(this,l)},n.__once=s),t.addEventListener(e,s,Al?r:o)}t.addEventListener(e,n,r)}function P0(t,e,n,r){var i=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(e,n,i),n.__once&&t.removeEventListener(e,n.__once,i)}function Vp(t,e,n,r){return R0(t,e,n,r),function(){P0(t,e,n,r)}}function N0(t,e,n,r){if(n===void 0&&(n=!1),r===void 0&&(r=!0),t){var i=document.createEvent("HTMLEvents");i.initEvent(e,n,r),t.dispatchEvent(i)}}function x0(t){var e=Up(t,"transitionDuration")||"",n=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*n}function O0(t,e,n){n===void 0&&(n=5);var r=!1,i=setTimeout(function(){r||N0(t,"transitionend",!0)},e+n),o=Vp(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(i),o()}}function A0(t,e,n,r){n==null&&(n=x0(t)||0);var i=O0(t,n,r),o=Vp(t,"transitionend",e);return function(){i(),o()}}function Bd(t,e){const n=Up(t,e)||"",r=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*r}function L0(t,e){const n=Bd(t,"transitionDuration"),r=Bd(t,"transitionDelay"),i=A0(t,o=>{o.target===t&&(i(),e(o))},n+r)}function D0(t){t.offsetHeight}var Vd=function(e){return!e||typeof e=="function"?e:function(n){e.current=n}};function M0(t,e){var n=Vd(t),r=Vd(e);return function(i){n&&n(i),r&&r(i)}}function b0(t,e){return v.exports.useMemo(function(){return M0(t,e)},[t,e])}function F0(t){return t&&"setState"in t?Fo.findDOMNode(t):t!=null?t:null}const U0=St.forwardRef((f,c)=>{var d=f,{onEnter:t,onEntering:e,onEntered:n,onExit:r,onExiting:i,onExited:o,addEndListener:s,children:a,childRef:l}=d,u=W(d,["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"]);const g=v.exports.useRef(null),y=b0(g,l),C=S=>{y(F0(S))},x=S=>A=>{S&&g.current&&S(g.current,A)},p=v.exports.useCallback(x(t),[t]),h=v.exports.useCallback(x(e),[e]),m=v.exports.useCallback(x(n),[n]),w=v.exports.useCallback(x(r),[r]),T=v.exports.useCallback(x(i),[i]),R=v.exports.useCallback(x(o),[o]),E=v.exports.useCallback(x(s),[s]);return _(zt,j(b({ref:c},u),{onEnter:p,onEntered:m,onEntering:h,onExit:w,onExited:R,onExiting:T,addEndListener:E,nodeRef:g,children:typeof a=="function"?(S,A)=>a(S,j(b({},A),{ref:C})):St.cloneElement(a,{ref:C})}))});var z0=U0;function $0(t){var e=v.exports.useRef(t);return v.exports.useEffect(function(){e.current=t},[t]),e}function Wp(t){var e=$0(t);return v.exports.useCallback(function(){return e.current&&e.current.apply(e,arguments)},[e])}const j0=["as","disabled"];function B0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function V0(t){return!t||t.trim()==="#"}function Vu({tagName:t,disabled:e,href:n,target:r,rel:i,onClick:o,tabIndex:s=0,type:a}){t||(n!=null||r!=null||i!=null?t="a":t="button");const l={tagName:t};if(t==="button")return[{type:a||"button",disabled:e},l];const u=f=>{if((e||t==="a"&&V0(n))&&f.preventDefault(),e){f.stopPropagation();return}o==null||o(f)},c=f=>{f.key===" "&&(f.preventDefault(),u(f))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:"button",disabled:void 0,tabIndex:e?void 0:s,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:u,onKeyDown:c},l]}const W0=v.exports.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=B0(t,j0);const[o,{tagName:s}]=Vu(Object.assign({tagName:n,disabled:r},i));return _(s,Object.assign({},i,o,{ref:e}))});W0.displayName="Button";const H0=["onKeyDown"];function K0(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function G0(t){return!t||t.trim()==="#"}const Hp=v.exports.forwardRef((t,e)=>{let{onKeyDown:n}=t,r=K0(t,H0);const[i]=Vu(Object.assign({tagName:"a"},r)),o=Wp(s=>{i.onKeyDown(s),n==null||n(s)});return G0(r.href)&&!r.role||r.role==="button"?_("a",Object.assign({ref:e},r,i,{onKeyDown:o})):_("a",Object.assign({ref:e},r,{onKeyDown:n}))});Hp.displayName="Anchor";const q0={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Q0={[Kt]:"show",[Cn]:"show"},Wu=v.exports.forwardRef((o,i)=>{var s=o,{className:t,children:e,transitionClasses:n={}}=s,r=W(s,["className","children","transitionClasses"]);const a=v.exports.useCallback((l,u)=>{D0(l),r.onEnter==null||r.onEnter(l,u)},[r]);return _(z0,j(b({ref:i,addEndListener:L0},r),{onEnter:a,childRef:e.ref,children:(l,u)=>v.exports.cloneElement(e,j(b({},u),{className:Z("fade",t,e.props.className,Q0[l],n[l])}))}))});Wu.defaultProps=q0;Wu.displayName="Fade";var Kp=Wu;const Y0={"aria-label":Ot.string,onClick:Ot.func,variant:Ot.oneOf(["white"])},J0={"aria-label":"Close"},zs=v.exports.forwardRef((i,r)=>{var o=i,{className:t,variant:e}=o,n=W(o,["className","variant"]);return _("button",b({ref:r,type:"button",className:Z("btn-close",e&&`btn-close-${e}`,t)},n))});zs.displayName="CloseButton";zs.propTypes=Y0;zs.defaultProps=J0;var X0=zs,Hu=t=>v.exports.forwardRef((e,n)=>_("div",j(b({},e),{ref:n,className:Z(e.className,t)}))),Z0=/-(.)/g;function e_(t){return t.replace(Z0,function(e,n){return n.toUpperCase()})}const t_=t=>t[0].toUpperCase()+e_(t).slice(1);function wt(t,{displayName:e=t_(t),Component:n,defaultProps:r}={}){const i=v.exports.forwardRef((c,u)=>{var f=c,{className:o,bsPrefix:s,as:a=n||"div"}=f,l=W(f,["className","bsPrefix","as"]);const d=fe(s,t);return _(a,b({ref:u,className:Z(o,d)},l))});return i.defaultProps=r,i.displayName=e,i}const Gp=Hu("h4");Gp.displayName="DivStyledAsH4";const n_=wt("alert-heading",{Component:Gp}),r_=wt("alert-link",{Component:Hp}),i_={variant:"primary",show:!0,transition:Kp,closeLabel:"Close alert"},Ku=v.exports.forwardRef((t,e)=>{const p=i0(t,{show:"onClose"}),{bsPrefix:n,show:r,closeLabel:i,closeVariant:o,className:s,children:a,variant:l,onClose:u,dismissible:c,transition:f}=p,d=W(p,["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"]),g=fe(n,"alert"),y=Wp(h=>{u&&u(!1,h)}),C=f===!0?Kp:f,x=K("div",j(b({role:"alert"},C?void 0:d),{ref:e,className:Z(s,g,l&&`${g}-${l}`,c&&`${g}-dismissible`),children:[c&&_(X0,{onClick:y,"aria-label":i,variant:o}),a]}));return C?_(C,j(b({unmountOnExit:!0},d),{ref:void 0,in:r,children:x})):r?x:null});Ku.displayName="Alert";Ku.defaultProps=i_;var Pr=Object.assign(Ku,{Link:r_,Heading:n_});const o_={variant:"primary",active:!1,disabled:!1},Gu=v.exports.forwardRef((l,a)=>{var u=l,{as:t,bsPrefix:e,variant:n,size:r,active:i,className:o}=u,s=W(u,["as","bsPrefix","variant","size","active","className"]);const c=fe(e,"btn"),[f,{tagName:d}]=Vu(b({tagName:t},s));return _(d,j(b(b({},f),s),{ref:a,className:Z(o,c,i&&"active",n&&`${c}-${n}`,r&&`${c}-${r}`,s.href&&s.disabled&&"disabled")}))});Gu.displayName="Button";Gu.defaultProps=o_;var Yi=Gu;const qp=v.exports.forwardRef((s,o)=>{var a=s,{bsPrefix:t,className:e,variant:n,as:r="img"}=a,i=W(a,["bsPrefix","className","variant","as"]);const l=fe(t,"card-img");return _(r,b({ref:o,className:Z(n?`${l}-${n}`:l,e)},i))});qp.displayName="CardImg";var s_=qp;const Qp=v.exports.createContext(null);Qp.displayName="CardHeaderContext";var a_=Qp;const Yp=v.exports.forwardRef((o,i)=>{var s=o,{bsPrefix:t,className:e,as:n="div"}=s,r=W(s,["bsPrefix","className","as"]);const a=fe(t,"card-header"),l=v.exports.useMemo(()=>({cardHeaderBsPrefix:a}),[a]);return _(a_.Provider,{value:l,children:_(n,j(b({ref:i},r),{className:Z(e,a)}))})});Yp.displayName="CardHeader";var l_=Yp;const u_=Hu("h5"),c_=Hu("h6"),Jp=wt("card-body"),d_=wt("card-title",{Component:u_}),f_=wt("card-subtitle",{Component:c_}),h_=wt("card-link",{Component:"a"}),p_=wt("card-text",{Component:"p"}),m_=wt("card-footer"),g_=wt("card-img-overlay"),v_={body:!1},qu=v.exports.forwardRef((c,u)=>{var f=c,{bsPrefix:t,className:e,bg:n,text:r,border:i,body:o,children:s,as:a="div"}=f,l=W(f,["bsPrefix","className","bg","text","border","body","children","as"]);const d=fe(t,"card");return _(a,j(b({ref:u},l),{className:Z(e,d,n&&`bg-${n}`,r&&`text-${r}`,i&&`border-${i}`),children:o?_(Jp,{children:s}):s}))});qu.displayName="Card";qu.defaultProps=v_;var yt=Object.assign(qu,{Img:s_,Title:d_,Subtitle:f_,Body:Jp,Link:h_,Text:p_,Header:l_,Footer:m_,ImgOverlay:g_});function y_(t,e){return v.exports.Children.toArray(t).some(n=>v.exports.isValidElement(n)&&n.type===e)}function __(i){var o=i,{as:t,bsPrefix:e,className:n}=o,r=W(o,["as","bsPrefix","className"]);e=fe(e,"col");const s=h0(),a=[],l=[];return s.forEach(u=>{const c=r[u];delete r[u];let f,d,g;typeof c=="object"&&c!=null?{span:f,offset:d,order:g}=c:f=c;const y=u!=="xs"?`-${u}`:"";f&&a.push(f===!0?`${e}${y}`:`${e}${y}-${f}`),g!=null&&l.push(`order${y}-${g}`),d!=null&&l.push(`offset${y}-${d}`)}),[j(b({},r),{className:Z(n,...a,...l)}),{as:t,bsPrefix:e,spans:a}]}const Xp=v.exports.forwardRef((t,e)=>{const[a,...l]=__(t),u=a,{className:n}=u,r=W(u,["className"]),[{as:i="div",bsPrefix:o,spans:s}]=l;return _(i,j(b({},r),{ref:e,className:Z(n,!s.length&&o)}))});Xp.displayName="Col";var w_=Xp;const E_={type:Ot.string,tooltip:Ot.bool,as:Ot.elementType},Qu=v.exports.forwardRef((s,o)=>{var a=s,{as:t="div",className:e,type:n="valid",tooltip:r=!1}=a,i=W(a,["as","className","type","tooltip"]);return _(t,j(b({},i),{ref:o,className:Z(e,`${n}-${r?"tooltip":"feedback"}`)}))});Qu.displayName="Feedback";Qu.propTypes=E_;var Zp=Qu;const I_=v.exports.createContext({});var bt=I_;const em=v.exports.forwardRef((u,l)=>{var c=u,{id:t,bsPrefix:e,className:n,type:r="checkbox",isValid:i=!1,isInvalid:o=!1,as:s="input"}=c,a=W(c,["id","bsPrefix","className","type","isValid","isInvalid","as"]);const{controlId:f}=v.exports.useContext(bt);return e=fe(e,"form-check-input"),_(s,j(b({},a),{ref:l,type:r,id:t||f,className:Z(n,e,i&&"is-valid",o&&"is-invalid")}))});em.displayName="FormCheckInput";var tm=em;const nm=v.exports.forwardRef((o,i)=>{var s=o,{bsPrefix:t,className:e,htmlFor:n}=s,r=W(s,["bsPrefix","className","htmlFor"]);const{controlId:a}=v.exports.useContext(bt);return t=fe(t,"form-check-label"),_("label",j(b({},r),{ref:i,htmlFor:n||a,className:Z(e,t)}))});nm.displayName="FormCheckLabel";var Dl=nm;const rm=v.exports.forwardRef((m,h)=>{var w=m,{id:t,bsPrefix:e,bsSwitchPrefix:n,inline:r=!1,disabled:i=!1,isValid:o=!1,isInvalid:s=!1,feedbackTooltip:a=!1,feedback:l,feedbackType:u,className:c,style:f,title:d="",type:g="checkbox",label:y,children:C,as:x="input"}=w,p=W(w,["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"]);e=fe(e,"form-check"),n=fe(n,"form-switch");const{controlId:T}=v.exports.useContext(bt),R=v.exports.useMemo(()=>({controlId:t||T}),[T,t]),E=!C&&y!=null&&y!==!1||y_(C,Dl),S=_(tm,j(b({},p),{type:g==="switch"?"checkbox":g,ref:h,isValid:o,isInvalid:s,disabled:i,as:x}));return _(bt.Provider,{value:R,children:_("div",{style:f,className:Z(c,E&&e,r&&`${e}-inline`,g==="switch"&&n),children:C||K(Dr,{children:[S,E&&_(Dl,{title:d,children:y}),l&&_(Zp,{type:u,tooltip:a,children:l})]})})})});rm.displayName="FormCheck";var hs=Object.assign(rm,{Input:tm,Label:Dl});const im=v.exports.forwardRef((g,d)=>{var y=g,{bsPrefix:t,type:e,size:n,htmlSize:r,id:i,className:o,isValid:s=!1,isInvalid:a=!1,plaintext:l,readOnly:u,as:c="input"}=y,f=W(y,["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]);const{controlId:C}=v.exports.useContext(bt);t=fe(t,"form-control");let x;return l?x={[`${t}-plaintext`]:!0}:x={[t]:!0,[`${t}-${n}`]:n},_(c,j(b({},f),{type:e,size:r,ref:d,readOnly:u,id:i||C,className:Z(o,x,s&&"is-valid",a&&"is-invalid",e==="color"&&`${t}-color`)}))});im.displayName="FormControl";var k_=Object.assign(im,{Feedback:Zp}),S_=wt("form-floating");const om=v.exports.forwardRef((i,r)=>{var o=i,{controlId:t,as:e="div"}=o,n=W(o,["controlId","as"]);const s=v.exports.useMemo(()=>({controlId:t}),[t]);return _(bt.Provider,{value:s,children:_(e,j(b({},n),{ref:r}))})});om.displayName="FormGroup";var sm=om;const T_={column:!1,visuallyHidden:!1},Yu=v.exports.forwardRef((l,a)=>{var u=l,{as:t="label",bsPrefix:e,column:n,visuallyHidden:r,className:i,htmlFor:o}=u,s=W(u,["as","bsPrefix","column","visuallyHidden","className","htmlFor"]);const{controlId:c}=v.exports.useContext(bt);e=fe(e,"form-label");let f="col-form-label";typeof n=="string"&&(f=`${f} ${f}-${n}`);const d=Z(i,e,r&&"visually-hidden",n&&f);return o=o||c,n?_(w_,b({ref:a,as:"label",className:d,htmlFor:o},s)):_(t,b({ref:a,className:d,htmlFor:o},s))});Yu.displayName="FormLabel";Yu.defaultProps=T_;var C_=Yu;const am=v.exports.forwardRef((o,i)=>{var s=o,{bsPrefix:t,className:e,id:n}=s,r=W(s,["bsPrefix","className","id"]);const{controlId:a}=v.exports.useContext(bt);return t=fe(t,"form-range"),_("input",j(b({},r),{type:"range",ref:i,className:Z(e,t),id:n||a}))});am.displayName="FormRange";var R_=am;const lm=v.exports.forwardRef((u,l)=>{var c=u,{bsPrefix:t,size:e,htmlSize:n,className:r,isValid:i=!1,isInvalid:o=!1,id:s}=c,a=W(c,["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"]);const{controlId:f}=v.exports.useContext(bt);return t=fe(t,"form-select"),_("select",j(b({},a),{size:n,ref:l,className:Z(r,t,e&&`${t}-${e}`,i&&"is-valid",o&&"is-invalid"),id:s||f}))});lm.displayName="FormSelect";var P_=lm;const um=v.exports.forwardRef((s,o)=>{var a=s,{bsPrefix:t,className:e,as:n="small",muted:r}=a,i=W(a,["bsPrefix","className","as","muted"]);return t=fe(t,"form-text"),_(n,j(b({},i),{ref:o,className:Z(e,t,r&&"text-muted")}))});um.displayName="FormText";var N_=um;const cm=v.exports.forwardRef((t,e)=>_(hs,j(b({},t),{ref:e,type:"switch"})));cm.displayName="Switch";var x_=Object.assign(cm,{Input:hs.Input,Label:hs.Label});const dm=v.exports.forwardRef((a,s)=>{var l=a,{bsPrefix:t,className:e,children:n,controlId:r,label:i}=l,o=W(l,["bsPrefix","className","children","controlId","label"]);return t=fe(t,"form-floating"),K(sm,j(b({ref:s,className:Z(e,t),controlId:r},o),{children:[n,_("label",{htmlFor:r,children:i})]}))});dm.displayName="FloatingLabel";var O_=dm;const A_={_ref:Ot.any,validated:Ot.bool,as:Ot.elementType},Ju=v.exports.forwardRef((o,i)=>{var s=o,{className:t,validated:e,as:n="form"}=s,r=W(s,["className","validated","as"]);return _(n,j(b({},r),{ref:i,className:Z(t,e&&"was-validated")}))});Ju.displayName="Form";Ju.propTypes=A_;var z=Object.assign(Ju,{Group:sm,Control:k_,Floating:S_,Check:hs,Switch:x_,Label:C_,Text:N_,Range:R_,Select:P_,FloatingLabel:O_});const L_={fluid:!1},Xu=v.exports.forwardRef((s,o)=>{var a=s,{bsPrefix:t,fluid:e,as:n="div",className:r}=a,i=W(a,["bsPrefix","fluid","as","className"]);const l=fe(t,"container"),u=typeof e=="string"?`-${e}`:"-fluid";return _(n,j(b({ref:o},i),{className:Z(r,e?`${l}${u}`:l)}))});Xu.displayName="Container";Xu.defaultProps=L_;var D_=Xu,Nn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Nn||(Nn={}));var Wd=function(t){return t},Hd="beforeunload",M_="popstate";function b_(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function o(){var E=r.location,S=E.pathname,A=E.search,O=E.hash,Q=i.state||{};return[Q.idx,Wd({pathname:S,search:A,hash:O,state:Q.usr||null,key:Q.key||"default"})]}var s=null;function a(){if(s)g.call(s),s=null;else{var E=Nn.Pop,S=o(),A=S[0],O=S[1];if(g.length){if(A!=null){var Q=c-A;Q&&(s={action:E,location:O,retry:function(){T(Q*-1)}},T(Q))}}else h(E)}}r.addEventListener(M_,a);var l=Nn.Pop,u=o(),c=u[0],f=u[1],d=Gd(),g=Gd();c==null&&(c=0,i.replaceState(Fi({},i.state,{idx:c}),""));function y(E){return typeof E=="string"?E:Ml(E)}function C(E,S){return S===void 0&&(S=null),Wd(Fi({pathname:f.pathname,hash:"",search:""},typeof E=="string"?qn(E):E,{state:S,key:F_()}))}function x(E,S){return[{usr:E.state,key:E.key,idx:S},y(E)]}function p(E,S,A){return!g.length||(g.call({action:E,location:S,retry:A}),!1)}function h(E){l=E;var S=o();c=S[0],f=S[1],d.call({action:l,location:f})}function m(E,S){var A=Nn.Push,O=C(E,S);function Q(){m(E,S)}if(p(A,O,Q)){var Be=x(O,c+1),Et=Be[0],yn=Be[1];try{i.pushState(Et,"",yn)}catch{r.location.assign(yn)}h(A)}}function w(E,S){var A=Nn.Replace,O=C(E,S);function Q(){w(E,S)}if(p(A,O,Q)){var Be=x(O,c),Et=Be[0],yn=Be[1];i.replaceState(Et,"",yn),h(A)}}function T(E){i.go(E)}var R={get action(){return l},get location(){return f},createHref:y,push:m,replace:w,go:T,back:function(){T(-1)},forward:function(){T(1)},listen:function(S){return d.push(S)},block:function(S){var A=g.push(S);return g.length===1&&r.addEventListener(Hd,Kd),function(){A(),g.length||r.removeEventListener(Hd,Kd)}}};return R}function Kd(t){t.preventDefault(),t.returnValue=""}function Gd(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function F_(){return Math.random().toString(36).substr(2,8)}function Ml(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,o=t.hash,s=o===void 0?"":o;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function qn(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Zu=v.exports.createContext(null),ec=v.exports.createContext(null),$s=v.exports.createContext({outlet:null,matches:[]});function st(t,e){if(!t)throw new Error(e)}function U_(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?qn(e):e,i=pm(r.pathname||"/",n);if(i==null)return null;let o=fm(t);z_(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=q_(o[a],i);return s}function fm(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,o)=>{let s={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(s.relativePath.startsWith(r)||st(!1),s.relativePath=s.relativePath.slice(r.length));let a=on([r,s.relativePath]),l=n.concat(s);i.children&&i.children.length>0&&(i.index===!0&&st(!1),fm(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:K_(a,i.index),routesMeta:l})}),e}function z_(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:G_(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $_=/^:\w+$/,j_=3,B_=2,V_=1,W_=10,H_=-2,qd=t=>t==="*";function K_(t,e){let n=t.split("/"),r=n.length;return n.some(qd)&&(r+=H_),e&&(r+=B_),n.filter(i=>!qd(i)).reduce((i,o)=>i+($_.test(o)?j_:o===""?V_:W_),r)}function G_(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function q_(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Q_({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:on([i,c.pathname]),pathnameBase:mm(on([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=on([i,c.pathnameBase]))}return o}function Q_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Y_(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let d=a[f]||"";s=o.slice(0,o.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=J_(a[f]||""),u},{}),pathname:o,pathnameBase:s,pattern:t}}function Y_(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(s,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function J_(t,e){try{return decodeURIComponent(t)}catch{return t}}function X_(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?qn(t):t;return{pathname:n?n.startsWith("/")?n:Z_(n,e):e,search:tw(r),hash:nw(i)}}function Z_(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function hm(t,e,n){let r=typeof t=="string"?qn(t):t,i=t===""||r.pathname===""?"/":r.pathname,o;if(i==null)o=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}o=a>=0?e[a]:"/"}let s=X_(r,o);return i&&i!=="/"&&i.endsWith("/")&&!s.pathname.endsWith("/")&&(s.pathname+="/"),s}function ew(t){return t===""||t.pathname===""?"/":typeof t=="string"?qn(t).pathname:t.pathname}function pm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const on=t=>t.join("/").replace(/\/\/+/g,"/"),mm=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),tw=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nw=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function rw(t){Mr()||st(!1);let{basename:e,navigator:n}=v.exports.useContext(Zu),{hash:r,pathname:i,search:o}=gm(t),s=i;if(e!=="/"){let a=ew(t),l=a!=null&&a.endsWith("/");s=i==="/"?e+(l?"/":""):on([e,i])}return n.createHref({pathname:s,search:o,hash:r})}function Mr(){return v.exports.useContext(ec)!=null}function js(){return Mr()||st(!1),v.exports.useContext(ec).location}function br(){Mr()||st(!1);let{basename:t,navigator:e}=v.exports.useContext(Zu),{matches:n}=v.exports.useContext($s),{pathname:r}=js(),i=JSON.stringify(n.map(a=>a.pathnameBase)),o=v.exports.useRef(!1);return v.exports.useEffect(()=>{o.current=!0}),v.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){e.go(a);return}let u=hm(a,JSON.parse(i),r);t!=="/"&&(u.pathname=on([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}function gm(t){let{matches:e}=v.exports.useContext($s),{pathname:n}=js(),r=JSON.stringify(e.map(i=>i.pathnameBase));return v.exports.useMemo(()=>hm(t,JSON.parse(r),n),[t,r,n])}function iw(t,e){Mr()||st(!1);let{matches:n}=v.exports.useContext($s),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let s=js(),a;if(e){var l;let d=typeof e=="string"?qn(e):e;o==="/"||((l=d.pathname)==null?void 0:l.startsWith(o))||st(!1),a=d}else a=s;let u=a.pathname||"/",c=o==="/"?u:u.slice(o.length)||"/",f=U_(t,{pathname:c});return ow(f&&f.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:on([o,d.pathname]),pathnameBase:d.pathnameBase==="/"?o:on([o,d.pathnameBase])})),n)}function ow(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>v.exports.createElement($s.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function sw(t){let{to:e,replace:n,state:r}=t;Mr()||st(!1);let i=br();return v.exports.useEffect(()=>{i(e,{replace:n,state:r})}),null}function Sn(t){st(!1)}function aw(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Nn.Pop,navigator:o,static:s=!1}=t;Mr()&&st(!1);let a=mm(e),l=v.exports.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=qn(r));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:g="default"}=r,y=v.exports.useMemo(()=>{let C=pm(u,a);return C==null?null:{pathname:C,search:c,hash:f,state:d,key:g}},[a,u,c,f,d,g]);return y==null?null:v.exports.createElement(Zu.Provider,{value:l},v.exports.createElement(ec.Provider,{children:n,value:{location:y,navigationType:i}}))}function lw(t){let{children:e,location:n}=t;return iw(bl(e),n)}function bl(t){let e=[];return v.exports.Children.forEach(t,n=>{if(!v.exports.isValidElement(n))return;if(n.type===v.exports.Fragment){e.push.apply(e,bl(n.props.children));return}n.type!==Sn&&st(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=bl(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fl(){return Fl=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fl.apply(this,arguments)}function uw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const cw=["onClick","reloadDocument","replace","state","target","to"];function dw(t){let{basename:e,children:n,window:r}=t,i=v.exports.useRef();i.current==null&&(i.current=b_({window:r}));let o=i.current,[s,a]=v.exports.useState({action:o.action,location:o.location});return v.exports.useLayoutEffect(()=>o.listen(a),[o]),v.exports.createElement(aw,{basename:e,children:n,location:s.location,navigationType:s.action,navigator:o})}function fw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const jn=v.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:o=!1,state:s,target:a,to:l}=e,u=uw(e,cw),c=rw(l),f=hw(l,{replace:o,state:s,target:a});function d(g){r&&r(g),!g.defaultPrevented&&!i&&f(g)}return v.exports.createElement("a",Fl({},u,{href:c,onClick:d,ref:n,target:a}))});function hw(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,o=br(),s=js(),a=gm(t);return v.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!fw(l)){l.preventDefault();let u=!!r||Ml(s)===Ml(a);o(t,{replace:u,state:i})}},[s,o,a,r,i,n,t])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},ym={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(d=64)),r.push(n[c],n[f],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw Error();const d=o<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},mw=function(t){const e=vm(t);return ym.encodeByteArray(e,!0)},_m=function(t){return mw(t).replace(/\./g,"")},gw=function(t){try{return ym.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function ps(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!vw(n)||(t[n]=ps(t[n],e[n]));return t}function vw(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _w(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ie())}function wm(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ww(){return typeof self=="object"&&self.self===self}function Em(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Im(){const t=ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ms(){return typeof indexedDB=="object"}function Ew(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw="FirebaseError";class qe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Iw,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qn.prototype.create)}}class Qn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?kw(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new qe(i,a,r)}}function kw(t,e){return t.replace(Sw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Sw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Tw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ul(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Yd(o)&&Yd(s)){if(!Ul(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function li(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function km(t,e){const n=new Cw(t,e);return n.subscribe.bind(n)}class Cw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Rw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pa),i.error===void 0&&(i.error=Pa),i.complete===void 0&&(i.complete=Pa);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xw(e))try{this.getOrInitializeService({instanceIdentifier:Tn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Tn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Tn){return this.instances.has(e)}getOptions(e=Tn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Tn){return this.component?this.component.multipleInstances?e:Tn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nw(t){return t===Tn?void 0:t}function xw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Pw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=[];var B;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(B||(B={}));const Sm={debug:B.DEBUG,verbose:B.VERBOSE,info:B.INFO,warn:B.WARN,error:B.ERROR,silent:B.SILENT},Aw=B.INFO,Lw={[B.DEBUG]:"log",[B.VERBOSE]:"log",[B.INFO]:"info",[B.WARN]:"warn",[B.ERROR]:"error"},Dw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Lw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rc{constructor(e){this.name=e,this._logLevel=Aw,this._logHandler=Dw,this._userLogHandler=null,nc.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in B))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,B.DEBUG,...e),this._logHandler(this,B.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,B.VERBOSE,...e),this._logHandler(this,B.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,B.INFO,...e),this._logHandler(this,B.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,B.WARN,...e),this._logHandler(this,B.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,B.ERROR,...e),this._logHandler(this,B.ERROR,...e)}}function Mw(t){nc.forEach(e=>{e.setLogLevel(t)})}function bw(t,e){for(const n of nc){let r=null;e&&e.level&&(r=Sm[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,o,...s)=>{const a=s.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");o>=(r!=null?r:i.logLevel)&&t({level:B[o].toLowerCase(),message:a,args:s,type:i.name})}}}const Fw=(t,e)=>e.some(n=>t instanceof n);let Jd,Xd;function Uw(){return Jd||(Jd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zw(){return Xd||(Xd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tm=new WeakMap,zl=new WeakMap,Cm=new WeakMap,Na=new WeakMap,ic=new WeakMap;function $w(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(sn(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Tm.set(n,t)}).catch(()=>{}),ic.set(e,t),e}function jw(t){if(zl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});zl.set(t,e)}let $l={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bw(t){$l=t($l)}function Vw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(xa(this),e,...n);return Cm.set(r,e.sort?e.sort():[e]),sn(r)}:zw().includes(t)?function(...e){return t.apply(xa(this),e),sn(Tm.get(this))}:function(...e){return sn(t.apply(xa(this),e))}}function Ww(t){return typeof t=="function"?Vw(t):(t instanceof IDBTransaction&&jw(t),Fw(t,Uw())?new Proxy(t,$l):t)}function sn(t){if(t instanceof IDBRequest)return $w(t);if(Na.has(t))return Na.get(t);const e=Ww(t);return e!==t&&(Na.set(t,e),ic.set(e,t)),e}const xa=t=>ic.get(t);function Hw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=sn(s);return r&&s.addEventListener("upgradeneeded",l=>{r(sn(s.result),l.oldVersion,l.newVersion,sn(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Kw=["get","getKey","getAll","getAllKeys","count"],Gw=["put","add","delete","clear"],Oa=new Map;function Zd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oa.get(e))return Oa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Gw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Kw.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Oa.set(e,o),o}Bw(t=>j(b({},t),{get:(e,n,r)=>Zd(e,n)||t.get(e,n,r),has:(e,n)=>!!Zd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jl="@firebase/app",ef="0.7.24";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new rc("@firebase/app"),Yw="@firebase/app-compat",Jw="@firebase/analytics-compat",Xw="@firebase/analytics",Zw="@firebase/app-check-compat",eE="@firebase/app-check",tE="@firebase/auth",nE="@firebase/auth-compat",rE="@firebase/database",iE="@firebase/database-compat",oE="@firebase/functions",sE="@firebase/functions-compat",aE="@firebase/installations",lE="@firebase/installations-compat",uE="@firebase/messaging",cE="@firebase/messaging-compat",dE="@firebase/performance",fE="@firebase/performance-compat",hE="@firebase/remote-config",pE="@firebase/remote-config-compat",mE="@firebase/storage",gE="@firebase/storage-compat",vE="@firebase/firestore",yE="@firebase/firestore-compat",_E="firebase",wE="9.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="[DEFAULT]",EE={[jl]:"fire-core",[Yw]:"fire-core-compat",[Xw]:"fire-analytics",[Jw]:"fire-analytics-compat",[eE]:"fire-app-check",[Zw]:"fire-app-check-compat",[tE]:"fire-auth",[nE]:"fire-auth-compat",[rE]:"fire-rtdb",[iE]:"fire-rtdb-compat",[oE]:"fire-fn",[sE]:"fire-fn-compat",[aE]:"fire-iid",[lE]:"fire-iid-compat",[uE]:"fire-fcm",[cE]:"fire-fcm-compat",[dE]:"fire-perf",[fE]:"fire-perf-compat",[hE]:"fire-rc",[pE]:"fire-rc-compat",[mE]:"fire-gcs",[gE]:"fire-gcs-compat",[vE]:"fire-fst",[yE]:"fire-fst-compat","fire-js":"fire-js",[_E]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=new Map,Ui=new Map;function gs(t,e){try{t.container.addComponent(e)}catch(n){oc.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rm(t,e){t.container.addOrOverwriteComponent(e)}function Vn(t){const e=t.name;if(Ui.has(e))return oc.debug(`There were multiple attempts to register component ${e}.`),!1;Ui.set(e,t);for(const n of fn.values())gs(n,t);return!0}function Pm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function IE(t,e,n=Bn){Pm(t,e).clearInstance(n)}function kE(){Ui.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},hn=new Qn("app","Firebase",SE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=wE;function Nm(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Bn,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw hn.create("bad-app-name",{appName:String(r)});const i=fn.get(r);if(i){if(Ul(t,i.options)&&Ul(n,i.config))return i;throw hn.create("duplicate-app",{appName:r})}const o=new Ow(r);for(const a of Ui.values())o.addComponent(a);const s=new TE(t,n,o);return fn.set(r,s),s}function CE(t=Bn){const e=fn.get(t);if(!e)throw hn.create("no-app",{appName:t});return e}function RE(){return Array.from(fn.values())}async function xm(t){const e=t.name;fn.has(e)&&(fn.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function an(t,e,n){var r;let i=(r=EE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),oc.warn(a.join(" "));return}Vn(new dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Om(t,e){if(t!==null&&typeof t!="function")throw hn.create("invalid-log-argument");bw(t,e)}function Am(t){Mw(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="firebase-heartbeat-database",NE=1,zi="firebase-heartbeat-store";let Aa=null;function Lm(){return Aa||(Aa=Hw(PE,NE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zi)}}}).catch(t=>{throw hn.create("storage-open",{originalErrorMessage:t.message})})),Aa}async function xE(t){try{return(await Lm()).transaction(zi).objectStore(zi).get(Dm(t))}catch(e){throw hn.create("storage-get",{originalErrorMessage:e.message})}}async function tf(t,e){try{const r=(await Lm()).transaction(zi,"readwrite");return await r.objectStore(zi).put(e,Dm(t)),r.done}catch(n){throw hn.create("storage-set",{originalErrorMessage:n.message})}}function Dm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=1024,AE=30*24*60*60*1e3;class LE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ME(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=nf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=AE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nf(),{heartbeatsToSend:n,unsentEntries:r}=DE(this._heartbeatsCache.heartbeats),i=_m(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function nf(){return new Date().toISOString().substring(0,10)}function DE(t,e=OE){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),rf(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ME{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ms()?Ew().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rf(t){return _m(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(t){Vn(new dn("platform-logger",e=>new qw(e),"PRIVATE")),Vn(new dn("heartbeat",e=>new LE(e),"PRIVATE")),an(jl,ef,t),an(jl,ef,"esm2017"),an("fire-js","")}bE("");var FE=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Ur,_DEFAULT_ENTRY_NAME:Bn,_addComponent:gs,_addOrOverwriteComponent:Rm,_apps:fn,_clearComponents:kE,_components:Ui,_getProvider:Pm,_registerComponent:Vn,_removeServiceInstance:IE,deleteApp:xm,getApp:CE,getApps:RE,initializeApp:Nm,onLog:Om,registerVersion:an,setLogLevel:Am,FirebaseError:qe},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,n){this._delegate=e,this.firebase=n,gs(e,new dn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),xm(this._delegate)))}_getService(e,n=Bn){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Bn){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){gs(this._delegate,e)}_addOrOverwriteComponent(e){Rm(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},of=new Qn("app-compat","Firebase",zE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t){const e={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:an,setLogLevel:Am,onLog:Om,apps:null,SDK_VERSION:Ur,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:FE}};n.default=n,Object.defineProperty(n,"apps",{get:s});function r(u){delete e[u]}function i(u){if(u=u||Bn,!Qd(e,u))throw of.create("no-app",{appName:u});return e[u]}i.App=t;function o(u,c={}){const f=Nm(u,c);if(Qd(e,f.name))return e[f.name];const d=new t(f,n);return e[f.name]=d,d}function s(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,f=c.replace("-compat","");if(Vn(u)&&u.type==="PUBLIC"){const d=(g=i())=>{if(typeof g[f]!="function")throw of.create("invalid-app-argument",{appName:c});return g[f]()};u.serviceProps!==void 0&&ps(d,u.serviceProps),n[f]=d,t.prototype[f]=function(...g){return this._getService.bind(this,c).apply(this,u.multipleInstances?g:[])}}return u.type==="PUBLIC"?n[f]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(){const t=$E(UE);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Mm,extendNamespace:e,createSubscribe:km,ErrorFactory:Qn,deepExtend:ps});function e(n){ps(t,n)}return t}const jE=Mm();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=new rc("@firebase/app-compat"),BE="@firebase/app-compat",VE="0.1.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WE(t){an(BE,VE,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(ww()&&self.firebase!==void 0){sf.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&sf.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Ji=jE;WE();function sc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Zr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Zn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function bm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KE=HE,GE=bm,Fm=new Qn("auth","Firebase",bm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=new rc("@firebase/auth");function Uo(t,...e){af.logLevel<=B.ERROR&&af.error(`Auth (${Ur}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t,...e){throw ac(t,...e)}function ve(t,...e){return ac(t,...e)}function Um(t,e,n){const r=Object.assign(Object.assign({},GE()),{[e]:n});return new Qn("auth","Firebase",r).create(e,{appName:t.name})}function zr(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&_e(t,"argument-error"),Um(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ac(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Fm.create(t,...e)}function k(t,e,...n){if(!t)throw ac(e,...n)}function mt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Uo(e),new Error(e)}function at(t,e){t||mt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf=new Map;function Fe(t){at(t instanceof Function,"Expected a class definition");let e=lf.get(t);return e?(at(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lf.set(t,e),e)}function qE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lc(){return uf()==="http:"||uf()==="https:"}function uf(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lc()||Em()||"connection"in navigator)?navigator.onLine:!0}function YE(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,at(n>e,"Short delay should be less than long delay!"),this.isMobile=_w()||tc()}get(){return QE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(t,e){at(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=new Xi(3e4,6e4);function ue(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function pe(t,e,n,r,i={}){return $m(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Fr(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),zm.fetch()(jm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function $m(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},JE),e);try{const i=new ZE(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw zo(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zo(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw zo(t,"email-already-in-use",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Um(t,c,u);_e(t,c)}}catch(i){if(i instanceof qe)throw i;_e(t,"network-request-failed")}}async function $t(t,e,n,r,i={}){const o=await pe(t,e,n,r,i);return"mfaPendingCredential"in o&&_e(t,"multi-factor-auth-required",{_serverResponse:o}),o}function jm(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?uc(t.config,i):`${t.config.apiScheme}://${i}`}class ZE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ve(this.auth,"network-request-failed")),XE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ve(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(t,e){return pe(t,"POST","/v1/accounts:delete",e)}async function tI(t,e){return pe(t,"POST","/v1/accounts:update",e)}async function nI(t,e){return pe(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rI(t,e=!1){const n=F(t),r=await n.getIdToken(e),i=Bs(r);k(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:yi(La(i.auth_time)),issuedAtTime:yi(La(i.iat)),expirationTime:yi(La(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function La(t){return Number(t)*1e3}function Bs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Uo("JWT malformed, contained fewer than 3 sections"),null;try{const i=gw(n);return i?JSON.parse(i):(Uo("Failed to decode base64 JWT payload"),null)}catch(i){return Uo("Caught error parsing JWT payload as JSON",i),null}}function iI(t){const e=Bs(t);return k(e,"internal-error"),k(typeof e.exp!="undefined","internal-error"),k(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qe&&oI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yi(this.lastLoginAt),this.creationTime=yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ji(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ft(t,nI(n,{idToken:r}));k(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?uI(o.providerUserInfo):[],a=lI(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Bm(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function aI(t){const e=F(t);await ji(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function uI(t){return t.map(e=>{var{providerId:n}=e,r=sc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cI(t,e){const n=await $m(t,{},async()=>{const r=Fr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=jm(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zm.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken!="undefined","internal-error"),k(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):iI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await cI(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Bi;return r&&(k(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(k(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(k(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bi,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e){k(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Ln{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=sc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Bm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Ft(this,this.stsTokenManager.getToken(this.auth,e));return k(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rI(this,e)}reload(){return aI(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ji(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ft(this,eI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:T,providerData:R,stsTokenManager:E}=n;k(m&&E,e,"internal-error");const S=Bi.fromJSON(this.name,E);k(typeof m=="string",e,"internal-error"),Vt(f,e.name),Vt(d,e.name),k(typeof w=="boolean",e,"internal-error"),k(typeof T=="boolean",e,"internal-error"),Vt(g,e.name),Vt(y,e.name),Vt(C,e.name),Vt(x,e.name),Vt(p,e.name),Vt(h,e.name);const A=new Ln({uid:m,auth:e,email:d,emailVerified:w,displayName:f,isAnonymous:T,photoURL:y,phoneNumber:g,tenantId:C,stsTokenManager:S,createdAt:p,lastLoginAt:h});return R&&Array.isArray(R)&&(A.providerData=R.map(O=>Object.assign({},O))),x&&(A._redirectEventId=x),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new Bi;i.updateFromServerResponse(n);const o=new Ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ji(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vm.type="NONE";const Nr=Vm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,e,n){return`firebase:${t}:${e}:${n}`}class _r{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Dn(this.userKey,i.apiKey,o),this.fullPersistenceKey=Dn("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _r(Fe(Nr),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Fe(Nr);const s=Dn(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=Ln._fromJSON(e,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new _r(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new _r(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Km(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gm(e))return"Blackberry";if(qm(e))return"Webos";if(cc(e))return"Safari";if((e.includes("chrome/")||Hm(e))&&!e.includes("edge/"))return"Chrome";if(Zi(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wm(t=ie()){return/firefox\//i.test(t)}function cc(t=ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hm(t=ie()){return/crios\//i.test(t)}function Km(t=ie()){return/iemobile/i.test(t)}function Zi(t=ie()){return/android/i.test(t)}function Gm(t=ie()){return/blackberry/i.test(t)}function qm(t=ie()){return/webos/i.test(t)}function $r(t=ie()){return/iphone|ipad|ipod/i.test(t)}function dI(t=ie()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function fI(t=ie()){var e;return $r(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hI(){return Im()&&document.documentMode===10}function Qm(t=ie()){return $r(t)||Zi(t)||qm(t)||Gm(t)||/windows phone/i.test(t)||Km(t)}function pI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t,e=[]){let n;switch(t){case"Browser":n=cf(ie());break;case"Worker":n=`${cf(ie())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ur}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new df(this),this.idTokenSubscription=new df(this),this.beforeStateQueue=new mI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fe(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await _r.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ji(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?F(e):null;return n&&k(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Fe(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fe(e)||this._popupRedirectResolver;k(n,this,"argument-error"),this.redirectPersistenceManager=await _r.create(this,[Fe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return k(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ym(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function he(t){return F(t)}class df{constructor(e){this.auth=e,this.observer=null,this.addObserver=km(n=>this.observer=n)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function vI(t,e,n){const r=he(t);k(r._canInitEmulator,r,"emulator-config-failed"),k(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Jm(e),{host:s,port:a}=yI(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||_I()}function Jm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yI(t){const e=Jm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:ff(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:ff(s)}}}function ff(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _I(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mt("not implemented")}_getIdTokenResponse(e){return mt("not implemented")}_linkToIdToken(e,n){return mt("not implemented")}_getReauthenticationResolver(e){return mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xm(t,e){return pe(t,"POST","/v1/accounts:resetPassword",ue(t,e))}async function Zm(t,e){return pe(t,"POST","/v1/accounts:update",e)}async function wI(t,e){return pe(t,"POST","/v1/accounts:update",ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t,e){return $t(t,"POST","/v1/accounts:signInWithPassword",ue(t,e))}async function Vs(t,e){return pe(t,"POST","/v1/accounts:sendOobCode",ue(t,e))}async function II(t,e){return Vs(t,e)}async function kI(t,e){return Vs(t,e)}async function SI(t,e){return Vs(t,e)}async function TI(t,e){return Vs(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(t,e){return $t(t,"POST","/v1/accounts:signInWithEmailLink",ue(t,e))}async function RI(t,e){return $t(t,"POST","/v1/accounts:signInWithEmailLink",ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends jr{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Vi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Vi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return EI(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return CI(e,{email:this._email,oobCode:this._password});default:_e(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Zm(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return RI(e,{idToken:n,email:this._email,oobCode:this._password});default:_e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(t,e){return $t(t,"POST","/v1/accounts:signInWithIdp",ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI="http://localhost";class _t extends jr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):_e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=sc(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new _t(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return At(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,At(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,At(e,n)}buildRequest(){const e={requestUri:PI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(t,e){return pe(t,"POST","/v1/accounts:sendVerificationCode",ue(t,e))}async function xI(t,e){return $t(t,"POST","/v1/accounts:signInWithPhoneNumber",ue(t,e))}async function OI(t,e){const n=await $t(t,"POST","/v1/accounts:signInWithPhoneNumber",ue(t,e));if(n.temporaryProof)throw zo(t,"account-exists-with-different-credential",n);return n}const AI={USER_NOT_FOUND:"user-not-found"};async function LI(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return $t(t,"POST","/v1/accounts:signInWithPhoneNumber",ue(t,n),AI)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends jr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Mn({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Mn({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return xI(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return OI(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return LI(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o}=e;return!r&&!n&&!i&&!o?null:new Mn({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MI(t){const e=fr(li(t)).link,n=e?fr(li(e)).deep_link_id:null,r=fr(li(t)).deep_link_id;return(r?fr(li(r)).link:null)||r||n||e||t}class Ws{constructor(e){var n,r,i,o,s,a;const l=fr(li(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=DI((i=l.mode)!==null&&i!==void 0?i:null);k(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=MI(e);try{return new Ws(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.providerId=vn.PROVIDER_ID}static credential(e,n){return Vi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ws.parseLink(n);return k(r,"argument-error"),Vi._fromEmailAndCode(e,r.code,r.tenantId)}}vn.PROVIDER_ID="password";vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends jt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class wr extends Br{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return k("providerId"in n&&"signInMethod"in n,"argument-error"),_t._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),_t._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return wr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return wr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:a}=e;if(!r&&!i&&!n&&!o||!a)return null;try{return new wr(a)._credential({idToken:n,accessToken:r,nonce:s,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Br{constructor(){super("facebook.com")}static credential(e){return _t._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch{return null}}}dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";dt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Br{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _t._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ft.credential(n,r)}catch{return null}}}ft.GOOGLE_SIGN_IN_METHOD="google.com";ft.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Br{constructor(){super("github.com")}static credential(e){return _t._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.GITHUB_SIGN_IN_METHOD="github.com";ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI="http://localhost";class xr extends jr{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return At(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,At(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,At(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:o}=n;return!r||!i||!o||r!==i?null:new xr(r,o)}static _create(e,n){return new xr(e,n)}buildRequest(){return{requestUri:bI,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="saml.";class vs extends jt{constructor(e){k(e.startsWith(FI),"argument-error"),super(e)}static credentialFromResult(e){return vs.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return vs.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=xr.fromJSON(e);return k(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return xr._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends Br{constructor(){super("twitter.com")}static credential(e,n){return _t._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pt.credential(n,r)}catch{return null}}}pt.TWITTER_SIGN_IN_METHOD="twitter.com";pt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eg(t,e){return $t(t,"POST","/v1/accounts:signUp",ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await Ln._fromIdTokenResponse(e,r,i),s=hf(r);return new Je({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hf(r);return new Je({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UI(t){var e;const n=he(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Je({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await eg(n,{returnSecureToken:!0}),i=await Je._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends qe{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ys.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ys(e,n,r,i)}}function tg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ys._fromErrorAndOperation(t,o,e,r):o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zI(t,e){const n=F(t);await Hs(!0,n,e);const{providerUserInfo:r}=await tI(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=ng(r||[]);return n.providerData=n.providerData.filter(o=>i.has(o.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function dc(t,e,n=!1){const r=await Ft(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Je._forOperation(t,"link",r)}async function Hs(t,e,n){await ji(e);const r=ng(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";k(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rg(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await Ft(t,tg(r,i,e,t),n);k(o.idToken,r,"internal-error");const s=Bs(o.idToken);k(s,r,"internal-error");const{sub:a}=s;return k(t.uid===a,r,"user-mismatch"),Je._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&_e(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(t,e,n=!1){const r="signIn",i=await tg(t,r,e),o=await Je._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function Ks(t,e){return ig(he(t),e)}async function og(t,e){const n=F(t);return await Hs(!1,n,e.providerId),dc(n,e)}async function sg(t,e){return rg(F(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(t,e){return $t(t,"POST","/v1/accounts:signInWithCustomToken",ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jI(t,e){const n=he(t),r=await $I(n,{token:e,returnSecureToken:!0}),i=await Je._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?fc._fromServerResponse(e,n):_e(e,"internal-error")}}class fc extends Gs{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new fc(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t,e,n){var r;k(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),k(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(k(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(k(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(t,e,n){const r=F(t),i={requestType:"PASSWORD_RESET",email:e};n&&qs(r,i,n),await kI(r,i)}async function VI(t,e,n){await Xm(F(t),{oobCode:e,newPassword:n})}async function WI(t,e){await wI(F(t),{oobCode:e})}async function ag(t,e){const n=F(t),r=await Xm(n,{oobCode:e}),i=r.requestType;switch(k(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":k(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":k(r.mfaInfo,n,"internal-error");default:k(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=Gs._fromServerResponse(he(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:i}}async function HI(t,e){const{data:n}=await ag(F(t),e);return n.email}async function KI(t,e,n){const r=he(t),i=await eg(r,{returnSecureToken:!0,email:e,password:n}),o=await Je._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function GI(t,e,n){return Ks(F(t),vn.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qI(t,e,n){const r=F(t),i={requestType:"EMAIL_SIGNIN",email:e};k(n.handleCodeInApp,r,"argument-error"),n&&qs(r,i,n),await SI(r,i)}function QI(t,e){const n=Ws.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function YI(t,e,n){const r=F(t),i=vn.credentialWithLink(e,n||$i());return k(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Ks(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(t,e){return pe(t,"POST","/v1/accounts:createAuthUri",ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(t,e){const n=lc()?$i():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await JI(F(t),r);return i||[]}async function ZI(t,e){const n=F(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&qs(n.auth,i,e);const{email:o}=await II(n.auth,i);o!==t.email&&await t.reload()}async function ek(t,e,n){const r=F(t),i=await t.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&qs(r.auth,o,n);const{email:s}=await TI(r.auth,o);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(t,e){return pe(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=F(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await Ft(r,tk(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function rk(t,e){return lg(F(t),e,null)}function ik(t,e){return lg(F(t),null,e)}async function lg(t,e,n){const{auth:r}=t,o={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(o.email=e),n&&(o.password=n);const s=await Ft(t,Zm(r,o));await t._updateTokensIfNecessary(s,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ok(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},o=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const s=(n=(e=Bs(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(s){const a=s!=="anonymous"&&s!=="custom"?s:null;return new Er(o,a)}}if(!r)return null;switch(r){case"facebook.com":return new sk(o,i);case"github.com":return new ak(o,i);case"google.com":return new lk(o,i);case"twitter.com":return new uk(o,i,t.screenName||null);case"custom":case"anonymous":return new Er(o,null);default:return new Er(o,r,i)}}class Er{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class ug extends Er{constructor(e,n,r,i){super(e,n,r),this.username=i}}class sk extends Er{constructor(e,n){super(e,"facebook.com",n)}}class ak extends ug{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class lk extends Er{constructor(e,n){super(e,"google.com",n)}}class uk extends ug{constructor(e,n,r){super(e,"twitter.com",n,r)}}function ck(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:ok(n)}class xn{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new xn("enroll",e)}static _fromMfaPendingCredential(e){return new xn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return xn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return xn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=he(e),i=n.customData._serverResponse,o=(i.mfaInfo||[]).map(a=>Gs._fromServerResponse(r,a));k(i.mfaPendingCredential,r,"internal-error");const s=xn._fromMfaPendingCredential(i.mfaPendingCredential);return new hc(s,o,async a=>{const l=await a._process(r,s);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await Je._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return k(n.user,r,"internal-error"),Je._forOperation(n.user,n.operationType,u);default:_e(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function dk(t,e){var n;const r=F(t),i=e;return k(e.customData.operationType,r,"argument-error"),k((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),hc._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(t,e){return pe(t,"POST","/v2/accounts/mfaEnrollment:start",ue(t,e))}function hk(t,e){return pe(t,"POST","/v2/accounts/mfaEnrollment:finalize",ue(t,e))}function pk(t,e){return pe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",ue(t,e))}class pc{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Gs._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new pc(e)}async getSession(){return xn._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const r=e,i=await this.getSession(),o=await Ft(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await Ft(this.user,pk(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==n),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(o){if(o.code!=="auth/user-token-expired")throw o}}}const Da=new WeakMap;function mk(t){const e=F(t);return Da.has(e)||Da.set(e,pc._fromUser(e)),Da.get(e)}const _s="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_s,"1"),this.storage.removeItem(_s),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(){const t=ie();return cc(t)||$r(t)}const vk=1e3,yk=10;class dg extends cg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gk()&&pI(),this.fallbackToPolling=Qm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);hI()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dg.type="LOCAL";const mc=dg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg extends cg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fg.type="SESSION";const Wn=fg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Qs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await _k(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=eo("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(d.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return window}function Ek(t){se().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(){return typeof se().WorkerGlobalScope!="undefined"&&typeof se().importScripts=="function"}async function Ik(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Sk(){return gc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="firebaseLocalStorageDb",Tk=1,ws="firebaseLocalStorage",pg="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ys(t,e){return t.transaction([ws],e?"readwrite":"readonly").objectStore(ws)}function Ck(){const t=indexedDB.deleteDatabase(hg);return new to(t).toPromise()}function Bl(){const t=indexedDB.open(hg,Tk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ws,{keyPath:pg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ws)?e(r):(r.close(),await Ck(),e(await Bl()))})})}async function pf(t,e,n){const r=Ys(t,!0).put({[pg]:e,value:n});return new to(r).toPromise()}async function Rk(t,e){const n=Ys(t,!1).get(e),r=await new to(n).toPromise();return r===void 0?null:r.value}function mf(t,e){const n=Ys(t,!0).delete(e);return new to(n).toPromise()}const Pk=800,Nk=3;class mg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Nk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qs._getInstance(Sk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ik(),!this.activeServiceWorker)return;this.sender=new wk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bl();return await pf(e,_s,"1"),await mf(e,_s),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>pf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Rk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>mf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Ys(i,!1).getAll();return new to(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}mg.type="LOCAL";const Wi=mg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(t,e){return pe(t,"POST","/v2/accounts/mfaSignIn:start",ue(t,e))}function Ok(t,e){return pe(t,"POST","/v2/accounts/mfaSignIn:finalize",ue(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ak(t){return(await pe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=ve("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Lk().appendChild(r)})}function vg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=500,Mk=6e4,To=1e12;class bk{constructor(e){this.auth=e,this.counter=To,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new Fk(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||To;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||To;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||To;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class Fk{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;k(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Uk(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Mk)},Dk))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Uk(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=vg("rcb"),zk=new Xi(3e4,6e4),$k="https://www.google.com/recaptcha/api.js?";class jk{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!se().grecaptcha}load(e,n=""){return k(Bk(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(se().grecaptcha):new Promise((r,i)=>{const o=se().setTimeout(()=>{i(ve(e,"network-request-failed"))},zk.get());se()[Ma]=()=>{se().clearTimeout(o),delete se()[Ma];const a=se().grecaptcha;if(!a){i(ve(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const f=l(u,c);return this.counter++,f},this.hostLanguage=n,r(a)};const s=`${$k}?${Fr({onload:Ma,render:"explicit",hl:n})}`;gg(s).catch(()=>{clearTimeout(o),i(ve(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!se().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Bk(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Vk{async load(e){return new bk(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="recaptcha",Wk={theme:"light",type:"image"};class Hk{constructor(e,n=Object.assign({},Wk),r){this.parameters=n,this.type=yg,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=he(r),this.isInvisible=this.parameters.size==="invisible",k(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;k(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Vk:new jk,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const o=s=>{!s||(this.tokenChangeListeners.delete(o),i(s))};this.tokenChangeListeners.add(o),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=se()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){k(lc()&&!gc(),this.auth,"internal-error"),await Kk(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Ak(this.auth);k(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Kk(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Mn._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Gk(t,e,n){const r=he(t),i=await Js(r,e,F(n));return new vc(i,o=>Ks(r,o))}async function qk(t,e,n){const r=F(t);await Hs(!1,r,"phone");const i=await Js(r.auth,e,F(n));return new vc(i,o=>og(r,o))}async function Qk(t,e,n){const r=F(t),i=await Js(r.auth,e,F(n));return new vc(i,o=>sg(r,o))}async function Js(t,e,n){var r;const i=await n.verify();try{k(typeof i=="string",t,"argument-error"),k(n.type===yg,t,"argument-error");let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const s=o.session;if("phoneNumber"in o)return k(s.type==="enroll",t,"internal-error"),(await fk(t,{idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{k(s.type==="signin",t,"internal-error");const a=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return k(a,t,"missing-multi-factor-info"),(await xk(t,{mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:s}=await NI(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return s}}finally{n._reset()}}async function Yk(t,e){await dc(F(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.providerId=it.PROVIDER_ID,this.auth=he(e)}verifyPhoneNumber(e,n){return Js(this.auth,e,F(n))}static credential(e,n){return Mn._fromVerification(e,n)}static credentialFromResult(e){const n=e;return it.credentialFromTaggedObject(n)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Mn._fromTokenResponse(n,r):null}}it.PROVIDER_ID="phone";it.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e){return e?Fe(e):(k(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc extends jr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return At(e,this._buildIdpRequest())}_linkToIdToken(e,n){return At(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return At(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Jk(t){return ig(t.auth,new yc(t),t.bypassAuthState)}function Xk(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),rg(n,new yc(t),t.bypassAuthState)}async function Zk(t){const{auth:e,user:n}=t;return k(n,e,"internal-error"),dc(n,new yc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jk;case"linkViaPopup":case"linkViaRedirect":return Zk;case"reauthViaPopup":case"reauthViaRedirect":return Xk;default:_e(this.auth,"internal-error")}}resolve(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=new Xi(2e3,1e4);async function tS(t,e,n){const r=he(t);zr(t,e,jt);const i=Yn(r,n);return new Pt(r,"signInViaPopup",e,i).executeNotNull()}async function nS(t,e,n){const r=F(t);zr(r.auth,e,jt);const i=Yn(r.auth,n);return new Pt(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function rS(t,e,n){const r=F(t);zr(r.auth,e,jt);const i=Yn(r.auth,n);return new Pt(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Pt extends _g{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Pt.currentPopupAction&&Pt.currentPopupAction.cancel(),Pt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const e=eo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ve(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ve(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ve(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,eS.get())};e()}}Pt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS="pendingRedirect",_i=new Map;class oS extends _g{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_i.get(this.auth._key());if(!e){try{const r=await sS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_i.set(this.auth._key(),e)}return this.bypassAuthState||_i.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sS(t,e){const n=Eg(e),r=wg(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function _c(t,e){return wg(t)._set(Eg(e),"true")}function aS(){_i.clear()}function wc(t,e){_i.set(t._key(),e)}function wg(t){return Fe(t._redirectPersistence)}function Eg(t){return Dn(iS,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t,e,n){return uS(t,e,n)}async function uS(t,e,n){const r=he(t);zr(t,e,jt);const i=Yn(r,n);return await _c(i,r),i._openRedirect(r,e,"signInViaRedirect")}function cS(t,e,n){return dS(t,e,n)}async function dS(t,e,n){const r=F(t);zr(r.auth,e,jt);const i=Yn(r.auth,n);await _c(i,r.auth);const o=await Ig(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",o)}function fS(t,e,n){return hS(t,e,n)}async function hS(t,e,n){const r=F(t);zr(r.auth,e,jt);const i=Yn(r.auth,n);await Hs(!1,r,e.providerId),await _c(i,r.auth);const o=await Ig(r);return i._openRedirect(r.auth,e,"linkViaRedirect",o)}async function pS(t,e){return await he(t)._initializationPromise,Xs(t,e,!1)}async function Xs(t,e,n=!1){const r=he(t),i=Yn(r,e),s=await new oS(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}async function Ig(t){const e=eo(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=10*60*1e3;class kg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Sg(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ve(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mS&&this.cachedEventUids.clear(),this.cachedEventUids.has(gf(e))}saveEventToCache(e){this.cachedEventUids.add(gf(e)),this.lastProcessedEventTime=Date.now()}}function gf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(t,e={}){return pe(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yS=/^https?/;async function _S(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Tg(t);for(const n of e)try{if(wS(n))return}catch{}_e(t,"unauthorized-domain")}function wS(t){const e=$i(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!yS.test(n))return!1;if(vS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=new Xi(3e4,6e4);function vf(){const t=se().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IS(t){return new Promise((e,n)=>{var r,i,o;function s(){vf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vf(),n(ve(t,"network-request-failed"))},timeout:ES.get()})}if(!((i=(r=se().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=se().gapi)===null||o===void 0)&&o.load)s();else{const a=vg("iframefcb");return se()[a]=()=>{gapi.load?s():n(ve(t,"network-request-failed"))},gg(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw $o=null,e})}let $o=null;function kS(t){return $o=$o||IS(t),$o}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=new Xi(5e3,15e3),TS="__/auth/iframe",CS="emulator/auth/iframe",RS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NS(t){const e=t.config;k(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?uc(e,CS):`https://${t.config.authDomain}/${TS}`,r={apiKey:e.apiKey,appName:t.name,v:Ur},i=PS.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Fr(r).slice(1)}`}async function xS(t){const e=await kS(t),n=se().gapi;return k(n,t,"internal-error"),e.open({where:document.body,url:NS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RS,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=ve(t,"network-request-failed"),a=se().setTimeout(()=>{o(s)},SS.get());function l(){se().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AS=500,LS=600,DS="_blank",MS="http://localhost";class yf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bS(t,e,n,r=AS,i=LS){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},OS),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ie().toLowerCase();n&&(a=Hm(u)?DS:n),Wm(u)&&(e=e||MS,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(fI(u)&&a!=="_self")return FS(e||"",a),new yf(null);const f=window.open(e||"",a,c);k(f,t,"popup-blocked");try{f.focus()}catch{}return new yf(f)}function FS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US="__/auth/handler",zS="emulator/auth/handler";function Vl(t,e,n,r,i,o){k(t.config.authDomain,t,"auth-domain-config-required"),k(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ur,eventId:i};if(e instanceof jt){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",Tw(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(e instanceof Br){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${$S(t)}?${Fr(a).slice(1)}`}function $S({config:t}){return t.emulator?uc(t,zS):`https://${t.authDomain}/${US}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba="webStorageSupport";class jS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Wn,this._completeRedirectFn=Xs,this._overrideRedirectResult=wc}async _openPopup(e,n,r,i){var o;at((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Vl(e,n,r,$i(),i);return bS(e,s,eo())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Ek(Vl(e,n,r,$i(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(at(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xS(e),r=new kg(e);return n.register("authEvent",i=>(k(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ba,{type:ba},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[ba];s!==void 0&&n(!!s),_e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_S(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qm()||cc()||$r()}}const BS=jS;class VS{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return mt("unexpected MultiFactorSessionType")}}}class Ec extends VS{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ec(e)}_finalizeEnroll(e,n,r){return hk(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return Ok(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Cg{constructor(){}static assertion(e){return Ec._fromCredential(e)}}Cg.FACTOR_ID="phone";var _f="@firebase/auth",wf="0.20.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function KS(t){Vn(new dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{k(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),k(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ym(t)},c=new gI(a,l,u);return qE(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Vn(new dn("auth-internal",e=>{const n=he(e.getProvider("auth").getImmediate());return(r=>new WS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(_f,wf,HS(t)),an(_f,wf,"esm2017")}KS("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS=2e3;async function qS(t,e,n){var r;const{BuildInfo:i}=Hn();at(e.sessionId,"AuthEvent did not contain a session ID");const o=await ZS(e.sessionId),s={};return $r()?s.ibi=i.packageName:Zi()?s.apn=i.packageName:_e(t,"operation-not-supported-in-this-environment"),i.displayName&&(s.appDisplayName=i.displayName),s.sessionId=o,Vl(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,s)}async function QS(t){const{BuildInfo:e}=Hn(),n={};$r()?n.iosBundleId=e.packageName:Zi()?n.androidPackageName=e.packageName:_e(t,"operation-not-supported-in-this-environment"),await Tg(t,n)}function YS(t){const{cordova:e}=Hn();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,dI()?"_blank":"_system","location=yes"),n(i)})})}async function JS(t,e,n){const{cordova:r}=Hn();let i=()=>{};try{await new Promise((o,s)=>{let a=null;function l(){var f;o();const d=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{s(ve(t,"redirect-cancelled-by-user"))},GS))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Zi()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function XS(t){var e,n,r,i,o,s,a,l,u,c;const f=Hn();k(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),k(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),k(typeof((o=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k(typeof((l=(a=(s=f==null?void 0:f.cordova)===null||s===void 0?void 0:s.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k(typeof((c=(u=f==null?void 0:f.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ZS(t){const e=e1(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function e1(t){if(at(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1=20;class n1 extends kg{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function r1(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:s1(),postBody:null,tenantId:t.tenantId,error:ve(t,"no-auth-event")}}function i1(t,e){return Wl()._set(Hl(t),e)}async function Ef(t){const e=await Wl()._get(Hl(t));return e&&await Wl()._remove(Hl(t)),e}function o1(t,e){var n,r;const i=l1(e);if(i.includes("/__/auth/callback")){const o=jo(i),s=o.firebaseError?a1(decodeURIComponent(o.firebaseError)):null,a=(r=(n=s==null?void 0:s.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?ve(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function s1(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<t1;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Wl(){return Fe(mc)}function Hl(t){return Dn("authEvent",t.config.apiKey,t.name)}function a1(t){try{return JSON.parse(t)}catch{return null}}function l1(t){const e=jo(t),n=e.link?decodeURIComponent(e.link):void 0,r=jo(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return jo(i).link||i||r||n||t}function jo(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return fr(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=500;class c1{constructor(){this._redirectPersistence=Wn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Xs,this._overrideRedirectResult=wc}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new n1(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){_e(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){XS(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),aS(),await this._originValidation(e);const s=r1(e,r,i);await i1(e,s);const a=await qS(e,s,n),l=await YS(a);return JS(e,o,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QS(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:o}=Hn(),s=setTimeout(async()=>{await Ef(e),n.onEvent(If())},u1),a=async c=>{clearTimeout(s);const f=await Ef(e);let d=null;f&&(c==null?void 0:c.url)&&(d=o1(f,c.url)),n.onEvent(d||If())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${o.packageName.toLowerCase()}://`;Hn().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(f){console.error(f)}}}}const d1=c1;function If(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ve("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(t,e){he(t)._logFramework(e)}var h1="@firebase/auth-compat",p1="0.2.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=1e3;function Es(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function g1(){return Es()==="http:"||Es()==="https:"}function Rg(t=ie()){return!!((Es()==="file:"||Es()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function v1(){return tc()||wm()}function y1(){return Im()&&(document==null?void 0:document.documentMode)===11}function _1(t=ie()){return/Edge\/\d+/.test(t)}function w1(t=ie()){return y1()||_1(t)}function Pg(){try{const t=self.localStorage,e=eo();if(t)return t.setItem(e,"1"),t.removeItem(e),w1()?ms():!0}catch{return Ic()&&ms()}return!1}function Ic(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Fa(){return(g1()||Em()||Rg())&&!v1()&&Pg()&&!Ic()}function Ng(){return Rg()&&typeof document!="undefined"}async function E1(){return Ng()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},m1);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function I1(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be={LOCAL:"local",NONE:"none",SESSION:"session"},ei=k,xg="persistence";function k1(t,e){if(ei(Object.values(be).includes(e),t,"invalid-persistence-type"),tc()){ei(e!==be.SESSION,t,"unsupported-persistence-type");return}if(wm()){ei(e===be.NONE,t,"unsupported-persistence-type");return}if(Ic()){ei(e===be.NONE||e===be.LOCAL&&ms(),t,"unsupported-persistence-type");return}ei(e===be.NONE||Pg(),t,"unsupported-persistence-type")}async function Kl(t){await t._initializationPromise;const e=Og(),n=Dn(xg,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function S1(t,e){const n=Og();if(!n)return[];const r=Dn(xg,t,e);switch(n.getItem(r)){case be.NONE:return[Nr];case be.LOCAL:return[Wi,Wn];case be.SESSION:return[Wn];default:return[]}}function Og(){var t;try{return((t=I1())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=k;class Jt{constructor(){this.browserResolver=Fe(BS),this.cordovaResolver=Fe(d1),this.underlyingResolver=null,this._redirectPersistence=Wn,this._completeRedirectFn=Xs,this._overrideRedirectResult=wc}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Ng()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return T1(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await E1();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t){return t.unwrap()}function C1(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R1(t){return Lg(t)}function P1(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new N1(t,dk(t,e))}else if(r){const i=Lg(e),o=e;i&&(o.credential=i,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function Lg(t){const{_tokenResponse:e}=t instanceof qe?t.customData:t;if(!e)return null;if(!(t instanceof qe)&&"temporaryProof"in e&&"phoneNumber"in e)return it.credentialFromResult(t);const n=e.providerId;if(!n||n===Zr.PASSWORD)return null;let r;switch(n){case Zr.GOOGLE:r=ft;break;case Zr.FACEBOOK:r=dt;break;case Zr.GITHUB:r=ht;break;case Zr.TWITTER:r=pt;break;default:const{oauthIdToken:i,oauthAccessToken:o,oauthTokenSecret:s,pendingToken:a,nonce:l}=e;return!o&&!s&&!i&&!a?null:a?n.startsWith("saml.")?xr._create(n,a):_t._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:o}):new wr(n).credential({idToken:i,accessToken:o,rawNonce:l})}return t instanceof qe?r.credentialFromError(t):r.credentialFromResult(t)}function Pe(t,e){return e.catch(n=>{throw n instanceof qe&&P1(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:R1(n),additionalUserInfo:ck(n),user:Nt.getOrCreate(i)}})}async function Gl(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Pe(t,n.confirm(r))}}class N1{constructor(e,n){this.resolver=n,this.auth=C1(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Pe(Ag(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this._delegate=e,this.multiFactor=mk(e)}static getOrCreate(e){return Nt.USER_MAP.has(e)||Nt.USER_MAP.set(e,new Nt(e)),Nt.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Pe(this.auth,og(this._delegate,e))}async linkWithPhoneNumber(e,n){return Gl(this.auth,qk(this._delegate,e,n))}async linkWithPopup(e){return Pe(this.auth,rS(this._delegate,e,Jt))}async linkWithRedirect(e){return await Kl(he(this.auth)),fS(this._delegate,e,Jt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Pe(this.auth,sg(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Gl(this.auth,Qk(this._delegate,e,n))}reauthenticateWithPopup(e){return Pe(this.auth,nS(this._delegate,e,Jt))}async reauthenticateWithRedirect(e){return await Kl(he(this.auth)),cS(this._delegate,e,Jt)}sendEmailVerification(e){return ZI(this._delegate,e)}async unlink(e){return await zI(this._delegate,e),this}updateEmail(e){return rk(this._delegate,e)}updatePassword(e){return ik(this._delegate,e)}updatePhoneNumber(e){return Yk(this._delegate,e)}updateProfile(e){return nk(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return ek(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Nt.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=k;class ql{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;ti(r,"invalid-api-key",{appName:e.name}),ti(r,"invalid-api-key",{appName:e.name});const i=typeof window!="undefined"?Jt:void 0;this._delegate=n.initialize({options:{persistence:x1(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(KE),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Nt.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){vI(this._delegate,e,n)}applyActionCode(e){return WI(this._delegate,e)}checkActionCode(e){return ag(this._delegate,e)}confirmPasswordReset(e,n){return VI(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Pe(this._delegate,KI(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return XI(this._delegate,e)}isSignInWithEmailLink(e){return QI(this._delegate,e)}async getRedirectResult(){ti(Fa(),this._delegate,"operation-not-supported-in-this-environment");const e=await pS(this._delegate,Jt);return e?Pe(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){f1(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:o,complete:s}=kf(e,n,r);return this._delegate.onAuthStateChanged(i,o,s)}onIdTokenChanged(e,n,r){const{next:i,error:o,complete:s}=kf(e,n,r);return this._delegate.onIdTokenChanged(i,o,s)}sendSignInLinkToEmail(e,n){return qI(this._delegate,e,n)}sendPasswordResetEmail(e,n){return BI(this._delegate,e,n||void 0)}async setPersistence(e){k1(this._delegate,e);let n;switch(e){case be.SESSION:n=Wn;break;case be.LOCAL:n=await Fe(Wi)._isAvailable()?Wi:mc;break;case be.NONE:n=Nr;break;default:return _e("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Pe(this._delegate,UI(this._delegate))}signInWithCredential(e){return Pe(this._delegate,Ks(this._delegate,e))}signInWithCustomToken(e){return Pe(this._delegate,jI(this._delegate,e))}signInWithEmailAndPassword(e,n){return Pe(this._delegate,GI(this._delegate,e,n))}signInWithEmailLink(e,n){return Pe(this._delegate,YI(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Gl(this._delegate,Gk(this._delegate,e,n))}async signInWithPopup(e){return ti(Fa(),this._delegate,"operation-not-supported-in-this-environment"),Pe(this._delegate,tS(this._delegate,e,Jt))}async signInWithRedirect(e){return ti(Fa(),this._delegate,"operation-not-supported-in-this-environment"),await Kl(this._delegate),lS(this._delegate,e,Jt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return HI(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}ql.Persistence=be;function kf(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:s=>i(s&&Nt.getOrCreate(s)),error:e,complete:n}}function x1(t,e){const n=S1(t,e);if(typeof self!="undefined"&&!n.includes(Wi)&&n.push(Wi),typeof window!="undefined")for(const r of[mc,Wn])n.includes(r)||n.push(r);return n.includes(Nr)||n.push(Nr),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){this.providerId="phone",this._delegate=new it(Ag(Ji.auth()))}static credential(e,n){return it.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}kc.PHONE_SIGN_IN_METHOD=it.PHONE_SIGN_IN_METHOD;kc.PROVIDER_ID=it.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=k;class A1{constructor(e,n,r=Ji.app()){var i;O1((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new Hk(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="auth-compat";function D1(t){t.INTERNAL.registerComponent(new dn(L1,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new ql(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Zn.EMAIL_SIGNIN,PASSWORD_RESET:Zn.PASSWORD_RESET,RECOVER_EMAIL:Zn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Zn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Zn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Zn.VERIFY_EMAIL}},EmailAuthProvider:vn,FacebookAuthProvider:dt,GithubAuthProvider:ht,GoogleAuthProvider:ft,OAuthProvider:wr,SAMLAuthProvider:vs,PhoneAuthProvider:kc,PhoneMultiFactorGenerator:Cg,RecaptchaVerifier:A1,TwitterAuthProvider:pt,Auth:ql,AuthCredential:jr,Error:qe}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(h1,p1)}D1(Ji);var M1="firebase",b1="9.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ji.registerVersion(M1,b1,"app-compat");const F1=Ji.initializeApp({apiKey:"AIzaSyDLHtIKHZEproNLqvDGH6FzPnKTxe4jvlY",authDomain:"fir-auth-9de25.firebaseapp.com",projectId:"fir-auth-9de25",storageBucket:"fir-auth-9de25.appspot.com",messagingSenderId:"466556499102",appId:"1:466556499102:web:849e787bcb1afc1178f78f"}),ni=F1.auth(),Dg=St.createContext();function Vr(){return v.exports.useContext(Dg)}function U1({children:t}){const[e,n]=v.exports.useState(),[r,i]=v.exports.useState(!0);function o(d,g){return ni.createUserWithEmailAndPassword(d,g)}function s(d,g){return ni.signInWithEmailAndPassword(d,g)}function a(){return ni.signOut()}function l(d){return ni.sendPasswordResetEmail(d)}function u(d){return e.updateEmail(d)}function c(d){return e.updatePassword(d)}v.exports.useEffect(()=>ni.onAuthStateChanged(g=>{n(g),i(!1)}),[]);const f={currentUser:e,login:s,singup:o,logout:a,resetPassword:l,updateEmail:u,updatePassword:c};return _(Dg.Provider,{value:f,children:!r&&t})}function z1(){const t=v.exports.useRef(),e=v.exports.useRef(),n=v.exports.useRef(),{singup:r}=Vr(),[i,o]=v.exports.useState(""),[s,a]=v.exports.useState(!1),l=br();async function u(c){if(c.preventDefault(),e.current.value!==n.current.value)return o("Password do not match");try{o(""),a(!0),await r(t.current.value,e.current.value),l("/")}catch{o("Failed to create an account")}a(!1)}return _(Dr,{children:_(yt,{className:"shadow-lg p-3 mb-2 bg-white rounded",children:K(yt.Body,{children:[_("h2",{className:"text-center mb-4",children:"Sing Up"}),i&&_(Pr,{variant:"danger",children:i}),K(z,{onSubmit:u,children:[K(z.Group,{id:"email",children:[_(z.Label,{children:"Email"}),_(z.Control,{type:"email",ref:t,required:!0})]}),K(z.Group,{id:"password",children:[_(z.Label,{children:"Password"}),_(z.Control,{type:"password",ref:e,required:!0})]}),K(z.Group,{id:"password-confirm",children:[_(z.Label,{children:"Password Confirmation"}),_(z.Control,{type:"password-confirm",ref:n,required:!0})]}),_(Yi,{disabled:s,className:"w-100 mt-4 mb-4",type:"submit",children:"Sing Up"})]}),K("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",_(jn,{to:"/login",children:"Log In"})]})]})})})}function $1(){const[t,e]=v.exports.useState(""),{currentUser:n,logout:r}=Vr(),i=br();async function o(){e("");try{await r(),i("/login")}catch{e("Failed to Log Out")}}return _(Dr,{children:_(yt,{className:"shadow-lg p-3 mb-2 bg-white rounded",children:K(yt.Body,{children:[_("h2",{className:"text-center mb-4",children:"Profile"}),t&&_(Pr,{variant:"danger",children:t}),_("strong",{children:"Email:"})," ",n.email,_(jn,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"}),_("div",{className:"w-100 text-center mt-2",children:_(Yi,{variant:"link",onClick:o,children:"Log Out"})})]})})})}function j1(){const t=v.exports.useRef(),e=v.exports.useRef(),{login:n}=Vr(),[r,i]=v.exports.useState(""),[o,s]=v.exports.useState(!1),a=br();async function l(u){u.preventDefault();try{i(""),s(!0),await n(t.current.value,e.current.value),a("/")}catch{i("Failed to Login")}s(!1)}return _(Dr,{children:_(yt,{className:"shadow-lg p-3 mb-2 bg-white rounded",children:K(yt.Body,{children:[_("h2",{className:"text-center mb-4",children:"Log In"}),r&&_(Pr,{variant:"danger",children:r}),K(z,{onSubmit:l,children:[K(z.Group,{id:"email",children:[_(z.Label,{children:"Email"}),_(z.Control,{type:"email",ref:t,required:!0})]}),K(z.Group,{id:"password",children:[_(z.Label,{children:"Password"}),_(z.Control,{type:"password",ref:e,required:!0})]}),_(Yi,{disabled:o,className:"w-100 mt-4 mb-4",type:"submit",children:"Log In"})]}),_("div",{className:"w-100 text-center mt-2",children:_(jn,{to:"/forgot-password",children:"Forgot Password"})}),K("div",{className:"w-100 text-center mt-3",children:["Need an Account? ",_(jn,{to:"/signup",children:"Sing Up"})]})]})})})}function Sf(){const t=v.exports.useRef(),e=v.exports.useRef(),n=v.exports.useRef(),{currentUser:r,updateEmail:i,updatePassword:o}=Vr(),[s,a]=v.exports.useState(""),[l,u]=v.exports.useState(!1),c=br();function f(d){if(d.preventDefault(),e.current.value!==n.current.value)return a("Password do not match");const g=[];u(!0),a(""),t.current.value!==r.email&&g.push(i(t.current.value)),e.current.value&&g.push(o(e.current.value)),Promise.all(g).then(()=>{c("/")}).catch(()=>{a("Failed to update profile")}).finally(()=>{u(!1)})}return _(Dr,{children:_(yt,{className:"shadow-lg p-3 mb-2 bg-white rounded",children:K(yt.Body,{children:[_("h2",{className:"text-center mb-4",children:"Update Profile"}),s&&_(Pr,{variant:"danger",children:s}),K(z,{onSubmit:f,children:[K(z.Group,{id:"email",children:[_(z.Label,{children:"Email"}),_(z.Control,{type:"email",ref:t,required:!0,defaultValue:r.email})]}),K(z.Group,{id:"password",children:[_(z.Label,{children:"Password"}),_(z.Control,{type:"password",ref:e,placeholder:"Leave blank to keep the same"})]}),K(z.Group,{id:"password-confirm",children:[_(z.Label,{children:"Password Confirmation"}),_(z.Control,{type:"password-confirm",ref:n,placeholder:"Leave blank to keep the same"})]}),_(Yi,{disabled:l,className:"w-100 mt-4 mb-4",type:"submit",children:"Update"})]}),_("div",{className:"w-100 text-center mt-1",children:_(jn,{to:"/",children:"Cancle"})})]})})})}function Tf({children:t}){const{currentUser:e}=Vr();return e?t:_(sw,{to:"/login"})}function B1(){const t=v.exports.useRef(),{resetPassword:e}=Vr(),[n,r]=v.exports.useState(""),[i,o]=v.exports.useState(!1),[s,a]=v.exports.useState();async function l(u){u.preventDefault();try{a(""),r(""),o(!0),await e(t.current.value),a("Check your inbox for fruther instructions")}catch{r("Failed to Reset Password")}o(!1)}return _(Dr,{children:_(yt,{className:"shadow-lg p-3 mb-2 bg-white rounded",children:K(yt.Body,{children:[_("h2",{className:"text-center mb-4",children:"Password Reset"}),n&&_(Pr,{variant:"danger",children:n}),s&&_(Pr,{variant:"success",children:s}),K(z,{onSubmit:l,children:[K(z.Group,{id:"email",children:[_(z.Label,{children:"Email"}),_(z.Control,{type:"email",ref:t,required:!0})]}),_(Yi,{disabled:i,className:"w-100 mt-4 mb-4",type:"submit",children:"Reset Password"})]}),_("div",{className:"w-100 text-center mt-2",children:_(jn,{to:"/login",children:"Log In"})}),K("div",{className:"w-100 text-center mt-2",children:["Need an Account? ",_(jn,{to:"/signup",children:"Sing Up"})]})]})})})}function V1(){return _(D_,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:_("div",{className:"w-100 p-4",style:{maxWidth:"25em"},children:_(dw,{children:_(U1,{children:K(lw,{children:[_(Sn,{exact:!0,path:"/",element:_(Tf,{children:_($1,{})})}),_(Sn,{path:"/update-profile",element:_(Tf,{children:_(Sf,{})})}),_(Sn,{path:"/signup",element:_(z1,{})}),_(Sn,{path:"/login",element:_(j1,{})}),_(Sn,{path:"/forgot-password",element:_(B1,{})}),_(Sn,{path:"/update-profile",element:_(Sf,{})})]})})})})})}Ua.createRoot(document.getElementById("root")).render(_(St.StrictMode,{children:_(V1,{})}));
