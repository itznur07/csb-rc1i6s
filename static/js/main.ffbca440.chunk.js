(this["webpackJsonpice-cream-e-commeree"]=this["webpackJsonpice-cream-e-commeree"]||[]).push([[0],{49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var i=c(0),r=c(34),a=c(6),s=c(3),n=c(12),d=c(25),l=Object(d.b)({name:"products",initialState:{product:[{id:1,qty:1,img:"https://img.freepik.com/free-vector/realistic-ice-cream-ad-background_52683-42900.jpg?w=1060&t=st=1675829917~exp=1675830517~hmac=8001ad7afb3468fc5db81bd1cb34e44ef67ae76eceb0901fa52e2943852f834f",heading:"Realistic glossy plastic ice cram",description:"Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",price:60},{id:2,qty:1,img:"https://img.freepik.com/free-vector/realistic-ice-cream-ad_23-2148974826.jpg?w=1060&t=st=1675829957~exp=1675830557~hmac=20b4051dbb32d6b1facd2a6010c3328d869ae817cf1781405e658068dac130f9",heading:"Coll flavour ice cream",description:"Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",price:35},{id:3,qty:1,img:"https://img.freepik.com/free-vector/coconut-ice-cream-vector-realistic-product-placement-healthy-delicious-desserts_1268-18067.jpg?w=1060&t=st=1675820606~exp=1675821206~hmac=1450329c22bd30958a9aeaab6d36e9864693b3011e94ff1ee47bfdd1f5d94f76",heading:"Coconut icr cream with many colors",description:"Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",price:50},{id:4,qty:1,img:"https://img.freepik.com/free-vector/realistic-ice-cream-ad-template_52683-63815.jpg?w=1060&t=st=1675820689~exp=1675821289~hmac=92a400afee5e580dad39e8d6d4d32a2262987cfcf55706b672a219fced4fe080",heading:"Realistic vanila ice cream",description:"Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",price:65},{id:5,qty:1,img:"https://img.freepik.com/free-vector/realistic-ice-cream-promo-template_23-2148980953.jpg?w=1060&t=st=1675820781~exp=1675821381~hmac=2d2ff1327b9f95a05548af9a0f399280a4c7eb37a43cff779c5a441e22e545e3",heading:"Defferent test vanila ice cream",description:"Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",price:40},{id:6,qty:1,img:"https://img.freepik.com/free-vector/realistic-fresh-organic-ice-cream_52683-65513.jpg?w=1060&t=st=1675820877~exp=1675821477~hmac=8aee19475083dfcf4fd4f0fe82cb195f6fa31d0cd8289d26e90b4c69ae7becae",heading:"Realistice fresh organic ice cream",description:"Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",price:85},{id:7,qty:1,img:"https://img.freepik.com/free-vector/premium-quality-realistic-ice-cream-ad_23-2148984339.jpg?w=1060&t=st=1675820950~exp=1675821550~hmac=379d5d3f02c9f3819f2f90df5412a2d9c687fca3990ea3c5342e3b4e4fd1bb21",heading:"Premium quality vanila ice cream",description:"Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",price:25},{id:8,qty:1,img:"https://img.freepik.com/free-vector/vanilla-ice-cream-naturally-flavored-product-advertising-poster-with-plant-flower-aromatic-seed-pods-realistic_1284-31945.jpg?w=1380&t=st=1675821014~exp=1675821614~hmac=858b0d0807cc50d87e9602ae320a42f2dd59583aa95dbf700aac916fc19e90be",heading:"Vanilla ice cream naturally flavored",description:"Our premium ice cream is made with only the freshest ingredients, providing a creamy and indulgent taste experience.",price:75}],filterProduct:[],cartItem:[],wishItem:[]},reducers:{filterProducts:function(e,t){e.product=e.filterProduct.filter((function(e){return e.heading.toLowerCase().includes(t.payload.toLowerCase())}))},addToCart:function(e,t){e.cartItem.push(t.payload)},addToWishList:function(e,t){e.wishItem.push(t.payload)},increaseQty:function(e,t){e.cartItem.find((function(e){return e.id===t.payload})).qty+=1},decreaseQty:function(e,t){e.cartItem.find((function(e){return e.id===t.payload})).qty-=1},removeFromCart:function(e,t){e.cartItem=e.cartItem.filter((function(e){return e.id!==t.payload}))}}}),m=l.actions,o=m.filterProducts,j=m.addToCart,h=m.addToWishList,b=m.increaseQty,u=m.decreaseQty,x=m.removeFromCart,p=l.reducer,f=c(1),g=function(){var e=Object(i.useRef)(""),t=Object(a.b)(),c=Object(a.c)((function(e){return e.products})),r=c.cartItem,s=c.wishItem;return Object(f.jsx)("div",{className:"bg-white top-0 shadow",children:Object(f.jsx)("nav",{className:"md:mx-24 mx-auto",children:Object(f.jsxs)("div",{className:"w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4",children:[Object(f.jsx)("div",{className:"pl-4",children:Object(f.jsx)("a",{className:"text-[#E34E94] md:text-2xl xl:text-xl no-underline hover:no-underline font-bold",href:"#link",children:Object(f.jsx)(n.b,{to:"/",children:"ICE-SHOP"})})}),Object(f.jsxs)("div",{className:"ml-44",children:[Object(f.jsx)("input",{ref:e,type:"text",name:"",onChange:function(){t(o(e.current.value))},placeholder:"Search here...",className:"border border-[#E34E94] outline-none rounded py-2.5 px-4 w-96"})," ",Object(f.jsx)("button",{className:"ml-2 px-4 py-2.5 bg-[#E34E94] rounded text-md font-semibold text-white hover:bg-[pink]",children:"Search"})]}),Object(f.jsx)("div",{className:"block lg:hidden pr-4",children:Object(f.jsx)("button",{id:"nav-toggle",className:"flex items-center p-1 text-orange-800 hover:text-gray-900",children:Object(f.jsxs)("svg",{className:"fill-current h-6 w-6",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[Object(f.jsx)("title",{children:"Menu"}),Object(f.jsx)("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})})}),Object(f.jsx)("div",{className:"w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white z-20",id:"nav-content",children:Object(f.jsxs)("ul",{className:"list-reset lg:flex justify-end flex-1 items-center text-lg uppercase cursor-pointer",children:[Object(f.jsx)(n.b,{to:"/",children:Object(f.jsx)("li",{className:"mr-3 hover:text-[gray]",children:Object(f.jsx)("a",{href:"#home",className:"inline-block py-2 px-4",children:"Home"})})}),Object(f.jsx)("li",{className:"mr-3 hover:text-[gray]",children:Object(f.jsx)("a",{href:"#about",className:"inline-block py-2 px-4",children:"About"})}),Object(f.jsx)(n.b,{to:"/cart",children:Object(f.jsx)("li",{className:"mr-3 relative",children:Object(f.jsxs)("a",{href:"#cart",className:"inline-block py-2 px-4",children:[Object(f.jsx)("span",{className:"hover:text-[gray] ",children:"Cart"})," ",Object(f.jsx)("span",{className:"absolute top-0 ml-1 font-bold text-[#E34E94]",children:r.length})]})})}),Object(f.jsx)(n.b,{to:"/wishlist",children:Object(f.jsx)("li",{className:"mr-3 relative",children:Object(f.jsxs)("a",{href:"#cart",className:"inline-block py-2 px-4",children:[Object(f.jsx)("span",{className:"hover:text-[gray] ",children:"Wishlist"})," ",Object(f.jsx)("span",{className:"absolute top-0 ml-1 font-bold text-[#E34E94]",children:s.length})]})})})]})})]})})})},O=c(13),v=function(e){var t=e.item,c=Object(a.b)();return Object(f.jsx)("div",{className:"md:w-full",children:Object(f.jsxs)("div",{className:"flex items-center justify-between bg-white shadow p-6 border-top",children:[Object(f.jsx)("img",{src:t.img,alt:t.heading,className:"h-24 w-28 object-cover rounded-sm"}),Object(f.jsx)("h3",{className:"text-lg font-medium mt-4",children:t.heading.slice(0,20)}),Object(f.jsxs)("p",{className:"text-gray-600 text-md font-medium mt-2",children:["$",t.price]}),Object(f.jsxs)("div",{className:"flex items-center mt-4",children:[Object(f.jsx)("button",{onClick:function(){return e=t.id,void(t.qty>1&&c(u(e)));var e},className:"bg-gray-200 px-3 py-2 rounded-full hover:bg-gray-400",children:Object(f.jsx)(O.b,{})}),Object(f.jsx)("p",{className:"px-2",children:t.qty}),Object(f.jsx)("button",{onClick:function(){return e=t.id,void c(b(e));var e},className:"bg-gray-200 px-3 py-2 rounded-full hover:bg-gray-400",children:Object(f.jsx)(O.c,{})})]}),Object(f.jsxs)("p",{className:"text-gray-600 text-md font-medium mt-2",children:["Total: $",t.price*t.qty]}),Object(f.jsx)("button",{onClick:function(){return e=t.id,void c(x(e));var e},className:"mt-4 text-red-600 hover:underline",children:Object(f.jsx)(O.d,{})})]})})},y=function(){var e=Object(a.c)((function(e){return e.products})).cartItem;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g,{}),Object(f.jsxs)("div",{className:"md:mx-28 mt-5",children:[Object(f.jsx)("h2",{className:"text-2xl font-medium mb-6 uppercase",children:"Shopping Cart"}),Object(f.jsx)("div",{className:"flex flex-col justify-center items-center",children:e.map((function(e){return Object(f.jsx)(v,{item:e},e.id)}))}),Object(f.jsx)("div",{className:"flex justify-end mt-6"})]})]})},w=function(e){var t=e.item;return Object(f.jsx)("div",{className:"md:w-full",children:Object(f.jsxs)("div",{className:"flex items-center justify-between bg-white shadow p-6 border-top",children:[Object(f.jsx)("img",{src:t.img,alt:t.heading,className:"h-24 w-28 object-cover rounded-sm"}),Object(f.jsx)("h3",{className:"text-lg font-medium mt-4",children:t.heading.slice(0,20)}),Object(f.jsxs)("p",{className:"text-gray-600 text-md font-medium mt-2",children:["$",t.price]}),Object(f.jsx)("button",{className:"mt-4 text-red-600 hover:underline",children:Object(f.jsx)(O.d,{})})]})})},N=function(){var e=Object(a.c)((function(e){return e.products})).wishItem;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g,{}),Object(f.jsxs)("div",{className:"md:mx-28 mt-5",children:[Object(f.jsx)("h2",{className:"text-2xl font-medium mb-6 uppercase",children:"Wish List"}),Object(f.jsx)("div",{className:"flex flex-col justify-center items-center",children:e.map((function(e){return Object(f.jsx)(w,{item:e},e.id)}))})]})]})},k=function(e){var t=e.product,c=Object(a.c)((function(e){return e.products})).cartItem,i=Object(a.b)();return Object(f.jsxs)("div",{className:"w-72 h-full rounded overflow-hidden shadow-md m-4",children:[Object(f.jsx)("img",{className:"w-full h-48 object-cover",src:t.img,alt:t.name}),Object(f.jsxs)("div",{className:"px-6 py-4",children:[Object(f.jsx)("div",{className:"font-bold text-xl mb-2",children:t.heading.slice(0,23)}),Object(f.jsx)("p",{className:"text-gray-700 text-base",children:t.description})]}),Object(f.jsxs)("div",{className:"flex items-center justify-between px-5 py-2",children:[Object(f.jsxs)("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700",children:["$",t.price]}),Object(f.jsx)("button",{onClick:function(){0===c.length?i(j(t)):alert("product added")},className:"bg-[#E34E94] hover:bg-[pink] text-white font-bold py-2 px-4 rounded",children:"Add to Cart"}),Object(f.jsx)("span",{onClick:function(){i(h(t))},className:"text-xl font-semibold cursor-pointer text-[gray] hover:text-[#E34E94] transition ease-linear duration-200",children:Object(f.jsx)(O.a,{})})]})]})},C=function(){var e=Object(a.c)((function(e){return e.products})).product,t=Object(a.c)((function(e){return e.products})).filterProduct;return console.log(t),Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"md:mx-24 mt-10",children:Object(f.jsx)("div",{className:"flex items-center justify-around flex-wrap",children:e.map((function(e){return Object(f.jsx)("div",{children:Object(f.jsx)(k,{product:e})},e.id)}))})})})},E=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g,{}),Object(f.jsx)(C,{})]})};c(49);function q(){return Object(f.jsx)("div",{children:Object(f.jsxs)(s.c,{children:[Object(f.jsx)(s.a,{path:"/",element:Object(f.jsx)(E,{})}),Object(f.jsx)(s.a,{path:"/cart",element:Object(f.jsx)(y,{})}),Object(f.jsx)(s.a,{path:"/wishlist",element:Object(f.jsx)(N,{})})]})})}var I=Object(d.a)({reducer:{products:p}}),_=document.getElementById("root");Object(r.createRoot)(_).render(Object(f.jsx)(i.StrictMode,{children:Object(f.jsx)(a.a,{store:I,children:Object(f.jsx)(n.a,{children:Object(f.jsx)(q,{})})})}))}},[[50,1,2]]]);
//# sourceMappingURL=main.ffbca440.chunk.js.map