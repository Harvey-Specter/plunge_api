import{Q as e,b6 as a,R as i,aA as t,V as n,az as s,d as l,a0 as c,a1 as o,aB as d,D as r,Y as u,aq as v,r as h,b3 as f,v as p,an as m,$ as y,aa as b,ab as k,aM as g,ad as w,E as x,o as I,c as V,e as C,n as S,a7 as T,k as B,w as E,as as _,at as N,t as P,G as j,g as D,a4 as K,a8 as z,ae as q}from"./index.b1059dae.js";import{i as A}from"./validator2.e1318026.js";import{U as F,C as G,I as L}from"./event2.1741f333.js";import{u as M,a as Q}from"./index2.094f2439.js";const R=e({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:a,default:""},inactiveIcon:{type:a,default:""},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:i(Function)},size:{type:String,validator:A},tabindex:{type:[String,Number]}}),U=l({name:"ElSwitch",components:{ElIcon:c,Loading:o},props:R,emits:{[F]:e=>t(e)||n(e)||s(e),[G]:e=>t(e)||n(e)||s(e),[L]:e=>t(e)||n(e)||s(e)},setup(e,{emit:a}){const{formItem:i}=M(),n=d(r((()=>e.loading))),s=u("switch"),{inputId:l}=Q(e,{formItemContext:i}),c=v(),o=h(!1!==e.modelValue),b=h(),x=h(),I=r((()=>[s.b(),s.m(c.value),s.is("disabled",n.value),s.is("checked",S.value)])),V=r((()=>({width:f(e.width)})));p((()=>e.modelValue),(()=>{o.value=!0})),p((()=>e.value),(()=>{o.value=!1}));const C=r((()=>o.value?e.modelValue:e.value)),S=r((()=>C.value===e.activeValue));[e.activeValue,e.inactiveValue].includes(C.value)||(a(F,e.inactiveValue),a(G,e.inactiveValue),a(L,e.inactiveValue)),p(S,(()=>{var a;b.value.checked=S.value,e.validateEvent&&(null==(a=null==i?void 0:i.validate)||a.call(i,"change").catch((e=>m())))}));const T=()=>{const i=S.value?e.inactiveValue:e.activeValue;a(F,i),a(G,i),a(L,i),k((()=>{b.value.checked=S.value}))},B=r((()=>s.cssVarBlock({...e.activeColor?{"on-color":e.activeColor}:null,...e.inactiveColor?{"off-color":e.inactiveColor}:null,...e.borderColor?{"border-color":e.borderColor}:null})));return y((()=>{b.value.checked=S.value})),{ns:s,input:b,inputId:l,core:x,switchDisabled:n,checked:S,switchKls:I,coreStyle:V,handleChange:T,switchValue:()=>{if(n.value)return;const{beforeChange:a}=e;if(!a)return void T();const i=a();[g(i),t(i)].some((e=>e))||w("ElSwitch","beforeChange must return type `Promise<boolean>` or `boolean`"),g(i)?i.then((e=>{e&&T()})).catch((e=>{})):i&&T()},focus:()=>{var e,a;null==(a=null==(e=b.value)?void 0:e.focus)||a.call(e)},styles:B}}}),Y=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex"],$=["aria-hidden"],H=["aria-hidden"],J=["aria-hidden"],O=["aria-hidden"];const W=q(b(U,[["render",function(e,a,i,t,n,s){const l=x("el-icon"),c=x("loading");return I(),V("div",{class:S(e.switchKls),style:K(e.styles),onClick:a[2]||(a[2]=z(((...a)=>e.switchValue&&e.switchValue(...a)),["prevent"]))},[C("input",{id:e.inputId,ref:"input",class:S(e.ns.e("input")),type:"checkbox",role:"switch","aria-checked":e.checked,"aria-disabled":e.switchDisabled,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:e.switchDisabled,tabindex:e.tabindex,onChange:a[0]||(a[0]=(...a)=>e.handleChange&&e.handleChange(...a)),onKeydown:a[1]||(a[1]=T(((...a)=>e.switchValue&&e.switchValue(...a)),["enter"]))},null,42,Y),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?N("v-if",!0):(I(),V("span",{key:0,class:S([e.ns.e("label"),e.ns.em("label","left"),e.ns.is("active",!e.checked)])},[e.inactiveIcon?(I(),B(l,{key:0},{default:E((()=>[(I(),B(_(e.inactiveIcon)))])),_:1})):N("v-if",!0),!e.inactiveIcon&&e.inactiveText?(I(),V("span",{key:1,"aria-hidden":e.checked},P(e.inactiveText),9,$)):N("v-if",!0)],2)),C("span",{ref:"core",class:S(e.ns.e("core")),style:K(e.coreStyle)},[e.inlinePrompt?(I(),V("div",{key:0,class:S(e.ns.e("inner"))},[e.activeIcon||e.inactiveIcon?(I(),V(j,{key:0},[e.activeIcon?(I(),B(l,{key:0,class:S([e.ns.is("icon"),e.checked?e.ns.is("show"):e.ns.is("hide")])},{default:E((()=>[(I(),B(_(e.activeIcon)))])),_:1},8,["class"])):N("v-if",!0),e.inactiveIcon?(I(),B(l,{key:1,class:S([e.ns.is("icon"),e.checked?e.ns.is("hide"):e.ns.is("show")])},{default:E((()=>[(I(),B(_(e.inactiveIcon)))])),_:1},8,["class"])):N("v-if",!0)],64)):e.activeText||e.inactiveIcon?(I(),V(j,{key:1},[e.activeText?(I(),V("span",{key:0,class:S([e.ns.is("text"),e.checked?e.ns.is("show"):e.ns.is("hide")]),"aria-hidden":!e.checked},P(e.activeText.substring(0,3)),11,H)):N("v-if",!0),e.inactiveText?(I(),V("span",{key:1,class:S([e.ns.is("text"),e.checked?e.ns.is("hide"):e.ns.is("show")]),"aria-hidden":e.checked},P(e.inactiveText.substring(0,3)),11,J)):N("v-if",!0)],64)):N("v-if",!0)],2)):N("v-if",!0),C("div",{class:S(e.ns.e("action"))},[e.loading?(I(),B(l,{key:0,class:S(e.ns.is("loading"))},{default:E((()=>[D(c)])),_:1},8,["class"])):N("v-if",!0)],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?N("v-if",!0):(I(),V("span",{key:1,class:S([e.ns.e("label"),e.ns.em("label","right"),e.ns.is("active",e.checked)])},[e.activeIcon?(I(),B(l,{key:0},{default:E((()=>[(I(),B(_(e.activeIcon)))])),_:1})):N("v-if",!0),!e.activeIcon&&e.activeText?(I(),V("span",{key:1,"aria-hidden":!e.checked},P(e.activeText),9,O)):N("v-if",!0)],2))],6)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]));export{W as E};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWwtc3dpdGNoLjRhZmJjMGZlLmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcmVnaXN0cnkubnBtbWlycm9yLmNvbStlbGVtZW50LXBsdXNAMi4yLjZfdnVlQDMuMi4zNy9ub2RlX21vZHVsZXMvZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvc3dpdGNoL3NyYy9zd2l0Y2gzLm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWdpc3RyeS5ucG1taXJyb3IuY29tK2VsZW1lbnQtcGx1c0AyLjIuNl92dWVAMy4yLjM3L25vZGVfbW9kdWxlcy9lbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9zd2l0Y2gvc3JjL3N3aXRjaDQubWpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlZ2lzdHJ5Lm5wbW1pcnJvci5jb20rZWxlbWVudC1wbHVzQDIuMi42X3Z1ZUAzLjIuMzcvbm9kZV9tb2R1bGVzL2VsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL3N3aXRjaC9pbmRleDIubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vLi4vLi4vdXRpbHMvaW5kZXgyLm1qcyc7XG5pbXBvcnQgJy4uLy4uLy4uL2NvbnN0YW50cy9pbmRleDIubWpzJztcbmltcG9ydCB7IGJ1aWxkUHJvcHMsIGRlZmluZVByb3BUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdnVlL3Byb3BzL3J1bnRpbWUyLm1qcyc7XG5pbXBvcnQgeyBpY29uUHJvcFR5cGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy92dWUvaWNvbjIubWpzJztcbmltcG9ydCB7IGlzVmFsaWRDb21wb25lbnRTaXplIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdnVlL3ZhbGlkYXRvcjIubWpzJztcbmltcG9ydCB7IFVQREFURV9NT0RFTF9FVkVOVCwgQ0hBTkdFX0VWRU5ULCBJTlBVVF9FVkVOVCB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9ldmVudDIubWpzJztcbmltcG9ydCB7IGlzQm9vbGVhbiwgaXNOdW1iZXIgfSBmcm9tICdAdnVldXNlL2NvcmUnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICdAdnVlL3NoYXJlZCc7XG5cbmNvbnN0IHN3aXRjaFByb3BzID0gYnVpbGRQcm9wcyh7XG4gIG1vZGVsVmFsdWU6IHtcbiAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nLCBOdW1iZXJdLFxuICAgIGRlZmF1bHQ6IGZhbHNlXG4gIH0sXG4gIHZhbHVlOiB7XG4gICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZywgTnVtYmVyXSxcbiAgICBkZWZhdWx0OiBmYWxzZVxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2VcbiAgfSxcbiAgd2lkdGg6IHtcbiAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgIGRlZmF1bHQ6IFwiXCJcbiAgfSxcbiAgaW5saW5lUHJvbXB0OiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZVxuICB9LFxuICBhY3RpdmVJY29uOiB7XG4gICAgdHlwZTogaWNvblByb3BUeXBlLFxuICAgIGRlZmF1bHQ6IFwiXCJcbiAgfSxcbiAgaW5hY3RpdmVJY29uOiB7XG4gICAgdHlwZTogaWNvblByb3BUeXBlLFxuICAgIGRlZmF1bHQ6IFwiXCJcbiAgfSxcbiAgYWN0aXZlVGV4dDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBcIlwiXG4gIH0sXG4gIGluYWN0aXZlVGV4dDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBcIlwiXG4gIH0sXG4gIGFjdGl2ZUNvbG9yOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6IFwiXCJcbiAgfSxcbiAgaW5hY3RpdmVDb2xvcjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBcIlwiXG4gIH0sXG4gIGJvcmRlckNvbG9yOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6IFwiXCJcbiAgfSxcbiAgYWN0aXZlVmFsdWU6IHtcbiAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nLCBOdW1iZXJdLFxuICAgIGRlZmF1bHQ6IHRydWVcbiAgfSxcbiAgaW5hY3RpdmVWYWx1ZToge1xuICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmcsIE51bWJlcl0sXG4gICAgZGVmYXVsdDogZmFsc2VcbiAgfSxcbiAgbmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiBcIlwiXG4gIH0sXG4gIHZhbGlkYXRlRXZlbnQ6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWVcbiAgfSxcbiAgaWQ6IFN0cmluZyxcbiAgbG9hZGluZzoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2VcbiAgfSxcbiAgYmVmb3JlQ2hhbmdlOiB7XG4gICAgdHlwZTogZGVmaW5lUHJvcFR5cGUoRnVuY3Rpb24pXG4gIH0sXG4gIHNpemU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgdmFsaWRhdG9yOiBpc1ZhbGlkQ29tcG9uZW50U2l6ZVxuICB9LFxuICB0YWJpbmRleDoge1xuICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl1cbiAgfVxufSk7XG5jb25zdCBzd2l0Y2hFbWl0cyA9IHtcbiAgW1VQREFURV9NT0RFTF9FVkVOVF06ICh2YWwpID0+IGlzQm9vbGVhbih2YWwpIHx8IGlzU3RyaW5nKHZhbCkgfHwgaXNOdW1iZXIodmFsKSxcbiAgW0NIQU5HRV9FVkVOVF06ICh2YWwpID0+IGlzQm9vbGVhbih2YWwpIHx8IGlzU3RyaW5nKHZhbCkgfHwgaXNOdW1iZXIodmFsKSxcbiAgW0lOUFVUX0VWRU5UXTogKHZhbCkgPT4gaXNCb29sZWFuKHZhbCkgfHwgaXNTdHJpbmcodmFsKSB8fCBpc051bWJlcih2YWwpXG59O1xuXG5leHBvcnQgeyBzd2l0Y2hFbWl0cywgc3dpdGNoUHJvcHMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN3aXRjaDMubWpzLm1hcFxuIiwiaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCBjb21wdXRlZCwgcmVmLCB3YXRjaCwgbmV4dFRpY2ssIG9uTW91bnRlZCwgcmVzb2x2ZUNvbXBvbmVudCwgb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2ssIG5vcm1hbGl6ZUNsYXNzLCBub3JtYWxpemVTdHlsZSwgd2l0aE1vZGlmaWVycywgY3JlYXRlRWxlbWVudFZOb2RlLCB3aXRoS2V5cywgY3JlYXRlQmxvY2ssIHdpdGhDdHgsIHJlc29sdmVEeW5hbWljQ29tcG9uZW50LCBjcmVhdGVDb21tZW50Vk5vZGUsIHRvRGlzcGxheVN0cmluZywgRnJhZ21lbnQsIGNyZWF0ZVZOb2RlIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGlzUHJvbWlzZSB9IGZyb20gJ0B2dWUvc2hhcmVkJztcbmltcG9ydCAnLi4vLi4vLi4vdXRpbHMvaW5kZXgyLm1qcyc7XG5pbXBvcnQgeyBFbEljb24gfSBmcm9tICcuLi8uLi9pY29uL2luZGV4Mi5tanMnO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJ0BlbGVtZW50LXBsdXMvaWNvbnMtdnVlJztcbmltcG9ydCAnLi4vLi4vLi4vY29uc3RhbnRzL2luZGV4Mi5tanMnO1xuaW1wb3J0ICcuLi8uLi8uLi9ob29rcy9pbmRleDIubWpzJztcbmltcG9ydCB7IHN3aXRjaFByb3BzLCBzd2l0Y2hFbWl0cyB9IGZyb20gJy4vc3dpdGNoMy5tanMnO1xuaW1wb3J0IF9leHBvcnRfc2ZjIGZyb20gJy4uLy4uLy4uL192aXJ0dWFsL3BsdWdpbi12dWVfZXhwb3J0LWhlbHBlci5tanMnO1xuaW1wb3J0IHsgdXNlRm9ybUl0ZW0sIHVzZUZvcm1JdGVtSW5wdXRJZCB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZS1mb3JtLWl0ZW0vaW5kZXgyLm1qcyc7XG5pbXBvcnQgeyB1c2VEaXNhYmxlZCwgdXNlU2l6ZSB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZS1jb21tb24tcHJvcHMvaW5kZXgyLm1qcyc7XG5pbXBvcnQgeyB1c2VOYW1lc3BhY2UgfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2UtbmFtZXNwYWNlL2luZGV4Mi5tanMnO1xuaW1wb3J0IHsgYWRkVW5pdCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2RvbS9zdHlsZTIubWpzJztcbmltcG9ydCB7IFVQREFURV9NT0RFTF9FVkVOVCwgQ0hBTkdFX0VWRU5ULCBJTlBVVF9FVkVOVCB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9ldmVudDIubWpzJztcbmltcG9ydCB7IGRlYnVnV2FybiwgdGhyb3dFcnJvciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2Vycm9yMi5tanMnO1xuaW1wb3J0IHsgaXNCb29sZWFuIH0gZnJvbSAnQHZ1ZXVzZS9jb3JlJztcblxuY29uc3QgQ09NUE9ORU5UX05BTUUgPSBcIkVsU3dpdGNoXCI7XG5jb25zdCBfc2ZjX21haW4gPSBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiBDT01QT05FTlRfTkFNRSxcbiAgY29tcG9uZW50czogeyBFbEljb24sIExvYWRpbmcgfSxcbiAgcHJvcHM6IHN3aXRjaFByb3BzLFxuICBlbWl0czogc3dpdGNoRW1pdHMsXG4gIHNldHVwKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGNvbnN0IHsgZm9ybUl0ZW0gfSA9IHVzZUZvcm1JdGVtKCk7XG4gICAgY29uc3Qgc3dpdGNoRGlzYWJsZWQgPSB1c2VEaXNhYmxlZChjb21wdXRlZCgoKSA9PiBwcm9wcy5sb2FkaW5nKSk7XG4gICAgY29uc3QgbnMgPSB1c2VOYW1lc3BhY2UoXCJzd2l0Y2hcIik7XG4gICAgY29uc3QgeyBpbnB1dElkIH0gPSB1c2VGb3JtSXRlbUlucHV0SWQocHJvcHMsIHtcbiAgICAgIGZvcm1JdGVtQ29udGV4dDogZm9ybUl0ZW1cbiAgICB9KTtcbiAgICBjb25zdCBzd2l0Y2hTaXplID0gdXNlU2l6ZSgpO1xuICAgIGNvbnN0IGlzTW9kZWxWYWx1ZSA9IHJlZihwcm9wcy5tb2RlbFZhbHVlICE9PSBmYWxzZSk7XG4gICAgY29uc3QgaW5wdXQgPSByZWYoKTtcbiAgICBjb25zdCBjb3JlID0gcmVmKCk7XG4gICAgY29uc3Qgc3dpdGNoS2xzID0gY29tcHV0ZWQoKCkgPT4gW1xuICAgICAgbnMuYigpLFxuICAgICAgbnMubShzd2l0Y2hTaXplLnZhbHVlKSxcbiAgICAgIG5zLmlzKFwiZGlzYWJsZWRcIiwgc3dpdGNoRGlzYWJsZWQudmFsdWUpLFxuICAgICAgbnMuaXMoXCJjaGVja2VkXCIsIGNoZWNrZWQudmFsdWUpXG4gICAgXSk7XG4gICAgY29uc3QgY29yZVN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHdpZHRoOiBhZGRVbml0KHByb3BzLndpZHRoKVxuICAgIH0pKTtcbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCAoKSA9PiB7XG4gICAgICBpc01vZGVsVmFsdWUudmFsdWUgPSB0cnVlO1xuICAgIH0pO1xuICAgIHdhdGNoKCgpID0+IHByb3BzLnZhbHVlLCAoKSA9PiB7XG4gICAgICBpc01vZGVsVmFsdWUudmFsdWUgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBpc01vZGVsVmFsdWUudmFsdWUgPyBwcm9wcy5tb2RlbFZhbHVlIDogcHJvcHMudmFsdWU7XG4gICAgfSk7XG4gICAgY29uc3QgY2hlY2tlZCA9IGNvbXB1dGVkKCgpID0+IGFjdHVhbFZhbHVlLnZhbHVlID09PSBwcm9wcy5hY3RpdmVWYWx1ZSk7XG4gICAgaWYgKCFbcHJvcHMuYWN0aXZlVmFsdWUsIHByb3BzLmluYWN0aXZlVmFsdWVdLmluY2x1ZGVzKGFjdHVhbFZhbHVlLnZhbHVlKSkge1xuICAgICAgZW1pdChVUERBVEVfTU9ERUxfRVZFTlQsIHByb3BzLmluYWN0aXZlVmFsdWUpO1xuICAgICAgZW1pdChDSEFOR0VfRVZFTlQsIHByb3BzLmluYWN0aXZlVmFsdWUpO1xuICAgICAgZW1pdChJTlBVVF9FVkVOVCwgcHJvcHMuaW5hY3RpdmVWYWx1ZSk7XG4gICAgfVxuICAgIHdhdGNoKGNoZWNrZWQsICgpID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIGlucHV0LnZhbHVlLmNoZWNrZWQgPSBjaGVja2VkLnZhbHVlO1xuICAgICAgaWYgKHByb3BzLnZhbGlkYXRlRXZlbnQpIHtcbiAgICAgICAgKF9hID0gZm9ybUl0ZW0gPT0gbnVsbCA/IHZvaWQgMCA6IGZvcm1JdGVtLnZhbGlkYXRlKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbChmb3JtSXRlbSwgXCJjaGFuZ2VcIikuY2F0Y2goKGVycikgPT4gZGVidWdXYXJuKGVycikpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IGNoZWNrZWQudmFsdWUgPyBwcm9wcy5pbmFjdGl2ZVZhbHVlIDogcHJvcHMuYWN0aXZlVmFsdWU7XG4gICAgICBlbWl0KFVQREFURV9NT0RFTF9FVkVOVCwgdmFsKTtcbiAgICAgIGVtaXQoQ0hBTkdFX0VWRU5ULCB2YWwpO1xuICAgICAgZW1pdChJTlBVVF9FVkVOVCwgdmFsKTtcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgaW5wdXQudmFsdWUuY2hlY2tlZCA9IGNoZWNrZWQudmFsdWU7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHN3aXRjaFZhbHVlID0gKCkgPT4ge1xuICAgICAgaWYgKHN3aXRjaERpc2FibGVkLnZhbHVlKVxuICAgICAgICByZXR1cm47XG4gICAgICBjb25zdCB7IGJlZm9yZUNoYW5nZSB9ID0gcHJvcHM7XG4gICAgICBpZiAoIWJlZm9yZUNoYW5nZSkge1xuICAgICAgICBoYW5kbGVDaGFuZ2UoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2hvdWxkQ2hhbmdlID0gYmVmb3JlQ2hhbmdlKCk7XG4gICAgICBjb25zdCBpc0V4cGVjdFR5cGUgPSBbXG4gICAgICAgIGlzUHJvbWlzZShzaG91bGRDaGFuZ2UpLFxuICAgICAgICBpc0Jvb2xlYW4oc2hvdWxkQ2hhbmdlKVxuICAgICAgXS5zb21lKChpKSA9PiBpKTtcbiAgICAgIGlmICghaXNFeHBlY3RUeXBlKSB7XG4gICAgICAgIHRocm93RXJyb3IoQ09NUE9ORU5UX05BTUUsIFwiYmVmb3JlQ2hhbmdlIG11c3QgcmV0dXJuIHR5cGUgYFByb21pc2U8Ym9vbGVhbj5gIG9yIGBib29sZWFuYFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1Byb21pc2Uoc2hvdWxkQ2hhbmdlKSkge1xuICAgICAgICBzaG91bGRDaGFuZ2UudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIGRlYnVnV2FybihDT01QT05FTlRfTkFNRSwgYHNvbWUgZXJyb3Igb2NjdXJyZWQ6ICR7ZX1gKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZENoYW5nZSkge1xuICAgICAgICBoYW5kbGVDaGFuZ2UoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHN0eWxlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBucy5jc3NWYXJCbG9jayh7XG4gICAgICAgIC4uLnByb3BzLmFjdGl2ZUNvbG9yID8geyBcIm9uLWNvbG9yXCI6IHByb3BzLmFjdGl2ZUNvbG9yIH0gOiBudWxsLFxuICAgICAgICAuLi5wcm9wcy5pbmFjdGl2ZUNvbG9yID8geyBcIm9mZi1jb2xvclwiOiBwcm9wcy5pbmFjdGl2ZUNvbG9yIH0gOiBudWxsLFxuICAgICAgICAuLi5wcm9wcy5ib3JkZXJDb2xvciA/IHsgXCJib3JkZXItY29sb3JcIjogcHJvcHMuYm9yZGVyQ29sb3IgfSA6IG51bGxcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IGZvY3VzID0gKCkgPT4ge1xuICAgICAgdmFyIF9hLCBfYjtcbiAgICAgIChfYiA9IChfYSA9IGlucHV0LnZhbHVlKSA9PSBudWxsID8gdm9pZCAwIDogX2EuZm9jdXMpID09IG51bGwgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKTtcbiAgICB9O1xuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBpbnB1dC52YWx1ZS5jaGVja2VkID0gY2hlY2tlZC52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgbnMsXG4gICAgICBpbnB1dCxcbiAgICAgIGlucHV0SWQsXG4gICAgICBjb3JlLFxuICAgICAgc3dpdGNoRGlzYWJsZWQsXG4gICAgICBjaGVja2VkLFxuICAgICAgc3dpdGNoS2xzLFxuICAgICAgY29yZVN0eWxlLFxuICAgICAgaGFuZGxlQ2hhbmdlLFxuICAgICAgc3dpdGNoVmFsdWUsXG4gICAgICBmb2N1cyxcbiAgICAgIHN0eWxlc1xuICAgIH07XG4gIH1cbn0pO1xuY29uc3QgX2hvaXN0ZWRfMSA9IFtcImlkXCIsIFwiYXJpYS1jaGVja2VkXCIsIFwiYXJpYS1kaXNhYmxlZFwiLCBcIm5hbWVcIiwgXCJ0cnVlLXZhbHVlXCIsIFwiZmFsc2UtdmFsdWVcIiwgXCJkaXNhYmxlZFwiLCBcInRhYmluZGV4XCJdO1xuY29uc3QgX2hvaXN0ZWRfMiA9IFtcImFyaWEtaGlkZGVuXCJdO1xuY29uc3QgX2hvaXN0ZWRfMyA9IFtcImFyaWEtaGlkZGVuXCJdO1xuY29uc3QgX2hvaXN0ZWRfNCA9IFtcImFyaWEtaGlkZGVuXCJdO1xuY29uc3QgX2hvaXN0ZWRfNSA9IFtcImFyaWEtaGlkZGVuXCJdO1xuZnVuY3Rpb24gX3NmY19yZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIGNvbnN0IF9jb21wb25lbnRfZWxfaWNvbiA9IHJlc29sdmVDb21wb25lbnQoXCJlbC1pY29uXCIpO1xuICBjb25zdCBfY29tcG9uZW50X2xvYWRpbmcgPSByZXNvbHZlQ29tcG9uZW50KFwibG9hZGluZ1wiKTtcbiAgcmV0dXJuIG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwge1xuICAgIGNsYXNzOiBub3JtYWxpemVDbGFzcyhfY3R4LnN3aXRjaEtscyksXG4gICAgc3R5bGU6IG5vcm1hbGl6ZVN0eWxlKF9jdHguc3R5bGVzKSxcbiAgICBvbkNsaWNrOiBfY2FjaGVbMl0gfHwgKF9jYWNoZVsyXSA9IHdpdGhNb2RpZmllcnMoKC4uLmFyZ3MpID0+IF9jdHguc3dpdGNoVmFsdWUgJiYgX2N0eC5zd2l0Y2hWYWx1ZSguLi5hcmdzKSwgW1wicHJldmVudFwiXSkpXG4gIH0sIFtcbiAgICBjcmVhdGVFbGVtZW50Vk5vZGUoXCJpbnB1dFwiLCB7XG4gICAgICBpZDogX2N0eC5pbnB1dElkLFxuICAgICAgcmVmOiBcImlucHV0XCIsXG4gICAgICBjbGFzczogbm9ybWFsaXplQ2xhc3MoX2N0eC5ucy5lKFwiaW5wdXRcIikpLFxuICAgICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgcm9sZTogXCJzd2l0Y2hcIixcbiAgICAgIFwiYXJpYS1jaGVja2VkXCI6IF9jdHguY2hlY2tlZCxcbiAgICAgIFwiYXJpYS1kaXNhYmxlZFwiOiBfY3R4LnN3aXRjaERpc2FibGVkLFxuICAgICAgbmFtZTogX2N0eC5uYW1lLFxuICAgICAgXCJ0cnVlLXZhbHVlXCI6IF9jdHguYWN0aXZlVmFsdWUsXG4gICAgICBcImZhbHNlLXZhbHVlXCI6IF9jdHguaW5hY3RpdmVWYWx1ZSxcbiAgICAgIGRpc2FibGVkOiBfY3R4LnN3aXRjaERpc2FibGVkLFxuICAgICAgdGFiaW5kZXg6IF9jdHgudGFiaW5kZXgsXG4gICAgICBvbkNoYW5nZTogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAoLi4uYXJncykgPT4gX2N0eC5oYW5kbGVDaGFuZ2UgJiYgX2N0eC5oYW5kbGVDaGFuZ2UoLi4uYXJncykpLFxuICAgICAgb25LZXlkb3duOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9IHdpdGhLZXlzKCguLi5hcmdzKSA9PiBfY3R4LnN3aXRjaFZhbHVlICYmIF9jdHguc3dpdGNoVmFsdWUoLi4uYXJncyksIFtcImVudGVyXCJdKSlcbiAgICB9LCBudWxsLCA0MiwgX2hvaXN0ZWRfMSksXG4gICAgIV9jdHguaW5saW5lUHJvbXB0ICYmIChfY3R4LmluYWN0aXZlSWNvbiB8fCBfY3R4LmluYWN0aXZlVGV4dCkgPyAob3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhcInNwYW5cIiwge1xuICAgICAga2V5OiAwLFxuICAgICAgY2xhc3M6IG5vcm1hbGl6ZUNsYXNzKFtcbiAgICAgICAgX2N0eC5ucy5lKFwibGFiZWxcIiksXG4gICAgICAgIF9jdHgubnMuZW0oXCJsYWJlbFwiLCBcImxlZnRcIiksXG4gICAgICAgIF9jdHgubnMuaXMoXCJhY3RpdmVcIiwgIV9jdHguY2hlY2tlZClcbiAgICAgIF0pXG4gICAgfSwgW1xuICAgICAgX2N0eC5pbmFjdGl2ZUljb24gPyAob3BlbkJsb2NrKCksIGNyZWF0ZUJsb2NrKF9jb21wb25lbnRfZWxfaWNvbiwgeyBrZXk6IDAgfSwge1xuICAgICAgICBkZWZhdWx0OiB3aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAob3BlbkJsb2NrKCksIGNyZWF0ZUJsb2NrKHJlc29sdmVEeW5hbWljQ29tcG9uZW50KF9jdHguaW5hY3RpdmVJY29uKSkpXG4gICAgICAgIF0pLFxuICAgICAgICBfOiAxXG4gICAgICB9KSkgOiBjcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgICAgIV9jdHguaW5hY3RpdmVJY29uICYmIF9jdHguaW5hY3RpdmVUZXh0ID8gKG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJzcGFuXCIsIHtcbiAgICAgICAga2V5OiAxLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IF9jdHguY2hlY2tlZFxuICAgICAgfSwgdG9EaXNwbGF5U3RyaW5nKF9jdHguaW5hY3RpdmVUZXh0KSwgOSwgX2hvaXN0ZWRfMikpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgIF0sIDIpKSA6IGNyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgY3JlYXRlRWxlbWVudFZOb2RlKFwic3BhblwiLCB7XG4gICAgICByZWY6IFwiY29yZVwiLFxuICAgICAgY2xhc3M6IG5vcm1hbGl6ZUNsYXNzKF9jdHgubnMuZShcImNvcmVcIikpLFxuICAgICAgc3R5bGU6IG5vcm1hbGl6ZVN0eWxlKF9jdHguY29yZVN0eWxlKVxuICAgIH0sIFtcbiAgICAgIF9jdHguaW5saW5lUHJvbXB0ID8gKG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwge1xuICAgICAgICBrZXk6IDAsXG4gICAgICAgIGNsYXNzOiBub3JtYWxpemVDbGFzcyhfY3R4Lm5zLmUoXCJpbm5lclwiKSlcbiAgICAgIH0sIFtcbiAgICAgICAgX2N0eC5hY3RpdmVJY29uIHx8IF9jdHguaW5hY3RpdmVJY29uID8gKG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soRnJhZ21lbnQsIHsga2V5OiAwIH0sIFtcbiAgICAgICAgICBfY3R4LmFjdGl2ZUljb24gPyAob3BlbkJsb2NrKCksIGNyZWF0ZUJsb2NrKF9jb21wb25lbnRfZWxfaWNvbiwge1xuICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgY2xhc3M6IG5vcm1hbGl6ZUNsYXNzKFtfY3R4Lm5zLmlzKFwiaWNvblwiKSwgX2N0eC5jaGVja2VkID8gX2N0eC5ucy5pcyhcInNob3dcIikgOiBfY3R4Lm5zLmlzKFwiaGlkZVwiKV0pXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZGVmYXVsdDogd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgIChvcGVuQmxvY2soKSwgY3JlYXRlQmxvY2socmVzb2x2ZUR5bmFtaWNDb21wb25lbnQoX2N0eC5hY3RpdmVJY29uKSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF86IDFcbiAgICAgICAgICB9LCA4LCBbXCJjbGFzc1wiXSkpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAgICAgICBfY3R4LmluYWN0aXZlSWNvbiA/IChvcGVuQmxvY2soKSwgY3JlYXRlQmxvY2soX2NvbXBvbmVudF9lbF9pY29uLCB7XG4gICAgICAgICAgICBrZXk6IDEsXG4gICAgICAgICAgICBjbGFzczogbm9ybWFsaXplQ2xhc3MoW19jdHgubnMuaXMoXCJpY29uXCIpLCAhX2N0eC5jaGVja2VkID8gX2N0eC5ucy5pcyhcInNob3dcIikgOiBfY3R4Lm5zLmlzKFwiaGlkZVwiKV0pXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgZGVmYXVsdDogd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgIChvcGVuQmxvY2soKSwgY3JlYXRlQmxvY2socmVzb2x2ZUR5bmFtaWNDb21wb25lbnQoX2N0eC5pbmFjdGl2ZUljb24pKSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXzogMVxuICAgICAgICAgIH0sIDgsIFtcImNsYXNzXCJdKSkgOiBjcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgICAgIF0sIDY0KSkgOiBfY3R4LmFjdGl2ZVRleHQgfHwgX2N0eC5pbmFjdGl2ZUljb24gPyAob3BlbkJsb2NrKCksIGNyZWF0ZUVsZW1lbnRCbG9jayhGcmFnbWVudCwgeyBrZXk6IDEgfSwgW1xuICAgICAgICAgIF9jdHguYWN0aXZlVGV4dCA/IChvcGVuQmxvY2soKSwgY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCB7XG4gICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICBjbGFzczogbm9ybWFsaXplQ2xhc3MoW19jdHgubnMuaXMoXCJ0ZXh0XCIpLCBfY3R4LmNoZWNrZWQgPyBfY3R4Lm5zLmlzKFwic2hvd1wiKSA6IF9jdHgubnMuaXMoXCJoaWRlXCIpXSksXG4gICAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6ICFfY3R4LmNoZWNrZWRcbiAgICAgICAgICB9LCB0b0Rpc3BsYXlTdHJpbmcoX2N0eC5hY3RpdmVUZXh0LnN1YnN0cmluZygwLCAzKSksIDExLCBfaG9pc3RlZF8zKSkgOiBjcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgICAgICAgIF9jdHguaW5hY3RpdmVUZXh0ID8gKG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJzcGFuXCIsIHtcbiAgICAgICAgICAgIGtleTogMSxcbiAgICAgICAgICAgIGNsYXNzOiBub3JtYWxpemVDbGFzcyhbX2N0eC5ucy5pcyhcInRleHRcIiksICFfY3R4LmNoZWNrZWQgPyBfY3R4Lm5zLmlzKFwic2hvd1wiKSA6IF9jdHgubnMuaXMoXCJoaWRlXCIpXSksXG4gICAgICAgICAgICBcImFyaWEtaGlkZGVuXCI6IF9jdHguY2hlY2tlZFxuICAgICAgICAgIH0sIHRvRGlzcGxheVN0cmluZyhfY3R4LmluYWN0aXZlVGV4dC5zdWJzdHJpbmcoMCwgMykpLCAxMSwgX2hvaXN0ZWRfNCkpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgICAgICBdLCA2NCkpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgICAgXSwgMikpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAgIGNyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzOiBub3JtYWxpemVDbGFzcyhfY3R4Lm5zLmUoXCJhY3Rpb25cIikpXG4gICAgICB9LCBbXG4gICAgICAgIF9jdHgubG9hZGluZyA/IChvcGVuQmxvY2soKSwgY3JlYXRlQmxvY2soX2NvbXBvbmVudF9lbF9pY29uLCB7XG4gICAgICAgICAga2V5OiAwLFxuICAgICAgICAgIGNsYXNzOiBub3JtYWxpemVDbGFzcyhfY3R4Lm5zLmlzKFwibG9hZGluZ1wiKSlcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlZmF1bHQ6IHdpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9sb2FkaW5nKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF86IDFcbiAgICAgICAgfSwgOCwgW1wiY2xhc3NcIl0pKSA6IGNyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICAgIF0sIDIpXG4gICAgXSwgNiksXG4gICAgIV9jdHguaW5saW5lUHJvbXB0ICYmIChfY3R4LmFjdGl2ZUljb24gfHwgX2N0eC5hY3RpdmVUZXh0KSA/IChvcGVuQmxvY2soKSwgY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCB7XG4gICAgICBrZXk6IDEsXG4gICAgICBjbGFzczogbm9ybWFsaXplQ2xhc3MoW1xuICAgICAgICBfY3R4Lm5zLmUoXCJsYWJlbFwiKSxcbiAgICAgICAgX2N0eC5ucy5lbShcImxhYmVsXCIsIFwicmlnaHRcIiksXG4gICAgICAgIF9jdHgubnMuaXMoXCJhY3RpdmVcIiwgX2N0eC5jaGVja2VkKVxuICAgICAgXSlcbiAgICB9LCBbXG4gICAgICBfY3R4LmFjdGl2ZUljb24gPyAob3BlbkJsb2NrKCksIGNyZWF0ZUJsb2NrKF9jb21wb25lbnRfZWxfaWNvbiwgeyBrZXk6IDAgfSwge1xuICAgICAgICBkZWZhdWx0OiB3aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAob3BlbkJsb2NrKCksIGNyZWF0ZUJsb2NrKHJlc29sdmVEeW5hbWljQ29tcG9uZW50KF9jdHguYWN0aXZlSWNvbikpKVxuICAgICAgICBdKSxcbiAgICAgICAgXzogMVxuICAgICAgfSkpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAgICFfY3R4LmFjdGl2ZUljb24gJiYgX2N0eC5hY3RpdmVUZXh0ID8gKG9wZW5CbG9jaygpLCBjcmVhdGVFbGVtZW50QmxvY2soXCJzcGFuXCIsIHtcbiAgICAgICAga2V5OiAxLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6ICFfY3R4LmNoZWNrZWRcbiAgICAgIH0sIHRvRGlzcGxheVN0cmluZyhfY3R4LmFjdGl2ZVRleHQpLCA5LCBfaG9pc3RlZF81KSkgOiBjcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgXSwgMikpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICBdLCA2KTtcbn1cbnZhciBTd2l0Y2ggPSAvKiBAX19QVVJFX18gKi8gX2V4cG9ydF9zZmMoX3NmY19tYWluLCBbW1wicmVuZGVyXCIsIF9zZmNfcmVuZGVyXSwgW1wiX19maWxlXCIsIFwiL2hvbWUvcnVubmVyL3dvcmsvZWxlbWVudC1wbHVzL2VsZW1lbnQtcGx1cy9wYWNrYWdlcy9jb21wb25lbnRzL3N3aXRjaC9zcmMvc3dpdGNoLnZ1ZVwiXV0pO1xuXG5leHBvcnQgeyBTd2l0Y2ggYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3dpdGNoNC5tanMubWFwXG4iLCJpbXBvcnQgJy4uLy4uL3V0aWxzL2luZGV4Mi5tanMnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICcuL3NyYy9zd2l0Y2g0Lm1qcyc7XG5leHBvcnQgeyBzd2l0Y2hFbWl0cywgc3dpdGNoUHJvcHMgfSBmcm9tICcuL3NyYy9zd2l0Y2gzLm1qcyc7XG5pbXBvcnQgeyB3aXRoSW5zdGFsbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Z1ZS9pbnN0YWxsMi5tanMnO1xuXG5jb25zdCBFbFN3aXRjaCA9IHdpdGhJbnN0YWxsKFN3aXRjaCk7XG5cbmV4cG9ydCB7IEVsU3dpdGNoLCBFbFN3aXRjaCBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleDIubWpzLm1hcFxuIl0sIm5hbWVzIjpbInN3aXRjaFByb3BzIiwiYnVpbGRQcm9wcyIsIm1vZGVsVmFsdWUiLCJ0eXBlIiwiQm9vbGVhbiIsIlN0cmluZyIsIk51bWJlciIsImRlZmF1bHQiLCJ2YWx1ZSIsImRpc2FibGVkIiwid2lkdGgiLCJpbmxpbmVQcm9tcHQiLCJhY3RpdmVJY29uIiwiaWNvblByb3BUeXBlIiwiaW5hY3RpdmVJY29uIiwiYWN0aXZlVGV4dCIsImluYWN0aXZlVGV4dCIsImFjdGl2ZUNvbG9yIiwiaW5hY3RpdmVDb2xvciIsImJvcmRlckNvbG9yIiwiYWN0aXZlVmFsdWUiLCJpbmFjdGl2ZVZhbHVlIiwibmFtZSIsInZhbGlkYXRlRXZlbnQiLCJpZCIsImxvYWRpbmciLCJiZWZvcmVDaGFuZ2UiLCJkZWZpbmVQcm9wVHlwZSIsIkZ1bmN0aW9uIiwic2l6ZSIsInZhbGlkYXRvciIsImlzVmFsaWRDb21wb25lbnRTaXplIiwidGFiaW5kZXgiLCJfc2ZjX21haW4iLCJkZWZpbmVDb21wb25lbnQiLCJjb21wb25lbnRzIiwiRWxJY29uIiwiTG9hZGluZyIsInByb3BzIiwiZW1pdHMiLCJVUERBVEVfTU9ERUxfRVZFTlQiLCJ2YWwiLCJpc0Jvb2xlYW4iLCJpc1N0cmluZyIsImlzTnVtYmVyIiwiQ0hBTkdFX0VWRU5UIiwiSU5QVVRfRVZFTlQiLCJzZXR1cCIsImVtaXQiLCJmb3JtSXRlbSIsInVzZUZvcm1JdGVtIiwic3dpdGNoRGlzYWJsZWQiLCJ1c2VEaXNhYmxlZCIsImNvbXB1dGVkIiwibnMiLCJ1c2VOYW1lc3BhY2UiLCJpbnB1dElkIiwidXNlRm9ybUl0ZW1JbnB1dElkIiwiZm9ybUl0ZW1Db250ZXh0Iiwic3dpdGNoU2l6ZSIsInVzZVNpemUiLCJpc01vZGVsVmFsdWUiLCJyZWYiLCJpbnB1dCIsImNvcmUiLCJzd2l0Y2hLbHMiLCJiIiwibSIsImlzIiwiY2hlY2tlZCIsImNvcmVTdHlsZSIsImFkZFVuaXQiLCJ3YXRjaCIsImFjdHVhbFZhbHVlIiwiaW5jbHVkZXMiLCJfYSIsInZhbGlkYXRlIiwiY2FsbCIsImNhdGNoIiwiZXJyIiwiZGVidWdXYXJuIiwiaGFuZGxlQ2hhbmdlIiwibmV4dFRpY2siLCJzdHlsZXMiLCJjc3NWYXJCbG9jayIsIm9uTW91bnRlZCIsInN3aXRjaFZhbHVlIiwic2hvdWxkQ2hhbmdlIiwiaXNQcm9taXNlIiwic29tZSIsImkiLCJ0aHJvd0Vycm9yIiwidGhlbiIsInJlc3VsdCIsImUiLCJmb2N1cyIsIl9iIiwiX2hvaXN0ZWRfMSIsIl9ob2lzdGVkXzIiLCJfaG9pc3RlZF8zIiwiX2hvaXN0ZWRfNCIsIl9ob2lzdGVkXzUiLCJFbFN3aXRjaCIsIndpdGhJbnN0YWxsIiwiX2V4cG9ydF9zZmMiLCJfY3R4IiwiX2NhY2hlIiwiJHByb3BzIiwiJHNldHVwIiwiJGRhdGEiLCIkb3B0aW9ucyIsIl9jb21wb25lbnRfZWxfaWNvbiIsInJlc29sdmVDb21wb25lbnQiLCJfY29tcG9uZW50X2xvYWRpbmciLCJvcGVuQmxvY2siLCJjcmVhdGVFbGVtZW50QmxvY2siLCJjbGFzcyIsIm5vcm1hbGl6ZUNsYXNzIiwic3R5bGUiLCJub3JtYWxpemVTdHlsZSIsIm9uQ2xpY2siLCJ3aXRoTW9kaWZpZXJzIiwiYXJncyIsImNyZWF0ZUVsZW1lbnRWTm9kZSIsInJvbGUiLCJvbkNoYW5nZSIsIm9uS2V5ZG93biIsIndpdGhLZXlzIiwiY3JlYXRlQ29tbWVudFZOb2RlIiwia2V5IiwiZW0iLCJjcmVhdGVCbG9jayIsIndpdGhDdHgiLCJyZXNvbHZlRHluYW1pY0NvbXBvbmVudCIsIl8iLCJ0b0Rpc3BsYXlTdHJpbmciLCJGcmFnbWVudCIsInN1YnN0cmluZyIsImNyZWF0ZVZOb2RlIl0sIm1hcHBpbmdzIjoia2RBU0EsTUFBTUEsRUFBY0MsRUFBVyxDQUM3QkMsV0FBWSxDQUNWQyxLQUFNLENBQUNDLFFBQVNDLE9BQVFDLFFBQ3hCQyxTQUFTLEdBRVhDLE1BQU8sQ0FDTEwsS0FBTSxDQUFDQyxRQUFTQyxPQUFRQyxRQUN4QkMsU0FBUyxHQUVYRSxTQUFVLENBQ1JOLEtBQU1DLFFBQ05HLFNBQVMsR0FFWEcsTUFBTyxDQUNMUCxLQUFNLENBQUNFLE9BQVFDLFFBQ2ZDLFFBQVMsSUFFWEksYUFBYyxDQUNaUixLQUFNQyxRQUNORyxTQUFTLEdBRVhLLFdBQVksQ0FDVlQsS0FBTVUsRUFDTk4sUUFBUyxJQUVYTyxhQUFjLENBQ1pYLEtBQU1VLEVBQ05OLFFBQVMsSUFFWFEsV0FBWSxDQUNWWixL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
