import{F as e}from"./Form.500af622.js";import{d as o,l as s,s as r,r as l,o as a,k as t,w as i,e as p,t as d,a as n,g as c,x as m}from"./index.63ad27ed.js";import{u as g}from"./useForm.9162035b.js";import{E as u}from"./el-button.6bb32269.js";import{E as b}from"./el-input.ec3b36be.js";import{u as f}from"./useValidator.2b765fd2.js";import{r as j}from"./index.55fdd448.js";import"./el-col.29973b17.js";import"./typescript2.0e462989.js";import"./el-popper.2e0f947e.js";import"./index2.06b96e43.js";import"./el-tag.1976bda3.js";import"./tsxHelper.7f51eaea.js";import"./index2.f758414f.js";import"./event2.1741f333.js";import"./index2.d473352e.js";import"./scroll2.2b4a5172.js";import"./debounce.ac76efe8.js";import"./validator2.9626479b.js";import"./el-input-number.18339b90.js";import"./el-switch.0944b706.js";import"./el-divider.3c26984a.js";import"./InputPassword.6d2c7405.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.e5525c5f.js";import"./aria2.b5095a02.js";import"./browser2.47d88281.js";import"./useAxios.e773356b.js";const h={class:"text-2xl font-bold text-center w-[100%]"},w={class:"w-[100%] flex"},P={class:"w-[100%]"},v={class:"w-[100%] mt-15px"},x=o({__name:"RegisterForm",emits:["to-login"],setup(o,{emit:x}){const{register:y,elFormRef:k,methods:_}=g(),{t:F}=s(),{required:R}=f(),V=r([{field:"title",colProps:{span:24}},{field:"email",label:F("descriptionsDemo.email"),value:"",component:"Input",colProps:{span:24},componentProps:{placeholder:F("")}},{field:"password",label:F("login.password"),value:"",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},strength:!0,placeholder:F("login.passwordPlaceholder")}},{field:"check_password",label:F("login.checkPassword"),value:"",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},strength:!0,placeholder:F("login.passwordPlaceholder")}},{field:"register",colProps:{span:24}}]),I={email:[R(),{type:"email",message:"Please input correct email address",trigger:["blur","change"]}],username:[R(),{type:"email",message:"Please input correct email address",trigger:["blur","change"]}],password:[R()],check_password:[R()]},E=()=>{x("to-login")},U=l(!1),q=async()=>{const e=n(k);null==e||e.validate((async e=>{if(e){U.value=!0;const{getFormData:e}=_,o=await e();console.log("loginRegister====",o);try{const e=await j(o);console.log("res===",e),e&&(console.log("loginRegister--res===",e),E())}finally{U.value=!1}}}))};return(o,s)=>(a(),t(n(e),{schema:V,rules:I,"label-position":"top","hide-required-asterisk":"",size:"large",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid",onRegister:n(y)},{title:i((()=>[p("h2",h,d(n(F)("login.register")),1)])),code:i((e=>[p("div",w,[c(n(b),{modelValue:e.code,"onUpdate:modelValue":o=>e.code=o,placeholder:n(F)("login.codePlaceholder")},null,8,["modelValue","onUpdate:modelValue","placeholder"])])])),register:i((()=>[p("div",P,[c(n(u),{type:"primary",class:"w-[100%]",loading:U.value,onClick:q},{default:i((()=>[m(d(n(F)("login.register")),1)])),_:1},8,["loading"])]),p("div",v,[c(n(u),{class:"w-[100%]",onClick:E},{default:i((()=>[m(d(n(F)("login.hasUser")),1)])),_:1})])])),_:1},8,["schema","onRegister"]))}});export{x as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaXN0ZXJGb3JtLjAxMDQ2MGM0LmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmlld3MvTG9naW4vY29tcG9uZW50cy9SZWdpc3RlckZvcm0udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdAL2NvbXBvbmVudHMvRm9ybSdcclxuaW1wb3J0IHsgcmVhY3RpdmUsIHJlZiwgdW5yZWYgfSBmcm9tICd2dWUnXHJcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICdAL2hvb2tzL3dlYi91c2VJMThuJ1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnQC9ob29rcy93ZWIvdXNlRm9ybSdcclxuaW1wb3J0IHsgRWxCdXR0b24sIEVsSW5wdXQsIEZvcm1SdWxlcyB9IGZyb20gJ2VsZW1lbnQtcGx1cydcclxuaW1wb3J0IHsgdXNlVmFsaWRhdG9yIH0gZnJvbSAnQC9ob29rcy93ZWIvdXNlVmFsaWRhdG9yJ1xyXG5pbXBvcnQgeyByZWdpc3RlckFwaSB9IGZyb20gJ0AvYXBpL2xvZ2luJ1xyXG5pbXBvcnQgeyBVc2VyVHlwZSB9IGZyb20gJ0AvYXBpL2xvZ2luL3R5cGVzJ1xyXG5cclxuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzKFsndG8tbG9naW4nXSlcclxuXHJcbmNvbnN0IHsgcmVnaXN0ZXIsIGVsRm9ybVJlZiwgbWV0aG9kcyB9ID0gdXNlRm9ybSgpXHJcblxyXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKVxyXG5cclxuY29uc3QgeyByZXF1aXJlZCB9ID0gdXNlVmFsaWRhdG9yKClcclxuXHJcbmNvbnN0IHNjaGVtYSA9IHJlYWN0aXZlPEZvcm1TY2hlbWFbXT4oW1xyXG4gIHtcclxuICAgIGZpZWxkOiAndGl0bGUnLFxyXG4gICAgY29sUHJvcHM6IHtcclxuICAgICAgc3BhbjogMjRcclxuICAgIH1cclxuICB9LFxyXG4gIHtcclxuICAgIGZpZWxkOiAnZW1haWwnLFxyXG4gICAgbGFiZWw6IHQoJ2Rlc2NyaXB0aW9uc0RlbW8uZW1haWwnKSxcclxuICAgIHZhbHVlOiAnJyxcclxuICAgIGNvbXBvbmVudDogJ0lucHV0JyxcclxuICAgIGNvbFByb3BzOiB7XHJcbiAgICAgIHNwYW46IDI0XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50UHJvcHM6IHtcclxuICAgICAgcGxhY2Vob2xkZXI6IHQoJycpXHJcbiAgICB9XHJcbiAgfSxcclxuICB7XHJcbiAgICBmaWVsZDogJ3Bhc3N3b3JkJyxcclxuICAgIGxhYmVsOiB0KCdsb2dpbi5wYXNzd29yZCcpLFxyXG4gICAgdmFsdWU6ICcnLFxyXG4gICAgY29tcG9uZW50OiAnSW5wdXRQYXNzd29yZCcsXHJcbiAgICBjb2xQcm9wczoge1xyXG4gICAgICBzcGFuOiAyNFxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudFByb3BzOiB7XHJcbiAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgICB9LFxyXG4gICAgICBzdHJlbmd0aDogdHJ1ZSxcclxuICAgICAgcGxhY2Vob2xkZXI6IHQoJ2xvZ2luLnBhc3N3b3JkUGxhY2Vob2xkZXInKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmllbGQ6ICdjaGVja19wYXNzd29yZCcsXHJcbiAgICBsYWJlbDogdCgnbG9naW4uY2hlY2tQYXNzd29yZCcpLFxyXG4gICAgdmFsdWU6ICcnLFxyXG4gICAgY29tcG9uZW50OiAnSW5wdXRQYXNzd29yZCcsXHJcbiAgICBjb2xQcm9wczoge1xyXG4gICAgICBzcGFuOiAyNFxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudFByb3BzOiB7XHJcbiAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgICB9LFxyXG4gICAgICBzdHJlbmd0aDogdHJ1ZSxcclxuICAgICAgcGxhY2Vob2xkZXI6IHQoJ2xvZ2luLnBhc3N3b3JkUGxhY2Vob2xkZXInKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmllbGQ6ICdyZWdpc3RlcicsXHJcbiAgICBjb2xQcm9wczoge1xyXG4gICAgICBzcGFuOiAyNFxyXG4gICAgfVxyXG4gIH1cclxuXSlcclxuXHJcbmNvbnN0IHJ1bGVzOiBGb3JtUnVsZXMgPSB7XHJcbiAgZW1haWw6IFtcclxuICAgIHJlcXVpcmVkKCksXHJcbiAgICB7XHJcbiAgICAgIHR5cGU6ICdlbWFpbCcsXHJcbiAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgY29ycmVjdCBlbWFpbCBhZGRyZXNzJyxcclxuICAgICAgdHJpZ2dlcjogWydibHVyJywgJ2NoYW5nZSddXHJcbiAgICB9XHJcbiAgXSxcclxuICB1c2VybmFtZTogW1xyXG4gICAgcmVxdWlyZWQoKSxcclxuICAgIHtcclxuICAgICAgdHlwZTogJ2VtYWlsJyxcclxuICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCBjb3JyZWN0IGVtYWlsIGFkZHJlc3MnLFxyXG4gICAgICB0cmlnZ2VyOiBbJ2JsdXInLCAnY2hhbmdlJ11cclxuICAgIH1cclxuICBdLFxyXG4gIHBhc3N3b3JkOiBbcmVxdWlyZWQoKV0sXHJcbiAgY2hlY2tfcGFzc3dvcmQ6IFtyZXF1aXJlZCgpXVxyXG4gIC8vIGNvZGU6IFtyZXF1aXJlZCgpXVxyXG59XHJcbmNvbnN0IHRvTG9naW4gPSAoKSA9PiB7XHJcbiAgZW1pdCgndG8tbG9naW4nKVxyXG59XHJcblxyXG5jb25zdCBsb2FkaW5nID0gcmVmKGZhbHNlKVxyXG5cclxuY29uc3QgbG9naW5SZWdpc3RlciA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBmb3JtUmVmID0gdW5yZWYoZWxGb3JtUmVmKVxyXG4gIGZvcm1SZWY/LnZhbGlkYXRlKGFzeW5jICh2YWxpZCkgPT4ge1xyXG4gICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgIGxvYWRpbmcudmFsdWUgPSB0cnVlXHJcbiAgICAgIGNvbnN0IHsgZ2V0Rm9ybURhdGEgfSA9IG1ldGhvZHNcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCBnZXRGb3JtRGF0YTxVc2VyVHlwZT4oKVxyXG5cclxuICAgICAgY29uc29sZS5sb2coJ2xvZ2luUmVnaXN0ZXI9PT09JywgZm9ybURhdGEpXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVnaXN0ZXJBcGkoZm9ybURhdGEpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlcz09PScsIHJlcylcclxuICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW5SZWdpc3Rlci0tcmVzPT09JywgcmVzKVxyXG4gICAgICAgICAgdG9Mb2dpbigpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIGxvYWRpbmcudmFsdWUgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8Rm9ybVxyXG4gICAgOnNjaGVtYT1cInNjaGVtYVwiXHJcbiAgICA6cnVsZXM9XCJydWxlc1wiXHJcbiAgICBsYWJlbC1wb3NpdGlvbj1cInRvcFwiXHJcbiAgICBoaWRlLXJlcXVpcmVkLWFzdGVyaXNrXHJcbiAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgY2xhc3M9XCJkYXJrOihib3JkZXItMSBib3JkZXItW3ZhcigtLWVsLWJvcmRlci1jb2xvcildIGJvcmRlci1zb2xpZClcIlxyXG4gICAgQHJlZ2lzdGVyPVwicmVnaXN0ZXJcIlxyXG4gID5cclxuICAgIDx0ZW1wbGF0ZSAjdGl0bGU+XHJcbiAgICAgIDxoMiBjbGFzcz1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciB3LVsxMDAlXVwiPnt7IHQoJ2xvZ2luLnJlZ2lzdGVyJykgfX08L2gyPlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICA8dGVtcGxhdGUgI2NvZGU9XCJmb3JtXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ3LVsxMDAlXSBmbGV4XCI+XHJcbiAgICAgICAgPEVsSW5wdXQgdi1tb2RlbD1cImZvcm1bJ2NvZGUnXVwiIDpwbGFjZWhvbGRlcj1cInQoJ2xvZ2luLmNvZGVQbGFjZWhvbGRlcicpXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgIDx0ZW1wbGF0ZSAjcmVnaXN0ZXI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ3LVsxMDAlXVwiPlxyXG4gICAgICAgIDxFbEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGNsYXNzPVwidy1bMTAwJV1cIiA6bG9hZGluZz1cImxvYWRpbmdcIiBAY2xpY2s9XCJsb2dpblJlZ2lzdGVyXCI+XHJcbiAgICAgICAgICB7eyB0KCdsb2dpbi5yZWdpc3RlcicpIH19XHJcbiAgICAgICAgPC9FbEJ1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ3LVsxMDAlXSBtdC0xNXB4XCI+XHJcbiAgICAgICAgPEVsQnV0dG9uIGNsYXNzPVwidy1bMTAwJV1cIiBAY2xpY2s9XCJ0b0xvZ2luXCI+XHJcbiAgICAgICAgICB7eyB0KCdsb2dpbi5oYXNVc2VyJykgfX1cclxuICAgICAgICA8L0VsQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvdGVtcGxhdGU+XHJcbiAgPC9Gb3JtPlxyXG48L3RlbXBsYXRlPlxyXG4iXSwibmFtZXMiOlsicmVnaXN0ZXIiLCJlbEZvcm1SZWYiLCJtZXRob2RzIiwidXNlRm9ybSIsInQiLCJ1c2VJMThuIiwicmVxdWlyZWQiLCJ1c2VWYWxpZGF0b3IiLCJzY2hlbWEiLCJyZWFjdGl2ZSIsImZpZWxkIiwiY29sUHJvcHMiLCJzcGFuIiwibGFiZWwiLCJ2YWx1ZSIsImNvbXBvbmVudCIsImNvbXBvbmVudFByb3BzIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsIndpZHRoIiwic3RyZW5ndGgiLCJydWxlcyIsImVtYWlsIiwidHlwZSIsIm1lc3NhZ2UiLCJ0cmlnZ2VyIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImNoZWNrX3Bhc3N3b3JkIiwidG9Mb2dpbiIsImVtaXQiLCJsb2FkaW5nIiwicmVmIiwibG9naW5SZWdpc3RlciIsImFzeW5jIiwiZm9ybVJlZiIsInVucmVmIiwidmFsaWRhdGUiLCJ2YWxpZCIsImdldEZvcm1EYXRhIiwiZm9ybURhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzIiwicmVnaXN0ZXJBcGkiXSwibWFwcGluZ3MiOiJ5dENBWUEsTUFBTUEsU0FBRUEsRUFBQUMsVUFBVUEsRUFBV0MsUUFBQUEsR0FBWUMsS0FFbkNDLEVBQUVBLEdBQU1DLEtBRVJDLFNBQUVBLEdBQWFDLElBRWZDLEVBQVNDLEVBQXVCLENBQ3BDLENBQ0VDLE1BQU8sUUFDUEMsU0FBVSxDQUNSQyxLQUFNLEtBR1YsQ0FDRUYsTUFBTyxRQUNQRyxNQUFPVCxFQUFFLDBCQUNUVSxNQUFPLEdBQ1BDLFVBQVcsUUFDWEosU0FBVSxDQUNSQyxLQUFNLElBRVJJLGVBQWdCLENBQ2RDLFlBQWFiLEVBQUUsTUFHbkIsQ0FDRU0sTUFBTyxXQUNQRyxNQUFPVCxFQUFFLGtCQUNUVSxNQUFPLEdBQ1BDLFVBQVcsZ0JBQ1hKLFNBQVUsQ0FDUkMsS0FBTSxJQUVSSSxlQUFnQixDQUNkRSxNQUFPLENBQ0xDLE1BQU8sUUFFVEMsVUFBVSxFQUNWSCxZQUFhYixFQUFFLCtCQUduQixDQUNFTSxNQUFPLGlCQUNQRyxNQUFPVCxFQUFFLHVCQUNUVSxNQUFPLEdBQ1BDLFVBQVcsZ0JBQ1hKLFNBQVUsQ0FDUkMsS0FBTSxJQUVSSSxlQUFnQixDQUNkRSxNQUFPLENBQ0xDLE1BQU8sUUFFVEMsVUFBVSxFQUNWSCxZQUFhYixFQUFFLCtCQUduQixDQUNFTSxNQUFPLFdBQ1BDLFNBQVUsQ0FDUkMsS0FBTSxPQUtOUyxFQUFtQixDQUN2QkMsTUFBTyxDQUNMaEIsSUFDQSxDQUNFaUIsS0FBTSxRQUNOQyxRQUFTLHFDQUNUQyxRQUFTLENBQUMsT0FBUSxZQUd0QkMsU0FBVSxDQUNScEIsSUFDQSxDQUNFaUIsS0FBTSxRQUNOQyxRQUFTLHFDQUNUQyxRQUFTLENBQUMsT0FBUSxZQUd0QkUsU0FBVSxDQUFDckIsS0FDWHNCLGVBQWdCLENBQUN0QixNQUdidUIsRUFBVSxLQUNkQyxFQUFLLGFBR0RDLEVBQVVDLEdBQUksR0FFZEMsRUFBZ0JDLFVBQ2QsTUFBQUMsRUFBVUMsRUFBTW5DLEdBQ2IsTUFBQWtDLEdBQUFBLEVBQUFFLFVBQVNILE1BQU9JLElBQ3ZCLEdBQUlBLEVBQU8sQ0FDVFAsRUFBUWpCLE9BQVEsRUFDaEIsTUFBTXlCLFlBQUVBLEdBQWdCckMsRUFDbEJzQyxRQUFpQkQsSUFFZkUsUUFBQUMsSUFBSSxvQkFBcUJGLEdBQzdCLElBQ0ksTUFBQUcsUUFBWUMsRUFBWUosR0FDdEJDLFFBQUFDLElBQUksU0FBVUMsR0FDbEJBLElBQ01GLFFBQUFDLElBQUksd0JBQXlCQyxRQUd2QyxRQUNBWixFQUFRakIsT0FBUSJ9