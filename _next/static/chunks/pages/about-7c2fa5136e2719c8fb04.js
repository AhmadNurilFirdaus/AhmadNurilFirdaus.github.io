_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{Juyh:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return q}));var i=n("nKUr"),r=n("5Yp1"),a=n("rePB"),o=n("q1tI"),c=n.n(o),s=n("R/WZ"),d=n("lopY"),l=n("30+C"),u=n("hlFM"),b=n("tRbT"),m=n("bqsI"),f=n("wx14"),p=n("Ff2n"),h=(n("17x9"),n("iuhU")),j=n("H2TA"),g=n("5AJ6"),y=Object(g.a)(o.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var v=o.forwardRef((function(e,t){var n=e.alt,i=e.children,r=e.classes,a=e.className,c=e.component,s=void 0===c?"div":c,d=e.imgProps,l=e.sizes,u=e.src,b=e.srcSet,m=e.variant,j=void 0===m?"circle":m,g=Object(p.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),v=null,x=function(e){var t=e.src,n=e.srcSet,i=o.useState(!1),r=i[0],a=i[1];return o.useEffect((function(){if(t||n){a(!1);var e=!0,i=new Image;return i.src=t,i.srcSet=n,i.onload=function(){e&&a("loaded")},i.onerror=function(){e&&a("error")},function(){e=!1}}}),[t,n]),r}({src:u,srcSet:b}),O=u||b,w=O&&"error"!==x;return v=w?o.createElement("img",Object(f.a)({alt:n,src:u,srcSet:b,sizes:l,className:r.img},d)):null!=i?i:O&&n?n[0]:o.createElement(y,{className:r.fallback}),o.createElement(s,Object(f.a)({className:Object(h.a)(r.root,r.system,r[j],a,!w&&r.colorDefault),ref:t},g),v)})),x=Object(j.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(v),O=n("Z3vd"),w=n("ofer"),E=n("i8i4"),k=n("l3Wi"),S=n("dRu9"),T=n("bfFb"),C=n("tr08"),I=n("wpWl"),M=n("4Hym");function N(e,t){var n=function(e,t){var n,i=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var r=window.getComputedStyle(t);n=r.getPropertyValue("-webkit-transform")||r.getPropertyValue("transform")}var a=0,o=0;if(n&&"none"!==n&&"string"===typeof n){var c=n.split("(")[1].split(")")[0].split(",");a=parseInt(c[4],10),o=parseInt(c[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(a-i.left,"px)"):"right"===e?"translateX(-".concat(i.left+i.width-a,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(o-i.top,"px)"):"translateY(-".concat(i.top+i.height-o,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var R={enter:I.b.enteringScreen,exit:I.b.leavingScreen},F=o.forwardRef((function(e,t){var n=e.children,i=e.direction,r=void 0===i?"down":i,a=e.in,c=e.onEnter,s=e.onEntered,d=e.onEntering,l=e.onExit,u=e.onExited,b=e.onExiting,m=e.style,h=e.timeout,j=void 0===h?R:h,g=e.TransitionComponent,y=void 0===g?S.a:g,v=Object(p.a)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),x=Object(C.a)(),O=o.useRef(null),w=o.useCallback((function(e){O.current=E.findDOMNode(e)}),[]),I=Object(T.a)(n.ref,w),F=Object(T.a)(I,t),L=function(e){return function(t){e&&(void 0===t?e(O.current):e(O.current,t))}},B=L((function(e,t){N(r,e),Object(M.b)(e),c&&c(e,t)})),H=L((function(e,t){var n=Object(M.a)({timeout:j,style:m},{mode:"enter"});e.style.webkitTransition=x.transitions.create("-webkit-transform",Object(f.a)({},n,{easing:x.transitions.easing.easeOut})),e.style.transition=x.transitions.create("transform",Object(f.a)({},n,{easing:x.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",d&&d(e,t)})),_=L(s),A=L(b),z=L((function(e){var t=Object(M.a)({timeout:j,style:m},{mode:"exit"});e.style.webkitTransition=x.transitions.create("-webkit-transform",Object(f.a)({},t,{easing:x.transitions.easing.sharp})),e.style.transition=x.transitions.create("transform",Object(f.a)({},t,{easing:x.transitions.easing.sharp})),N(r,e),l&&l(e)})),q=L((function(e){e.style.webkitTransition="",e.style.transition="",u&&u(e)})),W=o.useCallback((function(){O.current&&N(r,O.current)}),[r]);return o.useEffect((function(){if(!a&&"down"!==r&&"right"!==r){var e=Object(k.a)((function(){O.current&&N(r,O.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[r,a]),o.useEffect((function(){a||W()}),[a,W]),o.createElement(y,Object(f.a)({nodeRef:O,onEnter:B,onEntered:_,onEntering:H,onExit:z,onExited:q,onExiting:A,appear:!0,in:a,timeout:j},v),(function(e,t){return o.cloneElement(n,Object(f.a)({ref:F,style:Object(f.a)({visibility:"exited"!==e||a?void 0:"hidden"},m,n.props.style)},t))}))})),L=n("OrM8"),B=n("MiFF"),H=[{year:"2018",title:"Physics Teacher",body:"Unacademy is an Indian online education technology company based in Bangalore. It was originally created as a YouTube channel in 2010 by Gaurav Munjal (wikipedia), My experience is as physics teacher in",link:"https://unacademy.com/lesson/letihan-soal-3/4DT1HCL7",linkTitle:"unacademy"},{year:"2020",title:"Full Stack Developer",body:"Mejik utama sugiharta is software house company based in south of jakarta, My work in this company as front end developer for three month, you can see the company profile on ",link:"https://microgen.mejik.id/",linkTitle:"mejik"}],_=[{body:"My name is Ahmad Nuril Firdaus a web developer since 2020"},{body:"I was born in Jember East Java, I studied and earned a bachelor of physics education at the university of Jember"},{body:"In 2020 I took coding training as a full stack javascript, Finally I love everything about javascript"},{body:"It's fun to build apps with modern tools like react js, next js, react native, Node js, express js, graphql, mongo db, apollo and many more"}];function A(){var e=z(),t=Object(C.a)(),n=Object(d.a)(t.breakpoints.up("lg")),r=Object(B.a)("header",.3);return Object(i.jsxs)(l.a,{component:"header",id:"header",className:e.mainContainer,children:[Object(i.jsx)(u.a,{className:e.boxContainer,children:Object(i.jsxs)(b.a,{container:!0,spacing:3,justify:"center",children:[Object(i.jsxs)(b.a,{item:!0,lg:2,sm:12,align:"center",children:[Object(i.jsx)(m.a,{in:!0,timeout:{enter:1e3},children:Object(i.jsx)(x,{className:e.avatar,src:"/image/profile.jpg",alt:"Ahmad Nuril Firdaus"})}),Object(i.jsx)(m.a,{in:!0,timeout:{enter:1e3},children:Object(i.jsx)(O.a,{"aria-label":"Center Align",className:e.buttonCv,variant:"contained",download:!0,href:"/cv.pdf",color:"secondary",children:"Download CV"})})]}),Object(i.jsx)(b.a,{item:!0,lg:6,md:12,children:_.map((function(t,n){return Object(i.jsxs)("div",{children:[Object(i.jsx)(m.a,{in:!0,timeout:{enter:1e3},children:Object(i.jsx)(w.a,{variant:"body1",className:e.textBody,children:t.body})}),Object(i.jsx)("br",{})]},n)}))})]})}),Object(i.jsx)("br",{}),Object(i.jsx)(m.a,{in:r,timeout:{enter:1300,exit:1e3},children:Object(i.jsx)(w.a,{variant:"h4",align:"center",className:e.heading,children:"Working Experience"})}),Object(i.jsx)(u.a,{component:"div",className:e.timeLine,children:H.map((function(t,n){return Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsx)(w.a,{variant:"h2",className:"".concat(e.timeLineYear," ").concat(e.timeLineItem),children:t.year},n),Object(i.jsx)(F,{in:Object(B.a)("header",(n+3)/4.2),timeout:{enter:1300,exit:1e3},direction:"up",children:Object(i.jsxs)(u.a,{component:"div",className:e.timeLineItem,children:[Object(i.jsx)(w.a,{variant:"h5",align:"justify",className:e.subHeading,children:t.title}),Object(i.jsxs)(w.a,{align:"justify",variant:"body2",className:e.body2,children:[t.body," ",Object(i.jsx)(L.a,{style:{color:"orange"},href:t.link,target:"_blank",children:t.linkTitle})]})]})})]},n)}))}),!n&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]})]})}var z=Object(s.a)((function(e){var t;return{timeLine:Object(a.a)({position:"relative",padding:"1rem",margin:"0 auto","&:before":{content:"''",position:"absolute",height:"100%",border:"1px solid aquamarine",right:"40px",top:0},"&:after":{content:"''",display:"table",clear:"both"}},e.breakpoints.up("md"),{padding:"2rem","&:before":{left:"calc(50% - 1px)",right:"auto"}}),boxContainer:{height:"80vh",display:"flex",justifyContent:"center",alignItems:"center",padding:"0 30px"},timeLineItem:Object(a.a)({padding:"1rem",borderBottom:"2px solid aquamarine",position:"relative",margin:"1rem 1rem 1rem 1rem",clear:"both","&:after":{content:"''",position:"absolute"},"&:before":{content:"''",position:"absolute",right:"-0.625rem",top:"calc(50% - 5px)",borderWith:"0.625rem",transform:"rotate(45deg)"}},e.breakpoints.up("md"),{width:"44%",margin:"1rem","&:nth-of-type(2n)":{float:"right",margin:"1rem",borderColor:"aquamarine"},"&:nth-of-type(2n):before":{right:"auto",left:"-0.625rem",borderColor:"transparent transparent #bbb #bbb"}}),timeLineYear:Object(a.a)({borderRadius:23,border:"none",textAlign:"center",maxWidth:"9.375rem",margin:"0 3rem 0 auto",fontSize:19,background:"#aaa",color:"white",padding:"0.5rem 1rem","&:before":{display:"none"}},e.breakpoints.up("md"),{textAlign:"center",margin:"0 auto","&:nth-of-type(2n)":{float:"none",margin:"0 auto"},"&:nth-of-type(2n):before":{display:"none"}}),heading:Object(a.a)({color:"#888",padding:"3rem 0",fontWeight:"bold",marginTop:70},e.breakpoints.down("xs"),{fontSize:27}),subHeading:Object(a.a)({color:"#888",fontWeight:"bold"},e.breakpoints.down("xs"),{fontSize:19}),body2:{lineHeight:1.3},mainContainer:(t={borderRadius:0,paddingBottom:20,height:"100vh",boxShadow:"none",opacity:.9,"&::-webkit-scrollbar":{width:"0.4em"},"&::-webkit-scrollbar-track":{boxShadow:"none",webkitBoxShadow:"none"},"&::-webkit-scrollbar-thumb":{backgroundColor:"#bbb",outline:"none",borderRadius:30}},Object(a.a)(t,e.breakpoints.down("md"),{minHeight:"100vh"}),Object(a.a)(t,e.breakpoints.down("xs"),{paddingTop:"35%",overflowY:"auto"}),t),avatar:{width:190,height:190,marginBottom:10},buttonCv:{textTransform:"none",width:130,fontWeight:"bold",borderRadius:23,boxShadow:"none"},"@keyframes mode":{"0%":{opacity:0},"100%":{opacity:.7}},textBody:Object(a.a)({},e.breakpoints.up("xl"),{fontSize:20})}}));function q(){return Object(i.jsx)(r.a,{children:Object(i.jsx)(A,{})})}},MiFF:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("q1tI");function r(e,t){var n=Object(i.useState)(!1),r=n[0],a=n[1];return(0,i.useLayoutEffect)((function(){function n(){var n=window.document.getElementById(e).offsetHeight,i=window.document.getElementById(e).scrollTop;i>n*t&&a(!0),i<n*t&&a(!1)}return window.document.getElementById(e).addEventListener("scroll",n),n(),function(){return window.document.getElementById(e).removeEventListener("scroll",n)}}),[e]),r}},bqsI:function(e,t,n){"use strict";var i=n("wx14"),r=n("ODXe"),a=n("Ff2n"),o=n("q1tI"),c=(n("17x9"),n("dRu9")),s=n("tr08"),d=n("4Hym"),l=n("bfFb");function u(e){return"scale(".concat(e,", ").concat(Math.pow(e,2),")")}var b={entering:{opacity:1,transform:u(1)},entered:{opacity:1,transform:"none"}},m=o.forwardRef((function(e,t){var n=e.children,m=e.disableStrictModeCompat,f=void 0!==m&&m,p=e.in,h=e.onEnter,j=e.onEntered,g=e.onEntering,y=e.onExit,v=e.onExited,x=e.onExiting,O=e.style,w=e.timeout,E=void 0===w?"auto":w,k=e.TransitionComponent,S=void 0===k?c.a:k,T=Object(a.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),C=o.useRef(),I=o.useRef(),M=Object(s.a)(),N=M.unstable_strictMode&&!f,R=o.useRef(null),F=Object(l.a)(n.ref,t),L=Object(l.a)(N?R:void 0,F),B=function(e){return function(t,n){if(e){var i=N?[R.current,t]:[t,n],a=Object(r.a)(i,2),o=a[0],c=a[1];void 0===c?e(o):e(o,c)}}},H=B(g),_=B((function(e,t){Object(d.b)(e);var n,i=Object(d.a)({style:O,timeout:E},{mode:"enter"}),r=i.duration,a=i.delay;"auto"===E?(n=M.transitions.getAutoHeightDuration(e.clientHeight),I.current=n):n=r,e.style.transition=[M.transitions.create("opacity",{duration:n,delay:a}),M.transitions.create("transform",{duration:.666*n,delay:a})].join(","),h&&h(e,t)})),A=B(j),z=B(x),q=B((function(e){var t,n=Object(d.a)({style:O,timeout:E},{mode:"exit"}),i=n.duration,r=n.delay;"auto"===E?(t=M.transitions.getAutoHeightDuration(e.clientHeight),I.current=t):t=i,e.style.transition=[M.transitions.create("opacity",{duration:t,delay:r}),M.transitions.create("transform",{duration:.666*t,delay:r||.333*t})].join(","),e.style.opacity="0",e.style.transform=u(.75),y&&y(e)})),W=B(v);return o.useEffect((function(){return function(){clearTimeout(C.current)}}),[]),o.createElement(S,Object(i.a)({appear:!0,in:p,nodeRef:N?R:void 0,onEnter:_,onEntered:A,onEntering:H,onExit:q,onExited:W,onExiting:z,addEndListener:function(e,t){var n=N?e:t;"auto"===E&&(C.current=setTimeout(n,I.current||0))},timeout:"auto"===E?null:E},T),(function(e,t){return o.cloneElement(n,Object(i.a)({style:Object(i.a)({opacity:0,transform:u(.75),visibility:"exited"!==e||p?void 0:"hidden"},b[e],O,n.props.style),ref:L},t))}))}));m.muiSupportAuto=!0,t.a=m},lopY:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n("wx14"),r=n("q1tI"),a=n("aXM8"),o=n("A+CX");function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)(),c=Object(o.a)({theme:n,name:"MuiUseMediaQuery",props:{}});var s="function"===typeof e?e(n):e;s=s.replace(/^@media( ?)/m,"");var d="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,l=Object(i.a)({},c,t),u=l.defaultMatches,b=void 0!==u&&u,m=l.matchMedia,f=void 0===m?d?window.matchMedia:null:m,p=l.noSsr,h=void 0!==p&&p,j=l.ssrMatchMedia,g=void 0===j?null:j,y=r.useState((function(){return h&&d?f(s).matches:g?g(s).matches:b})),v=y[0],x=y[1];return r.useEffect((function(){var e=!0;if(d){var t=f(s),n=function(){e&&x(t.matches)};return n(),t.addListener(n),function(){e=!1,t.removeListener(n)}}}),[s,f,d]),v}},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])}},[["rB5V",0,2,1,3,4,5]]]);