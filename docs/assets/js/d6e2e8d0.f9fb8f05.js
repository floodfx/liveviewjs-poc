"use strict";(self.webpackChunkliveviewjs_com=self.webpackChunkliveviewjs_com||[]).push([[6242],{876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),c=a,b=p["".concat(m,".").concat(c)]||p[c]||d[c]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7896),a=(n(2784),n(876));const o={sidebar_position:3},i="Set/Remove Attribute Commands",l={unversionedId:"js-commands/set-remove-attr",id:"js-commands/set-remove-attr",title:"Set/Remove Attribute Commands",description:"Set or remove an attribute from an HTML element using the setattribute and removeattribute commands.",source:"@site/docs/11-js-commands/set-remove-attr.md",sourceDirName:"11-js-commands",slug:"/js-commands/set-remove-attr",permalink:"/liveviewjs/docs/js-commands/set-remove-attr",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Add/Remove Class Commands",permalink:"/liveviewjs/docs/js-commands/add-remove-class"},next:{title:"Show/Hide/Toggle Element Commands",permalink:"/liveviewjs/docs/js-commands/show-hide-toggle-el"}},m={},s=[{value:"Set Attribute Command",id:"set-attribute-command",level:2},{value:"Remove Attribute Command",id:"remove-attribute-command",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setremove-attribute-commands"},"Set/Remove Attribute Commands"),(0,a.kt)("p",null,"Set or remove an attribute from an HTML element using the ",(0,a.kt)("inlineCode",{parentName:"p"},"set_attribute")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"remove_attribute")," commands."),(0,a.kt)("h2",{id:"set-attribute-command"},"Set Attribute Command"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"set_attribute")," command add or updates a single attribute on the target element.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"new JS().set_attribute(attr: [string, string], options?: AttributeOptions)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"attr")," - the 2-tuple of the attribute name and value to set"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," - Options for the command (optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"to")," - A css selector to identify the element to set the attribute on.  Defaults to the element that the JS Command is attached to.  ")))),(0,a.kt)("p",null,"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'//... in your render function of a LiveView\n\n// set the "disabled" attribute to on the target button element on click\n<button phx-click="${new JS().set_attribute(["disabled", ""], { to: "#target" })}">Set Disabled</button>\n<button id="target">Target</button>\n\n// set the "aria-expanded" attribute to "true" on the target element on click\n<button phx-click={new JS().set_attribute(["aria-expanded", "true"], to: "#dropdown")}>\n  Expand Dropdown\n</button>\n<div id="dropdown" aria-expanded="false">Dropdown</div>\n')),(0,a.kt)("h2",{id:"remove-attribute-command"},"Remove Attribute Command"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"remove_attribute")," command removes a single attribute from the target element.  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"new JS().remove_attribute(attr: string, options?: AttributeOptions)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"attr")," - the attribute name to remove"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," - Options for the command (optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"to")," - A css selector to identify the element to remove the attribute from.  Defaults to the element that the JS Command is attached to.  ")))),(0,a.kt)("p",null,"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'//... in your render function of a LiveView\n\n// remove the "disabled" attribute from the target button element on click\n<button phx-click="${new JS().remove_attribute("disabled", { to: "#target" })}">Remove Disabled</button>\n<button id="target" disabled>Target</button>\n\n// remove the "aria-expanded" attribute from the target element on click\n<button phx-click={new JS().remove_attribute("aria-expanded", to: "#dropdown")}>\n  Close Dropdown\n</button>\n<div id="dropdown" aria-expanded="true">Dropdown</div>\n')))}d.isMDXComponent=!0}}]);