"use strict";(self.webpackChunksaga3_ms=self.webpackChunksaga3_ms||[]).push([[647],{9770:function(e,n,a){a.r(n),a.d(n,{default:function(){return ie}});var r=a(2791),s=a(9434),i=a(9723),t=a(829),c=a(2518),o=a(7781),l=a(1413),d=a(7689),v=a(184),u=function(e){return function(n){var a=Number((0,d.UO)()["*"]);return(0,v.jsx)(e,(0,l.Z)((0,l.Z)({},n),{},{ItemId:a}))}},x=a(5987),m=a(1694),f=a.n(m),h=a(239),y=a(162),j=a(7858);function b(e,n){return Array.isArray(e)?e.includes(n):e===n}var p=r.createContext({});p.displayName="AccordionContext";var N=p,Z=["as","bsPrefix","className","children","eventKey"],E=r.forwardRef((function(e,n){var a=e.as,s=void 0===a?"div":a,i=e.bsPrefix,t=e.className,c=e.children,o=e.eventKey,d=(0,x.Z)(e,Z),u=(0,r.useContext)(N).activeEventKey;return i=(0,y.vE)(i,"accordion-collapse"),(0,v.jsx)(j.Z,(0,l.Z)((0,l.Z)({ref:n,in:b(u,o)},d),{},{className:f()(t,i),children:(0,v.jsx)(s,{children:r.Children.only(c)})}))}));E.displayName="AccordionCollapse";var I=E,P=r.createContext({eventKey:""});P.displayName="AccordionItemContext";var C=P,g=["as","bsPrefix","className","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],K=r.forwardRef((function(e,n){var a=e.as,s=void 0===a?"div":a,i=e.bsPrefix,t=e.className,c=e.onEnter,o=e.onEntering,d=e.onEntered,u=e.onExit,m=e.onExiting,h=e.onExited,j=(0,x.Z)(e,g);i=(0,y.vE)(i,"accordion-body");var b=(0,r.useContext)(C).eventKey;return(0,v.jsx)(I,{eventKey:b,onEnter:c,onEntering:o,onEntered:d,onExit:u,onExiting:m,onExited:h,children:(0,v.jsx)(s,(0,l.Z)((0,l.Z)({ref:n},j),{},{className:f()(t,i)}))})}));K.displayName="AccordionBody";var w=K,A=a(3433),k=["as","bsPrefix","className","onClick"];var R=r.forwardRef((function(e,n){var a=e.as,s=void 0===a?"button":a,i=e.bsPrefix,t=e.className,c=e.onClick,o=(0,x.Z)(e,k);i=(0,y.vE)(i,"accordion-button");var d=(0,r.useContext)(C).eventKey,u=function(e,n){var a=(0,r.useContext)(N),s=a.activeEventKey,i=a.onSelect,t=a.alwaysOpen;return function(a){var r=e===s?null:e;t&&(r=Array.isArray(s)?s.includes(e)?s.filter((function(n){return n!==e})):[].concat((0,A.Z)(s),[e]):[e]),null==i||i(r,a),null==n||n(a)}}(d,c),m=(0,r.useContext)(N).activeEventKey;return"button"===s&&(o.type="button"),(0,v.jsx)(s,(0,l.Z)((0,l.Z)({ref:n,onClick:u},o),{},{"aria-expanded":Array.isArray(m)?m.includes(d):d===m,className:f()(t,i,!b(m,d)&&"collapsed")}))}));R.displayName="AccordionButton";var z=R,D=["as","bsPrefix","className","children","onClick"],O=r.forwardRef((function(e,n){var a=e.as,r=void 0===a?"h2":a,s=e.bsPrefix,i=e.className,t=e.children,c=e.onClick,o=(0,x.Z)(e,D);return s=(0,y.vE)(s,"accordion-header"),(0,v.jsx)(r,(0,l.Z)((0,l.Z)({ref:n},o),{},{className:f()(i,s),children:(0,v.jsx)(z,{onClick:c,children:t})}))}));O.displayName="AccordionHeader";var S=O,U=["as","bsPrefix","className","eventKey"],B=r.forwardRef((function(e,n){var a=e.as,s=void 0===a?"div":a,i=e.bsPrefix,t=e.className,c=e.eventKey,o=(0,x.Z)(e,U);i=(0,y.vE)(i,"accordion-item");var d=(0,r.useMemo)((function(){return{eventKey:c}}),[c]);return(0,v.jsx)(C.Provider,{value:d,children:(0,v.jsx)(s,(0,l.Z)((0,l.Z)({ref:n},o),{},{className:f()(t,i)}))})}));B.displayName="AccordionItem";var G=B,H=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],L=r.forwardRef((function(e,n){var a=(0,h.Ch)(e,{activeKey:"onSelect"}),s=a.as,i=void 0===s?"div":s,t=a.activeKey,c=a.bsPrefix,o=a.className,d=a.onSelect,u=a.flush,m=a.alwaysOpen,j=(0,x.Z)(a,H),b=(0,y.vE)(c,"accordion"),p=(0,r.useMemo)((function(){return{activeEventKey:t,onSelect:d,alwaysOpen:m}}),[t,d,m]);return(0,v.jsx)(N.Provider,{value:p,children:(0,v.jsx)(i,(0,l.Z)((0,l.Z)({ref:n},j),{},{className:f()(o,b,u&&"".concat(b,"-flush"))}))})}));L.displayName="Accordion";var M=Object.assign(L,{Button:z,Collapse:I,Item:G,Header:S,Body:w}),_=["bsPrefix","className","as"],q=r.forwardRef((function(e,n){var a=e.bsPrefix,r=e.className,s=e.as,i=void 0===s?"div":s,t=(0,x.Z)(e,_),c=(0,y.vE)(a,"row"),o=(0,y.pi)(),d=(0,y.zG)(),u="".concat(c,"-cols"),m=[];return o.forEach((function(e){var n,a=t[e];delete t[e],n=null!=a&&"object"===typeof a?a.cols:a;var r=e!==d?"-".concat(e):"";null!=n&&m.push("".concat(u).concat(r,"-").concat(n))})),(0,v.jsx)(i,(0,l.Z)((0,l.Z)({ref:n},t),{},{className:f().apply(void 0,[r,c].concat(m))}))}));q.displayName="Row";var J=q,F=a(2677),Q=(a(2391),a(7503)),T=a(9439),V=a(9007),W=a(4787),X=a(8633),Y=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],$=r.forwardRef((function(e,n){var a=e.bsPrefix,r=e.active,s=e.disabled,i=e.eventKey,t=e.className,c=e.variant,o=e.action,d=e.as,u=(0,x.Z)(e,Y);a=(0,y.vE)(a,"list-group-item");var m=(0,W.v)((0,l.Z)({key:(0,X.h)(i,u.href),active:r},u)),h=(0,T.Z)(m,2),j=h[0],b=h[1],p=(0,V.Z)((function(e){if(s)return e.preventDefault(),void e.stopPropagation();j.onClick(e)}));s&&void 0===u.tabIndex&&(u.tabIndex=-1,u["aria-disabled"]=!0);var N=d||(o?u.href?"a":"button":"div");return(0,v.jsx)(N,(0,l.Z)((0,l.Z)((0,l.Z)({ref:n},u),j),{},{onClick:p,className:f()(t,a,b.isActive&&"active",s&&"disabled",c&&"".concat(a,"-").concat(c),o&&"".concat(a,"-action"))}))}));$.displayName="ListGroupItem";var ee=$,ne=["className","bsPrefix","variant","horizontal","numbered","as"],ae=r.forwardRef((function(e,n){var a,r=(0,h.Ch)(e,{activeKey:"onSelect"}),s=r.className,i=r.bsPrefix,t=r.variant,c=r.horizontal,o=r.numbered,d=r.as,u=void 0===d?"div":d,m=(0,x.Z)(r,ne),j=(0,y.vE)(i,"list-group");return c&&(a=!0===c?"horizontal":"horizontal-".concat(c)),(0,v.jsx)(Q.Z,(0,l.Z)((0,l.Z)({ref:n},m),{},{as:u,className:f()(s,j,t&&"".concat(j,"-").concat(t),a&&"".concat(j,"-").concat(a),o&&"".concat(j,"-numbered"))}))}));ae.displayName="ListGroup";var re=Object.assign(ae,{Item:ee}),se=function(e){var n,a,r=e.UserData,s=r.id,i=r.name,t=r.username,c=r.email,o=r.address,l=r.phone,d=r.website,u=r.company;return(0,v.jsx)("div",{className:"my-3",children:(0,v.jsx)(M,{defaultActiveKey:"0",children:(0,v.jsxs)(M.Item,{eventKey:"0",children:[(0,v.jsx)(M.Header,{children:(0,v.jsxs)("h4",{children:[i," "]})}),(0,v.jsx)(M.Body,{children:(0,v.jsxs)(J,{children:[(0,v.jsx)(F.Z,{className:"p-2",lg:3,md:6,children:(0,v.jsxs)(re,{children:[(0,v.jsxs)(re.Item,{variant:"primary",children:[(0,v.jsx)("b",{children:"id:"})," ",s]}),(0,v.jsxs)(re.Item,{variant:"primary",children:[(0,v.jsx)("b",{children:"username:"})," ",t]}),(0,v.jsxs)(re.Item,{variant:"primary",children:[(0,v.jsx)("b",{children:"email:"})," ",c]}),(0,v.jsxs)(re.Item,{variant:"primary",children:[(0,v.jsx)("b",{children:"phone:"})," ",l]}),(0,v.jsxs)(re.Item,{variant:"primary",children:[(0,v.jsx)("b",{children:"website:"})," ",d]})]})}),(0,v.jsx)(F.Z,{className:"p-2",lg:3,md:6,children:(0,v.jsxs)(re,{children:[(0,v.jsx)(re.Item,{variant:"primary",children:(0,v.jsx)("b",{children:"address"})}),(0,v.jsxs)(re.Item,{variant:"secondary",children:[(0,v.jsx)("b",{children:"street:"})," ",null===o||void 0===o?void 0:o.street]}),(0,v.jsxs)(re.Item,{variant:"secondary",children:[(0,v.jsx)("b",{children:"suite:"})," ",null===o||void 0===o?void 0:o.suite]}),(0,v.jsxs)(re.Item,{variant:"secondary",children:[(0,v.jsx)("b",{children:"city:"})," ",null===o||void 0===o?void 0:o.city]}),(0,v.jsxs)(re.Item,{variant:"secondary",children:[(0,v.jsx)("b",{children:"zipcode:"})," ",null===o||void 0===o?void 0:o.zipcode]})]})}),(0,v.jsx)(F.Z,{className:"p-2",lg:3,md:6,children:(0,v.jsxs)(re,{children:[(0,v.jsx)(re.Item,{variant:"primary",children:(0,v.jsx)("b",{children:"geo"})}),(0,v.jsxs)(re.Item,{variant:"secondary",children:[(0,v.jsx)("b",{children:"lat:"}),null===o||void 0===o||null===(n=o.geo)||void 0===n?void 0:n.lat," "]}),(0,v.jsxs)(re.Item,{variant:"secondary",children:[(0,v.jsx)("b",{children:"lng:"}),null===o||void 0===o||null===(a=o.geo)||void 0===a?void 0:a.lng]})]})}),(0,v.jsx)(F.Z,{className:"p-2",lg:3,md:6,children:(0,v.jsxs)(re,{children:[(0,v.jsx)(re.Item,{variant:"primary",children:(0,v.jsx)("b",{children:"company"})}),(0,v.jsxs)(re.Item,{variant:"secondary",children:[(0,v.jsx)("b",{children:"name:"})," ",null===u||void 0===u?void 0:u.name]}),(0,v.jsxs)(re.Item,{variant:"secondary",children:[(0,v.jsx)("b",{children:"catchPhrase:"})," ",null===u||void 0===u?void 0:u.catchPhrase]}),(0,v.jsxs)(re.Item,{variant:"secondary",children:[(0,v.jsx)("b",{children:"bs:"})," ",null===u||void 0===u?void 0:u.bs]})]})})]})})]})})})},ie=(0,o.qC)(u)((function(e){var n=e.ItemId;console.log("UserPosts");var a=(0,s.I0)(),o=(0,s.v9)((function(e){return e.allPosts.AllPosts})),l=(0,s.v9)((function(e){return e.user.UserData})),d=o.filter((function(e){return e.userId===n}));return(0,r.useEffect)((function(){a(i.EJ.getUserDataAC(n)),a(c.uK.setPaginationDataAC(c.wZ.PaginationData))}),[a,n]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{className:"d-flex justify-content-center",children:"\u041e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435"}),(0,v.jsx)(se,{UserData:l}),(0,v.jsx)(t.Z,{PostsList:d})]})}))}}]);
//# sourceMappingURL=647.81a1228d.chunk.js.map