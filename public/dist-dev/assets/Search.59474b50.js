import{_ as e}from"./ContentWrap.7d3a9183.js";import{d as o,k as t,s as l,r,o as m,c as i,g as s,w as a,a as p,x as n,t as f,G as c}from"./index.1a68aef2.js";import{_ as d}from"./Search.6e91dee7.js";import{u}from"./useValidator.106f771e.js";import{E as b}from"./el-button.a6b8d6fa.js";import"./el-card.7a3342cf.js";import"./el-popper.dbb2fbab.js";import"./index2.1b075999.js";import"./Form.ebf794e5.js";import"./el-col.f5f1d7dc.js";import"./typescript2.0e462989.js";import"./el-input.b19e074f.js";import"./event2.1741f333.js";import"./index2.78abe895.js";import"./el-tag.94f7b718.js";import"./tsxHelper.3ba3c88c.js";import"./index2.246c69ad.js";import"./scroll2.bc735d56.js";import"./debounce.25c7f936.js";import"./validator2.597f6af8.js";import"./el-input-number.eadeea7e.js";import"./el-switch.65903c61.js";import"./el-divider.bf458341.js";import"./InputPassword.6d00c577.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.fe501ac3.js";import"./aria2.b5095a02.js";import"./browser2.dbd34495.js";import"./useForm.ebecf023.js";const D=o({__name:"Search",setup(o){const{required:D}=u(),{t:h}=t(),j=l([{field:"field1",label:h("formDemo.input"),component:"Input",formItemProps:{rules:[D()]}},{field:"field2",label:h("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},{field:"field3",label:h("formDemo.radio"),component:"Radio",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field5",component:"DatePicker",label:h("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:h("formDemo.timeSelect")},{field:"field8",label:h("formDemo.input"),component:"Input",formItemProps:{rules:[D()]}},{field:"field9",label:h("formDemo.input"),component:"Input",formItemProps:{rules:[D()]}},{field:"field10",label:h("formDemo.input"),component:"Input",formItemProps:{rules:[D()]}},{field:"field11",label:h("formDemo.input"),component:"Input",formItemProps:{rules:[D()]}},{field:"field12",label:h("formDemo.input"),component:"Input",formItemProps:{rules:[D()]}},{field:"field13",label:h("formDemo.input"),component:"Input",formItemProps:{rules:[D()]}},{field:"field14",label:h("formDemo.input"),component:"Input",formItemProps:{rules:[D()]}},{field:"field15",label:h("formDemo.input"),component:"Input",formItemProps:{rules:[D()]}},{field:"field16",label:h("formDemo.input"),component:"Input",formItemProps:{rules:[D()]}},{field:"field17",label:h("formDemo.input"),component:"Input",formItemProps:{rules:[D()]}},{field:"field18",label:h("formDemo.input"),component:"Input",formItemProps:{rules:[D()]}}]),I=r(!1),P=e=>{I.value=e},v=r("inline"),_=()=>{v.value="inline"===p(v)?"bottom":"inline"},x=r("left"),g=e=>{v.value="bottom",x.value=e};return(o,t)=>(m(),i(c,null,[s(p(e),{title:`${p(h)("searchDemo.search")} ${p(h)("searchDemo.operate")}`},{default:a((()=>[s(p(b),{onClick:t[0]||(t[0]=e=>P(!0))},{default:a((()=>[n(f(p(h)("searchDemo.grid")),1)])),_:1}),s(p(b),{onClick:t[1]||(t[1]=e=>P(!1))},{default:a((()=>[n(f(p(h)("searchDemo.restore"))+" "+f(p(h)("searchDemo.grid")),1)])),_:1}),s(p(b),{onClick:_},{default:a((()=>[n(f(p(h)("searchDemo.button"))+" "+f(p(h)("searchDemo.position")),1)])),_:1}),s(p(b),{onClick:t[2]||(t[2]=e=>g("left"))},{default:a((()=>[n(f(p(h)("searchDemo.bottom"))+" "+f(p(h)("searchDemo.position"))+"-"+f(p(h)("searchDemo.left")),1)])),_:1}),s(p(b),{onClick:t[3]||(t[3]=e=>g("center"))},{default:a((()=>[n(f(p(h)("searchDemo.bottom"))+" "+f(p(h)("searchDemo.position"))+"-"+f(p(h)("searchDemo.center")),1)])),_:1}),s(p(b),{onClick:t[4]||(t[4]=e=>g("right"))},{default:a((()=>[n(f(p(h)("searchDemo.bottom"))+" "+f(p(h)("searchDemo.position"))+"-"+f(p(h)("searchDemo.right")),1)])),_:1})])),_:1},8,["title"]),s(p(e),{title:p(h)("searchDemo.search"),message:p(h)("searchDemo.searchDes")},{default:a((()=>[s(p(d),{schema:j,"is-col":I.value,layout:v.value,"buttom-position":x.value,expand:"","expand-field":"field6"},null,8,["schema","is-col","layout","buttom-position"])])),_:1},8,["title","message"])],64))}});export{D as default};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoLjU5NDc0YjUwLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmlld3MvQ29tcG9uZW50cy9TZWFyY2gudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBDb250ZW50V3JhcCB9IGZyb20gJ0AvY29tcG9uZW50cy9Db250ZW50V3JhcCdcbmltcG9ydCB7IHVzZUkxOG4gfSBmcm9tICdAL2hvb2tzL3dlYi91c2VJMThuJ1xuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnQC9jb21wb25lbnRzL1NlYXJjaCdcbmltcG9ydCB7IHJlYWN0aXZlLCByZWYsIHVucmVmIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgdXNlVmFsaWRhdG9yIH0gZnJvbSAnQC9ob29rcy93ZWIvdXNlVmFsaWRhdG9yJ1xuaW1wb3J0IHsgRWxCdXR0b24gfSBmcm9tICdlbGVtZW50LXBsdXMnXG5cbmNvbnN0IHsgcmVxdWlyZWQgfSA9IHVzZVZhbGlkYXRvcigpXG5cbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpXG5cbmNvbnN0IHNjaGVtYSA9IHJlYWN0aXZlPEZvcm1TY2hlbWFbXT4oW1xuICB7XG4gICAgZmllbGQ6ICdmaWVsZDEnLFxuICAgIGxhYmVsOiB0KCdmb3JtRGVtby5pbnB1dCcpLFxuICAgIGNvbXBvbmVudDogJ0lucHV0JyxcbiAgICBmb3JtSXRlbVByb3BzOiB7XG4gICAgICBydWxlczogW3JlcXVpcmVkKCldXG4gICAgfVxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdmaWVsZDInLFxuICAgIGxhYmVsOiB0KCdmb3JtRGVtby5zZWxlY3QnKSxcbiAgICBjb21wb25lbnQ6ICdTZWxlY3QnLFxuICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogJ29wdGlvbjEnLFxuICAgICAgICAgIHZhbHVlOiAnMSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnb3B0aW9uMicsXG4gICAgICAgICAgdmFsdWU6ICcyJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdmaWVsZDMnLFxuICAgIGxhYmVsOiB0KCdmb3JtRGVtby5yYWRpbycpLFxuICAgIGNvbXBvbmVudDogJ1JhZGlvJyxcbiAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdvcHRpb24tMScsXG4gICAgICAgICAgdmFsdWU6ICcxJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdvcHRpb24tMicsXG4gICAgICAgICAgdmFsdWU6ICcyJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdmaWVsZDUnLFxuICAgIGNvbXBvbmVudDogJ0RhdGVQaWNrZXInLFxuICAgIGxhYmVsOiB0KCdmb3JtRGVtby5kYXRlUGlja2VyJyksXG4gICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgIHR5cGU6ICdkYXRlJ1xuICAgIH1cbiAgfSxcbiAge1xuICAgIGZpZWxkOiAnZmllbGQ2JyxcbiAgICBjb21wb25lbnQ6ICdUaW1lU2VsZWN0JyxcbiAgICBsYWJlbDogdCgnZm9ybURlbW8udGltZVNlbGVjdCcpXG4gIH0sXG4gIHtcbiAgICBmaWVsZDogJ2ZpZWxkOCcsXG4gICAgbGFiZWw6IHQoJ2Zvcm1EZW1vLmlucHV0JyksXG4gICAgY29tcG9uZW50OiAnSW5wdXQnLFxuICAgIGZvcm1JdGVtUHJvcHM6IHtcbiAgICAgIHJ1bGVzOiBbcmVxdWlyZWQoKV1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBmaWVsZDogJ2ZpZWxkOScsXG4gICAgbGFiZWw6IHQoJ2Zvcm1EZW1vLmlucHV0JyksXG4gICAgY29tcG9uZW50OiAnSW5wdXQnLFxuICAgIGZvcm1JdGVtUHJvcHM6IHtcbiAgICAgIHJ1bGVzOiBbcmVxdWlyZWQoKV1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBmaWVsZDogJ2ZpZWxkMTAnLFxuICAgIGxhYmVsOiB0KCdmb3JtRGVtby5pbnB1dCcpLFxuICAgIGNvbXBvbmVudDogJ0lucHV0JyxcbiAgICBmb3JtSXRlbVByb3BzOiB7XG4gICAgICBydWxlczogW3JlcXVpcmVkKCldXG4gICAgfVxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdmaWVsZDExJyxcbiAgICBsYWJlbDogdCgnZm9ybURlbW8uaW5wdXQnKSxcbiAgICBjb21wb25lbnQ6ICdJbnB1dCcsXG4gICAgZm9ybUl0ZW1Qcm9wczoge1xuICAgICAgcnVsZXM6IFtyZXF1aXJlZCgpXVxuICAgIH1cbiAgfSxcbiAge1xuICAgIGZpZWxkOiAnZmllbGQxMicsXG4gICAgbGFiZWw6IHQoJ2Zvcm1EZW1vLmlucHV0JyksXG4gICAgY29tcG9uZW50OiAnSW5wdXQnLFxuICAgIGZvcm1JdGVtUHJvcHM6IHtcbiAgICAgIHJ1bGVzOiBbcmVxdWlyZWQoKV1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBmaWVsZDogJ2ZpZWxkMTMnLFxuICAgIGxhYmVsOiB0KCdmb3JtRGVtby5pbnB1dCcpLFxuICAgIGNvbXBvbmVudDogJ0lucHV0JyxcbiAgICBmb3JtSXRlbVByb3BzOiB7XG4gICAgICBydWxlczogW3JlcXVpcmVkKCldXG4gICAgfVxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdmaWVsZDE0JyxcbiAgICBsYWJlbDogdCgnZm9ybURlbW8uaW5wdXQnKSxcbiAgICBjb21wb25lbnQ6ICdJbnB1dCcsXG4gICAgZm9ybUl0ZW1Qcm9wczoge1xuICAgICAgcnVsZXM6IFtyZXF1aXJlZCgpXVxuICAgIH1cbiAgfSxcbiAge1xuICAgIGZpZWxkOiAnZmllbGQxNScsXG4gICAgbGFiZWw6IHQoJ2Zvcm1EZW1vLmlucHV0JyksXG4gICAgY29tcG9uZW50OiAnSW5wdXQnLFxuICAgIGZvcm1JdGVtUHJvcHM6IHtcbiAgICAgIHJ1bGVzOiBbcmVxdWlyZWQoKV1cbiAgICB9XG4gIH0sXG4gIHtcbiAgICBmaWVsZDogJ2ZpZWxkMTYnLFxuICAgIGxhYmVsOiB0KCdmb3JtRGVtby5pbnB1dCcpLFxuICAgIGNvbXBvbmVudDogJ0lucHV0JyxcbiAgICBmb3JtSXRlbVByb3BzOiB7XG4gICAgICBydWxlczogW3JlcXVpcmVkKCldXG4gICAgfVxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdmaWVsZDE3JyxcbiAgICBsYWJlbDogdCgnZm9ybURlbW8uaW5wdXQnKSxcbiAgICBjb21wb25lbnQ6ICdJbnB1dCcsXG4gICAgZm9ybUl0ZW1Qcm9wczoge1xuICAgICAgcnVsZXM6IFtyZXF1aXJlZCgpXVxuICAgIH1cbiAgfSxcbiAge1xuICAgIGZpZWxkOiAnZmllbGQxOCcsXG4gICAgbGFiZWw6IHQoJ2Zvcm1EZW1vLmlucHV0JyksXG4gICAgY29tcG9uZW50OiAnSW5wdXQnLFxuICAgIGZvcm1JdGVtUHJvcHM6IHtcbiAgICAgIHJ1bGVzOiBbcmVxdWlyZWQoKV1cbiAgICB9XG4gIH1cbl0pXG5cbmNvbnN0IGlzR3JpZCA9IHJlZihmYWxzZSlcblxuY29uc3QgY2hhbmdlR3JpZCA9IChncmlkOiBib29sZWFuKSA9PiB7XG4gIGlzR3JpZC52YWx1ZSA9IGdyaWRcbn1cblxuY29uc3QgbGF5b3V0ID0gcmVmKCdpbmxpbmUnKVxuXG5jb25zdCBjaGFuZ2VMYXlvdXQgPSAoKSA9PiB7XG4gIGxheW91dC52YWx1ZSA9IHVucmVmKGxheW91dCkgPT09ICdpbmxpbmUnID8gJ2JvdHRvbScgOiAnaW5saW5lJ1xufVxuXG5jb25zdCBidXR0b21Qb3NpdGlvbiA9IHJlZignbGVmdCcpXG5cbmNvbnN0IGNoYW5nZVBvc2l0aW9uID0gKHBvc2l0aW9uOiBzdHJpbmcpID0+IHtcbiAgbGF5b3V0LnZhbHVlID0gJ2JvdHRvbSdcbiAgYnV0dG9tUG9zaXRpb24udmFsdWUgPSBwb3NpdGlvblxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPENvbnRlbnRXcmFwIDp0aXRsZT1cImAke3QoJ3NlYXJjaERlbW8uc2VhcmNoJyl9ICR7dCgnc2VhcmNoRGVtby5vcGVyYXRlJyl9YFwiPlxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJjaGFuZ2VHcmlkKHRydWUpXCI+e3sgdCgnc2VhcmNoRGVtby5ncmlkJykgfX08L0VsQnV0dG9uPlxuICAgIDxFbEJ1dHRvbiBAY2xpY2s9XCJjaGFuZ2VHcmlkKGZhbHNlKVwiPlxuICAgICAge3sgdCgnc2VhcmNoRGVtby5yZXN0b3JlJykgfX0ge3sgdCgnc2VhcmNoRGVtby5ncmlkJykgfX1cbiAgICA8L0VsQnV0dG9uPlxuXG4gICAgPEVsQnV0dG9uIEBjbGljaz1cImNoYW5nZUxheW91dFwiPlxuICAgICAge3sgdCgnc2VhcmNoRGVtby5idXR0b24nKSB9fSB7eyB0KCdzZWFyY2hEZW1vLnBvc2l0aW9uJykgfX1cbiAgICA8L0VsQnV0dG9uPlxuXG4gICAgPEVsQnV0dG9uIEBjbGljaz1cImNoYW5nZVBvc2l0aW9uKCdsZWZ0JylcIj5cbiAgICAgIHt7IHQoJ3NlYXJjaERlbW8uYm90dG9tJykgfX0ge3sgdCgnc2VhcmNoRGVtby5wb3NpdGlvbicpIH19LXt7IHQoJ3NlYXJjaERlbW8ubGVmdCcpIH19XG4gICAgPC9FbEJ1dHRvbj5cbiAgICA8RWxCdXR0b24gQGNsaWNrPVwiY2hhbmdlUG9zaXRpb24oJ2NlbnRlcicpXCI+XG4gICAgICB7eyB0KCdzZWFyY2hEZW1vLmJvdHRvbScpIH19IHt7IHQoJ3NlYXJjaERlbW8ucG9zaXRpb24nKSB9fS17eyB0KCdzZWFyY2hEZW1vLmNlbnRlcicpIH19XG4gICAgPC9FbEJ1dHRvbj5cbiAgICA8RWxCdXR0b24gQGNsaWNrPVwiY2hhbmdlUG9zaXRpb24oJ3JpZ2h0JylcIj5cbiAgICAgIHt7IHQoJ3NlYXJjaERlbW8uYm90dG9tJykgfX0ge3sgdCgnc2VhcmNoRGVtby5wb3NpdGlvbicpIH19LXt7IHQoJ3NlYXJjaERlbW8ucmlnaHQnKSB9fVxuICAgIDwvRWxCdXR0b24+XG4gIDwvQ29udGVudFdyYXA+XG5cbiAgPENvbnRlbnRXcmFwIDp0aXRsZT1cInQoJ3NlYXJjaERlbW8uc2VhcmNoJylcIiA6bWVzc2FnZT1cInQoJ3NlYXJjaERlbW8uc2VhcmNoRGVzJylcIj5cbiAgICA8U2VhcmNoXG4gICAgICA6c2NoZW1hPVwic2NoZW1hXCJcbiAgICAgIDppcy1jb2w9XCJpc0dyaWRcIlxuICAgICAgOmxheW91dD1cImxheW91dFwiXG4gICAgICA6YnV0dG9tLXBvc2l0aW9uPVwiYnV0dG9tUG9zaXRpb25cIlxuICAgICAgZXhwYW5kXG4gICAgICBleHBhbmQtZmllbGQ9XCJmaWVsZDZcIlxuICAgIC8+XG4gIDwvQ29udGVudFdyYXA+XG48L3RlbXBsYXRlPlxuIl0sIm5hbWVzIjpbInJlcXVpcmVkIiwidXNlVmFsaWRhdG9yIiwidCIsInVzZUkxOG4iLCJzY2hlbWEiLCJyZWFjdGl2ZSIsImZpZWxkIiwibGFiZWwiLCJjb21wb25lbnQiLCJmb3JtSXRlbVByb3BzIiwicnVsZXMiLCJjb21wb25lbnRQcm9wcyIsIm9wdGlvbnMiLCJ2YWx1ZSIsInR5cGUiLCJpc0dyaWQiLCJyZWYiLCJjaGFuZ2VHcmlkIiwiZ3JpZCIsImxheW91dCIsImNoYW5nZUxheW91dCIsInVucmVmIiwiYnV0dG9tUG9zaXRpb24iLCJjaGFuZ2VQb3NpdGlvbiIsInBvc2l0aW9uIl0sIm1hcHBpbmdzIjoidWpDQVFNLE1BQUFBLFNBQUVBLEdBQWFDLEtBRWZDLEVBQUVBLEdBQU1DLElBRVJDLEVBQVNDLEVBQXVCLENBQ3BDLENBQ0VDLE1BQU8sU0FDUEMsTUFBT0wsRUFBRSxrQkFDVE0sVUFBVyxRQUNYQyxjQUFlLENBQ2JDLE1BQU8sQ0FBQ1YsT0FHWixDQUNFTSxNQUFPLFNBQ1BDLE1BQU9MLEVBQUUsbUJBQ1RNLFVBQVcsU0FDWEcsZUFBZ0IsQ0FDZEMsUUFBUyxDQUNQLENBQ0VMLE1BQU8sVUFDUE0sTUFBTyxLQUVULENBQ0VOLE1BQU8sVUFDUE0sTUFBTyxRQUtmLENBQ0VQLE1BQU8sU0FDUEMsTUFBT0wsRUFBRSxrQkFDVE0sVUFBVyxRQUNYRyxlQUFnQixDQUNkQyxRQUFTLENBQ1AsQ0FDRUwsTUFBTyxXQUNQTSxNQUFPLEtBRVQsQ0FDRU4sTUFBTyxXQUNQTSxNQUFPLFFBS2YsQ0FDRVAsTUFBTyxTQUNQRSxVQUFXLGFBQ1hELE1BQU9MLEVBQUUsdUJBQ1RTLGVBQWdCLENBQ2RHLEtBQU0sU0FHVixDQUNFUixNQUFPLFNBQ1BFLFVBQVcsYUFDWEQsTUFBT0wsRUFBRSx3QkFFWCxDQUNFSSxNQUFPLFNBQ1BDLE1BQU9MLEVBQUUsa0JBQ1RNLFVBQVcsUUFDWEMsY0FBZSxDQUNiQyxNQUFPLENBQUNWLE9BR1osQ0FDRU0sTUFBTyxTQUNQQyxNQUFPTCxFQUFFLGtCQUNUTSxVQUFXLFFBQ1hDLGNBQWUsQ0FDYkMsTUFBTyxDQUFDVixPQUdaLENBQ0VNLE1BQU8sVUFDUEMsTUFBT0wsRUFBRSxrQkFDVE0sVUFBVyxRQUNYQyxjQUFlLENBQ2JDLE1BQU8sQ0FBQ1YsT0FHWixDQUNFTSxNQUFPLFVBQ1BDLE1BQU9MLEVBQUUsa0JBQ1RNLFVBQVcsUUFDWEMsY0FBZSxDQUNiQyxNQUFPLENBQUNWLE9BR1osQ0FDRU0sTUFBTyxVQUNQQyxNQUFPTCxFQUFFLGtCQUNUTSxVQUFXLFFBQ1hDLGNBQWUsQ0FDYkMsTUFBTyxDQUFDVixPQUdaLENBQ0VNLE1BQU8sVUFDUEMsTUFBT0wsRUFBRSxrQkFDVE0sVUFBVyxRQUNYQyxjQUFlLENBQ2JDLE1BQU8sQ0FBQ1YsT0FHWixDQUNFTSxNQUFPLFVBQ1BDLE1BQU9MLEVBQUUsa0JBQ1RNLFVBQVcsUUFDWEMsY0FBZSxDQUNiQyxNQUFPLENBQUNWLE9BR1osQ0FDRU0sTUFBTyxVQUNQQyxNQUFPTCxFQUFFLGtCQUNUTSxVQUFXLFFBQ1hDLGNBQWUsQ0FDYkMsTUFBTyxDQUFDVixPQUdaLENBQ0VNLE1BQU8sVUFDUEMsTUFBT0wsRUFBRSxrQkFDVE0sVUFBVyxRQUNYQyxjQUFlLENBQ2JDLE1BQU8sQ0FBQ1YsT0FHWixDQUNFTSxNQUFPLFVBQ1BDLE1BQU9MLEVBQUUsa0JBQ1RNLFVBQVcsUUFDWEMsY0FBZSxDQUNiQyxNQUFPLENBQUNWLE9BR1osQ0FDRU0sTUFBTyxVQUNQQyxNQUFPTCxFQUFFLGtCQUNUTSxVQUFXLFFBQ1hDLGNBQWUsQ0FDYkMsTUFBTyxDQUFDVixTQUtSZSxFQUFTQyxHQUFJLEdBRWJDLEVBQWNDLElBQ2xCSCxFQUFPRixNQUFRSyxHQUdYQyxFQUFTSCxFQUFJLFVBRWJJLEVBQWUsS0FDbkJELEVBQU9OLE1BQTBCLFdBQWxCUSxFQUFNRixHQUF1QixTQUFXLFVBR25ERyxFQUFpQk4sRUFBSSxRQUVyQk8sRUFBa0JDLElBQ3RCTCxFQUFPTixNQUFRLFNBQ2ZTLEVBQWVULE1BQVFXIn0=
