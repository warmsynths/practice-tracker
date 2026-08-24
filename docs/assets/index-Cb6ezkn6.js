(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Os=globalThis,Mn=Os.ShadowRoot&&(Os.ShadyCSS===void 0||Os.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nn=Symbol(),yi=new WeakMap;let yr=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Nn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Mn&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=yi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&yi.set(t,e))}return e}toString(){return this.cssText}};const Aa=s=>new yr(typeof s=="string"?s:s+"",void 0,Nn),De=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((n,i,r)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[r+1],s[0]);return new yr(t,s,Nn)},$a=(s,e)=>{if(Mn)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),i=Os.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,s.appendChild(n)}},vi=Mn?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Aa(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ta,defineProperty:Oa,getOwnPropertyDescriptor:Ca,getOwnPropertyNames:Ra,getOwnPropertySymbols:Ia,getPrototypeOf:Pa}=Object,He=globalThis,wi=He.trustedTypes,Da=wi?wi.emptyScript:"",pn=He.reactiveElementPolyfillSupport,zt=(s,e)=>s,Ps={toAttribute(s,e){switch(e){case Boolean:s=s?Da:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Ln=(s,e)=>!Ta(s,e),_i={attribute:!0,type:String,converter:Ps,reflect:!1,useDefault:!1,hasChanged:Ln};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),He.litPropertyMetadata??(He.litPropertyMetadata=new WeakMap);let wt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_i){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Oa(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){const{get:i,set:r}=Ca(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:i,set(a){const o=i==null?void 0:i.call(this);r==null||r.call(this,a),this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_i}static _$Ei(){if(this.hasOwnProperty(zt("elementProperties")))return;const e=Pa(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(zt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(zt("properties"))){const t=this.properties,n=[...Ra(t),...Ia(t)];for(const i of n)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(vi(i))}else e!==void 0&&t.push(vi(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $a(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var r;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const a=(((r=n.converter)==null?void 0:r.toAttribute)!==void 0?n.converter:Ps).toAttribute(t,n.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){var r,a;const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=n.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:Ps;this._$Em=i;const c=l.fromAttribute(t,o.type);this[i]=c??((a=this._$Ej)==null?void 0:a.get(i))??c,this._$Em=null}}requestUpdate(e,t,n,i=!1,r){var a;if(e!==void 0){const o=this.constructor;if(i===!1&&(r=this[e]),n??(n=o.getPropertyOptions(e)),!((n.hasChanged??Ln)(r,t)||n.useDefault&&n.reflect&&r===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(o._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:r},a){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),r!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,a]of this._$Ep)this[r]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,a]of i){const{wrapped:o}=a,l=this[r];o!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,a,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};wt.elementStyles=[],wt.shadowRootOptions={mode:"open"},wt[zt("elementProperties")]=new Map,wt[zt("finalized")]=new Map,pn==null||pn({ReactiveElement:wt}),(He.reactiveElementVersions??(He.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=globalThis,xi=s=>s,Ds=Ht.trustedTypes,ki=Ds?Ds.createPolicy("lit-html",{createHTML:s=>s}):void 0,vr="$lit$",Ue=`lit$${Math.random().toFixed(9).slice(2)}$`,wr="?"+Ue,ja=`<${wr}>`,rt=document,Wt=()=>rt.createComment(""),Kt=s=>s===null||typeof s!="object"&&typeof s!="function",Un=Array.isArray,Fa=s=>Un(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",fn=`[ 	
\f\r]`,Mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Si=/-->/g,Ei=/>/g,Je=RegExp(`>|${fn}(?:([^\\s"'>=/]+)(${fn}*=${fn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ai=/'/g,$i=/"/g,_r=/^(?:script|style|textarea|title)$/i,Ma=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),x=Ma(1),At=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Ti=new WeakMap,tt=rt.createTreeWalker(rt,129);function xr(s,e){if(!Un(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ki!==void 0?ki.createHTML(e):e}const Na=(s,e)=>{const t=s.length-1,n=[];let i,r=e===2?"<svg>":e===3?"<math>":"",a=Mt;for(let o=0;o<t;o++){const l=s[o];let c,p,u=-1,g=0;for(;g<l.length&&(a.lastIndex=g,p=a.exec(l),p!==null);)g=a.lastIndex,a===Mt?p[1]==="!--"?a=Si:p[1]!==void 0?a=Ei:p[2]!==void 0?(_r.test(p[2])&&(i=RegExp("</"+p[2],"g")),a=Je):p[3]!==void 0&&(a=Je):a===Je?p[0]===">"?(a=i??Mt,u=-1):p[1]===void 0?u=-2:(u=a.lastIndex-p[2].length,c=p[1],a=p[3]===void 0?Je:p[3]==='"'?$i:Ai):a===$i||a===Ai?a=Je:a===Si||a===Ei?a=Mt:(a=Je,i=void 0);const f=a===Je&&s[o+1].startsWith("/>")?" ":"";r+=a===Mt?l+ja:u>=0?(n.push(c),l.slice(0,u)+vr+l.slice(u)+Ue+f):l+Ue+(u===-2?o:f)}return[xr(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class Vt{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,a=0;const o=e.length-1,l=this.parts,[c,p]=Na(e,t);if(this.el=Vt.createElement(c,n),tt.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=tt.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(vr)){const g=p[a++],f=i.getAttribute(u).split(Ue),h=/([.?@])?(.*)/.exec(g);l.push({type:1,index:r,name:h[2],strings:f,ctor:h[1]==="."?Ua:h[1]==="?"?Ba:h[1]==="@"?za:Hs}),i.removeAttribute(u)}else u.startsWith(Ue)&&(l.push({type:6,index:r}),i.removeAttribute(u));if(_r.test(i.tagName)){const u=i.textContent.split(Ue),g=u.length-1;if(g>0){i.textContent=Ds?Ds.emptyScript:"";for(let f=0;f<g;f++)i.append(u[f],Wt()),tt.nextNode(),l.push({type:2,index:++r});i.append(u[g],Wt())}}}else if(i.nodeType===8)if(i.data===wr)l.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(Ue,u+1))!==-1;)l.push({type:7,index:r}),u+=Ue.length-1}r++}}static createElement(e,t){const n=rt.createElement("template");return n.innerHTML=e,n}}function $t(s,e,t=s,n){var a,o;if(e===At)return e;let i=n!==void 0?(a=t._$Co)==null?void 0:a[n]:t._$Cl;const r=Kt(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((o=i==null?void 0:i._$AO)==null||o.call(i,!1),r===void 0?i=void 0:(i=new r(s),i._$AT(s,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=i:t._$Cl=i),i!==void 0&&(e=$t(s,i._$AS(s,e.values),i,n)),e}class La{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??rt).importNode(t,!0);tt.currentNode=i;let r=tt.nextNode(),a=0,o=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new ns(r,r.nextSibling,this,e):l.type===1?c=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(c=new Ha(r,this,e)),this._$AV.push(c),l=n[++o]}a!==(l==null?void 0:l.index)&&(r=tt.nextNode(),a++)}return tt.currentNode=rt,i}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ns{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=$t(this,e,t),Kt(e)?e===K||e==null||e===""?(this._$AH!==K&&this._$AR(),this._$AH=K):e!==this._$AH&&e!==At&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Fa(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==K&&Kt(this._$AH)?this._$AA.nextSibling.data=e:this.T(rt.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Vt.createElement(xr(n.h,n.h[0]),this.options)),n);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(t);else{const a=new La(i,this),o=a.u(this.options);a.p(t),this.T(o),this._$AH=a}}_$AC(e){let t=Ti.get(e.strings);return t===void 0&&Ti.set(e.strings,t=new Vt(e)),t}k(e){Un(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const r of e)i===t.length?t.push(n=new ns(this.O(Wt()),this.O(Wt()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e!==this._$AB;){const i=xi(e).nextSibling;xi(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Hs{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,r){this.type=1,this._$AH=K,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=K}_$AI(e,t=this,n,i){const r=this.strings;let a=!1;if(r===void 0)e=$t(this,e,t,0),a=!Kt(e)||e!==this._$AH&&e!==At,a&&(this._$AH=e);else{const o=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=$t(this,o[n+l],t,l),c===At&&(c=this._$AH[l]),a||(a=!Kt(c)||c!==this._$AH[l]),c===K?e=K:e!==K&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}a&&!i&&this.j(e)}j(e){e===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ua extends Hs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===K?void 0:e}}class Ba extends Hs{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==K)}}class za extends Hs{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){if((e=$t(this,e,t,0)??K)===At)return;const n=this._$AH,i=e===K&&n!==K||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==K&&(n===K||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ha{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){$t(this,e)}}const gn=Ht.litHtmlPolyfillSupport;gn==null||gn(Vt,ns),(Ht.litHtmlVersions??(Ht.litHtmlVersions=[])).push("3.3.3");const qa=(s,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let i=n._$litPart$;if(i===void 0){const r=(t==null?void 0:t.renderBefore)??null;n._$litPart$=i=new ns(e.insertBefore(Wt(),r),r,void 0,t??{})}return i._$AI(s),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=globalThis;class ie extends wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qa(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return At}}var br;ie._$litElement$=!0,ie.finalized=!0,(br=it.litElementHydrateSupport)==null||br.call(it,{LitElement:ie});const mn=it.litElementPolyfillSupport;mn==null||mn({LitElement:ie});(it.litElementVersions??(it.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wa={attribute:!0,type:String,converter:Ps,reflect:!1,hasChanged:Ln},Ka=(s=Wa,e,t)=>{const{kind:n,metadata:i}=t;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),n==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(t.name,s),n==="accessor"){const{name:a}=t;return{set(o){const l=e.get.call(this);e.set.call(this,o),this.requestUpdate(a,l,s,!0,o)},init(o){return o!==void 0&&this.C(a,void 0,s,o),o}}}if(n==="setter"){const{name:a}=t;return function(o){const l=this[a];e.call(this,o),this.requestUpdate(a,l,s,!0,o)}}throw Error("Unsupported decorator location: "+n)};function H(s){return(e,t)=>typeof t=="object"?Ka(s,e,t):((n,i,r)=>{const a=i.hasOwnProperty(r);return i.constructor.createProperty(r,n),a?Object.getOwnPropertyDescriptor(i,r):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function T(s){return H({...s,state:!0,attribute:!1})}function Va(s){return s.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||"instrument"}function Ga(s){const e=new Date(s);return e.setHours(0,0,0,0),e}function Ja(s,e){const t=new Date(s);return t.setDate(t.getDate()+e),t}let ft=null;function Bn(){if(typeof window>"u")return null;if(!ft){const s=window.AudioContext||window.webkitAudioContext;s&&(ft=new s)}return ft&&ft.state==="suspended"&&ft.resume().catch(()=>{}),ft}function Ya(s=!0){if(s)try{const e=Bn();if(!e)return;const t=e.currentTime,n=(i,r,a,o)=>{const l=e.createOscillator(),c=e.createOscillator(),p=e.createGain(),u=e.createGain();l.type="sine",l.frequency.setValueAtTime(i,r),c.type="sine",c.frequency.setValueAtTime(i*2,r),p.gain.setValueAtTime(1e-4,r),p.gain.exponentialRampToValueAtTime(o,r+.02),p.gain.exponentialRampToValueAtTime(1e-4,r+a),u.gain.setValueAtTime(1e-4,r),u.gain.exponentialRampToValueAtTime(o*.25,r+.015),u.gain.exponentialRampToValueAtTime(1e-4,r+a*.6),l.connect(p),c.connect(u),p.connect(e.destination),u.connect(e.destination),l.start(r),c.start(r),l.stop(r+a+.05),c.stop(r+a+.05)};n(523.25,t,.5,.1),n(659.25,t+.1,.8,.12)}catch{}}function Ze(s=!0){if(s)try{const e=Bn();if(!e)return;const t=e.currentTime,n=(i,r,a,o)=>{const l=e.createOscillator(),c=e.createOscillator(),p=e.createGain(),u=e.createGain();l.type="sine",l.frequency.setValueAtTime(i,r),c.type="sine",c.frequency.setValueAtTime(i*2,r),p.gain.setValueAtTime(1e-4,r),p.gain.exponentialRampToValueAtTime(o,r+.02),p.gain.exponentialRampToValueAtTime(1e-4,r+a),u.gain.setValueAtTime(1e-4,r),u.gain.exponentialRampToValueAtTime(o*.25,r+.015),u.gain.exponentialRampToValueAtTime(1e-4,r+a*.6),l.connect(p),c.connect(u),p.connect(e.destination),u.connect(e.destination),l.start(r),c.start(r),l.stop(r+a+.05),c.stop(r+a+.05)};n(523.25,t,.5,.1),n(659.25,t+.09,.6,.11),n(783.99,t+.18,1.1,.13)}catch{}}function me(s=!0){if(s)try{const e=Bn();if(!e)return;const t=e.currentTime,n=e.createOscillator(),i=e.createGain();n.type="sine",n.frequency.setValueAtTime(420,t),n.frequency.exponentialRampToValueAtTime(220,t+.035),i.gain.setValueAtTime(.04,t),i.gain.exponentialRampToValueAtTime(1e-4,t+.04),n.connect(i),i.connect(e.destination),n.start(t),n.stop(t+.04)}catch{}}function bn(s=15,e=!0){if(e)try{typeof navigator<"u"&&"vibrate"in navigator&&navigator.vibrate(s)}catch{}}class Xa{formatUrl(e){let t=e.trim().replace(/\/+$/,"");return t&&!t.startsWith("http://")&&!t.startsWith("https://")&&(t="https://"+t),t}applyAuthHeaders(e,t){if(!t)return;const n=t.trim();n.toLowerCase().startsWith("bearer ")?e.Authorization=n:n.includes(".")&&n.length>30?e.Authorization=`Bearer ${n}`:e["X-PT-Secret"]=n}async testConnection(e,t){const n=this.formatUrl(e);if(!n)return{ok:!1,status:0,message:"Worker URL cannot be empty"};try{const i={};this.applyAuthHeaders(i,t);const r=new AbortController,a=setTimeout(()=>r.abort(),8e3),o=await fetch(`${n}/api/health`,{method:"GET",headers:i,signal:r.signal});if(clearTimeout(a),o.status===200)return{ok:!0,status:200,message:"Connected to Cloudflare Worker",timestamp:(await o.json().catch(()=>({}))).timestamp};if(o.status===401)return{ok:!1,status:401,message:"Unauthorized: Invalid or missing authorization token"};const l=await o.text().catch(()=>"");return{ok:!1,status:o.status,message:`Connection error (${o.status}): ${l||o.statusText}`}}catch(i){return i instanceof Error&&i.name==="AbortError"?{ok:!1,status:0,message:"Connection timed out (8s limit)"}:{ok:!1,status:0,message:"Network error: Unable to reach worker endpoint"}}}async sync(e,t,n){const i=this.formatUrl(e);if(!i)throw new Error("Worker URL is not configured");const r={"Content-Type":"application/json"};this.applyAuthHeaders(r,t);const a=new AbortController,o=setTimeout(()=>a.abort(),15e3),l=await fetch(`${i}/api/sync`,{method:"POST",headers:r,body:JSON.stringify(n),signal:a.signal});if(clearTimeout(o),!l.ok){let c="";try{const p=await l.json();c=p.error||p.message||""}catch{c=await l.text().catch(()=>"")}throw new Error(`Cloud sync failed (${l.status}): ${c||l.statusText||"Unknown error"}`)}return await l.json()}}const Oi=new Xa,Qa=Symbol.for("@supabase/supabase-js.traceContextExtractor");function Za(){return globalThis[Qa]}function qs(s,e){var t={};for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&e.indexOf(n)<0&&(t[n]=s[n]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(s);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(s,n[i])&&(t[n[i]]=s[n[i]]);return t}function eo(s,e,t,n){function i(r){return r instanceof t?r:new t(function(a){a(r)})}return new(t||(t=Promise))(function(r,a){function o(p){try{c(n.next(p))}catch(u){a(u)}}function l(p){try{c(n.throw(p))}catch(u){a(u)}}function c(p){p.done?r(p.value):i(p.value).then(o,l)}c((n=n.apply(s,e||[])).next())})}const to=s=>s?(...e)=>s(...e):(...e)=>fetch(...e);class zn extends Error{constructor(e,t="FunctionsError",n){super(e),this.name=t,this.context=n}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class so extends zn{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class Ci extends zn{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class Ri extends zn{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var $n;(function(s){s.Any="any",s.ApNortheast1="ap-northeast-1",s.ApNortheast2="ap-northeast-2",s.ApSouth1="ap-south-1",s.ApSoutheast1="ap-southeast-1",s.ApSoutheast2="ap-southeast-2",s.CaCentral1="ca-central-1",s.EuCentral1="eu-central-1",s.EuWest1="eu-west-1",s.EuWest2="eu-west-2",s.EuWest3="eu-west-3",s.SaEast1="sa-east-1",s.UsEast1="us-east-1",s.UsWest1="us-west-1",s.UsWest2="us-west-2"})($n||($n={}));class no{constructor(e,{headers:t={},customFetch:n,region:i=$n.Any}={}){this.url=e,this.headers=t,this.region=i,this.fetch=to(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return eo(this,arguments,void 0,function*(t,n={}){var i,r;let a,o,l;try{const{headers:c,method:p,body:u,signal:g,timeout:f}=n;let h={},{region:b}=n;b||(b=this.region);const y=new URL(`${this.url}/${t}`);b&&b!=="any"&&(h["x-region"]=b,y.searchParams.set("forceFunctionRegion",b));let v;const k=!!c&&Object.keys(c).some(je=>je.toLowerCase()==="content-type");u&&!k?typeof Blob<"u"&&u instanceof Blob||u instanceof ArrayBuffer?(h["Content-Type"]="application/octet-stream",v=u):typeof u=="string"?(h["Content-Type"]="text/plain",v=u):typeof FormData<"u"&&u instanceof FormData?v=u:(h["Content-Type"]="application/json",v=JSON.stringify(u)):u&&typeof u!="string"&&!(typeof Blob<"u"&&u instanceof Blob)&&!(u instanceof ArrayBuffer)&&!(typeof FormData<"u"&&u instanceof FormData)?v=JSON.stringify(u):v=u;let w=g;f&&(o=new AbortController,a=setTimeout(()=>o.abort(),f),g?(w=o.signal,l=()=>o.abort(),g.addEventListener("abort",l)):w=o.signal);const A=yield this.fetch(y.toString(),{method:p||"POST",headers:Object.assign(Object.assign(Object.assign({},h),this.headers),c),body:v,signal:w}).catch(je=>{throw new so(je)}),N=A.headers.get("x-relay-error");if(N&&N==="true")throw new Ci(A);if(!A.ok)throw new Ri(A);let C=((i=A.headers.get("Content-Type"))!==null&&i!==void 0?i:"text/plain").split(";")[0].trim().toLowerCase(),R;return C==="application/json"?R=yield A.json():C==="application/octet-stream"||C==="application/pdf"?R=yield A.blob():C==="text/event-stream"?R=A:C==="multipart/form-data"?R=yield A.formData():R=yield A.text(),{data:R,error:null,response:A}}catch(c){return{data:null,error:c,response:c instanceof Ri||c instanceof Ci?c.context:void 0}}finally{a&&clearTimeout(a),l&&((r=n.signal)===null||r===void 0||r.removeEventListener("abort",l))}})}}const kr=3,Ii=s=>Math.min(1e3*2**s,3e4),io=[520,503],Sr=["GET","HEAD","OPTIONS"];var yn=class extends Error{constructor(s){super(s.message),this.name="PostgrestError",this.details=s.details,this.hint=s.hint,this.code=s.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function Gt(s){"@babel/helpers - typeof";return Gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gt(s)}function ro(s,e){if(Gt(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var n=t.call(s,e);if(Gt(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function ao(s){var e=ro(s,"string");return Gt(e)=="symbol"?e:e+""}function oo(s,e,t){return(e=ao(e))in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function Pi(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(s,i).enumerable})),t.push.apply(t,n)}return t}function kt(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Pi(Object(t),!0).forEach(function(n){oo(s,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):Pi(Object(t)).forEach(function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(t,n))})}return s}function Di(s,e){return new Promise(t=>{if(e!=null&&e.aborted){t();return}const n=setTimeout(()=>{e==null||e.removeEventListener("abort",i),t()},s);function i(){clearTimeout(n),t()}e==null||e.addEventListener("abort",i)})}function lo(s,e,t,n){return!(!n||t>=kr||!Sr.includes(s)||!io.includes(e))}var co=class{constructor(s){var e,t,n,i,r;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=s.method,this.url=s.url,this.headers=new Headers(s.headers),this.schema=s.schema,this.body=s.body,this.shouldThrowOnError=(e=s.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=s.signal,this.isMaybeSingle=(t=s.isMaybeSingle)!==null&&t!==void 0?t:!1,this.shouldStripNulls=(n=s.shouldStripNulls)!==null&&n!==void 0?n:!1,this.urlLengthLimit=(i=s.urlLengthLimit)!==null&&i!==void 0?i:8e3,this.retryEnabled=(r=s.retry)!==null&&r!==void 0?r:!0,s.fetch?this.fetch=s.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(s,e){return this.headers=new Headers(this.headers),this.headers.set(s,e),this}retry(s){return this.retryEnabled=s,this}then(s,e){var t=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const a=this.headers.get("Accept");a==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!a||a==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const n=this.fetch;let r=(async()=>{let a=0;for(;;){const c={};t.headers.forEach((u,g)=>{c[g]=u}),a>0&&(c["X-Retry-Count"]=String(a));let p;try{p=await n(t.url.toString(),{method:t.method,headers:c,body:JSON.stringify(t.body,(u,g)=>typeof g=="bigint"?g.toString():g),signal:t.signal})}catch(u){if((u==null?void 0:u.name)==="AbortError"||(u==null?void 0:u.code)==="ABORT_ERR"||!Sr.includes(t.method))throw u;if(t.retryEnabled&&a<kr){const g=Ii(a);a++,await Di(g,t.signal);continue}throw u}if(lo(t.method,p.status,a,t.retryEnabled)){var o,l;const u=(o=(l=p.headers)===null||l===void 0?void 0:l.get("Retry-After"))!==null&&o!==void 0?o:null,g=u!==null?Math.max(0,parseInt(u,10)||0)*1e3:Ii(a);await p.text(),a++,await Di(g,t.signal);continue}return await t.processResponse(p)}})();return this.shouldThrowOnError||(r=r.catch(a=>{var o;let l="",c="",p="";const u=a==null?void 0:a.cause;if(u){var g,f,h,b;const k=(g=u==null?void 0:u.message)!==null&&g!==void 0?g:"",w=(f=u==null?void 0:u.code)!==null&&f!==void 0?f:"";l=`${(h=a==null?void 0:a.name)!==null&&h!==void 0?h:"FetchError"}: ${a==null?void 0:a.message}`,l+=`

Caused by: ${(b=u==null?void 0:u.name)!==null&&b!==void 0?b:"Error"}: ${k}`,w&&(l+=` (${w})`),u!=null&&u.stack&&(l+=`
${u.stack}`)}else{var y;l=(y=a==null?void 0:a.stack)!==null&&y!==void 0?y:""}const v=this.url.toString().length;return(a==null?void 0:a.name)==="AbortError"||(a==null?void 0:a.code)==="ABORT_ERR"?(p="",c="Request was aborted (timeout or manual cancellation)",v>this.urlLengthLimit&&(c+=`. Note: Your request URL is ${v} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((u==null?void 0:u.name)==="HeadersOverflowError"||(u==null?void 0:u.code)==="UND_ERR_HEADERS_OVERFLOW")&&(p="",c="HTTP headers exceeded server limits (typically 16KB)",v>this.urlLengthLimit&&(c+=`. Your request URL is ${v} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(o=a==null?void 0:a.name)!==null&&o!==void 0?o:"FetchError"}: ${a==null?void 0:a.message}`,details:l,hint:c,code:p},data:null,count:null,status:0,statusText:""}})),r.then(s,e)}async processResponse(s){var e=this;let t=null,n=null,i=null,r=s.status,a=s.statusText;if(s.ok){var o,l;if(e.method!=="HEAD"){var c;const f=await s.text();if(f!=="")if(e.headers.get("Accept")==="text/csv")n=f;else if(e.headers.get("Accept")&&(!((c=e.headers.get("Accept"))===null||c===void 0)&&c.includes("application/vnd.pgrst.plan+text")))n=f;else try{n=JSON.parse(f)}catch{if(t={message:f},n=null,e.shouldThrowOnError)throw new yn({message:f,details:"",hint:"",code:""})}}const u=(o=e.headers.get("Prefer"))===null||o===void 0?void 0:o.match(/count=(exact|planned|estimated)/),g=(l=s.headers.get("content-range"))===null||l===void 0?void 0:l.split("/");if(u&&g&&g.length>1&&(i=parseInt(g[1])),e.isMaybeSingle&&Array.isArray(n))if(n.length>1){if(t={code:"PGRST116",details:`Results contain ${n.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},n=null,i=null,r=406,a="Not Acceptable",e.shouldThrowOnError){var p;throw new yn(kt(kt({},t),{},{hint:(p=t.hint)!==null&&p!==void 0?p:""}))}}else n.length===1?n=n[0]:n=null}else{const u=await s.text();try{t=JSON.parse(u),Array.isArray(t)&&s.status===404&&(n=[],t=null,r=200,a="OK")}catch{s.status===404&&u===""?(r=204,a="No Content"):t={message:u}}if(t&&e.shouldThrowOnError)throw new yn(t)}return{success:t===null,error:t,data:n,count:i,status:r,statusText:a}}returns(){return this}overrideTypes(){return this}},uo=class extends co{throwOnError(){return super.throwOnError()}select(s){let e=!1;const t=(s??"*").split("").map(n=>/\s/.test(n)&&!e?"":(n==='"'&&(e=!e),n)).join("");return this.url.searchParams.set("select",t),this.headers.append("Prefer","return=representation"),this}order(s,{ascending:e=!0,nullsFirst:t,foreignTable:n,referencedTable:i=n}={}){const r=i?`${i}.order`:"order",a=this.url.searchParams.get(r);return this.url.searchParams.set(r,`${a?`${a},`:""}${s}.${e?"asc":"desc"}${t===void 0?"":t?".nullsfirst":".nullslast"}`),this}limit(s,{foreignTable:e,referencedTable:t=e}={}){const n=typeof t>"u"?"limit":`${t}.limit`;return this.url.searchParams.set(n,`${s}`),this}range(s,e,{foreignTable:t,referencedTable:n=t}={}){const i=typeof n>"u"?"offset":`${n}.offset`,r=typeof n>"u"?"limit":`${n}.limit`;return this.url.searchParams.set(i,`${s}`),this.url.searchParams.set(r,`${e-s+1}`),this}abortSignal(s){return this.signal=s,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:s=!1,verbose:e=!1,settings:t=!1,buffers:n=!1,wal:i=!1,format:r="text"}={}){var a;const o=[s?"analyze":null,e?"verbose":null,t?"settings":null,n?"buffers":null,i?"wal":null].filter(Boolean).join("|"),l=(a=this.headers.get("Accept"))!==null&&a!==void 0?a:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${r}; for="${l}"; options=${o};`),r==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(s){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${s}`),this}};const ji=new RegExp("[,()]");var _t=class extends uo{throwOnError(){return super.throwOnError()}eq(s,e){return this.url.searchParams.append(s,`eq.${e}`),this}neq(s,e){return this.url.searchParams.append(s,`neq.${e}`),this}gt(s,e){return this.url.searchParams.append(s,`gt.${e}`),this}gte(s,e){return this.url.searchParams.append(s,`gte.${e}`),this}lt(s,e){return this.url.searchParams.append(s,`lt.${e}`),this}lte(s,e){return this.url.searchParams.append(s,`lte.${e}`),this}like(s,e){return this.url.searchParams.append(s,`like.${e}`),this}likeAllOf(s,e){return this.url.searchParams.append(s,`like(all).{${e.join(",")}}`),this}likeAnyOf(s,e){return this.url.searchParams.append(s,`like(any).{${e.join(",")}}`),this}ilike(s,e){return this.url.searchParams.append(s,`ilike.${e}`),this}ilikeAllOf(s,e){return this.url.searchParams.append(s,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(s,e){return this.url.searchParams.append(s,`ilike(any).{${e.join(",")}}`),this}regexMatch(s,e){return this.url.searchParams.append(s,`match.${e}`),this}regexIMatch(s,e){return this.url.searchParams.append(s,`imatch.${e}`),this}is(s,e){return this.url.searchParams.append(s,`is.${e}`),this}isDistinct(s,e){return this.url.searchParams.append(s,`isdistinct.${e}`),this}in(s,e){const t=Array.from(new Set(e)).map(n=>typeof n=="string"&&ji.test(n)?`"${n}"`:`${n}`).join(",");return this.url.searchParams.append(s,`in.(${t})`),this}notIn(s,e){const t=Array.from(new Set(e)).map(n=>typeof n=="string"&&ji.test(n)?`"${n}"`:`${n}`).join(",");return this.url.searchParams.append(s,`not.in.(${t})`),this}contains(s,e){return typeof e=="string"?this.url.searchParams.append(s,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(s,`cs.{${e.join(",")}}`):this.url.searchParams.append(s,`cs.${JSON.stringify(e)}`),this}containedBy(s,e){return typeof e=="string"?this.url.searchParams.append(s,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(s,`cd.{${e.join(",")}}`):this.url.searchParams.append(s,`cd.${JSON.stringify(e)}`),this}rangeGt(s,e){return this.url.searchParams.append(s,`sr.${e}`),this}rangeGte(s,e){return this.url.searchParams.append(s,`nxl.${e}`),this}rangeLt(s,e){return this.url.searchParams.append(s,`sl.${e}`),this}rangeLte(s,e){return this.url.searchParams.append(s,`nxr.${e}`),this}rangeAdjacent(s,e){return this.url.searchParams.append(s,`adj.${e}`),this}overlaps(s,e){return typeof e=="string"?this.url.searchParams.append(s,`ov.${e}`):this.url.searchParams.append(s,`ov.{${e.join(",")}}`),this}textSearch(s,e,{config:t,type:n}={}){let i="";n==="plain"?i="pl":n==="phrase"?i="ph":n==="websearch"&&(i="w");const r=t===void 0?"":`(${t})`;return this.url.searchParams.append(s,`${i}fts${r}.${e}`),this}match(s){return Object.entries(s).filter(([e,t])=>t!==void 0).forEach(([e,t])=>{this.url.searchParams.append(e,`eq.${t}`)}),this}not(s,e,t){return this.url.searchParams.append(s,`not.${e}.${t}`),this}or(s,{foreignTable:e,referencedTable:t=e}={}){const n=t?`${t}.or`:"or";return this.url.searchParams.append(n,`(${s})`),this}filter(s,e,t){return this.url.searchParams.append(s,`${e}.${t}`),this}},ho=class{constructor(s,{headers:e={},schema:t,fetch:n,urlLengthLimit:i=8e3,retry:r}){this.url=s,this.headers=new Headers(e),this.schema=t,this.fetch=n,this.urlLengthLimit=i,this.retry=r}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(s,e){const{head:t=!1,count:n}=e??{},i=t?"HEAD":"GET";let r=!1;const a=(s??"*").split("").map(c=>/\s/.test(c)&&!r?"":(c==='"'&&(r=!r),c)).join(""),{url:o,headers:l}=this.cloneRequestState();return o.searchParams.set("select",a),n&&l.append("Prefer",`count=${n}`),new _t({method:i,url:o,headers:l,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(s,{count:e,defaultToNull:t=!0}={}){var n;const i="POST",{url:r,headers:a}=this.cloneRequestState();if(e&&a.append("Prefer",`count=${e}`),t||a.append("Prefer","missing=default"),Array.isArray(s)){const o=s.reduce((l,c)=>l.concat(Object.keys(c)),[]);if(o.length>0){const l=[...new Set(o)].map(c=>`"${c}"`);r.searchParams.set("columns",l.join(","))}}return new _t({method:i,url:r,headers:a,schema:this.schema,body:s,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(s,{onConflict:e,ignoreDuplicates:t=!1,count:n,defaultToNull:i=!0}={}){var r;const a="POST",{url:o,headers:l}=this.cloneRequestState();if(l.append("Prefer",`resolution=${t?"ignore":"merge"}-duplicates`),e!==void 0&&o.searchParams.set("on_conflict",e),n&&l.append("Prefer",`count=${n}`),i||l.append("Prefer","missing=default"),Array.isArray(s)){const c=s.reduce((p,u)=>p.concat(Object.keys(u)),[]);if(c.length>0){const p=[...new Set(c)].map(u=>`"${u}"`);o.searchParams.set("columns",p.join(","))}}return new _t({method:a,url:o,headers:l,schema:this.schema,body:s,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(s,{count:e}={}){var t;const n="PATCH",{url:i,headers:r}=this.cloneRequestState();return e&&r.append("Prefer",`count=${e}`),new _t({method:n,url:i,headers:r,schema:this.schema,body:s,fetch:(t=this.fetch)!==null&&t!==void 0?t:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:s}={}){var e;const t="DELETE",{url:n,headers:i}=this.cloneRequestState();return s&&i.append("Prefer",`count=${s}`),new _t({method:t,url:n,headers:i,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}},po=class Er{constructor(e,{headers:t={},schema:n,fetch:i,timeout:r,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(t),this.schemaName=n,this.urlLengthLimit=a;const l=i??globalThis.fetch;r!==void 0&&r>0?this.fetch=(c,p)=>{const u=new AbortController,g=setTimeout(()=>u.abort(),r),f=p==null?void 0:p.signal;if(f){if(f.aborted)return clearTimeout(g),l(c,p);const h=()=>{clearTimeout(g),u.abort()};return f.addEventListener("abort",h,{once:!0}),l(c,kt(kt({},p),{},{signal:u.signal})).finally(()=>{clearTimeout(g),f.removeEventListener("abort",h)})}return l(c,kt(kt({},p),{},{signal:u.signal})).finally(()=>clearTimeout(g))}:this.fetch=l,this.retry=o}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new ho(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new Er(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,t={},{head:n=!1,get:i=!1,count:r}={}){var a;let o;const l=new URL(`${this.url}/rpc/${e}`);let c;const p=f=>f!==null&&typeof f=="object"&&(!Array.isArray(f)||f.some(p)),u=n&&Object.values(t).some(p);u?(o="POST",c=t):n||i?(o=n?"HEAD":"GET",Object.entries(t).filter(([f,h])=>h!==void 0).map(([f,h])=>[f,Array.isArray(h)?`{${h.join(",")}}`:`${h}`]).forEach(([f,h])=>{l.searchParams.append(f,h)})):(o="POST",c=t);const g=new Headers(this.headers);return u?g.set("Prefer",r?`count=${r},return=minimal`:"return=minimal"):r&&g.set("Prefer",`count=${r}`),new _t({method:o,url:l,headers:g,schema:this.schemaName,body:c,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class fo{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const t=globalThis;if(typeof globalThis<"u"&&typeof t.WebSocket<"u")return{type:"native",wsConstructor:t.WebSocket};const n=typeof global<"u"?global:void 0;if(n&&typeof n.WebSocket<"u")return{type:"native",wsConstructor:n.WebSocket};if(typeof globalThis<"u"&&typeof t.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&t.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const i=globalThis.process;if(i){const r=i.versions;if(r&&r.node)return{type:"unsupported",error:"Node.js detected but native WebSocket not found.",workaround:"Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option."}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let t=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(t+=`

Suggested solution: ${e.workaround}`),new Error(t)}static isWebSocketSupported(){try{return this.detectEnvironment().type==="native"}catch{return!1}}}const go="2.112.3",mo=`realtime-js/${go}`,bo="1.0.0",Ar="2.0.0",yo=Ar,vo=1e4,wo=100,Be={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},$r={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},Tn={connecting:"connecting",closing:"closing",closed:"closed"};class _o{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return t(this._binaryEncodeUserBroadcastPush(e));let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}_binaryEncodeUserBroadcastPush(e){var t;return this._isArrayBuffer((t=e.payload)===null||t===void 0?void 0:t.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var t,n;const i=(n=(t=e.payload)===null||t===void 0?void 0:t.payload)!==null&&n!==void 0?n:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,i)}_encodeJsonUserBroadcastPush(e){var t,n;const i=(n=(t=e.payload)===null||t===void 0?void 0:t.payload)!==null&&n!==void 0?n:{},a=new TextEncoder().encode(JSON.stringify(i)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,a)}_encodeUserBroadcastPush(e,t,n){var i,r;const a=new TextEncoder,o=a.encode(e.topic),l=a.encode((i=e.ref)!==null&&i!==void 0?i:""),c=a.encode((r=e.join_ref)!==null&&r!==void 0?r:""),p=a.encode(e.payload.event),u=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},g=a.encode(Object.keys(u).length===0?"":JSON.stringify(u));if(c.length>255)throw new Error(`joinRef length ${c.length} exceeds maximum of 255`);if(l.length>255)throw new Error(`ref length ${l.length} exceeds maximum of 255`);if(o.length>255)throw new Error(`topic length ${o.length} exceeds maximum of 255`);if(p.length>255)throw new Error(`userEvent length ${p.length} exceeds maximum of 255`);if(g.length>255)throw new Error(`metadata length ${g.length} exceeds maximum of 255`);const f=this.USER_BROADCAST_PUSH_META_LENGTH+c.length+l.length+o.length+p.length+g.length,h=new ArrayBuffer(this.HEADER_LENGTH+f),b=new DataView(h),y=new Uint8Array(h);let v=0;b.setUint8(v++,this.KINDS.userBroadcastPush),b.setUint8(v++,c.length),b.setUint8(v++,l.length),b.setUint8(v++,o.length),b.setUint8(v++,p.length),b.setUint8(v++,g.length),b.setUint8(v++,t),y.set(c,v),v+=c.length,y.set(l,v),v+=l.length,y.set(o,v),v+=o.length,y.set(p,v),v+=p.length,y.set(g,v),v+=g.length;var k=new Uint8Array(h.byteLength+n.byteLength);return k.set(new Uint8Array(h),0),k.set(new Uint8Array(n),h.byteLength),k.buffer}decode(e,t){if(this._isArrayBuffer(e)){let n=this._binaryDecode(e);return t(n)}if(typeof e=="string"){const n=JSON.parse(e),[i,r,a,o,l]=n;return t({join_ref:i,ref:r,topic:a,event:o,payload:l})}return t({})}_binaryDecode(e){const t=new DataView(e),n=t.getUint8(0),i=new TextDecoder;switch(n){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,t,i)}}_decodeUserBroadcast(e,t,n){const i=t.getUint8(1),r=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4);let l=this.HEADER_LENGTH+4;const c=n.decode(e.slice(l,l+i));l=l+i;const p=n.decode(e.slice(l,l+r));l=l+r;const u=n.decode(e.slice(l,l+a));l=l+a;const g=e.slice(l,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(n.decode(g)):g,h={type:this.BROADCAST_EVENT,event:p,payload:f};return a>0&&(h.meta=JSON.parse(u)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:h}}_isArrayBuffer(e){var t;return e instanceof ArrayBuffer||((t=e==null?void 0:e.constructor)===null||t===void 0?void 0:t.name)==="ArrayBuffer"}_pick(e,t){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([n])=>t.includes(n)))}}var j;(function(s){s.abstime="abstime",s.bool="bool",s.date="date",s.daterange="daterange",s.float4="float4",s.float8="float8",s.int2="int2",s.int4="int4",s.int4range="int4range",s.int8="int8",s.int8range="int8range",s.json="json",s.jsonb="jsonb",s.money="money",s.numeric="numeric",s.oid="oid",s.reltime="reltime",s.text="text",s.time="time",s.timestamp="timestamp",s.timestamptz="timestamptz",s.timetz="timetz",s.tsrange="tsrange",s.tstzrange="tstzrange"})(j||(j={}));const Fi=(s,e,t={})=>{var n;const i=(n=t.skipTypes)!==null&&n!==void 0?n:[];return e?Object.keys(e).reduce((r,a)=>(r[a]=xo(a,s,e,i),r),{}):{}},xo=(s,e,t,n)=>{const i=e.find(o=>o.name===s),r=i==null?void 0:i.type,a=t[s];return r&&!n.includes(r)?Tr(r,a):On(a)},Tr=(s,e)=>{if(s.charAt(0)==="_"){const t=s.slice(1,s.length);return Ao(e,t)}switch(s){case j.bool:return ko(e);case j.float4:case j.float8:case j.int2:case j.int4:case j.int8:case j.numeric:case j.oid:return So(e);case j.json:case j.jsonb:return Eo(e);case j.timestamp:return $o(e);case j.abstime:case j.date:case j.daterange:case j.int4range:case j.int8range:case j.money:case j.reltime:case j.text:case j.time:case j.timestamptz:case j.timetz:case j.tsrange:case j.tstzrange:return On(e);default:return On(e)}},On=s=>s,ko=s=>{switch(s){case"t":return!0;case"f":return!1;default:return s}},So=s=>{if(typeof s=="string"){const e=parseFloat(s);if(!Number.isNaN(e))return e}return s},Eo=s=>{if(typeof s=="string")try{return JSON.parse(s)}catch{return s}return s},Ao=(s,e)=>{if(typeof s!="string")return s;const t=s.length-1,n=s[t];if(s[0]==="{"&&n==="}"){let r;const a=s.slice(1,t);try{r=JSON.parse("["+a+"]")}catch{r=a?a.split(","):[]}return r.map(o=>Tr(e,o))}return s},$o=s=>typeof s=="string"?s.replace(" ","T"):s,Or=s=>{const e=new URL(s);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var St=s=>typeof s=="function"?s:function(){return s},To=typeof self<"u"?self:null,xt=typeof window<"u"?window:null,be=To||xt||globalThis,Oo="2.0.0",Co=1e4,Ro=1e3,Io=100,ye={connecting:0,open:1,closing:2,closed:3},Q={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},$e={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},Cn={longpoll:"longpoll",websocket:"websocket"},Po={complete:4},Rn="base64url.bearer.phx.",_s=class{constructor(s,e,t,n){this.channel=s,this.event=e,this.payload=t||function(){return{}},this.receivedResp=null,this.timeout=n,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(s){this.timeout=s,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(s,e){return this.hasReceived(s)&&e(this.receivedResp.response),this.recHooks.push({status:s,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:s,response:e,_ref:t}){this.recHooks.filter(n=>n.status===s).forEach(n=>n.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,s=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=s,this.matchReceive(s)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(s){return this.receivedResp&&this.receivedResp.status===s}trigger(s,e){this.channel.trigger(this.refEvent,{status:s,response:e})}},Cr=class{constructor(s,e){this.callback=s,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},Do=class{constructor(s,e,t){this.state=Q.closed,this.topic=s,this.params=St(e||{}),this.socket=t,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new _s(this,$e.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Cr(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=Q.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(n=>n.send()),this.pushBuffer=[]}),this.joinPush.receive("error",n=>{this.state=Q.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,n),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=Q.closed,this.socket.remove(this)}),this.onError(n=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,n),this.isJoining()&&this.joinPush.reset(),this.state=Q.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new _s(this,$e.leave,St({}),this.timeout).send(),this.state=Q.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on($e.reply,(n,i)=>{this.trigger(this.replyEventName(i),n)})}join(s=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=s,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(s=>s.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=Q.closed,this.bindings=[]}onClose(s){this.on($e.close,s)}onError(s){return this.on($e.error,e=>s(e))}on(s,e){let t=this.bindingRef++;return this.bindings.push({event:s,ref:t,callback:e}),t}off(s,e){this.bindings=this.bindings.filter(t=>!(t.event===s&&(typeof e>"u"||e===t.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(s,e,t=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${s}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let n=new _s(this,s,function(){return e},t);return this.canPush()?n.send():(n.startTimeout(),this.pushBuffer.push(n)),n}leave(s=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=Q.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger($e.close,"leave")},t=new _s(this,$e.leave,St({}),s);return t.receive("ok",()=>e()).receive("timeout",()=>e()),t.send(),this.canPush()||t.trigger("ok",{}),t}onMessage(s,e,t){return e}filterBindings(s,e,t){return!0}isMember(s,e,t,n){return this.topic!==s?!1:n&&n!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:s,event:e,payload:t,joinRef:n}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(s=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=Q.joining,this.joinPush.resend(s))}trigger(s,e,t,n){let i=this.onMessage(s,e,t,n);if(e&&!i)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let r=this.bindings.filter(a=>a.event===s&&this.filterBindings(a,e,t));for(let a=0;a<r.length;a++)r[a].callback(i,t,n||this.joinRef())}replyEventName(s){return`chan_reply_${s}`}isClosed(){return this.state===Q.closed}isErrored(){return this.state===Q.errored}isJoined(){return this.state===Q.joined}isJoining(){return this.state===Q.joining}isLeaving(){return this.state===Q.leaving}},js=class{static request(s,e,t,n,i,r,a){if(be.XDomainRequest){let o=new be.XDomainRequest;return this.xdomainRequest(o,s,e,n,i,r,a)}else if(be.XMLHttpRequest){let o=new be.XMLHttpRequest;return this.xhrRequest(o,s,e,t,n,i,r,a)}else{if(be.fetch&&be.AbortController)return this.fetchRequest(s,e,t,n,i,r,a);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(s,e,t,n,i,r,a){let o={method:s,headers:t,body:n},l=null;return i&&(l=new AbortController,setTimeout(()=>l.abort(),i),o.signal=l.signal),be.fetch(e,o).then(c=>c.text()).then(c=>this.parseJSON(c)).then(c=>a&&a(c)).catch(c=>{c.name==="AbortError"&&r?r():a&&a(null)}),l}static xdomainRequest(s,e,t,n,i,r,a){return s.timeout=i,s.open(e,t),s.onload=()=>{let o=this.parseJSON(s.responseText);a&&a(o)},r&&(s.ontimeout=r),s.onprogress=()=>{},s.send(n),s}static xhrRequest(s,e,t,n,i,r,a,o){s.open(e,t,!0),s.timeout=r;for(let[l,c]of Object.entries(n))s.setRequestHeader(l,c);return s.onerror=()=>o&&o(null),s.onreadystatechange=()=>{if(s.readyState===Po.complete&&o){let l=this.parseJSON(s.responseText);o(l)}},a&&(s.ontimeout=a),s.send(i),s}static parseJSON(s){if(!s||s==="")return null;try{return JSON.parse(s)}catch{return console&&console.log("failed to parse JSON response",s),null}}static serialize(s,e){let t=[];for(var n in s){if(!Object.prototype.hasOwnProperty.call(s,n))continue;let i=e?`${e}[${n}]`:n,r=s[n];typeof r=="object"?t.push(this.serialize(r,i)):t.push(encodeURIComponent(i)+"="+encodeURIComponent(r))}return t.join("&")}static appendParams(s,e){if(Object.keys(e).length===0)return s;let t=s.match(/\?/)?"&":"?";return`${s}${t}${this.serialize(e)}`}},jo=s=>{let e="",t=new Uint8Array(s),n=t.byteLength;for(let i=0;i<n;i++)e+=String.fromCharCode(t[i]);return btoa(e)},gt=class{constructor(s,e){e&&e.length===2&&e[1].startsWith(Rn)&&(this.authToken=atob(e[1].slice(Rn.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(s),this.readyState=ye.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(s){return s.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+Cn.websocket),"$1/"+Cn.longpoll)}endpointURL(){return js.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(s,e,t){this.close(s,e,t),this.readyState=ye.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===ye.open||this.readyState===ye.connecting}poll(){const s={Accept:"application/json"};this.authToken&&(s["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",s,null,()=>this.ontimeout(),e=>{if(e){var{status:t,token:n,messages:i}=e;if(t===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=n}else t=0;switch(t){case 200:i.forEach(r=>{setTimeout(()=>this.onmessage({data:r}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=ye.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${t}`)}})}send(s){typeof s!="string"&&(s=jo(s)),this.currentBatch?this.currentBatch.push(s):this.awaitingBatchAck?this.batchBuffer.push(s):(this.currentBatch=[s],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(s,e=0){this.awaitingBatchAck=!0;const t=e+Io,n=s.slice(e,t);this.ajax("POST",{"Content-Type":"application/x-ndjson"},n.join(`
`),()=>this.onerror("timeout"),i=>{!i||i.status!==200?(this.awaitingBatchAck=!1,this.onerror(i&&i.status),this.closeAndRetry(1011,"internal server error",!1)):t<s.length?this.batchSend(s,t):this.batchBuffer.length>0?(this.batchSend(this.batchBuffer),this.batchBuffer=[]):this.awaitingBatchAck=!1})}close(s,e,t){for(let i of this.reqs)i.abort();this.readyState=ye.closed;let n=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:s,reason:e,wasClean:t});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",n)):this.onclose(n)}ajax(s,e,t,n,i){let r,a=()=>{this.reqs.delete(r),n()};r=js.request(s,this.endpointURL(),e,t,this.timeout,a,o=>{this.reqs.delete(r),this.isActive()&&i(o)}),this.reqs.add(r)}},Fo=class Lt{constructor(e,t={}){let n=t.events||{state:"presence_state",diff:"presence_diff"};this.state=Object.create(null),this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(n.state,i=>{let{onJoin:r,onLeave:a,onSync:o}=this.caller;this.joinRef=this.channel.joinRef(),this.state=Lt.syncState(this.state,i,r,a),this.pendingDiffs.forEach(l=>{this.state=Lt.syncDiff(this.state,l,r,a)}),this.pendingDiffs=[],o()}),this.channel.on(n.diff,i=>{let{onJoin:r,onLeave:a,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(i):(this.state=Lt.syncDiff(this.state,i,r,a),o())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return Lt.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,t,n,i){let r=this.toNullProtoObj(this.clone(e));t=this.toNullProtoObj(t);let a=Object.create(null),o=Object.create(null);return this.map(r,(l,c)=>{t[l]||(o[l]=c)}),this.map(t,(l,c)=>{let p=r[l];if(p){let u=c.metas.map(b=>b.phx_ref),g=p.metas.map(b=>b.phx_ref),f=c.metas.filter(b=>g.indexOf(b.phx_ref)<0),h=p.metas.filter(b=>u.indexOf(b.phx_ref)<0);f.length>0&&(a[l]=c,a[l].metas=f),h.length>0&&(o[l]=this.clone(p),o[l].metas=h)}else a[l]=c}),this.syncDiff(r,{joins:a,leaves:o},n,i)}static syncDiff(e,t,n,i){e=this.toNullProtoObj(e);let{joins:r,leaves:a}=this.clone(t);return n||(n=function(){}),i||(i=function(){}),this.map(r,(o,l)=>{let c=e[o];if(e[o]=this.clone(l),c){let p=e[o].metas.map(g=>g.phx_ref),u=c.metas.filter(g=>p.indexOf(g.phx_ref)<0);e[o].metas.unshift(...u)}n(o,c,l)}),this.map(a,(o,l)=>{let c=e[o];if(!c)return;let p=l.metas.map(u=>u.phx_ref);c.metas=c.metas.filter(u=>p.indexOf(u.phx_ref)<0),i(o,c,l),c.metas.length===0&&delete e[o]}),e}static list(e,t){return t||(t=function(n,i){return i}),this.map(e,(n,i)=>t(n,i))}static map(e,t){return Object.getOwnPropertyNames(e).map(n=>t(n,e[n]))}static toNullProtoObj(e){if(Object.getPrototypeOf(e)===null)return e;let t=Object.create(null);return Object.getOwnPropertyNames(e).forEach(n=>{t[n]=e[n]}),t}static clone(e){return JSON.parse(JSON.stringify(e))}},xs={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(s,e){if(s.payload.constructor===ArrayBuffer)return e(this.binaryEncode(s));{let t=[s.join_ref,s.ref,s.topic,s.event,s.payload];return e(JSON.stringify(t))}},decode(s,e){if(s.constructor===ArrayBuffer)return e(this.binaryDecode(s));{let[t,n,i,r,a]=JSON.parse(s);return e({join_ref:t,ref:n,topic:i,event:r,payload:a})}},binaryEncode(s){let{join_ref:e,ref:t,event:n,topic:i,payload:r}=s,a=new TextEncoder,o=a.encode(e),l=a.encode(t),c=a.encode(i),p=a.encode(n);this.assertFieldSize(o.byteLength,"join_ref"),this.assertFieldSize(l.byteLength,"ref"),this.assertFieldSize(c.byteLength,"topic"),this.assertFieldSize(p.byteLength,"event");let u=this.META_LENGTH+o.byteLength+l.byteLength+c.byteLength+p.byteLength,g=new ArrayBuffer(this.HEADER_LENGTH+u),f=new Uint8Array(g),h=new DataView(g),b=0;h.setUint8(b++,this.KINDS.push),h.setUint8(b++,o.byteLength),h.setUint8(b++,l.byteLength),h.setUint8(b++,c.byteLength),h.setUint8(b++,p.byteLength),f.set(o,b),b+=o.byteLength,f.set(l,b),b+=l.byteLength,f.set(c,b),b+=c.byteLength,f.set(p,b),b+=p.byteLength;var y=new Uint8Array(g.byteLength+r.byteLength);return y.set(f,0),y.set(new Uint8Array(r),g.byteLength),y.buffer},assertFieldSize(s,e){if(s>255)throw new Error(`unable to convert ${e} to binary: must be less than or equal to 255 bytes, but is ${s} bytes`)},binaryDecode(s){let e=new DataView(s),t=e.getUint8(0),n=new TextDecoder;switch(t){case this.KINDS.push:return this.decodePush(s,e,n);case this.KINDS.reply:return this.decodeReply(s,e,n);case this.KINDS.broadcast:return this.decodeBroadcast(s,e,n)}},decodePush(s,e,t){let n=e.getUint8(1),i=e.getUint8(2),r=e.getUint8(3),a=this.HEADER_LENGTH+this.META_LENGTH-1,o=t.decode(s.slice(a,a+n));a=a+n;let l=t.decode(s.slice(a,a+i));a=a+i;let c=t.decode(s.slice(a,a+r));a=a+r;let p=s.slice(a,s.byteLength);return{join_ref:o,ref:null,topic:l,event:c,payload:p}},decodeReply(s,e,t){let n=e.getUint8(1),i=e.getUint8(2),r=e.getUint8(3),a=e.getUint8(4),o=this.HEADER_LENGTH+this.META_LENGTH,l=t.decode(s.slice(o,o+n));o=o+n;let c=t.decode(s.slice(o,o+i));o=o+i;let p=t.decode(s.slice(o,o+r));o=o+r;let u=t.decode(s.slice(o,o+a));o=o+a;let g=s.slice(o,s.byteLength),f={status:u,response:g};return{join_ref:l,ref:c,topic:p,event:$e.reply,payload:f}},decodeBroadcast(s,e,t){let n=e.getUint8(1),i=e.getUint8(2),r=this.HEADER_LENGTH+2,a=t.decode(s.slice(r,r+n));r=r+n;let o=t.decode(s.slice(r,r+i));r=r+i;let l=s.slice(r,s.byteLength);return{join_ref:null,ref:null,topic:a,event:o,payload:l}}},Mo=class{constructor(s,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||Co,this.transport=e.transport||be.WebSocket||gt,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let t=null;try{t=be&&be.sessionStorage}catch{}this.sessionStore=e.sessionStorage||t,this.establishedConnections=0,this.defaultEncoder=xs.encode.bind(xs),this.defaultDecoder=xs.decode.bind(xs),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==gt?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let n=null;xt&&xt.addEventListener&&(xt.addEventListener("pagehide",i=>{this.conn&&(this.disconnect(),n=this.connectClock)}),xt.addEventListener("pageshow",i=>{n===this.connectClock&&(n=null,this.connect())}),xt.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=i=>e.rejoinAfterMs?e.rejoinAfterMs(i):[1e3,2e3,5e3][i-1]||1e4,this.reconnectAfterMs=i=>e.reconnectAfterMs?e.reconnectAfterMs(i):[10,50,100,150,200,250,500,1e3,2e3][i-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(i,r,a)=>{console.log(`${i}: ${r}`,a)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=St(e.params||{}),this.endPoint=`${s}/${Cn.websocket}`,this.vsn=e.vsn||Oo,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Cr(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken&&St(e.authToken)}getLongPollTransport(){return gt}replaceTransport(s){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=s}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let s=js.appendParams(js.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return s.charAt(0)!=="/"?s:s.charAt(1)==="/"?`${this.protocol()}:${s}`:`${this.protocol()}://${location.host}${s}`}disconnect(s,e,t){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,s&&s()},e,t)}connect(s){s&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=St(s)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==gt?this.connectWithFallback(gt,this.longPollFallbackMs):this.transportConnect())}log(s,e,t){this.logger&&this.logger(s,e,t)}hasLogger(){return this.logger!==null}onOpen(s){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,s]),e}onClose(s){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,s]),e}onError(s){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,s]),e}onMessage(s){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,s]),e}onHeartbeat(s){this.heartbeatCallback=s}ping(s){if(!this.isConnected())return!1;let e=this.makeRef(),t=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let n=this.onMessage(i=>{i.ref===e&&(this.off([n]),s(Date.now()-t))});return!0}transportName(s){switch(s){case gt:return"LongPoll";default:return s.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let s;this.authToken&&(s=["phoenix",`${Rn}${btoa(this.authToken()).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),s),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(s){return this.sessionStore&&this.sessionStore.getItem(s)}storeSession(s,e){this.sessionStore&&this.sessionStore.setItem(s,e)}connectWithFallback(s,e=2500){clearTimeout(this.fallbackTimer);let t=!1,n=!0,i,r,a=this.transportName(s),o=l=>{this.log("transport",`falling back to ${a}...`,l),this.off([i,r]),n=!1,this.replaceTransport(s),this.transportConnect()};if(this.getSession(`phx:fallback:${a}`))return o("memorized");this.fallbackTimer=setTimeout(o,e),r=this.onError(l=>{this.log("transport","error",l),n&&!t&&(clearTimeout(this.fallbackTimer),o(l))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(t=!0,!n){let l=this.transportName(s);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${l}`,"true"),this.log("transport",`established ${l} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(o,e),this.ping(l=>{this.log("transport","connected to primary after",l),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(s){this.log("error","error in heartbeat callback",s)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Ro,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(s,e,t){if(!this.conn)return s&&s();const n=this.conn;this.waitForBufferDone(n,()=>{e?n.close(e,t||""):n.close(),this.waitForSocketClosed(n,()=>{this.conn===n&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),s&&s()})})}waitForBufferDone(s,e,t=1){if(t===5||!s.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(s,e,t+1)},150*t)}waitForSocketClosed(s,e,t=1){if(t===5||s.readyState===ye.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(s,e,t+1)},150*t)}onConnClose(s){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",s),this.triggerChanError(s),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",s)}onConnError(s){this.hasLogger()&&this.log("transport","error",s);let e=this.transport,t=this.establishedConnections;this.triggerStateCallbacks("error",s,e,t),(e===this.transport||t>0)&&this.triggerChanError(s)}triggerChanError(s){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger($e.error,s)})}connectionState(){switch(this.conn&&this.conn.readyState){case ye.connecting:return"connecting";case ye.open:return"open";case ye.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(s){this.off(s.stateChangeRefs),this.channels=this.channels.filter(e=>e!==s)}off(s){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([t])=>s.indexOf(t)===-1)}channel(s,e={}){let t=new Do(s,e,this);return this.channels.push(t),t}push(s){if(this.hasLogger()){let{topic:e,event:t,payload:n,ref:i,join_ref:r}=s;this.log("push",`${e} ${t} (${r}, ${i})`,n)}this.isConnected()?this.encode(s,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(s,e=>this.conn.send(e)))}makeRef(){let s=this.ref+1;return s===this.ref?this.ref=0:this.ref=s,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(s){this.log("error","error in heartbeat callback",s)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(s){this.log("error","error in heartbeat callback",s)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(s=>s()),this.sendBuffer=[])}onConnMessage(s){this.decode(s.data,e=>{let{topic:t,event:n,payload:i,ref:r,join_ref:a}=e;if(r&&r===this.pendingHeartbeatRef){const o=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(i.status==="ok"?"ok":"error",o)}catch(l){this.log("error","error in heartbeat callback",l)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${i.status||""} ${t} ${n} ${r&&"("+r+")"||""}`.trim(),i);for(let o=0;o<this.channels.length;o++){const l=this.channels[o];l.isMember(t,n,i,a)&&l.trigger(n,i,r,a)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(s,...e){try{this.stateChangeCallbacks[s].forEach(([t,n])=>{try{n(...e)}catch(i){this.log("error",`error in ${s} callback`,i)}})}catch(t){this.log("error",`error triggering ${s} callbacks`,t)}}leaveOpenTopic(s){let e=this.channels.find(t=>t.topic===s&&(t.isJoined()||t.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${s}"`),e.leave())}};class qt{constructor(e,t){const n=Lo(t);this.presence=new Fo(e.getChannel(),n),this.presence.onJoin((i,r,a)=>{const o=qt.onJoinPayload(i,r,a);e.getChannel().trigger("presence",o)}),this.presence.onLeave((i,r,a)=>{const o=qt.onLeavePayload(i,r,a);e.getChannel().trigger("presence",o)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return qt.transformState(this.presence.state)}static transformState(e){return e=No(e),Object.getOwnPropertyNames(e).reduce((t,n)=>{const i=e[n];return t[n]=Cs(i),t},{})}static onJoinPayload(e,t,n){const i=Mi(t),r=Cs(n);return{event:"join",key:e,currentPresences:i,newPresences:r}}static onLeavePayload(e,t,n){const i=Mi(t),r=Cs(n);return{event:"leave",key:e,currentPresences:i,leftPresences:r}}}function Cs(s){return s.metas.map(e=>{const t=Object.getOwnPropertyDescriptors(e),n=Object.defineProperties({},t);return n.presence_ref=n.phx_ref,delete n.phx_ref,delete n.phx_ref_prev,n})}function No(s){return JSON.parse(JSON.stringify(s))}function Lo(s){return(s==null?void 0:s.events)&&{events:s.events}}function Mi(s){return s!=null&&s.metas?Cs(s):[]}var Ni;(function(s){s.SYNC="sync",s.JOIN="join",s.LEAVE="leave"})(Ni||(Ni={}));class Uo{get state(){return this.presenceAdapter.state}constructor(e,t){this.channel=e,this.presenceAdapter=new qt(this.channel.channelAdapter,t)}}function Bo(s){if(s instanceof Error)return s;if(typeof s=="string")return new Error(s);if(s&&typeof s=="object"){const e=s;if(typeof e.code=="number"){const t=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${t}`,{cause:s})}return new Error("channel error: transport failure",{cause:s})}return new Error("channel error: connection lost")}class zo{constructor(e,t,n){const i=Ho(n);this.channel=e.getSocket().channel(t,i),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,t){return this.channel.on(e,t)}off(e,t){this.channel.off(e,t)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,t,n){let i;try{i=this.channel.push(e,t,n)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>wo){const r=this.channel.pushBuffer.shift();r.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${r.event}`,r.payload())}return i}updateJoinPayload(e){const t=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},t),e)}canPush(){return this.socket.isConnected()&&this.state===Be.joined}isJoined(){return this.state===Be.joined}isJoining(){return this.state===Be.joining}isClosed(){return this.state===Be.closed}isLeaving(){return this.state===Be.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function Ho(s){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},s.config)}}const qo=/[,()"\\]/,Wo=s=>qo.test(s)||s!==s.trim(),Ko=s=>`"${s.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`,Li=s=>{const e=s===null?"null":String(s);return Wo(e)?Ko(e):e},Vo=s=>s===null?"null":String(s),Go=(s,e)=>{if(s==="in"){const t=Array.isArray(e)?e:[e];if(t.length===0)throw new Error("Realtime `in` filter requires at least one value.");return`in.(${Array.from(new Set(t)).map(i=>Li(i)).join(",")})`}return s==="is"?`is.${Vo(e)}`:`${s}.${Li(e)}`};class Jo{constructor(){this.filters=[]}add(e,t,n,i=!1){const r=i?"not.":"";return this.filters.push(`${e}=${r}${Go(t,n)}`),this}eq(e,t){return this.add(e,"eq",t)}neq(e,t){return this.add(e,"neq",t)}gt(e,t){return this.add(e,"gt",t)}gte(e,t){return this.add(e,"gte",t)}lt(e,t){return this.add(e,"lt",t)}lte(e,t){return this.add(e,"lte",t)}in(e,t){return this.add(e,"in",t)}like(e,t){return this.add(e,"like",t)}ilike(e,t){return this.add(e,"ilike",t)}match(e,t){return this.add(e,"match",t)}imatch(e,t){return this.add(e,"imatch",t)}is(e,t){return this.add(e,"is",t)}isDistinct(e,t){return this.add(e,"isdistinct",t)}not(e,t,n){return this.add(e,t,n,!0)}build(){return this.filters.join(",")}toString(){return this.build()}}var Ui;(function(s){s.ALL="*",s.INSERT="INSERT",s.UPDATE="UPDATE",s.DELETE="DELETE"})(Ui||(Ui={}));var et;(function(s){s.BROADCAST="broadcast",s.PRESENCE="presence",s.POSTGRES_CHANGES="postgres_changes",s.SYSTEM="system"})(et||(et={}));var Te;(function(s){s.SUBSCRIBED="SUBSCRIBED",s.TIMED_OUT="TIMED_OUT",s.CLOSED="CLOSED",s.CHANNEL_ERROR="CHANNEL_ERROR"})(Te||(Te={}));class Oe{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,t={config:{}},n){var i,r;if(this.topic=e,this.params=t,this.socket=n,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config),this.channelAdapter=new zo(this.socket.socketAdapter,e,this.params),this.presence=new Uo(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=Or(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((r=(i=this.params.config)===null||i===void 0?void 0:i.broadcast)===null||r===void 0)&&r.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,t=this.timeout){var n,i,r;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:a,presence:o,private:l}}=this.params,c=(i=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(f=>f.filter))!==null&&i!==void 0?i:[],p=!!this.bindings[et.PRESENCE]&&this.bindings[et.PRESENCE].length>0||((r=this.params.config.presence)===null||r===void 0?void 0:r.enabled)===!0,u={},g={broadcast:a,presence:Object.assign(Object.assign({},o),{enabled:p}),postgres_changes:c,private:l};this.socket.accessTokenValue&&(u.access_token=this.socket.accessTokenValue),this._onError(f=>{e==null||e(Te.CHANNEL_ERROR,Bo(f))}),this._onClose(()=>e==null?void 0:e(Te.CLOSED)),this.updateJoinPayload(Object.assign({config:g},u)),this._updateFilterMessage(),this.channelAdapter.subscribe(t).receive("ok",async({postgres_changes:f})=>{if(this.socket._isManualToken()||this.socket.setAuth(),f===void 0){e==null||e(Te.SUBSCRIBED);return}this._updatePostgresBindings(f,e)}).receive("error",f=>{this.state=Be.errored;const h=Object.values(f).join(", ")||"error";e==null||e(Te.CHANNEL_ERROR,new Error(h,{cause:f}))}).receive("timeout",()=>{e==null||e(Te.TIMED_OUT)})}return this}_updatePostgresBindings(e,t){var n;const i=this.bindings.postgres_changes,r=(n=i==null?void 0:i.length)!==null&&n!==void 0?n:0,a=[];for(let o=0;o<r;o++){const l=i[o],{filter:{event:c,schema:p,table:u,filter:g}}=l,f=e&&e[o];if(f&&f.event===c&&Oe.isFilterValueEqual(f.schema,p)&&Oe.isFilterValueEqual(f.table,u)&&Oe.isFilterValueEqual(f.filter,g))a.push(Object.assign(Object.assign({},l),{id:f.id}));else{this.unsubscribe(),this.state=Be.errored,t==null||t(Te.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=a,this.state!=Be.errored&&t&&t(Te.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:"presence",event:"track",payload:e},t)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,t,n){const i=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),r=e===et.PRESENCE||e===et.POSTGRES_CHANGES;if(i&&r)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,t,n)}async httpSend(e,t,n={}){var i;if(t==null)return Promise.reject(new Error("Payload is required for httpSend()"));const r=t instanceof ArrayBuffer||ArrayBuffer.isView(t),a={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":r?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(a.Authorization=`Bearer ${this.socket.accessTokenValue}`);const o=new URL(this.broadcastEndpointURL);o.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&o.searchParams.set("private","true");const l={method:"POST",headers:a,body:r?t:JSON.stringify(t)},c=await this._fetchWithTimeout(o.toString(),l,(i=n.timeout)!==null&&i!==void 0?i:this.timeout);if(c.status===202)return{success:!0};if(c.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let p=c.statusText;try{const u=await c.json();p=u.error||u.message||p}catch{}return Promise.reject(new Error(p))}async send(e,t={}){var n,i;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:r,payload:a}=e,o={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(o.Authorization=`Bearer ${this.socket.accessTokenValue}`);const l={method:"POST",headers:o,body:JSON.stringify({messages:[{topic:this.subTopic,event:r,payload:a,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(n=t.timeout)!==null&&n!==void 0?n:this.timeout);return await((i=c.body)===null||i===void 0?void 0:i.cancel()),c.ok?"ok":"error"}catch(c){return c instanceof Error&&c.name==="AbortError"?"timed out":"error"}}else return new Promise(r=>{var a,o,l;const c=this.channelAdapter.push(e.type,e,t.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(o=(a=this.params)===null||a===void 0?void 0:a.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&r("ok"),c.receive("ok",()=>r("ok")),c.receive("error",()=>r("error")),c.receive("timeout",()=>r("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(t=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>t("ok")).receive("timeout",()=>t("timed out")).receive("error",()=>t("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,t,n){const i=new AbortController,r=setTimeout(()=>i.abort(),n),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:i.signal}));return clearTimeout(r),a}_on(e,t,n){var i;const r=e.toLocaleLowerCase(),a=t==null?void 0:t.filter;if((a instanceof Jo||typeof a=="object"&&a!==null&&typeof a.build=="function")&&(t=Object.assign(Object.assign({},t),{filter:a.build()})),r===et.POSTGRES_CHANGES&&((i=this.bindings[r])===null||i===void 0?void 0:i.find(p=>Oe.isSamePostgresFilter(p.filter,t))))return this.socket.log("error",`duplicate \`postgres_changes\` binding for ${this.topic} ignored`,t),this;const o=this.channelAdapter.on(e,n),l={type:r,filter:t,callback:n,ref:o};return this.bindings[r]?this.bindings[r].push(l):this.bindings[r]=[l],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,t,n)=>{var i,r,a,o,l,c,p;const u=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(u,n))return!1;const g=(i=this.bindings[u])===null||i===void 0?void 0:i.find(f=>f.ref===e.ref);if(!g)return!0;if(["broadcast","presence","postgres_changes"].includes(u))if("id"in g){const f=g.id,h=(r=g.filter)===null||r===void 0?void 0:r.event;return f&&((a=t.ids)===null||a===void 0?void 0:a.includes(f))&&(h==="*"||(h==null?void 0:h.toLocaleLowerCase())===((o=t.data)===null||o===void 0?void 0:o.type.toLocaleLowerCase()))}else{const f=(c=(l=g==null?void 0:g.filter)===null||l===void 0?void 0:l.event)===null||c===void 0?void 0:c.toLocaleLowerCase();return f==="*"||f===((p=t==null?void 0:t.event)===null||p===void 0?void 0:p.toLocaleLowerCase())}else return g.type.toLocaleLowerCase()===u})}_notThisChannelEvent(e,t){const{close:n,error:i,leave:r,join:a}=$r;return t&&[n,i,r,a].includes(e)&&t!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,t,n)=>{if(typeof t=="object"&&"ids"in t){const i=t.data,{schema:r,table:a,commit_timestamp:o,type:l,errors:c}=i;return Object.assign(Object.assign({},{schema:r,table:a,commit_timestamp:o,eventType:l,new:{},old:{},errors:c}),this._getPayloadRecords(i))}return t})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const t in e.bindings)for(const n of e.bindings[t])this._on(n.type,n.filter,n.callback)}static isFilterValueEqual(e,t){return(e??void 0)===(t??void 0)}static isSamePostgresFilter(e,t){var n,i,r,a;const o=(i=(n=e==null?void 0:e.select)===null||n===void 0?void 0:n.join())!==null&&i!==void 0?i:void 0,l=(a=(r=t==null?void 0:t.select)===null||r===void 0?void 0:r.join())!==null&&a!==void 0?a:void 0;return(e==null?void 0:e.event)===(t==null?void 0:t.event)&&Oe.isFilterValueEqual(e==null?void 0:e.schema,t==null?void 0:t.schema)&&Oe.isFilterValueEqual(e==null?void 0:e.table,t==null?void 0:t.table)&&Oe.isFilterValueEqual(e==null?void 0:e.filter,t==null?void 0:t.filter)&&o===l}_getPayloadRecords(e){const t={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(t.new=Fi(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(t.old=Fi(e.columns,e.old_record)),t}}class Yo{constructor(e,t){this.socket=new Mo(e,t)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,t,n,i=1e4){return new Promise(r=>{setTimeout(()=>r("timeout"),i),this.socket.disconnect(()=>{e(),r("ok")},t,n)})}push(e){this.socket.push(e)}log(e,t,n){this.socket.log(e,t,n)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Tn.connecting}isDisconnecting(){return this.socket.connectionState()==Tn.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const Bi={HEARTBEAT_INTERVAL:25e3},Xo=[1e3,2e3,5e3,1e4],Qo=1e4;function Zo(){const s=new Map;return{get length(){return s.size},clear(){s.clear()},getItem(e){return s.has(e)?s.get(e):null},key(e){var t;return(t=Array.from(s.keys())[e])!==null&&t!==void 0?t:null},removeItem(e){s.delete(e)},setItem(e,t){s.set(e,String(t))}}}function el(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return Zo()}const tl=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class sl{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,t){var n;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new _o,this._manuallySetToken=!1,this._authPromise=null,this._authGeneration=0,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=r=>r?(...a)=>r(...a):(...a)=>fetch(...a),!(!((n=t==null?void 0:t.params)===null||n===void 0)&&n.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=t.params.apikey;const i=this._initializeOptions(t);this.socketAdapter=new Yo(e,i),this.httpEndpoint=Or(e),this.fetch=this._resolveFetch(t==null?void 0:t.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const t=e.message;throw new Error(`WebSocket not available: ${t}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,t){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,t)}getChannels(){return this.channels}async removeChannel(e){const t=await e.unsubscribe();return t==="ok"&&e.teardown(),t}async removeAllChannels(){const e=this.channels.map(async n=>{const i=await n.unsubscribe();return n.teardown(),i}),t=await Promise.all(e);return await this.disconnect(),t}log(e,t,n){this.socketAdapter.log(e,t,n)}connectionState(){return this.socketAdapter.connectionState()||Tn.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,t={config:{}}){const n=`realtime:${e}`,i=this.getChannels().find(r=>r.topic===n);if(i)return i;{const r=new Oe(`realtime:${e}`,t,this);return this._cancelPendingDisconnect(),this.channels.push(r),r}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){const t=++this._authGeneration,n=this._performAuth(e,t);t===this._authGeneration&&(this._authPromise=n);try{await n}finally{this._authPromise===n&&(this._authPromise=null)}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e,t){let n,i=!1;if(e)n=e,i=!0;else if(this.accessToken)try{n=await this.accessToken()}catch(r){this.log("error","Error fetching access token from callback",r),n=this.accessTokenValue}else n=this.accessTokenValue;t===this._authGeneration&&(this.accessToken?this._manuallySetToken=!1:i&&(this._manuallySetToken=!0),this.accessTokenValue!=n&&(this.accessTokenValue=n,this.channels.forEach(r=>{const a={access_token:n,version:mo};r.updateJoinPayload(a),r.joinedOnce&&r.channelAdapter.isJoined()&&r.channelAdapter.push($r.access_token,{access_token:n})})))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(t=>{this.log("error",`Error setting auth in ${e}`,t)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(t=>{this.log("error","error waiting for auth on connect",t)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(t,n)=>{t!=="disconnected"&&(t=="sent"&&this._setAuthSafely(),e&&e(t,n))}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=t=>{this.log("worker","worker error",t.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=t=>{t.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let t;if(e)t=e;else{const n=new Blob([tl],{type:"application/javascript"});t=URL.createObjectURL(n)}return t}_initializeOptions(e){var t,n,i,r,a,o,l,c,p,u,g,f;this.worker=(t=e==null?void 0:e.worker)!==null&&t!==void 0?t:!1,this.accessToken=(n=e==null?void 0:e.accessToken)!==null&&n!==void 0?n:null;const h={};h.timeout=(i=e==null?void 0:e.timeout)!==null&&i!==void 0?i:vo,h.heartbeatIntervalMs=(r=e==null?void 0:e.heartbeatIntervalMs)!==null&&r!==void 0?r:Bi.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(a=e==null?void 0:e.disconnectOnEmptyChannelsAfterMs)!==null&&a!==void 0?a:2*((o=e==null?void 0:e.heartbeatIntervalMs)!==null&&o!==void 0?o:Bi.HEARTBEAT_INTERVAL),h.transport=(l=e==null?void 0:e.transport)!==null&&l!==void 0?l:fo.getWebSocketConstructor(),h.params=e==null?void 0:e.params,h.logger=e==null?void 0:e.logger,h.heartbeatCallback=this._wrapHeartbeatCallback(e==null?void 0:e.heartbeatCallback),h.sessionStorage=(c=e==null?void 0:e.sessionStorage)!==null&&c!==void 0?c:el(),h.reconnectAfterMs=(p=e==null?void 0:e.reconnectAfterMs)!==null&&p!==void 0?p:(k=>Xo[k-1]||Qo);let b,y;const v=(u=e==null?void 0:e.vsn)!==null&&u!==void 0?u:yo;switch(v){case bo:b=(k,w)=>w(JSON.stringify(k)),y=(k,w)=>w(JSON.parse(k));break;case Ar:b=this.serializer.encode.bind(this.serializer),y=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${h.vsn}`)}if(h.vsn=v,h.encode=(g=e==null?void 0:e.encode)!==null&&g!==void 0?g:b,h.decode=(f=e==null?void 0:e.decode)!==null&&f!==void 0?f:y,h.beforeReconnect=this._reconnectAuth.bind(this),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,h.params=Object.assign(Object.assign({},h.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl,h.autoSendHeartbeat=!this.worker}return h}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var Jt=class extends Error{constructor(s,e){var t;super(s),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&((t=e.icebergType)==null?void 0:t.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function nl(s,e,t){const n=new URL(e,s);if(t)for(const[i,r]of Object.entries(t))r!==void 0&&n.searchParams.set(i,r);return n.toString()}async function il(s){return!s||s.type==="none"?{}:s.type==="bearer"?{Authorization:`Bearer ${s.token}`}:s.type==="header"?{[s.name]:s.value}:s.type==="custom"?await s.getHeaders():{}}function rl(s){const e=s.fetchImpl??globalThis.fetch;return{async request({method:t,path:n,query:i,body:r,headers:a}){const o=nl(s.baseUrl,n,i),l=await il(s.auth),c=await e(o,{method:t,headers:{...r?{"Content-Type":"application/json"}:{},...l,...a},body:r?JSON.stringify(r):void 0}),p=await c.text(),u=(c.headers.get("content-type")||"").includes("application/json"),g=u&&p?JSON.parse(p):p;if(!c.ok){const f=u?g:void 0,h=f==null?void 0:f.error;throw new Jt((h==null?void 0:h.message)??`Request failed with status ${c.status}`,{status:c.status,icebergType:h==null?void 0:h.type,icebergCode:h==null?void 0:h.code,details:f})}return{status:c.status,headers:c.headers,data:g}}}}function ks(s){return s.join("")}var al=class{constructor(s,e=""){this.client=s,this.prefix=e}async listNamespaces(s){const e=s?{parent:ks(s.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(n=>({namespace:n}))}async createNamespace(s,e){const t={namespace:s.namespace,properties:e==null?void 0:e.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:t})).data}async dropNamespace(s){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${ks(s.namespace)}`})}async loadNamespaceMetadata(s){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${ks(s.namespace)}`})).data.properties}}async namespaceExists(s){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${ks(s.namespace)}`}),!0}catch(e){if(e instanceof Jt&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(s,e){try{return await this.createNamespace(s,e)}catch(t){if(t instanceof Jt&&t.status===409)return;throw t}}};function mt(s){return s.join("")}var ol=class{constructor(s,e="",t){this.client=s,this.prefix=e,this.accessDelegation=t}async listTables(s){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${mt(s.namespace)}/tables`})).data.identifiers}async createTable(s,e){const t={};return this.accessDelegation&&(t["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${mt(s.namespace)}/tables`,body:e,headers:t})).data.metadata}async updateTable(s,e){const t=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${mt(s.namespace)}/tables/${s.name}`,body:e});return{"metadata-location":t.data["metadata-location"],metadata:t.data.metadata}}async dropTable(s,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${mt(s.namespace)}/tables/${s.name}`,query:{purgeRequested:String((e==null?void 0:e.purge)??!1)}})}async loadTable(s){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${mt(s.namespace)}/tables/${s.name}`,headers:e})).data.metadata}async tableExists(s){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${mt(s.namespace)}/tables/${s.name}`,headers:e}),!0}catch(t){if(t instanceof Jt&&t.status===404)return!1;throw t}}async createTableIfNotExists(s,e){try{return await this.createTable(s,e)}catch(t){if(t instanceof Jt&&t.status===409)return await this.loadTable({namespace:s.namespace,name:e.name});throw t}}},ll=class{constructor(s){var n;let e="v1";s.catalogName&&(e+=`/${s.catalogName}`);const t=s.baseUrl.endsWith("/")?s.baseUrl:`${s.baseUrl}/`;this.client=rl({baseUrl:t,auth:s.auth,fetchImpl:s.fetch}),this.accessDelegation=(n=s.accessDelegation)==null?void 0:n.join(","),this.namespaceOps=new al(this.client,e),this.tableOps=new ol(this.client,e,this.accessDelegation)}async listNamespaces(s){return this.namespaceOps.listNamespaces(s)}async createNamespace(s,e){return this.namespaceOps.createNamespace(s,e)}async dropNamespace(s){await this.namespaceOps.dropNamespace(s)}async loadNamespaceMetadata(s){return this.namespaceOps.loadNamespaceMetadata(s)}async listTables(s){return this.tableOps.listTables(s)}async createTable(s,e){return this.tableOps.createTable(s,e)}async updateTable(s,e){return this.tableOps.updateTable(s,e)}async dropTable(s,e){await this.tableOps.dropTable(s,e)}async loadTable(s){return this.tableOps.loadTable(s)}async namespaceExists(s){return this.namespaceOps.namespaceExists(s)}async tableExists(s){return this.tableOps.tableExists(s)}async createNamespaceIfNotExists(s,e){return this.namespaceOps.createNamespaceIfNotExists(s,e)}async createTableIfNotExists(s,e){return this.tableOps.createTableIfNotExists(s,e)}};function Yt(s){"@babel/helpers - typeof";return Yt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yt(s)}function cl(s,e){if(Yt(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var n=t.call(s,e);if(Yt(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function dl(s){var e=cl(s,"string");return Yt(e)=="symbol"?e:e+""}function ul(s,e,t){return(e=dl(e))in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function zi(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(s,i).enumerable})),t.push.apply(t,n)}return t}function $(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?zi(Object(t),!0).forEach(function(n){ul(s,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):zi(Object(t)).forEach(function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(t,n))})}return s}var Ws=class extends Error{constructor(s,e="storage",t,n){super(s),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=t,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function Ks(s){return typeof s=="object"&&s!==null&&"__isStorageError"in s}var In=class extends Ws{constructor(s,e,t,n="storage",i){super(s,n,e,t),this.name=n==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=t,this.code=i}toJSON(){return $($({},super.toJSON()),{},{code:this.code})}},Rr=class extends Ws{constructor(s,e,t="storage"){super(s,t),this.name=t==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function Fs(s,e,t){const n=$({},s),i=e.toLowerCase();for(const r of Object.keys(n))r.toLowerCase()===i&&delete n[r];return n[i]=t,n}function hl(s){const e={};for(const[t,n]of Object.entries(s))e[t.toLowerCase()]=n;return e}const pl=s=>s?(...e)=>s(...e):(...e)=>fetch(...e),fl=s=>{if(typeof s!="object"||s===null)return!1;const e=Object.getPrototypeOf(s);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in s)&&!(Symbol.iterator in s)},Pn=s=>{if(Array.isArray(s))return s.map(t=>Pn(t));if(typeof s=="function"||s!==Object(s))return s;const e={};return Object.entries(s).forEach(([t,n])=>{const i=t.replace(/([-_][a-z])/gi,r=>r.toUpperCase().replace(/[-_]/g,""));e[i]=Pn(n)}),e},gl=s=>!s||typeof s!="string"||s.length===0||s.length>100||s.trim()!==s||s.includes("/")||s.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(s),Ir=s=>s.split("/").map(encodeURIComponent).join("/"),Hi=s=>{if(typeof s=="object"&&s!==null){const e=s;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const t=e.error;if(typeof t.message=="string")return t.message}}return JSON.stringify(s)},ml=async(s,e,t,n)=>{if(s!==null&&typeof s=="object"&&"json"in s&&typeof s.json=="function"){const i=s;let r=parseInt(String(i.status),10);Number.isFinite(r)||(r=500),i.json().then(a=>{const o=(a==null?void 0:a.statusCode)||(a==null?void 0:a.code)||r+"";e(new In(Hi(a),r,o,n,a==null?void 0:a.code))}).catch(()=>{const a=r+"";e(new In(i.statusText||`HTTP ${r} error`,r,a,n))})}else e(new Rr(Hi(s),s,n))},bl=(s,e,t,n)=>{const i={method:s,headers:(e==null?void 0:e.headers)||{}};if(s==="GET"||s==="HEAD"||!n)return $($({},i),t);if(fl(n)){var r;const a=(e==null?void 0:e.headers)||{};let o;for(const[l,c]of Object.entries(a))l.toLowerCase()==="content-type"&&(o=c);i.headers=Fs(a,"Content-Type",(r=o)!==null&&r!==void 0?r:"application/json"),i.body=JSON.stringify(n)}else i.body=n;return e!=null&&e.duplex&&(i.duplex=e.duplex),$($({},i),t)};async function Nt(s,e,t,n,i,r,a){return new Promise((o,l)=>{s(t,bl(e,n,i,r)).then(c=>{if(!c.ok)throw c;if(n!=null&&n.noResolveJson)return c;if(a==="vectors"){const p=c.headers.get("content-type");if(c.headers.get("content-length")==="0"||c.status===204)return{};if(!p||!p.includes("application/json"))return{}}return c.json()}).then(c=>o(c)).catch(c=>ml(c,l,n,a))})}function Pr(s="storage"){return{get:async(e,t,n,i)=>Nt(e,"GET",t,n,i,void 0,s),post:async(e,t,n,i,r)=>Nt(e,"POST",t,i,r,n,s),put:async(e,t,n,i,r)=>Nt(e,"PUT",t,i,r,n,s),head:async(e,t,n,i)=>Nt(e,"HEAD",t,$($({},n),{},{noResolveJson:!0}),i,void 0,s),remove:async(e,t,n,i,r)=>Nt(e,"DELETE",t,i,r,n,s)}}const yl=Pr("storage"),{get:Xt,post:ue,put:Dn,head:vl,remove:Qt}=yl,ee=Pr("vectors");var Ot=class{constructor(s,e={},t,n="storage"){this.shouldThrowOnError=!1,this.url=s,this.headers=hl(e),this.fetch=pl(t),this.namespace=n}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(s,e){return this.headers=Fs(this.headers,s,e),this}async handleOperation(s){var e=this;try{return{data:await s(),error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(Ks(t))return{data:null,error:t};throw t}}};let Dr;Dr=Symbol.toStringTag;var wl=class{constructor(s,e){this.downloadFn=s,this.shouldThrowOnError=e,this[Dr]="StreamDownloadBuilder",this.promise=null}then(s,e){return this.getPromise().then(s,e)}catch(s){return this.getPromise().catch(s)}finally(s){return this.getPromise().finally(s)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var s=this;try{return{data:(await s.downloadFn()).body,error:null}}catch(e){if(s.shouldThrowOnError)throw e;if(Ks(e))return{data:null,error:e};throw e}}};let jr;jr=Symbol.toStringTag;var _l=class{constructor(s,e){this.downloadFn=s,this.shouldThrowOnError=e,this[jr]="BlobDownloadBuilder",this.promise=null}asStream(){return new wl(this.downloadFn,this.shouldThrowOnError)}then(s,e){return this.getPromise().then(s,e)}catch(s){return this.getPromise().catch(s)}finally(s){return this.getPromise().finally(s)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var s=this;try{return{data:await(await s.downloadFn()).blob(),error:null}}catch(e){if(s.shouldThrowOnError)throw e;if(Ks(e))return{data:null,error:e};throw e}}};const vn={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},qi={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var xl=class extends Ot{constructor(s,e={},t,n){super(s,e,n,"storage"),this.bucketId=t}async uploadOrUpdate(s,e,t,n){var i=this;return i.handleOperation(async()=>{let r;const a=$($({},qi),n);let o=$($({},i.headers),s==="POST"&&{"x-upsert":String(a.upsert)});const l=a.metadata;if(typeof Blob<"u"&&t instanceof Blob?(r=new FormData,r.append("cacheControl",a.cacheControl),l&&r.append("metadata",i.encodeMetadata(l)),r.append("",t)):typeof FormData<"u"&&t instanceof FormData?(r=t,r.has("cacheControl")||r.append("cacheControl",a.cacheControl),l&&!r.has("metadata")&&r.append("metadata",i.encodeMetadata(l))):(r=t,o["cache-control"]=`max-age=${a.cacheControl}`,o["content-type"]=a.contentType,l&&(o["x-metadata"]=i.toBase64(i.encodeMetadata(l))),(typeof ReadableStream<"u"&&r instanceof ReadableStream||r&&typeof r=="object"&&"pipe"in r&&typeof r.pipe=="function")&&!a.duplex&&(a.duplex="half")),n!=null&&n.headers)for(const[g,f]of Object.entries(n.headers))o=Fs(o,g,f);const c=i._removeEmptyFolders(e),p=i._getFinalPath(c),u=await(s=="PUT"?Dn:ue)(i.fetch,`${i.url}/object/${p}`,r,$({headers:o},a!=null&&a.duplex?{duplex:a.duplex}:{}));return{path:c,id:u.Id,fullPath:u.Key}})}async upload(s,e,t){return this.uploadOrUpdate("POST",s,e,t)}async uploadToSignedUrl(s,e,t,n){var i=this;const r=i._removeEmptyFolders(s),a=i._getFinalPath(r),o=new URL(i.url+`/object/upload/sign/${a}`);return o.searchParams.set("token",e),i.handleOperation(async()=>{let l;const c=$($({},qi),n);let p=$($({},i.headers),{"x-upsert":String(c.upsert)});const u=c.metadata;if(typeof Blob<"u"&&t instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),u&&l.append("metadata",i.encodeMetadata(u)),l.append("",t)):typeof FormData<"u"&&t instanceof FormData?(l=t,l.has("cacheControl")||l.append("cacheControl",c.cacheControl),u&&!l.has("metadata")&&l.append("metadata",i.encodeMetadata(u))):(l=t,p["cache-control"]=`max-age=${c.cacheControl}`,p["content-type"]=c.contentType,u&&(p["x-metadata"]=i.toBase64(i.encodeMetadata(u))),(typeof ReadableStream<"u"&&l instanceof ReadableStream||l&&typeof l=="object"&&"pipe"in l&&typeof l.pipe=="function")&&!c.duplex&&(c.duplex="half")),n!=null&&n.headers)for(const[g,f]of Object.entries(n.headers))p=Fs(p,g,f);return{path:r,fullPath:(await Dn(i.fetch,o.toString(),l,$({headers:p},c!=null&&c.duplex?{duplex:c.duplex}:{}))).Key}})}async createSignedUploadUrl(s,e){var t=this;return t.handleOperation(async()=>{let n=t._getFinalPath(s);const i=$({},t.headers);e!=null&&e.upsert&&(i["x-upsert"]="true");const r=await ue(t.fetch,`${t.url}/object/upload/sign/${n}`,{},{headers:i}),a=new URL(t.url+r.url),o=a.searchParams.get("token");if(!o)throw new Ws("No token returned by API");return{signedUrl:a.toString(),path:s,token:o}})}async update(s,e,t){return this.uploadOrUpdate("PUT",s,e,t)}async move(s,e,t){var n=this;return n.handleOperation(async()=>await ue(n.fetch,`${n.url}/object/move`,{bucketId:n.bucketId,sourceKey:s,destinationKey:e,destinationBucket:t==null?void 0:t.destinationBucket},{headers:n.headers}))}async copy(s,e,t){var n=this;return n.handleOperation(async()=>({path:(await ue(n.fetch,`${n.url}/object/copy`,{bucketId:n.bucketId,sourceKey:s,destinationKey:e,destinationBucket:t==null?void 0:t.destinationBucket},{headers:n.headers})).Key}))}async createSignedUrl(s,e,t){var n=this;return n.handleOperation(async()=>{let i=n._getFinalPath(s);const r=typeof(t==null?void 0:t.transform)=="object"&&t.transform!==null&&Object.keys(t.transform).length>0;let a=await ue(n.fetch,`${n.url}/object/sign/${i}`,$({expiresIn:e},r?{transform:t.transform}:{}),{headers:n.headers});const o=new URLSearchParams;t!=null&&t.download&&o.set("download",t.download===!0?"":t.download),(t==null?void 0:t.cacheNonce)!=null&&o.set("cacheNonce",String(t.cacheNonce));const l=o.toString();return{signedUrl:encodeURI(`${n.url}${a.signedURL}${l?`&${l}`:""}`)}})}async createSignedUrls(s,e,t){var n=this;return n.handleOperation(async()=>{const i=await ue(n.fetch,`${n.url}/object/sign/${n.bucketId}`,{expiresIn:e,paths:s},{headers:n.headers}),r=new URLSearchParams;t!=null&&t.download&&r.set("download",t.download===!0?"":t.download),(t==null?void 0:t.cacheNonce)!=null&&r.set("cacheNonce",String(t.cacheNonce));const a=r.toString();return i.map(o=>$($({},o),{},{signedUrl:o.signedURL?encodeURI(`${n.url}${o.signedURL}${a?`&${a}`:""}`):null}))})}download(s,e,t){const n=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",i=new URLSearchParams;e!=null&&e.transform&&this.applyTransformOptsToQuery(i,e.transform),(e==null?void 0:e.cacheNonce)!=null&&i.set("cacheNonce",String(e.cacheNonce));const r=i.toString(),a=this._getFinalPath(s),o=()=>Xt(this.fetch,`${this.url}/${n}/${a}${r?`?${r}`:""}`,{headers:this.headers,noResolveJson:!0},t);return new _l(o,this.shouldThrowOnError)}async info(s){var e=this;const t=e._getFinalPath(s);return e.handleOperation(async()=>Pn(await Xt(e.fetch,`${e.url}/object/info/${t}`,{headers:e.headers})))}async exists(s){var e=this;const t=e._getFinalPath(s);try{return await vl(e.fetch,`${e.url}/object/${t}`,{headers:e.headers}),{data:!0,error:null}}catch(i){if(e.shouldThrowOnError)throw i;if(Ks(i)){var n;const r=i instanceof In?i.status:i instanceof Rr?(n=i.originalError)===null||n===void 0?void 0:n.status:void 0;if(r!==void 0&&[400,404].includes(r))return{data:!1,error:i}}throw i}}getPublicUrl(s,e){const t=this._getFinalPath(s),n=new URLSearchParams;e!=null&&e.download&&n.set("download",e.download===!0?"":e.download),e!=null&&e.transform&&this.applyTransformOptsToQuery(n,e.transform),(e==null?void 0:e.cacheNonce)!=null&&n.set("cacheNonce",String(e.cacheNonce));const i=n.toString(),r=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${r}/public/${t}`)+(i?`?${i}`:"")}}}async remove(s){var e=this;return e.handleOperation(async()=>await Qt(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:s},{headers:e.headers}))}async purgeCache(s,e,t){var n=this;return n.handleOperation(async()=>{const i=Ir(n._getFinalPath(s)),r=new URLSearchParams;e!=null&&e.transformations&&r.set("transformations","true");const a=r.toString();return await Qt(n.fetch,`${n.url}/cdn/${i}${a?`?${a}`:""}`,{},{headers:n.headers},t)})}async list(s,e,t){var n=this;return n.handleOperation(async()=>{const i=e!=null&&e.sortBy?$($({},vn.sortBy),e.sortBy):vn.sortBy,r=$($($({},vn),e),{},{sortBy:i,prefix:s||""});return await ue(n.fetch,`${n.url}/object/list/${n.bucketId}`,r,{headers:n.headers},t)})}async listV2(s,e){var t=this;return t.handleOperation(async()=>{const n=$({},s);return await ue(t.fetch,`${t.url}/object/list-v2/${t.bucketId}`,n,{headers:t.headers},e)})}encodeMetadata(s){return JSON.stringify(s)}toBase64(s){return typeof Buffer<"u"?Buffer.from(s).toString("base64"):btoa(s)}_getFinalPath(s){return`${this.bucketId}/${s.replace(/^\/+/,"")}`}_removeEmptyFolders(s){return s.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(s,e){return e.width&&s.set("width",e.width.toString()),e.height&&s.set("height",e.height.toString()),e.resize&&s.set("resize",e.resize),e.format&&s.set("format",e.format),e.quality&&s.set("quality",e.quality.toString()),s}};const kl="2.112.3",is={"X-Client-Info":`storage-js/${kl}`};var Sl=class extends Ot{constructor(s,e={},t,n){const i=new URL(s);n!=null&&n.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes("storage.supabase.")&&(i.hostname=i.hostname.replace("supabase.","storage.supabase."));const r=i.href.replace(/\/$/,""),a=$($({},is),e);super(r,a,t,"storage")}async listBuckets(s){var e=this;return e.handleOperation(async()=>{const t=e.listBucketOptionsToQueryString(s);return await Xt(e.fetch,`${e.url}/bucket${t}`,{headers:e.headers})})}async getBucket(s){var e=this;return e.handleOperation(async()=>await Xt(e.fetch,`${e.url}/bucket/${s}`,{headers:e.headers}))}async createBucket(s,e={public:!1}){var t=this;return t.handleOperation(async()=>await ue(t.fetch,`${t.url}/bucket`,{id:s,name:s,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:t.headers}))}async updateBucket(s,e){var t=this;return t.handleOperation(async()=>await Dn(t.fetch,`${t.url}/bucket/${s}`,{id:s,name:s,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:t.headers}))}async emptyBucket(s){var e=this;return e.handleOperation(async()=>await ue(e.fetch,`${e.url}/bucket/${s}/empty`,{},{headers:e.headers}))}async deleteBucket(s){var e=this;return e.handleOperation(async()=>await Qt(e.fetch,`${e.url}/bucket/${s}`,{},{headers:e.headers}))}async purgeBucketCache(s,e,t){var n=this;return n.handleOperation(async()=>{const i=new URLSearchParams;e!=null&&e.transformations&&i.set("transformations","true");const r=i.toString();return await Qt(n.fetch,`${n.url}/cdn/${Ir(s)}${r?`?${r}`:""}`,{},{headers:n.headers},t)})}listBucketOptionsToQueryString(s){const e={};return s&&("limit"in s&&(e.limit=String(s.limit)),"offset"in s&&(e.offset=String(s.offset)),s.search&&(e.search=s.search),s.sortColumn&&(e.sortColumn=s.sortColumn),s.sortOrder&&(e.sortOrder=s.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},El=class extends Ot{constructor(s,e={},t){const n=s.replace(/\/$/,""),i=$($({},is),e);super(n,i,t,"storage")}async createBucket(s){var e=this;return e.handleOperation(async()=>await ue(e.fetch,`${e.url}/bucket`,{name:s},{headers:e.headers}))}async listBuckets(s){var e=this;return e.handleOperation(async()=>{const t=new URLSearchParams;(s==null?void 0:s.limit)!==void 0&&t.set("limit",s.limit.toString()),(s==null?void 0:s.offset)!==void 0&&t.set("offset",s.offset.toString()),s!=null&&s.sortColumn&&t.set("sortColumn",s.sortColumn),s!=null&&s.sortOrder&&t.set("sortOrder",s.sortOrder),s!=null&&s.search&&t.set("search",s.search);const n=t.toString(),i=n?`${e.url}/bucket?${n}`:`${e.url}/bucket`;return await Xt(e.fetch,i,{headers:e.headers})})}async deleteBucket(s){var e=this;return e.handleOperation(async()=>await Qt(e.fetch,`${e.url}/bucket/${s}`,{},{headers:e.headers}))}from(s){var e=this;if(!gl(s))throw new Ws("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const t=new ll({baseUrl:this.url,catalogName:s,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),n=this.shouldThrowOnError;return new Proxy(t,{get(i,r){const a=i[r];return typeof a!="function"?a:async(...o)=>{try{return{data:await a.apply(i,o),error:null}}catch(l){if(n)throw l;return{data:null,error:l}}}}})}},Al=class extends Ot{constructor(s,e={},t){const n=s.replace(/\/$/,""),i=$($({},is),{},{"Content-Type":"application/json"},e);super(n,i,t,"vectors")}async createIndex(s){var e=this;return e.handleOperation(async()=>await ee.post(e.fetch,`${e.url}/CreateIndex`,s,{headers:e.headers})||{})}async getIndex(s,e){var t=this;return t.handleOperation(async()=>await ee.post(t.fetch,`${t.url}/GetIndex`,{vectorBucketName:s,indexName:e},{headers:t.headers}))}async listIndexes(s){var e=this;return e.handleOperation(async()=>await ee.post(e.fetch,`${e.url}/ListIndexes`,s,{headers:e.headers}))}async deleteIndex(s,e){var t=this;return t.handleOperation(async()=>await ee.post(t.fetch,`${t.url}/DeleteIndex`,{vectorBucketName:s,indexName:e},{headers:t.headers})||{})}},$l=class extends Ot{constructor(s,e={},t){const n=s.replace(/\/$/,""),i=$($({},is),{},{"Content-Type":"application/json"},e);super(n,i,t,"vectors")}async putVectors(s){var e=this;if(s.vectors.length<1||s.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await ee.post(e.fetch,`${e.url}/PutVectors`,s,{headers:e.headers})||{})}async getVectors(s){var e=this;return e.handleOperation(async()=>await ee.post(e.fetch,`${e.url}/GetVectors`,s,{headers:e.headers}))}async listVectors(s){var e=this;if(s.segmentCount!==void 0){if(s.segmentCount<1||s.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(s.segmentIndex!==void 0&&(s.segmentIndex<0||s.segmentIndex>=s.segmentCount))throw new Error(`segmentIndex must be between 0 and ${s.segmentCount-1}`)}return e.handleOperation(async()=>await ee.post(e.fetch,`${e.url}/ListVectors`,s,{headers:e.headers}))}async queryVectors(s){var e=this;return e.handleOperation(async()=>await ee.post(e.fetch,`${e.url}/QueryVectors`,s,{headers:e.headers}))}async deleteVectors(s){var e=this;if(s.keys.length<1||s.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await ee.post(e.fetch,`${e.url}/DeleteVectors`,s,{headers:e.headers})||{})}},Tl=class extends Ot{constructor(s,e={},t){const n=s.replace(/\/$/,""),i=$($({},is),{},{"Content-Type":"application/json"},e);super(n,i,t,"vectors")}async createBucket(s){var e=this;return e.handleOperation(async()=>await ee.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:s},{headers:e.headers})||{})}async getBucket(s){var e=this;return e.handleOperation(async()=>await ee.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:s},{headers:e.headers}))}async listBuckets(s={}){var e=this;return e.handleOperation(async()=>await ee.post(e.fetch,`${e.url}/ListVectorBuckets`,s,{headers:e.headers}))}async deleteBucket(s){var e=this;return e.handleOperation(async()=>await ee.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:s},{headers:e.headers})||{})}},Ol=class extends Tl{constructor(s,e={}){super(s,e.headers||{},e.fetch)}from(s){return new Cl(this.url,this.headers,s,this.fetch)}async createBucket(s){var e=()=>super.createBucket,t=this;return e().call(t,s)}async getBucket(s){var e=()=>super.getBucket,t=this;return e().call(t,s)}async listBuckets(s={}){var e=()=>super.listBuckets,t=this;return e().call(t,s)}async deleteBucket(s){var e=()=>super.deleteBucket,t=this;return e().call(t,s)}},Cl=class extends Al{constructor(s,e,t,n){super(s,e,n),this.vectorBucketName=t}async createIndex(s){var e=()=>super.createIndex,t=this;return e().call(t,$($({},s),{},{vectorBucketName:t.vectorBucketName}))}async listIndexes(s={}){var e=()=>super.listIndexes,t=this;return e().call(t,$($({},s),{},{vectorBucketName:t.vectorBucketName}))}async getIndex(s){var e=()=>super.getIndex,t=this;return e().call(t,t.vectorBucketName,s)}async deleteIndex(s){var e=()=>super.deleteIndex,t=this;return e().call(t,t.vectorBucketName,s)}index(s){return new Rl(this.url,this.headers,this.vectorBucketName,s,this.fetch)}},Rl=class extends $l{constructor(s,e,t,n,i){super(s,e,i),this.vectorBucketName=t,this.indexName=n}async putVectors(s){var e=()=>super.putVectors,t=this;return e().call(t,$($({},s),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async getVectors(s){var e=()=>super.getVectors,t=this;return e().call(t,$($({},s),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async listVectors(s={}){var e=()=>super.listVectors,t=this;return e().call(t,$($({},s),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async queryVectors(s){var e=()=>super.queryVectors,t=this;return e().call(t,$($({},s),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async deleteVectors(s){var e=()=>super.deleteVectors,t=this;return e().call(t,$($({},s),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}},Il=class extends Sl{constructor(s,e={},t,n){super(s,e,t,n)}from(s){return new xl(this.url,this.headers,s,this.fetch)}get vectors(){return new Ol(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new El(this.url+"/iceberg",this.headers,this.fetch)}};const Fr="2.112.3",Ce=30*1e3,Ut=3,wn=Ut*Ce,Pl=2*Ce,Dl="http://localhost:9999",jl="supabase.auth.token",Fl={"X-Client-Info":`gotrue-js/${Fr}`},jn="X-Supabase-Api-Version",Mr={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},Ml=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,st="sb_flow_id",Nl=5,Ll=600*1e3;class Zt extends Error{constructor(e,t,n){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=t,this.code=n}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function _(s){return typeof s=="object"&&s!==null&&"__isAuthError"in s}class Ul extends Zt{constructor(e,t,n){super(e,t,n),this.name="AuthApiError",this.status=t,this.code=n}}function Wi(s){return _(s)&&s.name==="AuthApiError"}class he extends Zt{constructor(e,t){super(e),this.name="AuthUnknownError",this.originalError=t}}class we extends Zt{constructor(e,t,n,i){super(e,n,i),this.name=t,this.status=n}}class W extends we{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Ss(s){return _(s)&&s.name==="AuthSessionMissingError"}class bt extends we{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Es extends we{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class As extends we{constructor(e,t=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function Bl(s){return _(s)&&s.name==="AuthImplicitGrantRedirectError"}class Ki extends we{constructor(e,t=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class zl extends we{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class Rs extends we{constructor(e,t){super(e,"AuthRetryableFetchError",t,void 0)}}function $s(s){return _(s)&&s.name==="AuthRetryableFetchError"}class Vi extends we{constructor(e="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(e,"AuthRefreshDiscardedError",409,void 0)}}function Hl(s){return _(s)&&s.name==="AuthRefreshDiscardedError"}class Gi extends we{constructor(e,t,n){super(e,"AuthWeakPasswordError",t,"weak_password"),this.reasons=n}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class Ms extends we{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const Ns="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Ji=` 	
\r=`.split(""),ql=(()=>{const s=new Array(128);for(let e=0;e<s.length;e+=1)s[e]=-1;for(let e=0;e<Ji.length;e+=1)s[Ji[e].charCodeAt(0)]=-2;for(let e=0;e<Ns.length;e+=1)s[Ns[e].charCodeAt(0)]=e;return s})();function Yi(s,e,t){if(s!==null)for(e.queue=e.queue<<8|s,e.queuedBits+=8;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;t(Ns[n]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;t(Ns[n]),e.queuedBits-=6}}function Nr(s,e,t){const n=ql[s];if(n>-1)for(e.queue=e.queue<<6|n,e.queuedBits+=6;e.queuedBits>=8;)t(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(s)}"`)}}function Xi(s){const e=[],t=a=>{e.push(String.fromCodePoint(a))},n={utf8seq:0,codepoint:0},i={queue:0,queuedBits:0},r=a=>{Vl(a,n,t)};for(let a=0;a<s.length;a+=1)Nr(s.charCodeAt(a),i,r);return e.join("")}function Wl(s,e){if(s<=127){e(s);return}else if(s<=2047){e(192|s>>6),e(128|s&63);return}else if(s<=65535){e(224|s>>12),e(128|s>>6&63),e(128|s&63);return}else if(s<=1114111){e(240|s>>18),e(128|s>>12&63),e(128|s>>6&63),e(128|s&63);return}throw new Error(`Unrecognized Unicode codepoint: ${s.toString(16)}`)}function Kl(s,e){for(let t=0;t<s.length;t+=1){let n=s.charCodeAt(t);if(n>55295&&n<=56319){const i=(n-55296)*1024&65535;n=(s.charCodeAt(t+1)-56320&65535|i)+65536,t+=1}Wl(n,e)}}function Vl(s,e,t){if(e.utf8seq===0){if(s<=127){t(s);return}for(let n=1;n<6;n+=1)if((s>>7-n&1)===0){e.utf8seq=n;break}if(e.utf8seq===2)e.codepoint=s&31;else if(e.utf8seq===3)e.codepoint=s&15;else if(e.utf8seq===4)e.codepoint=s&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(s<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|s&63,e.utf8seq-=1,e.utf8seq===0&&t(e.codepoint)}}function Et(s){const e=[],t={queue:0,queuedBits:0},n=i=>{e.push(i)};for(let i=0;i<s.length;i+=1)Nr(s.charCodeAt(i),t,n);return new Uint8Array(e)}function Gl(s){const e=[];return Kl(s,t=>e.push(t)),new Uint8Array(e)}function nt(s){const e=[],t={queue:0,queuedBits:0},n=i=>{e.push(i)};return s.forEach(i=>Yi(i,t,n)),Yi(null,t,n),e.join("")}function Jl(s){return Math.round(Date.now()/1e3)+s}function Yl(){return Symbol("auth-callback")}const G=()=>typeof window<"u"&&typeof document<"u",Ye={tested:!1,writable:!1},Lr=()=>{if(!G())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Ye.tested)return Ye.writable;const s=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(s,s),globalThis.localStorage.removeItem(s),Ye.tested=!0,Ye.writable=!0}catch{Ye.tested=!0,Ye.writable=!1}return Ye.writable};function Qi(s){const e={},t=new URL(s);if(t.hash&&t.hash[0]==="#")try{new URLSearchParams(t.hash.substring(1)).forEach((i,r)=>{e[r]=i})}catch{}return t.searchParams.forEach((n,i)=>{e[i]=n}),e}const Ur=s=>s?(...e)=>s(...e):(...e)=>fetch(...e),Xl=s=>typeof s=="object"&&s!==null&&"status"in s&&"ok"in s&&"json"in s&&typeof s.json=="function",Re=async(s,e,t)=>{await s.setItem(e,JSON.stringify(t))},J=async(s,e)=>{const t=await s.getItem(e);if(!t)return null;try{return JSON.parse(t)}catch{return null}},Z=async(s,e)=>{await s.removeItem(e)};class Vs{constructor(){this.promise=new Vs.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}}Vs.promiseConstructor=Promise;function Ts(s){const e=s.split(".");if(e.length!==3)throw new Ms("Invalid JWT structure");for(let n=0;n<e.length;n++)if(!Ml.test(e[n]))throw new Ms("JWT not in base64url format");return{header:JSON.parse(Xi(e[0])),payload:JSON.parse(Xi(e[1])),signature:Et(e[2]),raw:{header:e[0],payload:e[1]}}}async function Ql(s){return await new Promise(e=>{setTimeout(()=>e(null),s)})}function Zl(s,e){return new Promise((n,i)=>{(async()=>{for(let r=0;r<1/0;r++)try{const a=await s(r);if(!e(r,null,a)){n(a);return}}catch(a){if(!e(r,a)){i(a);return}}})()})}function Br(s){return("0"+s.toString(16)).substr(-2)}function ec(){const e=new Uint32Array(56);if(typeof crypto>"u"){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=t.length;let i="";for(let r=0;r<56;r++)i+=t.charAt(Math.floor(Math.random()*n));return i}return crypto.getRandomValues(e),Array.from(e,Br).join("")}async function tc(s){const t=new TextEncoder().encode(s),n=await crypto.subtle.digest("SHA-256",t),i=new Uint8Array(n);return Array.from(i).map(r=>String.fromCharCode(r)).join("")}async function sc(s){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),s;const t=await tc(s);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}const nc=/^[a-zA-Z0-9_-]{8,64}$/;function Is(s){return typeof s=="string"&&nc.test(s)?s:null}function ic(){if(typeof crypto<"u"&&typeof crypto.getRandomValues=="function"){const e=new Uint8Array(16);return crypto.getRandomValues(e),Array.from(e,Br).join("")}let s="";for(let e=0;e<32;e++)s+=Math.floor(Math.random()*16).toString(16);return s}const Tt=(s,e)=>`${s}-flow-${e}-code-verifier`,es=s=>`${s}-flows-code-verifier`;async function Hn(s,e){const t=await J(s,es(e));return Array.isArray(t)?t.filter(n=>Is(n)!==null):[]}async function rc(s,e,t,n,i){await Re(s,Tt(e,t),n);const r=(await Hn(s,e)).filter(a=>a!==t);for(r.push(t);r.length>Nl;){const a=r.shift();await Z(s,Tt(e,a)),i==null||i(a)}await Re(s,es(e),r),await Re(s,`${e}-code-verifier`,n)}async function ac(s,e,t){if(t){const i=await J(s,Tt(e,t));return{verifier:typeof i=="string"?i:null,flowId:t}}const n=await J(s,`${e}-code-verifier`);return{verifier:typeof n=="string"?n:null,flowId:null}}async function oe(s,e,t){const n=`${e}-code-verifier`;if(!t){await Z(s,n);return}const i=Tt(e,t),r=await J(s,i);await Z(s,i);const a=await Hn(s,e),o=a.filter(l=>l!==t);o.length!==a.length&&(o.length>0?await Re(s,es(e),o):await Z(s,es(e))),r!=null&&r===await J(s,n)&&await Z(s,n)}async function oc(s,e){const t=await Hn(s,e);for(const n of t)await Z(s,Tt(e,n));await Z(s,es(e)),await Z(s,`${e}-code-verifier`)}function lc(s,e){const t=s.indexOf("#");let n=t===-1?s:s.slice(0,t);const i=t===-1?"":s.slice(t),r=n.indexOf("?");if(r!==-1){const o=n.slice(0,r),l=n.slice(r+1).split("&").filter(c=>c!==""&&c!==st&&!c.startsWith(`${st}=`));n=l.length>0?`${o}?${l.join("&")}`:o}const a=n.includes("?")?"&":"?";return`${n}${a}${st}=${encodeURIComponent(e)}${i}`}async function cc(s,e,t=!1,n){const i=ec();let r=i;t&&(r+="/recovery");const a=ic();await rc(s,e,a,r,n);const o=await sc(i);return[o,i===o?"plain":"s256",a]}const dc=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function uc(s){const e=s.headers.get(jn);if(!e||!e.match(dc))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function hc(s){if(!s)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(s<=e)throw new Error("JWT has expired")}function pc(s){switch(s){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const fc=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function Ae(s){if(!fc.test(s))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function de(s){if(!s.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function _n(){const s={};return new Proxy(s,{get:(e,t)=>{if(t==="__isUserNotAvailableProxy")return!0;if(typeof t=="symbol"){const n=t.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function gc(s,e){return new Proxy(s,{get:(t,n,i)=>{if(n==="__isInsecureUserWarningProxy")return!0;if(typeof n=="symbol"){const r=n.toString();if(r==="Symbol(Symbol.toPrimitive)"||r==="Symbol(Symbol.toStringTag)"||r==="Symbol(util.inspect.custom)"||r==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(t,n,i)}return!e.value&&typeof n=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(t,n,i)}})}function Zi(s){return JSON.parse(JSON.stringify(s))}const Qe=s=>{if(typeof s=="object"&&s!==null){const e=s;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(s)},er=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function tr(s){var e;if(!Xl(s))throw new Rs(Qe(s),0);let t;try{t=await s.json()}catch(r){throw er.includes(s.status)?new Rs(s.statusText||`HTTP ${s.status}`,s.status):new he(Qe(r),r)}if(er.includes(s.status))throw new Rs(Qe(t),s.status);let n;const i=uc(s);if(i&&i.getTime()>=Mr["2024-01-01"].timestamp&&typeof t=="object"&&t&&typeof t.code=="string"?n=t.code:typeof t=="object"&&t&&typeof t.error_code=="string"&&(n=t.error_code),n){if(n==="weak_password")throw new Gi(Qe(t),s.status,((e=t.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(n==="session_not_found")throw new W}else if(typeof t=="object"&&t&&typeof t.weak_password=="object"&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((r,a)=>r&&typeof a=="string",!0))throw new Gi(Qe(t),s.status,t.weak_password.reasons);throw new Ul(Qe(t),s.status||500,n)}const mc=(s,e,t,n)=>{const i={method:s,headers:(e==null?void 0:e.headers)||{}};return s==="GET"?i:(i.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),i.body=JSON.stringify(n),Object.assign(Object.assign({},i),t))};async function E(s,e,t,n){var i;const r=Object.assign({},n==null?void 0:n.headers);r[jn]||(r[jn]=Mr["2024-01-01"].name),n!=null&&n.jwt&&(r.Authorization=`Bearer ${n.jwt}`);const a=(i=n==null?void 0:n.query)!==null&&i!==void 0?i:{};n!=null&&n.redirectTo&&(a.redirect_to=n.redirectTo);const o=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await bc(s,e,t+o,{headers:r,noResolveJson:n==null?void 0:n.noResolveJson},{},n==null?void 0:n.body);return n!=null&&n.xform?n==null?void 0:n.xform(l):{data:Object.assign({},l),error:null}}async function bc(s,e,t,n,i,r){const a=mc(e,n,i,r);let o;try{o=await s(t,Object.assign({},a))}catch(l){throw new Rs(Qe(l),0)}if(o.ok||await tr(o),n!=null&&n.noResolveJson)return o;try{return await o.json()}catch(l){await tr(l)}}function ne(s){var e;let t=null;wc(s)&&(t=Object.assign({},s),s.expires_at||(t.expires_at=Jl(s.expires_in)));const n=(e=s.user)!==null&&e!==void 0?e:typeof(s==null?void 0:s.id)=="string"?s:null;return{data:{session:t,user:n},error:null}}function sr(s){const e=ne(s);return!e.error&&s.weak_password&&typeof s.weak_password=="object"&&Array.isArray(s.weak_password.reasons)&&s.weak_password.reasons.length&&s.weak_password.message&&typeof s.weak_password.message=="string"&&s.weak_password.reasons.reduce((t,n)=>t&&typeof n=="string",!0)&&(e.data.weak_password=s.weak_password),e}function ze(s){var e;return{data:{user:(e=s.user)!==null&&e!==void 0?e:s},error:null}}function yc(s){return{data:s,error:null}}function vc(s){const{action_link:e,email_otp:t,hashed_token:n,redirect_to:i,verification_type:r}=s,a=qs(s,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:t,hashed_token:n,redirect_to:i,verification_type:r},l=Object.assign({},a);return{data:{properties:o,user:l},error:null}}function nr(s){return s}function wc(s){return!!s.access_token&&!!s.refresh_token&&!!s.expires_in}const xn=["global","local","others"];class _c{constructor({url:e="",headers:t={},fetch:n,experimental:i}){this.url=e,this.headers=t,this.fetch=Ur(n),this.experimental=i??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,t=xn[0]){if(xn.indexOf(t)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${xn.join(", ")}`);try{return await E(this.fetch,"POST",`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(n){if(_(n))return{data:null,error:n};throw n}}async inviteUserByEmail(e,t={}){try{return await E(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:ze})}catch(n){if(_(n))return{data:{user:null},error:n};throw n}}async generateLink(e){try{const{options:t}=e,n=qs(e,["options"]),i=Object.assign(Object.assign({},n),t);return"newEmail"in n&&(i.new_email=n==null?void 0:n.newEmail,delete i.newEmail),await E(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:i,headers:this.headers,xform:vc,redirectTo:t==null?void 0:t.redirectTo})}catch(t){if(_(t))return{data:{properties:null,user:null},error:t};throw t}}async createUser(e){try{return await E(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:ze})}catch(t){if(_(t))return{data:{user:null},error:t};throw t}}async listUsers(e){var t,n,i,r,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},p=await E(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(t=e==null?void 0:e.page)===null||t===void 0?void 0:t.toString())!==null&&n!==void 0?n:"",per_page:(r=(i=e==null?void 0:e.perPage)===null||i===void 0?void 0:i.toString())!==null&&r!==void 0?r:""},xform:nr});if(p.error)throw p.error;const u=await p.json(),g=(a=p.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(l=(o=p.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return f.length>0&&(f.forEach(h=>{const b=parseInt(h.split(";")[0].split("=")[1].substring(0,1)),y=JSON.parse(h.split(";")[1].split("=")[1]);c[`${y}Page`]=b}),c.total=parseInt(g)),{data:Object.assign(Object.assign({},u),c),error:null}}catch(c){if(_(c))return{data:{users:[]},error:c};throw c}}async getUserById(e){Ae(e);try{return await E(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:ze})}catch(t){if(_(t))return{data:{user:null},error:t};throw t}}async updateUserById(e,t){Ae(e);try{return await E(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:ze})}catch(n){if(_(n))return{data:{user:null},error:n};throw n}}async deleteUser(e,t=!1){Ae(e);try{return await E(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:ze})}catch(n){if(_(n))return{data:{user:null},error:n};throw n}}async _listFactors(e){Ae(e.userId);try{const{data:t,error:n}=await E(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:i=>({data:{factors:i},error:null})});return{data:t,error:n}}catch(t){if(_(t))return{data:null,error:t};throw t}}async _deleteFactor(e){Ae(e.userId),Ae(e.id);try{return{data:await E(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(t){if(_(t))return{data:null,error:t};throw t}}async _listOAuthClients(e){var t,n,i,r,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},p=await E(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(t=e==null?void 0:e.page)===null||t===void 0?void 0:t.toString())!==null&&n!==void 0?n:"",per_page:(r=(i=e==null?void 0:e.perPage)===null||i===void 0?void 0:i.toString())!==null&&r!==void 0?r:""},xform:nr});if(p.error)throw p.error;const u=await p.json(),g=(a=p.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(l=(o=p.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return f.length>0&&(f.forEach(h=>{const b=parseInt(h.split(";")[0].split("=")[1].substring(0,1)),y=JSON.parse(h.split(";")[1].split("=")[1]);c[`${y}Page`]=b}),c.total=parseInt(g)),{data:Object.assign(Object.assign({},u),c),error:null}}catch(c){if(_(c))return{data:{clients:[]},error:c};throw c}}async _createOAuthClient(e){try{return await E(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(_(t))return{data:null,error:t};throw t}}async _getOAuthClient(e){try{return await E(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(_(t))return{data:null,error:t};throw t}}async _updateOAuthClient(e,t){try{return await E(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:t,headers:this.headers,xform:n=>({data:n,error:null})})}catch(n){if(_(n))return{data:null,error:n};throw n}}async _deleteOAuthClient(e){try{return await E(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(_(t))return{data:null,error:t};throw t}}async _regenerateOAuthClientSecret(e){try{return await E(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(_(t))return{data:null,error:t};throw t}}async _listCustomProviders(e){try{const t={};return e!=null&&e.type&&(t.type=e.type),await E(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:t,xform:n=>{var i;return{data:{providers:(i=n==null?void 0:n.providers)!==null&&i!==void 0?i:[]},error:null}}})}catch(t){if(_(t))return{data:{providers:[]},error:t};throw t}}async _createCustomProvider(e){try{return await E(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(_(t))return{data:null,error:t};throw t}}async _getCustomProvider(e){try{return await E(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(_(t))return{data:null,error:t};throw t}}async _updateCustomProvider(e,t){try{return await E(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:t,headers:this.headers,xform:n=>({data:n,error:null})})}catch(n){if(_(n))return{data:null,error:n};throw n}}async _deleteCustomProvider(e){try{return await E(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(_(t))return{data:null,error:t};throw t}}async _adminListPasskeys(e){de(this.experimental),Ae(e.userId);try{return await E(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(_(t))return{data:null,error:t};throw t}}async _adminDeletePasskey(e){de(this.experimental),Ae(e.userId),Ae(e.passkeyId);try{return await E(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(_(t))return{data:null,error:t};throw t}}}function ir(s={}){return{getItem:e=>s[e]||null,setItem:(e,t)=>{s[e]=t},removeItem:e=>{delete s[e]}}}globalThis&&Lr()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class xc extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}function kc(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function zr(s){if(!/^0x[a-fA-F0-9]{40}$/.test(s))throw new Error(`@supabase/auth-js: Address "${s}" is invalid.`);return s.toLowerCase()}function Sc(s){return parseInt(s,16)}function Ec(s){const e=new TextEncoder().encode(s);return"0x"+Array.from(e,n=>n.toString(16).padStart(2,"0")).join("")}function Ac(s){var e;const{chainId:t,domain:n,expirationTime:i,issuedAt:r=new Date,nonce:a,notBefore:o,requestId:l,resources:c,scheme:p,uri:u,version:g}=s;{if(!Number.isInteger(t))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!n)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(a&&a.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!u)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(g!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${g}`);if(!((e=s.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${s.statement}`)}const f=zr(s.address),h=p?`${p}://${n}`:n,b=s.statement?`${s.statement}
`:"",y=`${h} wants you to sign in with your Ethereum account:
${f}

${b}`;let v=`URI: ${u}
Version: ${g}
Chain ID: ${t}${a?`
Nonce: ${a}`:""}
Issued At: ${r.toISOString()}`;if(i&&(v+=`
Expiration Time: ${i.toISOString()}`),o&&(v+=`
Not Before: ${o.toISOString()}`),l&&(v+=`
Request ID: ${l}`),c){let k=`
Resources:`;for(const w of c){if(!w||typeof w!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${w}`);k+=`
- ${w}`}v+=k}return`${y}
${v}`}class z extends Error{constructor({message:e,code:t,cause:n,name:i}){var r;super(e,{cause:n}),this.__isWebAuthnError=!0,this.name=(r=i??(n instanceof Error?n.name:void 0))!==null&&r!==void 0?r:"Unknown Error",this.code=t}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class Ls extends z{constructor(e,t){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t,message:e}),this.name="WebAuthnUnknownError",this.originalError=t}}function $c({error:s,options:e}){var t,n,i;const{publicKey:r}=e;if(!r)throw Error("options was missing required publicKey property");if(s.name==="AbortError"){if(e.signal instanceof AbortSignal)return new z({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:s})}else if(s.name==="ConstraintError"){if(((t=r.authenticatorSelection)===null||t===void 0?void 0:t.requireResidentKey)===!0)return new z({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:s});if(e.mediation==="conditional"&&((n=r.authenticatorSelection)===null||n===void 0?void 0:n.userVerification)==="required")return new z({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:s});if(((i=r.authenticatorSelection)===null||i===void 0?void 0:i.userVerification)==="required")return new z({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:s})}else{if(s.name==="InvalidStateError")return new z({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:s});if(s.name==="NotAllowedError")return new z({message:s.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s});if(s.name==="NotSupportedError")return r.pubKeyCredParams.filter(o=>o.type==="public-key").length===0?new z({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:s}):new z({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:s});if(s.name==="SecurityError"){const a=window.location.hostname;if(Hr(a)){if(r.rp.id!==a)return new z({message:`The RP ID "${r.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:s})}else return new z({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:s})}else if(s.name==="TypeError"){if(r.user.id.byteLength<1||r.user.id.byteLength>64)return new z({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:s})}else if(s.name==="UnknownError")return new z({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:s})}return new z({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s})}function Tc({error:s,options:e}){const{publicKey:t}=e;if(!t)throw Error("options was missing required publicKey property");if(s.name==="AbortError"){if(e.signal instanceof AbortSignal)return new z({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:s})}else{if(s.name==="NotAllowedError")return new z({message:s.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s});if(s.name==="SecurityError"){const n=window.location.hostname;if(Hr(n)){if(t.rpId!==n)return new z({message:`The RP ID "${t.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:s})}else return new z({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:s})}else if(s.name==="UnknownError")return new z({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:s})}return new z({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s})}class Oc{createNewAbortSignal(){if(this.controller){const t=new Error("Cancelling existing WebAuthn API call for new one");t.name="AbortError",this.controller.abort(t)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const Fn=new Oc;function rr(s){if(!s)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(s);const{challenge:e,user:t,excludeCredentials:n}=s,i=qs(s,["challenge","user","excludeCredentials"]),r=Et(e).buffer,a=Object.assign(Object.assign({},t),{id:Et(t.id).buffer}),o=Object.assign(Object.assign({},i),{challenge:r,user:a});if(n&&n.length>0){o.excludeCredentials=new Array(n.length);for(let l=0;l<n.length;l++){const c=n[l];o.excludeCredentials[l]=Object.assign(Object.assign({},c),{id:Et(c.id).buffer,type:c.type||"public-key",transports:c.transports})}}return o}function ar(s){if(!s)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(s);const{challenge:e,allowCredentials:t}=s,n=qs(s,["challenge","allowCredentials"]),i=Et(e).buffer,r=Object.assign(Object.assign({},n),{challenge:i});if(t&&t.length>0){r.allowCredentials=new Array(t.length);for(let a=0;a<t.length;a++){const o=t[a];r.allowCredentials[a]=Object.assign(Object.assign({},o),{id:Et(o.id).buffer,type:o.type||"public-key",transports:o.transports})}}return r}function or(s){var e;if("toJSON"in s&&typeof s.toJSON=="function")return s.toJSON();const t=s;return{id:s.id,rawId:s.id,response:{attestationObject:nt(new Uint8Array(s.response.attestationObject)),clientDataJSON:nt(new Uint8Array(s.response.clientDataJSON))},type:"public-key",clientExtensionResults:s.getClientExtensionResults(),authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function lr(s){var e;if("toJSON"in s&&typeof s.toJSON=="function")return s.toJSON();const t=s,n=s.getClientExtensionResults(),i=s.response;return{id:s.id,rawId:s.id,response:{authenticatorData:nt(new Uint8Array(i.authenticatorData)),clientDataJSON:nt(new Uint8Array(i.clientDataJSON)),signature:nt(new Uint8Array(i.signature)),userHandle:i.userHandle?nt(new Uint8Array(i.userHandle)):void 0},type:"public-key",clientExtensionResults:n,authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function Hr(s){return s==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(s)}function Us(){var s,e;return!!(G()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((s=navigator==null?void 0:navigator.credentials)===null||s===void 0?void 0:s.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function qr(s){try{const e=await navigator.credentials.create(s);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new Ls("Browser returned unexpected credential type",e)}:{data:null,error:new Ls("Empty credential response",e)}}catch(e){return{data:null,error:$c({error:e,options:s})}}}async function Wr(s){try{const e=await navigator.credentials.get(s);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new Ls("Browser returned unexpected credential type",e)}:{data:null,error:new Ls("Empty credential response",e)}}catch(e){return{data:null,error:Tc({error:e,options:s})}}}const Cc={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},Rc={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function Bs(...s){const e=i=>i!==null&&typeof i=="object"&&!Array.isArray(i),t=i=>i instanceof ArrayBuffer||ArrayBuffer.isView(i),n={};for(const i of s)if(i)for(const r in i){const a=i[r];if(a!==void 0)if(Array.isArray(a))n[r]=a;else if(t(a))n[r]=a;else if(e(a)){const o=n[r];e(o)?n[r]=Bs(o,a):n[r]=Bs(a)}else n[r]=a}return n}function Ic(s,e){return Bs(Cc,s,e||{})}function Pc(s,e){return Bs(Rc,s,e||{})}class Dc{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:t,friendlyName:n,signal:i},r){var a;try{const{data:o,error:l}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!o)return{data:null,error:l};const c=i??Fn.createNewAbortSignal();if(o.webauthn.type==="create"){const{user:p}=o.webauthn.credential_options.publicKey;if(!p.name){const u=n;if(u)p.name=`${p.id}:${u}`;else{const f=(await this.client.getUser()).data.user,h=((a=f==null?void 0:f.user_metadata)===null||a===void 0?void 0:a.name)||(f==null?void 0:f.email)||(f==null?void 0:f.id)||"User";p.name=`${p.id}:${h}`}}p.displayName||(p.displayName=p.name)}switch(o.webauthn.type){case"create":{const p=Ic(o.webauthn.credential_options.publicKey,r==null?void 0:r.create),{data:u,error:g}=await qr({publicKey:p,signal:c});return u?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:u}},error:null}:{data:null,error:g}}case"request":{const p=Pc(o.webauthn.credential_options.publicKey,r==null?void 0:r.request),{data:u,error:g}=await Wr(Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:p,signal:c}));return u?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:u}},error:null}:{data:null,error:g}}}}catch(o){return _(o)?{data:null,error:o}:{data:null,error:new he("Unexpected error in challenge",o)}}}async _verify({challengeId:e,factorId:t,webauthn:n}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:n})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:n=typeof window<"u"?[window.location.origin]:void 0,signal:i}={}},r){if(!t)return{data:null,error:new Zt("rpId is required for WebAuthn authentication")};try{if(!Us())return{data:null,error:new he("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:n},signal:i},{request:r});if(!a)return{data:null,error:o};const{webauthn:l}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:l.type,rpId:t,rpOrigins:n,credential_response:l.credential_response}})}catch(a){return _(a)?{data:null,error:a}:{data:null,error:new he("Unexpected error in authenticate",a)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:n=typeof window<"u"?[window.location.origin]:void 0,signal:i}={}},r){if(!t)return{data:null,error:new Zt("rpId is required for WebAuthn registration")};try{if(!Us())return{data:null,error:new he("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(p=>{var u;return(u=p.data)===null||u===void 0?void 0:u.all.find(g=>g.factor_type==="webauthn"&&g.friendly_name===e&&g.status!=="unverified")}).then(p=>p?this.client.mfa.unenroll({factorId:p==null?void 0:p.id}):void 0),{data:null,error:o};const{data:l,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:n},signal:i},{create:r});return l?this._verify({factorId:a.id,challengeId:l.challengeId,webauthn:{rpId:t,rpOrigins:n,type:l.webauthn.type,credential_response:l.webauthn.credential_response}}):{data:null,error:c}}catch(a){return _(a)?{data:null,error:a}:{data:null,error:new he("Unexpected error in register",a)}}}}kc();const jc={url:Dl,storageKey:jl,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:Fl,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},yt={};class ts{get jwks(){var e,t;return(t=(e=yt[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&t!==void 0?t:{keys:[]}}set jwks(e){yt[this.storageKey]=Object.assign(Object.assign({},yt[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,t;return(t=(e=yt[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&t!==void 0?t:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){yt[this.storageKey]=Object.assign(Object.assign({},yt[this.storageKey]),{cachedAt:e})}constructor(e){var t,n,i;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this._pendingInitNotifications=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const r=Object.assign(Object.assign({},jc),e);if(this.storageKey=r.storageKey,this.instanceID=(t=ts.nextInstanceID[this.storageKey])!==null&&t!==void 0?t:0,ts.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!r.debug,typeof r.debug=="function"&&(this.logger=r.debug),this.instanceID>0&&G()){const a=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(a),this.logDebugMessages&&console.trace(a)}if(this.persistSession=r.persistSession,this.autoRefreshToken=r.autoRefreshToken,this.experimental=(n=r.experimental)!==null&&n!==void 0?n:{},this.admin=new _c({url:r.url,headers:r.headers,fetch:r.fetch,experimental:this.experimental}),this.url=r.url,this.headers=r.headers,this.fetch=Ur(r.fetch),this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.hasCustomAuthorizationHeader=r.hasCustomAuthorizationHeader,this.throwOnError=r.throwOnError,this.lockAcquireTimeout=r.lockAcquireTimeout,r.lock!=null&&(this.lock=r.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new Dc(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(r.storage?this.storage=r.storage:Lr()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=ir(this.memoryStorage)),r.userStorage&&(this.userStorage=r.userStorage)):(this.memoryStorage={},this.storage=ir(this.memoryStorage)),G()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(i=this.broadcastChannel)===null||i===void 0||i.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a),(a.data.event==="TOKEN_REFRESHED"||a.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(a.data.event,a.data.session,!1)}catch(o){this._debug("#broadcastChannel","error",o)}})}r.skipAutoInitialize||this.initialize().catch(a=>{this._debug("#initialize()","error",a)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Fr}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){var e;if(this.initializePromise)return await this.initializePromise;this._pendingInitNotifications=[],this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())();const t=await this.initializePromise,n=(e=this._pendingInitNotifications)!==null&&e!==void 0?e:[];this._pendingInitNotifications=null;for(const i of n)await this._notifyAllSubscribers(i.event,i.session,i.broadcast);return t}async _initialize(){var e;try{let t={},n="none";if(G()&&(t=Qi(window.location.href),this._isImplicitGrantCallback(t)?n="implicit":await this._isPKCECallback(t)&&(n="pkce")),G()&&this.detectSessionInUrl&&n!=="none"){const{data:i,error:r}=await this._getSessionFromURL(t,n);if(r){if(this._debug("#_initialize()","error detecting session from URL",r),Bl(r)){const l=(e=r.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:r}}return{error:r}}const{session:a,redirectType:o}=i;return this._debug("#_initialize()","detected session in URL",a,"redirect type",o),await this._saveSession(a),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return _(t)?this._returnResult({error:t}):this._returnResult({error:new he("Unexpected error during initialization",t)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var t,n,i;try{const r=await E(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(i=e==null?void 0:e.options)===null||i===void 0?void 0:i.captchaToken}},xform:ne}),{data:a,error:o}=r;if(o||!a)return this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(r){if(_(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signUp(e){var t,n,i;let r=null;try{let a;if("email"in e){const{email:u,password:g,options:f}=e;let h=null,b=null;this.flowType==="pkce"&&([h,b,r]=await this._getCodeChallengeAndMethod()),a=await E(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(f==null?void 0:f.emailRedirectTo,r),body:{email:u,password:g,data:(t=f==null?void 0:f.data)!==null&&t!==void 0?t:{},gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken},code_challenge:h,code_challenge_method:b},xform:ne})}else if("phone"in e){const{phone:u,password:g,options:f}=e;a=await E(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:u,password:g,data:(n=f==null?void 0:f.data)!==null&&n!==void 0?n:{},channel:(i=f==null?void 0:f.channel)!==null&&i!==void 0?i:"sms",gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken}},xform:ne})}else throw new Es("You must provide either an email or phone number and a password");const{data:o,error:l}=a;if(l||!o)return await oe(this.storage,this.storageKey,r),this._returnResult({data:{user:null,session:null},error:l});const c=o.session,p=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",c)),this._returnResult({data:{user:p,session:c},error:null})}catch(a){if(await oe(this.storage,this.storageKey,r),_(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithPassword(e){try{let t;if("email"in e){const{email:r,password:a,options:o}=e;t=await E(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:r,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:sr})}else if("phone"in e){const{phone:r,password:a,options:o}=e;t=await E(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:r,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:sr})}else throw new Es("You must provide either an email or phone number and a password");const{data:n,error:i}=t;if(i)return this._returnResult({data:{user:null,session:null},error:i});if(!n||!n.session||!n.user){const r=new bt;return this._returnResult({data:{user:null,session:null},error:r})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),this._returnResult({data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:i})}catch(t){if(_(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOAuth(e){var t,n,i,r;return await this._handleProviderSignIn(e.provider,{redirectTo:(t=e.options)===null||t===void 0?void 0:t.redirectTo,scopes:(n=e.options)===null||n===void 0?void 0:n.scopes,queryParams:(i=e.options)===null||i===void 0?void 0:i.queryParams,skipBrowserRedirect:(r=e.options)===null||r===void 0?void 0:r.skipBrowserRedirect})}async exchangeCodeForSession(e,t){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e,t)):this._exchangeCodeForSession(e,t)}async signInWithWeb3(e){const{chain:t}=e;switch(t){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){var t,n,i,r,a,o,l,c,p,u,g;let f,h;if("message"in e)f=e.message,h=e.signature;else{const{chain:b,wallet:y,statement:v,options:k}=e;let w;if(G())if(typeof y=="object")w=y;else{const se=window;if("ethereum"in se&&typeof se.ethereum=="object"&&"request"in se.ethereum&&typeof se.ethereum.request=="function")w=se.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof y!="object"||!(k!=null&&k.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");w=y}const A=new URL((t=k==null?void 0:k.url)!==null&&t!==void 0?t:window.location.href),N=await w.request({method:"eth_requestAccounts"}).then(se=>se).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!N||N.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const C=zr(N[0]);let R=(n=k==null?void 0:k.signInWithEthereum)===null||n===void 0?void 0:n.chainId;if(!R){const se=await w.request({method:"eth_chainId"});R=Sc(se)}const je={domain:A.host,address:C,statement:v,uri:A.href,version:"1",chainId:R,nonce:(i=k==null?void 0:k.signInWithEthereum)===null||i===void 0?void 0:i.nonce,issuedAt:(a=(r=k==null?void 0:k.signInWithEthereum)===null||r===void 0?void 0:r.issuedAt)!==null&&a!==void 0?a:new Date,expirationTime:(o=k==null?void 0:k.signInWithEthereum)===null||o===void 0?void 0:o.expirationTime,notBefore:(l=k==null?void 0:k.signInWithEthereum)===null||l===void 0?void 0:l.notBefore,requestId:(c=k==null?void 0:k.signInWithEthereum)===null||c===void 0?void 0:c.requestId,resources:(p=k==null?void 0:k.signInWithEthereum)===null||p===void 0?void 0:p.resources};f=Ac(je),h=await w.request({method:"personal_sign",params:[Ec(f),C]})}try{const{data:b,error:y}=await E(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:f,signature:h},!((u=e.options)===null||u===void 0)&&u.captchaToken?{gotrue_meta_security:{captcha_token:(g=e.options)===null||g===void 0?void 0:g.captchaToken}}:null),xform:ne});if(y)throw y;if(!b||!b.session||!b.user){const v=new bt;return this._returnResult({data:{user:null,session:null},error:v})}return b.session&&(await this._saveSession(b.session),await this._notifyAllSubscribers("SIGNED_IN",b.session)),this._returnResult({data:Object.assign({},b),error:y})}catch(b){if(_(b))return this._returnResult({data:{user:null,session:null},error:b});throw b}}async signInWithSolana(e){var t,n,i,r,a,o,l,c,p,u,g,f;let h,b;if("message"in e)h=e.message,b=e.signature;else{const{chain:y,wallet:v,statement:k,options:w}=e;let A;if(G())if(typeof v=="object")A=v;else{const C=window;if("solana"in C&&typeof C.solana=="object"&&("signIn"in C.solana&&typeof C.solana.signIn=="function"||"signMessage"in C.solana&&typeof C.solana.signMessage=="function"))A=C.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof v!="object"||!(w!=null&&w.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");A=v}const N=new URL((t=w==null?void 0:w.url)!==null&&t!==void 0?t:window.location.href);if("signIn"in A&&A.signIn){const C=await A.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},w==null?void 0:w.signInWithSolana),{version:"1",domain:N.host,uri:N.href}),k?{statement:k}:null));let R;if(Array.isArray(C)&&C[0]&&typeof C[0]=="object")R=C[0];else if(C&&typeof C=="object"&&"signedMessage"in C&&"signature"in C)R=C;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in R&&"signature"in R&&(typeof R.signedMessage=="string"||R.signedMessage instanceof Uint8Array)&&R.signature instanceof Uint8Array)h=typeof R.signedMessage=="string"?R.signedMessage:new TextDecoder().decode(R.signedMessage),b=R.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in A)||typeof A.signMessage!="function"||!("publicKey"in A)||typeof A!="object"||!A.publicKey||!("toBase58"in A.publicKey)||typeof A.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");h=[`${N.host} wants you to sign in with your Solana account:`,A.publicKey.toBase58(),...k?["",k,""]:[""],"Version: 1",`URI: ${N.href}`,`Issued At: ${(i=(n=w==null?void 0:w.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&i!==void 0?i:new Date().toISOString()}`,...!((r=w==null?void 0:w.signInWithSolana)===null||r===void 0)&&r.notBefore?[`Not Before: ${w.signInWithSolana.notBefore}`]:[],...!((a=w==null?void 0:w.signInWithSolana)===null||a===void 0)&&a.expirationTime?[`Expiration Time: ${w.signInWithSolana.expirationTime}`]:[],...!((o=w==null?void 0:w.signInWithSolana)===null||o===void 0)&&o.chainId?[`Chain ID: ${w.signInWithSolana.chainId}`]:[],...!((l=w==null?void 0:w.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${w.signInWithSolana.nonce}`]:[],...!((c=w==null?void 0:w.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${w.signInWithSolana.requestId}`]:[],...!((u=(p=w==null?void 0:w.signInWithSolana)===null||p===void 0?void 0:p.resources)===null||u===void 0)&&u.length?["Resources",...w.signInWithSolana.resources.map(R=>`- ${R}`)]:[]].join(`
`);const C=await A.signMessage(new TextEncoder().encode(h),"utf8");if(!C||!(C instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");b=C}}try{const{data:y,error:v}=await E(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:h,signature:nt(b)},!((g=e.options)===null||g===void 0)&&g.captchaToken?{gotrue_meta_security:{captcha_token:(f=e.options)===null||f===void 0?void 0:f.captchaToken}}:null),xform:ne});if(v)throw v;if(!y||!y.session||!y.user){const k=new bt;return this._returnResult({data:{user:null,session:null},error:k})}return y.session&&(await this._saveSession(y.session),await this._notifyAllSubscribers("SIGNED_IN",y.session)),this._returnResult({data:Object.assign({},y),error:v})}catch(y){if(_(y))return this._returnResult({data:{user:null,session:null},error:y});throw y}}async _exchangeCodeForSession(e,t){const n=(t==null?void 0:t.flowId)!=null,i=n?Is(t==null?void 0:t.flowId):G()?Is(Qi(window.location.href)[st]):null;n&&!i&&this._debug("#_exchangeCodeForSession()","provided flowId is not a valid flow id",t==null?void 0:t.flowId);const{verifier:r,flowId:a}=n&&!i?{verifier:null,flowId:null}:await ac(this.storage,this.storageKey,i),[o,l]=(r??"").split("/");try{if(!o&&this.flowType==="pkce")throw new zl;const{data:c,error:p}=await E(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:o},xform:ne});if(await oe(this.storage,this.storageKey,a),p)throw p;if(!c||!c.session||!c.user){const u=new bt;return this._returnResult({data:{user:null,session:null,redirectType:null},error:u})}return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers(l==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",c.session)),this._returnResult({data:Object.assign(Object.assign({},c),{redirectType:l??null}),error:p})}catch(c){if(await oe(this.storage,this.storageKey,a),_(c))return this._returnResult({data:{user:null,session:null,redirectType:null},error:c});throw c}}async signInWithIdToken(e){try{const{options:t,provider:n,token:i,access_token:r,nonce:a}=e,o=await E(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:i,access_token:r,nonce:a,gotrue_meta_security:{captcha_token:t==null?void 0:t.captchaToken}},xform:ne}),{data:l,error:c}=o;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!l||!l.session||!l.user){const p=new bt;return this._returnResult({data:{user:null,session:null},error:p})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:l,error:c})}catch(t){if(_(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOtp(e){var t,n,i,r,a;let o=null;try{if("email"in e){const{email:l,options:c}=e;let p=null,u=null;this.flowType==="pkce"&&([p,u,o]=await this._getCodeChallengeAndMethod());const{error:g}=await E(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:l,data:(t=c==null?void 0:c.data)!==null&&t!==void 0?t:{},create_user:(n=c==null?void 0:c.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},code_challenge:p,code_challenge_method:u},redirectTo:this._maybeAppendFlowIdToRedirect(c==null?void 0:c.emailRedirectTo,o)});return this._returnResult({data:{user:null,session:null},error:g})}if("phone"in e){const{phone:l,options:c}=e,{data:p,error:u}=await E(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:l,data:(i=c==null?void 0:c.data)!==null&&i!==void 0?i:{},create_user:(r=c==null?void 0:c.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},channel:(a=c==null?void 0:c.channel)!==null&&a!==void 0?a:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:p==null?void 0:p.message_id},error:u})}throw new Es("You must provide either an email or phone number.")}catch(l){if(await oe(this.storage,this.storageKey,o),_(l))return this._returnResult({data:{user:null,session:null},error:l});throw l}}async verifyOtp(e){var t,n;try{let i,r;"options"in e&&(i=(t=e.options)===null||t===void 0?void 0:t.redirectTo,r=(n=e.options)===null||n===void 0?void 0:n.captchaToken);const{data:a,error:o}=await E(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:r}}),redirectTo:i,xform:ne});if(o)throw o;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,c=a.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(i){if(_(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signInWithSSO(e){var t,n,i,r;let a=null;try{let o=null,l=null;this.flowType==="pkce"&&([o,l,a]=await this._getCodeChallengeAndMethod());const c=await E(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:this._maybeAppendFlowIdToRedirect((t=e.options)===null||t===void 0?void 0:t.redirectTo,a)}),!((n=e==null?void 0:e.options)===null||n===void 0)&&n.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:o,code_challenge_method:l}),headers:this.headers,xform:yc});return!((i=c.data)===null||i===void 0)&&i.url&&G()&&!(!((r=e.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(c.data.url),this._returnResult(c)}catch(o){if(await oe(this.storage,this.storageKey,a),_(o))return this._returnResult({data:null,error:o});throw o}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:t},error:n}=e;if(n)throw n;if(!t)throw new W;const{error:i}=await E(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:i})})}catch(e){if(_(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){let t=null;try{const n=`${this.url}/resend`;if("email"in e){const{email:i,type:r,options:a}=e;let o=null,l=null;this.flowType==="pkce"&&([o,l,t]=await this._getCodeChallengeAndMethod());const{error:c}=await E(this.fetch,"POST",n,{headers:this.headers,body:{email:i,type:r,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken},code_challenge:o,code_challenge_method:l},redirectTo:this._maybeAppendFlowIdToRedirect(a==null?void 0:a.emailRedirectTo,t)});return c&&await oe(this.storage,this.storageKey,t),this._returnResult({data:{user:null,session:null},error:c})}else if("phone"in e){const{phone:i,type:r,options:a}=e,{data:o,error:l}=await E(this.fetch,"POST",n,{headers:this.headers,body:{phone:i,type:r,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:o==null?void 0:o.message_id},error:l})}throw new Es("You must provide either an email or phone number and a type")}catch(n){if(await oe(this.storage,this.storageKey,t),_(n))return this._returnResult({data:{user:null,session:null},error:n});throw n}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,t){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),i=(async()=>(await n,await t()))();return this.pendingInLock.push((async()=>{try{await i}catch{}})()),i}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=t();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const i=[...this.pendingInLock];await Promise.all(i),this.pendingInLock.splice(0,i.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const t=await this.__loadSession();return await e(t)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const t=await J(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",t),t!==null&&(this._isValidSession(t)?e=t:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const n=e.expires_at?e.expires_at*1e3-Date.now()<wn:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",e.expires_at),!n){if(this.userStorage){const a=await J(this.userStorage,this.storageKey+"-user");a!=null&&a.user?e.user=a.user:e.user=_n()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const a={value:this.suppressGetSessionWarning};e.user=gc(e.user,a),a.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:i,error:r}=await this._callRefreshToken(e.refresh_token);if(r){if(!!(e.expires_at&&e.expires_at*1e3>Date.now())){const o=await J(this.storage,this.storageKey);if(o&&o.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:r})}return this._returnResult({data:{session:i},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let t;return this.lock!=null?t=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):t=await this._getUser(),t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await E(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:ze}):await this._useSession(async t=>{var n,i,r;const{data:a,error:o}=t;if(o)throw o;return!(!((n=a.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new W}:await E(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(r=(i=a.session)===null||i===void 0?void 0:i.access_token)!==null&&r!==void 0?r:void 0,xform:ze})})}catch(t){if(_(t))return Ss(t)&&await this._removeSession(),this._returnResult({data:{user:null},error:t});throw t}}async updateUser(e,t={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,t)):await this._updateUser(e,t)}async _updateUser(e,t={}){let n=null;try{return await this._useSession(async i=>{const{data:r,error:a}=i;if(a)throw a;if(!r.session)throw new W;const o=r.session;let l=null,c=null;this.flowType==="pkce"&&e.email!=null&&([l,c,n]=await this._getCodeChallengeAndMethod());const{data:p,error:u}=await E(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(t==null?void 0:t.emailRedirectTo,n),body:Object.assign(Object.assign({},e),{code_challenge:l,code_challenge_method:c}),jwt:o.access_token,xform:ze});if(u)throw u;return o.user=p.user,await this._saveSession(o),await this._notifyAllSubscribers("USER_UPDATED",o),this._returnResult({data:{user:o.user},error:null})})}catch(i){if(await oe(this.storage,this.storageKey,n),_(i))return this._returnResult({data:{user:null},error:i});throw i}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new W;const t=Date.now()/1e3;let n=t,i=!0,r=null;const{payload:a}=Ts(e.access_token);if(a.exp&&(n=a.exp,i=n<=t),i){const{data:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!o)return{data:{user:null,session:null},error:null};r=o}else{const{data:o,error:l}=await this._getUser(e.access_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});r={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:n-t,expires_at:n},await this._saveSession(r),await this._notifyAllSubscribers("SIGNED_IN",r)}return this._returnResult({data:{user:r.user,session:r},error:null})}catch(t){if(_(t))return this._returnResult({data:{session:null,user:null},error:t});throw t}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async t=>{var n;if(!e){const{data:a,error:o}=t;if(o)throw o;e=(n=a.session)!==null&&n!==void 0?n:void 0}if(!(e!=null&&e.refresh_token))throw new W;const{data:i,error:r}=await this._callRefreshToken(e.refresh_token);return r?this._returnResult({data:{user:null,session:null},error:r}):i?this._returnResult({data:{user:i.user,session:i},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(t){if(_(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async _getSessionFromURL(e,t){var n;try{if(!G())throw new As("No browser detected.");if(e.error||e.error_description||e.error_code)throw new As(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(t){case"implicit":if(this.flowType==="pkce")throw new Ki("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new As("Not a valid implicit grant flow url.");break;default:}if(t==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new Ki("No code detected.");const{data:w,error:A}=await this._exchangeCodeForSession(e.code,{flowId:e[st]});if(A)throw A;const N=new URL(window.location.href);return N.searchParams.delete("code"),N.searchParams.delete(st),window.history.replaceState(window.history.state,"",N.toString()),{data:{session:w.session,redirectType:(n=w.redirectType)!==null&&n!==void 0?n:null},error:null}}const{provider_token:i,provider_refresh_token:r,access_token:a,refresh_token:o,expires_in:l,expires_at:c,token_type:p}=e;if(!a||!l||!o||!p)throw new As("No session defined in URL");const u=Math.round(Date.now()/1e3),g=parseInt(l);let f=u+g;c&&(f=parseInt(c));const h=f-u;h*1e3<=Ce&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${h}s, should have been closer to ${g}s`);const b=f-g;u-b>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",b,f,u):u-b<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",b,f,u);const{data:y,error:v}=await this._getUser(a);if(v)throw v;const k={provider_token:i,provider_refresh_token:r,access_token:a,expires_in:g,expires_at:f,refresh_token:o,token_type:p,user:y.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:k,redirectType:e.type},error:null})}catch(i){if(_(i))return this._returnResult({data:{session:null,redirectType:null},error:i});throw i}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){if(!e.code)return!1;const t=Is(e[st]);return t&&await J(this.storage,Tt(this.storageKey,t))?!0:!!await J(this.storage,`${this.storageKey}-code-verifier`)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async t=>{var n;const i=async()=>{await this._removeSession()},{data:r,error:a}=t;if(a&&!Ss(a))return this._returnResult({error:a});const o=(n=r.session)===null||n===void 0?void 0:n.access_token;if(o){const{error:l}=await this.admin.signOut(o,e);if(l&&!(Wi(l)&&(l.status===404||l.status===401||l.status===403)||Ss(l)))return e!=="others"&&await i(),this._returnResult({error:l})}return e!=="others"&&await i(),this._returnResult({error:null})})}onAuthStateChange(e){const t=Yl(),n={id:t,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",t),this.stateChangeEmitters.delete(t)}};return this._debug("#onAuthStateChange()","registered callback with id",t),this.stateChangeEmitters.set(t,n),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(t)}):await this._emitInitialSession(t)))(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async t=>{var n,i;try{const{data:{session:r},error:a}=t;if(a)throw a;await((n=this.stateChangeEmitters.get(e))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",r)),this._debug("INITIAL_SESSION","callback id",e,"session",r)}catch(r){await((i=this.stateChangeEmitters.get(e))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",r),Ss(r)||$s(r)||Wi(r)&&(r.code==="refresh_token_not_found"||r.code==="refresh_token_already_used"||r.code==="session_expired")?console.warn(r):console.error(r)}})}async resetPasswordForEmail(e,t={}){let n=null,i=null,r=null;this.flowType==="pkce"&&([n,i,r]=await this._getCodeChallengeAndMethod(!0));try{return await E(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:i,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(t.redirectTo,r)})}catch(a){if(await oe(this.storage,this.storageKey,r),_(a))return this._returnResult({data:null,error:a});throw a}}async getUserIdentities(){var e;try{const{data:t,error:n}=await this.getUser();if(n)throw n;return this._returnResult({data:{identities:(e=t.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var t;let n=null;try{const{data:i,error:r}=await this._useSession(async a=>{var o,l,c,p,u;const{data:g,error:f}=a;if(f)throw f;const{url:h,flowId:b}=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(o=e.options)===null||o===void 0?void 0:o.redirectTo,scopes:(l=e.options)===null||l===void 0?void 0:l.scopes,queryParams:(c=e.options)===null||c===void 0?void 0:c.queryParams,skipBrowserRedirect:!0});return n=b,await E(this.fetch,"GET",h,{headers:this.headers,jwt:(u=(p=g.session)===null||p===void 0?void 0:p.access_token)!==null&&u!==void 0?u:void 0})});if(r)throw r;return G()&&!(!((t=e.options)===null||t===void 0)&&t.skipBrowserRedirect)&&window.location.assign(i==null?void 0:i.url),this._returnResult({data:{provider:e.provider,url:i==null?void 0:i.url,flowId:n},error:null})}catch(i){if(_(i))return this._returnResult({data:{provider:e.provider,url:null,flowId:n},error:i});throw i}}async linkIdentityIdToken(e){return await this._useSession(async t=>{var n;try{const{error:i,data:{session:r}}=t;if(i)throw i;const{options:a,provider:o,token:l,access_token:c,nonce:p}=e,u=await E(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(n=r==null?void 0:r.access_token)!==null&&n!==void 0?n:void 0,body:{provider:o,id_token:l,access_token:c,nonce:p,link_identity:!0,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:ne}),{data:g,error:f}=u;return f?this._returnResult({data:{user:null,session:null},error:f}):!g||!g.session||!g.user?this._returnResult({data:{user:null,session:null},error:new bt}):(g.session&&(await this._saveSession(g.session),await this._notifyAllSubscribers("USER_UPDATED",g.session)),this._returnResult({data:g,error:f}))}catch(i){if(await oe(this.storage,this.storageKey,null),_(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{var n,i;const{data:r,error:a}=t;if(a)throw a;return await E(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(i=(n=r.session)===null||n===void 0?void 0:n.access_token)!==null&&i!==void 0?i:void 0})})}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}async _refreshAccessToken(e){const t="#_refreshAccessToken()";this._debug(t,"begin");try{const n=Date.now();return await Zl(async i=>(i>0&&await Ql(200*Math.pow(2,i-1)),this._debug(t,"refreshing attempt",i),await E(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:ne})),(i,r)=>{const a=200*Math.pow(2,i);return r&&$s(r)&&Date.now()+a-n<Ce})}catch(n){if(this._debug(t,"error",n),_(n))return this._returnResult({data:{session:null,user:null},error:n});throw n}finally{this._debug(t,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,t){const{url:n,flowId:i}=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",t,"url",n),G()&&!t.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n,flowId:i},error:null}}async _recoverAndRefresh(){var e,t;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const i=await J(this.storage,this.storageKey);if(i&&this.userStorage){let a=await J(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!a&&(a={user:i.user},await Re(this.userStorage,this.storageKey+"-user",a)),i.user=(e=a==null?void 0:a.user)!==null&&e!==void 0?e:_n()}else if(i&&!i.user&&!i.user){const a=await J(this.storage,this.storageKey+"-user");a&&(a!=null&&a.user)?(i.user=a.user,await Z(this.storage,this.storageKey+"-user"),await Re(this.storage,this.storageKey,i)):i.user=_n()}if(this._debug(n,"session from storage",i),!this._isValidSession(i)){this._debug(n,"session is not valid"),i!==null&&await this._removeSession();return}const r=((t=i.expires_at)!==null&&t!==void 0?t:1/0)*1e3-Date.now()<wn;if(this._debug(n,`session has${r?"":" not"} expired with margin of ${wn}s`),r){if(this.autoRefreshToken&&i.refresh_token){const{error:a}=await this._callRefreshToken(i.refresh_token);a&&(Hl(a)?this._debug(n,"refresh discarded by commit guard",a):this._debug(n,"refresh failed",a))}}else if(i.user&&i.user.__isUserNotAvailableProxy===!0)try{const{data:a,error:o}=await this._getUser(i.access_token);!o&&(a!=null&&a.user)?(i.user=a.user,await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(a){console.error("Error getting user data:",a),this._debug(n,"error getting user data, skipping SIGNED_IN notification",a)}else await this._notifyAllSubscribers("SIGNED_IN",i)}catch(i){this._debug(n,"error",i),$s(i)?console.warn(i):console.error(i);return}finally{this._debug(n,"end")}}async _callRefreshToken(e){var t,n;if(!e)throw new W;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const i="#_callRefreshToken()";this._debug(i,"begin");try{this.refreshingDeferred=new Vs;const r=await J(this.storage,this.storageKey),{data:a,error:o}=await this._refreshAccessToken(e);if(o)throw o;if(!a.session)throw new W;const l=await J(this.storage,this.storageKey);if(r!==null&&(l===null||l.refresh_token!==r.refresh_token)){this._debug(i,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:l?"replaced":"cleared"});const g={data:null,error:new Vi};return this.refreshingDeferred.resolve(g),g}const p=this._sessionRemovalEpoch;if(await this._saveSession(a.session),this._sessionRemovalEpoch!==p){this._debug(i,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await Z(this.storage,this.storageKey),this.userStorage&&await Z(this.userStorage,this.storageKey+"-user");const g={data:null,error:new Vi};return this.refreshingDeferred.resolve(g),g}await this._notifyAllSubscribers("TOKEN_REFRESHED",a.session);const u={data:a.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(u),u}catch(r){if(this._debug(i,"error",r),_(r)){const a={data:null,error:r};if(!$s(r)){const o=await J(this.storage,this.storageKey);!!(o!=null&&o.expires_at&&o.expires_at*1e3>Date.now())?this._debug(i,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:a,expiresAt:Date.now()+Pl},(t=this.refreshingDeferred)===null||t===void 0||t.resolve(a),a}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(r),r}finally{this.refreshingDeferred=null,this._debug(i,"end")}}async _notifyAllSubscribers(e,t,n=!0){if(this._pendingInitNotifications!==null&&n){this._pendingInitNotifications.push({event:e,session:t,broadcast:n});return}const i=`#_notifyAllSubscribers(${e})`;this._debug(i,"begin",t,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:t});const r=[],a=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,t)}catch(l){r.push(l)}});if(await Promise.all(a),r.length>0){for(let o=0;o<r.length;o+=1)console.error(r[o]);throw r[0]}}finally{this._debug(i,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0;const t=Object.assign({},e),n=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&t.user&&await Re(this.userStorage,this.storageKey+"-user",{user:t.user});const i=Object.assign({},t);delete i.user;const r=Zi(i);await Re(this.storage,this.storageKey,r)}else{const i=Zi(t);await Re(this.storage,this.storageKey,i)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await Z(this.storage,this.storageKey),await oc(this.storage,this.storageKey),await Z(this.storage,this.storageKey+"-user"),this.userStorage&&await Z(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&G()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(t){console.error("removing visibilitychange callback failed",t)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),Ce);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const t=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const t=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,t&&clearTimeout(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async t=>{const{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const i=Math.floor((n.expires_at*1e3-e)/Ce);this._debug("#_autoRefreshTokenTick()",`access token expires in ${i} ticks, a tick lasts ${Ce}ms, refresh threshold is ${Ut} ticks`),i<=Ut&&await this._callRefreshToken(n.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof xc)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const e=Date.now();try{await this._useSession(async t=>{const{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const i=Math.floor((n.expires_at*1e3-e)/Ce);this._debug("#_autoRefreshTokenTick()",`access token expires in ${i} ticks, a tick lasts ${Ce}ms, refresh threshold is ${Ut} ticks`),i<=Ut&&await this._callRefreshToken(n.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!G()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const t=`#_onVisibilityChanged(${e})`;if(this._debug(t,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(t,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(t,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,n){let i=n==null?void 0:n.redirectTo,r=null,a=null,o=null;this.flowType==="pkce"&&([r,a,o]=await this._getCodeChallengeAndMethod(),i=this._maybeAppendFlowIdToRedirect(i,o));const l=[`provider=${encodeURIComponent(t)}`];if(i&&l.push(`redirect_to=${encodeURIComponent(i)}`),n!=null&&n.scopes&&l.push(`scopes=${encodeURIComponent(n.scopes)}`),r!=null&&a!=null){const c=new URLSearchParams({code_challenge:`${encodeURIComponent(r)}`,code_challenge_method:`${encodeURIComponent(a)}`});l.push(c.toString())}if(n!=null&&n.queryParams){const c=new URLSearchParams(n.queryParams);l.push(c.toString())}return n!=null&&n.skipBrowserRedirect&&l.push(`skip_http_redirect=${n.skipBrowserRedirect}`),{url:`${e}?${l.join("&")}`,flowId:o}}_maybeAppendFlowIdToRedirect(e,t){return!e||!t||!this.experimental.appendPkceFlowIdToRedirects?e??void 0:lc(e,t)}async _getCodeChallengeAndMethod(e=!1){return cc(this.storage,this.storageKey,e,t=>this._debug("#_getCodeChallengeAndMethod()","evicted oldest pending PKCE verifier slot",t))}async _unenroll(e){try{return await this._useSession(async t=>{var n;const{data:i,error:r}=t;return r?this._returnResult({data:null,error:r}):await E(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(n=i==null?void 0:i.session)===null||n===void 0?void 0:n.access_token})})}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}async _enroll(e){try{return await this._useSession(async t=>{var n,i;const{data:r,error:a}=t;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:l,error:c}=await E(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(n=r==null?void 0:r.session)===null||n===void 0?void 0:n.access_token});return c?this._returnResult({data:null,error:c}):(e.factorType==="totp"&&l.type==="totp"&&(!((i=l==null?void 0:l.totp)===null||i===void 0)&&i.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),this._returnResult({data:l,error:null}))})}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}async _verify(e){const t=async()=>{try{return await this._useSession(async n=>{var i;const{data:r,error:a}=n;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?or(e.webauthn.credential_response):lr(e.webauthn.credential_response)})}:{code:e.code}),{data:l,error:c}=await E(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:o,headers:this.headers,jwt:(i=r==null?void 0:r.session)===null||i===void 0?void 0:i.access_token});return c?this._returnResult({data:null,error:c}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+l.expires_in},l)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",l),this._returnResult({data:l,error:c}))})}catch(n){if(_(n))return this._returnResult({data:null,error:n});throw n}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,t):t()}async _challenge(e){const t=async()=>{try{return await this._useSession(async n=>{var i;const{data:r,error:a}=n;if(a)return this._returnResult({data:null,error:a});const o=await E(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(i=r==null?void 0:r.session)===null||i===void 0?void 0:i.access_token});if(o.error)return o;const{data:l}=o;if(l.type!=="webauthn")return{data:l,error:null};switch(l.webauthn.type){case"create":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:rr(l.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:ar(l.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(n){if(_(n))return this._returnResult({data:null,error:n});throw n}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,t):t()}async _challengeAndVerify(e){const{data:t,error:n}=await this._challenge({factorId:e.factorId});return n?this._returnResult({data:null,error:n}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){var e;const{data:{user:t},error:n}=await this.getUser();if(n)return{data:null,error:n};const i={all:[],phone:[],totp:[],webauthn:[]};for(const r of(e=t==null?void 0:t.factors)!==null&&e!==void 0?e:[])i.all.push(r),r.status==="verified"&&i[r.factor_type].push(r);return{data:i,error:null}}async _getAuthenticatorAssuranceLevel(e){var t,n,i,r;if(e)try{const{payload:f}=Ts(e);let h=null;f.aal&&(h=f.aal);let b=h;const{data:{user:y},error:v}=await this.getUser(e);if(v)return this._returnResult({data:null,error:v});((n=(t=y==null?void 0:y.factors)===null||t===void 0?void 0:t.filter(A=>A.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(b="aal2");const w=f.amr||[];return{data:{currentLevel:h,nextLevel:b,currentAuthenticationMethods:w},error:null}}catch(f){if(_(f))return this._returnResult({data:null,error:f});throw f}const{data:{session:a},error:o}=await this.getSession();if(o)return this._returnResult({data:null,error:o});if(!a)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:l}=Ts(a.access_token);let c=null;l.aal&&(c=l.aal);let p=c;((r=(i=a.user.factors)===null||i===void 0?void 0:i.filter(f=>f.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(p="aal2");const g=l.amr||[];return{data:{currentLevel:c,nextLevel:p,currentAuthenticationMethods:g},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{const{data:{session:n},error:i}=t;return i?this._returnResult({data:null,error:i}):n?await E(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:n.access_token,xform:r=>({data:r,error:null})}):this._returnResult({data:null,error:new W})})}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}async _approveAuthorization(e,t){try{return await this._useSession(async n=>{const{data:{session:i},error:r}=n;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new W});const a=await E(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:i.access_token,body:{action:"approve"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&G()&&!(t!=null&&t.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(n){if(_(n))return this._returnResult({data:null,error:n});throw n}}async _denyAuthorization(e,t){try{return await this._useSession(async n=>{const{data:{session:i},error:r}=n;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new W});const a=await E(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:i.access_token,body:{action:"deny"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&G()&&!(t!=null&&t.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(n){if(_(n))return this._returnResult({data:null,error:n});throw n}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:t},error:n}=e;return n?this._returnResult({data:null,error:n}):t?await E(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:i=>({data:i,error:null})}):this._returnResult({data:null,error:new W})})}catch(e){if(_(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{const{data:{session:n},error:i}=t;return i?this._returnResult({data:null,error:i}):n?(await E(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:n.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new W})})}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}async fetchJwk(e,t={keys:[]}){let n=t.keys.find(o=>o.kid===e);if(n)return n;const i=Date.now();if(n=this.jwks.keys.find(o=>o.kid===e),n&&this.jwks_cached_at+Ll>i)return n;const{data:r,error:a}=await E(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!r.keys||r.keys.length===0||(this.jwks=r,this.jwks_cached_at=i,n=r.keys.find(o=>o.kid===e),!n)?null:n}async getClaims(e,t={}){try{let n=e;if(!n){const{data:f,error:h}=await this.getSession();if(h||!f.session)return this._returnResult({data:null,error:h});n=f.session.access_token}const{header:i,payload:r,signature:a,raw:{header:o,payload:l}}=Ts(n);if(!(t!=null&&t.allowExpired))try{hc(r.exp)}catch(f){throw new Ms(f instanceof Error?f.message:"JWT validation failed")}const c=!i.alg||i.alg.startsWith("HS")||!i.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(i.kid,t!=null&&t.keys?{keys:t.keys}:t==null?void 0:t.jwks);if(!c){const{error:f}=await this.getUser(n);if(f)throw f;return{data:{claims:r,header:i,signature:a},error:null}}const p=pc(i.alg),u=await crypto.subtle.importKey("jwk",c,p,!0,["verify"]);if(!await crypto.subtle.verify(p,u,a,Gl(`${o}.${l}`)))throw new Ms("Invalid JWT signature");return{data:{claims:r,header:i,signature:a},error:null}}catch(n){if(_(n))return this._returnResult({data:null,error:n});throw n}}async signInWithPasskey(e){var t,n,i;de(this.experimental);try{if(!Us())return this._returnResult({data:null,error:new he("Browser does not support WebAuthn",null)});const{data:r,error:a}=await this._startPasskeyAuthentication({options:{captchaToken:(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.captchaToken}});if(a||!r)return this._returnResult({data:null,error:a});const o=ar(r.options),l=(i=(n=e==null?void 0:e.options)===null||n===void 0?void 0:n.signal)!==null&&i!==void 0?i:Fn.createNewAbortSignal(),{data:c,error:p}=await Wr({publicKey:o,signal:l});if(p||!c)return this._returnResult({data:null,error:p??new he("WebAuthn ceremony failed",null)});const u=lr(c);return this._verifyPasskeyAuthentication({challengeId:r.challenge_id,credential:u})}catch(r){if(_(r))return this._returnResult({data:null,error:r});throw r}}async registerPasskey(e){var t,n;de(this.experimental);try{if(!Us())return this._returnResult({data:null,error:new he("Browser does not support WebAuthn",null)});const{data:i,error:r}=await this._startPasskeyRegistration();if(r||!i)return this._returnResult({data:null,error:r});const a=rr(i.options),o=(n=(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.signal)!==null&&n!==void 0?n:Fn.createNewAbortSignal(),{data:l,error:c}=await qr({publicKey:a,signal:o});if(c||!l)return this._returnResult({data:null,error:c??new he("WebAuthn ceremony failed",null)});const p=or(l);return this._verifyPasskeyRegistration({challengeId:i.challenge_id,credential:p})}catch(i){if(_(i))return this._returnResult({data:null,error:i});throw i}}async _startPasskeyRegistration(){de(this.experimental);try{return await this._useSession(async e=>{const{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new W});const{data:i,error:r}=await E(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:t.access_token,body:{}});return r?this._returnResult({data:null,error:r}):this._returnResult({data:i,error:null})})}catch(e){if(_(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){de(this.experimental);try{return await this._useSession(async t=>{const{data:{session:n},error:i}=t;if(i)return this._returnResult({data:null,error:i});if(!n)return this._returnResult({data:null,error:new W});const{data:r,error:a}=await E(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:n.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:r,error:null})})}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}async _startPasskeyAuthentication(e){var t;de(this.experimental);try{const{data:n,error:i}=await E(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(t=e==null?void 0:e.options)===null||t===void 0?void 0:t.captchaToken}}});return i?this._returnResult({data:null,error:i}):this._returnResult({data:n,error:null})}catch(n){if(_(n))return this._returnResult({data:null,error:n});throw n}}async _verifyPasskeyAuthentication(e){de(this.experimental);try{const{data:t,error:n}=await E(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:ne});return n?this._returnResult({data:null,error:n}):(t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers("SIGNED_IN",t.session)),this._returnResult({data:t,error:null}))}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}async _listPasskeys(){de(this.experimental);try{return await this._useSession(async e=>{const{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new W});const{data:i,error:r}=await E(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:t.access_token,xform:a=>({data:a,error:null})});return r?this._returnResult({data:null,error:r}):this._returnResult({data:i,error:null})})}catch(e){if(_(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){de(this.experimental);try{return await this._useSession(async t=>{const{data:{session:n},error:i}=t;if(i)return this._returnResult({data:null,error:i});if(!n)return this._returnResult({data:null,error:new W});const{data:r,error:a}=await E(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:r,error:null})})}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}async _deletePasskey(e){de(this.experimental);try{return await this._useSession(async t=>{const{data:{session:n},error:i}=t;if(i)return this._returnResult({data:null,error:i});if(!n)return this._returnResult({data:null,error:new W});const{error:r}=await E(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,noResolveJson:!0});return r?this._returnResult({data:null,error:r}):this._returnResult({data:null,error:null})})}catch(t){if(_(t))return this._returnResult({data:null,error:t});throw t}}}ts.nextInstanceID={};const Fc=ts,Mc="2.112.3";let Bt="",zs;if(typeof Deno<"u"){var kn;Bt="deno",zs=(kn=Deno.version)===null||kn===void 0?void 0:kn.deno}else if(typeof document<"u")Bt="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")Bt="react-native";else{var Sn;Bt="node";const s=globalThis.process;zs=s==null||(Sn=s.version)===null||Sn===void 0?void 0:Sn.replace(/^v/,"")}const Kr=[`runtime=${Bt}`];zs&&Kr.push(`runtime-version=${zs}`);const Nc={"X-Client-Info":`supabase-js/${Mc}; ${Kr.join("; ")}`},Lc={headers:Nc},Uc={schema:"public"},Bc={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},zc={},Hc={enabled:!1,respectSamplingDecision:!0};function qc(s){if(!s||typeof s!="string")return null;const e=s.split("-");if(e.length!==4)return null;const[t,n,i,r]=e;if(t.length!==2||n.length!==32||i.length!==16||r.length!==2)return null;const a=/^[0-9a-f]+$/i;return!a.test(t)||!a.test(n)||!a.test(i)||!a.test(r)||n==="00000000000000000000000000000000"||i==="0000000000000000"?null:{version:t,traceId:n,parentId:i,traceFlags:r,isSampled:(parseInt(r,16)&1)===1}}function Wc(s,e){if(!s||!e||e.length===0)return!1;let t;if(s instanceof URL)t=s;else try{t=new URL(s)}catch{return!1}for(const n of e)try{if(typeof n=="string"){if(Kc(t.hostname,n))return!0}else if(n instanceof RegExp){if(n.test(t.hostname))return!0}else if(typeof n=="function"&&n(t))return!0}catch{continue}return!1}function Kc(s,e){if(e===s)return!0;if(e.startsWith("*.")){const t=e.slice(2);if(s.endsWith(t)&&(s===t||s.endsWith("."+t)))return!0}return!1}function Vc(s){const e=[];try{const t=new URL(s);e.push(t.hostname)}catch{}return e.push("*.supabase.co","*.supabase.in"),e.push("localhost","127.0.0.1","[::1]"),e}function ss(s){"@babel/helpers - typeof";return ss=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ss(s)}function Gc(s,e){if(ss(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var n=t.call(s,e);if(ss(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function Jc(s){var e=Gc(s,"string");return ss(e)=="symbol"?e:e+""}function Yc(s,e,t){return(e=Jc(e))in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function cr(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(s,i).enumerable})),t.push.apply(t,n)}return t}function B(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?cr(Object(t),!0).forEach(function(n){Yc(s,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):cr(Object(t)).forEach(function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(t,n))})}return s}const Xc=s=>s?(...e)=>s(...e):(...e)=>fetch(...e),Qc=()=>Headers,Vr=s=>s.startsWith("sb_publishable_")||s.startsWith("sb_secret_"),Zc="sb_temp_",dr=new Set,ed=s=>{var e,t;if(!s.startsWith("sb_")||Vr(s)||s.startsWith(Zc))return;const n=(e=(t=s.match(/^sb_[a-zA-Z0-9]+_/))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:"unknown";dr.has(n)||(dr.add(n),console.warn("@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type."))},ur=(s,e,t,n,i,r)=>{const a=Xc(n),o=Qc(),l=(i==null?void 0:i.enabled)===!0,c=(i==null?void 0:i.respectSamplingDecision)!==!1,p=l?Vc(e):null,u=!(r!=null&&r.omitApiKeyAsBearer&&Vr(s));return async(g,f)=>{const h=await t();let b=new o(f==null?void 0:f.headers);if(b.has("apikey")||b.set("apikey",s),!b.has("Authorization")){const y=h??(u?s:null);y&&b.set("Authorization",`Bearer ${y}`)}if(p){const y=td(g,p,c);y&&(y.traceparent&&!b.has("traceparent")&&b.set("traceparent",y.traceparent),y.tracestate&&!b.has("tracestate")&&b.set("tracestate",y.tracestate),y.baggage&&!b.has("baggage")&&b.set("baggage",y.baggage))}return a(g,B(B({},f),{},{headers:b}))}};let hr=!1,pr=!1;function td(s,e,t){const n=Za();if(!n)return hr||(hr=!0,console.warn("@supabase/supabase-js: tracePropagation is enabled but the tracing runtime is not loaded, so trace headers will not be attached. Add `import '@supabase/supabase-js/tracing'` at your application entry point (requires the OpenTelemetry API package to be installed). The CDN/UMD build does not support trace propagation.")),null;if(!Wc(typeof s=="string"||s instanceof URL?s:s.url,e))return null;const i=n();if(!i||!i.traceparent){var r;if(!(i==null||(r=i.carrierKeys)===null||r===void 0)&&r.length&&!pr){pr=!0;const a=i.carrierKeys.includes("sentry-trace")?" Sentry detected: set `propagateTraceparent: true` in Sentry.init() to emit it.":" Configure your tracing SDK to emit W3C trace context on outgoing requests.";console.warn(`@supabase/supabase-js: tracePropagation is enabled and a tracing SDK is active, but its propagator wrote [${i.carrierKeys.join(", ")}] and no W3C traceparent header, so trace headers will not be attached.`+a)}return null}if(t){const a=qc(i.traceparent);if(a&&!a.isSampled)return{traceparent:i.traceparent}}return i}function fr(s){return typeof s=="boolean"?{enabled:s}:s}function sd(s){return s.endsWith("/")?s:s+"/"}function nd(s,e){var t,n,i,r,a,o;const{db:l,auth:c,realtime:p,global:u}=s,{db:g,auth:f,realtime:h,global:b}=e,y=fr(s.tracePropagation),v=fr(e.tracePropagation),k={db:B(B({},g),l),auth:B(B({},f),c),realtime:B(B({},h),p),storage:{},global:B(B(B({},b),u),{},{headers:B(B({},(t=b==null?void 0:b.headers)!==null&&t!==void 0?t:{}),(n=u==null?void 0:u.headers)!==null&&n!==void 0?n:{})}),tracePropagation:{enabled:(i=(r=y==null?void 0:y.enabled)!==null&&r!==void 0?r:v==null?void 0:v.enabled)!==null&&i!==void 0?i:!1,respectSamplingDecision:(a=(o=y==null?void 0:y.respectSamplingDecision)!==null&&o!==void 0?o:v==null?void 0:v.respectSamplingDecision)!==null&&a!==void 0?a:!0},accessToken:async()=>""};return s.accessToken?k.accessToken=s.accessToken:delete k.accessToken,k}function id(s){const e=s==null?void 0:s.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(sd(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var rd=class extends Fc{constructor(s){super(s)}},ad=class{constructor(s,e,t){var n,i;this.supabaseUrl=s,this.supabaseKey=e;const r=id(s);if(!e)throw new Error("supabaseKey is required.");ed(e),this.realtimeUrl=new URL("realtime/v1",r),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",r),this.storageUrl=new URL("storage/v1",r),this.functionsUrl=new URL("functions/v1",r);const a=`sb-${r.hostname.split(".")[0]}-auth-token`,o={db:Uc,realtime:zc,auth:B(B({},Bc),{},{storageKey:a}),global:Lc,tracePropagation:Hc},l=nd(t??{},o);if(this.settings=l,this.storageKey=(n=l.auth.storageKey)!==null&&n!==void 0?n:"",this.headers=(i=l.global.headers)!==null&&i!==void 0?i:{},l.accessToken)this.accessToken=l.accessToken,this.auth=new Proxy({},{get:(p,u)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(u)} is not possible`)}});else{var c;this.auth=this._initSupabaseAuthClient((c=l.auth)!==null&&c!==void 0?c:{},this.headers,l.global.fetch)}this.fetch=ur(e,s,this._getSessionToken.bind(this),l.global.fetch,l.tracePropagation),this.functionsFetch=ur(e,s,this._getSessionToken.bind(this),l.global.fetch,l.tracePropagation,{omitApiKeyAsBearer:!0}),this.realtime=this._initRealtimeClient(B({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},l.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(p=>this.realtime.setAuth(p)).catch(p=>console.warn("Failed to set initial Realtime auth token:",p)),this.rest=new po(new URL("rest/v1",r).href,{headers:this.headers,schema:l.db.schema,fetch:this.fetch,timeout:l.db.timeout,urlLengthLimit:l.db.urlLengthLimit,retry:l.db.retry}),this.storage=new Il(this.storageUrl.href,this.headers,this.fetch,t==null?void 0:t.storage),l.accessToken||this._listenForAuthEvents()}get functions(){return new no(this.functionsUrl.href,{headers:this.headers,customFetch:this.functionsFetch})}from(s){return this.rest.from(s)}schema(s){return this.rest.schema(s)}rpc(s,e={},t={head:!1,get:!1,count:void 0}){return this.rest.rpc(s,e,t)}channel(s,e={config:{}}){return this.realtime.channel(s,e)}getChannels(){return this.realtime.getChannels()}removeChannel(s){return this.realtime.removeChannel(s)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getSessionToken(){var s=this,e,t;if(s.accessToken)return await s.accessToken();const{data:n}=await s.auth.getSession();return(e=(t=n.session)===null||t===void 0?void 0:t.access_token)!==null&&e!==void 0?e:null}async _getAccessToken(){var s=this,e;return(e=await s._getSessionToken())!==null&&e!==void 0?e:s.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:s,persistSession:e,detectSessionInUrl:t,storage:n,userStorage:i,storageKey:r,flowType:a,lock:o,debug:l,throwOnError:c,experimental:p,lockAcquireTimeout:u,skipAutoInitialize:g},f,h){const b={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new rd({url:this.authUrl.href,headers:B(B({},b),f),storageKey:r,autoRefreshToken:s,persistSession:e,detectSessionInUrl:t,storage:n,userStorage:i,flowType:a,lock:o,debug:l,throwOnError:c,experimental:p,fetch:h,lockAcquireTimeout:u,skipAutoInitialize:g,hasCustomAuthorizationHeader:Object.keys(this.headers).some(y=>y.toLowerCase()==="authorization")})}_initRealtimeClient(s){return new sl(this.realtimeUrl.href,B(B({},s),{},{params:B(B({},{apikey:this.supabaseKey}),s==null?void 0:s.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((s,e)=>{this._handleTokenChanged(s,"CLIENT",e==null?void 0:e.access_token)})}_handleTokenChanged(s,e,t){(s==="TOKEN_REFRESHED"||s==="SIGNED_IN"||s==="INITIAL_SESSION")&&this.changedAccessToken!==t?(this.changedAccessToken=t,this.realtime.setAuth(t)):s==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const od=(s,e,t)=>new ad(s,e,t);function ld(){if(typeof window<"u"||globalThis.Deno!==void 0)return!1;const s=globalThis.process;if(!s)return!1;const e=s.version;if(e==null)return!1;const t=e.match(/^v(\d+)\./);return t?parseInt(t[1],10)<=20:!1}ld()&&console.warn("⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715");function cd(){try{return"https://pmipcwurbabnqylquwoc.supabase.co"}catch{return}}function dd(){try{return"sb_publishable_Lqb3d2VqAphbfGt3UBnang_om5sQBVk"}catch{return}}class ud{constructor(e,t){this.client=null,this.currentUser=null,this.currentAccessToken=null,this.isLoading=!0,this.listeners=new Set;const n=e!==void 0?e:cd(),i=t!==void 0?t:dd();if(n&&i)try{this.client=od(n,i,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!0}}),this.client.auth.getSession().then(({data:r})=>{this.handleSession(r.session),this.isLoading=!1,this.notify()}),this.client.auth.onAuthStateChange((r,a)=>{this.handleSession(a),this.isLoading=!1,this.notify()})}catch(r){console.error("Failed to initialize Supabase Auth client:",r),this.isLoading=!1}else this.isLoading=!1}handleSession(e){e&&e.user?(this.currentUser={id:e.user.id,email:e.user.email},this.currentAccessToken=e.access_token):(this.currentUser=null,this.currentAccessToken=null)}notify(){const e=this.getAuthState();this.listeners.forEach(t=>t(e))}subscribe(e){return this.listeners.add(e),e(this.getAuthState()),()=>{this.listeners.delete(e)}}isConfigured(){return this.client!==null}getAuthState(){return{user:this.currentUser,accessToken:this.currentAccessToken,isAuthenticated:!!this.currentUser&&!!this.currentAccessToken,isLoading:this.isLoading}}getUser(){return this.currentUser}async getAccessToken(){if(!this.client)return null;try{const{data:e}=await this.client.auth.getSession();if(e.session)return this.currentAccessToken=e.session.access_token,e.session.access_token}catch{}return this.currentAccessToken}async signUp(e,t){if(!this.client)return{success:!1,message:"Supabase credentials are not configured."};try{const{data:n,error:i}=await this.client.auth.signUp({email:e.trim(),password:t});return i?{success:!1,message:i.message}:{success:!0,user:n.user||void 0}}catch(n){return{success:!1,message:n instanceof Error?n.message:String(n)}}}async signInWithPassword(e,t){if(!this.client)return{success:!1,message:"Supabase credentials are not configured."};try{const{data:n,error:i}=await this.client.auth.signInWithPassword({email:e.trim(),password:t});return i?{success:!1,message:i.message}:(this.handleSession(n.session),this.notify(),{success:!0})}catch(n){return{success:!1,message:n instanceof Error?n.message:String(n)}}}async signInWithOtp(e){if(!this.client)return{success:!1,message:"Supabase credentials are not configured."};try{const{error:t}=await this.client.auth.signInWithOtp({email:e.trim()});return t?{success:!1,message:t.message}:{success:!0,message:"Check your email for the magic login link!"}}catch(t){return{success:!1,message:t instanceof Error?t.message:String(t)}}}async signInWithOAuth(e="google"){if(!this.client)return{success:!1,message:"Supabase credentials are not configured."};try{const{error:t}=await this.client.auth.signInWithOAuth({provider:e,options:{redirectTo:window.location.origin}});return t?{success:!1,message:t.message}:{success:!0}}catch(t){return{success:!1,message:t instanceof Error?t.message:String(t)}}}async resetPasswordForEmail(e){if(!this.client)return{success:!1,message:"Supabase credentials are not configured."};try{const{error:t}=await this.client.auth.resetPasswordForEmail(e.trim(),{redirectTo:window.location.origin});return t?{success:!1,message:t.message}:{success:!0,message:"Password reset link sent to your email."}}catch(t){return{success:!1,message:t instanceof Error?t.message:String(t)}}}async signOut(){if(!this.client)return this.currentUser=null,this.currentAccessToken=null,this.notify(),{success:!0};try{const{error:e}=await this.client.auth.signOut();return e?{success:!1,message:e.message}:(this.currentUser=null,this.currentAccessToken=null,this.notify(),{success:!0})}catch(e){return{success:!1,message:e instanceof Error?e.message:String(e)}}}}const Y=new ud,En={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_SUPABASE_ANON_KEY:"sb_publishable_Lqb3d2VqAphbfGt3UBnang_om5sQBVk",VITE_SUPABASE_URL:"https://pmipcwurbabnqylquwoc.supabase.co",VITE_SYNC_URL:"https://practice-tracker-sync.warmsynthsiloveyou.workers.dev"},Xe=[{id:"guitar",name:"Guitar",color:"#6B7F6E",tier:"primary",updatedAt:new Date(0).toISOString()},{id:"piano",name:"Piano",color:"#8A7B94",tier:"primary",updatedAt:new Date(0).toISOString()},{id:"acoustic",name:"Acoustic Guitar",color:"#9FAF95",tier:"secondary",updatedAt:new Date(0).toISOString()},{id:"bass",name:"Bass",color:"#7D6E7F",tier:"secondary",updatedAt:new Date(0).toISOString()},{id:"drumming",name:"Finger Drumming",color:"#A98F72",tier:"secondary",updatedAt:new Date(0).toISOString()}],hd={id:"_removed",name:"Archived Instrument",color:"#C3C1B7",tier:"secondary",archived:!0,updatedAt:new Date(0).toISOString()},le={SESSIONS:"ptSessionsV2",INSTRUMENTS:"ptInstrumentsV1",ACTIVE:"ptActiveSessionV1",SETTINGS:"ptSettingsV1",TOMBSTONES:"ptTombstonesV1"};function pd(){try{return"https://practice-tracker-sync.warmsynthsiloveyou.workers.dev"}catch{return}}function fd(){try{return(En==null?void 0:En.VITE_SYNC_PASSCODE)||void 0}catch{return}}function vt(){try{if(typeof window<"u"&&window.localStorage)return window.localStorage;if(typeof localStorage<"u")return localStorage}catch{}return null}class gd{constructor(){this.instruments=[],this.sessions=[],this.activeSession=null,this.settings={soundEnabled:!0,hapticsEnabled:!0},this.tombstones=[],this.syncStatus="local",this.syncErrorMessage=null,this.listeners=new Set,this.currentSyncPromise=null,this.loadFromStorage(),this.initAuth()}subscribe(e){return this.listeners.add(e),()=>{this.listeners.delete(e)}}notify(){this.listeners.forEach(e=>e())}initAuth(){Y.subscribe(e=>{var t;if(!e.isLoading)if(e.isAuthenticated&&((t=e.user)!=null&&t.email)){const n=this.settings.userEmail;this.settings.userEmail=e.user.email,this.persistSettings(),n!==e.user.email&&this.syncWithCloud(!0).catch(i=>{console.warn("Initial cloud sync error after sign-in:",i)})}else!e.isAuthenticated&&this.settings.userEmail&&(this.instruments=[...Xe],this.sessions=[],this.activeSession=null,this.tombstones=[],this.settings.userEmail=void 0,this.settings.lastSyncedAt=void 0,this.syncStatus="local",this.syncErrorMessage=null,this.persistInstruments(),this.persistSessions(),this.persistActive(),this.persistTombstones(),this.persistSettings(),this.notify())})}getEffectiveWorkerUrl(){return this.settings.workerUrl||pd()}getEffectiveSyncPasscode(){return this.settings.syncPasscode||fd()}getSyncAuthHeaderSync(){const e=Y.getAuthState();return e.accessToken?`Bearer ${e.accessToken}`:this.getEffectiveSyncPasscode()}async getEffectiveAuthHeader(){const e=this.getSyncAuthHeaderSync();if(e)return e;const t=await Y.getAccessToken();if(t)return`Bearer ${t}`}isCloudSyncConfigured(){const e=!!this.getEffectiveWorkerUrl(),t=Y.getAuthState().isAuthenticated||!!this.getEffectiveSyncPasscode();return e&&t}getUserEmail(){var e;return((e=Y.getUser())==null?void 0:e.email)||this.settings.userEmail}isAuthenticated(){return Y.getAuthState().isAuthenticated}async signOut(){await Y.signOut()}loadFromStorage(){const e=vt();if(!e){this.instruments=[...Xe],this.sessions=[],this.syncStatus="local";return}try{const t=e.getItem(le.INSTRUMENTS);if(t){const o=JSON.parse(t);Array.isArray(o)&&o.length>0?this.instruments=o.map(l=>({...l,updatedAt:l.updatedAt||new Date(0).toISOString()})):this.instruments=[...Xe]}else this.instruments=[...Xe],this.persistInstruments();const n=e.getItem(le.SESSIONS);if(n){const o=JSON.parse(n);Array.isArray(o)?this.sessions=o.map(l=>({...l,updatedAt:l.updatedAt||new Date(0).toISOString()})):this.sessions=[]}else this.sessions=[];const i=e.getItem(le.ACTIVE);if(i){const o=JSON.parse(i);o&&o.instrumentId&&o.startedAt&&(this.activeSession=o)}const r=e.getItem(le.TOMBSTONES);if(r){const o=JSON.parse(r);Array.isArray(o)&&(this.tombstones=o)}const a=e.getItem(le.SETTINGS);a&&(this.settings={...this.settings,...JSON.parse(a)}),this.isCloudSyncConfigured()?this.syncStatus=typeof window<"u"&&typeof navigator<"u"&&navigator.onLine===!1?"offline":"synced":this.syncStatus="local"}catch(t){console.error("Error loading practice store from storage:",t),this.instruments=[...Xe],this.sessions=[],this.syncStatus="local"}}persistInstruments(){try{const e=vt();e==null||e.setItem(le.INSTRUMENTS,JSON.stringify(this.instruments))}catch(e){console.error("Error saving instruments:",e)}}persistSessions(){try{const e=vt();e==null||e.setItem(le.SESSIONS,JSON.stringify(this.sessions))}catch(e){console.error("Error saving sessions:",e)}}persistActive(){try{const e=vt();if(!e)return;this.activeSession?e.setItem(le.ACTIVE,JSON.stringify(this.activeSession)):e.removeItem(le.ACTIVE)}catch(e){console.error("Error saving active session:",e)}}persistSettings(){try{const e=vt();e==null||e.setItem(le.SETTINGS,JSON.stringify(this.settings))}catch(e){console.error("Error saving settings:",e)}}persistTombstones(){try{const e=vt();e==null||e.setItem(le.TOMBSTONES,JSON.stringify(this.tombstones))}catch(e){console.error("Error saving tombstones:",e)}}getActiveInstruments(){return this.instruments.filter(e=>!e.archived)}getAllInstruments(){return[...this.instruments]}getInstrument(e){return this.instruments.find(t=>t.id===e)||hd}getSessions(){return[...this.sessions]}getActiveSession(){return this.activeSession}getSettings(){return{...this.settings}}getSyncStatus(){return this.syncStatus}getSyncErrorMessage(){return this.syncErrorMessage}getLastSyncedAt(){return this.settings.lastSyncedAt||null}startSession(e){this.activeSession||(this.activeSession={instrumentId:e,startedAt:Date.now()},this.persistActive(),Ya(this.settings.soundEnabled),bn(20,this.settings.hapticsEnabled),this.notify())}endSession(e){if(!this.activeSession)return null;const t=Date.now(),n=Math.max(1,Math.round((t-this.activeSession.startedAt)/6e4)),i=new Date(t).toISOString(),r={id:"s-"+Math.random().toString(36).slice(2,9)+"-"+Date.now().toString(36),instrumentId:this.activeSession.instrumentId,start:new Date(this.activeSession.startedAt).toISOString(),end:i,duration:n,notes:e&&e.trim()?e.trim():void 0,updatedAt:i};return this.sessions=[r,...this.sessions],this.activeSession=null,this.persistSessions(),this.persistActive(),Ze(this.settings.soundEnabled),bn([30,50,30],this.settings.hapticsEnabled),this.notify(),this.triggerBackgroundSync(),r}discardSession(){this.activeSession&&(this.activeSession=null,this.persistActive(),me(this.settings.soundEnabled),this.notify())}logManualSession(e,t,n,i){const r=new Date(t.getTime()+Math.max(1,n)*6e4),a=new Date().toISOString(),o={id:"m-"+Math.random().toString(36).slice(2,9)+"-"+Date.now().toString(36),instrumentId:e,start:t.toISOString(),end:r.toISOString(),duration:Math.max(1,Math.round(n)),notes:(i==null?void 0:i.trim())||void 0,updatedAt:a};return this.sessions=[o,...this.sessions],this.persistSessions(),Ze(this.settings.soundEnabled),bn(25,this.settings.hapticsEnabled),this.notify(),this.triggerBackgroundSync(),o}updateSession(e){const t=new Date().toISOString(),n={...e,updatedAt:t};this.sessions=this.sessions.map(i=>i.id===e.id?n:i),this.persistSessions(),me(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}deleteSession(e){const t=new Date().toISOString();this.sessions=this.sessions.filter(n=>n.id!==e),this.tombstones=[...this.tombstones.filter(n=>n.id!==e),{id:e,type:"session",deletedAt:t}],this.persistSessions(),this.persistTombstones(),me(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}addInstrument(e,t,n){const i=e.trim(),r=Va(i)+"-"+Math.random().toString(36).slice(2,6),a=new Date().toISOString(),o={id:r,name:i,color:t,tier:n,updatedAt:a};return this.instruments=[...this.instruments,o],this.persistInstruments(),me(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync(),o}updateInstrument(e){const t=new Date().toISOString(),n={...e,updatedAt:t};this.instruments=this.instruments.map(i=>i.id===e.id?n:i),this.persistInstruments(),me(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}removeInstrument(e){if(this.getActiveInstruments().length<=1)return;this.activeSession&&this.activeSession.instrumentId===e&&(this.activeSession=null,this.persistActive());const n=new Date().toISOString();this.sessions.some(r=>r.instrumentId===e)?this.instruments=this.instruments.map(r=>r.id===e?{...r,archived:!0,updatedAt:n}:r):(this.instruments=this.instruments.filter(r=>r.id!==e),this.tombstones=[...this.tombstones.filter(r=>r.id!==e),{id:e,type:"instrument",deletedAt:n}],this.persistTombstones()),this.persistInstruments(),me(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}retireInstrument(e){if(this.getActiveInstruments().length<=1)return;const n=new Date().toISOString();this.instruments=this.instruments.map(i=>i.id===e?{...i,archived:!0,updatedAt:n}:i),this.persistInstruments(),me(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}restoreInstrument(e){const t=new Date().toISOString();this.instruments=this.instruments.map(n=>n.id===e?{...n,archived:!1,updatedAt:t}:n),this.persistInstruments(),me(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}renameInstrument(e,t){const n=t.trim();if(!n)return;const i=new Date().toISOString();this.instruments=this.instruments.map(r=>r.id===e?{...r,name:n,updatedAt:i}:r),this.persistInstruments(),this.notify(),this.triggerBackgroundSync()}updateSessionDurationAndNote(e,t,n){const i=new Date().toISOString();this.sessions=this.sessions.map(r=>r.id===e?{...r,duration:Math.max(1,t),notes:n!==void 0?n.trim()?n.trim():void 0:r.notes,updatedAt:i}:r),this.persistSessions(),me(this.settings.soundEnabled),this.notify(),this.triggerBackgroundSync()}async testConnection(e,t){const n=e!==void 0?e:this.getEffectiveWorkerUrl()||"";let i=t;return i===void 0&&(i=await this.getEffectiveAuthHeader()),Oi.testConnection(n,i)}triggerBackgroundSync(){this.isCloudSyncConfigured()&&!this.currentSyncPromise&&this.syncWithCloud().catch(e=>{console.warn("Background sync error:",e)})}async syncWithCloud(e=!1){if(this.currentSyncPromise){if(!e)return this.currentSyncPromise;await this.currentSyncPromise.catch(()=>{})}const t=this.getEffectiveWorkerUrl();if(!t)return this.syncStatus="local",this.notify(),{success:!0,message:"Local only mode (no worker configured)"};if(typeof window<"u"&&typeof navigator<"u"&&navigator.onLine===!1)return this.syncStatus="offline",this.notify(),{success:!1,message:"Device is offline"};this.currentSyncPromise=this.performSync(t,e);try{return await this.currentSyncPromise}finally{this.currentSyncPromise=null}}async performSync(e,t){this.syncStatus="syncing",this.syncErrorMessage=null,this.notify();try{const n=this.getSyncAuthHeaderSync(),i=t?null:this.settings.lastSyncedAt||null,r=new Set(this.tombstones.map(g=>g.id)),a=t||!i?this.instruments:this.instruments.filter(g=>!g.updatedAt||g.updatedAt>i),o=t||!i?this.sessions:this.sessions.filter(g=>!g.updatedAt||g.updatedAt>i),l={lastSyncedAt:i,instruments:a,sessions:o,tombstones:[...this.tombstones]},c=await Oi.sync(e,n,l),p=new Map(this.instruments.map(g=>[g.id,g]));for(const g of c.instruments){const f=p.get(g.id);if(!f)p.set(g.id,g);else{const h=f.updatedAt?new Date(f.updatedAt).getTime():0;(g.updatedAt?new Date(g.updatedAt).getTime():0)>=h&&p.set(g.id,{...f,...g})}}const u=new Map(this.sessions.map(g=>[g.id,g]));for(const g of c.sessions){const f=u.get(g.id);if(!f)u.set(g.id,g);else{const h=f.updatedAt?new Date(f.updatedAt).getTime():0;(g.updatedAt?new Date(g.updatedAt).getTime():0)>=h&&u.set(g.id,{...f,...g})}}for(const g of c.tombstones)g.type==="instrument"?p.delete(g.id):g.type==="session"&&u.delete(g.id);return this.instruments=Array.from(p.values()),this.sessions=Array.from(u.values()).sort((g,f)=>new Date(f.start).getTime()-new Date(g.start).getTime()),this.tombstones=this.tombstones.filter(g=>!r.has(g.id)),this.settings.lastSyncedAt=c.syncedAt,this.syncStatus="synced",this.syncErrorMessage=null,this.persistInstruments(),this.persistSessions(),this.persistTombstones(),this.persistSettings(),this.notify(),{success:!0}}catch(n){const i=n instanceof Error?n.message:String(n);return console.error("PracticeStore sync failed:",i),this.syncStatus="error",this.syncErrorMessage=i,this.notify(),{success:!1,message:i}}}disconnectCloudSync(){this.settings.workerUrl=void 0,this.settings.syncPasscode=void 0,this.settings.lastSyncedAt=void 0,this.syncStatus="local",this.syncErrorMessage=null,this.persistSettings(),this.notify()}updateSettings(e){this.settings={...this.settings,...e},this.persistSettings(),this.isCloudSyncConfigured()?this.syncStatus="synced":this.syncStatus="local",this.notify()}exportBackup(){const e={version:2,exportedAt:new Date().toISOString(),instruments:this.instruments,sessions:this.sessions,settings:this.settings};return JSON.stringify(e,null,2)}importBackup(e){try{const t=JSON.parse(e);if(!t||!Array.isArray(t.instruments)&&!Array.isArray(t.sessions))return{success:!1,message:"Invalid backup file format."};if(Array.isArray(t.instruments)&&t.instruments.length>0&&(this.instruments=t.instruments.map(n=>({...n,updatedAt:n.updatedAt||new Date().toISOString()})),this.persistInstruments()),Array.isArray(t.sessions)&&(this.sessions=t.sessions.map(n=>({...n,updatedAt:n.updatedAt||new Date().toISOString()})),this.persistSessions()),t.settings&&typeof t.settings=="object"){const{soundEnabled:n,hapticsEnabled:i}=t.settings;this.settings={...this.settings,soundEnabled:typeof n=="boolean"?n:this.settings.soundEnabled,hapticsEnabled:typeof i=="boolean"?i:this.settings.hapticsEnabled},this.persistSettings()}return this.activeSession=null,this.persistActive(),this.notify(),this.triggerBackgroundSync(),{success:!0,message:"Backup successfully restored."}}catch(t){return{success:!1,message:"Failed to parse JSON file: "+String(t)}}}loadDemoData(){this.instruments=[...Xe],this.persistInstruments();const e=Ga(new Date),t=[],n=new Date().toISOString();for(let a=33;a>=1;a--){const o=Ja(e,-a),l=o.getDay();if(!(Math.random()<.12)){if(l>=1&&l<=5){const c=Math.random()<.7?["guitar","piano"]:[Math.random()<.5?"guitar":"piano"];let p=7;c.forEach(u=>{const g=new Date(o);g.setHours(p,30+Math.floor(Math.random()*20),0,0);const f=12+Math.floor(Math.random()*25),h=new Date(g.getTime()+f*6e4);t.push({id:"seed-"+Math.random().toString(36).slice(2,8),instrumentId:u,start:g.toISOString(),end:h.toISOString(),duration:f,updatedAt:n}),p+=1})}else if(Math.random()<.75){const c=["acoustic","bass","drumming"][Math.floor(Math.random()*3)],p=new Date(o);p.setHours(11,Math.floor(Math.random()*40),0,0);const u=20+Math.floor(Math.random()*30),g=new Date(p.getTime()+u*6e4);t.push({id:"seed-"+Math.random().toString(36).slice(2,8),instrumentId:c,start:p.toISOString(),end:g.toISOString(),duration:u,updatedAt:n})}}}const i=new Date(e);i.setHours(7,40,0,0),t.unshift({id:"seed-today-guitar",instrumentId:"guitar",start:i.toISOString(),end:new Date(i.getTime()+22*6e4).toISOString(),duration:22,updatedAt:n});const r=new Date(e);r.setHours(8,15,0,0),t.unshift({id:"seed-today-piano",instrumentId:"piano",start:r.toISOString(),end:new Date(r.getTime()+18*6e4).toISOString(),duration:18,updatedAt:n}),this.sessions=t,this.activeSession=null,this.persistSessions(),this.persistActive(),this.notify(),this.triggerBackgroundSync()}clearAllData(){this.instruments=[...Xe],this.sessions=[],this.activeSession=null,this.tombstones=[],this.persistInstruments(),this.persistSessions(),this.persistTombstones(),this.persistActive(),this.notify()}}const I=new gd,Gr="pt-background",md="https://practice-tracker-sync.warmsynthsiloveyou.workers.dev";function bd(){const s=new Date;return`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function yd(){try{const s=localStorage.getItem(Gr);if(!s)return null;const e=JSON.parse(s);return e.url&&e.date?e:null}catch{return null}}function vd(s,e){localStorage.setItem(Gr,JSON.stringify({url:s,date:e}))}function gr(s){return new Promise((e,t)=>{const n=new Image;n.onload=()=>e(),n.onerror=()=>t(new Error("Image failed to load")),n.src=s})}async function wd(){const s=bd(),e=yd();if(e&&e.date===s)try{return await gr(e.url),e.url}catch{}try{const t=new AbortController,n=setTimeout(()=>t.abort(),8e3),i=await fetch(`${md.replace(/\/+$/,"")}/api/background`,{signal:t.signal});if(clearTimeout(n),!i.ok)return null;const r=await i.json();return r.url?(await gr(r.url),vd(r.url,s),r.url):null}catch{return null}}const We=De`
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
`,ce={clock:"M6.4 3.4h11.2M6.4 20.6h11.2M8.2 3.4v3.3c0 2.1 3.8 3.7 3.8 5.3s-3.8 3.2-3.8 5.3v3.3M15.8 3.4v3.3c0 2.1-3.8 3.7-3.8 5.3s3.8 3.2 3.8 5.3v3.3",note:"M12 2.9a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8M9.3 13.1 7.4 21.1 12 18.5l4.6 2.6-1.9-8",bolt:"M12 2.8c3.8 3.4 6 6 6 9.4a6 6 0 0 1-12 0c0-2 .9-3.6 2.3-5.2M12 20.2a2.7 2.7 0 0 0 2.7-2.7c0-1.7-1.4-2.7-2.7-4.6-1.3 1.9-2.7 2.9-2.7 4.6a2.7 2.7 0 0 0 2.7 2.7z",cal:"M12 3 20 5.7v6.5c0 4.3-3.3 7.4-8 8.8-4.7-1.4-8-4.5-8-8.8V5.7zM8.6 12.1l2.6 2.6 4.4-4.8",grid:"M3.3 7.8 7 11.6 12 4.2l5 7.4 3.7-3.8-1.7 10.9H5zM5.4 18.7h13.2",star:"M11.2 3c.9 4.4 1.9 5.4 6.3 6.3-4.4.9-5.4 1.9-6.3 6.3-.9-4.4-1.9-5.4-6.3-6.3C9.3 8.4 10.3 7.4 11.2 3M18.4 15.5c.4 1.9.8 2.3 2.7 2.7-1.9.4-2.3.8-2.7 2.7-.4-1.9-.8-2.3-2.7-2.7 1.9-.4 2.3-.8 2.7-2.7"};function q(s){const e=new Date(s);return e.setHours(0,0,0,0),e}function U(s,e){const t=new Date(s);return t.setDate(t.getDate()+e),t}function mr(s){const e=q(s);return U(e,-((e.getDay()+6)%7))}function L(s){if(s=Math.round(s),s<=0)return"0m";if(s<60)return s+"m";const e=Math.floor(s/60),t=s%60;return e+"h"+(t?" "+t+"m":"")}function _d(s){if(!s.length)return 0;const e=s.slice().sort((t,n)=>t-n);return e.length%2?e[(e.length-1)/2]:(e[e.length/2-1]+e[e.length/2])/2}function An(s){return s===0||s===24?"12am":s===12?"12pm":s<12?`${s}am`:`${s-12}pm`}function xd(s,e,t={}){const n=t.now||new Date,i=q(n),r=t.weeklyGoalMinutes||420,a=t.range||"month",o=t.mutedInstruments||{},l=e.filter(d=>!d.archived),c=new Map;e.forEach(d=>c.set(d.id,d));const p=d=>c.get(d)||{id:d,name:"Instrument",color:"#6B7F6E",tier:"primary"},u=s.filter(d=>!d.deletedAt).map(d=>({...d,t:new Date(d.start),min:Math.max(1,d.duration)})).sort((d,m)=>d.t.getTime()-m.t.getTime()),g=u.length>0,f={},h={};u.forEach(d=>{const m=q(d.t).getTime();f[m]=(f[m]||0)+d.min,h[m]||(h[m]={}),h[m][d.instrumentId]=(h[m][d.instrumentId]||0)+d.min});let b=0;const y=i.getTime(),k=!!f[y]?0:1;for(let d=k;d<400;d++){const m=U(i,-d).getTime();if(f[m])b++;else break}let w=0,A=0;for(let d=365;d>=0;d--){const m=U(i,-d).getTime();f[m]?(A++,w=Math.max(w,A)):A=0}w=Math.max(w,b);const N=Math.max(1,w-b+1),C=b<=0?"time to start a run":b===1?"day one, showing up":b>=w&&w>=3?"your longest run yet":b>=30?"a month unbroken":b>=14?"a fortnight of showing up":N<=2&&b>=3?N===1?"one more matches your best":`${N} more beats your best`:b%2===1?"nobody is watching, keep going":"stay steady on the fretboard",R=Math.max(60,...Object.values(f)),je=["S","M","T","W","T","F","S"],se=[];for(let d=13;d>=0;d--){const m=U(i,-d),S=f[m.getTime()]||0;se.push({h:S?Math.max(10,Math.round(S/R*100)):6,bg:S?d===0?"#4F6353":"#9FAF95":"#E1E1DB",label:je[m.getDay()],labelColor:d===0?"#23241F":"#B0AFA5",isToday:d===0})}const as=u.reduce((d,m)=>d+m.min,0),fe=as/60,os=fe<25||fe<50?25:fe<100?50:100,ls=(Math.floor(fe/os)+1)*os,Jr=Math.max(0,ls-os),Ct=Math.max(0,Math.round(ls*60-as)),Yr=as-Jr*60,Gs=Math.max(.02,Math.min(.98,Yr/(os*60))),Js=52,qn=2*Math.PI*Js,Xr=`${(qn*Gs).toFixed(1)} ${qn.toFixed(1)}`,Wn=(Gs*360-90)*(Math.PI/180),Qr=(59+Js*Math.cos(Wn)).toFixed(1),Zr=(59+Js*Math.sin(Wn)).toFixed(1),ea=U(i,-42),Rt=u.filter(d=>d.t>=ea),Kn=Rt.reduce((d,m)=>d+m.min,0)||1,Vn=l.map(d=>{const m=u.filter(D=>D.instrumentId===d.id),S=Rt.filter(D=>D.instrumentId===d.id),O=m[m.length-1],M=O?Math.round((i.getTime()-q(O.t).getTime())/864e5):99,P=S.reduce((D,ge)=>D+ge.min,0);return{...d,days:M,mins:P,share:P/Kn}}).slice().sort((d,m)=>m.days-d.days||d.share-m.share),F=Vn[0]||(l[0]?{...l[0],days:99,share:0,mins:0}:{id:"guitar",name:"Guitar",color:"#6B7F6E",tier:"primary",days:99,share:0,mins:0}),Ys=d=>d===0?"today":d===1?"yesterday":d>=99?"never":`${d}d ago`,ta=d=>d.days>=99?"Never logged yet. Start a session to break the ice.":d.days>=6?`Untouched for ${d.days} days — longest neglect in your kit.`:d.share<.12?`Only ${Math.round(d.share*100)}% of recent practice. It is slipping.`:`Last played ${Ys(d.days)}. Ready for another pass.`,sa={id:F.id,name:F.name,color:F.color,reason:ta(F)},na=new Set(u.filter(d=>d.instrumentId===F.id).map(d=>Math.round((i.getTime()-q(d.t).getTime())/864e5))),ia=Array.from({length:14},(d,m)=>{const S=13-m,O=na.has(S);return{h:O?"30px":S<F.days?"9px":"16px",bg:O?F.color:"rgba(242,241,236,0.18)"}}),ra={id:F.id,name:F.name,color:F.color,days:F.days,num:F.days>=99?"—":String(F.days),unit:F.days>=99?"not yet logged":F.days===1?"day since":"days since",ago:F.days>=99?"never logged":`last played ${Ys(F.days)}`,ticks:ia},ke=mr(i),Xs=d=>{const m=[0,0,0,0,0,0,0];return u.forEach(S=>{const O=Math.floor((q(S.t).getTime()-d.getTime())/864e5);O>=0&&O<7&&(m[O]+=S.min)}),m},Gn=d=>{let m=0;return d.map(S=>m+=S)},ct=Gn(Xs(ke)),Qs=[];for(let d=1;d<=8;d++)Qs.push(Gn(Xs(U(ke,-7*d))));const cs=[0,1,2,3,4,5,6].map(d=>Qs.length?_d(Qs.map(m=>m[d])):(d+1)*30),dt=Math.min(6,Math.max(0,Math.floor((i.getTime()-ke.getTime())/864e5))),Zs=Math.round(ct[dt]-cs[dt]),aa=Math.max(r,cs[6],ct[6],60)*1.08,Jn=(d,m,S,O)=>d.slice(0,m+1).map((M,P)=>`${(P/6*(S-12)+6).toFixed(1)},${(O-8-M/aa*(O-18)).toFixed(1)}`).join(" "),Ve=[];Ct>0&&Ct<=120&&Ve.push({mins:Ct,big:L(Ct),text:`to your ${ls}th hour of practice, all instruments counted`,on:F}),f[y]||(b+1>w&&w>=2?Ve.push({mins:15,big:"15m",text:`sets a new longest streak — ${b+1} days, further than you have ever gone`,on:F}):Ve.push({mins:15,big:"15m",text:`keeps the streak alive at ${b+1} days · ${Math.max(1,w-b)} from your record`,on:F}));const en=Math.round(cs[dt]-ct[dt]);en>0&&Ve.push({mins:en,big:L(en),text:"puts this week back ahead of your median pace",on:Vn[1]||F});const ds=Math.round(r-ct[6]);ds>0&&ds<=150&&Ve.push({mins:ds,big:L(ds),text:`and the weekly goal of ${L(r)} is done`,on:l[0]||F}),Ve.push({mins:20,big:"20m",text:`ends the ${F.days>=99?"silence":`${F.days}-day gap`} on this instrument`,on:F});const oa=Ve.sort((d,m)=>d.mins-m.mins).slice(0,3).map(d=>({big:d.big,text:d.text,instId:d.on.id,instName:d.on.name,instColor:d.on.color,mins:d.mins})),Yn=[0,0,0,0,0,0,0],Xn=[0,0,0,0,0,0,0];for(let d=0;d<84;d++){const m=U(i,-d),S=(m.getDay()+6)%7;Yn[S]+=f[m.getTime()]||0,Xn[S]++}const ut=Yn.map((d,m)=>d/(Xn[m]||1)),la=Math.max(1,...ut),Qn=ut.indexOf(Math.max(...ut)),Zn=ut.indexOf(Math.min(...ut)),tn=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ca=ut.map((d,m)=>({label:tn[m][0],val:L(d),h:Math.max(8,Math.round(d/la*100)),bg:m===Qn?"#4F6353":m===Zn?"#D9C7C0":"#9FAF95",strong:m===(i.getDay()+6)%7?700:500})),sn=[{label:"<25m",min:0,max:25},{label:"25–40",min:25,max:40},{label:"40–55",min:40,max:55},{label:"55–75",min:55,max:75},{label:"75m+",min:75,max:9999}],us=sn.map(d=>Rt.filter(m=>m.min>=d.min&&m.min<d.max).length),da=Math.max(1,...us),ei=us.indexOf(Math.max(...us)),ua=us.map((d,m)=>({label:sn[m].label,n:d,h:Math.max(6,Math.round(d/da*100)),bg:m===ei?"#4F6353":"#C6CFBF"})),hs=u.slice().sort((d,m)=>m.min-d.min)[0]||{min:0,t:n,instrumentId:"guitar"},ti=[];for(let d=0;d<16;d++){const m=U(ke,-7*d);ti.push({m,v:Xs(m).reduce((S,O)=>S+O,0)})}const nn=ti.slice().sort((d,m)=>m.v-d.v)[0]||{m:ke,v:0},rn=Object.keys(f).sort((d,m)=>(f[Number(m)]||0)-(f[Number(d)]||0))[0],si=rn?new Date(Number(rn)):i,ni=[{k:"LONGEST SESSION",v:L(hs.min),sub:`${p(hs.instrumentId).name} · ${hs.t.toLocaleDateString(void 0,{day:"numeric",month:"short"})}`,fresh:Math.round((i.getTime()-q(hs.t).getTime())/864e5)<=21},{k:"BIGGEST WEEK",v:L(nn.v),sub:`week of ${nn.m.toLocaleDateString(void 0,{day:"numeric",month:"short"})}`,fresh:Math.round((i.getTime()-q(nn.m).getTime())/864e5)<=21},{k:"LONGEST STREAK",v:`${w} ${w===1?"day":"days"}`,sub:b>=w&&b>=3?"you are on it now":`${b}d in currently`,fresh:b>=w&&b>=3},{k:"BIGGEST DAY",v:L(f[Number(rn)]||0),sub:si.toLocaleDateString(void 0,{day:"numeric",month:"short"}),fresh:Math.round((i.getTime()-q(si).getTime())/864e5)<=21}],Ge=ni.filter(d=>d.fresh),ha=Ge.length?`${Ge.length} set recently`:"nothing new in three weeks",pa=Ge.length===0?"No reading has moved in three weeks. One long sitting would change that.":Ge[0].k==="LONGEST STREAK"?`Your longest streak is the one you are standing in right now — ${w} days and counting.`:`New ${Ge[0].k.toLowerCase()}: ${Ge[0].v}, ${Ge[0].sub.toLowerCase()}. That one is yours to beat now.`,Fe=Array.from({length:24},()=>({min:0,by:{}}));Rt.forEach(d=>{const m=d.t.getHours();Fe[m].min+=d.min,Fe[m].by[d.instrumentId]=(Fe[m].by[d.instrumentId]||0)+d.min});const fa=Math.max(1,...Fe.map(d=>d.min));let an=0,ps=18;for(let d=0;d<24;d++){const m=Fe[d].min+Fe[(d+1)%24].min+Fe[(d+2)%24].min;m>an&&(an=m,ps=d)}const Se=Array.from({length:25},(d,m)=>Fe[(m+4)%24].min),ii=720,It=124,Me=d=>d/24*ii,ht=d=>It-14-d/fa*(It-34);let fs=`M ${Me(0).toFixed(1)} ${ht(Se[0]).toFixed(1)}`;for(let d=1;d<Se.length;d++){const m=(Me(d-1)+Me(d))/2,S=(ht(Se[d-1])+ht(Se[d]))/2;fs+=` Q ${Me(d-1).toFixed(1)} ${ht(Se[d-1]).toFixed(1)} ${m.toFixed(1)} ${S.toFixed(1)}`}fs+=` L ${Me(24).toFixed(1)} ${ht(Se[24]).toFixed(1)}`;const ga=`${fs} L ${ii} ${It} L 0 ${It} Z`,Pt=(n.getHours()+n.getMinutes()/60-4+24)%24,ma=Se[Math.floor(Pt)]+(Se[Math.ceil(Pt)]-Se[Math.floor(Pt)])*(Pt%1),ba=(ps-4+24)%24,Ne={};Rt.forEach(d=>{if(!d.notes||!d.notes.trim())return;const m=d.notes.trim();Ne[m]||(Ne[m]={n:0,min:0,last:d.t,instId:d.instrumentId}),Ne[m].n++,Ne[m].min+=d.min,d.t>Ne[m].last&&(Ne[m].last=d.t)});const ya=Object.keys(Ne).map(d=>({k:d,...Ne[d]})).sort((d,m)=>m.min-d.min).slice(0,7).map(d=>({name:d.k,mins:L(d.min),color:p(d.instId).color,ago:Ys(Math.round((i.getTime()-q(d.last).getTime())/864e5)),size:(12+Math.min(7,d.min/50)).toFixed(1)+"px"})),Le=[],ri=(d,m)=>{let S=0;for(const O of d)if(S+=O.min,S/60>=m)return O.t;return null},ai=d=>{const m=Math.round((i.getTime()-q(d).getTime())/864e5);return m<=1?"cleared today":m<=30?`cleared ${m} days ago`:m<=70?"cleared about two months ago":`cleared ${Math.round(m/30)} months ago`},oi="#8A7B94",li="#4F6353",ci="#A8814F",di="#B4543C",Dt=(d,m,S,O,M,P)=>Le.push({id:"m"+Le.length,done:!0,accent:d,icon:m,kind:S,title:O,detail:M,when:P?P.getTime():0,dateLabel:P?P.toLocaleDateString(void 0,{day:"numeric",month:"short",year:"2-digit"}):"",isNew:!!P&&Math.round((i.getTime()-q(P).getTime())/864e5)<=21}),jt=(d,m,S,O,M,P,D)=>Le.push({id:"m"+Le.length,done:!1,accent:d,icon:m,kind:S,title:O,detail:D,when:0,dateLabel:"",isNew:!1,pct:Math.max(2,Math.min(98,Math.round(M/P*100))),pctLabel:`${Math.min(99,Math.round(M/P*100))}%`}),ui=[25,50,100,250,500,1e3],on=ui.filter(d=>fe>=d);if(on.length){const d=on[on.length-1],m=ri(u,d);Dt(oi,ce.clock,"BANKED HOURS",`${d} hours banked`,m?ai(m):"cleared",m)}const gs=ui.find(d=>fe<d);if(gs){const d=gs-fe;jt(oi,ce.clock,"BANKED HOURS",`${gs} hours banked`,fe,gs,d<1?`${Math.round(d*60)}m to go`:`${Math.ceil(d)}h to go`)}l.forEach(d=>{const m=u.filter(D=>D.instrumentId===d.id),S=m.reduce((D,ge)=>D+ge.min,0)/60,O=[10,25,50,100,200],M=O.filter(D=>S>=D);if(M.length){const D=M[M.length-1],ge=ri(m,D);Dt(d.color,ce.note,d.name.toUpperCase(),`${D} hours on ${d.name.toLowerCase()}`,ge?ai(ge):"cleared",ge)}const P=O.find(D=>S<D);if(P){const D=P-S;jt(d.color,ce.note,d.name.toUpperCase(),`${P} hours on ${d.name.toLowerCase()}`,S,P,D<1?`${Math.round(D*60)}m to go`:`${Math.ceil(D)}h to go`)}});const hi=[7,14,30,60,100],ln=hi.filter(d=>w>=d);if(ln.length){const d=ln[ln.length-1];Dt(li,ce.bolt,"STREAK",`${d} days unbroken`,b>=w?"still running today":"your longest run so far",b>=w?i:null)}const ms=hi.find(d=>w<d);ms&&jt(li,ce.bolt,"STREAK",`${ms} days unbroken`,b,ms,`${ms-b} more days without a gap`);const bs={};for(let d=0;d<200;d++){const m=U(i,-d),S=`${m.getFullYear()}-${m.getMonth()}`,O=bs[S]||(bs[S]={miss:0,seen:0,d:m});O.seen++,f[m.getTime()]||O.miss++}const ys=Object.values(bs).filter(d=>d.miss===0&&d.seen>=28);if(ys.length)Dt(ci,ce.cal,"NO GAPS",`${ys.length} ${ys.length===1?"month":"months"} with no gaps`,"not a single day missed",ys[0].d);else{const d=bs[`${i.getFullYear()}-${i.getMonth()}`];d&&jt(ci,ce.cal,"NO GAPS","A month with no gaps",d.seen-d.miss,d.seen,`${d.miss} ${d.miss===1?"day":"days"} missed this month`)}let vs=null;for(let d=0;d<26&&!vs;d++){const m=U(ke,-7*d),S=new Set;u.forEach(O=>{O.t>=m&&O.t<U(m,7)&&S.add(O.instrumentId)}),S.size>=l.length&&l.length>=2&&(vs=m)}if(vs)Dt(di,ce.grid,"WHOLE KIT","Every instrument in one week",`all ${l.length} of them, that week`,vs);else if(l.length>=2){const d=new Set;u.forEach(m=>{m.t>=ke&&d.add(m.instrumentId)}),jt(di,ce.grid,"WHOLE KIT","Every instrument in one week",d.size,l.length,`${l.length-d.size} still untouched this week`)}const pi=u[0],Ft=mr(pi?pi.t:U(i,-182)),cn=Math.max(12,Math.min(36,Math.round((ke.getTime()-Ft.getTime())/(7*864e5))+1)),va=Math.max(45,...Object.values(f)),dn=[];for(let d=0;d<cn;d++)for(let m=0;m<7;m++){const S=U(Ft,d*7+m),O=S.getTime(),M=f[O]||0,P=M&&h[O]?Object.keys(h[O]).sort((Sa,Ea)=>h[O][Ea]-h[O][Sa])[0]:null,D=S>i,ge=O===y;dn.push({date:S,bg:D?"transparent":M&&P?p(P).color:"#E3E2DB",op:M?(.34+.66*Math.min(1,M/va)).toFixed(2):"1",ring:ge?"1.5px solid #4F6353":"1.5px solid transparent",anim:ge?"breathe 5.2s ease-in-out infinite":"none",mark:!1,icon:"",markStroke:"none",cursor:"default"})}Le.filter(d=>d.done&&d.when>0).sort((d,m)=>m.when-d.when).forEach(d=>{const m=Math.round((q(new Date(d.when)).getTime()-Ft.getTime())/864e5),S=dn[m];S&&!S.mark&&(S.mark=!0,S.bg=d.accent,S.op="1",S.icon=d.icon,S.markStroke="#FAFAF7",S.ring=`1.5px solid ${d.accent}88`,S.anim=d.isNew?"breathe 5.2s ease-in-out infinite":"none",S.cursor="pointer",S.milestoneId=d.id)});const fi=[];for(let d=0;d<cn;d+=4)fi.push({label:U(Ft,d*7).toLocaleDateString(void 0,{month:"short"})});const wa=`since ${Ft.toLocaleDateString(void 0,{day:"numeric",month:"long"})} · ${cn} weeks`,gi={week:7,month:35,quarter:91,year:365},Ee=[];if(a==="week")for(let d=6;d>=0;d--){const m=U(i,-d);Ee.push({from:m,to:U(m,1),label:je[m.getDay()],now:d===0,by:{},total:0})}else if(a==="year")for(let d=11;d>=0;d--){const m=new Date(i.getFullYear(),i.getMonth()-d,1),S=new Date(i.getFullYear(),i.getMonth()-d+1,1);Ee.push({from:m,to:S,label:m.toLocaleDateString(void 0,{month:"narrow"}),now:d===0,by:{},total:0})}else{const d=a==="month"?5:13;for(let m=d-1;m>=0;m--){const S=U(ke,-7*m);Ee.push({from:S,to:U(S,7),label:`${S.getDate()}/${S.getMonth()+1}`,now:m===0,by:{},total:0})}}u.forEach(d=>{for(const m of Ee)if(d.t>=m.from&&d.t<m.to){o[d.instrumentId]||(m.by[d.instrumentId]=(m.by[d.instrumentId]||0)+d.min,m.total+=d.min);break}});const mi=Math.max(1,...Ee.map(d=>d.total)),bi=Ee.slice().sort((d,m)=>m.total-d.total)[0],_a=Ee.map(d=>({label:d.label,labelColor:d.now?"#23241F":"#A3A297",labelWeight:d.now?700:500,segments:l.filter(m=>d.by[m.id]&&!o[m.id]).map(m=>({h:(d.by[m.id]/mi*100).toFixed(1),color:m.color,instId:m.id}))})),ws=a==="year"?U(i,-365):U(i,-gi[a]),pt=u.filter(d=>d.t>=ws&&!o[d.instrumentId]).reduce((d,m)=>d+m.min,0)||0,un=u.filter(d=>d.t>=U(ws,-gi[a])&&d.t<ws&&!o[d.instrumentId]).reduce((d,m)=>d+m.min,0),hn=un?Math.round((pt-un)/un*100):0,xa=l.map(d=>{const S=u.filter(M=>M.instrumentId===d.id&&M.t>=ws).reduce((M,P)=>M+P.min,0),O=Ee.map((M,P)=>{const D=M.by[d.id]||0;return`${(P/Math.max(1,Ee.length-1)*96+2).toFixed(1)},${(32-D/mi*30).toFixed(1)}`}).join(" ");return{id:d.id,name:d.name,color:d.color,minsLabel:L(S),shareLabel:`${pt?Math.round(S/pt*100):0}%`,sharePct:pt?Math.min(100,Math.round(S/pt*100)):0,spark:O,opacity:o[d.id]?.34:1,isMuted:!!o[d.id]}}).sort((d,m)=>m.sharePct-d.sharePct),ka={week:"Week",month:"Month",quarter:"Quarter",year:"Year"};return{streak:b,bestStreak:w,toBeat:N,quip:C,last14:se,lifeHours:`${Math.floor(fe)}h`,lifeHoursRaw:fe,lifeSub:`${L(as%60)} past the hour · ${u.length} sessions`,nextMile:`${ls}h`,mileGap:L(Ct),milePct:Gs,ringDash:Xr,capX:Qr,capY:Zr,oneAway:oa,drift:ra,pick:sa,heatMarked:dn,heatMonths:fi,heatSince:wa,milestones:Le,msCount:`${Le.filter(d=>d.done).length} earned · ${Le.filter(d=>!d.done).length} to go`,weekTotal:L(ct[dt]),goalLabel:L(r),paceDelta:`${Zs>=0?"+":"−"}${L(Math.abs(Zs))}`,paceColor:Zs>=0?"#4F6353":"#B4543C",medianPts:Jn(cs,6,320,90),actualPts:Jn(ct,dt,320,90),dow:ca,dowBestLabel:tn[Qn],dowWorstLabel:tn[Zn],records:ni,freshLine:pa,freshCount:ha,hist:ua,modeLabel:sn[ei].label,dayCurve:fs,dayArea:ga,bandX:Me(ba).toFixed(1),bandW:(Me(3)-Me(0)).toFixed(1),nowLeft:`${(Pt/24*100).toFixed(2)}%`,nowTop:`${(ht(ma)/It*100).toFixed(2)}%`,windowLabel:`${An(ps)} – ${An((ps+3)%24)}`,windowShare:`${Math.round(an/Kn*100)}%`,dayTicks:[4,8,12,16,20,0].map(d=>({label:An(d)})),themes:ya,buckets:_a,peakLabel:L(bi?bi.total:0),chartTitle:a==="week"?"Minutes per day":a==="year"?"Minutes per month":"Minutes per week",scopeTotal:L(pt),scopeCaption:`${ka[a].toUpperCase()} TO DATE`,scopeDelta:`${hn>=0?"+":"−"}${Math.abs(hn)}% vs previous`,scopeDeltaColor:hn>=0?"#4F6353":"#B4543C",instRows:xa,hasData:g}}var kd=Object.defineProperty,Sd=Object.getOwnPropertyDescriptor,pe=(s,e,t,n)=>{for(var i=n>1?void 0:n?Sd(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&kd(e,t,i),i};let te=class extends ie{constructor(){super(...arguments),this.instruments=[],this.sessions=[],this.activeSession=null,this.now=Date.now(),this.range="month",this.mutedInstruments={},this.activeMsId=null,this.quickLogOpen=!1,this.recentEndedSession=null,this.toastTimeout=null}handleStart(s){this.dispatchEvent(new CustomEvent("start-session",{detail:{instrumentId:s},bubbles:!0,composed:!0}))}handleEnd(){if(!this.activeSession)return;const s=this.instruments.find(t=>{var n;return t.id===((n=this.activeSession)==null?void 0:n.instrumentId)}),e=Math.max(1,Math.round((Date.now()-this.activeSession.startedAt)/6e4));this.dispatchEvent(new CustomEvent("end-session",{bubbles:!0,composed:!0})),this.recentEndedSession={id:"ended-"+Date.now(),name:(s==null?void 0:s.name)||"Session",mins:e,notes:""},this.toastTimeout&&clearTimeout(this.toastTimeout),this.toastTimeout=setTimeout(()=>{this.recentEndedSession=null,this.requestUpdate()},12e3)}handleDiscard(){this.dispatchEvent(new CustomEvent("discard-session",{bubbles:!0,composed:!0}))}handleSaveToastNotes(s){var t;s.preventDefault();const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".toast-input");if(e&&e.value.trim()&&this.sessions.length>0){const n=this.sessions[0];this.dispatchEvent(new CustomEvent("edit-session",{detail:{session:{...n,notes:e.value.trim()}},bubbles:!0,composed:!0}))}this.recentEndedSession=null}handleQuickPastLog(s,e,t){this.dispatchEvent(new CustomEvent("quick-log-session",{detail:{instrumentId:s,duration:e,daysAgo:t},bubbles:!0,composed:!0}))}toggleMute(s){this.mutedInstruments={...this.mutedInstruments,[s]:!this.mutedInstruments[s]}}render(){var f;const s=xd(this.sessions,this.instruments,{range:this.range,mutedInstruments:this.mutedInstruments,now:new Date(this.now)}),e=!!this.activeSession,t=e?this.instruments.find(h=>{var b;return h.id===((b=this.activeSession)==null?void 0:b.instrumentId)}):null,n=e?Math.max(0,Math.floor((this.now-(((f=this.activeSession)==null?void 0:f.startedAt)||0))/1e3)):0,i=String(Math.floor(n/60)).padStart(2,"0"),r=String(n%60).padStart(2,"0"),a=`${i}:${r}`,o=s.milestones.find(h=>h.id===this.activeMsId),l=o?o.title:`${s.milestones.filter(h=>h.done&&h.when>0).length} milestones stamped on the calendar above`,c=o?o.done?`${o.detail}${o.dateLabel?` · ${o.dateLabel}`:""}`:`${o.detail} · ${o.pctLabel} of the way`:"Hover or tap any marked calendar day or milestone pill below to view details.",p=o?o.icon:ce.star,u=o&&o.done?o.accent:"#E7E6DF",g=o&&o.done?"#FAFAF7":"#B0AFA4";return x`
      <div class="bench-wrap">

        <!-- Live Start Bar -->
        <div class="live-start-bar ${e?"running":""}">
          ${e?x`
                <div class="running-indicator-wrap">
                  <span class="running-pulse-dot"></span>
                  <div class="running-inst-name">${(t==null?void 0:t.name)||"Instrument"}</div>
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
              `:x`
                <div class="start-chips-group">
                  ${this.instruments.filter(h=>!h.archived).map(h=>x`
                        <div
                          class="inst-chip"
                          @click=${()=>this.handleStart(h.id)}
                          title="Start ${h.name} practice session"
                        >
                          <span class="inst-dot" style="background: ${h.color};"></span>
                          <span>${h.name}</span>
                        </div>
                      `)}
                </div>

                <div class="live-start-actions">
                  <button
                    class="btn-start-primary"
                    @click=${()=>this.handleStart(s.pick.id)}
                  >
                    <span>Start</span>
                    <span>${s.pick.name}</span>
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
        ${this.quickLogOpen?x`
              <div class="quick-log-panel">
                <div class="quick-log-header">
                  <span class="quick-log-title">1-Tap Past Practice Log for ${s.pick.name}</span>
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
                    ${[15,20,30,45,60].map(h=>x`
                        <span
                          class="quick-chip"
                          @click=${()=>{this.handleQuickPastLog(s.pick.id,h,1),this.quickLogOpen=!1}}
                        >
                          ${h}m
                        </span>
                      `)}
                  </div>
                  <div class="quick-log-row">
                    <span class="quick-log-row-label">2 days ago:</span>
                    ${[15,20,30,45,60].map(h=>x`
                        <span
                          class="quick-chip"
                          @click=${()=>{this.handleQuickPastLog(s.pick.id,h,2),this.quickLogOpen=!1}}
                        >
                          ${h}m
                        </span>
                      `)}
                  </div>
                </div>
              </div>
            `:""}

        <!-- Post-Session Inline Toast -->
        ${this.recentEndedSession?x`
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
            ${["week","month","quarter","year"].map(h=>x`
                <button
                  class="range-tab-btn ${this.range===h?"active":""}"
                  @click=${()=>this.range=h}
                >
                  ${h.charAt(0).toUpperCase()+h.slice(1)}
                </button>
              `)}
          </div>
          <div class="scope-summary-label">
            ${s.scopeCaption} · <strong>${s.scopeTotal}</strong> ·
            <span style="color: ${s.scopeDeltaColor}; font-weight: 700;">
              ${s.scopeDelta}
            </span>
          </div>
        </div>

        <!-- 4-Column Card Grid -->
        <div class="bench-cards-grid">
          <!-- 1. Day Streak Card (Span 2) -->
          <div class="bench-card card-span-2">
            <div class="bench-card-header">
              <span class="card-label">Day Streak</span>
              <span class="card-sub-label">best ${s.bestStreak}d</span>
            </div>
            <div class="streak-val-row">
              <div class="streak-huge-num">${s.streak}</div>
              <div class="streak-quip-text">${s.quip}</div>
            </div>
            <div class="bars-14-row">
              ${s.last14.map(h=>x`
                  <div class="bar-14-col">
                    <div
                      class="bar-14-fill"
                      style="height: ${h.h}%; background: ${h.bg};"
                    ></div>
                    <span style="font-size: 9.5px; color: ${h.labelColor}; font-weight: ${h.isToday?700:500};">
                      ${h.label}
                    </span>
                  </div>
                `)}
            </div>
          </div>

          <!-- 2. Lifetime Banked Hours & Ring (Span 2) -->
          <div class="bench-card card-span-2">
            <div class="bench-card-header">
              <span class="card-label">Every hour you have logged</span>
              <span class="card-sub-label">${s.nextMile} goal</span>
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
                    stroke-dasharray="${s.ringDash}"
                  ></circle>
                  <circle
                    cx="${s.capX}"
                    cy="${s.capY}"
                    r="5"
                    fill="#6B7F6E"
                    opacity="0.3"
                    style="transform-box: fill-box; transform-origin: center; animation: halo 6s ease-out infinite;"
                  ></circle>
                </svg>
                <div class="ring-center-content">
                  <div class="ring-life-num">${s.lifeHours}</div>
                  <div class="ring-life-tag">BANKED</div>
                </div>
              </div>
              <div style="min-width: 0;">
                <div class="banked-info-title">${s.mileGap} to ${s.nextMile}</div>
                <div class="banked-info-sub">${s.lifeSub}</div>
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
              ${s.oneAway.map(h=>x`
                  <div class="one-away-item" @click=${()=>this.handleStart(h.instId)}>
                    <div class="one-away-top">
                      <div class="one-away-big">${h.big}</div>
                      <div class="one-away-inst">
                        <span style="width: 7px; height: 7px; border-radius: 50%; background: ${h.instColor}; flex-shrink: 0;"></span>
                        <span style="font-size: 13px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                          ${h.instName}
                        </span>
                      </div>
                    </div>
                    <div class="one-away-desc">${h.text}</div>
                  </div>
                `)}
            </div>
          </div>

          <!-- 4. Stacked Range Bar Chart (Span 4) -->
          <div class="bench-card card-span-4">
            <div class="bench-card-header">
              <span class="card-label">${s.chartTitle}</span>
              <span class="card-sub-label">peak ${s.peakLabel}</span>
            </div>
            <div class="stacked-chart-area">
              ${s.buckets.map(h=>x`
                  <div class="stacked-bar-col">
                    ${h.segments.map(b=>x`
                        <span
                          class="stacked-segment"
                          style="height: ${b.h}%; background: ${b.color};"
                        ></span>
                      `)}
                  </div>
                `)}
            </div>
            <div class="stacked-labels-row">
              ${s.buckets.map(h=>x`
                  <span
                    class="stacked-label-item"
                    style="color: ${h.labelColor}; font-weight: ${h.labelWeight};"
                  >
                    ${h.label}
                  </span>
                `)}
            </div>
          </div>

          <!-- 5. 26-Week Calendar Heatmap with Milestone Pins (Span 4) -->
          <div class="bench-card card-span-4">
            <div class="bench-card-header">
              <span class="card-label">Every Day on Record · Milestones Marked Where They Landed</span>
              <span class="card-sub-label">${s.heatSince}</span>
            </div>
            <div class="heatmap-grid">
              ${s.heatMarked.map(h=>x`
                  <div
                    class="heat-cell"
                    style="background: ${h.bg}; opacity: ${h.op}; outline: ${h.ring}; outline-offset: 1px; animation: ${h.anim}; cursor: ${h.cursor};"
                    @mouseenter=${()=>{h.milestoneId&&(this.activeMsId=h.milestoneId)}}
                    @mouseleave=${()=>{this.activeMsId===h.milestoneId&&(this.activeMsId=null)}}
                    @click=${()=>{h.milestoneId&&(this.activeMsId=this.activeMsId===h.milestoneId?null:h.milestoneId)}}
                  >
                    ${h.mark?x`
                          <svg viewBox="0 0 24 24" fill="none" stroke="${h.markStroke}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="${h.icon}"></path>
                          </svg>
                        `:""}
                  </div>
                `)}
            </div>
            <div class="heat-months-row">
              ${s.heatMonths.map(h=>x`<div>${h.label}</div>`)}
            </div>

            <!-- Interactive Milestone Preview Banner -->
            <div class="ms-preview-banner">
              <div class="ms-badge-icon-box" style="background: ${u};">
                <svg viewBox="0 0 24 24" style="width: 20px; height: 20px;" fill="none" stroke="${g}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="${p}"></path>
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
              <span class="card-sub-label">${s.msCount}</span>
            </div>
            <div class="ms-legend-wrap">
              ${s.milestones.map(h=>x`
                  <div
                    class="ms-legend-pill"
                    style="border: ${this.activeMsId===h.id?"1px solid #23241F":`1px solid ${h.done?h.accent+"3D":"#E4E3DC"}`}; background: ${this.activeMsId===h.id?"#F4F3ED":"transparent"};"
                    @mouseenter=${()=>this.activeMsId=h.id}
                    @mouseleave=${()=>{this.activeMsId===h.id&&(this.activeMsId=null)}}
                    @click=${()=>{this.activeMsId=this.activeMsId===h.id?null:h.id}}
                  >
                    <span class="ms-legend-icon-mini" style="background: ${h.done?h.accent:"#E7E6DF"};">
                      <svg viewBox="0 0 24 24" style="width: 12px; height: 12px;" fill="none" stroke="${h.done?"#FAFAF7":"#B0AFA4"}" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                        <path d="${h.icon}"></path>
                      </svg>
                    </span>
                    <span style="font-size: 11.5px; color: ${h.done?"#4A4945":"#A3A297"};">
                      ${h.title}
                    </span>
                    <span style="font-size: 10px; color: #A3A297;">
                      ${h.done?h.dateLabel||"cleared":h.pctLabel}
                    </span>
                  </div>
                `)}
            </div>
          </div>

          <!-- 6. This Week vs Your Median (Span 2) -->
          <div class="bench-card card-span-2">
            <div class="bench-card-header">
              <span class="card-label">This Week vs Your Median</span>
              <span style="font-size: 11.5px; font-weight: 700; color: ${s.paceColor};">
                ${s.paceDelta}
              </span>
            </div>
            <div style="display: flex; align-items: baseline; gap: 9px; margin-top: 4px;">
              <div style="font-size: 34px; font-weight: 700; letter-spacing: -0.03em;">
                ${s.weekTotal}
              </div>
              <div style="font-size: 13px; color: #767668;">of ${s.goalLabel} goal</div>
            </div>
            <svg viewBox="0 0 320 90" class="pace-svg-box">
              <polyline
                points="${s.medianPts}"
                fill="none"
                stroke="#C9C8BF"
                stroke-width="2"
                stroke-dasharray="5 5"
                stroke-linecap="round"
              ></polyline>
              <polyline
                points="${s.actualPts}"
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
              ${s.dow.map(h=>x`
                  <div class="dow-col">
                    <div style="font-size: 10px; color: #767668;">${h.val}</div>
                    <div class="dow-bar-fill" style="height: ${h.h}%; background: ${h.bg};"></div>
                    <div style="font-size: 11px; font-weight: ${h.strong}; color: #4A4945;">
                      ${h.label}
                    </div>
                  </div>
                `)}
            </div>
            <div style="font-size: 12.5px; color: #767668; margin-top: 12px; line-height: 1.45;">
              ${s.dowBestLabel} is your strongest day. ${s.dowWorstLabel} is where the hours go missing.
            </div>
          </div>

          <!-- 8. Records Shelf (Span 2) -->
          <div class="bench-card card-span-2">
            <div class="bench-card-header">
              <span class="card-label">Records</span>
              <span class="card-sub-label">${s.freshCount}</span>
            </div>
            <div class="records-2x2-grid">
              ${s.records.map(h=>x`
                  <div>
                    <div class="record-k-tag">
                      <span>${h.k}</span>
                      ${h.fresh?x`<span class="record-pill-new">NEW</span>`:""}
                    </div>
                    <div class="record-v-val">${h.v}</div>
                    <div class="record-sub-text">${h.sub}</div>
                  </div>
                `)}
            </div>
            <div class="records-fresh-footer">
              <span class="records-accent-bar"></span>
              <div style="font-size: 12.5px; color: #5A594F; line-height: 1.5;">
                ${s.freshLine}
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
              ${s.hist.map(h=>x`
                  <div class="dow-col">
                    <div style="font-size: 10.5px; color: #767668;">${h.n}</div>
                    <div class="dow-bar-fill" style="height: ${h.h}%; background: ${h.bg};"></div>
                    <div style="font-size: 10.5px; color: #4A4945;">${h.label}</div>
                  </div>
                `)}
            </div>
            <div style="font-size: 12.5px; color: #767668; margin-top: 12px; line-height: 1.45;">
              Most sittings land in ${s.modeLabel}. A longer one is a record waiting.
            </div>
          </div>

          <!-- 10. Play This Next (Drift Card) (Span 2) -->
          <div class="drift-card card-span-2">
            <div class="drift-top-row">
              <span class="drift-tag">PLAY THIS NEXT</span>
              <span style="width: 8px; height: 8px; border-radius: 50%; background: ${s.drift.color};"></span>
            </div>

            <div class="drift-num-row">
              <div class="drift-big-num">${s.drift.num}</div>
              <div class="drift-unit-label">${s.drift.unit}</div>
            </div>

            <div class="drift-ticks-row">
              ${s.drift.ticks.map(h=>x`
                  <span class="drift-tick" style="height: ${h.h}; background: ${h.bg};"></span>
                `)}
            </div>

            <div style="display: flex; flex-direction: column; gap: 14px;">
              <div>
                <div class="drift-inst-name">${s.drift.name}</div>
                <div class="drift-ago-sub">${s.drift.ago}</div>
              </div>
              <button class="btn-drift-action" @click=${()=>this.handleStart(s.drift.id)}>
                <span>Pick it up</span>
                <svg viewBox="0 0 24 24" style="width: 15px; height: 15px;" fill="none" stroke="#23241F" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4.5 12h14M13 6.5l5.5 5.5L13 17.5"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- 11. Kit Share Breakdown & Interactive Mute (Span 2) -->
          <div class="bench-card card-span-2">
            <div class="bench-card-header">
              <span class="card-label">Kit Share · Tap to Mute One</span>
              <span class="card-sub-label">${this.range}</span>
            </div>
            <div class="kit-share-list">
              ${s.instRows.map(h=>x`
                  <div
                    class="kit-share-row"
                    style="opacity: ${h.opacity};"
                    @click=${()=>this.toggleMute(h.id)}
                    title="${h.isMuted?"Unmute":"Mute"} ${h.name} in chart"
                  >
                    <span class="inst-dot" style="background: ${h.color};"></span>
                    <div style="flex: 1; min-width: 0;">
                      <div style="display: flex; justify-content: space-between; gap: 8px;">
                        <span style="font-size: 12.5px; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                          ${h.name}
                        </span>
                        <span style="font-size: 11.5px; color: #767668; flex-shrink: 0;">
                          ${h.minsLabel} · ${h.shareLabel}
                        </span>
                      </div>
                      <div class="kit-share-progress-track">
                        <span
                          class="kit-share-progress-fill"
                          style="width: ${h.sharePct}%; background: ${h.color};"
                        ></span>
                      </div>
                    </div>
                    <svg width="54" height="22" viewBox="0 0 100 34" preserveAspectRatio="none" style="flex-shrink: 0; overflow: visible;">
                      <polyline
                        points="${h.spark}"
                        fill="none"
                        stroke="${h.color}"
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
                <strong style="color: #23241F;">${s.windowShare}</strong> of every minute falls between ${s.windowLabel}
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
                <rect x="${s.bandX}" y="0" width="${s.bandW}" height="124" fill="#8A7B94" opacity="0.11" rx="7"></rect>
                <path d="${s.dayArea}" fill="url(#rhythmFill)"></path>
                <path d="${s.dayCurve}" fill="none" stroke="#4F6353" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <div class="rhythm-now-dot" style="left: ${s.nowLeft}; top: ${s.nowTop};"></div>
              <div class="rhythm-now-halo" style="left: ${s.nowLeft}; top: ${s.nowTop};"></div>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 6px; font-size: 10.5px; color: #A3A297;">
              ${s.dayTicks.map(h=>x`<div>${h.label}</div>`)}
            </div>
          </div>

          <!-- 13. From Your Notes (Themes) (Span 4) -->
          <div class="bench-card card-span-4">
            <div class="bench-card-header">
              <span class="card-label">From Your Notes · What You Have Been Working On</span>
              <span class="card-sub-label">recent tags</span>
            </div>
            <div class="themes-cloud">
              ${s.themes.length>0?s.themes.map(h=>x`
                      <div class="theme-pill">
                        <span class="theme-dot" style="background: ${h.color};"></span>
                        <span style="font-size: ${h.size}; font-weight: 700; letter-spacing: -0.01em; white-space: nowrap;">
                          ${h.name}
                        </span>
                        <span style="font-size: 11px; color: #A3A297; white-space: nowrap;">
                          ${h.mins} · ${h.ago}
                        </span>
                      </div>
                    `):x`
                    <div style="font-size: 13px; color: #767668; padding: 6px 0;">
                      Add session notes or tags when ending practice (e.g. <em>"barre chords"</em>, <em>"Bach invention"</em>) to see themes aggregate here.
                    </div>
                  `}
            </div>
          </div>
        </div>
      </div>
    `}};te.styles=[We,De`
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
    `];pe([H({type:Array})],te.prototype,"instruments",2);pe([H({type:Array})],te.prototype,"sessions",2);pe([H({type:Object})],te.prototype,"activeSession",2);pe([H({type:Number})],te.prototype,"now",2);pe([T()],te.prototype,"range",2);pe([T()],te.prototype,"mutedInstruments",2);pe([T()],te.prototype,"activeMsId",2);pe([T()],te.prototype,"quickLogOpen",2);pe([T()],te.prototype,"recentEndedSession",2);pe([T()],te.prototype,"toastTimeout",2);te=pe([qe("pt-main-view")],te);var Ed=Object.defineProperty,Ad=Object.getOwnPropertyDescriptor,_e=(s,e,t,n)=>{for(var i=n>1?void 0:n?Ad(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&Ed(e,t,i),i};let re=class extends ie{constructor(){super(...arguments),this.instruments=[],this.sessions=[],this.newOpen=!1,this.newInstId="",this.newMin=30,this.newDayBack=1,this.newNote="",this.openRowId=null,this.editNoteDraft=""}handleToggleNew(){var s;this.newOpen=!this.newOpen,this.newOpen&&!this.newInstId&&this.instruments.length>0&&(this.newInstId=((s=this.instruments.filter(e=>!e.archived)[0])==null?void 0:s.id)||this.instruments[0].id)}handleAddPastSession(){if(!this.newInstId)return;const e=U(q(new Date),-this.newDayBack);e.setHours(19,0,0,0),this.dispatchEvent(new CustomEvent("save-manual-session",{detail:{instrumentId:this.newInstId,start:e,duration:this.newMin,notes:this.newNote.trim()||void 0},bubbles:!0,composed:!0})),this.newOpen=!1,this.newNote=""}handleToggleRow(s,e){this.openRowId===s?this.openRowId=null:(this.openRowId=s,this.editNoteDraft=e||"")}handleSetDuration(s,e){this.dispatchEvent(new CustomEvent("update-session",{detail:{session:{...s,duration:e}},bubbles:!0,composed:!0}))}handleSaveNotes(s){this.dispatchEvent(new CustomEvent("update-session",{detail:{session:{...s,notes:this.editNoteDraft.trim()||void 0}},bubbles:!0,composed:!0})),this.openRowId=null}handleDelete(s){this.dispatchEvent(new CustomEvent("delete-session",{detail:{sessionId:s},bubbles:!0,composed:!0})),this.openRowId=null}render(){var b;const s=this.instruments.filter(y=>!y.archived),e=new Map;this.instruments.forEach(y=>e.set(y.id,y));const t=y=>e.get(y)||{id:y,name:"Instrument",color:"#6B7F6E",tier:"primary"},n=this.sessions.filter(y=>!y.deletedAt).map(y=>({...y,t:new Date(y.start),min:Math.max(1,y.duration)})).sort((y,v)=>v.t.getTime()-y.t.getTime()),i=n.reduce((y,v)=>y+v.min,0),r=n.length,a=q(new Date),o=y=>Math.round((a.getTime()-q(y).getTime())/864e5),l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p=y=>{let v=y.getHours();const k=v>=12?"pm":"am";return v=v%12||12,`${v}:${String(y.getMinutes()).padStart(2,"0")}${k}`},u=new Map;n.forEach(y=>{const v=q(y.t).getTime();let k=u.get(v);k||(k={key:v,t:y.t,rows:[],min:0},u.set(v,k)),k.min+=y.min,k.rows.push(y)});const g=Array.from(u.values()),f=[15,30,45,60,90],h=this.newInstId||((b=s[0])==null?void 0:b.id);return x`
      <div class="log-wrap">
        <!-- Summary & Toggle Bar -->
        <div class="log-summary-card">
          <div class="log-header-row">
            <div>
              <div class="log-tag">The Log</div>
              <div class="log-total-title">${L(i)}</div>
              <div class="log-count-sub">${r} sessions logged in total</div>
            </div>
            <button class="btn-toggle-new" @click=${this.handleToggleNew}>
              ${this.newOpen?"✕ Cancel":"+ Log a past session"}
            </button>
          </div>

          <!-- New Past Session Collapsible Form -->
          ${this.newOpen?x`
                <div class="new-panel">
                  <div class="form-section-title">What did you play?</div>
                  <div class="pills-wrap">
                    ${s.map(y=>{const v=h===y.id;return x`
                        <div
                          class="inst-select-pill"
                          style="background: ${v?y.color:"#FBFBF9"}; color: ${v?"#FBFBF9":"#23241F"}; border-color: ${v?y.color:"#E7E6DF"};"
                          @click=${()=>this.newInstId=y.id}
                        >
                          ${y.name}
                        </div>
                      `})}
                  </div>

                  <div style="display: flex; gap: 20px; flex-wrap: wrap; align-items: center;">
                    <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                      ${[{d:0,label:"Today"},{d:1,label:"Yesterday"},{d:2,label:"2 days ago"},{d:3,label:"3 days ago"}].map(y=>x`
                          <button
                            class="chip-btn ${this.newDayBack===y.d?"active":"inactive"}"
                            @click=${()=>this.newDayBack=y.d}
                          >
                            ${y.label}
                          </button>
                        `)}
                    </div>

                    <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                      ${f.map(y=>x`
                          <button
                            class="chip-btn ${this.newMin===y?"active":"inactive"}"
                            @click=${()=>this.newMin=y}
                          >
                            ${y}m
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
                      @input=${y=>this.newNote=y.target.value}
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
          ${g.length>0?g.map(y=>{const v=o(y.t),k=v===0?"today":v===1?"yesterday":`${v}d ago`,w=`${l[y.t.getDay()]} ${y.t.getDate()} ${c[y.t.getMonth()]}`;return x`
                  <div class="log-group-card">
                    <div class="group-header">
                      <div class="group-date-title">
                        ${w} <span class="group-rel-tag">· ${k}</span>
                      </div>
                      <div class="group-total-num">${L(y.min)}</div>
                    </div>

                    <div style="display: flex; flex-direction: column;">
                      ${y.rows.map(A=>{const N=t(A.instrumentId),C=this.openRowId===A.id;return x`
                          <div class="log-row-container ${C?"open":""}">
                            <div class="log-row-main" @click=${()=>this.handleToggleRow(A.id,A.notes)}>
                              <div class="row-time">${p(A.t)}</div>
                              <span class="row-dot" style="background: ${N.color};"></span>
                              <div class="row-inst-name">${N.name}</div>
                              <div class="row-duration">${L(A.min)}</div>
                              <div
                                class="row-note"
                                style="color: ${A.notes?"#4A4945":"#B0AFA4"};"
                              >
                                ${A.notes||"add a note"}
                              </div>
                            </div>

                            ${C?x`
                                  <div class="inline-editor-drawer">
                                    <div style="display: flex; align-items: center; gap: 7px; flex-wrap: wrap;">
                                      <span style="font-size: 9.5px; letter-spacing: 0.13em; color: #A3A297; font-weight: 700; margin-right: 4px;">LENGTH</span>
                                      ${f.map(R=>x`
                                          <button
                                            class="chip-btn ${A.min===R?"active":"inactive"}"
                                            @click=${()=>this.handleSetDuration(A,R)}
                                          >
                                            ${R}m
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
                                        @input=${R=>this.editNoteDraft=R.target.value}
                                        @keydown=${R=>{R.key==="Enter"&&this.handleSaveNotes(A)}}
                                      />
                                      <button class="btn-del-row" @click=${()=>this.handleDelete(A.id)}>
                                        Delete
                                      </button>
                                      <button class="btn-done-row" @click=${()=>this.handleSaveNotes(A)}>
                                        Done
                                      </button>
                                    </div>
                                  </div>
                                `:""}
                          </div>
                        `})}
                    </div>
                  </div>
                `}):x`
                <div class="log-summary-card" style="text-align: center; color: #767668; padding: 36px 20px;">
                  No practice sessions logged yet. Use <strong>+ Log a past session</strong> above or start a live timer in <strong>Practice</strong>.
                </div>
              `}
        </div>
      </div>
    `}};re.styles=[We,De`
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
    `];_e([H({type:Array})],re.prototype,"instruments",2);_e([H({type:Array})],re.prototype,"sessions",2);_e([T()],re.prototype,"newOpen",2);_e([T()],re.prototype,"newInstId",2);_e([T()],re.prototype,"newMin",2);_e([T()],re.prototype,"newDayBack",2);_e([T()],re.prototype,"newNote",2);_e([T()],re.prototype,"openRowId",2);_e([T()],re.prototype,"editNoteDraft",2);re=_e([qe("pt-log-view")],re);var $d=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,rs=(s,e,t,n)=>{for(var i=n>1?void 0:n?Td(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&$d(e,t,i),i};const Od=["#8A7B94","#6B7F6E","#A98F72","#7D6E7F","#9FAF95","#B4543C"];let at=class extends ie{constructor(){super(...arguments),this.instruments=[],this.sessions=[],this.addName="",this.addColor="#8A7B94"}handleAdd(){const s=this.addName.trim();s&&(this.dispatchEvent(new CustomEvent("add-instrument",{detail:{name:s,color:this.addColor,tier:"primary"},bubbles:!0,composed:!0})),this.addName="")}handleRename(s,e){const t=e.trim();if(!t)return;const n=this.instruments.find(i=>i.id===s);!n||n.name===t||this.dispatchEvent(new CustomEvent("update-instrument",{detail:{instrument:{...n,name:t}},bubbles:!0,composed:!0}))}handleRetire(s){this.dispatchEvent(new CustomEvent("retire-instrument",{detail:{id:s},bubbles:!0,composed:!0}))}handleRestore(s){this.dispatchEvent(new CustomEvent("restore-instrument",{detail:{id:s},bubbles:!0,composed:!0}))}render(){const s=q(new Date),e=o=>Math.round((s.getTime()-q(o).getTime())/864e5),t=o=>o===0?"today":o===1?"yesterday":o>=99?"never played":`${o}d ago`,n=this.instruments.filter(o=>!o.archived),i=this.instruments.filter(o=>o.archived),r=o=>{const l=this.sessions.filter(g=>g.instrumentId===o&&!g.deletedAt),c=l.reduce((g,f)=>g+Math.max(1,f.duration),0),p=l.sort((g,f)=>new Date(f.start).getTime()-new Date(g.start).getTime())[0],u=p?new Date(p.start):null;return{hours:c>0?L(c):"nothing yet",last:u?`last played ${t(e(u))}`:"never played"}},a=this.addName.trim().length>0;return x`
      <div class="kit-wrap">
        <!-- Active Kit Card -->
        <div class="kit-card">
          <div class="kit-header-row">
            <span class="kit-tag">Active Kit</span>
            <span class="kit-sub-tag">${n.length} active · click a name to rename</span>
          </div>

          <div class="kit-rows-list">
            ${n.map(o=>{const l=r(o.id);return x`
                <div class="kit-inst-row">
                  <span class="inst-dot" style="background: ${o.color};"></span>
                  <input
                    type="text"
                    class="inst-name-input"
                    .value=${o.name}
                    @change=${c=>this.handleRename(o.id,c.target.value)}
                    @keydown=${c=>{c.key==="Enter"&&c.target.blur()}}
                  />
                  <div class="inst-hours-col">${l.hours}</div>
                  <div class="inst-last-col">${l.last}</div>
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
              ${Od.map(o=>x`
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
        ${i.length>0?x`
              <div class="kit-card">
                <div class="kit-header-row">
                  <span class="kit-tag">Retired · History Kept</span>
                  <span class="kit-sub-tag">${i.length} archived</span>
                </div>

                <div class="kit-rows-list">
                  ${i.map(o=>{const l=r(o.id);return x`
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
    `}};at.styles=[We,De`
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
    `];rs([H({type:Array})],at.prototype,"instruments",2);rs([H({type:Array})],at.prototype,"sessions",2);rs([T()],at.prototype,"addName",2);rs([T()],at.prototype,"addColor",2);at=rs([qe("pt-kit-view")],at);var Cd=Object.defineProperty,Rd=Object.getOwnPropertyDescriptor,ot=(s,e,t,n)=>{for(var i=n>1?void 0:n?Rd(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&Cd(e,t,i),i};const Id=[180,300,420,600];let Ie=class extends ie{constructor(){super(...arguments),this.settings={soundEnabled:!0,hapticsEnabled:!0,weekStartsOnSunday:!1,weeklyGoalMinutes:420},this.authState={user:null,accessToken:null,isAuthenticated:!1,isLoading:!1},this.syncStatus="synced",this.sessionCount=0,this.isSyncing=!1,this.magicSentEmail=null}setMagicLinkSent(s){this.magicSentEmail=s}handleOpenAuthModal(){this.dispatchEvent(new CustomEvent("open-auth-modal",{bubbles:!0,composed:!0}))}handleToggle(s){const e={...this.settings,[s]:!this.settings[s]};this.dispatchEvent(new CustomEvent("update-settings",{detail:e,bubbles:!0,composed:!0}))}handleSetGoal(s){const e={...this.settings,weeklyGoalMinutes:s};this.dispatchEvent(new CustomEvent("update-settings",{detail:e,bubbles:!0,composed:!0}))}handleSignOut(){this.dispatchEvent(new CustomEvent("sign-out",{bubbles:!0,composed:!0})),this.magicSentEmail=null}handleSyncNow(){this.isSyncing=!0,this.dispatchEvent(new CustomEvent("sync-now",{bubbles:!0,composed:!0})),setTimeout(()=>{this.isSyncing=!1},1200)}handleExportBackup(){const s=I.exportBackup(),e=new Blob([s],{type:"application/json"}),t=URL.createObjectURL(e),n=document.createElement("a");n.href=t,n.download=`practice-tracker-backup-${new Date().toISOString().slice(0,10)}.json`,n.click(),URL.revokeObjectURL(t)}handleImportClick(){var e;const s=(e=this.shadowRoot)==null?void 0:e.querySelector("#import-file-input");s==null||s.click()}handleFileSelected(s){var i;const e=s.target,t=(i=e.files)==null?void 0:i[0];if(!t)return;const n=new FileReader;n.onload=r=>{var o;const a=(o=r.target)==null?void 0:o.result;a&&I.importBackup(a),e.value=""},n.readAsText(t)}handleLoadDemoData(){confirm("Load sample practice history? This will generate demonstration sessions to preview all charts and milestones.")&&I.loadDemoData()}handleClearAllData(){confirm("Clear all practice history from this device? This cannot be undone.")&&I.clearAllData()}render(){var i;const s=this.authState.isAuthenticated,e=((i=this.authState.user)==null?void 0:i.email)||this.settings.userEmail||"",t=(e||"PT").slice(0,2).toUpperCase(),n=this.settings.weeklyGoalMinutes||420;return x`
      <div class="settings-wrap">
        <!-- Account Card -->
        ${s?x`
              <div class="settings-card">
                <div class="acct-row">
                  <div style="display: flex; align-items: center; gap: 16px;">
                    <span class="avatar-circle">${t}</span>
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
            `:this.magicSentEmail?x`
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
            `:x`
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
                ${s?"Cloud backup active":"Local only"}
              </div>
              <div class="backup-detail-sub">
                ${s?`Last synced just now · ${this.sessionCount} sessions held`:"Sign in to keep this history if you lose the device"}
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
                <div class="pref-sub">${L(n)} a week across the whole kit</div>
              </div>
              <div class="goal-chips-wrap">
                ${Id.map(r=>x`
                    <button
                      class="goal-chip ${n===r?"active":"inactive"}"
                      @click=${()=>this.handleSetGoal(r)}
                    >
                      ${L(r)}
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
    `}};Ie.styles=[We,De`
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
    `];ot([H({type:Object})],Ie.prototype,"settings",2);ot([H({type:Object})],Ie.prototype,"authState",2);ot([H({type:String})],Ie.prototype,"syncStatus",2);ot([H({type:Number})],Ie.prototype,"sessionCount",2);ot([T()],Ie.prototype,"isSyncing",2);ot([T()],Ie.prototype,"magicSentEmail",2);Ie=ot([qe("pt-settings-view")],Ie);var Pd=Object.defineProperty,Dd=Object.getOwnPropertyDescriptor,lt=(s,e,t,n)=>{for(var i=n>1?void 0:n?Dd(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&Pd(e,t,i),i};let Pe=class extends ie{constructor(){super(...arguments),this.instruments=[],this.open=!1,this.selectedInstrumentId="",this.durationMinutes=20,this.sessionDate=new Date().toISOString().slice(0,10),this.notes=""}connectedCallback(){super.connectedCallback(),this.instruments.length>0&&!this.selectedInstrumentId&&(this.selectedInstrumentId=this.instruments[0].id)}willUpdate(s){s.has("instruments")&&this.instruments.length>0&&!this.selectedInstrumentId&&(this.selectedInstrumentId=this.instruments[0].id)}setPreset(s){this.durationMinutes=s}handleSave(){if(!this.selectedInstrumentId||this.durationMinutes<=0)return;const s=this.sessionDate.split("-"),e=new Date;s.length===3&&e.setFullYear(parseInt(s[0]),parseInt(s[1])-1,parseInt(s[2])),this.dispatchEvent(new CustomEvent("save-manual-session",{detail:{instrumentId:this.selectedInstrumentId,start:e,duration:this.durationMinutes,notes:this.notes},bubbles:!0,composed:!0})),this.close()}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return this.open?x`
      <div class="modal-overlay" @click=${s=>s.target===s.currentTarget&&this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Log Practice Session</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="form-group">
            <label class="form-label">Select Instrument</label>
            <div class="inst-radio-group">
              ${this.instruments.map(s=>x`
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
              ${[15,30,45,60].map(s=>x`
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
    `:x``}};Pe.styles=[We,De`
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
    `];lt([H({type:Array})],Pe.prototype,"instruments",2);lt([H({type:Boolean})],Pe.prototype,"open",2);lt([T()],Pe.prototype,"selectedInstrumentId",2);lt([T()],Pe.prototype,"durationMinutes",2);lt([T()],Pe.prototype,"sessionDate",2);lt([T()],Pe.prototype,"notes",2);Pe=lt([qe("pt-manual-entry-modal")],Pe);var jd=Object.defineProperty,Fd=Object.getOwnPropertyDescriptor,Ke=(s,e,t,n)=>{for(var i=n>1?void 0:n?Fd(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&jd(e,t,i),i};let ve=class extends ie{constructor(){super(...arguments),this.instruments=[],this.session=null,this.open=!1,this.instrumentId="",this.duration=0,this.sessionDate="",this.notes=""}willUpdate(s){s.has("session")&&this.session&&(this.instrumentId=this.session.instrumentId,this.duration=this.session.duration,this.sessionDate=new Date(this.session.start).toISOString().slice(0,10),this.notes=this.session.notes||"")}handleSave(){if(!this.session||!this.instrumentId||this.duration<=0)return;const s=this.sessionDate.split("-"),e=new Date(this.session.start);s.length===3&&e.setFullYear(parseInt(s[0]),parseInt(s[1])-1,parseInt(s[2]));const t=new Date(e.getTime()+this.duration*6e4),n={...this.session,instrumentId:this.instrumentId,start:e.toISOString(),end:t.toISOString(),duration:Math.round(this.duration),notes:this.notes.trim()||void 0};this.dispatchEvent(new CustomEvent("update-session",{detail:{session:n},bubbles:!0,composed:!0})),this.close()}handleDelete(){this.session&&confirm("Are you sure you want to delete this practice session?")&&(this.dispatchEvent(new CustomEvent("delete-session",{detail:{sessionId:this.session.id},bubbles:!0,composed:!0})),this.close())}close(){this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}render(){return!this.open||!this.session?x``:x`
      <div class="modal-overlay" @click=${s=>s.target===s.currentTarget&&this.close()}>
        <div class="modal-card">
          <div class="modal-title">
            <span>Edit Practice Session</span>
            <button class="close-btn" @click=${this.close}>&times;</button>
          </div>

          <div class="form-group">
            <label class="form-label">Instrument</label>
            <div class="inst-radio-group">
              ${this.instruments.map(s=>x`
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
    `}};ve.styles=[We,De`
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
    `];Ke([H({type:Array})],ve.prototype,"instruments",2);Ke([H({type:Object})],ve.prototype,"session",2);Ke([H({type:Boolean})],ve.prototype,"open",2);Ke([T()],ve.prototype,"instrumentId",2);Ke([T()],ve.prototype,"duration",2);Ke([T()],ve.prototype,"sessionDate",2);Ke([T()],ve.prototype,"notes",2);ve=Ke([qe("pt-edit-session-modal")],ve);var Md=Object.defineProperty,Nd=Object.getOwnPropertyDescriptor,xe=(s,e,t,n)=>{for(var i=n>1?void 0:n?Nd(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&Md(e,t,i),i};let ae=class extends ie{constructor(){super(...arguments),this.open=!1,this.initialTab="signin",this.activeTab="signin",this.email="",this.password="",this.confirmPassword="",this.isLoading=!1,this.errorMessage=null,this.successMessage=null}willUpdate(s){s.has("open")&&this.open&&(this.initialTab&&(this.activeTab=this.initialTab),this.errorMessage=null,this.successMessage=null)}close(){this.errorMessage=null,this.successMessage=null,this.password="",this.confirmPassword="",this.dispatchEvent(new CustomEvent("close-modal",{bubbles:!0,composed:!0}))}setTab(s){this.activeTab=s,this.errorMessage=null,this.successMessage=null,me(I.getSettings().soundEnabled)}handleKeyDown(s){s.key==="Escape"&&this.close()}async handleForgotPassword(){if(!this.email.trim()||!this.email.includes("@")){this.errorMessage="Please enter your email address first to reset password.";return}this.isLoading=!0,this.errorMessage=null,this.successMessage=null;try{const s=await Y.resetPasswordForEmail(this.email);s.success?(Ze(I.getSettings().soundEnabled),this.successMessage=s.message||"Password reset link sent to your email!"):this.errorMessage=s.message||"Failed to send password reset email."}finally{this.isLoading=!1}}async handleGoogleSignIn(){this.isLoading=!0,this.errorMessage=null,this.successMessage=null;try{const s=await Y.signInWithOAuth("google");s.success?(Ze(I.getSettings().soundEnabled),this.close()):this.errorMessage=s.message||"Google sign in failed."}finally{this.isLoading=!1}}async handleSubmit(s){s.preventDefault(),this.errorMessage=null,this.successMessage=null;const e=this.email.trim();if(!e||!e.includes("@")){this.errorMessage="Please enter a valid email address.";return}if(this.activeTab==="magic"){this.isLoading=!0;try{const t=await Y.signInWithOtp(e);t.success?(Ze(I.getSettings().soundEnabled),this.successMessage=t.message||"We've sent a magic login link to your inbox!",this.dispatchEvent(new CustomEvent("magic-link-sent",{detail:{email:e},bubbles:!0,composed:!0}))):this.errorMessage=t.message||"Failed to send magic link."}finally{this.isLoading=!1}return}if(!this.password){this.errorMessage="Please enter your password.";return}if(this.activeTab==="create"){if(this.password.length<6){this.errorMessage="Password must be at least 6 characters long.";return}if(this.password!==this.confirmPassword){this.errorMessage="Passwords do not match.";return}this.isLoading=!0;try{const t=await Y.signUp(e,this.password);t.success?(Ze(I.getSettings().soundEnabled),t.user&&!t.user.confirmed_at&&Y.getUser()===null?this.successMessage="Account created! Please check your email to confirm your account.":this.close()):this.errorMessage=t.message||"Sign up failed."}finally{this.isLoading=!1}return}if(this.activeTab==="signin"){this.isLoading=!0;try{const t=await Y.signInWithPassword(e,this.password);t.success?(Ze(I.getSettings().soundEnabled),this.close()):this.errorMessage=t.message||"Invalid email or password."}finally{this.isLoading=!1}}}render(){if(!this.open)return x``;const s=this.isLoading?"Please wait...":this.activeTab==="signin"?"Sign in":this.activeTab==="create"?"Create account":"Send magic link";return x`
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

          ${this.errorMessage?x`<div class="alert-banner alert-error">${this.errorMessage}</div>`:""}
          ${this.successMessage?x`<div class="alert-banner alert-success">${this.successMessage}</div>`:""}

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
              ${this.activeTab==="magic"?x`
                    <div class="helper-copy">
                      We'll email you a passwordless one-time login link. Click the link on any device to log in instantly.
                    </div>
                  `:""}

              <!-- Tab: Sign In Password -->
              ${this.activeTab==="signin"?x`
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
              ${this.activeTab==="create"?x`
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
                ${s}
              </button>

              ${this.activeTab==="signin"?x`
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
                  `:this.activeTab==="create"?x`
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
                  `:x`
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
    `}};ae.styles=[We,De`
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
    `];xe([H({type:Boolean})],ae.prototype,"open",2);xe([H({type:String})],ae.prototype,"initialTab",2);xe([T()],ae.prototype,"activeTab",2);xe([T()],ae.prototype,"email",2);xe([T()],ae.prototype,"password",2);xe([T()],ae.prototype,"confirmPassword",2);xe([T()],ae.prototype,"isLoading",2);xe([T()],ae.prototype,"errorMessage",2);xe([T()],ae.prototype,"successMessage",2);ae=xe([qe("pt-auth-modal")],ae);var Ld=Object.defineProperty,Ud=Object.getOwnPropertyDescriptor,X=(s,e,t,n)=>{for(var i=n>1?void 0:n?Ud(e,t):e,r=s.length-1,a;r>=0;r--)(a=s[r])&&(i=(n?a(e,t,i):a(i))||i);return n&&i&&Ld(e,t,i),i};let V=class extends ie{constructor(){super(...arguments),this.tab="practice",this.instruments=[],this.sessions=[],this.activeSession=null,this.settings=I.getSettings(),this.syncStatus="synced",this.authState=Y.getAuthState(),this.backgroundUrl=null,this.backgroundVisible=!1,this.now=Date.now(),this.manualLogModalOpen=!1,this.editSessionModalOpen=!1,this.sessionToEdit=null,this.authModalOpen=!1,this.authInitialTab="signin"}connectedCallback(){super.connectedCallback(),this.refreshState(),this.unsubscribeStore=I.subscribe(()=>{this.refreshState()}),this.unsubscribeAuth=Y.subscribe(s=>{this.authState=s}),this.timerInterval=setInterval(()=>{this.now=Date.now()},1e3),this.checkBackground()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeStore&&this.unsubscribeStore(),this.unsubscribeAuth&&this.unsubscribeAuth(),this.timerInterval&&clearInterval(this.timerInterval)}refreshState(){this.instruments=I.getAllInstruments(),this.sessions=I.getSessions(),this.activeSession=I.getActiveSession(),this.settings=I.getSettings(),this.syncStatus=I.getSyncStatus(),this.checkBackground()}async checkBackground(){const s=this.activeSession;if(s&&this.instruments.find(t=>t.id===s.instrumentId)){const t=await wd();if(t){this.backgroundUrl=t,this.backgroundVisible=!0;return}}this.backgroundVisible=!1}handleStartSession(s){I.startSession(s.detail.instrumentId)}handleEndSession(s){var e;I.endSession((e=s==null?void 0:s.detail)==null?void 0:e.notes)}handleDiscardSession(){I.discardSession()}handleSaveManualSession(s){const{instrumentId:e,start:t,duration:n,notes:i}=s.detail;I.logManualSession(e,t,n,i)}handleQuickLog(s){const{instrumentId:e,duration:t,daysAgo:n}=s.detail,i=new Date;i.setDate(i.getDate()-n),i.setHours(18,0,0,0),I.logManualSession(e,i,t)}handleUpdateSession(s){I.updateSession(s.detail.session)}handleDeleteSession(s){I.deleteSession(s.detail.sessionId)}handleAddInstrument(s){I.addInstrument(s.detail.name,s.detail.color,s.detail.tier)}handleUpdateInstrument(s){I.updateInstrument(s.detail.instrument)}handleRetireInstrument(s){I.retireInstrument(s.detail.id)}handleRestoreInstrument(s){I.restoreInstrument(s.detail.id)}handleUpdateSettings(s){I.updateSettings(s.detail)}handleOpenAuthModal(s){var e;this.authInitialTab=((e=s==null?void 0:s.detail)==null?void 0:e.tab)||"signin",this.authModalOpen=!0}handleMagicLinkSent(s){var t;this.authModalOpen=!1;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("pt-settings-view");e&&e.setMagicLinkSent&&e.setMagicLinkSent(s.detail.email)}async handleSignOut(){await Y.signOut()}async handleSyncNow(){await I.syncWithCloud(!0)}render(){const s=new Date(this.now),e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=`${e[s.getDay()]} ${s.getDate()} ${t[s.getMonth()]}`,i=[{id:"practice",label:"Practice"},{id:"log",label:"Log"},{id:"kit",label:"Kit"},{id:"settings",label:"Settings"}],r=this.tab==="main"?"practice":this.tab==="data"?"log":this.tab,a=this.authState.isAuthenticated,o=this.syncStatus==="syncing"?"Syncing...":a?"Synced":"On this device";return x`
      ${this.backgroundUrl?x`<div
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
                ${i.map(l=>x`
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
            ${r==="practice"?x`
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
            ${r==="log"?x`
                  <pt-log-view
                    .instruments=${this.instruments}
                    .sessions=${this.sessions}
                    @save-manual-session=${this.handleSaveManualSession}
                    @update-session=${this.handleUpdateSession}
                    @delete-session=${this.handleDeleteSession}
                  ></pt-log-view>
                `:""}
            ${r==="kit"?x`
                  <pt-kit-view
                    .instruments=${this.instruments}
                    .sessions=${this.sessions}
                    @add-instrument=${this.handleAddInstrument}
                    @update-instrument=${this.handleUpdateInstrument}
                    @retire-instrument=${this.handleRetireInstrument}
                    @restore-instrument=${this.handleRestoreInstrument}
                  ></pt-kit-view>
                `:""}
            ${r==="settings"?x`
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
    `}};V.styles=[We,De`
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
    `];X([T()],V.prototype,"tab",2);X([T()],V.prototype,"instruments",2);X([T()],V.prototype,"sessions",2);X([T()],V.prototype,"activeSession",2);X([T()],V.prototype,"settings",2);X([T()],V.prototype,"syncStatus",2);X([T()],V.prototype,"authState",2);X([T()],V.prototype,"backgroundUrl",2);X([T()],V.prototype,"backgroundVisible",2);X([T()],V.prototype,"now",2);X([T()],V.prototype,"manualLogModalOpen",2);X([T()],V.prototype,"editSessionModalOpen",2);X([T()],V.prototype,"sessionToEdit",2);X([T()],V.prototype,"authModalOpen",2);X([T()],V.prototype,"authInitialTab",2);V=X([qe("pt-app")],V);
