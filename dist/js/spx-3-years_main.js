let subhead=document.getElementsByClassName("chart-subhead"),headline=document.getElementById("chart-head");if(!headline)for(var i=0;i<subhead.length;i++)subhead[i].style.fontWeight="600";Highcharts.setOptions({lang:{thousandsSep:""}}),document.addEventListener("DOMContentLoaded",function(){setTimeout(function(){let e=document.getElementById("chart-container");if(e)console.log("yesId");else{console.log("noId");let e=document.getElementsByClassName("chart-area");for(var t=0;t<e.length;t++)e[t].style.display="none";document.getElementById("chart-fallback").innerHTML+='<img src="https://fm-static.cnbc.com/awsmedia/chart/2019/10/28/sp500-three-year-chart.1572292140075.png" style="width: 100%;max-width:660px">'}Highcharts.chart(e,{chart:{type:"line",styledMode:!0,spacingBottom:25,spacingRight:100},title:{text:null},data:{googleSpreadsheetKey:"1HMRyj3Xg0PeEqyMCSpcd-gJmMvILgUorWp6Pn8-10aU",endColumn:1},plotOptions:{series:{lineWidth:1,marker:{enabled:!1,symbol:"circle",fillColor:"#ffffff",states:{hover:{fillColor:"#ffffff"}}}}},legend:{enabled:!1},xAxis:{labels:{style:{whiteSpace:"nowrap"}},tickLength:5},yAxis:{title:!1,labels:{useHTML:!0,overflow:"allow"}},credits:{enabled:!1},tooltip:{shadow:!1,padding:10,valueDecimals:2},annotations:[{shapes:[{point:{x:1516994669e3,y:2872.86783924313,xAxis:0,yAxis:0},type:"circle",r:5},{point:{x:1537385069e3,y:2930.74615209949,xAxis:0,yAxis:0},type:"circle",r:5},{point:{x:1556652269e3,y:2945.83088684581,xAxis:0,yAxis:0},type:"circle",r:5},{point:{x:1564169069e3,y:3025.85914811883,xAxis:0,yAxis:0},type:"circle",r:5}]}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{chart:{spacingRight:10},legend:{align:"left",x:-18},tooltip:{enabled:!1}}}]}})},1e3)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic3ViaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhlYWRsaW5lIiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJmb250V2VpZ2h0IiwiSGlnaGNoYXJ0cyIsInNldE9wdGlvbnMiLCJsYW5nIiwidGhvdXNhbmRzU2VwIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJjaGFydElkIiwiY29uc29sZSIsImxvZyIsImNoYXJ0QXJlYSIsImRpc3BsYXkiLCJpbm5lckhUTUwiLCJjaGFydCIsInR5cGUiLCJzdHlsZWRNb2RlIiwic3BhY2luZ0JvdHRvbSIsInNwYWNpbmdSaWdodCIsInRpdGxlIiwidGV4dCIsImRhdGEiLCJnb29nbGVTcHJlYWRzaGVldEtleSIsImVuZENvbHVtbiIsInBsb3RPcHRpb25zIiwic2VyaWVzIiwibGluZVdpZHRoIiwibWFya2VyIiwiZW5hYmxlZCIsInN5bWJvbCIsImZpbGxDb2xvciIsInN0YXRlcyIsImhvdmVyIiwibGVnZW5kIiwieEF4aXMiLCJsYWJlbHMiLCJ3aGl0ZVNwYWNlIiwidGlja0xlbmd0aCIsInlBeGlzIiwidXNlSFRNTCIsIm92ZXJmbG93IiwiY3JlZGl0cyIsInRvb2x0aXAiLCJzaGFkb3ciLCJwYWRkaW5nIiwidmFsdWVEZWNpbWFscyIsImFubm90YXRpb25zIiwic2hhcGVzIiwicG9pbnQiLCJ4IiwieSIsInIiLCJyZXNwb25zaXZlIiwicnVsZXMiLCJjb25kaXRpb24iLCJtYXhXaWR0aCIsImNoYXJ0T3B0aW9ucyIsImFsaWduIl0sIm1hcHBpbmdzIjoiQUFRQSxJQUFBQSxRQUFBQyxTQUFBQyx1QkFBQSxpQkFDQUMsU0FBQUYsU0FBQUcsZUFBQSxjQUNBLElBQUFELFNBQ0EsSUFBQSxJQUFBRSxFQUFBLEVBQUFBLEVBQUFMLFFBQUFNLE9BQUFELElBQ0FMLFFBQUFLLEdBQUFFLE1BQUFDLFdBQUEsTUFJQUMsV0FBQUMsV0FBQSxDQUNBQyxLQUFBLENBQ0FDLGFBQUEsTUFLQVgsU0FBQVksaUJBQUEsbUJBQUEsV0FFQUMsV0FBQSxXQUVBLElBQUFDLEVBQUFkLFNBQUFHLGVBQUEsbUJBR0EsR0FBQVcsRUFTQUMsUUFBQUMsSUFBQSxhQVRBLENBQ0FELFFBQUFDLElBQUEsUUFDQSxJQUFBQyxFQUFBakIsU0FBQUMsdUJBQUEsY0FDQSxJQUFBLElBQUFHLEVBQUEsRUFBQUEsRUFBQWEsRUFBQVosT0FBQUQsSUFDQWEsRUFBQWIsR0FBQUUsTUFBQVksUUFBQSxPQUdBbEIsU0FBQUcsZUFBQSxrQkFBQWdCLFdBQUEsZ0pBUUFYLFdBQUFZLE1BQUFOLEVBQUEsQ0FDQU0sTUFBQSxDQUNBQyxLQUFBLE9BQ0FDLFlBQUEsRUFDQUMsY0FBQSxHQUNBQyxhQUFBLEtBRUFDLE1BQUEsQ0FDQUMsS0FBQSxNQUVBQyxLQUFBLENBQ0FDLHFCQUFBLCtDQUNBQyxVQUFBLEdBR0FDLFlBQUEsQ0FDQUMsT0FBQSxDQUNBQyxVQUFBLEVBRUFDLE9BQUEsQ0FDQUMsU0FBQSxFQUNBQyxPQUFBLFNBQ0FDLFVBQUEsVUFDQUMsT0FBQSxDQUNBQyxNQUFBLENBQ0FGLFVBQUEsZUFNQUcsT0FBQSxDQUNBTCxTQUFBLEdBRUFNLE1BQUEsQ0FDQUMsT0FBQSxDQUNBbkMsTUFBQSxDQUNBb0MsV0FBQSxXQUdBQyxXQUFBLEdBRUFDLE1BQUEsQ0FDQW5CLE9BQUEsRUFDQWdCLE9BQUEsQ0FDQUksU0FBQSxFQUNBQyxTQUFBLFVBR0FDLFFBQUEsQ0FDQWIsU0FBQSxHQUVBYyxRQUFBLENBQ0FDLFFBQUEsRUFDQUMsUUFBQSxHQUNBQyxjQUFBLEdBRUFDLFlBQUEsQ0FBQSxDQUNBQyxPQUFBLENBQUEsQ0FDQUMsTUFBQSxDQUNBQyxFQUFBLGFBQ0FDLEVBQUEsaUJBQ0FoQixNQUFBLEVBQ0FJLE1BQUEsR0FFQXZCLEtBQUEsU0FDQW9DLEVBQUEsR0FDQSxDQUNBSCxNQUFBLENBQ0FDLEVBQUEsYUFDQUMsRUFBQSxpQkFDQWhCLE1BQUEsRUFDQUksTUFBQSxHQUVBdkIsS0FBQSxTQUNBb0MsRUFBQSxHQUNBLENBQ0FILE1BQUEsQ0FDQUMsRUFBQSxhQUNBQyxFQUFBLGlCQUNBaEIsTUFBQSxFQUNBSSxNQUFBLEdBRUF2QixLQUFBLFNBQ0FvQyxFQUFBLEdBQ0EsQ0FDQUgsTUFBQSxDQUNBQyxFQUFBLGFBQ0FDLEVBQUEsaUJBQ0FoQixNQUFBLEVBQ0FJLE1BQUEsR0FFQXZCLEtBQUEsU0FDQW9DLEVBQUEsTUFHQUMsV0FBQSxDQUNBQyxNQUFBLENBQUEsQ0FDQUMsVUFBQSxDQUNBQyxTQUFBLEtBRUFDLGFBQUEsQ0FDQTFDLE1BQUEsQ0FDQUksYUFBQSxJQUVBZSxPQUFBLENBQ0F3QixNQUFBLE9BQ0FSLEdBQUEsSUFFQVAsUUFBQSxDQUNBZCxTQUFBLFVBTUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFkZHMgc29jaWFsIGNsYXNzIHRvIGdldCBzb2NpYWwgY2hhcnRcbi8vIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoYXJ0LWFyZWFcIik7XG4vLyBmb3IodmFyIGkgPSAwOyBpIDwgZWxlbWVudC5sZW5ndGg7IGkrKylcbi8vIHtcbi8vICAgICBlbGVtZW50W2ldLmNsYXNzTmFtZSArPSBcIiBzb2NpYWxcIjtcbi8vIH1cblxuLy8gYm9sZHMgdGhlIHN1YmhlYWQgaWYgdGhlcmUgaXMgbm8gaGVhZGxpbmVcbmxldCBzdWJoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNoYXJ0LXN1YmhlYWRcIiksXG4gICAgaGVhZGxpbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0LWhlYWRcIik7XG4gICAgaWYgKCFoZWFkbGluZSkge1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgc3ViaGVhZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc3ViaGVhZFtpXS5zdHlsZS5mb250V2VpZ2h0ID0gXCI2MDBcIjtcbiAgICAgICAgfSAgICAgICBcbiAgICAgfVxuXG4gICAgIEhpZ2hjaGFydHMuc2V0T3B0aW9ucyh7XG4gICAgICAgIGxhbmc6IHtcbiAgICAgICAgICB0aG91c2FuZHNTZXA6ICcnXG4gICAgICAgIH1cbiAgICB9KTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuXG4gICAgbGV0IGNoYXJ0SWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0LWNvbnRhaW5lclwiKTtcblxuICAgIC8vIGNoZWNrcyBmb3IgdGhlIGNoYXJ0IElEIGFuZCBkaXNwbGF5cyBhIGJhY2t1cCBpbWFnZSBpZiB0aGUgYnJvd3NlciBjYW4ndCBmaW5kIGl0XG4gICAgaWYgKCFjaGFydElkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdub0lkJyk7XG4gICAgICAgIGxldCBjaGFydEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hhcnQtYXJlYVwiKTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNoYXJ0QXJlYS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2hhcnRBcmVhW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSBcbiAgICAgICAgLy8gaW5zZXJ0IGNoYXJ0IHNjcmVlbnNob3QgaGVyZVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0LWZhbGxiYWNrXCIpLmlubmVySFRNTCArPSAnPGltZyBzcmM9XCJodHRwczovL2ZtLXN0YXRpYy5jbmJjLmNvbS9hd3NtZWRpYS9jaGFydC8yMDE5LzEwLzI4L3NwNTAwLXRocmVlLXllYXItY2hhcnQuMTU3MjI5MjE0MDA3NS5wbmdcIiBzdHlsZT1cIndpZHRoOiAxMDAlO21heC13aWR0aDo2NjBweFwiPic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3llc0lkJylcbiAgICB9XG5cblxuICAgIGNvbnN0IG15Q2hhcnQgPSAgXG5cbiAgICAgICAgSGlnaGNoYXJ0cy5jaGFydChjaGFydElkLCB7XG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgICAgICAgICBzdHlsZWRNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNwYWNpbmdCb3R0b206IDI1LFxuICAgICAgICAgICAgICAgIHNwYWNpbmdSaWdodDogMTAwXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdGV4dDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBnb29nbGVTcHJlYWRzaGVldEtleTogJzFITVJ5ajNYZzBQZUVxeU1DU3BjZC1nSm1NdklMZ1VvcldwNlBuOC0xMGFVJyxcbiAgICAgICAgICAgICAgICBlbmRDb2x1bW46IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBmb3IgbGluZSBjaGFydHMgb25seVxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAvLyBjbGlwOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ2NpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogJyNmZmZmZmYnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeEF4aXM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRpY2tMZW5ndGg6IDVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5QXhpczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlSFRNTDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdhbGxvdydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlZGl0czoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgIHNoYWRvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgICAgICAgICAgdmFsdWVEZWNpbWFsczogMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbm5vdGF0aW9uczogW3tcbiAgICAgICAgICAgICAgICBzaGFwZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAxNTE2OTk0NjY5MDAwLCAvLyB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDI4NzIuODY3ODM5MjQzMTMsIC8vIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB4QXhpczogMCwgLy8geUF4aXMgSU5ERVhcbiAgICAgICAgICAgICAgICAgICAgICAgIHlBeGlzOiAwIC8vIHhBeGlzIElOREVYXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgIHI6IDVcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAxNTM3Mzg1MDY5MDAwLCAvLyB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDI5MzAuNzQ2MTUyMDk5NDksIC8vIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB4QXhpczogMCwgLy8geUF4aXMgSU5ERVhcbiAgICAgICAgICAgICAgICAgICAgICAgIHlBeGlzOiAwIC8vIHhBeGlzIElOREVYXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgIHI6IDVcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAxNTU2NjUyMjY5MDAwLCAvLyB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDI5NDUuODMwODg2ODQ1ODEsIC8vIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB4QXhpczogMCwgLy8geUF4aXMgSU5ERVhcbiAgICAgICAgICAgICAgICAgICAgICAgIHlBeGlzOiAwIC8vIHhBeGlzIElOREVYXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgIHI6IDVcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAxNTY0MTY5MDY5MDAwLCAvLyB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDMwMjUuODU5MTQ4MTE4ODMsIC8vIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB4QXhpczogMCwgLy8geUF4aXMgSU5ERVhcbiAgICAgICAgICAgICAgICAgICAgICAgIHlBeGlzOiAwIC8vIHhBeGlzIElOREVYXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgIHI6IDVcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgICAgIHJ1bGVzOiBbe1xuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGFydE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgc3BhY2luZ1JpZ2h0OiAxMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAtMThcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LDEwMDApO1xuICAgIH0pOyJdfQ==
