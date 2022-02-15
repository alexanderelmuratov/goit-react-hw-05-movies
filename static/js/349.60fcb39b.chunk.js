"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[349],{1454:function(n,e,t){t.d(e,{a:function(){return c}});var r,i=t(6373),a=t(168),o=t(5751).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),u=t(184),c=function(){return(0,u.jsx)(o,{children:(0,u.jsx)(i.VF,{color:"#00BFFF",height:80,width:80})})}},4672:function(n,e,t){t.d(e,{O:function(){return x}});var r,i,a,o=t(6871),u=t(8014),c=t(168),s=t(501),p=t(5751),f=p.ZP.ul(r||(r=(0,c.Z)(["\n  margin: 0 auto;\n  margin-top: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: baseline;\n"]))),l=p.ZP.li(i||(i=(0,c.Z)(["\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]))),h=(0,p.ZP)(s.rU)(a||(a=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  font-style: italic;\n  font-weight: 400;  \n  font-size: 18px;\n  color: #2a363b;\n  text-decoration: none;\n\n  &:hover {\n    color: #ff6b01;\n  }\n"]))),d=t(184),x=function(n){var e=n.movies,t=(0,o.TH)();return(0,d.jsx)(f,{children:e.map((function(n){return(0,d.jsx)(l,{children:(0,d.jsxs)(h,{to:"/movies/".concat(n.id),state:{from:t},children:[(0,d.jsx)(u.tsh,{style:{width:15,height:15,marginRight:"10px"}}),n.title]})},n.id)}))})}},4349:function(n,e,t){t.r(e),t.d(e,{MoviesPage:function(){return P}});var r,i,a,o=t(5861),u=t(885),c=t(7757),s=t.n(c),p=t(2791),f=t(501),l=t(577),h=t(5763),d=t(168),x=t(5751),v=x.ZP.form(r||(r=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 400px;\n  margin-top: 20px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n"]))),m=x.ZP.button(i||(i=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  border: 0;\n  opacity: 0.6;\n  cursor: pointer;\n  outline: none;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),g=x.ZP.input(a||(a=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  height: 40px;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),b=t(184),y=function(n){var e=n.onSubmit,t=(0,p.useState)(""),r=(0,u.Z)(t,2),i=r[0],a=r[1];return(0,b.jsx)("section",{children:(0,b.jsxs)(v,{onSubmit:function(n){if(n.preventDefault(),""===i.trim())return l.Am.warn("Please fill in the search field!");e(i),a("")},children:[(0,b.jsx)(g,{type:"text",name:"query",value:i,onChange:function(n){a(n.currentTarget.value.toLowerCase())},autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,b.jsx)(m,{type:"submit",children:(0,b.jsx)(h.a4h,{style:{width:30,height:30}})})]})})},w=t(1454),Z=t(4672),k=t(4169),j=t(8565),P=function(){var n=(0,f.lr)(),e=(0,u.Z)(n,2),t=e[0],r=e[1],i=(0,p.useState)(t.get("query")),a=(0,u.Z)(i,2),c=a[0],h=a[1],d=(0,p.useState)([]),x=(0,u.Z)(d,2),v=x[0],m=x[1],g=(0,p.useState)(!1),P=(0,u.Z)(g,2),S=P[0],_=P[1],F=(0,p.useState)(null),C=(0,u.Z)(F,2),q=C[0],z=C[1];(0,p.useEffect)((function(){if(c){var n=function(){var n=(0,o.Z)(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return _(!0),n.prev=1,n.next=4,(0,j.V0)(c);case 4:if(e=n.sent,0!==(t=e.results).length){n.next=8;break}return n.abrupt("return",l.Am.error("Sorry, there are no movies. Please try again!"));case 8:m(t),console.log(t),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(1),z(n.t0),l.Am.error("Oops!...Something went wrong");case 16:return n.prev=16,_(!1),n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[1,12,16,19]])})));return function(){return n.apply(this,arguments)}}();n()}}),[c]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(k.V,{children:"Find you movie"}),(0,b.jsx)(y,{onSubmit:function(n){n!==c&&(r({query:n}),h(n),m([]),z(null))}}),S&&(0,b.jsx)(w.a,{}),!q&&0!==v.length&&(0,b.jsx)(Z.O,{movies:v})]})}},8565:function(n,e,t){t.d(e,{Df:function(){return s},V0:function(){return p},TP:function(){return f},M1:function(){return l},tx:function(){return h}});var r=t(5861),i=t(7757),a=t.n(i),o=t(4569),u=t.n(o);u().defaults.baseURL="https://api.themoviedb.org/3";var c="b4f947b22bfa1d671304279be6575e1f",s=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/search/movie?api_key=".concat(c,"&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(e,"?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(e,"/credits?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("/movie/".concat(e,"/reviews?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=349.60fcb39b.chunk.js.map