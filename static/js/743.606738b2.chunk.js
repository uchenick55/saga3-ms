"use strict";(self.webpackChunksaga3_ms=self.webpackChunksaga3_ms||[]).push([[743],{8957:function(e,n,t){t.d(n,{Z:function(){return b}});var r=t(2791),i=t(9434),s=t(2518),a=t(7874),c=(t(7632),t(8116)),l=t(184),d=(0,r.memo)((function(e){for(var n=e.totalPostsCount,t=e.pageSize,i=e.\u0441urrentPage,s=e.currentRangeLocal,a=e.portionSize,d=e.setPaginationData,o=Math.ceil(n/t),u=[],m=1;m<=o;m++)u.push(m);var h=1+a*(s-1),x=a*s,j=u.filter((function(e){return e>=h&&e<=x})),v=function(e){"prevPortion"===e&&s>1&&d({pageSize:t,"\u0441urrentPage":i,portionSize:a,currentRangeLocal:s-1}),"nextPortion"===e&&d({pageSize:t,"\u0441urrentPage":i,portionSize:a,currentRangeLocal:s+1})},f=(0,r.memo)(c.Z.Item),p=j.map((function(e){return(0,l.jsxs)(f,{active:e===i,onClick:function(){e!==i&&d({pageSize:t,"\u0441urrentPage":e,portionSize:a,currentRangeLocal:s})},children:[e," "]},e)}));return(0,l.jsx)("div",{children:(0,l.jsxs)(c.Z,{className:"pagination align-items-center justify-content-center",children:[" ",(0,l.jsx)(c.Z.Prev,{disabled:1===s,onClick:function(){v("prevPortion")}})," ",p," ",(0,l.jsx)(c.Z.Next,{disabled:Math.ceil(n/(t*a))<=s,onClick:function(){v("nextPortion")}})," "]})})})),o=function(e,n){return void 0!==n&&e.sort((function(e,t){var r=e.title.toLowerCase(),i=t.title.toLowerCase();return n?r>i?1:-1:r<i?1:-1})),e},u=t(2592),m=t(1087),h=(0,r.memo)((function(e){var n=e.email,t=(e.name,e.body);return(0,l.jsx)("div",{className:"d-flex justify-content-end",children:(0,l.jsxs)("div",{className:"card p-3 m-2",style:{width:"90%"},children:[(0,l.jsx)("b",{children:n}),(0,l.jsx)("div",{className:"d-flex justify-content-end",children:(0,l.jsx)("div",{style:{width:"90%"},children:t})})]})})})),x=t(3360),j=(0,r.memo)((function(e){var n=e.body,t=e.title,r=e.userId,s=e.avatar,a=e.id,c=e.getComments,d=(0,i.v9)((function(e){return e.allPosts.allComments})),o=(0,i.v9)((function(e){return e.allPosts.showComments})),j=d.filter((function(e){return e.postId===a}));return(0,l.jsxs)("div",{className:"my-4",children:[(0,l.jsx)(m.OL,{to:"/user-posts/"+r,children:(0,l.jsx)(u.Z,{fluid:!0,src:s,className:"float-start my-2 mx-4 shadow rounded",style:{width:"5rem"},alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",title:"\u0412\u0441\u0435 \u043f\u043e\u0441\u0442\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ".concat(r)})}),(0,l.jsx)("h5",{children:(0,l.jsx)("b",{children:t})}),(0,l.jsx)("div",{className:"flex-grow-1 ms-3",children:(0,l.jsxs)("div",{children:[" ",n," "]})}),(0,l.jsx)("div",{className:"d-flex justify-content-end my-2",children:(0,l.jsx)(x.Z,{className:"btn-sm btn-secondary",onClick:function(){c(a)},children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"})}),o.includes(a)&&j.map((function(e){var n=e.id,t=e.name,r=e.email,i=e.body;return(0,l.jsx)(h,{name:t,body:i,email:r},n)}))]})}));var v=t.p+"static/media/avatar-default.5dea226660157472ae3b2ae95d31764d.svg",f=function(e){var n=e.postsList,t=e.getComments;return(0,l.jsx)("div",{children:n.map((function(e,n){var r=e.body,i=e.id,s=e.title,a=e.userId;return(0,l.jsx)(j,{body:r,title:s,userId:a,avatar:v,id:i,getComments:t},n)}))})},p=function(e,n,t){return e.filter((function(e,r){return r>=n*(t-1)&&r<n*t}))},g=function(e,n){return e.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}))};var y=t.p+"static/media/not-found.a6a557b67b76d97c1bcdeba00fc9b904.svg",b=function(e){var n=e.postsList,t=(0,i.I0)(),c=(0,i.v9)((function(e){return e.allPosts.paginationData})),m=c.pageSize,h=c.\u0441urrentPage,x=c.currentRangeLocal,j=c.portionSize,v=s.eT.getCommentsByPostIdAC,b=s.eT.setPaginationDataAC,Z=(0,r.useCallback)((function(e){t(b(e))}),[t,b]),I=(0,r.useCallback)((function(e){t(v(e))}),[t,v]),P=structuredClone(n),C=(0,i.v9)((function(e){return e.app.isFetching})),N=(0,i.v9)((function(e){return e.allPosts.searchPostQuery})),w=(0,i.v9)((function(e){return e.allPosts.sortHeaderDirection})),L=g(P,N),z=o(L,w),S=p(z,m,h),D=(0,l.jsx)(d,{totalPostsCount:L.length,pageSize:m,"\u0441urrentPage":h,currentRangeLocal:x,portionSize:j,setPaginationData:Z}),k=(0,l.jsx)(f,{postsList:S,getComments:I});return(0,l.jsxs)("div",{children:[C&&(0,l.jsx)(a.Z,{})," ",S.length>0&&D," ",S.length>0?k:(0,l.jsx)("div",{className:"d-flex justify-content-center my-5",children:!C&&(0,l.jsxs)("div",{children:[(0,l.jsx)(u.Z,{src:y,style:{width:"7rem"},alt:"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e",title:"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"}),(0,l.jsx)("h3",{children:"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})]})})]})}},743:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(2791),i=t(9434),s=t(9723),a=t(8957),c=t(2518),l=t(7781),d=t(1413),o=t(7689),u=t(184),m=function(e){return function(n){var t=Number((0,o.UO)()["*"]);return(0,u.jsx)(e,(0,d.Z)((0,d.Z)({},n),{},{itemId:t}))}},h=t(8949),x=t(9743),j=t(2677),v=t(1398),f=function(e){var n,t,r=e.userData,i=r.id,s=r.name,a=r.username,c=r.email,l=r.address,d=r.phone,o=r.website,m=r.company;return(0,u.jsx)("div",{className:"my-3",children:(0,u.jsx)(h.Z,{defaultActiveKey:"0",children:(0,u.jsxs)(h.Z.Item,{eventKey:"0",children:[(0,u.jsx)(h.Z.Header,{children:(0,u.jsxs)("h4",{children:[s," "]})}),(0,u.jsx)(h.Z.Body,{children:(0,u.jsxs)(x.Z,{children:[(0,u.jsx)(j.Z,{className:"p-2",lg:3,md:6,children:(0,u.jsxs)(v.Z,{children:[(0,u.jsxs)(v.Z.Item,{variant:"primary",children:[(0,u.jsx)("b",{children:"id:"})," ",i]}),(0,u.jsxs)(v.Z.Item,{variant:"primary",children:[(0,u.jsx)("b",{children:"username:"})," ",a]}),(0,u.jsxs)(v.Z.Item,{variant:"primary",children:[(0,u.jsx)("b",{children:"email:"})," ",c]}),(0,u.jsxs)(v.Z.Item,{variant:"primary",children:[(0,u.jsx)("b",{children:"phone:"})," ",d]}),(0,u.jsxs)(v.Z.Item,{variant:"primary",children:[(0,u.jsx)("b",{children:"website:"})," ",o]})]})}),(0,u.jsx)(j.Z,{className:"p-2",lg:3,md:6,children:(0,u.jsxs)(v.Z,{children:[(0,u.jsx)(v.Z.Item,{variant:"primary",children:(0,u.jsx)("b",{children:"address"})}),(0,u.jsxs)(v.Z.Item,{variant:"secondary",children:[(0,u.jsx)("b",{children:"street:"})," ",null===l||void 0===l?void 0:l.street]}),(0,u.jsxs)(v.Z.Item,{variant:"secondary",children:[(0,u.jsx)("b",{children:"suite:"})," ",null===l||void 0===l?void 0:l.suite]}),(0,u.jsxs)(v.Z.Item,{variant:"secondary",children:[(0,u.jsx)("b",{children:"city:"})," ",null===l||void 0===l?void 0:l.city]}),(0,u.jsxs)(v.Z.Item,{variant:"secondary",children:[(0,u.jsx)("b",{children:"zipcode:"})," ",null===l||void 0===l?void 0:l.zipcode]})]})}),(0,u.jsx)(j.Z,{className:"p-2",lg:3,md:6,children:(0,u.jsxs)(v.Z,{children:[(0,u.jsx)(v.Z.Item,{variant:"primary",children:(0,u.jsx)("b",{children:"geo"})}),(0,u.jsxs)(v.Z.Item,{variant:"secondary",children:[(0,u.jsx)("b",{children:"lat:"}),null===l||void 0===l||null===(n=l.geo)||void 0===n?void 0:n.lat," "]}),(0,u.jsxs)(v.Z.Item,{variant:"secondary",children:[(0,u.jsx)("b",{children:"lng:"}),null===l||void 0===l||null===(t=l.geo)||void 0===t?void 0:t.lng]})]})}),(0,u.jsx)(j.Z,{className:"p-2",lg:3,md:6,children:(0,u.jsxs)(v.Z,{children:[(0,u.jsx)(v.Z.Item,{variant:"primary",children:(0,u.jsx)("b",{children:"company"})}),(0,u.jsxs)(v.Z.Item,{variant:"secondary",children:[(0,u.jsx)("b",{children:"name:"})," ",null===m||void 0===m?void 0:m.name]}),(0,u.jsxs)(v.Z.Item,{variant:"secondary",children:[(0,u.jsx)("b",{children:"catchPhrase:"})," ",null===m||void 0===m?void 0:m.catchPhrase]}),(0,u.jsxs)(v.Z.Item,{variant:"secondary",children:[(0,u.jsx)("b",{children:"bs:"})," ",null===m||void 0===m?void 0:m.bs]})]})})]})})]})})})},p=(0,l.qC)(m)((function(e){var n=e.itemId,t=(0,i.I0)(),l=(0,i.v9)((function(e){return e.allPosts.allPosts})),d=(0,i.v9)((function(e){return e.user.userData})),o=l.filter((function(e){return e.userId===n}));return(0,r.useEffect)((function(){t(s.hI.getUserDataAC(n)),t(c.eT.setPaginationDataAC(c.wZ.paginationData))}),[t,n]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{className:"d-flex justify-content-center",children:"\u041e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435"}),(0,u.jsx)(f,{userData:d}),(0,u.jsx)("h4",{className:"d-flex justify-content-center",children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u0441\u0442\u044b"}),(0,u.jsx)(a.Z,{postsList:o})]})}))}}]);
//# sourceMappingURL=743.606738b2.chunk.js.map