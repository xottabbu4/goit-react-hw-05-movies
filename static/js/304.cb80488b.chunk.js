"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{47:function(n,r,t){t.d(r,{e:function(){return l}});var e,a,u,c=t(689),s=t(168),i=t(444),o=t(87),p=i.ZP.ul(e||(e=(0,s.Z)(["\n  font-size: 20px;\n"]))),f=i.ZP.li(a||(a=(0,s.Z)(["\n  margin-bottom: 16px;\n"]))),d=(0,i.ZP)(o.OL)(u||(u=(0,s.Z)(["\n  color: #000000;\n  border-radius: 5px;\n  padding: 6px 12px;\n  display: inline-block;\n  \n  :hover,\n  :focus {\n    color: #dc1818;\n  }\n"]))),v=t(184),l=function(n){var r=n.movies,t=n.link,e=(0,c.TH)();return(0,v.jsx)(p,{children:r.map((function(n){var r=n.name,a=n.title,u=n.id;return(0,v.jsx)(f,{children:(0,v.jsx)(d,{to:"".concat(t).concat(u),state:{from:e},children:(0,v.jsx)("h3",{children:r||a})})},u)}))})}},304:function(n,r,t){t.r(r),t.d(r,{default:function(){return Z}});var e,a,u=t(861),c=t(439),s=t(757),i=t.n(s),o=t(791),p=t(168),f=t(444),d=f.ZP.main(e||(e=(0,p.Z)(["\n  padding: 48px 16px;\n  max-width: 1240px;\n  margin: 0 auto;\n"]))),v=f.ZP.h1(a||(a=(0,p.Z)(["\n  font-size: 32px;\n  text-align: center;\n  text-transform: uppercase;\n  color: #dc1818;\n  margin-bottom: 32px;\n"]))),l=t(390),x=t(483),m=t(47),h=t(184);function Z(){var n=(0,o.useState)([]),r=(0,c.Z)(n,2),t=r[0],e=r[1],a=(0,o.useState)(!1),s=(0,c.Z)(a,2),p=s[0],f=s[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,u.Z)(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f(!0),n.prev=1,n.next=4,(0,l.Df)();case 4:r=n.sent,e(r.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:return n.prev=11,f(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,h.jsxs)(d,{children:[(0,h.jsx)(v,{children:"Trending today"}),p?(0,h.jsx)(x.a,{}):(0,h.jsx)(m.e,{movies:t,link:"movies/"})]})}},390:function(n,r,t){t.d(r,{Df:function(){return s},M1:function(){return p},Pg:function(){return o},UN:function(){return i},tx:function(){return f}});var e=t(861),a=t(757),u=t.n(a),c=t(263);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"f785eee6664a474771b5bfb7f34a07af"};var s=function(){var n=(0,e.Z)(u().mark((function n(){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day",{params:{page:1}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie",{params:{query:r,page:1}});case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),o=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(r));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(r,"/credits"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.cast);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(r){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(r,"/reviews"));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=304.cb80488b.chunk.js.map