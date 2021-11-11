(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
})((function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function getDefaultExportFromNamespaceIfPresent (n) {
		return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
	}

	function getDefaultExportFromNamespaceIfNotNamed (n) {
		return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
	}

	function getAugmentedNamespace(n) {
		if (n.__esModule) return n;
		var a = Object.defineProperty({}, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	function commonjsRequire (path) {
		throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
	}

	var HydratedSection$1 = {};

	/**
	 * @license
	 * Copyright 2019 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const t$3=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$7=Symbol(),n$4=new Map;class s$3{constructor(t,n){if(this._$cssResult$=!0,n!==e$7)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$4.get(this.cssText);return t$3&&void 0===e&&(n$4.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$5=t=>new s$3("string"==typeof t?t:t+"",e$7),r$3=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$3(o,e$7)},i$3=(e,n)=>{t$3?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$5(e)})(t):t;

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */var s$2;const e$6=window.reactiveElementPolyfillSupport,r$2={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},h$2=(t,i)=>i!==t&&(i==i||t==t),o$4={attribute:!0,type:String,converter:r$2,reflect:!1,hasChanged:h$2};class n$3 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=o$4){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||o$4}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Em)&&void 0!==i?i:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Em)||void 0===i||i.splice(this._$Em.indexOf(t)>>>0,1);}_$Ep(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$3(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$Eg(t,i,s=o$4){var e,h;const n=this.constructor._$Eh(t,s);if(void 0!==n&&!0===s.reflect){const o=(null!==(h=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==h?h:r$2.toAttribute)(i,s.type);this._$Ei=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null;}}_$AK(t,i){var s,e,h;const o=this.constructor,n=o._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=o.getPropertyOptions(n),l=t.converter,a=null!==(h=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==h?h:r$2.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||h$2)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ev=this._$EC());}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Em)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return !0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,i)=>this._$Eg(i,this[i],t))),this._$ES=void 0),this._$EU();}updated(t){}firstUpdated(t){}}n$3.finalized=!0,n$3.elementProperties=new Map,n$3.elementStyles=[],n$3.shadowRootOptions={mode:"open"},null==e$6||e$6({ReactiveElement:n$3}),(null!==(s$2=globalThis.reactiveElementVersions)&&void 0!==s$2?s$2:globalThis.reactiveElementVersions=[]).push("1.0.1");

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	var t$2;const i$2=globalThis.trustedTypes,s$1=i$2?i$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$5=`lit$${(Math.random()+"").slice(9)}$`,o$3="?"+e$5,n$2=`<${o$3}>`,l$1=document,h$1=(t="")=>l$1.createComment(t),r$1=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var i;return d(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea)$/i,$=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),p=$(1),y=$(2),b=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),x=new WeakMap,w=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h$1(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$1.createTreeWalker(l$1,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,$=-1,p=0;for(;p<s.length&&(d.lastIndex=p,u=d.exec(s),null!==u);)p=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,$=-1):void 0===u[1]?$=-2:($=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===a?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n$2:$>=0?(l.push(o),s.slice(0,$)+"$lit$"+s.slice($)+e$5+y):s+e$5+(-2===$?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");return [void 0!==s$1?s$1.createHTML(u):u,l]};class P{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=P.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$5)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$5),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?k:"@"===i[1]?H:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e$5),s=t.length-1;if(s>0){l.textContent=i$2?i$2.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h$1()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h$1());}}}else if(8===l.nodeType)if(l.data===o$3)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$5,t+1));)c.push({type:7,index:r}),t+=e$5.length-1;}r++;}}static createElement(t,i){const s=l$1.createElement("template");return s.innerHTML=t,s}}function V(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r$1(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=V(t,d._$AS(t,i.values),d,e)),i}class E{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$1).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new I(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=V(this,t,i),r$1(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):u(t)?this.M(t):this.$(t);}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t));}$(t){this._$AH!==T&&r$1(this._$AH)?this._$AA.nextSibling.data=t:this.S(l$1.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=P.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new E(o,this),i=t.p(this.options);t.m(s),this.S(i),this._$AH=t;}}_$AC(t){let i=x.get(t.strings);return void 0===i&&x.set(t.strings,i=new P(t)),i}M(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.A(h$1()),this.A(h$1()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=V(this,t,i,0),n=!r$1(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=V(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r$1(h)||h!==this._$AH[l]),h===T?t=T:t!==T&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.k(t);}k(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}k(t){this.element[this.name]=t===T?void 0:t;}}class k extends S{constructor(){super(...arguments),this.type=4;}k(t){t&&t!==T?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name);}}class H extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=V(this,t,i,0))&&void 0!==s?s:T)===b)return;const e=this._$AH,o=t===T&&e!==T||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==T&&(e===T||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class I{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t);}}const L={P:"$lit$",V:e$5,L:o$3,I:1,N:C,R:E,D:u,j:V,H:N,O:S,F:k,B:H,W:M,Z:I},R=window.litHtmlPolyfillSupport;null==R||R(P,N),(null!==(t$2=globalThis.litHtmlVersions)&&void 0!==t$2?t$2:globalThis.litHtmlVersions=[]).push("2.0.1");

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */var l,o$2;const r=n$3;class s extends n$3{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=w(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$1=globalThis.litElementPolyfillSupport;null==n$1||n$1({LitElement:s});const h={_$AK:(t,e,i)=>{t._$AK(e,i);},_$AL:t=>t._$AL};(null!==(o$2=globalThis.litElementVersions)&&void 0!==o$2?o$2:globalThis.litElementVersions=[]).push("3.0.1");

	var lit = /*#__PURE__*/Object.freeze({
		__proto__: null,
		CSSResult: s$3,
		adoptStyles: i$3,
		css: r$3,
		getCompatibleStyle: S$1,
		supportsAdoptingStyleSheets: t$3,
		unsafeCSS: o$5,
		ReactiveElement: n$3,
		defaultConverter: r$2,
		notEqual: h$2,
		_$LH: L,
		html: p,
		noChange: b,
		nothing: T,
		render: w,
		svg: y,
		LitElement: s,
		UpdatingElement: r,
		_$LE: h
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(lit);

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const n=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const i$1=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$4(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$1(e,n)}

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */function t$1(t){return e$4({...t,state:!0})}

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	const e$3=(e,t,o)=>{Object.defineProperty(t,o,e);},t=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e}),o$1=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */function e$2(e){return o$1({finisher:(r,t)=>{Object.assign(r.prototype[t],e);}})}

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */function i(i,n){return o$1({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */function e$1(e){return o$1({descriptor:r=>({get(){var r,o;return null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelectorAll(e))&&void 0!==o?o:[]},enumerable:!0,configurable:!0})})}

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */
	function e(e){return o$1({descriptor:r=>({async get(){var r;return await this.updateComplete,null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e)},enumerable:!0,configurable:!0})})}

	/**
	 * @license
	 * Copyright 2017 Google LLC
	 * SPDX-License-Identifier: BSD-3-Clause
	 */function o(o="",n=!1,t=""){return o$1({descriptor:e=>({get(){var e,r,l;const i="slot"+(o?`[name=${o}]`:":not([name])");let u=null!==(l=null===(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(i))||void 0===r?void 0:r.assignedNodes({flatten:n}))&&void 0!==l?l:[];return t&&(u=u.filter((e=>e.nodeType===Node.ELEMENT_NODE&&e.matches(t)))),u},enumerable:!0,configurable:!0})})}

	var decorators = /*#__PURE__*/Object.freeze({
		__proto__: null,
		customElement: n,
		property: e$4,
		state: t$1,
		eventOptions: e$2,
		query: i,
		queryAll: e$1,
		queryAsync: e,
		queryAssignedNodes: o
	});

	var require$$1 = /*@__PURE__*/getAugmentedNamespace(decorators);

	var SocketController$1 = {};

	"use strict";
	Object.defineProperty(SocketController$1, "__esModule", { value: true });
	var SocketController_2 = SocketController$1.SocketController = void 0;
	class SocketController {
	    constructor(host) {
	        SocketController.init();
	        (this.host = host).addController(this);
	        SocketController.registry.push(this);
	    }
	    static init() {
	        if (!SocketController.socket) {
	            SocketController.socket = new WebSocket('ws://' + location.host);
	            SocketController.socket.onmessage = SocketController.onMessage;
	        }
	    }
	    hostConnected() {
	    }
	    hostDisconnected() {
	    }
	    static onMessage(ev) {
	        for (let socketController of SocketController.registry) {
	            socketController.host.onMessage(ev);
	        }
	    }
	}
	SocketController_2 = SocketController$1.SocketController = SocketController;
	SocketController.registry = [];

	"use strict";
	var __decorate$3 = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(HydratedSection$1, "__esModule", { value: true });
	const lit_1$3 = require$$0;
	const decorators_js_1$3 = require$$1;
	const SocketController_1 = SocketController$1;
	let HydratedSection = class HydratedSection extends lit_1$3.LitElement {
	    constructor() {
	        super(...arguments);
	        this.socketController = new SocketController_1.SocketController(this);
	        this.resource = '';
	        this.identifier = '';
	    }
	    onMessage(ev) {
	        const data = JSON.parse(ev.data);
	        if (data['type'] == 'hydrate') {
	            this.hydrate();
	        }
	        console.log(data);
	    }
	    async hydrate() {
	        const parser = new DOMParser();
	        const req = await fetch(window.location.href);
	        const doc = parser.parseFromString(await req.text(), 'text/html');
	        const selector = 'hydrated-section' +
	            (this.resource ? `[resource="${this.resource}"]` : '') +
	            (this.identifier ? `[identifier="${this.identifier}"]` : '');
	        const nextElement = doc.querySelector(selector);
	        if (nextElement)
	            this.innerHTML = nextElement.innerHTML;
	    }
	    render() {
	        return lit_1$3.html `
            <slot></slot>`;
	    }
	};
	HydratedSection.styles = lit_1$3.css `p { color: blue }`;
	__decorate$3([
	    decorators_js_1$3.property({ reflect: true })
	], HydratedSection.prototype, "resource", void 0);
	__decorate$3([
	    decorators_js_1$3.property({ reflect: true })
	], HydratedSection.prototype, "identifier", void 0);
	HydratedSection = __decorate$3([
	    decorators_js_1$3.customElement('hydrated-section')
	], HydratedSection);
	var _default$1 = HydratedSection$1.default = HydratedSection;

	var ExtendedForm$1 = {};

	"use strict";
	var __decorate$2 = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(ExtendedForm$1, "__esModule", { value: true });
	const lit_1$2 = require$$0;
	const decorators_js_1$2 = require$$1;
	class ExtendedForm extends lit_1$2.LitElement {
	    constructor() {
	        super(...arguments);
	        this.method = 'POST';
	        this.action = '';
	        this.redirect = '';
	        this.submitunchanged = false;
	        this.data = {};
	        this._initial = {};
	    }
	    connectedCallback() {
	        super.connectedCallback();
	        this.addEventListener("change", this._handleChange);
	        this.addEventListener("click", this.handleSubmit);
	        this.initData();
	    }
	    initData() {
	        const inputs = Array.from(this.querySelectorAll('input, select, textarea'));
	        for (let input of inputs) {
	            if (input.name) {
	                this._initial[input.name] = input.value;
	                if (this.submitunchanged)
	                    this.data[input.name] = input.value;
	            }
	        }
	    }
	    resetInputs() {
	        for (let [name, value] of Object.entries(this._initial)) {
	            const input = this.querySelector(`[name="${name}"]`);
	            if (input) {
	                input.value = value;
	            }
	        }
	        return this;
	    }
	    enableButtons() {
	        // Enable all buttons disabled from submitting
	        Array.from(this.querySelectorAll('button[disabled-by="submit"]')).map((b) => {
	            b.classList.remove('disabled');
	            b.removeAttribute('disabled-by');
	        });
	        return this;
	    }
	    _handleChange(e) {
	        const key = e.target.getAttribute('name') || e.target.getAttribute('id');
	        this.data[key] = e.target.value;
	        console.log(this.data);
	    }
	    handleSubmit(ev) {
	        // If this event wasn't caused by a submit button, do not proceed
	        const wasSubmit = ev.composedPath().some((el) => el?.type === 'submit');
	        if (!wasSubmit)
	            return false;
	        // Disable all buttons in form
	        Array.from(this.querySelectorAll('button:not(.disabled)')).map((btn) => {
	            btn.classList.add('disabled');
	            btn.setAttribute('disabled-by', 'submit');
	        });
	        fetch(this.action, {
	            method: this.method,
	            headers: new Headers({ 'content-type': 'application/json' }),
	            body: JSON.stringify(this.data),
	        })
	            .then((response) => response.json())
	            .then(this.afterSave.bind(this));
	    }
	    afterSave(data) {
	        const event = new CustomEvent("saved", {
	            detail: data,
	            cancelable: true,
	            bubbles: true
	        });
	        this.dispatchEvent(event);
	        if (!event.defaultPrevented) {
	            console.log('Saved', this.data);
	            if (data.hasOwnProperty('redirect'))
	                window.location = data['redirect'];
	            else
	                this.enableButtons();
	        }
	    }
	    render() {
	        return lit_1$2.html `
            <slot></slot>`;
	    }
	}
	__decorate$2([
	    decorators_js_1$2.property({ type: String })
	], ExtendedForm.prototype, "method", void 0);
	__decorate$2([
	    decorators_js_1$2.property({ type: String })
	], ExtendedForm.prototype, "action", void 0);
	__decorate$2([
	    decorators_js_1$2.property({ type: String })
	], ExtendedForm.prototype, "redirect", void 0);
	__decorate$2([
	    decorators_js_1$2.property({ type: Boolean })
	], ExtendedForm.prototype, "submitunchanged", void 0);
	__decorate$2([
	    decorators_js_1$2.property({ attribute: false })
	], ExtendedForm.prototype, "data", void 0);
	var _default = ExtendedForm$1.default = ExtendedForm;
	customElements.define("extended-form", ExtendedForm);

	var DynamicModal$1 = {};

	"use strict";
	var __decorate$1 = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(DynamicModal$1, "__esModule", { value: true });
	var DynamicModal_2 = DynamicModal$1.DynamicModal = void 0;
	const lit_1$1 = require$$0;
	const decorators_js_1$1 = require$$1;
	class DynamicModal extends lit_1$1.LitElement {
	    constructor() {
	        super(...arguments);
	        this.width = '48rem';
	    }
	    static get styles() {
	        return lit_1$1.css `
        :host {
            display: block;
        }
        .wrapper {
            background-color: rgba(107,114,128,0.5); position: absolute; left: 0; right: 0; top: 0; bottom: 0; display: flex; justify-content: center; align-items: center; z-index: 10;
        }
        .modal {
            background-color: rgba(255,255,255,1); min-height: 6rem;
        }
        `;
	    }
	    render() {
	        return lit_1$1.html `<div class="wrapper" style="${this.open ? '' : 'display: none'}">
            <div class="modal" style="width: ${this.width}">
                <slot></slot>
            </div>
        </div>`;
	    }
	}
	__decorate$1([
	    decorators_js_1$1.property({ type: Boolean })
	], DynamicModal.prototype, "open", void 0);
	__decorate$1([
	    decorators_js_1$1.property()
	], DynamicModal.prototype, "width", void 0);
	DynamicModal_2 = DynamicModal$1.DynamicModal = DynamicModal;
	if (!customElements.get('dynamic-modal'))
	    customElements.define('dynamic-modal', DynamicModal);

	var PromptConfirm$1 = {};

	"use strict";
	var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(PromptConfirm$1, "__esModule", { value: true });
	var PromptConfirm_2 = PromptConfirm$1.PromptConfirm = openPromptConfirm_1 = PromptConfirm$1.openPromptConfirm = void 0;
	const lit_1 = require$$0;
	const decorators_js_1 = require$$1;
	function openPromptConfirm(header, msg) {
	    // @ts-ignore
	    let promptComponent = document.createElement('prompt-confirm');
	    promptComponent.header = header;
	    promptComponent.msg = msg;
	    document.body.append(promptComponent);
	    return promptComponent.response;
	}
	var openPromptConfirm_1 = PromptConfirm$1.openPromptConfirm = openPromptConfirm;
	class PromptConfirm extends lit_1.LitElement {
	    constructor() {
	        super();
	        this.createResponse();
	        this.header = '';
	        this.msg = '';
	    }
	    static get styles() {
	        return lit_1.css `
            #heading {
                font-size: 1.5rem;
                font-weight: 500;
                line-height: 1.2;
            }
            #heading, #msg {
                margin-bottom: 1rem;
            }
            #promptForm {
                padding: 1rem;
            }
        `;
	    }
	    get promptFormData() {
	        return true;
	        // let data = new FormData(this.promptForm);
	        // // @ts-ignore
	        // return Object.fromEntries([...data.entries()]);
	    }
	    createResponse() {
	        this.response = new Promise((res, reject) => {
	            this.resolve = res;
	        });
	    }
	    handleResponse(ev) {
	        ev.preventDefault();
	        this.resolve(this.promptFormData);
	    }
	    handleCancel() {
	        this.resolve(false);
	    }
	    resolve(value) { }
	    render() {
	        return lit_1.html `
        <dynamic-modal width="32rem" open>
            <form id="promptForm" @submit="${this.handleResponse}">
                <div id="heading">
                    ${this.header}
                </div>
                <div id="msg">
                    ${this.msg}
                </div>
                <div style="display: flex; justify-content: space-between">
                    <button part="btn btn-secondary" type="button" @click="${this.handleCancel}">Cancel</button>
                    <button part="btn btn-primary" type="submit">Ok</button>
                </div>
            </form>
        </dynamic-modal>
        `;
	    }
	}
	__decorate([
	    decorators_js_1.property()
	], PromptConfirm.prototype, "header", void 0);
	__decorate([
	    decorators_js_1.property()
	], PromptConfirm.prototype, "msg", void 0);
	__decorate([
	    decorators_js_1.query('#first')
	], PromptConfirm.prototype, "promptForm", void 0);
	PromptConfirm_2 = PromptConfirm$1.PromptConfirm = PromptConfirm;
	if (!customElements.get('prompt-confirm'))
	    customElements.define('prompt-confirm', PromptConfirm);

	window.openPromptConfirm = openPromptConfirm_1;

}));
