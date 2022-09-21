"use strict";(self.webpackChunkliveviewjs_com=self.webpackChunkliveviewjs_com||[]).push([[6527],{876:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),u=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||a;return t?i.createElement(b,s(s({ref:n},c),{},{components:t})):i.createElement(b,s({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var u=2;u<a;u++)s[u]=t[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5289:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=t(7896),r=(t(2784),t(876));const a={sidebar_position:3},s="Rate Limiting Bindings",l={unversionedId:"user-events-slash-bindings/rate-limiting-bindings",id:"user-events-slash-bindings/rate-limiting-bindings",title:"Rate Limiting Bindings",description:"Deboucing and throttling user events is a very common need and to support these use-cases there are the following bindings:",source:"@site/docs/06-user-events-slash-bindings/rate-limiting-bindings.md",sourceDirName:"06-user-events-slash-bindings",slug:"/user-events-slash-bindings/rate-limiting-bindings",permalink:"/liveviewjs/docs/user-events-slash-bindings/rate-limiting-bindings",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Additional Bindings",permalink:"/liveviewjs/docs/user-events-slash-bindings/additional-bindings"},next:{title:"Phoenix LiveView Bindings",permalink:"/liveviewjs/docs/user-events-slash-bindings/bindings-table"}},o={},u=[{value:"Debounce Examples",id:"debounce-examples",level:2},{value:"Debounce input blur",id:"debounce-input-blur",level:3},{value:"Debouce input change",id:"debouce-input-change",level:3},{value:"Throttle Example",id:"throttle-example",level:2}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rate-limiting-bindings"},"Rate Limiting Bindings"),(0,r.kt)("p",null,"Deboucing and throttling user events is a very common need and to support these use-cases there are the following bindings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"phx-debounce")," - Debounce an event by the number of milliseconds specified in the attribute value ",(0,r.kt)("strong",{parentName:"li"},"or")," by setting the value to ",(0,r.kt)("inlineCode",{parentName:"li"},"blur"),".  This is useful for preventing multiple events from being sent to the server in rapid succession. When ",(0,r.kt)("inlineCode",{parentName:"li"},"blur")," is the value, the event will be debounced until the element is blurred by the user. Typically used for input elements."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"phx-throttle")," - Throttle an event by the number of milliseconds specified in the attribute value.  In contrast to debouncing, throttling emits an event immediately and then only once every specified number of milliseconds. Typically used to rate limit click events, key events, and mouse actions.")),(0,r.kt)("h2",{id:"debounce-examples"},"Debounce Examples"),(0,r.kt)("p",null,"Here are some examples of the debounce binding in action."),(0,r.kt)("h3",{id:"debounce-input-blur"},"Debounce input blur"),(0,r.kt)("p",null,"Let's say we want to send the ",(0,r.kt)("inlineCode",{parentName:"p"},"validate")," event to the server when a user blurs away from the address input in a form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<form action="#" phx-change="validate" phx-submit="save">\n  \x3c!--// only send "validate" event when address input is blurred --\x3e\n  <input name="address" phx-debounce="blur" />\n')),(0,r.kt)("h3",{id:"debouce-input-change"},"Debouce input change"),(0,r.kt)("p",null,"Let's say we only want to send the ",(0,r.kt)("inlineCode",{parentName:"p"},"search")," event to the server 1 second after a user stops typing into the search input:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<form action="#" phx-change="search">\n  \x3c!--// send "search" event after 1 second of debouncing  --\x3e\n  <input name="query" phx-debounce="1000" />\n')),(0,r.kt)("h2",{id:"throttle-example"},"Throttle Example"),(0,r.kt)("p",null,"Let's say we only want to send one ",(0,r.kt)("inlineCode",{parentName:"p"},"volume_up")," event every 500ms. The user can click the button as many times as they want, but the event will only be sent to the server every 500ms:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'  \x3c!--// rate limit clicks on a volume up event --\x3e\n  <button phx-click="volume_up" phx-throttle="500" />\n')))}p.isMDXComponent=!0}}]);