(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(13),n(3)),i=n(4),l=n(6),h=n(5),u=n(7),m=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 tc"},r.a.createElement("img",{width:"200px",height:"200px",src:"https://robohash.org/".concat(t,"?200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))},b=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(m,{key:t,id:e.id,name:e.name,email:e.email})})))},d=function(e){var t=e.onSearch;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{onChange:t,className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots"}))},g=function(e){return r.a.createElement("div",{className:"shadow-5 ba bw1 b--light-red bg-light-blue",style:{overflowY:"scroll",height:"685gpx"}},e.children)},p=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).onSearch=function(t){e.setState({search:t.target.value})},e.state={robots:[],search:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.search.toLowerCase())}));return 0===this.state.robots.length?r.a.createElement("h1",{className:"tc"},"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(d,{onSearch:this.onSearch}),r.a.createElement(g,null,r.a.createElement(b,{robots:t})))}}]),t}(a.Component);n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.7b2bb98a.chunk.js.map