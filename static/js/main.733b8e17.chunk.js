(this["webpackJsonpdrawing-app"]=this["webpackJsonpdrawing-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),o=n(5),c=n.n(o),s=(n(12),n(3)),a=n(6),l=n(7),u=n(1),d=i.a.forwardRef((function(e,t){var n;return t.current&&(n=t.current.toDataURL("image/png")),Object(u.jsxs)("div",{style:{position:"absolute",top:"85px",right:"10px",fontSize:"30px"},children:[Object(u.jsx)("div",{onClick:function(){var e=t.current.getContext("2d"),n=t.current.getBoundingClientRect();e.clearRect(0,0,n.width,n.height)},style:{cursor:"pointer"},children:Object(u.jsx)(a.a,{})}),Object(u.jsx)("a",{href:n,download:"my-drawing",children:Object(u.jsx)(l.a,{})})]})})),j=function(e){var t=e.color,n=e.size,r=e.position;return Object(u.jsx)("div",{style:{position:"absolute",width:"".concat(n,"px"),height:"".concat(n,"px"),backgroundColor:"".concat(t),borderRadius:"50%",cursor:"none",transition:"width 2s, height 2s, background-color 2s, transform 2s",left:"".concat(r.x,"px"),top:"".concat(r.y,"px"),transform:"translate(-50%, -50%)",pointerEvents:"none"}})},b=function(e){var t=Object(r.useRef)(null),n=Object(r.useState)(!1),i=Object(s.a)(n,2),o=i[0],c=i[1],a=Object(r.useState)(null),l=Object(s.a)(a,2),b=l[0],f=l[1],x=parseInt(e.size,10),p=e.color;Object(r.useEffect)((function(){var e=t.current;if(e){var n=window.innerWidth-110,r=window.innerHeight-73;e.width=n,e.height=r;var i=t.current.getContext("2d");i.fillStyle="white",i.fillRect(0,0,e.width,e.height)}}),[]);return Object(u.jsxs)("div",{style:{position:"relative"},children:[Object(u.jsx)("canvas",{ref:t,onMouseDown:function(e){c(!0);var t=e.nativeEvent.offsetX,n=e.nativeEvent.offsetY;f({x:t,y:n})},onMouseUp:function(){c(!1)},onMouseMove:function(e){var n=e.nativeEvent.offsetX,r=e.nativeEvent.offsetY;!function(e,n){if(o&&b){var r=t.current.getContext("2d");r.beginPath(),r.strokeStyle=p,r.lineWidth=x,r.lineCap="round",r.lineJoin="round",r.moveTo(b.x,b.y),r.lineTo(e,n),r.stroke(),r.closePath()}}(n,r),f({x:n,y:r})},onMouseLeave:function(){f(null)},style:{cursor:"none"}}),b&&!o&&Object(u.jsx)(j,{color:p,size:x,position:b}),Object(u.jsx)(d,{ref:t})]})},f=(n(14),["black","blue","purple","green","yellow","teal","brown","red","peru","grey"]),x=function(e){var t=e.setSize,n=e.setColor;return Object(u.jsxs)("div",{className:"parameters-bar",children:[Object(u.jsx)("div",{className:"parameter-text",children:Object(u.jsx)("span",{children:"let's draw !"})}),Object(u.jsx)("div",{className:"grid grid-size",children:[50,37,32,28,23].map((function(e){var n=50===e?{display:"flex",gridColumn:"1/3"}:{display:"flex",gridAutoColumn:"auto"};return Object(u.jsx)("div",{style:n,children:Object(u.jsx)("div",{style:{backgroundColor:"black",width:"".concat(e,"px"),height:"".concat(e,"px"),borderRadius:"50%",margin:"auto auto",cursor:"pointer"},"data-size":e,onClick:function(e){return t(e.target.dataset.size)}})},e)}))}),Object(u.jsx)("div",{className:"grid grid-color",children:f.map((function(e){return Object(u.jsx)("div",{onClick:function(){return n(e)},style:{backgroundColor:e,width:"30px",height:"30px",display:"flex",borderRadius:"50%",gridAutoColumn:"auto",margin:"auto auto",cursor:"pointer"}},e)}))})]})},p=function(){var e=Object(r.useState)("23"),t=Object(s.a)(e,2),n=t[0],i=t[1],o=Object(r.useState)("black"),c=Object(s.a)(o,2),a=c[0],l=c[1];return Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)(x,{setSize:i,setColor:l}),Object(u.jsx)(b,{size:n,color:a})]})},h=(n(15),function(){return Object(u.jsx)("header",{children:Object(u.jsx)("div",{children:"THE DRAWING APP"})})});n(16);var v=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(h,{}),Object(u.jsx)(p,{})]})};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.733b8e17.chunk.js.map