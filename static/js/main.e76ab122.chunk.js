(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(2),l=a.n(r),i=a(3),o=a(4),u=a(6),s=a(5),b=(a(12),function(t){var e=t.tabs,a=t.changeTab,n=t.activeIndex;return c.a.createElement(c.a.Fragment,null,e.map((function(t,e){return c.a.createElement("button",{className:e===n?"active":null,type:"button",key:t.title,value:e,onClick:a},t.title)})),c.a.createElement("div",{className:"text"},e[n].content))}),m=[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"}],v=function(t){Object(u.a)(a,t);var e=Object(s.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={activeIndex:0},t.changeTab=function(e){t.setState({activeIndex:+e.target.value})},t}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"React tabs"),c.a.createElement(b,{tabs:m,changeTab:this.changeTab,activeIndex:this.state.activeIndex}))}}]),a}(c.a.Component);l.a.render(c.a.createElement(v,null),document.getElementById("root"))},7:function(t,e,a){t.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.e76ab122.chunk.js.map