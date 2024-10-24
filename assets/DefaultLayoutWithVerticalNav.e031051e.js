import{t as g,i as h,o as a,b as n,w as e,q as i,m as u,p as t,y as r,z as b,T as f,e as v,b5 as _,r as k}from"./index.7003a675.js";import{_ as w}from"./TheCustomizer.e033d8d8.js";import y from"./Footer.6cee5775.js";import C from"./NavBarI18n.e7863661.js";import x from"./NavBarNotifications.6ad6ddc7.js";import A from"./NavbarShortcuts.76f27ee0.js";import T from"./NavbarThemeSwitcher.b0cf6e1a.js";import V from"./UserProfile.c099ecda.js";import{V as s}from"./VBtn.1b7ea0a0.js";import{V as P}from"./VSpacer.3bb50a1f.js";import"./VDivider.7b88aa56.js";import"./index.ab1526b4.js";import"./VRadioGroup.8bdb19ee.js";import"./VSelectionControl.e7dcbd2d.js";import"./router.86bbf027.js";import"./VInput.d15c66f3.js";import"./VImg.25cd9a63.js";import"./VSwitch.9a0a067c.js";import"./position.9e9897c5.js";import"./VRow.926379bb.js";import"./VSelect.bd9e7f4f.js";import"./VList.c60191aa.js";import"./VAvatar.b2b787bf.js";import"./forwardRefs.c003b6b8.js";import"./VMenu.50395753.js";import"./scopeId.e384f3cb.js";import"./VOverlay.cefc0bde.js";import"./lazy.4f347889.js";import"./easing.36b781ab.js";import"./VCheckboxBtn.d7fdeb9d.js";import"./VChip.9a57c511.js";import"./VTextField.23f41dc1.js";/* empty css                   */import"./VField.ddbe5abc.js";import"./VCounter.3975aeb3.js";import"./VNavigationDrawer.d4fc6887.js";import"./ssrBoot.8e15fb51.js";import"./formatters.1ccc6423.js";import"./index.0d4b9ec4.js";import"./VBadge.9ee67a16.js";import"./VListItemAction.a714db88.js";import"./VCard.b13dfab6.js";import"./useAppAbility.98cf7e0e.js";const S=[{heading:"Apps & Pages"},{title:"Email",icon:{icon:"tabler-mail"},to:"apps-email"},{title:"Chat",icon:{icon:"tabler-message"},to:"apps-chat"},{title:"Calendar",icon:{icon:"tabler-calendar"},to:"apps-calendar"},{title:"Invoice",icon:{icon:"tabler-file"},children:[{title:"List",to:"apps-invoice-list"},{title:"Preview",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{title:"Edit",to:{name:"apps-invoice-edit-id",params:{id:"5036"}}},{title:"Add",to:"apps-invoice-add"}]},{title:"User",icon:{icon:"tabler-user"},children:[{title:"List",to:"apps-user-list"},{title:"View",to:{name:"apps-user-view-id",params:{id:21}}}]},{title:"Pages",icon:{icon:"tabler-file"},children:[{title:"Authentication",children:[{title:"Login",children:[{title:"Login v1",to:"pages-authentication-login-v1",target:"_blank"},{title:"Login v2",to:"pages-authentication-login-v2",target:"_blank"}]},{title:"Register",children:[{title:"Register v1",to:"pages-authentication-register-v1",target:"_blank"},{title:"Register v2",to:"pages-authentication-register-v2",target:"_blank"}]},{title:"Verify Email",children:[{title:"Verify Email v1",to:"pages-authentication-verify-email-v1",target:"_blank"},{title:"Verify Email v2",to:"pages-authentication-verify-email-v2",target:"_blank"}]},{title:"Forgot Password",children:[{title:"Forgot Password v1",to:"pages-authentication-forgot-password-v1",target:"_blank"},{title:"Forgot Password v2",to:"pages-authentication-forgot-password-v2",target:"_blank"}]},{title:"Reset Password",children:[{title:"Reset Password v1",to:"pages-authentication-reset-password-v1",target:"_blank"},{title:"Reset Password v2",to:"pages-authentication-reset-password-v2",target:"_blank"}]},{title:"Two Steps",children:[{title:"Two Steps v1",to:"pages-authentication-two-steps-v1",target:"_blank"},{title:"Two Steps v2",to:"pages-authentication-two-steps-v2",target:"_blank"}]}]},{title:"Help Center",to:"pages-help-center"},{title:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing",to:"pages-pricing"},{title:"FAQ",to:"pages-faq"},{title:"Miscellaneous",children:[{title:"Coming Soon",to:"pages-misc-coming-soon",target:"_blank"},{title:"Under Maintenance",to:"pages-misc-under-maintenance",target:"_blank"},{title:"Page Not Found - 404",to:"pages-misc-not-found",target:"_blank"},{title:"Not Authorized - 401",to:"pages-misc-not-authorized",target:"_blank"},{title:"Server Error - 500",to:"pages-misc-internal-server-error",target:"_blank"}]}]}],L=[{heading:"Charts"},{title:"Charts",icon:{icon:"tabler-chart-donut"},children:[{title:"Apex Chart",to:"charts-apex-chart"},{title:"Chartjs",to:"charts-chartjs"}]}],R=[{title:"Dashboards",icon:{icon:"tabler-smart-home"},children:[{title:"Analytics",to:"dashboards-analytics"},{title:"eCommerce",to:"dashboards-ecommerce"},{title:"CRM",to:"dashboards-crm"}],badgeContent:"2",badgeClass:"bg-light-primary text-primary"}],F=[{heading:"Forms"},{title:"Form Elements",icon:{icon:"tabler-copy"},children:[{title:"Checkbox",to:"forms-checkbox"},{title:"Combobox",to:"forms-combobox"},{title:"Date Time Picker",to:"forms-date-time-picker"},{title:"File Input",to:"forms-file-input"},{title:"Radio",to:"forms-radio"},{title:"Range Slider",to:"forms-range-slider"},{title:"Rating",to:"forms-rating"},{title:"Select",to:"forms-select"},{title:"Slider",to:"forms-slider"},{title:"Switch",to:"forms-switch"},{title:"Textarea",to:"forms-textarea"},{title:"Textfield",to:"forms-textfield"}]},{title:"Form Layouts",icon:{icon:"tabler-copy"},to:"forms-form-layouts"},{title:"Form Validation",icon:{icon:"tabler-checkbox"},to:"forms-form-validation"}],E=[{heading:"Others"},{title:"Access Control",icon:{icon:"tabler-shield"},to:"access-control",action:"read",subject:"Auth"},{title:"Nav Levels",icon:{icon:"tabler-menu-2"},children:[{title:"Level 2.1",to:null},{title:"Level 2.2",children:[{title:"Level 3.1",to:null},{title:"Level 3.2",to:null}]}]},{title:"Disabled Menu",to:null,icon:{icon:"tabler-eye-off"},disable:!0},{title:"Raise Support",href:"https://pixinvent.ticksy.com/",icon:{icon:"tabler-lifebuoy"},target:"_blank"},{title:"Documentation",href:"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/",icon:{icon:"tabler-file"},target:"_blank"}],z=[{heading:"UI Elements"},{title:"Typography",icon:{icon:"tabler-square-letter-t"},to:"pages-typography"},{title:"Icons",icon:{icon:"tabler-eye"},to:"pages-icons"},{title:"Cards",icon:{icon:"tabler-credit-card"},children:[{title:"Basic",to:"pages-cards-card-basic"},{title:"Advance",to:"pages-cards-card-advance"},{title:"Statistics",to:"pages-cards-card-statistics"},{title:"Analytics",to:"pages-cards-card-analytics"},{title:"Actions",to:"pages-cards-card-actions"}]},{title:"Components",icon:{icon:"tabler-archive"},children:[{title:"Alert",to:"components-alert"},{title:"Avatar",to:"components-avatar"},{title:"Badge",to:"components-badge"},{title:"Button",to:"components-button"},{title:"Chip",to:"components-chip"},{title:"Dialog",to:"components-dialog"},{title:"Expansion Panel",to:"components-expansion-panel"},{title:"List",to:"components-list"},{title:"Menu",to:"components-menu"},{title:"Pagination",to:"components-pagination"},{title:"Snackbar",to:"components-snackbar"},{title:"Tabs",to:"components-tabs"},{title:"Timeline",to:"components-timeline"},{title:"Tooltip",to:"components-tooltip"}]}],B=[...R,...S,...z,...F,...L,...E],N={class:"d-flex h-100 align-center"},Lt={__name:"DefaultLayoutWithVerticalNav",setup($){const{appRouteTransition:l,isLessThanOverlayNavBreakpoint:c}=g(),{width:m}=h();return(D,I)=>{const p=k("RouterView"),d=w;return a(),n(i(_),{"nav-items":i(B)},{navbar:e(({toggleVerticalOverlayNavActive:o})=>[u("div",N,[i(c)(i(m))?(a(),n(s,{key:0,icon:"",variant:"text",color:"default",class:"ms-n3",size:"small",onClick:M=>o(!0)},{default:e(()=>[t(r,{icon:"tabler-menu-2",size:"24"})]),_:2},1032,["onClick"])):b("",!0),t(s,{icon:"",variant:"text",color:"default",class:"ms-lg-n3",size:"small"},{default:e(()=>[t(r,{icon:"tabler-search",size:"24"})]),_:1}),t(P),t(C),t(T),t(A),t(x,{class:"me-2"}),t(V)])]),footer:e(()=>[t(y)]),default:e(()=>[t(p,null,{default:e(({Component:o})=>[t(f,{name:i(l),mode:"out-in"},{default:e(()=>[(a(),n(v(o)))]),_:2},1032,["name"])]),_:1}),t(d)]),_:1},8,["nav-items"])}}};export{Lt as default};