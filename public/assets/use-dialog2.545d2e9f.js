import{Q as e,b6 as o,R as l,aA as a,bN as t,r as n,D as s,az as u,bl as c,cc as d,v as r,ab as p,$ as f,aI as i,cd as y,P as v}from"./index.701681eb.js";import{U as m}from"./event2.1741f333.js";import{u as b}from"./index2.01250fd4.js";import{b as C}from"./el-overlay.bdf8afb7.js";const B=e({center:{type:Boolean,default:!1},closeIcon:{type:o,default:""},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),x={close:()=>!0},g=e({...B,appendToBody:{type:Boolean,default:!1},beforeClose:{type:l(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,required:!0},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),D={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[m]:e=>a(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},I=(e,o)=>{const l=i().emit,{nextZIndex:a}=t();let B="";const x=b(),g=b(),D=n(!1),I=n(!1),h=n(!1),F=n(e.zIndex||a());let w,A;const O=s((()=>u(e.width)?`${e.width}px`:e.width)),S=c("namespace",d),k=s((()=>{const o={},l=`--${S.value}-dialog`;return e.fullscreen||(e.top&&(o[`${l}-margin-top`]=e.top),e.width&&(o[`${l}-width`]=O.value)),o}));function z(){null==A||A(),null==w||w(),e.openDelay&&e.openDelay>0?({stop:w}=y((()=>j()),e.openDelay)):j()}function N(){null==w||w(),null==A||A(),e.closeDelay&&e.closeDelay>0?({stop:A}=y((()=>E()),e.closeDelay)):E()}function $(){e.beforeClose?e.beforeClose((function(e){e||(I.value=!0,D.value=!1)})):N()}function j(){v&&(D.value=!0)}function E(){D.value=!1}return e.lockScroll&&C(D),r((()=>e.modelValue),(t=>{t?(I.value=!1,z(),h.value=!0,l("open"),F.value=e.zIndex?F.value++:a(),p((()=>{o.value&&(o.value.scrollTop=0)}))):D.value&&N()})),r((()=>e.fullscreen),(e=>{o.value&&(e?(B=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=B)})),f((()=>{e.modelValue&&(D.value=!0,h.value=!0,z())})),{afterEnter:function(){l("opened")},afterLeave:function(){l("closed"),l(m,!1),e.destroyOnClose&&(h.value=!1)},beforeLeave:function(){l("close")},handleClose:$,onModalClick:function(){e.closeOnClickModal&&$()},close:N,doClose:E,onOpenAutoFocus:function(){l("openAutoFocus")},onCloseAutoFocus:function(){l("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&$()},titleId:x,bodyId:g,closed:I,style:k,rendered:h,visible:D,zIndex:F}};export{x as a,g as b,D as c,B as d,I as u};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLWRpYWxvZzIuNTQ1ZDJlOWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWdpc3RyeS5ucG1taXJyb3IuY29tK2VsZW1lbnQtcGx1c0AyLjIuNl92dWVAMy4yLjM3L25vZGVfbW9kdWxlcy9lbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9kaWFsb2cvc3JjL2RpYWxvZy1jb250ZW50My5tanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcmVnaXN0cnkubnBtbWlycm9yLmNvbStlbGVtZW50LXBsdXNAMi4yLjZfdnVlQDMuMi4zNy9ub2RlX21vZHVsZXMvZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvZGlhbG9nL3NyYy9kaWFsb2czLm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWdpc3RyeS5ucG1taXJyb3IuY29tK2VsZW1lbnQtcGx1c0AyLjIuNl92dWVAMy4yLjM3L25vZGVfbW9kdWxlcy9lbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9kaWFsb2cvc3JjL3VzZS1kaWFsb2cyLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uLy4uLy4uL3V0aWxzL2luZGV4Mi5tanMnO1xuaW1wb3J0IHsgYnVpbGRQcm9wcyB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3Z1ZS9wcm9wcy9ydW50aW1lMi5tanMnO1xuaW1wb3J0IHsgaWNvblByb3BUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdnVlL2ljb24yLm1qcyc7XG5cbmNvbnN0IGRpYWxvZ0NvbnRlbnRQcm9wcyA9IGJ1aWxkUHJvcHMoe1xuICBjZW50ZXI6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlXG4gIH0sXG4gIGNsb3NlSWNvbjoge1xuICAgIHR5cGU6IGljb25Qcm9wVHlwZSxcbiAgICBkZWZhdWx0OiBcIlwiXG4gIH0sXG4gIGN1c3RvbUNsYXNzOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6IFwiXCJcbiAgfSxcbiAgZHJhZ2dhYmxlOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZVxuICB9LFxuICBmdWxsc2NyZWVuOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiBmYWxzZVxuICB9LFxuICBzaG93Q2xvc2U6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWVcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogXCJcIlxuICB9XG59KTtcbmNvbnN0IGRpYWxvZ0NvbnRlbnRFbWl0cyA9IHtcbiAgY2xvc2U6ICgpID0+IHRydWVcbn07XG5cbmV4cG9ydCB7IGRpYWxvZ0NvbnRlbnRFbWl0cywgZGlhbG9nQ29udGVudFByb3BzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kaWFsb2ctY29udGVudDMubWpzLm1hcFxuIiwiaW1wb3J0ICcuLi8uLi8uLi91dGlscy9pbmRleDIubWpzJztcbmltcG9ydCAnLi4vLi4vLi4vY29uc3RhbnRzL2luZGV4Mi5tanMnO1xuaW1wb3J0IHsgZGlhbG9nQ29udGVudFByb3BzIH0gZnJvbSAnLi9kaWFsb2ctY29udGVudDMubWpzJztcbmltcG9ydCB7IGJ1aWxkUHJvcHMsIGRlZmluZVByb3BUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdnVlL3Byb3BzL3J1bnRpbWUyLm1qcyc7XG5pbXBvcnQgeyBVUERBVEVfTU9ERUxfRVZFTlQgfSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvZXZlbnQyLm1qcyc7XG5pbXBvcnQgeyBpc0Jvb2xlYW4gfSBmcm9tICdAdnVldXNlL2NvcmUnO1xuXG5jb25zdCBkaWFsb2dQcm9wcyA9IGJ1aWxkUHJvcHMoe1xuICAuLi5kaWFsb2dDb250ZW50UHJvcHMsXG4gIGFwcGVuZFRvQm9keToge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2VcbiAgfSxcbiAgYmVmb3JlQ2xvc2U6IHtcbiAgICB0eXBlOiBkZWZpbmVQcm9wVHlwZShGdW5jdGlvbilcbiAgfSxcbiAgZGVzdHJveU9uQ2xvc2U6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IGZhbHNlXG4gIH0sXG4gIGNsb3NlT25DbGlja01vZGFsOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlXG4gIH0sXG4gIGNsb3NlT25QcmVzc0VzY2FwZToge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogdHJ1ZVxuICB9LFxuICBsb2NrU2Nyb2xsOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlXG4gIH0sXG4gIG1vZGFsOiB7XG4gICAgdHlwZTogQm9vbGVhbixcbiAgICBkZWZhdWx0OiB0cnVlXG4gIH0sXG4gIG9wZW5EZWxheToge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAwXG4gIH0sXG4gIGNsb3NlRGVsYXk6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMFxuICB9LFxuICB0b3A6IHtcbiAgICB0eXBlOiBTdHJpbmdcbiAgfSxcbiAgbW9kZWxWYWx1ZToge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfSxcbiAgbW9kYWxDbGFzczogU3RyaW5nLFxuICB3aWR0aDoge1xuICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl1cbiAgfSxcbiAgekluZGV4OiB7XG4gICAgdHlwZTogTnVtYmVyXG4gIH0sXG4gIHRyYXBGb2N1czoge1xuICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgZGVmYXVsdDogZmFsc2VcbiAgfVxufSk7XG5jb25zdCBkaWFsb2dFbWl0cyA9IHtcbiAgb3BlbjogKCkgPT4gdHJ1ZSxcbiAgb3BlbmVkOiAoKSA9PiB0cnVlLFxuICBjbG9zZTogKCkgPT4gdHJ1ZSxcbiAgY2xvc2VkOiAoKSA9PiB0cnVlLFxuICBbVVBEQVRFX01PREVMX0VWRU5UXTogKHZhbHVlKSA9PiBpc0Jvb2xlYW4odmFsdWUpLFxuICBvcGVuQXV0b0ZvY3VzOiAoKSA9PiB0cnVlLFxuICBjbG9zZUF1dG9Gb2N1czogKCkgPT4gdHJ1ZVxufTtcblxuZXhwb3J0IHsgZGlhbG9nRW1pdHMsIGRpYWxvZ1Byb3BzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kaWFsb2czLm1qcy5tYXBcbiIsImltcG9ydCB7IGdldEN1cnJlbnRJbnN0YW5jZSwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG5leHRUaWNrLCBvbk1vdW50ZWQgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgaXNOdW1iZXIsIHVzZVRpbWVvdXRGbiwgaXNDbGllbnQgfSBmcm9tICdAdnVldXNlL2NvcmUnO1xuaW1wb3J0ICcuLi8uLi8uLi9ob29rcy9pbmRleDIubWpzJztcbmltcG9ydCAnLi4vLi4vLi4vY29uc3RhbnRzL2luZGV4Mi5tanMnO1xuaW1wb3J0ICcuLi8uLi8uLi91dGlscy9pbmRleDIubWpzJztcbmltcG9ydCB7IHVzZVpJbmRleCB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZS16LWluZGV4L2luZGV4Mi5tanMnO1xuaW1wb3J0IHsgdXNlSWQgfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2UtaWQvaW5kZXgyLm1qcyc7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2UtZ2xvYmFsLWNvbmZpZy9pbmRleDIubWpzJztcbmltcG9ydCB7IGRlZmF1bHROYW1lc3BhY2UgfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2UtbmFtZXNwYWNlL2luZGV4Mi5tanMnO1xuaW1wb3J0IHsgVVBEQVRFX01PREVMX0VWRU5UIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2V2ZW50Mi5tanMnO1xuaW1wb3J0IHsgdXNlTG9ja3NjcmVlbiB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZS1sb2Nrc2NyZWVuL2luZGV4Mi5tanMnO1xuXG5jb25zdCB1c2VEaWFsb2cgPSAocHJvcHMsIHRhcmdldFJlZikgPT4ge1xuICBjb25zdCBpbnN0YW5jZSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpO1xuICBjb25zdCBlbWl0ID0gaW5zdGFuY2UuZW1pdDtcbiAgY29uc3QgeyBuZXh0WkluZGV4IH0gPSB1c2VaSW5kZXgoKTtcbiAgbGV0IGxhc3RQb3NpdGlvbiA9IFwiXCI7XG4gIGNvbnN0IHRpdGxlSWQgPSB1c2VJZCgpO1xuICBjb25zdCBib2R5SWQgPSB1c2VJZCgpO1xuICBjb25zdCB2aXNpYmxlID0gcmVmKGZhbHNlKTtcbiAgY29uc3QgY2xvc2VkID0gcmVmKGZhbHNlKTtcbiAgY29uc3QgcmVuZGVyZWQgPSByZWYoZmFsc2UpO1xuICBjb25zdCB6SW5kZXggPSByZWYocHJvcHMuekluZGV4IHx8IG5leHRaSW5kZXgoKSk7XG4gIGxldCBvcGVuVGltZXIgPSB2b2lkIDA7XG4gIGxldCBjbG9zZVRpbWVyID0gdm9pZCAwO1xuICBjb25zdCBub3JtYWxpemVXaWR0aCA9IGNvbXB1dGVkKCgpID0+IGlzTnVtYmVyKHByb3BzLndpZHRoKSA/IGAke3Byb3BzLndpZHRofXB4YCA6IHByb3BzLndpZHRoKTtcbiAgY29uc3QgbmFtZXNwYWNlID0gdXNlR2xvYmFsQ29uZmlnKFwibmFtZXNwYWNlXCIsIGRlZmF1bHROYW1lc3BhY2UpO1xuICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBzdHlsZTIgPSB7fTtcbiAgICBjb25zdCB2YXJQcmVmaXggPSBgLS0ke25hbWVzcGFjZS52YWx1ZX0tZGlhbG9nYDtcbiAgICBpZiAoIXByb3BzLmZ1bGxzY3JlZW4pIHtcbiAgICAgIGlmIChwcm9wcy50b3ApIHtcbiAgICAgICAgc3R5bGUyW2Ake3ZhclByZWZpeH0tbWFyZ2luLXRvcGBdID0gcHJvcHMudG9wO1xuICAgICAgfVxuICAgICAgaWYgKHByb3BzLndpZHRoKSB7XG4gICAgICAgIHN0eWxlMltgJHt2YXJQcmVmaXh9LXdpZHRoYF0gPSBub3JtYWxpemVXaWR0aC52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlMjtcbiAgfSk7XG4gIGZ1bmN0aW9uIGFmdGVyRW50ZXIoKSB7XG4gICAgZW1pdChcIm9wZW5lZFwiKTtcbiAgfVxuICBmdW5jdGlvbiBhZnRlckxlYXZlKCkge1xuICAgIGVtaXQoXCJjbG9zZWRcIik7XG4gICAgZW1pdChVUERBVEVfTU9ERUxfRVZFTlQsIGZhbHNlKTtcbiAgICBpZiAocHJvcHMuZGVzdHJveU9uQ2xvc2UpIHtcbiAgICAgIHJlbmRlcmVkLnZhbHVlID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGJlZm9yZUxlYXZlKCkge1xuICAgIGVtaXQoXCJjbG9zZVwiKTtcbiAgfVxuICBmdW5jdGlvbiBvcGVuKCkge1xuICAgIGNsb3NlVGltZXIgPT0gbnVsbCA/IHZvaWQgMCA6IGNsb3NlVGltZXIoKTtcbiAgICBvcGVuVGltZXIgPT0gbnVsbCA/IHZvaWQgMCA6IG9wZW5UaW1lcigpO1xuICAgIGlmIChwcm9wcy5vcGVuRGVsYXkgJiYgcHJvcHMub3BlbkRlbGF5ID4gMCkge1xuICAgICAgO1xuICAgICAgKHsgc3RvcDogb3BlblRpbWVyIH0gPSB1c2VUaW1lb3V0Rm4oKCkgPT4gZG9PcGVuKCksIHByb3BzLm9wZW5EZWxheSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb09wZW4oKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgb3BlblRpbWVyID09IG51bGwgPyB2b2lkIDAgOiBvcGVuVGltZXIoKTtcbiAgICBjbG9zZVRpbWVyID09IG51bGwgPyB2b2lkIDAgOiBjbG9zZVRpbWVyKCk7XG4gICAgaWYgKHByb3BzLmNsb3NlRGVsYXkgJiYgcHJvcHMuY2xvc2VEZWxheSA+IDApIHtcbiAgICAgIDtcbiAgICAgICh7IHN0b3A6IGNsb3NlVGltZXIgfSA9IHVzZVRpbWVvdXRGbigoKSA9PiBkb0Nsb3NlKCksIHByb3BzLmNsb3NlRGVsYXkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9DbG9zZSgpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZSgpIHtcbiAgICBmdW5jdGlvbiBoaWRlKHNob3VsZENhbmNlbCkge1xuICAgICAgaWYgKHNob3VsZENhbmNlbClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2xvc2VkLnZhbHVlID0gdHJ1ZTtcbiAgICAgIHZpc2libGUudmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb3BzLmJlZm9yZUNsb3NlKSB7XG4gICAgICBwcm9wcy5iZWZvcmVDbG9zZShoaWRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2UoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gb25Nb2RhbENsaWNrKCkge1xuICAgIGlmIChwcm9wcy5jbG9zZU9uQ2xpY2tNb2RhbCkge1xuICAgICAgaGFuZGxlQ2xvc2UoKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gZG9PcGVuKCkge1xuICAgIGlmICghaXNDbGllbnQpXG4gICAgICByZXR1cm47XG4gICAgdmlzaWJsZS52YWx1ZSA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gZG9DbG9zZSgpIHtcbiAgICB2aXNpYmxlLnZhbHVlID0gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gb25PcGVuQXV0b0ZvY3VzKCkge1xuICAgIGVtaXQoXCJvcGVuQXV0b0ZvY3VzXCIpO1xuICB9XG4gIGZ1bmN0aW9uIG9uQ2xvc2VBdXRvRm9jdXMoKSB7XG4gICAgZW1pdChcImNsb3NlQXV0b0ZvY3VzXCIpO1xuICB9XG4gIGlmIChwcm9wcy5sb2NrU2Nyb2xsKSB7XG4gICAgdXNlTG9ja3NjcmVlbih2aXNpYmxlKTtcbiAgfVxuICBmdW5jdGlvbiBvbkNsb3NlUmVxdWVzdGVkKCkge1xuICAgIGlmIChwcm9wcy5jbG9zZU9uUHJlc3NFc2NhcGUpIHtcbiAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgfVxuICB9XG4gIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsICh2YWwpID0+IHtcbiAgICBpZiAodmFsKSB7XG4gICAgICBjbG9zZWQudmFsdWUgPSBmYWxzZTtcbiAgICAgIG9wZW4oKTtcbiAgICAgIHJlbmRlcmVkLnZhbHVlID0gdHJ1ZTtcbiAgICAgIGVtaXQoXCJvcGVuXCIpO1xuICAgICAgekluZGV4LnZhbHVlID0gcHJvcHMuekluZGV4ID8gekluZGV4LnZhbHVlKysgOiBuZXh0WkluZGV4KCk7XG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGlmICh0YXJnZXRSZWYudmFsdWUpIHtcbiAgICAgICAgICB0YXJnZXRSZWYudmFsdWUuc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2aXNpYmxlLnZhbHVlKSB7XG4gICAgICAgIGNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgd2F0Y2goKCkgPT4gcHJvcHMuZnVsbHNjcmVlbiwgKHZhbCkgPT4ge1xuICAgIGlmICghdGFyZ2V0UmVmLnZhbHVlKVxuICAgICAgcmV0dXJuO1xuICAgIGlmICh2YWwpIHtcbiAgICAgIGxhc3RQb3NpdGlvbiA9IHRhcmdldFJlZi52YWx1ZS5zdHlsZS50cmFuc2Zvcm07XG4gICAgICB0YXJnZXRSZWYudmFsdWUuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0UmVmLnZhbHVlLnN0eWxlLnRyYW5zZm9ybSA9IGxhc3RQb3NpdGlvbjtcbiAgICB9XG4gIH0pO1xuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5tb2RlbFZhbHVlKSB7XG4gICAgICB2aXNpYmxlLnZhbHVlID0gdHJ1ZTtcbiAgICAgIHJlbmRlcmVkLnZhbHVlID0gdHJ1ZTtcbiAgICAgIG9wZW4oKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIGFmdGVyRW50ZXIsXG4gICAgYWZ0ZXJMZWF2ZSxcbiAgICBiZWZvcmVMZWF2ZSxcbiAgICBoYW5kbGVDbG9zZSxcbiAgICBvbk1vZGFsQ2xpY2ssXG4gICAgY2xvc2UsXG4gICAgZG9DbG9zZSxcbiAgICBvbk9wZW5BdXRvRm9jdXMsXG4gICAgb25DbG9zZUF1dG9Gb2N1cyxcbiAgICBvbkNsb3NlUmVxdWVzdGVkLFxuICAgIHRpdGxlSWQsXG4gICAgYm9keUlkLFxuICAgIGNsb3NlZCxcbiAgICBzdHlsZSxcbiAgICByZW5kZXJlZCxcbiAgICB2aXNpYmxlLFxuICAgIHpJbmRleFxuICB9O1xufTtcblxuZXhwb3J0IHsgdXNlRGlhbG9nIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtZGlhbG9nMi5tanMubWFwXG4iXSwibmFtZXMiOlsiZGlhbG9nQ29udGVudFByb3BzIiwiYnVpbGRQcm9wcyIsImNlbnRlciIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCIsImNsb3NlSWNvbiIsImljb25Qcm9wVHlwZSIsImN1c3RvbUNsYXNzIiwiU3RyaW5nIiwiZHJhZ2dhYmxlIiwiZnVsbHNjcmVlbiIsInNob3dDbG9zZSIsInRpdGxlIiwiZGlhbG9nQ29udGVudEVtaXRzIiwiY2xvc2UiLCJkaWFsb2dQcm9wcyIsImFwcGVuZFRvQm9keSIsImJlZm9yZUNsb3NlIiwiZGVmaW5lUHJvcFR5cGUiLCJGdW5jdGlvbiIsImRlc3Ryb3lPbkNsb3NlIiwiY2xvc2VPbkNsaWNrTW9kYWwiLCJjbG9zZU9uUHJlc3NFc2NhcGUiLCJsb2NrU2Nyb2xsIiwibW9kYWwiLCJvcGVuRGVsYXkiLCJOdW1iZXIiLCJjbG9zZURlbGF5IiwidG9wIiwibW9kZWxWYWx1ZSIsInJlcXVpcmVkIiwibW9kYWxDbGFzcyIsIndpZHRoIiwiekluZGV4IiwidHJhcEZvY3VzIiwiZGlhbG9nRW1pdHMiLCJvcGVuIiwib3BlbmVkIiwiY2xvc2VkIiwiVVBEQVRFX01PREVMX0VWRU5UIiwidmFsdWUiLCJpc0Jvb2xlYW4iLCJvcGVuQXV0b0ZvY3VzIiwiY2xvc2VBdXRvRm9jdXMiLCJ1c2VEaWFsb2ciLCJwcm9wcyIsInRhcmdldFJlZiIsImVtaXQiLCJnZXRDdXJyZW50SW5zdGFuY2UiLCJuZXh0WkluZGV4IiwidXNlWkluZGV4IiwibGFzdFBvc2l0aW9uIiwidGl0bGVJZCIsInVzZUlkIiwiYm9keUlkIiwidmlzaWJsZSIsInJlZiIsInJlbmRlcmVkIiwib3BlblRpbWVyIiwiY2xvc2VUaW1lciIsIm5vcm1hbGl6ZVdpZHRoIiwiY29tcHV0ZWQiLCJpc051bWJlciIsIm5hbWVzcGFjZSIsInVzZUdsb2JhbENvbmZpZyIsImRlZmF1bHROYW1lc3BhY2UiLCJzdHlsZSIsInN0eWxlMiIsInZhclByZWZpeCIsInN0b3AiLCJ1c2VUaW1lb3V0Rm4iLCJkb09wZW4iLCJkb0Nsb3NlIiwiaGFuZGxlQ2xvc2UiLCJzaG91bGRDYW5jZWwiLCJpc0NsaWVudCIsInVzZUxvY2tzY3JlZW4iLCJ3YXRjaCIsInZhbCIsIm5leHRUaWNrIiwic2Nyb2xsVG9wIiwidHJhbnNmb3JtIiwib25Nb3VudGVkIiwiYWZ0ZXJFbnRlciIsImFmdGVyTGVhdmUiLCJiZWZvcmVMZWF2ZSIsIm9uTW9kYWxDbGljayIsIm9uT3BlbkF1dG9Gb2N1cyIsIm9uQ2xvc2VBdXRvRm9jdXMiLCJvbkNsb3NlUmVxdWVzdGVkIl0sIm1hcHBpbmdzIjoieVJBSUssTUFBQ0EsRUFBcUJDLEVBQVcsQ0FDcENDLE9BQVEsQ0FDTkMsS0FBTUMsUUFDTkMsU0FBUyxHQUVYQyxVQUFXLENBQ1RILEtBQU1JLEVBQ05GLFFBQVMsSUFFWEcsWUFBYSxDQUNYTCxLQUFNTSxPQUNOSixRQUFTLElBRVhLLFVBQVcsQ0FDVFAsS0FBTUMsUUFDTkMsU0FBUyxHQUVYTSxXQUFZLENBQ1ZSLEtBQU1DLFFBQ05DLFNBQVMsR0FFWE8sVUFBVyxDQUNUVCxLQUFNQyxRQUNOQyxTQUFTLEdBRVhRLE1BQU8sQ0FDTFYsS0FBTU0sT0FDTkosUUFBUyxNQUdQUyxFQUFxQixDQUN6QkMsTUFBTyxLQUFNLEdDNUJUQyxFQUFjZixFQUFXLElBQzFCRCxFQUNIaUIsYUFBYyxDQUNaZCxLQUFNQyxRQUNOQyxTQUFTLEdBRVhhLFlBQWEsQ0FDWGYsS0FBTWdCLEVBQWVDLFdBRXZCQyxlQUFnQixDQUNk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
