_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{AGzW:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){return n("eAkX")}])},MiFF:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("q1tI");function a(e,t){var n=Object(i.useState)(!1),a=n[0],o=n[1];return(0,i.useLayoutEffect)((function(){function n(){var n=window.document.getElementById(e).offsetHeight,i=window.document.getElementById(e).scrollTop;i>n*t&&o(!0),i<n*t&&o(!1)}return window.document.getElementById(e).addEventListener("scroll",n),n(),function(){return window.document.getElementById(e).removeEventListener("scroll",n)}}),[e]),a}},eAkX:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R}));var i=n("nKUr"),a=n("5Yp1"),o=n("rePB"),r=n("q1tI"),c=n("R/WZ"),s=n("lopY"),d=n("30+C"),l=n("tRbT"),b=n("wx14"),p=n("ODXe"),u=n("Ff2n"),m=(n("17x9"),n("dRu9")),j=n("wpWl"),h=n("tr08"),f=n("4Hym"),g=n("bfFb"),w={entering:{opacity:1},entered:{opacity:1}},O={enter:j.b.enteringScreen,exit:j.b.leavingScreen},x=r.forwardRef((function(e,t){var n=e.children,i=e.disableStrictModeCompat,a=void 0!==i&&i,o=e.in,c=e.onEnter,s=e.onEntered,d=e.onEntering,l=e.onExit,j=e.onExited,x=e.onExiting,v=e.style,y=e.TransitionComponent,E=void 0===y?m.a:y,k=e.timeout,T=void 0===k?O:k,N=Object(u.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),M=Object(h.a)(),S=M.unstable_strictMode&&!a,C=r.useRef(null),_=Object(g.a)(n.ref,t),B=Object(g.a)(S?C:void 0,_),A=function(e){return function(t,n){if(e){var i=S?[C.current,t]:[t,n],a=Object(p.a)(i,2),o=a[0],r=a[1];void 0===r?e(o):e(o,r)}}},L=A(d),R=A((function(e,t){Object(f.b)(e);var n=Object(f.a)({style:v,timeout:T},{mode:"enter"});e.style.webkitTransition=M.transitions.create("opacity",n),e.style.transition=M.transitions.create("opacity",n),c&&c(e,t)})),W=A(s),I=A(x),F=A((function(e){var t=Object(f.a)({style:v,timeout:T},{mode:"exit"});e.style.webkitTransition=M.transitions.create("opacity",t),e.style.transition=M.transitions.create("opacity",t),l&&l(e)})),H=A(j);return r.createElement(E,Object(b.a)({appear:!0,in:o,nodeRef:S?C:void 0,onEnter:R,onEntered:W,onEntering:L,onExit:F,onExited:H,onExiting:I,timeout:T},N),(function(e,t){return r.cloneElement(n,Object(b.a)({style:Object(b.a)({opacity:0,visibility:"exited"!==e||o?void 0:"hidden"},w[e],v,n.props.style),ref:B},t))}))})),v=n("iuhU"),y=n("H2TA"),E=r.forwardRef((function(e,t){var n=e.classes,i=e.className,a=e.component,o=void 0===a?"div":a,c=Object(u.a)(e,["classes","className","component"]);return r.createElement(o,Object(b.a)({className:Object(v.a)(n.root,i),ref:t},c))})),k=Object(y.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(E),T=n("ofer"),N=r.forwardRef((function(e,t){var n=e.disableSpacing,i=void 0!==n&&n,a=e.classes,o=e.className,c=Object(u.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(b.a)({className:Object(v.a)(a.root,o,!i&&a.spacing),ref:t},c))})),M=Object(y.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(N),S=n("Z3vd"),C=n("OrM8"),_=n("MiFF"),B=[{id:1,mobile:"dewetourmobile.jpg",web:"dewetourweb.png",Link:"https://dewetour.vercel.app/",title:"Dewe Tour",description:"Find beautiful place with dewe tour, Dewe Tour is an application to find beautiful places, just from your hand. this app build using node js, postgres, express, next js"},{id:2,mobile:"thejourney.jpg",web:"thejourneyweb.png",Link:"https://thejourney.vercel.app/",title:"The Journey",description:"We made a tool so you can easily keep & share your travel memories. But there is a lot more. this app build using node js, postgres, express, next js"},{id:3,mobile:"socialappmobile.png",web:"socialappweb.png",title:"Social App",Link:"http://anf-socialapp.netlify.app",description:"SocialApp is web application, that allows you to create or delete post, you can also  create comment to another user, this apps build with node js, graphql and reactjs"}];function A(){var e=L(),t=Object(h.a)(),n=Object(s.a)(t.breakpoints.up("lg"));Object(_.a)("header",.3);return Object(i.jsxs)(d.a,{component:"header",id:"header",className:e.mainContainer,children:[Object(i.jsx)(l.a,{container:!0,spacing:0,className:e.boxContainer,children:B.map((function(t,n){return Object(i.jsx)(l.a,{item:!0,xs:12,sm:12,md:6,lg:6,align:"center",className:e.cardWrapper,children:Object(i.jsx)(x,{in:!0,timeout:{enter:3e3,exit:3e3},children:Object(i.jsx)(d.a,{className:e.card,children:Object(i.jsxs)(l.a,{container:!0,spacing:0,children:[Object(i.jsxs)(l.a,{item:!0,lg:5,md:5,sm:5,children:[Object(i.jsx)("img",{src:"/image/".concat(t.mobile),className:e.image}),Object(i.jsx)("img",{src:"/image/".concat(t.web),className:e.web})]}),Object(i.jsxs)(l.a,{item:!0,lg:7,md:7,sm:7,children:[Object(i.jsxs)(k,{children:[Object(i.jsx)(T.a,{variant:"h6",className:e.title,children:t.title}),Object(i.jsx)(T.a,{variant:"body1",style:{textAlign:"justify"},children:t.description})]}),Object(i.jsx)(M,{children:Object(i.jsx)(S.a,{variant:"contained",fullWidth:!0,component:C.a,target:"_blank",href:t.Link,style:{textTransform:"none",textDecoration:"none",fontWeight:"bold"},color:"secondary",children:"Live Preview"})})]})]})})})},n)}))}),Object(i.jsx)("br",{}),!n&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]})]})}var L=Object(c.a)((function(e){var t,n;return{boxContainer:(t={minHeight:"100vh",marginTop:0,marginBottom:100},Object(o.a)(t,e.breakpoints.down("sm"),{marginBottom:570}),Object(o.a)(t,e.breakpoints.down("xs"),{marginBottom:e.spacing(80)}),t),mainContainer:(n={borderRadius:0,boxShadow:"none",opacity:.9,maxHeight:"90vh","&::-webkit-scrollbar":{width:"0.4em"},"&::-webkit-scrollbar-track":{boxShadow:"none",webkitBoxShadow:"none"},"&::-webkit-scrollbar-thumb":{backgroundColor:"blue",outline:"none",borderRadius:30},paddingTop:"2%"},Object(o.a)(n,e.breakpoints.down("md"),{minHeight:"100vh"}),Object(o.a)(n,e.breakpoints.down("sm"),{minHeight:"100vh",paddingTop:"2%",paddingBottom:"15%"}),Object(o.a)(n,e.breakpoints.down("xs"),{paddingTop:"5%",paddingBottom:"5vh"}),Object(o.a)(n,"overflowY","auto"),Object(o.a)(n,"animation","$mode 500ms"),Object(o.a)(n,"textAlign","center"),Object(o.a)(n,e.breakpoints.up("xl"),{paddingInline:300}),n),"@keyframes mode":{"0%":{opacity:.5},"100%":{opacity:.9}},card:{width:"90%",minHeight:350,marginTop:30,boxShadow:"0 4px 8px 0 rgba(0,0,0,0.3)"},image:Object(o.a)({width:"100%",height:330},e.breakpoints.down("xs"),{display:"none"}),web:Object(o.a)({width:"100%"},e.breakpoints.up("sm"),{display:"none"}),cardWrapper:Object(o.a)({},e.breakpoints.down("sm"),{marginTop:20}),title:Object(o.a)({fontWeight:"bold"},e.breakpoints.down("xs"),{display:"none"})}}));function R(){return Object(i.jsx)(a.a,{children:Object(i.jsx)(A,{})})}},lopY:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("wx14"),a=n("q1tI"),o=n("aXM8"),r=n("A+CX");function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(o.a)(),c=Object(r.a)({theme:n,name:"MuiUseMediaQuery",props:{}});var s="function"===typeof e?e(n):e;s=s.replace(/^@media( ?)/m,"");var d="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,l=Object(i.a)({},c,t),b=l.defaultMatches,p=void 0!==b&&b,u=l.matchMedia,m=void 0===u?d?window.matchMedia:null:u,j=l.noSsr,h=void 0!==j&&j,f=l.ssrMatchMedia,g=void 0===f?null:f,w=a.useState((function(){return h&&d?m(s).matches:g?g(s).matches:p})),O=w[0],x=w[1];return a.useEffect((function(){var e=!0;if(d){var t=m(s),n=function(){e&&x(t.matches)};return n(),t.addListener(n),function(){e=!1,t.removeListener(n)}}}),[s,m,d]),O}}},[["AGzW",0,2,1,3,4,5]]]);