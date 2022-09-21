"use strict";(self.webpackChunkliveviewjs_com=self.webpackChunkliveviewjs_com||[]).push([[5024],{876:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var a=i(2784);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(i),h=r,v=u["".concat(l,".").concat(h)]||u[h]||d[h]||n;return i?a.createElement(v,o(o({ref:t},c),{},{components:i})):a.createElement(v,o({ref:t},c))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,o=new Array(n);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<n;p++)o[p]=i[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},5351:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var a=i(7896),r=(i(2784),i(876));const n={sidebar_position:1},o="Introduction",s={unversionedId:"overview/introduction",id:"overview/introduction",title:"Introduction",description:'LiveViewJS is an open-source framework for "LiveView"-based, full-stack applications in NodeJS and Deno.',source:"@site/docs/01-overview/introduction.md",sourceDirName:"01-overview",slug:"/overview/introduction",permalink:"/docs/overview/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/category/overview"},next:{title:"LiveView Paradigm",permalink:"/docs/overview/paradigm"}},l={},p=[{value:"What is a LiveView?",id:"what-is-a-liveview",level:2},{value:"LiveView is already proven technology",id:"liveview-is-already-proven-technology",level:2},{value:"Advantages",id:"advantages",level:2},{value:"Disadvantages",id:"disadvantages",level:2},{value:"How is this different than Phoenix LiveView?",id:"how-is-this-different-than-phoenix-liveview",level:2},{value:"Reach more developers",id:"reach-more-developers",level:3}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,'LiveViewJS is an open-source framework for "LiveView"-based, full-stack applications in NodeJS and Deno.'),(0,r.kt)("p",null,"The LiveView approach allows developers to build applications with rich user experiences like React, Vue, etc but ",(0,r.kt)("strong",{parentName:"p"},"with far less code and complexity, and far more speed and efficiency"),"."),(0,r.kt)("h2",{id:"what-is-a-liveview"},"What is a LiveView?"),(0,r.kt)("p",null,"A LiveView is a server-rendered HTML page that connects to the server via a persistent web socket.  The web socket allows the client to send user events to the server and the server to send diffs in response. ",(0,r.kt)("strong",{parentName:"p"},"LiveViewJS")," is a LiveView framework that handles the complex part of this (handling websockets, diffing changes, appling DOM updates, etc) so that you can focus on building your application."),(0,r.kt)("p",null,"We'll obviously show you lots of examples and get into the details of how LiveViews and ",(0,r.kt)("strong",{parentName:"p"},"LiveViewJS")," works as you go through the documentation. "),(0,r.kt)("h2",{id:"liveview-is-already-proven-technology"},"LiveView is already proven technology"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html"},"Phoenix LiveView")," is already extremely popular in the Elixir community and has been used to build production applications for years.  It powers delightful user experiences and is battle-tested both in terms of performance and reliability and in terms of developer productivity."),(0,r.kt)("p",null,"Here is a quote from the author and inventor of LiveView, ",(0,r.kt)("a",{parentName:"p",href:"http://chrismccord.com/"},"Chris McCord")," from ",(0,r.kt)("a",{parentName:"p",href:"https://fly.io/blog/how-we-got-to-liveview/"},'"how we got to liveview"'),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"LiveView strips away layers of abstraction, because it solves both the client and server in a single abstraction. HTTP almost entirely falls away. No more REST. No more JSON. No GraphQL APIs, controllers, serializers, or resolvers. You just write HTML templates, and a stateful process synchronizes it with the browser, updating it only when needed.")),(0,r.kt)("h2",{id:"advantages"},"Advantages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Faster way to build rich, full-stack application")," - LiveView abstracts away the complexity of client/server communication, state management, and synchronization to make it simple and fast to build rich, server-connected user experiences. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/overview/paradigm"},"LiveView Paradigm")," for more details."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Real-time and multi-player built-in")," - Broadcasting updates to single or multiple clients is natively supported in LiveViewJS. Building features like chat, presence, and real-time dashboards are all supported by LiveView's Pub/Sub. We ship with support for Redis (NodeJS) and BroadcastChannels (Deno)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'Extremely fast "first paint"'),' - No massive JS bundle downloads, virtual DOM, "hydration", data-fetching, or the like. LiveViews are first rendered statically as part of a normal HTTP response. This means "first-paint" is extremely fast. '),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Extremely fast user-initiated updates")," - LiveView automatically maintains a persistent socket connection between client and server. User events are sent to the server and optimized diffs are sent back to the client. All this happens extremely fast and transparently to user and developer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"No need to build REST or GraphQL APIs")," - Full-stack applications usually have front-end and back-end code bases which adds a ton of complexity, effort, and context switching. The LiveView paradigm merges front-end and back-end into a single abstraction layer which greatly increases productivity.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Roubust, battle-tested browser libraries")," - ",(0,r.kt)("strong",{parentName:"li"},"LiveViewJS")," uses the exact same browser libraries as Phoenix LiveView which has 10s of thousands of production applications serving millions of users. This isn't some new, unproven technology. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"No client/server state synchronization challenges")," - State syncrhonization between client and server is super complex for traditional SPAs. LiveViews do not have to worry about the challenges inherent in state synchronization because the server is always the source of truth and client updates are pushed to the client."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"No client-side routing")," - No need to use a library like React Router or Vue Router. LiveViews route like multi-page applications which is handled automatically by the browser and server. (Another major complication rendered unnecessary.)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"No component libraries (or Storybook) required")," - Traditional SPAs require teams to adopt, build or buy and then maintain, and customize a component library and use something like ",(0,r.kt)("a",{parentName:"li",href:"https://storybook.js.org/"},"Storybook"),". LiveView simplifies this greatly with server-side HTML templates.")),(0,r.kt)("h2",{id:"disadvantages"},"Disadvantages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Not a drop-in replacement for traditional SPAs")," - LiveView is a new paradigm and is not a drop-in replacement for traditional SPA frameworks like React or Vue. It is a new way of building full-stack applications."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Not a great solution for pure static sites")," - Static sites that do not have user events or don't update often are not a great fit for LiveView. ")),(0,r.kt)("h2",{id:"how-is-this-different-than-phoenix-liveview"},"How is this different than Phoenix LiveView?"),(0,r.kt)("p",null,"The Phoenix project's backend is written in Elixir and runs on the ErlangVM.  ",(0,r.kt)("strong",{parentName:"p"},"LiveViewJS")," is a protocol compliant, implementation of Phoenix LiveView but written in Typescript and runs on NodeJS and Deno.  ",(0,r.kt)("strong",{parentName:"p"},"We want to bring the magic and productivity of LiveView to the NodeJS and Deno ecosystems")," and are obviously huge fans of Phoenix LIveView and the team that invented it.  We believe in it so much that we think more developers should have access to the programming paradigm it enables.  "),(0,r.kt)("h3",{id:"reach-more-developers"},"Reach more developers"),(0,r.kt)("p",null,"Unfortuately, Elixir only represents ",(0,r.kt)("a",{parentName:"p",href:"https://survey.stackoverflow.co/2022/#section-most-popular-technologies-programming-scripting-and-markup-languages"},"about 2%")," of the programming language market share.  We believe that ",(0,r.kt)("strong",{parentName:"p"},"LiveViewJS")," will help bring the productivity and magic of LiveView to the ",(0,r.kt)("a",{parentName:"p",href:"https://survey.stackoverflow.co/2022/#section-most-popular-technologies-programming-scripting-and-markup-languages"},"65% of developers")," that use Javascript (and Typescript)."))}d.isMDXComponent=!0}}]);