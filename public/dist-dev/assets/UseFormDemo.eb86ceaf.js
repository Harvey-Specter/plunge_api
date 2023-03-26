import{F as e}from"./Form.9f3ad28e.js";import{_ as o}from"./ContentWrap.93253eae.js";import{d as l,k as t,s as a,r as i,o as m,c as r,g as s,w as d,a as f,x as n,t as p,G as c}from"./index.f2e05143.js";import{u}from"./useForm.2045d6ea.js";import{E as b}from"./el-button.c85984df.js";import{u as D}from"./useValidator.61d7760c.js";import"./el-col.ae597e62.js";import"./typescript2.0e462989.js";import"./el-popper.7090df9f.js";import"./index2.bac0fa94.js";import"./el-input.2911c078.js";import"./event2.1741f333.js";import"./index2.7bbd87c9.js";import"./el-tag.1d3a3f94.js";import"./tsxHelper.2e29a15d.js";import"./index2.309e467b.js";import"./scroll2.dc2faf83.js";import"./debounce.9184f38e.js";import"./validator2.6f1987ff.js";import"./el-input-number.de78a412.js";import"./el-switch.83e4e4db.js";import"./el-divider.1a444038.js";import"./InputPassword.9aadb9c3.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.b5873d10.js";import"./aria2.b5095a02.js";import"./browser2.761a8cbc.js";import"./el-card.76af1dc0.js";const j=l({__name:"UseFormDemo",setup(l){const{required:j}=D(),{t:v}=t(),_=a([{field:"field1",label:v("formDemo.input"),component:"Input",formItemProps:{rules:[j()]}},{field:"field2",label:v("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},{field:"field3",label:v("formDemo.radio"),component:"Radio",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:v("formDemo.checkbox"),component:"Checkbox",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}},{field:"field5",component:"DatePicker",label:v("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:v("formDemo.timeSelect")}]),{register:k,methods:h,elFormRef:C}=u({schema:_}),P=e=>{const{setProps:o}=h;o({labelWidth:e})},x=e=>{const{setProps:o}=h;o({size:e})},g=e=>{const{setProps:o}=h;o({disabled:e})},$=e=>{const{delSchema:o,addSchema:l}=h;e?o("field2"):e||"field2"===_[1].field||l({field:"field2",label:v("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},1)},F=e=>{var o;const{setValues:l}=h;e?null==(o=f(C))||o.resetFields():l({field1:"field1",field2:"2",field3:"2",field4:["1","3"],field5:"2022-01-27",field6:"17:00"})},S=i(7),I=()=>{const{setSchema:e}=h;e([{field:"field2",path:"label",value:`${v("formDemo.select")} ${S.value}`},{field:"field2",path:"componentProps.options",value:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}]),S.value++},R=()=>{const{addSchema:e}=h;f(S)%2==0?e({field:`field${f(S)}`,label:`${v("formDemo.input")}${f(S)}`,component:"Input"}):e({field:`field${f(S)}`,label:`${v("formDemo.input")}${f(S)}`,component:"Input"},f(S)),S.value++},V=()=>{f(C).validate((e=>{console.log(e)}))},w=()=>{var e;null==(e=f(C))||e.resetFields()};return(l,t)=>(m(),r(c,null,[s(f(o),{title:`UseForm ${f(v)("formDemo.operate")}`},{default:d((()=>[s(f(b),{onClick:t[0]||(t[0]=e=>P(150))},{default:d((()=>[n(p(f(v)("formDemo.change"))+" labelWidth",1)])),_:1}),s(f(b),{onClick:t[1]||(t[1]=e=>P("auto"))},{default:d((()=>[n(p(f(v)("formDemo.restore"))+" labelWidth",1)])),_:1}),s(f(b),{onClick:t[2]||(t[2]=e=>x("large"))},{default:d((()=>[n(p(f(v)("formDemo.change"))+" size",1)])),_:1}),s(f(b),{onClick:t[3]||(t[3]=e=>x("default"))},{default:d((()=>[n(p(f(v)("formDemo.restore"))+" size",1)])),_:1}),s(f(b),{onClick:t[4]||(t[4]=e=>g(!0))},{default:d((()=>[n(p(f(v)("formDemo.disabled")),1)])),_:1}),s(f(b),{onClick:t[5]||(t[5]=e=>g(!1))},{default:d((()=>[n(p(f(v)("formDemo.disablement")),1)])),_:1}),s(f(b),{onClick:t[6]||(t[6]=e=>$(!0))},{default:d((()=>[n(p(f(v)("formDemo.delete"))+" "+p(f(v)("formDemo.select")),1)])),_:1}),s(f(b),{onClick:t[7]||(t[7]=e=>$(!1))},{default:d((()=>[n(p(f(v)("formDemo.add"))+" "+p(f(v)("formDemo.select")),1)])),_:1}),s(f(b),{onClick:t[8]||(t[8]=e=>F(!1))},{default:d((()=>[n(p(f(v)("formDemo.setValue")),1)])),_:1}),s(f(b),{onClick:t[9]||(t[9]=e=>F(!0))},{default:d((()=>[n(p(f(v)("formDemo.resetValue")),1)])),_:1}),s(f(b),{onClick:I},{default:d((()=>[n(p(f(v)("formDemo.set"))+" "+p(f(v)("formDemo.select"))+" label ",1)])),_:1}),s(f(b),{onClick:R},{default:d((()=>[n(p(f(v)("formDemo.add"))+" "+p(f(v)("formDemo.subitem")),1)])),_:1}),s(f(b),{onClick:V},{default:d((()=>[n(p(f(v)("formDemo.formValidation")),1)])),_:1}),s(f(b),{onClick:w},{default:d((()=>[n(p(f(v)("formDemo.verifyReset")),1)])),_:1})])),_:1},8,["title"]),s(f(o),{title:`UseForm ${f(v)("formDemo.example")}`},{default:d((()=>[s(f(e),{onRegister:f(k)},null,8,["onRegister"])])),_:1},8,["title"])],64))}});export{j as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlRm9ybURlbW8uZWI4NmNlYWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3cy9Db21wb25lbnRzL0Zvcm0vVXNlRm9ybURlbW8udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBGb3JtIH0gZnJvbSAnQC9jb21wb25lbnRzL0Zvcm0nXG5pbXBvcnQgeyBDb250ZW50V3JhcCB9IGZyb20gJ0AvY29tcG9uZW50cy9Db250ZW50V3JhcCdcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICdAL2hvb2tzL3dlYi91c2VJMThuJ1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ0AvaG9va3Mvd2ViL3VzZUZvcm0nXG5pbXBvcnQgeyByZWFjdGl2ZSwgdW5yZWYsIHJlZiB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IEVsQnV0dG9uIH0gZnJvbSAnZWxlbWVudC1wbHVzJ1xuaW1wb3J0IHsgdXNlVmFsaWRhdG9yIH0gZnJvbSAnQC9ob29rcy93ZWIvdXNlVmFsaWRhdG9yJ1xuXG5jb25zdCB7IHJlcXVpcmVkIH0gPSB1c2VWYWxpZGF0b3IoKVxuXG5jb25zdCB7IHQgfSA9IHVzZUkxOG4oKVxuXG5jb25zdCBzY2hlbWEgPSByZWFjdGl2ZTxGb3JtU2NoZW1hW10+KFtcbiAge1xuICAgIGZpZWxkOiAnZmllbGQxJyxcbiAgICBsYWJlbDogdCgnZm9ybURlbW8uaW5wdXQnKSxcbiAgICBjb21wb25lbnQ6ICdJbnB1dCcsXG4gICAgZm9ybUl0ZW1Qcm9wczoge1xuICAgICAgcnVsZXM6IFtyZXF1aXJlZCgpXVxuICAgIH1cbiAgfSxcbiAge1xuICAgIGZpZWxkOiAnZmllbGQyJyxcbiAgICBsYWJlbDogdCgnZm9ybURlbW8uc2VsZWN0JyksXG4gICAgY29tcG9uZW50OiAnU2VsZWN0JyxcbiAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdvcHRpb24xJyxcbiAgICAgICAgICB2YWx1ZTogJzEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ29wdGlvbjInLFxuICAgICAgICAgIHZhbHVlOiAnMidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAge1xuICAgIGZpZWxkOiAnZmllbGQzJyxcbiAgICBsYWJlbDogdCgnZm9ybURlbW8ucmFkaW8nKSxcbiAgICBjb21wb25lbnQ6ICdSYWRpbycsXG4gICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnb3B0aW9uLTEnLFxuICAgICAgICAgIHZhbHVlOiAnMSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnb3B0aW9uLTInLFxuICAgICAgICAgIHZhbHVlOiAnMidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAge1xuICAgIGZpZWxkOiAnZmllbGQ0JyxcbiAgICBsYWJlbDogdCgnZm9ybURlbW8uY2hlY2tib3gnKSxcbiAgICBjb21wb25lbnQ6ICdDaGVja2JveCcsXG4gICAgdmFsdWU6IFtdLFxuICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ29wdGlvbi0xJyxcbiAgICAgICAgICB2YWx1ZTogJzEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ29wdGlvbi0yJyxcbiAgICAgICAgICB2YWx1ZTogJzInXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ29wdGlvbi0zJyxcbiAgICAgICAgICB2YWx1ZTogJzMnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBmaWVsZDogJ2ZpZWxkNScsXG4gICAgY29tcG9uZW50OiAnRGF0ZVBpY2tlcicsXG4gICAgbGFiZWw6IHQoJ2Zvcm1EZW1vLmRhdGVQaWNrZXInKSxcbiAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgdHlwZTogJ2RhdGUnXG4gICAgfVxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdmaWVsZDYnLFxuICAgIGNvbXBvbmVudDogJ1RpbWVTZWxlY3QnLFxuICAgIGxhYmVsOiB0KCdmb3JtRGVtby50aW1lU2VsZWN0JylcbiAgfVxuXSlcblxuY29uc3QgeyByZWdpc3RlciwgbWV0aG9kcywgZWxGb3JtUmVmIH0gPSB1c2VGb3JtKHtcbiAgc2NoZW1hXG59KVxuXG5jb25zdCBjaGFuZ2VMYWJlbFdpZHRoID0gKHdpZHRoOiBudW1iZXIgfCBzdHJpbmcpID0+IHtcbiAgY29uc3QgeyBzZXRQcm9wcyB9ID0gbWV0aG9kc1xuICBzZXRQcm9wcyh7XG4gICAgbGFiZWxXaWR0aDogd2lkdGhcbiAgfSlcbn1cblxuY29uc3QgY2hhbmdlU2l6ZSA9IChzaXplOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgeyBzZXRQcm9wcyB9ID0gbWV0aG9kc1xuICBzZXRQcm9wcyh7XG4gICAgc2l6ZVxuICB9KVxufVxuXG5jb25zdCBjaGFuZ2VEaXNhYmxlZCA9IChib29sOiBib29sZWFuKSA9PiB7XG4gIGNvbnN0IHsgc2V0UHJvcHMgfSA9IG1ldGhvZHNcbiAgc2V0UHJvcHMoe1xuICAgIGRpc2FibGVkOiBib29sXG4gIH0pXG59XG5cbmNvbnN0IGNoYW5nZVNjaGVtYSA9IChkZWw6IGJvb2xlYW4pID0+IHtcbiAgY29uc3QgeyBkZWxTY2hlbWEsIGFkZFNjaGVtYSB9ID0gbWV0aG9kc1xuICBpZiAoZGVsKSB7XG4gICAgZGVsU2NoZW1hKCdmaWVsZDInKVxuICB9IGVsc2UgaWYgKCFkZWwgJiYgc2NoZW1hWzFdLmZpZWxkICE9PSAnZmllbGQyJykge1xuICAgIGFkZFNjaGVtYShcbiAgICAgIHtcbiAgICAgICAgZmllbGQ6ICdmaWVsZDInLFxuICAgICAgICBsYWJlbDogdCgnZm9ybURlbW8uc2VsZWN0JyksXG4gICAgICAgIGNvbXBvbmVudDogJ1NlbGVjdCcsXG4gICAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogJ29wdGlvbjEnLFxuICAgICAgICAgICAgICB2YWx1ZTogJzEnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogJ29wdGlvbjInLFxuICAgICAgICAgICAgICB2YWx1ZTogJzInXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgMVxuICAgIClcbiAgfVxufVxuXG5jb25zdCBzZXRWYWx1ZSA9IChyZXNldDogYm9vbGVhbikgPT4ge1xuICBjb25zdCB7IHNldFZhbHVlcyB9ID0gbWV0aG9kc1xuICBpZiAocmVzZXQpIHtcbiAgICB1bnJlZihlbEZvcm1SZWYpPy5yZXNldEZpZWxkcygpXG4gIH0gZWxzZSB7XG4gICAgc2V0VmFsdWVzKHtcbiAgICAgIGZpZWxkMTogJ2ZpZWxkMScsXG4gICAgICBmaWVsZDI6ICcyJyxcbiAgICAgIGZpZWxkMzogJzInLFxuICAgICAgZmllbGQ0OiBbJzEnLCAnMyddLFxuICAgICAgZmllbGQ1OiAnMjAyMi0wMS0yNycsXG4gICAgICBmaWVsZDY6ICcxNzowMCdcbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IGluZGV4ID0gcmVmKDcpXG5cbmNvbnN0IHNldExhYmVsID0gKCkgPT4ge1xuICBjb25zdCB7IHNldFNjaGVtYSB9ID0gbWV0aG9kc1xuICBzZXRTY2hlbWEoW1xuICAgIHtcbiAgICAgIGZpZWxkOiAnZmllbGQyJyxcbiAgICAgIHBhdGg6ICdsYWJlbCcsXG4gICAgICB2YWx1ZTogYCR7dCgnZm9ybURlbW8uc2VsZWN0Jyl9ICR7aW5kZXgudmFsdWV9YFxuICAgIH0sXG4gICAge1xuICAgICAgZmllbGQ6ICdmaWVsZDInLFxuICAgICAgcGF0aDogJ2NvbXBvbmVudFByb3BzLm9wdGlvbnMnLFxuICAgICAgdmFsdWU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnb3B0aW9uLTEnLFxuICAgICAgICAgIHZhbHVlOiAnMSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnb3B0aW9uLTInLFxuICAgICAgICAgIHZhbHVlOiAnMidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnb3B0aW9uLTMnLFxuICAgICAgICAgIHZhbHVlOiAnMydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSlcbiAgaW5kZXgudmFsdWUrK1xufVxuXG5jb25zdCBhZGRJdGVtID0gKCkgPT4ge1xuICBjb25zdCB7IGFkZFNjaGVtYSB9ID0gbWV0aG9kc1xuICBpZiAodW5yZWYoaW5kZXgpICUgMiA9PT0gMCkge1xuICAgIGFkZFNjaGVtYSh7XG4gICAgICBmaWVsZDogYGZpZWxkJHt1bnJlZihpbmRleCl9YCxcbiAgICAgIGxhYmVsOiBgJHt0KCdmb3JtRGVtby5pbnB1dCcpfSR7dW5yZWYoaW5kZXgpfWAsXG4gICAgICBjb21wb25lbnQ6ICdJbnB1dCdcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGFkZFNjaGVtYShcbiAgICAgIHtcbiAgICAgICAgZmllbGQ6IGBmaWVsZCR7dW5yZWYoaW5kZXgpfWAsXG4gICAgICAgIGxhYmVsOiBgJHt0KCdmb3JtRGVtby5pbnB1dCcpfSR7dW5yZWYoaW5kZXgpfWAsXG4gICAgICAgIGNvbXBvbmVudDogJ0lucHV0J1xuICAgICAgfSxcbiAgICAgIHVucmVmKGluZGV4KVxuICAgIClcbiAgfVxuICBpbmRleC52YWx1ZSsrXG59XG5cbmNvbnN0IGZvcm1WYWxpZGF0aW9uID0gKCkgPT4ge1xuICB1bnJlZihlbEZvcm1SZWYpIS52YWxpZGF0ZSgoaXNWYWxpZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGlzVmFsaWQpXG4gIH0pXG59XG5cbmNvbnN0IHZlcmlmeVJlc2V0ID0gKCkgPT4ge1xuICB1bnJlZihlbEZvcm1SZWYpPy5yZXNldEZpZWxkcygpXG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuICA8Q29udGVudFdyYXAgOnRpdGxlPVwiYFVzZUZvcm0gJHt0KCdmb3JtRGVtby5vcGVyYXRlJyl9YFwiPlxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJjaGFuZ2VMYWJlbFdpZHRoKDE1MClcIj57eyB0KCdmb3JtRGVtby5jaGFuZ2UnKSB9fSBsYWJlbFdpZHRoPC9FbEJ1dHRvbj5cbiAgICA8RWxCdXR0b24gQGNsaWNrPVwiY2hhbmdlTGFiZWxXaWR0aCgnYXV0bycpXCI+e3sgdCgnZm9ybURlbW8ucmVzdG9yZScpIH19IGxhYmVsV2lkdGg8L0VsQnV0dG9uPlxuXG4gICAgPEVsQnV0dG9uIEBjbGljaz1cImNoYW5nZVNpemUoJ2xhcmdlJylcIj57eyB0KCdmb3JtRGVtby5jaGFuZ2UnKSB9fSBzaXplPC9FbEJ1dHRvbj5cbiAgICA8RWxCdXR0b24gQGNsaWNrPVwiY2hhbmdlU2l6ZSgnZGVmYXVsdCcpXCI+e3sgdCgnZm9ybURlbW8ucmVzdG9yZScpIH19IHNpemU8L0VsQnV0dG9uPlxuXG4gICAgPEVsQnV0dG9uIEBjbGljaz1cImNoYW5nZURpc2FibGVkKHRydWUpXCI+e3sgdCgnZm9ybURlbW8uZGlzYWJsZWQnKSB9fTwvRWxCdXR0b24+XG4gICAgPEVsQnV0dG9uIEBjbGljaz1cImNoYW5nZURpc2FibGVkKGZhbHNlKVwiPnt7IHQoJ2Zvcm1EZW1vLmRpc2FibGVtZW50JykgfX08L0VsQnV0dG9uPlxuXG4gICAgPEVsQnV0dG9uIEBjbGljaz1cImNoYW5nZVNjaGVtYSh0cnVlKVwiPlxuICAgICAge3sgdCgnZm9ybURlbW8uZGVsZXRlJykgfX0ge3sgdCgnZm9ybURlbW8uc2VsZWN0JykgfX1cbiAgICA8L0VsQnV0dG9uPlxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJjaGFuZ2VTY2hlbWEoZmFsc2UpXCI+XG4gICAgICB7eyB0KCdmb3JtRGVtby5hZGQnKSB9fSB7eyB0KCdmb3JtRGVtby5zZWxlY3QnKSB9fVxuICAgIDwvRWxCdXR0b24+XG5cbiAgICA8RWxCdXR0b24gQGNsaWNrPVwic2V0VmFsdWUoZmFsc2UpXCI+e3sgdCgnZm9ybURlbW8uc2V0VmFsdWUnKSB9fTwvRWxCdXR0b24+XG4gICAgPEVsQnV0dG9uIEBjbGljaz1cInNldFZhbHVlKHRydWUpXCI+e3sgdCgnZm9ybURlbW8ucmVzZXRWYWx1ZScpIH19PC9FbEJ1dHRvbj5cblxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJzZXRMYWJlbFwiPlxuICAgICAge3sgdCgnZm9ybURlbW8uc2V0JykgfX0ge3sgdCgnZm9ybURlbW8uc2VsZWN0JykgfX0gbGFiZWxcbiAgICA8L0VsQnV0dG9uPlxuXG4gICAgPEVsQnV0dG9uIEBjbGljaz1cImFkZEl0ZW1cIj4ge3sgdCgnZm9ybURlbW8uYWRkJykgfX0ge3sgdCgnZm9ybURlbW8uc3ViaXRlbScpIH19IDwvRWxCdXR0b24+XG5cbiAgICA8RWxCdXR0b24gQGNsaWNrPVwiZm9ybVZhbGlkYXRpb25cIj4ge3sgdCgnZm9ybURlbW8uZm9ybVZhbGlkYXRpb24nKSB9fSA8L0VsQnV0dG9uPlxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJ2ZXJpZnlSZXNldFwiPiB7eyB0KCdmb3JtRGVtby52ZXJpZnlSZXNldCcpIH19IDwvRWxCdXR0b24+XG4gIDwvQ29udGVudFdyYXA+XG4gIDxDb250ZW50V3JhcCA6dGl0bGU9XCJgVXNlRm9ybSAke3QoJ2Zvcm1EZW1vLmV4YW1wbGUnKX1gXCI+XG4gICAgPEZvcm0gQHJlZ2lzdGVyPVwicmVnaXN0ZXJcIiAvPlxuICA8L0NvbnRlbnRXcmFwPlxuPC90ZW1wbGF0ZT5cbiJdLCJuYW1lcyI6WyJyZXF1aXJlZCIsInVzZVZhbGlkYXRvciIsInQiLCJ1c2VJMThuIiwic2NoZW1hIiwicmVhY3RpdmUiLCJmaWVsZCIsImxhYmVsIiwiY29tcG9uZW50IiwiZm9ybUl0ZW1Qcm9wcyIsInJ1bGVzIiwiY29tcG9uZW50UHJvcHMiLCJvcHRpb25zIiwidmFsdWUiLCJ0eXBlIiwicmVnaXN0ZXIiLCJtZXRob2RzIiwiZWxGb3JtUmVmIiwidXNlRm9ybSIsImNoYW5nZUxhYmVsV2lkdGgiLCJ3aWR0aCIsInNldFByb3BzIiwibGFiZWxXaWR0aCIsImNoYW5nZVNpemUiLCJzaXplIiwiY2hhbmdlRGlzYWJsZWQiLCJib29sIiwiZGlzYWJsZWQiLCJjaGFuZ2VTY2hlbWEiLCJkZWwiLCJkZWxTY2hlbWEiLCJhZGRTY2hlbWEiLCJzZXRWYWx1ZSIsInJlc2V0Iiwic2V0VmFsdWVzIiwiX2EiLCJ1bnJlZiIsInJlc2V0RmllbGRzIiwiZmllbGQxIiwiZmllbGQyIiwiZmllbGQzIiwiZmllbGQ0IiwiZmllbGQ1IiwiZmllbGQ2IiwiaW5kZXgiLCJyZWYiLCJzZXRMYWJlbCIsInNldFNjaGVtYSIsInBhdGgiLCJhZGRJdGVtIiwiZm9ybVZhbGlkYXRpb24iLCJ2YWxpZGF0ZSIsImlzVmFsaWQiLCJjb25zb2xlIiwibG9nIiwidmVyaWZ5UmVzZXQiXSwibWFwcGluZ3MiOiJnakNBU00sTUFBQUEsU0FBRUEsR0FBYUMsS0FFZkMsRUFBRUEsR0FBTUMsSUFFUkMsRUFBU0MsRUFBdUIsQ0FDcEMsQ0FDRUMsTUFBTyxTQUNQQyxNQUFPTCxFQUFFLGtCQUNUTSxVQUFXLFFBQ1hDLGNBQWUsQ0FDYkMsTUFBTyxDQUFDVixPQUdaLENBQ0VNLE1BQU8sU0FDUEMsTUFBT0wsRUFBRSxtQkFDVE0sVUFBVyxTQUNYRyxlQUFnQixDQUNkQyxRQUFTLENBQ1AsQ0FDRUwsTUFBTyxVQUNQTSxNQUFPLEtBRVQsQ0FDRU4sTUFBTyxVQUNQTSxNQUFPLFFBS2YsQ0FDRVAsTUFBTyxTQUNQQyxNQUFPTCxFQUFFLGtCQUNUTSxVQUFXLFFBQ1hHLGVBQWdCLENBQ2RDLFFBQVMsQ0FDUCxDQUNFTCxNQUFPLFdBQ1BNLE1BQU8sS0FFVCxDQUNFTixNQUFPLFdBQ1BNLE1BQU8sUUFLZixDQUNFUCxNQUFPLFNBQ1BDLE1BQU9MLEVBQUUscUJBQ1RNLFVBQVcsV0FDWEssTUFBTyxHQUNQRixlQUFnQixDQUNkQyxRQUFTLENBQ1AsQ0FDRUwsTUFBTyxXQUNQTSxNQUFPLEtBRVQsQ0FDRU4sTUFBTyxXQUNQTSxNQUFPLEtBRVQsQ0FDRU4sTUFBTyxXQUNQTSxNQUFPLFFBS2YsQ0FDRVAsTUFBTyxTQUNQRSxVQUFXLGFBQ1hELE1BQU9MLEVBQUUsdUJBQ1RTLGVBQWdCLENBQ2RHLEtBQU0sU0FHVixDQUNFUixNQUFPLFNBQ1BFLFVBQVcsYUFDWEQsTUFBT0wsRUFBRSwyQkFJUGEsU0FBRUEsRUFBQUMsUUFBVUEsRUFBU0MsVUFBQUEsR0FBY0MsRUFBUSxDQUMvQ2QsT0FBQUEsSUFHSWUsRUFBb0JDLElBQ2xCLE1BQUFDLFNBQUVBLEdBQWFMLEVBQ1pLLEVBQUEsQ0FDUEMsV0FBWUYsS0FJVkcsRUFBY0MsSUFDWixNQUFBSCxTQUFFQSxHQUFhTCxFQUNaSyxFQUFBLENBQ1BHLEtBQUFBLEtBSUVDLEVBQWtCQyxJQUNoQixNQUFBTCxTQUFFQSxHQUFhTCxFQUNaSyxFQUFBLENBQ1BNLFNBQVVELEtBSVJFLEVBQWdCQyxJQUNkLE1BQUFDLFVBQUVBLEVBQVdDLFVBQUFBLEdBQWNmLEVBQzdCYSxFQUNGQyxFQUFVLFVBQ0FELEdBQTJCLFdBQXBCekIsRUFBTyxHQUFHRSxPQUMzQnlCLEVBQ0UsQ0FDRXpCLE1BQU8sU0FDUEMsTUFBT0wsRUFBRSxtQkFDVE0sVUFBVyxTQUNYRyxlQUFnQixDQUNkQyxRQUFTLENBQ1AsQ0FDRUwsTUFBTyxVQUNQTSxNQUFPLEtBRVQsQ0FDRU4sTUFBTyxVQUNQTSxNQUFPLFFBS2YsSUFLQW1CLEVBQVlDLFVBQ1YsTUFBQUMsVUFBRUEsR0FBY2xCLEVBQ2xCaUIsRUFDSSxPQUFBRSxFQUFBQyxFQUFBbkIsS0FBWWtCLEVBQUFFLGNBRVJILEVBQUEsQ0FDUkksT0FBUSxTQUNSQyxPQUFRLElBQ1JDLE9BQVEsSUFDUkMsT0FBUSxDQUFDLElBQUssS0FDZEMsT0FBUSxhQUNSQyxPQUFRLFdBS1JDLEVBQVFDLEVBQUksR0FFWkMsRUFBVyxLQUNULE1BQUFDLFVBQUVBLEdBQWMvQixFQUNaK0IsRUFBQSxDQUNSLENBQ0V6QyxNQUFPLFNBQ1AwQyxLQUFNLFFBQ05uQyxNQUFPLEdBQUdYLEVBQUUsc0JBQXNCMEMsRUFBTS9CLFNBRTFDLENBQ0VQLE1BQU8sU0FDUDBDLEtBQU0seUJBQ05uQyxNQUFPLENBQ0wsQ0FDRU4sTUFBTyxXQUNQTSxNQUFPLEtBRVQsQ0FDRU4sTUFBTyxXQUNQTSxNQUFPLEtBRVQsQ0FDRU4sTUFBTyxXQUNQTSxNQUFPLFNBS1QrQixFQUFBL0IsU0FHRm9DLEVBQVUsS0FDUixNQUFBbEIsVUFBRUEsR0FBY2YsRUFDbEJvQixFQUFNUSxHQUFTLEdBQU0sRUFDYmIsRUFBQSxDQUNSekIsTUFBTyxRQUFROEIsRUFBTVEsS0FDckJyQyxNQUFPLEdBQUdMLEVBQUUsb0JBQW9Ca0MsRUFBTVEsS0FDdENwQyxVQUFXLFVBR2J1QixFQUNFLENBQ0V6QixNQUFPLFFBQVE4QixFQUFNUSxLQUNyQnJDLE1BQU8sR0FBR0wsRUFBRSxvQkFBb0JrQyxFQUFNUSxLQUN0Q3BDLFVBQVcsU0FFYjRCLEVBQU1RLElBR0pBLEVBQUEvQixTQUdGcUMsRUFBaUIsS0FDckJkLEVBQU1uQixHQUFZa0MsVUFBVUMsSUFDMUJDLFFBQVFDLElBQUlGLE9BSVZHLEVBQWMsV0FDWixPQUFBcEIsRUFBQUMsRUFBQW5CLEtBQVlrQixFQUFBRSJ9