import{_ as e}from"./ContentWrap.bd505729.js";import{d as a,l as s,aF as o,r,o as t,k as i,w as l,g as m,a as d,x as p,t as n}from"./index.701681eb.js";import{_ as u}from"./Table.vue_vue_type_script_lang.e2d83e06.js";import{a as c}from"./index.66dddb7d.js";import{E as f}from"./el-button.c81d4f55.js";import"./el-card.2c75e3e6.js";import"./el-popper.e9e2fc16.js";import"./index2.01250fd4.js";import"./tsxHelper.39476c1a.js";import"./index2.bc62f99f.js";import"./event2.1741f333.js";import"./el-input.ed535820.js";import"./typescript2.0e462989.js";import"./el-tag.ddbbcdb2.js";import"./index2.411e8ed3.js";import"./scroll2.58f9a7d9.js";import"./debounce.96a7db81.js";import"./validator2.d2a80b6f.js";import"./useAxios.51602908.js";const b=a({__name:"Role",setup(a){const{t:b}=s(),j=[{field:"index",label:b("userDemo.index"),type:"index"},{field:"username",label:b("userDemo.username")},{field:"password",label:b("userDemo.password")},{field:"role",label:b("userDemo.role")},{field:"remark",label:b("userDemo.remark"),formatter:e=>o("span","admin"===e.username?b("userDemo.remarkMessage1"):b("userDemo.remarkMessage2"))},{field:"action",label:b("userDemo.action")}],g=r(!0);let x=r([]);(async e=>{const a=await c({params:e||{pageIndex:1,pageSize:10}}).catch((()=>{})).finally((()=>{g.value=!1}));a&&(x.value=a.data.list)})();return(a,s)=>(t(),i(d(e),{title:d(b)("userDemo.title"),message:d(b)("userDemo.message")},{default:l((()=>[m(d(u),{columns:j,data:d(x),loading:g.value,selection:!1},{action:l((e=>[m(d(f),{type:"primary",onClick:a=>(e=>{console.log(e)})(e)},{default:l((()=>[p(n(d(b)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),_:1},8,["data","loading"])])),_:1},8,["title","message"]))}});export{b as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sZS5kODJjM2JhNi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZpZXdzL0F1dGhvcml6YXRpb24vUm9sZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IENvbnRlbnRXcmFwIH0gZnJvbSAnQC9jb21wb25lbnRzL0NvbnRlbnRXcmFwJ1xuaW1wb3J0IHsgdXNlSTE4biB9IGZyb20gJ0AvaG9va3Mvd2ViL3VzZUkxOG4nXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJ0AvY29tcG9uZW50cy9UYWJsZSdcbmltcG9ydCB7IGdldFVzZXJMaXN0QXBpIH0gZnJvbSAnQC9hcGkvbG9naW4nXG5pbXBvcnQgeyBVc2VyVHlwZSB9IGZyb20gJ0AvYXBpL2xvZ2luL3R5cGVzJ1xuaW1wb3J0IHsgcmVmLCBoIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgRWxCdXR0b24gfSBmcm9tICdlbGVtZW50LXBsdXMnXG5cbmludGVyZmFjZSBQYXJhbXMge1xuICBwYWdlSW5kZXg/OiBudW1iZXJcbiAgcGFnZVNpemU/OiBudW1iZXJcbn1cblxuY29uc3QgeyB0IH0gPSB1c2VJMThuKClcblxuY29uc3QgY29sdW1uczogVGFibGVDb2x1bW5bXSA9IFtcbiAge1xuICAgIGZpZWxkOiAnaW5kZXgnLFxuICAgIGxhYmVsOiB0KCd1c2VyRGVtby5pbmRleCcpLFxuICAgIHR5cGU6ICdpbmRleCdcbiAgfSxcbiAge1xuICAgIGZpZWxkOiAndXNlcm5hbWUnLFxuICAgIGxhYmVsOiB0KCd1c2VyRGVtby51c2VybmFtZScpXG4gIH0sXG4gIHtcbiAgICBmaWVsZDogJ3Bhc3N3b3JkJyxcbiAgICBsYWJlbDogdCgndXNlckRlbW8ucGFzc3dvcmQnKVxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdyb2xlJyxcbiAgICBsYWJlbDogdCgndXNlckRlbW8ucm9sZScpXG4gIH0sXG4gIHtcbiAgICBmaWVsZDogJ3JlbWFyaycsXG4gICAgbGFiZWw6IHQoJ3VzZXJEZW1vLnJlbWFyaycpLFxuICAgIGZvcm1hdHRlcjogKHJvdzogVXNlclR5cGUpID0+IHtcbiAgICAgIHJldHVybiBoKFxuICAgICAgICAnc3BhbicsXG4gICAgICAgIHJvdy51c2VybmFtZSA9PT0gJ2FkbWluJyA/IHQoJ3VzZXJEZW1vLnJlbWFya01lc3NhZ2UxJykgOiB0KCd1c2VyRGVtby5yZW1hcmtNZXNzYWdlMicpXG4gICAgICApXG4gICAgfVxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdhY3Rpb24nLFxuICAgIGxhYmVsOiB0KCd1c2VyRGVtby5hY3Rpb24nKVxuICB9XG5dXG5cbmNvbnN0IGxvYWRpbmcgPSByZWYodHJ1ZSlcblxubGV0IHRhYmxlRGF0YUxpc3QgPSByZWY8VXNlclR5cGVbXT4oW10pXG5cbmNvbnN0IGdldFRhYmxlTGlzdCA9IGFzeW5jIChwYXJhbXM/OiBQYXJhbXMpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZ2V0VXNlckxpc3RBcGkoe1xuICAgIHBhcmFtczogcGFyYW1zIHx8IHtcbiAgICAgIHBhZ2VJbmRleDogMSxcbiAgICAgIHBhZ2VTaXplOiAxMFxuICAgIH1cbiAgfSlcbiAgICAuY2F0Y2goKCkgPT4ge30pXG4gICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgbG9hZGluZy52YWx1ZSA9IGZhbHNlXG4gICAgfSlcbiAgaWYgKHJlcykge1xuICAgIHRhYmxlRGF0YUxpc3QudmFsdWUgPSByZXMuZGF0YS5saXN0XG4gIH1cbn1cblxuZ2V0VGFibGVMaXN0KClcblxuY29uc3QgYWNpdG9uRm4gPSAoZGF0YTogVGFibGVTbG90RGVmYXVsdCkgPT4ge1xuICBjb25zb2xlLmxvZyhkYXRhKVxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPENvbnRlbnRXcmFwIDp0aXRsZT1cInQoJ3VzZXJEZW1vLnRpdGxlJylcIiA6bWVzc2FnZT1cInQoJ3VzZXJEZW1vLm1lc3NhZ2UnKVwiPlxuICAgIDxUYWJsZSA6Y29sdW1ucz1cImNvbHVtbnNcIiA6ZGF0YT1cInRhYmxlRGF0YUxpc3RcIiA6bG9hZGluZz1cImxvYWRpbmdcIiA6c2VsZWN0aW9uPVwiZmFsc2VcIj5cbiAgICAgIDx0ZW1wbGF0ZSAjYWN0aW9uPVwiZGF0YVwiPlxuICAgICAgICA8RWxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBAY2xpY2s9XCJhY2l0b25GbihkYXRhIGFzIFRhYmxlU2xvdERlZmF1bHQpXCI+XG4gICAgICAgICAge3sgdCgndGFibGVEZW1vLmFjdGlvbicpIH19XG4gICAgICAgIDwvRWxCdXR0b24+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvVGFibGU+XG4gIDwvQ29udGVudFdyYXA+XG48L3RlbXBsYXRlPlxuIl0sIm5hbWVzIjpbInQiLCJ1c2VJMThuIiwiY29sdW1ucyIsImZpZWxkIiwibGFiZWwiLCJ0eXBlIiwiZm9ybWF0dGVyIiwicm93IiwiaCIsInVzZXJuYW1lIiwibG9hZGluZyIsInJlZiIsInRhYmxlRGF0YUxpc3QiLCJhc3luYyIsInBhcmFtcyIsInJlcyIsImdldFVzZXJMaXN0QXBpIiwicGFnZUluZGV4IiwicGFnZVNpemUiLCJjYXRjaCIsImZpbmFsbHkiLCJ2YWx1ZSIsImRhdGEiLCJsaXN0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjR2QkFjTSxNQUFBQSxFQUFFQSxHQUFNQyxJQUVSQyxFQUF5QixDQUM3QixDQUNFQyxNQUFPLFFBQ1BDLE1BQU9KLEVBQUUsa0JBQ1RLLEtBQU0sU0FFUixDQUNFRixNQUFPLFdBQ1BDLE1BQU9KLEVBQUUsc0JBRVgsQ0FDRUcsTUFBTyxXQUNQQyxNQUFPSixFQUFFLHNCQUVYLENBQ0VHLE1BQU8sT0FDUEMsTUFBT0osRUFBRSxrQkFFWCxDQUNFRyxNQUFPLFNBQ1BDLE1BQU9KLEVBQUUsbUJBQ1RNLFVBQVlDLEdBQ0hDLEVBQ0wsT0FDaUIsVUFBakJELEVBQUlFLFNBQXVCVCxFQUFFLDJCQUE2QkEsRUFBRSw2QkFJbEUsQ0FDRUcsTUFBTyxTQUNQQyxNQUFPSixFQUFFLHFCQUlQVSxFQUFVQyxHQUFJLEdBRWhCLElBQUFDLEVBQWdCRCxFQUFnQixJQUVmRSxPQUFPQyxJQUNwQixNQUFBQyxRQUFZQyxFQUFlLENBQy9CRixPQUFRQSxHQUFVLENBQ2hCRyxVQUFXLEVBQ1hDLFNBQVUsTUFHWEMsT0FBTSxTQUNOQyxTQUFRLEtBQ1BWLEVBQVFXLE9BQVEsS0FFaEJOLElBQ1lILEVBQUFTLE1BQVFOLEVBQUlPLEtBQUtDLCtOQU1sQixDQUFDRCxJQUNoQkUsUUFBUUMsSUFBSUgifQ==