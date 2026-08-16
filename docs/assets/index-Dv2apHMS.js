(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=globalThis,Ot=ft.ShadowRoot&&(ft.ShadyCSS===void 0||ft.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mt=Symbol(),jt=new WeakMap;let Kt=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ot&&t===void 0){const n=e!==void 0&&e.length===1;n&&(t=jt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&jt.set(e,t))}return t}toString(){return this.cssText}};const te=i=>new Kt(typeof i=="string"?i:i+"",void 0,Mt),C=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((n,s,r)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[r+1],i[0]);return new Kt(e,i,Mt)},ee=(i,t)=>{if(Ot)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const n=document.createElement("style"),s=ft.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=e.cssText,i.appendChild(n)}},Nt=Ot?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return te(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:se,defineProperty:ie,getOwnPropertyDescriptor:ne,getOwnPropertyNames:re,getOwnPropertySymbols:oe,getPrototypeOf:ae}=Object,F=globalThis,zt=F.trustedTypes,de=zt?zt.emptyScript:"",Et=F.reactiveElementPolyfillSupport,at=(i,t)=>i,bt={toAttribute(i,t){switch(t){case Boolean:i=i?de:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Ct=(i,t)=>!se(i,t),Rt={attribute:!0,type:String,converter:bt,reflect:!1,useDefault:!1,hasChanged:Ct};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),F.litPropertyMetadata??(F.litPropertyMetadata=new WeakMap);let Q=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Rt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(t,n,e);s!==void 0&&ie(this.prototype,t,s)}}static getPropertyDescriptor(t,e,n){const{get:s,set:r}=ne(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:s,set(o){const l=s==null?void 0:s.call(this);r==null||r.call(this,o),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Rt}static _$Ei(){if(this.hasOwnProperty(at("elementProperties")))return;const t=ae(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(at("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(at("properties"))){const e=this.properties,n=[...re(e),...oe(e)];for(const s of n)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[n,s]of e)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[e,n]of this.elementProperties){const s=this._$Eu(e,n);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const s of n)e.unshift(Nt(s))}else t!==void 0&&e.push(Nt(t));return e}static _$Eu(t,e){const n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ee(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostDisconnected)==null?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){var r;const n=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,n);if(s!==void 0&&n.reflect===!0){const o=(((r=n.converter)==null?void 0:r.toAttribute)!==void 0?n.converter:bt).toAttribute(e,n.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var r,o;const n=this.constructor,s=n._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const l=n.getPropertyOptions(s),d=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)==null?void 0:r.fromAttribute)!==void 0?l.converter:bt;this._$Em=s;const p=d.fromAttribute(e,l.type);this[s]=p??((o=this._$Ej)==null?void 0:o.get(s))??p,this._$Em=null}}requestUpdate(t,e,n,s=!1,r){var o;if(t!==void 0){const l=this.constructor;if(s===!1&&(r=this[t]),n??(n=l.getPropertyOptions(t)),!((n.hasChanged??Ct)(r,e)||n.useDefault&&n.reflect&&r===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(l._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:s,wrapped:r},o){n&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s){const{wrapped:l}=o,d=this[r];l!==!0||this._$AL.has(r)||d===void 0||this.C(r,void 0,o,d)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(n=this._$EO)==null||n.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(n=>{var s;return(s=n.hostUpdated)==null?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};Q.elementStyles=[],Q.shadowRootOptions={mode:"open"},Q[at("elementProperties")]=new Map,Q[at("finalized")]=new Map,Et==null||Et({ReactiveElement:Q}),(F.reactiveElementVersions??(F.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=globalThis,Ut=i=>i,vt=dt.trustedTypes,Bt=vt?vt.createPolicy("lit-html",{createHTML:i=>i}):void 0,Yt="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,Zt="?"+T,le=`<${Zt}>`,V=document,ct=()=>V.createComment(""),pt=i=>i===null||typeof i!="object"&&typeof i!="function",Tt=Array.isArray,ce=i=>Tt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",At=`[ 	
\f\r]`,rt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lt=/-->/g,Ht=/>/g,U=RegExp(`>|${At}(?:([^\\s"'>=/]+)(${At}*=${At}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vt=/'/g,qt=/"/g,Xt=/^(?:script|style|textarea|title)$/i,pe=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),c=pe(1),et=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Jt=new WeakMap,B=V.createTreeWalker(V,129);function Qt(i,t){if(!Tt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bt!==void 0?Bt.createHTML(t):t}const he=(i,t)=>{const e=i.length-1,n=[];let s,r=t===2?"<svg>":t===3?"<math>":"",o=rt;for(let l=0;l<e;l++){const d=i[l];let p,a,h=-1,g=0;for(;g<d.length&&(o.lastIndex=g,a=o.exec(d),a!==null);)g=o.lastIndex,o===rt?a[1]==="!--"?o=Lt:a[1]!==void 0?o=Ht:a[2]!==void 0?(Xt.test(a[2])&&(s=RegExp("</"+a[2],"g")),o=U):a[3]!==void 0&&(o=U):o===U?a[0]===">"?(o=s??rt,h=-1):a[1]===void 0?h=-2:(h=o.lastIndex-a[2].length,p=a[1],o=a[3]===void 0?U:a[3]==='"'?qt:Vt):o===qt||o===Vt?o=U:o===Lt||o===Ht?o=rt:(o=U,s=void 0);const x=o===U&&i[l+1].startsWith("/>")?" ":"";r+=o===rt?d+le:h>=0?(n.push(p),d.slice(0,h)+Yt+d.slice(h)+T+x):d+T+(h===-2?l:x)}return[Qt(i,r+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class ht{constructor({strings:t,_$litType$:e},n){let s;this.parts=[];let r=0,o=0;const l=t.length-1,d=this.parts,[p,a]=he(t,e);if(this.el=ht.createElement(p,n),B.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=B.nextNode())!==null&&d.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(Yt)){const g=a[o++],x=s.getAttribute(h).split(T),A=/([.?@])?(.*)/.exec(g);d.push({type:1,index:r,name:A[2],strings:x,ctor:A[1]==="."?me:A[1]==="?"?ge:A[1]==="@"?fe:xt}),s.removeAttribute(h)}else h.startsWith(T)&&(d.push({type:6,index:r}),s.removeAttribute(h));if(Xt.test(s.tagName)){const h=s.textContent.split(T),g=h.length-1;if(g>0){s.textContent=vt?vt.emptyScript:"";for(let x=0;x<g;x++)s.append(h[x],ct()),B.nextNode(),d.push({type:2,index:++r});s.append(h[g],ct())}}}else if(s.nodeType===8)if(s.data===Zt)d.push({type:2,index:r});else{let h=-1;for(;(h=s.data.indexOf(T,h+1))!==-1;)d.push({type:7,index:r}),h+=T.length-1}r++}}static createElement(t,e){const n=V.createElement("template");return n.innerHTML=t,n}}function st(i,t,e=i,n){var o,l;if(t===et)return t;let s=n!==void 0?(o=e._$Co)==null?void 0:o[n]:e._$Cl;const r=pt(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),r===void 0?s=void 0:(s=new r(i),s._$AT(i,e,n)),n!==void 0?(e._$Co??(e._$Co=[]))[n]=s:e._$Cl=s),s!==void 0&&(t=st(i,s._$AS(i,t.values),s,n)),t}class ue{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,s=((t==null?void 0:t.creationScope)??V).importNode(e,!0);B.currentNode=s;let r=B.nextNode(),o=0,l=0,d=n[0];for(;d!==void 0;){if(o===d.index){let p;d.type===2?p=new mt(r,r.nextSibling,this,t):d.type===1?p=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(p=new be(r,this,t)),this._$AV.push(p),d=n[++l]}o!==(d==null?void 0:d.index)&&(r=B.nextNode(),o++)}return B.currentNode=V,s}p(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class mt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,n,s){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=st(this,t,e),pt(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==et&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ce(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&pt(this._$AH)?this._$AA.nextSibling.data=t:this.T(V.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ht.createElement(Qt(n.h,n.h[0]),this.options)),n);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{const o=new ue(s,this),l=o.u(this.options);o.p(e),this.T(l),this._$AH=o}}_$AC(t){let e=Jt.get(t.strings);return e===void 0&&Jt.set(t.strings,e=new ht(t)),e}k(t){Tt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,s=0;for(const r of t)s===e.length?e.push(n=new mt(this.O(ct()),this.O(ct()),this,this.options)):n=e[s],n._$AI(r),s++;s<e.length&&(this._$AR(n&&n._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,e);t!==this._$AB;){const s=Ut(t).nextSibling;Ut(t).remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class xt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,s,r){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(t,e=this,n,s){const r=this.strings;let o=!1;if(r===void 0)t=st(this,t,e,0),o=!pt(t)||t!==this._$AH&&t!==et,o&&(this._$AH=t);else{const l=t;let d,p;for(t=r[0],d=0;d<r.length-1;d++)p=st(this,l[n+d],e,d),p===et&&(p=this._$AH[d]),o||(o=!pt(p)||p!==this._$AH[d]),p===y?t=y:t!==y&&(t+=(p??"")+r[d+1]),this._$AH[d]=p}o&&!s&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class me extends xt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}}class ge extends xt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}}class fe extends xt{constructor(t,e,n,s,r){super(t,e,n,s,r),this.type=5}_$AI(t,e=this){if((t=st(this,t,e,0)??y)===et)return;const n=this._$AH,s=t===y&&n!==y||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==y&&(n===y||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class be{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){st(this,t)}}const _t=dt.litHtmlPolyfillSupport;_t==null||_t(ht,mt),(dt.litHtmlVersions??(dt.litHtmlVersions=[])).push("3.3.3");const ve=(i,t,e)=>{const n=(e==null?void 0:e.renderBefore)??t;let s=n._$litPart$;if(s===void 0){const r=(e==null?void 0:e.renderBefore)??null;n._$litPart$=s=new mt(t.insertBefore(ct(),r),r,void 0,e??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis;class E extends Q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ve(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return et}}var Gt;E._$litElement$=!0,E.finalized=!0,(Gt=L.litElementHydrateSupport)==null||Gt.call(L,{LitElement:E});const Dt=L.litElementPolyfillSupport;Dt==null||Dt({LitElement:E});(L.litElementVersions??(L.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye={attribute:!0,type:String,converter:bt,reflect:!1,hasChanged:Ct},xe=(i=ye,t,e)=>{const{kind:n,metadata:s}=e;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),n==="setter"&&((i=Object.create(i)).wrapped=!0),r.set(e.name,i),n==="accessor"){const{name:o}=e;return{set(l){const d=t.get.call(this);t.set.call(this,l),this.requestUpdate(o,d,i,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,i,l),l}}}if(n==="setter"){const{name:o}=e;return function(l){const d=this[o];t.call(this,l),this.requestUpdate(o,d,i,!0,l)}}throw Error("Unsupported decorator location: "+n)};function v(i){return(t,e)=>typeof e=="object"?xe(i,t,e):((n,s,r)=>{const o=s.hasOwnProperty(r);return s.constructor.createProperty(r,n),o?Object.getOwnPropertyDescriptor(s,r):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(i){return v({...i,state:!0,attribute:!1})}const yt="#E1E1DB",lt=["#6B7F6E","#8A7B94","#9FAF95","#7D6E7F","#A98F72","#8B98A8","#A8817D","#7A8A99"];function $e(i){if(i.reduce((s,r)=>s+r.pct,0)<=0)return`conic-gradient(${yt} 0% 100%)`;let e=0;const n=[];return i.forEach(s=>{const r=e;e+=s.pct,n.push(`${s.color} ${r.toFixed(1)}% ${e.toFixed(1)}%`)}),e<100&&n.push(`${yt} ${e.toFixed(1)}% 100%`),`conic-gradient(${n.join(", ")})`}function kt(i,t){const e=Math.max(0,Math.min(100,t));return e<=0?`conic-gradient(${yt} 0% 100%)`:`conic-gradient(${i} 0% ${e.toFixed(1)}%, ${yt} ${e.toFixed(1)}% 100%)`}function Se(i){return i.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||"instrument"}function tt(i){if(i<=0)return"0′";if(i<60)return`${i}′`;const t=Math.floor(i/60),e=i%60;return`${t}h${e?` ${e}m`:""}`}function we(i){const t=Math.max(0,Math.floor(i/1e3)),e=Math.floor(t/3600),n=Math.floor(t%3600/60),s=t%60,r=String(n).padStart(2,"0"),o=String(s).padStart(2,"0");return e>0?`${e}:${r}:${o}`:`${n}:${o}`}function q(i){const t=new Date(i);return t.setHours(0,0,0,0),t}function H(i,t){const e=new Date(i);return e.setDate(e.getDate()+t),e}function P(i){return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`}function Ee(i,t){return i.getFullYear()===t.getFullYear()&&i.getMonth()===t.getMonth()&&i.getDate()===t.getDate()}function Ae(i){const t=q(new Date),e={};i.forEach(d=>{const p=P(q(new Date(d.start)));e[p]=!0});let s=!!e[P(t)]?t:H(t,-1),r=0;for(;e[P(s)];)r++,s=H(s,-1);let o=0;for(let d=0;d<30;d++){const p=H(t,-d);e[P(p)]&&o++}const l=Math.round(o/30*100);return{currentStreak:r,consistency30d:l}}let Z=null;function Pt(){if(typeof window>"u")return null;if(!Z){const i=window.AudioContext||window.webkitAudioContext;i&&(Z=new i)}return Z&&Z.state==="suspended"&&Z.resume().catch(()=>{}),Z}function _e(i=!0){if(i)try{const t=Pt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),s=t.createGain();n.type="sine",n.frequency.setValueAtTime(440,e),n.frequency.exponentialRampToValueAtTime(880,e+.12),s.gain.setValueAtTime(.001,e),s.gain.linearRampToValueAtTime(.12,e+.03),s.gain.exponentialRampToValueAtTime(1e-4,e+.2),n.connect(s),s.connect(t.destination),n.start(e),n.stop(e+.2)}catch{}}function Wt(i=!0){if(i)try{const t=Pt();if(!t)return;const e=t.currentTime;[523.25,659.25,783.99].forEach((n,s)=>{const r=t.createOscillator(),o=t.createGain();r.type="sine",r.frequency.setValueAtTime(n,e+s*.06),o.gain.setValueAtTime(.001,e+s*.06),o.gain.linearRampToValueAtTime(.08,e+s*.06+.04),o.gain.exponentialRampToValueAtTime(1e-4,e+s*.06+.45),r.connect(o),o.connect(t.destination),r.start(e+s*.06),r.stop(e+s*.06+.5)})}catch{}}function X(i=!0){if(i)try{const t=Pt();if(!t)return;const e=t.currentTime,n=t.createOscillator(),s=t.createGain();n.type="triangle",n.frequency.setValueAtTime(320,e),n.frequency.exponentialRampToValueAtTime(160,e+.04),s.gain.setValueAtTime(.05,e),s.gain.exponentialRampToValueAtTime(1e-4,e+.05),n.connect(s),s.connect(t.destination),n.start(e),n.stop(e+.05)}catch{}}function It(i=15,t=!0){if(t)try{typeof navigator<"u"&&"vibrate"in navigator&&navigator.vibrate(i)}catch{}}const ot=[{id:"guitar",name:"Guitar",color:"#6B7F6E",tier:"primary"},{id:"piano",name:"Piano",color:"#8A7B94",tier:"primary"},{id:"acoustic",name:"Acoustic Guitar",color:"#9FAF95",tier:"secondary"},{id:"bass",name:"Bass",color:"#7D6E7F",tier:"secondary"},{id:"drumming",name:"Finger Drumming",color:"#A98F72",tier:"secondary"}],De={id:"_removed",name:"Archived Instrument",color:"#C3C1B7",tier:"secondary",archived:!0},I={SESSIONS:"ptSessionsV2",INSTRUMENTS:"ptInstrumentsV1",ACTIVE:"ptActiveSessionV1",SETTINGS:"ptSettingsV1"};class Ie{constructor(){this.instruments=[],this.sessions=[],this.activeSession=null,this.settings={soundEnabled:!0,hapticsEnabled:!0},this.listeners=new Set,this.loadFromStorage()}subscribe(t){return this.listeners.add(t),()=>{this.listeners.delete(t)}}notify(){this.listeners.forEach(t=>t())}loadFromStorage(){try{const t=localStorage.getItem(I.INSTRUMENTS);if(t){const r=JSON.parse(t);Array.isArray(r)&&r.length>0?this.instruments=r:this.instruments=[...ot]}else this.instruments=[...ot],this.persistInstruments();const e=localStorage.getItem(I.SESSIONS);if(e){const r=JSON.parse(e);Array.isArray(r)?this.sessions=r:this.sessions=[]}else this.sessions=[];const n=localStorage.getItem(I.ACTIVE);if(n){const r=JSON.parse(n);r&&r.instrumentId&&r.startedAt&&(this.activeSession=r)}const s=localStorage.getItem(I.SETTINGS);s&&(this.settings={...this.settings,...JSON.parse(s)})}catch(t){console.error("Error loading practice store from storage:",t),this.instruments=[...ot],this.sessions=[]}}persistInstruments(){try{localStorage.setItem(I.INSTRUMENTS,JSON.stringify(this.instruments))}catch(t){console.error("Error saving instruments:",t)}}persistSessions(){try{localStorage.setItem(I.SESSIONS,JSON.stringify(this.sessions))}catch(t){console.error("Error saving sessions:",t)}}persistActive(){try{this.activeSession?localStorage.setItem(I.ACTIVE,JSON.stringify(this.activeSession)):localStorage.removeItem(I.ACTIVE)}catch(t){console.error("Error saving active session:",t)}}persistSettings(){try{localStorage.setItem(I.SETTINGS,JSON.stringify(this.settings))}catch(t){console.error("Error saving settings:",t)}}getActiveInstruments(){return this.instruments.filter(t=>!t.archived)}getAllInstruments(){return[...this.instruments]}getInstrument(t){return this.instruments.find(e=>e.id===t)||De}getSessions(){return[...this.sessions]}getActiveSession(){return this.activeSession}getSettings(){return{...this.settings}}startSession(t){this.activeSession||(this.activeSession={instrumentId:t,startedAt:Date.now()},this.persistActive(),_e(this.settings.soundEnabled),It(20,this.settings.hapticsEnabled),this.notify())}endSession(){if(!this.activeSession)return null;const t=Date.now(),e=Math.max(1,Math.round((t-this.activeSession.startedAt)/6e4)),n={id:"s-"+Math.random().toString(36).slice(2,9)+"-"+Date.now().toString(36),instrumentId:this.activeSession.instrumentId,start:new Date(this.activeSession.startedAt).toISOString(),end:new Date(t).toISOString(),duration:e};return this.sessions=[n,...this.sessions],this.activeSession=null,this.persistSessions(),this.persistActive(),Wt(this.settings.soundEnabled),It([30,50,30],this.settings.hapticsEnabled),this.notify(),n}discardSession(){this.activeSession&&(this.activeSession=null,this.persistActive(),X(this.settings.soundEnabled),this.notify())}logManualSession(t,e,n,s){const r=new Date(e.getTime()+Math.max(1,n)*6e4),o={id:"m-"+Math.random().toString(36).slice(2,9)+"-"+Date.now().toString(36),instrumentId:t,start:e.toISOString(),end:r.toISOString(),duration:Math.max(1,Math.round(n)),notes:(s==null?void 0:s.trim())||void 0};return this.sessions=[o,...this.sessions],this.persistSessions(),Wt(this.settings.soundEnabled),It(25,this.settings.hapticsEnabled),this.notify(),o}updateSession(t){this.sessions=this.sessions.map(e=>e.id===t.id?t:e),this.persistSessions(),X(this.settings.soundEnabled),this.notify()}deleteSession(t){this.sessions=this.sessions.filter(e=>e.id!==t),this.persistSessions(),X(this.settings.soundEnabled),this.notify()}addInstrument(t,e,n){const s=t.trim(),o={id:Se(s)+"-"+Math.random().toString(36).slice(2,6),name:s,color:e,tier:n};return this.instruments=[...this.instruments,o],this.persistInstruments(),X(this.settings.soundEnabled),this.notify(),o}updateInstrument(t){this.instruments=this.instruments.map(e=>e.id===t.id?t:e),this.persistInstruments(),X(this.settings.soundEnabled),this.notify()}removeInstrument(t){if(this.getActiveInstruments().length<=1)return;this.activeSession&&this.activeSession.instrumentId===t&&(this.activeSession=null,this.persistActive()),this.sessions.some(s=>s.instrumentId===t)?this.instruments=this.instruments.map(s=>s.id===t?{...s,archived:!0}:s):this.instruments=this.instruments.filter(s=>s.id!==t),this.persistInstruments(),X(this.settings.soundEnabled),this.notify()}updateSettings(t){this.settings={...this.settings,...t},this.persistSettings(),this.notify()}exportBackup(){const t={version:2,exportedAt:new Date().toISOString(),instruments:this.instruments,sessions:this.sessions,settings:this.settings};return JSON.stringify(t,null,2)}importBackup(t){try{const e=JSON.parse(t);return!e||!Array.isArray(e.instruments)&&!Array.isArray(e.sessions)?{success:!1,message:"Invalid backup file format."}:(Array.isArray(e.instruments)&&e.instruments.length>0&&(this.instruments=e.instruments,this.persistInstruments()),Array.isArray(e.sessions)&&(this.sessions=e.sessions,this.persistSessions()),e.settings&&(this.settings={...this.settings,...e.settings},this.persistSettings()),this.activeSession=null,this.persistActive(),this.notify(),{success:!0,message:"Backup successfully restored."})}catch(e){return{success:!1,message:"Failed to parse JSON file: "+String(e)}}}loadDemoData(){this.instruments=[...ot],this.persistInstruments();const t=q(new Date),e=[];for(let r=33;r>=1;r--){const o=H(t,-r),l=o.getDay();if(!(Math.random()<.12)){if(l>=1&&l<=5){const d=Math.random()<.7?["guitar","piano"]:[Math.random()<.5?"guitar":"piano"];let p=7;d.forEach(a=>{const h=new Date(o);h.setHours(p,30+Math.floor(Math.random()*20),0,0);const g=12+Math.floor(Math.random()*25),x=new Date(h.getTime()+g*6e4);e.push({id:"seed-"+Math.random().toString(36).slice(2,8),instrumentId:a,start:h.toISOString(),end:x.toISOString(),duration:g}),p+=1})}else if(Math.random()<.75){const d=["acoustic","bass","drumming"][Math.floor(Math.random()*3)],p=new Date(o);p.setHours(11,Math.floor(Math.random()*40),0,0);const a=20+Math.floor(Math.random()*30),h=new Date(p.getTime()+a*6e4);e.push({id:"seed-"+Math.random().toString(36).slice(2,8),instrumentId:d,start:p.toISOString(),end:h.toISOString(),duration:a})}}}const n=new Date(t);n.setHours(7,40,0,0),e.unshift({id:"seed-today-guitar",instrumentId:"guitar",start:n.toISOString(),end:new Date(n.getTime()+22*6e4).toISOString(),duration:22});const s=new Date(t);s.setHours(8,15,0,0),e.unshift({id:"seed-today-piano",instrumentId:"piano",start:s.toISOString(),end:new Date(s.getTime()+18*6e4).toISOString(),duration:18}),this.sessions=e,this.activeSession=null,this.persistSessions(),this.persistActive(),this.notify()}clearAllData(){this.instruments=[...ot],this.sessions=[],this.activeSession=null,this.persistInstruments(),this.persistSessions(),this.persistActive(),this.notify()}}const b=new Ie,N=C`
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
`;var ke=Object.defineProperty,Oe=Object.getOwnPropertyDescriptor,gt=(i,t,e,n)=>{for(var s=n>1?void 0:n?Oe(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(s=(n?o(t,e,s):o(s))||s);return n&&s&&ke(t,e,s),s};let J=class extends E{constructor(){super(...arguments),this.instruments=[],this.sessions=[],this.activeSession=null,this.now=Date.now()}handleStart(i){this.dispatchEvent(new CustomEvent("start-session",{detail:{instrumentId:i},bubbles:!0,composed:!0}))}handleEnd(){this.dispatchEvent(new CustomEvent("end-session",{bubbles:!0,composed:!0}))}handleDiscard(){this.dispatchEvent(new CustomEvent("discard-session",{bubbles:!0,composed:!0}))}handleOpenManual(){this.dispatchEvent(new CustomEvent("open-manual-log",{bubbles:!0,composed:!0}))}render(){const i=q(new Date),{currentStreak:t,consistency30d:e}=Ae(this.sessions),n=kt("#6B7F6E",e),s=this.sessions.filter(p=>Ee(new Date(p.start),i)),r=new Map(this.instruments.map(p=>[p.id,p])),o=this.activeSession?r.get(this.activeSession.instrumentId)||{id:this.activeSession.instrumentId,name:"Instrument",color:"#6B7F6E"}:null,l=this.activeSession?Math.max(0,this.now-this.activeSession.startedAt):0,d=we(l);return c`
      <!-- Streak Section -->
      <div class="streak-container">
        <div class="streak-outer-ring" style="background: ${n};">
          <div class="streak-inner-circle">
            <div class="streak-number">${t}</div>
            <div class="streak-label">DAY STREAK</div>
          </div>
        </div>
      </div>

      <!-- Today Dots -->
      <div class="dots-container">
        ${s.length>0?s.map(p=>{const a=r.get(p.instrumentId);return c`<span class="dot" style="background: ${(a==null?void 0:a.color)||"#A3A297"}"></span>`}):c`<span class="no-dots-text">nothing logged yet today</span>`}
      </div>

      <!-- Active Session or Idle Launcher -->
      ${this.activeSession&&o?c`
            <div class="active-card-wrap">
              <div class="active-card" style="background: ${o.color};">
                <div class="active-badge">
                  <span class="active-pulse-dot"></span>
                  SESSION IN PROGRESS
                </div>
                <div class="active-title">${o.name}</div>
                <div class="active-timer">${d}</div>
                <div class="btn btn-end" @click=${this.handleEnd}>End session</div>
                <div class="discard-link" @click=${this.handleDiscard}>Discard timer</div>
              </div>
            </div>
          `:c`
            <div class="idle-launcher">
              <div class="launcher-caption">tap an instrument to start</div>
              <div class="chips-grid">
                ${this.instruments.map(p=>c`
                    <div
                      class="inst-chip ${p.tier}"
                      style="${p.tier==="primary"?`background: ${p.color};`:""}"
                      @click=${()=>this.handleStart(p.id)}
                    >
                      ${p.name}
                    </div>
                  `)}
              </div>
              <div class="manual-log-trigger">
                <button class="manual-log-btn" @click=${this.handleOpenManual}>
                  + Log past practice
                </button>
              </div>
            </div>
          `}
    `}};J.styles=[N,C`
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
        padding: 12px 18px;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        transition: transform 0.12s ease, opacity 0.15s ease;
        user-select: none;
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
    `];gt([v({type:Array})],J.prototype,"instruments",2);gt([v({type:Array})],J.prototype,"sessions",2);gt([v({type:Object})],J.prototype,"activeSession",2);gt([v({type:Number})],J.prototype,"now",2);J=gt([j("pt-main-view")],J);var Me=Object.defineProperty,Ce=Object.getOwnPropertyDescriptor,W=(i,t,e,n)=>{for(var s=n>1?void 0:n?Ce(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(s=(n?o(t,e,s):o(s))||s);return n&&s&&Me(t,e,s),s};let k=class extends E{constructor(){super(...arguments),this.instruments=[],this.sessions=[],this.addOpen=!1,this.addName="",this.addColor=lt[0],this.addTier="secondary"}toggleAdd(){this.addOpen=!this.addOpen,this.addOpen&&(this.addName="",this.addColor=lt[0],this.addTier="secondary")}handleAddConfirm(){const i=this.addName.trim();i&&(this.dispatchEvent(new CustomEvent("add-instrument",{detail:{name:i,color:this.addColor,tier:this.addTier},bubbles:!0,composed:!0})),this.addOpen=!1,this.addName="")}handleEdit(i){this.dispatchEvent(new CustomEvent("open-edit-instrument",{detail:{instrument:i},bubbles:!0,composed:!0}))}handleRemove(i,t){i.stopPropagation(),this.dispatchEvent(new CustomEvent("remove-instrument",{detail:{instrumentId:t},bubbles:!0,composed:!0}))}render(){const i=q(new Date),t=H(i,-42),e=this.sessions.filter(a=>new Date(a.start)>=t),n=this.instruments.filter(a=>!a.archived),s={};let r=0;e.forEach(a=>{s[a.instrumentId]=(s[a.instrumentId]||0)+a.duration,r+=a.duration});const o=Math.max(1,r),l=n.length>1,d=n.filter(a=>a.tier==="primary"),p=n.filter(a=>a.tier==="secondary");return c`
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
      ${this.addOpen?c`
            <div class="add-card">
              <input
                type="text"
                class="form-input"
                style="margin-bottom: 12px;"
                placeholder="Instrument name (e.g., Drums, Vocals)"
                .value=${this.addName}
                @input=${a=>this.addName=a.target.value}
                @keydown=${a=>a.key==="Enter"&&this.handleAddConfirm()}
              />
              <div class="swatches-row">
                ${lt.map(a=>c`
                    <button
                      type="button"
                      class="swatch-btn ${this.addColor===a?"selected":""}"
                      style="background: ${a};"
                      @click=${()=>this.addColor=a}
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
          `:c``}

      <!-- Primary Instruments -->
      <div class="primary-group">
        ${d.map(a=>{const h=s[a.id]||0,g=r>0?Math.round(h/o*100):0,x=kt(a.color,g);return c`
            <div class="ring-item" @click=${()=>this.handleEdit(a)}>
              ${l?c`
                    <span
                      class="remove-chip"
                      title="Remove"
                      @click=${A=>this.handleRemove(A,a.id)}
                    >
                      &times;
                    </span>
                  `:c``}
              <div class="primary-ring" style="background: ${x};">
                <div class="primary-inner" style="color: ${a.color};">
                  ${g}%
                </div>
              </div>
              <div class="ring-name">${a.name}</div>
              <div class="ring-total">${tt(h)}</div>
            </div>
          `})}
      </div>

      <!-- Secondary Instruments -->
      <div class="secondary-group">
        ${p.map(a=>{const h=s[a.id]||0,g=r>0?Math.round(h/o*100):0,x=kt(a.color,g);return c`
            <div class="ring-item" @click=${()=>this.handleEdit(a)}>
              ${l?c`
                    <span
                      class="remove-chip"
                      title="Remove"
                      @click=${A=>this.handleRemove(A,a.id)}
                    >
                      &times;
                    </span>
                  `:c``}
              <div class="secondary-ring" style="background: ${x};">
                <div class="secondary-inner" style="color: ${a.color};">
                  ${g}%
                </div>
              </div>
              <div class="secondary-name">${a.name}</div>
              <div class="secondary-total">${tt(h)}</div>
            </div>
          `})}
      </div>
    `}};k.styles=[N,C`
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

      .empty-kit-notice {
        text-align: center;
        padding: 30px 20px;
        font-size: 13px;
        color: #767668;
      }
    `];W([v({type:Array})],k.prototype,"instruments",2);W([v({type:Array})],k.prototype,"sessions",2);W([m()],k.prototype,"addOpen",2);W([m()],k.prototype,"addName",2);W([m()],k.prototype,"addColor",2);W([m()],k.prototype,"addTier",2);k=W([j("pt-kit-view")],k);var Te=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,$t=(i,t,e,n)=>{for(var s=n>1?void 0:n?Pe(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(s=(n?o(t,e,s):o(s))||s);return n&&s&&Te(t,e,s),s};let it=class extends E{constructor(){super(...arguments),this.instruments=[],this.sessions=[],this.period="week"}handleEditSession(i){this.dispatchEvent(new CustomEvent("open-edit-session",{detail:{session:i},bubbles:!0,composed:!0}))}render(){const i=q(new Date),t=new Map(this.instruments.map(u=>[u.id,u])),e=this.instruments.filter(u=>!u.archived),n={};this.sessions.forEach(u=>{const f=P(q(new Date(u.start)));(n[f]=n[f]||[]).push(u)});const s=n[P(i)]||[],r={};let o=0;s.forEach(u=>{r[u.instrumentId]=(r[u.instrumentId]||0)+u.duration,o+=u.duration});const l=Object.entries(r).map(([u,f])=>{const D=t.get(u);return{color:(D==null?void 0:D.color)||"#A3A297",pct:f/Math.max(1,o)*100}}),d=$e(l),p=["S","M","T","W","T","F","S"],a=[];let h=0;for(let u=6;u>=0;u--){const f=H(i,-u),D=u===0,R=n[P(f)]||[],nt={};R.forEach(S=>{nt[S.instrumentId]=(nt[S.instrumentId]||0)+S.duration,h+=S.duration});const Y=Object.entries(nt).map(([S,St])=>{const wt=t.get(S);return{color:(wt==null?void 0:wt.color)||"#A3A297",heightPct:Math.min(100,Math.round(St/45*100))}});a.push({label:p[f.getDay()],isToday:D,segments:Y.length?Y:[{color:"transparent",heightPct:0}]})}const g=[];let x=0;for(let u=41;u>=0;u--){const f=H(i,-u),D=n[P(f)]||[];if(!D.length)g.push({color:"#E3E2DC"});else{const R={};D.forEach(S=>{R[S.instrumentId]=(R[S.instrumentId]||0)+S.duration,x+=S.duration});const nt=Object.entries(R).sort((S,St)=>St[1]-S[1])[0][0],Y=t.get(nt);g.push({color:(Y==null?void 0:Y.color)||"#A3A297"})}}const A=[...this.sessions].slice(0,8);return c`
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
      ${this.period==="day"?c`
            <div class="day-view-wrap">
              <div class="day-donut-outer" style="background: ${d};">
                <div class="day-donut-inner">
                  <div class="day-total-num">${tt(o)}</div>
                  <div class="day-total-label">TODAY</div>
                </div>
              </div>
            </div>
          `:c``}

      <!-- Week Period View -->
      ${this.period==="week"?c`
            <div class="metric-total-hero">${tt(h)}</div>
            <div class="metric-sub-hero">this week</div>
            <div class="week-bars-container">
              ${a.map(u=>c`
                  <div class="week-bar-col">
                    <div class="bar-card">
                      ${u.segments.map(f=>c`
                          <span
                            class="bar-seg"
                            style="height: ${f.heightPct}%; background: ${f.color};"
                          ></span>
                        `)}
                    </div>
                    <span class="bar-day-label ${u.isToday?"today":""}">
                      ${u.label}
                    </span>
                  </div>
                `)}
            </div>
          `:c``}

      <!-- Month Period View -->
      ${this.period==="month"?c`
            <div class="metric-total-hero">${tt(x)}</div>
            <div class="metric-sub-hero">last 6 weeks</div>
            <div class="month-grid">
              ${g.map(u=>c`
                  <span class="grid-cell" style="background: ${u.color};"></span>
                `)}
            </div>
          `:c``}

      <!-- Legend -->
      <div class="legend-container">
        ${e.map(u=>c`
            <span class="legend-item">
              <span class="legend-dot" style="background: ${u.color};"></span>
              ${u.name}
            </span>
          `)}
      </div>

      <!-- Recent Practice Session History -->
      <div class="history-section">
        <div class="history-header">
          <div class="history-title">Recent Session Logs</div>
        </div>

        ${A.length>0?c`
              <div class="history-list">
                ${A.map(u=>{const f=t.get(u.instrumentId),R=new Date(u.start).toLocaleDateString([],{month:"short",day:"numeric"});return c`
                    <div class="session-row" @click=${()=>this.handleEditSession(u)}>
                      <div class="session-left">
                        <span
                          class="session-inst-dot"
                          style="background: ${(f==null?void 0:f.color)||"#A3A297"};"
                        ></span>
                        <div>
                          <div class="session-inst-name">${(f==null?void 0:f.name)||"Instrument"}</div>
                          <div class="session-date-sub">
                            ${R}${u.notes?` • ${u.notes}`:""}
                          </div>
                        </div>
                      </div>
                      <div class="session-dur">${tt(u.duration)}</div>
                    </div>
                  `})}
              </div>
            `:c`
              <div class="no-history-text">
                No sessions recorded yet. Tap an instrument on Main to start!
              </div>
            `}
      </div>
    `}};it.styles=[N,C`
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
    `];$t([v({type:Array})],it.prototype,"instruments",2);$t([v({type:Array})],it.prototype,"sessions",2);$t([m()],it.prototype,"period",2);it=$t([j("pt-data-view")],it);var Fe=Object.defineProperty,je=Object.getOwnPropertyDescriptor,G=(i,t,e,n)=>{for(var s=n>1?void 0:n?je(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(s=(n?o(t,e,s):o(s))||s);return n&&s&&Fe(t,e,s),s};let O=class extends E{constructor(){super(...arguments),this.instruments=[],this.open=!1,this.selectedInstrumentId="",this.durationMinutes=20,this.sessionDate=new Date().toISOString().slice(0,10),this.notes=""}connectedCallback(){super.connectedCallback(),this.instruments.length>0&&!this.selectedInstrumentId&&(this.selectedInstrumentId=this.instruments[0].id)}willUpdate(i){i.has("instruments")&&this.instruments.length>0&&!this.selectedInstrumentId&&(this.selectedInstrumentId=this.instruments[0].id)}setPreset(i){this.durationMinutes=i}handleSave(){if(!this.selectedInstrumentId||this.durationMinutes<=0)return;const i=this.sessionDate.split("-"),t=new Date;i.length===3&&t.setFullYear(parseInt(i[0]),parseInt(i[1])-1,parseInt(i[2])),this.dispatchEvent(new CustomEvent("save-manual-session",{detail:{instrumentId:this.selectedInstrumentId,start:t,duration:this.durationMinutes,notes:this.notes},bubbles:!0,composed:!0})),this.close()}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return this.open?c`
      <div class="modal-overlay" @click=${i=>i.target===i.currentTarget&&this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Log Practice Session</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="form-group">
            <label class="form-label">Select Instrument</label>
            <div class="inst-radio-group">
              ${this.instruments.map(i=>c`
                  <div
                    class="inst-radio ${this.selectedInstrumentId===i.id?"selected":""}"
                    @click=${()=>this.selectedInstrumentId=i.id}
                  >
                    <span class="inst-dot" style="background: ${i.color}"></span>
                    ${i.name}
                  </div>
                `)}
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Duration (Minutes)</label>
            <div class="preset-durations">
              ${[15,30,45,60].map(i=>c`
                  <button
                    type="button"
                    class="preset-btn ${this.durationMinutes===i?"active":""}"
                    @click=${()=>this.setPreset(i)}
                  >
                    ${i}m
                  </button>
                `)}
            </div>
            <input
              type="number"
              min="1"
              max="600"
              class="form-input"
              .value=${String(this.durationMinutes)}
              @input=${i=>this.durationMinutes=parseInt(i.target.value)||0}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Date</label>
            <input
              type="date"
              class="form-input"
              .value=${this.sessionDate}
              @input=${i=>this.sessionDate=i.target.value}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Notes (Optional)</label>
            <input
              type="text"
              placeholder="e.g. Scales, arpeggios, song practice..."
              class="form-input"
              .value=${this.notes}
              @input=${i=>this.notes=i.target.value}
            />
          </div>

          <button class="btn btn-primary" style="margin-top: 10px;" @click=${this.handleSave}>
            Save Practice Log
          </button>
        </div>
      </div>
    `:c``}};O.styles=[N,C`
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
    `];G([v({type:Array})],O.prototype,"instruments",2);G([v({type:Boolean})],O.prototype,"open",2);G([m()],O.prototype,"selectedInstrumentId",2);G([m()],O.prototype,"durationMinutes",2);G([m()],O.prototype,"sessionDate",2);G([m()],O.prototype,"notes",2);O=G([j("pt-manual-entry-modal")],O);var Ne=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,z=(i,t,e,n)=>{for(var s=n>1?void 0:n?ze(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(s=(n?o(t,e,s):o(s))||s);return n&&s&&Ne(t,e,s),s};let _=class extends E{constructor(){super(...arguments),this.instruments=[],this.session=null,this.open=!1,this.instrumentId="",this.duration=0,this.sessionDate="",this.notes=""}willUpdate(i){i.has("session")&&this.session&&(this.instrumentId=this.session.instrumentId,this.duration=this.session.duration,this.sessionDate=new Date(this.session.start).toISOString().slice(0,10),this.notes=this.session.notes||"")}handleSave(){if(!this.session||!this.instrumentId||this.duration<=0)return;const i=this.sessionDate.split("-"),t=new Date(this.session.start);i.length===3&&t.setFullYear(parseInt(i[0]),parseInt(i[1])-1,parseInt(i[2]));const e=new Date(t.getTime()+this.duration*6e4),n={...this.session,instrumentId:this.instrumentId,start:t.toISOString(),end:e.toISOString(),duration:Math.round(this.duration),notes:this.notes.trim()||void 0};this.dispatchEvent(new CustomEvent("update-session",{detail:{session:n},bubbles:!0,composed:!0})),this.close()}handleDelete(){this.session&&confirm("Are you sure you want to delete this practice session?")&&(this.dispatchEvent(new CustomEvent("delete-session",{detail:{sessionId:this.session.id},bubbles:!0,composed:!0})),this.close())}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return!this.open||!this.session?c``:c`
      <div class="modal-overlay" @click=${i=>i.target===i.currentTarget&&this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Edit Practice Session</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="form-group">
            <label class="form-label">Instrument</label>
            <div class="inst-radio-group">
              ${this.instruments.map(i=>c`
                  <div
                    class="inst-radio ${this.instrumentId===i.id?"selected":""}"
                    @click=${()=>this.instrumentId=i.id}
                  >
                    <span class="inst-dot" style="background: ${i.color}"></span>
                    ${i.name}
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
              @input=${i=>this.duration=parseInt(i.target.value)||0}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Date</label>
            <input
              type="date"
              class="form-input"
              .value=${this.sessionDate}
              @input=${i=>this.sessionDate=i.target.value}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Notes</label>
            <input
              type="text"
              class="form-input"
              .value=${this.notes}
              @input=${i=>this.notes=i.target.value}
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
    `}};_.styles=[N,C`
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
    `];z([v({type:Array})],_.prototype,"instruments",2);z([v({type:Object})],_.prototype,"session",2);z([v({type:Boolean})],_.prototype,"open",2);z([m()],_.prototype,"instrumentId",2);z([m()],_.prototype,"duration",2);z([m()],_.prototype,"sessionDate",2);z([m()],_.prototype,"notes",2);_=z([j("pt-edit-session-modal")],_);var Re=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,K=(i,t,e,n)=>{for(var s=n>1?void 0:n?Ue(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(s=(n?o(t,e,s):o(s))||s);return n&&s&&Re(t,e,s),s};let M=class extends E{constructor(){super(...arguments),this.instrument=null,this.canDelete=!0,this.open=!1,this.name="",this.color=lt[0],this.tier="secondary"}willUpdate(i){i.has("instrument")&&this.instrument&&(this.name=this.instrument.name,this.color=this.instrument.color,this.tier=this.instrument.tier)}handleSave(){if(!this.instrument||!this.name.trim())return;const i={...this.instrument,name:this.name.trim(),color:this.color,tier:this.tier};this.dispatchEvent(new CustomEvent("update-instrument",{detail:{instrument:i},bubbles:!0,composed:!0})),this.close()}handleDelete(){this.instrument&&confirm(`Remove "${this.instrument.name}" from kit? Past practice history will be preserved.`)&&(this.dispatchEvent(new CustomEvent("remove-instrument",{detail:{instrumentId:this.instrument.id},bubbles:!0,composed:!0})),this.close())}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return!this.open||!this.instrument?c``:c`
      <div class="modal-overlay" @click=${i=>i.target===i.currentTarget&&this.close()}>
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
              @input=${i=>this.name=i.target.value}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Color Swatch</label>
            <div class="swatches-grid">
              ${lt.map(i=>c`
                  <span
                    class="swatch ${this.color===i?"selected":""}"
                    style="background: ${i}"
                    @click=${()=>this.color=i}
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
            ${this.canDelete?c`
                  <button class="btn btn-danger" style="flex: 1;" @click=${this.handleDelete}>
                    Remove
                  </button>
                `:c``}
            <button class="btn btn-primary" style="flex: 2;" @click=${this.handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    `}};M.styles=[N,C`
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
    `];K([v({type:Object})],M.prototype,"instrument",2);K([v({type:Boolean})],M.prototype,"canDelete",2);K([v({type:Boolean})],M.prototype,"open",2);K([m()],M.prototype,"name",2);K([m()],M.prototype,"color",2);K([m()],M.prototype,"tier",2);M=K([j("pt-edit-instrument-modal")],M);var Be=Object.defineProperty,Le=Object.getOwnPropertyDescriptor,Ft=(i,t,e,n)=>{for(var s=n>1?void 0:n?Le(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(s=(n?o(t,e,s):o(s))||s);return n&&s&&Be(t,e,s),s};let ut=class extends E{constructor(){super(...arguments),this.settings={soundEnabled:!0,hapticsEnabled:!0},this.open=!1}handleSoundToggle(i){const t=i.target.checked;this.dispatchEvent(new CustomEvent("update-settings",{detail:{soundEnabled:t},bubbles:!0,composed:!0}))}handleHapticsToggle(i){const t=i.target.checked;this.dispatchEvent(new CustomEvent("update-settings",{detail:{hapticsEnabled:t},bubbles:!0,composed:!0}))}triggerExport(){this.dispatchEvent(new CustomEvent("export-backup",{bubbles:!0,composed:!0}))}triggerImport(){var t;const i=(t=this.shadowRoot)==null?void 0:t.querySelector("#import-file");i==null||i.click()}handleFileChange(i){var s;const t=i.target,e=(s=t.files)==null?void 0:s[0];if(!e)return;const n=new FileReader;n.onload=r=>{var l;const o=(l=r.target)==null?void 0:l.result;o&&this.dispatchEvent(new CustomEvent("import-backup",{detail:{jsonString:o},bubbles:!0,composed:!0})),t.value=""},n.readAsText(e)}triggerDemoData(){confirm("Load demo practice history? This will add ~33 days of sample sessions to preview charts.")&&(this.dispatchEvent(new CustomEvent("load-demo-data",{bubbles:!0,composed:!0})),this.close())}triggerClearData(){confirm("Reset all practice history? This will delete all sessions and cannot be undone.")&&(this.dispatchEvent(new CustomEvent("clear-all-data",{bubbles:!0,composed:!0})),this.close())}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return this.open?c`
      <div class="modal-overlay" @click=${i=>i.target===i.currentTarget&&this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Settings & Backups</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="section-heading">Feedback & Sound</div>
          <div class="setting-item">
            <div>
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
            <div>
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
    `:c``}};ut.styles=[N,C`
      .setting-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid #E1E1DB;
      }
      .setting-title {
        font-size: 14px;
        font-weight: 700;
      }
      .setting-desc {
        font-size: 11px;
        color: #767668;
        margin-top: 2px;
      }
      .switch {
        position: relative;
        display: inline-block;
        width: 44px;
        height: 24px;
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
      .btn-grid {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 8px;
      }
      .file-hidden {
        display: none;
      }
    `];Ft([v({type:Object})],ut.prototype,"settings",2);Ft([v({type:Boolean})],ut.prototype,"open",2);ut=Ft([j("pt-settings-modal")],ut);var He=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,w=(i,t,e,n)=>{for(var s=n>1?void 0:n?Ve(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(s=(n?o(t,e,s):o(s))||s);return n&&s&&He(t,e,s),s};let $=class extends E{constructor(){super(...arguments),this.tab="main",this.instruments=[],this.sessions=[],this.activeSession=null,this.settings={soundEnabled:!0,hapticsEnabled:!0},this.now=Date.now(),this.manualLogModalOpen=!1,this.settingsModalOpen=!1,this.editSessionModalOpen=!1,this.sessionToEdit=null,this.editInstrumentModalOpen=!1,this.instrumentToEdit=null}connectedCallback(){super.connectedCallback(),this.refreshState(),this.unsubscribeStore=b.subscribe(()=>{this.refreshState()}),this.timerInterval=window.setInterval(()=>{this.activeSession&&(this.now=Date.now())},1e3)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeStore&&this.unsubscribeStore(),this.timerInterval&&clearInterval(this.timerInterval)}refreshState(){this.instruments=b.getAllInstruments(),this.sessions=b.getSessions(),this.activeSession=b.getActiveSession(),this.settings=b.getSettings()}handleStartSession(i){b.startSession(i.detail.instrumentId)}handleEndSession(){b.endSession()}handleDiscardSession(){b.discardSession()}handleSaveManualSession(i){const{instrumentId:t,start:e,duration:n,notes:s}=i.detail;b.logManualSession(t,e,n,s)}handleUpdateSession(i){b.updateSession(i.detail.session)}handleDeleteSession(i){b.deleteSession(i.detail.sessionId)}handleAddInstrument(i){b.addInstrument(i.detail.name,i.detail.color,i.detail.tier)}handleUpdateInstrument(i){b.updateInstrument(i.detail.instrument)}handleRemoveInstrument(i){b.removeInstrument(i.detail.instrumentId)}handleUpdateSettings(i){b.updateSettings(i.detail)}handleExportBackup(){const i=b.exportBackup(),t=new Blob([i],{type:"application/json"}),e=URL.createObjectURL(t),n=document.createElement("a");n.href=e,n.download=`practice-tracker-backup-${new Date().toISOString().slice(0,10)}.json`,n.click(),URL.revokeObjectURL(e)}handleImportBackup(i){const t=b.importBackup(i.detail.jsonString);alert(t.message),t.success&&(this.settingsModalOpen=!1)}handleLoadDemoData(){b.loadDemoData()}handleClearAllData(){b.clearAllData()}render(){const i=new Date,t=i.toLocaleDateString([],{day:"numeric",month:"long"}),e=i.toLocaleDateString([],{weekday:"long"}),n=this.instruments.filter(s=>!s.archived);return c`
      <div class="app-wrapper">
        <div class="phone-shell">
          <!-- Top Header -->
          <div class="top-header">
            <div class="header-date-info">
              <span>${t}</span>
              <span>${e}</span>
            </div>
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

          <!-- Main Scrollable Content -->
          <div class="main-scroll-area">
            ${this.tab==="main"?c`
                  <pt-main-view
                    .instruments=${n}
                    .sessions=${this.sessions}
                    .activeSession=${this.activeSession}
                    .now=${this.now}
                    @start-session=${this.handleStartSession}
                    @end-session=${this.handleEndSession}
                    @discard-session=${this.handleDiscardSession}
                    @open-manual-log=${()=>this.manualLogModalOpen=!0}
                  ></pt-main-view>
                `:c``}
            ${this.tab==="kit"?c`
                  <pt-kit-view
                    .instruments=${this.instruments}
                    .sessions=${this.sessions}
                    @add-instrument=${this.handleAddInstrument}
                    @remove-instrument=${this.handleRemoveInstrument}
                    @open-edit-instrument=${s=>{this.instrumentToEdit=s.detail.instrument,this.editInstrumentModalOpen=!0}}
                  ></pt-kit-view>
                `:c``}
            ${this.tab==="data"?c`
                  <pt-data-view
                    .instruments=${this.instruments}
                    .sessions=${this.sessions}
                    @open-edit-session=${s=>{this.sessionToEdit=s.detail.session,this.editSessionModalOpen=!0}}
                  ></pt-data-view>
                `:c``}
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
        .instruments=${n}
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
        .canDelete=${n.length>1}
        .open=${this.editInstrumentModalOpen}
        @update-instrument=${this.handleUpdateInstrument}
        @remove-instrument=${this.handleRemoveInstrument}
        @close-modal=${()=>{this.editInstrumentModalOpen=!1,this.instrumentToEdit=null}}
      ></pt-edit-instrument-modal>

      <pt-settings-modal
        .settings=${this.settings}
        .open=${this.settingsModalOpen}
        @update-settings=${this.handleUpdateSettings}
        @export-backup=${this.handleExportBackup}
        @import-backup=${this.handleImportBackup}
        @load-demo-data=${this.handleLoadDemoData}
        @clear-all-data=${this.handleClearAllData}
        @close-modal=${()=>this.settingsModalOpen=!1}
      ></pt-settings-modal>
    `}};$.styles=[N,C`
      :host {
        display: block;
        min-height: 100vh;
        background: #8F8D88;
        font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
      }

      .app-wrapper {
        min-height: 100vh;
        padding: 40px 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      @media (max-width: 480px) {
        .app-wrapper {
          padding: 0;
          align-items: stretch;
        }
      }

      .phone-shell {
        width: 380px;
        height: 830px;
        background: #EDEDE9;
        border-radius: 28px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        color: #23241F;
        box-shadow: 0 20px 48px rgba(0, 0, 0, 0.22);
        position: relative;
      }

      @media (max-width: 480px) {
        .phone-shell {
          width: 100%;
          height: 100vh;
          border-radius: 0;
          box-shadow: none;
        }
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
    `];w([m()],$.prototype,"tab",2);w([m()],$.prototype,"instruments",2);w([m()],$.prototype,"sessions",2);w([m()],$.prototype,"activeSession",2);w([m()],$.prototype,"settings",2);w([m()],$.prototype,"now",2);w([m()],$.prototype,"manualLogModalOpen",2);w([m()],$.prototype,"settingsModalOpen",2);w([m()],$.prototype,"editSessionModalOpen",2);w([m()],$.prototype,"sessionToEdit",2);w([m()],$.prototype,"editInstrumentModalOpen",2);w([m()],$.prototype,"instrumentToEdit",2);$=w([j("pt-app")],$);"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})});
