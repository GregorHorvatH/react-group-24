(this["webpackJsonpreact-group-24"]=this["webpackJsonpreact-group-24"]||[]).push([[15],{18:function(e,t,n){"use strict";t.a={SHOP_FILTER_SET:"shop/filter/set",SHOP_CART_ADD:"shop/cart/add",SHOP_CART_DELETE:"shop/cart/delete",CART_INCREMENT:"cart/increment",CART_DECREMENT:"cart/decrement"}},26:function(e,t,n){"use strict";t.a={COUNTER_INCREMENT:"counter/increment",COUNTER_DECREMENT:"counter/decrement",COUNTER_SET_STEP:"counter/set_step"}},29:function(e,t,n){"use strict";t.a={TODO_ADD:"todo/add",TODO_DELETE:"todo/delete"}},43:function(e,t,n){"use strict";var o=n(0);t.a=Object(o.createContext)()},44:function(e,t,n){"use strict";var o=n(0);t.a=Object(o.createContext)()},50:function(e,t,n){e.exports={content:"content_content__3YICN"}},51:function(e,t,n){e.exports={app:"app_app__cewju"}},65:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(16),i=n.n(a),c=n(33),r=n(19),u=n(8),l=n(32),s=n(52),d=Object(o.lazy)((function(){return n.e(14).then(n.bind(null,206))})),p=Object(o.lazy)((function(){return Promise.all([n.e(1),n.e(13)]).then(n.bind(null,207))})),b=Object(o.lazy)((function(){return n.e(7).then(n.bind(null,208))})),h=Object(o.lazy)((function(){return n.e(3).then(n.bind(null,231))})),m=Object(o.lazy)((function(){return n.e(5).then(n.bind(null,230))})),O=Object(o.lazy)((function(){return n.e(10).then(n.bind(null,224))})),j=Object(o.lazy)((function(){return n.e(8).then(n.bind(null,232))})),f=Object(o.lazy)((function(){return Promise.all([n.e(1),n.e(12)]).then(n.bind(null,233))})),E=Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(18),n.e(11)]).then(n.bind(null,225))})),v=Object(o.lazy)((function(){return n.e(2).then(n.bind(null,220))})),_=[{path:"/",label:"Home",component:d,exact:!0,showInMenu:!0},{path:"/users",label:"Users",component:p,exact:!0,showInMenu:!0},{path:"/users/:id",label:"User Details",component:f},{path:"/home-works",label:"Home Works",component:b,showInMenu:!0},{path:"/books",label:"Books",component:h,showInMenu:!0},{path:"/counters",label:"Counters",component:m,showInMenu:!0},{path:"/tests",label:"Test",component:O,showInMenu:!0},{path:"/props-tests",label:"Props Test",component:j,showInMenu:!0},{path:"/todos",label:"Todos",component:E,showInMenu:!0},{path:"/hoc",label:"HOC",component:Object(o.lazy)((function(){return Promise.all([n.e(19),n.e(6)]).then(n.bind(null,226))})),showInMenu:!0},{path:"/shop",label:"Shop",component:Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,222))})),showInMenu:!0},{path:"/cart",label:"Cart",component:Object(o.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,227))})),showInMenu:!0},{path:"/about",label:"About",component:v,showInMenu:!0}],x=n(34),T=Object(x.a)({navigation:{display:"flex",flexDirection:"column",borderRight:"1px solid #000",listStyle:"none",margin:0,padding:10,minWidth:200,maxWidth:200,overflow:"auto"},link:{backgroundColor:"inherit",textDecoration:"none",padding:10,color:"#000","&:hover":{backgroundColor:"#e0dff2"}},activeLink:{backgroundColor:"#2f2e73",color:"#fff","&:hover":{backgroundColor:"#151433"}}}),y=n(3),g=function(){var e=T();return Object(y.jsx)("div",{className:e.navigation,children:_.map((function(t){var n=t.path,o=t.label;return t.showInMenu?Object(y.jsx)(r.c,{className:e.link,activeClassName:e.activeLink,to:n,exact:!0,children:o},n):null}))})},C=n(4),w=n(50),D=n.n(w),N=function(){return Object(y.jsx)("div",{className:D.a.content,children:Object(y.jsx)(o.Suspense,{fallback:Object(y.jsx)("p",{children:"Loading..."}),children:Object(y.jsx)(C.c,{children:_.map((function(e){var t=e.path,n=e.exact,o=e.component;return Object(y.jsx)(C.a,{path:t,exact:n,component:o},t)}))})})})},R=n(51),I=n.n(R),P=n(43),M=n(44),S=(n(64),{font:"Arial",fontSize:456}),k=function(){var e=Object(o.useState)({firstName:"Bobby",age:15}),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(y.jsx)("div",{className:I.a.app,children:Object(y.jsx)(M.a.Provider,{value:S,children:Object(y.jsxs)(P.a.Provider,{value:{user:n,addOneYear:function(){return a((function(e){return Object(u.a)(Object(u.a)({},e),{},{age:e.age+1})}))}},children:[Object(y.jsx)(g,{}),Object(y.jsx)(N,{}),Object(y.jsx)(s.a,{})]})})})},L=n(12),z=n(26),A=1,q=1,U=Object(L.b)({value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z.a.COUNTER_INCREMENT:return e+t.payload;case z.a.COUNTER_DECREMENT:return e-t.payload;default:return e}},step:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z.a.COUNTER_SET_STEP:return t.payload;default:return e}}}),H=n(23),X=n(29),B={x:0,items:[{id:2,value:"buy something",date:1614624203912,isDone:!1,urgency:"low"},{date:1615402045698,isDone:!1,value:"sdfgsg",urgency:"low",id:3},{date:1615402049177,isDone:!1,value:"e56y45yu",urgency:"low",id:4},{date:1615402053585,isDone:!1,value:"tuyikj75",urgency:"low",id:5}]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X.a.TODO_ADD:return Object(u.a)(Object(u.a)({},e),{},{items:[].concat(Object(H.a)(e.items),[t.payload])});case X.a.TODO_DELETE:return Object(u.a)(Object(u.a)({},e),{},{items:e.items.filter((function(e){return e.id!==t.payload}))});case"counter/increment":return Object(u.a)(Object(u.a)({},e),{},{x:e.x+1});default:return e}},F=n(18),J={items:[{id:1,name:"phone 1",price:5e3,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab optio explicabo cumque ut! Provident quasi, explicabo perferendis nobis vero pariatur architecto culpa laudantium praesentium perspiciatis tenetur commodi ex similique.",count:5},{id:2,name:"phone 2",price:7e3,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab optio explicabo cumque ut! Provident quasi, explicabo perferendis nobis vero pariatur architecto culpa laudantium praesentium perspiciatis tenetur commodi ex similique.",count:3},{id:3,name:"phone 3",price:8e3,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab optio explicabo cumque ut! Provident quasi, explicabo perferendis nobis vero pariatur architecto culpa laudantium praesentium perspiciatis tenetur commodi ex similique.",count:1},{id:4,name:"notebook 1",price:11e3,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab optio explicabo cumque ut! Provident quasi, explicabo perferendis nobis vero pariatur architecto culpa laudantium praesentium perspiciatis tenetur commodi ex similique.",count:2}],cart:[{id:1,productId:2,count:1},{id:2,productId:4,count:1}],filter:{}},V=Object(L.b)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J.items;return e},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J.cart,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.a.SHOP_CART_ADD:return[].concat(Object(H.a)(e),[t.payload]);case F.a.SHOP_CART_DELETE:return e.filter((function(e){return e.productId!==t.payload}));case F.a.CART_INCREMENT:return e.map((function(e){return e.id===t.payload?Object(u.a)(Object(u.a)({},e),{},{count:e.count+1}):e}));case F.a.CART_DECREMENT:return e.map((function(e){return e.id===t.payload?Object(u.a)(Object(u.a)({},e),{},{count:e.count-1<0?0:e.count-1}):e}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J.filter,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F.a.SHOP_FILTER_SET:return t.payload;default:return e}}}),Y=Object(L.b)({counter:U,todos:W,shop:V}),G=Object(L.c)(Y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(y.jsx)(r.a,{children:Object(y.jsx)(c.a,{store:G,children:Object(y.jsx)(k,{})})}),document.getElementById("root"))}},[[65,16,17]]]);
//# sourceMappingURL=main.6fed47a4.chunk.js.map