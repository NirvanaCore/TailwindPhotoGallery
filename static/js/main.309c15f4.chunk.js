(this["webpackJsonptailwind-gallery"]=this["webpackJsonptailwind-gallery"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),r=n(5),a=n.n(r),o=(n(11),n(2)),l=function(e){var t=e.image,n=t.tags.split(",");return Object(s.jsxs)("div",{className:"max-w-sm rounded overflow-hidden shadow-lg",children:[Object(s.jsx)("img",{src:t.webformatURL,alt:"",className:"w-full"}),Object(s.jsxs)("div",{className:"px-6 py-4",children:[Object(s.jsxs)("div",{className:"font-bold text-purple-500 text-xl mb-2",children:["Photo By : ",t.user]}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("strong",{children:"Views: "}),t.views]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("strong",{children:"Downlands: "}),t.downloads]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("strong",{children:"Likes: "}),t.likes]})]})]}),Object(s.jsx)("div",{className:"px-6 py-4",children:n.map((function(e,t){return Object(s.jsxs)("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2",children:["#",e]},t)}))})]})},i=(n(4),function(e){var t=e.searchText,n=Object(c.useState)(""),r=Object(o.a)(n,2),a=r[0],l=r[1];return Object(s.jsx)("div",{className:"max-w-sm rounded overflow-hidden my-10 mx-auto",children:Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(a)},className:"w-full max-w-sm",children:Object(s.jsxs)("div",{className:"flex items-center border-b border-b-2 border-gray-500 py-2",children:[Object(s.jsx)("input",{onChange:function(e){l(e.target.value)},className:"focus:border-none focus:ring-none focus:ring-none focus:outline-none w-full text-sm text-black placeholder-gray-500 border-none rounded-md py-2 pl-10",type:"text",placeholder:"Search Image term...."}),Object(s.jsx)("button",{className:"flex-shrink-0 bg-transparent border-none focus:outline-none text-lg text-gray py-2 px-4 rounded-full hover:bg-gray-600 hover:text-white",type:"submit",children:Object(s.jsx)("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]})})})});var d=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!0),d=Object(o.a)(a,2),j=d[0],u=d[1],x=Object(c.useState)(""),b=Object(o.a)(x,2),m=b[0],h=b[1];return Object(c.useEffect)((function(){fetch("https://pixabay.com/api/?key=18909034-039500ac26627dcd3fe57a04b&q=".concat(m,"&image_type=photo&pretty=true")).then((function(e){return e.json()})).then((function(e){r(e.hits),u(!1)})).catch((function(e){return console.log(e)}))}),[m]),Object(s.jsxs)("div",{className:"container mx-auto",children:[Object(s.jsx)(i,{searchText:function(e){return h(e)}}),!j&&0===n.length&&Object(s.jsx)("h1",{className:"text-6xl text-center mx-auto mt-64",children:"No Images Found ....."}),j?Object(s.jsx)("h1",{className:"text-8xl text-center mx-auto mt-64",children:"Loading ....."}):Object(s.jsx)("div",{className:"grid grid-cols-3 gap-4",children:n.map((function(e){return Object(s.jsx)(l,{image:e},e.id)}))})]})};a.a.render(Object(s.jsx)(d,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.309c15f4.chunk.js.map