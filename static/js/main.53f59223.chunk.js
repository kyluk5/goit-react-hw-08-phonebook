(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{52:function(e,t,n){e.exports=n(91)},61:function(e,t,n){},62:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),u=n.n(c),o=n(5),l=(n(61),n(9)),s="/",i="/login",m="/register",b="/contacts",f=(n(62),n(16)),p=n.n(f),h=n(24),d=n(14),g=n.n(d),O=n(1),j=Object(O.b)("@auth/registerReguest"),E=Object(O.b)("@auth/registerSuccess"),v=Object(O.b)("@auth/registerError"),y=Object(O.b)("@auth/loginReguest"),k=Object(O.b)("@auth/loginSuccess"),N=Object(O.b)("@auth/loginError"),w=Object(O.b)("@auth/logoutReguest"),C=Object(O.b)("@auth/logoutSuccess"),x=Object(O.b)("@auth/logoutError"),R=Object(O.b)("@auth/currentuserReguest"),S=Object(O.b)("@auth/currentuserSuccess"),F=Object(O.b)("@auth/currentuserError");g.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var I=function(){var e=Object(o.d)((function(e){return e.auth.user.email})),t=Object(o.c)(),n=Object(o.d)((function(e){return e.auth.token}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,e),r.a.createElement("button",{className:"log-out",onClick:function(){t(function(e){return function(){var t=Object(h.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(w()),t.next=3,g()({url:"/users/logout",method:"post",headers:{Authorization:"Bearer ".concat(e)}}).then((function(){return n(C())})).catch((function(e){var t=e.message;return n(x(t))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n))}},"Log Out"))};I.defaultProps={};var _=I,A=(n(81),function(){return r.a.createElement("div",{className:"auth-nav"},r.a.createElement(l.b,{to:i,exact:!0,className:"auth-nav-link"},"Login"),r.a.createElement(l.b,{to:m,exact:!0,className:"auth-nav-link"},"Registration"))}),B=function(){var e=Object(o.d)((function(e){return e.auth.token}));return r.a.createElement("header",null,r.a.createElement("nav",{className:"main-nav"},e?r.a.createElement(l.b,{to:b,exact:!0,className:"nav-link"},"Contacts"):r.a.createElement(l.b,{to:s,exact:!0,className:"nav-link"},"Home"),e?r.a.createElement(_,null):r.a.createElement(A,null)))};B.defaultProps={};var L=B,z=(n(83),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"home-page"},"Welkome to Phone Book"))}),P=n(3),V=n(20),D=n(19),U=(n(84),{email:"",password:""}),J=function(){var e=Object(a.useState)(U),t=Object(D.a)(e,2),n=t[0],c=t[1],u=Object(o.c)(),s=function(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(V.a)(Object(V.a)({},e),{},Object(P.a)({},n,a))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"log-in-title"},"Log In"),r.a.createElement("form",{className:"log-in-form",onSubmit:function(e){var t;e.preventDefault(),u((t=n,function(){var e=Object(h.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(y()),e.next=3,g.a.post("/users/login",t).then((function(e){return n(k(e.data))})).catch((function(e){var t=e.message;return n(N(t))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),c(U)}},r.a.createElement("input",{type:"email",name:"email",placeholder:"email",className:"log-in-input",value:n.email,onChange:s}),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",className:"log-in-input",value:n.password,onChange:s}),r.a.createElement("button",{className:"log-in-button"},"Sign In"),r.a.createElement("p",{className:"log-in"},"If you dont have account, please folow"," ",r.a.createElement(l.b,{to:m},"Registration"))))};J.defaultProps={};var H=J,M=(n(85),{name:"",email:"",password:""}),W=function(){var e=Object(a.useState)(M),t=Object(D.a)(e,2),n=t[0],c=t[1],u=Object(o.c)(),s=function(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(V.a)(Object(V.a)({},e),{},Object(P.a)({},n,a))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"registration-title"},"Registration"),r.a.createElement("form",{className:"registration-form",onSubmit:function(e){var t;e.preventDefault(),u((t=n,function(){var e=Object(h.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(j()),e.next=3,g.a.post("/users/signup",t).then((function(e){return n(E(e.data))})).catch((function(e){var t=e.message;return n(v(t))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),c(M)}},r.a.createElement("input",{type:"name",name:"name",placeholder:"name",className:"reginstration-input",onChange:s,value:n.name}),r.a.createElement("input",{type:"email",name:"email",placeholder:"email",className:"reginstration-input",onChange:s,value:n.email}),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",className:"reginstration-input",onChange:s,value:n.password}),r.a.createElement("button",{className:"registaration-button"},"Registration"),r.a.createElement("p",{className:"log-in"},"If you alredy have account, please"," ",r.a.createElement(l.b,{to:i},"Log In"))))};W.defaultProps={};var q=W,G=n(4),K=n(28),Q=function(e){var t=e.component,n=Object(K.a)(e,["component"]),a=Object(o.d)((function(e){return e.auth.token}));return r.a.createElement(G.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(G.a,{to:i})}}))},T=function(e){var t=e.component,n=e.restricted,a=Object(K.a)(e,["component","restricted"]),c=Object(o.d)((function(e){return e.auth.token}));return r.a.createElement(G.b,Object.assign({},a,{render:function(e){return c&&n?r.a.createElement(G.a,{to:b}):r.a.createElement(t,e)}}))},X=n(45),Y=n(46),Z=n(50),$=n(49),ee=Object(O.b)("@contacts/getReguest"),te=Object(O.b)("@contacts/getReguestSeccess"),ne=Object(O.b)("@contacts/getReguestError"),ae=Object(O.b)("@contacts/addReguest"),re=Object(O.b)("@contacts/addReguestSeccess"),ce=Object(O.b)("@contacts/addReguestError"),ue=Object(O.b)("@contacts/deleteReguest"),oe=Object(O.b)("@contacts/deleteReguestSeccess"),le=Object(O.b)("@contacts/deleteReguestError"),se=Object(O.b)("@contacts/value",(function(e){return{payload:e.target.value}})),ie=n(92),me=(n(86),function(e){var t=e.submitForm,n=e.name,c=e.contactInputValue,u=e.number,o=Object(a.useState)(!1),l=Object(D.a)(o,2),s=l[0],i=l[1];return Object(a.useEffect)((function(){i(!0)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.a,{in:s,classNames:"title",timeout:500,mountOnEnter:!0},r.a.createElement("h2",{className:"title"},"Phonebook")),r.a.createElement("form",{className:"form",onSubmit:t},r.a.createElement("span",null,"Name"),r.a.createElement("br",null),r.a.createElement("input",{className:"input_name",type:"text",name:"name",value:n,onChange:c}),r.a.createElement("br",null),r.a.createElement("span",null,"Number"),r.a.createElement("br",null),r.a.createElement("input",{className:"input_number",type:"text",name:"number",value:u,onChange:c}),r.a.createElement("br",null),r.a.createElement("button",{className:"submit_btn",type:"submit"},"Add contact")))}),be=n(93),fe=(n(87),n(13)),pe=function(e){return e.contacts.items},he=function(e){return e.contacts.filter},de=function(e){return e.contacts.items},ge=Object(fe.a)([pe,he],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),Oe={inputValue:se,deleteContact:function(e){return function(t,n){var a=n().auth.token;t(ue()),g()({url:"/contacts/".concat(e),method:"delete",headers:{Authorization:"Bearer ".concat(a)}}).then((function(){t(oe(e))})).catch((function(e){var n=e.message;return t(le(n))}))}}},je=Object(o.b)((function(e){return{filter:he(e),contacts:de(e),result:ge(e)}}),Oe)((function(e){var t=e.inputValue,n=e.deleteContact,a=e.result;return r.a.createElement(r.a.Fragment,null,a.length>0&&r.a.createElement("div",{className:"search-container"},r.a.createElement("span",null,"Find contacts by name"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",onChange:t})),r.a.createElement("div",{className:"search_info"},r.a.createElement(be.a,{component:"ul",className:"contact_list"},a.map((function(e){return r.a.createElement(ie.a,{key:e.id,classNames:"list__item",timeout:800},r.a.createElement("li",{className:"contact_item",key:e.id},e.name," : ",e.number,r.a.createElement("button",{className:"delete_btn",type:"button",onClick:function(){return n(e.id)}},"Delete")))})))))})),Ee=(n(88),function(e){Object(Z.a)(n,e);var t=Object($.a)(n);function n(){var e;Object(X.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",value:!1},e.contactInputValue=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(P.a)({},a,r))},e.submitForm=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number,c=n.value;e.props.contacts.find((function(t){return t.name===e.state.name}))?e.toggle(c):(e.props.addContact(a,r),e.setState({name:"",number:""}))},e.toggle=function(t){e.setState({value:!t})},e}return Object(Y.a)(n,[{key:"componentDidMount",value:function(){this.props.getCurrentUser(),this.props.getContact()}},{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.number,c=t.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.a,{in:c,classNames:"alert",timeout:500,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("button",{className:"alert",onClick:function(){e.toggle(!0)}},"".concat(n," alredy exist"))),r.a.createElement(me,{submitForm:this.submitForm,name:n,contactInputValue:this.contactInputValue,number:a}),r.a.createElement(je,null))}}]),n}(a.Component)),ve={addContact:function(e,t){return function(n,a){var r=a().auth.token;n(ae()),g()({url:"/contacts",method:"post",headers:{Authorization:"Bearer ".concat(r)},data:{name:e,number:t}}).then((function(e){n(re(e.data))})).catch((function(e){var t=e.message;return n(ce(t))}))}},getCurrentUser:function(){return function(){var e=Object(h.a)(p.a.mark((function e(t,n){var a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(),r=a.auth.token){e.next=3;break}return e.abrupt("return");case 3:return t(R()),e.next=6,g()({url:"/users/current",method:"get",headers:{Authorization:"Bearer ".concat(r)}}).then((function(e){var n=e.data;return t(S(n))})).catch((function(e){var n=e.message;return t(F(n))}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},getContact:function(){return function(e,t){var n=t().auth.token;e(ee()),g()({url:"/contacts",method:"get",headers:{Authorization:"Bearer ".concat(n)}}).then((function(t){console.log(t.data),e(te(t.data))})).catch((function(t){var n=t.message;return e(ne(n))}))}}},ye=Object(o.b)((function(e){return{contacts:pe(e)}}),ve)(Ee);var ke,Ne,we,Ce,xe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement(G.d,null,r.a.createElement(T,{exact:!0,path:s,component:z,restricted:!0}),r.a.createElement(T,{path:i,component:H,restricted:!0}),r.a.createElement(T,{path:m,component:q,restricted:!0}),r.a.createElement(Q,{path:b,component:ye})))},Re=n(27),Se=n(7),Fe=Object(O.c)([],(ke={},Object(P.a)(ke,te,(function(e,t){return t.payload})),Object(P.a)(ke,re,(function(e,t){var n=t.payload;return[].concat(Object(Re.a)(e),[n])})),Object(P.a)(ke,oe,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Object(P.a)(ke,C,(function(){return[]})),ke)),Ie=Object(O.c)("",Object(P.a)({},se,(function(e,t){return t.payload}))),_e=Object(Se.c)({items:Fe,filter:Ie}),Ae={name:null,email:null},Be=Object(O.c)(Ae,(Ne={},Object(P.a)(Ne,E,(function(e,t){return t.payload.user})),Object(P.a)(Ne,k,(function(e,t){return t.payload.user})),Object(P.a)(Ne,S,(function(e,t){return t.payload})),Object(P.a)(Ne,C,(function(){return Ae})),Ne)),Le=Object(O.c)(null,(we={},Object(P.a)(we,E,(function(e,t){return t.payload.token})),Object(P.a)(we,k,(function(e,t){return t.payload.token})),Object(P.a)(we,C,(function(){return null})),we)),ze=Object(O.c)(null,(Ce={},Object(P.a)(Ce,v,(function(e,t){return t.payload})),Object(P.a)(Ce,N,(function(e,t){return t.payload})),Object(P.a)(Ce,x,(function(e,t){return t.payload})),Object(P.a)(Ce,F,(function(e,t){return t.payload})),Ce)),Pe=Object(Se.c)({user:Be,token:Le,error:ze}),Ve=n(17),De=n(47),Ue={key:"token",storage:n.n(De).a,whitelist:["token"]},Je=Object(O.d)({serializableCheck:{ignoredActions:[Ve.a,Ve.f,Ve.b,Ve.c,Ve.d,Ve.e]}}),He=Object(O.a)({reducer:{contacts:_e,auth:Object(Ve.g)(Ue,Pe)},middleware:Object(Re.a)(Je)}),Me=Object(Ve.h)(He),We=He,qe=n(48);u.a.render(r.a.createElement(o.a,{store:We},r.a.createElement(qe.a,{loading:null,persistor:Me},r.a.createElement(l.a,null,r.a.createElement(xe,null)))),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.53f59223.chunk.js.map