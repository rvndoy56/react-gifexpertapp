(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),r=n(7),i=n.n(r),s=(n(16),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))}),u=n(2),o=n(9),j=function(t){var e=t.setCategories,n=Object(a.useState)(""),r=Object(u.a)(n,2),i=r[0],s=r[1];return Object(c.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(o.a)(t))})),s(""))},children:Object(c.jsx)("input",{type:"text",value:i,onChange:function(t){s(t.target.value)}})})},d=n(10),l=n(6),f=n.n(l),b=n(8),p=function(){var t=Object(b.a)(f.a.mark((function t(e){var n,c,a,r,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=oY2enMbQweEVcPM3Y278cLCn9HuUkPKY&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return a=t.sent,r=a.data,i=r.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){var e=t.id,n=t.title,a=t.url;return console.log(e,n,a),Object(c.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(c.jsx)("img",{src:a,alt:n}),"\xf1",Object(c.jsx)("p",{children:n})]})},O=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(u.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){p(t).then((function(t){r({data:t,loading:!1})}))}),[t]),c}(e),r=n.data,i=n.loading;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:e}),i&&Object(c.jsx)("p",{className:"card animate__animated animate__flash",children:"Loading"}),Object(c.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(c.jsx)(h,Object(d.a)({},t),t.id)}))})]})},g=function(){var t=Object(a.useState)(["One punch"]),e=Object(u.a)(t,2),n=e[0],r=e[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"GifExpertApp"}),Object(c.jsx)(j,{setCategories:r}),Object(c.jsx)("hr",{}),Object(c.jsx)("ol",{children:n.map((function(t){return Object(c.jsx)(O,{category:t},t)}))})]})};i.a.render(Object(c.jsx)(g,{}),document.getElementById("root")),s()}},[[18,1,2]]]);
//# sourceMappingURL=main.f0c54c78.chunk.js.map