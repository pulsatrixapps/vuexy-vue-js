import{a7 as b,B as M,q as L,ah as O,aO as j}from"./index.7003a675.js";const I=(t,l,e)=>t==null||l==null?-1:t.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()),w=b({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function S(t,l,e){var f,a;const i=[],m=(f=e==null?void 0:e.default)!=null?f:I,c=e!=null&&e.filterKeys?O(e.filterKeys):!1,y=Object.keys((a=e==null?void 0:e.customKeyFilter)!=null?a:{}).length;if(!(t!=null&&t.length))return i;e:for(let u=0;u<t.length;u++){const n=t[u],h={},o={};let r=-1;if(l&&!(e!=null&&e.noFilter)){if(typeof n=="object"){const k=c||Object.keys(n);for(const d of k){var s;const K=j(n,d,n),v=e==null||(s=e.customKeyFilter)==null?void 0:s[d];if(r=v?v(K,l,n):m(K,l,n),r!==-1&&r!==!1)v?h[d]=r:o[d]=r;else if((e==null?void 0:e.filterMode)==="every")continue e}}else r=m(n,l,n),r!==-1&&r!==!1&&(o.title=r);const F=Object.keys(o).length,g=Object.keys(h).length;if(!F&&!g||(e==null?void 0:e.filterMode)==="union"&&g!==y&&!F||(e==null?void 0:e.filterMode)==="intersection"&&(g!==y||!F))continue}i.push({index:u,matches:{...o,...h}})}return i}function A(t,l,e){const i=M(()=>typeof(e==null?void 0:e.value)!="string"&&typeof(e==null?void 0:e.value)!="number"?"":String(e.value));return{filteredItems:M(()=>{const c=L(l);return S(c,i.value,{customKeyFilter:t.customKeyFilter,default:t.customFilter,filterKeys:t.filterKeys,filterMode:t.filterMode,noFilter:t.noFilter}).map(s=>{let{index:f,matches:a}=s;return{item:c[f],matches:a}})})}}export{w as m,A as u};
