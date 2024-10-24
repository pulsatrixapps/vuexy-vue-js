import{_ as w}from"./AppSearchHeader.e2cac88e.js";import{a as g,V as f}from"./VRow.926379bb.js";import{V as k,c as i}from"./VCard.b13dfab6.js";import{V as $}from"./VImg.25cd9a63.js";import{V as b}from"./VBtn.1b7ea0a0.js";import{o,b as m,w as t,p as e,c as d,F as C,a as V,m as s,x as h,E as n,L,r as A,k as B,q as _,z as H,b7 as D}from"./index.7003a675.js";import{V as N}from"./VAvatar.b2b787bf.js";import"./VTextField.23f41dc1.js";/* empty css                   */import"./VField.ddbe5abc.js";import"./index.ab1526b4.js";import"./VInput.d15c66f3.js";import"./router.86bbf027.js";import"./position.9e9897c5.js";import"./easing.36b781ab.js";import"./forwardRefs.c003b6b8.js";import"./VCounter.3975aeb3.js";const R={class:"text-h6 my-3"},v={__name:"HelpCenterLandingArticlesOverview",props:{articles:{type:Array,required:!0}},setup(p){const a=p;return(y,c)=>(o(),m(f,null,{default:t(()=>[e(g,{cols:"12",lg:"10",class:"mx-auto mb-8"},{default:t(()=>[e(f,null,{default:t(()=>[(o(!0),d(C,null,V(a.articles,r=>(o(),m(g,{key:r.title,cols:"12",md:"4"},{default:t(()=>[e(k,{flat:"",border:""},{default:t(()=>[e(i,{class:"text-center"},{default:t(()=>[e($,{src:r.img,"aspect-ratio":"1",width:"58",class:"mx-auto"},null,8,["src"]),s("h6",R,h(r.title),1),s("p",null,h(r.subtitle),1),e(b,{size:"small",variant:"tonal",to:{name:"pages-help-center-category-subcategory-article",params:{category:"getting-started",subcategory:"account",article:"changing-your-username"}}},{default:t(()=>[n(" Read More ")]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}))}},q={},F={class:"bg-var-theme-background py-12"},K=s("h5",{class:"text-h5 text-center mb-6"}," Still need help? ",-1),S=s("p",null,[n(" Our specialists are always happy to help. Contact us during standard business hours or email us "),s("br"),n(" 24/7 and we'll get back to you. ")],-1),z={class:"d-flex justify-center gap-4 flex-wrap"};function E(p,a){return o(),d("div",F,[e(i,{class:"text-center py-6"},{default:t(()=>[K,S,s("div",z,[e(b,null,{default:t(()=>[n("Visit our community")]),_:1}),e(b,null,{default:t(()=>[n("Contact us")]),_:1})])]),_:1})])}const I=L(q,[["render",E]]),O={class:"ps-6",style:{"list-style":"disc"}},T={class:"mt-4"},j={__name:"HelpCenterLandingKnowledgeBase",props:{categories:{type:Array,required:!0}},setup(p){const a=p,y=c=>c.subCategories.map(r=>r.articles.length).reduce((r,u)=>r+u,0);return(c,r)=>{const u=A("RouterLink");return o(),m(f,null,{default:t(()=>[e(g,{cols:"12",lg:"10",class:"mx-auto mb-8"},{default:t(()=>[e(f,null,{default:t(()=>[(o(!0),d(C,null,V(a.categories,l=>(o(),m(g,{key:l.title,cols:"12",sm:"6",md:"4"},{default:t(()=>[e(k,{title:l.title},{prepend:t(()=>[e(N,{icon:l.icon,rounded:"",color:l.avatarColor,variant:"tonal"},null,8,["icon","color"])]),default:t(()=>[e(i,null,{default:t(()=>[s("ul",O,[(o(!0),d(C,null,V(l.subCategories,x=>(o(),d("li",{key:x.title,class:"text-primary mb-2"},[e(u,{to:{name:"pages-help-center-category-subcategory",params:{category:l.slug,subcategory:x.slug}}},{default:t(()=>[n(h(x.title),1)]),_:2},1032,["to"])]))),128))]),s("div",T,[e(u,{to:{name:"pages-help-center-category-subcategory",params:{category:l.slug,subcategory:l.subCategories[0].slug}},class:"text-base font-weight-semibold"},{default:t(()=>[n(h(y(l))+" articles ",1)]),_:2},1032,["to"])])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}}},M=s("h5",{class:"text-h5 text-center my-6"}," Popular Articles ",-1),P=s("h5",{class:"text-h5 text-center my-6"}," Knowledge Base ",-1),G=s("h5",{class:"text-h5 text-center my-6"}," Keep Learning ",-1),ie={__name:"index",setup(p){const a=B();return(()=>D.get("/pages/help-center/landing").then(c=>{a.value=c.data}))(),(c,r)=>{const u=w;return _(a)?(o(),m(k,{key:0},{default:t(()=>[e(u,{title:"Hello, how can we help?",subtitle:"Common troubleshooting topics: eCommerce, Blogging to payment","custom-class":"rounded-0"}),e(i,{class:"py-12"},{default:t(()=>[M,e(v,{articles:_(a).popularArticles},null,8,["articles"])]),_:1}),s("div",null,[e(i,{class:"bg-var-theme-background py-12"},{default:t(()=>[P,e(j,{categories:_(a).categories},null,8,["categories"])]),_:1})]),e(i,{class:"py-12"},{default:t(()=>[G,e(v,{articles:_(a).keepLearning},null,8,["articles"])]),_:1}),e(I)]),_:1})):H("",!0)}}};export{ie as default};
