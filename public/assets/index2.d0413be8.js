import{aa as t,d as e,Y as a,o,k as d,w as s,a2 as l,a6 as n,cb as i,a as p,h as g}from"./index.b1059dae.js";var r=t(e({name:"ElCollapseTransition",setup(t){const e=a("collapse-transition"),r={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,0!==t.scrollHeight?(t.style.maxHeight=`${t.scrollHeight}px`,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){0!==t.scrollHeight&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}};return(t,a)=>(o(),d(g,n({name:p(e).b()},i(r)),{default:s((()=>[l(t.$slots,"default")])),_:3},16,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);r.install=t=>{t.component(r.name,r)};const m=r,y=m;export{y as E,m as _};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgyLmQwNDEzYmU4LmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcmVnaXN0cnkubnBtbWlycm9yLmNvbStlbGVtZW50LXBsdXNAMi4yLjZfdnVlQDMuMi4zNy9ub2RlX21vZHVsZXMvZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvY29sbGFwc2UtdHJhbnNpdGlvbi9zcmMvY29sbGFwc2UtdHJhbnNpdGlvbjIubWpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlZ2lzdHJ5Lm5wbW1pcnJvci5jb20rZWxlbWVudC1wbHVzQDIuMi42X3Z1ZUAzLjIuMzcvbm9kZV9tb2R1bGVzL2VsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2NvbGxhcHNlLXRyYW5zaXRpb24vaW5kZXgyLm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIG9wZW5CbG9jaywgY3JlYXRlQmxvY2ssIFRyYW5zaXRpb24sIG1lcmdlUHJvcHMsIHVucmVmLCB0b0hhbmRsZXJzLCB3aXRoQ3R4LCByZW5kZXJTbG90IH0gZnJvbSAndnVlJztcbmltcG9ydCAnLi4vLi4vLi4vaG9va3MvaW5kZXgyLm1qcyc7XG5pbXBvcnQgX2V4cG9ydF9zZmMgZnJvbSAnLi4vLi4vLi4vX3ZpcnR1YWwvcGx1Z2luLXZ1ZV9leHBvcnQtaGVscGVyLm1qcyc7XG5pbXBvcnQgeyB1c2VOYW1lc3BhY2UgfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2UtbmFtZXNwYWNlL2luZGV4Mi5tanMnO1xuXG5jb25zdCBfX2RlZmF1bHRfXyA9IHtcbiAgbmFtZTogXCJFbENvbGxhcHNlVHJhbnNpdGlvblwiXG59O1xuY29uc3QgX3NmY19tYWluID0gLyogQF9fUFVSRV9fICovIGRlZmluZUNvbXBvbmVudCh7XG4gIC4uLl9fZGVmYXVsdF9fLFxuICBzZXR1cChfX3Byb3BzKSB7XG4gICAgY29uc3QgbnMgPSB1c2VOYW1lc3BhY2UoXCJjb2xsYXBzZS10cmFuc2l0aW9uXCIpO1xuICAgIGNvbnN0IG9uID0ge1xuICAgICAgYmVmb3JlRW50ZXIoZWwpIHtcbiAgICAgICAgaWYgKCFlbC5kYXRhc2V0KVxuICAgICAgICAgIGVsLmRhdGFzZXQgPSB7fTtcbiAgICAgICAgZWwuZGF0YXNldC5vbGRQYWRkaW5nVG9wID0gZWwuc3R5bGUucGFkZGluZ1RvcDtcbiAgICAgICAgZWwuZGF0YXNldC5vbGRQYWRkaW5nQm90dG9tID0gZWwuc3R5bGUucGFkZGluZ0JvdHRvbTtcbiAgICAgICAgZWwuc3R5bGUubWF4SGVpZ2h0ID0gMDtcbiAgICAgICAgZWwuc3R5bGUucGFkZGluZ1RvcCA9IDA7XG4gICAgICAgIGVsLnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwO1xuICAgICAgfSxcbiAgICAgIGVudGVyKGVsKSB7XG4gICAgICAgIGVsLmRhdGFzZXQub2xkT3ZlcmZsb3cgPSBlbC5zdHlsZS5vdmVyZmxvdztcbiAgICAgICAgaWYgKGVsLnNjcm9sbEhlaWdodCAhPT0gMCkge1xuICAgICAgICAgIGVsLnN0eWxlLm1heEhlaWdodCA9IGAke2VsLnNjcm9sbEhlaWdodH1weGA7XG4gICAgICAgICAgZWwuc3R5bGUucGFkZGluZ1RvcCA9IGVsLmRhdGFzZXQub2xkUGFkZGluZ1RvcDtcbiAgICAgICAgICBlbC5zdHlsZS5wYWRkaW5nQm90dG9tID0gZWwuZGF0YXNldC5vbGRQYWRkaW5nQm90dG9tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsLnN0eWxlLm1heEhlaWdodCA9IDA7XG4gICAgICAgICAgZWwuc3R5bGUucGFkZGluZ1RvcCA9IGVsLmRhdGFzZXQub2xkUGFkZGluZ1RvcDtcbiAgICAgICAgICBlbC5zdHlsZS5wYWRkaW5nQm90dG9tID0gZWwuZGF0YXNldC5vbGRQYWRkaW5nQm90dG9tO1xuICAgICAgICB9XG4gICAgICAgIGVsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgIH0sXG4gICAgICBhZnRlckVudGVyKGVsKSB7XG4gICAgICAgIGVsLnN0eWxlLm1heEhlaWdodCA9IFwiXCI7XG4gICAgICAgIGVsLnN0eWxlLm92ZXJmbG93ID0gZWwuZGF0YXNldC5vbGRPdmVyZmxvdztcbiAgICAgIH0sXG4gICAgICBiZWZvcmVMZWF2ZShlbCkge1xuICAgICAgICBpZiAoIWVsLmRhdGFzZXQpXG4gICAgICAgICAgZWwuZGF0YXNldCA9IHt9O1xuICAgICAgICBlbC5kYXRhc2V0Lm9sZFBhZGRpbmdUb3AgPSBlbC5zdHlsZS5wYWRkaW5nVG9wO1xuICAgICAgICBlbC5kYXRhc2V0Lm9sZFBhZGRpbmdCb3R0b20gPSBlbC5zdHlsZS5wYWRkaW5nQm90dG9tO1xuICAgICAgICBlbC5kYXRhc2V0Lm9sZE92ZXJmbG93ID0gZWwuc3R5bGUub3ZlcmZsb3c7XG4gICAgICAgIGVsLnN0eWxlLm1heEhlaWdodCA9IGAke2VsLnNjcm9sbEhlaWdodH1weGA7XG4gICAgICAgIGVsLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgICAgIH0sXG4gICAgICBsZWF2ZShlbCkge1xuICAgICAgICBpZiAoZWwuc2Nyb2xsSGVpZ2h0ICE9PSAwKSB7XG4gICAgICAgICAgZWwuc3R5bGUubWF4SGVpZ2h0ID0gMDtcbiAgICAgICAgICBlbC5zdHlsZS5wYWRkaW5nVG9wID0gMDtcbiAgICAgICAgICBlbC5zdHlsZS5wYWRkaW5nQm90dG9tID0gMDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFmdGVyTGVhdmUoZWwpIHtcbiAgICAgICAgZWwuc3R5bGUubWF4SGVpZ2h0ID0gXCJcIjtcbiAgICAgICAgZWwuc3R5bGUub3ZlcmZsb3cgPSBlbC5kYXRhc2V0Lm9sZE92ZXJmbG93O1xuICAgICAgICBlbC5zdHlsZS5wYWRkaW5nVG9wID0gZWwuZGF0YXNldC5vbGRQYWRkaW5nVG9wO1xuICAgICAgICBlbC5zdHlsZS5wYWRkaW5nQm90dG9tID0gZWwuZGF0YXNldC5vbGRQYWRkaW5nQm90dG9tO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChfY3R4LCBfY2FjaGUpID0+IHtcbiAgICAgIHJldHVybiBvcGVuQmxvY2soKSwgY3JlYXRlQmxvY2soVHJhbnNpdGlvbiwgbWVyZ2VQcm9wcyh7XG4gICAgICAgIG5hbWU6IHVucmVmKG5zKS5iKClcbiAgICAgIH0sIHRvSGFuZGxlcnMob24pKSwge1xuICAgICAgICBkZWZhdWx0OiB3aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICByZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImRlZmF1bHRcIilcbiAgICAgICAgXSksXG4gICAgICAgIF86IDNcbiAgICAgIH0sIDE2LCBbXCJuYW1lXCJdKTtcbiAgICB9O1xuICB9XG59KTtcbnZhciBDb2xsYXBzZVRyYW5zaXRpb24gPSAvKiBAX19QVVJFX18gKi8gX2V4cG9ydF9zZmMoX3NmY19tYWluLCBbW1wiX19maWxlXCIsIFwiL2hvbWUvcnVubmVyL3dvcmsvZWxlbWVudC1wbHVzL2VsZW1lbnQtcGx1cy9wYWNrYWdlcy9jb21wb25lbnRzL2NvbGxhcHNlLXRyYW5zaXRpb24vc3JjL2NvbGxhcHNlLXRyYW5zaXRpb24udnVlXCJdXSk7XG5cbmV4cG9ydCB7IENvbGxhcHNlVHJhbnNpdGlvbiBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb2xsYXBzZS10cmFuc2l0aW9uMi5tanMubWFwXG4iLCJpbXBvcnQgQ29sbGFwc2VUcmFuc2l0aW9uIGZyb20gJy4vc3JjL2NvbGxhcHNlLXRyYW5zaXRpb24yLm1qcyc7XG5cbkNvbGxhcHNlVHJhbnNpdGlvbi5pbnN0YWxsID0gKGFwcCkgPT4ge1xuICBhcHAuY29tcG9uZW50KENvbGxhcHNlVHJhbnNpdGlvbi5uYW1lLCBDb2xsYXBzZVRyYW5zaXRpb24pO1xufTtcbmNvbnN0IF9Db2xsYXBzZVRyYW5zaXRpb24gPSBDb2xsYXBzZVRyYW5zaXRpb247XG5jb25zdCBFbENvbGxhcHNlVHJhbnNpdGlvbiA9IF9Db2xsYXBzZVRyYW5zaXRpb247XG5cbmV4cG9ydCB7IEVsQ29sbGFwc2VUcmFuc2l0aW9uLCBfQ29sbGFwc2VUcmFuc2l0aW9uIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Mi5tanMubWFwXG4iXSwibmFtZXMiOlsiQ29sbGFwc2VUcmFuc2l0aW9uIiwiZGVmaW5lQ29tcG9uZW50IiwibmFtZSIsInNldHVwIiwiX19wcm9wcyIsIm5zIiwidXNlTmFtZXNwYWNlIiwib24iLCJiZWZvcmVFbnRlciIsImVsIiwiZGF0YXNldCIsIm9sZFBhZGRpbmdUb3AiLCJzdHlsZSIsInBhZGRpbmdUb3AiLCJvbGRQYWRkaW5nQm90dG9tIiwicGFkZGluZ0JvdHRvbSIsIm1heEhlaWdodCIsImVudGVyIiwib2xkT3ZlcmZsb3ciLCJvdmVyZmxvdyIsInNjcm9sbEhlaWdodCIsImFmdGVyRW50ZXIiLCJiZWZvcmVMZWF2ZSIsImxlYXZlIiwiYWZ0ZXJMZWF2ZSIsIl9jdHgiLCJfY2FjaGUiLCJvcGVuQmxvY2siLCJjcmVhdGVCbG9jayIsIlRyYW5zaXRpb24iLCJtZXJnZVByb3BzIiwidW5yZWYiLCJiIiwidG9IYW5kbGVycyIsImRlZmF1bHQiLCJ3aXRoQ3R4IiwicmVuZGVyU2xvdCIsIiRzbG90cyIsIl8iLCJpbnN0YWxsIiwiYXBwIiwiY29tcG9uZW50IiwiX0NvbGxhcHNlVHJhbnNpdGlvbiIsIkVsQ29sbGFwc2VUcmFuc2l0aW9uIl0sIm1hcHBpbmdzIjoiNkdBMEVBLElBQUlBLElBbEU4Q0MsRUFBQSxDQUZoREMsS0FBTSx1QkFJTkMsTUFBTUMsR0FDRSxNQUFBQyxFQUFLQyxFQUFhLHVCQUNsQkMsRUFBSyxDQUNUQyxZQUFZQyxHQUNMQSxFQUFHQyxVQUNORCxFQUFHQyxRQUFVLElBQ1pELEVBQUFDLFFBQVFDLGNBQWdCRixFQUFHRyxNQUFNQyxXQUNqQ0osRUFBQUMsUUFBUUksaUJBQW1CTCxFQUFHRyxNQUFNRyxjQUN2Q04sRUFBR0csTUFBTUksVUFBWSxFQUNyQlAsRUFBR0csTUFBTUMsV0FBYSxFQUN0QkosRUFBR0csTUFBTUcsY0FBZ0IsR0FFM0JFLE1BQU1SLEdBQ0RBLEVBQUFDLFFBQVFRLFlBQWNULEVBQUdHLE1BQU1PLFNBQ1YsSUFBcEJWLEVBQUdXLGNBQ0ZYLEVBQUFHLE1BQU1JLFVBQVksR0FBR1AsRUFBR1csaUJBQ3hCWCxFQUFBRyxNQUFNQyxXQUFhSixFQUFHQyxRQUFRQyxjQUM5QkYsRUFBQUcsTUFBTUcsY0FBZ0JOLEVBQUdDLFFBQVFJLG1CQUVwQ0wsRUFBR0csTUFBTUksVUFBWSxFQUNsQlAsRUFBQUcsTUFBTUMsV0FBYUosRUFBR0MsUUFBUUMsY0FDOUJGLEVBQUFHLE1BQU1HLGNBQWdCTixFQUFHQyxRQUFRSSxrQkFFdENMLEVBQUdHLE1BQU1PLFNBQVcsVUFFdEJFLFdBQVdaLEdBQ1RBLEVBQUdHLE1BQU1JLFVBQVksR0FDbEJQLEVBQUFHLE1BQU1PLFNBQVdWLEVBQUdDLFFBQVFRLGFBRWpDSSxZQUFZYixHQUNMQSxFQUFHQyxVQUNORCxFQUFHQyxRQUFVLElBQ1pELEVBQUFDLFFBQVFDLGNBQWdCRixFQUFHRyxNQUFNQyxXQUNqQ0osRUFBQUMsUUFBUUksaUJBQW1CTCxFQUFHRyxNQUFNRyxjQUNwQ04sRUFBQUMsUUFBUVEsWUFBY1QsRUFBR0csTUFBTU8sU0FDL0JWLEVBQUFHLE1BQU1JLFVBQVksR0FBR1AsRUFBR1csaUJBQzNCWCxFQUFHRyxNQUFNTyxTQUFXLFVBRXRCSSxNQUFNZCxHQUNvQixJQUFwQkEsRUFBR1csZUFDTFgsRUFBR0csTUFBTUksVUFBWSxFQUNyQlAsRUFBR0csTUFBTUMsV0FBYSxFQUN0QkosRUFBR0csTUFBTUcsY0FBZ0IsSUFHN0JTLFdBQVdmLEdBQ1RBLEVBQUdHLE1BQU1JLFVBQVksR0FDbEJQLEVBQUFHLE1BQU1PLFNBQVdWLEVBQUdDLFFBQVFRLFlBQzVCVCxFQUFBRyxNQUFNQyxXQUFhSixFQUFHQyxRQUFRQyxjQUM5QkYsRUFBQUcsTUFBTUcsY0FBZ0JOLEVBQUdDLFFBQVFJLG1CQUdqQyxNQUFBLENBQUNXLEVBQU1DLEtBQ0xDLElBQWFDLEVBQVlDLEVBQVlDLEVBQVcsQ0FDckQ1QixLQUFNNkIsRUFBTTFCLEdBQUkyQixLQUNmQyxFQUFXMUIsSUFBTSxDQUNsQjJCLFFBQVNDLEdBQVEsSUFBTSxDQUNyQkMsRUFBV1gsRUFBS1ksT0FBUSxjQUUxQkMsRUFBRyxHQUNGLEdBQUksQ0FBQyxhQUlrRCxDQUFDLENBQUMsU0FBVSxxSEN4RTVFdEMsRUFBbUJ1QyxRQUFXQyxJQUN4QkEsRUFBQUMsVUFBVXpDLEVBQW1CRSxLQUFNRixJQUVwQyxNQUFDMEMsRUFBc0IxQyxFQUN0QjJDLEVBQXVCRCJ9
