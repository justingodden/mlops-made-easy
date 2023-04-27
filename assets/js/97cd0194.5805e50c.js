"use strict";(self.webpackChunkmlops_in_depth=self.webpackChunkmlops_in_depth||[]).push([[9303],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=o,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:2},a="Container Registries",s={unversionedId:"data-engineering/container-registries",id:"data-engineering/container-registries",title:"Container Registries",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/07-data-engineering/container-registries.md",sourceDirName:"07-data-engineering",slug:"/data-engineering/container-registries",permalink:"/mlops-made-easy/data-engineering/container-registries",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"First Page",permalink:"/mlops-made-easy/data-engineering/first-page"},next:{title:"Data Versioning",permalink:"/mlops-made-easy/category/data-versioning"}},l={},d=[{value:"Create a docs version",id:"create-a-docs-version",level:2},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",level:2},{value:"Update an existing version",id:"update-an-existing-version",level:2}],p={toc:d},c="wrapper";function u(e){let{components:n,...i}=e;return(0,o.kt)(c,(0,r.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"container-registries"},"Container Registries"),(0,o.kt)("p",null,"Docusaurus can manage multiple versions of your docs."),(0,o.kt)("h2",{id:"create-a-docs-version"},"Create a docs version"),(0,o.kt)("p",null,"Release a version 1.0 of your project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,o.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,o.kt)("p",null,"Your docs now have 2 versions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1.0")," at ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"current")," at ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",(0,o.kt)("strong",{parentName:"li"},"upcoming, unreleased docs"))),(0,o.kt)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),(0,o.kt)("p",null,"To navigate seamlessly across versions, add a version dropdown."),(0,o.kt)("p",null,"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: "docsVersionDropdown",\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n')),(0,o.kt)("p",null,"The docs version dropdown appears in your navbar:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docs Version Dropdown",src:t(6636).Z,width:"370",height:"302"})),(0,o.kt)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,o.kt)("p",null,"It is possible to edit versioned docs in their respective folder:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}u.isMDXComponent=!0},6636:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/docsVersionDropdown-35e13cbe46c9923327f30a76a90bff3b.png"}}]);