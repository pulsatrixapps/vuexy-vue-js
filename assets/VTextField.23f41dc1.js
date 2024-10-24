/* empty css                   */import{m as X,f as Y,V as j}from"./VField.ddbe5abc.js";import{m as q,u as G,f as J,a as K}from"./VInput.d15c66f3.js";import{i as L}from"./VImg.25cd9a63.js";import{f as Q}from"./forwardRefs.c003b6b8.js";import{ak as W,ae as Z,B as f,k as g,a6 as ee,ay as te,p as n,O as k,H as ne,at as le,F as V,aX as ae,ar as ue,aY as ie}from"./index.7003a675.js";import{V as oe}from"./VCounter.3975aeb3.js";const re=["color","file","time","date","datetime-local","week","month"],ke=W()({name:"VTextField",directives:{Intersect:L},inheritAttrs:!1,props:{autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...q(),...X()},emits:{"click:control":e=>!0,"click:input":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,P){let{attrs:v,emit:C,slots:l}=P;const a=Z(e,"modelValue"),{isFocused:u,focus:B,blur:S}=G(e),_=f(()=>{var t;return typeof e.counterValue=="function"?e.counterValue(a.value):((t=a.value)!=null?t:"").toString().length}),b=f(()=>{if(v.maxlength)return v.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function D(t,x){var o,s;!e.autofocus||!t||(o=x[0].target)==null||(s=o.focus)==null||s.call(o)}const h=g(),p=g(),i=g(),A=f(()=>re.includes(e.type)||e.persistentPlaceholder||u.value),R=f(()=>e.messages.length?e.messages:u.value||e.persistentHint?e.hint:"");function m(){if(i.value!==document.activeElement){var t;(t=i.value)==null||t.focus()}u.value||B()}function $(t){m(),C("click:control",t)}function w(t){t.stopPropagation(),m(),ue(()=>{a.value=null,ie(e["onClick:clear"],t)})}function N(t){a.value=t.target.value}return ee(()=>{const t=!!(l.counter||e.counter||e.counterValue),x=!!(t||l.details),[o,s]=te(v),[{modelValue:se,...T}]=J(e),[H]=Y(e);return n(K,k({ref:h,modelValue:a.value,"onUpdate:modelValue":r=>a.value=r,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},o,T,{focused:u.value,messages:R.value}),{...l,default:r=>{let{id:c,isDisabled:E,isDirty:y,isReadonly:M,isValid:z}=r;return n(j,k({ref:p,onMousedown:d=>{d.target!==i.value&&d.preventDefault()},"onClick:control":$,"onClick:clear":w,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},H,{id:c.value,active:A.value||y.value,dirty:y.value||e.dirty,focused:u.value,error:z.value===!1}),{...l,default:d=>{let{props:{class:F,...O}}=d;const I=ne(n("input",k({ref:i,value:a.value,onInput:N,autofocus:e.autofocus,readonly:M.value,disabled:E.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:m,onBlur:S},O,s),null),[[le("intersect"),{handler:D},null,{once:!0}]]);return n(V,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[e.prefix]),l.default?n("div",{class:F,onClick:U=>C("click:input",U),"data-no-activator":""},[l.default(),I]):ae(I,{class:F}),e.suffix&&n("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:x?r=>{var c;return n(V,null,[(c=l.details)==null?void 0:c.call(l,r),t&&n(V,null,[n("span",null,null),n(oe,{active:e.persistentCounter||u.value,value:_.value,max:b.value},l.counter)])])}:void 0})}),Q({},h,p,i)}});export{ke as V};
