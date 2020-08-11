(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{52:function(e,t,n){e.exports=n(89)},61:function(e,t,n){},62:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),u=n.n(c),o=n(5),l=(n(61),n(10)),s="/",i="/login",m="/registration",b=(n(62),n(16)),f=n.n(b),p=n(24),d=n(14),h=n.n(d),g=n(1),O=Object(g.b)("@auth/registerReguest"),j=Object(g.b)("@auth/registerSuccess"),E=Object(g.b)("@auth/registerError"),v=Object(g.b)("@auth/loginReguest"),y=Object(g.b)("@auth/loginSuccess"),k=Object(g.b)("@auth/loginError"),N=Object(g.b)("@auth/logoutReguest"),w=Object(g.b)("@auth/logoutSuccess"),C=Object(g.b)("@auth/logoutError"),R=Object(g.b)("@auth/currentuserReguest"),S=Object(g.b)("@auth/currentuserSuccess"),x=Object(g.b)("@auth/currentuserError");h.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var F=function(){var e=Object(o.d)((function(e){return e.auth.user.email})),t=Object(o.c)(),n=Object(o.d)((function(e){return e.auth.token}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,e),r.a.createElement("button",{className:"log-out",onClick:function(){t(function(e){return function(){var t=Object(p.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(N()),t.next=3,h()({url:"/users/logout",method:"post",headers:{Authorization:"Bearer ".concat(e)}}).then((function(){return n(w())})).catch((function(e){return n(C(e))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n))}},"Log Out"))};F.defaultProps={};var I=F,_=function(){var e=Object(o.d)((function(e){return e.auth.token}));return r.a.createElement("header",null,r.a.createElement("nav",{className:"main-nav"},!e&&r.a.createElement(l.b,{to:i,className:"nav-link"},"Login"),!e&&r.a.createElement(l.b,{to:m,className:"nav-link"},"Registration"),e&&r.a.createElement(l.b,{to:s,className:"nav-link"},"Home"),e&&r.a.createElement(I,null)))};_.defaultProps={};var A=_,L=n(3),z=n(45),B=n(46),V=n(50),D=n(49),P=Object(g.b)("@contacts/getReguest"),U=Object(g.b)("@contacts/getReguestSeccess"),J=Object(g.b)("@contacts/getReguestError"),H=Object(g.b)("@contacts/addReguest"),M=Object(g.b)("@contacts/addReguestSeccess"),q=Object(g.b)("@contacts/addReguestError"),G=Object(g.b)("@contacts/deleteReguest"),K=Object(g.b)("@contacts/deleteReguestSeccess"),Q=Object(g.b)("@contacts/deleteReguestError"),T=Object(g.b)("@contacts/value",(function(e){return{payload:e.target.value}})),W=n(19),X=n(90),Y=(n(82),function(e){var t=e.submitForm,n=e.name,c=e.contactInputValue,u=e.number,o=Object(a.useState)(!1),l=Object(W.a)(o,2),s=l[0],i=l[1];return Object(a.useEffect)((function(){i(!0)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{in:s,classNames:"title",timeout:500,mountOnEnter:!0},r.a.createElement("h2",{className:"title"},"Phonebook")),r.a.createElement("form",{className:"form",onSubmit:t},r.a.createElement("span",null,"Name"),r.a.createElement("br",null),r.a.createElement("input",{className:"input_name",type:"text",name:"name",value:n,onChange:c}),r.a.createElement("br",null),r.a.createElement("span",null,"Number"),r.a.createElement("br",null),r.a.createElement("input",{className:"input_number",type:"text",name:"number",value:u,onChange:c}),r.a.createElement("br",null),r.a.createElement("button",{className:"submit_btn",type:"submit"},"Add contact")))}),Z=n(91),$=(n(83),n(13)),ee=function(e){return e.contacts.items},te=function(e){return e.contacts.filter},ne=function(e){return e.contacts.items},ae=Object($.a)([ee,te],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),re={inputValue:T,deleteContact:function(e){return function(t,n){var a=n().auth.token;t(G()),h()({url:"/contacts/".concat(e),method:"delete",headers:{Authorization:"Bearer ".concat(a)}}).then((function(){t(K(e))})).catch((function(e){return t(Q(e))}))}}},ce=Object(o.b)((function(e){return{filter:te(e),contacts:ne(e),result:ae(e)}}),re)((function(e){var t=e.inputValue,n=e.deleteContact,a=e.result;return r.a.createElement(r.a.Fragment,null,a.length>0&&r.a.createElement("div",{className:"search-container"},r.a.createElement("span",null,"Find contacts by name"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",onChange:t})),r.a.createElement("div",{className:"search_info"},r.a.createElement(Z.a,{component:"ul",className:"contact_list"},a.map((function(e){return r.a.createElement(X.a,{key:e.id,classNames:"list__item",timeout:800},r.a.createElement("li",{className:"contact_item",key:e.id},e.name," : ",e.number,r.a.createElement("button",{className:"delete_btn",type:"button",onClick:function(){return n(e.id)}},"Delete")))})))))})),ue=(n(84),function(e){Object(V.a)(n,e);var t=Object(D.a)(n);function n(){var e;Object(z.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",value:!1},e.contactInputValue=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(L.a)({},a,r))},e.submitForm=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number,c=n.value;e.props.contacts.find((function(t){return t.name===e.state.name}))?e.toggle(c):(e.props.addContact(a,r),e.setState({name:"",number:""}))},e.toggle=function(t){e.setState({value:!t})},e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){this.props.getCurrentUser(),this.props.getContact()}},{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.number,c=t.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{in:c,classNames:"alert",timeout:500,mountOnEnter:!0,unmountOnExit:!0},r.a.createElement("button",{className:"alert",onClick:function(){e.toggle(!0)}},"".concat(n," alredy exist"))),r.a.createElement(Y,{submitForm:this.submitForm,name:n,contactInputValue:this.contactInputValue,number:a}),r.a.createElement(ce,null))}}]),n}(a.Component)),oe={addContact:function(e,t){return function(n,a){var r=a().auth.token;n(H()),h()({url:"/contacts",method:"post",headers:{Authorization:"Bearer ".concat(r)},data:{name:e,number:t}}).then((function(e){n(M(e.data))})).catch((function(e){return n(q(e))}))}},getCurrentUser:function(){return function(){var e=Object(p.a)(f.a.mark((function e(t,n){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n(),r=a.auth.token){e.next=3;break}return e.abrupt("return");case 3:return t(R()),e.next=6,h()({url:"/users/current",method:"get",headers:{Authorization:"Bearer ".concat(r)}}).then((function(e){var n=e.data;return t(S(n))})).catch((function(e){return t(x(e))}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},getContact:function(){return function(e,t){var n=t().auth.token;e(P()),h()({url:"/contacts",method:"get",headers:{Authorization:"Bearer ".concat(n)}}).then((function(t){console.log(t.data),e(U(t.data))})).catch((function(t){return e(J(t))}))}}},le=Object(o.b)((function(e){return{contacts:ee(e)}}),oe)(ue),se=n(21),ie=(n(85),{email:"",password:""}),me=function(){var e=Object(a.useState)(ie),t=Object(W.a)(e,2),n=t[0],c=t[1],u=Object(o.c)(),s=function(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(se.a)(Object(se.a)({},e),{},Object(L.a)({},n,a))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"log-in-title"},"Log In"),r.a.createElement("form",{className:"log-in-form",onSubmit:function(e){var t;e.preventDefault(),u((t=n,function(){var e=Object(p.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(v()),e.next=3,h.a.post("/users/login",t).then((function(e){return n(y(e.data))})).catch((function(e){return n(k(e))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),c(ie)}},r.a.createElement("input",{type:"email",name:"email",placeholder:"email",className:"log-in-input",value:n.email,onChange:s}),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",className:"log-in-input",value:n.password,onChange:s}),r.a.createElement("button",{className:"log-in-button"},"Sign In"),r.a.createElement("p",{className:"log-in"},"If you dont have account, please folow"," ",r.a.createElement(l.b,{to:m},"Registration"))))};me.defaultProps={};var be=me,fe=(n(86),{name:"",email:"",password:""}),pe=function(){var e=Object(a.useState)(fe),t=Object(W.a)(e,2),n=t[0],c=t[1],u=Object(o.c)(),s=function(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(se.a)(Object(se.a)({},e),{},Object(L.a)({},n,a))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"registration-title"},"Registration"),r.a.createElement("form",{className:"registration-form",onSubmit:function(e){var t;e.preventDefault(),u((t=n,function(){var e=Object(p.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(O()),e.next=3,h.a.post("/users/signup",t).then((function(e){return n(j(e.data))})).catch((function(e){return n(E({error:e}))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),c(fe)}},r.a.createElement("input",{type:"name",name:"name",placeholder:"name",className:"reginstration-input",onChange:s,value:n.name}),r.a.createElement("input",{type:"email",name:"email",placeholder:"email",className:"reginstration-input",onChange:s,value:n.email}),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",className:"reginstration-input",onChange:s,value:n.password}),r.a.createElement("button",{className:"registaration-button"},"Registration"),r.a.createElement("p",{className:"log-in"},"If you alredy have account, please"," ",r.a.createElement(l.b,{to:i},"Log In"))))};pe.defaultProps={};var de=pe,he=n(4),ge=n(28),Oe=function(e){var t=e.component,n=Object(ge.a)(e,["component"]),a=Object(o.d)((function(e){return e.auth.token}));return r.a.createElement(he.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(he.a,{to:i})}}))},je=function(e){var t=e.component,n=e.restricted,a=Object(ge.a)(e,["component","restricted"]),c=Object(o.d)((function(e){return e.auth.token}));return r.a.createElement(he.b,Object.assign({},a,{render:function(e){return c&&n?r.a.createElement(he.a,{to:s}):r.a.createElement(t,e)}}))};var Ee,ve,ye,ke,Ne=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(he.d,null,r.a.createElement(Oe,{exact:!0,path:s,component:le}),r.a.createElement(je,{path:i,component:be,restricted:!0}),r.a.createElement(je,{path:m,component:de,restricted:!0})))},we=n(27),Ce=n(7),Re=Object(g.c)([],(Ee={},Object(L.a)(Ee,U,(function(e,t){return t.payload})),Object(L.a)(Ee,M,(function(e,t){var n=t.payload;return[].concat(Object(we.a)(e),[n])})),Object(L.a)(Ee,K,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Object(L.a)(Ee,w,(function(){return[]})),Ee)),Se=Object(g.c)("",Object(L.a)({},T,(function(e,t){return t.payload}))),xe=Object(Ce.c)({items:Re,filter:Se}),Fe={name:null,email:null},Ie=Object(g.c)(Fe,(ve={},Object(L.a)(ve,j,(function(e,t){return t.payload.user})),Object(L.a)(ve,y,(function(e,t){return t.payload.user})),Object(L.a)(ve,S,(function(e,t){return t.payload})),Object(L.a)(ve,w,(function(){return Fe})),ve)),_e=Object(g.c)(null,(ye={},Object(L.a)(ye,j,(function(e,t){return t.payload.token})),Object(L.a)(ye,y,(function(e,t){return t.payload.token})),Object(L.a)(ye,w,(function(){return null})),ye)),Ae=Object(g.c)(null,(ke={},Object(L.a)(ke,E,(function(e,t){return t.payload})),Object(L.a)(ke,k,(function(e,t){return t.payload})),Object(L.a)(ke,C,(function(e,t){return t.payload})),Object(L.a)(ke,x,(function(e,t){return t.payload})),ke)),Le=Object(Ce.c)({user:Ie,token:_e,error:Ae}),ze=n(17),Be=n(47),Ve={key:"token",storage:n.n(Be).a,whitelist:["token"]},De=Object(g.d)({serializableCheck:{ignoredActions:[ze.a,ze.f,ze.b,ze.c,ze.d,ze.e]}}),Pe=Object(g.a)({reducer:{contacts:xe,auth:Object(ze.g)(Ve,Le)},middleware:Object(we.a)(De)}),Ue=Object(ze.h)(Pe),Je=Pe,He=n(48);u.a.render(r.a.createElement(o.a,{store:Je},r.a.createElement(He.a,{loading:null,persistor:Ue},r.a.createElement(l.a,null,r.a.createElement(Ne,null)))),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.4defb857.chunk.js.map