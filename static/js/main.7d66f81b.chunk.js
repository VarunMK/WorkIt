(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{141:function(e,t,n){e.exports=n(283)},283:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),o=n.n(i),c=n(36),l=n(284),s=(n(98),n(41)),m=n(14),u=n(42),p=n(67),d=n(68),h=n(69),E=n(76),g=n(75),b=n(95),y=n(285),f=function(e){return 1==e.toString().length?"0"+e:0==Number.isInteger(e)?Math.round(e):e},v=function(e){return{type:"CHANGE_EX",payload:e}},x=(l.a.Header,function(e){return e?"#db2828":"#21ba45"}),k=function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={isOn:!1,time:{minu:e.props.beginingTime.easy.minu,secs:e.props.beginingTime.easy.secs},timer:setInterval(e.timer,1e3),type:"Easy",value:""},e.getStartTime=function(t){return"Easy"===t?{minu:e.props.beginingTime.easy.minu,secs:e.props.beginingTime.easy.secs}:"Medium"==t?{minu:e.props.beginingTime.med.minu,secs:e.props.beginingTime.med.secs}:"Hard"==t?{minu:e.props.beginingTime.hard.minu,secs:e.props.beginingTime.hard.secs}:void 0},e.startButton=function(){e.state.isOn?(e.setState({isOn:!1}),clearInterval(e.state.timer)):(e.setState({isOn:!0}),e.setState({timer:setInterval(e.timer,1e3)}))},e.timer=function(){var t=e.state.time,n=t.minu,a=t.secs;e.state.isOn?0==n&&0==a?(alert("".concat(e.state.type," Done!")),e.resetButton(e.state.type),"Easy"==e.state.type&&e.props.changeEx(e.props.beginingTime.count)):0==a?e.setState({time:{minu:n-1,secs:59}}):e.setState({time:{minu:n,secs:a-1}}):clearInterval(Object(h.a)(e))},e.updateInput=function(t){e.setState({value:t.target.value})},e.stopButton=function(){e.state.isOn?(e.setState({isOn:!1}),clearInterval(e.state.timer)):(e.setState({isOn:!0}),e.setInterval({timer:setInterval(e.timer,1e3)}))},e.resetButton=function(){e.setState({isOn:!1,time:e.getStartTime(e.state.type)}),clearInterval(e.state.timer)},e.getHeading=function(){return e.state.isOn?r.a.createElement("div",null,"Workout in progress..."):e.state.time.minu===e.props.beginingTime.easy.minu||e.state.time.minu===e.props.beginingTime.med.minu||e.state.time.minu===e.props.beginingTime.hard.minu?r.a.createElement("div",null,"Start Workout"):r.a.createElement("div",null,"Continue Workout")},e.changeTimer=function(t){1===t?(e.resetButton(),e.setState({time:e.getStartTime("Easy"),type:"Easy"})):2===t?(e.resetButton(),e.setState({time:e.getStartTime("Medium"),type:"Medium"})):(e.resetButton(),e.setState({time:e.getStartTime("Hard"),type:"Hard"}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"show"},r.a.createElement("div",{className:"main"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",null,"WorkIt"),r.a.createElement("h2",null,"Your Workout Timer"),r.a.createElement("p",{className:"para"},"A workout timer based on your needs.",r.a.createElement("br",null)," Different settings and customization",r.a.createElement("br",null)," for the best possible experience."))),r.a.createElement("div",{id:"color2"}),r.a.createElement("h1",{className:"sec-head",style:{textAlign:"center"}},"Timer"),r.a.createElement(y.a,null),r.a.createElement("div",{style:{textAlign:"center"},className:"to"},r.a.createElement("h1",{style:{fontSize:"45px"}},this.getHeading()),r.a.createElement("h1",{style:{fontSize:"90px"}},this.state.time.minu+":"+this.state.time.secs),r.a.createElement("div",null,r.a.createElement(b.a,{type:"primary",style:{backgroundColor:"".concat(x(this.state.isOn)),borderColor:"".concat(x(this.state.isOn)),margin:"0 10px",width:"200px",height:"40px",fontSize:"18px"},onClick:this.startButton},this.state.isOn?"Stop":"Start"),r.a.createElement(b.a,{type:"primary",style:{background:"#595959",borderColor:"#595959",margin:"0 10px",width:"200px",height:"40px",fontSize:"18px"},onClick:this.resetButton},"Reset"))),r.a.createElement("br",null),r.a.createElement(y.a,null),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",{style:{fontSize:"40px"}},"Options"),r.a.createElement(b.a,{type:"primary",style:{background:"#21ba45",borderColor:"#21ba45",margin:"0 10px",width:"200px",height:"40px",fontSize:"18px"},onClick:function(){return e.changeTimer(1)}},"Easy"),r.a.createElement(b.a,{type:"primary",style:{background:"#2185d0",borderColor:"#2185d0",margin:"0 10px",width:"200px",height:"40px",fontSize:"18px"},onClick:function(){return e.changeTimer(2)}},"Medium"),r.a.createElement(b.a,{type:"primary",style:{background:"#db2828",borderColor:"#db2828",margin:"0 10px",width:"200px",height:"40px",fontSize:"18px"},onClick:function(){return e.changeTimer(3)}},"Hard")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("footer",null,r.a.createElement("div",{className:"footer-bottom text-center",id:"foot",style:{color:"white"}},"Copyright \xa9 2020 WorkIt By Zotako Corp")))}}]),n}(r.a.Component),S=Object(u.b)((function(e){return{beginingTime:e.beginingTime}}),{changeEx:v})(k),O=n(286),w=n(288),T=n(23),I=Object(T.a)(),C=Object(u.b)((function(e){return{beginningTime:e.beginningTime}}),{changeEasy:function(e,t){return{type:"CHANGE_EASY",payload:{minu:f(Math.floor((60-e)*t/60)),secs:f(60*((60-e)*t/60-Math.floor((60-e)*t/60)))}}},changeMed:function(e,t){return{type:"CHANGE_MED",payload:{minu:f(Math.floor((60-e)*t/60)),secs:f(60*((60-e)*t/60-Math.floor((60-e)*t/60)))}}},changeHard:function(e,t){return{type:"CHANGE_HARD",payload:{minu:f(Math.floor((60-e)*t/60)),secs:f(60*((60-e)*t/60-Math.floor((60-e)*t/60)))}}},changeEx:v})((function(e){var t=function(e){alert(e)};return r.a.createElement("div",{className:"App2"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{style:{textAlign:"center",backgroundColor:"white"}},r.a.createElement("h1",{style:{fontSize:"40px"}},"Settings"),r.a.createElement(O.a,{name:"basic",initialValues:{remember:!0},onFinish:function(n){var a=n.numofex,r=n.easy,i=n.med,o=n.hard,c=/^\d+$/.test(a),l=/^\d+$/.test(r),s=/^\d+$/.test(i),m=/^\d+$/.test(o);c&&l&&s&&m?(e.changeEasy(r,a),e.changeMed(i,a),e.changeHard(o,a),e.changeEx(a),I.goBack()):t("Enter a valid time/Fill up all the fields!")},onFinishFailed:t,span:12,offset:6},r.a.createElement("label",{htmlFor:"numofex",style:{color:"black"}},"Number Of Exercises (Per Round)"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O.a.Item,{name:"numofex"},r.a.createElement(w.a,{type:"number",min:"1",max:"10",style:{width:"900px",color:"black"},placeholder:"Num of Exercises"})),r.a.createElement("label",{htmlFor:"secsofeasy",style:{color:"black"}},"Rest Time(in secs) After Each Exercise For Easy"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O.a.Item,{name:"easy"},r.a.createElement(w.a,{type:"number",min:"1",max:"50",style:{width:"900px",color:"black"},placeholder:"Rest Time In Secs"})),r.a.createElement("label",{htmlFor:"secsofmed",style:{color:"black"}},"Rest Time(in secs) After Each Exercise For Medium"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O.a.Item,{name:"med"},r.a.createElement(w.a,{type:"number",min:"1",max:"60",style:{width:"900px",color:"black"},placeholder:"Rest Time In Secs"})),r.a.createElement("label",{htmlFor:"secsofeasy",style:{color:"black"}},"Rest Time(in secs) After Each Exercise For Hard"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O.a.Item,{name:"hard"},r.a.createElement(w.a,{type:"number",min:"1",max:"70",style:{width:"900px",color:"black"},placeholder:"Rest Time In Secs"})),r.a.createElement(O.a.Item,null,r.a.createElement(b.a,{type:"primary",htmlType:"submit"},"Submit")))))})),A=n(287),j=n(289),N=n(290),H=l.a.Header,W=function(e){Object(E.a)(n,e);var t=Object(g.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(H,null,r.a.createElement(A.a,{theme:"dark",mode:"horizontal"},r.a.createElement(A.a.Item,{key:"1"},r.a.createElement(s.b,{to:"/WorkIt"},"WorkIt")),r.a.createElement(A.a.Item,{key:"2"},r.a.createElement(s.b,{to:"/settings"},r.a.createElement(j.a,{style:{margin:"0 auto",fontSize:"17.5px"}}))),r.a.createElement(A.a.Item,{key:"3"},r.a.createElement("a",{href:"https://github.com/Zotako/WorkIt"},r.a.createElement(N.a,{style:{margin:"0 auto",fontSize:"17.5px"}})))))}}]),n}(r.a.Component),M=function(){return r.a.createElement(l.a,null,r.a.createElement(s.a,{history:I},r.a.createElement(W,null),r.a.createElement(m.a,{path:"/",exact:!0,component:S}),r.a.createElement(m.a,{path:"/WorkIt",exact:!0,component:S}),r.a.createElement(m.a,{path:"/settings",exact:!0,component:C})))},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var z=n(138),B=n(34),F={easy:{minu:20,secs:"00"},med:{minu:30,secs:"00"},hard:{minu:50,secs:"00"},count:0,valminu:20,valsecs:"00"},D=Object(c.c)({beginingTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_EASY":return Object(B.a)(Object(B.a)({},e),{},{easy:t.payload});case"CHANGE_MED":return Object(B.a)(Object(B.a)({},e),{},{med:t.payload});case"CHANGE_HARD":return Object(B.a)(Object(B.a)({},e),{},{hard:t.payload});case"CHANGE_EX":return Object(B.a)(Object(B.a)({},e),{},{count:t.payload});default:return e}}}),G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.d,$=Object(c.e)(D,G(Object(c.a)(z.a)));o.a.render(r.a.createElement(u.a,{store:$},r.a.createElement(M,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/WorkIt",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/WorkIt","/service-worker.js");_?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()},98:function(e,t,n){}},[[141,1,2]]]);
//# sourceMappingURL=main.7d66f81b.chunk.js.map