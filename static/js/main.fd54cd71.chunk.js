(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10),o=n.n(l),i=(n(24),n(7)),c=n(1),s=n(18),m=n(19),u=n(20),p=n(22),d=n(21),b=n(110),E=n(109),h=function(e){return e?"#db2828":"#21ba45"},f=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).beginingTime={pomorado:{minu:"25",secs:"00"},shortbreak:{minu:"5",secs:"00"},longbreak:{minu:"15",secs:"00"},count:0},e.state={isOn:!1,time:{minu:e.beginingTime.pomorado.minu,secs:e.beginingTime.pomorado.secs},timer:setInterval(e.timer,1e3),type:"Workout",value:""},e.handleSubmit=function(t){t.preventDefault(),e.beginingTime.pomorado.minu=2*e.state.value,e.state.time.minu=e.beginingTime.pomorado.minu,e.state.time.secs=e.beginingTime.pomorado.secs,e.resetButton()},e.getStartTime=function(t){if("Workout"===t)return{minu:e.beginingTime.pomorado.minu,secs:e.beginingTime.pomorado.secs}},e.startButton=function(){e.state.isOn?(e.setState({isOn:!1}),clearInterval(e.state.timer)):(e.setState({isOn:!0}),e.setState({timer:setInterval(e.timer,1e3)}))},e.timer=function(){var t=e.state.time,n=t.minu,a=t.secs;e.state.isOn?0==n&&0==a?(alert("".concat(e.state.type," Done!")),e.resetButton(e.state.type)):0==a?e.setState({time:{minu:n-1,secs:59}}):e.setState({time:{minu:n,secs:a-1}}):clearInterval(Object(u.a)(e))},e.updateInput=function(t){e.setState({value:t.target.value})},e.stopButton=function(){e.state.isOn?(e.setState({isOn:!1}),clearInterval(e.state.timer)):(e.setState({isOn:!0}),e.setInterval({timer:setInterval(e.timer,1e3)}))},e.resetButton=function(){e.setState({isOn:!1,time:e.getStartTime(e.state.type)}),clearInterval(e.state.timer)},e.getHeading=function(){return e.state.isOn?r.a.createElement("div",null,e.state.type," in progress..."):e.state.time.minu===e.beginingTime.pomorado.minu||e.state.time.minu===e.beginingTime.shortbreak.minu||e.state.time.minu===e.beginingTime.longbreak.minu?r.a.createElement("div",null,"Start ",e.state.type):r.a.createElement("div",null,"Continue ",e.state.type)},e}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"show"},r.a.createElement("header",null,r.a.createElement("nav",{className:"ok"},r.a.createElement("ul",{className:"ok"},r.a.createElement("li",{className:"hide"},r.a.createElement(i.b,{to:"/"},r.a.createElement("strong",null,"WorkIt"))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/settings"},r.a.createElement("strong",null,"Settings")))))),r.a.createElement("div",{className:"main"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",null,"WorkIt"),r.a.createElement("h2",null,"Your Workout Timer"),r.a.createElement("p",{className:"para"},"A workout timer based on your needs.",r.a.createElement("br",null)," Different settings and customization",r.a.createElement("br",null)," for the best possible experience."))),r.a.createElement("div",{id:"color2"}),r.a.createElement("section",{id:"timer"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"sec-head"},"Timer"),r.a.createElement("form",{onSubmit:this.handleSubmit,className:"containme"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"InputRounds",style:{color:"black"}},"Number Of Rounds"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"number",min:"1",className:"form-check-input",style:{height:"35px",color:"black"},id:"InputRounds",placeholder:"Enter Rounds",onChange:this.updateInput})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",style:{color:"white"}},"Submit"))),r.a.createElement("br",null)),r.a.createElement("div",{style:{textAlign:"center"},className:"to"},r.a.createElement(E.a,null),r.a.createElement("h1",{style:{fontSize:"45px"}},this.getHeading()),r.a.createElement("h1",{style:{fontSize:"90px"}},this.state.time.minu+":"+this.state.time.secs),r.a.createElement("div",null,r.a.createElement(b.a,{type:"primary",style:{backgroundColor:"".concat(h(this.state.isOn)),borderColor:"".concat(h(this.state.isOn)),margin:"0 10px",width:"200px",height:"40px",fontSize:"18px"},onClick:this.startButton},this.state.isOn?"Stop":"Start"),r.a.createElement(b.a,{type:"primary",style:{background:"#595959",borderColor:"#595959",margin:"0 10px",width:"200px",height:"40px",fontSize:"18px"},onClick:this.resetButton},"Reset"))),r.a.createElement("br",null),r.a.createElement("footer",null,r.a.createElement("div",{className:"footer-bottom text-center",id:"foot",style:{color:"white"}},"Copyright \xa9 2020 WorkIt By Zotako Corp")))}}]),n}(r.a.Component),g=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App2"},r.a.createElement("div",{id:"make"},r.a.createElement("header",{id:"make"},r.a.createElement("nav",{className:"ok",id:"make"},r.a.createElement("ul",{className:"ok",id:"make"},r.a.createElement("li",{className:"hide"},r.a.createElement(i.b,{to:"/"},r.a.createElement("strong",null,"WorkIt"))),r.a.createElement("li",null,r.a.createElement(i.b,{to:"/settings"},r.a.createElement("strong",null,"Settings"))))))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h1",{style:{textAlign:"center",color:"black"},className:"hap"},r.a.createElement("strong",null,"Settings")),r.a.createElement("div",{className:"kk"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"containme2"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"numofex",style:{color:"black"}},"Number Of Exercises (Per Round)"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"number",min:"1",max:"10",className:"form-check-input2",style:{height:"35px",color:"black"},id:"numofex",placeholder:"Num of Exercises",onChange:this.updateInput}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{for:"secsofeasy",style:{color:"black"}},"Rest Time(in secs) After Each Exercise For Easy"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"number",min:"1",max:"100",className:"form-check-input2",style:{height:"35px",color:"black"},id:"secsofeasy",placeholder:"Rest Time In Secs",onChange:this.updateInput}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{for:"secsofmed",style:{color:"black"}},"Rest Time(in secs) After Each Exercise For Medium"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"number",min:"1",max:"100",className:"form-check-input2",style:{height:"35px",color:"black"},id:"secsofhard",placeholder:"Rest Time In Secs",onChange:this.updateInput}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{for:"secsofeasy",style:{color:"black"}},"Rest Time(in secs) After Each Exercise For Hard"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"number",min:"1",max:"100",className:"form-check-input2",style:{height:"35px",color:"black"},id:"secsofhard",placeholder:"Rest Time In Secs",onChange:this.updateInput})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",style:{color:"white"}},"Submit"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("footer",null,r.a.createElement("div",{className:"footer-bottom text-center",id:"foot",style:{color:"white"}},"Copyright \xa9 2020 WorkIt By Zotako Corp")))}}]),n}(r.a.Component),v=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{path:"/",exact:!0,component:f}),r.a.createElement(c.a,{path:"/WorkIt",exact:!0,component:f}),r.a.createElement(c.a,{path:"/settings",exact:!0,component:g}))},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/WorkIt",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/WorkIt","/service-worker.js");k?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(t,e)}))}}()},24:function(e,t,n){},53:function(e,t,n){e.exports=n(107)}},[[53,1,2]]]);
//# sourceMappingURL=main.fd54cd71.chunk.js.map