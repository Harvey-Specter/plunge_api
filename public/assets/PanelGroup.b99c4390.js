import{d as e,k as t,r as s,s as a,E as l,o as i,h as n,w as o,g as d,a as r,e as c,n as x,t as u,j as m}from"./index.f2e05143.js";import{a as _,E as f}from"./el-col.ae597e62.js";import{E as p}from"./el-card.76af1dc0.js";import{E as g}from"./el-skeleton-item.16ba91c5.js";import{_ as v}from"./CountTo.e9692931.js";import{u as y}from"./useAxios.5e836160.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";const b=y(),h=async()=>{const e=await b.get({url:"/analysis/userAccessSource"});return e&&e.data},j=async()=>{const e=await b.get({url:"/analysis/weeklyUserActivity"});return e&&e.data},$=async()=>{const e=await b.get({url:"/analysis/monthlySales"});return e&&e.data};const k={class:"flex flex-col justify-between"},z={class:"flex flex-col justify-between"},S={class:"flex flex-col justify-between"},A={class:"flex flex-col justify-between"};var E=w(e({__name:"PanelGroup",setup(e){const{t:y}=t(),{getPrefixCls:w}=m(),h=w("panel"),j=s(!0);let $=a({users:0,messages:0,moneys:0,shoppings:0});return(async()=>{const e=await(async()=>{const e=await b.get({url:"/analysis/total"});return e&&e.data})().catch((()=>{})).finally((()=>{j.value=!1}));$=Object.assign($,(null==e?void 0:e.data)||{})})(),(e,t)=>{const s=l("Icon");return i(),n(r(f),{gutter:20,justify:"space-between",class:x(r(h))},{default:o((()=>[d(r(_),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[d(r(p),{shadow:"hover",class:"mb-20px"},{default:o((()=>[d(r(g),{loading:j.value,animated:"",rows:2},{default:o((()=>[c("div",{class:x(`${r(h)}__item flex justify-between`)},[c("div",null,[c("div",{class:x(`${r(h)}__item--icon ${r(h)}__item--peoples p-16px inline-block rounded-6px`)},[d(s,{icon:"svg-icon:peoples",size:40})],2)]),c("div",k,[c("div",{class:x(`${r(h)}__item--text text-16px text-gray-500 text-right`)},u(r(y)("analysis.newUser")),3),d(r(v),{class:"text-20px font-700 text-right","start-val":0,"end-val":102400,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),d(r(_),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[d(r(p),{shadow:"hover",class:"mb-20px"},{default:o((()=>[d(r(g),{loading:j.value,animated:"",rows:2},{default:o((()=>[c("div",{class:x(`${r(h)}__item flex justify-between`)},[c("div",null,[c("div",{class:x(`${r(h)}__item--icon ${r(h)}__item--message p-16px inline-block rounded-6px`)},[d(s,{icon:"svg-icon:message",size:40})],2)]),c("div",z,[c("div",{class:x(`${r(h)}__item--text text-16px text-gray-500 text-right`)},u(r(y)("analysis.unreadInformation")),3),d(r(v),{class:"text-20px font-700 text-right","start-val":0,"end-val":81212,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),d(r(_),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[d(r(p),{shadow:"hover",class:"mb-20px"},{default:o((()=>[d(r(g),{loading:j.value,animated:"",rows:2},{default:o((()=>[c("div",{class:x(`${r(h)}__item flex justify-between`)},[c("div",null,[c("div",{class:x(`${r(h)}__item--icon ${r(h)}__item--money p-16px inline-block rounded-6px`)},[d(s,{icon:"svg-icon:money",size:40})],2)]),c("div",S,[c("div",{class:x(`${r(h)}__item--text text-16px text-gray-500 text-right`)},u(r(y)("analysis.transactionAmount")),3),d(r(v),{class:"text-20px font-700 text-right","start-val":0,"end-val":9280,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),d(r(_),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[d(r(p),{shadow:"hover",class:"mb-20px"},{default:o((()=>[d(r(g),{loading:j.value,animated:"",rows:2},{default:o((()=>[c("div",{class:x(`${r(h)}__item flex justify-between`)},[c("div",null,[c("div",{class:x(`${r(h)}__item--icon ${r(h)}__item--shopping p-16px inline-block rounded-6px`)},[d(s,{icon:"svg-icon:shopping",size:40})],2)]),c("div",A,[c("div",{class:x(`${r(h)}__item--text text-16px text-gray-500 text-right`)},u(r(y)("analysis.totalShopping")),3),d(r(v),{class:"text-20px font-700 text-right","start-val":0,"end-val":13600,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1},8,["class"])}}}),[["__scopeId","data-v-11dbf752"]]),P=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));export{E as P,j as a,$ as b,P as c,h as g};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFuZWxHcm91cC5iOTljNDM5MC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9kYXNoYm9hcmQvYW5hbHlzaXMvaW5kZXgudHMiLCIuLi8uLi9zcmMvdmlld3MvRGFzaGJvYXJkL2NvbXBvbmVudHMvUGFuZWxHcm91cC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQXhpb3MgfSBmcm9tICdAL2hvb2tzL3dlYi91c2VBeGlvcydcbmltcG9ydCB0eXBlIHtcbiAgQW5hbHlzaXNUb3RhbFR5cGVzLFxuICBVc2VyQWNjZXNzU291cmNlLFxuICBXZWVrbHlVc2VyQWN0aXZpdHksXG4gIE1vbnRobHlTYWxlc1xufSBmcm9tICcuL3R5cGVzJ1xuXG5jb25zdCByZXF1ZXN0ID0gdXNlQXhpb3MoKVxuXG5leHBvcnQgY29uc3QgZ2V0Q291bnRBcGkgPSBhc3luYyAoKTogUHJvbWlzZTxJUmVzcG9uc2U8QW5hbHlzaXNUb3RhbFR5cGVzW10+PiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QuZ2V0KHsgdXJsOiAnL2FuYWx5c2lzL3RvdGFsJyB9KVxuICByZXR1cm4gcmVzICYmIHJlcy5kYXRhXG59XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyQWNjZXNzU291cmNlQXBpID0gYXN5bmMgKCk6IFByb21pc2U8SVJlc3BvbnNlPFVzZXJBY2Nlc3NTb3VyY2VbXT4+ID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdC5nZXQoeyB1cmw6ICcvYW5hbHlzaXMvdXNlckFjY2Vzc1NvdXJjZScgfSlcbiAgcmV0dXJuIHJlcyAmJiByZXMuZGF0YVxufVxuXG5leHBvcnQgY29uc3QgZ2V0V2Vla2x5VXNlckFjdGl2aXR5QXBpID0gYXN5bmMgKCk6IFByb21pc2U8SVJlc3BvbnNlPFdlZWtseVVzZXJBY3Rpdml0eVtdPj4gPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0LmdldCh7IHVybDogJy9hbmFseXNpcy93ZWVrbHlVc2VyQWN0aXZpdHknIH0pXG4gIHJldHVybiByZXMgJiYgcmVzLmRhdGFcbn1cblxuZXhwb3J0IGNvbnN0IGdldE1vbnRobHlTYWxlc0FwaSA9IGFzeW5jICgpOiBQcm9taXNlPElSZXNwb25zZTxNb250aGx5U2FsZXNbXT4+ID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdC5nZXQoeyB1cmw6ICcvYW5hbHlzaXMvbW9udGhseVNhbGVzJyB9KVxuICByZXR1cm4gcmVzICYmIHJlcy5kYXRhXG59XG4iLCI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgRWxSb3csIEVsQ29sLCBFbENhcmQsIEVsU2tlbGV0b24gfSBmcm9tICdlbGVtZW50LXBsdXMnXG5pbXBvcnQgeyBDb3VudFRvIH0gZnJvbSAnQC9jb21wb25lbnRzL0NvdW50VG8nXG5pbXBvcnQgeyB1c2VEZXNpZ24gfSBmcm9tICdAL2hvb2tzL3dlYi91c2VEZXNpZ24nXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAnQC9ob29rcy93ZWIvdXNlSTE4bidcbmltcG9ydCB7IHJlZiwgcmVhY3RpdmUgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBnZXRDb3VudEFwaSB9IGZyb20gJ0AvYXBpL2Rhc2hib2FyZC9hbmFseXNpcydcbmltcG9ydCB0eXBlIHsgQW5hbHlzaXNUb3RhbFR5cGVzIH0gZnJvbSAnQC9hcGkvZGFzaGJvYXJkL2FuYWx5c2lzL3R5cGVzJ1xuXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKVxuXG5jb25zdCB7IGdldFByZWZpeENscyB9ID0gdXNlRGVzaWduKClcblxuY29uc3QgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdwYW5lbCcpXG5cbmNvbnN0IGxvYWRpbmcgPSByZWYodHJ1ZSlcblxubGV0IHRvdGFsU3RhdGUgPSByZWFjdGl2ZTxBbmFseXNpc1RvdGFsVHlwZXM+KHtcbiAgdXNlcnM6IDAsXG4gIG1lc3NhZ2VzOiAwLFxuICBtb25leXM6IDAsXG4gIHNob3BwaW5nczogMFxufSlcblxuY29uc3QgZ2V0Q291bnQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGdldENvdW50QXBpKClcbiAgICAuY2F0Y2goKCkgPT4ge30pXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgbG9hZGluZy52YWx1ZSA9IGZhbHNlXG4gICAgfSlcbiAgdG90YWxTdGF0ZSA9IE9iamVjdC5hc3NpZ24odG90YWxTdGF0ZSwgcmVzPy5kYXRhIHx8IHt9KVxufVxuXG5nZXRDb3VudCgpXG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8RWxSb3cgOmd1dHRlcj1cIjIwXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiA6Y2xhc3M9XCJwcmVmaXhDbHNcIj5cbiAgICA8RWxDb2wgOnhsPVwiNlwiIDpsZz1cIjZcIiA6bWQ9XCIxMlwiIDpzbT1cIjEyXCIgOnhzPVwiMjRcIj5cbiAgICAgIDxFbENhcmQgc2hhZG93PVwiaG92ZXJcIiBjbGFzcz1cIm1iLTIwcHhcIj5cbiAgICAgICAgPEVsU2tlbGV0b24gOmxvYWRpbmc9XCJsb2FkaW5nXCIgYW5pbWF0ZWQgOnJvd3M9XCIyXCI+XG4gICAgICAgICAgPHRlbXBsYXRlICNkZWZhdWx0PlxuICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJgJHtwcmVmaXhDbHN9X19pdGVtIGZsZXgganVzdGlmeS1iZXR3ZWVuYFwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIDpjbGFzcz1cImAke3ByZWZpeENsc31fX2l0ZW0tLWljb24gJHtwcmVmaXhDbHN9X19pdGVtLS1wZW9wbGVzIHAtMTZweCBpbmxpbmUtYmxvY2sgcm91bmRlZC02cHhgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwic3ZnLWljb246cGVvcGxlc1wiIDpzaXplPVwiNDBcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJgJHtwcmVmaXhDbHN9X19pdGVtLS10ZXh0IHRleHQtMTZweCB0ZXh0LWdyYXktNTAwIHRleHQtcmlnaHRgXCI+e3tcbiAgICAgICAgICAgICAgICAgIHQoJ2FuYWx5c2lzLm5ld1VzZXInKVxuICAgICAgICAgICAgICAgIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPENvdW50VG9cbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC0yMHB4IGZvbnQtNzAwIHRleHQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgOnN0YXJ0LXZhbD1cIjBcIlxuICAgICAgICAgICAgICAgICAgOmVuZC12YWw9XCIxMDI0MDBcIlxuICAgICAgICAgICAgICAgICAgOmR1cmF0aW9uPVwiMjYwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L0VsU2tlbGV0b24+XG4gICAgICA8L0VsQ2FyZD5cbiAgICA8L0VsQ29sPlxuXG4gICAgPEVsQ29sIDp4bD1cIjZcIiA6bGc9XCI2XCIgOm1kPVwiMTJcIiA6c209XCIxMlwiIDp4cz1cIjI0XCI+XG4gICAgICA8RWxDYXJkIHNoYWRvdz1cImhvdmVyXCIgY2xhc3M9XCJtYi0yMHB4XCI+XG4gICAgICAgIDxFbFNrZWxldG9uIDpsb2FkaW5nPVwibG9hZGluZ1wiIGFuaW1hdGVkIDpyb3dzPVwiMlwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD5cbiAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiYCR7cHJlZml4Q2xzfV9faXRlbSBmbGV4IGp1c3RpZnktYmV0d2VlbmBcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJgJHtwcmVmaXhDbHN9X19pdGVtLS1pY29uICR7cHJlZml4Q2xzfV9faXRlbS0tbWVzc2FnZSBwLTE2cHggaW5saW5lLWJsb2NrIHJvdW5kZWQtNnB4YFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cInN2Zy1pY29uOm1lc3NhZ2VcIiA6c2l6ZT1cIjQwXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiYCR7cHJlZml4Q2xzfV9faXRlbS0tdGV4dCB0ZXh0LTE2cHggdGV4dC1ncmF5LTUwMCB0ZXh0LXJpZ2h0YFwiPnt7XG4gICAgICAgICAgICAgICAgICB0KCdhbmFseXNpcy51bnJlYWRJbmZvcm1hdGlvbicpXG4gICAgICAgICAgICAgICAgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q291bnRUb1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LTIwcHggZm9udC03MDAgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICA6c3RhcnQtdmFsPVwiMFwiXG4gICAgICAgICAgICAgICAgICA6ZW5kLXZhbD1cIjgxMjEyXCJcbiAgICAgICAgICAgICAgICAgIDpkdXJhdGlvbj1cIjI2MDBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9FbFNrZWxldG9uPlxuICAgICAgPC9FbENhcmQ+XG4gICAgPC9FbENvbD5cblxuICAgIDxFbENvbCA6eGw9XCI2XCIgOmxnPVwiNlwiIDptZD1cIjEyXCIgOnNtPVwiMTJcIiA6eHM9XCIyNFwiPlxuICAgICAgPEVsQ2FyZCBzaGFkb3c9XCJob3ZlclwiIGNsYXNzPVwibWItMjBweFwiPlxuICAgICAgICA8RWxTa2VsZXRvbiA6bG9hZGluZz1cImxvYWRpbmdcIiBhbmltYXRlZCA6cm93cz1cIjJcIj5cbiAgICAgICAgICA8dGVtcGxhdGUgI2RlZmF1bHQ+XG4gICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImAke3ByZWZpeENsc31fX2l0ZW0gZmxleCBqdXN0aWZ5LWJldHdlZW5gXCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiYCR7cHJlZml4Q2xzfV9faXRlbS0taWNvbiAke3ByZWZpeENsc31fX2l0ZW0tLW1vbmV5IHAtMTZweCBpbmxpbmUtYmxvY2sgcm91bmRlZC02cHhgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwic3ZnLWljb246bW9uZXlcIiA6c2l6ZT1cIjQwXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiYCR7cHJlZml4Q2xzfV9faXRlbS0tdGV4dCB0ZXh0LTE2cHggdGV4dC1ncmF5LTUwMCB0ZXh0LXJpZ2h0YFwiPnt7XG4gICAgICAgICAgICAgICAgICB0KCdhbmFseXNpcy50cmFuc2FjdGlvbkFtb3VudCcpXG4gICAgICAgICAgICAgICAgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q291bnRUb1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LTIwcHggZm9udC03MDAgdGV4dC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICA6c3RhcnQtdmFsPVwiMFwiXG4gICAgICAgICAgICAgICAgICA6ZW5kLXZhbD1cIjkyODBcIlxuICAgICAgICAgICAgICAgICAgOmR1cmF0aW9uPVwiMjYwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L0VsU2tlbGV0b24+XG4gICAgICA8L0VsQ2FyZD5cbiAgICA8L0VsQ29sPlxuXG4gICAgPEVsQ29sIDp4bD1cIjZcIiA6bGc9XCI2XCIgOm1kPVwiMTJcIiA6c209XCIxMlwiIDp4cz1cIjI0XCI+XG4gICAgICA8RWxDYXJkIHNoYWRvdz1cImhvdmVyXCIgY2xhc3M9XCJtYi0yMHB4XCI+XG4gICAgICAgIDxFbFNrZWxldG9uIDpsb2FkaW5nPVwibG9hZGluZ1wiIGFuaW1hdGVkIDpyb3dzPVwiMlwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD5cbiAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiYCR7cHJlZml4Q2xzfV9faXRlbSBmbGV4IGp1c3RpZnktYmV0d2VlbmBcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJgJHtwcmVmaXhDbHN9X19pdGVtLS1pY29uICR7cHJlZml4Q2xzfV9faXRlbS0tc2hvcHBpbmcgcC0xNnB4IGlubGluZS1ibG9jayByb3VuZGVkLTZweGBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJzdmctaWNvbjpzaG9wcGluZ1wiIDpzaXplPVwiNDBcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJgJHtwcmVmaXhDbHN9X19pdGVtLS10ZXh0IHRleHQtMTZweCB0ZXh0LWdyYXktNTAwIHRleHQtcmlnaHRgXCI+e3tcbiAgICAgICAgICAgICAgICAgIHQoJ2FuYWx5c2lzLnRvdGFsU2hvcHBpbmcnKVxuICAgICAgICAgICAgICAgIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPENvdW50VG9cbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC0yMHB4IGZvbnQtNzAwIHRleHQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgOnN0YXJ0LXZhbD1cIjBcIlxuICAgICAgICAgICAgICAgICAgOmVuZC12YWw9XCIxMzYwMFwiXG4gICAgICAgICAgICAgICAgICA6ZHVyYXRpb249XCIyNjAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvRWxTa2VsZXRvbj5cbiAgICAgIDwvRWxDYXJkPlxuICAgIDwvRWxDb2w+XG4gIDwvRWxSb3c+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIiBzY29wZWQ+XG5AcHJlZml4LWNsczogfidAe25hbWVzcGFjZX0tcGFuZWwnO1xuXG4uQHtwcmVmaXgtY2xzfSB7XG4gICZfX2l0ZW0ge1xuICAgICYtLXBlb3BsZXMge1xuICAgICAgY29sb3I6ICM0MGM5YzY7XG4gICAgfVxuXG4gICAgJi0tbWVzc2FnZSB7XG4gICAgICBjb2xvcjogIzM2YTNmNztcbiAgICB9XG5cbiAgICAmLS1tb25leSB7XG4gICAgICBjb2xvcjogI2Y0NTE2YztcbiAgICB9XG5cbiAgICAmLS1zaG9wcGluZyB7XG4gICAgICBjb2xvcjogIzM0YmZhMztcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIDpkZWVwKC5Ae25hbWVzcGFjZX0taWNvbikge1xuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLkB7cHJlZml4LWNsc31fX2l0ZW0tLWljb24ge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zOHMgZWFzZS1vdXQ7XG4gICAgICB9XG4gICAgICAuQHtwcmVmaXgtY2xzfV9faXRlbS0tcGVvcGxlcyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM0MGM5YzY7XG4gICAgICB9XG4gICAgICAuQHtwcmVmaXgtY2xzfV9faXRlbS0tbWVzc2FnZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMzNmEzZjc7XG4gICAgICB9XG4gICAgICAuQHtwcmVmaXgtY2xzfV9faXRlbS0tbW9uZXkge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjQ1MTZjO1xuICAgICAgfVxuICAgICAgLkB7cHJlZml4LWNsc31fX2l0ZW0tLXNob3BwaW5nIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzM0YmZhMztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsicmVxdWVzdCIsInVzZUF4aW9zIiwiZ2V0VXNlckFjY2Vzc1NvdXJjZUFwaSIsImFzeW5jIiwicmVzIiwiZ2V0IiwidXJsIiwiZGF0YSIsImdldFdlZWtseVVzZXJBY3Rpdml0eUFwaSIsImdldE1vbnRobHlTYWxlc0FwaSIsInQiLCJ1c2VJMThuIiwiZ2V0UHJlZml4Q2xzIiwidXNlRGVzaWduIiwicHJlZml4Q2xzIiwibG9hZGluZyIsInJlZiIsInRvdGFsU3RhdGUiLCJyZWFjdGl2ZSIsInVzZXJzIiwibWVzc2FnZXMiLCJtb25leXMiLCJzaG9wcGluZ3MiLCJnZXRDb3VudEFwaSIsImNhdGNoIiwiZmluYWxseSIsInZhbHVlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiZ2FBUUEsTUFBTUEsRUFBVUMsSUFPSEMsRUFBeUJDLFVBQ3BDLE1BQU1DLFFBQVlKLEVBQVFLLElBQUksQ0FBRUMsSUFBSywrQkFDckMsT0FBT0YsR0FBT0EsRUFBSUcsTUFHUEMsRUFBMkJMLFVBQ3RDLE1BQU1DLFFBQVlKLEVBQVFLLElBQUksQ0FBRUMsSUFBSyxpQ0FDckMsT0FBT0YsR0FBT0EsRUFBSUcsTUFHUEUsRUFBcUJOLFVBQ2hDLE1BQU1DLFFBQVlKLEVBQVFLLElBQUksQ0FBRUMsSUFBSywyQkFDckMsT0FBT0YsR0FBT0EsRUFBSUcsNE5DbEJkLE1BQUFHLEVBQUVBLEdBQU1DLEtBRVJDLGFBQUVBLEdBQWlCQyxJQUVuQkMsRUFBWUYsRUFBYSxTQUV6QkcsRUFBVUMsR0FBSSxHQUVwQixJQUFJQyxFQUFhQyxFQUE2QixDQUM1Q0MsTUFBTyxFQUNQQyxTQUFVLEVBQ1ZDLE9BQVEsRUFDUkMsVUFBVyxVQUdJbkIsV0FDZixNQUFNQyxPRGZtQkQsV0FDekIsTUFBTUMsUUFBWUosRUFBUUssSUFBSSxDQUFFQyxJQUFLLG9CQUNyQyxPQUFPRixHQUFPQSxFQUFJRyxNQ2FBZ0IsR0FDZkMsT0FBTSxTQUNOQyxTQUFRLEtBQ1BWLEVBQVFXLE9BQVEsS0FFcEJULEVBQWFVLE9BQU9DLE9BQU9YLEdBQWlCLE1BQUxiLE9BQUssRUFBQUEsRUFBQUcsT0FBUSJ9
