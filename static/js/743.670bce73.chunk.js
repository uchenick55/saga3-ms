"use strict";(self.webpackChunksaga3_ms=self.webpackChunksaga3_ms||[]).push([[743],{8957:function(e,n,t){t.d(n,{Z:function(){return b}});var r=t(2791),s=t(9434),i=t(2518),a=t(7874),l=(t(7632),t(8116)),c=t(184),o=(0,r.memo)((function(e){var n=e.totalPostsCount,t=e.pageSize,s=e.\u0441urrentPage,i=e.currentRangeLocal,a=e.portionSize,o=e.setPaginationData;console.log("PaginationBS");for(var d=Math.ceil(n/t),u=[],m=1;m<=d;m++)u.push(m);var h=1+a*(i-1),x=a*i,j=u.filter((function(e){return e>=h&&e<=x})),v=function(e){"prevPortion"===e&&i>1&&o({pageSize:t,"\u0441urrentPage":s,portionSize:a,currentRangeLocal:i-1}),"nextPortion"===e&&o({pageSize:t,"\u0441urrentPage":s,portionSize:a,currentRangeLocal:i+1})},f=(0,r.memo)(l.Z.Item),g=j.map((function(e){return(0,c.jsxs)(f,{active:e===s,onClick:function(){e!==s&&o({pageSize:t,"\u0441urrentPage":e,portionSize:a,currentRangeLocal:i})},children:[e," "]},e)}));return(0,c.jsx)("div",{children:(0,c.jsxs)(l.Z,{className:"pagination align-items-center justify-content-center",children:[" ",(0,c.jsx)(l.Z.Prev,{disabled:1===i,onClick:function(){v("prevPortion")}})," ",g," ",(0,c.jsx)(l.Z.Next,{disabled:Math.ceil(n/(t*a))<=i,onClick:function(){v("nextPortion")}})," "]})})})),d=function(e,n){return void 0!==n&&e.sort((function(e,t){var r=e.title.toLowerCase(),s=t.title.toLowerCase();return n?r>s?1:-1:r<s?1:-1})),e},u=t(2592),m=t(1087),h=(0,r.memo)((function(e){var n=e.email,t=(e.name,e.body);return console.log("\u043c\u0430\u043f\u0438\u043d\u0433 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432"),(0,c.jsx)("div",{className:"d-flex justify-content-end",children:(0,c.jsxs)("div",{className:"card p-3 m-2",style:{width:"90%"},children:[(0,c.jsx)("b",{children:n}),(0,c.jsx)("div",{className:"d-flex justify-content-end",children:(0,c.jsx)("div",{style:{width:"90%"},children:t})})]})})})),x=t(3360),j=(0,r.memo)((function(e){var n=e.body,t=e.title,r=e.userId,i=e.avatar,a=e.id,l=e.getComments;console.log("PostItem");var o=(0,s.v9)((function(e){return e.allPosts.allComments})),d=(0,s.v9)((function(e){return e.allPosts.showComments})),j=o.filter((function(e){return e.postId===a}));return(0,c.jsxs)("div",{className:"my-4",children:[(0,c.jsx)(m.OL,{to:"/user-posts/"+r,children:(0,c.jsx)(u.Z,{fluid:!0,src:i,className:"float-start my-2 mx-4 shadow rounded",style:{width:"5rem"},alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",title:"\u0412\u0441\u0435 \u043f\u043e\u0441\u0442\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ".concat(r)})}),(0,c.jsx)("h5",{children:(0,c.jsx)("b",{children:t})}),(0,c.jsx)("div",{className:"flex-grow-1 ms-3",children:(0,c.jsxs)("div",{children:[" ",n," "]})}),(0,c.jsx)("div",{className:"d-flex justify-content-end my-2",children:(0,c.jsx)(x.Z,{className:"btn-sm btn-secondary",onClick:function(){l(a)},children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"})}),d.includes(a)&&j.map((function(e){var n=e.id,t=e.name,r=e.email,s=e.body;return(0,c.jsx)(h,{name:t,body:s,email:r},n)}))]})}));var v=t.p+"static/media/avatar-default.5dea226660157472ae3b2ae95d31764d.svg",f=function(e){var n=e.postsList,t=e.getComments;return console.log("RenderPosts"),(0,c.jsx)("div",{children:n.map((function(e,n){var r=e.body,s=e.id,i=e.title,a=e.userId;return(0,c.jsx)(j,{body:r,title:i,userId:a,avatar:v,id:s,getComments:t},n)}))})},g=function(e,n,t){return e.filter((function(e,r){return r>=n*(t-1)&&r<n*t}))},p=function(e,n){return e.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}))};var y=t.p+"static/media/not-found.a6a557b67b76d97c1bcdeba00fc9b904.svg",b=function(e){var n=e.postsList;console.log("PostsListRender");var t=(0,s.I0)(),l=(0,s.v9)((function(e){return e.allPosts.paginationData})),m=l.pageSize,h=l.\u0441urrentPage,x=l.currentRangeLocal,j=l.portionSize,v=(0,r.useCallback)((function(e){t(Z(e))}),[t]),b=i.eT.getCommentsByPostIdAC,Z=i.eT.setPaginationDataAC,P=(0,r.useCallback)((function(e){t(b(e))}),[t,b]),I=structuredClone(n),C=(0,s.v9)((function(e){return e.app.isFetching})),N=(0,s.v9)((function(e){return e.allPosts.searchPostQuery})),w=(0,s.v9)((function(e){return e.allPosts.sortHeaderDirection})),L=p(I,N),z=d(L,w),S=g(z,m,h),D=(0,c.jsx)(o,{totalPostsCount:L.length,pageSize:m,"\u0441urrentPage":h,currentRangeLocal:x,portionSize:j,setPaginationData:v}),k=(0,c.jsx)(f,{postsList:S,getComments:P});return(0,c.jsxs)("div",{children:[C&&(0,c.jsx)(a.Z,{})," ",S.length>0&&D," ",S.length>0?k:(0,c.jsx)("div",{className:"d-flex justify-content-center my-5",children:!C&&(0,c.jsxs)("div",{children:[(0,c.jsx)(u.Z,{src:y,style:{width:"7rem"},alt:"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e",title:"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),(0,c.jsx)("h3",{children:"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})})]})}},743:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(2791),s=t(9434),i=t(9723),a=t(8957),l=t(2518),c=t(7781),o=t(1413),d=t(7689),u=t(184),m=function(e){return function(n){var t=Number((0,d.UO)()["*"]);return(0,u.jsx)(e,(0,o.Z)((0,o.Z)({},n),{},{itemId:t}))}},h=t(8949),x=t(9743),j=t(2677),v=t(1398),f=function(e){var n,t,r=e.userData,s=r.id,i=r.name,a=r.username,l=r.email,c=r.address,o=r.phone,d=r.website,m=r.company;return(0,u.jsx)("div",{className:"my-3",children:(0,u.jsx)(h.Z,{defaultActiveKey:"0",children:(0,u.jsxs)(h.Z.Item,{eventKey:"0",children:[(0,u.jsx)(h.Z.Header,{children:(0,u.jsxs)("h4",{children:[i," "]})}),(0,u.jsx)(h.Z.Body,{children:(0,u.jsxs)(x.Z,{children:[(0,u.jsx)(j.Z,{className:"p-2",lg:3,md:6,children:(0,u.jsxs)(v.Z,{children:[(0,u.jsxs)(v.Z.Item,{variant:"primary",children:[(0,u.jsx)("b",{children:"id:"})," ",s]}),(0,u.jsxs)(v.Z.Item,{variant:"primary",children:[(0,u.jsx)("b",{children:"username:"})," ",a]}),(0,u.jsxs)(v.Z.Item,{variant:"primary",children:[(0,u.jsx)("b",{children:"email:"})," ",l]}),(0,u.jsxs)(v.Z.Item,{variant:"primary",children:[(0,u.jsx)("b",{children:"phone:"})," ",o]}),(0,u.jsxs)(v.Z.Item,{variant:"primary",children:[(0,u.jsx)("b",{children:"website:"})," ",d]})]})}),(0,u.jsx)(j.Z,{className:"p-2",lg:3,md:6,children:(0,u.jsxs)(v.Z,{children:[(0,u.jsx)(v.Z.Item,{variant:"primary",children:(0,u.jsx)("b",{children:"address"})}),(0,u.jsxs)(v.Z.Item,{variant:"secondary",children:[(0,u.jsx)("b",{children:"street:"})," ",null===c||void 0===c?void 0:c.street]}),(0,u.jsxs)(v.Z.Item,{variant:"secondary",children:[(0,u.jsx)("b",{children:"suite:"})," ",null===c||void 0===c?void 0:c.suite]}),(0,u.jsxs)(v.Z.Item,{variant:"secondary",children:[(0,u.jsx)("b",{children:"city:"})," ",null===c||void 0===c?void 0:c.city]}),(0,u.jsxs)(v.Z.Item,{variant:"secondary",children:[(0,u.jsx)("b",{children:"zipcode:"})," ",null===c||void 0===c?void 0:c.zipcode]})]})}),(0,u.jsx)(j.Z,{className:"p-2",lg:3,md:6,children:(0,u.jsxs)(v.Z,{children:[(0,u.jsx)(v.Z.Item,{variant:"primary",children:(0,u.jsx)("b",{children:"geo"})}),(0,u.jsxs)(v.Z.Item,{variant:"secondary",children:[(0,u.jsx)("b",{children:"lat:"}),null===c||void 0===c||null===(n=c.geo)||void 0===n?void 0:n.lat," "]}),(0,u.jsxs)(v.Z.Item,{variant:"secondary",children:[(0,u.jsx)("b",{children:"lng:"}),null===c||void 0===c||null===(t=c.geo)||void 0===t?void 0:t.lng]})]})}),(0,u.jsx)(j.Z,{className:"p-2",lg:3,md:6,children:(0,u.jsxs)(v.Z,{children:[(0,u.jsx)(v.Z.Item,{variant:"primary",children:(0,u.jsx)("b",{children:"company"})}),(0,u.jsxs)(v.Z.Item,{variant:"secondary",children:[(0,u.jsx)("b",{children:"name:"})," ",null===m||void 0===m?void 0:m.name]}),(0,u.jsxs)(v.Z.Item,{variant:"secondary",children:[(0,u.jsx)("b",{children:"catchPhrase:"})," ",null===m||void 0===m?void 0:m.catchPhrase]}),(0,u.jsxs)(v.Z.Item,{variant:"secondary",children:[(0,u.jsx)("b",{children:"bs:"})," ",null===m||void 0===m?void 0:m.bs]})]})})]})})]})})})},g=(0,c.qC)(m)((function(e){var n=e.itemId;console.log("UserPosts");var t=(0,s.I0)(),c=(0,s.v9)((function(e){return e.allPosts.allPosts})),o=(0,s.v9)((function(e){return e.user.userData})),d=c.filter((function(e){return e.userId===n}));return(0,r.useEffect)((function(){t(i.hI.getUserDataAC(n)),t(l.eT.setPaginationDataAC(l.wZ.paginationData))}),[t,n]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{className:"d-flex justify-content-center",children:"\u041e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435"}),(0,u.jsx)(f,{userData:o}),(0,u.jsx)("h4",{className:"d-flex justify-content-center",children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u0441\u0442\u044b"}),(0,u.jsx)(a.Z,{postsList:d})]})}))}}]);
//# sourceMappingURL=743.670bce73.chunk.js.map