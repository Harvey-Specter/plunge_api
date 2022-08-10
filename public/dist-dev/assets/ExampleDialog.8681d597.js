import{_ as e}from"./ContentWrap.bd505729.js";import{_ as a}from"./Search.245ae384.js";import{_ as t}from"./Dialog.920e100e.js";import{d as o,l,s as i,aF as r,r as s,o as m,c as n,g as d,w as p,a as c,e as u,x as f,t as b,k as j,at as v,G as g}from"./index.701681eb.js";import{E as w}from"./el-button.c81d4f55.js";import{E as h}from"./el-tag.ddbbcdb2.js";import{_ as D}from"./Table.vue_vue_type_script_lang.e2d83e06.js";import{g as x,d as y,s as _}from"./index.2bd2fb0b.js";import{u as k}from"./useTable.ed8be171.js";import S from"./Write.8a1a770c.js";import C from"./Detail.84ddbe9a.js";import{u as P}from"./useCrudSchemas.9467c006.js";import"./el-card.2c75e3e6.js";import"./el-popper.e9e2fc16.js";import"./index2.01250fd4.js";import"./Form.358e2152.js";import"./el-col.33bc6b64.js";import"./typescript2.0e462989.js";import"./el-input.ed535820.js";import"./event2.1741f333.js";import"./index2.bc62f99f.js";import"./tsxHelper.39476c1a.js";import"./index2.411e8ed3.js";import"./scroll2.58f9a7d9.js";import"./debounce.96a7db81.js";import"./validator2.d2a80b6f.js";import"./el-input-number.b4d61595.js";import"./el-switch.8b8da31d.js";import"./el-divider.56b4f6b6.js";import"./InputPassword.2af2bf1d.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.8d38f34f.js";import"./aria2.b5095a02.js";import"./browser2.c56688aa.js";import"./useForm.f9c4db1c.js";import"./el-overlay.bdf8afb7.js";import"./vnode2.31a80e3f.js";import"./use-dialog2.545d2e9f.js";import"./refs2.946bb193.js";import"./useAxios.51602908.js";import"./el-message-box.2a623809.js";import"./useValidator.8da58eac.js";import"./Descriptions.70b93e1a.js";import"./index2.42d1d9cc.js";import"./tree.9e4d3f05.js";const R={class:"mb-10px"},F=o({__name:"ExampleDialog",setup(o){const{register:F,tableObject:z,methods:E}=k({getListApi:x,delListApi:y,response:{list:"list",total:"total"}}),{getList:L,setSearchParams:V}=E;L();const{t:Y}=l(),A=i([{field:"index",label:Y("tableDemo.index"),type:"index",form:{show:!1},detail:{show:!1}},{field:"title",label:Y("tableDemo.title"),search:{show:!0},form:{colProps:{span:24}},detail:{span:24}},{field:"author",label:Y("tableDemo.author")},{field:"display_time",label:Y("tableDemo.displayTime"),form:{component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{field:"importance",label:Y("tableDemo.importance"),formatter:(e,a,t)=>r(h,{type:1===t?"success":2===t?"warning":"danger"},(()=>Y(1===t?"tableDemo.important":2===t?"tableDemo.good":"tableDemo.commonly"))),form:{component:"Select",componentProps:{options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}}},{field:"pageviews",label:Y("tableDemo.pageviews"),form:{component:"InputNumber",value:0}},{field:"content",label:Y("exampleDemo.content"),table:{show:!1},form:{component:"Editor",colProps:{span:24}},detail:{span:24}},{field:"action",width:"260px",label:Y("tableDemo.action"),form:{show:!1},detail:{show:!1}}]),{allSchemas:H}=P(A),T=s(!1),U=s(""),I=()=>{U.value=Y("exampleDemo.add"),z.currentRow=null,T.value=!0},M=s(!1),W=async(e,a)=>{var t;z.currentRow=e;const{delList:o,getSelections:l}=E,i=await l();M.value=!0,await o(a?i.map((e=>e.id)):[null==(t=z.currentRow)?void 0:t.id],a).finally((()=>{M.value=!1}))},G=s(""),N=(e,a)=>{U.value=Y("edit"===a?"exampleDemo.edit":"exampleDemo.detail"),G.value=a,z.currentRow=e,T.value=!0},O=s(),q=s(!1),B=async()=>{var e;const a=c(O);await(null==(e=null==a?void 0:a.elFormRef)?void 0:e.validate((async e=>{if(e){q.value=!0;const e=await(null==a?void 0:a.getFormData());await _(e).catch((()=>{})).finally((()=>{q.value=!1}))&&(T.value=!1,z.currentPage=1,L())}})))};return(o,l)=>(m(),n(g,null,[d(c(e),null,{default:p((()=>[d(c(a),{schema:c(H).searchSchema,onSearch:c(V),onReset:c(V)},null,8,["schema","onSearch","onReset"]),u("div",R,[d(c(w),{type:"primary",onClick:I},{default:p((()=>[f(b(c(Y)("exampleDemo.add")),1)])),_:1}),d(c(w),{loading:M.value,type:"danger",onClick:l[0]||(l[0]=e=>W(null,!0))},{default:p((()=>[f(b(c(Y)("exampleDemo.del")),1)])),_:1},8,["loading"])]),d(c(D),{pageSize:c(z).pageSize,"onUpdate:pageSize":l[1]||(l[1]=e=>c(z).pageSize=e),currentPage:c(z).currentPage,"onUpdate:currentPage":l[2]||(l[2]=e=>c(z).currentPage=e),columns:c(H).tableColumns,data:c(z).tableList,loading:c(z).loading,pagination:{total:c(z).total},onRegister:c(F)},{action:p((({row:e})=>[d(c(w),{type:"primary",onClick:a=>N(e,"edit")},{default:p((()=>[f(b(c(Y)("exampleDemo.edit")),1)])),_:2},1032,["onClick"]),d(c(w),{type:"success",onClick:a=>N(e,"detail")},{default:p((()=>[f(b(c(Y)("exampleDemo.detail")),1)])),_:2},1032,["onClick"]),d(c(w),{type:"danger",onClick:a=>W(e,!1)},{default:p((()=>[f(b(c(Y)("exampleDemo.del")),1)])),_:2},1032,["onClick"])])),_:1},8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),d(c(t),{modelValue:T.value,"onUpdate:modelValue":l[4]||(l[4]=e=>T.value=e),title:U.value},{footer:p((()=>["detail"!==G.value?(m(),j(c(w),{key:0,type:"primary",loading:q.value,onClick:B},{default:p((()=>[f(b(c(Y)("exampleDemo.save")),1)])),_:1},8,["loading"])):v("v-if",!0),d(c(w),{onClick:l[3]||(l[3]=e=>T.value=!1)},{default:p((()=>[f(b(c(Y)("dialogDemo.close")),1)])),_:1})])),default:p((()=>["detail"!==G.value?(m(),j(S,{key:0,ref_key:"writeRef",ref:O,"form-schema":c(H).formSchema,"current-row":c(z).currentRow},null,8,["form-schema","current-row"])):v("v-if",!0),"detail"===G.value?(m(),j(C,{key:1,"detail-schema":c(H).detailSchema,"current-row":c(z).currentRow},null,8,["detail-schema","current-row"])):v("v-if",!0)])),_:1},8,["modelValue","title"])],64))}});export{F as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhhbXBsZURpYWxvZy44NjgxZDU5Ny5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZpZXdzL0V4YW1wbGUvRGlhbG9nL0V4YW1wbGVEaWFsb2cudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBDb250ZW50V3JhcCB9IGZyb20gJ0AvY29tcG9uZW50cy9Db250ZW50V3JhcCdcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gJ0AvY29tcG9uZW50cy9TZWFyY2gnXG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICdAL2NvbXBvbmVudHMvRGlhbG9nJ1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ0AvaG9va3Mvd2ViL3VzZUkxOG4nXG5pbXBvcnQgeyBFbEJ1dHRvbiwgRWxUYWcgfSBmcm9tICdlbGVtZW50LXBsdXMnXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJ0AvY29tcG9uZW50cy9UYWJsZSdcbmltcG9ydCB7IGdldFRhYmxlTGlzdEFwaSwgc2F2ZVRhYmxlQXBpLCBkZWxUYWJsZUxpc3RBcGkgfSBmcm9tICdAL2FwaS90YWJsZSdcbmltcG9ydCB7IHVzZVRhYmxlIH0gZnJvbSAnQC9ob29rcy93ZWIvdXNlVGFibGUnXG5pbXBvcnQgeyBUYWJsZURhdGEgfSBmcm9tICdAL2FwaS90YWJsZS90eXBlcydcbmltcG9ydCB7IGgsIHJlZiwgdW5yZWYsIHJlYWN0aXZlIH0gZnJvbSAndnVlJ1xuaW1wb3J0IFdyaXRlIGZyb20gJy4vY29tcG9uZW50cy9Xcml0ZS52dWUnXG5pbXBvcnQgRGV0YWlsIGZyb20gJy4vY29tcG9uZW50cy9EZXRhaWwudnVlJ1xuaW1wb3J0IHsgQ3J1ZFNjaGVtYSwgdXNlQ3J1ZFNjaGVtYXMgfSBmcm9tICdAL2hvb2tzL3dlYi91c2VDcnVkU2NoZW1hcydcblxuY29uc3QgeyByZWdpc3RlciwgdGFibGVPYmplY3QsIG1ldGhvZHMgfSA9IHVzZVRhYmxlPFRhYmxlRGF0YT4oe1xuICBnZXRMaXN0QXBpOiBnZXRUYWJsZUxpc3RBcGksXG4gIGRlbExpc3RBcGk6IGRlbFRhYmxlTGlzdEFwaSxcbiAgcmVzcG9uc2U6IHtcbiAgICBsaXN0OiAnbGlzdCcsXG4gICAgdG90YWw6ICd0b3RhbCdcbiAgfVxufSlcblxuY29uc3QgeyBnZXRMaXN0LCBzZXRTZWFyY2hQYXJhbXMgfSA9IG1ldGhvZHNcblxuZ2V0TGlzdCgpXG5cbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpXG5cbmNvbnN0IGNydWRTY2hlbWFzID0gcmVhY3RpdmU8Q3J1ZFNjaGVtYVtdPihbXG4gIHtcbiAgICBmaWVsZDogJ2luZGV4JyxcbiAgICBsYWJlbDogdCgndGFibGVEZW1vLmluZGV4JyksXG4gICAgdHlwZTogJ2luZGV4JyxcbiAgICBmb3JtOiB7XG4gICAgICBzaG93OiBmYWxzZVxuICAgIH0sXG4gICAgZGV0YWlsOiB7XG4gICAgICBzaG93OiBmYWxzZVxuICAgIH1cbiAgfSxcbiAge1xuICAgIGZpZWxkOiAndGl0bGUnLFxuICAgIGxhYmVsOiB0KCd0YWJsZURlbW8udGl0bGUnKSxcbiAgICBzZWFyY2g6IHtcbiAgICAgIHNob3c6IHRydWVcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgIGNvbFByb3BzOiB7XG4gICAgICAgIHNwYW46IDI0XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXRhaWw6IHtcbiAgICAgIHNwYW46IDI0XG4gICAgfVxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdhdXRob3InLFxuICAgIGxhYmVsOiB0KCd0YWJsZURlbW8uYXV0aG9yJylcbiAgfSxcbiAge1xuICAgIGZpZWxkOiAnZGlzcGxheV90aW1lJyxcbiAgICBsYWJlbDogdCgndGFibGVEZW1vLmRpc3BsYXlUaW1lJyksXG4gICAgZm9ybToge1xuICAgICAgY29tcG9uZW50OiAnRGF0ZVBpY2tlcicsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICB0eXBlOiAnZGF0ZXRpbWUnLFxuICAgICAgICB2YWx1ZUZvcm1hdDogJ1lZWVktTU0tREQgSEg6bW06c3MnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdpbXBvcnRhbmNlJyxcbiAgICBsYWJlbDogdCgndGFibGVEZW1vLmltcG9ydGFuY2UnKSxcbiAgICBmb3JtYXR0ZXI6IChfOiBSZWNvcmRhYmxlLCBfXzogVGFibGVDb2x1bW4sIGNlbGxWYWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gaChcbiAgICAgICAgRWxUYWcsXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBjZWxsVmFsdWUgPT09IDEgPyAnc3VjY2VzcycgOiBjZWxsVmFsdWUgPT09IDIgPyAnd2FybmluZycgOiAnZGFuZ2VyJ1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PlxuICAgICAgICAgIGNlbGxWYWx1ZSA9PT0gMVxuICAgICAgICAgICAgPyB0KCd0YWJsZURlbW8uaW1wb3J0YW50JylcbiAgICAgICAgICAgIDogY2VsbFZhbHVlID09PSAyXG4gICAgICAgICAgICA/IHQoJ3RhYmxlRGVtby5nb29kJylcbiAgICAgICAgICAgIDogdCgndGFibGVEZW1vLmNvbW1vbmx5JylcbiAgICAgIClcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgIGNvbXBvbmVudDogJ1NlbGVjdCcsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICfph43opoEnLFxuICAgICAgICAgICAgdmFsdWU6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAn6Imv5aW9JyxcbiAgICAgICAgICAgIHZhbHVlOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ+S4gOiIrCcsXG4gICAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAge1xuICAgIGZpZWxkOiAncGFnZXZpZXdzJyxcbiAgICBsYWJlbDogdCgndGFibGVEZW1vLnBhZ2V2aWV3cycpLFxuICAgIGZvcm06IHtcbiAgICAgIGNvbXBvbmVudDogJ0lucHV0TnVtYmVyJyxcbiAgICAgIHZhbHVlOiAwXG4gICAgfVxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdjb250ZW50JyxcbiAgICBsYWJlbDogdCgnZXhhbXBsZURlbW8uY29udGVudCcpLFxuICAgIHRhYmxlOiB7XG4gICAgICBzaG93OiBmYWxzZVxuICAgIH0sXG4gICAgZm9ybToge1xuICAgICAgY29tcG9uZW50OiAnRWRpdG9yJyxcbiAgICAgIGNvbFByb3BzOiB7XG4gICAgICAgIHNwYW46IDI0XG4gICAgICB9XG4gICAgfSxcbiAgICBkZXRhaWw6IHtcbiAgICAgIHNwYW46IDI0XG4gICAgfVxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdhY3Rpb24nLFxuICAgIHdpZHRoOiAnMjYwcHgnLFxuICAgIGxhYmVsOiB0KCd0YWJsZURlbW8uYWN0aW9uJyksXG4gICAgZm9ybToge1xuICAgICAgc2hvdzogZmFsc2VcbiAgICB9LFxuICAgIGRldGFpbDoge1xuICAgICAgc2hvdzogZmFsc2VcbiAgICB9XG4gIH1cbl0pXG5cbmNvbnN0IHsgYWxsU2NoZW1hcyB9ID0gdXNlQ3J1ZFNjaGVtYXMoY3J1ZFNjaGVtYXMpXG5cbmNvbnN0IGRpYWxvZ1Zpc2libGUgPSByZWYoZmFsc2UpXG5cbmNvbnN0IGRpYWxvZ1RpdGxlID0gcmVmKCcnKVxuXG5jb25zdCBBZGRBY3Rpb24gPSAoKSA9PiB7XG4gIGRpYWxvZ1RpdGxlLnZhbHVlID0gdCgnZXhhbXBsZURlbW8uYWRkJylcbiAgdGFibGVPYmplY3QuY3VycmVudFJvdyA9IG51bGxcbiAgZGlhbG9nVmlzaWJsZS52YWx1ZSA9IHRydWVcbn1cblxuY29uc3QgZGVsTG9hZGluZyA9IHJlZihmYWxzZSlcblxuY29uc3QgZGVsRGF0YSA9IGFzeW5jIChyb3c6IFRhYmxlRGF0YSB8IG51bGwsIG11bHRpcGxlOiBib29sZWFuKSA9PiB7XG4gIHRhYmxlT2JqZWN0LmN1cnJlbnRSb3cgPSByb3dcbiAgY29uc3QgeyBkZWxMaXN0LCBnZXRTZWxlY3Rpb25zIH0gPSBtZXRob2RzXG4gIGNvbnN0IHNlbGVjdGlvbnMgPSBhd2FpdCBnZXRTZWxlY3Rpb25zKClcbiAgZGVsTG9hZGluZy52YWx1ZSA9IHRydWVcbiAgYXdhaXQgZGVsTGlzdChcbiAgICBtdWx0aXBsZSA/IHNlbGVjdGlvbnMubWFwKCh2KSA9PiB2LmlkKSA6IFt0YWJsZU9iamVjdC5jdXJyZW50Um93Py5pZCBhcyBzdHJpbmddLFxuICAgIG11bHRpcGxlXG4gICkuZmluYWxseSgoKSA9PiB7XG4gICAgZGVsTG9hZGluZy52YWx1ZSA9IGZhbHNlXG4gIH0pXG59XG5cbmNvbnN0IGFjdGlvblR5cGUgPSByZWYoJycpXG5cbmNvbnN0IGFjdGlvbiA9IChyb3c6IFRhYmxlRGF0YSwgdHlwZTogc3RyaW5nKSA9PiB7XG4gIGRpYWxvZ1RpdGxlLnZhbHVlID0gdCh0eXBlID09PSAnZWRpdCcgPyAnZXhhbXBsZURlbW8uZWRpdCcgOiAnZXhhbXBsZURlbW8uZGV0YWlsJylcbiAgYWN0aW9uVHlwZS52YWx1ZSA9IHR5cGVcbiAgdGFibGVPYmplY3QuY3VycmVudFJvdyA9IHJvd1xuICBkaWFsb2dWaXNpYmxlLnZhbHVlID0gdHJ1ZVxufVxuXG5jb25zdCB3cml0ZVJlZiA9IHJlZjxDb21wb25lbnRSZWY8dHlwZW9mIFdyaXRlPj4oKVxuXG5jb25zdCBsb2FkaW5nID0gcmVmKGZhbHNlKVxuXG5jb25zdCBzYXZlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB3cml0ZSA9IHVucmVmKHdyaXRlUmVmKVxuICBhd2FpdCB3cml0ZT8uZWxGb3JtUmVmPy52YWxpZGF0ZShhc3luYyAoaXNWYWxpZCkgPT4ge1xuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICBsb2FkaW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgY29uc3QgZGF0YSA9IChhd2FpdCB3cml0ZT8uZ2V0Rm9ybURhdGEoKSkgYXMgVGFibGVEYXRhXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBzYXZlVGFibGVBcGkoZGF0YSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHt9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgbG9hZGluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICBpZiAocmVzKSB7XG4gICAgICAgIGRpYWxvZ1Zpc2libGUudmFsdWUgPSBmYWxzZVxuICAgICAgICB0YWJsZU9iamVjdC5jdXJyZW50UGFnZSA9IDFcbiAgICAgICAgZ2V0TGlzdCgpXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPENvbnRlbnRXcmFwPlxuICAgIDxTZWFyY2ggOnNjaGVtYT1cImFsbFNjaGVtYXMuc2VhcmNoU2NoZW1hXCIgQHNlYXJjaD1cInNldFNlYXJjaFBhcmFtc1wiIEByZXNldD1cInNldFNlYXJjaFBhcmFtc1wiIC8+XG5cbiAgICA8ZGl2IGNsYXNzPVwibWItMTBweFwiPlxuICAgICAgPEVsQnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwiQWRkQWN0aW9uXCI+e3sgdCgnZXhhbXBsZURlbW8uYWRkJykgfX08L0VsQnV0dG9uPlxuICAgICAgPEVsQnV0dG9uIDpsb2FkaW5nPVwiZGVsTG9hZGluZ1wiIHR5cGU9XCJkYW5nZXJcIiBAY2xpY2s9XCJkZWxEYXRhKG51bGwsIHRydWUpXCI+XG4gICAgICAgIHt7IHQoJ2V4YW1wbGVEZW1vLmRlbCcpIH19XG4gICAgICA8L0VsQnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPFRhYmxlXG4gICAgICB2LW1vZGVsOnBhZ2VTaXplPVwidGFibGVPYmplY3QucGFnZVNpemVcIlxuICAgICAgdi1tb2RlbDpjdXJyZW50UGFnZT1cInRhYmxlT2JqZWN0LmN1cnJlbnRQYWdlXCJcbiAgICAgIDpjb2x1bW5zPVwiYWxsU2NoZW1hcy50YWJsZUNvbHVtbnNcIlxuICAgICAgOmRhdGE9XCJ0YWJsZU9iamVjdC50YWJsZUxpc3RcIlxuICAgICAgOmxvYWRpbmc9XCJ0YWJsZU9iamVjdC5sb2FkaW5nXCJcbiAgICAgIDpwYWdpbmF0aW9uPVwie1xuICAgICAgICB0b3RhbDogdGFibGVPYmplY3QudG90YWxcbiAgICAgIH1cIlxuICAgICAgQHJlZ2lzdGVyPVwicmVnaXN0ZXJcIlxuICAgID5cbiAgICAgIDx0ZW1wbGF0ZSAjYWN0aW9uPVwieyByb3cgfVwiPlxuICAgICAgICA8RWxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJhY3Rpb24ocm93LCAnZWRpdCcpXCI+XG4gICAgICAgICAge3sgdCgnZXhhbXBsZURlbW8uZWRpdCcpIH19XG4gICAgICAgIDwvRWxCdXR0b24+XG4gICAgICAgIDxFbEJ1dHRvbiB0eXBlPVwic3VjY2Vzc1wiIEBjbGljaz1cImFjdGlvbihyb3csICdkZXRhaWwnKVwiPlxuICAgICAgICAgIHt7IHQoJ2V4YW1wbGVEZW1vLmRldGFpbCcpIH19XG4gICAgICAgIDwvRWxCdXR0b24+XG4gICAgICAgIDxFbEJ1dHRvbiB0eXBlPVwiZGFuZ2VyXCIgQGNsaWNrPVwiZGVsRGF0YShyb3csIGZhbHNlKVwiPlxuICAgICAgICAgIHt7IHQoJ2V4YW1wbGVEZW1vLmRlbCcpIH19XG4gICAgICAgIDwvRWxCdXR0b24+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvVGFibGU+XG4gIDwvQ29udGVudFdyYXA+XG5cbiAgPERpYWxvZyB2LW1vZGVsPVwiZGlhbG9nVmlzaWJsZVwiIDp0aXRsZT1cImRpYWxvZ1RpdGxlXCI+XG4gICAgPFdyaXRlXG4gICAgICB2LWlmPVwiYWN0aW9uVHlwZSAhPT0gJ2RldGFpbCdcIlxuICAgICAgcmVmPVwid3JpdGVSZWZcIlxuICAgICAgOmZvcm0tc2NoZW1hPVwiYWxsU2NoZW1hcy5mb3JtU2NoZW1hXCJcbiAgICAgIDpjdXJyZW50LXJvdz1cInRhYmxlT2JqZWN0LmN1cnJlbnRSb3dcIlxuICAgIC8+XG5cbiAgICA8RGV0YWlsXG4gICAgICB2LWlmPVwiYWN0aW9uVHlwZSA9PT0gJ2RldGFpbCdcIlxuICAgICAgOmRldGFpbC1zY2hlbWE9XCJhbGxTY2hlbWFzLmRldGFpbFNjaGVtYVwiXG4gICAgICA6Y3VycmVudC1yb3c9XCJ0YWJsZU9iamVjdC5jdXJyZW50Um93XCJcbiAgICAvPlxuXG4gICAgPHRlbXBsYXRlICNmb290ZXI+XG4gICAgICA8RWxCdXR0b24gdi1pZj1cImFjdGlvblR5cGUgIT09ICdkZXRhaWwnXCIgdHlwZT1cInByaW1hcnlcIiA6bG9hZGluZz1cImxvYWRpbmdcIiBAY2xpY2s9XCJzYXZlXCI+XG4gICAgICAgIHt7IHQoJ2V4YW1wbGVEZW1vLnNhdmUnKSB9fVxuICAgICAgPC9FbEJ1dHRvbj5cbiAgICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJkaWFsb2dWaXNpYmxlID0gZmFsc2VcIj57eyB0KCdkaWFsb2dEZW1vLmNsb3NlJykgfX08L0VsQnV0dG9uPlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvRGlhbG9nPlxuPC90ZW1wbGF0ZT5cbiJdLCJuYW1lcyI6WyJyZWdpc3RlciIsInRhYmxlT2JqZWN0IiwibWV0aG9kcyIsInVzZVRhYmxlIiwiZ2V0TGlzdEFwaSIsImdldFRhYmxlTGlzdEFwaSIsImRlbExpc3RBcGkiLCJkZWxUYWJsZUxpc3RBcGkiLCJyZXNwb25zZSIsImxpc3QiLCJ0b3RhbCIsImdldExpc3QiLCJzZXRTZWFyY2hQYXJhbXMiLCJ0IiwidXNlSTE4biIsImNydWRTY2hlbWFzIiwicmVhY3RpdmUiLCJmaWVsZCIsImxhYmVsIiwidHlwZSIsImZvcm0iLCJzaG93IiwiZGV0YWlsIiwic2VhcmNoIiwiY29sUHJvcHMiLCJzcGFuIiwiY29tcG9uZW50IiwiY29tcG9uZW50UHJvcHMiLCJ2YWx1ZUZvcm1hdCIsImZvcm1hdHRlciIsIl8iLCJfXyIsImNlbGxWYWx1ZSIsImgiLCJFbFRhZyIsIm9wdGlvbnMiLCJ2YWx1ZSIsInRhYmxlIiwid2lkdGgiLCJhbGxTY2hlbWFzIiwidXNlQ3J1ZFNjaGVtYXMiLCJkaWFsb2dWaXNpYmxlIiwicmVmIiwiZGlhbG9nVGl0bGUiLCJBZGRBY3Rpb24iLCJjdXJyZW50Um93IiwiZGVsTG9hZGluZyIsImRlbERhdGEiLCJhc3luYyIsInJvdyIsIm11bHRpcGxlIiwiZGVsTGlzdCIsImdldFNlbGVjdGlvbnMiLCJzZWxlY3Rpb25zIiwibWFwIiwidiIsImlkIiwiX2EiLCJmaW5hbGx5IiwiYWN0aW9uVHlwZSIsImFjdGlvbiIsIndyaXRlUmVmIiwibG9hZGluZyIsInNhdmUiLCJ3cml0ZSIsInVucmVmIiwiZWxGb3JtUmVmIiwidmFsaWRhdGUiLCJpc1ZhbGlkIiwiZGF0YSIsImdldEZvcm1EYXRhIiwic2F2ZVRhYmxlQXBpIiwiY2F0Y2giLCJjdXJyZW50UGFnZSJdLCJtYXBwaW5ncyI6Im10REFlQSxNQUFNQSxTQUFFQSxFQUFBQyxZQUFVQSxFQUFhQyxRQUFBQSxHQUFZQyxFQUFvQixDQUM3REMsV0FBWUMsRUFDWkMsV0FBWUMsRUFDWkMsU0FBVSxDQUNSQyxLQUFNLE9BQ05DLE1BQU8sWUFJTEMsUUFBRUEsa0JBQVNDLEdBQW9CVixNQUkvQixNQUFBVyxFQUFFQSxHQUFNQyxJQUVSQyxFQUFjQyxFQUF1QixDQUN6QyxDQUNFQyxNQUFPLFFBQ1BDLE1BQU9MLEVBQUUsbUJBQ1RNLEtBQU0sUUFDTkMsS0FBTSxDQUNKQyxNQUFNLEdBRVJDLE9BQVEsQ0FDTkQsTUFBTSxJQUdWLENBQ0VKLE1BQU8sUUFDUEMsTUFBT0wsRUFBRSxtQkFDVFUsT0FBUSxDQUNORixNQUFNLEdBRVJELEtBQU0sQ0FDSkksU0FBVSxDQUNSQyxLQUFNLEtBR1ZILE9BQVEsQ0FDTkcsS0FBTSxLQUdWLENBQ0VSLE1BQU8sU0FDUEMsTUFBT0wsRUFBRSxxQkFFWCxDQUNFSSxNQUFPLGVBQ1BDLE1BQU9MLEVBQUUseUJBQ1RPLEtBQU0sQ0FDSk0sVUFBVyxhQUNYQyxlQUFnQixDQUNkUixLQUFNLFdBQ05TLFlBQWEseUJBSW5CLENBQ0VYLE1BQU8sYUFDUEMsTUFBT0wsRUFBRSx3QkFDVGdCLFVBQVcsQ0FBQ0MsRUFBZUMsRUFBaUJDLElBQ25DQyxFQUNMQyxFQUNBLENBQ0VmLEtBQW9CLElBQWRhLEVBQWtCLFVBQTBCLElBQWRBLEVBQWtCLFVBQVksV0FFcEUsSUFFTW5CLEVBRFUsSUFBZG1CLEVBQ00sc0JBQ1ksSUFBZEEsRUFDRSxpQkFDQSx3QkFHWlosS0FBTSxDQUNKTSxVQUFXLFNBQ1hDLGVBQWdCLENBQ2RRLFFBQVMsQ0FDUCxDQUNFakIsTUFBTyxLQUNQa0IsTUFBTyxHQUVULENBQ0VsQixNQUFPLEtBQ1BrQixNQUFPLEdBRVQsQ0FDRWxCLE1BQU8sS0FDUGtCLE1BQU8sT0FNakIsQ0FDRW5CLE1BQU8sWUFDUEMsTUFBT0wsRUFBRSx1QkFDVE8sS0FBTSxDQUNKTSxVQUFXLGNBQ1hVLE1BQU8sSUFHWCxDQUNFbkIsTUFBTyxVQUNQQyxNQUFPTCxFQUFFLHVCQUNUd0IsTUFBTyxDQUNMaEIsTUFBTSxHQUVSRCxLQUFNLENBQ0pNLFVBQVcsU0FDWEYsU0FBVSxDQUNSQyxLQUFNLEtBR1ZILE9BQVEsQ0FDTkcsS0FBTSxLQUdWLENBQ0VSLE1BQU8sU0FDUHFCLE1BQU8sUUFDUHBCLE1BQU9MLEVBQUUsb0JBQ1RPLEtBQU0sQ0FDSkMsTUFBTSxHQUVSQyxPQUFRLENBQ05ELE1BQU0sT0FLTmtCLFdBQUVBLEdBQWVDLEVBQWV6QixHQUVoQzBCLEVBQWdCQyxHQUFJLEdBRXBCQyxFQUFjRCxFQUFJLElBRWxCRSxFQUFZLEtBQ0pELEVBQUFQLE1BQVF2QixFQUFFLG1CQUN0QlosRUFBWTRDLFdBQWEsS0FDekJKLEVBQWNMLE9BQVEsR0FHbEJVLEVBQWFKLEdBQUksR0FFakJLLEVBQVVDLE1BQU9DLEVBQXVCQyxXQUM1Q2pELEVBQVk0QyxXQUFhSSxFQUNuQixNQUFBRSxRQUFFQSxnQkFBU0MsR0FBa0JsRCxFQUM3Qm1ELFFBQW1CRCxJQUN6Qk4sRUFBV1YsT0FBUSxRQUNiZSxFQUNKRCxFQUFXRyxFQUFXQyxLQUFLQyxHQUFNQSxFQUFFQyxLQUFNLENBQUMsT0FBQUMsRUFBQXhELEVBQVk0QyxpQkFBWSxFQUFBWSxFQUFBRCxJQUNsRU4sR0FDQVEsU0FBUSxLQUNSWixFQUFXVixPQUFRLE1BSWpCdUIsRUFBYWpCLEVBQUksSUFFakJrQixFQUFTLENBQUNYLEVBQWdCOUIsS0FDOUJ3QixFQUFZUCxNQUFRdkIsRUFBVyxTQUFUTSxFQUFrQixtQkFBcUIsc0JBQzdEd0MsRUFBV3ZCLE1BQVFqQixFQUNuQmxCLEVBQVk0QyxXQUFhSSxFQUN6QlIsRUFBY0wsT0FBUSxHQUdsQnlCLEVBQVduQixJQUVYb0IsRUFBVXBCLEdBQUksR0FFZHFCLEVBQU9mLGdCQUNMLE1BQUFnQixFQUFRQyxFQUFNSixTQUNkLE9BQU9KLEVBQUEsTUFBQU8sT0FBQSxFQUFBQSxFQUFBRSxnQkFBVyxFQUFBVCxFQUFBVSxVQUFTbkIsTUFBT29CLElBQ3RDLEdBQUlBLEVBQVMsQ0FDWE4sRUFBUTFCLE9BQVEsRUFDVixNQUFBaUMsUUFBcUIsTUFBQUwsT0FBQSxFQUFBQSxFQUFBTSxxQkFDVEMsRUFBYUYsR0FDNUJHLE9BQU0sU0FDTmQsU0FBUSxLQUNQSSxFQUFRMUIsT0FBUSxPQUdsQkssRUFBY0wsT0FBUSxFQUN0Qm5DLEVBQVl3RSxZQUFjIn0=