import{d as e,l as t,r as s,s as a,E as l,o as i,k as n,w as o,g as d,a as r,e as c,n as x,t as u,j as m}from"./index.63ad27ed.js";import{E as _,a as p}from"./el-col.29973b17.js";import{E as f}from"./el-card.9f27dd59.js";import{E as g}from"./el-skeleton-item.c5ec5e82.js";import{_ as v}from"./CountTo.a353ef33.js";import{u as y}from"./useAxios.e773356b.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";const b=y(),h=async()=>{const e=await b.get({url:"/analysis/userAccessSource"});return e&&e.data},j=async()=>{const e=await b.get({url:"/analysis/weeklyUserActivity"});return e&&e.data},$=async()=>{const e=await b.get({url:"/analysis/monthlySales"});return e&&e.data};const k={class:"flex flex-col justify-between"},z={class:"flex flex-col justify-between"},S={class:"flex flex-col justify-between"},A={class:"flex flex-col justify-between"};var E=w(e({__name:"PanelGroup",setup(e){const{t:y}=t(),{getPrefixCls:w}=m(),h=w("panel"),j=s(!0);let $=a({users:0,messages:0,moneys:0,shoppings:0});return(async()=>{const e=await(async()=>{const e=await b.get({url:"/analysis/total"});return e&&e.data})().catch((()=>{})).finally((()=>{j.value=!1}));$=Object.assign($,(null==e?void 0:e.data)||{})})(),(e,t)=>{const s=l("Icon");return i(),n(r(p),{gutter:20,justify:"space-between",class:x(r(h))},{default:o((()=>[d(r(_),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[d(r(f),{shadow:"hover",class:"mb-20px"},{default:o((()=>[d(r(g),{loading:j.value,animated:"",rows:2},{default:o((()=>[c("div",{class:x(`${r(h)}__item flex justify-between`)},[c("div",null,[c("div",{class:x(`${r(h)}__item--icon ${r(h)}__item--peoples p-16px inline-block rounded-6px`)},[d(s,{icon:"svg-icon:peoples",size:40})],2)]),c("div",k,[c("div",{class:x(`${r(h)}__item--text text-16px text-gray-500 text-right`)},u(r(y)("analysis.newUser")),3),d(r(v),{class:"text-20px font-700 text-right","start-val":0,"end-val":102400,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),d(r(_),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[d(r(f),{shadow:"hover",class:"mb-20px"},{default:o((()=>[d(r(g),{loading:j.value,animated:"",rows:2},{default:o((()=>[c("div",{class:x(`${r(h)}__item flex justify-between`)},[c("div",null,[c("div",{class:x(`${r(h)}__item--icon ${r(h)}__item--message p-16px inline-block rounded-6px`)},[d(s,{icon:"svg-icon:message",size:40})],2)]),c("div",z,[c("div",{class:x(`${r(h)}__item--text text-16px text-gray-500 text-right`)},u(r(y)("analysis.unreadInformation")),3),d(r(v),{class:"text-20px font-700 text-right","start-val":0,"end-val":81212,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),d(r(_),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[d(r(f),{shadow:"hover",class:"mb-20px"},{default:o((()=>[d(r(g),{loading:j.value,animated:"",rows:2},{default:o((()=>[c("div",{class:x(`${r(h)}__item flex justify-between`)},[c("div",null,[c("div",{class:x(`${r(h)}__item--icon ${r(h)}__item--money p-16px inline-block rounded-6px`)},[d(s,{icon:"svg-icon:money",size:40})],2)]),c("div",S,[c("div",{class:x(`${r(h)}__item--text text-16px text-gray-500 text-right`)},u(r(y)("analysis.transactionAmount")),3),d(r(v),{class:"text-20px font-700 text-right","start-val":0,"end-val":9280,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),d(r(_),{xl:6,lg:6,md:12,sm:12,xs:24},{default:o((()=>[d(r(f),{shadow:"hover",class:"mb-20px"},{default:o((()=>[d(r(g),{loading:j.value,animated:"",rows:2},{default:o((()=>[c("div",{class:x(`${r(h)}__item flex justify-between`)},[c("div",null,[c("div",{class:x(`${r(h)}__item--icon ${r(h)}__item--shopping p-16px inline-block rounded-6px`)},[d(s,{icon:"svg-icon:shopping",size:40})],2)]),c("div",A,[c("div",{class:x(`${r(h)}__item--text text-16px text-gray-500 text-right`)},u(r(y)("analysis.totalShopping")),3),d(r(v),{class:"text-20px font-700 text-right","start-val":0,"end-val":13600,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1},8,["class"])}}}),[["__scopeId","data-v-c2ec016e"]]),P=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));export{E as P,j as a,$ as b,P as c,h as g};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFuZWxHcm91cC5lZGVkMmE2YS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9kYXNoYm9hcmQvYW5hbHlzaXMvaW5kZXgudHMiLCIuLi8uLi9zcmMvdmlld3MvRGFzaGJvYXJkL2NvbXBvbmVudHMvUGFuZWxHcm91cC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQXhpb3MgfSBmcm9tICdAL2hvb2tzL3dlYi91c2VBeGlvcydcclxuaW1wb3J0IHR5cGUge1xyXG4gIEFuYWx5c2lzVG90YWxUeXBlcyxcclxuICBVc2VyQWNjZXNzU291cmNlLFxyXG4gIFdlZWtseVVzZXJBY3Rpdml0eSxcclxuICBNb250aGx5U2FsZXNcclxufSBmcm9tICcuL3R5cGVzJ1xyXG5cclxuY29uc3QgcmVxdWVzdCA9IHVzZUF4aW9zKClcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb3VudEFwaSA9IGFzeW5jICgpOiBQcm9taXNlPElSZXNwb25zZTxBbmFseXNpc1RvdGFsVHlwZXNbXT4+ID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0LmdldCh7IHVybDogJy9hbmFseXNpcy90b3RhbCcgfSlcclxuICByZXR1cm4gcmVzICYmIHJlcy5kYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyQWNjZXNzU291cmNlQXBpID0gYXN5bmMgKCk6IFByb21pc2U8SVJlc3BvbnNlPFVzZXJBY2Nlc3NTb3VyY2VbXT4+ID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0LmdldCh7IHVybDogJy9hbmFseXNpcy91c2VyQWNjZXNzU291cmNlJyB9KVxyXG4gIHJldHVybiByZXMgJiYgcmVzLmRhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFdlZWtseVVzZXJBY3Rpdml0eUFwaSA9IGFzeW5jICgpOiBQcm9taXNlPElSZXNwb25zZTxXZWVrbHlVc2VyQWN0aXZpdHlbXT4+ID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0LmdldCh7IHVybDogJy9hbmFseXNpcy93ZWVrbHlVc2VyQWN0aXZpdHknIH0pXHJcbiAgcmV0dXJuIHJlcyAmJiByZXMuZGF0YVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TW9udGhseVNhbGVzQXBpID0gYXN5bmMgKCk6IFByb21pc2U8SVJlc3BvbnNlPE1vbnRobHlTYWxlc1tdPj4gPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QuZ2V0KHsgdXJsOiAnL2FuYWx5c2lzL21vbnRobHlTYWxlcycgfSlcclxuICByZXR1cm4gcmVzICYmIHJlcy5kYXRhXHJcbn1cclxuIiwiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cclxuaW1wb3J0IHsgRWxSb3csIEVsQ29sLCBFbENhcmQsIEVsU2tlbGV0b24gfSBmcm9tICdlbGVtZW50LXBsdXMnXHJcbmltcG9ydCB7IENvdW50VG8gfSBmcm9tICdAL2NvbXBvbmVudHMvQ291bnRUbydcclxuaW1wb3J0IHsgdXNlRGVzaWduIH0gZnJvbSAnQC9ob29rcy93ZWIvdXNlRGVzaWduJ1xyXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAnQC9ob29rcy93ZWIvdXNlSTE4bidcclxuaW1wb3J0IHsgcmVmLCByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSdcclxuaW1wb3J0IHsgZ2V0Q291bnRBcGkgfSBmcm9tICdAL2FwaS9kYXNoYm9hcmQvYW5hbHlzaXMnXHJcbmltcG9ydCB0eXBlIHsgQW5hbHlzaXNUb3RhbFR5cGVzIH0gZnJvbSAnQC9hcGkvZGFzaGJvYXJkL2FuYWx5c2lzL3R5cGVzJ1xyXG5cclxuY29uc3QgeyB0IH0gPSB1c2VJMThuKClcclxuXHJcbmNvbnN0IHsgZ2V0UHJlZml4Q2xzIH0gPSB1c2VEZXNpZ24oKVxyXG5cclxuY29uc3QgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdwYW5lbCcpXHJcblxyXG5jb25zdCBsb2FkaW5nID0gcmVmKHRydWUpXHJcblxyXG5sZXQgdG90YWxTdGF0ZSA9IHJlYWN0aXZlPEFuYWx5c2lzVG90YWxUeXBlcz4oe1xyXG4gIHVzZXJzOiAwLFxyXG4gIG1lc3NhZ2VzOiAwLFxyXG4gIG1vbmV5czogMCxcclxuICBzaG9wcGluZ3M6IDBcclxufSlcclxuXHJcbmNvbnN0IGdldENvdW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGdldENvdW50QXBpKClcclxuICAgIC5jYXRjaCgoKSA9PiB7fSlcclxuICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgbG9hZGluZy52YWx1ZSA9IGZhbHNlXHJcbiAgICB9KVxyXG4gIHRvdGFsU3RhdGUgPSBPYmplY3QuYXNzaWduKHRvdGFsU3RhdGUsIHJlcz8uZGF0YSB8fCB7fSlcclxufVxyXG5cclxuZ2V0Q291bnQoKVxyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8RWxSb3cgOmd1dHRlcj1cIjIwXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiA6Y2xhc3M9XCJwcmVmaXhDbHNcIj5cclxuICAgIDxFbENvbCA6eGw9XCI2XCIgOmxnPVwiNlwiIDptZD1cIjEyXCIgOnNtPVwiMTJcIiA6eHM9XCIyNFwiPlxyXG4gICAgICA8RWxDYXJkIHNoYWRvdz1cImhvdmVyXCIgY2xhc3M9XCJtYi0yMHB4XCI+XHJcbiAgICAgICAgPEVsU2tlbGV0b24gOmxvYWRpbmc9XCJsb2FkaW5nXCIgYW5pbWF0ZWQgOnJvd3M9XCIyXCI+XHJcbiAgICAgICAgICA8dGVtcGxhdGUgI2RlZmF1bHQ+XHJcbiAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiYCR7cHJlZml4Q2xzfV9faXRlbSBmbGV4IGp1c3RpZnktYmV0d2VlbmBcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJgJHtwcmVmaXhDbHN9X19pdGVtLS1pY29uICR7cHJlZml4Q2xzfV9faXRlbS0tcGVvcGxlcyBwLTE2cHggaW5saW5lLWJsb2NrIHJvdW5kZWQtNnB4YFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJzdmctaWNvbjpwZW9wbGVzXCIgOnNpemU9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiYCR7cHJlZml4Q2xzfV9faXRlbS0tdGV4dCB0ZXh0LTE2cHggdGV4dC1ncmF5LTUwMCB0ZXh0LXJpZ2h0YFwiPnt7XHJcbiAgICAgICAgICAgICAgICAgIHQoJ2FuYWx5c2lzLm5ld1VzZXInKVxyXG4gICAgICAgICAgICAgICAgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxDb3VudFRvXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC0yMHB4IGZvbnQtNzAwIHRleHQtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICA6c3RhcnQtdmFsPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIDplbmQtdmFsPVwiMTAyNDAwXCJcclxuICAgICAgICAgICAgICAgICAgOmR1cmF0aW9uPVwiMjYwMFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgPC9FbFNrZWxldG9uPlxyXG4gICAgICA8L0VsQ2FyZD5cclxuICAgIDwvRWxDb2w+XHJcblxyXG4gICAgPEVsQ29sIDp4bD1cIjZcIiA6bGc9XCI2XCIgOm1kPVwiMTJcIiA6c209XCIxMlwiIDp4cz1cIjI0XCI+XHJcbiAgICAgIDxFbENhcmQgc2hhZG93PVwiaG92ZXJcIiBjbGFzcz1cIm1iLTIwcHhcIj5cclxuICAgICAgICA8RWxTa2VsZXRvbiA6bG9hZGluZz1cImxvYWRpbmdcIiBhbmltYXRlZCA6cm93cz1cIjJcIj5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD5cclxuICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJgJHtwcmVmaXhDbHN9X19pdGVtIGZsZXgganVzdGlmeS1iZXR3ZWVuYFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIDpjbGFzcz1cImAke3ByZWZpeENsc31fX2l0ZW0tLWljb24gJHtwcmVmaXhDbHN9X19pdGVtLS1tZXNzYWdlIHAtMTZweCBpbmxpbmUtYmxvY2sgcm91bmRlZC02cHhgXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cInN2Zy1pY29uOm1lc3NhZ2VcIiA6c2l6ZT1cIjQwXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJgJHtwcmVmaXhDbHN9X19pdGVtLS10ZXh0IHRleHQtMTZweCB0ZXh0LWdyYXktNTAwIHRleHQtcmlnaHRgXCI+e3tcclxuICAgICAgICAgICAgICAgICAgdCgnYW5hbHlzaXMudW5yZWFkSW5mb3JtYXRpb24nKVxyXG4gICAgICAgICAgICAgICAgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxDb3VudFRvXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC0yMHB4IGZvbnQtNzAwIHRleHQtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICA6c3RhcnQtdmFsPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIDplbmQtdmFsPVwiODEyMTJcIlxyXG4gICAgICAgICAgICAgICAgICA6ZHVyYXRpb249XCIyNjAwXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L0VsU2tlbGV0b24+XHJcbiAgICAgIDwvRWxDYXJkPlxyXG4gICAgPC9FbENvbD5cclxuXHJcbiAgICA8RWxDb2wgOnhsPVwiNlwiIDpsZz1cIjZcIiA6bWQ9XCIxMlwiIDpzbT1cIjEyXCIgOnhzPVwiMjRcIj5cclxuICAgICAgPEVsQ2FyZCBzaGFkb3c9XCJob3ZlclwiIGNsYXNzPVwibWItMjBweFwiPlxyXG4gICAgICAgIDxFbFNrZWxldG9uIDpsb2FkaW5nPVwibG9hZGluZ1wiIGFuaW1hdGVkIDpyb3dzPVwiMlwiPlxyXG4gICAgICAgICAgPHRlbXBsYXRlICNkZWZhdWx0PlxyXG4gICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImAke3ByZWZpeENsc31fX2l0ZW0gZmxleCBqdXN0aWZ5LWJldHdlZW5gXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiYCR7cHJlZml4Q2xzfV9faXRlbS0taWNvbiAke3ByZWZpeENsc31fX2l0ZW0tLW1vbmV5IHAtMTZweCBpbmxpbmUtYmxvY2sgcm91bmRlZC02cHhgXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cInN2Zy1pY29uOm1vbmV5XCIgOnNpemU9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiYCR7cHJlZml4Q2xzfV9faXRlbS0tdGV4dCB0ZXh0LTE2cHggdGV4dC1ncmF5LTUwMCB0ZXh0LXJpZ2h0YFwiPnt7XHJcbiAgICAgICAgICAgICAgICAgIHQoJ2FuYWx5c2lzLnRyYW5zYWN0aW9uQW1vdW50JylcclxuICAgICAgICAgICAgICAgIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Q291bnRUb1xyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtMjBweCBmb250LTcwMCB0ZXh0LXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgOnN0YXJ0LXZhbD1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICA6ZW5kLXZhbD1cIjkyODBcIlxyXG4gICAgICAgICAgICAgICAgICA6ZHVyYXRpb249XCIyNjAwXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L0VsU2tlbGV0b24+XHJcbiAgICAgIDwvRWxDYXJkPlxyXG4gICAgPC9FbENvbD5cclxuXHJcbiAgICA8RWxDb2wgOnhsPVwiNlwiIDpsZz1cIjZcIiA6bWQ9XCIxMlwiIDpzbT1cIjEyXCIgOnhzPVwiMjRcIj5cclxuICAgICAgPEVsQ2FyZCBzaGFkb3c9XCJob3ZlclwiIGNsYXNzPVwibWItMjBweFwiPlxyXG4gICAgICAgIDxFbFNrZWxldG9uIDpsb2FkaW5nPVwibG9hZGluZ1wiIGFuaW1hdGVkIDpyb3dzPVwiMlwiPlxyXG4gICAgICAgICAgPHRlbXBsYXRlICNkZWZhdWx0PlxyXG4gICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImAke3ByZWZpeENsc31fX2l0ZW0gZmxleCBqdXN0aWZ5LWJldHdlZW5gXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiYCR7cHJlZml4Q2xzfV9faXRlbS0taWNvbiAke3ByZWZpeENsc31fX2l0ZW0tLXNob3BwaW5nIHAtMTZweCBpbmxpbmUtYmxvY2sgcm91bmRlZC02cHhgXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cInN2Zy1pY29uOnNob3BwaW5nXCIgOnNpemU9XCI0MFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiYCR7cHJlZml4Q2xzfV9faXRlbS0tdGV4dCB0ZXh0LTE2cHggdGV4dC1ncmF5LTUwMCB0ZXh0LXJpZ2h0YFwiPnt7XHJcbiAgICAgICAgICAgICAgICAgIHQoJ2FuYWx5c2lzLnRvdGFsU2hvcHBpbmcnKVxyXG4gICAgICAgICAgICAgICAgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxDb3VudFRvXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC0yMHB4IGZvbnQtNzAwIHRleHQtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICA6c3RhcnQtdmFsPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIDplbmQtdmFsPVwiMTM2MDBcIlxyXG4gICAgICAgICAgICAgICAgICA6ZHVyYXRpb249XCIyNjAwXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L0VsU2tlbGV0b24+XHJcbiAgICAgIDwvRWxDYXJkPlxyXG4gICAgPC9FbENvbD5cclxuICA8L0VsUm93PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlIGxhbmc9XCJsZXNzXCIgc2NvcGVkPlxyXG5AcHJlZml4LWNsczogfidAe25hbWVzcGFjZX0tcGFuZWwnO1xyXG5cclxuLkB7cHJlZml4LWNsc30ge1xyXG4gICZfX2l0ZW0ge1xyXG4gICAgJi0tcGVvcGxlcyB7XHJcbiAgICAgIGNvbG9yOiAjNDBjOWM2O1xyXG4gICAgfVxyXG5cclxuICAgICYtLW1lc3NhZ2Uge1xyXG4gICAgICBjb2xvcjogIzM2YTNmNztcclxuICAgIH1cclxuXHJcbiAgICAmLS1tb25leSB7XHJcbiAgICAgIGNvbG9yOiAjZjQ1MTZjO1xyXG4gICAgfVxyXG5cclxuICAgICYtLXNob3BwaW5nIHtcclxuICAgICAgY29sb3I6ICMzNGJmYTM7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIDpkZWVwKC5Ae25hbWVzcGFjZX0taWNvbikge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLkB7cHJlZml4LWNsc31fX2l0ZW0tLWljb24ge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjM4cyBlYXNlLW91dDtcclxuICAgICAgfVxyXG4gICAgICAuQHtwcmVmaXgtY2xzfV9faXRlbS0tcGVvcGxlcyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzQwYzljNjtcclxuICAgICAgfVxyXG4gICAgICAuQHtwcmVmaXgtY2xzfV9faXRlbS0tbWVzc2FnZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzM2YTNmNztcclxuICAgICAgfVxyXG4gICAgICAuQHtwcmVmaXgtY2xzfV9faXRlbS0tbW9uZXkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNDUxNmM7XHJcbiAgICAgIH1cclxuICAgICAgLkB7cHJlZml4LWNsc31fX2l0ZW0tLXNob3BwaW5nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzRiZmEzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6WyJyZXF1ZXN0IiwidXNlQXhpb3MiLCJnZXRVc2VyQWNjZXNzU291cmNlQXBpIiwiYXN5bmMiLCJyZXMiLCJnZXQiLCJ1cmwiLCJkYXRhIiwiZ2V0V2Vla2x5VXNlckFjdGl2aXR5QXBpIiwiZ2V0TW9udGhseVNhbGVzQXBpIiwidCIsInVzZUkxOG4iLCJnZXRQcmVmaXhDbHMiLCJ1c2VEZXNpZ24iLCJwcmVmaXhDbHMiLCJsb2FkaW5nIiwicmVmIiwidG90YWxTdGF0ZSIsInJlYWN0aXZlIiwidXNlcnMiLCJtZXNzYWdlcyIsIm1vbmV5cyIsInNob3BwaW5ncyIsImdldENvdW50QXBpIiwiY2F0Y2giLCJmaW5hbGx5IiwidmFsdWUiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJnYUFRQSxNQUFNQSxFQUFVQyxJQU9IQyxFQUF5QkMsVUFDcEMsTUFBTUMsUUFBWUosRUFBUUssSUFBSSxDQUFFQyxJQUFLLCtCQUNyQyxPQUFPRixHQUFPQSxFQUFJRyxNQUdQQyxFQUEyQkwsVUFDdEMsTUFBTUMsUUFBWUosRUFBUUssSUFBSSxDQUFFQyxJQUFLLGlDQUNyQyxPQUFPRixHQUFPQSxFQUFJRyxNQUdQRSxFQUFxQk4sVUFDaEMsTUFBTUMsUUFBWUosRUFBUUssSUFBSSxDQUFFQyxJQUFLLDJCQUNyQyxPQUFPRixHQUFPQSxFQUFJRyw0TkNsQmQsTUFBQUcsRUFBRUEsR0FBTUMsS0FFUkMsYUFBRUEsR0FBaUJDLElBRW5CQyxFQUFZRixFQUFhLFNBRXpCRyxFQUFVQyxHQUFJLEdBRXBCLElBQUlDLEVBQWFDLEVBQTZCLENBQzVDQyxNQUFPLEVBQ1BDLFNBQVUsRUFDVkMsT0FBUSxFQUNSQyxVQUFXLFVBR0luQixXQUNmLE1BQU1DLE9EZm1CRCxXQUN6QixNQUFNQyxRQUFZSixFQUFRSyxJQUFJLENBQUVDLElBQUssb0JBQ3JDLE9BQU9GLEdBQU9BLEVBQUlHLE1DYUFnQixHQUNmQyxPQUFNLFNBQ05DLFNBQVEsS0FDUFYsRUFBUVcsT0FBUSxLQUVwQlQsRUFBYVUsT0FBT0MsT0FBT1gsR0FBaUIsTUFBQWIsT0FBQSxFQUFBQSxFQUFBRyxPQUFRIn0=
