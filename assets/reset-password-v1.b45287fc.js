import{k as p,o as b,c as h,m as a,p as e,q as o,w as t,V as y,v as f,E as m,x as v,b9 as x,y as g,r as P}from"./index.7003a675.js";import{a as k,b as C}from"./auth-v1-top-shape.37562e7c.js";import{b as c}from"./route-block.023af118.js";import{V as u}from"./VImg.25cd9a63.js";import{a as B,b as N,c as V,V as I}from"./VCard.b13dfab6.js";import{V as R}from"./VForm.27499219.js";import{V as S,a as d}from"./VRow.926379bb.js";import{V as _}from"./VTextField.23f41dc1.js";import{V as T}from"./VBtn.1b7ea0a0.js";import"./router.86bbf027.js";import"./VAvatar.b2b787bf.js";import"./position.9e9897c5.js";import"./VInput.d15c66f3.js";import"./index.ab1526b4.js";import"./forwardRefs.c003b6b8.js";/* empty css                   */import"./VField.ddbe5abc.js";import"./easing.36b781ab.js";import"./VCounter.3975aeb3.js";const j={class:"auth-wrapper d-flex align-center justify-center pa-4"},E={class:"position-relative my-sm-16"},F={class:"d-flex"},L=a("h5",{class:"text-h5 font-weight-semibold mb-1"}," Reset Password \u{1F512} ",-1),U=a("p",{class:"mb-0"},[m(" for "),a("span",{class:"font-weight-bold"},"john.doe@email.com")],-1),$=a("span",null,"Back to login",-1),q={__name:"reset-password-v1",setup(D){const l=p({newPassword:"",confirmPassword:""}),r=p(!1),i=p(!1);return(M,s)=>{const w=P("RouterLink");return b(),h("div",j,[a("div",E,[e(u,{src:o(k),class:"auth-v1-top-shape d-none d-sm-block"},null,8,["src"]),e(u,{src:o(C),class:"auth-v1-bottom-shape d-none d-sm-block"},null,8,["src"]),e(I,{class:"auth-card pa-4","max-width":"448"},{default:t(()=>[e(B,{class:"justify-center"},{prepend:t(()=>[a("div",F,[e(o(y),{nodes:o(f).app.logo},null,8,["nodes"])])]),default:t(()=>[e(N,{class:"font-weight-bold text-h5 py-1"},{default:t(()=>[m(v(o(f).app.title),1)]),_:1})]),_:1}),e(V,{class:"pt-2"},{default:t(()=>[L,U]),_:1}),e(V,null,{default:t(()=>[e(R,{onSubmit:s[4]||(s[4]=x(()=>{},["prevent"]))},{default:t(()=>[e(S,null,{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[e(_,{modelValue:o(l).newPassword,"onUpdate:modelValue":s[0]||(s[0]=n=>o(l).newPassword=n),label:"New Password",type:o(r)?"text":"password","append-inner-icon":o(r)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[1]||(s[1]=n=>r.value=!o(r))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(_,{modelValue:o(l).confirmPassword,"onUpdate:modelValue":s[2]||(s[2]=n=>o(l).confirmPassword=n),label:"Confirm Password",type:o(i)?"text":"password","append-inner-icon":o(i)?"tabler-eye-off":"tabler-eye","onClick:appendInner":s[3]||(s[3]=n=>i.value=!o(i))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(T,{block:"",type:"submit"},{default:t(()=>[m(" Set New Password ")]),_:1})]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(w,{class:"d-flex align-center justify-center",to:{name:"pages-authentication-login-v1"}},{default:t(()=>[e(g,{icon:"tabler-chevron-left",class:"flip-in-rtl"}),$]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])])}}};typeof c=="function"&&c(q);export{q as default};
