_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{Juyh:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var r=n("nKUr"),a=n("5Yp1"),i=n("rePB"),o=n("q1tI"),c=n.n(o),s=n("R/WZ"),l=n("30+C"),d=n("hlFM"),u=n("tRbT"),b=n("bqsI"),m=n("wx14"),f=n("Ff2n"),h=(n("17x9"),n("iuhU")),p=n("H2TA"),g=n("5AJ6"),j=Object(g.a)(o.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var y=o.forwardRef((function(e,t){var n=e.alt,r=e.children,a=e.classes,i=e.className,c=e.component,s=void 0===c?"div":c,l=e.imgProps,d=e.sizes,u=e.src,b=e.srcSet,p=e.variant,g=void 0===p?"circle":p,y=Object(f.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),x=null,v=function(e){var t=e.src,n=e.srcSet,r=o.useState(!1),a=r[0],i=r[1];return o.useEffect((function(){if(t||n){i(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=n,r.onload=function(){e&&i("loaded")},r.onerror=function(){e&&i("error")},function(){e=!1}}}),[t,n]),a}({src:u,srcSet:b}),w=u||b,O=w&&"error"!==v;return x=O?o.createElement("img",Object(m.a)({alt:n,src:u,srcSet:b,sizes:d,className:a.img},l)):null!=r?r:w&&n?n[0]:o.createElement(j,{className:a.fallback}),o.createElement(s,Object(m.a)({className:Object(h.a)(a.root,a.system,a[g],i,!O&&a.colorDefault),ref:t},y),x)})),x=Object(p.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(y),v=n("Z3vd"),w=n("ofer"),O=n("i8i4"),k=n("l3Wi"),E=n("dRu9"),T=n("bfFb"),C=n("tr08"),I=n("wpWl"),N=n("4Hym");function S(e,t){var n=function(e,t){var n,r=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var a=window.getComputedStyle(t);n=a.getPropertyValue("-webkit-transform")||a.getPropertyValue("transform")}var i=0,o=0;if(n&&"none"!==n&&"string"===typeof n){var c=n.split("(")[1].split(")")[0].split(",");i=parseInt(c[4],10),o=parseInt(c[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(i-r.left,"px)"):"right"===e?"translateX(-".concat(r.left+r.width-i,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(o-r.top,"px)"):"translateY(-".concat(r.top+r.height-o,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var R={enter:I.b.enteringScreen,exit:I.b.leavingScreen},B=o.forwardRef((function(e,t){var n=e.children,r=e.direction,a=void 0===r?"down":r,i=e.in,c=e.onEnter,s=e.onEntered,l=e.onEntering,d=e.onExit,u=e.onExited,b=e.onExiting,h=e.style,p=e.timeout,g=void 0===p?R:p,j=e.TransitionComponent,y=void 0===j?E.a:j,x=Object(f.a)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),v=Object(C.a)(),w=o.useRef(null),I=o.useCallback((function(e){w.current=O.findDOMNode(e)}),[]),B=Object(T.a)(n.ref,I),L=Object(T.a)(B,t),_=function(e){return function(t){e&&(void 0===t?e(w.current):e(w.current,t))}},H=_((function(e,t){S(a,e),Object(N.b)(e),c&&c(e,t)})),F=_((function(e,t){var n=Object(N.a)({timeout:g,style:h},{mode:"enter"});e.style.webkitTransition=v.transitions.create("-webkit-transform",Object(m.a)({},n,{easing:v.transitions.easing.easeOut})),e.style.transition=v.transitions.create("transform",Object(m.a)({},n,{easing:v.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",l&&l(e,t)})),M=_(s),W=_(b),z=_((function(e){var t=Object(N.a)({timeout:g,style:h},{mode:"exit"});e.style.webkitTransition=v.transitions.create("-webkit-transform",Object(m.a)({},t,{easing:v.transitions.easing.sharp})),e.style.transition=v.transitions.create("transform",Object(m.a)({},t,{easing:v.transitions.easing.sharp})),S(a,e),d&&d(e)})),P=_((function(e){e.style.webkitTransition="",e.style.transition="",u&&u(e)})),q=o.useCallback((function(){w.current&&S(a,w.current)}),[a]);return o.useEffect((function(){if(!i&&"down"!==a&&"right"!==a){var e=Object(k.a)((function(){w.current&&S(a,w.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[a,i]),o.useEffect((function(){i||q()}),[i,q]),o.createElement(y,Object(m.a)({nodeRef:w,onEnter:H,onEntered:M,onEntering:F,onExit:z,onExited:P,onExiting:W,appear:!0,in:i,timeout:g},x),(function(e,t){return o.cloneElement(n,Object(m.a)({ref:L,style:Object(m.a)({visibility:"exited"!==e||i?void 0:"hidden"},h,n.props.style)},t))}))})),L=n("OrM8");function _(e,t){var n=Object(o.useState)(!1),r=n[0],a=n[1];return Object(o.useLayoutEffect)((function(){function n(){var n=window.document.getElementById(e).offsetHeight,r=window.document.getElementById(e).scrollTop;r>n*t&&a(!0),r<n*t&&a(!1)}return window.document.getElementById(e).addEventListener("scroll",n),n(),function(){return window.document.getElementById(e).removeEventListener("scroll",n)}}),[e]),r}var H=[{year:"2019",title:"Physics Teacher",body:"Unacademy is an Indian online education technology company based in Bangalore. It was originally created as a YouTube channel in 2010 by Gaurav Munjal (wikipedia), My experience is as physics teacher in",link:"https://unacademy.com/lesson/letihan-soal-3/4DT1HCL7",linkTitle:"unacademy"},{year:"2020",title:"Full Stack Developer",body:"Mejik utama sugiharta is software house company based in south of jakarta, My work in this company as front end developer for three month, you can see the company profile on ",link:"https://microgen.mejik.id/",linkTitle:"mejik"}],F=[{body:"My name is Ahmad Nuril Firdaus a web and mobile developer since 2020"},{body:"I was born in Jember East Java, I studied and earned a bachelor of physics education at the university of Jember"},{body:"In 2020 I took coding training as a full stack javascript, Finally I love everything about javascript"},{body:"It's fun to build apps with modern tools like react js, next js, react native, Node js, express js, graphql, mongo db, apollo and many more"}],M=Object(s.a)((function(e){var t;return{timeLine:Object(i.a)({position:"relative",padding:"1rem",margin:"0 auto","&:before":{content:"''",position:"absolute",height:"100%",border:"1px solid aquamarine",right:"40px",top:0},"&:after":{content:"''",display:"table",clear:"both"}},e.breakpoints.up("md"),{padding:"2rem","&:before":{left:"calc(50% - 1px)",right:"auto"}}),boxContainer:{height:"80vh",display:"flex",justifyContent:"center",alignItems:"center",padding:"0 30px"},timeLineItem:Object(i.a)({padding:"1rem",borderBottom:"2px solid aquamarine",position:"relative",margin:"1rem 1rem 1rem 1rem",clear:"both","&:after":{content:"''",position:"absolute"},"&:before":{content:"''",position:"absolute",right:"-0.625rem",top:"calc(50% - 5px)",borderWith:"0.625rem",transform:"rotate(45deg)"}},e.breakpoints.up("md"),{width:"44%",margin:"1rem","&:nth-of-type(2n)":{float:"right",margin:"1rem",borderColor:"aquamarine"},"&:nth-of-type(2n):before":{right:"auto",left:"-0.625rem",borderColor:"transparent transparent #bbb #bbb"}}),timeLineYear:Object(i.a)({borderRadius:23,border:"none",textAlign:"center",maxWidth:"9.375rem",margin:"0 3rem 0 auto",fontSize:19,background:"#aaa",color:"white",padding:"0.5rem 1rem","&:before":{display:"none"}},e.breakpoints.up("md"),{textAlign:"center",margin:"0 auto","&:nth-of-type(2n)":{float:"none",margin:"0 auto"},"&:nth-of-type(2n):before":{display:"none"}}),heading:{color:"#888",padding:"3rem 0",fontWeight:"bold",marginTop:70},subHeading:{color:"#888",fontWeight:"bold"},body2:{textAlign:"justify",lineHeight:1.3},mainContainer:(t={borderRadius:0,paddingBottom:20,overflowY:"auto",boxShadow:"none",opacity:.9,maxHeight:"81vh","&::-webkit-scrollbar":{width:"0.4em"},"&::-webkit-scrollbar-track":{boxShadow:"none",webkitBoxShadow:"none"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#bbb",outline:"none",borderRadius:30}},Object(i.a)(t,e.breakpoints.down("md"),{minHeight:"100vh",paddingBottom:130}),Object(i.a)(t,e.breakpoints.down("xs"),{paddingTop:90}),t),avatar:{width:190,height:190,marginBottom:10},buttonCertificat:{textTransform:"none",width:130,fontWeight:"bold",borderRadius:23,boxShadow:"none",backgroundColor:"springgreen",color:"white","&:hover":{backgroundColor:"aquamarine",boxShadow:"none"}}}}));function W(){var e=M(),t=_("header",.3);return Object(r.jsxs)(l.a,{component:"header",id:"header",className:e.mainContainer,children:[Object(r.jsx)(d.a,{className:e.boxContainer,children:Object(r.jsxs)(u.a,{container:!0,spacing:3,justify:"center",children:[Object(r.jsxs)(u.a,{item:!0,lg:2,sm:12,align:"center",children:[Object(r.jsx)(b.a,{in:!0,timeout:{enter:1e3},children:Object(r.jsx)(x,{className:e.avatar,src:"/image/profile.png"})}),Object(r.jsx)(b.a,{in:!0,timeout:{enter:1e3},children:Object(r.jsx)(v.a,{className:e.buttonCertificat,variant:"contained",download:!0,href:"/anf.pdf",children:"Certificate"})})]}),Object(r.jsx)(u.a,{item:!0,lg:6,md:12,children:F.map((function(e,t){return Object(r.jsxs)("div",{children:[Object(r.jsx)(b.a,{in:!0,timeout:{enter:1e3},children:Object(r.jsx)(w.a,{variant:"body1",children:e.body})}),Object(r.jsx)("br",{})]},t)}))})]})}),Object(r.jsx)("br",{}),Object(r.jsx)(b.a,{in:t,timeout:{enter:1300,exit:1e3},children:Object(r.jsx)(w.a,{variant:"h4",align:"center",className:e.heading,children:"Working Experience"})}),Object(r.jsx)(d.a,{component:"div",className:e.timeLine,children:H.map((function(t,n){return Object(r.jsxs)(c.a.Fragment,{children:[Object(r.jsx)(w.a,{variant:"h2",className:"".concat(e.timeLineYear," ").concat(e.timeLineItem),children:t.year},n),Object(r.jsx)(B,{in:_("header",(n+3)/4.5),timeout:{enter:1300,exit:1e3},direction:"up",children:Object(r.jsxs)(d.a,{component:"div",className:e.timeLineItem,children:[Object(r.jsx)(w.a,{variant:"h5",aligh:"center",className:e.subHeading,children:t.title}),Object(r.jsxs)(w.a,{aligh:"center",variant:"body2",className:e.body2,children:[t.body," ",Object(r.jsx)(L.a,{style:{color:"orange"},href:t.link,children:t.linkTitle})]})]})})]},n)}))})]})}function z(){return Object(r.jsx)(a.a,{children:Object(r.jsx)(W,{})})}},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])}},[["rB5V",0,2,1,4,3,5,6,7]]]);