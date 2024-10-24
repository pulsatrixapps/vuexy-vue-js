import{L as V,k as S,o as n,c as u,m as a,p as e,w as t,E as i,q as d,D as w,y as _,F as m,a as y,O as k,s as C,H as h,I as b,x as o,b as L,cd as B,cc as I}from"./index.7003a675.js";import{V as N}from"./VInput.d15c66f3.js";import{V as U}from"./VSwitch.9a0a067c.js";import{V as x}from"./VChip.9a57c511.js";import{a as j,V as q}from"./VRow.926379bb.js";import{V as A,c,e as D}from"./VCard.b13dfab6.js";import{V as T}from"./VImg.25cd9a63.js";import{V as z,a as F,b as G}from"./VList.c60191aa.js";import{V as E}from"./VBtn.1b7ea0a0.js";const M="/vuexy-vue-js/assets/3d-safe-box-with-golden-dollar-coins.fcbc95c7.png",R="/vuexy-vue-js/assets/3d-space-rocket-with-smoke.603bb4f0.png",Y="/vuexy-vue-js/assets/dollar-coins-flying-pink-piggy-bank.85567cfa.png";const p=r=>(B("data-v-88593bd7"),r=r(),I(),r),$=p(()=>a("div",{class:"text-center"},[a("h4",{class:"text-h4 pricing-title mb-4"}," Pricing Plans "),a("p",{class:"mb-0"}," All plans include 40+ advanced tools and features to boost your product. "),a("p",null,"Choose the best plan to fit your needs.")],-1)),H={class:"d-flex align-center justify-center mx-auto my-10"},J={class:"position-relative"},O={class:"save-upto-chip position-absolute align-center d-none d-md-flex gap-1"},W={class:"text-h5 mb-2"},K={class:"mb-0"},Q={class:"d-flex justify-center align-center"},X=p(()=>a("sup",{class:"text-sm font-weight-medium me-1"},"$",-1)),Z={class:"text-5xl font-weight-medium text-primary"},ee=p(()=>a("sub",{class:"text-sm font-weight-medium ms-1 mt-4"},"/month",-1)),se={__name:"AppPricing",props:{xs:{type:[Number,String],required:!1},sm:{type:[Number,String],required:!1},md:{type:[String,Number],required:!1},lg:{type:[String,Number],required:!1},xl:{type:[String,Number],required:!1}},setup(r){const v=r,l=S(!0),P=[{name:"Basic",tagLine:"A simple start for everyone",logo:Y,monthlyPrice:0,yearlyPrice:0,isPopular:!1,current:!0,features:["100 responses a month","Unlimited forms and surveys","Unlimited fields","Basic form creation tools","Up to 2 subdomains"]},{name:"Standard",tagLine:"For small to medium businesses",logo:M,monthlyPrice:42,yearlyPrice:460,isPopular:!0,current:!1,features:["Unlimited responses","Unlimited forms and surveys","Instagram profile page","Google Docs integration","Custom \u201CThank you\u201D page"]},{name:"Enterprise",tagLine:"Solution for big organizations",logo:R,monthlyPrice:84,yearlyPrice:690,isPopular:!1,current:!1,features:["PayPal payments","Logic Jumps","File upload with 5GB storage","Custom domain support","Stripe integration"]}];return(te,f)=>(n(),u(m,null,[$,a("div",H,[e(N,{for:"pricing-plan-toggle",class:"me-2"},{default:t(()=>[i(" Monthly ")]),_:1}),a("div",J,[e(U,{id:"pricing-plan-toggle",modelValue:d(l),"onUpdate:modelValue":f[0]||(f[0]=s=>w(l)?l.value=s:null),label:"Annual"},null,8,["modelValue"]),a("div",O,[e(_,{icon:"tabler-corner-left-down",class:"flip-in-rtl"}),e(x,{label:"",color:"primary"},{default:t(()=>[i(" Save up to 10% ")]),_:1})])])]),e(q,null,{default:t(()=>[(n(),u(m,null,y(P,s=>e(j,k({key:s.logo},v,{cols:"12"}),{default:t(()=>[e(A,{flat:"",border:"",class:C(s.isPopular?"border-primary border-opacity-100":"")},{default:t(()=>[e(c,{style:{height:"4.125rem"},class:"text-end"},{default:t(()=>[h(e(x,{label:"",color:"primary",size:"small"},{default:t(()=>[i(" Popular ")]),_:2},1536),[[b,s.isPopular]])]),_:2},1024),e(c,{class:"text-center"},{default:t(()=>[e(T,{height:140,src:s.logo,class:"mx-auto mb-5"},null,8,["src"]),a("h5",W,o(s.name),1),a("p",K,o(s.tagLine),1)]),_:2},1024),e(c,{class:"position-relative text-center"},{default:t(()=>[a("div",Q,[X,a("h1",Z,o(d(l)?Math.floor(Number(s.yearlyPrice)/12):s.monthlyPrice),1),ee]),h(a("span",{class:"position-absolute text-caption font-weight-medium mt-1",style:{"inset-inline":"0"}},o(s.yearlyPrice===0?"free":`USD ${s.yearlyPrice}/Year`),513),[[b,d(l)]])]),_:2},1024),e(c,{class:"mt-5"},{default:t(()=>[e(z,{class:"card-list"},{default:t(()=>[(n(!0),u(m,null,y(s.features,g=>(n(),L(F,{key:g},{prepend:t(()=>[e(_,{size:14,icon:"tabler-circle",class:"me-3"})]),default:t(()=>[e(G,null,{default:t(()=>[i(o(g),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024),e(D,null,{default:t(()=>[e(E,{block:"",color:s.current?"success":"primary",variant:s.isPopular?"elevated":"tonal"},{default:t(()=>[i(o(s.yearlyPrice===0?"Your Current Plan":"Upgrade"),1)]),_:2},1032,["color","variant"])]),_:2},1024)]),_:2},1032,["class"])]),_:2},1040)),64))]),_:1})],64))}},me=V(se,[["__scopeId","data-v-88593bd7"]]),pe="/vuexy-vue-js/assets/laptop-girl.35162850.png";export{me as _,pe as l};