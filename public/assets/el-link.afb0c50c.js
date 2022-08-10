import{Q as e,b6 as s,d as a,Y as n,o as i,c as l,k as t,w as o,as as d,a as r,a0 as c,at as f,n as u,a2 as p,aa as k,ae as m}from"./index.b1059dae.js";const y=e({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:s,default:""}}),b=["href"];const v=m(k(a({name:"ElLink",props:y,emits:{click:e=>e instanceof MouseEvent},setup(e,{emit:s}){const a=e,k=n("link");function m(e){a.disabled||s("click",e)}return(e,s)=>(i(),l("a",{class:u([r(k).b(),r(k).m(e.type),r(k).is("disabled",e.disabled),r(k).is("underline",e.underline&&!e.disabled)]),href:e.disabled||!e.href?void 0:e.href,onClick:m},[e.icon?(i(),t(r(c),{key:0},{default:o((()=>[(i(),t(d(e.icon)))])),_:1})):f("v-if",!0),e.$slots.default?(i(),l("span",{key:1,class:u(r(k).e("inner"))},[p(e.$slots,"default")],2)):f("v-if",!0),e.$slots.icon?p(e.$slots,"icon",{key:2}):f("v-if",!0)],10,b))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]));export{v as E};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWwtbGluay5hZmIwYzUwYy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlZ2lzdHJ5Lm5wbW1pcnJvci5jb20rZWxlbWVudC1wbHVzQDIuMi42X3Z1ZUAzLjIuMzcvbm9kZV9tb2R1bGVzL2VsZW1lbnQtcGx1cy9lcy9jb21wb25lbnRzL2xpbmsvc3JjL2xpbmszLm1qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWdpc3RyeS5ucG1taXJyb3IuY29tK2VsZW1lbnQtcGx1c0AyLjIuNl92dWVAMy4yLjM3L25vZGVfbW9kdWxlcy9lbGVtZW50LXBsdXMvZXMvY29tcG9uZW50cy9saW5rL3NyYy9saW5rNC5tanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcmVnaXN0cnkubnBtbWlycm9yLmNvbStlbGVtZW50LXBsdXNAMi4yLjZfdnVlQDMuMi4zNy9ub2RlX21vZHVsZXMvZWxlbWVudC1wbHVzL2VzL2NvbXBvbmVudHMvbGluay9pbmRleDIubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vLi4vLi4vdXRpbHMvaW5kZXgyLm1qcyc7XG5pbXBvcnQgeyBidWlsZFByb3BzIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdnVlL3Byb3BzL3J1bnRpbWUyLm1qcyc7XG5pbXBvcnQgeyBpY29uUHJvcFR5cGUgfSBmcm9tICcuLi8uLi8uLi91dGlscy92dWUvaWNvbjIubWpzJztcblxuY29uc3QgbGlua1Byb3BzID0gYnVpbGRQcm9wcyh7XG4gIHR5cGU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgdmFsdWVzOiBbXCJwcmltYXJ5XCIsIFwic3VjY2Vzc1wiLCBcIndhcm5pbmdcIiwgXCJpbmZvXCIsIFwiZGFuZ2VyXCIsIFwiZGVmYXVsdFwiXSxcbiAgICBkZWZhdWx0OiBcImRlZmF1bHRcIlxuICB9LFxuICB1bmRlcmxpbmU6IHtcbiAgICB0eXBlOiBCb29sZWFuLFxuICAgIGRlZmF1bHQ6IHRydWVcbiAgfSxcbiAgZGlzYWJsZWQ6IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcbiAgaHJlZjogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6IFwiXCIgfSxcbiAgaWNvbjoge1xuICAgIHR5cGU6IGljb25Qcm9wVHlwZSxcbiAgICBkZWZhdWx0OiBcIlwiXG4gIH1cbn0pO1xuY29uc3QgbGlua0VtaXRzID0ge1xuICBjbGljazogKGV2dCkgPT4gZXZ0IGluc3RhbmNlb2YgTW91c2VFdmVudFxufTtcblxuZXhwb3J0IHsgbGlua0VtaXRzLCBsaW5rUHJvcHMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmszLm1qcy5tYXBcbiIsImltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2ssIG5vcm1hbGl6ZUNsYXNzLCB1bnJlZiwgY3JlYXRlQmxvY2ssIHdpdGhDdHgsIHJlc29sdmVEeW5hbWljQ29tcG9uZW50LCBjcmVhdGVDb21tZW50Vk5vZGUsIHJlbmRlclNsb3QgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgRWxJY29uIH0gZnJvbSAnLi4vLi4vaWNvbi9pbmRleDIubWpzJztcbmltcG9ydCAnLi4vLi4vLi4vaG9va3MvaW5kZXgyLm1qcyc7XG5pbXBvcnQgeyBsaW5rUHJvcHMsIGxpbmtFbWl0cyB9IGZyb20gJy4vbGluazMubWpzJztcbmltcG9ydCBfZXhwb3J0X3NmYyBmcm9tICcuLi8uLi8uLi9fdmlydHVhbC9wbHVnaW4tdnVlX2V4cG9ydC1oZWxwZXIubWpzJztcbmltcG9ydCB7IHVzZU5hbWVzcGFjZSB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZS1uYW1lc3BhY2UvaW5kZXgyLm1qcyc7XG5cbmNvbnN0IF9ob2lzdGVkXzEgPSBbXCJocmVmXCJdO1xuY29uc3QgX19kZWZhdWx0X18gPSB7XG4gIG5hbWU6IFwiRWxMaW5rXCJcbn07XG5jb25zdCBfc2ZjX21haW4gPSAvKiBAX19QVVJFX18gKi8gZGVmaW5lQ29tcG9uZW50KHtcbiAgLi4uX19kZWZhdWx0X18sXG4gIHByb3BzOiBsaW5rUHJvcHMsXG4gIGVtaXRzOiBsaW5rRW1pdHMsXG4gIHNldHVwKF9fcHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3QgcHJvcHMgPSBfX3Byb3BzO1xuICAgIGNvbnN0IG5zID0gdXNlTmFtZXNwYWNlKFwibGlua1wiKTtcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgICAgaWYgKCFwcm9wcy5kaXNhYmxlZClcbiAgICAgICAgZW1pdChcImNsaWNrXCIsIGV2ZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIChfY3R4LCBfY2FjaGUpID0+IHtcbiAgICAgIHJldHVybiBvcGVuQmxvY2soKSwgY3JlYXRlRWxlbWVudEJsb2NrKFwiYVwiLCB7XG4gICAgICAgIGNsYXNzOiBub3JtYWxpemVDbGFzcyhbXG4gICAgICAgICAgdW5yZWYobnMpLmIoKSxcbiAgICAgICAgICB1bnJlZihucykubShfY3R4LnR5cGUpLFxuICAgICAgICAgIHVucmVmKG5zKS5pcyhcImRpc2FibGVkXCIsIF9jdHguZGlzYWJsZWQpLFxuICAgICAgICAgIHVucmVmKG5zKS5pcyhcInVuZGVybGluZVwiLCBfY3R4LnVuZGVybGluZSAmJiAhX2N0eC5kaXNhYmxlZClcbiAgICAgICAgXSksXG4gICAgICAgIGhyZWY6IF9jdHguZGlzYWJsZWQgfHwgIV9jdHguaHJlZiA/IHZvaWQgMCA6IF9jdHguaHJlZixcbiAgICAgICAgb25DbGljazogaGFuZGxlQ2xpY2tcbiAgICAgIH0sIFtcbiAgICAgICAgX2N0eC5pY29uID8gKG9wZW5CbG9jaygpLCBjcmVhdGVCbG9jayh1bnJlZihFbEljb24pLCB7IGtleTogMCB9LCB7XG4gICAgICAgICAgZGVmYXVsdDogd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAob3BlbkJsb2NrKCksIGNyZWF0ZUJsb2NrKHJlc29sdmVEeW5hbWljQ29tcG9uZW50KF9jdHguaWNvbikpKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF86IDFcbiAgICAgICAgfSkpIDogY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAgICAgX2N0eC4kc2xvdHMuZGVmYXVsdCA/IChvcGVuQmxvY2soKSwgY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCB7XG4gICAgICAgICAga2V5OiAxLFxuICAgICAgICAgIGNsYXNzOiBub3JtYWxpemVDbGFzcyh1bnJlZihucykuZShcImlubmVyXCIpKVxuICAgICAgICB9LCBbXG4gICAgICAgICAgcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJkZWZhdWx0XCIpXG4gICAgICAgIF0sIDIpKSA6IGNyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgICAgIF9jdHguJHNsb3RzLmljb24gPyByZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImljb25cIiwgeyBrZXk6IDIgfSkgOiBjcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgICBdLCAxMCwgX2hvaXN0ZWRfMSk7XG4gICAgfTtcbiAgfVxufSk7XG52YXIgTGluayA9IC8qIEBfX1BVUkVfXyAqLyBfZXhwb3J0X3NmYyhfc2ZjX21haW4sIFtbXCJfX2ZpbGVcIiwgXCIvaG9tZS9ydW5uZXIvd29yay9lbGVtZW50LXBsdXMvZWxlbWVudC1wbHVzL3BhY2thZ2VzL2NvbXBvbmVudHMvbGluay9zcmMvbGluay52dWVcIl1dKTtcblxuZXhwb3J0IHsgTGluayBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rNC5tanMubWFwXG4iLCJpbXBvcnQgJy4uLy4uL3V0aWxzL2luZGV4Mi5tanMnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9zcmMvbGluazQubWpzJztcbmV4cG9ydCB7IGxpbmtFbWl0cywgbGlua1Byb3BzIH0gZnJvbSAnLi9zcmMvbGluazMubWpzJztcbmltcG9ydCB7IHdpdGhJbnN0YWxsIH0gZnJvbSAnLi4vLi4vdXRpbHMvdnVlL2luc3RhbGwyLm1qcyc7XG5cbmNvbnN0IEVsTGluayA9IHdpdGhJbnN0YWxsKExpbmspO1xuXG5leHBvcnQgeyBFbExpbmssIEVsTGluayBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleDIubWpzLm1hcFxuIl0sIm5hbWVzIjpbImxpbmtQcm9wcyIsImJ1aWxkUHJvcHMiLCJ0eXBlIiwiU3RyaW5nIiwidmFsdWVzIiwiZGVmYXVsdCIsInVuZGVybGluZSIsIkJvb2xlYW4iLCJkaXNhYmxlZCIsImhyZWYiLCJpY29uIiwiaWNvblByb3BUeXBlIiwiX2hvaXN0ZWRfMSIsIkVsTGluayIsIndpdGhJbnN0YWxsIiwiZGVmaW5lQ29tcG9uZW50IiwibmFtZSIsInByb3BzIiwiZW1pdHMiLCJjbGljayIsImV2dCIsIk1vdXNlRXZlbnQiLCJzZXR1cCIsIl9fcHJvcHMiLCJlbWl0IiwibnMiLCJ1c2VOYW1lc3BhY2UiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiX2N0eCIsIl9jYWNoZSIsIm9wZW5CbG9jayIsImNyZWF0ZUVsZW1lbnRCbG9jayIsImNsYXNzIiwibm9ybWFsaXplQ2xhc3MiLCJ1bnJlZiIsImIiLCJtIiwiaXMiLCJvbkNsaWNrIiwiY3JlYXRlQmxvY2siLCJFbEljb24iLCJrZXkiLCJ3aXRoQ3R4IiwicmVzb2x2ZUR5bmFtaWNDb21wb25lbnQiLCJfIiwiY3JlYXRlQ29tbWVudFZOb2RlIiwiJHNsb3RzIiwiZSIsInJlbmRlclNsb3QiXSwibWFwcGluZ3MiOiJ3SkFJQSxNQUFNQSxFQUFZQyxFQUFXLENBQzNCQyxLQUFNLENBQ0pBLEtBQU1DLE9BQ05DLE9BQVEsQ0FBQyxVQUFXLFVBQVcsVUFBVyxPQUFRLFNBQVUsV0FDNURDLFFBQVMsV0FFWEMsVUFBVyxDQUNUSixLQUFNSyxRQUNORixTQUFTLEdBRVhHLFNBQVUsQ0FBRU4sS0FBTUssUUFBU0YsU0FBUyxHQUNwQ0ksS0FBTSxDQUFFUCxLQUFNQyxPQUFRRSxRQUFTLElBQy9CSyxLQUFNLENBQ0pSLEtBQU1TLEVBQ05OLFFBQVMsTUNYUE8sRUFBYSxDQUFDLFFDRmYsTUFBQ0MsRUFBU0MsSURNbUNDLEVBQUEsQ0FGaERDLEtBQU0sU0FJTkMsTUFBT2pCLEVBQ1BrQixNRE9nQixDQUNoQkMsTUFBUUMsR0FBUUEsYUFBZUMsWUNQL0JDLE1BQU1DLEdBQVNDLEtBQUVBLElBQ2YsTUFBTVAsRUFBUU0sRUFDUkUsRUFBS0MsRUFBYSxRQUN4QixTQUFBQyxFQUFxQkMsR0FDZFgsRUFBTVQsVUFDVGdCLEVBQUssUUFBU0ksR0FFWCxNQUFBLENBQUNDLEVBQU1DLEtBQ0xDLElBQWFDLEVBQW1CLElBQUssQ0FDMUNDLE1BQU9DLEVBQWUsQ0FDcEJDLEVBQU1WLEdBQUlXLElBQ1ZELEVBQU1WLEdBQUlZLEVBQUVSLEVBQUszQixNQUNqQmlDLEVBQU1WLEdBQUlhLEdBQUcsV0FBWVQsRUFBS3JCLFVBQzlCMkIsRUFBTVYsR0FBSWEsR0FBRyxZQUFhVCxFQUFLdkIsWUFBY3VCLEVBQUtyQixZQUVwREMsS0FBTW9CLEVBQUtyQixXQUFhcUIsRUFBS3BCLFVBQU8sRUFBU29CLEVBQUtwQixLQUNsRDhCLFFBQVNaLEdBQ1IsQ0FDREUsRUFBS25CLE1BQVFxQixJQUFhUyxFQUFZTCxFQUFNTSxHQUFTLENBQUVDLElBQUssR0FBSyxDQUMvRHJDLFFBQVNzQyxHQUFRLElBQU0sTUFDUEgsRUFBWUksRUFBd0JmLEVBQUtuQixXQUV6RG1DLEVBQUcsS0FDQ0MsRUFBbUIsUUFBUSxHQUNqQ2pCLEVBQUtrQixPQUFPMUMsU0FBb0IwQixJQUFJQyxFQUFtQixPQUFRLENBQzdEVSxJQUFLLEVBQ0xULE1BQU9DLEVBQWVDLEVBQU1WLEdBQUl1QixFQUFFLFdBQ2pDLENBQ0RDLEVBQVdwQixFQUFLa0IsT0FBUSxZQUN2QixJQUFNRCxFQUFtQixRQUFRLEdBQ3BDakIsRUFBS2tCLE9BQU9yQyxLQUFPdUMsRUFBV3BCLEVBQUtrQixPQUFRLE9BQVEsQ0FBRUwsSUFBSyxJQUFPSSxFQUFtQixRQUFRLElBQzNGLEdBQUlsQyxPQUlxQyxDQUFDLENBQUMsU0FBVSJ9
