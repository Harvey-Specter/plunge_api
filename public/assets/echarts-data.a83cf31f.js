import{l as a}from"./index.b1059dae.js";const{t:e}=a(),t={title:{text:e("analysis.monthlySales"),left:"center"},xAxis:{data:[e("analysis.january"),e("analysis.february"),e("analysis.march"),e("analysis.april"),e("analysis.may"),e("analysis.june"),e("analysis.july"),e("analysis.august"),e("analysis.september"),e("analysis.october"),e("analysis.november"),e("analysis.december")],boundaryGap:!1,axisTick:{show:!1}},grid:{left:20,right:20,bottom:20,top:80,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},yAxis:{axisTick:{show:!1}},legend:{data:[e("analysis.estimate"),e("analysis.actual")],top:50},series:[{name:e("analysis.estimate"),smooth:!0,type:"line",data:[100,120,161,134,105,160,165,114,163,185,118,123],animationDuration:2800,animationEasing:"cubicInOut"},{name:e("analysis.actual"),smooth:!0,type:"line",itemStyle:{},data:[120,82,91,154,162,140,145,250,134,56,99,123],animationDuration:2800,animationEasing:"quadraticOut"}]},n={title:{text:e("group.Industrial_Distribution"),left:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:e("analysis.userAccessSource"),type:"pie",radius:"55%",center:["50%","60%"],data:[{value:335,name:e("analysis.directAccess")},{value:310,name:e("analysis.mailMarketing")},{value:234,name:e("analysis.allianceAdvertising")},{value:135,name:e("analysis.videoAdvertising")},{value:1548,name:e("analysis.searchEngines")}]}]},s={title:{text:e("analysis.weeklyUserActivity"),left:"center"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:50,right:20,bottom:20},xAxis:{type:"category",data:[e("analysis.monday"),e("analysis.tuesday"),e("analysis.wednesday"),e("analysis.thursday"),e("analysis.friday"),e("analysis.saturday"),e("analysis.sunday")],axisTick:{alignWithLabel:!0}},yAxis:{type:"value"},series:[{name:e("analysis.activeQuantity"),data:[13253,34235,26321,12340,24643,1322,1324],type:"bar"}]},i={legend:{data:[e("workplace.personal"),e("workplace.team")]},radar:{indicator:[{name:e("workplace.quote"),max:65},{name:e("workplace.contribution"),max:160},{name:e("workplace.hot"),max:300},{name:e("workplace.yield"),max:130},{name:e("workplace.follow"),max:100}]},series:[{name:`xxx${e("workplace.index")}`,type:"radar",data:[{value:[42,30,20,35,80],name:e("workplace.personal")},{value:[50,140,290,100,90],name:e("workplace.team")}]}]},l={series:[{type:"wordCloud",gridSize:2,sizeRange:[12,50],rotationRange:[-90,90],shape:"pentagon",width:600,height:400,drawOutOfBound:!0,textStyle:{color:function(){return"rgb("+[Math.round(160*Math.random()),Math.round(160*Math.random()),Math.round(160*Math.random())].join(",")+")"}},emphasis:{textStyle:{shadowBlur:10,shadowColor:"#333"}},data:[{name:"Sam S Club",value:1e4,textStyle:{color:"black"},emphasis:{textStyle:{color:"red"}}},{name:"Macys",value:6181},{name:"Amy Schumer",value:4386},{name:"Jurassic World",value:4055},{name:"Charter Communications",value:2467},{name:"Chick Fil A",value:2244},{name:"Planet Fitness",value:1898},{name:"Pitch Perfect",value:1484},{name:"Express",value:1112},{name:"Home",value:965},{name:"Johnny Depp",value:847},{name:"Lena Dunham",value:582},{name:"Lewis Hamilton",value:555},{name:"KXAN",value:550},{name:"Mary Ellen Mark",value:462},{name:"Farrah Abraham",value:366},{name:"Rita Ora",value:360},{name:"Serena Williams",value:282},{name:"NCAA baseball tournament",value:273},{name:"Point Break",value:265}]}]};export{s as b,t as l,n as p,i as r,l as w};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNoYXJ0cy1kYXRhLmE4M2NmMzFmLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmlld3MvRGFzaGJvYXJkL2VjaGFydHMtZGF0YS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFQ2hhcnRzT3B0aW9uIH0gZnJvbSAnZWNoYXJ0cydcclxuaW1wb3J0IHsgRUNoYXJ0c09wdGlvbiBhcyBFQ2hhcnRzV29yZE9wdGlvbiB9IGZyb20gJ2VjaGFydHMtd29yZGNsb3VkJ1xyXG5pbXBvcnQgeyB1c2VJMThuIH0gZnJvbSAnQC9ob29rcy93ZWIvdXNlSTE4bidcclxuXHJcbmNvbnN0IHsgdCB9ID0gdXNlSTE4bigpXHJcblxyXG5leHBvcnQgY29uc3QgbGluZU9wdGlvbnM6IEVDaGFydHNPcHRpb24gPSB7XHJcbiAgdGl0bGU6IHtcclxuICAgIHRleHQ6IHQoJ2FuYWx5c2lzLm1vbnRobHlTYWxlcycpLFxyXG4gICAgbGVmdDogJ2NlbnRlcidcclxuICB9LFxyXG4gIHhBeGlzOiB7XHJcbiAgICBkYXRhOiBbXHJcbiAgICAgIHQoJ2FuYWx5c2lzLmphbnVhcnknKSxcclxuICAgICAgdCgnYW5hbHlzaXMuZmVicnVhcnknKSxcclxuICAgICAgdCgnYW5hbHlzaXMubWFyY2gnKSxcclxuICAgICAgdCgnYW5hbHlzaXMuYXByaWwnKSxcclxuICAgICAgdCgnYW5hbHlzaXMubWF5JyksXHJcbiAgICAgIHQoJ2FuYWx5c2lzLmp1bmUnKSxcclxuICAgICAgdCgnYW5hbHlzaXMuanVseScpLFxyXG4gICAgICB0KCdhbmFseXNpcy5hdWd1c3QnKSxcclxuICAgICAgdCgnYW5hbHlzaXMuc2VwdGVtYmVyJyksXHJcbiAgICAgIHQoJ2FuYWx5c2lzLm9jdG9iZXInKSxcclxuICAgICAgdCgnYW5hbHlzaXMubm92ZW1iZXInKSxcclxuICAgICAgdCgnYW5hbHlzaXMuZGVjZW1iZXInKVxyXG4gICAgXSxcclxuICAgIGJvdW5kYXJ5R2FwOiBmYWxzZSxcclxuICAgIGF4aXNUaWNrOiB7XHJcbiAgICAgIHNob3c6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBsZWZ0OiAyMCxcclxuICAgIHJpZ2h0OiAyMCxcclxuICAgIGJvdHRvbTogMjAsXHJcbiAgICB0b3A6IDgwLFxyXG4gICAgY29udGFpbkxhYmVsOiB0cnVlXHJcbiAgfSxcclxuICB0b29sdGlwOiB7XHJcbiAgICB0cmlnZ2VyOiAnYXhpcycsXHJcbiAgICBheGlzUG9pbnRlcjoge1xyXG4gICAgICB0eXBlOiAnY3Jvc3MnXHJcbiAgICB9LFxyXG4gICAgcGFkZGluZzogWzUsIDEwXVxyXG4gIH0sXHJcbiAgeUF4aXM6IHtcclxuICAgIGF4aXNUaWNrOiB7XHJcbiAgICAgIHNob3c6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBsZWdlbmQ6IHtcclxuICAgIGRhdGE6IFt0KCdhbmFseXNpcy5lc3RpbWF0ZScpLCB0KCdhbmFseXNpcy5hY3R1YWwnKV0sXHJcbiAgICB0b3A6IDUwXHJcbiAgfSxcclxuICBzZXJpZXM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogdCgnYW5hbHlzaXMuZXN0aW1hdGUnKSxcclxuICAgICAgc21vb3RoOiB0cnVlLFxyXG4gICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgIGRhdGE6IFsxMDAsIDEyMCwgMTYxLCAxMzQsIDEwNSwgMTYwLCAxNjUsIDExNCwgMTYzLCAxODUsIDExOCwgMTIzXSxcclxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IDI4MDAsXHJcbiAgICAgIGFuaW1hdGlvbkVhc2luZzogJ2N1YmljSW5PdXQnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiB0KCdhbmFseXNpcy5hY3R1YWwnKSxcclxuICAgICAgc21vb3RoOiB0cnVlLFxyXG4gICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgIGl0ZW1TdHlsZToge30sXHJcbiAgICAgIGRhdGE6IFsxMjAsIDgyLCA5MSwgMTU0LCAxNjIsIDE0MCwgMTQ1LCAyNTAsIDEzNCwgNTYsIDk5LCAxMjNdLFxyXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogMjgwMCxcclxuICAgICAgYW5pbWF0aW9uRWFzaW5nOiAncXVhZHJhdGljT3V0J1xyXG4gICAgfVxyXG4gIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBpZU9wdGlvbnM6IEVDaGFydHNPcHRpb24gPSB7XHJcbiAgdGl0bGU6IHtcclxuICAgIHRleHQ6IHQoJ2dyb3VwLkluZHVzdHJpYWxfRGlzdHJpYnV0aW9uJyksICAgIFxyXG4gICAgbGVmdDogJ2NlbnRlcidcclxuICB9LFxyXG4gIHRvb2x0aXA6IHtcclxuICAgIHRyaWdnZXI6ICdpdGVtJyxcclxuICAgIGZvcm1hdHRlcjogJ3thfSA8YnIvPntifSA6IHtjfSAoe2R9JSknXHJcbiAgfSxcclxuICAvLyBsZWdlbmQ6IHtcclxuICAvLyAgIG9yaWVudDogJ3ZlcnRpY2FsJyxcclxuICAvLyAgIGxlZnQ6ICdsZWZ0JyxcclxuICAvLyAgIGRhdGE6IFtcclxuICAvLyAgICAgdCgnYW5hbHlzaXMuZGlyZWN0QWNjZXNzJyksXHJcbiAgLy8gICAgIHQoJ2FuYWx5c2lzLm1haWxNYXJrZXRpbmcnKSxcclxuICAvLyAgICAgdCgnYW5hbHlzaXMuYWxsaWFuY2VBZHZlcnRpc2luZycpLFxyXG4gIC8vICAgICB0KCdhbmFseXNpcy52aWRlb0FkdmVydGlzaW5nJyksXHJcbiAgLy8gICAgIHQoJ2FuYWx5c2lzLnNlYXJjaEVuZ2luZXMnKVxyXG4gIC8vICAgXVxyXG4gIC8vIH0sXHJcbiAgc2VyaWVzOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IHQoJ2FuYWx5c2lzLnVzZXJBY2Nlc3NTb3VyY2UnKSxcclxuICAgICAgdHlwZTogJ3BpZScsXHJcbiAgICAgIHJhZGl1czogJzU1JScsXHJcbiAgICAgIGNlbnRlcjogWyc1MCUnLCAnNjAlJ10sXHJcbiAgICAgIGRhdGE6IFtcclxuICAgICAgICB7IHZhbHVlOiAzMzUsIG5hbWU6IHQoJ2FuYWx5c2lzLmRpcmVjdEFjY2VzcycpIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMzEwLCBuYW1lOiB0KCdhbmFseXNpcy5tYWlsTWFya2V0aW5nJykgfSxcclxuICAgICAgICB7IHZhbHVlOiAyMzQsIG5hbWU6IHQoJ2FuYWx5c2lzLmFsbGlhbmNlQWR2ZXJ0aXNpbmcnKSB9LFxyXG4gICAgICAgIHsgdmFsdWU6IDEzNSwgbmFtZTogdCgnYW5hbHlzaXMudmlkZW9BZHZlcnRpc2luZycpIH0sXHJcbiAgICAgICAgeyB2YWx1ZTogMTU0OCwgbmFtZTogdCgnYW5hbHlzaXMuc2VhcmNoRW5naW5lcycpIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJhck9wdGlvbnM6IEVDaGFydHNPcHRpb24gPSB7XHJcbiAgdGl0bGU6IHtcclxuICAgIHRleHQ6IHQoJ2FuYWx5c2lzLndlZWtseVVzZXJBY3Rpdml0eScpLFxyXG4gICAgbGVmdDogJ2NlbnRlcidcclxuICB9LFxyXG4gIHRvb2x0aXA6IHtcclxuICAgIHRyaWdnZXI6ICdheGlzJyxcclxuICAgIGF4aXNQb2ludGVyOiB7XHJcbiAgICAgIHR5cGU6ICdzaGFkb3cnXHJcbiAgICB9XHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBsZWZ0OiA1MCxcclxuICAgIHJpZ2h0OiAyMCxcclxuICAgIGJvdHRvbTogMjBcclxuICB9LFxyXG4gIHhBeGlzOiB7XHJcbiAgICB0eXBlOiAnY2F0ZWdvcnknLFxyXG4gICAgZGF0YTogW1xyXG4gICAgICB0KCdhbmFseXNpcy5tb25kYXknKSxcclxuICAgICAgdCgnYW5hbHlzaXMudHVlc2RheScpLFxyXG4gICAgICB0KCdhbmFseXNpcy53ZWRuZXNkYXknKSxcclxuICAgICAgdCgnYW5hbHlzaXMudGh1cnNkYXknKSxcclxuICAgICAgdCgnYW5hbHlzaXMuZnJpZGF5JyksXHJcbiAgICAgIHQoJ2FuYWx5c2lzLnNhdHVyZGF5JyksXHJcbiAgICAgIHQoJ2FuYWx5c2lzLnN1bmRheScpXHJcbiAgICBdLFxyXG4gICAgYXhpc1RpY2s6IHtcclxuICAgICAgYWxpZ25XaXRoTGFiZWw6IHRydWVcclxuICAgIH1cclxuICB9LFxyXG4gIHlBeGlzOiB7XHJcbiAgICB0eXBlOiAndmFsdWUnXHJcbiAgfSxcclxuICBzZXJpZXM6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogdCgnYW5hbHlzaXMuYWN0aXZlUXVhbnRpdHknKSxcclxuICAgICAgZGF0YTogWzEzMjUzLCAzNDIzNSwgMjYzMjEsIDEyMzQwLCAyNDY0MywgMTMyMiwgMTMyNF0sXHJcbiAgICAgIHR5cGU6ICdiYXInXHJcbiAgICB9XHJcbiAgXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmFkYXJPcHRpb246IEVDaGFydHNPcHRpb24gPSB7XHJcbiAgbGVnZW5kOiB7XHJcbiAgICBkYXRhOiBbdCgnd29ya3BsYWNlLnBlcnNvbmFsJyksIHQoJ3dvcmtwbGFjZS50ZWFtJyldXHJcbiAgfSxcclxuICByYWRhcjoge1xyXG4gICAgLy8gc2hhcGU6ICdjaXJjbGUnLFxyXG4gICAgaW5kaWNhdG9yOiBbXHJcbiAgICAgIHsgbmFtZTogdCgnd29ya3BsYWNlLnF1b3RlJyksIG1heDogNjUgfSxcclxuICAgICAgeyBuYW1lOiB0KCd3b3JrcGxhY2UuY29udHJpYnV0aW9uJyksIG1heDogMTYwIH0sXHJcbiAgICAgIHsgbmFtZTogdCgnd29ya3BsYWNlLmhvdCcpLCBtYXg6IDMwMCB9LFxyXG4gICAgICB7IG5hbWU6IHQoJ3dvcmtwbGFjZS55aWVsZCcpLCBtYXg6IDEzMCB9LFxyXG4gICAgICB7IG5hbWU6IHQoJ3dvcmtwbGFjZS5mb2xsb3cnKSwgbWF4OiAxMDAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAgc2VyaWVzOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB4eHgke3QoJ3dvcmtwbGFjZS5pbmRleCcpfWAsXHJcbiAgICAgIHR5cGU6ICdyYWRhcicsXHJcbiAgICAgIGRhdGE6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB2YWx1ZTogWzQyLCAzMCwgMjAsIDM1LCA4MF0sXHJcbiAgICAgICAgICBuYW1lOiB0KCd3b3JrcGxhY2UucGVyc29uYWwnKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdmFsdWU6IFs1MCwgMTQwLCAyOTAsIDEwMCwgOTBdLFxyXG4gICAgICAgICAgbmFtZTogdCgnd29ya3BsYWNlLnRlYW0nKVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfVxyXG4gIF1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHdvcmRPcHRpb25zOiBFQ2hhcnRzV29yZE9wdGlvbiA9IHtcclxuICBzZXJpZXM6IFtcclxuICAgIHtcclxuICAgICAgdHlwZTogJ3dvcmRDbG91ZCcsXHJcbiAgICAgIGdyaWRTaXplOiAyLFxyXG4gICAgICBzaXplUmFuZ2U6IFsxMiwgNTBdLFxyXG4gICAgICByb3RhdGlvblJhbmdlOiBbLTkwLCA5MF0sXHJcbiAgICAgIHNoYXBlOiAncGVudGFnb24nLFxyXG4gICAgICB3aWR0aDogNjAwLFxyXG4gICAgICBoZWlnaHQ6IDQwMCxcclxuICAgICAgZHJhd091dE9mQm91bmQ6IHRydWUsXHJcbiAgICAgIHRleHRTdHlsZToge1xyXG4gICAgICAgIGNvbG9yOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAncmdiKCcgK1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTYwKSxcclxuICAgICAgICAgICAgICBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxNjApLFxyXG4gICAgICAgICAgICAgIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDE2MClcclxuICAgICAgICAgICAgXS5qb2luKCcsJykgK1xyXG4gICAgICAgICAgICAnKSdcclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVtcGhhc2lzOiB7XHJcbiAgICAgICAgdGV4dFN0eWxlOiB7XHJcbiAgICAgICAgICBzaGFkb3dCbHVyOiAxMCxcclxuICAgICAgICAgIHNoYWRvd0NvbG9yOiAnIzMzMydcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnU2FtIFMgQ2x1YicsXHJcbiAgICAgICAgICB2YWx1ZTogMTAwMDAsXHJcbiAgICAgICAgICB0ZXh0U3R5bGU6IHtcclxuICAgICAgICAgICAgY29sb3I6ICdibGFjaydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlbXBoYXNpczoge1xyXG4gICAgICAgICAgICB0ZXh0U3R5bGU6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogJ3JlZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ01hY3lzJyxcclxuICAgICAgICAgIHZhbHVlOiA2MTgxXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnQW15IFNjaHVtZXInLFxyXG4gICAgICAgICAgdmFsdWU6IDQzODZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdKdXJhc3NpYyBXb3JsZCcsXHJcbiAgICAgICAgICB2YWx1ZTogNDA1NVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ0NoYXJ0ZXIgQ29tbXVuaWNhdGlvbnMnLFxyXG4gICAgICAgICAgdmFsdWU6IDI0NjdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdDaGljayBGaWwgQScsXHJcbiAgICAgICAgICB2YWx1ZTogMjI0NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ1BsYW5ldCBGaXRuZXNzJyxcclxuICAgICAgICAgIHZhbHVlOiAxODk4XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnUGl0Y2ggUGVyZmVjdCcsXHJcbiAgICAgICAgICB2YWx1ZTogMTQ4NFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ0V4cHJlc3MnLFxyXG4gICAgICAgICAgdmFsdWU6IDExMTJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdIb21lJyxcclxuICAgICAgICAgIHZhbHVlOiA5NjVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdKb2hubnkgRGVwcCcsXHJcbiAgICAgICAgICB2YWx1ZTogODQ3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnTGVuYSBEdW5oYW0nLFxyXG4gICAgICAgICAgdmFsdWU6IDU4MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ0xld2lzIEhhbWlsdG9uJyxcclxuICAgICAgICAgIHZhbHVlOiA1NTVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdLWEFOJyxcclxuICAgICAgICAgIHZhbHVlOiA1NTBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdNYXJ5IEVsbGVuIE1hcmsnLFxyXG4gICAgICAgICAgdmFsdWU6IDQ2MlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ0ZhcnJhaCBBYnJhaGFtJyxcclxuICAgICAgICAgIHZhbHVlOiAzNjZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdSaXRhIE9yYScsXHJcbiAgICAgICAgICB2YWx1ZTogMzYwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiAnU2VyZW5hIFdpbGxpYW1zJyxcclxuICAgICAgICAgIHZhbHVlOiAyODJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6ICdOQ0FBIGJhc2ViYWxsIHRvdXJuYW1lbnQnLFxyXG4gICAgICAgICAgdmFsdWU6IDI3M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogJ1BvaW50IEJyZWFrJyxcclxuICAgICAgICAgIHZhbHVlOiAyNjVcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICBdXHJcbn1cclxuIl0sIm5hbWVzIjpbInQiLCJ1c2VJMThuIiwibGluZU9wdGlvbnMiLCJ0aXRsZSIsInRleHQiLCJsZWZ0IiwieEF4aXMiLCJkYXRhIiwiYm91bmRhcnlHYXAiLCJheGlzVGljayIsInNob3ciLCJncmlkIiwicmlnaHQiLCJib3R0b20iLCJ0b3AiLCJjb250YWluTGFiZWwiLCJ0b29sdGlwIiwidHJpZ2dlciIsImF4aXNQb2ludGVyIiwidHlwZSIsInBhZGRpbmciLCJ5QXhpcyIsImxlZ2VuZCIsInNlcmllcyIsIm5hbWUiLCJzbW9vdGgiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbkVhc2luZyIsIml0ZW1TdHlsZSIsInBpZU9wdGlvbnMiLCJmb3JtYXR0ZXIiLCJyYWRpdXMiLCJjZW50ZXIiLCJ2YWx1ZSIsImJhck9wdGlvbnMiLCJhbGlnbldpdGhMYWJlbCIsInJhZGFyT3B0aW9uIiwicmFkYXIiLCJpbmRpY2F0b3IiLCJtYXgiLCJ3b3JkT3B0aW9ucyIsImdyaWRTaXplIiwic2l6ZVJhbmdlIiwicm90YXRpb25SYW5nZSIsInNoYXBlIiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3T3V0T2ZCb3VuZCIsInRleHRTdHlsZSIsImNvbG9yIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwiam9pbiIsImVtcGhhc2lzIiwic2hhZG93Qmx1ciIsInNoYWRvd0NvbG9yIl0sIm1hcHBpbmdzIjoid0NBSUEsTUFBTUEs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
