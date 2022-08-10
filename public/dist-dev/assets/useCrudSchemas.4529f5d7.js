import{f as e,e as t,t as o}from"./tree.9e4d3f05.js";import{c5 as s,c6 as l,s as i,l as a,bh as n}from"./index.b1059dae.js";const c=s({id:"dict",state:()=>({isSetDict:!1,dictObj:{}}),persist:{enabled:!0},getters:{getDictObj(){return this.dictObj},getIsSetDict(){return this.isSetDict}},actions:{setDictObj(e){this.dictObj=e},setIsSetDict(e){this.isSetDict=e}}})(l),{t:r}=a(),d=e=>{const t=i({searchSchema:[],tableColumns:[],formSchema:[],detailSchema:[]}),o=h(e,t);t.searchSchema=o||[];const s=m(e);t.tableColumns=s||[];const l=p(e);t.formSchema=l;const a=f(e);return t.detailSchema=a,{allSchemas:t}},h=(e,o)=>{const s=[],l=[];t(e,(e=>{var t;if(null==(t=null==e?void 0:e.search)?void 0:t.show){const t={component:e.search.component||"Input",componentProps:{},...e.search,field:e.field,label:e.label};if(t.dictName){const e=c.getDictObj[t.dictName];t.componentProps.options=u(e)}else t.api&&l.push((async()=>{var e;const s=await t.api();if(s){const l=n(o.searchSchema,(e=>e.field===t.field));-1!==l&&(o.searchSchema[l].componentProps.options=u(s.data,null==(e=t.componentProps.optionsAlias)?void 0:e.labelField))}}));delete t.show,delete t.dictName,s.push(t)}}));for(const t of l)t();return s},m=t=>{const s=o(t,{conversion:e=>{var t;if(!1!==(null==(t=null==e?void 0:e.table)?void 0:t.show))return{...e.table,...e}}});return e(s,(e=>(void 0===e.children&&delete e.children,!!e.field)))},p=e=>{const o=[];return t(e,(e=>{var t;if(!1!==(null==(t=null==e?void 0:e.form)?void 0:t.show)){const t={component:e.form&&e.form.component||"Input",...e.form,field:e.field,label:e.label};delete t.show,o.push(t)}})),o},f=e=>{const o=[];return t(e,(e=>{var t;if(!1!==(null==(t=null==e?void 0:e.detail)?void 0:t.show)){const t={...e.detail,field:e.field,label:e.label};delete t.show,o.push(t)}})),o},u=(e,t)=>e.map((e=>(t?e.labelField=r(e.labelField):e.label=r(e.label),e)));export{d as u};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlQ3J1ZFNjaGVtYXMuNDUyOWY1ZDcuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yZS9tb2R1bGVzL2RpY3QudHMiLCIuLi8uLi9zcmMvaG9va3Mvd2ViL3VzZUNydWRTY2hlbWFzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmluZVN0b3JlIH0gZnJvbSAncGluaWEnXHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vaW5kZXgnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpY3RTdGF0ZSB7XHJcbiAgaXNTZXREaWN0OiBib29sZWFuXHJcbiAgZGljdE9iajogUmVjb3JkYWJsZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRGljdFN0b3JlID0gZGVmaW5lU3RvcmUoe1xyXG4gIGlkOiAnZGljdCcsXHJcbiAgc3RhdGU6ICgpOiBEaWN0U3RhdGUgPT4gKHtcclxuICAgIGlzU2V0RGljdDogZmFsc2UsXHJcbiAgICBkaWN0T2JqOiB7fVxyXG4gIH0pLFxyXG4gIHBlcnNpc3Q6IHtcclxuICAgIGVuYWJsZWQ6IHRydWVcclxuICB9LFxyXG4gIGdldHRlcnM6IHtcclxuICAgIGdldERpY3RPYmooKTogUmVjb3JkYWJsZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRpY3RPYmpcclxuICAgIH0sXHJcbiAgICBnZXRJc1NldERpY3QoKTogYm9vbGVhbiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlzU2V0RGljdFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgYWN0aW9uczoge1xyXG4gICAgc2V0RGljdE9iaihkaWN0T2JqOiBSZWNvcmRhYmxlKSB7XHJcbiAgICAgIHRoaXMuZGljdE9iaiA9IGRpY3RPYmpcclxuICAgIH0sXHJcbiAgICBzZXRJc1NldERpY3QoaXNTZXREaWN0OiBib29sZWFuKSB7XHJcbiAgICAgIHRoaXMuaXNTZXREaWN0ID0gaXNTZXREaWN0XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZURpY3RTdG9yZVdpdGhPdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZURpY3RTdG9yZShzdG9yZSlcclxufVxyXG4iLCJpbXBvcnQgeyByZWFjdGl2ZSB9IGZyb20gJ3Z1ZSdcclxuaW1wb3J0IHsgZWFjaFRyZWUsIHRyZWVNYXAsIGZpbHRlciB9IGZyb20gJ0AvdXRpbHMvdHJlZSdcclxuaW1wb3J0IHsgZmluZEluZGV4IH0gZnJvbSAnQC91dGlscydcclxuaW1wb3J0IHsgdXNlRGljdFN0b3JlV2l0aE91dCB9IGZyb20gJ0Avc3RvcmUvbW9kdWxlcy9kaWN0J1xyXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAnQC9ob29rcy93ZWIvdXNlSTE4bidcclxuaW1wb3J0IHR5cGUgeyBBeGlvc1Byb21pc2UgfSBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCB0eXBlIENydWRTY2hlbWEgPSBPbWl0PFRhYmxlQ29sdW1uLCAnY2hpbGRyZW4nPiAmIHtcclxuICBzZWFyY2g/OiBDcnVkU2VhcmNoUGFyYW1zXHJcbiAgdGFibGU/OiBDcnVkVGFibGVQYXJhbXNcclxuICBmb3JtPzogQ3J1ZEZvcm1QYXJhbXNcclxuICBkZXRhaWw/OiBDcnVkRGVzY3JpcHRpb25zUGFyYW1zXHJcbiAgY2hpbGRyZW4/OiBDcnVkU2NoZW1hW11cclxufVxyXG5cclxudHlwZSBDcnVkU2VhcmNoUGFyYW1zID0ge1xyXG4gIC8vIOaYr+WQpuaYvuekuuWcqOafpeivoumhuVxyXG4gIHNob3c/OiBib29sZWFuXHJcbiAgLy8g5a2X5YW45ZCN56ew77yM5Lya5Y675Y+W5YWo5bGA55qE5a2X5YW4XHJcbiAgZGljdE5hbWU/OiBzdHJpbmdcclxuICAvLyDmjqXlj6Pot6/lvoRcclxuICBkaWN0VXJsPzogc3RyaW5nXHJcbn0gJiBPbWl0PEZvcm1TY2hlbWEsICdmaWVsZCc+XHJcblxyXG50eXBlIENydWRUYWJsZVBhcmFtcyA9IHtcclxuICAvLyDmmK/lkKbmmL7npLrooajlpLRcclxuICBzaG93PzogYm9vbGVhblxyXG59ICYgT21pdDxGb3JtU2NoZW1hLCAnZmllbGQnPlxyXG5cclxudHlwZSBDcnVkRm9ybVBhcmFtcyA9IHtcclxuICAvLyDmmK/lkKbmmL7npLrooajljZXpoblcclxuICBzaG93PzogYm9vbGVhblxyXG59ICYgT21pdDxGb3JtU2NoZW1hLCAnZmllbGQnPlxyXG5cclxudHlwZSBDcnVkRGVzY3JpcHRpb25zUGFyYW1zID0ge1xyXG4gIC8vIOaYr+WQpuaYvuekuuihqOWNlemhuVxyXG4gIHNob3c/OiBib29sZWFuXHJcbn0gJiBPbWl0PERlc2NyaXB0aW9uc1NjaGVtYSwgJ2ZpZWxkJz5cclxuXHJcbmNvbnN0IGRpY3RTdG9yZSA9IHVzZURpY3RTdG9yZVdpdGhPdXQoKVxyXG5cclxuY29uc3QgeyB0IH0gPSB1c2VJMThuKClcclxuXHJcbmludGVyZmFjZSBBbGxTY2hlbWFzIHtcclxuICBzZWFyY2hTY2hlbWE6IEZvcm1TY2hlbWFbXVxyXG4gIHRhYmxlQ29sdW1uczogVGFibGVDb2x1bW5bXVxyXG4gIGZvcm1TY2hlbWE6IEZvcm1TY2hlbWFbXVxyXG4gIGRldGFpbFNjaGVtYTogRGVzY3JpcHRpb25zU2NoZW1hW11cclxufVxyXG5cclxuLy8g6L+H5ruk5omA5pyJ57uT5p6EXHJcbmV4cG9ydCBjb25zdCB1c2VDcnVkU2NoZW1hcyA9IChcclxuICBjcnVkU2NoZW1hOiBDcnVkU2NoZW1hW11cclxuKToge1xyXG4gIGFsbFNjaGVtYXM6IEFsbFNjaGVtYXNcclxufSA9PiB7XHJcbiAgLy8g5omA5pyJ57uT5p6E5pWw5o2uXHJcbiAgY29uc3QgYWxsU2NoZW1hcyA9IHJlYWN0aXZlPEFsbFNjaGVtYXM+KHtcclxuICAgIHNlYXJjaFNjaGVtYTogW10sXHJcbiAgICB0YWJsZUNvbHVtbnM6IFtdLFxyXG4gICAgZm9ybVNjaGVtYTogW10sXHJcbiAgICBkZXRhaWxTY2hlbWE6IFtdXHJcbiAgfSlcclxuXHJcbiAgY29uc3Qgc2VhcmNoU2NoZW1hID0gZmlsdGVyU2VhcmNoU2NoZW1hKGNydWRTY2hlbWEsIGFsbFNjaGVtYXMpXHJcbiAgYWxsU2NoZW1hcy5zZWFyY2hTY2hlbWEgPSBzZWFyY2hTY2hlbWEgfHwgW11cclxuXHJcbiAgY29uc3QgdGFibGVDb2x1bW5zID0gZmlsdGVyVGFibGVTY2hlbWEoY3J1ZFNjaGVtYSlcclxuICBhbGxTY2hlbWFzLnRhYmxlQ29sdW1ucyA9IHRhYmxlQ29sdW1ucyB8fCBbXVxyXG5cclxuICBjb25zdCBmb3JtU2NoZW1hID0gZmlsdGVyRm9ybVNjaGVtYShjcnVkU2NoZW1hKVxyXG4gIGFsbFNjaGVtYXMuZm9ybVNjaGVtYSA9IGZvcm1TY2hlbWFcclxuXHJcbiAgY29uc3QgZGV0YWlsU2NoZW1hID0gZmlsdGVyRGVzY3JpcHRpb25zU2NoZW1hKGNydWRTY2hlbWEpXHJcbiAgYWxsU2NoZW1hcy5kZXRhaWxTY2hlbWEgPSBkZXRhaWxTY2hlbWFcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGFsbFNjaGVtYXNcclxuICB9XHJcbn1cclxuXHJcbi8vIOi/h+a7pCBTZWFyY2gg57uT5p6EXHJcbmNvbnN0IGZpbHRlclNlYXJjaFNjaGVtYSA9IChjcnVkU2NoZW1hOiBDcnVkU2NoZW1hW10sIGFsbFNjaGVtYXM6IEFsbFNjaGVtYXMpOiBGb3JtU2NoZW1hW10gPT4ge1xyXG4gIGNvbnN0IHNlYXJjaFNjaGVtYTogRm9ybVNjaGVtYVtdID0gW11cclxuXHJcbiAgLy8g6I635Y+W5a2X5YW45YiX6KGo6Zif5YiXXHJcbiAgY29uc3Qgc2VhcmNoUmVxdWVzdFRhc2s6IEFycmF5PCgpID0+IFByb21pc2U8dm9pZD4+ID0gW11cclxuXHJcbiAgZWFjaFRyZWUoY3J1ZFNjaGVtYSwgKHNjaGVtYUl0ZW06IENydWRTY2hlbWEpID0+IHtcclxuICAgIC8vIOWIpOaWreaYr+WQpuaYvuekulxyXG4gICAgaWYgKHNjaGVtYUl0ZW0/LnNlYXJjaD8uc2hvdykge1xyXG4gICAgICBjb25zdCBzZWFyY2hTY2hlbWFJdGVtID0ge1xyXG4gICAgICAgIC8vIOm7mOiupOS4uiBpbnB1dFxyXG4gICAgICAgIGNvbXBvbmVudDogc2NoZW1hSXRlbS5zZWFyY2guY29tcG9uZW50IHx8ICdJbnB1dCcsXHJcbiAgICAgICAgY29tcG9uZW50UHJvcHM6IHt9LFxyXG4gICAgICAgIC4uLnNjaGVtYUl0ZW0uc2VhcmNoLFxyXG4gICAgICAgIGZpZWxkOiBzY2hlbWFJdGVtLmZpZWxkLFxyXG4gICAgICAgIGxhYmVsOiBzY2hlbWFJdGVtLmxhYmVsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzZWFyY2hTY2hlbWFJdGVtLmRpY3ROYW1lKSB7XHJcbiAgICAgICAgLy8g5aaC5p6c5pyJIGRpY3ROYW1lIOWImeivgeaYjuaYr+S7juWtl+WFuOS4reiOt+WPluaVsOaNrlxyXG4gICAgICAgIGNvbnN0IGRpY3RBcnIgPSBkaWN0U3RvcmUuZ2V0RGljdE9ialtzZWFyY2hTY2hlbWFJdGVtLmRpY3ROYW1lXVxyXG4gICAgICAgIHNlYXJjaFNjaGVtYUl0ZW0uY29tcG9uZW50UHJvcHMhLm9wdGlvbnMgPSBmaWx0ZXJPcHRpb25zKGRpY3RBcnIpXHJcbiAgICAgIH0gZWxzZSBpZiAoc2VhcmNoU2NoZW1hSXRlbS5hcGkpIHtcclxuICAgICAgICBzZWFyY2hSZXF1ZXN0VGFzay5wdXNoKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IChzZWFyY2hTY2hlbWFJdGVtLmFwaSBhcyAoKSA9PiBBeGlvc1Byb21pc2UpKClcclxuICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBmaW5kSW5kZXgoYWxsU2NoZW1hcy5zZWFyY2hTY2hlbWEsICh2OiBGb3JtU2NoZW1hKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHYuZmllbGQgPT09IHNlYXJjaFNjaGVtYUl0ZW0uZmllbGRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgIGFsbFNjaGVtYXMuc2VhcmNoU2NoZW1hW2luZGV4XSEuY29tcG9uZW50UHJvcHMhLm9wdGlvbnMgPSBmaWx0ZXJPcHRpb25zKFxyXG4gICAgICAgICAgICAgICAgcmVzLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hTY2hlbWFJdGVtLmNvbXBvbmVudFByb3BzLm9wdGlvbnNBbGlhcz8ubGFiZWxGaWVsZFxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIOWIoOmZpOS4jeW/heimgeeahOWtl+autVxyXG4gICAgICBkZWxldGUgc2VhcmNoU2NoZW1hSXRlbS5zaG93XHJcbiAgICAgIGRlbGV0ZSBzZWFyY2hTY2hlbWFJdGVtLmRpY3ROYW1lXHJcblxyXG4gICAgICBzZWFyY2hTY2hlbWEucHVzaChzZWFyY2hTY2hlbWFJdGVtKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGZvciAoY29uc3QgdGFzayBvZiBzZWFyY2hSZXF1ZXN0VGFzaykge1xyXG4gICAgdGFzaygpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2VhcmNoU2NoZW1hXHJcbn1cclxuXHJcbi8vIOi/h+a7pCB0YWJsZSDnu5PmnoRcclxuY29uc3QgZmlsdGVyVGFibGVTY2hlbWEgPSAoY3J1ZFNjaGVtYTogQ3J1ZFNjaGVtYVtdKTogVGFibGVDb2x1bW5bXSA9PiB7XHJcbiAgY29uc3QgdGFibGVDb2x1bW5zID0gdHJlZU1hcDxDcnVkU2NoZW1hPihjcnVkU2NoZW1hLCB7XHJcbiAgICBjb252ZXJzaW9uOiAoc2NoZW1hOiBDcnVkU2NoZW1hKSA9PiB7XHJcbiAgICAgIGlmIChzY2hlbWE/LnRhYmxlPy5zaG93ICE9PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zY2hlbWEudGFibGUsXHJcbiAgICAgICAgICAuLi5zY2hlbWFcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG5cclxuICAvLyDnrKzkuIDmrKHov4fmu6TkvJrmnIkgdW5kZWZpbmVkIOaJgOS7pemcgOimgeS6jOasoei/h+a7pFxyXG4gIHJldHVybiBmaWx0ZXI8VGFibGVDb2x1bW4+KHRhYmxlQ29sdW1ucyBhcyBUYWJsZUNvbHVtbltdLCAoZGF0YSkgPT4ge1xyXG4gICAgaWYgKGRhdGEuY2hpbGRyZW4gPT09IHZvaWQgMCkge1xyXG4gICAgICBkZWxldGUgZGF0YS5jaGlsZHJlblxyXG4gICAgfVxyXG4gICAgcmV0dXJuICEhZGF0YS5maWVsZFxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIOi/h+a7pCBmb3JtIOe7k+aehFxyXG5jb25zdCBmaWx0ZXJGb3JtU2NoZW1hID0gKGNydWRTY2hlbWE6IENydWRTY2hlbWFbXSk6IEZvcm1TY2hlbWFbXSA9PiB7XHJcbiAgY29uc3QgZm9ybVNjaGVtYTogRm9ybVNjaGVtYVtdID0gW11cclxuXHJcbiAgZWFjaFRyZWUoY3J1ZFNjaGVtYSwgKHNjaGVtYUl0ZW06IENydWRTY2hlbWEpID0+IHtcclxuICAgIC8vIOWIpOaWreaYr+WQpuaYvuekulxyXG4gICAgaWYgKHNjaGVtYUl0ZW0/LmZvcm0/LnNob3cgIT09IGZhbHNlKSB7XHJcbiAgICAgIGNvbnN0IGZvcm1TY2hlbWFJdGVtID0ge1xyXG4gICAgICAgIC8vIOm7mOiupOS4uiBpbnB1dFxyXG4gICAgICAgIGNvbXBvbmVudDogKHNjaGVtYUl0ZW0uZm9ybSAmJiBzY2hlbWFJdGVtLmZvcm0uY29tcG9uZW50KSB8fCAnSW5wdXQnLFxyXG4gICAgICAgIC4uLnNjaGVtYUl0ZW0uZm9ybSxcclxuICAgICAgICBmaWVsZDogc2NoZW1hSXRlbS5maWVsZCxcclxuICAgICAgICBsYWJlbDogc2NoZW1hSXRlbS5sYWJlbFxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyDliKDpmaTkuI3lv4XopoHnmoTlrZfmrrVcclxuICAgICAgZGVsZXRlIGZvcm1TY2hlbWFJdGVtLnNob3dcclxuXHJcbiAgICAgIGZvcm1TY2hlbWEucHVzaChmb3JtU2NoZW1hSXRlbSlcclxuICAgIH1cclxuICB9KVxyXG5cclxuICByZXR1cm4gZm9ybVNjaGVtYVxyXG59XHJcblxyXG4vLyDov4fmu6QgZGVzY3JpcHRpb25zIOe7k+aehFxyXG5jb25zdCBmaWx0ZXJEZXNjcmlwdGlvbnNTY2hlbWEgPSAoY3J1ZFNjaGVtYTogQ3J1ZFNjaGVtYVtdKTogRGVzY3JpcHRpb25zU2NoZW1hW10gPT4ge1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uc1NjaGVtYTogRm9ybVNjaGVtYVtdID0gW11cclxuXHJcbiAgZWFjaFRyZWUoY3J1ZFNjaGVtYSwgKHNjaGVtYUl0ZW06IENydWRTY2hlbWEpID0+IHtcclxuICAgIC8vIOWIpOaWreaYr+WQpuaYvuekulxyXG4gICAgaWYgKHNjaGVtYUl0ZW0/LmRldGFpbD8uc2hvdyAhPT0gZmFsc2UpIHtcclxuICAgICAgY29uc3QgZGVzY3JpcHRpb25zU2NoZW1hSXRlbSA9IHtcclxuICAgICAgICAuLi5zY2hlbWFJdGVtLmRldGFpbCxcclxuICAgICAgICBmaWVsZDogc2NoZW1hSXRlbS5maWVsZCxcclxuICAgICAgICBsYWJlbDogc2NoZW1hSXRlbS5sYWJlbFxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyDliKDpmaTkuI3lv4XopoHnmoTlrZfmrrVcclxuICAgICAgZGVsZXRlIGRlc2NyaXB0aW9uc1NjaGVtYUl0ZW0uc2hvd1xyXG5cclxuICAgICAgZGVzY3JpcHRpb25zU2NoZW1hLnB1c2goZGVzY3JpcHRpb25zU2NoZW1hSXRlbSlcclxuICAgIH1cclxuICB9KVxyXG5cclxuICByZXR1cm4gZGVzY3JpcHRpb25zU2NoZW1hXHJcbn1cclxuXHJcbi8vIOe7mW9wdGlvbnPmt7vliqDlm73pmYXljJZcclxuY29uc3QgZmlsdGVyT3B0aW9ucyA9IChvcHRpb25zOiBSZWNvcmRhYmxlLCBsYWJlbEZpZWxkPzogc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIG9wdGlvbnMubWFwKCh2OiBSZWNvcmRhYmxlKSA9PiB7XHJcbiAgICBpZiAobGFiZWxGaWVsZCkge1xyXG4gICAgICB2WydsYWJlbEZpZWxkJ10gPSB0KHYubGFiZWxGaWVsZClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZbJ2xhYmVsJ10gPSB0KHYubGFiZWwpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdlxyXG4gIH0pXHJcbn1cclxuIl0sIm5hbWVzIjpbImRpY3RTdG9yZSIsImRlZmluZVN0b3JlIiwiaWQiLCJzdGF0ZSIsImlzU2V0RGljdCIsImRpY3RPYmoiLCJwZXJzaXN0IiwiZW5hYmxlZCIsImdldHRlcnMiLCJnZXREaWN0T2JqIiwidGhpcyIsImdldElzU2V0RGljdCIsImFjdGlvbnMiLCJzZXREaWN0T2JqIiwic2V0SXNTZXREaWN0IiwidXNlRGljdFN0b3JlIiwic3RvcmUiLCJ0IiwidXNlSTE4biIsInVzZUNydWRTY2hlbWFzIiwiY3J1ZFNjaGVtYSIsImFsbFNjaGVtYXMiLCJyZWFjdGl2ZSIsInNlYXJjaFNjaGVtYSIsInRhYmxlQ29sdW1ucyIsImZvcm1TY2hlbWEiLCJkZXRhaWxTY2hlbWEiLCJmaWx0ZXJTZWFyY2hTY2hlbWEiLCJmaWx0ZXJUYWJsZVNjaGVtYSIsImZpbHRlckZvcm1TY2hlbWEiLCJmaWx0ZXJEZXNjcmlwdGlvbnNTY2hlbWEiLCJzZWFyY2hSZXF1ZXN0VGFzayIsImVhY2hUcmVlIiwic2NoZW1hSXRlbSIsIl9hIiwic2VhcmNoIiwic2hvdyIsInNlYXJjaFNjaGVtYUl0ZW0iLCJjb21wb25lbnQiLCJjb21wb25lbnRQcm9wcyIsImZpZWxkIiwibGFiZWwiLCJkaWN0TmFtZSIsImRpY3RBcnIiLCJvcHRpb25zIiwiZmlsdGVyT3B0aW9ucyIsImFwaSIsInB1c2giLCJhc3luYyIsInJlcyIsImluZGV4IiwiZmluZEluZGV4IiwidiIsImRhdGEiLCJfYTIiLCJvcHRpb25zQWxpYXMiLCJsYWJlbEZpZWxkIiwidGFzayIsInRyZWVNYXAiLCJjb252ZXJzaW9uIiwic2NoZW1hIiwidGFibGUiLCJmaWx0ZXIiLCJjaGlsZHJlbiIsImZvcm0iLCJmb3JtU2NoZW1hSXRlbSIsImRlc2NyaXB0aW9uc1NjaGVtYSIsImRldGFpbCIsImRlc2NyaXB0aW9uc1NjaGVtYUl0ZW0iLCJtYXAiXSwibWFwcGluZ3MiOiI0SEFRTyxNQytCREEsRUQvQnNCQyxFQUFZLENBQ3RDQyxHQUFJLE9BQ0pDLE1BQU8sS0FBa0IsQ0FDdkJDLFdBQVcsRUFDWEMsUUFBUyxLQUVYQyxRQUFTLENBQ1BDLFNBQVMsR0FFWEMsUUFBUyxDQUNQQyxhQUNFLE9BQU9DLEtBQUtMLFNBRWRNLGVBQ0UsT0FBT0QsS0FBS04sWUFHaEJRLFFBQVMsQ0FDUEMsV0FBV1IsR0FDVEssS0FBS0wsUUFBVUEsR0FFakJTLGFBQWFWLEdBQ1hNLEtBQUtOLFVBQVlBLEtBTWRXLENBQWFDLElDS2hCQyxFQUFFQSxHQUFNQyxJQVVEQyxFQUNYQyxJQUtBLE1BQU1DLEVBQWFDLEVBQXFCLENBQ3RDQyxhQUFjLEdBQ2RDLGFBQWMsR0FDZEMsV0FBWSxHQUNaQyxhQUFjLEtBR1ZILEVBQWVJLEVBQW1CUCxFQUFZQyxHQUN6Q0EsRUFBQUUsYUFBZUEsR0FBZ0IsR0FFcEMsTUFBQUMsRUFBZUksRUFBa0JSLEdBQzVCQyxFQUFBRyxhQUFlQSxHQUFnQixHQUVwQyxNQUFBQyxFQUFhSSxFQUFpQlQsR0FDcENDLEVBQVdJLFdBQWFBLEVBRWxCLE1BQUFDLEVBQWVJLEVBQXlCVixHQUd2QyxPQUZQQyxFQUFXSyxhQUFlQSxFQUVuQixDQUNMTCxXQUFBQSxJQUtFTSxFQUFxQixDQUFDUCxFQUEwQkMsS0FDcEQsTUFBTUUsRUFBNkIsR0FHN0JRLEVBQWdELEdBRTdDQyxFQUFBWixHQUFhYSxVQUVoQixHQUFBLE9BQUFDLEVBQUEsTUFBQUQsT0FBQSxFQUFBQSxFQUFZRSxhQUFaLEVBQUFELEVBQW9CRSxLQUFNLENBQzVCLE1BQU1DLEVBQW1CLENBRXZCQyxVQUFXTCxFQUFXRSxPQUFPRyxXQUFhLFFBQzFDQyxlQUFnQixNQUNiTixFQUFXRSxPQUNkSyxNQUFPUCxFQUFXTyxNQUNsQkMsTUFBT1IsRUFBV1EsT0FHcEIsR0FBSUosRUFBaUJLLFNBQVUsQ0FFdkIsTUFBQUMsRUFBVTNDLEVBQVVTLFdBQVc0QixFQUFpQkssVUFDckNMLEVBQUFFLGVBQWdCSyxRQUFVQyxFQUFjRixRQUNoRE4sRUFBaUJTLEtBQzFCZixFQUFrQmdCLE1BQUtDLGdCQUNmLE1BQUFDLFFBQWFaLEVBQWlCUyxNQUNwQyxHQUFJRyxFQUFLLENBQ1AsTUFBTUMsRUFBUUMsRUFBVTlCLEVBQVdFLGNBQWU2QixHQUN6Q0EsRUFBRVosUUFBVUgsRUFBaUJHLFNBRXBCLElBQWRVLElBQ1M3QixFQUFBRSxhQUFhMkIsR0FBUVgsZUFBZ0JLLFFBQVVDLEVBQ3hESSxFQUFJSSxLQUNKLE9BQWlCQyxFQUFBakIsRUFBQUUsZUFBZWdCLG1CQUFoQyxFQUFBRCxFQUE4Q0Usd0JBUWpEbkIsRUFBaUJELFlBQ2pCQyxFQUFpQkssU0FFeEJuQixFQUFhd0IsS0FBS1YsT0FJdEIsSUFBQSxNQUFXb0IsS0FBUTFCLE1BSVosT0FBQVIsR0FJSEssRUFBcUJSLElBQ25CLE1BQUFJLEVBQWVrQyxFQUFvQnRDLEVBQVksQ0FDbkR1QyxXQUFhQyxVQUNQLElBQXdCLEtBQXhCLE9BQVExQixFQUFBLE1BQUEwQixPQUFBLEVBQUFBLEVBQUFDLFlBQU8sRUFBQTNCLEVBQUFFLE1BQ1YsTUFBQSxJQUNGd0IsRUFBT0MsU0FDUEQsTUFPSixPQUFBRSxFQUFvQnRDLEdBQWdDNkIsU0FDbkMsSUFBbEJBLEVBQUtVLGlCQUNBVixFQUFLVSxXQUVMVixFQUFLYixVQUtaWCxFQUFvQlQsSUFDeEIsTUFBTUssRUFBMkIsR0FvQjFCLE9BbEJFTyxFQUFBWixHQUFhYSxVQUVoQixJQUEyQixLQUEzQixPQUFZQyxFQUFBLE1BQUFELE9BQUEsRUFBQUEsRUFBQStCLFdBQU0sRUFBQTlCLEVBQUFFLE1BQWdCLENBQ3BDLE1BQU02QixFQUFpQixDQUVyQjNCLFVBQVlMLEVBQVcrQixNQUFRL0IsRUFBVytCLEtBQUsxQixXQUFjLFdBQzFETCxFQUFXK0IsS0FDZHhCLE1BQU9QLEVBQVdPLE1BQ2xCQyxNQUFPUixFQUFXUSxjQUlid0IsRUFBZTdCLEtBRXRCWCxFQUFXc0IsS0FBS2tCLE9BSWJ4QyxHQUlISyxFQUE0QlYsSUFDaEMsTUFBTThDLEVBQW1DLEdBa0JsQyxPQWhCRWxDLEVBQUFaLEdBQWFhLFVBRWhCLElBQTZCLEtBQTdCLE9BQVlDLEVBQUEsTUFBQUQsT0FBQSxFQUFBQSxFQUFBa0MsYUFBUSxFQUFBakMsRUFBQUUsTUFBZ0IsQ0FDdEMsTUFBTWdDLEVBQXlCLElBQzFCbkMsRUFBV2tDLE9BQ2QzQixNQUFPUCxFQUFXTyxNQUNsQkMsTUFBT1IsRUFBV1EsY0FJYjJCLEVBQXVCaEMsS0FFOUI4QixFQUFtQm5CLEtBQUtxQixPQUlyQkYsR0FJSHJCLEVBQWdCLENBQUNELEVBQXFCWSxJQUNuQ1osRUFBUXlCLEtBQUtqQixJQUNkSSxFQUNBSixFQUFBLFdBQWdCbkMsRUFBRW1DLEVBQUVJLFlBRXBCSixFQUFBLE1BQVduQyxFQUFFbUMsRUFBRVgsT0FFWlcifQ==
