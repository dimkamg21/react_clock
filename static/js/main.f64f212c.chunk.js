(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),m=(n(12),n(0)),h=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={currTime:new Date},e.timerId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.timerId=window.setInterval((function(){var e=new Date;console.info(e.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&console.debug("Renamed from ".concat(e.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state.currTime,t=this.props.name;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:e.toUTCString().slice(-12,-4)})]})}}]),n}(u.a.PureComponent);function d(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var k=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},e.timerId=0,e.handleDocumentRightClick=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.handleDocumentLeftClick=function(){e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({clockName:d()})}),3300),document.addEventListener("contextmenu",this.handleDocumentRightClick),document.addEventListener("click",this.handleDocumentLeftClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handleDocumentRightClick),document.removeEventListener("click",this.handleDocumentLeftClick)}},{key:"render",value:function(){var e=this.state,t=e.clockName,n=e.hasClock;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),n&&Object(m.jsx)(h,{name:t})]})}}]),n}(u.a.PureComponent);a.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f64f212c.chunk.js.map