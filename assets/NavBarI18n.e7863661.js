import{M as m,o as r,b as s,w as a,p as o,y as u,c as g,F as f,a as _,E as d,x as L,t as h}from"./index.7003a675.js";import{V}from"./VMenu.50395753.js";import{V as b,a as v,b as x}from"./VList.c60191aa.js";import{V as C}from"./VBtn.1b7ea0a0.js";import"./forwardRefs.c003b6b8.js";import"./scopeId.e384f3cb.js";import"./VOverlay.cefc0bde.js";import"./router.86bbf027.js";import"./lazy.4f347889.js";import"./easing.36b781ab.js";import"./VImg.25cd9a63.js";import"./index.ab1526b4.js";import"./VAvatar.b2b787bf.js";import"./VDivider.7b88aa56.js";import"./position.9e9897c5.js";const k={__name:"I18n",props:{languages:{type:Array,required:!0},location:{type:null,required:!1,default:"bottom end"}},emits:["change"],setup(l,{emit:c}){const t=l,{locale:i}=m({useScope:"global"});return(n,p)=>(r(),s(C,{icon:"",variant:"text",color:"default",size:"small"},{default:a(()=>[o(u,{icon:"tabler-language",size:"24"}),o(V,{activator:"parent",location:t.location,offset:"14px"},{default:a(()=>[o(b,{"min-width":"175px"},{default:a(()=>[(r(!0),g(f,null,_(t.languages,e=>(r(),s(v,{key:e.i18nLang,value:e.i18nLang,onClick:y=>{i.value=e.i18nLang,n.$emit("change",e.i18nLang)}},{default:a(()=>[o(x,null,{default:a(()=>[d(L(e.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1},8,["location"])]),_:1}))}},j={__name:"NavBarI18n",setup(l){const{isAppRtl:c}=h(),t=[{label:"English",i18nLang:"en"},{label:"French",i18nLang:"fr"},{label:"Arabic",i18nLang:"ar"}],i=n=>{c.value=n==="ar"};return(n,p)=>(r(),s(k,{languages:t,onChange:i}))}};export{j as default};