import{F as e}from"./Form.9f3ad28e.js";import{d as o,k as s,s as r,r as a,o as l,h as t,w as i,e as d,t as p,a as n,g as c,x as m}from"./index.f2e05143.js";import{u as g}from"./useForm.2045d6ea.js";import{E as u}from"./el-button.c85984df.js";import{E as f}from"./el-input.2911c078.js";import{u as j}from"./useValidator.61d7760c.js";import{r as h}from"./index.9c9621c0.js";import"./el-col.ae597e62.js";import"./typescript2.0e462989.js";import"./el-popper.7090df9f.js";import"./index2.bac0fa94.js";import"./el-tag.1d3a3f94.js";import"./tsxHelper.2e29a15d.js";import"./index2.7bbd87c9.js";import"./event2.1741f333.js";import"./index2.309e467b.js";import"./scroll2.dc2faf83.js";import"./debounce.9184f38e.js";import"./validator2.6f1987ff.js";import"./el-input-number.de78a412.js";import"./el-switch.83e4e4db.js";import"./el-divider.1a444038.js";import"./InputPassword.9aadb9c3.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.b5873d10.js";import"./aria2.b5095a02.js";import"./browser2.761a8cbc.js";import"./useAxios.5e836160.js";const b={class:"text-2xl font-bold text-center w-[100%]"},w={class:"w-[100%] flex"},P={class:"w-[100%]"},v={class:"w-[100%] mt-15px"},x=o({__name:"RegisterForm",emits:["to-login"],setup(o,{emit:x}){const{register:y,elFormRef:k,methods:_}=g(),{t:F}=s(),{required:R}=j(),V=r([{field:"title",colProps:{span:24}},{field:"email",label:F("descriptionsDemo.email"),value:"",component:"Input",colProps:{span:24},componentProps:{placeholder:F("")}},{field:"password",label:F("login.password"),value:"",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},strength:!0,placeholder:F("login.passwordPlaceholder")}},{field:"check_password",label:F("login.checkPassword"),value:"",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},strength:!0,placeholder:F("login.passwordPlaceholder")}},{field:"register",colProps:{span:24}}]),I={email:[R(),{type:"email",message:"Please input correct email address",trigger:["blur","change"]}],username:[R(),{type:"email",message:"Please input correct email address",trigger:["blur","change"]}],password:[R()],check_password:[R()]},E=()=>{x("to-login")},U=a(!1),q=async()=>{const e=n(k);null==e||e.validate((async e=>{if(e){U.value=!0;const{getFormData:e}=_,o=await e();console.log("loginRegister====",o);try{const e=await h(o);console.log("res===",e),e&&(console.log("loginRegister--res===",e),E())}finally{U.value=!1}}}))};return(o,s)=>(l(),t(n(e),{schema:V,rules:I,"label-position":"top","hide-required-asterisk":"",size:"large",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid",onRegister:n(y)},{title:i((()=>[d("h2",b,p(n(F)("login.register")),1)])),code:i((e=>[d("div",w,[c(n(f),{modelValue:e.code,"onUpdate:modelValue":o=>e.code=o,placeholder:n(F)("login.codePlaceholder")},null,8,["modelValue","onUpdate:modelValue","placeholder"])])])),register:i((()=>[d("div",P,[c(n(u),{type:"primary",class:"w-[100%]",loading:U.value,onClick:q},{default:i((()=>[m(p(n(F)("login.register")),1)])),_:1},8,["loading"])]),d("div",v,[c(n(u),{class:"w-[100%]",onClick:E},{default:i((()=>[m(p(n(F)("login.hasUser")),1)])),_:1})])])),_:1},8,["schema","onRegister"]))}});export{x as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaXN0ZXJGb3JtLmFmNjY3MDczLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmlld3MvTG9naW4vY29tcG9uZW50cy9SZWdpc3RlckZvcm0udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnQC9jb21wb25lbnRzL0Zvcm0nXG5pbXBvcnQgeyByZWFjdGl2ZSwgcmVmLCB1bnJlZiB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICdAL2hvb2tzL3dlYi91c2VJMThuJ1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ0AvaG9va3Mvd2ViL3VzZUZvcm0nXG5pbXBvcnQgeyBFbEJ1dHRvbiwgRWxJbnB1dCwgRm9ybVJ1bGVzIH0gZnJvbSAnZWxlbWVudC1wbHVzJ1xuaW1wb3J0IHsgdXNlVmFsaWRhdG9yIH0gZnJvbSAnQC9ob29rcy93ZWIvdXNlVmFsaWRhdG9yJ1xuaW1wb3J0IHsgcmVnaXN0ZXJBcGkgfSBmcm9tICdAL2FwaS9sb2dpbidcbmltcG9ydCB7IFVzZXJUeXBlIH0gZnJvbSAnQC9hcGkvbG9naW4vdHlwZXMnXG5cbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0cyhbJ3RvLWxvZ2luJ10pXG5cbmNvbnN0IHsgcmVnaXN0ZXIsIGVsRm9ybVJlZiwgbWV0aG9kcyB9ID0gdXNlRm9ybSgpXG5cbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpXG5cbmNvbnN0IHsgcmVxdWlyZWQgfSA9IHVzZVZhbGlkYXRvcigpXG5cbmNvbnN0IHNjaGVtYSA9IHJlYWN0aXZlPEZvcm1TY2hlbWFbXT4oW1xuICB7XG4gICAgZmllbGQ6ICd0aXRsZScsXG4gICAgY29sUHJvcHM6IHtcbiAgICAgIHNwYW46IDI0XG4gICAgfVxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdlbWFpbCcsXG4gICAgbGFiZWw6IHQoJ2Rlc2NyaXB0aW9uc0RlbW8uZW1haWwnKSxcbiAgICB2YWx1ZTogJycsXG4gICAgY29tcG9uZW50OiAnSW5wdXQnLFxuICAgIGNvbFByb3BzOiB7XG4gICAgICBzcGFuOiAyNFxuICAgIH0sXG4gICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgIHBsYWNlaG9sZGVyOiB0KCcnKVxuICAgIH1cbiAgfSxcbiAge1xuICAgIGZpZWxkOiAncGFzc3dvcmQnLFxuICAgIGxhYmVsOiB0KCdsb2dpbi5wYXNzd29yZCcpLFxuICAgIHZhbHVlOiAnJyxcbiAgICBjb21wb25lbnQ6ICdJbnB1dFBhc3N3b3JkJyxcbiAgICBjb2xQcm9wczoge1xuICAgICAgc3BhbjogMjRcbiAgICB9LFxuICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICBzdHlsZToge1xuICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICB9LFxuICAgICAgc3RyZW5ndGg6IHRydWUsXG4gICAgICBwbGFjZWhvbGRlcjogdCgnbG9naW4ucGFzc3dvcmRQbGFjZWhvbGRlcicpXG4gICAgfVxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdjaGVja19wYXNzd29yZCcsXG4gICAgbGFiZWw6IHQoJ2xvZ2luLmNoZWNrUGFzc3dvcmQnKSxcbiAgICB2YWx1ZTogJycsXG4gICAgY29tcG9uZW50OiAnSW5wdXRQYXNzd29yZCcsXG4gICAgY29sUHJvcHM6IHtcbiAgICAgIHNwYW46IDI0XG4gICAgfSxcbiAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgc3R5bGU6IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgfSxcbiAgICAgIHN0cmVuZ3RoOiB0cnVlLFxuICAgICAgcGxhY2Vob2xkZXI6IHQoJ2xvZ2luLnBhc3N3b3JkUGxhY2Vob2xkZXInKVxuICAgIH1cbiAgfSxcbiAge1xuICAgIGZpZWxkOiAncmVnaXN0ZXInLFxuICAgIGNvbFByb3BzOiB7XG4gICAgICBzcGFuOiAyNFxuICAgIH1cbiAgfVxuXSlcblxuY29uc3QgcnVsZXM6IEZvcm1SdWxlcyA9IHtcbiAgZW1haWw6IFtcbiAgICByZXF1aXJlZCgpLFxuICAgIHtcbiAgICAgIHR5cGU6ICdlbWFpbCcsXG4gICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IGNvcnJlY3QgZW1haWwgYWRkcmVzcycsXG4gICAgICB0cmlnZ2VyOiBbJ2JsdXInLCAnY2hhbmdlJ11cbiAgICB9XG4gIF0sXG4gIHVzZXJuYW1lOiBbXG4gICAgcmVxdWlyZWQoKSxcbiAgICB7XG4gICAgICB0eXBlOiAnZW1haWwnLFxuICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCBjb3JyZWN0IGVtYWlsIGFkZHJlc3MnLFxuICAgICAgdHJpZ2dlcjogWydibHVyJywgJ2NoYW5nZSddXG4gICAgfVxuICBdLFxuICBwYXNzd29yZDogW3JlcXVpcmVkKCldLFxuICBjaGVja19wYXNzd29yZDogW3JlcXVpcmVkKCldXG4gIC8vIGNvZGU6IFtyZXF1aXJlZCgpXVxufVxuY29uc3QgdG9Mb2dpbiA9ICgpID0+IHtcbiAgZW1pdCgndG8tbG9naW4nKVxufVxuXG5jb25zdCBsb2FkaW5nID0gcmVmKGZhbHNlKVxuXG5jb25zdCBsb2dpblJlZ2lzdGVyID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBmb3JtUmVmID0gdW5yZWYoZWxGb3JtUmVmKVxuICBmb3JtUmVmPy52YWxpZGF0ZShhc3luYyAodmFsaWQpID0+IHtcbiAgICBpZiAodmFsaWQpIHtcbiAgICAgIGxvYWRpbmcudmFsdWUgPSB0cnVlXG4gICAgICBjb25zdCB7IGdldEZvcm1EYXRhIH0gPSBtZXRob2RzXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IGdldEZvcm1EYXRhPFVzZXJUeXBlPigpXG5cbiAgICAgIGNvbnNvbGUubG9nKCdsb2dpblJlZ2lzdGVyPT09PScsIGZvcm1EYXRhKVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVnaXN0ZXJBcGkoZm9ybURhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXM9PT0nLCByZXMpXG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW5SZWdpc3Rlci0tcmVzPT09JywgcmVzKVxuICAgICAgICAgIHRvTG9naW4oKVxuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBsb2FkaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8Rm9ybVxuICAgIDpzY2hlbWE9XCJzY2hlbWFcIlxuICAgIDpydWxlcz1cInJ1bGVzXCJcbiAgICBsYWJlbC1wb3NpdGlvbj1cInRvcFwiXG4gICAgaGlkZS1yZXF1aXJlZC1hc3Rlcmlza1xuICAgIHNpemU9XCJsYXJnZVwiXG4gICAgY2xhc3M9XCJkYXJrOihib3JkZXItMSBib3JkZXItW3ZhcigtLWVsLWJvcmRlci1jb2xvcildIGJvcmRlci1zb2xpZClcIlxuICAgIEByZWdpc3Rlcj1cInJlZ2lzdGVyXCJcbiAgPlxuICAgIDx0ZW1wbGF0ZSAjdGl0bGU+XG4gICAgICA8aDIgY2xhc3M9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgdy1bMTAwJV1cIj57eyB0KCdsb2dpbi5yZWdpc3RlcicpIH19PC9oMj5cbiAgICA8L3RlbXBsYXRlPlxuXG4gICAgPHRlbXBsYXRlICNjb2RlPVwiZm9ybVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInctWzEwMCVdIGZsZXhcIj5cbiAgICAgICAgPEVsSW5wdXQgdi1tb2RlbD1cImZvcm1bJ2NvZGUnXVwiIDpwbGFjZWhvbGRlcj1cInQoJ2xvZ2luLmNvZGVQbGFjZWhvbGRlcicpXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG5cbiAgICA8dGVtcGxhdGUgI3JlZ2lzdGVyPlxuICAgICAgPGRpdiBjbGFzcz1cInctWzEwMCVdXCI+XG4gICAgICAgIDxFbEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzPVwidy1bMTAwJV1cIiA6bG9hZGluZz1cImxvYWRpbmdcIiBAY2xpY2s9XCJsb2dpblJlZ2lzdGVyXCI+XG4gICAgICAgICAge3sgdCgnbG9naW4ucmVnaXN0ZXInKSB9fVxuICAgICAgICA8L0VsQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidy1bMTAwJV0gbXQtMTVweFwiPlxuICAgICAgICA8RWxCdXR0b24gY2xhc3M9XCJ3LVsxMDAlXVwiIEBjbGljaz1cInRvTG9naW5cIj5cbiAgICAgICAgICB7eyB0KCdsb2dpbi5oYXNVc2VyJykgfX1cbiAgICAgICAgPC9FbEJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvRm9ybT5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsicmVnaXN0ZXIiLCJlbEZvcm1SZWYiLCJtZXRob2RzIiwidXNlRm9ybSIsInQiLCJ1c2VJMThuIiwicmVxdWlyZWQiLCJ1c2VWYWxpZGF0b3IiLCJzY2hlbWEiLCJyZWFjdGl2ZSIsImZpZWxkIiwiY29sUHJvcHMiLCJzcGFuIiwibGFiZWwiLCJ2YWx1ZSIsImNvbXBvbmVudCIsImNvbXBvbmVudFByb3BzIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIndpZHRoIiwic3RyZW5ndGgiLCJydWxlcyIsImVtYWlsIiwidHlwZSIsIm1lc3NhZ2UiLCJ0cmlnZ2VyIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImNoZWNrX3Bhc3N3b3JkIiwidG9Mb2dpbiIsImVtaXQiLCJsb2FkaW5nIiwicmVmIiwibG9naW5SZWdpc3RlciIsImFzeW5jIiwiZm9ybVJlZiIsInVucmVmIiwidmFsaWRhdGUiLCJ2YWxpZCIsImdldEZvcm1EYXRhIiwiZm9ybURhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzIiwicmVnaXN0ZXJBcGkiXSwibWFwcGluZ3MiOiJ5dENBWUEsTUFBTUEsU0FBRUEsRUFBQUMsVUFBVUEsRUFBV0MsUUFBQUEsR0FBWUMsS0FFbkNDLEVBQUVBLEdBQU1DLEtBRVJDLFNBQUVBLEdBQWFDLElBRWZDLEVBQVNDLEVBQXVCLENBQ3BDLENBQ0VDLE1BQU8sUUFDUEMsU0FBVSxDQUNSQyxLQUFNLEtBR1YsQ0FDRUYsTUFBTyxRQUNQRyxNQUFPVCxFQUFFLDBCQUNUVSxNQUFPLEdBQ1BDLFVBQVcsUUFDWEosU0FBVSxDQUNSQyxLQUFNLElBRVJJLGVBQWdCLENBQ2RDLFlBQWFiLEVBQUUsTUFHbkIsQ0FDRU0sTUFBTyxXQUNQRyxNQUFPVCxFQUFFLGtCQUNUVSxNQUFPLEdBQ1BDLFVBQVcsZ0JBQ1hKLFNBQVUsQ0FDUkMsS0FBTSxJQUVSSSxlQUFnQixDQUNkRSxNQUFPLENBQ0xDLE1BQU8sUUFFVEMsVUFBVSxFQUNWSCxZQUFhYixFQUFFLCtCQUduQixDQUNFTSxNQUFPLGlCQUNQRyxNQUFPVCxFQUFFLHVCQUNUVSxNQUFPLEdBQ1BDLFVBQVcsZ0JBQ1hKLFNBQVUsQ0FDUkMsS0FBTSxJQUVSSSxlQUFnQixDQUNkRSxNQUFPLENBQ0xDLE1BQU8sUUFFVEMsVUFBVSxFQUNWSCxZQUFhYixFQUFFLCtCQUduQixDQUNFTSxNQUFPLFdBQ1BDLFNBQVUsQ0FDUkMsS0FBTSxPQUtOUyxFQUFtQixDQUN2QkMsTUFBTyxDQUNMaEIsSUFDQSxDQUNFaUIsS0FBTSxRQUNOQyxRQUFTLHFDQUNUQyxRQUFTLENBQUMsT0FBUSxZQUd0QkMsU0FBVSxDQUNScEIsSUFDQSxDQUNFaUIsS0FBTSxRQUNOQyxRQUFTLHFDQUNUQyxRQUFTLENBQUMsT0FBUSxZQUd0QkUsU0FBVSxDQUFDckIsS0FDWHNCLGVBQWdCLENBQUN0QixNQUdidUIsRUFBVSxLQUNkQyxFQUFLLGFBR0RDLEVBQVVDLEdBQUksR0FFZEMsRUFBZ0JDLFVBQ2QsTUFBQUMsRUFBVUMsRUFBTW5DLEdBQ2IsTUFBQWtDLEdBQUFBLEVBQUFFLFVBQVNILE1BQU9JLElBQ3ZCLEdBQUlBLEVBQU8sQ0FDVFAsRUFBUWpCLE9BQVEsRUFDVixNQUFBeUIsWUFBRUEsR0FBZ0JyQyxFQUNsQnNDLFFBQWlCRCxJQUVmRSxRQUFBQyxJQUFJLG9CQUFxQkYsR0FDN0IsSUFDSSxNQUFBRyxRQUFZQyxFQUFZSixHQUN0QkMsUUFBQUMsSUFBSSxTQUFVQyxHQUNsQkEsSUFDTUYsUUFBQUMsSUFBSSx3QkFBeUJDLFFBR3ZDLFFBQ0FaLEVBQVFqQixPQUFRIn0=
