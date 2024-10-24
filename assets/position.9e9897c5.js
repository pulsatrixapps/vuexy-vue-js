import{k,aN as p,ac as F,Z as z,a0 as U,a1 as E,a2 as M,ae as X,aJ as A,a3 as J,an as Z,aw as S,B as n,a6 as j,p as l,ap as r,T as q,a7 as _,az as B}from"./index.7003a675.js";import{c as D,g as G}from"./router.86bbf027.js";function H(e){const t=k(),a=k(!1);if(p){const s=new IntersectionObserver(o=>{e==null||e(o,s),a.value=!!o.find(i=>i.isIntersecting)});F(()=>{s.disconnect()}),z(t,(o,i)=>{i&&(s.unobserve(i),a.value=!1),o&&s.observe(o)},{flush:"post"})}return{intersectionRef:t,isIntersecting:a}}const K=U({name:"VProgressLinear",props:{active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...D(),...E(),...M()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t;const s=X(e,"modelValue"),{isRtl:o}=A(),{themeClasses:i}=J(e),{textColorClasses:P,textColorStyles:x}=Z(e,"color"),{backgroundColorClasses:R,backgroundColorStyles:T}=S(n(()=>e.bgColor||e.color)),{backgroundColorClasses:h,backgroundColorStyles:C}=S(e,"color"),{roundedClasses:I}=G(e),{intersectionRef:v,isIntersecting:N}=H(),g=n(()=>parseInt(e.max,10)),u=n(()=>parseInt(e.height,10)),m=n(()=>parseFloat(e.bufferValue)/g.value*100),f=n(()=>parseFloat(s.value)/g.value*100),d=n(()=>o.value!==e.reverse),V=n(()=>e.indeterminate?"fade-transition":"slide-x-transition"),y=n(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function O(c){if(!v.value)return;const{left:$,right:w,width:b}=v.value.getBoundingClientRect(),L=d.value?b-c.clientX+(w-b):c.clientX-$;s.value=Math.round(L/b*g.value)}return j(()=>l(e.tag,{ref:v,class:["v-progress-linear",{"v-progress-linear--active":e.active&&N.value,"v-progress-linear--reverse":d.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},I.value,i.value],style:{height:e.active?r(u.value):0,"--v-progress-linear-height":r(u.value)},role:"progressbar","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:f.value,onClick:e.clickable&&O},{default:()=>[e.stream&&l("div",{key:"stream",class:["v-progress-linear__stream",P.value],style:{...x.value,[d.value?"left":"right"]:r(-u.value),borderTop:`${r(u.value/2)} dotted`,opacity:y.value,top:`calc(50% - ${r(u.value/4)})`,width:r(100-m.value,"%"),"--v-progress-linear-stream-to":r(u.value*(d.value?1:-1))}},null),l("div",{class:["v-progress-linear__background",R.value],style:[T.value,{opacity:y.value,width:r(e.stream?m.value:100,"%")}]},null),l(q,{name:V.value},{default:()=>[e.indeterminate?l("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(c=>l("div",{key:c,class:["v-progress-linear__indeterminate",c,h.value],style:C.value},null))]):l("div",{class:["v-progress-linear__determinate",h.value],style:[C.value,{width:r(f.value,"%")}]},null)]}),a.default&&l("div",{class:"v-progress-linear__content"},[a.default({value:f.value,buffer:m.value})])]})),{}}}),ee=_({loading:Boolean},"loader");function ae(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{loaderClasses:n(()=>({[`${t}--loading`]:e.loading}))}}function te(e,t){var a;let{slots:s}=t;return l("div",{class:`${e.name}__loader`},[((a=s.default)==null?void 0:a.call(s,{color:e.color,isActive:e.active}))||l(K,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Q=["static","relative","fixed","absolute","sticky"],se=_({position:{type:String,validator:e=>Q.includes(e)}},"position");function ne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B();return{positionClasses:n(()=>e.position?`${t}--${e.position}`:void 0)}}export{te as L,K as V,se as a,ae as b,ne as c,ee as m,H as u};
