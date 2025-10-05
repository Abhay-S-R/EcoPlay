(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var od={exports:{}},Ka={},ld={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function L_(){if(Im)return St;Im=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function m(H){return H===null||typeof H!="object"?null:(H=x&&H[x]||H["@@iterator"],typeof H=="function"?H:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function S(H,ce,ke){this.props=H,this.context=ce,this.refs=E,this.updater=ke||y}S.prototype.isReactComponent={},S.prototype.setState=function(H,ce){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,ce,"setState")},S.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function v(){}v.prototype=S.prototype;function P(H,ce,ke){this.props=H,this.context=ce,this.refs=E,this.updater=ke||y}var I=P.prototype=new v;I.constructor=P,w(I,S.prototype),I.isPureReactComponent=!0;var R=Array.isArray,D=Object.prototype.hasOwnProperty,U={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function z(H,ce,ke){var se,ge={},Ee=null,ye=null;if(ce!=null)for(se in ce.ref!==void 0&&(ye=ce.ref),ce.key!==void 0&&(Ee=""+ce.key),ce)D.call(ce,se)&&!k.hasOwnProperty(se)&&(ge[se]=ce[se]);var De=arguments.length-2;if(De===1)ge.children=ke;else if(1<De){for(var $e=Array(De),Ge=0;Ge<De;Ge++)$e[Ge]=arguments[Ge+2];ge.children=$e}if(H&&H.defaultProps)for(se in De=H.defaultProps,De)ge[se]===void 0&&(ge[se]=De[se]);return{$$typeof:r,type:H,key:Ee,ref:ye,props:ge,_owner:U.current}}function C(H,ce){return{$$typeof:r,type:H.type,key:ce,ref:H.ref,props:H.props,_owner:H._owner}}function T(H){return typeof H=="object"&&H!==null&&H.$$typeof===r}function F(H){var ce={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(ke){return ce[ke]})}var Y=/\/+/g;function K(H,ce){return typeof H=="object"&&H!==null&&H.key!=null?F(""+H.key):ce.toString(36)}function re(H,ce,ke,se,ge){var Ee=typeof H;(Ee==="undefined"||Ee==="boolean")&&(H=null);var ye=!1;if(H===null)ye=!0;else switch(Ee){case"string":case"number":ye=!0;break;case"object":switch(H.$$typeof){case r:case e:ye=!0}}if(ye)return ye=H,ge=ge(ye),H=se===""?"."+K(ye,0):se,R(ge)?(ke="",H!=null&&(ke=H.replace(Y,"$&/")+"/"),re(ge,ce,ke,"",function(Ge){return Ge})):ge!=null&&(T(ge)&&(ge=C(ge,ke+(!ge.key||ye&&ye.key===ge.key?"":(""+ge.key).replace(Y,"$&/")+"/")+H)),ce.push(ge)),1;if(ye=0,se=se===""?".":se+":",R(H))for(var De=0;De<H.length;De++){Ee=H[De];var $e=se+K(Ee,De);ye+=re(Ee,ce,ke,$e,ge)}else if($e=m(H),typeof $e=="function")for(H=$e.call(H),De=0;!(Ee=H.next()).done;)Ee=Ee.value,$e=se+K(Ee,De++),ye+=re(Ee,ce,ke,$e,ge);else if(Ee==="object")throw ce=String(H),Error("Objects are not valid as a React child (found: "+(ce==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":ce)+"). If you meant to render a collection of children, use an array instead.");return ye}function he(H,ce,ke){if(H==null)return H;var se=[],ge=0;return re(H,se,"","",function(Ee){return ce.call(ke,Ee,ge++)}),se}function oe(H){if(H._status===-1){var ce=H._result;ce=ce(),ce.then(function(ke){(H._status===0||H._status===-1)&&(H._status=1,H._result=ke)},function(ke){(H._status===0||H._status===-1)&&(H._status=2,H._result=ke)}),H._status===-1&&(H._status=0,H._result=ce)}if(H._status===1)return H._result.default;throw H._result}var le={current:null},G={transition:null},me={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:G,ReactCurrentOwner:U};function fe(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:he,forEach:function(H,ce,ke){he(H,function(){ce.apply(this,arguments)},ke)},count:function(H){var ce=0;return he(H,function(){ce++}),ce},toArray:function(H){return he(H,function(ce){return ce})||[]},only:function(H){if(!T(H))throw Error("React.Children.only expected to receive a single React element child.");return H}},St.Component=S,St.Fragment=t,St.Profiler=a,St.PureComponent=P,St.StrictMode=s,St.Suspense=h,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,St.act=fe,St.cloneElement=function(H,ce,ke){if(H==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+H+".");var se=w({},H.props),ge=H.key,Ee=H.ref,ye=H._owner;if(ce!=null){if(ce.ref!==void 0&&(Ee=ce.ref,ye=U.current),ce.key!==void 0&&(ge=""+ce.key),H.type&&H.type.defaultProps)var De=H.type.defaultProps;for($e in ce)D.call(ce,$e)&&!k.hasOwnProperty($e)&&(se[$e]=ce[$e]===void 0&&De!==void 0?De[$e]:ce[$e])}var $e=arguments.length-2;if($e===1)se.children=ke;else if(1<$e){De=Array($e);for(var Ge=0;Ge<$e;Ge++)De[Ge]=arguments[Ge+2];se.children=De}return{$$typeof:r,type:H.type,key:ge,ref:Ee,props:se,_owner:ye}},St.createContext=function(H){return H={$$typeof:u,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},H.Provider={$$typeof:l,_context:H},H.Consumer=H},St.createElement=z,St.createFactory=function(H){var ce=z.bind(null,H);return ce.type=H,ce},St.createRef=function(){return{current:null}},St.forwardRef=function(H){return{$$typeof:d,render:H}},St.isValidElement=T,St.lazy=function(H){return{$$typeof:_,_payload:{_status:-1,_result:H},_init:oe}},St.memo=function(H,ce){return{$$typeof:p,type:H,compare:ce===void 0?null:ce}},St.startTransition=function(H){var ce=G.transition;G.transition={};try{H()}finally{G.transition=ce}},St.unstable_act=fe,St.useCallback=function(H,ce){return le.current.useCallback(H,ce)},St.useContext=function(H){return le.current.useContext(H)},St.useDebugValue=function(){},St.useDeferredValue=function(H){return le.current.useDeferredValue(H)},St.useEffect=function(H,ce){return le.current.useEffect(H,ce)},St.useId=function(){return le.current.useId()},St.useImperativeHandle=function(H,ce,ke){return le.current.useImperativeHandle(H,ce,ke)},St.useInsertionEffect=function(H,ce){return le.current.useInsertionEffect(H,ce)},St.useLayoutEffect=function(H,ce){return le.current.useLayoutEffect(H,ce)},St.useMemo=function(H,ce){return le.current.useMemo(H,ce)},St.useReducer=function(H,ce,ke){return le.current.useReducer(H,ce,ke)},St.useRef=function(H){return le.current.useRef(H)},St.useState=function(H){return le.current.useState(H)},St.useSyncExternalStore=function(H,ce,ke){return le.current.useSyncExternalStore(H,ce,ke)},St.useTransition=function(){return le.current.useTransition()},St.version="18.3.1",St}var Um;function Bh(){return Um||(Um=1,ld.exports=L_()),ld.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function I_(){if(km)return Ka;km=1;var r=Bh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,p){var _,x={},m=null,y=null;p!==void 0&&(m=""+p),h.key!==void 0&&(m=""+h.key),h.ref!==void 0&&(y=h.ref);for(_ in h)s.call(h,_)&&!l.hasOwnProperty(_)&&(x[_]=h[_]);if(d&&d.defaultProps)for(_ in h=d.defaultProps,h)x[_]===void 0&&(x[_]=h[_]);return{$$typeof:e,type:d,key:m,ref:y,props:x,_owner:a.current}}return Ka.Fragment=t,Ka.jsx=u,Ka.jsxs=u,Ka}var Fm;function U_(){return Fm||(Fm=1,od.exports=I_()),od.exports}var M=U_(),ee=Bh(),Dl={},cd={exports:{}},zn={},ud={exports:{}},dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function k_(){return Om||(Om=1,function(r){function e(G,me){var fe=G.length;G.push(me);e:for(;0<fe;){var H=fe-1>>>1,ce=G[H];if(0<a(ce,me))G[H]=me,G[fe]=ce,fe=H;else break e}}function t(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var me=G[0],fe=G.pop();if(fe!==me){G[0]=fe;e:for(var H=0,ce=G.length,ke=ce>>>1;H<ke;){var se=2*(H+1)-1,ge=G[se],Ee=se+1,ye=G[Ee];if(0>a(ge,fe))Ee<ce&&0>a(ye,ge)?(G[H]=ye,G[Ee]=fe,H=Ee):(G[H]=ge,G[se]=fe,H=se);else if(Ee<ce&&0>a(ye,fe))G[H]=ye,G[Ee]=fe,H=Ee;else break e}}return me}function a(G,me){var fe=G.sortIndex-me.sortIndex;return fe!==0?fe:G.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var h=[],p=[],_=1,x=null,m=3,y=!1,w=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(G){for(var me=t(p);me!==null;){if(me.callback===null)s(p);else if(me.startTime<=G)s(p),me.sortIndex=me.expirationTime,e(h,me);else break;me=t(p)}}function R(G){if(E=!1,I(G),!w)if(t(h)!==null)w=!0,oe(D);else{var me=t(p);me!==null&&le(R,me.startTime-G)}}function D(G,me){w=!1,E&&(E=!1,v(z),z=-1),y=!0;var fe=m;try{for(I(me),x=t(h);x!==null&&(!(x.expirationTime>me)||G&&!F());){var H=x.callback;if(typeof H=="function"){x.callback=null,m=x.priorityLevel;var ce=H(x.expirationTime<=me);me=r.unstable_now(),typeof ce=="function"?x.callback=ce:x===t(h)&&s(h),I(me)}else s(h);x=t(h)}if(x!==null)var ke=!0;else{var se=t(p);se!==null&&le(R,se.startTime-me),ke=!1}return ke}finally{x=null,m=fe,y=!1}}var U=!1,k=null,z=-1,C=5,T=-1;function F(){return!(r.unstable_now()-T<C)}function Y(){if(k!==null){var G=r.unstable_now();T=G;var me=!0;try{me=k(!0,G)}finally{me?K():(U=!1,k=null)}}else U=!1}var K;if(typeof P=="function")K=function(){P(Y)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,he=re.port2;re.port1.onmessage=Y,K=function(){he.postMessage(null)}}else K=function(){S(Y,0)};function oe(G){k=G,U||(U=!0,K())}function le(G,me){z=S(function(){G(r.unstable_now())},me)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_continueExecution=function(){w||y||(w=!0,oe(D))},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(G){switch(m){case 1:case 2:case 3:var me=3;break;default:me=m}var fe=m;m=me;try{return G()}finally{m=fe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(G,me){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var fe=m;m=G;try{return me()}finally{m=fe}},r.unstable_scheduleCallback=function(G,me,fe){var H=r.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?H+fe:H):fe=H,G){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=fe+ce,G={id:_++,callback:me,priorityLevel:G,startTime:fe,expirationTime:ce,sortIndex:-1},fe>H?(G.sortIndex=fe,e(p,G),t(h)===null&&G===t(p)&&(E?(v(z),z=-1):E=!0,le(R,fe-H))):(G.sortIndex=ce,e(h,G),w||y||(w=!0,oe(D))),G},r.unstable_shouldYield=F,r.unstable_wrapCallback=function(G){var me=m;return function(){var fe=m;m=me;try{return G.apply(this,arguments)}finally{m=fe}}}}(dd)),dd}var Bm;function F_(){return Bm||(Bm=1,ud.exports=k_()),ud.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function O_(){if(zm)return zn;zm=1;var r=Bh(),e=F_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function m(n){return h.call(x,n)?!0:h.call(_,n)?!1:p.test(n)?x[n]=!0:(_[n]=!0,!1)}function y(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,o,c){if(i===null||typeof i>"u"||y(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,o,c,f,g,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=A}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,P);S[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,P);S[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,P);S[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function I(n,i,o,c){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,f,c)&&(o=null),c||f===null?m(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var R=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),U=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),F=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),G=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var fe=Object.assign,H;function ce(n){if(H===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);H=i&&i[1]||""}return`
`+H+n}var ke=!1;function se(n,i){if(!n||ke)return"";ke=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var c=ue}Reflect.construct(n,[],i)}else{try{i.call()}catch(ue){c=ue}n.call(i.prototype)}else{try{throw Error()}catch(ue){c=ue}n()}}catch(ue){if(ue&&c&&typeof ue.stack=="string"){for(var f=ue.stack.split(`
`),g=c.stack.split(`
`),A=f.length-1,B=g.length-1;1<=A&&0<=B&&f[A]!==g[B];)B--;for(;1<=A&&0<=B;A--,B--)if(f[A]!==g[B]){if(A!==1||B!==1)do if(A--,B--,0>B||f[A]!==g[B]){var j=`
`+f[A].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=A&&0<=B);break}}}finally{ke=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ce(n):""}function ge(n){switch(n.tag){case 5:return ce(n.type);case 16:return ce("Lazy");case 13:return ce("Suspense");case 19:return ce("SuspenseList");case 0:case 2:case 15:return n=se(n.type,!1),n;case 11:return n=se(n.type.render,!1),n;case 1:return n=se(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case U:return"Portal";case C:return"Profiler";case z:return"StrictMode";case K:return"Suspense";case re:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case T:return(n._context.displayName||"Context")+".Provider";case Y:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return i=n.displayName||null,i!==null?i:Ee(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return Ee(n(i))}catch{}}return null}function ye(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function De(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ge(n){var i=$e(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,g=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(A){c=""+A,g.call(this,A)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Nt(n){n._valueTracker||(n._valueTracker=Ge(n))}function At(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function dt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function V(n,i){var o=i.checked;return fe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Jt(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=De(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&I(n,"checked",i,!1)}function ht(n,i){pt(n,i);var o=De(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?wt(n,i.type,o):i.hasOwnProperty("defaultValue")&&wt(n,i.type,De(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ke(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function wt(n,i,o){(i!=="number"||dt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ve=Array.isArray;function N(n,i,o,c){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+De(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function b(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return fe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function O(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ve(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:De(o)}}function W(n,i){var o=De(i.value),c=De(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function ie(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function q(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Re(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?q(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ne,Je=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,f)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ne=Ne||document.createElement("div"),Ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ne.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function et(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},je=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){je.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function it(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function _e(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=it(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,f):n[o]=f}}var Te=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oe(n,i){if(i){if(Te[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function be(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rt=null;function X(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Le=null,pe=null,ve=null;function Be(n){if(n=Ua(n)){if(typeof Le!="function")throw Error(t(280));var i=n.stateNode;i&&(i=$o(i),Le(n.stateNode,n.type,i))}}function Fe(n){pe?ve?ve.push(n):ve=[n]:pe=n}function mt(){if(pe){var n=pe,i=ve;if(ve=pe=null,Be(n),i)for(n=0;n<i.length;n++)Be(i[n])}}function zt(n,i){return n(i)}function sn(){}var Ct=!1;function In(n,i,o){if(Ct)return n(i,o);Ct=!0;try{return zt(n,i,o)}finally{Ct=!1,(pe!==null||ve!==null)&&(sn(),mt())}}function Rn(n,i){var o=n.stateNode;if(o===null)return null;var c=$o(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ys=!1;if(d)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){ys=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{ys=!1}function Fi(n,i,o,c,f,g,A,B,j){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(o,ue)}catch(we){this.onError(we)}}var Oi=!1,Hr=null,Gr=!1,or=null,To={onError:function(n){Oi=!0,Hr=n}};function Ss(n,i,o,c,f,g,A,B,j){Oi=!1,Hr=null,Fi.apply(To,arguments)}function bo(n,i,o,c,f,g,A,B,j){if(Ss.apply(this,arguments),Oi){if(Oi){var ue=Hr;Oi=!1,Hr=null}else throw Error(t(198));Gr||(Gr=!0,or=ue)}}function Mi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Ao(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Co(n){if(Mi(n)!==n)throw Error(t(188))}function Pc(n){var i=n.alternate;if(!i){if(i=Mi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var f=o.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===o)return Co(f),n;if(g===c)return Co(f),i;g=g.sibling}throw Error(t(188))}if(o.return!==c.return)o=f,c=g;else{for(var A=!1,B=f.child;B;){if(B===o){A=!0,o=f,c=g;break}if(B===c){A=!0,c=f,o=g;break}B=B.sibling}if(!A){for(B=g.child;B;){if(B===o){A=!0,o=g,c=f;break}if(B===c){A=!0,c=g,o=f;break}B=B.sibling}if(!A)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function Ro(n){return n=Pc(n),n!==null?Po(n):null}function Po(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Po(n);if(i!==null)return i;n=n.sibling}return null}var No=e.unstable_scheduleCallback,L=e.unstable_cancelCallback,Z=e.unstable_shouldYield,de=e.unstable_requestPaint,ne=e.unstable_now,Q=e.unstable_getCurrentPriorityLevel,Ce=e.unstable_ImmediatePriority,Ie=e.unstable_UserBlockingPriority,ze=e.unstable_NormalPriority,Xe=e.unstable_LowPriority,ct=e.unstable_IdlePriority,ot=null,qe=null;function Tt(n){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(ot,n,void 0,(n.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:bt,qt=Math.log,Vt=Math.LN2;function bt(n){return n>>>=0,n===0?32:31-(qt(n)/Vt|0)|0}var tt=64,Kt=4194304;function Et(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Sn(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,f=n.suspendedLanes,g=n.pingedLanes,A=o&268435455;if(A!==0){var B=A&~f;B!==0?c=Et(B):(g&=A,g!==0&&(c=Et(g)))}else A=o&~f,A!==0?c=Et(A):g!==0&&(c=Et(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,g=i&-i,f>=g||f===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-gt(i),f=1<<o,c|=n[o],i&=~f;return c}function lr(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pn(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes;0<g;){var A=31-gt(g),B=1<<A,j=f[A];j===-1?((B&o)===0||(B&c)!==0)&&(f[A]=lr(B,i)):j<=i&&(n.expiredLanes|=B),g&=~B}}function Bi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function kt(){var n=tt;return tt<<=1,(tt&4194240)===0&&(tt=64),n}function Mn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function dn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-gt(i),n[i]=o}function vn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-gt(o),g=1<<f;i[f]=0,c[f]=-1,n[f]=-1,o&=~g}}function hn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-gt(o),f=1<<c;f&i|n[c]&i&&(n[c]|=i),o&=~f}}var Rt=0;function wi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ff,Nc,pf,mf,gf,Dc=!1,Do=[],cr=null,ur=null,dr=null,xa=new Map,ya=new Map,hr=[],tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vf(n,i){switch(n){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":xa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(i.pointerId)}}function Sa(n,i,o,c,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},i!==null&&(i=Ua(i),i!==null&&Nc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function nv(n,i,o,c,f){switch(i){case"focusin":return cr=Sa(cr,n,i,o,c,f),!0;case"dragenter":return ur=Sa(ur,n,i,o,c,f),!0;case"mouseover":return dr=Sa(dr,n,i,o,c,f),!0;case"pointerover":var g=f.pointerId;return xa.set(g,Sa(xa.get(g)||null,n,i,o,c,f)),!0;case"gotpointercapture":return g=f.pointerId,ya.set(g,Sa(ya.get(g)||null,n,i,o,c,f)),!0}return!1}function _f(n){var i=Vr(n.target);if(i!==null){var o=Mi(i);if(o!==null){if(i=o.tag,i===13){if(i=Ao(o),i!==null){n.blockedOn=i,gf(n.priority,function(){pf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Lo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Ic(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);rt=c,o.target.dispatchEvent(c),rt=null}else return i=Ua(o),i!==null&&Nc(i),n.blockedOn=o,!1;i.shift()}return!0}function xf(n,i,o){Lo(n)&&o.delete(i)}function iv(){Dc=!1,cr!==null&&Lo(cr)&&(cr=null),ur!==null&&Lo(ur)&&(ur=null),dr!==null&&Lo(dr)&&(dr=null),xa.forEach(xf),ya.forEach(xf)}function Ma(n,i){n.blockedOn===i&&(n.blockedOn=null,Dc||(Dc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,iv)))}function wa(n){function i(f){return Ma(f,n)}if(0<Do.length){Ma(Do[0],n);for(var o=1;o<Do.length;o++){var c=Do[o];c.blockedOn===n&&(c.blockedOn=null)}}for(cr!==null&&Ma(cr,n),ur!==null&&Ma(ur,n),dr!==null&&Ma(dr,n),xa.forEach(i),ya.forEach(i),o=0;o<hr.length;o++)c=hr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<hr.length&&(o=hr[0],o.blockedOn===null);)_f(o),o.blockedOn===null&&hr.shift()}var Ms=R.ReactCurrentBatchConfig,Io=!0;function rv(n,i,o,c){var f=Rt,g=Ms.transition;Ms.transition=null;try{Rt=1,Lc(n,i,o,c)}finally{Rt=f,Ms.transition=g}}function sv(n,i,o,c){var f=Rt,g=Ms.transition;Ms.transition=null;try{Rt=4,Lc(n,i,o,c)}finally{Rt=f,Ms.transition=g}}function Lc(n,i,o,c){if(Io){var f=Ic(n,i,o,c);if(f===null)Zc(n,i,c,Uo,o),vf(n,c);else if(nv(f,n,i,o,c))c.stopPropagation();else if(vf(n,c),i&4&&-1<tv.indexOf(n)){for(;f!==null;){var g=Ua(f);if(g!==null&&ff(g),g=Ic(n,i,o,c),g===null&&Zc(n,i,c,Uo,o),g===f)break;f=g}f!==null&&c.stopPropagation()}else Zc(n,i,c,null,o)}}var Uo=null;function Ic(n,i,o,c){if(Uo=null,n=X(c),n=Vr(n),n!==null)if(i=Mi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Ao(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Uo=n,null}function yf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q()){case Ce:return 1;case Ie:return 4;case ze:case Xe:return 16;case ct:return 536870912;default:return 16}default:return 16}}var fr=null,Uc=null,ko=null;function Sf(){if(ko)return ko;var n,i=Uc,o=i.length,c,f="value"in fr?fr.value:fr.textContent,g=f.length;for(n=0;n<o&&i[n]===f[n];n++);var A=o-n;for(c=1;c<=A&&i[o-c]===f[g-c];c++);return ko=f.slice(n,1<c?1-c:void 0)}function Fo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Oo(){return!0}function Mf(){return!1}function $n(n){function i(o,c,f,g,A){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=A,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(o=n[B],this[B]=o?o(g):g[B]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Oo:Mf,this.isPropagationStopped=Mf,this}return fe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),i}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=$n(ws),Ea=fe({},ws,{view:0,detail:0}),av=$n(Ea),Fc,Oc,Ta,Bo=fe({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ta&&(Ta&&n.type==="mousemove"?(Fc=n.screenX-Ta.screenX,Oc=n.screenY-Ta.screenY):Oc=Fc=0,Ta=n),Fc)},movementY:function(n){return"movementY"in n?n.movementY:Oc}}),wf=$n(Bo),ov=fe({},Bo,{dataTransfer:0}),lv=$n(ov),cv=fe({},Ea,{relatedTarget:0}),Bc=$n(cv),uv=fe({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),dv=$n(uv),hv=fe({},ws,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),fv=$n(hv),pv=fe({},ws,{data:0}),Ef=$n(pv),mv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _v(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=vv[n])?!!i[n]:!1}function zc(){return _v}var xv=fe({},Ea,{key:function(n){if(n.key){var i=mv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Fo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?gv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zc,charCode:function(n){return n.type==="keypress"?Fo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Fo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),yv=$n(xv),Sv=fe({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tf=$n(Sv),Mv=fe({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zc}),wv=$n(Mv),Ev=fe({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tv=$n(Ev),bv=fe({},Bo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Av=$n(bv),Cv=[9,13,27,32],Hc=d&&"CompositionEvent"in window,ba=null;d&&"documentMode"in document&&(ba=document.documentMode);var Rv=d&&"TextEvent"in window&&!ba,bf=d&&(!Hc||ba&&8<ba&&11>=ba),Af=" ",Cf=!1;function Rf(n,i){switch(n){case"keyup":return Cv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Es=!1;function Pv(n,i){switch(n){case"compositionend":return Pf(i);case"keypress":return i.which!==32?null:(Cf=!0,Af);case"textInput":return n=i.data,n===Af&&Cf?null:n;default:return null}}function Nv(n,i){if(Es)return n==="compositionend"||!Hc&&Rf(n,i)?(n=Sf(),ko=Uc=fr=null,Es=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return bf&&i.locale!=="ko"?null:i.data;default:return null}}var Dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Dv[n.type]:i==="textarea"}function Df(n,i,o,c){Fe(c),i=jo(i,"onChange"),0<i.length&&(o=new kc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var Aa=null,Ca=null;function Lv(n){Kf(n,0)}function zo(n){var i=Rs(n);if(At(i))return n}function Iv(n,i){if(n==="change")return i}var Lf=!1;if(d){var Gc;if(d){var Vc="oninput"in document;if(!Vc){var If=document.createElement("div");If.setAttribute("oninput","return;"),Vc=typeof If.oninput=="function"}Gc=Vc}else Gc=!1;Lf=Gc&&(!document.documentMode||9<document.documentMode)}function Uf(){Aa&&(Aa.detachEvent("onpropertychange",kf),Ca=Aa=null)}function kf(n){if(n.propertyName==="value"&&zo(Ca)){var i=[];Df(i,Ca,n,X(n)),In(Lv,i)}}function Uv(n,i,o){n==="focusin"?(Uf(),Aa=i,Ca=o,Aa.attachEvent("onpropertychange",kf)):n==="focusout"&&Uf()}function kv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return zo(Ca)}function Fv(n,i){if(n==="click")return zo(i)}function Ov(n,i){if(n==="input"||n==="change")return zo(i)}function Bv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ui=typeof Object.is=="function"?Object.is:Bv;function Ra(n,i){if(ui(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!h.call(i,f)||!ui(n[f],i[f]))return!1}return!0}function Ff(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Of(n,i){var o=Ff(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ff(o)}}function Bf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Bf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function zf(){for(var n=window,i=dt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=dt(n.document)}return i}function jc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function zv(n){var i=zf(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Bf(o.ownerDocument.documentElement,o)){if(c!==null&&jc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!n.extend&&g>c&&(f=c,c=g,g=f),f=Of(o,g);var A=Of(o,c);f&&A&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Hv=d&&"documentMode"in document&&11>=document.documentMode,Ts=null,Wc=null,Pa=null,Xc=!1;function Hf(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Xc||Ts==null||Ts!==dt(c)||(c=Ts,"selectionStart"in c&&jc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Pa&&Ra(Pa,c)||(Pa=c,c=jo(Wc,"onSelect"),0<c.length&&(i=new kc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=Ts)))}function Ho(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var bs={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},$c={},Gf={};d&&(Gf=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Go(n){if($c[n])return $c[n];if(!bs[n])return n;var i=bs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Gf)return $c[n]=i[o];return n}var Vf=Go("animationend"),jf=Go("animationiteration"),Wf=Go("animationstart"),Xf=Go("transitionend"),$f=new Map,Yf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(n,i){$f.set(n,i),l(i,[n])}for(var Yc=0;Yc<Yf.length;Yc++){var qc=Yf[Yc],Gv=qc.toLowerCase(),Vv=qc[0].toUpperCase()+qc.slice(1);pr(Gv,"on"+Vv)}pr(Vf,"onAnimationEnd"),pr(jf,"onAnimationIteration"),pr(Wf,"onAnimationStart"),pr("dblclick","onDoubleClick"),pr("focusin","onFocus"),pr("focusout","onBlur"),pr(Xf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function qf(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,bo(c,i,void 0,n),n.currentTarget=null}function Kf(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var A=c.length-1;0<=A;A--){var B=c[A],j=B.instance,ue=B.currentTarget;if(B=B.listener,j!==g&&f.isPropagationStopped())break e;qf(f,B,ue),g=j}else for(A=0;A<c.length;A++){if(B=c[A],j=B.instance,ue=B.currentTarget,B=B.listener,j!==g&&f.isPropagationStopped())break e;qf(f,B,ue),g=j}}}if(Gr)throw n=or,Gr=!1,or=null,n}function Ht(n,i){var o=i[iu];o===void 0&&(o=i[iu]=new Set);var c=n+"__bubble";o.has(c)||(Zf(i,n,2,!1),o.add(c))}function Kc(n,i,o){var c=0;i&&(c|=4),Zf(o,n,c,i)}var Vo="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[Vo]){n[Vo]=!0,s.forEach(function(o){o!=="selectionchange"&&(jv.has(o)||Kc(o,!1,n),Kc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Vo]||(i[Vo]=!0,Kc("selectionchange",!1,i))}}function Zf(n,i,o,c){switch(yf(i)){case 1:var f=rv;break;case 4:f=sv;break;default:f=Lc}o=f.bind(null,i,o,n),f=void 0,!ys||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function Zc(n,i,o,c,f){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var B=c.stateNode.containerInfo;if(B===f||B.nodeType===8&&B.parentNode===f)break;if(A===4)for(A=c.return;A!==null;){var j=A.tag;if((j===3||j===4)&&(j=A.stateNode.containerInfo,j===f||j.nodeType===8&&j.parentNode===f))return;A=A.return}for(;B!==null;){if(A=Vr(B),A===null)return;if(j=A.tag,j===5||j===6){c=g=A;continue e}B=B.parentNode}}c=c.return}In(function(){var ue=g,we=X(o),Ae=[];e:{var Se=$f.get(n);if(Se!==void 0){var He=kc,Ye=n;switch(n){case"keypress":if(Fo(o)===0)break e;case"keydown":case"keyup":He=yv;break;case"focusin":Ye="focus",He=Bc;break;case"focusout":Ye="blur",He=Bc;break;case"beforeblur":case"afterblur":He=Bc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=wv;break;case Vf:case jf:case Wf:He=dv;break;case Xf:He=Tv;break;case"scroll":He=av;break;case"wheel":He=Av;break;case"copy":case"cut":case"paste":He=fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=Tf}var Ze=(i&4)!==0,en=!Ze&&n==="scroll",te=Ze?Se!==null?Se+"Capture":null:Se;Ze=[];for(var $=ue,ae;$!==null;){ae=$;var Pe=ae.stateNode;if(ae.tag===5&&Pe!==null&&(ae=Pe,te!==null&&(Pe=Rn($,te),Pe!=null&&Ze.push(La($,Pe,ae)))),en)break;$=$.return}0<Ze.length&&(Se=new He(Se,Ye,null,o,we),Ae.push({event:Se,listeners:Ze}))}}if((i&7)===0){e:{if(Se=n==="mouseover"||n==="pointerover",He=n==="mouseout"||n==="pointerout",Se&&o!==rt&&(Ye=o.relatedTarget||o.fromElement)&&(Vr(Ye)||Ye[zi]))break e;if((He||Se)&&(Se=we.window===we?we:(Se=we.ownerDocument)?Se.defaultView||Se.parentWindow:window,He?(Ye=o.relatedTarget||o.toElement,He=ue,Ye=Ye?Vr(Ye):null,Ye!==null&&(en=Mi(Ye),Ye!==en||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(He=null,Ye=ue),He!==Ye)){if(Ze=wf,Pe="onMouseLeave",te="onMouseEnter",$="mouse",(n==="pointerout"||n==="pointerover")&&(Ze=Tf,Pe="onPointerLeave",te="onPointerEnter",$="pointer"),en=He==null?Se:Rs(He),ae=Ye==null?Se:Rs(Ye),Se=new Ze(Pe,$+"leave",He,o,we),Se.target=en,Se.relatedTarget=ae,Pe=null,Vr(we)===ue&&(Ze=new Ze(te,$+"enter",Ye,o,we),Ze.target=ae,Ze.relatedTarget=en,Pe=Ze),en=Pe,He&&Ye)t:{for(Ze=He,te=Ye,$=0,ae=Ze;ae;ae=As(ae))$++;for(ae=0,Pe=te;Pe;Pe=As(Pe))ae++;for(;0<$-ae;)Ze=As(Ze),$--;for(;0<ae-$;)te=As(te),ae--;for(;$--;){if(Ze===te||te!==null&&Ze===te.alternate)break t;Ze=As(Ze),te=As(te)}Ze=null}else Ze=null;He!==null&&Qf(Ae,Se,He,Ze,!1),Ye!==null&&en!==null&&Qf(Ae,en,Ye,Ze,!0)}}e:{if(Se=ue?Rs(ue):window,He=Se.nodeName&&Se.nodeName.toLowerCase(),He==="select"||He==="input"&&Se.type==="file")var Qe=Iv;else if(Nf(Se))if(Lf)Qe=Ov;else{Qe=kv;var st=Uv}else(He=Se.nodeName)&&He.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(Qe=Fv);if(Qe&&(Qe=Qe(n,ue))){Df(Ae,Qe,o,we);break e}st&&st(n,Se,ue),n==="focusout"&&(st=Se._wrapperState)&&st.controlled&&Se.type==="number"&&wt(Se,"number",Se.value)}switch(st=ue?Rs(ue):window,n){case"focusin":(Nf(st)||st.contentEditable==="true")&&(Ts=st,Wc=ue,Pa=null);break;case"focusout":Pa=Wc=Ts=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,Hf(Ae,o,we);break;case"selectionchange":if(Hv)break;case"keydown":case"keyup":Hf(Ae,o,we)}var at;if(Hc)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Es?Rf(n,o)&&(ut="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ut="onCompositionStart");ut&&(bf&&o.locale!=="ko"&&(Es||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Es&&(at=Sf()):(fr=we,Uc="value"in fr?fr.value:fr.textContent,Es=!0)),st=jo(ue,ut),0<st.length&&(ut=new Ef(ut,n,null,o,we),Ae.push({event:ut,listeners:st}),at?ut.data=at:(at=Pf(o),at!==null&&(ut.data=at)))),(at=Rv?Pv(n,o):Nv(n,o))&&(ue=jo(ue,"onBeforeInput"),0<ue.length&&(we=new Ef("onBeforeInput","beforeinput",null,o,we),Ae.push({event:we,listeners:ue}),we.data=at))}Kf(Ae,i)})}function La(n,i,o){return{instance:n,listener:i,currentTarget:o}}function jo(n,i){for(var o=i+"Capture",c=[];n!==null;){var f=n,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=Rn(n,o),g!=null&&c.unshift(La(n,g,f)),g=Rn(n,i),g!=null&&c.push(La(n,g,f))),n=n.return}return c}function As(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Qf(n,i,o,c,f){for(var g=i._reactName,A=[];o!==null&&o!==c;){var B=o,j=B.alternate,ue=B.stateNode;if(j!==null&&j===c)break;B.tag===5&&ue!==null&&(B=ue,f?(j=Rn(o,g),j!=null&&A.unshift(La(o,j,B))):f||(j=Rn(o,g),j!=null&&A.push(La(o,j,B)))),o=o.return}A.length!==0&&n.push({event:i,listeners:A})}var Wv=/\r\n?/g,Xv=/\u0000|\uFFFD/g;function Jf(n){return(typeof n=="string"?n:""+n).replace(Wv,`
`).replace(Xv,"")}function Wo(n,i,o){if(i=Jf(i),Jf(n)!==i&&o)throw Error(t(425))}function Xo(){}var Qc=null,Jc=null;function eu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,$v=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,Yv=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(n){return ep.resolve(null).then(n).catch(qv)}:tu;function qv(n){setTimeout(function(){throw n})}function nu(n,i){var o=i,c=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){n.removeChild(f),wa(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);wa(i)}function mr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function tp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Ei="__reactFiber$"+Cs,Ia="__reactProps$"+Cs,zi="__reactContainer$"+Cs,iu="__reactEvents$"+Cs,Kv="__reactListeners$"+Cs,Zv="__reactHandles$"+Cs;function Vr(n){var i=n[Ei];if(i)return i;for(var o=n.parentNode;o;){if(i=o[zi]||o[Ei]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=tp(n);n!==null;){if(o=n[Ei])return o;n=tp(n)}return i}n=o,o=n.parentNode}return null}function Ua(n){return n=n[Ei]||n[zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Rs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function $o(n){return n[Ia]||null}var ru=[],Ps=-1;function gr(n){return{current:n}}function Gt(n){0>Ps||(n.current=ru[Ps],ru[Ps]=null,Ps--)}function Bt(n,i){Ps++,ru[Ps]=n.current,n.current=i}var vr={},wn=gr(vr),Un=gr(!1),jr=vr;function Ns(n,i){var o=n.type.contextTypes;if(!o)return vr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in o)f[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function kn(n){return n=n.childContextTypes,n!=null}function Yo(){Gt(Un),Gt(wn)}function np(n,i,o){if(wn.current!==vr)throw Error(t(168));Bt(wn,i),Bt(Un,o)}function ip(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,ye(n)||"Unknown",f));return fe({},o,c)}function qo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||vr,jr=wn.current,Bt(wn,n),Bt(Un,Un.current),!0}function rp(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=ip(n,i,jr),c.__reactInternalMemoizedMergedChildContext=n,Gt(Un),Gt(wn),Bt(wn,n)):Gt(Un),Bt(Un,o)}var Hi=null,Ko=!1,su=!1;function sp(n){Hi===null?Hi=[n]:Hi.push(n)}function Qv(n){Ko=!0,sp(n)}function _r(){if(!su&&Hi!==null){su=!0;var n=0,i=Rt;try{var o=Hi;for(Rt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Hi=null,Ko=!1}catch(f){throw Hi!==null&&(Hi=Hi.slice(n+1)),No(Ce,_r),f}finally{Rt=i,su=!1}}return null}var Ds=[],Ls=0,Zo=null,Qo=0,ei=[],ti=0,Wr=null,Gi=1,Vi="";function Xr(n,i){Ds[Ls++]=Qo,Ds[Ls++]=Zo,Zo=n,Qo=i}function ap(n,i,o){ei[ti++]=Gi,ei[ti++]=Vi,ei[ti++]=Wr,Wr=n;var c=Gi;n=Vi;var f=32-gt(c)-1;c&=~(1<<f),o+=1;var g=32-gt(i)+f;if(30<g){var A=f-f%5;g=(c&(1<<A)-1).toString(32),c>>=A,f-=A,Gi=1<<32-gt(i)+f|o<<f|c,Vi=g+n}else Gi=1<<g|o<<f|c,Vi=n}function au(n){n.return!==null&&(Xr(n,1),ap(n,1,0))}function ou(n){for(;n===Zo;)Zo=Ds[--Ls],Ds[Ls]=null,Qo=Ds[--Ls],Ds[Ls]=null;for(;n===Wr;)Wr=ei[--ti],ei[ti]=null,Vi=ei[--ti],ei[ti]=null,Gi=ei[--ti],ei[ti]=null}var Yn=null,qn=null,jt=!1,di=null;function op(n,i){var o=si(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function lp(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Yn=n,qn=mr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Yn=n,qn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Wr!==null?{id:Gi,overflow:Vi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=si(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Yn=n,qn=null,!0):!1;default:return!1}}function lu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function cu(n){if(jt){var i=qn;if(i){var o=i;if(!lp(n,i)){if(lu(n))throw Error(t(418));i=mr(o.nextSibling);var c=Yn;i&&lp(n,i)?op(c,o):(n.flags=n.flags&-4097|2,jt=!1,Yn=n)}}else{if(lu(n))throw Error(t(418));n.flags=n.flags&-4097|2,jt=!1,Yn=n}}}function cp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Yn=n}function Jo(n){if(n!==Yn)return!1;if(!jt)return cp(n),jt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!eu(n.type,n.memoizedProps)),i&&(i=qn)){if(lu(n))throw up(),Error(t(418));for(;i;)op(n,i),i=mr(i.nextSibling)}if(cp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){qn=mr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}qn=null}}else qn=Yn?mr(n.stateNode.nextSibling):null;return!0}function up(){for(var n=qn;n;)n=mr(n.nextSibling)}function Is(){qn=Yn=null,jt=!1}function uu(n){di===null?di=[n]:di.push(n)}var Jv=R.ReactCurrentBatchConfig;function ka(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var f=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(A){var B=f.refs;A===null?delete B[g]:B[g]=A},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function el(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function dp(n){var i=n._init;return i(n._payload)}function hp(n){function i(te,$){if(n){var ae=te.deletions;ae===null?(te.deletions=[$],te.flags|=16):ae.push($)}}function o(te,$){if(!n)return null;for(;$!==null;)i(te,$),$=$.sibling;return null}function c(te,$){for(te=new Map;$!==null;)$.key!==null?te.set($.key,$):te.set($.index,$),$=$.sibling;return te}function f(te,$){return te=br(te,$),te.index=0,te.sibling=null,te}function g(te,$,ae){return te.index=ae,n?(ae=te.alternate,ae!==null?(ae=ae.index,ae<$?(te.flags|=2,$):ae):(te.flags|=2,$)):(te.flags|=1048576,$)}function A(te){return n&&te.alternate===null&&(te.flags|=2),te}function B(te,$,ae,Pe){return $===null||$.tag!==6?($=td(ae,te.mode,Pe),$.return=te,$):($=f($,ae),$.return=te,$)}function j(te,$,ae,Pe){var Qe=ae.type;return Qe===k?we(te,$,ae.props.children,Pe,ae.key):$!==null&&($.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===oe&&dp(Qe)===$.type)?(Pe=f($,ae.props),Pe.ref=ka(te,$,ae),Pe.return=te,Pe):(Pe=El(ae.type,ae.key,ae.props,null,te.mode,Pe),Pe.ref=ka(te,$,ae),Pe.return=te,Pe)}function ue(te,$,ae,Pe){return $===null||$.tag!==4||$.stateNode.containerInfo!==ae.containerInfo||$.stateNode.implementation!==ae.implementation?($=nd(ae,te.mode,Pe),$.return=te,$):($=f($,ae.children||[]),$.return=te,$)}function we(te,$,ae,Pe,Qe){return $===null||$.tag!==7?($=es(ae,te.mode,Pe,Qe),$.return=te,$):($=f($,ae),$.return=te,$)}function Ae(te,$,ae){if(typeof $=="string"&&$!==""||typeof $=="number")return $=td(""+$,te.mode,ae),$.return=te,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case D:return ae=El($.type,$.key,$.props,null,te.mode,ae),ae.ref=ka(te,null,$),ae.return=te,ae;case U:return $=nd($,te.mode,ae),$.return=te,$;case oe:var Pe=$._init;return Ae(te,Pe($._payload),ae)}if(Ve($)||me($))return $=es($,te.mode,ae,null),$.return=te,$;el(te,$)}return null}function Se(te,$,ae,Pe){var Qe=$!==null?$.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return Qe!==null?null:B(te,$,""+ae,Pe);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case D:return ae.key===Qe?j(te,$,ae,Pe):null;case U:return ae.key===Qe?ue(te,$,ae,Pe):null;case oe:return Qe=ae._init,Se(te,$,Qe(ae._payload),Pe)}if(Ve(ae)||me(ae))return Qe!==null?null:we(te,$,ae,Pe,null);el(te,ae)}return null}function He(te,$,ae,Pe,Qe){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return te=te.get(ae)||null,B($,te,""+Pe,Qe);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case D:return te=te.get(Pe.key===null?ae:Pe.key)||null,j($,te,Pe,Qe);case U:return te=te.get(Pe.key===null?ae:Pe.key)||null,ue($,te,Pe,Qe);case oe:var st=Pe._init;return He(te,$,ae,st(Pe._payload),Qe)}if(Ve(Pe)||me(Pe))return te=te.get(ae)||null,we($,te,Pe,Qe,null);el($,Pe)}return null}function Ye(te,$,ae,Pe){for(var Qe=null,st=null,at=$,ut=$=0,mn=null;at!==null&&ut<ae.length;ut++){at.index>ut?(mn=at,at=null):mn=at.sibling;var Dt=Se(te,at,ae[ut],Pe);if(Dt===null){at===null&&(at=mn);break}n&&at&&Dt.alternate===null&&i(te,at),$=g(Dt,$,ut),st===null?Qe=Dt:st.sibling=Dt,st=Dt,at=mn}if(ut===ae.length)return o(te,at),jt&&Xr(te,ut),Qe;if(at===null){for(;ut<ae.length;ut++)at=Ae(te,ae[ut],Pe),at!==null&&($=g(at,$,ut),st===null?Qe=at:st.sibling=at,st=at);return jt&&Xr(te,ut),Qe}for(at=c(te,at);ut<ae.length;ut++)mn=He(at,te,ut,ae[ut],Pe),mn!==null&&(n&&mn.alternate!==null&&at.delete(mn.key===null?ut:mn.key),$=g(mn,$,ut),st===null?Qe=mn:st.sibling=mn,st=mn);return n&&at.forEach(function(Ar){return i(te,Ar)}),jt&&Xr(te,ut),Qe}function Ze(te,$,ae,Pe){var Qe=me(ae);if(typeof Qe!="function")throw Error(t(150));if(ae=Qe.call(ae),ae==null)throw Error(t(151));for(var st=Qe=null,at=$,ut=$=0,mn=null,Dt=ae.next();at!==null&&!Dt.done;ut++,Dt=ae.next()){at.index>ut?(mn=at,at=null):mn=at.sibling;var Ar=Se(te,at,Dt.value,Pe);if(Ar===null){at===null&&(at=mn);break}n&&at&&Ar.alternate===null&&i(te,at),$=g(Ar,$,ut),st===null?Qe=Ar:st.sibling=Ar,st=Ar,at=mn}if(Dt.done)return o(te,at),jt&&Xr(te,ut),Qe;if(at===null){for(;!Dt.done;ut++,Dt=ae.next())Dt=Ae(te,Dt.value,Pe),Dt!==null&&($=g(Dt,$,ut),st===null?Qe=Dt:st.sibling=Dt,st=Dt);return jt&&Xr(te,ut),Qe}for(at=c(te,at);!Dt.done;ut++,Dt=ae.next())Dt=He(at,te,ut,Dt.value,Pe),Dt!==null&&(n&&Dt.alternate!==null&&at.delete(Dt.key===null?ut:Dt.key),$=g(Dt,$,ut),st===null?Qe=Dt:st.sibling=Dt,st=Dt);return n&&at.forEach(function(D_){return i(te,D_)}),jt&&Xr(te,ut),Qe}function en(te,$,ae,Pe){if(typeof ae=="object"&&ae!==null&&ae.type===k&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case D:e:{for(var Qe=ae.key,st=$;st!==null;){if(st.key===Qe){if(Qe=ae.type,Qe===k){if(st.tag===7){o(te,st.sibling),$=f(st,ae.props.children),$.return=te,te=$;break e}}else if(st.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===oe&&dp(Qe)===st.type){o(te,st.sibling),$=f(st,ae.props),$.ref=ka(te,st,ae),$.return=te,te=$;break e}o(te,st);break}else i(te,st);st=st.sibling}ae.type===k?($=es(ae.props.children,te.mode,Pe,ae.key),$.return=te,te=$):(Pe=El(ae.type,ae.key,ae.props,null,te.mode,Pe),Pe.ref=ka(te,$,ae),Pe.return=te,te=Pe)}return A(te);case U:e:{for(st=ae.key;$!==null;){if($.key===st)if($.tag===4&&$.stateNode.containerInfo===ae.containerInfo&&$.stateNode.implementation===ae.implementation){o(te,$.sibling),$=f($,ae.children||[]),$.return=te,te=$;break e}else{o(te,$);break}else i(te,$);$=$.sibling}$=nd(ae,te.mode,Pe),$.return=te,te=$}return A(te);case oe:return st=ae._init,en(te,$,st(ae._payload),Pe)}if(Ve(ae))return Ye(te,$,ae,Pe);if(me(ae))return Ze(te,$,ae,Pe);el(te,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,$!==null&&$.tag===6?(o(te,$.sibling),$=f($,ae),$.return=te,te=$):(o(te,$),$=td(ae,te.mode,Pe),$.return=te,te=$),A(te)):o(te,$)}return en}var Us=hp(!0),fp=hp(!1),tl=gr(null),nl=null,ks=null,du=null;function hu(){du=ks=nl=null}function fu(n){var i=tl.current;Gt(tl),n._currentValue=i}function pu(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Fs(n,i){nl=n,du=ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Fn=!0),n.firstContext=null)}function ni(n){var i=n._currentValue;if(du!==n)if(n={context:n,memoizedValue:i,next:null},ks===null){if(nl===null)throw Error(t(308));ks=n,nl.dependencies={lanes:0,firstContext:n}}else ks=ks.next=n;return i}var $r=null;function mu(n){$r===null?$r=[n]:$r.push(n)}function pp(n,i,o,c){var f=i.interleaved;return f===null?(o.next=o,mu(i)):(o.next=f.next,f.next=o),i.interleaved=o,ji(n,c)}function ji(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var xr=!1;function gu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Wi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function yr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Pt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,ji(n,o)}return f=c.interleaved,f===null?(i.next=i,mu(c)):(i.next=f.next,f.next=i),c.interleaved=i,ji(n,o)}function il(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,hn(n,o)}}function gp(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var A={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?f=g=A:g=g.next=A,o=o.next}while(o!==null);g===null?f=g=i:g=g.next=i}else f=g=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function rl(n,i,o,c){var f=n.updateQueue;xr=!1;var g=f.firstBaseUpdate,A=f.lastBaseUpdate,B=f.shared.pending;if(B!==null){f.shared.pending=null;var j=B,ue=j.next;j.next=null,A===null?g=ue:A.next=ue,A=j;var we=n.alternate;we!==null&&(we=we.updateQueue,B=we.lastBaseUpdate,B!==A&&(B===null?we.firstBaseUpdate=ue:B.next=ue,we.lastBaseUpdate=j))}if(g!==null){var Ae=f.baseState;A=0,we=ue=j=null,B=g;do{var Se=B.lane,He=B.eventTime;if((c&Se)===Se){we!==null&&(we=we.next={eventTime:He,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var Ye=n,Ze=B;switch(Se=i,He=o,Ze.tag){case 1:if(Ye=Ze.payload,typeof Ye=="function"){Ae=Ye.call(He,Ae,Se);break e}Ae=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=Ze.payload,Se=typeof Ye=="function"?Ye.call(He,Ae,Se):Ye,Se==null)break e;Ae=fe({},Ae,Se);break e;case 2:xr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Se=f.effects,Se===null?f.effects=[B]:Se.push(B))}else He={eventTime:He,lane:Se,tag:B.tag,payload:B.payload,callback:B.callback,next:null},we===null?(ue=we=He,j=Ae):we=we.next=He,A|=Se;if(B=B.next,B===null){if(B=f.shared.pending,B===null)break;Se=B,B=Se.next,Se.next=null,f.lastBaseUpdate=Se,f.shared.pending=null}}while(!0);if(we===null&&(j=Ae),f.baseState=j,f.firstBaseUpdate=ue,f.lastBaseUpdate=we,i=f.shared.interleaved,i!==null){f=i;do A|=f.lane,f=f.next;while(f!==i)}else g===null&&(f.shared.lanes=0);Kr|=A,n.lanes=A,n.memoizedState=Ae}}function vp(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Fa={},Ti=gr(Fa),Oa=gr(Fa),Ba=gr(Fa);function Yr(n){if(n===Fa)throw Error(t(174));return n}function vu(n,i){switch(Bt(Ba,i),Bt(Oa,n),Bt(Ti,Fa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Re(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Re(i,n)}Gt(Ti),Bt(Ti,i)}function Os(){Gt(Ti),Gt(Oa),Gt(Ba)}function _p(n){Yr(Ba.current);var i=Yr(Ti.current),o=Re(i,n.type);i!==o&&(Bt(Oa,n),Bt(Ti,o))}function _u(n){Oa.current===n&&(Gt(Ti),Gt(Oa))}var Xt=gr(0);function sl(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xu=[];function yu(){for(var n=0;n<xu.length;n++)xu[n]._workInProgressVersionPrimary=null;xu.length=0}var al=R.ReactCurrentDispatcher,Su=R.ReactCurrentBatchConfig,qr=0,$t=null,an=null,fn=null,ol=!1,za=!1,Ha=0,e_=0;function En(){throw Error(t(321))}function Mu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ui(n[o],i[o]))return!1;return!0}function wu(n,i,o,c,f,g){if(qr=g,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,al.current=n===null||n.memoizedState===null?r_:s_,n=o(c,f),za){g=0;do{if(za=!1,Ha=0,25<=g)throw Error(t(301));g+=1,fn=an=null,i.updateQueue=null,al.current=a_,n=o(c,f)}while(za)}if(al.current=ul,i=an!==null&&an.next!==null,qr=0,fn=an=$t=null,ol=!1,i)throw Error(t(300));return n}function Eu(){var n=Ha!==0;return Ha=0,n}function bi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?$t.memoizedState=fn=n:fn=fn.next=n,fn}function ii(){if(an===null){var n=$t.alternate;n=n!==null?n.memoizedState:null}else n=an.next;var i=fn===null?$t.memoizedState:fn.next;if(i!==null)fn=i,an=n;else{if(n===null)throw Error(t(310));an=n,n={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},fn===null?$t.memoizedState=fn=n:fn=fn.next=n}return fn}function Ga(n,i){return typeof i=="function"?i(n):i}function Tu(n){var i=ii(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=an,f=c.baseQueue,g=o.pending;if(g!==null){if(f!==null){var A=f.next;f.next=g.next,g.next=A}c.baseQueue=f=g,o.pending=null}if(f!==null){g=f.next,c=c.baseState;var B=A=null,j=null,ue=g;do{var we=ue.lane;if((qr&we)===we)j!==null&&(j=j.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),c=ue.hasEagerState?ue.eagerState:n(c,ue.action);else{var Ae={lane:we,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};j===null?(B=j=Ae,A=c):j=j.next=Ae,$t.lanes|=we,Kr|=we}ue=ue.next}while(ue!==null&&ue!==g);j===null?A=c:j.next=B,ui(c,i.memoizedState)||(Fn=!0),i.memoizedState=c,i.baseState=A,i.baseQueue=j,o.lastRenderedState=c}if(n=o.interleaved,n!==null){f=n;do g=f.lane,$t.lanes|=g,Kr|=g,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function bu(n){var i=ii(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,g=i.memoizedState;if(f!==null){o.pending=null;var A=f=f.next;do g=n(g,A.action),A=A.next;while(A!==f);ui(g,i.memoizedState)||(Fn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,c]}function xp(){}function yp(n,i){var o=$t,c=ii(),f=i(),g=!ui(c.memoizedState,f);if(g&&(c.memoizedState=f,Fn=!0),c=c.queue,Au(wp.bind(null,o,c,n),[n]),c.getSnapshot!==i||g||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,Va(9,Mp.bind(null,o,c,f,i),void 0,null),pn===null)throw Error(t(349));(qr&30)!==0||Sp(o,i,f)}return f}function Sp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Mp(n,i,o,c){i.value=o,i.getSnapshot=c,Ep(i)&&Tp(n)}function wp(n,i,o){return o(function(){Ep(i)&&Tp(n)})}function Ep(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ui(n,o)}catch{return!0}}function Tp(n){var i=ji(n,1);i!==null&&mi(i,n,1,-1)}function bp(n){var i=bi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:n},i.queue=n,n=n.dispatch=i_.bind(null,$t,n),[i.memoizedState,n]}function Va(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function Ap(){return ii().memoizedState}function ll(n,i,o,c){var f=bi();$t.flags|=n,f.memoizedState=Va(1|i,o,void 0,c===void 0?null:c)}function cl(n,i,o,c){var f=ii();c=c===void 0?null:c;var g=void 0;if(an!==null){var A=an.memoizedState;if(g=A.destroy,c!==null&&Mu(c,A.deps)){f.memoizedState=Va(i,o,g,c);return}}$t.flags|=n,f.memoizedState=Va(1|i,o,g,c)}function Cp(n,i){return ll(8390656,8,n,i)}function Au(n,i){return cl(2048,8,n,i)}function Rp(n,i){return cl(4,2,n,i)}function Pp(n,i){return cl(4,4,n,i)}function Np(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Dp(n,i,o){return o=o!=null?o.concat([n]):null,cl(4,4,Np.bind(null,i,n),o)}function Cu(){}function Lp(n,i){var o=ii();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Mu(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Ip(n,i){var o=ii();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Mu(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Up(n,i,o){return(qr&21)===0?(n.baseState&&(n.baseState=!1,Fn=!0),n.memoizedState=o):(ui(o,i)||(o=kt(),$t.lanes|=o,Kr|=o,n.baseState=!0),i)}function t_(n,i){var o=Rt;Rt=o!==0&&4>o?o:4,n(!0);var c=Su.transition;Su.transition={};try{n(!1),i()}finally{Rt=o,Su.transition=c}}function kp(){return ii().memoizedState}function n_(n,i,o){var c=Er(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Fp(n))Op(i,o);else if(o=pp(n,i,o,c),o!==null){var f=Dn();mi(o,n,c,f),Bp(o,i,c)}}function i_(n,i,o){var c=Er(n),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Fp(n))Op(i,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var A=i.lastRenderedState,B=g(A,o);if(f.hasEagerState=!0,f.eagerState=B,ui(B,A)){var j=i.interleaved;j===null?(f.next=f,mu(i)):(f.next=j.next,j.next=f),i.interleaved=f;return}}catch{}finally{}o=pp(n,i,f,c),o!==null&&(f=Dn(),mi(o,n,c,f),Bp(o,i,c))}}function Fp(n){var i=n.alternate;return n===$t||i!==null&&i===$t}function Op(n,i){za=ol=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Bp(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,hn(n,o)}}var ul={readContext:ni,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},r_={readContext:ni,useCallback:function(n,i){return bi().memoizedState=[n,i===void 0?null:i],n},useContext:ni,useEffect:Cp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,ll(4194308,4,Np.bind(null,i,n),o)},useLayoutEffect:function(n,i){return ll(4194308,4,n,i)},useInsertionEffect:function(n,i){return ll(4,2,n,i)},useMemo:function(n,i){var o=bi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=bi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=n_.bind(null,$t,n),[c.memoizedState,n]},useRef:function(n){var i=bi();return n={current:n},i.memoizedState=n},useState:bp,useDebugValue:Cu,useDeferredValue:function(n){return bi().memoizedState=n},useTransition:function(){var n=bp(!1),i=n[0];return n=t_.bind(null,n[1]),bi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=$t,f=bi();if(jt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),pn===null)throw Error(t(349));(qr&30)!==0||Sp(c,i,o)}f.memoizedState=o;var g={value:o,getSnapshot:i};return f.queue=g,Cp(wp.bind(null,c,g,n),[n]),c.flags|=2048,Va(9,Mp.bind(null,c,g,o,i),void 0,null),o},useId:function(){var n=bi(),i=pn.identifierPrefix;if(jt){var o=Vi,c=Gi;o=(c&~(1<<32-gt(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ha++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=e_++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},s_={readContext:ni,useCallback:Lp,useContext:ni,useEffect:Au,useImperativeHandle:Dp,useInsertionEffect:Rp,useLayoutEffect:Pp,useMemo:Ip,useReducer:Tu,useRef:Ap,useState:function(){return Tu(Ga)},useDebugValue:Cu,useDeferredValue:function(n){var i=ii();return Up(i,an.memoizedState,n)},useTransition:function(){var n=Tu(Ga)[0],i=ii().memoizedState;return[n,i]},useMutableSource:xp,useSyncExternalStore:yp,useId:kp,unstable_isNewReconciler:!1},a_={readContext:ni,useCallback:Lp,useContext:ni,useEffect:Au,useImperativeHandle:Dp,useInsertionEffect:Rp,useLayoutEffect:Pp,useMemo:Ip,useReducer:bu,useRef:Ap,useState:function(){return bu(Ga)},useDebugValue:Cu,useDeferredValue:function(n){var i=ii();return an===null?i.memoizedState=n:Up(i,an.memoizedState,n)},useTransition:function(){var n=bu(Ga)[0],i=ii().memoizedState;return[n,i]},useMutableSource:xp,useSyncExternalStore:yp,useId:kp,unstable_isNewReconciler:!1};function hi(n,i){if(n&&n.defaultProps){i=fe({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Ru(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:fe({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var dl={isMounted:function(n){return(n=n._reactInternals)?Mi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Dn(),f=Er(n),g=Wi(c,f);g.payload=i,o!=null&&(g.callback=o),i=yr(n,g,f),i!==null&&(mi(i,n,f,c),il(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Dn(),f=Er(n),g=Wi(c,f);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=yr(n,g,f),i!==null&&(mi(i,n,f,c),il(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Dn(),c=Er(n),f=Wi(o,c);f.tag=2,i!=null&&(f.callback=i),i=yr(n,f,c),i!==null&&(mi(i,n,c,o),il(i,n,c))}};function zp(n,i,o,c,f,g,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,A):i.prototype&&i.prototype.isPureReactComponent?!Ra(o,c)||!Ra(f,g):!0}function Hp(n,i,o){var c=!1,f=vr,g=i.contextType;return typeof g=="object"&&g!==null?g=ni(g):(f=kn(i)?jr:wn.current,c=i.contextTypes,g=(c=c!=null)?Ns(n,f):vr),i=new i(o,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=dl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=g),i}function Gp(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&dl.enqueueReplaceState(i,i.state,null)}function Pu(n,i,o,c){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},gu(n);var g=i.contextType;typeof g=="object"&&g!==null?f.context=ni(g):(g=kn(i)?jr:wn.current,f.context=Ns(n,g)),f.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Ru(n,i,g,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&dl.enqueueReplaceState(f,f.state,null),rl(n,o,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Bs(n,i){try{var o="",c=i;do o+=ge(c),c=c.return;while(c);var f=o}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:f,digest:null}}function Nu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Du(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var o_=typeof WeakMap=="function"?WeakMap:Map;function Vp(n,i,o){o=Wi(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){_l||(_l=!0,$u=c),Du(n,i)},o}function jp(n,i,o){o=Wi(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){Du(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Du(n,i),typeof c!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),o}function Wp(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new o_;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),n=S_.bind(null,n,i,o),i.then(n,n))}function Xp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function $p(n,i,o,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Wi(-1,1),i.tag=2,yr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var l_=R.ReactCurrentOwner,Fn=!1;function Nn(n,i,o,c){i.child=n===null?fp(i,null,o,c):Us(i,n.child,o,c)}function Yp(n,i,o,c,f){o=o.render;var g=i.ref;return Fs(i,f),c=wu(n,i,o,c,g,f),o=Eu(),n!==null&&!Fn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Xi(n,i,f)):(jt&&o&&au(i),i.flags|=1,Nn(n,i,c,f),i.child)}function qp(n,i,o,c,f){if(n===null){var g=o.type;return typeof g=="function"&&!ed(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,Kp(n,i,g,c,f)):(n=El(o.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&f)===0){var A=g.memoizedProps;if(o=o.compare,o=o!==null?o:Ra,o(A,c)&&n.ref===i.ref)return Xi(n,i,f)}return i.flags|=1,n=br(g,c),n.ref=i.ref,n.return=i,i.child=n}function Kp(n,i,o,c,f){if(n!==null){var g=n.memoizedProps;if(Ra(g,c)&&n.ref===i.ref)if(Fn=!1,i.pendingProps=c=g,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Fn=!0);else return i.lanes=n.lanes,Xi(n,i,f)}return Lu(n,i,o,c,f)}function Zp(n,i,o){var c=i.pendingProps,f=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Hs,Kn),Kn|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Bt(Hs,Kn),Kn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:o,Bt(Hs,Kn),Kn|=c}else g!==null?(c=g.baseLanes|o,i.memoizedState=null):c=o,Bt(Hs,Kn),Kn|=c;return Nn(n,i,f,o),i.child}function Qp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Lu(n,i,o,c,f){var g=kn(o)?jr:wn.current;return g=Ns(i,g),Fs(i,f),o=wu(n,i,o,c,g,f),c=Eu(),n!==null&&!Fn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Xi(n,i,f)):(jt&&c&&au(i),i.flags|=1,Nn(n,i,o,f),i.child)}function Jp(n,i,o,c,f){if(kn(o)){var g=!0;qo(i)}else g=!1;if(Fs(i,f),i.stateNode===null)fl(n,i),Hp(i,o,c),Pu(i,o,c,f),c=!0;else if(n===null){var A=i.stateNode,B=i.memoizedProps;A.props=B;var j=A.context,ue=o.contextType;typeof ue=="object"&&ue!==null?ue=ni(ue):(ue=kn(o)?jr:wn.current,ue=Ns(i,ue));var we=o.getDerivedStateFromProps,Ae=typeof we=="function"||typeof A.getSnapshotBeforeUpdate=="function";Ae||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(B!==c||j!==ue)&&Gp(i,A,c,ue),xr=!1;var Se=i.memoizedState;A.state=Se,rl(i,c,A,f),j=i.memoizedState,B!==c||Se!==j||Un.current||xr?(typeof we=="function"&&(Ru(i,o,we,c),j=i.memoizedState),(B=xr||zp(i,o,B,c,Se,j,ue))?(Ae||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=j),A.props=c,A.state=j,A.context=ue,c=B):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{A=i.stateNode,mp(n,i),B=i.memoizedProps,ue=i.type===i.elementType?B:hi(i.type,B),A.props=ue,Ae=i.pendingProps,Se=A.context,j=o.contextType,typeof j=="object"&&j!==null?j=ni(j):(j=kn(o)?jr:wn.current,j=Ns(i,j));var He=o.getDerivedStateFromProps;(we=typeof He=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(B!==Ae||Se!==j)&&Gp(i,A,c,j),xr=!1,Se=i.memoizedState,A.state=Se,rl(i,c,A,f);var Ye=i.memoizedState;B!==Ae||Se!==Ye||Un.current||xr?(typeof He=="function"&&(Ru(i,o,He,c),Ye=i.memoizedState),(ue=xr||zp(i,o,ue,c,Se,Ye,j)||!1)?(we||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,Ye,j),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,Ye,j)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||B===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ye),A.props=c,A.state=Ye,A.context=j,c=ue):(typeof A.componentDidUpdate!="function"||B===n.memoizedProps&&Se===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Se===n.memoizedState||(i.flags|=1024),c=!1)}return Iu(n,i,o,c,g,f)}function Iu(n,i,o,c,f,g){Qp(n,i);var A=(i.flags&128)!==0;if(!c&&!A)return f&&rp(i,o,!1),Xi(n,i,g);c=i.stateNode,l_.current=i;var B=A&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&A?(i.child=Us(i,n.child,null,g),i.child=Us(i,null,B,g)):Nn(n,i,B,g),i.memoizedState=c.state,f&&rp(i,o,!0),i.child}function em(n){var i=n.stateNode;i.pendingContext?np(n,i.pendingContext,i.pendingContext!==i.context):i.context&&np(n,i.context,!1),vu(n,i.containerInfo)}function tm(n,i,o,c,f){return Is(),uu(f),i.flags|=256,Nn(n,i,o,c),i.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function ku(n){return{baseLanes:n,cachePool:null,transitions:null}}function nm(n,i,o){var c=i.pendingProps,f=Xt.current,g=!1,A=(i.flags&128)!==0,B;if((B=A)||(B=n!==null&&n.memoizedState===null?!1:(f&2)!==0),B?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Bt(Xt,f&1),n===null)return cu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(A=c.children,n=c.fallback,g?(c=i.mode,g=i.child,A={mode:"hidden",children:A},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=A):g=Tl(A,c,0,null),n=es(n,c,o,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=ku(o),i.memoizedState=Uu,n):Fu(i,A));if(f=n.memoizedState,f!==null&&(B=f.dehydrated,B!==null))return c_(n,i,A,c,B,f,o);if(g){g=c.fallback,A=i.mode,f=n.child,B=f.sibling;var j={mode:"hidden",children:c.children};return(A&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=j,i.deletions=null):(c=br(f,j),c.subtreeFlags=f.subtreeFlags&14680064),B!==null?g=br(B,g):(g=es(g,A,o,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,A=n.child.memoizedState,A=A===null?ku(o):{baseLanes:A.baseLanes|o,cachePool:null,transitions:A.transitions},g.memoizedState=A,g.childLanes=n.childLanes&~o,i.memoizedState=Uu,c}return g=n.child,n=g.sibling,c=br(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function Fu(n,i){return i=Tl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function hl(n,i,o,c){return c!==null&&uu(c),Us(i,n.child,null,o),n=Fu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function c_(n,i,o,c,f,g,A){if(o)return i.flags&256?(i.flags&=-257,c=Nu(Error(t(422))),hl(n,i,A,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,f=i.mode,c=Tl({mode:"visible",children:c.children},f,0,null),g=es(g,f,A,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Us(i,n.child,null,A),i.child.memoizedState=ku(A),i.memoizedState=Uu,g);if((i.mode&1)===0)return hl(n,i,A,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var B=c.dgst;return c=B,g=Error(t(419)),c=Nu(g,c,void 0),hl(n,i,A,c)}if(B=(A&n.childLanes)!==0,Fn||B){if(c=pn,c!==null){switch(A&-A){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|A))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,ji(n,f),mi(c,n,f,-1))}return Ju(),c=Nu(Error(t(421))),hl(n,i,A,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=M_.bind(null,n),f._reactRetry=i,null):(n=g.treeContext,qn=mr(f.nextSibling),Yn=i,jt=!0,di=null,n!==null&&(ei[ti++]=Gi,ei[ti++]=Vi,ei[ti++]=Wr,Gi=n.id,Vi=n.overflow,Wr=i),i=Fu(i,c.children),i.flags|=4096,i)}function im(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),pu(n.return,i,o)}function Ou(n,i,o,c,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=o,g.tailMode=f)}function rm(n,i,o){var c=i.pendingProps,f=c.revealOrder,g=c.tail;if(Nn(n,i,c.children,o),c=Xt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&im(n,o,i);else if(n.tag===19)im(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Bt(Xt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&sl(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Ou(i,!1,f,o,g);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&sl(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Ou(i,!0,o,null,g);break;case"together":Ou(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function fl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Xi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Kr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=br(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=br(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function u_(n,i,o){switch(i.tag){case 3:em(i),Is();break;case 5:_p(i);break;case 1:kn(i.type)&&qo(i);break;case 4:vu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Bt(tl,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Bt(Xt,Xt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?nm(n,i,o):(Bt(Xt,Xt.current&1),n=Xi(n,i,o),n!==null?n.sibling:null);Bt(Xt,Xt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return rm(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Bt(Xt,Xt.current),c)break;return null;case 22:case 23:return i.lanes=0,Zp(n,i,o)}return Xi(n,i,o)}var sm,Bu,am,om;sm=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Bu=function(){},am=function(n,i,o,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Yr(Ti.current);var g=null;switch(o){case"input":f=V(n,f),c=V(n,c),g=[];break;case"select":f=fe({},f,{value:void 0}),c=fe({},c,{value:void 0}),g=[];break;case"textarea":f=b(n,f),c=b(n,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Xo)}Oe(o,c);var A;o=null;for(ue in f)if(!c.hasOwnProperty(ue)&&f.hasOwnProperty(ue)&&f[ue]!=null)if(ue==="style"){var B=f[ue];for(A in B)B.hasOwnProperty(A)&&(o||(o={}),o[A]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(a.hasOwnProperty(ue)?g||(g=[]):(g=g||[]).push(ue,null));for(ue in c){var j=c[ue];if(B=f!=null?f[ue]:void 0,c.hasOwnProperty(ue)&&j!==B&&(j!=null||B!=null))if(ue==="style")if(B){for(A in B)!B.hasOwnProperty(A)||j&&j.hasOwnProperty(A)||(o||(o={}),o[A]="");for(A in j)j.hasOwnProperty(A)&&B[A]!==j[A]&&(o||(o={}),o[A]=j[A])}else o||(g||(g=[]),g.push(ue,o)),o=j;else ue==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,B=B?B.__html:void 0,j!=null&&B!==j&&(g=g||[]).push(ue,j)):ue==="children"?typeof j!="string"&&typeof j!="number"||(g=g||[]).push(ue,""+j):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(a.hasOwnProperty(ue)?(j!=null&&ue==="onScroll"&&Ht("scroll",n),g||B===j||(g=[])):(g=g||[]).push(ue,j))}o&&(g=g||[]).push("style",o);var ue=g;(i.updateQueue=ue)&&(i.flags|=4)}},om=function(n,i,o,c){o!==c&&(i.flags|=4)};function ja(n,i){if(!jt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Tn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function d_(n,i,o){var c=i.pendingProps;switch(ou(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(i),null;case 1:return kn(i.type)&&Yo(),Tn(i),null;case 3:return c=i.stateNode,Os(),Gt(Un),Gt(wn),yu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Jo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,di!==null&&(Ku(di),di=null))),Bu(n,i),Tn(i),null;case 5:_u(i);var f=Yr(Ba.current);if(o=i.type,n!==null&&i.stateNode!=null)am(n,i,o,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Tn(i),null}if(n=Yr(Ti.current),Jo(i)){c=i.stateNode,o=i.type;var g=i.memoizedProps;switch(c[Ei]=i,c[Ia]=g,n=(i.mode&1)!==0,o){case"dialog":Ht("cancel",c),Ht("close",c);break;case"iframe":case"object":case"embed":Ht("load",c);break;case"video":case"audio":for(f=0;f<Na.length;f++)Ht(Na[f],c);break;case"source":Ht("error",c);break;case"img":case"image":case"link":Ht("error",c),Ht("load",c);break;case"details":Ht("toggle",c);break;case"input":Jt(c,g),Ht("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Ht("invalid",c);break;case"textarea":O(c,g),Ht("invalid",c)}Oe(o,g),f=null;for(var A in g)if(g.hasOwnProperty(A)){var B=g[A];A==="children"?typeof B=="string"?c.textContent!==B&&(g.suppressHydrationWarning!==!0&&Wo(c.textContent,B,n),f=["children",B]):typeof B=="number"&&c.textContent!==""+B&&(g.suppressHydrationWarning!==!0&&Wo(c.textContent,B,n),f=["children",""+B]):a.hasOwnProperty(A)&&B!=null&&A==="onScroll"&&Ht("scroll",c)}switch(o){case"input":Nt(c),Ke(c,g,!0);break;case"textarea":Nt(c),ie(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Xo)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{A=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=q(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(o,{is:c.is}):(n=A.createElement(o),o==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,o),n[Ei]=i,n[Ia]=c,sm(n,i,!1,!1),i.stateNode=n;e:{switch(A=be(o,c),o){case"dialog":Ht("cancel",n),Ht("close",n),f=c;break;case"iframe":case"object":case"embed":Ht("load",n),f=c;break;case"video":case"audio":for(f=0;f<Na.length;f++)Ht(Na[f],n);f=c;break;case"source":Ht("error",n),f=c;break;case"img":case"image":case"link":Ht("error",n),Ht("load",n),f=c;break;case"details":Ht("toggle",n),f=c;break;case"input":Jt(n,c),f=V(n,c),Ht("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=fe({},c,{value:void 0}),Ht("invalid",n);break;case"textarea":O(n,c),f=b(n,c),Ht("invalid",n);break;default:f=c}Oe(o,f),B=f;for(g in B)if(B.hasOwnProperty(g)){var j=B[g];g==="style"?_e(n,j):g==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&Je(n,j)):g==="children"?typeof j=="string"?(o!=="textarea"||j!=="")&&et(n,j):typeof j=="number"&&et(n,""+j):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?j!=null&&g==="onScroll"&&Ht("scroll",n):j!=null&&I(n,g,j,A))}switch(o){case"input":Nt(n),Ke(n,c,!1);break;case"textarea":Nt(n),ie(n);break;case"option":c.value!=null&&n.setAttribute("value",""+De(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?N(n,!!c.multiple,g,!1):c.defaultValue!=null&&N(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Xo)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Tn(i),null;case 6:if(n&&i.stateNode!=null)om(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=Yr(Ba.current),Yr(Ti.current),Jo(i)){if(c=i.stateNode,o=i.memoizedProps,c[Ei]=i,(g=c.nodeValue!==o)&&(n=Yn,n!==null))switch(n.tag){case 3:Wo(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Wo(c.nodeValue,o,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Ei]=i,i.stateNode=c}return Tn(i),null;case 13:if(Gt(Xt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(jt&&qn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)up(),Is(),i.flags|=98560,g=!1;else if(g=Jo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Ei]=i}else Is(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Tn(i),g=!1}else di!==null&&(Ku(di),di=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Xt.current&1)!==0?on===0&&(on=3):Ju())),i.updateQueue!==null&&(i.flags|=4),Tn(i),null);case 4:return Os(),Bu(n,i),n===null&&Da(i.stateNode.containerInfo),Tn(i),null;case 10:return fu(i.type._context),Tn(i),null;case 17:return kn(i.type)&&Yo(),Tn(i),null;case 19:if(Gt(Xt),g=i.memoizedState,g===null)return Tn(i),null;if(c=(i.flags&128)!==0,A=g.rendering,A===null)if(c)ja(g,!1);else{if(on!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(A=sl(n),A!==null){for(i.flags|=128,ja(g,!1),c=A.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)g=o,n=c,g.flags&=14680066,A=g.alternate,A===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=A.childLanes,g.lanes=A.lanes,g.child=A.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=A.memoizedProps,g.memoizedState=A.memoizedState,g.updateQueue=A.updateQueue,g.type=A.type,n=A.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Bt(Xt,Xt.current&1|2),i.child}n=n.sibling}g.tail!==null&&ne()>Gs&&(i.flags|=128,c=!0,ja(g,!1),i.lanes=4194304)}else{if(!c)if(n=sl(A),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ja(g,!0),g.tail===null&&g.tailMode==="hidden"&&!A.alternate&&!jt)return Tn(i),null}else 2*ne()-g.renderingStartTime>Gs&&o!==1073741824&&(i.flags|=128,c=!0,ja(g,!1),i.lanes=4194304);g.isBackwards?(A.sibling=i.child,i.child=A):(o=g.last,o!==null?o.sibling=A:i.child=A,g.last=A)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=ne(),i.sibling=null,o=Xt.current,Bt(Xt,c?o&1|2:o&1),i):(Tn(i),null);case 22:case 23:return Qu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Kn&1073741824)!==0&&(Tn(i),i.subtreeFlags&6&&(i.flags|=8192)):Tn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function h_(n,i){switch(ou(i),i.tag){case 1:return kn(i.type)&&Yo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Os(),Gt(Un),Gt(wn),yu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return _u(i),null;case 13:if(Gt(Xt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Is()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Gt(Xt),null;case 4:return Os(),null;case 10:return fu(i.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var pl=!1,bn=!1,f_=typeof WeakSet=="function"?WeakSet:Set,We=null;function zs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Zt(n,i,c)}else o.current=null}function zu(n,i,o){try{o()}catch(c){Zt(n,i,c)}}var lm=!1;function p_(n,i){if(Qc=Io,n=zf(),jc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var A=0,B=-1,j=-1,ue=0,we=0,Ae=n,Se=null;t:for(;;){for(var He;Ae!==o||f!==0&&Ae.nodeType!==3||(B=A+f),Ae!==g||c!==0&&Ae.nodeType!==3||(j=A+c),Ae.nodeType===3&&(A+=Ae.nodeValue.length),(He=Ae.firstChild)!==null;)Se=Ae,Ae=He;for(;;){if(Ae===n)break t;if(Se===o&&++ue===f&&(B=A),Se===g&&++we===c&&(j=A),(He=Ae.nextSibling)!==null)break;Ae=Se,Se=Ae.parentNode}Ae=He}o=B===-1||j===-1?null:{start:B,end:j}}else o=null}o=o||{start:0,end:0}}else o=null;for(Jc={focusedElem:n,selectionRange:o},Io=!1,We=i;We!==null;)if(i=We,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,We=n;else for(;We!==null;){i=We;try{var Ye=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var Ze=Ye.memoizedProps,en=Ye.memoizedState,te=i.stateNode,$=te.getSnapshotBeforeUpdate(i.elementType===i.type?Ze:hi(i.type,Ze),en);te.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var ae=i.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Pe){Zt(i,i.return,Pe)}if(n=i.sibling,n!==null){n.return=i.return,We=n;break}We=i.return}return Ye=lm,lm=!1,Ye}function Wa(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var g=f.destroy;f.destroy=void 0,g!==void 0&&zu(i,o,g)}f=f.next}while(f!==c)}}function ml(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function Hu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function cm(n){var i=n.alternate;i!==null&&(n.alternate=null,cm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ei],delete i[Ia],delete i[iu],delete i[Kv],delete i[Zv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function um(n){return n.tag===5||n.tag===3||n.tag===4}function dm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||um(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Gu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Xo));else if(c!==4&&(n=n.child,n!==null))for(Gu(n,i,o),n=n.sibling;n!==null;)Gu(n,i,o),n=n.sibling}function Vu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Vu(n,i,o),n=n.sibling;n!==null;)Vu(n,i,o),n=n.sibling}var _n=null,fi=!1;function Sr(n,i,o){for(o=o.child;o!==null;)hm(n,i,o),o=o.sibling}function hm(n,i,o){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(ot,o)}catch{}switch(o.tag){case 5:bn||zs(o,i);case 6:var c=_n,f=fi;_n=null,Sr(n,i,o),_n=c,fi=f,_n!==null&&(fi?(n=_n,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):_n.removeChild(o.stateNode));break;case 18:_n!==null&&(fi?(n=_n,o=o.stateNode,n.nodeType===8?nu(n.parentNode,o):n.nodeType===1&&nu(n,o),wa(n)):nu(_n,o.stateNode));break;case 4:c=_n,f=fi,_n=o.stateNode.containerInfo,fi=!0,Sr(n,i,o),_n=c,fi=f;break;case 0:case 11:case 14:case 15:if(!bn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,A=g.destroy;g=g.tag,A!==void 0&&((g&2)!==0||(g&4)!==0)&&zu(o,i,A),f=f.next}while(f!==c)}Sr(n,i,o);break;case 1:if(!bn&&(zs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(B){Zt(o,i,B)}Sr(n,i,o);break;case 21:Sr(n,i,o);break;case 22:o.mode&1?(bn=(c=bn)||o.memoizedState!==null,Sr(n,i,o),bn=c):Sr(n,i,o);break;default:Sr(n,i,o)}}function fm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new f_),i.forEach(function(c){var f=w_.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}}function pi(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var g=n,A=i,B=A;e:for(;B!==null;){switch(B.tag){case 5:_n=B.stateNode,fi=!1;break e;case 3:_n=B.stateNode.containerInfo,fi=!0;break e;case 4:_n=B.stateNode.containerInfo,fi=!0;break e}B=B.return}if(_n===null)throw Error(t(160));hm(g,A,f),_n=null,fi=!1;var j=f.alternate;j!==null&&(j.return=null),f.return=null}catch(ue){Zt(f,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)pm(i,n),i=i.sibling}function pm(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(pi(i,n),Ai(n),c&4){try{Wa(3,n,n.return),ml(3,n)}catch(Ze){Zt(n,n.return,Ze)}try{Wa(5,n,n.return)}catch(Ze){Zt(n,n.return,Ze)}}break;case 1:pi(i,n),Ai(n),c&512&&o!==null&&zs(o,o.return);break;case 5:if(pi(i,n),Ai(n),c&512&&o!==null&&zs(o,o.return),n.flags&32){var f=n.stateNode;try{et(f,"")}catch(Ze){Zt(n,n.return,Ze)}}if(c&4&&(f=n.stateNode,f!=null)){var g=n.memoizedProps,A=o!==null?o.memoizedProps:g,B=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{B==="input"&&g.type==="radio"&&g.name!=null&&pt(f,g),be(B,A);var ue=be(B,g);for(A=0;A<j.length;A+=2){var we=j[A],Ae=j[A+1];we==="style"?_e(f,Ae):we==="dangerouslySetInnerHTML"?Je(f,Ae):we==="children"?et(f,Ae):I(f,we,Ae,ue)}switch(B){case"input":ht(f,g);break;case"textarea":W(f,g);break;case"select":var Se=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var He=g.value;He!=null?N(f,!!g.multiple,He,!1):Se!==!!g.multiple&&(g.defaultValue!=null?N(f,!!g.multiple,g.defaultValue,!0):N(f,!!g.multiple,g.multiple?[]:"",!1))}f[Ia]=g}catch(Ze){Zt(n,n.return,Ze)}}break;case 6:if(pi(i,n),Ai(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,g=n.memoizedProps;try{f.nodeValue=g}catch(Ze){Zt(n,n.return,Ze)}}break;case 3:if(pi(i,n),Ai(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{wa(i.containerInfo)}catch(Ze){Zt(n,n.return,Ze)}break;case 4:pi(i,n),Ai(n);break;case 13:pi(i,n),Ai(n),f=n.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Xu=ne())),c&4&&fm(n);break;case 22:if(we=o!==null&&o.memoizedState!==null,n.mode&1?(bn=(ue=bn)||we,pi(i,n),bn=ue):pi(i,n),Ai(n),c&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!we&&(n.mode&1)!==0)for(We=n,we=n.child;we!==null;){for(Ae=We=we;We!==null;){switch(Se=We,He=Se.child,Se.tag){case 0:case 11:case 14:case 15:Wa(4,Se,Se.return);break;case 1:zs(Se,Se.return);var Ye=Se.stateNode;if(typeof Ye.componentWillUnmount=="function"){c=Se,o=Se.return;try{i=c,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch(Ze){Zt(c,o,Ze)}}break;case 5:zs(Se,Se.return);break;case 22:if(Se.memoizedState!==null){vm(Ae);continue}}He!==null?(He.return=Se,We=He):vm(Ae)}we=we.sibling}e:for(we=null,Ae=n;;){if(Ae.tag===5){if(we===null){we=Ae;try{f=Ae.stateNode,ue?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(B=Ae.stateNode,j=Ae.memoizedProps.style,A=j!=null&&j.hasOwnProperty("display")?j.display:null,B.style.display=it("display",A))}catch(Ze){Zt(n,n.return,Ze)}}}else if(Ae.tag===6){if(we===null)try{Ae.stateNode.nodeValue=ue?"":Ae.memoizedProps}catch(Ze){Zt(n,n.return,Ze)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===n)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===n)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===n)break e;we===Ae&&(we=null),Ae=Ae.return}we===Ae&&(we=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:pi(i,n),Ai(n),c&4&&fm(n);break;case 21:break;default:pi(i,n),Ai(n)}}function Ai(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(um(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(et(f,""),c.flags&=-33);var g=dm(n);Vu(n,g,f);break;case 3:case 4:var A=c.stateNode.containerInfo,B=dm(n);Gu(n,B,A);break;default:throw Error(t(161))}}catch(j){Zt(n,n.return,j)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function m_(n,i,o){We=n,mm(n)}function mm(n,i,o){for(var c=(n.mode&1)!==0;We!==null;){var f=We,g=f.child;if(f.tag===22&&c){var A=f.memoizedState!==null||pl;if(!A){var B=f.alternate,j=B!==null&&B.memoizedState!==null||bn;B=pl;var ue=bn;if(pl=A,(bn=j)&&!ue)for(We=f;We!==null;)A=We,j=A.child,A.tag===22&&A.memoizedState!==null?_m(f):j!==null?(j.return=A,We=j):_m(f);for(;g!==null;)We=g,mm(g),g=g.sibling;We=f,pl=B,bn=ue}gm(n)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,We=g):gm(n)}}function gm(n){for(;We!==null;){var i=We;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:bn||ml(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!bn)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:hi(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&vp(i,g,c);break;case 3:var A=i.updateQueue;if(A!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}vp(i,A,o)}break;case 5:var B=i.stateNode;if(o===null&&i.flags&4){o=B;var j=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&o.focus();break;case"img":j.src&&(o.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var we=ue.memoizedState;if(we!==null){var Ae=we.dehydrated;Ae!==null&&wa(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bn||i.flags&512&&Hu(i)}catch(Se){Zt(i,i.return,Se)}}if(i===n){We=null;break}if(o=i.sibling,o!==null){o.return=i.return,We=o;break}We=i.return}}function vm(n){for(;We!==null;){var i=We;if(i===n){We=null;break}var o=i.sibling;if(o!==null){o.return=i.return,We=o;break}We=i.return}}function _m(n){for(;We!==null;){var i=We;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{ml(4,i)}catch(j){Zt(i,o,j)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(j){Zt(i,f,j)}}var g=i.return;try{Hu(i)}catch(j){Zt(i,g,j)}break;case 5:var A=i.return;try{Hu(i)}catch(j){Zt(i,A,j)}}}catch(j){Zt(i,i.return,j)}if(i===n){We=null;break}var B=i.sibling;if(B!==null){B.return=i.return,We=B;break}We=i.return}}var g_=Math.ceil,gl=R.ReactCurrentDispatcher,ju=R.ReactCurrentOwner,ri=R.ReactCurrentBatchConfig,Pt=0,pn=null,tn=null,xn=0,Kn=0,Hs=gr(0),on=0,Xa=null,Kr=0,vl=0,Wu=0,$a=null,On=null,Xu=0,Gs=1/0,$i=null,_l=!1,$u=null,Mr=null,xl=!1,wr=null,yl=0,Ya=0,Yu=null,Sl=-1,Ml=0;function Dn(){return(Pt&6)!==0?ne():Sl!==-1?Sl:Sl=ne()}function Er(n){return(n.mode&1)===0?1:(Pt&2)!==0&&xn!==0?xn&-xn:Jv.transition!==null?(Ml===0&&(Ml=kt()),Ml):(n=Rt,n!==0||(n=window.event,n=n===void 0?16:yf(n.type)),n)}function mi(n,i,o,c){if(50<Ya)throw Ya=0,Yu=null,Error(t(185));dn(n,o,c),((Pt&2)===0||n!==pn)&&(n===pn&&((Pt&2)===0&&(vl|=o),on===4&&Tr(n,xn)),Bn(n,c),o===1&&Pt===0&&(i.mode&1)===0&&(Gs=ne()+500,Ko&&_r()))}function Bn(n,i){var o=n.callbackNode;Pn(n,i);var c=Sn(n,n===pn?xn:0);if(c===0)o!==null&&L(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&L(o),i===1)n.tag===0?Qv(ym.bind(null,n)):sp(ym.bind(null,n)),Yv(function(){(Pt&6)===0&&_r()}),o=null;else{switch(wi(c)){case 1:o=Ce;break;case 4:o=Ie;break;case 16:o=ze;break;case 536870912:o=ct;break;default:o=ze}o=Cm(o,xm.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function xm(n,i){if(Sl=-1,Ml=0,(Pt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Vs()&&n.callbackNode!==o)return null;var c=Sn(n,n===pn?xn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=wl(n,c);else{i=c;var f=Pt;Pt|=2;var g=Mm();(pn!==n||xn!==i)&&($i=null,Gs=ne()+500,Qr(n,i));do try{x_();break}catch(B){Sm(n,B)}while(!0);hu(),gl.current=g,Pt=f,tn!==null?i=0:(pn=null,xn=0,i=on)}if(i!==0){if(i===2&&(f=Bi(n),f!==0&&(c=f,i=qu(n,f))),i===1)throw o=Xa,Qr(n,0),Tr(n,c),Bn(n,ne()),o;if(i===6)Tr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!v_(f)&&(i=wl(n,c),i===2&&(g=Bi(n),g!==0&&(c=g,i=qu(n,g))),i===1))throw o=Xa,Qr(n,0),Tr(n,c),Bn(n,ne()),o;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Jr(n,On,$i);break;case 3:if(Tr(n,c),(c&130023424)===c&&(i=Xu+500-ne(),10<i)){if(Sn(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Dn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=tu(Jr.bind(null,n,On,$i),i);break}Jr(n,On,$i);break;case 4:if(Tr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var A=31-gt(c);g=1<<A,A=i[A],A>f&&(f=A),c&=~g}if(c=f,c=ne()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*g_(c/1960))-c,10<c){n.timeoutHandle=tu(Jr.bind(null,n,On,$i),c);break}Jr(n,On,$i);break;case 5:Jr(n,On,$i);break;default:throw Error(t(329))}}}return Bn(n,ne()),n.callbackNode===o?xm.bind(null,n):null}function qu(n,i){var o=$a;return n.current.memoizedState.isDehydrated&&(Qr(n,i).flags|=256),n=wl(n,i),n!==2&&(i=On,On=o,i!==null&&Ku(i)),n}function Ku(n){On===null?On=n:On.push.apply(On,n)}function v_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],g=f.getSnapshot;f=f.value;try{if(!ui(g(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Tr(n,i){for(i&=~Wu,i&=~vl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-gt(i),c=1<<o;n[o]=-1,i&=~c}}function ym(n){if((Pt&6)!==0)throw Error(t(327));Vs();var i=Sn(n,0);if((i&1)===0)return Bn(n,ne()),null;var o=wl(n,i);if(n.tag!==0&&o===2){var c=Bi(n);c!==0&&(i=c,o=qu(n,c))}if(o===1)throw o=Xa,Qr(n,0),Tr(n,i),Bn(n,ne()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Jr(n,On,$i),Bn(n,ne()),null}function Zu(n,i){var o=Pt;Pt|=1;try{return n(i)}finally{Pt=o,Pt===0&&(Gs=ne()+500,Ko&&_r())}}function Zr(n){wr!==null&&wr.tag===0&&(Pt&6)===0&&Vs();var i=Pt;Pt|=1;var o=ri.transition,c=Rt;try{if(ri.transition=null,Rt=1,n)return n()}finally{Rt=c,ri.transition=o,Pt=i,(Pt&6)===0&&_r()}}function Qu(){Kn=Hs.current,Gt(Hs)}function Qr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,$v(o)),tn!==null)for(o=tn.return;o!==null;){var c=o;switch(ou(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Yo();break;case 3:Os(),Gt(Un),Gt(wn),yu();break;case 5:_u(c);break;case 4:Os();break;case 13:Gt(Xt);break;case 19:Gt(Xt);break;case 10:fu(c.type._context);break;case 22:case 23:Qu()}o=o.return}if(pn=n,tn=n=br(n.current,null),xn=Kn=i,on=0,Xa=null,Wu=vl=Kr=0,On=$a=null,$r!==null){for(i=0;i<$r.length;i++)if(o=$r[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,g=o.pending;if(g!==null){var A=g.next;g.next=f,c.next=A}o.pending=c}$r=null}return n}function Sm(n,i){do{var o=tn;try{if(hu(),al.current=ul,ol){for(var c=$t.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}ol=!1}if(qr=0,fn=an=$t=null,za=!1,Ha=0,ju.current=null,o===null||o.return===null){on=1,Xa=i,tn=null;break}e:{var g=n,A=o.return,B=o,j=i;if(i=xn,B.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var ue=j,we=B,Ae=we.tag;if((we.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var Se=we.alternate;Se?(we.updateQueue=Se.updateQueue,we.memoizedState=Se.memoizedState,we.lanes=Se.lanes):(we.updateQueue=null,we.memoizedState=null)}var He=Xp(A);if(He!==null){He.flags&=-257,$p(He,A,B,g,i),He.mode&1&&Wp(g,ue,i),i=He,j=ue;var Ye=i.updateQueue;if(Ye===null){var Ze=new Set;Ze.add(j),i.updateQueue=Ze}else Ye.add(j);break e}else{if((i&1)===0){Wp(g,ue,i),Ju();break e}j=Error(t(426))}}else if(jt&&B.mode&1){var en=Xp(A);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),$p(en,A,B,g,i),uu(Bs(j,B));break e}}g=j=Bs(j,B),on!==4&&(on=2),$a===null?$a=[g]:$a.push(g),g=A;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var te=Vp(g,j,i);gp(g,te);break e;case 1:B=j;var $=g.type,ae=g.stateNode;if((g.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(Mr===null||!Mr.has(ae)))){g.flags|=65536,i&=-i,g.lanes|=i;var Pe=jp(g,B,i);gp(g,Pe);break e}}g=g.return}while(g!==null)}Em(o)}catch(Qe){i=Qe,tn===o&&o!==null&&(tn=o=o.return);continue}break}while(!0)}function Mm(){var n=gl.current;return gl.current=ul,n===null?ul:n}function Ju(){(on===0||on===3||on===2)&&(on=4),pn===null||(Kr&268435455)===0&&(vl&268435455)===0||Tr(pn,xn)}function wl(n,i){var o=Pt;Pt|=2;var c=Mm();(pn!==n||xn!==i)&&($i=null,Qr(n,i));do try{__();break}catch(f){Sm(n,f)}while(!0);if(hu(),Pt=o,gl.current=c,tn!==null)throw Error(t(261));return pn=null,xn=0,on}function __(){for(;tn!==null;)wm(tn)}function x_(){for(;tn!==null&&!Z();)wm(tn)}function wm(n){var i=Am(n.alternate,n,Kn);n.memoizedProps=n.pendingProps,i===null?Em(n):tn=i,ju.current=null}function Em(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=d_(o,i,Kn),o!==null){tn=o;return}}else{if(o=h_(o,i),o!==null){o.flags&=32767,tn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{on=6,tn=null;return}}if(i=i.sibling,i!==null){tn=i;return}tn=i=n}while(i!==null);on===0&&(on=5)}function Jr(n,i,o){var c=Rt,f=ri.transition;try{ri.transition=null,Rt=1,y_(n,i,o,c)}finally{ri.transition=f,Rt=c}return null}function y_(n,i,o,c){do Vs();while(wr!==null);if((Pt&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(vn(n,g),n===pn&&(tn=pn=null,xn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||xl||(xl=!0,Cm(ze,function(){return Vs(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=ri.transition,ri.transition=null;var A=Rt;Rt=1;var B=Pt;Pt|=4,ju.current=null,p_(n,o),pm(o,n),zv(Jc),Io=!!Qc,Jc=Qc=null,n.current=o,m_(o),de(),Pt=B,Rt=A,ri.transition=g}else n.current=o;if(xl&&(xl=!1,wr=n,yl=f),g=n.pendingLanes,g===0&&(Mr=null),Tt(o.stateNode),Bn(n,ne()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(_l)throw _l=!1,n=$u,$u=null,n;return(yl&1)!==0&&n.tag!==0&&Vs(),g=n.pendingLanes,(g&1)!==0?n===Yu?Ya++:(Ya=0,Yu=n):Ya=0,_r(),null}function Vs(){if(wr!==null){var n=wi(yl),i=ri.transition,o=Rt;try{if(ri.transition=null,Rt=16>n?16:n,wr===null)var c=!1;else{if(n=wr,wr=null,yl=0,(Pt&6)!==0)throw Error(t(331));var f=Pt;for(Pt|=4,We=n.current;We!==null;){var g=We,A=g.child;if((We.flags&16)!==0){var B=g.deletions;if(B!==null){for(var j=0;j<B.length;j++){var ue=B[j];for(We=ue;We!==null;){var we=We;switch(we.tag){case 0:case 11:case 15:Wa(8,we,g)}var Ae=we.child;if(Ae!==null)Ae.return=we,We=Ae;else for(;We!==null;){we=We;var Se=we.sibling,He=we.return;if(cm(we),we===ue){We=null;break}if(Se!==null){Se.return=He,We=Se;break}We=He}}}var Ye=g.alternate;if(Ye!==null){var Ze=Ye.child;if(Ze!==null){Ye.child=null;do{var en=Ze.sibling;Ze.sibling=null,Ze=en}while(Ze!==null)}}We=g}}if((g.subtreeFlags&2064)!==0&&A!==null)A.return=g,We=A;else e:for(;We!==null;){if(g=We,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Wa(9,g,g.return)}var te=g.sibling;if(te!==null){te.return=g.return,We=te;break e}We=g.return}}var $=n.current;for(We=$;We!==null;){A=We;var ae=A.child;if((A.subtreeFlags&2064)!==0&&ae!==null)ae.return=A,We=ae;else e:for(A=$;We!==null;){if(B=We,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:ml(9,B)}}catch(Qe){Zt(B,B.return,Qe)}if(B===A){We=null;break e}var Pe=B.sibling;if(Pe!==null){Pe.return=B.return,We=Pe;break e}We=B.return}}if(Pt=f,_r(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(ot,n)}catch{}c=!0}return c}finally{Rt=o,ri.transition=i}}return!1}function Tm(n,i,o){i=Bs(o,i),i=Vp(n,i,1),n=yr(n,i,1),i=Dn(),n!==null&&(dn(n,1,i),Bn(n,i))}function Zt(n,i,o){if(n.tag===3)Tm(n,n,o);else for(;i!==null;){if(i.tag===3){Tm(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Mr===null||!Mr.has(c))){n=Bs(o,n),n=jp(i,n,1),i=yr(i,n,1),n=Dn(),i!==null&&(dn(i,1,n),Bn(i,n));break}}i=i.return}}function S_(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Dn(),n.pingedLanes|=n.suspendedLanes&o,pn===n&&(xn&o)===o&&(on===4||on===3&&(xn&130023424)===xn&&500>ne()-Xu?Qr(n,0):Wu|=o),Bn(n,i)}function bm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Kt,Kt<<=1,(Kt&130023424)===0&&(Kt=4194304)));var o=Dn();n=ji(n,i),n!==null&&(dn(n,i,o),Bn(n,o))}function M_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),bm(n,o)}function w_(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),bm(n,o)}var Am;Am=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Un.current)Fn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Fn=!1,u_(n,i,o);Fn=(n.flags&131072)!==0}else Fn=!1,jt&&(i.flags&1048576)!==0&&ap(i,Qo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;fl(n,i),n=i.pendingProps;var f=Ns(i,wn.current);Fs(i,o),f=wu(null,i,c,n,f,o);var g=Eu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,kn(c)?(g=!0,qo(i)):g=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,gu(i),f.updater=dl,i.stateNode=f,f._reactInternals=i,Pu(i,c,n,o),i=Iu(null,i,c,!0,g,o)):(i.tag=0,jt&&g&&au(i),Nn(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch(fl(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=T_(c),n=hi(c,n),f){case 0:i=Lu(null,i,c,n,o);break e;case 1:i=Jp(null,i,c,n,o);break e;case 11:i=Yp(null,i,c,n,o);break e;case 14:i=qp(null,i,c,hi(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:hi(c,f),Lu(n,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:hi(c,f),Jp(n,i,c,f,o);case 3:e:{if(em(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,f=g.element,mp(n,i),rl(i,c,null,o);var A=i.memoizedState;if(c=A.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){f=Bs(Error(t(423)),i),i=tm(n,i,c,o,f);break e}else if(c!==f){f=Bs(Error(t(424)),i),i=tm(n,i,c,o,f);break e}else for(qn=mr(i.stateNode.containerInfo.firstChild),Yn=i,jt=!0,di=null,o=fp(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Is(),c===f){i=Xi(n,i,o);break e}Nn(n,i,c,o)}i=i.child}return i;case 5:return _p(i),n===null&&cu(i),c=i.type,f=i.pendingProps,g=n!==null?n.memoizedProps:null,A=f.children,eu(c,f)?A=null:g!==null&&eu(c,g)&&(i.flags|=32),Qp(n,i),Nn(n,i,A,o),i.child;case 6:return n===null&&cu(i),null;case 13:return nm(n,i,o);case 4:return vu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Us(i,null,c,o):Nn(n,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:hi(c,f),Yp(n,i,c,f,o);case 7:return Nn(n,i,i.pendingProps,o),i.child;case 8:return Nn(n,i,i.pendingProps.children,o),i.child;case 12:return Nn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,g=i.memoizedProps,A=f.value,Bt(tl,c._currentValue),c._currentValue=A,g!==null)if(ui(g.value,A)){if(g.children===f.children&&!Un.current){i=Xi(n,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var B=g.dependencies;if(B!==null){A=g.child;for(var j=B.firstContext;j!==null;){if(j.context===c){if(g.tag===1){j=Wi(-1,o&-o),j.tag=2;var ue=g.updateQueue;if(ue!==null){ue=ue.shared;var we=ue.pending;we===null?j.next=j:(j.next=we.next,we.next=j),ue.pending=j}}g.lanes|=o,j=g.alternate,j!==null&&(j.lanes|=o),pu(g.return,o,i),B.lanes|=o;break}j=j.next}}else if(g.tag===10)A=g.type===i.type?null:g.child;else if(g.tag===18){if(A=g.return,A===null)throw Error(t(341));A.lanes|=o,B=A.alternate,B!==null&&(B.lanes|=o),pu(A,o,i),A=g.sibling}else A=g.child;if(A!==null)A.return=g;else for(A=g;A!==null;){if(A===i){A=null;break}if(g=A.sibling,g!==null){g.return=A.return,A=g;break}A=A.return}g=A}Nn(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Fs(i,o),f=ni(f),c=c(f),i.flags|=1,Nn(n,i,c,o),i.child;case 14:return c=i.type,f=hi(c,i.pendingProps),f=hi(c.type,f),qp(n,i,c,f,o);case 15:return Kp(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:hi(c,f),fl(n,i),i.tag=1,kn(c)?(n=!0,qo(i)):n=!1,Fs(i,o),Hp(i,c,f),Pu(i,c,f,o),Iu(null,i,c,!0,n,o);case 19:return rm(n,i,o);case 22:return Zp(n,i,o)}throw Error(t(156,i.tag))};function Cm(n,i){return No(n,i)}function E_(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(n,i,o,c){return new E_(n,i,o,c)}function ed(n){return n=n.prototype,!(!n||!n.isReactComponent)}function T_(n){if(typeof n=="function")return ed(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Y)return 11;if(n===he)return 14}return 2}function br(n,i){var o=n.alternate;return o===null?(o=si(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function El(n,i,o,c,f,g){var A=2;if(c=n,typeof n=="function")ed(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case k:return es(o.children,f,g,i);case z:A=8,f|=8;break;case C:return n=si(12,o,i,f|2),n.elementType=C,n.lanes=g,n;case K:return n=si(13,o,i,f),n.elementType=K,n.lanes=g,n;case re:return n=si(19,o,i,f),n.elementType=re,n.lanes=g,n;case le:return Tl(o,f,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case T:A=10;break e;case F:A=9;break e;case Y:A=11;break e;case he:A=14;break e;case oe:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=si(A,o,i,f),i.elementType=n,i.type=c,i.lanes=g,i}function es(n,i,o,c){return n=si(7,n,c,i),n.lanes=o,n}function Tl(n,i,o,c){return n=si(22,n,c,i),n.elementType=le,n.lanes=o,n.stateNode={isHidden:!1},n}function td(n,i,o){return n=si(6,n,null,i),n.lanes=o,n}function nd(n,i,o){return i=si(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function b_(n,i,o,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mn(0),this.expirationTimes=Mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function id(n,i,o,c,f,g,A,B,j){return n=new b_(n,i,o,B,j),i===1?(i=1,g===!0&&(i|=8)):i=0,g=si(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},gu(g),n}function A_(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function Rm(n){if(!n)return vr;n=n._reactInternals;e:{if(Mi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(kn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(kn(o))return ip(n,o,i)}return i}function Pm(n,i,o,c,f,g,A,B,j){return n=id(o,c,!0,n,f,g,A,B,j),n.context=Rm(null),o=n.current,c=Dn(),f=Er(o),g=Wi(c,f),g.callback=i??null,yr(o,g,f),n.current.lanes=f,dn(n,f,c),Bn(n,c),n}function bl(n,i,o,c){var f=i.current,g=Dn(),A=Er(f);return o=Rm(o),i.context===null?i.context=o:i.pendingContext=o,i=Wi(g,A),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=yr(f,i,A),n!==null&&(mi(n,f,A,g),il(n,f,A)),A}function Al(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Nm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function rd(n,i){Nm(n,i),(n=n.alternate)&&Nm(n,i)}function C_(){return null}var Dm=typeof reportError=="function"?reportError:function(n){console.error(n)};function sd(n){this._internalRoot=n}Cl.prototype.render=sd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));bl(n,i,null,null)},Cl.prototype.unmount=sd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Zr(function(){bl(null,n,null,null)}),i[zi]=null}};function Cl(n){this._internalRoot=n}Cl.prototype.unstable_scheduleHydration=function(n){if(n){var i=mf();n={blockedOn:null,target:n,priority:i};for(var o=0;o<hr.length&&i!==0&&i<hr[o].priority;o++);hr.splice(o,0,n),o===0&&_f(n)}};function ad(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Rl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Lm(){}function R_(n,i,o,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var ue=Al(A);g.call(ue)}}var A=Pm(i,c,n,0,null,!1,!1,"",Lm);return n._reactRootContainer=A,n[zi]=A.current,Da(n.nodeType===8?n.parentNode:n),Zr(),A}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var B=c;c=function(){var ue=Al(j);B.call(ue)}}var j=id(n,0,!1,null,null,!1,!1,"",Lm);return n._reactRootContainer=j,n[zi]=j.current,Da(n.nodeType===8?n.parentNode:n),Zr(function(){bl(i,j,o,c)}),j}function Pl(n,i,o,c,f){var g=o._reactRootContainer;if(g){var A=g;if(typeof f=="function"){var B=f;f=function(){var j=Al(A);B.call(j)}}bl(i,A,n,f)}else A=R_(o,i,n,f,c);return Al(A)}ff=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Et(i.pendingLanes);o!==0&&(hn(i,o|1),Bn(i,ne()),(Pt&6)===0&&(Gs=ne()+500,_r()))}break;case 13:Zr(function(){var c=ji(n,1);if(c!==null){var f=Dn();mi(c,n,1,f)}}),rd(n,1)}},Nc=function(n){if(n.tag===13){var i=ji(n,134217728);if(i!==null){var o=Dn();mi(i,n,134217728,o)}rd(n,134217728)}},pf=function(n){if(n.tag===13){var i=Er(n),o=ji(n,i);if(o!==null){var c=Dn();mi(o,n,i,c)}rd(n,i)}},mf=function(){return Rt},gf=function(n,i){var o=Rt;try{return Rt=n,i()}finally{Rt=o}},Le=function(n,i,o){switch(i){case"input":if(ht(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var f=$o(c);if(!f)throw Error(t(90));At(c),ht(c,f)}}}break;case"textarea":W(n,o);break;case"select":i=o.value,i!=null&&N(n,!!o.multiple,i,!1)}},zt=Zu,sn=Zr;var P_={usingClientEntryPoint:!1,Events:[Ua,Rs,$o,Fe,mt,Zu]},qa={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},N_={bundleType:qa.bundleType,version:qa.version,rendererPackageName:qa.rendererPackageName,rendererConfig:qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ro(n),n===null?null:n.stateNode},findFiberByHostInstance:qa.findFiberByHostInstance||C_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{ot=Nl.inject(N_),qe=Nl}catch{}}return zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P_,zn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ad(i))throw Error(t(200));return A_(n,i,null,o)},zn.createRoot=function(n,i){if(!ad(n))throw Error(t(299));var o=!1,c="",f=Dm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=id(n,1,!1,null,null,o,!1,c,f),n[zi]=i.current,Da(n.nodeType===8?n.parentNode:n),new sd(i)},zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ro(i),n=n===null?null:n.stateNode,n},zn.flushSync=function(n){return Zr(n)},zn.hydrate=function(n,i,o){if(!Rl(i))throw Error(t(200));return Pl(null,n,i,!0,o)},zn.hydrateRoot=function(n,i,o){if(!ad(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,f=!1,g="",A=Dm;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(A=o.onRecoverableError)),i=Pm(i,null,n,1,o??null,f,!1,g,A),n[zi]=i.current,Da(n),c)for(n=0;n<c.length;n++)o=c[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Cl(i)},zn.render=function(n,i,o){if(!Rl(i))throw Error(t(200));return Pl(null,n,i,!1,o)},zn.unmountComponentAtNode=function(n){if(!Rl(n))throw Error(t(40));return n._reactRootContainer?(Zr(function(){Pl(null,null,n,!1,function(){n._reactRootContainer=null,n[zi]=null})}),!0):!1},zn.unstable_batchedUpdates=Zu,zn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!Rl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Pl(n,i,o,!1,c)},zn.version="18.3.1-next-f1338f8080-20240426",zn}var Hm;function B_(){if(Hm)return cd.exports;Hm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),cd.exports=O_(),cd.exports}var Gm;function z_(){if(Gm)return Dl;Gm=1;var r=B_();return Dl.createRoot=r.createRoot,Dl.hydrateRoot=r.hydrateRoot,Dl}var H_=z_(),Za={},Vm;function G_(){if(Vm)return Za;Vm=1,Object.defineProperty(Za,"__esModule",{value:!0}),Za.parse=u,Za.serialize=p;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const m=function(){};return m.prototype=Object.create(null),m})();function u(m,y){const w=new l,E=m.length;if(E<2)return w;const S=(y==null?void 0:y.decode)||_;let v=0;do{const P=m.indexOf("=",v);if(P===-1)break;const I=m.indexOf(";",v),R=I===-1?E:I;if(P>R){v=m.lastIndexOf(";",P-1)+1;continue}const D=d(m,v,P),U=h(m,P,D),k=m.slice(D,U);if(w[k]===void 0){let z=d(m,P+1,R),C=h(m,R,z);const T=S(m.slice(z,C));w[k]=T}v=R+1}while(v<E);return w}function d(m,y,w){do{const E=m.charCodeAt(y);if(E!==32&&E!==9)return y}while(++y<w);return w}function h(m,y,w){for(;y>w;){const E=m.charCodeAt(--y);if(E!==32&&E!==9)return y+1}return w}function p(m,y,w){const E=(w==null?void 0:w.encode)||encodeURIComponent;if(!r.test(m))throw new TypeError(`argument name is invalid: ${m}`);const S=E(y);if(!e.test(S))throw new TypeError(`argument val is invalid: ${y}`);let v=m+"="+S;if(!w)return v;if(w.maxAge!==void 0){if(!Number.isInteger(w.maxAge))throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);v+="; Max-Age="+w.maxAge}if(w.domain){if(!t.test(w.domain))throw new TypeError(`option domain is invalid: ${w.domain}`);v+="; Domain="+w.domain}if(w.path){if(!s.test(w.path))throw new TypeError(`option path is invalid: ${w.path}`);v+="; Path="+w.path}if(w.expires){if(!x(w.expires)||!Number.isFinite(w.expires.valueOf()))throw new TypeError(`option expires is invalid: ${w.expires}`);v+="; Expires="+w.expires.toUTCString()}if(w.httpOnly&&(v+="; HttpOnly"),w.secure&&(v+="; Secure"),w.partitioned&&(v+="; Partitioned"),w.priority)switch(typeof w.priority=="string"?w.priority.toLowerCase():void 0){case"low":v+="; Priority=Low";break;case"medium":v+="; Priority=Medium";break;case"high":v+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${w.priority}`)}if(w.sameSite)switch(typeof w.sameSite=="string"?w.sameSite.toLowerCase():w.sameSite){case!0:case"strict":v+="; SameSite=Strict";break;case"lax":v+="; SameSite=Lax";break;case"none":v+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${w.sameSite}`)}return v}function _(m){if(m.indexOf("%")===-1)return m;try{return decodeURIComponent(m)}catch{return m}}function x(m){return a.call(m)==="[object Date]"}return Za}G_();var jm="popstate";function V_(r={}){function e(s,a){let{pathname:l,search:u,hash:d}=s.location;return qd("",{pathname:l,search:u,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(s,a){return typeof a=="string"?a:oo(a)}return W_(e,t,null,r)}function Yt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Ii(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function j_(){return Math.random().toString(36).substring(2,10)}function Wm(r,e){return{usr:r.state,key:r.key,idx:e}}function qd(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?ga(e):e,state:t,key:e&&e.key||s||j_()}}function oo({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function ga(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function W_(r,e,t,s={}){let{window:a=document.defaultView,v5Compat:l=!1}=s,u=a.history,d="POP",h=null,p=_();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function _(){return(u.state||{idx:null}).idx}function x(){d="POP";let S=_(),v=S==null?null:S-p;p=S,h&&h({action:d,location:E.location,delta:v})}function m(S,v){d="PUSH";let P=qd(E.location,S,v);p=_()+1;let I=Wm(P,p),R=E.createHref(P);try{u.pushState(I,"",R)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;a.location.assign(R)}l&&h&&h({action:d,location:E.location,delta:1})}function y(S,v){d="REPLACE";let P=qd(E.location,S,v);p=_();let I=Wm(P,p),R=E.createHref(P);u.replaceState(I,"",R),l&&h&&h({action:d,location:E.location,delta:0})}function w(S){return X_(S)}let E={get action(){return d},get location(){return r(a,u)},listen(S){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(jm,x),h=S,()=>{a.removeEventListener(jm,x),h=null}},createHref(S){return e(a,S)},createURL:w,encodeLocation(S){let v=w(S);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:m,replace:y,go(S){return u.go(S)}};return E}function X_(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Yt(t,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:oo(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function r0(r,e,t="/"){return $_(r,e,t,!1)}function $_(r,e,t,s){let a=typeof e=="string"?ga(e):e,l=rr(a.pathname||"/",t);if(l==null)return null;let u=s0(r);Y_(u);let d=null;for(let h=0;d==null&&h<u.length;++h){let p=sx(l);d=ix(u[h],p,s)}return d}function s0(r,e=[],t=[],s=""){let a=(l,u,d)=>{let h={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};h.relativePath.startsWith("/")&&(Yt(h.relativePath.startsWith(s),`Absolute route path "${h.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(s.length));let p=nr([s,h.relativePath]),_=t.concat(h);l.children&&l.children.length>0&&(Yt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),s0(l.children,e,_,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:tx(p,l.index),routesMeta:_})};return r.forEach((l,u)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,u);else for(let h of a0(l.path))a(l,u,h)}),e}function a0(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return a?[l,""]:[l];let u=a0(s.join("/")),d=[];return d.push(...u.map(h=>h===""?l:[l,h].join("/"))),a&&d.push(...u),d.map(h=>r.startsWith("/")&&h===""?"/":h)}function Y_(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:nx(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var q_=/^:[\w-]+$/,K_=3,Z_=2,Q_=1,J_=10,ex=-2,Xm=r=>r==="*";function tx(r,e){let t=r.split("/"),s=t.length;return t.some(Xm)&&(s+=ex),e&&(s+=Z_),t.filter(a=>!Xm(a)).reduce((a,l)=>a+(q_.test(l)?K_:l===""?Q_:J_),s)}function nx(r,e){return r.length===e.length&&r.slice(0,-1).every((s,a)=>s===e[a])?r[r.length-1]-e[e.length-1]:0}function ix(r,e,t=!1){let{routesMeta:s}=r,a={},l="/",u=[];for(let d=0;d<s.length;++d){let h=s[d],p=d===s.length-1,_=l==="/"?e:e.slice(l.length)||"/",x=gc({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},_),m=h.route;if(!x&&p&&t&&!s[s.length-1].route.index&&(x=gc({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},_)),!x)return null;Object.assign(a,x.params),u.push({params:a,pathname:nr([l,x.pathname]),pathnameBase:cx(nr([l,x.pathnameBase])),route:m}),x.pathnameBase!=="/"&&(l=nr([l,x.pathnameBase]))}return u}function gc(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=rx(r.path,r.caseSensitive,r.end),a=e.match(t);if(!a)return null;let l=a[0],u=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:s.reduce((p,{paramName:_,isOptional:x},m)=>{if(_==="*"){let w=d[m]||"";u=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const y=d[m];return x&&!y?p[_]=void 0:p[_]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:r}}function rx(r,e=!1,t=!0){Ii(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],a="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,h)=>(s.push({paramName:d,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),a+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":r!==""&&r!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),s]}function sx(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ii(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function rr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function ax(r,e="/"){let{pathname:t,search:s="",hash:a=""}=typeof r=="string"?ga(r):r;return{pathname:t?t.startsWith("/")?t:ox(t,e):e,search:ux(s),hash:dx(a)}}function ox(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function hd(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function lx(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function o0(r){let e=lx(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function l0(r,e,t,s=!1){let a;typeof r=="string"?a=ga(r):(a={...r},Yt(!a.pathname||!a.pathname.includes("?"),hd("?","pathname","search",a)),Yt(!a.pathname||!a.pathname.includes("#"),hd("#","pathname","hash",a)),Yt(!a.search||!a.search.includes("#"),hd("#","search","hash",a)));let l=r===""||a.pathname==="",u=l?"/":a.pathname,d;if(u==null)d=t;else{let x=e.length-1;if(!s&&u.startsWith("..")){let m=u.split("/");for(;m[0]==="..";)m.shift(),x-=1;a.pathname=m.join("/")}d=x>=0?e[x]:"/"}let h=ax(a,d),p=u&&u!=="/"&&u.endsWith("/"),_=(l||u===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||_)&&(h.pathname+="/"),h}var nr=r=>r.join("/").replace(/\/\/+/g,"/"),cx=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),ux=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,dx=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function hx(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var c0=["POST","PUT","PATCH","DELETE"];new Set(c0);var fx=["GET",...c0];new Set(fx);var va=ee.createContext(null);va.displayName="DataRouter";var Mc=ee.createContext(null);Mc.displayName="DataRouterState";var u0=ee.createContext({isTransitioning:!1});u0.displayName="ViewTransition";var px=ee.createContext(new Map);px.displayName="Fetchers";var mx=ee.createContext(null);mx.displayName="Await";var ki=ee.createContext(null);ki.displayName="Navigation";var po=ee.createContext(null);po.displayName="Location";var sr=ee.createContext({outlet:null,matches:[],isDataRoute:!1});sr.displayName="Route";var zh=ee.createContext(null);zh.displayName="RouteError";function gx(r,{relative:e}={}){Yt(mo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=ee.useContext(ki),{hash:a,pathname:l,search:u}=vo(r,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:nr([t,l])),s.createHref({pathname:d,search:u,hash:a})}function mo(){return ee.useContext(po)!=null}function _s(){return Yt(mo(),"useLocation() may be used only in the context of a <Router> component."),ee.useContext(po).location}var d0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function h0(r){ee.useContext(ki).static||ee.useLayoutEffect(r)}function go(){let{isDataRoute:r}=ee.useContext(sr);return r?Rx():vx()}function vx(){Yt(mo(),"useNavigate() may be used only in the context of a <Router> component.");let r=ee.useContext(va),{basename:e,navigator:t}=ee.useContext(ki),{matches:s}=ee.useContext(sr),{pathname:a}=_s(),l=JSON.stringify(o0(s)),u=ee.useRef(!1);return h0(()=>{u.current=!0}),ee.useCallback((h,p={})=>{if(Ii(u.current,d0),!u.current)return;if(typeof h=="number"){t.go(h);return}let _=l0(h,JSON.parse(l),a,p.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:nr([e,_.pathname])),(p.replace?t.replace:t.push)(_,p.state,p)},[e,t,l,a,r])}ee.createContext(null);function vo(r,{relative:e}={}){let{matches:t}=ee.useContext(sr),{pathname:s}=_s(),a=JSON.stringify(o0(t));return ee.useMemo(()=>l0(r,JSON.parse(a),s,e==="path"),[r,a,s,e])}function _x(r,e){return f0(r,e)}function f0(r,e,t,s){var v;Yt(mo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=ee.useContext(ki),{matches:l}=ee.useContext(sr),u=l[l.length-1],d=u?u.params:{},h=u?u.pathname:"/",p=u?u.pathnameBase:"/",_=u&&u.route;{let P=_&&_.path||"";p0(h,!_||P.endsWith("*")||P.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P==="/"?"*":`${P}/*`}">.`)}let x=_s(),m;if(e){let P=typeof e=="string"?ga(e):e;Yt(p==="/"||((v=P.pathname)==null?void 0:v.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${P.pathname}" was given in the \`location\` prop.`),m=P}else m=x;let y=m.pathname||"/",w=y;if(p!=="/"){let P=p.replace(/^\//,"").split("/");w="/"+y.replace(/^\//,"").split("/").slice(P.length).join("/")}let E=r0(r,{pathname:w});Ii(_||E!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Ii(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=wx(E&&E.map(P=>Object.assign({},P,{params:Object.assign({},d,P.params),pathname:nr([p,a.encodeLocation?a.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?p:nr([p,a.encodeLocation?a.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),l,t,s);return e&&S?ee.createElement(po.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},S):S}function xx(){let r=Cx(),e=hx(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},u=null;return console.error("Error handled by React Router default ErrorBoundary:",r),u=ee.createElement(ee.Fragment,null,ee.createElement("p",null,"💿 Hey developer 👋"),ee.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ee.createElement("code",{style:l},"ErrorBoundary")," or"," ",ee.createElement("code",{style:l},"errorElement")," prop on your route.")),ee.createElement(ee.Fragment,null,ee.createElement("h2",null,"Unexpected Application Error!"),ee.createElement("h3",{style:{fontStyle:"italic"}},e),t?ee.createElement("pre",{style:a},t):null,u)}var yx=ee.createElement(xx,null),Sx=class extends ee.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?ee.createElement(sr.Provider,{value:this.props.routeContext},ee.createElement(zh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Mx({routeContext:r,match:e,children:t}){let s=ee.useContext(va);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),ee.createElement(sr.Provider,{value:r},t)}function wx(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let a=r,l=t==null?void 0:t.errors;if(l!=null){let h=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);Yt(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,h+1))}let u=!1,d=-1;if(t)for(let h=0;h<a.length;h++){let p=a[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=h),p.route.id){let{loaderData:_,errors:x}=t,m=p.route.loader&&!_.hasOwnProperty(p.route.id)&&(!x||x[p.route.id]===void 0);if(p.route.lazy||m){u=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((h,p,_)=>{let x,m=!1,y=null,w=null;t&&(x=l&&p.route.id?l[p.route.id]:void 0,y=p.route.errorElement||yx,u&&(d<0&&_===0?(p0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),m=!0,w=null):d===_&&(m=!0,w=p.route.hydrateFallbackElement||null)));let E=e.concat(a.slice(0,_+1)),S=()=>{let v;return x?v=y:m?v=w:p.route.Component?v=ee.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=h,ee.createElement(Mx,{match:p,routeContext:{outlet:h,matches:E,isDataRoute:t!=null},children:v})};return t&&(p.route.ErrorBoundary||p.route.errorElement||_===0)?ee.createElement(Sx,{location:t.location,revalidation:t.revalidation,component:y,error:x,children:S(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):S()},null)}function Hh(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ex(r){let e=ee.useContext(va);return Yt(e,Hh(r)),e}function Tx(r){let e=ee.useContext(Mc);return Yt(e,Hh(r)),e}function bx(r){let e=ee.useContext(sr);return Yt(e,Hh(r)),e}function Gh(r){let e=bx(r),t=e.matches[e.matches.length-1];return Yt(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function Ax(){return Gh("useRouteId")}function Cx(){var s;let r=ee.useContext(zh),e=Tx("useRouteError"),t=Gh("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function Rx(){let{router:r}=Ex("useNavigate"),e=Gh("useNavigate"),t=ee.useRef(!1);return h0(()=>{t.current=!0}),ee.useCallback(async(a,l={})=>{Ii(t.current,d0),t.current&&(typeof a=="number"?r.navigate(a):await r.navigate(a,{fromRouteId:e,...l}))},[r,e])}var $m={};function p0(r,e,t){!e&&!$m[r]&&($m[r]=!0,Ii(!1,t))}ee.memo(Px);function Px({routes:r,future:e,state:t}){return f0(r,void 0,t,e)}function sa(r){Yt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Nx({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:a,static:l=!1}){Yt(!mo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=r.replace(/^\/*/,"/"),d=ee.useMemo(()=>({basename:u,navigator:a,static:l,future:{}}),[u,a,l]);typeof t=="string"&&(t=ga(t));let{pathname:h="/",search:p="",hash:_="",state:x=null,key:m="default"}=t,y=ee.useMemo(()=>{let w=rr(h,u);return w==null?null:{location:{pathname:w,search:p,hash:_,state:x,key:m},navigationType:s}},[u,h,p,_,x,m,s]);return Ii(y!=null,`<Router basename="${u}"> is not able to match the URL "${h}${p}${_}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:ee.createElement(ki.Provider,{value:d},ee.createElement(po.Provider,{children:e,value:y}))}function Dx({children:r,location:e}){return _x(Kd(r),e)}function Kd(r,e=[]){let t=[];return ee.Children.forEach(r,(s,a)=>{if(!ee.isValidElement(s))return;let l=[...e,a];if(s.type===ee.Fragment){t.push.apply(t,Kd(s.props.children,l));return}Yt(s.type===sa,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Yt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let u={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(u.children=Kd(s.props.children,l)),t.push(u)}),t}var sc="get",ac="application/x-www-form-urlencoded";function wc(r){return r!=null&&typeof r.tagName=="string"}function Lx(r){return wc(r)&&r.tagName.toLowerCase()==="button"}function Ix(r){return wc(r)&&r.tagName.toLowerCase()==="form"}function Ux(r){return wc(r)&&r.tagName.toLowerCase()==="input"}function kx(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Fx(r,e){return r.button===0&&(!e||e==="_self")&&!kx(r)}var Ll=null;function Ox(){if(Ll===null)try{new FormData(document.createElement("form"),0),Ll=!1}catch{Ll=!0}return Ll}var Bx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function fd(r){return r!=null&&!Bx.has(r)?(Ii(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ac}"`),null):r}function zx(r,e){let t,s,a,l,u;if(Ix(r)){let d=r.getAttribute("action");s=d?rr(d,e):null,t=r.getAttribute("method")||sc,a=fd(r.getAttribute("enctype"))||ac,l=new FormData(r)}else if(Lx(r)||Ux(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=r.getAttribute("formaction")||d.getAttribute("action");if(s=h?rr(h,e):null,t=r.getAttribute("formmethod")||d.getAttribute("method")||sc,a=fd(r.getAttribute("formenctype"))||fd(d.getAttribute("enctype"))||ac,l=new FormData(d,r),!Ox()){let{name:p,type:_,value:x}=r;if(_==="image"){let m=p?`${p}.`:"";l.append(`${m}x`,"0"),l.append(`${m}y`,"0")}else p&&l.append(p,x)}}else{if(wc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=sc,s=null,a=ac,u=r}return l&&a==="text/plain"&&(u=l,l=void 0),{action:s,method:t.toLowerCase(),encType:a,formData:l,body:u}}function Vh(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function Hx(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Gx(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Vx(r,e,t){let s=await Promise.all(r.map(async a=>{let l=e.routes[a.route.id];if(l){let u=await Hx(l,t);return u.links?u.links():[]}return[]}));return $x(s.flat(1).filter(Gx).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Ym(r,e,t,s,a,l){let u=(h,p)=>t[p]?h.route.id!==t[p].route.id:!0,d=(h,p)=>{var _;return t[p].pathname!==h.pathname||((_=t[p].route.path)==null?void 0:_.endsWith("*"))&&t[p].params["*"]!==h.params["*"]};return l==="assets"?e.filter((h,p)=>u(h,p)||d(h,p)):l==="data"?e.filter((h,p)=>{var x;let _=s.routes[h.route.id];if(!_||!_.hasLoader)return!1;if(u(h,p)||d(h,p))return!0;if(h.route.shouldRevalidate){let m=h.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((x=t[0])==null?void 0:x.params)||{},nextUrl:new URL(r,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function jx(r,e,{includeHydrateFallback:t}={}){return Wx(r.map(s=>{let a=e.routes[s.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function Wx(r){return[...new Set(r)]}function Xx(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function $x(r,e){let t=new Set;return new Set(e),r.reduce((s,a)=>{let l=JSON.stringify(Xx(a));return t.has(l)||(t.add(l),s.push({key:l,link:a})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Yx=new Set([100,101,204,205]);function qx(r,e){let t=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t.pathname==="/"?t.pathname="_root.data":e&&rr(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function m0(){let r=ee.useContext(va);return Vh(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Kx(){let r=ee.useContext(Mc);return Vh(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var jh=ee.createContext(void 0);jh.displayName="FrameworkContext";function g0(){let r=ee.useContext(jh);return Vh(r,"You must render this element inside a <HydratedRouter> element"),r}function Zx(r,e){let t=ee.useContext(jh),[s,a]=ee.useState(!1),[l,u]=ee.useState(!1),{onFocus:d,onBlur:h,onMouseEnter:p,onMouseLeave:_,onTouchStart:x}=e,m=ee.useRef(null);ee.useEffect(()=>{if(r==="render"&&u(!0),r==="viewport"){let E=v=>{v.forEach(P=>{u(P.isIntersecting)})},S=new IntersectionObserver(E,{threshold:.5});return m.current&&S.observe(m.current),()=>{S.disconnect()}}},[r]),ee.useEffect(()=>{if(s){let E=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(E)}}},[s]);let y=()=>{a(!0)},w=()=>{a(!1),u(!1)};return t?r!=="intent"?[l,m,{}]:[l,m,{onFocus:Qa(d,y),onBlur:Qa(h,w),onMouseEnter:Qa(p,y),onMouseLeave:Qa(_,w),onTouchStart:Qa(x,y)}]:[!1,m,{}]}function Qa(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function Qx({page:r,...e}){let{router:t}=m0(),s=ee.useMemo(()=>r0(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?ee.createElement(ey,{page:r,matches:s,...e}):null}function Jx(r){let{manifest:e,routeModules:t}=g0(),[s,a]=ee.useState([]);return ee.useEffect(()=>{let l=!1;return Vx(r,e,t).then(u=>{l||a(u)}),()=>{l=!0}},[r,e,t]),s}function ey({page:r,matches:e,...t}){let s=_s(),{manifest:a,routeModules:l}=g0(),{basename:u}=m0(),{loaderData:d,matches:h}=Kx(),p=ee.useMemo(()=>Ym(r,e,h,a,s,"data"),[r,e,h,a,s]),_=ee.useMemo(()=>Ym(r,e,h,a,s,"assets"),[r,e,h,a,s]),x=ee.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let w=new Set,E=!1;if(e.forEach(v=>{var I;let P=a.routes[v.route.id];!P||!P.hasLoader||(!p.some(R=>R.route.id===v.route.id)&&v.route.id in d&&((I=l[v.route.id])!=null&&I.shouldRevalidate)||P.hasClientLoader?E=!0:w.add(v.route.id))}),w.size===0)return[];let S=qx(r,u);return E&&w.size>0&&S.searchParams.set("_routes",e.filter(v=>w.has(v.route.id)).map(v=>v.route.id).join(",")),[S.pathname+S.search]},[u,d,s,a,p,e,r,l]),m=ee.useMemo(()=>jx(_,a),[_,a]),y=Jx(_);return ee.createElement(ee.Fragment,null,x.map(w=>ee.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...t})),m.map(w=>ee.createElement("link",{key:w,rel:"modulepreload",href:w,...t})),y.map(({key:w,link:E})=>ee.createElement("link",{key:w,...E})))}function ty(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var v0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{v0&&(window.__reactRouterVersion="7.6.1")}catch{}function ny({basename:r,children:e,window:t}){let s=ee.useRef();s.current==null&&(s.current=V_({window:t,v5Compat:!0}));let a=s.current,[l,u]=ee.useState({action:a.action,location:a.location}),d=ee.useCallback(h=>{ee.startTransition(()=>u(h))},[u]);return ee.useLayoutEffect(()=>a.listen(d),[a,d]),ee.createElement(Nx,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:a})}var _0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pi=ee.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:a,reloadDocument:l,replace:u,state:d,target:h,to:p,preventScrollReset:_,viewTransition:x,...m},y){let{basename:w}=ee.useContext(ki),E=typeof p=="string"&&_0.test(p),S,v=!1;if(typeof p=="string"&&E&&(S=p,v0))try{let C=new URL(window.location.href),T=p.startsWith("//")?new URL(C.protocol+p):new URL(p),F=rr(T.pathname,w);T.origin===C.origin&&F!=null?p=F+T.search+T.hash:v=!0}catch{Ii(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let P=gx(p,{relative:a}),[I,R,D]=Zx(s,m),U=ay(p,{replace:u,state:d,target:h,preventScrollReset:_,relative:a,viewTransition:x});function k(C){e&&e(C),C.defaultPrevented||U(C)}let z=ee.createElement("a",{...m,...D,href:S||P,onClick:v||l?e:k,ref:ty(y,R),target:h,"data-discover":!E&&t==="render"?"true":void 0});return I&&!E?ee.createElement(ee.Fragment,null,z,ee.createElement(Qx,{page:P})):z});Pi.displayName="Link";var iy=ee.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:a=!1,style:l,to:u,viewTransition:d,children:h,...p},_){let x=vo(u,{relative:p.relative}),m=_s(),y=ee.useContext(Mc),{navigator:w,basename:E}=ee.useContext(ki),S=y!=null&&dy(x)&&d===!0,v=w.encodeLocation?w.encodeLocation(x).pathname:x.pathname,P=m.pathname,I=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;t||(P=P.toLowerCase(),I=I?I.toLowerCase():null,v=v.toLowerCase()),I&&E&&(I=rr(I,E)||I);const R=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let D=P===v||!a&&P.startsWith(v)&&P.charAt(R)==="/",U=I!=null&&(I===v||!a&&I.startsWith(v)&&I.charAt(v.length)==="/"),k={isActive:D,isPending:U,isTransitioning:S},z=D?e:void 0,C;typeof s=="function"?C=s(k):C=[s,D?"active":null,U?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let T=typeof l=="function"?l(k):l;return ee.createElement(Pi,{...p,"aria-current":z,className:C,ref:_,style:T,to:u,viewTransition:d},typeof h=="function"?h(k):h)});iy.displayName="NavLink";var ry=ee.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:a,state:l,method:u=sc,action:d,onSubmit:h,relative:p,preventScrollReset:_,viewTransition:x,...m},y)=>{let w=cy(),E=uy(d,{relative:p}),S=u.toLowerCase()==="get"?"get":"post",v=typeof d=="string"&&_0.test(d),P=I=>{if(h&&h(I),I.defaultPrevented)return;I.preventDefault();let R=I.nativeEvent.submitter,D=(R==null?void 0:R.getAttribute("formmethod"))||u;w(R||I.currentTarget,{fetcherKey:e,method:D,navigate:t,replace:a,state:l,relative:p,preventScrollReset:_,viewTransition:x})};return ee.createElement("form",{ref:y,method:S,action:E,onSubmit:s?h:P,...m,"data-discover":!v&&r==="render"?"true":void 0})});ry.displayName="Form";function sy(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function x0(r){let e=ee.useContext(va);return Yt(e,sy(r)),e}function ay(r,{target:e,replace:t,state:s,preventScrollReset:a,relative:l,viewTransition:u}={}){let d=go(),h=_s(),p=vo(r,{relative:l});return ee.useCallback(_=>{if(Fx(_,e)){_.preventDefault();let x=t!==void 0?t:oo(h)===oo(p);d(r,{replace:x,state:s,preventScrollReset:a,relative:l,viewTransition:u})}},[h,d,p,t,s,e,r,a,l,u])}var oy=0,ly=()=>`__${String(++oy)}__`;function cy(){let{router:r}=x0("useSubmit"),{basename:e}=ee.useContext(ki),t=Ax();return ee.useCallback(async(s,a={})=>{let{action:l,method:u,encType:d,formData:h,body:p}=zx(s,e);if(a.navigate===!1){let _=a.fetcherKey||ly();await r.fetch(_,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:h,body:p,formMethod:a.method||u,formEncType:a.encType||d,flushSync:a.flushSync})}else await r.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:h,body:p,formMethod:a.method||u,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,e,t])}function uy(r,{relative:e}={}){let{basename:t}=ee.useContext(ki),s=ee.useContext(sr);Yt(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),l={...vo(r||".",{relative:e})},u=_s();if(r==null){l.search=u.search;let d=new URLSearchParams(l.search),h=d.getAll("index");if(h.some(_=>_==="")){d.delete("index"),h.filter(x=>x).forEach(x=>d.append("index",x));let _=d.toString();l.search=_?`?${_}`:""}}return(!r||r===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:nr([t,l.pathname])),oo(l)}function dy(r,e={}){let t=ee.useContext(u0);Yt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=x0("useViewTransitionState"),a=vo(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=rr(t.currentLocation.pathname,s)||t.currentLocation.pathname,u=rr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return gc(a.pathname,u)!=null||gc(a.pathname,l)!=null}[...Yx];/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),fy=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),qm=r=>{const e=fy(r);return e.charAt(0).toUpperCase()+e.slice(1)},y0=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim(),py=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var my={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=ee.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:a="",children:l,iconNode:u,...d},h)=>ee.createElement("svg",{ref:h,...my,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:y0("lucide",a),...!l&&!py(d)&&{"aria-hidden":"true"},...d},[...u.map(([p,_])=>ee.createElement(p,_)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=(r,e)=>{const t=ee.forwardRef(({className:s,...a},l)=>ee.createElement(gy,{ref:l,iconNode:e,className:y0(`lucide-${hy(qm(r))}`,`lucide-${r}`,s),...a}));return t.displayName=qm(r),t};/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Wh=Ot("arrow-left",vy);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],xy=Ot("award",_y);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}]],Sy=Ot("badge",yy);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],wy=Ot("chart-column",My);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ty=Ot("check",Ey);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],_o=Ot("circle-check-big",by);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Cy=Ot("circle",Ay);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],Py=Ot("crown",Ry);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]],Dy=Ot("droplets",Ny);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],Iy=Ot("flame",Ly);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],ky=Ot("globe",Uy);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],ps=Ot("leaf",Fy);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],By=Ot("moon",Oy);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],S0=Ot("plus",zy);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Gy=Ot("settings",Hy);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],jy=Ot("shopping-cart",Vy);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Xy=Ot("sparkles",Wy);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],oc=Ot("star",$y);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],qy=Ot("sun",Yy);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],M0=Ot("target",Ky);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Qy=Ot("trash-2",Zy);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]],eS=Ot("tree-pine",Jy);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],nS=Ot("trending-up",tS);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],rS=Ot("trophy",iS);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],w0=Ot("user",sS);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],oS=Ot("users",aS);/**
 * @license lucide-react v0.507.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],cS=Ot("zap",lS),js=({icon:r,title:e,description:t})=>{const s=document.documentElement.classList.contains("dark");return M.jsxs("div",{className:`${s?"bg-gray-800/95 hover:bg-gray-700/95 border-gray-700":"bg-white/95 hover:bg-gray-50/95 border-emerald-100"} backdrop-blur-sm rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-200 hover:shadow-xl border`,children:[M.jsx("div",{className:"text-emerald-500 mb-4",children:r}),M.jsx("h3",{className:`text-xl font-semibold ${s?"text-white":"text-gray-800"} mb-2`,children:e}),M.jsx("p",{className:s?"text-gray-300":"text-gray-600",children:t})]})},uS=()=>{const[r,e]=ee.useState(!1),t=()=>{e(!r),r?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark")};return M.jsxs("div",{className:`min-h-screen dark-mode-transition ${r?"dark bg-gray-900":"bg-gradient-to-br from-emerald-100 via-green-50 to-emerald-100"}`,children:[M.jsx("button",{onClick:t,className:"fixed top-4 right-4 z-50 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200",children:r?M.jsx(qy,{className:"w-6 h-6 text-yellow-300"}):M.jsx(By,{className:"w-6 h-6 text-gray-700"})}),M.jsxs("div",{className:"relative overflow-hidden",children:[M.jsx("div",{className:`absolute inset-0 ${r?"bg-emerald-900/20":"bg-gradient-to-br from-emerald-600/20 to-green-500/20"} z-0`}),M.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10",children:M.jsxs("div",{className:"text-center space-y-8",children:[M.jsx("div",{className:"flex justify-center",children:M.jsx("div",{className:`${r?"bg-white/10":"bg-white/90"} backdrop-blur-sm p-3 rounded-full shadow-lg`,children:M.jsx(ps,{className:`h-12 w-12 ${r?"text-emerald-400":"text-emerald-500"} animate-bounce`})})}),M.jsxs("h1",{className:`text-5xl md:text-6xl font-bold ${r?"text-white":"text-gray-800"}`,children:["Welcome to ",M.jsx("span",{className:"text-emerald-500",children:"EcoPlay"})]}),M.jsx("p",{className:`text-xl md:text-2xl ${r?"text-gray-300":"text-gray-600"} max-w-3xl mx-auto`,children:"Turn your everyday eco-friendly actions into a rewarding journey. Track, compete, and make a real impact on our planet."}),M.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[M.jsx(Pi,{to:"/dashboard",className:"inline-flex items-center px-8 py-4 rounded-full bg-emerald-500 text-white font-semibold text-lg shadow-lg hover:bg-emerald-600 transform hover:scale-105 transition-all duration-200",children:"Start Your Eco Journey →"}),M.jsx("a",{href:"#learn-more",className:"inline-flex items-center px-8 py-4 rounded-full bg-white text-emerald-600 font-semibold text-lg shadow-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200",children:"Learn More ↓"})]})]})})]}),M.jsx("div",{id:"learn-more",className:`py-20 ${r?"bg-gray-800":"bg-white"}`,children:M.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[M.jsxs("div",{className:"text-center mb-16",children:[M.jsx("h2",{className:`text-4xl font-bold ${r?"text-white":"text-gray-800"} mb-4`,children:"Why Choose EcoPlay?"}),M.jsx("p",{className:`text-xl ${r?"text-gray-300":"text-gray-600"}`,children:"Gamified sustainability that makes a real difference"})]}),M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[M.jsx(js,{icon:M.jsx(eS,{className:"h-8 w-8"}),title:"Virtual Garden",description:"Watch your garden grow as you complete eco-friendly actions. Unlock new plants and customize your space."}),M.jsx(js,{icon:M.jsx(ky,{className:"h-8 w-8"}),title:"Real Impact",description:"Track your carbon footprint reduction and see the tangible impact of your daily choices."}),M.jsx(js,{icon:M.jsx(oS,{className:"h-8 w-8"}),title:"Community",description:"Join a community of eco-warriors, share achievements, and participate in group challenges."}),M.jsx(js,{icon:M.jsx(Sy,{className:"h-8 w-8"}),title:"Achievements",description:"Earn badges and rewards for consistent eco-friendly actions and milestone accomplishments."}),M.jsx(js,{icon:M.jsx(_o,{className:"h-8 w-8"}),title:"Daily Tasks",description:"Complete simple daily tasks that contribute to a healthier planet and earn points."}),M.jsx(js,{icon:M.jsx(ps,{className:"h-8 w-8"}),title:"Progress Tracking",description:"Visualize your journey with detailed statistics and progress reports."})]})]})}),M.jsx("div",{className:`${r?"bg-gradient-to-br from-emerald-800 to-green-900":"bg-gradient-to-br from-emerald-600 to-green-500"} py-20`,children:M.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[M.jsx("h2",{className:"text-3xl font-bold text-white mb-8",children:"Ready to Make a Difference?"}),M.jsx("p",{className:"text-xl text-emerald-50 mb-12",children:"Join thousands of eco-warriors who are already making our planet greener, one action at a time."}),M.jsx(Pi,{to:"/dashboard",className:"inline-flex items-center px-8 py-4 rounded-full bg-white text-emerald-600 font-semibold text-lg shadow-lg hover:bg-emerald-50 transform hover:scale-105 transition-all duration-200",children:"Get Started Now →"})]})})]})},lo={transport:{car:.17,bus:.089,train:.041,walk:0,bike:0},energy:{electricity:.385,naturalGas:.203},waste:{plastic:6,paper:.95,glass:.28},food:{meatMeal:3.6,dairyMeal:1.9}},dS=(r,e,t="car")=>{const s=lo.transport[t]*e,a=lo.transport[r]*e;return Math.max(0,s-a)},hS=(r,e)=>lo.energy[r]*e,fS=(r,e)=>lo.waste[r]*e,pS=r=>lo.food[r],mS=(r,e,t)=>{let s=0,a=0;switch(r){case"transport":s=dS(e,t);break;case"energy":a=t,s=hS("electricity",t);break;case"waste":s=fS(e,t);break;case"food":s=pS(e);break}return{co2Saved:Number(s.toFixed(2)),energySaved:Number(a.toFixed(2))}},Xh="ecoplay_user_data",gS=365,ao=r=>{try{const e={...r,dailyData:r.dailyData.sort((t,s)=>new Date(s.date)-new Date(t.date)).slice(0,gS)};localStorage.setItem(Xh,JSON.stringify(e))}catch(e){console.error("Error saving to localStorage:",e)}},Jn=()=>{try{const r=localStorage.getItem(Xh);return r?JSON.parse(r):null}catch(r){return console.error("Error loading from localStorage:",r),null}},vS=()=>{try{localStorage.removeItem(Xh)}catch(r){console.error("Error clearing localStorage:",r)}},us=(r,e,t)=>{if(t==="imperial")switch(e){case"co2":return`${(parseFloat(r)*2.20462).toFixed(1)}lbs`;case"distance":return`${(parseFloat(r)*.621371).toFixed(1)}mi`;case"water":return`${(parseFloat(r)*.264172).toFixed(1)}gal`;default:return r}return e==="co2"?`${r}kg`:e==="water"?`${r}L`:e==="distance"?`${r}km`:r},pd=({icon:r,value:e,label:t,color:s,units:a})=>{const l=e.match(/^([\d.]+)(.+)$/);if(l){const[,d,h]=l;h==="kg"?e=us(d,"co2",a):h==="km"?e=us(d,"distance",a):h==="L"&&(e=us(d,"water",a))}const u={green:"border-green-200 hover:border-green-300",blue:"border-blue-200 hover:border-blue-300",yellow:"border-yellow-200 hover:border-yellow-300"};return M.jsxs("div",{className:`bg-gray-50 p-4 rounded-xl text-center border-2 ${u[s]} hover:shadow-md transition-all duration-200 cursor-pointer transform hover:-translate-y-1`,children:[M.jsx("div",{className:"flex justify-center mb-2",children:r}),M.jsx("div",{className:"text-2xl font-bold text-gray-800",children:e}),M.jsx("div",{className:"text-sm text-gray-600",children:t})]})},_S=({icon:r,title:e,description:t})=>M.jsxs("div",{className:"flex items-start gap-3 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg",children:[M.jsx("div",{className:"text-xl",children:r}),M.jsxs("div",{children:[M.jsx("div",{className:"font-semibold text-gray-800",children:e}),M.jsx("div",{className:"text-sm text-gray-600 mt-1",children:t})]})]}),xS=({task:r,isCompleted:e,onToggle:t})=>M.jsx("div",{onClick:t,className:`p-3 rounded-lg border cursor-pointer transition-all ${e?"bg-emerald-50 border-emerald-200":"bg-gray-50 border-gray-200 hover:bg-gray-100"}`,children:M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{className:"flex items-center space-x-3",children:[e?M.jsx(_o,{className:"h-5 w-5 text-emerald-500"}):M.jsx(Cy,{className:"h-5 w-5 text-gray-400"}),M.jsxs("div",{children:[M.jsx("div",{className:`font-medium ${e?"text-emerald-700":"text-gray-800"}`,children:r.title}),M.jsx("div",{className:"text-sm text-gray-600",children:r.description})]})]}),M.jsxs("div",{className:`px-2 py-1 rounded text-xs font-semibold ${e?"bg-emerald-100 text-emerald-700":"bg-yellow-100 text-yellow-700"}`,children:[e?"✓":"+",r.reward," pts"]})]})}),yS=({message:r})=>M.jsx("div",{className:"bg-white border border-emerald-200 shadow-lg rounded-lg p-4 max-w-sm animate-slide-in",children:M.jsxs("div",{className:"flex items-center space-x-2",children:[M.jsx(_o,{className:"h-5 w-5 text-emerald-500"}),M.jsx("span",{className:"text-sm font-medium text-gray-800",children:r})]})}),SS=({onClose:r,onSubmit:e})=>{const[t,s]=ee.useState({activityType:"",subType:"",value:"",description:"",impact:0,waterAmount:0,energyAmount:0}),a=h=>{switch(h){case"water":return[{value:"shortShower",label:"🚿 Short Shower (5 mins)"},{value:"bucketWash",label:"🪣 Bucket vs Hose"},{value:"rainwater",label:"☔ Rainwater Collection"}];case"transport":return[{value:"walk",label:"🚶 Walking"},{value:"bike",label:"🚲 Cycling"},{value:"bus",label:"🚌 Bus"},{value:"train",label:"🚂 Train"}];case"energy":return[{value:"electricity",label:"💡 Electricity"},{value:"naturalGas",label:"🔥 Natural Gas"}];case"waste":return[{value:"plastic",label:"♻️ Plastic Recycling"},{value:"paper",label:"📄 Paper Recycling"},{value:"glass",label:"🍶 Glass Recycling"}];default:return[]}},l=h=>{switch(h){case"transport":return"Distance (km)";case"energy":return"Energy Saved (kWh)";case"waste":return"Amount (kg)";case"water":return"Amount (L)";default:return"Value"}},u=h=>{const{name:p,value:_}=h.target;s(x=>{const m={...x,[p]:_};if(m.activityType&&m.subType&&m.value){const y=mS(m.activityType,m.subType,parseFloat(m.value));m.impact=y.co2Saved,m.energyAmount=y.energySaved}return m})},d=()=>{var h;if(t.activityType&&t.subType&&t.value){const p=`${t.value} ${t.activityType==="transport"?"km":t.activityType==="energy"?"kWh":t.activityType==="waste"?"kg":"L"} - ${(h=a(t.activityType).find(_=>_.value===t.subType))==null?void 0:h.label}`;e({...t,description:t.description||p})}};return M.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:M.jsxs("div",{className:"bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl",children:[M.jsx("h2",{className:"text-2xl font-bold text-emerald-600 mb-6",children:"Log Your Eco Activity"}),M.jsxs("div",{className:"space-y-4",children:[M.jsxs("div",{children:[M.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Activity Type"}),M.jsxs("select",{name:"activityType",value:t.activityType,onChange:u,className:"w-full p-3 border border-gray-300 rounded-lg",children:[M.jsx("option",{value:"",children:"Select type..."}),M.jsx("option",{value:"transport",children:"🚗 Transportation"}),M.jsx("option",{value:"energy",children:"⚡ Energy Usage"}),M.jsx("option",{value:"water",children:"💧 Water Conservation"}),M.jsx("option",{value:"waste",children:"♻️ Waste Management"})]})]}),t.activityType&&M.jsxs("div",{children:[M.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Activity Details"}),M.jsxs("select",{name:"subType",value:t.subType,onChange:u,className:"w-full p-3 border border-gray-300 rounded-lg",children:[M.jsx("option",{value:"",children:"Select specific activity..."}),a(t.activityType).map(h=>M.jsx("option",{value:h.value,children:h.label},h.value))]})]}),t.subType&&M.jsxs("div",{children:[M.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:l(t.activityType)}),M.jsx("input",{type:"number",name:"value",value:t.value,onChange:u,className:"w-full p-3 border border-gray-300 rounded-lg",min:"0",step:"0.1"})]}),t.impact>0&&M.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[M.jsx("p",{className:"text-green-700",children:"Estimated Impact:"}),M.jsxs("p",{className:"font-bold text-green-800",children:[t.impact.toFixed(2)," kg CO₂ saved"]}),t.energyAmount>0&&M.jsxs("p",{className:"font-bold text-green-800",children:[t.energyAmount.toFixed(2)," kWh saved"]})]}),M.jsxs("div",{className:"flex gap-3 pt-4",children:[M.jsx("button",{type:"button",onClick:r,className:"flex-1 py-3 px-4 bg-gray-200 text-gray-800 rounded-lg",children:"Cancel"}),M.jsx("button",{type:"button",onClick:d,disabled:!t.activityType||!t.subType||!t.value,className:"flex-1 py-3 px-4 bg-emerald-500 text-white rounded-lg disabled:bg-gray-300",children:"Log Activity"})]})]})]})})},MS=({onClose:r,onSubmit:e,userData:t})=>{const[s,a]=ee.useState({name:t.profile.name||"",email:t.profile.email||""}),l=()=>{s.name.trim()&&e(s)};return M.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:M.jsxs("div",{className:"bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl",children:[M.jsxs("h2",{className:"text-2xl font-bold text-emerald-600 mb-6 flex items-center",children:[M.jsx(w0,{className:"mr-2"}),"Set Up Your EcoPlay Profile"]}),M.jsxs("div",{className:"space-y-4",children:[M.jsxs("div",{children:[M.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Your Name *"}),M.jsx("input",{type:"text",value:s.name,onChange:u=>a({...s,name:u.target.value}),placeholder:"Enter your name",className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"})]}),M.jsxs("div",{children:[M.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email (Optional)"}),M.jsx("input",{type:"email",value:s.email,onChange:u=>a({...s,email:u.target.value}),placeholder:"Enter your email",className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"})]}),M.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[M.jsx("h3",{className:"font-semibold text-emerald-700 mb-2",children:"🌱 Your Eco Journey Starts Here!"}),M.jsxs("ul",{className:"text-sm text-emerald-600 space-y-1",children:[M.jsx("li",{children:"• Track your daily eco-activities"}),M.jsx("li",{children:"• Build streaks by consistent actions"}),M.jsx("li",{children:"• Earn points and level up"}),M.jsx("li",{children:"• Monitor your environmental impact"})]})]}),M.jsxs("div",{className:"flex gap-3 pt-4",children:[t.profile.isProfileComplete&&M.jsx("button",{type:"button",onClick:r,className:"flex-1 py-3 px-4 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors",children:"Cancel"}),M.jsx("button",{type:"button",onClick:l,disabled:!s.name.trim(),className:"flex-1 py-3 px-4 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed",children:t.profile.isProfileComplete?"Update Profile":"Start My Journey"})]})]})]})})},wS=({onClose:r,userData:e,setUserData:t})=>{const s=l=>{const u=l.target.value;t(d=>({...d,settings:{...d.settings,units:u}}))},a=()=>{window.confirm("Are you sure you want to delete your account? This cannot be undone.")&&(vS(),window.location.reload())};return M.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:M.jsxs("div",{className:"bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl",children:[M.jsxs("div",{className:"flex justify-between items-center mb-6",children:[M.jsx("h2",{className:"text-2xl font-bold text-emerald-600",children:"Settings"}),M.jsx("button",{onClick:r,className:"text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100",children:"✕"})]}),M.jsxs("div",{className:"space-y-8",children:[M.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[M.jsx("h3",{className:"font-semibold text-gray-800 mb-3",children:"Measurement Units"}),M.jsxs("select",{value:e.settings.units,onChange:s,className:"w-full p-3 border rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent",children:[M.jsx("option",{value:"metric",children:"Metric (kg, km)"}),M.jsx("option",{value:"imperial",children:"Imperial (lbs, miles)"})]})]}),M.jsxs("div",{className:"border-t pt-6",children:[M.jsx("h3",{className:"font-semibold text-gray-800 mb-3",children:"Danger Zone"}),M.jsx("button",{onClick:a,className:"w-full py-3 px-4 bg-red-50 text-red-600 rounded-lg border border-red-200 hover:bg-red-100 transition-colors duration-200",children:"Delete Account"}),M.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"This action cannot be undone. All your data will be permanently deleted."})]})]})]})})},ES=()=>{const[r,e]=ee.useState(()=>{const D=Jn();return D?{...D,settings:D.settings||{units:"metric"}}:{profile:{name:"",email:"",joinDate:null,isProfileComplete:!1},settings:{units:"metric"},stats:{totalEcoPoints:0,level:1,currentStreak:0,longestStreak:0,totalActivities:0,lifetimeStats:{co2Saved:0,waterSaved:0,energySaved:0}},dailyData:[],lastActivityDate:null}});ee.useEffect(()=>{r.profile.isProfileComplete&&ao(r)},[r]);const[t,s]=ee.useState(!1),[a,l]=ee.useState(!1),[u,d]=ee.useState(!1),[h,p]=ee.useState([]);go();const _=[{id:1,title:"Use reusable water bottle",description:"Replace single-use plastic",reward:50,category:"waste"},{id:2,title:"Take public transport",description:"Reduce carbon emissions",reward:75,category:"transport"},{id:3,title:"Turn off lights when leaving",description:"Save energy",reward:25,category:"energy"},{id:4,title:"Eat a plant-based meal",description:"Reduce food carbon footprint",reward:60,category:"food"}],x=[{icon:"🚗",title:"Try carpooling twice this week",description:"Based on your commute data, this could save 12kg CO₂"},{icon:"🥗",title:"Add 2 plant-based meals",description:"Your meat consumption is above average. Try our recipe suggestions!"},{icon:"💡",title:"Unplug devices when not in use",description:"Phantom energy use could be costing you 0.5kWh daily"}],m=()=>new Date().toISOString().split("T")[0],y=()=>{const D=m(),U=r.dailyData.find(k=>k.date===D);return U||{date:D,co2Saved:0,waterSaved:0,energySaved:0,activities:[],tasksCompleted:[],pointsEarned:0}},w=D=>{if(D.length===0)return 0;const U=[...D].sort((C,T)=>new Date(T.date)-new Date(C.date));let k=0;const z=new Date(m());for(let C=0;C<U.length;C++){const T=new Date(U[C].date),F=new Date(z);if(F.setDate(F.getDate()-C),T.toDateString()===F.toDateString()&&U[C].activities.length>0)k++;else break}return k},E=D=>Math.floor(D/500)+1,S=D=>{p(U=>{if(U.some(z=>z.message===D))return U;const k=Date.now();return[...U,{id:k,message:D}]}),setTimeout(()=>{p(U=>U.filter(k=>k.message!==D))},3e3)},v=D=>{e(U=>({...U,profile:{...D,joinDate:new Date().toISOString(),isProfileComplete:!0}})),l(!1),S("Welcome to EcoPlay! Start logging your eco-activities! 🌱")},P=D=>{const U=m(),k=_.find(z=>z.id===D);e(z=>{const C=[...z.dailyData],T=C.findIndex(oe=>oe.date===U);let F=T>=0?{...C[T]}:{date:U,co2Saved:0,waterSaved:0,energySaved:0,activities:[],tasksCompleted:[],pointsEarned:0};const Y=F.tasksCompleted.includes(D),K=Y?-k.reward:k.reward;F.tasksCompleted=Y?F.tasksCompleted.filter(oe=>oe!==D):[...F.tasksCompleted,D],F.pointsEarned+=K,T>=0?C[T]=F:C.push(F);const re=C.reduce((oe,le)=>oe+le.pointsEarned,0),he=w(C);return Y||S(`Task completed! +${k.reward} EcoPoints 🏆`),{...z,dailyData:C,stats:{...z.stats,totalEcoPoints:re,level:E(re),currentStreak:he,longestStreak:Math.max(z.stats.longestStreak,he),lifetimeStats:z.stats.lifetimeStats}}})},I=D=>{const U=m(),k=D.activityType==="water"?Math.round(parseFloat(D.value)*20):Math.round(D.impact*20);e(z=>{const C=[...z.dailyData],T=C.findIndex(le=>le.date===U);let F=T>=0?{...C[T]}:{date:U,co2Saved:0,waterSaved:0,energySaved:0,activities:[],tasksCompleted:[],pointsEarned:0};const Y={...D,id:Date.now(),timestamp:new Date().toISOString(),points:k};if(!F.activities.some(le=>le.description===Y.description&&le.timestamp===Y.timestamp))if(F.activities.push(Y),F.pointsEarned+=k,D.activityType==="water"){const le=parseFloat(D.value)||0;F.waterSaved+=le,S(`💧 You saved ${le}L of water and earned ${k} EcoPoints! Every drop counts!`)}else F.co2Saved+=D.impact,D.activityType==="energy"&&(F.energySaved+=D.energyAmount||0),S(`Great job! You saved ${D.impact}kg CO₂ and earned ${k} EcoPoints! 🌱`);T>=0?C[T]=F:C.push(F);const K=C.reduce((le,G)=>({co2Saved:le.co2Saved+(G.co2Saved||0),waterSaved:le.waterSaved+(G.waterSaved||0),energySaved:le.energySaved+(G.energySaved||0)}),{co2Saved:0,waterSaved:0,energySaved:0}),re=C.reduce((le,G)=>le+G.pointsEarned,0),he=w(C),oe=C.reduce((le,G)=>le+G.activities.length,0);return{...z,dailyData:C,lastActivityDate:U,stats:{...z.stats,totalEcoPoints:re,level:E(re),currentStreak:he,longestStreak:Math.max(z.stats.longestStreak,he),totalActivities:oe,lifetimeStats:K}}}),s(!1)};ee.useEffect(()=>{if(!r.profile.isProfileComplete){const D=setTimeout(()=>l(!0),500);return()=>clearTimeout(D)}},[r.profile.isProfileComplete]);const R=y();return M.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-emerald-50",children:[M.jsx("nav",{className:"bg-gradient-to-r from-emerald-600 to-green-600 shadow-lg sticky top-0 z-40",children:M.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:M.jsxs("div",{className:"flex justify-between items-center h-16",children:[M.jsxs(Pi,{to:"/dashboard",className:"flex items-center space-x-2",children:[M.jsx(ps,{className:"h-8 w-8 text-white"}),M.jsx("span",{className:"text-2xl font-bold text-white",children:"EcoPlay"})]}),M.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[M.jsx(Pi,{to:"/stats",className:"text-white hover:text-green-200 font-medium",children:"Stats"}),M.jsx(Pi,{to:"/shop",className:"text-white hover:text-green-200 font-medium",children:"Shop"}),M.jsx(Pi,{to:"/garden",className:"text-white hover:text-green-200 font-medium",children:"Garden"})]}),M.jsxs("div",{className:"flex items-center space-x-4",children:[M.jsxs("div",{className:"bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold",children:["Level ",r.stats.level]}),M.jsxs("div",{className:"bg-white bg-opacity-20 text-white px-3 py-1 rounded-full font-semibold",children:["💎 ",r.stats.totalEcoPoints.toLocaleString()]}),M.jsx("button",{onClick:()=>l(!0),className:"w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors",children:M.jsx(w0,{className:"h-4 w-4 text-white"})}),M.jsx("button",{onClick:()=>d(!0),className:"w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors",children:M.jsx(Gy,{className:"h-4 w-4 text-white"})})]})]})})}),M.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:r.profile.isProfileComplete?M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[M.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[M.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6 border border-green-100",children:[M.jsxs("div",{className:"flex justify-between items-start mb-6",children:[M.jsxs("div",{children:[M.jsxs("h1",{className:"text-3xl font-bold text-emerald-600 mb-2",children:["Welcome back, ",r.profile.name,"! 🌍"]}),M.jsx("p",{className:"text-gray-600",children:r.stats.currentStreak>0?`You're on a ${r.stats.currentStreak} day streak! Keep it up!`:"Ready to start your eco journey? Log your first activity!"})]}),M.jsxs("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-4 rounded-xl text-center shadow-lg",children:[M.jsx("div",{className:"text-2xl font-bold",children:r.stats.currentStreak}),M.jsx("div",{className:"text-sm",children:"Day Streak"})]})]}),M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[M.jsx(pd,{icon:M.jsx(ps,{className:"h-8 w-8 text-green-500"}),value:`${R.co2Saved.toFixed(1)}kg`,label:"CO₂ Saved Today",color:"green",units:r.settings.units}),M.jsx(pd,{icon:M.jsx(Dy,{className:"h-8 w-8 text-blue-500"}),value:`${R.waterSaved}L`,label:"Water Conserved Today",color:"blue",units:r.settings.units}),M.jsx(pd,{icon:M.jsx(cS,{className:"h-8 w-8 text-yellow-500"}),value:`${R.energySaved}kWh`,label:"Energy Saved Today",color:"yellow",units:r.settings.units})]})]}),M.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6 border border-green-100",children:[M.jsxs("h2",{className:"text-xl font-bold text-gray-800 mb-6 flex items-center",children:[M.jsx(nS,{className:"mr-2 h-5 w-5"}),"Your Lifetime Environmental Impact"]}),M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[M.jsxs("div",{className:"text-center p-4 bg-green-50 rounded-lg",children:[M.jsx("div",{className:"text-2xl font-bold text-green-600",children:us(r.stats.lifetimeStats.co2Saved.toFixed(1),"co2",r.settings.units)}),M.jsx("div",{className:"text-sm text-gray-600",children:"Total CO₂ Saved"})]}),M.jsxs("div",{className:"text-center p-4 bg-blue-50 rounded-lg",children:[M.jsx("div",{className:"text-2xl font-bold text-blue-600",children:us(r.stats.lifetimeStats.waterSaved,"water",r.settings.units)}),M.jsx("div",{className:"text-sm text-gray-600",children:"Total Water Saved"})]}),M.jsxs("div",{className:"text-center p-4 bg-yellow-50 rounded-lg",children:[M.jsxs("div",{className:"text-2xl font-bold text-yellow-600",children:[r.stats.lifetimeStats.energySaved,"kWh"]}),M.jsx("div",{className:"text-sm text-gray-600",children:"Total Energy Saved"})]}),M.jsxs("div",{className:"text-center p-4 bg-purple-50 rounded-lg",children:[M.jsx("div",{className:"text-2xl font-bold text-purple-600",children:r.stats.totalActivities}),M.jsx("div",{className:"text-sm text-gray-600",children:"Activities Logged"})]})]})]}),M.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6 border border-green-100",children:[M.jsxs("h2",{className:"text-xl font-bold text-gray-800 mb-6 flex items-center",children:[M.jsx(M0,{className:"mr-2 h-5 w-5"}),"Personalized Recommendations"]}),M.jsx("div",{className:"space-y-4",children:x.map((D,U)=>M.jsx(_S,{...D},U))})]}),R.activities.length>0&&M.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6 border border-green-100",children:[M.jsx("h2",{className:"text-xl font-bold text-gray-800 mb-6",children:"Today's Activities"}),M.jsx("div",{className:"space-y-3",children:R.activities.map((D,U)=>M.jsxs("div",{className:"flex items-center justify-between p-3 bg-green-50 rounded-lg",children:[M.jsxs("div",{children:[M.jsx("div",{className:"font-medium text-gray-800",children:D.description}),M.jsx("div",{className:"text-sm text-gray-600",children:D.activityType==="water"?`💧 ${us(D.value,"water",r.settings.units)} saved`:`${D.activityType} • ${us(D.impact,"co2",r.settings.units)} saved`})]}),M.jsxs("div",{className:"bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold",children:["+",D.points," pts"]})]},U))})]})]}),M.jsxs("div",{className:"space-y-8",children:[M.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6 border border-green-100",children:[M.jsxs("h2",{className:"text-xl font-bold text-gray-800 mb-6 flex items-center",children:[M.jsx(_o,{className:"mr-2 h-5 w-5"}),"Daily Eco-Tasks"]}),M.jsx("div",{className:"space-y-3",children:_.map(D=>M.jsx(xS,{task:D,isCompleted:R.tasksCompleted.includes(D.id),onToggle:()=>P(D.id)},D.id))}),M.jsxs("div",{className:"mt-4 p-3 bg-gray-50 rounded-lg text-center",children:[M.jsx("div",{className:"text-sm text-gray-600",children:"Today's Task Points"}),M.jsxs("div",{className:"text-lg font-bold text-emerald-600",children:[_.filter(D=>R.tasksCompleted.includes(D.id)).reduce((D,U)=>D+U.reward,0)," pts"]})]})]}),M.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6 border border-green-100",children:[M.jsxs("h2",{className:"text-xl font-bold text-gray-800 mb-6 flex items-center",children:[M.jsx(rS,{className:"mr-2 h-5 w-5"}),"Streak Stats"]}),M.jsxs("div",{className:"space-y-4",children:[M.jsxs("div",{className:"flex justify-between items-center",children:[M.jsx("span",{className:"text-gray-600",children:"Current Streak"}),M.jsxs("span",{className:"text-xl font-bold text-orange-500",children:[r.stats.currentStreak," days"]})]}),M.jsxs("div",{className:"flex justify-between items-center",children:[M.jsx("span",{className:"text-gray-600",children:"Longest Streak"}),M.jsxs("span",{className:"text-xl font-bold text-emerald-500",children:[r.stats.longestStreak," days"]})]}),r.stats.currentStreak===0&&M.jsx("div",{className:"text-sm text-gray-500 text-center mt-4 p-3 bg-yellow-50 rounded-lg",children:"💡 Log an eco-activity today to start your streak!"})]})]})]})]}):M.jsx("div",{className:"flex items-center justify-center min-h-96",children:M.jsxs("div",{className:"text-center",children:[M.jsx(ps,{className:"h-16 w-16 text-emerald-500 mx-auto mb-4"}),M.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Welcome to EcoPlay!"}),M.jsx("p",{className:"text-gray-600 mb-4",children:"Let's set up your profile to start tracking your eco journey"})]})})}),r.profile.isProfileComplete&&M.jsx("button",{onClick:()=>s(!0),className:"fixed bottom-8 right-8 bg-gradient-to-r from-emerald-500 to-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 z-30",children:M.jsx(S0,{className:"h-6 w-6"})}),a&&M.jsx(MS,{onClose:()=>l(!1),onSubmit:v,userData:r}),t&&M.jsx(SS,{onClose:()=>s(!1),onSubmit:I}),u&&M.jsx(wS,{onClose:()=>d(!1),userData:r,setUserData:e}),M.jsx("div",{className:"fixed top-20 right-4 z-50 space-y-2",children:h.map(D=>M.jsx(yS,{message:D.message},D.id))})]})},TS=()=>{const r=go(),[e,t]=ee.useState(()=>{const a=Jn()||{stats:{currentStreak:0,longestStreak:0,totalEcoPoints:0,level:1},dailyData:[]},l=new Date().toISOString().split("T")[0];a.dailyData.find(m=>m.date===l);const u=new Date;u.setDate(u.getDate()-7);const d=new Date;d.setDate(d.getDate()-30);const h=a.dailyData.filter(m=>new Date(m.date)>=u).reduce((m,y)=>{var w;return m+(((w=y.tasksCompleted)==null?void 0:w.length)||0)},0),p=a.dailyData.filter(m=>new Date(m.date)>=d).reduce((m,y)=>{var w;return m+(((w=y.tasksCompleted)==null?void 0:w.length)||0)},0);a.dailyData.reduce((m,y)=>{var w;return m+(((w=y.tasksCompleted)==null?void 0:w.length)||0)},0);const _={transport:{completed:0,points:0},energy:{completed:0,points:0},water:{completed:0,points:0},waste:{completed:0,points:0}};a.dailyData.forEach(m=>{var y;(y=m.activities)==null||y.forEach(w=>{_[w.activityType]&&(_[w.activityType].completed++,_[w.activityType].points+=w.points||0)})});const x=a.dailyData.filter(m=>new Date(m.date)>=d).reduce((m,y)=>({co2Saved:m.co2Saved+(y.co2Saved||0),waterSaved:m.waterSaved+(y.waterSaved||0),energySaved:m.energySaved+(y.energySaved||0),treesEquivalent:(m.co2Saved+(y.co2Saved||0))/21.7}),{co2Saved:0,waterSaved:0,energySaved:0,treesEquivalent:0});return{name:"EcoWarrior",streakDays:a.stats.currentStreak,longestStreak:a.stats.longestStreak,ecoPoints:a.stats.totalEcoPoints,level:a.stats.level,categoryStats:_,totalTasksCompleted:Object.values(_).reduce((m,y)=>m+y.completed,0),weeklyTasksCompleted:h,monthlyTasksCompleted:p,consistencyScore:78,weeklyConsistency:[85,92,76,88,90,82,78],monthlyStats:{co2Saved:Number(x.co2Saved.toFixed(1)),waterSaved:Math.round(x.waterSaved),energySaved:Number(x.energySaved.toFixed(1)),treesEquivalent:Number(x.treesEquivalent.toFixed(1))},achievements:[{name:"First Week",date:"2024-11-15",points:100},{name:"Eco Commuter",date:"2024-11-20",points:200},{name:"Water Saver",date:"2024-11-25",points:150},{name:"Green Guardian",date:"2024-12-01",points:300}]}});ee.useEffect(()=>{const a=()=>{const l=Jn();if(l){const u={transport:{completed:0,points:0},energy:{completed:0,points:0},water:{completed:0,points:0},waste:{completed:0,points:0}};l.dailyData.forEach(p=>{var _;(_=p.activities)==null||_.forEach(x=>{u[x.activityType]&&(u[x.activityType].completed++,u[x.activityType].points+=x.points||0)})});const d=new Date;d.setDate(d.getDate()-30);const h=l.dailyData.filter(p=>new Date(p.date)>=d).reduce((p,_)=>({co2Saved:p.co2Saved+(_.co2Saved||0),waterSaved:p.waterSaved+(_.waterSaved||0),energySaved:p.energySaved+(_.energySaved||0),treesEquivalent:(p.co2Saved+(_.co2Saved||0))/21.7}),{co2Saved:0,waterSaved:0,energySaved:0,treesEquivalent:0});t(p=>({...p,categoryStats:u,totalTasksCompleted:Object.values(u).reduce((_,x)=>_+x.completed,0),monthlyStats:{co2Saved:Number(h.co2Saved.toFixed(1)),waterSaved:Math.round(h.waterSaved),energySaved:Number(h.energySaved.toFixed(1)),treesEquivalent:Number(h.treesEquivalent.toFixed(1))}}))}};return window.addEventListener("storage",a),()=>window.removeEventListener("storage",a)},[]);const s=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];return M.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-emerald-50",children:[M.jsx("nav",{className:"bg-gradient-to-r from-emerald-600 to-green-600 shadow-lg sticky top-0 z-40",children:M.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:M.jsxs("div",{className:"flex justify-between items-center h-16",children:[M.jsxs("div",{className:"flex items-center space-x-4",children:[M.jsx("button",{onClick:()=>r("/dashboard"),className:"text-white hover:text-green-200",children:M.jsx(Wh,{className:"h-6 w-6"})}),M.jsxs("div",{className:"flex items-center space-x-2",children:[M.jsx(ps,{className:"h-8 w-8 text-white"}),M.jsx("span",{className:"text-2xl font-bold text-white",children:"EcoPlay Stats"})]})]}),M.jsxs("div",{className:"flex items-center space-x-4",children:[M.jsxs("div",{className:"bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold",children:["Level ",e.level]}),M.jsxs("div",{className:"bg-white bg-opacity-20 text-white px-3 py-1 rounded-full font-semibold",children:["💎 ",e.ecoPoints.toLocaleString()]})]})]})})}),M.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[M.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[M.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6 border border-green-100",children:[M.jsxs("h2",{className:"text-2xl font-bold text-emerald-600 mb-6 flex items-center",children:[M.jsx(Iy,{className:"mr-3 h-6 w-6"}),"Your Eco Streak 🔥"]}),M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[M.jsx("div",{className:"text-center",children:M.jsxs("div",{className:"bg-gradient-to-r from-orange-400 to-red-500 text-white p-6 rounded-2xl shadow-lg",children:[M.jsx("div",{className:"text-4xl font-bold mb-2",children:e.streakDays}),M.jsx("div",{className:"text-lg",children:"Current Streak"}),M.jsx("div",{className:"text-sm opacity-90",children:"Keep it going! 🚀"})]})}),M.jsx("div",{className:"text-center",children:M.jsxs("div",{className:"bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg",children:[M.jsx("div",{className:"text-4xl font-bold mb-2",children:e.longestStreak}),M.jsx("div",{className:"text-lg",children:"Longest Streak"}),M.jsx("div",{className:"text-sm opacity-90",children:"Personal Best! 🏆"})]})})]})]}),M.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6 border border-green-100",children:[M.jsxs("h2",{className:"text-2xl font-bold text-emerald-600 mb-6 flex items-center",children:[M.jsx(_o,{className:"mr-3 h-6 w-6"}),"EcoTasks Completed"]}),M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[M.jsx(md,{value:e.weeklyTasksCompleted,label:"This Week",color:"green",icon:"📅"}),M.jsx(md,{value:e.monthlyTasksCompleted,label:"This Month",color:"blue",icon:"📊"}),M.jsx(md,{value:e.totalTasksCompleted,label:"All Time",color:"purple",icon:"🏆"})]}),M.jsxs("div",{className:"space-y-4",children:[M.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"Tasks by Category"}),Object.entries(e.categoryStats).map(([a,l])=>M.jsx(bS,{category:a,completed:l.completed,points:l.points,total:e.totalTasksCompleted},a))]})]}),M.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6 border border-green-100",children:[M.jsxs("h2",{className:"text-2xl font-bold text-emerald-600 mb-6 flex items-center",children:[M.jsx(ps,{className:"mr-3 h-6 w-6"}),"Your Environmental Impact This Month"]}),M.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[M.jsx(Il,{value:`${e.monthlyStats.co2Saved}kg`,label:"CO₂ Saved",icon:"🌱",color:"green"}),M.jsx(Il,{value:`${e.monthlyStats.waterSaved}L`,label:"Water Saved",icon:"💧",color:"blue"}),M.jsx(Il,{value:`${e.monthlyStats.energySaved}kWh`,label:"Energy Saved",icon:"⚡",color:"yellow"}),M.jsx(Il,{value:`${e.monthlyStats.treesEquivalent}`,label:"Trees Equivalent",icon:"🌳",color:"green"})]})]})]}),M.jsxs("div",{className:"space-y-8",children:[M.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6 border border-green-100",children:[M.jsxs("h2",{className:"text-xl font-bold text-emerald-600 mb-6 flex items-center",children:[M.jsx(M0,{className:"mr-2 h-5 w-5"}),"Consistency Score"]}),M.jsx("div",{className:"text-center mb-6",children:M.jsxs("div",{className:"relative w-32 h-32 mx-auto",children:[M.jsxs("svg",{className:"w-32 h-32 transform -rotate-90",children:[M.jsx("circle",{cx:"64",cy:"64",r:"56",stroke:"#e5e7eb",strokeWidth:"8",fill:"none"}),M.jsx("circle",{cx:"64",cy:"64",r:"56",stroke:"#10b981",strokeWidth:"8",fill:"none",strokeLinecap:"round",strokeDasharray:`${2*Math.PI*56}`,strokeDashoffset:`${2*Math.PI*56*(1-e.consistencyScore/100)}`,className:"transition-all duration-1000"})]}),M.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:M.jsxs("div",{className:"text-center",children:[M.jsxs("div",{className:"text-2xl font-bold text-emerald-600",children:[e.consistencyScore,"%"]}),M.jsx("div",{className:"text-sm text-gray-600",children:"Consistent"})]})})]})}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("h3",{className:"text-sm font-semibold text-gray-700",children:"Weekly Consistency"}),M.jsx("div",{className:"flex justify-between items-end h-20 bg-gray-50 rounded-lg p-3",children:e.weeklyConsistency.map((a,l)=>M.jsxs("div",{className:"flex flex-col items-center space-y-1",children:[M.jsx("div",{className:"bg-emerald-500 rounded-t w-6 transition-all duration-500",style:{height:`${a/100*60}px`}}),M.jsx("div",{className:"text-xs text-gray-600",children:s[l]})]},l))})]})]}),M.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6 border border-green-100",children:[M.jsxs("h2",{className:"text-xl font-bold text-emerald-600 mb-6 flex items-center",children:[M.jsx(xy,{className:"mr-2 h-5 w-5"}),"Recent Achievements"]}),M.jsx("div",{className:"space-y-3",children:e.achievements.map((a,l)=>M.jsx(AS,{achievement:a},l))})]}),M.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6 border border-green-100",children:[M.jsxs("h2",{className:"text-xl font-bold text-emerald-600 mb-6 flex items-center",children:[M.jsx(wy,{className:"mr-2 h-5 w-5"}),"Quick Stats"]}),M.jsxs("div",{className:"space-y-4",children:[M.jsx(gd,{icon:"📈",label:"Average Daily Points",value:Math.round(e.ecoPoints/e.streakDays)}),M.jsx(gd,{icon:"🎯",label:"Task Completion Rate",value:`${Math.round(e.weeklyTasksCompleted/21*100)}%`}),M.jsx(gd,{icon:"⭐",label:"Weekly Goal Progress",value:`${e.weeklyTasksCompleted}/21`})]})]})]})]})})]})},md=({value:r,label:e,color:t,icon:s})=>{const a={green:"from-emerald-500 to-green-600",blue:"from-blue-500 to-blue-600",purple:"from-purple-500 to-purple-600",yellow:"from-yellow-500 to-orange-500"};return M.jsxs("div",{className:`bg-gradient-to-r ${a[t]} text-white p-4 rounded-xl text-center shadow-lg transform hover:scale-105 transition-all duration-200`,children:[M.jsx("div",{className:"text-2xl mb-1",children:s}),M.jsx("div",{className:"text-2xl font-bold",children:r}),M.jsx("div",{className:"text-sm opacity-90",children:e})]})},bS=({category:r,completed:e,points:t,total:s})=>{const a={transport:"🚗",energy:"⚡",water:"💧",waste:"🗑️"};return M.jsx("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg",children:M.jsxs("div",{className:"flex items-center space-x-3",children:[M.jsx("span",{className:"text-xl",children:a[r]}),M.jsxs("div",{children:[M.jsx("div",{className:"font-semibold text-gray-800 capitalize",children:r}),M.jsxs("div",{className:"text-sm text-gray-600",children:[e," tasks • ",t," points"]})]})]})})},Il=({value:r,label:e,icon:t,color:s})=>{const a={green:"border-green-200 hover:border-green-300",blue:"border-blue-200 hover:border-blue-300",yellow:"border-yellow-200 hover:border-yellow-300"};return M.jsxs("div",{className:`bg-gray-50 p-4 rounded-xl text-center border-2 ${a[s]} hover:shadow-md transition-all duration-200 transform hover:-translate-y-1`,children:[M.jsx("div",{className:"text-2xl mb-2",children:t}),M.jsx("div",{className:"text-xl font-bold text-gray-800",children:r}),M.jsx("div",{className:"text-xs text-gray-600",children:e})]})},AS=({achievement:r})=>M.jsxs("div",{className:"flex items-center justify-between p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg",children:[M.jsxs("div",{className:"flex items-center space-x-3",children:[M.jsx(oc,{className:"h-5 w-5 text-yellow-500"}),M.jsxs("div",{children:[M.jsx("div",{className:"font-semibold text-gray-800",children:r.name}),M.jsx("div",{className:"text-sm text-gray-600",children:r.date})]})]}),M.jsxs("div",{className:"bg-yellow-400 text-yellow-900 px-2 py-1 rounded-lg text-xs font-semibold",children:["+",r.points]})]}),gd=({icon:r,label:e,value:t})=>M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{className:"flex items-center space-x-2",children:[M.jsx("span",{className:"text-lg",children:r}),M.jsx("span",{className:"text-gray-700",children:e})]}),M.jsx("span",{className:"font-bold text-emerald-600",children:t})]});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $h="176",la={ROTATE:0,DOLLY:1,PAN:2},aa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},CS=0,Km=1,RS=2,E0=1,PS=2,Ji=3,Or=0,Wn=1,Ri=2,kr=0,ca=1,Zm=2,Qm=3,Jm=4,NS=5,ls=100,DS=101,LS=102,IS=103,US=104,kS=200,FS=201,OS=202,BS=203,Zd=204,Qd=205,zS=206,HS=207,GS=208,VS=209,jS=210,WS=211,XS=212,$S=213,YS=214,Jd=0,eh=1,th=2,da=3,nh=4,ih=5,rh=6,sh=7,Ec=0,qS=1,KS=2,Fr=0,ZS=1,QS=2,JS=3,eM=4,tM=5,nM=6,iM=7,T0=300,ha=301,fa=302,ah=303,oh=304,Tc=306,lh=1e3,ds=1001,ch=1002,Si=1003,rM=1004,Ul=1005,Ni=1006,vd=1007,hs=1008,Ui=1009,b0=1010,A0=1011,co=1012,Yh=1013,ms=1014,er=1015,xo=1016,qh=1017,Kh=1018,uo=1020,C0=35902,R0=1021,P0=1022,yi=1023,ho=1026,fo=1027,N0=1028,Zh=1029,D0=1030,Qh=1031,Jh=1033,lc=33776,cc=33777,uc=33778,dc=33779,uh=35840,dh=35841,hh=35842,fh=35843,ph=36196,mh=37492,gh=37496,vh=37808,_h=37809,xh=37810,yh=37811,Sh=37812,Mh=37813,wh=37814,Eh=37815,Th=37816,bh=37817,Ah=37818,Ch=37819,Rh=37820,Ph=37821,hc=36492,Nh=36494,Dh=36495,L0=36283,Lh=36284,Ih=36285,Uh=36286,sM=3200,aM=3201,bc=0,oM=1,Ur="",oi="srgb",pa="srgb-linear",vc="linear",It="srgb",Ws=7680,eg=519,lM=512,cM=513,uM=514,I0=515,dM=516,hM=517,fM=518,pM=519,tg=35044,ng="300 es",tr=2e3,_c=2001;class xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fc=Math.PI/180,kh=180/Math.PI;function yo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]).toLowerCase()}function Mt(r,e,t){return Math.max(e,Math.min(t,r))}function mM(r,e){return(r%e+e)%e}function _d(r,e,t){return(1-t)*r+t*e}function Ja(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const gM={DEG2RAD:fc};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*a+e.x,this.y=l*a+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _t{constructor(e,t,s,a,l,u,d,h,p){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,u,d,h,p)}set(e,t,s,a,l,u,d,h,p){const _=this.elements;return _[0]=e,_[1]=a,_[2]=d,_[3]=t,_[4]=l,_[5]=h,_[6]=s,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,u=s[0],d=s[3],h=s[6],p=s[1],_=s[4],x=s[7],m=s[2],y=s[5],w=s[8],E=a[0],S=a[3],v=a[6],P=a[1],I=a[4],R=a[7],D=a[2],U=a[5],k=a[8];return l[0]=u*E+d*P+h*D,l[3]=u*S+d*I+h*U,l[6]=u*v+d*R+h*k,l[1]=p*E+_*P+x*D,l[4]=p*S+_*I+x*U,l[7]=p*v+_*R+x*k,l[2]=m*E+y*P+w*D,l[5]=m*S+y*I+w*U,l[8]=m*v+y*R+w*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],_=e[8];return t*u*_-t*d*p-s*l*_+s*d*h+a*l*p-a*u*h}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],_=e[8],x=_*u-d*p,m=d*h-_*l,y=p*l-u*h,w=t*x+s*m+a*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=x*E,e[1]=(a*p-_*s)*E,e[2]=(d*s-a*u)*E,e[3]=m*E,e[4]=(_*t-a*h)*E,e[5]=(a*l-d*t)*E,e[6]=y*E,e[7]=(s*h-p*t)*E,e[8]=(u*t-s*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,u,d){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*u+p*d)+u+e,-a*p,a*h,-a*(-p*u+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(xd.makeScale(e,t)),this}rotate(e){return this.premultiply(xd.makeRotation(-e)),this}translate(e,t){return this.premultiply(xd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xd=new _t;function U0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function xc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function vM(){const r=xc("canvas");return r.style.display="block",r}const ig={};function pc(r){r in ig||(ig[r]=!0,console.warn(r))}function _M(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function xM(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function yM(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const rg=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sg=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SM(){const r={enabled:!0,workingColorSpace:pa,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===It&&(a.r=ir(a.r),a.g=ir(a.g),a.b=ir(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(a.r=ua(a.r),a.g=ua(a.g),a.b=ua(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ur?vc:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[pa]:{primaries:e,whitePoint:s,transfer:vc,toXYZ:rg,fromXYZ:sg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:s,transfer:It,toXYZ:rg,fromXYZ:sg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),r}const Lt=SM();function ir(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ua(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Xs;class MM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Xs===void 0&&(Xs=xc("canvas")),Xs.width=e.width,Xs.height=e.height;const a=Xs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=Xs}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=ir(l[u]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(ir(t[s]/255)*255):t[s]=ir(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wM=0;class ef{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=yo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?l.push(yd(a[u].image)):l.push(yd(a[u]))}else l=yd(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function yd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?MM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let EM=0;class Xn extends xs{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,s=ds,a=ds,l=Ni,u=hs,d=yi,h=Ui,p=Xn.DEFAULT_ANISOTROPY,_=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=yo(),this.name="",this.source=new ef(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=h,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==T0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lh:e.x=e.x-Math.floor(e.x);break;case ds:e.x=e.x<0?0:1;break;case ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lh:e.y=e.y-Math.floor(e.y);break;case ds:e.y=e.y<0?0:1;break;case ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=T0;Xn.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,t=0,s=0,a=1){Qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const h=e.elements,p=h[0],_=h[4],x=h[8],m=h[1],y=h[5],w=h[9],E=h[2],S=h[6],v=h[10];if(Math.abs(_-m)<.01&&Math.abs(x-E)<.01&&Math.abs(w-S)<.01){if(Math.abs(_+m)<.1&&Math.abs(x+E)<.1&&Math.abs(w+S)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(p+1)/2,R=(y+1)/2,D=(v+1)/2,U=(_+m)/4,k=(x+E)/4,z=(w+S)/4;return I>R&&I>D?I<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(I),a=U/s,l=k/s):R>D?R<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),s=U/a,l=z/a):D<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(D),s=k/l,a=z/l),this.set(s,a,l,t),this}let P=Math.sqrt((S-w)*(S-w)+(x-E)*(x-E)+(m-_)*(m-_));return Math.abs(P)<.001&&(P=1),this.x=(S-w)/P,this.y=(x-E)/P,this.z=(m-_)/P,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TM extends xs{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth?s.depth:1,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);const a={width:e,height:t,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const l=new Xn(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const u=s.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new ef(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends TM{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class k0 extends Xn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Si,this.minFilter=Si,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bM extends Xn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Si,this.minFilter=Si,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,u,d){let h=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];const m=l[u+0],y=l[u+1],w=l[u+2],E=l[u+3];if(d===0){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(d===1){e[t+0]=m,e[t+1]=y,e[t+2]=w,e[t+3]=E;return}if(x!==E||h!==m||p!==y||_!==w){let S=1-d;const v=h*m+p*y+_*w+x*E,P=v>=0?1:-1,I=1-v*v;if(I>Number.EPSILON){const D=Math.sqrt(I),U=Math.atan2(D,v*P);S=Math.sin(S*U)/D,d=Math.sin(d*U)/D}const R=d*P;if(h=h*S+m*R,p=p*S+y*R,_=_*S+w*R,x=x*S+E*R,S===1-d){const D=1/Math.sqrt(h*h+p*p+_*_+x*x);h*=D,p*=D,_*=D,x*=D}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=x}static multiplyQuaternionsFlat(e,t,s,a,l,u){const d=s[a],h=s[a+1],p=s[a+2],_=s[a+3],x=l[u],m=l[u+1],y=l[u+2],w=l[u+3];return e[t]=d*w+_*x+h*y-p*m,e[t+1]=h*w+_*m+p*x-d*y,e[t+2]=p*w+_*y+d*m-h*x,e[t+3]=_*w-d*x-h*m-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,p=d(s/2),_=d(a/2),x=d(l/2),m=h(s/2),y=h(a/2),w=h(l/2);switch(u){case"XYZ":this._x=m*_*x+p*y*w,this._y=p*y*x-m*_*w,this._z=p*_*w+m*y*x,this._w=p*_*x-m*y*w;break;case"YXZ":this._x=m*_*x+p*y*w,this._y=p*y*x-m*_*w,this._z=p*_*w-m*y*x,this._w=p*_*x+m*y*w;break;case"ZXY":this._x=m*_*x-p*y*w,this._y=p*y*x+m*_*w,this._z=p*_*w+m*y*x,this._w=p*_*x-m*y*w;break;case"ZYX":this._x=m*_*x-p*y*w,this._y=p*y*x+m*_*w,this._z=p*_*w-m*y*x,this._w=p*_*x+m*y*w;break;case"YZX":this._x=m*_*x+p*y*w,this._y=p*y*x+m*_*w,this._z=p*_*w-m*y*x,this._w=p*_*x-m*y*w;break;case"XZY":this._x=m*_*x-p*y*w,this._y=p*y*x-m*_*w,this._z=p*_*w+m*y*x,this._w=p*_*x+m*y*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],u=t[1],d=t[5],h=t[9],p=t[2],_=t[6],x=t[10],m=s+d+x;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(_-h)*y,this._y=(l-p)*y,this._z=(u-a)*y}else if(s>d&&s>x){const y=2*Math.sqrt(1+s-d-x);this._w=(_-h)/y,this._x=.25*y,this._y=(a+u)/y,this._z=(l+p)/y}else if(d>x){const y=2*Math.sqrt(1+d-s-x);this._w=(l-p)/y,this._x=(a+u)/y,this._y=.25*y,this._z=(h+_)/y}else{const y=2*Math.sqrt(1+x-s-d);this._w=(u-a)/y,this._x=(l+p)/y,this._y=(h+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,u=e._w,d=t._x,h=t._y,p=t._z,_=t._w;return this._x=s*_+u*d+a*p-l*h,this._y=a*_+u*h+l*d-s*p,this._z=l*_+u*p+s*h-a*d,this._w=u*_-s*d-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,u=this._w;let d=u*e._w+s*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=s,this._y=a,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*s+t*this._x,this._y=y*a+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),_=Math.atan2(p,d),x=Math.sin((1-t)*_)/p,m=Math.sin(t*_)/p;return this._w=u*x+this._w*m,this._x=s*x+this._x*m,this._y=a*x+this._y*m,this._z=l*x+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,s=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ag.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ag.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,u=e.y,d=e.z,h=e.w,p=2*(u*a-d*s),_=2*(d*t-l*a),x=2*(l*s-u*t);return this.x=t+h*p+u*x-d*_,this.y=s+h*_+d*p-l*x,this.z=a+h*x+l*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,u=t.x,d=t.y,h=t.z;return this.x=a*h-l*d,this.y=l*u-s*h,this.z=s*d-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Sd.copy(this).projectOnVector(e),this.sub(Sd)}reflect(e){return this.sub(Sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sd=new J,ag=new vs;class So{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,gi):gi.fromBufferAttribute(l,u),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),kl.copy(s.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),Fl.subVectors(this.max,eo),$s.subVectors(e.a,eo),Ys.subVectors(e.b,eo),qs.subVectors(e.c,eo),Cr.subVectors(Ys,$s),Rr.subVectors(qs,Ys),ts.subVectors($s,qs);let t=[0,-Cr.z,Cr.y,0,-Rr.z,Rr.y,0,-ts.z,ts.y,Cr.z,0,-Cr.x,Rr.z,0,-Rr.x,ts.z,0,-ts.x,-Cr.y,Cr.x,0,-Rr.y,Rr.x,0,-ts.y,ts.x,0];return!Md(t,$s,Ys,qs,Fl)||(t=[1,0,0,0,1,0,0,0,1],!Md(t,$s,Ys,qs,Fl))?!1:(Ol.crossVectors(Cr,Rr),t=[Ol.x,Ol.y,Ol.z],Md(t,$s,Ys,qs,Fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yi=[new J,new J,new J,new J,new J,new J,new J,new J],gi=new J,kl=new So,$s=new J,Ys=new J,qs=new J,Cr=new J,Rr=new J,ts=new J,eo=new J,Fl=new J,Ol=new J,ns=new J;function Md(r,e,t,s,a){for(let l=0,u=r.length-3;l<=u;l+=3){ns.fromArray(r,l);const d=a.x*Math.abs(ns.x)+a.y*Math.abs(ns.y)+a.z*Math.abs(ns.z),h=e.dot(ns),p=t.dot(ns),_=s.dot(ns);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>d)return!1}return!0}const AM=new So,to=new J,wd=new J;class Ac{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):AM.setFromPoints(e).getCenter(s);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const t=to.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(to,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(wd)),this.expandByPoint(to.copy(e.center).sub(wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new J,Ed=new J,Bl=new J,Pr=new J,Td=new J,zl=new J,bd=new J;class Cc{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){Ed.copy(e).add(t).multiplyScalar(.5),Bl.copy(t).sub(e).normalize(),Pr.copy(this.origin).sub(Ed);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Bl),d=Pr.dot(this.direction),h=-Pr.dot(Bl),p=Pr.lengthSq(),_=Math.abs(1-u*u);let x,m,y,w;if(_>0)if(x=u*h-d,m=u*d-h,w=l*_,x>=0)if(m>=-w)if(m<=w){const E=1/_;x*=E,m*=E,y=x*(x+u*m+2*d)+m*(u*x+m+2*h)+p}else m=l,x=Math.max(0,-(u*m+d)),y=-x*x+m*(m+2*h)+p;else m=-l,x=Math.max(0,-(u*m+d)),y=-x*x+m*(m+2*h)+p;else m<=-w?(x=Math.max(0,-(-u*l+d)),m=x>0?-l:Math.min(Math.max(-l,-h),l),y=-x*x+m*(m+2*h)+p):m<=w?(x=0,m=Math.min(Math.max(-l,-h),l),y=m*(m+2*h)+p):(x=Math.max(0,-(u*l+d)),m=x>0?l:Math.min(Math.max(-l,-h),l),y=-x*x+m*(m+2*h)+p);else m=u>0?-l:l,x=Math.max(0,-(u*m+d)),y=-x*x+m*(m+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Ed).addScaledVector(Bl,m),y}intersectSphere(e,t){qi.subVectors(e.center,this.origin);const s=qi.dot(this.direction),a=qi.dot(qi)-s*s,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),d=s-u,h=s+u;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,u,d,h;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,m=this.origin;return p>=0?(s=(e.min.x-m.x)*p,a=(e.max.x-m.x)*p):(s=(e.max.x-m.x)*p,a=(e.min.x-m.x)*p),_>=0?(l=(e.min.y-m.y)*_,u=(e.max.y-m.y)*_):(l=(e.max.y-m.y)*_,u=(e.min.y-m.y)*_),s>u||l>a||((l>s||isNaN(s))&&(s=l),(u<a||isNaN(a))&&(a=u),x>=0?(d=(e.min.z-m.z)*x,h=(e.max.z-m.z)*x):(d=(e.max.z-m.z)*x,h=(e.min.z-m.z)*x),s>h||d>a)||((d>s||s!==s)&&(s=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,s,a,l){Td.subVectors(t,e),zl.subVectors(s,e),bd.crossVectors(Td,zl);let u=this.direction.dot(bd),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Pr.subVectors(this.origin,e);const h=d*this.direction.dot(zl.crossVectors(Pr,zl));if(h<0)return null;const p=d*this.direction.dot(Td.cross(Pr));if(p<0||h+p>u)return null;const _=-d*Pr.dot(bd);return _<0?null:this.at(_/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,t,s,a,l,u,d,h,p,_,x,m,y,w,E,S){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,u,d,h,p,_,x,m,y,w,E,S)}set(e,t,s,a,l,u,d,h,p,_,x,m,y,w,E,S){const v=this.elements;return v[0]=e,v[4]=t,v[8]=s,v[12]=a,v[1]=l,v[5]=u,v[9]=d,v[13]=h,v[2]=p,v[6]=_,v[10]=x,v[14]=m,v[3]=y,v[7]=w,v[11]=E,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/Ks.setFromMatrixColumn(e,0).length(),l=1/Ks.setFromMatrixColumn(e,1).length(),u=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,u=Math.cos(s),d=Math.sin(s),h=Math.cos(a),p=Math.sin(a),_=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const m=u*_,y=u*x,w=d*_,E=d*x;t[0]=h*_,t[4]=-h*x,t[8]=p,t[1]=y+w*p,t[5]=m-E*p,t[9]=-d*h,t[2]=E-m*p,t[6]=w+y*p,t[10]=u*h}else if(e.order==="YXZ"){const m=h*_,y=h*x,w=p*_,E=p*x;t[0]=m+E*d,t[4]=w*d-y,t[8]=u*p,t[1]=u*x,t[5]=u*_,t[9]=-d,t[2]=y*d-w,t[6]=E+m*d,t[10]=u*h}else if(e.order==="ZXY"){const m=h*_,y=h*x,w=p*_,E=p*x;t[0]=m-E*d,t[4]=-u*x,t[8]=w+y*d,t[1]=y+w*d,t[5]=u*_,t[9]=E-m*d,t[2]=-u*p,t[6]=d,t[10]=u*h}else if(e.order==="ZYX"){const m=u*_,y=u*x,w=d*_,E=d*x;t[0]=h*_,t[4]=w*p-y,t[8]=m*p+E,t[1]=h*x,t[5]=E*p+m,t[9]=y*p-w,t[2]=-p,t[6]=d*h,t[10]=u*h}else if(e.order==="YZX"){const m=u*h,y=u*p,w=d*h,E=d*p;t[0]=h*_,t[4]=E-m*x,t[8]=w*x+y,t[1]=x,t[5]=u*_,t[9]=-d*_,t[2]=-p*_,t[6]=y*x+w,t[10]=m-E*x}else if(e.order==="XZY"){const m=u*h,y=u*p,w=d*h,E=d*p;t[0]=h*_,t[4]=-x,t[8]=p*_,t[1]=m*x+E,t[5]=u*_,t[9]=y*x-w,t[2]=w*x-y,t[6]=d*_,t[10]=E*x+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CM,e,RM)}lookAt(e,t,s){const a=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Nr.crossVectors(s,Zn),Nr.lengthSq()===0&&(Math.abs(s.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Nr.crossVectors(s,Zn)),Nr.normalize(),Hl.crossVectors(Zn,Nr),a[0]=Nr.x,a[4]=Hl.x,a[8]=Zn.x,a[1]=Nr.y,a[5]=Hl.y,a[9]=Zn.y,a[2]=Nr.z,a[6]=Hl.z,a[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,u=s[0],d=s[4],h=s[8],p=s[12],_=s[1],x=s[5],m=s[9],y=s[13],w=s[2],E=s[6],S=s[10],v=s[14],P=s[3],I=s[7],R=s[11],D=s[15],U=a[0],k=a[4],z=a[8],C=a[12],T=a[1],F=a[5],Y=a[9],K=a[13],re=a[2],he=a[6],oe=a[10],le=a[14],G=a[3],me=a[7],fe=a[11],H=a[15];return l[0]=u*U+d*T+h*re+p*G,l[4]=u*k+d*F+h*he+p*me,l[8]=u*z+d*Y+h*oe+p*fe,l[12]=u*C+d*K+h*le+p*H,l[1]=_*U+x*T+m*re+y*G,l[5]=_*k+x*F+m*he+y*me,l[9]=_*z+x*Y+m*oe+y*fe,l[13]=_*C+x*K+m*le+y*H,l[2]=w*U+E*T+S*re+v*G,l[6]=w*k+E*F+S*he+v*me,l[10]=w*z+E*Y+S*oe+v*fe,l[14]=w*C+E*K+S*le+v*H,l[3]=P*U+I*T+R*re+D*G,l[7]=P*k+I*F+R*he+D*me,l[11]=P*z+I*Y+R*oe+D*fe,l[15]=P*C+I*K+R*le+D*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],u=e[1],d=e[5],h=e[9],p=e[13],_=e[2],x=e[6],m=e[10],y=e[14],w=e[3],E=e[7],S=e[11],v=e[15];return w*(+l*h*x-a*p*x-l*d*m+s*p*m+a*d*y-s*h*y)+E*(+t*h*y-t*p*m+l*u*m-a*u*y+a*p*_-l*h*_)+S*(+t*p*x-t*d*y-l*u*x+s*u*y+l*d*_-s*p*_)+v*(-a*d*_-t*h*x+t*d*m+a*u*x-s*u*m+s*h*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],_=e[8],x=e[9],m=e[10],y=e[11],w=e[12],E=e[13],S=e[14],v=e[15],P=x*S*p-E*m*p+E*h*y-d*S*y-x*h*v+d*m*v,I=w*m*p-_*S*p-w*h*y+u*S*y+_*h*v-u*m*v,R=_*E*p-w*x*p+w*d*y-u*E*y-_*d*v+u*x*v,D=w*x*h-_*E*h-w*d*m+u*E*m+_*d*S-u*x*S,U=t*P+s*I+a*R+l*D;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/U;return e[0]=P*k,e[1]=(E*m*l-x*S*l-E*a*y+s*S*y+x*a*v-s*m*v)*k,e[2]=(d*S*l-E*h*l+E*a*p-s*S*p-d*a*v+s*h*v)*k,e[3]=(x*h*l-d*m*l-x*a*p+s*m*p+d*a*y-s*h*y)*k,e[4]=I*k,e[5]=(_*S*l-w*m*l+w*a*y-t*S*y-_*a*v+t*m*v)*k,e[6]=(w*h*l-u*S*l-w*a*p+t*S*p+u*a*v-t*h*v)*k,e[7]=(u*m*l-_*h*l+_*a*p-t*m*p-u*a*y+t*h*y)*k,e[8]=R*k,e[9]=(w*x*l-_*E*l-w*s*y+t*E*y+_*s*v-t*x*v)*k,e[10]=(u*E*l-w*d*l+w*s*p-t*E*p-u*s*v+t*d*v)*k,e[11]=(_*d*l-u*x*l-_*s*p+t*x*p+u*s*y-t*d*y)*k,e[12]=D*k,e[13]=(_*E*a-w*x*a+w*s*m-t*E*m-_*s*S+t*x*S)*k,e[14]=(w*d*a-u*E*a-w*s*h+t*E*h+u*s*S-t*d*S)*k,e[15]=(u*x*a-_*d*a+_*s*h-t*x*h-u*s*m+t*d*m)*k,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,u=e.x,d=e.y,h=e.z,p=l*u,_=l*d;return this.set(p*u+s,p*d-a*h,p*h+a*d,0,p*d+a*h,_*d+s,_*h-a*u,0,p*h-a*d,_*h+a*u,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,u){return this.set(1,s,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,u=t._y,d=t._z,h=t._w,p=l+l,_=u+u,x=d+d,m=l*p,y=l*_,w=l*x,E=u*_,S=u*x,v=d*x,P=h*p,I=h*_,R=h*x,D=s.x,U=s.y,k=s.z;return a[0]=(1-(E+v))*D,a[1]=(y+R)*D,a[2]=(w-I)*D,a[3]=0,a[4]=(y-R)*U,a[5]=(1-(m+v))*U,a[6]=(S+P)*U,a[7]=0,a[8]=(w+I)*k,a[9]=(S-P)*k,a[10]=(1-(m+E))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=Ks.set(a[0],a[1],a[2]).length();const u=Ks.set(a[4],a[5],a[6]).length(),d=Ks.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],vi.copy(this);const p=1/l,_=1/u,x=1/d;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=_,vi.elements[5]*=_,vi.elements[6]*=_,vi.elements[8]*=x,vi.elements[9]*=x,vi.elements[10]*=x,t.setFromRotationMatrix(vi),s.x=l,s.y=u,s.z=d,this}makePerspective(e,t,s,a,l,u,d=tr){const h=this.elements,p=2*l/(t-e),_=2*l/(s-a),x=(t+e)/(t-e),m=(s+a)/(s-a);let y,w;if(d===tr)y=-(u+l)/(u-l),w=-2*u*l/(u-l);else if(d===_c)y=-u/(u-l),w=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=p,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=_,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,a,l,u,d=tr){const h=this.elements,p=1/(t-e),_=1/(s-a),x=1/(u-l),m=(t+e)*p,y=(s+a)*_;let w,E;if(d===tr)w=(u+l)*x,E=-2*x;else if(d===_c)w=l*x,E=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-m,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-y,h[2]=0,h[6]=0,h[10]=E,h[14]=-w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Ks=new J,vi=new Wt,CM=new J(0,0,0),RM=new J(1,1,1),Nr=new J,Hl=new J,Zn=new J,og=new Wt,lg=new vs;class li{constructor(e=0,t=0,s=0,a=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],u=a[4],d=a[8],h=a[1],p=a[5],_=a[9],x=a[2],m=a[6],y=a[10];switch(t){case"XYZ":this._y=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(m,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Mt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return og.makeRotationFromQuaternion(e),this.setFromRotationMatrix(og,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lg.setFromEuler(this),this.setFromQuaternion(lg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class tf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PM=0;const cg=new J,Zs=new vs,Ki=new Wt,Gl=new J,no=new J,NM=new J,DM=new vs,ug=new J(1,0,0),dg=new J(0,1,0),hg=new J(0,0,1),fg={type:"added"},LM={type:"removed"},Qs={type:"childadded",child:null},Ad={type:"childremoved",child:null};class yn extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new J,t=new li,s=new vs,a=new J(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Wt},normalMatrix:{value:new _t}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(ug,e)}rotateY(e){return this.rotateOnAxis(dg,e)}rotateZ(e){return this.rotateOnAxis(hg,e)}translateOnAxis(e,t){return cg.copy(e).applyQuaternion(this.quaternion),this.position.add(cg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ug,e)}translateY(e){return this.translateOnAxis(dg,e)}translateZ(e){return this.translateOnAxis(hg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Gl.copy(e):Gl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(no,Gl,this.up):Ki.lookAt(Gl,no,this.up),this.quaternion.setFromRotationMatrix(Ki),a&&(Ki.extractRotation(a.matrixWorld),Zs.setFromRotationMatrix(Ki),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fg),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(LM),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fg),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,NM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,DM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const x=h[p];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,p=this.material.length;h<p;h++)d.push(l(e.materials,this.material[h]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(l(e.animations,h))}}if(t){const d=u(e.geometries),h=u(e.materials),p=u(e.textures),_=u(e.images),x=u(e.shapes),m=u(e.skeletons),y=u(e.animations),w=u(e.nodes);d.length>0&&(s.geometries=d),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),m.length>0&&(s.skeletons=m),y.length>0&&(s.animations=y),w.length>0&&(s.nodes=w)}return s.object=a,s;function u(d){const h=[];for(const p in d){const _=d[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}yn.DEFAULT_UP=new J(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new J,Zi=new J,Cd=new J,Qi=new J,Js=new J,ea=new J,pg=new J,Rd=new J,Pd=new J,Nd=new J,Dd=new Qt,Ld=new Qt,Id=new Qt;class xi{constructor(e=new J,t=new J,s=new J){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),_i.subVectors(e,t),a.cross(_i);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){_i.subVectors(a,t),Zi.subVectors(s,t),Cd.subVectors(e,t);const u=_i.dot(_i),d=_i.dot(Zi),h=_i.dot(Cd),p=Zi.dot(Zi),_=Zi.dot(Cd),x=u*p-d*d;if(x===0)return l.set(0,0,0),null;const m=1/x,y=(p*h-d*_)*m,w=(u*_-d*h)*m;return l.set(1-y-w,w,y)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,s,a,l,u,d,h){return this.getBarycoord(e,t,s,a,Qi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Qi.x),h.addScaledVector(u,Qi.y),h.addScaledVector(d,Qi.z),h)}static getInterpolatedAttribute(e,t,s,a,l,u){return Dd.setScalar(0),Ld.setScalar(0),Id.setScalar(0),Dd.fromBufferAttribute(e,t),Ld.fromBufferAttribute(e,s),Id.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Dd,l.x),u.addScaledVector(Ld,l.y),u.addScaledVector(Id,l.z),u}static isFrontFacing(e,t,s,a){return _i.subVectors(s,t),Zi.subVectors(e,t),_i.cross(Zi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _i.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),_i.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return xi.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let u,d;Js.subVectors(a,s),ea.subVectors(l,s),Rd.subVectors(e,s);const h=Js.dot(Rd),p=ea.dot(Rd);if(h<=0&&p<=0)return t.copy(s);Pd.subVectors(e,a);const _=Js.dot(Pd),x=ea.dot(Pd);if(_>=0&&x<=_)return t.copy(a);const m=h*x-_*p;if(m<=0&&h>=0&&_<=0)return u=h/(h-_),t.copy(s).addScaledVector(Js,u);Nd.subVectors(e,l);const y=Js.dot(Nd),w=ea.dot(Nd);if(w>=0&&y<=w)return t.copy(l);const E=y*p-h*w;if(E<=0&&p>=0&&w<=0)return d=p/(p-w),t.copy(s).addScaledVector(ea,d);const S=_*w-y*x;if(S<=0&&x-_>=0&&y-w>=0)return pg.subVectors(l,a),d=(x-_)/(x-_+(y-w)),t.copy(a).addScaledVector(pg,d);const v=1/(S+E+m);return u=E*v,d=m*v,t.copy(s).addScaledVector(Js,u).addScaledVector(ea,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dr={h:0,s:0,l:0},Vl={h:0,s:0,l:0};function Ud(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class yt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Lt.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=Lt.workingColorSpace){if(e=mM(e,1),t=Mt(t,0,1),s=Mt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=Ud(u,l,e+1/3),this.g=Ud(u,l,e),this.b=Ud(u,l,e-1/3)}return Lt.toWorkingColorSpace(this,a),this}setStyle(e,t=oi){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=oi){const s=F0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Lt.fromWorkingColorSpace(Cn.copy(this),e),Math.round(Mt(Cn.r*255,0,255))*65536+Math.round(Mt(Cn.g*255,0,255))*256+Math.round(Mt(Cn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(Cn.copy(this),t);const s=Cn.r,a=Cn.g,l=Cn.b,u=Math.max(s,a,l),d=Math.min(s,a,l);let h,p;const _=(d+u)/2;if(d===u)h=0,p=0;else{const x=u-d;switch(p=_<=.5?x/(u+d):x/(2-u-d),u){case s:h=(a-l)/x+(a<l?6:0);break;case a:h=(l-s)/x+2;break;case l:h=(s-a)/x+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=oi){Lt.fromWorkingColorSpace(Cn.copy(this),e);const t=Cn.r,s=Cn.g,a=Cn.b;return e!==oi?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(Dr),this.setHSL(Dr.h+e,Dr.s+t,Dr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Dr),e.getHSL(Vl);const s=_d(Dr.h,Vl.h,t),a=_d(Dr.s,Vl.s,t),l=_d(Dr.l,Vl.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new yt;yt.NAMES=F0;let IM=0;class zr extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=yo(),this.name="",this.type="Material",this.blending=ca,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Qd,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ca&&(s.blending=this.blending),this.side!==Or&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Zd&&(s.blendSrc=this.blendSrc),this.blendDst!==Qd&&(s.blendDst=this.blendDst),this.blendEquation!==ls&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==da&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jn extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new J,jl=new lt;let UM=0;class Di{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=tg,this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)jl.fromBufferAttribute(this,t),jl.applyMatrix3(e),this.setXY(t,jl.x,jl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ja(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Hn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ja(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ja(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ja(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ja(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),s=Hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),s=Hn(s,this.array),a=Hn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),s=Hn(s,this.array),a=Hn(a,this.array),l=Hn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tg&&(e.usage=this.usage),e}}class O0 extends Di{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class B0 extends Di{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class rn extends Di{constructor(e,t,s){super(new Float32Array(e),t,s)}}let kM=0;const ai=new Wt,kd=new yn,ta=new J,Qn=new So,io=new So,gn=new J;class ci extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U0(e)?B0:O0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new _t().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,s){return ai.makeTranslation(e,t,s),this.applyMatrix4(ai),this}scale(e,t,s){return ai.makeScale(e,t,s),this.applyMatrix4(ai),this}lookAt(e){return kd.lookAt(e),kd.updateMatrix(),this.applyMatrix4(kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ta).negate(),this.translate(ta.x,ta.y,ta.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new rn(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Qn.setFromBufferAttribute(l),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ac);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const s=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];io.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(Qn.min,io.min),Qn.expandByPoint(gn),gn.addVectors(Qn.max,io.max),Qn.expandByPoint(gn)):(Qn.expandByPoint(io.min),Qn.expandByPoint(io.max))}Qn.getCenter(s);let a=0;for(let l=0,u=e.count;l<u;l++)gn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(gn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],h=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)gn.fromBufferAttribute(d,p),h&&(ta.fromBufferAttribute(e,p),gn.add(ta)),a=Math.max(a,s.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let z=0;z<s.count;z++)d[z]=new J,h[z]=new J;const p=new J,_=new J,x=new J,m=new lt,y=new lt,w=new lt,E=new J,S=new J;function v(z,C,T){p.fromBufferAttribute(s,z),_.fromBufferAttribute(s,C),x.fromBufferAttribute(s,T),m.fromBufferAttribute(l,z),y.fromBufferAttribute(l,C),w.fromBufferAttribute(l,T),_.sub(p),x.sub(p),y.sub(m),w.sub(m);const F=1/(y.x*w.y-w.x*y.y);isFinite(F)&&(E.copy(_).multiplyScalar(w.y).addScaledVector(x,-y.y).multiplyScalar(F),S.copy(x).multiplyScalar(y.x).addScaledVector(_,-w.x).multiplyScalar(F),d[z].add(E),d[C].add(E),d[T].add(E),h[z].add(S),h[C].add(S),h[T].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let z=0,C=P.length;z<C;++z){const T=P[z],F=T.start,Y=T.count;for(let K=F,re=F+Y;K<re;K+=3)v(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const I=new J,R=new J,D=new J,U=new J;function k(z){D.fromBufferAttribute(a,z),U.copy(D);const C=d[z];I.copy(C),I.sub(D.multiplyScalar(D.dot(C))).normalize(),R.crossVectors(U,C);const F=R.dot(h[z])<0?-1:1;u.setXYZW(z,I.x,I.y,I.z,F)}for(let z=0,C=P.length;z<C;++z){const T=P[z],F=T.start,Y=T.count;for(let K=F,re=F+Y;K<re;K+=3)k(e.getX(K+0)),k(e.getX(K+1)),k(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Di(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let m=0,y=s.count;m<y;m++)s.setXYZ(m,0,0,0);const a=new J,l=new J,u=new J,d=new J,h=new J,p=new J,_=new J,x=new J;if(e)for(let m=0,y=e.count;m<y;m+=3){const w=e.getX(m+0),E=e.getX(m+1),S=e.getX(m+2);a.fromBufferAttribute(t,w),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,S),_.subVectors(u,l),x.subVectors(a,l),_.cross(x),d.fromBufferAttribute(s,w),h.fromBufferAttribute(s,E),p.fromBufferAttribute(s,S),d.add(_),h.add(_),p.add(_),s.setXYZ(w,d.x,d.y,d.z),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let m=0,y=t.count;m<y;m+=3)a.fromBufferAttribute(t,m+0),l.fromBufferAttribute(t,m+1),u.fromBufferAttribute(t,m+2),_.subVectors(u,l),x.subVectors(a,l),_.cross(x),s.setXYZ(m+0,_.x,_.y,_.z),s.setXYZ(m+1,_.x,_.y,_.z),s.setXYZ(m+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,h){const p=d.array,_=d.itemSize,x=d.normalized,m=new p.constructor(h.length*_);let y=0,w=0;for(let E=0,S=h.length;E<S;E++){d.isInterleavedBufferAttribute?y=h[E]*d.data.stride+d.offset:y=h[E]*_;for(let v=0;v<_;v++)m[w++]=p[y++]}return new Di(m,_,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ci,s=this.index.array,a=this.attributes;for(const d in a){const h=a[d],p=e(h,s);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const h=[],p=l[d];for(let _=0,x=p.length;_<x;_++){const m=p[_],y=e(m,s);h.push(y)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let x=0,m=p.length;x<m;x++){const y=p[x];_.push(y.toJSON(e.data))}_.length>0&&(a[h]=_,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const p in a){const _=a[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],x=l[p];for(let m=0,y=x.length;m<y;m++)_.push(x[m].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mg=new Wt,is=new Cc,Wl=new Ac,gg=new J,Xl=new J,$l=new J,Yl=new J,Fd=new J,ql=new J,vg=new J,Kl=new J;class xe extends yn{constructor(e=new ci,t=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){ql.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=d[h],x=l[h];_!==0&&(Fd.fromBufferAttribute(x,e),u?ql.addScaledVector(Fd,_):ql.addScaledVector(Fd.sub(t),_))}t.add(ql)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Wl.copy(s.boundingSphere),Wl.applyMatrix4(l),is.copy(e.ray).recast(e.near),!(Wl.containsPoint(is.origin)===!1&&(is.intersectSphere(Wl,gg)===null||is.origin.distanceToSquared(gg)>(e.far-e.near)**2))&&(mg.copy(l).invert(),is.copy(e.ray).applyMatrix4(mg),!(s.boundingBox!==null&&is.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,s){let a;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,x=l.attributes.normal,m=l.groups,y=l.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,E=m.length;w<E;w++){const S=m[w],v=u[S.materialIndex],P=Math.max(S.start,y.start),I=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let R=P,D=I;R<D;R+=3){const U=d.getX(R),k=d.getX(R+1),z=d.getX(R+2);a=Zl(this,v,e,s,p,_,x,U,k,z),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const w=Math.max(0,y.start),E=Math.min(d.count,y.start+y.count);for(let S=w,v=E;S<v;S+=3){const P=d.getX(S),I=d.getX(S+1),R=d.getX(S+2);a=Zl(this,u,e,s,p,_,x,P,I,R),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,E=m.length;w<E;w++){const S=m[w],v=u[S.materialIndex],P=Math.max(S.start,y.start),I=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let R=P,D=I;R<D;R+=3){const U=R,k=R+1,z=R+2;a=Zl(this,v,e,s,p,_,x,U,k,z),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const w=Math.max(0,y.start),E=Math.min(h.count,y.start+y.count);for(let S=w,v=E;S<v;S+=3){const P=S,I=S+1,R=S+2;a=Zl(this,u,e,s,p,_,x,P,I,R),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function FM(r,e,t,s,a,l,u,d){let h;if(e.side===Wn?h=s.intersectTriangle(u,l,a,!0,d):h=s.intersectTriangle(a,l,u,e.side===Or,d),h===null)return null;Kl.copy(d),Kl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Kl);return p<t.near||p>t.far?null:{distance:p,point:Kl.clone(),object:r}}function Zl(r,e,t,s,a,l,u,d,h,p){r.getVertexPosition(d,Xl),r.getVertexPosition(h,$l),r.getVertexPosition(p,Yl);const _=FM(r,e,t,s,Xl,$l,Yl,vg);if(_){const x=new J;xi.getBarycoord(vg,Xl,$l,Yl,x),a&&(_.uv=xi.getInterpolatedAttribute(a,d,h,p,x,new lt)),l&&(_.uv1=xi.getInterpolatedAttribute(l,d,h,p,x,new lt)),u&&(_.normal=xi.getInterpolatedAttribute(u,d,h,p,x,new J),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const m={a:d,b:h,c:p,normal:new J,materialIndex:0};xi.getNormal(Xl,$l,Yl,m.normal),_.face=m,_.barycoord=x}return _}class Mo extends ci{constructor(e=1,t=1,s=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:u};const d=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],_=[],x=[];let m=0,y=0;w("z","y","x",-1,-1,s,t,e,u,l,0),w("z","y","x",1,-1,s,t,-e,u,l,1),w("x","z","y",1,1,e,s,t,a,u,2),w("x","z","y",1,-1,e,s,-t,a,u,3),w("x","y","z",1,-1,e,t,s,a,l,4),w("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(h),this.setAttribute("position",new rn(p,3)),this.setAttribute("normal",new rn(_,3)),this.setAttribute("uv",new rn(x,2));function w(E,S,v,P,I,R,D,U,k,z,C){const T=R/k,F=D/z,Y=R/2,K=D/2,re=U/2,he=k+1,oe=z+1;let le=0,G=0;const me=new J;for(let fe=0;fe<oe;fe++){const H=fe*F-K;for(let ce=0;ce<he;ce++){const ke=ce*T-Y;me[E]=ke*P,me[S]=H*I,me[v]=re,p.push(me.x,me.y,me.z),me[E]=0,me[S]=0,me[v]=U>0?1:-1,_.push(me.x,me.y,me.z),x.push(ce/k),x.push(1-fe/z),le+=1}}for(let fe=0;fe<z;fe++)for(let H=0;H<k;H++){const ce=m+H+he*fe,ke=m+H+he*(fe+1),se=m+(H+1)+he*(fe+1),ge=m+(H+1)+he*fe;h.push(ce,ke,ge),h.push(ke,se,ge),G+=6}d.addGroup(y,G,C),y+=G,m+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ma(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function Ln(r){const e={};for(let t=0;t<r.length;t++){const s=ma(r[t]);for(const a in s)e[a]=s[a]}return e}function OM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function z0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const BM={clone:ma,merge:Ln};var zM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Br extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zM,this.fragmentShader=HM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ma(e.uniforms),this.uniformsGroups=OM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class H0 extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=tr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Lr=new J,_g=new lt,xg=new lt;class Vn extends H0{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kh*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z),Lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Lr.x,Lr.y).multiplyScalar(-e/Lr.z)}getViewSize(e,t){return this.getViewBounds(e,_g,xg),t.subVectors(xg,_g)}setViewOffset(e,t,s,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fc*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/h,t-=u.offsetY*s/p,a*=u.width/h,s*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const na=-90,ia=1;class GM extends yn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Vn(na,ia,e,t);a.layers=this.layers,this.add(a);const l=new Vn(na,ia,e,t);l.layers=this.layers,this.add(l);const u=new Vn(na,ia,e,t);u.layers=this.layers,this.add(u);const d=new Vn(na,ia,e,t);d.layers=this.layers,this.add(d);const h=new Vn(na,ia,e,t);h.layers=this.layers,this.add(h);const p=new Vn(na,ia,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,u,d,h]=t;for(const p of t)this.remove(p);if(e===tr)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===_c)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,p,_]=this.children,x=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const E=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,u),e.setRenderTarget(s,2,a),e.render(t,d),e.setRenderTarget(s,3,a),e.render(t,h),e.setRenderTarget(s,4,a),e.render(t,p),s.texture.generateMipmaps=E,e.setRenderTarget(s,5,a),e.render(t,_),e.setRenderTarget(x,m,y),e.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class G0 extends Xn{constructor(e=[],t=ha,s,a,l,u,d,h,p,_){super(e,t,s,a,l,u,d,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class VM extends gs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new G0(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ni}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Mo(5,5,5),l=new Br({name:"CubemapFromEquirect",uniforms:ma(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:kr});l.uniforms.tEquirect.value=t;const u=new xe(a,l),d=t.minFilter;return t.minFilter===hs&&(t.minFilter=Ni),new GM(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,a);e.setRenderTarget(l)}}class fs extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jM={type:"move"};class Od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,u=null;const d=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,s),v=this._getHandJoint(p,E);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],m=_.position.distanceTo(x.position),y=.02,w=.005;p.inputState.pinching&&m>y+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&m<=y-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(jM)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new fs;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class nf extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bd=new J,WM=new J,XM=new _t;class Ir{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Bd.subVectors(s,t).cross(WM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Bd),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||XM.getNormalMatrix(e),a=this.coplanarPoint(Bd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new Ac,Ql=new J;class rf{constructor(e=new Ir,t=new Ir,s=new Ir,a=new Ir,l=new Ir,u=new Ir){this.planes=[e,t,s,a,l,u]}set(e,t,s,a,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(a),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=tr){const s=this.planes,a=e.elements,l=a[0],u=a[1],d=a[2],h=a[3],p=a[4],_=a[5],x=a[6],m=a[7],y=a[8],w=a[9],E=a[10],S=a[11],v=a[12],P=a[13],I=a[14],R=a[15];if(s[0].setComponents(h-l,m-p,S-y,R-v).normalize(),s[1].setComponents(h+l,m+p,S+y,R+v).normalize(),s[2].setComponents(h+u,m+_,S+w,R+P).normalize(),s[3].setComponents(h-u,m-_,S-w,R-P).normalize(),s[4].setComponents(h-d,m-x,S-E,R-I).normalize(),t===tr)s[5].setComponents(h+d,m+x,S+E,R+I).normalize();else if(t===_c)s[5].setComponents(d,x,E,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Ql.x=a.normal.x>0?e.max.x:e.min.x,Ql.y=a.normal.y>0?e.max.y:e.min.y,Ql.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class V0 extends zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const yc=new J,Sc=new J,yg=new Wt,ro=new Cc,Jl=new Ac,zd=new J,Sg=new J;class $M extends yn{constructor(e=new ci,t=new V0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let a=1,l=t.count;a<l;a++)yc.fromBufferAttribute(t,a-1),Sc.fromBufferAttribute(t,a),s[a]=s[a-1],s[a]+=yc.distanceTo(Sc);e.setAttribute("lineDistance",new rn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Jl.copy(s.boundingSphere),Jl.applyMatrix4(a),Jl.radius+=l,e.ray.intersectsSphere(Jl)===!1)return;yg.copy(a).invert(),ro.copy(e.ray).applyMatrix4(yg);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,p=this.isLineSegments?2:1,_=s.index,m=s.attributes.position;if(_!==null){const y=Math.max(0,u.start),w=Math.min(_.count,u.start+u.count);for(let E=y,S=w-1;E<S;E+=p){const v=_.getX(E),P=_.getX(E+1),I=ec(this,e,ro,h,v,P,E);I&&t.push(I)}if(this.isLineLoop){const E=_.getX(w-1),S=_.getX(y),v=ec(this,e,ro,h,E,S,w-1);v&&t.push(v)}}else{const y=Math.max(0,u.start),w=Math.min(m.count,u.start+u.count);for(let E=y,S=w-1;E<S;E+=p){const v=ec(this,e,ro,h,E,E+1,E);v&&t.push(v)}if(this.isLineLoop){const E=ec(this,e,ro,h,w-1,y,w-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function ec(r,e,t,s,a,l,u){const d=r.geometry.attributes.position;if(yc.fromBufferAttribute(d,a),Sc.fromBufferAttribute(d,l),t.distanceSqToSegment(yc,Sc,zd,Sg)>s)return;zd.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(zd);if(!(p<e.near||p>e.far))return{distance:p,point:Sg.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const Mg=new J,wg=new J;class YM extends $M{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let a=0,l=t.count;a<l;a+=2)Mg.fromBufferAttribute(t,a),wg.fromBufferAttribute(t,a+1),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Mg.distanceTo(wg);e.setAttribute("lineDistance",new rn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class j0 extends Xn{constructor(e,t,s=ms,a,l,u,d=Si,h=Si,p,_=ho){if(_!==ho&&_!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,a,l,u,d,h,_,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ef(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ft extends ci{constructor(e=1,t=1,s=1,a=32,l=1,u=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const _=[],x=[],m=[],y=[];let w=0;const E=[],S=s/2;let v=0;P(),u===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(_),this.setAttribute("position",new rn(x,3)),this.setAttribute("normal",new rn(m,3)),this.setAttribute("uv",new rn(y,2));function P(){const R=new J,D=new J;let U=0;const k=(t-e)/s;for(let z=0;z<=l;z++){const C=[],T=z/l,F=T*(t-e)+e;for(let Y=0;Y<=a;Y++){const K=Y/a,re=K*h+d,he=Math.sin(re),oe=Math.cos(re);D.x=F*he,D.y=-T*s+S,D.z=F*oe,x.push(D.x,D.y,D.z),R.set(he,k,oe).normalize(),m.push(R.x,R.y,R.z),y.push(K,1-T),C.push(w++)}E.push(C)}for(let z=0;z<a;z++)for(let C=0;C<l;C++){const T=E[C][z],F=E[C+1][z],Y=E[C+1][z+1],K=E[C][z+1];(e>0||C!==0)&&(_.push(T,F,K),U+=3),(t>0||C!==l-1)&&(_.push(F,Y,K),U+=3)}p.addGroup(v,U,0),v+=U}function I(R){const D=w,U=new lt,k=new J;let z=0;const C=R===!0?e:t,T=R===!0?1:-1;for(let Y=1;Y<=a;Y++)x.push(0,S*T,0),m.push(0,T,0),y.push(.5,.5),w++;const F=w;for(let Y=0;Y<=a;Y++){const re=Y/a*h+d,he=Math.cos(re),oe=Math.sin(re);k.x=C*oe,k.y=S*T,k.z=C*he,x.push(k.x,k.y,k.z),m.push(0,T,0),U.x=he*.5+.5,U.y=oe*.5*T+.5,y.push(U.x,U.y),w++}for(let Y=0;Y<a;Y++){const K=D+Y,re=F+Y;R===!0?_.push(re,re+1,K):_.push(re+1,re,K),z+=3}p.addGroup(v,z,R===!0?1:2),v+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Li extends ft{constructor(e=1,t=1,s=32,a=1,l=!1,u=0,d=Math.PI*2){super(0,e,t,s,a,l,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:s,heightSegments:a,openEnded:l,thetaStart:u,thetaLength:d}}static fromJSON(e){return new Li(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sf extends ci{constructor(e=[],t=[],s=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:s,detail:a};const l=[],u=[];d(a),p(s),_(),this.setAttribute("position",new rn(l,3)),this.setAttribute("normal",new rn(l.slice(),3)),this.setAttribute("uv",new rn(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(P){const I=new J,R=new J,D=new J;for(let U=0;U<t.length;U+=3)y(t[U+0],I),y(t[U+1],R),y(t[U+2],D),h(I,R,D,P)}function h(P,I,R,D){const U=D+1,k=[];for(let z=0;z<=U;z++){k[z]=[];const C=P.clone().lerp(R,z/U),T=I.clone().lerp(R,z/U),F=U-z;for(let Y=0;Y<=F;Y++)Y===0&&z===U?k[z][Y]=C:k[z][Y]=C.clone().lerp(T,Y/F)}for(let z=0;z<U;z++)for(let C=0;C<2*(U-z)-1;C++){const T=Math.floor(C/2);C%2===0?(m(k[z][T+1]),m(k[z+1][T]),m(k[z][T])):(m(k[z][T+1]),m(k[z+1][T+1]),m(k[z+1][T]))}}function p(P){const I=new J;for(let R=0;R<l.length;R+=3)I.x=l[R+0],I.y=l[R+1],I.z=l[R+2],I.normalize().multiplyScalar(P),l[R+0]=I.x,l[R+1]=I.y,l[R+2]=I.z}function _(){const P=new J;for(let I=0;I<l.length;I+=3){P.x=l[I+0],P.y=l[I+1],P.z=l[I+2];const R=S(P)/2/Math.PI+.5,D=v(P)/Math.PI+.5;u.push(R,1-D)}w(),x()}function x(){for(let P=0;P<u.length;P+=6){const I=u[P+0],R=u[P+2],D=u[P+4],U=Math.max(I,R,D),k=Math.min(I,R,D);U>.9&&k<.1&&(I<.2&&(u[P+0]+=1),R<.2&&(u[P+2]+=1),D<.2&&(u[P+4]+=1))}}function m(P){l.push(P.x,P.y,P.z)}function y(P,I){const R=P*3;I.x=e[R+0],I.y=e[R+1],I.z=e[R+2]}function w(){const P=new J,I=new J,R=new J,D=new J,U=new lt,k=new lt,z=new lt;for(let C=0,T=0;C<l.length;C+=9,T+=6){P.set(l[C+0],l[C+1],l[C+2]),I.set(l[C+3],l[C+4],l[C+5]),R.set(l[C+6],l[C+7],l[C+8]),U.set(u[T+0],u[T+1]),k.set(u[T+2],u[T+3]),z.set(u[T+4],u[T+5]),D.copy(P).add(I).add(R).divideScalar(3);const F=S(D);E(U,T+0,P,F),E(k,T+2,I,F),E(z,T+4,R,F)}}function E(P,I,R,D){D<0&&P.x===1&&(u[I]=P.x-1),R.x===0&&R.z===0&&(u[I]=D/2/Math.PI+.5)}function S(P){return Math.atan2(P.z,-P.x)}function v(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.vertices,e.indices,e.radius,e.details)}}class wo extends sf{constructor(e=1,t=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wo(e.radius,e.detail)}}class Eo extends ci{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,u=t/2,d=Math.floor(s),h=Math.floor(a),p=d+1,_=h+1,x=e/d,m=t/h,y=[],w=[],E=[],S=[];for(let v=0;v<_;v++){const P=v*m-u;for(let I=0;I<p;I++){const R=I*x-l;w.push(R,-P,0),E.push(0,0,1),S.push(I/d),S.push(1-v/h)}}for(let v=0;v<h;v++)for(let P=0;P<d;P++){const I=P+p*v,R=P+p*(v+1),D=P+1+p*(v+1),U=P+1+p*v;y.push(I,R,U),y.push(R,D,U)}this.setIndex(y),this.setAttribute("position",new rn(w,3)),this.setAttribute("normal",new rn(E,3)),this.setAttribute("uv",new rn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.widthSegments,e.heightSegments)}}class vt extends ci{constructor(e=1,t=32,s=16,a=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:a,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const h=Math.min(u+d,Math.PI);let p=0;const _=[],x=new J,m=new J,y=[],w=[],E=[],S=[];for(let v=0;v<=s;v++){const P=[],I=v/s;let R=0;v===0&&u===0?R=.5/t:v===s&&h===Math.PI&&(R=-.5/t);for(let D=0;D<=t;D++){const U=D/t;x.x=-e*Math.cos(a+U*l)*Math.sin(u+I*d),x.y=e*Math.cos(u+I*d),x.z=e*Math.sin(a+U*l)*Math.sin(u+I*d),w.push(x.x,x.y,x.z),m.copy(x).normalize(),E.push(m.x,m.y,m.z),S.push(U+R,1-I),P.push(p++)}_.push(P)}for(let v=0;v<s;v++)for(let P=0;P<t;P++){const I=_[v][P+1],R=_[v][P],D=_[v+1][P],U=_[v+1][P+1];(v!==0||u>0)&&y.push(I,R,U),(v!==s-1||h<Math.PI)&&y.push(R,D,U)}this.setIndex(y),this.setAttribute("position",new rn(w,3)),this.setAttribute("normal",new rn(E,3)),this.setAttribute("uv",new rn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qM extends zr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nt extends zr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new yt(16777215),this.specular=new yt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ft extends zr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class KM extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZM extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class W0 extends yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Hd=new Wt,Eg=new J,Tg=new J;class QM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Ui,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rf,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Eg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eg),Tg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tg),t.updateMatrixWorld(),Hd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class X0 extends H0{constructor(e=-1,t=1,s=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,u=s+e,d=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=_*this.view.offsetY,h=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class JM extends QM{constructor(){super(new X0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class af extends W0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new JM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class of extends W0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ew extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const bg=new Wt;class Ag{constructor(e,t,s=0,a=1/0){this.ray=new Cc(e,t),this.near=s,this.far=a,this.camera=null,this.layers=new tf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bg),this}intersectObject(e,t=!0,s=[]){return Fh(e,this,s,t),s.sort(Cg),s}intersectObjects(e,t=!0,s=[]){for(let a=0,l=e.length;a<l;a++)Fh(e[a],this,s,t);return s.sort(Cg),s}}function Cg(r,e){return r.distance-e.distance}function Fh(r,e,t,s){let a=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(a=!1),a===!0&&s===!0){const l=r.children;for(let u=0,d=l.length;u<d;u++)Fh(l[u],e,t,!0)}}class Rg{constructor(e=1,t=0,s=0){this.radius=e,this.phi=t,this.theta=s}set(e,t,s){return this.radius=e,this.phi=t,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,s){return this.radius=Math.sqrt(e*e+t*t+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class tw extends YM{constructor(e=10,t=10,s=4473924,a=8947848){s=new yt(s),a=new yt(a);const l=t/2,u=e/t,d=e/2,h=[],p=[];for(let m=0,y=0,w=-d;m<=t;m++,w+=u){h.push(-d,0,w,d,0,w),h.push(w,0,-d,w,0,d);const E=m===l?s:a;E.toArray(p,y),y+=3,E.toArray(p,y),y+=3,E.toArray(p,y),y+=3,E.toArray(p,y),y+=3}const _=new ci;_.setAttribute("position",new rn(h,3)),_.setAttribute("color",new rn(p,3));const x=new V0({vertexColors:!0,toneMapped:!1});super(_,x),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class nw extends xs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Pg(r,e,t,s){const a=iw(s);switch(t){case R0:return r*e;case N0:return r*e/a.components*a.byteLength;case Zh:return r*e/a.components*a.byteLength;case D0:return r*e*2/a.components*a.byteLength;case Qh:return r*e*2/a.components*a.byteLength;case P0:return r*e*3/a.components*a.byteLength;case yi:return r*e*4/a.components*a.byteLength;case Jh:return r*e*4/a.components*a.byteLength;case lc:case cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case uc:case dc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dh:case fh:return Math.max(r,16)*Math.max(e,8)/4;case uh:case hh:return Math.max(r,8)*Math.max(e,8)/2;case ph:case mh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case gh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case xh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case yh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case wh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Th:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case bh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Rh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case hc:case Nh:case Dh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case L0:case Lh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ih:case Uh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function iw(r){switch(r){case Ui:case b0:return{byteLength:1,components:1};case co:case A0:case xo:return{byteLength:2,components:1};case qh:case Kh:return{byteLength:2,components:4};case ms:case Yh:case er:return{byteLength:4,components:1};case C0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$h}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$h);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $0(){let r=null,e=!1,t=null,s=null;function a(l,u){t(l,u),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function rw(r){const e=new WeakMap;function t(d,h){const p=d.array,_=d.usage,x=p.byteLength,m=r.createBuffer();r.bindBuffer(h,m),r.bufferData(h,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,h,p){const _=h.array,x=h.updateRanges;if(r.bindBuffer(p,d),x.length===0)r.bufferSubData(p,0,_);else{x.sort((y,w)=>y.start-w.start);let m=0;for(let y=1;y<x.length;y++){const w=x[m],E=x[y];E.start<=w.start+w.count+1?w.count=Math.max(w.count,E.start+E.count-w.start):(++m,x[m]=E)}x.length=m+1;for(let y=0,w=x.length;y<w;y++){const E=x[y];r.bufferSubData(p,E.start*_.BYTES_PER_ELEMENT,_,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(r.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,h),p.version=d.version}}return{get:a,remove:l,update:u}}var sw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ow=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_w=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ww=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ew=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Aw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uw="gl_FragColor = linearToOutputTexel( gl_FragColor );",kw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ow=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ww=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$w=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,e1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,i1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,r1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,s1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,a1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,o1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,p1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,S1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,w1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,E1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,C1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,N1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,I1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,H1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,G1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,V1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,j1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,X1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Y1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,J1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_E=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:sw,alphahash_pars_fragment:aw,alphamap_fragment:ow,alphamap_pars_fragment:lw,alphatest_fragment:cw,alphatest_pars_fragment:uw,aomap_fragment:dw,aomap_pars_fragment:hw,batching_pars_vertex:fw,batching_vertex:pw,begin_vertex:mw,beginnormal_vertex:gw,bsdfs:vw,iridescence_fragment:_w,bumpmap_pars_fragment:xw,clipping_planes_fragment:yw,clipping_planes_pars_fragment:Sw,clipping_planes_pars_vertex:Mw,clipping_planes_vertex:ww,color_fragment:Ew,color_pars_fragment:Tw,color_pars_vertex:bw,color_vertex:Aw,common:Cw,cube_uv_reflection_fragment:Rw,defaultnormal_vertex:Pw,displacementmap_pars_vertex:Nw,displacementmap_vertex:Dw,emissivemap_fragment:Lw,emissivemap_pars_fragment:Iw,colorspace_fragment:Uw,colorspace_pars_fragment:kw,envmap_fragment:Fw,envmap_common_pars_fragment:Ow,envmap_pars_fragment:Bw,envmap_pars_vertex:zw,envmap_physical_pars_fragment:Zw,envmap_vertex:Hw,fog_vertex:Gw,fog_pars_vertex:Vw,fog_fragment:jw,fog_pars_fragment:Ww,gradientmap_pars_fragment:Xw,lightmap_pars_fragment:$w,lights_lambert_fragment:Yw,lights_lambert_pars_fragment:qw,lights_pars_begin:Kw,lights_toon_fragment:Qw,lights_toon_pars_fragment:Jw,lights_phong_fragment:e1,lights_phong_pars_fragment:t1,lights_physical_fragment:n1,lights_physical_pars_fragment:i1,lights_fragment_begin:r1,lights_fragment_maps:s1,lights_fragment_end:a1,logdepthbuf_fragment:o1,logdepthbuf_pars_fragment:l1,logdepthbuf_pars_vertex:c1,logdepthbuf_vertex:u1,map_fragment:d1,map_pars_fragment:h1,map_particle_fragment:f1,map_particle_pars_fragment:p1,metalnessmap_fragment:m1,metalnessmap_pars_fragment:g1,morphinstance_vertex:v1,morphcolor_vertex:_1,morphnormal_vertex:x1,morphtarget_pars_vertex:y1,morphtarget_vertex:S1,normal_fragment_begin:M1,normal_fragment_maps:w1,normal_pars_fragment:E1,normal_pars_vertex:T1,normal_vertex:b1,normalmap_pars_fragment:A1,clearcoat_normal_fragment_begin:C1,clearcoat_normal_fragment_maps:R1,clearcoat_pars_fragment:P1,iridescence_pars_fragment:N1,opaque_fragment:D1,packing:L1,premultiplied_alpha_fragment:I1,project_vertex:U1,dithering_fragment:k1,dithering_pars_fragment:F1,roughnessmap_fragment:O1,roughnessmap_pars_fragment:B1,shadowmap_pars_fragment:z1,shadowmap_pars_vertex:H1,shadowmap_vertex:G1,shadowmask_pars_fragment:V1,skinbase_vertex:j1,skinning_pars_vertex:W1,skinning_vertex:X1,skinnormal_vertex:$1,specularmap_fragment:Y1,specularmap_pars_fragment:q1,tonemapping_fragment:K1,tonemapping_pars_fragment:Z1,transmission_fragment:Q1,transmission_pars_fragment:J1,uv_pars_fragment:eE,uv_pars_vertex:tE,uv_vertex:nE,worldpos_vertex:iE,background_vert:rE,background_frag:sE,backgroundCube_vert:aE,backgroundCube_frag:oE,cube_vert:lE,cube_frag:cE,depth_vert:uE,depth_frag:dE,distanceRGBA_vert:hE,distanceRGBA_frag:fE,equirect_vert:pE,equirect_frag:mE,linedashed_vert:gE,linedashed_frag:vE,meshbasic_vert:_E,meshbasic_frag:xE,meshlambert_vert:yE,meshlambert_frag:SE,meshmatcap_vert:ME,meshmatcap_frag:wE,meshnormal_vert:EE,meshnormal_frag:TE,meshphong_vert:bE,meshphong_frag:AE,meshphysical_vert:CE,meshphysical_frag:RE,meshtoon_vert:PE,meshtoon_frag:NE,points_vert:DE,points_frag:LE,shadow_vert:IE,shadow_frag:UE,sprite_vert:kE,sprite_frag:FE},Ue={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Ci={basic:{uniforms:Ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Ln([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Ln([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Ln([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Ln([Ue.points,Ue.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Ln([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Ln([Ue.common,Ue.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Ln([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Ln([Ue.sprite,Ue.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Ln([Ue.common,Ue.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Ln([Ue.lights,Ue.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Ci.physical={uniforms:Ln([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const tc={r:0,b:0,g:0},ss=new li,OE=new Wt;function BE(r,e,t,s,a,l,u){const d=new yt(0);let h=l===!0?0:1,p,_,x=null,m=0,y=null;function w(I){let R=I.isScene===!0?I.background:null;return R&&R.isTexture&&(R=(I.backgroundBlurriness>0?t:e).get(R)),R}function E(I){let R=!1;const D=w(I);D===null?v(d,h):D&&D.isColor&&(v(D,1),R=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?s.buffers.color.setClear(0,0,0,1,u):U==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(r.autoClear||R)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(I,R){const D=w(R);D&&(D.isCubeTexture||D.mapping===Tc)?(_===void 0&&(_=new xe(new Mo(1,1,1),new Br({name:"BackgroundCubeMaterial",uniforms:ma(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(U,k,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),ss.copy(R.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),_.material.uniforms.envMap.value=D,_.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(OE.makeRotationFromEuler(ss)),_.material.toneMapped=Lt.getTransfer(D.colorSpace)!==It,(x!==D||m!==D.version||y!==r.toneMapping)&&(_.material.needsUpdate=!0,x=D,m=D.version,y=r.toneMapping),_.layers.enableAll(),I.unshift(_,_.geometry,_.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new xe(new Eo(2,2),new Br({name:"BackgroundMaterial",uniforms:ma(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Lt.getTransfer(D.colorSpace)!==It,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(x!==D||m!==D.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,x=D,m=D.version,y=r.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null))}function v(I,R){I.getRGB(tc,z0(r)),s.buffers.color.setClear(tc.r,tc.g,tc.b,R,u)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(I,R=1){d.set(I),h=R,v(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,v(d,h)},render:E,addToRenderList:S,dispose:P}}function zE(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=m(null);let l=a,u=!1;function d(T,F,Y,K,re){let he=!1;const oe=x(K,Y,F);l!==oe&&(l=oe,p(l.object)),he=y(T,K,Y,re),he&&w(T,K,Y,re),re!==null&&e.update(re,r.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,R(T,F,Y,K),re!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function h(){return r.createVertexArray()}function p(T){return r.bindVertexArray(T)}function _(T){return r.deleteVertexArray(T)}function x(T,F,Y){const K=Y.wireframe===!0;let re=s[T.id];re===void 0&&(re={},s[T.id]=re);let he=re[F.id];he===void 0&&(he={},re[F.id]=he);let oe=he[K];return oe===void 0&&(oe=m(h()),he[K]=oe),oe}function m(T){const F=[],Y=[],K=[];for(let re=0;re<t;re++)F[re]=0,Y[re]=0,K[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Y,attributeDivisors:K,object:T,attributes:{},index:null}}function y(T,F,Y,K){const re=l.attributes,he=F.attributes;let oe=0;const le=Y.getAttributes();for(const G in le)if(le[G].location>=0){const fe=re[G];let H=he[G];if(H===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(H=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(H=T.instanceColor)),fe===void 0||fe.attribute!==H||H&&fe.data!==H.data)return!0;oe++}return l.attributesNum!==oe||l.index!==K}function w(T,F,Y,K){const re={},he=F.attributes;let oe=0;const le=Y.getAttributes();for(const G in le)if(le[G].location>=0){let fe=he[G];fe===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(fe=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(fe=T.instanceColor));const H={};H.attribute=fe,fe&&fe.data&&(H.data=fe.data),re[G]=H,oe++}l.attributes=re,l.attributesNum=oe,l.index=K}function E(){const T=l.newAttributes;for(let F=0,Y=T.length;F<Y;F++)T[F]=0}function S(T){v(T,0)}function v(T,F){const Y=l.newAttributes,K=l.enabledAttributes,re=l.attributeDivisors;Y[T]=1,K[T]===0&&(r.enableVertexAttribArray(T),K[T]=1),re[T]!==F&&(r.vertexAttribDivisor(T,F),re[T]=F)}function P(){const T=l.newAttributes,F=l.enabledAttributes;for(let Y=0,K=F.length;Y<K;Y++)F[Y]!==T[Y]&&(r.disableVertexAttribArray(Y),F[Y]=0)}function I(T,F,Y,K,re,he,oe){oe===!0?r.vertexAttribIPointer(T,F,Y,re,he):r.vertexAttribPointer(T,F,Y,K,re,he)}function R(T,F,Y,K){E();const re=K.attributes,he=Y.getAttributes(),oe=F.defaultAttributeValues;for(const le in he){const G=he[le];if(G.location>=0){let me=re[le];if(me===void 0&&(le==="instanceMatrix"&&T.instanceMatrix&&(me=T.instanceMatrix),le==="instanceColor"&&T.instanceColor&&(me=T.instanceColor)),me!==void 0){const fe=me.normalized,H=me.itemSize,ce=e.get(me);if(ce===void 0)continue;const ke=ce.buffer,se=ce.type,ge=ce.bytesPerElement,Ee=se===r.INT||se===r.UNSIGNED_INT||me.gpuType===Yh;if(me.isInterleavedBufferAttribute){const ye=me.data,De=ye.stride,$e=me.offset;if(ye.isInstancedInterleavedBuffer){for(let Ge=0;Ge<G.locationSize;Ge++)v(G.location+Ge,ye.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ge=0;Ge<G.locationSize;Ge++)S(G.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let Ge=0;Ge<G.locationSize;Ge++)I(G.location+Ge,H/G.locationSize,se,fe,De*ge,($e+H/G.locationSize*Ge)*ge,Ee)}else{if(me.isInstancedBufferAttribute){for(let ye=0;ye<G.locationSize;ye++)v(G.location+ye,me.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ye=0;ye<G.locationSize;ye++)S(G.location+ye);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let ye=0;ye<G.locationSize;ye++)I(G.location+ye,H/G.locationSize,se,fe,H*ge,H/G.locationSize*ye*ge,Ee)}}else if(oe!==void 0){const fe=oe[le];if(fe!==void 0)switch(fe.length){case 2:r.vertexAttrib2fv(G.location,fe);break;case 3:r.vertexAttrib3fv(G.location,fe);break;case 4:r.vertexAttrib4fv(G.location,fe);break;default:r.vertexAttrib1fv(G.location,fe)}}}}P()}function D(){z();for(const T in s){const F=s[T];for(const Y in F){const K=F[Y];for(const re in K)_(K[re].object),delete K[re];delete F[Y]}delete s[T]}}function U(T){if(s[T.id]===void 0)return;const F=s[T.id];for(const Y in F){const K=F[Y];for(const re in K)_(K[re].object),delete K[re];delete F[Y]}delete s[T.id]}function k(T){for(const F in s){const Y=s[F];if(Y[T.id]===void 0)continue;const K=Y[T.id];for(const re in K)_(K[re].object),delete K[re];delete Y[T.id]}}function z(){C(),u=!0,l!==a&&(l=a,p(l.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:z,resetDefaultState:C,dispose:D,releaseStatesOfGeometry:U,releaseStatesOfProgram:k,initAttributes:E,enableAttribute:S,disableUnusedAttributes:P}}function HE(r,e,t){let s;function a(p){s=p}function l(p,_){r.drawArrays(s,p,_),t.update(_,s,1)}function u(p,_,x){x!==0&&(r.drawArraysInstanced(s,p,_,x),t.update(_,s,x))}function d(p,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,x);let y=0;for(let w=0;w<x;w++)y+=_[w];t.update(y,s,1)}function h(p,_,x,m){if(x===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let w=0;w<p.length;w++)u(p[w],_[w],m[w]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,_,0,m,0,x);let w=0;for(let E=0;E<x;E++)w+=_[E]*m[E];t.update(w,s,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function GE(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(k){return!(k!==yi&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(k){const z=k===xo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Ui&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==er&&!z)}function h(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=h(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),D=w>0,U=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:m,maxTextures:y,maxVertexTextures:w,maxTextureSize:E,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:P,maxVaryings:I,maxFragmentUniforms:R,vertexTextures:D,maxSamples:U}}function VE(r){const e=this;let t=null,s=0,a=!1,l=!1;const u=new Ir,d=new _t,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,m){const y=x.length!==0||m||s!==0||a;return a=m,s=x.length,y},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,m){t=_(x,m,0)},this.setState=function(x,m,y){const w=x.clippingPlanes,E=x.clipIntersection,S=x.clipShadows,v=r.get(x);if(!a||w===null||w.length===0||l&&!S)l?_(null):p();else{const P=l?0:s,I=P*4;let R=v.clippingState||null;h.value=R,R=_(w,m,I,y);for(let D=0;D!==I;++D)R[D]=t[D];v.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=P}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(x,m,y,w){const E=x!==null?x.length:0;let S=null;if(E!==0){if(S=h.value,w!==!0||S===null){const v=y+E*4,P=m.matrixWorldInverse;d.getNormalMatrix(P),(S===null||S.length<v)&&(S=new Float32Array(v));for(let I=0,R=y;I!==E;++I,R+=4)u.copy(x[I]).applyMatrix4(P,d),u.normal.toArray(S,R),S[R+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function jE(r){let e=new WeakMap;function t(u,d){return d===ah?u.mapping=ha:d===oh&&(u.mapping=fa),u}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===ah||d===oh)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new VM(h.height);return p.fromEquirectangularTexture(r,u),e.set(u,p),u.addEventListener("dispose",a),t(p.texture,u.mapping)}else return null}}return u}function a(u){const d=u.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const oa=4,Ng=[.125,.215,.35,.446,.526,.582],cs=20,Gd=new X0,Dg=new yt;let Vd=null,jd=0,Wd=0,Xd=!1;const os=(1+Math.sqrt(5))/2,ra=1/os,Lg=[new J(-os,ra,0),new J(os,ra,0),new J(-ra,0,os),new J(ra,0,os),new J(0,os,-ra),new J(0,os,ra),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],WE=new J;class Ig{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100,l={}){const{size:u=256,position:d=WE}=l;Vd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,a,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vd,jd,Wd),this._renderer.xr.enabled=Xd,e.scissorTest=!1,nc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ha||e.mapping===fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:xo,format:yi,colorSpace:pa,depthBuffer:!1},a=Ug(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ug(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XE(l)),this._blurMaterial=$E(l,e,t)}return a}_compileMaterial(e){const t=new xe(this._lodPlanes[0],e);this._renderer.compile(t,Gd)}_sceneToCubeUV(e,t,s,a,l){const h=new Vn(90,1,t,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,m=x.autoClear,y=x.toneMapping;x.getClearColor(Dg),x.toneMapping=Fr,x.autoClear=!1;const w=new jn({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),E=new xe(new Mo,w);let S=!1;const v=e.background;v?v.isColor&&(w.color.copy(v),e.background=null,S=!0):(w.color.copy(Dg),S=!0);for(let P=0;P<6;P++){const I=P%3;I===0?(h.up.set(0,p[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+_[P],l.y,l.z)):I===1?(h.up.set(0,0,p[P]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+_[P],l.z)):(h.up.set(0,p[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+_[P]));const R=this._cubeSize;nc(a,I*R,P>2?R:0,R,R),x.setRenderTarget(a),S&&x.render(E,h),x.render(e,h)}E.geometry.dispose(),E.material.dispose(),x.toneMapping=y,x.autoClear=m,e.background=v}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===ha||e.mapping===fa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kg());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new xe(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;nc(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(u,Gd)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Lg[(a-l-1)%Lg.length];this._blur(e,l-1,l,u,d)}t.autoClear=s}_blur(e,t,s,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,a,"latitudinal",l),this._halfBlur(u,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,u,d){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,x=new xe(this._lodPlanes[a],p),m=p.uniforms,y=this._sizeLods[s]-1,w=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*cs-1),E=l/w,S=isFinite(l)?1+Math.floor(_*E):cs;S>cs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${cs}`);const v=[];let P=0;for(let k=0;k<cs;++k){const z=k/E,C=Math.exp(-z*z/2);v.push(C),k===0?P+=C:k<S&&(P+=2*C)}for(let k=0;k<v.length;k++)v[k]=v[k]/P;m.envMap.value=e.texture,m.samples.value=S,m.weights.value=v,m.latitudinal.value=u==="latitudinal",d&&(m.poleAxis.value=d);const{_lodMax:I}=this;m.dTheta.value=w,m.mipInt.value=I-s;const R=this._sizeLods[a],D=3*R*(a>I-oa?a-I+oa:0),U=4*(this._cubeSize-R);nc(t,D,U,3*R,2*R),h.setRenderTarget(t),h.render(x,Gd)}}function XE(r){const e=[],t=[],s=[];let a=r;const l=r-oa+1+Ng.length;for(let u=0;u<l;u++){const d=Math.pow(2,a);t.push(d);let h=1/d;u>r-oa?h=Ng[u-r+oa-1]:u===0&&(h=0),s.push(h);const p=1/(d-2),_=-p,x=1+p,m=[_,_,x,_,x,x,_,_,x,x,_,x],y=6,w=6,E=3,S=2,v=1,P=new Float32Array(E*w*y),I=new Float32Array(S*w*y),R=new Float32Array(v*w*y);for(let U=0;U<y;U++){const k=U%3*2/3-1,z=U>2?0:-1,C=[k,z,0,k+2/3,z,0,k+2/3,z+1,0,k,z,0,k+2/3,z+1,0,k,z+1,0];P.set(C,E*w*U),I.set(m,S*w*U);const T=[U,U,U,U,U,U];R.set(T,v*w*U)}const D=new ci;D.setAttribute("position",new Di(P,E)),D.setAttribute("uv",new Di(I,S)),D.setAttribute("faceIndex",new Di(R,v)),e.push(D),a>oa&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function Ug(r,e,t){const s=new gs(r,e,t);return s.texture.mapping=Tc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function nc(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function $E(r,e,t){const s=new Float32Array(cs),a=new J(0,1,0);return new Br({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function kg(){return new Br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Fg(){return new Br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function lf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function YE(r){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const h=d.mapping,p=h===ah||h===oh,_=h===ha||h===fa;if(p||_){let x=e.get(d);const m=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return t===null&&(t=new Ig(r)),x=p?t.fromEquirectangular(d,x):t.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const y=d.image;return p&&y&&y.height>0||_&&y&&a(y)?(t===null&&(t=new Ig(r)),x=p?t.fromEquirectangular(d):t.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",l),x.texture):null}}}return d}function a(d){let h=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&h++;return h===p}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:u}}function qE(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&pc("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function KE(r,e,t,s){const a={},l=new WeakMap;function u(x){const m=x.target;m.index!==null&&e.remove(m.index);for(const w in m.attributes)e.remove(m.attributes[w]);m.removeEventListener("dispose",u),delete a[m.id];const y=l.get(m);y&&(e.remove(y),l.delete(m)),s.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function d(x,m){return a[m.id]===!0||(m.addEventListener("dispose",u),a[m.id]=!0,t.memory.geometries++),m}function h(x){const m=x.attributes;for(const y in m)e.update(m[y],r.ARRAY_BUFFER)}function p(x){const m=[],y=x.index,w=x.attributes.position;let E=0;if(y!==null){const P=y.array;E=y.version;for(let I=0,R=P.length;I<R;I+=3){const D=P[I+0],U=P[I+1],k=P[I+2];m.push(D,U,U,k,k,D)}}else if(w!==void 0){const P=w.array;E=w.version;for(let I=0,R=P.length/3-1;I<R;I+=3){const D=I+0,U=I+1,k=I+2;m.push(D,U,U,k,k,D)}}else return;const S=new(U0(m)?B0:O0)(m,1);S.version=E;const v=l.get(x);v&&e.remove(v),l.set(x,S)}function _(x){const m=l.get(x);if(m){const y=x.index;y!==null&&m.version<y.version&&p(x)}else p(x);return l.get(x)}return{get:d,update:h,getWireframeAttribute:_}}function ZE(r,e,t){let s;function a(m){s=m}let l,u;function d(m){l=m.type,u=m.bytesPerElement}function h(m,y){r.drawElements(s,y,l,m*u),t.update(y,s,1)}function p(m,y,w){w!==0&&(r.drawElementsInstanced(s,y,l,m*u,w),t.update(y,s,w))}function _(m,y,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,l,m,0,w);let S=0;for(let v=0;v<w;v++)S+=y[v];t.update(S,s,1)}function x(m,y,w,E){if(w===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<m.length;v++)p(m[v]/u,y[v],E[v]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,l,m,0,E,0,w);let v=0;for(let P=0;P<w;P++)v+=y[P]*E[P];t.update(v,s,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function QE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,d){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function JE(r,e,t){const s=new WeakMap,a=new Qt;function l(u,d,h){const p=u.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let m=s.get(d);if(m===void 0||m.count!==x){let T=function(){z.dispose(),s.delete(d),d.removeEventListener("dispose",T)};var y=T;m!==void 0&&m.texture.dispose();const w=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let R=0;w===!0&&(R=1),E===!0&&(R=2),S===!0&&(R=3);let D=d.attributes.position.count*R,U=1;D>e.maxTextureSize&&(U=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const k=new Float32Array(D*U*4*x),z=new k0(k,D,U,x);z.type=er,z.needsUpdate=!0;const C=R*4;for(let F=0;F<x;F++){const Y=v[F],K=P[F],re=I[F],he=D*U*4*F;for(let oe=0;oe<Y.count;oe++){const le=oe*C;w===!0&&(a.fromBufferAttribute(Y,oe),k[he+le+0]=a.x,k[he+le+1]=a.y,k[he+le+2]=a.z,k[he+le+3]=0),E===!0&&(a.fromBufferAttribute(K,oe),k[he+le+4]=a.x,k[he+le+5]=a.y,k[he+le+6]=a.z,k[he+le+7]=0),S===!0&&(a.fromBufferAttribute(re,oe),k[he+le+8]=a.x,k[he+le+9]=a.y,k[he+le+10]=a.z,k[he+le+11]=re.itemSize===4?a.w:1)}}m={count:x,texture:z,size:new lt(D,U)},s.set(d,m),d.addEventListener("dispose",T)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let w=0;for(let S=0;S<p.length;S++)w+=p[S];const E=d.morphTargetsRelative?1:1-w;h.getUniforms().setValue(r,"morphTargetBaseInfluence",E),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:l}}function eT(r,e,t,s){let a=new WeakMap;function l(h){const p=s.render.frame,_=h.geometry,x=e.get(h,_);if(a.get(x)!==p&&(e.update(x),a.set(x,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const m=h.skeleton;a.get(m)!==p&&(m.update(),a.set(m,p))}return x}function u(){a=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const Y0=new Xn,Og=new j0(1,1),q0=new k0,K0=new bM,Z0=new G0,Bg=[],zg=[],Hg=new Float32Array(16),Gg=new Float32Array(9),Vg=new Float32Array(4);function _a(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=Bg[a];if(l===void 0&&(l=new Float32Array(a),Bg[a]=l),e!==0){s.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,r[u].toArray(l,d)}return l}function cn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function un(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Rc(r,e){let t=zg[e];t===void 0&&(t=new Int32Array(e),zg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function tT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function nT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2fv(this.addr,e),un(t,e)}}function iT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;r.uniform3fv(this.addr,e),un(t,e)}}function rT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4fv(this.addr,e),un(t,e)}}function sT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(cn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,s))return;Vg.set(s),r.uniformMatrix2fv(this.addr,!1,Vg),un(t,s)}}function aT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(cn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,s))return;Gg.set(s),r.uniformMatrix3fv(this.addr,!1,Gg),un(t,s)}}function oT(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(cn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,s))return;Hg.set(s),r.uniformMatrix4fv(this.addr,!1,Hg),un(t,s)}}function lT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2iv(this.addr,e),un(t,e)}}function uT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;r.uniform3iv(this.addr,e),un(t,e)}}function dT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4iv(this.addr,e),un(t,e)}}function hT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function fT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;r.uniform2uiv(this.addr,e),un(t,e)}}function pT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;r.uniform3uiv(this.addr,e),un(t,e)}}function mT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;r.uniform4uiv(this.addr,e),un(t,e)}}function gT(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(Og.compareFunction=I0,l=Og):l=Y0,t.setTexture2D(e||l,a)}function vT(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||K0,a)}function _T(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||Z0,a)}function xT(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||q0,a)}function yT(r){switch(r){case 5126:return tT;case 35664:return nT;case 35665:return iT;case 35666:return rT;case 35674:return sT;case 35675:return aT;case 35676:return oT;case 5124:case 35670:return lT;case 35667:case 35671:return cT;case 35668:case 35672:return uT;case 35669:case 35673:return dT;case 5125:return hT;case 36294:return fT;case 36295:return pT;case 36296:return mT;case 35678:case 36198:case 36298:case 36306:case 35682:return gT;case 35679:case 36299:case 36307:return vT;case 35680:case 36300:case 36308:case 36293:return _T;case 36289:case 36303:case 36311:case 36292:return xT}}function ST(r,e){r.uniform1fv(this.addr,e)}function MT(r,e){const t=_a(e,this.size,2);r.uniform2fv(this.addr,t)}function wT(r,e){const t=_a(e,this.size,3);r.uniform3fv(this.addr,t)}function ET(r,e){const t=_a(e,this.size,4);r.uniform4fv(this.addr,t)}function TT(r,e){const t=_a(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function bT(r,e){const t=_a(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function AT(r,e){const t=_a(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function CT(r,e){r.uniform1iv(this.addr,e)}function RT(r,e){r.uniform2iv(this.addr,e)}function PT(r,e){r.uniform3iv(this.addr,e)}function NT(r,e){r.uniform4iv(this.addr,e)}function DT(r,e){r.uniform1uiv(this.addr,e)}function LT(r,e){r.uniform2uiv(this.addr,e)}function IT(r,e){r.uniform3uiv(this.addr,e)}function UT(r,e){r.uniform4uiv(this.addr,e)}function kT(r,e,t){const s=this.cache,a=e.length,l=Rc(t,a);cn(s,l)||(r.uniform1iv(this.addr,l),un(s,l));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||Y0,l[u])}function FT(r,e,t){const s=this.cache,a=e.length,l=Rc(t,a);cn(s,l)||(r.uniform1iv(this.addr,l),un(s,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||K0,l[u])}function OT(r,e,t){const s=this.cache,a=e.length,l=Rc(t,a);cn(s,l)||(r.uniform1iv(this.addr,l),un(s,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||Z0,l[u])}function BT(r,e,t){const s=this.cache,a=e.length,l=Rc(t,a);cn(s,l)||(r.uniform1iv(this.addr,l),un(s,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||q0,l[u])}function zT(r){switch(r){case 5126:return ST;case 35664:return MT;case 35665:return wT;case 35666:return ET;case 35674:return TT;case 35675:return bT;case 35676:return AT;case 5124:case 35670:return CT;case 35667:case 35671:return RT;case 35668:case 35672:return PT;case 35669:case 35673:return NT;case 5125:return DT;case 36294:return LT;case 36295:return IT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return BT}}class HT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=yT(t.type)}}class GT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zT(t.type)}}class VT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const d=a[l];d.setValue(e,t[d.id],s)}}}const $d=/(\w+)(\])?(\[|\.)?/g;function jg(r,e){r.seq.push(e),r.map[e.id]=e}function jT(r,e,t){const s=r.name,a=s.length;for($d.lastIndex=0;;){const l=$d.exec(s),u=$d.lastIndex;let d=l[1];const h=l[2]==="]",p=l[3];if(h&&(d=d|0),p===void 0||p==="["&&u+2===a){jg(t,p===void 0?new HT(d,r,e):new GT(d,r,e));break}else{let x=t.map[d];x===void 0&&(x=new VT(d),jg(t,x)),t=x}}}class mc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),u=e.getUniformLocation(t,l.name);jT(l,u,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,u=t.length;l!==u;++l){const d=t[l],h=s[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&s.push(u)}return s}}function Wg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const WT=37297;let XT=0;function $T(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const d=u+1;s.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return s.join(`
`)}const Xg=new _t;function YT(r){Lt._getMatrix(Xg,Lt.workingColorSpace,r);const e=`mat3( ${Xg.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(r)){case vc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function $g(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+$T(r.getShaderSource(e),u)}else return a}function qT(r,e){const t=YT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function KT(r,e){let t;switch(e){case ZS:t="Linear";break;case QS:t="Reinhard";break;case JS:t="Cineon";break;case eM:t="ACESFilmic";break;case nM:t="AgX";break;case iM:t="Neutral";break;case tM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ic=new J;function ZT(){Lt.getLuminanceCoefficients(ic);const r=ic.x.toFixed(4),e=ic.y.toFixed(4),t=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function JT(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function e2(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),u=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:d}}return t}function so(r){return r!==""}function Yg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const t2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(r){return r.replace(t2,i2)}const n2=new Map;function i2(r,e){let t=xt[e];if(t===void 0){const s=n2.get(e);if(s!==void 0)t=xt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Oh(t)}const r2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kg(r){return r.replace(r2,s2)}function s2(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Zg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function a2(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===E0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===PS?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function o2(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ha:case fa:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function l2(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case fa:e="ENVMAP_MODE_REFRACTION";break}return e}function c2(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ec:e="ENVMAP_BLENDING_MULTIPLY";break;case qS:e="ENVMAP_BLENDING_MIX";break;case KS:e="ENVMAP_BLENDING_ADD";break}return e}function u2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function d2(r,e,t,s){const a=r.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const h=a2(t),p=o2(t),_=l2(t),x=c2(t),m=u2(t),y=QT(t),w=JT(l),E=a.createProgram();let S,v,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(so).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(so).join(`
`),v.length>0&&(v+=`
`)):(S=[Zg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),v=[Zg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+x:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fr?"#define TONE_MAPPING":"",t.toneMapping!==Fr?xt.tonemapping_pars_fragment:"",t.toneMapping!==Fr?KT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,qT("linearToOutputTexel",t.outputColorSpace),ZT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),u=Oh(u),u=Yg(u,t),u=qg(u,t),d=Oh(d),d=Yg(d,t),d=qg(d,t),u=Kg(u),d=Kg(d),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",t.glslVersion===ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const I=P+S+u,R=P+v+d,D=Wg(a,a.VERTEX_SHADER,I),U=Wg(a,a.FRAGMENT_SHADER,R);a.attachShader(E,D),a.attachShader(E,U),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function k(F){if(r.debug.checkShaderErrors){const Y=a.getProgramInfoLog(E).trim(),K=a.getShaderInfoLog(D).trim(),re=a.getShaderInfoLog(U).trim();let he=!0,oe=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(he=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,E,D,U);else{const le=$g(a,D,"vertex"),G=$g(a,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Y+`
`+le+`
`+G)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(K===""||re==="")&&(oe=!1);oe&&(F.diagnostics={runnable:he,programLog:Y,vertexShader:{log:K,prefix:S},fragmentShader:{log:re,prefix:v}})}a.deleteShader(D),a.deleteShader(U),z=new mc(a,E),C=e2(a,E)}let z;this.getUniforms=function(){return z===void 0&&k(this),z};let C;this.getAttributes=function(){return C===void 0&&k(this),C};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=a.getProgramParameter(E,WT)),T},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=XT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=U,this}let h2=0;class f2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new p2(e),t.set(e,s)),s}}class p2{constructor(e){this.id=h2++,this.code=e,this.usedTimes=0}}function m2(r,e,t,s,a,l,u){const d=new tf,h=new f2,p=new Set,_=[],x=a.logarithmicDepthBuffer,m=a.vertexTextures;let y=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,T,F,Y,K){const re=Y.fog,he=K.geometry,oe=C.isMeshStandardMaterial?Y.environment:null,le=(C.isMeshStandardMaterial?t:e).get(C.envMap||oe),G=le&&le.mapping===Tc?le.image.height:null,me=w[C.type];C.precision!==null&&(y=a.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const fe=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,H=fe!==void 0?fe.length:0;let ce=0;he.morphAttributes.position!==void 0&&(ce=1),he.morphAttributes.normal!==void 0&&(ce=2),he.morphAttributes.color!==void 0&&(ce=3);let ke,se,ge,Ee;if(me){const Ct=Ci[me];ke=Ct.vertexShader,se=Ct.fragmentShader}else ke=C.vertexShader,se=C.fragmentShader,h.update(C),ge=h.getVertexShaderID(C),Ee=h.getFragmentShaderID(C);const ye=r.getRenderTarget(),De=r.state.buffers.depth.getReversed(),$e=K.isInstancedMesh===!0,Ge=K.isBatchedMesh===!0,Nt=!!C.map,At=!!C.matcap,dt=!!le,V=!!C.aoMap,Jt=!!C.lightMap,pt=!!C.bumpMap,ht=!!C.normalMap,Ke=!!C.displacementMap,wt=!!C.emissiveMap,Ve=!!C.metalnessMap,N=!!C.roughnessMap,b=C.anisotropy>0,O=C.clearcoat>0,W=C.dispersion>0,ie=C.iridescence>0,q=C.sheen>0,Re=C.transmission>0,Ne=b&&!!C.anisotropyMap,Je=O&&!!C.clearcoatMap,et=O&&!!C.clearcoatNormalMap,Me=O&&!!C.clearcoatRoughnessMap,je=ie&&!!C.iridescenceMap,it=ie&&!!C.iridescenceThicknessMap,_e=q&&!!C.sheenColorMap,Te=q&&!!C.sheenRoughnessMap,Oe=!!C.specularMap,be=!!C.specularColorMap,rt=!!C.specularIntensityMap,X=Re&&!!C.transmissionMap,Le=Re&&!!C.thicknessMap,pe=!!C.gradientMap,ve=!!C.alphaMap,Be=C.alphaTest>0,Fe=!!C.alphaHash,mt=!!C.extensions;let zt=Fr;C.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(zt=r.toneMapping);const sn={shaderID:me,shaderType:C.type,shaderName:C.name,vertexShader:ke,fragmentShader:se,defines:C.defines,customVertexShaderID:ge,customFragmentShaderID:Ee,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Ge,batchingColor:Ge&&K._colorsTexture!==null,instancing:$e,instancingColor:$e&&K.instanceColor!==null,instancingMorph:$e&&K.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:pa,alphaToCoverage:!!C.alphaToCoverage,map:Nt,matcap:At,envMap:dt,envMapMode:dt&&le.mapping,envMapCubeUVHeight:G,aoMap:V,lightMap:Jt,bumpMap:pt,normalMap:ht,displacementMap:m&&Ke,emissiveMap:wt,normalMapObjectSpace:ht&&C.normalMapType===oM,normalMapTangentSpace:ht&&C.normalMapType===bc,metalnessMap:Ve,roughnessMap:N,anisotropy:b,anisotropyMap:Ne,clearcoat:O,clearcoatMap:Je,clearcoatNormalMap:et,clearcoatRoughnessMap:Me,dispersion:W,iridescence:ie,iridescenceMap:je,iridescenceThicknessMap:it,sheen:q,sheenColorMap:_e,sheenRoughnessMap:Te,specularMap:Oe,specularColorMap:be,specularIntensityMap:rt,transmission:Re,transmissionMap:X,thicknessMap:Le,gradientMap:pe,opaque:C.transparent===!1&&C.blending===ca&&C.alphaToCoverage===!1,alphaMap:ve,alphaTest:Be,alphaHash:Fe,combine:C.combine,mapUv:Nt&&E(C.map.channel),aoMapUv:V&&E(C.aoMap.channel),lightMapUv:Jt&&E(C.lightMap.channel),bumpMapUv:pt&&E(C.bumpMap.channel),normalMapUv:ht&&E(C.normalMap.channel),displacementMapUv:Ke&&E(C.displacementMap.channel),emissiveMapUv:wt&&E(C.emissiveMap.channel),metalnessMapUv:Ve&&E(C.metalnessMap.channel),roughnessMapUv:N&&E(C.roughnessMap.channel),anisotropyMapUv:Ne&&E(C.anisotropyMap.channel),clearcoatMapUv:Je&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:et&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:it&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:Te&&E(C.sheenRoughnessMap.channel),specularMapUv:Oe&&E(C.specularMap.channel),specularColorMapUv:be&&E(C.specularColorMap.channel),specularIntensityMapUv:rt&&E(C.specularIntensityMap.channel),transmissionMapUv:X&&E(C.transmissionMap.channel),thicknessMapUv:Le&&E(C.thicknessMap.channel),alphaMapUv:ve&&E(C.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ht||b),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!he.attributes.uv&&(Nt||ve),fog:!!re,useFog:C.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:De,skinning:K.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ce,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:zt,decodeVideoTexture:Nt&&C.map.isVideoTexture===!0&&Lt.getTransfer(C.map.colorSpace)===It,decodeVideoTextureEmissive:wt&&C.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(C.emissiveMap.colorSpace)===It,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ri,flipSided:C.side===Wn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:mt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&C.extensions.multiDraw===!0||Ge)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return sn.vertexUv1s=p.has(1),sn.vertexUv2s=p.has(2),sn.vertexUv3s=p.has(3),p.clear(),sn}function v(C){const T=[];if(C.shaderID?T.push(C.shaderID):(T.push(C.customVertexShaderID),T.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)T.push(F),T.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(P(T,C),I(T,C),T.push(r.outputColorSpace)),T.push(C.customProgramCacheKey),T.join()}function P(C,T){C.push(T.precision),C.push(T.outputColorSpace),C.push(T.envMapMode),C.push(T.envMapCubeUVHeight),C.push(T.mapUv),C.push(T.alphaMapUv),C.push(T.lightMapUv),C.push(T.aoMapUv),C.push(T.bumpMapUv),C.push(T.normalMapUv),C.push(T.displacementMapUv),C.push(T.emissiveMapUv),C.push(T.metalnessMapUv),C.push(T.roughnessMapUv),C.push(T.anisotropyMapUv),C.push(T.clearcoatMapUv),C.push(T.clearcoatNormalMapUv),C.push(T.clearcoatRoughnessMapUv),C.push(T.iridescenceMapUv),C.push(T.iridescenceThicknessMapUv),C.push(T.sheenColorMapUv),C.push(T.sheenRoughnessMapUv),C.push(T.specularMapUv),C.push(T.specularColorMapUv),C.push(T.specularIntensityMapUv),C.push(T.transmissionMapUv),C.push(T.thicknessMapUv),C.push(T.combine),C.push(T.fogExp2),C.push(T.sizeAttenuation),C.push(T.morphTargetsCount),C.push(T.morphAttributeCount),C.push(T.numDirLights),C.push(T.numPointLights),C.push(T.numSpotLights),C.push(T.numSpotLightMaps),C.push(T.numHemiLights),C.push(T.numRectAreaLights),C.push(T.numDirLightShadows),C.push(T.numPointLightShadows),C.push(T.numSpotLightShadows),C.push(T.numSpotLightShadowsWithMaps),C.push(T.numLightProbes),C.push(T.shadowMapType),C.push(T.toneMapping),C.push(T.numClippingPlanes),C.push(T.numClipIntersection),C.push(T.depthPacking)}function I(C,T){d.disableAll(),T.supportsVertexTextures&&d.enable(0),T.instancing&&d.enable(1),T.instancingColor&&d.enable(2),T.instancingMorph&&d.enable(3),T.matcap&&d.enable(4),T.envMap&&d.enable(5),T.normalMapObjectSpace&&d.enable(6),T.normalMapTangentSpace&&d.enable(7),T.clearcoat&&d.enable(8),T.iridescence&&d.enable(9),T.alphaTest&&d.enable(10),T.vertexColors&&d.enable(11),T.vertexAlphas&&d.enable(12),T.vertexUv1s&&d.enable(13),T.vertexUv2s&&d.enable(14),T.vertexUv3s&&d.enable(15),T.vertexTangents&&d.enable(16),T.anisotropy&&d.enable(17),T.alphaHash&&d.enable(18),T.batching&&d.enable(19),T.dispersion&&d.enable(20),T.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),T.fog&&d.enable(0),T.useFog&&d.enable(1),T.flatShading&&d.enable(2),T.logarithmicDepthBuffer&&d.enable(3),T.reverseDepthBuffer&&d.enable(4),T.skinning&&d.enable(5),T.morphTargets&&d.enable(6),T.morphNormals&&d.enable(7),T.morphColors&&d.enable(8),T.premultipliedAlpha&&d.enable(9),T.shadowMapEnabled&&d.enable(10),T.doubleSided&&d.enable(11),T.flipSided&&d.enable(12),T.useDepthPacking&&d.enable(13),T.dithering&&d.enable(14),T.transmission&&d.enable(15),T.sheen&&d.enable(16),T.opaque&&d.enable(17),T.pointsUvs&&d.enable(18),T.decodeVideoTexture&&d.enable(19),T.decodeVideoTextureEmissive&&d.enable(20),T.alphaToCoverage&&d.enable(21),C.push(d.mask)}function R(C){const T=w[C.type];let F;if(T){const Y=Ci[T];F=BM.clone(Y.uniforms)}else F=C.uniforms;return F}function D(C,T){let F;for(let Y=0,K=_.length;Y<K;Y++){const re=_[Y];if(re.cacheKey===T){F=re,++F.usedTimes;break}}return F===void 0&&(F=new d2(r,T,C,l),_.push(F)),F}function U(C){if(--C.usedTimes===0){const T=_.indexOf(C);_[T]=_[_.length-1],_.pop(),C.destroy()}}function k(C){h.remove(C)}function z(){h.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:R,acquireProgram:D,releaseProgram:U,releaseShaderCache:k,programs:_,dispose:z}}function g2(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function s(u){r.delete(u)}function a(u,d,h){r.get(u)[d]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function v2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Qg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Jg(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function u(x,m,y,w,E,S){let v=r[e];return v===void 0?(v={id:x.id,object:x,geometry:m,material:y,groupOrder:w,renderOrder:x.renderOrder,z:E,group:S},r[e]=v):(v.id=x.id,v.object=x,v.geometry=m,v.material=y,v.groupOrder=w,v.renderOrder=x.renderOrder,v.z=E,v.group=S),e++,v}function d(x,m,y,w,E,S){const v=u(x,m,y,w,E,S);y.transmission>0?s.push(v):y.transparent===!0?a.push(v):t.push(v)}function h(x,m,y,w,E,S){const v=u(x,m,y,w,E,S);y.transmission>0?s.unshift(v):y.transparent===!0?a.unshift(v):t.unshift(v)}function p(x,m){t.length>1&&t.sort(x||v2),s.length>1&&s.sort(m||Qg),a.length>1&&a.sort(m||Qg)}function _(){for(let x=e,m=r.length;x<m;x++){const y=r[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:d,unshift:h,finish:_,sort:p}}function _2(){let r=new WeakMap;function e(s,a){const l=r.get(s);let u;return l===void 0?(u=new Jg,r.set(s,[u])):a>=l.length?(u=new Jg,l.push(u)):u=l[a],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function x2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new yt};break;case"SpotLight":t={position:new J,direction:new J,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=t,t}}}function y2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let S2=0;function M2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function w2(r){const e=new x2,t=y2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const a=new J,l=new Wt,u=new Wt;function d(p){let _=0,x=0,m=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,w=0,E=0,S=0,v=0,P=0,I=0,R=0,D=0,U=0,k=0;p.sort(M2);for(let C=0,T=p.length;C<T;C++){const F=p[C],Y=F.color,K=F.intensity,re=F.distance,he=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)_+=Y.r*K,x+=Y.g*K,m+=Y.b*K;else if(F.isLightProbe){for(let oe=0;oe<9;oe++)s.probe[oe].addScaledVector(F.sh.coefficients[oe],K);k++}else if(F.isDirectionalLight){const oe=e.get(F);if(oe.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const le=F.shadow,G=t.get(F);G.shadowIntensity=le.intensity,G.shadowBias=le.bias,G.shadowNormalBias=le.normalBias,G.shadowRadius=le.radius,G.shadowMapSize=le.mapSize,s.directionalShadow[y]=G,s.directionalShadowMap[y]=he,s.directionalShadowMatrix[y]=F.shadow.matrix,P++}s.directional[y]=oe,y++}else if(F.isSpotLight){const oe=e.get(F);oe.position.setFromMatrixPosition(F.matrixWorld),oe.color.copy(Y).multiplyScalar(K),oe.distance=re,oe.coneCos=Math.cos(F.angle),oe.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),oe.decay=F.decay,s.spot[E]=oe;const le=F.shadow;if(F.map&&(s.spotLightMap[D]=F.map,D++,le.updateMatrices(F),F.castShadow&&U++),s.spotLightMatrix[E]=le.matrix,F.castShadow){const G=t.get(F);G.shadowIntensity=le.intensity,G.shadowBias=le.bias,G.shadowNormalBias=le.normalBias,G.shadowRadius=le.radius,G.shadowMapSize=le.mapSize,s.spotShadow[E]=G,s.spotShadowMap[E]=he,R++}E++}else if(F.isRectAreaLight){const oe=e.get(F);oe.color.copy(Y).multiplyScalar(K),oe.halfWidth.set(F.width*.5,0,0),oe.halfHeight.set(0,F.height*.5,0),s.rectArea[S]=oe,S++}else if(F.isPointLight){const oe=e.get(F);if(oe.color.copy(F.color).multiplyScalar(F.intensity),oe.distance=F.distance,oe.decay=F.decay,F.castShadow){const le=F.shadow,G=t.get(F);G.shadowIntensity=le.intensity,G.shadowBias=le.bias,G.shadowNormalBias=le.normalBias,G.shadowRadius=le.radius,G.shadowMapSize=le.mapSize,G.shadowCameraNear=le.camera.near,G.shadowCameraFar=le.camera.far,s.pointShadow[w]=G,s.pointShadowMap[w]=he,s.pointShadowMatrix[w]=F.shadow.matrix,I++}s.point[w]=oe,w++}else if(F.isHemisphereLight){const oe=e.get(F);oe.skyColor.copy(F.color).multiplyScalar(K),oe.groundColor.copy(F.groundColor).multiplyScalar(K),s.hemi[v]=oe,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=m;const z=s.hash;(z.directionalLength!==y||z.pointLength!==w||z.spotLength!==E||z.rectAreaLength!==S||z.hemiLength!==v||z.numDirectionalShadows!==P||z.numPointShadows!==I||z.numSpotShadows!==R||z.numSpotMaps!==D||z.numLightProbes!==k)&&(s.directional.length=y,s.spot.length=E,s.rectArea.length=S,s.point.length=w,s.hemi.length=v,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=R+D-U,s.spotLightMap.length=D,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=k,z.directionalLength=y,z.pointLength=w,z.spotLength=E,z.rectAreaLength=S,z.hemiLength=v,z.numDirectionalShadows=P,z.numPointShadows=I,z.numSpotShadows=R,z.numSpotMaps=D,z.numLightProbes=k,s.version=S2++)}function h(p,_){let x=0,m=0,y=0,w=0,E=0;const S=_.matrixWorldInverse;for(let v=0,P=p.length;v<P;v++){const I=p[v];if(I.isDirectionalLight){const R=s.directional[x];R.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(S),x++}else if(I.isSpotLight){const R=s.spot[y];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(S),y++}else if(I.isRectAreaLight){const R=s.rectArea[w];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(S),u.identity(),l.copy(I.matrixWorld),l.premultiply(S),u.extractRotation(l),R.halfWidth.set(I.width*.5,0,0),R.halfHeight.set(0,I.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),w++}else if(I.isPointLight){const R=s.point[m];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(S),m++}else if(I.isHemisphereLight){const R=s.hemi[E];R.direction.setFromMatrixPosition(I.matrixWorld),R.direction.transformDirection(S),E++}}}return{setup:d,setupView:h,state:s}}function e0(r){const e=new w2(r),t=[],s=[];function a(_){p.camera=_,t.length=0,s.length=0}function l(_){t.push(_)}function u(_){s.push(_)}function d(){e.setup(t)}function h(_){e.setupView(t,_)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:u}}function E2(r){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let d;return u===void 0?(d=new e0(r),e.set(a,[d])):l>=u.length?(d=new e0(r),u.push(d)):d=u[l],d}function s(){e=new WeakMap}return{get:t,dispose:s}}const T2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function A2(r,e,t){let s=new rf;const a=new lt,l=new lt,u=new Qt,d=new KM({depthPacking:aM}),h=new ZM,p={},_=t.maxTextureSize,x={[Or]:Wn,[Wn]:Or,[Ri]:Ri},m=new Br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:T2,fragmentShader:b2}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const w=new ci;w.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new xe(w,m),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=E0;let v=this.type;this.render=function(U,k,z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||U.length===0)return;const C=r.getRenderTarget(),T=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(kr),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const K=v!==Ji&&this.type===Ji,re=v===Ji&&this.type!==Ji;for(let he=0,oe=U.length;he<oe;he++){const le=U[he],G=le.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const me=G.getFrameExtents();if(a.multiply(me),l.copy(G.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(l.x=Math.floor(_/me.x),a.x=l.x*me.x,G.mapSize.x=l.x),a.y>_&&(l.y=Math.floor(_/me.y),a.y=l.y*me.y,G.mapSize.y=l.y)),G.map===null||K===!0||re===!0){const H=this.type!==Ji?{minFilter:Si,magFilter:Si}:{};G.map!==null&&G.map.dispose(),G.map=new gs(a.x,a.y,H),G.map.texture.name=le.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const fe=G.getViewportCount();for(let H=0;H<fe;H++){const ce=G.getViewport(H);u.set(l.x*ce.x,l.y*ce.y,l.x*ce.z,l.y*ce.w),Y.viewport(u),G.updateMatrices(le,H),s=G.getFrustum(),R(k,z,G.camera,le,this.type)}G.isPointLightShadow!==!0&&this.type===Ji&&P(G,z),G.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(C,T,F)};function P(U,k){const z=e.update(E);m.defines.VSM_SAMPLES!==U.blurSamples&&(m.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new gs(a.x,a.y)),m.uniforms.shadow_pass.value=U.map.texture,m.uniforms.resolution.value=U.mapSize,m.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(k,null,z,m,E,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(k,null,z,y,E,null)}function I(U,k,z,C){let T=null;const F=z.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(F!==void 0)T=F;else if(T=z.isPointLight===!0?h:d,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const Y=T.uuid,K=k.uuid;let re=p[Y];re===void 0&&(re={},p[Y]=re);let he=re[K];he===void 0&&(he=T.clone(),re[K]=he,k.addEventListener("dispose",D)),T=he}if(T.visible=k.visible,T.wireframe=k.wireframe,C===Ji?T.side=k.shadowSide!==null?k.shadowSide:k.side:T.side=k.shadowSide!==null?k.shadowSide:x[k.side],T.alphaMap=k.alphaMap,T.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,T.map=k.map,T.clipShadows=k.clipShadows,T.clippingPlanes=k.clippingPlanes,T.clipIntersection=k.clipIntersection,T.displacementMap=k.displacementMap,T.displacementScale=k.displacementScale,T.displacementBias=k.displacementBias,T.wireframeLinewidth=k.wireframeLinewidth,T.linewidth=k.linewidth,z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Y=r.properties.get(T);Y.light=z}return T}function R(U,k,z,C,T){if(U.visible===!1)return;if(U.layers.test(k.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&T===Ji)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,U.matrixWorld);const K=e.update(U),re=U.material;if(Array.isArray(re)){const he=K.groups;for(let oe=0,le=he.length;oe<le;oe++){const G=he[oe],me=re[G.materialIndex];if(me&&me.visible){const fe=I(U,me,C,T);U.onBeforeShadow(r,U,k,z,K,fe,G),r.renderBufferDirect(z,null,K,fe,U,G),U.onAfterShadow(r,U,k,z,K,fe,G)}}}else if(re.visible){const he=I(U,re,C,T);U.onBeforeShadow(r,U,k,z,K,he,null),r.renderBufferDirect(z,null,K,he,U,null),U.onAfterShadow(r,U,k,z,K,he,null)}}const Y=U.children;for(let K=0,re=Y.length;K<re;K++)R(Y[K],k,z,C,T)}function D(U){U.target.removeEventListener("dispose",D);for(const z in p){const C=p[z],T=U.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}const C2={[Jd]:eh,[th]:rh,[nh]:sh,[da]:ih,[eh]:Jd,[rh]:th,[sh]:nh,[ih]:da};function R2(r,e){function t(){let X=!1;const Le=new Qt;let pe=null;const ve=new Qt(0,0,0,0);return{setMask:function(Be){pe!==Be&&!X&&(r.colorMask(Be,Be,Be,Be),pe=Be)},setLocked:function(Be){X=Be},setClear:function(Be,Fe,mt,zt,sn){sn===!0&&(Be*=zt,Fe*=zt,mt*=zt),Le.set(Be,Fe,mt,zt),ve.equals(Le)===!1&&(r.clearColor(Be,Fe,mt,zt),ve.copy(Le))},reset:function(){X=!1,pe=null,ve.set(-1,0,0,0)}}}function s(){let X=!1,Le=!1,pe=null,ve=null,Be=null;return{setReversed:function(Fe){if(Le!==Fe){const mt=e.get("EXT_clip_control");Fe?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT),Le=Fe;const zt=Be;Be=null,this.setClear(zt)}},getReversed:function(){return Le},setTest:function(Fe){Fe?ye(r.DEPTH_TEST):De(r.DEPTH_TEST)},setMask:function(Fe){pe!==Fe&&!X&&(r.depthMask(Fe),pe=Fe)},setFunc:function(Fe){if(Le&&(Fe=C2[Fe]),ve!==Fe){switch(Fe){case Jd:r.depthFunc(r.NEVER);break;case eh:r.depthFunc(r.ALWAYS);break;case th:r.depthFunc(r.LESS);break;case da:r.depthFunc(r.LEQUAL);break;case nh:r.depthFunc(r.EQUAL);break;case ih:r.depthFunc(r.GEQUAL);break;case rh:r.depthFunc(r.GREATER);break;case sh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ve=Fe}},setLocked:function(Fe){X=Fe},setClear:function(Fe){Be!==Fe&&(Le&&(Fe=1-Fe),r.clearDepth(Fe),Be=Fe)},reset:function(){X=!1,pe=null,ve=null,Be=null,Le=!1}}}function a(){let X=!1,Le=null,pe=null,ve=null,Be=null,Fe=null,mt=null,zt=null,sn=null;return{setTest:function(Ct){X||(Ct?ye(r.STENCIL_TEST):De(r.STENCIL_TEST))},setMask:function(Ct){Le!==Ct&&!X&&(r.stencilMask(Ct),Le=Ct)},setFunc:function(Ct,In,Rn){(pe!==Ct||ve!==In||Be!==Rn)&&(r.stencilFunc(Ct,In,Rn),pe=Ct,ve=In,Be=Rn)},setOp:function(Ct,In,Rn){(Fe!==Ct||mt!==In||zt!==Rn)&&(r.stencilOp(Ct,In,Rn),Fe=Ct,mt=In,zt=Rn)},setLocked:function(Ct){X=Ct},setClear:function(Ct){sn!==Ct&&(r.clearStencil(Ct),sn=Ct)},reset:function(){X=!1,Le=null,pe=null,ve=null,Be=null,Fe=null,mt=null,zt=null,sn=null}}}const l=new t,u=new s,d=new a,h=new WeakMap,p=new WeakMap;let _={},x={},m=new WeakMap,y=[],w=null,E=!1,S=null,v=null,P=null,I=null,R=null,D=null,U=null,k=new yt(0,0,0),z=0,C=!1,T=null,F=null,Y=null,K=null,re=null;const he=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,le=0;const G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(G)[1]),oe=le>=1):G.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),oe=le>=2);let me=null,fe={};const H=r.getParameter(r.SCISSOR_BOX),ce=r.getParameter(r.VIEWPORT),ke=new Qt().fromArray(H),se=new Qt().fromArray(ce);function ge(X,Le,pe,ve){const Be=new Uint8Array(4),Fe=r.createTexture();r.bindTexture(X,Fe),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let mt=0;mt<pe;mt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,ve,0,r.RGBA,r.UNSIGNED_BYTE,Be):r.texImage2D(Le+mt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Be);return Fe}const Ee={};Ee[r.TEXTURE_2D]=ge(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[r.TEXTURE_2D_ARRAY]=ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ye(r.DEPTH_TEST),u.setFunc(da),pt(!1),ht(Km),ye(r.CULL_FACE),V(kr);function ye(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function De(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function $e(X,Le){return x[X]!==Le?(r.bindFramebuffer(X,Le),x[X]=Le,X===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=Le),X===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ge(X,Le){let pe=y,ve=!1;if(X){pe=m.get(Le),pe===void 0&&(pe=[],m.set(Le,pe));const Be=X.textures;if(pe.length!==Be.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let Fe=0,mt=Be.length;Fe<mt;Fe++)pe[Fe]=r.COLOR_ATTACHMENT0+Fe;pe.length=Be.length,ve=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,ve=!0);ve&&r.drawBuffers(pe)}function Nt(X){return w!==X?(r.useProgram(X),w=X,!0):!1}const At={[ls]:r.FUNC_ADD,[DS]:r.FUNC_SUBTRACT,[LS]:r.FUNC_REVERSE_SUBTRACT};At[IS]=r.MIN,At[US]=r.MAX;const dt={[kS]:r.ZERO,[FS]:r.ONE,[OS]:r.SRC_COLOR,[Zd]:r.SRC_ALPHA,[jS]:r.SRC_ALPHA_SATURATE,[GS]:r.DST_COLOR,[zS]:r.DST_ALPHA,[BS]:r.ONE_MINUS_SRC_COLOR,[Qd]:r.ONE_MINUS_SRC_ALPHA,[VS]:r.ONE_MINUS_DST_COLOR,[HS]:r.ONE_MINUS_DST_ALPHA,[WS]:r.CONSTANT_COLOR,[XS]:r.ONE_MINUS_CONSTANT_COLOR,[$S]:r.CONSTANT_ALPHA,[YS]:r.ONE_MINUS_CONSTANT_ALPHA};function V(X,Le,pe,ve,Be,Fe,mt,zt,sn,Ct){if(X===kr){E===!0&&(De(r.BLEND),E=!1);return}if(E===!1&&(ye(r.BLEND),E=!0),X!==NS){if(X!==S||Ct!==C){if((v!==ls||R!==ls)&&(r.blendEquation(r.FUNC_ADD),v=ls,R=ls),Ct)switch(X){case ca:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zm:r.blendFunc(r.ONE,r.ONE);break;case Qm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ca:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zm:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Qm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}P=null,I=null,D=null,U=null,k.set(0,0,0),z=0,S=X,C=Ct}return}Be=Be||Le,Fe=Fe||pe,mt=mt||ve,(Le!==v||Be!==R)&&(r.blendEquationSeparate(At[Le],At[Be]),v=Le,R=Be),(pe!==P||ve!==I||Fe!==D||mt!==U)&&(r.blendFuncSeparate(dt[pe],dt[ve],dt[Fe],dt[mt]),P=pe,I=ve,D=Fe,U=mt),(zt.equals(k)===!1||sn!==z)&&(r.blendColor(zt.r,zt.g,zt.b,sn),k.copy(zt),z=sn),S=X,C=!1}function Jt(X,Le){X.side===Ri?De(r.CULL_FACE):ye(r.CULL_FACE);let pe=X.side===Wn;Le&&(pe=!pe),pt(pe),X.blending===ca&&X.transparent===!1?V(kr):V(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),l.setMask(X.colorWrite);const ve=X.stencilWrite;d.setTest(ve),ve&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),wt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):De(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt(X){T!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),T=X)}function ht(X){X!==CS?(ye(r.CULL_FACE),X!==F&&(X===Km?r.cullFace(r.BACK):X===RS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):De(r.CULL_FACE),F=X}function Ke(X){X!==Y&&(oe&&r.lineWidth(X),Y=X)}function wt(X,Le,pe){X?(ye(r.POLYGON_OFFSET_FILL),(K!==Le||re!==pe)&&(r.polygonOffset(Le,pe),K=Le,re=pe)):De(r.POLYGON_OFFSET_FILL)}function Ve(X){X?ye(r.SCISSOR_TEST):De(r.SCISSOR_TEST)}function N(X){X===void 0&&(X=r.TEXTURE0+he-1),me!==X&&(r.activeTexture(X),me=X)}function b(X,Le,pe){pe===void 0&&(me===null?pe=r.TEXTURE0+he-1:pe=me);let ve=fe[pe];ve===void 0&&(ve={type:void 0,texture:void 0},fe[pe]=ve),(ve.type!==X||ve.texture!==Le)&&(me!==pe&&(r.activeTexture(pe),me=pe),r.bindTexture(X,Le||Ee[X]),ve.type=X,ve.texture=Le)}function O(){const X=fe[me];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function W(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ie(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function q(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Re(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ne(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Je(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function je(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function it(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(X){ke.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),ke.copy(X))}function Te(X){se.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),se.copy(X))}function Oe(X,Le){let pe=p.get(Le);pe===void 0&&(pe=new WeakMap,p.set(Le,pe));let ve=pe.get(X);ve===void 0&&(ve=r.getUniformBlockIndex(Le,X.name),pe.set(X,ve))}function be(X,Le){const ve=p.get(Le).get(X);h.get(Le)!==ve&&(r.uniformBlockBinding(Le,ve,X.__bindingPointIndex),h.set(Le,ve))}function rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},me=null,fe={},x={},m=new WeakMap,y=[],w=null,E=!1,S=null,v=null,P=null,I=null,R=null,D=null,U=null,k=new yt(0,0,0),z=0,C=!1,T=null,F=null,Y=null,K=null,re=null,ke.set(0,0,r.canvas.width,r.canvas.height),se.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:ye,disable:De,bindFramebuffer:$e,drawBuffers:Ge,useProgram:Nt,setBlending:V,setMaterial:Jt,setFlipSided:pt,setCullFace:ht,setLineWidth:Ke,setPolygonOffset:wt,setScissorTest:Ve,activeTexture:N,bindTexture:b,unbindTexture:O,compressedTexImage2D:W,compressedTexImage3D:ie,texImage2D:je,texImage3D:it,updateUBOMapping:Oe,uniformBlockBinding:be,texStorage2D:et,texStorage3D:Me,texSubImage2D:q,texSubImage3D:Re,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Je,scissor:_e,viewport:Te,reset:rt}}function P2(r,e,t,s,a,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new lt,_=new WeakMap;let x;const m=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(N,b){return y?new OffscreenCanvas(N,b):xc("canvas")}function E(N,b,O){let W=1;const ie=Ve(N);if((ie.width>O||ie.height>O)&&(W=O/Math.max(ie.width,ie.height)),W<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const q=Math.floor(W*ie.width),Re=Math.floor(W*ie.height);x===void 0&&(x=w(q,Re));const Ne=b?w(q,Re):x;return Ne.width=q,Ne.height=Re,Ne.getContext("2d").drawImage(N,0,0,q,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+q+"x"+Re+")."),Ne}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),N;return N}function S(N){return N.generateMipmaps}function v(N){r.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function I(N,b,O,W,ie=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let q=b;if(b===r.RED&&(O===r.FLOAT&&(q=r.R32F),O===r.HALF_FLOAT&&(q=r.R16F),O===r.UNSIGNED_BYTE&&(q=r.R8)),b===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.R8UI),O===r.UNSIGNED_SHORT&&(q=r.R16UI),O===r.UNSIGNED_INT&&(q=r.R32UI),O===r.BYTE&&(q=r.R8I),O===r.SHORT&&(q=r.R16I),O===r.INT&&(q=r.R32I)),b===r.RG&&(O===r.FLOAT&&(q=r.RG32F),O===r.HALF_FLOAT&&(q=r.RG16F),O===r.UNSIGNED_BYTE&&(q=r.RG8)),b===r.RG_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.RG8UI),O===r.UNSIGNED_SHORT&&(q=r.RG16UI),O===r.UNSIGNED_INT&&(q=r.RG32UI),O===r.BYTE&&(q=r.RG8I),O===r.SHORT&&(q=r.RG16I),O===r.INT&&(q=r.RG32I)),b===r.RGB_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.RGB8UI),O===r.UNSIGNED_SHORT&&(q=r.RGB16UI),O===r.UNSIGNED_INT&&(q=r.RGB32UI),O===r.BYTE&&(q=r.RGB8I),O===r.SHORT&&(q=r.RGB16I),O===r.INT&&(q=r.RGB32I)),b===r.RGBA_INTEGER&&(O===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),O===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),O===r.UNSIGNED_INT&&(q=r.RGBA32UI),O===r.BYTE&&(q=r.RGBA8I),O===r.SHORT&&(q=r.RGBA16I),O===r.INT&&(q=r.RGBA32I)),b===r.RGB&&O===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),b===r.RGBA){const Re=ie?vc:Lt.getTransfer(W);O===r.FLOAT&&(q=r.RGBA32F),O===r.HALF_FLOAT&&(q=r.RGBA16F),O===r.UNSIGNED_BYTE&&(q=Re===It?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function R(N,b){let O;return N?b===null||b===ms||b===uo?O=r.DEPTH24_STENCIL8:b===er?O=r.DEPTH32F_STENCIL8:b===co&&(O=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ms||b===uo?O=r.DEPTH_COMPONENT24:b===er?O=r.DEPTH_COMPONENT32F:b===co&&(O=r.DEPTH_COMPONENT16),O}function D(N,b){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Si&&N.minFilter!==Ni?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function U(N){const b=N.target;b.removeEventListener("dispose",U),z(b),b.isVideoTexture&&_.delete(b)}function k(N){const b=N.target;b.removeEventListener("dispose",k),T(b)}function z(N){const b=s.get(N);if(b.__webglInit===void 0)return;const O=N.source,W=m.get(O);if(W){const ie=W[b.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&C(N),Object.keys(W).length===0&&m.delete(O)}s.remove(N)}function C(N){const b=s.get(N);r.deleteTexture(b.__webglTexture);const O=N.source,W=m.get(O);delete W[b.__cacheKey],u.memory.textures--}function T(N){const b=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(b.__webglFramebuffer[W]))for(let ie=0;ie<b.__webglFramebuffer[W].length;ie++)r.deleteFramebuffer(b.__webglFramebuffer[W][ie]);else r.deleteFramebuffer(b.__webglFramebuffer[W]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[W])}else{if(Array.isArray(b.__webglFramebuffer))for(let W=0;W<b.__webglFramebuffer.length;W++)r.deleteFramebuffer(b.__webglFramebuffer[W]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let W=0;W<b.__webglColorRenderbuffer.length;W++)b.__webglColorRenderbuffer[W]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[W]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const O=N.textures;for(let W=0,ie=O.length;W<ie;W++){const q=s.get(O[W]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),u.memory.textures--),s.remove(O[W])}s.remove(N)}let F=0;function Y(){F=0}function K(){const N=F;return N>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+a.maxTextures),F+=1,N}function re(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function he(N,b){const O=s.get(N);if(N.isVideoTexture&&Ke(N),N.isRenderTargetTexture===!1&&N.version>0&&O.__version!==N.version){const W=N.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(O,N,b);return}}t.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+b)}function oe(N,b){const O=s.get(N);if(N.version>0&&O.__version!==N.version){se(O,N,b);return}t.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+b)}function le(N,b){const O=s.get(N);if(N.version>0&&O.__version!==N.version){se(O,N,b);return}t.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+b)}function G(N,b){const O=s.get(N);if(N.version>0&&O.__version!==N.version){ge(O,N,b);return}t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+b)}const me={[lh]:r.REPEAT,[ds]:r.CLAMP_TO_EDGE,[ch]:r.MIRRORED_REPEAT},fe={[Si]:r.NEAREST,[rM]:r.NEAREST_MIPMAP_NEAREST,[Ul]:r.NEAREST_MIPMAP_LINEAR,[Ni]:r.LINEAR,[vd]:r.LINEAR_MIPMAP_NEAREST,[hs]:r.LINEAR_MIPMAP_LINEAR},H={[lM]:r.NEVER,[pM]:r.ALWAYS,[cM]:r.LESS,[I0]:r.LEQUAL,[uM]:r.EQUAL,[fM]:r.GEQUAL,[dM]:r.GREATER,[hM]:r.NOTEQUAL};function ce(N,b){if(b.type===er&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ni||b.magFilter===vd||b.magFilter===Ul||b.magFilter===hs||b.minFilter===Ni||b.minFilter===vd||b.minFilter===Ul||b.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,me[b.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,me[b.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,me[b.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,fe[b.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,fe[b.minFilter]),b.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,H[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Si||b.minFilter!==Ul&&b.minFilter!==hs||b.type===er&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function ke(N,b){let O=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",U));const W=b.source;let ie=m.get(W);ie===void 0&&(ie={},m.set(W,ie));const q=re(b);if(q!==N.__cacheKey){ie[q]===void 0&&(ie[q]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,O=!0),ie[q].usedTimes++;const Re=ie[N.__cacheKey];Re!==void 0&&(ie[N.__cacheKey].usedTimes--,Re.usedTimes===0&&C(b)),N.__cacheKey=q,N.__webglTexture=ie[q].texture}return O}function se(N,b,O){let W=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(W=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(W=r.TEXTURE_3D);const ie=ke(N,b),q=b.source;t.bindTexture(W,N.__webglTexture,r.TEXTURE0+O);const Re=s.get(q);if(q.version!==Re.__version||ie===!0){t.activeTexture(r.TEXTURE0+O);const Ne=Lt.getPrimaries(Lt.workingColorSpace),Je=b.colorSpace===Ur?null:Lt.getPrimaries(b.colorSpace),et=b.colorSpace===Ur||Ne===Je?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Me=E(b.image,!1,a.maxTextureSize);Me=wt(b,Me);const je=l.convert(b.format,b.colorSpace),it=l.convert(b.type);let _e=I(b.internalFormat,je,it,b.colorSpace,b.isVideoTexture);ce(W,b);let Te;const Oe=b.mipmaps,be=b.isVideoTexture!==!0,rt=Re.__version===void 0||ie===!0,X=q.dataReady,Le=D(b,Me);if(b.isDepthTexture)_e=R(b.format===fo,b.type),rt&&(be?t.texStorage2D(r.TEXTURE_2D,1,_e,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,_e,Me.width,Me.height,0,je,it,null));else if(b.isDataTexture)if(Oe.length>0){be&&rt&&t.texStorage2D(r.TEXTURE_2D,Le,_e,Oe[0].width,Oe[0].height);for(let pe=0,ve=Oe.length;pe<ve;pe++)Te=Oe[pe],be?X&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,Te.width,Te.height,je,it,Te.data):t.texImage2D(r.TEXTURE_2D,pe,_e,Te.width,Te.height,0,je,it,Te.data);b.generateMipmaps=!1}else be?(rt&&t.texStorage2D(r.TEXTURE_2D,Le,_e,Me.width,Me.height),X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me.width,Me.height,je,it,Me.data)):t.texImage2D(r.TEXTURE_2D,0,_e,Me.width,Me.height,0,je,it,Me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){be&&rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,_e,Oe[0].width,Oe[0].height,Me.depth);for(let pe=0,ve=Oe.length;pe<ve;pe++)if(Te=Oe[pe],b.format!==yi)if(je!==null)if(be){if(X)if(b.layerUpdates.size>0){const Be=Pg(Te.width,Te.height,b.format,b.type);for(const Fe of b.layerUpdates){const mt=Te.data.subarray(Fe*Be/Te.data.BYTES_PER_ELEMENT,(Fe+1)*Be/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,Fe,Te.width,Te.height,1,je,mt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,Te.width,Te.height,Me.depth,je,Te.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,_e,Te.width,Te.height,Me.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?X&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,Te.width,Te.height,Me.depth,je,it,Te.data):t.texImage3D(r.TEXTURE_2D_ARRAY,pe,_e,Te.width,Te.height,Me.depth,0,je,it,Te.data)}else{be&&rt&&t.texStorage2D(r.TEXTURE_2D,Le,_e,Oe[0].width,Oe[0].height);for(let pe=0,ve=Oe.length;pe<ve;pe++)Te=Oe[pe],b.format!==yi?je!==null?be?X&&t.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,Te.width,Te.height,je,Te.data):t.compressedTexImage2D(r.TEXTURE_2D,pe,_e,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?X&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,Te.width,Te.height,je,it,Te.data):t.texImage2D(r.TEXTURE_2D,pe,_e,Te.width,Te.height,0,je,it,Te.data)}else if(b.isDataArrayTexture)if(be){if(rt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,_e,Me.width,Me.height,Me.depth),X)if(b.layerUpdates.size>0){const pe=Pg(Me.width,Me.height,b.format,b.type);for(const ve of b.layerUpdates){const Be=Me.data.subarray(ve*pe/Me.data.BYTES_PER_ELEMENT,(ve+1)*pe/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ve,Me.width,Me.height,1,je,it,Be)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,je,it,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,_e,Me.width,Me.height,Me.depth,0,je,it,Me.data);else if(b.isData3DTexture)be?(rt&&t.texStorage3D(r.TEXTURE_3D,Le,_e,Me.width,Me.height,Me.depth),X&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,je,it,Me.data)):t.texImage3D(r.TEXTURE_3D,0,_e,Me.width,Me.height,Me.depth,0,je,it,Me.data);else if(b.isFramebufferTexture){if(rt)if(be)t.texStorage2D(r.TEXTURE_2D,Le,_e,Me.width,Me.height);else{let pe=Me.width,ve=Me.height;for(let Be=0;Be<Le;Be++)t.texImage2D(r.TEXTURE_2D,Be,_e,pe,ve,0,je,it,null),pe>>=1,ve>>=1}}else if(Oe.length>0){if(be&&rt){const pe=Ve(Oe[0]);t.texStorage2D(r.TEXTURE_2D,Le,_e,pe.width,pe.height)}for(let pe=0,ve=Oe.length;pe<ve;pe++)Te=Oe[pe],be?X&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,je,it,Te):t.texImage2D(r.TEXTURE_2D,pe,_e,je,it,Te);b.generateMipmaps=!1}else if(be){if(rt){const pe=Ve(Me);t.texStorage2D(r.TEXTURE_2D,Le,_e,pe.width,pe.height)}X&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,je,it,Me)}else t.texImage2D(r.TEXTURE_2D,0,_e,je,it,Me);S(b)&&v(W),Re.__version=q.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ge(N,b,O){if(b.image.length!==6)return;const W=ke(N,b),ie=b.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+O);const q=s.get(ie);if(ie.version!==q.__version||W===!0){t.activeTexture(r.TEXTURE0+O);const Re=Lt.getPrimaries(Lt.workingColorSpace),Ne=b.colorSpace===Ur?null:Lt.getPrimaries(b.colorSpace),Je=b.colorSpace===Ur||Re===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const et=b.isCompressedTexture||b.image[0].isCompressedTexture,Me=b.image[0]&&b.image[0].isDataTexture,je=[];for(let ve=0;ve<6;ve++)!et&&!Me?je[ve]=E(b.image[ve],!0,a.maxCubemapSize):je[ve]=Me?b.image[ve].image:b.image[ve],je[ve]=wt(b,je[ve]);const it=je[0],_e=l.convert(b.format,b.colorSpace),Te=l.convert(b.type),Oe=I(b.internalFormat,_e,Te,b.colorSpace),be=b.isVideoTexture!==!0,rt=q.__version===void 0||W===!0,X=ie.dataReady;let Le=D(b,it);ce(r.TEXTURE_CUBE_MAP,b);let pe;if(et){be&&rt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,Oe,it.width,it.height);for(let ve=0;ve<6;ve++){pe=je[ve].mipmaps;for(let Be=0;Be<pe.length;Be++){const Fe=pe[Be];b.format!==yi?_e!==null?be?X&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,0,0,Fe.width,Fe.height,_e,Fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,Oe,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,0,0,Fe.width,Fe.height,_e,Te,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,Oe,Fe.width,Fe.height,0,_e,Te,Fe.data)}}}else{if(pe=b.mipmaps,be&&rt){pe.length>0&&Le++;const ve=Ve(je[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Le,Oe,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Me){be?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,je[ve].width,je[ve].height,_e,Te,je[ve].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Oe,je[ve].width,je[ve].height,0,_e,Te,je[ve].data);for(let Be=0;Be<pe.length;Be++){const mt=pe[Be].image[ve].image;be?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,0,0,mt.width,mt.height,_e,Te,mt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,Oe,mt.width,mt.height,0,_e,Te,mt.data)}}else{be?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,_e,Te,je[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Oe,_e,Te,je[ve]);for(let Be=0;Be<pe.length;Be++){const Fe=pe[Be];be?X&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,0,0,_e,Te,Fe.image[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,Oe,_e,Te,Fe.image[ve])}}}S(b)&&v(r.TEXTURE_CUBE_MAP),q.__version=ie.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Ee(N,b,O,W,ie,q){const Re=l.convert(O.format,O.colorSpace),Ne=l.convert(O.type),Je=I(O.internalFormat,Re,Ne,O.colorSpace),et=s.get(b),Me=s.get(O);if(Me.__renderTarget=b,!et.__hasExternalTextures){const je=Math.max(1,b.width>>q),it=Math.max(1,b.height>>q);ie===r.TEXTURE_3D||ie===r.TEXTURE_2D_ARRAY?t.texImage3D(ie,q,Je,je,it,b.depth,0,Re,Ne,null):t.texImage2D(ie,q,Je,je,it,0,Re,Ne,null)}t.bindFramebuffer(r.FRAMEBUFFER,N),ht(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,W,ie,Me.__webglTexture,0,pt(b)):(ie===r.TEXTURE_2D||ie>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,W,ie,Me.__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(N,b,O){if(r.bindRenderbuffer(r.RENDERBUFFER,N),b.depthBuffer){const W=b.depthTexture,ie=W&&W.isDepthTexture?W.type:null,q=R(b.stencilBuffer,ie),Re=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=pt(b);ht(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ne,q,b.width,b.height):O?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,q,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,q,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Re,r.RENDERBUFFER,N)}else{const W=b.textures;for(let ie=0;ie<W.length;ie++){const q=W[ie],Re=l.convert(q.format,q.colorSpace),Ne=l.convert(q.type),Je=I(q.internalFormat,Re,Ne,q.colorSpace),et=pt(b);O&&ht(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,et,Je,b.width,b.height):ht(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,Je,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Je,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function De(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=s.get(b.depthTexture);W.__renderTarget=b,(!W.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),he(b.depthTexture,0);const ie=W.__webglTexture,q=pt(b);if(b.depthTexture.format===ho)ht(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ie,0);else if(b.depthTexture.format===fo)ht(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function $e(N){const b=s.get(N),O=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const W=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),W){const ie=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,W.removeEventListener("dispose",ie)};W.addEventListener("dispose",ie),b.__depthDisposeCallback=ie}b.__boundDepthTexture=W}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const W=N.texture.mipmaps;W&&W.length>0?De(b.__webglFramebuffer[0],N):De(b.__webglFramebuffer,N)}else if(O){b.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[W]),b.__webglDepthbuffer[W]===void 0)b.__webglDepthbuffer[W]=r.createRenderbuffer(),ye(b.__webglDepthbuffer[W],N,!1);else{const ie=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=b.__webglDepthbuffer[W];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,q)}}else{const W=N.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),ye(b.__webglDepthbuffer,N,!1);else{const ie=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,ie,r.RENDERBUFFER,q)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ge(N,b,O){const W=s.get(N);b!==void 0&&Ee(W.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&$e(N)}function Nt(N){const b=N.texture,O=s.get(N),W=s.get(b);N.addEventListener("dispose",k);const ie=N.textures,q=N.isWebGLCubeRenderTarget===!0,Re=ie.length>1;if(Re||(W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture()),W.__version=b.version,u.memory.textures++),q){O.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[Ne]=[];for(let Je=0;Je<b.mipmaps.length;Je++)O.__webglFramebuffer[Ne][Je]=r.createFramebuffer()}else O.__webglFramebuffer[Ne]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let Ne=0;Ne<b.mipmaps.length;Ne++)O.__webglFramebuffer[Ne]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(Re)for(let Ne=0,Je=ie.length;Ne<Je;Ne++){const et=s.get(ie[Ne]);et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture(),u.memory.textures++)}if(N.samples>0&&ht(N)===!1){O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Ne=0;Ne<ie.length;Ne++){const Je=ie[Ne];O.__webglColorRenderbuffer[Ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[Ne]);const et=l.convert(Je.format,Je.colorSpace),Me=l.convert(Je.type),je=I(Je.internalFormat,et,Me,Je.colorSpace,N.isXRRenderTarget===!0),it=pt(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,it,je,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,O.__webglColorRenderbuffer[Ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),ye(O.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),ce(r.TEXTURE_CUBE_MAP,b);for(let Ne=0;Ne<6;Ne++)if(b.mipmaps&&b.mipmaps.length>0)for(let Je=0;Je<b.mipmaps.length;Je++)Ee(O.__webglFramebuffer[Ne][Je],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Je);else Ee(O.__webglFramebuffer[Ne],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);S(b)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let Ne=0,Je=ie.length;Ne<Je;Ne++){const et=ie[Ne],Me=s.get(et);t.bindTexture(r.TEXTURE_2D,Me.__webglTexture),ce(r.TEXTURE_2D,et),Ee(O.__webglFramebuffer,N,et,r.COLOR_ATTACHMENT0+Ne,r.TEXTURE_2D,0),S(et)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let Ne=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ne=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ne,W.__webglTexture),ce(Ne,b),b.mipmaps&&b.mipmaps.length>0)for(let Je=0;Je<b.mipmaps.length;Je++)Ee(O.__webglFramebuffer[Je],N,b,r.COLOR_ATTACHMENT0,Ne,Je);else Ee(O.__webglFramebuffer,N,b,r.COLOR_ATTACHMENT0,Ne,0);S(b)&&v(Ne),t.unbindTexture()}N.depthBuffer&&$e(N)}function At(N){const b=N.textures;for(let O=0,W=b.length;O<W;O++){const ie=b[O];if(S(ie)){const q=P(N),Re=s.get(ie).__webglTexture;t.bindTexture(q,Re),v(q),t.unbindTexture()}}}const dt=[],V=[];function Jt(N){if(N.samples>0){if(ht(N)===!1){const b=N.textures,O=N.width,W=N.height;let ie=r.COLOR_BUFFER_BIT;const q=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Re=s.get(N),Ne=b.length>1;if(Ne)for(let et=0;et<b.length;et++)t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const Je=N.texture.mipmaps;Je&&Je.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let et=0;et<b.length;et++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ie|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ie|=r.STENCIL_BUFFER_BIT)),Ne){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Re.__webglColorRenderbuffer[et]);const Me=s.get(b[et]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Me,0)}r.blitFramebuffer(0,0,O,W,0,0,O,W,ie,r.NEAREST),h===!0&&(dt.length=0,V.length=0,dt.push(r.COLOR_ATTACHMENT0+et),N.depthBuffer&&N.resolveDepthBuffer===!1&&(dt.push(q),V.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,V)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ne)for(let et=0;et<b.length;et++){t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,Re.__webglColorRenderbuffer[et]);const Me=s.get(b[et]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Re.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,Me,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const b=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function pt(N){return Math.min(a.maxSamples,N.samples)}function ht(N){const b=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ke(N){const b=u.render.frame;_.get(N)!==b&&(_.set(N,b),N.update())}function wt(N,b){const O=N.colorSpace,W=N.format,ie=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||O!==pa&&O!==Ur&&(Lt.getTransfer(O)===It?(W!==yi||ie!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function Ve(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=Y,this.setTexture2D=he,this.setTexture2DArray=oe,this.setTexture3D=le,this.setTextureCube=G,this.rebindTextures=Ge,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ht}function N2(r,e){function t(s,a=Ur){let l;const u=Lt.getTransfer(a);if(s===Ui)return r.UNSIGNED_BYTE;if(s===qh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Kh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===C0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===b0)return r.BYTE;if(s===A0)return r.SHORT;if(s===co)return r.UNSIGNED_SHORT;if(s===Yh)return r.INT;if(s===ms)return r.UNSIGNED_INT;if(s===er)return r.FLOAT;if(s===xo)return r.HALF_FLOAT;if(s===R0)return r.ALPHA;if(s===P0)return r.RGB;if(s===yi)return r.RGBA;if(s===ho)return r.DEPTH_COMPONENT;if(s===fo)return r.DEPTH_STENCIL;if(s===N0)return r.RED;if(s===Zh)return r.RED_INTEGER;if(s===D0)return r.RG;if(s===Qh)return r.RG_INTEGER;if(s===Jh)return r.RGBA_INTEGER;if(s===lc||s===cc||s===uc||s===dc)if(u===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===lc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===cc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===dc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===lc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===cc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===uc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===dc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===uh||s===dh||s===hh||s===fh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===uh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ph||s===mh||s===gh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===ph||s===mh)return u===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===gh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===vh||s===_h||s===xh||s===yh||s===Sh||s===Mh||s===wh||s===Eh||s===Th||s===bh||s===Ah||s===Ch||s===Rh||s===Ph)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===vh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===_h)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Mh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Eh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Th)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ah)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ch)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ph)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hc||s===Nh||s===Dh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===hc)return u===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Nh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Dh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===L0||s===Lh||s===Ih||s===Uh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===hc)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Lh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ih)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Uh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===uo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const D2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class I2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new Xn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Br({vertexShader:D2,fragmentShader:L2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xe(new Eo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U2 extends xs{constructor(e,t){super();const s=this;let a=null,l=1,u=null,d="local-floor",h=1,p=null,_=null,x=null,m=null,y=null,w=null;const E=new I2,S=t.getContextAttributes();let v=null,P=null;const I=[],R=[],D=new lt;let U=null;const k=new Vn;k.viewport=new Qt;const z=new Vn;z.viewport=new Qt;const C=[k,z],T=new ew;let F=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ge=I[se];return ge===void 0&&(ge=new Od,I[se]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(se){let ge=I[se];return ge===void 0&&(ge=new Od,I[se]=ge),ge.getGripSpace()},this.getHand=function(se){let ge=I[se];return ge===void 0&&(ge=new Od,I[se]=ge),ge.getHandSpace()};function K(se){const ge=R.indexOf(se.inputSource);if(ge===-1)return;const Ee=I[ge];Ee!==void 0&&(Ee.update(se.inputSource,se.frame,p||u),Ee.dispatchEvent({type:se.type,data:se.inputSource}))}function re(){a.removeEventListener("select",K),a.removeEventListener("selectstart",K),a.removeEventListener("selectend",K),a.removeEventListener("squeeze",K),a.removeEventListener("squeezestart",K),a.removeEventListener("squeezeend",K),a.removeEventListener("end",re),a.removeEventListener("inputsourceschange",he);for(let se=0;se<I.length;se++){const ge=R[se];ge!==null&&(R[se]=null,I[se].disconnect(ge))}F=null,Y=null,E.reset(),e.setRenderTarget(v),y=null,m=null,x=null,a=null,P=null,ke.stop(),s.isPresenting=!1,e.setPixelRatio(U),e.setSize(D.width,D.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){l=se,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){d=se,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return x},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(se){if(a=se,a!==null){if(v=e.getRenderTarget(),a.addEventListener("select",K),a.addEventListener("selectstart",K),a.addEventListener("selectend",K),a.addEventListener("squeeze",K),a.addEventListener("squeezestart",K),a.addEventListener("squeezeend",K),a.addEventListener("end",re),a.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ye=null,De=null;S.depth&&(De=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=S.stencil?fo:ho,ye=S.stencil?uo:ms);const $e={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:l};x=new XRWebGLBinding(a,t),m=x.createProjectionLayer($e),a.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),P=new gs(m.textureWidth,m.textureHeight,{format:yi,type:Ui,depthTexture:new j0(m.textureWidth,m.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const Ee={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(a,t,Ee),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new gs(y.framebufferWidth,y.framebufferHeight,{format:yi,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await a.requestReferenceSpace(d),ke.setContext(a),ke.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function he(se){for(let ge=0;ge<se.removed.length;ge++){const Ee=se.removed[ge],ye=R.indexOf(Ee);ye>=0&&(R[ye]=null,I[ye].disconnect(Ee))}for(let ge=0;ge<se.added.length;ge++){const Ee=se.added[ge];let ye=R.indexOf(Ee);if(ye===-1){for(let $e=0;$e<I.length;$e++)if($e>=R.length){R.push(Ee),ye=$e;break}else if(R[$e]===null){R[$e]=Ee,ye=$e;break}if(ye===-1)break}const De=I[ye];De&&De.connect(Ee)}}const oe=new J,le=new J;function G(se,ge,Ee){oe.setFromMatrixPosition(ge.matrixWorld),le.setFromMatrixPosition(Ee.matrixWorld);const ye=oe.distanceTo(le),De=ge.projectionMatrix.elements,$e=Ee.projectionMatrix.elements,Ge=De[14]/(De[10]-1),Nt=De[14]/(De[10]+1),At=(De[9]+1)/De[5],dt=(De[9]-1)/De[5],V=(De[8]-1)/De[0],Jt=($e[8]+1)/$e[0],pt=Ge*V,ht=Ge*Jt,Ke=ye/(-V+Jt),wt=Ke*-V;if(ge.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(wt),se.translateZ(Ke),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),De[10]===-1)se.projectionMatrix.copy(ge.projectionMatrix),se.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Ve=Ge+Ke,N=Nt+Ke,b=pt-wt,O=ht+(ye-wt),W=At*Nt/N*Ve,ie=dt*Nt/N*Ve;se.projectionMatrix.makePerspective(b,O,W,ie,Ve,N),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function me(se,ge){ge===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ge.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(a===null)return;let ge=se.near,Ee=se.far;E.texture!==null&&(E.depthNear>0&&(ge=E.depthNear),E.depthFar>0&&(Ee=E.depthFar)),T.near=z.near=k.near=ge,T.far=z.far=k.far=Ee,(F!==T.near||Y!==T.far)&&(a.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,Y=T.far),k.layers.mask=se.layers.mask|2,z.layers.mask=se.layers.mask|4,T.layers.mask=k.layers.mask|z.layers.mask;const ye=se.parent,De=T.cameras;me(T,ye);for(let $e=0;$e<De.length;$e++)me(De[$e],ye);De.length===2?G(T,k,z):T.projectionMatrix.copy(k.projectionMatrix),fe(se,T,ye)};function fe(se,ge,Ee){Ee===null?se.matrix.copy(ge.matrixWorld):(se.matrix.copy(Ee.matrixWorld),se.matrix.invert(),se.matrix.multiply(ge.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ge.projectionMatrix),se.projectionMatrixInverse.copy(ge.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=kh*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(m===null&&y===null))return h},this.setFoveation=function(se){h=se,m!==null&&(m.fixedFoveation=se),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=se)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(T)};let H=null;function ce(se,ge){if(_=ge.getViewerPose(p||u),w=ge,_!==null){const Ee=_.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let ye=!1;Ee.length!==T.cameras.length&&(T.cameras.length=0,ye=!0);for(let Ge=0;Ge<Ee.length;Ge++){const Nt=Ee[Ge];let At=null;if(y!==null)At=y.getViewport(Nt);else{const V=x.getViewSubImage(m,Nt);At=V.viewport,Ge===0&&(e.setRenderTargetTextures(P,V.colorTexture,V.depthStencilTexture),e.setRenderTarget(P))}let dt=C[Ge];dt===void 0&&(dt=new Vn,dt.layers.enable(Ge),dt.viewport=new Qt,C[Ge]=dt),dt.matrix.fromArray(Nt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Nt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(At.x,At.y,At.width,At.height),Ge===0&&(T.matrix.copy(dt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ye===!0&&T.cameras.push(dt)}const De=a.enabledFeatures;if(De&&De.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&x){const Ge=x.getDepthInformation(Ee[0]);Ge&&Ge.isValid&&Ge.texture&&E.init(e,Ge,a.renderState)}}for(let Ee=0;Ee<I.length;Ee++){const ye=R[Ee],De=I[Ee];ye!==null&&De!==void 0&&De.update(ye,ge,p||u)}H&&H(se,ge),ge.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ge}),w=null}const ke=new $0;ke.setAnimationLoop(ce),this.setAnimationLoop=function(se){H=se},this.dispose=function(){}}}const as=new li,k2=new Wt;function F2(r,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,z0(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function a(S,v,P,I,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(S,v):v.isMeshToonMaterial?(l(S,v),x(S,v)):v.isMeshPhongMaterial?(l(S,v),_(S,v)):v.isMeshStandardMaterial?(l(S,v),m(S,v),v.isMeshPhysicalMaterial&&y(S,v,R)):v.isMeshMatcapMaterial?(l(S,v),w(S,v)):v.isMeshDepthMaterial?l(S,v):v.isMeshDistanceMaterial?(l(S,v),E(S,v)):v.isMeshNormalMaterial?l(S,v):v.isLineBasicMaterial?(u(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?h(S,v,P,I):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Wn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Wn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const P=e.get(v),I=P.envMap,R=P.envMapRotation;I&&(S.envMap.value=I,as.copy(R),as.x*=-1,as.y*=-1,as.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),S.envMapRotation.value.setFromMatrix4(k2.makeRotationFromEuler(as)),S.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function u(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function h(S,v,P,I){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*P,S.scale.value=I*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function _(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function x(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function m(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,P){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Wn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,v){v.matcap&&(S.matcap.value=v.matcap)}function E(S,v){const P=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function O2(r,e,t,s){let a={},l={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(P,I){const R=I.program;s.uniformBlockBinding(P,R)}function p(P,I){let R=a[P.id];R===void 0&&(w(P),R=_(P),a[P.id]=R,P.addEventListener("dispose",S));const D=I.program;s.updateUBOMapping(P,D);const U=e.render.frame;l[P.id]!==U&&(m(P),l[P.id]=U)}function _(P){const I=x();P.__bindingPointIndex=I;const R=r.createBuffer(),D=P.__size,U=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,D,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,R),R}function x(){for(let P=0;P<d;P++)if(u.indexOf(P)===-1)return u.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(P){const I=a[P.id],R=P.uniforms,D=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let U=0,k=R.length;U<k;U++){const z=Array.isArray(R[U])?R[U]:[R[U]];for(let C=0,T=z.length;C<T;C++){const F=z[C];if(y(F,U,C,D)===!0){const Y=F.__offset,K=Array.isArray(F.value)?F.value:[F.value];let re=0;for(let he=0;he<K.length;he++){const oe=K[he],le=E(oe);typeof oe=="number"||typeof oe=="boolean"?(F.__data[0]=oe,r.bufferSubData(r.UNIFORM_BUFFER,Y+re,F.__data)):oe.isMatrix3?(F.__data[0]=oe.elements[0],F.__data[1]=oe.elements[1],F.__data[2]=oe.elements[2],F.__data[3]=0,F.__data[4]=oe.elements[3],F.__data[5]=oe.elements[4],F.__data[6]=oe.elements[5],F.__data[7]=0,F.__data[8]=oe.elements[6],F.__data[9]=oe.elements[7],F.__data[10]=oe.elements[8],F.__data[11]=0):(oe.toArray(F.__data,re),re+=le.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(P,I,R,D){const U=P.value,k=I+"_"+R;if(D[k]===void 0)return typeof U=="number"||typeof U=="boolean"?D[k]=U:D[k]=U.clone(),!0;{const z=D[k];if(typeof U=="number"||typeof U=="boolean"){if(z!==U)return D[k]=U,!0}else if(z.equals(U)===!1)return z.copy(U),!0}return!1}function w(P){const I=P.uniforms;let R=0;const D=16;for(let k=0,z=I.length;k<z;k++){const C=Array.isArray(I[k])?I[k]:[I[k]];for(let T=0,F=C.length;T<F;T++){const Y=C[T],K=Array.isArray(Y.value)?Y.value:[Y.value];for(let re=0,he=K.length;re<he;re++){const oe=K[re],le=E(oe),G=R%D,me=G%le.boundary,fe=G+me;R+=me,fe!==0&&D-fe<le.storage&&(R+=D-fe),Y.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=R,R+=le.storage}}}const U=R%D;return U>0&&(R+=D-U),P.__size=R,P.__cache={},this}function E(P){const I={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(I.boundary=4,I.storage=4):P.isVector2?(I.boundary=8,I.storage=8):P.isVector3||P.isColor?(I.boundary=16,I.storage=12):P.isVector4?(I.boundary=16,I.storage=16):P.isMatrix3?(I.boundary=48,I.storage=48):P.isMatrix4?(I.boundary=64,I.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),I}function S(P){const I=P.target;I.removeEventListener("dispose",S);const R=u.indexOf(I.__bindingPointIndex);u.splice(R,1),r.deleteBuffer(a[I.id]),delete a[I.id],delete l[I.id]}function v(){for(const P in a)r.deleteBuffer(a[P]);u=[],a={},l={}}return{bind:h,update:p,dispose:v}}class cf{constructor(e={}){const{canvas:t=vM(),context:s=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=u;const w=new Uint32Array(4),E=new Int32Array(4);let S=null,v=null;const P=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1;this._outputColorSpace=oi;let U=0,k=0,z=null,C=-1,T=null;const F=new Qt,Y=new Qt;let K=null;const re=new yt(0);let he=0,oe=t.width,le=t.height,G=1,me=null,fe=null;const H=new Qt(0,0,oe,le),ce=new Qt(0,0,oe,le);let ke=!1;const se=new rf;let ge=!1,Ee=!1;const ye=new Wt,De=new Wt,$e=new J,Ge=new Qt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function dt(){return z===null?G:1}let V=s;function Jt(L,Z){return t.getContext(L,Z)}try{const L={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$h}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),V===null){const Z="webgl2";if(V=Jt(Z,L),V===null)throw Jt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let pt,ht,Ke,wt,Ve,N,b,O,W,ie,q,Re,Ne,Je,et,Me,je,it,_e,Te,Oe,be,rt,X;function Le(){pt=new qE(V),pt.init(),be=new N2(V,pt),ht=new GE(V,pt,e,be),Ke=new R2(V,pt),ht.reverseDepthBuffer&&m&&Ke.buffers.depth.setReversed(!0),wt=new QE(V),Ve=new g2,N=new P2(V,pt,Ke,Ve,ht,be,wt),b=new jE(R),O=new YE(R),W=new rw(V),rt=new zE(V,W),ie=new KE(V,W,wt,rt),q=new eT(V,ie,W,wt),_e=new JE(V,ht,N),Me=new VE(Ve),Re=new m2(R,b,O,pt,ht,rt,Me),Ne=new F2(R,Ve),Je=new _2,et=new E2(pt),it=new BE(R,b,O,Ke,q,y,h),je=new A2(R,q,ht),X=new O2(V,wt,ht,Ke),Te=new HE(V,pt,wt),Oe=new ZE(V,pt,wt),wt.programs=Re.programs,R.capabilities=ht,R.extensions=pt,R.properties=Ve,R.renderLists=Je,R.shadowMap=je,R.state=Ke,R.info=wt}Le();const pe=new U2(R,V);this.xr=pe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const L=pt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=pt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(L){L!==void 0&&(G=L,this.setSize(oe,le,!1))},this.getSize=function(L){return L.set(oe,le)},this.setSize=function(L,Z,de=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=L,le=Z,t.width=Math.floor(L*G),t.height=Math.floor(Z*G),de===!0&&(t.style.width=L+"px",t.style.height=Z+"px"),this.setViewport(0,0,L,Z)},this.getDrawingBufferSize=function(L){return L.set(oe*G,le*G).floor()},this.setDrawingBufferSize=function(L,Z,de){oe=L,le=Z,G=de,t.width=Math.floor(L*de),t.height=Math.floor(Z*de),this.setViewport(0,0,L,Z)},this.getCurrentViewport=function(L){return L.copy(F)},this.getViewport=function(L){return L.copy(H)},this.setViewport=function(L,Z,de,ne){L.isVector4?H.set(L.x,L.y,L.z,L.w):H.set(L,Z,de,ne),Ke.viewport(F.copy(H).multiplyScalar(G).round())},this.getScissor=function(L){return L.copy(ce)},this.setScissor=function(L,Z,de,ne){L.isVector4?ce.set(L.x,L.y,L.z,L.w):ce.set(L,Z,de,ne),Ke.scissor(Y.copy(ce).multiplyScalar(G).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(L){Ke.setScissorTest(ke=L)},this.setOpaqueSort=function(L){me=L},this.setTransparentSort=function(L){fe=L},this.getClearColor=function(L){return L.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(L=!0,Z=!0,de=!0){let ne=0;if(L){let Q=!1;if(z!==null){const Ce=z.texture.format;Q=Ce===Jh||Ce===Qh||Ce===Zh}if(Q){const Ce=z.texture.type,Ie=Ce===Ui||Ce===ms||Ce===co||Ce===uo||Ce===qh||Ce===Kh,ze=it.getClearColor(),Xe=it.getClearAlpha(),ct=ze.r,ot=ze.g,qe=ze.b;Ie?(w[0]=ct,w[1]=ot,w[2]=qe,w[3]=Xe,V.clearBufferuiv(V.COLOR,0,w)):(E[0]=ct,E[1]=ot,E[2]=qe,E[3]=Xe,V.clearBufferiv(V.COLOR,0,E))}else ne|=V.COLOR_BUFFER_BIT}Z&&(ne|=V.DEPTH_BUFFER_BIT),de&&(ne|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),it.dispose(),Je.dispose(),et.dispose(),Ve.dispose(),b.dispose(),O.dispose(),q.dispose(),rt.dispose(),X.dispose(),Re.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",ys),pe.removeEventListener("sessionend",ar),Fi.stop()};function ve(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const L=wt.autoReset,Z=je.enabled,de=je.autoUpdate,ne=je.needsUpdate,Q=je.type;Le(),wt.autoReset=L,je.enabled=Z,je.autoUpdate=de,je.needsUpdate=ne,je.type=Q}function Fe(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function mt(L){const Z=L.target;Z.removeEventListener("dispose",mt),zt(Z)}function zt(L){sn(L),Ve.remove(L)}function sn(L){const Z=Ve.get(L).programs;Z!==void 0&&(Z.forEach(function(de){Re.releaseProgram(de)}),L.isShaderMaterial&&Re.releaseShaderCache(L))}this.renderBufferDirect=function(L,Z,de,ne,Q,Ce){Z===null&&(Z=Nt);const Ie=Q.isMesh&&Q.matrixWorld.determinant()<0,ze=Ao(L,Z,de,ne,Q);Ke.setMaterial(ne,Ie);let Xe=de.index,ct=1;if(ne.wireframe===!0){if(Xe=ie.getWireframeAttribute(de),Xe===void 0)return;ct=2}const ot=de.drawRange,qe=de.attributes.position;let Tt=ot.start*ct,gt=(ot.start+ot.count)*ct;Ce!==null&&(Tt=Math.max(Tt,Ce.start*ct),gt=Math.min(gt,(Ce.start+Ce.count)*ct)),Xe!==null?(Tt=Math.max(Tt,0),gt=Math.min(gt,Xe.count)):qe!=null&&(Tt=Math.max(Tt,0),gt=Math.min(gt,qe.count));const qt=gt-Tt;if(qt<0||qt===1/0)return;rt.setup(Q,ne,ze,de,Xe);let Vt,bt=Te;if(Xe!==null&&(Vt=W.get(Xe),bt=Oe,bt.setIndex(Vt)),Q.isMesh)ne.wireframe===!0?(Ke.setLineWidth(ne.wireframeLinewidth*dt()),bt.setMode(V.LINES)):bt.setMode(V.TRIANGLES);else if(Q.isLine){let tt=ne.linewidth;tt===void 0&&(tt=1),Ke.setLineWidth(tt*dt()),Q.isLineSegments?bt.setMode(V.LINES):Q.isLineLoop?bt.setMode(V.LINE_LOOP):bt.setMode(V.LINE_STRIP)}else Q.isPoints?bt.setMode(V.POINTS):Q.isSprite&&bt.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)pc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))bt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const tt=Q._multiDrawStarts,Kt=Q._multiDrawCounts,Et=Q._multiDrawCount,Sn=Xe?W.get(Xe).bytesPerElement:1,lr=Ve.get(ne).currentProgram.getUniforms();for(let Pn=0;Pn<Et;Pn++)lr.setValue(V,"_gl_DrawID",Pn),bt.render(tt[Pn]/Sn,Kt[Pn])}else if(Q.isInstancedMesh)bt.renderInstances(Tt,qt,Q.count);else if(de.isInstancedBufferGeometry){const tt=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Kt=Math.min(de.instanceCount,tt);bt.renderInstances(Tt,qt,Kt)}else bt.render(Tt,qt)};function Ct(L,Z,de){L.transparent===!0&&L.side===Ri&&L.forceSinglePass===!1?(L.side=Wn,L.needsUpdate=!0,Ss(L,Z,de),L.side=Or,L.needsUpdate=!0,Ss(L,Z,de),L.side=Ri):Ss(L,Z,de)}this.compile=function(L,Z,de=null){de===null&&(de=L),v=et.get(de),v.init(Z),I.push(v),de.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(v.pushLight(Q),Q.castShadow&&v.pushShadow(Q))}),L!==de&&L.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(v.pushLight(Q),Q.castShadow&&v.pushShadow(Q))}),v.setupLights();const ne=new Set;return L.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ce=Q.material;if(Ce)if(Array.isArray(Ce))for(let Ie=0;Ie<Ce.length;Ie++){const ze=Ce[Ie];Ct(ze,de,Q),ne.add(ze)}else Ct(Ce,de,Q),ne.add(Ce)}),v=I.pop(),ne},this.compileAsync=function(L,Z,de=null){const ne=this.compile(L,Z,de);return new Promise(Q=>{function Ce(){if(ne.forEach(function(Ie){Ve.get(Ie).currentProgram.isReady()&&ne.delete(Ie)}),ne.size===0){Q(L);return}setTimeout(Ce,10)}pt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let In=null;function Rn(L){In&&In(L)}function ys(){Fi.stop()}function ar(){Fi.start()}const Fi=new $0;Fi.setAnimationLoop(Rn),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(L){In=L,pe.setAnimationLoop(L),L===null?Fi.stop():Fi.start()},pe.addEventListener("sessionstart",ys),pe.addEventListener("sessionend",ar),this.render=function(L,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(Z),Z=pe.getCamera()),L.isScene===!0&&L.onBeforeRender(R,L,Z,z),v=et.get(L,I.length),v.init(Z),I.push(v),De.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),se.setFromProjectionMatrix(De),Ee=this.localClippingEnabled,ge=Me.init(this.clippingPlanes,Ee),S=Je.get(L,P.length),S.init(),P.push(S),pe.enabled===!0&&pe.isPresenting===!0){const Ce=R.xr.getDepthSensingMesh();Ce!==null&&Oi(Ce,Z,-1/0,R.sortObjects)}Oi(L,Z,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(me,fe),At=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,At&&it.addToRenderList(S,L),this.info.render.frame++,ge===!0&&Me.beginShadows();const de=v.state.shadowsArray;je.render(de,L,Z),ge===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=S.opaque,Q=S.transmissive;if(v.setupLights(),Z.isArrayCamera){const Ce=Z.cameras;if(Q.length>0)for(let Ie=0,ze=Ce.length;Ie<ze;Ie++){const Xe=Ce[Ie];Gr(ne,Q,L,Xe)}At&&it.render(L);for(let Ie=0,ze=Ce.length;Ie<ze;Ie++){const Xe=Ce[Ie];Hr(S,L,Xe,Xe.viewport)}}else Q.length>0&&Gr(ne,Q,L,Z),At&&it.render(L),Hr(S,L,Z);z!==null&&k===0&&(N.updateMultisampleRenderTarget(z),N.updateRenderTargetMipmap(z)),L.isScene===!0&&L.onAfterRender(R,L,Z),rt.resetDefaultState(),C=-1,T=null,I.pop(),I.length>0?(v=I[I.length-1],ge===!0&&Me.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function Oi(L,Z,de,ne){if(L.visible===!1)return;if(L.layers.test(Z.layers)){if(L.isGroup)de=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Z);else if(L.isLight)v.pushLight(L),L.castShadow&&v.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||se.intersectsSprite(L)){ne&&Ge.setFromMatrixPosition(L.matrixWorld).applyMatrix4(De);const Ie=q.update(L),ze=L.material;ze.visible&&S.push(L,Ie,ze,de,Ge.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||se.intersectsObject(L))){const Ie=q.update(L),ze=L.material;if(ne&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ge.copy(L.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ge.copy(Ie.boundingSphere.center)),Ge.applyMatrix4(L.matrixWorld).applyMatrix4(De)),Array.isArray(ze)){const Xe=Ie.groups;for(let ct=0,ot=Xe.length;ct<ot;ct++){const qe=Xe[ct],Tt=ze[qe.materialIndex];Tt&&Tt.visible&&S.push(L,Ie,Tt,de,Ge.z,qe)}}else ze.visible&&S.push(L,Ie,ze,de,Ge.z,null)}}const Ce=L.children;for(let Ie=0,ze=Ce.length;Ie<ze;Ie++)Oi(Ce[Ie],Z,de,ne)}function Hr(L,Z,de,ne){const Q=L.opaque,Ce=L.transmissive,Ie=L.transparent;v.setupLightsView(de),ge===!0&&Me.setGlobalState(R.clippingPlanes,de),ne&&Ke.viewport(F.copy(ne)),Q.length>0&&or(Q,Z,de),Ce.length>0&&or(Ce,Z,de),Ie.length>0&&or(Ie,Z,de),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Gr(L,Z,de,ne){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ne.id]===void 0&&(v.state.transmissionRenderTarget[ne.id]=new gs(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?xo:Ui,minFilter:hs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const Ce=v.state.transmissionRenderTarget[ne.id],Ie=ne.viewport||F;Ce.setSize(Ie.z*R.transmissionResolutionScale,Ie.w*R.transmissionResolutionScale);const ze=R.getRenderTarget();R.setRenderTarget(Ce),R.getClearColor(re),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),At&&it.render(de);const Xe=R.toneMapping;R.toneMapping=Fr;const ct=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),v.setupLightsView(ne),ge===!0&&Me.setGlobalState(R.clippingPlanes,ne),or(L,de,ne),N.updateMultisampleRenderTarget(Ce),N.updateRenderTargetMipmap(Ce),pt.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let qe=0,Tt=Z.length;qe<Tt;qe++){const gt=Z[qe],qt=gt.object,Vt=gt.geometry,bt=gt.material,tt=gt.group;if(bt.side===Ri&&qt.layers.test(ne.layers)){const Kt=bt.side;bt.side=Wn,bt.needsUpdate=!0,To(qt,de,ne,Vt,bt,tt),bt.side=Kt,bt.needsUpdate=!0,ot=!0}}ot===!0&&(N.updateMultisampleRenderTarget(Ce),N.updateRenderTargetMipmap(Ce))}R.setRenderTarget(ze),R.setClearColor(re,he),ct!==void 0&&(ne.viewport=ct),R.toneMapping=Xe}function or(L,Z,de){const ne=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Ce=L.length;Q<Ce;Q++){const Ie=L[Q],ze=Ie.object,Xe=Ie.geometry,ct=Ie.group;let ot=Ie.material;ot.allowOverride===!0&&ne!==null&&(ot=ne),ze.layers.test(de.layers)&&To(ze,Z,de,Xe,ot,ct)}}function To(L,Z,de,ne,Q,Ce){L.onBeforeRender(R,Z,de,ne,Q,Ce),L.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),Q.onBeforeRender(R,Z,de,ne,L,Ce),Q.transparent===!0&&Q.side===Ri&&Q.forceSinglePass===!1?(Q.side=Wn,Q.needsUpdate=!0,R.renderBufferDirect(de,Z,ne,Q,L,Ce),Q.side=Or,Q.needsUpdate=!0,R.renderBufferDirect(de,Z,ne,Q,L,Ce),Q.side=Ri):R.renderBufferDirect(de,Z,ne,Q,L,Ce),L.onAfterRender(R,Z,de,ne,Q,Ce)}function Ss(L,Z,de){Z.isScene!==!0&&(Z=Nt);const ne=Ve.get(L),Q=v.state.lights,Ce=v.state.shadowsArray,Ie=Q.state.version,ze=Re.getParameters(L,Q.state,Ce,Z,de),Xe=Re.getProgramCacheKey(ze);let ct=ne.programs;ne.environment=L.isMeshStandardMaterial?Z.environment:null,ne.fog=Z.fog,ne.envMap=(L.isMeshStandardMaterial?O:b).get(L.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&L.envMap===null?Z.environmentRotation:L.envMapRotation,ct===void 0&&(L.addEventListener("dispose",mt),ct=new Map,ne.programs=ct);let ot=ct.get(Xe);if(ot!==void 0){if(ne.currentProgram===ot&&ne.lightsStateVersion===Ie)return Mi(L,ze),ot}else ze.uniforms=Re.getUniforms(L),L.onBeforeCompile(ze,R),ot=Re.acquireProgram(ze,Xe),ct.set(Xe,ot),ne.uniforms=ze.uniforms;const qe=ne.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(qe.clippingPlanes=Me.uniform),Mi(L,ze),ne.needsLights=Pc(L),ne.lightsStateVersion=Ie,ne.needsLights&&(qe.ambientLightColor.value=Q.state.ambient,qe.lightProbe.value=Q.state.probe,qe.directionalLights.value=Q.state.directional,qe.directionalLightShadows.value=Q.state.directionalShadow,qe.spotLights.value=Q.state.spot,qe.spotLightShadows.value=Q.state.spotShadow,qe.rectAreaLights.value=Q.state.rectArea,qe.ltc_1.value=Q.state.rectAreaLTC1,qe.ltc_2.value=Q.state.rectAreaLTC2,qe.pointLights.value=Q.state.point,qe.pointLightShadows.value=Q.state.pointShadow,qe.hemisphereLights.value=Q.state.hemi,qe.directionalShadowMap.value=Q.state.directionalShadowMap,qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,qe.spotShadowMap.value=Q.state.spotShadowMap,qe.spotLightMatrix.value=Q.state.spotLightMatrix,qe.spotLightMap.value=Q.state.spotLightMap,qe.pointShadowMap.value=Q.state.pointShadowMap,qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),ne.currentProgram=ot,ne.uniformsList=null,ot}function bo(L){if(L.uniformsList===null){const Z=L.currentProgram.getUniforms();L.uniformsList=mc.seqWithValue(Z.seq,L.uniforms)}return L.uniformsList}function Mi(L,Z){const de=Ve.get(L);de.outputColorSpace=Z.outputColorSpace,de.batching=Z.batching,de.batchingColor=Z.batchingColor,de.instancing=Z.instancing,de.instancingColor=Z.instancingColor,de.instancingMorph=Z.instancingMorph,de.skinning=Z.skinning,de.morphTargets=Z.morphTargets,de.morphNormals=Z.morphNormals,de.morphColors=Z.morphColors,de.morphTargetsCount=Z.morphTargetsCount,de.numClippingPlanes=Z.numClippingPlanes,de.numIntersection=Z.numClipIntersection,de.vertexAlphas=Z.vertexAlphas,de.vertexTangents=Z.vertexTangents,de.toneMapping=Z.toneMapping}function Ao(L,Z,de,ne,Q){Z.isScene!==!0&&(Z=Nt),N.resetTextureUnits();const Ce=Z.fog,Ie=ne.isMeshStandardMaterial?Z.environment:null,ze=z===null?R.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:pa,Xe=(ne.isMeshStandardMaterial?O:b).get(ne.envMap||Ie),ct=ne.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,ot=!!de.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),qe=!!de.morphAttributes.position,Tt=!!de.morphAttributes.normal,gt=!!de.morphAttributes.color;let qt=Fr;ne.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(qt=R.toneMapping);const Vt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,bt=Vt!==void 0?Vt.length:0,tt=Ve.get(ne),Kt=v.state.lights;if(ge===!0&&(Ee===!0||L!==T)){const vn=L===T&&ne.id===C;Me.setState(ne,L,vn)}let Et=!1;ne.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Kt.state.version||tt.outputColorSpace!==ze||Q.isBatchedMesh&&tt.batching===!1||!Q.isBatchedMesh&&tt.batching===!0||Q.isBatchedMesh&&tt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&tt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&tt.instancing===!1||!Q.isInstancedMesh&&tt.instancing===!0||Q.isSkinnedMesh&&tt.skinning===!1||!Q.isSkinnedMesh&&tt.skinning===!0||Q.isInstancedMesh&&tt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&tt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&tt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&tt.instancingMorph===!1&&Q.morphTexture!==null||tt.envMap!==Xe||ne.fog===!0&&tt.fog!==Ce||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Me.numPlanes||tt.numIntersection!==Me.numIntersection)||tt.vertexAlphas!==ct||tt.vertexTangents!==ot||tt.morphTargets!==qe||tt.morphNormals!==Tt||tt.morphColors!==gt||tt.toneMapping!==qt||tt.morphTargetsCount!==bt)&&(Et=!0):(Et=!0,tt.__version=ne.version);let Sn=tt.currentProgram;Et===!0&&(Sn=Ss(ne,Z,Q));let lr=!1,Pn=!1,Bi=!1;const kt=Sn.getUniforms(),Mn=tt.uniforms;if(Ke.useProgram(Sn.program)&&(lr=!0,Pn=!0,Bi=!0),ne.id!==C&&(C=ne.id,Pn=!0),lr||T!==L){Ke.buffers.depth.getReversed()?(ye.copy(L.projectionMatrix),xM(ye),yM(ye),kt.setValue(V,"projectionMatrix",ye)):kt.setValue(V,"projectionMatrix",L.projectionMatrix),kt.setValue(V,"viewMatrix",L.matrixWorldInverse);const hn=kt.map.cameraPosition;hn!==void 0&&hn.setValue(V,$e.setFromMatrixPosition(L.matrixWorld)),ht.logarithmicDepthBuffer&&kt.setValue(V,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&kt.setValue(V,"isOrthographic",L.isOrthographicCamera===!0),T!==L&&(T=L,Pn=!0,Bi=!0)}if(Q.isSkinnedMesh){kt.setOptional(V,Q,"bindMatrix"),kt.setOptional(V,Q,"bindMatrixInverse");const vn=Q.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),kt.setValue(V,"boneTexture",vn.boneTexture,N))}Q.isBatchedMesh&&(kt.setOptional(V,Q,"batchingTexture"),kt.setValue(V,"batchingTexture",Q._matricesTexture,N),kt.setOptional(V,Q,"batchingIdTexture"),kt.setValue(V,"batchingIdTexture",Q._indirectTexture,N),kt.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&kt.setValue(V,"batchingColorTexture",Q._colorsTexture,N));const dn=de.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&_e.update(Q,de,Sn),(Pn||tt.receiveShadow!==Q.receiveShadow)&&(tt.receiveShadow=Q.receiveShadow,kt.setValue(V,"receiveShadow",Q.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Mn.envMap.value=Xe,Mn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&Z.environment!==null&&(Mn.envMapIntensity.value=Z.environmentIntensity),Pn&&(kt.setValue(V,"toneMappingExposure",R.toneMappingExposure),tt.needsLights&&Co(Mn,Bi),Ce&&ne.fog===!0&&Ne.refreshFogUniforms(Mn,Ce),Ne.refreshMaterialUniforms(Mn,ne,G,le,v.state.transmissionRenderTarget[L.id]),mc.upload(V,bo(tt),Mn,N)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(mc.upload(V,bo(tt),Mn,N),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&kt.setValue(V,"center",Q.center),kt.setValue(V,"modelViewMatrix",Q.modelViewMatrix),kt.setValue(V,"normalMatrix",Q.normalMatrix),kt.setValue(V,"modelMatrix",Q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const vn=ne.uniformsGroups;for(let hn=0,Rt=vn.length;hn<Rt;hn++){const wi=vn[hn];X.update(wi,Sn),X.bind(wi,Sn)}}return Sn}function Co(L,Z){L.ambientLightColor.needsUpdate=Z,L.lightProbe.needsUpdate=Z,L.directionalLights.needsUpdate=Z,L.directionalLightShadows.needsUpdate=Z,L.pointLights.needsUpdate=Z,L.pointLightShadows.needsUpdate=Z,L.spotLights.needsUpdate=Z,L.spotLightShadows.needsUpdate=Z,L.rectAreaLights.needsUpdate=Z,L.hemisphereLights.needsUpdate=Z}function Pc(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(L,Z,de){const ne=Ve.get(L);ne.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),Ve.get(L.texture).__webglTexture=Z,Ve.get(L.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:de,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,Z){const de=Ve.get(L);de.__webglFramebuffer=Z,de.__useDefaultFramebuffer=Z===void 0};const Ro=V.createFramebuffer();this.setRenderTarget=function(L,Z=0,de=0){z=L,U=Z,k=de;let ne=!0,Q=null,Ce=!1,Ie=!1;if(L){const Xe=Ve.get(L);if(Xe.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(V.FRAMEBUFFER,null),ne=!1;else if(Xe.__webglFramebuffer===void 0)N.setupRenderTarget(L);else if(Xe.__hasExternalTextures)N.rebindTextures(L,Ve.get(L.texture).__webglTexture,Ve.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const qe=L.depthTexture;if(Xe.__boundDepthTexture!==qe){if(qe!==null&&Ve.has(qe)&&(L.width!==qe.image.width||L.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(L)}}const ct=L.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Ie=!0);const ot=Ve.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ot[Z])?Q=ot[Z][de]:Q=ot[Z],Ce=!0):L.samples>0&&N.useMultisampledRTT(L)===!1?Q=Ve.get(L).__webglMultisampledFramebuffer:Array.isArray(ot)?Q=ot[de]:Q=ot,F.copy(L.viewport),Y.copy(L.scissor),K=L.scissorTest}else F.copy(H).multiplyScalar(G).floor(),Y.copy(ce).multiplyScalar(G).floor(),K=ke;if(de!==0&&(Q=Ro),Ke.bindFramebuffer(V.FRAMEBUFFER,Q)&&ne&&Ke.drawBuffers(L,Q),Ke.viewport(F),Ke.scissor(Y),Ke.setScissorTest(K),Ce){const Xe=Ve.get(L.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Xe.__webglTexture,de)}else if(Ie){const Xe=Ve.get(L.texture),ct=Z;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xe.__webglTexture,de,ct)}else if(L!==null&&de!==0){const Xe=Ve.get(L.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Xe.__webglTexture,de)}C=-1},this.readRenderTargetPixels=function(L,Z,de,ne,Q,Ce,Ie){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ve.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze){Ke.bindFramebuffer(V.FRAMEBUFFER,ze);try{const Xe=L.texture,ct=Xe.format,ot=Xe.type;if(!ht.textureFormatReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=L.width-ne&&de>=0&&de<=L.height-Q&&V.readPixels(Z,de,ne,Q,be.convert(ct),be.convert(ot),Ce)}finally{const Xe=z!==null?Ve.get(z).__webglFramebuffer:null;Ke.bindFramebuffer(V.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(L,Z,de,ne,Q,Ce,Ie){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Ve.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze)if(Z>=0&&Z<=L.width-ne&&de>=0&&de<=L.height-Q){Ke.bindFramebuffer(V.FRAMEBUFFER,ze);const Xe=L.texture,ct=Xe.format,ot=Xe.type;if(!ht.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,qe),V.bufferData(V.PIXEL_PACK_BUFFER,Ce.byteLength,V.STREAM_READ),V.readPixels(Z,de,ne,Q,be.convert(ct),be.convert(ot),0);const Tt=z!==null?Ve.get(z).__webglFramebuffer:null;Ke.bindFramebuffer(V.FRAMEBUFFER,Tt);const gt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await _M(V,gt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,qe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ce),V.deleteBuffer(qe),V.deleteSync(gt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,Z=null,de=0){const ne=Math.pow(2,-de),Q=Math.floor(L.image.width*ne),Ce=Math.floor(L.image.height*ne),Ie=Z!==null?Z.x:0,ze=Z!==null?Z.y:0;N.setTexture2D(L,0),V.copyTexSubImage2D(V.TEXTURE_2D,de,0,0,Ie,ze,Q,Ce),Ke.unbindTexture()};const Po=V.createFramebuffer(),No=V.createFramebuffer();this.copyTextureToTexture=function(L,Z,de=null,ne=null,Q=0,Ce=null){Ce===null&&(Q!==0?(pc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=Q,Q=0):Ce=0);let Ie,ze,Xe,ct,ot,qe,Tt,gt,qt;const Vt=L.isCompressedTexture?L.mipmaps[Ce]:L.image;if(de!==null)Ie=de.max.x-de.min.x,ze=de.max.y-de.min.y,Xe=de.isBox3?de.max.z-de.min.z:1,ct=de.min.x,ot=de.min.y,qe=de.isBox3?de.min.z:0;else{const dn=Math.pow(2,-Q);Ie=Math.floor(Vt.width*dn),ze=Math.floor(Vt.height*dn),L.isDataArrayTexture?Xe=Vt.depth:L.isData3DTexture?Xe=Math.floor(Vt.depth*dn):Xe=1,ct=0,ot=0,qe=0}ne!==null?(Tt=ne.x,gt=ne.y,qt=ne.z):(Tt=0,gt=0,qt=0);const bt=be.convert(Z.format),tt=be.convert(Z.type);let Kt;Z.isData3DTexture?(N.setTexture3D(Z,0),Kt=V.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(N.setTexture2DArray(Z,0),Kt=V.TEXTURE_2D_ARRAY):(N.setTexture2D(Z,0),Kt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const Et=V.getParameter(V.UNPACK_ROW_LENGTH),Sn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),lr=V.getParameter(V.UNPACK_SKIP_PIXELS),Pn=V.getParameter(V.UNPACK_SKIP_ROWS),Bi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Vt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Vt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ct),V.pixelStorei(V.UNPACK_SKIP_ROWS,ot),V.pixelStorei(V.UNPACK_SKIP_IMAGES,qe);const kt=L.isDataArrayTexture||L.isData3DTexture,Mn=Z.isDataArrayTexture||Z.isData3DTexture;if(L.isDepthTexture){const dn=Ve.get(L),vn=Ve.get(Z),hn=Ve.get(dn.__renderTarget),Rt=Ve.get(vn.__renderTarget);Ke.bindFramebuffer(V.READ_FRAMEBUFFER,hn.__webglFramebuffer),Ke.bindFramebuffer(V.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let wi=0;wi<Xe;wi++)kt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ve.get(L).__webglTexture,Q,qe+wi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ve.get(Z).__webglTexture,Ce,qt+wi)),V.blitFramebuffer(ct,ot,Ie,ze,Tt,gt,Ie,ze,V.DEPTH_BUFFER_BIT,V.NEAREST);Ke.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||L.isRenderTargetTexture||Ve.has(L)){const dn=Ve.get(L),vn=Ve.get(Z);Ke.bindFramebuffer(V.READ_FRAMEBUFFER,Po),Ke.bindFramebuffer(V.DRAW_FRAMEBUFFER,No);for(let hn=0;hn<Xe;hn++)kt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,dn.__webglTexture,Q,qe+hn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,dn.__webglTexture,Q),Mn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,vn.__webglTexture,Ce,qt+hn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,vn.__webglTexture,Ce),Q!==0?V.blitFramebuffer(ct,ot,Ie,ze,Tt,gt,Ie,ze,V.COLOR_BUFFER_BIT,V.NEAREST):Mn?V.copyTexSubImage3D(Kt,Ce,Tt,gt,qt+hn,ct,ot,Ie,ze):V.copyTexSubImage2D(Kt,Ce,Tt,gt,ct,ot,Ie,ze);Ke.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Mn?L.isDataTexture||L.isData3DTexture?V.texSubImage3D(Kt,Ce,Tt,gt,qt,Ie,ze,Xe,bt,tt,Vt.data):Z.isCompressedArrayTexture?V.compressedTexSubImage3D(Kt,Ce,Tt,gt,qt,Ie,ze,Xe,bt,Vt.data):V.texSubImage3D(Kt,Ce,Tt,gt,qt,Ie,ze,Xe,bt,tt,Vt):L.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ce,Tt,gt,Ie,ze,bt,tt,Vt.data):L.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ce,Tt,gt,Vt.width,Vt.height,bt,Vt.data):V.texSubImage2D(V.TEXTURE_2D,Ce,Tt,gt,Ie,ze,bt,tt,Vt);V.pixelStorei(V.UNPACK_ROW_LENGTH,Et),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Sn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,lr),V.pixelStorei(V.UNPACK_SKIP_ROWS,Pn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Bi),Ce===0&&Z.generateMipmaps&&V.generateMipmap(Kt),Ke.unbindTexture()},this.copyTextureToTexture3D=function(L,Z,de=null,ne=null,Q=0){return pc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,Z,de,ne,Q)},this.initRenderTarget=function(L){Ve.get(L).__webglFramebuffer===void 0&&N.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?N.setTextureCube(L,0):L.isData3DTexture?N.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?N.setTexture2DArray(L,0):N.setTexture2D(L,0),Ke.unbindTexture()},this.resetState=function(){U=0,k=0,z=null,Ke.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}const B2={ownedTrees:[1],addTree:()=>{},refreshOwnedTrees:()=>{}},Q0=ee.createContext(B2),z2=({children:r})=>{const[e,t]=ee.useState(()=>{try{const d=Jn();if(d&&Array.isArray(d.shopOwnedAvatars))return new Set([1,...d.shopOwnedAvatars]);const h=[1];return d||ao({shopOwnedAvatars:h}),new Set(h)}catch{return new Set([1])}}),s=d=>{d&&t(h=>{const p=new Set(h);return p.add(d),p})},a=()=>{try{const d=Jn();return d&&Array.isArray(d.shopOwnedAvatars)?new Set([1,...d.shopOwnedAvatars]):new Set([1])}catch{return new Set([1])}},l=()=>{const d=a();t(d)};ee.useEffect(()=>{l();const d=()=>{l()},h=()=>{document.visibilityState==="visible"&&l()};return window.addEventListener("focus",d),document.addEventListener("visibilitychange",h),()=>{window.removeEventListener("focus",d),document.removeEventListener("visibilitychange",h)}},[]),ee.useEffect(()=>{const d=()=>{l()};return window.addEventListener("userDataChanged",d),()=>window.removeEventListener("userDataChanged",d)},[]),ee.useEffect(()=>{try{const d=Array.from(e);localStorage.setItem("ownedTrees",JSON.stringify(d))}catch{}},[e]);const u={ownedTrees:Array.from(e),addTree:s,refreshOwnedTrees:l};return M.jsx(Q0.Provider,{value:u,children:r})},uf=()=>{const r=ee.useContext(Q0);if(!r)throw new Error("useTreeContext must be used within TreeProvider");return r},df=[{id:1,name:"Baby Sprout",description:"Your first tiny green companion",price:0,rarity:"common",level:1,type:"sprout",color:3329330,gardenColor:2972199,stats:{growth:1,efficiency:1,beauty:1}},{id:2,name:"Mighty Oak",description:"Majestic oak with broad canopy and acorns",price:500,rarity:"common",level:2,type:"oak",color:2263842,gardenColor:9109504,stats:{growth:2,efficiency:3,beauty:2}},{id:3,name:"Cherry Blossom",description:"Delicate pink flowers bloom in spring beauty",price:750,rarity:"rare",level:3,type:"cherry",color:16758465,gardenColor:16758725,stats:{growth:2,efficiency:2,beauty:4}},{id:4,name:"Weeping Willow",description:"Graceful drooping branches dance in the breeze",price:1e3,rarity:"rare",level:4,type:"willow",color:10145074,gardenColor:19712,stats:{growth:3,efficiency:3,beauty:3}},{id:5,name:"Autumn Maple",description:"Fiery red and orange leaves of fall",price:1200,rarity:"rare",level:5,type:"maple",color:16729344,gardenColor:16766720,stats:{growth:3,efficiency:2,beauty:4}},{id:6,name:"Golden Pine",description:"Tall evergreen with golden needles and pine cones",price:1500,rarity:"epic",level:6,type:"pine",color:2263842,gardenColor:2263842,stats:{growth:4,efficiency:4,beauty:3}},{id:7,name:"Rainbow Eucalyptus",description:"Mystical bark with rainbow colors",price:2e3,rarity:"epic",level:7,type:"eucalyptus",color:16738740,gardenColor:16738740,stats:{growth:4,efficiency:3,beauty:5}},{id:8,name:"Crystal Bonsai",description:"Miniature crystalline tree with glowing gems",price:2500,rarity:"legendary",level:8,type:"crystal",color:8900331,gardenColor:8900331,stats:{growth:5,efficiency:5,beauty:5}},{id:9,name:"Phoenix Palm",description:"Legendary palm with fiery golden fronds",price:3e3,rarity:"legendary",level:9,type:"phoenix",color:16766720,gardenColor:16766720,stats:{growth:5,efficiency:4,beauty:5}}],t0={common:"from-gray-400 to-gray-600",rare:"from-blue-400 to-blue-600",epic:"from-purple-400 to-purple-600",legendary:"from-yellow-400 to-orange-500"},H2={common:"border-gray-300",rare:"border-blue-300",epic:"border-purple-300",legendary:"border-yellow-300"},G2=r=>df.find(e=>e.id===r),V2=()=>df,j2=()=>{go();const{addTree:r,refreshOwnedTrees:e}=uf(),[t,s]=ee.useState(()=>{var U;const D=Jn();return((U=D==null?void 0:D.stats)==null?void 0:U.totalEcoPoints)||0}),[a,l]=ee.useState(()=>{const D=Jn();return D&&Array.isArray(D.shopOwnedAvatars)?new Set(D.shopOwnedAvatars):new Set([])}),[u,d]=ee.useState(null),[h,p]=ee.useState([]),[_,x]=ee.useState(!1),[m,y]=ee.useState([]),w=df;ee.useEffect(()=>{e()},[e,a]);const E=(D,U="success")=>{const k=Date.now(),z={id:k,message:D,type:U};y(C=>[...C,z]),setTimeout(()=>{y(C=>C.filter(T=>T.id!==k))},3e3)},S=D=>{const U=Jn()||{};if(Array.isArray(U.shopOwnedAvatars)||(U.shopOwnedAvatars=[]),D.price===0&&!a.has(D.id)){const k=new Set([...a,D.id]);l(k),U.shopOwnedAvatars=Array.from(k),ao(U),r(D.id),E(`🌱 ${D.name} claimed for free!`),x(!1),window.dispatchEvent(new Event("userDataChanged"));return}if(t>=D.price&&!a.has(D.id)){U.stats&&(U.stats.totalEcoPoints-=D.price);const k=new Set([...a,D.id]);s(z=>z-D.price),l(k),U.shopOwnedAvatars=Array.from(k),ao(U),r(D.id),E(`🌳 ${D.name} purchased successfully! Welcome to your garden!`),x(!1),window.dispatchEvent(new Event("userDataChanged"))}else a.has(D.id)?E("You already own this tree avatar!","info"):E("Not enough EcoPoints! Complete more eco-activities to earn points.","error")},v=D=>{d(D),x(!0)};ee.useEffect(()=>{const D=Jn()||{};D.shopOwnedAvatars=Array.from(a),ao(D),window.dispatchEvent(new Event("storage"))},[a]),ee.useEffect(()=>{const D=()=>{var k;const U=Jn();U&&(s(((k=U.stats)==null?void 0:k.totalEcoPoints)||0),l(new Set(U.shopOwnedAvatars||[])))};return window.addEventListener("storage",D),()=>window.removeEventListener("storage",D)},[]);const P=a.size,I=w.filter(D=>(D.rarity==="epic"||D.rarity==="legendary")&&a.has(D.id)).length,R=w.length-P;return M.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-emerald-50",children:[M.jsx("nav",{className:"bg-gradient-to-r from-emerald-600 to-green-600 shadow-lg sticky top-0 z-40",children:M.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:M.jsxs("div",{className:"flex justify-between items-center h-16",children:[M.jsxs("div",{className:"flex items-center space-x-4",children:[M.jsx(Pi,{to:"/dashboard",className:"text-white hover:text-green-200 p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all",children:M.jsx(Wh,{className:"h-6 w-6"})}),M.jsxs("div",{className:"flex items-center space-x-2",children:[M.jsx(jy,{className:"h-8 w-8 text-white"}),M.jsx("span",{className:"text-2xl font-bold text-white",children:"Tree Shop"})]})]}),M.jsx("div",{className:"flex items-center space-x-4",children:M.jsxs("div",{className:"bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold flex items-center space-x-2",children:[M.jsx(Xy,{className:"h-4 w-4"}),M.jsxs("span",{children:[t.toLocaleString()," EcoPoints"]})]})})]})})}),M.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[M.jsxs("div",{className:"text-center mb-8",children:[M.jsx("h1",{className:"text-4xl font-bold text-emerald-600 mb-4",children:"🌳 Avatar Collection"}),M.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Discover and collect unique tree avatars to represent your eco journey. Each tree has special abilities and grows stronger as you make a difference!"})]}),M.jsx("div",{className:"bg-white rounded-2xl shadow-lg p-6 mb-8 border border-green-100",children:M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[M.jsxs("div",{className:"text-center",children:[M.jsx("div",{className:"text-3xl font-bold text-emerald-600",children:P}),M.jsx("div",{className:"text-gray-600",children:"Trees Owned"})]}),M.jsxs("div",{className:"text-center",children:[M.jsx("div",{className:"text-3xl font-bold text-blue-600",children:R}),M.jsx("div",{className:"text-gray-600",children:"Available"})]}),M.jsxs("div",{className:"text-center",children:[M.jsx("div",{className:"text-3xl font-bold text-purple-600",children:I}),M.jsx("div",{className:"text-gray-600",children:"Rare Trees"})]}),M.jsxs("div",{className:"text-center",children:[M.jsx("div",{className:"text-3xl font-bold text-yellow-600",children:t.toLocaleString()}),M.jsx("div",{className:"text-gray-600",children:"EcoPoints"})]})]})}),M.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:w.map(D=>M.jsx(W2,{avatar:D,isOwned:a.has(D.id),canPurchase:t>=D.price,onPurchase:()=>v(D),rarityColor:t0[D.rarity],rarityBorder:H2[D.rarity]},D.id))})]}),_&&u&&M.jsx(X2,{avatar:u,userPoints:t,isOwned:a.has(u.id),onPurchase:()=>S(u),onClose:()=>x(!1),rarityColor:t0[u.rarity]}),M.jsx("div",{className:"fixed top-20 right-4 z-50 space-y-2",children:m.map(D=>M.jsx($2,{message:D.message,type:D.type},D.id))})]})},W2=({avatar:r,isOwned:e,canPurchase:t,onPurchase:s,rarityColor:a,rarityBorder:l})=>{const u=ee.useRef(null);return ee.useEffect(()=>{if(!u.current)return;const d=new nf,h=new Vn(75,1,.1,1e3),p=new cf({alpha:!0,antialias:!0});p.setSize(200,200),p.setClearColor(0,0),u.current.appendChild(p.domElement);const x=(()=>{const E=new fs;switch(r.type){case"sprout":const S=new ft(.02,.03,.3,6),v=new Ft({color:9498256}),P=new xe(S,v);P.position.y=.15,E.add(P);for(let O=0;O<3;O++){const W=new vt(.06,6,6),ie=new Ft({color:3329330}),q=new xe(W,ie);q.position.set(Math.cos(O*2.1)*.1,.25+O*.05,Math.sin(O*2.1)*.1),E.add(q)}break;case"oak":const I=new ft(.12,.18,1.2,8),R=new Ft({color:6636321}),D=new xe(I,R);D.position.y=.6,E.add(D);const U=new vt(.6,12,12),k=new Ft({color:2263842}),z=new xe(U,k);z.position.y=1.4,z.scale.set(1.2,.8,1.2),E.add(z);for(let O=0;O<5;O++){const W=new vt(.03,6,6),ie=new Ft({color:9127187}),q=new xe(W,ie);q.position.set((Math.random()-.5)*1,1.2+Math.random()*.4,(Math.random()-.5)*1),E.add(q)}break;case"cherry":const C=new ft(.08,.12,1,8),T=new Ft({color:9127187}),F=new xe(C,T);F.position.y=.5,E.add(F);const Y=[16758465,16761035,16738740];for(let O=0;O<8;O++){const W=new vt(.15,8,8),ie=new Ft({color:Y[Math.floor(Math.random()*3)]}),q=new xe(W,ie),Re=O/8*Math.PI*2;q.position.set(Math.cos(Re)*(.3+Math.random()*.2),1+Math.random()*.3,Math.sin(Re)*(.3+Math.random()*.2)),E.add(q)}for(let O=0;O<12;O++){const W=new vt(.02,4,4),ie=new Ft({color:16758465}),q=new xe(W,ie);q.position.set((Math.random()-.5)*2,Math.random()*1.5,(Math.random()-.5)*2),E.add(q)}break;case"willow":const K=new ft(.1,.15,1,8),re=new Ft({color:9139029}),he=new xe(K,re);he.position.y=.5,E.add(he);for(let O=0;O<12;O++){const W=new ft(.01,.02,.8,4),ie=new Ft({color:10145074}),q=new xe(W,ie),Re=O/12*Math.PI*2;q.position.set(Math.cos(Re)*.3,.8,Math.sin(Re)*.3),q.rotation.z=Math.PI*.3,q.rotation.y=Re,E.add(q)}break;case"maple":const oe=new ft(.1,.14,1,8),le=new Ft({color:9127187}),G=new xe(oe,le);G.position.y=.5,E.add(G);const me=[16729344,16737095,16747520,16766720,14423100];for(let O=0;O<6;O++){const W=new vt(.2,8,8),ie=new Ft({color:me[Math.floor(Math.random()*5)]}),q=new xe(W,ie),Re=O/6*Math.PI*2;q.position.set(Math.cos(Re)*.3,1.2+Math.random()*.2,Math.sin(Re)*.3),E.add(q)}for(let O=0;O<8;O++){const W=new vt(.02,4,4),ie=new Ft({color:me[Math.floor(Math.random()*5)]}),q=new xe(W,ie);q.position.set((Math.random()-.5)*1.5,Math.random()*1,(Math.random()-.5)*1.5),E.add(q)}break;case"pine":const fe=new ft(.08,.12,1.4,8),H=new Ft({color:9127187}),ce=new xe(fe,H);ce.position.y=.7,E.add(ce);for(let O=0;O<5;O++){const W=new Li(.3-O*.04,.3,8),ie=new Ft({color:2263842}),q=new xe(W,ie);q.position.y=.8+O*.2,E.add(q)}for(let O=0;O<4;O++){const W=new Li(.03,.08,6),ie=new Ft({color:9127187}),q=new xe(W,ie);q.position.set((Math.random()-.5)*.4,1.2+Math.random()*.4,(Math.random()-.5)*.4),E.add(q)}for(let O=0;O<15;O++){const W=new vt(.015,4,4),ie=new jn({color:16766720}),q=new xe(W,ie);q.position.set((Math.random()-.5)*1,.8+Math.random()*1,(Math.random()-.5)*1),E.add(q)}break;case"eucalyptus":const ke=new ft(.1,.13,1.2,8),se=new Ft({color:16738740}),ge=new xe(ke,se);ge.position.y=.6,E.add(ge);const Ee=[16711680,16744192,16776960,65280,255,9109759];for(let O=0;O<6;O++){const W=new ft(.11,.14,.15,8),ie=new Ft({color:Ee[O]}),q=new xe(W,ie);q.position.y=.3+O*.15,E.add(q)}for(let O=0;O<10;O++){const W=new vt(.08,6,6),ie=new Ft({color:8190976}),q=new xe(W,ie),Re=O/10*Math.PI*2;q.position.set(Math.cos(Re)*.4,1.3+Math.random()*.2,Math.sin(Re)*.4),E.add(q)}for(let O=0;O<20;O++){const W=new vt(.015,4,4),ie=new jn({color:Ee[Math.floor(Math.random()*6)]}),q=new xe(W,ie);q.position.set((Math.random()-.5)*1.2,.5+Math.random()*1,(Math.random()-.5)*1.2),E.add(q)}break;case"crystal":const ye=new ft(.2,.15,.1,8),De=new Ft({color:9127187}),$e=new xe(ye,De);$e.position.y=.05,E.add($e);const Ge=new ft(.03,.05,.3,6),Nt=new Ft({color:8900331,transparent:!0,opacity:.8}),At=new xe(Ge,Nt);At.position.y=.25,E.add(At);const dt=[16738740,65535,16711935,65280,16776960];for(let O=0;O<8;O++){const W=new wo(.04),ie=new Ft({color:dt[Math.floor(Math.random()*5)],transparent:!0,opacity:.9}),q=new xe(W,ie),Re=O/8*Math.PI*2;q.position.set(Math.cos(Re)*.15,.35+Math.random()*.1,Math.sin(Re)*.15),E.add(q)}for(let O=0;O<25;O++){const W=new vt(.01,4,4),ie=new jn({color:16777215,transparent:!0,opacity:.8}),q=new xe(W,ie);q.position.set((Math.random()-.5)*.8,.2+Math.random()*.4,(Math.random()-.5)*.8),E.add(q)}break;case"phoenix":const V=new ft(.08,.12,1.5,8),Jt=new Ft({color:9127187}),pt=new xe(V,Jt);pt.position.y=.75,E.add(pt);for(let O=0;O<8;O++){const W=new ft(.01,.02,.8,4),ie=new Ft({color:16766720}),q=new xe(W,ie),Re=O/8*Math.PI*2;q.position.set(Math.cos(Re)*.1,1.5,Math.sin(Re)*.1),q.rotation.z=Math.cos(Re)*.5,q.rotation.x=Math.sin(Re)*.5,E.add(q);for(let Ne=0;Ne<6;Ne++){const Je=new vt(.03,4,4),et=new Ft({color:Ne%2===0?16729344:16766720}),Me=new xe(Je,et);Me.position.set(Math.cos(Re)*(.2+Ne*.1),1.4+Ne*.05,Math.sin(Re)*(.2+Ne*.1)),E.add(Me)}}for(let O=0;O<30;O++){const W=new vt(.02,4,4),ie=new jn({color:O%3===0?16729344:O%3===1?16747520:16766720}),q=new xe(W,ie);q.position.set((Math.random()-.5)*1.5,1+Math.random()*1,(Math.random()-.5)*1.5),E.add(q)}break;default:const ht=new ft(.1,.15,1,8),Ke=new Ft({color:9127187}),wt=new xe(ht,Ke);wt.position.y=.5,E.add(wt);const Ve=new vt(.4,10,10),N=new Ft({color:2263842}),b=new xe(Ve,N);b.position.y=1.2,E.add(b)}return E})();d.add(x);const m=new of(4210752,.6);d.add(m);const y=new af(16777215,.8);y.position.set(1,1,1),d.add(y),h.position.z=3;const w=()=>{requestAnimationFrame(w),x.rotation.y+=.01,p.render(d,h)};return w(),()=>{u.current&&p.domElement&&u.current.removeChild(p.domElement),p.dispose()}},[r]),M.jsxs("div",{className:`bg-white rounded-2xl shadow-lg border-2 ${l} overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl`,children:[M.jsxs("div",{className:`bg-gradient-to-r ${a} text-white px-4 py-2 text-center font-bold uppercase text-sm tracking-wide`,children:[r.rarity,r.rarity==="legendary"&&M.jsx(Py,{className:"inline ml-2 h-4 w-4"})]}),M.jsx("div",{className:"flex justify-center py-4 bg-gradient-to-b from-sky-100 to-green-100",children:M.jsx("div",{ref:u,className:"w-48 h-48"})}),M.jsxs("div",{className:"p-6",children:[M.jsxs("div",{className:"flex justify-between items-start mb-3",children:[M.jsx("h3",{className:"text-xl font-bold text-gray-800",children:r.name}),M.jsxs("div",{className:"text-sm text-gray-500",children:["Lv.",r.level]})]}),M.jsx("p",{className:"text-gray-600 text-sm mb-4",children:r.description}),M.jsxs("div",{className:"grid grid-cols-3 gap-2 mb-4",children:[M.jsxs("div",{className:"text-center",children:[M.jsx("div",{className:"text-xs text-gray-500",children:"Growth"}),M.jsx("div",{className:"flex justify-center",children:[...Array(5)].map((d,h)=>M.jsx(oc,{className:`h-3 w-3 ${h<r.stats.growth?"text-yellow-400 fill-current":"text-gray-300"}`},h))})]}),M.jsxs("div",{className:"text-center",children:[M.jsx("div",{className:"text-xs text-gray-500",children:"Efficiency"}),M.jsx("div",{className:"flex justify-center",children:[...Array(5)].map((d,h)=>M.jsx(oc,{className:`h-3 w-3 ${h<r.stats.efficiency?"text-green-400 fill-current":"text-gray-300"}`},h))})]}),M.jsxs("div",{className:"text-center",children:[M.jsx("div",{className:"text-xs text-gray-500",children:"Beauty"}),M.jsx("div",{className:"flex justify-center",children:[...Array(5)].map((d,h)=>M.jsx(oc,{className:`h-3 w-3 ${h<r.stats.beauty?"text-pink-400 fill-current":"text-gray-300"}`},h))})]})]}),e?M.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-3 text-center",children:[M.jsx(Ty,{className:"h-5 w-5 text-green-500 mx-auto mb-1"}),M.jsx("span",{className:"text-green-700 font-semibold",children:"Owned"})]}):M.jsx("button",{onClick:s,className:`w-full py-3 px-4 rounded-lg font-bold transition-all ${r.price===0?"bg-emerald-400 hover:bg-emerald-500 text-white shadow-lg hover:shadow-xl":t?"bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl":"bg-gray-200 text-gray-500 cursor-not-allowed"}`,children:r.price===0?"Free":`${r.price.toLocaleString()} EcoPoints`})]})]})},X2=({avatar:r,userPoints:e,isOwned:t,onPurchase:s,onClose:a,rarityColor:l})=>M.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:M.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full shadow-2xl",children:[M.jsxs("div",{className:`bg-gradient-to-r ${l} text-white p-6 rounded-t-2xl text-center`,children:[M.jsx("h2",{className:"text-2xl font-bold",children:r.name}),M.jsxs("p",{className:"opacity-90 capitalize",children:[r.rarity," Tree Avatar"]})]}),M.jsxs("div",{className:"p-6",children:[M.jsx("p",{className:"text-gray-600 mb-6",children:r.description}),M.jsxs("div",{className:"space-y-4 mb-6",children:[M.jsxs("div",{className:"flex justify-between",children:[M.jsx("span",{className:"text-gray-600",children:"Price:"}),M.jsx("span",{className:"font-bold text-emerald-600",children:r.price===0?"Free":`${r.price.toLocaleString()} EcoPoints`})]}),M.jsxs("div",{className:"flex justify-between",children:[M.jsx("span",{className:"text-gray-600",children:"Your Balance:"}),M.jsxs("span",{className:`font-bold ${e>=r.price?"text-green-600":"text-red-600"}`,children:[e.toLocaleString()," EcoPoints"]})]}),!t&&e<r.price&&M.jsxs("div",{className:"text-red-600 text-sm",children:["Need ",(r.price-e).toLocaleString()," more EcoPoints"]})]}),M.jsxs("div",{className:"flex gap-3",children:[M.jsx("button",{onClick:a,className:"flex-1 py-3 px-4 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors",children:"Cancel"}),M.jsx("button",{onClick:s,disabled:t||e<r.price,className:`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${t?"bg-green-500 text-white cursor-default":e>=r.price?"bg-emerald-500 hover:bg-emerald-600 text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:t?"Owned":"Purchase"})]})]})]})}),$2=({message:r,type:e="success"})=>{const t={success:"bg-emerald-500",error:"bg-red-500",info:"bg-blue-500"};return M.jsx("div",{className:`${t[e]} text-white px-4 py-3 rounded-lg shadow-lg max-w-sm animate-slide-in`,children:M.jsx("div",{className:"font-medium",children:r})})},n0={type:"change"},hf={type:"start"},J0={type:"end"},rc=new Cc,i0=new Ir,Y2=Math.cos(70*gM.DEG2RAD),ln=new J,Gn=2*Math.PI,Ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yd=1e-6;class ev extends nw{constructor(e,t=null){super(e,t),this.state=Ut.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:la.ROTATE,MIDDLE:la.DOLLY,RIGHT:la.PAN},this.touches={ONE:aa.ROTATE,TWO:aa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new vs,this._lastTargetPosition=new J,this._quat=new vs().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rg,this._sphericalDelta=new Rg,this._scale=1,this._panOffset=new J,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new J,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=K2.bind(this),this._onPointerDown=q2.bind(this),this._onPointerUp=Z2.bind(this),this._onContextMenu=rb.bind(this),this._onMouseWheel=eb.bind(this),this._onKeyDown=tb.bind(this),this._onTouchStart=nb.bind(this),this._onTouchMove=ib.bind(this),this._onMouseDown=Q2.bind(this),this._onMouseMove=J2.bind(this),this._interceptControlDown=sb.bind(this),this._interceptControlUp=ab.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(n0),this.update(),this.state=Ut.NONE}update(e=null){const t=this.object.position;ln.copy(t).sub(this.target),ln.applyQuaternion(this._quat),this._spherical.setFromVector3(ln),this.autoRotate&&this.state===Ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(s)&&isFinite(a)&&(s<-Math.PI?s+=Gn:s>Math.PI&&(s-=Gn),a<-Math.PI?a+=Gn:a>Math.PI&&(a-=Gn),s<=a?this._spherical.theta=Math.max(s,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+a)/2?Math.max(s,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(ln.setFromSpherical(this._spherical),ln.applyQuaternion(this._quatInverse),t.copy(this.target).add(ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=ln.length();u=this._clampDistance(d*this._scale);const h=d-u;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),l=!!h}else if(this.object.isOrthographicCamera){const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=h!==this.object.zoom;const p=new J(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),u=ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(rc.origin.copy(this.object.position),rc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rc.direction))<Y2?this.object.lookAt(this.target):(i0.setFromNormalAndCoplanarPoint(this.object.up,this.target),rc.intersectPlane(i0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Yd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yd||this._lastTargetPosition.distanceToSquared(this.target)>Yd?(this.dispatchEvent(n0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gn/60*this.autoRotateSpeed*e:Gn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ln.setFromMatrixColumn(t,0),ln.multiplyScalar(-e),this._panOffset.add(ln)}_panUp(e,t){this.screenSpacePanning===!0?ln.setFromMatrixColumn(t,1):(ln.setFromMatrixColumn(t,0),ln.crossVectors(this.object.up,ln)),ln.multiplyScalar(e),this._panOffset.add(ln)}_pan(e,t){const s=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;ln.copy(a).sub(this.target);let l=ln.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/s.clientHeight,this.object.matrix),this._panUp(2*t*l/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),a=e-s.left,l=t-s.top,u=s.width,d=s.height;this._mouse.x=a/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(s,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(s,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(s*s+a*a);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),a=.5*(e.pageX+s.x),l=.5*(e.pageY+s.y);this._rotateEnd.set(a,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),s=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(s,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),s=e.pageX-t.x,a=e.pageY-t.y,l=Math.sqrt(s*s+a*a);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new lt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function q2(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function K2(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Z2(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(J0),this.state=Ut.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Q2(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case la.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ut.DOLLY;break;case la.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ut.ROTATE}break;case la.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ut.PAN}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(hf)}function J2(r){switch(this.state){case Ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function eb(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ut.NONE||(r.preventDefault(),this.dispatchEvent(hf),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(J0))}function tb(r){this.enabled!==!1&&this._handleKeyDown(r)}function nb(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case aa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ut.TOUCH_ROTATE;break;case aa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ut.TOUCH_PAN;break;default:this.state=Ut.NONE}break;case 2:switch(this.touches.TWO){case aa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ut.TOUCH_DOLLY_PAN;break;case aa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ut.TOUCH_DOLLY_ROTATE;break;default:this.state=Ut.NONE}break;default:this.state=Ut.NONE}this.state!==Ut.NONE&&this.dispatchEvent(hf)}function ib(r){switch(this._trackPointer(r),this.state){case Ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ut.NONE}}function rb(r){this.enabled!==!1&&r.preventDefault()}function sb(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ab(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ob=({onSelect:r,onClose:e})=>{const{refreshOwnedTrees:t}=uf(),s=ee.useRef([]),a=ee.useRef([]),[l,u]=ee.useState(()=>{try{const m=Jn();return m&&Array.isArray(m.shopOwnedAvatars)?m.shopOwnedAvatars:[1]}catch{return[1]}}),h=V2().filter(m=>l.includes(m.id)),[p,_]=ee.useState(!1);ee.useEffect(()=>{const m=Jn();m&&Array.isArray(m.shopOwnedAvatars)&&u(m.shopOwnedAvatars);const y=setTimeout(()=>{const w=Jn();w&&Array.isArray(w.shopOwnedAvatars)&&u(w.shopOwnedAvatars),_(!0)},100);return()=>clearTimeout(y)},[]);const x=m=>{const y=new fs;switch(m.type){case"sprout":const w=new ft(.02,.03,.3,6),E=new nt({color:9498256}),S=new xe(w,E);S.position.y=.15,y.add(S);for(let N=0;N<3;N++){const b=new vt(.06,6,6),O=new nt({color:3329330}),W=new xe(b,O);W.position.set(Math.cos(N*2.1)*.1,.25+N*.05,Math.sin(N*2.1)*.1),y.add(W)}break;case"oak":const v=new ft(.12,.18,1.2,8),P=new nt({color:6636321}),I=new xe(v,P);I.position.y=.6,y.add(I);const R=new vt(.6,12,12),D=new nt({color:2263842}),U=new xe(R,D);U.position.y=1.4,U.scale.set(1.2,.8,1.2),y.add(U);for(let N=0;N<5;N++){const b=new vt(.03,6,6),O=new nt({color:9127187}),W=new xe(b,O);W.position.set((Math.random()-.5)*1,1.2+Math.random()*.4,(Math.random()-.5)*1),y.add(W)}break;case"cherry":const k=new ft(.08,.12,1,8),z=new nt({color:9127187}),C=new xe(k,z);C.position.y=.5,y.add(C);const T=[16758465,16761035,16738740];for(let N=0;N<8;N++){const b=new vt(.15,8,8),O=new nt({color:T[Math.floor(Math.random()*3)]}),W=new xe(b,O),ie=N/8*Math.PI*2;W.position.set(Math.cos(ie)*(.3+Math.random()*.2),1+Math.random()*.3,Math.sin(ie)*(.3+Math.random()*.2)),y.add(W)}for(let N=0;N<12;N++){const b=new vt(.02,4,4),O=new nt({color:16758465}),W=new xe(b,O);W.position.set((Math.random()-.5)*2,Math.random()*1.5,(Math.random()-.5)*2),y.add(W)}break;case"willow":const F=new ft(.1,.15,1,8),Y=new nt({color:9139029}),K=new xe(F,Y);K.position.y=.5,y.add(K);for(let N=0;N<12;N++){const b=new ft(.01,.02,.8,4),O=new nt({color:10145074}),W=new xe(b,O),ie=N/12*Math.PI*2;W.position.set(Math.cos(ie)*.3,.8,Math.sin(ie)*.3),W.rotation.z=Math.PI*.3,W.rotation.y=ie,y.add(W)}break;case"maple":const re=new ft(.1,.14,1,8),he=new nt({color:9127187}),oe=new xe(re,he);oe.position.y=.5,y.add(oe);const le=[16729344,16737095,16747520,16766720,14423100];for(let N=0;N<6;N++){const b=new vt(.2,8,8),O=new nt({color:le[Math.floor(Math.random()*5)]}),W=new xe(b,O),ie=N/6*Math.PI*2;W.position.set(Math.cos(ie)*.3,1.2+Math.random()*.2,Math.sin(ie)*.3),y.add(W)}for(let N=0;N<8;N++){const b=new vt(.02,4,4),O=new nt({color:le[Math.floor(Math.random()*5)]}),W=new xe(b,O);W.position.set((Math.random()-.5)*1.5,Math.random()*1,(Math.random()-.5)*1.5),y.add(W)}break;case"pine":const G=new ft(.08,.12,1.4,8),me=new nt({color:9127187}),fe=new xe(G,me);fe.position.y=.7,y.add(fe);for(let N=0;N<5;N++){const b=new Li(.3-N*.04,.3,8),O=new nt({color:2263842}),W=new xe(b,O);W.position.y=.8+N*.2,y.add(W)}for(let N=0;N<4;N++){const b=new Li(.03,.08,6),O=new nt({color:9127187}),W=new xe(b,O);W.position.set((Math.random()-.5)*.4,1.2+Math.random()*.4,(Math.random()-.5)*.4),y.add(W)}for(let N=0;N<15;N++){const b=new vt(.015,4,4),O=new jn({color:16766720}),W=new xe(b,O);W.position.set((Math.random()-.5)*1,.8+Math.random()*1,(Math.random()-.5)*1),y.add(W)}break;case"eucalyptus":const H=new ft(.1,.13,1.2,8),ce=new nt({color:16738740}),ke=new xe(H,ce);ke.position.y=.6,y.add(ke);const se=[16711680,16744192,16776960,65280,255,9109759];for(let N=0;N<6;N++){const b=new ft(.11,.14,.15,8),O=new nt({color:se[N]}),W=new xe(b,O);W.position.y=.3+N*.15,y.add(W)}for(let N=0;N<10;N++){const b=new vt(.08,6,6),O=new nt({color:8190976}),W=new xe(b,O),ie=N/10*Math.PI*2;W.position.set(Math.cos(ie)*.4,1.3+Math.random()*.2,Math.sin(ie)*.4),y.add(W)}for(let N=0;N<20;N++){const b=new vt(.015,4,4),O=new jn({color:se[Math.floor(Math.random()*6)]}),W=new xe(b,O);W.position.set((Math.random()-.5)*1.2,.5+Math.random()*1,(Math.random()-.5)*1.2),y.add(W)}break;case"crystal":const ge=new ft(.2,.15,.1,8),Ee=new nt({color:9127187}),ye=new xe(ge,Ee);ye.position.y=.05,y.add(ye);const De=new ft(.03,.05,.3,6),$e=new nt({color:8900331,transparent:!0,opacity:.8}),Ge=new xe(De,$e);Ge.position.y=.25,y.add(Ge);const Nt=[16738740,65535,16711935,65280,16776960];for(let N=0;N<8;N++){const b=new wo(.04),O=new nt({color:Nt[Math.floor(Math.random()*5)],transparent:!0,opacity:.9}),W=new xe(b,O),ie=N/8*Math.PI*2;W.position.set(Math.cos(ie)*.15,.35+Math.random()*.1,Math.sin(ie)*.15),y.add(W)}for(let N=0;N<25;N++){const b=new vt(.01,4,4),O=new jn({color:16777215,transparent:!0,opacity:.8}),W=new xe(b,O);W.position.set((Math.random()-.5)*.8,.2+Math.random()*.4,(Math.random()-.5)*.8),y.add(W)}break;case"phoenix":const At=new ft(.08,.12,1.5,8),dt=new nt({color:9127187}),V=new xe(At,dt);V.position.y=.75,y.add(V);for(let N=0;N<8;N++){const b=new ft(.01,.02,.8,4),O=new nt({color:16766720}),W=new xe(b,O),ie=N/8*Math.PI*2;W.position.set(Math.cos(ie)*.1,1.5,Math.sin(ie)*.1),W.rotation.z=Math.cos(ie)*.5,W.rotation.x=Math.sin(ie)*.5,y.add(W);for(let q=0;q<6;q++){const Re=new vt(.03,4,4),Ne=new nt({color:q%2===0?16729344:16766720}),Je=new xe(Re,Ne);Je.position.set(Math.cos(ie)*(.2+q*.1),1.4+q*.05,Math.sin(ie)*(.2+q*.1)),y.add(Je)}}for(let N=0;N<30;N++){const b=new vt(.02,4,4),O=new jn({color:N%3===0?16729344:N%3===1?16747520:16766720}),W=new xe(b,O);W.position.set((Math.random()-.5)*1.5,1+Math.random()*1,(Math.random()-.5)*1.5),y.add(W)}break;default:const Jt=new ft(.2,.2,1,8),pt=new nt({color:4861696}),ht=new xe(Jt,pt);ht.position.y=.5,y.add(ht);const Ke=new Li(1,2,8),wt=new nt({color:m.gardenColor||2972199}),Ve=new xe(Ke,wt);Ve.position.y=2,y.add(Ve)}return y};return ee.useEffect(()=>{if(!p||h.length===0)return;const m=()=>{a.current.forEach(y=>{if(y){const{renderer:w,controls:E,animationId:S}=y;if(S&&cancelAnimationFrame(S),E==null||E.dispose(),w){w.dispose(),w.forceContextLoss();const v=w.domElement;v&&v.parentNode&&v.parentNode.removeChild(v)}}}),a.current=[]};return m(),s.current.forEach(y=>{y&&(y.innerHTML="")}),h.forEach((y,w)=>{const E=s.current[w];if(!E)return;const S=new nf,v=new Vn(45,1,.1,1e3),P=new cf({antialias:!0,alpha:!0,preserveDrawingBuffer:!1,powerPreference:"high-performance"});P.setSize(200,200),P.setClearColor(0,0),P.setPixelRatio(Math.min(window.devicePixelRatio,2)),E.appendChild(P.domElement),v.position.set(3,3,4),v.lookAt(0,1,0);const I=new of(16777215,.6),R=new af(16777215,.8);R.position.set(5,5,5),S.add(I,R);const D=new ev(v,P.domElement);D.enableZoom=!1,D.autoRotate=!0,D.autoRotateSpeed=3,D.target.set(0,1,0),D.update();const U=x(y);U.scale.set(.8,.8,.8),U.position.y=-.5,S.add(U);let k;const z=()=>{k=requestAnimationFrame(z),D.update(),P.render(S,v)};z(),a.current[w]={renderer:P,controls:D,animationId:k}}),m},[p,h.length]),h.length===0?M.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50",children:M.jsxs("div",{className:"bg-white rounded-lg shadow-xl w-[400px] p-6",children:[M.jsxs("div",{className:"flex justify-between items-center mb-6",children:[M.jsx("h2",{className:"text-xl font-bold",children:"No Trees Available"}),M.jsx("button",{onClick:e,className:"text-gray-500 hover:text-gray-700",children:"×"})]}),M.jsxs("div",{className:"text-center py-8",children:[M.jsx("p",{className:"text-gray-600 mb-4",children:"You don't have any trees to plant yet!"}),M.jsx("p",{className:"text-sm text-gray-500",children:"Visit the shop to purchase trees with your EcoPoints."})]})]})}):M.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50",children:M.jsxs("div",{className:"bg-white rounded-lg shadow-xl w-[900px] max-h-[80vh] overflow-y-auto p-6",children:[M.jsxs("div",{className:"flex justify-between items-center mb-6",children:[M.jsx("h2",{className:"text-xl font-bold",children:"Select a Tree to Plant"}),M.jsx("button",{onClick:e,className:"text-gray-500 hover:text-gray-700",children:"×"})]}),M.jsx("div",{className:"grid grid-cols-2 gap-8",children:h.map((m,y)=>M.jsxs("button",{onClick:()=>{r(m),e()},className:"flex flex-col items-center p-6 border rounded-lg transition-colors hover:bg-green-50",children:[M.jsx("div",{ref:w=>s.current[y]=w,className:"w-[200px] h-[200px] mb-4"}),M.jsxs("div",{className:"text-center w-full mt-4",children:[M.jsx("div",{className:"font-medium text-lg mb-2",children:m.name}),M.jsx("div",{className:"text-sm text-gray-500",children:m.description}),M.jsxs("div",{className:"text-xs text-emerald-600 mt-2",children:[m.rarity.charAt(0).toUpperCase()+m.rarity.slice(1)," • Level ",m.level]})]})]},m.id))})]})})},lb=()=>{go();const r=ee.useRef(null),e=ee.useRef(new nf),t=ee.useRef(null),s=ee.useRef(null),a=ee.useRef(null),l=ee.useRef(null),[u,d]=ee.useState("plant"),[h,p]=ee.useState(null),[_,x]=ee.useState(!1),[m,y]=ee.useState([]),[w,E]=ee.useState(0),[S,v]=ee.useState(null),{refreshOwnedTrees:P}=uf();ee.useEffect(()=>{P()},[P]);const I=C=>{const T=new fs;switch(C.type){case"sprout":const F=new ft(.02,.03,.3,6),Y=new nt({color:9498256}),K=new xe(F,Y);K.position.y=.15,T.add(K);for(let _e=0;_e<3;_e++){const Te=new vt(.06,6,6),Oe=new nt({color:3329330}),be=new xe(Te,Oe);be.position.set(Math.cos(_e*2.1)*.1,.25+_e*.05,Math.sin(_e*2.1)*.1),T.add(be)}break;case"oak":const re=new ft(.12,.18,1.2,8),he=new nt({color:6636321}),oe=new xe(re,he);oe.position.y=.6,T.add(oe);const le=new vt(.6,12,12),G=new nt({color:2263842}),me=new xe(le,G);me.position.y=1.4,me.scale.set(1.2,.8,1.2),T.add(me);for(let _e=0;_e<5;_e++){const Te=new vt(.03,6,6),Oe=new nt({color:9127187}),be=new xe(Te,Oe);be.position.set((Math.random()-.5)*1,1.2+Math.random()*.4,(Math.random()-.5)*1),T.add(be)}break;case"cherry":const fe=new ft(.08,.12,1,8),H=new nt({color:9127187}),ce=new xe(fe,H);ce.position.y=.5,T.add(ce);const ke=[16758465,16761035,16738740];for(let _e=0;_e<8;_e++){const Te=new vt(.15,8,8),Oe=new nt({color:ke[Math.floor(Math.random()*3)]}),be=new xe(Te,Oe),rt=_e/8*Math.PI*2;be.position.set(Math.cos(rt)*(.3+Math.random()*.2),1+Math.random()*.3,Math.sin(rt)*(.3+Math.random()*.2)),T.add(be)}for(let _e=0;_e<12;_e++){const Te=new vt(.02,4,4),Oe=new nt({color:16758465}),be=new xe(Te,Oe);be.position.set((Math.random()-.5)*2,Math.random()*1.5,(Math.random()-.5)*2),T.add(be)}break;case"willow":const se=new ft(.1,.15,1,8),ge=new nt({color:9139029}),Ee=new xe(se,ge);Ee.position.y=.5,T.add(Ee);for(let _e=0;_e<12;_e++){const Te=new ft(.01,.02,.8,4),Oe=new nt({color:10145074}),be=new xe(Te,Oe),rt=_e/12*Math.PI*2;be.position.set(Math.cos(rt)*.3,.8,Math.sin(rt)*.3),be.rotation.z=Math.PI*.3,be.rotation.y=rt,T.add(be)}break;case"maple":const ye=new ft(.1,.14,1,8),De=new nt({color:9127187}),$e=new xe(ye,De);$e.position.y=.5,T.add($e);const Ge=[16729344,16737095,16747520,16766720,14423100];for(let _e=0;_e<6;_e++){const Te=new vt(.2,8,8),Oe=new nt({color:Ge[Math.floor(Math.random()*5)]}),be=new xe(Te,Oe),rt=_e/6*Math.PI*2;be.position.set(Math.cos(rt)*.3,1.2+Math.random()*.2,Math.sin(rt)*.3),T.add(be)}for(let _e=0;_e<8;_e++){const Te=new vt(.02,4,4),Oe=new nt({color:Ge[Math.floor(Math.random()*5)]}),be=new xe(Te,Oe);be.position.set((Math.random()-.5)*1.5,Math.random()*1,(Math.random()-.5)*1.5),T.add(be)}break;case"pine":const Nt=new ft(.08,.12,1.4,8),At=new nt({color:9127187}),dt=new xe(Nt,At);dt.position.y=.7,T.add(dt);for(let _e=0;_e<5;_e++){const Te=new Li(.3-_e*.04,.3,8),Oe=new nt({color:2263842}),be=new xe(Te,Oe);be.position.y=.8+_e*.2,T.add(be)}for(let _e=0;_e<4;_e++){const Te=new Li(.03,.08,6),Oe=new nt({color:9127187}),be=new xe(Te,Oe);be.position.set((Math.random()-.5)*.4,1.2+Math.random()*.4,(Math.random()-.5)*.4),T.add(be)}for(let _e=0;_e<15;_e++){const Te=new vt(.015,4,4),Oe=new jn({color:16766720}),be=new xe(Te,Oe);be.position.set((Math.random()-.5)*1,.8+Math.random()*1,(Math.random()-.5)*1),T.add(be)}break;case"eucalyptus":const V=new ft(.1,.13,1.2,8),Jt=new nt({color:16738740}),pt=new xe(V,Jt);pt.position.y=.6,T.add(pt);const ht=[16711680,16744192,16776960,65280,255,9109759];for(let _e=0;_e<6;_e++){const Te=new ft(.11,.14,.15,8),Oe=new nt({color:ht[_e]}),be=new xe(Te,Oe);be.position.y=.3+_e*.15,T.add(be)}for(let _e=0;_e<10;_e++){const Te=new vt(.08,6,6),Oe=new nt({color:8190976}),be=new xe(Te,Oe),rt=_e/10*Math.PI*2;be.position.set(Math.cos(rt)*.4,1.3+Math.random()*.2,Math.sin(rt)*.4),T.add(be)}for(let _e=0;_e<20;_e++){const Te=new vt(.015,4,4),Oe=new jn({color:ht[Math.floor(Math.random()*6)]}),be=new xe(Te,Oe);be.position.set((Math.random()-.5)*1.2,.5+Math.random()*1,(Math.random()-.5)*1.2),T.add(be)}break;case"crystal":const Ke=new ft(.2,.15,.1,8),wt=new nt({color:9127187}),Ve=new xe(Ke,wt);Ve.position.y=.05,T.add(Ve);const N=new ft(.03,.05,.3,6),b=new nt({color:8900331,transparent:!0,opacity:.8}),O=new xe(N,b);O.position.y=.25,T.add(O);const W=[16738740,65535,16711935,65280,16776960];for(let _e=0;_e<8;_e++){const Te=new wo(.04),Oe=new nt({color:W[Math.floor(Math.random()*5)],transparent:!0,opacity:.9}),be=new xe(Te,Oe),rt=_e/8*Math.PI*2;be.position.set(Math.cos(rt)*.15,.35+Math.random()*.1,Math.sin(rt)*.15),T.add(be)}for(let _e=0;_e<25;_e++){const Te=new vt(.01,4,4),Oe=new jn({color:16777215,transparent:!0,opacity:.8}),be=new xe(Te,Oe);be.position.set((Math.random()-.5)*.8,.2+Math.random()*.4,(Math.random()-.5)*.8),T.add(be)}break;case"phoenix":const ie=new ft(.08,.12,1.5,8),q=new nt({color:9127187}),Re=new xe(ie,q);Re.position.y=.75,T.add(Re);for(let _e=0;_e<8;_e++){const Te=new ft(.01,.02,.8,4),Oe=new nt({color:16766720}),be=new xe(Te,Oe),rt=_e/8*Math.PI*2;be.position.set(Math.cos(rt)*.1,1.5,Math.sin(rt)*.1),be.rotation.z=Math.cos(rt)*.5,be.rotation.x=Math.sin(rt)*.5,T.add(be);for(let X=0;X<6;X++){const Le=new vt(.03,4,4),pe=new nt({color:X%2===0?16729344:16766720}),ve=new xe(Le,pe);ve.position.set(Math.cos(rt)*(.2+X*.1),1.4+X*.05,Math.sin(rt)*(.2+X*.1)),T.add(ve)}}for(let _e=0;_e<30;_e++){const Te=new vt(.02,4,4),Oe=new jn({color:_e%3===0?16729344:_e%3===1?16747520:16766720}),be=new xe(Te,Oe);be.position.set((Math.random()-.5)*1.5,1+Math.random()*1,(Math.random()-.5)*1.5),T.add(be)}break;default:const Ne=new ft(.2,.2,1,8),Je=new nt({color:4861696}),et=new xe(Ne,Je);et.position.y=.5,T.add(et);const Me=new Li(1,2,8),je=new nt({color:C.gardenColor||2972199}),it=new xe(Me,je);it.position.y=2,T.add(it)}return T},R=C=>{const T=m.find(F=>F.id===C);T&&(e.current.remove(T.mesh),T.mesh.traverse(F=>{F instanceof xe&&(F.geometry.dispose(),F.material.dispose())}),y(F=>F.filter(Y=>Y.id!==C)),E(F=>Math.max(F-1,0)))};ee.useEffect(()=>{if(!r.current)return;s.current=new Vn(75,window.innerWidth/window.innerHeight,.1,1e3),s.current.position.set(5,5,5),s.current.lookAt(0,0,0),t.current=new cf({antialias:!0,powerPreference:"high-performance"}),t.current.setSize(window.innerWidth,window.innerHeight),t.current.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.current.shadowMap.enabled=!0,r.current.appendChild(t.current.domElement),a.current=new ev(s.current,t.current.domElement),a.current.enableDamping=!0,a.current.dampingFactor=.05,a.current.maxPolarAngle=Math.PI/2;const C=new Eo(20,20,40,40),T=new qM({color:8191114,side:Ri}),F=new xe(C,T);F.rotation.x=-Math.PI/2,F.receiveShadow=!0,F.name="ground",e.current.add(F);const Y=new tw(20,20);e.current.add(Y);const K=new of(16777215,.5);e.current.add(K);const re=new af(16777215,.8);re.position.set(5,5,5),re.castShadow=!0,re.shadow.mapSize.width=1024,re.shadow.mapSize.height=1024,e.current.add(re);const he=()=>{l.current=requestAnimationFrame(he),a.current&&a.current.update(),t.current&&s.current&&t.current.render(e.current,s.current)};he();const oe=()=>{!s.current||!t.current||(s.current.aspect=window.innerWidth/window.innerHeight,s.current.updateProjectionMatrix(),t.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",oe),()=>{var le;window.removeEventListener("resize",oe),l.current&&cancelAnimationFrame(l.current),a.current&&a.current.dispose(),t.current&&(t.current.dispose(),t.current.forceContextLoss(),(le=r.current)==null||le.removeChild(t.current.domElement)),e.current.traverse(G=>{G instanceof xe&&(G.geometry.dispose(),G.material.dispose())})}},[]);const D=C=>{if(u!=="plant"||!h)return;const T=t.current.domElement.getBoundingClientRect(),F=new lt((C.clientX-T.left)/T.width*2-1,-((C.clientY-T.top)/T.height)*2+1),Y=new Ag;Y.setFromCamera(F,s.current);const K=e.current.getObjectByName("ground"),re=Y.intersectObject(K);if(re.length>0){const he=re[0].point,oe=1;if(!m.some(G=>new lt(G.position.x,G.position.z).distanceTo(new lt(he.x,he.z))<oe)){const G=I(h);G.position.set(he.x,0,he.z),G.castShadow=!0,G.receiveShadow=!0,G.userData={isTree:!0,treeId:Date.now(),treeType:h.id},e.current.add(G);const me={id:G.userData.treeId,type:h,position:he,mesh:G};y(fe=>[...fe,me]),E(fe=>fe+1)}}},U=C=>{if(u!=="delete")return;const T=t.current.domElement.getBoundingClientRect(),F=new lt((C.clientX-T.left)/T.width*2-1,-((C.clientY-T.top)/T.height)*2+1),Y=new Ag;Y.setFromCamera(F,s.current);const K=m.map(he=>he.mesh),re=Y.intersectObjects(K,!0);if(re.length>0){const he=re[0].object,oe=m.find(le=>le.mesh===he||le.mesh.children.includes(he));oe&&R(oe.id)}},k=C=>{const T=C.map(F=>({typeId:F.type.id,position:{x:F.position.x,y:F.position.y,z:F.position.z}}));localStorage.setItem("ecoplay_garden",JSON.stringify(T))},z=()=>{const C=localStorage.getItem("ecoplay_garden");if(C)try{const T=JSON.parse(C);m.forEach(Y=>{e.current.remove(Y.mesh),Y.mesh.traverse(K=>{K instanceof xe&&(K.geometry.dispose(),K.material.dispose())})});const F=[];T.forEach(Y=>{const K=G2(Y.typeId);if(K){const re=I(K);re.position.set(Y.position.x,Y.position.y,Y.position.z),re.castShadow=!0,re.receiveShadow=!0,re.userData={isTree:!0,treeId:Date.now()+Math.random(),treeType:Y.typeId},e.current.add(re),F.push({id:re.userData.treeId,type:K,position:{...Y.position},mesh:re})}}),y(F),E(F.length)}catch(T){console.error("Error loading garden:",T)}};return ee.useEffect(()=>{z();const C=()=>{document.visibilityState==="visible"&&z()};return document.addEventListener("visibilitychange",C),()=>{document.removeEventListener("visibilitychange",C)}},[]),ee.useEffect(()=>{k(m)},[m]),ee.useEffect(()=>{var F;const C=(F=t.current)==null?void 0:F.domElement;if(!C)return;const T=Y=>{u==="plant"?D(Y):u==="delete"&&U(Y)};return C.addEventListener("click",T),()=>C.removeEventListener("click",T)},[u,h]),M.jsxs("div",{className:"relative h-screen",children:[M.jsx("div",{ref:r,className:"w-full h-full"}),M.jsxs(Pi,{to:"/dashboard",className:"absolute top-4 left-4 bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg flex items-center gap-2",children:[M.jsx(Wh,{size:20}),"Back to Menu"]}),M.jsxs("div",{className:"absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4",children:[M.jsx("h3",{className:"font-semibold text-gray-800",children:"Trees Planted"}),M.jsx("p",{className:"text-2xl font-bold text-green-600",children:w})]}),M.jsxs("div",{className:"absolute top-20 left-4 z-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4",children:[M.jsx("h3",{className:"font-semibold text-gray-800 mb-3",children:"Garden Tools"}),M.jsxs("div",{className:"flex flex-col gap-2",children:[M.jsxs("button",{onClick:()=>{d("plant"),x(!0)},className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${u==="plant"?"bg-green-600 text-white":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`,children:[M.jsx(S0,{size:18}),"Plant Tree"]}),M.jsxs("button",{onClick:()=>d("delete"),className:`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${u==="delete"?"bg-red-600 text-white":"bg-gray-100 hover:bg-gray-200 text-gray-700"}`,children:[M.jsx(Qy,{size:18}),"Remove Tree"]})]})]}),_&&M.jsx(ob,{onSelect:C=>{p(C),d("plant"),x(!1)},onClose:()=>x(!1)})]})};H_.createRoot(document.getElementById("root")).render(M.jsx(ee.StrictMode,{children:M.jsx(z2,{children:M.jsx(ny,{children:M.jsxs(Dx,{children:[M.jsx(sa,{path:"/",element:M.jsx(uS,{})}),M.jsx(sa,{path:"/dashboard",element:M.jsx(ES,{})}),M.jsx(sa,{path:"/stats",element:M.jsx(TS,{})}),M.jsx(sa,{path:"/shop",element:M.jsx(j2,{})}),M.jsx(sa,{path:"/garden",element:M.jsx(lb,{})})]})})})}));
