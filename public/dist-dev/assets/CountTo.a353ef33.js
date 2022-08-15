import{d as a,B as t,s as l,aX as e,$ as r,D as n,v as s,a as i,o,c as u,t as c,n as p,j as d,bX as m}from"./index.63ad27ed.js";const V=a({__name:"CountTo",props:{startVal:t.number.def(0),endVal:t.number.def(2021),duration:t.number.def(3e3),autoplay:t.bool.def(!0),decimals:t.number.validate((a=>a>=0)).def(0),decimal:t.string.def("."),separator:t.string.def(","),prefix:t.string.def(""),suffix:t.string.def(""),useEasing:t.bool.def(!0),easingFn:{type:Function,default:(a,t,l,e)=>l*(1-Math.pow(2,-10*a/e))*1024/1023+t}},emits:["mounted","callback"],setup(a,{expose:t,emit:V}){const f=a,{getPrefixCls:F}=d(),g=F("count-to"),S=a=>{const{decimals:t,decimal:l,separator:e,suffix:r,prefix:n}=f;a=Number(a).toFixed(t);const s=(a+="").split(".");let i=s[0];const o=s.length>1?l+s[1]:"",u=/(\d+)(\d{3})/;if(e&&!m(e))for(;u.test(i);)i=i.replace(u,"$1"+e+"$2");return n+i+o+r},b=l({localStartVal:f.startVal,displayValue:S(f.startVal),printVal:null,paused:!1,localDuration:f.duration,startTime:null,timestamp:null,remaining:null,rAF:null}),A=e(b,"displayValue");r((()=>{f.autoplay&&x(),V("mounted")}));const D=n((()=>f.startVal>f.endVal));s([()=>f.startVal,()=>f.endVal],(()=>{f.autoplay&&x()}));const x=()=>{const{startVal:a,duration:t}=f;b.localStartVal=a,b.startTime=null,b.localDuration=t,b.paused=!1,b.rAF=requestAnimationFrame(q)},y=()=>{cancelAnimationFrame(b.rAF)},T=()=>{b.startTime=null,b.localDuration=+b.remaining,b.localStartVal=+b.printVal,requestAnimationFrame(q)},q=a=>{const{useEasing:t,easingFn:l,endVal:e}=f;b.startTime||(b.startTime=a),b.timestamp=a;const r=a-b.startTime;b.remaining=b.localDuration-r,t?i(D)?b.printVal=b.localStartVal-l(r,0,b.localStartVal-e,b.localDuration):b.printVal=l(r,b.localStartVal,e-b.localStartVal,b.localDuration):i(D)?b.printVal=b.localStartVal-(b.localStartVal-e)*(r/b.localDuration):b.printVal=b.localStartVal+(e-b.localStartVal)*(r/b.localDuration),i(D)?b.printVal=b.printVal<e?e:b.printVal:b.printVal=b.printVal>e?e:b.printVal,b.displayValue=S(b.printVal),r<b.localDuration?b.rAF=requestAnimationFrame(q):V("callback")};return t({pauseResume:()=>{b.paused?(T(),b.paused=!1):(y(),b.paused=!0)},reset:()=>{b.startTime=null,cancelAnimationFrame(b.rAF),b.displayValue=S(f.startVal)},start:x,pause:y}),(a,t)=>(o(),u("span",{class:p(i(g))},c(i(A)),3))}});export{V as _};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291bnRUby5hMzUzZWYzMy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvQ291bnRUby9zcmMvQ291bnRUby52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cclxuaW1wb3J0IHsgcmVhY3RpdmUsIGNvbXB1dGVkLCB3YXRjaCwgb25Nb3VudGVkLCB1bnJlZiwgdG9SZWYsIFByb3BUeXBlIH0gZnJvbSAndnVlJ1xyXG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJ0AvdXRpbHMvaXMnXHJcbmltcG9ydCB7IHByb3BUeXBlcyB9IGZyb20gJ0AvdXRpbHMvcHJvcFR5cGVzJ1xyXG5pbXBvcnQgeyB1c2VEZXNpZ24gfSBmcm9tICdAL2hvb2tzL3dlYi91c2VEZXNpZ24nXHJcblxyXG5jb25zdCB7IGdldFByZWZpeENscyB9ID0gdXNlRGVzaWduKClcclxuXHJcbmNvbnN0IHByZWZpeENscyA9IGdldFByZWZpeENscygnY291bnQtdG8nKVxyXG5cclxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XHJcbiAgc3RhcnRWYWw6IHByb3BUeXBlcy5udW1iZXIuZGVmKDApLFxyXG4gIGVuZFZhbDogcHJvcFR5cGVzLm51bWJlci5kZWYoMjAyMSksXHJcbiAgZHVyYXRpb246IHByb3BUeXBlcy5udW1iZXIuZGVmKDMwMDApLFxyXG4gIGF1dG9wbGF5OiBwcm9wVHlwZXMuYm9vbC5kZWYodHJ1ZSksXHJcbiAgZGVjaW1hbHM6IHByb3BUeXBlcy5udW1iZXIudmFsaWRhdGUoKHZhbHVlOiBudW1iZXIpID0+IHZhbHVlID49IDApLmRlZigwKSxcclxuICBkZWNpbWFsOiBwcm9wVHlwZXMuc3RyaW5nLmRlZignLicpLFxyXG4gIHNlcGFyYXRvcjogcHJvcFR5cGVzLnN0cmluZy5kZWYoJywnKSxcclxuICBwcmVmaXg6IHByb3BUeXBlcy5zdHJpbmcuZGVmKCcnKSxcclxuICBzdWZmaXg6IHByb3BUeXBlcy5zdHJpbmcuZGVmKCcnKSxcclxuICB1c2VFYXNpbmc6IHByb3BUeXBlcy5ib29sLmRlZih0cnVlKSxcclxuICBlYXNpbmdGbjoge1xyXG4gICAgdHlwZTogRnVuY3Rpb24gYXMgUHJvcFR5cGU8KHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcikgPT4gbnVtYmVyPixcclxuICAgIGRlZmF1bHQodDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKSB7XHJcbiAgICAgIHJldHVybiAoYyAqICgtTWF0aC5wb3coMiwgKC0xMCAqIHQpIC8gZCkgKyAxKSAqIDEwMjQpIC8gMTAyMyArIGJcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHMoWydtb3VudGVkJywgJ2NhbGxiYWNrJ10pXHJcblxyXG5jb25zdCBmb3JtYXROdW1iZXIgPSAobnVtOiBudW1iZXIgfCBzdHJpbmcpID0+IHtcclxuICBjb25zdCB7IGRlY2ltYWxzLCBkZWNpbWFsLCBzZXBhcmF0b3IsIHN1ZmZpeCwgcHJlZml4IH0gPSBwcm9wc1xyXG4gIG51bSA9IE51bWJlcihudW0pLnRvRml4ZWQoZGVjaW1hbHMpXHJcbiAgbnVtICs9ICcnXHJcbiAgY29uc3QgeCA9IG51bS5zcGxpdCgnLicpXHJcbiAgbGV0IHgxID0geFswXVxyXG4gIGNvbnN0IHgyID0geC5sZW5ndGggPiAxID8gZGVjaW1hbCArIHhbMV0gOiAnJ1xyXG4gIGNvbnN0IHJneCA9IC8oXFxkKykoXFxkezN9KS9cclxuICBpZiAoc2VwYXJhdG9yICYmICFpc051bWJlcihzZXBhcmF0b3IpKSB7XHJcbiAgICB3aGlsZSAocmd4LnRlc3QoeDEpKSB7XHJcbiAgICAgIHgxID0geDEucmVwbGFjZShyZ3gsICckMScgKyBzZXBhcmF0b3IgKyAnJDInKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcHJlZml4ICsgeDEgKyB4MiArIHN1ZmZpeFxyXG59XHJcblxyXG5jb25zdCBzdGF0ZSA9IHJlYWN0aXZlPHtcclxuICBsb2NhbFN0YXJ0VmFsOiBudW1iZXJcclxuICBwcmludFZhbDogbnVtYmVyIHwgbnVsbFxyXG4gIGRpc3BsYXlWYWx1ZTogc3RyaW5nXHJcbiAgcGF1c2VkOiBib29sZWFuXHJcbiAgbG9jYWxEdXJhdGlvbjogbnVtYmVyIHwgbnVsbFxyXG4gIHN0YXJ0VGltZTogbnVtYmVyIHwgbnVsbFxyXG4gIHRpbWVzdGFtcDogbnVtYmVyIHwgbnVsbFxyXG4gIHJBRjogYW55XHJcbiAgcmVtYWluaW5nOiBudW1iZXIgfCBudWxsXHJcbn0+KHtcclxuICBsb2NhbFN0YXJ0VmFsOiBwcm9wcy5zdGFydFZhbCxcclxuICBkaXNwbGF5VmFsdWU6IGZvcm1hdE51bWJlcihwcm9wcy5zdGFydFZhbCksXHJcbiAgcHJpbnRWYWw6IG51bGwsXHJcbiAgcGF1c2VkOiBmYWxzZSxcclxuICBsb2NhbER1cmF0aW9uOiBwcm9wcy5kdXJhdGlvbixcclxuICBzdGFydFRpbWU6IG51bGwsXHJcbiAgdGltZXN0YW1wOiBudWxsLFxyXG4gIHJlbWFpbmluZzogbnVsbCxcclxuICByQUY6IG51bGxcclxufSlcclxuXHJcbmNvbnN0IGRpc3BsYXlWYWx1ZSA9IHRvUmVmKHN0YXRlLCAnZGlzcGxheVZhbHVlJylcclxuXHJcbm9uTW91bnRlZCgoKSA9PiB7XHJcbiAgaWYgKHByb3BzLmF1dG9wbGF5KSB7XHJcbiAgICBzdGFydCgpXHJcbiAgfVxyXG4gIGVtaXQoJ21vdW50ZWQnKVxyXG59KVxyXG5cclxuY29uc3QgZ2V0Q291bnREb3duID0gY29tcHV0ZWQoKCkgPT4ge1xyXG4gIHJldHVybiBwcm9wcy5zdGFydFZhbCA+IHByb3BzLmVuZFZhbFxyXG59KVxyXG5cclxud2F0Y2goWygpID0+IHByb3BzLnN0YXJ0VmFsLCAoKSA9PiBwcm9wcy5lbmRWYWxdLCAoKSA9PiB7XHJcbiAgaWYgKHByb3BzLmF1dG9wbGF5KSB7XHJcbiAgICBzdGFydCgpXHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3Qgc3RhcnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzdGFydFZhbCwgZHVyYXRpb24gfSA9IHByb3BzXHJcbiAgc3RhdGUubG9jYWxTdGFydFZhbCA9IHN0YXJ0VmFsXHJcbiAgc3RhdGUuc3RhcnRUaW1lID0gbnVsbFxyXG4gIHN0YXRlLmxvY2FsRHVyYXRpb24gPSBkdXJhdGlvblxyXG4gIHN0YXRlLnBhdXNlZCA9IGZhbHNlXHJcbiAgc3RhdGUuckFGID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNvdW50KVxyXG59XHJcblxyXG5jb25zdCBwYXVzZVJlc3VtZSA9ICgpID0+IHtcclxuICBpZiAoc3RhdGUucGF1c2VkKSB7XHJcbiAgICByZXN1bWUoKVxyXG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2VcclxuICB9IGVsc2Uge1xyXG4gICAgcGF1c2UoKVxyXG4gICAgc3RhdGUucGF1c2VkID0gdHJ1ZVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcGF1c2UgPSAoKSA9PiB7XHJcbiAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoc3RhdGUuckFGKVxyXG59XHJcblxyXG5jb25zdCByZXN1bWUgPSAoKSA9PiB7XHJcbiAgc3RhdGUuc3RhcnRUaW1lID0gbnVsbFxyXG4gIHN0YXRlLmxvY2FsRHVyYXRpb24gPSArKHN0YXRlLnJlbWFpbmluZyBhcyBudW1iZXIpXHJcbiAgc3RhdGUubG9jYWxTdGFydFZhbCA9ICsoc3RhdGUucHJpbnRWYWwgYXMgbnVtYmVyKVxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShjb3VudClcclxufVxyXG5cclxuY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgc3RhdGUuc3RhcnRUaW1lID0gbnVsbFxyXG4gIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHN0YXRlLnJBRilcclxuICBzdGF0ZS5kaXNwbGF5VmFsdWUgPSBmb3JtYXROdW1iZXIocHJvcHMuc3RhcnRWYWwpXHJcbn1cclxuXHJcbmNvbnN0IGNvdW50ID0gKHRpbWVzdGFtcDogbnVtYmVyKSA9PiB7XHJcbiAgY29uc3QgeyB1c2VFYXNpbmcsIGVhc2luZ0ZuLCBlbmRWYWwgfSA9IHByb3BzXHJcbiAgaWYgKCFzdGF0ZS5zdGFydFRpbWUpIHN0YXRlLnN0YXJ0VGltZSA9IHRpbWVzdGFtcFxyXG4gIHN0YXRlLnRpbWVzdGFtcCA9IHRpbWVzdGFtcFxyXG4gIGNvbnN0IHByb2dyZXNzID0gdGltZXN0YW1wIC0gc3RhdGUuc3RhcnRUaW1lXHJcbiAgc3RhdGUucmVtYWluaW5nID0gKHN0YXRlLmxvY2FsRHVyYXRpb24gYXMgbnVtYmVyKSAtIHByb2dyZXNzXHJcbiAgaWYgKHVzZUVhc2luZykge1xyXG4gICAgaWYgKHVucmVmKGdldENvdW50RG93bikpIHtcclxuICAgICAgc3RhdGUucHJpbnRWYWwgPVxyXG4gICAgICAgIHN0YXRlLmxvY2FsU3RhcnRWYWwgLVxyXG4gICAgICAgIGVhc2luZ0ZuKHByb2dyZXNzLCAwLCBzdGF0ZS5sb2NhbFN0YXJ0VmFsIC0gZW5kVmFsLCBzdGF0ZS5sb2NhbER1cmF0aW9uIGFzIG51bWJlcilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0YXRlLnByaW50VmFsID0gZWFzaW5nRm4oXHJcbiAgICAgICAgcHJvZ3Jlc3MsXHJcbiAgICAgICAgc3RhdGUubG9jYWxTdGFydFZhbCxcclxuICAgICAgICBlbmRWYWwgLSBzdGF0ZS5sb2NhbFN0YXJ0VmFsLFxyXG4gICAgICAgIHN0YXRlLmxvY2FsRHVyYXRpb24gYXMgbnVtYmVyXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgaWYgKHVucmVmKGdldENvdW50RG93bikpIHtcclxuICAgICAgc3RhdGUucHJpbnRWYWwgPVxyXG4gICAgICAgIHN0YXRlLmxvY2FsU3RhcnRWYWwgLVxyXG4gICAgICAgIChzdGF0ZS5sb2NhbFN0YXJ0VmFsIC0gZW5kVmFsKSAqIChwcm9ncmVzcyAvIChzdGF0ZS5sb2NhbER1cmF0aW9uIGFzIG51bWJlcikpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGF0ZS5wcmludFZhbCA9XHJcbiAgICAgICAgc3RhdGUubG9jYWxTdGFydFZhbCArXHJcbiAgICAgICAgKGVuZFZhbCAtIHN0YXRlLmxvY2FsU3RhcnRWYWwpICogKHByb2dyZXNzIC8gKHN0YXRlLmxvY2FsRHVyYXRpb24gYXMgbnVtYmVyKSlcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKHVucmVmKGdldENvdW50RG93bikpIHtcclxuICAgIHN0YXRlLnByaW50VmFsID0gc3RhdGUucHJpbnRWYWwgPCBlbmRWYWwgPyBlbmRWYWwgOiBzdGF0ZS5wcmludFZhbFxyXG4gIH0gZWxzZSB7XHJcbiAgICBzdGF0ZS5wcmludFZhbCA9IHN0YXRlLnByaW50VmFsID4gZW5kVmFsID8gZW5kVmFsIDogc3RhdGUucHJpbnRWYWxcclxuICB9XHJcbiAgc3RhdGUuZGlzcGxheVZhbHVlID0gZm9ybWF0TnVtYmVyKHN0YXRlLnByaW50VmFsKVxyXG4gIGlmIChwcm9ncmVzcyA8IChzdGF0ZS5sb2NhbER1cmF0aW9uIGFzIG51bWJlcikpIHtcclxuICAgIHN0YXRlLnJBRiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShjb3VudClcclxuICB9IGVsc2Uge1xyXG4gICAgZW1pdCgnY2FsbGJhY2snKVxyXG4gIH1cclxufVxyXG5cclxuZGVmaW5lRXhwb3NlKHtcclxuICBwYXVzZVJlc3VtZSxcclxuICByZXNldCxcclxuICBzdGFydCxcclxuICBwYXVzZVxyXG59KVxyXG48L3NjcmlwdD5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8c3BhbiA6Y2xhc3M9XCJwcmVmaXhDbHNcIj5cclxuICAgIHt7IGRpc3BsYXlWYWx1ZSB9fVxyXG4gIDwvc3Bhbj5cclxuPC90ZW1wbGF0ZT5cclxuIl0sIm5hbWVzIjpbImdldFByZWZpeENscyIsInVzZURlc2lnbiIsInByZWZpeENscyIsImZvcm1hdE51bWJlciIsIm51bSIsImRlY2ltYWxzIiwiZGVjaW1hbCIsInNlcGFyYXRvciIsInN1ZmZpeCIsInByZWZpeCIsInByb3BzIiwiTnVtYmVyIiwidG9GaXhlZCIsIngiLCJzcGxpdCIsIngxIiwieDIiLCJsZW5ndGgiLCJyZ3giLCJpc051bWJlciIsInRlc3QiLCJyZXBsYWNlIiwic3RhdGUiLCJyZWFjdGl2ZSIsImxvY2FsU3RhcnRWYWwiLCJzdGFydFZhbCIsImRpc3BsYXlWYWx1ZSIsInByaW50VmFsIiwicGF1c2VkIiwibG9jYWxEdXJhdGlvbiIsImR1cmF0aW9uIiwic3RhcnRUaW1lIiwidGltZXN0YW1wIiwicmVtYWluaW5nIiwickFGIiwidG9SZWYiLCJvbk1vdW50ZWQiLCJhdXRvcGxheSIsImVtaXQiLCJnZXRDb3VudERvd24iLCJjb21wdXRlZCIsImVuZFZhbCIsIndhdGNoIiwic3RhcnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjb3VudCIsInBhdXNlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXN1bWUiLCJ1c2VFYXNpbmciLCJlYXNpbmdGbiIsInByb2dyZXNzIiwidW5yZWYiLCJleHBvc2UiLCJwYXVzZVJlc3VtZSIsInJlc2V0Il0sIm1hcHBpbmdzIjoiMmtCQU1NQSxhQUFFQSxHQUFpQkMsSUFFbkJDLEVBQVlGLEVBQWEsWUF1QnpCRyxFQUFnQkMsSUFDcEIsTUFBTUMsU0FBRUEsRUFBQUMsUUFBVUEsRUFBU0MsVUFBQUEsRUFBQUMsT0FBV0EsU0FBUUMsR0FBV0MsRUFDekROLEVBQU1PLE9BQU9QLEdBQUtRLFFBQVFQLEdBRXBCLE1BQUFRLEdBRENULEdBQUEsSUFDT1UsTUFBTSxLQUNwQixJQUFJQyxFQUFLRixFQUFFLEdBQ1gsTUFBTUcsRUFBS0gsRUFBRUksT0FBUyxFQUFJWCxFQUFVTyxFQUFFLEdBQUssR0FDckNLLEVBQU0sZUFDWixHQUFJWCxJQUFjWSxFQUFTWixHQUNsQixLQUFBVyxFQUFJRSxLQUFLTCxJQUNkQSxFQUFLQSxFQUFHTSxRQUFRSCxFQUFLLEtBQU9YLEVBQVksTUFHckMsT0FBQUUsRUFBU00sRUFBS0MsRUFBS1IsR0FHdEJjLEVBQVFDLEVBVVgsQ0FDREMsY0FBZWQsRUFBTWUsU0FDckJDLGFBQWN2QixFQUFhTyxFQUFNZSxVQUNqQ0UsU0FBVSxLQUNWQyxRQUFRLEVBQ1JDLGNBQWVuQixFQUFNb0IsU0FDckJDLFVBQVcsS0FDWEMsVUFBVyxLQUNYQyxVQUFXLEtBQ1hDLElBQUssT0FHRFIsRUFBZVMsRUFBTWIsRUFBTyxnQkFFbENjLEdBQVUsS0FDSjFCLEVBQU0yQixjQUdWQyxFQUFLLGNBR0QsTUFBQUMsRUFBZUMsR0FBUyxJQUNyQjlCLEVBQU1lLFNBQVdmLEVBQU0rQixTQUcxQkMsRUFBQSxDQUFDLElBQU1oQyxFQUFNZSxTQUFVLElBQU1mLEVBQU0rQixTQUFTLEtBQzVDL0IsRUFBTTJCLGlCQUtaLE1BQU1NLEVBQVEsS0FDTixNQUFBbEIsU0FBRUEsV0FBVUssR0FBYXBCLEVBQy9CWSxFQUFNRSxjQUFnQkMsRUFDdEJILEVBQU1TLFVBQVksS0FDbEJULEVBQU1PLGNBQWdCQyxFQUN0QlIsRUFBTU0sUUFBUyxFQUNUTixFQUFBWSxJQUFNVSxzQkFBc0JDLElBYTlCQyxFQUFRLEtBQ1pDLHFCQUFxQnpCLEVBQU1ZLE1BR3ZCYyxFQUFTLEtBQ2IxQixFQUFNUyxVQUFZLEtBQ1pULEVBQUFPLGVBQWtCUCxFQUFNVyxVQUN4QlgsRUFBQUUsZUFBa0JGLEVBQU1LLFNBQzlCaUIsc0JBQXNCQyxJQVNsQkEsRUFBU2IsSUFDUCxNQUFBaUIsVUFBRUEsRUFBV0MsU0FBQUEsRUFBQVQsT0FBVUEsR0FBVy9CLEVBQ25DWSxFQUFNUyxZQUFXVCxFQUFNUyxVQUFZQyxHQUN4Q1YsRUFBTVUsVUFBWUEsRUFDWixNQUFBbUIsRUFBV25CLEVBQVlWLEVBQU1TLFVBQzdCVCxFQUFBVyxVQUFhWCxFQUFNTyxjQUEyQnNCLEVBQ2hERixFQUNFRyxFQUFNYixHQUNGakIsRUFBQUssU0FDSkwsRUFBTUUsY0FDTjBCLEVBQVNDLEVBQVUsRUFBRzdCLEVBQU1FLGNBQWdCaUIsRUFBUW5CLEVBQU1PLGVBRXREUCxFQUFBSyxTQUFXdUIsRUFDZkMsRUFDQTdCLEVBQU1FLGNBQ05pQixFQUFTbkIsRUFBTUUsY0FDZkYsRUFBTU8sZUFJTnVCLEVBQU1iLEdBQ1JqQixFQUFNSyxTQUNKTCxFQUFNRSxpQkFDQ0EsY0FBZ0JpQixNQUF1Qm5CLEVBQU1PLGVBRXREUCxFQUFNSyxTQUNKTCxFQUFNRSxpQkFDSUYsRUFBTUUsa0JBQThCRixFQUFNTyxlQUd0RHVCLEVBQU1iLEdBQ1JqQixFQUFNSyxTQUFXTCxFQUFNSyxTQUFXYyxFQUFTQSxFQUFTbkIsRUFBTUssU0FFMURMLEVBQU1LLFNBQVdMLEVBQU1LLFNBQVdjLEVBQVNBLEVBQVNuQixFQUFNSyxTQUV0REwsRUFBQUksYUFBZXZCLEVBQWFtQixFQUFNSyxVQUNwQ3dCLEVBQVk3QixFQUFNTyxjQUNkUCxFQUFBWSxJQUFNVSxzQkFBc0JDLEdBRWxDUCxFQUFLLG9CQUlJZSxFQUFBLENBQ1hDLFlBdkVrQixLQUNkaEMsRUFBTU0sWUFFUk4sRUFBTU0sUUFBUyxRQUdmTixFQUFNTSxRQUFTLElBa0VqQjJCLE1BbkRZLEtBQ1pqQyxFQUFNUyxVQUFZLEtBQ2xCZ0IscUJBQXFCekIsRUFBTVksS0FDckJaLEVBQUFJLGFBQWV2QixFQUFhTyxFQUFNZSxXQWlEeENrQixNQUFBQSxFQUNBRyxNQUFBQSJ9
