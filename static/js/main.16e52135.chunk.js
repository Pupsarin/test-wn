(this["webpackJsonptest-wn"]=this["webpackJsonptest-wn"]||[]).push([[0],{143:function(e,t,n){e.exports=n(300)},152:function(e,t,n){},300:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(17),u=n.n(c),o=n(14),i=n(30),l=n(142),s=n(52),f={users:[1,2],userCounter:3},m=[],d=Object(i.b)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_USER":return{users:[].concat(Object(s.a)(e.users),[e.userCounter]),userCounter:e.userCounter+1};case"REMOVE_USER":var n=t.payload.userToRemove;return Object(l.a)({},e,{users:e.users.filter((function(e){return e!==n}))});default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_USER_MESSAGE":case"SEND_MESSAGE":var n=t.payload,r=n.user,a=n.message;return[].concat(Object(s.a)(e),[{user:r,message:a,createdAt:new Date}]);default:return e}}}),b=Object(i.c)(d),E=(n(152),n(8)),p=n(308),v=n(309),g=n(305),h=n(306),j=n(139),w=n(9),O=n(141),x=["#34c3ff","#3498ff","#2575fc","#0052cc","#1361aa","#3f51b5","#2487c2","#ffeb3b","#f5a623","#f44336","#e54304","#e91e63","#9c27b0","#429321","#4a148c","#673ab7","#607d8b","#880061"],y=n(138),C=n(301),S=n(307),k=function(e){var t=e.user,n=Object(r.useState)(""),c=Object(y.a)(n,2),u=c[0],i=c[1],l=Object(o.b)();return a.a.createElement(C.a,null,a.a.createElement(S.a,{componentClass:"textarea",value:u,onChange:function(e){i(e)}}),a.a.createElement(C.a.Button,{onClick:function(){u&&u.replace(/\s/g,"").length&&l({type:"SEND_MESSAGE",payload:{user:t,message:u}}),i("")}},a.a.createElement(j.a,{icon:"send"})))};function R(){var e=Object(E.a)(["\n\tfont-size: 0.5em;\n"]);return R=function(){return e},e}function U(){var e=Object(E.a)(["\n\tfont-size: 0.7em;\n\tfont-weight: bold;\n"]);return U=function(){return e},e}function A(){var e=Object(E.a)(["\n\tmargin: 0;\n\tword-wrap: break-word;\n\tword-break: break-all;\n\toverflow-wrap: break-word;\n"]);return A=function(){return e},e}function _(){var e=Object(E.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tfont-size: 2rem;\n\tbackground-color: rgba(242, 250, 255, 0.7);\n\tborder-radius: 5px;\n\tpadding: 0.5rem;\n\tmin-width: 10%;\n\tmargin-bottom: 0.5rem;\n\t",";\n"]);return _=function(){return e},e}function M(){var e=Object(E.a)(["\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tflex-direction: column;\n\toverflow-y: auto;\n\twidth: 100%;\n\theight: calc(100% - 120px);\n"]);return M=function(){return e},e}var D=w.a.div(M()),z=w.a.div(_(),(function(e){var t=e.isAdmin;return e.isCurrent?"\n\t\t\t\talign-self: flex-end;\n\t\t\t\talign-items: flex-end;\n\t\t\t":t?"\n\t\t\t\talign-self: center;\n\t\t\t\tjustify-content: center;\n\t\t\t":"align-self: flex-start"}));z.Body=w.a.p(A());var N=w.a.div(U()),B=w.a.div(R()),H=function(e){var t=e.currentUser,n=Object(o.c)((function(e){return e.messages})),c=Object(r.useRef)();return Object(r.useEffect)((function(){c.current&&c.current.scrollTo(0,c.current.scrollHeight)}),[n]),a.a.createElement(D,{ref:c},n.map((function(e){var n=e.user===t,r="admin"===e.user;return a.a.createElement(z,{key:e.message+e.createdAt.getTime(),isCurrent:n,isAdmin:r},!r&&!n&&a.a.createElement(N,null,"User ",e.user),!r&&a.a.createElement(B,null,e.createdAt.toLocaleString()),a.a.createElement(z.Body,{isCurrent:n},e.message))})))};function T(){var e=Object(E.a)(["\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 0;\n\tright: 0;\n"]);return T=function(){return e},e}function G(){var e=Object(E.a)(["\n\tpadding: 1rem;\n\twidth: 100%;\n\theight: 100%;\n"]);return G=function(){return e},e}function I(){var e=Object(E.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-direction: row;\n\tfont-size: 2rem;\n\tfont-weight: bold;\n\tpadding: 0.5rem 1rem;\n\tbackground-color: ",";\n\tcolor: #ffffff;\n"]);return I=function(){return e},e}function J(){var e=Object(E.a)(["\n\twidth: 400px;\n\theight: 568px;\n\tborder-radius: 6px;\n\tbox-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);\n\tposition: relative;\n\toverflow: hidden;\n\tmargin: 0.5rem;\n"]);return J=function(){return e},e}var V=w.a.div(J());V.Header=w.a.h4(I(),(function(e){var t=e.user;return t<x.length?x[t]:x[Math.floor(Math.random()*x.length)]})),V.Content=w.a.div(G());var W=w.a.div(T()),L=function(e){var t=e.user,n=e.usersCount,r=Object(o.b)();return a.a.createElement(V,null,a.a.createElement(V.Header,{user:t},"User ",t,n>2&&a.a.createElement(O.a,{onClick:function(){r({type:"REMOVE_USER",payload:{userToRemove:t}})},size:"xs",icon:a.a.createElement(j.a,{icon:"close"})})),a.a.createElement(V.Content,null,a.a.createElement(H,{currentUser:t}),a.a.createElement(W,null,a.a.createElement(k,{user:t}))))};n(250);function q(){var e=Object(E.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tflex-wrap: wrap;\n\tpadding: 1rem;\n"]);return q=function(){return e},e}function F(){var e=Object(E.a)(["\n\tfont-size: 3rem;\n\tline-height: 2em;\n\tmargin-left: 1rem;\n"]);return F=function(){return e},e}var K=w.a.h1(F()),P=w.a.div(q());u.a.render(a.a.createElement(o.a,{store:b},a.a.createElement((function(){var e=Object(o.c)((function(e){return e.users})),t=e.users,n=e.userCounter,r=Object(o.b)();return a.a.createElement(p.a,null,a.a.createElement(v.a,null,a.a.createElement(g.a,{appearance:"inverse"},a.a.createElement(g.a.Header,null,a.a.createElement(K,{className:"navbar-brand logo"},"Home Test")),a.a.createElement(g.a.Body,null,a.a.createElement(h.a,{pullRight:!0,onClick:function(){r({type:"ADD_USER"}),r({type:"NEW_USER_MESSAGE",payload:{user:"admin",message:"User ".concat(n," joined the chat")}})}},a.a.createElement(h.a.Item,{icon:a.a.createElement(j.a,{icon:"plus"})},"Create New User"))))),a.a.createElement(P,null,t.map((function(e){return a.a.createElement(L,{key:e,user:e,usersCount:t.length})}))))}),null)),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.16e52135.chunk.js.map