"use strict";(self.webpackChunkmlops_in_depth=self.webpackChunkmlops_in_depth||[]).push([[2730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i=n.p+"assets/images/dockerhub-161a4c3c33c9f7249f5eb3e31c8c8421.png",o=n.p+"assets/images/streamlit-e356f5c3c1822563fa015759cc423478.png",l={sidebar_position:3},p="Docker - Custom Containers",s={unversionedId:"containers/docker-custom-containers",id:"containers/docker-custom-containers",title:"Docker - Custom Containers",description:"Hopefully you created a free Dockerhub account during the last lesson, as we'll be creating and uploading our own images to store in a Dockerhub repo.",source:"@site/docs/01-containers/03-docker-custom-containers.md",sourceDirName:"01-containers",slug:"/containers/docker-custom-containers",permalink:"/containers/docker-custom-containers",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Container Registries",permalink:"/containers/container-registries"},next:{title:"Kubernetes",permalink:"/category/kubernetes"}},c={},d=[{value:"Dockerfile",id:"dockerfile",level:2},{value:"First Dockerfile",id:"first-dockerfile",level:2},{value:"Docker build",id:"docker-build",level:3},{value:"Docker push",id:"docker-push",level:3},{value:"Docker run",id:"docker-run",level:3},{value:"Bigger, Better.",id:"bigger-better",level:2},{value:"The app",id:"the-app",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Dockerfile",id:"dockerfile-1",level:3},{value:"Dockerhub repo",id:"dockerhub-repo",level:3},{value:"Build, push, run",id:"build-push-run",level:3},{value:"Result",id:"result",level:3},{value:"Cleanup",id:"cleanup",level:2},{value:"<code>docker kill</code>",id:"docker-kill",level:3},{value:"<code>docker rm</code>",id:"docker-rm",level:3},{value:"<code>docker rmi</code>",id:"docker-rmi",level:3}],m={toc:d},u="wrapper";function h(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docker---custom-containers"},"Docker - Custom Containers"),(0,r.kt)("p",null,"Hopefully you created a free ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Dockerhub")," account during the last lesson, as we'll be creating and uploading our own images to store in a Dockerhub repo."),(0,r.kt)("p",null,"Once you've done that and are signed in, create a new public repository named 'mynginx' like below:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:i})),(0,r.kt)("h2",{id:"dockerfile"},"Dockerfile"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is the specification of your image. They contain a series of commands that tell Docker what to put into your container image."),(0,r.kt)("p",null,"The details aren't too important, but Docker has a clever ",(0,r.kt)("em",{parentName:"p"},"layering")," system for images, where each of the files that make up a Docker image is a layer, and these layers form a series of intermediate images built on top of each other. This allows Docker to cache layers, and only rebuild the sections of the software that has changed between builds, rather than rebuilding the entire image, speeding up build time."),(0,r.kt)("p",null,"Almost all images inherit from a base image from Dockerhub using the ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM")," command and build layers on top. A very popular base image is ",(0,r.kt)("inlineCode",{parentName:"p"},"ubuntu")," (of course as we learned in the ",(0,r.kt)("a",{parentName:"p",href:"container-registries#dockerhub"},"last lesson")," is an alias for ",(0,r.kt)("inlineCode",{parentName:"p"},"docker.io/library/ubuntu:latest"),"). This provides a great Linux environment to further build on top of."),(0,r.kt)("admonition",{title:"Info",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"python")," image is another popular base image (that we will use later). But checking its Dockerfile on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/docker-library/python/blob/2bcce464bea3a9c7449a2fe217bf4c24e38e0a47/3.11/bullseye/Dockerfile"},"GitHub")," we can see that it inherits from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/docker-library/buildpack-deps/blob/65d69325ad741cea6dee20781c1faaab2e003d87/debian/bullseye/Dockerfile"},"buildpack-deps:bullseye")," image, which itself inherits from its own image but with a different tag: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/docker-library/buildpack-deps/blob/65d69325ad741cea6dee20781c1faaab2e003d87/debian/bullseye/scm/Dockerfile"},"buildpack-deps:bullseye-scm"),", which does the same with another of its tags: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/docker-library/buildpack-deps/blob/98a5ab81d47a106c458cdf90733df0ee8beea06c/debian/bullseye/curl/Dockerfile"},"buildpack-deps:bullseye-curl"),", which inherits from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/debuerreotype/docker-debian-artifacts/blob/6f70a9d23b69cd08feccb8a8aac5cdfe985e306d/bullseye/Dockerfile"},"debian:bullseye")," image. Finally, we can see ",(0,r.kt)("inlineCode",{parentName:"p"},"debian")," inherits from ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/scratch"},"scratch"),", which is used for building base images."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"FROM scratch")," is considered a ",(0,r.kt)("inlineCode",{parentName:"p"},"no-op")," in a Dockerfile and won't create an extra layer. Fascinating!")),(0,r.kt)("h2",{id:"first-dockerfile"},"First Dockerfile"),(0,r.kt)("p",null,"Let's create our first Dockerfile. Wee'll keep it nice and simple to learn the main commands with the Docker CLI. Create a file name 'Dockerfile' in your working directory and copy the code below into it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'},"FROM nginx\nRUN echo '<h1>MLOps Made Easy!!</h1>' > /usr/share/nginx/html/index.html\n")),(0,r.kt)("p",null,"We're using the ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM")," command to inherit from a base ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx")," image. This is the same image we've used before. We know it exposes a web application on it's container port 80. We've then added our own ",(0,r.kt)("em",{parentName:"p"},"layer")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN")," command, and told it to execute an echo command and pipe its output to an .html file (this is the default location that Nginx serves static html files from)."),(0,r.kt)("h3",{id:"docker-build"},"Docker build"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker build")," is the command to build images. ",(0,r.kt)("inlineCode",{parentName:"p"},"-t")," flag tells what to tag the image as. This is in the form ",(0,r.kt)("inlineCode",{parentName:"p"},"<registry-address>/<namespace>/<image-name>:<image-tag>"),", but as mentioned before, we can omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"registry address")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tag"),", and Docker assumes ",(0,r.kt)("inlineCode",{parentName:"p"},"docker.io")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"latest"),", respectively. Lastly we specify the location of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),". We have put ",(0,r.kt)("inlineCode",{parentName:"p"},".")," to mean in the current directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t <DOCKERHUB_USERNAME>/mynginx .\n")),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Of course replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<DOCKERHUB_USERNAME>")," with your actual username!")),(0,r.kt)("h3",{id:"docker-push"},"Docker push"),(0,r.kt)("p",null,"Now that we've build the container, we can push it to Dockerhub with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker push <DOCKERHUB_USERNAME>/mynginx\n")),(0,r.kt)("h3",{id:"docker-run"},"Docker run"),(0,r.kt)("p",null,"Finally, we can check if it worked by issuing the command below; running the container in the background with ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," and binding our computer's port ",(0,r.kt)("inlineCode",{parentName:"p"},"8080")," with the nginx port ",(0,r.kt)("inlineCode",{parentName:"p"},"80")," inside the container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --name nginxcontainer -p 8080:80 <DOCKERHUB_USERNAME>/mynginx\n")),(0,r.kt)("p",null,"We can see if it worked by clicking ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080"},"http://localhost:8080"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5621).Z,width:"328",height:"102"})),(0,r.kt)("p",null,"Great!"),(0,r.kt)("h2",{id:"bigger-better"},"Bigger, Better."),(0,r.kt)("p",null,"In the spirit of our ",(0,r.kt)("a",{parentName:"p",href:"../about#motivation"},"ethos")," to go beyond the ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello, World!")," examples, let's do a more complicated project."),(0,r.kt)("p",null,"We'll make a better looking web application and learn some more Dockerfile commands along the way."),(0,r.kt)("p",null,"The purpose of this tutorial is not to learn Python, I assume some pre-requisite skills, so we won't go into too much detail for the following script."),(0,r.kt)("h3",{id:"the-app"},"The app"),(0,r.kt)("p",null,"We're using ",(0,r.kt)("a",{parentName:"p",href:"https://streamlit.io/"},"Streamlit"),", which is a great tool for Python devs to quickly make a nice looking GUI without knowing web development. We're also using the ",(0,r.kt)("a",{parentName:"p",href:"https://www.kaggle.com/datasets/gregorut/videogamesales"},"Video Game Sales")," dataset on Kaggle."),(0,r.kt)("p",null,"We've created a nice stacked bar chart that shows us total sales per company, broken up by region, with a nice interactive slider to select how many of the top companies you want to view on the chart."),(0,r.kt)("p",null,"We've also made a nice line chart of total global sales per year."),(0,r.kt)("p",null,"Copy the code below into a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"app.py")," in your working directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'import streamlit as st\nimport pandas as pd\n\nurl = ("https://raw.githubusercontent.com/justingodden/mlops-made-easy/"\n"master/project-code/01-containers/streamlit-project/vgsales.csv")\n\n@st.cache_data\ndef load_data(url):\n    dataset = pd.read_csv(url)\n    return dataset\n\ndata = load_data(url)\n\nst.title("Video Game Data App")\n\nn = st.slider("Top N Companies", 1, 20, 5)\nst.header(f"Total Sales Broken by Region for top {n} Companies")\nst.bar_chart(\n    data.groupby("Publisher")[\n        ["NA_Sales", "EU_Sales", "JP_Sales", "Other_Sales", "Global_Sales"]\n    ]\n    .sum()\n    .sort_values(ascending=False, by="Global_Sales")\n    .drop("Global_Sales", axis=1)\n    .head(n)\n)\n\nst.header("Total Sales per Year")\nst.line_chart(data.groupby("Year")["Global_Sales"].sum())\n\n')),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"We also need a ",(0,r.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file in the working directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="requirements.txt"',title:'"requirements.txt"'},"streamlit\npandas\n")),(0,r.kt)("h3",{id:"dockerfile-1"},"Dockerfile"),(0,r.kt)("p",null,"Lastly, create a file in your working directory named ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," with the code below pasted in."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'},'FROM python:3.10-slim-buster\n\nUSER root\n\nWORKDIR /app/\n\nCOPY . .\n\nRUN python -m venv venv\n\nRUN . venv/bin/activate\n\nRUN pip install --upgrade pip\n\nRUN pip install --no-cache-dir -r requirements.txt\n\nEXPOSE 8501\n\nUSER 1001\n\nENTRYPOINT ["streamlit"]\n\nCMD ["run", "app.py"]\n')),(0,r.kt)("p",null,"Now, we've just seen a few new commands."),(0,r.kt)("p",null,"We know the ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM")," command, but this time we've used a ",(0,r.kt)("inlineCode",{parentName:"p"},"python")," image. More specifically one with the ",(0,r.kt)("inlineCode",{parentName:"p"},"3.10-slim-buster")," tag. This means it's packaged with Python version 3.10 and is based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"debian:slim-buster")," image, which is a very small Linux distribution with only the essential packages installed so it has a smaller footprint and a quicker load up time."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"USER")," command specifies which Linux user to run the commands as. ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," user is needed to interact with ",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),". A Dockerfile's default user is whatever is specified in the image it inherits from. Specifying it here isn't strictly necessary, as I believe the ",(0,r.kt)("inlineCode",{parentName:"p"},"python")," image runs as root, otherwise it wouldn't be able to use ",(0,r.kt)("inlineCode",{parentName:"p"},"pip"),". Either way, it's nice to be explicit."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"WORKDIR")," both creates a directory, and then moved into it, making it the ",(0,r.kt)("em",{parentName:"p"},"working directory"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"COPY <from> <to>")," copies files from the host machine (your computer) into the container image. We've used ",(0,r.kt)("inlineCode",{parentName:"p"},".")," for both, meaning from whatever folder you're currently in right now on your computer, to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/app/")," directory in the container image. This will copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"app.py")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"requirements.txt")," files over."),(0,r.kt)("p",null,"We've seen ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN")," before. We create a virtual environment, activate it, upgrade ",(0,r.kt)("inlineCode",{parentName:"p"},"pip")," and install ",(0,r.kt)("inlineCode",{parentName:"p"},"streamlit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pandas"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"streamlit")," runs its web application on port ",(0,r.kt)("inlineCode",{parentName:"p"},"8501"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"EXPOSE")," command informs Docker that the container listens on the specified network ports at runtime. However, the ",(0,r.kt)("inlineCode",{parentName:"p"},"EXPOSE")," command does not actually publish the port. It functions as a type of documentation between the person who builds the image and the person who runs the container, about which ports are intended to be published. To actually publish the port when running the container, we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," flag on ",(0,r.kt)("inlineCode",{parentName:"p"},"docker run"),"."),(0,r.kt)("p",null,"As per best practices, we don't run the container with ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," privileges, we only used that to install some packages. Now we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"USER")," command to change to uid ",(0,r.kt)("inlineCode",{parentName:"p"},"1001")," with only enough permissions to run the app."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CMD")," are very similar. In fact, they're also similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN"),". They all issue commands, but do it in different ways and are used for different reasons. ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN")," executes commands in ",(0,r.kt)("em",{parentName:"p"},"shell form")," where the command is run in a shell (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"/bin/sh/"),") which executes the command (just like we would in a terminal). This is useful for installing packages for example. It looks like ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install etc etc"),"."),(0,r.kt)("p",null,"Whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CMD")," are in ",(0,r.kt)("em",{parentName:"p"},"exec form")," which looks like ",'["pip", "install", "etc", "etc"]',". These are not run through a shell, they are run through the specified binary directly. ",(0,r.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," is run first, then ",(0,r.kt)("inlineCode",{parentName:"p"},"CMD")," is appended onto it. ",(0,r.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," in not overridable, but ",(0,r.kt)("inlineCode",{parentName:"p"},"CMD")," can be overridden when creating a container from the image. This allows a baseline behaviour with ",(0,r.kt)("inlineCode",{parentName:"p"},"ENTRYPOINT")," but with flexible configurations with ",(0,r.kt)("inlineCode",{parentName:"p"},"CMD"),". An example might be that you have a application that runs a webserver from the command ",(0,r.kt)("inlineCode",{parentName:"p"},"webserver"),", and it takes in as command-line arguments the location of the .html file to serve and the port to expose. So you write your ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile"},'...\nENTRYPOINT ["webserver"]\nCMD ["--location", "/html/index.html", "--port", "8888"]\n')),(0,r.kt)("p",null,"This provides default values if the user doesn't want to change anything, but if they do, we can do as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run example-image --location /other/file.html --port 9999\n")),(0,r.kt)("h3",{id:"dockerhub-repo"},"Dockerhub repo"),(0,r.kt)("p",null,"Before we forget, make another public repository on your Dockerhub account called 'mystreamlitapp'."),(0,r.kt)("h3",{id:"build-push-run"},"Build, push, run"),(0,r.kt)("p",null,"Okay, let's give it a go. Same as before (remember to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<DOCKERHUB_USERNAME>")," with ",(0,r.kt)("strong",{parentName:"p"},"your Dockerhub username"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t <DOCKERHUB_USERNAME>/mystreamlitapp:0.1.0 .\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker push <DOCKERHUB_USERNAME>/mystreamlitapp:0.1.0\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --name streamlitapp -p 8081:8501 <DOCKERHUB_USERNAME>/mystreamlitapp:0.1.0\n")),(0,r.kt)("h3",{id:"result"},"Result"),(0,r.kt)("p",null,"If all goes to plan, we can open ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8081"},"http://localhost:8081")," and see a beautiful interactive dashboard!"),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{src:o})),(0,r.kt)("h2",{id:"cleanup"},"Cleanup"),(0,r.kt)("p",null,"Excellent work. Let's just clear up the mess we made and shut down the running containers!"),(0,r.kt)("h3",{id:"docker-kill"},(0,r.kt)("inlineCode",{parentName:"h3"},"docker kill")),(0,r.kt)("p",null,"First we can use the two ",(0,r.kt)("inlineCode",{parentName:"p"},"kill")," commands below to stop both running containers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker kill nginxcontainer\ndocker kill streamlitapp\n")),(0,r.kt)("h3",{id:"docker-rm"},(0,r.kt)("inlineCode",{parentName:"h3"},"docker rm")),(0,r.kt)("p",null,"The we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"rm")," to remove the stopped container from our computer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm nginxcontainer\ndocker rm streamlitapp\n\n")),(0,r.kt)("h3",{id:"docker-rmi"},(0,r.kt)("inlineCode",{parentName:"h3"},"docker rmi")),(0,r.kt)("p",null,"Optionally, we can also delete the docker image with ",(0,r.kt)("inlineCode",{parentName:"p"},"rmi")," if we wish to save some hard disk space."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker rmi <DOCKERHUB_USERNAME>/mynginx\ndocker rmi <DOCKERHUB_USERNAME>/mystreamlitapp:0.1.0\n")),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"docker rmi <username>/<image>")," does not delete the image from Dockerhub, only from where it's stored locally on your computer.")))}h.isMDXComponent=!0},5621:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUgAAABmCAYAAACpxQjBAAAZJ0lEQVR4nO3deVgV1/kH8O+9XBbxslhcUNwxLlTBhYC4QTQhBDckSIiKSSxiY2vkcRe1SqKtTaKGVB+XR+PaEBFR1Lo0GvfEFRWse8UUpXmiJhr25fL+/qB3fvfcmbkLUiTp+3me+zzMnDNnzhyG9545M2fQEBGBMcaYjPZ5V4AxxhoqDpCMMaaCAyRjjKngAMkYYyo4QDLGmAoOkIwxpoIDJGOMqeAAyRhjKjhAMsaYCg6QjDGmggMkY4yp4ADJGGMqOECyBu3ChQvQaDSKn2HDhj3v6rFfOKsBUq/Xq56gGo0Gf/zjH63uZNasWRbLePnllwEAw4YNs5jP+Ll8+XKtDtZgMCAzMxPjx49H9+7d4eHhAZ1OB3d3d/j5+WH8+PHYvXs3qqura1V+Q/Dxxx9bbDt3d3eUlZVZLOPp06dwdna2WM6pU6fq5XhatmyJyZMnIzAwsF72Z4mt56fa59y5c8/7EOqcq6urcIwtWrSok7wNhc5ahqlTp+Lx48fYsWMHfvjhB1l6eno6kpOTLZaxa9cuxfWdOnXCa6+9hu7duwMAoqOj0bFjR3z55Ze4ceOGkNfBwQFxcXHw9vZG8+bNrVVb5ujRo0hMTMSdO3ekdVqtFl5eXvjpp59w/fp1XL9+HVu3bkW3bt2wYcMGhISE2L2f5+3FF1/EtGnTcOnSJRw9elSWXlhYiIMHDyIqKkq1jL1796KiokK2XqPRICYmBm3btkXr1q3rtN5qfHx8sGrVKlRXV6NXr17Iycmpl/0qsXR+BgUFYeDAgcK6srIypKen4+HDhwCg2KY/dz4+PsLflI+PT53kbTDIRmvWrCEAip9bt26pbnflyhXV7S5duqS4zfXr12V5x4wZY2tVZTZs2EBarVYqy9PTkz777DMqKSkhIqKKigratWsXtWrVSsqj0+koLS2t1vt83gwGA/n4+Ci2u7W2HDVqlOJ2I0eOrKfaK4uNjRXqM3To0OdSD6Xzc/bs2Yp5jx8/LuU5cuRIPdf0vy80NFRoh2HDhtVJ3obC5jHItm3bAgDatWsHLy8vIS09PV11u8zMTABAz549ZWnt2rVT3EZpfW17LMePH0diYqJ02azT6XDo0CG88847aNSoEQDA0dERUVFR+Nvf/gZnZ2cAQFVVFcaPH48zZ87Uar/Pm1arlb6he/fuLaTt3btX9TK7pKQEhw4dgoeHBzp06CCkqf2+6otGo3mu+zeypx0GDRqEli1bAvhl9iDN/y4t9QrtydtQ2BwgjSenTqeTXZ7ZEiCjo6NVy7RlfW3+OKqqqjBp0iQYDAZpXXx8PIKCghTz9+zZE5MnT5aWKysrMWnSpJ/tmKSxzWJiYoT2KywsxIEDBxS3OXjwIEpKSjB06FA4OTkplve86HRWR4Tqhb3tYOxc/BIDpHmQs3aJbWvehqJWd7FjY2OF5ZycHNy6dUuW786dO8jNzUX37t3xwgsv1K6Gz2DPnj24efOmsG78+PEWtzFPz8nJwb59+6Tlt99+W3EA/t///jcA4PPPP0dISAg8PT2h1+vh7++PlJQUFBUVqe7z3r17mDNnDgIDA+Hp6QmdTgcPDw/06NEDSUlJuHfvnp1HLmrTpg369u0rrNuxY4di3p07dwJQ/kKzpKysDGvWrMGIESPQsWNH6PV66Th69eqFpKQk3L5922IZBoMBmzZtQv/+/dG0aVPo9Xr07NkTqampMBgMcHNzs6tO//znP5GUlIQePXrAw8MDzs7O8PHxwYgRI5CWliZ8cf43TZ8+HX/605/QtWtXxfSsrCzEx8cLNw71ej06d+6M+Ph4HDt2zGL5hYWFWLFiBQYPHowWLVrAyckJjRs3RseOHTF27Fh8/fXXUt6wsDCLN5JWrlwJAEhISFBMNz+GX3qAtHkM8sCBAwSAfH19qbKykry8vITxhA8++EC2zdKlSwkA/eEPf6C0tDTZuM2PP/6ouK/S0lKbx3gsiYuLE8pwcnKi0tJSi9tUV1eTXq8XtouNjZXSt23bRkOGDJHVb8+ePTRt2jTV8dbOnTtTQUGBbH9btmwhJycnAkAODg4UFhZGr7zyCrm5uQljpjdu3LD7+IODgwkAbd26lZYvXy7UR6/Xy9qivLycPDw8qFGjRlRcXExdunQRtpk6darifh4+fEidO3cW8jZp0oS6d+9OGo1GaP+srCzFMsrLyyk6Olq1/YYPH07z58+3eQzy008/JUdHR2FMuUmTJsL2/fv3p++//97udq2r87O6uppef/11oRxnZ2fy9/cnV1dXm8q/dOmSMHYeEBBAw4YNE9ZptVppPH3KlCmyso0ff39/6fezbNky6tq1q5Du6OhIMTExwv537twp5Dl48KDq8dqTt6GoVYAkIkpISJA1rrmgoCACQJcvX34uAdL0JAFA3bp1s2k7Y72Nn2bNmsnyREZGCnkCAwNJo9HQtGnT6Pjx47R9+3bZ/iMiIoQybt26JQVHnU5HFy5ckNLy8vKoWbNm0rbJycl2H79pgMzPzxeCFQDKzMwU8u/fv58AUFRUFBGRzQFy5cqVQr6uXbvSTz/9REQ1N8jM29J4c8zUkiVLhHyNGjWilStX0sWLF2n16tWk1+tl7akWIDdv3izkGzJkCD169IiIiNavXy8LktXV1Xa1a12dn1evXhXKcHJyoqtXrxIR0Y0bN0in0wnp58+fF7avqqoiX19fKT01NVVKKy4uFm6K9OvXT0q7c+eOrBMwYsQIxTq++eabBIA0Go3iTaYzZ84I5eTm5qoerz15G4paB8hDhw7JThLTXo7xD9KYv74DZGFhoayM8PBwm7YdOXKkbNuHDx8KeebNmyfLk5CQIORRaqOLFy9K6aZBoVOnTrJ6JCcnS+m1uaNuGiCJiEJCQoS6xMXFCfmNX3pbtmwhItsD5MGDB4Xgu3DhQilN6fdw+PBhYfvCwkLy8PAQ8ixZskTIs27dOlk5SgGysLCQPD09pTxarZbu3r0r5DE/royMDNsa9D/qKkA+evRICFShoaFCemBgoLCP+fPnC+mnT58W0u/fvy+k//3vf5fSJk2aJKS9++67wrZ9+vRRrONvfvMbAtTvON+/f18o54cfflA9XnvyNhS1nkkzePBgi3ezMzMzQUQYNWpUbXfxTIzPnpmydQxLr9fL1n333XfCstINg4SEBGH5lVdegbe3t7Bu9+7d0s8PHjyQfs7Ly5PdMQ8PD8fvf/977Nq1C3FxcTbV3RLzseN9+/ahtLQUQM34X1ZWFhwdHTF8+HC7yn311Vdx4sQJzJw5E3FxcejXr5+Uptfr0bhxYyH/t99+KywfOXIET58+Fda9/fbbwvKbb75p002a7du348mTJ9JycHCw7G58aGiosGy8kfgsPv/8c4SFhSl+1B6q9/LywuXLl/HBBx9g3LhxGDlypJBu/iC1ebuZnj/GOpgKCAjAxIkTsWrVKqxYsUJImzhxorB88eJFxTFi47O0EyZMUDwGb29vODg4AAAaNWqEJk2aKOazN29DUevbgjqdDqNGjcL69euldTt27MCCBQsAWL57XR+UHmMxvyurxvj4j7XyTGk0GtmjTBqNBr1798b+/fuldVeuXJF+Nj7+AdQEqLCwMEyZMgVTpkxB27ZtERoaKvtjfhYxMTGYNm0a6D//Cr2oqAgHDhxAdHQ0Tp48iYcPHyI8PByenp52lz1gwAAMGDBAMc08sJWUlAjL2dnZwrK3tzdatWolrNPr9ejatSuuXr1qsR7mNzR8fX1leZo1ayYs5+bmWizTFvn5+cjPz1dMe/Tokep2vr6+mD9/vmKatXYzPX+Amhlr586dw8yZMxEUFITmzZtj3bp1imX36tULffr0wcWLF6V1W7duxfvvvy8tZ2dn4+7du2jSpAmGDh2qWI6DgwNatGiBgoICqzdd7MnbUDzTcxOxsbFCgMzNzcWNGzfg5eWFU6dOoVWrVrK7p/VFKciZn2BqlPIplWeqadOm0jOUptq0aSMs/+tf/5J+jo2NRUpKCqqqqgAA5eXl+Pjjj7F8+XKEhYUhISEBo0ePrrPHW1q3bo2QkBDhrmZ6ejqio6Pr5AutoKAA33zzDfLy8lBUVCQdl7UvF9M2MdZTrf7WAuQ//vEPYTkrKwvt27cX1pn3VpVmiNlr9uzZWLp0aa22LSoqwqlTp3Dr1i08ffoU5eXlAIDr169b3C4kJAQdOnRAXl6etC4jIwMZGRnw8/PDhAkTMGHCBNWe2sSJE4UAuW3bNqSkpEiPMWVkZAAARo8ebbFz0bp1axQUFNj0rLI9eRuCZ/rLGzx4MJo2bSp8Q+7YsQMtW7aEwWBAVFTUc3t2rnnz5tBoNFJvCYDFR21MFRcXy9aZXyqbc3V1VVxvfrleWFgo/dy5c2esXr0av/3tb4VHTqqrq/HVV1/hq6++wsKFC7Fp0ybhsvVZxMbGCgFy3759KCkpwe7du6HVai1OQVRz//59/O53v8PevXuF9raVaZsAkF2SGykNfZj78ccfZWWbl2/OGMjrW3l5OebOnYvVq1db/RJR4uDggPT0dERERODx48dC2rVr1zBjxgwsXrwYH374oeySGgDGjBmD6dOnS+d7Xl4eTp06JU2ZND7yNW7cOIv1MPYGbekV2pO3IXimt/k4ODjIxhjT09Nr/SxdXXJ1dZUe0DW6f/++Tdua52vevLlsvNWcrQ+9mweQhIQEnD59WjaP1+j27dt46aWXcPLkSWvVton5Q+PFxcVYtGgR8vPz0a9fP7tfIFBUVITQ0FDs2bNHOragoCCcPXsWZWVlICJ4eHhYLMO8h6zVKp+WtgRf84f6p0+fDqq5Gan6MR9fri/x8fFYsWKFFBybNWuGXbt24enTpyAi2ZikksDAQFy5cgXx8fHS+J6pJ0+eIDExEX/+859laW5ubnjjjTeEdVu2bAHw/882t2vXTnXoxIgDpAXmA/9Xr17Fl19+CS8vrzodP7Pm4sWLmDFjhvASgUGDBgl57ty5I12+qCEi2YsIBg8ebHX/apfv5uuVekHBwcE4ceIEsrOzMXnyZNklUUVFBZKSkqzWwRY+Pj6y3ujy5csB1O4LbePGjbh796607ODggJ07dyIoKEhxyEGJ+fEq9eAtrbdU1vfff29THepbbm6u7GH91NRUREVFwd3d3a6yfHx8sGXLFty7dw/vv/++4rjrwoULFW9cmvcsMzIyUFFRIV1ejxkzxupV4IIFC5Cbm4uZM2daras9eRuCZw6QL730kmzQ22AwYPjw4fU6NSwzMxPLli0T7uyZ3/k1GAxWX9OVnZ0t+0O0dokBAI8fP1a8VCsoKBCWTcckiQhZWVlYu3YtgJqB81WrViE/Px+LFy8W2i87O9vmMVRrRo8eLSwbL+9rEyDPnj0rLP/617+WjS9VVlZaLMP87UzmbWZtvSk/Pz9huS5uwNSFo0ePYtu2bdIxmLcbAERERAjL1toNAM6dO4elS5eitLQUrVu3xoIFC3Dr1i1s375daNfy8nJcuHBBtn3fvn2lt2kBNT3OI0eO4IsvvgBg27nfvHlzdO/eHU2bNq3TvA3BMwdIpctsoP4vr413Ql1cXKR1ERERwi8fqOnxWGK8xDDq3bs3IiMjre7fYDDg2rVrsvWXLl0Slv39/aWfk5KSEBUVJbuL2bhxY8ybNw9z5861ut/aGD16tKxX0Lt371q9jMK8R25+B/zJkydWA3twcLCwfP/+fVlvp7S0VNazV2J8t6jRlStXZI/HmNq+fbvVMutCUlIS4uPjpRsvSlcy5kMR5o/xmMvMzETfvn0xd+5coRev1WoRGxuLtLQ0Ib/aEIV5L3LDhg24ffs2evXqJfvCMVdSUoJly5bhnXfewbJlyyz+ru3J21DYHCCNjav04gbzHoler0d4eLjNZdq6Xk1xcTGOHz8OQAyQWq0Wa9euFXpiaWlpOHz4sGI52dnZWLNmjbTs7OyMdevW2XyjafPmzcLy6dOnZX+cps8YGl8Y8ejRI5w+fVpWXpcuXaSffX19VW8EqVH7nbVq1Up2mW3LF5rS78X8Lr1xTrqR6Tx2I/P6DBw4UHZsf/3rX4Xl7du3y172oNRjj4uLE3onRCSNQ5r78MMPERcXZ/cYpL3nZ2lpqfROAONxmrcbID5r++2338p6v+btdvDgQakups/XGpmePwDQo0cPxfrFx8cLfzd79+4FAIwdO1b5gEzMmjULM2bMwKZNmzBjxgzMmDGjTvI2GLY+Ub527VoCQC4uLvTkyRMhraqqSpgWZzp32eijjz6SzT6w532QlmYqrFixQspnnKplasuWLbL3QW7cuJGKi4uJiKisrIwyMjKoZcuWUh5HR0fauXOn6j4XLlwo1M/b25t0Oh2lpKTQ+fPnac+ePdS+fXshz6BBg4QyIiIipDR/f39hrvbDhw+lmTAA6JNPPlGtixLT90HOmTNHlp6amirU7dq1a0J6RUWFbO6y0vsgTd93CNRMSTNOicvJyaFWrVqRg4ODkGfKlCmychYsWCDkcXV1pdWrV9OZM2foL3/5C7m5ucmmd3p7e0u/Q1MZGRmy8yc8PJyysrLom2++obS0NHr11VcJqJnSWFhYaFfb3rx5067z03Tqo/GcLyoqkk33W7ZsGRHVzLAJCwuTtVuPHj2Eco3vOgBA7u7u9PXXX0tp5eXlwmwZ4/RRNWPHjhX2pdVq6cGDB1bbonfv3sJ2AQEBdZK3obAaIJOTk+ndd98ld3d36cC6dOlCiYmJwkT/xMREKf2LL76Q1p84cYLeeustcnZ2lp1UnTt3pvfee4/Wrl1LRDXzdt977z3q1q2bLG9QUBBNnz5d9omJiRGC3507dxSP4+jRo9SpUyehTAcHB/Ly8hJeagCA/Pz86OzZsxbbxTxARkZGClMDzT9t27ale/fuCWVkZ2cLQcjFxYUGDhxIQUFBwgsFEhMTbZ4vfOzYMZo2bZowD1en09Hrr79OmzZtkvI9ePBAmh7YtWtXoYxZs2bJTmbjH01cXBxNnz6d8vLypPxvvfWWkM/R0ZHatGlDWq2WFi1aRHPmzJGljx49WvhdlZaW0tChQ1Xbb+DAgVReXi57gYKvry9NmDCB8vPzhWPYvHkzubi4qJZnPJ7169fb1K5ENefn1KlT6YUXXrD5/Jw0aZLw4pGbN29K5X322Weyctq0aUPOzs4UGRlJu3fvlqWHhYXR/v37iYjoyZMnFBAQIHw59enThwYMGCB0WIKDg61O6zt27Jiwn5dfftmmNjH/nb322mt1krehsBogGzdurHqCXb9+Xcp3+PBhAmreRmL6jWzau1P7DBkyhIjkDVibj/l8VFOVlZW0Y8cOGjduHPn5+ZGbmxs5ODiQXq+nbt26UXx8PO3evZsMBoPVhjMPkH379iWimjnn/fv3J09PT3JxcaEuXbrQ7NmzVU/QgoICSk5Opr59+1LTpk3J0dGRXFxcqEOHDjRmzBi730Kt1FM3ft544w0h74ABAwiQvwjDfF600ufkyZNSfoPBQKmpqeTv708uLi7k6upKISEhtG/fPiKSzxk2fo4ePSrst7KyktatW0f9+vUjLy8vcnV1JT8/P1q8eDGVlZUREal+CZm/yIGo5ktg3rx59OKLL9KvfvUr0ul05O7uTn5+fpSYmEiXL1+2q23r4vw0D+QHDhygsLAwcnNzIycnJ+rSpQt98sknVFFRQWVlZbJeJiDOdS8pKaGVK1dSeHg4tWzZklxcXMjR0ZG8vb0pIiKCNm7cSFVVVTYdn+kbmTZu3GjTNrm5udSnTx9ycXGhwMBAysnJqZO8DYWGqBZP9jIsWrQIKSkp0rKfn59sFgdjPycBAQHIycmBq6srvvvuO7vfv/lLxP/2tY78Et8Wzf53XLhwQfqHaNHR0Rwc/4MDZB3hjjj7OVuyZIn0s+m/HflfxwGylsxf119fr+9nrK6tXbtWekwoNDT0Z/nvjv9bOEDW0vnz54XlBw8eqL7uirGG6PHjx0hOTpZ6jE5OTkhNTX3OtWpYGsa/ifsZSUlJweHDh2VTFisrKxEcHIzIyEjExMTIpo0x1lBERkYiPz8f165dkx4+b9y4MTZv3oyAgIDnXLuGhe9i26l9+/YWp64BwLx587B48eJ6qhFj9jHO5vHw8ECnTp2kd48+7/973hBxgGSMMRU8BskYYyo4QDLGmAoOkIwxpoIDJGOMqeAAyRhjKjhAMsaYCg6QjDGmggMkY4yp4ADJGGMqOEAyxpgKDpCMMaaCAyRjjKngAMkYYyo4QDLGmAoOkIwxpoIDJGOMqeAAyRhjKjhAMsaYCg6QjDGmggMkY4yp4ADJGGMqOEAyxpgKDpCMMaaCAyRjjKngAMkYYyo4QDLGmAoOkIwxpoIDJGOMqeAAyRhjKjhAMsaYCg6QjDGmggMkY4yp4ADJGGMqOEAyxpgKDpCMMaaCAyRjjKngAMkYYyo4QDLGmAoOkIwxpoIDJGOMqeAAyRhjKjhAMsaYCg6QjDGmggMkY4yp4ADJGGMqOEAyxpgKDpCMMaaCAyRjjKngAMkYYyo4QDLGmAoOkIwxpoIDJGOMqeAAyRhjKjhAMsaYCg6QjDGmggMkY4yp4ADJGGMqOEAyxpgKDpCMMabi/wD31W5r3MlYswAAAABJRU5ErkJggg=="}}]);