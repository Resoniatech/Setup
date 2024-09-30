import{X as ee,aw as $,j as k,a6 as oe,a0 as V,ax as P,ap as T,K as A,aA as w,J as F,au as m,as as C,I,$ as _,i as te,L as D,ag as re,aE as ne,s as U,M as E,a7 as ae,bF as ie,P as G,aT as de}from"./index-BLhrQPID.js";function se(e,a="default",t=[]){const n=e.$slots[a];return n===void 0?t:n()}const fe={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},j=ee("n-radio-group");function ve(e){const a=$(e,{mergedSize(r){const{size:i}=e;if(i!==void 0)return i;if(o){const{mergedSizeRef:{value:l}}=o;if(l!==void 0)return l}return r?r.mergedSize.value:"medium"},mergedDisabled(r){return!!(e.disabled||o!=null&&o.disabledRef.value||r!=null&&r.disabled.value)}}),{mergedSizeRef:t,mergedDisabledRef:s}=a,n=k(null),v=k(null),o=oe(j,null),u=k(e.defaultChecked),b=V(e,"checked"),g=P(b,u),h=T(()=>o?o.valueRef.value===e.value:g.value),R=T(()=>{const{name:r}=e;if(r!==void 0)return r;if(o)return o.nameRef.value}),f=k(!1);function x(){if(o){const{doUpdateValue:r}=o,{value:i}=e;w(r,i)}else{const{onUpdateChecked:r,"onUpdate:checked":i}=e,{nTriggerFormInput:l,nTriggerFormChange:d}=a;r&&w(r,!0),i&&w(i,!0),l(),d(),u.value=!0}}function p(){s.value||h.value||x()}function y(){p(),n.value&&(n.value.checked=h.value)}function z(){f.value=!1}function S(){f.value=!0}return{mergedClsPrefix:o?o.mergedClsPrefixRef:A(e).mergedClsPrefixRef,inputRef:n,labelRef:v,mergedName:R,mergedDisabled:s,renderSafeChecked:h,focus:f,mergedSize:t,handleRadioInputChange:y,handleRadioInputBlur:z,handleRadioInputFocus:S}}const le=F("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[m("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[C("checked",{backgroundColor:"var(--n-button-border-color-active)"}),C("disabled",{opacity:"var(--n-opacity-disabled)"})]),C("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[F("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),m("splitor",{height:"var(--n-height)"})]),F("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[F("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),m("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),I("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[m("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),I("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[m("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),_("disabled",`
 cursor: pointer;
 `,[I("&:hover",[m("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),_("checked",{color:"var(--n-button-text-color-hover)"})]),C("focus",[I("&:not(:active)",[m("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),C("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),C("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function ue(e,a,t){var s;const n=[];let v=!1;for(let o=0;o<e.length;++o){const u=e[o],b=(s=u.type)===null||s===void 0?void 0:s.name;b==="RadioButton"&&(v=!0);const g=u.props;if(b!=="RadioButton"){n.push(u);continue}if(o===0)n.push(u);else{const h=n[n.length-1].props,R=a===h.value,f=h.disabled,x=a===g.value,p=g.disabled,y=(R?2:0)+(f?0:1),z=(x?2:0)+(p?0:1),S={[`${t}-radio-group__splitor--disabled`]:f,[`${t}-radio-group__splitor--checked`]:R},r={[`${t}-radio-group__splitor--disabled`]:p,[`${t}-radio-group__splitor--checked`]:x},i=y<z?r:S;n.push(G("div",{class:[`${t}-radio-group__splitor`,i]}),u)}}return{children:n,isButtonGroup:v}}const ce=Object.assign(Object.assign({},D.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),he=te({name:"RadioGroup",props:ce,setup(e){const a=k(null),{mergedSizeRef:t,mergedDisabledRef:s,nTriggerFormChange:n,nTriggerFormInput:v,nTriggerFormBlur:o,nTriggerFormFocus:u}=$(e),{mergedClsPrefixRef:b,inlineThemeDisabled:g,mergedRtlRef:h}=A(e),R=D("Radio","-radio-group",le,de,e,b),f=k(e.defaultValue),x=V(e,"value"),p=P(x,f);function y(d){const{onUpdateValue:c,"onUpdate:value":B}=e;c&&w(c,d),B&&w(B,d),f.value=d,n(),v()}function z(d){const{value:c}=a;c&&(c.contains(d.relatedTarget)||u())}function S(d){const{value:c}=a;c&&(c.contains(d.relatedTarget)||o())}re(j,{mergedClsPrefixRef:b,nameRef:V(e,"name"),valueRef:p,disabledRef:s,mergedSizeRef:t,doUpdateValue:y});const r=ne("Radio",h,b),i=U(()=>{const{value:d}=t,{common:{cubicBezierEaseInOut:c},self:{buttonBorderColor:B,buttonBorderColorActive:N,buttonBorderRadius:H,buttonBoxShadow:M,buttonBoxShadowFocus:K,buttonBoxShadowHover:O,buttonColor:L,buttonColorActive:J,buttonTextColor:X,buttonTextColorActive:q,buttonTextColorHover:Q,opacityDisabled:W,[E("buttonHeight",d)]:Y,[E("fontSize",d)]:Z}}=R.value;return{"--n-font-size":Z,"--n-bezier":c,"--n-button-border-color":B,"--n-button-border-color-active":N,"--n-button-border-radius":H,"--n-button-box-shadow":M,"--n-button-box-shadow-focus":K,"--n-button-box-shadow-hover":O,"--n-button-color":L,"--n-button-color-active":J,"--n-button-text-color":X,"--n-button-text-color-hover":Q,"--n-button-text-color-active":q,"--n-height":Y,"--n-opacity-disabled":W}}),l=g?ae("radio-group",U(()=>t.value[0]),i,e):void 0;return{selfElRef:a,rtlEnabled:r,mergedClsPrefix:b,mergedValue:p,handleFocusout:S,handleFocusin:z,cssVars:g?void 0:i,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedValue:a,mergedClsPrefix:t,handleFocusin:s,handleFocusout:n}=this,{children:v,isButtonGroup:o}=ue(ie(se(this)),a,t);return(e=this.onRender)===null||e===void 0||e.call(this),G("div",{onFocusin:s,onFocusout:n,ref:"selfElRef",class:[`${t}-radio-group`,this.rtlEnabled&&`${t}-radio-group--rtl`,this.themeClass,o&&`${t}-radio-group--button-group`],style:this.cssVars},v)}});export{he as N,fe as r,ve as s};
