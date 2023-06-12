"use strict";(self.webpackChunksaga3_ms=self.webpackChunksaga3_ms||[]).push([[232],{7853:function(e,n,i){i.d(n,{Z:function(){return B}});var t=i(2791),s=i(9434),r=i(2518),a=i(7874),l=(i(7632),i(1413)),o=i(5987),c=i(1694),d=i.n(c),u=i(162),v=i(1691),h=i(184),f=["active","disabled","className","style","activeLabel","children"],m=["children"],x=t.forwardRef((function(e,n){var i=e.active,t=void 0!==i&&i,s=e.disabled,r=void 0!==s&&s,a=e.className,c=e.style,u=e.activeLabel,m=void 0===u?"(current)":u,x=e.children,j=(0,o.Z)(e,f),P=t||r?"span":v.Z;return(0,h.jsx)("li",{ref:n,style:c,className:d()(a,"page-item",{active:t,disabled:r}),children:(0,h.jsxs)(P,(0,l.Z)((0,l.Z)({className:"page-link"},j),{},{children:[x,t&&m&&(0,h.jsx)("span",{className:"visually-hidden",children:m})]}))})}));x.displayName="PageItem";var j=x;function P(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,s=t.forwardRef((function(e,t){var s=e.children,r=(0,o.Z)(e,m);return(0,h.jsxs)(x,(0,l.Z)((0,l.Z)({},r),{},{ref:t,children:[(0,h.jsx)("span",{"aria-hidden":"true",children:s||n}),(0,h.jsx)("span",{className:"visually-hidden",children:i})]}))}));return s.displayName=e,s}var g=P("First","\xab"),C=P("Prev","\u2039","Previous"),p=P("Ellipsis","\u2026","More"),b=P("Next","\u203a"),y=P("Last","\xbb"),L=["bsPrefix","className","size"],N=t.forwardRef((function(e,n){var i=e.bsPrefix,t=e.className,s=e.size,r=(0,o.Z)(e,L),a=(0,u.vE)(i,"pagination");return(0,h.jsx)("ul",(0,l.Z)((0,l.Z)({ref:n},r),{},{className:d()(t,a,s&&"".concat(a,"-").concat(s))}))}));N.displayName="Pagination";var I=Object.assign(N,{First:g,Prev:C,Ellipsis:p,Item:j,Next:b,Last:y}),Z="Pagination_pagination__JB8vP",S=(0,t.memo)((function(e){var n=e.TotalPostsCount,i=e.PageSize,s=e.CurrentPage,r=e.CurrentRangeLocal,a=e.PortionSize,l=e.setPaginationData;console.log("PaginationBS");for(var o=Math.ceil(n/i),c=[],d=1;d<=o;d++)c.push(d);var u=1+a*(r-1),v=a*r,f=c.filter((function(e){return e>=u&&e<=v})),m=function(e){"prevPortion"===e&&r>1&&l({PageSize:i,CurrentPage:s,PortionSize:a,CurrentRangeLocal:r-1}),"nextPortion"===e&&l({PageSize:i,CurrentPage:s,PortionSize:a,CurrentRangeLocal:r+1})},x=(0,t.memo)(I.Item),j=f.map((function(e){return(0,h.jsxs)(x,{active:e===s,onClick:function(){e!==s&&l({PageSize:i,CurrentPage:e,PortionSize:a,CurrentRangeLocal:r})},children:[e," "]},e)}));return(0,h.jsx)("div",{className:Z,children:(0,h.jsxs)(I,{className:"pagination align-items-center justify-content-center",children:[" ",(0,h.jsx)(I.Prev,{disabled:1===r,onClick:function(){m("prevPortion")}})," ",j," ",(0,h.jsx)(I.Next,{disabled:Math.ceil(n/(i*a))<=r,onClick:function(){m("nextPortion")}})," "]})})})),z=function(e,n){return void 0!==n&&e.sort((function(e,i){var t=e.title.toLowerCase(),s=i.title.toLowerCase();return n?t>s?1:-1:t<s?1:-1})),e},w=i(2592),D=i(1087),k=(0,t.memo)((function(e){var n=e.email,i=(e.name,e.body);return console.log("\u043c\u0430\u043f\u0438\u043d\u0433 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432"),(0,h.jsxs)("div",{children:[(0,h.jsx)("b",{children:n}),(0,h.jsx)("div",{children:i})]})})),R=i(5507),A=(0,t.memo)((function(e){var n=e.body,i=e.title,t=e.userId,r=e.Avatar,a=e.id,l=e.getComments;console.log("PostItem");var o=(0,s.v9)((function(e){return e.allPosts.AllComments})),c=(0,s.v9)((function(e){return e.allPosts.ShowComments})),d=o.filter((function(e){return e.postId===a}));return(0,h.jsxs)("div",{children:[(0,h.jsx)(D.OL,{to:"/user-posts/"+t,children:(0,h.jsx)(w.Z,{fluid:!0,src:r,className:R.Z.PostItemImage,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",title:"\u0412\u0441\u0435 \u043f\u043e\u0441\u0442\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ".concat(t)})}),(0,h.jsxs)("h3",{children:[" ",i," "]}),(0,h.jsxs)("div",{children:[" ",n," "]}),(0,h.jsx)("button",{onClick:function(){l(a)},children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"}),c.includes(a)&&d.map((function(e){var n=e.id,i=e.name,t=e.email,s=e.body;return(0,h.jsx)(k,{name:i,body:s,email:t},n)}))]})}));var U=i.p+"static/media/avatar-default.5dea226660157472ae3b2ae95d31764d.svg",E=function(e){var n=e.PostsList,i=e.getComments;return console.log("RenderPosts"),(0,h.jsx)("div",{children:n.map((function(e,n){var t=e.body,s=e.id,r=e.title,a=e.userId;return(0,h.jsx)(A,{body:t,title:r,userId:a,Avatar:U,id:s,getComments:i},n)}))})},_=function(e,n,i){return e.filter((function(e,t){return t>=n*(i-1)&&t<n*i}))},K=function(e,n){return e.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}))},B=function(e){var n=e.PostsList;console.log("PostsListRender");var i=(0,s.I0)(),l=(0,s.v9)((function(e){return e.allPosts.PaginationData})),o=l.PageSize,c=l.CurrentPage,d=l.CurrentRangeLocal,u=l.PortionSize,v=(0,t.useCallback)((function(e){i(m(e))}),[]),f=r.uK.getCommentsByPostIdAC,m=r.uK.setPaginationDataAC,x=(r.uK.setSortHeaderDirectionAC,(0,t.useCallback)((function(e){i(f(e))}),[])),j=(0,s.v9)((function(e){return e.app.isFetching})),P=structuredClone(n),g=(0,s.v9)((function(e){return e.allPosts.SearchPostQuery})),C=(0,s.v9)((function(e){return e.allPosts.SortHeaderDirection})),p=K(P,g),b=z(p,C),y=_(b,o,c),L=(0,h.jsx)(S,{TotalPostsCount:p.length,PageSize:o,CurrentPage:c,CurrentRangeLocal:d,PortionSize:u,setPaginationData:v}),N=(0,h.jsx)(E,{PostsList:y,getComments:x});return(0,h.jsxs)("div",{children:[j&&(0,h.jsx)(a.Z,{})," ",L," ",y.length>0?N:(0,h.jsx)("div",{children:"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})}},9232:function(e,n,i){i.r(n),i.d(n,{default:function(){return f}});var t=i(2791),s=i(9434),r=i(9723),a=i(7853),l=i(2518),o=i(7781),c=i(1413),d=i(7689),u=i(184),v=function(e){return function(n){var i=Number((0,d.UO)()["*"]);return(0,u.jsx)(e,(0,c.Z)((0,c.Z)({},n),{},{ItemId:i}))}},h=function(e){var n,i,t=e.UserData,s=t.id,r=t.name,a=t.username,l=t.email,o=t.address,c=t.phone,d=t.website,v=t.company;return(0,u.jsx)("div",{children:(0,u.jsxs)("ul",{children:[(0,u.jsxs)("li",{children:["id: ",s]}),(0,u.jsxs)("li",{children:["name: ",r]}),(0,u.jsxs)("li",{children:["username: ",a]}),(0,u.jsxs)("li",{children:["email: ",l]}),(0,u.jsxs)("li",{children:[(0,u.jsx)("b",{children:"address"}),(0,u.jsxs)("ul",{children:[(0,u.jsxs)("li",{children:[" street: ",null===o||void 0===o?void 0:o.street]}),(0,u.jsxs)("li",{children:[" suite: ",null===o||void 0===o?void 0:o.suite]}),(0,u.jsxs)("li",{children:[" city: ",null===o||void 0===o?void 0:o.city]}),(0,u.jsxs)("li",{children:[" zipcode: ",null===o||void 0===o?void 0:o.zipcode]}),(0,u.jsxs)("li",{children:[(0,u.jsx)("b",{children:"geo"}),(0,u.jsxs)("ul",{children:[(0,u.jsxs)("li",{children:[" ",null===o||void 0===o||null===(n=o.geo)||void 0===n?void 0:n.lat,"  "]}),(0,u.jsxs)("li",{children:[" ",null===o||void 0===o||null===(i=o.geo)||void 0===i?void 0:i.lng,"  "]})]})]})]})]}),(0,u.jsxs)("li",{children:["phone: ",c]}),(0,u.jsxs)("li",{children:["website: ",d]}),(0,u.jsxs)("div",{children:[(0,u.jsx)("b",{children:"company"}),(0,u.jsxs)("ul",{children:[(0,u.jsxs)("li",{children:[" name: ",null===v||void 0===v?void 0:v.name]}),(0,u.jsxs)("li",{children:[" catchPhrase: ",null===v||void 0===v?void 0:v.catchPhrase]}),(0,u.jsxs)("li",{children:[" bs: ",null===v||void 0===v?void 0:v.bs]})]})]})]})})},f=(0,o.qC)(v)((function(e){var n=e.ItemId;console.log("UserPosts");var i=(0,s.I0)(),o=(0,s.v9)((function(e){return e.allPosts.AllPosts})),c=(0,s.v9)((function(e){return e.user.UserData})),d=o.filter((function(e){return e.userId===n}));return(0,t.useEffect)((function(){i(r.EJ.getUserDataAC(n)),i(l.uK.setPaginationDataAC(l.wZ.PaginationData))}),[i,n]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435"}),(0,u.jsx)(h,{UserData:c}),(0,u.jsx)(a.Z,{PostsList:d})]})}))}}]);
//# sourceMappingURL=232.72adfd7a.chunk.js.map