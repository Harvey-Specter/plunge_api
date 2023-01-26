import{F as e}from"./Form.ebf794e5.js";import{_ as o}from"./ContentWrap.7d3a9183.js";import{d as l,k as t,s as a,r as i,o as m,c as r,g as f,w as n,a as d,x as s,t as p,G as c}from"./index.1a68aef2.js";import{E as u}from"./el-button.a6b8d6fa.js";import{u as b}from"./useValidator.106f771e.js";import"./el-col.f5f1d7dc.js";import"./typescript2.0e462989.js";import"./el-popper.dbb2fbab.js";import"./index2.1b075999.js";import"./el-input.b19e074f.js";import"./event2.1741f333.js";import"./index2.78abe895.js";import"./el-tag.94f7b718.js";import"./tsxHelper.3ba3c88c.js";import"./index2.246c69ad.js";import"./scroll2.bc735d56.js";import"./debounce.25c7f936.js";import"./validator2.597f6af8.js";import"./el-input-number.eadeea7e.js";import"./el-switch.65903c61.js";import"./el-divider.bf458341.js";import"./InputPassword.6d00c577.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.fe501ac3.js";import"./aria2.b5095a02.js";import"./browser2.dbd34495.js";import"./el-card.7a3342cf.js";const v=l({__name:"RefForm",setup(l){const{required:v}=b(),{t:D}=t(),j=a([{field:"field1",label:D("formDemo.input"),component:"Input",formItemProps:{rules:[v()]}},{field:"field2",label:D("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},{field:"field3",label:D("formDemo.radio"),component:"Radio",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:D("formDemo.checkbox"),component:"Checkbox",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}},{field:"field5",component:"DatePicker",label:D("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:D("formDemo.timeSelect")}]),_=i(),k=e=>{var o;null==(o=d(_))||o.setProps({labelWidth:e})},h=e=>{var o;null==(o=d(_))||o.setProps({size:e})},C=e=>{var o;null==(o=d(_))||o.setProps({disabled:e})},P=e=>{var o,l;e?null==(o=d(_))||o.delSchema("field2"):e||"field2"===j[1].field||null==(l=d(_))||l.addSchema({field:"field2",label:D("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},1)},x=e=>{var o,l;const t=null==(o=d(_))?void 0:o.getElFormRef();e?null==t||t.resetFields():null==(l=d(_))||l.setValues({field1:"field1",field2:"2",field3:"2",field4:["1","3"],field5:"2022-01-27",field6:"17:00"})},F=i(7),$=()=>{var e;null==(e=d(_))||e.setSchema([{field:"field2",path:"label",value:`${D("formDemo.select")} ${F.value}`},{field:"field2",path:"componentProps.options",value:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}]),F.value++},g=()=>{var e,o;d(F)%2==0?null==(e=d(_))||e.addSchema({field:`field${d(F)}`,label:`${D("formDemo.input")}${d(F)}`,component:"Input"}):null==(o=d(_))||o.addSchema({field:`field${d(F)}`,label:`${D("formDemo.input")}${d(F)}`,component:"Input"},d(F)),F.value++},R=()=>{var e,o;const l=null==(e=d(_))?void 0:e.getElFormRef();null==(o=null==l?void 0:l.validate())||o.catch((()=>{}))},S=()=>{var e;const o=null==(e=d(_))?void 0:e.getElFormRef();null==o||o.resetFields()};return(l,t)=>(m(),r(c,null,[f(d(o),{title:`RefForm ${d(D)("formDemo.operate")}`},{default:n((()=>[f(d(u),{onClick:t[0]||(t[0]=e=>k(150))},{default:n((()=>[s(p(d(D)("formDemo.change"))+" labelWidth",1)])),_:1}),f(d(u),{onClick:t[1]||(t[1]=e=>k("auto"))},{default:n((()=>[s(p(d(D)("formDemo.restore"))+" labelWidth",1)])),_:1}),f(d(u),{onClick:t[2]||(t[2]=e=>h("large"))},{default:n((()=>[s(p(d(D)("formDemo.change"))+" size",1)])),_:1}),f(d(u),{onClick:t[3]||(t[3]=e=>h("default"))},{default:n((()=>[s(p(d(D)("formDemo.restore"))+" size",1)])),_:1}),f(d(u),{onClick:t[4]||(t[4]=e=>C(!0))},{default:n((()=>[s(p(d(D)("formDemo.disabled")),1)])),_:1}),f(d(u),{onClick:t[5]||(t[5]=e=>C(!1))},{default:n((()=>[s(p(d(D)("formDemo.disablement")),1)])),_:1}),f(d(u),{onClick:t[6]||(t[6]=e=>P(!0))},{default:n((()=>[s(p(d(D)("formDemo.delete"))+" "+p(d(D)("formDemo.select")),1)])),_:1}),f(d(u),{onClick:t[7]||(t[7]=e=>P(!1))},{default:n((()=>[s(p(d(D)("formDemo.add"))+" "+p(d(D)("formDemo.select")),1)])),_:1}),f(d(u),{onClick:t[8]||(t[8]=e=>x(!1))},{default:n((()=>[s(p(d(D)("formDemo.setValue")),1)])),_:1}),f(d(u),{onClick:t[9]||(t[9]=e=>x(!0))},{default:n((()=>[s(p(d(D)("formDemo.resetValue")),1)])),_:1}),f(d(u),{onClick:$},{default:n((()=>[s(p(d(D)("formDemo.set"))+" "+p(d(D)("formDemo.select"))+" label ",1)])),_:1}),f(d(u),{onClick:g},{default:n((()=>[s(p(d(D)("formDemo.add"))+" "+p(d(D)("formDemo.subitem")),1)])),_:1}),f(d(u),{onClick:R},{default:n((()=>[s(p(d(D)("formDemo.formValidation")),1)])),_:1}),f(d(u),{onClick:S},{default:n((()=>[s(p(d(D)("formDemo.verifyReset")),1)])),_:1})])),_:1},8,["title"]),f(d(o),{title:`RefForm ${d(D)("formDemo.example")}`},{default:n((()=>[f(d(e),{schema:j,ref_key:"formRef",ref:_},null,8,["schema"])])),_:1},8,["title"])],64))}});export{v as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVmRm9ybS44ZWU3YzEwYi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZpZXdzL0NvbXBvbmVudHMvRm9ybS9SZWZGb3JtLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgRm9ybSwgRm9ybUV4cG9zZSB9IGZyb20gJ0AvY29tcG9uZW50cy9Gb3JtJ1xuaW1wb3J0IHsgQ29udGVudFdyYXAgfSBmcm9tICdAL2NvbXBvbmVudHMvQ29udGVudFdyYXAnXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAnQC9ob29rcy93ZWIvdXNlSTE4bidcbmltcG9ydCB7IHJlYWN0aXZlLCB1bnJlZiwgcmVmIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgRWxCdXR0b24gfSBmcm9tICdlbGVtZW50LXBsdXMnXG5pbXBvcnQgeyB1c2VWYWxpZGF0b3IgfSBmcm9tICdAL2hvb2tzL3dlYi91c2VWYWxpZGF0b3InXG5cbmNvbnN0IHsgcmVxdWlyZWQgfSA9IHVzZVZhbGlkYXRvcigpXG5cbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpXG5cbmNvbnN0IHNjaGVtYSA9IHJlYWN0aXZlPEZvcm1TY2hlbWFbXT4oW1xuICB7XG4gICAgZmllbGQ6ICdmaWVsZDEnLFxuICAgIGxhYmVsOiB0KCdmb3JtRGVtby5pbnB1dCcpLFxuICAgIGNvbXBvbmVudDogJ0lucHV0JyxcbiAgICBmb3JtSXRlbVByb3BzOiB7XG4gICAgICBydWxlczogW3JlcXVpcmVkKCldXG4gICAgfVxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdmaWVsZDInLFxuICAgIGxhYmVsOiB0KCdmb3JtRGVtby5zZWxlY3QnKSxcbiAgICBjb21wb25lbnQ6ICdTZWxlY3QnLFxuICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ29wdGlvbjEnLFxuICAgICAgICAgIHZhbHVlOiAnMSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnb3B0aW9uMicsXG4gICAgICAgICAgdmFsdWU6ICcyJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdmaWVsZDMnLFxuICAgIGxhYmVsOiB0KCdmb3JtRGVtby5yYWRpbycpLFxuICAgIGNvbXBvbmVudDogJ1JhZGlvJyxcbiAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdvcHRpb24tMScsXG4gICAgICAgICAgdmFsdWU6ICcxJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdvcHRpb24tMicsXG4gICAgICAgICAgdmFsdWU6ICcyJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdmaWVsZDQnLFxuICAgIGxhYmVsOiB0KCdmb3JtRGVtby5jaGVja2JveCcpLFxuICAgIGNvbXBvbmVudDogJ0NoZWNrYm94JyxcbiAgICB2YWx1ZTogW10sXG4gICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnb3B0aW9uLTEnLFxuICAgICAgICAgIHZhbHVlOiAnMSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnb3B0aW9uLTInLFxuICAgICAgICAgIHZhbHVlOiAnMidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnb3B0aW9uLTMnLFxuICAgICAgICAgIHZhbHVlOiAnMydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAge1xuICAgIGZpZWxkOiAnZmllbGQ1JyxcbiAgICBjb21wb25lbnQ6ICdEYXRlUGlja2VyJyxcbiAgICBsYWJlbDogdCgnZm9ybURlbW8uZGF0ZVBpY2tlcicpLFxuICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICB0eXBlOiAnZGF0ZSdcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBmaWVsZDogJ2ZpZWxkNicsXG4gICAgY29tcG9uZW50OiAnVGltZVNlbGVjdCcsXG4gICAgbGFiZWw6IHQoJ2Zvcm1EZW1vLnRpbWVTZWxlY3QnKVxuICB9XG5dKVxuXG5jb25zdCBmb3JtUmVmID0gcmVmPEZvcm1FeHBvc2U+KClcblxuY29uc3QgY2hhbmdlTGFiZWxXaWR0aCA9ICh3aWR0aDogbnVtYmVyIHwgc3RyaW5nKSA9PiB7XG4gIHVucmVmKGZvcm1SZWYpPy5zZXRQcm9wcyh7XG4gICAgbGFiZWxXaWR0aDogd2lkdGhcbiAgfSlcbn1cblxuY29uc3QgY2hhbmdlU2l6ZSA9IChzaXplOiBzdHJpbmcpID0+IHtcbiAgdW5yZWYoZm9ybVJlZik/LnNldFByb3BzKHtcbiAgICBzaXplXG4gIH0pXG59XG5cbmNvbnN0IGNoYW5nZURpc2FibGVkID0gKGJvb2w6IGJvb2xlYW4pID0+IHtcbiAgdW5yZWYoZm9ybVJlZik/LnNldFByb3BzKHtcbiAgICBkaXNhYmxlZDogYm9vbFxuICB9KVxufVxuXG5jb25zdCBjaGFuZ2VTY2hlbWEgPSAoZGVsOiBib29sZWFuKSA9PiB7XG4gIGlmIChkZWwpIHtcbiAgICB1bnJlZihmb3JtUmVmKT8uZGVsU2NoZW1hKCdmaWVsZDInKVxuICB9IGVsc2UgaWYgKCFkZWwgJiYgc2NoZW1hWzFdLmZpZWxkICE9PSAnZmllbGQyJykge1xuICAgIHVucmVmKGZvcm1SZWYpPy5hZGRTY2hlbWEoXG4gICAgICB7XG4gICAgICAgIGZpZWxkOiAnZmllbGQyJyxcbiAgICAgICAgbGFiZWw6IHQoJ2Zvcm1EZW1vLnNlbGVjdCcpLFxuICAgICAgICBjb21wb25lbnQ6ICdTZWxlY3QnLFxuICAgICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6ICdvcHRpb24xJyxcbiAgICAgICAgICAgICAgdmFsdWU6ICcxJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6ICdvcHRpb24yJyxcbiAgICAgICAgICAgICAgdmFsdWU6ICcyJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIDFcbiAgICApXG4gIH1cbn1cblxuY29uc3Qgc2V0VmFsdWUgPSAocmVzZXQ6IGJvb2xlYW4pID0+IHtcbiAgY29uc3QgZWxGb3JtUmVmID0gdW5yZWYoZm9ybVJlZik/LmdldEVsRm9ybVJlZigpXG4gIGlmIChyZXNldCkge1xuICAgIGVsRm9ybVJlZj8ucmVzZXRGaWVsZHMoKVxuICB9IGVsc2Uge1xuICAgIHVucmVmKGZvcm1SZWYpPy5zZXRWYWx1ZXMoe1xuICAgICAgZmllbGQxOiAnZmllbGQxJyxcbiAgICAgIGZpZWxkMjogJzInLFxuICAgICAgZmllbGQzOiAnMicsXG4gICAgICBmaWVsZDQ6IFsnMScsICczJ10sXG4gICAgICBmaWVsZDU6ICcyMDIyLTAxLTI3JyxcbiAgICAgIGZpZWxkNjogJzE3OjAwJ1xuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgaW5kZXggPSByZWYoNylcblxuY29uc3Qgc2V0TGFiZWwgPSAoKSA9PiB7XG4gIHVucmVmKGZvcm1SZWYpPy5zZXRTY2hlbWEoW1xuICAgIHtcbiAgICAgIGZpZWxkOiAnZmllbGQyJyxcbiAgICAgIHBhdGg6ICdsYWJlbCcsXG4gICAgICB2YWx1ZTogYCR7dCgnZm9ybURlbW8uc2VsZWN0Jyl9ICR7aW5kZXgudmFsdWV9YFxuICAgIH0sXG4gICAge1xuICAgICAgZmllbGQ6ICdmaWVsZDInLFxuICAgICAgcGF0aDogJ2NvbXBvbmVudFByb3BzLm9wdGlvbnMnLFxuICAgICAgdmFsdWU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnb3B0aW9uLTEnLFxuICAgICAgICAgIHZhbHVlOiAnMSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnb3B0aW9uLTInLFxuICAgICAgICAgIHZhbHVlOiAnMidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnb3B0aW9uLTMnLFxuICAgICAgICAgIHZhbHVlOiAnMydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSlcbiAgaW5kZXgudmFsdWUrK1xufVxuXG5jb25zdCBhZGRJdGVtID0gKCkgPT4ge1xuICBpZiAodW5yZWYoaW5kZXgpICUgMiA9PT0gMCkge1xuICAgIHVucmVmKGZvcm1SZWYpPy5hZGRTY2hlbWEoe1xuICAgICAgZmllbGQ6IGBmaWVsZCR7dW5yZWYoaW5kZXgpfWAsXG4gICAgICBsYWJlbDogYCR7dCgnZm9ybURlbW8uaW5wdXQnKX0ke3VucmVmKGluZGV4KX1gLFxuICAgICAgY29tcG9uZW50OiAnSW5wdXQnXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICB1bnJlZihmb3JtUmVmKT8uYWRkU2NoZW1hKFxuICAgICAge1xuICAgICAgICBmaWVsZDogYGZpZWxkJHt1bnJlZihpbmRleCl9YCxcbiAgICAgICAgbGFiZWw6IGAke3QoJ2Zvcm1EZW1vLmlucHV0Jyl9JHt1bnJlZihpbmRleCl9YCxcbiAgICAgICAgY29tcG9uZW50OiAnSW5wdXQnXG4gICAgICB9LFxuICAgICAgdW5yZWYoaW5kZXgpXG4gICAgKVxuICB9XG4gIGluZGV4LnZhbHVlKytcbn1cblxuY29uc3QgZm9ybVZhbGlkYXRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGVsRm9ybVJlZiA9IHVucmVmKGZvcm1SZWYpPy5nZXRFbEZvcm1SZWYoKVxuICBlbEZvcm1SZWY/LnZhbGlkYXRlKCk/LmNhdGNoKCgpID0+IHt9KVxufVxuXG5jb25zdCB2ZXJpZnlSZXNldCA9ICgpID0+IHtcbiAgY29uc3QgZWxGb3JtUmVmID0gdW5yZWYoZm9ybVJlZik/LmdldEVsRm9ybVJlZigpXG4gIGVsRm9ybVJlZj8ucmVzZXRGaWVsZHMoKVxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPENvbnRlbnRXcmFwIDp0aXRsZT1cImBSZWZGb3JtICR7dCgnZm9ybURlbW8ub3BlcmF0ZScpfWBcIj5cbiAgICA8RWxCdXR0b24gQGNsaWNrPVwiY2hhbmdlTGFiZWxXaWR0aCgxNTApXCI+e3sgdCgnZm9ybURlbW8uY2hhbmdlJykgfX0gbGFiZWxXaWR0aDwvRWxCdXR0b24+XG4gICAgPEVsQnV0dG9uIEBjbGljaz1cImNoYW5nZUxhYmVsV2lkdGgoJ2F1dG8nKVwiPnt7IHQoJ2Zvcm1EZW1vLnJlc3RvcmUnKSB9fSBsYWJlbFdpZHRoPC9FbEJ1dHRvbj5cblxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJjaGFuZ2VTaXplKCdsYXJnZScpXCI+e3sgdCgnZm9ybURlbW8uY2hhbmdlJykgfX0gc2l6ZTwvRWxCdXR0b24+XG4gICAgPEVsQnV0dG9uIEBjbGljaz1cImNoYW5nZVNpemUoJ2RlZmF1bHQnKVwiPnt7IHQoJ2Zvcm1EZW1vLnJlc3RvcmUnKSB9fSBzaXplPC9FbEJ1dHRvbj5cblxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJjaGFuZ2VEaXNhYmxlZCh0cnVlKVwiPnt7IHQoJ2Zvcm1EZW1vLmRpc2FibGVkJykgfX08L0VsQnV0dG9uPlxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJjaGFuZ2VEaXNhYmxlZChmYWxzZSlcIj57eyB0KCdmb3JtRGVtby5kaXNhYmxlbWVudCcpIH19PC9FbEJ1dHRvbj5cblxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJjaGFuZ2VTY2hlbWEodHJ1ZSlcIj5cbiAgICAgIHt7IHQoJ2Zvcm1EZW1vLmRlbGV0ZScpIH19IHt7IHQoJ2Zvcm1EZW1vLnNlbGVjdCcpIH19XG4gICAgPC9FbEJ1dHRvbj5cbiAgICA8RWxCdXR0b24gQGNsaWNrPVwiY2hhbmdlU2NoZW1hKGZhbHNlKVwiPlxuICAgICAge3sgdCgnZm9ybURlbW8uYWRkJykgfX0ge3sgdCgnZm9ybURlbW8uc2VsZWN0JykgfX1cbiAgICA8L0VsQnV0dG9uPlxuXG4gICAgPEVsQnV0dG9uIEBjbGljaz1cInNldFZhbHVlKGZhbHNlKVwiPnt7IHQoJ2Zvcm1EZW1vLnNldFZhbHVlJykgfX08L0VsQnV0dG9uPlxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJzZXRWYWx1ZSh0cnVlKVwiPnt7IHQoJ2Zvcm1EZW1vLnJlc2V0VmFsdWUnKSB9fTwvRWxCdXR0b24+XG5cbiAgICA8RWxCdXR0b24gQGNsaWNrPVwic2V0TGFiZWxcIj5cbiAgICAgIHt7IHQoJ2Zvcm1EZW1vLnNldCcpIH19IHt7IHQoJ2Zvcm1EZW1vLnNlbGVjdCcpIH19IGxhYmVsXG4gICAgPC9FbEJ1dHRvbj5cblxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJhZGRJdGVtXCI+IHt7IHQoJ2Zvcm1EZW1vLmFkZCcpIH19IHt7IHQoJ2Zvcm1EZW1vLnN1Yml0ZW0nKSB9fSA8L0VsQnV0dG9uPlxuXG4gICAgPEVsQnV0dG9uIEBjbGljaz1cImZvcm1WYWxpZGF0aW9uXCI+IHt7IHQoJ2Zvcm1EZW1vLmZvcm1WYWxpZGF0aW9uJykgfX0gPC9FbEJ1dHRvbj5cbiAgICA8RWxCdXR0b24gQGNsaWNrPVwidmVyaWZ5UmVzZXRcIj4ge3sgdCgnZm9ybURlbW8udmVyaWZ5UmVzZXQnKSB9fSA8L0VsQnV0dG9uPlxuICA8L0NvbnRlbnRXcmFwPlxuICA8Q29udGVudFdyYXAgOnRpdGxlPVwiYFJlZkZvcm0gJHt0KCdmb3JtRGVtby5leGFtcGxlJyl9YFwiPlxuICAgIDxGb3JtIDpzY2hlbWE9XCJzY2hlbWFcIiByZWY9XCJmb3JtUmVmXCIgLz5cbiAgPC9Db250ZW50V3JhcD5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsicmVxdWlyZWQiLCJ1c2VWYWxpZGF0b3IiLCJ0IiwidXNlSTE4biIsInNjaGVtYSIsInJlYWN0aXZlIiwiZmllbGQiLCJsYWJlbCIsImNvbXBvbmVudCIsImZvcm1JdGVtUHJvcHMiLCJydWxlcyIsImNvbXBvbmVudFByb3BzIiwib3B0aW9ucyIsInZhbHVlIiwidHlwZSIsImZvcm1SZWYiLCJyZWYiLCJjaGFuZ2VMYWJlbFdpZHRoIiwid2lkdGgiLCJfYSIsInVucmVmIiwic2V0UHJvcHMiLCJsYWJlbFdpZHRoIiwiY2hhbmdlU2l6ZSIsInNpemUiLCJjaGFuZ2VEaXNhYmxlZCIsImJvb2wiLCJkaXNhYmxlZCIsImNoYW5nZVNjaGVtYSIsImRlbCIsImRlbFNjaGVtYSIsIl9iIiwiYWRkU2NoZW1hIiwic2V0VmFsdWUiLCJyZXNldCIsImVsRm9ybVJlZiIsImdldEVsRm9ybVJlZiIsInJlc2V0RmllbGRzIiwic2V0VmFsdWVzIiwiZmllbGQxIiwiZmllbGQyIiwiZmllbGQzIiwiZmllbGQ0IiwiZmllbGQ1IiwiZmllbGQ2IiwiaW5kZXgiLCJzZXRMYWJlbCIsInNldFNjaGVtYSIsInBhdGgiLCJhZGRJdGVtIiwiZm9ybVZhbGlkYXRpb24iLCJ2YWxpZGF0ZSIsImNhdGNoIiwidmVyaWZ5UmVzZXQiXSwibWFwcGluZ3MiOiJ1Z0NBUU0sTUFBQUEsU0FBRUEsR0FBYUMsS0FFZkMsRUFBRUEsR0FBTUMsSUFFUkMsRUFBU0MsRUFBdUIsQ0FDcEMsQ0FDRUMsTUFBTyxTQUNQQyxNQUFPTCxFQUFFLGtCQUNUTSxVQUFXLFFBQ1hDLGNBQWUsQ0FDYkMsTUFBTyxDQUFDVixPQUdaLENBQ0VNLE1BQU8sU0FDUEMsTUFBT0wsRUFBRSxtQkFDVE0sVUFBVyxTQUNYRyxlQUFnQixDQUNkQyxRQUFTLENBQ1AsQ0FDRUwsTUFBTyxVQUNQTSxNQUFPLEtBRVQsQ0FDRU4sTUFBTyxVQUNQTSxNQUFPLFFBS2YsQ0FDRVAsTUFBTyxTQUNQQyxNQUFPTCxFQUFFLGtCQUNUTSxVQUFXLFFBQ1hHLGVBQWdCLENBQ2RDLFFBQVMsQ0FDUCxDQUNFTCxNQUFPLFdBQ1BNLE1BQU8sS0FFVCxDQUNFTixNQUFPLFdBQ1BNLE1BQU8sUUFLZixDQUNFUCxNQUFPLFNBQ1BDLE1BQU9MLEVBQUUscUJBQ1RNLFVBQVcsV0FDWEssTUFBTyxHQUNQRixlQUFnQixDQUNkQyxRQUFTLENBQ1AsQ0FDRUwsTUFBTyxXQUNQTSxNQUFPLEtBRVQsQ0FDRU4sTUFBTyxXQUNQTSxNQUFPLEtBRVQsQ0FD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