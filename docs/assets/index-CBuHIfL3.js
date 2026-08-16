(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=globalThis,Ft=xt.ShadowRoot&&(xt.ShadyCSS===void 0||xt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pt=Symbol(),Ut=new WeakMap;let te=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Pt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ft&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Ut.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ut.set(e,t))}return t}toString(){return this.cssText}};const oe=n=>new te(typeof n=="string"?n:n+"",void 0,Pt),_=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new te(e,n,Pt)},re=(n,t)=>{if(Ft)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=xt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},zt=Ft?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return oe(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ae,defineProperty:ce,getOwnPropertyDescriptor:de,getOwnPropertyNames:le,getOwnPropertySymbols:pe,getPrototypeOf:ue}=Object,N=globalThis,Lt=N.trustedTypes,he=Lt?Lt.emptyScript:"",_t=N.reactiveElementPolyfillSupport,pt=(n,t)=>n,St={toAttribute(n,t){switch(t){case Boolean:n=n?he:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Nt=(n,t)=>!ae(n,t),Rt={attribute:!0,type:String,converter:St,reflect:!1,useDefault:!1,hasChanged:Nt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),N.litPropertyMetadata??(N.litPropertyMetadata=new WeakMap);let it=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Rt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ce(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=de(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:s,set(r){const a=s==null?void 0:s.call(this);o==null||o.call(this,r),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Rt}static _$Ei(){if(this.hasOwnProperty(pt("elementProperties")))return;const t=ue(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(pt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(pt("properties"))){const e=this.properties,i=[...le(e),...pe(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(zt(s))}else t!==void 0&&e.push(zt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return re(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const r=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:St).toAttribute(e,i.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,e){var o,r;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:St;this._$Em=s;const u=c.fromAttribute(e,a.type);this[s]=u??((r=this._$Ej)==null?void 0:r.get(s))??u,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){var r;if(t!==void 0){const a=this.constructor;if(s===!1&&(o=this[t]),i??(i=a.getPropertyOptions(t)),!((i.hasChanged??Nt)(o,e)||i.useDefault&&i.reflect&&o===((r=this._$Ej)==null?void 0:r.get(t))&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,r??e??this[t]),o!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,r]of s){const{wrapped:a}=r,c=this[o];a!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,r,c)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};it.elementStyles=[],it.shadowRootOptions={mode:"open"},it[pt("elementProperties")]=new Map,it[pt("finalized")]=new Map,_t==null||_t({ReactiveElement:it}),(N.reactiveElementVersions??(N.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ut=globalThis,Ht=n=>n,wt=ut.trustedTypes,Vt=wt?wt.createPolicy("lit-html",{createHTML:n=>n}):void 0,ee="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,se="?"+F,ge=`<${se}>`,W=document,gt=()=>W.createComment(""),mt=n=>n===null||typeof n!="object"&&typeof n!="function",jt=Array.isArray,me=n=>jt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",It=`[ 	
\f\r]`,lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wt=/-->/g,Jt=/>/g,L=RegExp(`>|${It}(?:([^\\s"'>=/]+)(${It}*=${It}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yt=/'/g,qt=/"/g,ie=/^(?:script|style|textarea|title)$/i,fe=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),l=fe(1),ot=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Gt=new WeakMap,R=W.createTreeWalker(W,129);function ne(n,t){if(!jt(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vt!==void 0?Vt.createHTML(t):t}const ye=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",r=lt;for(let a=0;a<e;a++){const c=n[a];let u,d,h=-1,p=0;for(;p<c.length&&(r.lastIndex=p,d=r.exec(c),d!==null);)p=r.lastIndex,r===lt?d[1]==="!--"?r=Wt:d[1]!==void 0?r=Jt:d[2]!==void 0?(ie.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=L):d[3]!==void 0&&(r=L):r===L?d[0]===">"?(r=s??lt,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,u=d[1],r=d[3]===void 0?L:d[3]==='"'?qt:Yt):r===qt||r===Yt?r=L:r===Wt||r===Jt?r=lt:(r=L,s=void 0);const f=r===L&&n[a+1].startsWith("/>")?" ":"";o+=r===lt?c+ge:h>=0?(i.push(u),c.slice(0,h)+ee+c.slice(h)+F+f):c+F+(h===-2?a:f)}return[ne(n,o+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class ft{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const a=t.length-1,c=this.parts,[u,d]=ye(t,e);if(this.el=ft.createElement(u,i),R.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=R.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(ee)){const p=d[r++],f=s.getAttribute(h).split(F),w=/([.?@])?(.*)/.exec(p);c.push({type:1,index:o,name:w[2],strings:f,ctor:w[1]==="."?ve:w[1]==="?"?xe:w[1]==="@"?Se:Et}),s.removeAttribute(h)}else h.startsWith(F)&&(c.push({type:6,index:o}),s.removeAttribute(h));if(ie.test(s.tagName)){const h=s.textContent.split(F),p=h.length-1;if(p>0){s.textContent=wt?wt.emptyScript:"";for(let f=0;f<p;f++)s.append(h[f],gt()),R.nextNode(),c.push({type:2,index:++o});s.append(h[p],gt())}}}else if(s.nodeType===8)if(s.data===se)c.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(F,h+1))!==-1;)c.push({type:7,index:o}),h+=F.length-1}o++}}static createElement(t,e){const i=W.createElement("template");return i.innerHTML=t,i}}function rt(n,t,e=n,i){var r,a;if(t===ot)return t;let s=i!==void 0?(r=e._$Co)==null?void 0:r[i]:e._$Cl;const o=mt(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=rt(n,s._$AS(n,t.values),s,i)),t}class be{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??W).importNode(e,!0);R.currentNode=s;let o=R.nextNode(),r=0,a=0,c=i[0];for(;c!==void 0;){if(r===c.index){let u;c.type===2?u=new yt(o,o.nextSibling,this,t):c.type===1?u=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(u=new we(o,this,t)),this._$AV.push(u),c=i[++a]}r!==(c==null?void 0:c.index)&&(o=R.nextNode(),r++)}return R.currentNode=W,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class yt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=rt(this,t,e),mt(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==ot&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):me(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==x&&mt(this._$AH)?this._$AA.nextSibling.data=t:this.T(W.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ft.createElement(ne(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const r=new be(s,this),a=r.u(this.options);r.p(e),this.T(a),this._$AH=r}}_$AC(t){let e=Gt.get(t.strings);return e===void 0&&Gt.set(t.strings,e=new ft(t)),e}k(t){jt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new yt(this.O(gt()),this.O(gt()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t!==this._$AB;){const s=Ht(t).nextSibling;Ht(t).remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=rt(this,t,e,0),r=!mt(t)||t!==this._$AH&&t!==ot,r&&(this._$AH=t);else{const a=t;let c,u;for(t=o[0],c=0;c<o.length-1;c++)u=rt(this,a[i+c],e,c),u===ot&&(u=this._$AH[c]),r||(r=!mt(u)||u!==this._$AH[c]),u===x?t=x:t!==x&&(t+=(u??"")+o[c+1]),this._$AH[c]=u}r&&!s&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ve extends Et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}}class xe extends Et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==x)}}class Se extends Et{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=rt(this,t,e,0)??x)===ot)return;const i=this._$AH,s=t===x&&i!==x||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==x&&(i===x||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class we{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){rt(this,t)}}const Ot=ut.litHtmlPolyfillSupport;Ot==null||Ot(ft,yt),(ut.litHtmlVersions??(ut.litHtmlVersions=[])).push("3.3.3");const $e=(n,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new yt(t.insertBefore(gt(),o),o,void 0,e??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis;class A extends it{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$e(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ot}}var Qt;A._$litElement$=!0,A.finalized=!0,(Qt=H.litElementHydrateSupport)==null||Qt.call(H,{LitElement:A});const Ct=H.litElementPolyfillSupport;Ct==null||Ct({LitElement:A});(H.litElementVersions??(H.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee={attribute:!0,type:String,converter:St,reflect:!1,hasChanged:Nt},Ae=(n=Ee,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((n=Object.create(n)).wrapped=!0),o.set(e.name,n),i==="accessor"){const{name:r}=e;return{set(a){const c=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,c,n,!0,a)},init(a){return a!==void 0&&this.C(r,void 0,n,a),a}}}if(i==="setter"){const{name:r}=e;return function(a){const c=this[r];t.call(this,a),this.requestUpdate(r,c,n,!0,a)}}throw Error("Unsupported decorator location: "+i)};function b(n){return(t,e)=>typeof e=="object"?Ae(n,t,e):((i,s,o)=>{const r=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),r?Object.getOwnPropertyDescriptor(s,o):void 0})(n,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(n){return b({...n,state:!0,attribute:!1})}const $t="#E1E1DB",ht=["#6B7F6E","#8A7B94","#9FAF95","#7D6E7F","#A98F72","#8B98A8","#A8817D","#7A8A99"];function ke(n){if(n.reduce((s,o)=>s+o.pct,0)<=0)return`conic-gradient(${$t} 0% 100%)`;let e=0;const i=[];return n.forEach(s=>{const o=e;e+=s.pct,i.push(`${s.color} ${o.toFixed(1)}% ${e.toFixed(1)}%`)}),e<100&&i.push(`${$t} ${e.toFixed(1)}% 100%`),`conic-gradient(${i.join(", ")})`}function Tt(n,t){const e=Math.max(0,Math.min(100,t));return e<=0?`conic-gradient(${$t} 0% 100%)`:`conic-gradient(${n} 0% ${e.toFixed(1)}%, ${$t} ${e.toFixed(1)}% 100%)`}function De(n){return n.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||"instrument"}function nt(n){if(n<=0)return"0′";if(n<60)return`${n}′`;const t=Math.floor(n/60),e=n%60;return`${t}h${e?` ${e}m`:""}`}function _e(n){const t=Math.max(0,Math.floor(n/1e3)),e=Math.floor(t/3600),i=Math.floor(t%3600/60),s=t%60,o=String(i).padStart(2,"0"),r=String(s).padStart(2,"0");return e>0?`${e}:${o}:${r}`:`${i}:${r}`}function J(n){const t=new Date(n);return t.setHours(0,0,0,0),t}function V(n,t){const e=new Date(n);return e.setDate(e.getDate()+t),e}function P(n){return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function Ie(n,t){return n.getFullYear()===t.getFullYear()&&n.getMonth()===t.getMonth()&&n.getDate()===t.getDate()}function Oe(n){const t=J(new Date),e={};n.forEach(c=>{const u=P(J(new Date(c.start)));e[u]=!0});let s=!!e[P(t)]?t:V(t,-1),o=0;for(;e[P(s)];)o++,s=V(s,-1);let r=0;for(let c=0;c<30;c++){const u=V(t,-c);e[P(u)]&&r++}const a=Math.round(r/30*100);return{currentStreak:o,consistency30d:a}}function Ce(n){if(!n)return"Never";const t=new Date(n).getTime();if(isNaN(t))return"Never";const e=Math.floor((Date.now()-t)/1e3);if(e<10)return"Just now";if(e<60)return`${e}s ago`;const i=Math.floor(e/60);if(i<60)return`${i}m ago`;const s=Math.floor(i/60);if(s<24)return`${s}h ago`;const o=Math.floor(s/24);return o===1?"Yesterday":`${o}d ago`}let Q=null;function Bt(){if(typeof window>"u")return null;if(!Q){const n=window.AudioContext||window.webkitAudioContext;n&&(Q=new n)}return Q&&Q.state==="suspended"&&Q.resume().catch(()=>{}),Q}function Me(n=!0){if(n)try{const t=Bt();if(!t)return;const e=t.currentTime,i=t.createOscillator(),s=t.createGain();i.type="sine",i.frequency.setValueAtTime(440,e),i.frequency.exponentialRampToValueAtTime(880,e+.12),s.gain.setValueAtTime(.001,e),s.gain.linearRampToValueAtTime(.12,e+.03),s.gain.exponentialRampToValueAtTime(1e-4,e+.2),i.connect(s),s.connect(t.destination),i.start(e),i.stop(e+.2)}catch{}}function Kt(n=!0){if(n)try{const t=Bt();if(!t)return;const e=t.currentTime;[523.25,659.25,783.99].forEach((i,s)=>{const o=t.createOscillator(),r=t.createGain();o.type="sine",o.frequency.setValueAtTime(i,e+s*.06),r.gain.setValueAtTime(.001,e+s*.06),r.gain.linearRampToValueAtTime(.08,e+s*.06+.04),r.gain.exponentialRampToValueAtTime(1e-4,e+s*.06+.45),o.connect(r),r.connect(t.destination),o.start(e+s*.06),o.stop(e+s*.06+.5)})}catch{}}function tt(n=!0){if(n)try{const t=Bt();if(!t)return;const e=t.currentTime,i=t.createOscillator(),s=t.createGain();i.type="triangle",i.frequency.setValueAtTime(320,e),i.frequency.exponentialRampToValueAtTime(160,e+.04),s.gain.setValueAtTime(.05,e),s.gain.exponentialRampToValueAtTime(1e-4,e+.05),i.connect(s),s.connect(t.destination),i.start(e),i.stop(e+.05)}catch{}}function Mt(n=15,t=!0){if(t)try{typeof navigator<"u"&&"vibrate"in navigator&&navigator.vibrate(n)}catch{}}class Te{formatUrl(t){let e=t.trim().replace(/\/+$/,"");return e&&!e.startsWith("http://")&&!e.startsWith("https://")&&(e="https://"+e),e}async testConnection(t,e){const i=this.formatUrl(t);if(!i)return{ok:!1,status:0,message:"Worker URL cannot be empty"};try{const s={};e&&(s["X-PT-Secret"]=e.trim());const o=new AbortController,r=setTimeout(()=>o.abort(),8e3),a=await fetch(`${i}/api/health`,{method:"GET",headers:s,signal:o.signal});if(clearTimeout(r),a.status===200)return{ok:!0,status:200,message:"Connected to Cloudflare Worker",timestamp:(await a.json().catch(()=>({}))).timestamp};if(a.status===401)return{ok:!1,status:401,message:"Unauthorized: Invalid or missing sync passcode"};const c=await a.text().catch(()=>"");return{ok:!1,status:a.status,message:`Connection error (${a.status}): ${c||a.statusText}`}}catch(s){return s instanceof Error&&s.name==="AbortError"?{ok:!1,status:0,message:"Connection timed out (8s limit)"}:{ok:!1,status:0,message:"Network error: Unable to reach worker endpoint"}}}async sync(t,e,i){const s=this.formatUrl(t);if(!s)throw new Error("Worker URL is not configured");const o={"Content-Type":"application/json"};e&&(o["X-PT-Secret"]=e.trim());const r=new AbortController,a=setTimeout(()=>r.abort(),15e3),c=await fetch(`${s}/api/sync`,{method:"POST",headers:o,body:JSON.stringify(i),signal:r.signal});if(clearTimeout(a),!c.ok){let u="";try{const d=await c.json();u=d.error||d.message||""}catch{u=await c.text().catch(()=>"")}throw new Error(`Cloud sync failed (${c.status}): ${u||c.statusText||"Unknown error"}`)}return await c.json()}}const Xt=new Te,et=[{id:"guitar",name:"Guitar",color:"#6B7F6E",tier:"primary",updatedAt:new Date(0).toISOString()},{id:"piano",name:"Piano",color:"#8A7B94",tier:"primary",updatedAt:new Date(0).toISOString()},{id:"acoustic",name:"Acoustic Guitar",color:"#9FAF95",tier:"secondary",updatedAt:new Date(0).toISOString()},{id:"bass",name:"Bass",color:"#7D6E7F",tier:"secondary",updatedAt:new Date(0).toISOString()},{id:"drumming",name:"Finger Drumming",color:"#A98F72",tier:"secondary",updatedAt:new Date(0).toISOString()}],Fe={id:"_removed",name:"Archived Instrument",color:"#C3C1B7",tier:"secondary",archived:!0,updatedAt:new Date(0).toISOString()},k={SESSIONS:"ptSessionsV2",INSTRUMENTS:"ptInstrumentsV1",ACTIVE:"ptActiveSessionV1",SETTINGS:"ptSettingsV1",TOMBSTONES:"ptTombstonesV1"};function Pe(){try{return"https://practice-tracker-sync.warmsynthsiloveyou.workers.dev"}catch{return}}function Ne(){try{return"pt_sync_sec_8a39"}catch{return}}function st(){try{if(typeof window<"u"&&window.localStorage)return window.localStorage;if(typeof localStorage<"u")return localStorage}catch{}return null}class je{constructor(){this.instruments=[],this.sessions=[],this.activeSession=null,this.settings={soundEnabled:!0,hapticsEnabled:!0},this.tombstones=[],this.syncStatus="local",this.syncErrorMessage=null,this.listeners=new Set,this.currentSyncPromise=null,this.loadFromStorage()}subscribe(t){return this.listeners.add(t),()=>{this.listeners.delete(t)}}notify(){this.listeners.forEach(t=>t())}getEffectiveWorkerUrl(){return this.settings.workerUrl||Pe()}getEffectiveSyncPasscode(){return this.settings.syncPasscode||Ne()}isCloudSyncConfigured(){return!!this.getEffectiveWorkerUrl()}loadFromStorage(){const t=st();if(!t){this.instruments=[...et],this.sessions=[],this.syncStatus="local";return}try{const e=t.getItem(k.INSTRUMENTS);if(e){const a=JSON.parse(e);Array.isArray(a)&&a.length>0?this.instruments=a.map(c=>({...c,updatedAt:c.updatedAt||new Date(0).toISOString()})):this.instruments=[...et]}else this.instruments=[...et],this.persistInstruments();const i=t.getItem(k.SESSIONS);if(i){const a=JSON.parse(i);Array.isArray(a)?this.sessions=a.map(c=>({...c,updatedAt:c.updatedAt||new Date(0).toISOString()})):this.sessions=[]}else this.sessions=[];const s=t.getItem(k.ACTIVE);if(s){const a=JSON.parse(s);a&&a.instrumentId&&a.startedAt&&(this.activeSession=a)}const o=t.getItem(k.TOMBSTONES);if(o){const a=JSON.parse(o);Array.isArray(a)&&(this.tombstones=a)}const r=t.getItem(k.SETTINGS);r&&(this.settings={...this.settings,...JSON.parse(r)}),this.isCloudSyncConfigured()?this.syncStatus=typeof window<"u"&&typeof navigator<"u"&&navigator.onLine===!1?"offline":"synced":this.syncStatus="local"}catch(e){console.error("Error loading practice store from storage:",e),this.instruments=[...et],this.sessions=[],this.syncStatus="local"}}persistInstruments(){try{const t=st();t==null||t.setItem(k.INSTRUMENTS,JSON.stringify(this.instruments))}catch(t){console.error("Error saving instruments:",t)}}persistSessions(){try{const t=st();t==null||t.setItem(k.SESSIONS,JSON.stringify(this.sessions))}catch(t){console.error("Error saving sessions:",t)}}persistActive(){try{const t=st();if(!t)return;this.activeSession?t.setItem(k.ACTIVE,JSON.stringify(this.activeSession)):t.removeItem(k.ACTIVE)}catch(t){console.error("Error saving active session:",t)}}persistSettings(){try{const t=st();t==null||t.setItem(k.SETTINGS,JSON.stringify(this.settings))}catch(t){console.error("Error saving settings:",t)}}persistTombstones(){try{const t=st();t==null||t.setItem(k.TOMBSTONES,JSON.stringify(this.tombstones))}catch(t){console.error("Error saving tombstones:",t)}}getActiveInstruments(){return this.instruments.filter(t=>!t.archived)}getAllInstruments(){return[...this.instruments]}getInstrument(t){return this.instruments.find(e=>e.id===t)||Fe}getSessions(){return[...this.sessions]}getActiveSession(){return this.activeSession}getSettings(){return{...this.settings}}getSyncStatus(){return this.syncStatus}getSyncErrorMessage(){return this.syncErrorMessage}getLastSyncedAt(){return this.settings.lastSyncedAt||null}startSession(t){this.activeSession||(this.activeSession={instrumentId:t,startedAt:Date.now()},this.persistActive(),Me(this.settings.soundEnabled),Mt(20,this.settings.hapticsEnabled),this.notify())}endSession(){if(!this.activeSession)return null;const t=Date.now(),e=Math.max(1,Math.round((t-this.activeSession.startedAt)/6e4)),i=new Date(t).toISOString(),s={id:"s-"+Math.random().toString(36).slice(2,9)+"-"+Date.now().toString(36),instrumentId:this.activeSession.instrumentId,start:new Date(this.activeSession.startedAt).toISOString(),end:i,duration:e,updatedAt:i};return this.sessions=[s,...this.sessions],this.activeSession=null,this.persistSessions(),this.persistActive(),Kt(this.settings.soundEnabled),Mt([30,50,30],this.settings.hapticsEnabled),this.notify(),this.triggerBackgroundSync(),s}discardSession(){this.activeSession&&(this.activeSession=null,this.persistActive(),tt(this.settings.soundEnabled),this.notify())}logManualSession(t,e,i,s){const o=new Date(e.getTime()+Math.max(1,i)*6e4),r=new Date().toISOString(),a={id:"m-"+Math.random().toString(36).slice(2,9)+"-"+Date.now().toString(36),instrumentId:t,start:e.toISOString(),end:o.toISOString(),duration:Math.max(1,Math.round(i)),notes:(s==null?void 0:s.trim())||void 0,updatedAt:r};return this.sessions=[a,...this.sessions],this.persistSessions(),Kt(this.settings.soundEnabled),Mt(25,this.settings.hapticsEnabled),this.notify(),this.triggerBackgroundSync(),a}updateSession(t){const e=new Date().toISOString(),i={...t,updatedAt:e};this.sessions=this.sessions.map(s=>s.id===t.id?i:s),this.persistSessions(),tt(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}deleteSession(t){const e=new Date().toISOString();this.sessions=this.sessions.filter(i=>i.id!==t),this.tombstones=[...this.tombstones.filter(i=>i.id!==t),{id:t,type:"session",deletedAt:e}],this.persistSessions(),this.persistTombstones(),tt(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}addInstrument(t,e,i){const s=t.trim(),o=De(s)+"-"+Math.random().toString(36).slice(2,6),r=new Date().toISOString(),a={id:o,name:s,color:e,tier:i,updatedAt:r};return this.instruments=[...this.instruments,a],this.persistInstruments(),tt(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync(),a}updateInstrument(t){const e=new Date().toISOString(),i={...t,updatedAt:e};this.instruments=this.instruments.map(s=>s.id===t.id?i:s),this.persistInstruments(),tt(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}removeInstrument(t){if(this.getActiveInstruments().length<=1)return;this.activeSession&&this.activeSession.instrumentId===t&&(this.activeSession=null,this.persistActive());const i=new Date().toISOString();this.sessions.some(o=>o.instrumentId===t)?this.instruments=this.instruments.map(o=>o.id===t?{...o,archived:!0,updatedAt:i}:o):(this.instruments=this.instruments.filter(o=>o.id!==t),this.tombstones=[...this.tombstones.filter(o=>o.id!==t),{id:t,type:"instrument",deletedAt:i}],this.persistTombstones()),this.persistInstruments(),tt(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}async testConnection(t,e){const i=t!==void 0?t:this.settings.workerUrl||"",s=e!==void 0?e:this.settings.syncPasscode;return Xt.testConnection(i,s)}triggerBackgroundSync(){this.isCloudSyncConfigured()&&!this.currentSyncPromise&&this.syncWithCloud().catch(t=>{console.warn("Background sync error:",t)})}async syncWithCloud(t=!1){if(this.currentSyncPromise){if(!t)return this.currentSyncPromise;await this.currentSyncPromise.catch(()=>{})}const e=this.getEffectiveWorkerUrl(),i=this.getEffectiveSyncPasscode();if(!e)return this.syncStatus="local",this.notify(),{success:!0,message:"Local only mode (no worker configured)"};if(typeof window<"u"&&typeof navigator<"u"&&navigator.onLine===!1)return this.syncStatus="offline",this.notify(),{success:!1,message:"Device is offline"};this.currentSyncPromise=this.performSync(e,i,t);try{return await this.currentSyncPromise}finally{this.currentSyncPromise=null}}async performSync(t,e,i){this.syncStatus="syncing",this.syncErrorMessage=null,this.notify();try{const s=i?null:this.settings.lastSyncedAt||null,o=new Set(this.tombstones.map(p=>p.id)),r=i||!s?this.instruments:this.instruments.filter(p=>!p.updatedAt||p.updatedAt>s),a=i||!s?this.sessions:this.sessions.filter(p=>!p.updatedAt||p.updatedAt>s),c={lastSyncedAt:s,instruments:r,sessions:a,tombstones:[...this.tombstones]},u=await Xt.sync(t,e,c),d=new Map(this.instruments.map(p=>[p.id,p]));for(const p of u.instruments){const f=d.get(p.id);if(!f)d.set(p.id,p);else{const w=f.updatedAt?new Date(f.updatedAt).getTime():0;(p.updatedAt?new Date(p.updatedAt).getTime():0)>=w&&d.set(p.id,{...f,...p})}}const h=new Map(this.sessions.map(p=>[p.id,p]));for(const p of u.sessions){const f=h.get(p.id);if(!f)h.set(p.id,p);else{const w=f.updatedAt?new Date(f.updatedAt).getTime():0;(p.updatedAt?new Date(p.updatedAt).getTime():0)>=w&&h.set(p.id,{...f,...p})}}for(const p of u.tombstones)p.type==="instrument"?d.delete(p.id):p.type==="session"&&h.delete(p.id);return this.instruments=Array.from(d.values()),this.sessions=Array.from(h.values()).sort((p,f)=>new Date(f.start).getTime()-new Date(p.start).getTime()),this.tombstones=this.tombstones.filter(p=>!o.has(p.id)),this.settings.lastSyncedAt=u.syncedAt,this.syncStatus="synced",this.syncErrorMessage=null,this.persistInstruments(),this.persistSessions(),this.persistTombstones(),this.persistSettings(),this.notify(),{success:!0}}catch(s){const o=s instanceof Error?s.message:String(s);return console.error("PracticeStore sync failed:",o),this.syncStatus="error",this.syncErrorMessage=o,this.notify(),{success:!1,message:o}}}disconnectCloudSync(){this.settings.workerUrl=void 0,this.settings.syncPasscode=void 0,this.settings.lastSyncedAt=void 0,this.syncStatus="local",this.syncErrorMessage=null,this.persistSettings(),this.notify()}updateSettings(t){this.settings={...this.settings,...t},this.persistSettings(),this.settings.workerUrl?this.syncStatus="synced":this.syncStatus="local",this.notify()}exportBackup(){const t={version:2,exportedAt:new Date().toISOString(),instruments:this.instruments,sessions:this.sessions,settings:this.settings};return JSON.stringify(t,null,2)}importBackup(t){try{const e=JSON.parse(t);return!e||!Array.isArray(e.instruments)&&!Array.isArray(e.sessions)?{success:!1,message:"Invalid backup file format."}:(Array.isArray(e.instruments)&&e.instruments.length>0&&(this.instruments=e.instruments.map(i=>({...i,updatedAt:i.updatedAt||new Date().toISOString()})),this.persistInstruments()),Array.isArray(e.sessions)&&(this.sessions=e.sessions.map(i=>({...i,updatedAt:i.updatedAt||new Date().toISOString()})),this.persistSessions()),e.settings&&(this.settings={...this.settings,...e.settings},this.persistSettings()),this.activeSession=null,this.persistActive(),this.notify(),this.triggerBackgroundSync(),{success:!0,message:"Backup successfully restored."})}catch(e){return{success:!1,message:"Failed to parse JSON file: "+String(e)}}}loadDemoData(){this.instruments=[...et],this.persistInstruments();const t=J(new Date),e=[],i=new Date().toISOString();for(let r=33;r>=1;r--){const a=V(t,-r),c=a.getDay();if(!(Math.random()<.12)){if(c>=1&&c<=5){const u=Math.random()<.7?["guitar","piano"]:[Math.random()<.5?"guitar":"piano"];let d=7;u.forEach(h=>{const p=new Date(a);p.setHours(d,30+Math.floor(Math.random()*20),0,0);const f=12+Math.floor(Math.random()*25),w=new Date(p.getTime()+f*6e4);e.push({id:"seed-"+Math.random().toString(36).slice(2,8),instrumentId:h,start:p.toISOString(),end:w.toISOString(),duration:f,updatedAt:i}),d+=1})}else if(Math.random()<.75){const u=["acoustic","bass","drumming"][Math.floor(Math.random()*3)],d=new Date(a);d.setHours(11,Math.floor(Math.random()*40),0,0);const h=20+Math.floor(Math.random()*30),p=new Date(d.getTime()+h*6e4);e.push({id:"seed-"+Math.random().toString(36).slice(2,8),instrumentId:u,start:d.toISOString(),end:p.toISOString(),duration:h,updatedAt:i})}}}const s=new Date(t);s.setHours(7,40,0,0),e.unshift({id:"seed-today-guitar",instrumentId:"guitar",start:s.toISOString(),end:new Date(s.getTime()+22*6e4).toISOString(),duration:22,updatedAt:i});const o=new Date(t);o.setHours(8,15,0,0),e.unshift({id:"seed-today-piano",instrumentId:"piano",start:o.toISOString(),end:new Date(o.getTime()+18*6e4).toISOString(),duration:18,updatedAt:i}),this.sessions=e,this.activeSession=null,this.persistSessions(),this.persistActive(),this.notify(),this.triggerBackgroundSync()}clearAllData(){this.instruments=[...et],this.sessions=[],this.activeSession=null,this.tombstones=[],this.persistInstruments(),this.persistSessions(),this.persistTombstones(),this.persistActive(),this.notify()}}const y=new je;class Be{constructor(t=6e4,e=2e3){this.isRunning=!1,this.heartbeatTimer=null,this.lastTriggeredAt=0,this.onVisibilityChangeHandler=()=>this.handleVisibilityChange(),this.onFocusHandler=()=>this.handleWindowFocus(),this.onOnlineHandler=()=>this.handleOnline(),this.onOfflineHandler=()=>this.handleOffline(),this.heartbeatIntervalMs=t,this.debounceMs=e}start(){this.isRunning||(this.isRunning=!0,typeof document<"u"&&document.addEventListener("visibilitychange",this.onVisibilityChangeHandler),typeof window<"u"&&(window.addEventListener("focus",this.onFocusHandler),window.addEventListener("online",this.onOnlineHandler),window.addEventListener("offline",this.onOfflineHandler)),this.startHeartbeat(),this.triggerSync())}stop(){this.isRunning&&(this.isRunning=!1,typeof document<"u"&&document.removeEventListener("visibilitychange",this.onVisibilityChangeHandler),typeof window<"u"&&(window.removeEventListener("focus",this.onFocusHandler),window.removeEventListener("online",this.onOnlineHandler),window.removeEventListener("offline",this.onOfflineHandler)),this.stopHeartbeat())}triggerSync(t=!1){const e=Date.now();!t&&e-this.lastTriggeredAt<this.debounceMs||(this.lastTriggeredAt=e,y.isCloudSyncConfigured()&&y.triggerBackgroundSync())}handleVisibilityChange(){typeof document<"u"&&document.visibilityState==="visible"&&this.triggerSync()}handleWindowFocus(){this.triggerSync()}handleOnline(){this.triggerSync(!0)}handleOffline(){this.triggerSync()}startHeartbeat(){this.stopHeartbeat(),this.heartbeatTimer=setInterval(()=>{(typeof document>"u"||document.visibilityState==="visible")&&this.triggerSync()},this.heartbeatIntervalMs)}stopHeartbeat(){this.heartbeatTimer!==null&&(clearInterval(this.heartbeatTimer),this.heartbeatTimer=null)}}const Zt=new Be,B=_`
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
`;var Ue=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,bt=(n,t,e,i)=>{for(var s=i>1?void 0:i?ze(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Ue(t,e,s),s};let Y=class extends A{constructor(){super(...arguments),this.instruments=[],this.sessions=[],this.activeSession=null,this.now=Date.now()}handleStart(n){this.dispatchEvent(new CustomEvent("start-session",{detail:{instrumentId:n},bubbles:!0,composed:!0}))}handleEnd(){this.dispatchEvent(new CustomEvent("end-session",{bubbles:!0,composed:!0}))}handleDiscard(){this.dispatchEvent(new CustomEvent("discard-session",{bubbles:!0,composed:!0}))}handleOpenManual(){this.dispatchEvent(new CustomEvent("open-manual-log",{bubbles:!0,composed:!0}))}render(){const n=J(new Date),{currentStreak:t,consistency30d:e}=Oe(this.sessions),i=Tt("#6B7F6E",e),s=this.sessions.filter(u=>Ie(new Date(u.start),n)),o=new Map(this.instruments.map(u=>[u.id,u])),r=this.activeSession?o.get(this.activeSession.instrumentId)||{id:this.activeSession.instrumentId,name:"Instrument",color:"#6B7F6E"}:null,a=this.activeSession?Math.max(0,this.now-this.activeSession.startedAt):0,c=_e(a);return l`
      <!-- Streak Section -->
      <div class="streak-container">
        <div class="streak-outer-ring" style="background: ${i};">
          <div class="streak-inner-circle">
            <div class="streak-number">${t}</div>
            <div class="streak-label">DAY STREAK</div>
          </div>
        </div>
      </div>

      <!-- Today Dots -->
      <div class="dots-container">
        ${s.length>0?s.map(u=>{const d=o.get(u.instrumentId);return l`<span class="dot" style="background: ${(d==null?void 0:d.color)||"#A3A297"}"></span>`}):l`<span class="no-dots-text">nothing logged yet today</span>`}
      </div>

      <!-- Active Session or Idle Launcher -->
      ${this.activeSession&&r?l`
            <div class="active-card-wrap">
              <div class="active-card" style="background: ${r.color};">
                <div class="active-badge">
                  <span class="active-pulse-dot"></span>
                  SESSION IN PROGRESS
                </div>
                <div class="active-title">${r.name}</div>
                <div class="active-timer">${c}</div>
                <div class="btn btn-end" @click=${this.handleEnd}>End session</div>
                <div class="discard-link" @click=${this.handleDiscard}>Discard timer</div>
              </div>
            </div>
          `:l`
            <div class="idle-launcher">
              <div class="launcher-caption">tap an instrument to start</div>
              <div class="chips-grid">
                ${this.instruments.map(u=>l`
                    <div
                      class="inst-chip ${u.tier}"
                      style="${u.tier==="primary"?`background: ${u.color};`:""}"
                      @click=${()=>this.handleStart(u.id)}
                    >
                      ${u.name}
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
    `}};Y.styles=[B,_`
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
    `];bt([b({type:Array})],Y.prototype,"instruments",2);bt([b({type:Array})],Y.prototype,"sessions",2);bt([b({type:Object})],Y.prototype,"activeSession",2);bt([b({type:Number})],Y.prototype,"now",2);Y=bt([T("pt-main-view")],Y);var Le=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,G=(n,t,e,i)=>{for(var s=i>1?void 0:i?Re(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Le(t,e,s),s};let O=class extends A{constructor(){super(...arguments),this.instruments=[],this.sessions=[],this.addOpen=!1,this.addName="",this.addColor=ht[0],this.addTier="secondary"}toggleAdd(){this.addOpen=!this.addOpen,this.addOpen&&(this.addName="",this.addColor=ht[0],this.addTier="secondary")}handleAddConfirm(){const n=this.addName.trim();n&&(this.dispatchEvent(new CustomEvent("add-instrument",{detail:{name:n,color:this.addColor,tier:this.addTier},bubbles:!0,composed:!0})),this.addOpen=!1,this.addName="")}handleEdit(n){this.dispatchEvent(new CustomEvent("open-edit-instrument",{detail:{instrument:n},bubbles:!0,composed:!0}))}handleRemove(n,t){n.stopPropagation(),this.dispatchEvent(new CustomEvent("remove-instrument",{detail:{instrumentId:t},bubbles:!0,composed:!0}))}render(){const n=J(new Date),t=V(n,-42),e=this.sessions.filter(d=>new Date(d.start)>=t),i=this.instruments.filter(d=>!d.archived),s={};let o=0;e.forEach(d=>{s[d.instrumentId]=(s[d.instrumentId]||0)+d.duration,o+=d.duration});const r=Math.max(1,o),a=i.length>1,c=i.filter(d=>d.tier==="primary"),u=i.filter(d=>d.tier==="secondary");return l`
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
      ${this.addOpen?l`
            <div class="add-card">
              <input
                type="text"
                class="form-input"
                style="margin-bottom: 12px;"
                placeholder="Instrument name (e.g., Drums, Vocals)"
                .value=${this.addName}
                @input=${d=>this.addName=d.target.value}
                @keydown=${d=>d.key==="Enter"&&this.handleAddConfirm()}
              />
              <div class="swatches-row">
                ${ht.map(d=>l`
                    <button
                      type="button"
                      class="swatch-btn ${this.addColor===d?"selected":""}"
                      style="background: ${d};"
                      @click=${()=>this.addColor=d}
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
          `:l``}

      <!-- Primary Instruments -->
      <div class="primary-group">
        ${c.map(d=>{const h=s[d.id]||0,p=o>0?Math.round(h/r*100):0,f=Tt(d.color,p);return l`
            <div class="ring-item" @click=${()=>this.handleEdit(d)}>
              ${a?l`
                    <span
                      class="remove-chip"
                      title="Remove"
                      @click=${w=>this.handleRemove(w,d.id)}
                    >
                      &times;
                    </span>
                  `:l``}
              <div class="primary-ring" style="background: ${f};">
                <div class="primary-inner" style="color: ${d.color};">
                  ${p}%
                </div>
              </div>
              <div class="ring-name">${d.name}</div>
              <div class="ring-total">${nt(h)}</div>
            </div>
          `})}
      </div>

      <!-- Secondary Instruments -->
      <div class="secondary-group">
        ${u.map(d=>{const h=s[d.id]||0,p=o>0?Math.round(h/r*100):0,f=Tt(d.color,p);return l`
            <div class="ring-item" @click=${()=>this.handleEdit(d)}>
              ${a?l`
                    <span
                      class="remove-chip"
                      title="Remove"
                      @click=${w=>this.handleRemove(w,d.id)}
                    >
                      &times;
                    </span>
                  `:l``}
              <div class="secondary-ring" style="background: ${f};">
                <div class="secondary-inner" style="color: ${d.color};">
                  ${p}%
                </div>
              </div>
              <div class="secondary-name">${d.name}</div>
              <div class="secondary-total">${nt(h)}</div>
            </div>
          `})}
      </div>
    `}};O.styles=[B,_`
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
    `];G([b({type:Array})],O.prototype,"instruments",2);G([b({type:Array})],O.prototype,"sessions",2);G([m()],O.prototype,"addOpen",2);G([m()],O.prototype,"addName",2);G([m()],O.prototype,"addColor",2);G([m()],O.prototype,"addTier",2);O=G([T("pt-kit-view")],O);var He=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,At=(n,t,e,i)=>{for(var s=i>1?void 0:i?Ve(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&He(t,e,s),s};let at=class extends A{constructor(){super(...arguments),this.instruments=[],this.sessions=[],this.period="week"}handleEditSession(n){this.dispatchEvent(new CustomEvent("open-edit-session",{detail:{session:n},bubbles:!0,composed:!0}))}render(){const n=J(new Date),t=new Map(this.instruments.map(g=>[g.id,g])),e=this.instruments.filter(g=>!g.archived),i={};this.sessions.forEach(g=>{const v=P(J(new Date(g.start)));(i[v]=i[v]||[]).push(g)});const s=i[P(n)]||[],o={};let r=0;s.forEach(g=>{o[g.instrumentId]=(o[g.instrumentId]||0)+g.duration,r+=g.duration});const a=Object.entries(o).map(([g,v])=>{const I=t.get(g);return{color:(I==null?void 0:I.color)||"#A3A297",pct:v/Math.max(1,r)*100}}),c=ke(a),u=["S","M","T","W","T","F","S"],d=[];let h=0;for(let g=6;g>=0;g--){const v=V(n,-g),I=g===0,z=i[P(v)]||[],dt={};z.forEach(E=>{dt[E.instrumentId]=(dt[E.instrumentId]||0)+E.duration,h+=E.duration});const Z=Object.entries(dt).map(([E,kt])=>{const Dt=t.get(E);return{color:(Dt==null?void 0:Dt.color)||"#A3A297",heightPct:Math.min(100,Math.round(kt/45*100))}});d.push({label:u[v.getDay()],isToday:I,segments:Z.length?Z:[{color:"transparent",heightPct:0}]})}const p=[];let f=0;for(let g=41;g>=0;g--){const v=V(n,-g),I=i[P(v)]||[];if(!I.length)p.push({color:"#E3E2DC"});else{const z={};I.forEach(E=>{z[E.instrumentId]=(z[E.instrumentId]||0)+E.duration,f+=E.duration});const dt=Object.entries(z).sort((E,kt)=>kt[1]-E[1])[0][0],Z=t.get(dt);p.push({color:(Z==null?void 0:Z.color)||"#A3A297"})}}const w=[...this.sessions].slice(0,8);return l`
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
      ${this.period==="day"?l`
            <div class="day-view-wrap">
              <div class="day-donut-outer" style="background: ${c};">
                <div class="day-donut-inner">
                  <div class="day-total-num">${nt(r)}</div>
                  <div class="day-total-label">TODAY</div>
                </div>
              </div>
            </div>
          `:l``}

      <!-- Week Period View -->
      ${this.period==="week"?l`
            <div class="metric-total-hero">${nt(h)}</div>
            <div class="metric-sub-hero">this week</div>
            <div class="week-bars-container">
              ${d.map(g=>l`
                  <div class="week-bar-col">
                    <div class="bar-card">
                      ${g.segments.map(v=>l`
                          <span
                            class="bar-seg"
                            style="height: ${v.heightPct}%; background: ${v.color};"
                          ></span>
                        `)}
                    </div>
                    <span class="bar-day-label ${g.isToday?"today":""}">
                      ${g.label}
                    </span>
                  </div>
                `)}
            </div>
          `:l``}

      <!-- Month Period View -->
      ${this.period==="month"?l`
            <div class="metric-total-hero">${nt(f)}</div>
            <div class="metric-sub-hero">last 6 weeks</div>
            <div class="month-grid">
              ${p.map(g=>l`
                  <span class="grid-cell" style="background: ${g.color};"></span>
                `)}
            </div>
          `:l``}

      <!-- Legend -->
      <div class="legend-container">
        ${e.map(g=>l`
            <span class="legend-item">
              <span class="legend-dot" style="background: ${g.color};"></span>
              ${g.name}
            </span>
          `)}
      </div>

      <!-- Recent Practice Session History -->
      <div class="history-section">
        <div class="history-header">
          <div class="history-title">Recent Session Logs</div>
        </div>

        ${w.length>0?l`
              <div class="history-list">
                ${w.map(g=>{const v=t.get(g.instrumentId),z=new Date(g.start).toLocaleDateString([],{month:"short",day:"numeric"});return l`
                    <div class="session-row" @click=${()=>this.handleEditSession(g)}>
                      <div class="session-left">
                        <span
                          class="session-inst-dot"
                          style="background: ${(v==null?void 0:v.color)||"#A3A297"};"
                        ></span>
                        <div>
                          <div class="session-inst-name">${(v==null?void 0:v.name)||"Instrument"}</div>
                          <div class="session-date-sub">
                            ${z}${g.notes?` • ${g.notes}`:""}
                          </div>
                        </div>
                      </div>
                      <div class="session-dur">${nt(g.duration)}</div>
                    </div>
                  `})}
              </div>
            `:l`
              <div class="no-history-text">
                No sessions recorded yet. Tap an instrument on Main to start!
              </div>
            `}
      </div>
    `}};at.styles=[B,_`
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
    `];At([b({type:Array})],at.prototype,"instruments",2);At([b({type:Array})],at.prototype,"sessions",2);At([m()],at.prototype,"period",2);at=At([T("pt-data-view")],at);var We=Object.defineProperty,Je=Object.getOwnPropertyDescriptor,ct=(n,t,e,i)=>{for(var s=i>1?void 0:i?Je(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&We(t,e,s),s};let j=class extends A{constructor(){super(...arguments),this.syncStatus="local",this.lastSyncedAt=null,this.errorMessage=null,this.popoverOpen=!1,this.isManualSyncing=!1}togglePillPopover(n){n.stopPropagation(),this.popoverOpen=!this.popoverOpen}closePopover(){this.popoverOpen=!1}async handleSyncNow(){if(!this.isManualSyncing){this.isManualSyncing=!0;try{await y.syncWithCloud(!0)}finally{this.isManualSyncing=!1}}}handleOpenSettings(){this.closePopover(),this.dispatchEvent(new CustomEvent("open-settings",{bubbles:!0,composed:!0}))}render(){const n=this.syncStatus==="syncing"||this.isManualSyncing,t=this.syncStatus==="synced"?"Synced":n?"Syncing...":this.syncStatus==="offline"?"Offline":this.syncStatus==="error"?"Sync Error":"Local Only",e=Ce(this.lastSyncedAt);return l`
      <div
        class="pill-trigger status-${this.syncStatus}"
        title="Sync status: ${t}"
        @click=${this.togglePillPopover}
      >
        ${n?l`
              <svg class="spin-icon" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
              </svg>
            `:l`<span class="status-dot"></span>`}
        <span>${t}</span>
      </div>

      ${this.popoverOpen?l`
            <div class="popover-backdrop" @click=${this.closePopover}></div>
            <div class="popover-card" @click=${i=>i.stopPropagation()}>
              <div class="popover-header">
                <div class="popover-title">
                  <span class="status-dot" style="background: currentColor"></span>
                  <span>${t}</span>
                </div>
              </div>

              <div class="popover-body">
                ${this.syncStatus==="local"?l`Cloud sync is not configured. Your practice data is saved locally on this device.`:l`
                      <div>Last cloud update: <strong>${e}</strong></div>
                      ${this.lastSyncedAt?l`<div class="timestamp-detail">${new Date(this.lastSyncedAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})}</div>`:l``}
                    `}

                ${this.errorMessage&&this.syncStatus==="error"?l`<div class="error-box">${this.errorMessage}</div>`:l``}
              </div>

              <div class="popover-actions">
                ${this.syncStatus==="local"?l`
                      <button class="btn-sync-now" @click=${this.handleOpenSettings}>
                        Configure Sync
                      </button>
                    `:l`
                      <button
                        class="btn-sync-now"
                        ?disabled=${n}
                        @click=${this.handleSyncNow}
                      >
                        ${n?l`
                              <svg class="spin-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
                              </svg>
                              <span>Syncing...</span>
                            `:l`
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
          `:l``}
    `}};j.styles=_`
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
  `;ct([b({type:String})],j.prototype,"syncStatus",2);ct([b({type:String})],j.prototype,"lastSyncedAt",2);ct([b({type:String})],j.prototype,"errorMessage",2);ct([m()],j.prototype,"popoverOpen",2);ct([m()],j.prototype,"isManualSyncing",2);j=ct([T("pt-sync-pill")],j);var Ye=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,K=(n,t,e,i)=>{for(var s=i>1?void 0:i?qe(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Ye(t,e,s),s};let C=class extends A{constructor(){super(...arguments),this.instruments=[],this.open=!1,this.selectedInstrumentId="",this.durationMinutes=20,this.sessionDate=new Date().toISOString().slice(0,10),this.notes=""}connectedCallback(){super.connectedCallback(),this.instruments.length>0&&!this.selectedInstrumentId&&(this.selectedInstrumentId=this.instruments[0].id)}willUpdate(n){n.has("instruments")&&this.instruments.length>0&&!this.selectedInstrumentId&&(this.selectedInstrumentId=this.instruments[0].id)}setPreset(n){this.durationMinutes=n}handleSave(){if(!this.selectedInstrumentId||this.durationMinutes<=0)return;const n=this.sessionDate.split("-"),t=new Date;n.length===3&&t.setFullYear(parseInt(n[0]),parseInt(n[1])-1,parseInt(n[2])),this.dispatchEvent(new CustomEvent("save-manual-session",{detail:{instrumentId:this.selectedInstrumentId,start:t,duration:this.durationMinutes,notes:this.notes},bubbles:!0,composed:!0})),this.close()}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return this.open?l`
      <div class="modal-overlay" @click=${n=>n.target===n.currentTarget&&this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Log Practice Session</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="form-group">
            <label class="form-label">Select Instrument</label>
            <div class="inst-radio-group">
              ${this.instruments.map(n=>l`
                  <div
                    class="inst-radio ${this.selectedInstrumentId===n.id?"selected":""}"
                    @click=${()=>this.selectedInstrumentId=n.id}
                  >
                    <span class="inst-dot" style="background: ${n.color}"></span>
                    ${n.name}
                  </div>
                `)}
            </div>
          </div>

          <div class="form-group">
            <label class="form-label">Duration (Minutes)</label>
            <div class="preset-durations">
              ${[15,30,45,60].map(n=>l`
                  <button
                    type="button"
                    class="preset-btn ${this.durationMinutes===n?"active":""}"
                    @click=${()=>this.setPreset(n)}
                  >
                    ${n}m
                  </button>
                `)}
            </div>
            <input
              type="number"
              min="1"
              max="600"
              class="form-input"
              .value=${String(this.durationMinutes)}
              @input=${n=>this.durationMinutes=parseInt(n.target.value)||0}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Date</label>
            <input
              type="date"
              class="form-input"
              .value=${this.sessionDate}
              @input=${n=>this.sessionDate=n.target.value}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Notes (Optional)</label>
            <input
              type="text"
              placeholder="e.g. Scales, arpeggios, song practice..."
              class="form-input"
              .value=${this.notes}
              @input=${n=>this.notes=n.target.value}
            />
          </div>

          <button class="btn btn-primary" style="margin-top: 10px;" @click=${this.handleSave}>
            Save Practice Log
          </button>
        </div>
      </div>
    `:l``}};C.styles=[B,_`
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
    `];K([b({type:Array})],C.prototype,"instruments",2);K([b({type:Boolean})],C.prototype,"open",2);K([m()],C.prototype,"selectedInstrumentId",2);K([m()],C.prototype,"durationMinutes",2);K([m()],C.prototype,"sessionDate",2);K([m()],C.prototype,"notes",2);C=K([T("pt-manual-entry-modal")],C);var Ge=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,U=(n,t,e,i)=>{for(var s=i>1?void 0:i?Ke(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Ge(t,e,s),s};let D=class extends A{constructor(){super(...arguments),this.instruments=[],this.session=null,this.open=!1,this.instrumentId="",this.duration=0,this.sessionDate="",this.notes=""}willUpdate(n){n.has("session")&&this.session&&(this.instrumentId=this.session.instrumentId,this.duration=this.session.duration,this.sessionDate=new Date(this.session.start).toISOString().slice(0,10),this.notes=this.session.notes||"")}handleSave(){if(!this.session||!this.instrumentId||this.duration<=0)return;const n=this.sessionDate.split("-"),t=new Date(this.session.start);n.length===3&&t.setFullYear(parseInt(n[0]),parseInt(n[1])-1,parseInt(n[2]));const e=new Date(t.getTime()+this.duration*6e4),i={...this.session,instrumentId:this.instrumentId,start:t.toISOString(),end:e.toISOString(),duration:Math.round(this.duration),notes:this.notes.trim()||void 0};this.dispatchEvent(new CustomEvent("update-session",{detail:{session:i},bubbles:!0,composed:!0})),this.close()}handleDelete(){this.session&&confirm("Are you sure you want to delete this practice session?")&&(this.dispatchEvent(new CustomEvent("delete-session",{detail:{sessionId:this.session.id},bubbles:!0,composed:!0})),this.close())}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return!this.open||!this.session?l``:l`
      <div class="modal-overlay" @click=${n=>n.target===n.currentTarget&&this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Edit Practice Session</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="form-group">
            <label class="form-label">Instrument</label>
            <div class="inst-radio-group">
              ${this.instruments.map(n=>l`
                  <div
                    class="inst-radio ${this.instrumentId===n.id?"selected":""}"
                    @click=${()=>this.instrumentId=n.id}
                  >
                    <span class="inst-dot" style="background: ${n.color}"></span>
                    ${n.name}
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
              @input=${n=>this.duration=parseInt(n.target.value)||0}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Date</label>
            <input
              type="date"
              class="form-input"
              .value=${this.sessionDate}
              @input=${n=>this.sessionDate=n.target.value}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Notes</label>
            <input
              type="text"
              class="form-input"
              .value=${this.notes}
              @input=${n=>this.notes=n.target.value}
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
    `}};D.styles=[B,_`
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
    `];U([b({type:Array})],D.prototype,"instruments",2);U([b({type:Object})],D.prototype,"session",2);U([b({type:Boolean})],D.prototype,"open",2);U([m()],D.prototype,"instrumentId",2);U([m()],D.prototype,"duration",2);U([m()],D.prototype,"sessionDate",2);U([m()],D.prototype,"notes",2);D=U([T("pt-edit-session-modal")],D);var Xe=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,X=(n,t,e,i)=>{for(var s=i>1?void 0:i?Ze(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Xe(t,e,s),s};let M=class extends A{constructor(){super(...arguments),this.instrument=null,this.canDelete=!0,this.open=!1,this.name="",this.color=ht[0],this.tier="secondary"}willUpdate(n){n.has("instrument")&&this.instrument&&(this.name=this.instrument.name,this.color=this.instrument.color,this.tier=this.instrument.tier)}handleSave(){if(!this.instrument||!this.name.trim())return;const n={...this.instrument,name:this.name.trim(),color:this.color,tier:this.tier};this.dispatchEvent(new CustomEvent("update-instrument",{detail:{instrument:n},bubbles:!0,composed:!0})),this.close()}handleDelete(){this.instrument&&confirm(`Remove "${this.instrument.name}" from kit? Past practice history will be preserved.`)&&(this.dispatchEvent(new CustomEvent("remove-instrument",{detail:{instrumentId:this.instrument.id},bubbles:!0,composed:!0})),this.close())}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return!this.open||!this.instrument?l``:l`
      <div class="modal-overlay" @click=${n=>n.target===n.currentTarget&&this.close()}>
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
              @input=${n=>this.name=n.target.value}
            />
          </div>

          <div class="form-group">
            <label class="form-label">Color Swatch</label>
            <div class="swatches-grid">
              ${ht.map(n=>l`
                  <span
                    class="swatch ${this.color===n?"selected":""}"
                    style="background: ${n}"
                    @click=${()=>this.color=n}
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
            ${this.canDelete?l`
                  <button class="btn btn-danger" style="flex: 1;" @click=${this.handleDelete}>
                    Remove
                  </button>
                `:l``}
            <button class="btn btn-primary" style="flex: 2;" @click=${this.handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    `}};M.styles=[B,_`
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
    `];X([b({type:Object})],M.prototype,"instrument",2);X([b({type:Boolean})],M.prototype,"canDelete",2);X([b({type:Boolean})],M.prototype,"open",2);X([m()],M.prototype,"name",2);X([m()],M.prototype,"color",2);X([m()],M.prototype,"tier",2);M=X([T("pt-edit-instrument-modal")],M);var Qe=Object.defineProperty,ts=Object.getOwnPropertyDescriptor,vt=(n,t,e,i)=>{for(var s=i>1?void 0:i?ts(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Qe(t,e,s),s};let q=class extends A{constructor(){super(...arguments),this.settings={soundEnabled:!0,hapticsEnabled:!0},this.syncStatus="local",this.open=!1,this.isSyncing=!1}handleSoundToggle(n){const t=n.target.checked;this.dispatchEvent(new CustomEvent("update-settings",{detail:{soundEnabled:t},bubbles:!0,composed:!0}))}handleHapticsToggle(n){const t=n.target.checked;this.dispatchEvent(new CustomEvent("update-settings",{detail:{hapticsEnabled:t},bubbles:!0,composed:!0}))}async handleSyncNow(){this.isSyncing=!0;try{await y.syncWithCloud(!1)}finally{this.isSyncing=!1}}triggerExport(){this.dispatchEvent(new CustomEvent("export-backup",{bubbles:!0,composed:!0}))}triggerImport(){var t;const n=(t=this.shadowRoot)==null?void 0:t.querySelector("#import-file");n==null||n.click()}handleFileChange(n){var s;const t=n.target,e=(s=t.files)==null?void 0:s[0];if(!e)return;const i=new FileReader;i.onload=o=>{var a;const r=(a=o.target)==null?void 0:a.result;r&&this.dispatchEvent(new CustomEvent("import-backup",{detail:{jsonString:r},bubbles:!0,composed:!0})),t.value=""},i.readAsText(e)}triggerDemoData(){confirm("Load demo practice history? This will add ~33 days of sample sessions to preview charts.")&&(this.dispatchEvent(new CustomEvent("load-demo-data",{bubbles:!0,composed:!0})),this.close())}triggerClearData(){confirm("Reset all practice history? This will delete all sessions and cannot be undone.")&&(this.dispatchEvent(new CustomEvent("clear-all-data",{bubbles:!0,composed:!0})),this.close())}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}formatLastSync(n){if(!n)return"Never synced";const t=new Date(n);if(isNaN(t.getTime()))return"Never synced";const e=Date.now(),i=Math.floor((e-t.getTime())/1e3);return i<60?"Just now":i<3600?`${Math.floor(i/60)}m ago`:i<86400?`${Math.floor(i/3600)}h ago`:t.toLocaleDateString([],{month:"short",day:"numeric"})}getSyncStatusLabel(){if(!y.isCloudSyncConfigured())return{label:"Local storage only",dotClass:"local"};switch(this.syncStatus){case"syncing":return{label:"Syncing changes...",dotClass:"syncing"};case"synced":return{label:"Cloud backup active",dotClass:"synced"};case"offline":return{label:"Offline (will sync when online)",dotClass:"offline"};case"error":return{label:"Sync paused (connection error)",dotClass:"error"};default:return{label:"Local storage only",dotClass:"local"}}}render(){if(!this.open)return l``;const n=y.isCloudSyncConfigured(),t=this.getSyncStatusLabel();return l`
      <div class="modal-overlay" @click=${e=>e.target===e.currentTarget&&this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Settings & Backups</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <!-- Cloud Synchronization -->
          <div class="section-heading">Cloud Synchronization</div>
          <div class="sync-card">
            <div class="setting-info">
              <div class="setting-title">Auto Cloud Backup</div>
              <div class="sync-status-row">
                <span class="sync-dot ${t.dotClass}"></span>
                <span>${t.label}</span>
              </div>
              ${n&&this.settings.lastSyncedAt?l`
                    <div class="sync-timestamp">
                      Last synced: ${this.formatLastSync(this.settings.lastSyncedAt)}
                    </div>
                  `:l``}
            </div>
            ${n?l`
                  <button
                    type="button"
                    class="btn-sync"
                    ?disabled=${this.isSyncing||this.syncStatus==="syncing"}
                    @click=${this.handleSyncNow}
                  >
                    ${this.isSyncing||this.syncStatus==="syncing"?"Syncing...":"Sync Now"}
                  </button>
                `:l``}
          </div>

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
    `}};q.styles=[B,_`
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
      .btn-grid {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 8px;
      }
      .file-hidden {
        display: none;
      }
    `];vt([b({type:Object})],q.prototype,"settings",2);vt([b({type:String})],q.prototype,"syncStatus",2);vt([b({type:Boolean})],q.prototype,"open",2);vt([m()],q.prototype,"isSyncing",2);q=vt([T("pt-settings-modal")],q);var es=Object.defineProperty,ss=Object.getOwnPropertyDescriptor,$=(n,t,e,i)=>{for(var s=i>1?void 0:i?ss(t,e):t,o=n.length-1,r;o>=0;o--)(r=n[o])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&es(t,e,s),s};let S=class extends A{constructor(){super(...arguments),this.tab="main",this.instruments=[],this.sessions=[],this.activeSession=null,this.settings={soundEnabled:!0,hapticsEnabled:!0},this.syncStatus="local",this.lastSyncedAt=null,this.syncErrorMessage=null,this.now=Date.now(),this.manualLogModalOpen=!1,this.settingsModalOpen=!1,this.editSessionModalOpen=!1,this.sessionToEdit=null,this.editInstrumentModalOpen=!1,this.instrumentToEdit=null}connectedCallback(){super.connectedCallback(),this.refreshState(),this.unsubscribeStore=y.subscribe(()=>{this.refreshState()}),Zt.start(),this.timerInterval=window.setInterval(()=>{this.activeSession&&(this.now=Date.now())},1e3)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeStore&&this.unsubscribeStore(),this.timerInterval&&clearInterval(this.timerInterval),Zt.stop()}refreshState(){this.instruments=y.getAllInstruments(),this.sessions=y.getSessions(),this.activeSession=y.getActiveSession(),this.settings=y.getSettings(),this.syncStatus=y.getSyncStatus(),this.lastSyncedAt=y.getLastSyncedAt(),this.syncErrorMessage=y.getSyncErrorMessage()}handleStartSession(n){y.startSession(n.detail.instrumentId)}handleEndSession(){y.endSession()}handleDiscardSession(){y.discardSession()}handleSaveManualSession(n){const{instrumentId:t,start:e,duration:i,notes:s}=n.detail;y.logManualSession(t,e,i,s)}handleUpdateSession(n){y.updateSession(n.detail.session)}handleDeleteSession(n){y.deleteSession(n.detail.sessionId)}handleAddInstrument(n){y.addInstrument(n.detail.name,n.detail.color,n.detail.tier)}handleUpdateInstrument(n){y.updateInstrument(n.detail.instrument)}handleRemoveInstrument(n){y.removeInstrument(n.detail.instrumentId)}handleUpdateSettings(n){y.updateSettings(n.detail)}handleExportBackup(){const n=y.exportBackup(),t=new Blob([n],{type:"application/json"}),e=URL.createObjectURL(t),i=document.createElement("a");i.href=e,i.download=`practice-tracker-backup-${new Date().toISOString().slice(0,10)}.json`,i.click(),URL.revokeObjectURL(e)}handleImportBackup(n){const t=y.importBackup(n.detail.jsonString);alert(t.message),t.success&&(this.settingsModalOpen=!1)}handleLoadDemoData(){y.loadDemoData()}handleClearAllData(){y.clearAllData()}render(){const n=new Date,t=n.toLocaleDateString([],{day:"numeric",month:"long"}),e=n.toLocaleDateString([],{weekday:"long"}),i=this.instruments.filter(s=>!s.archived);return l`
      <div class="app-wrapper">
        <div class="phone-shell">
          <!-- Top Header -->
          <div class="top-header">
            <div class="header-date-info">
              <span>${t}</span>
              <span>${e}</span>
            </div>
            <div class="header-actions">
              <pt-sync-pill
                .syncStatus=${this.syncStatus}
                .lastSyncedAt=${this.lastSyncedAt}
                .errorMessage=${this.syncErrorMessage}
                @open-settings=${()=>this.settingsModalOpen=!0}
              ></pt-sync-pill>
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
            ${this.tab==="main"?l`
                  <pt-main-view
                    .instruments=${i}
                    .sessions=${this.sessions}
                    .activeSession=${this.activeSession}
                    .now=${this.now}
                    @start-session=${this.handleStartSession}
                    @end-session=${this.handleEndSession}
                    @discard-session=${this.handleDiscardSession}
                    @open-manual-log=${()=>this.manualLogModalOpen=!0}
                  ></pt-main-view>
                `:l``}
            ${this.tab==="kit"?l`
                  <pt-kit-view
                    .instruments=${this.instruments}
                    .sessions=${this.sessions}
                    @add-instrument=${this.handleAddInstrument}
                    @remove-instrument=${this.handleRemoveInstrument}
                    @open-edit-instrument=${s=>{this.instrumentToEdit=s.detail.instrument,this.editInstrumentModalOpen=!0}}
                  ></pt-kit-view>
                `:l``}
            ${this.tab==="data"?l`
                  <pt-data-view
                    .instruments=${this.instruments}
                    .sessions=${this.sessions}
                    @open-edit-session=${s=>{this.sessionToEdit=s.detail.session,this.editSessionModalOpen=!0}}
                  ></pt-data-view>
                `:l``}
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
        .instruments=${i}
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
        .canDelete=${i.length>1}
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
        @close-modal=${()=>this.settingsModalOpen=!1}
      ></pt-settings-modal>
    `}};S.styles=[B,_`
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

      .header-actions {
        display: flex;
        align-items: center;
        gap: 8px;
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
    `];$([m()],S.prototype,"tab",2);$([m()],S.prototype,"instruments",2);$([m()],S.prototype,"sessions",2);$([m()],S.prototype,"activeSession",2);$([m()],S.prototype,"settings",2);$([m()],S.prototype,"syncStatus",2);$([m()],S.prototype,"lastSyncedAt",2);$([m()],S.prototype,"syncErrorMessage",2);$([m()],S.prototype,"now",2);$([m()],S.prototype,"manualLogModalOpen",2);$([m()],S.prototype,"settingsModalOpen",2);$([m()],S.prototype,"editSessionModalOpen",2);$([m()],S.prototype,"sessionToEdit",2);$([m()],S.prototype,"editInstrumentModalOpen",2);$([m()],S.prototype,"instrumentToEdit",2);S=$([T("pt-app")],S);"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})});
