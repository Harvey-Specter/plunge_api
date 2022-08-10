import{d as e,B as t,l as s,r as a,$ as l,E as r,o,c as i,g as n,w as c,e as p,n as d,a as f,x,t as m,a2 as b,j as u}from"./index.701681eb.js";import{E as _}from"./el-card.2c75e3e6.js";import{E as g}from"./el-button.c81d4f55.js";import{_ as v}from"./Sticky.95be202e.js";const $={class:"text-16px font-700"},h={style:{padding:"var(--app-content-padding)"}},k=e({__name:"ContentDetailWrap",props:{title:t.string.def(""),message:t.string.def("")},emits:["back"],setup(e,{emit:t}){const{t:k}=s(),{getPrefixCls:j}=u(),w=j("content-detail-wrap"),y=a(85),C=a();return l((()=>{y.value=C.value.getBoundingClientRect().top})),(s,a)=>{const l=r("Icon");return o(),i("div",{class:d([`${f(w)}-container`,"relative bg-[#fff]"]),ref_key:"contentDetailWrap",ref:C},[n(f(v),{offset:y.value},{default:c((()=>[p("div",{class:d([`${f(w)}-header`,"flex border-bottom-1 h-50px items-center text-center bg-white pr-10px"])},[p("div",{class:d([`${f(w)}-header__back`,"flex pl-10px pr-10px "])},[n(f(g),{onClick:a[0]||(a[0]=e=>t("back"))},{default:c((()=>[n(l,{icon:"ep:arrow-left",class:"mr-5px"}),x(" "+m(f(k)("common.back")),1)])),_:1})],2),p("div",{class:d([`${f(w)}-header__title`,"flex flex-1  justify-center"])},[b(s.$slots,"title",{},(()=>[p("label",$,m(e.title),1)]))],2),p("div",{class:d([`${f(w)}-header__right`,"flex  pl-10px pr-10px"])},[b(s.$slots,"right")],2)],2)])),_:3},8,["offset"]),p("div",h,[n(f(_),{class:d([`${f(w)}-body`,"mb-20px"]),shadow:"never"},{default:c((()=>[p("div",null,[b(s.$slots,"default")])])),_:3},8,["class"])])],2)}}});export{k as _};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudERldGFpbFdyYXAuZTBjYmQ2YWEuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnRlbnREZXRhaWxXcmFwL3NyYy9Db250ZW50RGV0YWlsV3JhcC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IEVsQ2FyZCwgRWxCdXR0b24gfSBmcm9tICdlbGVtZW50LXBsdXMnXG5pbXBvcnQgeyBwcm9wVHlwZXMgfSBmcm9tICdAL3V0aWxzL3Byb3BUeXBlcydcbmltcG9ydCB7IHVzZURlc2lnbiB9IGZyb20gJ0AvaG9va3Mvd2ViL3VzZURlc2lnbidcbmltcG9ydCB7IHJlZiwgb25Nb3VudGVkLCBkZWZpbmVFbWl0cyB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IFN0aWNreSB9IGZyb20gJ0AvY29tcG9uZW50cy9TdGlja3knXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAnQC9ob29rcy93ZWIvdXNlSTE4bidcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpXG5cbmNvbnN0IHsgZ2V0UHJlZml4Q2xzIH0gPSB1c2VEZXNpZ24oKVxuXG5jb25zdCBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2NvbnRlbnQtZGV0YWlsLXdyYXAnKVxuXG5kZWZpbmVQcm9wcyh7XG4gIHRpdGxlOiBwcm9wVHlwZXMuc3RyaW5nLmRlZignJyksXG4gIG1lc3NhZ2U6IHByb3BUeXBlcy5zdHJpbmcuZGVmKCcnKVxufSlcbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0cyhbJ2JhY2snXSlcbmNvbnN0IG9mZnNldCA9IHJlZig4NSlcbmNvbnN0IGNvbnRlbnREZXRhaWxXcmFwID0gcmVmKClcbm9uTW91bnRlZCgoKSA9PiB7XG4gIG9mZnNldC52YWx1ZSA9IGNvbnRlbnREZXRhaWxXcmFwLnZhbHVlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxufSlcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxkaXYgOmNsYXNzPVwiW2Ake3ByZWZpeENsc30tY29udGFpbmVyYCwgJ3JlbGF0aXZlIGJnLVsjZmZmXSddXCIgcmVmPVwiY29udGVudERldGFpbFdyYXBcIj5cbiAgICA8U3RpY2t5IDpvZmZzZXQ9XCJvZmZzZXRcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgOmNsYXNzPVwiW1xuICAgICAgICAgIGAke3ByZWZpeENsc30taGVhZGVyYCxcbiAgICAgICAgICAnZmxleCBib3JkZXItYm90dG9tLTEgaC01MHB4IGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciBiZy13aGl0ZSBwci0xMHB4J1xuICAgICAgICBdXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJbYCR7cHJlZml4Q2xzfS1oZWFkZXJfX2JhY2tgLCAnZmxleCBwbC0xMHB4IHByLTEwcHggJ11cIj5cbiAgICAgICAgICA8ZWwtYnV0dG9uIEBjbGljaz1cImVtaXQoJ2JhY2snKVwiPlxuICAgICAgICAgICAgPEljb24gaWNvbj1cImVwOmFycm93LWxlZnRcIiBjbGFzcz1cIm1yLTVweFwiIC8+XG4gICAgICAgICAgICB7eyB0KCdjb21tb24uYmFjaycpIH19XG4gICAgICAgICAgPC9lbC1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IDpjbGFzcz1cIltgJHtwcmVmaXhDbHN9LWhlYWRlcl9fdGl0bGVgLCAnZmxleCBmbGV4LTEgIGp1c3RpZnktY2VudGVyJ11cIj5cbiAgICAgICAgICA8c2xvdCBuYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInRleHQtMTZweCBmb250LTcwMFwiPnt7IHRpdGxlIH19PC9sYWJlbD5cbiAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IDpjbGFzcz1cIltgJHtwcmVmaXhDbHN9LWhlYWRlcl9fcmlnaHRgLCAnZmxleCAgcGwtMTBweCBwci0xMHB4J11cIj5cbiAgICAgICAgICA8c2xvdCBuYW1lPVwicmlnaHRcIj48L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9TdGlja3k+XG4gICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6IHZhcigtLWFwcC1jb250ZW50LXBhZGRpbmcpXCI+XG4gICAgICA8RWxDYXJkIDpjbGFzcz1cIltgJHtwcmVmaXhDbHN9LWJvZHlgLCAnbWItMjBweCddXCIgc2hhZG93PVwibmV2ZXJcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9FbENhcmQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiJdLCJuYW1lcyI6WyJ0IiwidXNlSTE4biIsImdldFByZWZpeENscyIsInVzZURlc2lnbiIsInByZWZpeENscyIsIm9mZnNldCIsInJlZiIsImNvbnRlbnREZXRhaWxXcmFwIiwib25Nb3VudGVkIiwidmFsdWUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiXSwibWFwcGluZ3MiOiI2ZEFPTSxNQUFBQSxFQUFFQSxHQUFNQyxLQUVSQyxhQUFFQSxHQUFpQkMsSUFFbkJDLEVBQVlGLEVBQWEsdUJBT3pCRyxFQUFTQyxFQUFJLElBQ2JDLEVBQW9CRCxXQUMxQkUsR0FBVSxLQUNSSCxFQUFPSSxNQUFRRixFQUFrQkUsTUFBTUMsd0JBQXdCQyJ9
