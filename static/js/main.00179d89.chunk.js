(this["webpackJsonpinovelli-notification-util"]=this["webpackJsonpinovelli-notification-util"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),i=a(9),c=a(22),s=a(16),u=a(32),m=a(33),p=a(37),f=a(152),h=a(153),d=a(139),v=a(140),E=a(38),g=a(135),b=a(57),w=a(154),y=a(141),C=a(142),O=a(155),k=a(148),x=a(145),V=a(157),A=a(146),j=a(4),L=a(68),S=a.n(L),D=a(69),H=a.n(D),W=a(71),B=a.n(W),I=a(70),N=a.n(I),T=a(72),M=a(151),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={themeType:window.localStorage.themeType||"light",setTheme:function(e){"light"!==e&&"dark"!==e||(a.setState({themeType:e}),window.localStorage.setItem("themeType",e))}},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=Object(T.a)({palette:{type:this.state.themeType,primary:{main:"#c21414"}}});return o.a.createElement(M.a,{theme:e},this.props.children(this.state))}}]),t}(o.a.Component),Z=a(67),F=a.n(Z),R=a(150),U=a(131),z=a(132),G=a(133),J=a(103),$=a(134),q=a(136),K=a(137),Q=a(63),X=a.n(Q),Y=a(62),_=a.n(Y),ee=a(64),te=a.n(ee),ae=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(R.a,{open:this.props.open,onClose:this.props.onClose},o.a.createElement(U.a,null,"About"),o.a.createElement(z.a,null,o.a.createElement(E.a,{variant:"h6"},"About the Tool"),o.a.createElement(E.a,{variant:"caption",gutterBottom:!0},"This is a simple application to assist in calculating the configuration values to send to your Inovelli v2 ZWave Light switches. The values calculated by this tool can be used by any compatible ZWave controller. See your controller documentation for information on where to use the values produced by this tool.",o.a.createElement("br",null),o.a.createElement("br",null)),o.a.createElement(E.a,{variant:"h6"},"Compatible Switches"),o.a.createElement(G.a,{dense:!0},o.a.createElement(J.a,null,o.a.createElement($.a,{primary:"Inovelli LZW30",secondary:"On/Off Switch"})),o.a.createElement(J.a,null,o.a.createElement($.a,{primary:"Inovelli LZW31",secondary:"Dimmer Switch"})),o.a.createElement(J.a,null,o.a.createElement($.a,{primary:"Inovelli LZW30-SN-1",secondary:"On/Off Switch + Scenes"})),o.a.createElement(J.a,null,o.a.createElement($.a,{primary:"Inovelli  LZW31-SN-1",secondary:"Dimmer Switch + Scenes"}))),o.a.createElement(E.a,{variant:"h6"},"Credits"),o.a.createElement(E.a,null,"Written By @nathanfiscus"),o.a.createElement(g.a,{component:"a",href:"https://www.github.com/nathanfiscus/inovelli-notification-calc"},o.a.createElement(_.a,null)),o.a.createElement(g.a,{component:"a",href:"https://www.twitter.com/nathanfiscus"},o.a.createElement(X.a,null)),o.a.createElement(g.a,{component:"a",href:"https://www.linkedin.com/in/nathanfiscus"},o.a.createElement(te.a,null))),o.a.createElement(q.a,null,o.a.createElement(K.a,{onClick:this.props.onClose},"Close")))}}]),t}(o.a.Component),ne=a(65),oe=a.n(ne);function re(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function le(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?re(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):re(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ie=new(a(90))({colors:["orangered","yellow","green","cyan","blue","violet","red"],steps:256,model:"rgb"}).toArray("hex"),ce=function(e){switch(e){case 255:return"Forever";case 1:return"1 second";default:return e>59?"".concat(Math.floor(e/60)," minutes ").concat(e%60," seconds"):"".concat(e," seconds")}};function se(e){var t=e.children,a=e.open,n=e.value,r=o.a.useRef(null);return o.a.useEffect((function(){r.current&&r.current.update()})),o.a.createElement(f.a,{PopperProps:{popperRef:r},open:a,enterTouchDelay:0,placement:"top",title:ce(n)},t)}var ue=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).setValue=function(e){return function(t,n){a.setState(Object(i.a)({},e,"effect"!==e?n:t.target.value),(function(){a.setState((function(e){return{value:parseInt(e.color)+256*e.level+65536*e.duration+16777216*e.effect}}))}))}},a.openAboutDialog=function(){a.setState({aboutDialogOpen:!0})},a.closeAboutDialog=function(){a.setState({aboutDialogOpen:!1})},a.handleCopy=function(){a.configValue.current&&(a.configValue.current.select(),document.execCommand("copy"))},a.durationFormater=function(e){switch(e){case 255:return"Forever";case 1:return"1 second";default:return e>59?"".concat(Math.floor(e/60)).concat(e%60," seconds"):"".concat(e," seconds")}},a.state={color:1,duration:255,level:10,effect:"1",value:"33488897",aboutDialogOpen:!1},a.configValue=o.a.createRef(),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t="",a={};switch(a.opacity=this.state.level/10,this.state.effect){case"2":t+=" ".concat(this.props.classes.fastBlink);break;case"3":t+=" ".concat(this.props.classes.slowBlink);break;case"4":t+=" ".concat(this.props.classes.strobe)}return this.state.duration,t+=" ".concat(this.props.classes.forever),o.a.createElement(P,null,(function(n){var r=n.setTheme,l=n.themeType;return o.a.createElement("div",{className:e.props.classes.root},o.a.createElement(h.a,null),o.a.createElement(d.a,{position:"static"},o.a.createElement(v.a,null,o.a.createElement(E.a,{variant:"h6",style:{flexGrow:"1"}},"Inovelli LED Notification Calculator"),o.a.createElement("div",{style:{flexShrink:"0",flexGrow:"0"}},o.a.createElement(f.a,{title:"Light\\Dark Theme"},o.a.createElement(g.a,{color:"inherit",onClick:function(){r("dark"===l?"light":"dark")}},o.a.createElement(b.a,null,"light"===l?o.a.createElement("svg",{viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M11,18H13V15.87C14.73,15.43 16,13.86 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13.86 9.27,15.43 11,15.87V18Z"})):o.a.createElement("svg",{viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z"}))))),o.a.createElement(f.a,{title:"About"},o.a.createElement(g.a,{color:"inherit",onClick:e.openAboutDialog},o.a.createElement(F.a,null)))))),o.a.createElement("div",{className:e.props.classes.switchWrapper},o.a.createElement("div",{className:e.props.classes.switchContainer},o.a.createElement("img",{alt:"Inovelli-LZW30-SN",src:oe.a}),o.a.createElement("span",{id:"frosted-glass-notification-led",className:e.props.classes.notificationLED,style:{opacity:"0.25",zIndex:3,backgroundColor:"#ffffff"}}),o.a.createElement("span",{id:"notification-led",className:e.props.classes.notificationLED+t,style:le({backgroundColor:ie[parseInt(e.state.color)],color:ie[parseInt(e.state.color)],zIndex:"2"},a)}),o.a.createElement("span",{id:"notification-led",className:e.props.classes.notificationLED})),o.a.createElement("div",{className:e.props.classes.optionsContainer},o.a.createElement(E.a,{variant:"h4",gutterBottom:!0},"Options"),o.a.createElement(E.a,{gutterBottom:!0},"Color"),o.a.createElement("div",{className:e.props.classes.colorHelper}),o.a.createElement(w.a,{defaultValue:1,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,min:1,max:255,value:e.state.color,onChange:e.setValue("color")}),o.a.createElement(E.a,{gutterBottom:!0},"Brightness Level"),o.a.createElement(y.a,{container:!0,spacing:2},o.a.createElement(y.a,{item:!0},o.a.createElement(S.a,null)),o.a.createElement(y.a,{item:!0,xs:!0},o.a.createElement(w.a,{value:e.state.level,valueLabelDisplay:"auto",min:0,max:10,onChange:e.setValue("level")})),o.a.createElement(y.a,{item:!0},o.a.createElement(H.a,null))),o.a.createElement(E.a,{gutterBottom:!0},"Duration"),o.a.createElement(y.a,{container:!0,spacing:2},o.a.createElement(y.a,{item:!0},o.a.createElement(N.a,null)),o.a.createElement(y.a,{item:!0,xs:!0},o.a.createElement(w.a,{value:e.state.duration,valueLabelDisplay:"auto",valueLabelFormat:e.durationFormater,marks:[5,10,15,20,30,45,60,120,180,240,255],min:1,max:255,onChange:e.setValue("duration"),ValueLabelComponent:se})),o.a.createElement(y.a,{item:!0},o.a.createElement(B.a,null))),o.a.createElement(C.a,{fullWidth:!0,margin:"normal"},o.a.createElement(O.a,null,"Effect"),o.a.createElement(k.a,{value:e.state.effect,onChange:e.setValue("effect")},o.a.createElement(x.a,{value:"1"},"Solid"),o.a.createElement(x.a,{value:"2"},"Fast Blink"),o.a.createElement(x.a,{value:"3"},"Slow Blink"),o.a.createElement(x.a,{value:"4"},"Pulse"))),o.a.createElement(V.a,{style:{marginTop:"60px"},value:e.state.value,readOnly:!0,label:"Configuration Value",fullWidth:!0,margin:"normal",variant:"outlined",inputRef:e.configValue,InputProps:{endAdornment:o.a.createElement(A.a,{position:"end"},o.a.createElement(f.a,{title:"Copy to Clipboard"},o.a.createElement(g.a,{edge:"end",onClick:e.handleCopy},o.a.createElement(b.a,null,o.a.createElement("svg",{viewBox:"0 0 24 24"},o.a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))))))}}))),o.a.createElement(ae,{open:e.state.aboutDialogOpen,onClose:e.closeAboutDialog}))}))}}]),t}(o.a.Component),me=Object(j.a)((function(e){return{"@global":{"@keyframes pulse":{"50%":{background:"#CCCCCC",boxShadow:"0px 0px 0px 0px"}},"@keyframes blink":{"50%":{opacity:"0.0"}}},switchWrapper:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center","&>*":{minWidth:"400px"}},switchContainer:{position:"relative"},notificationLED:{position:"absolute",width:"7px",height:"39px",backgroundColor:"#CCCCCC",bottom:"162px",right:"129px",boxShadow:"0px 0px 5px 0px"},colorHelper:{height:"10px",width:"100%",background:"linear-gradient(to right, orangered, yellow, green, cyan, blue, violet,red)"},forever:{animationIterationCount:"infinite"},strobe:{animationDuration:"1s",animationName:"pulse"},fastBlink:{animationDuration:"0.80s",animationName:"blink",animationTimingFunction:"step-start"},slowBlink:{animationDuration:"2s",animationName:"blink",animationTimingFunction:"step-start"},credits:{display:"flex",position:"absolute",bottom:"0",right:"0",left:"0",padding:"15px",justifyContent:"space-between"},optionsContainer:{padding:e.spacing(0,3)}}}))(ue),pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(me,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/inovelli-notification-calc",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/inovelli-notification-calc","/service-worker.js");pe?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):fe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):fe(t,e)}))}}()},65:function(e,t,a){e.exports=a.p+"static/media/Inovelli-LZW30-SN.b878040d.gif"},80:function(e,t,a){e.exports=a(100)}},[[80,1,2]]]);
//# sourceMappingURL=main.00179d89.chunk.js.map