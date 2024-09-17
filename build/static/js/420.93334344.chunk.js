"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[420],{420:(e,s,n)=>{n.r(s),n.d(s,{default:()=>f});var r=n(43),t=n(688),a=n(837),c=n(347),l=n(630),o=n(579);function i(e){const s=(0,r.useRef)(),{center:n,zoom:t}=e;return(0,r.useEffect)((()=>{const e=new window.google.maps.Map(s.current,{center:n,zoom:t});new window.google.maps.Marker({position:n,map:e})}),[n,t]),(0,o.jsx)("div",{ref:s,className:`map ${e.className}`,style:e.style})}var d=n(886),h=n(662),u=n(626),m=n(863);function x(e){const s=(0,r.useContext)(d.c),{isLoading:n,error:t,sendRequest:x,clearError:j}=(0,h.x)(),[f,p]=(0,r.useState)(!1),[g,v]=(0,r.useState)(!1),C=()=>p(!1),A=()=>v(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.A,{error:t,onClear:j}),(0,o.jsx)(l.A,{show:f,onCancel:C,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:(0,o.jsx)(c.A,{onClick:C,children:"CLOSE"}),children:(0,o.jsx)("div",{className:"map-container",children:(0,o.jsx)(i,{center:e.coordinates,zoom:16})})}),(0,o.jsx)(l.A,{show:g,onCancel:A,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.A,{inverse:!0,onClick:A,children:"Cancel"}),(0,o.jsx)(c.A,{danger:!0,onClick:async()=>{v(!1);try{await x(`http://localhost:8080/api/places/${e.id}`,"DELETE",null,{Authorization:"Bearer "+s.token}),e.onDelete(e.id)}catch(n){}},children:"Delete"})]}),children:(0,o.jsx)("p",{children:"Do you want to proceed and delete this place?"})}),(0,o.jsxs)("li",{className:"place-item",children:[n&&(0,o.jsx)(m.A,{asOverlay:!0}),(0,o.jsxs)(a.A,{className:"place-item__content",children:[(0,o.jsx)("div",{className:"place-item__image",children:(0,o.jsx)("img",{src:`http://localhost:8080/${e.image}`,alt:e.title})}),(0,o.jsxs)("div",{className:"place-item__info",children:[(0,o.jsx)("h2",{children:e.title}),(0,o.jsx)("h3",{children:e.address}),(0,o.jsx)("p",{children:e.description})]}),(0,o.jsxs)("div",{className:"place-item__actions",children:[(0,o.jsx)(c.A,{inverse:!0,onClick:()=>p(!0),children:"VIEW ON MAP"}),s.userId===e.creatorId&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.A,{to:`/places/${e.id}`,children:"EDIT"}),(0,o.jsx)(c.A,{danger:!0,onClick:()=>v(!0),children:"DELETE"})]})]})]})]})]})}function j(e){return 0===e.items.length?(0,o.jsx)("div",{className:"place-list center",children:(0,o.jsxs)(a.A,{children:[(0,o.jsx)("h2",{children:"No places found. Maybe create one?"}),(0,o.jsx)(c.A,{to:"/places/new",children:"Share Place"})]})}):(0,o.jsx)("ul",{className:"place-list",children:e.items.map((s=>(0,o.jsx)(x,{id:s.id,image:s.image,title:s.title,description:s.description,address:s.address,creatorId:s.creator,coordinates:s.location,onDelete:e.onDeletePlace},s.id)))})}function f(e){const[s,n]=(0,r.useState)(),{isLoading:a,error:c,sendRequest:l,clearError:i}=(0,h.x)(),d=(0,t.useParams)().userId;(0,r.useEffect)((()=>{(async()=>{try{const e=await l(`http://localhost:8080/api/places/user/${d}`);n(e.places)}catch(e){}})()}),[l,d]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.A,{error:c,onClear:i}),a&&(0,o.jsxs)("div",{className:"center",children:[(0,o.jsx)(m.A,{})," "]}),!a&&s&&(0,o.jsx)(j,{items:s,onDeletePlace:e=>{n((s=>s.filter((s=>s.id!==e))))}})]})}},347:(e,s,n)=>{n.d(s,{A:()=>a});n(43);var r=n(582),t=n(579);const a=e=>e.href?(0,t.jsx)("a",{className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,href:e.href,children:e.children}):e.to?(0,t.jsx)(r.N_,{to:e.to,exact:e.exact,className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,children:e.children}):(0,t.jsx)("button",{className:`button button--${e.size||"default"} ${e.inverse&&"button--inverse"} ${e.danger&&"button--danger"}`,type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})},837:(e,s,n)=>{n.d(s,{A:()=>t});n(43);var r=n(579);const t=e=>(0,r.jsx)("div",{className:`card ${e.className}`,style:e.style,children:e.children})},626:(e,s,n)=>{n.d(s,{A:()=>c});n(43);var r=n(630),t=n(347),a=n(579);const c=e=>(0,a.jsx)(r.A,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,a.jsx)(t.A,{onClick:e.onClear,children:"Okay"}),children:(0,a.jsx)("p",{children:e.error})})},630:(e,s,n)=>{n.d(s,{A:()=>o});n(43);var r=n(950),t=n(336),a=n(6),c=n(579);function l(e){const s=(0,c.jsxs)("div",{className:`modal ${e.className}`,style:e.style,children:[(0,c.jsx)("header",{className:`modal__header ${e.headerClass}`,children:(0,c.jsx)("h2",{children:e.header})}),(0,c.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:e=>e.preventDefault(),children:[(0,c.jsx)("div",{className:`modal__content ${e.contentClass}`,children:e.children}),(0,c.jsx)("footer",{className:`modal__footer ${e.footerClass}`,children:e.footer})]})]});return r.createPortal(s,document.getElementById("modal-hook"))}function o(e){return(0,c.jsxs)(c.Fragment,{children:[e.show&&(0,c.jsx)(a.A,{onClick:e.onCancel}),(0,c.jsx)(t.A,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,c.jsx)(l,{...e})})]})}},662:(e,s,n)=>{n.d(s,{x:()=>t});var r=n(43);const t=()=>{const[e,s]=(0,r.useState)(!1),[n,t]=(0,r.useState)(),a=(0,r.useRef)([]),c=(0,r.useCallback)((async function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};s(!0);const l=new AbortController;a.current.push(l);try{const t=await fetch(e,{method:n,body:r,headers:c,signal:l.signal}),o=await t.json();if(a.current=a.current.filter((e=>e!==l)),!t.ok)throw new Error(o.message);return s(!1),o}catch(o){throw t(o.message),s(!1),o}}),[]);return(0,r.useEffect)((()=>()=>{a.current.forEach((e=>e.abort()))}),[]),{isLoading:e,error:n,sendRequest:c,clearError:()=>{t(null)}}}}}]);
//# sourceMappingURL=420.93334344.chunk.js.map