import{I as de,J as b,au as y,$ as Ke,as as te,i as Qe,L as Te,K as et,aE as St,j as h,a0 as ne,b_ as Rt,s as F,bB as Oe,x as Fe,y as Mt,ai as Pt,b$ as It,M as He,bH as Ye,a7 as tt,P as r,c0 as _t,c1 as Le,c2 as qe,aX as Bt,F as zt,c3 as Je,z as $t,Z as kt,ax as Xe,b4 as At,c4 as Et,a2 as Dt,bE as Vt,c5 as Ne,c6 as Wt,aw as jt,a8 as Lt,aN as Ue,bm as Nt,bn as Ut,bo as Kt,ac as Ht,f as Yt,v as qt,bp as Ze,c7 as Jt,c8 as Xt,bl as Zt,aI as Ge,bY as Gt,c9 as Qt,aA as N}from"./index-BLhrQPID.js";import{a as en}from"./Input-BN6wvFhZ.js";const tn=de([b("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[b("base-loading",`
 color: var(--n-loading-color);
 `),b("base-selection-tags","min-height: var(--n-height);"),y("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),y("state-border",`
 z-index: 1;
 border-color: #0000;
 `),b("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[y("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),b("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[y("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),b("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[y("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),b("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),b("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[b("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[y("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),y("render-label",`
 color: var(--n-text-color);
 `)]),Ke("disabled",[de("&:hover",[y("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),te("focus",[y("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),te("active",[y("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),b("base-selection-label","background-color: var(--n-color-active);"),b("base-selection-tags","background-color: var(--n-color-active);")])]),te("disabled","cursor: not-allowed;",[y("arrow",`
 color: var(--n-arrow-color-disabled);
 `),b("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[b("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),y("render-label",`
 color: var(--n-text-color-disabled);
 `)]),b("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),b("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),b("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[y("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),y("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>te(`${e}-status`,[y("state-border",`border: var(--n-border-${e});`),Ke("disabled",[de("&:hover",[y("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),te("active",[y("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),b("base-selection-label",`background-color: var(--n-color-active-${e});`),b("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),te("focus",[y("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),b("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),b("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[de("&:last-child","padding-right: 0;"),b("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[y("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),nn=Qe({name:"InternalSelection",props:Object.assign(Object.assign({},Te.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:T,mergedRtlRef:z}=et(e),g=St("InternalSelection",z,T),f=h(null),S=h(null),$=h(null),a=h(null),k=h(null),M=h(null),C=h(null),A=h(null),E=h(null),P=h(null),m=h(!1),v=h(!1),D=h(!1),R=Te("InternalSelection","-internal-selection",tn,Rt,e,ne(e,"clsPrefix")),_=F(()=>e.clearable&&!e.disabled&&(D.value||e.active)),V=F(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Oe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),U=F(()=>{const n=e.selectedOption;if(n)return n[e.labelField]}),B=F(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function O(){var n;const{value:l}=f;if(l){const{value:p}=S;p&&(p.style.width=`${l.offsetWidth}px`,e.maxTagCount!=="responsive"&&((n=E.value)===null||n===void 0||n.sync({showAllItemsBeforeCalculate:!1})))}}function I(){const{value:n}=P;n&&(n.style.display="none")}function K(){const{value:n}=P;n&&(n.style.display="inline-block")}Fe(ne(e,"active"),n=>{n||I()}),Fe(ne(e,"pattern"),()=>{e.multiple&&$t(O)});function X(n){const{onFocus:l}=e;l&&l(n)}function oe(n){const{onBlur:l}=e;l&&l(n)}function le(n){const{onDeleteOption:l}=e;l&&l(n)}function Z(n){const{onClear:l}=e;l&&l(n)}function w(n){const{onPatternInput:l}=e;l&&l(n)}function ue(n){var l;(!n.relatedTarget||!(!((l=$.value)===null||l===void 0)&&l.contains(n.relatedTarget)))&&X(n)}function ce(n){var l;!((l=$.value)===null||l===void 0)&&l.contains(n.relatedTarget)||oe(n)}function G(n){Z(n)}function Se(){D.value=!0}function Q(){D.value=!1}function Re(n){!e.active||!e.filterable||n.target!==S.value&&n.preventDefault()}function Y(n){le(n)}function he(n){if(n.key==="Backspace"&&!q.value&&!e.pattern.length){const{selectedOptions:l}=e;l!=null&&l.length&&Y(l[l.length-1])}}const q=h(!1);let ae=null;function Me(n){const{value:l}=f;if(l){const p=n.target.value;l.textContent=p,O()}e.ignoreComposition&&q.value?ae=n:w(n)}function Pe(){q.value=!0}function fe(){q.value=!1,e.ignoreComposition&&w(ae),ae=null}function ve(n){var l;v.value=!0,(l=e.onPatternFocus)===null||l===void 0||l.call(e,n)}function J(n){var l;v.value=!1,(l=e.onPatternBlur)===null||l===void 0||l.call(e,n)}function W(){var n,l;if(e.filterable)v.value=!1,(n=M.value)===null||n===void 0||n.blur(),(l=S.value)===null||l===void 0||l.blur();else if(e.multiple){const{value:p}=a;p==null||p.blur()}else{const{value:p}=k;p==null||p.blur()}}function be(){var n,l,p;e.filterable?(v.value=!1,(n=M.value)===null||n===void 0||n.focus()):e.multiple?(l=a.value)===null||l===void 0||l.focus():(p=k.value)===null||p===void 0||p.focus()}function ee(){const{value:n}=S;n&&(K(),n.focus())}function Ie(){const{value:n}=S;n&&n.blur()}function _e(n){const{value:l}=C;l&&l.setTextContent(`+${n}`)}function Be(){const{value:n}=A;return n}function ze(){return S.value}let ie=null;function re(){ie!==null&&window.clearTimeout(ie)}function $e(){e.active||(re(),ie=window.setTimeout(()=>{B.value&&(m.value=!0)},100))}function ke(){re()}function Ae(n){n||(re(),m.value=!1)}Fe(B,n=>{n||(m.value=!1)}),Mt(()=>{Pt(()=>{const n=M.value;n&&(e.disabled?n.removeAttribute("tabindex"):n.tabIndex=v.value?-1:0)})}),It($,e.onResize);const{inlineThemeDisabled:ge}=e,se=F(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:l},self:{borderRadius:p,color:Ee,placeholderColor:De,textColor:pe,paddingSingle:me,paddingMultiple:we,caretColor:Ve,colorDisabled:We,textColorDisabled:xe,placeholderColorDisabled:H,colorActive:t,boxShadowFocus:o,boxShadowActive:i,boxShadowHover:c,border:d,borderFocus:s,borderHover:u,borderActive:x,arrowColor:L,arrowColorDisabled:je,loadingColor:nt,colorActiveWarning:ot,boxShadowFocusWarning:lt,boxShadowActiveWarning:at,boxShadowHoverWarning:it,borderWarning:rt,borderFocusWarning:st,borderHoverWarning:dt,borderActiveWarning:ut,colorActiveError:ct,boxShadowFocusError:ht,boxShadowActiveError:ft,boxShadowHoverError:vt,borderError:bt,borderFocusError:gt,borderHoverError:pt,borderActiveError:mt,clearColor:wt,clearColorHover:xt,clearColorPressed:yt,clearSize:Ct,arrowSize:Ot,[He("height",n)]:Ft,[He("fontSize",n)]:Tt}}=R.value,ye=Ye(me),Ce=Ye(we);return{"--n-bezier":l,"--n-border":d,"--n-border-active":x,"--n-border-focus":s,"--n-border-hover":u,"--n-border-radius":p,"--n-box-shadow-active":i,"--n-box-shadow-focus":o,"--n-box-shadow-hover":c,"--n-caret-color":Ve,"--n-color":Ee,"--n-color-active":t,"--n-color-disabled":We,"--n-font-size":Tt,"--n-height":Ft,"--n-padding-single-top":ye.top,"--n-padding-multiple-top":Ce.top,"--n-padding-single-right":ye.right,"--n-padding-multiple-right":Ce.right,"--n-padding-single-left":ye.left,"--n-padding-multiple-left":Ce.left,"--n-padding-single-bottom":ye.bottom,"--n-padding-multiple-bottom":Ce.bottom,"--n-placeholder-color":De,"--n-placeholder-color-disabled":H,"--n-text-color":pe,"--n-text-color-disabled":xe,"--n-arrow-color":L,"--n-arrow-color-disabled":je,"--n-loading-color":nt,"--n-color-active-warning":ot,"--n-box-shadow-focus-warning":lt,"--n-box-shadow-active-warning":at,"--n-box-shadow-hover-warning":it,"--n-border-warning":rt,"--n-border-focus-warning":st,"--n-border-hover-warning":dt,"--n-border-active-warning":ut,"--n-color-active-error":ct,"--n-box-shadow-focus-error":ht,"--n-box-shadow-active-error":ft,"--n-box-shadow-hover-error":vt,"--n-border-error":bt,"--n-border-focus-error":gt,"--n-border-hover-error":pt,"--n-border-active-error":mt,"--n-clear-size":Ct,"--n-clear-color":wt,"--n-clear-color-hover":xt,"--n-clear-color-pressed":yt,"--n-arrow-size":Ot}}),j=ge?tt("internal-selection",F(()=>e.size[0]),se,e):void 0;return{mergedTheme:R,mergedClearable:_,mergedClsPrefix:T,rtlEnabled:g,patternInputFocused:v,filterablePlaceholder:V,label:U,selected:B,showTagsPanel:m,isComposing:q,counterRef:C,counterWrapperRef:A,patternInputMirrorRef:f,patternInputRef:S,selfRef:$,multipleElRef:a,singleElRef:k,patternInputWrapperRef:M,overflowRef:E,inputTagElRef:P,handleMouseDown:Re,handleFocusin:ue,handleClear:G,handleMouseEnter:Se,handleMouseLeave:Q,handleDeleteOption:Y,handlePatternKeyDown:he,handlePatternInputInput:Me,handlePatternInputBlur:J,handlePatternInputFocus:ve,handleMouseEnterCounter:$e,handleMouseLeaveCounter:ke,handleFocusout:ce,handleCompositionEnd:fe,handleCompositionStart:Pe,onPopoverUpdateShow:Ae,focus:be,focusInput:ee,blur:W,blurInput:Ie,updateCounter:_e,getCounter:Be,getTail:ze,renderLabel:e.renderLabel,cssVars:ge?void 0:se,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender}},render(){const{status:e,multiple:T,size:z,disabled:g,filterable:f,maxTagCount:S,bordered:$,clsPrefix:a,ellipsisTagPopoverProps:k,onRender:M,renderTag:C,renderLabel:A}=this;M==null||M();const E=S==="responsive",P=typeof S=="number",m=E||P,v=r(_t,null,{default:()=>r(en,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var R,_;return(_=(R=this.$slots).arrow)===null||_===void 0?void 0:_.call(R)}})});let D;if(T){const{labelField:R}=this,_=w=>r("div",{class:`${a}-base-selection-tag-wrapper`,key:w.value},C?C({option:w,handleClose:()=>{this.handleDeleteOption(w)}}):r(Le,{size:z,closable:!w.disabled,disabled:g,onClose:()=>{this.handleDeleteOption(w)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>A?A(w,!0):Oe(w[R],w,!0)})),V=()=>(P?this.selectedOptions.slice(0,S):this.selectedOptions).map(_),U=f?r("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:g,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),r("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,B=E?()=>r("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},r(Le,{size:z,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:g})):void 0;let O;if(P){const w=this.selectedOptions.length-S;w>0&&(O=r("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},r(Le,{size:z,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:g},{default:()=>`+${w}`})))}const I=E?f?r(qe,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:V,counter:B,tail:()=>U}):r(qe,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:V,counter:B}):P&&O?V().concat(O):V(),K=m?()=>r("div",{class:`${a}-base-selection-popover`},E?V():this.selectedOptions.map(_)):void 0,X=m?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},k):null,le=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},r("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,Z=f?r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},I,E?null:U,v):r("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:g?void 0:0},I,v);D=r(zt,null,m?r(Bt,Object.assign({},X,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>Z,default:K}):Z,le)}else if(f){const R=this.pattern||this.isComposing,_=this.active?!R:!this.selected,V=this.active?!1:this.selected;D=r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`,title:this.patternInputFocused?void 0:Je(this.label)},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:g,disabled:g,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),V?r("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},r("div",{class:`${a}-base-selection-overlay__wrapper`},C?C({option:this.selectedOption,handleClose:()=>{}}):A?A(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):null,_?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,v)}else D=r("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?r("div",{class:`${a}-base-selection-input`,title:Je(this.label),key:"input"},r("div",{class:`${a}-base-selection-input__content`},C?C({option:this.selectedOption,handleClose:()=>{}}):A?A(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),v);return r("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},D,$?r("div",{class:`${a}-base-selection__border`}):null,$?r("div",{class:`${a}-base-selection__state-border`}):null)}}),on=de([b("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),b("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[kt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),ln=Object.assign(Object.assign({},Te.props),{to:Ue.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),sn=Qe({name:"Select",props:ln,setup(e){const{mergedClsPrefixRef:T,mergedBorderedRef:z,namespaceRef:g,inlineThemeDisabled:f}=et(e),S=Te("Select","-select",on,Xt,e,T),$=h(e.defaultValue),a=ne(e,"value"),k=Xe(a,$),M=h(!1),C=h(""),A=F(()=>{const{valueField:t,childrenField:o}=e,i=Qt(t,o);return At(Z.value,i)}),E=F(()=>Et(oe.value,e.valueField,e.childrenField)),P=h(!1),m=Xe(ne(e,"show"),P),v=h(null),D=h(null),R=h(null),{localeRef:_}=Dt("Select"),V=F(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:_.value.placeholder}),U=Vt(e,["items","options"]),B=[],O=h([]),I=h([]),K=h(new Map),X=F(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:o,valueField:i}=e;return c=>({[o]:String(c),[i]:c})}return t===!1?!1:o=>Object.assign(t(o),{value:o})}),oe=F(()=>I.value.concat(O.value).concat(U.value)),le=F(()=>{const{filter:t}=e;if(t)return t;const{labelField:o,valueField:i}=e;return(c,d)=>{if(!d)return!1;const s=d[o];if(typeof s=="string")return Ne(c,s);const u=d[i];return typeof u=="string"?Ne(c,u):typeof u=="number"?Ne(c,String(u)):!1}}),Z=F(()=>{if(e.remote)return U.value;{const{value:t}=oe,{value:o}=C;return!o.length||!e.filterable?t:Wt(t,le.value,o,e.childrenField)}});function w(t){const o=e.remote,{value:i}=K,{value:c}=E,{value:d}=X,s=[];return t.forEach(u=>{if(c.has(u))s.push(c.get(u));else if(o&&i.has(u))s.push(i.get(u));else if(d){const x=d(u);x&&s.push(x)}}),s}const ue=F(()=>{if(e.multiple){const{value:t}=k;return Array.isArray(t)?w(t):[]}return null}),ce=F(()=>{const{value:t}=k;return!e.multiple&&!Array.isArray(t)?t===null?null:w([t])[0]||null:null}),G=jt(e),{mergedSizeRef:Se,mergedDisabledRef:Q,mergedStatusRef:Re}=G;function Y(t,o){const{onChange:i,"onUpdate:value":c,onUpdateValue:d}=e,{nTriggerFormChange:s,nTriggerFormInput:u}=G;i&&N(i,t,o),d&&N(d,t,o),c&&N(c,t,o),$.value=t,s(),u()}function he(t){const{onBlur:o}=e,{nTriggerFormBlur:i}=G;o&&N(o,t),i()}function q(){const{onClear:t}=e;t&&N(t)}function ae(t){const{onFocus:o,showOnFocus:i}=e,{nTriggerFormFocus:c}=G;o&&N(o,t),c(),i&&J()}function Me(t){const{onSearch:o}=e;o&&N(o,t)}function Pe(t){const{onScroll:o}=e;o&&N(o,t)}function fe(){var t;const{remote:o,multiple:i}=e;if(o){const{value:c}=K;if(i){const{valueField:d}=e;(t=ue.value)===null||t===void 0||t.forEach(s=>{c.set(s[d],s)})}else{const d=ce.value;d&&c.set(d[e.valueField],d)}}}function ve(t){const{onUpdateShow:o,"onUpdate:show":i}=e;o&&N(o,t),i&&N(i,t),P.value=t}function J(){Q.value||(ve(!0),P.value=!0,e.filterable&&we())}function W(){ve(!1)}function be(){C.value="",I.value=B}const ee=h(!1);function Ie(){e.filterable&&(ee.value=!0)}function _e(){e.filterable&&(ee.value=!1,m.value||be())}function Be(){Q.value||(m.value?e.filterable?we():W():J())}function ze(t){var o,i;!((i=(o=R.value)===null||o===void 0?void 0:o.selfRef)===null||i===void 0)&&i.contains(t.relatedTarget)||(M.value=!1,he(t),W())}function ie(t){ae(t),M.value=!0}function re(t){M.value=!0}function $e(t){var o;!((o=v.value)===null||o===void 0)&&o.$el.contains(t.relatedTarget)||(M.value=!1,he(t),W())}function ke(){var t;(t=v.value)===null||t===void 0||t.focus(),W()}function Ae(t){var o;m.value&&(!((o=v.value)===null||o===void 0)&&o.$el.contains(Zt(t))||W())}function ge(t){if(!Array.isArray(t))return[];if(X.value)return Array.from(t);{const{remote:o}=e,{value:i}=E;if(o){const{value:c}=K;return t.filter(d=>i.has(d)||c.has(d))}else return t.filter(c=>i.has(c))}}function se(t){j(t.rawNode)}function j(t){if(Q.value)return;const{tag:o,remote:i,clearFilterAfterSelect:c,valueField:d}=e;if(o&&!i){const{value:s}=I,u=s[0]||null;if(u){const x=O.value;x.length?x.push(u):O.value=[u],I.value=B}}if(i&&K.value.set(t[d],t),e.multiple){const s=ge(k.value),u=s.findIndex(x=>x===t[d]);if(~u){if(s.splice(u,1),o&&!i){const x=n(t[d]);~x&&(O.value.splice(x,1),c&&(C.value=""))}}else s.push(t[d]),c&&(C.value="");Y(s,w(s))}else{if(o&&!i){const s=n(t[d]);~s?O.value=[O.value[s]]:O.value=B}me(),W(),Y(t[d],t)}}function n(t){return O.value.findIndex(i=>i[e.valueField]===t)}function l(t){m.value||J();const{value:o}=t.target;C.value=o;const{tag:i,remote:c}=e;if(Me(o),i&&!c){if(!o){I.value=B;return}const{onCreate:d}=e,s=d?d(o):{[e.labelField]:o,[e.valueField]:o},{valueField:u,labelField:x}=e;U.value.some(L=>L[u]===s[u]||L[x]===s[x])||O.value.some(L=>L[u]===s[u]||L[x]===s[x])?I.value=B:I.value=[s]}}function p(t){t.stopPropagation();const{multiple:o}=e;!o&&e.filterable&&W(),q(),o?Y([],[]):Y(null,null)}function Ee(t){!Ge(t,"action")&&!Ge(t,"empty")&&t.preventDefault()}function De(t){Pe(t)}function pe(t){var o,i,c,d,s;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((o=v.value)===null||o===void 0)&&o.isComposing)){if(m.value){const u=(i=R.value)===null||i===void 0?void 0:i.getPendingTmNode();u?se(u):e.filterable||(W(),me())}else if(J(),e.tag&&ee.value){const u=I.value[0];if(u){const x=u[e.valueField],{value:L}=k;e.multiple&&Array.isArray(L)&&L.some(je=>je===x)||j(u)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;m.value&&((c=R.value)===null||c===void 0||c.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;m.value?(d=R.value)===null||d===void 0||d.next():J();break;case"Escape":m.value&&(Gt(t),W()),(s=v.value)===null||s===void 0||s.focus();break}}function me(){var t;(t=v.value)===null||t===void 0||t.focus()}function we(){var t;(t=v.value)===null||t===void 0||t.focusInput()}function Ve(){var t;m.value&&((t=D.value)===null||t===void 0||t.syncPosition())}fe(),Fe(ne(e,"options"),fe);const We={focus:()=>{var t;(t=v.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=v.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=v.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=v.value)===null||t===void 0||t.blurInput()}},xe=F(()=>{const{self:{menuBoxShadow:t}}=S.value;return{"--n-menu-box-shadow":t}}),H=f?tt("select",void 0,xe,e):void 0;return Object.assign(Object.assign({},We),{mergedStatus:Re,mergedClsPrefix:T,mergedBordered:z,namespace:g,treeMate:A,isMounted:Lt(),triggerRef:v,menuRef:R,pattern:C,uncontrolledShow:P,mergedShow:m,adjustedTo:Ue(e),uncontrolledValue:$,mergedValue:k,followerRef:D,localizedPlaceholder:V,selectedOption:ce,selectedOptions:ue,mergedSize:Se,mergedDisabled:Q,focused:M,activeWithoutMenuOpen:ee,inlineThemeDisabled:f,onTriggerInputFocus:Ie,onTriggerInputBlur:_e,handleTriggerOrMenuResize:Ve,handleMenuFocus:re,handleMenuBlur:$e,handleMenuTabOut:ke,handleTriggerClick:Be,handleToggle:se,handleDeleteOption:j,handlePatternInput:l,handleClear:p,handleTriggerBlur:ze,handleTriggerFocus:ie,handleKeydown:pe,handleMenuAfterLeave:be,handleMenuClickOutside:Ae,handleMenuScroll:De,handleMenuKeydown:pe,handleMenuMousedown:Ee,mergedTheme:S,cssVars:f?void 0:xe,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender})},render(){return r("div",{class:`${this.mergedClsPrefix}-select`},r(Nt,null,{default:()=>[r(Ut,null,{default:()=>r(nn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,T;return[(T=(e=this.$slots).arrow)===null||T===void 0?void 0:T.call(e)]}})}),r(Kt,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ue.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>r(Ht,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,T,z;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Yt(r(Jt,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(T=this.menuProps)===null||T===void 0?void 0:T.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(z=this.menuProps)===null||z===void 0?void 0:z.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var g,f;return[(f=(g=this.$slots).empty)===null||f===void 0?void 0:f.call(g)]},header:()=>{var g,f;return[(f=(g=this.$slots).header)===null||f===void 0?void 0:f.call(g)]},action:()=>{var g,f;return[(f=(g=this.$slots).action)===null||f===void 0?void 0:f.call(g)]}}),this.displayDirective==="show"?[[qt,this.mergedShow],[Ze,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Ze,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{sn as N};
