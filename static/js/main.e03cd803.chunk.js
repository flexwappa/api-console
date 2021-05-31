(this["webpackJsonpreact-sendsay-console"]=this["webpackJsonpreact-sendsay-console"]||[]).push([[0],{42:function(e,t,n){e.exports=n(64)},47:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(24),s=n.n(c),i=(n(47),n(48),"/login"),l="/main",u="REQUEST_HISTORY",m="sendsay_session",d="login",p="POST_CONSOLE",b="POST_LOGOUT",g="GET_USER_DATA",f={name:"login",options:{validate:function(e){return!!e&&/\w/.test(e)&&!/[\u0430-\u044f\u0410-\u042f\u0451]/.test(e)}}},v={name:"sublogin",options:{validate:function(e){return!0}}},_={name:"passwd",options:{validate:function(e){return!!e&&!/[\u0430-\u044f\u0410-\u042f\u0451]/.test(e)}}},O={name:"input",options:{validate:function(e){return!!e&&!/[\u0430-\u044f\u0410-\u042f\u0451]/.test(e)}}},E={name:"output",options:{validate:function(e){return!!e&&!/[\u0430-\u044f\u0410-\u042f\u0451]/.test(e)}}},h=n(6),j=n(15),x=(n(50),function(e){var t=e.error;return r.createElement("div",{className:"input-wrapper ".concat(t&&"input-wrapper-error")},r.createElement("div",{className:"input-wrapper__head"},r.createElement("label",{className:"input-wrapper__header__label"},e.label),e.optional&&r.createElement("span",{className:"input-wrapper__header__optional"},"\u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e")),r.createElement("div",{className:"input-wrapper__body"},r.createElement("input",Object.assign({},e,{className:"input-wrapper__input"}))))}),N=(n(51),n(52),function(e){var t=e.text,n=e.loading,a=e.disabled,o=e.onClick;return r.createElement("div",{className:"button ".concat(a&&"button-disabled"),onClick:function(){n||a||o()}},n?"Loading...":t)}),y=n(8),q=n(14),w=n(18),k=(a={},Object(q.a)(a,d,{data:void 0,loading:!1,error:""}),Object(q.a)(a,p,{data:void 0,loading:!1,error:""}),Object(q.a)(a,b,{data:void 0,loading:!1,error:""}),Object(q.a)(a,g,{data:void 0,loading:!1,error:""}),a),S=Object(w.b)({name:"fetch",initialState:k,reducers:{postLogin:function(e){e.login,e.sublogin,e.passwd},postLogout:function(){},getUserData:function(){},postConsoleRequest:function(e){e.action},setData:function(e,t){var n=t.payload;console.log("setFetching",e[n.requestName].loading,n);var a=n.requestName,r=n.loading;e[a].loading=r},setFetching:function(e,t){var n=t.payload;console.log("setFetching",e[n.requestName].loading,n);var a=n.requestName,r=n.loading;e[a].loading=r},setErrorFetching:function(e,t){var n=t.payload;console.log("setErrorFetching",n);var a=n.requestName,r=n.error;e[a].error=JSON.stringify(r)},resetToInitialFetchState:function(e,t){var n=t.payload;console.log("resetToInitialFetchState",n);var a=n.requestName;return a&&(e[a].loading=!1,e[a].error=""),k}}}),R=S.actions,H=R.setFetching,C=R.setErrorFetching,F=R.resetToInitialFetchState,T=R.postLogin,J=R.postLogout,I=R.getUserData,L=R.postConsoleRequest,A=S.reducer,D=f,U=v,P=_,G=function(){var e=Object(y.e)((function(e){return e.fetchState[d].loading})),t=Object(y.e)((function(e){return e.fetchState[d].error})),n=Object(y.d)(),a=Object(j.c)(),r=a.register,c=a.handleSubmit,s=(a.watch,a.formState.errors);return o.a.createElement("div",{className:"login-page"},o.a.createElement("img",{className:"login-page__logo",src:"".concat("https://flexwappa.github.io/api-console","/icons/logo.svg")}),o.a.createElement("div",{className:"login-page__content"},o.a.createElement("div",{className:"login-page__content__head"},o.a.createElement("span",{className:"login-page__content__head__title"},"API-\u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043a\u0430")),t&&o.a.createElement("div",{className:"login-page__error"},o.a.createElement("div",{className:"login-page__error__header"},o.a.createElement("img",{src:"api-console/icons/error-emoji.svg"}),o.a.createElement("span",null,"\u0412\u0445\u043e\u0434 \u043d\u0435 \u0432\u044b\u0448\u0435\u043b")),o.a.createElement("div",{className:"login-page__error__description"},t)),o.a.createElement("div",{className:"login-page__content__body"},o.a.createElement(x,Object.assign({error:s[D.name],label:"\u041b\u043e\u0433\u0438\u043d"},r(D.name,D.options))),o.a.createElement(x,Object.assign({error:s[U.name],label:"\u0421\u0443\u0431\u043b\u043e\u0433\u0438\u043d",optional:!0},r(U.name,U.options))),o.a.createElement(x,Object.assign({type:"password",error:s[P.name],label:"\u041f\u0430\u0440\u043e\u043b\u044c"},r(P.name,P.options)))),o.a.createElement("div",{className:"login-page__content__footer"},o.a.createElement(N,{text:"\u0412\u043e\u0439\u0442\u0438",onClick:c((function(e){n(T(e))})),loading:e,disabled:!!Object.keys(s).length}))))},z=n(17),B=n(9),W=(n(57),o.a.memo((function(e){var t=e.login,n=e.subLogin,a=Object(r.useState)(!1),c=Object(B.a)(a,2),s=c[0],i=c[1],l=Object(y.d)();return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"header__logo-wrapper"},o.a.createElement("img",{className:"header__logo-wrapper_img",src:"/icons/logo.svg"}),o.a.createElement("span",{className:"header__logo-wrapper__title"},"API-\u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043a\u0430")),o.a.createElement("div",{className:"header__right-block"},o.a.createElement("div",{className:"header__right-block__user-info"},t," ",n?":  ".concat(n):""),o.a.createElement("div",{onClick:function(){console.log("exit"),l(J())},className:"header__right-block__exit-button"},o.a.createElement("span",null,"\u0412\u044b\u0439\u0442\u0438"),o.a.createElement("img",{className:"header__right-block__exitButton_img",src:"/icons/log-out.svg"})),o.a.createElement("img",{className:"header__right-block__full-screen-button",src:s?"/icons/full-screen-exit.svg":"/icons/full-screen.svg",onClick:function(){if(!document.fullscreenElement)return document.documentElement.requestFullscreen(),void i(!0);document.exitFullscreen&&(document.exitFullscreen(),i(!1))}})))}))),K=(n(58),n(59),function(e){var t=e.label,n=e.isLast,a=e.isActive,c=e.onClick,s=e.onChangeDropDown,i=e.executeClick,l=e.removeRequest,u=e.error,m=e.inputText,d=Object(r.useState)(!1),p=Object(B.a)(d,2),b=p[0],g=p[1],f=Object(r.useState)(!1),v=Object(B.a)(f,2),_=v[0],O=v[1],E=Object(r.useRef)();E.current=b;var h=function(e,t){t&&t.stopPropagation(),s(e),g(e)},j=Object(r.useRef)(),x=function(e){var t=e.composedPath().includes(j.current);E.current&&!t&&h(!1)};Object(r.useEffect)((function(){return document.addEventListener("click",x),function(){document.removeEventListener("click",x)}}),[]);return o.a.createElement("div",{className:"tab-wrapper",ref:j},o.a.createElement("div",{onClick:function(){return c()},className:"tab ".concat(a&&"tab-active")},o.a.createElement("img",{className:"tab__request-feedback",src:"".concat(u?"/icons/red-dot.svg":"/icons/green-dot.svg")}),o.a.createElement("span",{className:"tab__label"},t),o.a.createElement("img",{className:"tab__options-button",src:"/icons/dots.svg",onClick:function(e){return h(!b,e)}})),b&&o.a.createElement("div",{className:"tab__options-list"},o.a.createElement("div",{onClick:function(){h(!1),i()}},"\u0412\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c"),o.a.createElement("div",{onClick:function(){console.log("onCopyHandler"),h(!1),navigator.clipboard.writeText(m).then((function(){return O(!_)}),void 0)}},"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),!n&&o.a.createElement("div",{onClick:function(){l(),g(!1)},className:"tab__options-list__delete"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")),_&&o.a.createElement("div",{className:"tab__copied"},o.a.createElement("span",{className:"tab__copied__span"},"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e")))}),Q=(n(60),function(e){var t=e.error,n=e.control,a=e.inputField,r=e.outputField;return console.log("outputField ",!!t,r),o.a.createElement("div",{className:"tab-view ".concat(!!t&&"tab-view-error")},o.a.createElement("div",{className:"tab-view__input-field"},o.a.createElement("span",{className:"tab-view__input-field__span"},"\u0417\u0430\u043f\u0440\u043e\u0441:"),o.a.createElement(j.a,{control:n,name:O.name,render:function(){return o.a.createElement("textarea",Object.assign({},a,{className:"tab-view__input-field__textarea"}))}})),o.a.createElement("div",{className:"tab-view__input-field"},o.a.createElement("span",{className:"tab-view__input-field__span"},"\u041e\u0442\u0432\u0435\u0442:"),o.a.createElement(j.a,{control:n,name:E.name,render:function(){return o.a.createElement("textarea",{readOnly:!0,value:t||r.value,className:"tab-view__input-field__textarea"})}})))}),Y=function(e){return[{value:"{",replace:"{\n  "},{value:"}",replace:"\n}"},{value:",",replace:",\n  "}].forEach((function(t){var n=t.value,a=t.replace;e=e.replaceAll(n,a)})),e},M=function(e){var t=e.tabs,n=e.inputField,a=e.removeRequest,c=e.executeClick,s=e.removeAllRequests,i=e.outputField,l=e.control,u=e.setActiveTab,m=e.activeTab,d=Object(r.useState)(!1),p=Object(B.a)(d,2),b=p[0],g=p[1];return o.a.createElement("div",{className:"tabs"},o.a.createElement("div",{className:"tabs__row"},o.a.createElement("div",{style:{zIndex:b?10:0},className:"tabs__row__absolute"},t.map((function(e,t){return o.a.createElement(K,{key:e.id,executeClick:function(){return c(t)},inputText:e.input,isLast:0===t,removeRequest:function(){return a(t)},onChangeDropDown:function(e){return g(e)},label:e.action,error:e.errorRequest,isActive:t===m,onClick:function(){return u(t)}})})))),t.map((function(e,t){return m===t?o.a.createElement(Q,{control:l,inputField:n,outputField:Object(z.a)({},i,{value:Y(e.output)}),error:e.errorJson}):null})),o.a.createElement("img",{className:"tabs__row__reset",src:"/icons/cross.svg",onClick:function(){return s()}}))},V=(n(61),{requestHistory:JSON.parse(localStorage.getItem(u))||[].concat([{action:"pong",input:'{\n  "action":"pong"\n}\n',output:"",errorRequest:"",errorJson:""}])}),$=Object(w.b)({name:"console",initialState:V,reducers:{setRequestHistoryInput:function(e,t){var n=t.payload;console.log("setRequestHistoryInput",n);var a=n.index,r=n.input;e.requestHistory[a].input=r},setRequestHistoryOutput:function(e,t){var n=t.payload;console.log("setRequestHistoryOutput",n);var a=n.index,r=n.output;e.requestHistory[a].output=JSON.stringify(r)},setRequestHistoryErrorJson:function(e,t){var n=t.payload;console.log("setRequestHistoryErrorJson",n);var a=n.index,r=n.errorJson;e.requestHistory[a].errorJson=r?"Bad JSON format!":""},setRequestHistoryErrorRequest:function(e,t){var n=t.payload;console.log("setRequestHistoryError",n);var a=n.index,r=n.errorRequest;e.requestHistory[a].errorRequest=r?JSON.stringify(r):""},appendRequestHistory:function(e,t){var n=t.payload;n.action,n.input;console.log("appendRequestHistory",n);var a=e.requestHistory,r=a.findIndex((function(e){return e.action===n.action}));if(-1===r)15===a.length&&e.requestHistory.pop(),console.log("HELLO prevRequestHistory"),e.requestHistory.unshift(Object(z.a)({},n,{output:"",errorRequest:"",errorJson:""}));else{var o=[a[r],a[0]];a[0]=o[0],a[r]=o[1]}},removeRequestHistory:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.payload;console.log("removeRequestHistory",n);var a=n.index;e.requestHistory=void 0!==a?e.requestHistory.filter((function(e,t){return t!==a})):[e.requestHistory[0]]},resetToInitialConsoleState:function(){return localStorage.removeItem(u),V}}}),X=$.actions,Z=X.setRequestHistoryErrorJson,ee=X.setRequestHistoryErrorRequest,te=(X.setRequestHistoryInput,X.appendRequestHistory),ne=X.removeRequestHistory,ae=X.resetToInitialConsoleState,re=X.setRequestHistoryOutput,oe=$.reducer,ce=function(){var e=Object(y.e)((function(e){return e.fetchState[p].loading})),t=Object(y.e)((function(e){return e.authState.login})),n=Object(y.e)((function(e){return e.consoleState.requestHistory})),a=Object(y.d)(),c=Object(r.useCallback)((function(e){return a(ne({index:e}))}),[a]),s=Object(r.useState)(0),i=Object(B.a)(s,2),l=i[0],m=i[1],d=Object(j.c)(),b=d.setValue,g=d.handleSubmit,f=(d.watch,d.control),v=Object(j.b)({name:O.name,control:f}).field,_=Object(j.b)({name:E.name,control:f}).field;Object(r.useEffect)((function(){b(O.name,n[l].input)}),[l]),Object(r.useEffect)((function(){localStorage.setItem(u,JSON.stringify(n))}),[n]);var h=function(){try{var e=v.value,t=JSON.stringify(JSON.parse(e)),n=Y(t);b(O.name,n),a(Z({errorJson:"",index:l}))}catch(r){a(Z({errorJson:r,index:l}))}},x=function(e){try{var t=e===l,r=v.value,o=t?JSON.parse(r):JSON.parse(n[e].input);h(),a(L(Object(z.a)({},o,{index:e}))),a(te({action:Object.values(o).join(),input:r})),t?m(0):b(O.name,n[e].input)}catch(c){a(Z({errorJson:c,index:e}))}};return o.a.createElement("div",{className:"console-page"},o.a.createElement(W,{login:t}),o.a.createElement("div",{className:"console-page__content"},o.a.createElement(M,{activeTab:l,executeClick:x,removeRequest:function(e){c(e),e===l&&m(e-1)},removeAllRequests:function(){c(),m(0)},setActiveTab:m,control:f,inputField:v,outputField:_,tabs:n})),o.a.createElement("div",{className:"console-page__footer"},o.a.createElement(N,{text:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",loading:e,disabled:!1,onClick:g((function(){return x(l)}))}),o.a.createElement("div",{className:"console-page__footer__right-block"},o.a.createElement("img",{className:"console-page__footer__right-block__img",src:"/icons/format.svg"}),o.a.createElement("span",{className:"console-page__footer__right-block__span",onClick:h},"\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"))))},se=n(38),ie=new(n.n(se).a),le=function(e,t){return console.log("REQUEST TO SENDSAY",e,t),ie.request(Object(z.a)({action:e},t))};function ue(e,t,n){var a="";if(n){var r=new Date;r.setTime(r.getHours()+n),a="; expires="+r.toUTCString()}console.log("HELLO",a),document.cookie=e+"="+(t||"")+a+"; path=/"}var me=Object(w.b)({name:"login",initialState:{login:"",isAuthorized:!1},reducers:{setIsAuthorized:function(e,t){e.isAuthorized=t.payload},setUserData:function(e,t){var n=t.payload;e.login=n}}}),de=me.actions,pe=de.setIsAuthorized,be=de.setUserData,ge=me.reducer;var fe=function(){var e=Object(y.e)((function(e){return e.authState.isAuthorized}))?o.a.createElement(h.d,null,o.a.createElement(h.b,{path:l,component:ce}),o.a.createElement(h.a,{to:l})):o.a.createElement(h.d,null,o.a.createElement(h.b,{path:i,component:G}),o.a.createElement(h.a,{to:i})),t=Object(y.d)();return Object(r.useEffect)((function(){var e=function(e){for(var t=e+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){for(var r=n[a];" "==r.charAt(0);)r=r.substring(1,r.length);if(0==r.indexOf(t))return r.substring(t.length,r.length)}return null}(m);ie.setSessionFromCookie(),t(pe(!!e)),t(I())}),[]),r.createElement("div",{className:"App"},e)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=n(30),_e=n(10),Oe=n(16),Ee=n(40),he=n(21),je=n(36),xe=n(12),Ne=n(3),ye=n.n(Ne),qe=n(5),we=n(41),ke=n(11),Se=ye.a.mark(Fe),Re=ye.a.mark(Te),He=ye.a.mark(Je),Ce=ye.a.mark(Ie);function Fe(e){var t,n,a;return ye.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.type,t=e.payload,r.next=3,Object(qe.b)(H({requestName:d,loading:!0}));case 3:return r.prev=3,r.next=6,Object(qe.a)((function(){return le("login",t)}))||{};case 6:return n=r.sent,a=n.session,console.log("WORKER LOGIN RESPONSE: ",a),ue(m,a),ie.setSessionFromCookie(),r.next=13,Object(qe.b)(pe(!0));case 13:return r.next=15,Object(qe.b)(be(t.login));case 15:return r.next=17,Object(qe.b)(Object(ke.d)(l));case 17:r.next=24;break;case 19:return r.prev=19,r.t0=r.catch(3),console.log("WORKER LOGIN ERROR: ",r.t0),r.next=24,Object(qe.b)(C({requestName:d,error:{id:r.t0.id,explain:r.t0.explain}}));case 24:return r.next=26,Object(qe.b)(H({requestName:d,loading:!1}));case 26:case"end":return r.stop()}}),Se,null,[[3,19]])}function Te(){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(qe.b)(H({requestName:b,loading:!0}));case 2:return e.prev=2,e.next=5,Object(qe.a)((function(){return le("logout",{})}));case 5:return t=m,document.cookie=t+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",e.next=8,Object(qe.b)(pe(!1));case 8:return e.next=10,Object(qe.b)(ne(!1));case 10:return e.next=12,Object(qe.b)(F({}));case 12:return e.next=14,Object(qe.b)(ae());case 14:return e.next=16,Object(qe.b)(Object(ke.d)(i));case 16:e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(2),e.next=22,Object(qe.b)(C({requestName:b,error:{id:e.t0.id,explain:e.t0.explain}}));case 22:return e.next=24,Object(qe.b)(H({requestName:b,loading:!1}));case 24:case"end":return e.stop()}var t}),Re,null,[[2,18]])}function Je(e){var t,n,a,r,o;return ye.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return e.type,t=e.payload,console.log("workerConsoleRequest",t),c.next=4,Object(qe.b)(H({requestName:p,loading:!0}));case 4:return n=t.action,a=t.index,r=Object(we.a)(t,["action","index"]),c.prev=5,c.next=8,Object(qe.a)((function(){return le(n,r)}))||{};case 8:return o=c.sent,c.next=11,Object(qe.b)(re({index:a,output:o}));case 11:c.next=20;break;case 13:return c.prev=13,c.t0=c.catch(5),console.log("workerConsoleRequest error",c.t0),c.next=18,Object(qe.b)(ee({errorRequest:c.t0,index:a}));case 18:return c.next=20,Object(qe.b)(C({requestName:p,error:c.t0}));case 20:return console.log("HELLO FETCHING FLASE"),c.next=23,Object(qe.b)(H({requestName:p,loading:!1}));case 23:case"end":return c.stop()}}),He,null,[[5,13]])}function Ie(){var e,t,n;return ye.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("workerGetUserData"),a.next=3,Object(qe.b)(H({requestName:g,loading:!0}));case 3:return a.prev=3,a.next=6,Object(qe.a)((function(){return le("sys.settings.get",{list:["about.owner.email"]})}))||{};case 6:return e=a.sent,t=e.list,n=t["about.owner.email"],a.next=11,Object(qe.b)(be(n));case 11:console.log(t),a.next=20;break;case 14:return a.prev=14,a.t0=a.catch(3),a.next=18,Object(qe.b)(J());case 18:return a.next=20,Object(qe.b)(C({requestName:g,error:a.t0}));case 20:return a.next=22,Object(qe.b)(H({requestName:g,loading:!1}));case 22:case"end":return a.stop()}}),Ce,null,[[3,14]])}var Le=ye.a.mark(Pe),Ae=ye.a.mark(Ge),De=ye.a.mark(ze),Ue=ye.a.mark(Be);function Pe(){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(qe.c)(T.type,Fe);case 2:case"end":return e.stop()}}),Le)}function Ge(){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(qe.c)(J.type,Te);case 2:case"end":return e.stop()}}),Ae)}function ze(){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(qe.c)(L.type,Je);case 2:case"end":return e.stop()}}),De)}function Be(){return ye.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(qe.c)(I.type,Ie);case 2:case"end":return e.stop()}}),Ue)}var We=Object(xe.a)(),Ke=Object(Oe.b)({router:Object(he.b)(We),authState:ge,consoleState:oe,fetchState:A}),Qe=Object(Ee.a)(),Ye=[Qe,Object(je.a)(We)],Me=Object(w.a)({reducer:Ke,middleware:function(e){return Object(_e.a)(e({thunk:!1})).concat(Ye)}});window.state=Me.getState(),Qe.run(Pe),Qe.run(Ge),Qe.run(ze),Qe.run(Be),s.a.render(o.a.createElement(ve.a,null,o.a.createElement(y.a,{store:Me},o.a.createElement(he.a,{history:We},o.a.createElement(fe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.e03cd803.chunk.js.map