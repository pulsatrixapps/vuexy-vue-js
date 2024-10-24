import{m as ne,f as ae,V as oe}from"./VField.ddbe5abc.js";import{m as ie,f as se,a as ce}from"./VInput.d15c66f3.js";import{f as ue}from"./forwardRefs.c003b6b8.js";import{a0 as pe,ah as re,aC as de,ae as me,B as y,cV as T,k as I,a6 as _e,ay as fe,p as e,O as N,F as x,aY as E,ar as he,Z as ve,o as p,b as r,q as R,D as O,w as a,c as Ve,a as Fe,E as t,x as be,L as V,m as n}from"./index.7003a675.js";import{V as Y}from"./VChip.9a57c511.js";import{V as ge}from"./VCounter.3975aeb3.js";import{a as c,V as H}from"./VRow.926379bb.js";import{_ as Ie}from"./AppCardCode.5090160b.js";import"./index.ab1526b4.js";import"./position.9e9897c5.js";import"./router.86bbf027.js";import"./easing.36b781ab.js";import"./VImg.25cd9a63.js";import"./VBtn.1b7ea0a0.js";import"./VAvatar.b2b787bf.js";import"./vue.runtime.esm-bundler.4c148a89.js";import"./VCard.b13dfab6.js";import"./VDivider.7b88aa56.js";const u=pe({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,hint:String,persistentHint:Boolean,placeholder:String,showSize:{type:[Boolean,Number],default:!1,validator:l=>typeof l=="boolean"||[1e3,1024].includes(l)},...ie({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:l=>re(l).every(i=>i!=null&&typeof i=="object")},...ne({clearable:!0})},emits:{"click:control":l=>!0,"update:modelValue":l=>!0},setup(l,i){let{attrs:d,emit:F,slots:o}=i;const{t:h}=de(),m=me(l,"modelValue"),k=y(()=>typeof l.showSize!="boolean"?l.showSize:void 0),S=y(()=>{var s;return((s=m.value)!=null?s:[]).reduce((_,v)=>{let{size:w=0}=v;return _+w},0)}),$=y(()=>T(S.value,k.value)),C=y(()=>{var s;return((s=m.value)!=null?s:[]).map(_=>{const{name:v="",size:w=0}=_;return l.showSize?`${v} (${T(w,k.value)})`:v})}),j=y(()=>{var v;var s;const _=(v=(s=m.value)==null?void 0:s.length)!=null?v:0;return l.showSize?h(l.counterSizeString,_,$.value):h(l.counterString,_)}),D=I(),B=I(),b=I(!1),f=I(),q=y(()=>l.messages.length?l.messages:l.persistentHint?l.hint:"");function A(){if(f.value!==document.activeElement){var s;(s=f.value)==null||s.focus()}b.value||(b.value=!0)}function W(s){E(l["onClick:prepend"],s),L(s)}function L(s){var _;(_=f.value)==null||_.click(),F("click:control",s)}function Z(s){s.stopPropagation(),A(),he(()=>{m.value=[],f!=null&&f.value&&(f.value.value=""),E(l["onClick:clear"],s)})}return _e(()=>{const s=!!(o.counter||l.counter),_=!!(s||o.details),[v,w]=fe(d),[{modelValue:yl,...G}]=se(l),[J]=ae(l);return e(ce,N({ref:D,modelValue:m.value,"onUpdate:modelValue":z=>m.value=z,class:"v-file-input","onClick:prepend":W,"onClick:append":l["onClick:append"]},v,G,{focused:b.value,messages:q.value}),{...o,default:z=>{let{isDisabled:P,isDirty:U,isReadonly:K,isValid:Q}=z;return e(oe,N({ref:B,"prepend-icon":l.prependIcon,"onClick:control":L,"onClick:clear":Z,"onClick:prependInner":l["onClick:prependInner"],"onClick:appendInner":l["onClick:appendInner"]},J,{active:U.value||b.value,dirty:U.value,focused:b.value,error:Q.value===!1}),{...o,default:X=>{let{props:{class:ee,...le}}=X;return e(x,null,[e("input",N({ref:f,type:"file",readonly:K.value,disabled:P.value,multiple:l.multiple,name:l.name,onClick:g=>{g.stopPropagation(),A()},onChange:g=>{var M;if(!g.target)return;const te=g.target;m.value=[...(M=te.files)!=null?M:[]]},onFocus:A,onBlur:()=>b.value=!1},le,w),null),e("div",{class:ee},[m.value.length>0&&(o.selection?o.selection({fileNames:C.value,totalBytes:S.value,totalBytesReadable:$.value}):l.chips?C.value.map(g=>e(Y,{key:g,size:"small",color:l.color},{default:()=>[g]})):C.value.join(", "))])])}})},details:_?z=>{var P;return e(x,null,[(P=o.details)==null?void 0:P.call(o,z),s&&e(x,null,[e("span",null,null),e(ge,{active:!!m.value.length,value:j.value},o.counter)])])}:void 0})}),ue({},D,B,f)}}),ye={__name:"DemoFileInputLoading",setup(l){const i=I(),d=I(!0);return ve(i,()=>{d.value=!i.value[0]}),(F,o)=>(p(),r(u,{modelValue:R(i),"onUpdate:modelValue":o[0]||(o[0]=h=>O(i)?i.value=h:null),loading:R(d),color:"primary",label:"File input"},null,8,["modelValue","loading"]))}},Ce={__name:"DemoFileInputSelectionSlot",setup(l){const i=I([]);return(d,F)=>(p(),r(u,{modelValue:R(i),"onUpdate:modelValue":F[0]||(F[0]=o=>O(i)?i.value=o:null),multiple:"",placeholder:"Upload your documents",label:"File input","prepend-icon":"tabler-paperclip"},{selection:a(({fileNames:o})=>[(p(!0),Ve(x,null,Fe(o,h=>(p(),r(Y,{key:h,label:"",size:"small",variant:"outlined",color:"primary",class:"me-2"},{default:a(()=>[t(be(h),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}},we={__name:"DemoFileInputValidation",setup(l){const i=[d=>!d||!d.length||d[0].size<1e6||"Avatar size should be less than 1 MB!"];return(d,F)=>(p(),r(u,{rules:i,label:"Avatar",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"tabler-camera"}))}},ze={};function ke(l,i){return p(),r(u,{"show-size":"",label:"File input"})}const Se=V(ze,[["render",ke]]),$e={};function De(l,i){return p(),r(u,{label:"File input","prepend-icon":"tabler-camera"})}const Be=V($e,[["render",De]]),Pe={};function xe(l,i){return p(),r(u,{multiple:"",label:"File input"})}const je=V(Pe,[["render",xe]]),Ae={};function Ne(l,i){return p(),r(u,{"show-size":"",counter:"",multiple:"",label:"File input"})}const Re=V(Ae,[["render",Ne]]),Le={};function Ue(l,i){return p(),r(u,{chips:"",label:"File input w/ chips"})}const Me=V(Le,[["render",Ue]]),Te={};function Ee(l,i){return p(),r(u,{accept:"image/*",label:"File input"})}const Oe=V(Te,[["render",Ee]]),Ye={};function He(l,i){return p(),r(H,null,{default:a(()=>[e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Outlined"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Filled",variant:"filled"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Solo",variant:"solo"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Plain",variant:"plain"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:a(()=>[e(u,{label:"Underlined",variant:"underlined",density:"default"})]),_:1})]),_:1})}const qe=V(Ye,[["render",He]]),We={};function Ze(l,i){return p(),r(u,{label:"File input",density:"compact"})}const Ge=V(We,[["render",Ze]]),Je={};function Ke(l,i){return p(),r(u,{label:"File input"})}const Qe=V(Je,[["render",Ke]]),Xe={ts:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`},el={ts:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`},ll={ts:`<script lang="ts" setup>
const rules = [
  (fileList: FileList) => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!',
]
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>
`,js:`<script setup>
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!']
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>
`},tl={ts:`<template>
  <VFileInput
    label="File input"
    prepend-icon="tabler-camera"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    prepend-icon="tabler-camera"
  />
</template>
`},nl={ts:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`},al={ts:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`},ol={ts:`<script setup lang="ts">
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`,js:`<script setup>
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`},il={ts:`<template>
  <VFileInput label="File input" />
</template>
`,js:`<template>
  <VFileInput label="File input" />
</template>
`},sl={ts:`<script lang="ts" setup>
const files = ref<File[]>([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="tabler-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`,js:`<script setup>
const files = ref([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="tabler-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`},cl={ts:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`},ul={ts:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`,js:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`},pl={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`},rl=n("p",null,[t("The "),n("code",null,"v-file-input"),t(" component is used to selecting files.")],-1),dl=n("p",null,[t("You can reduces the file input height with "),n("code",null,"density"),t(" prop. Available options are: "),n("code",null,"default"),t(", "),n("code",null,"comfortable"),t(", and "),n("code",null,"compact"),t(".")],-1),ml=n("p",null,[t("use "),n("code",null,"solo"),t(", "),n("code",null,"filled"),t(", "),n("code",null,"outlined"),t(", "),n("code",null,"plain"),t(" and "),n("code",null,"underlined"),t(" option of "),n("code",null,"variant"),t(" prop to change the look of file input.")],-1),_l=n("p",null,[n("code",null,"v-file-input"),t(" component can accept only specific media formats/file types if you want.")],-1),fl=n("p",null,[t("Use "),n("code",null,"chip"),t(" prop to display the selected file as a chip.")],-1),hl=n("p",null,[t("When using the "),n("code",null,"show-size"),t(" property along with "),n("code",null,"counter"),t(", the total number of files and size will be displayed under the input.")],-1),vl=n("p",null,[t(" The "),n("code",null,"v-file-input"),t(" can contain multiple files at the same time when using the "),n("code",null,"multiple"),t(" prop. ")],-1),Vl=n("p",null,[t(" The "),n("code",null,"v-file-input"),t(" has a default "),n("code",null,"prepend-icon"),t(" that can be set on the component or adjusted globally. ")],-1),Fl=n("p",null,[t("The displayed size of the selected file(s) can be configured with the "),n("code",null,"show-size"),t(" property.")],-1),bl=n("p",null,[t("You can use the "),n("code",null,"rules"),t(" prop to create your own custom validation parameters.")],-1),gl=n("p",null,[t("Using the "),n("code",null,"selection"),t(" slot, you can customize the appearance of your input selections.")],-1),Il=n("p",null,[t("Use "),n("code",null,"loading"),t(" prop to displays linear progress bar.")],-1),El={__name:"file-input",setup(l){return(i,d)=>{const F=Qe,o=Ie,h=Ge,m=qe,k=Oe,S=Me,$=Re,C=je,j=Be,D=Se,B=we,b=Ce,f=ye;return p(),r(H,{class:"match-height"},{default:a(()=>[e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Basic",code:il},{default:a(()=>[rl,e(F)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Density",code:el},{default:a(()=>[dl,e(h)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12"},{default:a(()=>[e(o,{title:"Variant",code:pl},{default:a(()=>[ml,e(m)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Accept",code:Xe},{default:a(()=>[_l,e(k)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Chips",code:ul},{default:a(()=>[fl,e(S)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Counter",code:cl},{default:a(()=>[hl,e($)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Multiple",code:nl},{default:a(()=>[vl,e(C)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Prepend icon",code:tl},{default:a(()=>[Vl,e(j)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Show size",code:al},{default:a(()=>[Fl,e(D)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Validation",code:ll},{default:a(()=>[bl,e(B)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Selection slot",code:sl},{default:a(()=>[gl,e(b)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:a(()=>[e(o,{title:"Loading",code:ol},{default:a(()=>[Il,e(f)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{El as default};
