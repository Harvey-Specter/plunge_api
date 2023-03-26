import{k as e}from"./index.f2e05143.js";const{t:r}=e(),n=()=>({required:e=>({required:!0,message:e||r("common.required")}),lengthRange:(e,r,n)=>{const{min:o,max:t,message:s}=n;e.length<o||e.length>t?r(new Error(s)):r()},notSpace:(e,r,n)=>{-1!==e.indexOf(" ")?r(new Error(n)):r()},notSpecialCharacters:(e,r,n)=>{/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/gi.test(e)?r(new Error(n)):r()},isEqual:(e,r,n,o)=>{e===r?n():n(new Error(o))}});export{n as u};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlVmFsaWRhdG9yLjYxZDc3NjBjLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaG9va3Mvd2ViL3VzZVZhbGlkYXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAnQC9ob29rcy93ZWIvdXNlSTE4bidcblxuY29uc3QgeyB0IH0gPSB1c2VJMThuKClcblxudHlwZSBDYWxsYmFjayA9IChlcnJvcj86IHN0cmluZyB8IEVycm9yIHwgdW5kZWZpbmVkKSA9PiB2b2lkXG5cbmludGVyZmFjZSBMZW5ndGhSYW5nZSB7XG4gIG1pbjogbnVtYmVyXG4gIG1heDogbnVtYmVyXG4gIG1lc3NhZ2U6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgdXNlVmFsaWRhdG9yID0gKCkgPT4ge1xuICBjb25zdCByZXF1aXJlZCA9IChtZXNzYWdlPzogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgbWVzc2FnZTogbWVzc2FnZSB8fCB0KCdjb21tb24ucmVxdWlyZWQnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGxlbmd0aFJhbmdlID0gKHZhbDogYW55LCBjYWxsYmFjazogQ2FsbGJhY2ssIG9wdGlvbnM6IExlbmd0aFJhbmdlKSA9PiB7XG4gICAgY29uc3QgeyBtaW4sIG1heCwgbWVzc2FnZSB9ID0gb3B0aW9uc1xuICAgIGlmICh2YWwubGVuZ3RoIDwgbWluIHx8IHZhbC5sZW5ndGggPiBtYXgpIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcihtZXNzYWdlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG5vdFNwYWNlID0gKHZhbDogYW55LCBjYWxsYmFjazogQ2FsbGJhY2ssIG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICAgIC8vIOeUqOaIt+WQjeS4jeiDveacieepuuagvFxuICAgIGlmICh2YWwuaW5kZXhPZignICcpICE9PSAtMSkge1xuICAgICAgY2FsbGJhY2sobmV3IEVycm9yKG1lc3NhZ2UpKVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgbm90U3BlY2lhbENoYXJhY3RlcnMgPSAodmFsOiBhbnksIGNhbGxiYWNrOiBDYWxsYmFjaywgbWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gICAgLy8g5a+G56CB5LiN6IO95piv54m55q6K5a2X56ymXG4gICAgaWYgKC9bYH4hQCMkJV4mKigpXys8Pj86XCJ7fSwuXFwvOydbXFxdXS9naS50ZXN0KHZhbCkpIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcihtZXNzYWdlKSlcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfVxuXG4gIC8vIOS4pOS4quWtl+espuS4suaYr+WQpuaDs+etiVxuICBjb25zdCBpc0VxdWFsID0gKHZhbDE6IHN0cmluZywgdmFsMjogc3RyaW5nLCBjYWxsYmFjazogQ2FsbGJhY2ssIG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICAgIGlmICh2YWwxID09PSB2YWwyKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcihtZXNzYWdlKSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlcXVpcmVkLFxuICAgIGxlbmd0aFJhbmdlLFxuICAgIG5vdFNwYWNlLFxuICAgIG5vdFNwZWNpYWxDaGFyYWN0ZXJzLFxuICAgIGlzRXF1YWxcbiAgfVxufVxuIl0sIm5hbWVzIjpbInQiLCJ1c2VJMThuIiwidXNlVmFsaWRhdG9yIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwibGVuZ3RoUmFuZ2UiLCJ2YWwiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJtaW4iLCJtYXgiLCJsZW5ndGgiLCJFcnJvciIsIm5vdFNwYWNlIiwiaW5kZXhPZiIsIm5vdFNwZWNpYWxDaGFyYWN0ZXJzIiwidGVzdCIsImlzRXF1YWwiLCJ2YWwxIiwidmFsMiJdLCJtYXBwaW5ncyI6IndDQUVBLE1BQU1BLEVBQUVBLEdBQU1DLElBVURDLEVBQWUsS0E0Q25CLENBQ0xDLFNBNUNnQkMsSUFDVCxDQUNMRCxVQUFVLEVBQ1ZDLFFBQVNBLEdBQVdKLEVBQUUscUJBMEN4QkssWUF0Q2tCLENBQUNDLEVBQVVDLEVBQW9CQyxLQUNqRCxNQUFNQyxJQUFFQSxFQUFBQyxJQUFLQSxFQUFLTixRQUFBQSxHQUFZSSxFQUMxQkYsRUFBSUssT0FBU0YsR0FBT0gsRUFBSUssT0FBU0QsRUFDMUJILEVBQUEsSUFBSUssTUFBTVIsU0FvQ3JCUyxTQTlCZSxDQUFDUCxFQUFVQyxFQUFvQkgsTUFFakIsSUFBekJFLEVBQUlRLFFBQVEsS0FDTFAsRUFBQSxJQUFJSyxNQUFNUixTQTRCckJXLHFCQXRCMkIsQ0FBQ1QsRUFBVUMsRUFBb0JILEtBRXRELHFDQUFxQ1ksS0FBS1YsR0FDbkNDLEVBQUEsSUFBSUssTUFBTVIsU0FvQnJCYSxRQWJjLENBQUNDLEVBQWNDLEVBQWNaLEVBQW9CSCxLQUMzRGMsSUFBU0MsTUFHRlosRUFBQSxJQUFJSyxNQUFNUiJ9