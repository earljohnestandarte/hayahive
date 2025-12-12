(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var gu={exports:{}},Ra={},vu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function $x(){if(bp)return gt;bp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.iterator;function _(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function y(F,re,De){this.props=F,this.context=re,this.refs=A,this.updater=De||M}y.prototype.isReactComponent={},y.prototype.setState=function(F,re){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,re,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function v(){}v.prototype=y.prototype;function U(F,re,De){this.props=F,this.context=re,this.refs=A,this.updater=De||M}var P=U.prototype=new v;P.constructor=U,w(P,y.prototype),P.isPureReactComponent=!0;var I=Array.isArray,H=Object.prototype.hasOwnProperty,L={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function Q(F,re,De){var Pe,He={},Z=null,ue=null;if(re!=null)for(Pe in re.ref!==void 0&&(ue=re.ref),re.key!==void 0&&(Z=""+re.key),re)H.call(re,Pe)&&!V.hasOwnProperty(Pe)&&(He[Pe]=re[Pe]);var Se=arguments.length-2;if(Se===1)He.children=De;else if(1<Se){for(var Fe=Array(Se),Oe=0;Oe<Se;Oe++)Fe[Oe]=arguments[Oe+2];He.children=Fe}if(F&&F.defaultProps)for(Pe in Se=F.defaultProps,Se)He[Pe]===void 0&&(He[Pe]=Se[Pe]);return{$$typeof:s,type:F,key:Z,ref:ue,props:He,_owner:L.current}}function R(F,re){return{$$typeof:s,type:F.type,key:re,ref:F.ref,props:F.props,_owner:F._owner}}function C(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function G(F){var re={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(De){return re[De]})}var J=/\/+/g;function ne(F,re){return typeof F=="object"&&F!==null&&F.key!=null?G(""+F.key):re.toString(36)}function le(F,re,De,Pe,He){var Z=typeof F;(Z==="undefined"||Z==="boolean")&&(F=null);var ue=!1;if(F===null)ue=!0;else switch(Z){case"string":case"number":ue=!0;break;case"object":switch(F.$$typeof){case s:case e:ue=!0}}if(ue)return ue=F,He=He(ue),F=Pe===""?"."+ne(ue,0):Pe,I(He)?(De="",F!=null&&(De=F.replace(J,"$&/")+"/"),le(He,re,De,"",function(Oe){return Oe})):He!=null&&(C(He)&&(He=R(He,De+(!He.key||ue&&ue.key===He.key?"":(""+He.key).replace(J,"$&/")+"/")+F)),re.push(He)),1;if(ue=0,Pe=Pe===""?".":Pe+":",I(F))for(var Se=0;Se<F.length;Se++){Z=F[Se];var Fe=Pe+ne(Z,Se);ue+=le(Z,re,De,Fe,He)}else if(Fe=_(F),typeof Fe=="function")for(F=Fe.call(F),Se=0;!(Z=F.next()).done;)Z=Z.value,Fe=Pe+ne(Z,Se++),ue+=le(Z,re,De,Fe,He);else if(Z==="object")throw re=String(F),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ue}function ae(F,re,De){if(F==null)return F;var Pe=[],He=0;return le(F,Pe,"","",function(Z){return re.call(De,Z,He++)}),Pe}function de(F){if(F._status===-1){var re=F._result;re=re(),re.then(function(De){(F._status===0||F._status===-1)&&(F._status=1,F._result=De)},function(De){(F._status===0||F._status===-1)&&(F._status=2,F._result=De)}),F._status===-1&&(F._status=0,F._result=re)}if(F._status===1)return F._result.default;throw F._result}var fe={current:null},z={transition:null},se={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:z,ReactCurrentOwner:L};function te(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:ae,forEach:function(F,re,De){ae(F,function(){re.apply(this,arguments)},De)},count:function(F){var re=0;return ae(F,function(){re++}),re},toArray:function(F){return ae(F,function(re){return re})||[]},only:function(F){if(!C(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},gt.Component=y,gt.Fragment=n,gt.Profiler=o,gt.PureComponent=U,gt.StrictMode=r,gt.Suspense=m,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,gt.act=te,gt.cloneElement=function(F,re,De){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Pe=w({},F.props),He=F.key,Z=F.ref,ue=F._owner;if(re!=null){if(re.ref!==void 0&&(Z=re.ref,ue=L.current),re.key!==void 0&&(He=""+re.key),F.type&&F.type.defaultProps)var Se=F.type.defaultProps;for(Fe in re)H.call(re,Fe)&&!V.hasOwnProperty(Fe)&&(Pe[Fe]=re[Fe]===void 0&&Se!==void 0?Se[Fe]:re[Fe])}var Fe=arguments.length-2;if(Fe===1)Pe.children=De;else if(1<Fe){Se=Array(Fe);for(var Oe=0;Oe<Fe;Oe++)Se[Oe]=arguments[Oe+2];Pe.children=Se}return{$$typeof:s,type:F.type,key:He,ref:Z,props:Pe,_owner:ue}},gt.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:c,_context:F},F.Consumer=F},gt.createElement=Q,gt.createFactory=function(F){var re=Q.bind(null,F);return re.type=F,re},gt.createRef=function(){return{current:null}},gt.forwardRef=function(F){return{$$typeof:f,render:F}},gt.isValidElement=C,gt.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:de}},gt.memo=function(F,re){return{$$typeof:h,type:F,compare:re===void 0?null:re}},gt.startTransition=function(F){var re=z.transition;z.transition={};try{F()}finally{z.transition=re}},gt.unstable_act=te,gt.useCallback=function(F,re){return fe.current.useCallback(F,re)},gt.useContext=function(F){return fe.current.useContext(F)},gt.useDebugValue=function(){},gt.useDeferredValue=function(F){return fe.current.useDeferredValue(F)},gt.useEffect=function(F,re){return fe.current.useEffect(F,re)},gt.useId=function(){return fe.current.useId()},gt.useImperativeHandle=function(F,re,De){return fe.current.useImperativeHandle(F,re,De)},gt.useInsertionEffect=function(F,re){return fe.current.useInsertionEffect(F,re)},gt.useLayoutEffect=function(F,re){return fe.current.useLayoutEffect(F,re)},gt.useMemo=function(F,re){return fe.current.useMemo(F,re)},gt.useReducer=function(F,re,De){return fe.current.useReducer(F,re,De)},gt.useRef=function(F){return fe.current.useRef(F)},gt.useState=function(F){return fe.current.useState(F)},gt.useSyncExternalStore=function(F,re,De){return fe.current.useSyncExternalStore(F,re,De)},gt.useTransition=function(){return fe.current.useTransition()},gt.version="18.3.1",gt}var wp;function Hd(){return wp||(wp=1,vu.exports=$x()),vu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function Kx(){if(Tp)return Ra;Tp=1;var s=Hd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,m,h){var x,g={},_=null,M=null;h!==void 0&&(_=""+h),m.key!==void 0&&(_=""+m.key),m.ref!==void 0&&(M=m.ref);for(x in m)r.call(m,x)&&!c.hasOwnProperty(x)&&(g[x]=m[x]);if(f&&f.defaultProps)for(x in m=f.defaultProps,m)g[x]===void 0&&(g[x]=m[x]);return{$$typeof:e,type:f,key:_,ref:M,props:g,_owner:o.current}}return Ra.Fragment=n,Ra.jsx=d,Ra.jsxs=d,Ra}var Ap;function Zx(){return Ap||(Ap=1,gu.exports=Kx()),gu.exports}var S=Zx(),il={},_u={exports:{}},Ln={},yu={exports:{}},Su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function Qx(){return Cp||(Cp=1,(function(s){function e(z,se){var te=z.length;z.push(se);e:for(;0<te;){var F=te-1>>>1,re=z[F];if(0<o(re,se))z[F]=se,z[te]=re,te=F;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var se=z[0],te=z.pop();if(te!==se){z[0]=te;e:for(var F=0,re=z.length,De=re>>>1;F<De;){var Pe=2*(F+1)-1,He=z[Pe],Z=Pe+1,ue=z[Z];if(0>o(He,te))Z<re&&0>o(ue,He)?(z[F]=ue,z[Z]=te,F=Z):(z[F]=He,z[Pe]=te,F=Pe);else if(Z<re&&0>o(ue,te))z[F]=ue,z[Z]=te,F=Z;else break e}}return se}function o(z,se){var te=z.sortIndex-se.sortIndex;return te!==0?te:z.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var m=[],h=[],x=1,g=null,_=3,M=!1,w=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(z){for(var se=n(h);se!==null;){if(se.callback===null)r(h);else if(se.startTime<=z)r(h),se.sortIndex=se.expirationTime,e(m,se);else break;se=n(h)}}function I(z){if(A=!1,P(z),!w)if(n(m)!==null)w=!0,de(H);else{var se=n(h);se!==null&&fe(I,se.startTime-z)}}function H(z,se){w=!1,A&&(A=!1,v(Q),Q=-1),M=!0;var te=_;try{for(P(se),g=n(m);g!==null&&(!(g.expirationTime>se)||z&&!G());){var F=g.callback;if(typeof F=="function"){g.callback=null,_=g.priorityLevel;var re=F(g.expirationTime<=se);se=s.unstable_now(),typeof re=="function"?g.callback=re:g===n(m)&&r(m),P(se)}else r(m);g=n(m)}if(g!==null)var De=!0;else{var Pe=n(h);Pe!==null&&fe(I,Pe.startTime-se),De=!1}return De}finally{g=null,_=te,M=!1}}var L=!1,V=null,Q=-1,R=5,C=-1;function G(){return!(s.unstable_now()-C<R)}function J(){if(V!==null){var z=s.unstable_now();C=z;var se=!0;try{se=V(!0,z)}finally{se?ne():(L=!1,V=null)}}else L=!1}var ne;if(typeof U=="function")ne=function(){U(J)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ae=le.port2;le.port1.onmessage=J,ne=function(){ae.postMessage(null)}}else ne=function(){y(J,0)};function de(z){V=z,L||(L=!0,ne())}function fe(z,se){Q=y(function(){z(s.unstable_now())},se)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){w||M||(w=!0,de(H))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return n(m)},s.unstable_next=function(z){switch(_){case 1:case 2:case 3:var se=3;break;default:se=_}var te=_;_=se;try{return z()}finally{_=te}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,se){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var te=_;_=z;try{return se()}finally{_=te}},s.unstable_scheduleCallback=function(z,se,te){var F=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?F+te:F):te=F,z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=te+re,z={id:x++,callback:se,priorityLevel:z,startTime:te,expirationTime:re,sortIndex:-1},te>F?(z.sortIndex=te,e(h,z),n(m)===null&&z===n(h)&&(A?(v(Q),Q=-1):A=!0,fe(I,te-F))):(z.sortIndex=re,e(m,z),w||M||(w=!0,de(H))),z},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(z){var se=_;return function(){var te=_;_=se;try{return z.apply(this,arguments)}finally{_=te}}}})(Su)),Su}var Rp;function Jx(){return Rp||(Rp=1,yu.exports=Qx()),yu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function eg(){if(Np)return Ln;Np=1;var s=Hd(),e=Jx();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},g={};function _(t){return m.call(g,t)?!0:m.call(x,t)?!1:h.test(t)?g[t]=!0:(x[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,a,l,u,p,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,U);y[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,U);y[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,U);y[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,a,l){var u=y.hasOwnProperty(i)?y[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,u,l)&&(a=null),l||u===null?_(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):u.mustUseProperty?t[u.propertyName]=a===null?u.type===3?!1:"":a:(i=u.attributeName,l=u.attributeNamespace,a===null?t.removeAttribute(i):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var I=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),L=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),G=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),z=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var te=Object.assign,F;function re(t){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+t}var De=!1;function Pe(t,i){if(!t||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var l=ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(ee){l=ee}t.call(i.prototype)}else{try{throw Error()}catch(ee){l=ee}t()}}catch(ee){if(ee&&l&&typeof ee.stack=="string"){for(var u=ee.stack.split(`
`),p=l.stack.split(`
`),E=u.length-1,D=p.length-1;1<=E&&0<=D&&u[E]!==p[D];)D--;for(;1<=E&&0<=D;E--,D--)if(u[E]!==p[D]){if(E!==1||D!==1)do if(E--,D--,0>D||u[E]!==p[D]){var k=`
`+u[E].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=E&&0<=D);break}}}finally{De=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?re(t):""}function He(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=Pe(t.type,!1),t;case 11:return t=Pe(t.type.render,!1),t;case 1:return t=Pe(t.type,!0),t;default:return""}}function Z(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case L:return"Portal";case R:return"Profiler";case Q:return"StrictMode";case ne:return"Suspense";case le:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case G:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case J:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ae:return i=t.displayName||null,i!==null?i:Z(t.type)||"Memo";case de:i=t._payload,t=t._init;try{return Z(t(i))}catch{}}return null}function ue(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(i);case 8:return i===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Se(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Oe(t){var i=Fe(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(E){l=""+E,p.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ft(t){t._valueTracker||(t._valueTracker=Oe(t))}function $t(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Fe(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function dt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nt(t,i){var a=i.checked;return te({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function O(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=Se(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function xt(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function pt(t,i){xt(t,i);var a=Se(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ke(t,i.type,a):i.hasOwnProperty("defaultValue")&&ke(t,i.type,Se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Tt(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function ke(t,i,a){(i!=="number"||dt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var At=Array.isArray;function Xe(t,i,a,l){if(t=t.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=i.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Se(a),i=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function at(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return te({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function N(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(At(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:Se(a)}}function b(t,i){var a=Se(i.value),l=Se(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function $(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oe,qe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(oe=oe||document.createElement("div"),oe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=oe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ae(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ye=["Webkit","ms","Moz","O"];Object.keys(Ke).forEach(function(t){Ye.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ke[i]=Ke[t]})});function ve(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ke.hasOwnProperty(t)&&Ke[t]?(""+i).trim():i+"px"}function Te(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,u=ve(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,u):t[a]=u}}var it=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(t,i){if(i){if(it[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Le(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rt=null;function B(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ce=null,Ee=null,be=null;function ye(t){if(t=pa(t)){if(typeof Ce!="function")throw Error(n(280));var i=t.stateNode;i&&(i=vo(i),Ce(t.stateNode,t.type,i))}}function pe(t){Ee?be?be.push(t):be=[t]:Ee=t}function ze(){if(Ee){var t=Ee,i=be;if(be=Ee=null,ye(t),i)for(t=0;t<i.length;t++)ye(i[t])}}function ot(t,i){return t(i)}function Pt(){}var St=!1;function Un(t,i,a){if(St)return t(i,a);St=!0;try{return ot(t,i,a)}finally{St=!1,(Ee!==null||be!==null)&&(Pt(),ze())}}function un(t,i){var a=t.stateNode;if(a===null)return null;var l=vo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Ks=!1;if(f)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){Ks=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{Ks=!1}function $a(t,i,a,l,u,p,E,D,k){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(a,ee)}catch(ge){this.onError(ge)}}var In=!1,Yi=null,Tr=!1,Zr=null,Qr={onError:function(t){In=!0,Yi=t}};function Ka(t,i,a,l,u,p,E,D,k){In=!1,Yi=null,$a.apply(Qr,arguments)}function Jr(t,i,a,l,u,p,E,D,k){if(Ka.apply(this,arguments),In){if(In){var ee=Yi;In=!1,Yi=null}else throw Error(n(198));Tr||(Tr=!0,Zr=ee)}}function di(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Zs(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Za(t){if(di(t)!==t)throw Error(n(188))}function zl(t){var i=t.alternate;if(!i){if(i=di(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var u=a.return;if(u===null)break;var p=u.alternate;if(p===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===a)return Za(u),t;if(p===l)return Za(u),i;p=p.sibling}throw Error(n(188))}if(a.return!==l.return)a=u,l=p;else{for(var E=!1,D=u.child;D;){if(D===a){E=!0,a=u,l=p;break}if(D===l){E=!0,l=u,a=p;break}D=D.sibling}if(!E){for(D=p.child;D;){if(D===a){E=!0,a=p,l=u;break}if(D===l){E=!0,l=p,a=u;break}D=D.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function Qa(t){return t=zl(t),t!==null?Ja(t):null}function Ja(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Ja(t);if(i!==null)return i;t=t.sibling}return null}var eo=e.unstable_scheduleCallback,to=e.unstable_cancelCallback,T=e.unstable_shouldYield,j=e.unstable_requestPaint,q=e.unstable_now,ie=e.unstable_getCurrentPriorityLevel,X=e.unstable_ImmediatePriority,we=e.unstable_UserBlockingPriority,Re=e.unstable_NormalPriority,Ge=e.unstable_LowPriority,Ie=e.unstable_IdlePriority,et=null,$e=null;function Qe(t){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(et,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:Vt,wt=Math.log,zt=Math.LN2;function Vt(t){return t>>>=0,t===0?32:31-(wt(t)/zt|0)|0}var Mt=64,Ze=4194304;function Ct(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vt(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,u=t.suspendedLanes,p=t.pingedLanes,E=a&268435455;if(E!==0){var D=E&~u;D!==0?l=Ct(D):(p&=E,p!==0&&(l=Ct(p)))}else E=a&~u,E!==0?l=Ct(E):p!==0&&(l=Ct(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,p=i&-i,u>=p||u===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-st(i),u=1<<a,l|=t[a],i&=~u;return l}function Sn(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qi(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,p=t.pendingLanes;0<p;){var E=31-st(p),D=1<<E,k=u[E];k===-1?((D&a)===0||(D&l)!==0)&&(u[E]=Sn(D,i)):k<=i&&(t.expiredLanes|=D),p&=~D}}function dn(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $i(){var t=Mt;return Mt<<=1,(Mt&4194240)===0&&(Mt=64),t}function It(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Kt(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-st(i),t[i]=a}function Tn(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var u=31-st(a),p=1<<u;i[u]=0,l[u]=-1,t[u]=-1,a&=~p}}function Jt(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-st(a),u=1<<l;u&i|t[l]&i&&(t[l]|=i),a&=~u}}var ct=0;function es(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var fi,Vl,rf,sf,af,Hl=!1,no=[],Ki=null,Zi=null,Qi=null,Qs=new Map,Js=new Map,Ji=[],g0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function of(t,i){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":Qs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(i.pointerId)}}function ea(t,i,a,l,u,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:p,targetContainers:[u]},i!==null&&(i=pa(i),i!==null&&Vl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function v0(t,i,a,l,u){switch(i){case"focusin":return Ki=ea(Ki,t,i,a,l,u),!0;case"dragenter":return Zi=ea(Zi,t,i,a,l,u),!0;case"mouseover":return Qi=ea(Qi,t,i,a,l,u),!0;case"pointerover":var p=u.pointerId;return Qs.set(p,ea(Qs.get(p)||null,t,i,a,l,u)),!0;case"gotpointercapture":return p=u.pointerId,Js.set(p,ea(Js.get(p)||null,t,i,a,l,u)),!0}return!1}function lf(t){var i=Ar(t.target);if(i!==null){var a=di(i);if(a!==null){if(i=a.tag,i===13){if(i=Zs(a),i!==null){t.blockedOn=i,af(t.priority,function(){rf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function io(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Wl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);rt=l,a.target.dispatchEvent(l),rt=null}else return i=pa(a),i!==null&&Vl(i),t.blockedOn=a,!1;i.shift()}return!0}function cf(t,i,a){io(t)&&a.delete(i)}function _0(){Hl=!1,Ki!==null&&io(Ki)&&(Ki=null),Zi!==null&&io(Zi)&&(Zi=null),Qi!==null&&io(Qi)&&(Qi=null),Qs.forEach(cf),Js.forEach(cf)}function ta(t,i){t.blockedOn===i&&(t.blockedOn=null,Hl||(Hl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,_0)))}function na(t){function i(u){return ta(u,t)}if(0<no.length){ta(no[0],t);for(var a=1;a<no.length;a++){var l=no[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Ki!==null&&ta(Ki,t),Zi!==null&&ta(Zi,t),Qi!==null&&ta(Qi,t),Qs.forEach(i),Js.forEach(i),a=0;a<Ji.length;a++)l=Ji[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Ji.length&&(a=Ji[0],a.blockedOn===null);)lf(a),a.blockedOn===null&&Ji.shift()}var ts=I.ReactCurrentBatchConfig,ro=!0;function y0(t,i,a,l){var u=ct,p=ts.transition;ts.transition=null;try{ct=1,Gl(t,i,a,l)}finally{ct=u,ts.transition=p}}function S0(t,i,a,l){var u=ct,p=ts.transition;ts.transition=null;try{ct=4,Gl(t,i,a,l)}finally{ct=u,ts.transition=p}}function Gl(t,i,a,l){if(ro){var u=Wl(t,i,a,l);if(u===null)oc(t,i,l,so,a),of(t,l);else if(v0(u,t,i,a,l))l.stopPropagation();else if(of(t,l),i&4&&-1<g0.indexOf(t)){for(;u!==null;){var p=pa(u);if(p!==null&&fi(p),p=Wl(t,i,a,l),p===null&&oc(t,i,l,so,a),p===u)break;u=p}u!==null&&l.stopPropagation()}else oc(t,i,l,null,a)}}var so=null;function Wl(t,i,a,l){if(so=null,t=B(l),t=Ar(t),t!==null)if(i=di(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Zs(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return so=t,null}function uf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ie()){case X:return 1;case we:return 4;case Re:case Ge:return 16;case Ie:return 536870912;default:return 16}default:return 16}}var er=null,jl=null,ao=null;function df(){if(ao)return ao;var t,i=jl,a=i.length,l,u="value"in er?er.value:er.textContent,p=u.length;for(t=0;t<a&&i[t]===u[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===u[p-l];l++);return ao=u.slice(t,1<l?1-l:void 0)}function oo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function ff(){return!1}function Fn(t){function i(a,l,u,p,E){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(a=t[D],this[D]=a?a(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?lo:ff,this.isPropagationStopped=ff,this}return te(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),i}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Fn(ns),ia=te({},ns,{view:0,detail:0}),M0=Fn(ia),Yl,ql,ra,co=te({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ra&&(ra&&t.type==="mousemove"?(Yl=t.screenX-ra.screenX,ql=t.screenY-ra.screenY):ql=Yl=0,ra=t),Yl)},movementY:function(t){return"movementY"in t?t.movementY:ql}}),hf=Fn(co),E0=te({},co,{dataTransfer:0}),b0=Fn(E0),w0=te({},ia,{relatedTarget:0}),$l=Fn(w0),T0=te({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),A0=Fn(T0),C0=te({},ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),R0=Fn(C0),N0=te({},ns,{data:0}),pf=Fn(N0),P0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=D0[t])?!!i[t]:!1}function Kl(){return U0}var I0=te({},ia,{key:function(t){if(t.key){var i=P0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?L0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kl,charCode:function(t){return t.type==="keypress"?oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),F0=Fn(I0),O0=te({},co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mf=Fn(O0),B0=te({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kl}),k0=Fn(B0),z0=te({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),V0=Fn(z0),H0=te({},co,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),G0=Fn(H0),W0=[9,13,27,32],Zl=f&&"CompositionEvent"in window,sa=null;f&&"documentMode"in document&&(sa=document.documentMode);var j0=f&&"TextEvent"in window&&!sa,xf=f&&(!Zl||sa&&8<sa&&11>=sa),gf=" ",vf=!1;function _f(t,i){switch(t){case"keyup":return W0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function X0(t,i){switch(t){case"compositionend":return yf(i);case"keypress":return i.which!==32?null:(vf=!0,gf);case"textInput":return t=i.data,t===gf&&vf?null:t;default:return null}}function Y0(t,i){if(is)return t==="compositionend"||!Zl&&_f(t,i)?(t=df(),ao=jl=er=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return xf&&i.locale!=="ko"?null:i.data;default:return null}}var q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!q0[t.type]:i==="textarea"}function Mf(t,i,a,l){pe(l),i=mo(i,"onChange"),0<i.length&&(a=new Xl("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var aa=null,oa=null;function $0(t){zf(t,0)}function uo(t){var i=ls(t);if($t(i))return t}function K0(t,i){if(t==="change")return i}var Ef=!1;if(f){var Ql;if(f){var Jl="oninput"in document;if(!Jl){var bf=document.createElement("div");bf.setAttribute("oninput","return;"),Jl=typeof bf.oninput=="function"}Ql=Jl}else Ql=!1;Ef=Ql&&(!document.documentMode||9<document.documentMode)}function wf(){aa&&(aa.detachEvent("onpropertychange",Tf),oa=aa=null)}function Tf(t){if(t.propertyName==="value"&&uo(oa)){var i=[];Mf(i,oa,t,B(t)),Un($0,i)}}function Z0(t,i,a){t==="focusin"?(wf(),aa=i,oa=a,aa.attachEvent("onpropertychange",Tf)):t==="focusout"&&wf()}function Q0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uo(oa)}function J0(t,i){if(t==="click")return uo(i)}function ex(t,i){if(t==="input"||t==="change")return uo(i)}function tx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ei=typeof Object.is=="function"?Object.is:tx;function la(t,i){if(ei(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!m.call(i,u)||!ei(t[u],i[u]))return!1}return!0}function Af(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cf(t,i){var a=Af(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Af(a)}}function Rf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Rf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Nf(){for(var t=window,i=dt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=dt(t.document)}return i}function ec(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function nx(t){var i=Nf(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Rf(a.ownerDocument.documentElement,a)){if(l!==null&&ec(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=a.textContent.length,p=Math.min(l.start,u);l=l.end===void 0?p:Math.min(l.end,u),!t.extend&&p>l&&(u=l,l=p,p=u),u=Cf(a,p);var E=Cf(a,l);u&&E&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ix=f&&"documentMode"in document&&11>=document.documentMode,rs=null,tc=null,ca=null,nc=!1;function Pf(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nc||rs==null||rs!==dt(l)||(l=rs,"selectionStart"in l&&ec(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ca&&la(ca,l)||(ca=l,l=mo(tc,"onSelect"),0<l.length&&(i=new Xl("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=rs)))}function fo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ss={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},ic={},Lf={};f&&(Lf=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function ho(t){if(ic[t])return ic[t];if(!ss[t])return t;var i=ss[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Lf)return ic[t]=i[a];return t}var Df=ho("animationend"),Uf=ho("animationiteration"),If=ho("animationstart"),Ff=ho("transitionend"),Of=new Map,Bf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(t,i){Of.set(t,i),c(i,[t])}for(var rc=0;rc<Bf.length;rc++){var sc=Bf[rc],rx=sc.toLowerCase(),sx=sc[0].toUpperCase()+sc.slice(1);tr(rx,"on"+sx)}tr(Df,"onAnimationEnd"),tr(Uf,"onAnimationIteration"),tr(If,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(Ff,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function kf(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,Jr(l,i,void 0,t),t.currentTarget=null}function zf(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],u=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var E=l.length-1;0<=E;E--){var D=l[E],k=D.instance,ee=D.currentTarget;if(D=D.listener,k!==p&&u.isPropagationStopped())break e;kf(u,D,ee),p=k}else for(E=0;E<l.length;E++){if(D=l[E],k=D.instance,ee=D.currentTarget,D=D.listener,k!==p&&u.isPropagationStopped())break e;kf(u,D,ee),p=k}}}if(Tr)throw t=Zr,Tr=!1,Zr=null,t}function Bt(t,i){var a=i[hc];a===void 0&&(a=i[hc]=new Set);var l=t+"__bubble";a.has(l)||(Vf(i,t,2,!1),a.add(l))}function ac(t,i,a){var l=0;i&&(l|=4),Vf(a,t,l,i)}var po="_reactListening"+Math.random().toString(36).slice(2);function da(t){if(!t[po]){t[po]=!0,r.forEach(function(a){a!=="selectionchange"&&(ax.has(a)||ac(a,!1,t),ac(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[po]||(i[po]=!0,ac("selectionchange",!1,i))}}function Vf(t,i,a,l){switch(uf(i)){case 1:var u=y0;break;case 4:u=S0;break;default:u=Gl}a=u.bind(null,i,a,t),u=void 0,!Ks||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,a,{capture:!0,passive:u}):t.addEventListener(i,a,!0):u!==void 0?t.addEventListener(i,a,{passive:u}):t.addEventListener(i,a,!1)}function oc(t,i,a,l,u){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var D=l.stateNode.containerInfo;if(D===u||D.nodeType===8&&D.parentNode===u)break;if(E===4)for(E=l.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===u||k.nodeType===8&&k.parentNode===u))return;E=E.return}for(;D!==null;){if(E=Ar(D),E===null)return;if(k=E.tag,k===5||k===6){l=p=E;continue e}D=D.parentNode}}l=l.return}Un(function(){var ee=p,ge=B(a),_e=[];e:{var xe=Of.get(t);if(xe!==void 0){var Ue=Xl,Ve=t;switch(t){case"keypress":if(oo(a)===0)break e;case"keydown":case"keyup":Ue=F0;break;case"focusin":Ve="focus",Ue=$l;break;case"focusout":Ve="blur",Ue=$l;break;case"beforeblur":case"afterblur":Ue=$l;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=b0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=k0;break;case Df:case Uf:case If:Ue=A0;break;case Ff:Ue=V0;break;case"scroll":Ue=M0;break;case"wheel":Ue=G0;break;case"copy":case"cut":case"paste":Ue=R0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=mf}var We=(i&4)!==0,Xt=!We&&t==="scroll",Y=We?xe!==null?xe+"Capture":null:xe;We=[];for(var W=ee,K;W!==null;){K=W;var Me=K.stateNode;if(K.tag===5&&Me!==null&&(K=Me,Y!==null&&(Me=un(W,Y),Me!=null&&We.push(fa(W,Me,K)))),Xt)break;W=W.return}0<We.length&&(xe=new Ue(xe,Ve,null,a,ge),_e.push({event:xe,listeners:We}))}}if((i&7)===0){e:{if(xe=t==="mouseover"||t==="pointerover",Ue=t==="mouseout"||t==="pointerout",xe&&a!==rt&&(Ve=a.relatedTarget||a.fromElement)&&(Ar(Ve)||Ve[Si]))break e;if((Ue||xe)&&(xe=ge.window===ge?ge:(xe=ge.ownerDocument)?xe.defaultView||xe.parentWindow:window,Ue?(Ve=a.relatedTarget||a.toElement,Ue=ee,Ve=Ve?Ar(Ve):null,Ve!==null&&(Xt=di(Ve),Ve!==Xt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Ue=null,Ve=ee),Ue!==Ve)){if(We=hf,Me="onMouseLeave",Y="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(We=mf,Me="onPointerLeave",Y="onPointerEnter",W="pointer"),Xt=Ue==null?xe:ls(Ue),K=Ve==null?xe:ls(Ve),xe=new We(Me,W+"leave",Ue,a,ge),xe.target=Xt,xe.relatedTarget=K,Me=null,Ar(ge)===ee&&(We=new We(Y,W+"enter",Ve,a,ge),We.target=K,We.relatedTarget=Xt,Me=We),Xt=Me,Ue&&Ve)t:{for(We=Ue,Y=Ve,W=0,K=We;K;K=as(K))W++;for(K=0,Me=Y;Me;Me=as(Me))K++;for(;0<W-K;)We=as(We),W--;for(;0<K-W;)Y=as(Y),K--;for(;W--;){if(We===Y||Y!==null&&We===Y.alternate)break t;We=as(We),Y=as(Y)}We=null}else We=null;Ue!==null&&Hf(_e,xe,Ue,We,!1),Ve!==null&&Xt!==null&&Hf(_e,Xt,Ve,We,!0)}}e:{if(xe=ee?ls(ee):window,Ue=xe.nodeName&&xe.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&xe.type==="file")var je=K0;else if(Sf(xe))if(Ef)je=ex;else{je=Q0;var tt=Z0}else(Ue=xe.nodeName)&&Ue.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(je=J0);if(je&&(je=je(t,ee))){Mf(_e,je,a,ge);break e}tt&&tt(t,xe,ee),t==="focusout"&&(tt=xe._wrapperState)&&tt.controlled&&xe.type==="number"&&ke(xe,"number",xe.value)}switch(tt=ee?ls(ee):window,t){case"focusin":(Sf(tt)||tt.contentEditable==="true")&&(rs=tt,tc=ee,ca=null);break;case"focusout":ca=tc=rs=null;break;case"mousedown":nc=!0;break;case"contextmenu":case"mouseup":case"dragend":nc=!1,Pf(_e,a,ge);break;case"selectionchange":if(ix)break;case"keydown":case"keyup":Pf(_e,a,ge)}var nt;if(Zl)e:{switch(t){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else is?_f(t,a)&&(lt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(lt="onCompositionStart");lt&&(xf&&a.locale!=="ko"&&(is||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&is&&(nt=df()):(er=ge,jl="value"in er?er.value:er.textContent,is=!0)),tt=mo(ee,lt),0<tt.length&&(lt=new pf(lt,t,null,a,ge),_e.push({event:lt,listeners:tt}),nt?lt.data=nt:(nt=yf(a),nt!==null&&(lt.data=nt)))),(nt=j0?X0(t,a):Y0(t,a))&&(ee=mo(ee,"onBeforeInput"),0<ee.length&&(ge=new pf("onBeforeInput","beforeinput",null,a,ge),_e.push({event:ge,listeners:ee}),ge.data=nt))}zf(_e,i)})}function fa(t,i,a){return{instance:t,listener:i,currentTarget:a}}function mo(t,i){for(var a=i+"Capture",l=[];t!==null;){var u=t,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=un(t,a),p!=null&&l.unshift(fa(t,p,u)),p=un(t,i),p!=null&&l.push(fa(t,p,u))),t=t.return}return l}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hf(t,i,a,l,u){for(var p=i._reactName,E=[];a!==null&&a!==l;){var D=a,k=D.alternate,ee=D.stateNode;if(k!==null&&k===l)break;D.tag===5&&ee!==null&&(D=ee,u?(k=un(a,p),k!=null&&E.unshift(fa(a,k,D))):u||(k=un(a,p),k!=null&&E.push(fa(a,k,D)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var ox=/\r\n?/g,lx=/\u0000|\uFFFD/g;function Gf(t){return(typeof t=="string"?t:""+t).replace(ox,`
`).replace(lx,"")}function xo(t,i,a){if(i=Gf(i),Gf(t)!==i&&a)throw Error(n(425))}function go(){}var lc=null,cc=null;function uc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var dc=typeof setTimeout=="function"?setTimeout:void 0,cx=typeof clearTimeout=="function"?clearTimeout:void 0,Wf=typeof Promise=="function"?Promise:void 0,ux=typeof queueMicrotask=="function"?queueMicrotask:typeof Wf<"u"?function(t){return Wf.resolve(null).then(t).catch(dx)}:dc;function dx(t){setTimeout(function(){throw t})}function fc(t,i){var a=i,l=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(l===0){t.removeChild(u),na(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=u}while(a);na(i)}function nr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function jf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),hi="__reactFiber$"+os,ha="__reactProps$"+os,Si="__reactContainer$"+os,hc="__reactEvents$"+os,fx="__reactListeners$"+os,hx="__reactHandles$"+os;function Ar(t){var i=t[hi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Si]||a[hi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=jf(t);t!==null;){if(a=t[hi])return a;t=jf(t)}return i}t=a,a=t.parentNode}return null}function pa(t){return t=t[hi]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function vo(t){return t[ha]||null}var pc=[],cs=-1;function ir(t){return{current:t}}function kt(t){0>cs||(t.current=pc[cs],pc[cs]=null,cs--)}function Ot(t,i){cs++,pc[cs]=t.current,t.current=i}var rr={},pn=ir(rr),An=ir(!1),Cr=rr;function us(t,i){var a=t.type.contextTypes;if(!a)return rr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in a)u[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function Cn(t){return t=t.childContextTypes,t!=null}function _o(){kt(An),kt(pn)}function Xf(t,i,a){if(pn.current!==rr)throw Error(n(168));Ot(pn,i),Ot(An,a)}function Yf(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,ue(t)||"Unknown",u));return te({},a,l)}function yo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||rr,Cr=pn.current,Ot(pn,t),Ot(An,An.current),!0}function qf(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=Yf(t,i,Cr),l.__reactInternalMemoizedMergedChildContext=t,kt(An),kt(pn),Ot(pn,t)):kt(An),Ot(An,a)}var Mi=null,So=!1,mc=!1;function $f(t){Mi===null?Mi=[t]:Mi.push(t)}function px(t){So=!0,$f(t)}function sr(){if(!mc&&Mi!==null){mc=!0;var t=0,i=ct;try{var a=Mi;for(ct=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Mi=null,So=!1}catch(u){throw Mi!==null&&(Mi=Mi.slice(t+1)),eo(X,sr),u}finally{ct=i,mc=!1}}return null}var ds=[],fs=0,Mo=null,Eo=0,jn=[],Xn=0,Rr=null,Ei=1,bi="";function Nr(t,i){ds[fs++]=Eo,ds[fs++]=Mo,Mo=t,Eo=i}function Kf(t,i,a){jn[Xn++]=Ei,jn[Xn++]=bi,jn[Xn++]=Rr,Rr=t;var l=Ei;t=bi;var u=32-st(l)-1;l&=~(1<<u),a+=1;var p=32-st(i)+u;if(30<p){var E=u-u%5;p=(l&(1<<E)-1).toString(32),l>>=E,u-=E,Ei=1<<32-st(i)+u|a<<u|l,bi=p+t}else Ei=1<<p|a<<u|l,bi=t}function xc(t){t.return!==null&&(Nr(t,1),Kf(t,1,0))}function gc(t){for(;t===Mo;)Mo=ds[--fs],ds[fs]=null,Eo=ds[--fs],ds[fs]=null;for(;t===Rr;)Rr=jn[--Xn],jn[Xn]=null,bi=jn[--Xn],jn[Xn]=null,Ei=jn[--Xn],jn[Xn]=null}var On=null,Bn=null,Ht=!1,ti=null;function Zf(t,i){var a=Kn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function Qf(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,On=t,Bn=nr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,On=t,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Rr!==null?{id:Ei,overflow:bi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Kn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,On=t,Bn=null,!0):!1;default:return!1}}function vc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _c(t){if(Ht){var i=Bn;if(i){var a=i;if(!Qf(t,i)){if(vc(t))throw Error(n(418));i=nr(a.nextSibling);var l=On;i&&Qf(t,i)?Zf(l,a):(t.flags=t.flags&-4097|2,Ht=!1,On=t)}}else{if(vc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ht=!1,On=t}}}function Jf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function bo(t){if(t!==On)return!1;if(!Ht)return Jf(t),Ht=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!uc(t.type,t.memoizedProps)),i&&(i=Bn)){if(vc(t))throw eh(),Error(n(418));for(;i;)Zf(t,i),i=nr(i.nextSibling)}if(Jf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Bn=nr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Bn=null}}else Bn=On?nr(t.stateNode.nextSibling):null;return!0}function eh(){for(var t=Bn;t;)t=nr(t.nextSibling)}function hs(){Bn=On=null,Ht=!1}function yc(t){ti===null?ti=[t]:ti.push(t)}var mx=I.ReactCurrentBatchConfig;function ma(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var u=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(E){var D=u.refs;E===null?delete D[p]:D[p]=E},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function wo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function th(t){var i=t._init;return i(t._payload)}function nh(t){function i(Y,W){if(t){var K=Y.deletions;K===null?(Y.deletions=[W],Y.flags|=16):K.push(W)}}function a(Y,W){if(!t)return null;for(;W!==null;)i(Y,W),W=W.sibling;return null}function l(Y,W){for(Y=new Map;W!==null;)W.key!==null?Y.set(W.key,W):Y.set(W.index,W),W=W.sibling;return Y}function u(Y,W){return Y=hr(Y,W),Y.index=0,Y.sibling=null,Y}function p(Y,W,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<W?(Y.flags|=2,W):K):(Y.flags|=2,W)):(Y.flags|=1048576,W)}function E(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function D(Y,W,K,Me){return W===null||W.tag!==6?(W=du(K,Y.mode,Me),W.return=Y,W):(W=u(W,K),W.return=Y,W)}function k(Y,W,K,Me){var je=K.type;return je===V?ge(Y,W,K.props.children,Me,K.key):W!==null&&(W.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===de&&th(je)===W.type)?(Me=u(W,K.props),Me.ref=ma(Y,W,K),Me.return=Y,Me):(Me=$o(K.type,K.key,K.props,null,Y.mode,Me),Me.ref=ma(Y,W,K),Me.return=Y,Me)}function ee(Y,W,K,Me){return W===null||W.tag!==4||W.stateNode.containerInfo!==K.containerInfo||W.stateNode.implementation!==K.implementation?(W=fu(K,Y.mode,Me),W.return=Y,W):(W=u(W,K.children||[]),W.return=Y,W)}function ge(Y,W,K,Me,je){return W===null||W.tag!==7?(W=Br(K,Y.mode,Me,je),W.return=Y,W):(W=u(W,K),W.return=Y,W)}function _e(Y,W,K){if(typeof W=="string"&&W!==""||typeof W=="number")return W=du(""+W,Y.mode,K),W.return=Y,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case H:return K=$o(W.type,W.key,W.props,null,Y.mode,K),K.ref=ma(Y,null,W),K.return=Y,K;case L:return W=fu(W,Y.mode,K),W.return=Y,W;case de:var Me=W._init;return _e(Y,Me(W._payload),K)}if(At(W)||se(W))return W=Br(W,Y.mode,K,null),W.return=Y,W;wo(Y,W)}return null}function xe(Y,W,K,Me){var je=W!==null?W.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return je!==null?null:D(Y,W,""+K,Me);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case H:return K.key===je?k(Y,W,K,Me):null;case L:return K.key===je?ee(Y,W,K,Me):null;case de:return je=K._init,xe(Y,W,je(K._payload),Me)}if(At(K)||se(K))return je!==null?null:ge(Y,W,K,Me,null);wo(Y,K)}return null}function Ue(Y,W,K,Me,je){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return Y=Y.get(K)||null,D(W,Y,""+Me,je);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case H:return Y=Y.get(Me.key===null?K:Me.key)||null,k(W,Y,Me,je);case L:return Y=Y.get(Me.key===null?K:Me.key)||null,ee(W,Y,Me,je);case de:var tt=Me._init;return Ue(Y,W,K,tt(Me._payload),je)}if(At(Me)||se(Me))return Y=Y.get(K)||null,ge(W,Y,Me,je,null);wo(W,Me)}return null}function Ve(Y,W,K,Me){for(var je=null,tt=null,nt=W,lt=W=0,ln=null;nt!==null&&lt<K.length;lt++){nt.index>lt?(ln=nt,nt=null):ln=nt.sibling;var Et=xe(Y,nt,K[lt],Me);if(Et===null){nt===null&&(nt=ln);break}t&&nt&&Et.alternate===null&&i(Y,nt),W=p(Et,W,lt),tt===null?je=Et:tt.sibling=Et,tt=Et,nt=ln}if(lt===K.length)return a(Y,nt),Ht&&Nr(Y,lt),je;if(nt===null){for(;lt<K.length;lt++)nt=_e(Y,K[lt],Me),nt!==null&&(W=p(nt,W,lt),tt===null?je=nt:tt.sibling=nt,tt=nt);return Ht&&Nr(Y,lt),je}for(nt=l(Y,nt);lt<K.length;lt++)ln=Ue(nt,Y,lt,K[lt],Me),ln!==null&&(t&&ln.alternate!==null&&nt.delete(ln.key===null?lt:ln.key),W=p(ln,W,lt),tt===null?je=ln:tt.sibling=ln,tt=ln);return t&&nt.forEach(function(pr){return i(Y,pr)}),Ht&&Nr(Y,lt),je}function We(Y,W,K,Me){var je=se(K);if(typeof je!="function")throw Error(n(150));if(K=je.call(K),K==null)throw Error(n(151));for(var tt=je=null,nt=W,lt=W=0,ln=null,Et=K.next();nt!==null&&!Et.done;lt++,Et=K.next()){nt.index>lt?(ln=nt,nt=null):ln=nt.sibling;var pr=xe(Y,nt,Et.value,Me);if(pr===null){nt===null&&(nt=ln);break}t&&nt&&pr.alternate===null&&i(Y,nt),W=p(pr,W,lt),tt===null?je=pr:tt.sibling=pr,tt=pr,nt=ln}if(Et.done)return a(Y,nt),Ht&&Nr(Y,lt),je;if(nt===null){for(;!Et.done;lt++,Et=K.next())Et=_e(Y,Et.value,Me),Et!==null&&(W=p(Et,W,lt),tt===null?je=Et:tt.sibling=Et,tt=Et);return Ht&&Nr(Y,lt),je}for(nt=l(Y,nt);!Et.done;lt++,Et=K.next())Et=Ue(nt,Y,lt,Et.value,Me),Et!==null&&(t&&Et.alternate!==null&&nt.delete(Et.key===null?lt:Et.key),W=p(Et,W,lt),tt===null?je=Et:tt.sibling=Et,tt=Et);return t&&nt.forEach(function(qx){return i(Y,qx)}),Ht&&Nr(Y,lt),je}function Xt(Y,W,K,Me){if(typeof K=="object"&&K!==null&&K.type===V&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case H:e:{for(var je=K.key,tt=W;tt!==null;){if(tt.key===je){if(je=K.type,je===V){if(tt.tag===7){a(Y,tt.sibling),W=u(tt,K.props.children),W.return=Y,Y=W;break e}}else if(tt.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===de&&th(je)===tt.type){a(Y,tt.sibling),W=u(tt,K.props),W.ref=ma(Y,tt,K),W.return=Y,Y=W;break e}a(Y,tt);break}else i(Y,tt);tt=tt.sibling}K.type===V?(W=Br(K.props.children,Y.mode,Me,K.key),W.return=Y,Y=W):(Me=$o(K.type,K.key,K.props,null,Y.mode,Me),Me.ref=ma(Y,W,K),Me.return=Y,Y=Me)}return E(Y);case L:e:{for(tt=K.key;W!==null;){if(W.key===tt)if(W.tag===4&&W.stateNode.containerInfo===K.containerInfo&&W.stateNode.implementation===K.implementation){a(Y,W.sibling),W=u(W,K.children||[]),W.return=Y,Y=W;break e}else{a(Y,W);break}else i(Y,W);W=W.sibling}W=fu(K,Y.mode,Me),W.return=Y,Y=W}return E(Y);case de:return tt=K._init,Xt(Y,W,tt(K._payload),Me)}if(At(K))return Ve(Y,W,K,Me);if(se(K))return We(Y,W,K,Me);wo(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,W!==null&&W.tag===6?(a(Y,W.sibling),W=u(W,K),W.return=Y,Y=W):(a(Y,W),W=du(K,Y.mode,Me),W.return=Y,Y=W),E(Y)):a(Y,W)}return Xt}var ps=nh(!0),ih=nh(!1),To=ir(null),Ao=null,ms=null,Sc=null;function Mc(){Sc=ms=Ao=null}function Ec(t){var i=To.current;kt(To),t._currentValue=i}function bc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function xs(t,i){Ao=t,Sc=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Rn=!0),t.firstContext=null)}function Yn(t){var i=t._currentValue;if(Sc!==t)if(t={context:t,memoizedValue:i,next:null},ms===null){if(Ao===null)throw Error(n(308));ms=t,Ao.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return i}var Pr=null;function wc(t){Pr===null?Pr=[t]:Pr.push(t)}function rh(t,i,a,l){var u=i.interleaved;return u===null?(a.next=a,wc(i)):(a.next=u.next,u.next=a),i.interleaved=a,wi(t,l)}function wi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var ar=!1;function Tc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function or(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(yt&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,wi(t,a)}return u=l.interleaved,u===null?(i.next=i,wc(l)):(i.next=u.next,u.next=i),l.interleaved=i,wi(t,a)}function Co(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Jt(t,a)}}function ah(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?u=p=E:p=p.next=E,a=a.next}while(a!==null);p===null?u=p=i:p=p.next=i}else u=p=i;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Ro(t,i,a,l){var u=t.updateQueue;ar=!1;var p=u.firstBaseUpdate,E=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var k=D,ee=k.next;k.next=null,E===null?p=ee:E.next=ee,E=k;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,D=ge.lastBaseUpdate,D!==E&&(D===null?ge.firstBaseUpdate=ee:D.next=ee,ge.lastBaseUpdate=k))}if(p!==null){var _e=u.baseState;E=0,ge=ee=k=null,D=p;do{var xe=D.lane,Ue=D.eventTime;if((l&xe)===xe){ge!==null&&(ge=ge.next={eventTime:Ue,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var Ve=t,We=D;switch(xe=i,Ue=a,We.tag){case 1:if(Ve=We.payload,typeof Ve=="function"){_e=Ve.call(Ue,_e,xe);break e}_e=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=We.payload,xe=typeof Ve=="function"?Ve.call(Ue,_e,xe):Ve,xe==null)break e;_e=te({},_e,xe);break e;case 2:ar=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,xe=u.effects,xe===null?u.effects=[D]:xe.push(D))}else Ue={eventTime:Ue,lane:xe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ge===null?(ee=ge=Ue,k=_e):ge=ge.next=Ue,E|=xe;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;xe=D,D=xe.next,xe.next=null,u.lastBaseUpdate=xe,u.shared.pending=null}}while(!0);if(ge===null&&(k=_e),u.baseState=k,u.firstBaseUpdate=ee,u.lastBaseUpdate=ge,i=u.shared.interleaved,i!==null){u=i;do E|=u.lane,u=u.next;while(u!==i)}else p===null&&(u.shared.lanes=0);Ur|=E,t.lanes=E,t.memoizedState=_e}}function oh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=a,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var xa={},pi=ir(xa),ga=ir(xa),va=ir(xa);function Lr(t){if(t===xa)throw Error(n(174));return t}function Ac(t,i){switch(Ot(va,i),Ot(ga,t),Ot(pi,xa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=me(i,t)}kt(pi),Ot(pi,i)}function gs(){kt(pi),kt(ga),kt(va)}function lh(t){Lr(va.current);var i=Lr(pi.current),a=me(i,t.type);i!==a&&(Ot(ga,t),Ot(pi,a))}function Cc(t){ga.current===t&&(kt(pi),kt(ga))}var Gt=ir(0);function No(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Rc=[];function Nc(){for(var t=0;t<Rc.length;t++)Rc[t]._workInProgressVersionPrimary=null;Rc.length=0}var Po=I.ReactCurrentDispatcher,Pc=I.ReactCurrentBatchConfig,Dr=0,Wt=null,en=null,an=null,Lo=!1,_a=!1,ya=0,xx=0;function mn(){throw Error(n(321))}function Lc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ei(t[a],i[a]))return!1;return!0}function Dc(t,i,a,l,u,p){if(Dr=p,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Po.current=t===null||t.memoizedState===null?yx:Sx,t=a(l,u),_a){p=0;do{if(_a=!1,ya=0,25<=p)throw Error(n(301));p+=1,an=en=null,i.updateQueue=null,Po.current=Mx,t=a(l,u)}while(_a)}if(Po.current=Io,i=en!==null&&en.next!==null,Dr=0,an=en=Wt=null,Lo=!1,i)throw Error(n(300));return t}function Uc(){var t=ya!==0;return ya=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?Wt.memoizedState=an=t:an=an.next=t,an}function qn(){if(en===null){var t=Wt.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var i=an===null?Wt.memoizedState:an.next;if(i!==null)an=i,en=t;else{if(t===null)throw Error(n(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},an===null?Wt.memoizedState=an=t:an=an.next=t}return an}function Sa(t,i){return typeof i=="function"?i(t):i}function Ic(t){var i=qn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=en,u=l.baseQueue,p=a.pending;if(p!==null){if(u!==null){var E=u.next;u.next=p.next,p.next=E}l.baseQueue=u=p,a.pending=null}if(u!==null){p=u.next,l=l.baseState;var D=E=null,k=null,ee=p;do{var ge=ee.lane;if((Dr&ge)===ge)k!==null&&(k=k.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),l=ee.hasEagerState?ee.eagerState:t(l,ee.action);else{var _e={lane:ge,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};k===null?(D=k=_e,E=l):k=k.next=_e,Wt.lanes|=ge,Ur|=ge}ee=ee.next}while(ee!==null&&ee!==p);k===null?E=l:k.next=D,ei(l,i.memoizedState)||(Rn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=k,a.lastRenderedState=l}if(t=a.interleaved,t!==null){u=t;do p=u.lane,Wt.lanes|=p,Ur|=p,u=u.next;while(u!==t)}else u===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Fc(t){var i=qn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,u=a.pending,p=i.memoizedState;if(u!==null){a.pending=null;var E=u=u.next;do p=t(p,E.action),E=E.next;while(E!==u);ei(p,i.memoizedState)||(Rn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,l]}function ch(){}function uh(t,i){var a=Wt,l=qn(),u=i(),p=!ei(l.memoizedState,u);if(p&&(l.memoizedState=u,Rn=!0),l=l.queue,Oc(hh.bind(null,a,l,t),[t]),l.getSnapshot!==i||p||an!==null&&an.memoizedState.tag&1){if(a.flags|=2048,Ma(9,fh.bind(null,a,l,u,i),void 0,null),on===null)throw Error(n(349));(Dr&30)!==0||dh(a,i,u)}return u}function dh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function fh(t,i,a,l){i.value=a,i.getSnapshot=l,ph(i)&&mh(t)}function hh(t,i,a){return a(function(){ph(i)&&mh(t)})}function ph(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ei(t,a)}catch{return!0}}function mh(t){var i=wi(t,1);i!==null&&si(i,t,1,-1)}function xh(t){var i=mi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},i.queue=t,t=t.dispatch=_x.bind(null,Wt,t),[i.memoizedState,t]}function Ma(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function gh(){return qn().memoizedState}function Do(t,i,a,l){var u=mi();Wt.flags|=t,u.memoizedState=Ma(1|i,a,void 0,l===void 0?null:l)}function Uo(t,i,a,l){var u=qn();l=l===void 0?null:l;var p=void 0;if(en!==null){var E=en.memoizedState;if(p=E.destroy,l!==null&&Lc(l,E.deps)){u.memoizedState=Ma(i,a,p,l);return}}Wt.flags|=t,u.memoizedState=Ma(1|i,a,p,l)}function vh(t,i){return Do(8390656,8,t,i)}function Oc(t,i){return Uo(2048,8,t,i)}function _h(t,i){return Uo(4,2,t,i)}function yh(t,i){return Uo(4,4,t,i)}function Sh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Mh(t,i,a){return a=a!=null?a.concat([t]):null,Uo(4,4,Sh.bind(null,i,t),a)}function Bc(){}function Eh(t,i){var a=qn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Lc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function bh(t,i){var a=qn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Lc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function wh(t,i,a){return(Dr&21)===0?(t.baseState&&(t.baseState=!1,Rn=!0),t.memoizedState=a):(ei(a,i)||(a=$i(),Wt.lanes|=a,Ur|=a,t.baseState=!0),i)}function gx(t,i){var a=ct;ct=a!==0&&4>a?a:4,t(!0);var l=Pc.transition;Pc.transition={};try{t(!1),i()}finally{ct=a,Pc.transition=l}}function Th(){return qn().memoizedState}function vx(t,i,a){var l=dr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Ah(t))Ch(i,a);else if(a=rh(t,i,a,l),a!==null){var u=En();si(a,t,l,u),Rh(a,i,l)}}function _x(t,i,a){var l=dr(t),u={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ah(t))Ch(i,u);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var E=i.lastRenderedState,D=p(E,a);if(u.hasEagerState=!0,u.eagerState=D,ei(D,E)){var k=i.interleaved;k===null?(u.next=u,wc(i)):(u.next=k.next,k.next=u),i.interleaved=u;return}}catch{}finally{}a=rh(t,i,u,l),a!==null&&(u=En(),si(a,t,l,u),Rh(a,i,l))}}function Ah(t){var i=t.alternate;return t===Wt||i!==null&&i===Wt}function Ch(t,i){_a=Lo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Rh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Jt(t,a)}}var Io={readContext:Yn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},yx={readContext:Yn,useCallback:function(t,i){return mi().memoizedState=[t,i===void 0?null:i],t},useContext:Yn,useEffect:vh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Do(4194308,4,Sh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Do(4194308,4,t,i)},useInsertionEffect:function(t,i){return Do(4,2,t,i)},useMemo:function(t,i){var a=mi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=mi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=vx.bind(null,Wt,t),[l.memoizedState,t]},useRef:function(t){var i=mi();return t={current:t},i.memoizedState=t},useState:xh,useDebugValue:Bc,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=xh(!1),i=t[0];return t=gx.bind(null,t[1]),mi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=Wt,u=mi();if(Ht){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),on===null)throw Error(n(349));(Dr&30)!==0||dh(l,i,a)}u.memoizedState=a;var p={value:a,getSnapshot:i};return u.queue=p,vh(hh.bind(null,l,p,t),[t]),l.flags|=2048,Ma(9,fh.bind(null,l,p,a,i),void 0,null),a},useId:function(){var t=mi(),i=on.identifierPrefix;if(Ht){var a=bi,l=Ei;a=(l&~(1<<32-st(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=ya++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=xx++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Sx={readContext:Yn,useCallback:Eh,useContext:Yn,useEffect:Oc,useImperativeHandle:Mh,useInsertionEffect:_h,useLayoutEffect:yh,useMemo:bh,useReducer:Ic,useRef:gh,useState:function(){return Ic(Sa)},useDebugValue:Bc,useDeferredValue:function(t){var i=qn();return wh(i,en.memoizedState,t)},useTransition:function(){var t=Ic(Sa)[0],i=qn().memoizedState;return[t,i]},useMutableSource:ch,useSyncExternalStore:uh,useId:Th,unstable_isNewReconciler:!1},Mx={readContext:Yn,useCallback:Eh,useContext:Yn,useEffect:Oc,useImperativeHandle:Mh,useInsertionEffect:_h,useLayoutEffect:yh,useMemo:bh,useReducer:Fc,useRef:gh,useState:function(){return Fc(Sa)},useDebugValue:Bc,useDeferredValue:function(t){var i=qn();return en===null?i.memoizedState=t:wh(i,en.memoizedState,t)},useTransition:function(){var t=Fc(Sa)[0],i=qn().memoizedState;return[t,i]},useMutableSource:ch,useSyncExternalStore:uh,useId:Th,unstable_isNewReconciler:!1};function ni(t,i){if(t&&t.defaultProps){i=te({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function kc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:te({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Fo={isMounted:function(t){return(t=t._reactInternals)?di(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=En(),u=dr(t),p=Ti(l,u);p.payload=i,a!=null&&(p.callback=a),i=or(t,p,u),i!==null&&(si(i,t,u,l),Co(i,t,u))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=En(),u=dr(t),p=Ti(l,u);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=or(t,p,u),i!==null&&(si(i,t,u,l),Co(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=En(),l=dr(t),u=Ti(a,l);u.tag=2,i!=null&&(u.callback=i),i=or(t,u,l),i!==null&&(si(i,t,l,a),Co(i,t,l))}};function Nh(t,i,a,l,u,p,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,E):i.prototype&&i.prototype.isPureReactComponent?!la(a,l)||!la(u,p):!0}function Ph(t,i,a){var l=!1,u=rr,p=i.contextType;return typeof p=="object"&&p!==null?p=Yn(p):(u=Cn(i)?Cr:pn.current,l=i.contextTypes,p=(l=l!=null)?us(t,u):rr),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=p),i}function Lh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Fo.enqueueReplaceState(i,i.state,null)}function zc(t,i,a,l){var u=t.stateNode;u.props=a,u.state=t.memoizedState,u.refs={},Tc(t);var p=i.contextType;typeof p=="object"&&p!==null?u.context=Yn(p):(p=Cn(i)?Cr:pn.current,u.context=us(t,p)),u.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(kc(t,i,p,a),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Fo.enqueueReplaceState(u,u.state,null),Ro(t,a,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,i){try{var a="",l=i;do a+=He(l),l=l.return;while(l);var u=a}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:u,digest:null}}function Vc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Hc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Ex=typeof WeakMap=="function"?WeakMap:Map;function Dh(t,i,a){a=Ti(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Go||(Go=!0,iu=l),Hc(t,i)},a}function Uh(t,i,a){a=Ti(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;a.payload=function(){return l(u)},a.callback=function(){Hc(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Hc(t,i),typeof l!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Ih(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Ex;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(a)||(u.add(a),t=Ox.bind(null,t,i,a),i.then(t,t))}function Fh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Oh(t,i,a,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ti(-1,1),i.tag=2,or(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var bx=I.ReactCurrentOwner,Rn=!1;function Mn(t,i,a,l){i.child=t===null?ih(i,null,a,l):ps(i,t.child,a,l)}function Bh(t,i,a,l,u){a=a.render;var p=i.ref;return xs(i,u),l=Dc(t,i,a,l,p,u),a=Uc(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Ai(t,i,u)):(Ht&&a&&xc(i),i.flags|=1,Mn(t,i,l,u),i.child)}function kh(t,i,a,l,u){if(t===null){var p=a.type;return typeof p=="function"&&!uu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,zh(t,i,p,l,u)):(t=$o(a.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&u)===0){var E=p.memoizedProps;if(a=a.compare,a=a!==null?a:la,a(E,l)&&t.ref===i.ref)return Ai(t,i,u)}return i.flags|=1,t=hr(p,l),t.ref=i.ref,t.return=i,i.child=t}function zh(t,i,a,l,u){if(t!==null){var p=t.memoizedProps;if(la(p,l)&&t.ref===i.ref)if(Rn=!1,i.pendingProps=l=p,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Rn=!0);else return i.lanes=t.lanes,Ai(t,i,u)}return Gc(t,i,a,l,u)}function Vh(t,i,a){var l=i.pendingProps,u=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(ys,kn),kn|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ot(ys,kn),kn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:a,Ot(ys,kn),kn|=l}else p!==null?(l=p.baseLanes|a,i.memoizedState=null):l=a,Ot(ys,kn),kn|=l;return Mn(t,i,u,a),i.child}function Hh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Gc(t,i,a,l,u){var p=Cn(a)?Cr:pn.current;return p=us(i,p),xs(i,u),a=Dc(t,i,a,l,p,u),l=Uc(),t!==null&&!Rn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Ai(t,i,u)):(Ht&&l&&xc(i),i.flags|=1,Mn(t,i,a,u),i.child)}function Gh(t,i,a,l,u){if(Cn(a)){var p=!0;yo(i)}else p=!1;if(xs(i,u),i.stateNode===null)Bo(t,i),Ph(i,a,l),zc(i,a,l,u),l=!0;else if(t===null){var E=i.stateNode,D=i.memoizedProps;E.props=D;var k=E.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=Yn(ee):(ee=Cn(a)?Cr:pn.current,ee=us(i,ee));var ge=a.getDerivedStateFromProps,_e=typeof ge=="function"||typeof E.getSnapshotBeforeUpdate=="function";_e||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==l||k!==ee)&&Lh(i,E,l,ee),ar=!1;var xe=i.memoizedState;E.state=xe,Ro(i,l,E,u),k=i.memoizedState,D!==l||xe!==k||An.current||ar?(typeof ge=="function"&&(kc(i,a,ge,l),k=i.memoizedState),(D=ar||Nh(i,a,D,l,xe,k,ee))?(_e||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),E.props=l,E.state=k,E.context=ee,l=D):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,sh(t,i),D=i.memoizedProps,ee=i.type===i.elementType?D:ni(i.type,D),E.props=ee,_e=i.pendingProps,xe=E.context,k=a.contextType,typeof k=="object"&&k!==null?k=Yn(k):(k=Cn(a)?Cr:pn.current,k=us(i,k));var Ue=a.getDerivedStateFromProps;(ge=typeof Ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==_e||xe!==k)&&Lh(i,E,l,k),ar=!1,xe=i.memoizedState,E.state=xe,Ro(i,l,E,u);var Ve=i.memoizedState;D!==_e||xe!==Ve||An.current||ar?(typeof Ue=="function"&&(kc(i,a,Ue,l),Ve=i.memoizedState),(ee=ar||Nh(i,a,ee,l,xe,Ve,k)||!1)?(ge||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,Ve,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,Ve,k)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ve),E.props=l,E.state=Ve,E.context=k,l=ee):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),l=!1)}return Wc(t,i,a,l,p,u)}function Wc(t,i,a,l,u,p){Hh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return u&&qf(i,a,!1),Ai(t,i,p);l=i.stateNode,bx.current=i;var D=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=ps(i,t.child,null,p),i.child=ps(i,null,D,p)):Mn(t,i,D,p),i.memoizedState=l.state,u&&qf(i,a,!0),i.child}function Wh(t){var i=t.stateNode;i.pendingContext?Xf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Xf(t,i.context,!1),Ac(t,i.containerInfo)}function jh(t,i,a,l,u){return hs(),yc(u),i.flags|=256,Mn(t,i,a,l),i.child}var jc={dehydrated:null,treeContext:null,retryLane:0};function Xc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xh(t,i,a){var l=i.pendingProps,u=Gt.current,p=!1,E=(i.flags&128)!==0,D;if((D=E)||(D=t!==null&&t.memoizedState===null?!1:(u&2)!==0),D?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Ot(Gt,u&1),t===null)return _c(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,p?(l=i.mode,p=i.child,E={mode:"hidden",children:E},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=E):p=Ko(E,l,0,null),t=Br(t,l,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Xc(a),i.memoizedState=jc,t):Yc(i,E));if(u=t.memoizedState,u!==null&&(D=u.dehydrated,D!==null))return wx(t,i,E,l,D,u,a);if(p){p=l.fallback,E=i.mode,u=t.child,D=u.sibling;var k={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=k,i.deletions=null):(l=hr(u,k),l.subtreeFlags=u.subtreeFlags&14680064),D!==null?p=hr(D,p):(p=Br(p,E,a,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,E=t.child.memoizedState,E=E===null?Xc(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},p.memoizedState=E,p.childLanes=t.childLanes&~a,i.memoizedState=jc,l}return p=t.child,t=p.sibling,l=hr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function Yc(t,i){return i=Ko({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Oo(t,i,a,l){return l!==null&&yc(l),ps(i,t.child,null,a),t=Yc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function wx(t,i,a,l,u,p,E){if(a)return i.flags&256?(i.flags&=-257,l=Vc(Error(n(422))),Oo(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,u=i.mode,l=Ko({mode:"visible",children:l.children},u,0,null),p=Br(p,u,E,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&ps(i,t.child,null,E),i.child.memoizedState=Xc(E),i.memoizedState=jc,p);if((i.mode&1)===0)return Oo(t,i,E,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var D=l.dgst;return l=D,p=Error(n(419)),l=Vc(p,l,void 0),Oo(t,i,E,l)}if(D=(E&t.childLanes)!==0,Rn||D){if(l=on,l!==null){switch(E&-E){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|E))!==0?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,wi(t,u),si(l,t,u,-1))}return cu(),l=Vc(Error(n(421))),Oo(t,i,E,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=Bx.bind(null,t),u._reactRetry=i,null):(t=p.treeContext,Bn=nr(u.nextSibling),On=i,Ht=!0,ti=null,t!==null&&(jn[Xn++]=Ei,jn[Xn++]=bi,jn[Xn++]=Rr,Ei=t.id,bi=t.overflow,Rr=i),i=Yc(i,l.children),i.flags|=4096,i)}function Yh(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),bc(t.return,i,a)}function qc(t,i,a,l,u){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=u)}function qh(t,i,a){var l=i.pendingProps,u=l.revealOrder,p=l.tail;if(Mn(t,i,l.children,a),l=Gt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yh(t,a,i);else if(t.tag===19)Yh(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ot(Gt,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(a=i.child,u=null;a!==null;)t=a.alternate,t!==null&&No(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),qc(i,!1,u,a,p);break;case"backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&No(t)===null){i.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}qc(i,!0,a,null,p);break;case"together":qc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Bo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ai(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Ur|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=hr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=hr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function Tx(t,i,a){switch(i.tag){case 3:Wh(i),hs();break;case 5:lh(i);break;case 1:Cn(i.type)&&yo(i);break;case 4:Ac(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;Ot(To,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ot(Gt,Gt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Xh(t,i,a):(Ot(Gt,Gt.current&1),t=Ai(t,i,a),t!==null?t.sibling:null);Ot(Gt,Gt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return qh(t,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ot(Gt,Gt.current),l)break;return null;case 22:case 23:return i.lanes=0,Vh(t,i,a)}return Ai(t,i,a)}var $h,$c,Kh,Zh;$h=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},$c=function(){},Kh=function(t,i,a,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,Lr(pi.current);var p=null;switch(a){case"input":u=Nt(t,u),l=Nt(t,l),p=[];break;case"select":u=te({},u,{value:void 0}),l=te({},l,{value:void 0}),p=[];break;case"textarea":u=at(t,u),l=at(t,l),p=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=go)}Je(a,l);var E;a=null;for(ee in u)if(!l.hasOwnProperty(ee)&&u.hasOwnProperty(ee)&&u[ee]!=null)if(ee==="style"){var D=u[ee];for(E in D)D.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?p||(p=[]):(p=p||[]).push(ee,null));for(ee in l){var k=l[ee];if(D=u?.[ee],l.hasOwnProperty(ee)&&k!==D&&(k!=null||D!=null))if(ee==="style")if(D){for(E in D)!D.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in k)k.hasOwnProperty(E)&&D[E]!==k[E]&&(a||(a={}),a[E]=k[E])}else a||(p||(p=[]),p.push(ee,a)),a=k;else ee==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,D=D?D.__html:void 0,k!=null&&D!==k&&(p=p||[]).push(ee,k)):ee==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(ee,""+k):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(k!=null&&ee==="onScroll"&&Bt("scroll",t),p||D===k||(p=[])):(p=p||[]).push(ee,k))}a&&(p=p||[]).push("style",a);var ee=p;(i.updateQueue=ee)&&(i.flags|=4)}},Zh=function(t,i,a,l){a!==l&&(i.flags|=4)};function Ea(t,i){if(!Ht)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function xn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function Ax(t,i,a){var l=i.pendingProps;switch(gc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(i),null;case 1:return Cn(i.type)&&_o(),xn(i),null;case 3:return l=i.stateNode,gs(),kt(An),kt(pn),Nc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(bo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ti!==null&&(au(ti),ti=null))),$c(t,i),xn(i),null;case 5:Cc(i);var u=Lr(va.current);if(a=i.type,t!==null&&i.stateNode!=null)Kh(t,i,a,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return xn(i),null}if(t=Lr(pi.current),bo(i)){l=i.stateNode,a=i.type;var p=i.memoizedProps;switch(l[hi]=i,l[ha]=p,t=(i.mode&1)!==0,a){case"dialog":Bt("cancel",l),Bt("close",l);break;case"iframe":case"object":case"embed":Bt("load",l);break;case"video":case"audio":for(u=0;u<ua.length;u++)Bt(ua[u],l);break;case"source":Bt("error",l);break;case"img":case"image":case"link":Bt("error",l),Bt("load",l);break;case"details":Bt("toggle",l);break;case"input":O(l,p),Bt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Bt("invalid",l);break;case"textarea":N(l,p),Bt("invalid",l)}Je(a,p),u=null;for(var E in p)if(p.hasOwnProperty(E)){var D=p[E];E==="children"?typeof D=="string"?l.textContent!==D&&(p.suppressHydrationWarning!==!0&&xo(l.textContent,D,t),u=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(p.suppressHydrationWarning!==!0&&xo(l.textContent,D,t),u=["children",""+D]):o.hasOwnProperty(E)&&D!=null&&E==="onScroll"&&Bt("scroll",l)}switch(a){case"input":ft(l),Tt(l,p,!0);break;case"textarea":ft(l),$(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=go)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[hi]=i,t[ha]=l,$h(t,i,!1,!1),i.stateNode=t;e:{switch(E=Le(a,l),a){case"dialog":Bt("cancel",t),Bt("close",t),u=l;break;case"iframe":case"object":case"embed":Bt("load",t),u=l;break;case"video":case"audio":for(u=0;u<ua.length;u++)Bt(ua[u],t);u=l;break;case"source":Bt("error",t),u=l;break;case"img":case"image":case"link":Bt("error",t),Bt("load",t),u=l;break;case"details":Bt("toggle",t),u=l;break;case"input":O(t,l),u=Nt(t,l),Bt("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=te({},l,{value:void 0}),Bt("invalid",t);break;case"textarea":N(t,l),u=at(t,l),Bt("invalid",t);break;default:u=l}Je(a,u),D=u;for(p in D)if(D.hasOwnProperty(p)){var k=D[p];p==="style"?Te(t,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&qe(t,k)):p==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Ae(t,k):typeof k=="number"&&Ae(t,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?k!=null&&p==="onScroll"&&Bt("scroll",t):k!=null&&P(t,p,k,E))}switch(a){case"input":ft(t),Tt(t,l,!1);break;case"textarea":ft(t),$(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Se(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?Xe(t,!!l.multiple,p,!1):l.defaultValue!=null&&Xe(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=go)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xn(i),null;case 6:if(t&&i.stateNode!=null)Zh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Lr(va.current),Lr(pi.current),bo(i)){if(l=i.stateNode,a=i.memoizedProps,l[hi]=i,(p=l.nodeValue!==a)&&(t=On,t!==null))switch(t.tag){case 3:xo(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xo(l.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[hi]=i,i.stateNode=l}return xn(i),null;case 13:if(kt(Gt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ht&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)eh(),hs(),i.flags|=98560,p=!1;else if(p=bo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[hi]=i}else hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xn(i),p=!1}else ti!==null&&(au(ti),ti=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Gt.current&1)!==0?tn===0&&(tn=3):cu())),i.updateQueue!==null&&(i.flags|=4),xn(i),null);case 4:return gs(),$c(t,i),t===null&&da(i.stateNode.containerInfo),xn(i),null;case 10:return Ec(i.type._context),xn(i),null;case 17:return Cn(i.type)&&_o(),xn(i),null;case 19:if(kt(Gt),p=i.memoizedState,p===null)return xn(i),null;if(l=(i.flags&128)!==0,E=p.rendering,E===null)if(l)Ea(p,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=No(t),E!==null){for(i.flags|=128,Ea(p,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)p=a,t=l,p.flags&=14680066,E=p.alternate,E===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=E.childLanes,p.lanes=E.lanes,p.child=E.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=E.memoizedProps,p.memoizedState=E.memoizedState,p.updateQueue=E.updateQueue,p.type=E.type,t=E.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Ot(Gt,Gt.current&1|2),i.child}t=t.sibling}p.tail!==null&&q()>Ss&&(i.flags|=128,l=!0,Ea(p,!1),i.lanes=4194304)}else{if(!l)if(t=No(E),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ea(p,!0),p.tail===null&&p.tailMode==="hidden"&&!E.alternate&&!Ht)return xn(i),null}else 2*q()-p.renderingStartTime>Ss&&a!==1073741824&&(i.flags|=128,l=!0,Ea(p,!1),i.lanes=4194304);p.isBackwards?(E.sibling=i.child,i.child=E):(a=p.last,a!==null?a.sibling=E:i.child=E,p.last=E)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=q(),i.sibling=null,a=Gt.current,Ot(Gt,l?a&1|2:a&1),i):(xn(i),null);case 22:case 23:return lu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(kn&1073741824)!==0&&(xn(i),i.subtreeFlags&6&&(i.flags|=8192)):xn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Cx(t,i){switch(gc(i),i.tag){case 1:return Cn(i.type)&&_o(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return gs(),kt(An),kt(pn),Nc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Cc(i),null;case 13:if(kt(Gt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));hs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return kt(Gt),null;case 4:return gs(),null;case 10:return Ec(i.type._context),null;case 22:case 23:return lu(),null;case 24:return null;default:return null}}var ko=!1,gn=!1,Rx=typeof WeakSet=="function"?WeakSet:Set,Be=null;function _s(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){jt(t,i,l)}else a.current=null}function Kc(t,i,a){try{a()}catch(l){jt(t,i,l)}}var Qh=!1;function Nx(t,i){if(lc=ro,t=Nf(),ec(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var E=0,D=-1,k=-1,ee=0,ge=0,_e=t,xe=null;t:for(;;){for(var Ue;_e!==a||u!==0&&_e.nodeType!==3||(D=E+u),_e!==p||l!==0&&_e.nodeType!==3||(k=E+l),_e.nodeType===3&&(E+=_e.nodeValue.length),(Ue=_e.firstChild)!==null;)xe=_e,_e=Ue;for(;;){if(_e===t)break t;if(xe===a&&++ee===u&&(D=E),xe===p&&++ge===l&&(k=E),(Ue=_e.nextSibling)!==null)break;_e=xe,xe=_e.parentNode}_e=Ue}a=D===-1||k===-1?null:{start:D,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(cc={focusedElem:t,selectionRange:a},ro=!1,Be=i;Be!==null;)if(i=Be,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Be=t;else for(;Be!==null;){i=Be;try{var Ve=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var We=Ve.memoizedProps,Xt=Ve.memoizedState,Y=i.stateNode,W=Y.getSnapshotBeforeUpdate(i.elementType===i.type?We:ni(i.type,We),Xt);Y.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Me){jt(i,i.return,Me)}if(t=i.sibling,t!==null){t.return=i.return,Be=t;break}Be=i.return}return Ve=Qh,Qh=!1,Ve}function ba(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var p=u.destroy;u.destroy=void 0,p!==void 0&&Kc(i,a,p)}u=u.next}while(u!==l)}}function zo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function Zc(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function Jh(t){var i=t.alternate;i!==null&&(t.alternate=null,Jh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[hi],delete i[ha],delete i[hc],delete i[fx],delete i[hx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ep(t){return t.tag===5||t.tag===3||t.tag===4}function tp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ep(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=go));else if(l!==4&&(t=t.child,t!==null))for(Qc(t,i,a),t=t.sibling;t!==null;)Qc(t,i,a),t=t.sibling}function Jc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Jc(t,i,a),t=t.sibling;t!==null;)Jc(t,i,a),t=t.sibling}var fn=null,ii=!1;function lr(t,i,a){for(a=a.child;a!==null;)np(t,i,a),a=a.sibling}function np(t,i,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(et,a)}catch{}switch(a.tag){case 5:gn||_s(a,i);case 6:var l=fn,u=ii;fn=null,lr(t,i,a),fn=l,ii=u,fn!==null&&(ii?(t=fn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):fn.removeChild(a.stateNode));break;case 18:fn!==null&&(ii?(t=fn,a=a.stateNode,t.nodeType===8?fc(t.parentNode,a):t.nodeType===1&&fc(t,a),na(t)):fc(fn,a.stateNode));break;case 4:l=fn,u=ii,fn=a.stateNode.containerInfo,ii=!0,lr(t,i,a),fn=l,ii=u;break;case 0:case 11:case 14:case 15:if(!gn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var p=u,E=p.destroy;p=p.tag,E!==void 0&&((p&2)!==0||(p&4)!==0)&&Kc(a,i,E),u=u.next}while(u!==l)}lr(t,i,a);break;case 1:if(!gn&&(_s(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(D){jt(a,i,D)}lr(t,i,a);break;case 21:lr(t,i,a);break;case 22:a.mode&1?(gn=(l=gn)||a.memoizedState!==null,lr(t,i,a),gn=l):lr(t,i,a);break;default:lr(t,i,a)}}function ip(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Rx),i.forEach(function(l){var u=kx.bind(null,t,l);a.has(l)||(a.add(l),l.then(u,u))})}}function ri(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l];try{var p=t,E=i,D=E;e:for(;D!==null;){switch(D.tag){case 5:fn=D.stateNode,ii=!1;break e;case 3:fn=D.stateNode.containerInfo,ii=!0;break e;case 4:fn=D.stateNode.containerInfo,ii=!0;break e}D=D.return}if(fn===null)throw Error(n(160));np(p,E,u),fn=null,ii=!1;var k=u.alternate;k!==null&&(k.return=null),u.return=null}catch(ee){jt(u,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)rp(i,t),i=i.sibling}function rp(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ri(i,t),xi(t),l&4){try{ba(3,t,t.return),zo(3,t)}catch(We){jt(t,t.return,We)}try{ba(5,t,t.return)}catch(We){jt(t,t.return,We)}}break;case 1:ri(i,t),xi(t),l&512&&a!==null&&_s(a,a.return);break;case 5:if(ri(i,t),xi(t),l&512&&a!==null&&_s(a,a.return),t.flags&32){var u=t.stateNode;try{Ae(u,"")}catch(We){jt(t,t.return,We)}}if(l&4&&(u=t.stateNode,u!=null)){var p=t.memoizedProps,E=a!==null?a.memoizedProps:p,D=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{D==="input"&&p.type==="radio"&&p.name!=null&&xt(u,p),Le(D,E);var ee=Le(D,p);for(E=0;E<k.length;E+=2){var ge=k[E],_e=k[E+1];ge==="style"?Te(u,_e):ge==="dangerouslySetInnerHTML"?qe(u,_e):ge==="children"?Ae(u,_e):P(u,ge,_e,ee)}switch(D){case"input":pt(u,p);break;case"textarea":b(u,p);break;case"select":var xe=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var Ue=p.value;Ue!=null?Xe(u,!!p.multiple,Ue,!1):xe!==!!p.multiple&&(p.defaultValue!=null?Xe(u,!!p.multiple,p.defaultValue,!0):Xe(u,!!p.multiple,p.multiple?[]:"",!1))}u[ha]=p}catch(We){jt(t,t.return,We)}}break;case 6:if(ri(i,t),xi(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,p=t.memoizedProps;try{u.nodeValue=p}catch(We){jt(t,t.return,We)}}break;case 3:if(ri(i,t),xi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{na(i.containerInfo)}catch(We){jt(t,t.return,We)}break;case 4:ri(i,t),xi(t);break;case 13:ri(i,t),xi(t),u=t.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(nu=q())),l&4&&ip(t);break;case 22:if(ge=a!==null&&a.memoizedState!==null,t.mode&1?(gn=(ee=gn)||ge,ri(i,t),gn=ee):ri(i,t),xi(t),l&8192){if(ee=t.memoizedState!==null,(t.stateNode.isHidden=ee)&&!ge&&(t.mode&1)!==0)for(Be=t,ge=t.child;ge!==null;){for(_e=Be=ge;Be!==null;){switch(xe=Be,Ue=xe.child,xe.tag){case 0:case 11:case 14:case 15:ba(4,xe,xe.return);break;case 1:_s(xe,xe.return);var Ve=xe.stateNode;if(typeof Ve.componentWillUnmount=="function"){l=xe,a=xe.return;try{i=l,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(We){jt(l,a,We)}}break;case 5:_s(xe,xe.return);break;case 22:if(xe.memoizedState!==null){op(_e);continue}}Ue!==null?(Ue.return=xe,Be=Ue):op(_e)}ge=ge.sibling}e:for(ge=null,_e=t;;){if(_e.tag===5){if(ge===null){ge=_e;try{u=_e.stateNode,ee?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(D=_e.stateNode,k=_e.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,D.style.display=ve("display",E))}catch(We){jt(t,t.return,We)}}}else if(_e.tag===6){if(ge===null)try{_e.stateNode.nodeValue=ee?"":_e.memoizedProps}catch(We){jt(t,t.return,We)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===t)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===t)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===t)break e;ge===_e&&(ge=null),_e=_e.return}ge===_e&&(ge=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:ri(i,t),xi(t),l&4&&ip(t);break;case 21:break;default:ri(i,t),xi(t)}}function xi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(ep(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Ae(u,""),l.flags&=-33);var p=tp(t);Jc(t,p,u);break;case 3:case 4:var E=l.stateNode.containerInfo,D=tp(t);Qc(t,D,E);break;default:throw Error(n(161))}}catch(k){jt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Px(t,i,a){Be=t,sp(t)}function sp(t,i,a){for(var l=(t.mode&1)!==0;Be!==null;){var u=Be,p=u.child;if(u.tag===22&&l){var E=u.memoizedState!==null||ko;if(!E){var D=u.alternate,k=D!==null&&D.memoizedState!==null||gn;D=ko;var ee=gn;if(ko=E,(gn=k)&&!ee)for(Be=u;Be!==null;)E=Be,k=E.child,E.tag===22&&E.memoizedState!==null?lp(u):k!==null?(k.return=E,Be=k):lp(u);for(;p!==null;)Be=p,sp(p),p=p.sibling;Be=u,ko=D,gn=ee}ap(t)}else(u.subtreeFlags&8772)!==0&&p!==null?(p.return=u,Be=p):ap(t)}}function ap(t){for(;Be!==null;){var i=Be;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||zo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!gn)if(a===null)l.componentDidMount();else{var u=i.elementType===i.type?a.memoizedProps:ni(i.type,a.memoizedProps);l.componentDidUpdate(u,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&oh(i,p,l);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}oh(i,E,a)}break;case 5:var D=i.stateNode;if(a===null&&i.flags&4){a=D;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var ge=ee.memoizedState;if(ge!==null){var _e=ge.dehydrated;_e!==null&&na(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}gn||i.flags&512&&Zc(i)}catch(xe){jt(i,i.return,xe)}}if(i===t){Be=null;break}if(a=i.sibling,a!==null){a.return=i.return,Be=a;break}Be=i.return}}function op(t){for(;Be!==null;){var i=Be;if(i===t){Be=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Be=a;break}Be=i.return}}function lp(t){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{zo(4,i)}catch(k){jt(i,a,k)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(k){jt(i,u,k)}}var p=i.return;try{Zc(i)}catch(k){jt(i,p,k)}break;case 5:var E=i.return;try{Zc(i)}catch(k){jt(i,E,k)}}}catch(k){jt(i,i.return,k)}if(i===t){Be=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Be=D;break}Be=i.return}}var Lx=Math.ceil,Vo=I.ReactCurrentDispatcher,eu=I.ReactCurrentOwner,$n=I.ReactCurrentBatchConfig,yt=0,on=null,Zt=null,hn=0,kn=0,ys=ir(0),tn=0,wa=null,Ur=0,Ho=0,tu=0,Ta=null,Nn=null,nu=0,Ss=1/0,Ci=null,Go=!1,iu=null,cr=null,Wo=!1,ur=null,jo=0,Aa=0,ru=null,Xo=-1,Yo=0;function En(){return(yt&6)!==0?q():Xo!==-1?Xo:Xo=q()}function dr(t){return(t.mode&1)===0?1:(yt&2)!==0&&hn!==0?hn&-hn:mx.transition!==null?(Yo===0&&(Yo=$i()),Yo):(t=ct,t!==0||(t=window.event,t=t===void 0?16:uf(t.type)),t)}function si(t,i,a,l){if(50<Aa)throw Aa=0,ru=null,Error(n(185));Kt(t,a,l),((yt&2)===0||t!==on)&&(t===on&&((yt&2)===0&&(Ho|=a),tn===4&&fr(t,hn)),Pn(t,l),a===1&&yt===0&&(i.mode&1)===0&&(Ss=q()+500,So&&sr()))}function Pn(t,i){var a=t.callbackNode;qi(t,i);var l=vt(t,t===on?hn:0);if(l===0)a!==null&&to(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&to(a),i===1)t.tag===0?px(up.bind(null,t)):$f(up.bind(null,t)),ux(function(){(yt&6)===0&&sr()}),a=null;else{switch(es(l)){case 1:a=X;break;case 4:a=we;break;case 16:a=Re;break;case 536870912:a=Ie;break;default:a=Re}a=vp(a,cp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function cp(t,i){if(Xo=-1,Yo=0,(yt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Ms()&&t.callbackNode!==a)return null;var l=vt(t,t===on?hn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=qo(t,l);else{i=l;var u=yt;yt|=2;var p=fp();(on!==t||hn!==i)&&(Ci=null,Ss=q()+500,Fr(t,i));do try{Ix();break}catch(D){dp(t,D)}while(!0);Mc(),Vo.current=p,yt=u,Zt!==null?i=0:(on=null,hn=0,i=tn)}if(i!==0){if(i===2&&(u=dn(t),u!==0&&(l=u,i=su(t,u))),i===1)throw a=wa,Fr(t,0),fr(t,l),Pn(t,q()),a;if(i===6)fr(t,l);else{if(u=t.current.alternate,(l&30)===0&&!Dx(u)&&(i=qo(t,l),i===2&&(p=dn(t),p!==0&&(l=p,i=su(t,p))),i===1))throw a=wa,Fr(t,0),fr(t,l),Pn(t,q()),a;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Or(t,Nn,Ci);break;case 3:if(fr(t,l),(l&130023424)===l&&(i=nu+500-q(),10<i)){if(vt(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){En(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=dc(Or.bind(null,t,Nn,Ci),i);break}Or(t,Nn,Ci);break;case 4:if(fr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var E=31-st(l);p=1<<E,E=i[E],E>u&&(u=E),l&=~p}if(l=u,l=q()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Lx(l/1960))-l,10<l){t.timeoutHandle=dc(Or.bind(null,t,Nn,Ci),l);break}Or(t,Nn,Ci);break;case 5:Or(t,Nn,Ci);break;default:throw Error(n(329))}}}return Pn(t,q()),t.callbackNode===a?cp.bind(null,t):null}function su(t,i){var a=Ta;return t.current.memoizedState.isDehydrated&&(Fr(t,i).flags|=256),t=qo(t,i),t!==2&&(i=Nn,Nn=a,i!==null&&au(i)),t}function au(t){Nn===null?Nn=t:Nn.push.apply(Nn,t)}function Dx(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var u=a[l],p=u.getSnapshot;u=u.value;try{if(!ei(p(),u))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(t,i){for(i&=~tu,i&=~Ho,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-st(i),l=1<<a;t[a]=-1,i&=~l}}function up(t){if((yt&6)!==0)throw Error(n(327));Ms();var i=vt(t,0);if((i&1)===0)return Pn(t,q()),null;var a=qo(t,i);if(t.tag!==0&&a===2){var l=dn(t);l!==0&&(i=l,a=su(t,l))}if(a===1)throw a=wa,Fr(t,0),fr(t,i),Pn(t,q()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Or(t,Nn,Ci),Pn(t,q()),null}function ou(t,i){var a=yt;yt|=1;try{return t(i)}finally{yt=a,yt===0&&(Ss=q()+500,So&&sr())}}function Ir(t){ur!==null&&ur.tag===0&&(yt&6)===0&&Ms();var i=yt;yt|=1;var a=$n.transition,l=ct;try{if($n.transition=null,ct=1,t)return t()}finally{ct=l,$n.transition=a,yt=i,(yt&6)===0&&sr()}}function lu(){kn=ys.current,kt(ys)}function Fr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,cx(a)),Zt!==null)for(a=Zt.return;a!==null;){var l=a;switch(gc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&_o();break;case 3:gs(),kt(An),kt(pn),Nc();break;case 5:Cc(l);break;case 4:gs();break;case 13:kt(Gt);break;case 19:kt(Gt);break;case 10:Ec(l.type._context);break;case 22:case 23:lu()}a=a.return}if(on=t,Zt=t=hr(t.current,null),hn=kn=i,tn=0,wa=null,tu=Ho=Ur=0,Nn=Ta=null,Pr!==null){for(i=0;i<Pr.length;i++)if(a=Pr[i],l=a.interleaved,l!==null){a.interleaved=null;var u=l.next,p=a.pending;if(p!==null){var E=p.next;p.next=u,l.next=E}a.pending=l}Pr=null}return t}function dp(t,i){do{var a=Zt;try{if(Mc(),Po.current=Io,Lo){for(var l=Wt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Lo=!1}if(Dr=0,an=en=Wt=null,_a=!1,ya=0,eu.current=null,a===null||a.return===null){tn=1,wa=i,Zt=null;break}e:{var p=t,E=a.return,D=a,k=i;if(i=hn,D.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ee=k,ge=D,_e=ge.tag;if((ge.mode&1)===0&&(_e===0||_e===11||_e===15)){var xe=ge.alternate;xe?(ge.updateQueue=xe.updateQueue,ge.memoizedState=xe.memoizedState,ge.lanes=xe.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ue=Fh(E);if(Ue!==null){Ue.flags&=-257,Oh(Ue,E,D,p,i),Ue.mode&1&&Ih(p,ee,i),i=Ue,k=ee;var Ve=i.updateQueue;if(Ve===null){var We=new Set;We.add(k),i.updateQueue=We}else Ve.add(k);break e}else{if((i&1)===0){Ih(p,ee,i),cu();break e}k=Error(n(426))}}else if(Ht&&D.mode&1){var Xt=Fh(E);if(Xt!==null){(Xt.flags&65536)===0&&(Xt.flags|=256),Oh(Xt,E,D,p,i),yc(vs(k,D));break e}}p=k=vs(k,D),tn!==4&&(tn=2),Ta===null?Ta=[p]:Ta.push(p),p=E;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Y=Dh(p,k,i);ah(p,Y);break e;case 1:D=k;var W=p.type,K=p.stateNode;if((p.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(cr===null||!cr.has(K)))){p.flags|=65536,i&=-i,p.lanes|=i;var Me=Uh(p,D,i);ah(p,Me);break e}}p=p.return}while(p!==null)}pp(a)}catch(je){i=je,Zt===a&&a!==null&&(Zt=a=a.return);continue}break}while(!0)}function fp(){var t=Vo.current;return Vo.current=Io,t===null?Io:t}function cu(){(tn===0||tn===3||tn===2)&&(tn=4),on===null||(Ur&268435455)===0&&(Ho&268435455)===0||fr(on,hn)}function qo(t,i){var a=yt;yt|=2;var l=fp();(on!==t||hn!==i)&&(Ci=null,Fr(t,i));do try{Ux();break}catch(u){dp(t,u)}while(!0);if(Mc(),yt=a,Vo.current=l,Zt!==null)throw Error(n(261));return on=null,hn=0,tn}function Ux(){for(;Zt!==null;)hp(Zt)}function Ix(){for(;Zt!==null&&!T();)hp(Zt)}function hp(t){var i=gp(t.alternate,t,kn);t.memoizedProps=t.pendingProps,i===null?pp(t):Zt=i,eu.current=null}function pp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=Ax(a,i,kn),a!==null){Zt=a;return}}else{if(a=Cx(a,i),a!==null){a.flags&=32767,Zt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{tn=6,Zt=null;return}}if(i=i.sibling,i!==null){Zt=i;return}Zt=i=t}while(i!==null);tn===0&&(tn=5)}function Or(t,i,a){var l=ct,u=$n.transition;try{$n.transition=null,ct=1,Fx(t,i,a,l)}finally{$n.transition=u,ct=l}return null}function Fx(t,i,a,l){do Ms();while(ur!==null);if((yt&6)!==0)throw Error(n(327));a=t.finishedWork;var u=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(Tn(t,p),t===on&&(Zt=on=null,hn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Wo||(Wo=!0,vp(Re,function(){return Ms(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=$n.transition,$n.transition=null;var E=ct;ct=1;var D=yt;yt|=4,eu.current=null,Nx(t,a),rp(a,t),nx(cc),ro=!!lc,cc=lc=null,t.current=a,Px(a),j(),yt=D,ct=E,$n.transition=p}else t.current=a;if(Wo&&(Wo=!1,ur=t,jo=u),p=t.pendingLanes,p===0&&(cr=null),Qe(a.stateNode),Pn(t,q()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)u=i[a],l(u.value,{componentStack:u.stack,digest:u.digest});if(Go)throw Go=!1,t=iu,iu=null,t;return(jo&1)!==0&&t.tag!==0&&Ms(),p=t.pendingLanes,(p&1)!==0?t===ru?Aa++:(Aa=0,ru=t):Aa=0,sr(),null}function Ms(){if(ur!==null){var t=es(jo),i=$n.transition,a=ct;try{if($n.transition=null,ct=16>t?16:t,ur===null)var l=!1;else{if(t=ur,ur=null,jo=0,(yt&6)!==0)throw Error(n(331));var u=yt;for(yt|=4,Be=t.current;Be!==null;){var p=Be,E=p.child;if((Be.flags&16)!==0){var D=p.deletions;if(D!==null){for(var k=0;k<D.length;k++){var ee=D[k];for(Be=ee;Be!==null;){var ge=Be;switch(ge.tag){case 0:case 11:case 15:ba(8,ge,p)}var _e=ge.child;if(_e!==null)_e.return=ge,Be=_e;else for(;Be!==null;){ge=Be;var xe=ge.sibling,Ue=ge.return;if(Jh(ge),ge===ee){Be=null;break}if(xe!==null){xe.return=Ue,Be=xe;break}Be=Ue}}}var Ve=p.alternate;if(Ve!==null){var We=Ve.child;if(We!==null){Ve.child=null;do{var Xt=We.sibling;We.sibling=null,We=Xt}while(We!==null)}}Be=p}}if((p.subtreeFlags&2064)!==0&&E!==null)E.return=p,Be=E;else e:for(;Be!==null;){if(p=Be,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ba(9,p,p.return)}var Y=p.sibling;if(Y!==null){Y.return=p.return,Be=Y;break e}Be=p.return}}var W=t.current;for(Be=W;Be!==null;){E=Be;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,Be=K;else e:for(E=W;Be!==null;){if(D=Be,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:zo(9,D)}}catch(je){jt(D,D.return,je)}if(D===E){Be=null;break e}var Me=D.sibling;if(Me!==null){Me.return=D.return,Be=Me;break e}Be=D.return}}if(yt=u,sr(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(et,t)}catch{}l=!0}return l}finally{ct=a,$n.transition=i}}return!1}function mp(t,i,a){i=vs(a,i),i=Dh(t,i,1),t=or(t,i,1),i=En(),t!==null&&(Kt(t,1,i),Pn(t,i))}function jt(t,i,a){if(t.tag===3)mp(t,t,a);else for(;i!==null;){if(i.tag===3){mp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(cr===null||!cr.has(l))){t=vs(a,t),t=Uh(i,t,1),i=or(i,t,1),t=En(),i!==null&&(Kt(i,1,t),Pn(i,t));break}}i=i.return}}function Ox(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=En(),t.pingedLanes|=t.suspendedLanes&a,on===t&&(hn&a)===a&&(tn===4||tn===3&&(hn&130023424)===hn&&500>q()-nu?Fr(t,0):tu|=a),Pn(t,i)}function xp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Ze,Ze<<=1,(Ze&130023424)===0&&(Ze=4194304)));var a=En();t=wi(t,i),t!==null&&(Kt(t,i,a),Pn(t,a))}function Bx(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),xp(t,a)}function kx(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),xp(t,a)}var gp;gp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||An.current)Rn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Rn=!1,Tx(t,i,a);Rn=(t.flags&131072)!==0}else Rn=!1,Ht&&(i.flags&1048576)!==0&&Kf(i,Eo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Bo(t,i),t=i.pendingProps;var u=us(i,pn.current);xs(i,a),u=Dc(null,i,l,t,u,a);var p=Uc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Cn(l)?(p=!0,yo(i)):p=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Tc(i),u.updater=Fo,i.stateNode=u,u._reactInternals=i,zc(i,l,t,a),i=Wc(null,i,l,!0,p,a)):(i.tag=0,Ht&&p&&xc(i),Mn(null,i,u,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Bo(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=Vx(l),t=ni(l,t),u){case 0:i=Gc(null,i,l,t,a);break e;case 1:i=Gh(null,i,l,t,a);break e;case 11:i=Bh(null,i,l,t,a);break e;case 14:i=kh(null,i,l,ni(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ni(l,u),Gc(t,i,l,u,a);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ni(l,u),Gh(t,i,l,u,a);case 3:e:{if(Wh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,u=p.element,sh(t,i),Ro(i,l,null,a);var E=i.memoizedState;if(l=E.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){u=vs(Error(n(423)),i),i=jh(t,i,l,a,u);break e}else if(l!==u){u=vs(Error(n(424)),i),i=jh(t,i,l,a,u);break e}else for(Bn=nr(i.stateNode.containerInfo.firstChild),On=i,Ht=!0,ti=null,a=ih(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hs(),l===u){i=Ai(t,i,a);break e}Mn(t,i,l,a)}i=i.child}return i;case 5:return lh(i),t===null&&_c(i),l=i.type,u=i.pendingProps,p=t!==null?t.memoizedProps:null,E=u.children,uc(l,u)?E=null:p!==null&&uc(l,p)&&(i.flags|=32),Hh(t,i),Mn(t,i,E,a),i.child;case 6:return t===null&&_c(i),null;case 13:return Xh(t,i,a);case 4:return Ac(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ps(i,null,l,a):Mn(t,i,l,a),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ni(l,u),Bh(t,i,l,u,a);case 7:return Mn(t,i,i.pendingProps,a),i.child;case 8:return Mn(t,i,i.pendingProps.children,a),i.child;case 12:return Mn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,p=i.memoizedProps,E=u.value,Ot(To,l._currentValue),l._currentValue=E,p!==null)if(ei(p.value,E)){if(p.children===u.children&&!An.current){i=Ai(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var D=p.dependencies;if(D!==null){E=p.child;for(var k=D.firstContext;k!==null;){if(k.context===l){if(p.tag===1){k=Ti(-1,a&-a),k.tag=2;var ee=p.updateQueue;if(ee!==null){ee=ee.shared;var ge=ee.pending;ge===null?k.next=k:(k.next=ge.next,ge.next=k),ee.pending=k}}p.lanes|=a,k=p.alternate,k!==null&&(k.lanes|=a),bc(p.return,a,i),D.lanes|=a;break}k=k.next}}else if(p.tag===10)E=p.type===i.type?null:p.child;else if(p.tag===18){if(E=p.return,E===null)throw Error(n(341));E.lanes|=a,D=E.alternate,D!==null&&(D.lanes|=a),bc(E,a,i),E=p.sibling}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===i){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}Mn(t,i,u.children,a),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,xs(i,a),u=Yn(u),l=l(u),i.flags|=1,Mn(t,i,l,a),i.child;case 14:return l=i.type,u=ni(l,i.pendingProps),u=ni(l.type,u),kh(t,i,l,u,a);case 15:return zh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:ni(l,u),Bo(t,i),i.tag=1,Cn(l)?(t=!0,yo(i)):t=!1,xs(i,a),Ph(i,l,u),zc(i,l,u,a),Wc(null,i,l,!0,t,a);case 19:return qh(t,i,a);case 22:return Vh(t,i,a)}throw Error(n(156,i.tag))};function vp(t,i){return eo(t,i)}function zx(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,a,l){return new zx(t,i,a,l)}function uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Vx(t){if(typeof t=="function")return uu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===J)return 11;if(t===ae)return 14}return 2}function hr(t,i){var a=t.alternate;return a===null?(a=Kn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function $o(t,i,a,l,u,p){var E=2;if(l=t,typeof t=="function")uu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case V:return Br(a.children,u,p,i);case Q:E=8,u|=8;break;case R:return t=Kn(12,a,i,u|2),t.elementType=R,t.lanes=p,t;case ne:return t=Kn(13,a,i,u),t.elementType=ne,t.lanes=p,t;case le:return t=Kn(19,a,i,u),t.elementType=le,t.lanes=p,t;case fe:return Ko(a,u,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:E=10;break e;case G:E=9;break e;case J:E=11;break e;case ae:E=14;break e;case de:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Kn(E,a,i,u),i.elementType=t,i.type=l,i.lanes=p,i}function Br(t,i,a,l){return t=Kn(7,t,l,i),t.lanes=a,t}function Ko(t,i,a,l){return t=Kn(22,t,l,i),t.elementType=fe,t.lanes=a,t.stateNode={isHidden:!1},t}function du(t,i,a){return t=Kn(6,t,null,i),t.lanes=a,t}function fu(t,i,a){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Hx(t,i,a,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=It(0),this.expirationTimes=It(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=It(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function hu(t,i,a,l,u,p,E,D,k){return t=new Hx(t,i,a,D,k),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Kn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tc(p),t}function Gx(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function _p(t){if(!t)return rr;t=t._reactInternals;e:{if(di(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Cn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Cn(a))return Yf(t,a,i)}return i}function yp(t,i,a,l,u,p,E,D,k){return t=hu(a,l,!0,t,u,p,E,D,k),t.context=_p(null),a=t.current,l=En(),u=dr(a),p=Ti(l,u),p.callback=i??null,or(a,p,u),t.current.lanes=u,Kt(t,u,l),Pn(t,l),t}function Zo(t,i,a,l){var u=i.current,p=En(),E=dr(u);return a=_p(a),i.context===null?i.context=a:i.pendingContext=a,i=Ti(p,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=or(u,i,E),t!==null&&(si(t,u,E,p),Co(t,u,E)),E}function Qo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function pu(t,i){Sp(t,i),(t=t.alternate)&&Sp(t,i)}function Wx(){return null}var Mp=typeof reportError=="function"?reportError:function(t){console.error(t)};function mu(t){this._internalRoot=t}Jo.prototype.render=mu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Zo(t,i,null,null)},Jo.prototype.unmount=mu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ir(function(){Zo(null,t,null,null)}),i[Si]=null}};function Jo(t){this._internalRoot=t}Jo.prototype.unstable_scheduleHydration=function(t){if(t){var i=sf();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Ji.length&&i!==0&&i<Ji[a].priority;a++);Ji.splice(a,0,t),a===0&&lf(t)}};function xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function el(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ep(){}function jx(t,i,a,l,u){if(u){if(typeof l=="function"){var p=l;l=function(){var ee=Qo(E);p.call(ee)}}var E=yp(i,l,t,0,null,!1,!1,"",Ep);return t._reactRootContainer=E,t[Si]=E.current,da(t.nodeType===8?t.parentNode:t),Ir(),E}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var D=l;l=function(){var ee=Qo(k);D.call(ee)}}var k=hu(t,0,!1,null,null,!1,!1,"",Ep);return t._reactRootContainer=k,t[Si]=k.current,da(t.nodeType===8?t.parentNode:t),Ir(function(){Zo(i,k,a,l)}),k}function tl(t,i,a,l,u){var p=a._reactRootContainer;if(p){var E=p;if(typeof u=="function"){var D=u;u=function(){var k=Qo(E);D.call(k)}}Zo(i,E,t,u)}else E=jx(a,i,t,u,l);return Qo(E)}fi=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ct(i.pendingLanes);a!==0&&(Jt(i,a|1),Pn(i,q()),(yt&6)===0&&(Ss=q()+500,sr()))}break;case 13:Ir(function(){var l=wi(t,1);if(l!==null){var u=En();si(l,t,1,u)}}),pu(t,1)}},Vl=function(t){if(t.tag===13){var i=wi(t,134217728);if(i!==null){var a=En();si(i,t,134217728,a)}pu(t,134217728)}},rf=function(t){if(t.tag===13){var i=dr(t),a=wi(t,i);if(a!==null){var l=En();si(a,t,i,l)}pu(t,i)}},sf=function(){return ct},af=function(t,i){var a=ct;try{return ct=t,i()}finally{ct=a}},Ce=function(t,i,a){switch(i){case"input":if(pt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var u=vo(l);if(!u)throw Error(n(90));$t(l),pt(l,u)}}}break;case"textarea":b(t,a);break;case"select":i=a.value,i!=null&&Xe(t,!!a.multiple,i,!1)}},ot=ou,Pt=Ir;var Xx={usingClientEntryPoint:!1,Events:[pa,ls,vo,pe,ze,ou]},Ca={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yx={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qa(t),t===null?null:t.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||Wx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{et=nl.inject(Yx),$e=nl}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xx,Ln.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xu(i))throw Error(n(200));return Gx(t,i,null,a)},Ln.createRoot=function(t,i){if(!xu(t))throw Error(n(299));var a=!1,l="",u=Mp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=hu(t,1,!1,null,null,a,!1,l,u),t[Si]=i.current,da(t.nodeType===8?t.parentNode:t),new mu(i)},Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Qa(i),t=t===null?null:t.stateNode,t},Ln.flushSync=function(t){return Ir(t)},Ln.hydrate=function(t,i,a){if(!el(i))throw Error(n(200));return tl(null,t,i,!0,a)},Ln.hydrateRoot=function(t,i,a){if(!xu(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,u=!1,p="",E=Mp;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=yp(i,null,t,1,a??null,u,!1,p,E),t[Si]=i.current,da(t),l)for(t=0;t<l.length;t++)a=l[t],u=a._getVersion,u=u(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,u]:i.mutableSourceEagerHydrationData.push(a,u);return new Jo(i)},Ln.render=function(t,i,a){if(!el(i))throw Error(n(200));return tl(null,t,i,!1,a)},Ln.unmountComponentAtNode=function(t){if(!el(t))throw Error(n(40));return t._reactRootContainer?(Ir(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1},Ln.unstable_batchedUpdates=ou,Ln.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!el(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return tl(t,i,a,!1,l)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var Pp;function tg(){if(Pp)return _u.exports;Pp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),_u.exports=eg(),_u.exports}var Lp;function ng(){if(Lp)return il;Lp=1;var s=tg();return il.createRoot=s.createRoot,il.hydrateRoot=s.hydrateRoot,il}var ig=ng(),Rt=Hd();const rg="/assets/hayahive-pd-PzuAr.png";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ag=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Dp=s=>{const e=ag(s);return e.charAt(0).toUpperCase()+e.slice(1)},Om=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var og={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=Rt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:d,...f},m)=>Rt.createElement("svg",{ref:m,...og,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:Om("lucide",o),...f},[...d.map(([h,x])=>Rt.createElement(h,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=(s,e)=>{const n=Rt.forwardRef(({className:r,...o},c)=>Rt.createElement(lg,{ref:c,iconNode:e,className:Om(`lucide-${sg(Dp(s))}`,`lucide-${s}`,r),...o}));return n.displayName=Dp(s),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ug=Ft("arrow-left",cg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"M10 4 8 6",key:"1rru8s"}],["path",{d:"M17 19v2",key:"ts1sot"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M7 19v2",key:"12npes"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"14ym8i"}]],fg=Ft("bath",dg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]],pg=Ft("bed",hg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],xg=Ft("camera",mg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Up=Ft("circle-check-big",gg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Ip=Ft("circle-x",vg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],yg=Ft("clock",_g);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Mg=Ft("dollar-sign",Sg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]],Bm=Ft("file-check",Eg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],km=Ft("flame",bg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],Zu=Ft("heart",wg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Ag=Ft("house",Tg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Qu=Ft("map-pin",Cg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],Ng=Ft("maximize-2",Rg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Fp=Ft("maximize",Pg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],zm=Ft("message-circle",Lg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],Ug=Ft("minimize-2",Dg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m19 9 3 3-3 3",key:"1mg7y2"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]],Fg=Ft("move",Ig);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],Op=Ft("rotate-cw",Og);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Vm=Ft("search",Bg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],wl=Ft("shield-check",kg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Fa=Ft("shield",zg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Sr=Ft("star",Vg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ju=Ft("user",Hg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Wg=Ft("video",Gg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],Pl=Ft("wifi",jg);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Hm=Ft("x",Xg),Yg="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function ed(s){const[e,n]=Rt.useState(!1),r=()=>{n(!0)},{src:o,alt:c,style:d,className:f,...m}=s;return e?S.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${f??""}`,style:d,children:S.jsx("div",{className:"flex items-center justify-center w-full h-full",children:S.jsx("img",{src:Yg,alt:"Error loading image",...m,"data-original-url":o})})}):S.jsx("img",{src:o,alt:c,className:f,style:d,...m,onError:r})}const Bp=[{id:1,image:"https://images.unsplash.com/photo-1758521541103-d29cbd5fb2e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkZW50JTIwYmVkcm9vbXxlbnwxfHx8fDE3NjMzNzQwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",price:8500,title:"Cozy Studio near Foundation University",location:"Katipunan Ave, QC",score:4.8,verified:!0},{id:2,image:"https://images.unsplash.com/photo-1612419299101-6c294dc2901d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYXBhcnRtZW50JTIwcm9vbXxlbnwxfHx8fDE3NjMzNzQwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",price:6500,title:"Bright Room with Fast WiFi",location:"Espana, Manila",score:4.9,verified:!0},{id:3,image:"https://images.unsplash.com/photo-1579632151052-92f741fb9b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlnaHQlMjBkb3JtJTIwcm9vbXxlbnwxfHx8fDE3NjMzNzQwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",price:7200,title:"Modern Dorm with CCTV",location:"Taft Ave, Manila",score:4.7,verified:!0},{id:4,image:"https://images.unsplash.com/photo-1535049752-3baf525dd015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc2MzI5NjIxMXww&ixlib=rb-4.1.0&q=80&w=1080",price:9e3,title:"Premium Suite - All Amenities",location:"Quezon Ave, QC",score:4.9,verified:!0}];function qg({onCardClick:s}){return S.jsxs("div",{className:"min-h-screen bg-[#F8FAFC]",children:[S.jsx("div",{className:"bg-gradient-to-br from-[#14B8A6] to-[#0F766E] px-6 py-12 rounded-b-3xl",children:S.jsxs("div",{className:"max-w-7xl mx-auto",children:[S.jsxs("div",{className:"mb-8 text-center md:text-left",children:[S.jsx("h1",{className:"text-white mb-2",children:"Find Your Safe Haven"}),S.jsx("p",{className:"text-[#5EEAD4]",children:"Verified student housing you can trust"})]}),S.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-4 mb-6 flex items-center gap-3 max-w-3xl mx-auto md:mx-0",children:[S.jsx(Vm,{className:"text-[#64748B]",size:20}),S.jsx("input",{type:"text",placeholder:"Search by location or university...",className:"flex-1 outline-none"})]}),S.jsxs("div",{className:"flex gap-3 overflow-x-auto pb-2 scrollbar-hide max-w-3xl mx-auto md:mx-0",children:[S.jsxs("button",{className:"bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap border border-white/30 hover:bg-white/30 transition-colors",children:[S.jsx(Pl,{size:16}),S.jsx("span",{className:"text-sm",children:"WiFi Speed"})]}),S.jsxs("button",{className:"bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap border border-white/30 hover:bg-white/30 transition-colors",children:[S.jsx(Mg,{size:16}),S.jsx("span",{className:"text-sm",children:"Price"})]}),S.jsxs("button",{className:"bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap border border-white/30 hover:bg-white/30 transition-colors",children:[S.jsx(km,{size:16}),S.jsx("span",{className:"text-sm",children:"Fire Safety"})]}),S.jsxs("button",{className:"bg-white/20 backdrop-blur-sm text-white px-5 py-2.5 rounded-full flex items-center gap-2 whitespace-nowrap border border-white/30 hover:bg-white/30 transition-colors",children:[S.jsx(Qu,{size:16}),S.jsx("span",{className:"text-sm",children:"Near Campus"})]})]})]})}),S.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-8",children:[S.jsxs("div",{className:"flex items-center justify-between mb-6",children:[S.jsx("h3",{className:"text-[#1E293B]",children:"Available Listings"}),S.jsxs("p",{className:"text-[#64748B]",children:[Bp.length," properties"]})]}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Bp.map(e=>S.jsxs("div",{onClick:()=>s(e.id),className:"bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1",children:[S.jsxs("div",{className:"relative h-56 overflow-hidden",children:[S.jsx(ed,{src:e.image,alt:e.title,className:"w-full h-full object-cover hover:scale-105 transition-transform duration-300"}),e.verified&&S.jsxs("div",{className:"absolute top-3 right-3 bg-[#F59E0B] text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg",children:[S.jsx(Fa,{size:14,fill:"white"}),S.jsx("span",{className:"text-xs",children:"Gold Hive"})]})]}),S.jsxs("div",{className:"p-5",children:[S.jsx("div",{className:"flex items-start justify-between mb-3",children:S.jsxs("div",{className:"flex-1",children:[S.jsx("h4",{className:"text-[#1E293B] mb-2",children:e.title}),S.jsxs("div",{className:"flex items-center gap-1 text-[#64748B]",children:[S.jsx(Qu,{size:14}),S.jsx("p",{className:"text-xs",children:e.location})]})]})}),S.jsxs("div",{className:"flex items-center justify-between pt-3 border-t border-[#E2E8F0]",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsxs("div",{className:"flex items-center gap-1 bg-[#14B8A6]/10 px-3 py-1.5 rounded-full",children:[S.jsx(Sr,{size:14,className:"text-[#F59E0B]",fill:"#F59E0B"}),S.jsx("span",{className:"text-sm text-[#1E293B]",children:e.score})]}),S.jsx("p",{className:"text-xs text-[#64748B]",children:"Hayahay Score"})]}),S.jsxs("div",{className:"text-right",children:[S.jsxs("p",{className:"text-[#14B8A6]",children:["₱",e.price.toLocaleString()]}),S.jsx("p",{className:"text-[#64748B] text-xs",children:"per month"})]})]})]})]},e.id))})]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gd="181",$g=0,kp=1,Kg=2,Gm=1,Zg=2,Ii=3,wr=0,Dn=1,Fi=2,ki=0,ks=1,zp=2,Vp=3,Hp=4,Qg=5,Xr=100,Jg=101,ev=102,tv=103,nv=104,iv=200,rv=201,sv=202,av=203,td=204,nd=205,ov=206,lv=207,cv=208,uv=209,dv=210,fv=211,hv=212,pv=213,mv=214,id=0,rd=1,sd=2,Vs=3,ad=4,od=5,ld=6,cd=7,Wm=0,xv=1,gv=2,br=0,vv=1,_v=2,yv=3,Sv=4,Mv=5,Ev=6,bv=7,jm=300,Hs=301,Gs=302,Ll=303,ud=304,Il=306,dd=1e3,Oi=1001,fd=1002,Gn=1003,wv=1004,rl=1005,Jn=1006,Mu=1007,qr=1008,Vi=1009,Xm=1010,Ym=1011,ka=1012,Wd=1013,$r=1014,Bi=1015,Xs=1016,jd=1017,Xd=1018,za=1020,qm=35902,$m=35899,Km=1021,Zm=1022,ui=1023,Va=1026,Ha=1027,Qm=1028,Yd=1029,qd=1030,$d=1031,Kd=1033,Tl=33776,Al=33777,Cl=33778,Rl=33779,hd=35840,pd=35841,md=35842,xd=35843,gd=36196,vd=37492,_d=37496,yd=37808,Sd=37809,Md=37810,Ed=37811,bd=37812,wd=37813,Td=37814,Ad=37815,Cd=37816,Rd=37817,Nd=37818,Pd=37819,Ld=37820,Dd=37821,Ud=36492,Id=36494,Fd=36495,Od=36283,Bd=36284,kd=36285,zd=36286,Tv=3200,Av=3201,Cv=0,Rv=1,Mr="",Hn="srgb",Ws="srgb-linear",Dl="linear",Lt="srgb",Es=7680,Gp=519,Nv=512,Pv=513,Lv=514,Jm=515,Dv=516,Uv=517,Iv=518,Fv=519,Wp=35044,jp="300 es",vi=2e3,Ul=2001;function e0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ga(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ov(){const s=Ga("canvas");return s.style.display="block",s}const Xp={};function Yp(...s){const e="THREE."+s.shift();console.log(e,...s)}function ut(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Yt(...s){const e="THREE."+s.shift();console.error(e,...s)}function Wa(...s){const e=s.join(" ");e in Xp||(Xp[e]=!0,ut(...s))}function Bv(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}class Ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qp=1234567;const Oa=Math.PI/180,ja=180/Math.PI;function qs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[n&63|128]+vn[n>>8&255]+"-"+vn[n>>16&255]+vn[n>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function _t(s,e,n){return Math.max(e,Math.min(n,s))}function Zd(s,e){return(s%e+e)%e}function kv(s,e,n,r,o){return r+(s-e)*(o-r)/(n-e)}function zv(s,e,n){return s!==e?(n-s)/(e-s):0}function Ba(s,e,n){return(1-n)*s+n*e}function Vv(s,e,n,r){return Ba(s,e,1-Math.exp(-n*r))}function Hv(s,e=1){return e-Math.abs(Zd(s,e*2)-e)}function Gv(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function Wv(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function jv(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Xv(s,e){return s+Math.random()*(e-s)}function Yv(s){return s*(.5-Math.random())}function qv(s){s!==void 0&&(qp=s);let e=qp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $v(s){return s*Oa}function Kv(s){return s*ja}function Zv(s){return(s&s-1)===0&&s!==0}function Qv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Jv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function e_(s,e,n,r,o){const c=Math.cos,d=Math.sin,f=c(n/2),m=d(n/2),h=c((e+r)/2),x=d((e+r)/2),g=c((e-r)/2),_=d((e-r)/2),M=c((r-e)/2),w=d((r-e)/2);switch(o){case"XYX":s.set(f*x,m*g,m*_,f*h);break;case"YZY":s.set(m*_,f*x,m*g,f*h);break;case"ZXZ":s.set(m*g,m*_,f*x,f*h);break;case"XZX":s.set(f*x,m*w,m*M,f*h);break;case"YXY":s.set(m*M,f*x,m*w,f*h);break;case"ZYZ":s.set(m*w,m*M,f*x,f*h);break;default:ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Bs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const $p={DEG2RAD:Oa,RAD2DEG:ja,generateUUID:qs,clamp:_t,euclideanModulo:Zd,mapLinear:kv,inverseLerp:zv,lerp:Ba,damp:Vv,pingpong:Hv,smoothstep:Gv,smootherstep:Wv,randInt:jv,randFloat:Xv,randFloatSpread:Yv,seededRandom:qv,degToRad:$v,radToDeg:Kv,isPowerOfTwo:Zv,ceilPowerOfTwo:Qv,floorPowerOfTwo:Jv,setQuaternionFromProperEuler:e_,normalize:bn,denormalize:Bs};class Ut{constructor(e=0,n=0){Ut.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*o+e.x,this.y=c*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xa{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,d,f){let m=r[o+0],h=r[o+1],x=r[o+2],g=r[o+3],_=c[d+0],M=c[d+1],w=c[d+2],A=c[d+3];if(f<=0){e[n+0]=m,e[n+1]=h,e[n+2]=x,e[n+3]=g;return}if(f>=1){e[n+0]=_,e[n+1]=M,e[n+2]=w,e[n+3]=A;return}if(g!==A||m!==_||h!==M||x!==w){let y=m*_+h*M+x*w+g*A;y<0&&(_=-_,M=-M,w=-w,A=-A,y=-y);let v=1-f;if(y<.9995){const U=Math.acos(y),P=Math.sin(U);v=Math.sin(v*U)/P,f=Math.sin(f*U)/P,m=m*v+_*f,h=h*v+M*f,x=x*v+w*f,g=g*v+A*f}else{m=m*v+_*f,h=h*v+M*f,x=x*v+w*f,g=g*v+A*f;const U=1/Math.sqrt(m*m+h*h+x*x+g*g);m*=U,h*=U,x*=U,g*=U}}e[n]=m,e[n+1]=h,e[n+2]=x,e[n+3]=g}static multiplyQuaternionsFlat(e,n,r,o,c,d){const f=r[o],m=r[o+1],h=r[o+2],x=r[o+3],g=c[d],_=c[d+1],M=c[d+2],w=c[d+3];return e[n]=f*w+x*g+m*M-h*_,e[n+1]=m*w+x*_+h*g-f*M,e[n+2]=h*w+x*M+f*_-m*g,e[n+3]=x*w-f*g-m*_-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,d=e._order,f=Math.cos,m=Math.sin,h=f(r/2),x=f(o/2),g=f(c/2),_=m(r/2),M=m(o/2),w=m(c/2);switch(d){case"XYZ":this._x=_*x*g+h*M*w,this._y=h*M*g-_*x*w,this._z=h*x*w+_*M*g,this._w=h*x*g-_*M*w;break;case"YXZ":this._x=_*x*g+h*M*w,this._y=h*M*g-_*x*w,this._z=h*x*w-_*M*g,this._w=h*x*g+_*M*w;break;case"ZXY":this._x=_*x*g-h*M*w,this._y=h*M*g+_*x*w,this._z=h*x*w+_*M*g,this._w=h*x*g-_*M*w;break;case"ZYX":this._x=_*x*g-h*M*w,this._y=h*M*g+_*x*w,this._z=h*x*w-_*M*g,this._w=h*x*g+_*M*w;break;case"YZX":this._x=_*x*g+h*M*w,this._y=h*M*g+_*x*w,this._z=h*x*w-_*M*g,this._w=h*x*g-_*M*w;break;case"XZY":this._x=_*x*g-h*M*w,this._y=h*M*g-_*x*w,this._z=h*x*w+_*M*g,this._w=h*x*g+_*M*w;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],d=n[1],f=n[5],m=n[9],h=n[2],x=n[6],g=n[10],_=r+f+g;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(x-m)*M,this._y=(c-h)*M,this._z=(d-o)*M}else if(r>f&&r>g){const M=2*Math.sqrt(1+r-f-g);this._w=(x-m)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(c+h)/M}else if(f>g){const M=2*Math.sqrt(1+f-r-g);this._w=(c-h)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+g-r-f);this._w=(d-o)/M,this._x=(c+h)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,d=e._w,f=n._x,m=n._y,h=n._z,x=n._w;return this._x=r*x+d*f+o*h-c*m,this._y=o*x+d*m+c*f-r*h,this._z=c*x+d*h+r*m-o*f,this._w=d*x-r*f-o*m-c*h,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,c=e._z,d=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,c=-c,d=-d,f=-f);let m=1-n;if(f<.9995){const h=Math.acos(f),x=Math.sin(h);m=Math.sin(m*h)/x,n=Math.sin(n*h)/x,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+d*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+d*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,n=0,r=0){ce.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,d=e.y,f=e.z,m=e.w,h=2*(d*o-f*r),x=2*(f*n-c*o),g=2*(c*r-d*n);return this.x=n+m*h+d*g-f*x,this.y=r+m*x+f*h-c*g,this.z=o+m*g+c*x-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,d=n.x,f=n.y,m=n.z;return this.x=o*m-c*f,this.y=c*d-r*m,this.z=r*f-o*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eu=new ce,Kp=new Xa;class ht{constructor(e,n,r,o,c,d,f,m,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,m,h)}set(e,n,r,o,c,d,f,m,h){const x=this.elements;return x[0]=e,x[1]=o,x[2]=f,x[3]=n,x[4]=c,x[5]=m,x[6]=r,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[3],m=r[6],h=r[1],x=r[4],g=r[7],_=r[2],M=r[5],w=r[8],A=o[0],y=o[3],v=o[6],U=o[1],P=o[4],I=o[7],H=o[2],L=o[5],V=o[8];return c[0]=d*A+f*U+m*H,c[3]=d*y+f*P+m*L,c[6]=d*v+f*I+m*V,c[1]=h*A+x*U+g*H,c[4]=h*y+x*P+g*L,c[7]=h*v+x*I+g*V,c[2]=_*A+M*U+w*H,c[5]=_*y+M*P+w*L,c[8]=_*v+M*I+w*V,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],m=e[6],h=e[7],x=e[8];return n*d*x-n*f*h-r*c*x+r*f*m+o*c*h-o*d*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],m=e[6],h=e[7],x=e[8],g=x*d-f*h,_=f*m-x*c,M=h*c-d*m,w=n*g+r*_+o*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=g*A,e[1]=(o*h-x*r)*A,e[2]=(f*r-o*d)*A,e[3]=_*A,e[4]=(x*n-o*m)*A,e[5]=(o*c-f*n)*A,e[6]=M*A,e[7]=(r*m-h*n)*A,e[8]=(d*n-r*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,d,f){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*d+h*f)+d+e,-o*h,o*m,-o*(-h*d+m*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(bu.makeScale(e,n)),this}rotate(e){return this.premultiply(bu.makeRotation(-e)),this}translate(e,n){return this.premultiply(bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bu=new ht,Zp=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qp=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function t_(){const s={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(o,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Lt&&(o.r=zi(o.r),o.g=zi(o.g),o.b=zi(o.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Lt&&(o.r=zs(o.r),o.g=zs(o.g),o.b=zs(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Mr?Dl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,d){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Wa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Wa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ws]:{primaries:e,whitePoint:r,transfer:Dl,toXYZ:Zp,fromXYZ:Qp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:Zp,fromXYZ:Qp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),s}const bt=t_();function zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bs;class n_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{bs===void 0&&(bs=Ga("canvas")),bs.width=e.width,bs.height=e.height;const o=bs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=bs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ga("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=zi(c[d]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(zi(n[r]/255)*255):n[r]=zi(n[r]);return{data:n,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let i_=0;class Qd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=qs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?c.push(wu(o[d].image)):c.push(wu(o[d]))}else c=wu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function wu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?n_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let r_=0;const Tu=new ce;class yn extends Ys{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,r=Oi,o=Oi,c=Jn,d=qr,f=ui,m=Vi,h=yn.DEFAULT_ANISOTROPY,x=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=qs(),this.name="",this.source=new Qd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=m,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Tu).x}get height(){return this.source.getSize(Tu).y}get depth(){return this.source.getSize(Tu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ut(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ut(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dd:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dd:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=jm;yn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,n=0,r=0,o=1){qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*o+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*o+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*o+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*o+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const m=e.elements,h=m[0],x=m[4],g=m[8],_=m[1],M=m[5],w=m[9],A=m[2],y=m[6],v=m[10];if(Math.abs(x-_)<.01&&Math.abs(g-A)<.01&&Math.abs(w-y)<.01){if(Math.abs(x+_)<.1&&Math.abs(g+A)<.1&&Math.abs(w+y)<.1&&Math.abs(h+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(h+1)/2,I=(M+1)/2,H=(v+1)/2,L=(x+_)/4,V=(g+A)/4,Q=(w+y)/4;return P>I&&P>H?P<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(P),o=L/r,c=V/r):I>H?I<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(I),r=L/o,c=Q/o):H<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(H),r=V/c,o=Q/c),this.set(r,o,c,n),this}let U=Math.sqrt((y-w)*(y-w)+(g-A)*(g-A)+(_-x)*(_-x));return Math.abs(U)<.001&&(U=1),this.x=(y-w)/U,this.y=(g-A)/U,this.z=(_-x)/U,this.w=Math.acos((h+M+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this.w=_t(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this.w=_t(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class s_ extends Ys{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new qt(0,0,e,n),this.scissorTest=!1,this.viewport=new qt(0,0,e,n);const o={width:e,height:n,depth:r.depth},c=new yn(o);this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Qd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends s_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class t0 extends yn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class a_ extends yn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ya{constructor(e=new ce(1/0,1/0,1/0),n=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ai.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ai.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ai.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,ai):ai.fromBufferAttribute(c,d),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sl.copy(r.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const o=e.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),al.subVectors(this.max,Na),ws.subVectors(e.a,Na),Ts.subVectors(e.b,Na),As.subVectors(e.c,Na),mr.subVectors(Ts,ws),xr.subVectors(As,Ts),kr.subVectors(ws,As);let n=[0,-mr.z,mr.y,0,-xr.z,xr.y,0,-kr.z,kr.y,mr.z,0,-mr.x,xr.z,0,-xr.x,kr.z,0,-kr.x,-mr.y,mr.x,0,-xr.y,xr.x,0,-kr.y,kr.x,0];return!Au(n,ws,Ts,As,al)||(n=[1,0,0,0,1,0,0,0,1],!Au(n,ws,Ts,As,al))?!1:(ol.crossVectors(mr,xr),n=[ol.x,ol.y,ol.z],Au(n,ws,Ts,As,al))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],ai=new ce,sl=new Ya,ws=new ce,Ts=new ce,As=new ce,mr=new ce,xr=new ce,kr=new ce,Na=new ce,al=new ce,ol=new ce,zr=new ce;function Au(s,e,n,r,o){for(let c=0,d=s.length-3;c<=d;c+=3){zr.fromArray(s,c);const f=o.x*Math.abs(zr.x)+o.y*Math.abs(zr.y)+o.z*Math.abs(zr.z),m=e.dot(zr),h=n.dot(zr),x=r.dot(zr);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>f)return!1}return!0}const o_=new Ya,Pa=new ce,Cu=new ce;class Jd{constructor(e=new ce,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):o_.setFromPoints(e).getCenter(r);let o=0;for(let c=0,d=e.length;c<d;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const n=Pa.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Pa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(Cu)),this.expandByPoint(Pa.copy(e.center).sub(Cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ni=new ce,Ru=new ce,ll=new ce,gr=new ce,Nu=new ce,cl=new ce,Pu=new ce;class l_{constructor(e=new ce,n=new ce(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Ru.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),gr.copy(this.origin).sub(Ru);const c=e.distanceTo(n)*.5,d=-this.direction.dot(ll),f=gr.dot(this.direction),m=-gr.dot(ll),h=gr.lengthSq(),x=Math.abs(1-d*d);let g,_,M,w;if(x>0)if(g=d*m-f,_=d*f-m,w=c*x,g>=0)if(_>=-w)if(_<=w){const A=1/x;g*=A,_*=A,M=g*(g+d*_+2*f)+_*(d*g+_+2*m)+h}else _=c,g=Math.max(0,-(d*_+f)),M=-g*g+_*(_+2*m)+h;else _=-c,g=Math.max(0,-(d*_+f)),M=-g*g+_*(_+2*m)+h;else _<=-w?(g=Math.max(0,-(-d*c+f)),_=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+_*(_+2*m)+h):_<=w?(g=0,_=Math.min(Math.max(-c,-m),c),M=_*(_+2*m)+h):(g=Math.max(0,-(d*c+f)),_=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+_*(_+2*m)+h);else _=d>0?-c:c,g=Math.max(0,-(d*_+f)),M=-g*g+_*(_+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Ru).addScaledVector(ll,_),M}intersectSphere(e,n){Ni.subVectors(e.center,this.origin);const r=Ni.dot(this.direction),o=Ni.dot(Ni)-r*r,c=e.radius*e.radius;if(o>c)return null;const d=Math.sqrt(c-o),f=r-d,m=r+d;return m<0?null:f<0?this.at(m,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,d,f,m;const h=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(r=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(r=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),x>=0?(c=(e.min.y-_.y)*x,d=(e.max.y-_.y)*x):(c=(e.max.y-_.y)*x,d=(e.min.y-_.y)*x),r>d||c>o||((c>r||isNaN(r))&&(r=c),(d<o||isNaN(o))&&(o=d),g>=0?(f=(e.min.z-_.z)*g,m=(e.max.z-_.z)*g):(f=(e.max.z-_.z)*g,m=(e.min.z-_.z)*g),r>m||f>o)||((f>r||r!==r)&&(r=f),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,r,o,c){Nu.subVectors(n,e),cl.subVectors(r,e),Pu.crossVectors(Nu,cl);let d=this.direction.dot(Pu),f;if(d>0){if(o)return null;f=1}else if(d<0)f=-1,d=-d;else return null;gr.subVectors(this.origin,e);const m=f*this.direction.dot(cl.crossVectors(gr,cl));if(m<0)return null;const h=f*this.direction.dot(Nu.cross(gr));if(h<0||m+h>d)return null;const x=-f*gr.dot(Pu);return x<0?null:this.at(x/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,n,r,o,c,d,f,m,h,x,g,_,M,w,A,y){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,m,h,x,g,_,M,w,A,y)}set(e,n,r,o,c,d,f,m,h,x,g,_,M,w,A,y){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=c,v[5]=d,v[9]=f,v[13]=m,v[2]=h,v[6]=x,v[10]=g,v[14]=_,v[3]=M,v[7]=w,v[11]=A,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Cs.setFromMatrixColumn(e,0).length(),c=1/Cs.setFromMatrixColumn(e,1).length(),d=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),m=Math.cos(o),h=Math.sin(o),x=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const _=d*x,M=d*g,w=f*x,A=f*g;n[0]=m*x,n[4]=-m*g,n[8]=h,n[1]=M+w*h,n[5]=_-A*h,n[9]=-f*m,n[2]=A-_*h,n[6]=w+M*h,n[10]=d*m}else if(e.order==="YXZ"){const _=m*x,M=m*g,w=h*x,A=h*g;n[0]=_+A*f,n[4]=w*f-M,n[8]=d*h,n[1]=d*g,n[5]=d*x,n[9]=-f,n[2]=M*f-w,n[6]=A+_*f,n[10]=d*m}else if(e.order==="ZXY"){const _=m*x,M=m*g,w=h*x,A=h*g;n[0]=_-A*f,n[4]=-d*g,n[8]=w+M*f,n[1]=M+w*f,n[5]=d*x,n[9]=A-_*f,n[2]=-d*h,n[6]=f,n[10]=d*m}else if(e.order==="ZYX"){const _=d*x,M=d*g,w=f*x,A=f*g;n[0]=m*x,n[4]=w*h-M,n[8]=_*h+A,n[1]=m*g,n[5]=A*h+_,n[9]=M*h-w,n[2]=-h,n[6]=f*m,n[10]=d*m}else if(e.order==="YZX"){const _=d*m,M=d*h,w=f*m,A=f*h;n[0]=m*x,n[4]=A-_*g,n[8]=w*g+M,n[1]=g,n[5]=d*x,n[9]=-f*x,n[2]=-h*x,n[6]=M*g+w,n[10]=_-A*g}else if(e.order==="XZY"){const _=d*m,M=d*h,w=f*m,A=f*h;n[0]=m*x,n[4]=-g,n[8]=h*x,n[1]=_*g+A,n[5]=d*x,n[9]=M*g-w,n[2]=w*g-M,n[6]=f*x,n[10]=A*g+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c_,e,u_)}lookAt(e,n,r){const o=this.elements;return zn.subVectors(e,n),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),vr.crossVectors(r,zn),vr.lengthSq()===0&&(Math.abs(r.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),vr.crossVectors(r,zn)),vr.normalize(),ul.crossVectors(zn,vr),o[0]=vr.x,o[4]=ul.x,o[8]=zn.x,o[1]=vr.y,o[5]=ul.y,o[9]=zn.y,o[2]=vr.z,o[6]=ul.z,o[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[4],m=r[8],h=r[12],x=r[1],g=r[5],_=r[9],M=r[13],w=r[2],A=r[6],y=r[10],v=r[14],U=r[3],P=r[7],I=r[11],H=r[15],L=o[0],V=o[4],Q=o[8],R=o[12],C=o[1],G=o[5],J=o[9],ne=o[13],le=o[2],ae=o[6],de=o[10],fe=o[14],z=o[3],se=o[7],te=o[11],F=o[15];return c[0]=d*L+f*C+m*le+h*z,c[4]=d*V+f*G+m*ae+h*se,c[8]=d*Q+f*J+m*de+h*te,c[12]=d*R+f*ne+m*fe+h*F,c[1]=x*L+g*C+_*le+M*z,c[5]=x*V+g*G+_*ae+M*se,c[9]=x*Q+g*J+_*de+M*te,c[13]=x*R+g*ne+_*fe+M*F,c[2]=w*L+A*C+y*le+v*z,c[6]=w*V+A*G+y*ae+v*se,c[10]=w*Q+A*J+y*de+v*te,c[14]=w*R+A*ne+y*fe+v*F,c[3]=U*L+P*C+I*le+H*z,c[7]=U*V+P*G+I*ae+H*se,c[11]=U*Q+P*J+I*de+H*te,c[15]=U*R+P*ne+I*fe+H*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],d=e[1],f=e[5],m=e[9],h=e[13],x=e[2],g=e[6],_=e[10],M=e[14],w=e[3],A=e[7],y=e[11],v=e[15];return w*(+c*m*g-o*h*g-c*f*_+r*h*_+o*f*M-r*m*M)+A*(+n*m*M-n*h*_+c*d*_-o*d*M+o*h*x-c*m*x)+y*(+n*h*g-n*f*M-c*d*g+r*d*M+c*f*x-r*h*x)+v*(-o*f*x-n*m*g+n*f*_+o*d*g-r*d*_+r*m*x)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],m=e[6],h=e[7],x=e[8],g=e[9],_=e[10],M=e[11],w=e[12],A=e[13],y=e[14],v=e[15],U=g*y*h-A*_*h+A*m*M-f*y*M-g*m*v+f*_*v,P=w*_*h-x*y*h-w*m*M+d*y*M+x*m*v-d*_*v,I=x*A*h-w*g*h+w*f*M-d*A*M-x*f*v+d*g*v,H=w*g*m-x*A*m-w*f*_+d*A*_+x*f*y-d*g*y,L=n*U+r*P+o*I+c*H;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/L;return e[0]=U*V,e[1]=(A*_*c-g*y*c-A*o*M+r*y*M+g*o*v-r*_*v)*V,e[2]=(f*y*c-A*m*c+A*o*h-r*y*h-f*o*v+r*m*v)*V,e[3]=(g*m*c-f*_*c-g*o*h+r*_*h+f*o*M-r*m*M)*V,e[4]=P*V,e[5]=(x*y*c-w*_*c+w*o*M-n*y*M-x*o*v+n*_*v)*V,e[6]=(w*m*c-d*y*c-w*o*h+n*y*h+d*o*v-n*m*v)*V,e[7]=(d*_*c-x*m*c+x*o*h-n*_*h-d*o*M+n*m*M)*V,e[8]=I*V,e[9]=(w*g*c-x*A*c-w*r*M+n*A*M+x*r*v-n*g*v)*V,e[10]=(d*A*c-w*f*c+w*r*h-n*A*h-d*r*v+n*f*v)*V,e[11]=(x*f*c-d*g*c-x*r*h+n*g*h+d*r*M-n*f*M)*V,e[12]=H*V,e[13]=(x*A*o-w*g*o+w*r*_-n*A*_-x*r*y+n*g*y)*V,e[14]=(w*f*o-d*A*o-w*r*m+n*A*m+d*r*y-n*f*y)*V,e[15]=(d*g*o-x*f*o+x*r*m-n*g*m-d*r*_+n*f*_)*V,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,d=e.x,f=e.y,m=e.z,h=c*d,x=c*f;return this.set(h*d+r,h*f-o*m,h*m+o*f,0,h*f+o*m,x*f+r,x*m-o*d,0,h*m-o*f,x*m+o*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,d){return this.set(1,r,c,0,e,1,d,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,d=n._y,f=n._z,m=n._w,h=c+c,x=d+d,g=f+f,_=c*h,M=c*x,w=c*g,A=d*x,y=d*g,v=f*g,U=m*h,P=m*x,I=m*g,H=r.x,L=r.y,V=r.z;return o[0]=(1-(A+v))*H,o[1]=(M+I)*H,o[2]=(w-P)*H,o[3]=0,o[4]=(M-I)*L,o[5]=(1-(_+v))*L,o[6]=(y+U)*L,o[7]=0,o[8]=(w+P)*V,o[9]=(y-U)*V,o[10]=(1-(_+A))*V,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=Cs.set(o[0],o[1],o[2]).length();const d=Cs.set(o[4],o[5],o[6]).length(),f=Cs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],oi.copy(this);const h=1/c,x=1/d,g=1/f;return oi.elements[0]*=h,oi.elements[1]*=h,oi.elements[2]*=h,oi.elements[4]*=x,oi.elements[5]*=x,oi.elements[6]*=x,oi.elements[8]*=g,oi.elements[9]*=g,oi.elements[10]*=g,n.setFromRotationMatrix(oi),r.x=c,r.y=d,r.z=f,this}makePerspective(e,n,r,o,c,d,f=vi,m=!1){const h=this.elements,x=2*c/(n-e),g=2*c/(r-o),_=(n+e)/(n-e),M=(r+o)/(r-o);let w,A;if(m)w=c/(d-c),A=d*c/(d-c);else if(f===vi)w=-(d+c)/(d-c),A=-2*d*c/(d-c);else if(f===Ul)w=-d/(d-c),A=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=x,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=g,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=w,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,c,d,f=vi,m=!1){const h=this.elements,x=2/(n-e),g=2/(r-o),_=-(n+e)/(n-e),M=-(r+o)/(r-o);let w,A;if(m)w=1/(d-c),A=d/(d-c);else if(f===vi)w=-2/(d-c),A=-(d+c)/(d-c);else if(f===Ul)w=-1/(d-c),A=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=x,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=g,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=w,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Cs=new ce,oi=new nn,c_=new ce(0,0,0),u_=new ce(1,1,1),vr=new ce,ul=new ce,zn=new ce,Jp=new nn,em=new Xa;class Hi{constructor(e=0,n=0,r=0,o=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],d=o[4],f=o[8],m=o[1],h=o[5],x=o[9],g=o[2],_=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(_t(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(_t(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-x,M),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return em.setFromEuler(this),this.setFromQuaternion(em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class n0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let d_=0;const tm=new ce,Rs=new Xa,Pi=new nn,dl=new ce,La=new ce,f_=new ce,h_=new Xa,nm=new ce(1,0,0),im=new ce(0,1,0),rm=new ce(0,0,1),sm={type:"added"},p_={type:"removed"},Ns={type:"childadded",child:null},Lu={type:"childremoved",child:null};class Wn extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new ce,n=new Hi,r=new Xa,o=new ce(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new nn},normalMatrix:{value:new ht}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new n0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(nm,e)}rotateY(e){return this.rotateOnAxis(im,e)}rotateZ(e){return this.rotateOnAxis(rm,e)}translateOnAxis(e,n){return tm.copy(e).applyQuaternion(this.quaternion),this.position.add(tm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(nm,e)}translateY(e){return this.translateOnAxis(im,e)}translateZ(e){return this.translateOnAxis(rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?dl.copy(e):dl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(La,dl,this.up):Pi.lookAt(dl,La,this.up),this.quaternion.setFromRotationMatrix(Pi),o&&(Pi.extractRotation(o.matrixWorld),Rs.setFromRotationMatrix(Pi),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Yt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(p_),Lu.child=e,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sm),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,f_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,h_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const g=m[h];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,h=this.material.length;m<h;m++)f.push(c(e.materials,this.material[m]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];o.animations.push(c(e.animations,m))}}if(n){const f=d(e.geometries),m=d(e.materials),h=d(e.textures),x=d(e.images),g=d(e.shapes),_=d(e.skeletons),M=d(e.animations),w=d(e.nodes);f.length>0&&(r.geometries=f),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),x.length>0&&(r.images=x),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=o,r;function d(f){const m=[];for(const h in f){const x=f[h];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Wn.DEFAULT_UP=new ce(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new ce,Li=new ce,Du=new ce,Di=new ce,Ps=new ce,Ls=new ce,am=new ce,Uu=new ce,Iu=new ce,Fu=new ce,Ou=new qt,Bu=new qt,ku=new qt;class ci{constructor(e=new ce,n=new ce,r=new ce){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),li.subVectors(e,n),o.cross(li);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){li.subVectors(o,n),Li.subVectors(r,n),Du.subVectors(e,n);const d=li.dot(li),f=li.dot(Li),m=li.dot(Du),h=Li.dot(Li),x=Li.dot(Du),g=d*h-f*f;if(g===0)return c.set(0,0,0),null;const _=1/g,M=(h*m-f*x)*_,w=(d*x-f*m)*_;return c.set(1-M-w,w,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,r,o,c,d,f,m){return this.getBarycoord(e,n,r,o,Di)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Di.x),m.addScaledVector(d,Di.y),m.addScaledVector(f,Di.z),m)}static getInterpolatedAttribute(e,n,r,o,c,d){return Ou.setScalar(0),Bu.setScalar(0),ku.setScalar(0),Ou.fromBufferAttribute(e,n),Bu.fromBufferAttribute(e,r),ku.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(Ou,c.x),d.addScaledVector(Bu,c.y),d.addScaledVector(ku,c.z),d}static isFrontFacing(e,n,r,o){return li.subVectors(r,n),Li.subVectors(e,n),li.cross(Li).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),li.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return ci.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let d,f;Ps.subVectors(o,r),Ls.subVectors(c,r),Uu.subVectors(e,r);const m=Ps.dot(Uu),h=Ls.dot(Uu);if(m<=0&&h<=0)return n.copy(r);Iu.subVectors(e,o);const x=Ps.dot(Iu),g=Ls.dot(Iu);if(x>=0&&g<=x)return n.copy(o);const _=m*g-x*h;if(_<=0&&m>=0&&x<=0)return d=m/(m-x),n.copy(r).addScaledVector(Ps,d);Fu.subVectors(e,c);const M=Ps.dot(Fu),w=Ls.dot(Fu);if(w>=0&&M<=w)return n.copy(c);const A=M*h-m*w;if(A<=0&&h>=0&&w<=0)return f=h/(h-w),n.copy(r).addScaledVector(Ls,f);const y=x*w-M*g;if(y<=0&&g-x>=0&&M-w>=0)return am.subVectors(c,o),f=(g-x)/(g-x+(M-w)),n.copy(o).addScaledVector(am,f);const v=1/(y+A+_);return d=A*v,f=_*v,n.copy(r).addScaledVector(Ps,d).addScaledVector(Ls,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const i0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},fl={h:0,s:0,l:0};function zu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Dt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=bt.workingColorSpace){return this.r=e,this.g=n,this.b=r,bt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=bt.workingColorSpace){if(e=Zd(e,1),n=_t(n,0,1),r=_t(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=zu(d,c,e+1/3),this.g=zu(d,c,e),this.b=zu(d,c,e-1/3)}return bt.colorSpaceToWorking(this,o),this}setStyle(e,n=Hn){function r(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ut("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const r=i0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return bt.workingToColorSpace(_n.copy(this),e),Math.round(_t(_n.r*255,0,255))*65536+Math.round(_t(_n.g*255,0,255))*256+Math.round(_t(_n.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=bt.workingColorSpace){bt.workingToColorSpace(_n.copy(this),n);const r=_n.r,o=_n.g,c=_n.b,d=Math.max(r,o,c),f=Math.min(r,o,c);let m,h;const x=(f+d)/2;if(f===d)m=0,h=0;else{const g=d-f;switch(h=x<=.5?g/(d+f):g/(2-d-f),d){case r:m=(o-c)/g+(o<c?6:0);break;case o:m=(c-r)/g+2;break;case c:m=(r-o)/g+4;break}m/=6}return e.h=m,e.s=h,e.l=x,e}getRGB(e,n=bt.workingColorSpace){return bt.workingToColorSpace(_n.copy(this),n),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Hn){bt.workingToColorSpace(_n.copy(this),e);const n=_n.r,r=_n.g,o=_n.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+n,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(_r),e.getHSL(fl);const r=Ba(_r.h,fl.h,n),o=Ba(_r.s,fl.s,n),c=Ba(_r.l,fl.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Dt;Dt.NAMES=i0;let m_=0;class Fl extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=ks,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=td,this.blendDst=nd,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ut(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ut(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(r.blending=this.blending),this.side!==wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==td&&(r.blendSrc=this.blendSrc),this.blendDst!==nd&&(r.blendDst=this.blendDst),this.blendEquation!==Xr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const d=[];for(const f in c){const m=c[f];delete m.metadata,d.push(m)}return d}if(n){const c=o(e.textures),d=o(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ef extends Fl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Wm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new ce,hl=new Ut;let x_=0;class _i{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:x_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Wp,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix3(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Bs(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=bn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bs(n,this.array)),n}setX(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bs(n,this.array)),n}setY(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bs(n,this.array)),n}setW(e,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array),o=bn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=bn(n,this.array),r=bn(r,this.array),o=bn(o,this.array),c=bn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wp&&(e.usage=this.usage),e}}class r0 extends _i{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class s0 extends _i{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class yi extends _i{constructor(e,n,r){super(new Float32Array(e),n,r)}}let g_=0;const Zn=new nn,Vu=new Wn,Ds=new ce,Vn=new Ya,Da=new Ya,cn=new ce;class ji extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e0(e)?s0:r0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ht().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,r){return Zn.makeTranslation(e,n,r),this.applyMatrix4(Zn),this}scale(e,n,r){return Zn.makeScale(e,n,r),this.applyMatrix4(Zn),this}lookAt(e){return Vu.lookAt(e),Vu.updateMatrix(),this.applyMatrix4(Vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new yi(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Vn.setFromBufferAttribute(c),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const r=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const f=n[c];Da.setFromBufferAttribute(f),this.morphTargetsRelative?(cn.addVectors(Vn.min,Da.min),Vn.expandByPoint(cn),cn.addVectors(Vn.max,Da.max),Vn.expandByPoint(cn)):(Vn.expandByPoint(Da.min),Vn.expandByPoint(Da.max))}Vn.getCenter(r);let o=0;for(let c=0,d=e.count;c<d;c++)cn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(cn));if(n)for(let c=0,d=n.length;c<d;c++){const f=n[c],m=this.morphTargetsRelative;for(let h=0,x=f.count;h<x;h++)cn.fromBufferAttribute(f,h),m&&(Ds.fromBufferAttribute(e,h),cn.add(Ds)),o=Math.max(o,r.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],m=[];for(let Q=0;Q<r.count;Q++)f[Q]=new ce,m[Q]=new ce;const h=new ce,x=new ce,g=new ce,_=new Ut,M=new Ut,w=new Ut,A=new ce,y=new ce;function v(Q,R,C){h.fromBufferAttribute(r,Q),x.fromBufferAttribute(r,R),g.fromBufferAttribute(r,C),_.fromBufferAttribute(c,Q),M.fromBufferAttribute(c,R),w.fromBufferAttribute(c,C),x.sub(h),g.sub(h),M.sub(_),w.sub(_);const G=1/(M.x*w.y-w.x*M.y);isFinite(G)&&(A.copy(x).multiplyScalar(w.y).addScaledVector(g,-M.y).multiplyScalar(G),y.copy(g).multiplyScalar(M.x).addScaledVector(x,-w.x).multiplyScalar(G),f[Q].add(A),f[R].add(A),f[C].add(A),m[Q].add(y),m[R].add(y),m[C].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let Q=0,R=U.length;Q<R;++Q){const C=U[Q],G=C.start,J=C.count;for(let ne=G,le=G+J;ne<le;ne+=3)v(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const P=new ce,I=new ce,H=new ce,L=new ce;function V(Q){H.fromBufferAttribute(o,Q),L.copy(H);const R=f[Q];P.copy(R),P.sub(H.multiplyScalar(H.dot(R))).normalize(),I.crossVectors(L,R);const G=I.dot(m[Q])<0?-1:1;d.setXYZW(Q,P.x,P.y,P.z,G)}for(let Q=0,R=U.length;Q<R;++Q){const C=U[Q],G=C.start,J=C.count;for(let ne=G,le=G+J;ne<le;ne+=3)V(e.getX(ne+0)),V(e.getX(ne+1)),V(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _i(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const o=new ce,c=new ce,d=new ce,f=new ce,m=new ce,h=new ce,x=new ce,g=new ce;if(e)for(let _=0,M=e.count;_<M;_+=3){const w=e.getX(_+0),A=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(n,w),c.fromBufferAttribute(n,A),d.fromBufferAttribute(n,y),x.subVectors(d,c),g.subVectors(o,c),x.cross(g),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,A),h.fromBufferAttribute(r,y),f.add(x),m.add(x),h.add(x),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let _=0,M=n.count;_<M;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),d.fromBufferAttribute(n,_+2),x.subVectors(d,c),g.subVectors(o,c),x.cross(g),r.setXYZ(_+0,x.x,x.y,x.z),r.setXYZ(_+1,x.x,x.y,x.z),r.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)cn.fromBufferAttribute(e,n),cn.normalize(),e.setXYZ(n,cn.x,cn.y,cn.z)}toNonIndexed(){function e(f,m){const h=f.array,x=f.itemSize,g=f.normalized,_=new h.constructor(m.length*x);let M=0,w=0;for(let A=0,y=m.length;A<y;A++){f.isInterleavedBufferAttribute?M=m[A]*f.data.stride+f.offset:M=m[A]*x;for(let v=0;v<x;v++)_[w++]=h[M++]}return new _i(_,x,g)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ji,r=this.index.array,o=this.attributes;for(const f in o){const m=o[f],h=e(m,r);n.setAttribute(f,h)}const c=this.morphAttributes;for(const f in c){const m=[],h=c[f];for(let x=0,g=h.length;x<g;x++){const _=h[x],M=e(_,r);m.push(M)}n.morphAttributes[f]=m}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,m=d.length;f<m;f++){const h=d[f];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let g=0,_=h.length;g<_;g++){const M=h[g];x.push(M.toJSON(e.data))}x.length>0&&(o[m]=x,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const x=o[h];this.setAttribute(h,x.clone(n))}const c=e.morphAttributes;for(const h in c){const x=[],g=c[h];for(let _=0,M=g.length;_<M;_++)x.push(g[_].clone(n));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,x=d.length;h<x;h++){const g=d[h];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const om=new nn,Vr=new l_,pl=new Jd,lm=new ce,ml=new ce,xl=new ce,gl=new ce,Hu=new ce,vl=new ce,cm=new ce,_l=new ce;class Gi extends Wn{constructor(e=new ji,n=new ef){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){vl.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=f[m],g=c[m];x!==0&&(Hu.fromBufferAttribute(g,e),d?vl.addScaledVector(Hu,x):vl.addScaledVector(Hu.sub(n),x))}n.add(vl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(c),Vr.copy(e.ray).recast(e.near),!(pl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(pl,lm)===null||Vr.origin.distanceToSquared(lm)>(e.far-e.near)**2))&&(om.copy(c).invert(),Vr.copy(e.ray).applyMatrix4(om),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Vr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,d=this.material,f=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,_=c.groups,M=c.drawRange;if(f!==null)if(Array.isArray(d))for(let w=0,A=_.length;w<A;w++){const y=_[w],v=d[y.materialIndex],U=Math.max(y.start,M.start),P=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let I=U,H=P;I<H;I+=3){const L=f.getX(I),V=f.getX(I+1),Q=f.getX(I+2);o=yl(this,v,e,r,h,x,g,L,V,Q),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const w=Math.max(0,M.start),A=Math.min(f.count,M.start+M.count);for(let y=w,v=A;y<v;y+=3){const U=f.getX(y),P=f.getX(y+1),I=f.getX(y+2);o=yl(this,d,e,r,h,x,g,U,P,I),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(d))for(let w=0,A=_.length;w<A;w++){const y=_[w],v=d[y.materialIndex],U=Math.max(y.start,M.start),P=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let I=U,H=P;I<H;I+=3){const L=I,V=I+1,Q=I+2;o=yl(this,v,e,r,h,x,g,L,V,Q),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const w=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let y=w,v=A;y<v;y+=3){const U=y,P=y+1,I=y+2;o=yl(this,d,e,r,h,x,g,U,P,I),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function v_(s,e,n,r,o,c,d,f){let m;if(e.side===Dn?m=r.intersectTriangle(d,c,o,!0,f):m=r.intersectTriangle(o,c,d,e.side===wr,f),m===null)return null;_l.copy(f),_l.applyMatrix4(s.matrixWorld);const h=n.ray.origin.distanceTo(_l);return h<n.near||h>n.far?null:{distance:h,point:_l.clone(),object:s}}function yl(s,e,n,r,o,c,d,f,m,h){s.getVertexPosition(f,ml),s.getVertexPosition(m,xl),s.getVertexPosition(h,gl);const x=v_(s,e,n,r,ml,xl,gl,cm);if(x){const g=new ce;ci.getBarycoord(cm,ml,xl,gl,g),o&&(x.uv=ci.getInterpolatedAttribute(o,f,m,h,g,new Ut)),c&&(x.uv1=ci.getInterpolatedAttribute(c,f,m,h,g,new Ut)),d&&(x.normal=ci.getInterpolatedAttribute(d,f,m,h,g,new ce),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const _={a:f,b:m,c:h,normal:new ce,materialIndex:0};ci.getNormal(ml,xl,gl,_.normal),x.face=_,x.barycoord=g}return x}class qa extends ji{constructor(e=1,n=1,r=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:d};const f=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],x=[],g=[];let _=0,M=0;w("z","y","x",-1,-1,r,n,e,d,c,0),w("z","y","x",1,-1,r,n,-e,d,c,1),w("x","z","y",1,1,e,r,n,o,d,2),w("x","z","y",1,-1,e,r,-n,o,d,3),w("x","y","z",1,-1,e,n,r,o,c,4),w("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(m),this.setAttribute("position",new yi(h,3)),this.setAttribute("normal",new yi(x,3)),this.setAttribute("uv",new yi(g,2));function w(A,y,v,U,P,I,H,L,V,Q,R){const C=I/V,G=H/Q,J=I/2,ne=H/2,le=L/2,ae=V+1,de=Q+1;let fe=0,z=0;const se=new ce;for(let te=0;te<de;te++){const F=te*G-ne;for(let re=0;re<ae;re++){const De=re*C-J;se[A]=De*U,se[y]=F*P,se[v]=le,h.push(se.x,se.y,se.z),se[A]=0,se[y]=0,se[v]=L>0?1:-1,x.push(se.x,se.y,se.z),g.push(re/V),g.push(1-te/Q),fe+=1}}for(let te=0;te<Q;te++)for(let F=0;F<V;F++){const re=_+F+ae*te,De=_+F+ae*(te+1),Pe=_+(F+1)+ae*(te+1),He=_+(F+1)+ae*te;m.push(re,De,He),m.push(De,Pe,He),z+=6}f.addGroup(M,z,R),M+=z,_+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function wn(s){const e={};for(let n=0;n<s.length;n++){const r=js(s[n]);for(const o in r)e[o]=r[o]}return e}function __(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function a0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const y_={clone:js,merge:wn};var S_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Fl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S_,this.fragmentShader=M_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=__(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?n.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[o]={type:"m4",value:d.toArray()}:n.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class o0 extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new ce,um=new Ut,dm=new Ut;class Qn extends o0{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ja*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ja*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,n){return this.getViewBounds(e,um,dm),n.subVectors(dm,um)}setViewOffset(e,n,r,o,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Oa*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*o/m,n-=d.offsetY*r/h,o*=d.width/m,r*=d.height/h}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Us=-90,Is=1;class E_ extends Wn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Qn(Us,Is,e,n);o.layers=this.layers,this.add(o);const c=new Qn(Us,Is,e,n);c.layers=this.layers,this.add(c);const d=new Qn(Us,Is,e,n);d.layers=this.layers,this.add(d);const f=new Qn(Us,Is,e,n);f.layers=this.layers,this.add(f);const m=new Qn(Us,Is,e,n);m.layers=this.layers,this.add(m);const h=new Qn(Us,Is,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,d,f,m]=n;for(const h of n)this.remove(h);if(e===vi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ul)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,m,h,x]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,d),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,m),e.setRenderTarget(r,4,o),e.render(n,h),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(n,x),e.setRenderTarget(g,_,M),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class l0 extends yn{constructor(e=[],n=Hs,r,o,c,d,f,m,h,x){super(e,n,r,o,c,d,f,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class b_ extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new l0(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new qa(5,5,5),c=new Wi({name:"CubemapFromEquirect",uniforms:js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:ki});c.uniforms.tEquirect.value=n;const d=new Gi(o,c),f=n.minFilter;return n.minFilter===qr&&(n.minFilter=Jn),new E_(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,o);e.setRenderTarget(c)}}class Sl extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const w_={type:"move"};class Gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,d=null;const f=this._targetRay,m=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const A of e.hand.values()){const y=n.getJointPose(A,r),v=this._getHandJoint(h,A);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const x=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=x.position.distanceTo(g.position),M=.02,w=.005;h.inputState.pinching&&_>M+w?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=M-w&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(w_)))}return f!==null&&(f.visible=o!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Sl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class T_ extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class A_ extends yn{constructor(e=null,n=1,r=1,o,c,d,f,m,h=Gn,x=Gn,g,_){super(null,d,f,m,h,x,o,c,g,_),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wu=new ce,C_=new ce,R_=new ht;class jr{constructor(e=new ce(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Wu.subVectors(r,n).cross(C_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Wu),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||R_.getNormalMatrix(e),o=this.coplanarPoint(Wu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new Jd,N_=new Ut(.5,.5),Ml=new ce;class c0{constructor(e=new jr,n=new jr,r=new jr,o=new jr,c=new jr,d=new jr){this.planes=[e,n,r,o,c,d]}set(e,n,r,o,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=vi,r=!1){const o=this.planes,c=e.elements,d=c[0],f=c[1],m=c[2],h=c[3],x=c[4],g=c[5],_=c[6],M=c[7],w=c[8],A=c[9],y=c[10],v=c[11],U=c[12],P=c[13],I=c[14],H=c[15];if(o[0].setComponents(h-d,M-x,v-w,H-U).normalize(),o[1].setComponents(h+d,M+x,v+w,H+U).normalize(),o[2].setComponents(h+f,M+g,v+A,H+P).normalize(),o[3].setComponents(h-f,M-g,v-A,H-P).normalize(),r)o[4].setComponents(m,_,y,I).normalize(),o[5].setComponents(h-m,M-_,v-y,H-I).normalize();else if(o[4].setComponents(h-m,M-_,v-y,H-I).normalize(),n===vi)o[5].setComponents(h+m,M+_,v+y,H+I).normalize();else if(n===Ul)o[5].setComponents(m,_,y,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const n=N_.distanceTo(e.center);return Hr.radius=.7071067811865476+n,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Ml.x=o.normal.x>0?e.max.x:e.min.x,Ml.y=o.normal.y>0?e.max.y:e.min.y,Ml.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class u0 extends yn{constructor(e,n,r=$r,o,c,d,f=Gn,m=Gn,h,x=Va,g=1){if(x!==Va&&x!==Ha)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:n,depth:g};super(_,o,c,d,f,m,x,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class d0 extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ol extends ji{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,d=n/2,f=Math.floor(r),m=Math.floor(o),h=f+1,x=m+1,g=e/f,_=n/m,M=[],w=[],A=[],y=[];for(let v=0;v<x;v++){const U=v*_-d;for(let P=0;P<h;P++){const I=P*g-c;w.push(I,-U,0),A.push(0,0,1),y.push(P/f),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let U=0;U<f;U++){const P=U+h*v,I=U+h*(v+1),H=U+1+h*(v+1),L=U+1+h*v;M.push(P,I,L),M.push(I,H,L)}this.setIndex(M),this.setAttribute("position",new yi(w,3)),this.setAttribute("normal",new yi(A,3)),this.setAttribute("uv",new yi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.width,e.height,e.widthSegments,e.heightSegments)}}class tf extends ji{constructor(e=1,n=32,r=16,o=0,c=Math.PI*2,d=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:c,thetaStart:d,thetaLength:f},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const m=Math.min(d+f,Math.PI);let h=0;const x=[],g=new ce,_=new ce,M=[],w=[],A=[],y=[];for(let v=0;v<=r;v++){const U=[],P=v/r;let I=0;v===0&&d===0?I=.5/n:v===r&&m===Math.PI&&(I=-.5/n);for(let H=0;H<=n;H++){const L=H/n;g.x=-e*Math.cos(o+L*c)*Math.sin(d+P*f),g.y=e*Math.cos(d+P*f),g.z=e*Math.sin(o+L*c)*Math.sin(d+P*f),w.push(g.x,g.y,g.z),_.copy(g).normalize(),A.push(_.x,_.y,_.z),y.push(L+I,1-P),U.push(h++)}x.push(U)}for(let v=0;v<r;v++)for(let U=0;U<n;U++){const P=x[v][U+1],I=x[v][U],H=x[v+1][U],L=x[v+1][U+1];(v!==0||d>0)&&M.push(P,I,L),(v!==r-1||m<Math.PI)&&M.push(I,H,L)}this.setIndex(M),this.setAttribute("position",new yi(w,3)),this.setAttribute("normal",new yi(A,3)),this.setAttribute("uv",new yi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class P_ extends Fl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class L_ extends Fl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ju={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class D_{constructor(e,n,r){const o=this;let c=!1,d=0,f=0,m;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this._abortController=null,this.itemStart=function(x){f++,c===!1&&o.onStart!==void 0&&o.onStart(x,d,f),c=!0},this.itemEnd=function(x){d++,o.onProgress!==void 0&&o.onProgress(x,d,f),d===f&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(x){o.onError!==void 0&&o.onError(x)},this.resolveURL=function(x){return m?m(x):x},this.setURLModifier=function(x){return m=x,this},this.addHandler=function(x,g){return h.push(x,g),this},this.removeHandler=function(x){const g=h.indexOf(x);return g!==-1&&h.splice(g,2),this},this.getHandler=function(x){for(let g=0,_=h.length;g<_;g+=2){const M=h[g],w=h[g+1];if(M.global&&(M.lastIndex=0),M.test(x))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const U_=new D_;class nf{constructor(e){this.manager=e!==void 0?e:U_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(o,c){r.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}nf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fs=new WeakMap;class I_ extends nf{constructor(e){super(e)}load(e,n,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,d=ju.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(d),c.manager.itemEnd(e)},0);else{let g=Fs.get(d);g===void 0&&(g=[],Fs.set(d,g)),g.push({onLoad:n,onError:o})}return d}const f=Ga("img");function m(){x(),n&&n(this);const g=Fs.get(this)||[];for(let _=0;_<g.length;_++){const M=g[_];M.onLoad&&M.onLoad(this)}Fs.delete(this),c.manager.itemEnd(e)}function h(g){x(),o&&o(g),ju.remove(`image:${e}`);const _=Fs.get(this)||[];for(let M=0;M<_.length;M++){const w=_[M];w.onError&&w.onError(g)}Fs.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function x(){f.removeEventListener("load",m,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",m,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),ju.add(`image:${e}`,f),c.manager.itemStart(e),f.src=e,f}}class F_ extends nf{constructor(e){super(e)}load(e,n,r,o){const c=new yn,d=new I_(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(f){c.image=f,c.needsUpdate=!0,n!==void 0&&n(c)},r,o),c}}class O_ extends o0{constructor(e=-1,n=1,r=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,f-=x*this.view.offsetY,m=f-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class B_ extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function fm(s,e,n,r){const o=k_(r);switch(n){case Km:return s*e;case Qm:return s*e/o.components*o.byteLength;case Yd:return s*e/o.components*o.byteLength;case qd:return s*e*2/o.components*o.byteLength;case $d:return s*e*2/o.components*o.byteLength;case Zm:return s*e*3/o.components*o.byteLength;case ui:return s*e*4/o.components*o.byteLength;case Kd:return s*e*4/o.components*o.byteLength;case Tl:case Al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cl:case Rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pd:case xd:return Math.max(s,16)*Math.max(e,8)/4;case hd:case md:return Math.max(s,8)*Math.max(e,8)/2;case gd:case vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Md:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case bd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case wd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Td:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Cd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Pd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ld:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Dd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ud:case Id:case Fd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Od:case Bd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case kd:case zd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function k_(s){switch(s){case Vi:case Xm:return{byteLength:1,components:1};case ka:case Ym:case Xs:return{byteLength:2,components:1};case jd:case Xd:return{byteLength:2,components:4};case $r:case Wd:case Bi:return{byteLength:4,components:1};case qm:case $m:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function f0(){let s=null,e=!1,n=null,r=null;function o(c,d){n(c,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function z_(s){const e=new WeakMap;function n(f,m){const h=f.array,x=f.usage,g=h.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,h,x),f.onUploadCallback();let M;if(h instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=s.SHORT;else if(h instanceof Uint32Array)M=s.UNSIGNED_INT;else if(h instanceof Int32Array)M=s.INT;else if(h instanceof Int8Array)M=s.BYTE;else if(h instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function r(f,m,h){const x=m.array,g=m.updateRanges;if(s.bindBuffer(h,f),g.length===0)s.bufferSubData(h,0,x);else{g.sort((M,w)=>M.start-w.start);let _=0;for(let M=1;M<g.length;M++){const w=g[_],A=g[M];A.start<=w.start+w.count+1?w.count=Math.max(w.count,A.start+A.count-w.start):(++_,g[_]=A)}g.length=_+1;for(let M=0,w=g.length;M<w;M++){const A=g[M];s.bufferSubData(h,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(s.deleteBuffer(m.buffer),e.delete(f))}function d(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,n(f,m));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,m),h.version=f.version}}return{get:o,remove:c,update:d}}var V_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,H_=`#ifdef USE_ALPHAHASH
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
#endif`,G_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y_=`#ifdef USE_AOMAP
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
#endif`,q_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$_=`#ifdef USE_BATCHING
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
#endif`,K_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ey=`#ifdef USE_IRIDESCENCE
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
#endif`,ty=`#ifdef USE_BUMPMAP
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
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ay=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uy=`#define PI 3.141592653589793
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
} // validated`,dy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fy=`vec3 transformedNormal = objectNormal;
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
#endif`,hy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,py=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,my=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",vy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_y=`#ifdef USE_ENVMAP
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
#endif`,yy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
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
#endif`,My=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
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
#endif`,by=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ty=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ay=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cy=`#ifdef USE_GRADIENTMAP
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
}`,Ry=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ly=`uniform bool receiveShadow;
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
#endif`,Dy=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Uy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,By=`PhysicalMaterial material;
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
#endif`,ky=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,zy=`
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
#endif`,Vy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$y=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ky=`#if defined( USE_POINTS_UV )
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
#endif`,Zy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n1=`#ifdef USE_MORPHTARGETS
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
#endif`,i1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c1=`#ifdef USE_NORMALMAP
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
#endif`,u1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,x1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,v1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,E1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w1=`float getShadowMask() {
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
}`,T1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A1=`#ifdef USE_SKINNING
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
#endif`,C1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R1=`#ifdef USE_SKINNING
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
#endif`,N1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U1=`#ifdef USE_TRANSMISSION
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
#endif`,I1=`#ifdef USE_TRANSMISSION
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
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V1=`uniform sampler2D t2D;
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
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X1=`#include <common>
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
}`,Y1=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,q1=`#define DISTANCE
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
}`,$1=`#define DISTANCE
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
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`uniform float scale;
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
}`,J1=`uniform vec3 diffuse;
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
}`,eS=`#include <common>
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
}`,tS=`uniform vec3 diffuse;
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
}`,nS=`#define LAMBERT
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
}`,iS=`#define LAMBERT
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
}`,rS=`#define MATCAP
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
}`,sS=`#define MATCAP
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
}`,aS=`#define NORMAL
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
}`,oS=`#define NORMAL
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
}`,lS=`#define PHONG
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
}`,cS=`#define PHONG
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
}`,uS=`#define STANDARD
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
}`,dS=`#define STANDARD
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
}`,fS=`#define TOON
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
}`,hS=`#define TOON
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
}`,pS=`uniform float size;
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
}`,mS=`uniform vec3 diffuse;
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
}`,xS=`#include <common>
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
}`,gS=`uniform vec3 color;
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
}`,vS=`uniform float rotation;
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
}`,_S=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:V_,alphahash_pars_fragment:H_,alphamap_fragment:G_,alphamap_pars_fragment:W_,alphatest_fragment:j_,alphatest_pars_fragment:X_,aomap_fragment:Y_,aomap_pars_fragment:q_,batching_pars_vertex:$_,batching_vertex:K_,begin_vertex:Z_,beginnormal_vertex:Q_,bsdfs:J_,iridescence_fragment:ey,bumpmap_pars_fragment:ty,clipping_planes_fragment:ny,clipping_planes_pars_fragment:iy,clipping_planes_pars_vertex:ry,clipping_planes_vertex:sy,color_fragment:ay,color_pars_fragment:oy,color_pars_vertex:ly,color_vertex:cy,common:uy,cube_uv_reflection_fragment:dy,defaultnormal_vertex:fy,displacementmap_pars_vertex:hy,displacementmap_vertex:py,emissivemap_fragment:my,emissivemap_pars_fragment:xy,colorspace_fragment:gy,colorspace_pars_fragment:vy,envmap_fragment:_y,envmap_common_pars_fragment:yy,envmap_pars_fragment:Sy,envmap_pars_vertex:My,envmap_physical_pars_fragment:Dy,envmap_vertex:Ey,fog_vertex:by,fog_pars_vertex:wy,fog_fragment:Ty,fog_pars_fragment:Ay,gradientmap_pars_fragment:Cy,lightmap_pars_fragment:Ry,lights_lambert_fragment:Ny,lights_lambert_pars_fragment:Py,lights_pars_begin:Ly,lights_toon_fragment:Uy,lights_toon_pars_fragment:Iy,lights_phong_fragment:Fy,lights_phong_pars_fragment:Oy,lights_physical_fragment:By,lights_physical_pars_fragment:ky,lights_fragment_begin:zy,lights_fragment_maps:Vy,lights_fragment_end:Hy,logdepthbuf_fragment:Gy,logdepthbuf_pars_fragment:Wy,logdepthbuf_pars_vertex:jy,logdepthbuf_vertex:Xy,map_fragment:Yy,map_pars_fragment:qy,map_particle_fragment:$y,map_particle_pars_fragment:Ky,metalnessmap_fragment:Zy,metalnessmap_pars_fragment:Qy,morphinstance_vertex:Jy,morphcolor_vertex:e1,morphnormal_vertex:t1,morphtarget_pars_vertex:n1,morphtarget_vertex:i1,normal_fragment_begin:r1,normal_fragment_maps:s1,normal_pars_fragment:a1,normal_pars_vertex:o1,normal_vertex:l1,normalmap_pars_fragment:c1,clearcoat_normal_fragment_begin:u1,clearcoat_normal_fragment_maps:d1,clearcoat_pars_fragment:f1,iridescence_pars_fragment:h1,opaque_fragment:p1,packing:m1,premultiplied_alpha_fragment:x1,project_vertex:g1,dithering_fragment:v1,dithering_pars_fragment:_1,roughnessmap_fragment:y1,roughnessmap_pars_fragment:S1,shadowmap_pars_fragment:M1,shadowmap_pars_vertex:E1,shadowmap_vertex:b1,shadowmask_pars_fragment:w1,skinbase_vertex:T1,skinning_pars_vertex:A1,skinning_vertex:C1,skinnormal_vertex:R1,specularmap_fragment:N1,specularmap_pars_fragment:P1,tonemapping_fragment:L1,tonemapping_pars_fragment:D1,transmission_fragment:U1,transmission_pars_fragment:I1,uv_pars_fragment:F1,uv_pars_vertex:O1,uv_vertex:B1,worldpos_vertex:k1,background_vert:z1,background_frag:V1,backgroundCube_vert:H1,backgroundCube_frag:G1,cube_vert:W1,cube_frag:j1,depth_vert:X1,depth_frag:Y1,distanceRGBA_vert:q1,distanceRGBA_frag:$1,equirect_vert:K1,equirect_frag:Z1,linedashed_vert:Q1,linedashed_frag:J1,meshbasic_vert:eS,meshbasic_frag:tS,meshlambert_vert:nS,meshlambert_frag:iS,meshmatcap_vert:rS,meshmatcap_frag:sS,meshnormal_vert:aS,meshnormal_frag:oS,meshphong_vert:lS,meshphong_frag:cS,meshphysical_vert:uS,meshphysical_frag:dS,meshtoon_vert:fS,meshtoon_frag:hS,points_vert:pS,points_frag:mS,shadow_vert:xS,shadow_frag:gS,sprite_vert:vS,sprite_frag:_S},Ne={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},gi={basic:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Dt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:wn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:wn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:wn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Dt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:wn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:wn([Ne.points,Ne.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:wn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:wn([Ne.common,Ne.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:wn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:wn([Ne.sprite,Ne.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:wn([Ne.common,Ne.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:wn([Ne.lights,Ne.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};gi.physical={uniforms:wn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const El={r:0,b:0,g:0},Gr=new Hi,yS=new nn;function SS(s,e,n,r,o,c,d){const f=new Dt(0);let m=c===!0?0:1,h,x,g=null,_=0,M=null;function w(P){let I=P.isScene===!0?P.background:null;return I&&I.isTexture&&(I=(P.backgroundBlurriness>0?n:e).get(I)),I}function A(P){let I=!1;const H=w(P);H===null?v(f,m):H&&H.isColor&&(v(H,1),I=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,d):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||I)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(P,I){const H=w(I);H&&(H.isCubeTexture||H.mapping===Il)?(x===void 0&&(x=new Gi(new qa(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:js(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(L,V,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Gr.copy(I.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),x.material.uniforms.envMap.value=H,x.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(yS.makeRotationFromEuler(Gr)),x.material.toneMapped=bt.getTransfer(H.colorSpace)!==Lt,(g!==H||_!==H.version||M!==s.toneMapping)&&(x.material.needsUpdate=!0,g=H,_=H.version,M=s.toneMapping),x.layers.enableAll(),P.unshift(x,x.geometry,x.material,0,0,null)):H&&H.isTexture&&(h===void 0&&(h=new Gi(new Ol(2,2),new Wi({name:"BackgroundMaterial",uniforms:js(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=H,h.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,h.material.toneMapped=bt.getTransfer(H.colorSpace)!==Lt,H.matrixAutoUpdate===!0&&H.updateMatrix(),h.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||_!==H.version||M!==s.toneMapping)&&(h.material.needsUpdate=!0,g=H,_=H.version,M=s.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function v(P,I){P.getRGB(El,a0(s)),r.buffers.color.setClear(El.r,El.g,El.b,I,d)}function U(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(P,I=1){f.set(P),m=I,v(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,v(f,m)},render:A,addToRenderList:y,dispose:U}}function MS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let c=o,d=!1;function f(C,G,J,ne,le){let ae=!1;const de=g(ne,J,G);c!==de&&(c=de,h(c.object)),ae=M(C,ne,J,le),ae&&w(C,ne,J,le),le!==null&&e.update(le,s.ELEMENT_ARRAY_BUFFER),(ae||d)&&(d=!1,I(C,G,J,ne),le!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function m(){return s.createVertexArray()}function h(C){return s.bindVertexArray(C)}function x(C){return s.deleteVertexArray(C)}function g(C,G,J){const ne=J.wireframe===!0;let le=r[C.id];le===void 0&&(le={},r[C.id]=le);let ae=le[G.id];ae===void 0&&(ae={},le[G.id]=ae);let de=ae[ne];return de===void 0&&(de=_(m()),ae[ne]=de),de}function _(C){const G=[],J=[],ne=[];for(let le=0;le<n;le++)G[le]=0,J[le]=0,ne[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:ne,object:C,attributes:{},index:null}}function M(C,G,J,ne){const le=c.attributes,ae=G.attributes;let de=0;const fe=J.getAttributes();for(const z in fe)if(fe[z].location>=0){const te=le[z];let F=ae[z];if(F===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(F=C.instanceColor)),te===void 0||te.attribute!==F||F&&te.data!==F.data)return!0;de++}return c.attributesNum!==de||c.index!==ne}function w(C,G,J,ne){const le={},ae=G.attributes;let de=0;const fe=J.getAttributes();for(const z in fe)if(fe[z].location>=0){let te=ae[z];te===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(te=C.instanceColor));const F={};F.attribute=te,te&&te.data&&(F.data=te.data),le[z]=F,de++}c.attributes=le,c.attributesNum=de,c.index=ne}function A(){const C=c.newAttributes;for(let G=0,J=C.length;G<J;G++)C[G]=0}function y(C){v(C,0)}function v(C,G){const J=c.newAttributes,ne=c.enabledAttributes,le=c.attributeDivisors;J[C]=1,ne[C]===0&&(s.enableVertexAttribArray(C),ne[C]=1),le[C]!==G&&(s.vertexAttribDivisor(C,G),le[C]=G)}function U(){const C=c.newAttributes,G=c.enabledAttributes;for(let J=0,ne=G.length;J<ne;J++)G[J]!==C[J]&&(s.disableVertexAttribArray(J),G[J]=0)}function P(C,G,J,ne,le,ae,de){de===!0?s.vertexAttribIPointer(C,G,J,le,ae):s.vertexAttribPointer(C,G,J,ne,le,ae)}function I(C,G,J,ne){A();const le=ne.attributes,ae=J.getAttributes(),de=G.defaultAttributeValues;for(const fe in ae){const z=ae[fe];if(z.location>=0){let se=le[fe];if(se===void 0&&(fe==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),fe==="instanceColor"&&C.instanceColor&&(se=C.instanceColor)),se!==void 0){const te=se.normalized,F=se.itemSize,re=e.get(se);if(re===void 0)continue;const De=re.buffer,Pe=re.type,He=re.bytesPerElement,Z=Pe===s.INT||Pe===s.UNSIGNED_INT||se.gpuType===Wd;if(se.isInterleavedBufferAttribute){const ue=se.data,Se=ue.stride,Fe=se.offset;if(ue.isInstancedInterleavedBuffer){for(let Oe=0;Oe<z.locationSize;Oe++)v(z.location+Oe,ue.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Oe=0;Oe<z.locationSize;Oe++)y(z.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Oe=0;Oe<z.locationSize;Oe++)P(z.location+Oe,F/z.locationSize,Pe,te,Se*He,(Fe+F/z.locationSize*Oe)*He,Z)}else{if(se.isInstancedBufferAttribute){for(let ue=0;ue<z.locationSize;ue++)v(z.location+ue,se.meshPerAttribute);C.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ue=0;ue<z.locationSize;ue++)y(z.location+ue);s.bindBuffer(s.ARRAY_BUFFER,De);for(let ue=0;ue<z.locationSize;ue++)P(z.location+ue,F/z.locationSize,Pe,te,F*He,F/z.locationSize*ue*He,Z)}}else if(de!==void 0){const te=de[fe];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(z.location,te);break;case 3:s.vertexAttrib3fv(z.location,te);break;case 4:s.vertexAttrib4fv(z.location,te);break;default:s.vertexAttrib1fv(z.location,te)}}}}U()}function H(){Q();for(const C in r){const G=r[C];for(const J in G){const ne=G[J];for(const le in ne)x(ne[le].object),delete ne[le];delete G[J]}delete r[C]}}function L(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const J in G){const ne=G[J];for(const le in ne)x(ne[le].object),delete ne[le];delete G[J]}delete r[C.id]}function V(C){for(const G in r){const J=r[G];if(J[C.id]===void 0)continue;const ne=J[C.id];for(const le in ne)x(ne[le].object),delete ne[le];delete J[C.id]}}function Q(){R(),d=!0,c!==o&&(c=o,h(c.object))}function R(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:Q,resetDefaultState:R,dispose:H,releaseStatesOfGeometry:L,releaseStatesOfProgram:V,initAttributes:A,enableAttribute:y,disableUnusedAttributes:U}}function ES(s,e,n){let r;function o(h){r=h}function c(h,x){s.drawArrays(r,h,x),n.update(x,r,1)}function d(h,x,g){g!==0&&(s.drawArraysInstanced(r,h,x,g),n.update(x,r,g))}function f(h,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,x,0,g);let M=0;for(let w=0;w<g;w++)M+=x[w];n.update(M,r,1)}function m(h,x,g,_){if(g===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let w=0;w<h.length;w++)d(h[w],x[w],_[w]);else{M.multiDrawArraysInstancedWEBGL(r,h,0,x,0,_,0,g);let w=0;for(let A=0;A<g;A++)w+=x[A]*_[A];n.update(w,r,1)}}this.setMode=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function bS(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(V){return!(V!==ui&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(V){const Q=V===Xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==Vi&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Bi&&!Q)}function m(V){if(V==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const x=m(h);x!==h&&(ut("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const g=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),I=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=w>0,L=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:w,maxTextureSize:A,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:U,maxVaryings:P,maxFragmentUniforms:I,vertexTextures:H,maxSamples:L}}function wS(s){const e=this;let n=null,r=0,o=!1,c=!1;const d=new jr,f=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const M=g.length!==0||_||r!==0||o;return o=_,r=g.length,M},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,_){n=x(g,_,0)},this.setState=function(g,_,M){const w=g.clippingPlanes,A=g.clipIntersection,y=g.clipShadows,v=s.get(g);if(!o||w===null||w.length===0||c&&!y)c?x(null):h();else{const U=c?0:r,P=U*4;let I=v.clippingState||null;m.value=I,I=x(w,_,P,M);for(let H=0;H!==P;++H)I[H]=n[H];v.clippingState=I,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function h(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(g,_,M,w){const A=g!==null?g.length:0;let y=null;if(A!==0){if(y=m.value,w!==!0||y===null){const v=M+A*4,U=_.matrixWorldInverse;f.getNormalMatrix(U),(y===null||y.length<v)&&(y=new Float32Array(v));for(let P=0,I=M;P!==A;++P,I+=4)d.copy(g[P]).applyMatrix4(U,f),d.normal.toArray(y,I),y[I+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function TS(s){let e=new WeakMap;function n(d,f){return f===Ll?d.mapping=Hs:f===ud&&(d.mapping=Gs),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Ll||f===ud)if(e.has(d)){const m=e.get(d).texture;return n(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const h=new b_(m.height);return h.fromEquirectangularTexture(s,d),e.set(d,h),d.addEventListener("dispose",o),n(h.texture,d.mapping)}else return null}}return d}function o(d){const f=d.target;f.removeEventListener("dispose",o);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Er=4,hm=[.125,.215,.35,.446,.526,.582],Yr=20,AS=256,Ua=new O_,pm=new Dt;let Xu=null,Yu=0,qu=0,$u=!1;const CS=new ce;class mm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:d=256,position:f=CS}=c;Xu=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,f),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xu,Yu,qu),this._renderer.xr.enabled=$u,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xu=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),qu=this._renderer.getActiveMipmapLevel(),$u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Xs,format:ui,colorSpace:Ws,depthBuffer:!1},o=xm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xm(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=RS(c)),this._blurMaterial=PS(c,e,n),this._ggxMaterial=NS(c,e,n)}return o}_compileMaterial(e){const n=new Gi(new ji,e);this._renderer.compile(n,Ua)}_sceneToCubeUV(e,n,r,o,c){const m=new Qn(90,1,n,r),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,M=g.toneMapping;g.getClearColor(pm),g.toneMapping=br,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gi(new qa,new ef({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let v=!1;const U=e.background;U?U.isColor&&(y.color.copy(U),e.background=null,v=!0):(y.color.copy(pm),v=!0);for(let P=0;P<6;P++){const I=P%3;I===0?(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[P],c.y,c.z)):I===1?(m.up.set(0,0,h[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[P],c.z)):(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[P]));const H=this._cubeSize;Os(o,I*H,P>2?H:0,H,H),g.setRenderTarget(o),v&&g.render(A,m),g.render(e,m)}g.toneMapping=M,g.autoClear=_,e.background=U}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Hs||e.mapping===Gs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gm());const c=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const f=c.uniforms;f.envMap.value=e;const m=this._cubeSize;Os(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(d,Ua)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,f=this._lodMeshes[r];f.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),g=Math.sqrt(h*h-x*x),_=.05+h*.95,M=g*_,{_lodMax:w}=this,A=this._sizeLods[r],y=3*A*(r>w-Er?r-w+Er:0),v=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=w-n,Os(c,y,v,3*A,2*A),o.setRenderTarget(c),o.render(f,Ua),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=w-r,Os(e,y,v,3*A,2*A),o.setRenderTarget(e),o.render(f,Ua)}_blur(e,n,r,o,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,o,"latitudinal",c),this._halfBlur(d,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,d,f){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Yt("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[o];g.material=h;const _=h.uniforms,M=this._sizeLods[r]-1,w=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Yr-1),A=c/w,y=isFinite(c)?1+Math.floor(x*A):Yr;y>Yr&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Yr}`);const v=[];let U=0;for(let V=0;V<Yr;++V){const Q=V/A,R=Math.exp(-Q*Q/2);v.push(R),V===0?U+=R:V<y&&(U+=2*R)}for(let V=0;V<v.length;V++)v[V]=v[V]/U;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=v,_.latitudinal.value=d==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:P}=this;_.dTheta.value=w,_.mipInt.value=P-r;const I=this._sizeLods[o],H=3*I*(o>P-Er?o-P+Er:0),L=4*(this._cubeSize-I);Os(n,H,L,3*I,2*I),m.setRenderTarget(n),m.render(g,Ua)}}function RS(s){const e=[],n=[],r=[];let o=s;const c=s-Er+1+hm.length;for(let d=0;d<c;d++){const f=Math.pow(2,o);e.push(f);let m=1/f;d>s-Er?m=hm[d-s+Er-1]:d===0&&(m=0),n.push(m);const h=1/(f-2),x=-h,g=1+h,_=[x,x,g,x,g,g,x,x,g,g,x,g],M=6,w=6,A=3,y=2,v=1,U=new Float32Array(A*w*M),P=new Float32Array(y*w*M),I=new Float32Array(v*w*M);for(let L=0;L<M;L++){const V=L%3*2/3-1,Q=L>2?0:-1,R=[V,Q,0,V+2/3,Q,0,V+2/3,Q+1,0,V,Q,0,V+2/3,Q+1,0,V,Q+1,0];U.set(R,A*w*L),P.set(_,y*w*L);const C=[L,L,L,L,L,L];I.set(C,v*w*L)}const H=new ji;H.setAttribute("position",new _i(U,A)),H.setAttribute("uv",new _i(P,y)),H.setAttribute("faceIndex",new _i(I,v)),r.push(new Gi(H,null)),o>Er&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function xm(s,e,n){const r=new Kr(s,e,n);return r.texture.mapping=Il,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Os(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function NS(s,e,n){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function PS(s,e,n){const r=new Float32Array(Yr),o=new ce(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function gm(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function vm(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Bl(){return`

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
	`}function LS(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const m=f.mapping,h=m===Ll||m===ud,x=m===Hs||m===Gs;if(h||x){let g=e.get(f);const _=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new mm(s)),g=h?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const M=f.image;return h&&M&&M.height>0||x&&M&&o(M)?(n===null&&(n=new mm(s)),g=h?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",c),g.texture):null}}}return f}function o(f){let m=0;const h=6;for(let x=0;x<h;x++)f[x]!==void 0&&m++;return m===h}function c(f){const m=f.target;m.removeEventListener("dispose",c);const h=e.get(m);h!==void 0&&(e.delete(m),h.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function DS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Wa("WebGLRenderer: "+r+" extension not supported."),o}}}function US(s,e,n,r){const o={},c=new WeakMap;function d(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const w in _.attributes)e.remove(_.attributes[w]);_.removeEventListener("dispose",d),delete o[_.id];const M=c.get(_);M&&(e.remove(M),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function f(g,_){return o[_.id]===!0||(_.addEventListener("dispose",d),o[_.id]=!0,n.memory.geometries++),_}function m(g){const _=g.attributes;for(const M in _)e.update(_[M],s.ARRAY_BUFFER)}function h(g){const _=[],M=g.index,w=g.attributes.position;let A=0;if(M!==null){const U=M.array;A=M.version;for(let P=0,I=U.length;P<I;P+=3){const H=U[P+0],L=U[P+1],V=U[P+2];_.push(H,L,L,V,V,H)}}else if(w!==void 0){const U=w.array;A=w.version;for(let P=0,I=U.length/3-1;P<I;P+=3){const H=P+0,L=P+1,V=P+2;_.push(H,L,L,V,V,H)}}else return;const y=new(e0(_)?s0:r0)(_,1);y.version=A;const v=c.get(g);v&&e.remove(v),c.set(g,y)}function x(g){const _=c.get(g);if(_){const M=g.index;M!==null&&_.version<M.version&&h(g)}else h(g);return c.get(g)}return{get:f,update:m,getWireframeAttribute:x}}function IS(s,e,n){let r;function o(_){r=_}let c,d;function f(_){c=_.type,d=_.bytesPerElement}function m(_,M){s.drawElements(r,M,c,_*d),n.update(M,r,1)}function h(_,M,w){w!==0&&(s.drawElementsInstanced(r,M,c,_*d,w),n.update(M,r,w))}function x(_,M,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,_,0,w);let y=0;for(let v=0;v<w;v++)y+=M[v];n.update(y,r,1)}function g(_,M,w,A){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<_.length;v++)h(_[v]/d,M[v],A[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,_,0,A,0,w);let v=0;for(let U=0;U<w;U++)v+=M[U]*A[U];n.update(v,r,1)}}this.setMode=o,this.setIndex=f,this.render=m,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function FS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:Yt("WebGLInfo: Unknown draw mode:",d);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function OS(s,e,n){const r=new WeakMap,o=new qt;function c(d,f,m){const h=d.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=x!==void 0?x.length:0;let _=r.get(f);if(_===void 0||_.count!==g){let C=function(){Q.dispose(),r.delete(f),f.removeEventListener("dispose",C)};var M=C;_!==void 0&&_.texture.dispose();const w=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let I=0;w===!0&&(I=1),A===!0&&(I=2),y===!0&&(I=3);let H=f.attributes.position.count*I,L=1;H>e.maxTextureSize&&(L=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const V=new Float32Array(H*L*4*g),Q=new t0(V,H,L,g);Q.type=Bi,Q.needsUpdate=!0;const R=I*4;for(let G=0;G<g;G++){const J=v[G],ne=U[G],le=P[G],ae=H*L*4*G;for(let de=0;de<J.count;de++){const fe=de*R;w===!0&&(o.fromBufferAttribute(J,de),V[ae+fe+0]=o.x,V[ae+fe+1]=o.y,V[ae+fe+2]=o.z,V[ae+fe+3]=0),A===!0&&(o.fromBufferAttribute(ne,de),V[ae+fe+4]=o.x,V[ae+fe+5]=o.y,V[ae+fe+6]=o.z,V[ae+fe+7]=0),y===!0&&(o.fromBufferAttribute(le,de),V[ae+fe+8]=o.x,V[ae+fe+9]=o.y,V[ae+fe+10]=o.z,V[ae+fe+11]=le.itemSize===4?o.w:1)}}_={count:g,texture:Q,size:new Ut(H,L)},r.set(f,_),f.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let w=0;for(let y=0;y<h.length;y++)w+=h[y];const A=f.morphTargetsRelative?1:1-w;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",h)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function BS(s,e,n,r){let o=new WeakMap;function c(m){const h=r.render.frame,x=m.geometry,g=e.get(m,x);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),o.get(m)!==h&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),o.set(m,h))),m.isSkinnedMesh){const _=m.skeleton;o.get(_)!==h&&(_.update(),o.set(_,h))}return g}function d(){o=new WeakMap}function f(m){const h=m.target;h.removeEventListener("dispose",f),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:c,dispose:d}}const h0=new yn,_m=new u0(1,1),p0=new t0,m0=new a_,x0=new l0,ym=[],Sm=[],Mm=new Float32Array(16),Em=new Float32Array(9),bm=new Float32Array(4);function $s(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=ym[o];if(c===void 0&&(c=new Float32Array(o),ym[o]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(c,f)}return c}function rn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function sn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function kl(s,e){let n=Sm[e];n===void 0&&(n=new Int32Array(e),Sm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function kS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function zS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;s.uniform2fv(this.addr,e),sn(n,e)}}function VS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(rn(n,e))return;s.uniform3fv(this.addr,e),sn(n,e)}}function HS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;s.uniform4fv(this.addr,e),sn(n,e)}}function GS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(rn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,r))return;bm.set(r),s.uniformMatrix2fv(this.addr,!1,bm),sn(n,r)}}function WS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(rn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,r))return;Em.set(r),s.uniformMatrix3fv(this.addr,!1,Em),sn(n,r)}}function jS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(rn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,r))return;Mm.set(r),s.uniformMatrix4fv(this.addr,!1,Mm),sn(n,r)}}function XS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function YS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;s.uniform2iv(this.addr,e),sn(n,e)}}function qS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;s.uniform3iv(this.addr,e),sn(n,e)}}function $S(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;s.uniform4iv(this.addr,e),sn(n,e)}}function KS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function ZS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;s.uniform2uiv(this.addr,e),sn(n,e)}}function QS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;s.uniform3uiv(this.addr,e),sn(n,e)}}function JS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;s.uniform4uiv(this.addr,e),sn(n,e)}}function eM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(_m.compareFunction=Jm,c=_m):c=h0,n.setTexture2D(e||c,o)}function tM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||m0,o)}function nM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||x0,o)}function iM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||p0,o)}function rM(s){switch(s){case 5126:return kS;case 35664:return zS;case 35665:return VS;case 35666:return HS;case 35674:return GS;case 35675:return WS;case 35676:return jS;case 5124:case 35670:return XS;case 35667:case 35671:return YS;case 35668:case 35672:return qS;case 35669:case 35673:return $S;case 5125:return KS;case 36294:return ZS;case 36295:return QS;case 36296:return JS;case 35678:case 36198:case 36298:case 36306:case 35682:return eM;case 35679:case 36299:case 36307:return tM;case 35680:case 36300:case 36308:case 36293:return nM;case 36289:case 36303:case 36311:case 36292:return iM}}function sM(s,e){s.uniform1fv(this.addr,e)}function aM(s,e){const n=$s(e,this.size,2);s.uniform2fv(this.addr,n)}function oM(s,e){const n=$s(e,this.size,3);s.uniform3fv(this.addr,n)}function lM(s,e){const n=$s(e,this.size,4);s.uniform4fv(this.addr,n)}function cM(s,e){const n=$s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function uM(s,e){const n=$s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function dM(s,e){const n=$s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function fM(s,e){s.uniform1iv(this.addr,e)}function hM(s,e){s.uniform2iv(this.addr,e)}function pM(s,e){s.uniform3iv(this.addr,e)}function mM(s,e){s.uniform4iv(this.addr,e)}function xM(s,e){s.uniform1uiv(this.addr,e)}function gM(s,e){s.uniform2uiv(this.addr,e)}function vM(s,e){s.uniform3uiv(this.addr,e)}function _M(s,e){s.uniform4uiv(this.addr,e)}function yM(s,e,n){const r=this.cache,o=e.length,c=kl(n,o);rn(r,c)||(s.uniform1iv(this.addr,c),sn(r,c));for(let d=0;d!==o;++d)n.setTexture2D(e[d]||h0,c[d])}function SM(s,e,n){const r=this.cache,o=e.length,c=kl(n,o);rn(r,c)||(s.uniform1iv(this.addr,c),sn(r,c));for(let d=0;d!==o;++d)n.setTexture3D(e[d]||m0,c[d])}function MM(s,e,n){const r=this.cache,o=e.length,c=kl(n,o);rn(r,c)||(s.uniform1iv(this.addr,c),sn(r,c));for(let d=0;d!==o;++d)n.setTextureCube(e[d]||x0,c[d])}function EM(s,e,n){const r=this.cache,o=e.length,c=kl(n,o);rn(r,c)||(s.uniform1iv(this.addr,c),sn(r,c));for(let d=0;d!==o;++d)n.setTexture2DArray(e[d]||p0,c[d])}function bM(s){switch(s){case 5126:return sM;case 35664:return aM;case 35665:return oM;case 35666:return lM;case 35674:return cM;case 35675:return uM;case 35676:return dM;case 5124:case 35670:return fM;case 35667:case 35671:return hM;case 35668:case 35672:return pM;case 35669:case 35673:return mM;case 5125:return xM;case 36294:return gM;case 36295:return vM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return yM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return MM;case 36289:case 36303:case 36311:case 36292:return EM}}class wM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=rM(n.type)}}class TM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bM(n.type)}}class AM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const Ku=/(\w+)(\])?(\[|\.)?/g;function wm(s,e){s.seq.push(e),s.map[e.id]=e}function CM(s,e,n){const r=s.name,o=r.length;for(Ku.lastIndex=0;;){const c=Ku.exec(r),d=Ku.lastIndex;let f=c[1];const m=c[2]==="]",h=c[3];if(m&&(f=f|0),h===void 0||h==="["&&d+2===o){wm(n,h===void 0?new wM(f,s,e):new TM(f,s,e));break}else{let g=n.map[f];g===void 0&&(g=new AM(f),wm(n,g)),n=g}}}class Nl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),d=e.getUniformLocation(n,c.name);CM(c,d,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,d=n.length;c!==d;++c){const f=n[c],m=r[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const d=e[o];d.id in n&&r.push(d)}return r}}function Tm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const RM=37297;let NM=0;function PM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=o;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}const Am=new ht;function LM(s){bt._getMatrix(Am,bt.workingColorSpace,s);const e=`mat3( ${Am.elements.map(n=>n.toFixed(4))} )`;switch(bt.getTransfer(s)){case Dl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Cm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const f=parseInt(d[1]);return n.toUpperCase()+`

`+c+`

`+PM(s.getShaderSource(e),f)}else return c}function DM(s,e){const n=LM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function UM(s,e){let n;switch(e){case vv:n="Linear";break;case _v:n="Reinhard";break;case yv:n="Cineon";break;case Sv:n="ACESFilmic";break;case Ev:n="AgX";break;case bv:n="Neutral";break;case Mv:n="Custom";break;default:ut("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const bl=new ce;function IM(){bt.getLuminanceCoefficients(bl);const s=bl.x.toFixed(4),e=bl.y.toFixed(4),n=bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function OM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function BM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),d=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function Ia(s){return s!==""}function Rm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vd(s){return s.replace(kM,VM)}const zM=new Map;function VM(s,e){let n=mt[e];if(n===void 0){const r=zM.get(e);if(r!==void 0)n=mt[r],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Vd(n)}const HM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pm(s){return s.replace(HM,GM)}function GM(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Lm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function WM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Zg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function jM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hs:case Gs:e="ENVMAP_TYPE_CUBE";break;case Il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function YM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wm:e="ENVMAP_BLENDING_MULTIPLY";break;case xv:e="ENVMAP_BLENDING_MIX";break;case gv:e="ENVMAP_BLENDING_ADD";break}return e}function qM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function $M(s,e,n,r){const o=s.getContext(),c=n.defines;let d=n.vertexShader,f=n.fragmentShader;const m=WM(n),h=jM(n),x=XM(n),g=YM(n),_=qM(n),M=FM(n),w=OM(c),A=o.createProgram();let y,v,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Ia).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Ia).join(`
`),v.length>0&&(v+=`
`)):(y=[Lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),v=[Lm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+x:"",n.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==br?"#define TONE_MAPPING":"",n.toneMapping!==br?mt.tonemapping_pars_fragment:"",n.toneMapping!==br?UM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,DM("linearToOutputTexel",n.outputColorSpace),IM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ia).join(`
`)),d=Vd(d),d=Rm(d,n),d=Nm(d,n),f=Vd(f),f=Rm(f,n),f=Nm(f,n),d=Pm(d),f=Pm(f),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=U+y+d,I=U+v+f,H=Tm(o,o.VERTEX_SHADER,P),L=Tm(o,o.FRAGMENT_SHADER,I);o.attachShader(A,H),o.attachShader(A,L),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function V(G){if(s.debug.checkShaderErrors){const J=o.getProgramInfoLog(A)||"",ne=o.getShaderInfoLog(H)||"",le=o.getShaderInfoLog(L)||"",ae=J.trim(),de=ne.trim(),fe=le.trim();let z=!0,se=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,H,L);else{const te=Cm(o,H,"vertex"),F=Cm(o,L,"fragment");Yt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ae+`
`+te+`
`+F)}else ae!==""?ut("WebGLProgram: Program Info Log:",ae):(de===""||fe==="")&&(se=!1);se&&(G.diagnostics={runnable:z,programLog:ae,vertexShader:{log:de,prefix:y},fragmentShader:{log:fe,prefix:v}})}o.deleteShader(H),o.deleteShader(L),Q=new Nl(o,A),R=BM(o,A)}let Q;this.getUniforms=function(){return Q===void 0&&V(this),Q};let R;this.getAttributes=function(){return R===void 0&&V(this),R};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(A,RM)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=NM++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=L,this}let KM=0;class ZM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new QM(e),n.set(e,r)),r}}class QM{constructor(e){this.id=KM++,this.code=e,this.usedTimes=0}}function JM(s,e,n,r,o,c,d){const f=new n0,m=new ZM,h=new Set,x=[],g=o.logarithmicDepthBuffer,_=o.vertexTextures;let M=o.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(R){return h.add(R),R===0?"uv":`uv${R}`}function y(R,C,G,J,ne){const le=J.fog,ae=ne.geometry,de=R.isMeshStandardMaterial?J.environment:null,fe=(R.isMeshStandardMaterial?n:e).get(R.envMap||de),z=fe&&fe.mapping===Il?fe.image.height:null,se=w[R.type];R.precision!==null&&(M=o.getMaxPrecision(R.precision),M!==R.precision&&ut("WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const te=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,F=te!==void 0?te.length:0;let re=0;ae.morphAttributes.position!==void 0&&(re=1),ae.morphAttributes.normal!==void 0&&(re=2),ae.morphAttributes.color!==void 0&&(re=3);let De,Pe,He,Z;if(se){const St=gi[se];De=St.vertexShader,Pe=St.fragmentShader}else De=R.vertexShader,Pe=R.fragmentShader,m.update(R),He=m.getVertexShaderID(R),Z=m.getFragmentShaderID(R);const ue=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),Fe=ne.isInstancedMesh===!0,Oe=ne.isBatchedMesh===!0,ft=!!R.map,$t=!!R.matcap,dt=!!fe,Nt=!!R.aoMap,O=!!R.lightMap,xt=!!R.bumpMap,pt=!!R.normalMap,Tt=!!R.displacementMap,ke=!!R.emissiveMap,At=!!R.metalnessMap,Xe=!!R.roughnessMap,at=R.anisotropy>0,N=R.clearcoat>0,b=R.dispersion>0,$=R.iridescence>0,he=R.sheen>0,me=R.transmission>0,oe=at&&!!R.anisotropyMap,qe=N&&!!R.clearcoatMap,Ae=N&&!!R.clearcoatNormalMap,Ke=N&&!!R.clearcoatRoughnessMap,Ye=$&&!!R.iridescenceMap,ve=$&&!!R.iridescenceThicknessMap,Te=he&&!!R.sheenColorMap,it=he&&!!R.sheenRoughnessMap,Je=!!R.specularMap,Le=!!R.specularColorMap,rt=!!R.specularIntensityMap,B=me&&!!R.transmissionMap,Ce=me&&!!R.thicknessMap,Ee=!!R.gradientMap,be=!!R.alphaMap,ye=R.alphaTest>0,pe=!!R.alphaHash,ze=!!R.extensions;let ot=br;R.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ot=s.toneMapping);const Pt={shaderID:se,shaderType:R.type,shaderName:R.name,vertexShader:De,fragmentShader:Pe,defines:R.defines,customVertexShaderID:He,customFragmentShaderID:Z,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:Oe,batchingColor:Oe&&ne._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&ne.instanceColor!==null,instancingMorph:Fe&&ne.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Ws,alphaToCoverage:!!R.alphaToCoverage,map:ft,matcap:$t,envMap:dt,envMapMode:dt&&fe.mapping,envMapCubeUVHeight:z,aoMap:Nt,lightMap:O,bumpMap:xt,normalMap:pt,displacementMap:_&&Tt,emissiveMap:ke,normalMapObjectSpace:pt&&R.normalMapType===Rv,normalMapTangentSpace:pt&&R.normalMapType===Cv,metalnessMap:At,roughnessMap:Xe,anisotropy:at,anisotropyMap:oe,clearcoat:N,clearcoatMap:qe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ke,dispersion:b,iridescence:$,iridescenceMap:Ye,iridescenceThicknessMap:ve,sheen:he,sheenColorMap:Te,sheenRoughnessMap:it,specularMap:Je,specularColorMap:Le,specularIntensityMap:rt,transmission:me,transmissionMap:B,thicknessMap:Ce,gradientMap:Ee,opaque:R.transparent===!1&&R.blending===ks&&R.alphaToCoverage===!1,alphaMap:be,alphaTest:ye,alphaHash:pe,combine:R.combine,mapUv:ft&&A(R.map.channel),aoMapUv:Nt&&A(R.aoMap.channel),lightMapUv:O&&A(R.lightMap.channel),bumpMapUv:xt&&A(R.bumpMap.channel),normalMapUv:pt&&A(R.normalMap.channel),displacementMapUv:Tt&&A(R.displacementMap.channel),emissiveMapUv:ke&&A(R.emissiveMap.channel),metalnessMapUv:At&&A(R.metalnessMap.channel),roughnessMapUv:Xe&&A(R.roughnessMap.channel),anisotropyMapUv:oe&&A(R.anisotropyMap.channel),clearcoatMapUv:qe&&A(R.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&A(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&A(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&A(R.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&A(R.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&A(R.sheenColorMap.channel),sheenRoughnessMapUv:it&&A(R.sheenRoughnessMap.channel),specularMapUv:Je&&A(R.specularMap.channel),specularColorMapUv:Le&&A(R.specularColorMap.channel),specularIntensityMapUv:rt&&A(R.specularIntensityMap.channel),transmissionMapUv:B&&A(R.transmissionMap.channel),thicknessMapUv:Ce&&A(R.thicknessMap.channel),alphaMapUv:be&&A(R.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(pt||at),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!ae.attributes.uv&&(ft||be),fog:!!le,useFog:R.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Se,skinning:ne.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:re,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:ot,decodeVideoTexture:ft&&R.map.isVideoTexture===!0&&bt.getTransfer(R.map.colorSpace)===Lt,decodeVideoTextureEmissive:ke&&R.emissiveMap.isVideoTexture===!0&&bt.getTransfer(R.emissiveMap.colorSpace)===Lt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Fi,flipSided:R.side===Dn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:ze&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&R.extensions.multiDraw===!0||Oe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Pt.vertexUv1s=h.has(1),Pt.vertexUv2s=h.has(2),Pt.vertexUv3s=h.has(3),h.clear(),Pt}function v(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const G in R.defines)C.push(G),C.push(R.defines[G]);return R.isRawShaderMaterial===!1&&(U(C,R),P(C,R),C.push(s.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function U(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function P(R,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),C.gradientMap&&f.enable(22),R.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reversedDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),R.push(f.mask)}function I(R){const C=w[R.type];let G;if(C){const J=gi[C];G=y_.clone(J.uniforms)}else G=R.uniforms;return G}function H(R,C){let G;for(let J=0,ne=x.length;J<ne;J++){const le=x[J];if(le.cacheKey===C){G=le,++G.usedTimes;break}}return G===void 0&&(G=new $M(s,C,R,c),x.push(G)),G}function L(R){if(--R.usedTimes===0){const C=x.indexOf(R);x[C]=x[x.length-1],x.pop(),R.destroy()}}function V(R){m.remove(R)}function Q(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:I,acquireProgram:H,releaseProgram:L,releaseShaderCache:V,programs:x,dispose:Q}}function e3(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function o(d,f,m){s.get(d)[f]=m}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function t3(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Dm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Um(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function d(g,_,M,w,A,y){let v=s[e];return v===void 0?(v={id:g.id,object:g,geometry:_,material:M,groupOrder:w,renderOrder:g.renderOrder,z:A,group:y},s[e]=v):(v.id=g.id,v.object=g,v.geometry=_,v.material=M,v.groupOrder=w,v.renderOrder=g.renderOrder,v.z=A,v.group=y),e++,v}function f(g,_,M,w,A,y){const v=d(g,_,M,w,A,y);M.transmission>0?r.push(v):M.transparent===!0?o.push(v):n.push(v)}function m(g,_,M,w,A,y){const v=d(g,_,M,w,A,y);M.transmission>0?r.unshift(v):M.transparent===!0?o.unshift(v):n.unshift(v)}function h(g,_){n.length>1&&n.sort(g||t3),r.length>1&&r.sort(_||Dm),o.length>1&&o.sort(_||Dm)}function x(){for(let g=e,_=s.length;g<_;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:f,unshift:m,finish:x,sort:h}}function n3(){let s=new WeakMap;function e(r,o){const c=s.get(r);let d;return c===void 0?(d=new Um,s.set(r,[d])):o>=c.length?(d=new Um,c.push(d)):d=c[o],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function i3(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ce,color:new Dt};break;case"SpotLight":n={position:new ce,direction:new ce,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ce,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ce,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":n={color:new Dt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return s[e.id]=n,n}}}function r3(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let s3=0;function a3(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function o3(s){const e=new i3,n=r3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ce);const o=new ce,c=new nn,d=new nn;function f(h){let x=0,g=0,_=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let M=0,w=0,A=0,y=0,v=0,U=0,P=0,I=0,H=0,L=0,V=0;h.sort(a3);for(let R=0,C=h.length;R<C;R++){const G=h[R],J=G.color,ne=G.intensity,le=G.distance,ae=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)x+=J.r*ne,g+=J.g*ne,_+=J.b*ne;else if(G.isLightProbe){for(let de=0;de<9;de++)r.probe[de].addScaledVector(G.sh.coefficients[de],ne);V++}else if(G.isDirectionalLight){const de=e.get(G);if(de.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const fe=G.shadow,z=n.get(G);z.shadowIntensity=fe.intensity,z.shadowBias=fe.bias,z.shadowNormalBias=fe.normalBias,z.shadowRadius=fe.radius,z.shadowMapSize=fe.mapSize,r.directionalShadow[M]=z,r.directionalShadowMap[M]=ae,r.directionalShadowMatrix[M]=G.shadow.matrix,U++}r.directional[M]=de,M++}else if(G.isSpotLight){const de=e.get(G);de.position.setFromMatrixPosition(G.matrixWorld),de.color.copy(J).multiplyScalar(ne),de.distance=le,de.coneCos=Math.cos(G.angle),de.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),de.decay=G.decay,r.spot[A]=de;const fe=G.shadow;if(G.map&&(r.spotLightMap[H]=G.map,H++,fe.updateMatrices(G),G.castShadow&&L++),r.spotLightMatrix[A]=fe.matrix,G.castShadow){const z=n.get(G);z.shadowIntensity=fe.intensity,z.shadowBias=fe.bias,z.shadowNormalBias=fe.normalBias,z.shadowRadius=fe.radius,z.shadowMapSize=fe.mapSize,r.spotShadow[A]=z,r.spotShadowMap[A]=ae,I++}A++}else if(G.isRectAreaLight){const de=e.get(G);de.color.copy(J).multiplyScalar(ne),de.halfWidth.set(G.width*.5,0,0),de.halfHeight.set(0,G.height*.5,0),r.rectArea[y]=de,y++}else if(G.isPointLight){const de=e.get(G);if(de.color.copy(G.color).multiplyScalar(G.intensity),de.distance=G.distance,de.decay=G.decay,G.castShadow){const fe=G.shadow,z=n.get(G);z.shadowIntensity=fe.intensity,z.shadowBias=fe.bias,z.shadowNormalBias=fe.normalBias,z.shadowRadius=fe.radius,z.shadowMapSize=fe.mapSize,z.shadowCameraNear=fe.camera.near,z.shadowCameraFar=fe.camera.far,r.pointShadow[w]=z,r.pointShadowMap[w]=ae,r.pointShadowMatrix[w]=G.shadow.matrix,P++}r.point[w]=de,w++}else if(G.isHemisphereLight){const de=e.get(G);de.skyColor.copy(G.color).multiplyScalar(ne),de.groundColor.copy(G.groundColor).multiplyScalar(ne),r.hemi[v]=de,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=g,r.ambient[2]=_;const Q=r.hash;(Q.directionalLength!==M||Q.pointLength!==w||Q.spotLength!==A||Q.rectAreaLength!==y||Q.hemiLength!==v||Q.numDirectionalShadows!==U||Q.numPointShadows!==P||Q.numSpotShadows!==I||Q.numSpotMaps!==H||Q.numLightProbes!==V)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=y,r.point.length=w,r.hemi.length=v,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=I+H-L,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=V,Q.directionalLength=M,Q.pointLength=w,Q.spotLength=A,Q.rectAreaLength=y,Q.hemiLength=v,Q.numDirectionalShadows=U,Q.numPointShadows=P,Q.numSpotShadows=I,Q.numSpotMaps=H,Q.numLightProbes=V,r.version=s3++)}function m(h,x){let g=0,_=0,M=0,w=0,A=0;const y=x.matrixWorldInverse;for(let v=0,U=h.length;v<U;v++){const P=h[v];if(P.isDirectionalLight){const I=r.directional[g];I.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(y),g++}else if(P.isSpotLight){const I=r.spot[M];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(y),I.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(y),M++}else if(P.isRectAreaLight){const I=r.rectArea[w];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(y),d.identity(),c.copy(P.matrixWorld),c.premultiply(y),d.extractRotation(c),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),I.halfWidth.applyMatrix4(d),I.halfHeight.applyMatrix4(d),w++}else if(P.isPointLight){const I=r.point[_];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(y),_++}else if(P.isHemisphereLight){const I=r.hemi[A];I.direction.setFromMatrixPosition(P.matrixWorld),I.direction.transformDirection(y),A++}}}return{setup:f,setupView:m,state:r}}function Im(s){const e=new o3(s),n=[],r=[];function o(x){h.camera=x,n.length=0,r.length=0}function c(x){n.push(x)}function d(x){r.push(x)}function f(){e.setup(n)}function m(x){e.setupView(n,x)}const h={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:m,pushLight:c,pushShadow:d}}function l3(s){let e=new WeakMap;function n(o,c=0){const d=e.get(o);let f;return d===void 0?(f=new Im(s),e.set(o,[f])):c>=d.length?(f=new Im(s),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const c3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u3=`uniform sampler2D shadow_pass;
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
}`;function d3(s,e,n){let r=new c0;const o=new Ut,c=new Ut,d=new qt,f=new P_({depthPacking:Av}),m=new L_,h={},x=n.maxTextureSize,g={[wr]:Dn,[Dn]:wr,[Fi]:Fi},_=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:c3,fragmentShader:u3}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const w=new ji;w.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Gi(w,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gm;let v=this.type;this.render=function(L,V,Q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;const R=s.getRenderTarget(),C=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),J=s.state;J.setBlending(ki),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ne=v!==Ii&&this.type===Ii,le=v===Ii&&this.type!==Ii;for(let ae=0,de=L.length;ae<de;ae++){const fe=L[ae],z=fe.shadow;if(z===void 0){ut("WebGLShadowMap:",fe,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const se=z.getFrameExtents();if(o.multiply(se),c.copy(z.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(c.x=Math.floor(x/se.x),o.x=c.x*se.x,z.mapSize.x=c.x),o.y>x&&(c.y=Math.floor(x/se.y),o.y=c.y*se.y,z.mapSize.y=c.y)),z.map===null||ne===!0||le===!0){const F=this.type!==Ii?{minFilter:Gn,magFilter:Gn}:{};z.map!==null&&z.map.dispose(),z.map=new Kr(o.x,o.y,F),z.map.texture.name=fe.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const te=z.getViewportCount();for(let F=0;F<te;F++){const re=z.getViewport(F);d.set(c.x*re.x,c.y*re.y,c.x*re.z,c.y*re.w),J.viewport(d),z.updateMatrices(fe,F),r=z.getFrustum(),I(V,Q,z.camera,fe,this.type)}z.isPointLightShadow!==!0&&this.type===Ii&&U(z,Q),z.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(R,C,G)};function U(L,V){const Q=e.update(A);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Kr(o.x,o.y)),_.uniforms.shadow_pass.value=L.map.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(V,null,Q,_,A,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(V,null,Q,M,A,null)}function P(L,V,Q,R){let C=null;const G=Q.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)C=G;else if(C=Q.isPointLight===!0?m:f,s.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const J=C.uuid,ne=V.uuid;let le=h[J];le===void 0&&(le={},h[J]=le);let ae=le[ne];ae===void 0&&(ae=C.clone(),le[ne]=ae,V.addEventListener("dispose",H)),C=ae}if(C.visible=V.visible,C.wireframe=V.wireframe,R===Ii?C.side=V.shadowSide!==null?V.shadowSide:V.side:C.side=V.shadowSide!==null?V.shadowSide:g[V.side],C.alphaMap=V.alphaMap,C.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,C.map=V.map,C.clipShadows=V.clipShadows,C.clippingPlanes=V.clippingPlanes,C.clipIntersection=V.clipIntersection,C.displacementMap=V.displacementMap,C.displacementScale=V.displacementScale,C.displacementBias=V.displacementBias,C.wireframeLinewidth=V.wireframeLinewidth,C.linewidth=V.linewidth,Q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const J=s.properties.get(C);J.light=Q}return C}function I(L,V,Q,R,C){if(L.visible===!1)return;if(L.layers.test(V.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&C===Ii)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,L.matrixWorld);const ne=e.update(L),le=L.material;if(Array.isArray(le)){const ae=ne.groups;for(let de=0,fe=ae.length;de<fe;de++){const z=ae[de],se=le[z.materialIndex];if(se&&se.visible){const te=P(L,se,R,C);L.onBeforeShadow(s,L,V,Q,ne,te,z),s.renderBufferDirect(Q,null,ne,te,L,z),L.onAfterShadow(s,L,V,Q,ne,te,z)}}}else if(le.visible){const ae=P(L,le,R,C);L.onBeforeShadow(s,L,V,Q,ne,ae,null),s.renderBufferDirect(Q,null,ne,ae,L,null),L.onAfterShadow(s,L,V,Q,ne,ae,null)}}const J=L.children;for(let ne=0,le=J.length;ne<le;ne++)I(J[ne],V,Q,R,C)}function H(L){L.target.removeEventListener("dispose",H);for(const Q in h){const R=h[Q],C=L.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const f3={[id]:rd,[sd]:ld,[ad]:cd,[Vs]:od,[rd]:id,[ld]:sd,[cd]:ad,[od]:Vs};function h3(s,e){function n(){let B=!1;const Ce=new qt;let Ee=null;const be=new qt(0,0,0,0);return{setMask:function(ye){Ee!==ye&&!B&&(s.colorMask(ye,ye,ye,ye),Ee=ye)},setLocked:function(ye){B=ye},setClear:function(ye,pe,ze,ot,Pt){Pt===!0&&(ye*=ot,pe*=ot,ze*=ot),Ce.set(ye,pe,ze,ot),be.equals(Ce)===!1&&(s.clearColor(ye,pe,ze,ot),be.copy(Ce))},reset:function(){B=!1,Ee=null,be.set(-1,0,0,0)}}}function r(){let B=!1,Ce=!1,Ee=null,be=null,ye=null;return{setReversed:function(pe){if(Ce!==pe){const ze=e.get("EXT_clip_control");pe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),Ce=pe;const ot=ye;ye=null,this.setClear(ot)}},getReversed:function(){return Ce},setTest:function(pe){pe?ue(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(pe){Ee!==pe&&!B&&(s.depthMask(pe),Ee=pe)},setFunc:function(pe){if(Ce&&(pe=f3[pe]),be!==pe){switch(pe){case id:s.depthFunc(s.NEVER);break;case rd:s.depthFunc(s.ALWAYS);break;case sd:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case ad:s.depthFunc(s.EQUAL);break;case od:s.depthFunc(s.GEQUAL);break;case ld:s.depthFunc(s.GREATER);break;case cd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=pe}},setLocked:function(pe){B=pe},setClear:function(pe){ye!==pe&&(Ce&&(pe=1-pe),s.clearDepth(pe),ye=pe)},reset:function(){B=!1,Ee=null,be=null,ye=null,Ce=!1}}}function o(){let B=!1,Ce=null,Ee=null,be=null,ye=null,pe=null,ze=null,ot=null,Pt=null;return{setTest:function(St){B||(St?ue(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(St){Ce!==St&&!B&&(s.stencilMask(St),Ce=St)},setFunc:function(St,Un,un){(Ee!==St||be!==Un||ye!==un)&&(s.stencilFunc(St,Un,un),Ee=St,be=Un,ye=un)},setOp:function(St,Un,un){(pe!==St||ze!==Un||ot!==un)&&(s.stencilOp(St,Un,un),pe=St,ze=Un,ot=un)},setLocked:function(St){B=St},setClear:function(St){Pt!==St&&(s.clearStencil(St),Pt=St)},reset:function(){B=!1,Ce=null,Ee=null,be=null,ye=null,pe=null,ze=null,ot=null,Pt=null}}}const c=new n,d=new r,f=new o,m=new WeakMap,h=new WeakMap;let x={},g={},_=new WeakMap,M=[],w=null,A=!1,y=null,v=null,U=null,P=null,I=null,H=null,L=null,V=new Dt(0,0,0),Q=0,R=!1,C=null,G=null,J=null,ne=null,le=null;const ae=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,fe=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(z)[1]),de=fe>=1):z.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),de=fe>=2);let se=null,te={};const F=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),De=new qt().fromArray(F),Pe=new qt().fromArray(re);function He(B,Ce,Ee,be){const ye=new Uint8Array(4),pe=s.createTexture();s.bindTexture(B,pe),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ze=0;ze<Ee;ze++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(Ce+ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return pe}const Z={};Z[s.TEXTURE_2D]=He(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=He(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=He(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=He(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),ue(s.DEPTH_TEST),d.setFunc(Vs),xt(!1),pt(kp),ue(s.CULL_FACE),Nt(ki);function ue(B){x[B]!==!0&&(s.enable(B),x[B]=!0)}function Se(B){x[B]!==!1&&(s.disable(B),x[B]=!1)}function Fe(B,Ce){return g[B]!==Ce?(s.bindFramebuffer(B,Ce),g[B]=Ce,B===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ce),B===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Oe(B,Ce){let Ee=M,be=!1;if(B){Ee=_.get(Ce),Ee===void 0&&(Ee=[],_.set(Ce,Ee));const ye=B.textures;if(Ee.length!==ye.length||Ee[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,ze=ye.length;pe<ze;pe++)Ee[pe]=s.COLOR_ATTACHMENT0+pe;Ee.length=ye.length,be=!0}}else Ee[0]!==s.BACK&&(Ee[0]=s.BACK,be=!0);be&&s.drawBuffers(Ee)}function ft(B){return w!==B?(s.useProgram(B),w=B,!0):!1}const $t={[Xr]:s.FUNC_ADD,[Jg]:s.FUNC_SUBTRACT,[ev]:s.FUNC_REVERSE_SUBTRACT};$t[tv]=s.MIN,$t[nv]=s.MAX;const dt={[iv]:s.ZERO,[rv]:s.ONE,[sv]:s.SRC_COLOR,[td]:s.SRC_ALPHA,[dv]:s.SRC_ALPHA_SATURATE,[cv]:s.DST_COLOR,[ov]:s.DST_ALPHA,[av]:s.ONE_MINUS_SRC_COLOR,[nd]:s.ONE_MINUS_SRC_ALPHA,[uv]:s.ONE_MINUS_DST_COLOR,[lv]:s.ONE_MINUS_DST_ALPHA,[fv]:s.CONSTANT_COLOR,[hv]:s.ONE_MINUS_CONSTANT_COLOR,[pv]:s.CONSTANT_ALPHA,[mv]:s.ONE_MINUS_CONSTANT_ALPHA};function Nt(B,Ce,Ee,be,ye,pe,ze,ot,Pt,St){if(B===ki){A===!0&&(Se(s.BLEND),A=!1);return}if(A===!1&&(ue(s.BLEND),A=!0),B!==Qg){if(B!==y||St!==R){if((v!==Xr||I!==Xr)&&(s.blendEquation(s.FUNC_ADD),v=Xr,I=Xr),St)switch(B){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zp:s.blendFunc(s.ONE,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Yt("WebGLState: Invalid blending: ",B);break}else switch(B){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zp:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Vp:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hp:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",B);break}U=null,P=null,H=null,L=null,V.set(0,0,0),Q=0,y=B,R=St}return}ye=ye||Ce,pe=pe||Ee,ze=ze||be,(Ce!==v||ye!==I)&&(s.blendEquationSeparate($t[Ce],$t[ye]),v=Ce,I=ye),(Ee!==U||be!==P||pe!==H||ze!==L)&&(s.blendFuncSeparate(dt[Ee],dt[be],dt[pe],dt[ze]),U=Ee,P=be,H=pe,L=ze),(ot.equals(V)===!1||Pt!==Q)&&(s.blendColor(ot.r,ot.g,ot.b,Pt),V.copy(ot),Q=Pt),y=B,R=!1}function O(B,Ce){B.side===Fi?Se(s.CULL_FACE):ue(s.CULL_FACE);let Ee=B.side===Dn;Ce&&(Ee=!Ee),xt(Ee),B.blending===ks&&B.transparent===!1?Nt(ki):Nt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),d.setFunc(B.depthFunc),d.setTest(B.depthTest),d.setMask(B.depthWrite),c.setMask(B.colorWrite);const be=B.stencilWrite;f.setTest(be),be&&(f.setMask(B.stencilWriteMask),f.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),f.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ke(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function xt(B){C!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),C=B)}function pt(B){B!==$g?(ue(s.CULL_FACE),B!==G&&(B===kp?s.cullFace(s.BACK):B===Kg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),G=B}function Tt(B){B!==J&&(de&&s.lineWidth(B),J=B)}function ke(B,Ce,Ee){B?(ue(s.POLYGON_OFFSET_FILL),(ne!==Ce||le!==Ee)&&(s.polygonOffset(Ce,Ee),ne=Ce,le=Ee)):Se(s.POLYGON_OFFSET_FILL)}function At(B){B?ue(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function Xe(B){B===void 0&&(B=s.TEXTURE0+ae-1),se!==B&&(s.activeTexture(B),se=B)}function at(B,Ce,Ee){Ee===void 0&&(se===null?Ee=s.TEXTURE0+ae-1:Ee=se);let be=te[Ee];be===void 0&&(be={type:void 0,texture:void 0},te[Ee]=be),(be.type!==B||be.texture!==Ce)&&(se!==Ee&&(s.activeTexture(Ee),se=Ee),s.bindTexture(B,Ce||Z[B]),be.type=B,be.texture=Ce)}function N(){const B=te[se];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function $(){try{s.compressedTexImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function he(){try{s.texSubImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function me(){try{s.texSubImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function qe(){try{s.compressedTexSubImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function Ae(){try{s.texStorage2D(...arguments)}catch(B){B("WebGLState:",B)}}function Ke(){try{s.texStorage3D(...arguments)}catch(B){B("WebGLState:",B)}}function Ye(){try{s.texImage2D(...arguments)}catch(B){B("WebGLState:",B)}}function ve(){try{s.texImage3D(...arguments)}catch(B){B("WebGLState:",B)}}function Te(B){De.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),De.copy(B))}function it(B){Pe.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Pe.copy(B))}function Je(B,Ce){let Ee=h.get(Ce);Ee===void 0&&(Ee=new WeakMap,h.set(Ce,Ee));let be=Ee.get(B);be===void 0&&(be=s.getUniformBlockIndex(Ce,B.name),Ee.set(B,be))}function Le(B,Ce){const be=h.get(Ce).get(B);m.get(Ce)!==be&&(s.uniformBlockBinding(Ce,be,B.__bindingPointIndex),m.set(Ce,be))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},se=null,te={},g={},_=new WeakMap,M=[],w=null,A=!1,y=null,v=null,U=null,P=null,I=null,H=null,L=null,V=new Dt(0,0,0),Q=0,R=!1,C=null,G=null,J=null,ne=null,le=null,De.set(0,0,s.canvas.width,s.canvas.height),Pe.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:ue,disable:Se,bindFramebuffer:Fe,drawBuffers:Oe,useProgram:ft,setBlending:Nt,setMaterial:O,setFlipSided:xt,setCullFace:pt,setLineWidth:Tt,setPolygonOffset:ke,setScissorTest:At,activeTexture:Xe,bindTexture:at,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:$,texImage2D:Ye,texImage3D:ve,updateUBOMapping:Je,uniformBlockBinding:Le,texStorage2D:Ae,texStorage3D:Ke,texSubImage2D:he,texSubImage3D:me,compressedTexSubImage2D:oe,compressedTexSubImage3D:qe,scissor:Te,viewport:it,reset:rt}}function p3(s,e,n,r,o,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ut,x=new WeakMap;let g;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(N,b){return M?new OffscreenCanvas(N,b):Ga("canvas")}function A(N,b,$){let he=1;const me=at(N);if((me.width>$||me.height>$)&&(he=$/Math.max(me.width,me.height)),he<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const oe=Math.floor(he*me.width),qe=Math.floor(he*me.height);g===void 0&&(g=w(oe,qe));const Ae=b?w(oe,qe):g;return Ae.width=oe,Ae.height=qe,Ae.getContext("2d").drawImage(N,0,0,oe,qe),ut("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+oe+"x"+qe+")."),Ae}else return"data"in N&&ut("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),N;return N}function y(N){return N.generateMipmaps}function v(N){s.generateMipmap(N)}function U(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(N,b,$,he,me=!1){if(N!==null){if(s[N]!==void 0)return s[N];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let oe=b;if(b===s.RED&&($===s.FLOAT&&(oe=s.R32F),$===s.HALF_FLOAT&&(oe=s.R16F),$===s.UNSIGNED_BYTE&&(oe=s.R8)),b===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(oe=s.R8UI),$===s.UNSIGNED_SHORT&&(oe=s.R16UI),$===s.UNSIGNED_INT&&(oe=s.R32UI),$===s.BYTE&&(oe=s.R8I),$===s.SHORT&&(oe=s.R16I),$===s.INT&&(oe=s.R32I)),b===s.RG&&($===s.FLOAT&&(oe=s.RG32F),$===s.HALF_FLOAT&&(oe=s.RG16F),$===s.UNSIGNED_BYTE&&(oe=s.RG8)),b===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(oe=s.RG8UI),$===s.UNSIGNED_SHORT&&(oe=s.RG16UI),$===s.UNSIGNED_INT&&(oe=s.RG32UI),$===s.BYTE&&(oe=s.RG8I),$===s.SHORT&&(oe=s.RG16I),$===s.INT&&(oe=s.RG32I)),b===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(oe=s.RGB8UI),$===s.UNSIGNED_SHORT&&(oe=s.RGB16UI),$===s.UNSIGNED_INT&&(oe=s.RGB32UI),$===s.BYTE&&(oe=s.RGB8I),$===s.SHORT&&(oe=s.RGB16I),$===s.INT&&(oe=s.RGB32I)),b===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(oe=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(oe=s.RGBA16UI),$===s.UNSIGNED_INT&&(oe=s.RGBA32UI),$===s.BYTE&&(oe=s.RGBA8I),$===s.SHORT&&(oe=s.RGBA16I),$===s.INT&&(oe=s.RGBA32I)),b===s.RGB&&($===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(oe=s.R11F_G11F_B10F)),b===s.RGBA){const qe=me?Dl:bt.getTransfer(he);$===s.FLOAT&&(oe=s.RGBA32F),$===s.HALF_FLOAT&&(oe=s.RGBA16F),$===s.UNSIGNED_BYTE&&(oe=qe===Lt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function I(N,b){let $;return N?b===null||b===$r||b===za?$=s.DEPTH24_STENCIL8:b===Bi?$=s.DEPTH32F_STENCIL8:b===ka&&($=s.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===$r||b===za?$=s.DEPTH_COMPONENT24:b===Bi?$=s.DEPTH_COMPONENT32F:b===ka&&($=s.DEPTH_COMPONENT16),$}function H(N,b){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Gn&&N.minFilter!==Jn?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function L(N){const b=N.target;b.removeEventListener("dispose",L),Q(b),b.isVideoTexture&&x.delete(b)}function V(N){const b=N.target;b.removeEventListener("dispose",V),C(b)}function Q(N){const b=r.get(N);if(b.__webglInit===void 0)return;const $=N.source,he=_.get($);if(he){const me=he[b.__cacheKey];me.usedTimes--,me.usedTimes===0&&R(N),Object.keys(he).length===0&&_.delete($)}r.remove(N)}function R(N){const b=r.get(N);s.deleteTexture(b.__webglTexture);const $=N.source,he=_.get($);delete he[b.__cacheKey],d.memory.textures--}function C(N){const b=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(b.__webglFramebuffer[he]))for(let me=0;me<b.__webglFramebuffer[he].length;me++)s.deleteFramebuffer(b.__webglFramebuffer[he][me]);else s.deleteFramebuffer(b.__webglFramebuffer[he]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[he])}else{if(Array.isArray(b.__webglFramebuffer))for(let he=0;he<b.__webglFramebuffer.length;he++)s.deleteFramebuffer(b.__webglFramebuffer[he]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let he=0;he<b.__webglColorRenderbuffer.length;he++)b.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[he]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const $=N.textures;for(let he=0,me=$.length;he<me;he++){const oe=r.get($[he]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),d.memory.textures--),r.remove($[he])}r.remove(N)}let G=0;function J(){G=0}function ne(){const N=G;return N>=o.maxTextures&&ut("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),G+=1,N}function le(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function ae(N,b){const $=r.get(N);if(N.isVideoTexture&&At(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&$.__version!==N.version){const he=N.image;if(he===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Z($,N,b);return}}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+b)}function de(N,b){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){Z($,N,b);return}else N.isExternalTexture&&($.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+b)}function fe(N,b){const $=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){Z($,N,b);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+b)}function z(N,b){const $=r.get(N);if(N.version>0&&$.__version!==N.version){ue($,N,b);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+b)}const se={[dd]:s.REPEAT,[Oi]:s.CLAMP_TO_EDGE,[fd]:s.MIRRORED_REPEAT},te={[Gn]:s.NEAREST,[wv]:s.NEAREST_MIPMAP_NEAREST,[rl]:s.NEAREST_MIPMAP_LINEAR,[Jn]:s.LINEAR,[Mu]:s.LINEAR_MIPMAP_NEAREST,[qr]:s.LINEAR_MIPMAP_LINEAR},F={[Nv]:s.NEVER,[Fv]:s.ALWAYS,[Pv]:s.LESS,[Jm]:s.LEQUAL,[Lv]:s.EQUAL,[Iv]:s.GEQUAL,[Dv]:s.GREATER,[Uv]:s.NOTEQUAL};function re(N,b){if(b.type===Bi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Jn||b.magFilter===Mu||b.magFilter===rl||b.magFilter===qr||b.minFilter===Jn||b.minFilter===Mu||b.minFilter===rl||b.minFilter===qr)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,se[b.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,se[b.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,se[b.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,te[b.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,te[b.minFilter]),b.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,F[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Gn||b.minFilter!==rl&&b.minFilter!==qr||b.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function De(N,b){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",L));const he=b.source;let me=_.get(he);me===void 0&&(me={},_.set(he,me));const oe=le(b);if(oe!==N.__cacheKey){me[oe]===void 0&&(me[oe]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,$=!0),me[oe].usedTimes++;const qe=me[N.__cacheKey];qe!==void 0&&(me[N.__cacheKey].usedTimes--,qe.usedTimes===0&&R(b)),N.__cacheKey=oe,N.__webglTexture=me[oe].texture}return $}function Pe(N,b,$){return Math.floor(Math.floor(N/$)/b)}function He(N,b,$,he){const oe=N.updateRanges;if(oe.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,$,he,b.data);else{oe.sort((ve,Te)=>ve.start-Te.start);let qe=0;for(let ve=1;ve<oe.length;ve++){const Te=oe[qe],it=oe[ve],Je=Te.start+Te.count,Le=Pe(it.start,b.width,4),rt=Pe(Te.start,b.width,4);it.start<=Je+1&&Le===rt&&Pe(it.start+it.count-1,b.width,4)===Le?Te.count=Math.max(Te.count,it.start+it.count-Te.start):(++qe,oe[qe]=it)}oe.length=qe+1;const Ae=s.getParameter(s.UNPACK_ROW_LENGTH),Ke=s.getParameter(s.UNPACK_SKIP_PIXELS),Ye=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let ve=0,Te=oe.length;ve<Te;ve++){const it=oe[ve],Je=Math.floor(it.start/4),Le=Math.ceil(it.count/4),rt=Je%b.width,B=Math.floor(Je/b.width),Ce=Le,Ee=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),s.pixelStorei(s.UNPACK_SKIP_ROWS,B),n.texSubImage2D(s.TEXTURE_2D,0,rt,B,Ce,Ee,$,he,b.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ke),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ye)}}function Z(N,b,$){let he=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(he=s.TEXTURE_3D);const me=De(N,b),oe=b.source;n.bindTexture(he,N.__webglTexture,s.TEXTURE0+$);const qe=r.get(oe);if(oe.version!==qe.__version||me===!0){n.activeTexture(s.TEXTURE0+$);const Ae=bt.getPrimaries(bt.workingColorSpace),Ke=b.colorSpace===Mr?null:bt.getPrimaries(b.colorSpace),Ye=b.colorSpace===Mr||Ae===Ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ve=A(b.image,!1,o.maxTextureSize);ve=Xe(b,ve);const Te=c.convert(b.format,b.colorSpace),it=c.convert(b.type);let Je=P(b.internalFormat,Te,it,b.colorSpace,b.isVideoTexture);re(he,b);let Le;const rt=b.mipmaps,B=b.isVideoTexture!==!0,Ce=qe.__version===void 0||me===!0,Ee=oe.dataReady,be=H(b,ve);if(b.isDepthTexture)Je=I(b.format===Ha,b.type),Ce&&(B?n.texStorage2D(s.TEXTURE_2D,1,Je,ve.width,ve.height):n.texImage2D(s.TEXTURE_2D,0,Je,ve.width,ve.height,0,Te,it,null));else if(b.isDataTexture)if(rt.length>0){B&&Ce&&n.texStorage2D(s.TEXTURE_2D,be,Je,rt[0].width,rt[0].height);for(let ye=0,pe=rt.length;ye<pe;ye++)Le=rt[ye],B?Ee&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,Le.width,Le.height,Te,it,Le.data):n.texImage2D(s.TEXTURE_2D,ye,Je,Le.width,Le.height,0,Te,it,Le.data);b.generateMipmaps=!1}else B?(Ce&&n.texStorage2D(s.TEXTURE_2D,be,Je,ve.width,ve.height),Ee&&He(b,ve,Te,it)):n.texImage2D(s.TEXTURE_2D,0,Je,ve.width,ve.height,0,Te,it,ve.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){B&&Ce&&n.texStorage3D(s.TEXTURE_2D_ARRAY,be,Je,rt[0].width,rt[0].height,ve.depth);for(let ye=0,pe=rt.length;ye<pe;ye++)if(Le=rt[ye],b.format!==ui)if(Te!==null)if(B){if(Ee)if(b.layerUpdates.size>0){const ze=fm(Le.width,Le.height,b.format,b.type);for(const ot of b.layerUpdates){const Pt=Le.data.subarray(ot*ze/Le.data.BYTES_PER_ELEMENT,(ot+1)*ze/Le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,ot,Le.width,Le.height,1,Te,Pt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Le.width,Le.height,ve.depth,Te,Le.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,Je,Le.width,Le.height,ve.depth,0,Le.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?Ee&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Le.width,Le.height,ve.depth,Te,it,Le.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ye,Je,Le.width,Le.height,ve.depth,0,Te,it,Le.data)}else{B&&Ce&&n.texStorage2D(s.TEXTURE_2D,be,Je,rt[0].width,rt[0].height);for(let ye=0,pe=rt.length;ye<pe;ye++)Le=rt[ye],b.format!==ui?Te!==null?B?Ee&&n.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,Le.width,Le.height,Te,Le.data):n.compressedTexImage2D(s.TEXTURE_2D,ye,Je,Le.width,Le.height,0,Le.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?Ee&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,Le.width,Le.height,Te,it,Le.data):n.texImage2D(s.TEXTURE_2D,ye,Je,Le.width,Le.height,0,Te,it,Le.data)}else if(b.isDataArrayTexture)if(B){if(Ce&&n.texStorage3D(s.TEXTURE_2D_ARRAY,be,Je,ve.width,ve.height,ve.depth),Ee)if(b.layerUpdates.size>0){const ye=fm(ve.width,ve.height,b.format,b.type);for(const pe of b.layerUpdates){const ze=ve.data.subarray(pe*ye/ve.data.BYTES_PER_ELEMENT,(pe+1)*ye/ve.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,ve.width,ve.height,1,Te,it,ze)}b.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Te,it,ve.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,ve.width,ve.height,ve.depth,0,Te,it,ve.data);else if(b.isData3DTexture)B?(Ce&&n.texStorage3D(s.TEXTURE_3D,be,Je,ve.width,ve.height,ve.depth),Ee&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Te,it,ve.data)):n.texImage3D(s.TEXTURE_3D,0,Je,ve.width,ve.height,ve.depth,0,Te,it,ve.data);else if(b.isFramebufferTexture){if(Ce)if(B)n.texStorage2D(s.TEXTURE_2D,be,Je,ve.width,ve.height);else{let ye=ve.width,pe=ve.height;for(let ze=0;ze<be;ze++)n.texImage2D(s.TEXTURE_2D,ze,Je,ye,pe,0,Te,it,null),ye>>=1,pe>>=1}}else if(rt.length>0){if(B&&Ce){const ye=at(rt[0]);n.texStorage2D(s.TEXTURE_2D,be,Je,ye.width,ye.height)}for(let ye=0,pe=rt.length;ye<pe;ye++)Le=rt[ye],B?Ee&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,Te,it,Le):n.texImage2D(s.TEXTURE_2D,ye,Je,Te,it,Le);b.generateMipmaps=!1}else if(B){if(Ce){const ye=at(ve);n.texStorage2D(s.TEXTURE_2D,be,Je,ye.width,ye.height)}Ee&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,it,ve)}else n.texImage2D(s.TEXTURE_2D,0,Je,Te,it,ve);y(b)&&v(he),qe.__version=oe.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ue(N,b,$){if(b.image.length!==6)return;const he=De(N,b),me=b.source;n.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+$);const oe=r.get(me);if(me.version!==oe.__version||he===!0){n.activeTexture(s.TEXTURE0+$);const qe=bt.getPrimaries(bt.workingColorSpace),Ae=b.colorSpace===Mr?null:bt.getPrimaries(b.colorSpace),Ke=b.colorSpace===Mr||qe===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const Ye=b.isCompressedTexture||b.image[0].isCompressedTexture,ve=b.image[0]&&b.image[0].isDataTexture,Te=[];for(let pe=0;pe<6;pe++)!Ye&&!ve?Te[pe]=A(b.image[pe],!0,o.maxCubemapSize):Te[pe]=ve?b.image[pe].image:b.image[pe],Te[pe]=Xe(b,Te[pe]);const it=Te[0],Je=c.convert(b.format,b.colorSpace),Le=c.convert(b.type),rt=P(b.internalFormat,Je,Le,b.colorSpace),B=b.isVideoTexture!==!0,Ce=oe.__version===void 0||he===!0,Ee=me.dataReady;let be=H(b,it);re(s.TEXTURE_CUBE_MAP,b);let ye;if(Ye){B&&Ce&&n.texStorage2D(s.TEXTURE_CUBE_MAP,be,rt,it.width,it.height);for(let pe=0;pe<6;pe++){ye=Te[pe].mipmaps;for(let ze=0;ze<ye.length;ze++){const ot=ye[ze];b.format!==ui?Je!==null?B?Ee&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ze,0,0,ot.width,ot.height,Je,ot.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ze,rt,ot.width,ot.height,0,ot.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ze,0,0,ot.width,ot.height,Je,Le,ot.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ze,rt,ot.width,ot.height,0,Je,Le,ot.data)}}}else{if(ye=b.mipmaps,B&&Ce){ye.length>0&&be++;const pe=at(Te[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,be,rt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ve){B?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Te[pe].width,Te[pe].height,Je,Le,Te[pe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,rt,Te[pe].width,Te[pe].height,0,Je,Le,Te[pe].data);for(let ze=0;ze<ye.length;ze++){const Pt=ye[ze].image[pe].image;B?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ze+1,0,0,Pt.width,Pt.height,Je,Le,Pt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ze+1,rt,Pt.width,Pt.height,0,Je,Le,Pt.data)}}else{B?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Je,Le,Te[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,rt,Je,Le,Te[pe]);for(let ze=0;ze<ye.length;ze++){const ot=ye[ze];B?Ee&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ze+1,0,0,Je,Le,ot.image[pe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ze+1,rt,Je,Le,ot.image[pe])}}}y(b)&&v(s.TEXTURE_CUBE_MAP),oe.__version=me.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Se(N,b,$,he,me,oe){const qe=c.convert($.format,$.colorSpace),Ae=c.convert($.type),Ke=P($.internalFormat,qe,Ae,$.colorSpace),Ye=r.get(b),ve=r.get($);if(ve.__renderTarget=b,!Ye.__hasExternalTextures){const Te=Math.max(1,b.width>>oe),it=Math.max(1,b.height>>oe);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?n.texImage3D(me,oe,Ke,Te,it,b.depth,0,qe,Ae,null):n.texImage2D(me,oe,Ke,Te,it,0,qe,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,N),ke(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,me,ve.__webglTexture,0,Tt(b)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,me,ve.__webglTexture,oe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(N,b,$){if(s.bindRenderbuffer(s.RENDERBUFFER,N),b.depthBuffer){const he=b.depthTexture,me=he&&he.isDepthTexture?he.type:null,oe=I(b.stencilBuffer,me),qe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=Tt(b);ke(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,oe,b.width,b.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,oe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,oe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,N)}else{const he=b.textures;for(let me=0;me<he.length;me++){const oe=he[me],qe=c.convert(oe.format,oe.colorSpace),Ae=c.convert(oe.type),Ke=P(oe.internalFormat,qe,Ae,oe.colorSpace),Ye=Tt(b);$&&ke(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,Ke,b.width,b.height):ke(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,Ke,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ke,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Oe(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=r.get(b.depthTexture);he.__renderTarget=b,(!he.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ae(b.depthTexture,0);const me=he.__webglTexture,oe=Tt(b);if(b.depthTexture.format===Va)ke(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,me,0);else if(b.depthTexture.format===Ha)ke(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function ft(N){const b=r.get(N),$=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const he=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),he){const me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,he.removeEventListener("dispose",me)};he.addEventListener("dispose",me),b.__depthDisposeCallback=me}b.__boundDepthTexture=he}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const he=N.texture.mipmaps;he&&he.length>0?Oe(b.__webglFramebuffer[0],N):Oe(b.__webglFramebuffer,N)}else if($){b.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[he]),b.__webglDepthbuffer[he]===void 0)b.__webglDepthbuffer[he]=s.createRenderbuffer(),Fe(b.__webglDepthbuffer[he],N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,oe)}}else{const he=N.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Fe(b.__webglDepthbuffer,N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,oe)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function $t(N,b,$){const he=r.get(N);b!==void 0&&Se(he.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&ft(N)}function dt(N){const b=N.texture,$=r.get(N),he=r.get(b);N.addEventListener("dispose",V);const me=N.textures,oe=N.isWebGLCubeRenderTarget===!0,qe=me.length>1;if(qe||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=b.version,d.memory.textures++),oe){$.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[Ae]=[];for(let Ke=0;Ke<b.mipmaps.length;Ke++)$.__webglFramebuffer[Ae][Ke]=s.createFramebuffer()}else $.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ae=0;Ae<b.mipmaps.length;Ae++)$.__webglFramebuffer[Ae]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(qe)for(let Ae=0,Ke=me.length;Ae<Ke;Ae++){const Ye=r.get(me[Ae]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),d.memory.textures++)}if(N.samples>0&&ke(N)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ae=0;Ae<me.length;Ae++){const Ke=me[Ae];$.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Ae]);const Ye=c.convert(Ke.format,Ke.colorSpace),ve=c.convert(Ke.type),Te=P(Ke.internalFormat,Ye,ve,Ke.colorSpace,N.isXRRenderTarget===!0),it=Tt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,it,Te,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,$.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe($.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),re(s.TEXTURE_CUBE_MAP,b);for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ke=0;Ke<b.mipmaps.length;Ke++)Se($.__webglFramebuffer[Ae][Ke],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke);else Se($.__webglFramebuffer[Ae],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(b)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qe){for(let Ae=0,Ke=me.length;Ae<Ke;Ae++){const Ye=me[Ae],ve=r.get(Ye);let Te=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Te=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Te,ve.__webglTexture),re(Te,Ye),Se($.__webglFramebuffer,N,Ye,s.COLOR_ATTACHMENT0+Ae,Te,0),y(Ye)&&v(Te)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ae=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,he.__webglTexture),re(Ae,b),b.mipmaps&&b.mipmaps.length>0)for(let Ke=0;Ke<b.mipmaps.length;Ke++)Se($.__webglFramebuffer[Ke],N,b,s.COLOR_ATTACHMENT0,Ae,Ke);else Se($.__webglFramebuffer,N,b,s.COLOR_ATTACHMENT0,Ae,0);y(b)&&v(Ae),n.unbindTexture()}N.depthBuffer&&ft(N)}function Nt(N){const b=N.textures;for(let $=0,he=b.length;$<he;$++){const me=b[$];if(y(me)){const oe=U(N),qe=r.get(me).__webglTexture;n.bindTexture(oe,qe),v(oe),n.unbindTexture()}}}const O=[],xt=[];function pt(N){if(N.samples>0){if(ke(N)===!1){const b=N.textures,$=N.width,he=N.height;let me=s.COLOR_BUFFER_BIT;const oe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(N),Ae=b.length>1;if(Ae)for(let Ye=0;Ye<b.length;Ye++)n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Ke=N.texture.mipmaps;Ke&&Ke.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Ye=0;Ye<b.length;Ye++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Ye]);const ve=r.get(b[Ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ve,0)}s.blitFramebuffer(0,0,$,he,0,0,$,he,me,s.NEAREST),m===!0&&(O.length=0,xt.length=0,O.push(s.COLOR_ATTACHMENT0+Ye),N.depthBuffer&&N.resolveDepthBuffer===!1&&(O.push(oe),xt.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,xt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,O))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Ye=0;Ye<b.length;Ye++){n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Ye]);const ve=r.get(b[Ye]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,ve,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Tt(N){return Math.min(o.maxSamples,N.samples)}function ke(N){const b=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function At(N){const b=d.render.frame;x.get(N)!==b&&(x.set(N,b),N.update())}function Xe(N,b){const $=N.colorSpace,he=N.format,me=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||$!==Ws&&$!==Mr&&(bt.getTransfer($)===Lt?(he!==ui||me!==Vi)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",$)),b}function at(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=ne,this.resetTextureUnits=J,this.setTexture2D=ae,this.setTexture2DArray=de,this.setTexture3D=fe,this.setTextureCube=z,this.rebindTextures=$t,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ke}function m3(s,e){function n(r,o=Mr){let c;const d=bt.getTransfer(o);if(r===Vi)return s.UNSIGNED_BYTE;if(r===jd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Xd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===qm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===$m)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Xm)return s.BYTE;if(r===Ym)return s.SHORT;if(r===ka)return s.UNSIGNED_SHORT;if(r===Wd)return s.INT;if(r===$r)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===Xs)return s.HALF_FLOAT;if(r===Km)return s.ALPHA;if(r===Zm)return s.RGB;if(r===ui)return s.RGBA;if(r===Va)return s.DEPTH_COMPONENT;if(r===Ha)return s.DEPTH_STENCIL;if(r===Qm)return s.RED;if(r===Yd)return s.RED_INTEGER;if(r===qd)return s.RG;if(r===$d)return s.RG_INTEGER;if(r===Kd)return s.RGBA_INTEGER;if(r===Tl||r===Al||r===Cl||r===Rl)if(d===Lt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Tl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Al)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Tl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Al)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hd||r===pd||r===md||r===xd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===hd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===pd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===md)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===gd||r===vd||r===_d)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===gd||r===vd)return d===Lt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===_d)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===yd||r===Sd||r===Md||r===Ed||r===bd||r===wd||r===Td||r===Ad||r===Cd||r===Rd||r===Nd||r===Pd||r===Ld||r===Dd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===yd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Md)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ed)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Td)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ad)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Cd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ld)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Dd)return d===Lt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ud||r===Id||r===Fd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Ud)return d===Lt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Id)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Od||r===Bd||r===kd||r===zd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Od)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Bd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===kd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===zd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===za?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const x3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g3=`
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

}`;class v3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new d0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Wi({vertexShader:x3,fragmentShader:g3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Gi(new Ol(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _3 extends Ys{constructor(e,n){super();const r=this;let o=null,c=1,d=null,f="local-floor",m=1,h=null,x=null,g=null,_=null,M=null,w=null;const A=typeof XRWebGLBinding<"u",y=new v3,v={},U=n.getContextAttributes();let P=null,I=null;const H=[],L=[],V=new Ut;let Q=null;const R=new Qn;R.viewport=new qt;const C=new Qn;C.viewport=new qt;const G=[R,C],J=new B_;let ne=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=H[Z];return ue===void 0&&(ue=new Gu,H[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=H[Z];return ue===void 0&&(ue=new Gu,H[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=H[Z];return ue===void 0&&(ue=new Gu,H[Z]=ue),ue.getHandSpace()};function ae(Z){const ue=L.indexOf(Z.inputSource);if(ue===-1)return;const Se=H[ue];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,h||d),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function de(){o.removeEventListener("select",ae),o.removeEventListener("selectstart",ae),o.removeEventListener("selectend",ae),o.removeEventListener("squeeze",ae),o.removeEventListener("squeezestart",ae),o.removeEventListener("squeezeend",ae),o.removeEventListener("end",de),o.removeEventListener("inputsourceschange",fe);for(let Z=0;Z<H.length;Z++){const ue=L[Z];ue!==null&&(L[Z]=null,H[Z].disconnect(ue))}ne=null,le=null,y.reset();for(const Z in v)delete v[Z];e.setRenderTarget(P),M=null,_=null,g=null,o=null,I=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(Q),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,r.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){f=Z,r.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",ae),o.addEventListener("selectstart",ae),o.addEventListener("selectend",ae),o.addEventListener("squeeze",ae),o.addEventListener("squeezestart",ae),o.addEventListener("squeezeend",ae),o.addEventListener("end",de),o.addEventListener("inputsourceschange",fe),U.xrCompatible!==!0&&await n.makeXRCompatible(),Q=e.getPixelRatio(),e.getSize(V),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Fe=null,Oe=null;U.depth&&(Oe=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=U.stencil?Ha:Va,Fe=U.stencil?za:$r);const ft={colorFormat:n.RGBA8,depthFormat:Oe,scaleFactor:c};g=this.getBinding(),_=g.createProjectionLayer(ft),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),I=new Kr(_.textureWidth,_.textureHeight,{format:ui,type:Vi,depthTexture:new u0(_.textureWidth,_.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Se={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,Se),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new Kr(M.framebufferWidth,M.framebufferHeight,{format:ui,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await o.requestReferenceSpace(f),He.setContext(o),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function fe(Z){for(let ue=0;ue<Z.removed.length;ue++){const Se=Z.removed[ue],Fe=L.indexOf(Se);Fe>=0&&(L[Fe]=null,H[Fe].disconnect(Se))}for(let ue=0;ue<Z.added.length;ue++){const Se=Z.added[ue];let Fe=L.indexOf(Se);if(Fe===-1){for(let ft=0;ft<H.length;ft++)if(ft>=L.length){L.push(Se),Fe=ft;break}else if(L[ft]===null){L[ft]=Se,Fe=ft;break}if(Fe===-1)break}const Oe=H[Fe];Oe&&Oe.connect(Se)}}const z=new ce,se=new ce;function te(Z,ue,Se){z.setFromMatrixPosition(ue.matrixWorld),se.setFromMatrixPosition(Se.matrixWorld);const Fe=z.distanceTo(se),Oe=ue.projectionMatrix.elements,ft=Se.projectionMatrix.elements,$t=Oe[14]/(Oe[10]-1),dt=Oe[14]/(Oe[10]+1),Nt=(Oe[9]+1)/Oe[5],O=(Oe[9]-1)/Oe[5],xt=(Oe[8]-1)/Oe[0],pt=(ft[8]+1)/ft[0],Tt=$t*xt,ke=$t*pt,At=Fe/(-xt+pt),Xe=At*-xt;if(ue.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Xe),Z.translateZ(At),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Oe[10]===-1)Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const at=$t+At,N=dt+At,b=Tt-Xe,$=ke+(Fe-Xe),he=Nt*dt/N*at,me=O*dt/N*at;Z.projectionMatrix.makePerspective(b,$,he,me,at,N),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function F(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let ue=Z.near,Se=Z.far;y.texture!==null&&(y.depthNear>0&&(ue=y.depthNear),y.depthFar>0&&(Se=y.depthFar)),J.near=C.near=R.near=ue,J.far=C.far=R.far=Se,(ne!==J.near||le!==J.far)&&(o.updateRenderState({depthNear:J.near,depthFar:J.far}),ne=J.near,le=J.far),J.layers.mask=Z.layers.mask|6,R.layers.mask=J.layers.mask&3,C.layers.mask=J.layers.mask&5;const Fe=Z.parent,Oe=J.cameras;F(J,Fe);for(let ft=0;ft<Oe.length;ft++)F(Oe[ft],Fe);Oe.length===2?te(J,R,C):J.projectionMatrix.copy(R.projectionMatrix),re(Z,J,Fe)};function re(Z,ue,Se){Se===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ja*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(Z){m=Z,_!==null&&(_.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(J)},this.getCameraTexture=function(Z){return v[Z]};let De=null;function Pe(Z,ue){if(x=ue.getViewerPose(h||d),w=ue,x!==null){const Se=x.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let Fe=!1;Se.length!==J.cameras.length&&(J.cameras.length=0,Fe=!0);for(let dt=0;dt<Se.length;dt++){const Nt=Se[dt];let O=null;if(M!==null)O=M.getViewport(Nt);else{const pt=g.getViewSubImage(_,Nt);O=pt.viewport,dt===0&&(e.setRenderTargetTextures(I,pt.colorTexture,pt.depthStencilTexture),e.setRenderTarget(I))}let xt=G[dt];xt===void 0&&(xt=new Qn,xt.layers.enable(dt),xt.viewport=new qt,G[dt]=xt),xt.matrix.fromArray(Nt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(Nt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(O.x,O.y,O.width,O.height),dt===0&&(J.matrix.copy(xt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Fe===!0&&J.cameras.push(xt)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){g=r.getBinding();const dt=g.getDepthInformation(Se[0]);dt&&dt.isValid&&dt.texture&&y.init(dt,o.renderState)}if(Oe&&Oe.includes("camera-access")&&A){e.state.unbindTexture(),g=r.getBinding();for(let dt=0;dt<Se.length;dt++){const Nt=Se[dt].camera;if(Nt){let O=v[Nt];O||(O=new d0,v[Nt]=O);const xt=g.getCameraImage(Nt);O.sourceTexture=xt}}}}for(let Se=0;Se<H.length;Se++){const Fe=L[Se],Oe=H[Se];Fe!==null&&Oe!==void 0&&Oe.update(Fe,ue,h||d)}De&&De(Z,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),w=null}const He=new f0;He.setAnimationLoop(Pe),this.setAnimationLoop=function(Z){De=Z},this.dispose=function(){}}}const Wr=new Hi,y3=new nn;function S3(s,e){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,a0(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function o(y,v,U,P,I){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),g(y,v)):v.isMeshPhongMaterial?(c(y,v),x(y,v)):v.isMeshStandardMaterial?(c(y,v),_(y,v),v.isMeshPhysicalMaterial&&M(y,v,I)):v.isMeshMatcapMaterial?(c(y,v),w(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),A(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&f(y,v)):v.isPointsMaterial?m(y,v,U,P):v.isSpriteMaterial?h(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Dn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Dn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const U=e.get(v),P=U.envMap,I=U.envMapRotation;P&&(y.envMap.value=P,Wr.copy(I),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),y.envMapRotation.value.setFromMatrix4(y3.makeRotationFromEuler(Wr)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function f(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,U,P){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*U,y.scale.value=P*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function x(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function _(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,U){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Dn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,v){v.matcap&&(y.matcap.value=v.matcap)}function A(y,v){const U=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function M3(s,e,n,r){let o={},c={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,P){const I=P.program;r.uniformBlockBinding(U,I)}function h(U,P){let I=o[U.id];I===void 0&&(w(U),I=x(U),o[U.id]=I,U.addEventListener("dispose",y));const H=P.program;r.updateUBOMapping(U,H);const L=e.render.frame;c[U.id]!==L&&(_(U),c[U.id]=L)}function x(U){const P=g();U.__bindingPointIndex=P;const I=s.createBuffer(),H=U.__size,L=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,I),s.bufferData(s.UNIFORM_BUFFER,H,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,I),I}function g(){for(let U=0;U<f;U++)if(d.indexOf(U)===-1)return d.push(U),U;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(U){const P=o[U.id],I=U.uniforms,H=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let L=0,V=I.length;L<V;L++){const Q=Array.isArray(I[L])?I[L]:[I[L]];for(let R=0,C=Q.length;R<C;R++){const G=Q[R];if(M(G,L,R,H)===!0){const J=G.__offset,ne=Array.isArray(G.value)?G.value:[G.value];let le=0;for(let ae=0;ae<ne.length;ae++){const de=ne[ae],fe=A(de);typeof de=="number"||typeof de=="boolean"?(G.__data[0]=de,s.bufferSubData(s.UNIFORM_BUFFER,J+le,G.__data)):de.isMatrix3?(G.__data[0]=de.elements[0],G.__data[1]=de.elements[1],G.__data[2]=de.elements[2],G.__data[3]=0,G.__data[4]=de.elements[3],G.__data[5]=de.elements[4],G.__data[6]=de.elements[5],G.__data[7]=0,G.__data[8]=de.elements[6],G.__data[9]=de.elements[7],G.__data[10]=de.elements[8],G.__data[11]=0):(de.toArray(G.__data,le),le+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(U,P,I,H){const L=U.value,V=P+"_"+I;if(H[V]===void 0)return typeof L=="number"||typeof L=="boolean"?H[V]=L:H[V]=L.clone(),!0;{const Q=H[V];if(typeof L=="number"||typeof L=="boolean"){if(Q!==L)return H[V]=L,!0}else if(Q.equals(L)===!1)return Q.copy(L),!0}return!1}function w(U){const P=U.uniforms;let I=0;const H=16;for(let V=0,Q=P.length;V<Q;V++){const R=Array.isArray(P[V])?P[V]:[P[V]];for(let C=0,G=R.length;C<G;C++){const J=R[C],ne=Array.isArray(J.value)?J.value:[J.value];for(let le=0,ae=ne.length;le<ae;le++){const de=ne[le],fe=A(de),z=I%H,se=z%fe.boundary,te=z+se;I+=se,te!==0&&H-te<fe.storage&&(I+=H-te),J.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=I,I+=fe.storage}}}const L=I%H;return L>0&&(I+=H-L),U.__size=I,U.__cache={},this}function A(U){const P={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(P.boundary=4,P.storage=4):U.isVector2?(P.boundary=8,P.storage=8):U.isVector3||U.isColor?(P.boundary=16,P.storage=12):U.isVector4?(P.boundary=16,P.storage=16):U.isMatrix3?(P.boundary=48,P.storage=48):U.isMatrix4?(P.boundary=64,P.storage=64):U.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",U),P}function y(U){const P=U.target;P.removeEventListener("dispose",y);const I=d.indexOf(P.__bindingPointIndex);d.splice(I,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete c[P.id]}function v(){for(const U in o)s.deleteBuffer(o[U]);d=[],o={},c={}}return{bind:m,update:h,dispose:v}}const E3=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Ui=null;function b3(){return Ui===null&&(Ui=new A_(E3,32,32,qd,Xs),Ui.minFilter=Jn,Ui.magFilter=Jn,Ui.wrapS=Oi,Ui.wrapT=Oi,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}class w3{constructor(e={}){const{canvas:n=Ov(),context:r=null,depth:o=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const w=new Set([Kd,$d,Yd]),A=new Set([Vi,$r,ka,za,jd,Xd]),y=new Uint32Array(4),v=new Int32Array(4);let U=null,P=null;const I=[],H=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=br,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let V=!1;this._outputColorSpace=Hn;let Q=0,R=0,C=null,G=-1,J=null;const ne=new qt,le=new qt;let ae=null;const de=new Dt(0);let fe=0,z=n.width,se=n.height,te=1,F=null,re=null;const De=new qt(0,0,z,se),Pe=new qt(0,0,z,se);let He=!1;const Z=new c0;let ue=!1,Se=!1;const Fe=new nn,Oe=new ce,ft=new qt,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Nt(){return C===null?te:1}let O=r;function xt(T,j){return n.getContext(T,j)}try{const T={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gd}`),n.addEventListener("webglcontextlost",ye,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",ze,!1),O===null){const j="webgl2";if(O=xt(j,T),O===null)throw xt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let pt,Tt,ke,At,Xe,at,N,b,$,he,me,oe,qe,Ae,Ke,Ye,ve,Te,it,Je,Le,rt,B,Ce;function Ee(){pt=new DS(O),pt.init(),rt=new m3(O,pt),Tt=new bS(O,pt,e,rt),ke=new h3(O,pt),Tt.reversedDepthBuffer&&_&&ke.buffers.depth.setReversed(!0),At=new FS(O),Xe=new e3,at=new p3(O,pt,ke,Xe,Tt,rt,At),N=new TS(L),b=new LS(L),$=new z_(O),B=new MS(O,$),he=new US(O,$,At,B),me=new BS(O,he,$,At),it=new OS(O,Tt,at),Ye=new wS(Xe),oe=new JM(L,N,b,pt,Tt,B,Ye),qe=new S3(L,Xe),Ae=new n3,Ke=new l3(pt),Te=new SS(L,N,b,ke,me,M,m),ve=new d3(L,me,Tt),Ce=new M3(O,At,Tt,ke),Je=new ES(O,pt,At),Le=new IS(O,pt,At),At.programs=oe.programs,L.capabilities=Tt,L.extensions=pt,L.properties=Xe,L.renderLists=Ae,L.shadowMap=ve,L.state=ke,L.info=At}Ee();const be=new _3(L,O);this.xr=be,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=pt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(T){T!==void 0&&(te=T,this.setSize(z,se,!1))},this.getSize=function(T){return T.set(z,se)},this.setSize=function(T,j,q=!0){if(be.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,se=j,n.width=Math.floor(T*te),n.height=Math.floor(j*te),q===!0&&(n.style.width=T+"px",n.style.height=j+"px"),this.setViewport(0,0,T,j)},this.getDrawingBufferSize=function(T){return T.set(z*te,se*te).floor()},this.setDrawingBufferSize=function(T,j,q){z=T,se=j,te=q,n.width=Math.floor(T*q),n.height=Math.floor(j*q),this.setViewport(0,0,T,j)},this.getCurrentViewport=function(T){return T.copy(ne)},this.getViewport=function(T){return T.copy(De)},this.setViewport=function(T,j,q,ie){T.isVector4?De.set(T.x,T.y,T.z,T.w):De.set(T,j,q,ie),ke.viewport(ne.copy(De).multiplyScalar(te).round())},this.getScissor=function(T){return T.copy(Pe)},this.setScissor=function(T,j,q,ie){T.isVector4?Pe.set(T.x,T.y,T.z,T.w):Pe.set(T,j,q,ie),ke.scissor(le.copy(Pe).multiplyScalar(te).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(T){ke.setScissorTest(He=T)},this.setOpaqueSort=function(T){F=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(T=!0,j=!0,q=!0){let ie=0;if(T){let X=!1;if(C!==null){const we=C.texture.format;X=w.has(we)}if(X){const we=C.texture.type,Re=A.has(we),Ge=Te.getClearColor(),Ie=Te.getClearAlpha(),et=Ge.r,$e=Ge.g,Qe=Ge.b;Re?(y[0]=et,y[1]=$e,y[2]=Qe,y[3]=Ie,O.clearBufferuiv(O.COLOR,0,y)):(v[0]=et,v[1]=$e,v[2]=Qe,v[3]=Ie,O.clearBufferiv(O.COLOR,0,v))}else ie|=O.COLOR_BUFFER_BIT}j&&(ie|=O.DEPTH_BUFFER_BIT),q&&(ie|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ye,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",ze,!1),Te.dispose(),Ae.dispose(),Ke.dispose(),Xe.dispose(),N.dispose(),b.dispose(),me.dispose(),B.dispose(),Ce.dispose(),oe.dispose(),be.dispose(),be.removeEventListener("sessionstart",Xi),be.removeEventListener("sessionend",$a),In.stop()};function ye(T){T.preventDefault(),Yp("WebGLRenderer: Context Lost."),V=!0}function pe(){Yp("WebGLRenderer: Context Restored."),V=!1;const T=At.autoReset,j=ve.enabled,q=ve.autoUpdate,ie=ve.needsUpdate,X=ve.type;Ee(),At.autoReset=T,ve.enabled=j,ve.autoUpdate=q,ve.needsUpdate=ie,ve.type=X}function ze(T){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ot(T){const j=T.target;j.removeEventListener("dispose",ot),Pt(j)}function Pt(T){St(T),Xe.remove(T)}function St(T){const j=Xe.get(T).programs;j!==void 0&&(j.forEach(function(q){oe.releaseProgram(q)}),T.isShaderMaterial&&oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,j,q,ie,X,we){j===null&&(j=$t);const Re=X.isMesh&&X.matrixWorld.determinant()<0,Ge=Za(T,j,q,ie,X);ke.setMaterial(ie,Re);let Ie=q.index,et=1;if(ie.wireframe===!0){if(Ie=he.getWireframeAttribute(q),Ie===void 0)return;et=2}const $e=q.drawRange,Qe=q.attributes.position;let st=$e.start*et,wt=($e.start+$e.count)*et;we!==null&&(st=Math.max(st,we.start*et),wt=Math.min(wt,(we.start+we.count)*et)),Ie!==null?(st=Math.max(st,0),wt=Math.min(wt,Ie.count)):Qe!=null&&(st=Math.max(st,0),wt=Math.min(wt,Qe.count));const zt=wt-st;if(zt<0||zt===1/0)return;B.setup(X,ie,Ge,q,Ie);let Vt,Mt=Je;if(Ie!==null&&(Vt=$.get(Ie),Mt=Le,Mt.setIndex(Vt)),X.isMesh)ie.wireframe===!0?(ke.setLineWidth(ie.wireframeLinewidth*Nt()),Mt.setMode(O.LINES)):Mt.setMode(O.TRIANGLES);else if(X.isLine){let Ze=ie.linewidth;Ze===void 0&&(Ze=1),ke.setLineWidth(Ze*Nt()),X.isLineSegments?Mt.setMode(O.LINES):X.isLineLoop?Mt.setMode(O.LINE_LOOP):Mt.setMode(O.LINE_STRIP)}else X.isPoints?Mt.setMode(O.POINTS):X.isSprite&&Mt.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Wa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ze=X._multiDrawStarts,Ct=X._multiDrawCounts,vt=X._multiDrawCount,Sn=Ie?$.get(Ie).bytesPerElement:1,qi=Xe.get(ie).currentProgram.getUniforms();for(let dn=0;dn<vt;dn++)qi.setValue(O,"_gl_DrawID",dn),Mt.render(Ze[dn]/Sn,Ct[dn])}else if(X.isInstancedMesh)Mt.renderInstances(st,zt,X.count);else if(q.isInstancedBufferGeometry){const Ze=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ct=Math.min(q.instanceCount,Ze);Mt.renderInstances(st,zt,Ct)}else Mt.render(st,zt)};function Un(T,j,q){T.transparent===!0&&T.side===Fi&&T.forceSinglePass===!1?(T.side=Dn,T.needsUpdate=!0,Jr(T,j,q),T.side=wr,T.needsUpdate=!0,Jr(T,j,q),T.side=Fi):Jr(T,j,q)}this.compile=function(T,j,q=null){q===null&&(q=T),P=Ke.get(q),P.init(j),H.push(P),q.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(P.pushLight(X),X.castShadow&&P.pushShadow(X))}),T!==q&&T.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(P.pushLight(X),X.castShadow&&P.pushShadow(X))}),P.setupLights();const ie=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const we=X.material;if(we)if(Array.isArray(we))for(let Re=0;Re<we.length;Re++){const Ge=we[Re];Un(Ge,q,X),ie.add(Ge)}else Un(we,q,X),ie.add(we)}),P=H.pop(),ie},this.compileAsync=function(T,j,q=null){const ie=this.compile(T,j,q);return new Promise(X=>{function we(){if(ie.forEach(function(Re){Xe.get(Re).currentProgram.isReady()&&ie.delete(Re)}),ie.size===0){X(T);return}setTimeout(we,10)}pt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let un=null;function Ks(T){un&&un(T)}function Xi(){In.stop()}function $a(){In.start()}const In=new f0;In.setAnimationLoop(Ks),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(T){un=T,be.setAnimationLoop(T),T===null?In.stop():In.start()},be.addEventListener("sessionstart",Xi),be.addEventListener("sessionend",$a),this.render=function(T,j){if(j!==void 0&&j.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(j),j=be.getCamera()),T.isScene===!0&&T.onBeforeRender(L,T,j,C),P=Ke.get(T,H.length),P.init(j),H.push(P),Fe.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Z.setFromProjectionMatrix(Fe,vi,j.reversedDepth),Se=this.localClippingEnabled,ue=Ye.init(this.clippingPlanes,Se),U=Ae.get(T,I.length),U.init(),I.push(U),be.enabled===!0&&be.isPresenting===!0){const we=L.xr.getDepthSensingMesh();we!==null&&Yi(we,j,-1/0,L.sortObjects)}Yi(T,j,0,L.sortObjects),U.finish(),L.sortObjects===!0&&U.sort(F,re),dt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,dt&&Te.addToRenderList(U,T),this.info.render.frame++,ue===!0&&Ye.beginShadows();const q=P.state.shadowsArray;ve.render(q,T,j),ue===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=U.opaque,X=U.transmissive;if(P.setupLights(),j.isArrayCamera){const we=j.cameras;if(X.length>0)for(let Re=0,Ge=we.length;Re<Ge;Re++){const Ie=we[Re];Zr(ie,X,T,Ie)}dt&&Te.render(T);for(let Re=0,Ge=we.length;Re<Ge;Re++){const Ie=we[Re];Tr(U,T,Ie,Ie.viewport)}}else X.length>0&&Zr(ie,X,T,j),dt&&Te.render(T),Tr(U,T,j);C!==null&&R===0&&(at.updateMultisampleRenderTarget(C),at.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(L,T,j),B.resetDefaultState(),G=-1,J=null,H.pop(),H.length>0?(P=H[H.length-1],ue===!0&&Ye.setGlobalState(L.clippingPlanes,P.state.camera)):P=null,I.pop(),I.length>0?U=I[I.length-1]:U=null};function Yi(T,j,q,ie){if(T.visible===!1)return;if(T.layers.test(j.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(j);else if(T.isLight)P.pushLight(T),T.castShadow&&P.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){ie&&ft.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Fe);const Re=me.update(T),Ge=T.material;Ge.visible&&U.push(T,Re,Ge,q,ft.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Z.intersectsObject(T))){const Re=me.update(T),Ge=T.material;if(ie&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ft.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),ft.copy(Re.boundingSphere.center)),ft.applyMatrix4(T.matrixWorld).applyMatrix4(Fe)),Array.isArray(Ge)){const Ie=Re.groups;for(let et=0,$e=Ie.length;et<$e;et++){const Qe=Ie[et],st=Ge[Qe.materialIndex];st&&st.visible&&U.push(T,Re,st,q,ft.z,Qe)}}else Ge.visible&&U.push(T,Re,Ge,q,ft.z,null)}}const we=T.children;for(let Re=0,Ge=we.length;Re<Ge;Re++)Yi(we[Re],j,q,ie)}function Tr(T,j,q,ie){const{opaque:X,transmissive:we,transparent:Re}=T;P.setupLightsView(q),ue===!0&&Ye.setGlobalState(L.clippingPlanes,q),ie&&ke.viewport(ne.copy(ie)),X.length>0&&Qr(X,j,q),we.length>0&&Qr(we,j,q),Re.length>0&&Qr(Re,j,q),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Zr(T,j,q,ie){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;P.state.transmissionRenderTarget[ie.id]===void 0&&(P.state.transmissionRenderTarget[ie.id]=new Kr(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Xs:Vi,minFilter:qr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const we=P.state.transmissionRenderTarget[ie.id],Re=ie.viewport||ne;we.setSize(Re.z*L.transmissionResolutionScale,Re.w*L.transmissionResolutionScale);const Ge=L.getRenderTarget(),Ie=L.getActiveCubeFace(),et=L.getActiveMipmapLevel();L.setRenderTarget(we),L.getClearColor(de),fe=L.getClearAlpha(),fe<1&&L.setClearColor(16777215,.5),L.clear(),dt&&Te.render(q);const $e=L.toneMapping;L.toneMapping=br;const Qe=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),P.setupLightsView(ie),ue===!0&&Ye.setGlobalState(L.clippingPlanes,ie),Qr(T,q,ie),at.updateMultisampleRenderTarget(we),at.updateRenderTargetMipmap(we),pt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let wt=0,zt=j.length;wt<zt;wt++){const Vt=j[wt],{object:Mt,geometry:Ze,material:Ct,group:vt}=Vt;if(Ct.side===Fi&&Mt.layers.test(ie.layers)){const Sn=Ct.side;Ct.side=Dn,Ct.needsUpdate=!0,Ka(Mt,q,ie,Ze,Ct,vt),Ct.side=Sn,Ct.needsUpdate=!0,st=!0}}st===!0&&(at.updateMultisampleRenderTarget(we),at.updateRenderTargetMipmap(we))}L.setRenderTarget(Ge,Ie,et),L.setClearColor(de,fe),Qe!==void 0&&(ie.viewport=Qe),L.toneMapping=$e}function Qr(T,j,q){const ie=j.isScene===!0?j.overrideMaterial:null;for(let X=0,we=T.length;X<we;X++){const Re=T[X],{object:Ge,geometry:Ie,group:et}=Re;let $e=Re.material;$e.allowOverride===!0&&ie!==null&&($e=ie),Ge.layers.test(q.layers)&&Ka(Ge,j,q,Ie,$e,et)}}function Ka(T,j,q,ie,X,we){T.onBeforeRender(L,j,q,ie,X,we),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(L,j,q,ie,T,we),X.transparent===!0&&X.side===Fi&&X.forceSinglePass===!1?(X.side=Dn,X.needsUpdate=!0,L.renderBufferDirect(q,j,ie,X,T,we),X.side=wr,X.needsUpdate=!0,L.renderBufferDirect(q,j,ie,X,T,we),X.side=Fi):L.renderBufferDirect(q,j,ie,X,T,we),T.onAfterRender(L,j,q,ie,X,we)}function Jr(T,j,q){j.isScene!==!0&&(j=$t);const ie=Xe.get(T),X=P.state.lights,we=P.state.shadowsArray,Re=X.state.version,Ge=oe.getParameters(T,X.state,we,j,q),Ie=oe.getProgramCacheKey(Ge);let et=ie.programs;ie.environment=T.isMeshStandardMaterial?j.environment:null,ie.fog=j.fog,ie.envMap=(T.isMeshStandardMaterial?b:N).get(T.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&T.envMap===null?j.environmentRotation:T.envMapRotation,et===void 0&&(T.addEventListener("dispose",ot),et=new Map,ie.programs=et);let $e=et.get(Ie);if($e!==void 0){if(ie.currentProgram===$e&&ie.lightsStateVersion===Re)return Zs(T,Ge),$e}else Ge.uniforms=oe.getUniforms(T),T.onBeforeCompile(Ge,L),$e=oe.acquireProgram(Ge,Ie),et.set(Ie,$e),ie.uniforms=Ge.uniforms;const Qe=ie.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Qe.clippingPlanes=Ye.uniform),Zs(T,Ge),ie.needsLights=Qa(T),ie.lightsStateVersion=Re,ie.needsLights&&(Qe.ambientLightColor.value=X.state.ambient,Qe.lightProbe.value=X.state.probe,Qe.directionalLights.value=X.state.directional,Qe.directionalLightShadows.value=X.state.directionalShadow,Qe.spotLights.value=X.state.spot,Qe.spotLightShadows.value=X.state.spotShadow,Qe.rectAreaLights.value=X.state.rectArea,Qe.ltc_1.value=X.state.rectAreaLTC1,Qe.ltc_2.value=X.state.rectAreaLTC2,Qe.pointLights.value=X.state.point,Qe.pointLightShadows.value=X.state.pointShadow,Qe.hemisphereLights.value=X.state.hemi,Qe.directionalShadowMap.value=X.state.directionalShadowMap,Qe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Qe.spotShadowMap.value=X.state.spotShadowMap,Qe.spotLightMatrix.value=X.state.spotLightMatrix,Qe.spotLightMap.value=X.state.spotLightMap,Qe.pointShadowMap.value=X.state.pointShadowMap,Qe.pointShadowMatrix.value=X.state.pointShadowMatrix),ie.currentProgram=$e,ie.uniformsList=null,$e}function di(T){if(T.uniformsList===null){const j=T.currentProgram.getUniforms();T.uniformsList=Nl.seqWithValue(j.seq,T.uniforms)}return T.uniformsList}function Zs(T,j){const q=Xe.get(T);q.outputColorSpace=j.outputColorSpace,q.batching=j.batching,q.batchingColor=j.batchingColor,q.instancing=j.instancing,q.instancingColor=j.instancingColor,q.instancingMorph=j.instancingMorph,q.skinning=j.skinning,q.morphTargets=j.morphTargets,q.morphNormals=j.morphNormals,q.morphColors=j.morphColors,q.morphTargetsCount=j.morphTargetsCount,q.numClippingPlanes=j.numClippingPlanes,q.numIntersection=j.numClipIntersection,q.vertexAlphas=j.vertexAlphas,q.vertexTangents=j.vertexTangents,q.toneMapping=j.toneMapping}function Za(T,j,q,ie,X){j.isScene!==!0&&(j=$t),at.resetTextureUnits();const we=j.fog,Re=ie.isMeshStandardMaterial?j.environment:null,Ge=C===null?L.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ws,Ie=(ie.isMeshStandardMaterial?b:N).get(ie.envMap||Re),et=ie.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,$e=!!q.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Qe=!!q.morphAttributes.position,st=!!q.morphAttributes.normal,wt=!!q.morphAttributes.color;let zt=br;ie.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(zt=L.toneMapping);const Vt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Mt=Vt!==void 0?Vt.length:0,Ze=Xe.get(ie),Ct=P.state.lights;if(ue===!0&&(Se===!0||T!==J)){const Jt=T===J&&ie.id===G;Ye.setState(ie,T,Jt)}let vt=!1;ie.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Ct.state.version||Ze.outputColorSpace!==Ge||X.isBatchedMesh&&Ze.batching===!1||!X.isBatchedMesh&&Ze.batching===!0||X.isBatchedMesh&&Ze.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ze.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ze.instancing===!1||!X.isInstancedMesh&&Ze.instancing===!0||X.isSkinnedMesh&&Ze.skinning===!1||!X.isSkinnedMesh&&Ze.skinning===!0||X.isInstancedMesh&&Ze.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ze.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ze.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ze.instancingMorph===!1&&X.morphTexture!==null||Ze.envMap!==Ie||ie.fog===!0&&Ze.fog!==we||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ye.numPlanes||Ze.numIntersection!==Ye.numIntersection)||Ze.vertexAlphas!==et||Ze.vertexTangents!==$e||Ze.morphTargets!==Qe||Ze.morphNormals!==st||Ze.morphColors!==wt||Ze.toneMapping!==zt||Ze.morphTargetsCount!==Mt)&&(vt=!0):(vt=!0,Ze.__version=ie.version);let Sn=Ze.currentProgram;vt===!0&&(Sn=Jr(ie,j,X));let qi=!1,dn=!1,$i=!1;const It=Sn.getUniforms(),Kt=Ze.uniforms;if(ke.useProgram(Sn.program)&&(qi=!0,dn=!0,$i=!0),ie.id!==G&&(G=ie.id,dn=!0),qi||J!==T){ke.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),It.setValue(O,"projectionMatrix",T.projectionMatrix),It.setValue(O,"viewMatrix",T.matrixWorldInverse);const ct=It.map.cameraPosition;ct!==void 0&&ct.setValue(O,Oe.setFromMatrixPosition(T.matrixWorld)),Tt.logarithmicDepthBuffer&&It.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&It.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),J!==T&&(J=T,dn=!0,$i=!0)}if(X.isSkinnedMesh){It.setOptional(O,X,"bindMatrix"),It.setOptional(O,X,"bindMatrixInverse");const Jt=X.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),It.setValue(O,"boneTexture",Jt.boneTexture,at))}X.isBatchedMesh&&(It.setOptional(O,X,"batchingTexture"),It.setValue(O,"batchingTexture",X._matricesTexture,at),It.setOptional(O,X,"batchingIdTexture"),It.setValue(O,"batchingIdTexture",X._indirectTexture,at),It.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&It.setValue(O,"batchingColorTexture",X._colorsTexture,at));const Tn=q.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&it.update(X,q,Sn),(dn||Ze.receiveShadow!==X.receiveShadow)&&(Ze.receiveShadow=X.receiveShadow,It.setValue(O,"receiveShadow",X.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Kt.envMap.value=Ie,Kt.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&j.environment!==null&&(Kt.envMapIntensity.value=j.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=b3()),dn&&(It.setValue(O,"toneMappingExposure",L.toneMappingExposure),Ze.needsLights&&zl(Kt,$i),we&&ie.fog===!0&&qe.refreshFogUniforms(Kt,we),qe.refreshMaterialUniforms(Kt,ie,te,se,P.state.transmissionRenderTarget[T.id]),Nl.upload(O,di(Ze),Kt,at)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Nl.upload(O,di(Ze),Kt,at),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&It.setValue(O,"center",X.center),It.setValue(O,"modelViewMatrix",X.modelViewMatrix),It.setValue(O,"normalMatrix",X.normalMatrix),It.setValue(O,"modelMatrix",X.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Jt=ie.uniformsGroups;for(let ct=0,es=Jt.length;ct<es;ct++){const fi=Jt[ct];Ce.update(fi,Sn),Ce.bind(fi,Sn)}}return Sn}function zl(T,j){T.ambientLightColor.needsUpdate=j,T.lightProbe.needsUpdate=j,T.directionalLights.needsUpdate=j,T.directionalLightShadows.needsUpdate=j,T.pointLights.needsUpdate=j,T.pointLightShadows.needsUpdate=j,T.spotLights.needsUpdate=j,T.spotLightShadows.needsUpdate=j,T.rectAreaLights.needsUpdate=j,T.hemisphereLights.needsUpdate=j}function Qa(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,j,q){const ie=Xe.get(T);ie.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),Xe.get(T.texture).__webglTexture=j,Xe.get(T.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:q,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,j){const q=Xe.get(T);q.__webglFramebuffer=j,q.__useDefaultFramebuffer=j===void 0};const Ja=O.createFramebuffer();this.setRenderTarget=function(T,j=0,q=0){C=T,Q=j,R=q;let ie=!0,X=null,we=!1,Re=!1;if(T){const Ie=Xe.get(T);if(Ie.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(O.FRAMEBUFFER,null),ie=!1;else if(Ie.__webglFramebuffer===void 0)at.setupRenderTarget(T);else if(Ie.__hasExternalTextures)at.rebindTextures(T,Xe.get(T.texture).__webglTexture,Xe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Qe=T.depthTexture;if(Ie.__boundDepthTexture!==Qe){if(Qe!==null&&Xe.has(Qe)&&(T.width!==Qe.image.width||T.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(T)}}const et=T.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Re=!0);const $e=Xe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray($e[j])?X=$e[j][q]:X=$e[j],we=!0):T.samples>0&&at.useMultisampledRTT(T)===!1?X=Xe.get(T).__webglMultisampledFramebuffer:Array.isArray($e)?X=$e[q]:X=$e,ne.copy(T.viewport),le.copy(T.scissor),ae=T.scissorTest}else ne.copy(De).multiplyScalar(te).floor(),le.copy(Pe).multiplyScalar(te).floor(),ae=He;if(q!==0&&(X=Ja),ke.bindFramebuffer(O.FRAMEBUFFER,X)&&ie&&ke.drawBuffers(T,X),ke.viewport(ne),ke.scissor(le),ke.setScissorTest(ae),we){const Ie=Xe.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ie.__webglTexture,q)}else if(Re){const Ie=j;for(let et=0;et<T.textures.length;et++){const $e=Xe.get(T.textures[et]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+et,$e.__webglTexture,q,Ie)}}else if(T!==null&&q!==0){const Ie=Xe.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ie.__webglTexture,q)}G=-1},this.readRenderTargetPixels=function(T,j,q,ie,X,we,Re,Ge=0){if(!(T&&T.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){ke.bindFramebuffer(O.FRAMEBUFFER,Ie);try{const et=T.textures[Ge],$e=et.format,Qe=et.type;if(!Tt.textureFormatReadable($e)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(Qe)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=T.width-ie&&q>=0&&q<=T.height-X&&(T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ge),O.readPixels(j,q,ie,X,rt.convert($e),rt.convert(Qe),we))}finally{const et=C!==null?Xe.get(C).__webglFramebuffer:null;ke.bindFramebuffer(O.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(T,j,q,ie,X,we,Re,Ge=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie)if(j>=0&&j<=T.width-ie&&q>=0&&q<=T.height-X){ke.bindFramebuffer(O.FRAMEBUFFER,Ie);const et=T.textures[Ge],$e=et.format,Qe=et.type;if(!Tt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,st),O.bufferData(O.PIXEL_PACK_BUFFER,we.byteLength,O.STREAM_READ),T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ge),O.readPixels(j,q,ie,X,rt.convert($e),rt.convert(Qe),0);const wt=C!==null?Xe.get(C).__webglFramebuffer:null;ke.bindFramebuffer(O.FRAMEBUFFER,wt);const zt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Bv(O,zt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,st),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,we),O.deleteBuffer(st),O.deleteSync(zt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,j=null,q=0){const ie=Math.pow(2,-q),X=Math.floor(T.image.width*ie),we=Math.floor(T.image.height*ie),Re=j!==null?j.x:0,Ge=j!==null?j.y:0;at.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,Re,Ge,X,we),ke.unbindTexture()};const eo=O.createFramebuffer(),to=O.createFramebuffer();this.copyTextureToTexture=function(T,j,q=null,ie=null,X=0,we=null){we===null&&(X!==0?(Wa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=X,X=0):we=0);let Re,Ge,Ie,et,$e,Qe,st,wt,zt;const Vt=T.isCompressedTexture?T.mipmaps[we]:T.image;if(q!==null)Re=q.max.x-q.min.x,Ge=q.max.y-q.min.y,Ie=q.isBox3?q.max.z-q.min.z:1,et=q.min.x,$e=q.min.y,Qe=q.isBox3?q.min.z:0;else{const Tn=Math.pow(2,-X);Re=Math.floor(Vt.width*Tn),Ge=Math.floor(Vt.height*Tn),T.isDataArrayTexture?Ie=Vt.depth:T.isData3DTexture?Ie=Math.floor(Vt.depth*Tn):Ie=1,et=0,$e=0,Qe=0}ie!==null?(st=ie.x,wt=ie.y,zt=ie.z):(st=0,wt=0,zt=0);const Mt=rt.convert(j.format),Ze=rt.convert(j.type);let Ct;j.isData3DTexture?(at.setTexture3D(j,0),Ct=O.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(at.setTexture2DArray(j,0),Ct=O.TEXTURE_2D_ARRAY):(at.setTexture2D(j,0),Ct=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,j.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,j.unpackAlignment);const vt=O.getParameter(O.UNPACK_ROW_LENGTH),Sn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),qi=O.getParameter(O.UNPACK_SKIP_PIXELS),dn=O.getParameter(O.UNPACK_SKIP_ROWS),$i=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Vt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Vt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,et),O.pixelStorei(O.UNPACK_SKIP_ROWS,$e),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Qe);const It=T.isDataArrayTexture||T.isData3DTexture,Kt=j.isDataArrayTexture||j.isData3DTexture;if(T.isDepthTexture){const Tn=Xe.get(T),Jt=Xe.get(j),ct=Xe.get(Tn.__renderTarget),es=Xe.get(Jt.__renderTarget);ke.bindFramebuffer(O.READ_FRAMEBUFFER,ct.__webglFramebuffer),ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,es.__webglFramebuffer);for(let fi=0;fi<Ie;fi++)It&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xe.get(T).__webglTexture,X,Qe+fi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xe.get(j).__webglTexture,we,zt+fi)),O.blitFramebuffer(et,$e,Re,Ge,st,wt,Re,Ge,O.DEPTH_BUFFER_BIT,O.NEAREST);ke.bindFramebuffer(O.READ_FRAMEBUFFER,null),ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||Xe.has(T)){const Tn=Xe.get(T),Jt=Xe.get(j);ke.bindFramebuffer(O.READ_FRAMEBUFFER,eo),ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,to);for(let ct=0;ct<Ie;ct++)It?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Tn.__webglTexture,X,Qe+ct):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Tn.__webglTexture,X),Kt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Jt.__webglTexture,we,zt+ct):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Jt.__webglTexture,we),X!==0?O.blitFramebuffer(et,$e,Re,Ge,st,wt,Re,Ge,O.COLOR_BUFFER_BIT,O.NEAREST):Kt?O.copyTexSubImage3D(Ct,we,st,wt,zt+ct,et,$e,Re,Ge):O.copyTexSubImage2D(Ct,we,st,wt,et,$e,Re,Ge);ke.bindFramebuffer(O.READ_FRAMEBUFFER,null),ke.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Kt?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Ct,we,st,wt,zt,Re,Ge,Ie,Mt,Ze,Vt.data):j.isCompressedArrayTexture?O.compressedTexSubImage3D(Ct,we,st,wt,zt,Re,Ge,Ie,Mt,Vt.data):O.texSubImage3D(Ct,we,st,wt,zt,Re,Ge,Ie,Mt,Ze,Vt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,we,st,wt,Re,Ge,Mt,Ze,Vt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,we,st,wt,Vt.width,Vt.height,Mt,Vt.data):O.texSubImage2D(O.TEXTURE_2D,we,st,wt,Re,Ge,Mt,Ze,Vt);O.pixelStorei(O.UNPACK_ROW_LENGTH,vt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Sn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,qi),O.pixelStorei(O.UNPACK_SKIP_ROWS,dn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$i),we===0&&j.generateMipmaps&&O.generateMipmap(Ct),ke.unbindTexture()},this.initRenderTarget=function(T){Xe.get(T).__webglFramebuffer===void 0&&at.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?at.setTextureCube(T,0):T.isData3DTexture?at.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?at.setTexture2DArray(T,0):at.setTexture2D(T,0),ke.unbindTexture()},this.resetState=function(){Q=0,R=0,C=null,ke.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),n.unpackColorSpace=bt._getUnpackColorSpace()}}const T3="/assets/panoramaImage-BjqiHKmm.png",A3=T3;function C3({onClose:s,imageUrl:e=A3}){const[n,r]=Rt.useState(!1),[o,c]=Rt.useState(!1),d=Rt.useRef(null),f=Rt.useRef(null),m=Rt.useRef(null),h=Rt.useRef(null),x=Rt.useRef(null),g=Rt.useRef(0),_=Rt.useRef(0),[M,w]=Rt.useState(0),[A,y]=Rt.useState(0),v=Rt.useRef(!1),U=Rt.useRef(0),P=Rt.useRef(0),I=Rt.useRef(0),H=Rt.useRef(0),L=()=>{r(!n)};Rt.useEffect(()=>{if(!f.current)return;const le=new T_;m.current=le;const ae=f.current.clientWidth||window.innerWidth,de=f.current.clientHeight||window.innerHeight,fe=new Qn(75,ae/de,1,1100);fe.target=new ce(0,0,0),h.current=fe;const z=new w3({antialias:!0,alpha:!0});z.setPixelRatio(window.devicePixelRatio),z.setSize(ae,de),z.domElement.style.display="block",z.domElement.style.width="100%",z.domElement.style.height="100%",f.current.appendChild(z.domElement),x.current=z;const se=new tf(500,60,40);se.scale(-1,1,1),new F_().load(e,Pe=>{Pe.mapping=Ll,Pe.colorSpace=Hn;const He=new ef({map:Pe}),Z=new Gi(se,He);le.add(Z),c(!0)},void 0,Pe=>console.error("Error loading texture:",Pe));let F;const re=()=>{F=requestAnimationFrame(re),V(),x.current&&m.current&&h.current&&x.current.render(m.current,h.current)};re();const De=new ResizeObserver(Pe=>{for(let He of Pe){const{width:Z,height:ue}=He.contentRect;Z>0&&ue>0&&h.current&&x.current&&(h.current.aspect=Z/ue,h.current.updateProjectionMatrix(),x.current.setSize(Z,ue))}});return f.current&&De.observe(f.current),()=>{De.disconnect(),cancelAnimationFrame(F),f.current&&z.domElement&&f.current.removeChild(z.domElement),se.dispose(),z.dispose()}},[e]);const V=()=>{if(!h.current)return;const le=Math.max(-85,Math.min(85,_.current)),ae=$p.degToRad(90-le),de=$p.degToRad(g.current),fe=500*Math.sin(ae)*Math.cos(de),z=500*Math.cos(ae),se=500*Math.sin(ae)*Math.sin(de);h.current.lookAt(fe,z,se)},Q=()=>{g.current-=15,w(g.current)},R=()=>{g.current+=15,w(g.current)},C=()=>{g.current=0,_.current=0,w(0),y(0)},G=le=>{v.current=!0,U.current=le.clientX,P.current=le.clientY,I.current=g.current,H.current=_.current},J=le=>{if(!v.current)return;const ae=.1,de=le.clientX-U.current,fe=le.clientY-P.current;g.current=I.current-de*ae,_.current=H.current+fe*ae,w(g.current),y(_.current)},ne=()=>{v.current=!1};return S.jsx("div",{className:"fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-0 md:p-4 animate-in fade-in duration-200",children:S.jsxs("div",{ref:d,className:`relative bg-[#1E293B] rounded-2xl overflow-hidden flex flex-col shadow-2xl transition-all duration-300 ${n?"fixed inset-0 w-full h-full rounded-none m-0":"w-full h-full md:w-[90vw] md:h-[85vh] md:max-w-7xl"}`,children:[S.jsxs("div",{className:"bg-gradient-to-r from-[#14B8A6] to-[#0F766E] px-4 md:px-6 py-4 flex items-center justify-between shrink-0 z-20 shadow-md",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:"w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center",children:S.jsx(Op,{size:20,className:"text-white"})}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-white font-semibold text-sm md:text-base",children:"360° Virtual Tour"}),S.jsx("p",{className:"text-[#5EEAD4] text-xs hidden md:block",children:"Drag to explore • Scroll to zoom"})]})]}),S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("button",{onClick:L,className:"w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-colors text-white",title:n?"Exit Fullscreen":"Enter Fullscreen",children:n?S.jsx(Ug,{size:16}):S.jsx(Ng,{size:16})}),S.jsx("button",{onClick:s,className:"w-8 h-8 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-colors text-white",children:S.jsx(Hm,{size:20})})]})]}),S.jsxs("div",{className:"relative flex-1 bg-black overflow-hidden w-full h-full",children:[!o&&S.jsxs("div",{className:"absolute inset-0 flex flex-col gap-4 items-center justify-center z-30 bg-[#1E293B]",children:[S.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-4 border-white/10 border-t-[#14B8A6]"}),S.jsx("p",{className:"text-white/50 text-sm animate-pulse",children:"Loading environment..."})]}),S.jsx("div",{ref:f,className:`w-full h-full cursor-grab active:cursor-grabbing block touch-none ${o?"opacity-100":"opacity-0"} transition-opacity duration-700`,onMouseDown:G,onMouseMove:J,onMouseUp:ne,onMouseLeave:ne,onTouchStart:le=>{v.current=!0,U.current=le.touches[0].clientX,P.current=le.touches[0].clientY,I.current=M,H.current=A},onTouchMove:le=>{if(!v.current)return;const ae=.2,de=le.touches[0].clientX-U.current,fe=le.touches[0].clientY-P.current;w(I.current-de*ae),y(H.current+fe*ae)},onTouchEnd:()=>{v.current=!1}}),S.jsx("div",{className:"absolute bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 pointer-events-none z-20 w-full flex justify-center",children:S.jsxs("div",{className:"bg-black/40 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 flex items-center gap-2 shadow-lg",children:[S.jsx(Fg,{size:14,className:"text-[#5EEAD4]"}),S.jsx("p",{className:"text-white text-xs md:text-sm font-medium whitespace-nowrap",children:"Drag to Look Around"})]})}),S.jsxs("div",{className:"absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20",children:[S.jsx("button",{onClick:Q,className:"w-10 h-10 md:w-12 md:h-12 bg-black/60 hover:bg-[#14B8A6] border border-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 backdrop-blur-sm",children:S.jsx("span",{className:"text-xl pb-1",children:"←"})}),S.jsx("button",{onClick:C,className:"w-12 h-12 md:w-14 md:h-14 bg-[#14B8A6] hover:bg-[#0F766E] rounded-full flex items-center justify-center shadow-lg shadow-[#14B8A6]/20 transition-all hover:scale-110 active:scale-95 text-white",title:"Reset View",children:S.jsx(Op,{size:20})}),S.jsx("button",{onClick:R,className:"w-10 h-10 md:w-12 md:h-12 bg-black/60 hover:bg-[#14B8A6] border border-white/20 rounded-full flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95 backdrop-blur-sm",children:S.jsx("span",{className:"text-xl pb-1",children:"→"})})]}),S.jsxs("div",{className:"absolute top-4 left-4 md:top-6 md:left-6 space-y-2 pointer-events-none z-20",children:[S.jsxs("div",{className:"bg-black/40 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10 shadow-lg",children:[S.jsx("p",{className:"text-[#5EEAD4] text-[10px] font-bold uppercase tracking-wider mb-1",children:"Room Type"}),S.jsx("p",{className:"text-white text-sm md:text-base font-medium",children:"Studio Apartment"})]}),S.jsxs("div",{className:"bg-black/40 backdrop-blur-md rounded-xl px-4 py-3 border border-white/10 shadow-lg",children:[S.jsx("p",{className:"text-[#5EEAD4] text-[10px] font-bold uppercase tracking-wider mb-1",children:"Price"}),S.jsxs("p",{className:"text-white text-lg md:text-xl font-bold",children:["₱8,500",S.jsx("span",{className:"text-sm text-gray-300 font-normal",children:"/mo"})]})]})]})]})]})})}const Fm=[{id:1,name:"Room 101",type:"Single Room",price:6500,size:15,available:!0,occupants:0,maxOccupants:1},{id:2,name:"Room 102",type:"Shared Room",price:4500,size:20,available:!0,occupants:1,maxOccupants:2,availableFrom:"Dec 1, 2025"},{id:3,name:"Room 201",type:"Single Room",price:7e3,size:18,available:!1,occupants:1,maxOccupants:1},{id:4,name:"Room 202",type:"Studio",price:8500,size:25,available:!0,occupants:0,maxOccupants:1},{id:5,name:"Room 203",type:"Shared Room",price:4500,size:20,available:!1,occupants:2,maxOccupants:2}],R3=[{id:1,rating:5,category:"Safety & Security",comment:"The CCTV cameras and 24/7 security make me feel really safe here. The landlord is very responsive to any concerns.",date:"2 weeks ago",initials:"MJ",color:"#14B8A6"},{id:2,rating:5,category:"Internet Connection",comment:"WiFi speed is excellent! I can attend all my online classes without any lag. Perfect for students who need reliable internet.",date:"1 month ago",initials:"AL",color:"#8B5CF6"},{id:3,rating:4,category:"Landlord Kindness",comment:"Very understanding landlord who gives grace periods for rent. Always willing to help with any issues in the room.",date:"1 month ago",initials:"RC",color:"#F59E0B"},{id:4,rating:5,category:"Overall Experience",comment:"Great value for money! The place is clean, safe, and near campus. Highly recommend to fellow students.",date:"2 months ago",initials:"ST",color:"#EC4899"}];function N3({onBack:s,onShowVerification:e}){const[n,r]=Rt.useState(!1),[o,c]=Rt.useState(null),[d,f]=Rt.useState(!1),m=()=>{r(!0),setTimeout(()=>{c(50),r(!1)},2e3)};return S.jsxs("div",{className:"min-h-screen bg-[#F8FAFC]",children:[S.jsxs("div",{className:"relative h-96 md:h-[500px]",children:[S.jsx(ed,{src:"https://images.unsplash.com/photo-1758521541103-d29cbd5fb2e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHVkZW50JTIwYmVkcm9vbXxlbnwxfHx8fDE3NjMzNzQwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",alt:"Property",className:"w-full h-full object-cover"}),S.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"}),S.jsx("button",{onClick:s,className:"absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-colors",children:S.jsx(ug,{size:20,className:"text-[#1E293B]"})}),S.jsxs("button",{onClick:()=>f(!0),className:"absolute bottom-6 right-6 bg-[#14B8A6] text-white px-6 py-3 rounded-2xl flex items-center gap-2 shadow-xl hover:bg-[#0F766E] transition-colors",children:[S.jsx(Wg,{size:20}),S.jsx("span",{children:"360° Virtual Tour"})]}),S.jsxs("div",{className:"absolute top-6 right-6 bg-[#F59E0B] text-white px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg cursor-pointer hover:bg-[#D97706] transition-colors",onClick:e,children:[S.jsx(Fa,{size:18,fill:"white"}),S.jsx("span",{children:"Gold Hive Verified"})]})]}),S.jsx("div",{className:"max-w-7xl mx-auto px-6 py-8",children:S.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[S.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[S.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-md",children:[S.jsxs("div",{className:"flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4",children:[S.jsxs("div",{className:"flex-1",children:[S.jsx("h2",{className:"text-[#1E293B] mb-3",children:"Cozy Studio near Foundation University"}),S.jsxs("div",{className:"flex items-center gap-2 text-[#64748B] mb-4",children:[S.jsx(Qu,{size:18}),S.jsx("p",{children:"123 Katipunan Ave, Quezon City"})]})]}),S.jsxs("div",{className:"text-left md:text-right",children:[S.jsx("p",{className:"text-[#14B8A6] text-3xl mb-1",children:"₱8,500"}),S.jsx("p",{className:"text-[#64748B]",children:"per month"})]})]}),S.jsxs("div",{className:"flex gap-3",children:[S.jsxs("div",{className:"flex items-center gap-2 bg-[#F8FAFC] px-4 py-3 rounded-xl flex-1",children:[S.jsx(pg,{size:18,className:"text-[#14B8A6]"}),S.jsx("span",{className:"text-[#1E293B]",children:"1 Bed"})]}),S.jsxs("div",{className:"flex items-center gap-2 bg-[#F8FAFC] px-4 py-3 rounded-xl flex-1",children:[S.jsx(fg,{size:18,className:"text-[#14B8A6]"}),S.jsx("span",{className:"text-[#1E293B]",children:"1 Bath"})]}),S.jsxs("div",{className:"flex items-center gap-2 bg-[#F8FAFC] px-4 py-3 rounded-xl flex-1",children:[S.jsx(Fp,{size:18,className:"text-[#14B8A6]"}),S.jsx("span",{className:"text-[#1E293B]",children:"25 m²"})]})]})]}),S.jsx("div",{className:"bg-gradient-to-br from-[#14B8A6]/10 to-[#5EEAD4]/10 rounded-2xl p-6 border border-[#14B8A6]/20",children:S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:"bg-[#F59E0B] rounded-full p-3",children:S.jsx(Sr,{size:24,className:"text-white",fill:"white"})}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-[#1E293B]",children:"Hayahay Score"}),S.jsx("p",{className:"text-[#64748B]",children:"Based on verified metrics"})]})]}),S.jsxs("div",{className:"text-right",children:[S.jsx("p",{className:"text-[#14B8A6] text-4xl",children:"4.8"}),S.jsx("p",{className:"text-[#64748B]",children:"out of 5"})]})]})}),S.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-md",children:[S.jsx("h3",{className:"text-[#1E293B] mb-6",children:"Verified Credentials"}),S.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[S.jsxs("div",{className:"bg-white border-2 border-[#14B8A6] rounded-2xl p-5 text-center hover:shadow-md transition-shadow",children:[S.jsx("div",{className:"bg-[#14B8A6]/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3",children:S.jsx(km,{size:28,className:"text-[#14B8A6]"})}),S.jsx("p",{className:"text-sm text-[#1E293B]",children:"Fire Marshall Approved"})]}),S.jsxs("div",{className:"bg-white border-2 border-[#14B8A6] rounded-2xl p-5 text-center hover:shadow-md transition-shadow",children:[S.jsx("div",{className:"bg-[#14B8A6]/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3",children:S.jsx(xg,{size:28,className:"text-[#14B8A6]"})}),S.jsx("p",{className:"text-sm text-[#1E293B]",children:"24/7 CCTV Coverage"})]}),S.jsxs("div",{className:"bg-white border-2 border-[#14B8A6] rounded-2xl p-5 text-center hover:shadow-md transition-shadow",children:[S.jsx("div",{className:"bg-[#14B8A6]/10 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-3",children:S.jsx(Bm,{size:28,className:"text-[#14B8A6]"})}),S.jsx("p",{className:"text-sm text-[#1E293B]",children:"Legal Permit Verified"})]})]})]}),S.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-md",children:[S.jsx("h3",{className:"text-[#1E293B] mb-4",children:"About This Property"}),S.jsx("p",{className:"text-[#64748B] leading-relaxed",children:"Perfect for students! This cozy studio offers a safe and comfortable living space with all essential amenities. Located just 5 minutes walk from UP Diliman campus. Features include 24/7 security, high-speed internet, and a shared kitchen area. The building is fully compliant with fire safety regulations and has backup power."})]}),S.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-md",children:[S.jsxs("div",{className:"flex items-center justify-between mb-6",children:[S.jsxs("div",{children:[S.jsx("h3",{className:"text-[#1E293B] mb-1",children:"Room Availability"}),S.jsxs("p",{className:"text-[#64748B]",children:["Choose from ",Fm.filter(h=>h.available).length," available rooms"]})]}),S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsxs("div",{className:"flex items-center gap-1.5",children:[S.jsx(Up,{size:16,className:"text-[#14B8A6]"}),S.jsx("span",{className:"text-xs text-[#64748B]",children:"Available"})]}),S.jsxs("div",{className:"flex items-center gap-1.5",children:[S.jsx(Ip,{size:16,className:"text-[#64748B]"}),S.jsx("span",{className:"text-xs text-[#64748B]",children:"Occupied"})]})]})]}),S.jsx("div",{className:"space-y-3",children:Fm.map(h=>S.jsxs("div",{className:`border-2 rounded-2xl p-4 transition-all ${h.available?"border-[#14B8A6] bg-[#14B8A6]/5 hover:shadow-md cursor-pointer":"border-[#E2E8F0] bg-[#F8FAFC] opacity-60"}`,children:[S.jsxs("div",{className:"flex items-start justify-between mb-3",children:[S.jsxs("div",{className:"flex-1",children:[S.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[S.jsx("h4",{className:"text-[#1E293B]",children:h.name}),h.available?S.jsxs("div",{className:"bg-[#14B8A6] text-white px-2 py-0.5 rounded-full flex items-center gap-1",children:[S.jsx(Up,{size:12}),S.jsx("span",{className:"text-xs",children:"Available"})]}):S.jsxs("div",{className:"bg-[#64748B] text-white px-2 py-0.5 rounded-full flex items-center gap-1",children:[S.jsx(Ip,{size:12}),S.jsx("span",{className:"text-xs",children:"Occupied"})]})]}),S.jsx("p",{className:"text-[#64748B] text-sm mb-2",children:h.type}),h.availableFrom&&S.jsxs("p",{className:"text-[#14B8A6] text-xs",children:["Available from ",h.availableFrom]})]}),S.jsxs("div",{className:"text-right",children:[S.jsxs("p",{className:"text-[#14B8A6] text-xl",children:["₱",h.price.toLocaleString()]}),S.jsx("p",{className:"text-[#64748B] text-xs",children:"per month"})]})]}),S.jsxs("div",{className:"flex items-center gap-4 pt-3 border-t border-[#E2E8F0]",children:[S.jsxs("div",{className:"flex items-center gap-1.5",children:[S.jsx(Fp,{size:14,className:"text-[#64748B]"}),S.jsxs("span",{className:"text-xs text-[#64748B]",children:[h.size," m²"]})]}),S.jsxs("div",{className:"flex items-center gap-1.5",children:[S.jsx(Ju,{size:14,className:"text-[#64748B]"}),S.jsxs("span",{className:"text-xs text-[#64748B]",children:[h.occupants,"/",h.maxOccupants," occupants"]})]}),h.available&&S.jsx("button",{className:"ml-auto text-[#14B8A6] text-sm hover:underline",children:"Inquire →"})]})]},h.id))}),S.jsx("div",{className:"mt-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4",children:S.jsxs("p",{className:"text-[#64748B] text-sm",children:["💡 ",S.jsx("span",{className:"text-[#1E293B]",children:"Tip:"})," Contact the landlord to schedule a viewing or ask about upcoming vacancies."]})})]}),S.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-md",children:[S.jsx("h3",{className:"text-[#1E293B] mb-6",children:"Reviews & Community"}),S.jsxs("div",{className:"bg-gradient-to-br from-[#F8FAFC] to-white border-2 border-[#E2E8F0] rounded-2xl p-6 mb-6",children:[S.jsxs("div",{className:"flex items-center justify-between mb-6",children:[S.jsxs("div",{children:[S.jsx("p",{className:"text-[#64748B] mb-1",children:"Overall Rating"}),S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(Sr,{size:32,className:"text-[#F59E0B]",fill:"#F59E0B"}),S.jsx("span",{className:"text-4xl text-[#1E293B]",children:"4.8"}),S.jsx("span",{className:"text-[#64748B]",children:"/ 5"})]})]}),S.jsxs("div",{className:"text-right",children:[S.jsx("p",{className:"text-[#1E293B] text-3xl",children:"127"}),S.jsx("p",{className:"text-[#64748B]",children:"verified reviews"})]})]}),S.jsxs("div",{className:"space-y-4",children:[S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center justify-between mb-2",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(Zu,{size:16,className:"text-[#14B8A6]"}),S.jsx("p",{className:"text-sm text-[#1E293B]",children:"Landlord Kindness"})]}),S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("div",{className:"flex gap-0.5",children:[1,2,3,4,5].map(h=>S.jsx(Sr,{size:14,className:h<=4.9?"text-[#F59E0B]":"text-[#E2E8F0]",fill:h<=4.9?"#F59E0B":"none"},h))}),S.jsx("span",{className:"text-sm text-[#1E293B]",children:"4.9"})]})]}),S.jsx("div",{className:"w-full bg-[#E2E8F0] rounded-full h-2",children:S.jsx("div",{className:"bg-[#14B8A6] h-2 rounded-full",style:{width:"98%"}})})]}),S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center justify-between mb-2",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(Fa,{size:16,className:"text-[#14B8A6]"}),S.jsx("p",{className:"text-sm text-[#1E293B]",children:"Safety & Security"})]}),S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("div",{className:"flex gap-0.5",children:[1,2,3,4,5].map(h=>S.jsx(Sr,{size:14,className:h<=4.8?"text-[#F59E0B]":"text-[#E2E8F0]",fill:h<=4.8?"#F59E0B":"none"},h))}),S.jsx("span",{className:"text-sm text-[#1E293B]",children:"4.8"})]})]}),S.jsx("div",{className:"w-full bg-[#E2E8F0] rounded-full h-2",children:S.jsx("div",{className:"bg-[#14B8A6] h-2 rounded-full",style:{width:"96%"}})})]}),S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center justify-between mb-2",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(Pl,{size:16,className:"text-[#14B8A6]"}),S.jsx("p",{className:"text-sm text-[#1E293B]",children:"WiFi & Connectivity"})]}),S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("div",{className:"flex gap-0.5",children:[1,2,3,4,5].map(h=>S.jsx(Sr,{size:14,className:h<=4.7?"text-[#F59E0B]":"text-[#E2E8F0]",fill:h<=4.7?"#F59E0B":"none"},h))}),S.jsx("span",{className:"text-sm text-[#1E293B]",children:"4.7"})]})]}),S.jsx("div",{className:"w-full bg-[#E2E8F0] rounded-full h-2",children:S.jsx("div",{className:"bg-[#14B8A6] h-2 rounded-full",style:{width:"94%"}})})]})]})]}),S.jsxs("div",{className:"mb-4",children:[S.jsx("h4",{className:"text-[#1E293B] mb-4",children:"What Tenants Are Saying"}),S.jsx("div",{className:"space-y-4",children:R3.map(h=>S.jsxs("div",{className:"bg-white border border-[#E2E8F0] rounded-2xl p-5 hover:shadow-md transition-shadow",children:[S.jsxs("div",{className:"flex items-start gap-3 mb-3",children:[S.jsx("div",{className:"w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0",style:{backgroundColor:h.color},children:S.jsx("span",{children:h.initials})}),S.jsxs("div",{className:"flex-1",children:[S.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[S.jsx("p",{className:"text-[#1E293B]",children:"Anonymous Student"}),S.jsxs("div",{className:"flex items-center gap-1 bg-[#14B8A6]/10 px-2 py-0.5 rounded-full",children:[S.jsx(wl,{size:12,className:"text-[#14B8A6]"}),S.jsx("span",{className:"text-xs text-[#14B8A6]",children:"Verified Tenant"})]})]}),S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("div",{className:"flex gap-0.5",children:[1,2,3,4,5].map(x=>S.jsx(Sr,{size:14,className:x<=h.rating?"text-[#F59E0B]":"text-[#E2E8F0]",fill:x<=h.rating?"#F59E0B":"none"},x))}),S.jsxs("span",{className:"text-xs text-[#64748B]",children:["• ",h.date]})]})]})]}),S.jsx("div",{className:"inline-block bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1 rounded-full mb-3",children:S.jsx("span",{className:"text-xs text-[#64748B]",children:h.category})}),S.jsx("p",{className:"text-[#1E293B] leading-relaxed",children:h.comment})]},h.id))})]}),S.jsxs("div",{className:"bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 flex gap-3",children:[S.jsx(wl,{size:20,className:"text-[#14B8A6] shrink-0 mt-0.5"}),S.jsxs("div",{children:[S.jsx("p",{className:"text-[#1E293B] text-sm mb-1",children:"Privacy Protected"}),S.jsx("p",{className:"text-[#64748B] text-xs leading-relaxed",children:"All reviews are from verified tenants. Names are kept anonymous to protect student privacy while maintaining transparency."})]})]})]})]}),S.jsx("div",{className:"lg:col-span-1",children:S.jsxs("div",{className:"sticky top-24 space-y-6",children:[S.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-md",children:[S.jsx("h4",{className:"text-[#1E293B] mb-4",children:"Property Owner"}),S.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[S.jsx(ed,{src:"https://images.unsplash.com/photo-1756277623973-3717bc2d4427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYW5kbG9yZCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzM3NDc2Nnww&ixlib=rb-4.1.0&q=80&w=1080",alt:"Maria Santos",className:"w-16 h-16 rounded-full object-cover"}),S.jsxs("div",{className:"flex-1",children:[S.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[S.jsx("h4",{className:"text-[#1E293B]",children:"Maria Santos"}),S.jsx(wl,{size:16,className:"text-[#14B8A6]"})]}),S.jsx("p",{className:"text-[#64748B] text-sm mb-2",children:"Verified Landlord"}),S.jsxs("div",{className:"flex items-center gap-1",children:[[1,2,3,4,5].map(h=>S.jsx(Sr,{size:14,className:h<=4.9?"text-[#F59E0B]":"text-[#E2E8F0]",fill:h<=4.9?"#F59E0B":"none"},h)),S.jsx("span",{className:"text-sm text-[#1E293B] ml-1",children:"4.9"}),S.jsx("span",{className:"text-xs text-[#64748B]",children:"(89 reviews)"})]})]})]}),S.jsxs("div",{className:"space-y-3 mb-4",children:[S.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[S.jsx("div",{className:"w-10 h-10 bg-[#14B8A6]/10 rounded-xl flex items-center justify-center",children:S.jsx(yg,{size:18,className:"text-[#14B8A6]"})}),S.jsxs("div",{children:[S.jsx("p",{className:"text-[#1E293B]",children:"Response Time"}),S.jsx("p",{className:"text-[#64748B] text-xs",children:"Within 2 hours"})]})]}),S.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[S.jsx("div",{className:"w-10 h-10 bg-[#14B8A6]/10 rounded-xl flex items-center justify-center",children:S.jsx(Ju,{size:18,className:"text-[#14B8A6]"})}),S.jsxs("div",{children:[S.jsx("p",{className:"text-[#1E293B]",children:"Member Since"}),S.jsx("p",{className:"text-[#64748B] text-xs",children:"January 2020"})]})]}),S.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[S.jsx("div",{className:"w-10 h-10 bg-[#14B8A6]/10 rounded-xl flex items-center justify-center",children:S.jsx(Fa,{size:18,className:"text-[#14B8A6]"})}),S.jsxs("div",{children:[S.jsx("p",{className:"text-[#1E293B]",children:"Properties"}),S.jsx("p",{className:"text-[#64748B] text-xs",children:"3 verified listings"})]})]})]}),S.jsxs("button",{className:"w-full bg-[#F8FAFC] text-[#14B8A6] border border-[#E2E8F0] py-3 rounded-xl hover:bg-[#14B8A6]/5 transition-colors flex items-center justify-center gap-2",children:[S.jsx(zm,{size:18}),S.jsx("span",{children:"Message Landlord"})]})]}),S.jsxs("div",{className:"bg-gradient-to-br from-[#14B8A6] to-[#0F766E] rounded-3xl p-6 shadow-xl",children:[S.jsxs("div",{className:"flex items-start justify-between mb-4",children:[S.jsxs("div",{children:[S.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[S.jsx(Pl,{size:24,className:"text-white"}),S.jsx("h3",{className:"text-white",children:"High-Speed Internet"})]}),S.jsx("p",{className:"text-[#5EEAD4] text-sm",children:"Real-time connectivity test"})]}),S.jsx("div",{className:"bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full",children:S.jsx("span",{className:"text-xs",children:"Verified"})})]}),o!==null?S.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20",children:[S.jsxs("div",{className:"text-center mb-3",children:[S.jsx("p",{className:"text-white text-5xl mb-2",children:o}),S.jsx("p",{className:"text-[#5EEAD4]",children:"Mbps Download Speed"})]}),S.jsxs("div",{className:"flex items-center justify-center gap-2 text-white text-sm",children:[S.jsx("div",{className:"w-2 h-2 bg-[#5EEAD4] rounded-full animate-pulse"}),S.jsx("span",{children:"Tested on Nov 17, 2025"})]})]}):S.jsx("button",{onClick:m,disabled:n,className:"w-full bg-white text-[#14B8A6] py-4 rounded-2xl hover:bg-white/90 transition-colors disabled:opacity-50",children:n?S.jsxs("div",{className:"flex items-center justify-center gap-2",children:[S.jsx("div",{className:"w-4 h-4 border-2 border-[#14B8A6] border-t-transparent rounded-full animate-spin"}),S.jsx("span",{children:"Testing connection..."})]}):S.jsx("span",{children:"Test WiFi Speed Now"})}),S.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-4",children:[S.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20",children:[S.jsx("p",{className:"text-[#5EEAD4] text-xs mb-1",children:"Provider"}),S.jsx("p",{className:"text-white text-sm",children:"PLDT Fibr"})]}),S.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20",children:[S.jsx("p",{className:"text-[#5EEAD4] text-xs mb-1",children:"Plan"}),S.jsx("p",{className:"text-white text-sm",children:"100 Mbps"})]})]})]}),S.jsx("button",{className:"w-full bg-[#14B8A6] text-white py-4 rounded-2xl shadow-lg hover:bg-[#0F766E] transition-colors",children:"Contact Landlord"}),S.jsxs("button",{className:"w-full bg-white text-[#14B8A6] border-2 border-[#14B8A6] py-4 rounded-2xl hover:bg-[#14B8A6]/5 transition-colors flex items-center justify-center gap-2",children:[S.jsx(Zu,{size:20}),S.jsx("span",{children:"Save Property"})]})]})})]})}),d&&S.jsx(C3,{onClose:()=>f(!1)})]})}function P3({onClose:s}){return S.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4",children:S.jsxs("div",{className:"bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-md max-h-[90vh] overflow-y-auto animate-slide-up",children:[S.jsxs("div",{className:"sticky top-0 bg-white border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between rounded-t-3xl",children:[S.jsx("h3",{className:"text-[#1E293B]",children:"Gold Hive Verification"}),S.jsx("button",{onClick:s,className:"w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center hover:bg-[#E2E8F0] transition-colors",children:S.jsx(Hm,{size:18,className:"text-[#64748B]"})})]}),S.jsxs("div",{className:"px-6 py-6",children:[S.jsxs("div",{className:"flex flex-col items-center text-center mb-8",children:[S.jsxs("div",{className:"relative mb-4",children:[S.jsx("div",{className:"w-28 h-28 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-3xl rotate-45 shadow-xl",children:S.jsx("div",{className:"w-full h-full flex items-center justify-center -rotate-45",children:S.jsx(Fa,{size:48,className:"text-white",fill:"white"})})}),S.jsx("div",{className:"absolute inset-0 bg-[#F59E0B]/20 rounded-3xl rotate-45 blur-xl -z-10"})]}),S.jsx("h2",{className:"text-[#1E293B] mb-2",children:"Gold Hive Seal"}),S.jsx("p",{className:"text-[#64748B]",children:"Your guarantee for safe, verified student housing"})]}),S.jsxs("div",{className:"mb-6",children:[S.jsx("h4",{className:"text-[#1E293B] mb-4",children:"What This Seal Guarantees"}),S.jsxs("div",{className:"space-y-4",children:[S.jsxs("div",{className:"flex gap-4",children:[S.jsx("div",{className:"shrink-0 w-12 h-12 bg-[#14B8A6]/10 rounded-2xl flex items-center justify-center",children:S.jsx(Bm,{size:24,className:"text-[#14B8A6]"})}),S.jsxs("div",{children:[S.jsx("h4",{className:"text-[#1E293B] mb-1",children:"Standardized Contract"}),S.jsx("p",{className:"text-[#64748B] text-sm leading-relaxed",children:"Fair, transparent rental agreements reviewed by legal experts. No hidden fees or unfair clauses."})]})]}),S.jsxs("div",{className:"flex gap-4",children:[S.jsx("div",{className:"shrink-0 w-12 h-12 bg-[#14B8A6]/10 rounded-2xl flex items-center justify-center",children:S.jsx(wl,{size:24,className:"text-[#14B8A6]"})}),S.jsxs("div",{children:[S.jsx("h4",{className:"text-[#1E293B] mb-1",children:"Safety Compliant"}),S.jsx("p",{className:"text-[#64748B] text-sm leading-relaxed",children:"Fire Marshall approved, emergency exits verified, and 24/7 security measures in place."})]})]}),S.jsxs("div",{className:"flex gap-4",children:[S.jsx("div",{className:"shrink-0 w-12 h-12 bg-[#14B8A6]/10 rounded-2xl flex items-center justify-center",children:S.jsx(Pl,{size:24,className:"text-[#14B8A6]"})}),S.jsxs("div",{children:[S.jsx("h4",{className:"text-[#1E293B] mb-1",children:"High-Speed Internet"}),S.jsx("p",{className:"text-[#64748B] text-sm leading-relaxed",children:"Independently tested WiFi speeds of at least 25 Mbps. Perfect for online classes and studying."})]})]})]})]}),S.jsxs("div",{className:"bg-gradient-to-br from-[#F8FAFC] to-white border border-[#E2E8F0] rounded-2xl p-5 mb-6",children:[S.jsx("h4",{className:"text-[#1E293B] mb-3",children:"How We Verify"}),S.jsxs("div",{className:"space-y-3",children:[S.jsxs("div",{className:"flex items-start gap-3",children:[S.jsx("div",{className:"w-6 h-6 bg-[#14B8A6] rounded-full flex items-center justify-center text-white text-sm shrink-0",children:"1"}),S.jsx("p",{className:"text-[#64748B] text-sm pt-0.5",children:"On-site inspection by HayaHive team"})]}),S.jsxs("div",{className:"flex items-start gap-3",children:[S.jsx("div",{className:"w-6 h-6 bg-[#14B8A6] rounded-full flex items-center justify-center text-white text-sm shrink-0",children:"2"}),S.jsx("p",{className:"text-[#64748B] text-sm pt-0.5",children:"Document verification (permits, contracts)"})]}),S.jsxs("div",{className:"flex items-start gap-3",children:[S.jsx("div",{className:"w-6 h-6 bg-[#14B8A6] rounded-full flex items-center justify-center text-white text-sm shrink-0",children:"3"}),S.jsx("p",{className:"text-[#64748B] text-sm pt-0.5",children:"Real-time WiFi speed and safety testing"})]}),S.jsxs("div",{className:"flex items-start gap-3",children:[S.jsx("div",{className:"w-6 h-6 bg-[#14B8A6] rounded-full flex items-center justify-center text-white text-sm shrink-0",children:"4"}),S.jsx("p",{className:"text-[#64748B] text-sm pt-0.5",children:"Continuous monitoring and annual re-verification"})]})]})]}),S.jsxs("div",{className:"bg-[#14B8A6]/5 border-2 border-[#14B8A6]/20 rounded-2xl p-5 text-center",children:[S.jsx("p",{className:"text-[#14B8A6] text-sm mb-2",children:"✓ Trusted by 10,000+ Students"}),S.jsx("p",{className:"text-[#64748B] text-xs",children:"Properties with Gold Hive verification have 95% tenant satisfaction rating"})]}),S.jsx("button",{onClick:s,className:"w-full mt-6 bg-[#14B8A6] text-white py-4 rounded-2xl hover:bg-[#0F766E] transition-colors",children:"Got It"})]})]})})}function L3(){const[s,e]=Rt.useState("home"),[n,r]=Rt.useState(!1),[o,c]=Rt.useState(null),d=h=>{c(h),e("profile")},f=()=>{e("home")},m=()=>{r(!0)};return S.jsxs("div",{className:"min-h-screen bg-[#F8FAFC]",children:[S.jsx("header",{className:"bg-white border-b border-[#E2E8F0] sticky top-0 z-30",children:S.jsx("div",{className:"max-w-7xl mx-auto px-6 py-4",children:S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("div",{className:"w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center",children:S.jsx("img",{src:rg,alt:"HayaHive logo",className:"w-16 h-16 object-cover"})}),S.jsxs("div",{children:[S.jsx("h2",{className:"text-[#1E293B]",children:"HayaHive"}),S.jsx("p",{className:"text-[#64748B] text-xs",children:"Safe Student Housing"})]})]}),S.jsxs("nav",{className:"hidden md:flex items-center gap-6",children:[S.jsxs("button",{onClick:()=>e("home"),className:`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${s==="home"?"bg-[#14B8A6]/10 text-[#14B8A6]":"text-[#64748B] hover:text-[#14B8A6]"}`,children:[S.jsx(Ag,{size:20}),S.jsx("span",{className:"text-sm",children:"Discover"})]}),S.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 rounded-xl text-[#64748B] hover:text-[#14B8A6] transition-colors",children:[S.jsx(Vm,{size:20}),S.jsx("span",{className:"text-sm",children:"Search"})]}),S.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 rounded-xl text-[#64748B] hover:text-[#14B8A6] transition-colors",children:[S.jsx(Zu,{size:20}),S.jsx("span",{className:"text-sm",children:"Saved"})]}),S.jsxs("button",{className:"flex items-center gap-2 px-4 py-2 rounded-xl text-[#64748B] hover:text-[#14B8A6] transition-colors",children:[S.jsx(Ju,{size:20}),S.jsx("span",{className:"text-sm",children:"Account"})]})]}),S.jsx("button",{className:"md:hidden p-2 text-[#64748B]",children:S.jsx(zm,{size:24})})]})})}),S.jsxs("main",{children:[s==="home"&&S.jsx(qg,{onCardClick:d}),s==="profile"&&S.jsx(N3,{onBack:f,onShowVerification:m})]}),n&&S.jsx(P3,{onClose:()=>r(!1)}),S.jsx("style",{children:`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `})]})}ig.createRoot(document.getElementById("root")).render(S.jsx(L3,{}));
