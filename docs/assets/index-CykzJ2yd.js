(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qt=globalThis,Ds=qt.ShadowRoot&&(qt.ShadyCSS===void 0||qt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,js=Symbol(),Bs=new WeakMap;let Fr=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==js)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ds&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Bs.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Bs.set(t,e))}return e}toString(){return this.cssText}};const vn=s=>new Fr(typeof s=="string"?s:s+"",void 0,js),ee=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((r,n,i)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[i+1],s[0]);return new Fr(t,s,js)},bn=(s,e)=>{if(Ds)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),n=qt.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=t.cssText,s.appendChild(r)}},Hs=Ds?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return vn(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:wn,defineProperty:_n,getOwnPropertyDescriptor:Sn,getOwnPropertyNames:kn,getOwnPropertySymbols:En,getPrototypeOf:An}=Object,ke=globalThis,qs=ke.trustedTypes,xn=qs?qs.emptyScript:"",us=ke.reactiveElementPolyfillSupport,ft=(s,e)=>s,Kt={toAttribute(s,e){switch(e){case Boolean:s=s?xn:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Ns=(s,e)=>!wn(s,e),zs={attribute:!0,type:String,converter:Kt,reflect:!1,useDefault:!1,hasChanged:Ns};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ke.litPropertyMetadata??(ke.litPropertyMetadata=new WeakMap);let Ge=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=zs){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(e,r,t);n!==void 0&&_n(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){const{get:n,set:i}=Sn(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:n,set(a){const o=n==null?void 0:n.call(this);i==null||i.call(this,a),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??zs}static _$Ei(){if(this.hasOwnProperty(ft("elementProperties")))return;const e=An(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ft("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ft("properties"))){const t=this.properties,r=[...kn(t),...En(t)];for(const n of r)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,n]of t)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const n=this._$Eu(t,r);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const n of r)t.unshift(Hs(n))}else e!==void 0&&t.push(Hs(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bn(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var i;const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(n!==void 0&&r.reflect===!0){const a=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:Kt).toAttribute(t,r.type);this._$Em=e,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(e,t){var i,a;const r=this.constructor,n=r._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const o=r.getPropertyOptions(n),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:Kt;this._$Em=n;const c=l.fromAttribute(t,o.type);this[n]=c??((a=this._$Ej)==null?void 0:a.get(n))??c,this._$Em=null}}requestUpdate(e,t,r,n=!1,i){var a;if(e!==void 0){const o=this.constructor;if(n===!1&&(i=this[e]),r??(r=o.getPropertyOptions(e)),!((r.hasChanged??Ns)(i,t)||r.useDefault&&r.reflect&&i===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:n,wrapped:i},a){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),i!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,a]of n){const{wrapped:o}=a,l=this[i];o!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdate)==null?void 0:i.call(n)}),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostUpdated)==null?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Ge.elementStyles=[],Ge.shadowRootOptions={mode:"open"},Ge[ft("elementProperties")]=new Map,Ge[ft("finalized")]=new Map,us==null||us({ReactiveElement:Ge}),(ke.reactiveElementVersions??(ke.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=globalThis,Ws=s=>s,Jt=gt.trustedTypes,Vs=Jt?Jt.createPolicy("lit-html",{createHTML:s=>s}):void 0,Br="$lit$",we=`lit$${Math.random().toFixed(9).slice(2)}$`,Hr="?"+we,Tn=`<${Hr}>`,Le=document,bt=()=>Le.createComment(""),wt=s=>s===null||typeof s!="object"&&typeof s!="function",Ls=Array.isArray,$n=s=>Ls(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",hs=`[ 	
\f\r]`,ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ks=/-->/g,Js=/>/g,xe=RegExp(`>|${hs}(?:([^\\s"'>=/]+)(${hs}*=${hs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gs=/'/g,Ys=/"/g,qr=/^(?:script|style|textarea|title)$/i,On=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),m=On(1),st=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),Xs=new WeakMap,Ie=Le.createTreeWalker(Le,129);function zr(s,e){if(!Ls(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vs!==void 0?Vs.createHTML(e):e}const Cn=(s,e)=>{const t=s.length-1,r=[];let n,i=e===2?"<svg>":e===3?"<math>":"",a=ct;for(let o=0;o<t;o++){const l=s[o];let c,h,u=-1,d=0;for(;d<l.length&&(a.lastIndex=d,h=a.exec(l),h!==null);)d=a.lastIndex,a===ct?h[1]==="!--"?a=Ks:h[1]!==void 0?a=Js:h[2]!==void 0?(qr.test(h[2])&&(n=RegExp("</"+h[2],"g")),a=xe):h[3]!==void 0&&(a=xe):a===xe?h[0]===">"?(a=n??ct,u=-1):h[1]===void 0?u=-2:(u=a.lastIndex-h[2].length,c=h[1],a=h[3]===void 0?xe:h[3]==='"'?Ys:Gs):a===Ys||a===Gs?a=xe:a===Ks||a===Js?a=ct:(a=xe,n=void 0);const p=a===xe&&s[o+1].startsWith("/>")?" ":"";i+=a===ct?l+Tn:u>=0?(r.push(c),l.slice(0,u)+Br+l.slice(u)+we+p):l+we+(u===-2?o:p)}return[zr(s,i+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class _t{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let i=0,a=0;const o=e.length-1,l=this.parts,[c,h]=Cn(e,t);if(this.el=_t.createElement(c,r),Ie.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(n=Ie.nextNode())!==null&&l.length<o;){if(n.nodeType===1){if(n.hasAttributes())for(const u of n.getAttributeNames())if(u.endsWith(Br)){const d=h[a++],p=n.getAttribute(u).split(we),g=/([.?@])?(.*)/.exec(d);l.push({type:1,index:i,name:g[2],strings:p,ctor:g[1]==="."?Pn:g[1]==="?"?In:g[1]==="@"?Dn:ns}),n.removeAttribute(u)}else u.startsWith(we)&&(l.push({type:6,index:i}),n.removeAttribute(u));if(qr.test(n.tagName)){const u=n.textContent.split(we),d=u.length-1;if(d>0){n.textContent=Jt?Jt.emptyScript:"";for(let p=0;p<d;p++)n.append(u[p],bt()),Ie.nextNode(),l.push({type:2,index:++i});n.append(u[d],bt())}}}else if(n.nodeType===8)if(n.data===Hr)l.push({type:2,index:i});else{let u=-1;for(;(u=n.data.indexOf(we,u+1))!==-1;)l.push({type:7,index:i}),u+=we.length-1}i++}}static createElement(e,t){const r=Le.createElement("template");return r.innerHTML=e,r}}function rt(s,e,t=s,r){var a,o;if(e===st)return e;let n=r!==void 0?(a=t._$Co)==null?void 0:a[r]:t._$Cl;const i=wt(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==i&&((o=n==null?void 0:n._$AO)==null||o.call(n,!1),i===void 0?n=void 0:(n=new i(s),n._$AT(s,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=n:t._$Cl=n),n!==void 0&&(e=rt(s,n._$AS(s,e.values),n,r)),e}class Rn{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,n=((e==null?void 0:e.creationScope)??Le).importNode(t,!0);Ie.currentNode=n;let i=Ie.nextNode(),a=0,o=0,l=r[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Rt(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new jn(i,this,e)),this._$AV.push(c),l=r[++o]}a!==(l==null?void 0:l.index)&&(i=Ie.nextNode(),a++)}return Ie.currentNode=Le,n}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class Rt{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=rt(this,e,t),wt(e)?e===L||e==null||e===""?(this._$AH!==L&&this._$AR(),this._$AH=L):e!==this._$AH&&e!==st&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):$n(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==L&&wt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Le.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=_t.createElement(zr(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===n)this._$AH.p(t);else{const a=new Rn(n,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=Xs.get(e.strings);return t===void 0&&Xs.set(e.strings,t=new _t(e)),t}k(e){Ls(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const i of e)n===t.length?t.push(r=new Rt(this.O(bt()),this.O(bt()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e!==this._$AB;){const n=Ws(e).nextSibling;Ws(e).remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class ns{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=L,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=L}_$AI(e,t=this,r,n){const i=this.strings;let a=!1;if(i===void 0)e=rt(this,e,t,0),a=!wt(e)||e!==this._$AH&&e!==st,a&&(this._$AH=e);else{const o=e;let l,c;for(e=i[0],l=0;l<i.length-1;l++)c=rt(this,o[r+l],t,l),c===st&&(c=this._$AH[l]),a||(a=!wt(c)||c!==this._$AH[l]),c===L?e=L:e!==L&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}a&&!n&&this.j(e)}j(e){e===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Pn extends ns{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===L?void 0:e}}class In extends ns{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==L)}}class Dn extends ns{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=rt(this,e,t,0)??L)===st)return;const r=this._$AH,n=e===L&&r!==L||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==L&&(r===L||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class jn{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){rt(this,e)}}const ds=gt.litHtmlPolyfillSupport;ds==null||ds(_t,Rt),(gt.litHtmlVersions??(gt.litHtmlVersions=[])).push("3.3.3");const Nn=(s,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let n=r._$litPart$;if(n===void 0){const i=(t==null?void 0:t.renderBefore)??null;r._$litPart$=n=new Rt(e.insertBefore(bt(),i),i,void 0,t??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=globalThis;class H extends Ge{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Nn(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return st}}var Mr;H._$litElement$=!0,H.finalized=!0,(Mr=Ne.litElementHydrateSupport)==null||Mr.call(Ne,{LitElement:H});const ps=Ne.litElementPolyfillSupport;ps==null||ps({LitElement:H});(Ne.litElementVersions??(Ne.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ln={attribute:!0,type:String,converter:Kt,reflect:!1,hasChanged:Ns},Un=(s=Ln,e,t)=>{const{kind:r,metadata:n}=t;let i=globalThis.litPropertyMetadata.get(n);if(i===void 0&&globalThis.litPropertyMetadata.set(n,i=new Map),r==="setter"&&((s=Object.create(s)).wrapped=!0),i.set(t.name,s),r==="accessor"){const{name:a}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,s,!0,o)},init(o){return o!==void 0&&this.C(a,void 0,s,o),o}}}if(r==="setter"){const{name:a}=t;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,s,!0,o)}}throw Error("Unsupported decorator location: "+r)};function R(s){return(e,t)=>typeof t=="object"?Un(s,e,t):((r,n,i)=>{const a=n.hasOwnProperty(i);return n.constructor.createProperty(i,r),a?Object.getOwnPropertyDescriptor(n,i):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function A(s){return R({...s,state:!0,attribute:!1})}const Gt="#E1E1DB",mt=["#6B7F6E","#8A7B94","#9FAF95","#7D6E7F","#A98F72","#8B98A8","#A8817D","#7A8A99"];function Mn(s){if(s.reduce((n,i)=>n+i.pct,0)<=0)return`conic-gradient(${Gt} 0% 100%)`;let t=0;const r=[];return s.forEach(n=>{const i=t;t+=n.pct,r.push(`${n.color} ${i.toFixed(1)}% ${t.toFixed(1)}%`)}),t<100&&r.push(`${Gt} ${t.toFixed(1)}% 100%`),`conic-gradient(${r.join(", ")})`}function ks(s,e){const t=Math.max(0,Math.min(100,e));return t<=0?`conic-gradient(${Gt} 0% 100%)`:`conic-gradient(${s} 0% ${t.toFixed(1)}%, ${Gt} ${t.toFixed(1)}% 100%)`}function Fn(s){return s.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||"instrument"}function Qe(s){if(s<=0)return"0′";if(s<60)return`${s}′`;const e=Math.floor(s/60),t=s%60;return`${e}h${t?` ${t}m`:""}`}function Bn(s){const e=Math.max(0,Math.floor(s/1e3)),t=Math.floor(e/3600),r=Math.floor(e%3600/60),n=e%60,i=String(r).padStart(2,"0"),a=String(n).padStart(2,"0");return t>0?`${t}:${i}:${a}`:`${r}:${a}`}function Q(s){const e=new Date(s);return e.setHours(0,0,0,0),e}function X(s,e){const t=new Date(s);return t.setDate(t.getDate()+e),t}function fe(s){return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function Hn(s,e){return s.getFullYear()===e.getFullYear()&&s.getMonth()===e.getMonth()&&s.getDate()===e.getDate()}function qn(s){const e=Q(new Date),t={};s.forEach(l=>{const c=fe(Q(new Date(l.start)));t[c]=!0});let n=!!t[fe(e)]?e:X(e,-1),i=0;for(;t[fe(n)];)i++,n=X(n,-1);let a=0;for(let l=0;l<30;l++){const c=X(e,-l);t[fe(c)]&&a++}const o=Math.round(a/30*100);return{currentStreak:i,consistency30d:o}}function zn(s){if(!s)return"Never";const e=new Date(s).getTime();if(isNaN(e))return"Never";const t=Math.floor((Date.now()-e)/1e3);if(t<10)return"Just now";if(t<60)return`${t}s ago`;const r=Math.floor(t/60);if(r<60)return`${r}m ago`;const n=Math.floor(r/60);if(n<24)return`${n}h ago`;const i=Math.floor(n/24);return i===1?"Yesterday":`${i}d ago`}let qe=null;function Us(){if(typeof window>"u")return null;if(!qe){const s=window.AudioContext||window.webkitAudioContext;s&&(qe=new s)}return qe&&qe.state==="suspended"&&qe.resume().catch(()=>{}),qe}function Wn(s=!0){if(s)try{const e=Us();if(!e)return;const t=e.currentTime,r=e.createOscillator(),n=e.createGain();r.type="sine",r.frequency.setValueAtTime(440,t),r.frequency.exponentialRampToValueAtTime(880,t+.12),n.gain.setValueAtTime(.001,t),n.gain.linearRampToValueAtTime(.12,t+.03),n.gain.exponentialRampToValueAtTime(1e-4,t+.2),r.connect(n),n.connect(e.destination),r.start(t),r.stop(t+.2)}catch{}}function yt(s=!0){if(s)try{const e=Us();if(!e)return;const t=e.currentTime;[523.25,659.25,783.99].forEach((r,n)=>{const i=e.createOscillator(),a=e.createGain();i.type="sine",i.frequency.setValueAtTime(r,t+n*.06),a.gain.setValueAtTime(.001,t+n*.06),a.gain.linearRampToValueAtTime(.08,t+n*.06+.04),a.gain.exponentialRampToValueAtTime(1e-4,t+n*.06+.45),i.connect(a),a.connect(e.destination),i.start(t+n*.06),i.stop(t+n*.06+.5)})}catch{}}function Ce(s=!0){if(s)try{const e=Us();if(!e)return;const t=e.currentTime,r=e.createOscillator(),n=e.createGain();r.type="triangle",r.frequency.setValueAtTime(320,t),r.frequency.exponentialRampToValueAtTime(160,t+.04),n.gain.setValueAtTime(.05,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.05),r.connect(n),n.connect(e.destination),r.start(t),r.stop(t+.05)}catch{}}function fs(s=15,e=!0){if(e)try{typeof navigator<"u"&&"vibrate"in navigator&&navigator.vibrate(s)}catch{}}class Vn{formatUrl(e){let t=e.trim().replace(/\/+$/,"");return t&&!t.startsWith("http://")&&!t.startsWith("https://")&&(t="https://"+t),t}applyAuthHeaders(e,t){if(!t)return;const r=t.trim();r.toLowerCase().startsWith("bearer ")?e.Authorization=r:r.includes(".")&&r.length>30?e.Authorization=`Bearer ${r}`:e["X-PT-Secret"]=r}async testConnection(e,t){const r=this.formatUrl(e);if(!r)return{ok:!1,status:0,message:"Worker URL cannot be empty"};try{const n={};this.applyAuthHeaders(n,t);const i=new AbortController,a=setTimeout(()=>i.abort(),8e3),o=await fetch(`${r}/api/health`,{method:"GET",headers:n,signal:i.signal});if(clearTimeout(a),o.status===200)return{ok:!0,status:200,message:"Connected to Cloudflare Worker",timestamp:(await o.json().catch(()=>({}))).timestamp};if(o.status===401)return{ok:!1,status:401,message:"Unauthorized: Invalid or missing authorization token"};const l=await o.text().catch(()=>"");return{ok:!1,status:o.status,message:`Connection error (${o.status}): ${l||o.statusText}`}}catch(n){return n instanceof Error&&n.name==="AbortError"?{ok:!1,status:0,message:"Connection timed out (8s limit)"}:{ok:!1,status:0,message:"Network error: Unable to reach worker endpoint"}}}async sync(e,t,r){const n=this.formatUrl(e);if(!n)throw new Error("Worker URL is not configured");const i={"Content-Type":"application/json"};this.applyAuthHeaders(i,t);const a=new AbortController,o=setTimeout(()=>a.abort(),15e3),l=await fetch(`${n}/api/sync`,{method:"POST",headers:i,body:JSON.stringify(r),signal:a.signal});if(clearTimeout(o),!l.ok){let c="";try{const h=await l.json();c=h.error||h.message||""}catch{c=await l.text().catch(()=>"")}throw new Error(`Cloud sync failed (${l.status}): ${c||l.statusText||"Unknown error"}`)}return await l.json()}}const Qs=new Vn,Kn=Symbol.for("@supabase/supabase-js.traceContextExtractor");function Jn(){return globalThis[Kn]}function is(s,e){var t={};for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&e.indexOf(r)<0&&(t[r]=s[r]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(s);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(s,r[n])&&(t[r[n]]=s[r[n]]);return t}function Gn(s,e,t,r){function n(i){return i instanceof t?i:new t(function(a){a(i)})}return new(t||(t=Promise))(function(i,a){function o(h){try{c(r.next(h))}catch(u){a(u)}}function l(h){try{c(r.throw(h))}catch(u){a(u)}}function c(h){h.done?i(h.value):n(h.value).then(o,l)}c((r=r.apply(s,e||[])).next())})}const Yn=s=>s?(...e)=>s(...e):(...e)=>fetch(...e);class Ms extends Error{constructor(e,t="FunctionsError",r){super(e),this.name=t,this.context=r}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class Xn extends Ms{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class Zs extends Ms{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class er extends Ms{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var Es;(function(s){s.Any="any",s.ApNortheast1="ap-northeast-1",s.ApNortheast2="ap-northeast-2",s.ApSouth1="ap-south-1",s.ApSoutheast1="ap-southeast-1",s.ApSoutheast2="ap-southeast-2",s.CaCentral1="ca-central-1",s.EuCentral1="eu-central-1",s.EuWest1="eu-west-1",s.EuWest2="eu-west-2",s.EuWest3="eu-west-3",s.SaEast1="sa-east-1",s.UsEast1="us-east-1",s.UsWest1="us-west-1",s.UsWest2="us-west-2"})(Es||(Es={}));class Qn{constructor(e,{headers:t={},customFetch:r,region:n=Es.Any}={}){this.url=e,this.headers=t,this.region=n,this.fetch=Yn(r)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return Gn(this,arguments,void 0,function*(t,r={}){var n,i;let a,o,l;try{const{headers:c,method:h,body:u,signal:d,timeout:p}=r;let g={},{region:f}=r;f||(f=this.region);const y=new URL(`${this.url}/${t}`);f&&f!=="any"&&(g["x-region"]=f,y.searchParams.set("forceFunctionRegion",f));let v;const b=!!c&&Object.keys(c).some(lt=>lt.toLowerCase()==="content-type");u&&!b?typeof Blob<"u"&&u instanceof Blob||u instanceof ArrayBuffer?(g["Content-Type"]="application/octet-stream",v=u):typeof u=="string"?(g["Content-Type"]="text/plain",v=u):typeof FormData<"u"&&u instanceof FormData?v=u:(g["Content-Type"]="application/json",v=JSON.stringify(u)):u&&typeof u!="string"&&!(typeof Blob<"u"&&u instanceof Blob)&&!(u instanceof ArrayBuffer)&&!(typeof FormData<"u"&&u instanceof FormData)?v=JSON.stringify(u):v=u;let w=d;p&&(o=new AbortController,a=setTimeout(()=>o.abort(),p),d?(w=o.signal,l=()=>o.abort(),d.addEventListener("abort",l)):w=o.signal);const k=yield this.fetch(y.toString(),{method:h||"POST",headers:Object.assign(Object.assign(Object.assign({},g),this.headers),c),body:v,signal:w}).catch(lt=>{throw new Xn(lt)}),T=k.headers.get("x-relay-error");if(T&&T==="true")throw new Zs(k);if(!k.ok)throw new er(k);let $=((n=k.headers.get("Content-Type"))!==null&&n!==void 0?n:"text/plain").split(";")[0].trim().toLowerCase(),O;return $==="application/json"?O=yield k.json():$==="application/octet-stream"||$==="application/pdf"?O=yield k.blob():$==="text/event-stream"?O=k:$==="multipart/form-data"?O=yield k.formData():O=yield k.text(),{data:O,error:null,response:k}}catch(c){return{data:null,error:c,response:c instanceof er||c instanceof Zs?c.context:void 0}}finally{a&&clearTimeout(a),l&&((i=r.signal)===null||i===void 0||i.removeEventListener("abort",l))}})}}const Wr=3,tr=s=>Math.min(1e3*2**s,3e4),Zn=[520,503],Vr=["GET","HEAD","OPTIONS"];var gs=class extends Error{constructor(s){super(s.message),this.name="PostgrestError",this.details=s.details,this.hint=s.hint,this.code=s.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function St(s){"@babel/helpers - typeof";return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},St(s)}function ei(s,e){if(St(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var r=t.call(s,e);if(St(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function ti(s){var e=ei(s,"string");return St(e)=="symbol"?e:e+""}function si(s,e,t){return(e=ti(e))in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function sr(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(s,n).enumerable})),t.push.apply(t,r)}return t}function Ze(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?sr(Object(t),!0).forEach(function(r){si(s,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):sr(Object(t)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(t,r))})}return s}function rr(s,e){return new Promise(t=>{if(e!=null&&e.aborted){t();return}const r=setTimeout(()=>{e==null||e.removeEventListener("abort",n),t()},s);function n(){clearTimeout(r),t()}e==null||e.addEventListener("abort",n)})}function ri(s,e,t,r){return!(!r||t>=Wr||!Vr.includes(s)||!Zn.includes(e))}var ni=class{constructor(s){var e,t,r,n,i;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=s.method,this.url=s.url,this.headers=new Headers(s.headers),this.schema=s.schema,this.body=s.body,this.shouldThrowOnError=(e=s.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=s.signal,this.isMaybeSingle=(t=s.isMaybeSingle)!==null&&t!==void 0?t:!1,this.shouldStripNulls=(r=s.shouldStripNulls)!==null&&r!==void 0?r:!1,this.urlLengthLimit=(n=s.urlLengthLimit)!==null&&n!==void 0?n:8e3,this.retryEnabled=(i=s.retry)!==null&&i!==void 0?i:!0,s.fetch?this.fetch=s.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(s,e){return this.headers=new Headers(this.headers),this.headers.set(s,e),this}retry(s){return this.retryEnabled=s,this}then(s,e){var t=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const a=this.headers.get("Accept");a==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!a||a==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const r=this.fetch;let i=(async()=>{let a=0;for(;;){const c={};t.headers.forEach((u,d)=>{c[d]=u}),a>0&&(c["X-Retry-Count"]=String(a));let h;try{h=await r(t.url.toString(),{method:t.method,headers:c,body:JSON.stringify(t.body,(u,d)=>typeof d=="bigint"?d.toString():d),signal:t.signal})}catch(u){if((u==null?void 0:u.name)==="AbortError"||(u==null?void 0:u.code)==="ABORT_ERR"||!Vr.includes(t.method))throw u;if(t.retryEnabled&&a<Wr){const d=tr(a);a++,await rr(d,t.signal);continue}throw u}if(ri(t.method,h.status,a,t.retryEnabled)){var o,l;const u=(o=(l=h.headers)===null||l===void 0?void 0:l.get("Retry-After"))!==null&&o!==void 0?o:null,d=u!==null?Math.max(0,parseInt(u,10)||0)*1e3:tr(a);await h.text(),a++,await rr(d,t.signal);continue}return await t.processResponse(h)}})();return this.shouldThrowOnError||(i=i.catch(a=>{var o;let l="",c="",h="";const u=a==null?void 0:a.cause;if(u){var d,p,g,f;const b=(d=u==null?void 0:u.message)!==null&&d!==void 0?d:"",w=(p=u==null?void 0:u.code)!==null&&p!==void 0?p:"";l=`${(g=a==null?void 0:a.name)!==null&&g!==void 0?g:"FetchError"}: ${a==null?void 0:a.message}`,l+=`

Caused by: ${(f=u==null?void 0:u.name)!==null&&f!==void 0?f:"Error"}: ${b}`,w&&(l+=` (${w})`),u!=null&&u.stack&&(l+=`
${u.stack}`)}else{var y;l=(y=a==null?void 0:a.stack)!==null&&y!==void 0?y:""}const v=this.url.toString().length;return(a==null?void 0:a.name)==="AbortError"||(a==null?void 0:a.code)==="ABORT_ERR"?(h="",c="Request was aborted (timeout or manual cancellation)",v>this.urlLengthLimit&&(c+=`. Note: Your request URL is ${v} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((u==null?void 0:u.name)==="HeadersOverflowError"||(u==null?void 0:u.code)==="UND_ERR_HEADERS_OVERFLOW")&&(h="",c="HTTP headers exceeded server limits (typically 16KB)",v>this.urlLengthLimit&&(c+=`. Your request URL is ${v} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(o=a==null?void 0:a.name)!==null&&o!==void 0?o:"FetchError"}: ${a==null?void 0:a.message}`,details:l,hint:c,code:h},data:null,count:null,status:0,statusText:""}})),i.then(s,e)}async processResponse(s){var e=this;let t=null,r=null,n=null,i=s.status,a=s.statusText;if(s.ok){var o,l;if(e.method!=="HEAD"){var c;const p=await s.text();if(p!=="")if(e.headers.get("Accept")==="text/csv")r=p;else if(e.headers.get("Accept")&&(!((c=e.headers.get("Accept"))===null||c===void 0)&&c.includes("application/vnd.pgrst.plan+text")))r=p;else try{r=JSON.parse(p)}catch{if(t={message:p},r=null,e.shouldThrowOnError)throw new gs({message:p,details:"",hint:"",code:""})}}const u=(o=e.headers.get("Prefer"))===null||o===void 0?void 0:o.match(/count=(exact|planned|estimated)/),d=(l=s.headers.get("content-range"))===null||l===void 0?void 0:l.split("/");if(u&&d&&d.length>1&&(n=parseInt(d[1])),e.isMaybeSingle&&Array.isArray(r))if(r.length>1){if(t={code:"PGRST116",details:`Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},r=null,n=null,i=406,a="Not Acceptable",e.shouldThrowOnError){var h;throw new gs(Ze(Ze({},t),{},{hint:(h=t.hint)!==null&&h!==void 0?h:""}))}}else r.length===1?r=r[0]:r=null}else{const u=await s.text();try{t=JSON.parse(u),Array.isArray(t)&&s.status===404&&(r=[],t=null,i=200,a="OK")}catch{s.status===404&&u===""?(i=204,a="No Content"):t={message:u}}if(t&&e.shouldThrowOnError)throw new gs(t)}return{success:t===null,error:t,data:r,count:n,status:i,statusText:a}}returns(){return this}overrideTypes(){return this}},ii=class extends ni{throwOnError(){return super.throwOnError()}select(s){let e=!1;const t=(s??"*").split("").map(r=>/\s/.test(r)&&!e?"":(r==='"'&&(e=!e),r)).join("");return this.url.searchParams.set("select",t),this.headers.append("Prefer","return=representation"),this}order(s,{ascending:e=!0,nullsFirst:t,foreignTable:r,referencedTable:n=r}={}){const i=n?`${n}.order`:"order",a=this.url.searchParams.get(i);return this.url.searchParams.set(i,`${a?`${a},`:""}${s}.${e?"asc":"desc"}${t===void 0?"":t?".nullsfirst":".nullslast"}`),this}limit(s,{foreignTable:e,referencedTable:t=e}={}){const r=typeof t>"u"?"limit":`${t}.limit`;return this.url.searchParams.set(r,`${s}`),this}range(s,e,{foreignTable:t,referencedTable:r=t}={}){const n=typeof r>"u"?"offset":`${r}.offset`,i=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(n,`${s}`),this.url.searchParams.set(i,`${e-s+1}`),this}abortSignal(s){return this.signal=s,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:s=!1,verbose:e=!1,settings:t=!1,buffers:r=!1,wal:n=!1,format:i="text"}={}){var a;const o=[s?"analyze":null,e?"verbose":null,t?"settings":null,r?"buffers":null,n?"wal":null].filter(Boolean).join("|"),l=(a=this.headers.get("Accept"))!==null&&a!==void 0?a:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${i}; for="${l}"; options=${o};`),i==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(s){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${s}`),this}};const nr=new RegExp("[,()]");var Ye=class extends ii{throwOnError(){return super.throwOnError()}eq(s,e){return this.url.searchParams.append(s,`eq.${e}`),this}neq(s,e){return this.url.searchParams.append(s,`neq.${e}`),this}gt(s,e){return this.url.searchParams.append(s,`gt.${e}`),this}gte(s,e){return this.url.searchParams.append(s,`gte.${e}`),this}lt(s,e){return this.url.searchParams.append(s,`lt.${e}`),this}lte(s,e){return this.url.searchParams.append(s,`lte.${e}`),this}like(s,e){return this.url.searchParams.append(s,`like.${e}`),this}likeAllOf(s,e){return this.url.searchParams.append(s,`like(all).{${e.join(",")}}`),this}likeAnyOf(s,e){return this.url.searchParams.append(s,`like(any).{${e.join(",")}}`),this}ilike(s,e){return this.url.searchParams.append(s,`ilike.${e}`),this}ilikeAllOf(s,e){return this.url.searchParams.append(s,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(s,e){return this.url.searchParams.append(s,`ilike(any).{${e.join(",")}}`),this}regexMatch(s,e){return this.url.searchParams.append(s,`match.${e}`),this}regexIMatch(s,e){return this.url.searchParams.append(s,`imatch.${e}`),this}is(s,e){return this.url.searchParams.append(s,`is.${e}`),this}isDistinct(s,e){return this.url.searchParams.append(s,`isdistinct.${e}`),this}in(s,e){const t=Array.from(new Set(e)).map(r=>typeof r=="string"&&nr.test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(s,`in.(${t})`),this}notIn(s,e){const t=Array.from(new Set(e)).map(r=>typeof r=="string"&&nr.test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(s,`not.in.(${t})`),this}contains(s,e){return typeof e=="string"?this.url.searchParams.append(s,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(s,`cs.{${e.join(",")}}`):this.url.searchParams.append(s,`cs.${JSON.stringify(e)}`),this}containedBy(s,e){return typeof e=="string"?this.url.searchParams.append(s,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(s,`cd.{${e.join(",")}}`):this.url.searchParams.append(s,`cd.${JSON.stringify(e)}`),this}rangeGt(s,e){return this.url.searchParams.append(s,`sr.${e}`),this}rangeGte(s,e){return this.url.searchParams.append(s,`nxl.${e}`),this}rangeLt(s,e){return this.url.searchParams.append(s,`sl.${e}`),this}rangeLte(s,e){return this.url.searchParams.append(s,`nxr.${e}`),this}rangeAdjacent(s,e){return this.url.searchParams.append(s,`adj.${e}`),this}overlaps(s,e){return typeof e=="string"?this.url.searchParams.append(s,`ov.${e}`):this.url.searchParams.append(s,`ov.{${e.join(",")}}`),this}textSearch(s,e,{config:t,type:r}={}){let n="";r==="plain"?n="pl":r==="phrase"?n="ph":r==="websearch"&&(n="w");const i=t===void 0?"":`(${t})`;return this.url.searchParams.append(s,`${n}fts${i}.${e}`),this}match(s){return Object.entries(s).filter(([e,t])=>t!==void 0).forEach(([e,t])=>{this.url.searchParams.append(e,`eq.${t}`)}),this}not(s,e,t){return this.url.searchParams.append(s,`not.${e}.${t}`),this}or(s,{foreignTable:e,referencedTable:t=e}={}){const r=t?`${t}.or`:"or";return this.url.searchParams.append(r,`(${s})`),this}filter(s,e,t){return this.url.searchParams.append(s,`${e}.${t}`),this}},ai=class{constructor(s,{headers:e={},schema:t,fetch:r,urlLengthLimit:n=8e3,retry:i}){this.url=s,this.headers=new Headers(e),this.schema=t,this.fetch=r,this.urlLengthLimit=n,this.retry=i}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(s,e){const{head:t=!1,count:r}=e??{},n=t?"HEAD":"GET";let i=!1;const a=(s??"*").split("").map(c=>/\s/.test(c)&&!i?"":(c==='"'&&(i=!i),c)).join(""),{url:o,headers:l}=this.cloneRequestState();return o.searchParams.set("select",a),r&&l.append("Prefer",`count=${r}`),new Ye({method:n,url:o,headers:l,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(s,{count:e,defaultToNull:t=!0}={}){var r;const n="POST",{url:i,headers:a}=this.cloneRequestState();if(e&&a.append("Prefer",`count=${e}`),t||a.append("Prefer","missing=default"),Array.isArray(s)){const o=s.reduce((l,c)=>l.concat(Object.keys(c)),[]);if(o.length>0){const l=[...new Set(o)].map(c=>`"${c}"`);i.searchParams.set("columns",l.join(","))}}return new Ye({method:n,url:i,headers:a,schema:this.schema,body:s,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(s,{onConflict:e,ignoreDuplicates:t=!1,count:r,defaultToNull:n=!0}={}){var i;const a="POST",{url:o,headers:l}=this.cloneRequestState();if(l.append("Prefer",`resolution=${t?"ignore":"merge"}-duplicates`),e!==void 0&&o.searchParams.set("on_conflict",e),r&&l.append("Prefer",`count=${r}`),n||l.append("Prefer","missing=default"),Array.isArray(s)){const c=s.reduce((h,u)=>h.concat(Object.keys(u)),[]);if(c.length>0){const h=[...new Set(c)].map(u=>`"${u}"`);o.searchParams.set("columns",h.join(","))}}return new Ye({method:a,url:o,headers:l,schema:this.schema,body:s,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(s,{count:e}={}){var t;const r="PATCH",{url:n,headers:i}=this.cloneRequestState();return e&&i.append("Prefer",`count=${e}`),new Ye({method:r,url:n,headers:i,schema:this.schema,body:s,fetch:(t=this.fetch)!==null&&t!==void 0?t:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:s}={}){var e;const t="DELETE",{url:r,headers:n}=this.cloneRequestState();return s&&n.append("Prefer",`count=${s}`),new Ye({method:t,url:r,headers:n,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}},oi=class Kr{constructor(e,{headers:t={},schema:r,fetch:n,timeout:i,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(t),this.schemaName=r,this.urlLengthLimit=a;const l=n??globalThis.fetch;i!==void 0&&i>0?this.fetch=(c,h)=>{const u=new AbortController,d=setTimeout(()=>u.abort(),i),p=h==null?void 0:h.signal;if(p){if(p.aborted)return clearTimeout(d),l(c,h);const g=()=>{clearTimeout(d),u.abort()};return p.addEventListener("abort",g,{once:!0}),l(c,Ze(Ze({},h),{},{signal:u.signal})).finally(()=>{clearTimeout(d),p.removeEventListener("abort",g)})}return l(c,Ze(Ze({},h),{},{signal:u.signal})).finally(()=>clearTimeout(d))}:this.fetch=l,this.retry=o}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new ai(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new Kr(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,t={},{head:r=!1,get:n=!1,count:i}={}){var a;let o;const l=new URL(`${this.url}/rpc/${e}`);let c;const h=p=>p!==null&&typeof p=="object"&&(!Array.isArray(p)||p.some(h)),u=r&&Object.values(t).some(h);u?(o="POST",c=t):r||n?(o=r?"HEAD":"GET",Object.entries(t).filter(([p,g])=>g!==void 0).map(([p,g])=>[p,Array.isArray(g)?`{${g.join(",")}}`:`${g}`]).forEach(([p,g])=>{l.searchParams.append(p,g)})):(o="POST",c=t);const d=new Headers(this.headers);return u?d.set("Prefer",i?`count=${i},return=minimal`:"return=minimal"):i&&d.set("Prefer",`count=${i}`),new Ye({method:o,url:l,headers:d,schema:this.schemaName,body:c,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class li{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const t=globalThis;if(typeof globalThis<"u"&&typeof t.WebSocket<"u")return{type:"native",wsConstructor:t.WebSocket};const r=typeof global<"u"?global:void 0;if(r&&typeof r.WebSocket<"u")return{type:"native",wsConstructor:r.WebSocket};if(typeof globalThis<"u"&&typeof t.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&t.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const n=globalThis.process;if(n){const i=n.versions;if(i&&i.node)return{type:"unsupported",error:"Node.js detected but native WebSocket not found.",workaround:"Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option."}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let t=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(t+=`

Suggested solution: ${e.workaround}`),new Error(t)}static isWebSocketSupported(){try{return this.detectEnvironment().type==="native"}catch{return!1}}}const ci="2.112.3",ui=`realtime-js/${ci}`,hi="1.0.0",Jr="2.0.0",di=Jr,pi=1e4,fi=100,_e={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Gr={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},As={connecting:"connecting",closing:"closing",closed:"closed"};class gi{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return t(this._binaryEncodeUserBroadcastPush(e));let r=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(r))}_binaryEncodeUserBroadcastPush(e){var t;return this._isArrayBuffer((t=e.payload)===null||t===void 0?void 0:t.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var t,r;const n=(r=(t=e.payload)===null||t===void 0?void 0:t.payload)!==null&&r!==void 0?r:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,n)}_encodeJsonUserBroadcastPush(e){var t,r;const n=(r=(t=e.payload)===null||t===void 0?void 0:t.payload)!==null&&r!==void 0?r:{},a=new TextEncoder().encode(JSON.stringify(n)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,a)}_encodeUserBroadcastPush(e,t,r){var n,i;const a=new TextEncoder,o=a.encode(e.topic),l=a.encode((n=e.ref)!==null&&n!==void 0?n:""),c=a.encode((i=e.join_ref)!==null&&i!==void 0?i:""),h=a.encode(e.payload.event),u=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},d=a.encode(Object.keys(u).length===0?"":JSON.stringify(u));if(c.length>255)throw new Error(`joinRef length ${c.length} exceeds maximum of 255`);if(l.length>255)throw new Error(`ref length ${l.length} exceeds maximum of 255`);if(o.length>255)throw new Error(`topic length ${o.length} exceeds maximum of 255`);if(h.length>255)throw new Error(`userEvent length ${h.length} exceeds maximum of 255`);if(d.length>255)throw new Error(`metadata length ${d.length} exceeds maximum of 255`);const p=this.USER_BROADCAST_PUSH_META_LENGTH+c.length+l.length+o.length+h.length+d.length,g=new ArrayBuffer(this.HEADER_LENGTH+p),f=new DataView(g),y=new Uint8Array(g);let v=0;f.setUint8(v++,this.KINDS.userBroadcastPush),f.setUint8(v++,c.length),f.setUint8(v++,l.length),f.setUint8(v++,o.length),f.setUint8(v++,h.length),f.setUint8(v++,d.length),f.setUint8(v++,t),y.set(c,v),v+=c.length,y.set(l,v),v+=l.length,y.set(o,v),v+=o.length,y.set(h,v),v+=h.length,y.set(d,v),v+=d.length;var b=new Uint8Array(g.byteLength+r.byteLength);return b.set(new Uint8Array(g),0),b.set(new Uint8Array(r),g.byteLength),b.buffer}decode(e,t){if(this._isArrayBuffer(e)){let r=this._binaryDecode(e);return t(r)}if(typeof e=="string"){const r=JSON.parse(e),[n,i,a,o,l]=r;return t({join_ref:n,ref:i,topic:a,event:o,payload:l})}return t({})}_binaryDecode(e){const t=new DataView(e),r=t.getUint8(0),n=new TextDecoder;switch(r){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,t,n)}}_decodeUserBroadcast(e,t,r){const n=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4);let l=this.HEADER_LENGTH+4;const c=r.decode(e.slice(l,l+n));l=l+n;const h=r.decode(e.slice(l,l+i));l=l+i;const u=r.decode(e.slice(l,l+a));l=l+a;const d=e.slice(l,e.byteLength),p=o===this.JSON_ENCODING?JSON.parse(r.decode(d)):d,g={type:this.BROADCAST_EVENT,event:h,payload:p};return a>0&&(g.meta=JSON.parse(u)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:g}}_isArrayBuffer(e){var t;return e instanceof ArrayBuffer||((t=e==null?void 0:e.constructor)===null||t===void 0?void 0:t.name)==="ArrayBuffer"}_pick(e,t){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([r])=>t.includes(r)))}}var C;(function(s){s.abstime="abstime",s.bool="bool",s.date="date",s.daterange="daterange",s.float4="float4",s.float8="float8",s.int2="int2",s.int4="int4",s.int4range="int4range",s.int8="int8",s.int8range="int8range",s.json="json",s.jsonb="jsonb",s.money="money",s.numeric="numeric",s.oid="oid",s.reltime="reltime",s.text="text",s.time="time",s.timestamp="timestamp",s.timestamptz="timestamptz",s.timetz="timetz",s.tsrange="tsrange",s.tstzrange="tstzrange"})(C||(C={}));const ir=(s,e,t={})=>{var r;const n=(r=t.skipTypes)!==null&&r!==void 0?r:[];return e?Object.keys(e).reduce((i,a)=>(i[a]=mi(a,s,e,n),i),{}):{}},mi=(s,e,t,r)=>{const n=e.find(o=>o.name===s),i=n==null?void 0:n.type,a=t[s];return i&&!r.includes(i)?Yr(i,a):xs(a)},Yr=(s,e)=>{if(s.charAt(0)==="_"){const t=s.slice(1,s.length);return wi(e,t)}switch(s){case C.bool:return yi(e);case C.float4:case C.float8:case C.int2:case C.int4:case C.int8:case C.numeric:case C.oid:return vi(e);case C.json:case C.jsonb:return bi(e);case C.timestamp:return _i(e);case C.abstime:case C.date:case C.daterange:case C.int4range:case C.int8range:case C.money:case C.reltime:case C.text:case C.time:case C.timestamptz:case C.timetz:case C.tsrange:case C.tstzrange:return xs(e);default:return xs(e)}},xs=s=>s,yi=s=>{switch(s){case"t":return!0;case"f":return!1;default:return s}},vi=s=>{if(typeof s=="string"){const e=parseFloat(s);if(!Number.isNaN(e))return e}return s},bi=s=>{if(typeof s=="string")try{return JSON.parse(s)}catch{return s}return s},wi=(s,e)=>{if(typeof s!="string")return s;const t=s.length-1,r=s[t];if(s[0]==="{"&&r==="}"){let i;const a=s.slice(1,t);try{i=JSON.parse("["+a+"]")}catch{i=a?a.split(","):[]}return i.map(o=>Yr(e,o))}return s},_i=s=>typeof s=="string"?s.replace(" ","T"):s,Xr=s=>{const e=new URL(s);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var et=s=>typeof s=="function"?s:function(){return s},Si=typeof self<"u"?self:null,Xe=typeof window<"u"?window:null,te=Si||Xe||globalThis,ki="2.0.0",Ei=1e4,Ai=1e3,xi=100,se={connecting:0,open:1,closing:2,closed:3},F={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},le={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},Ts={longpoll:"longpoll",websocket:"websocket"},Ti={complete:4},$s="base64url.bearer.phx.",jt=class{constructor(s,e,t,r){this.channel=s,this.event=e,this.payload=t||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(s){this.timeout=s,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(s,e){return this.hasReceived(s)&&e(this.receivedResp.response),this.recHooks.push({status:s,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:s,response:e,_ref:t}){this.recHooks.filter(r=>r.status===s).forEach(r=>r.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,s=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=s,this.matchReceive(s)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(s){return this.receivedResp&&this.receivedResp.status===s}trigger(s,e){this.channel.trigger(this.refEvent,{status:s,response:e})}},Qr=class{constructor(s,e){this.callback=s,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},$i=class{constructor(s,e,t){this.state=F.closed,this.topic=s,this.params=et(e||{}),this.socket=t,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new jt(this,le.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Qr(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=F.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(r=>r.send()),this.pushBuffer=[]}),this.joinPush.receive("error",r=>{this.state=F.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,r),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=F.closed,this.socket.remove(this)}),this.onError(r=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,r),this.isJoining()&&this.joinPush.reset(),this.state=F.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new jt(this,le.leave,et({}),this.timeout).send(),this.state=F.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(le.reply,(r,n)=>{this.trigger(this.replyEventName(n),r)})}join(s=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=s,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(s=>s.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=F.closed,this.bindings=[]}onClose(s){this.on(le.close,s)}onError(s){return this.on(le.error,e=>s(e))}on(s,e){let t=this.bindingRef++;return this.bindings.push({event:s,ref:t,callback:e}),t}off(s,e){this.bindings=this.bindings.filter(t=>!(t.event===s&&(typeof e>"u"||e===t.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(s,e,t=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${s}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let r=new jt(this,s,function(){return e},t);return this.canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}leave(s=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=F.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(le.close,"leave")},t=new jt(this,le.leave,et({}),s);return t.receive("ok",()=>e()).receive("timeout",()=>e()),t.send(),this.canPush()||t.trigger("ok",{}),t}onMessage(s,e,t){return e}filterBindings(s,e,t){return!0}isMember(s,e,t,r){return this.topic!==s?!1:r&&r!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:s,event:e,payload:t,joinRef:r}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(s=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=F.joining,this.joinPush.resend(s))}trigger(s,e,t,r){let n=this.onMessage(s,e,t,r);if(e&&!n)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let i=this.bindings.filter(a=>a.event===s&&this.filterBindings(a,e,t));for(let a=0;a<i.length;a++)i[a].callback(n,t,r||this.joinRef())}replyEventName(s){return`chan_reply_${s}`}isClosed(){return this.state===F.closed}isErrored(){return this.state===F.errored}isJoined(){return this.state===F.joined}isJoining(){return this.state===F.joining}isLeaving(){return this.state===F.leaving}},Yt=class{static request(s,e,t,r,n,i,a){if(te.XDomainRequest){let o=new te.XDomainRequest;return this.xdomainRequest(o,s,e,r,n,i,a)}else if(te.XMLHttpRequest){let o=new te.XMLHttpRequest;return this.xhrRequest(o,s,e,t,r,n,i,a)}else{if(te.fetch&&te.AbortController)return this.fetchRequest(s,e,t,r,n,i,a);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(s,e,t,r,n,i,a){let o={method:s,headers:t,body:r},l=null;return n&&(l=new AbortController,setTimeout(()=>l.abort(),n),o.signal=l.signal),te.fetch(e,o).then(c=>c.text()).then(c=>this.parseJSON(c)).then(c=>a&&a(c)).catch(c=>{c.name==="AbortError"&&i?i():a&&a(null)}),l}static xdomainRequest(s,e,t,r,n,i,a){return s.timeout=n,s.open(e,t),s.onload=()=>{let o=this.parseJSON(s.responseText);a&&a(o)},i&&(s.ontimeout=i),s.onprogress=()=>{},s.send(r),s}static xhrRequest(s,e,t,r,n,i,a,o){s.open(e,t,!0),s.timeout=i;for(let[l,c]of Object.entries(r))s.setRequestHeader(l,c);return s.onerror=()=>o&&o(null),s.onreadystatechange=()=>{if(s.readyState===Ti.complete&&o){let l=this.parseJSON(s.responseText);o(l)}},a&&(s.ontimeout=a),s.send(n),s}static parseJSON(s){if(!s||s==="")return null;try{return JSON.parse(s)}catch{return console&&console.log("failed to parse JSON response",s),null}}static serialize(s,e){let t=[];for(var r in s){if(!Object.prototype.hasOwnProperty.call(s,r))continue;let n=e?`${e}[${r}]`:r,i=s[r];typeof i=="object"?t.push(this.serialize(i,n)):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}return t.join("&")}static appendParams(s,e){if(Object.keys(e).length===0)return s;let t=s.match(/\?/)?"&":"?";return`${s}${t}${this.serialize(e)}`}},Oi=s=>{let e="",t=new Uint8Array(s),r=t.byteLength;for(let n=0;n<r;n++)e+=String.fromCharCode(t[n]);return btoa(e)},ze=class{constructor(s,e){e&&e.length===2&&e[1].startsWith($s)&&(this.authToken=atob(e[1].slice($s.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(s),this.readyState=se.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(s){return s.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+Ts.websocket),"$1/"+Ts.longpoll)}endpointURL(){return Yt.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(s,e,t){this.close(s,e,t),this.readyState=se.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===se.open||this.readyState===se.connecting}poll(){const s={Accept:"application/json"};this.authToken&&(s["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",s,null,()=>this.ontimeout(),e=>{if(e){var{status:t,token:r,messages:n}=e;if(t===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=r}else t=0;switch(t){case 200:n.forEach(i=>{setTimeout(()=>this.onmessage({data:i}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=se.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${t}`)}})}send(s){typeof s!="string"&&(s=Oi(s)),this.currentBatch?this.currentBatch.push(s):this.awaitingBatchAck?this.batchBuffer.push(s):(this.currentBatch=[s],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(s,e=0){this.awaitingBatchAck=!0;const t=e+xi,r=s.slice(e,t);this.ajax("POST",{"Content-Type":"application/x-ndjson"},r.join(`
`),()=>this.onerror("timeout"),n=>{!n||n.status!==200?(this.awaitingBatchAck=!1,this.onerror(n&&n.status),this.closeAndRetry(1011,"internal server error",!1)):t<s.length?this.batchSend(s,t):this.batchBuffer.length>0?(this.batchSend(this.batchBuffer),this.batchBuffer=[]):this.awaitingBatchAck=!1})}close(s,e,t){for(let n of this.reqs)n.abort();this.readyState=se.closed;let r=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:s,reason:e,wasClean:t});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",r)):this.onclose(r)}ajax(s,e,t,r,n){let i,a=()=>{this.reqs.delete(i),r()};i=Yt.request(s,this.endpointURL(),e,t,this.timeout,a,o=>{this.reqs.delete(i),this.isActive()&&n(o)}),this.reqs.add(i)}},Ci=class ht{constructor(e,t={}){let r=t.events||{state:"presence_state",diff:"presence_diff"};this.state=Object.create(null),this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,n=>{let{onJoin:i,onLeave:a,onSync:o}=this.caller;this.joinRef=this.channel.joinRef(),this.state=ht.syncState(this.state,n,i,a),this.pendingDiffs.forEach(l=>{this.state=ht.syncDiff(this.state,l,i,a)}),this.pendingDiffs=[],o()}),this.channel.on(r.diff,n=>{let{onJoin:i,onLeave:a,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(n):(this.state=ht.syncDiff(this.state,n,i,a),o())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return ht.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,t,r,n){let i=this.toNullProtoObj(this.clone(e));t=this.toNullProtoObj(t);let a=Object.create(null),o=Object.create(null);return this.map(i,(l,c)=>{t[l]||(o[l]=c)}),this.map(t,(l,c)=>{let h=i[l];if(h){let u=c.metas.map(f=>f.phx_ref),d=h.metas.map(f=>f.phx_ref),p=c.metas.filter(f=>d.indexOf(f.phx_ref)<0),g=h.metas.filter(f=>u.indexOf(f.phx_ref)<0);p.length>0&&(a[l]=c,a[l].metas=p),g.length>0&&(o[l]=this.clone(h),o[l].metas=g)}else a[l]=c}),this.syncDiff(i,{joins:a,leaves:o},r,n)}static syncDiff(e,t,r,n){e=this.toNullProtoObj(e);let{joins:i,leaves:a}=this.clone(t);return r||(r=function(){}),n||(n=function(){}),this.map(i,(o,l)=>{let c=e[o];if(e[o]=this.clone(l),c){let h=e[o].metas.map(d=>d.phx_ref),u=c.metas.filter(d=>h.indexOf(d.phx_ref)<0);e[o].metas.unshift(...u)}r(o,c,l)}),this.map(a,(o,l)=>{let c=e[o];if(!c)return;let h=l.metas.map(u=>u.phx_ref);c.metas=c.metas.filter(u=>h.indexOf(u.phx_ref)<0),n(o,c,l),c.metas.length===0&&delete e[o]}),e}static list(e,t){return t||(t=function(r,n){return n}),this.map(e,(r,n)=>t(r,n))}static map(e,t){return Object.getOwnPropertyNames(e).map(r=>t(r,e[r]))}static toNullProtoObj(e){if(Object.getPrototypeOf(e)===null)return e;let t=Object.create(null);return Object.getOwnPropertyNames(e).forEach(r=>{t[r]=e[r]}),t}static clone(e){return JSON.parse(JSON.stringify(e))}},Nt={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(s,e){if(s.payload.constructor===ArrayBuffer)return e(this.binaryEncode(s));{let t=[s.join_ref,s.ref,s.topic,s.event,s.payload];return e(JSON.stringify(t))}},decode(s,e){if(s.constructor===ArrayBuffer)return e(this.binaryDecode(s));{let[t,r,n,i,a]=JSON.parse(s);return e({join_ref:t,ref:r,topic:n,event:i,payload:a})}},binaryEncode(s){let{join_ref:e,ref:t,event:r,topic:n,payload:i}=s,a=new TextEncoder,o=a.encode(e),l=a.encode(t),c=a.encode(n),h=a.encode(r);this.assertFieldSize(o.byteLength,"join_ref"),this.assertFieldSize(l.byteLength,"ref"),this.assertFieldSize(c.byteLength,"topic"),this.assertFieldSize(h.byteLength,"event");let u=this.META_LENGTH+o.byteLength+l.byteLength+c.byteLength+h.byteLength,d=new ArrayBuffer(this.HEADER_LENGTH+u),p=new Uint8Array(d),g=new DataView(d),f=0;g.setUint8(f++,this.KINDS.push),g.setUint8(f++,o.byteLength),g.setUint8(f++,l.byteLength),g.setUint8(f++,c.byteLength),g.setUint8(f++,h.byteLength),p.set(o,f),f+=o.byteLength,p.set(l,f),f+=l.byteLength,p.set(c,f),f+=c.byteLength,p.set(h,f),f+=h.byteLength;var y=new Uint8Array(d.byteLength+i.byteLength);return y.set(p,0),y.set(new Uint8Array(i),d.byteLength),y.buffer},assertFieldSize(s,e){if(s>255)throw new Error(`unable to convert ${e} to binary: must be less than or equal to 255 bytes, but is ${s} bytes`)},binaryDecode(s){let e=new DataView(s),t=e.getUint8(0),r=new TextDecoder;switch(t){case this.KINDS.push:return this.decodePush(s,e,r);case this.KINDS.reply:return this.decodeReply(s,e,r);case this.KINDS.broadcast:return this.decodeBroadcast(s,e,r)}},decodePush(s,e,t){let r=e.getUint8(1),n=e.getUint8(2),i=e.getUint8(3),a=this.HEADER_LENGTH+this.META_LENGTH-1,o=t.decode(s.slice(a,a+r));a=a+r;let l=t.decode(s.slice(a,a+n));a=a+n;let c=t.decode(s.slice(a,a+i));a=a+i;let h=s.slice(a,s.byteLength);return{join_ref:o,ref:null,topic:l,event:c,payload:h}},decodeReply(s,e,t){let r=e.getUint8(1),n=e.getUint8(2),i=e.getUint8(3),a=e.getUint8(4),o=this.HEADER_LENGTH+this.META_LENGTH,l=t.decode(s.slice(o,o+r));o=o+r;let c=t.decode(s.slice(o,o+n));o=o+n;let h=t.decode(s.slice(o,o+i));o=o+i;let u=t.decode(s.slice(o,o+a));o=o+a;let d=s.slice(o,s.byteLength),p={status:u,response:d};return{join_ref:l,ref:c,topic:h,event:le.reply,payload:p}},decodeBroadcast(s,e,t){let r=e.getUint8(1),n=e.getUint8(2),i=this.HEADER_LENGTH+2,a=t.decode(s.slice(i,i+r));i=i+r;let o=t.decode(s.slice(i,i+n));i=i+n;let l=s.slice(i,s.byteLength);return{join_ref:null,ref:null,topic:a,event:o,payload:l}}},Ri=class{constructor(s,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||Ei,this.transport=e.transport||te.WebSocket||ze,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let t=null;try{t=te&&te.sessionStorage}catch{}this.sessionStore=e.sessionStorage||t,this.establishedConnections=0,this.defaultEncoder=Nt.encode.bind(Nt),this.defaultDecoder=Nt.decode.bind(Nt),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==ze?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let r=null;Xe&&Xe.addEventListener&&(Xe.addEventListener("pagehide",n=>{this.conn&&(this.disconnect(),r=this.connectClock)}),Xe.addEventListener("pageshow",n=>{r===this.connectClock&&(r=null,this.connect())}),Xe.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=n=>e.rejoinAfterMs?e.rejoinAfterMs(n):[1e3,2e3,5e3][n-1]||1e4,this.reconnectAfterMs=n=>e.reconnectAfterMs?e.reconnectAfterMs(n):[10,50,100,150,200,250,500,1e3,2e3][n-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(n,i,a)=>{console.log(`${n}: ${i}`,a)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=et(e.params||{}),this.endPoint=`${s}/${Ts.websocket}`,this.vsn=e.vsn||ki,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Qr(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken&&et(e.authToken)}getLongPollTransport(){return ze}replaceTransport(s){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=s}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let s=Yt.appendParams(Yt.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return s.charAt(0)!=="/"?s:s.charAt(1)==="/"?`${this.protocol()}:${s}`:`${this.protocol()}://${location.host}${s}`}disconnect(s,e,t){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,s&&s()},e,t)}connect(s){s&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=et(s)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==ze?this.connectWithFallback(ze,this.longPollFallbackMs):this.transportConnect())}log(s,e,t){this.logger&&this.logger(s,e,t)}hasLogger(){return this.logger!==null}onOpen(s){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,s]),e}onClose(s){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,s]),e}onError(s){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,s]),e}onMessage(s){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,s]),e}onHeartbeat(s){this.heartbeatCallback=s}ping(s){if(!this.isConnected())return!1;let e=this.makeRef(),t=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let r=this.onMessage(n=>{n.ref===e&&(this.off([r]),s(Date.now()-t))});return!0}transportName(s){switch(s){case ze:return"LongPoll";default:return s.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let s;this.authToken&&(s=["phoenix",`${$s}${btoa(this.authToken()).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),s),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(s){return this.sessionStore&&this.sessionStore.getItem(s)}storeSession(s,e){this.sessionStore&&this.sessionStore.setItem(s,e)}connectWithFallback(s,e=2500){clearTimeout(this.fallbackTimer);let t=!1,r=!0,n,i,a=this.transportName(s),o=l=>{this.log("transport",`falling back to ${a}...`,l),this.off([n,i]),r=!1,this.replaceTransport(s),this.transportConnect()};if(this.getSession(`phx:fallback:${a}`))return o("memorized");this.fallbackTimer=setTimeout(o,e),i=this.onError(l=>{this.log("transport","error",l),r&&!t&&(clearTimeout(this.fallbackTimer),o(l))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(t=!0,!r){let l=this.transportName(s);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${l}`,"true"),this.log("transport",`established ${l} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(o,e),this.ping(l=>{this.log("transport","connected to primary after",l),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(s){this.log("error","error in heartbeat callback",s)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Ai,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(s,e,t){if(!this.conn)return s&&s();const r=this.conn;this.waitForBufferDone(r,()=>{e?r.close(e,t||""):r.close(),this.waitForSocketClosed(r,()=>{this.conn===r&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),s&&s()})})}waitForBufferDone(s,e,t=1){if(t===5||!s.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(s,e,t+1)},150*t)}waitForSocketClosed(s,e,t=1){if(t===5||s.readyState===se.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(s,e,t+1)},150*t)}onConnClose(s){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",s),this.triggerChanError(s),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",s)}onConnError(s){this.hasLogger()&&this.log("transport","error",s);let e=this.transport,t=this.establishedConnections;this.triggerStateCallbacks("error",s,e,t),(e===this.transport||t>0)&&this.triggerChanError(s)}triggerChanError(s){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(le.error,s)})}connectionState(){switch(this.conn&&this.conn.readyState){case se.connecting:return"connecting";case se.open:return"open";case se.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(s){this.off(s.stateChangeRefs),this.channels=this.channels.filter(e=>e!==s)}off(s){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([t])=>s.indexOf(t)===-1)}channel(s,e={}){let t=new $i(s,e,this);return this.channels.push(t),t}push(s){if(this.hasLogger()){let{topic:e,event:t,payload:r,ref:n,join_ref:i}=s;this.log("push",`${e} ${t} (${i}, ${n})`,r)}this.isConnected()?this.encode(s,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(s,e=>this.conn.send(e)))}makeRef(){let s=this.ref+1;return s===this.ref?this.ref=0:this.ref=s,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(s){this.log("error","error in heartbeat callback",s)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(s){this.log("error","error in heartbeat callback",s)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(s=>s()),this.sendBuffer=[])}onConnMessage(s){this.decode(s.data,e=>{let{topic:t,event:r,payload:n,ref:i,join_ref:a}=e;if(i&&i===this.pendingHeartbeatRef){const o=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(n.status==="ok"?"ok":"error",o)}catch(l){this.log("error","error in heartbeat callback",l)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${n.status||""} ${t} ${r} ${i&&"("+i+")"||""}`.trim(),n);for(let o=0;o<this.channels.length;o++){const l=this.channels[o];l.isMember(t,r,n,a)&&l.trigger(r,n,i,a)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(s,...e){try{this.stateChangeCallbacks[s].forEach(([t,r])=>{try{r(...e)}catch(n){this.log("error",`error in ${s} callback`,n)}})}catch(t){this.log("error",`error triggering ${s} callbacks`,t)}}leaveOpenTopic(s){let e=this.channels.find(t=>t.topic===s&&(t.isJoined()||t.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${s}"`),e.leave())}};class vt{constructor(e,t){const r=Ii(t);this.presence=new Ci(e.getChannel(),r),this.presence.onJoin((n,i,a)=>{const o=vt.onJoinPayload(n,i,a);e.getChannel().trigger("presence",o)}),this.presence.onLeave((n,i,a)=>{const o=vt.onLeavePayload(n,i,a);e.getChannel().trigger("presence",o)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return vt.transformState(this.presence.state)}static transformState(e){return e=Pi(e),Object.getOwnPropertyNames(e).reduce((t,r)=>{const n=e[r];return t[r]=zt(n),t},{})}static onJoinPayload(e,t,r){const n=ar(t),i=zt(r);return{event:"join",key:e,currentPresences:n,newPresences:i}}static onLeavePayload(e,t,r){const n=ar(t),i=zt(r);return{event:"leave",key:e,currentPresences:n,leftPresences:i}}}function zt(s){return s.metas.map(e=>{const t=Object.getOwnPropertyDescriptors(e),r=Object.defineProperties({},t);return r.presence_ref=r.phx_ref,delete r.phx_ref,delete r.phx_ref_prev,r})}function Pi(s){return JSON.parse(JSON.stringify(s))}function Ii(s){return(s==null?void 0:s.events)&&{events:s.events}}function ar(s){return s!=null&&s.metas?zt(s):[]}var or;(function(s){s.SYNC="sync",s.JOIN="join",s.LEAVE="leave"})(or||(or={}));class Di{get state(){return this.presenceAdapter.state}constructor(e,t){this.channel=e,this.presenceAdapter=new vt(this.channel.channelAdapter,t)}}function ji(s){if(s instanceof Error)return s;if(typeof s=="string")return new Error(s);if(s&&typeof s=="object"){const e=s;if(typeof e.code=="number"){const t=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${t}`,{cause:s})}return new Error("channel error: transport failure",{cause:s})}return new Error("channel error: connection lost")}class Ni{constructor(e,t,r){const n=Li(r);this.channel=e.getSocket().channel(t,n),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,t){return this.channel.on(e,t)}off(e,t){this.channel.off(e,t)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,t,r){let n;try{n=this.channel.push(e,t,r)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>fi){const i=this.channel.pushBuffer.shift();i.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${i.event}`,i.payload())}return n}updateJoinPayload(e){const t=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},t),e)}canPush(){return this.socket.isConnected()&&this.state===_e.joined}isJoined(){return this.state===_e.joined}isJoining(){return this.state===_e.joining}isClosed(){return this.state===_e.closed}isLeaving(){return this.state===_e.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function Li(s){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},s.config)}}const Ui=/[,()"\\]/,Mi=s=>Ui.test(s)||s!==s.trim(),Fi=s=>`"${s.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`,lr=s=>{const e=s===null?"null":String(s);return Mi(e)?Fi(e):e},Bi=s=>s===null?"null":String(s),Hi=(s,e)=>{if(s==="in"){const t=Array.isArray(e)?e:[e];if(t.length===0)throw new Error("Realtime `in` filter requires at least one value.");return`in.(${Array.from(new Set(t)).map(n=>lr(n)).join(",")})`}return s==="is"?`is.${Bi(e)}`:`${s}.${lr(e)}`};class qi{constructor(){this.filters=[]}add(e,t,r,n=!1){const i=n?"not.":"";return this.filters.push(`${e}=${i}${Hi(t,r)}`),this}eq(e,t){return this.add(e,"eq",t)}neq(e,t){return this.add(e,"neq",t)}gt(e,t){return this.add(e,"gt",t)}gte(e,t){return this.add(e,"gte",t)}lt(e,t){return this.add(e,"lt",t)}lte(e,t){return this.add(e,"lte",t)}in(e,t){return this.add(e,"in",t)}like(e,t){return this.add(e,"like",t)}ilike(e,t){return this.add(e,"ilike",t)}match(e,t){return this.add(e,"match",t)}imatch(e,t){return this.add(e,"imatch",t)}is(e,t){return this.add(e,"is",t)}isDistinct(e,t){return this.add(e,"isdistinct",t)}not(e,t,r){return this.add(e,t,r,!0)}build(){return this.filters.join(",")}toString(){return this.build()}}var cr;(function(s){s.ALL="*",s.INSERT="INSERT",s.UPDATE="UPDATE",s.DELETE="DELETE"})(cr||(cr={}));var Pe;(function(s){s.BROADCAST="broadcast",s.PRESENCE="presence",s.POSTGRES_CHANGES="postgres_changes",s.SYSTEM="system"})(Pe||(Pe={}));var ce;(function(s){s.SUBSCRIBED="SUBSCRIBED",s.TIMED_OUT="TIMED_OUT",s.CLOSED="CLOSED",s.CHANNEL_ERROR="CHANNEL_ERROR"})(ce||(ce={}));class ue{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,t={config:{}},r){var n,i;if(this.topic=e,this.params=t,this.socket=r,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config),this.channelAdapter=new Ni(this.socket.socketAdapter,e,this.params),this.presence=new Di(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=Xr(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((i=(n=this.params.config)===null||n===void 0?void 0:n.broadcast)===null||i===void 0)&&i.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,t=this.timeout){var r,n,i;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:a,presence:o,private:l}}=this.params,c=(n=(r=this.bindings.postgres_changes)===null||r===void 0?void 0:r.map(p=>p.filter))!==null&&n!==void 0?n:[],h=!!this.bindings[Pe.PRESENCE]&&this.bindings[Pe.PRESENCE].length>0||((i=this.params.config.presence)===null||i===void 0?void 0:i.enabled)===!0,u={},d={broadcast:a,presence:Object.assign(Object.assign({},o),{enabled:h}),postgres_changes:c,private:l};this.socket.accessTokenValue&&(u.access_token=this.socket.accessTokenValue),this._onError(p=>{e==null||e(ce.CHANNEL_ERROR,ji(p))}),this._onClose(()=>e==null?void 0:e(ce.CLOSED)),this.updateJoinPayload(Object.assign({config:d},u)),this._updateFilterMessage(),this.channelAdapter.subscribe(t).receive("ok",async({postgres_changes:p})=>{if(this.socket._isManualToken()||this.socket.setAuth(),p===void 0){e==null||e(ce.SUBSCRIBED);return}this._updatePostgresBindings(p,e)}).receive("error",p=>{this.state=_e.errored;const g=Object.values(p).join(", ")||"error";e==null||e(ce.CHANNEL_ERROR,new Error(g,{cause:p}))}).receive("timeout",()=>{e==null||e(ce.TIMED_OUT)})}return this}_updatePostgresBindings(e,t){var r;const n=this.bindings.postgres_changes,i=(r=n==null?void 0:n.length)!==null&&r!==void 0?r:0,a=[];for(let o=0;o<i;o++){const l=n[o],{filter:{event:c,schema:h,table:u,filter:d}}=l,p=e&&e[o];if(p&&p.event===c&&ue.isFilterValueEqual(p.schema,h)&&ue.isFilterValueEqual(p.table,u)&&ue.isFilterValueEqual(p.filter,d))a.push(Object.assign(Object.assign({},l),{id:p.id}));else{this.unsubscribe(),this.state=_e.errored,t==null||t(ce.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=a,this.state!=_e.errored&&t&&t(ce.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:"presence",event:"track",payload:e},t)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,t,r){const n=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),i=e===Pe.PRESENCE||e===Pe.POSTGRES_CHANGES;if(n&&i)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,t,r)}async httpSend(e,t,r={}){var n;if(t==null)return Promise.reject(new Error("Payload is required for httpSend()"));const i=t instanceof ArrayBuffer||ArrayBuffer.isView(t),a={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":i?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(a.Authorization=`Bearer ${this.socket.accessTokenValue}`);const o=new URL(this.broadcastEndpointURL);o.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&o.searchParams.set("private","true");const l={method:"POST",headers:a,body:i?t:JSON.stringify(t)},c=await this._fetchWithTimeout(o.toString(),l,(n=r.timeout)!==null&&n!==void 0?n:this.timeout);if(c.status===202)return{success:!0};if(c.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let h=c.statusText;try{const u=await c.json();h=u.error||u.message||h}catch{}return Promise.reject(new Error(h))}async send(e,t={}){var r,n;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:i,payload:a}=e,o={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(o.Authorization=`Bearer ${this.socket.accessTokenValue}`);const l={method:"POST",headers:o,body:JSON.stringify({messages:[{topic:this.subTopic,event:i,payload:a,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(r=t.timeout)!==null&&r!==void 0?r:this.timeout);return await((n=c.body)===null||n===void 0?void 0:n.cancel()),c.ok?"ok":"error"}catch(c){return c instanceof Error&&c.name==="AbortError"?"timed out":"error"}}else return new Promise(i=>{var a,o,l;const c=this.channelAdapter.push(e.type,e,t.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(o=(a=this.params)===null||a===void 0?void 0:a.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&i("ok"),c.receive("ok",()=>i("ok")),c.receive("error",()=>i("error")),c.receive("timeout",()=>i("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(t=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>t("ok")).receive("timeout",()=>t("timed out")).receive("error",()=>t("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,t,r){const n=new AbortController,i=setTimeout(()=>n.abort(),r),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:n.signal}));return clearTimeout(i),a}_on(e,t,r){var n;const i=e.toLocaleLowerCase(),a=t==null?void 0:t.filter;if((a instanceof qi||typeof a=="object"&&a!==null&&typeof a.build=="function")&&(t=Object.assign(Object.assign({},t),{filter:a.build()})),i===Pe.POSTGRES_CHANGES&&((n=this.bindings[i])===null||n===void 0?void 0:n.find(h=>ue.isSamePostgresFilter(h.filter,t))))return this.socket.log("error",`duplicate \`postgres_changes\` binding for ${this.topic} ignored`,t),this;const o=this.channelAdapter.on(e,r),l={type:i,filter:t,callback:r,ref:o};return this.bindings[i]?this.bindings[i].push(l):this.bindings[i]=[l],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,t,r)=>{var n,i,a,o,l,c,h;const u=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(u,r))return!1;const d=(n=this.bindings[u])===null||n===void 0?void 0:n.find(p=>p.ref===e.ref);if(!d)return!0;if(["broadcast","presence","postgres_changes"].includes(u))if("id"in d){const p=d.id,g=(i=d.filter)===null||i===void 0?void 0:i.event;return p&&((a=t.ids)===null||a===void 0?void 0:a.includes(p))&&(g==="*"||(g==null?void 0:g.toLocaleLowerCase())===((o=t.data)===null||o===void 0?void 0:o.type.toLocaleLowerCase()))}else{const p=(c=(l=d==null?void 0:d.filter)===null||l===void 0?void 0:l.event)===null||c===void 0?void 0:c.toLocaleLowerCase();return p==="*"||p===((h=t==null?void 0:t.event)===null||h===void 0?void 0:h.toLocaleLowerCase())}else return d.type.toLocaleLowerCase()===u})}_notThisChannelEvent(e,t){const{close:r,error:n,leave:i,join:a}=Gr;return t&&[r,n,i,a].includes(e)&&t!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,t,r)=>{if(typeof t=="object"&&"ids"in t){const n=t.data,{schema:i,table:a,commit_timestamp:o,type:l,errors:c}=n;return Object.assign(Object.assign({},{schema:i,table:a,commit_timestamp:o,eventType:l,new:{},old:{},errors:c}),this._getPayloadRecords(n))}return t})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const t in e.bindings)for(const r of e.bindings[t])this._on(r.type,r.filter,r.callback)}static isFilterValueEqual(e,t){return(e??void 0)===(t??void 0)}static isSamePostgresFilter(e,t){var r,n,i,a;const o=(n=(r=e==null?void 0:e.select)===null||r===void 0?void 0:r.join())!==null&&n!==void 0?n:void 0,l=(a=(i=t==null?void 0:t.select)===null||i===void 0?void 0:i.join())!==null&&a!==void 0?a:void 0;return(e==null?void 0:e.event)===(t==null?void 0:t.event)&&ue.isFilterValueEqual(e==null?void 0:e.schema,t==null?void 0:t.schema)&&ue.isFilterValueEqual(e==null?void 0:e.table,t==null?void 0:t.table)&&ue.isFilterValueEqual(e==null?void 0:e.filter,t==null?void 0:t.filter)&&o===l}_getPayloadRecords(e){const t={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(t.new=ir(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(t.old=ir(e.columns,e.old_record)),t}}class zi{constructor(e,t){this.socket=new Ri(e,t)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,t,r,n=1e4){return new Promise(i=>{setTimeout(()=>i("timeout"),n),this.socket.disconnect(()=>{e(),i("ok")},t,r)})}push(e){this.socket.push(e)}log(e,t,r){this.socket.log(e,t,r)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==As.connecting}isDisconnecting(){return this.socket.connectionState()==As.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const ur={HEARTBEAT_INTERVAL:25e3},Wi=[1e3,2e3,5e3,1e4],Vi=1e4;function Ki(){const s=new Map;return{get length(){return s.size},clear(){s.clear()},getItem(e){return s.has(e)?s.get(e):null},key(e){var t;return(t=Array.from(s.keys())[e])!==null&&t!==void 0?t:null},removeItem(e){s.delete(e)},setItem(e,t){s.set(e,String(t))}}}function Ji(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return Ki()}const Gi=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class Yi{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,t){var r;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new gi,this._manuallySetToken=!1,this._authPromise=null,this._authGeneration=0,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=i=>i?(...a)=>i(...a):(...a)=>fetch(...a),!(!((r=t==null?void 0:t.params)===null||r===void 0)&&r.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=t.params.apikey;const n=this._initializeOptions(t);this.socketAdapter=new zi(e,n),this.httpEndpoint=Xr(e),this.fetch=this._resolveFetch(t==null?void 0:t.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const t=e.message;throw new Error(`WebSocket not available: ${t}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,t){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,t)}getChannels(){return this.channels}async removeChannel(e){const t=await e.unsubscribe();return t==="ok"&&e.teardown(),t}async removeAllChannels(){const e=this.channels.map(async r=>{const n=await r.unsubscribe();return r.teardown(),n}),t=await Promise.all(e);return await this.disconnect(),t}log(e,t,r){this.socketAdapter.log(e,t,r)}connectionState(){return this.socketAdapter.connectionState()||As.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,t={config:{}}){const r=`realtime:${e}`,n=this.getChannels().find(i=>i.topic===r);if(n)return n;{const i=new ue(`realtime:${e}`,t,this);return this._cancelPendingDisconnect(),this.channels.push(i),i}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){const t=++this._authGeneration,r=this._performAuth(e,t);t===this._authGeneration&&(this._authPromise=r);try{await r}finally{this._authPromise===r&&(this._authPromise=null)}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e,t){let r,n=!1;if(e)r=e,n=!0;else if(this.accessToken)try{r=await this.accessToken()}catch(i){this.log("error","Error fetching access token from callback",i),r=this.accessTokenValue}else r=this.accessTokenValue;t===this._authGeneration&&(this.accessToken?this._manuallySetToken=!1:n&&(this._manuallySetToken=!0),this.accessTokenValue!=r&&(this.accessTokenValue=r,this.channels.forEach(i=>{const a={access_token:r,version:ui};i.updateJoinPayload(a),i.joinedOnce&&i.channelAdapter.isJoined()&&i.channelAdapter.push(Gr.access_token,{access_token:r})})))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(t=>{this.log("error",`Error setting auth in ${e}`,t)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(t=>{this.log("error","error waiting for auth on connect",t)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(t,r)=>{t!=="disconnected"&&(t=="sent"&&this._setAuthSafely(),e&&e(t,r))}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=t=>{this.log("worker","worker error",t.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=t=>{t.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let t;if(e)t=e;else{const r=new Blob([Gi],{type:"application/javascript"});t=URL.createObjectURL(r)}return t}_initializeOptions(e){var t,r,n,i,a,o,l,c,h,u,d,p;this.worker=(t=e==null?void 0:e.worker)!==null&&t!==void 0?t:!1,this.accessToken=(r=e==null?void 0:e.accessToken)!==null&&r!==void 0?r:null;const g={};g.timeout=(n=e==null?void 0:e.timeout)!==null&&n!==void 0?n:pi,g.heartbeatIntervalMs=(i=e==null?void 0:e.heartbeatIntervalMs)!==null&&i!==void 0?i:ur.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(a=e==null?void 0:e.disconnectOnEmptyChannelsAfterMs)!==null&&a!==void 0?a:2*((o=e==null?void 0:e.heartbeatIntervalMs)!==null&&o!==void 0?o:ur.HEARTBEAT_INTERVAL),g.transport=(l=e==null?void 0:e.transport)!==null&&l!==void 0?l:li.getWebSocketConstructor(),g.params=e==null?void 0:e.params,g.logger=e==null?void 0:e.logger,g.heartbeatCallback=this._wrapHeartbeatCallback(e==null?void 0:e.heartbeatCallback),g.sessionStorage=(c=e==null?void 0:e.sessionStorage)!==null&&c!==void 0?c:Ji(),g.reconnectAfterMs=(h=e==null?void 0:e.reconnectAfterMs)!==null&&h!==void 0?h:(b=>Wi[b-1]||Vi);let f,y;const v=(u=e==null?void 0:e.vsn)!==null&&u!==void 0?u:di;switch(v){case hi:f=(b,w)=>w(JSON.stringify(b)),y=(b,w)=>w(JSON.parse(b));break;case Jr:f=this.serializer.encode.bind(this.serializer),y=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${g.vsn}`)}if(g.vsn=v,g.encode=(d=e==null?void 0:e.encode)!==null&&d!==void 0?d:f,g.decode=(p=e==null?void 0:e.decode)!==null&&p!==void 0?p:y,g.beforeReconnect=this._reconnectAuth.bind(this),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,g.params=Object.assign(Object.assign({},g.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl,g.autoSendHeartbeat=!this.worker}return g}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var kt=class extends Error{constructor(s,e){var t;super(s),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&((t=e.icebergType)==null?void 0:t.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function Xi(s,e,t){const r=new URL(e,s);if(t)for(const[n,i]of Object.entries(t))i!==void 0&&r.searchParams.set(n,i);return r.toString()}async function Qi(s){return!s||s.type==="none"?{}:s.type==="bearer"?{Authorization:`Bearer ${s.token}`}:s.type==="header"?{[s.name]:s.value}:s.type==="custom"?await s.getHeaders():{}}function Zi(s){const e=s.fetchImpl??globalThis.fetch;return{async request({method:t,path:r,query:n,body:i,headers:a}){const o=Xi(s.baseUrl,r,n),l=await Qi(s.auth),c=await e(o,{method:t,headers:{...i?{"Content-Type":"application/json"}:{},...l,...a},body:i?JSON.stringify(i):void 0}),h=await c.text(),u=(c.headers.get("content-type")||"").includes("application/json"),d=u&&h?JSON.parse(h):h;if(!c.ok){const p=u?d:void 0,g=p==null?void 0:p.error;throw new kt((g==null?void 0:g.message)??`Request failed with status ${c.status}`,{status:c.status,icebergType:g==null?void 0:g.type,icebergCode:g==null?void 0:g.code,details:p})}return{status:c.status,headers:c.headers,data:d}}}}function Lt(s){return s.join("")}var ea=class{constructor(s,e=""){this.client=s,this.prefix=e}async listNamespaces(s){const e=s?{parent:Lt(s.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(r=>({namespace:r}))}async createNamespace(s,e){const t={namespace:s.namespace,properties:e==null?void 0:e.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:t})).data}async dropNamespace(s){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Lt(s.namespace)}`})}async loadNamespaceMetadata(s){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Lt(s.namespace)}`})).data.properties}}async namespaceExists(s){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Lt(s.namespace)}`}),!0}catch(e){if(e instanceof kt&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(s,e){try{return await this.createNamespace(s,e)}catch(t){if(t instanceof kt&&t.status===409)return;throw t}}};function We(s){return s.join("")}var ta=class{constructor(s,e="",t){this.client=s,this.prefix=e,this.accessDelegation=t}async listTables(s){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${We(s.namespace)}/tables`})).data.identifiers}async createTable(s,e){const t={};return this.accessDelegation&&(t["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${We(s.namespace)}/tables`,body:e,headers:t})).data.metadata}async updateTable(s,e){const t=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${We(s.namespace)}/tables/${s.name}`,body:e});return{"metadata-location":t.data["metadata-location"],metadata:t.data.metadata}}async dropTable(s,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${We(s.namespace)}/tables/${s.name}`,query:{purgeRequested:String((e==null?void 0:e.purge)??!1)}})}async loadTable(s){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${We(s.namespace)}/tables/${s.name}`,headers:e})).data.metadata}async tableExists(s){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${We(s.namespace)}/tables/${s.name}`,headers:e}),!0}catch(t){if(t instanceof kt&&t.status===404)return!1;throw t}}async createTableIfNotExists(s,e){try{return await this.createTable(s,e)}catch(t){if(t instanceof kt&&t.status===409)return await this.loadTable({namespace:s.namespace,name:e.name});throw t}}},sa=class{constructor(s){var r;let e="v1";s.catalogName&&(e+=`/${s.catalogName}`);const t=s.baseUrl.endsWith("/")?s.baseUrl:`${s.baseUrl}/`;this.client=Zi({baseUrl:t,auth:s.auth,fetchImpl:s.fetch}),this.accessDelegation=(r=s.accessDelegation)==null?void 0:r.join(","),this.namespaceOps=new ea(this.client,e),this.tableOps=new ta(this.client,e,this.accessDelegation)}async listNamespaces(s){return this.namespaceOps.listNamespaces(s)}async createNamespace(s,e){return this.namespaceOps.createNamespace(s,e)}async dropNamespace(s){await this.namespaceOps.dropNamespace(s)}async loadNamespaceMetadata(s){return this.namespaceOps.loadNamespaceMetadata(s)}async listTables(s){return this.tableOps.listTables(s)}async createTable(s,e){return this.tableOps.createTable(s,e)}async updateTable(s,e){return this.tableOps.updateTable(s,e)}async dropTable(s,e){await this.tableOps.dropTable(s,e)}async loadTable(s){return this.tableOps.loadTable(s)}async namespaceExists(s){return this.namespaceOps.namespaceExists(s)}async tableExists(s){return this.tableOps.tableExists(s)}async createNamespaceIfNotExists(s,e){return this.namespaceOps.createNamespaceIfNotExists(s,e)}async createTableIfNotExists(s,e){return this.tableOps.createTableIfNotExists(s,e)}};function Et(s){"@babel/helpers - typeof";return Et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Et(s)}function ra(s,e){if(Et(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var r=t.call(s,e);if(Et(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function na(s){var e=ra(s,"string");return Et(e)=="symbol"?e:e+""}function ia(s,e,t){return(e=na(e))in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function hr(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(s,n).enumerable})),t.push.apply(t,r)}return t}function E(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?hr(Object(t),!0).forEach(function(r){ia(s,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):hr(Object(t)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(t,r))})}return s}var as=class extends Error{constructor(s,e="storage",t,r){super(s),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=t,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function os(s){return typeof s=="object"&&s!==null&&"__isStorageError"in s}var Os=class extends as{constructor(s,e,t,r="storage",n){super(s,r,e,t),this.name=r==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=t,this.code=n}toJSON(){return E(E({},super.toJSON()),{},{code:this.code})}},Zr=class extends as{constructor(s,e,t="storage"){super(s,t),this.name=t==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function Xt(s,e,t){const r=E({},s),n=e.toLowerCase();for(const i of Object.keys(r))i.toLowerCase()===n&&delete r[i];return r[n]=t,r}function aa(s){const e={};for(const[t,r]of Object.entries(s))e[t.toLowerCase()]=r;return e}const oa=s=>s?(...e)=>s(...e):(...e)=>fetch(...e),la=s=>{if(typeof s!="object"||s===null)return!1;const e=Object.getPrototypeOf(s);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in s)&&!(Symbol.iterator in s)},Cs=s=>{if(Array.isArray(s))return s.map(t=>Cs(t));if(typeof s=="function"||s!==Object(s))return s;const e={};return Object.entries(s).forEach(([t,r])=>{const n=t.replace(/([-_][a-z])/gi,i=>i.toUpperCase().replace(/[-_]/g,""));e[n]=Cs(r)}),e},ca=s=>!s||typeof s!="string"||s.length===0||s.length>100||s.trim()!==s||s.includes("/")||s.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(s),en=s=>s.split("/").map(encodeURIComponent).join("/"),dr=s=>{if(typeof s=="object"&&s!==null){const e=s;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const t=e.error;if(typeof t.message=="string")return t.message}}return JSON.stringify(s)},ua=async(s,e,t,r)=>{if(s!==null&&typeof s=="object"&&"json"in s&&typeof s.json=="function"){const n=s;let i=parseInt(String(n.status),10);Number.isFinite(i)||(i=500),n.json().then(a=>{const o=(a==null?void 0:a.statusCode)||(a==null?void 0:a.code)||i+"";e(new Os(dr(a),i,o,r,a==null?void 0:a.code))}).catch(()=>{const a=i+"";e(new Os(n.statusText||`HTTP ${i} error`,i,a,r))})}else e(new Zr(dr(s),s,r))},ha=(s,e,t,r)=>{const n={method:s,headers:(e==null?void 0:e.headers)||{}};if(s==="GET"||s==="HEAD"||!r)return E(E({},n),t);if(la(r)){var i;const a=(e==null?void 0:e.headers)||{};let o;for(const[l,c]of Object.entries(a))l.toLowerCase()==="content-type"&&(o=c);n.headers=Xt(a,"Content-Type",(i=o)!==null&&i!==void 0?i:"application/json"),n.body=JSON.stringify(r)}else n.body=r;return e!=null&&e.duplex&&(n.duplex=e.duplex),E(E({},n),t)};async function ut(s,e,t,r,n,i,a){return new Promise((o,l)=>{s(t,ha(e,r,n,i)).then(c=>{if(!c.ok)throw c;if(r!=null&&r.noResolveJson)return c;if(a==="vectors"){const h=c.headers.get("content-type");if(c.headers.get("content-length")==="0"||c.status===204)return{};if(!h||!h.includes("application/json"))return{}}return c.json()}).then(c=>o(c)).catch(c=>ua(c,l,r,a))})}function tn(s="storage"){return{get:async(e,t,r,n)=>ut(e,"GET",t,r,n,void 0,s),post:async(e,t,r,n,i)=>ut(e,"POST",t,n,i,r,s),put:async(e,t,r,n,i)=>ut(e,"PUT",t,n,i,r,s),head:async(e,t,r,n)=>ut(e,"HEAD",t,E(E({},r),{},{noResolveJson:!0}),n,void 0,s),remove:async(e,t,r,n,i)=>ut(e,"DELETE",t,n,i,r,s)}}const da=tn("storage"),{get:At,post:J,put:Rs,head:pa,remove:xt}=da,q=tn("vectors");var at=class{constructor(s,e={},t,r="storage"){this.shouldThrowOnError=!1,this.url=s,this.headers=aa(e),this.fetch=oa(t),this.namespace=r}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(s,e){return this.headers=Xt(this.headers,s,e),this}async handleOperation(s){var e=this;try{return{data:await s(),error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(os(t))return{data:null,error:t};throw t}}};let sn;sn=Symbol.toStringTag;var fa=class{constructor(s,e){this.downloadFn=s,this.shouldThrowOnError=e,this[sn]="StreamDownloadBuilder",this.promise=null}then(s,e){return this.getPromise().then(s,e)}catch(s){return this.getPromise().catch(s)}finally(s){return this.getPromise().finally(s)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var s=this;try{return{data:(await s.downloadFn()).body,error:null}}catch(e){if(s.shouldThrowOnError)throw e;if(os(e))return{data:null,error:e};throw e}}};let rn;rn=Symbol.toStringTag;var ga=class{constructor(s,e){this.downloadFn=s,this.shouldThrowOnError=e,this[rn]="BlobDownloadBuilder",this.promise=null}asStream(){return new fa(this.downloadFn,this.shouldThrowOnError)}then(s,e){return this.getPromise().then(s,e)}catch(s){return this.getPromise().catch(s)}finally(s){return this.getPromise().finally(s)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var s=this;try{return{data:await(await s.downloadFn()).blob(),error:null}}catch(e){if(s.shouldThrowOnError)throw e;if(os(e))return{data:null,error:e};throw e}}};const ms={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},pr={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var ma=class extends at{constructor(s,e={},t,r){super(s,e,r,"storage"),this.bucketId=t}async uploadOrUpdate(s,e,t,r){var n=this;return n.handleOperation(async()=>{let i;const a=E(E({},pr),r);let o=E(E({},n.headers),s==="POST"&&{"x-upsert":String(a.upsert)});const l=a.metadata;if(typeof Blob<"u"&&t instanceof Blob?(i=new FormData,i.append("cacheControl",a.cacheControl),l&&i.append("metadata",n.encodeMetadata(l)),i.append("",t)):typeof FormData<"u"&&t instanceof FormData?(i=t,i.has("cacheControl")||i.append("cacheControl",a.cacheControl),l&&!i.has("metadata")&&i.append("metadata",n.encodeMetadata(l))):(i=t,o["cache-control"]=`max-age=${a.cacheControl}`,o["content-type"]=a.contentType,l&&(o["x-metadata"]=n.toBase64(n.encodeMetadata(l))),(typeof ReadableStream<"u"&&i instanceof ReadableStream||i&&typeof i=="object"&&"pipe"in i&&typeof i.pipe=="function")&&!a.duplex&&(a.duplex="half")),r!=null&&r.headers)for(const[d,p]of Object.entries(r.headers))o=Xt(o,d,p);const c=n._removeEmptyFolders(e),h=n._getFinalPath(c),u=await(s=="PUT"?Rs:J)(n.fetch,`${n.url}/object/${h}`,i,E({headers:o},a!=null&&a.duplex?{duplex:a.duplex}:{}));return{path:c,id:u.Id,fullPath:u.Key}})}async upload(s,e,t){return this.uploadOrUpdate("POST",s,e,t)}async uploadToSignedUrl(s,e,t,r){var n=this;const i=n._removeEmptyFolders(s),a=n._getFinalPath(i),o=new URL(n.url+`/object/upload/sign/${a}`);return o.searchParams.set("token",e),n.handleOperation(async()=>{let l;const c=E(E({},pr),r);let h=E(E({},n.headers),{"x-upsert":String(c.upsert)});const u=c.metadata;if(typeof Blob<"u"&&t instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),u&&l.append("metadata",n.encodeMetadata(u)),l.append("",t)):typeof FormData<"u"&&t instanceof FormData?(l=t,l.has("cacheControl")||l.append("cacheControl",c.cacheControl),u&&!l.has("metadata")&&l.append("metadata",n.encodeMetadata(u))):(l=t,h["cache-control"]=`max-age=${c.cacheControl}`,h["content-type"]=c.contentType,u&&(h["x-metadata"]=n.toBase64(n.encodeMetadata(u))),(typeof ReadableStream<"u"&&l instanceof ReadableStream||l&&typeof l=="object"&&"pipe"in l&&typeof l.pipe=="function")&&!c.duplex&&(c.duplex="half")),r!=null&&r.headers)for(const[d,p]of Object.entries(r.headers))h=Xt(h,d,p);return{path:i,fullPath:(await Rs(n.fetch,o.toString(),l,E({headers:h},c!=null&&c.duplex?{duplex:c.duplex}:{}))).Key}})}async createSignedUploadUrl(s,e){var t=this;return t.handleOperation(async()=>{let r=t._getFinalPath(s);const n=E({},t.headers);e!=null&&e.upsert&&(n["x-upsert"]="true");const i=await J(t.fetch,`${t.url}/object/upload/sign/${r}`,{},{headers:n}),a=new URL(t.url+i.url),o=a.searchParams.get("token");if(!o)throw new as("No token returned by API");return{signedUrl:a.toString(),path:s,token:o}})}async update(s,e,t){return this.uploadOrUpdate("PUT",s,e,t)}async move(s,e,t){var r=this;return r.handleOperation(async()=>await J(r.fetch,`${r.url}/object/move`,{bucketId:r.bucketId,sourceKey:s,destinationKey:e,destinationBucket:t==null?void 0:t.destinationBucket},{headers:r.headers}))}async copy(s,e,t){var r=this;return r.handleOperation(async()=>({path:(await J(r.fetch,`${r.url}/object/copy`,{bucketId:r.bucketId,sourceKey:s,destinationKey:e,destinationBucket:t==null?void 0:t.destinationBucket},{headers:r.headers})).Key}))}async createSignedUrl(s,e,t){var r=this;return r.handleOperation(async()=>{let n=r._getFinalPath(s);const i=typeof(t==null?void 0:t.transform)=="object"&&t.transform!==null&&Object.keys(t.transform).length>0;let a=await J(r.fetch,`${r.url}/object/sign/${n}`,E({expiresIn:e},i?{transform:t.transform}:{}),{headers:r.headers});const o=new URLSearchParams;t!=null&&t.download&&o.set("download",t.download===!0?"":t.download),(t==null?void 0:t.cacheNonce)!=null&&o.set("cacheNonce",String(t.cacheNonce));const l=o.toString();return{signedUrl:encodeURI(`${r.url}${a.signedURL}${l?`&${l}`:""}`)}})}async createSignedUrls(s,e,t){var r=this;return r.handleOperation(async()=>{const n=await J(r.fetch,`${r.url}/object/sign/${r.bucketId}`,{expiresIn:e,paths:s},{headers:r.headers}),i=new URLSearchParams;t!=null&&t.download&&i.set("download",t.download===!0?"":t.download),(t==null?void 0:t.cacheNonce)!=null&&i.set("cacheNonce",String(t.cacheNonce));const a=i.toString();return n.map(o=>E(E({},o),{},{signedUrl:o.signedURL?encodeURI(`${r.url}${o.signedURL}${a?`&${a}`:""}`):null}))})}download(s,e,t){const r=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",n=new URLSearchParams;e!=null&&e.transform&&this.applyTransformOptsToQuery(n,e.transform),(e==null?void 0:e.cacheNonce)!=null&&n.set("cacheNonce",String(e.cacheNonce));const i=n.toString(),a=this._getFinalPath(s),o=()=>At(this.fetch,`${this.url}/${r}/${a}${i?`?${i}`:""}`,{headers:this.headers,noResolveJson:!0},t);return new ga(o,this.shouldThrowOnError)}async info(s){var e=this;const t=e._getFinalPath(s);return e.handleOperation(async()=>Cs(await At(e.fetch,`${e.url}/object/info/${t}`,{headers:e.headers})))}async exists(s){var e=this;const t=e._getFinalPath(s);try{return await pa(e.fetch,`${e.url}/object/${t}`,{headers:e.headers}),{data:!0,error:null}}catch(n){if(e.shouldThrowOnError)throw n;if(os(n)){var r;const i=n instanceof Os?n.status:n instanceof Zr?(r=n.originalError)===null||r===void 0?void 0:r.status:void 0;if(i!==void 0&&[400,404].includes(i))return{data:!1,error:n}}throw n}}getPublicUrl(s,e){const t=this._getFinalPath(s),r=new URLSearchParams;e!=null&&e.download&&r.set("download",e.download===!0?"":e.download),e!=null&&e.transform&&this.applyTransformOptsToQuery(r,e.transform),(e==null?void 0:e.cacheNonce)!=null&&r.set("cacheNonce",String(e.cacheNonce));const n=r.toString(),i=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${i}/public/${t}`)+(n?`?${n}`:"")}}}async remove(s){var e=this;return e.handleOperation(async()=>await xt(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:s},{headers:e.headers}))}async purgeCache(s,e,t){var r=this;return r.handleOperation(async()=>{const n=en(r._getFinalPath(s)),i=new URLSearchParams;e!=null&&e.transformations&&i.set("transformations","true");const a=i.toString();return await xt(r.fetch,`${r.url}/cdn/${n}${a?`?${a}`:""}`,{},{headers:r.headers},t)})}async list(s,e,t){var r=this;return r.handleOperation(async()=>{const n=e!=null&&e.sortBy?E(E({},ms.sortBy),e.sortBy):ms.sortBy,i=E(E(E({},ms),e),{},{sortBy:n,prefix:s||""});return await J(r.fetch,`${r.url}/object/list/${r.bucketId}`,i,{headers:r.headers},t)})}async listV2(s,e){var t=this;return t.handleOperation(async()=>{const r=E({},s);return await J(t.fetch,`${t.url}/object/list-v2/${t.bucketId}`,r,{headers:t.headers},e)})}encodeMetadata(s){return JSON.stringify(s)}toBase64(s){return typeof Buffer<"u"?Buffer.from(s).toString("base64"):btoa(s)}_getFinalPath(s){return`${this.bucketId}/${s.replace(/^\/+/,"")}`}_removeEmptyFolders(s){return s.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(s,e){return e.width&&s.set("width",e.width.toString()),e.height&&s.set("height",e.height.toString()),e.resize&&s.set("resize",e.resize),e.format&&s.set("format",e.format),e.quality&&s.set("quality",e.quality.toString()),s}};const ya="2.112.3",Pt={"X-Client-Info":`storage-js/${ya}`};var va=class extends at{constructor(s,e={},t,r){const n=new URL(s);r!=null&&r.useNewHostname&&/supabase\.(co|in|red)$/.test(n.hostname)&&!n.hostname.includes("storage.supabase.")&&(n.hostname=n.hostname.replace("supabase.","storage.supabase."));const i=n.href.replace(/\/$/,""),a=E(E({},Pt),e);super(i,a,t,"storage")}async listBuckets(s){var e=this;return e.handleOperation(async()=>{const t=e.listBucketOptionsToQueryString(s);return await At(e.fetch,`${e.url}/bucket${t}`,{headers:e.headers})})}async getBucket(s){var e=this;return e.handleOperation(async()=>await At(e.fetch,`${e.url}/bucket/${s}`,{headers:e.headers}))}async createBucket(s,e={public:!1}){var t=this;return t.handleOperation(async()=>await J(t.fetch,`${t.url}/bucket`,{id:s,name:s,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:t.headers}))}async updateBucket(s,e){var t=this;return t.handleOperation(async()=>await Rs(t.fetch,`${t.url}/bucket/${s}`,{id:s,name:s,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:t.headers}))}async emptyBucket(s){var e=this;return e.handleOperation(async()=>await J(e.fetch,`${e.url}/bucket/${s}/empty`,{},{headers:e.headers}))}async deleteBucket(s){var e=this;return e.handleOperation(async()=>await xt(e.fetch,`${e.url}/bucket/${s}`,{},{headers:e.headers}))}async purgeBucketCache(s,e,t){var r=this;return r.handleOperation(async()=>{const n=new URLSearchParams;e!=null&&e.transformations&&n.set("transformations","true");const i=n.toString();return await xt(r.fetch,`${r.url}/cdn/${en(s)}${i?`?${i}`:""}`,{},{headers:r.headers},t)})}listBucketOptionsToQueryString(s){const e={};return s&&("limit"in s&&(e.limit=String(s.limit)),"offset"in s&&(e.offset=String(s.offset)),s.search&&(e.search=s.search),s.sortColumn&&(e.sortColumn=s.sortColumn),s.sortOrder&&(e.sortOrder=s.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},ba=class extends at{constructor(s,e={},t){const r=s.replace(/\/$/,""),n=E(E({},Pt),e);super(r,n,t,"storage")}async createBucket(s){var e=this;return e.handleOperation(async()=>await J(e.fetch,`${e.url}/bucket`,{name:s},{headers:e.headers}))}async listBuckets(s){var e=this;return e.handleOperation(async()=>{const t=new URLSearchParams;(s==null?void 0:s.limit)!==void 0&&t.set("limit",s.limit.toString()),(s==null?void 0:s.offset)!==void 0&&t.set("offset",s.offset.toString()),s!=null&&s.sortColumn&&t.set("sortColumn",s.sortColumn),s!=null&&s.sortOrder&&t.set("sortOrder",s.sortOrder),s!=null&&s.search&&t.set("search",s.search);const r=t.toString(),n=r?`${e.url}/bucket?${r}`:`${e.url}/bucket`;return await At(e.fetch,n,{headers:e.headers})})}async deleteBucket(s){var e=this;return e.handleOperation(async()=>await xt(e.fetch,`${e.url}/bucket/${s}`,{},{headers:e.headers}))}from(s){var e=this;if(!ca(s))throw new as("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const t=new sa({baseUrl:this.url,catalogName:s,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),r=this.shouldThrowOnError;return new Proxy(t,{get(n,i){const a=n[i];return typeof a!="function"?a:async(...o)=>{try{return{data:await a.apply(n,o),error:null}}catch(l){if(r)throw l;return{data:null,error:l}}}}})}},wa=class extends at{constructor(s,e={},t){const r=s.replace(/\/$/,""),n=E(E({},Pt),{},{"Content-Type":"application/json"},e);super(r,n,t,"vectors")}async createIndex(s){var e=this;return e.handleOperation(async()=>await q.post(e.fetch,`${e.url}/CreateIndex`,s,{headers:e.headers})||{})}async getIndex(s,e){var t=this;return t.handleOperation(async()=>await q.post(t.fetch,`${t.url}/GetIndex`,{vectorBucketName:s,indexName:e},{headers:t.headers}))}async listIndexes(s){var e=this;return e.handleOperation(async()=>await q.post(e.fetch,`${e.url}/ListIndexes`,s,{headers:e.headers}))}async deleteIndex(s,e){var t=this;return t.handleOperation(async()=>await q.post(t.fetch,`${t.url}/DeleteIndex`,{vectorBucketName:s,indexName:e},{headers:t.headers})||{})}},_a=class extends at{constructor(s,e={},t){const r=s.replace(/\/$/,""),n=E(E({},Pt),{},{"Content-Type":"application/json"},e);super(r,n,t,"vectors")}async putVectors(s){var e=this;if(s.vectors.length<1||s.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await q.post(e.fetch,`${e.url}/PutVectors`,s,{headers:e.headers})||{})}async getVectors(s){var e=this;return e.handleOperation(async()=>await q.post(e.fetch,`${e.url}/GetVectors`,s,{headers:e.headers}))}async listVectors(s){var e=this;if(s.segmentCount!==void 0){if(s.segmentCount<1||s.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(s.segmentIndex!==void 0&&(s.segmentIndex<0||s.segmentIndex>=s.segmentCount))throw new Error(`segmentIndex must be between 0 and ${s.segmentCount-1}`)}return e.handleOperation(async()=>await q.post(e.fetch,`${e.url}/ListVectors`,s,{headers:e.headers}))}async queryVectors(s){var e=this;return e.handleOperation(async()=>await q.post(e.fetch,`${e.url}/QueryVectors`,s,{headers:e.headers}))}async deleteVectors(s){var e=this;if(s.keys.length<1||s.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await q.post(e.fetch,`${e.url}/DeleteVectors`,s,{headers:e.headers})||{})}},Sa=class extends at{constructor(s,e={},t){const r=s.replace(/\/$/,""),n=E(E({},Pt),{},{"Content-Type":"application/json"},e);super(r,n,t,"vectors")}async createBucket(s){var e=this;return e.handleOperation(async()=>await q.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:s},{headers:e.headers})||{})}async getBucket(s){var e=this;return e.handleOperation(async()=>await q.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:s},{headers:e.headers}))}async listBuckets(s={}){var e=this;return e.handleOperation(async()=>await q.post(e.fetch,`${e.url}/ListVectorBuckets`,s,{headers:e.headers}))}async deleteBucket(s){var e=this;return e.handleOperation(async()=>await q.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:s},{headers:e.headers})||{})}},ka=class extends Sa{constructor(s,e={}){super(s,e.headers||{},e.fetch)}from(s){return new Ea(this.url,this.headers,s,this.fetch)}async createBucket(s){var e=()=>super.createBucket,t=this;return e().call(t,s)}async getBucket(s){var e=()=>super.getBucket,t=this;return e().call(t,s)}async listBuckets(s={}){var e=()=>super.listBuckets,t=this;return e().call(t,s)}async deleteBucket(s){var e=()=>super.deleteBucket,t=this;return e().call(t,s)}},Ea=class extends wa{constructor(s,e,t,r){super(s,e,r),this.vectorBucketName=t}async createIndex(s){var e=()=>super.createIndex,t=this;return e().call(t,E(E({},s),{},{vectorBucketName:t.vectorBucketName}))}async listIndexes(s={}){var e=()=>super.listIndexes,t=this;return e().call(t,E(E({},s),{},{vectorBucketName:t.vectorBucketName}))}async getIndex(s){var e=()=>super.getIndex,t=this;return e().call(t,t.vectorBucketName,s)}async deleteIndex(s){var e=()=>super.deleteIndex,t=this;return e().call(t,t.vectorBucketName,s)}index(s){return new Aa(this.url,this.headers,this.vectorBucketName,s,this.fetch)}},Aa=class extends _a{constructor(s,e,t,r,n){super(s,e,n),this.vectorBucketName=t,this.indexName=r}async putVectors(s){var e=()=>super.putVectors,t=this;return e().call(t,E(E({},s),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async getVectors(s){var e=()=>super.getVectors,t=this;return e().call(t,E(E({},s),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async listVectors(s={}){var e=()=>super.listVectors,t=this;return e().call(t,E(E({},s),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async queryVectors(s){var e=()=>super.queryVectors,t=this;return e().call(t,E(E({},s),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async deleteVectors(s){var e=()=>super.deleteVectors,t=this;return e().call(t,E(E({},s),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}},xa=class extends va{constructor(s,e={},t,r){super(s,e,t,r)}from(s){return new ma(this.url,this.headers,s,this.fetch)}get vectors(){return new ka(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new ba(this.url+"/iceberg",this.headers,this.fetch)}};const nn="2.112.3",he=30*1e3,dt=3,ys=dt*he,Ta=2*he,$a="http://localhost:9999",Oa="supabase.auth.token",Ca={"X-Client-Info":`gotrue-js/${nn}`},Ps="X-Supabase-Api-Version",an={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},Ra=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,De="sb_flow_id",Pa=5,Ia=600*1e3;class Tt extends Error{constructor(e,t,r){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=t,this.code=r}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function _(s){return typeof s=="object"&&s!==null&&"__isAuthError"in s}class Da extends Tt{constructor(e,t,r){super(e,t,r),this.name="AuthApiError",this.status=t,this.code=r}}function fr(s){return _(s)&&s.name==="AuthApiError"}class Y extends Tt{constructor(e,t){super(e),this.name="AuthUnknownError",this.originalError=t}}class ie extends Tt{constructor(e,t,r,n){super(e,r,n),this.name=t,this.status=r}}class N extends ie{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Ut(s){return _(s)&&s.name==="AuthSessionMissingError"}class Ve extends ie{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Mt extends ie{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Ft extends ie{constructor(e,t=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function ja(s){return _(s)&&s.name==="AuthImplicitGrantRedirectError"}class gr extends ie{constructor(e,t=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class Na extends ie{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class Wt extends ie{constructor(e,t){super(e,"AuthRetryableFetchError",t,void 0)}}function Bt(s){return _(s)&&s.name==="AuthRetryableFetchError"}class mr extends ie{constructor(e="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(e,"AuthRefreshDiscardedError",409,void 0)}}function La(s){return _(s)&&s.name==="AuthRefreshDiscardedError"}class yr extends ie{constructor(e,t,r){super(e,"AuthWeakPasswordError",t,"weak_password"),this.reasons=r}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class Qt extends ie{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const Zt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),vr=` 	
\r=`.split(""),Ua=(()=>{const s=new Array(128);for(let e=0;e<s.length;e+=1)s[e]=-1;for(let e=0;e<vr.length;e+=1)s[vr[e].charCodeAt(0)]=-2;for(let e=0;e<Zt.length;e+=1)s[Zt[e].charCodeAt(0)]=e;return s})();function br(s,e,t){if(s!==null)for(e.queue=e.queue<<8|s,e.queuedBits+=8;e.queuedBits>=6;){const r=e.queue>>e.queuedBits-6&63;t(Zt[r]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const r=e.queue>>e.queuedBits-6&63;t(Zt[r]),e.queuedBits-=6}}function on(s,e,t){const r=Ua[s];if(r>-1)for(e.queue=e.queue<<6|r,e.queuedBits+=6;e.queuedBits>=8;)t(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(r===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(s)}"`)}}function wr(s){const e=[],t=a=>{e.push(String.fromCodePoint(a))},r={utf8seq:0,codepoint:0},n={queue:0,queuedBits:0},i=a=>{Ba(a,r,t)};for(let a=0;a<s.length;a+=1)on(s.charCodeAt(a),n,i);return e.join("")}function Ma(s,e){if(s<=127){e(s);return}else if(s<=2047){e(192|s>>6),e(128|s&63);return}else if(s<=65535){e(224|s>>12),e(128|s>>6&63),e(128|s&63);return}else if(s<=1114111){e(240|s>>18),e(128|s>>12&63),e(128|s>>6&63),e(128|s&63);return}throw new Error(`Unrecognized Unicode codepoint: ${s.toString(16)}`)}function Fa(s,e){for(let t=0;t<s.length;t+=1){let r=s.charCodeAt(t);if(r>55295&&r<=56319){const n=(r-55296)*1024&65535;r=(s.charCodeAt(t+1)-56320&65535|n)+65536,t+=1}Ma(r,e)}}function Ba(s,e,t){if(e.utf8seq===0){if(s<=127){t(s);return}for(let r=1;r<6;r+=1)if((s>>7-r&1)===0){e.utf8seq=r;break}if(e.utf8seq===2)e.codepoint=s&31;else if(e.utf8seq===3)e.codepoint=s&15;else if(e.utf8seq===4)e.codepoint=s&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(s<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|s&63,e.utf8seq-=1,e.utf8seq===0&&t(e.codepoint)}}function tt(s){const e=[],t={queue:0,queuedBits:0},r=n=>{e.push(n)};for(let n=0;n<s.length;n+=1)on(s.charCodeAt(n),t,r);return new Uint8Array(e)}function Ha(s){const e=[];return Fa(s,t=>e.push(t)),new Uint8Array(e)}function je(s){const e=[],t={queue:0,queuedBits:0},r=n=>{e.push(n)};return s.forEach(n=>br(n,t,r)),br(null,t,r),e.join("")}function qa(s){return Math.round(Date.now()/1e3)+s}function za(){return Symbol("auth-callback")}const U=()=>typeof window<"u"&&typeof document<"u",Te={tested:!1,writable:!1},ln=()=>{if(!U())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Te.tested)return Te.writable;const s=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(s,s),globalThis.localStorage.removeItem(s),Te.tested=!0,Te.writable=!0}catch{Te.tested=!0,Te.writable=!1}return Te.writable};function _r(s){const e={},t=new URL(s);if(t.hash&&t.hash[0]==="#")try{new URLSearchParams(t.hash.substring(1)).forEach((n,i)=>{e[i]=n})}catch{}return t.searchParams.forEach((r,n)=>{e[n]=r}),e}const cn=s=>s?(...e)=>s(...e):(...e)=>fetch(...e),Wa=s=>typeof s=="object"&&s!==null&&"status"in s&&"ok"in s&&"json"in s&&typeof s.json=="function",pe=async(s,e,t)=>{await s.setItem(e,JSON.stringify(t))},M=async(s,e)=>{const t=await s.getItem(e);if(!t)return null;try{return JSON.parse(t)}catch{return null}},B=async(s,e)=>{await s.removeItem(e)};class ls{constructor(){this.promise=new ls.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}}ls.promiseConstructor=Promise;function Ht(s){const e=s.split(".");if(e.length!==3)throw new Qt("Invalid JWT structure");for(let r=0;r<e.length;r++)if(!Ra.test(e[r]))throw new Qt("JWT not in base64url format");return{header:JSON.parse(wr(e[0])),payload:JSON.parse(wr(e[1])),signature:tt(e[2]),raw:{header:e[0],payload:e[1]}}}async function Va(s){return await new Promise(e=>{setTimeout(()=>e(null),s)})}function Ka(s,e){return new Promise((r,n)=>{(async()=>{for(let i=0;i<1/0;i++)try{const a=await s(i);if(!e(i,null,a)){r(a);return}}catch(a){if(!e(i,a)){n(a);return}}})()})}function un(s){return("0"+s.toString(16)).substr(-2)}function Ja(){const e=new Uint32Array(56);if(typeof crypto>"u"){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",r=t.length;let n="";for(let i=0;i<56;i++)n+=t.charAt(Math.floor(Math.random()*r));return n}return crypto.getRandomValues(e),Array.from(e,un).join("")}async function Ga(s){const t=new TextEncoder().encode(s),r=await crypto.subtle.digest("SHA-256",t),n=new Uint8Array(r);return Array.from(n).map(i=>String.fromCharCode(i)).join("")}async function Ya(s){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),s;const t=await Ga(s);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}const Xa=/^[a-zA-Z0-9_-]{8,64}$/;function Vt(s){return typeof s=="string"&&Xa.test(s)?s:null}function Qa(){if(typeof crypto<"u"&&typeof crypto.getRandomValues=="function"){const e=new Uint8Array(16);return crypto.getRandomValues(e),Array.from(e,un).join("")}let s="";for(let e=0;e<32;e++)s+=Math.floor(Math.random()*16).toString(16);return s}const nt=(s,e)=>`${s}-flow-${e}-code-verifier`,$t=s=>`${s}-flows-code-verifier`;async function Fs(s,e){const t=await M(s,$t(e));return Array.isArray(t)?t.filter(r=>Vt(r)!==null):[]}async function Za(s,e,t,r,n){await pe(s,nt(e,t),r);const i=(await Fs(s,e)).filter(a=>a!==t);for(i.push(t);i.length>Pa;){const a=i.shift();await B(s,nt(e,a)),n==null||n(a)}await pe(s,$t(e),i),await pe(s,`${e}-code-verifier`,r)}async function eo(s,e,t){if(t){const n=await M(s,nt(e,t));return{verifier:typeof n=="string"?n:null,flowId:t}}const r=await M(s,`${e}-code-verifier`);return{verifier:typeof r=="string"?r:null,flowId:null}}async function W(s,e,t){const r=`${e}-code-verifier`;if(!t){await B(s,r);return}const n=nt(e,t),i=await M(s,n);await B(s,n);const a=await Fs(s,e),o=a.filter(l=>l!==t);o.length!==a.length&&(o.length>0?await pe(s,$t(e),o):await B(s,$t(e))),i!=null&&i===await M(s,r)&&await B(s,r)}async function to(s,e){const t=await Fs(s,e);for(const r of t)await B(s,nt(e,r));await B(s,$t(e)),await B(s,`${e}-code-verifier`)}function so(s,e){const t=s.indexOf("#");let r=t===-1?s:s.slice(0,t);const n=t===-1?"":s.slice(t),i=r.indexOf("?");if(i!==-1){const o=r.slice(0,i),l=r.slice(i+1).split("&").filter(c=>c!==""&&c!==De&&!c.startsWith(`${De}=`));r=l.length>0?`${o}?${l.join("&")}`:o}const a=r.includes("?")?"&":"?";return`${r}${a}${De}=${encodeURIComponent(e)}${n}`}async function ro(s,e,t=!1,r){const n=Ja();let i=n;t&&(i+="/recovery");const a=Qa();await Za(s,e,a,i,r);const o=await Ya(n);return[o,n===o?"plain":"s256",a]}const no=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function io(s){const e=s.headers.get(Ps);if(!e||!e.match(no))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function ao(s){if(!s)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(s<=e)throw new Error("JWT has expired")}function oo(s){switch(s){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const lo=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function oe(s){if(!lo.test(s))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function K(s){if(!s.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function vs(){const s={};return new Proxy(s,{get:(e,t)=>{if(t==="__isUserNotAvailableProxy")return!0;if(typeof t=="symbol"){const r=t.toString();if(r==="Symbol(Symbol.toPrimitive)"||r==="Symbol(Symbol.toStringTag)"||r==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function co(s,e){return new Proxy(s,{get:(t,r,n)=>{if(r==="__isInsecureUserWarningProxy")return!0;if(typeof r=="symbol"){const i=r.toString();if(i==="Symbol(Symbol.toPrimitive)"||i==="Symbol(Symbol.toStringTag)"||i==="Symbol(util.inspect.custom)"||i==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(t,r,n)}return!e.value&&typeof r=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(t,r,n)}})}function Sr(s){return JSON.parse(JSON.stringify(s))}const Re=s=>{if(typeof s=="object"&&s!==null){const e=s;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(s)},kr=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function Er(s){var e;if(!Wa(s))throw new Wt(Re(s),0);let t;try{t=await s.json()}catch(i){throw kr.includes(s.status)?new Wt(s.statusText||`HTTP ${s.status}`,s.status):new Y(Re(i),i)}if(kr.includes(s.status))throw new Wt(Re(t),s.status);let r;const n=io(s);if(n&&n.getTime()>=an["2024-01-01"].timestamp&&typeof t=="object"&&t&&typeof t.code=="string"?r=t.code:typeof t=="object"&&t&&typeof t.error_code=="string"&&(r=t.error_code),r){if(r==="weak_password")throw new yr(Re(t),s.status,((e=t.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(r==="session_not_found")throw new N}else if(typeof t=="object"&&t&&typeof t.weak_password=="object"&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((i,a)=>i&&typeof a=="string",!0))throw new yr(Re(t),s.status,t.weak_password.reasons);throw new Da(Re(t),s.status||500,r)}const uo=(s,e,t,r)=>{const n={method:s,headers:(e==null?void 0:e.headers)||{}};return s==="GET"?n:(n.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),n.body=JSON.stringify(r),Object.assign(Object.assign({},n),t))};async function S(s,e,t,r){var n;const i=Object.assign({},r==null?void 0:r.headers);i[Ps]||(i[Ps]=an["2024-01-01"].name),r!=null&&r.jwt&&(i.Authorization=`Bearer ${r.jwt}`);const a=(n=r==null?void 0:r.query)!==null&&n!==void 0?n:{};r!=null&&r.redirectTo&&(a.redirect_to=r.redirectTo);const o=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await ho(s,e,t+o,{headers:i,noResolveJson:r==null?void 0:r.noResolveJson},{},r==null?void 0:r.body);return r!=null&&r.xform?r==null?void 0:r.xform(l):{data:Object.assign({},l),error:null}}async function ho(s,e,t,r,n,i){const a=uo(e,r,n,i);let o;try{o=await s(t,Object.assign({},a))}catch(l){throw new Wt(Re(l),0)}if(o.ok||await Er(o),r!=null&&r.noResolveJson)return o;try{return await o.json()}catch(l){await Er(l)}}function z(s){var e;let t=null;go(s)&&(t=Object.assign({},s),s.expires_at||(t.expires_at=qa(s.expires_in)));const r=(e=s.user)!==null&&e!==void 0?e:typeof(s==null?void 0:s.id)=="string"?s:null;return{data:{session:t,user:r},error:null}}function Ar(s){const e=z(s);return!e.error&&s.weak_password&&typeof s.weak_password=="object"&&Array.isArray(s.weak_password.reasons)&&s.weak_password.reasons.length&&s.weak_password.message&&typeof s.weak_password.message=="string"&&s.weak_password.reasons.reduce((t,r)=>t&&typeof r=="string",!0)&&(e.data.weak_password=s.weak_password),e}function Se(s){var e;return{data:{user:(e=s.user)!==null&&e!==void 0?e:s},error:null}}function po(s){return{data:s,error:null}}function fo(s){const{action_link:e,email_otp:t,hashed_token:r,redirect_to:n,verification_type:i}=s,a=is(s,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:t,hashed_token:r,redirect_to:n,verification_type:i},l=Object.assign({},a);return{data:{properties:o,user:l},error:null}}function xr(s){return s}function go(s){return!!s.access_token&&!!s.refresh_token&&!!s.expires_in}const bs=["global","local","others"];class mo{constructor({url:e="",headers:t={},fetch:r,experimental:n}){this.url=e,this.headers=t,this.fetch=cn(r),this.experimental=n??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,t=bs[0]){if(bs.indexOf(t)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${bs.join(", ")}`);try{return await S(this.fetch,"POST",`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(r){if(_(r))return{data:null,error:r};throw r}}async inviteUserByEmail(e,t={}){try{return await S(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:Se})}catch(r){if(_(r))return{data:{user:null},error:r};throw r}}async generateLink(e){try{const{options:t}=e,r=is(e,["options"]),n=Object.assign(Object.assign({},r),t);return"newEmail"in r&&(n.new_email=r==null?void 0:r.newEmail,delete n.newEmail),await S(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:n,headers:this.headers,xform:fo,redirectTo:t==null?void 0:t.redirectTo})}catch(t){if(_(t))return{data:{properties:null,user:null},error:t};throw t}}async createUser(e){try{return await S(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Se})}catch(t){if(_(t))return{data:{user:null},error:t};throw t}}async listUsers(e){var t,r,n,i,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},h=await S(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(t=e==null?void 0:e.page)===null||t===void 0?void 0:t.toString())!==null&&r!==void 0?r:"",per_page:(i=(n=e==null?void 0:e.perPage)===null||n===void 0?void 0:n.toString())!==null&&i!==void 0?i:""},xform:xr});if(h.error)throw h.error;const u=await h.json(),d=(a=h.headers.get("x-total-count"))!==null&&a!==void 0?a:0,p=(l=(o=h.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return p.length>0&&(p.forEach(g=>{const f=parseInt(g.split(";")[0].split("=")[1].substring(0,1)),y=JSON.parse(g.split(";")[1].split("=")[1]);c[`${y}Page`]=f}),c.total=parseInt(d)),{data:Object.assign(Object.assign({},u),c),error:null}}catch(c){if(_(c))return{data:{users:[]},error:c};throw c}}async getUserById(e){oe(e);try{return await S(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Se})}catch(t){if(_(t))return{data:{user:null},error:t};throw t}}async updateUserById(e,t){oe(e);try{return await S(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:Se})}catch(r){if(_(r))return{data:{user:null},error:r};throw r}}async deleteUser(e,t=!1){oe(e);try{return await S(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:Se})}catch(r){if(_(r))return{data:{user:null},error:r};throw r}}async _listFactors(e){oe(e.userId);try{const{data:t,error:r}=await S(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:n=>({data:{factors:n},error:null})});return{data:t,error:r}}catch(t){if(_(t))return{data:null,error:t};throw t}}async _deleteFactor(e){oe(e.userId),oe(e.id);try{return{data:await S(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(t){if(_(t))return{data:null,error:t};throw t}}async _listOAuthClients(e){var t,r,n,i,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},h=await S(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(t=e==null?void 0:e.page)===null||t===void 0?void 0:t.toString())!==null&&r!==void 0?r:"",per_page:(i=(n=e==null?void 0:e.perPage)===null||n===void 0?void 0:n.toString())!==null&&i!==void 0?i:""},xform:xr});if(h.error)throw h.error;const u=await h.json(),d=(a=h.headers.get("x-total-count"))!==null&&a!==void 0?a:0,p=(l=(o=h.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return p.length>0&&(p.forEach(g=>{const f=parseInt(g.split(";")[0].split("=")[1].substring(0,1)),y=JSON.parse(g.split(";")[1].split("=")[1]);c[`${y}Page`]=f}),c.total=parseInt(d)),{data:Object.assign(Object.assign({},u),c),error:null}}catch(c){if(_(c))return{data:{clients:[]},error:c};throw c}}async _createOAuthClient(e){try{return await S(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(_(t))return{data:null,error:t};throw t}}async _getOAuthClient(e){try{return await S(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(_(t))return{data:null,error:t};throw t}}async _updateOAuthClient(e,t){try{return await S(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:t,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(_(r))return{data:null,error:r};throw r}}async _deleteOAuthClient(e){try{return await S(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(_(t))return{data:null,error:t};throw t}}async _regenerateOAuthClientSecret(e){try{return await S(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(_(t))return{data:null,error:t};throw t}}async _listCustomProviders(e){try{const t={};return e!=null&&e.type&&(t.type=e.type),await S(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:t,xform:r=>{var n;return{data:{providers:(n=r==null?void 0:r.providers)!==null&&n!==void 0?n:[]},error:null}}})}catch(t){if(_(t))return{data:{providers:[]},error:t};throw t}}async _createCustomProvider(e){try{return await S(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(_(t))return{data:null,error:t};throw t}}async _getCustomProvider(e){try{return await S(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(_(t))return{data:null,error:t};throw t}}async _updateCustomProvider(e,t){try{return await S(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:t,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(_(r))return{data:null,error:r};throw r}}async _deleteCustomProvider(e){try{return await S(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(_(t))return{data:null,error:t};throw t}}async _adminListPasskeys(e){K(this.experimental),oe(e.userId);try{return await S(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(_(t))return{data:null,error:t};throw t}}async _adminDeletePasskey(e){K(this.experimental),oe(e.userId),oe(e.passkeyId);try{return await S(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(_(t))return{data:null,error:t};throw t}}}function Tr(s={}){return{getItem:e=>s[e]||null,setItem:(e,t)=>{s[e]=t},removeItem:e=>{delete s[e]}}}globalThis&&ln()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class yo extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}function vo(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function hn(s){if(!/^0x[a-fA-F0-9]{40}$/.test(s))throw new Error(`@supabase/auth-js: Address "${s}" is invalid.`);return s.toLowerCase()}function bo(s){return parseInt(s,16)}function wo(s){const e=new TextEncoder().encode(s);return"0x"+Array.from(e,r=>r.toString(16).padStart(2,"0")).join("")}function _o(s){var e;const{chainId:t,domain:r,expirationTime:n,issuedAt:i=new Date,nonce:a,notBefore:o,requestId:l,resources:c,scheme:h,uri:u,version:d}=s;{if(!Number.isInteger(t))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!r)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(a&&a.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!u)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(d!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);if(!((e=s.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${s.statement}`)}const p=hn(s.address),g=h?`${h}://${r}`:r,f=s.statement?`${s.statement}
`:"",y=`${g} wants you to sign in with your Ethereum account:
${p}

${f}`;let v=`URI: ${u}
Version: ${d}
Chain ID: ${t}${a?`
Nonce: ${a}`:""}
Issued At: ${i.toISOString()}`;if(n&&(v+=`
Expiration Time: ${n.toISOString()}`),o&&(v+=`
Not Before: ${o.toISOString()}`),l&&(v+=`
Request ID: ${l}`),c){let b=`
Resources:`;for(const w of c){if(!w||typeof w!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${w}`);b+=`
- ${w}`}v+=b}return`${y}
${v}`}class D extends Error{constructor({message:e,code:t,cause:r,name:n}){var i;super(e,{cause:r}),this.__isWebAuthnError=!0,this.name=(i=n??(r instanceof Error?r.name:void 0))!==null&&i!==void 0?i:"Unknown Error",this.code=t}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class es extends D{constructor(e,t){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t,message:e}),this.name="WebAuthnUnknownError",this.originalError=t}}function So({error:s,options:e}){var t,r,n;const{publicKey:i}=e;if(!i)throw Error("options was missing required publicKey property");if(s.name==="AbortError"){if(e.signal instanceof AbortSignal)return new D({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:s})}else if(s.name==="ConstraintError"){if(((t=i.authenticatorSelection)===null||t===void 0?void 0:t.requireResidentKey)===!0)return new D({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:s});if(e.mediation==="conditional"&&((r=i.authenticatorSelection)===null||r===void 0?void 0:r.userVerification)==="required")return new D({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:s});if(((n=i.authenticatorSelection)===null||n===void 0?void 0:n.userVerification)==="required")return new D({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:s})}else{if(s.name==="InvalidStateError")return new D({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:s});if(s.name==="NotAllowedError")return new D({message:s.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s});if(s.name==="NotSupportedError")return i.pubKeyCredParams.filter(o=>o.type==="public-key").length===0?new D({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:s}):new D({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:s});if(s.name==="SecurityError"){const a=window.location.hostname;if(dn(a)){if(i.rp.id!==a)return new D({message:`The RP ID "${i.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:s})}else return new D({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:s})}else if(s.name==="TypeError"){if(i.user.id.byteLength<1||i.user.id.byteLength>64)return new D({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:s})}else if(s.name==="UnknownError")return new D({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:s})}return new D({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s})}function ko({error:s,options:e}){const{publicKey:t}=e;if(!t)throw Error("options was missing required publicKey property");if(s.name==="AbortError"){if(e.signal instanceof AbortSignal)return new D({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:s})}else{if(s.name==="NotAllowedError")return new D({message:s.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s});if(s.name==="SecurityError"){const r=window.location.hostname;if(dn(r)){if(t.rpId!==r)return new D({message:`The RP ID "${t.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:s})}else return new D({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:s})}else if(s.name==="UnknownError")return new D({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:s})}return new D({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s})}class Eo{createNewAbortSignal(){if(this.controller){const t=new Error("Cancelling existing WebAuthn API call for new one");t.name="AbortError",this.controller.abort(t)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const Is=new Eo;function $r(s){if(!s)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(s);const{challenge:e,user:t,excludeCredentials:r}=s,n=is(s,["challenge","user","excludeCredentials"]),i=tt(e).buffer,a=Object.assign(Object.assign({},t),{id:tt(t.id).buffer}),o=Object.assign(Object.assign({},n),{challenge:i,user:a});if(r&&r.length>0){o.excludeCredentials=new Array(r.length);for(let l=0;l<r.length;l++){const c=r[l];o.excludeCredentials[l]=Object.assign(Object.assign({},c),{id:tt(c.id).buffer,type:c.type||"public-key",transports:c.transports})}}return o}function Or(s){if(!s)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(s);const{challenge:e,allowCredentials:t}=s,r=is(s,["challenge","allowCredentials"]),n=tt(e).buffer,i=Object.assign(Object.assign({},r),{challenge:n});if(t&&t.length>0){i.allowCredentials=new Array(t.length);for(let a=0;a<t.length;a++){const o=t[a];i.allowCredentials[a]=Object.assign(Object.assign({},o),{id:tt(o.id).buffer,type:o.type||"public-key",transports:o.transports})}}return i}function Cr(s){var e;if("toJSON"in s&&typeof s.toJSON=="function")return s.toJSON();const t=s;return{id:s.id,rawId:s.id,response:{attestationObject:je(new Uint8Array(s.response.attestationObject)),clientDataJSON:je(new Uint8Array(s.response.clientDataJSON))},type:"public-key",clientExtensionResults:s.getClientExtensionResults(),authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function Rr(s){var e;if("toJSON"in s&&typeof s.toJSON=="function")return s.toJSON();const t=s,r=s.getClientExtensionResults(),n=s.response;return{id:s.id,rawId:s.id,response:{authenticatorData:je(new Uint8Array(n.authenticatorData)),clientDataJSON:je(new Uint8Array(n.clientDataJSON)),signature:je(new Uint8Array(n.signature)),userHandle:n.userHandle?je(new Uint8Array(n.userHandle)):void 0},type:"public-key",clientExtensionResults:r,authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function dn(s){return s==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(s)}function ts(){var s,e;return!!(U()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((s=navigator==null?void 0:navigator.credentials)===null||s===void 0?void 0:s.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function pn(s){try{const e=await navigator.credentials.create(s);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new es("Browser returned unexpected credential type",e)}:{data:null,error:new es("Empty credential response",e)}}catch(e){return{data:null,error:So({error:e,options:s})}}}async function fn(s){try{const e=await navigator.credentials.get(s);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new es("Browser returned unexpected credential type",e)}:{data:null,error:new es("Empty credential response",e)}}catch(e){return{data:null,error:ko({error:e,options:s})}}}const Ao={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},xo={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function ss(...s){const e=n=>n!==null&&typeof n=="object"&&!Array.isArray(n),t=n=>n instanceof ArrayBuffer||ArrayBuffer.isView(n),r={};for(const n of s)if(n)for(const i in n){const a=n[i];if(a!==void 0)if(Array.isArray(a))r[i]=a;else if(t(a))r[i]=a;else if(e(a)){const o=r[i];e(o)?r[i]=ss(o,a):r[i]=ss(a)}else r[i]=a}return r}function To(s,e){return ss(Ao,s,e||{})}function $o(s,e){return ss(xo,s,e||{})}class Oo{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:t,friendlyName:r,signal:n},i){var a;try{const{data:o,error:l}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!o)return{data:null,error:l};const c=n??Is.createNewAbortSignal();if(o.webauthn.type==="create"){const{user:h}=o.webauthn.credential_options.publicKey;if(!h.name){const u=r;if(u)h.name=`${h.id}:${u}`;else{const p=(await this.client.getUser()).data.user,g=((a=p==null?void 0:p.user_metadata)===null||a===void 0?void 0:a.name)||(p==null?void 0:p.email)||(p==null?void 0:p.id)||"User";h.name=`${h.id}:${g}`}}h.displayName||(h.displayName=h.name)}switch(o.webauthn.type){case"create":{const h=To(o.webauthn.credential_options.publicKey,i==null?void 0:i.create),{data:u,error:d}=await pn({publicKey:h,signal:c});return u?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:u}},error:null}:{data:null,error:d}}case"request":{const h=$o(o.webauthn.credential_options.publicKey,i==null?void 0:i.request),{data:u,error:d}=await fn(Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:h,signal:c}));return u?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:u}},error:null}:{data:null,error:d}}}}catch(o){return _(o)?{data:null,error:o}:{data:null,error:new Y("Unexpected error in challenge",o)}}}async _verify({challengeId:e,factorId:t,webauthn:r}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:r})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:n}={}},i){if(!t)return{data:null,error:new Tt("rpId is required for WebAuthn authentication")};try{if(!ts())return{data:null,error:new Y("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:r},signal:n},{request:i});if(!a)return{data:null,error:o};const{webauthn:l}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:l.type,rpId:t,rpOrigins:r,credential_response:l.credential_response}})}catch(a){return _(a)?{data:null,error:a}:{data:null,error:new Y("Unexpected error in authenticate",a)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:n}={}},i){if(!t)return{data:null,error:new Tt("rpId is required for WebAuthn registration")};try{if(!ts())return{data:null,error:new Y("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(h=>{var u;return(u=h.data)===null||u===void 0?void 0:u.all.find(d=>d.factor_type==="webauthn"&&d.friendly_name===e&&d.status!=="unverified")}).then(h=>h?this.client.mfa.unenroll({factorId:h==null?void 0:h.id}):void 0),{data:null,error:o};const{data:l,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:r},signal:n},{create:i});return l?this._verify({factorId:a.id,challengeId:l.challengeId,webauthn:{rpId:t,rpOrigins:r,type:l.webauthn.type,credential_response:l.webauthn.credential_response}}):{data:null,error:c}}catch(a){return _(a)?{data:null,error:a}:{data:null,error:new Y("Unexpected error in register",a)}}}}vo();const Co={url:$a,storageKey:Oa,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:Ca,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},Ke={};class Ot{get jwks(){var e,t;return(t=(e=Ke[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&t!==void 0?t:{keys:[]}}set jwks(e){Ke[this.storageKey]=Object.assign(Object.assign({},Ke[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,t;return(t=(e=Ke[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&t!==void 0?t:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){Ke[this.storageKey]=Object.assign(Object.assign({},Ke[this.storageKey]),{cachedAt:e})}constructor(e){var t,r,n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this._pendingInitNotifications=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const i=Object.assign(Object.assign({},Co),e);if(this.storageKey=i.storageKey,this.instanceID=(t=Ot.nextInstanceID[this.storageKey])!==null&&t!==void 0?t:0,Ot.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!i.debug,typeof i.debug=="function"&&(this.logger=i.debug),this.instanceID>0&&U()){const a=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(a),this.logDebugMessages&&console.trace(a)}if(this.persistSession=i.persistSession,this.autoRefreshToken=i.autoRefreshToken,this.experimental=(r=i.experimental)!==null&&r!==void 0?r:{},this.admin=new mo({url:i.url,headers:i.headers,fetch:i.fetch,experimental:this.experimental}),this.url=i.url,this.headers=i.headers,this.fetch=cn(i.fetch),this.detectSessionInUrl=i.detectSessionInUrl,this.flowType=i.flowType,this.hasCustomAuthorizationHeader=i.hasCustomAuthorizationHeader,this.throwOnError=i.throwOnError,this.lockAcquireTimeout=i.lockAcquireTimeout,i.lock!=null&&(this.lock=i.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new Oo(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(i.storage?this.storage=i.storage:ln()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Tr(this.memoryStorage)),i.userStorage&&(this.userStorage=i.userStorage)):(this.memoryStorage={},this.storage=Tr(this.memoryStorage)),U()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(n=this.broadcastChannel)===null||n===void 0||n.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a),(a.data.event==="TOKEN_REFRESHED"||a.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(a.data.event,a.data.session,!1)}catch(o){this._debug("#broadcastChannel","error",o)}})}i.skipAutoInitialize||this.initialize().catch(a=>{this._debug("#initialize()","error",a)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${nn}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){var e;if(this.initializePromise)return await this.initializePromise;this._pendingInitNotifications=[],this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())();const t=await this.initializePromise,r=(e=this._pendingInitNotifications)!==null&&e!==void 0?e:[];this._pendingInitNotifications=null;for(const n of r)await this._notifyAllSubscribers(n.event,n.session,n.broadcast);return t}async _initialize(){var e;try{let t={},r="none";if(U()&&(t=_r(window.location.href),this._isImplicitGrantCallback(t)?r="implicit":await this._isPKCECallback(t)&&(r="pkce")),U()&&this.detectSessionInUrl&&r!=="none"){const{data:n,error:i}=await this._getSessionFromURL(t,r);if(i){if(this._debug("#_initialize()","error detecting session from URL",i),ja(i)){const l=(e=i.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:i}}return{error:i}}const{session:a,redirectType:o}=n;return this._debug("#_initialize()","detected session in URL",a,"redirect type",o),await this._saveSession(a),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return _(t)?this._returnResult({error:t}):this._returnResult({error:new Y("Unexpected error during initialization",t)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var t,r,n;try{const i=await S(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(r=(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:(n=e==null?void 0:e.options)===null||n===void 0?void 0:n.captchaToken}},xform:z}),{data:a,error:o}=i;if(o||!a)return this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(i){if(_(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signUp(e){var t,r,n;let i=null;try{let a;if("email"in e){const{email:u,password:d,options:p}=e;let g=null,f=null;this.flowType==="pkce"&&([g,f,i]=await this._getCodeChallengeAndMethod()),a=await S(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(p==null?void 0:p.emailRedirectTo,i),body:{email:u,password:d,data:(t=p==null?void 0:p.data)!==null&&t!==void 0?t:{},gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},code_challenge:g,code_challenge_method:f},xform:z})}else if("phone"in e){const{phone:u,password:d,options:p}=e;a=await S(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:u,password:d,data:(r=p==null?void 0:p.data)!==null&&r!==void 0?r:{},channel:(n=p==null?void 0:p.channel)!==null&&n!==void 0?n:"sms",gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken}},xform:z})}else throw new Mt("You must provide either an email or phone number and a password");const{data:o,error:l}=a;if(l||!o)return await W(this.storage,this.storageKey,i),this._returnResult({data:{user:null,session:null},error:l});const c=o.session,h=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",c)),this._returnResult({data:{user:h,session:c},error:null})}catch(a){if(await W(this.storage,this.storageKey,i),_(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithPassword(e){try{let t;if("email"in e){const{email:i,password:a,options:o}=e;t=await S(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:i,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Ar})}else if("phone"in e){const{phone:i,password:a,options:o}=e;t=await S(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:i,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Ar})}else throw new Mt("You must provide either an email or phone number and a password");const{data:r,error:n}=t;if(n)return this._returnResult({data:{user:null,session:null},error:n});if(!r||!r.session||!r.user){const i=new Ve;return this._returnResult({data:{user:null,session:null},error:i})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),this._returnResult({data:Object.assign({user:r.user,session:r.session},r.weak_password?{weakPassword:r.weak_password}:null),error:n})}catch(t){if(_(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOAuth(e){var t,r,n,i;return await this._handleProviderSignIn(e.provider,{redirectTo:(t=e.options)===null||t===void 0?void 0:t.redirectTo,scopes:(r=e.options)===null||r===void 0?void 0:r.scopes,queryParams:(n=e.options)===null||n===void 0?void 0:n.queryParams,skipBrowserRedirect:(i=e.options)===null||i===void 0?void 0:i.skipBrowserRedirect})}async exchangeCodeForSession(e,t){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e,t)):this._exchangeCodeForSession(e,t)}async signInWithWeb3(e){const{chain:t}=e;switch(t){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){var t,r,n,i,a,o,l,c,h,u,d;let p,g;if("message"in e)p=e.message,g=e.signature;else{const{chain:f,wallet:y,statement:v,options:b}=e;let w;if(U())if(typeof y=="object")w=y;else{const ae=window;if("ethereum"in ae&&typeof ae.ethereum=="object"&&"request"in ae.ethereum&&typeof ae.ethereum.request=="function")w=ae.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof y!="object"||!(b!=null&&b.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");w=y}const k=new URL((t=b==null?void 0:b.url)!==null&&t!==void 0?t:window.location.href),T=await w.request({method:"eth_requestAccounts"}).then(ae=>ae).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!T||T.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const $=hn(T[0]);let O=(r=b==null?void 0:b.signInWithEthereum)===null||r===void 0?void 0:r.chainId;if(!O){const ae=await w.request({method:"eth_chainId"});O=bo(ae)}const lt={domain:k.host,address:$,statement:v,uri:k.href,version:"1",chainId:O,nonce:(n=b==null?void 0:b.signInWithEthereum)===null||n===void 0?void 0:n.nonce,issuedAt:(a=(i=b==null?void 0:b.signInWithEthereum)===null||i===void 0?void 0:i.issuedAt)!==null&&a!==void 0?a:new Date,expirationTime:(o=b==null?void 0:b.signInWithEthereum)===null||o===void 0?void 0:o.expirationTime,notBefore:(l=b==null?void 0:b.signInWithEthereum)===null||l===void 0?void 0:l.notBefore,requestId:(c=b==null?void 0:b.signInWithEthereum)===null||c===void 0?void 0:c.requestId,resources:(h=b==null?void 0:b.signInWithEthereum)===null||h===void 0?void 0:h.resources};p=_o(lt),g=await w.request({method:"personal_sign",params:[wo(p),$]})}try{const{data:f,error:y}=await S(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:p,signature:g},!((u=e.options)===null||u===void 0)&&u.captchaToken?{gotrue_meta_security:{captcha_token:(d=e.options)===null||d===void 0?void 0:d.captchaToken}}:null),xform:z});if(y)throw y;if(!f||!f.session||!f.user){const v=new Ve;return this._returnResult({data:{user:null,session:null},error:v})}return f.session&&(await this._saveSession(f.session),await this._notifyAllSubscribers("SIGNED_IN",f.session)),this._returnResult({data:Object.assign({},f),error:y})}catch(f){if(_(f))return this._returnResult({data:{user:null,session:null},error:f});throw f}}async signInWithSolana(e){var t,r,n,i,a,o,l,c,h,u,d,p;let g,f;if("message"in e)g=e.message,f=e.signature;else{const{chain:y,wallet:v,statement:b,options:w}=e;let k;if(U())if(typeof v=="object")k=v;else{const $=window;if("solana"in $&&typeof $.solana=="object"&&("signIn"in $.solana&&typeof $.solana.signIn=="function"||"signMessage"in $.solana&&typeof $.solana.signMessage=="function"))k=$.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof v!="object"||!(w!=null&&w.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");k=v}const T=new URL((t=w==null?void 0:w.url)!==null&&t!==void 0?t:window.location.href);if("signIn"in k&&k.signIn){const $=await k.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},w==null?void 0:w.signInWithSolana),{version:"1",domain:T.host,uri:T.href}),b?{statement:b}:null));let O;if(Array.isArray($)&&$[0]&&typeof $[0]=="object")O=$[0];else if($&&typeof $=="object"&&"signedMessage"in $&&"signature"in $)O=$;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in O&&"signature"in O&&(typeof O.signedMessage=="string"||O.signedMessage instanceof Uint8Array)&&O.signature instanceof Uint8Array)g=typeof O.signedMessage=="string"?O.signedMessage:new TextDecoder().decode(O.signedMessage),f=O.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in k)||typeof k.signMessage!="function"||!("publicKey"in k)||typeof k!="object"||!k.publicKey||!("toBase58"in k.publicKey)||typeof k.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");g=[`${T.host} wants you to sign in with your Solana account:`,k.publicKey.toBase58(),...b?["",b,""]:[""],"Version: 1",`URI: ${T.href}`,`Issued At: ${(n=(r=w==null?void 0:w.signInWithSolana)===null||r===void 0?void 0:r.issuedAt)!==null&&n!==void 0?n:new Date().toISOString()}`,...!((i=w==null?void 0:w.signInWithSolana)===null||i===void 0)&&i.notBefore?[`Not Before: ${w.signInWithSolana.notBefore}`]:[],...!((a=w==null?void 0:w.signInWithSolana)===null||a===void 0)&&a.expirationTime?[`Expiration Time: ${w.signInWithSolana.expirationTime}`]:[],...!((o=w==null?void 0:w.signInWithSolana)===null||o===void 0)&&o.chainId?[`Chain ID: ${w.signInWithSolana.chainId}`]:[],...!((l=w==null?void 0:w.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${w.signInWithSolana.nonce}`]:[],...!((c=w==null?void 0:w.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${w.signInWithSolana.requestId}`]:[],...!((u=(h=w==null?void 0:w.signInWithSolana)===null||h===void 0?void 0:h.resources)===null||u===void 0)&&u.length?["Resources",...w.signInWithSolana.resources.map(O=>`- ${O}`)]:[]].join(`
`);const $=await k.signMessage(new TextEncoder().encode(g),"utf8");if(!$||!($ instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");f=$}}try{const{data:y,error:v}=await S(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:g,signature:je(f)},!((d=e.options)===null||d===void 0)&&d.captchaToken?{gotrue_meta_security:{captcha_token:(p=e.options)===null||p===void 0?void 0:p.captchaToken}}:null),xform:z});if(v)throw v;if(!y||!y.session||!y.user){const b=new Ve;return this._returnResult({data:{user:null,session:null},error:b})}return y.session&&(await this._saveSession(y.session),await this._notifyAllSubscribers("SIGNED_IN",y.session)),this._returnResult({data:Object.assign({},y),error:v})}catch(y){if(_(y))return this._returnResult({data:{user:null,session:null},error:y});throw y}}async _exchangeCodeForSession(e,t){const r=(t==null?void 0:t.flowId)!=null,n=r?Vt(t==null?void 0:t.flowId):U()?Vt(_r(window.location.href)[De]):null;r&&!n&&this._debug("#_exchangeCodeForSession()","provided flowId is not a valid flow id",t==null?void 0:t.flowId);const{verifier:i,flowId:a}=r&&!n?{verifier:null,flowId:null}:await eo(this.storage,this.storageKey,n),[o,l]=(i??"").split("/");try{if(!o&&this.flowType==="pkce")throw new Na;const{data:c,error:h}=await S(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:o},xform:z});if(await W(this.storage,this.storageKey,a),h)throw h;if(!c||!c.session||!c.user){const u=new Ve;return this._returnResult({data:{user:null,session:null,redirectType:null},error:u})}return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers(l==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",c.session)),this._returnResult({data:Object.assign(Object.assign({},c),{redirectType:l??null}),error:h})}catch(c){if(await W(this.storage,this.storageKey,a),_(c))return this._returnResult({data:{user:null,session:null,redirectType:null},error:c});throw c}}async signInWithIdToken(e){try{const{options:t,provider:r,token:n,access_token:i,nonce:a}=e,o=await S(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:r,id_token:n,access_token:i,nonce:a,gotrue_meta_security:{captcha_token:t==null?void 0:t.captchaToken}},xform:z}),{data:l,error:c}=o;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!l||!l.session||!l.user){const h=new Ve;return this._returnResult({data:{user:null,session:null},error:h})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:l,error:c})}catch(t){if(_(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOtp(e){var t,r,n,i,a;let o=null;try{if("email"in e){const{email:l,options:c}=e;let h=null,u=null;this.flowType==="pkce"&&([h,u,o]=await this._getCodeChallengeAndMethod());const{error:d}=await S(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:l,data:(t=c==null?void 0:c.data)!==null&&t!==void 0?t:{},create_user:(r=c==null?void 0:c.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},code_challenge:h,code_challenge_method:u},redirectTo:this._maybeAppendFlowIdToRedirect(c==null?void 0:c.emailRedirectTo,o)});return this._returnResult({data:{user:null,session:null},error:d})}if("phone"in e){const{phone:l,options:c}=e,{data:h,error:u}=await S(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:l,data:(n=c==null?void 0:c.data)!==null&&n!==void 0?n:{},create_user:(i=c==null?void 0:c.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},channel:(a=c==null?void 0:c.channel)!==null&&a!==void 0?a:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:h==null?void 0:h.message_id},error:u})}throw new Mt("You must provide either an email or phone number.")}catch(l){if(await W(this.storage,this.storageKey,o),_(l))return this._returnResult({data:{user:null,session:null},error:l});throw l}}async verifyOtp(e){var t,r;try{let n,i;"options"in e&&(n=(t=e.options)===null||t===void 0?void 0:t.redirectTo,i=(r=e.options)===null||r===void 0?void 0:r.captchaToken);const{data:a,error:o}=await S(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:i}}),redirectTo:n,xform:z});if(o)throw o;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,c=a.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(n){if(_(n))return this._returnResult({data:{user:null,session:null},error:n});throw n}}async signInWithSSO(e){var t,r,n,i;let a=null;try{let o=null,l=null;this.flowType==="pkce"&&([o,l,a]=await this._getCodeChallengeAndMethod());const c=await S(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:this._maybeAppendFlowIdToRedirect((t=e.options)===null||t===void 0?void 0:t.redirectTo,a)}),!((r=e==null?void 0:e.options)===null||r===void 0)&&r.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:o,code_challenge_method:l}),headers:this.headers,xform:po});return!((n=c.data)===null||n===void 0)&&n.url&&U()&&!(!((i=e.options)===null||i===void 0)&&i.skipBrowserRedirect)&&window.location.assign(c.data.url),this._returnResult(c)}catch(o){if(await W(this.storage,this.storageKey,a),_(o))return this._returnResult({data:null,error:o});throw o}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:t},error:r}=e;if(r)throw r;if(!t)throw new N;const{error:n}=await S(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:n})})}catch(e){if(_(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){let t=null;try{const r=`${this.url}/resend`;if("email"in e){const{email:n,type:i,options:a}=e;let o=null,l=null;this.flowType==="pkce"&&([o,l,t]=await this._getCodeChallengeAndMethod());const{error:c}=await S(this.fetch,"POST",r,{headers:this.headers,body:{email:n,type:i,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken},code_challenge:o,code_challenge_method:l},redirectTo:this._maybeAppendFlowIdToRedirect(a==null?void 0:a.emailRedirectTo,t)});return c&&await W(this.storage,this.storageKey,t),this._returnResult({data:{user:null,session:null},error:c})}else if("phone"in e){const{phone:n,type:i,options:a}=e,{data:o,error:l}=await S(this.fetch,"POST",r,{headers:this.headers,body:{phone:n,type:i,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:o==null?void 0:o.message_id},error:l})}throw new Mt("You must provide either an email or phone number and a type")}catch(r){if(await W(this.storage,this.storageKey,t),_(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,t){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const r=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),n=(async()=>(await r,await t()))();return this.pendingInLock.push((async()=>{try{await n}catch{}})()),n}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const r=t();for(this.pendingInLock.push((async()=>{try{await r}catch{}})()),await r;this.pendingInLock.length;){const n=[...this.pendingInLock];await Promise.all(n),this.pendingInLock.splice(0,n.length)}return await r}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const t=await this.__loadSession();return await e(t)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const t=await M(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",t),t!==null&&(this._isValidSession(t)?e=t:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const r=e.expires_at?e.expires_at*1e3-Date.now()<ys:!1;if(this._debug("#__loadSession()",`session has${r?"":" not"} expired`,"expires_at",e.expires_at),!r){if(this.userStorage){const a=await M(this.userStorage,this.storageKey+"-user");a!=null&&a.user?e.user=a.user:e.user=vs()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const a={value:this.suppressGetSessionWarning};e.user=co(e.user,a),a.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:n,error:i}=await this._callRefreshToken(e.refresh_token);if(i){if(!!(e.expires_at&&e.expires_at*1e3>Date.now())){const o=await M(this.storage,this.storageKey);if(o&&o.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:i})}return this._returnResult({data:{session:n},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let t;return this.lock!=null?t=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):t=await this._getUser(),t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await S(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Se}):await this._useSession(async t=>{var r,n,i;const{data:a,error:o}=t;if(o)throw o;return!(!((r=a.session)===null||r===void 0)&&r.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new N}:await S(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(i=(n=a.session)===null||n===void 0?void 0:n.access_token)!==null&&i!==void 0?i:void 0,xform:Se})})}catch(t){if(_(t))return Ut(t)&&await this._removeSession(),this._returnResult({data:{user:null},error:t});throw t}}async updateUser(e,t={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,t)):await this._updateUser(e,t)}async _updateUser(e,t={}){let r=null;try{return await this._useSession(async n=>{const{data:i,error:a}=n;if(a)throw a;if(!i.session)throw new N;const o=i.session;let l=null,c=null;this.flowType==="pkce"&&e.email!=null&&([l,c,r]=await this._getCodeChallengeAndMethod());const{data:h,error:u}=await S(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(t==null?void 0:t.emailRedirectTo,r),body:Object.assign(Object.assign({},e),{code_challenge:l,code_challenge_method:c}),jwt:o.access_token,xform:Se});if(u)throw u;return o.user=h.user,await this._saveSession(o),await this._notifyAllSubscribers("USER_UPDATED",o),this._returnResult({data:{user:o.user},error:null})})}catch(n){if(await W(this.storage,this.storageKey,r),_(n))return this._returnResult({data:{user:null},error:n});throw n}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new N;const t=Date.now()/1e3;let r=t,n=!0,i=null;const{payload:a}=Ht(e.access_token);if(a.exp&&(r=a.exp,n=r<=t),n){const{data:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!o)return{data:{user:null,session:null},error:null};i=o}else{const{data:o,error:l}=await this._getUser(e.access_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});i={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:r-t,expires_at:r},await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)}return this._returnResult({data:{user:i.user,session:i},error:null})}catch(t){if(_(t))return this._returnResult({data:{session:null,user:null},error:t});throw t}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async t=>{var r;if(!e){const{data:a,error:o}=t;if(o)throw o;e=(r=a.session)!==null&&r!==void 0?r:void 0}if(!(e!=null&&e.refresh_token))throw new N;const{data:n,error:i}=await this._callRefreshToken(e.refresh_token);return i?this._returnResult({data:{user:null,session:null},error:i}):n?this._returnResult({data:{user:n.user,session:n},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(t){if(_(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async _getSessionFromURL(e,t){var r;try{if(!U())throw new Ft("No browser detected.");if(e.error||e.error_description||e.error_code)throw new Ft(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(t){case"implicit":if(this.flowType==="pkce")throw new gr("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Ft("Not a valid implicit grant flow url.");break;default:}if(t==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new gr("No code detected.");const{data:w,error:k}=await this._exchangeCodeForSession(e.code,{flowId:e[De]});if(k)throw k;const T=new URL(window.location.href);return T.searchParams.delete("code"),T.searchParams.delete(De),window.history.replaceState(window.history.state,"",T.toString()),{data:{session:w.session,redirectType:(r=w.redirectType)!==null&&r!==void 0?r:null},error:null}}const{provider_token:n,provider_refresh_token:i,access_token:a,refresh_token:o,expires_in:l,expires_at:c,token_type:h}=e;if(!a||!l||!o||!h)throw new Ft("No session defined in URL");const u=Math.round(Date.now()/1e3),d=parseInt(l);let p=u+d;c&&(p=parseInt(c));const g=p-u;g*1e3<=he&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${g}s, should have been closer to ${d}s`);const f=p-d;u-f>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",f,p,u):u-f<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",f,p,u);const{data:y,error:v}=await this._getUser(a);if(v)throw v;const b={provider_token:n,provider_refresh_token:i,access_token:a,expires_in:d,expires_at:p,refresh_token:o,token_type:h,user:y.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:b,redirectType:e.type},error:null})}catch(n){if(_(n))return this._returnResult({data:{session:null,redirectType:null},error:n});throw n}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){if(!e.code)return!1;const t=Vt(e[De]);return t&&await M(this.storage,nt(this.storageKey,t))?!0:!!await M(this.storage,`${this.storageKey}-code-verifier`)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async t=>{var r;const n=async()=>{await this._removeSession()},{data:i,error:a}=t;if(a&&!Ut(a))return this._returnResult({error:a});const o=(r=i.session)===null||r===void 0?void 0:r.access_token;if(o){const{error:l}=await this.admin.signOut(o,e);if(l&&!(fr(l)&&(l.status===404||l.status===401||l.status===403)||Ut(l)))return e!=="others"&&await n(),this._returnResult({error:l})}return e!=="others"&&await n(),this._returnResult({error:null})})}onAuthStateChange(e){const t=za(),r={id:t,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",t),this.stateChangeEmitters.delete(t)}};return this._debug("#onAuthStateChange()","registered callback with id",t),this.stateChangeEmitters.set(t,r),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(t)}):await this._emitInitialSession(t)))(),{data:{subscription:r}}}async _emitInitialSession(e){return await this._useSession(async t=>{var r,n;try{const{data:{session:i},error:a}=t;if(a)throw a;await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",i)),this._debug("INITIAL_SESSION","callback id",e,"session",i)}catch(i){await((n=this.stateChangeEmitters.get(e))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",i),Ut(i)||Bt(i)||fr(i)&&(i.code==="refresh_token_not_found"||i.code==="refresh_token_already_used"||i.code==="session_expired")?console.warn(i):console.error(i)}})}async resetPasswordForEmail(e,t={}){let r=null,n=null,i=null;this.flowType==="pkce"&&([r,n,i]=await this._getCodeChallengeAndMethod(!0));try{return await S(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:r,code_challenge_method:n,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(t.redirectTo,i)})}catch(a){if(await W(this.storage,this.storageKey,i),_(a))return this._returnResult({data:null,error:a});throw a}}async getUserIdentities(){var e;try{const{data:t,error:r}=await this.getUser();if(r)throw r;return this._returnResult({data:{identities:(e=t.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var t;let r=null;try{const{data:n,error:i}=await this._useSession(async a=>{var o,l,c,h,u;const{data:d,error:p}=a;if(p)throw p;const{url:g,flowId:f}=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(o=e.options)===null||o===void 0?void 0:o.redirectTo,scopes:(l=e.options)===null||l===void 0?void 0:l.scopes,queryParams:(c=e.options)===null||c===void 0?void 0:c.queryParams,skipBrowserRedirect:!0});return r=f,await S(this.fetch,"GET",g,{headers:this.headers,jwt:(u=(h=d.session)===null||h===void 0?void 0:h.access_token)!==null&&u!==void 0?u:void 0})});if(i)throw i;return U()&&!(!((t=e.options)===null||t===void 0)&&t.skipBrowserRedirect)&&window.location.assign(n==null?void 0:n.url),this._returnResult({data:{provider:e.provider,url:n==null?void 0:n.url,flowId:r},error:null})}catch(n){if(_(n))return this._returnResult({data:{provider:e.provider,url:null,flowId:r},error:n});throw n}}async linkIdentityIdToken(e){return await this._useSession(async t=>{var r;try{const{error:n,data:{session:i}}=t;if(n)throw n;const{options:a,provider:o,token:l,access_token:c,nonce:h}=e,u=await S(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(r=i==null?void 0:i.access_token)!==null&&r!==void 0?r:void 0,body:{provider:o,id_token:l,access_token:c,nonce:h,link_identity:!0,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:z}),{data:d,error:p}=u;return p?this._returnResult({data:{user:null,session:null},error:p}):!d||!d.session||!d.user?this._returnResult({data:{user:null,session:null},error:new Ve}):(d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("USER_UPDATED",d.session)),this._returnResult({data:d,error:p}))}catch(n){if(await W(this.storage,this.storageKey,null),_(n))return this._returnResult({data:{user:null,session:null},error:n});throw n}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{var r,n;const{data:i,error:a}=t;if(a)throw a;return await S(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(n=(r=i.session)===null||r===void 0?void 0:r.access_token)!==null&&n!==void 0?n:void 0})})}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}async _refreshAccessToken(e){const t="#_refreshAccessToken()";this._debug(t,"begin");try{const r=Date.now();return await Ka(async n=>(n>0&&await Va(200*Math.pow(2,n-1)),this._debug(t,"refreshing attempt",n),await S(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:z})),(n,i)=>{const a=200*Math.pow(2,n);return i&&Bt(i)&&Date.now()+a-r<he})}catch(r){if(this._debug(t,"error",r),_(r))return this._returnResult({data:{session:null,user:null},error:r});throw r}finally{this._debug(t,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,t){const{url:r,flowId:n}=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",t,"url",r),U()&&!t.skipBrowserRedirect&&window.location.assign(r),{data:{provider:e,url:r,flowId:n},error:null}}async _recoverAndRefresh(){var e,t;const r="#_recoverAndRefresh()";this._debug(r,"begin");try{const n=await M(this.storage,this.storageKey);if(n&&this.userStorage){let a=await M(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!a&&(a={user:n.user},await pe(this.userStorage,this.storageKey+"-user",a)),n.user=(e=a==null?void 0:a.user)!==null&&e!==void 0?e:vs()}else if(n&&!n.user&&!n.user){const a=await M(this.storage,this.storageKey+"-user");a&&(a!=null&&a.user)?(n.user=a.user,await B(this.storage,this.storageKey+"-user"),await pe(this.storage,this.storageKey,n)):n.user=vs()}if(this._debug(r,"session from storage",n),!this._isValidSession(n)){this._debug(r,"session is not valid"),n!==null&&await this._removeSession();return}const i=((t=n.expires_at)!==null&&t!==void 0?t:1/0)*1e3-Date.now()<ys;if(this._debug(r,`session has${i?"":" not"} expired with margin of ${ys}s`),i){if(this.autoRefreshToken&&n.refresh_token){const{error:a}=await this._callRefreshToken(n.refresh_token);a&&(La(a)?this._debug(r,"refresh discarded by commit guard",a):this._debug(r,"refresh failed",a))}}else if(n.user&&n.user.__isUserNotAvailableProxy===!0)try{const{data:a,error:o}=await this._getUser(n.access_token);!o&&(a!=null&&a.user)?(n.user=a.user,await this._saveSession(n),await this._notifyAllSubscribers("SIGNED_IN",n)):this._debug(r,"could not get user data, skipping SIGNED_IN notification")}catch(a){console.error("Error getting user data:",a),this._debug(r,"error getting user data, skipping SIGNED_IN notification",a)}else await this._notifyAllSubscribers("SIGNED_IN",n)}catch(n){this._debug(r,"error",n),Bt(n)?console.warn(n):console.error(n);return}finally{this._debug(r,"end")}}async _callRefreshToken(e){var t,r;if(!e)throw new N;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const n="#_callRefreshToken()";this._debug(n,"begin");try{this.refreshingDeferred=new ls;const i=await M(this.storage,this.storageKey),{data:a,error:o}=await this._refreshAccessToken(e);if(o)throw o;if(!a.session)throw new N;const l=await M(this.storage,this.storageKey);if(i!==null&&(l===null||l.refresh_token!==i.refresh_token)){this._debug(n,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:l?"replaced":"cleared"});const d={data:null,error:new mr};return this.refreshingDeferred.resolve(d),d}const h=this._sessionRemovalEpoch;if(await this._saveSession(a.session),this._sessionRemovalEpoch!==h){this._debug(n,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await B(this.storage,this.storageKey),this.userStorage&&await B(this.userStorage,this.storageKey+"-user");const d={data:null,error:new mr};return this.refreshingDeferred.resolve(d),d}await this._notifyAllSubscribers("TOKEN_REFRESHED",a.session);const u={data:a.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(u),u}catch(i){if(this._debug(n,"error",i),_(i)){const a={data:null,error:i};if(!Bt(i)){const o=await M(this.storage,this.storageKey);!!(o!=null&&o.expires_at&&o.expires_at*1e3>Date.now())?this._debug(n,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:a,expiresAt:Date.now()+Ta},(t=this.refreshingDeferred)===null||t===void 0||t.resolve(a),a}throw(r=this.refreshingDeferred)===null||r===void 0||r.reject(i),i}finally{this.refreshingDeferred=null,this._debug(n,"end")}}async _notifyAllSubscribers(e,t,r=!0){if(this._pendingInitNotifications!==null&&r){this._pendingInitNotifications.push({event:e,session:t,broadcast:r});return}const n=`#_notifyAllSubscribers(${e})`;this._debug(n,"begin",t,`broadcast = ${r}`);try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:e,session:t});const i=[],a=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,t)}catch(l){i.push(l)}});if(await Promise.all(a),i.length>0){for(let o=0;o<i.length;o+=1)console.error(i[o]);throw i[0]}}finally{this._debug(n,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0;const t=Object.assign({},e),r=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!r&&t.user&&await pe(this.userStorage,this.storageKey+"-user",{user:t.user});const n=Object.assign({},t);delete n.user;const i=Sr(n);await pe(this.storage,this.storageKey,i)}else{const n=Sr(t);await pe(this.storage,this.storageKey,n)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await B(this.storage,this.storageKey),await to(this.storage,this.storageKey),await B(this.storage,this.storageKey+"-user"),this.userStorage&&await B(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&U()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(t){console.error("removing visibilitychange callback failed",t)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),he);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const t=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const t=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,t&&clearTimeout(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async t=>{const{data:{session:r}}=t;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const n=Math.floor((r.expires_at*1e3-e)/he);this._debug("#_autoRefreshTokenTick()",`access token expires in ${n} ticks, a tick lasts ${he}ms, refresh threshold is ${dt} ticks`),n<=dt&&await this._callRefreshToken(r.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof yo)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const e=Date.now();try{await this._useSession(async t=>{const{data:{session:r}}=t;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const n=Math.floor((r.expires_at*1e3-e)/he);this._debug("#_autoRefreshTokenTick()",`access token expires in ${n} ticks, a tick lasts ${he}ms, refresh threshold is ${dt} ticks`),n<=dt&&await this._callRefreshToken(r.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!U()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const t=`#_onVisibilityChanged(${e})`;if(this._debug(t,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(t,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(t,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,r){let n=r==null?void 0:r.redirectTo,i=null,a=null,o=null;this.flowType==="pkce"&&([i,a,o]=await this._getCodeChallengeAndMethod(),n=this._maybeAppendFlowIdToRedirect(n,o));const l=[`provider=${encodeURIComponent(t)}`];if(n&&l.push(`redirect_to=${encodeURIComponent(n)}`),r!=null&&r.scopes&&l.push(`scopes=${encodeURIComponent(r.scopes)}`),i!=null&&a!=null){const c=new URLSearchParams({code_challenge:`${encodeURIComponent(i)}`,code_challenge_method:`${encodeURIComponent(a)}`});l.push(c.toString())}if(r!=null&&r.queryParams){const c=new URLSearchParams(r.queryParams);l.push(c.toString())}return r!=null&&r.skipBrowserRedirect&&l.push(`skip_http_redirect=${r.skipBrowserRedirect}`),{url:`${e}?${l.join("&")}`,flowId:o}}_maybeAppendFlowIdToRedirect(e,t){return!e||!t||!this.experimental.appendPkceFlowIdToRedirects?e??void 0:so(e,t)}async _getCodeChallengeAndMethod(e=!1){return ro(this.storage,this.storageKey,e,t=>this._debug("#_getCodeChallengeAndMethod()","evicted oldest pending PKCE verifier slot",t))}async _unenroll(e){try{return await this._useSession(async t=>{var r;const{data:n,error:i}=t;return i?this._returnResult({data:null,error:i}):await S(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(r=n==null?void 0:n.session)===null||r===void 0?void 0:r.access_token})})}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}async _enroll(e){try{return await this._useSession(async t=>{var r,n;const{data:i,error:a}=t;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:l,error:c}=await S(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token});return c?this._returnResult({data:null,error:c}):(e.factorType==="totp"&&l.type==="totp"&&(!((n=l==null?void 0:l.totp)===null||n===void 0)&&n.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),this._returnResult({data:l,error:null}))})}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}async _verify(e){const t=async()=>{try{return await this._useSession(async r=>{var n;const{data:i,error:a}=r;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?Cr(e.webauthn.credential_response):Rr(e.webauthn.credential_response)})}:{code:e.code}),{data:l,error:c}=await S(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:o,headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token});return c?this._returnResult({data:null,error:c}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+l.expires_in},l)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",l),this._returnResult({data:l,error:c}))})}catch(r){if(_(r))return this._returnResult({data:null,error:r});throw r}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,t):t()}async _challenge(e){const t=async()=>{try{return await this._useSession(async r=>{var n;const{data:i,error:a}=r;if(a)return this._returnResult({data:null,error:a});const o=await S(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token});if(o.error)return o;const{data:l}=o;if(l.type!=="webauthn")return{data:l,error:null};switch(l.webauthn.type){case"create":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:$r(l.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:Or(l.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(r){if(_(r))return this._returnResult({data:null,error:r});throw r}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,t):t()}async _challengeAndVerify(e){const{data:t,error:r}=await this._challenge({factorId:e.factorId});return r?this._returnResult({data:null,error:r}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){var e;const{data:{user:t},error:r}=await this.getUser();if(r)return{data:null,error:r};const n={all:[],phone:[],totp:[],webauthn:[]};for(const i of(e=t==null?void 0:t.factors)!==null&&e!==void 0?e:[])n.all.push(i),i.status==="verified"&&n[i.factor_type].push(i);return{data:n,error:null}}async _getAuthenticatorAssuranceLevel(e){var t,r,n,i;if(e)try{const{payload:p}=Ht(e);let g=null;p.aal&&(g=p.aal);let f=g;const{data:{user:y},error:v}=await this.getUser(e);if(v)return this._returnResult({data:null,error:v});((r=(t=y==null?void 0:y.factors)===null||t===void 0?void 0:t.filter(k=>k.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(f="aal2");const w=p.amr||[];return{data:{currentLevel:g,nextLevel:f,currentAuthenticationMethods:w},error:null}}catch(p){if(_(p))return this._returnResult({data:null,error:p});throw p}const{data:{session:a},error:o}=await this.getSession();if(o)return this._returnResult({data:null,error:o});if(!a)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:l}=Ht(a.access_token);let c=null;l.aal&&(c=l.aal);let h=c;((i=(n=a.user.factors)===null||n===void 0?void 0:n.filter(p=>p.status==="verified"))!==null&&i!==void 0?i:[]).length>0&&(h="aal2");const d=l.amr||[];return{data:{currentLevel:c,nextLevel:h,currentAuthenticationMethods:d},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{const{data:{session:r},error:n}=t;return n?this._returnResult({data:null,error:n}):r?await S(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:r.access_token,xform:i=>({data:i,error:null})}):this._returnResult({data:null,error:new N})})}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}async _approveAuthorization(e,t){try{return await this._useSession(async r=>{const{data:{session:n},error:i}=r;if(i)return this._returnResult({data:null,error:i});if(!n)return this._returnResult({data:null,error:new N});const a=await S(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:n.access_token,body:{action:"approve"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&U()&&!(t!=null&&t.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(r){if(_(r))return this._returnResult({data:null,error:r});throw r}}async _denyAuthorization(e,t){try{return await this._useSession(async r=>{const{data:{session:n},error:i}=r;if(i)return this._returnResult({data:null,error:i});if(!n)return this._returnResult({data:null,error:new N});const a=await S(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:n.access_token,body:{action:"deny"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&U()&&!(t!=null&&t.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(r){if(_(r))return this._returnResult({data:null,error:r});throw r}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:t},error:r}=e;return r?this._returnResult({data:null,error:r}):t?await S(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:n=>({data:n,error:null})}):this._returnResult({data:null,error:new N})})}catch(e){if(_(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{const{data:{session:r},error:n}=t;return n?this._returnResult({data:null,error:n}):r?(await S(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:r.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new N})})}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}async fetchJwk(e,t={keys:[]}){let r=t.keys.find(o=>o.kid===e);if(r)return r;const n=Date.now();if(r=this.jwks.keys.find(o=>o.kid===e),r&&this.jwks_cached_at+Ia>n)return r;const{data:i,error:a}=await S(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=n,r=i.keys.find(o=>o.kid===e),!r)?null:r}async getClaims(e,t={}){try{let r=e;if(!r){const{data:p,error:g}=await this.getSession();if(g||!p.session)return this._returnResult({data:null,error:g});r=p.session.access_token}const{header:n,payload:i,signature:a,raw:{header:o,payload:l}}=Ht(r);if(!(t!=null&&t.allowExpired))try{ao(i.exp)}catch(p){throw new Qt(p instanceof Error?p.message:"JWT validation failed")}const c=!n.alg||n.alg.startsWith("HS")||!n.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(n.kid,t!=null&&t.keys?{keys:t.keys}:t==null?void 0:t.jwks);if(!c){const{error:p}=await this.getUser(r);if(p)throw p;return{data:{claims:i,header:n,signature:a},error:null}}const h=oo(n.alg),u=await crypto.subtle.importKey("jwk",c,h,!0,["verify"]);if(!await crypto.subtle.verify(h,u,a,Ha(`${o}.${l}`)))throw new Qt("Invalid JWT signature");return{data:{claims:i,header:n,signature:a},error:null}}catch(r){if(_(r))return this._returnResult({data:null,error:r});throw r}}async signInWithPasskey(e){var t,r,n;K(this.experimental);try{if(!ts())return this._returnResult({data:null,error:new Y("Browser does not support WebAuthn",null)});const{data:i,error:a}=await this._startPasskeyAuthentication({options:{captchaToken:(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.captchaToken}});if(a||!i)return this._returnResult({data:null,error:a});const o=Or(i.options),l=(n=(r=e==null?void 0:e.options)===null||r===void 0?void 0:r.signal)!==null&&n!==void 0?n:Is.createNewAbortSignal(),{data:c,error:h}=await fn({publicKey:o,signal:l});if(h||!c)return this._returnResult({data:null,error:h??new Y("WebAuthn ceremony failed",null)});const u=Rr(c);return this._verifyPasskeyAuthentication({challengeId:i.challenge_id,credential:u})}catch(i){if(_(i))return this._returnResult({data:null,error:i});throw i}}async registerPasskey(e){var t,r;K(this.experimental);try{if(!ts())return this._returnResult({data:null,error:new Y("Browser does not support WebAuthn",null)});const{data:n,error:i}=await this._startPasskeyRegistration();if(i||!n)return this._returnResult({data:null,error:i});const a=$r(n.options),o=(r=(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.signal)!==null&&r!==void 0?r:Is.createNewAbortSignal(),{data:l,error:c}=await pn({publicKey:a,signal:o});if(c||!l)return this._returnResult({data:null,error:c??new Y("WebAuthn ceremony failed",null)});const h=Cr(l);return this._verifyPasskeyRegistration({challengeId:n.challenge_id,credential:h})}catch(n){if(_(n))return this._returnResult({data:null,error:n});throw n}}async _startPasskeyRegistration(){K(this.experimental);try{return await this._useSession(async e=>{const{data:{session:t},error:r}=e;if(r)return this._returnResult({data:null,error:r});if(!t)return this._returnResult({data:null,error:new N});const{data:n,error:i}=await S(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:t.access_token,body:{}});return i?this._returnResult({data:null,error:i}):this._returnResult({data:n,error:null})})}catch(e){if(_(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){K(this.experimental);try{return await this._useSession(async t=>{const{data:{session:r},error:n}=t;if(n)return this._returnResult({data:null,error:n});if(!r)return this._returnResult({data:null,error:new N});const{data:i,error:a}=await S(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:r.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}async _startPasskeyAuthentication(e){var t;K(this.experimental);try{const{data:r,error:n}=await S(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.captchaToken}}});return n?this._returnResult({data:null,error:n}):this._returnResult({data:r,error:null})}catch(r){if(_(r))return this._returnResult({data:null,error:r});throw r}}async _verifyPasskeyAuthentication(e){K(this.experimental);try{const{data:t,error:r}=await S(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:z});return r?this._returnResult({data:null,error:r}):(t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers("SIGNED_IN",t.session)),this._returnResult({data:t,error:null}))}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}async _listPasskeys(){K(this.experimental);try{return await this._useSession(async e=>{const{data:{session:t},error:r}=e;if(r)return this._returnResult({data:null,error:r});if(!t)return this._returnResult({data:null,error:new N});const{data:n,error:i}=await S(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:t.access_token,xform:a=>({data:a,error:null})});return i?this._returnResult({data:null,error:i}):this._returnResult({data:n,error:null})})}catch(e){if(_(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){K(this.experimental);try{return await this._useSession(async t=>{const{data:{session:r},error:n}=t;if(n)return this._returnResult({data:null,error:n});if(!r)return this._returnResult({data:null,error:new N});const{data:i,error:a}=await S(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:r.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}async _deletePasskey(e){K(this.experimental);try{return await this._useSession(async t=>{const{data:{session:r},error:n}=t;if(n)return this._returnResult({data:null,error:n});if(!r)return this._returnResult({data:null,error:new N});const{error:i}=await S(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:r.access_token,noResolveJson:!0});return i?this._returnResult({data:null,error:i}):this._returnResult({data:null,error:null})})}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}}Ot.nextInstanceID={};const Ro=Ot,Po="2.112.3";let pt="",rs;if(typeof Deno<"u"){var ws;pt="deno",rs=(ws=Deno.version)===null||ws===void 0?void 0:ws.deno}else if(typeof document<"u")pt="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")pt="react-native";else{var _s;pt="node";const s=globalThis.process;rs=s==null||(_s=s.version)===null||_s===void 0?void 0:_s.replace(/^v/,"")}const gn=[`runtime=${pt}`];rs&&gn.push(`runtime-version=${rs}`);const Io={"X-Client-Info":`supabase-js/${Po}; ${gn.join("; ")}`},Do={headers:Io},jo={schema:"public"},No={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},Lo={},Uo={enabled:!1,respectSamplingDecision:!0};function Mo(s){if(!s||typeof s!="string")return null;const e=s.split("-");if(e.length!==4)return null;const[t,r,n,i]=e;if(t.length!==2||r.length!==32||n.length!==16||i.length!==2)return null;const a=/^[0-9a-f]+$/i;return!a.test(t)||!a.test(r)||!a.test(n)||!a.test(i)||r==="00000000000000000000000000000000"||n==="0000000000000000"?null:{version:t,traceId:r,parentId:n,traceFlags:i,isSampled:(parseInt(i,16)&1)===1}}function Fo(s,e){if(!s||!e||e.length===0)return!1;let t;if(s instanceof URL)t=s;else try{t=new URL(s)}catch{return!1}for(const r of e)try{if(typeof r=="string"){if(Bo(t.hostname,r))return!0}else if(r instanceof RegExp){if(r.test(t.hostname))return!0}else if(typeof r=="function"&&r(t))return!0}catch{continue}return!1}function Bo(s,e){if(e===s)return!0;if(e.startsWith("*.")){const t=e.slice(2);if(s.endsWith(t)&&(s===t||s.endsWith("."+t)))return!0}return!1}function Ho(s){const e=[];try{const t=new URL(s);e.push(t.hostname)}catch{}return e.push("*.supabase.co","*.supabase.in"),e.push("localhost","127.0.0.1","[::1]"),e}function Ct(s){"@babel/helpers - typeof";return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ct(s)}function qo(s,e){if(Ct(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var r=t.call(s,e);if(Ct(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function zo(s){var e=qo(s,"string");return Ct(e)=="symbol"?e:e+""}function Wo(s,e,t){return(e=zo(e))in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function Pr(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(s,n).enumerable})),t.push.apply(t,r)}return t}function P(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Pr(Object(t),!0).forEach(function(r){Wo(s,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):Pr(Object(t)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(t,r))})}return s}const Vo=s=>s?(...e)=>s(...e):(...e)=>fetch(...e),Ko=()=>Headers,mn=s=>s.startsWith("sb_publishable_")||s.startsWith("sb_secret_"),Jo="sb_temp_",Ir=new Set,Go=s=>{var e,t;if(!s.startsWith("sb_")||mn(s)||s.startsWith(Jo))return;const r=(e=(t=s.match(/^sb_[a-zA-Z0-9]+_/))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:"unknown";Ir.has(r)||(Ir.add(r),console.warn("@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type."))},Dr=(s,e,t,r,n,i)=>{const a=Vo(r),o=Ko(),l=(n==null?void 0:n.enabled)===!0,c=(n==null?void 0:n.respectSamplingDecision)!==!1,h=l?Ho(e):null,u=!(i!=null&&i.omitApiKeyAsBearer&&mn(s));return async(d,p)=>{const g=await t();let f=new o(p==null?void 0:p.headers);if(f.has("apikey")||f.set("apikey",s),!f.has("Authorization")){const y=g??(u?s:null);y&&f.set("Authorization",`Bearer ${y}`)}if(h){const y=Yo(d,h,c);y&&(y.traceparent&&!f.has("traceparent")&&f.set("traceparent",y.traceparent),y.tracestate&&!f.has("tracestate")&&f.set("tracestate",y.tracestate),y.baggage&&!f.has("baggage")&&f.set("baggage",y.baggage))}return a(d,P(P({},p),{},{headers:f}))}};let jr=!1,Nr=!1;function Yo(s,e,t){const r=Jn();if(!r)return jr||(jr=!0,console.warn("@supabase/supabase-js: tracePropagation is enabled but the tracing runtime is not loaded, so trace headers will not be attached. Add `import '@supabase/supabase-js/tracing'` at your application entry point (requires the OpenTelemetry API package to be installed). The CDN/UMD build does not support trace propagation.")),null;if(!Fo(typeof s=="string"||s instanceof URL?s:s.url,e))return null;const n=r();if(!n||!n.traceparent){var i;if(!(n==null||(i=n.carrierKeys)===null||i===void 0)&&i.length&&!Nr){Nr=!0;const a=n.carrierKeys.includes("sentry-trace")?" Sentry detected: set `propagateTraceparent: true` in Sentry.init() to emit it.":" Configure your tracing SDK to emit W3C trace context on outgoing requests.";console.warn(`@supabase/supabase-js: tracePropagation is enabled and a tracing SDK is active, but its propagator wrote [${n.carrierKeys.join(", ")}] and no W3C traceparent header, so trace headers will not be attached.`+a)}return null}if(t){const a=Mo(n.traceparent);if(a&&!a.isSampled)return{traceparent:n.traceparent}}return n}function Lr(s){return typeof s=="boolean"?{enabled:s}:s}function Xo(s){return s.endsWith("/")?s:s+"/"}function Qo(s,e){var t,r,n,i,a,o;const{db:l,auth:c,realtime:h,global:u}=s,{db:d,auth:p,realtime:g,global:f}=e,y=Lr(s.tracePropagation),v=Lr(e.tracePropagation),b={db:P(P({},d),l),auth:P(P({},p),c),realtime:P(P({},g),h),storage:{},global:P(P(P({},f),u),{},{headers:P(P({},(t=f==null?void 0:f.headers)!==null&&t!==void 0?t:{}),(r=u==null?void 0:u.headers)!==null&&r!==void 0?r:{})}),tracePropagation:{enabled:(n=(i=y==null?void 0:y.enabled)!==null&&i!==void 0?i:v==null?void 0:v.enabled)!==null&&n!==void 0?n:!1,respectSamplingDecision:(a=(o=y==null?void 0:y.respectSamplingDecision)!==null&&o!==void 0?o:v==null?void 0:v.respectSamplingDecision)!==null&&a!==void 0?a:!0},accessToken:async()=>""};return s.accessToken?b.accessToken=s.accessToken:delete b.accessToken,b}function Zo(s){const e=s==null?void 0:s.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(Xo(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var el=class extends Ro{constructor(s){super(s)}},tl=class{constructor(s,e,t){var r,n;this.supabaseUrl=s,this.supabaseKey=e;const i=Zo(s);if(!e)throw new Error("supabaseKey is required.");Go(e),this.realtimeUrl=new URL("realtime/v1",i),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",i),this.storageUrl=new URL("storage/v1",i),this.functionsUrl=new URL("functions/v1",i);const a=`sb-${i.hostname.split(".")[0]}-auth-token`,o={db:jo,realtime:Lo,auth:P(P({},No),{},{storageKey:a}),global:Do,tracePropagation:Uo},l=Qo(t??{},o);if(this.settings=l,this.storageKey=(r=l.auth.storageKey)!==null&&r!==void 0?r:"",this.headers=(n=l.global.headers)!==null&&n!==void 0?n:{},l.accessToken)this.accessToken=l.accessToken,this.auth=new Proxy({},{get:(h,u)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(u)} is not possible`)}});else{var c;this.auth=this._initSupabaseAuthClient((c=l.auth)!==null&&c!==void 0?c:{},this.headers,l.global.fetch)}this.fetch=Dr(e,s,this._getSessionToken.bind(this),l.global.fetch,l.tracePropagation),this.functionsFetch=Dr(e,s,this._getSessionToken.bind(this),l.global.fetch,l.tracePropagation,{omitApiKeyAsBearer:!0}),this.realtime=this._initRealtimeClient(P({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},l.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(h=>this.realtime.setAuth(h)).catch(h=>console.warn("Failed to set initial Realtime auth token:",h)),this.rest=new oi(new URL("rest/v1",i).href,{headers:this.headers,schema:l.db.schema,fetch:this.fetch,timeout:l.db.timeout,urlLengthLimit:l.db.urlLengthLimit,retry:l.db.retry}),this.storage=new xa(this.storageUrl.href,this.headers,this.fetch,t==null?void 0:t.storage),l.accessToken||this._listenForAuthEvents()}get functions(){return new Qn(this.functionsUrl.href,{headers:this.headers,customFetch:this.functionsFetch})}from(s){return this.rest.from(s)}schema(s){return this.rest.schema(s)}rpc(s,e={},t={head:!1,get:!1,count:void 0}){return this.rest.rpc(s,e,t)}channel(s,e={config:{}}){return this.realtime.channel(s,e)}getChannels(){return this.realtime.getChannels()}removeChannel(s){return this.realtime.removeChannel(s)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getSessionToken(){var s=this,e,t;if(s.accessToken)return await s.accessToken();const{data:r}=await s.auth.getSession();return(e=(t=r.session)===null||t===void 0?void 0:t.access_token)!==null&&e!==void 0?e:null}async _getAccessToken(){var s=this,e;return(e=await s._getSessionToken())!==null&&e!==void 0?e:s.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:s,persistSession:e,detectSessionInUrl:t,storage:r,userStorage:n,storageKey:i,flowType:a,lock:o,debug:l,throwOnError:c,experimental:h,lockAcquireTimeout:u,skipAutoInitialize:d},p,g){const f={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new el({url:this.authUrl.href,headers:P(P({},f),p),storageKey:i,autoRefreshToken:s,persistSession:e,detectSessionInUrl:t,storage:r,userStorage:n,flowType:a,lock:o,debug:l,throwOnError:c,experimental:h,fetch:g,lockAcquireTimeout:u,skipAutoInitialize:d,hasCustomAuthorizationHeader:Object.keys(this.headers).some(y=>y.toLowerCase()==="authorization")})}_initRealtimeClient(s){return new Yi(this.realtimeUrl.href,P(P({},s),{},{params:P(P({},{apikey:this.supabaseKey}),s==null?void 0:s.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((s,e)=>{this._handleTokenChanged(s,"CLIENT",e==null?void 0:e.access_token)})}_handleTokenChanged(s,e,t){(s==="TOKEN_REFRESHED"||s==="SIGNED_IN"||s==="INITIAL_SESSION")&&this.changedAccessToken!==t?(this.changedAccessToken=t,this.realtime.setAuth(t)):s==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const sl=(s,e,t)=>new tl(s,e,t);function rl(){if(typeof window<"u"||globalThis.Deno!==void 0)return!1;const s=globalThis.process;if(!s)return!1;const e=s.version;if(e==null)return!1;const t=e.match(/^v(\d+)\./);return t?parseInt(t[1],10)<=20:!1}rl()&&console.warn("⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715");function nl(){try{return"https://pmipcwurbabnqylquwoc.supabase.co"}catch{return}}function il(){try{return"sb_publishable_Lqb3d2VqAphbfGt3UBnang_om5sQBVk"}catch{return}}class al{constructor(e,t){this.client=null,this.currentUser=null,this.currentAccessToken=null,this.isLoading=!0,this.listeners=new Set;const r=e!==void 0?e:nl(),n=t!==void 0?t:il();if(r&&n)try{this.client=sl(r,n,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!0}}),this.client.auth.getSession().then(({data:i})=>{this.handleSession(i.session),this.isLoading=!1,this.notify()}),this.client.auth.onAuthStateChange((i,a)=>{this.handleSession(a),this.isLoading=!1,this.notify()})}catch(i){console.error("Failed to initialize Supabase Auth client:",i),this.isLoading=!1}else this.isLoading=!1}handleSession(e){e&&e.user?(this.currentUser={id:e.user.id,email:e.user.email},this.currentAccessToken=e.access_token):(this.currentUser=null,this.currentAccessToken=null)}notify(){const e=this.getAuthState();this.listeners.forEach(t=>t(e))}subscribe(e){return this.listeners.add(e),e(this.getAuthState()),()=>{this.listeners.delete(e)}}isConfigured(){return this.client!==null}getAuthState(){return{user:this.currentUser,accessToken:this.currentAccessToken,isAuthenticated:!!this.currentUser&&!!this.currentAccessToken,isLoading:this.isLoading}}getUser(){return this.currentUser}async getAccessToken(){if(!this.client)return null;try{const{data:e}=await this.client.auth.getSession();if(e.session)return this.currentAccessToken=e.session.access_token,e.session.access_token}catch{}return this.currentAccessToken}async signUp(e,t){if(!this.client)return{success:!1,message:"Supabase credentials are not configured."};try{const{data:r,error:n}=await this.client.auth.signUp({email:e.trim(),password:t});return n?{success:!1,message:n.message}:{success:!0,user:r.user||void 0}}catch(r){return{success:!1,message:r instanceof Error?r.message:String(r)}}}async signInWithPassword(e,t){if(!this.client)return{success:!1,message:"Supabase credentials are not configured."};try{const{data:r,error:n}=await this.client.auth.signInWithPassword({email:e.trim(),password:t});return n?{success:!1,message:n.message}:(this.handleSession(r.session),this.notify(),{success:!0})}catch(r){return{success:!1,message:r instanceof Error?r.message:String(r)}}}async signInWithOtp(e){if(!this.client)return{success:!1,message:"Supabase credentials are not configured."};try{const{error:t}=await this.client.auth.signInWithOtp({email:e.trim()});return t?{success:!1,message:t.message}:{success:!0,message:"Check your email for the magic login link!"}}catch(t){return{success:!1,message:t instanceof Error?t.message:String(t)}}}async signOut(){if(!this.client)return this.currentUser=null,this.currentAccessToken=null,this.notify(),{success:!0};try{const{error:e}=await this.client.auth.signOut();return e?{success:!1,message:e.message}:(this.currentUser=null,this.currentAccessToken=null,this.notify(),{success:!0})}catch(e){return{success:!1,message:e instanceof Error?e.message:String(e)}}}}const G=new al,Ss={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_SUPABASE_ANON_KEY:"sb_publishable_Lqb3d2VqAphbfGt3UBnang_om5sQBVk",VITE_SUPABASE_URL:"https://pmipcwurbabnqylquwoc.supabase.co",VITE_SYNC_URL:"https://practice-tracker-sync.warmsynthsiloveyou.workers.dev"},$e=[{id:"guitar",name:"Guitar",color:"#6B7F6E",tier:"primary",updatedAt:new Date(0).toISOString()},{id:"piano",name:"Piano",color:"#8A7B94",tier:"primary",updatedAt:new Date(0).toISOString()},{id:"acoustic",name:"Acoustic Guitar",color:"#9FAF95",tier:"secondary",updatedAt:new Date(0).toISOString()},{id:"bass",name:"Bass",color:"#7D6E7F",tier:"secondary",updatedAt:new Date(0).toISOString()},{id:"drumming",name:"Finger Drumming",color:"#A98F72",tier:"secondary",updatedAt:new Date(0).toISOString()}],ol={id:"_removed",name:"Archived Instrument",color:"#C3C1B7",tier:"secondary",archived:!0,updatedAt:new Date(0).toISOString()},V={SESSIONS:"ptSessionsV2",INSTRUMENTS:"ptInstrumentsV1",ACTIVE:"ptActiveSessionV1",SETTINGS:"ptSettingsV1",TOMBSTONES:"ptTombstonesV1"};function ll(){try{return"https://practice-tracker-sync.warmsynthsiloveyou.workers.dev"}catch{return}}function cl(){try{return(Ss==null?void 0:Ss.VITE_SYNC_PASSCODE)||void 0}catch{return}}function Je(){try{if(typeof window<"u"&&window.localStorage)return window.localStorage;if(typeof localStorage<"u")return localStorage}catch{}return null}class ul{constructor(){this.instruments=[],this.sessions=[],this.activeSession=null,this.settings={soundEnabled:!0,hapticsEnabled:!0},this.tombstones=[],this.syncStatus="local",this.syncErrorMessage=null,this.listeners=new Set,this.currentSyncPromise=null,this.loadFromStorage(),this.initAuth()}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}notify(){this.listeners.forEach(e=>e())}initAuth(){G.subscribe(e=>{var t;if(!e.isLoading)if(e.isAuthenticated&&((t=e.user)!=null&&t.email)){const r=this.settings.userEmail;this.settings.userEmail=e.user.email,this.persistSettings(),r!==e.user.email&&this.syncWithCloud(!0).catch(n=>{console.warn("Initial cloud sync error after sign-in:",n)})}else!e.isAuthenticated&&this.settings.userEmail&&(this.instruments=[...$e],this.sessions=[],this.activeSession=null,this.tombstones=[],this.settings.userEmail=void 0,this.settings.lastSyncedAt=void 0,this.syncStatus="local",this.syncErrorMessage=null,this.persistInstruments(),this.persistSessions(),this.persistActive(),this.persistTombstones(),this.persistSettings(),this.notify())})}getEffectiveWorkerUrl(){return this.settings.workerUrl||ll()}getEffectiveSyncPasscode(){return this.settings.syncPasscode||cl()}getSyncAuthHeaderSync(){const e=G.getAuthState();return e.accessToken?`Bearer ${e.accessToken}`:this.getEffectiveSyncPasscode()}async getEffectiveAuthHeader(){const e=this.getSyncAuthHeaderSync();if(e)return e;const t=await G.getAccessToken();if(t)return`Bearer ${t}`}isCloudSyncConfigured(){const e=!!this.getEffectiveWorkerUrl(),t=G.getAuthState().isAuthenticated||!!this.getEffectiveSyncPasscode();return e&&t}getUserEmail(){var e;return((e=G.getUser())==null?void 0:e.email)||this.settings.userEmail}isAuthenticated(){return G.getAuthState().isAuthenticated}async signOut(){await G.signOut()}loadFromStorage(){const e=Je();if(!e){this.instruments=[...$e],this.sessions=[],this.syncStatus="local";return}try{const t=e.getItem(V.INSTRUMENTS);if(t){const o=JSON.parse(t);Array.isArray(o)&&o.length>0?this.instruments=o.map(l=>({...l,updatedAt:l.updatedAt||new Date(0).toISOString()})):this.instruments=[...$e]}else this.instruments=[...$e],this.persistInstruments();const r=e.getItem(V.SESSIONS);if(r){const o=JSON.parse(r);Array.isArray(o)?this.sessions=o.map(l=>({...l,updatedAt:l.updatedAt||new Date(0).toISOString()})):this.sessions=[]}else this.sessions=[];const n=e.getItem(V.ACTIVE);if(n){const o=JSON.parse(n);o&&o.instrumentId&&o.startedAt&&(this.activeSession=o)}const i=e.getItem(V.TOMBSTONES);if(i){const o=JSON.parse(i);Array.isArray(o)&&(this.tombstones=o)}const a=e.getItem(V.SETTINGS);a&&(this.settings={...this.settings,...JSON.parse(a)}),this.isCloudSyncConfigured()?this.syncStatus=typeof window<"u"&&typeof navigator<"u"&&navigator.onLine===!1?"offline":"synced":this.syncStatus="local"}catch(t){console.error("Error loading practice store from storage:",t),this.instruments=[...$e],this.sessions=[],this.syncStatus="local"}}persistInstruments(){try{const e=Je();e==null||e.setItem(V.INSTRUMENTS,JSON.stringify(this.instruments))}catch(e){console.error("Error saving instruments:",e)}}persistSessions(){try{const e=Je();e==null||e.setItem(V.SESSIONS,JSON.stringify(this.sessions))}catch(e){console.error("Error saving sessions:",e)}}persistActive(){try{const e=Je();if(!e)return;this.activeSession?e.setItem(V.ACTIVE,JSON.stringify(this.activeSession)):e.removeItem(V.ACTIVE)}catch(e){console.error("Error saving active session:",e)}}persistSettings(){try{const e=Je();e==null||e.setItem(V.SETTINGS,JSON.stringify(this.settings))}catch(e){console.error("Error saving settings:",e)}}persistTombstones(){try{const e=Je();e==null||e.setItem(V.TOMBSTONES,JSON.stringify(this.tombstones))}catch(e){console.error("Error saving tombstones:",e)}}getActiveInstruments(){return this.instruments.filter(e=>!e.archived)}getAllInstruments(){return[...this.instruments]}getInstrument(e){return this.instruments.find(t=>t.id===e)||ol}getSessions(){return[...this.sessions]}getActiveSession(){return this.activeSession}getSettings(){return{...this.settings}}getSyncStatus(){return this.syncStatus}getSyncErrorMessage(){return this.syncErrorMessage}getLastSyncedAt(){return this.settings.lastSyncedAt||null}startSession(e){this.activeSession||(this.activeSession={instrumentId:e,startedAt:Date.now()},this.persistActive(),Wn(this.settings.soundEnabled),fs(20,this.settings.hapticsEnabled),this.notify())}endSession(){if(!this.activeSession)return null;const e=Date.now(),t=Math.max(1,Math.round((e-this.activeSession.startedAt)/6e4)),r=new Date(e).toISOString(),n={id:"s-"+Math.random().toString(36).slice(2,9)+"-"+Date.now().toString(36),instrumentId:this.activeSession.instrumentId,start:new Date(this.activeSession.startedAt).toISOString(),end:r,duration:t,updatedAt:r};return this.sessions=[n,...this.sessions],this.activeSession=null,this.persistSessions(),this.persistActive(),yt(this.settings.soundEnabled),fs([30,50,30],this.settings.hapticsEnabled),this.notify(),this.triggerBackgroundSync(),n}discardSession(){this.activeSession&&(this.activeSession=null,this.persistActive(),Ce(this.settings.soundEnabled),this.notify())}logManualSession(e,t,r,n){const i=new Date(t.getTime()+Math.max(1,r)*6e4),a=new Date().toISOString(),o={id:"m-"+Math.random().toString(36).slice(2,9)+"-"+Date.now().toString(36),instrumentId:e,start:t.toISOString(),end:i.toISOString(),duration:Math.max(1,Math.round(r)),notes:(n==null?void 0:n.trim())||void 0,updatedAt:a};return this.sessions=[o,...this.sessions],this.persistSessions(),yt(this.settings.soundEnabled),fs(25,this.settings.hapticsEnabled),this.notify(),this.triggerBackgroundSync(),o}updateSession(e){const t=new Date().toISOString(),r={...e,updatedAt:t};this.sessions=this.sessions.map(n=>n.id===e.id?r:n),this.persistSessions(),Ce(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}deleteSession(e){const t=new Date().toISOString();this.sessions=this.sessions.filter(r=>r.id!==e),this.tombstones=[...this.tombstones.filter(r=>r.id!==e),{id:e,type:"session",deletedAt:t}],this.persistSessions(),this.persistTombstones(),Ce(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}addInstrument(e,t,r){const n=e.trim(),i=Fn(n)+"-"+Math.random().toString(36).slice(2,6),a=new Date().toISOString(),o={id:i,name:n,color:t,tier:r,updatedAt:a};return this.instruments=[...this.instruments,o],this.persistInstruments(),Ce(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync(),o}updateInstrument(e){const t=new Date().toISOString(),r={...e,updatedAt:t};this.instruments=this.instruments.map(n=>n.id===e.id?r:n),this.persistInstruments(),Ce(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}removeInstrument(e){if(this.getActiveInstruments().length<=1)return;this.activeSession&&this.activeSession.instrumentId===e&&(this.activeSession=null,this.persistActive());const r=new Date().toISOString();this.sessions.some(i=>i.instrumentId===e)?this.instruments=this.instruments.map(i=>i.id===e?{...i,archived:!0,updatedAt:r}:i):(this.instruments=this.instruments.filter(i=>i.id!==e),this.tombstones=[...this.tombstones.filter(i=>i.id!==e),{id:e,type:"instrument",deletedAt:r}],this.persistTombstones()),this.persistInstruments(),Ce(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}async testConnection(e,t){const r=e!==void 0?e:this.getEffectiveWorkerUrl()||"";let n=t;return n===void 0&&(n=await this.getEffectiveAuthHeader()),Qs.testConnection(r,n)}triggerBackgroundSync(){this.isCloudSyncConfigured()&&!this.currentSyncPromise&&this.syncWithCloud().catch(e=>{console.warn("Background sync error:",e)})}async syncWithCloud(e=!1){if(this.currentSyncPromise){if(!e)return this.currentSyncPromise;await this.currentSyncPromise.catch(()=>{})}const t=this.getEffectiveWorkerUrl();if(!t)return this.syncStatus="local",this.notify(),{success:!0,message:"Local only mode (no worker configured)"};if(typeof window<"u"&&typeof navigator<"u"&&navigator.onLine===!1)return this.syncStatus="offline",this.notify(),{success:!1,message:"Device is offline"};this.currentSyncPromise=this.performSync(t,e);try{return await this.currentSyncPromise}finally{this.currentSyncPromise=null}}async performSync(e,t){this.syncStatus="syncing",this.syncErrorMessage=null,this.notify();try{const r=this.getSyncAuthHeaderSync(),n=t?null:this.settings.lastSyncedAt||null,i=new Set(this.tombstones.map(d=>d.id)),a=t||!n?this.instruments:this.instruments.filter(d=>!d.updatedAt||d.updatedAt>n),o=t||!n?this.sessions:this.sessions.filter(d=>!d.updatedAt||d.updatedAt>n),l={lastSyncedAt:n,instruments:a,sessions:o,tombstones:[...this.tombstones]},c=await Qs.sync(e,r,l),h=new Map(this.instruments.map(d=>[d.id,d]));for(const d of c.instruments){const p=h.get(d.id);if(!p)h.set(d.id,d);else{const g=p.updatedAt?new Date(p.updatedAt).getTime():0;(d.updatedAt?new Date(d.updatedAt).getTime():0)>=g&&h.set(d.id,{...p,...d})}}const u=new Map(this.sessions.map(d=>[d.id,d]));for(const d of c.sessions){const p=u.get(d.id);if(!p)u.set(d.id,d);else{const g=p.updatedAt?new Date(p.updatedAt).getTime():0;(d.updatedAt?new Date(d.updatedAt).getTime():0)>=g&&u.set(d.id,{...p,...d})}}for(const d of c.tombstones)d.type==="instrument"?h.delete(d.id):d.type==="session"&&u.delete(d.id);return this.instruments=Array.from(h.values()),this.sessions=Array.from(u.values()).sort((d,p)=>new Date(p.start).getTime()-new Date(d.start).getTime()),this.tombstones=this.tombstones.filter(d=>!i.has(d.id)),this.settings.lastSyncedAt=c.syncedAt,this.syncStatus="synced",this.syncErrorMessage=null,this.persistInstruments(),this.persistSessions(),this.persistTombstones(),this.persistSettings(),this.notify(),{success:!0}}catch(r){const n=r instanceof Error?r.message:String(r);return console.error("PracticeStore sync failed:",n),this.syncStatus="error",this.syncErrorMessage=n,this.notify(),{success:!1,message:n}}}disconnectCloudSync(){this.settings.workerUrl=void 0,this.settings.syncPasscode=void 0,this.settings.lastSyncedAt=void 0,this.syncStatus="local",this.syncErrorMessage=null,this.persistSettings(),this.notify()}updateSettings(e){this.settings={...this.settings,...e},this.persistSettings(),this.isCloudSyncConfigured()?this.syncStatus="synced":this.syncStatus="local",this.notify()}exportBackup(){const e={version:2,exportedAt:new Date().toISOString(),instruments:this.instruments,sessions:this.sessions,settings:this.settings};return JSON.stringify(e,null,2)}importBackup(e){try{const t=JSON.parse(e);if(!t||!Array.isArray(t.instruments)&&!Array.isArray(t.sessions))return{success:!1,message:"Invalid backup file format."};if(Array.isArray(t.instruments)&&t.instruments.length>0&&(this.instruments=t.instruments.map(r=>({...r,updatedAt:r.updatedAt||new Date().toISOString()})),this.persistInstruments()),Array.isArray(t.sessions)&&(this.sessions=t.sessions.map(r=>({...r,updatedAt:r.updatedAt||new Date().toISOString()})),this.persistSessions()),t.settings&&typeof t.settings=="object"){const{soundEnabled:r,hapticsEnabled:n}=t.settings;this.settings={...this.settings,soundEnabled:typeof r=="boolean"?r:this.settings.soundEnabled,hapticsEnabled:typeof n=="boolean"?n:this.settings.hapticsEnabled},this.persistSettings()}return this.activeSession=null,this.persistActive(),this.notify(),this.triggerBackgroundSync(),{success:!0,message:"Backup successfully restored."}}catch(t){return{success:!1,message:"Failed to parse JSON file: "+String(t)}}}loadDemoData(){this.instruments=[...$e],this.persistInstruments();const e=Q(new Date),t=[],r=new Date().toISOString();for(let a=33;a>=1;a--){const o=X(e,-a),l=o.getDay();if(!(Math.random()<.12)){if(l>=1&&l<=5){const c=Math.random()<.7?["guitar","piano"]:[Math.random()<.5?"guitar":"piano"];let h=7;c.forEach(u=>{const d=new Date(o);d.setHours(h,30+Math.floor(Math.random()*20),0,0);const p=12+Math.floor(Math.random()*25),g=new Date(d.getTime()+p*6e4);t.push({id:"seed-"+Math.random().toString(36).slice(2,8),instrumentId:u,start:d.toISOString(),end:g.toISOString(),duration:p,updatedAt:r}),h+=1})}else if(Math.random()<.75){const c=["acoustic","bass","drumming"][Math.floor(Math.random()*3)],h=new Date(o);h.setHours(11,Math.floor(Math.random()*40),0,0);const u=20+Math.floor(Math.random()*30),d=new Date(h.getTime()+u*6e4);t.push({id:"seed-"+Math.random().toString(36).slice(2,8),instrumentId:c,start:h.toISOString(),end:d.toISOString(),duration:u,updatedAt:r})}}}const n=new Date(e);n.setHours(7,40,0,0),t.unshift({id:"seed-today-guitar",instrumentId:"guitar",start:n.toISOString(),end:new Date(n.getTime()+22*6e4).toISOString(),duration:22,updatedAt:r});const i=new Date(e);i.setHours(8,15,0,0),t.unshift({id:"seed-today-piano",instrumentId:"piano",start:i.toISOString(),end:new Date(i.getTime()+18*6e4).toISOString(),duration:18,updatedAt:r}),this.sessions=t,this.activeSession=null,this.persistSessions(),this.persistActive(),this.notify(),this.triggerBackgroundSync()}clearAllData(){this.instruments=[...$e],this.sessions=[],this.activeSession=null,this.tombstones=[],this.persistInstruments(),this.persistSessions(),this.persistTombstones(),this.persistActive(),this.notify()}}const x=new ul;class hl{constructor(e=6e4,t=2e3){this.isRunning=!1,this.heartbeatTimer=null,this.lastTriggeredAt=0,this.onVisibilityChangeHandler=()=>this.handleVisibilityChange(),this.onFocusHandler=()=>this.handleWindowFocus(),this.onOnlineHandler=()=>this.handleOnline(),this.onOfflineHandler=()=>this.handleOffline(),this.heartbeatIntervalMs=e,this.debounceMs=t}start(){this.isRunning||(this.isRunning=!0,typeof document<"u"&&document.addEventListener("visibilitychange",this.onVisibilityChangeHandler),typeof window<"u"&&(window.addEventListener("focus",this.onFocusHandler),window.addEventListener("online",this.onOnlineHandler),window.addEventListener("offline",this.onOfflineHandler)),this.startHeartbeat(),this.triggerSync())}stop(){this.isRunning&&(this.isRunning=!1,typeof document<"u"&&document.removeEventListener("visibilitychange",this.onVisibilityChangeHandler),typeof window<"u"&&(window.removeEventListener("focus",this.onFocusHandler),window.removeEventListener("online",this.onOnlineHandler),window.removeEventListener("offline",this.onOfflineHandler)),this.stopHeartbeat())}triggerSync(e=!1){const t=Date.now();!e&&t-this.lastTriggeredAt<this.debounceMs||(this.lastTriggeredAt=t,x.isCloudSyncConfigured()&&x.triggerBackgroundSync())}handleVisibilityChange(){typeof document<"u"&&document.visibilityState==="visible"&&this.triggerSync()}handleWindowFocus(){this.triggerSync()}handleOnline(){this.triggerSync(!0)}handleOffline(){this.triggerSync()}startHeartbeat(){this.stopHeartbeat(),this.heartbeatTimer=setInterval(()=>{(typeof document>"u"||document.visibilityState==="visible")&&this.triggerSync()},this.heartbeatIntervalMs)}stopHeartbeat(){this.heartbeatTimer!==null&&(clearInterval(this.heartbeatTimer),this.heartbeatTimer=null)}}const Ur=new hl,ve=ee`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }

  button, input, select, textarea {
    font-family: inherit;
  }

  .btn {
    border: none;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.1s ease, opacity 0.15s ease;
  }

  .btn:active {
    transform: scale(0.97);
  }

  .btn-primary {
    background: #23241F;
    color: #F2F1EC;
    height: 46px;
    width: 100%;
  }

  .btn-secondary {
    background: #E1E1DB;
    color: #23241F;
    height: 42px;
  }

  .btn-danger {
    background: #C95A54;
    color: #FFF;
    height: 42px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 14px;
  }

  .form-label {
    font-size: 11px;
    font-weight: 700;
    color: #767668;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .form-input {
    width: 100%;
    border: 1px solid #E4E3DC;
    border-radius: 10px;
    padding: 10px 12px;
    font-size: 14px;
    background: #FBFBF9;
    color: #23241F;
    outline: none;
    transition: border-color 0.15s ease;
  }

  .form-input:focus {
    border-color: #23241F;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(35, 36, 31, 0.45);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;
    animation: fadeIn 0.15s ease-out;
  }

  .modal-card {
    background: #EDEDE9;
    border-radius: 24px;
    width: 100%;
    max-width: 340px;
    padding: 22px;
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.18);
    color: #23241F;
    max-height: 85vh;
    overflow-y: auto;
    animation: slideUp 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .modal-title {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close-btn {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #E1E1DB;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #767668;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideUp {
    from { transform: translateY(12px) scale(0.98); opacity: 0; }
    to { transform: translateY(0) scale(1); opacity: 1; }
  }
`,de=[1,3,7,14,30],Oe=5;function dl(s,e){const t=Q(s).getTime(),r=Q(e).getTime();return Math.round((t-r)/(1e3*60*60*24))}function pl(s,e,t=new Date){const r=Q(t),n=e.filter(b=>b.instrumentId===s&&!b.deletedAt).sort((b,w)=>new Date(b.start).getTime()-new Date(w.start).getTime());if(n.length===0)return{instrumentId:s,step:0,maxSteps:Oe,intervalDays:de[0],lastPracticedAt:null,nextDueAt:null,daysRemaining:0,status:"new",isDueToday:!1,isOverdue:!1,cycleCount:0,label:"New · Ready for Step 1"};const i=[],a=new Set;for(const b of n){const w=Q(new Date(b.start)),k=fe(w);a.has(k)||(a.add(k),i.push(w))}let o=0,l=null,c=0;for(let b=0;b<i.length;b++){const w=i[b];if(b===0){o=1;const k=de[0];l=X(w,k)}else if(l?w.getTime()<=l.getTime():!0)if(o>=Oe){c++,o=1;const T=de[0];l=X(w,T)}else{o++;const T=de[o-1];l=X(w,T)}else{o=1;const T=de[0];l=X(w,T)}}const h=n[n.length-1].start,u=l?l.toISOString():null,d=de[Math.max(0,Math.min(o-1,Oe-1))],p=l?dl(l,r):0,g=p<0,f=p===0;let y="cold";g?y="overdue":f?y="due":p===1?y="hot":p<=3?y="warm":p<=7?y="cool":y="cold";let v;return g?v=`Overdue by ${Math.abs(p)}d (was Step ${o}: ${d}d)`:f?v=`Due today · Step ${o}/${Oe} (${d}d)`:p===1?v=`Due tomorrow · Step ${o}/${Oe} (${d}d)`:v=`Step ${o}/${Oe} · Due in ${p}d (${d}d)`,{instrumentId:s,step:o,maxSteps:Oe,intervalDays:d,lastPracticedAt:h,nextDueAt:u,daysRemaining:p,status:y,isDueToday:f,isOverdue:g,cycleCount:c,label:v}}function yn(s,e,t=new Date){const r=new Map;for(const n of s)r.set(n.id,pl(n.id,e,t));return r}function fl(s){switch(s){case"due":return"#E05D44";case"overdue":return"#D94838";case"hot":return"#E58E38";case"warm":return"#D4A340";case"cool":return"#6B7F6E";case"cold":return"#8A887E";case"new":default:return"#A3A297"}}var gl=Object.defineProperty,ml=Object.getOwnPropertyDescriptor,It=(s,e,t,r)=>{for(var n=r>1?void 0:r?ml(e,t):e,i=s.length-1,a;i>=0;i--)(a=s[i])&&(n=(r?a(e,t,n):a(n))||n);return r&&n&&gl(e,t,n),n};let Ue=class extends H{constructor(){super(...arguments),this.instruments=[],this.sessions=[],this.activeSession=null,this.now=Date.now()}handleStart(s){this.dispatchEvent(new CustomEvent("start-session",{detail:{instrumentId:s},bubbles:!0,composed:!0}))}handleEnd(){this.dispatchEvent(new CustomEvent("end-session",{bubbles:!0,composed:!0}))}handleDiscard(){this.dispatchEvent(new CustomEvent("discard-session",{bubbles:!0,composed:!0}))}handleOpenManual(){this.dispatchEvent(new CustomEvent("open-manual-log",{bubbles:!0,composed:!0}))}render(){const s=Q(new Date),{currentStreak:e,consistency30d:t}=qn(this.sessions),r=ks("#6B7F6E",t),n=this.sessions.filter(h=>Hn(new Date(h.start),s)),i=new Map(this.instruments.map(h=>[h.id,h])),a=yn(this.instruments,this.sessions,s),o=this.activeSession?i.get(this.activeSession.instrumentId)||{id:this.activeSession.instrumentId,name:"Instrument",color:"#6B7F6E"}:null,l=this.activeSession?Math.max(0,this.now-this.activeSession.startedAt):0,c=Bn(l);return m`
      <!-- Streak Section -->
      <div class="streak-container">
        <div class="streak-outer-ring" style="background: ${r};">
          <div class="streak-inner-circle">
            <div class="streak-number">${e}</div>
            <div class="streak-label">DAY STREAK</div>
          </div>
        </div>
      </div>

      <!-- Today Dots -->
      <div class="dots-container">
        ${n.length>0?n.map(h=>{const u=i.get(h.instrumentId);return m`<span class="dot" style="background: ${(u==null?void 0:u.color)||"#A3A297"}"></span>`}):m`<span class="no-dots-text">nothing logged yet today</span>`}
      </div>

      <!-- Active Session or Idle Launcher -->
      ${this.activeSession&&o?m`
            <div class="active-card-wrap">
              <div class="active-card" style="background: ${o.color};">
                <div class="active-badge">
                  <span class="active-pulse-dot"></span>
                  SESSION IN PROGRESS
                </div>
                <div class="active-title">${o.name}</div>
                <div class="active-timer">${c}</div>
                <div class="btn btn-end" @click=${this.handleEnd}>End session</div>
                <div class="discard-link" @click=${this.handleDiscard}>Discard timer</div>
              </div>
            </div>
          `:m`
            <div class="idle-launcher">
              <div class="launcher-caption">tap an instrument to start</div>
              <div class="chips-grid">
                ${this.instruments.map(h=>{const u=a.get(h.id),d=u?fl(u.status):"#A3A297";return m`
                    <div
                      class="inst-chip ${h.tier}"
                      style="${h.tier==="primary"?`background: ${h.color};`:""}"
                      title="${u?u.label:h.name}"
                      @click=${()=>this.handleStart(h.id)}
                    >
                      <span>${h.name}</span>
                      ${u&&u.step>0?m`
                            <span class="chip-heat-pill ${u.status}">
                              ${u.isDueToday?m`🔥 Due`:u.isOverdue?m`⚠️ Overdue`:m`
                                    <span class="chip-heat-dot" style="background: ${d}"></span>
                                    ${u.step}/5
                                  `}
                            </span>
                          `:m`
                            <span class="chip-heat-pill new">
                              <span class="chip-heat-dot" style="background: #A3A297"></span>
                              1d
                            </span>
                          `}
                    </div>
                  `})}
              </div>
              <div class="manual-log-trigger">
                <button class="manual-log-btn" @click=${this.handleOpenManual}>
                  + Log past practice
                </button>
              </div>
            </div>
          `}
    `}};Ue.styles=[ve,ee`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .streak-container {
        display: flex;
        justify-content: center;
        padding: 18px 0 4px;
      }

      .streak-outer-ring {
        width: 168px;
        height: 168px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease;
      }

      .streak-inner-circle {
        width: 134px;
        height: 134px;
        border-radius: 50%;
        background: #EDEDE9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .streak-number {
        font-size: 42px;
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1;
      }

      .streak-label {
        font-size: 10px;
        color: #767668;
        letter-spacing: 0.08em;
        margin-top: 4px;
        font-weight: 700;
      }

      .dots-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        padding: 14px 0 6px;
        min-height: 24px;
      }

      .dot {
        width: 9px;
        height: 9px;
        border-radius: 50%;
      }

      .no-dots-text {
        font-size: 11px;
        color: #A3A297;
      }

      .active-card-wrap {
        padding: 20px 24px 0;
      }

      .active-card {
        border-radius: 22px;
        padding: 26px 24px 22px;
        color: #F5F2F6;
        transition: background-color 0.2s ease;
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
      }

      .active-badge {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 11px;
        letter-spacing: 0.1em;
        font-weight: 700;
        opacity: 0.9;
        margin-bottom: 18px;
      }

      .active-pulse-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #F5F2F6;
        animation: pulse 1.4s infinite ease-in-out;
      }

      .active-title {
        font-size: 32px;
        font-weight: 700;
        letter-spacing: -0.02em;
        margin-bottom: 6px;
      }

      .active-timer {
        font-size: 40px;
        font-weight: 700;
        letter-spacing: -0.01em;
        font-variant-numeric: tabular-nums;
        margin-bottom: 22px;
      }

      .btn-end {
        background: #F5F2F6;
        color: #3C3444;
        border-radius: 16px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        user-select: none;
      }

      .discard-link {
        text-align: center;
        margin-top: 12px;
        font-size: 12px;
        color: #F5F2F6;
        opacity: 0.75;
        cursor: pointer;
        text-decoration: underline;
        font-weight: 500;
      }

      .idle-launcher {
        padding: 18px 24px 0;
      }

      .launcher-caption {
        font-size: 11px;
        color: #767668;
        text-align: center;
        margin-bottom: 14px;
        font-weight: 500;
      }

      .chips-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
      }

      .inst-chip {
        border-radius: 14px;
        padding: 10px 14px;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        transition: transform 0.12s ease, opacity 0.15s ease, box-shadow 0.15s ease;
        user-select: none;
        display: inline-flex;
        align-items: center;
        gap: 7px;
      }

      .inst-chip:active {
        transform: scale(0.96);
      }

      .inst-chip.primary {
        color: #F5F2F6;
        border: none;
      }

      .inst-chip.secondary {
        background: #FFF;
        color: #23241F;
        border: 1px solid #E4E3DC;
      }

      .chip-heat-pill {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 6px;
        border-radius: 8px;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.02em;
        line-height: 1.2;
      }

      .inst-chip.primary .chip-heat-pill {
        background: rgba(0, 0, 0, 0.2);
        color: #F5F2F6;
      }

      .inst-chip.secondary .chip-heat-pill {
        background: #ECEBE4;
        color: #4C4B44;
      }

      .chip-heat-pill.due,
      .chip-heat-pill.overdue {
        background: #E05D44 !important;
        color: #FFF !important;
      }

      .chip-heat-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        display: inline-block;
        flex-shrink: 0;
      }

      .manual-log-trigger {
        display: flex;
        justify-content: center;
        margin-top: 24px;
        padding-bottom: 12px;
      }

      .manual-log-btn {
        background: transparent;
        border: 1px dashed #C3C1B7;
        color: #767668;
        font-size: 12px;
        font-weight: 600;
        border-radius: 10px;
        padding: 8px 16px;
        cursor: pointer;
      }

      .manual-log-btn:hover {
        background: rgba(255, 255, 255, 0.4);
        color: #23241F;
        border-color: #767668;
      }

      @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.35); opacity: 0.6; }
      }
    `];It([R({type:Array})],Ue.prototype,"instruments",2);It([R({type:Array})],Ue.prototype,"sessions",2);It([R({type:Object})],Ue.prototype,"activeSession",2);It([R({type:Number})],Ue.prototype,"now",2);Ue=It([ne("pt-main-view")],Ue);var yl=Object.defineProperty,vl=Object.getOwnPropertyDescriptor,Fe=(s,e,t,r)=>{for(var n=r>1?void 0:r?vl(e,t):e,i=s.length-1,a;i>=0;i--)(a=s[i])&&(n=(r?a(e,t,n):a(n))||n);return r&&n&&yl(e,t,n),n};let ge=class extends H{constructor(){super(...arguments),this.instruments=[],this.sessions=[],this.addOpen=!1,this.addName="",this.addColor=mt[0],this.addTier="secondary"}toggleAdd(){this.addOpen=!this.addOpen,this.addOpen&&(this.addName="",this.addColor=mt[0],this.addTier="secondary")}handleAddConfirm(){const s=this.addName.trim();s&&(this.dispatchEvent(new CustomEvent("add-instrument",{detail:{name:s,color:this.addColor,tier:this.addTier},bubbles:!0,composed:!0})),this.addOpen=!1,this.addName="")}handleEdit(s){this.dispatchEvent(new CustomEvent("open-edit-instrument",{detail:{instrument:s},bubbles:!0,composed:!0}))}handleRemove(s,e){s.stopPropagation(),this.dispatchEvent(new CustomEvent("remove-instrument",{detail:{instrumentId:e},bubbles:!0,composed:!0}))}render(){const s=Q(new Date),e=X(s,-42),t=this.sessions.filter(u=>new Date(u.start)>=e),r=this.instruments.filter(u=>!u.archived),n=yn(r,this.sessions,s),i={};let a=0;t.forEach(u=>{i[u.instrumentId]=(i[u.instrumentId]||0)+u.duration,a+=u.duration});const o=Math.max(1,a),l=r.length>1,c=r.filter(u=>u.tier==="primary"),h=r.filter(u=>u.tier==="secondary");return m`
      <div class="kit-header">
        <div>
          <div class="kit-title">Kit</div>
          <div class="kit-subtitle">Share of practice time, last 42 days</div>
        </div>
        <button
          class="add-toggle-btn ${this.addOpen?"cancel":""}"
          @click=${this.toggleAdd}
        >
          ${this.addOpen?"Cancel":"+ Add"}
        </button>
      </div>

      <!-- Add Instrument Form -->
      ${this.addOpen?m`
            <div class="add-card">
              <input
                type="text"
                class="form-input"
                style="margin-bottom: 12px;"
                placeholder="Instrument name (e.g., Drums, Vocals)"
                .value=${this.addName}
                @input=${u=>this.addName=u.target.value}
                @keydown=${u=>u.key==="Enter"&&this.handleAddConfirm()}
              />
              <div class="swatches-row">
                ${mt.map(u=>m`
                    <button
                      type="button"
                      class="swatch-btn ${this.addColor===u?"selected":""}"
                      style="background: ${u};"
                      @click=${()=>this.addColor=u}
                    ></button>
                  `)}
              </div>
              <div class="tier-segment">
                <button
                  type="button"
                  class="tier-option ${this.addTier==="primary"?"active":""}"
                  @click=${()=>this.addTier="primary"}
                >
                  Primary
                </button>
                <button
                  type="button"
                  class="tier-option ${this.addTier==="secondary"?"active":""}"
                  @click=${()=>this.addTier="secondary"}
                >
                  Secondary
                </button>
              </div>
              <button class="btn btn-primary" @click=${this.handleAddConfirm}>
                Add to kit
              </button>
            </div>
          `:m``}

      <!-- Primary Instruments -->
      <div class="primary-group">
        ${c.map(u=>{const d=i[u.id]||0,p=a>0?Math.round(d/o*100):0,g=ks(u.color,p),f=n.get(u.id);return m`
            <div class="ring-item" @click=${()=>this.handleEdit(u)}>
              ${l?m`
                    <span
                      class="remove-chip"
                      title="Remove"
                      @click=${y=>this.handleRemove(y,u.id)}
                    >
                      &times;
                    </span>
                  `:m``}
              <div class="primary-ring" style="background: ${g};">
                <div class="primary-inner" style="color: ${u.color};">
                  ${p}%
                </div>
              </div>
              <div class="ring-name">${u.name}</div>
              <div class="ring-total">${Qe(d)}</div>
              ${f?m`
                    <div class="ring-step-track" title="${f.label}">
                      ${de.map((y,v)=>{const b=v+1,w=f.step>b,k=f.step===b;return m`
                          <span
                            class="step-dot ${w?"completed":""} ${k?"current":""}"
                            style="${k?`background: ${f.isDueToday||f.isOverdue?"#E05D44":u.color};`:""}"
                          ></span>
                        `})}
                    </div>
                    <div class="ring-heat-status ${f.status}">
                      ${f.isDueToday?m`🔥 Due Today`:f.isOverdue?m`⚠️ Overdue`:f.step>0?m`Step ${f.step}/5 · ${f.intervalDays}d`:m`Ready · 1d`}
                    </div>
                  `:m``}
            </div>
          `})}
      </div>

      <!-- Secondary Instruments -->
      <div class="secondary-group">
        ${h.map(u=>{const d=i[u.id]||0,p=a>0?Math.round(d/o*100):0,g=ks(u.color,p),f=n.get(u.id);return m`
            <div class="ring-item" @click=${()=>this.handleEdit(u)}>
              ${l?m`
                    <span
                      class="remove-chip"
                      title="Remove"
                      @click=${y=>this.handleRemove(y,u.id)}
                    >
                      &times;
                    </span>
                  `:m``}
              <div class="secondary-ring" style="background: ${g};">
                <div class="secondary-inner" style="color: ${u.color};">
                  ${p}%
                </div>
              </div>
              <div class="secondary-name">${u.name}</div>
              <div class="secondary-total">${Qe(d)}</div>
              ${f?m`
                    <div class="ring-step-track" title="${f.label}">
                      ${de.map((y,v)=>{const b=v+1,w=f.step>b,k=f.step===b;return m`
                          <span
                            class="step-dot ${w?"completed":""} ${k?"current":""}"
                            style="${k?`background: ${f.isDueToday||f.isOverdue?"#E05D44":u.color};`:""}"
                          ></span>
                        `})}
                    </div>
                    <div class="ring-heat-status ${f.status}">
                      ${f.isDueToday?m`🔥 Due Today`:f.isOverdue?m`⚠️ Overdue`:f.step>0?m`Step ${f.step}/5 · ${f.intervalDays}d`:m`Ready · 1d`}
                    </div>
                  `:m``}
            </div>
          `})}
      </div>

      <!-- Spaced Repetition Heat Matrix Section -->
      ${r.length>0?m`
            <div class="heat-schedule-section">
              <div class="schedule-header">
                <div>
                  <div class="schedule-title">Heat Retention Schedule</div>
                  <div class="schedule-subtitle">1 → 3 → 7 → 14 → 30 day intervals</div>
                </div>
              </div>

              <div class="schedule-list">
                ${r.map(u=>{const d=n.get(u.id);return d?m`
                    <div class="schedule-row" @click=${()=>this.handleEdit(u)}>
                      <div class="schedule-row-top">
                        <div class="schedule-inst-info">
                          <span class="schedule-color-dot" style="background: ${u.color};"></span>
                          <span>${u.name}</span>
                          ${d.cycleCount>0?m`<span style="font-size: 10px; color: #767668; font-weight: 600;">(Cycle ${d.cycleCount+1})</span>`:m``}
                        </div>
                        <span class="schedule-status-badge ${d.status}">
                          ${d.isDueToday?m`🔥 Due Today`:d.isOverdue?m`⚠️ Overdue by ${Math.abs(d.daysRemaining)}d`:d.step>0?m`In ${d.daysRemaining}d`:m`Ready for Step 1`}
                        </span>
                      </div>

                      <div class="milestone-track">
                        ${de.map((p,g)=>{const f=g+1,y=d.step>f,v=d.step===f;return m`
                            <div
                              class="milestone-step ${y?"completed":""} ${v?`active ${d.status}`:""}"
                            >
                              <span>Step ${f}</span>
                              <span>${p}d</span>
                            </div>
                          `})}
                      </div>
                    </div>
                  `:m``})}
              </div>
            </div>
          `:m``}
    `}};ge.styles=[ve,ee`
      :host {
        display: flex;
        flex-direction: column;
      }

      .kit-header {
        padding: 26px 24px 4px;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }

      .kit-title {
        font-size: 22px;
        font-weight: 700;
        letter-spacing: -0.02em;
      }

      .kit-subtitle {
        font-size: 11px;
        color: #767668;
        margin-top: 3px;
      }

      .add-toggle-btn {
        font-size: 12px;
        font-weight: 700;
        color: #23241F;
        cursor: pointer;
        background: transparent;
        border: none;
        padding: 4px 8px;
        border-radius: 6px;
      }

      .add-toggle-btn.cancel {
        color: #767668;
      }

      .add-card {
        margin: 14px 24px 0;
        background: #FFF;
        border-radius: 16px;
        padding: 16px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        animation: fadeIn 0.15s ease-out;
      }

      .swatches-row {
        display: flex;
        gap: 8px;
        margin-bottom: 12px;
        flex-wrap: wrap;
      }

      .swatch-btn {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        cursor: pointer;
        border: none;
        transition: transform 0.1s ease;
      }

      .swatch-btn.selected {
        box-shadow: 0 0 0 2px #FFF, 0 0 0 4px #23241F;
        transform: scale(1.1);
      }

      .tier-segment {
        display: flex;
        background: #E1E1DB;
        border-radius: 10px;
        padding: 3px;
        margin-bottom: 14px;
      }

      .tier-option {
        flex: 1;
        text-align: center;
        padding: 7px 0;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        background: transparent;
        color: #767668;
      }

      .tier-option.active {
        background: #FFF;
        color: #23241F;
      }

      .primary-group {
        padding: 20px 24px 4px;
        display: flex;
        justify-content: center;
        gap: 22px;
        flex-wrap: wrap;
      }

      .secondary-group {
        padding: 16px 24px 24px;
        display: flex;
        justify-content: center;
        gap: 16px;
        flex-wrap: wrap;
      }

      .ring-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        position: relative;
        cursor: pointer;
      }

      .remove-chip {
        position: absolute;
        top: -4px;
        right: 4px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #FFF;
        color: #767668;
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 1;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .primary-ring {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .primary-inner {
        width: 78px;
        height: 78px;
        border-radius: 50%;
        background: #EDEDE9;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 700;
      }

      .secondary-ring {
        width: 76px;
        height: 76px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .secondary-inner {
        width: 58px;
        height: 58px;
        border-radius: 50%;
        background: #EDEDE9;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 700;
      }

      .ring-name {
        font-size: 13px;
        font-weight: 700;
        text-align: center;
      }

      .secondary-name {
        font-size: 12px;
        font-weight: 700;
        text-align: center;
      }

      .ring-total {
        font-size: 11px;
        color: #767668;
        text-align: center;
      }

      .secondary-total {
        font-size: 10px;
        color: #767668;
        text-align: center;
      }

      .ring-step-track {
        display: flex;
        gap: 3px;
        align-items: center;
        margin-top: 2px;
      }

      .step-dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #D4D3CB;
        transition: all 0.2s ease;
      }

      .step-dot.completed {
        background: #23241F;
      }

      .step-dot.current {
        transform: scale(1.25);
      }

      .ring-heat-status {
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.02em;
        color: #767668;
        display: inline-flex;
        align-items: center;
        gap: 3px;
        padding: 2px 6px;
        border-radius: 6px;
        background: rgba(0, 0, 0, 0.04);
        max-width: 100%;
        white-space: nowrap;
      }

      .ring-heat-status.due,
      .ring-heat-status.overdue {
        background: #FEECE8;
        color: #E05D44;
      }

      .heat-schedule-section {
        margin: 12px 24px 32px;
        background: #FFF;
        border-radius: 18px;
        padding: 18px 20px;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
      }

      .schedule-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 14px;
      }

      .schedule-title {
        font-size: 14px;
        font-weight: 700;
        color: #23241F;
      }

      .schedule-subtitle {
        font-size: 11px;
        font-weight: 600;
        color: #767668;
      }

      .schedule-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .schedule-row {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 10px 12px;
        border-radius: 12px;
        background: #F8F7F4;
        border: 1px solid #ECEBE4;
        cursor: pointer;
        transition: transform 0.1s ease, border-color 0.15s ease;
      }

      .schedule-row:hover {
        border-color: #D4D3CB;
      }

      .schedule-row:active {
        transform: scale(0.99);
      }

      .schedule-row-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .schedule-inst-info {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 700;
      }

      .schedule-color-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }

      .schedule-status-badge {
        font-size: 11px;
        font-weight: 700;
        padding: 3px 8px;
        border-radius: 8px;
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }

      .schedule-status-badge.due {
        background: #E05D44;
        color: #FFF;
      }

      .schedule-status-badge.overdue {
        background: #D94838;
        color: #FFF;
      }

      .schedule-status-badge.hot,
      .schedule-status-badge.warm {
        background: #FDF3E5;
        color: #B57D1E;
      }

      .schedule-status-badge.cool {
        background: #EFF4EE;
        color: #556B58;
      }

      .schedule-status-badge.cold,
      .schedule-status-badge.new {
        background: #EAE9E2;
        color: #767668;
      }

      .milestone-track {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 4px;
        margin-top: 2px;
      }

      .milestone-step {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4px 0;
        border-radius: 6px;
        background: #E5E4DC;
        font-size: 9px;
        font-weight: 700;
        color: #767668;
        transition: all 0.2s ease;
      }

      .milestone-step.completed {
        background: #23241F;
        color: #F5F2F6;
      }

      .milestone-step.active {
        box-shadow: 0 0 0 2px #23241F;
      }

      .milestone-step.active.due,
      .milestone-step.active.overdue {
        background: #E05D44;
        color: #FFF;
        box-shadow: 0 0 0 2px #E05D44;
      }

      .empty-kit-notice {
        text-align: center;
        padding: 30px 20px;
        font-size: 13px;
        color: #767668;
      }
    `];Fe([R({type:Array})],ge.prototype,"instruments",2);Fe([R({type:Array})],ge.prototype,"sessions",2);Fe([A()],ge.prototype,"addOpen",2);Fe([A()],ge.prototype,"addName",2);Fe([A()],ge.prototype,"addColor",2);Fe([A()],ge.prototype,"addTier",2);ge=Fe([ne("pt-kit-view")],ge);var bl=Object.defineProperty,wl=Object.getOwnPropertyDescriptor,cs=(s,e,t,r)=>{for(var n=r>1?void 0:r?wl(e,t):e,i=s.length-1,a;i>=0;i--)(a=s[i])&&(n=(r?a(e,t,n):a(n))||n);return r&&n&&bl(e,t,n),n};let it=class extends H{constructor(){super(...arguments),this.instruments=[],this.sessions=[],this.period="week"}handleEditSession(s){this.dispatchEvent(new CustomEvent("open-edit-session",{detail:{session:s},bubbles:!0,composed:!0}))}render(){const s=Q(new Date),e=new Map(this.instruments.map(f=>[f.id,f])),t=this.instruments.filter(f=>!f.archived),r={};this.sessions.forEach(f=>{const y=fe(Q(new Date(f.start)));(r[y]=r[y]||[]).push(f)});const n=r[fe(s)]||[],i={};let a=0;n.forEach(f=>{i[f.instrumentId]=(i[f.instrumentId]||0)+f.duration,a+=f.duration});const o=Object.entries(i).map(([f,y])=>{const v=e.get(f);return{color:(v==null?void 0:v.color)||"#A3A297",pct:y/Math.max(1,a)*100}}),l=Mn(o),c=["S","M","T","W","T","F","S"],h=[];let u=0;for(let f=6;f>=0;f--){const y=X(s,-f),v=f===0,b=r[fe(y)]||[],w={};b.forEach(T=>{w[T.instrumentId]=(w[T.instrumentId]||0)+T.duration,u+=T.duration});const k=Object.entries(w).map(([T,$])=>{const O=e.get(T);return{color:(O==null?void 0:O.color)||"#A3A297",heightPct:Math.min(100,Math.round($/45*100))}});h.push({label:c[y.getDay()],isToday:v,segments:k.length?k:[{color:"transparent",heightPct:0}]})}const d=[];let p=0;for(let f=41;f>=0;f--){const y=X(s,-f),v=r[fe(y)]||[];if(!v.length)d.push({color:"#E3E2DC"});else{const b={};v.forEach(T=>{b[T.instrumentId]=(b[T.instrumentId]||0)+T.duration,p+=T.duration});const w=Object.entries(b).sort((T,$)=>$[1]-T[1])[0][0],k=e.get(w);d.push({color:(k==null?void 0:k.color)||"#A3A297"})}}const g=[...this.sessions].slice(0,8);return m`
      <div class="data-header">
        <div class="data-title">Data</div>
      </div>

      <!-- Segmented Period Toggle -->
      <div class="period-toggle-wrap">
        <div class="period-toggle">
          <button
            type="button"
            class="period-tab ${this.period==="day"?"active":""}"
            @click=${()=>this.period="day"}
          >
            Day
          </button>
          <button
            type="button"
            class="period-tab ${this.period==="week"?"active":""}"
            @click=${()=>this.period="week"}
          >
            Week
          </button>
          <button
            type="button"
            class="period-tab ${this.period==="month"?"active":""}"
            @click=${()=>this.period="month"}
          >
            Month
          </button>
        </div>
      </div>

      <!-- Day Period View -->
      ${this.period==="day"?m`
            <div class="day-view-wrap">
              <div class="day-donut-outer" style="background: ${l};">
                <div class="day-donut-inner">
                  <div class="day-total-num">${Qe(a)}</div>
                  <div class="day-total-label">TODAY</div>
                </div>
              </div>
            </div>
          `:m``}

      <!-- Week Period View -->
      ${this.period==="week"?m`
            <div class="metric-total-hero">${Qe(u)}</div>
            <div class="metric-sub-hero">this week</div>
            <div class="week-bars-container">
              ${h.map(f=>m`
                  <div class="week-bar-col">
                    <div class="bar-card">
                      ${f.segments.map(y=>m`
                          <span
                            class="bar-seg"
                            style="height: ${y.heightPct}%; background: ${y.color};"
                          ></span>
                        `)}
                    </div>
                    <span class="bar-day-label ${f.isToday?"today":""}">
                      ${f.label}
                    </span>
                  </div>
                `)}
            </div>
          `:m``}

      <!-- Month Period View -->
      ${this.period==="month"?m`
            <div class="metric-total-hero">${Qe(p)}</div>
            <div class="metric-sub-hero">last 6 weeks</div>
            <div class="month-grid">
              ${d.map(f=>m`
                  <span class="grid-cell" style="background: ${f.color};"></span>
                `)}
            </div>
          `:m``}

      <!-- Legend -->
      <div class="legend-container">
        ${t.map(f=>m`
            <span class="legend-item">
              <span class="legend-dot" style="background: ${f.color};"></span>
              ${f.name}
            </span>
          `)}
      </div>

      <!-- Recent Practice Session History -->
      <div class="history-section">
        <div class="history-header">
          <div class="history-title">Recent Session Logs</div>
        </div>

        ${g.length>0?m`
              <div class="history-list">
                ${g.map(f=>{const y=e.get(f.instrumentId),b=new Date(f.start).toLocaleDateString([],{month:"short",day:"numeric"});return m`
                    <div class="session-row" @click=${()=>this.handleEditSession(f)}>
                      <div class="session-left">
                        <span
                          class="session-inst-dot"
                          style="background: ${(y==null?void 0:y.color)||"#A3A297"};"
                        ></span>
                        <div>
                          <div class="session-inst-name">${(y==null?void 0:y.name)||"Instrument"}</div>
                          <div class="session-date-sub">
                            ${b}${f.notes?` • ${f.notes}`:""}
                          </div>
                        </div>
                      </div>
                      <div class="session-dur">${Qe(f.duration)}</div>
                    </div>
                  `})}
              </div>
            `:m`
              <div class="no-history-text">
                No sessions recorded yet. Tap an instrument on Main to start!
              </div>
            `}
      </div>
    `}};it.styles=[ve,ee`
      :host {
        display: flex;
        flex-direction: column;
      }

      .data-header {
        padding: 26px 24px 0;
      }

      .data-title {
        font-size: 22px;
        font-weight: 700;
        letter-spacing: -0.02em;
      }

      .period-toggle-wrap {
        padding: 16px 24px 0;
      }

      .period-toggle {
        display: flex;
        background: #E1E1DB;
        border-radius: 12px;
        padding: 4px;
        gap: 4px;
      }

      .period-tab {
        flex: 1;
        text-align: center;
        padding: 8px 0;
        border-radius: 9px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        background: transparent;
        color: #767668;
        transition: all 0.15s ease;
      }

      .period-tab.active {
        background: #FFF;
        color: #23241F;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      }

      /* Day View */
      .day-view-wrap {
        display: flex;
        justify-content: center;
        padding: 28px 0 10px;
      }

      .day-donut-outer {
        width: 190px;
        height: 190px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease;
      }

      .day-donut-inner {
        width: 148px;
        height: 148px;
        border-radius: 50%;
        background: #EDEDE9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .day-total-num {
        font-size: 30px;
        font-weight: 700;
        letter-spacing: -0.02em;
      }

      .day-total-label {
        font-size: 10px;
        color: #767668;
        letter-spacing: 0.06em;
        margin-top: 3px;
        font-weight: 700;
      }

      /* Week View */
      .metric-total-hero {
        text-align: center;
        padding: 24px 0 2px;
        font-size: 22px;
        font-weight: 700;
      }

      .metric-sub-hero {
        text-align: center;
        font-size: 11px;
        color: #767668;
        margin-bottom: 16px;
      }

      .week-bars-container {
        padding: 0 24px;
        display: flex;
        gap: 8px;
        align-items: flex-end;
      }

      .week-bar-col {
        flex: 1;
        text-align: center;
      }

      .bar-card {
        height: 140px;
        border-radius: 12px;
        background: #FFF;
        display: flex;
        flex-direction: column-reverse;
        gap: 2px;
        padding: 5px;
        margin-bottom: 8px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
      }

      .bar-seg {
        border-radius: 6px;
        display: block;
        transition: height 0.25s ease;
      }

      .bar-day-label {
        font-size: 11px;
        color: #767668;
      }

      .bar-day-label.today {
        color: #23241F;
        font-weight: 700;
      }

      /* Month View */
      .month-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 5px;
        padding: 0 24px 4px;
      }

      .grid-cell {
        aspect-ratio: 1;
        border-radius: 4px;
        transition: transform 0.1s ease;
      }

      /* Legend */
      .legend-container {
        display: flex;
        justify-content: center;
        gap: 14px;
        flex-wrap: wrap;
        padding: 20px 24px 16px;
      }

      .legend-item {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 10px;
        color: #767668;
        font-weight: 600;
      }

      .legend-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
      }

      /* Session History Section */
      .history-section {
        padding: 12px 24px 24px;
        border-top: 1px solid #E1E1DB;
        margin-top: 10px;
      }

      .history-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
      }

      .history-title {
        font-size: 13px;
        font-weight: 700;
        letter-spacing: -0.01em;
      }

      .history-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .session-row {
        background: #FFF;
        border-radius: 12px;
        padding: 10px 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
        transition: transform 0.1s ease;
      }

      .session-row:hover {
        transform: translateY(-1px);
      }

      .session-left {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .session-inst-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }

      .session-inst-name {
        font-size: 13px;
        font-weight: 700;
      }

      .session-date-sub {
        font-size: 10px;
        color: #767668;
        margin-top: 1px;
      }

      .session-dur {
        font-size: 13px;
        font-weight: 700;
        color: #23241F;
      }

      .no-history-text {
        font-size: 12px;
        color: #767668;
        text-align: center;
        padding: 16px 0;
      }
    `];cs([R({type:Array})],it.prototype,"instruments",2);cs([R({type:Array})],it.prototype,"sessions",2);cs([A()],it.prototype,"period",2);it=cs([ne("pt-data-view")],it);var _l=Object.defineProperty,Sl=Object.getOwnPropertyDescriptor,ot=(s,e,t,r)=>{for(var n=r>1?void 0:r?Sl(e,t):e,i=s.length-1,a;i>=0;i--)(a=s[i])&&(n=(r?a(e,t,n):a(n))||n);return r&&n&&_l(e,t,n),n};let Ee=class extends H{constructor(){super(...arguments),this.syncStatus="local",this.lastSyncedAt=null,this.errorMessage=null,this.popoverOpen=!1,this.isManualSyncing=!1}togglePillPopover(s){s.stopPropagation(),this.popoverOpen=!this.popoverOpen}closePopover(){this.popoverOpen=!1}async handleSyncNow(){if(!this.isManualSyncing){this.isManualSyncing=!0;try{await x.syncWithCloud(!0)}finally{this.isManualSyncing=!1}}}handleOpenSettings(){this.closePopover(),this.dispatchEvent(new CustomEvent("open-settings",{bubbles:!0,composed:!0}))}render(){const s=this.syncStatus==="syncing"||this.isManualSyncing,e=this.syncStatus==="synced"?"Synced":s?"Syncing...":this.syncStatus==="offline"?"Offline":this.syncStatus==="error"?"Sync Error":"Local Only",t=zn(this.lastSyncedAt);return m`
      <div
        class="pill-trigger status-${this.syncStatus}"
        title="Sync status: ${e}"
        @click=${this.togglePillPopover}
      >
        ${s?m`
              <svg class="spin-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
              </svg>
            `:m`<span class="status-dot"></span>`}
        <span>${e}</span>
      </div>

      ${this.popoverOpen?m`
            <div class="popover-backdrop" @click=${this.closePopover}></div>
            <div class="popover-card" @click=${r=>r.stopPropagation()}>
              <div class="popover-header">
                <div class="popover-title">
                  <span class="status-dot" style="background: currentColor"></span>
                  <span>${e}</span>
                </div>
              </div>

              <div class="popover-body">
                ${this.syncStatus==="local"?m`Cloud sync is not configured. Your practice data is saved locally on this device.`:m`
                      <div>Last cloud update: <strong>${t}</strong></div>
                      ${this.lastSyncedAt?m`<div class="timestamp-detail">${new Date(this.lastSyncedAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})}</div>`:m``}
                    `}

                ${this.errorMessage&&this.syncStatus==="error"?m`<div class="error-box">${this.errorMessage}</div>`:m``}
              </div>

              <div class="popover-actions">
                ${this.syncStatus==="local"?m`
                      <button class="btn-sync-now" @click=${this.handleOpenSettings}>
                        Configure Sync
                      </button>
                    `:m`
                      <button
                        class="btn-sync-now"
                        ?disabled=${s}
                        @click=${this.handleSyncNow}
                      >
                        ${s?m`
                              <svg class="spin-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
                              </svg>
                              <span>Syncing...</span>
                            `:m`
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
                              </svg>
                              <span>Sync Now</span>
                            `}
                      </button>
                      <button
                        class="btn-settings-shortcut"
                        title="Sync Settings"
                        @click=${this.handleOpenSettings}
                      >
                        ⚙
                      </button>
                    `}
              </div>
            </div>
          `:m``}
    `}};Ee.styles=ee`
    :host {
      display: inline-block;
      position: relative;
      font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
    }

    .pill-trigger {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.02em;
      cursor: pointer;
      user-select: none;
      transition: all 0.2s ease;
      border: 1px solid transparent;
      outline: none;
    }

    .pill-trigger:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
    }

    .pill-trigger:active {
      transform: translateY(0);
    }

    /* State variants */
    .status-synced {
      background: #E6EFE6;
      color: #2D5A34;
      border-color: #D3E4D3;
    }
    .status-synced .status-dot {
      background: #40916C;
    }

    .status-syncing {
      background: #E8EFF5;
      color: #1E3A5F;
      border-color: #D2E0EC;
    }
    .status-syncing .status-dot {
      background: #3A86C8;
      animation: pulse-dot 1.2s infinite ease-in-out;
    }

    .status-offline {
      background: #F7EFE8;
      color: #7D4F27;
      border-color: #EBDEC2;
    }
    .status-offline .status-dot {
      background: #D4A373;
    }

    .status-error {
      background: #FAEAE8;
      color: #9C2A2A;
      border-color: #F3CECA;
    }
    .status-error .status-dot {
      background: #E63946;
    }

    .status-local {
      background: #EAE9E4;
      color: #767668;
      border-color: #DCDAD2;
    }
    .status-local .status-dot {
      background: #A3A297;
    }

    .status-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .spin-icon {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes pulse-dot {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.4;
        transform: scale(1.4);
      }
    }

    /* Popover */
    .popover-backdrop {
      position: fixed;
      inset: 0;
      z-index: 100;
    }

    .popover-card {
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      width: 250px;
      background: #FFFFFF;
      border-radius: 16px;
      padding: 16px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08);
      z-index: 101;
      color: #23241F;
      animation: popin 0.18s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes popin {
      from {
        opacity: 0;
        transform: translateY(-4px) scale(0.96);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .popover-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
    }

    .popover-title {
      font-size: 13px;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .popover-body {
      font-size: 12px;
      color: #767668;
      line-height: 1.4;
      margin-bottom: 14px;
    }

    .timestamp-detail {
      font-size: 11px;
      color: #929084;
      margin-top: 4px;
    }

    .error-box {
      background: #FAEAE8;
      border-radius: 8px;
      padding: 8px 10px;
      font-size: 11px;
      color: #9C2A2A;
      margin-top: 8px;
      word-break: break-word;
    }

    .popover-actions {
      display: flex;
      gap: 8px;
    }

    .btn-sync-now {
      flex: 1;
      padding: 8px 12px;
      background: #23241F;
      color: #FFFFFF;
      border: none;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      transition: opacity 0.15s ease;
    }

    .btn-sync-now:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .btn-sync-now:not(:disabled):hover {
      opacity: 0.9;
    }

    .btn-settings-shortcut {
      padding: 8px 10px;
      background: #EDEDE9;
      color: #23241F;
      border: none;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.15s ease;
    }

    .btn-settings-shortcut:hover {
      background: #E1E1DB;
    }
  `;ot([R({type:String})],Ee.prototype,"syncStatus",2);ot([R({type:String})],Ee.prototype,"lastSyncedAt",2);ot([R({type:String})],Ee.prototype,"errorMessage",2);ot([A()],Ee.prototype,"popoverOpen",2);ot([A()],Ee.prototype,"isManualSyncing",2);Ee=ot([ne("pt-sync-pill")],Ee);var kl=Object.defineProperty,El=Object.getOwnPropertyDescriptor,Be=(s,e,t,r)=>{for(var n=r>1?void 0:r?El(e,t):e,i=s.length-1,a;i>=0;i--)(a=s[i])&&(n=(r?a(e,t,n):a(n))||n);return r&&n&&kl(e,t,n),n};let me=class extends H{constructor(){super(...arguments),this.instruments=[],this.open=!1,this.selectedInstrumentId="",this.durationMinutes=20,this.sessionDate=new Date().toISOString().slice(0,10),this.notes=""}connectedCallback(){super.connectedCallback(),this.instruments.length>0&&!this.selectedInstrumentId&&(this.selectedInstrumentId=this.instruments[0].id)}willUpdate(s){s.has("instruments")&&this.instruments.length>0&&!this.selectedInstrumentId&&(this.selectedInstrumentId=this.instruments[0].id)}setPreset(s){this.durationMinutes=s}handleSave(){if(!this.selectedInstrumentId||this.durationMinutes<=0)return;const s=this.sessionDate.split("-"),e=new Date;s.length===3&&e.setFullYear(parseInt(s[0]),parseInt(s[1])-1,parseInt(s[2])),this.dispatchEvent(new CustomEvent("save-manual-session",{detail:{instrumentId:this.selectedInstrumentId,start:e,duration:this.durationMinutes,notes:this.notes},bubbles:!0,composed:!0})),this.close()}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return this.open?m`
      <div class="modal-overlay" @click=${s=>s.target===s.currentTarget&&this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Log Practice Session</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="form-group">
            <label class="form-label">Select Instrument</label>
            <div class="inst-radio-group">
              ${this.instruments.map(s=>m`
                  <div
                    class="inst-radio ${this.selectedInstrumentId===s.id?"selected":""}"
                    @click=${()=>this.selectedInstrumentId=s.id}
                  >
                    <span class="inst-dot" style="background: ${s.color}"></span>
                    ${s.name}
                  </div>
                `)}
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Duration (Minutes)</label>
            <div class="preset-durations">
              ${[15,30,45,60].map(s=>m`
                  <button
                    type="button"
                    class="preset-btn ${this.durationMinutes===s?"active":""}"
                    @click=${()=>this.setPreset(s)}
                  >
                    ${s}m
                  </button>
                `)}
            </div>
            <input
              type="number"
              min="1"
              max="600"
              class="form-input"
              .value=${String(this.durationMinutes)}
              @input=${s=>this.durationMinutes=parseInt(s.target.value)||0}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Date</label>
            <input
              type="date"
              class="form-input"
              .value=${this.sessionDate}
              @input=${s=>this.sessionDate=s.target.value}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Notes (Optional)</label>
            <input
              type="text"
              placeholder="e.g. Scales, arpeggios, song practice..."
              class="form-input"
              .value=${this.notes}
              @input=${s=>this.notes=s.target.value}
            />
          </div>

          <button class="btn btn-primary" style="margin-top: 10px;" @click=${this.handleSave}>
            Save Practice Log
          </button>
        </div>
      </div>
    `:m``}};me.styles=[ve,ee`
      .preset-durations {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 6px;
        margin-bottom: 12px;
      }
      .preset-btn {
        background: #E1E1DB;
        border: none;
        border-radius: 8px;
        padding: 8px 0;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        color: #23241F;
      }
      .preset-btn.active {
        background: #23241F;
        color: #F5F2F6;
      }
      .inst-radio-group {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 14px;
      }
      .inst-radio {
        padding: 8px 12px;
        border-radius: 10px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        border: 1px solid #E4E3DC;
        background: #FFF;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .inst-radio.selected {
        border-color: #23241F;
        background: #23241F;
        color: #FFF;
      }
      .inst-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }
    `];Be([R({type:Array})],me.prototype,"instruments",2);Be([R({type:Boolean})],me.prototype,"open",2);Be([A()],me.prototype,"selectedInstrumentId",2);Be([A()],me.prototype,"durationMinutes",2);Be([A()],me.prototype,"sessionDate",2);Be([A()],me.prototype,"notes",2);me=Be([ne("pt-manual-entry-modal")],me);var Al=Object.defineProperty,xl=Object.getOwnPropertyDescriptor,Ae=(s,e,t,r)=>{for(var n=r>1?void 0:r?xl(e,t):e,i=s.length-1,a;i>=0;i--)(a=s[i])&&(n=(r?a(e,t,n):a(n))||n);return r&&n&&Al(e,t,n),n};let re=class extends H{constructor(){super(...arguments),this.instruments=[],this.session=null,this.open=!1,this.instrumentId="",this.duration=0,this.sessionDate="",this.notes=""}willUpdate(s){s.has("session")&&this.session&&(this.instrumentId=this.session.instrumentId,this.duration=this.session.duration,this.sessionDate=new Date(this.session.start).toISOString().slice(0,10),this.notes=this.session.notes||"")}handleSave(){if(!this.session||!this.instrumentId||this.duration<=0)return;const s=this.sessionDate.split("-"),e=new Date(this.session.start);s.length===3&&e.setFullYear(parseInt(s[0]),parseInt(s[1])-1,parseInt(s[2]));const t=new Date(e.getTime()+this.duration*6e4),r={...this.session,instrumentId:this.instrumentId,start:e.toISOString(),end:t.toISOString(),duration:Math.round(this.duration),notes:this.notes.trim()||void 0};this.dispatchEvent(new CustomEvent("update-session",{detail:{session:r},bubbles:!0,composed:!0})),this.close()}handleDelete(){this.session&&confirm("Are you sure you want to delete this practice session?")&&(this.dispatchEvent(new CustomEvent("delete-session",{detail:{sessionId:this.session.id},bubbles:!0,composed:!0})),this.close())}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return!this.open||!this.session?m``:m`
      <div class="modal-overlay" @click=${s=>s.target===s.currentTarget&&this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Edit Practice Session</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="form-group">
            <label class="form-label">Instrument</label>
            <div class="inst-radio-group">
              ${this.instruments.map(s=>m`
                  <div
                    class="inst-radio ${this.instrumentId===s.id?"selected":""}"
                    @click=${()=>this.instrumentId=s.id}
                  >
                    <span class="inst-dot" style="background: ${s.color}"></span>
                    ${s.name}
                  </div>
                `)}
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Duration (Minutes)</label>
            <input
              type="number"
              min="1"
              max="600"
              class="form-input"
              .value=${String(this.duration)}
              @input=${s=>this.duration=parseInt(s.target.value)||0}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Date</label>
            <input
              type="date"
              class="form-input"
              .value=${this.sessionDate}
              @input=${s=>this.sessionDate=s.target.value}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Notes</label>
            <input
              type="text"
              class="form-input"
              .value=${this.notes}
              @input=${s=>this.notes=s.target.value}
            />
          </div>

          <div class="actions-row">
            <button class="btn btn-danger" style="flex: 1;" @click=${this.handleDelete}>
              Delete
            </button>
            <button class="btn btn-primary" style="flex: 2;" @click=${this.handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    `}};re.styles=[ve,ee`
      .inst-radio-group {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 14px;
      }
      .inst-radio {
        padding: 8px 12px;
        border-radius: 10px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        border: 1px solid #E4E3DC;
        background: #FFF;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .inst-radio.selected {
        border-color: #23241F;
        background: #23241F;
        color: #FFF;
      }
      .inst-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }
      .actions-row {
        display: flex;
        gap: 8px;
        margin-top: 16px;
      }
    `];Ae([R({type:Array})],re.prototype,"instruments",2);Ae([R({type:Object})],re.prototype,"session",2);Ae([R({type:Boolean})],re.prototype,"open",2);Ae([A()],re.prototype,"instrumentId",2);Ae([A()],re.prototype,"duration",2);Ae([A()],re.prototype,"sessionDate",2);Ae([A()],re.prototype,"notes",2);re=Ae([ne("pt-edit-session-modal")],re);var Tl=Object.defineProperty,$l=Object.getOwnPropertyDescriptor,He=(s,e,t,r)=>{for(var n=r>1?void 0:r?$l(e,t):e,i=s.length-1,a;i>=0;i--)(a=s[i])&&(n=(r?a(e,t,n):a(n))||n);return r&&n&&Tl(e,t,n),n};let ye=class extends H{constructor(){super(...arguments),this.instrument=null,this.canDelete=!0,this.open=!1,this.name="",this.color=mt[0],this.tier="secondary"}willUpdate(s){s.has("instrument")&&this.instrument&&(this.name=this.instrument.name,this.color=this.instrument.color,this.tier=this.instrument.tier)}handleSave(){if(!this.instrument||!this.name.trim())return;const s={...this.instrument,name:this.name.trim(),color:this.color,tier:this.tier};this.dispatchEvent(new CustomEvent("update-instrument",{detail:{instrument:s},bubbles:!0,composed:!0})),this.close()}handleDelete(){this.instrument&&confirm(`Remove "${this.instrument.name}" from kit? Past practice history will be preserved.`)&&(this.dispatchEvent(new CustomEvent("remove-instrument",{detail:{instrumentId:this.instrument.id},bubbles:!0,composed:!0})),this.close())}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return!this.open||!this.instrument?m``:m`
      <div class="modal-overlay" @click=${s=>s.target===s.currentTarget&&this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Edit Instrument</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="form-group">
            <label class="form-label">Instrument Name</label>
            <input
              type="text"
              class="form-input"
              .value=${this.name}
              @input=${s=>this.name=s.target.value}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Color Swatch</label>
            <div class="swatches-grid">
              ${mt.map(s=>m`
                  <span
                    class="swatch ${this.color===s?"selected":""}"
                    style="background: ${s}"
                    @click=${()=>this.color=s}
                  ></span>
                `)}
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Priority Tier</label>
            <div class="tier-toggle">
              <button
                type="button"
                class="tier-btn ${this.tier==="primary"?"active":""}"
                @click=${()=>this.tier="primary"}
              >
                Primary
              </button>
              <button
                type="button"
                class="tier-btn ${this.tier==="secondary"?"active":""}"
                @click=${()=>this.tier="secondary"}
              >
                Secondary
              </button>
            </div>
          </div>

          <div class="actions-row">
            ${this.canDelete?m`
                  <button class="btn btn-danger" style="flex: 1;" @click=${this.handleDelete}>
                    Remove
                  </button>
                `:m``}
            <button class="btn btn-primary" style="flex: 2;" @click=${this.handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    `}};ye.styles=[ve,ee`
      .swatches-grid {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-bottom: 14px;
      }
      .swatch {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        cursor: pointer;
        transition: transform 0.1s ease;
      }
      .swatch.selected {
        box-shadow: 0 0 0 2px #fff, 0 0 0 4px #23241f;
        transform: scale(1.08);
      }
      .tier-toggle {
        display: flex;
        background: #e1e1db;
        border-radius: 10px;
        padding: 3px;
        margin-bottom: 16px;
      }
      .tier-btn {
        flex: 1;
        text-align: center;
        padding: 8px 0;
        border-radius: 8px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        background: transparent;
        color: #767668;
      }
      .tier-btn.active {
        background: #fff;
        color: #23241f;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
      }
      .actions-row {
        display: flex;
        gap: 8px;
        margin-top: 14px;
      }
    `];He([R({type:Object})],ye.prototype,"instrument",2);He([R({type:Boolean})],ye.prototype,"canDelete",2);He([R({type:Boolean})],ye.prototype,"open",2);He([A()],ye.prototype,"name",2);He([A()],ye.prototype,"color",2);He([A()],ye.prototype,"tier",2);ye=He([ne("pt-edit-instrument-modal")],ye);var Ol=Object.defineProperty,Cl=Object.getOwnPropertyDescriptor,Dt=(s,e,t,r)=>{for(var n=r>1?void 0:r?Cl(e,t):e,i=s.length-1,a;i>=0;i--)(a=s[i])&&(n=(r?a(e,t,n):a(n))||n);return r&&n&&Ol(e,t,n),n};let Me=class extends H{constructor(){super(...arguments),this.settings={soundEnabled:!0,hapticsEnabled:!0},this.syncStatus="local",this.open=!1,this.isSyncing=!1}handleSoundToggle(s){const e=s.target.checked;this.dispatchEvent(new CustomEvent("update-settings",{detail:{soundEnabled:e},bubbles:!0,composed:!0}))}handleHapticsToggle(s){const e=s.target.checked;this.dispatchEvent(new CustomEvent("update-settings",{detail:{hapticsEnabled:e},bubbles:!0,composed:!0}))}async handleSyncNow(){this.isSyncing=!0;try{await x.syncWithCloud(!1)}finally{this.isSyncing=!1}}handleOpenAuth(){this.dispatchEvent(new CustomEvent("open-auth-modal",{bubbles:!0,composed:!0}))}async handleSignOut(){confirm("Sign out of your account? Your local cache will be cleared on this device.")&&await x.signOut()}triggerExport(){this.dispatchEvent(new CustomEvent("export-backup",{bubbles:!0,composed:!0}))}triggerImport(){var e;const s=(e=this.shadowRoot)==null?void 0:e.querySelector("#import-file");s==null||s.click()}handleFileChange(s){var n;const e=s.target,t=(n=e.files)==null?void 0:n[0];if(!t)return;const r=new FileReader;r.onload=i=>{var o;const a=(o=i.target)==null?void 0:o.result;a&&this.dispatchEvent(new CustomEvent("import-backup",{detail:{jsonString:a},bubbles:!0,composed:!0})),e.value=""},r.readAsText(t)}triggerDemoData(){confirm("Load demo practice history? This will add ~33 days of sample sessions to preview charts.")&&(this.dispatchEvent(new CustomEvent("load-demo-data",{bubbles:!0,composed:!0})),this.close())}triggerClearData(){confirm("Reset all practice history? This will delete all sessions and cannot be undone.")&&(this.dispatchEvent(new CustomEvent("clear-all-data",{bubbles:!0,composed:!0})),this.close())}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}formatLastSync(s){if(!s)return"Never synced";const e=new Date(s);if(isNaN(e.getTime()))return"Never synced";const t=Date.now(),r=Math.floor((t-e.getTime())/1e3);return r<60?"Just now":r<3600?`${Math.floor(r/60)}m ago`:r<86400?`${Math.floor(r/3600)}h ago`:e.toLocaleDateString([],{month:"short",day:"numeric"})}getSyncStatusLabel(){if(!x.isAuthenticated()&&!x.getEffectiveSyncPasscode())return{label:"Guest Mode (Local only)",dotClass:"local"};switch(this.syncStatus){case"syncing":return{label:"Syncing changes...",dotClass:"syncing"};case"synced":return{label:"Cloud backup active",dotClass:"synced"};case"offline":return{label:"Offline (will sync when online)",dotClass:"offline"};case"error":return{label:"Sync paused (connection error)",dotClass:"error"};default:return{label:"Guest Mode (Local only)",dotClass:"local"}}}render(){if(!this.open)return m``;const s=x.getUserEmail(),e=x.isAuthenticated(),t=this.getSyncStatusLabel();return m`
      <div class="modal-overlay" @click=${r=>r.target===r.currentTarget&&this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Settings & Backups</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <!-- Account & Cloud Synchronization -->
          <div class="section-heading">Account & Cloud Backup</div>
          <div class="sync-card">
            <div class="setting-info">
              ${e&&s?m`
                    <div class="user-email-label">${s}</div>
                    <div class="sync-status-row">
                      <span class="sync-dot ${t.dotClass}"></span>
                      <span>${t.label}</span>
                    </div>
                    ${this.settings.lastSyncedAt?m`
                          <div class="sync-timestamp">
                            Last synced: ${this.formatLastSync(this.settings.lastSyncedAt)}
                          </div>
                        `:m``}
                  `:m`
                    <div class="setting-title">Guest Mode</div>
                    <div class="sync-status-row">
                      <span class="sync-dot ${t.dotClass}"></span>
                      <span>Local storage only</span>
                    </div>
                    <div class="sync-timestamp">Sign in to sync across devices</div>
                  `}
            </div>

            ${e?m`
                  <button
                    type="button"
                    class="btn-sync"
                    ?disabled=${this.isSyncing||this.syncStatus==="syncing"}
                    @click=${this.handleSyncNow}
                  >
                    ${this.isSyncing||this.syncStatus==="syncing"?"Syncing...":"Sync Now"}
                  </button>
                `:m`
                  <button
                    type="button"
                    class="btn btn-primary"
                    style="height: 36px; padding: 0 14px; width: auto; font-size: 12px;"
                    @click=${this.handleOpenAuth}
                  >
                    Sign In
                  </button>
                `}
          </div>

          ${e?m`
                <div class="account-actions">
                  <button type="button" class="btn-signout" @click=${this.handleSignOut}>
                    Sign Out
                  </button>
                </div>
              `:m``}

          <!-- Feedback & Sound -->
          <div class="section-heading">Feedback & Sound</div>
          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-title">Audio Chimes</div>
              <div class="setting-desc">Acoustic tones on start and completion</div>
            </div>
            <label class="switch">
              <input
                type="checkbox"
                .checked=${this.settings.soundEnabled}
                @change=${this.handleSoundToggle}
              />
              <span class="slider"></span>
            </label>
          </div>

          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-title">Haptic Vibration</div>
              <div class="setting-desc">Tactile mobile feedback</div>
            </div>
            <label class="switch">
              <input
                type="checkbox"
                .checked=${this.settings.hapticsEnabled}
                @change=${this.handleHapticsToggle}
              />
              <span class="slider"></span>
            </label>
          </div>

          <!-- Data Portability -->
          <div class="section-heading">Data Portability</div>
          <div class="btn-grid">
            <button class="btn btn-secondary" @click=${this.triggerExport}>
              Export Practice Data (JSON)
            </button>
            <button class="btn btn-secondary" @click=${this.triggerImport}>
              Import Practice Data (JSON)
            </button>
            <input
              type="file"
              id="import-file"
              class="file-hidden"
              accept=".json,application/json"
              @change=${this.handleFileChange}
            />
          </div>

          <!-- Demo & Clean Slate -->
          <div class="section-heading">Demo & Clean Slate</div>
          <div class="btn-grid">
            <button class="btn btn-secondary" @click=${this.triggerDemoData}>
              Load Sample Practice Data
            </button>
            <button class="btn btn-danger" @click=${this.triggerClearData}>
              Clear All Data (Start Fresh)
            </button>
          </div>
        </div>
      </div>
    `}};Me.styles=[ve,ee`
      .setting-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid #E1E1DB;
      }
      .setting-item:last-child {
        border-bottom: none;
      }
      .setting-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .setting-title {
        font-size: 14px;
        font-weight: 700;
      }
      .setting-desc {
        font-size: 11px;
        color: #767668;
      }
      .switch {
        position: relative;
        display: inline-block;
        width: 44px;
        height: 24px;
        flex-shrink: 0;
      }
      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #E1E1DB;
        transition: 0.2s;
        border-radius: 24px;
      }
      .slider:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        transition: 0.2s;
        border-radius: 50%;
      }
      input:checked + .slider {
        background-color: #23241F;
      }
      input:checked + .slider:before {
        transform: translateX(20px);
      }
      .section-heading {
        font-size: 11px;
        font-weight: 700;
        color: #767668;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        margin-top: 18px;
        margin-bottom: 8px;
      }
      .sync-card {
        background: #F4F3EF;
        border: 1px solid #E1E1DB;
        border-radius: 12px;
        padding: 14px 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        margin-bottom: 6px;
      }
      .sync-status-row {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        font-weight: 600;
        margin-top: 4px;
      }
      .sync-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        display: inline-block;
      }
      .sync-dot.synced {
        background: #3B8A44;
      }
      .sync-dot.syncing {
        background: #D48827;
        animation: pulse 1s infinite ease-in-out;
      }
      .sync-dot.offline {
        background: #8F8D88;
      }
      .sync-dot.error {
        background: #C0392B;
      }
      .sync-dot.local {
        background: #A8A69E;
      }
      @keyframes pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.4; transform: scale(1.2); }
      }
      .sync-timestamp {
        font-size: 11px;
        color: #767668;
        margin-top: 2px;
      }
      .user-email-label {
        font-size: 13px;
        font-weight: 700;
        color: #23241F;
        word-break: break-all;
      }
      .btn-sync {
        font-size: 12px;
        font-weight: 700;
        padding: 8px 14px;
        border-radius: 8px;
        cursor: pointer;
        border: 1px solid #D4D3CB;
        background: #FFFFFF;
        color: #23241F;
        transition: all 0.15s ease;
        flex-shrink: 0;
      }
      .btn-sync:hover:not(:disabled) {
        background: #23241F;
        color: #FFFFFF;
        border-color: #23241F;
      }
      .btn-sync:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      .account-actions {
        display: flex;
        gap: 8px;
        margin-top: 8px;
      }
      .btn-signout {
        background: none;
        border: 1px solid #E1E1DB;
        color: #767668;
        font-size: 12px;
        font-weight: 700;
        padding: 8px 12px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      .btn-signout:hover {
        background: #FBEAE8;
        border-color: #F2B8B5;
        color: #B3261E;
      }
      .btn-grid {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 8px;
      }
      .file-hidden {
        display: none;
      }
    `];Dt([R({type:Object})],Me.prototype,"settings",2);Dt([R({type:String})],Me.prototype,"syncStatus",2);Dt([R({type:Boolean})],Me.prototype,"open",2);Dt([A()],Me.prototype,"isSyncing",2);Me=Dt([ne("pt-settings-modal")],Me);var Rl=Object.defineProperty,Pl=Object.getOwnPropertyDescriptor,be=(s,e,t,r)=>{for(var n=r>1?void 0:r?Pl(e,t):e,i=s.length-1,a;i>=0;i--)(a=s[i])&&(n=(r?a(e,t,n):a(n))||n);return r&&n&&Rl(e,t,n),n};let Z=class extends H{constructor(){super(...arguments),this.open=!1,this.activeTab="signin",this.email="",this.password="",this.confirmPassword="",this.isLoading=!1,this.errorMessage=null,this.successMessage=null}close(){this.errorMessage=null,this.successMessage=null,this.password="",this.confirmPassword="",this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}setTab(s){this.activeTab=s,this.errorMessage=null,this.successMessage=null,Ce(x.getSettings().soundEnabled)}async handleSubmit(s){if(s.preventDefault(),this.errorMessage=null,this.successMessage=null,!this.email.trim()){this.errorMessage="Please enter your email address.";return}if(this.activeTab==="magic"){this.isLoading=!0;try{const e=await G.signInWithOtp(this.email);e.success?(yt(x.getSettings().soundEnabled),this.successMessage=e.message||"Magic login link sent! Check your email inbox."):this.errorMessage=e.message||"Failed to send magic link."}finally{this.isLoading=!1}return}if(!this.password){this.errorMessage="Please enter your password.";return}if(this.activeTab==="signup"){if(this.password.length<6){this.errorMessage="Password must be at least 6 characters long.";return}if(this.password!==this.confirmPassword){this.errorMessage="Passwords do not match.";return}this.isLoading=!0;try{const e=await G.signUp(this.email,this.password);e.success?(yt(x.getSettings().soundEnabled),e.user&&!e.user.confirmed_at&&G.getUser()===null?this.successMessage="Account created! Please check your email to confirm your account.":this.close()):this.errorMessage=e.message||"Sign up failed."}finally{this.isLoading=!1}return}if(this.activeTab==="signin"){this.isLoading=!0;try{const e=await G.signInWithPassword(this.email,this.password);e.success?(yt(x.getSettings().soundEnabled),this.close()):this.errorMessage=e.message||"Invalid email or password."}finally{this.isLoading=!1}}}render(){return this.open?m`
      <div class="modal-overlay" @click=${s=>s.target===s.currentTarget&&this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Musician Account</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="tabs-row">
            <button
              type="button"
              class="tab-btn ${this.activeTab==="signin"?"active":""}"
              @click=${()=>this.setTab("signin")}
            >
              Sign In
            </button>
            <button
              type="button"
              class="tab-btn ${this.activeTab==="signup"?"active":""}"
              @click=${()=>this.setTab("signup")}
            >
              Create Account
            </button>
            <button
              type="button"
              class="tab-btn ${this.activeTab==="magic"?"active":""}"
              @click=${()=>this.setTab("magic")}
            >
              Magic Link
            </button>
          </div>

          ${this.errorMessage?m`<div class="alert-box alert-error">${this.errorMessage}</div>`:m``}
          ${this.successMessage?m`<div class="alert-box alert-success">${this.successMessage}</div>`:m``}

          <form @submit=${this.handleSubmit}>
            <div class="form-group">
              <label class="form-label">Email Address</label>
              <input
                type="email"
                class="form-input"
                required
                autocomplete="email"
                placeholder="musician@example.com"
                .value=${this.email}
                @input=${s=>this.email=s.target.value}
              />
            </div>

            ${this.activeTab==="magic"?m`
                  <div class="helper-text">
                    We'll email you a passwordless one-time login link. Click the link on any device to log in instantly.
                  </div>
                  <button type="submit" class="btn btn-primary" ?disabled=${this.isLoading}>
                    ${this.isLoading?"Sending Link...":"Send Magic Link"}
                  </button>
                `:m`
                  <div class="form-group">
                    <label class="form-label">Password</label>
                    <input
                      type="password"
                      class="form-input"
                      required
                      autocomplete=${this.activeTab==="signup"?"new-password":"current-password"}
                      placeholder="••••••••"
                      .value=${this.password}
                      @input=${s=>this.password=s.target.value}
                    />
                  </div>

                  ${this.activeTab==="signup"?m`
                        <div class="form-group">
                          <label class="form-label">Confirm Password</label>
                          <input
                            type="password"
                            class="form-input"
                            required
                            autocomplete="new-password"
                            placeholder="••••••••"
                            .value=${this.confirmPassword}
                            @input=${s=>this.confirmPassword=s.target.value}
                          />
                        </div>
                        <div class="helper-text">
                          Your practice history from this browser will be automatically adopted into your new account.
                        </div>
                        <button type="submit" class="btn btn-primary" ?disabled=${this.isLoading}>
                          ${this.isLoading?"Creating Account...":"Create Account"}
                        </button>
                      `:m`
                        <button type="submit" class="btn btn-primary" ?disabled=${this.isLoading}>
                          ${this.isLoading?"Signing In...":"Sign In"}
                        </button>
                      `}
                `}
          </form>

          ${this.activeTab==="signin"?m`
                <div class="switch-hint">
                  Don't have an account?
                  <button type="button" class="link-btn" @click=${()=>this.setTab("signup")}>
                    Create one
                  </button>
                </div>
              `:this.activeTab==="signup"?m`
                <div class="switch-hint">
                  Already have an account?
                  <button type="button" class="link-btn" @click=${()=>this.setTab("signin")}>
                    Sign in
                  </button>
                </div>
              `:m`
                <div class="switch-hint">
                  Prefer password?
                  <button type="button" class="link-btn" @click=${()=>this.setTab("signin")}>
                    Sign in with password
                  </button>
                </div>
              `}
        </div>
      </div>
    `:m``}};Z.styles=[ve,ee`
      .tabs-row {
        display: flex;
        background: #E1E1DB;
        border-radius: 12px;
        padding: 3px;
        margin-bottom: 18px;
        gap: 3px;
      }
      .tab-btn {
        flex: 1;
        background: none;
        border: none;
        padding: 8px 6px;
        border-radius: 9px;
        font-size: 12px;
        font-weight: 700;
        color: #767668;
        cursor: pointer;
        transition: all 0.15s ease;
        text-align: center;
      }
      .tab-btn.active {
        background: #FFFFFF;
        color: #23241F;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
      }
      .alert-box {
        border-radius: 10px;
        padding: 10px 12px;
        font-size: 12px;
        line-height: 1.4;
        margin-bottom: 14px;
      }
      .alert-error {
        background: #FBEAE8;
        border: 1px solid #F2B8B5;
        color: #B3261E;
      }
      .alert-success {
        background: #EBF3EC;
        border: 1px solid #B8DCBE;
        color: #2E6930;
      }
      .helper-text {
        font-size: 11px;
        color: #767668;
        line-height: 1.4;
        margin-top: -6px;
        margin-bottom: 14px;
      }
      .btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      .switch-hint {
        font-size: 12px;
        color: #767668;
        text-align: center;
        margin-top: 14px;
      }
      .link-btn {
        background: none;
        border: none;
        color: #23241F;
        font-weight: 700;
        cursor: pointer;
        text-decoration: underline;
        font-size: 12px;
        padding: 0;
      }
    `];be([R({type:Boolean})],Z.prototype,"open",2);be([A()],Z.prototype,"activeTab",2);be([A()],Z.prototype,"email",2);be([A()],Z.prototype,"password",2);be([A()],Z.prototype,"confirmPassword",2);be([A()],Z.prototype,"isLoading",2);be([A()],Z.prototype,"errorMessage",2);be([A()],Z.prototype,"successMessage",2);Z=be([ne("pt-auth-modal")],Z);var Il=Object.defineProperty,Dl=Object.getOwnPropertyDescriptor,j=(s,e,t,r)=>{for(var n=r>1?void 0:r?Dl(e,t):e,i=s.length-1,a;i>=0;i--)(a=s[i])&&(n=(r?a(e,t,n):a(n))||n);return r&&n&&Il(e,t,n),n};let I=class extends H{constructor(){super(...arguments),this.tab="main",this.instruments=[],this.sessions=[],this.activeSession=null,this.settings={soundEnabled:!0,hapticsEnabled:!0},this.syncStatus="local",this.lastSyncedAt=null,this.syncErrorMessage=null,this.isAuthenticated=!1,this.now=Date.now(),this.manualLogModalOpen=!1,this.settingsModalOpen=!1,this.authModalOpen=!1,this.editSessionModalOpen=!1,this.sessionToEdit=null,this.editInstrumentModalOpen=!1,this.instrumentToEdit=null}connectedCallback(){super.connectedCallback(),this.refreshState(),this.unsubscribeStore=x.subscribe(()=>{this.refreshState()}),Ur.start(),this.timerInterval=window.setInterval(()=>{this.activeSession&&(this.now=Date.now())},1e3)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeStore&&this.unsubscribeStore(),this.timerInterval&&clearInterval(this.timerInterval),Ur.stop()}refreshState(){this.instruments=x.getAllInstruments(),this.sessions=x.getSessions(),this.activeSession=x.getActiveSession(),this.settings=x.getSettings(),this.syncStatus=x.getSyncStatus(),this.lastSyncedAt=x.getLastSyncedAt(),this.syncErrorMessage=x.getSyncErrorMessage(),this.userEmail=x.getUserEmail(),this.isAuthenticated=x.isAuthenticated()}handleStartSession(s){x.startSession(s.detail.instrumentId)}handleEndSession(){x.endSession()}handleDiscardSession(){x.discardSession()}handleSaveManualSession(s){const{instrumentId:e,start:t,duration:r,notes:n}=s.detail;x.logManualSession(e,t,r,n)}handleUpdateSession(s){x.updateSession(s.detail.session)}handleDeleteSession(s){x.deleteSession(s.detail.sessionId)}handleAddInstrument(s){x.addInstrument(s.detail.name,s.detail.color,s.detail.tier)}handleUpdateInstrument(s){x.updateInstrument(s.detail.instrument)}handleRemoveInstrument(s){x.removeInstrument(s.detail.instrumentId)}handleUpdateSettings(s){x.updateSettings(s.detail)}handleExportBackup(){const s=x.exportBackup(),e=new Blob([s],{type:"application/json"}),t=URL.createObjectURL(e),r=document.createElement("a");r.href=t,r.download=`practice-tracker-backup-${new Date().toISOString().slice(0,10)}.json`,r.click(),URL.revokeObjectURL(t)}handleImportBackup(s){const e=x.importBackup(s.detail.jsonString);alert(e.message),e.success&&(this.settingsModalOpen=!1)}handleLoadDemoData(){x.loadDemoData()}handleClearAllData(){x.clearAllData()}render(){var n;const s=new Date,e=s.toLocaleDateString([],{day:"numeric",month:"long"}),t=s.toLocaleDateString([],{weekday:"long"}),r=this.instruments.filter(i=>!i.archived);return m`
      <div class="app-wrapper">
        <div class="phone-shell">
          <!-- Top Header -->
          <div class="top-header">
            <div class="header-date-info">
              <span>${e}</span>
              <span>${t}</span>
            </div>
            <div class="header-actions">
              <pt-sync-pill
                .syncStatus=${this.syncStatus}
                .lastSyncedAt=${this.lastSyncedAt}
                .errorMessage=${this.syncErrorMessage}
                @open-settings=${()=>this.settingsModalOpen=!0}
              ></pt-sync-pill>

              ${this.isAuthenticated?m`
                    <button
                      class="user-avatar-btn"
                      title="${this.userEmail||"Account"}"
                      @click=${()=>this.settingsModalOpen=!0}
                    >
                      ${(((n=this.userEmail)==null?void 0:n[0])||"U").toUpperCase()}
                    </button>
                  `:m`
                    <button
                      class="auth-header-btn"
                      @click=${()=>this.authModalOpen=!0}
                    >
                      Sign In
                    </button>
                  `}

              <button
                class="settings-icon-btn"
                title="Settings & Backups"
                @click=${()=>this.settingsModalOpen=!0}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Main Scrollable Content -->
          <div class="main-scroll-area">
            ${this.tab==="main"?m`
                  <pt-main-view
                    .instruments=${r}
                    .sessions=${this.sessions}
                    .activeSession=${this.activeSession}
                    .now=${this.now}
                    @start-session=${this.handleStartSession}
                    @end-session=${this.handleEndSession}
                    @discard-session=${this.handleDiscardSession}
                    @open-manual-log=${()=>this.manualLogModalOpen=!0}
                  ></pt-main-view>
                `:m``}
            ${this.tab==="kit"?m`
                  <pt-kit-view
                    .instruments=${this.instruments}
                    .sessions=${this.sessions}
                    @add-instrument=${this.handleAddInstrument}
                    @remove-instrument=${this.handleRemoveInstrument}
                    @open-edit-instrument=${i=>{this.instrumentToEdit=i.detail.instrument,this.editInstrumentModalOpen=!0}}
                  ></pt-kit-view>
                `:m``}
            ${this.tab==="data"?m`
                  <pt-data-view
                    .instruments=${this.instruments}
                    .sessions=${this.sessions}
                    @open-edit-session=${i=>{this.sessionToEdit=i.detail.session,this.editSessionModalOpen=!0}}
                  ></pt-data-view>
                `:m``}
          </div>

          <!-- Bottom Navigation Bar -->
          <div class="bottom-nav">
            <span
              class="nav-tab ${this.tab==="main"?"active":"inactive"}"
              @click=${()=>this.tab="main"}
            >
              Main
            </span>
            <span
              class="nav-tab ${this.tab==="kit"?"active":"inactive"}"
              @click=${()=>this.tab="kit"}
            >
              Kit
            </span>
            <span
              class="nav-tab ${this.tab==="data"?"active":"inactive"}"
              @click=${()=>this.tab="data"}
            >
              Data
            </span>
          </div>
        </div>
      </div>

      <!-- Modals -->
      <pt-manual-entry-modal
        .instruments=${r}
        .open=${this.manualLogModalOpen}
        @save-manual-session=${this.handleSaveManualSession}
        @close-modal=${()=>this.manualLogModalOpen=!1}
      ></pt-manual-entry-modal>

      <pt-edit-session-modal
        .instruments=${this.instruments}
        .session=${this.sessionToEdit}
        .open=${this.editSessionModalOpen}
        @update-session=${this.handleUpdateSession}
        @delete-session=${this.handleDeleteSession}
        @close-modal=${()=>{this.editSessionModalOpen=!1,this.sessionToEdit=null}}
      ></pt-edit-session-modal>

      <pt-edit-instrument-modal
        .instrument=${this.instrumentToEdit}
        .canDelete=${r.length>1}
        .open=${this.editInstrumentModalOpen}
        @update-instrument=${this.handleUpdateInstrument}
        @remove-instrument=${this.handleRemoveInstrument}
        @close-modal=${()=>{this.editInstrumentModalOpen=!1,this.instrumentToEdit=null}}
      ></pt-edit-instrument-modal>

      <pt-settings-modal
        .settings=${this.settings}
        .syncStatus=${this.syncStatus}
        .open=${this.settingsModalOpen}
        @update-settings=${this.handleUpdateSettings}
        @export-backup=${this.handleExportBackup}
        @import-backup=${this.handleImportBackup}
        @load-demo-data=${this.handleLoadDemoData}
        @clear-all-data=${this.handleClearAllData}
        @open-auth-modal=${()=>{this.settingsModalOpen=!1,this.authModalOpen=!0}}
        @close-modal=${()=>this.settingsModalOpen=!1}
      ></pt-settings-modal>

      <pt-auth-modal
        .open=${this.authModalOpen}
        @close-modal=${()=>this.authModalOpen=!1}
      ></pt-auth-modal>
    `}};I.styles=[ve,ee`
      :host {
        display: block;
        height: 100vh;
        height: 100dvh;
        background: #EDEDE9;
        font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
      }

      .app-wrapper {
        height: 100vh;
        height: 100dvh;
        width: 100%;
        display: flex;
        justify-content: center;
        background: #EDEDE9;
      }

      .phone-shell {
        width: 100%;
        max-width: 440px;
        height: 100%;
        background: #EDEDE9;
        display: flex;
        flex-direction: column;
        color: #23241F;
        position: relative;
      }

      .top-header {
        padding: 24px 24px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
      }

      .header-date-info {
        display: flex;
        gap: 12px;
        font-size: 13px;
        color: #767668;
        font-weight: 500;
      }

      .header-actions {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .auth-header-btn {
        background: #23241F;
        color: #F2F1EC;
        border: none;
        padding: 5px 12px;
        border-radius: 14px;
        font-size: 11px;
        font-weight: 700;
        cursor: pointer;
        transition: opacity 0.15s ease, transform 0.1s ease;
      }

      .auth-header-btn:hover {
        opacity: 0.88;
      }

      .auth-header-btn:active {
        transform: scale(0.96);
      }

      .user-avatar-btn {
        background: #E1E1DB;
        color: #23241F;
        border: none;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.15s ease;
      }

      .user-avatar-btn:hover {
        background: #D4D3CB;
      }

      .settings-icon-btn {
        background: transparent;
        border: none;
        cursor: pointer;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #767668;
        transition: background 0.15s ease, color 0.15s ease;
      }

      .settings-icon-btn:hover {
        background: #E1E1DB;
        color: #23241F;
      }

      .main-scroll-area {
        flex: 1;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      .bottom-nav {
        padding: 14px 20px 22px;
        display: flex;
        justify-content: space-around;
        font-size: 12px;
        flex-shrink: 0;
        border-top: 1px solid #E1E1DB;
        background: #EDEDE9;
      }

      .nav-tab {
        cursor: pointer;
        user-select: none;
        padding: 6px 16px;
        border-radius: 8px;
        transition: color 0.15s ease;
      }

      .nav-tab.active {
        color: #23241F;
        font-weight: 700;
      }

      .nav-tab.inactive {
        color: #767668;
        font-weight: 400;
      }
    `];j([A()],I.prototype,"tab",2);j([A()],I.prototype,"instruments",2);j([A()],I.prototype,"sessions",2);j([A()],I.prototype,"activeSession",2);j([A()],I.prototype,"settings",2);j([A()],I.prototype,"syncStatus",2);j([A()],I.prototype,"lastSyncedAt",2);j([A()],I.prototype,"syncErrorMessage",2);j([A()],I.prototype,"userEmail",2);j([A()],I.prototype,"isAuthenticated",2);j([A()],I.prototype,"now",2);j([A()],I.prototype,"manualLogModalOpen",2);j([A()],I.prototype,"settingsModalOpen",2);j([A()],I.prototype,"authModalOpen",2);j([A()],I.prototype,"editSessionModalOpen",2);j([A()],I.prototype,"sessionToEdit",2);j([A()],I.prototype,"editInstrumentModalOpen",2);j([A()],I.prototype,"instrumentToEdit",2);I=j([ne("pt-app")],I);"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})});
