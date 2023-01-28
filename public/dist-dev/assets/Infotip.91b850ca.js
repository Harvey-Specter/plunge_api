import{_ as e}from"./Highlight.vue_vue_type_script_lang.b0c48bf7.js";import{d as s,B as r,E as t,o,c as l,n as a,a as i,g as c,e as p,t as n,at as d,G as f,F as m,w as x,x as g,j as _}from"./index.f2e05143.js";const h=s({__name:"Infotip",props:{title:r.string.def(""),schema:{type:Array,required:!0,default:()=>[]},showIndex:r.bool.def(!0),highlightColor:r.string.def("var(--el-color-primary)")},emits:["click"],setup(s,{emit:r}){const{getPrefixCls:h}=_(),y=h("infotip"),b=e=>{r("click",e)};return(r,_)=>{const h=t("Icon");return o(),l("div",{class:a([i(y),"p-20px mb-20px border-1px border-solid border-[var(--el-color-primary)] bg-[var(--el-color-primary-light-9)]"])},[s.title?(o(),l("div",{key:0,class:a([`${i(y)}__header`,"flex items-center"])},[c(h,{icon:"bi:exclamation-circle-fill",size:22,color:"var(--el-color-primary)"}),p("span",{class:a([`${i(y)}__title`,"pl-5px text-16px font-bold"])},n(s.title),3)],2)):d("",!0),p("div",{class:a(`${i(y)}__content`)},[(o(!0),l(f,null,m(s.schema,((r,t)=>(o(),l("p",{key:t,class:"text-14px mt-15px"},[c(i(e),{keys:"string"==typeof r?[]:r.keys,color:s.highlightColor,onClick:b},{default:x((()=>[g(n(s.showIndex?`${t+1}、`:"")+n("string"==typeof r?r:r.label),1)])),_:2},1032,["keys","color"])])))),128))],2)],2)}}});export{h as _};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5mb3RpcC45MWI4NTBjYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvSW5mb3RpcC9zcmMvSW5mb3RpcC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IFByb3BUeXBlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSAnQC8vY29tcG9uZW50cy9IaWdobGlnaHQnXG5pbXBvcnQgeyB1c2VEZXNpZ24gfSBmcm9tICdAL2hvb2tzL3dlYi91c2VEZXNpZ24nXG5pbXBvcnQgeyBwcm9wVHlwZXMgfSBmcm9tICdAL3V0aWxzL3Byb3BUeXBlcydcblxuY29uc3QgeyBnZXRQcmVmaXhDbHMgfSA9IHVzZURlc2lnbigpXG5cbmNvbnN0IHByZWZpeENscyA9IGdldFByZWZpeENscygnaW5mb3RpcCcpXG5cbmRlZmluZVByb3BzKHtcbiAgdGl0bGU6IHByb3BUeXBlcy5zdHJpbmcuZGVmKCcnKSxcbiAgc2NoZW1hOiB7XG4gICAgdHlwZTogQXJyYXkgYXMgUHJvcFR5cGU8QXJyYXk8c3RyaW5nIHwgVGlwU2NoZW1hPj4sXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgZGVmYXVsdDogKCkgPT4gW11cbiAgfSxcbiAgc2hvd0luZGV4OiBwcm9wVHlwZXMuYm9vbC5kZWYodHJ1ZSksXG4gIGhpZ2hsaWdodENvbG9yOiBwcm9wVHlwZXMuc3RyaW5nLmRlZigndmFyKC0tZWwtY29sb3ItcHJpbWFyeSknKVxufSlcblxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzKFsnY2xpY2snXSlcblxuY29uc3Qga2V5Q2xpY2sgPSAoa2V5OiBzdHJpbmcpID0+IHtcbiAgZW1pdCgnY2xpY2snLCBrZXkpXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgOmNsYXNzPVwiW1xuICAgICAgcHJlZml4Q2xzLFxuICAgICAgJ3AtMjBweCBtYi0yMHB4IGJvcmRlci0xcHggYm9yZGVyLXNvbGlkIGJvcmRlci1bdmFyKC0tZWwtY29sb3ItcHJpbWFyeSldIGJnLVt2YXIoLS1lbC1jb2xvci1wcmltYXJ5LWxpZ2h0LTkpXSdcbiAgICBdXCJcbiAgPlxuICAgIDxkaXYgdi1pZj1cInRpdGxlXCIgOmNsYXNzPVwiW2Ake3ByZWZpeENsc31fX2hlYWRlcmAsICdmbGV4IGl0ZW1zLWNlbnRlciddXCI+XG4gICAgICA8SWNvbiBpY29uPVwiYmk6ZXhjbGFtYXRpb24tY2lyY2xlLWZpbGxcIiA6c2l6ZT1cIjIyXCIgY29sb3I9XCJ2YXIoLS1lbC1jb2xvci1wcmltYXJ5KVwiIC8+XG4gICAgICA8c3BhbiA6Y2xhc3M9XCJbYCR7cHJlZml4Q2xzfV9fdGl0bGVgLCAncGwtNXB4IHRleHQtMTZweCBmb250LWJvbGQnXVwiPnt7IHRpdGxlIH19PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgOmNsYXNzPVwiYCR7cHJlZml4Q2xzfV9fY29udGVudGBcIj5cbiAgICAgIDxwIHYtZm9yPVwiKGl0ZW0sICRpbmRleCkgaW4gc2NoZW1hXCIgOmtleT1cIiRpbmRleFwiIGNsYXNzPVwidGV4dC0xNHB4IG10LTE1cHhcIj5cbiAgICAgICAgPEhpZ2hsaWdodFxuICAgICAgICAgIDprZXlzPVwidHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnID8gW10gOiBpdGVtLmtleXNcIlxuICAgICAgICAgIDpjb2xvcj1cImhpZ2hsaWdodENvbG9yXCJcbiAgICAgICAgICBAY2xpY2s9XCJrZXlDbGlja1wiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBzaG93SW5kZXggPyBgJHskaW5kZXggKyAxfeOAgWAgOiAnJyB9fXt7IHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyA/IGl0ZW0gOiBpdGVtLmxhYmVsIH19XG4gICAgICAgIDwvSGlnaGxpZ2h0PlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsiZ2V0UHJlZml4Q2xzIiwidXNlRGVzaWduIiwicHJlZml4Q2xzIiwia2V5Q2xpY2siLCJrZXkiLCJlbWl0Il0sIm1hcHBpbmdzIjoiOGFBTU0sTUFBQUEsYUFBRUEsR0FBaUJDLElBRW5CQyxFQUFZRixFQUFhLFdBZXpCRyxFQUFZQyxJQUNoQkMsRUFBSyxRQUFTRCJ9
