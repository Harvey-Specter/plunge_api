import{d as e,B as t,r as o,aR as n,cs as i,$ as a,bf as u,cf as l,P as s,o as r,c as d,e as v,a2 as f,n as c,a4 as p}from"./index.701681eb.js";const g=v("div",null,"sticky",-1),m=e({__name:"Sticky",props:{offset:t.number.def(0),zIndex:t.number.def(999),className:t.string.def(""),position:{type:String,validator:function(e){return-1!==["top","bottom"].indexOf(e)},default:"top"}},setup(e){const t=e,m=o("auto"),x=o("auto"),y=o(!1),h=n(),w=n(),{height:b}=i();a((()=>{var e;x.value=(null==(e=h.value)?void 0:e.getBoundingClientRect().height)+"px",w.value=z(h.value,!0),u(w,"scroll",B),u("resize",R),B()})),l((()=>{B()}));const C=(e,t)=>{if(!s)return!1;const o=((e,t)=>{var o;if(!s||!e||!t)return"";t.replace(/-(\w)/g,((e,t)=>t?t.toUpperCase():""));try{const n=e.style[t];if(n)return n;const i=null==(o=document.defaultView)?void 0:o.getComputedStyle(e,"");return i?i[t]:""}catch{return e.style[t]}})(e,{undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(t)]);return["scroll","auto","overlay"].some((e=>o.includes(e)))},z=(e,t)=>{if(!s)return;let o=e;for(;o;){if([window,document,document.documentElement].includes(o))return window;if(C(o,t))return o;o=o.parentNode}return o},B=()=>{var e,o;if(m.value=h.value.getBoundingClientRect().width+"px","top"===t.position){const o=null==(e=h.value)?void 0:e.getBoundingClientRect().top;if(void 0!==o&&o<t.offset)return void I();S()}else{const e=null==(o=h.value)?void 0:o.getBoundingClientRect().bottom;if(void 0!==e&&e>b.value-t.offset)return void I();S()}},R=()=>{y.value&&h.value&&(m.value=h.value.getBoundingClientRect().width+"px")},I=()=>{y.value||(y.value=!0)},S=()=>{y.value&&(m.value="auto",y.value=!1)};return(t,o)=>(r(),d("div",{style:p({height:x.value,zIndex:e.zIndex}),ref_key:"refSticky",ref:h},[v("div",{class:c(e.className),style:p({top:"top"===e.position?e.offset+"px":"",bottom:"top"!==e.position?e.offset+"px":"",zIndex:e.zIndex,position:y.value?"fixed":"static",width:m.value,height:x.value})},[f(t.$slots,"default",{},(()=>[g]))],6)],4))}});export{m as _};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RpY2t5Ljk1YmUyMDJlLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9TdGlja3kvc3JjL1N0aWNreS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IHByb3BUeXBlcyB9IGZyb20gJ0AvdXRpbHMvcHJvcFR5cGVzJ1xuaW1wb3J0IHsgcmVmLCBvbk1vdW50ZWQsIG9uQWN0aXZhdGVkLCBzaGFsbG93UmVmIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgdXNlRXZlbnRMaXN0ZW5lciwgdXNlV2luZG93U2l6ZSwgaXNDbGllbnQgfSBmcm9tICdAdnVldXNlL2NvcmUnXG5pbXBvcnQgdHlwZSB7IENTU1Byb3BlcnRpZXMgfSBmcm9tICd2dWUnXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgLy8g6Led56a76aG26YOo5oiW6ICF5bqV6YOo55qE6Led56a7KOWNleS9jXB4KVxuICBvZmZzZXQ6IHByb3BUeXBlcy5udW1iZXIuZGVmKDApLFxuICAvLyDorr7nva7lhYPntKDnmoTloIblj6Dpobrluo9cbiAgekluZGV4OiBwcm9wVHlwZXMubnVtYmVyLmRlZig5OTkpLFxuICAvLyDorr7nva7mjIflrprnmoRjbGFzc1xuICBjbGFzc05hbWU6IHByb3BUeXBlcy5zdHJpbmcuZGVmKCcnKSxcbiAgLy8g5a6a5L2N5pa55byP77yM6buY6K6k5Li6KHRvcCnvvIzooajnpLrot53nprvpobbpg6jkvY3nva7vvIzlj6/ku6Xorr7nva7kuLp0b3DmiJbogIVib3R0b21cbiAgcG9zaXRpb246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgdmFsaWRhdG9yOiBmdW5jdGlvbiAodmFsdWU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgIH0sXG4gICAgZGVmYXVsdDogJ3RvcCdcbiAgfVxufSlcbmNvbnN0IHdpZHRoID0gcmVmKCdhdXRvJyBhcyBzdHJpbmcpXG5jb25zdCBoZWlnaHQgPSByZWYoJ2F1dG8nIGFzIHN0cmluZylcbmNvbnN0IGlzU3RpY2t5ID0gcmVmKGZhbHNlKVxuY29uc3QgcmVmU3RpY2t5ID0gc2hhbGxvd1JlZjxIVE1MRWxlbWVudD4oKVxuY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gc2hhbGxvd1JlZjxIVE1MRWxlbWVudCB8IFdpbmRvdz4oKVxuY29uc3QgeyBoZWlnaHQ6IHdpbmRvd0hlaWdodCB9ID0gdXNlV2luZG93U2l6ZSgpXG5vbk1vdW50ZWQoKCkgPT4ge1xuICBoZWlnaHQudmFsdWUgPSByZWZTdGlja3kudmFsdWU/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArICdweCdcblxuICBzY3JvbGxDb250YWluZXIudmFsdWUgPSBnZXRTY3JvbGxDb250YWluZXIocmVmU3RpY2t5LnZhbHVlISwgdHJ1ZSlcbiAgdXNlRXZlbnRMaXN0ZW5lcihzY3JvbGxDb250YWluZXIsICdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpXG4gIHVzZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlaXplKVxuICBoYW5kbGVTY3JvbGwoKVxufSlcbm9uQWN0aXZhdGVkKCgpID0+IHtcbiAgaGFuZGxlU2Nyb2xsKClcbn0pXG5cbmNvbnN0IGNhbWVsaXplID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8tKFxcdykvZywgKF8sIGMpID0+IChjID8gYy50b1VwcGVyQ2FzZSgpIDogJycpKVxufVxuXG5jb25zdCBnZXRTdHlsZSA9IChlbGVtZW50OiBIVE1MRWxlbWVudCwgc3R5bGVOYW1lOiBrZXlvZiBDU1NQcm9wZXJ0aWVzKTogc3RyaW5nID0+IHtcbiAgaWYgKCFpc0NsaWVudCB8fCAhZWxlbWVudCB8fCAhc3R5bGVOYW1lKSByZXR1cm4gJydcblxuICBsZXQga2V5ID0gY2FtZWxpemUoc3R5bGVOYW1lKVxuICBpZiAoa2V5ID09PSAnZmxvYXQnKSBrZXkgPSAnY3NzRmxvYXQnXG4gIHRyeSB7XG4gICAgY29uc3Qgc3R5bGUgPSBlbGVtZW50LnN0eWxlW3N0eWxlTmFtZV1cbiAgICBpZiAoc3R5bGUpIHJldHVybiBzdHlsZVxuICAgIGNvbnN0IGNvbXB1dGVkID0gZG9jdW1lbnQuZGVmYXVsdFZpZXc/LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgJycpXG4gICAgcmV0dXJuIGNvbXB1dGVkID8gY29tcHV0ZWRbc3R5bGVOYW1lXSA6ICcnXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBlbGVtZW50LnN0eWxlW3N0eWxlTmFtZV1cbiAgfVxufVxuY29uc3QgaXNTY3JvbGwgPSAoZWw6IEhUTUxFbGVtZW50LCBpc1ZlcnRpY2FsPzogYm9vbGVhbik6IGJvb2xlYW4gPT4ge1xuICBpZiAoIWlzQ2xpZW50KSByZXR1cm4gZmFsc2VcbiAgY29uc3Qga2V5ID0gKFxuICAgIHtcbiAgICAgIHVuZGVmaW5lZDogJ292ZXJmbG93JyxcbiAgICAgIHRydWU6ICdvdmVyZmxvdy15JyxcbiAgICAgIGZhbHNlOiAnb3ZlcmZsb3cteCdcbiAgICB9IGFzIGNvbnN0XG4gIClbU3RyaW5nKGlzVmVydGljYWwpXSFcbiAgY29uc3Qgb3ZlcmZsb3cgPSBnZXRTdHlsZShlbCwga2V5KVxuICByZXR1cm4gWydzY3JvbGwnLCAnYXV0bycsICdvdmVybGF5J10uc29tZSgocykgPT4gb3ZlcmZsb3cuaW5jbHVkZXMocykpXG59XG5cbmNvbnN0IGdldFNjcm9sbENvbnRhaW5lciA9IChcbiAgZWw6IEhUTUxFbGVtZW50LFxuICBpc1ZlcnRpY2FsOiBib29sZWFuXG4pOiBXaW5kb3cgfCBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCA9PiB7XG4gIGlmICghaXNDbGllbnQpIHJldHVyblxuICBsZXQgcGFyZW50ID0gZWxcbiAgd2hpbGUgKHBhcmVudCkge1xuICAgIGlmIChbd2luZG93LCBkb2N1bWVudCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XS5pbmNsdWRlcyhwYXJlbnQpKSByZXR1cm4gd2luZG93XG4gICAgaWYgKGlzU2Nyb2xsKHBhcmVudCwgaXNWZXJ0aWNhbCkpIHJldHVybiBwYXJlbnRcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZSBhcyBIVE1MRWxlbWVudFxuICB9XG4gIHJldHVybiBwYXJlbnRcbn1cblxuY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICB3aWR0aC52YWx1ZSA9IHJlZlN0aWNreS52YWx1ZSEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGghICsgJ3B4J1xuICBpZiAocHJvcHMucG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgY29uc3Qgb2Zmc2V0VG9wID0gcmVmU3RpY2t5LnZhbHVlPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcbiAgICBpZiAob2Zmc2V0VG9wICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0VG9wIDwgcHJvcHMub2Zmc2V0KSB7XG4gICAgICBzdGlja3koKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHJlc2V0KClcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBvZmZzZXRCb3R0b20gPSByZWZTdGlja3kudmFsdWU/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbVxuXG4gICAgaWYgKG9mZnNldEJvdHRvbSAhPT0gdW5kZWZpbmVkICYmIG9mZnNldEJvdHRvbSA+IHdpbmRvd0hlaWdodC52YWx1ZSAtIHByb3BzLm9mZnNldCkge1xuICAgICAgc3RpY2t5KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICByZXNldCgpXG4gIH1cbn1cbmNvbnN0IGhhbmRsZVJlaXplID0gKCkgPT4ge1xuICBpZiAoaXNTdGlja3kudmFsdWUgJiYgcmVmU3RpY2t5LnZhbHVlKSB7XG4gICAgd2lkdGgudmFsdWUgPSByZWZTdGlja3kudmFsdWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyAncHgnXG4gIH1cbn1cbmNvbnN0IHN0aWNreSA9ICgpID0+IHtcbiAgaWYgKGlzU3RpY2t5LnZhbHVlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaXNTdGlja3kudmFsdWUgPSB0cnVlXG59XG5jb25zdCByZXNldCA9ICgpID0+IHtcbiAgaWYgKCFpc1N0aWNreS52YWx1ZSkge1xuICAgIHJldHVyblxuICB9XG4gIHdpZHRoLnZhbHVlID0gJ2F1dG8nXG4gIGlzU3RpY2t5LnZhbHVlID0gZmFsc2Vcbn1cbjwvc2NyaXB0PlxuPHRlbXBsYXRlPlxuICA8ZGl2IDpzdHlsZT1cInsgaGVpZ2h0OiBoZWlnaHQsIHpJbmRleDogekluZGV4IH1cIiByZWY9XCJyZWZTdGlja3lcIj5cbiAgICA8ZGl2XG4gICAgICA6Y2xhc3M9XCJjbGFzc05hbWVcIlxuICAgICAgOnN0eWxlPVwie1xuICAgICAgICB0b3A6IHBvc2l0aW9uID09PSAndG9wJyA/IG9mZnNldCArICdweCcgOiAnJyxcbiAgICAgICAgYm90dG9tOiBwb3NpdGlvbiAhPT0gJ3RvcCcgPyBvZmZzZXQgKyAncHgnIDogJycsXG4gICAgICAgIHpJbmRleDogekluZGV4LFxuICAgICAgICBwb3NpdGlvbjogaXNTdGlja3kgPyAnZml4ZWQnIDogJ3N0YXRpYycsXG4gICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgIH1cIlxuICAgID5cbiAgICAgIDxzbG90PlxuICAgICAgICA8ZGl2PnN0aWNreTwvZGl2PlxuICAgICAgPC9zbG90PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG4iXSwibmFtZXMiOlsid2lkdGgiLCJyZWYiLCJoZWlnaHQiLCJpc1N0aWNreSIsInJlZlN0aWNreSIsInNoYWxsb3dSZWYiLCJzY3JvbGxDb250YWluZXIiLCJ3aW5kb3dIZWlnaHQiLCJ1c2VXaW5kb3dTaXplIiwib25Nb3VudGVkIiwidmFsdWUiLCJfYSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdldFNjcm9sbENvbnRhaW5lciIsInVzZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJoYW5kbGVSZWl6ZSIsIm9uQWN0aXZhdGVkIiwiaXNTY3JvbGwiLCJlbCIsImlzVmVydGljYWwiLCJpc0NsaWVudCIsIm92ZXJmbG93IiwiZWxlbWVudCIsInN0eWxlTmFtZSIsInJlcGxhY2UiLCJfIiwiYyIsInRvVXBwZXJDYXNlIiwic3R5bGUiLCJjb21wdXRlZCIsImRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0U3R5bGUiLCJ1bmRlZmluZWQiLCJ0cnVlIiwiZmFsc2UiLCJTdHJpbmciLCJzb21lIiwicyIsImluY2x1ZGVzIiwicGFyZW50Iiwid2luZG93IiwiZG9jdW1lbnRFbGVtZW50IiwicGFyZW50Tm9kZSIsInByb3BzIiwicG9zaXRpb24iLCJvZmZzZXRUb3AiLCJ0b3AiLCJvZmZzZXQiLCJvZmZzZXRCb3R0b20iLCJfYiIsImJvdHRvbSIsInN0aWNreSIsInJlc2V0Il0sIm1hcHBpbmdzIjoiZ1pBcUJNQSxFQUFRQyxFQUFJLFFBQ1pDLEVBQVNELEVBQUksUUFDYkUsRUFBV0YsR0FBSSxHQUNmRyxFQUFZQyxJQUNaQyxFQUFrQkQsS0FDaEJILE9BQVFLLEdBQWlCQyxJQUNqQ0MsR0FBVSxXQUNSUCxFQUFPUSxPQUFRLE9BQUFDLEVBQUFQLEVBQVVNLFlBQVYsRUFBQUMsRUFBaUJDLHdCQUF3QlYsUUFBUyxLQUVqRUksRUFBZ0JJLE1BQVFHLEVBQW1CVCxFQUFVTSxPQUFRLEdBQzVDSSxFQUFBUixFQUFpQixTQUFVUyxHQUM1Q0QsRUFBaUIsU0FBVUUsVUFHN0JDLEdBQVksWUFJTixNQWtCQUMsRUFBVyxDQUFDQyxFQUFpQkMsS0FDakMsSUFBS0MsRUFBaUIsT0FBQSxFQUN0QixNQU9NQyxFQXZCUyxFQUFDQyxFQUFzQkMsV0FDdEMsSUFBS0gsSUFBYUUsSUFBWUMsRUFBa0IsTUFBQSxHQUU3QkEsRUFOUkMsUUFBUSxVQUFVLENBQUNDLEVBQUdDLElBQU9BLEVBQUlBLEVBQUVDLGNBQWdCLEtBUTFELElBQ0ksTUFBQUMsRUFBUU4sRUFBUU0sTUFBTUwsR0FDeEIsR0FBQUssRUFBYyxPQUFBQSxFQUNsQixNQUFNQyxFQUFXLE9BQUFuQixFQUFBb0IsU0FBU0Msa0JBQVQsRUFBQXJCLEVBQXNCc0IsaUJBQWlCVixFQUFTLElBQzFELE9BQUFPLEVBQVdBLEVBQVNOLEdBQWEsR0FDeEMsTUFDQSxPQUFPRCxFQUFRTSxNQUFNTCxLQVlOVSxDQUFTZixFQU54QixDQUNFZ0IsVUFBVyxXQUNYQyxLQUFNLGFBQ05DLE1BQU8sY0FFVEMsT0FBT2xCLEtBRUYsTUFBQSxDQUFDLFNBQVUsT0FBUSxXQUFXbUIsTUFBTUMsR0FBTWxCLEVBQVNtQixTQUFTRCxNQUcvRDNCLEVBQXFCLENBQ3pCTSxFQUNBQyxLQUVBLElBQUtDLEVBQVUsT0FDZixJQUFJcUIsRUFBU3ZCLEVBQ2IsS0FBT3VCLEdBQVEsQ0FDYixHQUFJLENBQUNDLE9BQVFaLFNBQVVBLFNBQVNhLGlCQUFpQkgsU0FBU0MsR0FBZ0IsT0FBQUMsT0FDdEUsR0FBQXpCLEVBQVN3QixFQUFRdEIsR0FBb0IsT0FBQXNCLEVBQ3pDQSxFQUFTQSxFQUFPRyxXQUVYLE9BQUFILEdBR0gzQixFQUFlLGFBRWYsR0FESmYsRUFBTVUsTUFBUU4sRUFBVU0sTUFBT0Usd0JBQXdCWixNQUFTLEtBQ3pDLFFBQW5COEMsRUFBTUMsU0FBb0IsQ0FDNUIsTUFBTUMsRUFBWSxPQUFBckMsRUFBQVAsRUFBVU0sWUFBVixFQUFBQyxFQUFpQkMsd0JBQXdCcUMsSUFDM0QsUUFBa0IsSUFBZEQsR0FBMkJBLEVBQVlGLEVBQU1JLE9BRS9DLHdCQUdHLENBQ0wsTUFBTUMsRUFBZSxPQUFBQyxFQUFBaEQsRUFBVU0sWUFBVixFQUFBMEMsRUFBaUJ4Qyx3QkFBd0J5QyxPQUU5RCxRQUFxQixJQUFqQkYsR0FBOEJBLEVBQWU1QyxFQUFhRyxNQUFRb0MsRUFBTUksT0FFMUUsc0JBS0FsQyxFQUFjLEtBQ2RiLEVBQVNPLE9BQVNOLEVBQVVNLFFBQzlCVixFQUFNVSxNQUFRTixFQUFVTSxNQUFNRSx3QkFBd0JaLE1BQVEsT0FHNURzRCxFQUFTLEtBQ1RuRCxFQUFTTyxRQUdiUCxFQUFTTyxPQUFRLElBRWI2QyxFQUFRLEtBQ1BwRCxFQUFTTyxRQUdkVixFQUFNVSxNQUFRLE9BQ2RQLEVBQVNPLE9BQVEifQ==
