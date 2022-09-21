"use strict";(self.webpackChunkliveviewjs_com=self.webpackChunkliveviewjs_com||[]).push([[8259],{876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7896),a=(r(2784),r(876));const o={sidebar_position:3},i="Deno - Run the Examples",s={unversionedId:"quick-starts/deno-run-examples",id:"quick-starts/deno-run-examples",title:"Deno - Run the Examples",description:"LiveViewJS ships with over a dozen example LiveViews that show everything from simple button-based events to real-time, multi-player views.  It takes approximately 1 minute to get these examples up and running and is a good way to get a feel for the user experience of a LiveView.  Let's get started!",source:"@site/docs/02-quick-starts/deno-run-examples.md",sourceDirName:"02-quick-starts",slug:"/quick-starts/deno-run-examples",permalink:"/liveviewjs/docs/quick-starts/deno-run-examples",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"NodeJS - Run the Examples",permalink:"/liveviewjs/docs/quick-starts/nodejs-run-examples"},next:{title:"Deno - Build a LiveView",permalink:"/liveviewjs/docs/quick-starts/deno-build-first-liveview"}},l={},p=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Run the Examples",id:"run-the-examples",level:2},{value:"Explore the Examples",id:"explore-the-examples",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deno---run-the-examples"},"Deno - Run the Examples"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"LiveViewJS")," ships with over a dozen example LiveViews that show everything from simple button-based events to real-time, multi-player views.  It takes approximately 1 minute to get these examples up and running and is a good way to get a feel for the user experience of a LiveView.  Let's get started!"),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://deno.land/"},"Deno")," version 1.24.x or above.  (Older versions may work but haven't been tested.)"),(0,a.kt)("p",null,"If you haven't already, ",(0,a.kt)("a",{parentName:"p",href:"get-liveviewjs-repo"},"download the ",(0,a.kt)("strong",{parentName:"a"},"LiveViewJS")," repo"),"."),(0,a.kt)("h2",{id:"run-the-examples"},"Run the Examples"),(0,a.kt)("p",null,"Navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/deno")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# cd to the deno directory\ncd packages/deno\n")),(0,a.kt)("p",null,"Then, start the Deno server with the examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"deno run --allow-net --allow-read --allow-write --allow-env --import-map=import_map.json src/example/index.ts\n")),(0,a.kt)("p",null,"Point your browser to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:9001"},"http://localhost:9001")),(0,a.kt)("h2",{id:"explore-the-examples"},"Explore the Examples"),(0,a.kt)("p",null,"You should see something like the screenshot below including a list of examples with a brief description, a link to the running LiveView, and a link to the source code for each example."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"LiveViewJS Examples Screenshot",src:r(7761).Z,width:"1552",height:"1382"})))}c.isMDXComponent=!0},7761:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/liveviewjs_examples_rec-2cc096a7ff8f675e44f0a7fa0c1108c7.gif"}}]);