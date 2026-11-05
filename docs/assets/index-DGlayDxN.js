(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Js=globalThis,or=Js.ShadowRoot&&(Js.ShadyCSS===void 0||Js.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lr=Symbol(),Xr=new WeakMap;let ha=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==lr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(or&&e===void 0){const i=s!==void 0&&s.length===1;i&&(e=Xr.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Xr.set(s,e))}return e}toString(){return this.cssText}};const Eo=t=>new ha(typeof t=="string"?t:t+"",void 0,lr),ge=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((i,r,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1],t[0]);return new ha(s,t,lr)},Ao=(t,e)=>{if(or)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const i=document.createElement("style"),r=Js.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},Qr=or?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const i of e.cssRules)s+=i.cssText;return Eo(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:To,defineProperty:Oo,getOwnPropertyDescriptor:Io,getOwnPropertyNames:Ro,getOwnPropertySymbols:Co,getPrototypeOf:Po}=Object,lt=globalThis,Zr=lt.trustedTypes,Do=Zr?Zr.emptyScript:"",Di=lt.reactiveElementPolyfillSupport,ls=(t,e)=>t,Zs={toAttribute(t,e){switch(e){case Boolean:t=t?Do:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},cr=(t,e)=>!To(t,e),en={attribute:!0,type:String,converter:Zs,reflect:!1,useDefault:!1,hasChanged:cr};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),lt.litPropertyMetadata??(lt.litPropertyMetadata=new WeakMap);let Ut=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=en){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,s);r!==void 0&&Oo(this.prototype,e,r)}}static getPropertyDescriptor(e,s,i){const{get:r,set:n}=Io(this.prototype,e)??{get(){return this[s]},set(a){this[s]=a}};return{get:r,set(a){const o=r==null?void 0:r.call(this);n==null||n.call(this,a),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??en}static _$Ei(){if(this.hasOwnProperty(ls("elementProperties")))return;const e=Po(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ls("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ls("properties"))){const s=this.properties,i=[...Ro(s),...Co(s)];for(const r of i)this.createProperty(r,s[r])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[s,i]of this.elementProperties){const r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)s.unshift(Qr(r))}else e!==void 0&&s.push(Qr(e));return s}static _$Eu(e,s){const i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$EO)==null||s.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ao(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostConnected)==null?void 0:i.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostDisconnected)==null?void 0:i.call(s)})}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$ET(e,s){var n;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const a=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Zs).toAttribute(s,i.type);this._$Em=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,s){var n,a;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)==null?void 0:n.fromAttribute)!==void 0?o.converter:Zs;this._$Em=r;const c=l.fromAttribute(s,o.type);this[r]=c??((a=this._$Ej)==null?void 0:a.get(r))??c,this._$Em=null}}requestUpdate(e,s,i,r=!1,n){var a;if(e!==void 0){const o=this.constructor;if(r===!1&&(n=this[e]),i??(i=o.getPropertyOptions(e)),!((i.hasChanged??cr)(n,s)||i.useDefault&&i.reflect&&n===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:i,reflect:r,wrapped:n},a){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??s??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(s=void 0),this._$AL.set(e,s)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,a]of this._$Ep)this[n]=a;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,a]of r){const{wrapped:o}=a,l=this[n];o!==!0||this._$AL.has(n)||l===void 0||this.C(n,void 0,a,l)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(i=this._$EO)==null||i.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(s)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(e){}firstUpdated(e){}};Ut.elementStyles=[],Ut.shadowRootOptions={mode:"open"},Ut[ls("elementProperties")]=new Map,Ut[ls("finalized")]=new Map,Di==null||Di({ReactiveElement:Ut}),(lt.reactiveElementVersions??(lt.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cs=globalThis,tn=t=>t,ei=cs.trustedTypes,sn=ei?ei.createPolicy("lit-html",{createHTML:t=>t}):void 0,pa="$lit$",nt=`lit$${Math.random().toFixed(9).slice(2)}$`,fa="?"+nt,Mo=`<${fa}>`,St=document,us=()=>St.createComment(""),hs=t=>t===null||typeof t!="object"&&typeof t!="function",dr=Array.isArray,jo=t=>dr(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Mi=`[ 	
\f\r]`,is=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rn=/-->/g,nn=/>/g,pt=RegExp(`>|${Mi}(?:([^\\s"'>=/]+)(${Mi}*=${Mi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),an=/'/g,on=/"/g,ga=/^(?:script|style|textarea|title)$/i,No=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),v=No(1),Gt=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),ln=new WeakMap,bt=St.createTreeWalker(St,129);function ma(t,e){if(!dr(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return sn!==void 0?sn.createHTML(e):e}const Lo=(t,e)=>{const s=t.length-1,i=[];let r,n=e===2?"<svg>":e===3?"<math>":"",a=is;for(let o=0;o<s;o++){const l=t[o];let c,u,h=-1,f=0;for(;f<l.length&&(a.lastIndex=f,u=a.exec(l),u!==null);)f=a.lastIndex,a===is?u[1]==="!--"?a=rn:u[1]!==void 0?a=nn:u[2]!==void 0?(ga.test(u[2])&&(r=RegExp("</"+u[2],"g")),a=pt):u[3]!==void 0&&(a=pt):a===pt?u[0]===">"?(a=r??is,h=-1):u[1]===void 0?h=-2:(h=a.lastIndex-u[2].length,c=u[1],a=u[3]===void 0?pt:u[3]==='"'?on:an):a===on||a===an?a=pt:a===rn||a===nn?a=is:(a=pt,r=void 0);const p=a===pt&&t[o+1].startsWith("/>")?" ":"";n+=a===is?l+Mo:h>=0?(i.push(c),l.slice(0,h)+pa+l.slice(h)+nt+p):l+nt+(h===-2?o:p)}return[ma(t,n+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class ps{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let n=0,a=0;const o=e.length-1,l=this.parts,[c,u]=Lo(e,s);if(this.el=ps.createElement(c,i),bt.currentNode=this.el.content,s===2||s===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=bt.nextNode())!==null&&l.length<o;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(pa)){const f=u[a++],p=r.getAttribute(h).split(nt),g=/([.?@])?(.*)/.exec(f);l.push({type:1,index:n,name:g[2],strings:p,ctor:g[1]==="."?Fo:g[1]==="?"?Bo:g[1]==="@"?zo:di}),r.removeAttribute(h)}else h.startsWith(nt)&&(l.push({type:6,index:n}),r.removeAttribute(h));if(ga.test(r.tagName)){const h=r.textContent.split(nt),f=h.length-1;if(f>0){r.textContent=ei?ei.emptyScript:"";for(let p=0;p<f;p++)r.append(h[p],us()),bt.nextNode(),l.push({type:2,index:++n});r.append(h[f],us())}}}else if(r.nodeType===8)if(r.data===fa)l.push({type:2,index:n});else{let h=-1;for(;(h=r.data.indexOf(nt,h+1))!==-1;)l.push({type:7,index:n}),h+=nt.length-1}n++}}static createElement(e,s){const i=St.createElement("template");return i.innerHTML=e,i}}function Wt(t,e,s=t,i){var a,o;if(e===Gt)return e;let r=i!==void 0?(a=s._$Co)==null?void 0:a[i]:s._$Cl;const n=hs(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((o=r==null?void 0:r._$AO)==null||o.call(r,!1),n===void 0?r=void 0:(r=new n(t),r._$AT(t,s,i)),i!==void 0?(s._$Co??(s._$Co=[]))[i]=r:s._$Cl=r),r!==void 0&&(e=Wt(t,r._$AS(t,e.values),r,i)),e}class Uo{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??St).importNode(s,!0);bt.currentNode=r;let n=bt.nextNode(),a=0,o=0,l=i[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Ss(n,n.nextSibling,this,e):l.type===1?c=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(c=new Ho(n,this,e)),this._$AV.push(c),l=i[++o]}a!==(l==null?void 0:l.index)&&(n=bt.nextNode(),a++)}return bt.currentNode=St,r}p(e){let s=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,s),s+=i.strings.length-2):i._$AI(e[s])),s++}}class Ss{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=Wt(this,e,s),hs(e)?e===Q||e==null||e===""?(this._$AH!==Q&&this._$AR(),this._$AH=Q):e!==this._$AH&&e!==Gt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):jo(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Q&&hs(this._$AH)?this._$AA.nextSibling.data=e:this.T(St.createTextNode(e)),this._$AH=e}$(e){var n;const{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ps.createElement(ma(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(s);else{const a=new Uo(r,this),o=a.u(this.options);a.p(s),this.T(o),this._$AH=a}}_$AC(e){let s=ln.get(e.strings);return s===void 0&&ln.set(e.strings,s=new ps(e)),s}k(e){dr(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,r=0;for(const n of e)r===s.length?s.push(i=new Ss(this.O(us()),this.O(us()),this,this.options)):i=s[r],i._$AI(n),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,s);e!==this._$AB;){const r=tn(e).nextSibling;tn(e).remove(),e=r}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}}class di{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,r,n){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}_$AI(e,s=this,i,r){const n=this.strings;let a=!1;if(n===void 0)e=Wt(this,e,s,0),a=!hs(e)||e!==this._$AH&&e!==Gt,a&&(this._$AH=e);else{const o=e;let l,c;for(e=n[0],l=0;l<n.length-1;l++)c=Wt(this,o[i+l],s,l),c===Gt&&(c=this._$AH[l]),a||(a=!hs(c)||c!==this._$AH[l]),c===Q?e=Q:e!==Q&&(e+=(c??"")+n[l+1]),this._$AH[l]=c}a&&!r&&this.j(e)}j(e){e===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Fo extends di{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Q?void 0:e}}class Bo extends di{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Q)}}class zo extends di{constructor(e,s,i,r,n){super(e,s,i,r,n),this.type=5}_$AI(e,s=this){if((e=Wt(this,e,s,0)??Q)===Gt)return;const i=this._$AH,r=e===Q&&i!==Q||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Q&&(i===Q||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}}class Ho{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Wt(this,e)}}const ji=cs.litHtmlPolyfillSupport;ji==null||ji(ps,Ss),(cs.litHtmlVersions??(cs.litHtmlVersions=[])).push("3.3.3");const qo=(t,e,s)=>{const i=(s==null?void 0:s.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const n=(s==null?void 0:s.renderBefore)??null;i._$litPart$=r=new Ss(e.insertBefore(us(),n),n,void 0,s??{})}return r._$AI(t),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=globalThis;class ie extends Ut{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qo(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Gt}}var ua;ie._$litElement$=!0,ie.finalized=!0,(ua=kt.litElementHydrateSupport)==null||ua.call(kt,{LitElement:ie});const Ni=kt.litElementPolyfillSupport;Ni==null||Ni({LitElement:ie});(kt.litElementVersions??(kt.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Go={attribute:!0,type:String,converter:Zs,reflect:!1,hasChanged:cr},Wo=(t=Go,e,s)=>{const{kind:i,metadata:r}=s;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(s.name,t),i==="accessor"){const{name:a}=s;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,t,!0,o)},init(o){return o!==void 0&&this.C(a,void 0,t,o),o}}}if(i==="setter"){const{name:a}=s;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,t,!0,o)}}throw Error("Unsupported decorator location: "+i)};function P(t){return(e,s)=>typeof s=="object"?Wo(t,e,s):((i,r,n)=>{const a=r.hasOwnProperty(n);return r.constructor.createProperty(n,i),a?Object.getOwnPropertyDescriptor(r,n):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function A(t){return P({...t,state:!0,attribute:!1})}function Ko(t){return t.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||"instrument"}function Vo(t){const e=Math.max(0,Math.floor(t/1e3)),s=Math.floor(e/3600),i=Math.floor(e%3600/60),r=e%60,n=String(i).padStart(2,"0"),a=String(r).padStart(2,"0");return s>0?`${s}:${n}:${a}`:`${i}:${a}`}function Ke(t){const e=new Date(t);return e.setHours(0,0,0,0),e}function wt(t,e){const s=new Date(t);return s.setDate(s.getDate()+e),s}function Jo(t){return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Yo(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}function Xo(t){const e=Ke(t),i=(e.getDay()+6)%7;return wt(e,-i)}function ur(t,e=new Date){const s=Xo(e),i=wt(Ke(e),1);return t.filter(r=>!r.deletedAt).filter(r=>{const n=new Date(r.start);return n>=s&&n<i}).reduce((r,n)=>r+(n.duration||0),0)}function cn(t){if(!t)return"Never";const e=new Date(t).getTime();if(isNaN(e))return"Never";const s=Math.floor((Date.now()-e)/1e3);if(s<10)return"Just now";if(s<60)return`${s}s ago`;const i=Math.floor(s/60);if(i<60)return`${i}m ago`;const r=Math.floor(i/60);if(r<24)return`${r}h ago`;const n=Math.floor(r/24);return n===1?"Yesterday":`${n}d ago`}let Pt=null;function hr(){if(typeof window>"u")return null;if(!Pt){const t=window.AudioContext||window.webkitAudioContext;t&&(Pt=new t)}return Pt&&Pt.state==="suspended"&&Pt.resume().catch(()=>{}),Pt}function Qo(t=!0){if(t)try{const e=hr();if(!e)return;const s=e.currentTime,i=(r,n,a,o)=>{const l=e.createOscillator(),c=e.createOscillator(),u=e.createGain(),h=e.createGain();l.type="sine",l.frequency.setValueAtTime(r,n),c.type="sine",c.frequency.setValueAtTime(r*2,n),u.gain.setValueAtTime(1e-4,n),u.gain.exponentialRampToValueAtTime(o,n+.02),u.gain.exponentialRampToValueAtTime(1e-4,n+a),h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(o*.25,n+.015),h.gain.exponentialRampToValueAtTime(1e-4,n+a*.6),l.connect(u),c.connect(h),u.connect(e.destination),h.connect(e.destination),l.start(n),c.start(n),l.stop(n+a+.05),c.stop(n+a+.05)};i(523.25,s,.5,.1),i(659.25,s+.1,.8,.12)}catch{}}function rt(t=!0){if(t)try{const e=hr();if(!e)return;const s=e.currentTime,i=(r,n,a,o)=>{const l=e.createOscillator(),c=e.createOscillator(),u=e.createGain(),h=e.createGain();l.type="sine",l.frequency.setValueAtTime(r,n),c.type="sine",c.frequency.setValueAtTime(r*2,n),u.gain.setValueAtTime(1e-4,n),u.gain.exponentialRampToValueAtTime(o,n+.02),u.gain.exponentialRampToValueAtTime(1e-4,n+a),h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(o*.25,n+.015),h.gain.exponentialRampToValueAtTime(1e-4,n+a*.6),l.connect(u),c.connect(h),u.connect(e.destination),h.connect(e.destination),l.start(n),c.start(n),l.stop(n+a+.05),c.stop(n+a+.05)};i(523.25,s,.5,.1),i(659.25,s+.09,.6,.11),i(783.99,s+.18,1.1,.13)}catch{}}function Ie(t=!0){if(t)try{const e=hr();if(!e)return;const s=e.currentTime,i=e.createOscillator(),r=e.createGain();i.type="sine",i.frequency.setValueAtTime(420,s),i.frequency.exponentialRampToValueAtTime(220,s+.035),r.gain.setValueAtTime(.04,s),r.gain.exponentialRampToValueAtTime(1e-4,s+.04),i.connect(r),r.connect(e.destination),i.start(s),i.stop(s+.04)}catch{}}function Li(t=15,e=!0){if(e)try{typeof navigator<"u"&&"vibrate"in navigator&&navigator.vibrate(t)}catch{}}class Zo{formatUrl(e){let s=e.trim().replace(/\/+$/,"");return s&&!s.startsWith("http://")&&!s.startsWith("https://")&&(s="https://"+s),s}applyAuthHeaders(e,s){if(!s)return;const i=s.trim();i.toLowerCase().startsWith("bearer ")?e.Authorization=i:i.includes(".")&&i.length>30?e.Authorization=`Bearer ${i}`:e["X-PT-Secret"]=i}async testConnection(e,s){const i=this.formatUrl(e);if(!i)return{ok:!1,status:0,message:"Worker URL cannot be empty"};try{const r={};this.applyAuthHeaders(r,s);const n=new AbortController,a=setTimeout(()=>n.abort(),8e3),o=await fetch(`${i}/api/health`,{method:"GET",headers:r,signal:n.signal});if(clearTimeout(a),o.status===200)return{ok:!0,status:200,message:"Connected to Cloudflare Worker",timestamp:(await o.json().catch(()=>({}))).timestamp};if(o.status===401)return{ok:!1,status:401,message:"Unauthorized: Invalid or missing authorization token"};const l=await o.text().catch(()=>"");return{ok:!1,status:o.status,message:`Connection error (${o.status}): ${l||o.statusText}`}}catch(r){return r instanceof Error&&r.name==="AbortError"?{ok:!1,status:0,message:"Connection timed out (8s limit)"}:{ok:!1,status:0,message:"Network error: Unable to reach worker endpoint"}}}async sync(e,s,i){const r=this.formatUrl(e);if(!r)throw new Error("Worker URL is not configured");const n={"Content-Type":"application/json"};this.applyAuthHeaders(n,s);const a=new AbortController,o=setTimeout(()=>a.abort(),15e3),l=await fetch(`${r}/api/sync`,{method:"POST",headers:n,body:JSON.stringify(i),signal:a.signal});if(clearTimeout(o),!l.ok){let c="";try{const u=await l.json();c=u.error||u.message||""}catch{c=await l.text().catch(()=>"")}throw new Error(`Cloud sync failed (${l.status}): ${c||l.statusText||"Unknown error"}`)}return await l.json()}}const dn=new Zo,el=Symbol.for("@supabase/supabase-js.traceContextExtractor");function tl(){return globalThis[el]}function ui(t,e){var s={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(s[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(s[i[r]]=t[i[r]]);return s}function sl(t,e,s,i){function r(n){return n instanceof s?n:new s(function(a){a(n)})}return new(s||(s=Promise))(function(n,a){function o(u){try{c(i.next(u))}catch(h){a(h)}}function l(u){try{c(i.throw(u))}catch(h){a(h)}}function c(u){u.done?n(u.value):r(u.value).then(o,l)}c((i=i.apply(t,e||[])).next())})}const il=t=>t?(...e)=>t(...e):(...e)=>fetch(...e);class pr extends Error{constructor(e,s="FunctionsError",i){super(e),this.name=s,this.context=i}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class rl extends pr{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class un extends pr{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class hn extends pr{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var Yi;(function(t){t.Any="any",t.ApNortheast1="ap-northeast-1",t.ApNortheast2="ap-northeast-2",t.ApSouth1="ap-south-1",t.ApSoutheast1="ap-southeast-1",t.ApSoutheast2="ap-southeast-2",t.CaCentral1="ca-central-1",t.EuCentral1="eu-central-1",t.EuWest1="eu-west-1",t.EuWest2="eu-west-2",t.EuWest3="eu-west-3",t.SaEast1="sa-east-1",t.UsEast1="us-east-1",t.UsWest1="us-west-1",t.UsWest2="us-west-2"})(Yi||(Yi={}));class nl{constructor(e,{headers:s={},customFetch:i,region:r=Yi.Any}={}){this.url=e,this.headers=s,this.region=r,this.fetch=il(i)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return sl(this,arguments,void 0,function*(s,i={}){var r,n;let a,o,l;try{const{headers:c,method:u,body:h,signal:f,timeout:p}=i;let g={},{region:m}=i;m||(m=this.region);const w=new URL(`${this.url}/${s}`);m&&m!=="any"&&(g["x-region"]=m,w.searchParams.set("forceFunctionRegion",m));let x;const _=!!c&&Object.keys(c).some(z=>z.toLowerCase()==="content-type");h&&!_?typeof Blob<"u"&&h instanceof Blob||h instanceof ArrayBuffer?(g["Content-Type"]="application/octet-stream",x=h):typeof h=="string"?(g["Content-Type"]="text/plain",x=h):typeof FormData<"u"&&h instanceof FormData?x=h:(g["Content-Type"]="application/json",x=JSON.stringify(h)):h&&typeof h!="string"&&!(typeof Blob<"u"&&h instanceof Blob)&&!(h instanceof ArrayBuffer)&&!(typeof FormData<"u"&&h instanceof FormData)?x=JSON.stringify(h):x=h;let b=f;p&&(o=new AbortController,a=setTimeout(()=>o.abort(),p),f?(b=o.signal,l=()=>o.abort(),f.addEventListener("abort",l)):b=o.signal);const k=yield this.fetch(w.toString(),{method:u||"POST",headers:Object.assign(Object.assign(Object.assign({},g),this.headers),c),body:x,signal:b}).catch(z=>{throw new rl(z)}),R=k.headers.get("x-relay-error");if(R&&R==="true")throw new un(k);if(!k.ok)throw new hn(k);let O=((r=k.headers.get("Content-Type"))!==null&&r!==void 0?r:"text/plain").split(";")[0].trim().toLowerCase(),C;return O==="application/json"?C=yield k.json():O==="application/octet-stream"||O==="application/pdf"?C=yield k.blob():O==="text/event-stream"?C=k:O==="multipart/form-data"?C=yield k.formData():C=yield k.text(),{data:C,error:null,response:k}}catch(c){return{data:null,error:c,response:c instanceof hn||c instanceof un?c.context:void 0}}finally{a&&clearTimeout(a),l&&((n=i.signal)===null||n===void 0||n.removeEventListener("abort",l))}})}}const ya=3,pn=t=>Math.min(1e3*2**t,3e4),al=[520,503],va=["GET","HEAD","OPTIONS"];var Ui=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function fs(t){"@babel/helpers - typeof";return fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fs(t)}function ol(t,e){if(fs(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var i=s.call(t,e);if(fs(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ll(t){var e=ol(t,"string");return fs(e)=="symbol"?e:e+""}function cl(t,e,s){return(e=ll(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function fn(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),s.push.apply(s,i)}return s}function zt(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?fn(Object(s),!0).forEach(function(i){cl(t,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):fn(Object(s)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))})}return t}function gn(t,e){return new Promise(s=>{if(e!=null&&e.aborted){s();return}const i=setTimeout(()=>{e==null||e.removeEventListener("abort",r),s()},t);function r(){clearTimeout(i),s()}e==null||e.addEventListener("abort",r)})}function dl(t,e,s,i){return!(!i||s>=ya||!va.includes(t)||!al.includes(e))}var ul=class{constructor(t){var e,s,i,r,n;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=t.method,this.url=t.url,this.headers=new Headers(t.headers),this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=(e=t.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=t.signal,this.isMaybeSingle=(s=t.isMaybeSingle)!==null&&s!==void 0?s:!1,this.shouldStripNulls=(i=t.shouldStripNulls)!==null&&i!==void 0?i:!1,this.urlLengthLimit=(r=t.urlLengthLimit)!==null&&r!==void 0?r:8e3,this.retryEnabled=(n=t.retry)!==null&&n!==void 0?n:!0,t.fetch?this.fetch=t.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(t,e){return this.headers=new Headers(this.headers),this.headers.set(t,e),this}retry(t){return this.retryEnabled=t,this}then(t,e){var s=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const a=this.headers.get("Accept");a==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!a||a==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const i=this.fetch;let n=(async()=>{let a=0;for(;;){const c={};s.headers.forEach((h,f)=>{c[f]=h}),a>0&&(c["X-Retry-Count"]=String(a));let u;try{u=await i(s.url.toString(),{method:s.method,headers:c,body:JSON.stringify(s.body,(h,f)=>typeof f=="bigint"?f.toString():f),signal:s.signal})}catch(h){if((h==null?void 0:h.name)==="AbortError"||(h==null?void 0:h.code)==="ABORT_ERR"||!va.includes(s.method))throw h;if(s.retryEnabled&&a<ya){const f=pn(a);a++,await gn(f,s.signal);continue}throw h}if(dl(s.method,u.status,a,s.retryEnabled)){var o,l;const h=(o=(l=u.headers)===null||l===void 0?void 0:l.get("Retry-After"))!==null&&o!==void 0?o:null,f=h!==null?Math.max(0,parseInt(h,10)||0)*1e3:pn(a);await u.text(),a++,await gn(f,s.signal);continue}return await s.processResponse(u)}})();return this.shouldThrowOnError||(n=n.catch(a=>{var o;let l="",c="",u="";const h=a==null?void 0:a.cause;if(h){var f,p,g,m;const _=(f=h==null?void 0:h.message)!==null&&f!==void 0?f:"",b=(p=h==null?void 0:h.code)!==null&&p!==void 0?p:"";l=`${(g=a==null?void 0:a.name)!==null&&g!==void 0?g:"FetchError"}: ${a==null?void 0:a.message}`,l+=`

Caused by: ${(m=h==null?void 0:h.name)!==null&&m!==void 0?m:"Error"}: ${_}`,b&&(l+=` (${b})`),h!=null&&h.stack&&(l+=`
${h.stack}`)}else{var w;l=(w=a==null?void 0:a.stack)!==null&&w!==void 0?w:""}const x=this.url.toString().length;return(a==null?void 0:a.name)==="AbortError"||(a==null?void 0:a.code)==="ABORT_ERR"?(u="",c="Request was aborted (timeout or manual cancellation)",x>this.urlLengthLimit&&(c+=`. Note: Your request URL is ${x} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((h==null?void 0:h.name)==="HeadersOverflowError"||(h==null?void 0:h.code)==="UND_ERR_HEADERS_OVERFLOW")&&(u="",c="HTTP headers exceeded server limits (typically 16KB)",x>this.urlLengthLimit&&(c+=`. Your request URL is ${x} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(o=a==null?void 0:a.name)!==null&&o!==void 0?o:"FetchError"}: ${a==null?void 0:a.message}`,details:l,hint:c,code:u},data:null,count:null,status:0,statusText:""}})),n.then(t,e)}async processResponse(t){var e=this;let s=null,i=null,r=null,n=t.status,a=t.statusText;if(t.ok){var o,l;if(e.method!=="HEAD"){var c;const p=await t.text();if(p!=="")if(e.headers.get("Accept")==="text/csv")i=p;else if(e.headers.get("Accept")&&(!((c=e.headers.get("Accept"))===null||c===void 0)&&c.includes("application/vnd.pgrst.plan+text")))i=p;else try{i=JSON.parse(p)}catch{if(s={message:p},i=null,e.shouldThrowOnError)throw new Ui({message:p,details:"",hint:"",code:""})}}const h=(o=e.headers.get("Prefer"))===null||o===void 0?void 0:o.match(/count=(exact|planned|estimated)/),f=(l=t.headers.get("content-range"))===null||l===void 0?void 0:l.split("/");if(h&&f&&f.length>1&&(r=parseInt(f[1])),e.isMaybeSingle&&Array.isArray(i))if(i.length>1){if(s={code:"PGRST116",details:`Results contain ${i.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},i=null,r=null,n=406,a="Not Acceptable",e.shouldThrowOnError){var u;throw new Ui(zt(zt({},s),{},{hint:(u=s.hint)!==null&&u!==void 0?u:""}))}}else i.length===1?i=i[0]:i=null}else{const h=await t.text();try{s=JSON.parse(h),Array.isArray(s)&&t.status===404&&(i=[],s=null,n=200,a="OK")}catch{t.status===404&&h===""?(n=204,a="No Content"):s={message:h}}if(s&&e.shouldThrowOnError)throw new Ui(s)}return{success:s===null,error:s,data:i,count:r,status:n,statusText:a}}returns(){return this}overrideTypes(){return this}},hl=class extends ul{throwOnError(){return super.throwOnError()}select(t){let e=!1;const s=(t??"*").split("").map(i=>/\s/.test(i)&&!e?"":(i==='"'&&(e=!e),i)).join("");return this.url.searchParams.set("select",s),this.headers.append("Prefer","return=representation"),this}order(t,{ascending:e=!0,nullsFirst:s,foreignTable:i,referencedTable:r=i}={}){const n=r?`${r}.order`:"order",a=this.url.searchParams.get(n);return this.url.searchParams.set(n,`${a?`${a},`:""}${t}.${e?"asc":"desc"}${s===void 0?"":s?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:e,referencedTable:s=e}={}){const i=typeof s>"u"?"limit":`${s}.limit`;return this.url.searchParams.set(i,`${t}`),this}range(t,e,{foreignTable:s,referencedTable:i=s}={}){const r=typeof i>"u"?"offset":`${i}.offset`,n=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(r,`${t}`),this.url.searchParams.set(n,`${e-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:t=!1,verbose:e=!1,settings:s=!1,buffers:i=!1,wal:r=!1,format:n="text"}={}){var a;const o=[t?"analyze":null,e?"verbose":null,s?"settings":null,i?"buffers":null,r?"wal":null].filter(Boolean).join("|"),l=(a=this.headers.get("Accept"))!==null&&a!==void 0?a:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${n}; for="${l}"; options=${o};`),n==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(t){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${t}`),this}};const mn=new RegExp("[,()]");var Ft=class extends hl{throwOnError(){return super.throwOnError()}eq(t,e){return this.url.searchParams.append(t,`eq.${e}`),this}neq(t,e){return this.url.searchParams.append(t,`neq.${e}`),this}gt(t,e){return this.url.searchParams.append(t,`gt.${e}`),this}gte(t,e){return this.url.searchParams.append(t,`gte.${e}`),this}lt(t,e){return this.url.searchParams.append(t,`lt.${e}`),this}lte(t,e){return this.url.searchParams.append(t,`lte.${e}`),this}like(t,e){return this.url.searchParams.append(t,`like.${e}`),this}likeAllOf(t,e){return this.url.searchParams.append(t,`like(all).{${e.join(",")}}`),this}likeAnyOf(t,e){return this.url.searchParams.append(t,`like(any).{${e.join(",")}}`),this}ilike(t,e){return this.url.searchParams.append(t,`ilike.${e}`),this}ilikeAllOf(t,e){return this.url.searchParams.append(t,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(t,e){return this.url.searchParams.append(t,`ilike(any).{${e.join(",")}}`),this}regexMatch(t,e){return this.url.searchParams.append(t,`match.${e}`),this}regexIMatch(t,e){return this.url.searchParams.append(t,`imatch.${e}`),this}is(t,e){return this.url.searchParams.append(t,`is.${e}`),this}isDistinct(t,e){return this.url.searchParams.append(t,`isdistinct.${e}`),this}in(t,e){const s=Array.from(new Set(e)).map(i=>typeof i=="string"&&mn.test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(t,`in.(${s})`),this}notIn(t,e){const s=Array.from(new Set(e)).map(i=>typeof i=="string"&&mn.test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(t,`not.in.(${s})`),this}contains(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cs.{${e.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(e)}`),this}containedBy(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cd.{${e.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(e)}`),this}rangeGt(t,e){return this.url.searchParams.append(t,`sr.${e}`),this}rangeGte(t,e){return this.url.searchParams.append(t,`nxl.${e}`),this}rangeLt(t,e){return this.url.searchParams.append(t,`sl.${e}`),this}rangeLte(t,e){return this.url.searchParams.append(t,`nxr.${e}`),this}rangeAdjacent(t,e){return this.url.searchParams.append(t,`adj.${e}`),this}overlaps(t,e){return typeof e=="string"?this.url.searchParams.append(t,`ov.${e}`):this.url.searchParams.append(t,`ov.{${e.join(",")}}`),this}textSearch(t,e,{config:s,type:i}={}){let r="";i==="plain"?r="pl":i==="phrase"?r="ph":i==="websearch"&&(r="w");const n=s===void 0?"":`(${s})`;return this.url.searchParams.append(t,`${r}fts${n}.${e}`),this}match(t){return Object.entries(t).filter(([e,s])=>s!==void 0).forEach(([e,s])=>{this.url.searchParams.append(e,`eq.${s}`)}),this}not(t,e,s){return this.url.searchParams.append(t,`not.${e}.${s}`),this}or(t,{foreignTable:e,referencedTable:s=e}={}){const i=s?`${s}.or`:"or";return this.url.searchParams.append(i,`(${t})`),this}filter(t,e,s){return this.url.searchParams.append(t,`${e}.${s}`),this}},pl=class{constructor(t,{headers:e={},schema:s,fetch:i,urlLengthLimit:r=8e3,retry:n}){this.url=t,this.headers=new Headers(e),this.schema=s,this.fetch=i,this.urlLengthLimit=r,this.retry=n}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(t,e){const{head:s=!1,count:i}=e??{},r=s?"HEAD":"GET";let n=!1;const a=(t??"*").split("").map(c=>/\s/.test(c)&&!n?"":(c==='"'&&(n=!n),c)).join(""),{url:o,headers:l}=this.cloneRequestState();return o.searchParams.set("select",a),i&&l.append("Prefer",`count=${i}`),new Ft({method:r,url:o,headers:l,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(t,{count:e,defaultToNull:s=!0}={}){var i;const r="POST",{url:n,headers:a}=this.cloneRequestState();if(e&&a.append("Prefer",`count=${e}`),s||a.append("Prefer","missing=default"),Array.isArray(t)){const o=t.reduce((l,c)=>l.concat(Object.keys(c)),[]);if(o.length>0){const l=[...new Set(o)].map(c=>`"${c}"`);n.searchParams.set("columns",l.join(","))}}return new Ft({method:r,url:n,headers:a,schema:this.schema,body:t,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(t,{onConflict:e,ignoreDuplicates:s=!1,count:i,defaultToNull:r=!0}={}){var n;const a="POST",{url:o,headers:l}=this.cloneRequestState();if(l.append("Prefer",`resolution=${s?"ignore":"merge"}-duplicates`),e!==void 0&&o.searchParams.set("on_conflict",e),i&&l.append("Prefer",`count=${i}`),r||l.append("Prefer","missing=default"),Array.isArray(t)){const c=t.reduce((u,h)=>u.concat(Object.keys(h)),[]);if(c.length>0){const u=[...new Set(c)].map(h=>`"${h}"`);o.searchParams.set("columns",u.join(","))}}return new Ft({method:a,url:o,headers:l,schema:this.schema,body:t,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(t,{count:e}={}){var s;const i="PATCH",{url:r,headers:n}=this.cloneRequestState();return e&&n.append("Prefer",`count=${e}`),new Ft({method:i,url:r,headers:n,schema:this.schema,body:t,fetch:(s=this.fetch)!==null&&s!==void 0?s:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:t}={}){var e;const s="DELETE",{url:i,headers:r}=this.cloneRequestState();return t&&r.append("Prefer",`count=${t}`),new Ft({method:s,url:i,headers:r,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}},fl=class ba{constructor(e,{headers:s={},schema:i,fetch:r,timeout:n,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(s),this.schemaName=i,this.urlLengthLimit=a;const l=r??globalThis.fetch;n!==void 0&&n>0?this.fetch=(c,u)=>{const h=new AbortController,f=setTimeout(()=>h.abort(),n),p=u==null?void 0:u.signal;if(p){if(p.aborted)return clearTimeout(f),l(c,u);const g=()=>{clearTimeout(f),h.abort()};return p.addEventListener("abort",g,{once:!0}),l(c,zt(zt({},u),{},{signal:h.signal})).finally(()=>{clearTimeout(f),p.removeEventListener("abort",g)})}return l(c,zt(zt({},u),{},{signal:h.signal})).finally(()=>clearTimeout(f))}:this.fetch=l,this.retry=o}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new pl(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new ba(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,s={},{head:i=!1,get:r=!1,count:n}={}){var a;let o;const l=new URL(`${this.url}/rpc/${e}`);let c;const u=p=>p!==null&&typeof p=="object"&&(!Array.isArray(p)||p.some(u)),h=i&&Object.values(s).some(u);h?(o="POST",c=s):i||r?(o=i?"HEAD":"GET",Object.entries(s).filter(([p,g])=>g!==void 0).map(([p,g])=>[p,Array.isArray(g)?`{${g.join(",")}}`:`${g}`]).forEach(([p,g])=>{l.searchParams.append(p,g)})):(o="POST",c=s);const f=new Headers(this.headers);return h?f.set("Prefer",n?`count=${n},return=minimal`:"return=minimal"):n&&f.set("Prefer",`count=${n}`),new Ft({method:o,url:l,headers:f,schema:this.schemaName,body:c,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class gl{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const s=globalThis;if(typeof globalThis<"u"&&typeof s.WebSocket<"u")return{type:"native",wsConstructor:s.WebSocket};const i=typeof global<"u"?global:void 0;if(i&&typeof i.WebSocket<"u")return{type:"native",wsConstructor:i.WebSocket};if(typeof globalThis<"u"&&typeof s.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&s.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const r=globalThis.process;if(r){const n=r.versions;if(n&&n.node)return{type:"unsupported",error:"Node.js detected but native WebSocket not found.",workaround:"Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option."}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let s=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(s+=`

Suggested solution: ${e.workaround}`),new Error(s)}static isWebSocketSupported(){try{return this.detectEnvironment().type==="native"}catch{return!1}}}const ml="2.112.3",yl=`realtime-js/${ml}`,vl="1.0.0",wa="2.0.0",bl=wa,wl=1e4,xl=100,at={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},xa={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},Xi={connecting:"connecting",closing:"closing",closed:"closed"};class _l{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,s){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return s(this._binaryEncodeUserBroadcastPush(e));let i=[e.join_ref,e.ref,e.topic,e.event,e.payload];return s(JSON.stringify(i))}_binaryEncodeUserBroadcastPush(e){var s;return this._isArrayBuffer((s=e.payload)===null||s===void 0?void 0:s.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var s,i;const r=(i=(s=e.payload)===null||s===void 0?void 0:s.payload)!==null&&i!==void 0?i:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,r)}_encodeJsonUserBroadcastPush(e){var s,i;const r=(i=(s=e.payload)===null||s===void 0?void 0:s.payload)!==null&&i!==void 0?i:{},a=new TextEncoder().encode(JSON.stringify(r)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,a)}_encodeUserBroadcastPush(e,s,i){var r,n;const a=new TextEncoder,o=a.encode(e.topic),l=a.encode((r=e.ref)!==null&&r!==void 0?r:""),c=a.encode((n=e.join_ref)!==null&&n!==void 0?n:""),u=a.encode(e.payload.event),h=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},f=a.encode(Object.keys(h).length===0?"":JSON.stringify(h));if(c.length>255)throw new Error(`joinRef length ${c.length} exceeds maximum of 255`);if(l.length>255)throw new Error(`ref length ${l.length} exceeds maximum of 255`);if(o.length>255)throw new Error(`topic length ${o.length} exceeds maximum of 255`);if(u.length>255)throw new Error(`userEvent length ${u.length} exceeds maximum of 255`);if(f.length>255)throw new Error(`metadata length ${f.length} exceeds maximum of 255`);const p=this.USER_BROADCAST_PUSH_META_LENGTH+c.length+l.length+o.length+u.length+f.length,g=new ArrayBuffer(this.HEADER_LENGTH+p),m=new DataView(g),w=new Uint8Array(g);let x=0;m.setUint8(x++,this.KINDS.userBroadcastPush),m.setUint8(x++,c.length),m.setUint8(x++,l.length),m.setUint8(x++,o.length),m.setUint8(x++,u.length),m.setUint8(x++,f.length),m.setUint8(x++,s),w.set(c,x),x+=c.length,w.set(l,x),x+=l.length,w.set(o,x),x+=o.length,w.set(u,x),x+=u.length,w.set(f,x),x+=f.length;var _=new Uint8Array(g.byteLength+i.byteLength);return _.set(new Uint8Array(g),0),_.set(new Uint8Array(i),g.byteLength),_.buffer}decode(e,s){if(this._isArrayBuffer(e)){let i=this._binaryDecode(e);return s(i)}if(typeof e=="string"){const i=JSON.parse(e),[r,n,a,o,l]=i;return s({join_ref:r,ref:n,topic:a,event:o,payload:l})}return s({})}_binaryDecode(e){const s=new DataView(e),i=s.getUint8(0),r=new TextDecoder;switch(i){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,s,r)}}_decodeUserBroadcast(e,s,i){const r=s.getUint8(1),n=s.getUint8(2),a=s.getUint8(3),o=s.getUint8(4);let l=this.HEADER_LENGTH+4;const c=i.decode(e.slice(l,l+r));l=l+r;const u=i.decode(e.slice(l,l+n));l=l+n;const h=i.decode(e.slice(l,l+a));l=l+a;const f=e.slice(l,e.byteLength),p=o===this.JSON_ENCODING?JSON.parse(i.decode(f)):f,g={type:this.BROADCAST_EVENT,event:u,payload:p};return a>0&&(g.meta=JSON.parse(h)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:g}}_isArrayBuffer(e){var s;return e instanceof ArrayBuffer||((s=e==null?void 0:e.constructor)===null||s===void 0?void 0:s.name)==="ArrayBuffer"}_pick(e,s){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([i])=>s.includes(i)))}}var L;(function(t){t.abstime="abstime",t.bool="bool",t.date="date",t.daterange="daterange",t.float4="float4",t.float8="float8",t.int2="int2",t.int4="int4",t.int4range="int4range",t.int8="int8",t.int8range="int8range",t.json="json",t.jsonb="jsonb",t.money="money",t.numeric="numeric",t.oid="oid",t.reltime="reltime",t.text="text",t.time="time",t.timestamp="timestamp",t.timestamptz="timestamptz",t.timetz="timetz",t.tsrange="tsrange",t.tstzrange="tstzrange"})(L||(L={}));const yn=(t,e,s={})=>{var i;const r=(i=s.skipTypes)!==null&&i!==void 0?i:[];return e?Object.keys(e).reduce((n,a)=>(n[a]=kl(a,t,e,r),n),{}):{}},kl=(t,e,s,i)=>{const r=e.find(o=>o.name===t),n=r==null?void 0:r.type,a=s[t];return n&&!i.includes(n)?_a(n,a):Qi(a)},_a=(t,e)=>{if(t.charAt(0)==="_"){const s=t.slice(1,t.length);return Al(e,s)}switch(t){case L.bool:return Sl(e);case L.float4:case L.float8:case L.int2:case L.int4:case L.int8:case L.numeric:case L.oid:return $l(e);case L.json:case L.jsonb:return El(e);case L.timestamp:return Tl(e);case L.abstime:case L.date:case L.daterange:case L.int4range:case L.int8range:case L.money:case L.reltime:case L.text:case L.time:case L.timestamptz:case L.timetz:case L.tsrange:case L.tstzrange:return Qi(e);default:return Qi(e)}},Qi=t=>t,Sl=t=>{switch(t){case"t":return!0;case"f":return!1;default:return t}},$l=t=>{if(typeof t=="string"){const e=parseFloat(t);if(!Number.isNaN(e))return e}return t},El=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch{return t}return t},Al=(t,e)=>{if(typeof t!="string")return t;const s=t.length-1,i=t[s];if(t[0]==="{"&&i==="}"){let n;const a=t.slice(1,s);try{n=JSON.parse("["+a+"]")}catch{n=a?a.split(","):[]}return n.map(o=>_a(e,o))}return t},Tl=t=>typeof t=="string"?t.replace(" ","T"):t,ka=t=>{const e=new URL(t);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var Ht=t=>typeof t=="function"?t:function(){return t},Ol=typeof self<"u"?self:null,Bt=typeof window<"u"?window:null,Re=Ol||Bt||globalThis,Il="2.0.0",Rl=1e4,Cl=1e3,Pl=100,Ce={connecting:0,open:1,closing:2,closed:3},re={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},ze={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},Zi={longpoll:"longpoll",websocket:"websocket"},Dl={complete:4},er="base64url.bearer.phx.",Fs=class{constructor(t,e,s,i){this.channel=t,this.event=e,this.payload=s||function(){return{}},this.receivedResp=null,this.timeout=i,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(t){this.timeout=t,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(t,e){return this.hasReceived(t)&&e(this.receivedResp.response),this.recHooks.push({status:t,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:t,response:e,_ref:s}){this.recHooks.filter(i=>i.status===t).forEach(i=>i.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,t=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=t,this.matchReceive(t)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}trigger(t,e){this.channel.trigger(this.refEvent,{status:t,response:e})}},Sa=class{constructor(t,e){this.callback=t,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},Ml=class{constructor(t,e,s){this.state=re.closed,this.topic=t,this.params=Ht(e||{}),this.socket=s,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Fs(this,ze.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Sa(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=re.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(i=>i.send()),this.pushBuffer=[]}),this.joinPush.receive("error",i=>{this.state=re.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,i),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=re.closed,this.socket.remove(this)}),this.onError(i=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,i),this.isJoining()&&this.joinPush.reset(),this.state=re.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new Fs(this,ze.leave,Ht({}),this.timeout).send(),this.state=re.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(ze.reply,(i,r)=>{this.trigger(this.replyEventName(r),i)})}join(t=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=t,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=re.closed,this.bindings=[]}onClose(t){this.on(ze.close,t)}onError(t){return this.on(ze.error,e=>t(e))}on(t,e){let s=this.bindingRef++;return this.bindings.push({event:t,ref:s,callback:e}),s}off(t,e){this.bindings=this.bindings.filter(s=>!(s.event===t&&(typeof e>"u"||e===s.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(t,e,s=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${t}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let i=new Fs(this,t,function(){return e},s);return this.canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}leave(t=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=re.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(ze.close,"leave")},s=new Fs(this,ze.leave,Ht({}),t);return s.receive("ok",()=>e()).receive("timeout",()=>e()),s.send(),this.canPush()||s.trigger("ok",{}),s}onMessage(t,e,s){return e}filterBindings(t,e,s){return!0}isMember(t,e,s,i){return this.topic!==t?!1:i&&i!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:t,event:e,payload:s,joinRef:i}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(t=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=re.joining,this.joinPush.resend(t))}trigger(t,e,s,i){let r=this.onMessage(t,e,s,i);if(e&&!r)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let n=this.bindings.filter(a=>a.event===t&&this.filterBindings(a,e,s));for(let a=0;a<n.length;a++)n[a].callback(r,s,i||this.joinRef())}replyEventName(t){return`chan_reply_${t}`}isClosed(){return this.state===re.closed}isErrored(){return this.state===re.errored}isJoined(){return this.state===re.joined}isJoining(){return this.state===re.joining}isLeaving(){return this.state===re.leaving}},ti=class{static request(t,e,s,i,r,n,a){if(Re.XDomainRequest){let o=new Re.XDomainRequest;return this.xdomainRequest(o,t,e,i,r,n,a)}else if(Re.XMLHttpRequest){let o=new Re.XMLHttpRequest;return this.xhrRequest(o,t,e,s,i,r,n,a)}else{if(Re.fetch&&Re.AbortController)return this.fetchRequest(t,e,s,i,r,n,a);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(t,e,s,i,r,n,a){let o={method:t,headers:s,body:i},l=null;return r&&(l=new AbortController,setTimeout(()=>l.abort(),r),o.signal=l.signal),Re.fetch(e,o).then(c=>c.text()).then(c=>this.parseJSON(c)).then(c=>a&&a(c)).catch(c=>{c.name==="AbortError"&&n?n():a&&a(null)}),l}static xdomainRequest(t,e,s,i,r,n,a){return t.timeout=r,t.open(e,s),t.onload=()=>{let o=this.parseJSON(t.responseText);a&&a(o)},n&&(t.ontimeout=n),t.onprogress=()=>{},t.send(i),t}static xhrRequest(t,e,s,i,r,n,a,o){t.open(e,s,!0),t.timeout=n;for(let[l,c]of Object.entries(i))t.setRequestHeader(l,c);return t.onerror=()=>o&&o(null),t.onreadystatechange=()=>{if(t.readyState===Dl.complete&&o){let l=this.parseJSON(t.responseText);o(l)}},a&&(t.ontimeout=a),t.send(r),t}static parseJSON(t){if(!t||t==="")return null;try{return JSON.parse(t)}catch{return console&&console.log("failed to parse JSON response",t),null}}static serialize(t,e){let s=[];for(var i in t){if(!Object.prototype.hasOwnProperty.call(t,i))continue;let r=e?`${e}[${i}]`:i,n=t[i];typeof n=="object"?s.push(this.serialize(n,r)):s.push(encodeURIComponent(r)+"="+encodeURIComponent(n))}return s.join("&")}static appendParams(t,e){if(Object.keys(e).length===0)return t;let s=t.match(/\?/)?"&":"?";return`${t}${s}${this.serialize(e)}`}},jl=t=>{let e="",s=new Uint8Array(t),i=s.byteLength;for(let r=0;r<i;r++)e+=String.fromCharCode(s[r]);return btoa(e)},Dt=class{constructor(t,e){e&&e.length===2&&e[1].startsWith(er)&&(this.authToken=atob(e[1].slice(er.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(t),this.readyState=Ce.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(t){return t.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+Zi.websocket),"$1/"+Zi.longpoll)}endpointURL(){return ti.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(t,e,s){this.close(t,e,s),this.readyState=Ce.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===Ce.open||this.readyState===Ce.connecting}poll(){const t={Accept:"application/json"};this.authToken&&(t["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",t,null,()=>this.ontimeout(),e=>{if(e){var{status:s,token:i,messages:r}=e;if(s===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=i}else s=0;switch(s){case 200:r.forEach(n=>{setTimeout(()=>this.onmessage({data:n}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=Ce.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${s}`)}})}send(t){typeof t!="string"&&(t=jl(t)),this.currentBatch?this.currentBatch.push(t):this.awaitingBatchAck?this.batchBuffer.push(t):(this.currentBatch=[t],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(t,e=0){this.awaitingBatchAck=!0;const s=e+Pl,i=t.slice(e,s);this.ajax("POST",{"Content-Type":"application/x-ndjson"},i.join(`
`),()=>this.onerror("timeout"),r=>{!r||r.status!==200?(this.awaitingBatchAck=!1,this.onerror(r&&r.status),this.closeAndRetry(1011,"internal server error",!1)):s<t.length?this.batchSend(t,s):this.batchBuffer.length>0?(this.batchSend(this.batchBuffer),this.batchBuffer=[]):this.awaitingBatchAck=!1})}close(t,e,s){for(let r of this.reqs)r.abort();this.readyState=Ce.closed;let i=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:t,reason:e,wasClean:s});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",i)):this.onclose(i)}ajax(t,e,s,i,r){let n,a=()=>{this.reqs.delete(n),i()};n=ti.request(t,this.endpointURL(),e,s,this.timeout,a,o=>{this.reqs.delete(n),this.isActive()&&r(o)}),this.reqs.add(n)}},Nl=class ns{constructor(e,s={}){let i=s.events||{state:"presence_state",diff:"presence_diff"};this.state=Object.create(null),this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(i.state,r=>{let{onJoin:n,onLeave:a,onSync:o}=this.caller;this.joinRef=this.channel.joinRef(),this.state=ns.syncState(this.state,r,n,a),this.pendingDiffs.forEach(l=>{this.state=ns.syncDiff(this.state,l,n,a)}),this.pendingDiffs=[],o()}),this.channel.on(i.diff,r=>{let{onJoin:n,onLeave:a,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(r):(this.state=ns.syncDiff(this.state,r,n,a),o())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return ns.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,s,i,r){let n=this.toNullProtoObj(this.clone(e));s=this.toNullProtoObj(s);let a=Object.create(null),o=Object.create(null);return this.map(n,(l,c)=>{s[l]||(o[l]=c)}),this.map(s,(l,c)=>{let u=n[l];if(u){let h=c.metas.map(m=>m.phx_ref),f=u.metas.map(m=>m.phx_ref),p=c.metas.filter(m=>f.indexOf(m.phx_ref)<0),g=u.metas.filter(m=>h.indexOf(m.phx_ref)<0);p.length>0&&(a[l]=c,a[l].metas=p),g.length>0&&(o[l]=this.clone(u),o[l].metas=g)}else a[l]=c}),this.syncDiff(n,{joins:a,leaves:o},i,r)}static syncDiff(e,s,i,r){e=this.toNullProtoObj(e);let{joins:n,leaves:a}=this.clone(s);return i||(i=function(){}),r||(r=function(){}),this.map(n,(o,l)=>{let c=e[o];if(e[o]=this.clone(l),c){let u=e[o].metas.map(f=>f.phx_ref),h=c.metas.filter(f=>u.indexOf(f.phx_ref)<0);e[o].metas.unshift(...h)}i(o,c,l)}),this.map(a,(o,l)=>{let c=e[o];if(!c)return;let u=l.metas.map(h=>h.phx_ref);c.metas=c.metas.filter(h=>u.indexOf(h.phx_ref)<0),r(o,c,l),c.metas.length===0&&delete e[o]}),e}static list(e,s){return s||(s=function(i,r){return r}),this.map(e,(i,r)=>s(i,r))}static map(e,s){return Object.getOwnPropertyNames(e).map(i=>s(i,e[i]))}static toNullProtoObj(e){if(Object.getPrototypeOf(e)===null)return e;let s=Object.create(null);return Object.getOwnPropertyNames(e).forEach(i=>{s[i]=e[i]}),s}static clone(e){return JSON.parse(JSON.stringify(e))}},Bs={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(t,e){if(t.payload.constructor===ArrayBuffer)return e(this.binaryEncode(t));{let s=[t.join_ref,t.ref,t.topic,t.event,t.payload];return e(JSON.stringify(s))}},decode(t,e){if(t.constructor===ArrayBuffer)return e(this.binaryDecode(t));{let[s,i,r,n,a]=JSON.parse(t);return e({join_ref:s,ref:i,topic:r,event:n,payload:a})}},binaryEncode(t){let{join_ref:e,ref:s,event:i,topic:r,payload:n}=t,a=new TextEncoder,o=a.encode(e),l=a.encode(s),c=a.encode(r),u=a.encode(i);this.assertFieldSize(o.byteLength,"join_ref"),this.assertFieldSize(l.byteLength,"ref"),this.assertFieldSize(c.byteLength,"topic"),this.assertFieldSize(u.byteLength,"event");let h=this.META_LENGTH+o.byteLength+l.byteLength+c.byteLength+u.byteLength,f=new ArrayBuffer(this.HEADER_LENGTH+h),p=new Uint8Array(f),g=new DataView(f),m=0;g.setUint8(m++,this.KINDS.push),g.setUint8(m++,o.byteLength),g.setUint8(m++,l.byteLength),g.setUint8(m++,c.byteLength),g.setUint8(m++,u.byteLength),p.set(o,m),m+=o.byteLength,p.set(l,m),m+=l.byteLength,p.set(c,m),m+=c.byteLength,p.set(u,m),m+=u.byteLength;var w=new Uint8Array(f.byteLength+n.byteLength);return w.set(p,0),w.set(new Uint8Array(n),f.byteLength),w.buffer},assertFieldSize(t,e){if(t>255)throw new Error(`unable to convert ${e} to binary: must be less than or equal to 255 bytes, but is ${t} bytes`)},binaryDecode(t){let e=new DataView(t),s=e.getUint8(0),i=new TextDecoder;switch(s){case this.KINDS.push:return this.decodePush(t,e,i);case this.KINDS.reply:return this.decodeReply(t,e,i);case this.KINDS.broadcast:return this.decodeBroadcast(t,e,i)}},decodePush(t,e,s){let i=e.getUint8(1),r=e.getUint8(2),n=e.getUint8(3),a=this.HEADER_LENGTH+this.META_LENGTH-1,o=s.decode(t.slice(a,a+i));a=a+i;let l=s.decode(t.slice(a,a+r));a=a+r;let c=s.decode(t.slice(a,a+n));a=a+n;let u=t.slice(a,t.byteLength);return{join_ref:o,ref:null,topic:l,event:c,payload:u}},decodeReply(t,e,s){let i=e.getUint8(1),r=e.getUint8(2),n=e.getUint8(3),a=e.getUint8(4),o=this.HEADER_LENGTH+this.META_LENGTH,l=s.decode(t.slice(o,o+i));o=o+i;let c=s.decode(t.slice(o,o+r));o=o+r;let u=s.decode(t.slice(o,o+n));o=o+n;let h=s.decode(t.slice(o,o+a));o=o+a;let f=t.slice(o,t.byteLength),p={status:h,response:f};return{join_ref:l,ref:c,topic:u,event:ze.reply,payload:p}},decodeBroadcast(t,e,s){let i=e.getUint8(1),r=e.getUint8(2),n=this.HEADER_LENGTH+2,a=s.decode(t.slice(n,n+i));n=n+i;let o=s.decode(t.slice(n,n+r));n=n+r;let l=t.slice(n,t.byteLength);return{join_ref:null,ref:null,topic:a,event:o,payload:l}}},Ll=class{constructor(t,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||Rl,this.transport=e.transport||Re.WebSocket||Dt,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let s=null;try{s=Re&&Re.sessionStorage}catch{}this.sessionStore=e.sessionStorage||s,this.establishedConnections=0,this.defaultEncoder=Bs.encode.bind(Bs),this.defaultDecoder=Bs.decode.bind(Bs),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==Dt?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let i=null;Bt&&Bt.addEventListener&&(Bt.addEventListener("pagehide",r=>{this.conn&&(this.disconnect(),i=this.connectClock)}),Bt.addEventListener("pageshow",r=>{i===this.connectClock&&(i=null,this.connect())}),Bt.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=r=>e.rejoinAfterMs?e.rejoinAfterMs(r):[1e3,2e3,5e3][r-1]||1e4,this.reconnectAfterMs=r=>e.reconnectAfterMs?e.reconnectAfterMs(r):[10,50,100,150,200,250,500,1e3,2e3][r-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(r,n,a)=>{console.log(`${r}: ${n}`,a)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=Ht(e.params||{}),this.endPoint=`${t}/${Zi.websocket}`,this.vsn=e.vsn||Il,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Sa(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken&&Ht(e.authToken)}getLongPollTransport(){return Dt}replaceTransport(t){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=t}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let t=ti.appendParams(ti.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return t.charAt(0)!=="/"?t:t.charAt(1)==="/"?`${this.protocol()}:${t}`:`${this.protocol()}://${location.host}${t}`}disconnect(t,e,s){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,t&&t()},e,s)}connect(t){t&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Ht(t)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==Dt?this.connectWithFallback(Dt,this.longPollFallbackMs):this.transportConnect())}log(t,e,s){this.logger&&this.logger(t,e,s)}hasLogger(){return this.logger!==null}onOpen(t){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,t]),e}onClose(t){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,t]),e}onError(t){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,t]),e}onMessage(t){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,t]),e}onHeartbeat(t){this.heartbeatCallback=t}ping(t){if(!this.isConnected())return!1;let e=this.makeRef(),s=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let i=this.onMessage(r=>{r.ref===e&&(this.off([i]),t(Date.now()-s))});return!0}transportName(t){switch(t){case Dt:return"LongPoll";default:return t.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let t;this.authToken&&(t=["phoenix",`${er}${btoa(this.authToken()).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),t),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(t){return this.sessionStore&&this.sessionStore.getItem(t)}storeSession(t,e){this.sessionStore&&this.sessionStore.setItem(t,e)}connectWithFallback(t,e=2500){clearTimeout(this.fallbackTimer);let s=!1,i=!0,r,n,a=this.transportName(t),o=l=>{this.log("transport",`falling back to ${a}...`,l),this.off([r,n]),i=!1,this.replaceTransport(t),this.transportConnect()};if(this.getSession(`phx:fallback:${a}`))return o("memorized");this.fallbackTimer=setTimeout(o,e),n=this.onError(l=>{this.log("transport","error",l),i&&!s&&(clearTimeout(this.fallbackTimer),o(l))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(s=!0,!i){let l=this.transportName(t);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${l}`,"true"),this.log("transport",`established ${l} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(o,e),this.ping(l=>{this.log("transport","connected to primary after",l),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(t){this.log("error","error in heartbeat callback",t)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Cl,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(t,e,s){if(!this.conn)return t&&t();const i=this.conn;this.waitForBufferDone(i,()=>{e?i.close(e,s||""):i.close(),this.waitForSocketClosed(i,()=>{this.conn===i&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),t&&t()})})}waitForBufferDone(t,e,s=1){if(s===5||!t.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(t,e,s+1)},150*s)}waitForSocketClosed(t,e,s=1){if(s===5||t.readyState===Ce.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(t,e,s+1)},150*s)}onConnClose(t){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",t),this.triggerChanError(t),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",t)}onConnError(t){this.hasLogger()&&this.log("transport","error",t);let e=this.transport,s=this.establishedConnections;this.triggerStateCallbacks("error",t,e,s),(e===this.transport||s>0)&&this.triggerChanError(t)}triggerChanError(t){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(ze.error,t)})}connectionState(){switch(this.conn&&this.conn.readyState){case Ce.connecting:return"connecting";case Ce.open:return"open";case Ce.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(t){this.off(t.stateChangeRefs),this.channels=this.channels.filter(e=>e!==t)}off(t){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([s])=>t.indexOf(s)===-1)}channel(t,e={}){let s=new Ml(t,e,this);return this.channels.push(s),s}push(t){if(this.hasLogger()){let{topic:e,event:s,payload:i,ref:r,join_ref:n}=t;this.log("push",`${e} ${s} (${n}, ${r})`,i)}this.isConnected()?this.encode(t,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(t,e=>this.conn.send(e)))}makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(t){this.log("error","error in heartbeat callback",t)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(t){this.log("error","error in heartbeat callback",t)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}onConnMessage(t){this.decode(t.data,e=>{let{topic:s,event:i,payload:r,ref:n,join_ref:a}=e;if(n&&n===this.pendingHeartbeatRef){const o=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(r.status==="ok"?"ok":"error",o)}catch(l){this.log("error","error in heartbeat callback",l)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${r.status||""} ${s} ${i} ${n&&"("+n+")"||""}`.trim(),r);for(let o=0;o<this.channels.length;o++){const l=this.channels[o];l.isMember(s,i,r,a)&&l.trigger(i,r,n,a)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(t,...e){try{this.stateChangeCallbacks[t].forEach(([s,i])=>{try{i(...e)}catch(r){this.log("error",`error in ${t} callback`,r)}})}catch(s){this.log("error",`error triggering ${t} callbacks`,s)}}leaveOpenTopic(t){let e=this.channels.find(s=>s.topic===t&&(s.isJoined()||s.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${t}"`),e.leave())}};class ds{constructor(e,s){const i=Fl(s);this.presence=new Nl(e.getChannel(),i),this.presence.onJoin((r,n,a)=>{const o=ds.onJoinPayload(r,n,a);e.getChannel().trigger("presence",o)}),this.presence.onLeave((r,n,a)=>{const o=ds.onLeavePayload(r,n,a);e.getChannel().trigger("presence",o)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return ds.transformState(this.presence.state)}static transformState(e){return e=Ul(e),Object.getOwnPropertyNames(e).reduce((s,i)=>{const r=e[i];return s[i]=Ys(r),s},{})}static onJoinPayload(e,s,i){const r=vn(s),n=Ys(i);return{event:"join",key:e,currentPresences:r,newPresences:n}}static onLeavePayload(e,s,i){const r=vn(s),n=Ys(i);return{event:"leave",key:e,currentPresences:r,leftPresences:n}}}function Ys(t){return t.metas.map(e=>{const s=Object.getOwnPropertyDescriptors(e),i=Object.defineProperties({},s);return i.presence_ref=i.phx_ref,delete i.phx_ref,delete i.phx_ref_prev,i})}function Ul(t){return JSON.parse(JSON.stringify(t))}function Fl(t){return(t==null?void 0:t.events)&&{events:t.events}}function vn(t){return t!=null&&t.metas?Ys(t):[]}var bn;(function(t){t.SYNC="sync",t.JOIN="join",t.LEAVE="leave"})(bn||(bn={}));class Bl{get state(){return this.presenceAdapter.state}constructor(e,s){this.channel=e,this.presenceAdapter=new ds(this.channel.channelAdapter,s)}}function zl(t){if(t instanceof Error)return t;if(typeof t=="string")return new Error(t);if(t&&typeof t=="object"){const e=t;if(typeof e.code=="number"){const s=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${s}`,{cause:t})}return new Error("channel error: transport failure",{cause:t})}return new Error("channel error: connection lost")}class Hl{constructor(e,s,i){const r=ql(i);this.channel=e.getSocket().channel(s,r),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,s){return this.channel.on(e,s)}off(e,s){this.channel.off(e,s)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,s,i){let r;try{r=this.channel.push(e,s,i)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>xl){const n=this.channel.pushBuffer.shift();n.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${n.event}`,n.payload())}return r}updateJoinPayload(e){const s=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},s),e)}canPush(){return this.socket.isConnected()&&this.state===at.joined}isJoined(){return this.state===at.joined}isJoining(){return this.state===at.joining}isClosed(){return this.state===at.closed}isLeaving(){return this.state===at.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function ql(t){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config)}}const Gl=/[,()"\\]/,Wl=t=>Gl.test(t)||t!==t.trim(),Kl=t=>`"${t.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`,wn=t=>{const e=t===null?"null":String(t);return Wl(e)?Kl(e):e},Vl=t=>t===null?"null":String(t),Jl=(t,e)=>{if(t==="in"){const s=Array.isArray(e)?e:[e];if(s.length===0)throw new Error("Realtime `in` filter requires at least one value.");return`in.(${Array.from(new Set(s)).map(r=>wn(r)).join(",")})`}return t==="is"?`is.${Vl(e)}`:`${t}.${wn(e)}`};class Yl{constructor(){this.filters=[]}add(e,s,i,r=!1){const n=r?"not.":"";return this.filters.push(`${e}=${n}${Jl(s,i)}`),this}eq(e,s){return this.add(e,"eq",s)}neq(e,s){return this.add(e,"neq",s)}gt(e,s){return this.add(e,"gt",s)}gte(e,s){return this.add(e,"gte",s)}lt(e,s){return this.add(e,"lt",s)}lte(e,s){return this.add(e,"lte",s)}in(e,s){return this.add(e,"in",s)}like(e,s){return this.add(e,"like",s)}ilike(e,s){return this.add(e,"ilike",s)}match(e,s){return this.add(e,"match",s)}imatch(e,s){return this.add(e,"imatch",s)}is(e,s){return this.add(e,"is",s)}isDistinct(e,s){return this.add(e,"isdistinct",s)}not(e,s,i){return this.add(e,s,i,!0)}build(){return this.filters.join(",")}toString(){return this.build()}}var xn;(function(t){t.ALL="*",t.INSERT="INSERT",t.UPDATE="UPDATE",t.DELETE="DELETE"})(xn||(xn={}));var vt;(function(t){t.BROADCAST="broadcast",t.PRESENCE="presence",t.POSTGRES_CHANGES="postgres_changes",t.SYSTEM="system"})(vt||(vt={}));var He;(function(t){t.SUBSCRIBED="SUBSCRIBED",t.TIMED_OUT="TIMED_OUT",t.CLOSED="CLOSED",t.CHANNEL_ERROR="CHANNEL_ERROR"})(He||(He={}));class qe{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,s={config:{}},i){var r,n;if(this.topic=e,this.params=s,this.socket=i,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},s.config),this.channelAdapter=new Hl(this.socket.socketAdapter,e,this.params),this.presence=new Bl(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=ka(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((n=(r=this.params.config)===null||r===void 0?void 0:r.broadcast)===null||n===void 0)&&n.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,s=this.timeout){var i,r,n;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:a,presence:o,private:l}}=this.params,c=(r=(i=this.bindings.postgres_changes)===null||i===void 0?void 0:i.map(p=>p.filter))!==null&&r!==void 0?r:[],u=!!this.bindings[vt.PRESENCE]&&this.bindings[vt.PRESENCE].length>0||((n=this.params.config.presence)===null||n===void 0?void 0:n.enabled)===!0,h={},f={broadcast:a,presence:Object.assign(Object.assign({},o),{enabled:u}),postgres_changes:c,private:l};this.socket.accessTokenValue&&(h.access_token=this.socket.accessTokenValue),this._onError(p=>{e==null||e(He.CHANNEL_ERROR,zl(p))}),this._onClose(()=>e==null?void 0:e(He.CLOSED)),this.updateJoinPayload(Object.assign({config:f},h)),this._updateFilterMessage(),this.channelAdapter.subscribe(s).receive("ok",async({postgres_changes:p})=>{if(this.socket._isManualToken()||this.socket.setAuth(),p===void 0){e==null||e(He.SUBSCRIBED);return}this._updatePostgresBindings(p,e)}).receive("error",p=>{this.state=at.errored;const g=Object.values(p).join(", ")||"error";e==null||e(He.CHANNEL_ERROR,new Error(g,{cause:p}))}).receive("timeout",()=>{e==null||e(He.TIMED_OUT)})}return this}_updatePostgresBindings(e,s){var i;const r=this.bindings.postgres_changes,n=(i=r==null?void 0:r.length)!==null&&i!==void 0?i:0,a=[];for(let o=0;o<n;o++){const l=r[o],{filter:{event:c,schema:u,table:h,filter:f}}=l,p=e&&e[o];if(p&&p.event===c&&qe.isFilterValueEqual(p.schema,u)&&qe.isFilterValueEqual(p.table,h)&&qe.isFilterValueEqual(p.filter,f))a.push(Object.assign(Object.assign({},l),{id:p.id}));else{this.unsubscribe(),this.state=at.errored,s==null||s(He.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=a,this.state!=at.errored&&s&&s(He.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,s={}){return await this.send({type:"presence",event:"track",payload:e},s)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,s,i){const r=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),n=e===vt.PRESENCE||e===vt.POSTGRES_CHANGES;if(r&&n)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,s,i)}async httpSend(e,s,i={}){var r;if(s==null)return Promise.reject(new Error("Payload is required for httpSend()"));const n=s instanceof ArrayBuffer||ArrayBuffer.isView(s),a={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":n?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(a.Authorization=`Bearer ${this.socket.accessTokenValue}`);const o=new URL(this.broadcastEndpointURL);o.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&o.searchParams.set("private","true");const l={method:"POST",headers:a,body:n?s:JSON.stringify(s)},c=await this._fetchWithTimeout(o.toString(),l,(r=i.timeout)!==null&&r!==void 0?r:this.timeout);if(c.status===202)return{success:!0};if(c.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let u=c.statusText;try{const h=await c.json();u=h.error||h.message||u}catch{}return Promise.reject(new Error(u))}async send(e,s={}){var i,r;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:n,payload:a}=e,o={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(o.Authorization=`Bearer ${this.socket.accessTokenValue}`);const l={method:"POST",headers:o,body:JSON.stringify({messages:[{topic:this.subTopic,event:n,payload:a,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(i=s.timeout)!==null&&i!==void 0?i:this.timeout);return await((r=c.body)===null||r===void 0?void 0:r.cancel()),c.ok?"ok":"error"}catch(c){return c instanceof Error&&c.name==="AbortError"?"timed out":"error"}}else return new Promise(n=>{var a,o,l;const c=this.channelAdapter.push(e.type,e,s.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(o=(a=this.params)===null||a===void 0?void 0:a.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&n("ok"),c.receive("ok",()=>n("ok")),c.receive("error",()=>n("error")),c.receive("timeout",()=>n("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(s=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>s("ok")).receive("timeout",()=>s("timed out")).receive("error",()=>s("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,s,i){const r=new AbortController,n=setTimeout(()=>r.abort(),i),a=await this.socket.fetch(e,Object.assign(Object.assign({},s),{signal:r.signal}));return clearTimeout(n),a}_on(e,s,i){var r;const n=e.toLocaleLowerCase(),a=s==null?void 0:s.filter;if((a instanceof Yl||typeof a=="object"&&a!==null&&typeof a.build=="function")&&(s=Object.assign(Object.assign({},s),{filter:a.build()})),n===vt.POSTGRES_CHANGES&&((r=this.bindings[n])===null||r===void 0?void 0:r.find(u=>qe.isSamePostgresFilter(u.filter,s))))return this.socket.log("error",`duplicate \`postgres_changes\` binding for ${this.topic} ignored`,s),this;const o=this.channelAdapter.on(e,i),l={type:n,filter:s,callback:i,ref:o};return this.bindings[n]?this.bindings[n].push(l):this.bindings[n]=[l],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,s,i)=>{var r,n,a,o,l,c,u;const h=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(h,i))return!1;const f=(r=this.bindings[h])===null||r===void 0?void 0:r.find(p=>p.ref===e.ref);if(!f)return!0;if(["broadcast","presence","postgres_changes"].includes(h))if("id"in f){const p=f.id,g=(n=f.filter)===null||n===void 0?void 0:n.event;return p&&((a=s.ids)===null||a===void 0?void 0:a.includes(p))&&(g==="*"||(g==null?void 0:g.toLocaleLowerCase())===((o=s.data)===null||o===void 0?void 0:o.type.toLocaleLowerCase()))}else{const p=(c=(l=f==null?void 0:f.filter)===null||l===void 0?void 0:l.event)===null||c===void 0?void 0:c.toLocaleLowerCase();return p==="*"||p===((u=s==null?void 0:s.event)===null||u===void 0?void 0:u.toLocaleLowerCase())}else return f.type.toLocaleLowerCase()===h})}_notThisChannelEvent(e,s){const{close:i,error:r,leave:n,join:a}=xa;return s&&[i,r,n,a].includes(e)&&s!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,s,i)=>{if(typeof s=="object"&&"ids"in s){const r=s.data,{schema:n,table:a,commit_timestamp:o,type:l,errors:c}=r;return Object.assign(Object.assign({},{schema:n,table:a,commit_timestamp:o,eventType:l,new:{},old:{},errors:c}),this._getPayloadRecords(r))}return s})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const s in e.bindings)for(const i of e.bindings[s])this._on(i.type,i.filter,i.callback)}static isFilterValueEqual(e,s){return(e??void 0)===(s??void 0)}static isSamePostgresFilter(e,s){var i,r,n,a;const o=(r=(i=e==null?void 0:e.select)===null||i===void 0?void 0:i.join())!==null&&r!==void 0?r:void 0,l=(a=(n=s==null?void 0:s.select)===null||n===void 0?void 0:n.join())!==null&&a!==void 0?a:void 0;return(e==null?void 0:e.event)===(s==null?void 0:s.event)&&qe.isFilterValueEqual(e==null?void 0:e.schema,s==null?void 0:s.schema)&&qe.isFilterValueEqual(e==null?void 0:e.table,s==null?void 0:s.table)&&qe.isFilterValueEqual(e==null?void 0:e.filter,s==null?void 0:s.filter)&&o===l}_getPayloadRecords(e){const s={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(s.new=yn(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(s.old=yn(e.columns,e.old_record)),s}}class Xl{constructor(e,s){this.socket=new Ll(e,s)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,s,i,r=1e4){return new Promise(n=>{setTimeout(()=>n("timeout"),r),this.socket.disconnect(()=>{e(),n("ok")},s,i)})}push(e){this.socket.push(e)}log(e,s,i){this.socket.log(e,s,i)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Xi.connecting}isDisconnecting(){return this.socket.connectionState()==Xi.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const _n={HEARTBEAT_INTERVAL:25e3},Ql=[1e3,2e3,5e3,1e4],Zl=1e4;function ec(){const t=new Map;return{get length(){return t.size},clear(){t.clear()},getItem(e){return t.has(e)?t.get(e):null},key(e){var s;return(s=Array.from(t.keys())[e])!==null&&s!==void 0?s:null},removeItem(e){t.delete(e)},setItem(e,s){t.set(e,String(s))}}}function tc(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return ec()}const sc=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class ic{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,s){var i;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new _l,this._manuallySetToken=!1,this._authPromise=null,this._authGeneration=0,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=n=>n?(...a)=>n(...a):(...a)=>fetch(...a),!(!((i=s==null?void 0:s.params)===null||i===void 0)&&i.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=s.params.apikey;const r=this._initializeOptions(s);this.socketAdapter=new Xl(e,r),this.httpEndpoint=ka(e),this.fetch=this._resolveFetch(s==null?void 0:s.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const s=e.message;throw new Error(`WebSocket not available: ${s}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,s){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,s)}getChannels(){return this.channels}async removeChannel(e){const s=await e.unsubscribe();return s==="ok"&&e.teardown(),s}async removeAllChannels(){const e=this.channels.map(async i=>{const r=await i.unsubscribe();return i.teardown(),r}),s=await Promise.all(e);return await this.disconnect(),s}log(e,s,i){this.socketAdapter.log(e,s,i)}connectionState(){return this.socketAdapter.connectionState()||Xi.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,s={config:{}}){const i=`realtime:${e}`,r=this.getChannels().find(n=>n.topic===i);if(r)return r;{const n=new qe(`realtime:${e}`,s,this);return this._cancelPendingDisconnect(),this.channels.push(n),n}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){const s=++this._authGeneration,i=this._performAuth(e,s);s===this._authGeneration&&(this._authPromise=i);try{await i}finally{this._authPromise===i&&(this._authPromise=null)}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(s=>s.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e,s){let i,r=!1;if(e)i=e,r=!0;else if(this.accessToken)try{i=await this.accessToken()}catch(n){this.log("error","Error fetching access token from callback",n),i=this.accessTokenValue}else i=this.accessTokenValue;s===this._authGeneration&&(this.accessToken?this._manuallySetToken=!1:r&&(this._manuallySetToken=!0),this.accessTokenValue!=i&&(this.accessTokenValue=i,this.channels.forEach(n=>{const a={access_token:i,version:yl};n.updateJoinPayload(a),n.joinedOnce&&n.channelAdapter.isJoined()&&n.channelAdapter.push(xa.access_token,{access_token:i})})))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(s=>{this.log("error",`Error setting auth in ${e}`,s)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(s=>{this.log("error","error waiting for auth on connect",s)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(s,i)=>{s!=="disconnected"&&(s=="sent"&&this._setAuthSafely(),e&&e(s,i))}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=s=>{this.log("worker","worker error",s.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=s=>{s.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let s;if(e)s=e;else{const i=new Blob([sc],{type:"application/javascript"});s=URL.createObjectURL(i)}return s}_initializeOptions(e){var s,i,r,n,a,o,l,c,u,h,f,p;this.worker=(s=e==null?void 0:e.worker)!==null&&s!==void 0?s:!1,this.accessToken=(i=e==null?void 0:e.accessToken)!==null&&i!==void 0?i:null;const g={};g.timeout=(r=e==null?void 0:e.timeout)!==null&&r!==void 0?r:wl,g.heartbeatIntervalMs=(n=e==null?void 0:e.heartbeatIntervalMs)!==null&&n!==void 0?n:_n.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(a=e==null?void 0:e.disconnectOnEmptyChannelsAfterMs)!==null&&a!==void 0?a:2*((o=e==null?void 0:e.heartbeatIntervalMs)!==null&&o!==void 0?o:_n.HEARTBEAT_INTERVAL),g.transport=(l=e==null?void 0:e.transport)!==null&&l!==void 0?l:gl.getWebSocketConstructor(),g.params=e==null?void 0:e.params,g.logger=e==null?void 0:e.logger,g.heartbeatCallback=this._wrapHeartbeatCallback(e==null?void 0:e.heartbeatCallback),g.sessionStorage=(c=e==null?void 0:e.sessionStorage)!==null&&c!==void 0?c:tc(),g.reconnectAfterMs=(u=e==null?void 0:e.reconnectAfterMs)!==null&&u!==void 0?u:(_=>Ql[_-1]||Zl);let m,w;const x=(h=e==null?void 0:e.vsn)!==null&&h!==void 0?h:bl;switch(x){case vl:m=(_,b)=>b(JSON.stringify(_)),w=(_,b)=>b(JSON.parse(_));break;case wa:m=this.serializer.encode.bind(this.serializer),w=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${g.vsn}`)}if(g.vsn=x,g.encode=(f=e==null?void 0:e.encode)!==null&&f!==void 0?f:m,g.decode=(p=e==null?void 0:e.decode)!==null&&p!==void 0?p:w,g.beforeReconnect=this._reconnectAuth.bind(this),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,g.params=Object.assign(Object.assign({},g.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl,g.autoSendHeartbeat=!this.worker}return g}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var gs=class extends Error{constructor(t,e){var s;super(t),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&((s=e.icebergType)==null?void 0:s.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function rc(t,e,s){const i=new URL(e,t);if(s)for(const[r,n]of Object.entries(s))n!==void 0&&i.searchParams.set(r,n);return i.toString()}async function nc(t){return!t||t.type==="none"?{}:t.type==="bearer"?{Authorization:`Bearer ${t.token}`}:t.type==="header"?{[t.name]:t.value}:t.type==="custom"?await t.getHeaders():{}}function ac(t){const e=t.fetchImpl??globalThis.fetch;return{async request({method:s,path:i,query:r,body:n,headers:a}){const o=rc(t.baseUrl,i,r),l=await nc(t.auth),c=await e(o,{method:s,headers:{...n?{"Content-Type":"application/json"}:{},...l,...a},body:n?JSON.stringify(n):void 0}),u=await c.text(),h=(c.headers.get("content-type")||"").includes("application/json"),f=h&&u?JSON.parse(u):u;if(!c.ok){const p=h?f:void 0,g=p==null?void 0:p.error;throw new gs((g==null?void 0:g.message)??`Request failed with status ${c.status}`,{status:c.status,icebergType:g==null?void 0:g.type,icebergCode:g==null?void 0:g.code,details:p})}return{status:c.status,headers:c.headers,data:f}}}}function zs(t){return t.join("")}var oc=class{constructor(t,e=""){this.client=t,this.prefix=e}async listNamespaces(t){const e=t?{parent:zs(t.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(i=>({namespace:i}))}async createNamespace(t,e){const s={namespace:t.namespace,properties:e==null?void 0:e.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:s})).data}async dropNamespace(t){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${zs(t.namespace)}`})}async loadNamespaceMetadata(t){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${zs(t.namespace)}`})).data.properties}}async namespaceExists(t){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${zs(t.namespace)}`}),!0}catch(e){if(e instanceof gs&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(t,e){try{return await this.createNamespace(t,e)}catch(s){if(s instanceof gs&&s.status===409)return;throw s}}};function Mt(t){return t.join("")}var lc=class{constructor(t,e="",s){this.client=t,this.prefix=e,this.accessDelegation=s}async listTables(t){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Mt(t.namespace)}/tables`})).data.identifiers}async createTable(t,e){const s={};return this.accessDelegation&&(s["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Mt(t.namespace)}/tables`,body:e,headers:s})).data.metadata}async updateTable(t,e){const s=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Mt(t.namespace)}/tables/${t.name}`,body:e});return{"metadata-location":s.data["metadata-location"],metadata:s.data.metadata}}async dropTable(t,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Mt(t.namespace)}/tables/${t.name}`,query:{purgeRequested:String((e==null?void 0:e.purge)??!1)}})}async loadTable(t){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Mt(t.namespace)}/tables/${t.name}`,headers:e})).data.metadata}async tableExists(t){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Mt(t.namespace)}/tables/${t.name}`,headers:e}),!0}catch(s){if(s instanceof gs&&s.status===404)return!1;throw s}}async createTableIfNotExists(t,e){try{return await this.createTable(t,e)}catch(s){if(s instanceof gs&&s.status===409)return await this.loadTable({namespace:t.namespace,name:e.name});throw s}}},cc=class{constructor(t){var i;let e="v1";t.catalogName&&(e+=`/${t.catalogName}`);const s=t.baseUrl.endsWith("/")?t.baseUrl:`${t.baseUrl}/`;this.client=ac({baseUrl:s,auth:t.auth,fetchImpl:t.fetch}),this.accessDelegation=(i=t.accessDelegation)==null?void 0:i.join(","),this.namespaceOps=new oc(this.client,e),this.tableOps=new lc(this.client,e,this.accessDelegation)}async listNamespaces(t){return this.namespaceOps.listNamespaces(t)}async createNamespace(t,e){return this.namespaceOps.createNamespace(t,e)}async dropNamespace(t){await this.namespaceOps.dropNamespace(t)}async loadNamespaceMetadata(t){return this.namespaceOps.loadNamespaceMetadata(t)}async listTables(t){return this.tableOps.listTables(t)}async createTable(t,e){return this.tableOps.createTable(t,e)}async updateTable(t,e){return this.tableOps.updateTable(t,e)}async dropTable(t,e){await this.tableOps.dropTable(t,e)}async loadTable(t){return this.tableOps.loadTable(t)}async namespaceExists(t){return this.namespaceOps.namespaceExists(t)}async tableExists(t){return this.tableOps.tableExists(t)}async createNamespaceIfNotExists(t,e){return this.namespaceOps.createNamespaceIfNotExists(t,e)}async createTableIfNotExists(t,e){return this.tableOps.createTableIfNotExists(t,e)}};function ms(t){"@babel/helpers - typeof";return ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ms(t)}function dc(t,e){if(ms(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var i=s.call(t,e);if(ms(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function uc(t){var e=dc(t,"string");return ms(e)=="symbol"?e:e+""}function hc(t,e,s){return(e=uc(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function kn(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),s.push.apply(s,i)}return s}function T(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?kn(Object(s),!0).forEach(function(i){hc(t,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):kn(Object(s)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))})}return t}var hi=class extends Error{constructor(t,e="storage",s,i){super(t),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=s,this.statusCode=i}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function pi(t){return typeof t=="object"&&t!==null&&"__isStorageError"in t}var tr=class extends hi{constructor(t,e,s,i="storage",r){super(t,i,e,s),this.name=i==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=s,this.code=r}toJSON(){return T(T({},super.toJSON()),{},{code:this.code})}},$a=class extends hi{constructor(t,e,s="storage"){super(t,s),this.name=s==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function si(t,e,s){const i=T({},t),r=e.toLowerCase();for(const n of Object.keys(i))n.toLowerCase()===r&&delete i[n];return i[r]=s,i}function pc(t){const e={};for(const[s,i]of Object.entries(t))e[s.toLowerCase()]=i;return e}const fc=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),gc=t=>{if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},sr=t=>{if(Array.isArray(t))return t.map(s=>sr(s));if(typeof t=="function"||t!==Object(t))return t;const e={};return Object.entries(t).forEach(([s,i])=>{const r=s.replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace(/[-_]/g,""));e[r]=sr(i)}),e},mc=t=>!t||typeof t!="string"||t.length===0||t.length>100||t.trim()!==t||t.includes("/")||t.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(t),Ea=t=>t.split("/").map(encodeURIComponent).join("/"),Sn=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const s=e.error;if(typeof s.message=="string")return s.message}}return JSON.stringify(t)},yc=async(t,e,s,i)=>{if(t!==null&&typeof t=="object"&&"json"in t&&typeof t.json=="function"){const r=t;let n=parseInt(String(r.status),10);Number.isFinite(n)||(n=500),r.json().then(a=>{const o=(a==null?void 0:a.statusCode)||(a==null?void 0:a.code)||n+"";e(new tr(Sn(a),n,o,i,a==null?void 0:a.code))}).catch(()=>{const a=n+"";e(new tr(r.statusText||`HTTP ${n} error`,n,a,i))})}else e(new $a(Sn(t),t,i))},vc=(t,e,s,i)=>{const r={method:t,headers:(e==null?void 0:e.headers)||{}};if(t==="GET"||t==="HEAD"||!i)return T(T({},r),s);if(gc(i)){var n;const a=(e==null?void 0:e.headers)||{};let o;for(const[l,c]of Object.entries(a))l.toLowerCase()==="content-type"&&(o=c);r.headers=si(a,"Content-Type",(n=o)!==null&&n!==void 0?n:"application/json"),r.body=JSON.stringify(i)}else r.body=i;return e!=null&&e.duplex&&(r.duplex=e.duplex),T(T({},r),s)};async function rs(t,e,s,i,r,n,a){return new Promise((o,l)=>{t(s,vc(e,i,r,n)).then(c=>{if(!c.ok)throw c;if(i!=null&&i.noResolveJson)return c;if(a==="vectors"){const u=c.headers.get("content-type");if(c.headers.get("content-length")==="0"||c.status===204)return{};if(!u||!u.includes("application/json"))return{}}return c.json()}).then(c=>o(c)).catch(c=>yc(c,l,i,a))})}function Aa(t="storage"){return{get:async(e,s,i,r)=>rs(e,"GET",s,i,r,void 0,t),post:async(e,s,i,r,n)=>rs(e,"POST",s,r,n,i,t),put:async(e,s,i,r,n)=>rs(e,"PUT",s,r,n,i,t),head:async(e,s,i,r)=>rs(e,"HEAD",s,T(T({},i),{},{noResolveJson:!0}),r,void 0,t),remove:async(e,s,i,r,n)=>rs(e,"DELETE",s,r,n,i,t)}}const bc=Aa("storage"),{get:ys,post:we,put:ir,head:wc,remove:vs}=bc,ce=Aa("vectors");var Jt=class{constructor(t,e={},s,i="storage"){this.shouldThrowOnError=!1,this.url=t,this.headers=pc(e),this.fetch=fc(s),this.namespace=i}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,e){return this.headers=si(this.headers,t,e),this}async handleOperation(t){var e=this;try{return{data:await t(),error:null}}catch(s){if(e.shouldThrowOnError)throw s;if(pi(s))return{data:null,error:s};throw s}}};let Ta;Ta=Symbol.toStringTag;var xc=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[Ta]="StreamDownloadBuilder",this.promise=null}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:(await t.downloadFn()).body,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(pi(e))return{data:null,error:e};throw e}}};let Oa;Oa=Symbol.toStringTag;var _c=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[Oa]="BlobDownloadBuilder",this.promise=null}asStream(){return new xc(this.downloadFn,this.shouldThrowOnError)}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:await(await t.downloadFn()).blob(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(pi(e))return{data:null,error:e};throw e}}};const Fi={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},$n={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var kc=class extends Jt{constructor(t,e={},s,i){super(t,e,i,"storage"),this.bucketId=s}async uploadOrUpdate(t,e,s,i){var r=this;return r.handleOperation(async()=>{let n;const a=T(T({},$n),i);let o=T(T({},r.headers),t==="POST"&&{"x-upsert":String(a.upsert)});const l=a.metadata;if(typeof Blob<"u"&&s instanceof Blob?(n=new FormData,n.append("cacheControl",a.cacheControl),l&&n.append("metadata",r.encodeMetadata(l)),n.append("",s)):typeof FormData<"u"&&s instanceof FormData?(n=s,n.has("cacheControl")||n.append("cacheControl",a.cacheControl),l&&!n.has("metadata")&&n.append("metadata",r.encodeMetadata(l))):(n=s,o["cache-control"]=`max-age=${a.cacheControl}`,o["content-type"]=a.contentType,l&&(o["x-metadata"]=r.toBase64(r.encodeMetadata(l))),(typeof ReadableStream<"u"&&n instanceof ReadableStream||n&&typeof n=="object"&&"pipe"in n&&typeof n.pipe=="function")&&!a.duplex&&(a.duplex="half")),i!=null&&i.headers)for(const[f,p]of Object.entries(i.headers))o=si(o,f,p);const c=r._removeEmptyFolders(e),u=r._getFinalPath(c),h=await(t=="PUT"?ir:we)(r.fetch,`${r.url}/object/${u}`,n,T({headers:o},a!=null&&a.duplex?{duplex:a.duplex}:{}));return{path:c,id:h.Id,fullPath:h.Key}})}async upload(t,e,s){return this.uploadOrUpdate("POST",t,e,s)}async uploadToSignedUrl(t,e,s,i){var r=this;const n=r._removeEmptyFolders(t),a=r._getFinalPath(n),o=new URL(r.url+`/object/upload/sign/${a}`);return o.searchParams.set("token",e),r.handleOperation(async()=>{let l;const c=T(T({},$n),i);let u=T(T({},r.headers),{"x-upsert":String(c.upsert)});const h=c.metadata;if(typeof Blob<"u"&&s instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),h&&l.append("metadata",r.encodeMetadata(h)),l.append("",s)):typeof FormData<"u"&&s instanceof FormData?(l=s,l.has("cacheControl")||l.append("cacheControl",c.cacheControl),h&&!l.has("metadata")&&l.append("metadata",r.encodeMetadata(h))):(l=s,u["cache-control"]=`max-age=${c.cacheControl}`,u["content-type"]=c.contentType,h&&(u["x-metadata"]=r.toBase64(r.encodeMetadata(h))),(typeof ReadableStream<"u"&&l instanceof ReadableStream||l&&typeof l=="object"&&"pipe"in l&&typeof l.pipe=="function")&&!c.duplex&&(c.duplex="half")),i!=null&&i.headers)for(const[f,p]of Object.entries(i.headers))u=si(u,f,p);return{path:n,fullPath:(await ir(r.fetch,o.toString(),l,T({headers:u},c!=null&&c.duplex?{duplex:c.duplex}:{}))).Key}})}async createSignedUploadUrl(t,e){var s=this;return s.handleOperation(async()=>{let i=s._getFinalPath(t);const r=T({},s.headers);e!=null&&e.upsert&&(r["x-upsert"]="true");const n=await we(s.fetch,`${s.url}/object/upload/sign/${i}`,{},{headers:r}),a=new URL(s.url+n.url),o=a.searchParams.get("token");if(!o)throw new hi("No token returned by API");return{signedUrl:a.toString(),path:t,token:o}})}async update(t,e,s){return this.uploadOrUpdate("PUT",t,e,s)}async move(t,e,s){var i=this;return i.handleOperation(async()=>await we(i.fetch,`${i.url}/object/move`,{bucketId:i.bucketId,sourceKey:t,destinationKey:e,destinationBucket:s==null?void 0:s.destinationBucket},{headers:i.headers}))}async copy(t,e,s){var i=this;return i.handleOperation(async()=>({path:(await we(i.fetch,`${i.url}/object/copy`,{bucketId:i.bucketId,sourceKey:t,destinationKey:e,destinationBucket:s==null?void 0:s.destinationBucket},{headers:i.headers})).Key}))}async createSignedUrl(t,e,s){var i=this;return i.handleOperation(async()=>{let r=i._getFinalPath(t);const n=typeof(s==null?void 0:s.transform)=="object"&&s.transform!==null&&Object.keys(s.transform).length>0;let a=await we(i.fetch,`${i.url}/object/sign/${r}`,T({expiresIn:e},n?{transform:s.transform}:{}),{headers:i.headers});const o=new URLSearchParams;s!=null&&s.download&&o.set("download",s.download===!0?"":s.download),(s==null?void 0:s.cacheNonce)!=null&&o.set("cacheNonce",String(s.cacheNonce));const l=o.toString();return{signedUrl:encodeURI(`${i.url}${a.signedURL}${l?`&${l}`:""}`)}})}async createSignedUrls(t,e,s){var i=this;return i.handleOperation(async()=>{const r=await we(i.fetch,`${i.url}/object/sign/${i.bucketId}`,{expiresIn:e,paths:t},{headers:i.headers}),n=new URLSearchParams;s!=null&&s.download&&n.set("download",s.download===!0?"":s.download),(s==null?void 0:s.cacheNonce)!=null&&n.set("cacheNonce",String(s.cacheNonce));const a=n.toString();return r.map(o=>T(T({},o),{},{signedUrl:o.signedURL?encodeURI(`${i.url}${o.signedURL}${a?`&${a}`:""}`):null}))})}download(t,e,s){const i=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",r=new URLSearchParams;e!=null&&e.transform&&this.applyTransformOptsToQuery(r,e.transform),(e==null?void 0:e.cacheNonce)!=null&&r.set("cacheNonce",String(e.cacheNonce));const n=r.toString(),a=this._getFinalPath(t),o=()=>ys(this.fetch,`${this.url}/${i}/${a}${n?`?${n}`:""}`,{headers:this.headers,noResolveJson:!0},s);return new _c(o,this.shouldThrowOnError)}async info(t){var e=this;const s=e._getFinalPath(t);return e.handleOperation(async()=>sr(await ys(e.fetch,`${e.url}/object/info/${s}`,{headers:e.headers})))}async exists(t){var e=this;const s=e._getFinalPath(t);try{return await wc(e.fetch,`${e.url}/object/${s}`,{headers:e.headers}),{data:!0,error:null}}catch(r){if(e.shouldThrowOnError)throw r;if(pi(r)){var i;const n=r instanceof tr?r.status:r instanceof $a?(i=r.originalError)===null||i===void 0?void 0:i.status:void 0;if(n!==void 0&&[400,404].includes(n))return{data:!1,error:r}}throw r}}getPublicUrl(t,e){const s=this._getFinalPath(t),i=new URLSearchParams;e!=null&&e.download&&i.set("download",e.download===!0?"":e.download),e!=null&&e.transform&&this.applyTransformOptsToQuery(i,e.transform),(e==null?void 0:e.cacheNonce)!=null&&i.set("cacheNonce",String(e.cacheNonce));const r=i.toString(),n=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${n}/public/${s}`)+(r?`?${r}`:"")}}}async remove(t){var e=this;return e.handleOperation(async()=>await vs(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:t},{headers:e.headers}))}async purgeCache(t,e,s){var i=this;return i.handleOperation(async()=>{const r=Ea(i._getFinalPath(t)),n=new URLSearchParams;e!=null&&e.transformations&&n.set("transformations","true");const a=n.toString();return await vs(i.fetch,`${i.url}/cdn/${r}${a?`?${a}`:""}`,{},{headers:i.headers},s)})}async list(t,e,s){var i=this;return i.handleOperation(async()=>{const r=e!=null&&e.sortBy?T(T({},Fi.sortBy),e.sortBy):Fi.sortBy,n=T(T(T({},Fi),e),{},{sortBy:r,prefix:t||""});return await we(i.fetch,`${i.url}/object/list/${i.bucketId}`,n,{headers:i.headers},s)})}async listV2(t,e){var s=this;return s.handleOperation(async()=>{const i=T({},t);return await we(s.fetch,`${s.url}/object/list-v2/${s.bucketId}`,i,{headers:s.headers},e)})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(t,e){return e.width&&t.set("width",e.width.toString()),e.height&&t.set("height",e.height.toString()),e.resize&&t.set("resize",e.resize),e.format&&t.set("format",e.format),e.quality&&t.set("quality",e.quality.toString()),t}};const Sc="2.112.3",$s={"X-Client-Info":`storage-js/${Sc}`};var $c=class extends Jt{constructor(t,e={},s,i){const r=new URL(t);i!=null&&i.useNewHostname&&/supabase\.(co|in|red)$/.test(r.hostname)&&!r.hostname.includes("storage.supabase.")&&(r.hostname=r.hostname.replace("supabase.","storage.supabase."));const n=r.href.replace(/\/$/,""),a=T(T({},$s),e);super(n,a,s,"storage")}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const s=e.listBucketOptionsToQueryString(t);return await ys(e.fetch,`${e.url}/bucket${s}`,{headers:e.headers})})}async getBucket(t){var e=this;return e.handleOperation(async()=>await ys(e.fetch,`${e.url}/bucket/${t}`,{headers:e.headers}))}async createBucket(t,e={public:!1}){var s=this;return s.handleOperation(async()=>await we(s.fetch,`${s.url}/bucket`,{id:t,name:t,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:s.headers}))}async updateBucket(t,e){var s=this;return s.handleOperation(async()=>await ir(s.fetch,`${s.url}/bucket/${t}`,{id:t,name:t,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:s.headers}))}async emptyBucket(t){var e=this;return e.handleOperation(async()=>await we(e.fetch,`${e.url}/bucket/${t}/empty`,{},{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await vs(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}async purgeBucketCache(t,e,s){var i=this;return i.handleOperation(async()=>{const r=new URLSearchParams;e!=null&&e.transformations&&r.set("transformations","true");const n=r.toString();return await vs(i.fetch,`${i.url}/cdn/${Ea(t)}${n?`?${n}`:""}`,{},{headers:i.headers},s)})}listBucketOptionsToQueryString(t){const e={};return t&&("limit"in t&&(e.limit=String(t.limit)),"offset"in t&&(e.offset=String(t.offset)),t.search&&(e.search=t.search),t.sortColumn&&(e.sortColumn=t.sortColumn),t.sortOrder&&(e.sortOrder=t.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},Ec=class extends Jt{constructor(t,e={},s){const i=t.replace(/\/$/,""),r=T(T({},$s),e);super(i,r,s,"storage")}async createBucket(t){var e=this;return e.handleOperation(async()=>await we(e.fetch,`${e.url}/bucket`,{name:t},{headers:e.headers}))}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const s=new URLSearchParams;(t==null?void 0:t.limit)!==void 0&&s.set("limit",t.limit.toString()),(t==null?void 0:t.offset)!==void 0&&s.set("offset",t.offset.toString()),t!=null&&t.sortColumn&&s.set("sortColumn",t.sortColumn),t!=null&&t.sortOrder&&s.set("sortOrder",t.sortOrder),t!=null&&t.search&&s.set("search",t.search);const i=s.toString(),r=i?`${e.url}/bucket?${i}`:`${e.url}/bucket`;return await ys(e.fetch,r,{headers:e.headers})})}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await vs(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}from(t){var e=this;if(!mc(t))throw new hi("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const s=new cc({baseUrl:this.url,catalogName:t,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),i=this.shouldThrowOnError;return new Proxy(s,{get(r,n){const a=r[n];return typeof a!="function"?a:async(...o)=>{try{return{data:await a.apply(r,o),error:null}}catch(l){if(i)throw l;return{data:null,error:l}}}}})}},Ac=class extends Jt{constructor(t,e={},s){const i=t.replace(/\/$/,""),r=T(T({},$s),{},{"Content-Type":"application/json"},e);super(i,r,s,"vectors")}async createIndex(t){var e=this;return e.handleOperation(async()=>await ce.post(e.fetch,`${e.url}/CreateIndex`,t,{headers:e.headers})||{})}async getIndex(t,e){var s=this;return s.handleOperation(async()=>await ce.post(s.fetch,`${s.url}/GetIndex`,{vectorBucketName:t,indexName:e},{headers:s.headers}))}async listIndexes(t){var e=this;return e.handleOperation(async()=>await ce.post(e.fetch,`${e.url}/ListIndexes`,t,{headers:e.headers}))}async deleteIndex(t,e){var s=this;return s.handleOperation(async()=>await ce.post(s.fetch,`${s.url}/DeleteIndex`,{vectorBucketName:t,indexName:e},{headers:s.headers})||{})}},Tc=class extends Jt{constructor(t,e={},s){const i=t.replace(/\/$/,""),r=T(T({},$s),{},{"Content-Type":"application/json"},e);super(i,r,s,"vectors")}async putVectors(t){var e=this;if(t.vectors.length<1||t.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await ce.post(e.fetch,`${e.url}/PutVectors`,t,{headers:e.headers})||{})}async getVectors(t){var e=this;return e.handleOperation(async()=>await ce.post(e.fetch,`${e.url}/GetVectors`,t,{headers:e.headers}))}async listVectors(t){var e=this;if(t.segmentCount!==void 0){if(t.segmentCount<1||t.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(t.segmentIndex!==void 0&&(t.segmentIndex<0||t.segmentIndex>=t.segmentCount))throw new Error(`segmentIndex must be between 0 and ${t.segmentCount-1}`)}return e.handleOperation(async()=>await ce.post(e.fetch,`${e.url}/ListVectors`,t,{headers:e.headers}))}async queryVectors(t){var e=this;return e.handleOperation(async()=>await ce.post(e.fetch,`${e.url}/QueryVectors`,t,{headers:e.headers}))}async deleteVectors(t){var e=this;if(t.keys.length<1||t.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await ce.post(e.fetch,`${e.url}/DeleteVectors`,t,{headers:e.headers})||{})}},Oc=class extends Jt{constructor(t,e={},s){const i=t.replace(/\/$/,""),r=T(T({},$s),{},{"Content-Type":"application/json"},e);super(i,r,s,"vectors")}async createBucket(t){var e=this;return e.handleOperation(async()=>await ce.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}async getBucket(t){var e=this;return e.handleOperation(async()=>await ce.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:t},{headers:e.headers}))}async listBuckets(t={}){var e=this;return e.handleOperation(async()=>await ce.post(e.fetch,`${e.url}/ListVectorBuckets`,t,{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await ce.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}},Ic=class extends Oc{constructor(t,e={}){super(t,e.headers||{},e.fetch)}from(t){return new Rc(this.url,this.headers,t,this.fetch)}async createBucket(t){var e=()=>super.createBucket,s=this;return e().call(s,t)}async getBucket(t){var e=()=>super.getBucket,s=this;return e().call(s,t)}async listBuckets(t={}){var e=()=>super.listBuckets,s=this;return e().call(s,t)}async deleteBucket(t){var e=()=>super.deleteBucket,s=this;return e().call(s,t)}},Rc=class extends Ac{constructor(t,e,s,i){super(t,e,i),this.vectorBucketName=s}async createIndex(t){var e=()=>super.createIndex,s=this;return e().call(s,T(T({},t),{},{vectorBucketName:s.vectorBucketName}))}async listIndexes(t={}){var e=()=>super.listIndexes,s=this;return e().call(s,T(T({},t),{},{vectorBucketName:s.vectorBucketName}))}async getIndex(t){var e=()=>super.getIndex,s=this;return e().call(s,s.vectorBucketName,t)}async deleteIndex(t){var e=()=>super.deleteIndex,s=this;return e().call(s,s.vectorBucketName,t)}index(t){return new Cc(this.url,this.headers,this.vectorBucketName,t,this.fetch)}},Cc=class extends Tc{constructor(t,e,s,i,r){super(t,e,r),this.vectorBucketName=s,this.indexName=i}async putVectors(t){var e=()=>super.putVectors,s=this;return e().call(s,T(T({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async getVectors(t){var e=()=>super.getVectors,s=this;return e().call(s,T(T({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async listVectors(t={}){var e=()=>super.listVectors,s=this;return e().call(s,T(T({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async queryVectors(t){var e=()=>super.queryVectors,s=this;return e().call(s,T(T({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async deleteVectors(t){var e=()=>super.deleteVectors,s=this;return e().call(s,T(T({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}},Pc=class extends $c{constructor(t,e={},s,i){super(t,e,s,i)}from(t){return new kc(this.url,this.headers,t,this.fetch)}get vectors(){return new Ic(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new Ec(this.url+"/iceberg",this.headers,this.fetch)}};const Ia="2.112.3",Ge=30*1e3,as=3,Bi=as*Ge,Dc=2*Ge,Mc="http://localhost:9999",jc="supabase.auth.token",Nc={"X-Client-Info":`gotrue-js/${Ia}`},rr="X-Supabase-Api-Version",Ra={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},Lc=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,xt="sb_flow_id",Uc=5,Fc=600*1e3;class bs extends Error{constructor(e,s,i){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=s,this.code=i}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function S(t){return typeof t=="object"&&t!==null&&"__isAuthError"in t}class Bc extends bs{constructor(e,s,i){super(e,s,i),this.name="AuthApiError",this.status=s,this.code=i}}function En(t){return S(t)&&t.name==="AuthApiError"}class xe extends bs{constructor(e,s){super(e),this.name="AuthUnknownError",this.originalError=s}}class De extends bs{constructor(e,s,i,r){super(e,i,r),this.name=s,this.status=i}}class X extends De{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Hs(t){return S(t)&&t.name==="AuthSessionMissingError"}class jt extends De{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class qs extends De{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Gs extends De{constructor(e,s=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=s}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function zc(t){return S(t)&&t.name==="AuthImplicitGrantRedirectError"}class An extends De{constructor(e,s=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=s}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class Hc extends De{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class Xs extends De{constructor(e,s){super(e,"AuthRetryableFetchError",s,void 0)}}function Ws(t){return S(t)&&t.name==="AuthRetryableFetchError"}class Tn extends De{constructor(e="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(e,"AuthRefreshDiscardedError",409,void 0)}}function qc(t){return S(t)&&t.name==="AuthRefreshDiscardedError"}class On extends De{constructor(e,s,i){super(e,"AuthWeakPasswordError",s,"weak_password"),this.reasons=i}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class ii extends De{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const ri="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),In=` 	
\r=`.split(""),Gc=(()=>{const t=new Array(128);for(let e=0;e<t.length;e+=1)t[e]=-1;for(let e=0;e<In.length;e+=1)t[In[e].charCodeAt(0)]=-2;for(let e=0;e<ri.length;e+=1)t[ri[e].charCodeAt(0)]=e;return t})();function Rn(t,e,s){if(t!==null)for(e.queue=e.queue<<8|t,e.queuedBits+=8;e.queuedBits>=6;){const i=e.queue>>e.queuedBits-6&63;s(ri[i]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const i=e.queue>>e.queuedBits-6&63;s(ri[i]),e.queuedBits-=6}}function Ca(t,e,s){const i=Gc[t];if(i>-1)for(e.queue=e.queue<<6|i,e.queuedBits+=6;e.queuedBits>=8;)s(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(i===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`)}}function Cn(t){const e=[],s=a=>{e.push(String.fromCodePoint(a))},i={utf8seq:0,codepoint:0},r={queue:0,queuedBits:0},n=a=>{Vc(a,i,s)};for(let a=0;a<t.length;a+=1)Ca(t.charCodeAt(a),r,n);return e.join("")}function Wc(t,e){if(t<=127){e(t);return}else if(t<=2047){e(192|t>>6),e(128|t&63);return}else if(t<=65535){e(224|t>>12),e(128|t>>6&63),e(128|t&63);return}else if(t<=1114111){e(240|t>>18),e(128|t>>12&63),e(128|t>>6&63),e(128|t&63);return}throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)}function Kc(t,e){for(let s=0;s<t.length;s+=1){let i=t.charCodeAt(s);if(i>55295&&i<=56319){const r=(i-55296)*1024&65535;i=(t.charCodeAt(s+1)-56320&65535|r)+65536,s+=1}Wc(i,e)}}function Vc(t,e,s){if(e.utf8seq===0){if(t<=127){s(t);return}for(let i=1;i<6;i+=1)if((t>>7-i&1)===0){e.utf8seq=i;break}if(e.utf8seq===2)e.codepoint=t&31;else if(e.utf8seq===3)e.codepoint=t&15;else if(e.utf8seq===4)e.codepoint=t&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(t<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|t&63,e.utf8seq-=1,e.utf8seq===0&&s(e.codepoint)}}function qt(t){const e=[],s={queue:0,queuedBits:0},i=r=>{e.push(r)};for(let r=0;r<t.length;r+=1)Ca(t.charCodeAt(r),s,i);return new Uint8Array(e)}function Jc(t){const e=[];return Kc(t,s=>e.push(s)),new Uint8Array(e)}function _t(t){const e=[],s={queue:0,queuedBits:0},i=r=>{e.push(r)};return t.forEach(r=>Rn(r,s,i)),Rn(null,s,i),e.join("")}function Yc(t){return Math.round(Date.now()/1e3)+t}function Xc(){return Symbol("auth-callback")}const Z=()=>typeof window<"u"&&typeof document<"u",ft={tested:!1,writable:!1},Pa=()=>{if(!Z())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(ft.tested)return ft.writable;const t=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(t,t),globalThis.localStorage.removeItem(t),ft.tested=!0,ft.writable=!0}catch{ft.tested=!0,ft.writable=!1}return ft.writable};function Pn(t){const e={},s=new URL(t);if(s.hash&&s.hash[0]==="#")try{new URLSearchParams(s.hash.substring(1)).forEach((r,n)=>{e[n]=r})}catch{}return s.searchParams.forEach((i,r)=>{e[r]=i}),e}const Da=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),Qc=t=>typeof t=="object"&&t!==null&&"status"in t&&"ok"in t&&"json"in t&&typeof t.json=="function",We=async(t,e,s)=>{await t.setItem(e,JSON.stringify(s))},ee=async(t,e)=>{const s=await t.getItem(e);if(!s)return null;try{return JSON.parse(s)}catch{return null}},ne=async(t,e)=>{await t.removeItem(e)};class fi{constructor(){this.promise=new fi.promiseConstructor((e,s)=>{this.resolve=e,this.reject=s})}}fi.promiseConstructor=Promise;function Ks(t){const e=t.split(".");if(e.length!==3)throw new ii("Invalid JWT structure");for(let i=0;i<e.length;i++)if(!Lc.test(e[i]))throw new ii("JWT not in base64url format");return{header:JSON.parse(Cn(e[0])),payload:JSON.parse(Cn(e[1])),signature:qt(e[2]),raw:{header:e[0],payload:e[1]}}}async function Zc(t){return await new Promise(e=>{setTimeout(()=>e(null),t)})}function ed(t,e){return new Promise((i,r)=>{(async()=>{for(let n=0;n<1/0;n++)try{const a=await t(n);if(!e(n,null,a)){i(a);return}}catch(a){if(!e(n,a)){r(a);return}}})()})}function Ma(t){return("0"+t.toString(16)).substr(-2)}function td(){const e=new Uint32Array(56);if(typeof crypto>"u"){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",i=s.length;let r="";for(let n=0;n<56;n++)r+=s.charAt(Math.floor(Math.random()*i));return r}return crypto.getRandomValues(e),Array.from(e,Ma).join("")}async function sd(t){const s=new TextEncoder().encode(t),i=await crypto.subtle.digest("SHA-256",s),r=new Uint8Array(i);return Array.from(r).map(n=>String.fromCharCode(n)).join("")}async function id(t){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),t;const s=await sd(t);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}const rd=/^[a-zA-Z0-9_-]{8,64}$/;function Qs(t){return typeof t=="string"&&rd.test(t)?t:null}function nd(){if(typeof crypto<"u"&&typeof crypto.getRandomValues=="function"){const e=new Uint8Array(16);return crypto.getRandomValues(e),Array.from(e,Ma).join("")}let t="";for(let e=0;e<32;e++)t+=Math.floor(Math.random()*16).toString(16);return t}const Kt=(t,e)=>`${t}-flow-${e}-code-verifier`,ws=t=>`${t}-flows-code-verifier`;async function fr(t,e){const s=await ee(t,ws(e));return Array.isArray(s)?s.filter(i=>Qs(i)!==null):[]}async function ad(t,e,s,i,r){await We(t,Kt(e,s),i);const n=(await fr(t,e)).filter(a=>a!==s);for(n.push(s);n.length>Uc;){const a=n.shift();await ne(t,Kt(e,a)),r==null||r(a)}await We(t,ws(e),n),await We(t,`${e}-code-verifier`,i)}async function od(t,e,s){if(s){const r=await ee(t,Kt(e,s));return{verifier:typeof r=="string"?r:null,flowId:s}}const i=await ee(t,`${e}-code-verifier`);return{verifier:typeof i=="string"?i:null,flowId:null}}async function ye(t,e,s){const i=`${e}-code-verifier`;if(!s){await ne(t,i);return}const r=Kt(e,s),n=await ee(t,r);await ne(t,r);const a=await fr(t,e),o=a.filter(l=>l!==s);o.length!==a.length&&(o.length>0?await We(t,ws(e),o):await ne(t,ws(e))),n!=null&&n===await ee(t,i)&&await ne(t,i)}async function ld(t,e){const s=await fr(t,e);for(const i of s)await ne(t,Kt(e,i));await ne(t,ws(e)),await ne(t,`${e}-code-verifier`)}function cd(t,e){const s=t.indexOf("#");let i=s===-1?t:t.slice(0,s);const r=s===-1?"":t.slice(s),n=i.indexOf("?");if(n!==-1){const o=i.slice(0,n),l=i.slice(n+1).split("&").filter(c=>c!==""&&c!==xt&&!c.startsWith(`${xt}=`));i=l.length>0?`${o}?${l.join("&")}`:o}const a=i.includes("?")?"&":"?";return`${i}${a}${xt}=${encodeURIComponent(e)}${r}`}async function dd(t,e,s=!1,i){const r=td();let n=r;s&&(n+="/recovery");const a=nd();await ad(t,e,a,n,i);const o=await id(r);return[o,r===o?"plain":"s256",a]}const ud=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function hd(t){const e=t.headers.get(rr);if(!e||!e.match(ud))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function pd(t){if(!t)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(t<=e)throw new Error("JWT has expired")}function fd(t){switch(t){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const gd=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function Be(t){if(!gd.test(t))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function be(t){if(!t.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function zi(){const t={};return new Proxy(t,{get:(e,s)=>{if(s==="__isUserNotAvailableProxy")return!0;if(typeof s=="symbol"){const i=s.toString();if(i==="Symbol(Symbol.toPrimitive)"||i==="Symbol(Symbol.toStringTag)"||i==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${s}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function md(t,e){return new Proxy(t,{get:(s,i,r)=>{if(i==="__isInsecureUserWarningProxy")return!0;if(typeof i=="symbol"){const n=i.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)"||n==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(s,i,r)}return!e.value&&typeof i=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(s,i,r)}})}function Dn(t){return JSON.parse(JSON.stringify(t))}const yt=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(t)},Mn=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function jn(t){var e;if(!Qc(t))throw new Xs(yt(t),0);let s;try{s=await t.json()}catch(n){throw Mn.includes(t.status)?new Xs(t.statusText||`HTTP ${t.status}`,t.status):new xe(yt(n),n)}if(Mn.includes(t.status))throw new Xs(yt(s),t.status);let i;const r=hd(t);if(r&&r.getTime()>=Ra["2024-01-01"].timestamp&&typeof s=="object"&&s&&typeof s.code=="string"?i=s.code:typeof s=="object"&&s&&typeof s.error_code=="string"&&(i=s.error_code),i){if(i==="weak_password")throw new On(yt(s),t.status,((e=s.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(i==="session_not_found")throw new X}else if(typeof s=="object"&&s&&typeof s.weak_password=="object"&&s.weak_password&&Array.isArray(s.weak_password.reasons)&&s.weak_password.reasons.length&&s.weak_password.reasons.reduce((n,a)=>n&&typeof a=="string",!0))throw new On(yt(s),t.status,s.weak_password.reasons);throw new Bc(yt(s),t.status||500,i)}const yd=(t,e,s,i)=>{const r={method:t,headers:(e==null?void 0:e.headers)||{}};return t==="GET"?r:(r.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),r.body=JSON.stringify(i),Object.assign(Object.assign({},r),s))};async function E(t,e,s,i){var r;const n=Object.assign({},i==null?void 0:i.headers);n[rr]||(n[rr]=Ra["2024-01-01"].name),i!=null&&i.jwt&&(n.Authorization=`Bearer ${i.jwt}`);const a=(r=i==null?void 0:i.query)!==null&&r!==void 0?r:{};i!=null&&i.redirectTo&&(a.redirect_to=i.redirectTo);const o=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await vd(t,e,s+o,{headers:n,noResolveJson:i==null?void 0:i.noResolveJson},{},i==null?void 0:i.body);return i!=null&&i.xform?i==null?void 0:i.xform(l):{data:Object.assign({},l),error:null}}async function vd(t,e,s,i,r,n){const a=yd(e,i,r,n);let o;try{o=await t(s,Object.assign({},a))}catch(l){throw new Xs(yt(l),0)}if(o.ok||await jn(o),i!=null&&i.noResolveJson)return o;try{return await o.json()}catch(l){await jn(l)}}function pe(t){var e;let s=null;xd(t)&&(s=Object.assign({},t),t.expires_at||(s.expires_at=Yc(t.expires_in)));const i=(e=t.user)!==null&&e!==void 0?e:typeof(t==null?void 0:t.id)=="string"?t:null;return{data:{session:s,user:i},error:null}}function Nn(t){const e=pe(t);return!e.error&&t.weak_password&&typeof t.weak_password=="object"&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.message&&typeof t.weak_password.message=="string"&&t.weak_password.reasons.reduce((s,i)=>s&&typeof i=="string",!0)&&(e.data.weak_password=t.weak_password),e}function ot(t){var e;return{data:{user:(e=t.user)!==null&&e!==void 0?e:t},error:null}}function bd(t){return{data:t,error:null}}function wd(t){const{action_link:e,email_otp:s,hashed_token:i,redirect_to:r,verification_type:n}=t,a=ui(t,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:s,hashed_token:i,redirect_to:r,verification_type:n},l=Object.assign({},a);return{data:{properties:o,user:l},error:null}}function Ln(t){return t}function xd(t){return!!t.access_token&&!!t.refresh_token&&!!t.expires_in}const Hi=["global","local","others"];class _d{constructor({url:e="",headers:s={},fetch:i,experimental:r}){this.url=e,this.headers=s,this.fetch=Da(i),this.experimental=r??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,s=Hi[0]){if(Hi.indexOf(s)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Hi.join(", ")}`);try{return await E(this.fetch,"POST",`${this.url}/logout?scope=${s}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(i){if(S(i))return{data:null,error:i};throw i}}async inviteUserByEmail(e,s={}){try{return await E(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:s.data},headers:this.headers,redirectTo:s.redirectTo,xform:ot})}catch(i){if(S(i))return{data:{user:null},error:i};throw i}}async generateLink(e){try{const{options:s}=e,i=ui(e,["options"]),r=Object.assign(Object.assign({},i),s);return"newEmail"in i&&(r.new_email=i==null?void 0:i.newEmail,delete r.newEmail),await E(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:wd,redirectTo:s==null?void 0:s.redirectTo})}catch(s){if(S(s))return{data:{properties:null,user:null},error:s};throw s}}async createUser(e){try{return await E(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:ot})}catch(s){if(S(s))return{data:{user:null},error:s};throw s}}async listUsers(e){var s,i,r,n,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},u=await E(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(s=e==null?void 0:e.page)===null||s===void 0?void 0:s.toString())!==null&&i!==void 0?i:"",per_page:(n=(r=e==null?void 0:e.perPage)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:""},xform:Ln});if(u.error)throw u.error;const h=await u.json(),f=(a=u.headers.get("x-total-count"))!==null&&a!==void 0?a:0,p=(l=(o=u.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return p.length>0&&(p.forEach(g=>{const m=parseInt(g.split(";")[0].split("=")[1].substring(0,1)),w=JSON.parse(g.split(";")[1].split("=")[1]);c[`${w}Page`]=m}),c.total=parseInt(f)),{data:Object.assign(Object.assign({},h),c),error:null}}catch(c){if(S(c))return{data:{users:[]},error:c};throw c}}async getUserById(e){Be(e);try{return await E(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:ot})}catch(s){if(S(s))return{data:{user:null},error:s};throw s}}async updateUserById(e,s){Be(e);try{return await E(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:s,headers:this.headers,xform:ot})}catch(i){if(S(i))return{data:{user:null},error:i};throw i}}async deleteUser(e,s=!1){Be(e);try{return await E(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:s},xform:ot})}catch(i){if(S(i))return{data:{user:null},error:i};throw i}}async _listFactors(e){Be(e.userId);try{const{data:s,error:i}=await E(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:r=>({data:{factors:r},error:null})});return{data:s,error:i}}catch(s){if(S(s))return{data:null,error:s};throw s}}async _deleteFactor(e){Be(e.userId),Be(e.id);try{return{data:await E(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(s){if(S(s))return{data:null,error:s};throw s}}async _listOAuthClients(e){var s,i,r,n,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},u=await E(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(s=e==null?void 0:e.page)===null||s===void 0?void 0:s.toString())!==null&&i!==void 0?i:"",per_page:(n=(r=e==null?void 0:e.perPage)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:""},xform:Ln});if(u.error)throw u.error;const h=await u.json(),f=(a=u.headers.get("x-total-count"))!==null&&a!==void 0?a:0,p=(l=(o=u.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return p.length>0&&(p.forEach(g=>{const m=parseInt(g.split(";")[0].split("=")[1].substring(0,1)),w=JSON.parse(g.split(";")[1].split("=")[1]);c[`${w}Page`]=m}),c.total=parseInt(f)),{data:Object.assign(Object.assign({},h),c),error:null}}catch(c){if(S(c))return{data:{clients:[]},error:c};throw c}}async _createOAuthClient(e){try{return await E(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(S(s))return{data:null,error:s};throw s}}async _getOAuthClient(e){try{return await E(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(S(s))return{data:null,error:s};throw s}}async _updateOAuthClient(e,s){try{return await E(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:s,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(S(i))return{data:null,error:i};throw i}}async _deleteOAuthClient(e){try{return await E(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(S(s))return{data:null,error:s};throw s}}async _regenerateOAuthClientSecret(e){try{return await E(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(S(s))return{data:null,error:s};throw s}}async _listCustomProviders(e){try{const s={};return e!=null&&e.type&&(s.type=e.type),await E(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:s,xform:i=>{var r;return{data:{providers:(r=i==null?void 0:i.providers)!==null&&r!==void 0?r:[]},error:null}}})}catch(s){if(S(s))return{data:{providers:[]},error:s};throw s}}async _createCustomProvider(e){try{return await E(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(S(s))return{data:null,error:s};throw s}}async _getCustomProvider(e){try{return await E(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(S(s))return{data:null,error:s};throw s}}async _updateCustomProvider(e,s){try{return await E(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:s,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(S(i))return{data:null,error:i};throw i}}async _deleteCustomProvider(e){try{return await E(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(S(s))return{data:null,error:s};throw s}}async _adminListPasskeys(e){be(this.experimental),Be(e.userId);try{return await E(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(S(s))return{data:null,error:s};throw s}}async _adminDeletePasskey(e){be(this.experimental),Be(e.userId),Be(e.passkeyId);try{return await E(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(S(s))return{data:null,error:s};throw s}}}function Un(t={}){return{getItem:e=>t[e]||null,setItem:(e,s)=>{t[e]=s},removeItem:e=>{delete t[e]}}}globalThis&&Pa()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class kd extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}function Sd(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function ja(t){if(!/^0x[a-fA-F0-9]{40}$/.test(t))throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);return t.toLowerCase()}function $d(t){return parseInt(t,16)}function Ed(t){const e=new TextEncoder().encode(t);return"0x"+Array.from(e,i=>i.toString(16).padStart(2,"0")).join("")}function Ad(t){var e;const{chainId:s,domain:i,expirationTime:r,issuedAt:n=new Date,nonce:a,notBefore:o,requestId:l,resources:c,scheme:u,uri:h,version:f}=t;{if(!Number.isInteger(s))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${s}`);if(!i)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(a&&a.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!h)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(f!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`);if(!((e=t.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`)}const p=ja(t.address),g=u?`${u}://${i}`:i,m=t.statement?`${t.statement}
`:"",w=`${g} wants you to sign in with your Ethereum account:
${p}

${m}`;let x=`URI: ${h}
Version: ${f}
Chain ID: ${s}${a?`
Nonce: ${a}`:""}
Issued At: ${n.toISOString()}`;if(r&&(x+=`
Expiration Time: ${r.toISOString()}`),o&&(x+=`
Not Before: ${o.toISOString()}`),l&&(x+=`
Request ID: ${l}`),c){let _=`
Resources:`;for(const b of c){if(!b||typeof b!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${b}`);_+=`
- ${b}`}x+=_}return`${w}
${x}`}class W extends Error{constructor({message:e,code:s,cause:i,name:r}){var n;super(e,{cause:i}),this.__isWebAuthnError=!0,this.name=(n=r??(i instanceof Error?i.name:void 0))!==null&&n!==void 0?n:"Unknown Error",this.code=s}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class ni extends W{constructor(e,s){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s,message:e}),this.name="WebAuthnUnknownError",this.originalError=s}}function Td({error:t,options:e}){var s,i,r;const{publicKey:n}=e;if(!n)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new W({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else if(t.name==="ConstraintError"){if(((s=n.authenticatorSelection)===null||s===void 0?void 0:s.requireResidentKey)===!0)return new W({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:t});if(e.mediation==="conditional"&&((i=n.authenticatorSelection)===null||i===void 0?void 0:i.userVerification)==="required")return new W({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:t});if(((r=n.authenticatorSelection)===null||r===void 0?void 0:r.userVerification)==="required")return new W({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:t})}else{if(t.name==="InvalidStateError")return new W({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:t});if(t.name==="NotAllowedError")return new W({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="NotSupportedError")return n.pubKeyCredParams.filter(o=>o.type==="public-key").length===0?new W({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:t}):new W({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:t});if(t.name==="SecurityError"){const a=window.location.hostname;if(Na(a)){if(n.rp.id!==a)return new W({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new W({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="TypeError"){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new W({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:t})}else if(t.name==="UnknownError")return new W({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new W({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}function Od({error:t,options:e}){const{publicKey:s}=e;if(!s)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new W({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else{if(t.name==="NotAllowedError")return new W({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="SecurityError"){const i=window.location.hostname;if(Na(i)){if(s.rpId!==i)return new W({message:`The RP ID "${s.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new W({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="UnknownError")return new W({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new W({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}class Id{createNewAbortSignal(){if(this.controller){const s=new Error("Cancelling existing WebAuthn API call for new one");s.name="AbortError",this.controller.abort(s)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const nr=new Id;function Fn(t){if(!t)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(t);const{challenge:e,user:s,excludeCredentials:i}=t,r=ui(t,["challenge","user","excludeCredentials"]),n=qt(e).buffer,a=Object.assign(Object.assign({},s),{id:qt(s.id).buffer}),o=Object.assign(Object.assign({},r),{challenge:n,user:a});if(i&&i.length>0){o.excludeCredentials=new Array(i.length);for(let l=0;l<i.length;l++){const c=i[l];o.excludeCredentials[l]=Object.assign(Object.assign({},c),{id:qt(c.id).buffer,type:c.type||"public-key",transports:c.transports})}}return o}function Bn(t){if(!t)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(t);const{challenge:e,allowCredentials:s}=t,i=ui(t,["challenge","allowCredentials"]),r=qt(e).buffer,n=Object.assign(Object.assign({},i),{challenge:r});if(s&&s.length>0){n.allowCredentials=new Array(s.length);for(let a=0;a<s.length;a++){const o=s[a];n.allowCredentials[a]=Object.assign(Object.assign({},o),{id:qt(o.id).buffer,type:o.type||"public-key",transports:o.transports})}}return n}function zn(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const s=t;return{id:t.id,rawId:t.id,response:{attestationObject:_t(new Uint8Array(t.response.attestationObject)),clientDataJSON:_t(new Uint8Array(t.response.clientDataJSON))},type:"public-key",clientExtensionResults:t.getClientExtensionResults(),authenticatorAttachment:(e=s.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function Hn(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const s=t,i=t.getClientExtensionResults(),r=t.response;return{id:t.id,rawId:t.id,response:{authenticatorData:_t(new Uint8Array(r.authenticatorData)),clientDataJSON:_t(new Uint8Array(r.clientDataJSON)),signature:_t(new Uint8Array(r.signature)),userHandle:r.userHandle?_t(new Uint8Array(r.userHandle)):void 0},type:"public-key",clientExtensionResults:i,authenticatorAttachment:(e=s.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function Na(t){return t==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)}function ai(){var t,e;return!!(Z()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((t=navigator==null?void 0:navigator.credentials)===null||t===void 0?void 0:t.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function La(t){try{const e=await navigator.credentials.create(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new ni("Browser returned unexpected credential type",e)}:{data:null,error:new ni("Empty credential response",e)}}catch(e){return{data:null,error:Td({error:e,options:t})}}}async function Ua(t){try{const e=await navigator.credentials.get(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new ni("Browser returned unexpected credential type",e)}:{data:null,error:new ni("Empty credential response",e)}}catch(e){return{data:null,error:Od({error:e,options:t})}}}const Rd={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},Cd={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function oi(...t){const e=r=>r!==null&&typeof r=="object"&&!Array.isArray(r),s=r=>r instanceof ArrayBuffer||ArrayBuffer.isView(r),i={};for(const r of t)if(r)for(const n in r){const a=r[n];if(a!==void 0)if(Array.isArray(a))i[n]=a;else if(s(a))i[n]=a;else if(e(a)){const o=i[n];e(o)?i[n]=oi(o,a):i[n]=oi(a)}else i[n]=a}return i}function Pd(t,e){return oi(Rd,t,e||{})}function Dd(t,e){return oi(Cd,t,e||{})}class Md{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:s,friendlyName:i,signal:r},n){var a;try{const{data:o,error:l}=await this.client.mfa.challenge({factorId:e,webauthn:s});if(!o)return{data:null,error:l};const c=r??nr.createNewAbortSignal();if(o.webauthn.type==="create"){const{user:u}=o.webauthn.credential_options.publicKey;if(!u.name){const h=i;if(h)u.name=`${u.id}:${h}`;else{const p=(await this.client.getUser()).data.user,g=((a=p==null?void 0:p.user_metadata)===null||a===void 0?void 0:a.name)||(p==null?void 0:p.email)||(p==null?void 0:p.id)||"User";u.name=`${u.id}:${g}`}}u.displayName||(u.displayName=u.name)}switch(o.webauthn.type){case"create":{const u=Pd(o.webauthn.credential_options.publicKey,n==null?void 0:n.create),{data:h,error:f}=await La({publicKey:u,signal:c});return h?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:h}},error:null}:{data:null,error:f}}case"request":{const u=Dd(o.webauthn.credential_options.publicKey,n==null?void 0:n.request),{data:h,error:f}=await Ua(Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:u,signal:c}));return h?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:h}},error:null}:{data:null,error:f}}}}catch(o){return S(o)?{data:null,error:o}:{data:null,error:new xe("Unexpected error in challenge",o)}}}async _verify({challengeId:e,factorId:s,webauthn:i}){return this.client.mfa.verify({factorId:s,challengeId:e,webauthn:i})}async _authenticate({factorId:e,webauthn:{rpId:s=typeof window<"u"?window.location.hostname:void 0,rpOrigins:i=typeof window<"u"?[window.location.origin]:void 0,signal:r}={}},n){if(!s)return{data:null,error:new bs("rpId is required for WebAuthn authentication")};try{if(!ai())return{data:null,error:new xe("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:s,rpOrigins:i},signal:r},{request:n});if(!a)return{data:null,error:o};const{webauthn:l}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:l.type,rpId:s,rpOrigins:i,credential_response:l.credential_response}})}catch(a){return S(a)?{data:null,error:a}:{data:null,error:new xe("Unexpected error in authenticate",a)}}}async _register({friendlyName:e,webauthn:{rpId:s=typeof window<"u"?window.location.hostname:void 0,rpOrigins:i=typeof window<"u"?[window.location.origin]:void 0,signal:r}={}},n){if(!s)return{data:null,error:new bs("rpId is required for WebAuthn registration")};try{if(!ai())return{data:null,error:new xe("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(u=>{var h;return(h=u.data)===null||h===void 0?void 0:h.all.find(f=>f.factor_type==="webauthn"&&f.friendly_name===e&&f.status!=="unverified")}).then(u=>u?this.client.mfa.unenroll({factorId:u==null?void 0:u.id}):void 0),{data:null,error:o};const{data:l,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:s,rpOrigins:i},signal:r},{create:n});return l?this._verify({factorId:a.id,challengeId:l.challengeId,webauthn:{rpId:s,rpOrigins:i,type:l.webauthn.type,credential_response:l.webauthn.credential_response}}):{data:null,error:c}}catch(a){return S(a)?{data:null,error:a}:{data:null,error:new xe("Unexpected error in register",a)}}}}Sd();const jd={url:Mc,storageKey:jc,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:Nc,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},Nt={};class xs{get jwks(){var e,s;return(s=(e=Nt[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&s!==void 0?s:{keys:[]}}set jwks(e){Nt[this.storageKey]=Object.assign(Object.assign({},Nt[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,s;return(s=(e=Nt[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&s!==void 0?s:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){Nt[this.storageKey]=Object.assign(Object.assign({},Nt[this.storageKey]),{cachedAt:e})}constructor(e){var s,i,r;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this._pendingInitNotifications=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const n=Object.assign(Object.assign({},jd),e);if(this.storageKey=n.storageKey,this.instanceID=(s=xs.nextInstanceID[this.storageKey])!==null&&s!==void 0?s:0,xs.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!n.debug,typeof n.debug=="function"&&(this.logger=n.debug),this.instanceID>0&&Z()){const a=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(a),this.logDebugMessages&&console.trace(a)}if(this.persistSession=n.persistSession,this.autoRefreshToken=n.autoRefreshToken,this.experimental=(i=n.experimental)!==null&&i!==void 0?i:{},this.admin=new _d({url:n.url,headers:n.headers,fetch:n.fetch,experimental:this.experimental}),this.url=n.url,this.headers=n.headers,this.fetch=Da(n.fetch),this.detectSessionInUrl=n.detectSessionInUrl,this.flowType=n.flowType,this.hasCustomAuthorizationHeader=n.hasCustomAuthorizationHeader,this.throwOnError=n.throwOnError,this.lockAcquireTimeout=n.lockAcquireTimeout,n.lock!=null&&(this.lock=n.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new Md(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(n.storage?this.storage=n.storage:Pa()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Un(this.memoryStorage)),n.userStorage&&(this.userStorage=n.userStorage)):(this.memoryStorage={},this.storage=Un(this.memoryStorage)),Z()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(r=this.broadcastChannel)===null||r===void 0||r.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a),(a.data.event==="TOKEN_REFRESHED"||a.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(a.data.event,a.data.session,!1)}catch(o){this._debug("#broadcastChannel","error",o)}})}n.skipAutoInitialize||this.initialize().catch(a=>{this._debug("#initialize()","error",a)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Ia}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){var e;if(this.initializePromise)return await this.initializePromise;this._pendingInitNotifications=[],this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())();const s=await this.initializePromise,i=(e=this._pendingInitNotifications)!==null&&e!==void 0?e:[];this._pendingInitNotifications=null;for(const r of i)await this._notifyAllSubscribers(r.event,r.session,r.broadcast);return s}async _initialize(){var e;try{let s={},i="none";if(Z()&&(s=Pn(window.location.href),this._isImplicitGrantCallback(s)?i="implicit":await this._isPKCECallback(s)&&(i="pkce")),Z()&&this.detectSessionInUrl&&i!=="none"){const{data:r,error:n}=await this._getSessionFromURL(s,i);if(n){if(this._debug("#_initialize()","error detecting session from URL",n),zc(n)){const l=(e=n.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:n}}return{error:n}}const{session:a,redirectType:o}=r;return this._debug("#_initialize()","detected session in URL",a,"redirect type",o),await this._saveSession(a),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(s){return S(s)?this._returnResult({error:s}):this._returnResult({error:new xe("Unexpected error during initialization",s)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var s,i,r;try{const n=await E(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(i=(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.data)!==null&&i!==void 0?i:{},gotrue_meta_security:{captcha_token:(r=e==null?void 0:e.options)===null||r===void 0?void 0:r.captchaToken}},xform:pe}),{data:a,error:o}=n;if(o||!a)return this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(n){if(S(n))return this._returnResult({data:{user:null,session:null},error:n});throw n}}async signUp(e){var s,i,r;let n=null;try{let a;if("email"in e){const{email:h,password:f,options:p}=e;let g=null,m=null;this.flowType==="pkce"&&([g,m,n]=await this._getCodeChallengeAndMethod()),a=await E(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(p==null?void 0:p.emailRedirectTo,n),body:{email:h,password:f,data:(s=p==null?void 0:p.data)!==null&&s!==void 0?s:{},gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},code_challenge:g,code_challenge_method:m},xform:pe})}else if("phone"in e){const{phone:h,password:f,options:p}=e;a=await E(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:h,password:f,data:(i=p==null?void 0:p.data)!==null&&i!==void 0?i:{},channel:(r=p==null?void 0:p.channel)!==null&&r!==void 0?r:"sms",gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken}},xform:pe})}else throw new qs("You must provide either an email or phone number and a password");const{data:o,error:l}=a;if(l||!o)return await ye(this.storage,this.storageKey,n),this._returnResult({data:{user:null,session:null},error:l});const c=o.session,u=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",c)),this._returnResult({data:{user:u,session:c},error:null})}catch(a){if(await ye(this.storage,this.storageKey,n),S(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithPassword(e){try{let s;if("email"in e){const{email:n,password:a,options:o}=e;s=await E(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:n,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Nn})}else if("phone"in e){const{phone:n,password:a,options:o}=e;s=await E(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:n,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Nn})}else throw new qs("You must provide either an email or phone number and a password");const{data:i,error:r}=s;if(r)return this._returnResult({data:{user:null,session:null},error:r});if(!i||!i.session||!i.user){const n=new jt;return this._returnResult({data:{user:null,session:null},error:n})}return i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),this._returnResult({data:Object.assign({user:i.user,session:i.session},i.weak_password?{weakPassword:i.weak_password}:null),error:r})}catch(s){if(S(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithOAuth(e){var s,i,r,n;return await this._handleProviderSignIn(e.provider,{redirectTo:(s=e.options)===null||s===void 0?void 0:s.redirectTo,scopes:(i=e.options)===null||i===void 0?void 0:i.scopes,queryParams:(r=e.options)===null||r===void 0?void 0:r.queryParams,skipBrowserRedirect:(n=e.options)===null||n===void 0?void 0:n.skipBrowserRedirect})}async exchangeCodeForSession(e,s){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e,s)):this._exchangeCodeForSession(e,s)}async signInWithWeb3(e){const{chain:s}=e;switch(s){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${s}"`)}}async signInWithEthereum(e){var s,i,r,n,a,o,l,c,u,h,f;let p,g;if("message"in e)p=e.message,g=e.signature;else{const{chain:m,wallet:w,statement:x,options:_}=e;let b;if(Z())if(typeof w=="object")b=w;else{const Y=window;if("ethereum"in Y&&typeof Y.ethereum=="object"&&"request"in Y.ethereum&&typeof Y.ethereum.request=="function")b=Y.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof w!="object"||!(_!=null&&_.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");b=w}const k=new URL((s=_==null?void 0:_.url)!==null&&s!==void 0?s:window.location.href),R=await b.request({method:"eth_requestAccounts"}).then(Y=>Y).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!R||R.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const O=ja(R[0]);let C=(i=_==null?void 0:_.signInWithEthereum)===null||i===void 0?void 0:i.chainId;if(!C){const Y=await b.request({method:"eth_chainId"});C=$d(Y)}const z={domain:k.host,address:O,statement:x,uri:k.href,version:"1",chainId:C,nonce:(r=_==null?void 0:_.signInWithEthereum)===null||r===void 0?void 0:r.nonce,issuedAt:(a=(n=_==null?void 0:_.signInWithEthereum)===null||n===void 0?void 0:n.issuedAt)!==null&&a!==void 0?a:new Date,expirationTime:(o=_==null?void 0:_.signInWithEthereum)===null||o===void 0?void 0:o.expirationTime,notBefore:(l=_==null?void 0:_.signInWithEthereum)===null||l===void 0?void 0:l.notBefore,requestId:(c=_==null?void 0:_.signInWithEthereum)===null||c===void 0?void 0:c.requestId,resources:(u=_==null?void 0:_.signInWithEthereum)===null||u===void 0?void 0:u.resources};p=Ad(z),g=await b.request({method:"personal_sign",params:[Ed(p),O]})}try{const{data:m,error:w}=await E(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:p,signature:g},!((h=e.options)===null||h===void 0)&&h.captchaToken?{gotrue_meta_security:{captcha_token:(f=e.options)===null||f===void 0?void 0:f.captchaToken}}:null),xform:pe});if(w)throw w;if(!m||!m.session||!m.user){const x=new jt;return this._returnResult({data:{user:null,session:null},error:x})}return m.session&&(await this._saveSession(m.session),await this._notifyAllSubscribers("SIGNED_IN",m.session)),this._returnResult({data:Object.assign({},m),error:w})}catch(m){if(S(m))return this._returnResult({data:{user:null,session:null},error:m});throw m}}async signInWithSolana(e){var s,i,r,n,a,o,l,c,u,h,f,p;let g,m;if("message"in e)g=e.message,m=e.signature;else{const{chain:w,wallet:x,statement:_,options:b}=e;let k;if(Z())if(typeof x=="object")k=x;else{const O=window;if("solana"in O&&typeof O.solana=="object"&&("signIn"in O.solana&&typeof O.solana.signIn=="function"||"signMessage"in O.solana&&typeof O.solana.signMessage=="function"))k=O.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof x!="object"||!(b!=null&&b.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");k=x}const R=new URL((s=b==null?void 0:b.url)!==null&&s!==void 0?s:window.location.href);if("signIn"in k&&k.signIn){const O=await k.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},b==null?void 0:b.signInWithSolana),{version:"1",domain:R.host,uri:R.href}),_?{statement:_}:null));let C;if(Array.isArray(O)&&O[0]&&typeof O[0]=="object")C=O[0];else if(O&&typeof O=="object"&&"signedMessage"in O&&"signature"in O)C=O;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in C&&"signature"in C&&(typeof C.signedMessage=="string"||C.signedMessage instanceof Uint8Array)&&C.signature instanceof Uint8Array)g=typeof C.signedMessage=="string"?C.signedMessage:new TextDecoder().decode(C.signedMessage),m=C.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in k)||typeof k.signMessage!="function"||!("publicKey"in k)||typeof k!="object"||!k.publicKey||!("toBase58"in k.publicKey)||typeof k.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");g=[`${R.host} wants you to sign in with your Solana account:`,k.publicKey.toBase58(),..._?["",_,""]:[""],"Version: 1",`URI: ${R.href}`,`Issued At: ${(r=(i=b==null?void 0:b.signInWithSolana)===null||i===void 0?void 0:i.issuedAt)!==null&&r!==void 0?r:new Date().toISOString()}`,...!((n=b==null?void 0:b.signInWithSolana)===null||n===void 0)&&n.notBefore?[`Not Before: ${b.signInWithSolana.notBefore}`]:[],...!((a=b==null?void 0:b.signInWithSolana)===null||a===void 0)&&a.expirationTime?[`Expiration Time: ${b.signInWithSolana.expirationTime}`]:[],...!((o=b==null?void 0:b.signInWithSolana)===null||o===void 0)&&o.chainId?[`Chain ID: ${b.signInWithSolana.chainId}`]:[],...!((l=b==null?void 0:b.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${b.signInWithSolana.nonce}`]:[],...!((c=b==null?void 0:b.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${b.signInWithSolana.requestId}`]:[],...!((h=(u=b==null?void 0:b.signInWithSolana)===null||u===void 0?void 0:u.resources)===null||h===void 0)&&h.length?["Resources",...b.signInWithSolana.resources.map(C=>`- ${C}`)]:[]].join(`
`);const O=await k.signMessage(new TextEncoder().encode(g),"utf8");if(!O||!(O instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");m=O}}try{const{data:w,error:x}=await E(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:g,signature:_t(m)},!((f=e.options)===null||f===void 0)&&f.captchaToken?{gotrue_meta_security:{captcha_token:(p=e.options)===null||p===void 0?void 0:p.captchaToken}}:null),xform:pe});if(x)throw x;if(!w||!w.session||!w.user){const _=new jt;return this._returnResult({data:{user:null,session:null},error:_})}return w.session&&(await this._saveSession(w.session),await this._notifyAllSubscribers("SIGNED_IN",w.session)),this._returnResult({data:Object.assign({},w),error:x})}catch(w){if(S(w))return this._returnResult({data:{user:null,session:null},error:w});throw w}}async _exchangeCodeForSession(e,s){const i=(s==null?void 0:s.flowId)!=null,r=i?Qs(s==null?void 0:s.flowId):Z()?Qs(Pn(window.location.href)[xt]):null;i&&!r&&this._debug("#_exchangeCodeForSession()","provided flowId is not a valid flow id",s==null?void 0:s.flowId);const{verifier:n,flowId:a}=i&&!r?{verifier:null,flowId:null}:await od(this.storage,this.storageKey,r),[o,l]=(n??"").split("/");try{if(!o&&this.flowType==="pkce")throw new Hc;const{data:c,error:u}=await E(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:o},xform:pe});if(await ye(this.storage,this.storageKey,a),u)throw u;if(!c||!c.session||!c.user){const h=new jt;return this._returnResult({data:{user:null,session:null,redirectType:null},error:h})}return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers(l==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",c.session)),this._returnResult({data:Object.assign(Object.assign({},c),{redirectType:l??null}),error:u})}catch(c){if(await ye(this.storage,this.storageKey,a),S(c))return this._returnResult({data:{user:null,session:null,redirectType:null},error:c});throw c}}async signInWithIdToken(e){try{const{options:s,provider:i,token:r,access_token:n,nonce:a}=e,o=await E(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:i,id_token:r,access_token:n,nonce:a,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},xform:pe}),{data:l,error:c}=o;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!l||!l.session||!l.user){const u=new jt;return this._returnResult({data:{user:null,session:null},error:u})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:l,error:c})}catch(s){if(S(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithOtp(e){var s,i,r,n,a;let o=null;try{if("email"in e){const{email:l,options:c}=e;let u=null,h=null;this.flowType==="pkce"&&([u,h,o]=await this._getCodeChallengeAndMethod());const{error:f}=await E(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:l,data:(s=c==null?void 0:c.data)!==null&&s!==void 0?s:{},create_user:(i=c==null?void 0:c.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},code_challenge:u,code_challenge_method:h},redirectTo:this._maybeAppendFlowIdToRedirect(c==null?void 0:c.emailRedirectTo,o)});return this._returnResult({data:{user:null,session:null},error:f})}if("phone"in e){const{phone:l,options:c}=e,{data:u,error:h}=await E(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:l,data:(r=c==null?void 0:c.data)!==null&&r!==void 0?r:{},create_user:(n=c==null?void 0:c.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},channel:(a=c==null?void 0:c.channel)!==null&&a!==void 0?a:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:u==null?void 0:u.message_id},error:h})}throw new qs("You must provide either an email or phone number.")}catch(l){if(await ye(this.storage,this.storageKey,o),S(l))return this._returnResult({data:{user:null,session:null},error:l});throw l}}async verifyOtp(e){var s,i;try{let r,n;"options"in e&&(r=(s=e.options)===null||s===void 0?void 0:s.redirectTo,n=(i=e.options)===null||i===void 0?void 0:i.captchaToken);const{data:a,error:o}=await E(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:n}}),redirectTo:r,xform:pe});if(o)throw o;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,c=a.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(r){if(S(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithSSO(e){var s,i,r,n;let a=null;try{let o=null,l=null;this.flowType==="pkce"&&([o,l,a]=await this._getCodeChallengeAndMethod());const c=await E(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:this._maybeAppendFlowIdToRedirect((s=e.options)===null||s===void 0?void 0:s.redirectTo,a)}),!((i=e==null?void 0:e.options)===null||i===void 0)&&i.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:o,code_challenge_method:l}),headers:this.headers,xform:bd});return!((r=c.data)===null||r===void 0)&&r.url&&Z()&&!(!((n=e.options)===null||n===void 0)&&n.skipBrowserRedirect)&&window.location.assign(c.data.url),this._returnResult(c)}catch(o){if(await ye(this.storage,this.storageKey,a),S(o))return this._returnResult({data:null,error:o});throw o}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:s},error:i}=e;if(i)throw i;if(!s)throw new X;const{error:r}=await E(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:s.access_token});return this._returnResult({data:{user:null,session:null},error:r})})}catch(e){if(S(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){let s=null;try{const i=`${this.url}/resend`;if("email"in e){const{email:r,type:n,options:a}=e;let o=null,l=null;this.flowType==="pkce"&&([o,l,s]=await this._getCodeChallengeAndMethod());const{error:c}=await E(this.fetch,"POST",i,{headers:this.headers,body:{email:r,type:n,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken},code_challenge:o,code_challenge_method:l},redirectTo:this._maybeAppendFlowIdToRedirect(a==null?void 0:a.emailRedirectTo,s)});return c&&await ye(this.storage,this.storageKey,s),this._returnResult({data:{user:null,session:null},error:c})}else if("phone"in e){const{phone:r,type:n,options:a}=e,{data:o,error:l}=await E(this.fetch,"POST",i,{headers:this.headers,body:{phone:r,type:n,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:o==null?void 0:o.message_id},error:l})}throw new qs("You must provide either an email or phone number and a type")}catch(i){if(await ye(this.storage,this.storageKey,s),S(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,s){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const i=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),r=(async()=>(await i,await s()))();return this.pendingInLock.push((async()=>{try{await r}catch{}})()),r}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const i=s();for(this.pendingInLock.push((async()=>{try{await i}catch{}})()),await i;this.pendingInLock.length;){const r=[...this.pendingInLock];await Promise.all(r),this.pendingInLock.splice(0,r.length)}return await i}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const s=await this.__loadSession();return await e(s)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const s=await ee(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",s),s!==null&&(this._isValidSession(s)?e=s:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const i=e.expires_at?e.expires_at*1e3-Date.now()<Bi:!1;if(this._debug("#__loadSession()",`session has${i?"":" not"} expired`,"expires_at",e.expires_at),!i){if(this.userStorage){const a=await ee(this.userStorage,this.storageKey+"-user");a!=null&&a.user?e.user=a.user:e.user=zi()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const a={value:this.suppressGetSessionWarning};e.user=md(e.user,a),a.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:r,error:n}=await this._callRefreshToken(e.refresh_token);if(n){if(!!(e.expires_at&&e.expires_at*1e3>Date.now())){const o=await ee(this.storage,this.storageKey);if(o&&o.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:n})}return this._returnResult({data:{session:r},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let s;return this.lock!=null?s=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):s=await this._getUser(),s.data.user&&(this.suppressGetSessionWarning=!0),s}async _getUser(e){try{return e?await E(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:ot}):await this._useSession(async s=>{var i,r,n;const{data:a,error:o}=s;if(o)throw o;return!(!((i=a.session)===null||i===void 0)&&i.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new X}:await E(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(n=(r=a.session)===null||r===void 0?void 0:r.access_token)!==null&&n!==void 0?n:void 0,xform:ot})})}catch(s){if(S(s))return Hs(s)&&await this._removeSession(),this._returnResult({data:{user:null},error:s});throw s}}async updateUser(e,s={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,s)):await this._updateUser(e,s)}async _updateUser(e,s={}){let i=null;try{return await this._useSession(async r=>{const{data:n,error:a}=r;if(a)throw a;if(!n.session)throw new X;const o=n.session;let l=null,c=null;this.flowType==="pkce"&&e.email!=null&&([l,c,i]=await this._getCodeChallengeAndMethod());const{data:u,error:h}=await E(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(s==null?void 0:s.emailRedirectTo,i),body:Object.assign(Object.assign({},e),{code_challenge:l,code_challenge_method:c}),jwt:o.access_token,xform:ot});if(h)throw h;return o.user=u.user,await this._saveSession(o),await this._notifyAllSubscribers("USER_UPDATED",o),this._returnResult({data:{user:o.user},error:null})})}catch(r){if(await ye(this.storage,this.storageKey,i),S(r))return this._returnResult({data:{user:null},error:r});throw r}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new X;const s=Date.now()/1e3;let i=s,r=!0,n=null;const{payload:a}=Ks(e.access_token);if(a.exp&&(i=a.exp,r=i<=s),r){const{data:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!o)return{data:{user:null,session:null},error:null};n=o}else{const{data:o,error:l}=await this._getUser(e.access_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});n={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:i-s,expires_at:i},await this._saveSession(n),await this._notifyAllSubscribers("SIGNED_IN",n)}return this._returnResult({data:{user:n.user,session:n},error:null})}catch(s){if(S(s))return this._returnResult({data:{session:null,user:null},error:s});throw s}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async s=>{var i;if(!e){const{data:a,error:o}=s;if(o)throw o;e=(i=a.session)!==null&&i!==void 0?i:void 0}if(!(e!=null&&e.refresh_token))throw new X;const{data:r,error:n}=await this._callRefreshToken(e.refresh_token);return n?this._returnResult({data:{user:null,session:null},error:n}):r?this._returnResult({data:{user:r.user,session:r},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(s){if(S(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async _getSessionFromURL(e,s){var i;try{if(!Z())throw new Gs("No browser detected.");if(e.error||e.error_description||e.error_code)throw new Gs(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(s){case"implicit":if(this.flowType==="pkce")throw new An("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Gs("Not a valid implicit grant flow url.");break;default:}if(s==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new An("No code detected.");const{data:b,error:k}=await this._exchangeCodeForSession(e.code,{flowId:e[xt]});if(k)throw k;const R=new URL(window.location.href);return R.searchParams.delete("code"),R.searchParams.delete(xt),window.history.replaceState(window.history.state,"",R.toString()),{data:{session:b.session,redirectType:(i=b.redirectType)!==null&&i!==void 0?i:null},error:null}}const{provider_token:r,provider_refresh_token:n,access_token:a,refresh_token:o,expires_in:l,expires_at:c,token_type:u}=e;if(!a||!l||!o||!u)throw new Gs("No session defined in URL");const h=Math.round(Date.now()/1e3),f=parseInt(l);let p=h+f;c&&(p=parseInt(c));const g=p-h;g*1e3<=Ge&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${g}s, should have been closer to ${f}s`);const m=p-f;h-m>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",m,p,h):h-m<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",m,p,h);const{data:w,error:x}=await this._getUser(a);if(x)throw x;const _={provider_token:r,provider_refresh_token:n,access_token:a,expires_in:f,expires_at:p,refresh_token:o,token_type:u,user:w.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:_,redirectType:e.type},error:null})}catch(r){if(S(r))return this._returnResult({data:{session:null,redirectType:null},error:r});throw r}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){if(!e.code)return!1;const s=Qs(e[xt]);return s&&await ee(this.storage,Kt(this.storageKey,s))?!0:!!await ee(this.storage,`${this.storageKey}-code-verifier`)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async s=>{var i;const r=async()=>{await this._removeSession()},{data:n,error:a}=s;if(a&&!Hs(a))return this._returnResult({error:a});const o=(i=n.session)===null||i===void 0?void 0:i.access_token;if(o){const{error:l}=await this.admin.signOut(o,e);if(l&&!(En(l)&&(l.status===404||l.status===401||l.status===403)||Hs(l)))return e!=="others"&&await r(),this._returnResult({error:l})}return e!=="others"&&await r(),this._returnResult({error:null})})}onAuthStateChange(e){const s=Xc(),i={id:s,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",s),this.stateChangeEmitters.delete(s)}};return this._debug("#onAuthStateChange()","registered callback with id",s),this.stateChangeEmitters.set(s,i),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(s)}):await this._emitInitialSession(s)))(),{data:{subscription:i}}}async _emitInitialSession(e){return await this._useSession(async s=>{var i,r;try{const{data:{session:n},error:a}=s;if(a)throw a;await((i=this.stateChangeEmitters.get(e))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",n)),this._debug("INITIAL_SESSION","callback id",e,"session",n)}catch(n){await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",n),Hs(n)||Ws(n)||En(n)&&(n.code==="refresh_token_not_found"||n.code==="refresh_token_already_used"||n.code==="session_expired")?console.warn(n):console.error(n)}})}async resetPasswordForEmail(e,s={}){let i=null,r=null,n=null;this.flowType==="pkce"&&([i,r,n]=await this._getCodeChallengeAndMethod(!0));try{return await E(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:i,code_challenge_method:r,gotrue_meta_security:{captcha_token:s.captchaToken}},headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(s.redirectTo,n)})}catch(a){if(await ye(this.storage,this.storageKey,n),S(a))return this._returnResult({data:null,error:a});throw a}}async getUserIdentities(){var e;try{const{data:s,error:i}=await this.getUser();if(i)throw i;return this._returnResult({data:{identities:(e=s.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var s;let i=null;try{const{data:r,error:n}=await this._useSession(async a=>{var o,l,c,u,h;const{data:f,error:p}=a;if(p)throw p;const{url:g,flowId:m}=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(o=e.options)===null||o===void 0?void 0:o.redirectTo,scopes:(l=e.options)===null||l===void 0?void 0:l.scopes,queryParams:(c=e.options)===null||c===void 0?void 0:c.queryParams,skipBrowserRedirect:!0});return i=m,await E(this.fetch,"GET",g,{headers:this.headers,jwt:(h=(u=f.session)===null||u===void 0?void 0:u.access_token)!==null&&h!==void 0?h:void 0})});if(n)throw n;return Z()&&!(!((s=e.options)===null||s===void 0)&&s.skipBrowserRedirect)&&window.location.assign(r==null?void 0:r.url),this._returnResult({data:{provider:e.provider,url:r==null?void 0:r.url,flowId:i},error:null})}catch(r){if(S(r))return this._returnResult({data:{provider:e.provider,url:null,flowId:i},error:r});throw r}}async linkIdentityIdToken(e){return await this._useSession(async s=>{var i;try{const{error:r,data:{session:n}}=s;if(r)throw r;const{options:a,provider:o,token:l,access_token:c,nonce:u}=e,h=await E(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(i=n==null?void 0:n.access_token)!==null&&i!==void 0?i:void 0,body:{provider:o,id_token:l,access_token:c,nonce:u,link_identity:!0,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:pe}),{data:f,error:p}=h;return p?this._returnResult({data:{user:null,session:null},error:p}):!f||!f.session||!f.user?this._returnResult({data:{user:null,session:null},error:new jt}):(f.session&&(await this._saveSession(f.session),await this._notifyAllSubscribers("USER_UPDATED",f.session)),this._returnResult({data:f,error:p}))}catch(r){if(await ye(this.storage,this.storageKey,null),S(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}})}async unlinkIdentity(e){try{return await this._useSession(async s=>{var i,r;const{data:n,error:a}=s;if(a)throw a;return await E(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(r=(i=n.session)===null||i===void 0?void 0:i.access_token)!==null&&r!==void 0?r:void 0})})}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}async _refreshAccessToken(e){const s="#_refreshAccessToken()";this._debug(s,"begin");try{const i=Date.now();return await ed(async r=>(r>0&&await Zc(200*Math.pow(2,r-1)),this._debug(s,"refreshing attempt",r),await E(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:pe})),(r,n)=>{const a=200*Math.pow(2,r);return n&&Ws(n)&&Date.now()+a-i<Ge})}catch(i){if(this._debug(s,"error",i),S(i))return this._returnResult({data:{session:null,user:null},error:i});throw i}finally{this._debug(s,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,s){const{url:i,flowId:r}=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:s.redirectTo,scopes:s.scopes,queryParams:s.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",s,"url",i),Z()&&!s.skipBrowserRedirect&&window.location.assign(i),{data:{provider:e,url:i,flowId:r},error:null}}async _recoverAndRefresh(){var e,s;const i="#_recoverAndRefresh()";this._debug(i,"begin");try{const r=await ee(this.storage,this.storageKey);if(r&&this.userStorage){let a=await ee(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!a&&(a={user:r.user},await We(this.userStorage,this.storageKey+"-user",a)),r.user=(e=a==null?void 0:a.user)!==null&&e!==void 0?e:zi()}else if(r&&!r.user&&!r.user){const a=await ee(this.storage,this.storageKey+"-user");a&&(a!=null&&a.user)?(r.user=a.user,await ne(this.storage,this.storageKey+"-user"),await We(this.storage,this.storageKey,r)):r.user=zi()}if(this._debug(i,"session from storage",r),!this._isValidSession(r)){this._debug(i,"session is not valid"),r!==null&&await this._removeSession();return}const n=((s=r.expires_at)!==null&&s!==void 0?s:1/0)*1e3-Date.now()<Bi;if(this._debug(i,`session has${n?"":" not"} expired with margin of ${Bi}s`),n){if(this.autoRefreshToken&&r.refresh_token){const{error:a}=await this._callRefreshToken(r.refresh_token);a&&(qc(a)?this._debug(i,"refresh discarded by commit guard",a):this._debug(i,"refresh failed",a))}}else if(r.user&&r.user.__isUserNotAvailableProxy===!0)try{const{data:a,error:o}=await this._getUser(r.access_token);!o&&(a!=null&&a.user)?(r.user=a.user,await this._saveSession(r),await this._notifyAllSubscribers("SIGNED_IN",r)):this._debug(i,"could not get user data, skipping SIGNED_IN notification")}catch(a){console.error("Error getting user data:",a),this._debug(i,"error getting user data, skipping SIGNED_IN notification",a)}else await this._notifyAllSubscribers("SIGNED_IN",r)}catch(r){this._debug(i,"error",r),Ws(r)?console.warn(r):console.error(r);return}finally{this._debug(i,"end")}}async _callRefreshToken(e){var s,i;if(!e)throw new X;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const r="#_callRefreshToken()";this._debug(r,"begin");try{this.refreshingDeferred=new fi;const n=await ee(this.storage,this.storageKey),{data:a,error:o}=await this._refreshAccessToken(e);if(o)throw o;if(!a.session)throw new X;const l=await ee(this.storage,this.storageKey);if(n!==null&&(l===null||l.refresh_token!==n.refresh_token)){this._debug(r,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:l?"replaced":"cleared"});const f={data:null,error:new Tn};return this.refreshingDeferred.resolve(f),f}const u=this._sessionRemovalEpoch;if(await this._saveSession(a.session),this._sessionRemovalEpoch!==u){this._debug(r,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await ne(this.storage,this.storageKey),this.userStorage&&await ne(this.userStorage,this.storageKey+"-user");const f={data:null,error:new Tn};return this.refreshingDeferred.resolve(f),f}await this._notifyAllSubscribers("TOKEN_REFRESHED",a.session);const h={data:a.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(h),h}catch(n){if(this._debug(r,"error",n),S(n)){const a={data:null,error:n};if(!Ws(n)){const o=await ee(this.storage,this.storageKey);!!(o!=null&&o.expires_at&&o.expires_at*1e3>Date.now())?this._debug(r,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:a,expiresAt:Date.now()+Dc},(s=this.refreshingDeferred)===null||s===void 0||s.resolve(a),a}throw(i=this.refreshingDeferred)===null||i===void 0||i.reject(n),n}finally{this.refreshingDeferred=null,this._debug(r,"end")}}async _notifyAllSubscribers(e,s,i=!0){if(this._pendingInitNotifications!==null&&i){this._pendingInitNotifications.push({event:e,session:s,broadcast:i});return}const r=`#_notifyAllSubscribers(${e})`;this._debug(r,"begin",s,`broadcast = ${i}`);try{this.broadcastChannel&&i&&this.broadcastChannel.postMessage({event:e,session:s});const n=[],a=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,s)}catch(l){n.push(l)}});if(await Promise.all(a),n.length>0){for(let o=0;o<n.length;o+=1)console.error(n[o]);throw n[0]}}finally{this._debug(r,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0;const s=Object.assign({},e),i=s.user&&s.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!i&&s.user&&await We(this.userStorage,this.storageKey+"-user",{user:s.user});const r=Object.assign({},s);delete r.user;const n=Dn(r);await We(this.storage,this.storageKey,n)}else{const r=Dn(s);await We(this.storage,this.storageKey,r)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await ne(this.storage,this.storageKey),await ld(this.storage,this.storageKey),await ne(this.storage,this.storageKey+"-user"),this.userStorage&&await ne(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&Z()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(s){console.error("removing visibilitychange callback failed",s)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),Ge);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const s=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=s,s&&typeof s=="object"&&typeof s.unref=="function"?s.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(s)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const s=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,s&&clearTimeout(s)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async s=>{const{data:{session:i}}=s;if(!i||!i.refresh_token||!i.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const r=Math.floor((i.expires_at*1e3-e)/Ge);this._debug("#_autoRefreshTokenTick()",`access token expires in ${r} ticks, a tick lasts ${Ge}ms, refresh threshold is ${as} ticks`),r<=as&&await this._callRefreshToken(i.refresh_token)})}catch(s){console.error("Auto refresh tick failed with error. This is likely a transient error.",s)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof kd)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const e=Date.now();try{await this._useSession(async s=>{const{data:{session:i}}=s;if(!i||!i.refresh_token||!i.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const r=Math.floor((i.expires_at*1e3-e)/Ge);this._debug("#_autoRefreshTokenTick()",`access token expires in ${r} ticks, a tick lasts ${Ge}ms, refresh threshold is ${as} ticks`),r<=as&&await this._callRefreshToken(i.refresh_token)})}catch(s){console.error("Auto refresh tick failed with error. This is likely a transient error.",s)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Z()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const s=`#_onVisibilityChanged(${e})`;if(this._debug(s,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(s,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(s,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,s,i){let r=i==null?void 0:i.redirectTo,n=null,a=null,o=null;this.flowType==="pkce"&&([n,a,o]=await this._getCodeChallengeAndMethod(),r=this._maybeAppendFlowIdToRedirect(r,o));const l=[`provider=${encodeURIComponent(s)}`];if(r&&l.push(`redirect_to=${encodeURIComponent(r)}`),i!=null&&i.scopes&&l.push(`scopes=${encodeURIComponent(i.scopes)}`),n!=null&&a!=null){const c=new URLSearchParams({code_challenge:`${encodeURIComponent(n)}`,code_challenge_method:`${encodeURIComponent(a)}`});l.push(c.toString())}if(i!=null&&i.queryParams){const c=new URLSearchParams(i.queryParams);l.push(c.toString())}return i!=null&&i.skipBrowserRedirect&&l.push(`skip_http_redirect=${i.skipBrowserRedirect}`),{url:`${e}?${l.join("&")}`,flowId:o}}_maybeAppendFlowIdToRedirect(e,s){return!e||!s||!this.experimental.appendPkceFlowIdToRedirects?e??void 0:cd(e,s)}async _getCodeChallengeAndMethod(e=!1){return dd(this.storage,this.storageKey,e,s=>this._debug("#_getCodeChallengeAndMethod()","evicted oldest pending PKCE verifier slot",s))}async _unenroll(e){try{return await this._useSession(async s=>{var i;const{data:r,error:n}=s;return n?this._returnResult({data:null,error:n}):await E(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(i=r==null?void 0:r.session)===null||i===void 0?void 0:i.access_token})})}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}async _enroll(e){try{return await this._useSession(async s=>{var i,r;const{data:n,error:a}=s;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:l,error:c}=await E(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(i=n==null?void 0:n.session)===null||i===void 0?void 0:i.access_token});return c?this._returnResult({data:null,error:c}):(e.factorType==="totp"&&l.type==="totp"&&(!((r=l==null?void 0:l.totp)===null||r===void 0)&&r.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),this._returnResult({data:l,error:null}))})}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}async _verify(e){const s=async()=>{try{return await this._useSession(async i=>{var r;const{data:n,error:a}=i;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?zn(e.webauthn.credential_response):Hn(e.webauthn.credential_response)})}:{code:e.code}),{data:l,error:c}=await E(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:o,headers:this.headers,jwt:(r=n==null?void 0:n.session)===null||r===void 0?void 0:r.access_token});return c?this._returnResult({data:null,error:c}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+l.expires_in},l)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",l),this._returnResult({data:l,error:c}))})}catch(i){if(S(i))return this._returnResult({data:null,error:i});throw i}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,s):s()}async _challenge(e){const s=async()=>{try{return await this._useSession(async i=>{var r;const{data:n,error:a}=i;if(a)return this._returnResult({data:null,error:a});const o=await E(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(r=n==null?void 0:n.session)===null||r===void 0?void 0:r.access_token});if(o.error)return o;const{data:l}=o;if(l.type!=="webauthn")return{data:l,error:null};switch(l.webauthn.type){case"create":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:Fn(l.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:Bn(l.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(i){if(S(i))return this._returnResult({data:null,error:i});throw i}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,s):s()}async _challengeAndVerify(e){const{data:s,error:i}=await this._challenge({factorId:e.factorId});return i?this._returnResult({data:null,error:i}):await this._verify({factorId:e.factorId,challengeId:s.id,code:e.code})}async _listFactors(){var e;const{data:{user:s},error:i}=await this.getUser();if(i)return{data:null,error:i};const r={all:[],phone:[],totp:[],webauthn:[]};for(const n of(e=s==null?void 0:s.factors)!==null&&e!==void 0?e:[])r.all.push(n),n.status==="verified"&&r[n.factor_type].push(n);return{data:r,error:null}}async _getAuthenticatorAssuranceLevel(e){var s,i,r,n;if(e)try{const{payload:p}=Ks(e);let g=null;p.aal&&(g=p.aal);let m=g;const{data:{user:w},error:x}=await this.getUser(e);if(x)return this._returnResult({data:null,error:x});((i=(s=w==null?void 0:w.factors)===null||s===void 0?void 0:s.filter(k=>k.status==="verified"))!==null&&i!==void 0?i:[]).length>0&&(m="aal2");const b=p.amr||[];return{data:{currentLevel:g,nextLevel:m,currentAuthenticationMethods:b},error:null}}catch(p){if(S(p))return this._returnResult({data:null,error:p});throw p}const{data:{session:a},error:o}=await this.getSession();if(o)return this._returnResult({data:null,error:o});if(!a)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:l}=Ks(a.access_token);let c=null;l.aal&&(c=l.aal);let u=c;((n=(r=a.user.factors)===null||r===void 0?void 0:r.filter(p=>p.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(u="aal2");const f=l.amr||[];return{data:{currentLevel:c,nextLevel:u,currentAuthenticationMethods:f},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async s=>{const{data:{session:i},error:r}=s;return r?this._returnResult({data:null,error:r}):i?await E(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:i.access_token,xform:n=>({data:n,error:null})}):this._returnResult({data:null,error:new X})})}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}async _approveAuthorization(e,s){try{return await this._useSession(async i=>{const{data:{session:r},error:n}=i;if(n)return this._returnResult({data:null,error:n});if(!r)return this._returnResult({data:null,error:new X});const a=await E(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:"approve"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&Z()&&!(s!=null&&s.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(i){if(S(i))return this._returnResult({data:null,error:i});throw i}}async _denyAuthorization(e,s){try{return await this._useSession(async i=>{const{data:{session:r},error:n}=i;if(n)return this._returnResult({data:null,error:n});if(!r)return this._returnResult({data:null,error:new X});const a=await E(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:"deny"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&Z()&&!(s!=null&&s.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(i){if(S(i))return this._returnResult({data:null,error:i});throw i}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:s},error:i}=e;return i?this._returnResult({data:null,error:i}):s?await E(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:s.access_token,xform:r=>({data:r,error:null})}):this._returnResult({data:null,error:new X})})}catch(e){if(S(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async s=>{const{data:{session:i},error:r}=s;return r?this._returnResult({data:null,error:r}):i?(await E(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:i.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new X})})}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}async fetchJwk(e,s={keys:[]}){let i=s.keys.find(o=>o.kid===e);if(i)return i;const r=Date.now();if(i=this.jwks.keys.find(o=>o.kid===e),i&&this.jwks_cached_at+Fc>r)return i;const{data:n,error:a}=await E(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!n.keys||n.keys.length===0||(this.jwks=n,this.jwks_cached_at=r,i=n.keys.find(o=>o.kid===e),!i)?null:i}async getClaims(e,s={}){try{let i=e;if(!i){const{data:p,error:g}=await this.getSession();if(g||!p.session)return this._returnResult({data:null,error:g});i=p.session.access_token}const{header:r,payload:n,signature:a,raw:{header:o,payload:l}}=Ks(i);if(!(s!=null&&s.allowExpired))try{pd(n.exp)}catch(p){throw new ii(p instanceof Error?p.message:"JWT validation failed")}const c=!r.alg||r.alg.startsWith("HS")||!r.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(r.kid,s!=null&&s.keys?{keys:s.keys}:s==null?void 0:s.jwks);if(!c){const{error:p}=await this.getUser(i);if(p)throw p;return{data:{claims:n,header:r,signature:a},error:null}}const u=fd(r.alg),h=await crypto.subtle.importKey("jwk",c,u,!0,["verify"]);if(!await crypto.subtle.verify(u,h,a,Jc(`${o}.${l}`)))throw new ii("Invalid JWT signature");return{data:{claims:n,header:r,signature:a},error:null}}catch(i){if(S(i))return this._returnResult({data:null,error:i});throw i}}async signInWithPasskey(e){var s,i,r;be(this.experimental);try{if(!ai())return this._returnResult({data:null,error:new xe("Browser does not support WebAuthn",null)});const{data:n,error:a}=await this._startPasskeyAuthentication({options:{captchaToken:(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.captchaToken}});if(a||!n)return this._returnResult({data:null,error:a});const o=Bn(n.options),l=(r=(i=e==null?void 0:e.options)===null||i===void 0?void 0:i.signal)!==null&&r!==void 0?r:nr.createNewAbortSignal(),{data:c,error:u}=await Ua({publicKey:o,signal:l});if(u||!c)return this._returnResult({data:null,error:u??new xe("WebAuthn ceremony failed",null)});const h=Hn(c);return this._verifyPasskeyAuthentication({challengeId:n.challenge_id,credential:h})}catch(n){if(S(n))return this._returnResult({data:null,error:n});throw n}}async registerPasskey(e){var s,i;be(this.experimental);try{if(!ai())return this._returnResult({data:null,error:new xe("Browser does not support WebAuthn",null)});const{data:r,error:n}=await this._startPasskeyRegistration();if(n||!r)return this._returnResult({data:null,error:n});const a=Fn(r.options),o=(i=(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.signal)!==null&&i!==void 0?i:nr.createNewAbortSignal(),{data:l,error:c}=await La({publicKey:a,signal:o});if(c||!l)return this._returnResult({data:null,error:c??new xe("WebAuthn ceremony failed",null)});const u=zn(l);return this._verifyPasskeyRegistration({challengeId:r.challenge_id,credential:u})}catch(r){if(S(r))return this._returnResult({data:null,error:r});throw r}}async _startPasskeyRegistration(){be(this.experimental);try{return await this._useSession(async e=>{const{data:{session:s},error:i}=e;if(i)return this._returnResult({data:null,error:i});if(!s)return this._returnResult({data:null,error:new X});const{data:r,error:n}=await E(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:s.access_token,body:{}});return n?this._returnResult({data:null,error:n}):this._returnResult({data:r,error:null})})}catch(e){if(S(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){be(this.experimental);try{return await this._useSession(async s=>{const{data:{session:i},error:r}=s;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new X});const{data:n,error:a}=await E(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:i.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:n,error:null})})}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}async _startPasskeyAuthentication(e){var s;be(this.experimental);try{const{data:i,error:r}=await E(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.captchaToken}}});return r?this._returnResult({data:null,error:r}):this._returnResult({data:i,error:null})}catch(i){if(S(i))return this._returnResult({data:null,error:i});throw i}}async _verifyPasskeyAuthentication(e){be(this.experimental);try{const{data:s,error:i}=await E(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:pe});return i?this._returnResult({data:null,error:i}):(s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),this._returnResult({data:s,error:null}))}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}async _listPasskeys(){be(this.experimental);try{return await this._useSession(async e=>{const{data:{session:s},error:i}=e;if(i)return this._returnResult({data:null,error:i});if(!s)return this._returnResult({data:null,error:new X});const{data:r,error:n}=await E(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:s.access_token,xform:a=>({data:a,error:null})});return n?this._returnResult({data:null,error:n}):this._returnResult({data:r,error:null})})}catch(e){if(S(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){be(this.experimental);try{return await this._useSession(async s=>{const{data:{session:i},error:r}=s;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new X});const{data:n,error:a}=await E(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:i.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:n,error:null})})}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}async _deletePasskey(e){be(this.experimental);try{return await this._useSession(async s=>{const{data:{session:i},error:r}=s;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new X});const{error:n}=await E(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:i.access_token,noResolveJson:!0});return n?this._returnResult({data:null,error:n}):this._returnResult({data:null,error:null})})}catch(s){if(S(s))return this._returnResult({data:null,error:s});throw s}}}xs.nextInstanceID={};const Nd=xs,Ld="2.112.3";let os="",li;if(typeof Deno<"u"){var qi;os="deno",li=(qi=Deno.version)===null||qi===void 0?void 0:qi.deno}else if(typeof document<"u")os="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")os="react-native";else{var Gi;os="node";const t=globalThis.process;li=t==null||(Gi=t.version)===null||Gi===void 0?void 0:Gi.replace(/^v/,"")}const Fa=[`runtime=${os}`];li&&Fa.push(`runtime-version=${li}`);const Ud={"X-Client-Info":`supabase-js/${Ld}; ${Fa.join("; ")}`},Fd={headers:Ud},Bd={schema:"public"},zd={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},Hd={},qd={enabled:!1,respectSamplingDecision:!0};function Gd(t){if(!t||typeof t!="string")return null;const e=t.split("-");if(e.length!==4)return null;const[s,i,r,n]=e;if(s.length!==2||i.length!==32||r.length!==16||n.length!==2)return null;const a=/^[0-9a-f]+$/i;return!a.test(s)||!a.test(i)||!a.test(r)||!a.test(n)||i==="00000000000000000000000000000000"||r==="0000000000000000"?null:{version:s,traceId:i,parentId:r,traceFlags:n,isSampled:(parseInt(n,16)&1)===1}}function Wd(t,e){if(!t||!e||e.length===0)return!1;let s;if(t instanceof URL)s=t;else try{s=new URL(t)}catch{return!1}for(const i of e)try{if(typeof i=="string"){if(Kd(s.hostname,i))return!0}else if(i instanceof RegExp){if(i.test(s.hostname))return!0}else if(typeof i=="function"&&i(s))return!0}catch{continue}return!1}function Kd(t,e){if(e===t)return!0;if(e.startsWith("*.")){const s=e.slice(2);if(t.endsWith(s)&&(t===s||t.endsWith("."+s)))return!0}return!1}function Vd(t){const e=[];try{const s=new URL(t);e.push(s.hostname)}catch{}return e.push("*.supabase.co","*.supabase.in"),e.push("localhost","127.0.0.1","[::1]"),e}function _s(t){"@babel/helpers - typeof";return _s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_s(t)}function Jd(t,e){if(_s(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var i=s.call(t,e);if(_s(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Yd(t){var e=Jd(t,"string");return _s(e)=="symbol"?e:e+""}function Xd(t,e,s){return(e=Yd(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function qn(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),s.push.apply(s,i)}return s}function q(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?qn(Object(s),!0).forEach(function(i){Xd(t,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):qn(Object(s)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))})}return t}const Qd=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),Zd=()=>Headers,Ba=t=>t.startsWith("sb_publishable_")||t.startsWith("sb_secret_"),eu="sb_temp_",Gn=new Set,tu=t=>{var e,s;if(!t.startsWith("sb_")||Ba(t)||t.startsWith(eu))return;const i=(e=(s=t.match(/^sb_[a-zA-Z0-9]+_/))===null||s===void 0?void 0:s[0])!==null&&e!==void 0?e:"unknown";Gn.has(i)||(Gn.add(i),console.warn("@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type."))},Wn=(t,e,s,i,r,n)=>{const a=Qd(i),o=Zd(),l=(r==null?void 0:r.enabled)===!0,c=(r==null?void 0:r.respectSamplingDecision)!==!1,u=l?Vd(e):null,h=!(n!=null&&n.omitApiKeyAsBearer&&Ba(t));return async(f,p)=>{const g=await s();let m=new o(p==null?void 0:p.headers);if(m.has("apikey")||m.set("apikey",t),!m.has("Authorization")){const w=g??(h?t:null);w&&m.set("Authorization",`Bearer ${w}`)}if(u){const w=su(f,u,c);w&&(w.traceparent&&!m.has("traceparent")&&m.set("traceparent",w.traceparent),w.tracestate&&!m.has("tracestate")&&m.set("tracestate",w.tracestate),w.baggage&&!m.has("baggage")&&m.set("baggage",w.baggage))}return a(f,q(q({},p),{},{headers:m}))}};let Kn=!1,Vn=!1;function su(t,e,s){const i=tl();if(!i)return Kn||(Kn=!0,console.warn("@supabase/supabase-js: tracePropagation is enabled but the tracing runtime is not loaded, so trace headers will not be attached. Add `import '@supabase/supabase-js/tracing'` at your application entry point (requires the OpenTelemetry API package to be installed). The CDN/UMD build does not support trace propagation.")),null;if(!Wd(typeof t=="string"||t instanceof URL?t:t.url,e))return null;const r=i();if(!r||!r.traceparent){var n;if(!(r==null||(n=r.carrierKeys)===null||n===void 0)&&n.length&&!Vn){Vn=!0;const a=r.carrierKeys.includes("sentry-trace")?" Sentry detected: set `propagateTraceparent: true` in Sentry.init() to emit it.":" Configure your tracing SDK to emit W3C trace context on outgoing requests.";console.warn(`@supabase/supabase-js: tracePropagation is enabled and a tracing SDK is active, but its propagator wrote [${r.carrierKeys.join(", ")}] and no W3C traceparent header, so trace headers will not be attached.`+a)}return null}if(s){const a=Gd(r.traceparent);if(a&&!a.isSampled)return{traceparent:r.traceparent}}return r}function Jn(t){return typeof t=="boolean"?{enabled:t}:t}function iu(t){return t.endsWith("/")?t:t+"/"}function ru(t,e){var s,i,r,n,a,o;const{db:l,auth:c,realtime:u,global:h}=t,{db:f,auth:p,realtime:g,global:m}=e,w=Jn(t.tracePropagation),x=Jn(e.tracePropagation),_={db:q(q({},f),l),auth:q(q({},p),c),realtime:q(q({},g),u),storage:{},global:q(q(q({},m),h),{},{headers:q(q({},(s=m==null?void 0:m.headers)!==null&&s!==void 0?s:{}),(i=h==null?void 0:h.headers)!==null&&i!==void 0?i:{})}),tracePropagation:{enabled:(r=(n=w==null?void 0:w.enabled)!==null&&n!==void 0?n:x==null?void 0:x.enabled)!==null&&r!==void 0?r:!1,respectSamplingDecision:(a=(o=w==null?void 0:w.respectSamplingDecision)!==null&&o!==void 0?o:x==null?void 0:x.respectSamplingDecision)!==null&&a!==void 0?a:!0},accessToken:async()=>""};return t.accessToken?_.accessToken=t.accessToken:delete _.accessToken,_}function nu(t){const e=t==null?void 0:t.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(iu(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var au=class extends Nd{constructor(t){super(t)}},ou=class{constructor(t,e,s){var i,r;this.supabaseUrl=t,this.supabaseKey=e;const n=nu(t);if(!e)throw new Error("supabaseKey is required.");tu(e),this.realtimeUrl=new URL("realtime/v1",n),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",n),this.storageUrl=new URL("storage/v1",n),this.functionsUrl=new URL("functions/v1",n);const a=`sb-${n.hostname.split(".")[0]}-auth-token`,o={db:Bd,realtime:Hd,auth:q(q({},zd),{},{storageKey:a}),global:Fd,tracePropagation:qd},l=ru(s??{},o);if(this.settings=l,this.storageKey=(i=l.auth.storageKey)!==null&&i!==void 0?i:"",this.headers=(r=l.global.headers)!==null&&r!==void 0?r:{},l.accessToken)this.accessToken=l.accessToken,this.auth=new Proxy({},{get:(u,h)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(h)} is not possible`)}});else{var c;this.auth=this._initSupabaseAuthClient((c=l.auth)!==null&&c!==void 0?c:{},this.headers,l.global.fetch)}this.fetch=Wn(e,t,this._getSessionToken.bind(this),l.global.fetch,l.tracePropagation),this.functionsFetch=Wn(e,t,this._getSessionToken.bind(this),l.global.fetch,l.tracePropagation,{omitApiKeyAsBearer:!0}),this.realtime=this._initRealtimeClient(q({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},l.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(u=>this.realtime.setAuth(u)).catch(u=>console.warn("Failed to set initial Realtime auth token:",u)),this.rest=new fl(new URL("rest/v1",n).href,{headers:this.headers,schema:l.db.schema,fetch:this.fetch,timeout:l.db.timeout,urlLengthLimit:l.db.urlLengthLimit,retry:l.db.retry}),this.storage=new Pc(this.storageUrl.href,this.headers,this.fetch,s==null?void 0:s.storage),l.accessToken||this._listenForAuthEvents()}get functions(){return new nl(this.functionsUrl.href,{headers:this.headers,customFetch:this.functionsFetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,e={},s={head:!1,get:!1,count:void 0}){return this.rest.rpc(t,e,s)}channel(t,e={config:{}}){return this.realtime.channel(t,e)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getSessionToken(){var t=this,e,s;if(t.accessToken)return await t.accessToken();const{data:i}=await t.auth.getSession();return(e=(s=i.session)===null||s===void 0?void 0:s.access_token)!==null&&e!==void 0?e:null}async _getAccessToken(){var t=this,e;return(e=await t._getSessionToken())!==null&&e!==void 0?e:t.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:e,detectSessionInUrl:s,storage:i,userStorage:r,storageKey:n,flowType:a,lock:o,debug:l,throwOnError:c,experimental:u,lockAcquireTimeout:h,skipAutoInitialize:f},p,g){const m={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new au({url:this.authUrl.href,headers:q(q({},m),p),storageKey:n,autoRefreshToken:t,persistSession:e,detectSessionInUrl:s,storage:i,userStorage:r,flowType:a,lock:o,debug:l,throwOnError:c,experimental:u,fetch:g,lockAcquireTimeout:h,skipAutoInitialize:f,hasCustomAuthorizationHeader:Object.keys(this.headers).some(w=>w.toLowerCase()==="authorization")})}_initRealtimeClient(t){return new ic(this.realtimeUrl.href,q(q({},t),{},{params:q(q({},{apikey:this.supabaseKey}),t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,e)=>{this._handleTokenChanged(t,"CLIENT",e==null?void 0:e.access_token)})}_handleTokenChanged(t,e,s){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN"||t==="INITIAL_SESSION")&&this.changedAccessToken!==s?(this.changedAccessToken=s,this.realtime.setAuth(s)):t==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const lu=(t,e,s)=>new ou(t,e,s);function cu(){if(typeof window<"u"||globalThis.Deno!==void 0)return!1;const t=globalThis.process;if(!t)return!1;const e=t.version;if(e==null)return!1;const s=e.match(/^v(\d+)\./);return s?parseInt(s[1],10)<=20:!1}cu()&&console.warn("⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715");function du(){try{return"https://pmipcwurbabnqylquwoc.supabase.co"}catch{return}}function uu(){try{return"sb_publishable_Lqb3d2VqAphbfGt3UBnang_om5sQBVk"}catch{return}}function Vs(t){if(t&&t.trim())return t.trim();try{const e="https://warmsynths.github.io/practice-tracker/";if(e&&typeof e=="string"&&e.trim())return e.trim()}catch{}return typeof window<"u"&&window.location?window.location.origin+window.location.pathname:"http://localhost:5173"}class hu{constructor(e,s){this.client=null,this.currentUser=null,this.currentAccessToken=null,this.isLoading=!0,this.listeners=new Set,this.recoveryListeners=new Set;const i=e!==void 0?e:du(),r=s!==void 0?s:uu();if(i&&r)try{this.client=lu(i,r,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!0}}),this.client.auth.getSession().then(({data:n})=>{this.handleSession(n.session),this.isLoading=!1,this.notify()}),this.client.auth.onAuthStateChange((n,a)=>{this.handleSession(a),this.isLoading=!1,this.notify(),n==="PASSWORD_RECOVERY"&&this.notifyPasswordRecovery()})}catch(n){console.error("Failed to initialize Supabase Auth client:",n),this.isLoading=!1}else this.isLoading=!1}handleSession(e){e&&e.user?(this.currentUser={id:e.user.id,email:e.user.email},this.currentAccessToken=e.access_token):(this.currentUser=null,this.currentAccessToken=null)}notify(){const e=this.getAuthState();this.listeners.forEach(s=>s(e))}notifyPasswordRecovery(){this.recoveryListeners.forEach(e=>{try{e()}catch(s){console.error("Error in password recovery listener:",s)}})}onPasswordRecovery(e){return this.recoveryListeners.add(e),()=>{this.recoveryListeners.delete(e)}}hasRecoveryInUrl(){if(typeof window>"u"||!window.location)return!1;const e=window.location.hash||"",s=window.location.search||"";return e.includes("type=recovery")||s.includes("type=recovery")}subscribe(e){return this.listeners.add(e),e(this.getAuthState()),()=>{this.listeners.delete(e)}}isConfigured(){return this.client!==null}getAuthState(){return{user:this.currentUser,accessToken:this.currentAccessToken,isAuthenticated:!!this.currentUser&&!!this.currentAccessToken,isLoading:this.isLoading}}getUser(){return this.currentUser}async getAccessToken(){if(!this.client)return null;try{const{data:e}=await this.client.auth.getSession();if(e.session)return this.currentAccessToken=e.session.access_token,e.session.access_token}catch{}return this.currentAccessToken}async signUp(e,s,i){if(!this.client)return{success:!1,message:"Supabase credentials are not configured."};try{const r=Vs(i),{data:n,error:a}=await this.client.auth.signUp({email:e.trim(),password:s,options:{emailRedirectTo:r}});return a?{success:!1,message:a.message}:{success:!0,user:n.user||void 0}}catch(r){return{success:!1,message:r instanceof Error?r.message:String(r)}}}async signInWithPassword(e,s){if(!this.client)return{success:!1,message:"Supabase credentials are not configured."};try{const{data:i,error:r}=await this.client.auth.signInWithPassword({email:e.trim(),password:s});return r?{success:!1,message:r.message}:(this.handleSession(i.session),this.notify(),{success:!0})}catch(i){return{success:!1,message:i instanceof Error?i.message:String(i)}}}async signInWithOtp(e,s){if(!this.client)return{success:!1,message:"Supabase credentials are not configured."};try{const i=Vs(s),{error:r}=await this.client.auth.signInWithOtp({email:e.trim(),options:{emailRedirectTo:i}});return r?{success:!1,message:r.message}:{success:!0,message:"Check your email for the magic login link!"}}catch(i){return{success:!1,message:i instanceof Error?i.message:String(i)}}}async signInWithOAuth(e="google",s){if(!this.client)return{success:!1,message:"Supabase credentials are not configured."};try{const i=Vs(s),{error:r}=await this.client.auth.signInWithOAuth({provider:e,options:{redirectTo:i}});return r?{success:!1,message:r.message}:{success:!0}}catch(i){return{success:!1,message:i instanceof Error?i.message:String(i)}}}async resetPasswordForEmail(e,s){if(!this.client)return{success:!1,message:"Supabase credentials are not configured."};try{const i=Vs(s),{error:r}=await this.client.auth.resetPasswordForEmail(e.trim(),{redirectTo:i});return r?{success:!1,message:r.message}:{success:!0,message:"Password reset link sent to your email."}}catch(i){return{success:!1,message:i instanceof Error?i.message:String(i)}}}async updateUserPassword(e){if(!this.client)return{success:!1,message:"Supabase credentials are not configured."};try{const{error:s}=await this.client.auth.updateUser({password:e});return s?{success:!1,message:s.message}:{success:!0,message:"Password updated successfully."}}catch(s){return{success:!1,message:s instanceof Error?s.message:String(s)}}}async signOut(){if(!this.client)return this.currentUser=null,this.currentAccessToken=null,this.notify(),{success:!0};try{const{error:e}=await this.client.auth.signOut();return e?{success:!1,message:e.message}:(this.currentUser=null,this.currentAccessToken=null,this.notify(),{success:!0})}catch(e){return{success:!1,message:e instanceof Error?e.message:String(e)}}}}const V=new hu,Wi={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_REDIRECT_URL:"https://warmsynths.github.io/practice-tracker/",VITE_SUPABASE_ANON_KEY:"sb_publishable_Lqb3d2VqAphbfGt3UBnang_om5sQBVk",VITE_SUPABASE_URL:"https://pmipcwurbabnqylquwoc.supabase.co",VITE_SYNC_URL:"https://practice-tracker-sync.warmsynthsiloveyou.workers.dev"},gt=[{id:"guitar",name:"Guitar",color:"#6B7F6E",tier:"primary",glyphKind:"electric",updatedAt:new Date(0).toISOString()},{id:"piano",name:"Piano",color:"#8A7B94",tier:"primary",glyphKind:"piano",updatedAt:new Date(0).toISOString()},{id:"acoustic",name:"Acoustic Guitar",color:"#9FAF95",tier:"secondary",glyphKind:"acoustic",updatedAt:new Date(0).toISOString()},{id:"bass",name:"Bass",color:"#7D6E7F",tier:"secondary",glyphKind:"bass",updatedAt:new Date(0).toISOString()},{id:"drumming",name:"Finger Drumming",color:"#A98F72",tier:"secondary",glyphKind:"pads",updatedAt:new Date(0).toISOString()}],pu={id:"_removed",name:"Archived Instrument",color:"#C3C1B7",tier:"secondary",archived:!0,updatedAt:new Date(0).toISOString()},ve={SESSIONS:"ptSessionsV2",INSTRUMENTS:"ptInstrumentsV1",ACTIVE:"ptActiveSessionV1",SETTINGS:"ptSettingsV1",TOMBSTONES:"ptTombstonesV1"};function fu(){try{return"https://practice-tracker-sync.warmsynthsiloveyou.workers.dev"}catch{return}}function gu(){try{return(Wi==null?void 0:Wi.VITE_SYNC_PASSCODE)||void 0}catch{return}}function Lt(){try{if(typeof window<"u"&&window.localStorage)return window.localStorage;if(typeof localStorage<"u")return localStorage}catch{}return null}class mu{constructor(){this.instruments=[],this.sessions=[],this.activeSession=null,this.settings={soundEnabled:!0,hapticsEnabled:!0,theme:"plum",celebrateGoal:!0,heroGlyphAnimated:!0,reduceMotion:!1},this.tombstones=[],this.syncStatus="local",this.syncErrorMessage=null,this.listeners=new Set,this.currentSyncPromise=null,this.loadFromStorage(),this.initAuth()}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}notify(){this.listeners.forEach(e=>e())}initAuth(){V.subscribe(e=>{var s;if(!e.isLoading)if(e.isAuthenticated&&((s=e.user)!=null&&s.email)){const i=this.settings.userEmail;this.settings.userEmail=e.user.email,this.persistSettings(),i!==e.user.email&&this.syncWithCloud(!0).catch(r=>{console.warn("Initial cloud sync error after sign-in:",r)})}else!e.isAuthenticated&&this.settings.userEmail&&(this.instruments=[...gt],this.sessions=[],this.activeSession=null,this.tombstones=[],this.settings.userEmail=void 0,this.settings.lastSyncedAt=void 0,this.syncStatus="local",this.syncErrorMessage=null,this.persistInstruments(),this.persistSessions(),this.persistActive(),this.persistTombstones(),this.persistSettings(),this.notify())})}getEffectiveWorkerUrl(){return this.settings.workerUrl||fu()}getEffectiveSyncPasscode(){return this.settings.syncPasscode||gu()}getSyncAuthHeaderSync(){const e=V.getAuthState();return e.accessToken?`Bearer ${e.accessToken}`:this.getEffectiveSyncPasscode()}async getEffectiveAuthHeader(){const e=this.getSyncAuthHeaderSync();if(e)return e;const s=await V.getAccessToken();if(s)return`Bearer ${s}`}isCloudSyncConfigured(){const e=!!this.getEffectiveWorkerUrl(),s=V.getAuthState().isAuthenticated||!!this.getEffectiveSyncPasscode();return e&&s}getUserEmail(){var e;return((e=V.getUser())==null?void 0:e.email)||this.settings.userEmail}isAuthenticated(){return V.getAuthState().isAuthenticated}async signOut(){await V.signOut()}loadFromStorage(){const e=Lt();if(!e){this.instruments=[...gt],this.sessions=[],this.syncStatus="local";return}try{const s=e.getItem(ve.INSTRUMENTS);if(s){const o=JSON.parse(s);Array.isArray(o)&&o.length>0?this.instruments=o.map(l=>({...l,updatedAt:l.updatedAt||new Date(0).toISOString()})):this.instruments=[...gt]}else this.instruments=[...gt],this.persistInstruments();const i=e.getItem(ve.SESSIONS);if(i){const o=JSON.parse(i);Array.isArray(o)?this.sessions=o.map(l=>({...l,updatedAt:l.updatedAt||new Date(0).toISOString()})):this.sessions=[]}else this.sessions=[];const r=e.getItem(ve.ACTIVE);if(r){const o=JSON.parse(r);o&&o.instrumentId&&o.startedAt&&(this.activeSession=o)}const n=e.getItem(ve.TOMBSTONES);if(n){const o=JSON.parse(n);Array.isArray(o)&&(this.tombstones=o)}const a=e.getItem(ve.SETTINGS);a&&(this.settings={...this.settings,...JSON.parse(a)}),this.isCloudSyncConfigured()?this.syncStatus=typeof window<"u"&&typeof navigator<"u"&&navigator.onLine===!1?"offline":"synced":this.syncStatus="local"}catch(s){console.error("Error loading practice store from storage:",s),this.instruments=[...gt],this.sessions=[],this.syncStatus="local"}}persistInstruments(){try{const e=Lt();e==null||e.setItem(ve.INSTRUMENTS,JSON.stringify(this.instruments))}catch(e){console.error("Error saving instruments:",e)}}persistSessions(){try{const e=Lt();e==null||e.setItem(ve.SESSIONS,JSON.stringify(this.sessions))}catch(e){console.error("Error saving sessions:",e)}}persistActive(){try{const e=Lt();if(!e)return;this.activeSession?e.setItem(ve.ACTIVE,JSON.stringify(this.activeSession)):e.removeItem(ve.ACTIVE)}catch(e){console.error("Error saving active session:",e)}}persistSettings(){try{const e=Lt();e==null||e.setItem(ve.SETTINGS,JSON.stringify(this.settings))}catch(e){console.error("Error saving settings:",e)}}persistTombstones(){try{const e=Lt();e==null||e.setItem(ve.TOMBSTONES,JSON.stringify(this.tombstones))}catch(e){console.error("Error saving tombstones:",e)}}getActiveInstruments(){return this.instruments.filter(e=>!e.archived)}getAllInstruments(){return[...this.instruments]}getInstrument(e){return this.instruments.find(s=>s.id===e)||pu}getSessions(){return[...this.sessions]}getActiveSession(){return this.activeSession}getSettings(){return{...this.settings}}getSyncStatus(){return this.syncStatus}getSyncErrorMessage(){return this.syncErrorMessage}getLastSyncedAt(){return this.settings.lastSyncedAt||null}startSession(e){this.activeSession||(this.activeSession={instrumentId:e,startedAt:Date.now()},this.persistActive(),Qo(this.settings.soundEnabled),Li(20,this.settings.hapticsEnabled),this.notify())}endSession(e){if(!this.activeSession)return null;const s=Date.now(),i=Math.max(1,Math.round((s-this.activeSession.startedAt)/6e4)),r=new Date(s).toISOString(),n={id:"s-"+Math.random().toString(36).slice(2,9)+"-"+Date.now().toString(36),instrumentId:this.activeSession.instrumentId,start:new Date(this.activeSession.startedAt).toISOString(),end:r,duration:i,notes:e&&e.trim()?e.trim():void 0,updatedAt:r};return this.sessions=[n,...this.sessions],this.activeSession=null,this.persistSessions(),this.persistActive(),rt(this.settings.soundEnabled),Li([30,50,30],this.settings.hapticsEnabled),this.notify(),this.triggerBackgroundSync(),n}discardSession(){this.activeSession&&(this.activeSession=null,this.persistActive(),Ie(this.settings.soundEnabled),this.notify())}logManualSession(e,s,i,r){const n=new Date(s.getTime()+Math.max(1,i)*6e4),a=new Date().toISOString(),o={id:"m-"+Math.random().toString(36).slice(2,9)+"-"+Date.now().toString(36),instrumentId:e,start:s.toISOString(),end:n.toISOString(),duration:Math.max(1,Math.round(i)),notes:(r==null?void 0:r.trim())||void 0,updatedAt:a};return this.sessions=[o,...this.sessions],this.persistSessions(),rt(this.settings.soundEnabled),Li(25,this.settings.hapticsEnabled),this.notify(),this.triggerBackgroundSync(),o}updateSession(e){const s=new Date().toISOString(),i={...e,updatedAt:s};this.sessions=this.sessions.map(r=>r.id===e.id?i:r),this.persistSessions(),Ie(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}deleteSession(e){const s=new Date().toISOString();this.sessions=this.sessions.filter(i=>i.id!==e),this.tombstones=[...this.tombstones.filter(i=>i.id!==e),{id:e,type:"session",deletedAt:s}],this.persistSessions(),this.persistTombstones(),Ie(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}addInstrument(e,s,i){const r=e.trim(),n=Ko(r)+"-"+Math.random().toString(36).slice(2,6),a=new Date().toISOString(),o={id:n,name:r,color:s,tier:i,updatedAt:a};return this.instruments=[...this.instruments,o],this.persistInstruments(),Ie(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync(),o}updateInstrument(e){const s=new Date().toISOString(),i={...e,updatedAt:s};this.instruments=this.instruments.map(r=>r.id===e.id?i:r),this.persistInstruments(),Ie(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}removeInstrument(e){if(this.getActiveInstruments().length<=1)return;this.activeSession&&this.activeSession.instrumentId===e&&(this.activeSession=null,this.persistActive());const i=new Date().toISOString();this.sessions.some(n=>n.instrumentId===e)?this.instruments=this.instruments.map(n=>n.id===e?{...n,archived:!0,updatedAt:i}:n):(this.instruments=this.instruments.filter(n=>n.id!==e),this.tombstones=[...this.tombstones.filter(n=>n.id!==e),{id:e,type:"instrument",deletedAt:i}],this.persistTombstones()),this.persistInstruments(),Ie(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}retireInstrument(e){if(this.getActiveInstruments().length<=1)return;const i=new Date().toISOString();this.instruments=this.instruments.map(r=>r.id===e?{...r,archived:!0,updatedAt:i}:r),this.persistInstruments(),Ie(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}restoreInstrument(e){const s=new Date().toISOString();this.instruments=this.instruments.map(i=>i.id===e?{...i,archived:!1,updatedAt:s}:i),this.persistInstruments(),Ie(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}renameInstrument(e,s){const i=s.trim();if(!i)return;const r=new Date().toISOString();this.instruments=this.instruments.map(n=>n.id===e?{...n,name:i,updatedAt:r}:n),this.persistInstruments(),this.notify(),this.triggerBackgroundSync()}updateSessionDurationAndNote(e,s,i){const r=new Date().toISOString();this.sessions=this.sessions.map(n=>n.id===e?{...n,duration:Math.max(1,s),notes:i!==void 0?i.trim()?i.trim():void 0:n.notes,updatedAt:r}:n),this.persistSessions(),Ie(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}async testConnection(e,s){const i=e!==void 0?e:this.getEffectiveWorkerUrl()||"";let r=s;return r===void 0&&(r=await this.getEffectiveAuthHeader()),dn.testConnection(i,r)}triggerBackgroundSync(){this.isCloudSyncConfigured()&&!this.currentSyncPromise&&this.syncWithCloud().catch(e=>{console.warn("Background sync error:",e)})}async syncWithCloud(e=!1){if(this.currentSyncPromise){if(!e)return this.currentSyncPromise;await this.currentSyncPromise.catch(()=>{})}const s=this.getEffectiveWorkerUrl();if(!s)return this.syncStatus="local",this.notify(),{success:!0,message:"Local only mode (no worker configured)"};if(typeof window<"u"&&typeof navigator<"u"&&navigator.onLine===!1)return this.syncStatus="offline",this.notify(),{success:!1,message:"Device is offline"};this.currentSyncPromise=this.performSync(s,e);try{return await this.currentSyncPromise}finally{this.currentSyncPromise=null}}async performSync(e,s){this.syncStatus="syncing",this.syncErrorMessage=null,this.notify();try{const i=this.getSyncAuthHeaderSync(),r=s?null:this.settings.lastSyncedAt||null,n=new Set(this.tombstones.map(f=>f.id)),a=s||!r?this.instruments:this.instruments.filter(f=>!f.updatedAt||f.updatedAt>r),o=s||!r?this.sessions:this.sessions.filter(f=>!f.updatedAt||f.updatedAt>r),l={lastSyncedAt:r,instruments:a,sessions:o,tombstones:[...this.tombstones]},c=await dn.sync(e,i,l),u=new Map(this.instruments.map(f=>[f.id,f]));for(const f of c.instruments){const p=u.get(f.id);if(!p)u.set(f.id,f);else{const g=p.updatedAt?new Date(p.updatedAt).getTime():0;(f.updatedAt?new Date(f.updatedAt).getTime():0)>=g&&u.set(f.id,{...p,...f})}}const h=new Map(this.sessions.map(f=>[f.id,f]));for(const f of c.sessions){const p=h.get(f.id);if(!p)h.set(f.id,f);else{const g=p.updatedAt?new Date(p.updatedAt).getTime():0;(f.updatedAt?new Date(f.updatedAt).getTime():0)>=g&&h.set(f.id,{...p,...f})}}for(const f of c.tombstones)f.type==="instrument"?u.delete(f.id):f.type==="session"&&h.delete(f.id);return this.instruments=Array.from(u.values()),this.sessions=Array.from(h.values()).sort((f,p)=>new Date(p.start).getTime()-new Date(f.start).getTime()),this.tombstones=this.tombstones.filter(f=>!n.has(f.id)),this.settings.lastSyncedAt=c.syncedAt,this.syncStatus="synced",this.syncErrorMessage=null,this.persistInstruments(),this.persistSessions(),this.persistTombstones(),this.persistSettings(),this.notify(),{success:!0}}catch(i){const r=i instanceof Error?i.message:String(i);return console.error("PracticeStore sync failed:",r),this.syncStatus="error",this.syncErrorMessage=r,this.notify(),{success:!1,message:r}}}disconnectCloudSync(){this.settings.workerUrl=void 0,this.settings.syncPasscode=void 0,this.settings.lastSyncedAt=void 0,this.syncStatus="local",this.syncErrorMessage=null,this.persistSettings(),this.notify()}updateSettings(e){this.settings={...this.settings,...e},this.persistSettings(),this.isCloudSyncConfigured()?this.syncStatus="synced":this.syncStatus="local",this.notify()}exportBackup(){const e={version:2,exportedAt:new Date().toISOString(),instruments:this.instruments,sessions:this.sessions,settings:this.settings};return JSON.stringify(e,null,2)}importBackup(e){try{const s=JSON.parse(e);if(!s||!Array.isArray(s.instruments)&&!Array.isArray(s.sessions))return{success:!1,message:"Invalid backup file format."};if(Array.isArray(s.instruments)&&s.instruments.length>0&&(this.instruments=s.instruments.map(i=>({...i,updatedAt:i.updatedAt||new Date().toISOString()})),this.persistInstruments()),Array.isArray(s.sessions)&&(this.sessions=s.sessions.map(i=>({...i,updatedAt:i.updatedAt||new Date().toISOString()})),this.persistSessions()),s.settings&&typeof s.settings=="object"){const{soundEnabled:i,hapticsEnabled:r}=s.settings;this.settings={...this.settings,soundEnabled:typeof i=="boolean"?i:this.settings.soundEnabled,hapticsEnabled:typeof r=="boolean"?r:this.settings.hapticsEnabled},this.persistSettings()}return this.activeSession=null,this.persistActive(),this.notify(),this.triggerBackgroundSync(),{success:!0,message:"Backup successfully restored."}}catch(s){return{success:!1,message:"Failed to parse JSON file: "+String(s)}}}loadDemoData(){this.instruments=[...gt],this.persistInstruments();const e=Ke(new Date),s=[],i=new Date().toISOString();for(let a=33;a>=1;a--){const o=wt(e,-a),l=o.getDay();if(!(Math.random()<.12)){if(l>=1&&l<=5){const c=Math.random()<.7?["guitar","piano"]:[Math.random()<.5?"guitar":"piano"];let u=7;c.forEach(h=>{const f=new Date(o);f.setHours(u,30+Math.floor(Math.random()*20),0,0);const p=12+Math.floor(Math.random()*25),g=new Date(f.getTime()+p*6e4);s.push({id:"seed-"+Math.random().toString(36).slice(2,8),instrumentId:h,start:f.toISOString(),end:g.toISOString(),duration:p,updatedAt:i}),u+=1})}else if(Math.random()<.75){const c=["acoustic","bass","drumming"][Math.floor(Math.random()*3)],u=new Date(o);u.setHours(11,Math.floor(Math.random()*40),0,0);const h=20+Math.floor(Math.random()*30),f=new Date(u.getTime()+h*6e4);s.push({id:"seed-"+Math.random().toString(36).slice(2,8),instrumentId:c,start:u.toISOString(),end:f.toISOString(),duration:h,updatedAt:i})}}}const r=new Date(e);r.setHours(7,40,0,0),s.unshift({id:"seed-today-guitar",instrumentId:"guitar",start:r.toISOString(),end:new Date(r.getTime()+22*6e4).toISOString(),duration:22,updatedAt:i});const n=new Date(e);n.setHours(8,15,0,0),s.unshift({id:"seed-today-piano",instrumentId:"piano",start:n.toISOString(),end:new Date(n.getTime()+18*6e4).toISOString(),duration:18,updatedAt:i}),this.sessions=s,this.activeSession=null,this.persistSessions(),this.persistActive(),this.notify(),this.triggerBackgroundSync()}clearAllData(){this.instruments=[...gt],this.sessions=[],this.activeSession=null,this.tombstones=[],this.persistInstruments(),this.persistSessions(),this.persistTombstones(),this.persistActive(),this.notify()}}const M=new mu,za="pt-background",yu="https://practice-tracker-sync.warmsynthsiloveyou.workers.dev";function vu(){const t=new Date;return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function bu(){try{const t=localStorage.getItem(za);if(!t)return null;const e=JSON.parse(t);return e.url&&e.date?e:null}catch{return null}}function wu(t,e){localStorage.setItem(za,JSON.stringify({url:t,date:e}))}function Yn(t){return new Promise((e,s)=>{const i=new Image;i.onload=()=>e(),i.onerror=()=>s(new Error("Image failed to load")),i.src=t})}async function xu(){const t=vu(),e=bu();if(e&&e.date===t)try{return await Yn(e.url),e.url}catch{}try{const s=new AbortController,i=setTimeout(()=>s.abort(),8e3),r=await fetch(`${yu.replace(/\/+$/,"")}/api/background`,{signal:s.signal});if(clearTimeout(i),!r.ok)return null;const n=await r.json();return n.url?(await Yn(n.url),wu(n.url,t),n.url):null}catch{return null}}const Je=ge`
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

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes popIn {
    0% { opacity: 0; transform: scale(0.96); }
    100% { opacity: 1; transform: scale(1); }
  }

  @keyframes riseIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes sheetIn {
    0% { transform: translateY(40px); opacity: 0; }
    60% { transform: translateY(-4px); opacity: 1; }
    100% { transform: translateY(0); opacity: 1; }
  }

  @keyframes toastIn {
    0% { transform: translate(-50%, 20px); opacity: 0; }
    100% { transform: translate(-50%, 0); opacity: 1; }
  }

  @keyframes stampOnce {
    0% { transform: scale(1.9) rotate(-14deg); opacity: 0; }
    12% { transform: scale(1) rotate(-6deg); opacity: 1; }
    85% { transform: scale(1) rotate(-6deg); opacity: 1; }
    100% { transform: scale(0.9) rotate(-6deg); opacity: 0; }
  }

  @keyframes fall {
    0% { transform: translateY(-80px) rotate(0); opacity: 0; }
    6% { opacity: 1; }
    100% { transform: translateY(110vh) rotate(560deg); opacity: 1; }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
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

  /* Buttons — pill-shaped, theme-driven */
  .btn {
    border: none;
    border-radius: 999px;
    font-family: 'Gabarito', sans-serif;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 140ms ease-out, background-color 140ms ease-out, opacity 140ms ease-out;
    user-select: none;
  }

  .btn:active {
    transform: scale(0.97);
  }

  .btn-primary {
    background: var(--accent, #FF7A5C);
    color: var(--bg, #2B1C33);
    height: 48px;
    width: 100%;
  }

  .btn-primary:hover {
    background: var(--accentHi, #FF8C72);
  }

  .btn-secondary {
    background: var(--raised, #46304F);
    color: var(--ink, #F5E9DA);
    height: 46px;
  }

  .btn-secondary:hover {
    filter: brightness(1.08);
  }

  .btn-danger {
    background: var(--accent, #FF7A5C);
    color: var(--bg, #2B1C33);
    height: 46px;
  }

  .btn-danger:hover {
    opacity: 0.9;
  }

  /* Form Elements */
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 14px;
  }

  .form-label {
    font-family: 'Manrope', sans-serif;
    font-size: 11px;
    font-weight: 800;
    color: var(--muted, #767668);
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .form-input {
    width: 100%;
    border: 1px solid var(--line, #E4E3DC);
    border-radius: 14px;
    padding: 11px 14px;
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    background: var(--raised, #FBFBF9);
    color: var(--ink, #23241F);
    outline: none;
    transition: border-color 140ms ease-out, box-shadow 140ms ease-out;
  }

  .form-input:focus {
    border-color: var(--accent, #23241F);
    box-shadow: 0 0 0 1px var(--accent, #23241F);
  }

  /* Modals */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(20, 10, 15, 0.66);
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
    background: var(--card, #FBFBF9);
    border-radius: 28px;
    padding: 24px;
    box-shadow: 0 30px 60px -20px rgba(10, 5, 15, 0.7);
    color: var(--ink, #23241F);
    animation: popIn 220ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
  }

  .modal-title {
    font-family: 'Gabarito', sans-serif;
    font-size: 19px;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close-btn {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: var(--raised, #EFEEE9);
    color: var(--muted, #767668);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    border: none;
    transition: background-color 140ms ease-out, color 140ms ease-out;
  }

  .close-btn:hover {
    filter: brightness(1.1);
    color: var(--ink, #23241F);
  }
`,ar=[{id:"plum",name:"Plum",light:!1,bg:"#2B1C33",card:"#3A2845",raised:"#46304F",line:"#5A4266",muted:"#BFA9C8",dim:"#8E7A99",ink:"#F5E9DA",accent:"#FF7A5C",accentHi:"#FF8C72",chart:"#B48CD9",deep:"#251829",stage:"#46304F",stageDeep:"#2B1C33",stageLine:"#5A4266",stageKey:"#3A2845"},{id:"moss",name:"Moss",light:!1,bg:"#15221C",card:"#1F3129",raised:"#2A4035",line:"#3B5546",muted:"#A9C3B3",dim:"#6E8B7B",ink:"#EEF2E4",accent:"#E9C46A",accentHi:"#F0D182",chart:"#7FC8A9",deep:"#111C17",stage:"#2A4035",stageDeep:"#15221C",stageLine:"#3B5546",stageKey:"#1F3129"},{id:"indigo",name:"Ink & Saffron",light:!1,bg:"#121A2C",card:"#1C263D",raised:"#26334F",line:"#344464",muted:"#A8B5D4",dim:"#6E7BA0",ink:"#F3EEE3",accent:"#F4A340",accentHi:"#F7B661",chart:"#7FA6F0",deep:"#0E1524",stage:"#26334F",stageDeep:"#121A2C",stageLine:"#344464",stageKey:"#1C263D"},{id:"dusk",name:"Dusk",light:!1,bg:"#2A1A20",card:"#3B2630",raised:"#4B323D",line:"#604352",muted:"#D7B3BE",dim:"#9E7A86",ink:"#FCEEE9",accent:"#7FD6C2",accentHi:"#99E0CF",chart:"#F29CB0",deep:"#23151A",stage:"#4B323D",stageDeep:"#2A1A20",stageLine:"#604352",stageKey:"#3B2630"},{id:"paper",name:"Paper",light:!0,bg:"#F4EEE4",card:"#FFFFFF",raised:"#EDE5D8",line:"#DCD1C1",muted:"#6B6271",dim:"#958C96",ink:"#2A2230",accent:"#C9472E",accentHi:"#D85B42",chart:"#8C6BB8",deep:"#EAE2D5",stage:"#2E2534",stageDeep:"#1F1824",stageLine:"#4A3E52",stageKey:"#3A2F42"},{id:"glacier",name:"Glacier",light:!0,bg:"#E9EFF3",card:"#FFFFFF",raised:"#DDE6EC",line:"#C7D3DC",muted:"#566675",dim:"#8796A3",ink:"#1C2833",accent:"#2F55D4",accentHi:"#4468E0",chart:"#2FA59A",deep:"#DFE7ED",stage:"#1E2B3A",stageDeep:"#141E2A",stageLine:"#33465A",stageKey:"#26364A"}];function _u(t){return ar.find(e=>e.id===t)||ar[0]}const ku=["bg","card","raised","line","muted","dim","ink","accent","accentHi","chart","deep","stage","stageDeep","stageLine","stageKey"];function Xn(t,e){const s=_u(e);for(const i of ku)t.style.setProperty(`--${i}`,s[i]);try{document.body.style.background=s.bg,document.documentElement.style.background=s.bg;const i=document.querySelector('meta[name="theme-color"]');i&&i.setAttribute("content",s.bg)}catch{}}const Ki=["#E8A56B","#FFC2A8","#7FD1C1","#F5E9DA","#B48CD9","#FF7A5C","#9BD49B","#E8C27A"],Su=[1,3,7,14,30],$u=[3,7,14,21,30],mt=5;function Ha(t,e){const s=Ke(t).getTime(),i=Ke(e).getTime();return Math.round((s-i)/(1e3*60*60*24))}function Eu(t,e,s=new Date,i="primary"){const r=Ke(s),n=i==="secondary"?$u:Su,a=e.filter(k=>k.instrumentId===t&&!k.deletedAt).sort((k,R)=>new Date(k.start).getTime()-new Date(R.start).getTime());if(a.length===0)return{instrumentId:t,step:0,maxSteps:mt,intervalDays:n[0],lastPracticedAt:null,nextDueAt:null,daysRemaining:0,status:"new",isDueToday:!1,isOverdue:!1,cycleCount:0,label:"New · Ready for Step 1"};const o=[],l=new Set;for(const k of a){const R=Ke(new Date(k.start)),O=Jo(R);l.has(O)||(l.add(O),o.push(R))}let c=0,u=null,h=0;for(let k=0;k<o.length;k++){const R=o[k];if(k===0){c=1;const O=n[0];u=wt(R,O)}else if(u?R.getTime()<=u.getTime():!0)if(c>=mt){h++,c=1;const C=n[0];u=wt(R,C)}else{c++;const C=n[c-1];u=wt(R,C)}else{c=1;const C=n[0];u=wt(R,C)}}const f=a[a.length-1].start,p=u?u.toISOString():null,g=n[Math.max(0,Math.min(c-1,mt-1))],m=u?Ha(u,r):0,w=m<0,x=m===0;let _="cold";w?_="overdue":x?_="due":m===1?_="hot":m<=3?_="warm":m<=7?_="cool":_="cold";let b;return w?b=`Overdue by ${Math.abs(m)}d (was Step ${c}: ${g}d)`:x?b=`Due today · Step ${c}/${mt} (${g}d)`:m===1?b=`Due tomorrow · Step ${c}/${mt} (${g}d)`:b=`Step ${c}/${mt} · Due in ${m}d (${g}d)`,{instrumentId:t,step:c,maxSteps:mt,intervalDays:g,lastPracticedAt:f,nextDueAt:p,daysRemaining:m,status:_,isDueToday:x,isOverdue:w,cycleCount:h,label:b}}function Au(t){const s=t.filter(r=>!r.archived&&!r.deletedAt).slice().sort((r,n)=>r.rank!==void 0&&n.rank!==void 0?r.rank-n.rank:r.rank!==void 0?-1:n.rank!==void 0?1:r.tier!==n.tier?r.tier==="primary"?-1:1:0),i=new Map;return s.forEach((r,n)=>{i.set(r.id,n+1)}),i}function Tu(t,e){const s=t.filter(a=>!a.archived&&!a.deletedAt);if(s.length===0)return new Map;const i=new Map;let r=0;for(const a of s){const o=e.get(a.id)||1,c=(a.tier==="primary"?2:1)*Math.pow(o,-.6);i.set(a.id,c),r+=c}const n=new Map;for(const a of s){const o=i.get(a.id)||0;n.set(a.id,r>0?o/r:1/s.length)}return n}function Ou(t,e,s=new Date){const i=Ke(s),r=t.filter(m=>!m.archived&&!m.deletedAt);if(r.length===0)return{topPick:null,rankedQueue:[]};const n=Au(t),a=Tu(t,n),o=new Date(i);o.setDate(o.getDate()-14);const l=e.filter(m=>!m.deletedAt),c=l.filter(m=>new Date(m.start)>=o),u=c.reduce((m,w)=>m+(w.duration||0),0),h=new Map;for(const m of r){const w=c.filter(x=>x.instrumentId===m.id).reduce((x,_)=>x+(_.duration||0),0);h.set(m.id,u>0?w/u:0)}const f=[];for(const m of r){const w=n.get(m.id)||r.length,x=a.get(m.id)||0,_=h.get(m.id)||0,b=x-_,k=Eu(m.id,l,s,m.tier);let R=999,O=!1;if(k.lastPracticedAt){const N=Ke(new Date(k.lastPracticedAt));R=Ha(i,N),O=R===0}let C=0;if(k.lastPracticedAt&&R>=0){const N=Math.max(1,k.intervalDays),U=m.tier==="primary"?8+Math.max(0,3-w):45,Qe=Math.min(U,N*(1+.05*Math.max(0,5-w)));C=Math.min(100,Math.max(0,Math.exp(-Math.LN2*R/Qe)*100))}const z=100-C,Y=Math.max(0,b*100),he=(m.tier==="primary"?1:.6)*(1/Math.pow(w,.7))*100;let Ae=.35*z+.3*Y+.35*he;const Te=m.tier==="primary";if(!k.lastPracticedAt)Ae+=Te?25:12;else if(k.isOverdue){const N=Te?20:8,U=Te?5:2;Ae+=N+Math.min(Te?25:10,Math.abs(k.daysRemaining)*U)}else k.isDueToday&&(Ae+=Te?15:6);O&&r.length>1&&(Ae*=.25);const gi=Math.round(Math.min(100,Math.max(0,Ae))*10)/10;let oe="",je;if(k.lastPracticedAt)if(O){const N="Interleaved cooling down",U="Practiced today. Switch disciplines to allow neural consolidation.";oe=`${N}. ${U}`,je={badge:"BRAIN RESET",headline:N,explanation:U,icon:"brain"}}else if(k.isOverdue){const N=Math.abs(k.daysRemaining),U=`Retention dropped to ${Math.round(C)}%`,Qe=`Overdue by ${N}d (Step ${k.step}). A quick session locks in your ${k.intervalDays}d interval.`;oe=`${U}. ${Qe}`,je={badge:"RUST ALERT",headline:U,explanation:Qe,icon:"bolt"}}else if(k.isDueToday){const N=`Due today for Step ${k.step}`,U=`Retention at ${Math.round(C)}%. Optimal timing for your ${k.intervalDays}d target interval.`;oe=`${N}. ${U}`,je={badge:"IN SYNC",headline:N,explanation:U,icon:"clock"}}else if(b>.1){const N=`${Math.round(b*100)}% behind target share`,U=`Priority rank #${w} is slipping. Give it airtime to restore kit balance.`;oe=`${N}. ${U}`,je={badge:"KIT SLIP",headline:N,explanation:U,icon:"scale"}}else{const N=`Retention at ${Math.round(C)}%`,U=`Last played ${R===1?"yesterday":`${R}d ago`}. Keep steady on your practice routine.`;oe=`${N}. ${U}`,je={badge:"STEADY PACE",headline:N,explanation:U,icon:"clock"}}else{const N="Baseline session ready",U="Establish your baseline to initiate Step 1 spacing interval.";oe=`${N}. ${U}`,je={badge:"FRESH CANVAS",headline:N,explanation:U,icon:"sparkles"}}f.push({instrumentId:m.id,name:m.name,color:m.color,tier:m.tier,rank:w,score:gi,retentionPct:Math.round(C),targetSharePct:Math.round(x*100),actualSharePct:Math.round(_*100),shareDeficitPct:Math.round(b*100),daysSince:R,step:k.step,status:k.status,reason:oe,reasonDetails:je,isPracticedToday:O})}const p=f.slice().sort((m,w)=>w.score-m.score||m.rank-w.rank);return{topPick:p[0]||null,rankedQueue:p}}const Oe={clock:"M6.4 3.4h11.2M6.4 20.6h11.2M8.2 3.4v3.3c0 2.1 3.8 3.7 3.8 5.3s-3.8 3.2-3.8 5.3v3.3M15.8 3.4v3.3c0 2.1-3.8 3.7-3.8 5.3s3.8 3.2 3.8 5.3v3.3",note:"M12 2.9a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8M9.3 13.1 7.4 21.1 12 18.5l4.6 2.6-1.9-8",bolt:"M12 2.8c3.8 3.4 6 6 6 9.4a6 6 0 0 1-12 0c0-2 .9-3.6 2.3-5.2M12 20.2a2.7 2.7 0 0 0 2.7-2.7c0-1.7-1.4-2.7-2.7-4.6-1.3 1.9-2.7 2.9-2.7 4.6a2.7 2.7 0 0 0 2.7 2.7z",cal:"M12 3 20 5.7v6.5c0 4.3-3.3 7.4-8 8.8-4.7-1.4-8-4.5-8-8.8V5.7zM8.6 12.1l2.6 2.6 4.4-4.8",grid:"M3.3 7.8 7 11.6 12 4.2l5 7.4 3.7-3.8-1.7 10.9H5zM5.4 18.7h13.2"};function K(t){const e=new Date(t);return e.setHours(0,0,0,0),e}function H(t,e){const s=new Date(t);return s.setDate(s.getDate()+e),s}function Qn(t){const e=K(t);return H(e,-((e.getDay()+6)%7))}function F(t){if(t=Math.round(t),t<=0)return"0m";if(t<60)return t+"m";const e=Math.floor(t/60),s=t%60;return e+"h"+(s?" "+s+"m":"")}function Iu(t){if(!t.length)return 0;const e=t.slice().sort((s,i)=>s-i);return e.length%2?e[(e.length-1)/2]:(e[e.length/2-1]+e[e.length/2])/2}function Vi(t){return t===0||t===24?"12am":t===12?"12pm":t<12?`${t}am`:`${t-12}pm`}function qa(t,e,s={}){var Hr,qr,Gr,Wr,Kr,Vr,Jr,Yr;const i=s.now||new Date,r=K(i),n=s.weeklyGoalMinutes||420,a=s.range||"month",o=s.mutedInstruments||{},l=e.filter(d=>!d.archived),c=new Map;e.forEach(d=>c.set(d.id,d));const u=d=>c.get(d)||{id:d,name:"Instrument",color:"#6B7F6E",tier:"primary"},h=t.filter(d=>!d.deletedAt).map(d=>({...d,t:new Date(d.start),min:Math.max(1,d.duration)})).sort((d,y)=>d.t.getTime()-y.t.getTime()),f=h.length>0,p={},g={};h.forEach(d=>{const y=K(d.t).getTime();p[y]=(p[y]||0)+d.min,g[y]||(g[y]={}),g[y][d.instrumentId]=(g[y][d.instrumentId]||0)+d.min});let m=0;const w=r.getTime(),_=!!p[w]?0:1;for(let d=_;d<400;d++){const y=H(r,-d).getTime();if(p[y])m++;else break}let b=0,k=0;for(let d=365;d>=0;d--){const y=H(r,-d).getTime();p[y]?(k++,b=Math.max(b,k)):k=0}b=Math.max(b,m);const R=Math.max(1,b-m+1),O=m<=0?"time to start a run":m===1?"day one, showing up":m>=b&&b>=3?"your longest run yet":m>=30?"a month unbroken":m>=14?"a fortnight of showing up":R<=2&&m>=3?R===1?"one more matches your best":`${R} more beats your best`:m%2===1?"nobody is watching, keep going":"stay steady on the fretboard",C=Math.max(60,...Object.values(p)),z=["S","M","T","W","T","F","S"],Y=[];for(let d=13;d>=0;d--){const y=H(r,-d),$=p[y.getTime()]||0;Y.push({h:$?Math.max(10,Math.round($/C*100)):6,bg:$?d===0?"#4F6353":"#9FAF95":"#E1E1DB",label:z[y.getDay()],labelColor:d===0?"#23241F":"#B0AFA5",isToday:d===0})}const Yt=h.reduce((d,y)=>d+y.min,0),he=Yt/60,Ae=he<25||he<50?25:he<100?50:100,Te=(Math.floor(he/Ae)+1)*Ae,gi=Math.max(0,Te-Ae),oe=Math.max(0,Math.round(Te*60-Yt)),je=Yt-gi*60,N=Math.max(.02,Math.min(.98,je/(Ae*60))),U=52,Qe=2*Math.PI*U,Wa=`${(Qe*N).toFixed(1)} ${Qe.toFixed(1)}`,mr=(N*360-90)*(Math.PI/180),Ka=(59+U*Math.cos(mr)).toFixed(1),Va=(59+U*Math.sin(mr)).toFixed(1),yr=H(r,-42),Es=h.filter(d=>d.t>=yr),mi=Es.reduce((d,y)=>d+y.min,0)||1,Xt=d=>d===0?"today":d===1?"yesterday":d>=99?"never":`${d}d ago`,As=Ou(l,t,r),Ne=As.topPick,dt=Ne?{id:Ne.instrumentId,name:Ne.name,color:Ne.color,reason:Ne.reason,reasonDetails:Ne.reasonDetails}:{id:((Hr=l[0])==null?void 0:Hr.id)||"guitar",name:((qr=l[0])==null?void 0:qr.name)||"Guitar",color:((Gr=l[0])==null?void 0:Gr.color)||"#6B7F6E",reason:"Start a session to build your practice streak.",reasonDetails:{badge:"FRESH CANVAS",headline:"Start a session",explanation:"Log your first sitting to establish your baseline practice streak.",icon:"sparkles"}},le=Ne?Ne.daysSince:99,Ja=new Set(h.filter(d=>d.instrumentId===dt.id).map(d=>Math.round((r.getTime()-K(d.t).getTime())/864e5))),Ya=Array.from({length:14},(d,y)=>{const $=13-y,I=Ja.has($);return{h:I?"30px":$<le?"9px":"16px",bg:I?dt.color:"rgba(242,241,236,0.18)"}}),Xa={id:dt.id,name:dt.name,color:dt.color,days:le>=999?99:le,num:le>=999?"—":String(le),unit:le>=999?"not yet logged":le===1?"day since":"days since",ago:le>=999?"never logged":le===0?"last played today":le===1?"last played yesterday":`last played ${le}d ago`,ticks:Ya},Ze={...l.find(d=>d.id===dt.id)||l[0]||{id:"guitar",name:"Guitar",color:"#6B7F6E",tier:"primary"},days:le>=999?99:le},Qa=l.map((d,y)=>{const I=h.filter(se=>se.instrumentId===d.id&&se.t>=yr).reduce((se,Pi)=>se+Pi.min,0),j=h.filter(se=>se.instrumentId===d.id).slice(-1)[0],D=j?Math.round((r.getTime()-K(j.t).getTime())/864e5):99,B=mi>0?Math.round(I/mi*100):0;return{instrumentId:d.id,name:d.name,color:d.color,tier:d.tier,rank:y+1,score:Math.max(10,100-y*20),retentionPct:D>=99?0:Math.max(10,Math.round(100*Math.pow(.5,D/7))),targetSharePct:d.tier==="primary"?35:15,actualSharePct:B,shareDeficitPct:(d.tier==="primary"?35:15)-B,daysSince:D,step:1,status:D>=99?"new":D>=6?"cold":D>=3?"cool":"warm",reason:D>=99?"Never logged once. It is sitting in your kit doing nothing.":`Last played ${Xt(D)}. Due another pass before it goes cold.`,isPracticedToday:D===0}}),Et=As.rankedQueue.length>0?As.rankedQueue:Qa,vr=s.selectedInstrumentId,Za={instrumentId:((Wr=l[0])==null?void 0:Wr.id)||"guitar",name:((Kr=l[0])==null?void 0:Kr.name)||"Guitar",color:((Vr=l[0])==null?void 0:Vr.color)||"#6B7F6E",actualSharePct:0,daysSince:99,reason:"Start a session to build your practice streak."},te=(vr?Et.find(d=>d.instrumentId===vr):null)||Ne||Et[0]||Za,yi=Et.findIndex(d=>d.instrumentId===te.instrumentId)+1||1,At=te.daysSince>=999?99:te.daysSince,eo=`${te.actualSharePct||0}%`,to=new Set(h.filter(d=>d.instrumentId===te.instrumentId).map(d=>Math.round((r.getTime()-K(d.t).getTime())/864e5))),so=Array.from({length:14},(d,y)=>{const $=13-y,I=to.has($);return{h:I?"34px":"3px",bg:I?"rgba(242,241,236,0.88)":"rgba(242,241,236,0.20)"}}),io=d=>d.daysSince>=99?"Never logged once. It is sitting in your kit doing nothing.":d.daysSince>=6?`Untouched for ${d.daysSince} days — your longest neglect in the kit right now.`:d.actualSharePct<12?`Only ${d.actualSharePct}% of your last six weeks. It is quietly slipping.`:`Last played ${Xt(d.daysSince)}. Due another pass before it goes cold.`,ro=yi===1?((Jr=te.reasonDetails)==null?void 0:Jr.explanation)||te.reason||io(te):`You picked this one. ${((Yr=Et[0])==null?void 0:Yr.name)||"Top pick"} is still first in the queue.`,no={selectedId:te.instrumentId,name:te.name,color:te.color,num:At>=99?"—":String(At),unit:At>=99?"not yet logged":At===1?"day since":"days since",rankLabel:`#${yi} priority`,rank:yi,line:At>=99?"Never logged once.":`Last played ${Xt(At)} · ${eo} of your last six weeks`,reason:ro,reasonDetails:te.reasonDetails,cta:`Start ${te.name}`,ticks:so,chips:Et.map(d=>({id:d.instrumentId,name:d.name,color:d.color,pct:`${d.actualSharePct||0}%`,isSelected:d.instrumentId===te.instrumentId})),queue:Et.map((d,y)=>{var j;const $=d.daysSince>=999?99:d.daysSince,I=d.daysSince>=99?"NEVER":d.daysSince>=6?"RUST":d.daysSince<=1?"FRESH":"STEADY";return{id:d.instrumentId,rank:`#${y+1}`,name:d.name,color:d.color,pct:`${d.actualSharePct||0}%`,ago:Xt($),flag:I,flagBg:$>=6?"rgba(192,138,106,0.30)":"rgba(242,241,236,0.13)",isSelected:d.instrumentId===te.instrumentId,reason:((j=d.reasonDetails)==null?void 0:j.explanation)||d.reason}})},Le=Qn(r),vi=d=>{const y=[0,0,0,0,0,0,0];return h.forEach($=>{const I=Math.floor((K($.t).getTime()-d.getTime())/864e5);I>=0&&I<7&&(y[I]+=$.min)}),y},br=d=>{let y=0;return d.map($=>y+=$)},Tt=br(vi(Le)),bi=[];for(let d=1;d<=8;d++)bi.push(br(vi(H(Le,-7*d))));const Ts=[0,1,2,3,4,5,6].map(d=>bi.length?Iu(bi.map(y=>y[d])):(d+1)*30),Ot=Math.min(6,Math.max(0,Math.floor((r.getTime()-Le.getTime())/864e5))),wi=Math.round(Tt[Ot]-Ts[Ot]),ao=Math.max(n,Ts[6],Tt[6],60)*1.08,wr=(d,y,$,I)=>d.slice(0,y+1).map((j,D)=>`${(D/6*($-12)+6).toFixed(1)},${(I-8-j/ao*(I-18)).toFixed(1)}`).join(" "),ut=[];oe>0&&oe<=120&&ut.push({mins:oe,big:F(oe),text:`to your ${Te}th hour of practice, all instruments counted`,on:Ze}),p[w]||(m+1>b&&b>=2?ut.push({mins:15,big:"15m",text:`sets a new longest streak — ${m+1} days, further than you have ever gone`,on:Ze}):ut.push({mins:15,big:"15m",text:`keeps the streak alive at ${m+1} days · ${Math.max(1,b-m)} from your record`,on:Ze}));const xi=Math.round(Ts[Ot]-Tt[Ot]);xi>0&&ut.push({mins:xi,big:F(xi),text:"puts this week back ahead of your median pace",on:Ze});const Os=Math.round(n-Tt[6]);Os>0&&Os<=150&&ut.push({mins:Os,big:F(Os),text:`and the weekly goal of ${F(n)} is done`,on:l[0]||Ze}),ut.push({mins:20,big:"20m",text:`ends the ${Ze.days>=99?"silence":`${Ze.days}-day gap`} on this instrument`,on:Ze});const oo=ut.sort((d,y)=>d.mins-y.mins).slice(0,3).map(d=>({big:d.big,text:d.text,instId:d.on.id,instName:d.on.name,instColor:d.on.color,mins:d.mins})),xr=[0,0,0,0,0,0,0],_r=[0,0,0,0,0,0,0];for(let d=0;d<84;d++){const y=H(r,-d),$=(y.getDay()+6)%7;xr[$]+=p[y.getTime()]||0,_r[$]++}const It=xr.map((d,y)=>d/(_r[y]||1)),lo=Math.max(1,...It),kr=It.indexOf(Math.max(...It)),Sr=It.indexOf(Math.min(...It)),_i=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],co=It.map((d,y)=>({label:_i[y][0],val:F(d),h:Math.max(8,Math.round(d/lo*100)),bg:y===kr?"#4F6353":y===Sr?"#D9C7C0":"#9FAF95",strong:y===(r.getDay()+6)%7?700:500})),ki=[{label:"<25m",min:0,max:25},{label:"25–40",min:25,max:40},{label:"40–55",min:40,max:55},{label:"55–75",min:55,max:75},{label:"75m+",min:75,max:9999}],Is=ki.map(d=>Es.filter(y=>y.min>=d.min&&y.min<d.max).length),uo=Math.max(1,...Is),$r=Is.indexOf(Math.max(...Is)),ho=Is.map((d,y)=>({label:ki[y].label,n:d,h:Math.max(6,Math.round(d/uo*100)),bg:y===$r?"#4F6353":"#C6CFBF"})),Rs=h.slice().sort((d,y)=>y.min-d.min)[0]||{min:0,t:i,instrumentId:"guitar"},Er=[];for(let d=0;d<16;d++){const y=H(Le,-7*d);Er.push({m:y,v:vi(y).reduce(($,I)=>$+I,0)})}const Si=Er.slice().sort((d,y)=>y.v-d.v)[0]||{m:Le,v:0},$i=Object.keys(p).sort((d,y)=>(p[Number(y)]||0)-(p[Number(d)]||0))[0],Ar=$i?new Date(Number($i)):r,Tr=[{k:"Longest session",v:F(Rs.min),sub:`${u(Rs.instrumentId).name} · ${Rs.t.toLocaleDateString(void 0,{day:"numeric",month:"short"})}`,fresh:Math.round((r.getTime()-K(Rs.t).getTime())/864e5)<=21},{k:"Biggest week",v:F(Si.v),sub:`week of ${Si.m.toLocaleDateString(void 0,{day:"numeric",month:"short"})}`,fresh:Math.round((r.getTime()-K(Si.m).getTime())/864e5)<=21},{k:"Longest streak",v:`${b} ${b===1?"day":"days"}`,sub:m>=b&&m>=3?"you are on it now":`${m}d in currently`,fresh:m>=b&&m>=3},{k:"Biggest day",v:F(p[Number($i)]||0),sub:Ar.toLocaleDateString(void 0,{day:"numeric",month:"short"}),fresh:Math.round((r.getTime()-K(Ar).getTime())/864e5)<=21}],ht=Tr.filter(d=>d.fresh),po=ht.length?`${ht.length} set recently`:"nothing new in three weeks",fo=ht.length===0?"No reading has moved in three weeks. One long sitting would change that.":ht[0].k==="Longest streak"?`Your longest streak is the one you are standing in right now — ${b} days and counting.`:`New ${ht[0].k.toLowerCase()}: ${ht[0].v}, ${ht[0].sub.toLowerCase()}. That one is yours to beat now.`,et=Array.from({length:24},()=>({min:0,by:{}}));Es.forEach(d=>{const y=d.t.getHours();et[y].min+=d.min,et[y].by[d.instrumentId]=(et[y].by[d.instrumentId]||0)+d.min});const go=Math.max(1,...et.map(d=>d.min));let Ei=0,Cs=18;for(let d=0;d<24;d++){const y=et[d].min+et[(d+1)%24].min+et[(d+2)%24].min;y>Ei&&(Ei=y,Cs=d)}const Ue=Array.from({length:25},(d,y)=>et[(y+4)%24].min),Or=720,Qt=124,tt=d=>d/24*Or,Rt=d=>Qt-14-d/go*(Qt-34);let Ps=`M ${tt(0).toFixed(1)} ${Rt(Ue[0]).toFixed(1)}`;for(let d=1;d<Ue.length;d++){const y=(tt(d-1)+tt(d))/2,$=(Rt(Ue[d-1])+Rt(Ue[d]))/2;Ps+=` Q ${tt(d-1).toFixed(1)} ${Rt(Ue[d-1]).toFixed(1)} ${y.toFixed(1)} ${$.toFixed(1)}`}Ps+=` L ${tt(24).toFixed(1)} ${Rt(Ue[24]).toFixed(1)}`;const mo=`${Ps} L ${Or} ${Qt} L 0 ${Qt} Z`,Zt=(i.getHours()+i.getMinutes()/60-4+24)%24,yo=Ue[Math.floor(Zt)]+(Ue[Math.ceil(Zt)]-Ue[Math.floor(Zt)])*(Zt%1),vo=(Cs-4+24)%24,st={};Es.forEach(d=>{if(!d.notes||!d.notes.trim())return;const y=d.notes.trim();st[y]||(st[y]={n:0,min:0,last:d.t,instId:d.instrumentId}),st[y].n++,st[y].min+=d.min,d.t>st[y].last&&(st[y].last=d.t)});const bo=Object.keys(st).map(d=>({k:d,...st[d]})).sort((d,y)=>y.min-d.min).slice(0,7).map(d=>({name:d.k,mins:F(d.min),color:u(d.instId).color,ago:Xt(Math.round((r.getTime()-K(d.last).getTime())/864e5)),size:(12+Math.min(7,d.min/50)).toFixed(1)+"px"})),it=[],Ir=(d,y)=>{let $=0;for(const I of d)if($+=I.min,$/60>=y)return I.t;return null},Rr=d=>{const y=Math.round((r.getTime()-K(d).getTime())/864e5);return y<=1?"cleared today":y<=30?`cleared ${y} days ago`:y<=70?"cleared about two months ago":`cleared ${Math.round(y/30)} months ago`},Cr="#8A7B94",Pr="#4F6353",Dr="#A8814F",Mr="#B4543C",es=(d,y,$,I,j,D)=>it.push({id:"m"+it.length,done:!0,accent:d,icon:y,kind:$,title:I,detail:j,when:D?D.getTime():0,dateLabel:D?D.toLocaleDateString(void 0,{day:"numeric",month:"short",year:"2-digit"}):"",isNew:!!D&&Math.round((r.getTime()-K(D).getTime())/864e5)<=21}),ts=(d,y,$,I,j,D,B)=>it.push({id:"m"+it.length,done:!1,accent:d,icon:y,kind:$,title:I,detail:B,when:0,dateLabel:"",isNew:!1,pct:Math.max(2,Math.min(98,Math.round(j/D*100))),pctLabel:`${Math.min(99,Math.round(j/D*100))}%`}),jr=[25,50,100,250,500,1e3],Ai=jr.filter(d=>he>=d);if(Ai.length){const d=Ai[Ai.length-1],y=Ir(h,d);es(Cr,Oe.clock,"BANKED HOURS",`${d} hours banked`,y?Rr(y):"cleared",y)}const Ds=jr.find(d=>he<d);if(Ds){const d=Ds-he;ts(Cr,Oe.clock,"BANKED HOURS",`${Ds} hours banked`,he,Ds,d<1?`${Math.round(d*60)}m to go`:`${Math.ceil(d)}h to go`)}l.forEach(d=>{const y=h.filter(B=>B.instrumentId===d.id),$=y.reduce((B,se)=>B+se.min,0)/60,I=[10,25,50,100,200],j=I.filter(B=>$>=B);if(j.length){const B=j[j.length-1],se=Ir(y,B);es(d.color,Oe.note,d.name.toUpperCase(),`${B} hours on ${d.name.toLowerCase()}`,se?Rr(se):"cleared",se)}const D=I.find(B=>$<B);if(D){const B=D-$;ts(d.color,Oe.note,d.name.toUpperCase(),`${D} hours on ${d.name.toLowerCase()}`,$,D,B<1?`${Math.round(B*60)}m to go`:`${Math.ceil(B)}h to go`)}});const Nr=[7,14,30,60,100],Ti=Nr.filter(d=>b>=d);if(Ti.length){const d=Ti[Ti.length-1];es(Pr,Oe.bolt,"STREAK",`${d} days unbroken`,m>=b?"still running today":"your longest run so far",m>=b?r:null)}const Ms=Nr.find(d=>b<d);Ms&&ts(Pr,Oe.bolt,"STREAK",`${Ms} days unbroken`,m,Ms,`${Ms-m} more days without a gap`);const js={};for(let d=0;d<200;d++){const y=H(r,-d),$=`${y.getFullYear()}-${y.getMonth()}`,I=js[$]||(js[$]={miss:0,seen:0,d:y});I.seen++,p[y.getTime()]||I.miss++}const Ns=Object.values(js).filter(d=>d.miss===0&&d.seen>=28);if(Ns.length)es(Dr,Oe.cal,"NO GAPS",`${Ns.length} ${Ns.length===1?"month":"months"} with no gaps`,"not a single day missed",Ns[0].d);else{const d=js[`${r.getFullYear()}-${r.getMonth()}`];d&&ts(Dr,Oe.cal,"NO GAPS","A month with no gaps",d.seen-d.miss,d.seen,`${d.miss} ${d.miss===1?"day":"days"} missed this month`)}let Ls=null;for(let d=0;d<26&&!Ls;d++){const y=H(Le,-7*d),$=new Set;h.forEach(I=>{I.t>=y&&I.t<H(y,7)&&$.add(I.instrumentId)}),$.size>=l.length&&l.length>=2&&(Ls=y)}if(Ls)es(Mr,Oe.grid,"WHOLE KIT","Every instrument in one week",`all ${l.length} of them, that week`,Ls);else if(l.length>=2){const d=new Set;h.forEach(y=>{y.t>=Le&&d.add(y.instrumentId)}),ts(Mr,Oe.grid,"WHOLE KIT","Every instrument in one week",d.size,l.length,`${l.length-d.size} still untouched this week`)}const Lr=h[0],ss=Qn(Lr?Lr.t:H(r,-182)),Oi=Math.max(12,Math.min(36,Math.round((Le.getTime()-ss.getTime())/(7*864e5))+1)),wo=Math.max(45,...Object.values(p)),Ii=[];for(let d=0;d<Oi;d++)for(let y=0;y<7;y++){const $=H(ss,d*7+y),I=$.getTime(),j=p[I]||0,D=j&&g[I]?Object.keys(g[I]).sort((Pi,$o)=>g[I][$o]-g[I][Pi])[0]:null,B=$>r,se=I===w;Ii.push({date:$,bg:B?"transparent":j&&D?u(D).color:"#E3E2DB",op:j?(.34+.66*Math.min(1,j/wo)).toFixed(2):"1",ring:se?"1.5px solid #4F6353":"1.5px solid transparent",anim:se?"breathe 5.2s ease-in-out infinite":"none",mark:!1,icon:"",markStroke:"none",cursor:"default"})}it.filter(d=>d.done&&d.when>0).sort((d,y)=>y.when-d.when).forEach(d=>{const y=Math.round((K(new Date(d.when)).getTime()-ss.getTime())/864e5),$=Ii[y];$&&!$.mark&&($.mark=!0,$.bg=d.accent,$.op="1",$.icon=d.icon,$.markStroke="#FAFAF7",$.ring=`1.5px solid ${d.accent}88`,$.anim=d.isNew?"breathe 5.2s ease-in-out infinite":"none",$.cursor="pointer",$.milestoneId=d.id)});const Ur=[];for(let d=0;d<Oi;d+=4)Ur.push({label:H(ss,d*7).toLocaleDateString(void 0,{month:"short"})});const xo=`since ${ss.toLocaleDateString(void 0,{day:"numeric",month:"long"})} · ${Oi} weeks`,Fr={week:7,month:35,quarter:91,year:365},Fe=[];if(a==="week")for(let d=6;d>=0;d--){const y=H(r,-d);Fe.push({from:y,to:H(y,1),label:z[y.getDay()],now:d===0,by:{},total:0})}else if(a==="year")for(let d=11;d>=0;d--){const y=new Date(r.getFullYear(),r.getMonth()-d,1),$=new Date(r.getFullYear(),r.getMonth()-d+1,1);Fe.push({from:y,to:$,label:y.toLocaleDateString(void 0,{month:"narrow"}),now:d===0,by:{},total:0})}else{const d=a==="month"?5:13;for(let y=d-1;y>=0;y--){const $=H(Le,-7*y);Fe.push({from:$,to:H($,7),label:`${$.getDate()}/${$.getMonth()+1}`,now:y===0,by:{},total:0})}}h.forEach(d=>{for(const y of Fe)if(d.t>=y.from&&d.t<y.to){o[d.instrumentId]||(y.by[d.instrumentId]=(y.by[d.instrumentId]||0)+d.min,y.total+=d.min);break}});const Br=Math.max(1,...Fe.map(d=>d.total)),zr=Fe.slice().sort((d,y)=>y.total-d.total)[0],_o=Fe.map(d=>({label:d.label,labelColor:d.now?"#23241F":"#A3A297",labelWeight:d.now?700:500,segments:l.filter(y=>d.by[y.id]&&!o[y.id]).map(y=>({h:(d.by[y.id]/Br*100).toFixed(1),color:y.color,instId:y.id}))})),Us=a==="year"?H(r,-365):H(r,-Fr[a]),Ct=h.filter(d=>d.t>=Us&&!o[d.instrumentId]).reduce((d,y)=>d+y.min,0)||0,Ri=h.filter(d=>d.t>=H(Us,-Fr[a])&&d.t<Us&&!o[d.instrumentId]).reduce((d,y)=>d+y.min,0),Ci=Ri?Math.round((Ct-Ri)/Ri*100):0,ko=l.map(d=>{const $=h.filter(j=>j.instrumentId===d.id&&j.t>=Us).reduce((j,D)=>j+D.min,0),I=Fe.map((j,D)=>{const B=j.by[d.id]||0;return`${(D/Math.max(1,Fe.length-1)*96+2).toFixed(1)},${(32-B/Br*30).toFixed(1)}`}).join(" ");return{id:d.id,name:d.name,color:d.color,minsLabel:F($),shareLabel:`${Ct?Math.round($/Ct*100):0}%`,sharePct:Ct?Math.min(100,Math.round($/Ct*100)):0,spark:I,opacity:o[d.id]?.34:1,isMuted:!!o[d.id]}}).sort((d,y)=>y.sharePct-d.sharePct),So={week:"Week",month:"Month",quarter:"Quarter",year:"Year"};return{streak:m,bestStreak:b,toBeat:R,quip:O,last14:Y,lifeHours:`${Math.floor(he)}h`,lifeHoursRaw:he,lifeSub:`${F(Yt%60)} past the hour · ${h.length} sessions`,nextMile:`${Te}h`,mileGap:F(oe),milePct:N,ringDash:Wa,capX:Ka,capY:Va,oneAway:oo,drift:Xa,pick:dt,recommendation:As,nextUp:no,heatMarked:Ii,heatMonths:Ur,heatSince:xo,milestones:it,msCount:`${it.filter(d=>d.done).length} earned · ${it.filter(d=>!d.done).length} to go`,weekTotal:F(Tt[Ot]),goalLabel:F(n),paceDelta:`${wi>=0?"+":"−"}${F(Math.abs(wi))}`,paceColor:wi>=0?"#4F6353":"#B4543C",medianPts:wr(Ts,6,320,90),actualPts:wr(Tt,Ot,320,90),dow:co,dowBestLabel:_i[kr],dowWorstLabel:_i[Sr],records:Tr,freshLine:fo,freshCount:po,hist:ho,modeLabel:ki[$r].label,dayCurve:Ps,dayArea:mo,bandX:tt(vo).toFixed(1),bandW:(tt(3)-tt(0)).toFixed(1),nowLeft:`${(Zt/24*100).toFixed(2)}%`,nowTop:`${(Rt(yo)/Qt*100).toFixed(2)}%`,windowLabel:`${Vi(Cs)} – ${Vi((Cs+3)%24)}`,windowShare:`${Math.round(Ei/mi*100)}%`,dayTicks:[4,8,12,16,20,0].map(d=>({label:Vi(d)})),themes:bo,buckets:_o,peakLabel:F(zr?zr.total:0),chartTitle:a==="week"?"Minutes per day":a==="year"?"Minutes per month":"Minutes per week",scopeTotal:F(Ct),scopeCaption:`${So[a].toUpperCase()} TO DATE`,scopeDelta:`${Ci>=0?"+":"−"}${Math.abs(Ci)}% vs previous`,scopeDeltaColor:Ci>=0?"#4F6353":"#B4543C",instRows:ko,hasData:f}}const Zn=[{id:"acoustic",label:"Acoustic strings"},{id:"electric",label:"Electric strings"},{id:"bass",label:"Bass"},{id:"piano",label:"Piano / keys"},{id:"pads",label:"Pads / drums"},{id:"wind",label:"Wind"},{id:"voice",label:"Voice"}];function Vt(t){if(!t)return"acoustic";if(t.glyphKind)return t.glyphKind;const e=t.name.toLowerCase();return e.includes("bass")?"bass":e.includes("acoustic")?"acoustic":e.includes("electric")?"electric":e.includes("piano")||e.includes("key")?"piano":e.includes("drum")||e.includes("pad")?"pads":e.includes("sax")||e.includes("flute")||e.includes("trumpet")||e.includes("wind")||e.includes("horn")||e.includes("clarinet")?"wind":e.includes("voice")||e.includes("vocal")||e.includes("sing")?"voice":e.includes("guitar")?"electric":"acoustic"}var Ru=Object.defineProperty,Cu=Object.getOwnPropertyDescriptor,gr=(t,e,s,i)=>{for(var r=i>1?void 0:i?Cu(e,s):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Ru(e,s,r),r};const Pu="50% 50% 50% 50% / 62% 62% 38% 38%";let ks=class extends ie{constructor(){super(...arguments),this.kind="acoustic",this.live=!0}a(t){return this.live?t:"none"}renderStrings(t,e,s,i,r,n,a){return Array.from({length:6},(o,l)=>{const c=e+l*s,u=(c-20)/210*.14*t,h=3.2-l*.42,f=l<3?i:r,p=a!=null?`top:0;bottom:${a}px;`:"top:0;bottom:0;";return v`
        <div
          class="el"
          style="${p}left:${c}px;width:14px;margin-left:-7px;
            animation:${this.a(`gVib ${t}s linear ${u}s infinite`)};"
        >
          <div class="el" style="top:0;bottom:0;left:2px;width:10px;background:${n};border-radius:5px;opacity:0;
            animation:${this.a(`gGhost ${t}s ease-out ${u}s infinite`)};"></div>
          <div class="el" style="top:0;bottom:0;left:50%;width:${h}px;margin-left:-1px;background:${f};border-radius:2px;"></div>
        </div>
      `})}renderPick(t,e,s){return v`
      <div
        class="el"
        style="top:${t}px;left:10px;width:24px;height:28px;background:var(--accent, #FF7A5C);
          border-radius:${Pu};box-shadow:0 4px 10px ${e};
          animation:${this.a(`gPick ${s}s cubic-bezier(0.3,0.6,0.4,1) infinite`)};"
      ></div>
    `}renderAcoustic(){return v`
      ${[.08,.5].map(t=>v`
          <div
            class="el"
            style="left:45px;top:36px;width:160px;height:160px;border-radius:50%;border:2px solid #FBF3E4;opacity:0;
              animation:${this.a(`gRing 1.4s ease-out ${t}s infinite`)};"
          ></div>
        `)}
      <div class="el" style="left:33px;top:24px;width:184px;height:184px;border-radius:50%;
        border:5px solid var(--accent, #FF7A5C);box-shadow:inset 0 0 0 4px #E8A56B;"></div>
      <div class="el" style="left:45px;top:36px;width:160px;height:160px;border-radius:50%;background:var(--stageDeep,#2B1C33);"></div>
      <div class="el" style="left:30px;right:30px;top:262px;height:22px;border-radius:6px;background:#5A3A2A;"></div>
      ${this.renderStrings(1.4,50,30,"#E9CFA0","#FBF3E4","rgba(251,243,228,0.35)",34)}
      ${this.renderPick(216,"rgba(43,28,51,0.35)",1.4)}
    `}renderElectric(){return v`
      ${[46,98,144].map(t=>v`<div class="el" style="left:20px;right:20px;top:${t}px;height:2px;background:rgba(245,233,218,0.16);"></div>`)}
      ${[240,274].map(t=>v`<div class="el" style="left:20px;right:20px;top:${t}px;height:20px;border-radius:10px;background:var(--stageLine,#5A4266);"></div>`)}
      ${this.renderStrings(1,36,36,"#D8C3E6","#F5E9DA","rgba(245,233,218,0.35)",null)}
      ${this.renderPick(196,"rgba(20,10,30,0.4)",1)}
    `}renderBass(){const t=[[0,1.2],[1.5,null],[.6,null],[2.1,null]];return v`
      ${[60,130].map(e=>v`<div class="el" style="left:22px;right:22px;top:${e}px;height:2px;background:rgba(245,233,218,0.16);"></div>`)}
      <div class="el" style="left:22px;right:22px;top:248px;height:26px;border-radius:13px;background:var(--stageLine,#5A4266);"></div>
      ${t.map(([e,s],i)=>{const r=50+i*50,n=6.5-i*1.1;return v`
          <div class="el" style="top:0;bottom:0;left:${r}px;width:20px;margin-left:-10px;
            animation:${this.a(`gBass 2.4s linear ${e}s infinite`)};">
            <div class="el" style="inset:0;animation:${s!=null?this.a(`gBass 2.4s linear ${s}s infinite`):"none"};">
              <div class="el" style="top:0;bottom:0;left:50%;width:${n}px;transform:translateX(-50%);
                background-color:#FFC2A8;background-image:repeating-linear-gradient(180deg,rgba(43,28,51,0.32) 0,rgba(43,28,51,0.32) 1px,transparent 1px,transparent 3px);
                border-radius:3px;"></div>
            </div>
          </div>
        `})}
      ${t.flatMap(([e,s],i)=>[e,s].filter(r=>r!=null).map(r=>v`
              <span
                class="el"
                style="top:186px;left:${50+i*50}px;width:16px;height:16px;margin-left:-8px;border-radius:50%;
                  border:2px solid #F5E9DA;opacity:0;animation:${this.a(`gTap 2.4s ease-out ${r}s infinite`)};"
              ></span>
            `))}
    `}renderPiano(){const t={0:0,2:.3,4:.6,7:.9,9:1.2,5:1.8,3:2.1},e=[0,1,3,4,5,7,8],s={4:1.5},i=["#FF7A5C","#FFC2A8","#B48CD9"],r=Object.keys(t).map(Number).sort((n,a)=>n-a);return v`
      ${r.map((n,a)=>{const o=t[n];return v`
          <span
            class="el"
            style="bottom:140px;left:${n*25+12.5}px;width:11px;height:11px;margin-left:-5.5px;border-radius:50%;
              background:${i[a%3]};opacity:0;animation:${this.a(`gRise 2.4s ease-out ${o}s infinite`)};"
          ></span>
        `})}
      <div class="el" style="left:0;right:0;bottom:0;height:134px;background:var(--stageDeep,#2B1C33);">
        ${Array.from({length:10},(n,a)=>{const o=t[a];return v`
            <div
              class="el"
              style="top:4px;left:${a*25+.5}px;width:24px;height:126px;background:#F5E9DA;border-radius:0 0 7px 7px;overflow:hidden;
                animation:${o!=null?this.a(`gKey 2.4s ease-out ${o}s infinite`):"none"};"
            >
              <div class="el" style="inset:0;background:linear-gradient(180deg,#F5E9DA 0%,#FF7A5C 100%);opacity:0;
                animation:${o!=null?this.a(`gLit 2.4s ease-out ${o}s infinite`):"none"};"></div>
            </div>
          `})}
        ${e.map((n,a)=>{const o=s[a];return v`
            <div
              class="el"
              style="top:4px;left:${(n+1)*25-7}px;width:15px;height:78px;background:var(--stageKey,#3A2845);border-radius:0 0 5px 5px;
                overflow:hidden;box-shadow:0 2px 0 #1F1426;
                animation:${o!=null?this.a(`gKey 2.4s ease-out ${o}s infinite`):"none"};"
            >
              <div class="el" style="inset:0;background:#B48CD9;opacity:0;
                animation:${o!=null?this.a(`gLit 2.4s ease-out ${o}s infinite`):"none"};"></div>
            </div>
          `})}
      </div>
    `}renderPads(){const t={r:"#FF7A5C",c:"#F5E9DA",l:"#B48CD9",m:"#7FD1C1",p:"#FFC2A8"},e={12:["r",.6,0],13:["c",1.2,.6],2:["p",.3,.15],9:["m",2.4,1.05],10:["m",2.4,1.35],14:["r",2.4,1.95],15:["p",2.4,2.25],6:["l",2.4,.45],3:["l",2.4,1.65],0:["m",2.4,2.1]};return v`
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
        <div style="display:grid;grid-template-columns:repeat(4,50px);gap:9px;">
          ${Array.from({length:16},(s,i)=>{const r=e[i],n=r?t[r[0]]:"transparent",a=r?this.a(`gPad ${r[1]}s ease-out ${r[2]}s infinite`):"none";return v`
              <div style="width:50px;height:50px;border-radius:50%;background:var(--stageKey,#3A2845);position:relative;">
                <div style="position:absolute;inset:0;border-radius:50%;background:${n};opacity:0;
                  box-shadow:0 0 20px ${n};animation:${a};"></div>
              </div>
            `})}
        </div>
      </div>
    `}renderWind(){return v`
      <div style="position:absolute;left:18px;top:148px;width:176px;height:26px;border-radius:13px;background:#E8C27A;
        display:flex;align-items:center;justify-content:space-around;padding:0 12px;">
        ${Array.from({length:6},(t,e)=>v`
          <span style="width:12px;height:12px;border-radius:50%;background:var(--stageDeep,#2B1C33);
            animation:${this.a(`gHole 1.6s steps(1) ${(e*.2).toFixed(1)}s infinite`)};"></span>
        `)}
      </div>
      <div class="el" style="left:182px;top:120px;width:56px;height:82px;border-radius:0 40px 40px 0;background:#E8C27A;"></div>
      <div class="el" style="left:196px;top:136px;width:30px;height:50px;border-radius:0 26px 26px 0;background:var(--stageDeep,#2B1C33);"></div>
      ${[0,.4,.8,1.2].map(t=>v`
          <span
            class="el"
            style="left:204px;top:142px;width:22px;height:22px;border-radius:50%;background:#F5E9DA;opacity:0;
              animation:${this.a(`gPuff 1.6s ease-out ${t}s infinite`)};"
          ></span>
        `)}
    `}renderVoice(){const t=["#FF7A5C","#FFC2A8","#B48CD9","#F5E9DA"],e=Array.from({length:22},(s,i)=>20+Math.round(Math.abs(Math.sin(i*.9))*40));return v`
      ${[0,.45,.9,1.35].map((s,i)=>v`
          <span
            class="el"
            style="left:75px;top:70px;width:100px;height:100px;border-radius:50%;border:3px solid ${t[i]};opacity:0;
              animation:${this.a(`gArc 1.8s ease-out ${s}s infinite`)};"
          ></span>
        `)}
      <span class="el" style="left:103px;top:98px;width:44px;height:44px;border-radius:50%;background:var(--accent,#FF7A5C);"></span>
      <div style="position:absolute;left:22px;right:22px;bottom:40px;height:60px;display:flex;align-items:center;gap:4px;">
        ${e.map((s,i)=>v`
            <span
              style="flex:1;height:${s}px;border-radius:3px;background:#B48CD9;transform-origin:50% 50%;
                animation:${this.a(`gBar ${(.5+i%5*.12).toFixed(2)}s ease-in-out ${(i*.05).toFixed(2)}s infinite alternate`)};"
            ></span>
          `)}
      </div>
    `}render(){const t={acoustic:"#B07A4E",electric:"var(--stage, #46304F)",bass:"var(--stage, #46304F)",piano:"var(--stage, #46304F)",pads:"var(--stage, #46304F)",wind:"var(--stage, #46304F)",voice:"var(--stage, #46304F)"};let e;switch(this.kind){case"electric":e=this.renderElectric();break;case"bass":e=this.renderBass();break;case"piano":e=this.renderPiano();break;case"pads":e=this.renderPads();break;case"wind":e=this.renderWind();break;case"voice":e=this.renderVoice();break;default:e=this.renderAcoustic()}return v`<div class="canvas" style="background:${t[this.kind]};">${e}</div>`}};ks.styles=ge`
    :host {
      display: block;
      width: 250px;
      height: 310px;
    }

    .canvas {
      position: relative;
      width: 250px;
      height: 310px;
      overflow: hidden;
      border-radius: 18px;
    }

    .el {
      position: absolute;
    }

    @keyframes gVib {
      0% { transform: translateX(0); }
      2% { transform: translateX(2.6px); }
      4% { transform: translateX(-2.4px); }
      6% { transform: translateX(2.1px); }
      8% { transform: translateX(-1.8px); }
      10% { transform: translateX(1.5px); }
      13% { transform: translateX(-1.1px); }
      16% { transform: translateX(0.8px); }
      20% { transform: translateX(-0.5px); }
      25% { transform: translateX(0.25px); }
      30%, 100% { transform: translateX(0); }
    }

    @keyframes gBass {
      0% { transform: translateX(0); }
      2% { transform: translateX(5px); }
      4.5% { transform: translateX(-4.6px); }
      7% { transform: translateX(4.1px); }
      9.5% { transform: translateX(-3.6px); }
      12% { transform: translateX(3px); }
      15% { transform: translateX(-2.4px); }
      18% { transform: translateX(1.8px); }
      22% { transform: translateX(-1.2px); }
      26% { transform: translateX(0.7px); }
      31% { transform: translateX(-0.35px); }
      36%, 100% { transform: translateX(0); }
    }

    @keyframes gGhost {
      0% { opacity: 0; transform: scaleX(1); }
      2% { opacity: 0.5; transform: scaleX(1); }
      30% { opacity: 0; transform: scaleX(0.3); }
      100% { opacity: 0; }
    }

    @keyframes gPick {
      0% { transform: translateX(0) rotate(-8deg); opacity: 1; }
      14% { transform: translateX(210px) rotate(8deg); opacity: 1; }
      22% { transform: translateX(226px) rotate(8deg); opacity: 0; }
      88% { transform: translateX(0) rotate(-8deg); opacity: 0; }
      100% { transform: translateX(0) rotate(-8deg); opacity: 1; }
    }

    @keyframes gTap {
      0% { opacity: 0.9; transform: scale(1); }
      12% { opacity: 0; transform: scale(2.6); }
      100% { opacity: 0; transform: scale(2.6); }
    }

    @keyframes gKey {
      0% { transform: translateY(0); }
      3% { transform: translateY(4px); }
      16%, 100% { transform: translateY(0); }
    }

    @keyframes gLit {
      0% { opacity: 0; }
      3% { opacity: 1; }
      22%, 100% { opacity: 0; }
    }

    @keyframes gRise {
      0% { opacity: 0; transform: translateY(0) scale(0.6); }
      3% { opacity: 1; transform: translateY(-8px) scale(1); }
      34% { opacity: 0; transform: translateY(-170px) scale(0.8); }
      100% { opacity: 0; transform: translateY(-170px); }
    }

    @keyframes gPad {
      0% { opacity: 1; transform: scale(0.88); }
      35%, 100% { opacity: 0; transform: scale(1); }
    }

    @keyframes gRing {
      0% { transform: scale(1); opacity: 0.45; }
      60%, 100% { transform: scale(1.9); opacity: 0; }
    }

    @keyframes gHole {
      0%, 100% { background: var(--stageDeep, #2B1C33); }
      50% { background: #F5E9DA; }
    }

    @keyframes gPuff {
      0% { transform: translate(0, 0) scale(0.5); opacity: 0; }
      15% { opacity: 0.85; }
      100% { transform: translate(38px, -46px) scale(1.7); opacity: 0; }
    }

    @keyframes gArc {
      0% { transform: scale(0.5); opacity: 0; }
      20% { opacity: 0.9; }
      100% { transform: scale(2.2); opacity: 0; }
    }

    @keyframes gBar {
      from { transform: scaleY(0.25); }
      to { transform: scaleY(1); }
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
      }
    }
  `;gr([P({type:String})],ks.prototype,"kind",2);gr([P({type:Boolean})],ks.prototype,"live",2);ks=gr([Se("pt-glyph")],ks);var Du=Object.defineProperty,Mu=Object.getOwnPropertyDescriptor,Me=(t,e,s,i)=>{for(var r=i>1?void 0:i?Mu(e,s):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Du(e,s,r),r};let fe=class extends ie{constructor(){super(...arguments),this.instruments=[],this.sessions=[],this.settings={soundEnabled:!0,hapticsEnabled:!0},this.now=Date.now(),this.quickLogOpen=!1,this.selectedRetargetId=null,this.recentEndedSession=null,this.toastTimeout=null,this.pastSessionNote=""}dispatch(t,e){this.dispatchEvent(new CustomEvent(t,{detail:e,bubbles:!0,composed:!0}))}handleStart(t){this.selectedRetargetId=null,this.dispatch("start-session",{instrumentId:t})}handleQuickPastLog(t,e,s){this.dispatch("quick-log-session",{instrumentId:t,duration:e,daysAgo:s})}handleSaveDraftNotes(){this.recentEndedSession&&this.dispatch("update-session",{session:{...this.recentEndedSession.session,notes:this.pastSessionNote.trim()}}),this.dismissDraft()}dismissDraft(){this.recentEndedSession=null,this.pastSessionNote="",this.toastTimeout&&clearTimeout(this.toastTimeout)}hhmm(t){let e=t.getHours();const s=e>=12?"pm":"am";return e=e%12||12,`${e}:${String(t.getMinutes()).padStart(2,"0")}${s}`}willUpdate(t){if(!t.has("sessions"))return;const e=t.get("sessions")||[],s=new Set(e.map(n=>n.id)),i=this.sessions.filter(n=>!n.deletedAt)[0];if(!i||s.has(i.id)||e.length===0)return;const r=this.instruments.find(n=>n.id===i.instrumentId);this.recentEndedSession={session:i,name:(r==null?void 0:r.name)||"Session"},this.pastSessionNote=i.notes||"",this.toastTimeout&&clearTimeout(this.toastTimeout),this.toastTimeout=setTimeout(()=>this.dismissDraft(),12e3)}render(){const t=qa(this.sessions,this.instruments,{range:"week",now:new Date(this.now),selectedInstrumentId:this.selectedRetargetId,weeklyGoalMinutes:this.settings.weeklyGoalMinutes}),e=this.instruments.find(u=>u.id===t.nextUp.selectedId)||null,s=t.nextUp.selectedId!==t.pick.id,i=Vt(e),r=t.nextUp.line.split(" · ")[0].replace(/^Last /,"").toLowerCase(),n=this.sessions.filter(u=>!u.deletedAt&&Yo(new Date(u.start),new Date(this.now))),a=n.reduce((u,h)=>u+h.duration,0),o=ur(this.sessions,new Date(this.now)),l=this.settings.weeklyGoalMinutes||420,c=Math.min(100,Math.round(o/l*100));return v`
      <div class="wrap">
        <div class="top-grid">
          <div class="hero-card">
            <div class="hero-glyph-box">
              <div class="hero-glyph-scale">
                <pt-glyph .kind=${i} .live=${this.settings.heroGlyphAnimated!==!1}></pt-glyph>
              </div>
            </div>
            <div class="hero-info">
              <div class="hero-tag" style="color:${s?"var(--ink)":"var(--accent)"}">
                ${s?"Your pick":`Play next · ${r}`}
              </div>
              <div class="hero-name">${t.nextUp.name}</div>
              <div class="hero-reason">${t.nextUp.reason}</div>
              <div class="hero-spacer"></div>
              ${s?v`<button class="back-to-suggestion" @click=${()=>this.selectedRetargetId=null}>
                    Back to the suggestion
                  </button>`:""}
              <button class="play-btn" @click=${()=>this.handleStart(t.nextUp.selectedId)}>
                <span class="play-triangle"></span>
                Play ${t.nextUp.name}
              </button>
            </div>
          </div>

          <div class="right-col">
            <div class="tiles-grid">
              ${t.nextUp.queue.filter(u=>u.id!==t.nextUp.selectedId).map(u=>{const h=this.instruments.find(f=>f.id===u.id)||null;return v`
                    <div class="tile" @click=${()=>this.selectedRetargetId=u.id}>
                      <div class="tile-glyph-box">
                        <div class="tile-glyph-scale">
                          <pt-glyph .kind=${Vt(h)} .live=${!1}></pt-glyph>
                        </div>
                      </div>
                      <div class="tile-info">
                        <div class="tile-name-row">
                          <span class="tile-dot" style="background:${u.color}"></span>
                          <span class="tile-name">${u.name}</span>
                        </div>
                        <div class="tile-sub">${u.ago}</div>
                      </div>
                      <button
                        class="tile-play-btn"
                        @click=${f=>{f.stopPropagation(),this.handleStart(u.id)}}
                      >
                        <span class="play-triangle tile-play-triangle"></span>
                      </button>
                    </div>
                  `})}
            </div>

        <div class="summary-card">
          <div class="summary-header">
            <span>Today</span>
            <span>${a>0?F(a):""}</span>
          </div>
          ${n.length>0?v`
                <div class="summary-chips">
                  ${n.map(u=>{const h=this.instruments.find(f=>f.id===u.instrumentId);return v`
                      <span class="summary-chip">
                        <span style="width:6px;height:6px;border-radius:50%;background:${(h==null?void 0:h.color)||"var(--muted)"}"></span>
                        ${(h==null?void 0:h.name)||"Session"} · ${F(u.duration)}
                      </span>
                    `})}
                  <button class="summary-chip-add" @click=${()=>this.dispatch("open-manual-log")}>+ past session</button>
                </div>
              `:v`
                <div class="summary-empty">Nothing yet today.</div>
                <button class="summary-chip-add" style="align-self:flex-start" @click=${()=>this.dispatch("open-manual-log")}>+ past session</button>
              `}
          <div class="progress-row">
            <div class="progress-track">
              <div class="progress-fill" style="width:${c}%"></div>
            </div>
            <div class="progress-caption">${F(o)} of ${F(l)} this week</div>
          </div>
        </div>
          </div>
        </div>

        ${this.quickLogOpen?v`
              <div class="quick-log-panel">
                <div class="quick-log-header">
                  <span>1-tap past log for ${t.nextUp.name}</span>
                  <button
                    @click=${()=>{this.quickLogOpen=!1,this.dispatch("open-manual-log")}}
                  >
                    Custom date & notes →
                  </button>
                </div>
                <div class="quick-log-rows">
                  <div class="quick-log-row">
                    <span class="quick-log-row-label">Yesterday:</span>
                    ${[15,20,30,45,60].map(u=>v`
                        <button
                          class="quick-chip"
                          @click=${()=>{this.handleQuickPastLog(t.nextUp.selectedId,u,1),this.quickLogOpen=!1}}
                        >
                          ${u}m
                        </button>
                      `)}
                  </div>
                  <div class="quick-log-row">
                    <span class="quick-log-row-label">2 days ago:</span>
                    ${[15,20,30,45,60].map(u=>v`
                        <button
                          class="quick-chip"
                          @click=${()=>{this.handleQuickPastLog(t.nextUp.selectedId,u,2),this.quickLogOpen=!1}}
                        >
                          ${u}m
                        </button>
                      `)}
                  </div>
                </div>
              </div>
            `:v`
              <button
                class="summary-chip-add"
                style="align-self:flex-start"
                @click=${()=>this.quickLogOpen=!0}
              >
                + 1-tap past log
              </button>
            `}

        ${this.recentEndedSession?v`
              <div class="draft-sheet">
                <div class="draft-title">Nice session.</div>
                <div class="draft-sub">
                  ${this.hhmm(new Date(this.recentEndedSession.session.start))} →
                  ${this.hhmm(new Date(this.recentEndedSession.session.end))}
                </div>
                <div class="draft-row">
                  <input
                    class="draft-note-input"
                    type="text"
                    placeholder="What did you work on?"
                    .value=${this.pastSessionNote}
                    @input=${u=>this.pastSessionNote=u.target.value}
                  />
                </div>
                <div class="draft-actions">
                  <button class="draft-save" @click=${this.handleSaveDraftNotes}>Save session</button>
                  <button class="draft-dismiss" @click=${()=>this.dismissDraft()}>Discard</button>
                </div>
              </div>
            `:""}
      </div>
    `}};fe.styles=[Je,ge`
      :host {
        display: block;
        animation: fadeIn 220ms ease-out both;
        font-family: 'Manrope', sans-serif;
        color: var(--ink);
      }

      .wrap {
        display: flex;
        flex-direction: column;
        gap: 14px;
        width: 100%;
      }

      .top-grid {
        display: grid;
        grid-template-columns: 340px minmax(0, 1fr);
        gap: 12px;
        align-items: start;
      }

      @media (max-width: 859px) {
        .top-grid {
          grid-template-columns: minmax(0, 1fr);
        }
      }

      /* Hero card */
      .hero-card {
        background: var(--card);
        border-radius: 28px;
        border: 2px solid var(--accent);
        padding: 14px;
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      @media (max-width: 859px) {
        .hero-card {
          flex-direction: row;
          align-items: flex-start;
        }
      }

      .hero-info {
        display: flex;
        flex-direction: column;
        gap: 6px;
        min-width: 0;
        flex: 1;
      }

      .hero-glyph-box {
        width: 280px;
        height: 347px;
        overflow: hidden;
        border-radius: 18px;
        flex-shrink: 0;
      }

      @media (max-width: 859px) {
        .hero-glyph-box {
          width: 120px;
          height: 149px;
        }
      }

      .hero-glyph-scale {
        transform: scale(1.12);
        transform-origin: 0 0;
      }

      @media (max-width: 859px) {
        .hero-glyph-scale {
          transform: scale(0.48);
        }
      }

      .hero-tag {
        display: inline-flex;
        align-self: flex-start;
        background: var(--bg);
        border-radius: 999px;
        padding: 5px 10px;
        font-size: 11.5px;
        font-weight: 800;
      }

      .hero-name {
        font-family: 'Gabarito', sans-serif;
        font-weight: 800;
        font-size: 28px;
        letter-spacing: -0.02em;
        line-height: 1.05;
      }

      @media (max-width: 859px) {
        .hero-name {
          font-size: 21px;
        }
      }

      .hero-reason {
        font-size: 13px;
        color: var(--muted);
        line-height: 1.45;
      }

      .hero-spacer {
        flex: 1;
      }

      .play-btn {
        height: 56px;
        border-radius: 999px;
        border: none;
        background: var(--accent);
        color: var(--bg);
        font-family: 'Gabarito', sans-serif;
        font-size: 17px;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        cursor: pointer;
        width: 100%;
      }

      .play-btn:hover {
        background: var(--accentHi);
      }

      /* Solid CSS-triangle play glyph (matches the prototype's border-trick
         icon) instead of an outlined arrow. */
      .play-triangle {
        width: 0;
        height: 0;
        border-left: 12px solid var(--bg);
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        flex-shrink: 0;
      }

      .tile-play-triangle {
        border-left-width: 9px;
        border-top-width: 6px;
        border-bottom-width: 6px;
        border-left-color: var(--ink);
      }

      .tile-play-btn:hover .tile-play-triangle {
        border-left-color: var(--bg);
      }

      .play-btn:active {
        transform: scale(0.97);
      }

      .back-to-suggestion {
        background: transparent;
        border: none;
        color: var(--muted);
        font-size: 12px;
        font-weight: 800;
        text-align: center;
        cursor: pointer;
        padding: 6px;
      }

      .back-to-suggestion:hover {
        color: var(--accent);
      }

      /* Right column: tiles grid + Today summary card, stacked — NOT a
         sibling of .top-grid. The summary card is only as wide as this
         column (matches the tiles above it), not the full page width. */
      .right-col {
        display: flex;
        flex-direction: column;
        gap: 12px;
        min-width: 0;
      }

      /* Other instrument tiles — 2 columns, except the 860–1039px "wide but
         narrower than 1040" zone where the sidebar-width second grid track
         is too tight for 2 tiles, so it drops to 1 column there only. */
      .tiles-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 10px;
      }

      @media (min-width: 860px) and (max-width: 1039px) {
        .tiles-grid {
          grid-template-columns: minmax(0, 1fr);
        }
      }

      .tile {
        background: var(--card);
        border-radius: 22px;
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        border: 2px solid transparent;
        transition: border-color 160ms ease-out;
      }

      .tile:hover {
        border-color: var(--line);
      }

      .tile-glyph-box {
        width: 92px;
        height: 114px;
        overflow: hidden;
        border-radius: 12px;
        flex-shrink: 0;
      }

      @media (max-width: 859px) {
        .tile-glyph-box {
          width: 48px;
          height: 60px;
        }
      }

      .tile-glyph-scale {
        transform: scale(0.368);
        transform-origin: 0 0;
      }

      @media (max-width: 859px) {
        .tile-glyph-scale {
          transform: scale(0.192);
        }
      }

      .tile-info {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .tile-name-row {
        display: flex;
        align-items: center;
        gap: 7px;
      }

      .tile-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .tile-name {
        font-family: 'Gabarito', sans-serif;
        font-size: 15px;
        font-weight: 800;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .tile-sub {
        font-size: 12px;
        color: var(--muted);
      }

      .tile-play-btn {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: none;
        background: var(--raised);
        color: var(--ink);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
      }

      .tile-play-btn:hover {
        background: var(--accent);
        color: var(--bg);
      }

      /* Today summary card */
      .summary-card {
        background: var(--card);
        border-radius: 24px;
        padding: 14px 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .summary-header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        font-family: 'Gabarito', sans-serif;
        font-weight: 800;
        font-size: 15px;
      }

      .summary-chips {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .summary-chip {
        display: flex;
        align-items: center;
        gap: 6px;
        background: var(--raised);
        border-radius: 999px;
        padding: 7px 12px;
        font-size: 12px;
        font-weight: 700;
      }

      .summary-chip-add {
        border: 2px dashed var(--line);
        background: transparent;
        color: var(--muted);
        border-radius: 999px;
        padding: 8px 13px;
        font-size: 12.5px;
        font-weight: 800;
        cursor: pointer;
      }

      .summary-chip-add:hover {
        background: var(--raised);
      }

      .summary-empty {
        font-size: 13px;
        color: var(--muted);
      }

      .progress-row {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .progress-track {
        flex: 1;
        height: 8px;
        border-radius: 999px;
        background: var(--bg);
        overflow: hidden;
      }

      .progress-fill {
        height: 100%;
        border-radius: 999px;
        background: var(--chart);
        transition: width 400ms ease-out;
      }

      .progress-caption {
        font-size: 12px;
        font-weight: 700;
        color: var(--muted);
        white-space: nowrap;
      }

      /* Quick log drawer */
      .quick-log-panel {
        background: var(--card);
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
        font-size: 12px;
        font-weight: 800;
        color: var(--muted);
      }

      .quick-log-header button {
        background: transparent;
        border: none;
        color: var(--accent);
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
      }

      .quick-log-rows {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .quick-log-row {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }

      .quick-log-row-label {
        font-size: 12.5px;
        font-weight: 700;
        color: var(--muted);
        min-width: 90px;
      }

      .quick-chip {
        background: var(--raised);
        border-radius: 999px;
        padding: 6px 14px;
        font-size: 12px;
        font-weight: 700;
        color: var(--ink);
        cursor: pointer;
        border: none;
      }

      .quick-chip:hover {
        background: var(--accent);
        color: var(--bg);
      }

      /* Post-session draft sheet */
      .draft-sheet {
        background: var(--card);
        border-radius: 20px;
        padding: 16px 18px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        animation: sheetIn 420ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
      }

      .draft-title {
        font-family: 'Gabarito', sans-serif;
        font-weight: 800;
        font-size: 16px;
      }

      .draft-sub {
        font-size: 12.5px;
        color: var(--muted);
      }

      .draft-row {
        display: flex;
        gap: 10px;
      }

      .draft-note-input {
        flex: 1;
        background: var(--raised);
        border: 1px solid var(--line);
        border-radius: 12px;
        padding: 10px 12px;
        font-size: 13px;
        color: var(--ink);
        outline: none;
        font-family: 'Manrope', sans-serif;
      }

      .draft-note-input:focus {
        border-color: var(--accent);
      }

      .draft-actions {
        display: flex;
        gap: 8px;
      }

      .draft-save {
        background: var(--accent);
        color: var(--bg);
        border: none;
        border-radius: 999px;
        padding: 10px 18px;
        font-size: 13px;
        font-weight: 800;
        cursor: pointer;
        font-family: 'Gabarito', sans-serif;
      }

      .draft-dismiss {
        background: transparent;
        border: none;
        color: var(--muted);
        cursor: pointer;
        font-size: 13px;
      }
    `];Me([P({type:Array})],fe.prototype,"instruments",2);Me([P({type:Array})],fe.prototype,"sessions",2);Me([P({type:Object})],fe.prototype,"settings",2);Me([P({type:Number})],fe.prototype,"now",2);Me([A()],fe.prototype,"quickLogOpen",2);Me([A()],fe.prototype,"selectedRetargetId",2);Me([A()],fe.prototype,"recentEndedSession",2);Me([A()],fe.prototype,"toastTimeout",2);Me([A()],fe.prototype,"pastSessionNote",2);fe=Me([Se("pt-today-view")],fe);var ju=Object.defineProperty,Nu=Object.getOwnPropertyDescriptor,$e=(t,e,s,i)=>{for(var r=i>1?void 0:i?Nu(e,s):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&ju(e,s,r),r};function ea(t){const e=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${e}-${s}-${i}`}function ta(t){const e=String(t.getHours()).padStart(2,"0"),s=String(t.getMinutes()).padStart(2,"0");return`${e}:${s}`}function Lu(t){const e=Vt(t);return e==="piano"?"keys":e==="pads"?"pads":e==="wind"||e==="voice"?"air":"strings"}const Uu=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],sa=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ia=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];let de=class extends ie{constructor(){super(...arguments),this.instruments=[],this.sessions=[],this.openRowId=null,this.editInstIdDraft="",this.editDateDraft="",this.editTimeDraft="",this.editDurationDraft=30,this.editNoteDraft="",this.selectedDayFilter=null,this.selectedInstFilter=null}handleOpenManualLog(){this.dispatchEvent(new CustomEvent("open-manual-log",{bubbles:!0,composed:!0}))}handleToggleRow(t){this.openRowId===t.id?this.openRowId=null:(this.openRowId=t.id,this.editInstIdDraft=t.instrumentId,this.editDateDraft=ea(t.t),this.editTimeDraft=ta(t.t),this.editDurationDraft=t.duration||t.min,this.editNoteDraft=t.notes||"")}handleSaveRow(t){const[e,s,i]=(this.editDateDraft||ea(new Date(t.start))).split("-").map(Number),[r,n]=(this.editTimeDraft||ta(new Date(t.start))).split(":").map(Number),a=new Date(e,s-1,i,r||0,n||0,0,0),o=Math.max(1,Math.round(this.editDurationDraft||t.duration||1)),l=new Date(a.getTime()+o*6e4);this.dispatchEvent(new CustomEvent("update-session",{detail:{session:{...t,instrumentId:this.editInstIdDraft||t.instrumentId,start:a.toISOString(),end:l.toISOString(),duration:o,notes:this.editNoteDraft.trim()||void 0}},bubbles:!0,composed:!0})),this.openRowId=null}handleDelete(t){this.dispatchEvent(new CustomEvent("delete-session",{detail:{sessionId:t},bubbles:!0,composed:!0})),this.openRowId=null}adjustDuration(t){this.editDurationDraft=Math.max(1,this.editDurationDraft+t)}toggleDayFilter(t){this.selectedDayFilter=this.selectedDayFilter===t?null:t}clearFilters(){this.selectedDayFilter=null,this.selectedInstFilter=null}renderFamilyIcon(t){return t==="keys"?v`<div class="icon-keys"><span></span><span></span><span></span></div>`:t==="pads"?v`<div class="icon-pads"><span></span><span></span><span></span><span></span></div>`:t==="air"?v`<div class="icon-air"></div>`:v`<div class="icon-strings"><span></span><span></span><span></span><span></span></div>`}render(){const t=this.instruments.filter(g=>!g.archived),e=new Map;this.instruments.forEach(g=>e.set(g.id,g));const s=g=>e.get(g)||{id:g,name:"Instrument",color:"#6B7F6E",tier:"primary"},i=this.sessions.filter(g=>!g.deletedAt).map(g=>({...g,t:new Date(g.start),min:Math.max(1,g.duration)})).sort((g,m)=>m.t.getTime()-g.t.getTime()),r=K(new Date),n=Array.from({length:7},(g,m)=>H(r,-(6-m))),a=i.filter(g=>K(g.t).getTime()>=n[0].getTime()).reduce((g,m)=>g+m.min,0),o=i.filter(g=>!(this.selectedDayFilter!=null&&K(g.t).getTime()!==this.selectedDayFilter||this.selectedInstFilter&&g.instrumentId!==this.selectedInstFilter)),l=i.length,c=g=>Math.round((r.getTime()-K(g).getTime())/864e5),u=g=>{let m=g.getHours();const w=m>=12?"pm":"am";return m=m%12||12,`${m}:${String(g.getMinutes()).padStart(2,"0")}${w}`},h=new Map;o.forEach(g=>{const m=K(g.t).getTime();let w=h.get(m);w||(w={key:m,t:g.t,rows:[],min:0},h.set(m,w)),w.min+=g.min,w.rows.push(g)});const f=Array.from(h.values()),p=5;return v`
      <div class="log-wrap">
        <!-- 7-day strip (bare row, no card wrapper) -->
        <div class="week-strip-row">
          <div class="week-strip-grid">
            ${n.map(g=>{const m=g.getTime(),w=m===r.getTime(),x=this.selectedDayFilter===m,_=Array.from(new Set(i.filter(b=>K(b.t).getTime()===m).map(b=>b.instrumentId))).slice(0,2).map(b=>s(b).color);return v`
                <div
                  class="day-cell ${w?"today":""} ${x?"selected":""}"
                  @click=${()=>this.toggleDayFilter(m)}
                >
                  <div class="day-dow">${Uu[g.getDay()]}</div>
                  <div class="day-num">${g.getDate()}</div>
                  <div class="day-dots">
                    ${_.map(b=>v`<span class="day-dot" style="background:${b}"></span>`)}
                  </div>
                </div>
              `})}
          </div>
          <div class="week-strip-total">
            <div class="week-strip-total-num">${F(a)}</div>
            <div class="week-strip-total-label">last 7 days</div>
          </div>
        </div>

        <!-- Filter row -->
        <div class="filter-row">
          <button
            class="filter-chip ${this.selectedInstFilter===null?"active":""}"
            @click=${()=>this.selectedInstFilter=null}
          >
            All
          </button>
          ${t.map(g=>v`
              <button
                class="filter-chip ${this.selectedInstFilter===g.id?"active":""}"
                @click=${()=>this.selectedInstFilter=this.selectedInstFilter===g.id?null:g.id}
              >
                <span class="filter-chip-dot" style="background:${g.color}"></span>
                ${g.name}
              </button>
            `)}
          <span class="filter-row-spacer"></span>
          <button class="btn-past-session" @click=${this.handleOpenManualLog}>+ past session</button>
        </div>

        <!-- Groups List -->
        <div class="log-groups-list">
          ${l===0?v`
                <div class="empty-state-card">
                  No practice sessions logged yet. Use <strong>+ past session</strong> above or start a live timer from
                  <strong>Today</strong>.
                </div>
              `:f.length>0?f.map(g=>{const m=c(g.t),w=m===0?"Today":m===1?"Yesterday":`${sa[g.t.getDay()]} ${g.t.getDate()} ${ia[g.t.getMonth()]}`,x=m<=1?`${sa[g.t.getDay()]} ${g.t.getDate()} ${ia[g.t.getMonth()]}`:"",_=g.min||1;return v`
                  <div class="day-group">
                    <div class="group-header">
                      <span class="group-day-title">${w}</span>
                      ${x?v`<span class="group-date-sub">${x}</span>`:""}
                      <span class="group-header-spacer"></span>
                      <div class="group-duration-bar">
                        ${g.rows.map(b=>v`
                            <span
                              class="group-duration-seg"
                              style="width:${b.min/_*100}%;background:${s(b.instrumentId).color}"
                            ></span>
                          `)}
                      </div>
                      <span class="group-total-num">${F(g.min)}</span>
                    </div>

                    ${g.rows.map(b=>{const k=s(b.instrumentId),R=this.openRowId===b.id,O=Lu(k),C=Math.max(...g.rows.map(z=>z.min),1);return v`
                        <div class="log-row ${R?"open":""}">
                          <div class="row-main" @click=${()=>this.handleToggleRow(b)}>
                            <div class="row-family-icon" style="background:${k.color}">
                              ${this.renderFamilyIcon(O)}
                            </div>
                            <div class="row-info">
                              <div class="row-name-line">
                                ${k.name}<span class="row-time-tag">${u(b.t)}</span>
                              </div>
                              <div class="row-note-line">${b.notes||"No note"}</div>
                            </div>
                            <div class="row-mini-bar">
                              <div class="row-mini-bar-fill" style="width:${b.min/C*100}%;background:${k.color}"></div>
                            </div>
                            <div class="row-duration">${F(b.min)}</div>
                            <div class="row-sync-dot">✓</div>
                          </div>

                          ${R?v`
                                <div class="row-editor">
                                  <div class="editor-chips-row">
                                    ${t.map(z=>{const Y=(this.editInstIdDraft||b.instrumentId)===z.id;return v`
                                        <div
                                          class="editor-chip"
                                          style="background:${Y?z.color:"var(--raised)"};color:${Y?"var(--bg)":"var(--ink)"}"
                                          @click=${()=>this.editInstIdDraft=z.id}
                                        >
                                          <span class="editor-chip-dot" style="background:${Y?"var(--bg)":z.color}"></span>
                                          ${z.name}
                                        </div>
                                      `})}
                                  </div>

                                  <div class="editor-actions-row">
                                    <div class="editor-stepper">
                                      <button class="editor-stepper-btn" @click=${()=>this.adjustDuration(-p)}>−</button>
                                      <span class="editor-stepper-value">${this.editDurationDraft}m</span>
                                      <button class="editor-stepper-btn" @click=${()=>this.adjustDuration(p)}>+</button>
                                    </div>
                                    <input
                                      type="text"
                                      class="editor-note-input"
                                      placeholder="Add a note"
                                      .value=${this.editNoteDraft}
                                      @input=${z=>this.editNoteDraft=z.target.value}
                                      @keydown=${z=>{z.key==="Enter"&&this.handleSaveRow(b)}}
                                    />
                                    <button class="editor-delete-btn" @click=${()=>this.handleDelete(b.id)}>Delete</button>
                                    <button class="editor-done-btn" @click=${()=>this.handleSaveRow(b)}>Done</button>
                                  </div>
                                </div>
                              `:""}
                        </div>
                      `})}
                  </div>
                `}):v`
                <div class="empty-state-card">
                  No sessions match. <button class="empty-clear-link" @click=${this.clearFilters}>Clear filters</button>
                </div>
              `}
        </div>
      </div>
    `}};de.styles=[Je,ge`
      :host {
        display: block;
        animation: fadeIn 220ms ease-out both;
        color: var(--ink);
        font-family: 'Manrope', system-ui, sans-serif;
      }

      .log-wrap {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
      }

      /* 7-day strip — a bare row, not a card (matches the source exactly:
         each day cell carries its own background, nothing wraps the row). */
      .week-strip-row {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
      }

      .week-strip-grid {
        flex: 1;
        min-width: 260px;
        display: grid;
        grid-template-columns: repeat(7, minmax(0, 1fr));
        gap: 5px;
      }

      .day-cell {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        padding: 7px 0 8px;
        border-radius: 16px;
        border: 2px solid transparent;
        cursor: pointer;
        user-select: none;
        transition: background-color 160ms ease-out, border-color 160ms ease-out;
        background: var(--card);
      }

      .day-cell:hover {
        filter: brightness(1.08);
      }

      .day-cell.today {
        border-color: var(--line);
      }

      .day-cell.selected {
        background: var(--ink);
        border-color: transparent;
      }

      .day-cell.selected .day-dow,
      .day-cell.selected .day-num {
        color: var(--bg);
      }

      .day-dow {
        font-family: 'Manrope', sans-serif;
        font-size: 10.5px;
        font-weight: 800;
        opacity: 0.75;
        color: var(--ink);
      }

      .day-num {
        font-family: 'Gabarito', sans-serif;
        font-size: 17px;
        font-weight: 800;
        line-height: 1;
        color: var(--ink);
      }

      .day-dots {
        display: flex;
        gap: 3px;
        height: 6px;
      }

      .day-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }

      .week-strip-total {
        text-align: right;
        flex-shrink: 0;
      }

      .week-strip-total-num {
        font-family: 'Gabarito', sans-serif;
        font-size: 22px;
        font-weight: 900;
        line-height: 1;
        color: var(--ink);
      }

      .week-strip-total-label {
        font-size: 11.5px;
        color: var(--muted);
        margin-top: 3px;
      }

      /* Filter chip row */
      .filter-row {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
      }

      .filter-chip {
        display: flex;
        align-items: center;
        gap: 7px;
        border-radius: 999px;
        padding: 8px 13px;
        font-family: 'Manrope', sans-serif;
        font-size: 12.5px;
        font-weight: 800;
        cursor: pointer;
        border: none;
        user-select: none;
        transition: background-color 160ms ease-out, color 160ms ease-out;
        background: var(--card);
        color: var(--muted);
      }

      .filter-chip.active {
        background: var(--ink);
        color: var(--bg);
      }

      .filter-chip-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .filter-row-spacer {
        flex: 1;
      }

      .btn-past-session {
        border: 2px dashed var(--line);
        border-radius: 999px;
        padding: 7px 13px;
        font-size: 12.5px;
        font-weight: 800;
        color: var(--muted);
        cursor: pointer;
        background: none;
        white-space: nowrap;
      }

      .btn-past-session:hover {
        border-color: var(--accent);
        color: var(--accent);
      }

      /* Empty state */
      .empty-state-card {
        text-align: center;
        color: var(--muted);
        padding: 26px;
        background: var(--card);
        border-radius: 22px;
        font-size: 14px;
      }

      .empty-clear-link {
        color: var(--accent);
        cursor: pointer;
        font-weight: 800;
        border: none;
        background: transparent;
        font-family: inherit;
        font-size: inherit;
        padding: 0;
      }

      /* Grouped list */
      .log-groups-list {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .day-group {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .group-header {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 4px 0;
      }

      .group-day-title {
        font-family: 'Gabarito', sans-serif;
        font-size: 16px;
        font-weight: 800;
      }

      .group-date-sub {
        font-size: 12px;
        color: var(--muted);
      }

      .group-header-spacer {
        flex: 1;
      }

      .group-duration-bar {
        width: 100px;
        height: 8px;
        border-radius: 999px;
        overflow: hidden;
        display: none;
        gap: 2px;
      }

      @media (min-width: 640px) {
        .group-duration-bar {
          display: flex;
        }
      }

      .group-duration-seg {
        height: 100%;
      }

      .group-total-num {
        font-family: 'Gabarito', sans-serif;
        font-size: 14px;
        font-weight: 800;
        min-width: 52px;
        text-align: right;
      }

      /* Session row */
      .log-row {
        background: var(--card);
        border-radius: 20px;
        border: 2px solid transparent;
        padding: 8px 12px 8px 8px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        transition: border-color 160ms ease-out;
      }

      .log-row.open {
        border-color: var(--accent);
      }

      .row-main {
        display: grid;
        grid-template-columns: 40px minmax(0, 1fr) 60px 22px;
        gap: 12px;
        align-items: center;
        cursor: pointer;
      }

      @media (min-width: 640px) {
        .row-main {
          grid-template-columns: 40px minmax(0, 1fr) 100px 60px 22px;
        }
      }

      .row-family-icon {
        width: 40px;
        height: 40px;
        border-radius: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .icon-strings {
        display: flex;
        gap: 3px;
        height: 18px;
      }

      .icon-strings span {
        width: 2px;
        background: var(--bg);
        border-radius: 1px;
      }

      .icon-keys {
        display: flex;
        gap: 2px;
        height: 16px;
        margin-top: 4px;
      }

      .icon-keys span {
        width: 5px;
        background: var(--bg);
        border-radius: 0 0 2px 2px;
      }

      .icon-pads {
        display: grid;
        grid-template-columns: 6px 6px;
        gap: 3px;
      }

      .icon-pads span {
        height: 6px;
        border-radius: 50%;
        background: var(--bg);
      }

      .icon-air {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 3px solid var(--bg);
      }

      .row-info {
        min-width: 0;
      }

      .row-name-line {
        font-size: 14px;
        font-weight: 800;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .row-time-tag {
        font-size: 12px;
        font-weight: 600;
        color: var(--muted);
        margin-left: 4px;
      }

      .row-note-line {
        font-size: 12.5px;
        color: var(--muted);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 1px;
      }

      .row-mini-bar {
        display: none;
        height: 8px;
        border-radius: 999px;
        background: var(--bg);
        overflow: hidden;
      }

      @media (min-width: 640px) {
        .row-mini-bar {
          display: block;
        }
      }

      .row-mini-bar-fill {
        height: 100%;
        border-radius: 999px;
      }

      .row-duration {
        font-family: 'Gabarito', sans-serif;
        font-size: 16px;
        font-weight: 800;
        text-align: right;
      }

      .row-sync-dot {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #2E3B2F;
        color: #9BD49B;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 11px;
        font-weight: 900;
      }

      /* Inline editor drawer */
      .row-editor {
        padding: 2px 0 4px 4px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        animation: fadeIn 180ms ease-out both;
      }

      .editor-chips-row {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
      }

      .editor-chip {
        display: flex;
        align-items: center;
        gap: 6px;
        border-radius: 999px;
        padding: 8px 12px;
        font-size: 12px;
        font-weight: 800;
        cursor: pointer;
        border: none;
      }

      .editor-chip-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
      }

      .editor-actions-row {
        display: flex;
        gap: 8px;
        align-items: center;
        flex-wrap: wrap;
      }

      .editor-stepper {
        display: flex;
        align-items: center;
        gap: 6px;
        background: var(--bg);
        border-radius: 999px;
        padding: 4px;
      }

      .editor-stepper-btn {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: var(--raised);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 18px;
        color: var(--ink);
        cursor: pointer;
      }

      .editor-stepper-value {
        font-family: 'Gabarito', sans-serif;
        font-weight: 800;
        font-size: 15px;
        min-width: 52px;
        text-align: center;
      }

      .editor-note-input {
        flex: 1;
        min-width: 180px;
        height: 46px;
        border-radius: 999px;
        background: var(--bg);
        border: 2px solid var(--bg);
        color: var(--ink);
        padding: 0 16px;
        font-size: 13.5px;
        outline: none;
        transition: border-color 140ms ease-out;
      }

      .editor-note-input:focus {
        border-color: var(--line);
      }

      .editor-delete-btn {
        height: 46px;
        padding: 0 16px;
        border-radius: 999px;
        background: none;
        border: none;
        display: flex;
        align-items: center;
        font-size: 12.5px;
        font-weight: 800;
        color: var(--accent);
        cursor: pointer;
      }

      .editor-done-btn {
        height: 46px;
        padding: 0 18px;
        border-radius: 999px;
        background: var(--ink);
        color: var(--bg);
        border: none;
        display: flex;
        align-items: center;
        font-size: 13px;
        font-weight: 800;
        cursor: pointer;
      }

      @media (max-width: 640px) {
        .week-strip-total {
          text-align: left;
        }
      }
    `];$e([P({type:Array})],de.prototype,"instruments",2);$e([P({type:Array})],de.prototype,"sessions",2);$e([A()],de.prototype,"openRowId",2);$e([A()],de.prototype,"editInstIdDraft",2);$e([A()],de.prototype,"editDateDraft",2);$e([A()],de.prototype,"editTimeDraft",2);$e([A()],de.prototype,"editDurationDraft",2);$e([A()],de.prototype,"editNoteDraft",2);$e([A()],de.prototype,"selectedDayFilter",2);$e([A()],de.prototype,"selectedInstFilter",2);de=$e([Se("pt-log-view")],de);var Fu=Object.defineProperty,Bu=Object.getOwnPropertyDescriptor,$t=(t,e,s,i)=>{for(var r=i>1?void 0:i?Bu(e,s):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Fu(e,s,r),r};let Ve=class extends ie{constructor(){super(...arguments),this.instruments=[],this.sessions=[],this.settings={soundEnabled:!0,hapticsEnabled:!0},this.now=Date.now(),this.range="week",this.mutedInstruments={}}toggleMute(t){this.mutedInstruments={...this.mutedInstruments,[t]:!this.mutedInstruments[t]}}render(){const t=qa(this.sessions,this.instruments,{range:this.range,mutedInstruments:this.mutedInstruments,now:new Date(this.now),weeklyGoalMinutes:this.settings.weeklyGoalMinutes});return v`
      <div class="wrap">
        <div class="range-bar">
          <div class="range-tabs">
            ${["week","month","quarter","year"].map(e=>v`
                <button class="range-tab-btn ${this.range===e?"active":""}" @click=${()=>this.range=e}>
                  ${e.charAt(0).toUpperCase()+e.slice(1)}
                </button>
              `)}
          </div>
          <div class="scope-summary">
            ${t.scopeCaption} · <strong>${t.scopeTotal}</strong> ·
            <span class="delta" style="color:${t.scopeDeltaColor}">${t.scopeDelta}</span>
          </div>
        </div>

        <div class="grid">
          <!-- 1. Day streak -->
          <div class="card card-half">
            <span class="card-label">Day streak</span>
            <div class="streak-row">
              <div class="streak-num">${t.streak}</div>
              <div class="streak-quip">${t.quip}</div>
            </div>
            <div class="bars-14">
              ${t.last14.map(e=>v`<div class="bar-14-fill" style="height:${e.h}%;background:${e.bg}"></div>`)}
            </div>
          </div>

          <!-- 2. Lifetime hours -->
          <div class="card card-half">
            <div class="banked-body">
              <div class="ring-wrap">
                <svg viewBox="0 0 118 118" style="width:100%;height:100%;transform:rotate(-90deg)">
                  <circle cx="59" cy="59" r="52" fill="none" stroke="var(--bg)" stroke-width="10"></circle>
                  <circle cx="59" cy="59" r="52" fill="none" stroke="var(--accent)" stroke-width="10" stroke-linecap="round" stroke-dasharray="${t.ringDash}"></circle>
                </svg>
                <div class="ring-center">
                  <div class="ring-life-num">${t.lifeHours}</div>
                  <div class="ring-life-tag">all time</div>
                </div>
              </div>
              <div style="min-width:0">
                <div class="lifetime-label">Every hour you have logged</div>
                <div class="banked-info-title">${t.mileGap} to ${t.nextMile}</div>
                <div class="banked-info-sub">${t.lifeSub}</div>
              </div>
            </div>
          </div>

          <!-- 3. One session away -->
          <div class="card card-full">
            <div class="card-header">
              <span class="card-label">One session away</span>
              <span class="card-sub-label">tap one to start it</span>
            </div>
            <div class="one-away-grid">
              ${t.oneAway.map(e=>v`
                  <div class="one-away-item" @click=${()=>this.dispatchEvent(new CustomEvent("start-session",{detail:{instrumentId:e.instId},bubbles:!0,composed:!0}))}>
                    <div class="one-away-top">
                      <div class="one-away-big">${e.big}</div>
                      <div class="one-away-inst">
                        <span style="width:8px;height:8px;border-radius:50%;background:${e.instColor};flex-shrink:0"></span>
                        <span style="font-size:13px;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${e.instName}</span>
                      </div>
                    </div>
                    <div class="one-away-desc">${e.text}</div>
                  </div>
                `)}
            </div>
          </div>

          <!-- 4. Range bar chart -->
          <div class="card card-full">
            <div class="card-header">
              <span class="card-label">${t.chartTitle}</span>
              <span class="card-sub-label">peak ${t.peakLabel}</span>
            </div>
            <div class="stacked-chart-area">
              ${t.buckets.map(e=>v`
                  <div class="stacked-bar-col">
                    ${e.segments.map(s=>v`<span class="stacked-segment" style="height:${s.h}%;background:${s.color}"></span>`)}
                  </div>
                `)}
            </div>
            <div class="stacked-labels-row">
              ${t.buckets.map(e=>v`<span class="stacked-label-item" style="color:${e.labelColor};font-weight:${e.labelWeight}">${e.label}</span>`)}
            </div>
          </div>

          <!-- 5. Heatmap -->
          <div class="card card-full">
            <div class="card-header">
              <span class="card-label">Every day on record</span>
              <span class="card-sub-label">${t.heatSince}</span>
            </div>
            <div class="heatmap-grid">
              ${t.heatMarked.map(e=>v`<div class="heat-cell" style="background:${e.bg};opacity:${e.op};outline:${e.ring};outline-offset:1px;animation:${e.anim}"></div>`)}
            </div>
            <div class="heat-legend-row">
              <span>less</span>
              <span class="heat-legend-swatch" style="background:#33233C"></span>
              <span class="heat-legend-swatch" style="background:var(--line)"></span>
              <span class="heat-legend-swatch" style="background:#7D5E99"></span>
              <span class="heat-legend-swatch" style="background:#9C78BE"></span>
              <span class="heat-legend-swatch" style="background:var(--chart)"></span>
              <span>more</span>
            </div>
          </div>

          <!-- 6. Week vs median -->
          <div class="card card-half">
            <div class="card-header">
              <span class="card-label">This week vs your median</span>
              <span style="font-size:12px;font-weight:800;color:${t.paceColor}">${t.paceDelta}</span>
            </div>
            <div class="pace-head">
              <div class="pace-num">${t.weekTotal}</div>
              <div style="font-size:12.5px;color:var(--muted)">since Monday</div>
            </div>
            <svg viewBox="0 0 320 90" class="pace-svg-box" preserveAspectRatio="none">
              <polyline points="${t.medianPts}" fill="none" stroke="var(--line)" stroke-width="2.5" stroke-dasharray="5 6" stroke-linecap="round"></polyline>
              <polyline points="${t.actualPts}" fill="none" stroke="var(--accent)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></polyline>
            </svg>
            <div class="pace-ticks-row"><span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span></div>
          </div>

          <!-- 7. Day-of-week averages -->
          <div class="card card-half">
            <span class="card-label">Your week, averaged</span>
            <div class="dow-bars-box">
              ${t.dow.map(e=>v`
                  <div class="dow-col">
                    <div style="font-size:10px;color:var(--muted)">${e.val}</div>
                    <div class="dow-bar-fill" style="height:${e.h}%;background:${e.bg}"></div>
                    <div style="font-size:11px;font-weight:${e.strong};color:var(--ink)">${e.label}</div>
                  </div>
                `)}
            </div>
            <div class="caption-text">${t.dowBestLabel} is your strongest day. ${t.dowWorstLabel} is where the hours go missing.</div>
          </div>

          <!-- 8. Records -->
          <div class="card card-half">
            <div class="card-header">
              <span class="card-label">Records</span>
              <span class="card-sub-label">${t.freshCount}</span>
            </div>
            <div class="records-grid">
              ${t.records.map(e=>v`
                  <div class="record-card">
                    <div class="record-k">
                      <span>${e.k}</span>
                      ${e.fresh?v`<span class="record-new-pill">new</span>`:""}
                    </div>
                    <div class="record-v">${e.v}</div>
                    <div class="record-sub">${e.sub}</div>
                  </div>
                `)}
            </div>
          </div>

          <!-- 9. Session-length histogram -->
          <div class="card card-half">
            <span class="card-label">How long you actually play</span>
            <div class="dow-bars-box" style="gap:10px">
              ${t.hist.map(e=>v`
                  <div class="dow-col">
                    <div style="font-size:10.5px;color:var(--muted)">${e.n}</div>
                    <div class="dow-bar-fill" style="height:${e.h}%;background:${e.bg}"></div>
                    <div style="font-size:10.5px;color:var(--ink)">${e.label}</div>
                  </div>
                `)}
            </div>
            <div class="caption-text">Most sittings land in ${t.modeLabel}.</div>
          </div>

          <!-- 10. Kit share -->
          <div class="card card-full">
            <div class="card-header">
              <span class="card-label">Kit share, last 6 weeks</span>
              <span class="card-sub-label">tap to hide one from the chart</span>
            </div>
            <div class="kit-share-list">
              ${t.instRows.map(e=>v`
                  <div class="kit-share-row" style="opacity:${e.opacity}" @click=${()=>this.toggleMute(e.id)} title="${e.isMuted?"Unmute":"Mute"} ${e.name}">
                    <span style="width:9px;height:9px;border-radius:50%;background:${e.color};flex-shrink:0"></span>
                    <div style="flex:1;min-width:0">
                      <div style="display:flex;justify-content:space-between;gap:8px">
                        <span style="font-size:13px;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${e.name}</span>
                        <span style="font-size:12px;color:var(--muted);flex-shrink:0">${e.minsLabel} · ${e.shareLabel}</span>
                      </div>
                      <div class="kit-share-progress-track">
                        <span class="kit-share-progress-fill" style="width:${e.sharePct}%;background:${e.color}"></span>
                      </div>
                    </div>
                    <svg width="60" height="24" viewBox="0 0 100 34" preserveAspectRatio="none" style="flex-shrink:0;overflow:visible">
                      <polyline points="${e.spark}" fill="none" stroke="${e.color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></polyline>
                    </svg>
                  </div>
                `)}
            </div>
          </div>

          <!-- 11. Hour-of-day rhythm -->
          <div class="card card-full">
            <div class="card-header" style="flex-wrap:wrap">
              <span class="card-label">Your day, by the hour</span>
              <div style="font-size:12px;color:var(--muted)">
                <strong style="color:var(--ink)">${t.windowShare}</strong> of your time falls between ${t.windowLabel}
              </div>
            </div>
            <div class="rhythm-wrap">
              <svg viewBox="0 0 720 124" preserveAspectRatio="none" style="width:100%;height:124px;display:block">
                <rect x="${t.bandX}" y="0" width="${t.bandW}" height="124" fill="var(--accent)" opacity="0.14" rx="10"></rect>
                <path d="${t.dayArea}" fill="var(--chart)" opacity="0.22"></path>
                <path d="${t.dayCurve}" fill="none" stroke="var(--chart)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <div class="rhythm-now-dot" style="left:${t.nowLeft};top:${t.nowTop}"></div>
            </div>
            <div class="rhythm-ticks">${t.dayTicks.map(e=>v`<div>${e.label}</div>`)}</div>
          </div>

          <!-- 12. Notes themes -->
          <div class="card card-full">
            <span class="card-label">From your notes · what you’ve been working on</span>
            ${t.themes.length===0?v`<div style="font-size:13px;color:var(--dim);margin-top:10px">Add notes when you save a session and the recurring ones collect here.</div>`:""}
            <div class="themes-cloud" style="margin-top:12px">
              ${t.themes.map(e=>v`
                  <div class="theme-pill">
                    <span style="width:8px;height:8px;border-radius:50%;background:${e.color};flex-shrink:0"></span>
                    <span style="font-family:'Gabarito',sans-serif;font-weight:800;font-size:${e.size};white-space:nowrap">${e.name}</span>
                    <span style="font-size:11px;color:var(--dim);white-space:nowrap">${e.mins} · ${e.ago}</span>
                  </div>
                `)}
            </div>
          </div>
        </div>
      </div>
    `}};Ve.styles=[Je,ge`
      :host {
        display: block;
        animation: fadeIn 220ms ease-out both;
        font-family: 'Manrope', sans-serif;
        color: var(--ink);
        padding-bottom: 20px;
      }

      .wrap {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .range-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
      }

      .range-tabs {
        display: flex;
        background: var(--card);
        border-radius: 999px;
        padding: 4px;
        gap: 2px;
      }

      .range-tab-btn {
        padding: 8px 16px;
        border-radius: 999px;
        font-family: 'Gabarito', sans-serif;
        font-size: 12.5px;
        font-weight: 800;
        cursor: pointer;
        border: none;
        background: transparent;
        color: var(--muted);
        transition: background-color 160ms ease-out, color 160ms ease-out;
      }

      .range-tab-btn.active {
        background: var(--ink);
        color: var(--bg);
      }

      .scope-summary {
        font-size: 12.5px;
        color: var(--muted);
      }

      .scope-summary strong {
        color: var(--ink);
      }

      .scope-summary .delta {
        font-weight: 800;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
      }

      @media (max-width: 859px) {
        .grid {
          grid-template-columns: minmax(0, 1fr);
        }
      }

      .card-half { grid-column: span 2; }
      .card-full { grid-column: span 4; }

      @media (max-width: 859px) {
        .card-half, .card-full {
          grid-column: span 1 !important;
        }
      }

      .card {
        background: var(--card);
        border-radius: 26px;
        padding: 18px;
        display: flex;
        flex-direction: column;
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 10px;
      }

      .card-label {
        font-size: 12px;
        color: var(--muted);
        font-weight: 800;
      }

      .card-sub-label {
        font-size: 11.5px;
        color: var(--dim);
      }

      /* Day streak */
      .streak-row {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 14px;
        margin-top: 6px;
      }

      .streak-num {
        font-family: 'Gabarito', sans-serif;
        font-size: 64px;
        font-weight: 900;
        letter-spacing: -0.05em;
        line-height: 0.9;
      }

      .streak-quip {
        font-size: 13px;
        color: var(--muted);
        text-align: right;
        max-width: 20ch;
        line-height: 1.35;
      }

      .bars-14 {
        display: flex;
        gap: 4px;
        margin-top: 16px;
        height: 34px;
        align-items: flex-end;
      }

      .bar-14-fill {
        flex: 1;
        border-radius: 6px;
        transition: height 300ms ease;
      }

      /* Lifetime ring */
      .lifetime-label {
        font-size: 12px;
        font-weight: 800;
        color: var(--muted);
      }

      .banked-body {
        display: flex;
        align-items: center;
        gap: 18px;
      }

      .ring-wrap {
        width: 118px;
        height: 118px;
        flex-shrink: 0;
        position: relative;
      }

      .ring-center {
        position: absolute;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .ring-life-num {
        font-family: 'Gabarito', sans-serif;
        font-size: 28px;
        font-weight: 900;
        line-height: 1;
      }

      .ring-life-tag {
        font-size: 10px;
        font-weight: 800;
        color: var(--muted);
        margin-top: 2px;
      }

      .banked-info-title {
        font-family: 'Gabarito', sans-serif;
        font-size: 21px;
        font-weight: 800;
        margin-top: 6px;
        line-height: 1.2;
      }

      .banked-info-sub {
        font-size: 12.5px;
        color: var(--muted);
        margin-top: 6px;
        line-height: 1.45;
      }

      /* One session away */
      .one-away-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 10px;
        margin-top: 12px;
      }

      @media (max-width: 640px) {
        .one-away-grid {
          grid-template-columns: minmax(0, 1fr);
        }
      }

      .one-away-item {
        background: var(--bg);
        border-radius: 20px;
        padding: 16px;
        cursor: pointer;
        border: 2px solid transparent;
        transition: border-color 160ms ease-out;
      }

      .one-away-item:hover {
        border-color: var(--accent);
      }

      .one-away-top {
        display: flex;
        align-items: baseline;
        gap: 10px;
      }

      .one-away-big {
        font-family: 'Gabarito', sans-serif;
        font-size: 32px;
        font-weight: 900;
      }

      .one-away-inst {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .one-away-desc {
        font-size: 12px;
        color: var(--muted);
        margin-top: 8px;
        line-height: 1.4;
      }

      /* Stacked bar chart */
      .stacked-chart-area {
        display: flex;
        align-items: flex-end;
        gap: 4px;
        height: 150px;
        margin-top: 14px;
      }

      .stacked-bar-col {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column-reverse;
        height: 100%;
        gap: 2px;
      }

      .stacked-segment {
        display: block;
        width: 100%;
        border-radius: 6px;
        transition: height 400ms cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      .stacked-labels-row {
        display: flex;
        gap: 4px;
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

      .heatmap-grid {
        display: grid;
        grid-template-rows: repeat(7, auto);
        grid-auto-flow: column;
        grid-auto-columns: minmax(0, 1fr);
        gap: 3px;
        margin-top: 12px;
        max-width: 1100px;
      }

      @media (max-width: 859px) {
        .heatmap-grid {
          max-width: 600px;
        }
      }

      .heat-cell {
        aspect-ratio: 1;
        border-radius: 4px;
      }

      .heat-months-row {
        display: flex;
        justify-content: space-between;
        margin-top: 6px;
        font-size: 10px;
        color: var(--muted);
      }

      .heat-legend-row {
        display: flex;
        align-items: center;
        gap: 5px;
        margin-top: 12px;
        font-size: 11px;
        color: var(--dim);
      }

      .heat-legend-swatch {
        width: 11px;
        height: 11px;
        border-radius: 3px;
      }

      /* Week vs median */
      .pace-head {
        display: flex;
        align-items: baseline;
        gap: 8px;
        margin-top: 6px;
      }

      .pace-num {
        font-family: 'Gabarito', sans-serif;
        font-size: 34px;
        font-weight: 900;
        letter-spacing: -0.03em;
      }

      .pace-svg-box {
        width: 100%;
        height: 90px;
        margin-top: 8px;
        overflow: visible;
      }

      .pace-ticks-row {
        display: flex;
        justify-content: space-between;
        font-size: 10px;
        color: var(--dim);
        margin-top: 4px;
      }

      /* Day-of-week averages / histogram (shared bar layout) */
      .dow-bars-box {
        display: flex;
        align-items: flex-end;
        gap: 8px;
        height: 110px;
        margin-top: 12px;
      }

      .dow-col {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        gap: 6px;
        height: 100%;
      }

      .dow-bar-fill {
        width: 100%;
        border-radius: 10px;
      }

      .caption-text {
        font-size: 12.5px;
        color: var(--muted);
        margin-top: 10px;
        line-height: 1.45;
      }

      /* Records */
      .records-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 14px;
        margin-top: 12px;
      }

      .record-card {
        background: var(--bg);
        border-radius: 18px;
        padding: 12px 14px;
      }

      .record-k {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        font-weight: 800;
        color: var(--muted);
      }

      .record-new-pill {
        font-size: 9.5px;
        font-weight: 900;
        background: var(--accent);
        color: var(--bg);
        border-radius: 999px;
        padding: 2px 7px;
      }

      .record-v {
        font-family: 'Gabarito', sans-serif;
        font-size: 22px;
        font-weight: 900;
        margin-top: 4px;
      }

      .record-sub {
        font-size: 11.5px;
        color: var(--dim);
        margin-top: 2px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Kit share */
      .kit-share-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-top: 10px;
      }

      .kit-share-row {
        display: flex;
        align-items: center;
        gap: 12px;
        background: var(--bg);
        border-radius: 18px;
        padding: 10px 14px;
        cursor: pointer;
        transition: opacity 200ms ease-out;
      }

      .kit-share-progress-track {
        height: 6px;
        border-radius: 999px;
        background: var(--card);
        margin-top: 6px;
        overflow: hidden;
      }

      .kit-share-progress-fill {
        height: 100%;
        border-radius: 999px;
      }

      /* Rhythm curve */
      .rhythm-wrap {
        position: relative;
        margin-top: 12px;
      }

      .rhythm-now-dot {
        position: absolute;
        width: 10px;
        height: 10px;
        margin: -5px 0 0 -5px;
        border-radius: 50%;
        background: var(--accent);
        box-shadow: 0 0 0 5px rgba(255, 122, 92, 0.22);
        animation: softPulse 2.4s ease-in-out infinite;
      }

      .rhythm-ticks {
        display: flex;
        justify-content: space-between;
        margin-top: 6px;
        font-size: 10.5px;
        color: var(--dim);
      }

      /* Notes themes */
      .themes-cloud {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }

      .theme-pill {
        display: flex;
        align-items: center;
        gap: 8px;
        background: var(--bg);
        border-radius: 999px;
        padding: 9px 15px;
      }
    `];$t([P({type:Array})],Ve.prototype,"instruments",2);$t([P({type:Array})],Ve.prototype,"sessions",2);$t([P({type:Object})],Ve.prototype,"settings",2);$t([P({type:Number})],Ve.prototype,"now",2);$t([A()],Ve.prototype,"range",2);$t([A()],Ve.prototype,"mutedInstruments",2);Ve=$t([Se("pt-insights-view")],Ve);var zu=Object.defineProperty,Hu=Object.getOwnPropertyDescriptor,me=(t,e,s,i)=>{for(var r=i>1?void 0:i?Hu(e,s):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&zu(e,s,r),r};const ra=5,na=5,aa=240;let ae=class extends ie{constructor(){super(...arguments),this.settings={soundEnabled:!0,hapticsEnabled:!0,weekStartsOnSunday:!1,weeklyGoalMinutes:420},this.authState={user:null,accessToken:null,isAuthenticated:!1,isLoading:!1},this.syncStatus="synced",this.sessionCount=0,this.instruments=[],this.sessions=[],this.magicSentEmail=null,this.editingId=null,this.editName="",this.editColor=Ki[0],this.editKind="acoustic",this.pendingGlyphKindForName=null}setMagicLinkSent(t){this.magicSentEmail=t}handleOpenAuthModal(t){this.dispatchEvent(new CustomEvent("open-auth-modal",{detail:{tab:t||"signin"},bubbles:!0,composed:!0}))}emitSettings(t){this.dispatchEvent(new CustomEvent("update-settings",{detail:{...this.settings,...t},bubbles:!0,composed:!0}))}handleToggle(t){const e=t==="heroGlyphAnimated"?this.settings[t]!==!1:!!this.settings[t];this.emitSettings({[t]:!e})}handleAdjustGoal(t){const e=Math.round((this.settings.weeklyGoalMinutes||420)/7),s=Math.min(aa,Math.max(na,e+t));this.emitSettings({weeklyGoalMinutes:s*7})}handleSetTheme(t){this.emitSettings({theme:t})}handleSignOut(){this.dispatchEvent(new CustomEvent("sign-out",{bubbles:!0,composed:!0})),this.magicSentEmail=null}handleExportBackup(){const t=M.exportBackup(),e=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(e),i=document.createElement("a");i.href=s,i.download=`practice-tracker-backup-${new Date().toISOString().slice(0,10)}.json`,i.click(),URL.revokeObjectURL(s)}handleFileSelected(t){var r;const e=t.target,s=(r=e.files)==null?void 0:r[0];if(!s)return;const i=new FileReader;i.onload=n=>{var o;const a=(o=n.target)==null?void 0:o.result;a&&M.importBackup(a),e.value=""},i.readAsText(s)}handleResetDemo(){confirm("Load sample practice history? This will generate demonstration sessions to preview all charts and milestones.")&&M.loadDemoData()}handleStartEmpty(){confirm("Clear all practice history from this device? This cannot be undone.")&&M.clearAllData()}openNewInstrument(){this.editingId="new",this.editName="",this.editColor=Ki[0],this.editKind="acoustic"}openEditInstrument(t){this.editingId=t.id,this.editName=t.name,this.editColor=t.color,this.editKind=Vt(t)}closeEdit(){this.editingId=null}updated(){if(this.pendingGlyphKindForName){const t=this.instruments.find(e=>e.name===this.pendingGlyphKindForName.name&&!e.glyphKind);if(t){const e=this.pendingGlyphKindForName.kind;this.pendingGlyphKindForName=null,this.dispatchEvent(new CustomEvent("update-instrument",{detail:{instrument:{...t,glyphKind:e}},bubbles:!0,composed:!0}))}}}handleSaveInstrument(){const t=this.editName.trim();if(t){if(this.editingId==="new")this.dispatchEvent(new CustomEvent("add-instrument",{detail:{name:t,color:this.editColor,tier:"secondary"},bubbles:!0,composed:!0})),this.pendingGlyphKindForName={name:t,kind:this.editKind};else if(this.editingId){const e=this.instruments.find(s=>s.id===this.editingId);e&&this.dispatchEvent(new CustomEvent("update-instrument",{detail:{instrument:{...e,name:t,color:this.editColor,glyphKind:this.editKind}},bubbles:!0,composed:!0}))}this.closeEdit()}}handleRetireFromEdit(){this.editingId&&this.editingId!=="new"&&this.dispatchEvent(new CustomEvent("retire-instrument",{detail:{id:this.editingId},bubbles:!0,composed:!0})),this.closeEdit()}handleRestore(t){this.dispatchEvent(new CustomEvent("restore-instrument",{detail:{id:t},bubbles:!0,composed:!0}))}renderEditScreen(){const t=this.editingId!=="new",e=this.editName.trim().length>0;return v`
      <div class="edit-wrap">
        <div class="edit-header">
          <button class="edit-back" @click=${()=>this.closeEdit()}>‹ Settings</button>
          ${t?v`<button class="edit-retire" @click=${()=>this.handleRetireFromEdit()}>Retire</button>`:""}
        </div>
        <input
          class="edit-name-input"
          placeholder="Instrument name"
          .value=${this.editName}
          @input=${s=>this.editName=s.target.value}
        />
        <div class="edit-swatches">
          ${Ki.map(s=>v`
              <button
                class="edit-swatch ${s===this.editColor?"selected":""}"
                style="background:${s}"
                @click=${()=>this.editColor=s}
              ></button>
            `)}
        </div>
        <div class="edit-section-label">Plays as</div>
        <div class="kind-grid">
          ${Zn.map(s=>v`
              <div
                class="kind-thumb-wrap ${s.id===this.editKind?"selected":""}"
                @click=${()=>this.editKind=s.id}
              >
                <div class="kind-thumb-scale">
                  <div class="kind-thumb-inner">
                    <pt-glyph .kind=${s.id} .live=${s.id===this.editKind}></pt-glyph>
                  </div>
                </div>
                <div class="kind-label">${s.label}</div>
              </div>
            `)}
        </div>
        <div class="edit-actions">
          <button class="edit-save" style="opacity:${e?1:.4}" @click=${()=>this.handleSaveInstrument()}>Save</button>
          <button class="edit-cancel" @click=${()=>this.closeEdit()}>Cancel</button>
        </div>
      </div>
    `}render(){var o;if(this.editingId)return this.renderEditScreen();const t=this.authState.isAuthenticated,e=((o=this.authState.user)==null?void 0:o.email)||this.settings.userEmail||"",s=Math.round((this.settings.weeklyGoalMinutes||420)/7),i=this.settings.theme||"plum",r=this.instruments.filter(l=>!l.archived&&!l.deletedAt).slice().sort((l,c)=>{const u=l.rank??99,h=c.rank??99;return u!==h?u-h:l.tier!==c.tier?l.tier==="primary"?-1:1:l.name.localeCompare(c.name)}),n=this.instruments.filter(l=>l.archived),a=[{key:"celebrateGoal",title:"Goal celebration",sub:"badge and confetti at your goal",on:!!this.settings.celebrateGoal},{key:"soundEnabled",title:"Audio chimes",sub:"tones on start, stop and goal",on:!!this.settings.soundEnabled},{key:"hapticsEnabled",title:"Haptics",sub:"vibration on phones that support it",on:!!this.settings.hapticsEnabled},{key:"heroGlyphAnimated",title:"Play next glyph moves",sub:"the suggested instrument plays on Today",on:this.settings.heroGlyphAnimated!==!1},{key:"reduceMotion",title:"Reduce motion",sub:"keep every glyph still",on:!!this.settings.reduceMotion}];return v`
      <div class="settings-grid">
        <div class="col">
          <div class="card ${!t&&!this.magicSentEmail?"acct-guest":""}">
            ${t?v`
                  <div class="row">
                    <div style="min-width:0;">
                      <div class="row-title">Signed in</div>
                      <div class="row-sub">${e}</div>
                    </div>
                    <button class="btn-pill" @click=${this.handleSignOut}>Sign out</button>
                  </div>
                `:this.magicSentEmail?v`
                  <div class="row-title">Check your inbox</div>
                  <div class="row-sub" style="white-space:normal;margin-top:4px;">Magic link sent to ${this.magicSentEmail}</div>
                  <div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap;">
                    <button class="btn-pill btn-pill-accent" @click=${()=>this.magicSentEmail=null}>Done</button>
                  </div>
                `:v`
                  <div class="row">
                    <div>
                      <div class="row-title">Guest mode</div>
                      <div class="acct-guest-row"><span class="acct-guest-dot"></span><span>Sessions live on this device only</span></div>
                    </div>
                    <button class="btn-pill btn-pill-accent" @click=${()=>this.handleOpenAuthModal()}>Sign in</button>
                  </div>
                `}
          </div>

          <div class="card">
            <div class="row">
              <div>
                <div class="row-title">Daily goal</div>
                <div class="row-sub" style="white-space:normal;">when the goal badge plays</div>
              </div>
              <div class="stepper">
                <button class="stepper-btn" @click=${()=>this.handleAdjustGoal(-ra)} ?disabled=${s<=na}>−</button>
                <span class="stepper-value">${s} min</span>
                <button class="stepper-btn" @click=${()=>this.handleAdjustGoal(ra)} ?disabled=${s>=aa}>+</button>
              </div>
            </div>
          </div>

          ${a.map(l=>v`
              <div class="card row" style="cursor:pointer;" @click=${()=>this.handleToggle(l.key)}>
                <div>
                  <div class="row-title">${l.title}</div>
                  <div class="row-sub" style="white-space:normal;">${l.sub}</div>
                </div>
                <button class="toggle-track" style="background:${l.on?"var(--accent)":"var(--line)"}">
                  <span class="toggle-knob" style="transform:translateX(${l.on?"18px":"0px"})"></span>
                </button>
              </div>
            `)}
        </div>

        <div class="col">
          <div class="card">
            <div class="section-label">Theme</div>
            <div class="theme-grid">
              ${ar.map(l=>v`
                  <div class="theme-ring ${l.id===i?"selected":""}" @click=${()=>this.handleSetTheme(l.id)}>
                    <div class="theme-inner" style="background:${l.bg}">
                      <div class="theme-chip-row">
                        <span class="theme-chip-stage" style="background:${l.stage}"></span>
                        <span class="theme-chip-card" style="background:${l.card}"></span>
                      </div>
                      <div class="theme-accent-bar" style="background:${l.accent}"></div>
                      <div class="theme-name" style="color:${l.ink}">${l.name}</div>
                    </div>
                  </div>
                `)}
            </div>

            <div class="section-label">Instruments</div>
            ${r.map(l=>{var h;const c=Vt(l),u=((h=Zn.find(f=>f.id===c))==null?void 0:h.label)||"";return v`
                <div class="inst-pill" @click=${()=>this.openEditInstrument(l)}>
                  <span class="inst-dot" style="background:${l.color}"></span>
                  <span class="inst-name">${l.name}</span>
                  <span class="inst-kind-label">${u}</span>
                  <button class="inst-edit-link" @click=${f=>{f.stopPropagation(),this.openEditInstrument(l)}}>Edit</button>
                </div>
              `})}
            <button class="add-inst-pill" @click=${()=>this.openNewInstrument()}>+ Add instrument</button>

            ${n.length>0?v`
                  ${n.map(l=>v`
                      <div class="retired-row">
                        <span>${l.name} · retired</span>
                        <button class="retired-restore" @click=${()=>this.handleRestore(l.id)}>Restore</button>
                      </div>
                    `)}
                `:""}
          </div>

          <div class="card">
            <div class="section-label">Your data</div>
            <div class="data-row">
              <button class="btn-util" @click=${this.handleExportBackup}>Export JSON</button>
              <label class="btn-util" style="cursor:pointer;">
                Import JSON
                <input type="file" id="import-file-input" class="file-hidden" accept=".json,application/json" @change=${this.handleFileSelected} />
              </label>
            </div>
            <div class="data-links-row">
              <button class="data-link" @click=${this.handleResetDemo}>Reset demo data</button>
              <button class="data-link" @click=${this.handleStartEmpty}>Start empty (first run)</button>
            </div>
          </div>
        </div>
      </div>
    `}};ae.styles=[Je,ge`
      :host {
        display: block;
        animation: fadeIn 220ms ease-out both;
        color: var(--ink);
        font-family: 'Manrope', sans-serif;
      }

      .settings-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 12px;
        align-items: start;
      }

      @media (min-width: 860px) {
        .settings-grid {
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        }
      }

      .col {
        display: flex;
        flex-direction: column;
        gap: 10px;
        min-width: 0;
      }

      .card {
        background: var(--card);
        border-radius: 22px;
        padding: 14px 16px;
      }

      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
      }

      .row-title {
        font-size: 14.5px;
        font-weight: 800;
      }

      .row-sub {
        font-size: 12px;
        color: var(--muted);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .btn-pill {
        background: var(--raised);
        color: var(--ink);
        border-radius: 999px;
        padding: 11px 16px;
        font-size: 12.5px;
        font-weight: 800;
        cursor: pointer;
        border: none;
        white-space: nowrap;
      }

      .btn-pill:hover {
        filter: brightness(1.08);
      }

      .btn-pill-accent {
        background: var(--accent);
        color: var(--bg);
      }

      .btn-pill-accent:hover {
        background: var(--accentHi);
      }

      /* Account */
      .acct-guest {
        border: 2px solid var(--accent);
      }

      .acct-guest-row {
        display: flex;
        align-items: center;
        gap: 7px;
        font-size: 12px;
        color: var(--muted);
        margin-top: 2px;
      }

      .acct-guest-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--accent);
      }

      /* Daily goal */
      .stepper {
        display: flex;
        align-items: center;
        gap: 6px;
        background: var(--bg);
        border-radius: 999px;
        padding: 4px;
      }

      .stepper-btn {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: var(--raised);
        border: none;
        color: var(--ink);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        font-size: 16px;
        cursor: pointer;
      }

      .stepper-btn:disabled {
        opacity: 0.4;
        cursor: default;
      }

      .stepper-value {
        font-family: 'Gabarito', sans-serif;
        font-weight: 800;
        font-size: 15px;
        min-width: 56px;
        text-align: center;
      }

      /* Toggles */
      .toggle-track {
        width: 46px;
        height: 28px;
        border-radius: 999px;
        display: flex;
        align-items: center;
        padding: 3px;
        flex-shrink: 0;
        border: none;
        cursor: pointer;
        transition: background-color 180ms ease-out;
      }

      .toggle-knob {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: var(--ink);
        transition: transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      /* Theme */
      .section-label {
        font-size: 12px;
        font-weight: 800;
        color: var(--muted);
        padding: 0 4px 2px;
      }

      .theme-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
        margin-bottom: 8px;
      }

      .theme-ring {
        border-radius: 18px;
        padding: 4px;
        background: transparent;
        cursor: pointer;
        transition: background-color 160ms ease-out;
      }

      .theme-ring.selected {
        background: var(--accent);
      }

      .theme-inner {
        border-radius: 15px;
        padding: 9px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .theme-chip-row {
        display: flex;
        gap: 4px;
        align-items: center;
      }

      .theme-chip-stage {
        width: 18px;
        height: 22px;
        border-radius: 5px;
      }

      .theme-chip-card {
        flex: 1;
        height: 22px;
        border-radius: 6px;
      }

      .theme-accent-bar {
        height: 14px;
        border-radius: 999px;
      }

      .theme-name {
        font-family: 'Gabarito', sans-serif;
        font-weight: 800;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Instruments */
      .inst-pill {
        display: flex;
        align-items: center;
        gap: 10px;
        background: var(--bg);
        border-radius: 999px;
        padding: 9px 14px;
        cursor: pointer;
        margin-bottom: 6px;
      }

      .inst-pill:hover {
        background: var(--deep);
      }

      .inst-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .inst-name {
        font-size: 13.5px;
        font-weight: 800;
        flex: 1;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .inst-kind-label {
        font-size: 11.5px;
        color: var(--muted);
      }

      .inst-edit-link {
        font-size: 12px;
        font-weight: 800;
        color: var(--accent);
        background: none;
        border: none;
        cursor: pointer;
      }

      .add-inst-pill {
        border: 2px dashed var(--line);
        border-radius: 999px;
        padding: 9px 14px;
        font-size: 13px;
        font-weight: 800;
        color: var(--muted);
        cursor: pointer;
        background: none;
        width: 100%;
        text-align: left;
      }

      .retired-row {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 14px;
        font-size: 12.5px;
        color: var(--dim);
      }

      .retired-row span:first-child {
        flex: 1;
      }

      .retired-restore {
        font-weight: 800;
        color: var(--muted);
        cursor: pointer;
        background: none;
        border: none;
      }

      /* Data */
      .data-row {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .btn-util {
        flex: 1;
        min-width: 120px;
        height: 46px;
        border-radius: 999px;
        background: var(--bg);
        color: var(--ink);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 800;
        cursor: pointer;
      }

      .data-links-row {
        display: flex;
        gap: 14px;
        padding: 4px 6px 0;
        font-size: 12px;
        font-weight: 800;
      }

      .data-link {
        color: var(--muted);
        cursor: pointer;
        background: none;
        border: none;
      }

      .data-link:hover {
        color: var(--accent);
      }

      .file-hidden {
        display: none;
      }

      /* Edit-instrument sub-view */
      .edit-wrap {
        max-width: 760px;
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      .edit-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
        font-weight: 800;
      }

      .edit-back {
        color: var(--muted);
        cursor: pointer;
        padding: 8px 0;
        background: none;
        border: none;
      }

      .edit-retire {
        color: var(--accent);
        cursor: pointer;
        padding: 8px 0;
        background: none;
        border: none;
      }

      .edit-name-input {
        height: 56px;
        border-radius: 999px;
        background: var(--card);
        border: 2px solid var(--card);
        color: var(--ink);
        padding: 0 22px;
        font-family: 'Gabarito', sans-serif;
        font-weight: 800;
        font-size: 20px;
        outline: none;
      }

      .edit-name-input:focus {
        border-color: var(--accent);
      }

      .edit-swatches {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .edit-swatch {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        cursor: pointer;
        border: none;
      }

      .edit-swatch.selected {
        box-shadow: 0 0 0 3px var(--bg), 0 0 0 5px var(--ink);
      }

      .edit-section-label {
        font-size: 12.5px;
        font-weight: 800;
        color: var(--muted);
      }

      .kind-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
        gap: 10px;
      }

      .kind-thumb-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 10px 0 12px;
        border-radius: 22px;
        background: var(--card);
        border: 2px solid transparent;
        cursor: pointer;
      }

      .kind-thumb-wrap.selected {
        border-color: var(--accent);
      }

      .kind-thumb-scale {
        width: 70px;
        height: 87px;
        overflow: hidden;
        border-radius: 10px;
      }

      .kind-thumb-inner {
        width: 250px;
        height: 310px;
        transform: scale(0.28);
        transform-origin: 0 0;
      }

      .kind-label {
        font-size: 12.5px;
        font-weight: 800;
      }

      .edit-actions {
        display: flex;
        gap: 10px;
        margin-top: 6px;
      }

      .edit-save {
        height: 56px;
        padding: 0 34px;
        border-radius: 999px;
        background: var(--accent);
        color: var(--bg);
        border: none;
        display: flex;
        align-items: center;
        font-family: 'Gabarito', sans-serif;
        font-weight: 800;
        font-size: 16px;
        cursor: pointer;
      }

      .edit-cancel {
        height: 56px;
        padding: 0 24px;
        border-radius: 999px;
        background: var(--card);
        color: var(--ink);
        border: none;
        display: flex;
        align-items: center;
        font-weight: 800;
        font-size: 14px;
        cursor: pointer;
      }
    `];me([P({type:Object})],ae.prototype,"settings",2);me([P({type:Object})],ae.prototype,"authState",2);me([P({type:String})],ae.prototype,"syncStatus",2);me([P({type:Number})],ae.prototype,"sessionCount",2);me([P({type:Array})],ae.prototype,"instruments",2);me([P({type:Array})],ae.prototype,"sessions",2);me([A()],ae.prototype,"magicSentEmail",2);me([A()],ae.prototype,"editingId",2);me([A()],ae.prototype,"editName",2);me([A()],ae.prototype,"editColor",2);me([A()],ae.prototype,"editKind",2);ae=me([Se("pt-settings-view")],ae);var qu=Object.defineProperty,Gu=Object.getOwnPropertyDescriptor,Ye=(t,e,s,i)=>{for(var r=i>1?void 0:i?Gu(e,s):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&qu(e,s,r),r};function oa(t){const e=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${e}-${s}-${i}`}function la(t){const e=String(t.getHours()).padStart(2,"0"),s=String(t.getMinutes()).padStart(2,"0");return`${e}:${s}`}const ca="(min-width: 860px)";let _e=class extends ie{constructor(){super(...arguments),this.instruments=[],this.open=!1,this.selectedInstrumentId="",this.durationMinutes=20,this.sessionDate=oa(new Date),this.sessionTime=la(new Date),this.notes="",this.wide=typeof window<"u"?window.matchMedia(ca).matches:!0,this.mediaQueryHandler=t=>{this.wide=t.matches}}connectedCallback(){super.connectedCallback(),this.instruments.length>0&&!this.selectedInstrumentId&&(this.selectedInstrumentId=this.instruments[0].id),typeof window<"u"&&(this.mediaQueryList=window.matchMedia(ca),this.wide=this.mediaQueryList.matches,this.mediaQueryList.addEventListener("change",this.mediaQueryHandler))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mediaQueryList)==null||t.removeEventListener("change",this.mediaQueryHandler)}willUpdate(t){if(t.has("instruments")&&this.instruments.length>0&&!this.selectedInstrumentId&&(this.selectedInstrumentId=this.instruments[0].id),t.has("open")&&this.open){const e=new Date;this.sessionDate=oa(e),this.sessionTime=la(e)}}adjustDuration(t){this.durationMinutes=Math.max(5,this.durationMinutes+t)}handleSave(){if(!this.selectedInstrumentId||this.durationMinutes<=0)return;const t=this.sessionDate.split("-").map(Number),e=(this.sessionTime||"12:00").split(":").map(Number),s=new Date(t[0],t[1]-1,t[2],e[0]||0,e[1]||0,0,0);this.dispatchEvent(new CustomEvent("save-manual-session",{detail:{instrumentId:this.selectedInstrumentId,start:s,duration:this.durationMinutes,notes:this.notes},bubbles:!0,composed:!0})),this.close()}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return this.open?v`
      <div class="sheet-overlay ${this.wide?"wide":""}" @click=${t=>t.target===t.currentTarget&&this.close()}>
        <div class="sheet-card">
          <div class="sheet-title-row">
            <div class="sheet-title">Log a past session</div>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="section-label">Instrument</div>
          <div class="inst-chip-row">
            ${this.instruments.map(t=>v`
                <div
                  class="inst-chip ${this.selectedInstrumentId===t.id?"selected":""}"
                  @click=${()=>this.selectedInstrumentId=t.id}
                >
                  <span class="inst-dot" style="background: ${t.color}"></span>
                  ${t.name}
                </div>
              `)}
          </div>

          <div class="section-label">Duration</div>
          <div class="stepper-row">
            <button type="button" class="stepper-btn" @click=${()=>this.adjustDuration(-5)}>−</button>
            <div class="stepper-value">${this.durationMinutes}′</div>
            <button type="button" class="stepper-btn" @click=${()=>this.adjustDuration(5)}>+</button>
          </div>

          <div class="date-time-row">
            <div>
              <div class="section-label">Date</div>
              <input
                type="date"
                class="date-input"
                .value=${this.sessionDate}
                @input=${t=>this.sessionDate=t.target.value}
              />
            </div>
            <div>
              <div class="section-label">Time</div>
              <input
                type="time"
                class="time-input"
                .value=${this.sessionTime}
                @input=${t=>this.sessionTime=t.target.value}
              />
            </div>
          </div>

          <div class="section-label">Notes</div>
          <textarea
            class="notes-textarea"
            placeholder="What did you work on?"
            .value=${this.notes}
            @input=${t=>this.notes=t.target.value}
          ></textarea>

          <div class="actions-row">
            <button type="button" class="btn-cancel" @click=${this.close}>Cancel</button>
            <button type="button" class="btn-save" @click=${this.handleSave}>Add session</button>
          </div>
        </div>
      </div>
    `:v``}};_e.styles=[Je,ge`
      :host {
        display: block;
      }

      .sheet-overlay {
        position: fixed;
        inset: 0;
        z-index: 1000;
        background: rgba(20, 10, 15, 0.66);
        display: flex;
        align-items: flex-end;
        justify-content: center;
        animation: fadeOnly 180ms ease-out both;
      }

      .sheet-overlay.wide {
        align-items: center;
        padding: 20px;
      }

      .sheet-card {
        width: 100%;
        max-width: 480px;
        max-height: 90vh;
        overflow-y: auto;
        background: var(--card, #FBFBF9);
        border-radius: 28px 28px 0 0;
        padding: 22px 20px calc(22px + env(safe-area-inset-bottom, 0px));
        box-sizing: border-box;
        color: var(--ink);
        animation: sheetIn 420ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        box-shadow: 0 -20px 50px rgba(10, 5, 15, 0.5);
      }

      .sheet-overlay.wide .sheet-card {
        border-radius: 28px;
        box-shadow: 0 30px 60px -20px rgba(10, 5, 15, 0.7);
      }

      .sheet-title-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 18px;
      }

      .sheet-title {
        font-family: 'Gabarito', sans-serif;
        font-size: 19px;
        font-weight: 800;
        letter-spacing: -0.02em;
      }

      .section-label {
        font-family: 'Manrope', sans-serif;
        font-size: 11px;
        font-weight: 800;
        color: var(--muted);
        margin-bottom: 8px;
      }

      .inst-chip-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 18px;
      }

      .inst-chip {
        padding: 9px 14px;
        border-radius: 999px;
        font-family: 'Manrope', sans-serif;
        font-size: 12.5px;
        font-weight: 700;
        cursor: pointer;
        border: 1px solid var(--line);
        background: var(--raised);
        color: var(--ink);
        display: flex;
        align-items: center;
        gap: 7px;
        transition: background-color 160ms ease-out, border-color 160ms ease-out, color 160ms ease-out;
      }

      .inst-chip.selected {
        border-color: transparent;
        background: var(--ink);
        color: var(--bg);
      }

      .inst-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .stepper-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 18px;
        margin-bottom: 18px;
      }

      .stepper-btn {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: none;
        background: var(--raised);
        color: var(--ink);
        font-family: 'Gabarito', sans-serif;
        font-size: 20px;
        font-weight: 800;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 140ms ease-out;
      }

      .stepper-btn:hover {
        background: var(--line);
      }

      .stepper-value {
        font-family: 'Gabarito', sans-serif;
        font-size: 28px;
        font-weight: 900;
        min-width: 90px;
        text-align: center;
      }

      .date-time-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 10px;
        margin-bottom: 18px;
      }

      .notes-textarea {
        width: 100%;
        min-height: 72px;
        resize: vertical;
        border: 1px solid var(--line);
        border-radius: 16px;
        padding: 12px 14px;
        font-family: 'Manrope', sans-serif;
        font-size: 14px;
        background: var(--raised);
        color: var(--ink);
        outline: none;
        box-sizing: border-box;
        margin-bottom: 18px;
      }

      .notes-textarea:focus {
        border-color: var(--accent);
        box-shadow: 0 0 0 1px var(--accent);
      }

      .actions-row {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: 10px;
      }

      .btn-cancel {
        background: var(--raised);
        color: var(--ink);
        border: none;
        border-radius: 999px;
        height: 50px;
        font-family: 'Gabarito', sans-serif;
        font-size: 14px;
        font-weight: 800;
        cursor: pointer;
      }

      .btn-save {
        background: var(--accent);
        color: var(--bg);
        border: none;
        border-radius: 999px;
        height: 50px;
        font-family: 'Gabarito', sans-serif;
        font-size: 14px;
        font-weight: 800;
        cursor: pointer;
      }

      .btn-save:hover {
        background: var(--accentHi);
      }

      .date-input,
      .time-input {
        width: 100%;
        border: 1px solid var(--line);
        border-radius: 14px;
        padding: 11px 14px;
        font-family: 'Manrope', sans-serif;
        font-size: 14px;
        background: var(--raised);
        color: var(--ink);
        outline: none;
        box-sizing: border-box;
      }
    `];Ye([P({type:Array})],_e.prototype,"instruments",2);Ye([P({type:Boolean})],_e.prototype,"open",2);Ye([A()],_e.prototype,"selectedInstrumentId",2);Ye([A()],_e.prototype,"durationMinutes",2);Ye([A()],_e.prototype,"sessionDate",2);Ye([A()],_e.prototype,"sessionTime",2);Ye([A()],_e.prototype,"notes",2);Ye([A()],_e.prototype,"wide",2);_e=Ye([Se("pt-manual-entry-modal")],_e);var Wu=Object.defineProperty,Ku=Object.getOwnPropertyDescriptor,Xe=(t,e,s,i)=>{for(var r=i>1?void 0:i?Ku(e,s):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Wu(e,s,r),r};function Vu(t){const e=t.getFullYear(),s=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0");return`${e}-${s}-${i}`}function Ju(t){const e=String(t.getHours()).padStart(2,"0"),s=String(t.getMinutes()).padStart(2,"0");return`${e}:${s}`}let ke=class extends ie{constructor(){super(...arguments),this.instruments=[],this.session=null,this.open=!1,this.instrumentId="",this.duration=0,this.sessionDate="",this.sessionTime="",this.notes=""}willUpdate(t){if(t.has("session")&&this.session){this.instrumentId=this.session.instrumentId,this.duration=this.session.duration;const e=new Date(this.session.start);this.sessionDate=Vu(e),this.sessionTime=Ju(e),this.notes=this.session.notes||""}}handleSave(){if(!this.session||!this.instrumentId||this.duration<=0)return;const t=this.sessionDate.split("-").map(Number),e=(this.sessionTime||"12:00").split(":").map(Number),s=new Date(t[0],t[1]-1,t[2],e[0]||0,e[1]||0,0,0),i=new Date(s.getTime()+this.duration*6e4),r={...this.session,instrumentId:this.instrumentId,start:s.toISOString(),end:i.toISOString(),duration:Math.round(this.duration),notes:this.notes.trim()||void 0};this.dispatchEvent(new CustomEvent("update-session",{detail:{session:r},bubbles:!0,composed:!0})),this.close()}handleDelete(){this.session&&confirm("Are you sure you want to delete this practice session?")&&(this.dispatchEvent(new CustomEvent("delete-session",{detail:{sessionId:this.session.id},bubbles:!0,composed:!0})),this.close())}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return!this.open||!this.session?v``:v`
      <div class="modal-overlay" @click=${t=>t.target===t.currentTarget&&this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Edit Practice Session</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="form-group">
            <label class="form-label">Instrument</label>
            <div class="inst-radio-group">
              ${this.instruments.map(t=>v`
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

          <div style="display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 10px;">
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
              <label class="form-label">Time</label>
              <input
                type="time"
                class="form-input"
                .value=${this.sessionTime}
                @input=${t=>this.sessionTime=t.target.value}
              />
            </div>
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
    `}};ke.styles=[Je,ge`
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
    `];Xe([P({type:Array})],ke.prototype,"instruments",2);Xe([P({type:Object})],ke.prototype,"session",2);Xe([P({type:Boolean})],ke.prototype,"open",2);Xe([A()],ke.prototype,"instrumentId",2);Xe([A()],ke.prototype,"duration",2);Xe([A()],ke.prototype,"sessionDate",2);Xe([A()],ke.prototype,"sessionTime",2);Xe([A()],ke.prototype,"notes",2);ke=Xe([Se("pt-edit-session-modal")],ke);var Yu=Object.defineProperty,Xu=Object.getOwnPropertyDescriptor,Ee=(t,e,s,i)=>{for(var r=i>1?void 0:i?Xu(e,s):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Yu(e,s,r),r};let ue=class extends ie{constructor(){super(...arguments),this.open=!1,this.initialTab="signin",this.activeTab="signin",this.email="",this.password="",this.confirmPassword="",this.isLoading=!1,this.errorMessage=null,this.successMessage=null,this.magicLinkSentEmail=null}willUpdate(t){t.has("open")&&this.open&&(this.initialTab&&(this.activeTab=this.initialTab),this.errorMessage=null,this.successMessage=null,this.magicLinkSentEmail=null)}close(){this.errorMessage=null,this.successMessage=null,this.password="",this.confirmPassword="",this.magicLinkSentEmail=null,this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}setTab(t){this.activeTab=t,this.errorMessage=null,this.successMessage=null,Ie(M.getSettings().soundEnabled)}handleKeyDown(t){t.key==="Escape"&&this.close()}async handleForgotPassword(){if(!this.email.trim()||!this.email.includes("@")){this.errorMessage="Please enter your email address first to reset password.";return}this.isLoading=!0,this.errorMessage=null,this.successMessage=null;try{const t=await V.resetPasswordForEmail(this.email);t.success?(rt(M.getSettings().soundEnabled),this.successMessage=t.message||"Password reset link sent to your email!"):this.errorMessage=t.message||"Failed to send password reset email."}finally{this.isLoading=!1}}async handleGoogleSignIn(){this.isLoading=!0,this.errorMessage=null,this.successMessage=null;try{const t=await V.signInWithOAuth("google");t.success?(rt(M.getSettings().soundEnabled),this.close()):this.errorMessage=t.message||"Google sign in failed."}finally{this.isLoading=!1}}async handleSubmit(t){if(t.preventDefault(),this.errorMessage=null,this.successMessage=null,this.activeTab==="reset-password"){if(!this.password||this.password.length<6){this.errorMessage="Password must be at least 6 characters long.";return}if(this.password!==this.confirmPassword){this.errorMessage="Passwords do not match.";return}this.isLoading=!0;try{const s=await V.updateUserPassword(this.password);s.success?(rt(M.getSettings().soundEnabled),this.successMessage="Password updated successfully!",this.password="",this.confirmPassword="",typeof window<"u"&&window.history&&window.history.replaceState(null,"",window.location.pathname+window.location.search),setTimeout(()=>{this.close()},1500)):this.errorMessage=s.message||"Failed to update password."}finally{this.isLoading=!1}return}const e=this.email.trim();if(!e||!e.includes("@")){this.errorMessage="Please enter a valid email address.";return}if(this.activeTab==="magic"){this.isLoading=!0;try{const s=await V.signInWithOtp(e);s.success?(rt(M.getSettings().soundEnabled),this.magicLinkSentEmail=e,this.dispatchEvent(new CustomEvent("magic-link-sent",{detail:{email:e},bubbles:!0,composed:!0}))):this.errorMessage=s.message||"Failed to send magic link."}finally{this.isLoading=!1}return}if(!this.password){this.errorMessage="Please enter your password.";return}if(this.activeTab==="create"){if(this.password.length<6){this.errorMessage="Password must be at least 6 characters long.";return}if(this.password!==this.confirmPassword){this.errorMessage="Passwords do not match.";return}this.isLoading=!0;try{const s=await V.signUp(e,this.password);s.success?(rt(M.getSettings().soundEnabled),s.user&&!s.user.confirmed_at&&V.getUser()===null?this.successMessage="Account created! Please check your email to confirm your account.":this.close()):this.errorMessage=s.message||"Sign up failed."}finally{this.isLoading=!1}return}if(this.activeTab==="signin"){this.isLoading=!0;try{const s=await V.signInWithPassword(e,this.password);s.success?(rt(M.getSettings().soundEnabled),this.close()):this.errorMessage=s.message||"Invalid email or password."}finally{this.isLoading=!1}}}renderSentState(){return v`
      <div class="modal-header">
        <div>
          <div class="title-main">Check your email</div>
        </div>
        <button type="button" class="close-round-btn" @click=${this.close} aria-label="Close modal">&times;</button>
      </div>
      <div class="sent-state">
        <div class="sent-copy">
          We sent a sign-in link to <b>${this.magicLinkSentEmail}</b>. Open it on any device.
        </div>
        <button type="button" class="primary-accent-btn" @click=${this.close}>I opened the link</button>
      </div>
    `}render(){if(!this.open)return v``;if(this.magicLinkSentEmail)return v`
        <div class="modal-backdrop" @click=${r=>r.target===r.currentTarget&&this.close()} @keydown=${this.handleKeyDown}>
          <div class="modal-card">${this.renderSentState()}</div>
        </div>
      `;const t=this.activeTab==="reset-password",e=this.isLoading?"Please wait...":t?"Update password":this.activeTab==="signin"?"Sign in":this.activeTab==="create"?"Create account":"Send magic link",s=t?"Set new password":"Musician account",i=t?"Enter a new password for your account":"so your sessions follow you";return v`
      <div
        class="modal-backdrop"
        @click=${r=>r.target===r.currentTarget&&this.close()}
        @keydown=${this.handleKeyDown}
      >
        <div class="modal-card">
          <!-- Header -->
          <div class="modal-header">
            <div>
              <div class="title-main">${s}</div>
              <div class="subtitle-line">${i}</div>
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

          <!-- 3-Tab Segmented Track (hidden in reset-password mode) -->
          ${t?"":v`
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
                    Create
                  </button>
                  <button
                    type="button"
                    class="tab-choice-btn ${this.activeTab==="magic"?"active":""}"
                    @click=${()=>this.setTab("magic")}
                  >
                    Magic link
                  </button>
                </div>
              `}

          ${this.errorMessage?v`<div class="alert-banner alert-error">${this.errorMessage}</div>`:""}
          ${this.successMessage?v`<div class="alert-banner alert-success">${this.successMessage}</div>`:""}

          <!-- Form Body -->
          <form @submit=${this.handleSubmit}>
            <div class="fields-stack">
              <!-- Reset Password Fields -->
              ${t?v`
                    <div class="field-block">
                      <div class="field-label">New password</div>
                      <input
                        type="password"
                        class="text-input pw"
                        required
                        minlength="6"
                        placeholder="At least 6 characters"
                        autocomplete="new-password"
                        .value=${this.password}
                        @input=${r=>this.password=r.target.value}
                      />
                    </div>
                    <div class="field-block">
                      <div class="field-label">Confirm new password</div>
                      <input
                        type="password"
                        class="text-input pw"
                        required
                        minlength="6"
                        placeholder="Repeat new password"
                        autocomplete="new-password"
                        .value=${this.confirmPassword}
                        @input=${r=>this.confirmPassword=r.target.value}
                      />
                    </div>
                  `:v`
                    <!-- Email Address -->
                    <div class="field-block">
                      <div class="field-label">Email address</div>
                      <input
                        type="email"
                        class="text-input"
                        placeholder="you@example.com"
                        required
                        autocomplete="email"
                        .value=${this.email}
                        @input=${r=>this.email=r.target.value}
                      />
                    </div>

                    <!-- Tab: Magic Link helper -->
                    ${this.activeTab==="magic"?v`
                          <div class="helper-copy">
                            No password. We'll email a one-time link that signs you in on any device.
                          </div>
                        `:""}

                    <!-- Tab: Sign In Password -->
                    ${this.activeTab==="signin"?v`
                          <div class="field-block">
                            <div class="label-row">
                              <div class="field-label">Password</div>
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
                              @input=${r=>this.password=r.target.value}
                            />
                          </div>
                        `:""}

                    <!-- Tab: Create Account Passwords -->
                    ${this.activeTab==="create"?v`
                          <div class="field-block">
                            <div class="field-label">Password</div>
                            <input
                              type="password"
                              class="text-input pw"
                              required
                              autocomplete="new-password"
                              .value=${this.password}
                              @input=${r=>this.password=r.target.value}
                            />
                          </div>
                          <div class="field-block">
                            <div class="field-label">Confirm password</div>
                            <input
                              type="password"
                              class="text-input pw"
                              required
                              autocomplete="new-password"
                              .value=${this.confirmPassword}
                              @input=${r=>this.confirmPassword=r.target.value}
                            />
                          </div>
                          <div class="adopt-callout">
                            <span class="adopt-dot"></span>
                            <div class="adopt-text">
                              Sessions on this device move into your new account.
                            </div>
                          </div>
                        `:""}
                  `}
            </div>

            <!-- Actions Stack -->
            <div class="actions-stack" style="margin-top: 18px;">
              <button
                type="submit"
                class="primary-accent-btn"
                ?disabled=${this.isLoading}
              >
                ${e}
              </button>

              ${t?v`
                    <div class="switch-row">
                      <button
                        type="button"
                        class="switch-action"
                        @click=${()=>this.setTab("signin")}
                      >
                        Back to sign in
                      </button>
                    </div>
                  `:this.activeTab==="signin"?v`
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
                  `:this.activeTab==="create"?v`
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
                  `:v`
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
    `}};ue.styles=[Je,ge`
      :host {
        display: block;
      }

      .modal-backdrop {
        position: fixed;
        inset: 0;
        z-index: 1000;
        background: rgba(20, 10, 15, 0.66);
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
        background: var(--card, #FBFBF9);
        border-radius: 28px;
        padding: 26px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        box-shadow: 0 30px 70px -20px rgba(10, 5, 15, 0.8);
        animation: popIn 220ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        color: var(--ink, #23241F);
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
        font-family: 'Gabarito', sans-serif;
        font-size: 20px;
        font-weight: 800;
        letter-spacing: -0.02em;
        line-height: 1.2;
        color: var(--ink);
      }

      .subtitle-line {
        font-family: 'Manrope', sans-serif;
        font-size: 13px;
        color: var(--muted, #767668);
        margin-top: 4px;
        line-height: 1.3;
      }

      .close-round-btn {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background: var(--raised, #EFEEE9);
        color: var(--muted, #767668);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        cursor: pointer;
        flex-shrink: 0;
        border: none;
        transition: filter 150ms ease-out, color 150ms ease-out;
      }

      .close-round-btn:hover {
        filter: brightness(1.1);
        color: var(--ink);
      }

      /* Segmented 3-Tab Control */
      .segmented-tabs-track {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 3px;
        background: var(--raised, #EFEEE9);
        border-radius: 999px;
        padding: 4px;
      }

      .tab-choice-btn {
        border: none;
        border-radius: 999px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Gabarito', sans-serif;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
        white-space: nowrap;
        background: transparent;
        color: var(--muted, #767668);
        transition: background-color 160ms ease-out, color 160ms ease-out;
        user-select: none;
      }

      .tab-choice-btn.active {
        background: var(--ink);
        color: var(--bg);
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
        font-family: 'Manrope', sans-serif;
        font-size: 10.5px;
        color: var(--muted, #A3A297);
        font-weight: 800;
      }

      .label-row {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 12px;
      }

      .forgot-action {
        font-family: 'Manrope', sans-serif;
        font-size: 11.5px;
        color: var(--accent);
        font-weight: 700;
        cursor: pointer;
        background: none;
        border: none;
        padding: 0;
        transition: opacity 140ms ease-out;
      }

      .forgot-action:hover {
        opacity: 0.8;
        text-decoration: underline;
      }

      .text-input {
        font-family: 'Manrope', sans-serif;
        font-size: 14px;
        color: var(--ink);
        background: var(--raised, #FFFFFF);
        border: 1px solid var(--line, #E7E6DF);
        border-radius: 999px;
        height: 48px;
        padding: 0 18px;
        outline: none;
        width: 100%;
        box-sizing: border-box;
        transition: border-color 140ms ease-out, box-shadow 140ms ease-out;
      }

      .text-input.pw {
      }

      .text-input:focus {
        border-color: var(--accent);
        box-shadow: 0 0 0 1px var(--accent);
      }

      .helper-copy {
        font-family: 'Manrope', sans-serif;
        font-size: 13px;
        line-height: 1.6;
        color: var(--muted, #767668);
        text-wrap: pretty;
      }

      .adopt-callout {
        display: flex;
        gap: 10px;
        align-items: flex-start;
        background: var(--raised, #F1F0EA);
        border-radius: 16px;
        padding: 12px 14px;
      }

      .adopt-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--chart, #8A7B94);
        margin-top: 6px;
        flex-shrink: 0;
      }

      .adopt-text {
        font-family: 'Manrope', sans-serif;
        font-size: 12.5px;
        line-height: 1.55;
        color: var(--muted);
        text-wrap: pretty;
      }

      /* Actions Stack */
      .actions-stack {
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      .primary-accent-btn {
        background: var(--accent);
        color: var(--bg);
        border-radius: 999px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Gabarito', sans-serif;
        font-size: 14px;
        font-weight: 800;
        cursor: pointer;
        border: none;
        width: 100%;
        transition: background-color 160ms ease-out, transform 140ms ease-out;
      }

      .primary-accent-btn:hover {
        background: var(--accentHi);
      }

      .primary-accent-btn:active {
        transform: scale(0.97);
      }

      .primary-accent-btn:disabled {
        opacity: 0.5;
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
        background: var(--line, #E7E6DF);
      }

      .or-text {
        font-family: 'Manrope', sans-serif;
        font-size: 10.5px;
        color: var(--muted, #A3A297);
        font-weight: 700;
      }

      .google-btn {
        background: var(--raised, #FFFFFF);
        border: 1px solid var(--line, #DDDCD4);
        border-radius: 999px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-family: 'Gabarito', sans-serif;
        font-size: 13.5px;
        font-weight: 700;
        color: var(--ink);
        cursor: pointer;
        width: 100%;
        transition: filter 150ms ease-out, transform 140ms ease-out;
      }

      .google-btn:hover {
        filter: brightness(0.97);
      }

      .google-btn:active {
        transform: scale(0.97);
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
        font-family: 'Manrope', sans-serif;
        font-size: 12.5px;
        color: var(--muted, #767668);
        text-align: center;
      }

      .switch-action {
        color: var(--accent);
        font-weight: 700;
        cursor: pointer;
        text-decoration: underline;
        text-underline-offset: 3px;
        background: none;
        border: none;
        padding: 0;
        font-family: 'Manrope', sans-serif;
        font-size: 12.5px;
      }

      .switch-action:hover {
        opacity: 0.85;
      }

      /* Alerts */
      .alert-banner {
        border-radius: 14px;
        padding: 10px 14px;
        font-family: 'Manrope', sans-serif;
        font-size: 12.5px;
        line-height: 1.45;
      }

      .alert-error {
        background: rgba(255, 122, 92, 0.14);
        border: 1px solid var(--accent);
        color: var(--accent);
      }

      .alert-success {
        background: rgba(155, 212, 155, 0.14);
        border: 1px solid #9BD49B;
        color: #9BD49B;
      }

      /* "Sent" state (magic link) */
      .sent-state {
        display: flex;
        flex-direction: column;
        gap: 18px;
        text-align: center;
        padding: 6px 0 2px;
      }

      .sent-copy {
        font-family: 'Manrope', sans-serif;
        font-size: 14px;
        line-height: 1.55;
        color: var(--muted);
      }

      .sent-copy b {
        color: var(--ink);
      }
    `];Ee([P({type:Boolean})],ue.prototype,"open",2);Ee([P({type:String})],ue.prototype,"initialTab",2);Ee([A()],ue.prototype,"activeTab",2);Ee([A()],ue.prototype,"email",2);Ee([A()],ue.prototype,"password",2);Ee([A()],ue.prototype,"confirmPassword",2);Ee([A()],ue.prototype,"isLoading",2);Ee([A()],ue.prototype,"errorMessage",2);Ee([A()],ue.prototype,"successMessage",2);Ee([A()],ue.prototype,"magicLinkSentEmail",2);ue=Ee([Se("pt-auth-modal")],ue);var Qu=Object.defineProperty,Zu=Object.getOwnPropertyDescriptor,ct=(t,e,s,i)=>{for(var r=i>1?void 0:i?Zu(e,s):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&Qu(e,s,r),r};let Pe=class extends ie{constructor(){super(...arguments),this.activeSession=null,this.instrument=null,this.sessions=[],this.now=Date.now(),this.weeklyGoalMinutes=420,this.wide=!1,this.reduceMotion=!1}get elapsedMs(){return this.activeSession?Math.max(0,this.now-this.activeSession.startedAt):0}render(){var l;if(!this.activeSession)return v``;const t=Math.floor(this.elapsedMs/6e4),s=ur(this.sessions,new Date(this.now))+t,i=this.weeklyGoalMinutes||420,r=Math.min(100,Math.round(s/i*100)),n=s>=i,a=Math.max(0,i-s),o=Vt(this.instrument);return v`
      <div class="wrap">
        <div class="glyph-box">
          <div class="glyph-scale">
            <pt-glyph .kind=${o} .live=${!this.reduceMotion}></pt-glyph>
          </div>
        </div>
        <div class="info">
          <div class="status-pill">
            <span class="status-dot"></span>
            ${((l=this.instrument)==null?void 0:l.name)||"Practicing"}
          </div>
          <div class="clock">${Vo(this.elapsedMs)}</div>
          <div class="progress-track">
            <div class="progress-fill" style="width:${r}%"></div>
          </div>
          <div class="progress-label">
            ${n?"Goal reached · still going":`${a} min to this week's ${i}-minute goal`}
          </div>
          <div class="actions">
            <button class="stop-btn" @click=${()=>this.dispatchEvent(new CustomEvent("end-session",{bubbles:!0,composed:!0}))}>
              <span class="stop-icon"></span>
              Stop
            </button>
            <button class="discard-link" @click=${()=>this.dispatchEvent(new CustomEvent("discard-session",{bubbles:!0,composed:!0}))}>
              Discard session
            </button>
          </div>
        </div>
      </div>
    `}};Pe.styles=[Je,ge`
      :host {
        position: fixed;
        inset: 0;
        z-index: 60;
        display: block;
        background: var(--bg, #2B1C33);
      }

      .wrap {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 22px;
        padding: 24px;
        animation: fadeIn 220ms ease-out both;
      }

      @media (min-width: 860px) {
        .wrap {
          flex-direction: row;
          gap: 40px;
        }
      }

      .glyph-box {
        width: 250px;
        height: 310px;
        overflow: hidden;
        border-radius: 26px;
        flex-shrink: 0;
      }

      @media (min-width: 860px) {
        .glyph-box {
          width: 330px;
          height: 409px;
        }
        .glyph-scale {
          transform: scale(1.32);
        }
      }

      .glyph-scale {
        transform-origin: 0 0;
      }

      .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;
        max-width: 360px;
        width: 100%;
      }

      @media (min-width: 860px) {
        .info {
          align-items: flex-start;
        }
      }

      .status-pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--card);
        color: var(--ink);
        border-radius: 999px;
        padding: 8px 16px;
        font-family: 'Manrope', sans-serif;
        font-size: 13px;
        font-weight: 800;
      }

      .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--accent);
        animation: softPulse 1.4s ease-in-out infinite;
      }

      .clock {
        font-family: 'Gabarito', sans-serif;
        font-weight: 900;
        font-size: 64px;
        letter-spacing: -0.02em;
        font-variant-numeric: tabular-nums;
        color: var(--ink);
      }

      @media (min-width: 860px) {
        .clock {
          font-size: 112px;
        }
      }

      .progress-track {
        width: 100%;
        height: 14px;
        border-radius: 999px;
        background: var(--raised);
        overflow: hidden;
      }

      .progress-fill {
        height: 100%;
        border-radius: 999px;
        background: var(--accent);
        transition: width 400ms cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      .progress-label {
        font-family: 'Manrope', sans-serif;
        font-size: 13px;
        color: var(--muted);
      }

      .actions {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        margin-top: 8px;
      }

      .stop-btn {
        height: 60px;
        border-radius: 999px;
        border: none;
        background: var(--accent);
        color: var(--bg);
        font-family: 'Gabarito', sans-serif;
        font-size: 16px;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
      }

      .stop-btn:hover {
        background: var(--accentHi);
      }

      .stop-icon {
        width: 14px;
        height: 14px;
        border-radius: 3px;
        background: var(--bg);
      }

      .discard-link {
        background: transparent;
        border: none;
        color: var(--muted);
        font-family: 'Manrope', sans-serif;
        font-size: 13px;
        text-decoration: underline;
        cursor: pointer;
        align-self: center;
      }

      .discard-link:hover {
        color: var(--accent);
      }
    `];ct([P({type:Object})],Pe.prototype,"activeSession",2);ct([P({type:Object})],Pe.prototype,"instrument",2);ct([P({type:Array})],Pe.prototype,"sessions",2);ct([P({type:Number})],Pe.prototype,"now",2);ct([P({type:Number})],Pe.prototype,"weeklyGoalMinutes",2);ct([P({type:Boolean})],Pe.prototype,"wide",2);ct([P({type:Boolean})],Pe.prototype,"reduceMotion",2);Pe=ct([Se("pt-recording-overlay")],Pe);var eh=Object.defineProperty,th=Object.getOwnPropertyDescriptor,Ga=(t,e,s,i)=>{for(var r=i>1?void 0:i?th(e,s):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&eh(e,s,r),r};const da=["var(--accent)","var(--chart)","#9BD49B","#FFC2A8","var(--ink)"];function sh(t){return Array.from({length:t},(e,s)=>{const i=Math.sin(s*12.9898)*43758.5453,r=i-Math.floor(i);return{left:s/t*100+(r*6-3),delay:r*1.2,duration:1.8+r*1.4,size:6+Math.round(r*6),color:da[s%da.length]}})}const ih=sh(26);let ci=class extends ie{constructor(){super(...arguments),this.goalMinutes=420}render(){return v`
      ${ih.map(t=>v`
          <div
            class="piece"
            style="left:${t.left}%;width:${t.size}px;height:${t.size*.4}px;background:${t.color};
              animation-duration:${t.duration}s;animation-delay:${t.delay}s;"
          ></div>
        `)}
      <div class="stamp-wrap">
        <div class="stamp">
          <div class="stamp-title">Goal</div>
          <div class="stamp-sub">${this.goalMinutes} min this week</div>
        </div>
      </div>
    `}};ci.styles=ge`
    :host {
      position: fixed;
      inset: 0;
      z-index: 70;
      pointer-events: none;
      display: block;
    }

    .piece {
      position: absolute;
      top: 0;
      border-radius: 2px;
      animation-name: fall;
      animation-timing-function: ease-in;
      animation-fill-mode: both;
    }

    @keyframes fall {
      0% { transform: translateY(-80px) rotate(0deg); opacity: 0; }
      6% { opacity: 1; }
      100% { transform: translateY(110vh) rotate(560deg); opacity: 1; }
    }

    .stamp-wrap {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .stamp {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      background: var(--accent);
      box-shadow: 0 0 0 12px rgba(255, 122, 92, 0.2);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      animation: stampOnce 4.2s cubic-bezier(0.2, 0.8, 0.2, 1) both;
    }

    @keyframes stampOnce {
      0% { transform: scale(1.9) rotate(-14deg); opacity: 0; }
      12% { transform: scale(1) rotate(-6deg); opacity: 1; }
      85% { transform: scale(1) rotate(-6deg); opacity: 1; }
      100% { transform: scale(0.9) rotate(-6deg); opacity: 0; }
    }

    .stamp-title {
      font-family: 'Gabarito', sans-serif;
      font-weight: 900;
      font-size: 46px;
      color: var(--bg);
    }

    .stamp-sub {
      font-family: 'Manrope', sans-serif;
      font-weight: 700;
      font-size: 13px;
      color: var(--bg);
      opacity: 0.8;
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation: none !important;
      }
    }
  `;Ga([P({type:Number})],ci.prototype,"goalMinutes",2);ci=Ga([Se("pt-celebration-overlay")],ci);var rh=Object.defineProperty,nh=Object.getOwnPropertyDescriptor,J=(t,e,s,i)=>{for(var r=i>1?void 0:i?nh(e,s):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(r=(i?a(e,s,r):a(r))||r);return i&&r&&rh(e,s,r),r};const Ji=[{id:"today",label:"Today"},{id:"log",label:"Log"},{id:"insights",label:"Insights"},{id:"settings",label:"Settings"}];let G=class extends ie{constructor(){super(...arguments),this.tab="today",this.instruments=[],this.sessions=[],this.activeSession=null,this.settings=M.getSettings(),this.syncStatus="synced",this.authState=V.getAuthState(),this.backgroundUrl=null,this.backgroundVisible=!1,this.now=Date.now(),this.wide=typeof window<"u"?window.innerWidth>=860:!0,this.manualLogModalOpen=!1,this.editSessionModalOpen=!1,this.sessionToEdit=null,this.authModalOpen=!1,this.authInitialTab="signin",this.syncPanelOpen=!1,this.celebrating=!1,this.resizeHandler=()=>{this.wide=window.innerWidth>=860}}connectedCallback(){super.connectedCallback(),this.refreshState(),Xn(this,this.settings.theme),this.unsubscribeStore=M.subscribe(()=>{this.refreshState()}),this.unsubscribeAuth=V.subscribe(t=>{this.authState=t}),this.unsubscribeRecovery=V.onPasswordRecovery(()=>{this.authInitialTab="reset-password",this.authModalOpen=!0}),V.hasRecoveryInUrl()&&(this.authInitialTab="reset-password",this.authModalOpen=!0),this.timerInterval=setInterval(()=>{this.now=Date.now()},1e3),window.addEventListener("resize",this.resizeHandler),this.checkBackground()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeStore&&this.unsubscribeStore(),this.unsubscribeAuth&&this.unsubscribeAuth(),this.unsubscribeRecovery&&this.unsubscribeRecovery(),this.timerInterval&&clearInterval(this.timerInterval),this.celebrationTimeout&&clearTimeout(this.celebrationTimeout),window.removeEventListener("resize",this.resizeHandler)}refreshState(){const t=this.settings;this.instruments=M.getAllInstruments(),this.sessions=M.getSessions(),this.activeSession=M.getActiveSession(),this.settings=M.getSettings(),this.syncStatus=M.getSyncStatus(),this.checkBackground(),t.theme!==this.settings.theme&&Xn(this,this.settings.theme)}async checkBackground(){const t=this.activeSession;if(t&&this.instruments.find(s=>s.id===t.instrumentId)){const s=await xu();if(s){this.backgroundUrl=s,this.backgroundVisible=!0;return}}this.backgroundVisible=!1}handleStartSession(t){M.startSession(t.detail.instrumentId)}handleEndSession(t){this.withGoalCelebrationCheck(()=>{var e;return M.endSession((e=t==null?void 0:t.detail)==null?void 0:e.notes)})}withGoalCelebrationCheck(t){const e=this.isGoalReachedNow();t();const s=this.isGoalReachedNow();!e&&s&&this.settings.celebrateGoal&&this.triggerCelebration()}isGoalReachedNow(){const t=this.settings.weeklyGoalMinutes||420;return ur(this.sessions,new Date(this.now))>=t}triggerCelebration(){this.celebrating=!0,this.celebrationTimeout&&clearTimeout(this.celebrationTimeout),this.celebrationTimeout=setTimeout(()=>{this.celebrating=!1},4200)}handleDiscardSession(){M.discardSession()}handleSaveManualSession(t){const{instrumentId:e,start:s,duration:i,notes:r}=t.detail;this.withGoalCelebrationCheck(()=>M.logManualSession(e,s,i,r))}handleQuickLog(t){const{instrumentId:e,duration:s,daysAgo:i}=t.detail,r=new Date;r.setDate(r.getDate()-i),r.setHours(18,0,0,0),this.withGoalCelebrationCheck(()=>M.logManualSession(e,r,s))}handleUpdateSession(t){M.updateSession(t.detail.session)}handleDeleteSession(t){M.deleteSession(t.detail.sessionId)}handleAddInstrument(t){M.addInstrument(t.detail.name,t.detail.color,t.detail.tier)}handleUpdateInstrument(t){M.updateInstrument(t.detail.instrument)}handleRetireInstrument(t){M.retireInstrument(t.detail.id)}handleRestoreInstrument(t){M.restoreInstrument(t.detail.id)}handleUpdateSettings(t){M.updateSettings(t.detail)}handleOpenAuthModal(t){var e;this.authInitialTab=((e=t==null?void 0:t.detail)==null?void 0:e.tab)||"signin",this.authModalOpen=!0}handleMagicLinkSent(t){var s;this.authModalOpen=!1;const e=(s=this.shadowRoot)==null?void 0:s.querySelector("pt-settings-view");e&&e.setMagicLinkSent&&e.setMagicLinkSent(t.detail.email)}async handleSignOut(){await V.signOut()}async handleSyncNow(){await M.syncWithCloud(!0)}renderSyncPill(t){const e=this.syncStatus==="syncing"?"syncing":t?"synced":"guest",s=this.syncStatus==="syncing"?"syncing…":t?`synced ${this.settings.lastSyncedAt?cn(this.settings.lastSyncedAt):"now"}`:"this device only";return v`
      <button class="sync-pill" @click=${()=>t?this.syncPanelOpen=!this.syncPanelOpen:this.handleOpenAuthModal()}>
        <span class="sync-dot ${e}"></span>
        <span>${s}</span>
      </button>
      ${this.syncPanelOpen?v`
            <div class="sync-backdrop" @click=${()=>this.syncPanelOpen=!1}></div>
            <div class="sync-panel" @click=${i=>i.stopPropagation()}>
              <div class="sync-panel-title">
                ${this.syncStatus==="syncing"?"Syncing…":`Synced ${this.settings.lastSyncedAt?cn(this.settings.lastSyncedAt):"now"}`}
              </div>
              <div class="sync-panel-copy">
                Syncs on open, when you come back to the app, and a second after every session or edit.
              </div>
              <button class="btn btn-primary" style="height:40px" @click=${this.handleSyncNow}>Sync now</button>
            </div>
          `:""}
    `}render(){var e;const t=this.authState.isAuthenticated;return v`
      ${this.backgroundUrl?v`<div
            class="ambient-bg ${this.backgroundVisible?"visible":""}"
            style="background-image: url('${this.backgroundUrl}')"
          ></div>`:""}

      ${this.activeSession?v`
            <pt-recording-overlay
              .activeSession=${this.activeSession}
              .instrument=${this.instruments.find(s=>s.id===this.activeSession.instrumentId)||null}
              .sessions=${this.sessions}
              .now=${this.now}
              .weeklyGoalMinutes=${this.settings.weeklyGoalMinutes||420}
              .wide=${this.wide}
              .reduceMotion=${!!this.settings.reduceMotion}
              @end-session=${this.handleEndSession}
              @discard-session=${this.handleDiscardSession}
            ></pt-recording-overlay>
          `:v`
            <div class="app-page-wrap ${this.wide?"":"narrow"}">
              <div class="app-layout-col">
                <header class="top-bar">
                  <div class="header-title">${this.wide?"practice":(e=Ji.find(s=>s.id===this.tab))==null?void 0:e.label}</div>
                  <div class="top-actions">
                    ${this.wide?v`
                          <nav class="pill-nav">
                            ${Ji.map(s=>v`
                                <button class="pill-nav-btn ${this.tab===s.id?"active":""}" @click=${()=>this.tab=s.id}>
                                  ${s.label}
                                </button>
                              `)}
                          </nav>
                        `:""}
                    ${this.renderSyncPill(t)}
                  </div>
                </header>

                <main>
                  ${this.tab==="today"?v`
                        <pt-today-view
                          .instruments=${this.instruments}
                          .sessions=${this.sessions}
                          .settings=${this.settings}
                          .now=${this.now}
                          @start-session=${this.handleStartSession}
                          @quick-log-session=${this.handleQuickLog}
                          @open-manual-log=${()=>this.manualLogModalOpen=!0}
                          @update-session=${this.handleUpdateSession}
                        ></pt-today-view>
                      `:""}
                  ${this.tab==="log"?v`
                        <pt-log-view
                          .instruments=${this.instruments}
                          .sessions=${this.sessions}
                          @open-manual-log=${()=>this.manualLogModalOpen=!0}
                          @save-manual-session=${this.handleSaveManualSession}
                          @update-session=${this.handleUpdateSession}
                          @delete-session=${this.handleDeleteSession}
                        ></pt-log-view>
                      `:""}
                  ${this.tab==="insights"?v`
                        <pt-insights-view
                          .instruments=${this.instruments}
                          .sessions=${this.sessions}
                          .settings=${this.settings}
                          .now=${this.now}
                          @start-session=${this.handleStartSession}
                        ></pt-insights-view>
                      `:""}
                  ${this.tab==="settings"?v`
                        <pt-settings-view
                          .settings=${this.settings}
                          .authState=${this.authState}
                          .syncStatus=${this.syncStatus}
                          .sessionCount=${this.sessions.filter(s=>!s.deletedAt).length}
                          .instruments=${this.instruments}
                          .sessions=${this.sessions}
                          @update-settings=${this.handleUpdateSettings}
                          @open-auth-modal=${this.handleOpenAuthModal}
                          @sign-out=${this.handleSignOut}
                          @sync-now=${this.handleSyncNow}
                          @add-instrument=${this.handleAddInstrument}
                          @update-instrument=${this.handleUpdateInstrument}
                          @retire-instrument=${this.handleRetireInstrument}
                          @restore-instrument=${this.handleRestoreInstrument}
                        ></pt-settings-view>
                      `:""}
                </main>
              </div>
            </div>

            ${this.wide?"":v`
                  <nav class="bottom-tab-bar">
                    ${Ji.map(s=>v`
                        <button class="bottom-tab-btn ${this.tab===s.id?"active":""}" @click=${()=>this.tab=s.id}>
                          ${s.label}
                        </button>
                      `)}
                  </nav>
                `}
          `}

      ${this.celebrating?v`<pt-celebration-overlay .goalMinutes=${this.settings.weeklyGoalMinutes||420}></pt-celebration-overlay>`:""}

      <!-- Modals -->
      <pt-auth-modal
        .open=${this.authModalOpen}
        .initialTab=${this.authInitialTab}
        @magic-link-sent=${this.handleMagicLinkSent}
        @close-modal=${()=>this.authModalOpen=!1}
      ></pt-auth-modal>

      <pt-manual-entry-modal
        .instruments=${this.instruments.filter(s=>!s.archived)}
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
    `}};G.styles=[Je,ge`
      :host {
        display: block;
        width: 100%;
        min-height: 100vh;
        min-height: 100dvh;
        background: var(--bg, #2B1C33);
        font-family: 'Manrope', system-ui, -apple-system, sans-serif;
        color: var(--ink, #F5E9DA);
        position: relative;
        overflow-x: hidden;
        transition: background-color 300ms ease-out;
      }

      .app-page-wrap {
        min-height: 100vh;
        min-height: 100dvh;
        padding: 22px 28px 40px;
        display: flex;
        justify-content: center;
        position: relative;
        z-index: 1;
      }

      .app-page-wrap.narrow {
        padding: 18px 14px 100px;
      }

      .app-layout-col {
        width: 100%;
        max-width: 1120px;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      /* Top bar */
      .top-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px 20px;
        flex-wrap: wrap;
      }

      .header-title {
        font-family: 'Gabarito', sans-serif;
        font-size: 21px;
        font-weight: 900;
        letter-spacing: -0.02em;
      }

      .top-actions {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .pill-nav {
        display: flex;
        background: var(--card);
        border-radius: 999px;
        padding: 4px;
        gap: 2px;
      }

      .pill-nav-btn {
        padding: 8px 16px;
        border-radius: 999px;
        font-family: 'Gabarito', sans-serif;
        font-size: 13px;
        font-weight: 700;
        cursor: pointer;
        border: none;
        background: transparent;
        color: var(--muted);
        transition: background-color 160ms ease-out, color 160ms ease-out;
        user-select: none;
      }

      .pill-nav-btn.active {
        background: var(--ink);
        color: var(--bg);
      }

      /* Sync pill */
      .sync-pill {
        display: flex;
        align-items: center;
        gap: 7px;
        background: var(--card);
        color: var(--ink);
        border-radius: 999px;
        height: 36px;
        padding: 0 14px;
        font-family: 'Manrope', sans-serif;
        font-size: 12px;
        font-weight: 800;
        cursor: pointer;
        border: none;
        user-select: none;
        transition: filter 150ms ease-out;
        position: relative;
      }

      .sync-pill:hover {
        filter: brightness(1.08);
      }

      .sync-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }

      .sync-dot.guest { background: var(--accent); }
      .sync-dot.saving { background: #FFC2A8; animation: softPulse 1s ease-in-out infinite; }
      .sync-dot.syncing { background: var(--chart); animation: softPulse 0.7s ease-in-out infinite; }
      .sync-dot.synced { background: #9BD49B; }

      .sync-backdrop {
        position: fixed;
        inset: 0;
        z-index: 39;
      }

      .sync-panel {
        position: absolute;
        top: 44px;
        right: 0;
        width: 300px;
        background: var(--card);
        border-radius: 20px;
        padding: 16px;
        box-shadow: 0 30px 60px -20px rgba(10, 5, 15, 0.7);
        z-index: 40;
        animation: popIn 200ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        text-align: left;
      }

      .sync-panel-title {
        font-family: 'Gabarito', sans-serif;
        font-weight: 800;
        font-size: 15px;
        margin-bottom: 6px;
      }

      .sync-panel-copy {
        font-size: 12px;
        color: var(--muted);
        line-height: 1.4;
        margin-bottom: 14px;
      }

      /* Bottom tab bar (mobile) */
      .bottom-tab-bar {
        position: fixed;
        left: 12px;
        right: 12px;
        bottom: 14px;
        height: 60px;
        border-radius: 999px;
        background: var(--card);
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        padding: 5px;
        gap: 4px;
        box-shadow: 0 10px 30px rgba(10, 5, 15, 0.5);
        z-index: 20;
      }

      .bottom-tab-btn {
        border: none;
        border-radius: 999px;
        background: transparent;
        color: var(--muted);
        font-family: 'Gabarito', sans-serif;
        font-size: 12px;
        font-weight: 700;
        cursor: pointer;
      }

      .bottom-tab-btn.active {
        background: var(--ink);
        color: var(--bg);
      }

      main {
        display: block;
        min-width: 0;
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
    `];J([A()],G.prototype,"tab",2);J([A()],G.prototype,"instruments",2);J([A()],G.prototype,"sessions",2);J([A()],G.prototype,"activeSession",2);J([A()],G.prototype,"settings",2);J([A()],G.prototype,"syncStatus",2);J([A()],G.prototype,"authState",2);J([A()],G.prototype,"backgroundUrl",2);J([A()],G.prototype,"backgroundVisible",2);J([A()],G.prototype,"now",2);J([A()],G.prototype,"wide",2);J([A()],G.prototype,"manualLogModalOpen",2);J([A()],G.prototype,"editSessionModalOpen",2);J([A()],G.prototype,"sessionToEdit",2);J([A()],G.prototype,"authModalOpen",2);J([A()],G.prototype,"authInitialTab",2);J([A()],G.prototype,"syncPanelOpen",2);J([A()],G.prototype,"celebrating",2);G=J([Se("pt-app")],G);
