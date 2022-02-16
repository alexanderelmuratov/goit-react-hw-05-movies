"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[729],{1454:function(n,t,e){e.d(t,{a:function(){return s}});var r,i=e(6373),a=e(168),o=e(5751).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),c=e(184),s=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(i.VF,{color:"#00BFFF",height:80,width:80})})}},5729:function(n,t,e){e.r(t),e.d(t,{MovieDetailsPage:function(){return z}});var r,i,a,o,c,s,u,l=e(5861),d=e(885),f=e(7757),p=e.n(f),h=e(2791),x=e(6871),v=e(577),m=e(1454),g=e(6036),w=e(168),j=e(501),b=e(5751),Z=(0,b.ZP)(j.rU)(r||(r=(0,w.Z)(["\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 15px;\n  font-weight: 400;  \n  font-size: 18px;\n  color: #2a363b;\n  text-decoration: none;\n\n  &:hover {\n    color: #ff6b01;\n  }\n"]))),y=e(184),k=function(){var n,t,e=(0,x.TH)();return(0,y.jsxs)(Z,{to:null!==(n=null===e||void 0===e||null===(t=e.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/",children:[(0,y.jsx)(g.wFh,{style:{width:30,height:30,marginRight:"5px"}}),"Go back"]})},_=e(4169),P=b.ZP.div(i||(i=(0,w.Z)(["  \n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),F=b.ZP.img(a||(a=(0,w.Z)(["\n  width: 100%;\n  margin-bottom: 15px;\n\n  @media (min-width: 768px) {\n    width: 200px;\n    margin-right: 20px;\n    margin-bottom: 0;\n  }\n"]))),O=b.ZP.p(o||(o=(0,w.Z)(["\n  margin-top: 5px;\n\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }  \n"]))),S=function(n){var t=n.movie,e=t.poster_path,r=t.title,i=t.release_date,a=t.vote_average,o=t.overview,c=t.genres;return(0,y.jsx)("div",{children:(0,y.jsxs)(P,{children:[(0,y.jsx)(F,{src:"https://image.tmdb.org/t/p/w300".concat(e),alt:r}),(0,y.jsxs)("div",{children:[(0,y.jsx)(_.V,{children:"".concat(r," (").concat(i.slice(0,4),")")}),(0,y.jsx)(O,{children:"User score: ".concat(10*a,"%")}),(0,y.jsx)("h2",{children:"Overview"}),(0,y.jsx)(O,{children:o}),(0,y.jsx)("h3",{children:"Genres"}),(0,y.jsx)(O,{children:c.map((function(n){return n.name})).join(", ")})]})]})})},T=b.ZP.ul(c||(c=(0,w.Z)(["\n  display: flex;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),U=b.ZP.li(s||(s=(0,w.Z)(["\n  &:not(:last-child) {\n    margin-right: 20px;\n  }  \n"]))),C=(0,b.ZP)(j.OL)(u||(u=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  font-weight: 400;  \n  font-size: 18px;\n  color: #2a363b;\n  text-decoration: none;\n\n  &.active {\n    color: #ff6b01;\n  }\n"]))),R=function(){var n,t,e=(0,x.TH)();return(0,y.jsxs)("div",{children:[(0,y.jsx)("h2",{children:"Additional information"}),(0,y.jsxs)(T,{children:[(0,y.jsx)(U,{children:(0,y.jsxs)(C,{to:"cast",state:{from:null===e||void 0===e||null===(n=e.state)||void 0===n?void 0:n.from},children:[(0,y.jsx)(g.Yt1,{style:{width:30,height:30}}),"Cast"]})}),(0,y.jsx)(U,{children:(0,y.jsxs)(C,{to:"reviews",state:{from:null===e||void 0===e||null===(t=e.state)||void 0===t?void 0:t.from},children:[(0,y.jsx)(g.Yt1,{style:{width:30,height:30}}),"Reviews"]})})]}),(0,y.jsx)(x.j3,{})]})},V=e(8565),z=function(){var n=(0,x.UO)().movieId,t=(0,h.useState)(null),e=(0,d.Z)(t,2),r=e[0],i=e[1],a=(0,h.useState)(!1),o=(0,d.Z)(a,2),c=o[0],s=o[1],u=(0,h.useState)(null),f=(0,d.Z)(u,2),g=f[0],w=f[1];return(0,h.useEffect)((function(){var t=function(){var t=(0,l.Z)(p().mark((function t(){var e;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.prev=1,t.next=4,(0,V.TP)(n);case 4:e=t.sent,i(e),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),w(t.t0),v.Am.error("Oops!...Something went wrong");case 12:return t.prev=12,s(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,8,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,y.jsxs)(y.Fragment,{children:[c&&(0,y.jsx)(m.a,{}),!g&&r&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(k,{}),(0,y.jsx)(S,{movie:r}),(0,y.jsx)(R,{})]})]})}},8565:function(n,t,e){e.d(t,{Df:function(){return u},V0:function(){return l},TP:function(){return d},M1:function(){return f},tx:function(){return p}});var r=e(5861),i=e(7757),a=e.n(i),o=e(4569),c=e.n(o);c().defaults.baseURL="https://api.themoviedb.org/3";var s="b4f947b22bfa1d671304279be6575e1f",u=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/trending/movie/day?api_key=".concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/search/movie?api_key=".concat(s,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"/credits?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=729.5bb98673.chunk.js.map