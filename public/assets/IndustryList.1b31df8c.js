import{_ as e}from"./ContentWrap.16a17a2c.js";import{_ as r}from"./Search.76af3e59.js";import{_ as t}from"./Dialog.83318e14.js";import{d as o,bQ as a,q as s,r as i,s as n,aF as d,o as l,c as m,g as c,w as p,a as f,G as u,l as b,at as y,k as j,x as g,t as h}from"./index.b1059dae.js";import{E as w}from"./el-button.fa3cf5bb.js";import{E as _}from"./el-link.afb0c50c.js";import{_ as v}from"./Table.vue_vue_type_script_lang.7413d2fb.js";import{u as x}from"./useAxios.b7f2bb2e.js";import{u as P}from"./useTable.3b2e2107.js";import k from"./Write.43c0a23b.js";import I from"./Detail.09401c84.js";import{u as S}from"./useCrudSchemas.4529f5d7.js";import{g as z}from"./index.c4d6caeb.js";import"./el-card.1ec308ce.js";import"./el-popper.bb59900e.js";import"./index2.818f7ba6.js";import"./Form.8dc6e1de.js";import"./el-col.6fe24f7e.js";import"./typescript2.0e462989.js";import"./el-input.06003b15.js";import"./event2.1741f333.js";import"./index2.094f2439.js";import"./el-tag.0c1f86f6.js";import"./tsxHelper.965510a5.js";import"./index2.41c46d54.js";import"./scroll2.547c442b.js";import"./debounce.a82ef6ea.js";import"./validator2.e1318026.js";import"./el-input-number.d6a5ff91.js";import"./el-switch.4afbc0fe.js";import"./el-divider.cb2e339e.js";import"./InputPassword.ff88492e.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.049c780c.js";import"./aria2.b5095a02.js";import"./browser2.b89d9fd3.js";import"./useForm.9c2aed63.js";import"./el-overlay.e2b68649.js";import"./vnode2.fb06813d.js";import"./use-dialog2.df789107.js";import"./refs2.528ab877.js";import"./el-message-box.06586f35.js";import"./useValidator.417be559.js";import"./Descriptions.2977bf96.js";import"./index2.d0413be8.js";import"./tree.9e4d3f05.js";const C=x(),D=async e=>{const r=await C.get({url:"/categories/industryList",params:e});return r&&r.data},R=o({__name:"IndustryList",setup(o){const{register:x,tableObject:C,methods:R}=P({getListApi:D,response:{list:"list",total:"total"}}),T=a(),{wsCache:E}=s(),L=E.get(T.getUserInfo),O=i("");(async()=>{const e=await z().catch((()=>{})).finally((()=>{H.value=!1}));console.log("currUser==res=====",e),e&&(O.value=e.data.id,L.id=e.data.id,E.set(T.getUserInfo,L))})();const{getList:U,setSearchParams:X}=R;U();const{t:V}=b(),B=i(),F=n([{field:"index",label:V("tableDemo.index"),type:"index",form:{show:!1},detail:{show:!1}},{field:"cate33",label:V("group.name"),search:{show:!0},form:{colProps:{span:24},componentProps:{onChange:e=>{console.log("genCode--val===",e)}}},detail:{span:12}},{field:"cnt",label:V("group.stock_count"),formatter:(e,r,t)=>d(_,{underline:!1,type:"primary",href:"/#/industry/stock?&from=industry&indId="+e.cate33_code+"&size=0"},(()=>t)),disabled:!0,form:{show:!1,componentProps:{disabled:!0}}},{field:"c30",label:"TOPIX Core30",disabled:!0,formatter:(e,r,t)=>d(_,{underline:!1,type:"0"===t?"info":"primary",href:"0"===t?"/#/industry/index":"/#/industry/stock?&from=industry&indId="+e.cate33_code+"&size=1"},(()=>t)),form:{show:!1,componentProps:{disabled:!0}}},{field:"l70",label:"TOPIX Large70",disabled:!0,formatter:(e,r,t)=>d(_,{underline:!1,type:"0"===t?"info":"primary",href:"0"===t?"/#/industry/index":"/#/industry/stock?&from=industry&indId="+e.cate33_code+"&size=2"},(()=>t)),form:{show:!1,componentProps:{disabled:!0}}},{field:"m400",label:"TOPIX Mid400",formatter:(e,r,t)=>d(_,{underline:!1,type:"0"===t?"info":"primary",href:"0"===t?"/#/industry/index":"/#/industry/stock?&from=industry&indId="+e.cate33_code+"&size=4"},(()=>t)),disabled:!0,form:{show:!1,componentProps:{disabled:!0}}},{field:"s1",label:"TOPIX Small 1",formatter:(e,r,t)=>d(_,{underline:!1,type:"0"===t?"info":"primary",href:"0"===t?"/#/industry/index":"/#/industry/stock?&from=industry&indId="+e.cate33_code+"&size=6"},(()=>t)),disabled:!0,form:{show:!1,componentProps:{disabled:!0}}},{field:"s2",label:"TOPIX Small 2",formatter:(e,r,t)=>d(_,{underline:!1,type:"0"===t?"info":"primary",href:"0"===t?"/#/industry/index":"/#/industry/stock?&from=industry&indId="+e.cate33_code+"&size=7"},(()=>t)),disabled:!0,form:{show:!1,componentProps:{disabled:!0}}},{field:"other",label:"-",formatter:(e,r,t)=>d(_,{underline:!1,type:"0"===t?"info":"primary",href:"0"===t?"/#/industry/index":"/#/industry/stock?&from=industry&indId="+e.cate33_code+"&size=-"},(()=>t)),disabled:!0,form:{show:!1,componentProps:{disabled:!0}}}]),{allSchemas:A}=S(F),W=i(!1),q=i(""),G=i(""),H=i(!1);return(o,a)=>(l(),m(u,null,[c(f(e),null,{default:p((()=>[c(f(r),{schema:f(A).searchSchema,onSearch:f(X),onReset:f(X)},null,8,["schema","onSearch","onReset"]),c(f(v),{pageSize:f(C).pageSize,"onUpdate:pageSize":a[0]||(a[0]=e=>f(C).pageSize=e),currentPage:f(C).currentPage,"onUpdate:currentPage":a[1]||(a[1]=e=>f(C).currentPage=e),columns:f(A).tableColumns,data:f(C).tableList,loading:f(C).loading,pagination:{total:f(C).total},onRegister:f(x)},{default:p((()=>[y(' template #action="{ row }">\r\n        <ElButton :icon="table" type="success" @click="openDetail(row)" />\r\n\r\n        <ElButton\r\n          :disabled="userId != row.user_id"\r\n          type="primary"\r\n          :icon="edit"\r\n          @click="action(row, \'edit\')"\r\n        />\r\n\r\n        <ElButton\r\n          :disabled="userId != row.user_id"\r\n          type="danger"\r\n          :icon="del"\r\n          @click="delData(row, false)"\r\n        />\r\n      </template ')])),_:1},8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),c(f(t),{modelValue:W.value,"onUpdate:modelValue":a[3]||(a[3]=e=>W.value=e),title:q.value},{footer:p((()=>["detail"!==G.value?(l(),j(f(w),{key:0,type:"primary",loading:H.value},{default:p((()=>[g(h(f(V)("exampleDemo.save")),1)])),_:1},8,["loading"])):y("v-if",!0),c(f(w),{onClick:a[2]||(a[2]=e=>W.value=!1)},{default:p((()=>[g(h(f(V)("dialogDemo.close")),1)])),_:1})])),default:p((()=>["edit"===G.value?(l(),j(k,{key:0,ref_key:"writeRef",ref:B,"form-schema":f(A).formSchema,"current-row":f(C).currentRow},null,8,["form-schema","current-row"])):y("v-if",!0),"detail"===G.value?(l(),j(I,{key:1,"detail-schema":f(A).detailSchema,"current-row":f(C).currentRow},null,8,["detail-schema","current-row"])):y("v-if",!0)])),_:1},8,["modelValue","title"])],64))}});export{R as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kdXN0cnlMaXN0LjFiMzFkZjhjLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBpL2luZHVzdHJ5L2luZGV4LnRzIiwiLi4vLi4vc3JjL3ZpZXdzL0luZHVzdHJ5L0luZHVzdHJ5TGlzdC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQXhpb3MgfSBmcm9tICdAL2hvb2tzL3dlYi91c2VBeGlvcydcclxuaW1wb3J0IHR5cGUgeyBpbmR1c3RyeURhdGEgfSBmcm9tICcuL3R5cGVzJ1xyXG5cclxuY29uc3QgcmVxdWVzdCA9IHVzZUF4aW9zKClcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJbmR1c3RyeUxpc3RBcGkgPSBhc3luYyAocGFyYW1zOiBhbnkpOiBQcm9taXNlPElSZXNwb25zZT4gPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QuZ2V0KHsgdXJsOiAnL2NhdGVnb3JpZXMvaW5kdXN0cnlMaXN0JywgcGFyYW1zIH0pXHJcbiAgcmV0dXJuIHJlcyAmJiByZXMuZGF0YVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RvY2tzQnlDYXRlZ29yeUlkID0gYXN5bmMgKHBhcmFtczogYW55KTogUHJvbWlzZTxJUmVzcG9uc2U+ID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0LmdldCh7IHVybDogJy9jYXRlZ29yaWVzL2dldFN0b2Nrc0J5Q2F0ZWdvcnlJZCcsIHBhcmFtcyB9KVxyXG4gIHJldHVybiByZXMgJiYgcmVzLmRhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVHcm91cEFwaSA9IGFzeW5jIChkYXRhOiBQYXJ0aWFsPGluZHVzdHJ5RGF0YT4pOiBQcm9taXNlPElSZXNwb25zZT4gPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdzYXZlR3JvdXBBcGk9PT1kYXRhPT09PScsIGRhdGEpXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdC5wb3N0KHsgdXJsOiAnL2NhdGVnb3JpZXMnLCBkYXRhIH0pXHJcbiAgcmV0dXJuIHJlcyAmJiByZXMuZGF0YVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0R3JvdXBEZXRBcGkgPSBhc3luYyAoaWQ6IHN0cmluZyk6IFByb21pc2U8SVJlc3BvbnNlPGluZHVzdHJ5RGF0YT4+ID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0LmdldCh7IHVybDogJy9ncm91cC9kZXRhaWwnLCBwYXJhbXM6IHsgaWQgfSB9KVxyXG4gIHJldHVybiByZXMgJiYgcmVzLmRhdGFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbEdyb3VwTGlzdEFwaSA9IGFzeW5jIChpZHM6IHN0cmluZ1tdIHwgbnVtYmVyW10pOiBQcm9taXNlPElSZXNwb25zZT4gPT4ge1xyXG4gIGNvbnN0IGlkc1N0ciA9IGlkcy50b1N0cmluZygpXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgcmVxdWVzdC5wb3N0KHsgdXJsOiAnL2NhdGVnb3JpZXMvZGVsQ2F0ZScsIGRhdGE6IHsgaWRzOiBpZHNTdHIgfSB9KVxyXG4gIHJldHVybiByZXMgJiYgcmVzLmRhdGFcclxufVxyXG4iLCI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxyXG5pbXBvcnQgeyBDb250ZW50V3JhcCB9IGZyb20gJ0AvY29tcG9uZW50cy9Db250ZW50V3JhcCdcclxuLy8gaW1wb3J0IHsgU2VhcmNoQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL1NlYXJjaEJ1dHRvbidcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnQC9jb21wb25lbnRzL1NlYXJjaCdcclxuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnQC9jb21wb25lbnRzL0RpYWxvZydcclxuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ0AvaG9va3Mvd2ViL3VzZUkxOG4nXHJcbmltcG9ydCB7IEVsQnV0dG9uLCBFbExpbmsgfSBmcm9tICdlbGVtZW50LXBsdXMnXHJcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnQC9jb21wb25lbnRzL1RhYmxlJ1xyXG5pbXBvcnQgeyBnZXRJbmR1c3RyeUxpc3RBcGkgfSBmcm9tICdAL2FwaS9pbmR1c3RyeSdcclxuaW1wb3J0IHsgdXNlVGFibGUgfSBmcm9tICdAL2hvb2tzL3dlYi91c2VUYWJsZSdcclxuaW1wb3J0IHsgR3JvdXBEYXRhIH0gZnJvbSAnQC9hcGkvZ3JvdXAvdHlwZXMnXHJcbmltcG9ydCB7IGgsIHJlZiwgcmVhY3RpdmUgfSBmcm9tICd2dWUnXHJcbmltcG9ydCBXcml0ZSBmcm9tICcuL2NvbXBvbmVudHMvV3JpdGUudnVlJ1xyXG5pbXBvcnQgRGV0YWlsIGZyb20gJy4vY29tcG9uZW50cy9EZXRhaWwudnVlJ1xyXG5pbXBvcnQgeyBDcnVkU2NoZW1hLCB1c2VDcnVkU2NoZW1hcyB9IGZyb20gJ0AvaG9va3Mvd2ViL3VzZUNydWRTY2hlbWFzJ1xyXG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIsIFJvdXRlUmVjb3JkUmF3IH0gZnJvbSAndnVlLXJvdXRlcidcclxuLy8gaW1wb3J0IHsgdXNlSWNvbiB9IGZyb20gJ0AvaG9va3Mvd2ViL3VzZUljb24nXHJcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyIH0gZnJvbSAnQC9hcGkvbG9naW4nXHJcblxyXG5pbXBvcnQgeyB1c2VDYWNoZSB9IGZyb20gJ0AvaG9va3Mvd2ViL3VzZUNhY2hlJ1xyXG5pbXBvcnQgeyB1c2VBcHBTdG9yZVdpdGhPdXQgfSBmcm9tICdAL3N0b3JlL21vZHVsZXMvYXBwJ1xyXG5cclxuLy8gaW1wb3J0IHsgdXNlUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnQC9zdG9yZS9tb2R1bGVzL3Blcm1pc3Npb24nXHJcblxyXG5jb25zdCB7IHJlZ2lzdGVyLCB0YWJsZU9iamVjdCwgbWV0aG9kcyB9ID0gdXNlVGFibGU8R3JvdXBEYXRhPih7XHJcbiAgZ2V0TGlzdEFwaTogZ2V0SW5kdXN0cnlMaXN0QXBpLFxyXG4gIC8vIGRlbExpc3RBcGk6IGRlbEdyb3VwTGlzdEFwaSxcclxuICByZXNwb25zZToge1xyXG4gICAgbGlzdDogJ2xpc3QnLFxyXG4gICAgdG90YWw6ICd0b3RhbCdcclxuICB9XHJcbn0pXHJcbmNvbnN0IGFwcFN0b3JlID0gdXNlQXBwU3RvcmVXaXRoT3V0KClcclxuY29uc3QgeyB3c0NhY2hlIH0gPSB1c2VDYWNoZSgpXHJcbmNvbnN0IHVzZXJJbmZvID0gd3NDYWNoZS5nZXQoYXBwU3RvcmUuZ2V0VXNlckluZm8pXHJcblxyXG5jb25zdCB1c2VySWQgPSByZWYoJycpXHJcblxyXG4vLyBjb25zdCBzdG9ja0J5SW5kdXN0cnkgPSAocm93KSA9PntcclxuLy8gICBjb25zb2xlLmxvZyhyb3cpXHJcbi8vIH1cclxuXHJcbmNvbnN0IGN1cnJVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKClcclxuICAgIC5jYXRjaCgoKSA9PiB7fSlcclxuICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgbG9hZGluZy52YWx1ZSA9IGZhbHNlXHJcbiAgICB9KVxyXG4gIGNvbnNvbGUubG9nKCdjdXJyVXNlcj09cmVzPT09PT0nLCByZXMpXHJcbiAgaWYgKHJlcykge1xyXG4gICAgdXNlcklkLnZhbHVlID0gcmVzLmRhdGEuaWRcclxuICAgIHVzZXJJbmZvLmlkID0gcmVzLmRhdGEuaWRcclxuICAgIHdzQ2FjaGUuc2V0KGFwcFN0b3JlLmdldFVzZXJJbmZvLCB1c2VySW5mbylcclxuICB9XHJcbn1cclxuY3VyclVzZXIoKVxyXG5cclxuY29uc3QgeyBnZXRMaXN0LCBzZXRTZWFyY2hQYXJhbXMgfSA9IG1ldGhvZHNcclxuLy8gY29uc3QgeyBwdXNoIH0gPSB1c2VSb3V0ZXIoKVxyXG4vLyBjb25zdCBwbHVzID0gdXNlSWNvbih7IGljb246ICdhbnQtZGVzaWduOnBsdXMtb3V0bGluZWQnIH0pXHJcbi8vIC8vIGNvbnN0IGNoYXJ0ID0gdXNlSWNvbih7IGljb246ICdpY29uLXBhcmstb3V0bGluZTpzdG9jay1tYXJrZXQnIH0pXHJcbi8vIGNvbnN0IHRhYmxlID0gdXNlSWNvbih7IGljb246ICdjYXJib246dGFibGUnIH0pXHJcbi8vIGNvbnN0IGRlbCA9IHVzZUljb24oeyBpY29uOiAnZXA6ZGVsZXRlJyB9KVxyXG4vLyBjb25zdCBlZGl0ID0gdXNlSWNvbih7IGljb246ICdieDplZGl0JyB9KVxyXG5cclxuLy8gY29uc3Qgc3RvcmUgPSB1c2VQZXJtaXNzaW9uU3RvcmUoKVxyXG4vLyBjb25zb2xlLmxvZygnc3RvcmU9PT0nLCBzdG9yZS5nZXRSb3V0ZXJzLmxlbmd0aCwgc3RvcmUuZ2V0Um91dGVycylcclxuLy8gbGV0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbmdldExpc3QoKVxyXG5cclxuY29uc3QgeyB0IH0gPSB1c2VJMThuKClcclxuXHJcbmNvbnN0IHdyaXRlUmVmID0gcmVmPENvbXBvbmVudFJlZjx0eXBlb2YgV3JpdGU+PigpXHJcbi8vIGNvbnN0IHdyaXRlID0gdW5yZWYod3JpdGVSZWYpXHJcblxyXG5jb25zdCBnZW5Db2RlID0gKHZhbDogc3RyaW5nKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ2dlbkNvZGUtLXZhbD09PScsIHZhbClcclxuICAvLyB3cml0ZT8uc2V0VmFsdWVzKHtcclxuICAvLyAgIHJlbWFyazogdmFsXHJcbiAgLy8gfSlcclxuICAvL2NvbnNvbGUubG9nKCdnZW5Db2RlLS12YWw9PWVuZCAnLCB2YWwpXHJcbn1cclxuY29uc3QgY3J1ZFNjaGVtYXMgPSByZWFjdGl2ZTxDcnVkU2NoZW1hW10+KFtcclxuICB7XHJcbiAgICBmaWVsZDogJ2luZGV4JyxcclxuICAgIGxhYmVsOiB0KCd0YWJsZURlbW8uaW5kZXgnKSxcclxuICAgIHR5cGU6ICdpbmRleCcsXHJcbiAgICBmb3JtOiB7XHJcbiAgICAgIHNob3c6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZGV0YWlsOiB7XHJcbiAgICAgIHNob3c6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICB7XHJcbiAgICBmaWVsZDogJ2NhdGUzMycsXHJcbiAgICBsYWJlbDogdCgnZ3JvdXAubmFtZScpLFxyXG4gICAgc2VhcmNoOiB7XHJcbiAgICAgIHNob3c6IHRydWVcclxuICAgIH0sXHJcbiAgICBmb3JtOiB7XHJcbiAgICAgIGNvbFByb3BzOiB7XHJcbiAgICAgICAgc3BhbjogMjRcclxuICAgICAgfSxcclxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcclxuICAgICAgICBvbkNoYW5nZTogZ2VuQ29kZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGV0YWlsOiB7XHJcbiAgICAgIHNwYW46IDEyXHJcbiAgICB9XHJcbiAgfSxcclxuICB7XHJcbiAgICBmaWVsZDogJ2NudCcsXHJcbiAgICBsYWJlbDogdCgnZ3JvdXAuc3RvY2tfY291bnQnKSxcclxuICAgIGZvcm1hdHRlcjogKHJvdzogUmVjb3JkYWJsZSwgX186IFRhYmxlQ29sdW1uLCBjZWxsVmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgICByZXR1cm4gaChcclxuICAgICAgICBFbExpbmssXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgLy8gY2xpY2s6IHN0b2NrQnlJbmR1c3RyeShyb3cpLFxyXG4gICAgICAgICAgdW5kZXJsaW5lOiBmYWxzZSxcclxuICAgICAgICAgIHR5cGU6ICdwcmltYXJ5JyxcclxuICAgICAgICAgIGhyZWY6ICcvIy9pbmR1c3RyeS9zdG9jaz8mZnJvbT1pbmR1c3RyeSZpbmRJZD0nICsgcm93LmNhdGUzM19jb2RlICsgJyZzaXplPTAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBFbEJ1dHRvbixcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICBjbGljazogc3RvY2tCeUluZHVzdHJ5KHJvdyksXHJcbiAgICAgICAgLy8gICAvL3VuZGVybGluZTogZmFsc2UgLFxyXG4gICAgICAgIC8vICAgcGxhaW46IHRydWUsXHJcbiAgICAgICAgLy8gICBsaW5rZTogdHJ1ZSxcclxuICAgICAgICAvLyAgIHR5cGU6ICdwcmltYXJ5JyAsXHJcbiAgICAgICAgLy8gICBocmVmOiAnLyMvc3RvY2svU3RvY2tMaXN0P2RlbD0xJmZyb209aW5kdXN0cnknXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAoKSA9PiBjZWxsVmFsdWVcclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIC8vIHR5cGU6ICdjb3VudCcsXHJcbiAgICBkaXNhYmxlZDogdHJ1ZSxcclxuICAgIGZvcm06IHtcclxuICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XHJcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmllbGQ6ICdjMzAnLFxyXG4gICAgbGFiZWw6ICdUT1BJWCBDb3JlMzAnLFxyXG4gICAgZGlzYWJsZWQ6IHRydWUsXHJcbiAgICBmb3JtYXR0ZXI6IChyb3c6IFJlY29yZGFibGUsIF9fOiBUYWJsZUNvbHVtbiwgY2VsbFZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgICAgcmV0dXJuIGgoXHJcbiAgICAgICAgRWxMaW5rLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVuZGVybGluZTogZmFsc2UsXHJcbiAgICAgICAgICB0eXBlOiBjZWxsVmFsdWUgPT09ICcwJyA/ICdpbmZvJyA6ICdwcmltYXJ5JyxcclxuICAgICAgICAgIGhyZWY6XHJcbiAgICAgICAgICAgIGNlbGxWYWx1ZSA9PT0gJzAnXHJcbiAgICAgICAgICAgICAgPyAnLyMvaW5kdXN0cnkvaW5kZXgnXHJcbiAgICAgICAgICAgICAgOiAnLyMvaW5kdXN0cnkvc3RvY2s/JmZyb209aW5kdXN0cnkmaW5kSWQ9JyArIHJvdy5jYXRlMzNfY29kZSArICcmc2l6ZT0xJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4gY2VsbFZhbHVlXHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICBmb3JtOiB7XHJcbiAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICBjb21wb25lbnRQcm9wczoge1xyXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHtcclxuICAgIGZpZWxkOiAnbDcwJyxcclxuICAgIGxhYmVsOiAnVE9QSVggTGFyZ2U3MCcsXHJcbiAgICBkaXNhYmxlZDogdHJ1ZSxcclxuICAgIGZvcm1hdHRlcjogKHJvdzogUmVjb3JkYWJsZSwgX186IFRhYmxlQ29sdW1uLCBjZWxsVmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgICByZXR1cm4gaChcclxuICAgICAgICBFbExpbmssXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdW5kZXJsaW5lOiBmYWxzZSxcclxuICAgICAgICAgIHR5cGU6IGNlbGxWYWx1ZSA9PT0gJzAnID8gJ2luZm8nIDogJ3ByaW1hcnknLFxyXG4gICAgICAgICAgaHJlZjpcclxuICAgICAgICAgICAgY2VsbFZhbHVlID09PSAnMCdcclxuICAgICAgICAgICAgICA/ICcvIy9pbmR1c3RyeS9pbmRleCdcclxuICAgICAgICAgICAgICA6ICcvIy9pbmR1c3RyeS9zdG9jaz8mZnJvbT1pbmR1c3RyeSZpbmRJZD0nICsgcm93LmNhdGUzM19jb2RlICsgJyZzaXplPTInXHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiBjZWxsVmFsdWVcclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIGZvcm06IHtcclxuICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XHJcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmllbGQ6ICdtNDAwJyxcclxuICAgIGxhYmVsOiAnVE9QSVggTWlkNDAwJyxcclxuICAgIGZvcm1hdHRlcjogKHJvdzogUmVjb3JkYWJsZSwgX186IFRhYmxlQ29sdW1uLCBjZWxsVmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgICByZXR1cm4gaChcclxuICAgICAgICBFbExpbmssXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdW5kZXJsaW5lOiBmYWxzZSxcclxuICAgICAgICAgIHR5cGU6IGNlbGxWYWx1ZSA9PT0gJzAnID8gJ2luZm8nIDogJ3ByaW1hcnknLFxyXG4gICAgICAgICAgaHJlZjpcclxuICAgICAgICAgICAgY2VsbFZhbHVlID09PSAnMCdcclxuICAgICAgICAgICAgICA/ICcvIy9pbmR1c3RyeS9pbmRleCdcclxuICAgICAgICAgICAgICA6ICcvIy9pbmR1c3RyeS9zdG9jaz8mZnJvbT1pbmR1c3RyeSZpbmRJZD0nICsgcm93LmNhdGUzM19jb2RlICsgJyZzaXplPTQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiBjZWxsVmFsdWVcclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgZm9ybToge1xyXG4gICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcclxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICB7XHJcbiAgICBmaWVsZDogJ3MxJyxcclxuICAgIGxhYmVsOiAnVE9QSVggU21hbGwgMScsXHJcbiAgICBmb3JtYXR0ZXI6IChyb3c6IFJlY29yZGFibGUsIF9fOiBUYWJsZUNvbHVtbiwgY2VsbFZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgICAgcmV0dXJuIGgoXHJcbiAgICAgICAgRWxMaW5rLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVuZGVybGluZTogZmFsc2UsXHJcbiAgICAgICAgICB0eXBlOiBjZWxsVmFsdWUgPT09ICcwJyA/ICdpbmZvJyA6ICdwcmltYXJ5JyxcclxuICAgICAgICAgIGhyZWY6XHJcbiAgICAgICAgICAgIGNlbGxWYWx1ZSA9PT0gJzAnXHJcbiAgICAgICAgICAgICAgPyAnLyMvaW5kdXN0cnkvaW5kZXgnXHJcbiAgICAgICAgICAgICAgOiAnLyMvaW5kdXN0cnkvc3RvY2s/JmZyb209aW5kdXN0cnkmaW5kSWQ9JyArIHJvdy5jYXRlMzNfY29kZSArICcmc2l6ZT02J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4gY2VsbFZhbHVlXHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICBkaXNhYmxlZDogdHJ1ZSxcclxuICAgIGZvcm06IHtcclxuICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XHJcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmllbGQ6ICdzMicsXHJcbiAgICBsYWJlbDogJ1RPUElYIFNtYWxsIDInLFxyXG4gICAgZm9ybWF0dGVyOiAocm93OiBSZWNvcmRhYmxlLCBfXzogVGFibGVDb2x1bW4sIGNlbGxWYWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHJldHVybiBoKFxyXG4gICAgICAgIEVsTGluayxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1bmRlcmxpbmU6IGZhbHNlLFxyXG4gICAgICAgICAgdHlwZTogY2VsbFZhbHVlID09PSAnMCcgPyAnaW5mbycgOiAncHJpbWFyeScsXHJcbiAgICAgICAgICBocmVmOlxyXG4gICAgICAgICAgICBjZWxsVmFsdWUgPT09ICcwJ1xyXG4gICAgICAgICAgICAgID8gJy8jL2luZHVzdHJ5L2luZGV4J1xyXG4gICAgICAgICAgICAgIDogJy8jL2luZHVzdHJ5L3N0b2NrPyZmcm9tPWluZHVzdHJ5JmluZElkPScgKyByb3cuY2F0ZTMzX2NvZGUgKyAnJnNpemU9NydcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IGNlbGxWYWx1ZVxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gICAgZGlzYWJsZWQ6IHRydWUsXHJcbiAgICBmb3JtOiB7XHJcbiAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICBjb21wb25lbnRQcm9wczoge1xyXG4gICAgICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHtcclxuICAgIGZpZWxkOiAnb3RoZXInLFxyXG4gICAgbGFiZWw6ICctJyxcclxuICAgIGZvcm1hdHRlcjogKHJvdzogUmVjb3JkYWJsZSwgX186IFRhYmxlQ29sdW1uLCBjZWxsVmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgICByZXR1cm4gaChcclxuICAgICAgICBFbExpbmssXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdW5kZXJsaW5lOiBmYWxzZSxcclxuICAgICAgICAgIHR5cGU6IGNlbGxWYWx1ZSA9PT0gJzAnID8gJ2luZm8nIDogJ3ByaW1hcnknLFxyXG4gICAgICAgICAgaHJlZjpcclxuICAgICAgICAgICAgY2VsbFZhbHVlID09PSAnMCdcclxuICAgICAgICAgICAgICA/ICcvIy9pbmR1c3RyeS9pbmRleCdcclxuICAgICAgICAgICAgICA6ICcvIy9pbmR1c3RyeS9zdG9jaz8mZnJvbT1pbmR1c3RyeSZpbmRJZD0nICsgcm93LmNhdGUzM19jb2RlICsgJyZzaXplPS0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiBjZWxsVmFsdWVcclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgZm9ybToge1xyXG4gICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcclxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIHtcclxuICAvLyAgIGZpZWxkOiAnYWN0aW9uJyxcclxuICAvLyAgIHdpZHRoOiAnMjYwcHgnLFxyXG4gIC8vICAgbGFiZWw6IHQoJ3RhYmxlRGVtby5hY3Rpb24nKSxcclxuICAvLyAgIGZvcm06IHtcclxuICAvLyAgICAgc2hvdzogZmFsc2VcclxuICAvLyAgIH0sXHJcbiAgLy8gICBkZXRhaWw6IHtcclxuICAvLyAgICAgc2hvdzogZmFsc2VcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbl0pXHJcblxyXG5jb25zdCB7IGFsbFNjaGVtYXMgfSA9IHVzZUNydWRTY2hlbWFzKGNydWRTY2hlbWFzKVxyXG5cclxuY29uc3QgZGlhbG9nVmlzaWJsZSA9IHJlZihmYWxzZSlcclxuXHJcbmNvbnN0IGRpYWxvZ1RpdGxlID0gcmVmKCcnKVxyXG5cclxuLy9jb25zdCBkZWxMb2FkaW5nID0gcmVmKGZhbHNlKVxyXG5cclxuLy8gY29uc3QgZGVsRGF0YSA9IGFzeW5jIChyb3c6IEdyb3VwRGF0YSB8IG51bGwsIG11bHRpcGxlOiBib29sZWFuKSA9PiB7XHJcbi8vICAgdGFibGVPYmplY3QuY3VycmVudFJvdyA9IHJvd1xyXG4vLyAgIGNvbnN0IHsgZGVsTGlzdCwgZ2V0U2VsZWN0aW9ucyB9ID0gbWV0aG9kc1xyXG4vLyAgIGNvbnN0IHNlbGVjdGlvbnMgPSBhd2FpdCBnZXRTZWxlY3Rpb25zKClcclxuLy8gICBkZWxMb2FkaW5nLnZhbHVlID0gdHJ1ZVxyXG4vLyAgIGF3YWl0IGRlbExpc3QoXHJcbi8vICAgICBtdWx0aXBsZSA/IHNlbGVjdGlvbnMubWFwKCh2KSA9PiB2LmlkKSA6IFt0YWJsZU9iamVjdC5jdXJyZW50Um93Py5pZCBhcyBzdHJpbmddLFxyXG4vLyAgICAgbXVsdGlwbGVcclxuLy8gICApLmZpbmFsbHkoKCkgPT4ge1xyXG4vLyAgICAgZGVsTG9hZGluZy52YWx1ZSA9IGZhbHNlXHJcbi8vICAgfSlcclxuLy8gfVxyXG5cclxuLy8gZ2V0TGlzdDogYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgICB0YWJsZU9iamVjdC5sb2FkaW5nID0gdHJ1ZVxyXG4vLyAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjb25maWc/LmdldExpc3RBcGkodW5yZWYocGFyYW1zT2JqKSkuZmluYWxseSgoKSA9PiB7XHJcbi8vICAgICAgICAgdGFibGVPYmplY3QubG9hZGluZyA9IGZhbHNlXHJcbi8vICAgICAgIH0pXHJcbi8vICAgICAgIGlmIChyZXMpIHtcclxuLy8gICAgICAgICB0YWJsZU9iamVjdC50YWJsZUxpc3QgPSBnZXQocmVzLmRhdGEgfHwge30sIGNvbmZpZz8ucmVzcG9uc2UubGlzdCBhcyBzdHJpbmcpXHJcbi8vICAgICAgICAgdGFibGVPYmplY3QudG90YWwgPSBnZXQocmVzLmRhdGEgfHwge30sIGNvbmZpZz8ucmVzcG9uc2U/LnRvdGFsIGFzIHN0cmluZykgfHwgMFxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9LFxyXG5cclxuY29uc3QgYWN0aW9uVHlwZSA9IHJlZignJylcclxuXHJcbi8vY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcclxuLy8gY29uc3QgYWN0aW9uID0gYXN5bmMgKHJvdzogR3JvdXBEYXRhLCB0eXBlOiBzdHJpbmcpID0+IHtcclxuLy8gY29uc29sZS5sb2coJ2FjdGlvbi0tdHlwZT09PScsIHR5cGUsIHJvdylcclxuXHJcbi8vIGRpYWxvZ1RpdGxlLnZhbHVlID0gdCh0eXBlID09PSAnZWRpdCcgPyAnZXhhbXBsZURlbW8uZWRpdCcgOiAnZXhhbXBsZURlbW8uZGV0YWlsJylcclxuLy8gYWN0aW9uVHlwZS52YWx1ZSA9IHR5cGVcclxuLy8gdGFibGVPYmplY3QuY3VycmVudFJvdyA9IHJvd1xyXG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldFN0b2Nrc0J5Q2F0ZWdvcnlJZCh7IGlkOiByb3cuaWQgfSlcclxuLy8gICAgIC5jYXRjaCgoKSA9PiB7fSlcclxuLy8gICAgIC5maW5hbGx5KCgpID0+IHtcclxuLy8gICAgICAgbG9hZGluZy52YWx1ZSA9IGZhbHNlXHJcbi8vICAgICB9KVxyXG5cclxuLy8gICBjb25zb2xlLmxvZygncmVzPT09PT0nLCByZXMpXHJcbi8vICAgaWYgKHJlcykge1xyXG4vLyAgICAgbGV0IHN0b2NrQ29kZXMgPSBbXVxyXG4vLyAgICAgZm9yIChsZXQgaXRlbSBvZiByZXMuZGF0YSkge1xyXG4vLyAgICAgICBzdG9ja0NvZGVzLnB1c2goaXRlbS5jb2RlIGFzIG5ldmVyKVxyXG4vLyAgICAgfVxyXG4vLyAgICAgdGFibGVPYmplY3QuY3VycmVudFJvdy5zdG9ja3MgPSBzdG9ja0NvZGVzLmpvaW4oJywnKVxyXG4vLyAgIH1cclxuLy8gICBkaWFsb2dWaXNpYmxlLnZhbHVlID0gdHJ1ZVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBhZGRBY3Rpb24gPSAodHlwZTogc3RyaW5nKSA9PiB7XHJcbi8vICAgZGlhbG9nVGl0bGUudmFsdWUgPSB0KCdleGFtcGxlRGVtby5hZGQnKVxyXG4vLyAgIGFjdGlvblR5cGUudmFsdWUgPSB0eXBlXHJcbi8vICAgdGFibGVPYmplY3QuY3VycmVudFJvdyA9IG51bGxcclxuLy8gICBkaWFsb2dWaXNpYmxlLnZhbHVlID0gdHJ1ZVxyXG4vLyB9XHJcbi8vIGNvbnN0IG9wZW5EZXRhaWwgPSAocm93OiBHcm91cERhdGEpID0+IHtcclxuLy8gICBsZXQgdXJsID0gJy9zdG9jay9TdG9ja0xpc3QnICsgcm93LmlkXHJcbi8vICAgbGV0IHF1ZXJ5UGFyYW0gPSB7XHJcbi8vICAgICBpZDogcm93LmlkLFxyXG4vLyAgICAgdXNlcklkOiByb3cudXNlcl9pZCxcclxuLy8gICAgIC8vIG15VXNlcklkOiB1c2VySWQudmFsdWVcclxuLy8gICAgIC8vIGNvZGU6IHJvdy5jb2RlLnJlcGxhY2UoLyAvZywgJycpXHJcbi8vICAgfVxyXG4vLyAgIGxldCByOiBSb3V0ZVJlY29yZFJhdyA9IHtcclxuLy8gICAgIHBhdGg6IHVybCxcclxuLy8gICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCdAL3ZpZXdzL1N0b2NrL1N0b2NrTGlzdC52dWUnKSxcclxuLy8gICAgIG5hbWU6ICdzdG9ja18nICsgcm93LmlkLFxyXG4vLyAgICAgbWV0YToge1xyXG4vLyAgICAgICB0aXRsZTogcm93Lm5hbWUsXHJcbi8vICAgICAgIGJyZWFkY3J1bWI6IHRydWVcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgcm91dGVyLmFkZFJvdXRlKCdHcm91cCcsIHIpXHJcbi8vICAgcHVzaCh7IHBhdGg6IHVybCwgcXVlcnk6IHF1ZXJ5UGFyYW0gfSlcclxuLy8gfVxyXG5jb25zdCBsb2FkaW5nID0gcmVmKGZhbHNlKVxyXG5cclxuLy8gY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+IHtcclxuLy8gICBjb25zdCB3cml0ZSA9IHVucmVmKHdyaXRlUmVmKVxyXG4vLyAgIGF3YWl0IHdyaXRlPy5lbEZvcm1SZWY/LnZhbGlkYXRlKGFzeW5jIChpc1ZhbGlkKSA9PiB7XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZygnaXNWYWxpZD09PScsIGlzVmFsaWQpXHJcbi8vICAgICBpZiAoaXNWYWxpZCkge1xyXG4vLyAgICAgICBsb2FkaW5nLnZhbHVlID0gdHJ1ZVxyXG4vLyAgICAgICBjb25zdCBkYXRhID0gKGF3YWl0IHdyaXRlPy5nZXRGb3JtRGF0YSgpKSBhcyBHcm91cERhdGFcclxuLy8gICAgICAgLy8gY29uc29sZS5sb2coJ2RhdGE9PT09JywgZGF0YSkgO3JldHVybiBmYWxzZVxyXG4vLyAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzYXZlR3JvdXBBcGkoZGF0YSlcclxuLy8gICAgICAgICAuY2F0Y2goKCkgPT4ge30pXHJcbi8vICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4vLyAgICAgICAgICAgbG9hZGluZy52YWx1ZSA9IGZhbHNlXHJcbi8vICAgICAgICAgfSlcclxuXHJcbi8vICAgICAgIGNvbnNvbGUubG9nKCdyZXM9PT09PScsIHJlcylcclxuLy8gICAgICAgaWYgKHJlcykge1xyXG4vLyAgICAgICAgIGRpYWxvZ1Zpc2libGUudmFsdWUgPSBmYWxzZVxyXG4vLyAgICAgICAgIHRhYmxlT2JqZWN0LmN1cnJlbnRQYWdlID0gMVxyXG4vLyAgICAgICAgIGdldExpc3QoKVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgfSlcclxuLy8gfVxyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8Q29udGVudFdyYXA+XHJcbiAgICA8U2VhcmNoIDpzY2hlbWE9XCJhbGxTY2hlbWFzLnNlYXJjaFNjaGVtYVwiIEBzZWFyY2g9XCJzZXRTZWFyY2hQYXJhbXNcIiBAcmVzZXQ9XCJzZXRTZWFyY2hQYXJhbXNcIiAvPlxyXG5cclxuICAgIDxUYWJsZVxyXG4gICAgICB2LW1vZGVsOnBhZ2VTaXplPVwidGFibGVPYmplY3QucGFnZVNpemVcIlxyXG4gICAgICB2LW1vZGVsOmN1cnJlbnRQYWdlPVwidGFibGVPYmplY3QuY3VycmVudFBhZ2VcIlxyXG4gICAgICA6Y29sdW1ucz1cImFsbFNjaGVtYXMudGFibGVDb2x1bW5zXCJcclxuICAgICAgOmRhdGE9XCJ0YWJsZU9iamVjdC50YWJsZUxpc3RcIlxyXG4gICAgICA6bG9hZGluZz1cInRhYmxlT2JqZWN0LmxvYWRpbmdcIlxyXG4gICAgICA6cGFnaW5hdGlvbj1cIntcclxuICAgICAgICB0b3RhbDogdGFibGVPYmplY3QudG90YWxcclxuICAgICAgfVwiXHJcbiAgICAgIEByZWdpc3Rlcj1cInJlZ2lzdGVyXCJcclxuICAgID5cclxuICAgICAgPCEtLSB0ZW1wbGF0ZSAjYWN0aW9uPVwieyByb3cgfVwiPlxyXG4gICAgICAgIDxFbEJ1dHRvbiA6aWNvbj1cInRhYmxlXCIgdHlwZT1cInN1Y2Nlc3NcIiBAY2xpY2s9XCJvcGVuRGV0YWlsKHJvdylcIiAvPlxyXG5cclxuICAgICAgICA8RWxCdXR0b25cclxuICAgICAgICAgIDpkaXNhYmxlZD1cInVzZXJJZCAhPSByb3cudXNlcl9pZFwiXHJcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICA6aWNvbj1cImVkaXRcIlxyXG4gICAgICAgICAgQGNsaWNrPVwiYWN0aW9uKHJvdywgJ2VkaXQnKVwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEVsQnV0dG9uXHJcbiAgICAgICAgICA6ZGlzYWJsZWQ9XCJ1c2VySWQgIT0gcm93LnVzZXJfaWRcIlxyXG4gICAgICAgICAgdHlwZT1cImRhbmdlclwiXHJcbiAgICAgICAgICA6aWNvbj1cImRlbFwiXHJcbiAgICAgICAgICBAY2xpY2s9XCJkZWxEYXRhKHJvdywgZmFsc2UpXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3RlbXBsYXRlIC0tPlxyXG4gICAgPC9UYWJsZT5cclxuICA8L0NvbnRlbnRXcmFwPlxyXG5cclxuICA8RGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dWaXNpYmxlXCIgOnRpdGxlPVwiZGlhbG9nVGl0bGVcIj5cclxuICAgIDxXcml0ZVxyXG4gICAgICB2LWlmPVwiYWN0aW9uVHlwZSA9PT0gJ2VkaXQnXCJcclxuICAgICAgcmVmPVwid3JpdGVSZWZcIlxyXG4gICAgICA6Zm9ybS1zY2hlbWE9XCJhbGxTY2hlbWFzLmZvcm1TY2hlbWFcIlxyXG4gICAgICA6Y3VycmVudC1yb3c9XCJ0YWJsZU9iamVjdC5jdXJyZW50Um93XCJcclxuICAgIC8+XHJcblxyXG4gICAgPERldGFpbFxyXG4gICAgICB2LWlmPVwiYWN0aW9uVHlwZSA9PT0gJ2RldGFpbCdcIlxyXG4gICAgICA6ZGV0YWlsLXNjaGVtYT1cImFsbFNjaGVtYXMuZGV0YWlsU2NoZW1hXCJcclxuICAgICAgOmN1cnJlbnQtcm93PVwidGFibGVPYmplY3QuY3VycmVudFJvd1wiXHJcbiAgICAvPlxyXG5cclxuICAgIDx0ZW1wbGF0ZSAjZm9vdGVyPlxyXG4gICAgICA8RWxCdXR0b24gdi1pZj1cImFjdGlvblR5cGUgIT09ICdkZXRhaWwnXCIgdHlwZT1cInByaW1hcnlcIiA6bG9hZGluZz1cImxvYWRpbmdcIj5cclxuICAgICAgICB7eyB0KCdleGFtcGxlRGVtby5zYXZlJykgfX1cclxuICAgICAgPC9FbEJ1dHRvbj5cclxuICAgICAgPEVsQnV0dG9uIEBjbGljaz1cImRpYWxvZ1Zpc2libGUgPSBmYWxzZVwiPnt7IHQoJ2RpYWxvZ0RlbW8uY2xvc2UnKSB9fTwvRWxCdXR0b24+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG4gIDwvRGlhbG9nPlxyXG48L3RlbXBsYXRlPlxyXG4iXSwibmFtZXMiOlsicmVxdWVzdCIsInVzZUF4aW9zIiwiZ2V0SW5kdXN0cnlMaXN0QXBpIiwiYXN5bmMiLCJwYXJhbXMiLCJyZXMiLCJnZXQiLCJ1cmwiLCJkYXRhIiwicmVnaXN0ZXIiLCJ0YWJsZU9iamVjdCIsIm1ldGhvZHMiLCJ1c2VUYWJsZSIsImdldExpc3RBcGkiLCJyZXNwb25zZSIsImxpc3QiLCJ0b3RhbCIsImFwcFN0b3JlIiwidXNlQXBwU3RvcmVXaXRoT3V0Iiwid3NDYWNoZSIsInVzZUNhY2hlIiwidXNlckluZm8iLCJnZXRVc2VySW5mbyIsInVzZXJJZCIsInJlZiIsImdldEN1cnJlbnRVc2VyIiwiY2F0Y2giLCJmaW5hbGx5IiwibG9hZGluZyIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImlkIiwic2V0IiwiZ2V0TGlzdCIsInNldFNlYXJjaFBhcmFtcyIsInQiLCJ1c2VJMThuIiwid3JpdGVSZWYiLCJjcnVkU2NoZW1hcyIsInJlYWN0aXZlIiwiZmllbGQiLCJsYWJlbCIsInR5cGUiLCJmb3JtIiwic2hvdyIsImRldGFpbCIsInNlYXJjaCIsImNvbFByb3BzIiwic3BhbiIsImNvbXBvbmVudFByb3BzIiwib25DaGFuZ2UiLCJ2YWwiLCJmb3JtYXR0ZXIiLCJyb3ciLCJfXyIsImNlbGxWYWx1ZSIsImgiLCJFbExpbmsiLCJ1bmRlcmxpbmUiLCJocmVmIiwiY2F0ZTMzX2NvZGUiLCJkaXNhYmxlZCIsImFsbFNjaGVtYXMiLCJ1c2VDcnVkU2NoZW1hcyIsImRpYWxvZ1Zpc2libGUiLCJkaWFsb2dUaXRsZSIsImFjdGlvblR5cGUiXSwibWFwcGluZ3MiOiI2ckRBR0EsTUFBTUEsRUFBVUMsSUFFSEMsRUFBcUJDLE1BQU9DLElBQ2pDLE1BQUFDLFFBQVlMLEVBQVFNLElBQUksQ0FBRUMsSUFBSywyQkFBNEJILE9BQUFBLElBQ2pFLE9BQU9DLEdBQU9BLEVBQUlHLDBDQ2lCcEIsTUFBTUMsU0FBRUEsRUFBQUMsWUFBVUEsRUFBYUMsUUFBQUEsR0FBWUMsRUFBb0IsQ0FDN0RDLFdBQVlYLEVBRVpZLFNBQVUsQ0FDUkMsS0FBTSxPQUNOQyxNQUFPLFdBR0xDLEVBQVdDLEtBQ1hDLFFBQUVBLEdBQVlDLElBQ2RDLEVBQVdGLEVBQVFiLElBQUlXLEVBQVNLLGFBRWhDQyxFQUFTQyxFQUFJLElBTUZy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
