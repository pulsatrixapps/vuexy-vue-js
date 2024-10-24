import{o as x,b as y,w as h,p as d,y as E,ak as B,ae as P,k as S,aU as w,Z as p,ar as D,a6 as _,O as g}from"./index.7003a675.js";import{V as I}from"./VBtn.1b7ea0a0.js";import{u as O}from"./scopeId.e384f3cb.js";import{f as k}from"./forwardRefs.c003b6b8.js";import{m as A,f as R,a as T}from"./VOverlay.cefc0bde.js";import{V as $}from"./router.86bbf027.js";import{a as C}from"./VMenu.50395753.js";const W={__name:"DialogCloseBtn",props:{icon:{type:String,required:!1,default:"tabler-x"}},setup(a){const u=a;return(i,n)=>(x(),y(I,{icon:"",class:"v-dialog-close-btn"},{default:h(()=>[d(E,{icon:u.icon},null,8,["icon"])]),_:1}))}};const Z=B()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...A({origin:"center center",scrollStrategy:"block",transition:{component:C},zIndex:2400})},emits:{"update:modelValue":a=>!0},setup(a,u){let{slots:i}=u;const n=P(a,"modelValue"),{scopeId:V}=O(),t=S();function f(o){var e,l;const s=o.relatedTarget,r=o.target;if(s!==r&&(e=t.value)!=null&&e.contentEl&&(l=t.value)!=null&&l.globalTop&&![document,t.value.contentEl].includes(r)&&!t.value.contentEl.contains(r)){const c=[...t.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(m=>!m.hasAttribute("disabled")&&!m.matches('[tabindex="-1"]'));if(!c.length)return;const v=c[0],b=c[c.length-1];s===v?b.focus():v.focus()}}return w&&p(()=>n.value&&a.retainFocus,o=>{o?document.addEventListener("focusin",f):document.removeEventListener("focusin",f)},{immediate:!0}),p(n,async o=>{if(await D(),o){var e;(e=t.value.contentEl)==null||e.focus({preventScroll:!0})}else{var l;(l=t.value.activatorEl)==null||l.focus({preventScroll:!0})}}),_(()=>{const[o]=R(a);return d(T,g({ref:t,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable}]},o,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-role":"dialog","aria-modal":"true",activatorProps:g({"aria-haspopup":"dialog","aria-expanded":String(n.value)},a.activatorProps)},V),{activator:i.activator,default:function(){for(var e,l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return d($,{root:!0},{default:()=>[(e=i.default)==null?void 0:e.call(i,...s)]})}})}),k({},t)}});export{Z as V,W as _};
