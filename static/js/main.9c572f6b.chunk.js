(this["webpackJsonpmusic-search-app"]=this["webpackJsonpmusic-search-app"]||[]).push([[0],{53:function(e,t,c){},55:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(25),r=c.n(s),i=c(28),u=c(2),j=c(13),l=c.n(j),o=c(26),b=c(10),m=c(27),h=c.n(m),d=(c(53),c(1)),x=function(e){var t=e.musicData.slice(0,10);return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"all-wrap",children:0!==t.length?t.map((function(e){return Object(d.jsxs)("div",{className:"search-infor",children:[Object(d.jsx)("img",{className:"bg-img",src:""!==e.image[3]["#text"]?e.image[3]["#text"]:" https://images.unsplash.com/photo-1602848597239-b63398805e3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=495&q=80"}),Object(d.jsxs)("div",{className:"seq-infor",children:[Object(d.jsx)("h2",{className:"one-line-text artist-name",children:e.artist}),Object(d.jsx)("h3",{className:"one-line-text album-name",children:e.name})]})]})})):Object(d.jsx)("div",{className:"no-search",children:"\uac80\uc0c9\uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})})})},f=(c(55),function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(b.a)(s,2),i=r[0],u=r[1],j=Object(a.useState)([]),m=Object(b.a)(j,2),f=m[0],p=m[1];return Object(a.useEffect)((function(){return function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://ws.audioscrobbler.com/2.0/?method=album.search&album=".concat(t,"&api_key=6e11031365646bac0ef720a17b7d5e14&format=json")).then((function(e){p(e.data.results.albummatches.album),n(!1)})).catch((function(e){console.log(e)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(i),function(){}}),[i]),Object(d.jsx)(d.Fragment,{children:c?Object(d.jsx)("h1",{children:"\ub85c\ub529\uc911"}):Object(d.jsxs)("div",{children:[Object(d.jsx)("form",{children:Object(d.jsx)("input",{className:"music-search-input",name:"music",type:"text",placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694",value:i,onChange:function(e){var t=e.target,c=t.name,a=t.value;"music"===c&&u(a)}})}),Object(d.jsx)(x,{musicData:f})]})})});var p=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(i.a,{children:Object(d.jsx)(u.a,{path:"/",children:Object(d.jsx)(f,{})})})})};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.9c572f6b.chunk.js.map