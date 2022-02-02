(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/spinner.ab497855.gif"},68:function(e,t,a){e.exports=a(85)},73:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(40),o=a.n(c),l=(a(73),a(11)),i=a(6),u=a(16),s=a(66),m=a(14),d=a(3);function p(e,t,a){return new Promise((function(n,r){var c,o,l,i=window.indexedDB.open("shop-shop",1);i.onupgradeneeded=function(e){var t=i.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},i.onerror=function(e){console.log("There was an error")},i.onsuccess=function(r){switch(c=i.result,o=c.transaction(e,"readwrite"),l=o.objectStore(e),c.onerror=function(e){console.log("error",e)},t){case"put":l.put(a),n(a);break;case"get":var u=l.getAll();u.onsuccess=function(){n(u.result)};break;case"delete":l.delete(a._id);break;default:console.log("No valid method")}o.oncomplete=function(){c.close()}}}))}var f=a(9);var E,b,g,h,O,v=function(e){var t=e.image,a=e.name,n=e._id,c=e.price,o=e.quantity,i=Object(f.c)((function(e){return e})),u=Object(f.b)(),s=i.cart;return r.a.createElement("div",{className:"card px-1 py-1"},r.a.createElement(l.b,{to:"/products/".concat(n)},r.a.createElement("img",{alt:a,src:"/images/".concat(t)}),r.a.createElement("p",null,a)),r.a.createElement("div",null,r.a.createElement("div",null,o," ",function(e,t){return 1===t?e:e+"s"}("item",o)," in stock"),r.a.createElement("span",null,"$",c)),r.a.createElement("button",{onClick:function(){var t=s.find((function(e){return e._id===n}));t?(u({type:"UPDATE_CART_QUANTITY",_id:n,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),p("cart","put",Object(d.a)(Object(d.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(u({type:"ADD_TO_CART",product:Object(d.a)(Object(d.a)({},e),{},{purchaseQuantity:1})}),p("cart","put",Object(d.a)(Object(d.a)({},e),{},{purchaseQuantity:1})))}},"Add to cart"))},y=a(27),j=a(24),w=Object(j.a)(E||(E=Object(y.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),_=(Object(j.a)(b||(b=Object(y.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(j.a)(g||(g=Object(y.a)(["\n{\n  categories {\n    _id\n    name\n  }\n}\n"])))),T=Object(j.a)(h||(h=Object(y.a)(["\n{\n  user {\n    firstName\n    lastName\n    orders {\n      _id\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        image\n      }\n    }\n  }\n}\n"]))),k=Object(j.a)(O||(O=Object(y.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),N=a(43),C=a.n(N);var A=function(){var e=Object(f.c)((function(e){return e})),t=Object(f.b)(),a=e.currentCategory,c=Object(m.c)(w),o=c.loading,l=c.data;return Object(n.useEffect)((function(){l?(t({type:"UPDATE_PRODUCTS",products:l.products}),l.products.forEach((function(e){p("products","put",e)}))):o||p("products","get").then((function(e){t({type:"UPDATE_PRODUCTS",products:e})}))}),[l,o,t]),r.a.createElement("div",{className:"my-2"},r.a.createElement("h2",null,"Our Products:"),e.products.length?r.a.createElement("div",{className:"flex-row"},(a?e.products.filter((function(e){return e.category._id===a})):e.products).map((function(e){return r.a.createElement(v,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):r.a.createElement("h3",null,"You haven't added any products yet!"),o?r.a.createElement("img",{src:C.a,alt:"loading"}):null)};var x=function(){var e=Object(f.c)((function(e){return e})),t=Object(f.b)(),a=Object(m.c)(_),c=a.loading,o=a.data,l=e.categories;return Object(n.useEffect)((function(){o?(t({type:"UPDATE_CATEGORIES",categories:o.categories}),o.categories.forEach((function(e){p("categories","put",e)}))):c||p("categories","get").then((function(e){t({type:"UPDATE_CATEGORIES",categories:e})}))}),[o,c,t]),r.a.createElement("div",null,r.a.createElement("h2",null,"Choose a Category:"),l.map((function(e){return r.a.createElement("button",{key:e._id,onClick:function(){var a;a=e._id,t({type:"UPDATE_CURRENT_CATEGORY",currentCategory:a})}},e.name)})))},R=a(23),D=a.n(R),S=a(32),P=a(30),U=a(22),I=function(e){var t=e.item,a=Object(f.b)();return r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/".concat(t.image),alt:""})),r.a.createElement("div",null,r.a.createElement("div",null,t.name,", $",t.price),r.a.createElement("div",null,r.a.createElement("span",null,"Qty:"),r.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(a({type:"REMOVE_FROM_CART",_id:t._id}),p("cart","delete",Object(d.a)({},t))):(a({type:"UPDATE_CART_QUANTITY",_id:t._id,purchaseQuantity:parseInt(n)}),p("cart","put",Object(d.a)(Object(d.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),r.a.createElement("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){a({type:"REMOVE_FROM_CART",_id:e._id}),p("cart","delete",Object(d.a)({},e))}(t)}},"\ud83d\uddd1\ufe0f"))))},Q=a(62),$=a(63),F=a(50),L=a.n(F),q=new(function(){function e(){Object(Q.a)(this,e)}return Object($.a)(e,[{key:"getProfile",value:function(){return L()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return L()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),M=(a(84),a(64)),G=Object(M.a)("pk_test_TYooMQauvdEDq54NiTphI7jx"),Y=function(){var e=Object(f.c)((function(e){return e})),t=Object(f.b)(),a=Object(m.a)(k),c=Object(U.a)(a,2),o=c[0],l=c[1].data;function i(){t({type:"TOGGLE_CART"})}return Object(n.useEffect)((function(){function a(){return(a=Object(P.a)(D.a.mark((function e(){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("cart","get");case 2:a=e.sent,t({type:"ADD_MULTIPLE_TO_CART",products:Object(S.a)(a)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.cart.length||function(){a.apply(this,arguments)}()}),[e.cart.length,t]),Object(n.useEffect)((function(){l&&G.then((function(e){e.redirectToCheckout({sessionId:l.checkout.session})}))}),[l]),e.cartOpen?r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"close",onClick:i},"[close]"),r.a.createElement("h2",null,"Shopping Cart"),e.cart.length?r.a.createElement("div",null,e.cart.map((function(e){return r.a.createElement(I,{key:e._id,item:e})})),r.a.createElement("div",{className:"flex-row space-between"},r.a.createElement("strong",null,"Total: $",function(){var t=0;return e.cart.forEach((function(e){t+=e.price*e.purchaseQuantity})),t.toFixed(2)}()),q.loggedIn()?r.a.createElement("button",{onClick:function(){var t=[];e.cart.forEach((function(e){for(var a=0;a<e.purchaseQuantity;a++)t.push(e._id)})),o({variables:{products:t}})}},"Checkout"):r.a.createElement("span",null,"(log in to check out)"))):r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"shocked"},"\ud83d\ude31"),"You haven't added anything to your cart yet!")):r.a.createElement("div",{className:"cart-closed",onClick:i},r.a.createElement("span",{role:"img","aria-label":"trash"},"\ud83d\uded2"))},W=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(x,null),r.a.createElement(A,null),r.a.createElement(Y,null))};var B=function(){var e=Object(f.c)((function(e){return e})),t=Object(f.b)(),a=Object(i.f)().id,c=Object(n.useState)({}),o=Object(U.a)(c,2),u=o[0],s=o[1],E=Object(m.c)(w),b=E.loading,g=E.data,h=e.products,O=e.cart;return Object(n.useEffect)((function(){h.length?s(h.find((function(e){return e._id===a}))):g?(t({type:"UPDATE_PRODUCTS",products:g.products}),g.products.forEach((function(e){p("products","put",e)}))):b||p("products","get").then((function(e){t({type:"UPDATE_PRODUCTS",products:e})}))}),[h,g,b,t,a]),r.a.createElement(r.a.Fragment,null,u?r.a.createElement("div",{className:"container my-1"},r.a.createElement(l.b,{to:"/"},"\u2190 Back to Products"),r.a.createElement("h2",null,u.name),r.a.createElement("p",null,u.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:"),"$",u.price," ",r.a.createElement("button",{onClick:function(){var e=O.find((function(e){return e._id===a}));e?(t({type:"UPDATE_CART_QUANTITY",_id:a,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),p("cart","put",Object(d.a)(Object(d.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(t({type:"ADD_TO_CART",product:Object(d.a)(Object(d.a)({},u),{},{purchaseQuantity:1})}),p("cart","put",Object(d.a)(Object(d.a)({},u),{},{purchaseQuantity:1})))}},"Add to Cart"),r.a.createElement("button",{disabled:!O.find((function(e){return e._id===u._id})),onClick:function(){t({type:"REMOVE_FROM_CART",_id:u._id}),p("cart","delete",Object(d.a)({},u))}},"Remove from Cart")),r.a.createElement("img",{src:"/images/".concat(u.image),alt:u.name})):null,b?r.a.createElement("img",{src:C.a,alt:"loading"}):null,r.a.createElement(Y,null))};var H,V,J,z=function(e){var t=e.children;return r.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)},K=function(){return r.a.createElement("div",null,r.a.createElement(z,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},X=a(36),Z=Object(j.a)(H||(H=Object(y.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),ee=Object(j.a)(V||(V=Object(y.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      } \n      }\n    }\n  }\n"]))),te=Object(j.a)(J||(J=Object(y.a)(["\n  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {\n    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var ae=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(U.a)(t,2),c=a[0],o=a[1],i=Object(m.b)(Z),u=Object(U.a)(i,2),s=u[0],p=u[1].error,f=function(){var e=Object(P.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,s({variables:{email:c.email,password:c.password}});case 4:a=e.sent,n=a.data.login.token,q.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.target,a=t.name,n=t.value;o(Object(d.a)(Object(d.a)({},c),{},Object(X.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(l.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:f},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:E})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:E})),p?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var ne=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(U.a)(t,2),c=a[0],o=a[1],i=Object(m.b)(te),u=Object(U.a)(i,1)[0],s=function(){var e=Object(P.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,u({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:a=e.sent,n=a.data.addUser.token,q.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.target,a=t.name,n=t.value;o(Object(d.a)(Object(d.a)({},c),{},Object(X.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(l.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:s},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:p})),r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var re=function(){return r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("h1",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("span",{role:"img","aria-label":"shopping bag"},"\ud83d\udecd\ufe0f"),"-Shop-Shop")),r.a.createElement("nav",null,q.loggedIn()?r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(l.b,{to:"/orderHistory"},"Order History")),r.a.createElement("li",{className:"mx-1"},r.a.createElement("a",{href:"/",onClick:function(){return q.logout()}},"Logout"))):r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(l.b,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(l.b,{to:"/login"},"Login")))))};var ce=function(){var e,t=Object(m.c)(T).data;return t&&(e=t.user),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-1"},r.a.createElement(l.b,{to:"/"},"\u2190 Back to Products"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return r.a.createElement("div",{key:e._id,className:"my-2"},r.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),r.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var a=e._id,n=e.image,c=e.name,o=e.price;return r.a.createElement("div",{key:t,className:"card px-1 py-1"},r.a.createElement(l.b,{to:"/products/".concat(a)},r.a.createElement("img",{alt:c,src:"/images/".concat(n)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("span",null,"$",o)))}))))}))):null))};var oe=function(){var e=Object(m.b)(ee),t=Object(U.a)(e,1)[0];return Object(n.useEffect)((function(){function e(){return(e=Object(P.a)(D.a.mark((function e(){var a,n,r,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("cart","get");case 2:if(a=e.sent,!(n=a.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:n}});case 7:r=e.sent,c=r.data,c.addOrder.products.forEach((function(e){p("cart","delete",e)}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),setTimeout((function(){window.location.assign("/")}),3e3),r.a.createElement("div",null,r.a.createElement(z,null,r.a.createElement("h1",null,"Success!"),r.a.createElement("h2",null,"Thank you for your purchase!"),r.a.createElement("h2",null,"You will now be redirected to the homepage")))},le=a(67),ie={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PRODUCTS":return Object(d.a)(Object(d.a)({},e),{},{products:Object(S.a)(t.products)});case"UPDATE_CATEGORIES":return Object(d.a)(Object(d.a)({},e),{},{categories:Object(S.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(d.a)(Object(d.a)({},e),{},{currentCategory:t.currentCategory});case"ADD_TO_CART":return Object(d.a)(Object(d.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(S.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(d.a)(Object(d.a)({},e),{},{cart:[].concat(Object(S.a)(e.cart),Object(S.a)(t.products))});case"REMOVE_FROM_CART":var a=e.cart.filter((function(e){return e._id!==t._id}));return Object(d.a)(Object(d.a)({},e),{},{cartOpen:a.length>0,cart:a});case"UPDATE_CART_QUANTITY":return Object(d.a)(Object(d.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"CLEAR_CART":return Object(d.a)(Object(d.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(d.a)(Object(d.a)({},e),{},{cartOpen:!e.cartOpen});default:return e}},se=Object(le.a)(ue),me=new s.a({request:function(e){var t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql"});var de=function(){return r.a.createElement(u.a,{client:me},r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(f.a,{store:se},r.a.createElement(re,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:W}),r.a.createElement(i.a,{exact:!0,path:"/login",component:ae}),r.a.createElement(i.a,{exact:!0,path:"/signup",component:ne}),r.a.createElement(i.a,{exact:!0,path:"/orderHistory",component:ce}),r.a.createElement(i.a,{exact:!0,path:"/products/:id",component:B}),r.a.createElement(i.a,{exact:!0,path:"/success",component:oe}),r.a.createElement(i.a,{component:K}))))))},pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");pe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):fe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):fe(t,e)}))}}()}},[[68,1,2]]]);
//# sourceMappingURL=main.7880ce72.chunk.js.map