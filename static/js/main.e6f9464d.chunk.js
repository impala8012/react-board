(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{29:function(n,t,e){},36:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),i=e.n(c),o=e(20),a=e.n(o),u=(e(29),e(4)),s=e(2),j=e(3),d=e(10),b=e(5),l=Object(c.createContext)(null),f=Object(c.createContext)(null),x="token",O=function(n){return localStorage.setItem(x,n)},p=function(){return localStorage.getItem(x)};function h(){var n=Object(s.a)(["\n  display:flex;\n  align-items:center;\n\n  // \u5e95\u4e0b\u7684 navbarList \u624d\u6709 margin-left\n  "," {\n    margin-left: 32px;\n  }\n"]);return h=function(){return n},n}function g(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100px;\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n\n  ","\n"]);return g=function(){return n},n}function v(){var n=Object(s.a)(["\n  display:flex; \n  align-items: center;\n  height: 64px;\n"]);return v=function(){return n},n}function m(){var n=Object(s.a)(["\n  font-size: 32px;\n  font-weight:bold\n"]);return m=function(){return n},n}function w(){var n=Object(s.a)(["\n  height: 64px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0 32px;\n"]);return w=function(){return n},n}var y=j.a.div(w()),S=j.a.div(m()),C=j.a.div(v()),k=Object(j.a)(d.b)(g(),(function(n){return n.$active&&"\n  background: rgba(0,0,0,0.1)\n  "})),L=j.a.div(h(),C);function z(){var n=Object(b.g)(),t=Object(b.f)(),e=Object(c.useContext)(l),i=e.user,o=e.setUser;return Object(r.jsxs)(y,{children:[Object(r.jsxs)(L,{children:[Object(r.jsx)(S,{children:"\u90e8\u843d\u683c"}),Object(r.jsxs)(C,{children:[Object(r.jsx)(k,{$active:"/"===n.pathname,to:"/",children:"\u9996\u9801"}),Object(r.jsx)(k,{$active:"/about"===n.pathname,to:"/about",children:"\u95dc\u65bc\u6211"}),i&&Object(r.jsx)(k,{$active:"/new-post"===n.pathname,to:"/new-post",children:"\u767c\u5e03\u6587\u7ae0"})]})]}),Object(r.jsxs)(C,{children:[!i&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(k,{$active:"/login"===n.pathname,to:"/login",children:"\u767b\u5165"}),Object(r.jsx)(k,{$active:"/register"===n.pathname,to:"/register",children:"\u8a3b\u518a"})]}),i&&Object(r.jsx)(k,{onClick:function(){O(""),o(null),t.push("/")},children:"\u767b\u51fa"})]})]})}var I="https://student-json-api.lidemy.me",P=function(n,t){return fetch("".concat(I,"/posts?_page=").concat(n,"&_limit=").concat(t,"&_sort=createdAt&_order=desc")).then((function(n){return n.json()}))},A=function(){var n=p();return fetch("".concat(I,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))};function F(){var n=Object(s.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n  font-size: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return F=function(){return n},n}var $=j.a.div(F());function _(){return Object(r.jsx)($,{children:"Loading..."})}function J(){var n=Object(s.a)(["\n  width: 30%;\n  margin: 10px auto;\n  border-radius: 5px;\n  outline: none;\n"]);return J=function(){return n},n}function T(){var n=Object(s.a)(["\n\n  input{\n    border-radius:5px;\n    outline: none;\n  }\n"]);return T=function(){return n},n}function B(){var n=Object(s.a)(["\n  margin: 50px auto;\n  width: 500px;\n  border: 1px solid #ccc;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n"]);return B=function(){return n},n}function D(){var n=Object(s.a)(["\n  color:red;\n"]);return D=function(){return n},n}var E=j.a.div(D()),U=j.a.form(B()),N=j.a.div(T()),M=j.a.button(J());function R(){var n=Object(c.useContext)(l).setUser,t=Object(c.useState)(""),e=Object(u.a)(t,2),i=e[0],o=e[1],a=Object(c.useState)(""),s=Object(u.a)(a,2),j=s[0],d=s[1],x=Object(c.useState)(""),p=Object(u.a)(x,2),h=p[0],g=p[1],v=Object(c.useContext)(f),m=v.isLoading,w=v.setIsLoading,y=Object(b.f)();return Object(r.jsxs)(U,{onSubmit:function(t){g(null),w(!0),function(n,t){return fetch("".concat(I,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,password:t})}).then((function(n){return n.json()}))}(i,j).then((function(t){if(0===t.ok)return w(!1),g(t.message);O(t.token),A().then((function(t){if(1!==t.ok)return O(null),w(!1),g(t.toString());n(t.data),w(!1),y.push("/")}))}))},children:[Object(r.jsxs)(N,{children:[Object(r.jsxs)("div",{children:["username:"," ",Object(r.jsx)("input",{value:i,onChange:function(n){return o(n.target.value)}})]}),Object(r.jsxs)("div",{children:["password:"," ",Object(r.jsx)("input",{type:"password",value:j,onChange:function(n){return d(n.target.value)}})]})]}),m?Object(r.jsx)(_,{}):Object(r.jsx)(M,{children:"\u767b\u5165"}),h&&Object(r.jsx)(E,{children:h})]})}function q(){var n=Object(s.a)(["\n  border: 0.5px solid #ddd;\n  font-size: 16px;\n  padding: 5px 10px;\n  margin: 0 10px;\n  cursor: pointer;\n  border-radius: 8px;\n  outline: none;\n  background: ",";\n  &:hover {\n    background: rgba(0, 0, 0, 0.4);\n  }\n"]);return q=function(){return n},n}function G(){var n=Object(s.a)(["\n  margin: 20px auto;\n  text-align: center;\n"]);return G=function(){return n},n}var H=j.a.div(G()),K=j.a.button(q(),(function(n){return n.color}));function Q(n){var t=n.pageCount,e=n.limit,i=n.setPosts,o=Object(c.useState)(1),a=Object(u.a)(o,2),s=a[0],j=a[1];return Object(r.jsx)(H,{children:t.map((function(n){return Object(r.jsx)(K,{color:s===n?"rgba(0, 0, 0, 0.4)":"rgba(0, 0, 0, 0.1)",onClick:function(){return function(n){P(n,e).then((function(n){return i(n)})),j(n)}(n)},children:n},n)}))})}function V(){var n=Object(s.a)(["\n  color: rgba(0,0,0,0.8);\n"]);return V=function(){return n},n}function W(){var n=Object(s.a)(["\n  font-size:24px;\n  color: #333;\n  text-decoration:none;\n"]);return W=function(){return n},n}function X(){var n=Object(s.a)(["\n  border-bottom: 1px solid rgba(0,12,34,0.2);\n  padding:16px;\n  display:flex;\n  align-items: flex-end;\n  justify-content: space-between;\n"]);return X=function(){return n},n}function Y(){var n=Object(s.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]);return Y=function(){return n},n}var Z=j.a.div(Y()),nn=j.a.div(X()),tn=Object(j.a)(d.b)(W()),en=j.a.div(V());function rn(n){var t=n.post;return Object(r.jsxs)(nn,{children:[Object(r.jsx)(tn,{to:"/posts/".concat(t.id),children:t.title}),Object(r.jsx)(en,{children:new Date(t.createdAt).toLocaleString()})]})}function cn(){var n=Object(c.useContext)(f),t=n.isLoading,e=n.setIsLoading,i=Object(c.useState)([]),o=Object(u.a)(i,2),a=o[0],s=o[1],j=Object(c.useState)([]),d=Object(u.a)(j,2),b=d[0],l=d[1];return Object(c.useEffect)((function(){e(!0),fetch("".concat(I,"/posts?_sort=createdAt&_order=desc")).then((function(n){return n.json()})).then((function(n){var t=Math.ceil(n.length/5);l(Array.from({length:t},(function(n,t){return t+1})))})),P(1,5).then((function(n){s(n)})),e(!1)}),[e]),Object(r.jsx)(Z,{children:t?Object(r.jsx)(_,{}):Object(r.jsxs)(r.Fragment,{children:[a.map((function(n){return Object(r.jsx)(rn,{post:n},n.id)})),Object(r.jsx)(Q,{setPosts:s,pageCount:b,limit:5})]})})}function on(){var n=Object(s.a)(["\n  color: rgba(0, 0, 0, 0.8);\n"]);return on=function(){return n},n}function an(){var n=Object(s.a)(["\n  font-size: 32px;\n  font-weight:bolder;\n  color: #333;\n  margin-bottom: 10px;\n"]);return an=function(){return n},n}function un(){var n=Object(s.a)(["\n  width:50%;\n  height: 500px;\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  margin:0 auto;\n  margin-top:30px;\n  border-bottom: 1px solid rgba(0, 12, 34, 0.2);\n  padding: 16px;\n  background: rgba(0,0,0,0.1);\n  border-radius: 15px;\n"]);return un=function(){return n},n}function sn(){var n=Object(s.a)(["\n  width: 80%;\n  margin: 0 auto;\n"]);return sn=function(){return n},n}j.a.div(sn());var jn=j.a.div(un()),dn=j.a.div(an()),bn=j.a.div(on());function ln(){return Object(r.jsxs)(jn,{children:[Object(r.jsx)(dn,{children:"\u95dc\u65bc\u6211"}),Object(r.jsx)(bn,{children:"\u5229\u7528 React \u5be6\u4f5c\u51fa\u7684 SPA \u90e8\u843d\u683c"})]})}function fn(){var n=Object(s.a)(["\n  margin-top: 10px;\n  white-space: pre-line;\n  word-break: break-word;\n"]);return fn=function(){return n},n}function xn(){var n=Object(s.a)(["\n  color: rgba(0, 0, 0, 0.8);\n"]);return xn=function(){return n},n}function On(){var n=Object(s.a)(["\n  font-size: 32px;\n  font-weight:bold;\n  color: #333;\n  text-decoration: none;\n"]);return On=function(){return n},n}function pn(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid #ccc;\n"]);return pn=function(){return n},n}function hn(){var n=Object(s.a)(["\n  width: 80%;\n  margin: 20px auto;\n  padding: 16px;\n"]);return hn=function(){return n},n}var gn=j.a.div(hn()),vn=j.a.div(pn()),mn=j.a.div(On()),wn=j.a.div(xn()),yn=j.a.div(fn());function Sn(){var n=Object(c.useState)(""),t=Object(u.a)(n,2),e=t[0],i=t[1],o=Object(c.useContext)(f),a=o.isLoading,s=o.setIsLoading,j=Object(b.h)().id;return Object(c.useEffect)((function(){s(!0),function(n){return fetch("".concat(I,"/posts?id=").concat(n)).then((function(n){return n.json()}))}(j).then((function(n){return i(n[0])})),s(!1)}),[j,s]),Object(r.jsx)("div",{children:!a&&e?Object(r.jsxs)(gn,{children:[Object(r.jsxs)(vn,{children:[Object(r.jsx)(mn,{children:e.title}),Object(r.jsx)(wn,{children:new Date(e.createdAt).toLocaleString()})]}),Object(r.jsx)(yn,{children:e.body})]}):Object(r.jsx)(_,{})})}function Cn(){var n=Object(s.a)(["\n  width: 30%;\n  margin: 10px auto;\n  border-radius: 5px;\n  outline: none;\n"]);return Cn=function(){return n},n}function kn(){var n=Object(s.a)(["\n  input {\n    border-radius: 4px;\n    outline: none;\n  }\n"]);return kn=function(){return n},n}function Ln(){var n=Object(s.a)(["\n  margin: 50px auto;\n  width: 500px;\n  border: 1px solid #ccc;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n"]);return Ln=function(){return n},n}function zn(){var n=Object(s.a)(["\n  color:red;\n"]);return zn=function(){return n},n}var In=j.a.div(zn()),Pn=j.a.form(Ln()),An=j.a.div(kn()),Fn=j.a.button(Cn());function $n(){var n=Object(c.useContext)(l).setUser,t=Object(c.useState)(""),e=Object(u.a)(t,2),i=e[0],o=e[1],a=Object(c.useState)(""),s=Object(u.a)(a,2),j=s[0],d=s[1],x=Object(c.useState)(""),p=Object(u.a)(x,2),h=p[0],g=p[1],v=Object(c.useState)(""),m=Object(u.a)(v,2),w=m[0],y=m[1],S=Object(c.useContext)(f),C=S.isLoading,k=S.setIsLoading,L=Object(b.f)();return Object(r.jsxs)(Pn,{onSubmit:function(t){y(null),k(!0),function(n,t,e){return fetch("".concat(I,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,nickname:t,password:e})}).then((function(n){return n.json()}))}(i,h,j).then((function(t){if(0===t.ok)return k(!1),y(t.message);O(t.token),A().then((function(t){if(0===t.ok)return O(null),k(!1),y(t.toString());n(t.data),k(!1),L.push("/")}))}))},children:[Object(r.jsxs)(An,{children:[Object(r.jsxs)("div",{children:["username:"," ",Object(r.jsx)("input",{value:i,onChange:function(n){return o(n.target.value)}})]}),Object(r.jsxs)("div",{children:["nickname:"," ",Object(r.jsx)("input",{type:"text",value:h,onChange:function(n){return g(n.target.value)}})]}),Object(r.jsxs)("div",{children:["password:"," ",Object(r.jsx)("input",{type:"password",value:j,onChange:function(n){return d(n.target.value)}})]})]}),C?Object(r.jsx)(_,{}):Object(r.jsx)(Fn,{children:"\u8a3b\u518a"}),w&&Object(r.jsx)(In,{children:w})]})}function _n(){var n=Object(s.a)(["\n  color:red;\n"]);return _n=function(){return n},n}function Jn(){var n=Object(s.a)(["\n  width: 200px;\n  margin: 16px;\n  text-align: center;\n\n  border-radius: 5px;\n  outline: none;\n  cursor: pointer;\n  font-size: 18px;\n"]);return Jn=function(){return n},n}function Tn(){var n=Object(s.a)(["\n  text-align:center;\n  border-bottom: 1px solid #ccc;\n\n  h1{\n    padding-top:15px;\n  }\n"]);return Tn=function(){return n},n}function Bn(){var n=Object(s.a)(["\n  margin: 20px auto;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  label {\n    margin: 10px 0;\n  }\n  input {\n    width: 30%;\n    padding: 5px 13px;\n  }\n  textarea {\n    height: 200px;\n    padding: 8px 13px;\n    font-size: 16px;\n  }\n"]);return Bn=function(){return n},n}function Dn(){var n=Object(s.a)(["\n  margin: 20px auto 0 auto;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n  width: 80%;\n"]);return Dn=function(){return n},n}var En=j.a.form(Dn()),Un=j.a.div(Bn()),Nn=j.a.div(Tn()),Mn=j.a.button(Jn()),Rn=j.a.div(_n());function qn(){var n=Object(c.useState)(""),t=Object(u.a)(n,2),e=t[0],i=t[1],o=Object(c.useState)(""),a=Object(u.a)(o,2),s=a[0],j=a[1],d=Object(c.useState)(""),l=Object(u.a)(d,2),x=l[0],O=l[1],h=Object(c.useContext)(f),g=h.isLoading,v=h.setIsLoading,m=Object(b.f)();return Object(r.jsx)("div",{children:Object(r.jsxs)(En,{onSubmit:function(n){n.preventDefault(),v(!0),function(n,t){var e=p();return fetch("".concat(I,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(e)},body:JSON.stringify({title:n,body:t})}).then((function(n){return n.json}))}(e,s).then((function(n){if(1!==n.ok)return v(!1),O(n.message);v(!1),m.push("/")}))},children:[Object(r.jsx)(Nn,{children:Object(r.jsx)("h1",{children:"\u767c\u8868\u65b0\u6587\u7ae0"})}),Object(r.jsxs)(Un,{children:[Object(r.jsx)("label",{children:"\u6a19\u984c"}),Object(r.jsx)("input",{type:"text",value:e,onChange:function(n){return i(n.target.value)}}),Object(r.jsx)("label",{children:"\u5167\u5bb9"}),Object(r.jsx)("textarea",{value:s,onChange:function(n){return j(n.target.value)}})]}),g?Object(r.jsx)(_,{}):Object(r.jsx)(Mn,{children:"\u9001\u51fa\u6587\u7ae0"}),x&&Object(r.jsx)(Rn,{children:x})]})})}function Gn(){var n=Object(s.a)(["\npadding-top:64px;\n"]);return Gn=function(){return n},n}var Hn=j.a.div(Gn());var Kn=function(){var n=Object(c.useState)(null),t=Object(u.a)(n,2),e=t[0],i=t[1],o=Object(c.useState)(!1),a=Object(u.a)(o,2),s=a[0],j=a[1];return Object(c.useEffect)((function(){p()&&A().then((function(n){n.ok&&i(n.data)}))}),[]),Object(r.jsx)(l.Provider,{value:{user:e,setUser:i},children:Object(r.jsx)(Hn,{children:Object(r.jsx)(d.a,{children:Object(r.jsxs)(f.Provider,{value:{isLoading:s,setIsLoading:j},children:[Object(r.jsx)(z,{}),Object(r.jsxs)(b.c,{children:[Object(r.jsx)(b.a,{exact:!0,path:"/",children:Object(r.jsx)(cn,{})}),Object(r.jsx)(b.a,{path:"/about",children:Object(r.jsx)(ln,{})}),Object(r.jsx)(b.a,{path:"/new-post",children:Object(r.jsx)(qn,{})}),Object(r.jsx)(b.a,{path:"/posts/:id",children:Object(r.jsx)(Sn,{})}),Object(r.jsx)(b.a,{path:"/login",children:Object(r.jsx)(R,{})}),Object(r.jsx)(b.a,{path:"/Register",children:Object(r.jsx)($n,{})})]})]})})})})},Qn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,37)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;e(n),r(n),c(n),i(n),o(n)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(Kn,{})}),document.getElementById("root")),Qn()}},[[36,1,2]]]);
//# sourceMappingURL=main.e6f9464d.chunk.js.map