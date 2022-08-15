import{F as e}from"./Form.500af622.js";import{u as r}from"./useForm.9162035b.js";import{u as o}from"./useValidator.2b765fd2.js";import{d as t,s,v as m,o as i,k as a,a as p}from"./index.63ad27ed.js";import"./el-col.29973b17.js";import"./typescript2.0e462989.js";import"./el-popper.2e0f947e.js";import"./index2.06b96e43.js";import"./el-input.ec3b36be.js";import"./event2.1741f333.js";import"./index2.f758414f.js";import"./el-tag.1976bda3.js";import"./tsxHelper.7f51eaea.js";import"./index2.d473352e.js";import"./scroll2.2b4a5172.js";import"./debounce.ac76efe8.js";import"./validator2.9626479b.js";import"./el-button.6bb32269.js";import"./el-input-number.18339b90.js";import"./el-switch.0944b706.js";import"./el-divider.3c26984a.js";import"./InputPassword.6d2c7405.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.e5525c5f.js";import"./aria2.b5095a02.js";import"./browser2.47d88281.js";const l=t({__name:"Write",props:{currentRow:{type:Object,default:()=>null},formSchema:{type:Array,default:()=>[]}},setup(t,{expose:l}){const d=t,{required:n}=o(),u=s({name:[n()]});console.log("formSchema===",d.formSchema);const{register:j,elFormRef:c,methods:f}=r({schema:d.formSchema});return m((()=>d.currentRow),(e=>{if(!e)return;const{setValues:r}=f;r(e)}),{deep:!0,immediate:!0}),console.log("elFormRef===",c),l({elFormRef:c,getFormData:f.getFormData,setValues:f.setValues}),(r,o)=>(i(),a(p(e),{rules:u,onRegister:p(j)},null,8,["rules","onRegister"]))}});export{l as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV3JpdGUuZWVkODZjNjIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9JbmR1c3RyeS9jb21wb25lbnRzL1dyaXRlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxyXG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnQC9jb21wb25lbnRzL0Zvcm0nXHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdAL2hvb2tzL3dlYi91c2VGb3JtJ1xyXG5pbXBvcnQgeyBQcm9wVHlwZSwgcmVhY3RpdmUsIHdhdGNoIH0gZnJvbSAndnVlJ1xyXG5pbXBvcnQgeyBHcm91cERhdGEgfSBmcm9tICdAL2FwaS9ncm91cC90eXBlcydcclxuaW1wb3J0IHsgdXNlVmFsaWRhdG9yIH0gZnJvbSAnQC9ob29rcy93ZWIvdXNlVmFsaWRhdG9yJ1xyXG5cclxuY29uc3QgeyByZXF1aXJlZCB9ID0gdXNlVmFsaWRhdG9yKClcclxuXHJcbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xyXG4gIGN1cnJlbnRSb3c6IHtcclxuICAgIHR5cGU6IE9iamVjdCBhcyBQcm9wVHlwZTxOdWxsYWJsZTxHcm91cERhdGE+PixcclxuICAgIGRlZmF1bHQ6ICgpID0+IG51bGxcclxuICB9LFxyXG4gIGZvcm1TY2hlbWE6IHtcclxuICAgIHR5cGU6IEFycmF5IGFzIFByb3BUeXBlPEZvcm1TY2hlbWFbXT4sXHJcbiAgICBkZWZhdWx0OiAoKSA9PiBbXVxyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IHJ1bGVzID0gcmVhY3RpdmUoe1xyXG4gIG5hbWU6IFtyZXF1aXJlZCgpXVxyXG4gIC8vIGNvZGU6IFtyZXF1aXJlZCgpXSxcclxuICAvLyByZW1hcms6IFtdLFxyXG4gIC8vIHN0b2NrczogW11cclxufSlcclxuXHJcbmNvbnNvbGUubG9nKCdmb3JtU2NoZW1hPT09JywgcHJvcHMuZm9ybVNjaGVtYSlcclxuY29uc3QgeyByZWdpc3RlciwgZWxGb3JtUmVmLCBtZXRob2RzIH0gPSB1c2VGb3JtKHtcclxuICBzY2hlbWE6IHByb3BzLmZvcm1TY2hlbWFcclxufSlcclxuXHJcbndhdGNoKFxyXG4gICgpID0+IHByb3BzLmN1cnJlbnRSb3csXHJcbiAgKGN1cnJlbnRSb3cpID0+IHtcclxuICAgIGlmICghY3VycmVudFJvdykgcmV0dXJuXHJcbiAgICBjb25zdCB7IHNldFZhbHVlcyB9ID0gbWV0aG9kc1xyXG4gICAgc2V0VmFsdWVzKGN1cnJlbnRSb3cpXHJcbiAgfSxcclxuICB7XHJcbiAgICBkZWVwOiB0cnVlLFxyXG4gICAgaW1tZWRpYXRlOiB0cnVlXHJcbiAgfVxyXG4pXHJcblxyXG5jb25zb2xlLmxvZygnZWxGb3JtUmVmPT09JywgZWxGb3JtUmVmKVxyXG5cclxuZGVmaW5lRXhwb3NlKHtcclxuICBlbEZvcm1SZWYsXHJcbiAgZ2V0Rm9ybURhdGE6IG1ldGhvZHMuZ2V0Rm9ybURhdGEsXHJcbiAgc2V0VmFsdWVzOiBtZXRob2RzLnNldFZhbHVlc1xyXG59KVxyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8Rm9ybSA6cnVsZXM9XCJydWxlc1wiIEByZWdpc3Rlcj1cInJlZ2lzdGVyXCIgLz5cclxuPC90ZW1wbGF0ZT5cclxuIl0sIm5hbWVzIjpbInJlcXVpcmVkIiwidXNlVmFsaWRhdG9yIiwicnVsZXMiLCJyZWFjdGl2ZSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJmb3JtU2NoZW1hIiwicmVnaXN0ZXIiLCJlbEZvcm1SZWYiLCJtZXRob2RzIiwidXNlRm9ybSIsInNjaGVtYSIsIndhdGNoIiwiY3VycmVudFJvdyIsInNldFZhbHVlcyIsImRlZXAiLCJpbW1lZGlhdGUiLCJleHBvc2UiLCJnZXRGb3JtRGF0YSJdLCJtYXBwaW5ncyI6InVoQ0FPTUEsU0FBRUEsR0FBYUMsSUFhZkMsRUFBUUMsRUFBUyxDQUNyQkMsS0FBTSxDQUFDSixPQU1ESyxRQUFBQyxJQUFJLGdCQUFpQkMsRUFBTUMsWUFDbkMsTUFBTUMsU0FBRUEsRUFBQUMsVUFBVUEsRUFBV0MsUUFBQUEsR0FBWUMsRUFBUSxDQUMvQ0MsT0FBUU4sRUFBTUMsb0JBR2hCTSxHQUNFLElBQU1QLEVBQU1RLGFBQ1hBLElBQ0MsSUFBS0EsRUFBWSxPQUNqQixNQUFNQyxVQUFFQSxHQUFjTCxFQUN0QkssRUFBVUQsS0FFWixDQUNFRSxNQUFNLEVBQ05DLFdBQVcsSUFJUGIsUUFBQUMsSUFBSSxlQUFnQkksR0FFZlMsRUFBQSxDQUNYVCxVQUFBQSxFQUNBVSxZQUFhVCxFQUFRUyxZQUNyQkosVUFBV0wsRUFBUUsifQ==
