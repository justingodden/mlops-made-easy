"use strict";(self.webpackChunkmlops_in_depth=self.webpackChunkmlops_in_depth||[]).push([[3446],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(a),d=o,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||n;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9792:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=a(7462),o=(a(7294),a(3905));const n=a.p+"assets/images/monolith-vs-microservice-7fcfe8047df951491038ddf864ceb869.png",i={sidebar_position:1},s="Microservices",c={unversionedId:"kubernetes/microservices",id:"kubernetes/microservices",title:"Microservices",description:"As mentioned in the previous lesson, in the early days of software, applications were traditionally run on bare-metal hardware servers. Next, virtualized deployments with VMs were used. These solved the issue of portability somewhat, since you could package a virtual computer with a deterministic environment, and you could even install a few separate VMs on one physical computer to get more efficient bin-packing of app and resource isolation for security purposes. However, as previously mentioned, VMs are heavy - meaning they take up more system memory, hard disk space and CPU capacity. This never used to be a big issue since most applications were developed as monoliths.",source:"@site/docs/02-kubernetes/01-microservices.md",sourceDirName:"02-kubernetes",slug:"/kubernetes/microservices",permalink:"/kubernetes/microservices",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/category/kubernetes"},next:{title:"Kubernetes Overview",permalink:"/kubernetes/kubernetes-overview"}},l={},p=[{value:"Monolithic vs. Microservices Architecture",id:"monolithic-vs-microservices-architecture",level:2},{value:"Problems with Microservices and Containers Alone",id:"problems-with-microservices-and-containers-alone",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"microservices"},"Microservices"),(0,o.kt)("p",null,"As mentioned in the ",(0,o.kt)("a",{parentName:"p",href:"../containers/docker-basics#what-and-why-of-containers"},"previous lesson"),", in the ",(0,o.kt)("em",{parentName:"p"},"early days")," of software, applications were traditionally run on bare-metal hardware servers. Next, virtualized deployments with VMs were used. These solved the issue of portability ",(0,o.kt)("em",{parentName:"p"},"somewhat"),", since you could package a virtual computer with a deterministic environment, and you could even install a few separate VMs on one physical computer to get more efficient bin-packing of app and resource isolation for security purposes. However, as previously mentioned, VMs are heavy - meaning they take up more system memory, hard disk space and CPU capacity. This never used to be a big issue since most applications were developed as ",(0,o.kt)("strong",{parentName:"p"},"monoliths"),"."),(0,o.kt)("h2",{id:"monolithic-vs-microservices-architecture"},"Monolithic vs. Microservices Architecture"),(0,o.kt)("p",null,"Monoliths refer to a large piece of software that contains many different pieces of functionality, or ",(0,o.kt)("em",{parentName:"p"},"tiers"),". for example a large eCommerce system, that has the ability to manage users, take payments, connect to databases, serve the front-end GUI, log debugging messages etc. Each individual piece of functionality will be ",(0,o.kt)("strong",{parentName:"p"},"tightly-coupled")," with one another through the way they interact with each other in the code (calling each others' functions, instantiating each other as objects etc.). The entire application would be deploy as one ",(0,o.kt)("strong",{parentName:"p"},"monolith"),", hence why a big VM wasn't a massive issue."),(0,o.kt)("p",null,"The problems with monoliths however, is that making rapid incremental changes to parts of the system becomes very difficult. Firstly, the build-times could be massive, so making small changes to one small part of the app and testing to see if it works as expected becomes prohibitive if the time it takes the app to compile can sometimes be in the hours. Also, since the app is so ",(0,o.kt)("strong",{parentName:"p"},"tightly-coupled"),", it's never clear if making a small change to one part may have catastrophic effects on another downstream part that depends on it."),(0,o.kt)("p",null,"Another issue is that each ",(0,o.kt)("em",{parentName:"p"},"tier")," may be accessed at different frequencies. For example, the payment system may get many requests or require loads of resources, but the email alert system is rarely used. We can use ",(0,o.kt)("em",{parentName:"p"},"service replication")," to add more replicas of the app and route some user requests to another server to reduce the load on the single server and allow more payments requests to get fulfilled. This however also replicates the email system because it's all combined into one. So you've got many replicas of a dormant part of the system taking up unnecessary resources."),(0,o.kt)("p",null,"Enter ",(0,o.kt)("strong",{parentName:"p"},"microservices"),". From AWS's documentation:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Microservices are an architectural and organizational approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small, self-contained teams."),(0,o.kt)("p",{parentName:"blockquote"},"Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.")),(0,o.kt)("p",null,"So in the eCommerce example, each ",(0,o.kt)("em",{parentName:"p"},"tier")," would be its own separate self-contained microservice that exposes an API to other microservices to consume to use its functionality. Individual teams could then own each microservice and iterative quickly on small changes and improvements, as long as they keep to the previously agreed ",(0,o.kt)("em",{parentName:"p"},"contract")," of how their API will work."),(0,o.kt)("p",null,"Also, in the payments vs. email system example, the payments container can be replicated to scale up and deal with the extra load, without needing to also replicate the email system, saving on cost (of the the hardware servers)."),(0,o.kt)("p",{align:"center"},(0,o.kt)("figure",null,(0,o.kt)("img",{src:n}),(0,o.kt)("figcaption",null,"Figure: Monolith vs Microservice. Source: https://aws.amazon.com/microservices/"))),(0,o.kt)("admonition",{title:"Info",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This advent of microservices developed alongside, and indeed influenced the adoption of ",(0,o.kt)("a",{parentName:"p",href:"https://www.atlassian.com/agile"},"agile")," methodology to create software products in small, iterative, incremental sprints.")),(0,o.kt)("h2",{id:"problems-with-microservices-and-containers-alone"},"Problems with Microservices and Containers Alone"),(0,o.kt)("p",null,"So ",(0,o.kt)("a",{parentName:"p",href:"../containers/docker-basics/"},"Containers")," made software ",(0,o.kt)("strong",{parentName:"p"},"portable")," and enabled microservice architecture, making it possible to package and deploy many lightweight applications alongside one another on a host machine, in an efficient, reliable and cost effective way. However, even though microservices solved some problems, they brought with them some of their own hurdles."),(0,o.kt)("p",null,"It became easier to make changes to individual parts of the system, but the complexity of a monolithic application does not disappear if it is re-implemented as a set of microservices. Some of the complexity gets translated into operational complexity. Now we have to consider networking, message format design, fault tolerance, and much more complicated deployment."),(0,o.kt)("p",null,"As we ",(0,o.kt)("a",{parentName:"p",href:"../containers/docker-custom-containers/"},"saw"),", Docker was great at deploying individual containers. But we also need a way to run large distributed systems resiliently with many containers that are able to scale individually and automatically; communicate with each other; and recover automatically if a service goes down. That's where Kubernetes comes in!"))}d.isMDXComponent=!0}}]);