const n={id:"id",children:"children",pid:"pid"},r=r=>Object.assign({},n,r),e=(n,e={})=>{e=r(e);const{children:t}=e,i=[...n];for(let r=0;r<i.length;r++)i[r][t]&&i.splice(r+1,0,...i[r][t]);return i},t=(n,e,t={})=>{t=r(t);const i=[],c=[...n],s=new Set,{children:l}=t;for(;c.length;){const n=c[0];if(s.has(n))i.pop(),c.shift();else if(s.add(n),n[l]&&c.unshift(...n[l]),i.push(n),e(n))return i}return null},i=(n,e,t={})=>{const i=(t=r(t)).children;return function n(r){return r.map((n=>({...n}))).filter((r=>(r[i]=r[i]&&n(r[i]),e(r)||r[i]&&r[i].length)))}(n)},c=(n,r)=>n.map((n=>s(n,r))),s=(n,{children:r="children",conversion:e})=>{const t=Array.isArray(n[r])&&n[r].length>0,i=e(n)||{};return t?{...i,[r]:n[r].map((n=>s(n,{children:r,conversion:e})))}:{...i}},l=(n,r,e={})=>{n.forEach((n=>{const t=r(n,e)||n;n.children&&l(n.children,r,t)}))};export{t as a,e as b,l as e,i as f,c as t};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5iNmU5NTVmOS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL3RyZWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRyZWVIZWxwZXJDb25maWcge1xuICBpZDogc3RyaW5nXG4gIGNoaWxkcmVuOiBzdHJpbmdcbiAgcGlkOiBzdHJpbmdcbn1cbmNvbnN0IERFRkFVTFRfQ09ORklHOiBUcmVlSGVscGVyQ29uZmlnID0ge1xuICBpZDogJ2lkJyxcbiAgY2hpbGRyZW46ICdjaGlsZHJlbicsXG4gIHBpZDogJ3BpZCdcbn1cblxuY29uc3QgZ2V0Q29uZmlnID0gKGNvbmZpZzogUGFydGlhbDxUcmVlSGVscGVyQ29uZmlnPikgPT4gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9DT05GSUcsIGNvbmZpZylcblxuLy8gdHJlZSBmcm9tIGxpc3RcbmV4cG9ydCBjb25zdCBsaXN0VG9UcmVlID0gPFQgPSBhbnk+KGxpc3Q6IGFueVtdLCBjb25maWc6IFBhcnRpYWw8VHJlZUhlbHBlckNvbmZpZz4gPSB7fSk6IFRbXSA9PiB7XG4gIGNvbnN0IGNvbmYgPSBnZXRDb25maWcoY29uZmlnKSBhcyBUcmVlSGVscGVyQ29uZmlnXG4gIGNvbnN0IG5vZGVNYXAgPSBuZXcgTWFwKClcbiAgY29uc3QgcmVzdWx0OiBUW10gPSBbXVxuICBjb25zdCB7IGlkLCBjaGlsZHJlbiwgcGlkIH0gPSBjb25mXG5cbiAgZm9yIChjb25zdCBub2RlIG9mIGxpc3QpIHtcbiAgICBub2RlW2NoaWxkcmVuXSA9IG5vZGVbY2hpbGRyZW5dIHx8IFtdXG4gICAgbm9kZU1hcC5zZXQobm9kZVtpZF0sIG5vZGUpXG4gIH1cbiAgZm9yIChjb25zdCBub2RlIG9mIGxpc3QpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBub2RlTWFwLmdldChub2RlW3BpZF0pXG4gICAgOyhwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4gOiByZXN1bHQpLnB1c2gobm9kZSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBjb25zdCB0cmVlVG9MaXN0ID0gPFQgPSBhbnk+KHRyZWU6IGFueSwgY29uZmlnOiBQYXJ0aWFsPFRyZWVIZWxwZXJDb25maWc+ID0ge30pOiBUID0+IHtcbiAgY29uZmlnID0gZ2V0Q29uZmlnKGNvbmZpZylcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29uZmlnXG4gIGNvbnN0IHJlc3VsdDogYW55ID0gWy4uLnRyZWVdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFyZXN1bHRbaV1bY2hpbGRyZW4hXSkgY29udGludWVcbiAgICByZXN1bHQuc3BsaWNlKGkgKyAxLCAwLCAuLi5yZXN1bHRbaV1bY2hpbGRyZW4hXSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBjb25zdCBmaW5kTm9kZSA9IDxUID0gYW55PihcbiAgdHJlZTogYW55LFxuICBmdW5jOiBGbixcbiAgY29uZmlnOiBQYXJ0aWFsPFRyZWVIZWxwZXJDb25maWc+ID0ge31cbik6IFQgfCBudWxsID0+IHtcbiAgY29uZmlnID0gZ2V0Q29uZmlnKGNvbmZpZylcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29uZmlnXG4gIGNvbnN0IGxpc3QgPSBbLi4udHJlZV1cbiAgZm9yIChjb25zdCBub2RlIG9mIGxpc3QpIHtcbiAgICBpZiAoZnVuYyhub2RlKSkgcmV0dXJuIG5vZGVcbiAgICBub2RlW2NoaWxkcmVuIV0gJiYgbGlzdC5wdXNoKC4uLm5vZGVbY2hpbGRyZW4hXSlcbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgZmluZE5vZGVBbGwgPSA8VCA9IGFueT4oXG4gIHRyZWU6IGFueSxcbiAgZnVuYzogRm4sXG4gIGNvbmZpZzogUGFydGlhbDxUcmVlSGVscGVyQ29uZmlnPiA9IHt9XG4pOiBUW10gPT4ge1xuICBjb25maWcgPSBnZXRDb25maWcoY29uZmlnKVxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb25maWdcbiAgY29uc3QgbGlzdCA9IFsuLi50cmVlXVxuICBjb25zdCByZXN1bHQ6IFRbXSA9IFtdXG4gIGZvciAoY29uc3Qgbm9kZSBvZiBsaXN0KSB7XG4gICAgZnVuYyhub2RlKSAmJiByZXN1bHQucHVzaChub2RlKVxuICAgIG5vZGVbY2hpbGRyZW4hXSAmJiBsaXN0LnB1c2goLi4ubm9kZVtjaGlsZHJlbiFdKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGNvbnN0IGZpbmRQYXRoID0gPFQgPSBhbnk+KFxuICB0cmVlOiBhbnksXG4gIGZ1bmM6IEZuLFxuICBjb25maWc6IFBhcnRpYWw8VHJlZUhlbHBlckNvbmZpZz4gPSB7fVxuKTogVCB8IFRbXSB8IG51bGwgPT4ge1xuICBjb25maWcgPSBnZXRDb25maWcoY29uZmlnKVxuICBjb25zdCBwYXRoOiBUW10gPSBbXVxuICBjb25zdCBsaXN0ID0gWy4uLnRyZWVdXG4gIGNvbnN0IHZpc2l0ZWRTZXQgPSBuZXcgU2V0KClcbiAgY29uc3QgeyBjaGlsZHJlbiB9ID0gY29uZmlnXG4gIHdoaWxlIChsaXN0Lmxlbmd0aCkge1xuICAgIGNvbnN0IG5vZGUgPSBsaXN0WzBdXG4gICAgaWYgKHZpc2l0ZWRTZXQuaGFzKG5vZGUpKSB7XG4gICAgICBwYXRoLnBvcCgpXG4gICAgICBsaXN0LnNoaWZ0KClcbiAgICB9IGVsc2Uge1xuICAgICAgdmlzaXRlZFNldC5hZGQobm9kZSlcbiAgICAgIG5vZGVbY2hpbGRyZW4hXSAmJiBsaXN0LnVuc2hpZnQoLi4ubm9kZVtjaGlsZHJlbiFdKVxuICAgICAgcGF0aC5wdXNoKG5vZGUpXG4gICAgICBpZiAoZnVuYyhub2RlKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgY29uc3QgZmluZFBhdGhBbGwgPSAodHJlZTogYW55LCBmdW5jOiBGbiwgY29uZmlnOiBQYXJ0aWFsPFRyZWVIZWxwZXJDb25maWc+ID0ge30pID0+IHtcbiAgY29uZmlnID0gZ2V0Q29uZmlnKGNvbmZpZylcbiAgY29uc3QgcGF0aDogYW55W10gPSBbXVxuICBjb25zdCBsaXN0ID0gWy4uLnRyZWVdXG4gIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXVxuICBjb25zdCB2aXNpdGVkU2V0ID0gbmV3IFNldCgpLFxuICAgIHsgY2hpbGRyZW4gfSA9IGNvbmZpZ1xuICB3aGlsZSAobGlzdC5sZW5ndGgpIHtcbiAgICBjb25zdCBub2RlID0gbGlzdFswXVxuICAgIGlmICh2aXNpdGVkU2V0Lmhhcyhub2RlKSkge1xuICAgICAgcGF0aC5wb3AoKVxuICAgICAgbGlzdC5zaGlmdCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZpc2l0ZWRTZXQuYWRkKG5vZGUpXG4gICAgICBub2RlW2NoaWxkcmVuIV0gJiYgbGlzdC51bnNoaWZ0KC4uLm5vZGVbY2hpbGRyZW4hXSlcbiAgICAgIHBhdGgucHVzaChub2RlKVxuICAgICAgZnVuYyhub2RlKSAmJiByZXN1bHQucHVzaChbLi4ucGF0aF0pXG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGNvbnN0IGZpbHRlciA9IDxUID0gYW55PihcbiAgdHJlZTogVFtdLFxuICBmdW5jOiAobjogVCkgPT4gYm9vbGVhbixcbiAgY29uZmlnOiBQYXJ0aWFsPFRyZWVIZWxwZXJDb25maWc+ID0ge31cbik6IFRbXSA9PiB7XG4gIGNvbmZpZyA9IGdldENvbmZpZyhjb25maWcpXG4gIGNvbnN0IGNoaWxkcmVuID0gY29uZmlnLmNoaWxkcmVuIGFzIHN0cmluZ1xuICBmdW5jdGlvbiBsaXN0RmlsdGVyKGxpc3Q6IFRbXSkge1xuICAgIHJldHVybiBsaXN0XG4gICAgICAubWFwKChub2RlOiBhbnkpID0+ICh7IC4uLm5vZGUgfSkpXG4gICAgICAuZmlsdGVyKChub2RlKSA9PiB7XG4gICAgICAgIG5vZGVbY2hpbGRyZW5dID0gbm9kZVtjaGlsZHJlbl0gJiYgbGlzdEZpbHRlcihub2RlW2NoaWxkcmVuXSlcbiAgICAgICAgcmV0dXJuIGZ1bmMobm9kZSkgfHwgKG5vZGVbY2hpbGRyZW5dICYmIG5vZGVbY2hpbGRyZW5dLmxlbmd0aClcbiAgICAgIH0pXG4gIH1cbiAgcmV0dXJuIGxpc3RGaWx0ZXIodHJlZSlcbn1cblxuZXhwb3J0IGNvbnN0IGZvckVhY2ggPSA8VCA9IGFueT4oXG4gIHRyZWU6IFRbXSxcbiAgZnVuYzogKG46IFQpID0+IGFueSxcbiAgY29uZmlnOiBQYXJ0aWFsPFRyZWVIZWxwZXJDb25maWc+ID0ge31cbik6IHZvaWQgPT4ge1xuICBjb25maWcgPSBnZXRDb25maWcoY29uZmlnKVxuICBjb25zdCBsaXN0OiBhbnlbXSA9IFsuLi50cmVlXVxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBjb25maWdcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gZnVuYyDov5Tlm550cnVl5bCx57uI5q2i6YGN5Y6G77yM6YG/5YWN5aSn6YeP6IqC54K55Zy65pmv5LiL5peg5oSP5LmJ5b6q546v77yM5byV6LW35rWP6KeI5Zmo5Y2h6aG/XG4gICAgaWYgKGZ1bmMobGlzdFtpXSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjaGlsZHJlbiAmJiBsaXN0W2ldW2NoaWxkcmVuXSAmJiBsaXN0LnNwbGljZShpICsgMSwgMCwgLi4ubGlzdFtpXVtjaGlsZHJlbl0pXG4gIH1cbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb246IEV4dHJhY3QgdHJlZSBzcGVjaWZpZWQgc3RydWN0dXJlXG4gKi9cbmV4cG9ydCBjb25zdCB0cmVlTWFwID0gPFQgPSBhbnk+KFxuICB0cmVlRGF0YTogVFtdLFxuICBvcHQ6IHsgY2hpbGRyZW4/OiBzdHJpbmc7IGNvbnZlcnNpb246IEZuIH1cbik6IFRbXSA9PiB7XG4gIHJldHVybiB0cmVlRGF0YS5tYXAoKGl0ZW0pID0+IHRyZWVNYXBFYWNoKGl0ZW0sIG9wdCkpXG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uOiBFeHRyYWN0IHRyZWUgc3BlY2lmaWVkIHN0cnVjdHVyZVxuICovXG5leHBvcnQgY29uc3QgdHJlZU1hcEVhY2ggPSAoXG4gIGRhdGE6IGFueSxcbiAgeyBjaGlsZHJlbiA9ICdjaGlsZHJlbicsIGNvbnZlcnNpb24gfTogeyBjaGlsZHJlbj86IHN0cmluZzsgY29udmVyc2lvbjogRm4gfVxuKSA9PiB7XG4gIGNvbnN0IGhhdmVDaGlsZHJlbiA9IEFycmF5LmlzQXJyYXkoZGF0YVtjaGlsZHJlbl0pICYmIGRhdGFbY2hpbGRyZW5dLmxlbmd0aCA+IDBcbiAgY29uc3QgY29udmVyc2lvbkRhdGEgPSBjb252ZXJzaW9uKGRhdGEpIHx8IHt9XG4gIGlmIChoYXZlQ2hpbGRyZW4pIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY29udmVyc2lvbkRhdGEsXG4gICAgICBbY2hpbGRyZW5dOiBkYXRhW2NoaWxkcmVuXS5tYXAoKGk6IG51bWJlcikgPT5cbiAgICAgICAgdHJlZU1hcEVhY2goaSwge1xuICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgIGNvbnZlcnNpb25cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmNvbnZlcnNpb25EYXRhXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog6YCS5b2S6YGN5Y6G5qCR57uT5p6EXG4gKiBAcGFyYW0gdHJlZURhdGFzIOagkVxuICogQHBhcmFtIGNhbGxCYWNrIOWbnuiwg1xuICogQHBhcmFtIHBhcmVudE5vZGUg54i26IqC54K5XG4gKi9cbmV4cG9ydCBjb25zdCBlYWNoVHJlZSA9ICh0cmVlRGF0YXM6IGFueVtdLCBjYWxsQmFjazogRm4sIHBhcmVudE5vZGUgPSB7fSkgPT4ge1xuICB0cmVlRGF0YXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IG5ld05vZGUgPSBjYWxsQmFjayhlbGVtZW50LCBwYXJlbnROb2RlKSB8fCBlbGVtZW50XG4gICAgaWYgKGVsZW1lbnQuY2hpbGRyZW4pIHtcbiAgICAgIGVhY2hUcmVlKGVsZW1lbnQuY2hpbGRyZW4sIGNhbGxCYWNrLCBuZXdOb2RlKVxuICAgIH1cbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJERUZBVUxUX0NPTkZJRyIsImlkIiwiY2hpbGRyZW4iLCJwaWQiLCJnZXRDb25maWciLCJjb25maWciLCJPYmplY3QiLCJhc3NpZ24iLCJ0cmVlVG9MaXN0IiwidHJlZSIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJmaW5kUGF0aCIsImZ1bmMiLCJwYXRoIiwibGlzdCIsInZpc2l0ZWRTZXQiLCJTZXQiLCJub2RlIiwiaGFzIiwicG9wIiwic2hpZnQiLCJhZGQiLCJ1bnNoaWZ0IiwicHVzaCIsImZpbHRlciIsImxpc3RGaWx0ZXIiLCJtYXAiLCJ0cmVlTWFwIiwidHJlZURhdGEiLCJvcHQiLCJpdGVtIiwidHJlZU1hcEVhY2giLCJkYXRhIiwiY29udmVyc2lvbiIsImhhdmVDaGlsZHJlbiIsIkFycmF5IiwiaXNBcnJheSIsImNvbnZlcnNpb25EYXRhIiwiZWFjaFRyZWUiLCJ0cmVlRGF0YXMiLCJjYWxsQmFjayIsInBhcmVudE5vZGUiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm5ld05vZGUiXSwibWFwcGluZ3MiOiJBQUtBLE1BQU1BLEVBQW1DLENBQ3ZDQyxHQUFJLEtBQ0pDLFNBQVUsV0FDVkMsSUFBSyxPQUdEQyxFQUFhQyxHQUFzQ0MsT0FBT0MsT0FBTyxHQUFJUCxFQUFnQkssR0FvQjlFRyxFQUFhLENBQVVDLEVBQVdKLEVBQW9DLE1BQ2pGQSxFQUFTRCxFQUFVQyxHQUNiLE1BQUFILFNBQUVBLEdBQWFHLEVBQ2ZLLEVBQWMsSUFBSUQsR0FDeEIsSUFBQSxJQUFTRSxFQUFJLEVBQUdBLEVBQUlELEVBQU9FLE9BQVFELElBQzVCRCxFQUFPQyxHQUFHVCxJQUNmUSxFQUFPRyxPQUFPRixFQUFJLEVBQUcsS0FBTUQsRUFBT0MsR0FBR1QsSUFFaEMsT0FBQVEsR0FrQ0lJLEVBQVcsQ0FDdEJMLEVBQ0FNLEVBQ0FWLEVBQW9DLE1BRXBDQSxFQUFTRCxFQUFVQyxHQUNuQixNQUFNVyxFQUFZLEdBQ1pDLEVBQU8sSUFBSVIsR0FDWFMsTUFBaUJDLEtBQ2pCakIsU0FBRUEsR0FBYUcsRUFDckIsS0FBT1ksRUFBS0wsUUFBUSxDQUNsQixNQUFNUSxFQUFPSCxFQUFLLEdBQ2QsR0FBQUMsRUFBV0csSUFBSUQsR0FDakJKLEVBQUtNLE1BQ0xMLEVBQUtNLGFBS0QsR0FISkwsRUFBV00sSUFBSUosR0FDZkEsRUFBS2xCLElBQWNlLEVBQUtRLFdBQVdMLEVBQUtsQixJQUN4Q2MsRUFBS1UsS0FBS04sR0FDTkwsRUFBS0ssR0FDQSxPQUFBSixFQUlOLE9BQUEsTUF5QklXLEVBQVMsQ0FDcEJsQixFQUNBTSxFQUNBVixFQUFvQyxNQUdwQyxNQUFNSCxHQURORyxFQUFTRCxFQUFVQyxJQUNLSCxTQVN4QixPQVJBLFNBQVMwQixFQUFXWCxHQUNYLE9BQUFBLEVBQ0pZLEtBQUtULElBQWUsSUFBS0EsTUFDekJPLFFBQVFQLElBQ1BBLEVBQUtsQixHQUFZa0IsRUFBS2xCLElBQWEwQixFQUFXUixFQUFLbEIsSUFDNUNhLEVBQUtLLElBQVVBLEVBQUtsQixJQUFha0IsRUFBS2xCLEdBQVVVLFVBR3REZ0IsQ0FBV25CLElBdUJQcUIsRUFBVSxDQUNyQkMsRUFDQUMsSUFFT0QsRUFBU0YsS0FBS0ksR0FBU0MsRUFBWUQsRUFBTUQsS0FNckNFLEVBQWMsQ0FDekJDLEdBQ0VqQyxTQUFBQSxFQUFXLFdBQVlrQyxXQUFBQSxNQUVuQixNQUFBQyxFQUFlQyxNQUFNQyxRQUFRSixFQUFLakMsS0FBY2lDLEVBQUtqQyxHQUFVVSxPQUFTLEVBQ3hFNEIsRUFBaUJKLEVBQVdELElBQVMsR0FDM0MsT0FBSUUsRUFDSyxJQUNGRyxFQUNIdEMsQ0FBQ0EsR0FBV2lDLEVBQUtqQyxHQUFVMkIsS0FBS2xCLEdBQzlCdUIsRUFBWXZCLEVBQUcsQ0FDYlQsU0FBQUEsRUFDQWtDLFdBQUFBLE9BS0MsSUFDRkksSUFXSUMsRUFBVyxDQUFDQyxFQUFrQkMsRUFBY0MsRUFBYSxNQUMxREYsRUFBQUcsU0FBU0MsSUFDakIsTUFBTUMsRUFBVUosRUFBU0csRUFBU0YsSUFBZUUsRUFDN0NBLEVBQVE1QyxVQUNEdUMsRUFBQUssRUFBUTVDLFNBQVV5QyxFQUFVSSJ9