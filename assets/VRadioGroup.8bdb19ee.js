import{m as R,V as C,a as S,f as $,b as G}from"./VSelectionControl.e7dcbd2d.js";import{a0 as c,a6 as m,p as a,O as u,ax as O,as as p,a9 as k,B as A,ae as h,ay as x,F as U}from"./index.7003a675.js";import{m as F,f as N,V as _,a as B}from"./VInput.d15c66f3.js";const q=c({name:"VRadio",props:{...R({falseIcon:"$radioOff",trueIcon:"$radioOn"})},setup(e,l){let{slots:r}=l;return m(()=>a(C,u(e,{class:"v-radio",type:"radio"}),r)),{}}});const w=c({name:"VRadioGroup",inheritAttrs:!1,props:{height:{type:[Number,String],default:"auto"},...F(),...O(S(),["multiple"]),trueIcon:{type:p,default:"$radioOn"},falseIcon:{type:p,default:"$radioOff"},type:{type:String,default:"radio"}},emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:r,slots:t}=l;const f=k(),n=A(()=>e.id||`radio-group-${f}`),o=h(e,"modelValue");return m(()=>{const[V,v]=x(r),[I,D]=N(e),[b,L]=$({...e,multiple:!1}),d=t.label?t.label({label:e.label,props:{for:n.value}}):e.label;return a(B,u({class:"v-radio-group"},V,I,{modelValue:o.value,"onUpdate:modelValue":s=>o.value=s,id:n.value}),{...t,default:s=>{let{id:i,isDisabled:y,isReadonly:g}=s;return a(U,null,[d&&a(_,{for:i.value,clickable:!0},{default:()=>[d]}),a(G,u(b,{id:i.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:y.value,readonly:g.value},v,{modelValue:o.value,"onUpdate:modelValue":P=>o.value=P}),t)])}})}),{}}});export{w as V,q as a};