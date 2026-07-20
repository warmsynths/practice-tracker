(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis,oe=V.ShadowRoot&&(V.ShadyCSS===void 0||V.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ae=Symbol(),pe=new WeakMap;let Ee=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ae)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(oe&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=pe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&pe.set(t,e))}return e}toString(){return this.cssText}};const Be=r=>new Ee(typeof r=="string"?r:r+"",void 0,ae),$=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new Ee(t,r,ae)},qe=(r,e)=>{if(oe)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=V.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)}},ue=oe?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Be(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ve,defineProperty:We,getOwnPropertyDescriptor:Fe,getOwnPropertyNames:Ke,getOwnPropertySymbols:Je,getPrototypeOf:Ye}=Object,y=globalThis,me=y.trustedTypes,Ge=me?me.emptyScript:"",se=y.reactiveElementPolyfillSupport,U=(r,e)=>r,W={toAttribute(r,e){switch(e){case Boolean:r=r?Ge:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},le=(r,e)=>!Ve(r,e),fe={attribute:!0,type:String,converter:W,reflect:!1,useDefault:!1,hasChanged:le};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);let C=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=fe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&We(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=Fe(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:s,set(o){const l=s==null?void 0:s.call(this);n==null||n.call(this,o),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??fe}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const e=Ye(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const t=this.properties,i=[...Ke(t),...Je(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(ue(s))}else e!==void 0&&t.push(ue(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qe(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:W).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var n,o;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const l=i.getPropertyOptions(s),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((n=l.converter)==null?void 0:n.fromAttribute)!==void 0?l.converter:W;this._$Em=s;const h=a.fromAttribute(t,l.type);this[s]=h??((o=this._$Ej)==null?void 0:o.get(s))??h,this._$Em=null}}requestUpdate(e,t,i,s=!1,n){var o;if(e!==void 0){const l=this.constructor;if(s===!1&&(n=this[e]),i??(i=l.getPropertyOptions(e)),!((i.hasChanged??le)(n,t)||i.useDefault&&i.reflect&&n===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(l._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s){const{wrapped:l}=o,a=this[n];l!==!0||this._$AL.has(n)||a===void 0||this.C(n,void 0,o,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[U("elementProperties")]=new Map,C[U("finalized")]=new Map,se==null||se({ReactiveElement:C}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,ve=r=>r,F=H.trustedTypes,ge=F?F.createPolicy("lit-html",{createHTML:r=>r}):void 0,Oe="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,Ce="?"+b,Ze=`<${Ce}>`,E=document,L=()=>E.createComment(""),R=r=>r===null||typeof r!="object"&&typeof r!="function",ce=Array.isArray,Qe=r=>ce(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ie=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$e=/-->/g,be=/>/g,x=RegExp(`>|${ie}(?:([^\\s"'>=/]+)(${ie}*=${ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ye=/'/g,_e=/"/g,De=/^(?:script|style|textarea|title)$/i,Xe=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),p=Xe(1),D=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Ae=new WeakMap,S=E.createTreeWalker(E,129);function Ne(r,e){if(!ce(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ge!==void 0?ge.createHTML(e):e}const et=(r,e)=>{const t=r.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",o=T;for(let l=0;l<t;l++){const a=r[l];let h,d,c=-1,m=0;for(;m<a.length&&(o.lastIndex=m,d=o.exec(a),d!==null);)m=o.lastIndex,o===T?d[1]==="!--"?o=$e:d[1]!==void 0?o=be:d[2]!==void 0?(De.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=x):d[3]!==void 0&&(o=x):o===x?d[0]===">"?(o=s??T,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?x:d[3]==='"'?_e:ye):o===_e||o===ye?o=x:o===$e||o===be?o=T:(o=x,s=void 0);const f=o===x&&r[l+1].startsWith("/>")?" ":"";n+=o===T?a+Ze:c>=0?(i.push(h),a.slice(0,c)+Oe+a.slice(c)+b+f):a+b+(c===-2?l:f)}return[Ne(r,n+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class I{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0;const l=e.length-1,a=this.parts,[h,d]=et(e,t);if(this.el=I.createElement(h,i),S.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=S.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Oe)){const m=d[o++],f=s.getAttribute(c).split(b),M=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:M[2],strings:f,ctor:M[1]==="."?st:M[1]==="?"?it:M[1]==="@"?rt:ee}),s.removeAttribute(c)}else c.startsWith(b)&&(a.push({type:6,index:n}),s.removeAttribute(c));if(De.test(s.tagName)){const c=s.textContent.split(b),m=c.length-1;if(m>0){s.textContent=F?F.emptyScript:"";for(let f=0;f<m;f++)s.append(c[f],L()),S.nextNode(),a.push({type:2,index:++n});s.append(c[m],L())}}}else if(s.nodeType===8)if(s.data===Ce)a.push({type:2,index:n});else{let c=-1;for(;(c=s.data.indexOf(b,c+1))!==-1;)a.push({type:7,index:n}),c+=b.length-1}n++}}static createElement(e,t){const i=E.createElement("template");return i.innerHTML=e,i}}function N(r,e,t=r,i){var o,l;if(e===D)return e;let s=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const n=R(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=N(r,s._$AS(r,e.values),s,i)),e}class tt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??E).importNode(t,!0);S.currentNode=s;let n=S.nextNode(),o=0,l=0,a=i[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new B(n,n.nextSibling,this,e):a.type===1?h=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(h=new nt(n,this,e)),this._$AV.push(h),a=i[++l]}o!==(a==null?void 0:a.index)&&(n=S.nextNode(),o++)}return S.currentNode=E,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class B{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=N(this,e,t),R(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==D&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Qe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&R(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){var n;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=I.createElement(Ne(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(t);else{const o=new tt(s,this),l=o.u(this.options);o.p(t),this.T(l),this._$AH=o}}_$AC(e){let t=Ae.get(e.strings);return t===void 0&&Ae.set(e.strings,t=new I(e)),t}k(e){ce(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new B(this.O(L()),this.O(L()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const s=ve(e).nextSibling;ve(e).remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(e,t=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=N(this,e,t,0),o=!R(e)||e!==this._$AH&&e!==D,o&&(this._$AH=e);else{const l=e;let a,h;for(e=n[0],a=0;a<n.length-1;a++)h=N(this,l[i+a],t,a),h===D&&(h=this._$AH[a]),o||(o=!R(h)||h!==this._$AH[a]),h===u?e=u:e!==u&&(e+=(h??"")+n[a+1]),this._$AH[a]=h}o&&!s&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class st extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}class it extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}}class rt extends ee{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=N(this,e,t,0)??u)===D)return;const i=this._$AH,s=e===u&&i!==u||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==u&&(i===u||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class nt{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}}const re=H.litHtmlPolyfillSupport;re==null||re(I,B),(H.litHtmlVersions??(H.litHtmlVersions=[])).push("3.3.3");const ot=(r,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new B(e.insertBefore(L(),n),n,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis;class v extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ot(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return D}}var Pe;v._$litElement$=!0,v.finalized=!0,(Pe=P.litElementHydrateSupport)==null||Pe.call(P,{LitElement:v});const ne=P.litElementPolyfillSupport;ne==null||ne({LitElement:v});(P.litElementVersions??(P.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:le},lt=(r=at,e,t)=>{const{kind:i,metadata:s}=t;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(t.name,r),i==="accessor"){const{name:o}=t;return{set(l){const a=e.get.call(this);e.set.call(this,l),this.requestUpdate(o,a,r,!0,l)},init(l){return l!==void 0&&this.C(o,void 0,r,l),l}}}if(i==="setter"){const{name:o}=t;return function(l){const a=this[o];e.call(this,l),this.requestUpdate(o,a,r,!0,l)}}throw Error("Unsupported decorator location: "+i)};function te(r){return(e,t)=>typeof t=="object"?lt(r,e,t):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function g(r){return te({...r,state:!0,attribute:!1})}const w=$`
  :host {
    font-family: var(--font-body);
    color: var(--ink);
  }

  .label {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink-dim);
  }

  .display {
    font-family: var(--font-display);
    font-weight: 400;
    letter-spacing: -0.01em;
  }

  .mono {
    font-family: var(--font-mono);
  }

  .rule {
    border: none;
    border-top: 1px solid var(--rule);
    margin: 0;
  }

  .stat {
    font-family: var(--font-display);
    font-weight: 400;
    font-variant-numeric: tabular-nums;
    line-height: 1;
  }

  input,
  textarea,
  select {
    font: inherit;
    color: var(--ink);
    background: transparent;
    border: 1px solid var(--rule-strong);
    padding: 0.55em 0.7em;
    border-radius: 0;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
    border-color: var(--accent);
  }

  textarea {
    resize: vertical;
    min-height: 3.5em;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.35em;
  }

  button {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    background: var(--ink);
    color: var(--paper);
    border: 1px solid var(--ink);
    padding: 0.7em 1.1em;
    cursor: pointer;
    border-radius: 0;
  }

  button:hover {
    background: var(--accent);
    border-color: var(--accent);
  }

  button.ghost {
    background: transparent;
    color: var(--ink);
  }

  button.ghost:hover {
    background: transparent;
    color: var(--accent);
    border-color: var(--accent);
  }

  button.quiet {
    background: transparent;
    color: var(--ink-dim);
    border: none;
    padding: 0.2em 0.4em;
  }

  button.quiet:hover {
    background: transparent;
    color: var(--accent);
  }

  fieldset {
    border: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.6em 1.2em;
  }

  fieldset .check {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
    font-family: var(--font-mono);
    font-size: 0.85rem;
  }

  fieldset .check input {
    width: auto;
    accent-color: var(--accent);
  }
`;class ke{constructor(e){this.key=e,this.listeners=new Set,this.items=this.load()}load(){try{const e=localStorage.getItem(this.key);return e?JSON.parse(e):[]}catch{return[]}}persist(){localStorage.setItem(this.key,JSON.stringify(this.items));for(const e of this.listeners)e()}getAll(){return[...this.items]}add(e){this.items=[...this.items,e],this.persist()}update(e,t){this.items=this.items.map(i=>i.id===e?{...i,...t}:i),this.persist()}remove(e){this.items=this.items.filter(t=>t.id!==e),this.persist()}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}}function Me(){return crypto.randomUUID()}const j=new ke("ledger.practice.v1");function he(r){const e=r.getFullYear(),t=String(r.getMonth()+1).padStart(2,"0"),i=String(r.getDate()).padStart(2,"0");return`${e}-${t}-${i}`}function K(){return he(new Date)}function Te(r){const e=new Map;for(const t of r){const i=e.get(t.date)??[];i.push(t),e.set(t.date,i)}return e}function ct(r){const e=Te(r),t=e.has(K());let i=0;const s=new Date;for(t||s.setDate(s.getDate()-1);e.has(he(s));)i+=1,s.setDate(s.getDate()-1);const n=[...e.keys()].sort();let o=0,l=0,a=null;for(const h of n){const[d,c,m]=h.split("-").map(Number),f=new Date(d,c-1,m);a?l=Math.round((f.getTime()-a.getTime())/864e5)===1?l+1:1:l=1,o=Math.max(o,l),a=f}return o=Math.max(o,i),{current:i,longest:o,practicedToday:t}}const de=[{value:"guitar",label:"Guitar",code:"G"},{value:"bass",label:"Bass",code:"B"},{value:"piano",label:"Piano",code:"P"},{value:"finger-drumming",label:"Finger Drumming",code:"F"}],Ue=[{value:"poop",label:"Poop"},{value:"pee",label:"Pee"},{value:"medicine",label:"Medicine"},{value:"other",label:"Other"}];var ht=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,He=(r,e,t,i)=>{for(var s=i>1?void 0:i?dt(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&ht(e,t,s),s};const we=98;let J=class extends v{constructor(){super(...arguments),this.entries=[]}render(){const r=ct(this.entries),e=Te(this.entries),t=K(),i=[],s=new Date;s.setDate(s.getDate()-(we-1));let n="";for(let o=0;o<we;o++){const l=he(s);o===0&&(n=l);const a=e.get(l),h=!!(a!=null&&a.length),d=a==null?void 0:a.flatMap(c=>c.instruments).map(c=>{var m;return((m=de.find(f=>f.value===c))==null?void 0:m.code)??""}).join("");i.push(p`<div
        class="cell ${h?"filled":"empty"} ${l===t?"today":""}"
        title="${l}${d?` — ${d}`:""}"
      ></div>`),s.setDate(s.getDate()+1)}return p`
      <div class="stats">
        <div class="stat-block current">
          <div class="stat">${r.current}</div>
          <div class="label">Current Chain</div>
        </div>
        <div class="stat-block">
          <div class="stat">${r.longest}</div>
          <div class="label">Longest Chain</div>
        </div>
      </div>
      <div class="chain-grid">${i}</div>
      <div class="range label">${n} — ${t}</div>
    `}};J.styles=[w,$`
      :host {
        display: block;
      }

      .stats {
        display: flex;
        gap: 2.5rem;
        align-items: baseline;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
      }

      .stat-block .stat {
        font-size: 3.4rem;
      }

      .stat-block.current .stat {
        color: var(--accent);
      }

      .stat-block .label {
        margin-top: 0.2rem;
      }

      .chain-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15px, 1fr));
        gap: 3px;
      }

      .cell {
        aspect-ratio: 1;
        background: transparent;
        box-shadow: inset 0 0 0 1px var(--rule);
      }

      .cell.filled {
        background: var(--ink);
        box-shadow: none;
      }

      .cell.today.filled {
        background: var(--accent);
      }

      .cell.today.empty {
        box-shadow: inset 0 0 0 1px var(--accent);
      }

      .range {
        margin-top: 0.6rem;
      }
    `];He([te({attribute:!1})],J.prototype,"entries",2);J=He([A("streak-chain")],J);var pt=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,q=(r,e,t,i)=>{for(var s=i>1?void 0:i?ut(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&pt(e,t,s),s};let O=class extends v{constructor(){super(...arguments),this.date=K(),this.selected=new Set,this.minutes="",this.notes=""}toggle(r){const e=new Set(this.selected);e.has(r)?e.delete(r):e.add(r),this.selected=e}submit(r){if(r.preventDefault(),this.selected.size===0)return;const e={id:Me(),date:this.date,instruments:[...this.selected],minutes:this.minutes?Number(this.minutes):void 0,notes:this.notes||void 0,createdAt:Date.now()};j.add(e),this.selected=new Set,this.minutes="",this.notes="",this.date=K()}render(){return p`
      <form @submit=${this.submit}>
        <fieldset>
          ${de.map(r=>p`
              <label class="check">
                <input
                  type="checkbox"
                  .checked=${this.selected.has(r.value)}
                  @change=${()=>this.toggle(r.value)}
                />
                ${r.label}
              </label>
            `)}
        </fieldset>

        <div class="row">
          <label>
            <span class="label">Date</span>
            <input
              type="date"
              .value=${this.date}
              @input=${r=>this.date=r.target.value}
            />
          </label>
          <label>
            <span class="label">Minutes (optional)</span>
            <input
              type="number"
              min="0"
              placeholder="—"
              .value=${this.minutes}
              @input=${r=>this.minutes=r.target.value}
            />
          </label>
        </div>

        <label>
          <span class="label">Notes</span>
          <textarea
            placeholder="What did you work on?"
            .value=${this.notes}
            @input=${r=>this.notes=r.target.value}
          ></textarea>
        </label>

        <div class="actions">
          <button type="submit" ?disabled=${this.selected.size===0}>Log practice</button>
        </div>
      </form>
    `}};O.styles=[w,$`
      :host {
        display: block;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .row {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .row > label {
        flex: 1;
        min-width: 10rem;
      }

      .actions {
        display: flex;
        justify-content: flex-end;
      }
    `];q([g()],O.prototype,"date",2);q([g()],O.prototype,"selected",2);q([g()],O.prototype,"minutes",2);q([g()],O.prototype,"notes",2);O=q([A("practice-log-form")],O);var mt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,je=(r,e,t,i)=>{for(var s=i>1?void 0:i?ft(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&mt(e,t,s),s};let Y=class extends v{constructor(){super(...arguments),this.entries=[]}deleteEntry(r){j.remove(r)}render(){const r=[...this.entries].sort((e,t)=>t.createdAt-e.createdAt);return r.length===0?p`<p class="empty label">No practice logged yet.</p>`:p`
      <ul>
        ${r.map(e=>p`
            <li>
              <span class="date">${e.date}</span>
              <span class="instruments"
                >${e.instruments.map(t=>{var i;return((i=de.find(s=>s.value===t))==null?void 0:i.label)??t}).join(" · ")}</span
              >
              ${e.minutes?p`<span class="minutes">${e.minutes}m</span>`:""}
              <span class="notes">${e.notes??""}</span>
              <button class="quiet" @click=${()=>this.deleteEntry(e.id)} aria-label="Delete entry">✕</button>
            </li>
          `)}
      </ul>
    `}};Y.styles=[w,$`
      :host {
        display: block;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        display: flex;
        align-items: baseline;
        gap: 1rem;
        padding: 0.85rem 0;
        border-bottom: 1px solid var(--rule);
      }

      .date {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        color: var(--ink-dim);
        min-width: 6rem;
      }

      .instruments {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        letter-spacing: 0.04em;
      }

      .minutes {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        color: var(--ink-dim);
      }

      .notes {
        flex: 1;
        min-width: 8rem;
        color: var(--ink-dim);
        font-size: 0.9rem;
      }

      .empty {
        color: var(--ink-dim);
        padding: 1rem 0;
      }
    `];je([te({attribute:!1})],Y.prototype,"entries",2);Y=je([A("practice-log-list")],Y);var vt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,ze=(r,e,t,i)=>{for(var s=i>1?void 0:i?gt(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&vt(e,t,s),s};let G=class extends v{constructor(){super(...arguments),this.entries=[]}connectedCallback(){super.connectedCallback(),this.entries=j.getAll(),this.unsubscribe=j.subscribe(()=>{this.entries=j.getAll()})}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.unsubscribe)==null||r.call(this)}render(){return p`
      <section>
        <streak-chain .entries=${this.entries}></streak-chain>
      </section>

      <section>
        <h2 class="display">Log today's practice</h2>
        <practice-log-form></practice-log-form>
      </section>

      <section>
        <h2 class="display">History</h2>
        <practice-log-list .entries=${this.entries}></practice-log-list>
      </section>
    `}};G.styles=[w,$`
      :host {
        display: block;
      }

      section {
        margin-bottom: 2.5rem;
      }

      h2 {
        font-family: var(--font-display);
        font-weight: 400;
        font-size: 1.1rem;
        margin: 0 0 1rem;
      }
    `];ze([g()],G.prototype,"entries",2);G=ze([A("practice-view")],G);const z=new ke("ledger.dog.v1");var $t=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,k=(r,e,t,i)=>{for(var s=i>1?void 0:i?bt(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&$t(e,t,s),s};function xe(){const r=new Date;return r.setSeconds(0,0),r.setMinutes(r.getMinutes()-r.getTimezoneOffset()),r.toISOString().slice(0,16)}let _=class extends v{constructor(){super(...arguments),this.type="poop",this.timestamp=xe(),this.location="",this.medicineName="",this.notes=""}submit(r){r.preventDefault();const e={id:Me(),type:this.type,timestamp:new Date(this.timestamp).getTime(),location:this.location||void 0,medicineName:this.type==="medicine"&&this.medicineName||void 0,notes:this.notes||void 0,createdAt:Date.now()};z.add(e),this.location="",this.medicineName="",this.notes="",this.timestamp=xe()}render(){return p`
      <form @submit=${this.submit}>
        <fieldset>
          ${Ue.map(r=>p`
              <label class="check">
                <input
                  type="radio"
                  name="type"
                  .checked=${this.type===r.value}
                  @change=${()=>this.type=r.value}
                />
                ${r.label}
              </label>
            `)}
        </fieldset>

        <div class="row">
          <label>
            <span class="label">When</span>
            <input
              type="datetime-local"
              .value=${this.timestamp}
              @input=${r=>this.timestamp=r.target.value}
            />
          </label>
          ${this.type==="medicine"?p`
                <label>
                  <span class="label">Medicine</span>
                  <input
                    type="text"
                    placeholder="e.g. Heartgard"
                    .value=${this.medicineName}
                    @input=${r=>this.medicineName=r.target.value}
                  />
                </label>
              `:p`
                <label>
                  <span class="label">Where</span>
                  <input
                    type="text"
                    placeholder="e.g. back yard"
                    .value=${this.location}
                    @input=${r=>this.location=r.target.value}
                  />
                </label>
              `}
        </div>

        <label>
          <span class="label">Notes</span>
          <textarea
            placeholder="Anything worth noting?"
            .value=${this.notes}
            @input=${r=>this.notes=r.target.value}
          ></textarea>
        </label>

        <div class="actions">
          <button type="submit">Log event</button>
        </div>
      </form>
    `}};_.styles=[w,$`
      :host {
        display: block;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .row {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .row > label {
        flex: 1;
        min-width: 10rem;
      }

      .actions {
        display: flex;
        justify-content: flex-end;
      }
    `];k([g()],_.prototype,"type",2);k([g()],_.prototype,"timestamp",2);k([g()],_.prototype,"location",2);k([g()],_.prototype,"medicineName",2);k([g()],_.prototype,"notes",2);_=k([A("dog-event-form")],_);var yt=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Le=(r,e,t,i)=>{for(var s=i>1?void 0:i?_t(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&yt(e,t,s),s};function At(r){return new Date(r).toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}let Z=class extends v{constructor(){super(...arguments),this.events=[]}deleteEvent(r){z.remove(r)}render(){const r=[...this.events].sort((e,t)=>t.timestamp-e.timestamp);return r.length===0?p`<p class="empty label">No events logged yet.</p>`:p`
      <ul>
        ${r.map(e=>{var s;const t=((s=Ue.find(n=>n.value===e.type))==null?void 0:s.label)??e.type,i=e.type==="medicine"?e.medicineName:e.location;return p`
            <li>
              <span class="when">${At(e.timestamp)}</span>
              <span class="type ${e.type}">${t}</span>
              <span class="detail">${i??""}</span>
              <span class="notes">${e.notes??""}</span>
              <button class="quiet" @click=${()=>this.deleteEvent(e.id)} aria-label="Delete event">✕</button>
            </li>
          `})}
      </ul>
    `}};Z.styles=[w,$`
      :host {
        display: block;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        display: flex;
        align-items: baseline;
        gap: 1rem;
        padding: 0.85rem 0;
        border-bottom: 1px solid var(--rule);
      }

      .when {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        color: var(--ink-dim);
        min-width: 9rem;
      }

      .type {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        min-width: 5rem;
      }

      .type.poop,
      .type.pee {
        color: var(--ink);
      }

      .type.medicine {
        color: var(--accent);
      }

      .detail {
        color: var(--ink-dim);
        font-size: 0.9rem;
      }

      .notes {
        flex: 1;
        min-width: 8rem;
        color: var(--ink-dim);
        font-size: 0.9rem;
      }

      .empty {
        color: var(--ink-dim);
        padding: 1rem 0;
      }
    `];Le([te({attribute:!1})],Z.prototype,"events",2);Z=Le([A("dog-event-list")],Z);var wt=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,Re=(r,e,t,i)=>{for(var s=i>1?void 0:i?xt(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&wt(e,t,s),s};let Q=class extends v{constructor(){super(...arguments),this.events=[]}connectedCallback(){super.connectedCallback(),this.events=z.getAll(),this.unsubscribe=z.subscribe(()=>{this.events=z.getAll()})}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this.unsubscribe)==null||r.call(this)}render(){return p`
      <section>
        <h2 class="display">Log an event</h2>
        <dog-event-form></dog-event-form>
      </section>

      <section>
        <h2 class="display">History</h2>
        <dog-event-list .events=${this.events}></dog-event-list>
      </section>
    `}};Q.styles=[w,$`
      :host {
        display: block;
      }

      section {
        margin-bottom: 2.5rem;
      }

      h2 {
        font-family: var(--font-display);
        font-weight: 400;
        font-size: 1.1rem;
        margin: 0 0 1rem;
      }
    `];Re([g()],Q.prototype,"events",2);Q=Re([A("dog-view")],Q);var St=Object.defineProperty,Pt=Object.getOwnPropertyDescriptor,Ie=(r,e,t,i)=>{for(var s=i>1?void 0:i?Pt(e,t):e,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&St(e,t,s),s};const Se="ledger.tab.v1";let X=class extends v{constructor(){super(...arguments),this.tab=localStorage.getItem(Se)||"practice"}setTab(r){this.tab=r,localStorage.setItem(Se,r)}render(){return p`
      <div class="wrap">
        <header>
          <h1 class="display">Ledger</h1>
          <nav>
            <button class=${this.tab==="practice"?"active":""} @click=${()=>this.setTab("practice")}>
              Practice
            </button>
            <button class=${this.tab==="dog"?"active":""} @click=${()=>this.setTab("dog")}>Dog</button>
          </nav>
        </header>

        ${this.tab==="practice"?p`<practice-view></practice-view>`:p`<dog-view></dog-view>`}
      </div>
    `}};X.styles=[w,$`
      :host {
        display: block;
      }

      .wrap {
        max-width: 42rem;
        margin: 0 auto;
        padding: 3rem 1.5rem 6rem;
      }

      header {
        margin-bottom: 2.5rem;
      }

      h1 {
        font-family: var(--font-display);
        font-weight: 400;
        font-size: 2.2rem;
        letter-spacing: -0.01em;
        margin: 0 0 1.4rem;
      }

      nav {
        display: flex;
        gap: 1.75rem;
        border-bottom: 1px solid var(--rule);
      }

      nav button {
        all: unset;
        cursor: pointer;
        font-family: var(--font-mono);
        font-size: 0.78rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--ink-dim);
        padding-bottom: 0.9rem;
        border-bottom: 2px solid transparent;
      }

      nav button.active {
        color: var(--ink);
        border-bottom-color: var(--accent);
      }
    `];Ie([g()],X.prototype,"tab",2);X=Ie([A("app-root")],X);
