import{P as e,b$ as t}from"./index.701681eb.js";const o=(o,n)=>{if(!e)return!1;const r={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(n)],l=t(o,r);return["scroll","auto","overlay"].some((e=>l.includes(e)))},n=(t,n)=>{if(!e)return;let r=t;for(;r;){if([window,document,document.documentElement].includes(r))return window;if(o(r,n))return r;r=r.parentNode}return r};let r;const l=()=>{var t;if(!e)return 0;if(void 0!==r)return r;const o=document.createElement("div");o.className="el-scrollbar__wrap",o.style.visibility="hidden",o.style.width="100px",o.style.position="absolute",o.style.top="-9999px",document.body.appendChild(o);const n=o.offsetWidth;o.style.overflow="scroll";const l=document.createElement("div");l.style.width="100%",o.appendChild(l);const s=l.offsetWidth;return null==(t=o.parentNode)||t.removeChild(o),r=n-s,r};function s(t,o){if(!e)return;if(!o)return void(t.scrollTop=0);const n=[];let r=o.offsetParent;for(;null!==r&&t!==r&&t.contains(r);)n.push(r),r=r.offsetParent;const l=o.offsetTop+n.reduce(((e,t)=>e+t.offsetTop),0),s=l+o.offsetHeight,i=t.scrollTop,c=i+t.clientHeight;l<i?t.scrollTop=l:s>c&&(t.scrollTop=s-t.clientHeight)}export{n as a,l as g,s};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsMi41OGY5YTdkOS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlZ2lzdHJ5Lm5wbW1pcnJvci5jb20rZWxlbWVudC1wbHVzQDIuMi42X3Z1ZUAzLjIuMzcvbm9kZV9tb2R1bGVzL2VsZW1lbnQtcGx1cy9lcy91dGlscy9kb20vc2Nyb2xsMi5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNDbGllbnQgfSBmcm9tICdAdnVldXNlL2NvcmUnO1xuaW1wb3J0IHsgZ2V0U3R5bGUgfSBmcm9tICcuL3N0eWxlMi5tanMnO1xuXG5jb25zdCBpc1Njcm9sbCA9IChlbCwgaXNWZXJ0aWNhbCkgPT4ge1xuICBpZiAoIWlzQ2xpZW50KVxuICAgIHJldHVybiBmYWxzZTtcbiAgY29uc3Qga2V5ID0ge1xuICAgIHVuZGVmaW5lZDogXCJvdmVyZmxvd1wiLFxuICAgIHRydWU6IFwib3ZlcmZsb3cteVwiLFxuICAgIGZhbHNlOiBcIm92ZXJmbG93LXhcIlxuICB9W1N0cmluZyhpc1ZlcnRpY2FsKV07XG4gIGNvbnN0IG92ZXJmbG93ID0gZ2V0U3R5bGUoZWwsIGtleSk7XG4gIHJldHVybiBbXCJzY3JvbGxcIiwgXCJhdXRvXCIsIFwib3ZlcmxheVwiXS5zb21lKChzKSA9PiBvdmVyZmxvdy5pbmNsdWRlcyhzKSk7XG59O1xuY29uc3QgZ2V0U2Nyb2xsQ29udGFpbmVyID0gKGVsLCBpc1ZlcnRpY2FsKSA9PiB7XG4gIGlmICghaXNDbGllbnQpXG4gICAgcmV0dXJuO1xuICBsZXQgcGFyZW50ID0gZWw7XG4gIHdoaWxlIChwYXJlbnQpIHtcbiAgICBpZiAoW3dpbmRvdywgZG9jdW1lbnQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudF0uaW5jbHVkZXMocGFyZW50KSlcbiAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgaWYgKGlzU2Nyb2xsKHBhcmVudCwgaXNWZXJ0aWNhbCkpXG4gICAgICByZXR1cm4gcGFyZW50O1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBwYXJlbnQ7XG59O1xubGV0IHNjcm9sbEJhcldpZHRoO1xuY29uc3QgZ2V0U2Nyb2xsQmFyV2lkdGggPSAoKSA9PiB7XG4gIHZhciBfYTtcbiAgaWYgKCFpc0NsaWVudClcbiAgICByZXR1cm4gMDtcbiAgaWYgKHNjcm9sbEJhcldpZHRoICE9PSB2b2lkIDApXG4gICAgcmV0dXJuIHNjcm9sbEJhcldpZHRoO1xuICBjb25zdCBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG91dGVyLmNsYXNzTmFtZSA9IFwiZWwtc2Nyb2xsYmFyX193cmFwXCI7XG4gIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICBvdXRlci5zdHlsZS53aWR0aCA9IFwiMTAwcHhcIjtcbiAgb3V0ZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gIG91dGVyLnN0eWxlLnRvcCA9IFwiLTk5OTlweFwiO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcbiAgY29uc3Qgd2lkdGhOb1Njcm9sbCA9IG91dGVyLm9mZnNldFdpZHRoO1xuICBvdXRlci5zdHlsZS5vdmVyZmxvdyA9IFwic2Nyb2xsXCI7XG4gIGNvbnN0IGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5uZXIuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuICBjb25zdCB3aWR0aFdpdGhTY3JvbGwgPSBpbm5lci5vZmZzZXRXaWR0aDtcbiAgKF9hID0gb3V0ZXIucGFyZW50Tm9kZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLnJlbW92ZUNoaWxkKG91dGVyKTtcbiAgc2Nyb2xsQmFyV2lkdGggPSB3aWR0aE5vU2Nyb2xsIC0gd2lkdGhXaXRoU2Nyb2xsO1xuICByZXR1cm4gc2Nyb2xsQmFyV2lkdGg7XG59O1xuZnVuY3Rpb24gc2Nyb2xsSW50b1ZpZXcoY29udGFpbmVyLCBzZWxlY3RlZCkge1xuICBpZiAoIWlzQ2xpZW50KVxuICAgIHJldHVybjtcbiAgaWYgKCFzZWxlY3RlZCkge1xuICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBvZmZzZXRQYXJlbnRzID0gW107XG4gIGxldCBwb2ludGVyID0gc2VsZWN0ZWQub2Zmc2V0UGFyZW50O1xuICB3aGlsZSAocG9pbnRlciAhPT0gbnVsbCAmJiBjb250YWluZXIgIT09IHBvaW50ZXIgJiYgY29udGFpbmVyLmNvbnRhaW5zKHBvaW50ZXIpKSB7XG4gICAgb2Zmc2V0UGFyZW50cy5wdXNoKHBvaW50ZXIpO1xuICAgIHBvaW50ZXIgPSBwb2ludGVyLm9mZnNldFBhcmVudDtcbiAgfVxuICBjb25zdCB0b3AgPSBzZWxlY3RlZC5vZmZzZXRUb3AgKyBvZmZzZXRQYXJlbnRzLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldiArIGN1cnIub2Zmc2V0VG9wLCAwKTtcbiAgY29uc3QgYm90dG9tID0gdG9wICsgc2VsZWN0ZWQub2Zmc2V0SGVpZ2h0O1xuICBjb25zdCB2aWV3UmVjdFRvcCA9IGNvbnRhaW5lci5zY3JvbGxUb3A7XG4gIGNvbnN0IHZpZXdSZWN0Qm90dG9tID0gdmlld1JlY3RUb3AgKyBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICBpZiAodG9wIDwgdmlld1JlY3RUb3ApIHtcbiAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gdG9wO1xuICB9IGVsc2UgaWYgKGJvdHRvbSA+IHZpZXdSZWN0Qm90dG9tKSB7XG4gICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IGJvdHRvbSAtIGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gIH1cbn1cblxuZXhwb3J0IHsgZ2V0U2Nyb2xsQmFyV2lkdGgsIGdldFNjcm9sbENvbnRhaW5lciwgaXNTY3JvbGwsIHNjcm9sbEludG9WaWV3IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY3JvbGwyLm1qcy5tYXBcbiJdLCJuYW1lcyI6WyJpc1Njcm9sbCIsImVsIiwiaXNWZXJ0aWNhbCIsImlzQ2xpZW50Iiwia2V5IiwidW5kZWZpbmVkIiwidHJ1ZSIsImZhbHNlIiwiU3RyaW5nIiwib3ZlcmZsb3ciLCJnZXRTdHlsZSIsInNvbWUiLCJzIiwiaW5jbHVkZXMiLCJnZXRTY3JvbGxDb250YWluZXIiLCJwYXJlbnQiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInBhcmVudE5vZGUiLCJzY3JvbGxCYXJXaWR0aCIsImdldFNjcm9sbEJhcldpZHRoIiwiX2EiLCJvdXRlciIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJ3aWR0aCIsInBvc2l0aW9uIiwidG9wIiwiYm9keSIsImFwcGVuZENoaWxkIiwid2lkdGhOb1Njcm9sbCIsIm9mZnNldFdpZHRoIiwiaW5uZXIiLCJ3aWR0aFdpdGhTY3JvbGwiLCJyZW1vdmVDaGlsZCIsInNjcm9sbEludG9WaWV3IiwiY29udGFpbmVyIiwic2VsZWN0ZWQiLCJzY3JvbGxUb3AiLCJvZmZzZXRQYXJlbnRzIiwicG9pbnRlciIsIm9mZnNldFBhcmVudCIsImNvbnRhaW5zIiwicHVzaCIsIm9mZnNldFRvcCIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiYm90dG9tIiwib2Zmc2V0SGVpZ2h0Iiwidmlld1JlY3RUb3AiLCJ2aWV3UmVjdEJvdHRvbSIsImNsaWVudEhlaWdodCJdLCJtYXBwaW5ncyI6ImdEQUdBLE1BQU1BLEVBQVcsQ0FBQ0MsRUFBSUMsS0FDcEIsSUFBS0MsRUFDSSxPQUFBLEVBQ1QsTUFBTUMsRUFBTSxDQUNWQyxVQUFXLFdBQ1hDLEtBQU0sYUFDTkMsTUFBTyxjQUNQQyxPQUFPTixJQUNITyxFQUFXQyxFQUFTVCxFQUFJRyxHQUN2QixNQUFBLENBQUMsU0FBVSxPQUFRLFdBQVdPLE1BQU1DLEdBQU1ILEVBQVNJLFNBQVNELE1BRS9ERSxFQUFxQixDQUFDYixFQUFJQyxLQUM5QixJQUFLQyxFQUNILE9BQ0YsSUFBSVksRUFBU2QsRUFDYixLQUFPYyxHQUFRLENBQ2IsR0FBSSxDQUFDQyxPQUFRQyxTQUFVQSxTQUFTQyxpQkFBaUJMLFNBQVNFLEdBQ2pELE9BQUFDLE9BQ0wsR0FBQWhCLEVBQVNlLEVBQVFiLEdBQ1osT0FBQWEsRUFDVEEsRUFBU0EsRUFBT0ksV0FFWCxPQUFBSixHQUVULElBQUlLLEVBQ0MsTUFBQ0MsRUFBb0IsS0FDcEIsSUFBQUMsRUFDSixJQUFLbkIsRUFDSSxPQUFBLEVBQ1QsUUFBdUIsSUFBbkJpQixFQUNLLE9BQUFBLEVBQ0gsTUFBQUcsRUFBUU4sU0FBU08sY0FBYyxPQUNyQ0QsRUFBTUUsVUFBWSxxQkFDbEJGLEVBQU1HLE1BQU1DLFdBQWEsU0FDekJKLEVBQU1HLE1BQU1FLE1BQVEsUUFDcEJMLEVBQU1HLE1BQU1HLFNBQVcsV0FDdkJOLEVBQU1HLE1BQU1JLElBQU0sVUFDVGIsU0FBQWMsS0FBS0MsWUFBWVQsR0FDMUIsTUFBTVUsRUFBZ0JWLEVBQU1XLFlBQzVCWCxFQUFNRyxNQUFNakIsU0FBVyxTQUNqQixNQUFBMEIsRUFBUWxCLFNBQVNPLGNBQWMsT0FDckNXLEVBQU1ULE1BQU1FLE1BQVEsT0FDcEJMLEVBQU1TLFlBQVlHLEdBQ2xCLE1BQU1DLEVBQWtCRCxFQUFNRCxZQUd2QixPQUZvQixTQUFyQlgsRUFBTUosYUFBK0JHLEVBQUdlLFlBQVlkLEdBQzFESCxFQUFpQmEsRUFBZ0JHLEVBQzFCaEIsR0FFVCxTQUFBa0IsRUFBd0JDLEVBQVdDLEdBQ2pDLElBQUtyQyxFQUNILE9BQ0YsSUFBS3FDLEVBRUgsWUFEQUQsRUFBVUUsVUFBWSxHQUd4QixNQUFNQyxFQUFnQixHQUN0QixJQUFJQyxFQUFVSCxFQUFTSSxhQUN2QixLQUFtQixPQUFaRCxHQUFvQkosSUFBY0ksR0FBV0osRUFBVU0sU0FBU0YsSUFDckVELEVBQWNJLEtBQUtILEdBQ25CQSxFQUFVQSxFQUFRQyxhQUVkLE1BQUFkLEVBQU1VLEVBQVNPLFVBQVlMLEVBQWNNLFFBQU8sQ0FBQ0MsRUFBTUMsSUFBU0QsRUFBT0MsRUFBS0gsV0FBVyxHQUN2RkksRUFBU3JCLEVBQU1VLEVBQVNZLGFBQ3hCQyxFQUFjZCxFQUFVRSxVQUN4QmEsRUFBaUJELEVBQWNkLEVBQVVnQixhQUMzQ3pCLEVBQU11QixFQUNSZCxFQUFVRSxVQUFZWCxFQUNicUIsRUFBU0csSUFDUmYsRUFBQUUsVUFBWVUsRUFBU1osRUFBVWdCIn0=
