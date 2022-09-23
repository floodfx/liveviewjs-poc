"use strict";(self.webpackChunkliveviewjs_com=self.webpackChunkliveviewjs_com||[]).push([[7800],{876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},633:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7896),a=(r(2784),r(876));const i={sidebar_position:3},o="Packages & Runtimes",s={unversionedId:"overview/runtimes",id:"overview/runtimes",title:"Packages & Runtimes",description:"LiveViewJS is written in Typescript and runs on both NodeJS and Deno. We've abstracted away APIs that are specific to each runtime so that you can write your code once and run it on both runtimes assuming you don't use any runtime-specific APIs.  That said, most developers are targeting one or the other and we've made it easy to use LiveViewJS with either runtime.",source:"@site/docs/01-overview/runtimes.md",sourceDirName:"01-overview",slug:"/overview/runtimes",permalink:"/docs/overview/runtimes",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"LiveView Paradigm",permalink:"/docs/overview/paradigm"},next:{title:"Getting Involved",permalink:"/docs/overview/feedback"}},p={},l=[{value:"NodeJS and Deno Differences",id:"nodejs-and-deno-differences",level:2},{value:"Other Webservers?",id:"other-webservers",level:2},{value:"What about Bun?",id:"what-about-bun",level:2},{value:"LiveViewJS Packages",id:"liveviewjs-packages",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"packages--runtimes"},"Packages & Runtimes"),(0,a.kt)("p",null,"LiveViewJS is written in Typescript and runs on both ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"NodeJS")," and ",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/"},"Deno"),". We've abstracted away APIs that are specific to each runtime so that you can write your code once and run it on both runtimes assuming you don't use any runtime-specific APIs.  That said, most developers are targeting one or the other and we've made it easy to use ",(0,a.kt)("strong",{parentName:"p"},"LiveViewJS")," with either runtime."),(0,a.kt)("h2",{id:"nodejs-and-deno-differences"},"NodeJS and Deno Differences"),(0,a.kt)("p",null,"As mentioned, we've worked hard to abstract away the differences between NodeJS and Deno so that you can write your code once and run it on both runtimes.  The only major difference between the two are with the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pub/Sub - NodeJS has a Redis implementation for multi-process pub/sub while Deno uses ",(0,a.kt)("a",{parentName:"li",href:"https://deno.com/deploy/docs/runtime-broadcast-channel"},"BroadcastChannel")," for multi-process pub/sub.  Out of the box, both NodeJS and Deno use the same single process EventEmitter-based implementation.  "),(0,a.kt)("li",{parentName:"ul"},"HTTP Server Libraries - With NodeJS, we ship with support for ",(0,a.kt)("a",{parentName:"li",href:"https://expressjs.com/"},"Express"),". Deno's HTTP server framework is called ",(0,a.kt)("a",{parentName:"li",href:"https://deno.land/x/oak@v11.1.0"},"Oak")," and we ship with support for that.  Theoretically, any HTTP server framework that supports websockets should work with LiveViewJS.  We've only tested with Express and Oak but we'd love to hear about your experiences with other frameworks and/or help support your framework of choice.")),(0,a.kt)("h2",{id:"other-webservers"},"Other Webservers?"),(0,a.kt)("p",null,"We've built out support for Express and Oak but theoretically any javascript HTTP webserver with support for websockets should work with LiveViewJS.  See ",(0,a.kt)("a",{parentName:"p",href:"/docs/webserver-integration/support-webserver-x"},"webserver integration")," for more details on how to integrate with your webserver of choice."),(0,a.kt)("h2",{id:"what-about-bun"},"What about Bun?"),(0,a.kt)("p",null,"LiveViewJS also runs on ",(0,a.kt)("a",{parentName:"p",href:"https://bun.sh/"},"Bun"),". We basically ran the NodeJS (express) version on Bun and it works great! ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/floodfx/liveviewjs/issues"},"Let us know")," if you run into any issues running ",(0,a.kt)("strong",{parentName:"p"},"LiveViewJS")," on Bun."),(0,a.kt)("h2",{id:"liveviewjs-packages"},"LiveViewJS Packages"),(0,a.kt)("p",null,"LiveViewJS is broken up into the following packages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"liveviewjs")," ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/liveviewjs"},"Node")," and ",(0,a.kt)("a",{parentName:"li",href:"https://deno.land/x/liveviewjs"},"Deno")," - The core package that contains the ",(0,a.kt)("strong",{parentName:"li"},"LiveViewJS")," core server code.  This package is runtime agnostic and can be used with either NodeJS or Deno."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@liveviewjs/examples")," ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@liveviewjs/examples"},"Node")," or ",(0,a.kt)("a",{parentName:"li",href:"https://deno.land/x/liveviewjs/packages/examples/mod.ts"},"Deno")," - The package contains all the example LiveViews that can be run on either NodeJS or Deno.  This package is runtime agnostic and can be used with either NodeJS or Deno."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@liveviewjs/express")," ",(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@liveviewjs/express"},"Node")," - The Express package that contains the Express server integration code. This package is used to integrate ",(0,a.kt)("strong",{parentName:"li"},"LiveViewJS")," with Express (NodeJS)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://deno.land/x/liveviewjs@VERSION/packages/deno/mod.ts")," - The Deno package that contains the Oak server integration code. This package is used to integrate ",(0,a.kt)("strong",{parentName:"li"},"LiveViewJS")," with Oak (Deno).")))}u.isMDXComponent=!0}}]);