import{z as a,D as e,cv as t,a as s,d as l,r as n,s as r,l as d,E as c,o,c as i,e as p,g as u,w as m,t as x,x as f,G as y,F as w,k as v,cw as g,bi as h}from"./index.701681eb.js";import{a as k,E as _}from"./el-col.33bc6b64.js";import{E as j}from"./el-skeleton-item.e6d893a8.js";import{E as b}from"./el-card.2c75e3e6.js";import{E as $}from"./el-divider.56b4f6b6.js";import{E}from"./el-link.fdf97ca2.js";import{_ as O}from"./CountTo.0ffd21f3.js";import{_ as C}from"./Echart.b6ba37bd.js";import{r as z}from"./echarts-data.8e25158b.js";import{_ as D}from"./Highlight.vue_vue_type_script_lang.a06975bc.js";import{u as M}from"./useAxios.51602908.js";import"./typescript2.0e462989.js";import"./debounce.96a7db81.js";const N={"zh-CN":{justNow:"刚刚",past:a=>a.match(/\d/)?`${a}前`:a,future:a=>a.match(/\d/)?`${a}后`:a,month:(a,e)=>1===a?e?"上个月":"下个月":`${a} 个月`,year:(a,e)=>1===a?e?"去年":"明年":`${a} 年`,day:(a,e)=>1===a?e?"昨天":"明天":`${a} 天`,week:(a,e)=>1===a?e?"上周":"下周":`${a} 周`,hour:a=>`${a} 小时`,minute:a=>`${a} 分钟`,second:a=>`${a} 秒`},en:{justNow:"刚刚",past:a=>a.match(/\d/)?`${a} ago`:a,future:a=>a.match(/\d/)?`in ${a}`:a,month:(a,e)=>1===a?e?"last month":"next month":`${a} month${a>1?"s":""}`,year:(a,e)=>1===a?e?"last year":"next year":`${a} year${a>1?"s":""}`,day:(a,e)=>1===a?e?"yesterday":"tomorrow":`${a} day${a>1?"s":""}`,week:(a,e)=>1===a?e?"last week":"next week":`${a} week${a>1?"s":""}`,hour:a=>`${a} hour${a>1?"s":""}`,minute:a=>`${a} minute${a>1?"s":""}`,second:a=>`${a} second${a>1?"s":""}`}},A=l=>{const n=a(),r=e((()=>n.getCurrentLocale));return t(l,{messages:N[s(r).lang]})},F=M(),G={class:"flex items-center"},H=p("img",{src:"/assets/avatar.afc48ead.jpg",alt:"",class:"w-70px h-70px rounded-[50%] mr-20px"},null,-1),I={class:"text-20px text-700"},L={class:"mt-10px text-14px text-gray-500"},P={class:"flex h-70px items-center justify-end <sm:mt-20px"},T={class:"px-8px text-right"},W={class:"text-14px text-gray-400 mb-20px"},q={class:"px-8px text-right"},B={class:"text-14px text-gray-400 mb-20px"},J={class:"px-8px text-right"},K={class:"text-14px text-gray-400 mb-20px"},Q={class:"flex justify-between"},R={class:"flex items-center"},S={class:"text-16px"},U={class:"mt-15px text-14px text-gray-400"},V={class:"mt-20px text-12px text-gray-400 flex justify-between"},X={class:"flex justify-between"},Y={class:"flex items-center"},Z=p("img",{src:"/assets/avatar.afc48ead.jpg",alt:"",class:"w-35px h-35px rounded-[50%] mr-20px"},null,-1),aa={class:"text-14px"},ea={class:"mt-15px text-12px text-gray-400"},ta={class:"flex items-center"},sa=l({__name:"Workplace",setup(a){const e=n(!0);let t=r({project:0,access:0,todo:0});const l=async()=>{const a=await(async()=>{const a=await F.get({url:"/workplace/total"});return a&&a.data})().catch((()=>{}));a&&(t=Object.assign(t,a.data))};let M=r([]);const N=async()=>{const a=await(async()=>{const a=await F.get({url:"/workplace/project"});return a&&a.data})().catch((()=>{}));a&&(M=Object.assign(M,a.data))};let sa=r([]);const la=async()=>{const a=await(async()=>{const a=await F.get({url:"/workplace/dynamic"});return a&&a.data})().catch((()=>{}));a&&(sa=Object.assign(sa,a.data))};let na=r([]);const ra=async()=>{const a=await(async()=>{const a=await F.get({url:"/workplace/team"});return a&&a.data})().catch((()=>{}));a&&(na=Object.assign(na,a.data))};let da=r(z);const ca=async()=>{const a=await(async()=>{const a=await F.get({url:"/workplace/radar"});return a&&a.data})().catch((()=>{}));a&&(h(da,"radar.indicator",a.data.map((a=>({name:oa(a.name),max:a.max})))),h(da,"series",[{name:`xxx${oa("workplace.index")}`,type:"radar",data:[{value:a.data.map((a=>a.personal)),name:oa("workplace.personal")},{value:a.data.map((a=>a.team)),name:oa("workplace.team")}]}]))};(async()=>{await Promise.all([l(),N(),la(),ra(),ca()]),e.value=!1})();const{t:oa}=d();return(a,l)=>{const n=c("Icon");return o(),i(y,null,[p("div",null,[u(s(b),{shadow:"never"},{default:m((()=>[u(s(j),{loading:e.value,animated:""},{default:m((()=>[u(s(k),{gutter:20,justify:"space-between"},{default:m((()=>[u(s(_),{xl:12,lg:12,md:12,sm:24,xs:24},{default:m((()=>[p("div",G,[H,p("div",null,[p("div",I,x(s(oa)("workplace.goodMorning"))+"，Archer，"+x(s(oa)("workplace.happyDay")),1),p("div",L,x(s(oa)("workplace.toady"))+"，20℃ - 32℃！ ",1)])])])),_:1}),u(s(_),{xl:12,lg:12,md:12,sm:24,xs:24},{default:m((()=>[p("div",P,[p("div",T,[p("div",W,x(s(oa)("workplace.project")),1),u(s(O),{class:"text-20px","start-val":0,"end-val":s(t).project,duration:2600},null,8,["end-val"])]),u(s($),{direction:"vertical"}),p("div",q,[p("div",B,x(s(oa)("workplace.toDo")),1),u(s(O),{class:"text-20px","start-val":0,"end-val":s(t).todo,duration:2600},null,8,["end-val"])]),u(s($),{direction:"vertical","border-style":"dashed"}),p("div",J,[p("div",K,x(s(oa)("workplace.access")),1),u(s(O),{class:"text-20px","start-val":0,"end-val":s(t).access,duration:2600},null,8,["end-val"])])])])),_:1})])),_:1})])),_:1},8,["loading"])])),_:1})]),u(s(k),{class:"mt-20px",gutter:20,justify:"space-between"},{default:m((()=>[u(s(_),{xl:16,lg:16,md:24,sm:24,xs:24,class:"mb-20px"},{default:m((()=>[u(s(b),{shadow:"never"},{header:m((()=>[p("div",Q,[p("span",null,x(s(oa)("workplace.project")),1),u(s(E),{type:"primary",underline:!1},{default:m((()=>[f(x(s(oa)("workplace.more")),1)])),_:1})])])),default:m((()=>[u(s(j),{loading:e.value,animated:""},{default:m((()=>[u(s(k),null,{default:m((()=>[(o(!0),i(y,null,w(s(M),((a,e)=>(o(),v(s(_),{key:`card-${e}`,xl:8,lg:8,md:12,sm:24,xs:24},{default:m((()=>[u(s(b),{shadow:"hover"},{default:m((()=>[p("div",R,[u(n,{icon:a.icon,size:25,class:"mr-10px"},null,8,["icon"]),p("span",S,x(a.name),1)]),p("div",U,x(s(oa)(a.message)),1),p("div",V,[p("span",null,x(a.personal),1),p("span",null,x(s(g)(a.time,"yyyy-MM-dd")),1)])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["loading"])])),_:1}),u(s(b),{shadow:"never",class:"mt-20px"},{header:m((()=>[p("div",X,[p("span",null,x(s(oa)("workplace.dynamic")),1),u(s(E),{type:"primary",underline:!1},{default:m((()=>[f(x(s(oa)("workplace.more")),1)])),_:1})])])),default:m((()=>[u(s(j),{loading:e.value,animated:""},{default:m((()=>[(o(!0),i(y,null,w(s(sa),((a,e)=>(o(),i("div",{key:`dynamics-${e}`},[p("div",Y,[Z,p("div",null,[p("div",aa,[u(s(D),{keys:a.keys.map((a=>s(oa)(a)))},{default:m((()=>[f(x(s(oa)("workplace.pushCode")),1)])),_:2},1032,["keys"])]),p("div",ea,x(s(A)(a.time)),1)])]),u(s($))])))),128))])),_:1},8,["loading"])])),_:1})])),_:1}),u(s(_),{xl:8,lg:8,md:24,sm:24,xs:24,class:"mb-20px"},{default:m((()=>[u(s(b),{shadow:"never"},{header:m((()=>[p("span",null,x(s(oa)("workplace.shortcutOperation")),1)])),default:m((()=>[u(s(j),{loading:e.value,animated:""},{default:m((()=>[(o(),i(y,null,w(9,(a=>u(s(_),{key:`card-${a}`,xl:12,lg:12,md:12,sm:24,xs:24,class:"mb-10px"},{default:m((()=>[u(s(E),{type:"default",underline:!1},{default:m((()=>[f(x(s(oa)("workplace.operation"))+x(a),1)])),_:2},1024)])),_:2},1024))),64))])),_:1},8,["loading"])])),_:1}),u(s(b),{shadow:"never",class:"mt-20px"},{header:m((()=>[p("span",null,"xx"+x(s(oa)("workplace.index")),1)])),default:m((()=>[u(s(j),{loading:e.value,animated:""},{default:m((()=>[u(s(C),{options:s(da),height:400},null,8,["options"])])),_:1},8,["loading"])])),_:1}),u(s(b),{shadow:"never",class:"mt-20px"},{header:m((()=>[p("span",null,x(s(oa)("workplace.team")),1)])),default:m((()=>[u(s(j),{loading:e.value,animated:""},{default:m((()=>[u(s(k),null,{default:m((()=>[(o(!0),i(y,null,w(s(na),(a=>(o(),v(s(_),{key:`team-${a.name}`,span:12,class:"mb-20px"},{default:m((()=>[p("div",ta,[u(n,{icon:a.icon,class:"mr-10px"},null,8,["icon"]),u(s(E),{type:"default",underline:!1},{default:m((()=>[f(x(a.name),1)])),_:2},1024)])])),_:2},1024)))),128))])),_:1})])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1})],64)}}});export{sa as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29ya3BsYWNlLjFhM2YwZWY3LmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaG9va3Mvd2ViL3VzZVRpbWVBZ28udHMiLCIuLi8uLi9zcmMvYXBpL2Rhc2hib2FyZC93b3JrcGxhY2UvaW5kZXgudHMiLCIuLi8uLi9zcmMvYXNzZXRzL2ltZ3MvYXZhdGFyLmpwZyIsIi4uLy4uL3NyYy92aWV3cy9EYXNoYm9hcmQvV29ya3BsYWNlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VUaW1lQWdvIGFzIHVzZVRpbWVBZ29Db3JlLCBVc2VUaW1lQWdvTWVzc2FnZXMgfSBmcm9tICdAdnVldXNlL2NvcmUnXG5pbXBvcnQgeyBjb21wdXRlZCwgdW5yZWYgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyB1c2VMb2NhbGVTdG9yZVdpdGhPdXQgfSBmcm9tICdAL3N0b3JlL21vZHVsZXMvbG9jYWxlJ1xuXG5jb25zdCBUSU1FX0FHT19NRVNTQUdFX01BUDoge1xuICAnemgtQ04nOiBVc2VUaW1lQWdvTWVzc2FnZXNcbiAgZW46IFVzZVRpbWVBZ29NZXNzYWdlc1xufSA9IHtcbiAgJ3poLUNOJzoge1xuICAgIGp1c3ROb3c6ICfliJrliJonLFxuICAgIHBhc3Q6IChuKSA9PiAobi5tYXRjaCgvXFxkLykgPyBgJHtufeWJjWAgOiBuKSxcbiAgICBmdXR1cmU6IChuKSA9PiAobi5tYXRjaCgvXFxkLykgPyBgJHtufeWQjmAgOiBuKSxcbiAgICBtb250aDogKG4sIHBhc3QpID0+IChuID09PSAxID8gKHBhc3QgPyAn5LiK5Liq5pyIJyA6ICfkuIvkuKrmnIgnKSA6IGAke259IOS4quaciGApLFxuICAgIHllYXI6IChuLCBwYXN0KSA9PiAobiA9PT0gMSA/IChwYXN0ID8gJ+WOu+W5tCcgOiAn5piO5bm0JykgOiBgJHtufSDlubRgKSxcbiAgICBkYXk6IChuLCBwYXN0KSA9PiAobiA9PT0gMSA/IChwYXN0ID8gJ+aYqOWkqScgOiAn5piO5aSpJykgOiBgJHtufSDlpKlgKSxcbiAgICB3ZWVrOiAobiwgcGFzdCkgPT4gKG4gPT09IDEgPyAocGFzdCA/ICfkuIrlkagnIDogJ+S4i+WRqCcpIDogYCR7bn0g5ZGoYCksXG4gICAgaG91cjogKG4pID0+IGAke259IOWwj+aXtmAsXG4gICAgbWludXRlOiAobikgPT4gYCR7bn0g5YiG6ZKfYCxcbiAgICBzZWNvbmQ6IChuKSA9PiBgJHtufSDnp5JgXG4gIH0sXG4gIGVuOiB7XG4gICAganVzdE5vdzogJ+WImuWImicsXG4gICAgcGFzdDogKG4pID0+IChuLm1hdGNoKC9cXGQvKSA/IGAke259IGFnb2AgOiBuKSxcbiAgICBmdXR1cmU6IChuKSA9PiAobi5tYXRjaCgvXFxkLykgPyBgaW4gJHtufWAgOiBuKSxcbiAgICBtb250aDogKG4sIHBhc3QpID0+XG4gICAgICBuID09PSAxID8gKHBhc3QgPyAnbGFzdCBtb250aCcgOiAnbmV4dCBtb250aCcpIDogYCR7bn0gbW9udGgke24gPiAxID8gJ3MnIDogJyd9YCxcbiAgICB5ZWFyOiAobiwgcGFzdCkgPT5cbiAgICAgIG4gPT09IDEgPyAocGFzdCA/ICdsYXN0IHllYXInIDogJ25leHQgeWVhcicpIDogYCR7bn0geWVhciR7biA+IDEgPyAncycgOiAnJ31gLFxuICAgIGRheTogKG4sIHBhc3QpID0+IChuID09PSAxID8gKHBhc3QgPyAneWVzdGVyZGF5JyA6ICd0b21vcnJvdycpIDogYCR7bn0gZGF5JHtuID4gMSA/ICdzJyA6ICcnfWApLFxuICAgIHdlZWs6IChuLCBwYXN0KSA9PlxuICAgICAgbiA9PT0gMSA/IChwYXN0ID8gJ2xhc3Qgd2VlaycgOiAnbmV4dCB3ZWVrJykgOiBgJHtufSB3ZWVrJHtuID4gMSA/ICdzJyA6ICcnfWAsXG4gICAgaG91cjogKG4pID0+IGAke259IGhvdXIke24gPiAxID8gJ3MnIDogJyd9YCxcbiAgICBtaW51dGU6IChuKSA9PiBgJHtufSBtaW51dGUke24gPiAxID8gJ3MnIDogJyd9YCxcbiAgICBzZWNvbmQ6IChuKSA9PiBgJHtufSBzZWNvbmQke24gPiAxID8gJ3MnIDogJyd9YFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VUaW1lQWdvID0gKHRpbWU6IERhdGUgfCBudW1iZXIgfCBzdHJpbmcpID0+IHtcbiAgY29uc3QgbG9jYWxlU3RvcmUgPSB1c2VMb2NhbGVTdG9yZVdpdGhPdXQoKVxuXG4gIGNvbnN0IGN1cnJlbnRMb2NhbGUgPSBjb21wdXRlZCgoKSA9PiBsb2NhbGVTdG9yZS5nZXRDdXJyZW50TG9jYWxlKVxuXG4gIGNvbnN0IHRpbWVBZ28gPSB1c2VUaW1lQWdvQ29yZSh0aW1lLCB7XG4gICAgbWVzc2FnZXM6IFRJTUVfQUdPX01FU1NBR0VfTUFQW3VucmVmKGN1cnJlbnRMb2NhbGUpLmxhbmddXG4gIH0pXG5cbiAgcmV0dXJuIHRpbWVBZ29cbn1cbiIsImltcG9ydCB7IHVzZUF4aW9zIH0gZnJvbSAnQC9ob29rcy93ZWIvdXNlQXhpb3MnXG5pbXBvcnQgdHlwZSB7IFdvcmtwbGFjZVRvdGFsLCBQcm9qZWN0LCBEeW5hbWljLCBUZWFtLCBSYWRhckRhdGEgfSBmcm9tICcuL3R5cGVzJ1xuXG5jb25zdCByZXF1ZXN0ID0gdXNlQXhpb3MoKVxuXG5leHBvcnQgY29uc3QgZ2V0Q291bnRBcGkgPSBhc3luYyAoKTogUHJvbWlzZTxJUmVzcG9uc2U8V29ya3BsYWNlVG90YWw+PiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QuZ2V0KHsgdXJsOiAnL3dvcmtwbGFjZS90b3RhbCcgfSlcbiAgcmV0dXJuIHJlcyAmJiByZXMuZGF0YVxufVxuXG5leHBvcnQgY29uc3QgZ2V0UHJvamVjdEFwaSA9IGFzeW5jICgpOiBQcm9taXNlPElSZXNwb25zZTxQcm9qZWN0Pj4gPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0LmdldCh7IHVybDogJy93b3JrcGxhY2UvcHJvamVjdCcgfSlcbiAgcmV0dXJuIHJlcyAmJiByZXMuZGF0YVxufVxuXG5leHBvcnQgY29uc3QgZ2V0RHluYW1pY0FwaSA9IGFzeW5jICgpOiBQcm9taXNlPElSZXNwb25zZTxEeW5hbWljW10+PiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QuZ2V0KHsgdXJsOiAnL3dvcmtwbGFjZS9keW5hbWljJyB9KVxuICByZXR1cm4gcmVzICYmIHJlcy5kYXRhXG59XG5cbmV4cG9ydCBjb25zdCBnZXRUZWFtQXBpID0gYXN5bmMgKCk6IFByb21pc2U8SVJlc3BvbnNlPFRlYW1bXT4+ID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdC5nZXQoeyB1cmw6ICcvd29ya3BsYWNlL3RlYW0nIH0pXG4gIHJldHVybiByZXMgJiYgcmVzLmRhdGFcbn1cblxuZXhwb3J0IGNvbnN0IGdldFJhZGFyQXBpID0gYXN5bmMgKCk6IFByb21pc2U8SVJlc3BvbnNlPFJhZGFyRGF0YVtdPj4gPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0LmdldCh7IHVybDogJy93b3JrcGxhY2UvcmFkYXInIH0pXG4gIHJldHVybiByZXMgJiYgcmVzLmRhdGFcbn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX19hZmM0OGVhZF9fXCIiLCI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgdXNlVGltZUFnbyB9IGZyb20gJ0AvaG9va3Mvd2ViL3VzZVRpbWVBZ28nXG5pbXBvcnQgeyBFbFJvdywgRWxDb2wsIEVsU2tlbGV0b24sIEVsQ2FyZCwgRWxEaXZpZGVyLCBFbExpbmsgfSBmcm9tICdlbGVtZW50LXBsdXMnXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAnQC9ob29rcy93ZWIvdXNlSTE4bidcbmltcG9ydCB7IHJlZiwgcmVhY3RpdmUgfSBmcm9tICd2dWUnXG5pbXBvcnQgeyBDb3VudFRvIH0gZnJvbSAnQC9jb21wb25lbnRzL0NvdW50VG8nXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSAnQC91dGlscydcbmltcG9ydCB7IEVjaGFydCB9IGZyb20gJ0AvY29tcG9uZW50cy9FY2hhcnQnXG5pbXBvcnQgeyBFQ2hhcnRzT3B0aW9uIH0gZnJvbSAnZWNoYXJ0cydcbmltcG9ydCB7IHJhZGFyT3B0aW9uIH0gZnJvbSAnLi9lY2hhcnRzLWRhdGEnXG5pbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tICdAL2NvbXBvbmVudHMvSGlnaGxpZ2h0J1xuaW1wb3J0IHtcbiAgZ2V0Q291bnRBcGksXG4gIGdldFByb2plY3RBcGksXG4gIGdldER5bmFtaWNBcGksXG4gIGdldFRlYW1BcGksXG4gIGdldFJhZGFyQXBpXG59IGZyb20gJ0AvYXBpL2Rhc2hib2FyZC93b3JrcGxhY2UnXG5pbXBvcnQgdHlwZSB7IFdvcmtwbGFjZVRvdGFsLCBQcm9qZWN0LCBEeW5hbWljLCBUZWFtIH0gZnJvbSAnQC9hcGkvZGFzaGJvYXJkL3dvcmtwbGFjZS90eXBlcydcbmltcG9ydCB7IHNldCB9IGZyb20gJ2xvZGFzaC1lcydcblxuY29uc3QgbG9hZGluZyA9IHJlZih0cnVlKVxuXG4vLyDojrflj5bnu5/orqHmlbBcbmxldCB0b3RhbFNhdGUgPSByZWFjdGl2ZTxXb3JrcGxhY2VUb3RhbD4oe1xuICBwcm9qZWN0OiAwLFxuICBhY2Nlc3M6IDAsXG4gIHRvZG86IDBcbn0pXG5cbmNvbnN0IGdldENvdW50ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBnZXRDb3VudEFwaSgpLmNhdGNoKCgpID0+IHt9KVxuICBpZiAocmVzKSB7XG4gICAgdG90YWxTYXRlID0gT2JqZWN0LmFzc2lnbih0b3RhbFNhdGUsIHJlcy5kYXRhKVxuICB9XG59XG5cbmxldCBwcm9qZWN0cyA9IHJlYWN0aXZlPFByb2plY3RbXT4oW10pXG5cbi8vIOiOt+WPlumhueebruaVsFxuY29uc3QgZ2V0UHJvamVjdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZ2V0UHJvamVjdEFwaSgpLmNhdGNoKCgpID0+IHt9KVxuICBpZiAocmVzKSB7XG4gICAgcHJvamVjdHMgPSBPYmplY3QuYXNzaWduKHByb2plY3RzLCByZXMuZGF0YSlcbiAgfVxufVxuXG4vLyDojrflj5bliqjmgIFcbmxldCBkeW5hbWljcyA9IHJlYWN0aXZlPER5bmFtaWNbXT4oW10pXG5cbmNvbnN0IGdldER5bmFtaWMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGdldER5bmFtaWNBcGkoKS5jYXRjaCgoKSA9PiB7fSlcbiAgaWYgKHJlcykge1xuICAgIGR5bmFtaWNzID0gT2JqZWN0LmFzc2lnbihkeW5hbWljcywgcmVzLmRhdGEpXG4gIH1cbn1cblxuLy8g6I635Y+W5Zui6ZifXG5sZXQgdGVhbSA9IHJlYWN0aXZlPFRlYW1bXT4oW10pXG5cbmNvbnN0IGdldFRlYW0gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGdldFRlYW1BcGkoKS5jYXRjaCgoKSA9PiB7fSlcbiAgaWYgKHJlcykge1xuICAgIHRlYW0gPSBPYmplY3QuYXNzaWduKHRlYW0sIHJlcy5kYXRhKVxuICB9XG59XG5cbi8vIOiOt+WPluaMh+aVsFxubGV0IHJhZGFyT3B0aW9uRGF0YSA9IHJlYWN0aXZlPEVDaGFydHNPcHRpb24+KHJhZGFyT3B0aW9uKSBhcyBFQ2hhcnRzT3B0aW9uXG5cbmNvbnN0IGdldFJhZGFyID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBnZXRSYWRhckFwaSgpLmNhdGNoKCgpID0+IHt9KVxuICBpZiAocmVzKSB7XG4gICAgc2V0KFxuICAgICAgcmFkYXJPcHRpb25EYXRhLFxuICAgICAgJ3JhZGFyLmluZGljYXRvcicsXG4gICAgICByZXMuZGF0YS5tYXAoKHYpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBuYW1lOiB0KHYubmFtZSksXG4gICAgICAgICAgbWF4OiB2Lm1heFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIClcbiAgICBzZXQocmFkYXJPcHRpb25EYXRhLCAnc2VyaWVzJywgW1xuICAgICAge1xuICAgICAgICBuYW1lOiBgeHh4JHt0KCd3b3JrcGxhY2UuaW5kZXgnKX1gLFxuICAgICAgICB0eXBlOiAncmFkYXInLFxuICAgICAgICBkYXRhOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IHJlcy5kYXRhLm1hcCgodikgPT4gdi5wZXJzb25hbCksXG4gICAgICAgICAgICBuYW1lOiB0KCd3b3JrcGxhY2UucGVyc29uYWwnKVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6IHJlcy5kYXRhLm1hcCgodikgPT4gdi50ZWFtKSxcbiAgICAgICAgICAgIG5hbWU6IHQoJ3dvcmtwbGFjZS50ZWFtJylcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdKVxuICB9XG59XG5cbmNvbnN0IGdldEFsbEFwaSA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgUHJvbWlzZS5hbGwoW2dldENvdW50KCksIGdldFByb2plY3QoKSwgZ2V0RHluYW1pYygpLCBnZXRUZWFtKCksIGdldFJhZGFyKCldKVxuICBsb2FkaW5nLnZhbHVlID0gZmFsc2Vcbn1cblxuZ2V0QWxsQXBpKClcblxuY29uc3QgeyB0IH0gPSB1c2VJMThuKClcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPEVsQ2FyZCBzaGFkb3c9XCJuZXZlclwiPlxuICAgICAgPEVsU2tlbGV0b24gOmxvYWRpbmc9XCJsb2FkaW5nXCIgYW5pbWF0ZWQ+XG4gICAgICAgIDxFbFJvdyA6Z3V0dGVyPVwiMjBcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgIDxFbENvbCA6eGw9XCIxMlwiIDpsZz1cIjEyXCIgOm1kPVwiMTJcIiA6c209XCIyNFwiIDp4cz1cIjI0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIkAvYXNzZXRzL2ltZ3MvYXZhdGFyLmpwZ1wiXG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInctNzBweCBoLTcwcHggcm91bmRlZC1bNTAlXSBtci0yMHB4XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC0yMHB4IHRleHQtNzAwXCI+XG4gICAgICAgICAgICAgICAgICB7eyB0KCd3b3JrcGxhY2UuZ29vZE1vcm5pbmcnKSB9fe+8jEFyY2hlcu+8jHt7IHQoJ3dvcmtwbGFjZS5oYXBweURheScpIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTEwcHggdGV4dC0xNHB4IHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgIHt7IHQoJ3dvcmtwbGFjZS50b2FkeScpIH1977yMMjDihIMgLSAzMuKEg++8gVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRWxDb2w+XG4gICAgICAgICAgPEVsQ29sIDp4bD1cIjEyXCIgOmxnPVwiMTJcIiA6bWQ9XCIxMlwiIDpzbT1cIjI0XCIgOnhzPVwiMjRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGgtNzBweCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgPHNtOm10LTIwcHhcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB4LThweCB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtMTRweCB0ZXh0LWdyYXktNDAwIG1iLTIwcHhcIj57eyB0KCd3b3JrcGxhY2UucHJvamVjdCcpIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPENvdW50VG9cbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC0yMHB4XCJcbiAgICAgICAgICAgICAgICAgIDpzdGFydC12YWw9XCIwXCJcbiAgICAgICAgICAgICAgICAgIDplbmQtdmFsPVwidG90YWxTYXRlLnByb2plY3RcIlxuICAgICAgICAgICAgICAgICAgOmR1cmF0aW9uPVwiMjYwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxFbERpdmlkZXIgZGlyZWN0aW9uPVwidmVydGljYWxcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtOHB4IHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC0xNHB4IHRleHQtZ3JheS00MDAgbWItMjBweFwiPnt7IHQoJ3dvcmtwbGFjZS50b0RvJykgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q291bnRUb1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LTIwcHhcIlxuICAgICAgICAgICAgICAgICAgOnN0YXJ0LXZhbD1cIjBcIlxuICAgICAgICAgICAgICAgICAgOmVuZC12YWw9XCJ0b3RhbFNhdGUudG9kb1wiXG4gICAgICAgICAgICAgICAgICA6ZHVyYXRpb249XCIyNjAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPEVsRGl2aWRlciBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiIGJvcmRlci1zdHlsZT1cImRhc2hlZFwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC04cHggdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LTE0cHggdGV4dC1ncmF5LTQwMCBtYi0yMHB4XCI+e3sgdCgnd29ya3BsYWNlLmFjY2VzcycpIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPENvdW50VG9cbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC0yMHB4XCJcbiAgICAgICAgICAgICAgICAgIDpzdGFydC12YWw9XCIwXCJcbiAgICAgICAgICAgICAgICAgIDplbmQtdmFsPVwidG90YWxTYXRlLmFjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICA6ZHVyYXRpb249XCIyNjAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRWxDb2w+XG4gICAgICAgIDwvRWxSb3c+XG4gICAgICA8L0VsU2tlbGV0b24+XG4gICAgPC9FbENhcmQ+XG4gIDwvZGl2PlxuXG4gIDxFbFJvdyBjbGFzcz1cIm10LTIwcHhcIiA6Z3V0dGVyPVwiMjBcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxuICAgIDxFbENvbCA6eGw9XCIxNlwiIDpsZz1cIjE2XCIgOm1kPVwiMjRcIiA6c209XCIyNFwiIDp4cz1cIjI0XCIgY2xhc3M9XCJtYi0yMHB4XCI+XG4gICAgICA8RWxDYXJkIHNoYWRvdz1cIm5ldmVyXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSAjaGVhZGVyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPHNwYW4+e3sgdCgnd29ya3BsYWNlLnByb2plY3QnKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxFbExpbmsgdHlwZT1cInByaW1hcnlcIiA6dW5kZXJsaW5lPVwiZmFsc2VcIj57eyB0KCd3b3JrcGxhY2UubW9yZScpIH19PC9FbExpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxFbFNrZWxldG9uIDpsb2FkaW5nPVwibG9hZGluZ1wiIGFuaW1hdGVkPlxuICAgICAgICAgIDxFbFJvdz5cbiAgICAgICAgICAgIDxFbENvbFxuICAgICAgICAgICAgICB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gcHJvamVjdHNcIlxuICAgICAgICAgICAgICA6a2V5PVwiYGNhcmQtJHtpbmRleH1gXCJcbiAgICAgICAgICAgICAgOnhsPVwiOFwiXG4gICAgICAgICAgICAgIDpsZz1cIjhcIlxuICAgICAgICAgICAgICA6bWQ9XCIxMlwiXG4gICAgICAgICAgICAgIDpzbT1cIjI0XCJcbiAgICAgICAgICAgICAgOnhzPVwiMjRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RWxDYXJkIHNoYWRvdz1cImhvdmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8SWNvbiA6aWNvbj1cIml0ZW0uaWNvblwiIDpzaXplPVwiMjVcIiBjbGFzcz1cIm1yLTEwcHhcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LTE2cHhcIj57eyBpdGVtLm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTE1cHggdGV4dC0xNHB4IHRleHQtZ3JheS00MDBcIj57eyB0KGl0ZW0ubWVzc2FnZSkgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMjBweCB0ZXh0LTEycHggdGV4dC1ncmF5LTQwMCBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgaXRlbS5wZXJzb25hbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGZvcm1hdFRpbWUoaXRlbS50aW1lLCAneXl5eS1NTS1kZCcpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0VsQ2FyZD5cbiAgICAgICAgICAgIDwvRWxDb2w+XG4gICAgICAgICAgPC9FbFJvdz5cbiAgICAgICAgPC9FbFNrZWxldG9uPlxuICAgICAgPC9FbENhcmQ+XG5cbiAgICAgIDxFbENhcmQgc2hhZG93PVwibmV2ZXJcIiBjbGFzcz1cIm10LTIwcHhcIj5cbiAgICAgICAgPHRlbXBsYXRlICNoZWFkZXI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8c3Bhbj57eyB0KCd3b3JrcGxhY2UuZHluYW1pYycpIH19PC9zcGFuPlxuICAgICAgICAgICAgPEVsTGluayB0eXBlPVwicHJpbWFyeVwiIDp1bmRlcmxpbmU9XCJmYWxzZVwiPnt7IHQoJ3dvcmtwbGFjZS5tb3JlJykgfX08L0VsTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPEVsU2tlbGV0b24gOmxvYWRpbmc9XCJsb2FkaW5nXCIgYW5pbWF0ZWQ+XG4gICAgICAgICAgPGRpdiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gZHluYW1pY3NcIiA6a2V5PVwiYGR5bmFtaWNzLSR7aW5kZXh9YFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCJAL2Fzc2V0cy9pbWdzL2F2YXRhci5qcGdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ3LTM1cHggaC0zNXB4IHJvdW5kZWQtWzUwJV0gbXItMjBweFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtMTRweFwiPlxuICAgICAgICAgICAgICAgICAgPEhpZ2hsaWdodCA6a2V5cz1cIml0ZW0ua2V5cy5tYXAoKHYpID0+IHQodikpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHQoJ3dvcmtwbGFjZS5wdXNoQ29kZScpIH19XG4gICAgICAgICAgICAgICAgICA8L0hpZ2hsaWdodD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtMTVweCB0ZXh0LTEycHggdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAge3sgdXNlVGltZUFnbyhpdGVtLnRpbWUpIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RWxEaXZpZGVyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRWxTa2VsZXRvbj5cbiAgICAgIDwvRWxDYXJkPlxuICAgIDwvRWxDb2w+XG4gICAgPEVsQ29sIDp4bD1cIjhcIiA6bGc9XCI4XCIgOm1kPVwiMjRcIiA6c209XCIyNFwiIDp4cz1cIjI0XCIgY2xhc3M9XCJtYi0yMHB4XCI+XG4gICAgICA8RWxDYXJkIHNoYWRvdz1cIm5ldmVyXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSAjaGVhZGVyPlxuICAgICAgICAgIDxzcGFuPnt7IHQoJ3dvcmtwbGFjZS5zaG9ydGN1dE9wZXJhdGlvbicpIH19PC9zcGFuPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8RWxTa2VsZXRvbiA6bG9hZGluZz1cImxvYWRpbmdcIiBhbmltYXRlZD5cbiAgICAgICAgICA8RWxDb2xcbiAgICAgICAgICAgIHYtZm9yPVwiaXRlbSBpbiA5XCJcbiAgICAgICAgICAgIDprZXk9XCJgY2FyZC0ke2l0ZW19YFwiXG4gICAgICAgICAgICA6eGw9XCIxMlwiXG4gICAgICAgICAgICA6bGc9XCIxMlwiXG4gICAgICAgICAgICA6bWQ9XCIxMlwiXG4gICAgICAgICAgICA6c209XCIyNFwiXG4gICAgICAgICAgICA6eHM9XCIyNFwiXG4gICAgICAgICAgICBjbGFzcz1cIm1iLTEwcHhcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxFbExpbmsgdHlwZT1cImRlZmF1bHRcIiA6dW5kZXJsaW5lPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAge3sgdCgnd29ya3BsYWNlLm9wZXJhdGlvbicpIH19e3sgaXRlbSB9fVxuICAgICAgICAgICAgPC9FbExpbms+XG4gICAgICAgICAgPC9FbENvbD5cbiAgICAgICAgPC9FbFNrZWxldG9uPlxuICAgICAgPC9FbENhcmQ+XG5cbiAgICAgIDxFbENhcmQgc2hhZG93PVwibmV2ZXJcIiBjbGFzcz1cIm10LTIwcHhcIj5cbiAgICAgICAgPHRlbXBsYXRlICNoZWFkZXI+XG4gICAgICAgICAgPHNwYW4+eHh7eyB0KCd3b3JrcGxhY2UuaW5kZXgnKSB9fTwvc3Bhbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPEVsU2tlbGV0b24gOmxvYWRpbmc9XCJsb2FkaW5nXCIgYW5pbWF0ZWQ+XG4gICAgICAgICAgPEVjaGFydCA6b3B0aW9ucz1cInJhZGFyT3B0aW9uRGF0YVwiIDpoZWlnaHQ9XCI0MDBcIiAvPlxuICAgICAgICA8L0VsU2tlbGV0b24+XG4gICAgICA8L0VsQ2FyZD5cblxuICAgICAgPEVsQ2FyZCBzaGFkb3c9XCJuZXZlclwiIGNsYXNzPVwibXQtMjBweFwiPlxuICAgICAgICA8dGVtcGxhdGUgI2hlYWRlcj5cbiAgICAgICAgICA8c3Bhbj57eyB0KCd3b3JrcGxhY2UudGVhbScpIH19PC9zcGFuPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8RWxTa2VsZXRvbiA6bG9hZGluZz1cImxvYWRpbmdcIiBhbmltYXRlZD5cbiAgICAgICAgICA8RWxSb3c+XG4gICAgICAgICAgICA8RWxDb2wgdi1mb3I9XCJpdGVtIGluIHRlYW1cIiA6a2V5PVwiYHRlYW0tJHtpdGVtLm5hbWV9YFwiIDpzcGFuPVwiMTJcIiBjbGFzcz1cIm1iLTIwcHhcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPEljb24gOmljb249XCJpdGVtLmljb25cIiBjbGFzcz1cIm1yLTEwcHhcIiAvPlxuICAgICAgICAgICAgICAgIDxFbExpbmsgdHlwZT1cImRlZmF1bHRcIiA6dW5kZXJsaW5lPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGl0ZW0ubmFtZSB9fVxuICAgICAgICAgICAgICAgIDwvRWxMaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRWxDb2w+XG4gICAgICAgICAgPC9FbFJvdz5cbiAgICAgICAgPC9FbFNrZWxldG9uPlxuICAgICAgPC9FbENhcmQ+XG4gICAgPC9FbENvbD5cbiAgPC9FbFJvdz5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsiVElNRV9BR09fTUVTU0FHRV9NQVAiLCJqdXN0Tm93IiwicGFzdCIsIm4iLCJtYXRjaCIsImZ1dHVyZSIsIm1vbnRoIiwieWVhciIsImRheSIsIndlZWsiLCJob3VyIiwibWludXRlIiwic2Vjb25kIiwiZW4iLCJ1c2VUaW1lQWdvIiwidGltZSIsImxvY2FsZVN0b3JlIiwidXNlTG9jYWxlU3RvcmVXaXRoT3V0IiwiY3VycmVudExvY2FsZSIsImNvbXB1dGVkIiwiZ2V0Q3VycmVudExvY2FsZSIsInVzZVRpbWVBZ29Db3JlIiwibWVzc2FnZXMiLCJ1bnJlZiIsImxhbmciLCJyZXF1ZXN0IiwidXNlQXhpb3MiLCJsb2FkaW5nIiwicmVmIiwidG90YWxTYXRlIiwicmVhY3RpdmUiLCJwcm9qZWN0IiwiYWNjZXNzIiwidG9kbyIsImdldENvdW50IiwiYXN5bmMiLCJyZXMiLCJnZXQiLCJ1cmwiLCJkYXRhIiwiZ2V0Q291bnRBcGkiLCJjYXRjaCIsIk9iamVjdCIsImFzc2lnbiIsInByb2plY3RzIiwiZ2V0UHJvamVjdCIsImdldFByb2plY3RBcGkiLCJkeW5hbWljcyIsImdldER5bmFtaWMiLCJnZXREeW5hbWljQXBpIiwidGVhbSIsImdldFRlYW0iLCJnZXRUZWFtQXBpIiwicmFkYXJPcHRpb25EYXRhIiwicmFkYXJPcHRpb24iLCJnZXRSYWRhciIsImdldFJhZGFyQXBpIiwic2V0IiwibWFwIiwidiIsIm5hbWUiLCJ0IiwibWF4IiwidHlwZSIsInZhbHVlIiwicGVyc29uYWwiLCJQcm9taXNlIiwiYWxsIiwidXNlSTE4biJdLCJtYXBwaW5ncyI6Im9zQkFJQSxNQUFNQSxFQUdGLENBQ0YsUUFBUyxDQUNQQyxRQUFTLEtBQ1RDLEtBQU9DLEdBQU9BLEVBQUVDLE1BQU0sTUFBUSxHQUFHRCxL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
