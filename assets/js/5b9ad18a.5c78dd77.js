"use strict";(self.webpackChunkmlops_in_depth=self.webpackChunkmlops_in_depth||[]).push([[1174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),b=a,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));n(3766);const o={sidebar_position:2},i="Kubernetes - Basics",s={unversionedId:"kubernetes/kubernetes-basics",id:"kubernetes/kubernetes-basics",title:"Kubernetes - Basics",description:"Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.",source:"@site/docs/02-kubernetes/02-kubernetes-basics.md",sourceDirName:"02-kubernetes",slug:"/kubernetes/kubernetes-basics",permalink:"/kubernetes/kubernetes-basics",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Microservices",permalink:"/kubernetes/microservices"},next:{title:"\ud83d\udcb0 Cloud Computing",permalink:"/category/-cloud-computing"}},l={},c=[{value:"Kubernetes&#39; Core Functionality",id:"kubernetes-core-functionality",level:2},{value:"Service discovery and load balancing",id:"service-discovery-and-load-balancing",level:3},{value:"Storage orchestration",id:"storage-orchestration",level:3},{value:"Automated rollouts and rollbacks",id:"automated-rollouts-and-rollbacks",level:3},{value:"Automatic bin packing",id:"automatic-bin-packing",level:3},{value:"Self-healing",id:"self-healing",level:3},{value:"Secret and configuration management",id:"secret-and-configuration-management",level:3},{value:"Kubernetes Objects",id:"kubernetes-objects",level:2},{value:"Pods",id:"pods",level:3},{value:"Deployments",id:"deployments",level:3},{value:"Services",id:"services",level:3},{value:"Networking and internal DNS",id:"networking-and-internal-dns",level:3},{value:"Jobs and CronJobs",id:"jobs-and-cronjobs",level:3},{value:"Getting Started",id:"getting-started",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kubernetes---basics"},"Kubernetes - Basics"),(0,a.kt)("p",null,"Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications."),(0,a.kt)("p",null,"From the Kubernetes docs:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Kubernetes is a portable, extensible, open source platform for managing containerized workloads and services, that facilitates both declarative configuration and automation. It has a large, rapidly growing ecosystem. Kubernetes services, support, and tools are widely available.")),(0,a.kt)("h2",{id:"kubernetes-core-functionality"},"Kubernetes' Core Functionality"),(0,a.kt)("h3",{id:"service-discovery-and-load-balancing"},"Service discovery and load balancing"),(0,a.kt)("p",null,"Kubernetes can expose a container using the DNS name or using their own IP address. If traffic to a container is high, Kubernetes is able to load balance and distribute the network traffic so that the deployment is stable."),(0,a.kt)("h3",{id:"storage-orchestration"},"Storage orchestration"),(0,a.kt)("p",null,"Kubernetes allows you to automatically mount a storage system of your choice, such as local storages, public cloud providers, and more."),(0,a.kt)("h3",{id:"automated-rollouts-and-rollbacks"},"Automated rollouts and rollbacks"),(0,a.kt)("p",null,"You can describe the desired state for your deployed containers using Kubernetes, and it can change the actual state to the desired state at a controlled rate. For example, you can automate Kubernetes to create new containers for your deployment, remove existing containers and adopt all their resources to the new container."),(0,a.kt)("h3",{id:"automatic-bin-packing"},"Automatic bin packing"),(0,a.kt)("p",null,"You provide Kubernetes with a cluster of nodes that it can use to run containerized tasks. You tell Kubernetes how much CPU and memory (RAM) each container needs. Kubernetes can fit containers onto your nodes to make the best use of your resources."),(0,a.kt)("h3",{id:"self-healing"},"Self-healing"),(0,a.kt)("p",null,"Kubernetes restarts containers that fail, replaces containers, kills containers that don't respond to your user-defined health check, and doesn't advertise them to clients until they are ready to serve."),(0,a.kt)("h3",{id:"secret-and-configuration-management"},"Secret and configuration management"),(0,a.kt)("p",null,"Kubernetes lets you store and manage sensitive information, such as passwords, OAuth tokens, and SSH keys. You can deploy and update secrets and application configuration without rebuilding your container images, and without exposing secrets in your stack configuration."),(0,a.kt)("h2",{id:"kubernetes-objects"},"Kubernetes Objects"),(0,a.kt)("p",null,"Just like a ",(0,a.kt)("a",{parentName:"p",href:"../containers/docker-custom-containers#dockerfile-1"},(0,a.kt)("inlineCode",{parentName:"a"},"Dockerfile"))," provides a definition for a containerized application, Kubernetes uses ",(0,a.kt)("strong",{parentName:"p"},"manifests")," (as YAML files) to describe the various ",(0,a.kt)("strong",{parentName:"p"},"objects")," that it manages."),(0,a.kt)("h3",{id:"pods"},"Pods"),(0,a.kt)("h3",{id:"deployments"},"Deployments"),(0,a.kt)("h3",{id:"services"},"Services"),(0,a.kt)("h3",{id:"networking-and-internal-dns"},"Networking and internal DNS"),(0,a.kt)("h3",{id:"jobs-and-cronjobs"},"Jobs and CronJobs"),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"))}p.isMDXComponent=!0},3766:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/monolith-vs-microservice-7fcfe8047df951491038ddf864ceb869.png"}}]);