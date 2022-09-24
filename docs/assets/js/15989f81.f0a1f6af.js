"use strict";(self.webpackChunkliveviewjs_com=self.webpackChunkliveviewjs_com||[]).push([[610],{876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),v=a,m=u["".concat(s,".").concat(v)]||u[v]||p[v]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7896),a=(n(2784),n(876));const i={sidebar_position:4},o="LiveView API - `handleEvent`",c={unversionedId:"anatomy-of-a-liveview/handle-event-details",id:"anatomy-of-a-liveview/handle-event-details",title:"LiveView API - `handleEvent`",description:"handleEvent is called automatically by the LiveViewJS framework when the a user action causes the browser to send",source:"@site/docs/03-anatomy-of-a-liveview/handle-event-details.md",sourceDirName:"03-anatomy-of-a-liveview",slug:"/anatomy-of-a-liveview/handle-event-details",permalink:"/docs/anatomy-of-a-liveview/handle-event-details",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"LiveView API - `render`",permalink:"/docs/anatomy-of-a-liveview/render-details"},next:{title:"LiveView API - `handleParams`",permalink:"/docs/anatomy-of-a-liveview/handle-params"}},s={},l=[{value:"<code>handleEvent</code> Signature",id:"handleevent-signature",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"liveview-api---handleevent"},"LiveView API - ",(0,a.kt)("inlineCode",{parentName:"h1"},"handleEvent")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"handleEvent")," is called automatically by the ",(0,a.kt)("strong",{parentName:"p"},"LiveViewJS")," framework when the a user action causes the browser to send\nan event to the server (e.g. clicks, keyboard input, form updates, focus/blur, etc). (More details on\n",(0,a.kt)("a",{parentName:"p",href:"/docs/user-events-slash-bindings/overview"},"User Events"),"). The ",(0,a.kt)("inlineCode",{parentName:"p"},"handleEvent")," function is responsible for updating the\n",(0,a.kt)("inlineCode",{parentName:"p"},"context")," (i.e. state) of the LiveView based on the event."),(0,a.kt)("h2",{id:"handleevent-signature"},(0,a.kt)("inlineCode",{parentName:"h2"},"handleEvent")," Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"handleEvent(event: TEvents, socket: LiveViewSocket<TContext, TInfos>): void | Promise<void>;\n")),(0,a.kt)("p",null,"The example ",(0,a.kt)("inlineCode",{parentName:"p"},"handleEvent")," function below receives the ",(0,a.kt)("inlineCode",{parentName:"p"},"event")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"socket")," and updates the ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"socket"),"'s\ncontext based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"event"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),". In otherwords, it adds 1 when to ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," when it receive the ",(0,a.kt)("inlineCode",{parentName:"p"},"increment")," event\nand subtracts 1 when it receives the ",(0,a.kt)("inlineCode",{parentName:"p"},"decrement")," event:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="counterLiveView.ts" {13-24}',title:'"counterLiveView.ts"',"{13-24}":!0},'import { createLiveView, html } from "liveviewjs";\n/**\n * A basic counter that increments and decrements a number.\n */\nexport const counterLiveView = createLiveView<\n  { count: number }, // Define LiveView Context / State\n  { type: "increment" } | { type: "decrement" } // Define LiveView Events\n>({\n  // Setup / initialize the LiveView Context (i.e. set count to 0)\n  mount: (socket) => {\n    socket.assign({ count: 0 });\n  },\n  // Handle incoming increment and decrement events from User input\n  handleEvent: (event, socket) => {\n    const { count } = socket.context;\n    switch (event.type) {\n      case "increment":\n        socket.assign({ count: count + 1 });\n        break;\n      case "decrement":\n        socket.assign({ count: count - 1 });\n        break;\n    }\n  },\n  // Renders the Counter View based on the current Context / State\n  render: (context) => {\n    const { count } = context;\n    return html`\n      <div>\n        <h1>Count is: ${count}</h1>\n        <button phx-click="decrement">-</button>\n        <button phx-click="increment">+</button>\n      </div>\n    `;\n  },\n});\n')))}p.isMDXComponent=!0}}]);