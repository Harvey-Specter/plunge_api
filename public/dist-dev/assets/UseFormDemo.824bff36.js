import{F as e}from"./Form.500af622.js";import{_ as o}from"./ContentWrap.851f508f.js";import{d as l,l as t,s as i,r as a,o as m,c as r,g as s,w as n,a as d,x as f,t as p,G as c}from"./index.63ad27ed.js";import{u}from"./useForm.9162035b.js";import{E as b}from"./el-button.6bb32269.js";import{u as D}from"./useValidator.2b765fd2.js";import"./el-col.29973b17.js";import"./typescript2.0e462989.js";import"./el-popper.2e0f947e.js";import"./index2.06b96e43.js";import"./el-input.ec3b36be.js";import"./event2.1741f333.js";import"./index2.f758414f.js";import"./el-tag.1976bda3.js";import"./tsxHelper.7f51eaea.js";import"./index2.d473352e.js";import"./scroll2.2b4a5172.js";import"./debounce.ac76efe8.js";import"./validator2.9626479b.js";import"./el-input-number.18339b90.js";import"./el-switch.0944b706.js";import"./el-divider.3c26984a.js";import"./InputPassword.6d2c7405.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.e5525c5f.js";import"./aria2.b5095a02.js";import"./browser2.47d88281.js";import"./el-card.9f27dd59.js";const j=l({__name:"UseFormDemo",setup(l){const{required:j}=D(),{t:v}=t(),_=i([{field:"field1",label:v("formDemo.input"),component:"Input",formItemProps:{rules:[j()]}},{field:"field2",label:v("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},{field:"field3",label:v("formDemo.radio"),component:"Radio",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:v("formDemo.checkbox"),component:"Checkbox",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}},{field:"field5",component:"DatePicker",label:v("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:v("formDemo.timeSelect")}]),{register:k,methods:h,elFormRef:C}=u({schema:_}),P=e=>{const{setProps:o}=h;o({labelWidth:e})},x=e=>{const{setProps:o}=h;o({size:e})},g=e=>{const{setProps:o}=h;o({disabled:e})},$=e=>{const{delSchema:o,addSchema:l}=h;e?o("field2"):e||"field2"===_[1].field||l({field:"field2",label:v("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},1)},F=e=>{var o;const{setValues:l}=h;e?null==(o=d(C))||o.resetFields():l({field1:"field1",field2:"2",field3:"2",field4:["1","3"],field5:"2022-01-27",field6:"17:00"})},S=a(7),I=()=>{const{setSchema:e}=h;e([{field:"field2",path:"label",value:`${v("formDemo.select")} ${S.value}`},{field:"field2",path:"componentProps.options",value:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}]),S.value++},R=()=>{const{addSchema:e}=h;d(S)%2==0?e({field:`field${d(S)}`,label:`${v("formDemo.input")}${d(S)}`,component:"Input"}):e({field:`field${d(S)}`,label:`${v("formDemo.input")}${d(S)}`,component:"Input"},d(S)),S.value++},V=()=>{d(C).validate((e=>{console.log(e)}))},w=()=>{var e;null==(e=d(C))||e.resetFields()};return(l,t)=>(m(),r(c,null,[s(d(o),{title:`UseForm ${d(v)("formDemo.operate")}`},{default:n((()=>[s(d(b),{onClick:t[0]||(t[0]=e=>P(150))},{default:n((()=>[f(p(d(v)("formDemo.change"))+" labelWidth",1)])),_:1}),s(d(b),{onClick:t[1]||(t[1]=e=>P("auto"))},{default:n((()=>[f(p(d(v)("formDemo.restore"))+" labelWidth",1)])),_:1}),s(d(b),{onClick:t[2]||(t[2]=e=>x("large"))},{default:n((()=>[f(p(d(v)("formDemo.change"))+" size",1)])),_:1}),s(d(b),{onClick:t[3]||(t[3]=e=>x("default"))},{default:n((()=>[f(p(d(v)("formDemo.restore"))+" size",1)])),_:1}),s(d(b),{onClick:t[4]||(t[4]=e=>g(!0))},{default:n((()=>[f(p(d(v)("formDemo.disabled")),1)])),_:1}),s(d(b),{onClick:t[5]||(t[5]=e=>g(!1))},{default:n((()=>[f(p(d(v)("formDemo.disablement")),1)])),_:1}),s(d(b),{onClick:t[6]||(t[6]=e=>$(!0))},{default:n((()=>[f(p(d(v)("formDemo.delete"))+" "+p(d(v)("formDemo.select")),1)])),_:1}),s(d(b),{onClick:t[7]||(t[7]=e=>$(!1))},{default:n((()=>[f(p(d(v)("formDemo.add"))+" "+p(d(v)("formDemo.select")),1)])),_:1}),s(d(b),{onClick:t[8]||(t[8]=e=>F(!1))},{default:n((()=>[f(p(d(v)("formDemo.setValue")),1)])),_:1}),s(d(b),{onClick:t[9]||(t[9]=e=>F(!0))},{default:n((()=>[f(p(d(v)("formDemo.resetValue")),1)])),_:1}),s(d(b),{onClick:I},{default:n((()=>[f(p(d(v)("formDemo.set"))+" "+p(d(v)("formDemo.select"))+" label ",1)])),_:1}),s(d(b),{onClick:R},{default:n((()=>[f(p(d(v)("formDemo.add"))+" "+p(d(v)("formDemo.subitem")),1)])),_:1}),s(d(b),{onClick:V},{default:n((()=>[f(p(d(v)("formDemo.formValidation")),1)])),_:1}),s(d(b),{onClick:w},{default:n((()=>[f(p(d(v)("formDemo.verifyReset")),1)])),_:1})])),_:1},8,["title"]),s(d(o),{title:`UseForm ${d(v)("formDemo.example")}`},{default:n((()=>[s(d(e),{onRegister:d(k)},null,8,["onRegister"])])),_:1},8,["title"])],64))}});export{j as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlRm9ybURlbW8uODI0YmZmMzYuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9Db21wb25lbnRzL0Zvcm0vVXNlRm9ybURlbW8udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdAL2NvbXBvbmVudHMvRm9ybSdcclxuaW1wb3J0IHsgQ29udGVudFdyYXAgfSBmcm9tICdAL2NvbXBvbmVudHMvQ29udGVudFdyYXAnXHJcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICdAL2hvb2tzL3dlYi91c2VJMThuJ1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAnQC9ob29rcy93ZWIvdXNlRm9ybSdcclxuaW1wb3J0IHsgcmVhY3RpdmUsIHVucmVmLCByZWYgfSBmcm9tICd2dWUnXHJcbmltcG9ydCB7IEVsQnV0dG9uIH0gZnJvbSAnZWxlbWVudC1wbHVzJ1xyXG5pbXBvcnQgeyB1c2VWYWxpZGF0b3IgfSBmcm9tICdAL2hvb2tzL3dlYi91c2VWYWxpZGF0b3InXHJcblxyXG5jb25zdCB7IHJlcXVpcmVkIH0gPSB1c2VWYWxpZGF0b3IoKVxyXG5cclxuY29uc3QgeyB0IH0gPSB1c2VJMThuKClcclxuXHJcbmNvbnN0IHNjaGVtYSA9IHJlYWN0aXZlPEZvcm1TY2hlbWFbXT4oW1xyXG4gIHtcclxuICAgIGZpZWxkOiAnZmllbGQxJyxcclxuICAgIGxhYmVsOiB0KCdmb3JtRGVtby5pbnB1dCcpLFxyXG4gICAgY29tcG9uZW50OiAnSW5wdXQnLFxyXG4gICAgZm9ybUl0ZW1Qcm9wczoge1xyXG4gICAgICBydWxlczogW3JlcXVpcmVkKCldXHJcbiAgICB9XHJcbiAgfSxcclxuICB7XHJcbiAgICBmaWVsZDogJ2ZpZWxkMicsXHJcbiAgICBsYWJlbDogdCgnZm9ybURlbW8uc2VsZWN0JyksXHJcbiAgICBjb21wb25lbnQ6ICdTZWxlY3QnLFxyXG4gICAgY29tcG9uZW50UHJvcHM6IHtcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiAnb3B0aW9uMScsXHJcbiAgICAgICAgICB2YWx1ZTogJzEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ29wdGlvbjInLFxyXG4gICAgICAgICAgdmFsdWU6ICcyJ1xyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmllbGQ6ICdmaWVsZDMnLFxyXG4gICAgbGFiZWw6IHQoJ2Zvcm1EZW1vLnJhZGlvJyksXHJcbiAgICBjb21wb25lbnQ6ICdSYWRpbycsXHJcbiAgICBjb21wb25lbnRQcm9wczoge1xyXG4gICAgICBvcHRpb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6ICdvcHRpb24tMScsXHJcbiAgICAgICAgICB2YWx1ZTogJzEnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ29wdGlvbi0yJyxcclxuICAgICAgICAgIHZhbHVlOiAnMidcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9LFxyXG4gIHtcclxuICAgIGZpZWxkOiAnZmllbGQ0JyxcclxuICAgIGxhYmVsOiB0KCdmb3JtRGVtby5jaGVja2JveCcpLFxyXG4gICAgY29tcG9uZW50OiAnQ2hlY2tib3gnLFxyXG4gICAgdmFsdWU6IFtdLFxyXG4gICAgY29tcG9uZW50UHJvcHM6IHtcclxuICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiAnb3B0aW9uLTEnLFxyXG4gICAgICAgICAgdmFsdWU6ICcxJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6ICdvcHRpb24tMicsXHJcbiAgICAgICAgICB2YWx1ZTogJzInXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ29wdGlvbi0zJyxcclxuICAgICAgICAgIHZhbHVlOiAnMydcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9LFxyXG4gIHtcclxuICAgIGZpZWxkOiAnZmllbGQ1JyxcclxuICAgIGNvbXBvbmVudDogJ0RhdGVQaWNrZXInLFxyXG4gICAgbGFiZWw6IHQoJ2Zvcm1EZW1vLmRhdGVQaWNrZXInKSxcclxuICAgIGNvbXBvbmVudFByb3BzOiB7XHJcbiAgICAgIHR5cGU6ICdkYXRlJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAge1xyXG4gICAgZmllbGQ6ICdmaWVsZDYnLFxyXG4gICAgY29tcG9uZW50OiAnVGltZVNlbGVjdCcsXHJcbiAgICBsYWJlbDogdCgnZm9ybURlbW8udGltZVNlbGVjdCcpXHJcbiAgfVxyXG5dKVxyXG5cclxuY29uc3QgeyByZWdpc3RlciwgbWV0aG9kcywgZWxGb3JtUmVmIH0gPSB1c2VGb3JtKHtcclxuICBzY2hlbWFcclxufSlcclxuXHJcbmNvbnN0IGNoYW5nZUxhYmVsV2lkdGggPSAod2lkdGg6IG51bWJlciB8IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IHsgc2V0UHJvcHMgfSA9IG1ldGhvZHNcclxuICBzZXRQcm9wcyh7XHJcbiAgICBsYWJlbFdpZHRoOiB3aWR0aFxyXG4gIH0pXHJcbn1cclxuXHJcbmNvbnN0IGNoYW5nZVNpemUgPSAoc2l6ZTogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgeyBzZXRQcm9wcyB9ID0gbWV0aG9kc1xyXG4gIHNldFByb3BzKHtcclxuICAgIHNpemVcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCBjaGFuZ2VEaXNhYmxlZCA9IChib29sOiBib29sZWFuKSA9PiB7XHJcbiAgY29uc3QgeyBzZXRQcm9wcyB9ID0gbWV0aG9kc1xyXG4gIHNldFByb3BzKHtcclxuICAgIGRpc2FibGVkOiBib29sXHJcbiAgfSlcclxufVxyXG5cclxuY29uc3QgY2hhbmdlU2NoZW1hID0gKGRlbDogYm9vbGVhbikgPT4ge1xyXG4gIGNvbnN0IHsgZGVsU2NoZW1hLCBhZGRTY2hlbWEgfSA9IG1ldGhvZHNcclxuICBpZiAoZGVsKSB7XHJcbiAgICBkZWxTY2hlbWEoJ2ZpZWxkMicpXHJcbiAgfSBlbHNlIGlmICghZGVsICYmIHNjaGVtYVsxXS5maWVsZCAhPT0gJ2ZpZWxkMicpIHtcclxuICAgIGFkZFNjaGVtYShcclxuICAgICAge1xyXG4gICAgICAgIGZpZWxkOiAnZmllbGQyJyxcclxuICAgICAgICBsYWJlbDogdCgnZm9ybURlbW8uc2VsZWN0JyksXHJcbiAgICAgICAgY29tcG9uZW50OiAnU2VsZWN0JyxcclxuICAgICAgICBjb21wb25lbnRQcm9wczoge1xyXG4gICAgICAgICAgb3B0aW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6ICdvcHRpb24xJyxcclxuICAgICAgICAgICAgICB2YWx1ZTogJzEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogJ29wdGlvbjInLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiAnMidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgMVxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc2V0VmFsdWUgPSAocmVzZXQ6IGJvb2xlYW4pID0+IHtcclxuICBjb25zdCB7IHNldFZhbHVlcyB9ID0gbWV0aG9kc1xyXG4gIGlmIChyZXNldCkge1xyXG4gICAgdW5yZWYoZWxGb3JtUmVmKT8ucmVzZXRGaWVsZHMoKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBzZXRWYWx1ZXMoe1xyXG4gICAgICBmaWVsZDE6ICdmaWVsZDEnLFxyXG4gICAgICBmaWVsZDI6ICcyJyxcclxuICAgICAgZmllbGQzOiAnMicsXHJcbiAgICAgIGZpZWxkNDogWycxJywgJzMnXSxcclxuICAgICAgZmllbGQ1OiAnMjAyMi0wMS0yNycsXHJcbiAgICAgIGZpZWxkNjogJzE3OjAwJ1xyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGluZGV4ID0gcmVmKDcpXHJcblxyXG5jb25zdCBzZXRMYWJlbCA9ICgpID0+IHtcclxuICBjb25zdCB7IHNldFNjaGVtYSB9ID0gbWV0aG9kc1xyXG4gIHNldFNjaGVtYShbXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnZmllbGQyJyxcclxuICAgICAgcGF0aDogJ2xhYmVsJyxcclxuICAgICAgdmFsdWU6IGAke3QoJ2Zvcm1EZW1vLnNlbGVjdCcpfSAke2luZGV4LnZhbHVlfWBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnZmllbGQyJyxcclxuICAgICAgcGF0aDogJ2NvbXBvbmVudFByb3BzLm9wdGlvbnMnLFxyXG4gICAgICB2YWx1ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhYmVsOiAnb3B0aW9uLTEnLFxyXG4gICAgICAgICAgdmFsdWU6ICcxJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWw6ICdvcHRpb24tMicsXHJcbiAgICAgICAgICB2YWx1ZTogJzInXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbDogJ29wdGlvbi0zJyxcclxuICAgICAgICAgIHZhbHVlOiAnMydcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICBdKVxyXG4gIGluZGV4LnZhbHVlKytcclxufVxyXG5cclxuY29uc3QgYWRkSXRlbSA9ICgpID0+IHtcclxuICBjb25zdCB7IGFkZFNjaGVtYSB9ID0gbWV0aG9kc1xyXG4gIGlmICh1bnJlZihpbmRleCkgJSAyID09PSAwKSB7XHJcbiAgICBhZGRTY2hlbWEoe1xyXG4gICAgICBmaWVsZDogYGZpZWxkJHt1bnJlZihpbmRleCl9YCxcclxuICAgICAgbGFiZWw6IGAke3QoJ2Zvcm1EZW1vLmlucHV0Jyl9JHt1bnJlZihpbmRleCl9YCxcclxuICAgICAgY29tcG9uZW50OiAnSW5wdXQnXHJcbiAgICB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBhZGRTY2hlbWEoXHJcbiAgICAgIHtcclxuICAgICAgICBmaWVsZDogYGZpZWxkJHt1bnJlZihpbmRleCl9YCxcclxuICAgICAgICBsYWJlbDogYCR7dCgnZm9ybURlbW8uaW5wdXQnKX0ke3VucmVmKGluZGV4KX1gLFxyXG4gICAgICAgIGNvbXBvbmVudDogJ0lucHV0J1xyXG4gICAgICB9LFxyXG4gICAgICB1bnJlZihpbmRleClcclxuICAgIClcclxuICB9XHJcbiAgaW5kZXgudmFsdWUrK1xyXG59XHJcblxyXG5jb25zdCBmb3JtVmFsaWRhdGlvbiA9ICgpID0+IHtcclxuICB1bnJlZihlbEZvcm1SZWYpIS52YWxpZGF0ZSgoaXNWYWxpZCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaXNWYWxpZClcclxuICB9KVxyXG59XHJcblxyXG5jb25zdCB2ZXJpZnlSZXNldCA9ICgpID0+IHtcclxuICB1bnJlZihlbEZvcm1SZWYpPy5yZXNldEZpZWxkcygpXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPENvbnRlbnRXcmFwIDp0aXRsZT1cImBVc2VGb3JtICR7dCgnZm9ybURlbW8ub3BlcmF0ZScpfWBcIj5cclxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJjaGFuZ2VMYWJlbFdpZHRoKDE1MClcIj57eyB0KCdmb3JtRGVtby5jaGFuZ2UnKSB9fSBsYWJlbFdpZHRoPC9FbEJ1dHRvbj5cclxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJjaGFuZ2VMYWJlbFdpZHRoKCdhdXRvJylcIj57eyB0KCdmb3JtRGVtby5yZXN0b3JlJykgfX0gbGFiZWxXaWR0aDwvRWxCdXR0b24+XHJcblxyXG4gICAgPEVsQnV0dG9uIEBjbGljaz1cImNoYW5nZVNpemUoJ2xhcmdlJylcIj57eyB0KCdmb3JtRGVtby5jaGFuZ2UnKSB9fSBzaXplPC9FbEJ1dHRvbj5cclxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJjaGFuZ2VTaXplKCdkZWZhdWx0JylcIj57eyB0KCdmb3JtRGVtby5yZXN0b3JlJykgfX0gc2l6ZTwvRWxCdXR0b24+XHJcblxyXG4gICAgPEVsQnV0dG9uIEBjbGljaz1cImNoYW5nZURpc2FibGVkKHRydWUpXCI+e3sgdCgnZm9ybURlbW8uZGlzYWJsZWQnKSB9fTwvRWxCdXR0b24+XHJcbiAgICA8RWxCdXR0b24gQGNsaWNrPVwiY2hhbmdlRGlzYWJsZWQoZmFsc2UpXCI+e3sgdCgnZm9ybURlbW8uZGlzYWJsZW1lbnQnKSB9fTwvRWxCdXR0b24+XHJcblxyXG4gICAgPEVsQnV0dG9uIEBjbGljaz1cImNoYW5nZVNjaGVtYSh0cnVlKVwiPlxyXG4gICAgICB7eyB0KCdmb3JtRGVtby5kZWxldGUnKSB9fSB7eyB0KCdmb3JtRGVtby5zZWxlY3QnKSB9fVxyXG4gICAgPC9FbEJ1dHRvbj5cclxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJjaGFuZ2VTY2hlbWEoZmFsc2UpXCI+XHJcbiAgICAgIHt7IHQoJ2Zvcm1EZW1vLmFkZCcpIH19IHt7IHQoJ2Zvcm1EZW1vLnNlbGVjdCcpIH19XHJcbiAgICA8L0VsQnV0dG9uPlxyXG5cclxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJzZXRWYWx1ZShmYWxzZSlcIj57eyB0KCdmb3JtRGVtby5zZXRWYWx1ZScpIH19PC9FbEJ1dHRvbj5cclxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJzZXRWYWx1ZSh0cnVlKVwiPnt7IHQoJ2Zvcm1EZW1vLnJlc2V0VmFsdWUnKSB9fTwvRWxCdXR0b24+XHJcblxyXG4gICAgPEVsQnV0dG9uIEBjbGljaz1cInNldExhYmVsXCI+XHJcbiAgICAgIHt7IHQoJ2Zvcm1EZW1vLnNldCcpIH19IHt7IHQoJ2Zvcm1EZW1vLnNlbGVjdCcpIH19IGxhYmVsXHJcbiAgICA8L0VsQnV0dG9uPlxyXG5cclxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJhZGRJdGVtXCI+IHt7IHQoJ2Zvcm1EZW1vLmFkZCcpIH19IHt7IHQoJ2Zvcm1EZW1vLnN1Yml0ZW0nKSB9fSA8L0VsQnV0dG9uPlxyXG5cclxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJmb3JtVmFsaWRhdGlvblwiPiB7eyB0KCdmb3JtRGVtby5mb3JtVmFsaWRhdGlvbicpIH19IDwvRWxCdXR0b24+XHJcbiAgICA8RWxCdXR0b24gQGNsaWNrPVwidmVyaWZ5UmVzZXRcIj4ge3sgdCgnZm9ybURlbW8udmVyaWZ5UmVzZXQnKSB9fSA8L0VsQnV0dG9uPlxyXG4gIDwvQ29udGVudFdyYXA+XHJcbiAgPENvbnRlbnRXcmFwIDp0aXRsZT1cImBVc2VGb3JtICR7dCgnZm9ybURlbW8uZXhhbXBsZScpfWBcIj5cclxuICAgIDxGb3JtIEByZWdpc3Rlcj1cInJlZ2lzdGVyXCIgLz5cclxuICA8L0NvbnRlbnRXcmFwPlxyXG48L3RlbXBsYXRlPlxyXG4iXSwibmFtZXMiOlsicmVxdWlyZWQiLCJ1c2VWYWxpZGF0b3IiLCJ0IiwidXNlSTE4biIsInNjaGVtYSIsInJlYWN0aXZlIiwiZmllbGQiLCJsYWJlbCIsImNvbXBvbmVudCIsImZvcm1JdGVtUHJvcHMiLCJydWxlcyIsImNvbXBvbmVudFByb3BzIiwib3B0aW9ucyIsInZhbHVlIiwidHlwZSIsInJlZ2lzdGVyIiwibWV0aG9kcyIsImVsRm9ybVJlZiIsInVzZUZvcm0iLCJjaGFuZ2VMYWJlbFdpZHRoIiwid2lkdGgiLCJzZXRQcm9wcyIsImxhYmVsV2lkdGgiLCJjaGFuZ2VTaXplIiwic2l6ZSIsImNoYW5nZURpc2FibGVkIiwiYm9vbCIsImRpc2FibGVkIiwiY2hhbmdlU2NoZW1hIiwiZGVsIiwiZGVsU2NoZW1hIiwiYWRkU2NoZW1hIiwic2V0VmFsdWUiLCJyZXNldCIsInNldFZhbHVlcyIsIl9hIiwidW5yZWYiLCJyZXNldEZpZWxkcyIsImZpZWxkMSIsImZpZWxkMiIsImZpZWxkMyIsImZpZWxkNCIsImZpZWxkNSIsImZpZWxkNiIsImluZGV4IiwicmVmIiwic2V0TGFiZWwiLCJzZXRTY2hlbWEiLCJwYXRoIiwiYWRkSXRlbSIsImZvcm1WYWxpZGF0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
