(this["webpackJsonpHal-O_World-client"]=this["webpackJsonpHal-O_World-client"]||[]).push([[0],{118:function(e,t,n){},119:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(41),r=n.n(c),i=(n(96),n(97),n(22)),o=n(8),l=n.n(o),d=n(17),j=n(6),u=n(0);var b=function(){return Object(s.useEffect)((function(){!function(e,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://widget.kommunicate.io/v2/kommunicate.app",document.getElementsByTagName("head")[0].appendChild(n),window.kommunicate=t,t._globals={appId:"275e2baffef3751676db727d1649779d8",popupWidget:!0,automaticChatOpenOnNavigation:!0}}(document,window.kommunicate||{})}),[]),Object(u.jsx)("div",{})},p=n(13),h=Object(s.createContext)();function m(e){var t=Object(s.useState)([]),n=Object(j.a)(t,2),a=n[0],c=n[1];return Object(u.jsx)(h.Provider,{value:{user:a,setUser:c},children:e.children})}var x="http://localhost:5005/api",O=n(14),f=n.n(O);var v=function(e){var t=Object(s.useContext)(h).user;return Object(u.jsxs)("div",{children:[Object(u.jsx)(p.b,{to:"/",className:"nav-link",color:"inherit",children:"Home"}),Object(u.jsx)(p.b,{to:"/missions",className:"nav-link",color:"inherit",children:"Missions"}),Object(u.jsx)(p.b,{to:"/about",className:"nav-link",color:"inherit",children:"About us"}),t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p.b,{className:"nav-link",to:"/profile",children:"My Profile"}),Object(u.jsx)("button",{onClick:e.onLogout,children:"Logout"})]}):Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(p.b,{to:"/signin",className:"nav-link",color:"inherit",children:"Take me in"})})]})},g=n(11),y=n(158);n(118);var w=function(e){var t=Object(s.useState)(null),n=Object(j.a)(t,2),a=n[0],c=n[1];return Object(g.g)().userId,e.applyMission,Object(s.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(x,"/profile"),{withCredentials:!0});case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a?Object(u.jsxs)("div",{className:"profile",children:[Object(u.jsxs)("h1",{children:["Hello ",a.username]}),Object(u.jsx)("div",{class:"container mt-4 mb-4 p-3 d-flex justify-content-center",children:Object(u.jsxs)("div",{class:"card p-4",children:[Object(u.jsxs)("div",{class:" image d-flex flex-column justify-content-center align-items-center",children:[" ",Object(u.jsxs)("button",{class:"btn btn-secondary",children:[" ",Object(u.jsx)("img",{src:a.profilePic,height:"100",width:"100",alt:""})]})," ",Object(u.jsx)("span",{class:"name mt-3",children:a.username})," ",Object(u.jsx)("span",{class:"idd",children:a.email}),Object(u.jsx)("button",{children:Object(u.jsx)(p.b,{to:"/profile/".concat(a._id,"/edit"),children:"Edit my profile"})})," "]}),Object(u.jsx)("button",{children:Object(u.jsx)(p.b,{to:"/profile/mymissions",children:"My Missions"})}),Object(u.jsx)("button",{children:Object(u.jsx)(p.b,{to:"/profile/mymissions/create",children:"Create Missions"})}),Object(u.jsx)("div",{class:" d-flex mt-2",children:" "})]})}),Object(u.jsx)("img",{src:a.profilePic,alt:""})]}):Object(u.jsx)(y.a,{animation:"border",role:"status",children:Object(u.jsx)("span",{className:"visually-hidden",children:"Loading..."})})};var C=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(p.b,{to:"/solar-system",className:"nav-link",color:"inherit",children:"Explore our solar system"}),Object(u.jsx)(p.b,{className:"nav-link",to:"/apod",children:" APOD"}),Object(u.jsx)(b,{})]})};n(119);var k=function(e){var t=e.onSignIn,n=e.onRegister,a=Object(s.useState)(null),c=Object(j.a)(a,2),r=c[0],i=c[1];return Object(s.useEffect)((function(){i(document.getElementById("card"))}),[]),Object(u.jsx)("div",{className:"login-container",children:Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"inner-box",id:"card",children:[Object(u.jsxs)("div",{className:"card-front",children:[Object(u.jsx)("h2",{children:"LOGIN"}),Object(u.jsxs)("form",{onSubmit:t,children:[Object(u.jsx)("input",{type:"email",name:"email",className:"input-box",placeholder:"example@mail.com",required:!0}),Object(u.jsx)("input",{type:"password",name:"password",className:"input-box",placeholder:"Password",required:!0,FormHelperText:e.myError?e.myError:"",error:!!e.myError}),Object(u.jsx)("button",{type:"submit",className:"submit-btn",children:"Submit"})]}),Object(u.jsx)("button",{type:"button",className:"flip-btn",onClick:function(){r.style.transform="rotateY(-180deg)"},children:"I'm New Up Here"})]}),Object(u.jsxs)("div",{className:"card-back",children:[Object(u.jsx)("h2",{children:"SIGNUP"}),Object(u.jsxs)("form",{onSubmit:n,children:[Object(u.jsx)("input",{type:"text",name:"username",className:"input-box",placeholder:"Your Name",required:!0}),Object(u.jsx)("input",{type:"email",name:"email",className:"input-box",placeholder:"example@mail.com",required:!0}),Object(u.jsx)("input",{type:"password",name:"password",className:"input-box",placeholder:"Password",required:!0}),Object(u.jsx)("button",{type:"submit",className:"submit-btn",children:"Submit"})]}),Object(u.jsx)("button",{type:"button",className:"flip-btn",onClick:function(){r.style.transform="rotateY(0deg)"},children:"I'm already an Astronaut"})]})]})})})};var N=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:"this is the about ud page"})})},I=n(167),S=n(159);var M=function(e){var t=e.btnSearch;return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{class:"input-group rounded",children:[Object(u.jsx)("input",{onChange:t,type:"search",class:"form-control rounded",placeholder:"Search","aria-label":"Search","aria-describedby":"search-addon"}),Object(u.jsx)("span",{class:"input-group-text border-0",id:"search-addon",children:Object(u.jsx)("i",{class:"fas fa-search"})})]})})};var E=function(e){var t=Object(s.useContext)(h).user,n=Object(s.useState)([]),a=Object(j.a)(n,2),c=a[0],r=a[1],i=Object(s.useState)(c),o=Object(j.a)(i,2),b=o[0],m=o[1],O=Object(s.useState)([]),v=Object(j.a)(O,2),w=v[0],C=v[1];if(Object(g.f)(),Object(s.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(x,"/missions"),{withCredentials:!0});case 2:t=e.sent,r(t.data),m(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),!b.length)return Object(u.jsx)(y.a,{animation:"border",role:"status",children:Object(u.jsx)("span",{className:"visually-hidden",children:"Loading..."})});console.log("Random Mission:",w);var k=e.applyClick;return Object(u.jsxs)("div",{children:[Object(u.jsx)(M,{btnSearch:function(e){var t=e.target.value,n=c.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));m(n)}}),Object(u.jsx)("h1",{children:"Check out the space missions that we have for you!"}),Object(u.jsx)("h3",{children:"Pick your favorite one and proceed with your application."}),Object(u.jsx)("h4",{children:"Good luck astronaut!"}),Object(u.jsx)("button",{onClick:function(){var e=JSON.parse(JSON.stringify(b));e.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),m(e)},children:"A-Z"}),Object(u.jsx)("button",{onClick:function(){var e=b[Math.floor(Math.random()*b.length)];C(e)},children:"Get a random Mission"}),b.map((function(e){return Object(u.jsx)("div",{className:"container-card",children:Object(u.jsxs)(I.a,{style:{width:"18rem",height:"25rem"},children:[Object(u.jsx)(I.a.Img,{variant:"top",src:e.image}),Object(u.jsxs)(I.a.Body,{children:[t?Object(u.jsx)(p.b,{to:"/missions/".concat(e._id),children:Object(u.jsxs)(I.a.Title,{children:["Mission: ",e.name]})}):Object(u.jsxs)(p.b,{to:"/signin",children:[" ",Object(u.jsxs)(I.a.Title,{children:["Mission: ",e.name]})]}),t?Object(u.jsx)(p.b,{to:"/profile/mymissions",children:Object(u.jsx)(S.a,{onClick:function(t){k(t,e._id)},variant:"primary",children:"Apply for this!"})}):Object(u.jsx)(p.b,{to:"/signin",children:Object(u.jsx)("p",{children:"Login for application"})})]})]})})}))]})},D=n(168),L=n(172),F=n(171),B=n(164),G=n(170);var R=function(e){var t=Object(s.useState)(null),n=Object(j.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(null),i=Object(j.a)(r,2),o=i[0],b=i[1],p=Object(s.useState)(!1),h=Object(j.a)(p,2),m=h[0],O=h[1];function v(){return v=Object(d.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n={day:t.target.day.value,month:t.target.month.value}).day<10&&(n.day="0"+n.day),n.month<10&&(n.month="0"+n.month),e.next=6,f.a.post("".concat(x,"/nasa/bdaypic"),n);case 6:s=e.sent,b(s.data),O(!0);case 9:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}if(Object(s.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(x,"/nasa"));case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),!a)return Object(u.jsx)("p",{children:"LOADING"});var g=a.title,y=a.url,w=a.date,C=a.explanation;return console.log(a),console.log(m),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"APOD"}),m?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(D.a,{sx:{maxWidth:345},children:[Object(u.jsx)(F.a,{component:"img",height:"140",image:o.url,alt:""}),Object(u.jsxs)(L.a,{children:[Object(u.jsx)(G.a,{gutterBottom:!0,variant:"h5",component:"div",children:o.title}),Object(u.jsx)(G.a,{variant:"body2",color:"text.secondary",children:o.date}),Object(u.jsx)(G.a,{variant:"body2",color:"text.secondary",children:o.explanation})]})]}),Object(u.jsx)(B.a,{onClick:function(e){function t(){return(t=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(x,"/nasa"));case 2:t=e.sent,c(t.data),O(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}()},type:"submit",children:"Go Back"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(D.a,{sx:{maxWidth:345},children:[Object(u.jsx)(F.a,{component:"img",height:"140",image:y,alt:"green iguana"}),Object(u.jsxs)(L.a,{children:[Object(u.jsx)(G.a,{gutterBottom:!0,variant:"h5",component:"div",children:g}),Object(u.jsx)(G.a,{variant:"body2",color:"text.secondary",children:w}),Object(u.jsx)(G.a,{variant:"body2",color:"text.secondary",children:C})]})]}),Object(u.jsxs)("form",{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(u.jsx)("input",{name:"day",min:"1",max:"31",type:"number",placeholder:"Enter day"}),Object(u.jsx)("input",{name:"month",min:"1",max:"12",type:"number",placeholder:"Enter month"}),Object(u.jsx)(B.a,{type:"submit",children:"Submit"})]})]})]})},_=n(166),A=n(85);var P=function(){var e=Object(g.g)().missionId,t=Object(s.useState)(e),n=Object(j.a)(t,2),a=n[0];return n[1],Object(s.useEffect)((function(){var t=function(){var t=Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("".concat(x,"/missions/").concat(e),{withCredentials:!0});case 2:n=t.sent,console.log(n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),a?Object(u.jsx)("div",{children:Object(u.jsxs)(I.a,{style:{width:"18rem"},children:[Object(u.jsx)(I.a.Img,{variant:"top",src:a.image}),Object(u.jsxs)(I.a.Body,{children:[Object(u.jsxs)(I.a.Title,{children:["Mission: ",a.name]}),Object(u.jsxs)(I.a.Text,{children:[" ",a.description]})]}),Object(u.jsxs)(_.a,{className:"list-group-flush",children:[Object(u.jsxs)(A.a,{children:["Duration: ",a.duration," months"]}),Object(u.jsxs)(A.a,{children:["Difficulty: ",a.difficulty]}),Object(u.jsx)(A.a,{children:"Rating: add reviews rating"})]}),Object(u.jsx)(I.a.Body,{children:Object(u.jsxs)(p.b,{to:"/profile",children:[Object(u.jsx)(S.a,{variant:"outline-success",children:"Apply"})," "]})})]})}):Object(u.jsx)(y.a,{animation:"border",role:"status",children:Object(u.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},T=n(165),U=n(83);var H=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(U.a,{name:"difficulty",placeholder:"Select mission's difficulty",options:[{value:"easypeasy",label:"Easy-Peasy"},{value:"outofthisworld",label:"Out of this world madness"},{value:"childsplay",label:"Childplay"},{value:"mediumrare",label:"Medium-Rare beef"},{value:"impossibro",label:"Stratospheric-Impossibro"},{value:"ultranerd",label:"Ultra-Nerd level"}]})})};var W=function(e){var t=Object(g.g)().missionId,n=Object(s.useState)(t),a=Object(j.a)(n,2),c=a[0],r=a[1],i=e.editButton;return Object(s.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(x,"/missions/").concat(t),{withCredentials:!0});case 2:n=e.sent,r(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),c?Object(u.jsx)("div",{className:"test",children:Object(u.jsxs)(T.a,{onSubmit:function(e){i(e,c._id)},children:[Object(u.jsxs)(T.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(u.jsx)(T.a.Label,{children:"Mission's name:"}),Object(u.jsx)(T.a.Control,{name:"name",type:"text",placeholder:c.name})]}),Object(u.jsxs)(T.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(u.jsx)(T.a.Label,{children:"Mission's description:"}),Object(u.jsx)(T.a.Control,{name:"description",as:"textarea",placeholder:"Insert mission's description",rows:2})]}),Object(u.jsxs)(T.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(u.jsx)(T.a.Label,{children:"Mission's image:"}),Object(u.jsx)(T.a.Control,{type:"file",name:"myImage",accept:"image/png, image/jpg"})]}),Object(u.jsxs)(T.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(u.jsx)(T.a.Label,{children:"Mission's duration:"}),Object(u.jsx)(T.a.Control,{name:"duration",type:"text",placeholder:c.duration})]}),Object(u.jsxs)(T.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(u.jsx)(T.a.Label,{children:"Mission's difficulty:"}),Object(u.jsx)(H,{})]}),Object(u.jsx)(S.a,{type:"submit",variant:"outline-success",children:"Save changes"})," "]})}):Object(u.jsx)(y.a,{animation:"border",role:"status",children:Object(u.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},q=n(81),z=n(82),J=n(86),Y=n(84),V=n(63),X=(n(137),function(e){Object(J.a)(n,e);var t=Object(Y.a)(n);function n(){var e;Object(q.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={num:60,vw:Math.max(document.documentElement.clientWidth,window.innerWidth||0),vh:Math.max(document.documentElement.clientHeight,window.innerHeight||0)},e.starryNight=function(){Object(V.a)({targets:["#sky .star"],opacity:[{duration:700,value:"0"},{duration:700,value:"1"}],easing:"linear",loop:!0,delay:function(e,t){return 50*t}})},e.shootingStars=function(){Object(V.a)({targets:["#shootingstars .wish"],easing:"linear",loop:!0,delay:function(e,t){return 1e3*t},opacity:[{duration:700,value:"1"}],width:[{value:"150px"},{value:"0px"}],translateX:350})},e.randomRadius=function(){return.7*Math.random()+.6},e.getRandomX=function(){return Math.floor(Math.random()*Math.floor(e.state.vw)).toString()},e.getRandomY=function(){return Math.floor(Math.random()*Math.floor(e.state.vh)).toString()},e}return Object(z.a)(n,[{key:"componentDidMount",value:function(){this.starryNight(),this.shootingStars()}},{key:"render",value:function(){var e=this,t=this.state.num;return Object(u.jsxs)("div",{id:"App",children:[Object(u.jsx)("svg",{id:"sky",children:Object(i.a)(Array(t)).map((function(t,n){return Object(u.jsx)("circle",{cx:e.getRandomX(),cy:e.getRandomY(),r:e.randomRadius(),stroke:"none",strokeWidth:"0",fill:"white",className:"star"},n)}))}),Object(u.jsx)("div",{id:"shootingstars",children:Object(i.a)(Array(60)).map((function(t,n){return Object(u.jsx)("div",{className:"wish",style:{left:"".concat(e.getRandomY(),"px"),top:"".concat(e.getRandomX(),"px")}},n)}))})]})}}]),n}(a.a.Component)),Z=X;var K=function(e){var t=Object(s.useState)(null),n=Object(j.a)(t,2),a=n[0],c=n[1],r=(Object(g.g)().userId,e.btnEdit);return Object(s.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(x,"/profile"),{withCredentials:!0});case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a?Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Edit Profile"}),Object(u.jsxs)("form",{onSubmit:function(e){r(e,a._id)},children:[Object(u.jsx)("input",{defaultValue:a.username,name:"username",type:"text",placeholder:"Enter a username"}),Object(u.jsx)("input",{defaultValue:a.email,name:"email",type:"text",placeholder:"Enter your email"}),Object(u.jsx)("input",{defaultValue:"Enter your password",name:"password",type:"text",placeholder:"Enter your password"}),Object(u.jsx)("input",{type:"file",name:"myImage",accept:"image/png, image/jpg"}),Object(u.jsx)("button",{type:"submit",children:"Edit"})]})]}):Object(u.jsx)(y.a,{animation:"border",role:"status",children:Object(u.jsx)("span",{className:"visually-hidden",children:"Loading..."})})};var Q=function(e){var t=Object(s.useState)([]),n=Object(j.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)([]),i=Object(j.a)(r,2),o=i[0],b=i[1];Object(s.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(x,"/profile/mymissions"),{withCredentials:!0});case 2:t=e.sent,c(t.data.MissionsAdded),b(t.data.MissionsCreated);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log("craetedMission",o),console.log("addedMission",a);var h=e.deleteButton;return console.log(e.missionCreated),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Missions you've applied for:"}),a.map((function(e){return Object(u.jsxs)(I.a,{style:{width:"18rem"},children:[Object(u.jsx)(I.a.Img,{variant:"top",src:e.image}),Object(u.jsxs)(I.a.Body,{children:[Object(u.jsx)(I.a.Title,{children:e.name}),Object(u.jsx)(I.a.Text,{children:e.description})]}),Object(u.jsxs)(_.a,{className:"list-group-flush",children:[Object(u.jsxs)(A.a,{children:[" ",e.duration]}),Object(u.jsxs)(A.a,{children:[" ",e.difficulty]}),Object(u.jsx)(A.a,{children:"Reviews"})]}),Object(u.jsxs)(p.b,{to:"/missions/".concat(e._id,"/edit"),children:[Object(u.jsx)(S.a,{variant:"outline-success",children:"Edit mission"})," "]}),Object(u.jsx)(S.a,{onClick:function(){h(e._id)},type:"submit",variant:"outline-success",children:"Delete Mission"})," ",Object(u.jsxs)(p.b,{to:"/missions/".concat(e._id,"/review"),children:[Object(u.jsx)(S.a,{variant:"outline-success",children:"Review mission"})," "]})]})})),o.length?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:"Missions you've created:"}),o.map((function(e){return Object(u.jsxs)(I.a,{style:{width:"18rem"},children:[Object(u.jsx)(I.a.Img,{variant:"top",src:e.image}),Object(u.jsxs)(I.a.Body,{children:[Object(u.jsx)(I.a.Title,{children:e.name}),Object(u.jsx)(I.a.Text,{children:e.description})]}),Object(u.jsxs)(_.a,{className:"list-group-flush",children:[Object(u.jsxs)(A.a,{children:[" ",e.duration]}),Object(u.jsxs)(A.a,{children:[" ",e.difficulty]}),Object(u.jsx)(A.a,{children:"Reviews"})]}),Object(u.jsxs)(p.b,{to:"/missions/".concat(e._id,"/edit"),children:[Object(u.jsx)(S.a,{variant:"outline-success",children:"Edit mission"})," "]}),Object(u.jsx)(S.a,{onClick:function(){h(e._id)},type:"submit",variant:"outline-success",children:"Delete Mission"})," "]})}))]}):""]})};var $=function(e){var t=e.createButton;return Object(u.jsx)("div",{className:"test",children:Object(u.jsxs)(T.a,{onSubmit:function(e){t(e)},children:[Object(u.jsxs)(T.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(u.jsx)(T.a.Label,{children:"Mission's name:"}),Object(u.jsx)(T.a.Control,{name:"name",type:"text",placeholder:"Insert mission's name"})]}),Object(u.jsxs)(T.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:[Object(u.jsx)(T.a.Label,{children:"Mission's description:"}),Object(u.jsx)(T.a.Control,{name:"description",as:"textarea",placeholder:"Insert mission's description",rows:2})]}),Object(u.jsxs)(T.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(u.jsx)(T.a.Label,{children:"Mission's image:"}),Object(u.jsx)(T.a.Control,{type:"file",name:"myImage",accept:"image/png, image/jpg"})]}),Object(u.jsxs)(T.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(u.jsx)(T.a.Label,{children:"Mission's duration:"}),Object(u.jsx)(T.a.Control,{name:"duration",type:"text",placeholder:"Insert mission's duration"})]}),Object(u.jsxs)(T.a.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",children:[Object(u.jsx)(T.a.Label,{children:"Mission's difficulty:"}),Object(u.jsx)(H,{})]}),Object(u.jsx)(S.a,{type:"submit",variant:"outline-success",children:"Save "})," "]})})},ee=(n(138),n(23)),te=n.n(ee);var ne=function(){return Object(s.useEffect)((function(){var e=te()("body"),t=te()("#universe"),n=te()("#solar-system"),s=function(e){t.removeClass().addClass(e)};te()("#toggle-data").click((function(t){e.toggleClass("data-open data-close"),t.preventDefault()})),te()("#toggle-controls").click((function(t){e.toggleClass("controls-open controls-close"),t.preventDefault()})),te()("#data a").click((function(e){var t=te()(this).attr("class");n.removeClass().addClass(t),te()(this).parent().find("a").removeClass("active"),te()(this).addClass("active"),e.preventDefault()})),te()(".set-view").click((function(){e.toggleClass("view-3D view-2D")})),te()(".set-zoom").click((function(){e.toggleClass("zoom-large zoom-close")})),te()(".set-speed").click((function(){s("scale-stretched set-speed")})),te()(".set-size").click((function(){s("scale-s set-size")})),te()(".set-distance").click((function(){s("scale-d set-distance")})),e.removeClass("view-2D opening").addClass("view-3D").delay(2e3).queue((function(){te()(this).removeClass("hide-UI").addClass("set-speed"),te()(this).dequeue()}))}),[]),Object(u.jsx)("div",{children:Object(u.jsxs)("body",{class:"opening hide-UI view-2D zoom-large data-close controls-close",children:[Object(u.jsxs)("div",{id:"data",children:[Object(u.jsx)("a",{class:"sun",title:"sun",href:"#sunspeed",children:"Sun"}),Object(u.jsx)("a",{class:"mercury",title:"mercury",href:"#mercuryspeed",children:"Mercury"}),Object(u.jsx)("a",{class:"venus",title:"venus",href:"#venusspeed",children:"Venus"}),Object(u.jsx)("a",{class:"earth active",title:"earth",href:"#earthspeed",children:"Earth"}),Object(u.jsx)("a",{class:"mars",title:"mars",href:"#marsspeed",children:"Mars"}),Object(u.jsx)("a",{class:"jupiter",title:"jupiter",href:"#jupiterspeed",children:"Jupiter"}),Object(u.jsx)("a",{class:"saturn",title:"saturn",href:"#saturnspeed",children:"Saturn"}),Object(u.jsx)("a",{class:"uranus",title:"uranus",href:"#uranusspeed",children:"Uranus"}),Object(u.jsx)("a",{class:"neptune",title:"neptune",href:"#neptunespeed",children:"Neptune"})]}),Object(u.jsx)("div",{id:"universe",class:"scale-stretched",children:Object(u.jsx)("div",{id:"galaxy",children:Object(u.jsxs)("div",{id:"solar-system",class:"earth",children:[Object(u.jsx)("div",{id:"mercury",class:"orbit",children:Object(u.jsx)("div",{class:"pos",children:Object(u.jsx)("div",{class:"planet",children:Object(u.jsxs)("dl",{class:"infos",children:[Object(u.jsx)("dt",{children:"Mercury"}),Object(u.jsx)("dd",{children:Object(u.jsx)("span",{})})]})})})}),Object(u.jsx)("div",{id:"venus",class:"orbit",children:Object(u.jsx)("div",{class:"pos",children:Object(u.jsx)("div",{class:"planet",children:Object(u.jsxs)("dl",{class:"infos",children:[Object(u.jsx)("dt",{children:"Venus"}),Object(u.jsx)("dd",{children:Object(u.jsx)("span",{})})]})})})}),Object(u.jsx)("div",{id:"earth",class:"orbit",children:Object(u.jsxs)("div",{class:"pos",children:[Object(u.jsx)("div",{class:"orbit",children:Object(u.jsx)("div",{class:"pos",children:Object(u.jsx)("div",{class:"moon"})})}),Object(u.jsx)("div",{class:"planet",children:Object(u.jsxs)("dl",{class:"infos",children:[Object(u.jsx)("dt",{children:"Earth"}),Object(u.jsx)("dd",{children:Object(u.jsx)("span",{})})]})})]})}),Object(u.jsx)("div",{id:"mars",class:"orbit",children:Object(u.jsx)("div",{class:"pos",children:Object(u.jsx)("div",{class:"planet",children:Object(u.jsxs)("dl",{class:"infos",children:[Object(u.jsx)("dt",{children:"Mars"}),Object(u.jsx)("dd",{children:Object(u.jsx)("span",{})})]})})})}),Object(u.jsx)("div",{id:"jupiter",class:"orbit",children:Object(u.jsx)("div",{class:"pos",children:Object(u.jsx)("div",{class:"planet",children:Object(u.jsxs)("dl",{class:"infos",children:[Object(u.jsx)("dt",{children:"Jupiter"}),Object(u.jsx)("dd",{children:Object(u.jsx)("span",{})})]})})})}),Object(u.jsx)("div",{id:"saturn",class:"orbit",children:Object(u.jsx)("div",{class:"pos",children:Object(u.jsxs)("div",{class:"planet",children:[Object(u.jsx)("div",{class:"ring"}),Object(u.jsxs)("dl",{class:"infos",children:[Object(u.jsx)("dt",{children:"Saturn"}),Object(u.jsx)("dd",{children:Object(u.jsx)("span",{})})]})]})})}),Object(u.jsx)("div",{id:"uranus",class:"orbit",children:Object(u.jsx)("div",{class:"pos",children:Object(u.jsx)("div",{class:"planet",children:Object(u.jsxs)("dl",{class:"infos",children:[Object(u.jsx)("dt",{children:"Uranus"}),Object(u.jsx)("dd",{children:Object(u.jsx)("span",{})})]})})})}),Object(u.jsx)("div",{id:"neptune",class:"orbit",children:Object(u.jsx)("div",{class:"pos",children:Object(u.jsx)("div",{class:"planet",children:Object(u.jsxs)("dl",{class:"infos",children:[Object(u.jsx)("dt",{children:"Neptune"}),Object(u.jsx)("dd",{children:Object(u.jsx)("span",{})})]})})})}),Object(u.jsx)("div",{id:"sun",children:Object(u.jsxs)("dl",{class:"infos",children:[Object(u.jsx)("dt",{children:"Sun"}),Object(u.jsx)("dd",{children:Object(u.jsx)("span",{})})]})})]})})})]})})};var se=function(){var e=Object(s.useContext)(h),t=e.user,n=e.setUser,a=Object(s.useState)(null),c=Object(j.a)(a,2),r=c[0],o=c[1],b=Object(s.useState)([]),p=Object(j.a)(b,2),m=p[0],O=p[1],y=Object(s.useState)(m),I=Object(j.a)(y,2),S=I[0],M=(I[1],Object(s.useState)(m)),D=Object(j.a)(M,2),L=D[0],F=D[1],B=Object(g.f)(),G=Object(s.useState)(null),_=Object(j.a)(G,2),A=(_[0],_[1],Object(s.useState)([])),T=Object(j.a)(A,2),U=T[0],H=T[1],q=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(x,"/profile"),{withCredentials:!0});case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function z(){return(z=Object(d.a)(l.a.mark((function e(t){var s,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,s={email:t.target.email.value,password:t.target.password.value},e.next=5,f.a.post("".concat(x,"/signin"),s,{withCredentials:!0});case 5:a=e.sent,n(a.data),B("/profile"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),o(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function J(){return(J=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:t.target.username.value,email:t.target.email.value,password:t.target.password.value},e.next=4,f.a.post("".concat(x,"/signup"),n,{withCredentials:!0});case 4:B("/");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(s.useEffect)((function(){B("/")}),[t]);var Y=function(){var e=Object(d.a)(l.a.mark((function e(t,n){var s,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(s=new FormData).append("imageUrl",t.target.myImage.files[0]),e.next=5,f.a.post("".concat(x,"/upload"),s);case 5:return a=e.sent,c={name:t.target.name.value,image:a.data.image,description:t.target.description.value,duration:t.target.duration.value,difficulty:t.target.difficulty.value},e.next=9,f.a.patch("".concat(x,"/profile/mymissions/").concat(n),c,{withCredentials:!0});case 9:r=e.sent,i=S.map((function(e){return e._id==n&&(e.name=r.data.name,e.image=r.data.image,e.description=r.data.description,e.duration=r.data.duration,e.difficulty=r.data.difficulty),e})),O(i),B("/profile/mymissions");case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),V=function(){var e=Object(d.a)(l.a.mark((function e(s,a){var c,r,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),(c=new FormData).append("imageUrl",s.target.myImage.files[0]),e.next=5,f.a.post("".concat(x,"/upload"),c);case 5:return r=e.sent,i={username:s.target.username.value,profilePic:r.data.image,email:s.target.email.value,password:s.target.password.value},e.next=9,f.a.patch("".concat(x,"/profile/").concat(a,"/edit"),i,{withCredentials:!0});case 9:return o=e.sent,e.next=12,q();case 12:n(o.data),B("/profile"),console.log("is it working ?",t);case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(d.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat(x,"/profile/mymissions"),{id:n},{withCredentials:!0});case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ee=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,s,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("imageUrl",t.target.myImage.files[0]),e.next=5,f.a.post("".concat(x,"/upload"),n);case 5:return s=e.sent,console.log(t.target.duration.value),a={name:t.target.name.value,description:t.target.description.value,image:s.data.image,duration:t.target.duration.value,difficulty:t.target.difficulty.value},console.log(a),e.next=11,f.a.post("".concat(x,"/profile/mymissions/create"),a,{withCredentials:!0});case 11:c=e.sent,H([c.data].concat(Object(i.a)(U))),B("/profile/mymissions");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("".concat(x,"/profile/mymissions/").concat(t),{withCredentials:!0});case 2:n=L.filter((function(e){return e._id!==t})),F(n),B("/profile");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat(x,"/logout"),{},{withCredentials:!0});case 2:n(null);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(U),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(Z,{}),Object(u.jsx)(v,{onLogout:se}),Object(u.jsxs)(g.c,{children:[Object(u.jsx)(g.a,{path:"/signin",element:Object(u.jsx)(k,{myError:r,onSignIn:function(e){return z.apply(this,arguments)},onRegister:function(e){return J.apply(this,arguments)}})}),Object(u.jsx)(g.a,{path:"/",element:Object(u.jsx)(C,{})}),Object(u.jsx)(g.a,{path:"/about",element:Object(u.jsx)(N,{})}),Object(u.jsx)(g.a,{path:"/profile/:id/edit",element:Object(u.jsx)(K,{btnEdit:V})}),Object(u.jsx)(g.a,{path:"/apod",element:Object(u.jsx)(R,{})}),Object(u.jsx)(g.a,{path:"/missions",element:Object(u.jsx)(E,{applyClick:X,editButton:Y})}),Object(u.jsx)(g.a,{path:"/missions/:missionId",element:Object(u.jsx)(P,{})}),Object(u.jsx)(g.a,{path:"/missions/:missionId/edit",element:Object(u.jsx)(W,{editButton:Y})}),Object(u.jsx)(g.a,{path:"/about",element:Object(u.jsx)(N,{})}),Object(u.jsx)(g.a,{path:"/profile",element:Object(u.jsx)(w,{})}),Object(u.jsx)(g.a,{path:"/profile/mymissions/",element:Object(u.jsx)(Q,{missionCreated:U,deleteButton:te})}),Object(u.jsx)(g.a,{path:"/profile/mymissions/create",element:Object(u.jsx)($,{createButton:ee})}),Object(u.jsx)(g.a,{path:"/apod",element:Object(u.jsx)(R,{})}),Object(u.jsx)(g.a,{path:"/solar-system",element:Object(u.jsx)(ne,{})})]})]})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(p.a,{children:Object(u.jsx)(m,{children:Object(u.jsx)(se,{})})})}),document.getElementById("root"))},96:function(e,t,n){}},[[139,1,2]]]);
//# sourceMappingURL=main.7b6665f0.chunk.js.map