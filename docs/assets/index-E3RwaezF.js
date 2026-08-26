(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ls=globalThis,Wn=Ls.ShadowRoot&&(Ls.ShadyCSS===void 0||Ls.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kn=Symbol(),Ti=new WeakMap;let Tr=class{constructor(e,s,n){if(this._$cssResult$=!0,n!==Kn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(Wn&&e===void 0){const n=s!==void 0&&s.length===1;n&&(e=Ti.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ti.set(s,e))}return e}toString(){return this.cssText}};const Fa=t=>new Tr(typeof t=="string"?t:t+"",void 0,Kn),Ne=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((n,i,r)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new Tr(s,t,Kn)},ja=(t,e)=>{if(Wn)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const n=document.createElement("style"),i=Ls.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=s.cssText,t.appendChild(n)}},Oi=Wn?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const n of e.cssRules)s+=n.cssText;return Fa(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ma,defineProperty:Na,getOwnPropertyDescriptor:La,getOwnPropertyNames:Ua,getOwnPropertySymbols:Ba,getPrototypeOf:za}=Object,Je=globalThis,Ci=Je.trustedTypes,Ha=Ci?Ci.emptyScript:"",xn=Je.reactiveElementPolyfillSupport,es=(t,e)=>t,Hs={toAttribute(t,e){switch(e){case Boolean:t=t?Ha:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},Vn=(t,e)=>!Ma(t,e),Ri={attribute:!0,type:String,converter:Hs,reflect:!1,useDefault:!1,hasChanged:Vn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Je.litPropertyMetadata??(Je.litPropertyMetadata=new WeakMap);let Pt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=Ri){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,s);i!==void 0&&Na(this.prototype,e,i)}}static getPropertyDescriptor(e,s,n){const{get:i,set:r}=La(this.prototype,e)??{get(){return this[s]},set(a){this[s]=a}};return{get:i,set(a){const o=i==null?void 0:i.call(this);r==null||r.call(this,a),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ri}static _$Ei(){if(this.hasOwnProperty(es("elementProperties")))return;const e=za(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(es("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(es("properties"))){const s=this.properties,n=[...Ua(s),...Ba(s)];for(const i of n)this.createProperty(i,s[i])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[n,i]of s)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[s,n]of this.elementProperties){const i=this._$Eu(s,n);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)s.unshift(Oi(i))}else e!==void 0&&s.push(Oi(e));return s}static _$Eu(e,s){const n=s.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$EO)==null||s.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const n of s.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ja(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var n;return(n=s.hostConnected)==null?void 0:n.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(s=>{var n;return(n=s.hostDisconnected)==null?void 0:n.call(s)})}attributeChangedCallback(e,s,n){this._$AK(e,n)}_$ET(e,s){var r;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const a=(((r=n.converter)==null?void 0:r.toAttribute)!==void 0?n.converter:Hs).toAttribute(s,n.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,s){var r,a;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=n.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:Hs;this._$Em=i;const c=l.fromAttribute(s,o.type);this[i]=c??((a=this._$Ej)==null?void 0:a.get(i))??c,this._$Em=null}}requestUpdate(e,s,n,i=!1,r){var a;if(e!==void 0){const o=this.constructor;if(i===!1&&(r=this[e]),n??(n=o.getPropertyOptions(e)),!((n.hasChanged??Vn)(r,s)||n.useDefault&&n.reflect&&r===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(o._$Eu(e,n))))return;this.C(e,s,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:n,reflect:i,wrapped:r},a){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??s??this[e]),r!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(s=void 0),this._$AL.set(e,s)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,a]of i){const{wrapped:o}=a,l=this[r];o!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,a,l)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(n=this._$EO)==null||n.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(s)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$EO)==null||s.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(e){}firstUpdated(e){}};Pt.elementStyles=[],Pt.shadowRootOptions={mode:"open"},Pt[es("elementProperties")]=new Map,Pt[es("finalized")]=new Map,xn==null||xn({ReactiveElement:Pt}),(Je.reactiveElementVersions??(Je.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ts=globalThis,Ii=t=>t,qs=ts.trustedTypes,Pi=qs?qs.createPolicy("lit-html",{createHTML:t=>t}):void 0,Or="$lit$",Ke=`lit$${Math.random().toFixed(9).slice(2)}$`,Cr="?"+Ke,qa=`<${Cr}>`,pt=document,ns=()=>pt.createComment(""),is=t=>t===null||typeof t!="object"&&typeof t!="function",Gn=Array.isArray,Wa=t=>Gn(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",_n=`[ 	
\f\r]`,Gt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Di=/-->/g,Fi=/>/g,st=RegExp(`>|${_n}(?:([^\\s"'>=/]+)(${_n}*=${_n}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ji=/'/g,Mi=/"/g,Rr=/^(?:script|style|textarea|title)$/i,Ka=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),k=Ka(1),Lt=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),Ni=new WeakMap,ct=pt.createTreeWalker(pt,129);function Ir(t,e){if(!Gn(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pi!==void 0?Pi.createHTML(e):e}const Va=(t,e)=>{const s=t.length-1,n=[];let i,r=e===2?"<svg>":e===3?"<math>":"",a=Gt;for(let o=0;o<s;o++){const l=t[o];let c,h,u=-1,g=0;for(;g<l.length&&(a.lastIndex=g,h=a.exec(l),h!==null);)g=a.lastIndex,a===Gt?h[1]==="!--"?a=Di:h[1]!==void 0?a=Fi:h[2]!==void 0?(Rr.test(h[2])&&(i=RegExp("</"+h[2],"g")),a=st):h[3]!==void 0&&(a=st):a===st?h[0]===">"?(a=i??Gt,u=-1):h[1]===void 0?u=-2:(u=a.lastIndex-h[2].length,c=h[1],a=h[3]===void 0?st:h[3]==='"'?Mi:ji):a===Mi||a===ji?a=st:a===Di||a===Fi?a=Gt:(a=st,i=void 0);const f=a===st&&t[o+1].startsWith("/>")?" ":"";r+=a===Gt?l+qa:u>=0?(n.push(c),l.slice(0,u)+Or+l.slice(u)+Ke+f):l+Ke+(u===-2?o:f)}return[Ir(t,r+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class rs{constructor({strings:e,_$litType$:s},n){let i;this.parts=[];let r=0,a=0;const o=e.length-1,l=this.parts,[c,h]=Va(e,s);if(this.el=rs.createElement(c,n),ct.currentNode=this.el.content,s===2||s===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=ct.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(Or)){const g=h[a++],f=i.getAttribute(u).split(Ke),v=/([.?@])?(.*)/.exec(g);l.push({type:1,index:r,name:v[2],strings:f,ctor:v[1]==="."?Ja:v[1]==="?"?Ya:v[1]==="@"?Xa:Zs}),i.removeAttribute(u)}else u.startsWith(Ke)&&(l.push({type:6,index:r}),i.removeAttribute(u));if(Rr.test(i.tagName)){const u=i.textContent.split(Ke),g=u.length-1;if(g>0){i.textContent=qs?qs.emptyScript:"";for(let f=0;f<g;f++)i.append(u[f],ns()),ct.nextNode(),l.push({type:2,index:++r});i.append(u[g],ns())}}}else if(i.nodeType===8)if(i.data===Cr)l.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(Ke,u+1))!==-1;)l.push({type:7,index:r}),u+=Ke.length-1}r++}}static createElement(e,s){const n=pt.createElement("template");return n.innerHTML=e,n}}function Ut(t,e,s=t,n){var a,o;if(e===Lt)return e;let i=n!==void 0?(a=s._$Co)==null?void 0:a[n]:s._$Cl;const r=is(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((o=i==null?void 0:i._$AO)==null||o.call(i,!1),r===void 0?i=void 0:(i=new r(t),i._$AT(t,s,n)),n!==void 0?(s._$Co??(s._$Co=[]))[n]=i:s._$Cl=i),i!==void 0&&(e=Ut(t,i._$AS(t,e.values),i,n)),e}class Ga{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??pt).importNode(s,!0);ct.currentNode=i;let r=ct.nextNode(),a=0,o=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new gs(r,r.nextSibling,this,e):l.type===1?c=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(c=new Qa(r,this,e)),this._$AV.push(c),l=n[++o]}a!==(l==null?void 0:l.index)&&(r=ct.nextNode(),a++)}return ct.currentNode=pt,i}p(e){let s=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,s),s+=n.strings.length-2):n._$AI(e[s])),s++}}class gs{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,n,i){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=Ut(this,e,s),is(e)?e===V||e==null||e===""?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==Lt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Wa(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==V&&is(this._$AH)?this._$AA.nextSibling.data=e:this.T(pt.createTextNode(e)),this._$AH=e}$(e){var r;const{values:s,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=rs.createElement(Ir(n.h,n.h[0]),this.options)),n);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(s);else{const a=new Ga(i,this),o=a.u(this.options);a.p(s),this.T(o),this._$AH=a}}_$AC(e){let s=Ni.get(e.strings);return s===void 0&&Ni.set(e.strings,s=new rs(e)),s}k(e){Gn(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let n,i=0;for(const r of e)i===s.length?s.push(n=new gs(this.O(ns()),this.O(ns()),this,this.options)):n=s[i],n._$AI(r),i++;i<s.length&&(this._$AR(n&&n._$AB.nextSibling,i),s.length=i)}_$AR(e=this._$AA.nextSibling,s){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,s);e!==this._$AB;){const i=Ii(e).nextSibling;Ii(e).remove(),e=i}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}}class Zs{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,n,i,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=s,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=V}_$AI(e,s=this,n,i){const r=this.strings;let a=!1;if(r===void 0)e=Ut(this,e,s,0),a=!is(e)||e!==this._$AH&&e!==Lt,a&&(this._$AH=e);else{const o=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=Ut(this,o[n+l],s,l),c===Lt&&(c=this._$AH[l]),a||(a=!is(c)||c!==this._$AH[l]),c===V?e=V:e!==V&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}a&&!i&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ja extends Zs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}}class Ya extends Zs{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==V)}}class Xa extends Zs{constructor(e,s,n,i,r){super(e,s,n,i,r),this.type=5}_$AI(e,s=this){if((e=Ut(this,e,s,0)??V)===Lt)return;const n=this._$AH,i=e===V&&n!==V||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==V&&(n===V||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}}class Qa{constructor(e,s,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ut(this,e)}}const kn=ts.litHtmlPolyfillSupport;kn==null||kn(rs,gs),(ts.litHtmlVersions??(ts.litHtmlVersions=[])).push("3.3.3");const Za=(t,e,s)=>{const n=(s==null?void 0:s.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const r=(s==null?void 0:s.renderBefore)??null;n._$litPart$=i=new gs(e.insertBefore(ns(),r),r,void 0,s??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=globalThis;class le extends Pt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Za(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Lt}}var $r;le._$litElement$=!0,le.finalized=!0,($r=ht.litElementHydrateSupport)==null||$r.call(ht,{LitElement:le});const Sn=ht.litElementPolyfillSupport;Sn==null||Sn({LitElement:le});(ht.litElementVersions??(ht.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eo={attribute:!0,type:String,converter:Hs,reflect:!1,hasChanged:Vn},to=(t=eo,e,s)=>{const{kind:n,metadata:i}=s;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),r.set(s.name,t),n==="accessor"){const{name:a}=s;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,t,!0,o)},init(o){return o!==void 0&&this.C(a,void 0,t,o),o}}}if(n==="setter"){const{name:a}=s;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,t,!0,o)}}throw Error("Unsupported decorator location: "+n)};function q(t){return(e,s)=>typeof s=="object"?to(t,e,s):((n,i,r)=>{const a=i.hasOwnProperty(r);return i.constructor.createProperty(r,n),a?Object.getOwnPropertyDescriptor(i,r):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T(t){return q({...t,state:!0,attribute:!1})}function so(t){return t.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||"instrument"}function ft(t){const e=new Date(t);return e.setHours(0,0,0,0),e}function Yt(t,e){const s=new Date(t);return s.setDate(s.getDate()+e),s}function no(t){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}let At=null;function Jn(){if(typeof window>"u")return null;if(!At){const t=window.AudioContext||window.webkitAudioContext;t&&(At=new t)}return At&&At.state==="suspended"&&At.resume().catch(()=>{}),At}function io(t=!0){if(t)try{const e=Jn();if(!e)return;const s=e.currentTime,n=(i,r,a,o)=>{const l=e.createOscillator(),c=e.createOscillator(),h=e.createGain(),u=e.createGain();l.type="sine",l.frequency.setValueAtTime(i,r),c.type="sine",c.frequency.setValueAtTime(i*2,r),h.gain.setValueAtTime(1e-4,r),h.gain.exponentialRampToValueAtTime(o,r+.02),h.gain.exponentialRampToValueAtTime(1e-4,r+a),u.gain.setValueAtTime(1e-4,r),u.gain.exponentialRampToValueAtTime(o*.25,r+.015),u.gain.exponentialRampToValueAtTime(1e-4,r+a*.6),l.connect(h),c.connect(u),h.connect(e.destination),u.connect(e.destination),l.start(r),c.start(r),l.stop(r+a+.05),c.stop(r+a+.05)};n(523.25,s,.5,.1),n(659.25,s+.1,.8,.12)}catch{}}function ot(t=!0){if(t)try{const e=Jn();if(!e)return;const s=e.currentTime,n=(i,r,a,o)=>{const l=e.createOscillator(),c=e.createOscillator(),h=e.createGain(),u=e.createGain();l.type="sine",l.frequency.setValueAtTime(i,r),c.type="sine",c.frequency.setValueAtTime(i*2,r),h.gain.setValueAtTime(1e-4,r),h.gain.exponentialRampToValueAtTime(o,r+.02),h.gain.exponentialRampToValueAtTime(1e-4,r+a),u.gain.setValueAtTime(1e-4,r),u.gain.exponentialRampToValueAtTime(o*.25,r+.015),u.gain.exponentialRampToValueAtTime(1e-4,r+a*.6),l.connect(h),c.connect(u),h.connect(e.destination),u.connect(e.destination),l.start(r),c.start(r),l.stop(r+a+.05),c.stop(r+a+.05)};n(523.25,s,.5,.1),n(659.25,s+.09,.6,.11),n(783.99,s+.18,1.1,.13)}catch{}}function ve(t=!0){if(t)try{const e=Jn();if(!e)return;const s=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.setValueAtTime(420,s),n.frequency.exponentialRampToValueAtTime(220,s+.035),i.gain.setValueAtTime(.04,s),i.gain.exponentialRampToValueAtTime(1e-4,s+.04),n.connect(i),i.connect(e.destination),n.start(s),n.stop(s+.04)}catch{}}function En(t=15,e=!0){if(e)try{typeof navigator<"u"&&"vibrate"in navigator&&navigator.vibrate(t)}catch{}}class ro{formatUrl(e){let s=e.trim().replace(/\/+$/,"");return s&&!s.startsWith("http://")&&!s.startsWith("https://")&&(s="https://"+s),s}applyAuthHeaders(e,s){if(!s)return;const n=s.trim();n.toLowerCase().startsWith("bearer ")?e.Authorization=n:n.includes(".")&&n.length>30?e.Authorization=`Bearer ${n}`:e["X-PT-Secret"]=n}async testConnection(e,s){const n=this.formatUrl(e);if(!n)return{ok:!1,status:0,message:"Worker URL cannot be empty"};try{const i={};this.applyAuthHeaders(i,s);const r=new AbortController,a=setTimeout(()=>r.abort(),8e3),o=await fetch(`${n}/api/health`,{method:"GET",headers:i,signal:r.signal});if(clearTimeout(a),o.status===200)return{ok:!0,status:200,message:"Connected to Cloudflare Worker",timestamp:(await o.json().catch(()=>({}))).timestamp};if(o.status===401)return{ok:!1,status:401,message:"Unauthorized: Invalid or missing authorization token"};const l=await o.text().catch(()=>"");return{ok:!1,status:o.status,message:`Connection error (${o.status}): ${l||o.statusText}`}}catch(i){return i instanceof Error&&i.name==="AbortError"?{ok:!1,status:0,message:"Connection timed out (8s limit)"}:{ok:!1,status:0,message:"Network error: Unable to reach worker endpoint"}}}async sync(e,s,n){const i=this.formatUrl(e);if(!i)throw new Error("Worker URL is not configured");const r={"Content-Type":"application/json"};this.applyAuthHeaders(r,s);const a=new AbortController,o=setTimeout(()=>a.abort(),15e3),l=await fetch(`${i}/api/sync`,{method:"POST",headers:r,body:JSON.stringify(n),signal:a.signal});if(clearTimeout(o),!l.ok){let c="";try{const h=await l.json();c=h.error||h.message||""}catch{c=await l.text().catch(()=>"")}throw new Error(`Cloud sync failed (${l.status}): ${c||l.statusText||"Unknown error"}`)}return await l.json()}}const Li=new ro,ao=Symbol.for("@supabase/supabase-js.traceContextExtractor");function oo(){return globalThis[ao]}function en(t,e){var s={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(s[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(s[n[i]]=t[n[i]]);return s}function lo(t,e,s,n){function i(r){return r instanceof s?r:new s(function(a){a(r)})}return new(s||(s=Promise))(function(r,a){function o(h){try{c(n.next(h))}catch(u){a(u)}}function l(h){try{c(n.throw(h))}catch(u){a(u)}}function c(h){h.done?r(h.value):i(h.value).then(o,l)}c((n=n.apply(t,e||[])).next())})}const co=t=>t?(...e)=>t(...e):(...e)=>fetch(...e);class Yn extends Error{constructor(e,s="FunctionsError",n){super(e),this.name=s,this.context=n}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class uo extends Yn{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class Ui extends Yn{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class Bi extends Yn{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var Fn;(function(t){t.Any="any",t.ApNortheast1="ap-northeast-1",t.ApNortheast2="ap-northeast-2",t.ApSouth1="ap-south-1",t.ApSoutheast1="ap-southeast-1",t.ApSoutheast2="ap-southeast-2",t.CaCentral1="ca-central-1",t.EuCentral1="eu-central-1",t.EuWest1="eu-west-1",t.EuWest2="eu-west-2",t.EuWest3="eu-west-3",t.SaEast1="sa-east-1",t.UsEast1="us-east-1",t.UsWest1="us-west-1",t.UsWest2="us-west-2"})(Fn||(Fn={}));class ho{constructor(e,{headers:s={},customFetch:n,region:i=Fn.Any}={}){this.url=e,this.headers=s,this.region=i,this.fetch=co(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return lo(this,arguments,void 0,function*(s,n={}){var i,r;let a,o,l;try{const{headers:c,method:h,body:u,signal:g,timeout:f}=n;let v={},{region:m}=n;m||(m=this.region);const b=new URL(`${this.url}/${s}`);m&&m!=="any"&&(v["x-region"]=m,b.searchParams.set("forceFunctionRegion",m));let w;const x=!!c&&Object.keys(c).some(ye=>ye.toLowerCase()==="content-type");u&&!x?typeof Blob<"u"&&u instanceof Blob||u instanceof ArrayBuffer?(v["Content-Type"]="application/octet-stream",w=u):typeof u=="string"?(v["Content-Type"]="text/plain",w=u):typeof FormData<"u"&&u instanceof FormData?w=u:(v["Content-Type"]="application/json",w=JSON.stringify(u)):u&&typeof u!="string"&&!(typeof Blob<"u"&&u instanceof Blob)&&!(u instanceof ArrayBuffer)&&!(typeof FormData<"u"&&u instanceof FormData)?w=JSON.stringify(u):w=u;let p=g;f&&(o=new AbortController,a=setTimeout(()=>o.abort(),f),g?(p=o.signal,l=()=>o.abort(),g.addEventListener("abort",l)):p=o.signal);const _=yield this.fetch(b.toString(),{method:h||"POST",headers:Object.assign(Object.assign(Object.assign({},v),this.headers),c),body:w,signal:p}).catch(ye=>{throw new uo(ye)}),R=_.headers.get("x-relay-error");if(R&&R==="true")throw new Ui(_);if(!_.ok)throw new Bi(_);let C=((i=_.headers.get("Content-Type"))!==null&&i!==void 0?i:"text/plain").split(";")[0].trim().toLowerCase(),O;return C==="application/json"?O=yield _.json():C==="application/octet-stream"||C==="application/pdf"?O=yield _.blob():C==="text/event-stream"?O=_:C==="multipart/form-data"?O=yield _.formData():O=yield _.text(),{data:O,error:null,response:_}}catch(c){return{data:null,error:c,response:c instanceof Bi||c instanceof Ui?c.context:void 0}}finally{a&&clearTimeout(a),l&&((r=n.signal)===null||r===void 0||r.removeEventListener("abort",l))}})}}const Pr=3,zi=t=>Math.min(1e3*2**t,3e4),po=[520,503],Dr=["GET","HEAD","OPTIONS"];var An=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function as(t){"@babel/helpers - typeof";return as=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},as(t)}function fo(t,e){if(as(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var n=s.call(t,e);if(as(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function go(t){var e=fo(t,"string");return as(e)=="symbol"?e:e+""}function mo(t,e,s){return(e=go(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Hi(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),s.push.apply(s,n)}return s}function jt(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Hi(Object(s),!0).forEach(function(n){mo(t,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Hi(Object(s)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(s,n))})}return t}function qi(t,e){return new Promise(s=>{if(e!=null&&e.aborted){s();return}const n=setTimeout(()=>{e==null||e.removeEventListener("abort",i),s()},t);function i(){clearTimeout(n),s()}e==null||e.addEventListener("abort",i)})}function bo(t,e,s,n){return!(!n||s>=Pr||!Dr.includes(t)||!po.includes(e))}var yo=class{constructor(t){var e,s,n,i,r;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=t.method,this.url=t.url,this.headers=new Headers(t.headers),this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=(e=t.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=t.signal,this.isMaybeSingle=(s=t.isMaybeSingle)!==null&&s!==void 0?s:!1,this.shouldStripNulls=(n=t.shouldStripNulls)!==null&&n!==void 0?n:!1,this.urlLengthLimit=(i=t.urlLengthLimit)!==null&&i!==void 0?i:8e3,this.retryEnabled=(r=t.retry)!==null&&r!==void 0?r:!0,t.fetch?this.fetch=t.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(t,e){return this.headers=new Headers(this.headers),this.headers.set(t,e),this}retry(t){return this.retryEnabled=t,this}then(t,e){var s=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const a=this.headers.get("Accept");a==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!a||a==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const n=this.fetch;let r=(async()=>{let a=0;for(;;){const c={};s.headers.forEach((u,g)=>{c[g]=u}),a>0&&(c["X-Retry-Count"]=String(a));let h;try{h=await n(s.url.toString(),{method:s.method,headers:c,body:JSON.stringify(s.body,(u,g)=>typeof g=="bigint"?g.toString():g),signal:s.signal})}catch(u){if((u==null?void 0:u.name)==="AbortError"||(u==null?void 0:u.code)==="ABORT_ERR"||!Dr.includes(s.method))throw u;if(s.retryEnabled&&a<Pr){const g=zi(a);a++,await qi(g,s.signal);continue}throw u}if(bo(s.method,h.status,a,s.retryEnabled)){var o,l;const u=(o=(l=h.headers)===null||l===void 0?void 0:l.get("Retry-After"))!==null&&o!==void 0?o:null,g=u!==null?Math.max(0,parseInt(u,10)||0)*1e3:zi(a);await h.text(),a++,await qi(g,s.signal);continue}return await s.processResponse(h)}})();return this.shouldThrowOnError||(r=r.catch(a=>{var o;let l="",c="",h="";const u=a==null?void 0:a.cause;if(u){var g,f,v,m;const x=(g=u==null?void 0:u.message)!==null&&g!==void 0?g:"",p=(f=u==null?void 0:u.code)!==null&&f!==void 0?f:"";l=`${(v=a==null?void 0:a.name)!==null&&v!==void 0?v:"FetchError"}: ${a==null?void 0:a.message}`,l+=`

Caused by: ${(m=u==null?void 0:u.name)!==null&&m!==void 0?m:"Error"}: ${x}`,p&&(l+=` (${p})`),u!=null&&u.stack&&(l+=`
${u.stack}`)}else{var b;l=(b=a==null?void 0:a.stack)!==null&&b!==void 0?b:""}const w=this.url.toString().length;return(a==null?void 0:a.name)==="AbortError"||(a==null?void 0:a.code)==="ABORT_ERR"?(h="",c="Request was aborted (timeout or manual cancellation)",w>this.urlLengthLimit&&(c+=`. Note: Your request URL is ${w} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((u==null?void 0:u.name)==="HeadersOverflowError"||(u==null?void 0:u.code)==="UND_ERR_HEADERS_OVERFLOW")&&(h="",c="HTTP headers exceeded server limits (typically 16KB)",w>this.urlLengthLimit&&(c+=`. Your request URL is ${w} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(o=a==null?void 0:a.name)!==null&&o!==void 0?o:"FetchError"}: ${a==null?void 0:a.message}`,details:l,hint:c,code:h},data:null,count:null,status:0,statusText:""}})),r.then(t,e)}async processResponse(t){var e=this;let s=null,n=null,i=null,r=t.status,a=t.statusText;if(t.ok){var o,l;if(e.method!=="HEAD"){var c;const f=await t.text();if(f!=="")if(e.headers.get("Accept")==="text/csv")n=f;else if(e.headers.get("Accept")&&(!((c=e.headers.get("Accept"))===null||c===void 0)&&c.includes("application/vnd.pgrst.plan+text")))n=f;else try{n=JSON.parse(f)}catch{if(s={message:f},n=null,e.shouldThrowOnError)throw new An({message:f,details:"",hint:"",code:""})}}const u=(o=e.headers.get("Prefer"))===null||o===void 0?void 0:o.match(/count=(exact|planned|estimated)/),g=(l=t.headers.get("content-range"))===null||l===void 0?void 0:l.split("/");if(u&&g&&g.length>1&&(i=parseInt(g[1])),e.isMaybeSingle&&Array.isArray(n))if(n.length>1){if(s={code:"PGRST116",details:`Results contain ${n.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},n=null,i=null,r=406,a="Not Acceptable",e.shouldThrowOnError){var h;throw new An(jt(jt({},s),{},{hint:(h=s.hint)!==null&&h!==void 0?h:""}))}}else n.length===1?n=n[0]:n=null}else{const u=await t.text();try{s=JSON.parse(u),Array.isArray(s)&&t.status===404&&(n=[],s=null,r=200,a="OK")}catch{t.status===404&&u===""?(r=204,a="No Content"):s={message:u}}if(s&&e.shouldThrowOnError)throw new An(s)}return{success:s===null,error:s,data:n,count:i,status:r,statusText:a}}returns(){return this}overrideTypes(){return this}},vo=class extends yo{throwOnError(){return super.throwOnError()}select(t){let e=!1;const s=(t??"*").split("").map(n=>/\s/.test(n)&&!e?"":(n==='"'&&(e=!e),n)).join("");return this.url.searchParams.set("select",s),this.headers.append("Prefer","return=representation"),this}order(t,{ascending:e=!0,nullsFirst:s,foreignTable:n,referencedTable:i=n}={}){const r=i?`${i}.order`:"order",a=this.url.searchParams.get(r);return this.url.searchParams.set(r,`${a?`${a},`:""}${t}.${e?"asc":"desc"}${s===void 0?"":s?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:e,referencedTable:s=e}={}){const n=typeof s>"u"?"limit":`${s}.limit`;return this.url.searchParams.set(n,`${t}`),this}range(t,e,{foreignTable:s,referencedTable:n=s}={}){const i=typeof n>"u"?"offset":`${n}.offset`,r=typeof n>"u"?"limit":`${n}.limit`;return this.url.searchParams.set(i,`${t}`),this.url.searchParams.set(r,`${e-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:t=!1,verbose:e=!1,settings:s=!1,buffers:n=!1,wal:i=!1,format:r="text"}={}){var a;const o=[t?"analyze":null,e?"verbose":null,s?"settings":null,n?"buffers":null,i?"wal":null].filter(Boolean).join("|"),l=(a=this.headers.get("Accept"))!==null&&a!==void 0?a:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${r}; for="${l}"; options=${o};`),r==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(t){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${t}`),this}};const Wi=new RegExp("[,()]");var Dt=class extends vo{throwOnError(){return super.throwOnError()}eq(t,e){return this.url.searchParams.append(t,`eq.${e}`),this}neq(t,e){return this.url.searchParams.append(t,`neq.${e}`),this}gt(t,e){return this.url.searchParams.append(t,`gt.${e}`),this}gte(t,e){return this.url.searchParams.append(t,`gte.${e}`),this}lt(t,e){return this.url.searchParams.append(t,`lt.${e}`),this}lte(t,e){return this.url.searchParams.append(t,`lte.${e}`),this}like(t,e){return this.url.searchParams.append(t,`like.${e}`),this}likeAllOf(t,e){return this.url.searchParams.append(t,`like(all).{${e.join(",")}}`),this}likeAnyOf(t,e){return this.url.searchParams.append(t,`like(any).{${e.join(",")}}`),this}ilike(t,e){return this.url.searchParams.append(t,`ilike.${e}`),this}ilikeAllOf(t,e){return this.url.searchParams.append(t,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(t,e){return this.url.searchParams.append(t,`ilike(any).{${e.join(",")}}`),this}regexMatch(t,e){return this.url.searchParams.append(t,`match.${e}`),this}regexIMatch(t,e){return this.url.searchParams.append(t,`imatch.${e}`),this}is(t,e){return this.url.searchParams.append(t,`is.${e}`),this}isDistinct(t,e){return this.url.searchParams.append(t,`isdistinct.${e}`),this}in(t,e){const s=Array.from(new Set(e)).map(n=>typeof n=="string"&&Wi.test(n)?`"${n}"`:`${n}`).join(",");return this.url.searchParams.append(t,`in.(${s})`),this}notIn(t,e){const s=Array.from(new Set(e)).map(n=>typeof n=="string"&&Wi.test(n)?`"${n}"`:`${n}`).join(",");return this.url.searchParams.append(t,`not.in.(${s})`),this}contains(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cs.{${e.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(e)}`),this}containedBy(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cd.{${e.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(e)}`),this}rangeGt(t,e){return this.url.searchParams.append(t,`sr.${e}`),this}rangeGte(t,e){return this.url.searchParams.append(t,`nxl.${e}`),this}rangeLt(t,e){return this.url.searchParams.append(t,`sl.${e}`),this}rangeLte(t,e){return this.url.searchParams.append(t,`nxr.${e}`),this}rangeAdjacent(t,e){return this.url.searchParams.append(t,`adj.${e}`),this}overlaps(t,e){return typeof e=="string"?this.url.searchParams.append(t,`ov.${e}`):this.url.searchParams.append(t,`ov.{${e.join(",")}}`),this}textSearch(t,e,{config:s,type:n}={}){let i="";n==="plain"?i="pl":n==="phrase"?i="ph":n==="websearch"&&(i="w");const r=s===void 0?"":`(${s})`;return this.url.searchParams.append(t,`${i}fts${r}.${e}`),this}match(t){return Object.entries(t).filter(([e,s])=>s!==void 0).forEach(([e,s])=>{this.url.searchParams.append(e,`eq.${s}`)}),this}not(t,e,s){return this.url.searchParams.append(t,`not.${e}.${s}`),this}or(t,{foreignTable:e,referencedTable:s=e}={}){const n=s?`${s}.or`:"or";return this.url.searchParams.append(n,`(${t})`),this}filter(t,e,s){return this.url.searchParams.append(t,`${e}.${s}`),this}},wo=class{constructor(t,{headers:e={},schema:s,fetch:n,urlLengthLimit:i=8e3,retry:r}){this.url=t,this.headers=new Headers(e),this.schema=s,this.fetch=n,this.urlLengthLimit=i,this.retry=r}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(t,e){const{head:s=!1,count:n}=e??{},i=s?"HEAD":"GET";let r=!1;const a=(t??"*").split("").map(c=>/\s/.test(c)&&!r?"":(c==='"'&&(r=!r),c)).join(""),{url:o,headers:l}=this.cloneRequestState();return o.searchParams.set("select",a),n&&l.append("Prefer",`count=${n}`),new Dt({method:i,url:o,headers:l,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(t,{count:e,defaultToNull:s=!0}={}){var n;const i="POST",{url:r,headers:a}=this.cloneRequestState();if(e&&a.append("Prefer",`count=${e}`),s||a.append("Prefer","missing=default"),Array.isArray(t)){const o=t.reduce((l,c)=>l.concat(Object.keys(c)),[]);if(o.length>0){const l=[...new Set(o)].map(c=>`"${c}"`);r.searchParams.set("columns",l.join(","))}}return new Dt({method:i,url:r,headers:a,schema:this.schema,body:t,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(t,{onConflict:e,ignoreDuplicates:s=!1,count:n,defaultToNull:i=!0}={}){var r;const a="POST",{url:o,headers:l}=this.cloneRequestState();if(l.append("Prefer",`resolution=${s?"ignore":"merge"}-duplicates`),e!==void 0&&o.searchParams.set("on_conflict",e),n&&l.append("Prefer",`count=${n}`),i||l.append("Prefer","missing=default"),Array.isArray(t)){const c=t.reduce((h,u)=>h.concat(Object.keys(u)),[]);if(c.length>0){const h=[...new Set(c)].map(u=>`"${u}"`);o.searchParams.set("columns",h.join(","))}}return new Dt({method:a,url:o,headers:l,schema:this.schema,body:t,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(t,{count:e}={}){var s;const n="PATCH",{url:i,headers:r}=this.cloneRequestState();return e&&r.append("Prefer",`count=${e}`),new Dt({method:n,url:i,headers:r,schema:this.schema,body:t,fetch:(s=this.fetch)!==null&&s!==void 0?s:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:t}={}){var e;const s="DELETE",{url:n,headers:i}=this.cloneRequestState();return t&&i.append("Prefer",`count=${t}`),new Dt({method:s,url:n,headers:i,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}},xo=class Fr{constructor(e,{headers:s={},schema:n,fetch:i,timeout:r,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(s),this.schemaName=n,this.urlLengthLimit=a;const l=i??globalThis.fetch;r!==void 0&&r>0?this.fetch=(c,h)=>{const u=new AbortController,g=setTimeout(()=>u.abort(),r),f=h==null?void 0:h.signal;if(f){if(f.aborted)return clearTimeout(g),l(c,h);const v=()=>{clearTimeout(g),u.abort()};return f.addEventListener("abort",v,{once:!0}),l(c,jt(jt({},h),{},{signal:u.signal})).finally(()=>{clearTimeout(g),f.removeEventListener("abort",v)})}return l(c,jt(jt({},h),{},{signal:u.signal})).finally(()=>clearTimeout(g))}:this.fetch=l,this.retry=o}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new wo(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new Fr(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,s={},{head:n=!1,get:i=!1,count:r}={}){var a;let o;const l=new URL(`${this.url}/rpc/${e}`);let c;const h=f=>f!==null&&typeof f=="object"&&(!Array.isArray(f)||f.some(h)),u=n&&Object.values(s).some(h);u?(o="POST",c=s):n||i?(o=n?"HEAD":"GET",Object.entries(s).filter(([f,v])=>v!==void 0).map(([f,v])=>[f,Array.isArray(v)?`{${v.join(",")}}`:`${v}`]).forEach(([f,v])=>{l.searchParams.append(f,v)})):(o="POST",c=s);const g=new Headers(this.headers);return u?g.set("Prefer",r?`count=${r},return=minimal`:"return=minimal"):r&&g.set("Prefer",`count=${r}`),new Dt({method:o,url:l,headers:g,schema:this.schemaName,body:c,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class _o{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const s=globalThis;if(typeof globalThis<"u"&&typeof s.WebSocket<"u")return{type:"native",wsConstructor:s.WebSocket};const n=typeof global<"u"?global:void 0;if(n&&typeof n.WebSocket<"u")return{type:"native",wsConstructor:n.WebSocket};if(typeof globalThis<"u"&&typeof s.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&s.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const i=globalThis.process;if(i){const r=i.versions;if(r&&r.node)return{type:"unsupported",error:"Node.js detected but native WebSocket not found.",workaround:"Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option."}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let s=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(s+=`

Suggested solution: ${e.workaround}`),new Error(s)}static isWebSocketSupported(){try{return this.detectEnvironment().type==="native"}catch{return!1}}}const ko="2.112.3",So=`realtime-js/${ko}`,Eo="1.0.0",jr="2.0.0",Ao=jr,$o=1e4,To=100,Ve={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Mr={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},jn={connecting:"connecting",closing:"closing",closed:"closed"};class Oo{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,s){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return s(this._binaryEncodeUserBroadcastPush(e));let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return s(JSON.stringify(n))}_binaryEncodeUserBroadcastPush(e){var s;return this._isArrayBuffer((s=e.payload)===null||s===void 0?void 0:s.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var s,n;const i=(n=(s=e.payload)===null||s===void 0?void 0:s.payload)!==null&&n!==void 0?n:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,i)}_encodeJsonUserBroadcastPush(e){var s,n;const i=(n=(s=e.payload)===null||s===void 0?void 0:s.payload)!==null&&n!==void 0?n:{},a=new TextEncoder().encode(JSON.stringify(i)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,a)}_encodeUserBroadcastPush(e,s,n){var i,r;const a=new TextEncoder,o=a.encode(e.topic),l=a.encode((i=e.ref)!==null&&i!==void 0?i:""),c=a.encode((r=e.join_ref)!==null&&r!==void 0?r:""),h=a.encode(e.payload.event),u=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},g=a.encode(Object.keys(u).length===0?"":JSON.stringify(u));if(c.length>255)throw new Error(`joinRef length ${c.length} exceeds maximum of 255`);if(l.length>255)throw new Error(`ref length ${l.length} exceeds maximum of 255`);if(o.length>255)throw new Error(`topic length ${o.length} exceeds maximum of 255`);if(h.length>255)throw new Error(`userEvent length ${h.length} exceeds maximum of 255`);if(g.length>255)throw new Error(`metadata length ${g.length} exceeds maximum of 255`);const f=this.USER_BROADCAST_PUSH_META_LENGTH+c.length+l.length+o.length+h.length+g.length,v=new ArrayBuffer(this.HEADER_LENGTH+f),m=new DataView(v),b=new Uint8Array(v);let w=0;m.setUint8(w++,this.KINDS.userBroadcastPush),m.setUint8(w++,c.length),m.setUint8(w++,l.length),m.setUint8(w++,o.length),m.setUint8(w++,h.length),m.setUint8(w++,g.length),m.setUint8(w++,s),b.set(c,w),w+=c.length,b.set(l,w),w+=l.length,b.set(o,w),w+=o.length,b.set(h,w),w+=h.length,b.set(g,w),w+=g.length;var x=new Uint8Array(v.byteLength+n.byteLength);return x.set(new Uint8Array(v),0),x.set(new Uint8Array(n),v.byteLength),x.buffer}decode(e,s){if(this._isArrayBuffer(e)){let n=this._binaryDecode(e);return s(n)}if(typeof e=="string"){const n=JSON.parse(e),[i,r,a,o,l]=n;return s({join_ref:i,ref:r,topic:a,event:o,payload:l})}return s({})}_binaryDecode(e){const s=new DataView(e),n=s.getUint8(0),i=new TextDecoder;switch(n){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,s,i)}}_decodeUserBroadcast(e,s,n){const i=s.getUint8(1),r=s.getUint8(2),a=s.getUint8(3),o=s.getUint8(4);let l=this.HEADER_LENGTH+4;const c=n.decode(e.slice(l,l+i));l=l+i;const h=n.decode(e.slice(l,l+r));l=l+r;const u=n.decode(e.slice(l,l+a));l=l+a;const g=e.slice(l,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(n.decode(g)):g,v={type:this.BROADCAST_EVENT,event:h,payload:f};return a>0&&(v.meta=JSON.parse(u)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:v}}_isArrayBuffer(e){var s;return e instanceof ArrayBuffer||((s=e==null?void 0:e.constructor)===null||s===void 0?void 0:s.name)==="ArrayBuffer"}_pick(e,s){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([n])=>s.includes(n)))}}var D;(function(t){t.abstime="abstime",t.bool="bool",t.date="date",t.daterange="daterange",t.float4="float4",t.float8="float8",t.int2="int2",t.int4="int4",t.int4range="int4range",t.int8="int8",t.int8range="int8range",t.json="json",t.jsonb="jsonb",t.money="money",t.numeric="numeric",t.oid="oid",t.reltime="reltime",t.text="text",t.time="time",t.timestamp="timestamp",t.timestamptz="timestamptz",t.timetz="timetz",t.tsrange="tsrange",t.tstzrange="tstzrange"})(D||(D={}));const Ki=(t,e,s={})=>{var n;const i=(n=s.skipTypes)!==null&&n!==void 0?n:[];return e?Object.keys(e).reduce((r,a)=>(r[a]=Co(a,t,e,i),r),{}):{}},Co=(t,e,s,n)=>{const i=e.find(o=>o.name===t),r=i==null?void 0:i.type,a=s[t];return r&&!n.includes(r)?Nr(r,a):Mn(a)},Nr=(t,e)=>{if(t.charAt(0)==="_"){const s=t.slice(1,t.length);return Do(e,s)}switch(t){case D.bool:return Ro(e);case D.float4:case D.float8:case D.int2:case D.int4:case D.int8:case D.numeric:case D.oid:return Io(e);case D.json:case D.jsonb:return Po(e);case D.timestamp:return Fo(e);case D.abstime:case D.date:case D.daterange:case D.int4range:case D.int8range:case D.money:case D.reltime:case D.text:case D.time:case D.timestamptz:case D.timetz:case D.tsrange:case D.tstzrange:return Mn(e);default:return Mn(e)}},Mn=t=>t,Ro=t=>{switch(t){case"t":return!0;case"f":return!1;default:return t}},Io=t=>{if(typeof t=="string"){const e=parseFloat(t);if(!Number.isNaN(e))return e}return t},Po=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch{return t}return t},Do=(t,e)=>{if(typeof t!="string")return t;const s=t.length-1,n=t[s];if(t[0]==="{"&&n==="}"){let r;const a=t.slice(1,s);try{r=JSON.parse("["+a+"]")}catch{r=a?a.split(","):[]}return r.map(o=>Nr(e,o))}return t},Fo=t=>typeof t=="string"?t.replace(" ","T"):t,Lr=t=>{const e=new URL(t);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var Mt=t=>typeof t=="function"?t:function(){return t},jo=typeof self<"u"?self:null,Ft=typeof window<"u"?window:null,we=jo||Ft||globalThis,Mo="2.0.0",No=1e4,Lo=1e3,Uo=100,xe={connecting:0,open:1,closing:2,closed:3},te={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Re={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},Nn={longpoll:"longpoll",websocket:"websocket"},Bo={complete:4},Ln="base64url.bearer.phx.",Rs=class{constructor(t,e,s,n){this.channel=t,this.event=e,this.payload=s||function(){return{}},this.receivedResp=null,this.timeout=n,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(t){this.timeout=t,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(t,e){return this.hasReceived(t)&&e(this.receivedResp.response),this.recHooks.push({status:t,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:t,response:e,_ref:s}){this.recHooks.filter(n=>n.status===t).forEach(n=>n.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,t=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=t,this.matchReceive(t)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}trigger(t,e){this.channel.trigger(this.refEvent,{status:t,response:e})}},Ur=class{constructor(t,e){this.callback=t,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},zo=class{constructor(t,e,s){this.state=te.closed,this.topic=t,this.params=Mt(e||{}),this.socket=s,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Rs(this,Re.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Ur(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=te.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(n=>n.send()),this.pushBuffer=[]}),this.joinPush.receive("error",n=>{this.state=te.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,n),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=te.closed,this.socket.remove(this)}),this.onError(n=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,n),this.isJoining()&&this.joinPush.reset(),this.state=te.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new Rs(this,Re.leave,Mt({}),this.timeout).send(),this.state=te.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(Re.reply,(n,i)=>{this.trigger(this.replyEventName(i),n)})}join(t=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=t,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=te.closed,this.bindings=[]}onClose(t){this.on(Re.close,t)}onError(t){return this.on(Re.error,e=>t(e))}on(t,e){let s=this.bindingRef++;return this.bindings.push({event:t,ref:s,callback:e}),s}off(t,e){this.bindings=this.bindings.filter(s=>!(s.event===t&&(typeof e>"u"||e===s.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(t,e,s=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${t}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let n=new Rs(this,t,function(){return e},s);return this.canPush()?n.send():(n.startTimeout(),this.pushBuffer.push(n)),n}leave(t=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=te.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(Re.close,"leave")},s=new Rs(this,Re.leave,Mt({}),t);return s.receive("ok",()=>e()).receive("timeout",()=>e()),s.send(),this.canPush()||s.trigger("ok",{}),s}onMessage(t,e,s){return e}filterBindings(t,e,s){return!0}isMember(t,e,s,n){return this.topic!==t?!1:n&&n!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:t,event:e,payload:s,joinRef:n}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(t=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=te.joining,this.joinPush.resend(t))}trigger(t,e,s,n){let i=this.onMessage(t,e,s,n);if(e&&!i)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let r=this.bindings.filter(a=>a.event===t&&this.filterBindings(a,e,s));for(let a=0;a<r.length;a++)r[a].callback(i,s,n||this.joinRef())}replyEventName(t){return`chan_reply_${t}`}isClosed(){return this.state===te.closed}isErrored(){return this.state===te.errored}isJoined(){return this.state===te.joined}isJoining(){return this.state===te.joining}isLeaving(){return this.state===te.leaving}},Ws=class{static request(t,e,s,n,i,r,a){if(we.XDomainRequest){let o=new we.XDomainRequest;return this.xdomainRequest(o,t,e,n,i,r,a)}else if(we.XMLHttpRequest){let o=new we.XMLHttpRequest;return this.xhrRequest(o,t,e,s,n,i,r,a)}else{if(we.fetch&&we.AbortController)return this.fetchRequest(t,e,s,n,i,r,a);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(t,e,s,n,i,r,a){let o={method:t,headers:s,body:n},l=null;return i&&(l=new AbortController,setTimeout(()=>l.abort(),i),o.signal=l.signal),we.fetch(e,o).then(c=>c.text()).then(c=>this.parseJSON(c)).then(c=>a&&a(c)).catch(c=>{c.name==="AbortError"&&r?r():a&&a(null)}),l}static xdomainRequest(t,e,s,n,i,r,a){return t.timeout=i,t.open(e,s),t.onload=()=>{let o=this.parseJSON(t.responseText);a&&a(o)},r&&(t.ontimeout=r),t.onprogress=()=>{},t.send(n),t}static xhrRequest(t,e,s,n,i,r,a,o){t.open(e,s,!0),t.timeout=r;for(let[l,c]of Object.entries(n))t.setRequestHeader(l,c);return t.onerror=()=>o&&o(null),t.onreadystatechange=()=>{if(t.readyState===Bo.complete&&o){let l=this.parseJSON(t.responseText);o(l)}},a&&(t.ontimeout=a),t.send(i),t}static parseJSON(t){if(!t||t==="")return null;try{return JSON.parse(t)}catch{return console&&console.log("failed to parse JSON response",t),null}}static serialize(t,e){let s=[];for(var n in t){if(!Object.prototype.hasOwnProperty.call(t,n))continue;let i=e?`${e}[${n}]`:n,r=t[n];typeof r=="object"?s.push(this.serialize(r,i)):s.push(encodeURIComponent(i)+"="+encodeURIComponent(r))}return s.join("&")}static appendParams(t,e){if(Object.keys(e).length===0)return t;let s=t.match(/\?/)?"&":"?";return`${t}${s}${this.serialize(e)}`}},Ho=t=>{let e="",s=new Uint8Array(t),n=s.byteLength;for(let i=0;i<n;i++)e+=String.fromCharCode(s[i]);return btoa(e)},$t=class{constructor(t,e){e&&e.length===2&&e[1].startsWith(Ln)&&(this.authToken=atob(e[1].slice(Ln.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(t),this.readyState=xe.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(t){return t.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+Nn.websocket),"$1/"+Nn.longpoll)}endpointURL(){return Ws.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(t,e,s){this.close(t,e,s),this.readyState=xe.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===xe.open||this.readyState===xe.connecting}poll(){const t={Accept:"application/json"};this.authToken&&(t["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",t,null,()=>this.ontimeout(),e=>{if(e){var{status:s,token:n,messages:i}=e;if(s===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=n}else s=0;switch(s){case 200:i.forEach(r=>{setTimeout(()=>this.onmessage({data:r}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=xe.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${s}`)}})}send(t){typeof t!="string"&&(t=Ho(t)),this.currentBatch?this.currentBatch.push(t):this.awaitingBatchAck?this.batchBuffer.push(t):(this.currentBatch=[t],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(t,e=0){this.awaitingBatchAck=!0;const s=e+Uo,n=t.slice(e,s);this.ajax("POST",{"Content-Type":"application/x-ndjson"},n.join(`
`),()=>this.onerror("timeout"),i=>{!i||i.status!==200?(this.awaitingBatchAck=!1,this.onerror(i&&i.status),this.closeAndRetry(1011,"internal server error",!1)):s<t.length?this.batchSend(t,s):this.batchBuffer.length>0?(this.batchSend(this.batchBuffer),this.batchBuffer=[]):this.awaitingBatchAck=!1})}close(t,e,s){for(let i of this.reqs)i.abort();this.readyState=xe.closed;let n=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:t,reason:e,wasClean:s});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",n)):this.onclose(n)}ajax(t,e,s,n,i){let r,a=()=>{this.reqs.delete(r),n()};r=Ws.request(t,this.endpointURL(),e,s,this.timeout,a,o=>{this.reqs.delete(r),this.isActive()&&i(o)}),this.reqs.add(r)}},qo=class Xt{constructor(e,s={}){let n=s.events||{state:"presence_state",diff:"presence_diff"};this.state=Object.create(null),this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(n.state,i=>{let{onJoin:r,onLeave:a,onSync:o}=this.caller;this.joinRef=this.channel.joinRef(),this.state=Xt.syncState(this.state,i,r,a),this.pendingDiffs.forEach(l=>{this.state=Xt.syncDiff(this.state,l,r,a)}),this.pendingDiffs=[],o()}),this.channel.on(n.diff,i=>{let{onJoin:r,onLeave:a,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(i):(this.state=Xt.syncDiff(this.state,i,r,a),o())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return Xt.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,s,n,i){let r=this.toNullProtoObj(this.clone(e));s=this.toNullProtoObj(s);let a=Object.create(null),o=Object.create(null);return this.map(r,(l,c)=>{s[l]||(o[l]=c)}),this.map(s,(l,c)=>{let h=r[l];if(h){let u=c.metas.map(m=>m.phx_ref),g=h.metas.map(m=>m.phx_ref),f=c.metas.filter(m=>g.indexOf(m.phx_ref)<0),v=h.metas.filter(m=>u.indexOf(m.phx_ref)<0);f.length>0&&(a[l]=c,a[l].metas=f),v.length>0&&(o[l]=this.clone(h),o[l].metas=v)}else a[l]=c}),this.syncDiff(r,{joins:a,leaves:o},n,i)}static syncDiff(e,s,n,i){e=this.toNullProtoObj(e);let{joins:r,leaves:a}=this.clone(s);return n||(n=function(){}),i||(i=function(){}),this.map(r,(o,l)=>{let c=e[o];if(e[o]=this.clone(l),c){let h=e[o].metas.map(g=>g.phx_ref),u=c.metas.filter(g=>h.indexOf(g.phx_ref)<0);e[o].metas.unshift(...u)}n(o,c,l)}),this.map(a,(o,l)=>{let c=e[o];if(!c)return;let h=l.metas.map(u=>u.phx_ref);c.metas=c.metas.filter(u=>h.indexOf(u.phx_ref)<0),i(o,c,l),c.metas.length===0&&delete e[o]}),e}static list(e,s){return s||(s=function(n,i){return i}),this.map(e,(n,i)=>s(n,i))}static map(e,s){return Object.getOwnPropertyNames(e).map(n=>s(n,e[n]))}static toNullProtoObj(e){if(Object.getPrototypeOf(e)===null)return e;let s=Object.create(null);return Object.getOwnPropertyNames(e).forEach(n=>{s[n]=e[n]}),s}static clone(e){return JSON.parse(JSON.stringify(e))}},Is={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(t,e){if(t.payload.constructor===ArrayBuffer)return e(this.binaryEncode(t));{let s=[t.join_ref,t.ref,t.topic,t.event,t.payload];return e(JSON.stringify(s))}},decode(t,e){if(t.constructor===ArrayBuffer)return e(this.binaryDecode(t));{let[s,n,i,r,a]=JSON.parse(t);return e({join_ref:s,ref:n,topic:i,event:r,payload:a})}},binaryEncode(t){let{join_ref:e,ref:s,event:n,topic:i,payload:r}=t,a=new TextEncoder,o=a.encode(e),l=a.encode(s),c=a.encode(i),h=a.encode(n);this.assertFieldSize(o.byteLength,"join_ref"),this.assertFieldSize(l.byteLength,"ref"),this.assertFieldSize(c.byteLength,"topic"),this.assertFieldSize(h.byteLength,"event");let u=this.META_LENGTH+o.byteLength+l.byteLength+c.byteLength+h.byteLength,g=new ArrayBuffer(this.HEADER_LENGTH+u),f=new Uint8Array(g),v=new DataView(g),m=0;v.setUint8(m++,this.KINDS.push),v.setUint8(m++,o.byteLength),v.setUint8(m++,l.byteLength),v.setUint8(m++,c.byteLength),v.setUint8(m++,h.byteLength),f.set(o,m),m+=o.byteLength,f.set(l,m),m+=l.byteLength,f.set(c,m),m+=c.byteLength,f.set(h,m),m+=h.byteLength;var b=new Uint8Array(g.byteLength+r.byteLength);return b.set(f,0),b.set(new Uint8Array(r),g.byteLength),b.buffer},assertFieldSize(t,e){if(t>255)throw new Error(`unable to convert ${e} to binary: must be less than or equal to 255 bytes, but is ${t} bytes`)},binaryDecode(t){let e=new DataView(t),s=e.getUint8(0),n=new TextDecoder;switch(s){case this.KINDS.push:return this.decodePush(t,e,n);case this.KINDS.reply:return this.decodeReply(t,e,n);case this.KINDS.broadcast:return this.decodeBroadcast(t,e,n)}},decodePush(t,e,s){let n=e.getUint8(1),i=e.getUint8(2),r=e.getUint8(3),a=this.HEADER_LENGTH+this.META_LENGTH-1,o=s.decode(t.slice(a,a+n));a=a+n;let l=s.decode(t.slice(a,a+i));a=a+i;let c=s.decode(t.slice(a,a+r));a=a+r;let h=t.slice(a,t.byteLength);return{join_ref:o,ref:null,topic:l,event:c,payload:h}},decodeReply(t,e,s){let n=e.getUint8(1),i=e.getUint8(2),r=e.getUint8(3),a=e.getUint8(4),o=this.HEADER_LENGTH+this.META_LENGTH,l=s.decode(t.slice(o,o+n));o=o+n;let c=s.decode(t.slice(o,o+i));o=o+i;let h=s.decode(t.slice(o,o+r));o=o+r;let u=s.decode(t.slice(o,o+a));o=o+a;let g=t.slice(o,t.byteLength),f={status:u,response:g};return{join_ref:l,ref:c,topic:h,event:Re.reply,payload:f}},decodeBroadcast(t,e,s){let n=e.getUint8(1),i=e.getUint8(2),r=this.HEADER_LENGTH+2,a=s.decode(t.slice(r,r+n));r=r+n;let o=s.decode(t.slice(r,r+i));r=r+i;let l=t.slice(r,t.byteLength);return{join_ref:null,ref:null,topic:a,event:o,payload:l}}},Wo=class{constructor(t,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||No,this.transport=e.transport||we.WebSocket||$t,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let s=null;try{s=we&&we.sessionStorage}catch{}this.sessionStore=e.sessionStorage||s,this.establishedConnections=0,this.defaultEncoder=Is.encode.bind(Is),this.defaultDecoder=Is.decode.bind(Is),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==$t?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let n=null;Ft&&Ft.addEventListener&&(Ft.addEventListener("pagehide",i=>{this.conn&&(this.disconnect(),n=this.connectClock)}),Ft.addEventListener("pageshow",i=>{n===this.connectClock&&(n=null,this.connect())}),Ft.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=i=>e.rejoinAfterMs?e.rejoinAfterMs(i):[1e3,2e3,5e3][i-1]||1e4,this.reconnectAfterMs=i=>e.reconnectAfterMs?e.reconnectAfterMs(i):[10,50,100,150,200,250,500,1e3,2e3][i-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(i,r,a)=>{console.log(`${i}: ${r}`,a)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=Mt(e.params||{}),this.endPoint=`${t}/${Nn.websocket}`,this.vsn=e.vsn||Mo,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Ur(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken&&Mt(e.authToken)}getLongPollTransport(){return $t}replaceTransport(t){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=t}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let t=Ws.appendParams(Ws.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return t.charAt(0)!=="/"?t:t.charAt(1)==="/"?`${this.protocol()}:${t}`:`${this.protocol()}://${location.host}${t}`}disconnect(t,e,s){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,t&&t()},e,s)}connect(t){t&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Mt(t)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==$t?this.connectWithFallback($t,this.longPollFallbackMs):this.transportConnect())}log(t,e,s){this.logger&&this.logger(t,e,s)}hasLogger(){return this.logger!==null}onOpen(t){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,t]),e}onClose(t){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,t]),e}onError(t){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,t]),e}onMessage(t){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,t]),e}onHeartbeat(t){this.heartbeatCallback=t}ping(t){if(!this.isConnected())return!1;let e=this.makeRef(),s=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let n=this.onMessage(i=>{i.ref===e&&(this.off([n]),t(Date.now()-s))});return!0}transportName(t){switch(t){case $t:return"LongPoll";default:return t.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let t;this.authToken&&(t=["phoenix",`${Ln}${btoa(this.authToken()).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),t),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(t){return this.sessionStore&&this.sessionStore.getItem(t)}storeSession(t,e){this.sessionStore&&this.sessionStore.setItem(t,e)}connectWithFallback(t,e=2500){clearTimeout(this.fallbackTimer);let s=!1,n=!0,i,r,a=this.transportName(t),o=l=>{this.log("transport",`falling back to ${a}...`,l),this.off([i,r]),n=!1,this.replaceTransport(t),this.transportConnect()};if(this.getSession(`phx:fallback:${a}`))return o("memorized");this.fallbackTimer=setTimeout(o,e),r=this.onError(l=>{this.log("transport","error",l),n&&!s&&(clearTimeout(this.fallbackTimer),o(l))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(s=!0,!n){let l=this.transportName(t);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${l}`,"true"),this.log("transport",`established ${l} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(o,e),this.ping(l=>{this.log("transport","connected to primary after",l),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(t){this.log("error","error in heartbeat callback",t)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Lo,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(t,e,s){if(!this.conn)return t&&t();const n=this.conn;this.waitForBufferDone(n,()=>{e?n.close(e,s||""):n.close(),this.waitForSocketClosed(n,()=>{this.conn===n&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),t&&t()})})}waitForBufferDone(t,e,s=1){if(s===5||!t.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(t,e,s+1)},150*s)}waitForSocketClosed(t,e,s=1){if(s===5||t.readyState===xe.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(t,e,s+1)},150*s)}onConnClose(t){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",t),this.triggerChanError(t),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",t)}onConnError(t){this.hasLogger()&&this.log("transport","error",t);let e=this.transport,s=this.establishedConnections;this.triggerStateCallbacks("error",t,e,s),(e===this.transport||s>0)&&this.triggerChanError(t)}triggerChanError(t){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(Re.error,t)})}connectionState(){switch(this.conn&&this.conn.readyState){case xe.connecting:return"connecting";case xe.open:return"open";case xe.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(t){this.off(t.stateChangeRefs),this.channels=this.channels.filter(e=>e!==t)}off(t){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([s])=>t.indexOf(s)===-1)}channel(t,e={}){let s=new zo(t,e,this);return this.channels.push(s),s}push(t){if(this.hasLogger()){let{topic:e,event:s,payload:n,ref:i,join_ref:r}=t;this.log("push",`${e} ${s} (${r}, ${i})`,n)}this.isConnected()?this.encode(t,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(t,e=>this.conn.send(e)))}makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(t){this.log("error","error in heartbeat callback",t)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(t){this.log("error","error in heartbeat callback",t)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}onConnMessage(t){this.decode(t.data,e=>{let{topic:s,event:n,payload:i,ref:r,join_ref:a}=e;if(r&&r===this.pendingHeartbeatRef){const o=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(i.status==="ok"?"ok":"error",o)}catch(l){this.log("error","error in heartbeat callback",l)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${i.status||""} ${s} ${n} ${r&&"("+r+")"||""}`.trim(),i);for(let o=0;o<this.channels.length;o++){const l=this.channels[o];l.isMember(s,n,i,a)&&l.trigger(n,i,r,a)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(t,...e){try{this.stateChangeCallbacks[t].forEach(([s,n])=>{try{n(...e)}catch(i){this.log("error",`error in ${t} callback`,i)}})}catch(s){this.log("error",`error triggering ${t} callbacks`,s)}}leaveOpenTopic(t){let e=this.channels.find(s=>s.topic===t&&(s.isJoined()||s.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${t}"`),e.leave())}};class ss{constructor(e,s){const n=Vo(s);this.presence=new qo(e.getChannel(),n),this.presence.onJoin((i,r,a)=>{const o=ss.onJoinPayload(i,r,a);e.getChannel().trigger("presence",o)}),this.presence.onLeave((i,r,a)=>{const o=ss.onLeavePayload(i,r,a);e.getChannel().trigger("presence",o)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return ss.transformState(this.presence.state)}static transformState(e){return e=Ko(e),Object.getOwnPropertyNames(e).reduce((s,n)=>{const i=e[n];return s[n]=Us(i),s},{})}static onJoinPayload(e,s,n){const i=Vi(s),r=Us(n);return{event:"join",key:e,currentPresences:i,newPresences:r}}static onLeavePayload(e,s,n){const i=Vi(s),r=Us(n);return{event:"leave",key:e,currentPresences:i,leftPresences:r}}}function Us(t){return t.metas.map(e=>{const s=Object.getOwnPropertyDescriptors(e),n=Object.defineProperties({},s);return n.presence_ref=n.phx_ref,delete n.phx_ref,delete n.phx_ref_prev,n})}function Ko(t){return JSON.parse(JSON.stringify(t))}function Vo(t){return(t==null?void 0:t.events)&&{events:t.events}}function Vi(t){return t!=null&&t.metas?Us(t):[]}var Gi;(function(t){t.SYNC="sync",t.JOIN="join",t.LEAVE="leave"})(Gi||(Gi={}));class Go{get state(){return this.presenceAdapter.state}constructor(e,s){this.channel=e,this.presenceAdapter=new ss(this.channel.channelAdapter,s)}}function Jo(t){if(t instanceof Error)return t;if(typeof t=="string")return new Error(t);if(t&&typeof t=="object"){const e=t;if(typeof e.code=="number"){const s=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${s}`,{cause:t})}return new Error("channel error: transport failure",{cause:t})}return new Error("channel error: connection lost")}class Yo{constructor(e,s,n){const i=Xo(n);this.channel=e.getSocket().channel(s,i),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,s){return this.channel.on(e,s)}off(e,s){this.channel.off(e,s)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,s,n){let i;try{i=this.channel.push(e,s,n)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>To){const r=this.channel.pushBuffer.shift();r.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${r.event}`,r.payload())}return i}updateJoinPayload(e){const s=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},s),e)}canPush(){return this.socket.isConnected()&&this.state===Ve.joined}isJoined(){return this.state===Ve.joined}isJoining(){return this.state===Ve.joining}isClosed(){return this.state===Ve.closed}isLeaving(){return this.state===Ve.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function Xo(t){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config)}}const Qo=/[,()"\\]/,Zo=t=>Qo.test(t)||t!==t.trim(),el=t=>`"${t.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`,Ji=t=>{const e=t===null?"null":String(t);return Zo(e)?el(e):e},tl=t=>t===null?"null":String(t),sl=(t,e)=>{if(t==="in"){const s=Array.isArray(e)?e:[e];if(s.length===0)throw new Error("Realtime `in` filter requires at least one value.");return`in.(${Array.from(new Set(s)).map(i=>Ji(i)).join(",")})`}return t==="is"?`is.${tl(e)}`:`${t}.${Ji(e)}`};class nl{constructor(){this.filters=[]}add(e,s,n,i=!1){const r=i?"not.":"";return this.filters.push(`${e}=${r}${sl(s,n)}`),this}eq(e,s){return this.add(e,"eq",s)}neq(e,s){return this.add(e,"neq",s)}gt(e,s){return this.add(e,"gt",s)}gte(e,s){return this.add(e,"gte",s)}lt(e,s){return this.add(e,"lt",s)}lte(e,s){return this.add(e,"lte",s)}in(e,s){return this.add(e,"in",s)}like(e,s){return this.add(e,"like",s)}ilike(e,s){return this.add(e,"ilike",s)}match(e,s){return this.add(e,"match",s)}imatch(e,s){return this.add(e,"imatch",s)}is(e,s){return this.add(e,"is",s)}isDistinct(e,s){return this.add(e,"isdistinct",s)}not(e,s,n){return this.add(e,s,n,!0)}build(){return this.filters.join(",")}toString(){return this.build()}}var Yi;(function(t){t.ALL="*",t.INSERT="INSERT",t.UPDATE="UPDATE",t.DELETE="DELETE"})(Yi||(Yi={}));var lt;(function(t){t.BROADCAST="broadcast",t.PRESENCE="presence",t.POSTGRES_CHANGES="postgres_changes",t.SYSTEM="system"})(lt||(lt={}));var Ie;(function(t){t.SUBSCRIBED="SUBSCRIBED",t.TIMED_OUT="TIMED_OUT",t.CLOSED="CLOSED",t.CHANNEL_ERROR="CHANNEL_ERROR"})(Ie||(Ie={}));class Pe{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,s={config:{}},n){var i,r;if(this.topic=e,this.params=s,this.socket=n,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},s.config),this.channelAdapter=new Yo(this.socket.socketAdapter,e,this.params),this.presence=new Go(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=Lr(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((r=(i=this.params.config)===null||i===void 0?void 0:i.broadcast)===null||r===void 0)&&r.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,s=this.timeout){var n,i,r;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:a,presence:o,private:l}}=this.params,c=(i=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(f=>f.filter))!==null&&i!==void 0?i:[],h=!!this.bindings[lt.PRESENCE]&&this.bindings[lt.PRESENCE].length>0||((r=this.params.config.presence)===null||r===void 0?void 0:r.enabled)===!0,u={},g={broadcast:a,presence:Object.assign(Object.assign({},o),{enabled:h}),postgres_changes:c,private:l};this.socket.accessTokenValue&&(u.access_token=this.socket.accessTokenValue),this._onError(f=>{e==null||e(Ie.CHANNEL_ERROR,Jo(f))}),this._onClose(()=>e==null?void 0:e(Ie.CLOSED)),this.updateJoinPayload(Object.assign({config:g},u)),this._updateFilterMessage(),this.channelAdapter.subscribe(s).receive("ok",async({postgres_changes:f})=>{if(this.socket._isManualToken()||this.socket.setAuth(),f===void 0){e==null||e(Ie.SUBSCRIBED);return}this._updatePostgresBindings(f,e)}).receive("error",f=>{this.state=Ve.errored;const v=Object.values(f).join(", ")||"error";e==null||e(Ie.CHANNEL_ERROR,new Error(v,{cause:f}))}).receive("timeout",()=>{e==null||e(Ie.TIMED_OUT)})}return this}_updatePostgresBindings(e,s){var n;const i=this.bindings.postgres_changes,r=(n=i==null?void 0:i.length)!==null&&n!==void 0?n:0,a=[];for(let o=0;o<r;o++){const l=i[o],{filter:{event:c,schema:h,table:u,filter:g}}=l,f=e&&e[o];if(f&&f.event===c&&Pe.isFilterValueEqual(f.schema,h)&&Pe.isFilterValueEqual(f.table,u)&&Pe.isFilterValueEqual(f.filter,g))a.push(Object.assign(Object.assign({},l),{id:f.id}));else{this.unsubscribe(),this.state=Ve.errored,s==null||s(Ie.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=a,this.state!=Ve.errored&&s&&s(Ie.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,s={}){return await this.send({type:"presence",event:"track",payload:e},s)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,s,n){const i=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),r=e===lt.PRESENCE||e===lt.POSTGRES_CHANGES;if(i&&r)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,s,n)}async httpSend(e,s,n={}){var i;if(s==null)return Promise.reject(new Error("Payload is required for httpSend()"));const r=s instanceof ArrayBuffer||ArrayBuffer.isView(s),a={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":r?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(a.Authorization=`Bearer ${this.socket.accessTokenValue}`);const o=new URL(this.broadcastEndpointURL);o.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&o.searchParams.set("private","true");const l={method:"POST",headers:a,body:r?s:JSON.stringify(s)},c=await this._fetchWithTimeout(o.toString(),l,(i=n.timeout)!==null&&i!==void 0?i:this.timeout);if(c.status===202)return{success:!0};if(c.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let h=c.statusText;try{const u=await c.json();h=u.error||u.message||h}catch{}return Promise.reject(new Error(h))}async send(e,s={}){var n,i;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:r,payload:a}=e,o={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(o.Authorization=`Bearer ${this.socket.accessTokenValue}`);const l={method:"POST",headers:o,body:JSON.stringify({messages:[{topic:this.subTopic,event:r,payload:a,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(n=s.timeout)!==null&&n!==void 0?n:this.timeout);return await((i=c.body)===null||i===void 0?void 0:i.cancel()),c.ok?"ok":"error"}catch(c){return c instanceof Error&&c.name==="AbortError"?"timed out":"error"}}else return new Promise(r=>{var a,o,l;const c=this.channelAdapter.push(e.type,e,s.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(o=(a=this.params)===null||a===void 0?void 0:a.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&r("ok"),c.receive("ok",()=>r("ok")),c.receive("error",()=>r("error")),c.receive("timeout",()=>r("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(s=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>s("ok")).receive("timeout",()=>s("timed out")).receive("error",()=>s("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,s,n){const i=new AbortController,r=setTimeout(()=>i.abort(),n),a=await this.socket.fetch(e,Object.assign(Object.assign({},s),{signal:i.signal}));return clearTimeout(r),a}_on(e,s,n){var i;const r=e.toLocaleLowerCase(),a=s==null?void 0:s.filter;if((a instanceof nl||typeof a=="object"&&a!==null&&typeof a.build=="function")&&(s=Object.assign(Object.assign({},s),{filter:a.build()})),r===lt.POSTGRES_CHANGES&&((i=this.bindings[r])===null||i===void 0?void 0:i.find(h=>Pe.isSamePostgresFilter(h.filter,s))))return this.socket.log("error",`duplicate \`postgres_changes\` binding for ${this.topic} ignored`,s),this;const o=this.channelAdapter.on(e,n),l={type:r,filter:s,callback:n,ref:o};return this.bindings[r]?this.bindings[r].push(l):this.bindings[r]=[l],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,s,n)=>{var i,r,a,o,l,c,h;const u=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(u,n))return!1;const g=(i=this.bindings[u])===null||i===void 0?void 0:i.find(f=>f.ref===e.ref);if(!g)return!0;if(["broadcast","presence","postgres_changes"].includes(u))if("id"in g){const f=g.id,v=(r=g.filter)===null||r===void 0?void 0:r.event;return f&&((a=s.ids)===null||a===void 0?void 0:a.includes(f))&&(v==="*"||(v==null?void 0:v.toLocaleLowerCase())===((o=s.data)===null||o===void 0?void 0:o.type.toLocaleLowerCase()))}else{const f=(c=(l=g==null?void 0:g.filter)===null||l===void 0?void 0:l.event)===null||c===void 0?void 0:c.toLocaleLowerCase();return f==="*"||f===((h=s==null?void 0:s.event)===null||h===void 0?void 0:h.toLocaleLowerCase())}else return g.type.toLocaleLowerCase()===u})}_notThisChannelEvent(e,s){const{close:n,error:i,leave:r,join:a}=Mr;return s&&[n,i,r,a].includes(e)&&s!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,s,n)=>{if(typeof s=="object"&&"ids"in s){const i=s.data,{schema:r,table:a,commit_timestamp:o,type:l,errors:c}=i;return Object.assign(Object.assign({},{schema:r,table:a,commit_timestamp:o,eventType:l,new:{},old:{},errors:c}),this._getPayloadRecords(i))}return s})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const s in e.bindings)for(const n of e.bindings[s])this._on(n.type,n.filter,n.callback)}static isFilterValueEqual(e,s){return(e??void 0)===(s??void 0)}static isSamePostgresFilter(e,s){var n,i,r,a;const o=(i=(n=e==null?void 0:e.select)===null||n===void 0?void 0:n.join())!==null&&i!==void 0?i:void 0,l=(a=(r=s==null?void 0:s.select)===null||r===void 0?void 0:r.join())!==null&&a!==void 0?a:void 0;return(e==null?void 0:e.event)===(s==null?void 0:s.event)&&Pe.isFilterValueEqual(e==null?void 0:e.schema,s==null?void 0:s.schema)&&Pe.isFilterValueEqual(e==null?void 0:e.table,s==null?void 0:s.table)&&Pe.isFilterValueEqual(e==null?void 0:e.filter,s==null?void 0:s.filter)&&o===l}_getPayloadRecords(e){const s={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(s.new=Ki(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(s.old=Ki(e.columns,e.old_record)),s}}class il{constructor(e,s){this.socket=new Wo(e,s)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,s,n,i=1e4){return new Promise(r=>{setTimeout(()=>r("timeout"),i),this.socket.disconnect(()=>{e(),r("ok")},s,n)})}push(e){this.socket.push(e)}log(e,s,n){this.socket.log(e,s,n)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==jn.connecting}isDisconnecting(){return this.socket.connectionState()==jn.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const Xi={HEARTBEAT_INTERVAL:25e3},rl=[1e3,2e3,5e3,1e4],al=1e4;function ol(){const t=new Map;return{get length(){return t.size},clear(){t.clear()},getItem(e){return t.has(e)?t.get(e):null},key(e){var s;return(s=Array.from(t.keys())[e])!==null&&s!==void 0?s:null},removeItem(e){t.delete(e)},setItem(e,s){t.set(e,String(s))}}}function ll(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return ol()}const cl=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class dl{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,s){var n;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new Oo,this._manuallySetToken=!1,this._authPromise=null,this._authGeneration=0,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=r=>r?(...a)=>r(...a):(...a)=>fetch(...a),!(!((n=s==null?void 0:s.params)===null||n===void 0)&&n.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=s.params.apikey;const i=this._initializeOptions(s);this.socketAdapter=new il(e,i),this.httpEndpoint=Lr(e),this.fetch=this._resolveFetch(s==null?void 0:s.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const s=e.message;throw new Error(`WebSocket not available: ${s}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,s){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,s)}getChannels(){return this.channels}async removeChannel(e){const s=await e.unsubscribe();return s==="ok"&&e.teardown(),s}async removeAllChannels(){const e=this.channels.map(async n=>{const i=await n.unsubscribe();return n.teardown(),i}),s=await Promise.all(e);return await this.disconnect(),s}log(e,s,n){this.socketAdapter.log(e,s,n)}connectionState(){return this.socketAdapter.connectionState()||jn.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,s={config:{}}){const n=`realtime:${e}`,i=this.getChannels().find(r=>r.topic===n);if(i)return i;{const r=new Pe(`realtime:${e}`,s,this);return this._cancelPendingDisconnect(),this.channels.push(r),r}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){const s=++this._authGeneration,n=this._performAuth(e,s);s===this._authGeneration&&(this._authPromise=n);try{await n}finally{this._authPromise===n&&(this._authPromise=null)}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(s=>s.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e,s){let n,i=!1;if(e)n=e,i=!0;else if(this.accessToken)try{n=await this.accessToken()}catch(r){this.log("error","Error fetching access token from callback",r),n=this.accessTokenValue}else n=this.accessTokenValue;s===this._authGeneration&&(this.accessToken?this._manuallySetToken=!1:i&&(this._manuallySetToken=!0),this.accessTokenValue!=n&&(this.accessTokenValue=n,this.channels.forEach(r=>{const a={access_token:n,version:So};r.updateJoinPayload(a),r.joinedOnce&&r.channelAdapter.isJoined()&&r.channelAdapter.push(Mr.access_token,{access_token:n})})))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(s=>{this.log("error",`Error setting auth in ${e}`,s)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(s=>{this.log("error","error waiting for auth on connect",s)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(s,n)=>{s!=="disconnected"&&(s=="sent"&&this._setAuthSafely(),e&&e(s,n))}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=s=>{this.log("worker","worker error",s.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=s=>{s.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let s;if(e)s=e;else{const n=new Blob([cl],{type:"application/javascript"});s=URL.createObjectURL(n)}return s}_initializeOptions(e){var s,n,i,r,a,o,l,c,h,u,g,f;this.worker=(s=e==null?void 0:e.worker)!==null&&s!==void 0?s:!1,this.accessToken=(n=e==null?void 0:e.accessToken)!==null&&n!==void 0?n:null;const v={};v.timeout=(i=e==null?void 0:e.timeout)!==null&&i!==void 0?i:$o,v.heartbeatIntervalMs=(r=e==null?void 0:e.heartbeatIntervalMs)!==null&&r!==void 0?r:Xi.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(a=e==null?void 0:e.disconnectOnEmptyChannelsAfterMs)!==null&&a!==void 0?a:2*((o=e==null?void 0:e.heartbeatIntervalMs)!==null&&o!==void 0?o:Xi.HEARTBEAT_INTERVAL),v.transport=(l=e==null?void 0:e.transport)!==null&&l!==void 0?l:_o.getWebSocketConstructor(),v.params=e==null?void 0:e.params,v.logger=e==null?void 0:e.logger,v.heartbeatCallback=this._wrapHeartbeatCallback(e==null?void 0:e.heartbeatCallback),v.sessionStorage=(c=e==null?void 0:e.sessionStorage)!==null&&c!==void 0?c:ll(),v.reconnectAfterMs=(h=e==null?void 0:e.reconnectAfterMs)!==null&&h!==void 0?h:(x=>rl[x-1]||al);let m,b;const w=(u=e==null?void 0:e.vsn)!==null&&u!==void 0?u:Ao;switch(w){case Eo:m=(x,p)=>p(JSON.stringify(x)),b=(x,p)=>p(JSON.parse(x));break;case jr:m=this.serializer.encode.bind(this.serializer),b=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${v.vsn}`)}if(v.vsn=w,v.encode=(g=e==null?void 0:e.encode)!==null&&g!==void 0?g:m,v.decode=(f=e==null?void 0:e.decode)!==null&&f!==void 0?f:b,v.beforeReconnect=this._reconnectAuth.bind(this),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,v.params=Object.assign(Object.assign({},v.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl,v.autoSendHeartbeat=!this.worker}return v}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var os=class extends Error{constructor(t,e){var s;super(t),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&((s=e.icebergType)==null?void 0:s.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function ul(t,e,s){const n=new URL(e,t);if(s)for(const[i,r]of Object.entries(s))r!==void 0&&n.searchParams.set(i,r);return n.toString()}async function hl(t){return!t||t.type==="none"?{}:t.type==="bearer"?{Authorization:`Bearer ${t.token}`}:t.type==="header"?{[t.name]:t.value}:t.type==="custom"?await t.getHeaders():{}}function pl(t){const e=t.fetchImpl??globalThis.fetch;return{async request({method:s,path:n,query:i,body:r,headers:a}){const o=ul(t.baseUrl,n,i),l=await hl(t.auth),c=await e(o,{method:s,headers:{...r?{"Content-Type":"application/json"}:{},...l,...a},body:r?JSON.stringify(r):void 0}),h=await c.text(),u=(c.headers.get("content-type")||"").includes("application/json"),g=u&&h?JSON.parse(h):h;if(!c.ok){const f=u?g:void 0,v=f==null?void 0:f.error;throw new os((v==null?void 0:v.message)??`Request failed with status ${c.status}`,{status:c.status,icebergType:v==null?void 0:v.type,icebergCode:v==null?void 0:v.code,details:f})}return{status:c.status,headers:c.headers,data:g}}}}function Ps(t){return t.join("")}var fl=class{constructor(t,e=""){this.client=t,this.prefix=e}async listNamespaces(t){const e=t?{parent:Ps(t.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(n=>({namespace:n}))}async createNamespace(t,e){const s={namespace:t.namespace,properties:e==null?void 0:e.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:s})).data}async dropNamespace(t){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Ps(t.namespace)}`})}async loadNamespaceMetadata(t){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Ps(t.namespace)}`})).data.properties}}async namespaceExists(t){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Ps(t.namespace)}`}),!0}catch(e){if(e instanceof os&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(t,e){try{return await this.createNamespace(t,e)}catch(s){if(s instanceof os&&s.status===409)return;throw s}}};function Tt(t){return t.join("")}var gl=class{constructor(t,e="",s){this.client=t,this.prefix=e,this.accessDelegation=s}async listTables(t){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Tt(t.namespace)}/tables`})).data.identifiers}async createTable(t,e){const s={};return this.accessDelegation&&(s["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Tt(t.namespace)}/tables`,body:e,headers:s})).data.metadata}async updateTable(t,e){const s=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Tt(t.namespace)}/tables/${t.name}`,body:e});return{"metadata-location":s.data["metadata-location"],metadata:s.data.metadata}}async dropTable(t,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Tt(t.namespace)}/tables/${t.name}`,query:{purgeRequested:String((e==null?void 0:e.purge)??!1)}})}async loadTable(t){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Tt(t.namespace)}/tables/${t.name}`,headers:e})).data.metadata}async tableExists(t){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Tt(t.namespace)}/tables/${t.name}`,headers:e}),!0}catch(s){if(s instanceof os&&s.status===404)return!1;throw s}}async createTableIfNotExists(t,e){try{return await this.createTable(t,e)}catch(s){if(s instanceof os&&s.status===409)return await this.loadTable({namespace:t.namespace,name:e.name});throw s}}},ml=class{constructor(t){var n;let e="v1";t.catalogName&&(e+=`/${t.catalogName}`);const s=t.baseUrl.endsWith("/")?t.baseUrl:`${t.baseUrl}/`;this.client=pl({baseUrl:s,auth:t.auth,fetchImpl:t.fetch}),this.accessDelegation=(n=t.accessDelegation)==null?void 0:n.join(","),this.namespaceOps=new fl(this.client,e),this.tableOps=new gl(this.client,e,this.accessDelegation)}async listNamespaces(t){return this.namespaceOps.listNamespaces(t)}async createNamespace(t,e){return this.namespaceOps.createNamespace(t,e)}async dropNamespace(t){await this.namespaceOps.dropNamespace(t)}async loadNamespaceMetadata(t){return this.namespaceOps.loadNamespaceMetadata(t)}async listTables(t){return this.tableOps.listTables(t)}async createTable(t,e){return this.tableOps.createTable(t,e)}async updateTable(t,e){return this.tableOps.updateTable(t,e)}async dropTable(t,e){await this.tableOps.dropTable(t,e)}async loadTable(t){return this.tableOps.loadTable(t)}async namespaceExists(t){return this.namespaceOps.namespaceExists(t)}async tableExists(t){return this.tableOps.tableExists(t)}async createNamespaceIfNotExists(t,e){return this.namespaceOps.createNamespaceIfNotExists(t,e)}async createTableIfNotExists(t,e){return this.tableOps.createTableIfNotExists(t,e)}};function ls(t){"@babel/helpers - typeof";return ls=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ls(t)}function bl(t,e){if(ls(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var n=s.call(t,e);if(ls(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function yl(t){var e=bl(t,"string");return ls(e)=="symbol"?e:e+""}function vl(t,e,s){return(e=yl(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Qi(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),s.push.apply(s,n)}return s}function $(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Qi(Object(s),!0).forEach(function(n){vl(t,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Qi(Object(s)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(s,n))})}return t}var tn=class extends Error{constructor(t,e="storage",s,n){super(t),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=s,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function sn(t){return typeof t=="object"&&t!==null&&"__isStorageError"in t}var Un=class extends tn{constructor(t,e,s,n="storage",i){super(t,n,e,s),this.name=n==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=s,this.code=i}toJSON(){return $($({},super.toJSON()),{},{code:this.code})}},Br=class extends tn{constructor(t,e,s="storage"){super(t,s),this.name=s==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function Ks(t,e,s){const n=$({},t),i=e.toLowerCase();for(const r of Object.keys(n))r.toLowerCase()===i&&delete n[r];return n[i]=s,n}function wl(t){const e={};for(const[s,n]of Object.entries(t))e[s.toLowerCase()]=n;return e}const xl=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),_l=t=>{if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Bn=t=>{if(Array.isArray(t))return t.map(s=>Bn(s));if(typeof t=="function"||t!==Object(t))return t;const e={};return Object.entries(t).forEach(([s,n])=>{const i=s.replace(/([-_][a-z])/gi,r=>r.toUpperCase().replace(/[-_]/g,""));e[i]=Bn(n)}),e},kl=t=>!t||typeof t!="string"||t.length===0||t.length>100||t.trim()!==t||t.includes("/")||t.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(t),zr=t=>t.split("/").map(encodeURIComponent).join("/"),Zi=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const s=e.error;if(typeof s.message=="string")return s.message}}return JSON.stringify(t)},Sl=async(t,e,s,n)=>{if(t!==null&&typeof t=="object"&&"json"in t&&typeof t.json=="function"){const i=t;let r=parseInt(String(i.status),10);Number.isFinite(r)||(r=500),i.json().then(a=>{const o=(a==null?void 0:a.statusCode)||(a==null?void 0:a.code)||r+"";e(new Un(Zi(a),r,o,n,a==null?void 0:a.code))}).catch(()=>{const a=r+"";e(new Un(i.statusText||`HTTP ${r} error`,r,a,n))})}else e(new Br(Zi(t),t,n))},El=(t,e,s,n)=>{const i={method:t,headers:(e==null?void 0:e.headers)||{}};if(t==="GET"||t==="HEAD"||!n)return $($({},i),s);if(_l(n)){var r;const a=(e==null?void 0:e.headers)||{};let o;for(const[l,c]of Object.entries(a))l.toLowerCase()==="content-type"&&(o=c);i.headers=Ks(a,"Content-Type",(r=o)!==null&&r!==void 0?r:"application/json"),i.body=JSON.stringify(n)}else i.body=n;return e!=null&&e.duplex&&(i.duplex=e.duplex),$($({},i),s)};async function Jt(t,e,s,n,i,r,a){return new Promise((o,l)=>{t(s,El(e,n,i,r)).then(c=>{if(!c.ok)throw c;if(n!=null&&n.noResolveJson)return c;if(a==="vectors"){const h=c.headers.get("content-type");if(c.headers.get("content-length")==="0"||c.status===204)return{};if(!h||!h.includes("application/json"))return{}}return c.json()}).then(c=>o(c)).catch(c=>Sl(c,l,n,a))})}function Hr(t="storage"){return{get:async(e,s,n,i)=>Jt(e,"GET",s,n,i,void 0,t),post:async(e,s,n,i,r)=>Jt(e,"POST",s,i,r,n,t),put:async(e,s,n,i,r)=>Jt(e,"PUT",s,i,r,n,t),head:async(e,s,n,i)=>Jt(e,"HEAD",s,$($({},n),{},{noResolveJson:!0}),i,void 0,t),remove:async(e,s,n,i,r)=>Jt(e,"DELETE",s,i,r,n,t)}}const Al=Hr("storage"),{get:cs,post:me,put:zn,head:$l,remove:ds}=Al,re=Hr("vectors");var zt=class{constructor(t,e={},s,n="storage"){this.shouldThrowOnError=!1,this.url=t,this.headers=wl(e),this.fetch=xl(s),this.namespace=n}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,e){return this.headers=Ks(this.headers,t,e),this}async handleOperation(t){var e=this;try{return{data:await t(),error:null}}catch(s){if(e.shouldThrowOnError)throw s;if(sn(s))return{data:null,error:s};throw s}}};let qr;qr=Symbol.toStringTag;var Tl=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[qr]="StreamDownloadBuilder",this.promise=null}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:(await t.downloadFn()).body,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(sn(e))return{data:null,error:e};throw e}}};let Wr;Wr=Symbol.toStringTag;var Ol=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[Wr]="BlobDownloadBuilder",this.promise=null}asStream(){return new Tl(this.downloadFn,this.shouldThrowOnError)}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:await(await t.downloadFn()).blob(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(sn(e))return{data:null,error:e};throw e}}};const $n={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},er={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var Cl=class extends zt{constructor(t,e={},s,n){super(t,e,n,"storage"),this.bucketId=s}async uploadOrUpdate(t,e,s,n){var i=this;return i.handleOperation(async()=>{let r;const a=$($({},er),n);let o=$($({},i.headers),t==="POST"&&{"x-upsert":String(a.upsert)});const l=a.metadata;if(typeof Blob<"u"&&s instanceof Blob?(r=new FormData,r.append("cacheControl",a.cacheControl),l&&r.append("metadata",i.encodeMetadata(l)),r.append("",s)):typeof FormData<"u"&&s instanceof FormData?(r=s,r.has("cacheControl")||r.append("cacheControl",a.cacheControl),l&&!r.has("metadata")&&r.append("metadata",i.encodeMetadata(l))):(r=s,o["cache-control"]=`max-age=${a.cacheControl}`,o["content-type"]=a.contentType,l&&(o["x-metadata"]=i.toBase64(i.encodeMetadata(l))),(typeof ReadableStream<"u"&&r instanceof ReadableStream||r&&typeof r=="object"&&"pipe"in r&&typeof r.pipe=="function")&&!a.duplex&&(a.duplex="half")),n!=null&&n.headers)for(const[g,f]of Object.entries(n.headers))o=Ks(o,g,f);const c=i._removeEmptyFolders(e),h=i._getFinalPath(c),u=await(t=="PUT"?zn:me)(i.fetch,`${i.url}/object/${h}`,r,$({headers:o},a!=null&&a.duplex?{duplex:a.duplex}:{}));return{path:c,id:u.Id,fullPath:u.Key}})}async upload(t,e,s){return this.uploadOrUpdate("POST",t,e,s)}async uploadToSignedUrl(t,e,s,n){var i=this;const r=i._removeEmptyFolders(t),a=i._getFinalPath(r),o=new URL(i.url+`/object/upload/sign/${a}`);return o.searchParams.set("token",e),i.handleOperation(async()=>{let l;const c=$($({},er),n);let h=$($({},i.headers),{"x-upsert":String(c.upsert)});const u=c.metadata;if(typeof Blob<"u"&&s instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),u&&l.append("metadata",i.encodeMetadata(u)),l.append("",s)):typeof FormData<"u"&&s instanceof FormData?(l=s,l.has("cacheControl")||l.append("cacheControl",c.cacheControl),u&&!l.has("metadata")&&l.append("metadata",i.encodeMetadata(u))):(l=s,h["cache-control"]=`max-age=${c.cacheControl}`,h["content-type"]=c.contentType,u&&(h["x-metadata"]=i.toBase64(i.encodeMetadata(u))),(typeof ReadableStream<"u"&&l instanceof ReadableStream||l&&typeof l=="object"&&"pipe"in l&&typeof l.pipe=="function")&&!c.duplex&&(c.duplex="half")),n!=null&&n.headers)for(const[g,f]of Object.entries(n.headers))h=Ks(h,g,f);return{path:r,fullPath:(await zn(i.fetch,o.toString(),l,$({headers:h},c!=null&&c.duplex?{duplex:c.duplex}:{}))).Key}})}async createSignedUploadUrl(t,e){var s=this;return s.handleOperation(async()=>{let n=s._getFinalPath(t);const i=$({},s.headers);e!=null&&e.upsert&&(i["x-upsert"]="true");const r=await me(s.fetch,`${s.url}/object/upload/sign/${n}`,{},{headers:i}),a=new URL(s.url+r.url),o=a.searchParams.get("token");if(!o)throw new tn("No token returned by API");return{signedUrl:a.toString(),path:t,token:o}})}async update(t,e,s){return this.uploadOrUpdate("PUT",t,e,s)}async move(t,e,s){var n=this;return n.handleOperation(async()=>await me(n.fetch,`${n.url}/object/move`,{bucketId:n.bucketId,sourceKey:t,destinationKey:e,destinationBucket:s==null?void 0:s.destinationBucket},{headers:n.headers}))}async copy(t,e,s){var n=this;return n.handleOperation(async()=>({path:(await me(n.fetch,`${n.url}/object/copy`,{bucketId:n.bucketId,sourceKey:t,destinationKey:e,destinationBucket:s==null?void 0:s.destinationBucket},{headers:n.headers})).Key}))}async createSignedUrl(t,e,s){var n=this;return n.handleOperation(async()=>{let i=n._getFinalPath(t);const r=typeof(s==null?void 0:s.transform)=="object"&&s.transform!==null&&Object.keys(s.transform).length>0;let a=await me(n.fetch,`${n.url}/object/sign/${i}`,$({expiresIn:e},r?{transform:s.transform}:{}),{headers:n.headers});const o=new URLSearchParams;s!=null&&s.download&&o.set("download",s.download===!0?"":s.download),(s==null?void 0:s.cacheNonce)!=null&&o.set("cacheNonce",String(s.cacheNonce));const l=o.toString();return{signedUrl:encodeURI(`${n.url}${a.signedURL}${l?`&${l}`:""}`)}})}async createSignedUrls(t,e,s){var n=this;return n.handleOperation(async()=>{const i=await me(n.fetch,`${n.url}/object/sign/${n.bucketId}`,{expiresIn:e,paths:t},{headers:n.headers}),r=new URLSearchParams;s!=null&&s.download&&r.set("download",s.download===!0?"":s.download),(s==null?void 0:s.cacheNonce)!=null&&r.set("cacheNonce",String(s.cacheNonce));const a=r.toString();return i.map(o=>$($({},o),{},{signedUrl:o.signedURL?encodeURI(`${n.url}${o.signedURL}${a?`&${a}`:""}`):null}))})}download(t,e,s){const n=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",i=new URLSearchParams;e!=null&&e.transform&&this.applyTransformOptsToQuery(i,e.transform),(e==null?void 0:e.cacheNonce)!=null&&i.set("cacheNonce",String(e.cacheNonce));const r=i.toString(),a=this._getFinalPath(t),o=()=>cs(this.fetch,`${this.url}/${n}/${a}${r?`?${r}`:""}`,{headers:this.headers,noResolveJson:!0},s);return new Ol(o,this.shouldThrowOnError)}async info(t){var e=this;const s=e._getFinalPath(t);return e.handleOperation(async()=>Bn(await cs(e.fetch,`${e.url}/object/info/${s}`,{headers:e.headers})))}async exists(t){var e=this;const s=e._getFinalPath(t);try{return await $l(e.fetch,`${e.url}/object/${s}`,{headers:e.headers}),{data:!0,error:null}}catch(i){if(e.shouldThrowOnError)throw i;if(sn(i)){var n;const r=i instanceof Un?i.status:i instanceof Br?(n=i.originalError)===null||n===void 0?void 0:n.status:void 0;if(r!==void 0&&[400,404].includes(r))return{data:!1,error:i}}throw i}}getPublicUrl(t,e){const s=this._getFinalPath(t),n=new URLSearchParams;e!=null&&e.download&&n.set("download",e.download===!0?"":e.download),e!=null&&e.transform&&this.applyTransformOptsToQuery(n,e.transform),(e==null?void 0:e.cacheNonce)!=null&&n.set("cacheNonce",String(e.cacheNonce));const i=n.toString(),r=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${r}/public/${s}`)+(i?`?${i}`:"")}}}async remove(t){var e=this;return e.handleOperation(async()=>await ds(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:t},{headers:e.headers}))}async purgeCache(t,e,s){var n=this;return n.handleOperation(async()=>{const i=zr(n._getFinalPath(t)),r=new URLSearchParams;e!=null&&e.transformations&&r.set("transformations","true");const a=r.toString();return await ds(n.fetch,`${n.url}/cdn/${i}${a?`?${a}`:""}`,{},{headers:n.headers},s)})}async list(t,e,s){var n=this;return n.handleOperation(async()=>{const i=e!=null&&e.sortBy?$($({},$n.sortBy),e.sortBy):$n.sortBy,r=$($($({},$n),e),{},{sortBy:i,prefix:t||""});return await me(n.fetch,`${n.url}/object/list/${n.bucketId}`,r,{headers:n.headers},s)})}async listV2(t,e){var s=this;return s.handleOperation(async()=>{const n=$({},t);return await me(s.fetch,`${s.url}/object/list-v2/${s.bucketId}`,n,{headers:s.headers},e)})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(t,e){return e.width&&t.set("width",e.width.toString()),e.height&&t.set("height",e.height.toString()),e.resize&&t.set("resize",e.resize),e.format&&t.set("format",e.format),e.quality&&t.set("quality",e.quality.toString()),t}};const Rl="2.112.3",ms={"X-Client-Info":`storage-js/${Rl}`};var Il=class extends zt{constructor(t,e={},s,n){const i=new URL(t);n!=null&&n.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes("storage.supabase.")&&(i.hostname=i.hostname.replace("supabase.","storage.supabase."));const r=i.href.replace(/\/$/,""),a=$($({},ms),e);super(r,a,s,"storage")}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const s=e.listBucketOptionsToQueryString(t);return await cs(e.fetch,`${e.url}/bucket${s}`,{headers:e.headers})})}async getBucket(t){var e=this;return e.handleOperation(async()=>await cs(e.fetch,`${e.url}/bucket/${t}`,{headers:e.headers}))}async createBucket(t,e={public:!1}){var s=this;return s.handleOperation(async()=>await me(s.fetch,`${s.url}/bucket`,{id:t,name:t,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:s.headers}))}async updateBucket(t,e){var s=this;return s.handleOperation(async()=>await zn(s.fetch,`${s.url}/bucket/${t}`,{id:t,name:t,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:s.headers}))}async emptyBucket(t){var e=this;return e.handleOperation(async()=>await me(e.fetch,`${e.url}/bucket/${t}/empty`,{},{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await ds(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}async purgeBucketCache(t,e,s){var n=this;return n.handleOperation(async()=>{const i=new URLSearchParams;e!=null&&e.transformations&&i.set("transformations","true");const r=i.toString();return await ds(n.fetch,`${n.url}/cdn/${zr(t)}${r?`?${r}`:""}`,{},{headers:n.headers},s)})}listBucketOptionsToQueryString(t){const e={};return t&&("limit"in t&&(e.limit=String(t.limit)),"offset"in t&&(e.offset=String(t.offset)),t.search&&(e.search=t.search),t.sortColumn&&(e.sortColumn=t.sortColumn),t.sortOrder&&(e.sortOrder=t.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},Pl=class extends zt{constructor(t,e={},s){const n=t.replace(/\/$/,""),i=$($({},ms),e);super(n,i,s,"storage")}async createBucket(t){var e=this;return e.handleOperation(async()=>await me(e.fetch,`${e.url}/bucket`,{name:t},{headers:e.headers}))}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const s=new URLSearchParams;(t==null?void 0:t.limit)!==void 0&&s.set("limit",t.limit.toString()),(t==null?void 0:t.offset)!==void 0&&s.set("offset",t.offset.toString()),t!=null&&t.sortColumn&&s.set("sortColumn",t.sortColumn),t!=null&&t.sortOrder&&s.set("sortOrder",t.sortOrder),t!=null&&t.search&&s.set("search",t.search);const n=s.toString(),i=n?`${e.url}/bucket?${n}`:`${e.url}/bucket`;return await cs(e.fetch,i,{headers:e.headers})})}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await ds(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}from(t){var e=this;if(!kl(t))throw new tn("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const s=new ml({baseUrl:this.url,catalogName:t,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),n=this.shouldThrowOnError;return new Proxy(s,{get(i,r){const a=i[r];return typeof a!="function"?a:async(...o)=>{try{return{data:await a.apply(i,o),error:null}}catch(l){if(n)throw l;return{data:null,error:l}}}}})}},Dl=class extends zt{constructor(t,e={},s){const n=t.replace(/\/$/,""),i=$($({},ms),{},{"Content-Type":"application/json"},e);super(n,i,s,"vectors")}async createIndex(t){var e=this;return e.handleOperation(async()=>await re.post(e.fetch,`${e.url}/CreateIndex`,t,{headers:e.headers})||{})}async getIndex(t,e){var s=this;return s.handleOperation(async()=>await re.post(s.fetch,`${s.url}/GetIndex`,{vectorBucketName:t,indexName:e},{headers:s.headers}))}async listIndexes(t){var e=this;return e.handleOperation(async()=>await re.post(e.fetch,`${e.url}/ListIndexes`,t,{headers:e.headers}))}async deleteIndex(t,e){var s=this;return s.handleOperation(async()=>await re.post(s.fetch,`${s.url}/DeleteIndex`,{vectorBucketName:t,indexName:e},{headers:s.headers})||{})}},Fl=class extends zt{constructor(t,e={},s){const n=t.replace(/\/$/,""),i=$($({},ms),{},{"Content-Type":"application/json"},e);super(n,i,s,"vectors")}async putVectors(t){var e=this;if(t.vectors.length<1||t.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await re.post(e.fetch,`${e.url}/PutVectors`,t,{headers:e.headers})||{})}async getVectors(t){var e=this;return e.handleOperation(async()=>await re.post(e.fetch,`${e.url}/GetVectors`,t,{headers:e.headers}))}async listVectors(t){var e=this;if(t.segmentCount!==void 0){if(t.segmentCount<1||t.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(t.segmentIndex!==void 0&&(t.segmentIndex<0||t.segmentIndex>=t.segmentCount))throw new Error(`segmentIndex must be between 0 and ${t.segmentCount-1}`)}return e.handleOperation(async()=>await re.post(e.fetch,`${e.url}/ListVectors`,t,{headers:e.headers}))}async queryVectors(t){var e=this;return e.handleOperation(async()=>await re.post(e.fetch,`${e.url}/QueryVectors`,t,{headers:e.headers}))}async deleteVectors(t){var e=this;if(t.keys.length<1||t.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await re.post(e.fetch,`${e.url}/DeleteVectors`,t,{headers:e.headers})||{})}},jl=class extends zt{constructor(t,e={},s){const n=t.replace(/\/$/,""),i=$($({},ms),{},{"Content-Type":"application/json"},e);super(n,i,s,"vectors")}async createBucket(t){var e=this;return e.handleOperation(async()=>await re.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}async getBucket(t){var e=this;return e.handleOperation(async()=>await re.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:t},{headers:e.headers}))}async listBuckets(t={}){var e=this;return e.handleOperation(async()=>await re.post(e.fetch,`${e.url}/ListVectorBuckets`,t,{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await re.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}},Ml=class extends jl{constructor(t,e={}){super(t,e.headers||{},e.fetch)}from(t){return new Nl(this.url,this.headers,t,this.fetch)}async createBucket(t){var e=()=>super.createBucket,s=this;return e().call(s,t)}async getBucket(t){var e=()=>super.getBucket,s=this;return e().call(s,t)}async listBuckets(t={}){var e=()=>super.listBuckets,s=this;return e().call(s,t)}async deleteBucket(t){var e=()=>super.deleteBucket,s=this;return e().call(s,t)}},Nl=class extends Dl{constructor(t,e,s,n){super(t,e,n),this.vectorBucketName=s}async createIndex(t){var e=()=>super.createIndex,s=this;return e().call(s,$($({},t),{},{vectorBucketName:s.vectorBucketName}))}async listIndexes(t={}){var e=()=>super.listIndexes,s=this;return e().call(s,$($({},t),{},{vectorBucketName:s.vectorBucketName}))}async getIndex(t){var e=()=>super.getIndex,s=this;return e().call(s,s.vectorBucketName,t)}async deleteIndex(t){var e=()=>super.deleteIndex,s=this;return e().call(s,s.vectorBucketName,t)}index(t){return new Ll(this.url,this.headers,this.vectorBucketName,t,this.fetch)}},Ll=class extends Fl{constructor(t,e,s,n,i){super(t,e,i),this.vectorBucketName=s,this.indexName=n}async putVectors(t){var e=()=>super.putVectors,s=this;return e().call(s,$($({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async getVectors(t){var e=()=>super.getVectors,s=this;return e().call(s,$($({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async listVectors(t={}){var e=()=>super.listVectors,s=this;return e().call(s,$($({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async queryVectors(t){var e=()=>super.queryVectors,s=this;return e().call(s,$($({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async deleteVectors(t){var e=()=>super.deleteVectors,s=this;return e().call(s,$($({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}},Ul=class extends Il{constructor(t,e={},s,n){super(t,e,s,n)}from(t){return new Cl(this.url,this.headers,t,this.fetch)}get vectors(){return new Ml(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new Pl(this.url+"/iceberg",this.headers,this.fetch)}};const Kr="2.112.3",De=30*1e3,Qt=3,Tn=Qt*De,Bl=2*De,zl="http://localhost:9999",Hl="supabase.auth.token",ql={"X-Client-Info":`gotrue-js/${Kr}`},Hn="X-Supabase-Api-Version",Vr={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},Wl=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,dt="sb_flow_id",Kl=5,Vl=600*1e3;class us extends Error{constructor(e,s,n){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=s,this.code=n}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function S(t){return typeof t=="object"&&t!==null&&"__isAuthError"in t}class Gl extends us{constructor(e,s,n){super(e,s,n),this.name="AuthApiError",this.status=s,this.code=n}}function tr(t){return S(t)&&t.name==="AuthApiError"}class be extends us{constructor(e,s){super(e),this.name="AuthUnknownError",this.originalError=s}}class ke extends us{constructor(e,s,n,i){super(e,n,i),this.name=s,this.status=n}}class W extends ke{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Ds(t){return S(t)&&t.name==="AuthSessionMissingError"}class Ot extends ke{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Fs extends ke{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class js extends ke{constructor(e,s=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=s}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function Jl(t){return S(t)&&t.name==="AuthImplicitGrantRedirectError"}class sr extends ke{constructor(e,s=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=s}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class Yl extends ke{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class Bs extends ke{constructor(e,s){super(e,"AuthRetryableFetchError",s,void 0)}}function Ms(t){return S(t)&&t.name==="AuthRetryableFetchError"}class nr extends ke{constructor(e="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(e,"AuthRefreshDiscardedError",409,void 0)}}function Xl(t){return S(t)&&t.name==="AuthRefreshDiscardedError"}class ir extends ke{constructor(e,s,n){super(e,"AuthWeakPasswordError",s,"weak_password"),this.reasons=n}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class Vs extends ke{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const Gs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),rr=` 	
\r=`.split(""),Ql=(()=>{const t=new Array(128);for(let e=0;e<t.length;e+=1)t[e]=-1;for(let e=0;e<rr.length;e+=1)t[rr[e].charCodeAt(0)]=-2;for(let e=0;e<Gs.length;e+=1)t[Gs[e].charCodeAt(0)]=e;return t})();function ar(t,e,s){if(t!==null)for(e.queue=e.queue<<8|t,e.queuedBits+=8;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;s(Gs[n]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;s(Gs[n]),e.queuedBits-=6}}function Gr(t,e,s){const n=Ql[t];if(n>-1)for(e.queue=e.queue<<6|n,e.queuedBits+=6;e.queuedBits>=8;)s(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`)}}function or(t){const e=[],s=a=>{e.push(String.fromCodePoint(a))},n={utf8seq:0,codepoint:0},i={queue:0,queuedBits:0},r=a=>{tc(a,n,s)};for(let a=0;a<t.length;a+=1)Gr(t.charCodeAt(a),i,r);return e.join("")}function Zl(t,e){if(t<=127){e(t);return}else if(t<=2047){e(192|t>>6),e(128|t&63);return}else if(t<=65535){e(224|t>>12),e(128|t>>6&63),e(128|t&63);return}else if(t<=1114111){e(240|t>>18),e(128|t>>12&63),e(128|t>>6&63),e(128|t&63);return}throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)}function ec(t,e){for(let s=0;s<t.length;s+=1){let n=t.charCodeAt(s);if(n>55295&&n<=56319){const i=(n-55296)*1024&65535;n=(t.charCodeAt(s+1)-56320&65535|i)+65536,s+=1}Zl(n,e)}}function tc(t,e,s){if(e.utf8seq===0){if(t<=127){s(t);return}for(let n=1;n<6;n+=1)if((t>>7-n&1)===0){e.utf8seq=n;break}if(e.utf8seq===2)e.codepoint=t&31;else if(e.utf8seq===3)e.codepoint=t&15;else if(e.utf8seq===4)e.codepoint=t&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(t<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|t&63,e.utf8seq-=1,e.utf8seq===0&&s(e.codepoint)}}function Nt(t){const e=[],s={queue:0,queuedBits:0},n=i=>{e.push(i)};for(let i=0;i<t.length;i+=1)Gr(t.charCodeAt(i),s,n);return new Uint8Array(e)}function sc(t){const e=[];return ec(t,s=>e.push(s)),new Uint8Array(e)}function ut(t){const e=[],s={queue:0,queuedBits:0},n=i=>{e.push(i)};return t.forEach(i=>ar(i,s,n)),ar(null,s,n),e.join("")}function nc(t){return Math.round(Date.now()/1e3)+t}function ic(){return Symbol("auth-callback")}const J=()=>typeof window<"u"&&typeof document<"u",nt={tested:!1,writable:!1},Jr=()=>{if(!J())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(nt.tested)return nt.writable;const t=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(t,t),globalThis.localStorage.removeItem(t),nt.tested=!0,nt.writable=!0}catch{nt.tested=!0,nt.writable=!1}return nt.writable};function lr(t){const e={},s=new URL(t);if(s.hash&&s.hash[0]==="#")try{new URLSearchParams(s.hash.substring(1)).forEach((i,r)=>{e[r]=i})}catch{}return s.searchParams.forEach((n,i)=>{e[i]=n}),e}const Yr=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),rc=t=>typeof t=="object"&&t!==null&&"status"in t&&"ok"in t&&"json"in t&&typeof t.json=="function",Fe=async(t,e,s)=>{await t.setItem(e,JSON.stringify(s))},X=async(t,e)=>{const s=await t.getItem(e);if(!s)return null;try{return JSON.parse(s)}catch{return null}},se=async(t,e)=>{await t.removeItem(e)};class nn{constructor(){this.promise=new nn.promiseConstructor((e,s)=>{this.resolve=e,this.reject=s})}}nn.promiseConstructor=Promise;function Ns(t){const e=t.split(".");if(e.length!==3)throw new Vs("Invalid JWT structure");for(let n=0;n<e.length;n++)if(!Wl.test(e[n]))throw new Vs("JWT not in base64url format");return{header:JSON.parse(or(e[0])),payload:JSON.parse(or(e[1])),signature:Nt(e[2]),raw:{header:e[0],payload:e[1]}}}async function ac(t){return await new Promise(e=>{setTimeout(()=>e(null),t)})}function oc(t,e){return new Promise((n,i)=>{(async()=>{for(let r=0;r<1/0;r++)try{const a=await t(r);if(!e(r,null,a)){n(a);return}}catch(a){if(!e(r,a)){i(a);return}}})()})}function Xr(t){return("0"+t.toString(16)).substr(-2)}function lc(){const e=new Uint32Array(56);if(typeof crypto>"u"){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=s.length;let i="";for(let r=0;r<56;r++)i+=s.charAt(Math.floor(Math.random()*n));return i}return crypto.getRandomValues(e),Array.from(e,Xr).join("")}async function cc(t){const s=new TextEncoder().encode(t),n=await crypto.subtle.digest("SHA-256",s),i=new Uint8Array(n);return Array.from(i).map(r=>String.fromCharCode(r)).join("")}async function dc(t){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),t;const s=await cc(t);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}const uc=/^[a-zA-Z0-9_-]{8,64}$/;function zs(t){return typeof t=="string"&&uc.test(t)?t:null}function hc(){if(typeof crypto<"u"&&typeof crypto.getRandomValues=="function"){const e=new Uint8Array(16);return crypto.getRandomValues(e),Array.from(e,Xr).join("")}let t="";for(let e=0;e<32;e++)t+=Math.floor(Math.random()*16).toString(16);return t}const Bt=(t,e)=>`${t}-flow-${e}-code-verifier`,hs=t=>`${t}-flows-code-verifier`;async function Xn(t,e){const s=await X(t,hs(e));return Array.isArray(s)?s.filter(n=>zs(n)!==null):[]}async function pc(t,e,s,n,i){await Fe(t,Bt(e,s),n);const r=(await Xn(t,e)).filter(a=>a!==s);for(r.push(s);r.length>Kl;){const a=r.shift();await se(t,Bt(e,a)),i==null||i(a)}await Fe(t,hs(e),r),await Fe(t,`${e}-code-verifier`,n)}async function fc(t,e,s){if(s){const i=await X(t,Bt(e,s));return{verifier:typeof i=="string"?i:null,flowId:s}}const n=await X(t,`${e}-code-verifier`);return{verifier:typeof n=="string"?n:null,flowId:null}}async function he(t,e,s){const n=`${e}-code-verifier`;if(!s){await se(t,n);return}const i=Bt(e,s),r=await X(t,i);await se(t,i);const a=await Xn(t,e),o=a.filter(l=>l!==s);o.length!==a.length&&(o.length>0?await Fe(t,hs(e),o):await se(t,hs(e))),r!=null&&r===await X(t,n)&&await se(t,n)}async function gc(t,e){const s=await Xn(t,e);for(const n of s)await se(t,Bt(e,n));await se(t,hs(e)),await se(t,`${e}-code-verifier`)}function mc(t,e){const s=t.indexOf("#");let n=s===-1?t:t.slice(0,s);const i=s===-1?"":t.slice(s),r=n.indexOf("?");if(r!==-1){const o=n.slice(0,r),l=n.slice(r+1).split("&").filter(c=>c!==""&&c!==dt&&!c.startsWith(`${dt}=`));n=l.length>0?`${o}?${l.join("&")}`:o}const a=n.includes("?")?"&":"?";return`${n}${a}${dt}=${encodeURIComponent(e)}${i}`}async function bc(t,e,s=!1,n){const i=lc();let r=i;s&&(r+="/recovery");const a=hc();await pc(t,e,a,r,n);const o=await dc(i);return[o,i===o?"plain":"s256",a]}const yc=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function vc(t){const e=t.headers.get(Hn);if(!e||!e.match(yc))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function wc(t){if(!t)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(t<=e)throw new Error("JWT has expired")}function xc(t){switch(t){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const _c=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function Ce(t){if(!_c.test(t))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function ge(t){if(!t.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function On(){const t={};return new Proxy(t,{get:(e,s)=>{if(s==="__isUserNotAvailableProxy")return!0;if(typeof s=="symbol"){const n=s.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${s}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function kc(t,e){return new Proxy(t,{get:(s,n,i)=>{if(n==="__isInsecureUserWarningProxy")return!0;if(typeof n=="symbol"){const r=n.toString();if(r==="Symbol(Symbol.toPrimitive)"||r==="Symbol(Symbol.toStringTag)"||r==="Symbol(util.inspect.custom)"||r==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(s,n,i)}return!e.value&&typeof n=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(s,n,i)}})}function cr(t){return JSON.parse(JSON.stringify(t))}const at=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(t)},dr=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function ur(t){var e;if(!rc(t))throw new Bs(at(t),0);let s;try{s=await t.json()}catch(r){throw dr.includes(t.status)?new Bs(t.statusText||`HTTP ${t.status}`,t.status):new be(at(r),r)}if(dr.includes(t.status))throw new Bs(at(s),t.status);let n;const i=vc(t);if(i&&i.getTime()>=Vr["2024-01-01"].timestamp&&typeof s=="object"&&s&&typeof s.code=="string"?n=s.code:typeof s=="object"&&s&&typeof s.error_code=="string"&&(n=s.error_code),n){if(n==="weak_password")throw new ir(at(s),t.status,((e=s.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(n==="session_not_found")throw new W}else if(typeof s=="object"&&s&&typeof s.weak_password=="object"&&s.weak_password&&Array.isArray(s.weak_password.reasons)&&s.weak_password.reasons.length&&s.weak_password.reasons.reduce((r,a)=>r&&typeof a=="string",!0))throw new ir(at(s),t.status,s.weak_password.reasons);throw new Gl(at(s),t.status||500,n)}const Sc=(t,e,s,n)=>{const i={method:t,headers:(e==null?void 0:e.headers)||{}};return t==="GET"?i:(i.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),i.body=JSON.stringify(n),Object.assign(Object.assign({},i),s))};async function A(t,e,s,n){var i;const r=Object.assign({},n==null?void 0:n.headers);r[Hn]||(r[Hn]=Vr["2024-01-01"].name),n!=null&&n.jwt&&(r.Authorization=`Bearer ${n.jwt}`);const a=(i=n==null?void 0:n.query)!==null&&i!==void 0?i:{};n!=null&&n.redirectTo&&(a.redirect_to=n.redirectTo);const o=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await Ec(t,e,s+o,{headers:r,noResolveJson:n==null?void 0:n.noResolveJson},{},n==null?void 0:n.body);return n!=null&&n.xform?n==null?void 0:n.xform(l):{data:Object.assign({},l),error:null}}async function Ec(t,e,s,n,i,r){const a=Sc(e,n,i,r);let o;try{o=await t(s,Object.assign({},a))}catch(l){throw new Bs(at(l),0)}if(o.ok||await ur(o),n!=null&&n.noResolveJson)return o;try{return await o.json()}catch(l){await ur(l)}}function oe(t){var e;let s=null;Tc(t)&&(s=Object.assign({},t),t.expires_at||(s.expires_at=nc(t.expires_in)));const n=(e=t.user)!==null&&e!==void 0?e:typeof(t==null?void 0:t.id)=="string"?t:null;return{data:{session:s,user:n},error:null}}function hr(t){const e=oe(t);return!e.error&&t.weak_password&&typeof t.weak_password=="object"&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.message&&typeof t.weak_password.message=="string"&&t.weak_password.reasons.reduce((s,n)=>s&&typeof n=="string",!0)&&(e.data.weak_password=t.weak_password),e}function Ge(t){var e;return{data:{user:(e=t.user)!==null&&e!==void 0?e:t},error:null}}function Ac(t){return{data:t,error:null}}function $c(t){const{action_link:e,email_otp:s,hashed_token:n,redirect_to:i,verification_type:r}=t,a=en(t,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:s,hashed_token:n,redirect_to:i,verification_type:r},l=Object.assign({},a);return{data:{properties:o,user:l},error:null}}function pr(t){return t}function Tc(t){return!!t.access_token&&!!t.refresh_token&&!!t.expires_in}const Cn=["global","local","others"];class Oc{constructor({url:e="",headers:s={},fetch:n,experimental:i}){this.url=e,this.headers=s,this.fetch=Yr(n),this.experimental=i??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,s=Cn[0]){if(Cn.indexOf(s)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Cn.join(", ")}`);try{return await A(this.fetch,"POST",`${this.url}/logout?scope=${s}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(n){if(S(n))return{data:null,error:n};throw n}}async inviteUserByEmail(e,s={}){try{return await A(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:s.data},headers:this.headers,redirectTo:s.redirectTo,xform:Ge})}catch(n){if(S(n))return{data:{user:null},error:n};throw n}}async generateLink(e){try{const{options:s}=e,n=en(e,["options"]),i=Object.assign(Object.assign({},n),s);return"newEmail"in n&&(i.new_email=n==null?void 0:n.newEmail,delete i.newEmail),await A(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:i,headers:this.headers,xform:$c,redirectTo:s==null?void 0:s.redirectTo})}catch(s){if(S(s))return{data:{properties:null,user:null},error:s};throw s}}async createUser(e){try{return await A(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Ge})}catch(s){if(S(s))return{data:{user:null},error:s};throw s}}async listUsers(e){var s,n,i,r,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},h=await A(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(s=e==null?void 0:e.page)===null||s===void 0?void 0:s.toString())!==null&&n!==void 0?n:"",per_page:(r=(i=e==null?void 0:e.perPage)===null||i===void 0?void 0:i.toString())!==null&&r!==void 0?r:""},xform:pr});if(h.error)throw h.error;const u=await h.json(),g=(a=h.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(l=(o=h.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return f.length>0&&(f.forEach(v=>{const m=parseInt(v.split(";")[0].split("=")[1].substring(0,1)),b=JSON.parse(v.split(";")[1].split("=")[1]);c[`${b}Page`]=m}),c.total=parseInt(g)),{data:Object.assign(Object.assign({},u),c),error:null}}catch(c){if(S(c))return{data:{users:[]},error:c};throw c}}async getUserById(e){Ce(e);try{return await A(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Ge})}catch(s){if(S(s))return{data:{user:null},error:s};throw s}}async updateUserById(e,s){Ce(e);try{return await A(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:s,headers:this.headers,xform:Ge})}catch(n){if(S(n))return{data:{user:null},error:n};throw n}}async deleteUser(e,s=!1){Ce(e);try{return await A(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:s},xform:Ge})}catch(n){if(S(n))return{data:{user:null},error:n};throw n}}async _listFactors(e){Ce(e.userId);try{const{data:s,error:n}=await A(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:i=>({data:{factors:i},error:null})});return{data:s,error:n}}catch(s){if(S(s))return{data:null,error:s};throw s}}async _deleteFactor(e){Ce(e.userId),Ce(e.id);try{return{data:await A(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(s){if(S(s))return{data:null,error:s};throw s}}async _listOAuthClients(e){var s,n,i,r,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},h=await A(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(s=e==null?void 0:e.page)===null||s===void 0?void 0:s.toString())!==null&&n!==void 0?n:"",per_page:(r=(i=e==null?void 0:e.perPage)===null||i===void 0?void 0:i.toString())!==null&&r!==void 0?r:""},xform:pr});if(h.error)throw h.error;const u=await h.json(),g=(a=h.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(l=(o=h.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return f.length>0&&(f.forEach(v=>{const m=parseInt(v.split(";")[0].split("=")[1].substring(0,1)),b=JSON.parse(v.split(";")[1].split("=")[1]);c[`${b}Page`]=m}),c.total=parseInt(g)),{data:Object.assign(Object.assign({},u),c),error:null}}catch(c){if(S(c))return{data:{clients:[]},error:c};throw c}}async _createOAuthClient(e){try{return await A(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(S(s))return{data:null,error:s};throw s}}async _getOAuthClient(e){try{return await A(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(S(s))return{data:null,error:s};throw s}}async _updateOAuthClient(e,s){try{return await A(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:s,headers:this.headers,xform:n=>({data:n,error:null})})}catch(n){if(S(n))return{data:null,error:n};throw n}}async _deleteOAuthClient(e){try{return await A(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(S(s))return{data:null,error:s};throw s}}async _regenerateOAuthClientSecret(e){try{return await A(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(S(s))return{data:null,error:s};throw s}}async _listCustomProviders(e){try{const s={};return e!=null&&e.type&&(s.type=e.type),await A(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:s,xform:n=>{var i;return{data:{providers:(i=n==null?void 0:n.providers)!==null&&i!==void 0?i:[]},error:null}}})}catch(s){if(S(s))return{data:{providers:[]},error:s};throw s}}async _createCustomProvider(e){try{return await A(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(S(s))return{data:null,error:s};throw s}}async _getCustomProvider(e){try{return await A(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(S(s))return{data:null,error:s};throw s}}async _updateCustomProvider(e,s){try{return await A(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:s,headers:this.headers,xform:n=>({data:n,error:null})})}catch(n){if(S(n))return{data:null,error:n};throw n}}async _deleteCustomProvider(e){try{return await A(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(S(s))return{data:null,error:s};throw s}}async _adminListPasskeys(e){ge(this.experimental),Ce(e.userId);try{return await A(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(S(s))return{data:null,error:s};throw s}}async _adminDeletePasskey(e){ge(this.experimental),Ce(e.userId),Ce(e.passkeyId);try{return await A(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(S(s))return{data:null,error:s};throw s}}}function fr(t={}){return{getItem:e=>t[e]||null,setItem:(e,s)=>{t[e]=s},removeItem:e=>{delete t[e]}}}globalThis&&Jr()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class Cc extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}function Rc(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function Qr(t){if(!/^0x[a-fA-F0-9]{40}$/.test(t))throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);return t.toLowerCase()}function Ic(t){return parseInt(t,16)}function Pc(t){const e=new TextEncoder().encode(t);return"0x"+Array.from(e,n=>n.toString(16).padStart(2,"0")).join("")}function Dc(t){var e;const{chainId:s,domain:n,expirationTime:i,issuedAt:r=new Date,nonce:a,notBefore:o,requestId:l,resources:c,scheme:h,uri:u,version:g}=t;{if(!Number.isInteger(s))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${s}`);if(!n)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(a&&a.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!u)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(g!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${g}`);if(!((e=t.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`)}const f=Qr(t.address),v=h?`${h}://${n}`:n,m=t.statement?`${t.statement}
`:"",b=`${v} wants you to sign in with your Ethereum account:
${f}

${m}`;let w=`URI: ${u}
Version: ${g}
Chain ID: ${s}${a?`
Nonce: ${a}`:""}
Issued At: ${r.toISOString()}`;if(i&&(w+=`
Expiration Time: ${i.toISOString()}`),o&&(w+=`
Not Before: ${o.toISOString()}`),l&&(w+=`
Request ID: ${l}`),c){let x=`
Resources:`;for(const p of c){if(!p||typeof p!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${p}`);x+=`
- ${p}`}w+=x}return`${b}
${w}`}class H extends Error{constructor({message:e,code:s,cause:n,name:i}){var r;super(e,{cause:n}),this.__isWebAuthnError=!0,this.name=(r=i??(n instanceof Error?n.name:void 0))!==null&&r!==void 0?r:"Unknown Error",this.code=s}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class Js extends H{constructor(e,s){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s,message:e}),this.name="WebAuthnUnknownError",this.originalError=s}}function Fc({error:t,options:e}){var s,n,i;const{publicKey:r}=e;if(!r)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new H({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else if(t.name==="ConstraintError"){if(((s=r.authenticatorSelection)===null||s===void 0?void 0:s.requireResidentKey)===!0)return new H({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:t});if(e.mediation==="conditional"&&((n=r.authenticatorSelection)===null||n===void 0?void 0:n.userVerification)==="required")return new H({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:t});if(((i=r.authenticatorSelection)===null||i===void 0?void 0:i.userVerification)==="required")return new H({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:t})}else{if(t.name==="InvalidStateError")return new H({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:t});if(t.name==="NotAllowedError")return new H({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="NotSupportedError")return r.pubKeyCredParams.filter(o=>o.type==="public-key").length===0?new H({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:t}):new H({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:t});if(t.name==="SecurityError"){const a=window.location.hostname;if(Zr(a)){if(r.rp.id!==a)return new H({message:`The RP ID "${r.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new H({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="TypeError"){if(r.user.id.byteLength<1||r.user.id.byteLength>64)return new H({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:t})}else if(t.name==="UnknownError")return new H({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new H({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}function jc({error:t,options:e}){const{publicKey:s}=e;if(!s)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new H({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else{if(t.name==="NotAllowedError")return new H({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="SecurityError"){const n=window.location.hostname;if(Zr(n)){if(s.rpId!==n)return new H({message:`The RP ID "${s.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new H({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="UnknownError")return new H({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new H({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}class Mc{createNewAbortSignal(){if(this.controller){const s=new Error("Cancelling existing WebAuthn API call for new one");s.name="AbortError",this.controller.abort(s)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const qn=new Mc;function gr(t){if(!t)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(t);const{challenge:e,user:s,excludeCredentials:n}=t,i=en(t,["challenge","user","excludeCredentials"]),r=Nt(e).buffer,a=Object.assign(Object.assign({},s),{id:Nt(s.id).buffer}),o=Object.assign(Object.assign({},i),{challenge:r,user:a});if(n&&n.length>0){o.excludeCredentials=new Array(n.length);for(let l=0;l<n.length;l++){const c=n[l];o.excludeCredentials[l]=Object.assign(Object.assign({},c),{id:Nt(c.id).buffer,type:c.type||"public-key",transports:c.transports})}}return o}function mr(t){if(!t)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(t);const{challenge:e,allowCredentials:s}=t,n=en(t,["challenge","allowCredentials"]),i=Nt(e).buffer,r=Object.assign(Object.assign({},n),{challenge:i});if(s&&s.length>0){r.allowCredentials=new Array(s.length);for(let a=0;a<s.length;a++){const o=s[a];r.allowCredentials[a]=Object.assign(Object.assign({},o),{id:Nt(o.id).buffer,type:o.type||"public-key",transports:o.transports})}}return r}function br(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const s=t;return{id:t.id,rawId:t.id,response:{attestationObject:ut(new Uint8Array(t.response.attestationObject)),clientDataJSON:ut(new Uint8Array(t.response.clientDataJSON))},type:"public-key",clientExtensionResults:t.getClientExtensionResults(),authenticatorAttachment:(e=s.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function yr(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const s=t,n=t.getClientExtensionResults(),i=t.response;return{id:t.id,rawId:t.id,response:{authenticatorData:ut(new Uint8Array(i.authenticatorData)),clientDataJSON:ut(new Uint8Array(i.clientDataJSON)),signature:ut(new Uint8Array(i.signature)),userHandle:i.userHandle?ut(new Uint8Array(i.userHandle)):void 0},type:"public-key",clientExtensionResults:n,authenticatorAttachment:(e=s.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function Zr(t){return t==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)}function Ys(){var t,e;return!!(J()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((t=navigator==null?void 0:navigator.credentials)===null||t===void 0?void 0:t.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function ea(t){try{const e=await navigator.credentials.create(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new Js("Browser returned unexpected credential type",e)}:{data:null,error:new Js("Empty credential response",e)}}catch(e){return{data:null,error:Fc({error:e,options:t})}}}async function ta(t){try{const e=await navigator.credentials.get(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new Js("Browser returned unexpected credential type",e)}:{data:null,error:new Js("Empty credential response",e)}}catch(e){return{data:null,error:jc({error:e,options:t})}}}const Nc={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},Lc={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function Xs(...t){const e=i=>i!==null&&typeof i=="object"&&!Array.isArray(i),s=i=>i instanceof ArrayBuffer||ArrayBuffer.isView(i),n={};for(const i of t)if(i)for(const r in i){const a=i[r];if(a!==void 0)if(Array.isArray(a))n[r]=a;else if(s(a))n[r]=a;else if(e(a)){const o=n[r];e(o)?n[r]=Xs(o,a):n[r]=Xs(a)}else n[r]=a}return n}function Uc(t,e){return Xs(Nc,t,e||{})}function Bc(t,e){return Xs(Lc,t,e||{})}class zc{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:s,friendlyName:n,signal:i},r){var a;try{const{data:o,error:l}=await this.client.mfa.challenge({factorId:e,webauthn:s});if(!o)return{data:null,error:l};const c=i??qn.createNewAbortSignal();if(o.webauthn.type==="create"){const{user:h}=o.webauthn.credential_options.publicKey;if(!h.name){const u=n;if(u)h.name=`${h.id}:${u}`;else{const f=(await this.client.getUser()).data.user,v=((a=f==null?void 0:f.user_metadata)===null||a===void 0?void 0:a.name)||(f==null?void 0:f.email)||(f==null?void 0:f.id)||"User";h.name=`${h.id}:${v}`}}h.displayName||(h.displayName=h.name)}switch(o.webauthn.type){case"create":{const h=Uc(o.webauthn.credential_options.publicKey,r==null?void 0:r.create),{data:u,error:g}=await ea({publicKey:h,signal:c});return u?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:u}},error:null}:{data:null,error:g}}case"request":{const h=Bc(o.webauthn.credential_options.publicKey,r==null?void 0:r.request),{data:u,error:g}=await ta(Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:h,signal:c}));return u?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:u}},error:null}:{data:null,error:g}}}}catch(o){return S(o)?{data:null,error:o}:{data:null,error:new be("Unexpected error in challenge",o)}}}async _verify({challengeId:e,factorId:s,webauthn:n}){return this.client.mfa.verify({factorId:s,challengeId:e,webauthn:n})}async _authenticate({factorId:e,webauthn:{rpId:s=typeof window<"u"?window.location.hostname:void 0,rpOrigins:n=typeof window<"u"?[window.location.origin]:void 0,signal:i}={}},r){if(!s)return{data:null,error:new us("rpId is required for WebAuthn authentication")};try{if(!Ys())return{data:null,error:new be("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:s,rpOrigins:n},signal:i},{request:r});if(!a)return{data:null,error:o};const{webauthn:l}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:l.type,rpId:s,rpOrigins:n,credential_response:l.credential_response}})}catch(a){return S(a)?{data:null,error:a}:{data:null,error:new be("Unexpected error in authenticate",a)}}}async _register({friendlyName:e,webauthn:{rpId:s=typeof window<"u"?window.location.hostname:void 0,rpOrigins:n=typeof window<"u"?[window.location.origin]:void 0,signal:i}={}},r){if(!s)return{data:null,error:new us("rpId is required for WebAuthn registration")};try{if(!Ys())return{data:null,error:new be("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(h=>{var u;return(u=h.data)===null||u===void 0?void 0:u.all.find(g=>g.factor_type==="webauthn"&&g.friendly_name===e&&g.status!=="unverified")}).then(h=>h?this.client.mfa.unenroll({factorId:h==null?void 0:h.id}):void 0),{data:null,error:o};const{data:l,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:s,rpOrigins:n},signal:i},{create:r});return l?this._verify({factorId:a.id,challengeId:l.challengeId,webauthn:{rpId:s,rpOrigins:n,type:l.webauthn.type,credential_response:l.webauthn.credential_response}}):{data:null,error:c}}catch(a){return S(a)?{data:null,error:a}:{data:null,error:new be("Unexpected error in register",a)}}}}Rc();const Hc={url:zl,storageKey:Hl,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:ql,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},Ct={};class ps{get jwks(){var e,s;return(s=(e=Ct[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&s!==void 0?s:{keys:[]}}set jwks(e){Ct[this.storageKey]=Object.assign(Object.assign({},Ct[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,s;return(s=(e=Ct[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&s!==void 0?s:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){Ct[this.storageKey]=Object.assign(Object.assign({},Ct[this.storageKey]),{cachedAt:e})}constructor(e){var s,n,i;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this._pendingInitNotifications=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const r=Object.assign(Object.assign({},Hc),e);if(this.storageKey=r.storageKey,this.instanceID=(s=ps.nextInstanceID[this.storageKey])!==null&&s!==void 0?s:0,ps.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!r.debug,typeof r.debug=="function"&&(this.logger=r.debug),this.instanceID>0&&J()){const a=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(a),this.logDebugMessages&&console.trace(a)}if(this.persistSession=r.persistSession,this.autoRefreshToken=r.autoRefreshToken,this.experimental=(n=r.experimental)!==null&&n!==void 0?n:{},this.admin=new Oc({url:r.url,headers:r.headers,fetch:r.fetch,experimental:this.experimental}),this.url=r.url,this.headers=r.headers,this.fetch=Yr(r.fetch),this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.hasCustomAuthorizationHeader=r.hasCustomAuthorizationHeader,this.throwOnError=r.throwOnError,this.lockAcquireTimeout=r.lockAcquireTimeout,r.lock!=null&&(this.lock=r.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new zc(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(r.storage?this.storage=r.storage:Jr()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=fr(this.memoryStorage)),r.userStorage&&(this.userStorage=r.userStorage)):(this.memoryStorage={},this.storage=fr(this.memoryStorage)),J()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(i=this.broadcastChannel)===null||i===void 0||i.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a),(a.data.event==="TOKEN_REFRESHED"||a.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(a.data.event,a.data.session,!1)}catch(o){this._debug("#broadcastChannel","error",o)}})}r.skipAutoInitialize||this.initialize().catch(a=>{this._debug("#initialize()","error",a)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Kr}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){var e;if(this.initializePromise)return await this.initializePromise;this._pendingInitNotifications=[],this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())();const s=await this.initializePromise,n=(e=this._pendingInitNotifications)!==null&&e!==void 0?e:[];this._pendingInitNotifications=null;for(const i of n)await this._notifyAllSubscribers(i.event,i.session,i.broadcast);return s}async _initialize(){var e;try{let s={},n="none";if(J()&&(s=lr(window.location.href),this._isImplicitGrantCallback(s)?n="implicit":await this._isPKCECallback(s)&&(n="pkce")),J()&&this.detectSessionInUrl&&n!=="none"){const{data:i,error:r}=await this._getSessionFromURL(s,n);if(r){if(this._debug("#_initialize()","error detecting session from URL",r),Jl(r)){const l=(e=r.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:r}}return{error:r}}const{session:a,redirectType:o}=i;return this._debug("#_initialize()","detected session in URL",a,"redirect type",o),await this._saveSession(a),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(s){return S(s)?this._returnResult({error:s}):this._returnResult({error:new be("Unexpected error during initialization",s)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var s,n,i;try{const r=await A(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(i=e==null?void 0:e.options)===null||i===void 0?void 0:i.captchaToken}},xform:oe}),{data:a,error:o}=r;if(o||!a)return this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(r){if(S(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signUp(e){var s,n,i;let r=null;try{let a;if("email"in e){const{email:u,password:g,options:f}=e;let v=null,m=null;this.flowType==="pkce"&&([v,m,r]=await this._getCodeChallengeAndMethod()),a=await A(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(f==null?void 0:f.emailRedirectTo,r),body:{email:u,password:g,data:(s=f==null?void 0:f.data)!==null&&s!==void 0?s:{},gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken},code_challenge:v,code_challenge_method:m},xform:oe})}else if("phone"in e){const{phone:u,password:g,options:f}=e;a=await A(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:u,password:g,data:(n=f==null?void 0:f.data)!==null&&n!==void 0?n:{},channel:(i=f==null?void 0:f.channel)!==null&&i!==void 0?i:"sms",gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken}},xform:oe})}else throw new Fs("You must provide either an email or phone number and a password");const{data:o,error:l}=a;if(l||!o)return await he(this.storage,this.storageKey,r),this._returnResult({data:{user:null,session:null},error:l});const c=o.session,h=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",c)),this._returnResult({data:{user:h,session:c},error:null})}catch(a){if(await he(this.storage,this.storageKey,r),S(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithPassword(e){try{let s;if("email"in e){const{email:r,password:a,options:o}=e;s=await A(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:r,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:hr})}else if("phone"in e){const{phone:r,password:a,options:o}=e;s=await A(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:r,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:hr})}else throw new Fs("You must provide either an email or phone number and a password");const{data:n,error:i}=s;if(i)return this._returnResult({data:{user:null,session:null},error:i});if(!n||!n.session||!n.user){const r=new Ot;return this._returnResult({data:{user:null,session:null},error:r})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),this._returnResult({data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:i})}catch(s){if(S(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithOAuth(e){var s,n,i,r;return await this._handleProviderSignIn(e.provider,{redirectTo:(s=e.options)===null||s===void 0?void 0:s.redirectTo,scopes:(n=e.options)===null||n===void 0?void 0:n.scopes,queryParams:(i=e.options)===null||i===void 0?void 0:i.queryParams,skipBrowserRedirect:(r=e.options)===null||r===void 0?void 0:r.skipBrowserRedirect})}async exchangeCodeForSession(e,s){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e,s)):this._exchangeCodeForSession(e,s)}async signInWithWeb3(e){const{chain:s}=e;switch(s){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${s}"`)}}async signInWithEthereum(e){var s,n,i,r,a,o,l,c,h,u,g;let f,v;if("message"in e)f=e.message,v=e.signature;else{const{chain:m,wallet:b,statement:w,options:x}=e;let p;if(J())if(typeof b=="object")p=b;else{const ee=window;if("ethereum"in ee&&typeof ee.ethereum=="object"&&"request"in ee.ethereum&&typeof ee.ethereum.request=="function")p=ee.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof b!="object"||!(x!=null&&x.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");p=b}const _=new URL((s=x==null?void 0:x.url)!==null&&s!==void 0?s:window.location.href),R=await p.request({method:"eth_requestAccounts"}).then(ee=>ee).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!R||R.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const C=Qr(R[0]);let O=(n=x==null?void 0:x.signInWithEthereum)===null||n===void 0?void 0:n.chainId;if(!O){const ee=await p.request({method:"eth_chainId"});O=Ic(ee)}const ye={domain:_.host,address:C,statement:w,uri:_.href,version:"1",chainId:O,nonce:(i=x==null?void 0:x.signInWithEthereum)===null||i===void 0?void 0:i.nonce,issuedAt:(a=(r=x==null?void 0:x.signInWithEthereum)===null||r===void 0?void 0:r.issuedAt)!==null&&a!==void 0?a:new Date,expirationTime:(o=x==null?void 0:x.signInWithEthereum)===null||o===void 0?void 0:o.expirationTime,notBefore:(l=x==null?void 0:x.signInWithEthereum)===null||l===void 0?void 0:l.notBefore,requestId:(c=x==null?void 0:x.signInWithEthereum)===null||c===void 0?void 0:c.requestId,resources:(h=x==null?void 0:x.signInWithEthereum)===null||h===void 0?void 0:h.resources};f=Dc(ye),v=await p.request({method:"personal_sign",params:[Pc(f),C]})}try{const{data:m,error:b}=await A(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:f,signature:v},!((u=e.options)===null||u===void 0)&&u.captchaToken?{gotrue_meta_security:{captcha_token:(g=e.options)===null||g===void 0?void 0:g.captchaToken}}:null),xform:oe});if(b)throw b;if(!m||!m.session||!m.user){const w=new Ot;return this._returnResult({data:{user:null,session:null},error:w})}return m.session&&(await this._saveSession(m.session),await this._notifyAllSubscribers("SIGNED_IN",m.session)),this._returnResult({data:Object.assign({},m),error:b})}catch(m){if(S(m))return this._returnResult({data:{user:null,session:null},error:m});throw m}}async signInWithSolana(e){var s,n,i,r,a,o,l,c,h,u,g,f;let v,m;if("message"in e)v=e.message,m=e.signature;else{const{chain:b,wallet:w,statement:x,options:p}=e;let _;if(J())if(typeof w=="object")_=w;else{const C=window;if("solana"in C&&typeof C.solana=="object"&&("signIn"in C.solana&&typeof C.solana.signIn=="function"||"signMessage"in C.solana&&typeof C.solana.signMessage=="function"))_=C.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof w!="object"||!(p!=null&&p.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");_=w}const R=new URL((s=p==null?void 0:p.url)!==null&&s!==void 0?s:window.location.href);if("signIn"in _&&_.signIn){const C=await _.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},p==null?void 0:p.signInWithSolana),{version:"1",domain:R.host,uri:R.href}),x?{statement:x}:null));let O;if(Array.isArray(C)&&C[0]&&typeof C[0]=="object")O=C[0];else if(C&&typeof C=="object"&&"signedMessage"in C&&"signature"in C)O=C;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in O&&"signature"in O&&(typeof O.signedMessage=="string"||O.signedMessage instanceof Uint8Array)&&O.signature instanceof Uint8Array)v=typeof O.signedMessage=="string"?O.signedMessage:new TextDecoder().decode(O.signedMessage),m=O.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in _)||typeof _.signMessage!="function"||!("publicKey"in _)||typeof _!="object"||!_.publicKey||!("toBase58"in _.publicKey)||typeof _.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");v=[`${R.host} wants you to sign in with your Solana account:`,_.publicKey.toBase58(),...x?["",x,""]:[""],"Version: 1",`URI: ${R.href}`,`Issued At: ${(i=(n=p==null?void 0:p.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&i!==void 0?i:new Date().toISOString()}`,...!((r=p==null?void 0:p.signInWithSolana)===null||r===void 0)&&r.notBefore?[`Not Before: ${p.signInWithSolana.notBefore}`]:[],...!((a=p==null?void 0:p.signInWithSolana)===null||a===void 0)&&a.expirationTime?[`Expiration Time: ${p.signInWithSolana.expirationTime}`]:[],...!((o=p==null?void 0:p.signInWithSolana)===null||o===void 0)&&o.chainId?[`Chain ID: ${p.signInWithSolana.chainId}`]:[],...!((l=p==null?void 0:p.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${p.signInWithSolana.nonce}`]:[],...!((c=p==null?void 0:p.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${p.signInWithSolana.requestId}`]:[],...!((u=(h=p==null?void 0:p.signInWithSolana)===null||h===void 0?void 0:h.resources)===null||u===void 0)&&u.length?["Resources",...p.signInWithSolana.resources.map(O=>`- ${O}`)]:[]].join(`
`);const C=await _.signMessage(new TextEncoder().encode(v),"utf8");if(!C||!(C instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");m=C}}try{const{data:b,error:w}=await A(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:v,signature:ut(m)},!((g=e.options)===null||g===void 0)&&g.captchaToken?{gotrue_meta_security:{captcha_token:(f=e.options)===null||f===void 0?void 0:f.captchaToken}}:null),xform:oe});if(w)throw w;if(!b||!b.session||!b.user){const x=new Ot;return this._returnResult({data:{user:null,session:null},error:x})}return b.session&&(await this._saveSession(b.session),await this._notifyAllSubscribers("SIGNED_IN",b.session)),this._returnResult({data:Object.assign({},b),error:w})}catch(b){if(S(b))return this._returnResult({data:{user:null,session:null},error:b});throw b}}async _exchangeCodeForSession(e,s){const n=(s==null?void 0:s.flowId)!=null,i=n?zs(s==null?void 0:s.flowId):J()?zs(lr(window.location.href)[dt]):null;n&&!i&&this._debug("#_exchangeCodeForSession()","provided flowId is not a valid flow id",s==null?void 0:s.flowId);const{verifier:r,flowId:a}=n&&!i?{verifier:null,flowId:null}:await fc(this.storage,this.storageKey,i),[o,l]=(r??"").split("/");try{if(!o&&this.flowType==="pkce")throw new Yl;const{data:c,error:h}=await A(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:o},xform:oe});if(await he(this.storage,this.storageKey,a),h)throw h;if(!c||!c.session||!c.user){const u=new Ot;return this._returnResult({data:{user:null,session:null,redirectType:null},error:u})}return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers(l==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",c.session)),this._returnResult({data:Object.assign(Object.assign({},c),{redirectType:l??null}),error:h})}catch(c){if(await he(this.storage,this.storageKey,a),S(c))return this._returnResult({data:{user:null,session:null,redirectType:null},error:c});throw c}}async signInWithIdToken(e){try{const{options:s,provider:n,token:i,access_token:r,nonce:a}=e,o=await A(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:i,access_token:r,nonce:a,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},xform:oe}),{data:l,error:c}=o;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!l||!l.session||!l.user){const h=new Ot;return this._returnResult({data:{user:null,session:null},error:h})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:l,error:c})}catch(s){if(S(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithOtp(e){var s,n,i,r,a;let o=null;try{if("email"in e){const{email:l,options:c}=e;let h=null,u=null;this.flowType==="pkce"&&([h,u,o]=await this._getCodeChallengeAndMethod());const{error:g}=await A(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:l,data:(s=c==null?void 0:c.data)!==null&&s!==void 0?s:{},create_user:(n=c==null?void 0:c.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},code_challenge:h,code_challenge_method:u},redirectTo:this._maybeAppendFlowIdToRedirect(c==null?void 0:c.emailRedirectTo,o)});return this._returnResult({data:{user:null,session:null},error:g})}if("phone"in e){const{phone:l,options:c}=e,{data:h,error:u}=await A(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:l,data:(i=c==null?void 0:c.data)!==null&&i!==void 0?i:{},create_user:(r=c==null?void 0:c.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},channel:(a=c==null?void 0:c.channel)!==null&&a!==void 0?a:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:h==null?void 0:h.message_id},error:u})}throw new Fs("You must provide either an email or phone number.")}catch(l){if(await he(this.storage,this.storageKey,o),S(l))return this._returnResult({data:{user:null,session:null},error:l});throw l}}async verifyOtp(e){var s,n;try{let i,r;"options"in e&&(i=(s=e.options)===null||s===void 0?void 0:s.redirectTo,r=(n=e.options)===null||n===void 0?void 0:n.captchaToken);const{data:a,error:o}=await A(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:r}}),redirectTo:i,xform:oe});if(o)throw o;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,c=a.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(i){if(S(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signInWithSSO(e){var s,n,i,r;let a=null;try{let o=null,l=null;this.flowType==="pkce"&&([o,l,a]=await this._getCodeChallengeAndMethod());const c=await A(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:this._maybeAppendFlowIdToRedirect((s=e.options)===null||s===void 0?void 0:s.redirectTo,a)}),!((n=e==null?void 0:e.options)===null||n===void 0)&&n.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:o,code_challenge_method:l}),headers:this.headers,xform:Ac});return!((i=c.data)===null||i===void 0)&&i.url&&J()&&!(!((r=e.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(c.data.url),this._returnResult(c)}catch(o){if(await he(this.storage,this.storageKey,a),S(o))return this._returnResult({data:null,error:o});throw o}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:s},error:n}=e;if(n)throw n;if(!s)throw new W;const{error:i}=await A(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:s.access_token});return this._returnResult({data:{user:null,session:null},error:i})})}catch(e){if(S(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){let s=null;try{const n=`${this.url}/resend`;if("email"in e){const{email:i,type:r,options:a}=e;let o=null,l=null;this.flowType==="pkce"&&([o,l,s]=await this._getCodeChallengeAndMethod());const{error:c}=await A(this.fetch,"POST",n,{headers:this.headers,body:{email:i,type:r,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken},code_challenge:o,code_challenge_method:l},redirectTo:this._maybeAppendFlowIdToRedirect(a==null?void 0:a.emailRedirectTo,s)});return c&&await he(this.storage,this.storageKey,s),this._returnResult({data:{user:null,session:null},error:c})}else if("phone"in e){const{phone:i,type:r,options:a}=e,{data:o,error:l}=await A(this.fetch,"POST",n,{headers:this.headers,body:{phone:i,type:r,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:o==null?void 0:o.message_id},error:l})}throw new Fs("You must provide either an email or phone number and a type")}catch(n){if(await he(this.storage,this.storageKey,s),S(n))return this._returnResult({data:{user:null,session:null},error:n});throw n}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,s){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),i=(async()=>(await n,await s()))();return this.pendingInLock.push((async()=>{try{await i}catch{}})()),i}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=s();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const i=[...this.pendingInLock];await Promise.all(i),this.pendingInLock.splice(0,i.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const s=await this.__loadSession();return await e(s)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const s=await X(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",s),s!==null&&(this._isValidSession(s)?e=s:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const n=e.expires_at?e.expires_at*1e3-Date.now()<Tn:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",e.expires_at),!n){if(this.userStorage){const a=await X(this.userStorage,this.storageKey+"-user");a!=null&&a.user?e.user=a.user:e.user=On()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const a={value:this.suppressGetSessionWarning};e.user=kc(e.user,a),a.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:i,error:r}=await this._callRefreshToken(e.refresh_token);if(r){if(!!(e.expires_at&&e.expires_at*1e3>Date.now())){const o=await X(this.storage,this.storageKey);if(o&&o.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:r})}return this._returnResult({data:{session:i},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let s;return this.lock!=null?s=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):s=await this._getUser(),s.data.user&&(this.suppressGetSessionWarning=!0),s}async _getUser(e){try{return e?await A(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Ge}):await this._useSession(async s=>{var n,i,r;const{data:a,error:o}=s;if(o)throw o;return!(!((n=a.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new W}:await A(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(r=(i=a.session)===null||i===void 0?void 0:i.access_token)!==null&&r!==void 0?r:void 0,xform:Ge})})}catch(s){if(S(s))return Ds(s)&&await this._removeSession(),this._returnResult({data:{user:null},error:s});throw s}}async updateUser(e,s={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,s)):await this._updateUser(e,s)}async _updateUser(e,s={}){let n=null;try{return await this._useSession(async i=>{const{data:r,error:a}=i;if(a)throw a;if(!r.session)throw new W;const o=r.session;let l=null,c=null;this.flowType==="pkce"&&e.email!=null&&([l,c,n]=await this._getCodeChallengeAndMethod());const{data:h,error:u}=await A(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(s==null?void 0:s.emailRedirectTo,n),body:Object.assign(Object.assign({},e),{code_challenge:l,code_challenge_method:c}),jwt:o.access_token,xform:Ge});if(u)throw u;return o.user=h.user,await this._saveSession(o),await this._notifyAllSubscribers("USER_UPDATED",o),this._returnResult({data:{user:o.user},error:null})})}catch(i){if(await he(this.storage,this.storageKey,n),S(i))return this._returnResult({data:{user:null},error:i});throw i}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new W;const s=Date.now()/1e3;let n=s,i=!0,r=null;const{payload:a}=Ns(e.access_token);if(a.exp&&(n=a.exp,i=n<=s),i){const{data:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!o)return{data:{user:null,session:null},error:null};r=o}else{const{data:o,error:l}=await this._getUser(e.access_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});r={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:n-s,expires_at:n},await this._saveSession(r),await this._notifyAllSubscribers("SIGNED_IN",r)}return this._returnResult({data:{user:r.user,session:r},error:null})}catch(s){if(S(s))return this._returnResult({data:{session:null,user:null},error:s});throw s}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async s=>{var n;if(!e){const{data:a,error:o}=s;if(o)throw o;e=(n=a.session)!==null&&n!==void 0?n:void 0}if(!(e!=null&&e.refresh_token))throw new W;const{data:i,error:r}=await this._callRefreshToken(e.refresh_token);return r?this._returnResult({data:{user:null,session:null},error:r}):i?this._returnResult({data:{user:i.user,session:i},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(s){if(S(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async _getSessionFromURL(e,s){var n;try{if(!J())throw new js("No browser detected.");if(e.error||e.error_description||e.error_code)throw new js(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(s){case"implicit":if(this.flowType==="pkce")throw new sr("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new js("Not a valid implicit grant flow url.");break;default:}if(s==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new sr("No code detected.");const{data:p,error:_}=await this._exchangeCodeForSession(e.code,{flowId:e[dt]});if(_)throw _;const R=new URL(window.location.href);return R.searchParams.delete("code"),R.searchParams.delete(dt),window.history.replaceState(window.history.state,"",R.toString()),{data:{session:p.session,redirectType:(n=p.redirectType)!==null&&n!==void 0?n:null},error:null}}const{provider_token:i,provider_refresh_token:r,access_token:a,refresh_token:o,expires_in:l,expires_at:c,token_type:h}=e;if(!a||!l||!o||!h)throw new js("No session defined in URL");const u=Math.round(Date.now()/1e3),g=parseInt(l);let f=u+g;c&&(f=parseInt(c));const v=f-u;v*1e3<=De&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${v}s, should have been closer to ${g}s`);const m=f-g;u-m>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",m,f,u):u-m<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",m,f,u);const{data:b,error:w}=await this._getUser(a);if(w)throw w;const x={provider_token:i,provider_refresh_token:r,access_token:a,expires_in:g,expires_at:f,refresh_token:o,token_type:h,user:b.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:x,redirectType:e.type},error:null})}catch(i){if(S(i))return this._returnResult({data:{session:null,redirectType:null},error:i});throw i}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){if(!e.code)return!1;const s=zs(e[dt]);return s&&await X(this.storage,Bt(this.storageKey,s))?!0:!!await X(this.storage,`${this.storageKey}-code-verifier`)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async s=>{var n;const i=async()=>{await this._removeSession()},{data:r,error:a}=s;if(a&&!Ds(a))return this._returnResult({error:a});const o=(n=r.session)===null||n===void 0?void 0:n.access_token;if(o){const{error:l}=await this.admin.signOut(o,e);if(l&&!(tr(l)&&(l.status===404||l.status===401||l.status===403)||Ds(l)))return e!=="others"&&await i(),this._returnResult({error:l})}return e!=="others"&&await i(),this._returnResult({error:null})})}onAuthStateChange(e){const s=ic(),n={id:s,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",s),this.stateChangeEmitters.delete(s)}};return this._debug("#onAuthStateChange()","registered callback with id",s),this.stateChangeEmitters.set(s,n),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(s)}):await this._emitInitialSession(s)))(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async s=>{var n,i;try{const{data:{session:r},error:a}=s;if(a)throw a;await((n=this.stateChangeEmitters.get(e))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",r)),this._debug("INITIAL_SESSION","callback id",e,"session",r)}catch(r){await((i=this.stateChangeEmitters.get(e))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",r),Ds(r)||Ms(r)||tr(r)&&(r.code==="refresh_token_not_found"||r.code==="refresh_token_already_used"||r.code==="session_expired")?console.warn(r):console.error(r)}})}async resetPasswordForEmail(e,s={}){let n=null,i=null,r=null;this.flowType==="pkce"&&([n,i,r]=await this._getCodeChallengeAndMethod(!0));try{return await A(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:i,gotrue_meta_security:{captcha_token:s.captchaToken}},headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(s.redirectTo,r)})}catch(a){if(await he(this.storage,this.storageKey,r),S(a))return this._returnResult({data:null,error:a});throw a}}async getUserIdentities(){var e;try{const{data:s,error:n}=await this.getUser();if(n)throw n;return this._returnResult({data:{identities:(e=s.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var s;let n=null;try{const{data:i,error:r}=await this._useSession(async a=>{var o,l,c,h,u;const{data:g,error:f}=a;if(f)throw f;const{url:v,flowId:m}=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(o=e.options)===null||o===void 0?void 0:o.redirectTo,scopes:(l=e.options)===null||l===void 0?void 0:l.scopes,queryParams:(c=e.options)===null||c===void 0?void 0:c.queryParams,skipBrowserRedirect:!0});return n=m,await A(this.fetch,"GET",v,{headers:this.headers,jwt:(u=(h=g.session)===null||h===void 0?void 0:h.access_token)!==null&&u!==void 0?u:void 0})});if(r)throw r;return J()&&!(!((s=e.options)===null||s===void 0)&&s.skipBrowserRedirect)&&window.location.assign(i==null?void 0:i.url),this._returnResult({data:{provider:e.provider,url:i==null?void 0:i.url,flowId:n},error:null})}catch(i){if(S(i))return this._returnResult({data:{provider:e.provider,url:null,flowId:n},error:i});throw i}}async linkIdentityIdToken(e){return await this._useSession(async s=>{var n;try{const{error:i,data:{session:r}}=s;if(i)throw i;const{options:a,provider:o,token:l,access_token:c,nonce:h}=e,u=await A(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(n=r==null?void 0:r.access_token)!==null&&n!==void 0?n:void 0,body:{provider:o,id_token:l,access_token:c,nonce:h,link_identity:!0,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:oe}),{data:g,error:f}=u;return f?this._returnResult({data:{user:null,session:null},error:f}):!g||!g.session||!g.user?this._returnResult({data:{user:null,session:null},error:new Ot}):(g.session&&(await this._saveSession(g.session),await this._notifyAllSubscribers("USER_UPDATED",g.session)),this._returnResult({data:g,error:f}))}catch(i){if(await he(this.storage,this.storageKey,null),S(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}})}async unlinkIdentity(e){try{return await this._useSession(async s=>{var n,i;const{data:r,error:a}=s;if(a)throw a;return await A(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(i=(n=r.session)===null||n===void 0?void 0:n.access_token)!==null&&i!==void 0?i:void 0})})}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}async _refreshAccessToken(e){const s="#_refreshAccessToken()";this._debug(s,"begin");try{const n=Date.now();return await oc(async i=>(i>0&&await ac(200*Math.pow(2,i-1)),this._debug(s,"refreshing attempt",i),await A(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:oe})),(i,r)=>{const a=200*Math.pow(2,i);return r&&Ms(r)&&Date.now()+a-n<De})}catch(n){if(this._debug(s,"error",n),S(n))return this._returnResult({data:{session:null,user:null},error:n});throw n}finally{this._debug(s,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,s){const{url:n,flowId:i}=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:s.redirectTo,scopes:s.scopes,queryParams:s.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",s,"url",n),J()&&!s.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n,flowId:i},error:null}}async _recoverAndRefresh(){var e,s;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const i=await X(this.storage,this.storageKey);if(i&&this.userStorage){let a=await X(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!a&&(a={user:i.user},await Fe(this.userStorage,this.storageKey+"-user",a)),i.user=(e=a==null?void 0:a.user)!==null&&e!==void 0?e:On()}else if(i&&!i.user&&!i.user){const a=await X(this.storage,this.storageKey+"-user");a&&(a!=null&&a.user)?(i.user=a.user,await se(this.storage,this.storageKey+"-user"),await Fe(this.storage,this.storageKey,i)):i.user=On()}if(this._debug(n,"session from storage",i),!this._isValidSession(i)){this._debug(n,"session is not valid"),i!==null&&await this._removeSession();return}const r=((s=i.expires_at)!==null&&s!==void 0?s:1/0)*1e3-Date.now()<Tn;if(this._debug(n,`session has${r?"":" not"} expired with margin of ${Tn}s`),r){if(this.autoRefreshToken&&i.refresh_token){const{error:a}=await this._callRefreshToken(i.refresh_token);a&&(Xl(a)?this._debug(n,"refresh discarded by commit guard",a):this._debug(n,"refresh failed",a))}}else if(i.user&&i.user.__isUserNotAvailableProxy===!0)try{const{data:a,error:o}=await this._getUser(i.access_token);!o&&(a!=null&&a.user)?(i.user=a.user,await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(a){console.error("Error getting user data:",a),this._debug(n,"error getting user data, skipping SIGNED_IN notification",a)}else await this._notifyAllSubscribers("SIGNED_IN",i)}catch(i){this._debug(n,"error",i),Ms(i)?console.warn(i):console.error(i);return}finally{this._debug(n,"end")}}async _callRefreshToken(e){var s,n;if(!e)throw new W;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const i="#_callRefreshToken()";this._debug(i,"begin");try{this.refreshingDeferred=new nn;const r=await X(this.storage,this.storageKey),{data:a,error:o}=await this._refreshAccessToken(e);if(o)throw o;if(!a.session)throw new W;const l=await X(this.storage,this.storageKey);if(r!==null&&(l===null||l.refresh_token!==r.refresh_token)){this._debug(i,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:l?"replaced":"cleared"});const g={data:null,error:new nr};return this.refreshingDeferred.resolve(g),g}const h=this._sessionRemovalEpoch;if(await this._saveSession(a.session),this._sessionRemovalEpoch!==h){this._debug(i,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await se(this.storage,this.storageKey),this.userStorage&&await se(this.userStorage,this.storageKey+"-user");const g={data:null,error:new nr};return this.refreshingDeferred.resolve(g),g}await this._notifyAllSubscribers("TOKEN_REFRESHED",a.session);const u={data:a.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(u),u}catch(r){if(this._debug(i,"error",r),S(r)){const a={data:null,error:r};if(!Ms(r)){const o=await X(this.storage,this.storageKey);!!(o!=null&&o.expires_at&&o.expires_at*1e3>Date.now())?this._debug(i,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:a,expiresAt:Date.now()+Bl},(s=this.refreshingDeferred)===null||s===void 0||s.resolve(a),a}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(r),r}finally{this.refreshingDeferred=null,this._debug(i,"end")}}async _notifyAllSubscribers(e,s,n=!0){if(this._pendingInitNotifications!==null&&n){this._pendingInitNotifications.push({event:e,session:s,broadcast:n});return}const i=`#_notifyAllSubscribers(${e})`;this._debug(i,"begin",s,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:s});const r=[],a=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,s)}catch(l){r.push(l)}});if(await Promise.all(a),r.length>0){for(let o=0;o<r.length;o+=1)console.error(r[o]);throw r[0]}}finally{this._debug(i,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0;const s=Object.assign({},e),n=s.user&&s.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&s.user&&await Fe(this.userStorage,this.storageKey+"-user",{user:s.user});const i=Object.assign({},s);delete i.user;const r=cr(i);await Fe(this.storage,this.storageKey,r)}else{const i=cr(s);await Fe(this.storage,this.storageKey,i)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await se(this.storage,this.storageKey),await gc(this.storage,this.storageKey),await se(this.storage,this.storageKey+"-user"),this.userStorage&&await se(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&J()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(s){console.error("removing visibilitychange callback failed",s)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),De);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const s=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=s,s&&typeof s=="object"&&typeof s.unref=="function"?s.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(s)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const s=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,s&&clearTimeout(s)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async s=>{const{data:{session:n}}=s;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const i=Math.floor((n.expires_at*1e3-e)/De);this._debug("#_autoRefreshTokenTick()",`access token expires in ${i} ticks, a tick lasts ${De}ms, refresh threshold is ${Qt} ticks`),i<=Qt&&await this._callRefreshToken(n.refresh_token)})}catch(s){console.error("Auto refresh tick failed with error. This is likely a transient error.",s)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof Cc)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const e=Date.now();try{await this._useSession(async s=>{const{data:{session:n}}=s;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const i=Math.floor((n.expires_at*1e3-e)/De);this._debug("#_autoRefreshTokenTick()",`access token expires in ${i} ticks, a tick lasts ${De}ms, refresh threshold is ${Qt} ticks`),i<=Qt&&await this._callRefreshToken(n.refresh_token)})}catch(s){console.error("Auto refresh tick failed with error. This is likely a transient error.",s)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!J()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const s=`#_onVisibilityChanged(${e})`;if(this._debug(s,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(s,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(s,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,s,n){let i=n==null?void 0:n.redirectTo,r=null,a=null,o=null;this.flowType==="pkce"&&([r,a,o]=await this._getCodeChallengeAndMethod(),i=this._maybeAppendFlowIdToRedirect(i,o));const l=[`provider=${encodeURIComponent(s)}`];if(i&&l.push(`redirect_to=${encodeURIComponent(i)}`),n!=null&&n.scopes&&l.push(`scopes=${encodeURIComponent(n.scopes)}`),r!=null&&a!=null){const c=new URLSearchParams({code_challenge:`${encodeURIComponent(r)}`,code_challenge_method:`${encodeURIComponent(a)}`});l.push(c.toString())}if(n!=null&&n.queryParams){const c=new URLSearchParams(n.queryParams);l.push(c.toString())}return n!=null&&n.skipBrowserRedirect&&l.push(`skip_http_redirect=${n.skipBrowserRedirect}`),{url:`${e}?${l.join("&")}`,flowId:o}}_maybeAppendFlowIdToRedirect(e,s){return!e||!s||!this.experimental.appendPkceFlowIdToRedirects?e??void 0:mc(e,s)}async _getCodeChallengeAndMethod(e=!1){return bc(this.storage,this.storageKey,e,s=>this._debug("#_getCodeChallengeAndMethod()","evicted oldest pending PKCE verifier slot",s))}async _unenroll(e){try{return await this._useSession(async s=>{var n;const{data:i,error:r}=s;return r?this._returnResult({data:null,error:r}):await A(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token})})}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}async _enroll(e){try{return await this._useSession(async s=>{var n,i;const{data:r,error:a}=s;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:l,error:c}=await A(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(n=r==null?void 0:r.session)===null||n===void 0?void 0:n.access_token});return c?this._returnResult({data:null,error:c}):(e.factorType==="totp"&&l.type==="totp"&&(!((i=l==null?void 0:l.totp)===null||i===void 0)&&i.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),this._returnResult({data:l,error:null}))})}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}async _verify(e){const s=async()=>{try{return await this._useSession(async n=>{var i;const{data:r,error:a}=n;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?br(e.webauthn.credential_response):yr(e.webauthn.credential_response)})}:{code:e.code}),{data:l,error:c}=await A(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:o,headers:this.headers,jwt:(i=r==null?void 0:r.session)===null||i===void 0?void 0:i.access_token});return c?this._returnResult({data:null,error:c}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+l.expires_in},l)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",l),this._returnResult({data:l,error:c}))})}catch(n){if(S(n))return this._returnResult({data:null,error:n});throw n}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,s):s()}async _challenge(e){const s=async()=>{try{return await this._useSession(async n=>{var i;const{data:r,error:a}=n;if(a)return this._returnResult({data:null,error:a});const o=await A(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(i=r==null?void 0:r.session)===null||i===void 0?void 0:i.access_token});if(o.error)return o;const{data:l}=o;if(l.type!=="webauthn")return{data:l,error:null};switch(l.webauthn.type){case"create":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:gr(l.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:mr(l.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(n){if(S(n))return this._returnResult({data:null,error:n});throw n}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,s):s()}async _challengeAndVerify(e){const{data:s,error:n}=await this._challenge({factorId:e.factorId});return n?this._returnResult({data:null,error:n}):await this._verify({factorId:e.factorId,challengeId:s.id,code:e.code})}async _listFactors(){var e;const{data:{user:s},error:n}=await this.getUser();if(n)return{data:null,error:n};const i={all:[],phone:[],totp:[],webauthn:[]};for(const r of(e=s==null?void 0:s.factors)!==null&&e!==void 0?e:[])i.all.push(r),r.status==="verified"&&i[r.factor_type].push(r);return{data:i,error:null}}async _getAuthenticatorAssuranceLevel(e){var s,n,i,r;if(e)try{const{payload:f}=Ns(e);let v=null;f.aal&&(v=f.aal);let m=v;const{data:{user:b},error:w}=await this.getUser(e);if(w)return this._returnResult({data:null,error:w});((n=(s=b==null?void 0:b.factors)===null||s===void 0?void 0:s.filter(_=>_.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(m="aal2");const p=f.amr||[];return{data:{currentLevel:v,nextLevel:m,currentAuthenticationMethods:p},error:null}}catch(f){if(S(f))return this._returnResult({data:null,error:f});throw f}const{data:{session:a},error:o}=await this.getSession();if(o)return this._returnResult({data:null,error:o});if(!a)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:l}=Ns(a.access_token);let c=null;l.aal&&(c=l.aal);let h=c;((r=(i=a.user.factors)===null||i===void 0?void 0:i.filter(f=>f.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(h="aal2");const g=l.amr||[];return{data:{currentLevel:c,nextLevel:h,currentAuthenticationMethods:g},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async s=>{const{data:{session:n},error:i}=s;return i?this._returnResult({data:null,error:i}):n?await A(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:n.access_token,xform:r=>({data:r,error:null})}):this._returnResult({data:null,error:new W})})}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}async _approveAuthorization(e,s){try{return await this._useSession(async n=>{const{data:{session:i},error:r}=n;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new W});const a=await A(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:i.access_token,body:{action:"approve"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&J()&&!(s!=null&&s.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(n){if(S(n))return this._returnResult({data:null,error:n});throw n}}async _denyAuthorization(e,s){try{return await this._useSession(async n=>{const{data:{session:i},error:r}=n;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new W});const a=await A(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:i.access_token,body:{action:"deny"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&J()&&!(s!=null&&s.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(n){if(S(n))return this._returnResult({data:null,error:n});throw n}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:s},error:n}=e;return n?this._returnResult({data:null,error:n}):s?await A(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:s.access_token,xform:i=>({data:i,error:null})}):this._returnResult({data:null,error:new W})})}catch(e){if(S(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async s=>{const{data:{session:n},error:i}=s;return i?this._returnResult({data:null,error:i}):n?(await A(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:n.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new W})})}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}async fetchJwk(e,s={keys:[]}){let n=s.keys.find(o=>o.kid===e);if(n)return n;const i=Date.now();if(n=this.jwks.keys.find(o=>o.kid===e),n&&this.jwks_cached_at+Vl>i)return n;const{data:r,error:a}=await A(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!r.keys||r.keys.length===0||(this.jwks=r,this.jwks_cached_at=i,n=r.keys.find(o=>o.kid===e),!n)?null:n}async getClaims(e,s={}){try{let n=e;if(!n){const{data:f,error:v}=await this.getSession();if(v||!f.session)return this._returnResult({data:null,error:v});n=f.session.access_token}const{header:i,payload:r,signature:a,raw:{header:o,payload:l}}=Ns(n);if(!(s!=null&&s.allowExpired))try{wc(r.exp)}catch(f){throw new Vs(f instanceof Error?f.message:"JWT validation failed")}const c=!i.alg||i.alg.startsWith("HS")||!i.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(i.kid,s!=null&&s.keys?{keys:s.keys}:s==null?void 0:s.jwks);if(!c){const{error:f}=await this.getUser(n);if(f)throw f;return{data:{claims:r,header:i,signature:a},error:null}}const h=xc(i.alg),u=await crypto.subtle.importKey("jwk",c,h,!0,["verify"]);if(!await crypto.subtle.verify(h,u,a,sc(`${o}.${l}`)))throw new Vs("Invalid JWT signature");return{data:{claims:r,header:i,signature:a},error:null}}catch(n){if(S(n))return this._returnResult({data:null,error:n});throw n}}async signInWithPasskey(e){var s,n,i;ge(this.experimental);try{if(!Ys())return this._returnResult({data:null,error:new be("Browser does not support WebAuthn",null)});const{data:r,error:a}=await this._startPasskeyAuthentication({options:{captchaToken:(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.captchaToken}});if(a||!r)return this._returnResult({data:null,error:a});const o=mr(r.options),l=(i=(n=e==null?void 0:e.options)===null||n===void 0?void 0:n.signal)!==null&&i!==void 0?i:qn.createNewAbortSignal(),{data:c,error:h}=await ta({publicKey:o,signal:l});if(h||!c)return this._returnResult({data:null,error:h??new be("WebAuthn ceremony failed",null)});const u=yr(c);return this._verifyPasskeyAuthentication({challengeId:r.challenge_id,credential:u})}catch(r){if(S(r))return this._returnResult({data:null,error:r});throw r}}async registerPasskey(e){var s,n;ge(this.experimental);try{if(!Ys())return this._returnResult({data:null,error:new be("Browser does not support WebAuthn",null)});const{data:i,error:r}=await this._startPasskeyRegistration();if(r||!i)return this._returnResult({data:null,error:r});const a=gr(i.options),o=(n=(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.signal)!==null&&n!==void 0?n:qn.createNewAbortSignal(),{data:l,error:c}=await ea({publicKey:a,signal:o});if(c||!l)return this._returnResult({data:null,error:c??new be("WebAuthn ceremony failed",null)});const h=br(l);return this._verifyPasskeyRegistration({challengeId:i.challenge_id,credential:h})}catch(i){if(S(i))return this._returnResult({data:null,error:i});throw i}}async _startPasskeyRegistration(){ge(this.experimental);try{return await this._useSession(async e=>{const{data:{session:s},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!s)return this._returnResult({data:null,error:new W});const{data:i,error:r}=await A(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:s.access_token,body:{}});return r?this._returnResult({data:null,error:r}):this._returnResult({data:i,error:null})})}catch(e){if(S(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){ge(this.experimental);try{return await this._useSession(async s=>{const{data:{session:n},error:i}=s;if(i)return this._returnResult({data:null,error:i});if(!n)return this._returnResult({data:null,error:new W});const{data:r,error:a}=await A(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:n.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:r,error:null})})}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}async _startPasskeyAuthentication(e){var s;ge(this.experimental);try{const{data:n,error:i}=await A(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.captchaToken}}});return i?this._returnResult({data:null,error:i}):this._returnResult({data:n,error:null})}catch(n){if(S(n))return this._returnResult({data:null,error:n});throw n}}async _verifyPasskeyAuthentication(e){ge(this.experimental);try{const{data:s,error:n}=await A(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:oe});return n?this._returnResult({data:null,error:n}):(s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),this._returnResult({data:s,error:null}))}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}async _listPasskeys(){ge(this.experimental);try{return await this._useSession(async e=>{const{data:{session:s},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!s)return this._returnResult({data:null,error:new W});const{data:i,error:r}=await A(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:s.access_token,xform:a=>({data:a,error:null})});return r?this._returnResult({data:null,error:r}):this._returnResult({data:i,error:null})})}catch(e){if(S(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){ge(this.experimental);try{return await this._useSession(async s=>{const{data:{session:n},error:i}=s;if(i)return this._returnResult({data:null,error:i});if(!n)return this._returnResult({data:null,error:new W});const{data:r,error:a}=await A(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:r,error:null})})}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}async _deletePasskey(e){ge(this.experimental);try{return await this._useSession(async s=>{const{data:{session:n},error:i}=s;if(i)return this._returnResult({data:null,error:i});if(!n)return this._returnResult({data:null,error:new W});const{error:r}=await A(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,noResolveJson:!0});return r?this._returnResult({data:null,error:r}):this._returnResult({data:null,error:null})})}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}}ps.nextInstanceID={};const qc=ps,Wc="2.112.3";let Zt="",Qs;if(typeof Deno<"u"){var Rn;Zt="deno",Qs=(Rn=Deno.version)===null||Rn===void 0?void 0:Rn.deno}else if(typeof document<"u")Zt="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")Zt="react-native";else{var In;Zt="node";const t=globalThis.process;Qs=t==null||(In=t.version)===null||In===void 0?void 0:In.replace(/^v/,"")}const sa=[`runtime=${Zt}`];Qs&&sa.push(`runtime-version=${Qs}`);const Kc={"X-Client-Info":`supabase-js/${Wc}; ${sa.join("; ")}`},Vc={headers:Kc},Gc={schema:"public"},Jc={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},Yc={},Xc={enabled:!1,respectSamplingDecision:!0};function Qc(t){if(!t||typeof t!="string")return null;const e=t.split("-");if(e.length!==4)return null;const[s,n,i,r]=e;if(s.length!==2||n.length!==32||i.length!==16||r.length!==2)return null;const a=/^[0-9a-f]+$/i;return!a.test(s)||!a.test(n)||!a.test(i)||!a.test(r)||n==="00000000000000000000000000000000"||i==="0000000000000000"?null:{version:s,traceId:n,parentId:i,traceFlags:r,isSampled:(parseInt(r,16)&1)===1}}function Zc(t,e){if(!t||!e||e.length===0)return!1;let s;if(t instanceof URL)s=t;else try{s=new URL(t)}catch{return!1}for(const n of e)try{if(typeof n=="string"){if(ed(s.hostname,n))return!0}else if(n instanceof RegExp){if(n.test(s.hostname))return!0}else if(typeof n=="function"&&n(s))return!0}catch{continue}return!1}function ed(t,e){if(e===t)return!0;if(e.startsWith("*.")){const s=e.slice(2);if(t.endsWith(s)&&(t===s||t.endsWith("."+s)))return!0}return!1}function td(t){const e=[];try{const s=new URL(t);e.push(s.hostname)}catch{}return e.push("*.supabase.co","*.supabase.in"),e.push("localhost","127.0.0.1","[::1]"),e}function fs(t){"@babel/helpers - typeof";return fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fs(t)}function sd(t,e){if(fs(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var n=s.call(t,e);if(fs(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function nd(t){var e=sd(t,"string");return fs(e)=="symbol"?e:e+""}function id(t,e,s){return(e=nd(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function vr(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),s.push.apply(s,n)}return s}function U(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?vr(Object(s),!0).forEach(function(n){id(t,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):vr(Object(s)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(s,n))})}return t}const rd=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),ad=()=>Headers,na=t=>t.startsWith("sb_publishable_")||t.startsWith("sb_secret_"),od="sb_temp_",wr=new Set,ld=t=>{var e,s;if(!t.startsWith("sb_")||na(t)||t.startsWith(od))return;const n=(e=(s=t.match(/^sb_[a-zA-Z0-9]+_/))===null||s===void 0?void 0:s[0])!==null&&e!==void 0?e:"unknown";wr.has(n)||(wr.add(n),console.warn("@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type."))},xr=(t,e,s,n,i,r)=>{const a=rd(n),o=ad(),l=(i==null?void 0:i.enabled)===!0,c=(i==null?void 0:i.respectSamplingDecision)!==!1,h=l?td(e):null,u=!(r!=null&&r.omitApiKeyAsBearer&&na(t));return async(g,f)=>{const v=await s();let m=new o(f==null?void 0:f.headers);if(m.has("apikey")||m.set("apikey",t),!m.has("Authorization")){const b=v??(u?t:null);b&&m.set("Authorization",`Bearer ${b}`)}if(h){const b=cd(g,h,c);b&&(b.traceparent&&!m.has("traceparent")&&m.set("traceparent",b.traceparent),b.tracestate&&!m.has("tracestate")&&m.set("tracestate",b.tracestate),b.baggage&&!m.has("baggage")&&m.set("baggage",b.baggage))}return a(g,U(U({},f),{},{headers:m}))}};let _r=!1,kr=!1;function cd(t,e,s){const n=oo();if(!n)return _r||(_r=!0,console.warn("@supabase/supabase-js: tracePropagation is enabled but the tracing runtime is not loaded, so trace headers will not be attached. Add `import '@supabase/supabase-js/tracing'` at your application entry point (requires the OpenTelemetry API package to be installed). The CDN/UMD build does not support trace propagation.")),null;if(!Zc(typeof t=="string"||t instanceof URL?t:t.url,e))return null;const i=n();if(!i||!i.traceparent){var r;if(!(i==null||(r=i.carrierKeys)===null||r===void 0)&&r.length&&!kr){kr=!0;const a=i.carrierKeys.includes("sentry-trace")?" Sentry detected: set `propagateTraceparent: true` in Sentry.init() to emit it.":" Configure your tracing SDK to emit W3C trace context on outgoing requests.";console.warn(`@supabase/supabase-js: tracePropagation is enabled and a tracing SDK is active, but its propagator wrote [${i.carrierKeys.join(", ")}] and no W3C traceparent header, so trace headers will not be attached.`+a)}return null}if(s){const a=Qc(i.traceparent);if(a&&!a.isSampled)return{traceparent:i.traceparent}}return i}function Sr(t){return typeof t=="boolean"?{enabled:t}:t}function dd(t){return t.endsWith("/")?t:t+"/"}function ud(t,e){var s,n,i,r,a,o;const{db:l,auth:c,realtime:h,global:u}=t,{db:g,auth:f,realtime:v,global:m}=e,b=Sr(t.tracePropagation),w=Sr(e.tracePropagation),x={db:U(U({},g),l),auth:U(U({},f),c),realtime:U(U({},v),h),storage:{},global:U(U(U({},m),u),{},{headers:U(U({},(s=m==null?void 0:m.headers)!==null&&s!==void 0?s:{}),(n=u==null?void 0:u.headers)!==null&&n!==void 0?n:{})}),tracePropagation:{enabled:(i=(r=b==null?void 0:b.enabled)!==null&&r!==void 0?r:w==null?void 0:w.enabled)!==null&&i!==void 0?i:!1,respectSamplingDecision:(a=(o=b==null?void 0:b.respectSamplingDecision)!==null&&o!==void 0?o:w==null?void 0:w.respectSamplingDecision)!==null&&a!==void 0?a:!0},accessToken:async()=>""};return t.accessToken?x.accessToken=t.accessToken:delete x.accessToken,x}function hd(t){const e=t==null?void 0:t.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(dd(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var pd=class extends qc{constructor(t){super(t)}},fd=class{constructor(t,e,s){var n,i;this.supabaseUrl=t,this.supabaseKey=e;const r=hd(t);if(!e)throw new Error("supabaseKey is required.");ld(e),this.realtimeUrl=new URL("realtime/v1",r),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",r),this.storageUrl=new URL("storage/v1",r),this.functionsUrl=new URL("functions/v1",r);const a=`sb-${r.hostname.split(".")[0]}-auth-token`,o={db:Gc,realtime:Yc,auth:U(U({},Jc),{},{storageKey:a}),global:Vc,tracePropagation:Xc},l=ud(s??{},o);if(this.settings=l,this.storageKey=(n=l.auth.storageKey)!==null&&n!==void 0?n:"",this.headers=(i=l.global.headers)!==null&&i!==void 0?i:{},l.accessToken)this.accessToken=l.accessToken,this.auth=new Proxy({},{get:(h,u)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(u)} is not possible`)}});else{var c;this.auth=this._initSupabaseAuthClient((c=l.auth)!==null&&c!==void 0?c:{},this.headers,l.global.fetch)}this.fetch=xr(e,t,this._getSessionToken.bind(this),l.global.fetch,l.tracePropagation),this.functionsFetch=xr(e,t,this._getSessionToken.bind(this),l.global.fetch,l.tracePropagation,{omitApiKeyAsBearer:!0}),this.realtime=this._initRealtimeClient(U({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},l.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(h=>this.realtime.setAuth(h)).catch(h=>console.warn("Failed to set initial Realtime auth token:",h)),this.rest=new xo(new URL("rest/v1",r).href,{headers:this.headers,schema:l.db.schema,fetch:this.fetch,timeout:l.db.timeout,urlLengthLimit:l.db.urlLengthLimit,retry:l.db.retry}),this.storage=new Ul(this.storageUrl.href,this.headers,this.fetch,s==null?void 0:s.storage),l.accessToken||this._listenForAuthEvents()}get functions(){return new ho(this.functionsUrl.href,{headers:this.headers,customFetch:this.functionsFetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,e={},s={head:!1,get:!1,count:void 0}){return this.rest.rpc(t,e,s)}channel(t,e={config:{}}){return this.realtime.channel(t,e)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getSessionToken(){var t=this,e,s;if(t.accessToken)return await t.accessToken();const{data:n}=await t.auth.getSession();return(e=(s=n.session)===null||s===void 0?void 0:s.access_token)!==null&&e!==void 0?e:null}async _getAccessToken(){var t=this,e;return(e=await t._getSessionToken())!==null&&e!==void 0?e:t.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:e,detectSessionInUrl:s,storage:n,userStorage:i,storageKey:r,flowType:a,lock:o,debug:l,throwOnError:c,experimental:h,lockAcquireTimeout:u,skipAutoInitialize:g},f,v){const m={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new pd({url:this.authUrl.href,headers:U(U({},m),f),storageKey:r,autoRefreshToken:t,persistSession:e,detectSessionInUrl:s,storage:n,userStorage:i,flowType:a,lock:o,debug:l,throwOnError:c,experimental:h,fetch:v,lockAcquireTimeout:u,skipAutoInitialize:g,hasCustomAuthorizationHeader:Object.keys(this.headers).some(b=>b.toLowerCase()==="authorization")})}_initRealtimeClient(t){return new dl(this.realtimeUrl.href,U(U({},t),{},{params:U(U({},{apikey:this.supabaseKey}),t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,e)=>{this._handleTokenChanged(t,"CLIENT",e==null?void 0:e.access_token)})}_handleTokenChanged(t,e,s){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN"||t==="INITIAL_SESSION")&&this.changedAccessToken!==s?(this.changedAccessToken=s,this.realtime.setAuth(s)):t==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const gd=(t,e,s)=>new fd(t,e,s);function md(){if(typeof window<"u"||globalThis.Deno!==void 0)return!1;const t=globalThis.process;if(!t)return!1;const e=t.version;if(e==null)return!1;const s=e.match(/^v(\d+)\./);return s?parseInt(s[1],10)<=20:!1}md()&&console.warn("⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715");function bd(){try{return"https://pmipcwurbabnqylquwoc.supabase.co"}catch{return}}function yd(){try{return"sb_publishable_Lqb3d2VqAphbfGt3UBnang_om5sQBVk"}catch{return}}class vd{constructor(e,s){this.client=null,this.currentUser=null,this.currentAccessToken=null,this.isLoading=!0,this.listeners=new Set;const n=e!==void 0?e:bd(),i=s!==void 0?s:yd();if(n&&i)try{this.client=gd(n,i,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!0}}),this.client.auth.getSession().then(({data:r})=>{this.handleSession(r.session),this.isLoading=!1,this.notify()}),this.client.auth.onAuthStateChange((r,a)=>{this.handleSession(a),this.isLoading=!1,this.notify()})}catch(r){console.error("Failed to initialize Supabase Auth client:",r),this.isLoading=!1}else this.isLoading=!1}handleSession(e){e&&e.user?(this.currentUser={id:e.user.id,email:e.user.email},this.currentAccessToken=e.access_token):(this.currentUser=null,this.currentAccessToken=null)}notify(){const e=this.getAuthState();this.listeners.forEach(s=>s(e))}subscribe(e){return this.listeners.add(e),e(this.getAuthState()),()=>{this.listeners.delete(e)}}isConfigured(){return this.client!==null}getAuthState(){return{user:this.currentUser,accessToken:this.currentAccessToken,isAuthenticated:!!this.currentUser&&!!this.currentAccessToken,isLoading:this.isLoading}}getUser(){return this.currentUser}async getAccessToken(){if(!this.client)return null;try{const{data:e}=await this.client.auth.getSession();if(e.session)return this.currentAccessToken=e.session.access_token,e.session.access_token}catch{}return this.currentAccessToken}async signUp(e,s){if(!this.client)return{success:!1,message:"Supabase credentials are not configured."};try{const{data:n,error:i}=await this.client.auth.signUp({email:e.trim(),password:s});return i?{success:!1,message:i.message}:{success:!0,user:n.user||void 0}}catch(n){return{success:!1,message:n instanceof Error?n.message:String(n)}}}async signInWithPassword(e,s){if(!this.client)return{success:!1,message:"Supabase credentials are not configured."};try{const{data:n,error:i}=await this.client.auth.signInWithPassword({email:e.trim(),password:s});return i?{success:!1,message:i.message}:(this.handleSession(n.session),this.notify(),{success:!0})}catch(n){return{success:!1,message:n instanceof Error?n.message:String(n)}}}async signInWithOtp(e){if(!this.client)return{success:!1,message:"Supabase credentials are not configured."};try{const{error:s}=await this.client.auth.signInWithOtp({email:e.trim()});return s?{success:!1,message:s.message}:{success:!0,message:"Check your email for the magic login link!"}}catch(s){return{success:!1,message:s instanceof Error?s.message:String(s)}}}async signInWithOAuth(e="google"){if(!this.client)return{success:!1,message:"Supabase credentials are not configured."};try{const{error:s}=await this.client.auth.signInWithOAuth({provider:e,options:{redirectTo:window.location.origin}});return s?{success:!1,message:s.message}:{success:!0}}catch(s){return{success:!1,message:s instanceof Error?s.message:String(s)}}}async resetPasswordForEmail(e){if(!this.client)return{success:!1,message:"Supabase credentials are not configured."};try{const{error:s}=await this.client.auth.resetPasswordForEmail(e.trim(),{redirectTo:window.location.origin});return s?{success:!1,message:s.message}:{success:!0,message:"Password reset link sent to your email."}}catch(s){return{success:!1,message:s instanceof Error?s.message:String(s)}}}async signOut(){if(!this.client)return this.currentUser=null,this.currentAccessToken=null,this.notify(),{success:!0};try{const{error:e}=await this.client.auth.signOut();return e?{success:!1,message:e.message}:(this.currentUser=null,this.currentAccessToken=null,this.notify(),{success:!0})}catch(e){return{success:!1,message:e instanceof Error?e.message:String(e)}}}}const Q=new vd,Pn={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_SUPABASE_ANON_KEY:"sb_publishable_Lqb3d2VqAphbfGt3UBnang_om5sQBVk",VITE_SUPABASE_URL:"https://pmipcwurbabnqylquwoc.supabase.co",VITE_SYNC_URL:"https://practice-tracker-sync.warmsynthsiloveyou.workers.dev"},it=[{id:"guitar",name:"Guitar",color:"#6B7F6E",tier:"primary",updatedAt:new Date(0).toISOString()},{id:"piano",name:"Piano",color:"#8A7B94",tier:"primary",updatedAt:new Date(0).toISOString()},{id:"acoustic",name:"Acoustic Guitar",color:"#9FAF95",tier:"secondary",updatedAt:new Date(0).toISOString()},{id:"bass",name:"Bass",color:"#7D6E7F",tier:"secondary",updatedAt:new Date(0).toISOString()},{id:"drumming",name:"Finger Drumming",color:"#A98F72",tier:"secondary",updatedAt:new Date(0).toISOString()}],wd={id:"_removed",name:"Archived Instrument",color:"#C3C1B7",tier:"secondary",archived:!0,updatedAt:new Date(0).toISOString()},pe={SESSIONS:"ptSessionsV2",INSTRUMENTS:"ptInstrumentsV1",ACTIVE:"ptActiveSessionV1",SETTINGS:"ptSettingsV1",TOMBSTONES:"ptTombstonesV1"};function xd(){try{return"https://practice-tracker-sync.warmsynthsiloveyou.workers.dev"}catch{return}}function _d(){try{return(Pn==null?void 0:Pn.VITE_SYNC_PASSCODE)||void 0}catch{return}}function Rt(){try{if(typeof window<"u"&&window.localStorage)return window.localStorage;if(typeof localStorage<"u")return localStorage}catch{}return null}class kd{constructor(){this.instruments=[],this.sessions=[],this.activeSession=null,this.settings={soundEnabled:!0,hapticsEnabled:!0},this.tombstones=[],this.syncStatus="local",this.syncErrorMessage=null,this.listeners=new Set,this.currentSyncPromise=null,this.loadFromStorage(),this.initAuth()}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}notify(){this.listeners.forEach(e=>e())}initAuth(){Q.subscribe(e=>{var s;if(!e.isLoading)if(e.isAuthenticated&&((s=e.user)!=null&&s.email)){const n=this.settings.userEmail;this.settings.userEmail=e.user.email,this.persistSettings(),n!==e.user.email&&this.syncWithCloud(!0).catch(i=>{console.warn("Initial cloud sync error after sign-in:",i)})}else!e.isAuthenticated&&this.settings.userEmail&&(this.instruments=[...it],this.sessions=[],this.activeSession=null,this.tombstones=[],this.settings.userEmail=void 0,this.settings.lastSyncedAt=void 0,this.syncStatus="local",this.syncErrorMessage=null,this.persistInstruments(),this.persistSessions(),this.persistActive(),this.persistTombstones(),this.persistSettings(),this.notify())})}getEffectiveWorkerUrl(){return this.settings.workerUrl||xd()}getEffectiveSyncPasscode(){return this.settings.syncPasscode||_d()}getSyncAuthHeaderSync(){const e=Q.getAuthState();return e.accessToken?`Bearer ${e.accessToken}`:this.getEffectiveSyncPasscode()}async getEffectiveAuthHeader(){const e=this.getSyncAuthHeaderSync();if(e)return e;const s=await Q.getAccessToken();if(s)return`Bearer ${s}`}isCloudSyncConfigured(){const e=!!this.getEffectiveWorkerUrl(),s=Q.getAuthState().isAuthenticated||!!this.getEffectiveSyncPasscode();return e&&s}getUserEmail(){var e;return((e=Q.getUser())==null?void 0:e.email)||this.settings.userEmail}isAuthenticated(){return Q.getAuthState().isAuthenticated}async signOut(){await Q.signOut()}loadFromStorage(){const e=Rt();if(!e){this.instruments=[...it],this.sessions=[],this.syncStatus="local";return}try{const s=e.getItem(pe.INSTRUMENTS);if(s){const o=JSON.parse(s);Array.isArray(o)&&o.length>0?this.instruments=o.map(l=>({...l,updatedAt:l.updatedAt||new Date(0).toISOString()})):this.instruments=[...it]}else this.instruments=[...it],this.persistInstruments();const n=e.getItem(pe.SESSIONS);if(n){const o=JSON.parse(n);Array.isArray(o)?this.sessions=o.map(l=>({...l,updatedAt:l.updatedAt||new Date(0).toISOString()})):this.sessions=[]}else this.sessions=[];const i=e.getItem(pe.ACTIVE);if(i){const o=JSON.parse(i);o&&o.instrumentId&&o.startedAt&&(this.activeSession=o)}const r=e.getItem(pe.TOMBSTONES);if(r){const o=JSON.parse(r);Array.isArray(o)&&(this.tombstones=o)}const a=e.getItem(pe.SETTINGS);a&&(this.settings={...this.settings,...JSON.parse(a)}),this.isCloudSyncConfigured()?this.syncStatus=typeof window<"u"&&typeof navigator<"u"&&navigator.onLine===!1?"offline":"synced":this.syncStatus="local"}catch(s){console.error("Error loading practice store from storage:",s),this.instruments=[...it],this.sessions=[],this.syncStatus="local"}}persistInstruments(){try{const e=Rt();e==null||e.setItem(pe.INSTRUMENTS,JSON.stringify(this.instruments))}catch(e){console.error("Error saving instruments:",e)}}persistSessions(){try{const e=Rt();e==null||e.setItem(pe.SESSIONS,JSON.stringify(this.sessions))}catch(e){console.error("Error saving sessions:",e)}}persistActive(){try{const e=Rt();if(!e)return;this.activeSession?e.setItem(pe.ACTIVE,JSON.stringify(this.activeSession)):e.removeItem(pe.ACTIVE)}catch(e){console.error("Error saving active session:",e)}}persistSettings(){try{const e=Rt();e==null||e.setItem(pe.SETTINGS,JSON.stringify(this.settings))}catch(e){console.error("Error saving settings:",e)}}persistTombstones(){try{const e=Rt();e==null||e.setItem(pe.TOMBSTONES,JSON.stringify(this.tombstones))}catch(e){console.error("Error saving tombstones:",e)}}getActiveInstruments(){return this.instruments.filter(e=>!e.archived)}getAllInstruments(){return[...this.instruments]}getInstrument(e){return this.instruments.find(s=>s.id===e)||wd}getSessions(){return[...this.sessions]}getActiveSession(){return this.activeSession}getSettings(){return{...this.settings}}getSyncStatus(){return this.syncStatus}getSyncErrorMessage(){return this.syncErrorMessage}getLastSyncedAt(){return this.settings.lastSyncedAt||null}startSession(e){this.activeSession||(this.activeSession={instrumentId:e,startedAt:Date.now()},this.persistActive(),io(this.settings.soundEnabled),En(20,this.settings.hapticsEnabled),this.notify())}endSession(e){if(!this.activeSession)return null;const s=Date.now(),n=Math.max(1,Math.round((s-this.activeSession.startedAt)/6e4)),i=new Date(s).toISOString(),r={id:"s-"+Math.random().toString(36).slice(2,9)+"-"+Date.now().toString(36),instrumentId:this.activeSession.instrumentId,start:new Date(this.activeSession.startedAt).toISOString(),end:i,duration:n,notes:e&&e.trim()?e.trim():void 0,updatedAt:i};return this.sessions=[r,...this.sessions],this.activeSession=null,this.persistSessions(),this.persistActive(),ot(this.settings.soundEnabled),En([30,50,30],this.settings.hapticsEnabled),this.notify(),this.triggerBackgroundSync(),r}discardSession(){this.activeSession&&(this.activeSession=null,this.persistActive(),ve(this.settings.soundEnabled),this.notify())}logManualSession(e,s,n,i){const r=new Date(s.getTime()+Math.max(1,n)*6e4),a=new Date().toISOString(),o={id:"m-"+Math.random().toString(36).slice(2,9)+"-"+Date.now().toString(36),instrumentId:e,start:s.toISOString(),end:r.toISOString(),duration:Math.max(1,Math.round(n)),notes:(i==null?void 0:i.trim())||void 0,updatedAt:a};return this.sessions=[o,...this.sessions],this.persistSessions(),ot(this.settings.soundEnabled),En(25,this.settings.hapticsEnabled),this.notify(),this.triggerBackgroundSync(),o}updateSession(e){const s=new Date().toISOString(),n={...e,updatedAt:s};this.sessions=this.sessions.map(i=>i.id===e.id?n:i),this.persistSessions(),ve(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}deleteSession(e){const s=new Date().toISOString();this.sessions=this.sessions.filter(n=>n.id!==e),this.tombstones=[...this.tombstones.filter(n=>n.id!==e),{id:e,type:"session",deletedAt:s}],this.persistSessions(),this.persistTombstones(),ve(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}addInstrument(e,s,n){const i=e.trim(),r=so(i)+"-"+Math.random().toString(36).slice(2,6),a=new Date().toISOString(),o={id:r,name:i,color:s,tier:n,updatedAt:a};return this.instruments=[...this.instruments,o],this.persistInstruments(),ve(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync(),o}updateInstrument(e){const s=new Date().toISOString(),n={...e,updatedAt:s};this.instruments=this.instruments.map(i=>i.id===e.id?n:i),this.persistInstruments(),ve(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}removeInstrument(e){if(this.getActiveInstruments().length<=1)return;this.activeSession&&this.activeSession.instrumentId===e&&(this.activeSession=null,this.persistActive());const n=new Date().toISOString();this.sessions.some(r=>r.instrumentId===e)?this.instruments=this.instruments.map(r=>r.id===e?{...r,archived:!0,updatedAt:n}:r):(this.instruments=this.instruments.filter(r=>r.id!==e),this.tombstones=[...this.tombstones.filter(r=>r.id!==e),{id:e,type:"instrument",deletedAt:n}],this.persistTombstones()),this.persistInstruments(),ve(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}retireInstrument(e){if(this.getActiveInstruments().length<=1)return;const n=new Date().toISOString();this.instruments=this.instruments.map(i=>i.id===e?{...i,archived:!0,updatedAt:n}:i),this.persistInstruments(),ve(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}restoreInstrument(e){const s=new Date().toISOString();this.instruments=this.instruments.map(n=>n.id===e?{...n,archived:!1,updatedAt:s}:n),this.persistInstruments(),ve(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}renameInstrument(e,s){const n=s.trim();if(!n)return;const i=new Date().toISOString();this.instruments=this.instruments.map(r=>r.id===e?{...r,name:n,updatedAt:i}:r),this.persistInstruments(),this.notify(),this.triggerBackgroundSync()}updateSessionDurationAndNote(e,s,n){const i=new Date().toISOString();this.sessions=this.sessions.map(r=>r.id===e?{...r,duration:Math.max(1,s),notes:n!==void 0?n.trim()?n.trim():void 0:r.notes,updatedAt:i}:r),this.persistSessions(),ve(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}async testConnection(e,s){const n=e!==void 0?e:this.getEffectiveWorkerUrl()||"";let i=s;return i===void 0&&(i=await this.getEffectiveAuthHeader()),Li.testConnection(n,i)}triggerBackgroundSync(){this.isCloudSyncConfigured()&&!this.currentSyncPromise&&this.syncWithCloud().catch(e=>{console.warn("Background sync error:",e)})}async syncWithCloud(e=!1){if(this.currentSyncPromise){if(!e)return this.currentSyncPromise;await this.currentSyncPromise.catch(()=>{})}const s=this.getEffectiveWorkerUrl();if(!s)return this.syncStatus="local",this.notify(),{success:!0,message:"Local only mode (no worker configured)"};if(typeof window<"u"&&typeof navigator<"u"&&navigator.onLine===!1)return this.syncStatus="offline",this.notify(),{success:!1,message:"Device is offline"};this.currentSyncPromise=this.performSync(s,e);try{return await this.currentSyncPromise}finally{this.currentSyncPromise=null}}async performSync(e,s){this.syncStatus="syncing",this.syncErrorMessage=null,this.notify();try{const n=this.getSyncAuthHeaderSync(),i=s?null:this.settings.lastSyncedAt||null,r=new Set(this.tombstones.map(g=>g.id)),a=s||!i?this.instruments:this.instruments.filter(g=>!g.updatedAt||g.updatedAt>i),o=s||!i?this.sessions:this.sessions.filter(g=>!g.updatedAt||g.updatedAt>i),l={lastSyncedAt:i,instruments:a,sessions:o,tombstones:[...this.tombstones]},c=await Li.sync(e,n,l),h=new Map(this.instruments.map(g=>[g.id,g]));for(const g of c.instruments){const f=h.get(g.id);if(!f)h.set(g.id,g);else{const v=f.updatedAt?new Date(f.updatedAt).getTime():0;(g.updatedAt?new Date(g.updatedAt).getTime():0)>=v&&h.set(g.id,{...f,...g})}}const u=new Map(this.sessions.map(g=>[g.id,g]));for(const g of c.sessions){const f=u.get(g.id);if(!f)u.set(g.id,g);else{const v=f.updatedAt?new Date(f.updatedAt).getTime():0;(g.updatedAt?new Date(g.updatedAt).getTime():0)>=v&&u.set(g.id,{...f,...g})}}for(const g of c.tombstones)g.type==="instrument"?h.delete(g.id):g.type==="session"&&u.delete(g.id);return this.instruments=Array.from(h.values()),this.sessions=Array.from(u.values()).sort((g,f)=>new Date(f.start).getTime()-new Date(g.start).getTime()),this.tombstones=this.tombstones.filter(g=>!r.has(g.id)),this.settings.lastSyncedAt=c.syncedAt,this.syncStatus="synced",this.syncErrorMessage=null,this.persistInstruments(),this.persistSessions(),this.persistTombstones(),this.persistSettings(),this.notify(),{success:!0}}catch(n){const i=n instanceof Error?n.message:String(n);return console.error("PracticeStore sync failed:",i),this.syncStatus="error",this.syncErrorMessage=i,this.notify(),{success:!1,message:i}}}disconnectCloudSync(){this.settings.workerUrl=void 0,this.settings.syncPasscode=void 0,this.settings.lastSyncedAt=void 0,this.syncStatus="local",this.syncErrorMessage=null,this.persistSettings(),this.notify()}updateSettings(e){this.settings={...this.settings,...e},this.persistSettings(),this.isCloudSyncConfigured()?this.syncStatus="synced":this.syncStatus="local",this.notify()}exportBackup(){const e={version:2,exportedAt:new Date().toISOString(),instruments:this.instruments,sessions:this.sessions,settings:this.settings};return JSON.stringify(e,null,2)}importBackup(e){try{const s=JSON.parse(e);if(!s||!Array.isArray(s.instruments)&&!Array.isArray(s.sessions))return{success:!1,message:"Invalid backup file format."};if(Array.isArray(s.instruments)&&s.instruments.length>0&&(this.instruments=s.instruments.map(n=>({...n,updatedAt:n.updatedAt||new Date().toISOString()})),this.persistInstruments()),Array.isArray(s.sessions)&&(this.sessions=s.sessions.map(n=>({...n,updatedAt:n.updatedAt||new Date().toISOString()})),this.persistSessions()),s.settings&&typeof s.settings=="object"){const{soundEnabled:n,hapticsEnabled:i}=s.settings;this.settings={...this.settings,soundEnabled:typeof n=="boolean"?n:this.settings.soundEnabled,hapticsEnabled:typeof i=="boolean"?i:this.settings.hapticsEnabled},this.persistSettings()}return this.activeSession=null,this.persistActive(),this.notify(),this.triggerBackgroundSync(),{success:!0,message:"Backup successfully restored."}}catch(s){return{success:!1,message:"Failed to parse JSON file: "+String(s)}}}loadDemoData(){this.instruments=[...it],this.persistInstruments();const e=ft(new Date),s=[],n=new Date().toISOString();for(let a=33;a>=1;a--){const o=Yt(e,-a),l=o.getDay();if(!(Math.random()<.12)){if(l>=1&&l<=5){const c=Math.random()<.7?["guitar","piano"]:[Math.random()<.5?"guitar":"piano"];let h=7;c.forEach(u=>{const g=new Date(o);g.setHours(h,30+Math.floor(Math.random()*20),0,0);const f=12+Math.floor(Math.random()*25),v=new Date(g.getTime()+f*6e4);s.push({id:"seed-"+Math.random().toString(36).slice(2,8),instrumentId:u,start:g.toISOString(),end:v.toISOString(),duration:f,updatedAt:n}),h+=1})}else if(Math.random()<.75){const c=["acoustic","bass","drumming"][Math.floor(Math.random()*3)],h=new Date(o);h.setHours(11,Math.floor(Math.random()*40),0,0);const u=20+Math.floor(Math.random()*30),g=new Date(h.getTime()+u*6e4);s.push({id:"seed-"+Math.random().toString(36).slice(2,8),instrumentId:c,start:h.toISOString(),end:g.toISOString(),duration:u,updatedAt:n})}}}const i=new Date(e);i.setHours(7,40,0,0),s.unshift({id:"seed-today-guitar",instrumentId:"guitar",start:i.toISOString(),end:new Date(i.getTime()+22*6e4).toISOString(),duration:22,updatedAt:n});const r=new Date(e);r.setHours(8,15,0,0),s.unshift({id:"seed-today-piano",instrumentId:"piano",start:r.toISOString(),end:new Date(r.getTime()+18*6e4).toISOString(),duration:18,updatedAt:n}),this.sessions=s,this.activeSession=null,this.persistSessions(),this.persistActive(),this.notify(),this.triggerBackgroundSync()}clearAllData(){this.instruments=[...it],this.sessions=[],this.activeSession=null,this.tombstones=[],this.persistInstruments(),this.persistSessions(),this.persistTombstones(),this.persistActive(),this.notify()}}const P=new kd,ia="pt-background",Sd="https://practice-tracker-sync.warmsynthsiloveyou.workers.dev";function Ed(){const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Ad(){try{const t=localStorage.getItem(ia);if(!t)return null;const e=JSON.parse(t);return e.url&&e.date?e:null}catch{return null}}function $d(t,e){localStorage.setItem(ia,JSON.stringify({url:t,date:e}))}function Er(t){return new Promise((e,s)=>{const n=new Image;n.onload=()=>e(),n.onerror=()=>s(new Error("Image failed to load")),n.src=t})}async function Td(){const t=Ed(),e=Ad();if(e&&e.date===t)try{return await Er(e.url),e.url}catch{}try{const s=new AbortController,n=setTimeout(()=>s.abort(),8e3),i=await fetch(`${Sd.replace(/\/+$/,"")}/api/background`,{signal:s.signal});if(clearTimeout(n),!i.ok)return null;const r=await i.json();return r.url?(await Er(r.url),$d(r.url,t),r.url):null}catch{return null}}const Xe=Ne`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }

  button, input, select, textarea {
    font-family: inherit;
  }

  [data-lift] {
    transition: transform 180ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 180ms ease-out;
  }

  [data-tap] {
    transition: transform 160ms cubic-bezier(0.2, 0.8, 0.2, 1), filter 160ms ease-out;
  }

  @media (hover: hover) and (pointer: fine) {
    [data-lift]:hover {
      transform: translateY(-2px);
    }
    [data-tap]:hover {
      filter: brightness(0.97);
    }
  }

  [data-lift]:active, [data-tap]:active {
    transform: scale(0.975);
  }

  @keyframes fadeOnly {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes popIn {
    from { opacity: 0; transform: scale(0.94); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes riseIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes sheetIn {
    from { opacity: 0; transform: translateY(12px) scale(0.985); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  @keyframes barGrow {
    from { transform: scaleY(0); }
    to { transform: scaleY(1); }
  }

  @keyframes softPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.42; }
  }

  @keyframes breathe {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  @keyframes halo {
    0% { transform: scale(0.6); opacity: 0.45; }
    70%, 100% { transform: scale(2.1); opacity: 0; }
  }

  @keyframes tinyWobble {
    0%, 100% { transform: rotate(-2.5deg); }
    50% { transform: rotate(2.5deg); }
  }

  @keyframes drift {
    0%, 100% { transform: scale(1) translateY(0); }
    50% { transform: scale(1.007) translateY(-1px); }
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 120ms !important;
    }
    [data-lift]:hover, [data-lift]:active, [data-tap]:active {
      transform: none !important;
    }
  }
  /* Buttons */
  .btn {
    border: none;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 140ms ease, background-color 140ms ease, opacity 140ms ease;
    user-select: none;
  }

  .btn:active {
    transform: scale(0.98);
  }

  .btn-primary {
    background: #23241F;
    color: #F2F1EC;
    height: 46px;
    width: 100%;
  }

  .btn-primary:hover {
    background: #3A3B35;
  }

  .btn-secondary {
    background: #EFEEE9;
    color: #23241F;
    height: 44px;
  }

  .btn-secondary:hover {
    background: #E4E3DD;
  }

  .btn-danger {
    background: #B4543C;
    color: #FBF6F3;
    height: 44px;
  }

  .btn-danger:hover {
    opacity: 0.92;
  }

  /* Form Elements */
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
    border-radius: 12px;
    padding: 11px 14px;
    font-size: 14px;
    background: #FBFBF9;
    color: #23241F;
    outline: none;
    transition: border-color 140ms ease, box-shadow 140ms ease;
  }

  .form-input:focus {
    border-color: #23241F;
    box-shadow: 0 0 0 1px #23241F;
  }

  /* Modals */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(35, 36, 31, 0.34);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 1000;
    animation: fadeOnly 160ms ease-out both;
  }

  .modal-card {
    width: 100%;
    max-width: 420px;
    max-height: 88vh;
    overflow-y: auto;
    background: #FBFBF9;
    border-radius: 24px;
    padding: 24px;
    box-shadow: 0 20px 48px rgba(35, 36, 31, 0.16);
    color: #23241F;
    animation: sheetIn 260ms cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  .modal-title {
    font-size: 19px;
    font-weight: 700;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close-btn {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #EFEEE9;
    color: #767668;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    border: none;
    transition: background-color 140ms ease, color 140ms ease;
  }

  .close-btn:hover {
    background: #E1E1DB;
    color: #23241F;
  }
`,It=[1,3,7,14,30],rt=5;function ra(t,e){const s=ft(t).getTime(),n=ft(e).getTime();return Math.round((s-n)/(1e3*60*60*24))}function Od(t,e,s=new Date){const n=ft(s),i=e.filter(x=>x.instrumentId===t&&!x.deletedAt).sort((x,p)=>new Date(x.start).getTime()-new Date(p.start).getTime());if(i.length===0)return{instrumentId:t,step:0,maxSteps:rt,intervalDays:It[0],lastPracticedAt:null,nextDueAt:null,daysRemaining:0,status:"new",isDueToday:!1,isOverdue:!1,cycleCount:0,label:"New · Ready for Step 1"};const r=[],a=new Set;for(const x of i){const p=ft(new Date(x.start)),_=no(p);a.has(_)||(a.add(_),r.push(p))}let o=0,l=null,c=0;for(let x=0;x<r.length;x++){const p=r[x];if(x===0){o=1;const _=It[0];l=Yt(p,_)}else if(l?p.getTime()<=l.getTime():!0)if(o>=rt){c++,o=1;const R=It[0];l=Yt(p,R)}else{o++;const R=It[o-1];l=Yt(p,R)}else{o=1;const R=It[0];l=Yt(p,R)}}const h=i[i.length-1].start,u=l?l.toISOString():null,g=It[Math.max(0,Math.min(o-1,rt-1))],f=l?ra(l,n):0,v=f<0,m=f===0;let b="cold";v?b="overdue":m?b="due":f===1?b="hot":f<=3?b="warm":f<=7?b="cool":b="cold";let w;return v?w=`Overdue by ${Math.abs(f)}d (was Step ${o}: ${g}d)`:m?w=`Due today · Step ${o}/${rt} (${g}d)`:f===1?w=`Due tomorrow · Step ${o}/${rt} (${g}d)`:w=`Step ${o}/${rt} · Due in ${f}d (${g}d)`,{instrumentId:t,step:o,maxSteps:rt,intervalDays:g,lastPracticedAt:h,nextDueAt:u,daysRemaining:f,status:b,isDueToday:m,isOverdue:v,cycleCount:c,label:w}}function Cd(t){const s=t.filter(i=>!i.archived&&!i.deletedAt).slice().sort((i,r)=>i.rank!==void 0&&r.rank!==void 0?i.rank-r.rank:i.rank!==void 0?-1:r.rank!==void 0?1:i.tier!==r.tier?i.tier==="primary"?-1:1:0),n=new Map;return s.forEach((i,r)=>{n.set(i.id,r+1)}),n}function Rd(t,e){const s=t.filter(a=>!a.archived&&!a.deletedAt);if(s.length===0)return new Map;const n=new Map;let i=0;for(const a of s){const o=e.get(a.id)||1,c=(a.tier==="primary"?2:1)*Math.pow(o,-.6);n.set(a.id,c),i+=c}const r=new Map;for(const a of s){const o=n.get(a.id)||0;r.set(a.id,i>0?o/i:1/s.length)}return r}function Id(t,e,s=new Date){const n=ft(s),i=t.filter(m=>!m.archived&&!m.deletedAt);if(i.length===0)return{topPick:null,rankedQueue:[]};const r=Cd(t),a=Rd(t,r),o=new Date(n);o.setDate(o.getDate()-14);const l=e.filter(m=>!m.deletedAt),c=l.filter(m=>new Date(m.start)>=o),h=c.reduce((m,b)=>m+(b.duration||0),0),u=new Map;for(const m of i){const b=c.filter(w=>w.instrumentId===m.id).reduce((w,x)=>w+(x.duration||0),0);u.set(m.id,h>0?b/h:0)}const g=[];for(const m of i){const b=r.get(m.id)||i.length,w=a.get(m.id)||0,x=u.get(m.id)||0,p=w-x,_=Od(m.id,l,s);let R=999,C=!1;if(_.lastPracticedAt){const F=ft(new Date(_.lastPracticedAt));R=ra(n,F),C=R===0}let O=0;if(_.lastPracticedAt&&R>=0){const B=Math.max(1,_.intervalDays)*(1+.05*Math.max(0,5-b));O=Math.min(100,Math.max(0,Math.exp(-Math.LN2*R/B)*100))}const ye=100-O,ee=Math.max(0,p*100),yt=1/Math.pow(b,.5)*100;let Y=.45*ye+.35*ee+.2*yt;_.lastPracticedAt?_.isOverdue?Y+=15+Math.min(25,Math.abs(_.daysRemaining)*5):_.isDueToday&&(Y+=10):Y+=25,C&&i.length>1&&(Y*=.25);const vt=Math.round(Math.min(100,Math.max(0,Y))*10)/10;let ae="",Ae;if(_.lastPracticedAt)if(C){const F="Interleaved cooling down",B="Practiced today. Switch disciplines to allow neural consolidation.";ae=`${F}. ${B}`,Ae={badge:"BRAIN RESET",headline:F,explanation:B,icon:"brain"}}else if(_.isOverdue){const F=Math.abs(_.daysRemaining),B=`Retention dropped to ${Math.round(O)}%`,wt=`Overdue by ${F}d (Step ${_.step}). A quick session locks in your ${_.intervalDays}d interval.`;ae=`${B}. ${wt}`,Ae={badge:"RUST ALERT",headline:B,explanation:wt,icon:"bolt"}}else if(_.isDueToday){const F=`Due today for Step ${_.step}`,B=`Retention at ${Math.round(O)}%. Optimal timing for your ${_.intervalDays}d target interval.`;ae=`${F}. ${B}`,Ae={badge:"IN SYNC",headline:F,explanation:B,icon:"clock"}}else if(p>.1){const F=`${Math.round(p*100)}% behind target share`,B=`Priority rank #${b} is slipping. Give it airtime to restore kit balance.`;ae=`${F}. ${B}`,Ae={badge:"KIT SLIP",headline:F,explanation:B,icon:"scale"}}else{const F=`Retention at ${Math.round(O)}%`,B=`Last played ${R===1?"yesterday":`${R}d ago`}. Keep steady on your practice routine.`;ae=`${F}. ${B}`,Ae={badge:"STEADY PACE",headline:F,explanation:B,icon:"clock"}}else{const F="Baseline session ready",B="Establish your baseline to initiate Step 1 spacing interval.";ae=`${F}. ${B}`,Ae={badge:"FRESH CANVAS",headline:F,explanation:B,icon:"sparkles"}}g.push({instrumentId:m.id,name:m.name,color:m.color,tier:m.tier,rank:b,score:vt,retentionPct:Math.round(O),targetSharePct:Math.round(w*100),actualSharePct:Math.round(x*100),shareDeficitPct:Math.round(p*100),daysSince:R,step:_.step,status:_.status,reason:ae,reasonDetails:Ae,isPracticedToday:C})}const f=g.slice().sort((m,b)=>b.score-m.score||m.rank-b.rank);return{topPick:f[0]||null,rankedQueue:f}}const fe={clock:"M6.4 3.4h11.2M6.4 20.6h11.2M8.2 3.4v3.3c0 2.1 3.8 3.7 3.8 5.3s-3.8 3.2-3.8 5.3v3.3M15.8 3.4v3.3c0 2.1-3.8 3.7-3.8 5.3s3.8 3.2 3.8 5.3v3.3",note:"M12 2.9a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8M9.3 13.1 7.4 21.1 12 18.5l4.6 2.6-1.9-8",bolt:"M12 2.8c3.8 3.4 6 6 6 9.4a6 6 0 0 1-12 0c0-2 .9-3.6 2.3-5.2M12 20.2a2.7 2.7 0 0 0 2.7-2.7c0-1.7-1.4-2.7-2.7-4.6-1.3 1.9-2.7 2.9-2.7 4.6a2.7 2.7 0 0 0 2.7 2.7z",cal:"M12 3 20 5.7v6.5c0 4.3-3.3 7.4-8 8.8-4.7-1.4-8-4.5-8-8.8V5.7zM8.6 12.1l2.6 2.6 4.4-4.8",grid:"M3.3 7.8 7 11.6 12 4.2l5 7.4 3.7-3.8-1.7 10.9H5zM5.4 18.7h13.2",star:"M11.2 3c.9 4.4 1.9 5.4 6.3 6.3-4.4.9-5.4 1.9-6.3 6.3-.9-4.4-1.9-5.4-6.3-6.3C9.3 8.4 10.3 7.4 11.2 3M18.4 15.5c.4 1.9.8 2.3 2.7 2.7-1.9.4-2.3.8-2.7 2.7-.4-1.9-.8-2.3-2.7-2.7 1.9-.4 2.3-.8 2.7-2.7"};function K(t){const e=new Date(t);return e.setHours(0,0,0,0),e}function L(t,e){const s=new Date(t);return s.setDate(s.getDate()+e),s}function Ar(t){const e=K(t);return L(e,-((e.getDay()+6)%7))}function M(t){if(t=Math.round(t),t<=0)return"0m";if(t<60)return t+"m";const e=Math.floor(t/60),s=t%60;return e+"h"+(s?" "+s+"m":"")}function Pd(t){if(!t.length)return 0;const e=t.slice().sort((s,n)=>s-n);return e.length%2?e[(e.length-1)/2]:(e[e.length/2-1]+e[e.length/2])/2}function Dn(t){return t===0||t===24?"12am":t===12?"12pm":t<12?`${t}am`:`${t-12}pm`}function Dd(t,e,s={}){var Ei,Ai,$i;const n=s.now||new Date,i=K(n),r=s.weeklyGoalMinutes||420,a=s.range||"month",o=s.mutedInstruments||{},l=e.filter(d=>!d.archived),c=new Map;e.forEach(d=>c.set(d.id,d));const h=d=>c.get(d)||{id:d,name:"Instrument",color:"#6B7F6E",tier:"primary"},u=t.filter(d=>!d.deletedAt).map(d=>({...d,t:new Date(d.start),min:Math.max(1,d.duration)})).sort((d,y)=>d.t.getTime()-y.t.getTime()),g=u.length>0,f={},v={};u.forEach(d=>{const y=K(d.t).getTime();f[y]=(f[y]||0)+d.min,v[y]||(v[y]={}),v[y][d.instrumentId]=(v[y][d.instrumentId]||0)+d.min});let m=0;const b=i.getTime(),x=!!f[b]?0:1;for(let d=x;d<400;d++){const y=L(i,-d).getTime();if(f[y])m++;else break}let p=0,_=0;for(let d=365;d>=0;d--){const y=L(i,-d).getTime();f[y]?(_++,p=Math.max(p,_)):_=0}p=Math.max(p,m);const R=Math.max(1,p-m+1),C=m<=0?"time to start a run":m===1?"day one, showing up":m>=p&&p>=3?"your longest run yet":m>=30?"a month unbroken":m>=14?"a fortnight of showing up":R<=2&&m>=3?R===1?"one more matches your best":`${R} more beats your best`:m%2===1?"nobody is watching, keep going":"stay steady on the fretboard",O=Math.max(60,...Object.values(f)),ye=["S","M","T","W","T","F","S"],ee=[];for(let d=13;d>=0;d--){const y=L(i,-d),E=f[y.getTime()]||0;ee.push({h:E?Math.max(10,Math.round(E/O*100)):6,bg:E?d===0?"#4F6353":"#9FAF95":"#E1E1DB",label:ye[y.getDay()],labelColor:d===0?"#23241F":"#B0AFA5",isToday:d===0})}const yt=u.reduce((d,y)=>d+y.min,0),Y=yt/60,vt=Y<25||Y<50?25:Y<100?50:100,ae=(Math.floor(Y/vt)+1)*vt,Ae=Math.max(0,ae-vt),F=Math.max(0,Math.round(ae*60-yt)),B=yt-Ae*60,wt=Math.max(.02,Math.min(.98,B/(vt*60))),rn=52,Qn=2*Math.PI*rn,aa=`${(Qn*wt).toFixed(1)} ${Qn.toFixed(1)}`,Zn=(wt*360-90)*(Math.PI/180),oa=(59+rn*Math.cos(Zn)).toFixed(1),la=(59+rn*Math.sin(Zn)).toFixed(1),ca=L(i,-42),ys=u.filter(d=>d.t>=ca),da=ys.reduce((d,y)=>d+y.min,0)||1,ua=d=>d===0?"today":d===1?"yesterday":d>=99?"never":`${d}d ago`,ei=Id(l,t,i),Le=ei.topPick,Ze=Le?{id:Le.instrumentId,name:Le.name,color:Le.color,reason:Le.reason,reasonDetails:Le.reasonDetails}:{id:((Ei=l[0])==null?void 0:Ei.id)||"guitar",name:((Ai=l[0])==null?void 0:Ai.name)||"Guitar",color:(($i=l[0])==null?void 0:$i.color)||"#6B7F6E",reason:"Start a session to build your practice streak.",reasonDetails:{badge:"FRESH CANVAS",headline:"Start a session",explanation:"Log your first sitting to establish your baseline practice streak.",icon:"sparkles"}},ie=Le?Le.daysSince:99,ha=new Set(u.filter(d=>d.instrumentId===Ze.id).map(d=>Math.round((i.getTime()-K(d.t).getTime())/864e5))),pa=Array.from({length:14},(d,y)=>{const E=13-y,I=ha.has(E);return{h:I?"30px":E<ie?"9px":"16px",bg:I?Ze.color:"rgba(242,241,236,0.18)"}}),fa={id:Ze.id,name:Ze.name,color:Ze.color,days:ie>=999?99:ie,num:ie>=999?"—":String(ie),unit:ie>=999?"not yet logged":ie===1?"day since":"days since",ago:ie>=999?"never logged":ie===0?"last played today":ie===1?"last played yesterday":`last played ${ie}d ago`,ticks:pa},Ue={...l.find(d=>d.id===Ze.id)||l[0]||{id:"guitar",name:"Guitar",color:"#6B7F6E",tier:"primary"},days:ie>=999?99:ie},$e=Ar(i),an=d=>{const y=[0,0,0,0,0,0,0];return u.forEach(E=>{const I=Math.floor((K(E.t).getTime()-d.getTime())/864e5);I>=0&&I<7&&(y[I]+=E.min)}),y},ti=d=>{let y=0;return d.map(E=>y+=E)},xt=ti(an($e)),on=[];for(let d=1;d<=8;d++)on.push(ti(an(L($e,-7*d))));const vs=[0,1,2,3,4,5,6].map(d=>on.length?Pd(on.map(y=>y[d])):(d+1)*30),_t=Math.min(6,Math.max(0,Math.floor((i.getTime()-$e.getTime())/864e5))),ln=Math.round(xt[_t]-vs[_t]),ga=Math.max(r,vs[6],xt[6],60)*1.08,si=(d,y,E,I)=>d.slice(0,y+1).map((N,j)=>`${(j/6*(E-12)+6).toFixed(1)},${(I-8-N/ga*(I-18)).toFixed(1)}`).join(" "),et=[];F>0&&F<=120&&et.push({mins:F,big:M(F),text:`to your ${ae}th hour of practice, all instruments counted`,on:Ue}),f[b]||(m+1>p&&p>=2?et.push({mins:15,big:"15m",text:`sets a new longest streak — ${m+1} days, further than you have ever gone`,on:Ue}):et.push({mins:15,big:"15m",text:`keeps the streak alive at ${m+1} days · ${Math.max(1,p-m)} from your record`,on:Ue}));const cn=Math.round(vs[_t]-xt[_t]);cn>0&&et.push({mins:cn,big:M(cn),text:"puts this week back ahead of your median pace",on:Ue});const ws=Math.round(r-xt[6]);ws>0&&ws<=150&&et.push({mins:ws,big:M(ws),text:`and the weekly goal of ${M(r)} is done`,on:l[0]||Ue}),et.push({mins:20,big:"20m",text:`ends the ${Ue.days>=99?"silence":`${Ue.days}-day gap`} on this instrument`,on:Ue});const ma=et.sort((d,y)=>d.mins-y.mins).slice(0,3).map(d=>({big:d.big,text:d.text,instId:d.on.id,instName:d.on.name,instColor:d.on.color,mins:d.mins})),ni=[0,0,0,0,0,0,0],ii=[0,0,0,0,0,0,0];for(let d=0;d<84;d++){const y=L(i,-d),E=(y.getDay()+6)%7;ni[E]+=f[y.getTime()]||0,ii[E]++}const kt=ni.map((d,y)=>d/(ii[y]||1)),ba=Math.max(1,...kt),ri=kt.indexOf(Math.max(...kt)),ai=kt.indexOf(Math.min(...kt)),dn=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ya=kt.map((d,y)=>({label:dn[y][0],val:M(d),h:Math.max(8,Math.round(d/ba*100)),bg:y===ri?"#4F6353":y===ai?"#D9C7C0":"#9FAF95",strong:y===(i.getDay()+6)%7?700:500})),un=[{label:"<25m",min:0,max:25},{label:"25–40",min:25,max:40},{label:"40–55",min:40,max:55},{label:"55–75",min:55,max:75},{label:"75m+",min:75,max:9999}],xs=un.map(d=>ys.filter(y=>y.min>=d.min&&y.min<d.max).length),va=Math.max(1,...xs),oi=xs.indexOf(Math.max(...xs)),wa=xs.map((d,y)=>({label:un[y].label,n:d,h:Math.max(6,Math.round(d/va*100)),bg:y===oi?"#4F6353":"#C6CFBF"})),_s=u.slice().sort((d,y)=>y.min-d.min)[0]||{min:0,t:n,instrumentId:"guitar"},li=[];for(let d=0;d<16;d++){const y=L($e,-7*d);li.push({m:y,v:an(y).reduce((E,I)=>E+I,0)})}const hn=li.slice().sort((d,y)=>y.v-d.v)[0]||{m:$e,v:0},pn=Object.keys(f).sort((d,y)=>(f[Number(y)]||0)-(f[Number(d)]||0))[0],ci=pn?new Date(Number(pn)):i,di=[{k:"LONGEST SESSION",v:M(_s.min),sub:`${h(_s.instrumentId).name} · ${_s.t.toLocaleDateString(void 0,{day:"numeric",month:"short"})}`,fresh:Math.round((i.getTime()-K(_s.t).getTime())/864e5)<=21},{k:"BIGGEST WEEK",v:M(hn.v),sub:`week of ${hn.m.toLocaleDateString(void 0,{day:"numeric",month:"short"})}`,fresh:Math.round((i.getTime()-K(hn.m).getTime())/864e5)<=21},{k:"LONGEST STREAK",v:`${p} ${p===1?"day":"days"}`,sub:m>=p&&m>=3?"you are on it now":`${m}d in currently`,fresh:m>=p&&m>=3},{k:"BIGGEST DAY",v:M(f[Number(pn)]||0),sub:ci.toLocaleDateString(void 0,{day:"numeric",month:"short"}),fresh:Math.round((i.getTime()-K(ci).getTime())/864e5)<=21}],tt=di.filter(d=>d.fresh),xa=tt.length?`${tt.length} set recently`:"nothing new in three weeks",_a=tt.length===0?"No reading has moved in three weeks. One long sitting would change that.":tt[0].k==="LONGEST STREAK"?`Your longest streak is the one you are standing in right now — ${p} days and counting.`:`New ${tt[0].k.toLowerCase()}: ${tt[0].v}, ${tt[0].sub.toLowerCase()}. That one is yours to beat now.`,Be=Array.from({length:24},()=>({min:0,by:{}}));ys.forEach(d=>{const y=d.t.getHours();Be[y].min+=d.min,Be[y].by[d.instrumentId]=(Be[y].by[d.instrumentId]||0)+d.min});const ka=Math.max(1,...Be.map(d=>d.min));let fn=0,ks=18;for(let d=0;d<24;d++){const y=Be[d].min+Be[(d+1)%24].min+Be[(d+2)%24].min;y>fn&&(fn=y,ks=d)}const Te=Array.from({length:25},(d,y)=>Be[(y+4)%24].min),ui=720,Ht=124,ze=d=>d/24*ui,St=d=>Ht-14-d/ka*(Ht-34);let Ss=`M ${ze(0).toFixed(1)} ${St(Te[0]).toFixed(1)}`;for(let d=1;d<Te.length;d++){const y=(ze(d-1)+ze(d))/2,E=(St(Te[d-1])+St(Te[d]))/2;Ss+=` Q ${ze(d-1).toFixed(1)} ${St(Te[d-1]).toFixed(1)} ${y.toFixed(1)} ${E.toFixed(1)}`}Ss+=` L ${ze(24).toFixed(1)} ${St(Te[24]).toFixed(1)}`;const Sa=`${Ss} L ${ui} ${Ht} L 0 ${Ht} Z`,qt=(n.getHours()+n.getMinutes()/60-4+24)%24,Ea=Te[Math.floor(qt)]+(Te[Math.ceil(qt)]-Te[Math.floor(qt)])*(qt%1),Aa=(ks-4+24)%24,He={};ys.forEach(d=>{if(!d.notes||!d.notes.trim())return;const y=d.notes.trim();He[y]||(He[y]={n:0,min:0,last:d.t,instId:d.instrumentId}),He[y].n++,He[y].min+=d.min,d.t>He[y].last&&(He[y].last=d.t)});const $a=Object.keys(He).map(d=>({k:d,...He[d]})).sort((d,y)=>y.min-d.min).slice(0,7).map(d=>({name:d.k,mins:M(d.min),color:h(d.instId).color,ago:ua(Math.round((i.getTime()-K(d.last).getTime())/864e5)),size:(12+Math.min(7,d.min/50)).toFixed(1)+"px"})),qe=[],hi=(d,y)=>{let E=0;for(const I of d)if(E+=I.min,E/60>=y)return I.t;return null},pi=d=>{const y=Math.round((i.getTime()-K(d).getTime())/864e5);return y<=1?"cleared today":y<=30?`cleared ${y} days ago`:y<=70?"cleared about two months ago":`cleared ${Math.round(y/30)} months ago`},fi="#8A7B94",gi="#4F6353",mi="#A8814F",bi="#B4543C",Wt=(d,y,E,I,N,j)=>qe.push({id:"m"+qe.length,done:!0,accent:d,icon:y,kind:E,title:I,detail:N,when:j?j.getTime():0,dateLabel:j?j.toLocaleDateString(void 0,{day:"numeric",month:"short",year:"2-digit"}):"",isNew:!!j&&Math.round((i.getTime()-K(j).getTime())/864e5)<=21}),Kt=(d,y,E,I,N,j,z)=>qe.push({id:"m"+qe.length,done:!1,accent:d,icon:y,kind:E,title:I,detail:z,when:0,dateLabel:"",isNew:!1,pct:Math.max(2,Math.min(98,Math.round(N/j*100))),pctLabel:`${Math.min(99,Math.round(N/j*100))}%`}),yi=[25,50,100,250,500,1e3],gn=yi.filter(d=>Y>=d);if(gn.length){const d=gn[gn.length-1],y=hi(u,d);Wt(fi,fe.clock,"BANKED HOURS",`${d} hours banked`,y?pi(y):"cleared",y)}const Es=yi.find(d=>Y<d);if(Es){const d=Es-Y;Kt(fi,fe.clock,"BANKED HOURS",`${Es} hours banked`,Y,Es,d<1?`${Math.round(d*60)}m to go`:`${Math.ceil(d)}h to go`)}l.forEach(d=>{const y=u.filter(z=>z.instrumentId===d.id),E=y.reduce((z,We)=>z+We.min,0)/60,I=[10,25,50,100,200],N=I.filter(z=>E>=z);if(N.length){const z=N[N.length-1],We=hi(y,z);Wt(d.color,fe.note,d.name.toUpperCase(),`${z} hours on ${d.name.toLowerCase()}`,We?pi(We):"cleared",We)}const j=I.find(z=>E<z);if(j){const z=j-E;Kt(d.color,fe.note,d.name.toUpperCase(),`${j} hours on ${d.name.toLowerCase()}`,E,j,z<1?`${Math.round(z*60)}m to go`:`${Math.ceil(z)}h to go`)}});const vi=[7,14,30,60,100],mn=vi.filter(d=>p>=d);if(mn.length){const d=mn[mn.length-1];Wt(gi,fe.bolt,"STREAK",`${d} days unbroken`,m>=p?"still running today":"your longest run so far",m>=p?i:null)}const As=vi.find(d=>p<d);As&&Kt(gi,fe.bolt,"STREAK",`${As} days unbroken`,m,As,`${As-m} more days without a gap`);const $s={};for(let d=0;d<200;d++){const y=L(i,-d),E=`${y.getFullYear()}-${y.getMonth()}`,I=$s[E]||($s[E]={miss:0,seen:0,d:y});I.seen++,f[y.getTime()]||I.miss++}const Ts=Object.values($s).filter(d=>d.miss===0&&d.seen>=28);if(Ts.length)Wt(mi,fe.cal,"NO GAPS",`${Ts.length} ${Ts.length===1?"month":"months"} with no gaps`,"not a single day missed",Ts[0].d);else{const d=$s[`${i.getFullYear()}-${i.getMonth()}`];d&&Kt(mi,fe.cal,"NO GAPS","A month with no gaps",d.seen-d.miss,d.seen,`${d.miss} ${d.miss===1?"day":"days"} missed this month`)}let Os=null;for(let d=0;d<26&&!Os;d++){const y=L($e,-7*d),E=new Set;u.forEach(I=>{I.t>=y&&I.t<L(y,7)&&E.add(I.instrumentId)}),E.size>=l.length&&l.length>=2&&(Os=y)}if(Os)Wt(bi,fe.grid,"WHOLE KIT","Every instrument in one week",`all ${l.length} of them, that week`,Os);else if(l.length>=2){const d=new Set;u.forEach(y=>{y.t>=$e&&d.add(y.instrumentId)}),Kt(bi,fe.grid,"WHOLE KIT","Every instrument in one week",d.size,l.length,`${l.length-d.size} still untouched this week`)}const wi=u[0],Vt=Ar(wi?wi.t:L(i,-182)),bn=Math.max(12,Math.min(36,Math.round(($e.getTime()-Vt.getTime())/(7*864e5))+1)),Ta=Math.max(45,...Object.values(f)),yn=[];for(let d=0;d<bn;d++)for(let y=0;y<7;y++){const E=L(Vt,d*7+y),I=E.getTime(),N=f[I]||0,j=N&&v[I]?Object.keys(v[I]).sort((Pa,Da)=>v[I][Da]-v[I][Pa])[0]:null,z=E>i,We=I===b;yn.push({date:E,bg:z?"transparent":N&&j?h(j).color:"#E3E2DB",op:N?(.34+.66*Math.min(1,N/Ta)).toFixed(2):"1",ring:We?"1.5px solid #4F6353":"1.5px solid transparent",anim:We?"breathe 5.2s ease-in-out infinite":"none",mark:!1,icon:"",markStroke:"none",cursor:"default"})}qe.filter(d=>d.done&&d.when>0).sort((d,y)=>y.when-d.when).forEach(d=>{const y=Math.round((K(new Date(d.when)).getTime()-Vt.getTime())/864e5),E=yn[y];E&&!E.mark&&(E.mark=!0,E.bg=d.accent,E.op="1",E.icon=d.icon,E.markStroke="#FAFAF7",E.ring=`1.5px solid ${d.accent}88`,E.anim=d.isNew?"breathe 5.2s ease-in-out infinite":"none",E.cursor="pointer",E.milestoneId=d.id)});const xi=[];for(let d=0;d<bn;d+=4)xi.push({label:L(Vt,d*7).toLocaleDateString(void 0,{month:"short"})});const Oa=`since ${Vt.toLocaleDateString(void 0,{day:"numeric",month:"long"})} · ${bn} weeks`,_i={week:7,month:35,quarter:91,year:365},Oe=[];if(a==="week")for(let d=6;d>=0;d--){const y=L(i,-d);Oe.push({from:y,to:L(y,1),label:ye[y.getDay()],now:d===0,by:{},total:0})}else if(a==="year")for(let d=11;d>=0;d--){const y=new Date(i.getFullYear(),i.getMonth()-d,1),E=new Date(i.getFullYear(),i.getMonth()-d+1,1);Oe.push({from:y,to:E,label:y.toLocaleDateString(void 0,{month:"narrow"}),now:d===0,by:{},total:0})}else{const d=a==="month"?5:13;for(let y=d-1;y>=0;y--){const E=L($e,-7*y);Oe.push({from:E,to:L(E,7),label:`${E.getDate()}/${E.getMonth()+1}`,now:y===0,by:{},total:0})}}u.forEach(d=>{for(const y of Oe)if(d.t>=y.from&&d.t<y.to){o[d.instrumentId]||(y.by[d.instrumentId]=(y.by[d.instrumentId]||0)+d.min,y.total+=d.min);break}});const ki=Math.max(1,...Oe.map(d=>d.total)),Si=Oe.slice().sort((d,y)=>y.total-d.total)[0],Ca=Oe.map(d=>({label:d.label,labelColor:d.now?"#23241F":"#A3A297",labelWeight:d.now?700:500,segments:l.filter(y=>d.by[y.id]&&!o[y.id]).map(y=>({h:(d.by[y.id]/ki*100).toFixed(1),color:y.color,instId:y.id}))})),Cs=a==="year"?L(i,-365):L(i,-_i[a]),Et=u.filter(d=>d.t>=Cs&&!o[d.instrumentId]).reduce((d,y)=>d+y.min,0)||0,vn=u.filter(d=>d.t>=L(Cs,-_i[a])&&d.t<Cs&&!o[d.instrumentId]).reduce((d,y)=>d+y.min,0),wn=vn?Math.round((Et-vn)/vn*100):0,Ra=l.map(d=>{const E=u.filter(N=>N.instrumentId===d.id&&N.t>=Cs).reduce((N,j)=>N+j.min,0),I=Oe.map((N,j)=>{const z=N.by[d.id]||0;return`${(j/Math.max(1,Oe.length-1)*96+2).toFixed(1)},${(32-z/ki*30).toFixed(1)}`}).join(" ");return{id:d.id,name:d.name,color:d.color,minsLabel:M(E),shareLabel:`${Et?Math.round(E/Et*100):0}%`,sharePct:Et?Math.min(100,Math.round(E/Et*100)):0,spark:I,opacity:o[d.id]?.34:1,isMuted:!!o[d.id]}}).sort((d,y)=>y.sharePct-d.sharePct),Ia={week:"Week",month:"Month",quarter:"Quarter",year:"Year"};return{streak:m,bestStreak:p,toBeat:R,quip:C,last14:ee,lifeHours:`${Math.floor(Y)}h`,lifeHoursRaw:Y,lifeSub:`${M(yt%60)} past the hour · ${u.length} sessions`,nextMile:`${ae}h`,mileGap:M(F),milePct:wt,ringDash:aa,capX:oa,capY:la,oneAway:ma,drift:fa,pick:Ze,recommendation:ei,heatMarked:yn,heatMonths:xi,heatSince:Oa,milestones:qe,msCount:`${qe.filter(d=>d.done).length} earned · ${qe.filter(d=>!d.done).length} to go`,weekTotal:M(xt[_t]),goalLabel:M(r),paceDelta:`${ln>=0?"+":"−"}${M(Math.abs(ln))}`,paceColor:ln>=0?"#4F6353":"#B4543C",medianPts:si(vs,6,320,90),actualPts:si(xt,_t,320,90),dow:ya,dowBestLabel:dn[ri],dowWorstLabel:dn[ai],records:di,freshLine:_a,freshCount:xa,hist:wa,modeLabel:un[oi].label,dayCurve:Ss,dayArea:Sa,bandX:ze(Aa).toFixed(1),bandW:(ze(3)-ze(0)).toFixed(1),nowLeft:`${(qt/24*100).toFixed(2)}%`,nowTop:`${(St(Ea)/Ht*100).toFixed(2)}%`,windowLabel:`${Dn(ks)} – ${Dn((ks+3)%24)}`,windowShare:`${Math.round(fn/da*100)}%`,dayTicks:[4,8,12,16,20,0].map(d=>({label:Dn(d)})),themes:$a,buckets:Ca,peakLabel:M(Si?Si.total:0),chartTitle:a==="week"?"Minutes per day":a==="year"?"Minutes per month":"Minutes per week",scopeTotal:M(Et),scopeCaption:`${Ia[a].toUpperCase()} TO DATE`,scopeDelta:`${wn>=0?"+":"−"}${Math.abs(wn)}% vs previous`,scopeDeltaColor:wn>=0?"#4F6353":"#B4543C",instRows:Ra,hasData:g}}var Fd=Object.defineProperty,jd=Object.getOwnPropertyDescriptor,ue=(t,e,s,n)=>{for(var i=n>1?void 0:n?jd(e,s):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(n?a(e,s,i):a(i))||i);return n&&i&&Fd(e,s,i),i};let ne=class extends le{constructor(){super(...arguments),this.instruments=[],this.sessions=[],this.activeSession=null,this.now=Date.now(),this.range="month",this.mutedInstruments={},this.activeMsId=null,this.quickLogOpen=!1,this.recentEndedSession=null,this.toastTimeout=null,this.showReasonWhy=!1}handleStart(t){this.dispatchEvent(new CustomEvent("start-session",{detail:{instrumentId:t},bubbles:!0,composed:!0}))}handleEnd(){if(!this.activeSession)return;const t=this.instruments.find(s=>{var n;return s.id===((n=this.activeSession)==null?void 0:n.instrumentId)}),e=Math.max(1,Math.round((Date.now()-this.activeSession.startedAt)/6e4));this.dispatchEvent(new CustomEvent("end-session",{bubbles:!0,composed:!0})),this.recentEndedSession={id:"ended-"+Date.now(),name:(t==null?void 0:t.name)||"Session",mins:e,notes:""},this.toastTimeout&&clearTimeout(this.toastTimeout),this.toastTimeout=setTimeout(()=>{this.recentEndedSession=null,this.requestUpdate()},12e3)}handleDiscard(){this.dispatchEvent(new CustomEvent("discard-session",{bubbles:!0,composed:!0}))}handleSaveToastNotes(t){var s;t.preventDefault();const e=(s=this.shadowRoot)==null?void 0:s.querySelector(".toast-input");if(e&&e.value.trim()&&this.sessions.length>0){const n=this.sessions[0];this.dispatchEvent(new CustomEvent("edit-session",{detail:{session:{...n,notes:e.value.trim()}},bubbles:!0,composed:!0}))}this.recentEndedSession=null}handleQuickPastLog(t,e,s){this.dispatchEvent(new CustomEvent("quick-log-session",{detail:{instrumentId:t,duration:e,daysAgo:s},bubbles:!0,composed:!0}))}toggleMute(t){this.mutedInstruments={...this.mutedInstruments,[t]:!this.mutedInstruments[t]}}renderReasonIcon(t){if(!t)return"";switch(t){case"bolt":return k`<svg viewBox="0 0 24 24" style="width: 11px; height: 11px;" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;case"brain":return k`<svg viewBox="0 0 24 24" style="width: 11px; height: 11px;" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M12 5v13"></path></svg>`;case"scale":return k`<svg viewBox="0 0 24 24" style="width: 11px; height: 11px;" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h18"></path></svg>`;case"sparkles":return k`<svg viewBox="0 0 24 24" style="width: 11px; height: 11px;" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>`;default:return k`<svg viewBox="0 0 24 24" style="width: 11px; height: 11px;" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`}}render(){var f,v,m,b,w,x;const t=Dd(this.sessions,this.instruments,{range:this.range,mutedInstruments:this.mutedInstruments,now:new Date(this.now)}),e=!!this.activeSession,s=e?this.instruments.find(p=>{var _;return p.id===((_=this.activeSession)==null?void 0:_.instrumentId)}):null,n=e?Math.max(0,Math.floor((this.now-(((f=this.activeSession)==null?void 0:f.startedAt)||0))/1e3)):0,i=String(Math.floor(n/60)).padStart(2,"0"),r=String(n%60).padStart(2,"0"),a=`${i}:${r}`,o=t.milestones.find(p=>p.id===this.activeMsId),l=o?o.title:`${t.milestones.filter(p=>p.done&&p.when>0).length} milestones stamped on the calendar above`,c=o?o.done?`${o.detail}${o.dateLabel?` · ${o.dateLabel}`:""}`:`${o.detail} · ${o.pctLabel} of the way`:"Hover or tap any marked calendar day or milestone pill below to view details.",h=o?o.icon:fe.star,u=o&&o.done?o.accent:"#E7E6DF",g=o&&o.done?"#FAFAF7":"#B0AFA4";return k`
      <div class="bench-wrap">

        <!-- Live Start Bar -->
        <div class="live-start-bar ${e?"running":""}">
          ${e?k`
                <div class="running-indicator-wrap">
                  <span class="running-pulse-dot"></span>
                  <div class="running-inst-name">${(s==null?void 0:s.name)||"Instrument"}</div>
                  <div class="running-timer-num">${a}</div>
                </div>

                <div class="running-actions">
                  <button class="btn-discard-link" @click=${this.handleDiscard}>
                    Discard
                  </button>
                  <button class="btn-end-session" @click=${this.handleEnd}>
                    End session
                  </button>
                </div>
              `:k`
                <div class="start-chips-group">
                  ${t.recommendation.rankedQueue.map(p=>k`
                      <div
                        class="inst-chip"
                        @click=${()=>this.handleStart(p.instrumentId)}
                        title="${p.name} (#${p.rank} rank, ${p.score} urgency score) - ${p.reason}"
                      >
                        <span class="inst-dot" style="background: ${p.color};"></span>
                        <span>${p.name}</span>
                        <span style="font-size: 10.5px; color: #767668; margin-left: 2px;">
                          ${p.retentionPct}%
                        </span>
                      </div>
                    `)}
                </div>

                <div class="live-start-actions">
                  <button
                    class="btn-start-primary"
                    @click=${()=>this.handleStart(t.pick.id)}
                  >
                    <span>Start</span>
                    <span>${t.pick.name}</span>
                  </button>

                  <button
                    class="quick-log-toggle-btn"
                    @click=${()=>this.quickLogOpen=!this.quickLogOpen}
                    title="Quick log past practice"
                  >
                    <span>${this.quickLogOpen?"✕ Close log":"+ Quick past log"}</span>
                  </button>
                </div>
              `}
        </div>

        <!-- Quick Past Logging Drawer -->
        ${this.quickLogOpen?k`
              <div class="quick-log-panel">
                <div class="quick-log-header">
                  <span class="quick-log-title">1-Tap Past Practice Log for ${t.pick.name}</span>
                  <button
                    class="btn-discard-link"
                    @click=${()=>{this.quickLogOpen=!1,this.dispatchEvent(new CustomEvent("open-manual-log",{bubbles:!0,composed:!0}))}}
                  >
                    Custom date & notes modal →
                  </button>
                </div>

                <div class="quick-log-rows">
                  <div class="quick-log-row">
                    <span class="quick-log-row-label">Yesterday:</span>
                    ${[15,20,30,45,60].map(p=>k`
                        <span
                          class="quick-chip"
                          @click=${()=>{this.handleQuickPastLog(t.pick.id,p,1),this.quickLogOpen=!1}}
                        >
                          ${p}m
                        </span>
                      `)}
                  </div>
                  <div class="quick-log-row">
                    <span class="quick-log-row-label">2 days ago:</span>
                    ${[15,20,30,45,60].map(p=>k`
                        <span
                          class="quick-chip"
                          @click=${()=>{this.handleQuickPastLog(t.pick.id,p,2),this.quickLogOpen=!1}}
                        >
                          ${p}m
                        </span>
                      `)}
                  </div>
                </div>
              </div>
            `:""}

        <!-- Post-Session Inline Toast -->
        ${this.recentEndedSession?k`
              <div class="post-session-toast">
                <div class="toast-msg">
                  <span>✓</span>
                  <span>Session logged: <strong>${this.recentEndedSession.name}</strong> (${this.recentEndedSession.mins}m)</span>
                </div>
                <form class="toast-notes-form" @submit=${this.handleSaveToastNotes}>
                  <input
                    type="text"
                    class="toast-input"
                    placeholder="Add practice notes or tag (e.g. scales, sweep picking)..."
                    autofocus
                  />
                  <button type="submit" class="btn-toast-save">Save</button>
                  <button
                    type="button"
                    class="btn-toast-close"
                    @click=${()=>this.recentEndedSession=null}
                  >
                    ✕
                  </button>
                </form>
              </div>
            `:""}

        <!-- Range Selection Filter Bar -->
        <div class="range-filter-bar">
          <div class="range-tabs">
            ${["week","month","quarter","year"].map(p=>k`
                <button
                  class="range-tab-btn ${this.range===p?"active":""}"
                  @click=${()=>this.range=p}
                >
                  ${p.charAt(0).toUpperCase()+p.slice(1)}
                </button>
              `)}
          </div>
          <div class="scope-summary-label">
            ${t.scopeCaption} · <strong>${t.scopeTotal}</strong> ·
            <span style="color: ${t.scopeDeltaColor}; font-weight: 700;">
              ${t.scopeDelta}
            </span>
          </div>
        </div>

        <!-- 4-Column Card Grid -->
        <div class="bench-cards-grid">
          <!-- 1. Play This Next Hero Bento Card (Span 4) -->
          <div class="drift-card card-span-4">
            <div class="drift-top-row">
              <span class="drift-tag">SCIENTIFIC PLAY NEXT</span>
              <div style="display: flex; align-items: center; gap: 8px;">
                ${t.pick.reasonDetails?k`
                      <span class="reason-badge">
                        ${this.renderReasonIcon(t.pick.reasonDetails.icon)}
                        ${t.pick.reasonDetails.badge}
                      </span>
                    `:""}
                <button
                  class="reason-info-btn ${this.showReasonWhy?"active":""}"
                  @click=${p=>{p.stopPropagation(),this.showReasonWhy=!this.showReasonWhy}}
                  title="Why was this recommended?"
                >?</button>
              </div>
            </div>

            <div class="drift-hero-grid">
              <!-- Left Column: Spotlight Instrument & Action -->
              <div class="drift-hero-left">
                <div style="display: flex; align-items: flex-end; justify-content: space-between; gap: 12px;">
                  <div>
                    <div class="drift-num-row">
                      <div class="drift-big-num">${t.drift.num}</div>
                      <div class="drift-unit-label">${t.drift.unit}</div>
                    </div>
                  </div>
                  <div style="width: 140px;">
                    <div class="drift-ticks-row">
                      ${t.drift.ticks.map(p=>k`
                          <span class="drift-tick" style="height: ${p.h}; background: ${p.bg};"></span>
                        `)}
                    </div>
                  </div>
                </div>

                <div>
                  <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                    <div class="drift-inst-name">${t.drift.name}</div>
                    ${t.recommendation.topPick?k`
                          <span class="rank-badge" style="background: rgba(255, 255, 255, 0.14); color: #F2F1EC;">
                            #${t.recommendation.topPick.rank} Priority
                          </span>
                        `:""}
                  </div>
                  <div class="reason-headline-text">
                    ${t.pick.reasonDetails?t.pick.reasonDetails.headline:t.pick.reason}
                  </div>
                </div>

                ${this.showReasonWhy?k`
                      <div class="reason-why-drawer">
                        <div style="font-weight: 700; font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; color: #F2F1EC; display: flex; justify-content: space-between;">
                          <span>Algorithm Rationale</span>
                          <span>Urgency Score: ${((v=t.recommendation.topPick)==null?void 0:v.score)||0}/100</span>
                        </div>
                        <div style="line-height: 1.4; color: rgba(242, 241, 236, 0.95);">
                          ${((m=t.pick.reasonDetails)==null?void 0:m.explanation)||t.pick.reason}
                        </div>
                        <div style="border-top: 1px dashed rgba(242, 241, 236, 0.2); padding-top: 6px; margin-top: 2px;" class="why-metric-row">
                          <span>Memory Retention: <strong>${((b=t.recommendation.topPick)==null?void 0:b.retentionPct)||0}%</strong></span>
                          <span>Target Share: <strong>${((w=t.recommendation.topPick)==null?void 0:w.targetSharePct)||0}%</strong> (actual: ${((x=t.recommendation.topPick)==null?void 0:x.actualSharePct)||0}%)</span>
                        </div>
                      </div>
                    `:""}

                <button class="btn-drift-action" @click=${()=>this.handleStart(t.drift.id)}>
                  <span>Pick up ${t.drift.name}</span>
                  <svg viewBox="0 0 24 24" style="width: 15px; height: 15px;" fill="none" stroke="#23241F" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4.5 12h14M13 6.5l5.5 5.5L13 17.5"></path>
                  </svg>
                </button>
              </div>

              <!-- Right Column: Priority Queue Spotlight -->
              <div class="drift-hero-right">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-size: 9.5px; font-weight: 800; letter-spacing: 0.1em; opacity: 0.75; text-transform: uppercase;">
                    Scientific Priority Queue
                  </span>
                  <span style="font-size: 11px; opacity: 0.65; font-weight: 700;">
                    ${t.recommendation.rankedQueue.length} Active
                  </span>
                </div>

                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${t.recommendation.rankedQueue.slice(0,4).map((p,_)=>k`
                      <div
                        class="queue-hero-row"
                        @click=${()=>this.handleStart(p.instrumentId)}
                        title="${p.reasonDetails?p.reasonDetails.explanation:p.reason}"
                      >
                        <div style="display: flex; align-items: center; gap: 8px; min-width: 0;">
                          <span style="font-weight: 800; font-size: 11px; opacity: 0.6; min-width: 16px;">#${_+1}</span>
                          <span style="width: 7px; height: 7px; border-radius: 50%; background: ${p.color}; flex-shrink: 0;"></span>
                          <span style="font-weight: 700; font-size: 12.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: #F2F1EC;">${p.name}</span>
                          ${p.reasonDetails?k`<span class="hero-queue-tag">${p.reasonDetails.badge}</span>`:""}
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
                          <span style="font-size: 11px; opacity: 0.7;">${p.retentionPct}%</span>
                          <span class="hero-score-pill">${p.score}</span>
                        </div>
                      </div>
                    `)}
                </div>
              </div>
            </div>
          </div>

          <!-- 2. Day Streak Card (Span 2) -->
          <div class="bench-card card-span-2">
            <div class="bench-card-header">
              <span class="card-label">Day Streak</span>
              <span class="card-sub-label">best ${t.bestStreak}d</span>
            </div>
            <div class="streak-val-row">
              <div class="streak-huge-num">${t.streak}</div>
              <div class="streak-quip-text">${t.quip}</div>
            </div>
            <div class="bars-14-row">
              ${t.last14.map(p=>k`
                  <div class="bar-14-col">
                    <div
                      class="bar-14-fill"
                      style="height: ${p.h}%; background: ${p.bg};"
                    ></div>
                    <span style="font-size: 9.5px; color: ${p.labelColor}; font-weight: ${p.isToday?700:500};">
                      ${p.label}
                    </span>
                  </div>
                `)}
            </div>
          </div>

          <!-- 2. Lifetime Banked Hours & Ring (Span 2) -->
          <div class="bench-card card-span-2">
            <div class="bench-card-header">
              <span class="card-label">Every hour you have logged</span>
              <span class="card-sub-label">${t.nextMile} goal</span>
            </div>
            <div class="banked-card-body">
              <div class="ring-svg-wrap">
                <svg viewBox="0 0 118 118" style="width: 100%; height: 100%; transform: rotate(-90deg);">
                  <circle cx="59" cy="59" r="52" fill="none" stroke="#E4E3DD" stroke-width="8"></circle>
                  <circle
                    cx="59"
                    cy="59"
                    r="52"
                    fill="none"
                    stroke="#6B7F6E"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-dasharray="${t.ringDash}"
                  ></circle>
                  <circle
                    cx="${t.capX}"
                    cy="${t.capY}"
                    r="5"
                    fill="#6B7F6E"
                    opacity="0.3"
                    style="transform-box: fill-box; transform-origin: center; animation: halo 6s ease-out infinite;"
                  ></circle>
                </svg>
                <div class="ring-center-content">
                  <div class="ring-life-num">${t.lifeHours}</div>
                  <div class="ring-life-tag">BANKED</div>
                </div>
              </div>
              <div style="min-width: 0;">
                <div class="banked-info-title">${t.mileGap} to ${t.nextMile}</div>
                <div class="banked-info-sub">${t.lifeSub}</div>
              </div>
            </div>
          </div>

          <!-- 3. One Session Away (Span 4) -->
          <div class="bench-card card-span-4">
            <div class="bench-card-header">
              <span class="card-label">One Session Away</span>
              <span class="card-sub-label">shortest first · tap to start</span>
            </div>
            <div class="one-away-grid">
              ${t.oneAway.map(p=>k`
                  <div class="one-away-item" @click=${()=>this.handleStart(p.instId)}>
                    <div class="one-away-top">
                      <div class="one-away-big">${p.big}</div>
                      <div class="one-away-inst">
                        <span style="width: 7px; height: 7px; border-radius: 50%; background: ${p.instColor}; flex-shrink: 0;"></span>
                        <span style="font-size: 13px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                          ${p.instName}
                        </span>
                      </div>
                    </div>
                    <div class="one-away-desc">${p.text}</div>
                  </div>
                `)}
            </div>
          </div>

          <!-- 4. Stacked Range Bar Chart (Span 4) -->
          <div class="bench-card card-span-4">
            <div class="bench-card-header">
              <span class="card-label">${t.chartTitle}</span>
              <span class="card-sub-label">peak ${t.peakLabel}</span>
            </div>
            <div class="stacked-chart-area">
              ${t.buckets.map(p=>k`
                  <div class="stacked-bar-col">
                    ${p.segments.map(_=>k`
                        <span
                          class="stacked-segment"
                          style="height: ${_.h}%; background: ${_.color};"
                        ></span>
                      `)}
                  </div>
                `)}
            </div>
            <div class="stacked-labels-row">
              ${t.buckets.map(p=>k`
                  <span
                    class="stacked-label-item"
                    style="color: ${p.labelColor}; font-weight: ${p.labelWeight};"
                  >
                    ${p.label}
                  </span>
                `)}
            </div>
          </div>

          <!-- 5. 26-Week Calendar Heatmap with Milestone Pins (Span 4) -->
          <div class="bench-card card-span-4">
            <div class="bench-card-header">
              <span class="card-label">Every Day on Record · Milestones Marked Where They Landed</span>
              <span class="card-sub-label">${t.heatSince}</span>
            </div>
            <div class="heatmap-grid">
              ${t.heatMarked.map(p=>k`
                  <div
                    class="heat-cell"
                    style="background: ${p.bg}; opacity: ${p.op}; outline: ${p.ring}; outline-offset: 1px; animation: ${p.anim}; cursor: ${p.cursor};"
                    @mouseenter=${()=>{p.milestoneId&&(this.activeMsId=p.milestoneId)}}
                    @mouseleave=${()=>{this.activeMsId===p.milestoneId&&(this.activeMsId=null)}}
                    @click=${()=>{p.milestoneId&&(this.activeMsId=this.activeMsId===p.milestoneId?null:p.milestoneId)}}
                  >
                    ${p.mark?k`
                          <svg viewBox="0 0 24 24" fill="none" stroke="${p.markStroke}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="${p.icon}"></path>
                          </svg>
                        `:""}
                  </div>
                `)}
            </div>
            <div class="heat-months-row">
              ${t.heatMonths.map(p=>k`<div>${p.label}</div>`)}
            </div>

            <!-- Interactive Milestone Preview Banner -->
            <div class="ms-preview-banner">
              <div class="ms-badge-icon-box" style="background: ${u};">
                <svg viewBox="0 0 24 24" style="width: 20px; height: 20px;" fill="none" stroke="${g}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="${h}"></path>
                </svg>
              </div>
              <div style="min-width: 0;">
                <div style="font-size: 14.5px; font-weight: 700; letter-spacing: -0.015em;">
                  ${l}
                </div>
                <div style="font-size: 12.5px; color: #767668; margin-top: 3px;">
                  ${c}
                </div>
              </div>
            </div>

            <!-- Milestone Legend Pills -->
            <div class="bench-card-header" style="margin-top: 18px; margin-bottom: 6px;">
              <span class="card-label">Milestones · Greyed Out Means Not Yet</span>
              <span class="card-sub-label">${t.msCount}</span>
            </div>
            <div class="ms-legend-wrap">
              ${t.milestones.map(p=>k`
                  <div
                    class="ms-legend-pill"
                    style="border: ${this.activeMsId===p.id?"1px solid #23241F":`1px solid ${p.done?p.accent+"3D":"#E4E3DC"}`}; background: ${this.activeMsId===p.id?"#F4F3ED":"transparent"};"
                    @mouseenter=${()=>this.activeMsId=p.id}
                    @mouseleave=${()=>{this.activeMsId===p.id&&(this.activeMsId=null)}}
                    @click=${()=>{this.activeMsId=this.activeMsId===p.id?null:p.id}}
                  >
                    <span class="ms-legend-icon-mini" style="background: ${p.done?p.accent:"#E7E6DF"};">
                      <svg viewBox="0 0 24 24" style="width: 12px; height: 12px;" fill="none" stroke="${p.done?"#FAFAF7":"#B0AFA4"}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                        <path d="${p.icon}"></path>
                      </svg>
                    </span>
                    <span style="font-size: 11.5px; color: ${p.done?"#4A4945":"#A3A297"};">
                      ${p.title}
                    </span>
                    <span style="font-size: 10px; color: #A3A297;">
                      ${p.done?p.dateLabel||"cleared":p.pctLabel}
                    </span>
                  </div>
                `)}
            </div>
          </div>

          <!-- 6. This Week vs Your Median (Span 2) -->
          <div class="bench-card card-span-2">
            <div class="bench-card-header">
              <span class="card-label">This Week vs Your Median</span>
              <span style="font-size: 11.5px; font-weight: 700; color: ${t.paceColor};">
                ${t.paceDelta}
              </span>
            </div>
            <div style="display: flex; align-items: baseline; gap: 9px; margin-top: 4px;">
              <div style="font-size: 34px; font-weight: 700; letter-spacing: -0.03em;">
                ${t.weekTotal}
              </div>
              <div style="font-size: 13px; color: #767668;">of ${t.goalLabel} goal</div>
            </div>
            <svg viewBox="0 0 320 90" class="pace-svg-box">
              <polyline
                points="${t.medianPts}"
                fill="none"
                stroke="#C9C8BF"
                stroke-width="2"
                stroke-dasharray="5 5"
                stroke-linecap="round"
              ></polyline>
              <polyline
                points="${t.actualPts}"
                fill="none"
                stroke="#23241F"
                stroke-width="2.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></polyline>
            </svg>
          </div>

          <!-- 7. Your Week, Averaged (Weekday Fingerprint) (Span 2) -->
          <div class="bench-card card-span-2">
            <div class="bench-card-header">
              <span class="card-label">Your Week, Averaged</span>
              <span class="card-sub-label">fingerprint</span>
            </div>
            <div class="dow-bars-box">
              ${t.dow.map(p=>k`
                  <div class="dow-col">
                    <div style="font-size: 10px; color: #767668;">${p.val}</div>
                    <div class="dow-bar-fill" style="height: ${p.h}%; background: ${p.bg};"></div>
                    <div style="font-size: 11px; font-weight: ${p.strong}; color: #4A4945;">
                      ${p.label}
                    </div>
                  </div>
                `)}
            </div>
            <div style="font-size: 12.5px; color: #767668; margin-top: 12px; line-height: 1.45;">
              ${t.dowBestLabel} is your strongest day. ${t.dowWorstLabel} is where the hours go missing.
            </div>
          </div>

          <!-- 8. Records Shelf (Span 2) -->
          <div class="bench-card card-span-2">
            <div class="bench-card-header">
              <span class="card-label">Records</span>
              <span class="card-sub-label">${t.freshCount}</span>
            </div>
            <div class="records-2x2-grid">
              ${t.records.map(p=>k`
                  <div>
                    <div class="record-k-tag">
                      <span>${p.k}</span>
                      ${p.fresh?k`<span class="record-pill-new">NEW</span>`:""}
                    </div>
                    <div class="record-v-val">${p.v}</div>
                    <div class="record-sub-text">${p.sub}</div>
                  </div>
                `)}
            </div>
            <div class="records-fresh-footer">
              <span class="records-accent-bar"></span>
              <div style="font-size: 12.5px; color: #5A594F; line-height: 1.5;">
                ${t.freshLine}
              </div>
            </div>
          </div>

          <!-- 9. How Long You Actually Play (Session Length Histogram) (Span 2) -->
          <div class="bench-card card-span-2">
            <div class="bench-card-header">
              <span class="card-label">How Long You Actually Play</span>
              <span class="card-sub-label">distribution</span>
            </div>
            <div class="dow-bars-box">
              ${t.hist.map(p=>k`
                  <div class="dow-col">
                    <div style="font-size: 10.5px; color: #767668;">${p.n}</div>
                    <div class="dow-bar-fill" style="height: ${p.h}%; background: ${p.bg};"></div>
                    <div style="font-size: 10.5px; color: #4A4945;">${p.label}</div>
                  </div>
                `)}
            </div>
            <div style="font-size: 12.5px; color: #767668; margin-top: 12px; line-height: 1.45;">
              Most sittings land in ${t.modeLabel}. A longer one is a record waiting.
            </div>
          </div>



          <!-- 11. Kit Share Breakdown & Interactive Mute (Span 2) -->
          <div class="bench-card card-span-2">
            <div class="bench-card-header">
              <span class="card-label">Kit Share · Tap to Mute One</span>
              <span class="card-sub-label">${this.range}</span>
            </div>
            <div class="kit-share-list">
              ${t.instRows.map(p=>k`
                  <div
                    class="kit-share-row"
                    style="opacity: ${p.opacity};"
                    @click=${()=>this.toggleMute(p.id)}
                    title="${p.isMuted?"Unmute":"Mute"} ${p.name} in chart"
                  >
                    <span class="inst-dot" style="background: ${p.color};"></span>
                    <div style="flex: 1; min-width: 0;">
                      <div style="display: flex; justify-content: space-between; gap: 8px;">
                        <span style="font-size: 12.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                          ${p.name}
                        </span>
                        <span style="font-size: 11.5px; color: #767668; flex-shrink: 0;">
                          ${p.minsLabel} · ${p.shareLabel}
                        </span>
                      </div>
                      <div class="kit-share-progress-track">
                        <span
                          class="kit-share-progress-fill"
                          style="width: ${p.sharePct}%; background: ${p.color};"
                        ></span>
                      </div>
                    </div>
                    <svg width="54" height="22" viewBox="0 0 100 34" preserveAspectRatio="none" style="flex-shrink: 0; overflow: visible;">
                      <polyline
                        points="${p.spark}"
                        fill="none"
                        stroke="${p.color}"
                        stroke-width="3.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        opacity="0.85"
                      ></polyline>
                    </svg>
                  </div>
                `)}
            </div>
          </div>

          <!-- 12. Your Day, By The Hour (24h Rhythm Curve) (Span 4) -->
          <div class="bench-card card-span-4" style="overflow: hidden;">
            <div class="bench-card-header">
              <span class="card-label">Your Day, By The Hour</span>
              <div style="font-size: 12px; color: #767668;">
                <strong style="color: #23241F;">${t.windowShare}</strong> of every minute falls between ${t.windowLabel}
              </div>
            </div>
            <div class="rhythm-svg-wrap">
              <svg viewBox="0 0 720 124" preserveAspectRatio="none" style="width: 100%; height: 124px; display: block;">
                <defs>
                  <linearGradient id="rhythmFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#6B7F6E" stop-opacity="0.34"></stop>
                    <stop offset="100%" stop-color="#6B7F6E" stop-opacity="0.03"></stop>
                  </linearGradient>
                </defs>
                <rect x="${t.bandX}" y="0" width="${t.bandW}" height="124" fill="#8A7B94" opacity="0.11" rx="7"></rect>
                <path d="${t.dayArea}" fill="url(#rhythmFill)"></path>
                <path d="${t.dayCurve}" fill="none" stroke="#4F6353" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <div class="rhythm-now-dot" style="left: ${t.nowLeft}; top: ${t.nowTop};"></div>
              <div class="rhythm-now-halo" style="left: ${t.nowLeft}; top: ${t.nowTop};"></div>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 6px; font-size: 10.5px; color: #A3A297;">
              ${t.dayTicks.map(p=>k`<div>${p.label}</div>`)}
            </div>
          </div>

          <!-- 13. From Your Notes (Themes) (Span 4) -->
          <div class="bench-card card-span-4">
            <div class="bench-card-header">
              <span class="card-label">From Your Notes · What You Have Been Working On</span>
              <span class="card-sub-label">recent tags</span>
            </div>
            <div class="themes-cloud">
              ${t.themes.length>0?t.themes.map(p=>k`
                      <div class="theme-pill">
                        <span class="theme-dot" style="background: ${p.color};"></span>
                        <span style="font-size: ${p.size}; font-weight: 700; letter-spacing: -0.01em; white-space: nowrap;">
                          ${p.name}
                        </span>
                        <span style="font-size: 11px; color: #A3A297; white-space: nowrap;">
                          ${p.mins} · ${p.ago}
                        </span>
                      </div>
                    `):k`
                    <div style="font-size: 13px; color: #767668; padding: 6px 0;">
                      Add session notes or tags when ending practice (e.g. <em>"barre chords"</em>, <em>"Bach invention"</em>) to see themes aggregate here.
                    </div>
                  `}
            </div>
          </div>
        </div>
      </div>
    `}};ne.styles=[Xe,Ne`
      :host {
        display: block;
        animation: fadeOnly 220ms ease-out both;
        padding-bottom: 40px;
        color: #23241F;
        font-family: 'DM Sans', system-ui, sans-serif;
      }

      .bench-wrap {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      }


      /* Live Start Bar */
      .live-start-bar {
        background: #FAFAF7;
        border: 1px solid #E7E6DF;
        border-radius: 22px;
        padding: 14px 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        box-shadow: 0 4px 20px rgba(35, 36, 31, 0.04);
        transition: background-color 240ms ease, border-color 240ms ease;
      }

      .live-start-bar.running {
        background: #F1ECE6;
        border-color: #D6D0C5;
      }

      .start-chips-group {
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
        min-width: 0;
      }

      .inst-chip {
        background: #EFEEE9;
        border: 1px solid #E7E6DF;
        border-radius: 12px;
        padding: 8px 14px;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        font-size: 13px;
        font-weight: 700;
        color: #23241F;
        transition: background-color 150ms ease, transform 150ms ease;
        user-select: none;
      }

      .inst-chip:hover {
        background: #E5E4DC;
        transform: translateY(-1px);
      }

      .inst-chip:active {
        transform: scale(0.97);
      }

      .inst-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .btn-start-primary {
        background: #4F6353;
        color: #F7F6F1;
        border-radius: 13px;
        padding: 11px 20px;
        font-size: 13.5px;
        font-weight: 700;
        cursor: pointer;
        white-space: nowrap;
        flex-shrink: 0;
        border: none;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        transition: background 180ms ease, transform 160ms ease;
      }

      .btn-start-primary:hover {
        background: #435447;
        transform: translateY(-1px);
      }

      .btn-start-primary:active {
        transform: scale(0.97);
      }

      /* Running Active State */
      .running-indicator-wrap {
        display: flex;
        align-items: center;
        gap: 14px;
        min-width: 0;
      }

      .running-pulse-dot {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: #6B7F6E;
        animation: softPulse 2.2s ease-in-out infinite;
        flex-shrink: 0;
      }

      .running-inst-name {
        font-size: 15px;
        font-weight: 700;
        color: #23241F;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .running-timer-num {
        font-size: 26px;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        letter-spacing: -0.02em;
        color: #23241F;
      }

      .running-actions {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .btn-end-session {
        background: #4F6353;
        color: #F7F6F1;
        border-radius: 13px;
        padding: 11px 22px;
        font-size: 13.5px;
        font-weight: 700;
        border: none;
        cursor: pointer;
        transition: background 180ms ease, transform 160ms ease;
      }

      .btn-end-session:hover {
        background: #435447;
        transform: translateY(-1px);
      }

      .btn-discard-link {
        font-size: 12.5px;
        color: #767668;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 6px 8px;
        text-decoration: underline;
      }

      .btn-discard-link:hover {
        color: #B4543C;
      }

      /* Live Start Actions Group */
      .live-start-actions {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      /* Quick Past Logging Drawer / Row */
      .quick-log-toggle-btn {
        background: transparent;
        border: 1px dashed #C9C8BF;
        border-radius: 12px;
        padding: 8px 12px;
        font-size: 12px;
        font-weight: 600;
        color: #767668;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: all 160ms ease;
      }

      .quick-log-toggle-btn:hover {
        border-color: #767668;
        color: #23241F;
        background: #F4F3ED;
      }

      .quick-log-panel {
        background: #FAFAF7;
        border: 1px solid #E7E6DF;
        border-radius: 18px;
        padding: 16px 20px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        animation: riseIn 240ms ease-out both;
      }

      .quick-log-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .quick-log-title {
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.08em;
        color: #767668;
        text-transform: uppercase;
      }

      .quick-log-rows {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .quick-log-row {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
      }

      .quick-log-row-label {
        font-size: 12.5px;
        font-weight: 700;
        color: #4A4945;
        min-width: 90px;
      }

      .quick-chip {
        background: #EFEEE9;
        border-radius: 9px;
        padding: 6px 12px;
        font-size: 12px;
        font-weight: 700;
        color: #23241F;
        cursor: pointer;
        transition: background 140ms ease, transform 140ms ease;
        border: 1px solid #E7E6DF;
      }

      .quick-chip:hover {
        background: #4F6353;
        color: #F7F6F1;
        border-color: #4F6353;
        transform: translateY(-1px);
      }

      /* Post-Session Inline Toast */
      .post-session-toast {
        background: #23241F;
        color: #F2F1EC;
        border-radius: 16px;
        padding: 14px 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        animation: riseIn 260ms cubic-bezier(0.16, 1, 0.3, 1) both;
        box-shadow: 0 10px 30px rgba(35, 36, 31, 0.2);
        flex-wrap: wrap;
      }

      .toast-msg {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 13.5px;
      }

      .toast-msg strong {
        color: #9FAF95;
      }

      .toast-notes-form {
        display: flex;
        align-items: center;
        gap: 8px;
        flex: 1;
        min-width: 200px;
        max-width: 400px;
      }

      .toast-input {
        flex: 1;
        background: rgba(255, 255, 255, 0.12);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        padding: 8px 12px;
        font-size: 12.5px;
        color: #F2F1EC;
        outline: none;
      }

      .toast-input::placeholder {
        color: rgba(255, 255, 255, 0.45);
      }

      .toast-input:focus {
        border-color: #9FAF95;
      }

      .btn-toast-save {
        background: #9FAF95;
        color: #23241F;
        border: none;
        border-radius: 9px;
        padding: 8px 14px;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
      }

      .btn-toast-close {
        background: transparent;
        border: none;
        color: rgba(255, 255, 255, 0.6);
        cursor: pointer;
        font-size: 16px;
        padding: 4px;
      }

      .btn-toast-close:hover {
        color: #F2F1EC;
      }

      /* Range Filter Header */
      .range-filter-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
        padding: 4px 2px;
      }

      .range-tabs {
        display: flex;
        background: #E4E3DD;
        border-radius: 14px;
        padding: 4px;
        gap: 4px;
      }

      .range-tab-btn {
        padding: 8px 18px;
        border-radius: 10px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        background: transparent;
        color: #767668;
        transition: background-color 180ms ease-out, color 180ms ease-out;
      }

      .range-tab-btn.active {
        background: #FAFAF7;
        color: #23241F;
        box-shadow: 0 2px 6px rgba(35, 36, 31, 0.05);
      }

      .scope-summary-label {
        font-size: 12px;
        color: #767668;
      }

      .scope-summary-label strong {
        font-weight: 700;
        color: #23241F;
      }

      /* Card Grid */
      .bench-cards-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
      }

      @media (max-width: 768px) {
        .bench-cards-grid {
          grid-template-columns: 1fr;
        }
      }

      .card-span-1 { grid-column: span 1; }
      .card-span-2 { grid-column: span 2; }
      .card-span-4 { grid-column: span 4; }

      @media (max-width: 768px) {
        .card-span-1, .card-span-2, .card-span-4 {
          grid-column: span 1 !important;
        }
      }

      .bench-card {
        background: #FAFAF7;
        border-radius: 22px;
        padding: 22px;
        display: flex;
        flex-direction: column;
        border: 1px solid #EBEAE3;
        box-shadow: 0 4px 16px rgba(35, 36, 31, 0.03);
      }

      .bench-card-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 10px;
        margin-bottom: 12px;
      }

      .card-label {
        font-size: 9.5px;
        letter-spacing: 0.13em;
        color: #A3A297;
        font-weight: 700;
        text-transform: uppercase;
      }

      .card-sub-label {
        font-size: 11px;
        color: #A3A297;
      }

      .queue-toggle-btn {
        background: transparent;
        border: none;
        color: #4F6353;
        font-size: 11.5px;
        font-weight: 700;
        cursor: pointer;
        padding: 6px 0 0;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        outline: none;
      }

      .queue-toggle-btn:hover {
        color: #23241F;
      }

      .queue-list-table {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px dashed #E0DFD7;
      }

      .queue-item-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 6px 10px;
        background: #FAFAF7;
        border-radius: 10px;
        border: 1px solid #EAE8E1;
        font-size: 12px;
        cursor: pointer;
        transition: background-color 140ms ease;
      }

      .queue-item-row:hover {
        background: #F0EFEA;
      }

      .queue-item-meta {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .queue-score-pill {
        font-size: 10.5px;
        font-weight: 800;
        background: #23241F;
        color: #FAFAF7;
        padding: 2px 6px;
        border-radius: 6px;
      }

      /* Day Streak Card */
      .streak-val-row {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;
        margin-top: 4px;
      }

      .streak-huge-num {
        font-size: 62px;
        font-weight: 700;
        letter-spacing: -0.05em;
        line-height: 0.9;
        color: #23241F;
      }

      .streak-quip-text {
        font-family: 'Instrument Serif', serif;
        font-style: italic;
        font-size: 17px;
        color: #767668;
        text-align: right;
        max-width: 18ch;
        line-height: 1.25;
      }

      .bars-14-row {
        display: flex;
        gap: 5px;
        margin-top: 18px;
      }

      .bar-14-col {
        flex: 1;
        height: 32px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        gap: 4px;
      }

      .bar-14-fill {
        width: 100%;
        border-radius: 3px;
        transition: height 300ms ease;
      }

      /* Banked Hours Ring Card */
      .banked-card-body {
        display: flex;
        align-items: center;
        gap: 22px;
        margin-top: 4px;
      }

      .ring-svg-wrap {
        position: relative;
        width: 118px;
        height: 118px;
        flex-shrink: 0;
      }

      .ring-center-content {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1px;
      }

      .ring-life-num {
        font-size: 27px;
        font-weight: 700;
        letter-spacing: -0.03em;
        line-height: 1;
      }

      .ring-life-tag {
        font-size: 9px;
        letter-spacing: 0.12em;
        color: #A3A297;
        font-weight: 700;
      }

      .banked-info-title {
        font-size: 19px;
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.25;
        margin-top: 4px;
      }

      .banked-info-sub {
        font-size: 12.5px;
        color: #767668;
        margin-top: 6px;
        line-height: 1.45;
      }

      /* One Session Away */
      .one-away-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 14px;
        margin-top: 6px;
      }

      @media (max-width: 640px) {
        .one-away-grid {
          grid-template-columns: 1fr;
        }
      }

      .one-away-item {
        border: 1px solid #E7E6DF;
        border-radius: 16px;
        padding: 16px;
        cursor: pointer;
        transition: background-color 160ms ease-out, border-color 160ms ease-out, transform 160ms ease;
      }

      .one-away-item:hover {
        background: #F4F3ED;
        border-color: #D9D8CF;
        transform: translateY(-2px);
      }

      .one-away-top {
        display: flex;
        align-items: baseline;
        gap: 9px;
      }

      .one-away-big {
        font-size: 28px;
        font-weight: 700;
        letter-spacing: -0.04em;
        line-height: 1;
        color: #23241F;
      }

      .one-away-inst {
        display: flex;
        align-items: center;
        gap: 6px;
        min-width: 0;
      }

      .one-away-desc {
        font-size: 13px;
        color: #5A594F;
        margin-top: 8px;
        line-height: 1.45;
      }

      /* Drift Card (Play This Next) */
      .drift-card {
        background: #4F6353;
        color: #F2F1EC;
        border-radius: 22px;
        padding: 22px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 18px;
        position: relative;
        overflow: hidden;
      }

      .drift-top-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }

      .drift-tag {
        font-size: 9.5px;
        letter-spacing: 0.13em;
        font-weight: 700;
        opacity: 0.7;
      }

      .drift-num-row {
        display: flex;
        align-items: flex-end;
        gap: 10px;
        line-height: 0.84;
      }

      .drift-big-num {
        font-size: 72px;
        font-weight: 700;
        letter-spacing: -0.055em;
      }

      .drift-unit-label {
        font-size: 13px;
        font-weight: 700;
        opacity: 0.72;
        padding-bottom: 6px;
      }

      .drift-ticks-row {
        display: flex;
        align-items: flex-end;
        gap: 4px;
        height: 30px;
      }

      .drift-tick {
        flex: 1;
        border-radius: 3px;
      }

      .drift-inst-name {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -0.03em;
        line-height: 1.1;
      }

      .drift-ago-sub {
        font-size: 12.5px;
        opacity: 0.7;
        margin-top: 4px;
      }

      .reason-badge {
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        background: rgba(242, 241, 236, 0.16);
        color: #F2F1EC;
        padding: 3px 9px;
        border-radius: 8px;
        border: 1px solid rgba(242, 241, 236, 0.22);
        display: inline-flex;
        align-items: center;
        gap: 5px;
        white-space: nowrap;
      }

      .reason-headline-text {
        font-size: 13.5px;
        font-weight: 700;
        color: #F2F1EC;
        margin-top: 6px;
      }

      .reason-explanation-text {
        font-size: 12.5px;
        color: rgba(242, 241, 236, 0.82);
        line-height: 1.4;
        margin-top: 3px;
      }

      .queue-reason-tag {
        font-size: 9.5px;
        font-weight: 800;
        letter-spacing: 0.06em;
        background: #E8E7E0;
        color: #4A4945;
        padding: 2px 6px;
        border-radius: 5px;
        text-transform: uppercase;
        white-space: nowrap;
      }

      .reason-info-btn {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: rgba(242, 241, 236, 0.18);
        border: 1px solid rgba(242, 241, 236, 0.3);
        color: #F2F1EC;
        font-size: 11px;
        font-weight: 800;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: background-color 160ms ease, color 160ms ease;
        padding: 0;
        line-height: 1;
        outline: none;
      }

      .reason-info-btn:hover,
      .reason-info-btn.active {
        background: #F2F1EC;
        color: #23241F;
      }

      .reason-why-drawer {
        background: rgba(0, 0, 0, 0.25);
        border: 1px solid rgba(242, 241, 236, 0.16);
        border-radius: 12px;
        padding: 12px 14px;
        margin-top: 6px;
        font-size: 12px;
        color: rgba(242, 241, 236, 0.92);
        display: flex;
        flex-direction: column;
        gap: 8px;
        animation: riseIn 180ms ease-out both;
      }

      .why-metric-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 11px;
        color: rgba(242, 241, 236, 0.8);
      }

      .drift-hero-grid {
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 24px;
        align-items: start;
      }

      @media (max-width: 820px) {
        .drift-hero-grid {
          grid-template-columns: 1fr;
          gap: 18px;
        }
      }

      .drift-hero-left {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .drift-hero-right {
        background: rgba(0, 0, 0, 0.22);
        border: 1px solid rgba(242, 241, 236, 0.14);
        border-radius: 16px;
        padding: 16px 18px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .queue-hero-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 8px 10px;
        background: rgba(255, 255, 255, 0.07);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        cursor: pointer;
        transition: background 140ms ease, transform 140ms ease;
      }

      .queue-hero-row:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateX(2px);
      }

      .hero-queue-tag {
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.05em;
        background: rgba(242, 241, 236, 0.18);
        color: #F2F1EC;
        padding: 2px 5px;
        border-radius: 4px;
        text-transform: uppercase;
        white-space: nowrap;
      }

      .hero-score-pill {
        font-size: 10px;
        font-weight: 800;
        background: #F2F1EC;
        color: #23241F;
        padding: 2px 6px;
        border-radius: 5px;
      }

      .btn-drift-action {
        background: #F2F1EC;
        color: #23241F;
        border-radius: 12px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-size: 13.5px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        transition: background 180ms ease, transform 180ms ease;
      }

      .btn-drift-action:hover {
        background: #FFFFFF;
        transform: translateY(-1px);
      }

      /* Stacked Bar Chart */
      .stacked-chart-area {
        display: flex;
        align-items: flex-end;
        gap: 6px;
        height: 140px;
        margin-top: 10px;
      }

      .stacked-bar-col {
        flex: 1;
        min-width: 0;
        height: 100%;
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-start;
        gap: 2px;
      }

      .stacked-segment {
        display: block;
        border-radius: 4px;
        transition: height 240ms ease;
      }

      .stacked-labels-row {
        display: flex;
        gap: 6px;
        margin-top: 8px;
      }

      .stacked-label-item {
        flex: 1;
        min-width: 0;
        text-align: center;
        font-size: 10px;
        white-space: nowrap;
        overflow: hidden;
      }

      /* Kit Share & Sparks */
      .kit-share-list {
        display: flex;
        flex-direction: column;
        margin-top: 6px;
      }

      .kit-share-row {
        display: flex;
        align-items: center;
        gap: 11px;
        padding: 10px 0;
        cursor: pointer;
        border-top: 1px solid #EDECE6;
        transition: opacity 180ms ease-out;
      }

      .kit-share-row:first-child {
        border-top: none;
      }

      .kit-share-progress-track {
        height: 4px;
        border-radius: 3px;
        background: #EDECE6;
        margin-top: 5px;
        overflow: hidden;
      }

      .kit-share-progress-fill {
        display: block;
        height: 100%;
        border-radius: 3px;
        transition: width 300ms cubic-bezier(0.16, 1, 0.3, 1);
      }

      /* Heatmap & Milestones */
      .heatmap-grid {
        display: grid;
        grid-template-rows: repeat(7, 1fr);
        grid-auto-flow: column;
        gap: 3px;
        margin-top: 10px;
        overflow-x: auto;
        padding-bottom: 4px;
      }

      .heat-cell {
        aspect-ratio: 1;
        min-width: 14px;
        min-height: 14px;
        border-radius: 3px;
        position: relative;
        transition: transform 120ms ease;
      }

      .heat-cell svg {
        position: absolute;
        inset: 12%;
        width: 76%;
        height: 76%;
      }

      .heat-months-row {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
        font-size: 10px;
        color: #A3A297;
        letter-spacing: 0.06em;
      }

      .ms-preview-banner {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 16px;
        border-top: 1px solid #EDECE6;
        padding-top: 14px;
      }

      .ms-badge-icon-box {
        width: 36px;
        height: 36px;
        border-radius: 11px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .ms-legend-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
        margin-top: 12px;
      }

      .ms-legend-pill {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        border-radius: 999px;
        padding: 4px 11px 4px 5px;
        cursor: pointer;
        font-size: 11px;
        font-weight: 700;
        transition: transform 140ms ease, background 140ms ease;
        user-select: none;
      }

      .ms-legend-pill:hover {
        transform: translateY(-1px);
      }

      .ms-legend-icon-mini {
        width: 20px;
        height: 20px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      /* Pace & Weekday Cards */
      .pace-svg-box {
        width: 100%;
        height: 80px;
        margin-top: 8px;
        overflow: visible;
      }

      .dow-bars-box {
        display: flex;
        align-items: flex-end;
        gap: 7px;
        height: 86px;
        margin-top: 10px;
      }

      .dow-col {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        height: 100%;
        justify-content: flex-end;
      }

      .dow-bar-fill {
        width: 100%;
        border-radius: 4px;
        transition: height 240ms ease;
      }

      /* Records Grid */
      .records-2x2-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 14px 12px;
        margin-top: 10px;
      }

      .record-k-tag {
        font-size: 8.5px;
        letter-spacing: 0.12em;
        color: #A3A297;
        font-weight: 700;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 5px;
      }

      .record-pill-new {
        font-size: 7.5px;
        letter-spacing: 0.1em;
        font-weight: 700;
        color: #B4543C;
        background: #F7E9E4;
        border-radius: 4px;
        padding: 2px 5px;
      }

      .record-v-val {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.03em;
        margin-top: 4px;
        color: #23241F;
      }

      .record-sub-text {
        font-size: 11px;
        color: #767668;
        margin-top: 2px;
      }

      .records-fresh-footer {
        display: flex;
        gap: 9px;
        margin-top: 14px;
        border-top: 1px solid #EDECE6;
        padding-top: 12px;
      }

      .records-accent-bar {
        width: 3px;
        border-radius: 2px;
        background: #B4543C;
        flex-shrink: 0;
      }

      /* 24h Rhythm Curve */
      .rhythm-svg-wrap {
        position: relative;
        margin-top: 12px;
        width: 100%;
      }

      .rhythm-now-dot {
        position: absolute;
        width: 8px;
        height: 8px;
        margin: -4px 0 0 -4px;
        border-radius: 50%;
        background: #4F6353;
        animation: breathe 5.4s ease-in-out infinite;
      }

      .rhythm-now-halo {
        position: absolute;
        width: 8px;
        height: 8px;
        margin: -4px 0 0 -4px;
        border-radius: 50%;
        background: #4F6353;
        opacity: 0.3;
        animation: halo 5.4s ease-out infinite;
      }

      /* Notes Themes */
      .themes-cloud {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 10px;
        align-items: baseline;
      }

      .theme-pill {
        display: flex;
        align-items: center;
        gap: 7px;
        border: 1px solid #E4E3DC;
        border-radius: 999px;
        padding: 6px 13px;
        background: #FAFAF7;
      }

      .theme-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      /* Mobile Phone Mode (< 640px) */
      @media (max-width: 640px) {
        .bench-wrap {
          gap: 12px;
          min-width: 0;
          max-width: 100%;
        }

        .live-start-bar {
          flex-direction: column;
          align-items: stretch;
          padding: 14px 14px 12px;
          border-radius: 18px;
          gap: 10px;
          min-width: 0;
          max-width: 100%;
        }

        .live-start-bar.running {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }

        .live-start-actions {
          flex-direction: column;
          align-items: stretch;
          width: 100%;
          gap: 8px;
          order: -1;
        }

        .btn-start-primary {
          width: 100%;
          height: 48px;
          justify-content: center;
          font-size: 14.5px;
        }

        .quick-log-toggle-btn {
          width: 100%;
          justify-content: center;
          height: 40px;
        }

        .start-chips-group {
          justify-content: center;
          gap: 6px;
          width: 100%;
        }

        .inst-chip {
          padding: 7px 11px;
          font-size: 11.5px;
          border-radius: 10px;
        }

        .bench-cards-grid {
          grid-template-columns: 1fr;
          gap: 12px;
          min-width: 0;
          max-width: 100%;
        }

        .bench-card {
          padding: 18px 16px;
          border-radius: 18px;
          min-width: 0;
          max-width: 100%;
        }

        .streak-huge-num {
          font-size: 46px;
        }

        .banked-card-body {
          gap: 16px;
        }

        .ring-svg-wrap {
          width: 92px !important;
          height: 92px !important;
        }

        .ring-life-num {
          font-size: 22px !important;
        }

        .banked-info-title {
          font-size: 17px;
        }

        .one-away-grid {
          grid-template-columns: 1fr;
          gap: 10px;
        }

        .one-away-item {
          padding: 12px 14px;
        }

        .one-away-big {
          font-size: 20px;
          min-width: 44px;
        }

        .stacked-chart-area {
          height: 118px;
        }

        .drift-card {
          padding: 18px 16px;
          border-radius: 18px;
        }

        .drift-big-num {
          font-size: 64px;
        }

        .pace-svg-box {
          height: 70px;
        }

        .dow-bars-box {
          height: 70px;
        }

        .rhythm-svg-wrap svg {
          height: 86px !important;
        }
      }
    `];ue([q({type:Array})],ne.prototype,"instruments",2);ue([q({type:Array})],ne.prototype,"sessions",2);ue([q({type:Object})],ne.prototype,"activeSession",2);ue([q({type:Number})],ne.prototype,"now",2);ue([T()],ne.prototype,"range",2);ue([T()],ne.prototype,"mutedInstruments",2);ue([T()],ne.prototype,"activeMsId",2);ue([T()],ne.prototype,"quickLogOpen",2);ue([T()],ne.prototype,"recentEndedSession",2);ue([T()],ne.prototype,"toastTimeout",2);ue([T()],ne.prototype,"showReasonWhy",2);ne=ue([Ye("pt-main-view")],ne);var Md=Object.defineProperty,Nd=Object.getOwnPropertyDescriptor,Se=(t,e,s,n)=>{for(var i=n>1?void 0:n?Nd(e,s):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(n?a(e,s,i):a(i))||i);return n&&i&&Md(e,s,i),i};let ce=class extends le{constructor(){super(...arguments),this.instruments=[],this.sessions=[],this.newOpen=!1,this.newInstId="",this.newMin=30,this.newDayBack=1,this.newNote="",this.openRowId=null,this.editNoteDraft=""}handleToggleNew(){var t;this.newOpen=!this.newOpen,this.newOpen&&!this.newInstId&&this.instruments.length>0&&(this.newInstId=((t=this.instruments.filter(e=>!e.archived)[0])==null?void 0:t.id)||this.instruments[0].id)}handleAddPastSession(){if(!this.newInstId)return;const e=L(K(new Date),-this.newDayBack);e.setHours(19,0,0,0),this.dispatchEvent(new CustomEvent("save-manual-session",{detail:{instrumentId:this.newInstId,start:e,duration:this.newMin,notes:this.newNote.trim()||void 0},bubbles:!0,composed:!0})),this.newOpen=!1,this.newNote=""}handleToggleRow(t,e){this.openRowId===t?this.openRowId=null:(this.openRowId=t,this.editNoteDraft=e||"")}handleSetDuration(t,e){this.dispatchEvent(new CustomEvent("update-session",{detail:{session:{...t,duration:e}},bubbles:!0,composed:!0}))}handleSaveNotes(t){this.dispatchEvent(new CustomEvent("update-session",{detail:{session:{...t,notes:this.editNoteDraft.trim()||void 0}},bubbles:!0,composed:!0})),this.openRowId=null}handleDelete(t){this.dispatchEvent(new CustomEvent("delete-session",{detail:{sessionId:t},bubbles:!0,composed:!0})),this.openRowId=null}render(){var m;const t=this.instruments.filter(b=>!b.archived),e=new Map;this.instruments.forEach(b=>e.set(b.id,b));const s=b=>e.get(b)||{id:b,name:"Instrument",color:"#6B7F6E",tier:"primary"},n=this.sessions.filter(b=>!b.deletedAt).map(b=>({...b,t:new Date(b.start),min:Math.max(1,b.duration)})).sort((b,w)=>w.t.getTime()-b.t.getTime()),i=n.reduce((b,w)=>b+w.min,0),r=n.length,a=K(new Date),o=b=>Math.round((a.getTime()-K(b).getTime())/864e5),l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],h=b=>{let w=b.getHours();const x=w>=12?"pm":"am";return w=w%12||12,`${w}:${String(b.getMinutes()).padStart(2,"0")}${x}`},u=new Map;n.forEach(b=>{const w=K(b.t).getTime();let x=u.get(w);x||(x={key:w,t:b.t,rows:[],min:0},u.set(w,x)),x.min+=b.min,x.rows.push(b)});const g=Array.from(u.values()),f=[15,30,45,60,90],v=this.newInstId||((m=t[0])==null?void 0:m.id);return k`
      <div class="log-wrap">
        <!-- Summary & Toggle Bar -->
        <div class="log-summary-card">
          <div class="log-header-row">
            <div>
              <div class="log-tag">The Log</div>
              <div class="log-total-title">${M(i)}</div>
              <div class="log-count-sub">${r} sessions logged in total</div>
            </div>
            <button class="btn-toggle-new" @click=${this.handleToggleNew}>
              ${this.newOpen?"✕ Cancel":"+ Log a past session"}
            </button>
          </div>

          <!-- New Past Session Collapsible Form -->
          ${this.newOpen?k`
                <div class="new-panel">
                  <div class="form-section-title">What did you play?</div>
                  <div class="pills-wrap">
                    ${t.map(b=>{const w=v===b.id;return k`
                        <div
                          class="inst-select-pill"
                          style="background: ${w?b.color:"#FBFBF9"}; color: ${w?"#FBFBF9":"#23241F"}; border-color: ${w?b.color:"#E7E6DF"};"
                          @click=${()=>this.newInstId=b.id}
                        >
                          ${b.name}
                        </div>
                      `})}
                  </div>

                  <div style="display: flex; gap: 20px; flex-wrap: wrap; align-items: center;">
                    <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                      ${[{d:0,label:"Today"},{d:1,label:"Yesterday"},{d:2,label:"2 days ago"},{d:3,label:"3 days ago"}].map(b=>k`
                          <button
                            class="chip-btn ${this.newDayBack===b.d?"active":"inactive"}"
                            @click=${()=>this.newDayBack=b.d}
                          >
                            ${b.label}
                          </button>
                        `)}
                    </div>

                    <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                      ${f.map(b=>k`
                          <button
                            class="chip-btn ${this.newMin===b?"active":"inactive"}"
                            @click=${()=>this.newMin=b}
                          >
                            ${b}m
                          </button>
                        `)}
                    </div>
                  </div>

                  <div class="new-inputs-row">
                    <input
                      type="text"
                      class="note-text-input"
                      placeholder="Note / what did you work on? (optional)"
                      .value=${this.newNote}
                      @input=${b=>this.newNote=b.target.value}
                    />
                    <button class="btn-add-log" @click=${this.handleAddPastSession}>
                      Add to the log
                    </button>
                  </div>
                </div>
              `:""}
        </div>

        <!-- Groups List -->
        <div class="log-groups-list">
          ${g.length>0?g.map(b=>{const w=o(b.t),x=w===0?"today":w===1?"yesterday":`${w}d ago`,p=`${l[b.t.getDay()]} ${b.t.getDate()} ${c[b.t.getMonth()]}`;return k`
                  <div class="log-group-card">
                    <div class="group-header">
                      <div class="group-date-title">
                        ${p} <span class="group-rel-tag">· ${x}</span>
                      </div>
                      <div class="group-total-num">${M(b.min)}</div>
                    </div>

                    <div style="display: flex; flex-direction: column;">
                      ${b.rows.map(_=>{const R=s(_.instrumentId),C=this.openRowId===_.id;return k`
                          <div class="log-row-container ${C?"open":""}">
                            <div class="log-row-main" @click=${()=>this.handleToggleRow(_.id,_.notes)}>
                              <div class="row-time">${h(_.t)}</div>
                              <span class="row-dot" style="background: ${R.color};"></span>
                              <div class="row-inst-name">${R.name}</div>
                              <div class="row-duration">${M(_.min)}</div>
                              <div
                                class="row-note"
                                style="color: ${_.notes?"#4A4945":"#B0AFA4"};"
                              >
                                ${_.notes||"add a note"}
                              </div>
                            </div>

                            ${C?k`
                                  <div class="inline-editor-drawer">
                                    <div style="display: flex; align-items: center; gap: 7px; flex-wrap: wrap;">
                                      <span style="font-size: 9.5px; letter-spacing: 0.13em; color: #A3A297; font-weight: 700; margin-right: 4px;">LENGTH</span>
                                      ${f.map(O=>k`
                                          <button
                                            class="chip-btn ${_.min===O?"active":"inactive"}"
                                            @click=${()=>this.handleSetDuration(_,O)}
                                          >
                                            ${O}m
                                          </button>
                                        `)}
                                    </div>

                                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                                      <input
                                        type="text"
                                        class="note-text-input"
                                        style="background: #FFFFFF;"
                                        placeholder="What did you work on?"
                                        .value=${this.editNoteDraft}
                                        @input=${O=>this.editNoteDraft=O.target.value}
                                        @keydown=${O=>{O.key==="Enter"&&this.handleSaveNotes(_)}}
                                      />
                                      <button class="btn-del-row" @click=${()=>this.handleDelete(_.id)}>
                                        Delete
                                      </button>
                                      <button class="btn-done-row" @click=${()=>this.handleSaveNotes(_)}>
                                        Done
                                      </button>
                                    </div>
                                  </div>
                                `:""}
                          </div>
                        `})}
                    </div>
                  </div>
                `}):k`
                <div class="log-summary-card" style="text-align: center; color: #767668; padding: 36px 20px;">
                  No practice sessions logged yet. Use <strong>+ Log a past session</strong> above or start a live timer in <strong>Practice</strong>.
                </div>
              `}
        </div>
      </div>
    `}};ce.styles=[Xe,Ne`
      :host {
        display: block;
        animation: fadeOnly 200ms ease-out both;
        color: #23241F;
        font-family: 'DM Sans', system-ui, sans-serif;
      }

      .log-wrap {
        display: flex;
        flex-direction: column;
        gap: 14px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      }

      .log-summary-card {
        background: #FAFAF7;
        border-radius: 20px;
        padding: 22px;
        border: 1px solid #EBEAE3;
        box-shadow: 0 4px 16px rgba(35, 36, 31, 0.03);
      }

      .log-header-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
      }

      .log-tag {
        font-size: 9.5px;
        letter-spacing: 0.13em;
        color: #A3A297;
        font-weight: 700;
        text-transform: uppercase;
      }

      .log-total-title {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -0.02em;
        margin-top: 6px;
        color: #23241F;
      }

      .log-count-sub {
        font-size: 12px;
        color: #767668;
        margin-top: 3px;
      }

      .btn-toggle-new {
        background: #23241F;
        color: #F2F1EC;
        border-radius: 12px;
        height: 44px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        transition: background 150ms ease, transform 150ms ease;
      }

      .btn-toggle-new:hover {
        background: #3A3B35;
        transform: translateY(-1px);
      }

      /* New Past Practice Form */
      .new-panel {
        background: #FFFFFF;
        border: 1px solid #E7E6DF;
        border-radius: 16px;
        padding: 18px;
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        animation: riseIn 220ms cubic-bezier(0.16, 1, 0.3, 1) both;
      }

      .form-section-title {
        font-size: 9.5px;
        letter-spacing: 0.13em;
        color: #A3A297;
        font-weight: 700;
        text-transform: uppercase;
      }

      .pills-wrap {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
      }

      .inst-select-pill {
        border-radius: 11px;
        padding: 9px 14px;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        transition: all 140ms ease;
        border: 1px solid #E7E6DF;
        user-select: none;
      }

      .chip-btn {
        border-radius: 11px;
        padding: 8px 14px;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        transition: all 140ms ease;
        border: none;
        user-select: none;
      }

      .chip-btn.active {
        background: #23241F;
        color: #F2F1EC;
      }

      .chip-btn.inactive {
        background: #F0EFEA;
        color: #4A4945;
      }

      .chip-btn.inactive:hover {
        background: #E5E4DC;
      }

      .new-inputs-row {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      }

      .note-text-input {
        flex: 1;
        min-width: 200px;
        font-family: inherit;
        font-size: 13.5px;
        color: #23241F;
        background: #F7F6F1;
        border: 1px solid #E7E6DF;
        border-radius: 12px;
        height: 44px;
        padding: 0 14px;
        outline: none;
        transition: border-color 140ms ease;
      }

      .note-text-input:focus {
        border-color: #23241F;
      }

      .btn-add-log {
        background: #4F6353;
        color: #F7F6F1;
        border-radius: 12px;
        height: 44px;
        padding: 0 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        white-space: nowrap;
        transition: background 150ms ease, transform 150ms ease;
      }

      .btn-add-log:hover {
        background: #435447;
        transform: translateY(-1px);
      }

      /* Grouped List */
      .log-groups-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .log-group-card {
        background: #FAFAF7;
        border-radius: 20px;
        padding: 16px 18px;
        border: 1px solid #EBEAE3;
      }

      .group-header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        padding-bottom: 6px;
      }

      .group-date-title {
        font-size: 13px;
        font-weight: 700;
        color: #23241F;
      }

      .group-rel-tag {
        color: #A3A297;
        font-weight: 400;
      }

      .group-total-num {
        font-size: 12px;
        font-weight: 700;
        color: #767668;
      }

      .log-row-container {
        border-top: 1px solid #EDECE6;
        border-radius: 12px;
        transition: background-color 140ms ease;
      }

      .log-row-container.open {
        background: #F2F0EA;
      }

      .log-row-main {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 6px 12px;
        padding: 13px 8px;
        cursor: pointer;
        user-select: none;
      }

      .row-time {
        width: 62px;
        flex-shrink: 0;
        font-size: 12.5px;
        color: #767668;
        font-variant-numeric: tabular-nums;
      }

      .row-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .row-inst-name {
        flex: 1 1 130px;
        min-width: 0;
        font-size: 13.5px;
        font-weight: 700;
        color: #23241F;
      }

      .row-duration {
        width: 60px;
        flex-shrink: 0;
        font-size: 13px;
        font-weight: 700;
        color: #4A4945;
        font-variant-numeric: tabular-nums;
      }

      .row-note {
        flex: 2 1 180px;
        min-width: 0;
        font-family: 'Instrument Serif', serif;
        font-style: italic;
        font-size: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      /* Inline Editor Drawer */
      .inline-editor-drawer {
        padding: 6px 10px 14px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        animation: riseIn 180ms ease-out both;
      }

      .btn-del-row {
        border: 1px solid #E2CFC9;
        color: #B4543C;
        background: transparent;
        border-radius: 12px;
        height: 42px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        transition: background 140ms ease;
      }

      .btn-del-row:hover {
        background: #FDF4F2;
      }

      .btn-done-row {
        background: #23241F;
        color: #F2F1EC;
        border-radius: 12px;
        height: 42px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        transition: background 140ms ease;
      }

      .btn-done-row:hover {
        background: #3A3B35;
      }

      /* Mobile Phone Mode (< 640px) */
      @media (max-width: 640px) {
        .log-summary-card {
          padding: 16px 14px;
          border-radius: 18px;
        }

        .btn-toggle-new {
          width: 100%;
          height: 42px;
        }

        .new-panel {
          padding: 14px 12px;
          border-radius: 14px;
        }

        .new-inputs-row {
          flex-direction: column;
        }

        .btn-add-log {
          width: 100%;
          height: 44px;
        }

        .log-group-card {
          padding: 14px 12px;
          border-radius: 16px;
        }

        .log-row-main {
          padding: 10px 4px;
          gap: 6px 8px;
        }

        .row-time {
          width: 52px;
          font-size: 11.5px;
        }

        .row-inst-name {
          font-size: 13px;
        }

        .row-duration {
          width: 48px;
          font-size: 12px;
        }

        .row-note {
          font-size: 13.5px;
          flex-basis: 100%;
          margin-top: 2px;
        }
      }
    `];Se([q({type:Array})],ce.prototype,"instruments",2);Se([q({type:Array})],ce.prototype,"sessions",2);Se([T()],ce.prototype,"newOpen",2);Se([T()],ce.prototype,"newInstId",2);Se([T()],ce.prototype,"newMin",2);Se([T()],ce.prototype,"newDayBack",2);Se([T()],ce.prototype,"newNote",2);Se([T()],ce.prototype,"openRowId",2);Se([T()],ce.prototype,"editNoteDraft",2);ce=Se([Ye("pt-log-view")],ce);var Ld=Object.defineProperty,Ud=Object.getOwnPropertyDescriptor,bs=(t,e,s,n)=>{for(var i=n>1?void 0:n?Ud(e,s):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(n?a(e,s,i):a(i))||i);return n&&i&&Ld(e,s,i),i};const Bd=["#8A7B94","#6B7F6E","#A98F72","#7D6E7F","#9FAF95","#B4543C"];let gt=class extends le{constructor(){super(...arguments),this.instruments=[],this.sessions=[],this.addName="",this.addColor="#8A7B94"}handleAdd(){const t=this.addName.trim();t&&(this.dispatchEvent(new CustomEvent("add-instrument",{detail:{name:t,color:this.addColor,tier:"primary"},bubbles:!0,composed:!0})),this.addName="")}handleRename(t,e){const s=e.trim();if(!s)return;const n=this.instruments.find(i=>i.id===t);!n||n.name===s||this.dispatchEvent(new CustomEvent("update-instrument",{detail:{instrument:{...n,name:s}},bubbles:!0,composed:!0}))}handleRetire(t){this.dispatchEvent(new CustomEvent("retire-instrument",{detail:{id:t},bubbles:!0,composed:!0}))}handleRestore(t){this.dispatchEvent(new CustomEvent("restore-instrument",{detail:{id:t},bubbles:!0,composed:!0}))}handleMoveRank(t,e){const s=this.instruments.filter(o=>!o.archived&&!o.deletedAt).slice().sort((o,l)=>{const c=o.rank??99,h=l.rank??99;return c!==h?c-h:o.tier!==l.tier?o.tier==="primary"?-1:1:o.name.localeCompare(l.name)}),n=s.findIndex(o=>o.id===t);if(n===-1)return;const i=e==="up"?n-1:n+1;if(i<0||i>=s.length)return;const r=s[n],a=s[i];this.dispatchEvent(new CustomEvent("update-instrument",{detail:{instrument:{...r,rank:i+1}},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("update-instrument",{detail:{instrument:{...a,rank:n+1}},bubbles:!0,composed:!0}))}render(){const t=K(new Date),e=o=>Math.round((t.getTime()-K(o).getTime())/864e5),s=o=>o===0?"today":o===1?"yesterday":o>=99?"never played":`${o}d ago`,n=this.instruments.filter(o=>!o.archived&&!o.deletedAt).slice().sort((o,l)=>{const c=o.rank??99,h=l.rank??99;return c!==h?c-h:o.tier!==l.tier?o.tier==="primary"?-1:1:o.name.localeCompare(l.name)}),i=this.instruments.filter(o=>o.archived),r=o=>{const l=this.sessions.filter(g=>g.instrumentId===o&&!g.deletedAt),c=l.reduce((g,f)=>g+Math.max(1,f.duration),0),h=l.sort((g,f)=>new Date(f.start).getTime()-new Date(g.start).getTime())[0],u=h?new Date(h.start):null;return{hours:c>0?M(c):"nothing yet",last:u?`last played ${s(e(u))}`:"never played"}},a=this.addName.trim().length>0;return k`
      <div class="kit-wrap">
        <!-- Active Kit Card -->
        <div class="kit-card">
          <div class="kit-header-row">
            <span class="kit-tag">Active Kit & Scientific Priority Ranks</span>
            <span class="kit-sub-tag">${n.length} active · use ▲ ▼ to set priority importance</span>
          </div>

          <div class="kit-rows-list">
            ${n.map((o,l)=>{const c=r(o.id);return k`
                <div class="kit-inst-row">
                  <div class="rank-controls">
                    <button
                      class="btn-rank-move"
                      ?disabled=${l===0}
                      @click=${()=>this.handleMoveRank(o.id,"up")}
                      title="Move priority up"
                    >
                      ▲
                    </button>
                    <span class="rank-badge">#${l+1} Priority</span>
                    <button
                      class="btn-rank-move"
                      ?disabled=${l===n.length-1}
                      @click=${()=>this.handleMoveRank(o.id,"down")}
                      title="Move priority down"
                    >
                      ▼
                    </button>
                  </div>
                  <span class="inst-dot" style="background: ${o.color};"></span>
                  <input
                    type="text"
                    class="inst-name-input"
                    .value=${o.name}
                    @change=${h=>this.handleRename(o.id,h.target.value)}
                    @keydown=${h=>{h.key==="Enter"&&h.target.blur()}}
                  />
                  <div class="inst-hours-col">${c.hours}</div>
                  <div class="inst-last-col">${c.last}</div>
                  <button
                    class="btn-retire"
                    @click=${()=>this.handleRetire(o.id)}
                    title="Retire ${o.name} (keeps practice history)"
                  >
                    Retire
                  </button>
                </div>
              `})}
          </div>
        </div>

        <!-- Add to the Kit Card -->
        <div class="add-kit-card">
          <div class="kit-tag">Add to the Kit</div>
          <div class="add-kit-row">
            <input
              type="text"
              class="add-name-input"
              placeholder="Instrument name (e.g. Mandolin, Synthesizer)..."
              .value=${this.addName}
              @input=${o=>this.addName=o.target.value}
              @keydown=${o=>{o.key==="Enter"&&this.handleAdd()}}
            />
            <div class="swatches-wrap">
              ${Bd.map(o=>k`
                  <button
                    class="swatch-circle"
                    style="background: ${o}; box-shadow: ${o===this.addColor?"0 0 0 2px #FAFAF7, 0 0 0 4px #23241F":"none"};"
                    @click=${()=>this.addColor=o}
                    title="Choose ${o}"
                  ></button>
                `)}
            </div>
            <button
              class="btn-add-inst"
              style="opacity: ${a?"1":"0.45"};"
              @click=${this.handleAdd}
            >
              Add
            </button>
          </div>
        </div>

        <!-- Retired Kit Card -->
        ${i.length>0?k`
              <div class="kit-card">
                <div class="kit-header-row">
                  <span class="kit-tag">Retired · History Kept</span>
                  <span class="kit-sub-tag">${i.length} archived</span>
                </div>

                <div class="kit-rows-list">
                  ${i.map(o=>{const l=r(o.id);return k`
                      <div class="kit-inst-row">
                        <span class="inst-dot" style="background: ${o.color}; opacity: 0.4;"></span>
                        <div style="flex: 1 1 140px; min-width: 0; font-size: 15px; font-weight: 700; color: #A3A297;">
                          ${o.name}
                        </div>
                        <div class="inst-hours-col" style="color: #A3A297;">${l.hours}</div>
                        <div class="inst-last-col" style="color: #B0AFA4;">${l.last}</div>
                        <button
                          class="btn-restore"
                          @click=${()=>this.handleRestore(o.id)}
                          title="Bring ${o.name} back to active kit"
                        >
                          Bring back
                        </button>
                      </div>
                    `})}
                </div>
              </div>
            `:""}
      </div>
    `}};gt.styles=[Xe,Ne`
      :host {
        display: block;
        animation: fadeOnly 200ms ease-out both;
        color: #23241F;
        font-family: 'DM Sans', system-ui, sans-serif;
      }

      .kit-wrap {
        display: flex;
        flex-direction: column;
        gap: 14px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      }

      .kit-card {
        background: #FAFAF7;
        border-radius: 20px;
        padding: 22px;
        border: 1px solid #EBEAE3;
        box-shadow: 0 4px 16px rgba(35, 36, 31, 0.03);
      }

      .kit-header-row {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
      }

      .kit-tag {
        font-size: 9.5px;
        letter-spacing: 0.13em;
        color: #A3A297;
        font-weight: 700;
        text-transform: uppercase;
      }

      .kit-sub-tag {
        font-size: 11px;
        color: #A3A297;
      }

      .kit-rows-list {
        display: flex;
        flex-direction: column;
        margin-top: 8px;
      }

      .kit-inst-row {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px 16px;
        padding: 15px 0;
        border-top: 1px solid #EDECE6;
      }

      .inst-dot {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .inst-name-input {
        font-family: inherit;
        font-size: 15px;
        font-weight: 700;
        color: #23241F;
        background: transparent;
        border: 1px solid transparent;
        border-radius: 8px;
        outline: none;
        flex: 1 1 140px;
        min-width: 0;
        padding: 4px 6px;
        margin: -4px -6px;
        transition: border-color 140ms ease, background-color 140ms ease;
      }

      .inst-name-input:focus {
        background: #FFFFFF;
        border-color: #23241F;
      }

      .inst-hours-col {
        width: 96px;
        flex-shrink: 0;
        font-size: 12.5px;
        font-weight: 700;
        color: #4A4945;
        font-variant-numeric: tabular-nums;
      }

      .inst-last-col {
        width: 130px;
        flex-shrink: 0;
        font-size: 12.5px;
        color: #767668;
      }

      .btn-retire {
        border: 1px solid #DDDCD4;
        border-radius: 10px;
        padding: 7px 14px;
        font-size: 11.5px;
        font-weight: 700;
        color: #767668;
        background: transparent;
        cursor: pointer;
        white-space: nowrap;
        transition: background-color 150ms ease-out, color 150ms ease-out;
      }

      .btn-retire:hover {
        background: #F0EFEA;
        color: #23241F;
      }

      .btn-restore {
        border: 1px solid #DDDCD4;
        border-radius: 10px;
        padding: 7px 14px;
        font-size: 11.5px;
        font-weight: 700;
        color: #767668;
        background: transparent;
        cursor: pointer;
        white-space: nowrap;
        transition: background-color 150ms ease-out, color 150ms ease-out;
      }

      .btn-restore:hover {
        background: #F0EFEA;
        color: #23241F;
      }

      /* Add to Kit Card */
      .add-kit-card {
        background: #FFFFFF;
        border-radius: 20px;
        padding: 20px 22px;
        border: 1px solid #EBEAE3;
        box-shadow: 0 4px 16px rgba(35, 36, 31, 0.03);
      }

      .add-kit-row {
        display: flex;
        align-items: center;
        gap: 14px;
        margin-top: 14px;
        flex-wrap: wrap;
      }

      .add-name-input {
        flex: 1 1 200px;
        min-width: 0;
        font-family: inherit;
        font-size: 14.5px;
        font-weight: 700;
        color: #23241F;
        background: #F7F6F1;
        border: 1px solid #E7E6DF;
        border-radius: 12px;
        height: 46px;
        padding: 0 14px;
        outline: none;
        transition: border-color 140ms ease;
      }

      .add-name-input:focus {
        border-color: #23241F;
      }

      .swatches-wrap {
        display: flex;
        gap: 10px;
        align-items: center;
      }

      .swatch-circle {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        cursor: pointer;
        transition: transform 140ms ease, box-shadow 140ms ease;
        border: none;
      }

      .swatch-circle:hover {
        transform: scale(1.15);
      }

      .rank-controls {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .rank-badge {
        font-size: 11px;
        font-weight: 800;
        background: #E8E7E0;
        color: #4A4945;
        padding: 4px 8px;
        border-radius: 8px;
        letter-spacing: 0.02em;
        white-space: nowrap;
      }

      .btn-rank-move {
        background: #EDECE6;
        border: 1px solid #DDDCD4;
        border-radius: 6px;
        width: 26px;
        height: 26px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        color: #4A4945;
        cursor: pointer;
        transition: background-color 140ms ease;
      }

      .btn-rank-move:hover:not(:disabled) {
        background: #DEDDD6;
        color: #23241F;
      }

      .btn-rank-move:disabled {
        opacity: 0.35;
        cursor: default;
      }

      .btn-add-inst {
        background: #4F6353;
        color: #F7F6F1;
        border-radius: 12px;
        height: 46px;
        padding: 0 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13.5px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        white-space: nowrap;
        transition: opacity 160ms ease-out, background 150ms ease;
      }

      .btn-add-inst:hover {
        background: #435447;
      }

      /* Mobile Phone Mode (< 640px) */
      @media (max-width: 640px) {
        .kit-card {
          padding: 16px 14px;
          border-radius: 18px;
        }

        .kit-inst-row {
          padding: 12px 0;
          gap: 6px 10px;
        }

        .inst-name-input {
          font-size: 14px;
        }

        .inst-hours-col {
          width: 80px;
          font-size: 11.5px;
        }

        .inst-last-col {
          width: 90px;
          font-size: 11px;
        }

        .btn-retire, .btn-restore {
          padding: 5px 10px;
          font-size: 11px;
        }

        .add-kit-card {
          padding: 16px 14px;
          border-radius: 18px;
        }

        .add-kit-row {
          flex-direction: column;
          align-items: stretch;
          gap: 10px;
        }

        .add-name-input {
          width: 100%;
          height: 44px;
        }

        .swatches-wrap {
          justify-content: center;
        }

        .btn-add-inst {
          width: 100%;
          height: 44px;
        }
      }
    `];bs([q({type:Array})],gt.prototype,"instruments",2);bs([q({type:Array})],gt.prototype,"sessions",2);bs([T()],gt.prototype,"addName",2);bs([T()],gt.prototype,"addColor",2);gt=bs([Ye("pt-kit-view")],gt);var zd=Object.defineProperty,Hd=Object.getOwnPropertyDescriptor,mt=(t,e,s,n)=>{for(var i=n>1?void 0:n?Hd(e,s):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(n?a(e,s,i):a(i))||i);return n&&i&&zd(e,s,i),i};const qd=[180,300,420,600];let je=class extends le{constructor(){super(...arguments),this.settings={soundEnabled:!0,hapticsEnabled:!0,weekStartsOnSunday:!1,weeklyGoalMinutes:420},this.authState={user:null,accessToken:null,isAuthenticated:!1,isLoading:!1},this.syncStatus="synced",this.sessionCount=0,this.isSyncing=!1,this.magicSentEmail=null}setMagicLinkSent(t){this.magicSentEmail=t}handleOpenAuthModal(){this.dispatchEvent(new CustomEvent("open-auth-modal",{bubbles:!0,composed:!0}))}handleToggle(t){const e={...this.settings,[t]:!this.settings[t]};this.dispatchEvent(new CustomEvent("update-settings",{detail:e,bubbles:!0,composed:!0}))}handleSetGoal(t){const e={...this.settings,weeklyGoalMinutes:t};this.dispatchEvent(new CustomEvent("update-settings",{detail:e,bubbles:!0,composed:!0}))}handleSignOut(){this.dispatchEvent(new CustomEvent("sign-out",{bubbles:!0,composed:!0})),this.magicSentEmail=null}handleSyncNow(){this.isSyncing=!0,this.dispatchEvent(new CustomEvent("sync-now",{bubbles:!0,composed:!0})),setTimeout(()=>{this.isSyncing=!1},1200)}handleExportBackup(){const t=P.exportBackup(),e=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(e),n=document.createElement("a");n.href=s,n.download=`practice-tracker-backup-${new Date().toISOString().slice(0,10)}.json`,n.click(),URL.revokeObjectURL(s)}handleImportClick(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("#import-file-input");t==null||t.click()}handleFileSelected(t){var i;const e=t.target,s=(i=e.files)==null?void 0:i[0];if(!s)return;const n=new FileReader;n.onload=r=>{var o;const a=(o=r.target)==null?void 0:o.result;a&&P.importBackup(a),e.value=""},n.readAsText(s)}handleLoadDemoData(){confirm("Load sample practice history? This will generate demonstration sessions to preview all charts and milestones.")&&P.loadDemoData()}handleClearAllData(){confirm("Clear all practice history from this device? This cannot be undone.")&&P.clearAllData()}render(){var i;const t=this.authState.isAuthenticated,e=((i=this.authState.user)==null?void 0:i.email)||this.settings.userEmail||"",s=(e||"PT").slice(0,2).toUpperCase(),n=this.settings.weeklyGoalMinutes||420;return k`
      <div class="settings-wrap">
        <!-- Account Card -->
        ${t?k`
              <div class="settings-card">
                <div class="acct-row">
                  <div style="display: flex; align-items: center; gap: 16px;">
                    <span class="avatar-circle">${s}</span>
                    <div>
                      <div class="acct-email-title">${e}</div>
                      <div class="acct-sub-text">
                        Signed in · ${this.sessionCount} sessions synced
                      </div>
                    </div>
                  </div>
                  <button class="btn-outline-signout" @click=${this.handleSignOut}>
                    Sign out
                  </button>
                </div>
              </div>
            `:this.magicSentEmail?k`
              <div class="settings-card">
                <div class="inbox-card-stack">
                  <div class="settings-tag">CHECK YOUR INBOX</div>
                  <div class="inbox-title">Magic link sent to ${this.magicSentEmail}</div>
                  <div class="inbox-desc">
                    It expires in fifteen minutes. Open it on the device you want to practise on.
                  </div>
                  <div style="display: flex; gap: 10px; margin-top: 4px; flex-wrap: wrap;">
                    <button class="btn-primary-forest-solid" @click=${this.handleSyncNow}>
                      I opened the link
                    </button>
                    <button
                      class="btn-outline-signout"
                      @click=${()=>this.magicSentEmail=null}
                    >
                      Use another address
                    </button>
                  </div>
                </div>
              </div>
            `:k`
              <div class="settings-card">
                <div class="acct-row">
                  <div>
                    <div style="font-size: 16px; font-weight: 700; letter-spacing: -0.01em;">
                      Guest mode
                    </div>
                    <div class="guest-sub-line">
                      <span class="guest-dot"></span>
                      <span>Local storage only · never synced</span>
                    </div>
                  </div>
                  <button
                    class="btn-signin-forest-outline"
                    @click=${this.handleOpenAuthModal}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            `}

        <!-- Backup Card -->
        <div class="settings-card">
          <div class="settings-tag">BACKUP</div>
          <div class="backup-row">
            <div>
              <div class="backup-state-title">
                ${t?"Cloud backup active":"Local only"}
              </div>
              <div class="backup-detail-sub">
                ${t?`Last synced just now · ${this.sessionCount} sessions held`:"Sign in to keep this history if you lose the device"}
              </div>
            </div>
            <button
              class="btn-outline-signout"
              @click=${this.handleSyncNow}
              ?disabled=${this.isSyncing}
            >
              ${this.isSyncing?"Syncing...":"Sync now"}
            </button>
          </div>
        </div>

        <!-- Preferences Card -->
        <div class="settings-card">
          <div class="settings-tag">PREFERENCES</div>
          <div class="pref-rows-list">
            <!-- Chimes -->
            <div class="pref-row-item" @click=${()=>this.handleToggle("soundEnabled")}>
              <div>
                <div class="pref-name">Chime at the end of a session</div>
                <div class="pref-sub">A soft tone when the timer runs out</div>
              </div>
              <span
                class="toggle-track"
                style="background: ${this.settings.soundEnabled?"#4F6353":"#DDDCD4"};"
              >
                <span
                  class="toggle-knob"
                  style="transform: translateX(${this.settings.soundEnabled?"19px":"0px"});"
                ></span>
              </span>
            </div>

            <!-- Haptics -->
            <div class="pref-row-item" @click=${()=>this.handleToggle("hapticsEnabled")}>
              <div>
                <div class="pref-name">Haptics</div>
                <div class="pref-sub">A tap when a session starts and ends</div>
              </div>
              <span
                class="toggle-track"
                style="background: ${this.settings.hapticsEnabled?"#4F6353":"#DDDCD4"};"
              >
                <span
                  class="toggle-knob"
                  style="transform: translateX(${this.settings.hapticsEnabled?"19px":"0px"});"
                ></span>
              </span>
            </div>

            <!-- Week Start -->
            <div class="pref-row-item" @click=${()=>this.handleToggle("weekStartsOnSunday")}>
              <div>
                <div class="pref-name">Weeks start on Sunday</div>
                <div class="pref-sub">Otherwise Monday, which is what the charts use now</div>
              </div>
              <span
                class="toggle-track"
                style="background: ${this.settings.weekStartsOnSunday?"#4F6353":"#DDDCD4"};"
              >
                <span
                  class="toggle-knob"
                  style="transform: translateX(${this.settings.weekStartsOnSunday?"19px":"0px"});"
                ></span>
              </span>
            </div>

            <!-- Weekly Goal -->
            <div
              style="display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 15px 0; border-top: 1px solid #EDECE6; flex-wrap: wrap;"
            >
              <div>
                <div class="pref-name">Weekly goal</div>
                <div class="pref-sub">${M(n)} a week across the whole kit</div>
              </div>
              <div class="goal-chips-wrap">
                ${qd.map(r=>k`
                    <button
                      class="goal-chip ${n===r?"active":"inactive"}"
                      @click=${()=>this.handleSetGoal(r)}
                    >
                      ${M(r)}
                    </button>
                  `)}
              </div>
            </div>
          </div>
        </div>

        <!-- Data Portability & Slates -->
        <div class="settings-card">
          <div class="settings-tag">DATA MANAGEMENT</div>
          <div class="portability-actions-row">
            <button class="btn-util-action" @click=${this.handleExportBackup}>
              Export practice data (JSON)
            </button>
            <button class="btn-util-action" @click=${this.handleImportClick}>
              Import practice data (JSON)
            </button>
            <button class="btn-util-action" @click=${this.handleLoadDemoData}>
              Load demo practice history
            </button>
            <button class="btn-util-danger" @click=${this.handleClearAllData}>
              Reset all practice data
            </button>
            <input
              type="file"
              id="import-file-input"
              class="file-hidden"
              accept=".json,application/json"
              @change=${this.handleFileSelected}
            />
          </div>
        </div>
      </div>
    `}};je.styles=[Xe,Ne`
      :host {
        display: block;
        animation: fadeOnly 200ms ease-out both;
        color: #23241F;
        font-family: 'DM Sans', system-ui, sans-serif;
      }

      .settings-wrap {
        display: flex;
        flex-direction: column;
        gap: 14px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      }

      .settings-card {
        background: #FAFAF7;
        border-radius: 20px;
        padding: 22px;
        border: 1px solid #EBEAE3;
        box-shadow: 0 4px 16px rgba(35, 36, 31, 0.03);
      }

      .settings-tag {
        font-size: 9.5px;
        letter-spacing: 0.13em;
        color: #A3A297;
        font-weight: 700;
        text-transform: uppercase;
      }

      /* Account Section */
      .acct-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        flex-wrap: wrap;
      }

      .avatar-circle {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background: #DCDBD3;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        font-weight: 700;
        color: #4A4945;
        flex-shrink: 0;
      }

      .acct-email-title {
        font-size: 16px;
        font-weight: 700;
        letter-spacing: -0.01em;
        color: #23241F;
      }

      .acct-sub-text {
        font-size: 12.5px;
        color: #767668;
        margin-top: 3px;
      }

      .guest-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #B4543C;
        display: inline-block;
        flex-shrink: 0;
      }

      .guest-sub-line {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 4px;
        font-size: 12.5px;
        color: #767668;
      }

      .btn-outline-signout {
        border: 1px solid #DDDCD4;
        border-radius: 12px;
        padding: 11px 18px;
        font-size: 12.5px;
        font-weight: 700;
        color: #767668;
        background: transparent;
        cursor: pointer;
        white-space: nowrap;
        transition: background-color 150ms ease-out, color 150ms ease-out;
      }

      .btn-outline-signout:hover {
        background: #F0EFEA;
        color: #23241F;
      }

      .btn-signin-forest-outline {
        border: 1px solid #4F6353;
        color: #4F6353;
        background: transparent;
        border-radius: 12px;
        height: 40px;
        padding: 0 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        white-space: nowrap;
        flex-shrink: 0;
        transition: background-color 150ms ease-out;
      }

      .btn-signin-forest-outline:hover {
        background: #ECEFEA;
      }

      /* Magic Link Sent Card */
      .inbox-card-stack {
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: 440px;
      }

      .inbox-title {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #23241F;
      }

      .inbox-desc {
        font-size: 13.5px;
        color: #767668;
        line-height: 1.55;
      }

      .btn-primary-forest-solid {
        background: #4F6353;
        color: #F7F6F1;
        border-radius: 12px;
        height: 46px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        transition: background-color 150ms ease;
      }

      .btn-primary-forest-solid:hover {
        background: #435447;
      }

      /* Backup Section */
      .backup-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin-top: 14px;
        flex-wrap: wrap;
      }

      .backup-state-title {
        font-size: 15px;
        font-weight: 700;
        color: #23241F;
      }

      .backup-detail-sub {
        font-size: 12.5px;
        color: #767668;
        margin-top: 3px;
      }

      /* Preferences Section */
      .pref-rows-list {
        display: flex;
        flex-direction: column;
        margin-top: 6px;
      }

      .pref-row-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 15px 0;
        border-top: 1px solid #EDECE6;
        cursor: pointer;
        user-select: none;
      }

      .pref-name {
        font-size: 14.5px;
        font-weight: 700;
        color: #23241F;
      }

      .pref-sub {
        font-size: 12.5px;
        color: #767668;
        margin-top: 3px;
      }

      /* Toggle Switch */
      .toggle-track {
        width: 46px;
        height: 27px;
        border-radius: 999px;
        display: flex;
        align-items: center;
        padding: 3px;
        transition: background-color 180ms ease-out;
        flex-shrink: 0;
      }

      .toggle-knob {
        width: 21px;
        height: 21px;
        border-radius: 50%;
        background: #FFFFFF;
        transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
        box-shadow: 0 1px 3px rgba(35, 36, 31, 0.24);
      }

      /* Goal Chips */
      .goal-chips-wrap {
        display: flex;
        gap: 7px;
        flex-wrap: wrap;
      }

      .goal-chip {
        border-radius: 11px;
        padding: 9px 13px;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        transition: background-color 140ms ease, color 140ms ease;
        border: none;
        user-select: none;
      }

      .goal-chip.active {
        background: #23241F;
        color: #F2F1EC;
      }

      .goal-chip.inactive {
        background: #F0EFEA;
        color: #4A4945;
      }

      .goal-chip.inactive:hover {
        background: #E5E4DC;
      }

      /* Data actions list */
      .portability-actions-row {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 14px;
      }

      .btn-util-action {
        border: 1px solid #DDDCD4;
        border-radius: 12px;
        padding: 10px 16px;
        font-size: 12.5px;
        font-weight: 700;
        color: #4A4945;
        background: #FFFFFF;
        cursor: pointer;
        transition: background-color 140ms ease, color 140ms ease;
      }

      .btn-util-action:hover {
        background: #F0EFEA;
        color: #23241F;
      }

      .btn-util-danger {
        border: 1px solid #E2CFC9;
        border-radius: 12px;
        padding: 10px 16px;
        font-size: 12.5px;
        font-weight: 700;
        color: #B4543C;
        background: #FFFFFF;
        cursor: pointer;
        transition: background-color 140ms ease, color 140ms ease;
      }

      .btn-util-danger:hover {
        background: #FBEAE8;
      }

      .file-hidden {
        display: none;
      }

      /* Mobile Phone Mode (< 640px) */
      @media (max-width: 640px) {
        .settings-card {
          padding: 16px 14px;
          border-radius: 18px;
        }

        .acct-row {
          gap: 12px;
        }

        .pref-row-item {
          padding: 12px 0;
          gap: 12px;
        }

        .pref-name {
          font-size: 13.5px;
        }

        .pref-sub {
          font-size: 11.5px;
        }

        .goal-chips-wrap {
          gap: 5px;
        }

        .goal-chip {
          padding: 7px 11px;
          font-size: 11.5px;
        }
      }
    `];mt([q({type:Object})],je.prototype,"settings",2);mt([q({type:Object})],je.prototype,"authState",2);mt([q({type:String})],je.prototype,"syncStatus",2);mt([q({type:Number})],je.prototype,"sessionCount",2);mt([T()],je.prototype,"isSyncing",2);mt([T()],je.prototype,"magicSentEmail",2);je=mt([Ye("pt-settings-view")],je);var Wd=Object.defineProperty,Kd=Object.getOwnPropertyDescriptor,bt=(t,e,s,n)=>{for(var i=n>1?void 0:n?Kd(e,s):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(n?a(e,s,i):a(i))||i);return n&&i&&Wd(e,s,i),i};let Me=class extends le{constructor(){super(...arguments),this.instruments=[],this.open=!1,this.selectedInstrumentId="",this.durationMinutes=20,this.sessionDate=new Date().toISOString().slice(0,10),this.notes=""}connectedCallback(){super.connectedCallback(),this.instruments.length>0&&!this.selectedInstrumentId&&(this.selectedInstrumentId=this.instruments[0].id)}willUpdate(t){t.has("instruments")&&this.instruments.length>0&&!this.selectedInstrumentId&&(this.selectedInstrumentId=this.instruments[0].id)}setPreset(t){this.durationMinutes=t}handleSave(){if(!this.selectedInstrumentId||this.durationMinutes<=0)return;const t=this.sessionDate.split("-"),e=new Date;t.length===3&&e.setFullYear(parseInt(t[0]),parseInt(t[1])-1,parseInt(t[2])),this.dispatchEvent(new CustomEvent("save-manual-session",{detail:{instrumentId:this.selectedInstrumentId,start:e,duration:this.durationMinutes,notes:this.notes},bubbles:!0,composed:!0})),this.close()}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return this.open?k`
      <div class="modal-overlay" @click=${t=>t.target===t.currentTarget&&this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Log Practice Session</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="form-group">
            <label class="form-label">Select Instrument</label>
            <div class="inst-radio-group">
              ${this.instruments.map(t=>k`
                  <div
                    class="inst-radio ${this.selectedInstrumentId===t.id?"selected":""}"
                    @click=${()=>this.selectedInstrumentId=t.id}
                  >
                    <span class="inst-dot" style="background: ${t.color}"></span>
                    ${t.name}
                  </div>
                `)}
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Duration (Minutes)</label>
            <div class="preset-durations">
              ${[15,30,45,60].map(t=>k`
                  <button
                    type="button"
                    class="preset-btn ${this.durationMinutes===t?"active":""}"
                    @click=${()=>this.setPreset(t)}
                  >
                    ${t}m
                  </button>
                `)}
            </div>
            <input
              type="number"
              min="1"
              max="600"
              class="form-input"
              .value=${String(this.durationMinutes)}
              @input=${t=>this.durationMinutes=parseInt(t.target.value)||0}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Date</label>
            <input
              type="date"
              class="form-input"
              .value=${this.sessionDate}
              @input=${t=>this.sessionDate=t.target.value}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Notes (Optional)</label>
            <input
              type="text"
              placeholder="e.g. Scales, arpeggios, song practice..."
              class="form-input"
              .value=${this.notes}
              @input=${t=>this.notes=t.target.value}
            />
          </div>

          <button class="btn btn-primary" style="margin-top: 10px;" @click=${this.handleSave}>
            Save Practice Log
          </button>
        </div>
      </div>
    `:k``}};Me.styles=[Xe,Ne`
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
    `];bt([q({type:Array})],Me.prototype,"instruments",2);bt([q({type:Boolean})],Me.prototype,"open",2);bt([T()],Me.prototype,"selectedInstrumentId",2);bt([T()],Me.prototype,"durationMinutes",2);bt([T()],Me.prototype,"sessionDate",2);bt([T()],Me.prototype,"notes",2);Me=bt([Ye("pt-manual-entry-modal")],Me);var Vd=Object.defineProperty,Gd=Object.getOwnPropertyDescriptor,Qe=(t,e,s,n)=>{for(var i=n>1?void 0:n?Gd(e,s):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(n?a(e,s,i):a(i))||i);return n&&i&&Vd(e,s,i),i};let _e=class extends le{constructor(){super(...arguments),this.instruments=[],this.session=null,this.open=!1,this.instrumentId="",this.duration=0,this.sessionDate="",this.notes=""}willUpdate(t){t.has("session")&&this.session&&(this.instrumentId=this.session.instrumentId,this.duration=this.session.duration,this.sessionDate=new Date(this.session.start).toISOString().slice(0,10),this.notes=this.session.notes||"")}handleSave(){if(!this.session||!this.instrumentId||this.duration<=0)return;const t=this.sessionDate.split("-"),e=new Date(this.session.start);t.length===3&&e.setFullYear(parseInt(t[0]),parseInt(t[1])-1,parseInt(t[2]));const s=new Date(e.getTime()+this.duration*6e4),n={...this.session,instrumentId:this.instrumentId,start:e.toISOString(),end:s.toISOString(),duration:Math.round(this.duration),notes:this.notes.trim()||void 0};this.dispatchEvent(new CustomEvent("update-session",{detail:{session:n},bubbles:!0,composed:!0})),this.close()}handleDelete(){this.session&&confirm("Are you sure you want to delete this practice session?")&&(this.dispatchEvent(new CustomEvent("delete-session",{detail:{sessionId:this.session.id},bubbles:!0,composed:!0})),this.close())}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return!this.open||!this.session?k``:k`
      <div class="modal-overlay" @click=${t=>t.target===t.currentTarget&&this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Edit Practice Session</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="form-group">
            <label class="form-label">Instrument</label>
            <div class="inst-radio-group">
              ${this.instruments.map(t=>k`
                  <div
                    class="inst-radio ${this.instrumentId===t.id?"selected":""}"
                    @click=${()=>this.instrumentId=t.id}
                  >
                    <span class="inst-dot" style="background: ${t.color}"></span>
                    ${t.name}
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
              @input=${t=>this.duration=parseInt(t.target.value)||0}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Date</label>
            <input
              type="date"
              class="form-input"
              .value=${this.sessionDate}
              @input=${t=>this.sessionDate=t.target.value}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Notes</label>
            <input
              type="text"
              class="form-input"
              .value=${this.notes}
              @input=${t=>this.notes=t.target.value}
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
    `}};_e.styles=[Xe,Ne`
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
    `];Qe([q({type:Array})],_e.prototype,"instruments",2);Qe([q({type:Object})],_e.prototype,"session",2);Qe([q({type:Boolean})],_e.prototype,"open",2);Qe([T()],_e.prototype,"instrumentId",2);Qe([T()],_e.prototype,"duration",2);Qe([T()],_e.prototype,"sessionDate",2);Qe([T()],_e.prototype,"notes",2);_e=Qe([Ye("pt-edit-session-modal")],_e);var Jd=Object.defineProperty,Yd=Object.getOwnPropertyDescriptor,Ee=(t,e,s,n)=>{for(var i=n>1?void 0:n?Yd(e,s):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(n?a(e,s,i):a(i))||i);return n&&i&&Jd(e,s,i),i};let de=class extends le{constructor(){super(...arguments),this.open=!1,this.initialTab="signin",this.activeTab="signin",this.email="",this.password="",this.confirmPassword="",this.isLoading=!1,this.errorMessage=null,this.successMessage=null}willUpdate(t){t.has("open")&&this.open&&(this.initialTab&&(this.activeTab=this.initialTab),this.errorMessage=null,this.successMessage=null)}close(){this.errorMessage=null,this.successMessage=null,this.password="",this.confirmPassword="",this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}setTab(t){this.activeTab=t,this.errorMessage=null,this.successMessage=null,ve(P.getSettings().soundEnabled)}handleKeyDown(t){t.key==="Escape"&&this.close()}async handleForgotPassword(){if(!this.email.trim()||!this.email.includes("@")){this.errorMessage="Please enter your email address first to reset password.";return}this.isLoading=!0,this.errorMessage=null,this.successMessage=null;try{const t=await Q.resetPasswordForEmail(this.email);t.success?(ot(P.getSettings().soundEnabled),this.successMessage=t.message||"Password reset link sent to your email!"):this.errorMessage=t.message||"Failed to send password reset email."}finally{this.isLoading=!1}}async handleGoogleSignIn(){this.isLoading=!0,this.errorMessage=null,this.successMessage=null;try{const t=await Q.signInWithOAuth("google");t.success?(ot(P.getSettings().soundEnabled),this.close()):this.errorMessage=t.message||"Google sign in failed."}finally{this.isLoading=!1}}async handleSubmit(t){t.preventDefault(),this.errorMessage=null,this.successMessage=null;const e=this.email.trim();if(!e||!e.includes("@")){this.errorMessage="Please enter a valid email address.";return}if(this.activeTab==="magic"){this.isLoading=!0;try{const s=await Q.signInWithOtp(e);s.success?(ot(P.getSettings().soundEnabled),this.successMessage=s.message||"We've sent a magic login link to your inbox!",this.dispatchEvent(new CustomEvent("magic-link-sent",{detail:{email:e},bubbles:!0,composed:!0}))):this.errorMessage=s.message||"Failed to send magic link."}finally{this.isLoading=!1}return}if(!this.password){this.errorMessage="Please enter your password.";return}if(this.activeTab==="create"){if(this.password.length<6){this.errorMessage="Password must be at least 6 characters long.";return}if(this.password!==this.confirmPassword){this.errorMessage="Passwords do not match.";return}this.isLoading=!0;try{const s=await Q.signUp(e,this.password);s.success?(ot(P.getSettings().soundEnabled),s.user&&!s.user.confirmed_at&&Q.getUser()===null?this.successMessage="Account created! Please check your email to confirm your account.":this.close()):this.errorMessage=s.message||"Sign up failed."}finally{this.isLoading=!1}return}if(this.activeTab==="signin"){this.isLoading=!0;try{const s=await Q.signInWithPassword(e,this.password);s.success?(ot(P.getSettings().soundEnabled),this.close()):this.errorMessage=s.message||"Invalid email or password."}finally{this.isLoading=!1}}}render(){if(!this.open)return k``;const t=this.isLoading?"Please wait...":this.activeTab==="signin"?"Sign in":this.activeTab==="create"?"Create account":"Send magic link";return k`
      <div
        class="modal-backdrop"
        @click=${e=>e.target===e.currentTarget&&this.close()}
        @keydown=${this.handleKeyDown}
      >
        <div class="modal-card">
          <!-- Header -->
          <div class="modal-header">
            <div>
              <div class="title-main">Musician account</div>
              <div class="subtitle-italic">so your hours follow you</div>
            </div>
            <button
              type="button"
              class="close-round-btn"
              @click=${this.close}
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>

          <!-- 3-Tab Segmented Track -->
          <div class="segmented-tabs-track">
            <button
              type="button"
              class="tab-choice-btn ${this.activeTab==="signin"?"active":""}"
              @click=${()=>this.setTab("signin")}
            >
              Sign in
            </button>
            <button
              type="button"
              class="tab-choice-btn ${this.activeTab==="create"?"active":""}"
              @click=${()=>this.setTab("create")}
            >
              Create account
            </button>
            <button
              type="button"
              class="tab-choice-btn ${this.activeTab==="magic"?"active":""}"
              @click=${()=>this.setTab("magic")}
            >
              Magic link
            </button>
          </div>

          ${this.errorMessage?k`<div class="alert-banner alert-error">${this.errorMessage}</div>`:""}
          ${this.successMessage?k`<div class="alert-banner alert-success">${this.successMessage}</div>`:""}

          <!-- Form Body -->
          <form @submit=${this.handleSubmit}>
            <div class="fields-stack">
              <!-- Email Address -->
              <div class="field-block">
                <div class="field-label">EMAIL ADDRESS</div>
                <input
                  type="email"
                  class="text-input"
                  placeholder="you@example.com"
                  required
                  autocomplete="email"
                  .value=${this.email}
                  @input=${e=>this.email=e.target.value}
                />
              </div>

              <!-- Tab: Magic Link helper -->
              ${this.activeTab==="magic"?k`
                    <div class="helper-copy">
                      We'll email you a passwordless one-time login link. Click the link on any device to log in instantly.
                    </div>
                  `:""}

              <!-- Tab: Sign In Password -->
              ${this.activeTab==="signin"?k`
                    <div class="field-block">
                      <div class="label-row">
                        <div class="field-label">PASSWORD</div>
                        <button
                          type="button"
                          class="forgot-action"
                          @click=${this.handleForgotPassword}
                        >
                          Forgot?
                        </button>
                      </div>
                      <input
                        type="password"
                        class="text-input pw"
                        required
                        autocomplete="current-password"
                        .value=${this.password}
                        @input=${e=>this.password=e.target.value}
                      />
                    </div>
                  `:""}

              <!-- Tab: Create Account Passwords -->
              ${this.activeTab==="create"?k`
                    <div class="field-block">
                      <div class="field-label">PASSWORD</div>
                      <input
                        type="password"
                        class="text-input pw"
                        required
                        autocomplete="new-password"
                        .value=${this.password}
                        @input=${e=>this.password=e.target.value}
                      />
                    </div>
                    <div class="field-block">
                      <div class="field-label">CONFIRM PASSWORD</div>
                      <input
                        type="password"
                        class="text-input pw"
                        required
                        autocomplete="new-password"
                        .value=${this.confirmPassword}
                        @input=${e=>this.confirmPassword=e.target.value}
                      />
                    </div>
                    <div class="adopt-callout">
                      <span class="adopt-dot"></span>
                      <div class="adopt-text">
                        Your practice history from this browser will be automatically adopted into your new account.
                      </div>
                    </div>
                  `:""}
            </div>

            <!-- Actions Stack -->
            <div class="actions-stack" style="margin-top: 18px;">
              <button
                type="submit"
                class="primary-forest-btn"
                ?disabled=${this.isLoading}
              >
                ${t}
              </button>

              ${this.activeTab==="signin"?k`
                    <div class="or-divider">
                      <span class="or-line"></span>
                      <span class="or-text">OR</span>
                      <span class="or-line"></span>
                    </div>

                    <button
                      type="button"
                      class="google-btn"
                      ?disabled=${this.isLoading}
                      @click=${this.handleGoogleSignIn}
                    >
                      <svg class="google-icon-circle" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                      Continue with Google
                    </button>

                    <div class="switch-row">
                      <span>No account yet?</span>
                      <button
                        type="button"
                        class="switch-action"
                        @click=${()=>this.setTab("create")}
                      >
                        Create one
                      </button>
                    </div>
                  `:this.activeTab==="create"?k`
                    <div class="switch-row">
                      <span>Already have an account?</span>
                      <button
                        type="button"
                        class="switch-action"
                        @click=${()=>this.setTab("signin")}
                      >
                        Sign in
                      </button>
                    </div>
                  `:k`
                    <div class="switch-row">
                      <span>Prefer a password?</span>
                      <button
                        type="button"
                        class="switch-action"
                        @click=${()=>this.setTab("signin")}
                      >
                        Sign in
                      </button>
                    </div>
                  `}
            </div>
          </form>
        </div>
      </div>
    `}};de.styles=[Xe,Ne`
      :host {
        display: block;
      }

      .modal-backdrop {
        position: fixed;
        inset: 0;
        z-index: 1000;
        background: rgba(35, 36, 31, 0.44);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
        overflow-y: auto;
        animation: fadeOnly 180ms ease-out both;
      }

      .modal-card {
        width: 380px;
        max-width: 100%;
        background: #FBFBF9;
        border-radius: 24px;
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        box-shadow: 0 30px 70px -32px rgba(35, 36, 31, 0.55);
        animation: riseIn 260ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        color: #23241F;
        box-sizing: border-box;
      }

      /* Header */
      .modal-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
      }

      .title-main {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.2;
        color: #23241F;
      }

      .subtitle-italic {
        font-family: 'Instrument Serif', serif;
        font-style: italic;
        font-size: 16px;
        color: #767668;
        margin-top: 3px;
        line-height: 1.2;
      }

      .close-round-btn {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: #EFEEE9;
        color: #767668;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        cursor: pointer;
        flex-shrink: 0;
        border: none;
        transition: background-color 150ms ease-out, color 150ms ease-out;
      }

      .close-round-btn:hover {
        background: #E4E3DD;
        color: #23241F;
      }

      /* Segmented 3-Tab Control */
      .segmented-tabs-track {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 3px;
        background: #EFEEE9;
        border-radius: 13px;
        padding: 3px;
      }

      .tab-choice-btn {
        border: none;
        border-radius: 10px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        white-space: nowrap;
        background: transparent;
        color: #767668;
        transition: background-color 160ms ease-out, color 160ms ease-out, box-shadow 160ms ease-out;
        user-select: none;
      }

      .tab-choice-btn.active {
        background: #FFFFFF;
        color: #23241F;
        box-shadow: 0 2px 7px -3px rgba(35, 36, 31, 0.3);
      }

      /* Form Fields */
      .fields-stack {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      .field-block {
        display: flex;
        flex-direction: column;
        gap: 7px;
      }

      .field-label {
        font-size: 9.5px;
        letter-spacing: 0.13em;
        color: #A3A297;
        font-weight: 700;
        text-transform: uppercase;
      }

      .label-row {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 12px;
      }

      .forgot-action {
        font-size: 11.5px;
        color: #4F6353;
        font-weight: 700;
        cursor: pointer;
        background: none;
        border: none;
        padding: 0;
        transition: opacity 140ms ease;
      }

      .forgot-action:hover {
        opacity: 0.8;
        text-decoration: underline;
      }

      .text-input {
        font-family: inherit;
        font-size: 14px;
        color: #23241F;
        background: #FFFFFF;
        border: 1px solid #E7E6DF;
        border-radius: 12px;
        height: 48px;
        padding: 0 15px;
        outline: none;
        width: 100%;
        box-sizing: border-box;
        transition: border-color 140ms ease, box-shadow 140ms ease;
      }

      .text-input.pw {
        letter-spacing: 0.08em;
      }

      .text-input:focus {
        border-color: #4F6353;
        box-shadow: 0 0 0 1px #4F6353;
      }

      .helper-copy {
        font-size: 13px;
        line-height: 1.6;
        color: #767668;
        text-wrap: pretty;
      }

      .adopt-callout {
        display: flex;
        gap: 10px;
        align-items: flex-start;
        background: #F1F0EA;
        border-radius: 13px;
        padding: 12px 13px;
      }

      .adopt-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #8A7B94;
        margin-top: 6px;
        flex-shrink: 0;
      }

      .adopt-text {
        font-size: 12.5px;
        line-height: 1.55;
        color: #4A4945;
        text-wrap: pretty;
      }

      /* Actions Stack */
      .actions-stack {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      .primary-forest-btn {
        background: #4F6353;
        color: #F7F6F1;
        border-radius: 14px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        width: 100%;
        transition: background-color 160ms ease-out, transform 120ms ease;
      }

      .primary-forest-btn:hover {
        background: #445646;
      }

      .primary-forest-btn:active {
        transform: scale(0.985);
      }

      .primary-forest-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
      }

      .or-divider {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .or-line {
        flex: 1;
        height: 1px;
        background: #E7E6DF;
      }

      .or-text {
        font-size: 10.5px;
        letter-spacing: 0.1em;
        color: #A3A297;
        font-weight: 700;
      }

      .google-btn {
        background: #FFFFFF;
        border: 1px solid #DDDCD4;
        border-radius: 14px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 13.5px;
        font-weight: 700;
        color: #23241F;
        cursor: pointer;
        width: 100%;
        transition: background-color 150ms ease-out, transform 120ms ease;
      }

      .google-btn:hover {
        background: #F4F3EE;
      }

      .google-btn:active {
        transform: scale(0.985);
      }

      .google-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      .google-icon-circle {
        width: 19px;
        height: 19px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .switch-row {
        display: flex;
        justify-content: center;
        gap: 6px;
        font-size: 12.5px;
        color: #767668;
        text-align: center;
      }

      .switch-action {
        color: #4F6353;
        font-weight: 700;
        cursor: pointer;
        text-decoration: underline;
        text-underline-offset: 3px;
        background: none;
        border: none;
        padding: 0;
        font-size: 12.5px;
      }

      .switch-action:hover {
        opacity: 0.85;
      }

      /* Alerts */
      .alert-banner {
        border-radius: 12px;
        padding: 10px 14px;
        font-size: 12.5px;
        line-height: 1.45;
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
    `];Ee([q({type:Boolean})],de.prototype,"open",2);Ee([q({type:String})],de.prototype,"initialTab",2);Ee([T()],de.prototype,"activeTab",2);Ee([T()],de.prototype,"email",2);Ee([T()],de.prototype,"password",2);Ee([T()],de.prototype,"confirmPassword",2);Ee([T()],de.prototype,"isLoading",2);Ee([T()],de.prototype,"errorMessage",2);Ee([T()],de.prototype,"successMessage",2);de=Ee([Ye("pt-auth-modal")],de);var Xd=Object.defineProperty,Qd=Object.getOwnPropertyDescriptor,Z=(t,e,s,n)=>{for(var i=n>1?void 0:n?Qd(e,s):e,r=t.length-1,a;r>=0;r--)(a=t[r])&&(i=(n?a(e,s,i):a(i))||i);return n&&i&&Xd(e,s,i),i};let G=class extends le{constructor(){super(...arguments),this.tab="practice",this.instruments=[],this.sessions=[],this.activeSession=null,this.settings=P.getSettings(),this.syncStatus="synced",this.authState=Q.getAuthState(),this.backgroundUrl=null,this.backgroundVisible=!1,this.now=Date.now(),this.manualLogModalOpen=!1,this.editSessionModalOpen=!1,this.sessionToEdit=null,this.authModalOpen=!1,this.authInitialTab="signin"}connectedCallback(){super.connectedCallback(),this.refreshState(),this.unsubscribeStore=P.subscribe(()=>{this.refreshState()}),this.unsubscribeAuth=Q.subscribe(t=>{this.authState=t}),this.timerInterval=setInterval(()=>{this.now=Date.now()},1e3),this.checkBackground()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeStore&&this.unsubscribeStore(),this.unsubscribeAuth&&this.unsubscribeAuth(),this.timerInterval&&clearInterval(this.timerInterval)}refreshState(){this.instruments=P.getAllInstruments(),this.sessions=P.getSessions(),this.activeSession=P.getActiveSession(),this.settings=P.getSettings(),this.syncStatus=P.getSyncStatus(),this.checkBackground()}async checkBackground(){const t=this.activeSession;if(t&&this.instruments.find(s=>s.id===t.instrumentId)){const s=await Td();if(s){this.backgroundUrl=s,this.backgroundVisible=!0;return}}this.backgroundVisible=!1}handleStartSession(t){P.startSession(t.detail.instrumentId)}handleEndSession(t){var e;P.endSession((e=t==null?void 0:t.detail)==null?void 0:e.notes)}handleDiscardSession(){P.discardSession()}handleSaveManualSession(t){const{instrumentId:e,start:s,duration:n,notes:i}=t.detail;P.logManualSession(e,s,n,i)}handleQuickLog(t){const{instrumentId:e,duration:s,daysAgo:n}=t.detail,i=new Date;i.setDate(i.getDate()-n),i.setHours(18,0,0,0),P.logManualSession(e,i,s)}handleUpdateSession(t){P.updateSession(t.detail.session)}handleDeleteSession(t){P.deleteSession(t.detail.sessionId)}handleAddInstrument(t){P.addInstrument(t.detail.name,t.detail.color,t.detail.tier)}handleUpdateInstrument(t){P.updateInstrument(t.detail.instrument)}handleRetireInstrument(t){P.retireInstrument(t.detail.id)}handleRestoreInstrument(t){P.restoreInstrument(t.detail.id)}handleUpdateSettings(t){P.updateSettings(t.detail)}handleOpenAuthModal(t){var e;this.authInitialTab=((e=t==null?void 0:t.detail)==null?void 0:e.tab)||"signin",this.authModalOpen=!0}handleMagicLinkSent(t){var s;this.authModalOpen=!1;const e=(s=this.shadowRoot)==null?void 0:s.querySelector("pt-settings-view");e&&e.setMagicLinkSent&&e.setMagicLinkSent(t.detail.email)}async handleSignOut(){await Q.signOut()}async handleSyncNow(){await P.syncWithCloud(!0)}render(){const t=new Date(this.now),e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],s=["January","February","March","April","May","June","July","August","September","October","November","December"],n=`${e[t.getDay()]} ${t.getDate()} ${s[t.getMonth()]}`,i=[{id:"practice",label:"Practice"},{id:"log",label:"Log"},{id:"kit",label:"Kit"},{id:"settings",label:"Settings"}],r=this.tab==="main"?"practice":this.tab==="data"?"log":this.tab,a=this.authState.isAuthenticated,o=this.syncStatus==="syncing"?"Syncing...":a?"Synced":"On this device";return k`
      ${this.backgroundUrl?k`<div
            class="ambient-bg ${this.backgroundVisible?"visible":""}"
            style="background-image: url('${this.backgroundUrl}')"
          ></div>`:""}

      <div class="app-page-wrap">
        <div class="app-layout-col">
          <!-- Top Navigation Bar -->
          <header class="top-navbar">
            <div class="brand-date-box">
              <div class="brand-title">Practice</div>
              <div class="date-italic-line">${n}</div>
            </div>

            <div class="top-actions-box">
              <nav class="tabs-pill-track">
                ${i.map(l=>k`
                    <button
                      class="nav-tab-btn ${r===l.id?"active":""}"
                      @click=${()=>this.tab=l.id}
                    >
                      ${l.label}
                    </button>
                  `)}
              </nav>

              <button
                class="sync-status-pill"
                @click=${()=>this.tab="settings"}
                title="Sync status · click to open settings"
              >
                <span
                  class="sync-dot ${this.syncStatus==="syncing"?"syncing":a?"":"offline"}"
                ></span>
                <span>${o}</span>
              </button>
            </div>
          </header>

          <!-- Main Container Card -->
          <main class="main-content-card">
            ${r==="practice"?k`
                  <pt-main-view
                    .instruments=${this.instruments}
                    .sessions=${this.sessions}
                    .activeSession=${this.activeSession}
                    .now=${this.now}
                    @start-session=${this.handleStartSession}
                    @end-session=${this.handleEndSession}
                    @discard-session=${this.handleDiscardSession}
                    @quick-log-session=${this.handleQuickLog}
                    @open-manual-log=${()=>this.manualLogModalOpen=!0}
                  ></pt-main-view>
                `:""}
            ${r==="log"?k`
                  <pt-log-view
                    .instruments=${this.instruments}
                    .sessions=${this.sessions}
                    @save-manual-session=${this.handleSaveManualSession}
                    @update-session=${this.handleUpdateSession}
                    @delete-session=${this.handleDeleteSession}
                  ></pt-log-view>
                `:""}
            ${r==="kit"?k`
                  <pt-kit-view
                    .instruments=${this.instruments}
                    .sessions=${this.sessions}
                    @add-instrument=${this.handleAddInstrument}
                    @update-instrument=${this.handleUpdateInstrument}
                    @retire-instrument=${this.handleRetireInstrument}
                    @restore-instrument=${this.handleRestoreInstrument}
                  ></pt-kit-view>
                `:""}
            ${r==="settings"?k`
                  <pt-settings-view
                    .settings=${this.settings}
                    .authState=${this.authState}
                    .syncStatus=${this.syncStatus}
                    .sessionCount=${this.sessions.filter(l=>!l.deletedAt).length}
                    @update-settings=${this.handleUpdateSettings}
                    @open-auth-modal=${this.handleOpenAuthModal}
                    @sign-out=${this.handleSignOut}
                    @sync-now=${this.handleSyncNow}
                  ></pt-settings-view>
                `:""}
          </main>
        </div>
      </div>

      <!-- Modals -->
      <pt-auth-modal
        .open=${this.authModalOpen}
        .initialTab=${this.authInitialTab}
        @magic-link-sent=${this.handleMagicLinkSent}
        @close-modal=${()=>this.authModalOpen=!1}
      ></pt-auth-modal>

      <pt-manual-entry-modal
        .instruments=${this.instruments.filter(l=>!l.archived)}
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
    `}};G.styles=[Xe,Ne`
      :host {
        display: block;
        width: 100%;
        min-height: 100vh;
        min-height: 100dvh;
        background: #DEDDD7;
        font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
        color: #23241F;
        position: relative;
        overflow-x: hidden;
      }

      .app-page-wrap {
        min-height: 100vh;
        min-height: 100dvh;
        background: #DEDDD7;
        color: #23241F;
        padding: 22px 16px 60px;
        display: flex;
        justify-content: center;
      }

      @media (min-width: 768px) {
        .app-page-wrap {
          padding: 26px 24px 70px;
        }
      }

      .app-layout-col {
        width: 100%;
        max-width: 1080px;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      /* Top Header Bar */
      .top-navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px 20px;
        padding: 0 6px;
        flex-wrap: wrap;
      }

      .brand-date-box {
        display: flex;
        align-items: baseline;
        gap: 12px;
      }

      .brand-title {
        font-size: 20px;
        font-weight: 700;
        letter-spacing: -0.03em;
        color: #23241F;
      }

      .date-italic-line {
        font-family: 'Instrument Serif', serif;
        font-style: italic;
        font-size: 16px;
        color: #767668;
      }

      .top-actions-box {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }

      .tabs-pill-track {
        display: flex;
        background: #E4E3DD;
        border-radius: 14px;
        padding: 4px;
        gap: 4px;
        flex-wrap: wrap;
      }

      .nav-tab-btn {
        padding: 8px 16px;
        border-radius: 10px;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        background: transparent;
        color: #767668;
        transition: background-color 180ms ease-out, color 180ms ease-out, transform 120ms ease;
        user-select: none;
      }

      .nav-tab-btn.active {
        background: #FBFBF9;
        color: #23241F;
        box-shadow: 0 2px 6px rgba(35, 36, 31, 0.05);
      }

      .nav-tab-btn:hover:not(.active) {
        color: #23241F;
      }

      .sync-status-pill {
        display: flex;
        align-items: center;
        gap: 7px;
        background: #DFE9DE;
        color: #4F6353;
        border-radius: 999px;
        padding: 7px 13px;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        user-select: none;
        transition: filter 150ms ease;
      }

      .sync-status-pill:hover {
        filter: brightness(0.97);
      }

      .sync-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #6B7F6E;
      }

      .sync-dot.syncing {
        background: #D4A340;
        animation: softPulse 1.2s ease-in-out infinite;
      }

      .sync-dot.offline {
        background: #A3A297;
      }

      /* Main Card Container */
      .main-content-card {
        background: #EDEDE9;
        border-radius: 26px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 14px;
        min-height: calc(100vh - 120px);
        min-width: 0;
        max-width: 100%;
      }

      @media (min-width: 768px) {
        .main-content-card {
          padding: 26px;
        }
      }

      /* Mobile Phone Mode (< 640px) */
      @media (max-width: 640px) {
        .app-page-wrap {
          padding: 12px 8px 48px;
        }

        .app-layout-col {
          gap: 10px;
        }

        .top-navbar {
          padding: 0 2px;
          gap: 8px 12px;
        }

        .brand-title {
          font-size: 18px;
        }

        .date-italic-line {
          font-size: 14.5px;
        }

        .top-actions-box {
          width: 100%;
          justify-content: space-between;
          gap: 8px;
        }

        .tabs-pill-track {
          flex: 1;
          justify-content: space-between;
          padding: 3px;
          gap: 2px;
        }

        .nav-tab-btn {
          flex: 1;
          text-align: center;
          padding: 7px 6px;
          font-size: 11.5px;
        }

        .sync-status-pill {
          padding: 5px 9px;
          font-size: 11px;
          flex-shrink: 0;
        }

        .main-content-card {
          padding: 14px 10px;
          border-radius: 20px;
          gap: 12px;
        }
      }

      /* Ambient Background Support */
      .ambient-bg {
        position: fixed;
        inset: 0;
        z-index: 0;
        pointer-events: none;
        background-size: cover;
        background-position: center bottom;
        background-repeat: no-repeat;
        filter: saturate(0.3) brightness(1.1);
        -webkit-mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 55%);
        mask-image: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 55%);
        opacity: 0;
        transition: opacity 600ms ease-out;
      }

      .ambient-bg.visible {
        opacity: 0.85;
      }
    `];Z([T()],G.prototype,"tab",2);Z([T()],G.prototype,"instruments",2);Z([T()],G.prototype,"sessions",2);Z([T()],G.prototype,"activeSession",2);Z([T()],G.prototype,"settings",2);Z([T()],G.prototype,"syncStatus",2);Z([T()],G.prototype,"authState",2);Z([T()],G.prototype,"backgroundUrl",2);Z([T()],G.prototype,"backgroundVisible",2);Z([T()],G.prototype,"now",2);Z([T()],G.prototype,"manualLogModalOpen",2);Z([T()],G.prototype,"editSessionModalOpen",2);Z([T()],G.prototype,"sessionToEdit",2);Z([T()],G.prototype,"authModalOpen",2);Z([T()],G.prototype,"authInitialTab",2);G=Z([Ye("pt-app")],G);
