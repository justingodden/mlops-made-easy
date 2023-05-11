---
sidebar_position: 3
---

# Up and Running

Time to get hands-on with Kubernetes.

## Installation

We'll need to install two tools to create a cluster and to interact with that cluster, `kubectl` and `kind`.

### Install `kubectl`

First, let's install the Kubernetes command-line tool, [`kubectl`](https://kubernetes.io/docs/reference/kubectl/) which allows you to run commands against Kubernetes clusters. You can use kubectl to deploy applications, inspect and manage cluster resources, and view logs.

kubectl is installable on a variety of Linux platforms, macOS and Windows. Find your preferred operating system below.

- [Install kubectl on Linux](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux)
- [Install kubectl on macOS](https://kubernetes.io/docs/tasks/tools/install-kubectl-macos)
- [Install kubectl on Windows](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows)

As mentioned in the installation guides, you can issue the command below to ensure that it installed successfully.

```bash
kubectl version --client
```

:::info Note

The above command will generate a warning:

```
WARNING: This version information is deprecated and will be replaced with the output from kubectl version --short.
```

You can ignore this warning. You are only checking the version of kubectl that you have installed.

:::

### Install `kind`

`kind` is a tool for running local Kubernetes clusters inside Docker containers (KinD - Kubernetes in Docker). It's only made for local development, not production, but is immensely useful. You can install `kind` for your appropriate OS using their [installation guide](https://kind.sigs.k8s.io/docs/user/quick-start/).

## `kind create cluster`

All you need is the command `kind create cluster` and that will spin up a local Kubernetes cluster. But before you do, you can also create the cluster from a config yaml file with extra options. Create a file `kind-config.yaml` and paste in the code below. This adds annotations to the cluster node for it to work with an `Ingress Controller`. We will go into much greater details about the Kubernetes `Ingress` object later, but essentially it's a way of exposing your services to the outside the cluster, and doing intelligent path-based routing for HTTP traffic (e.g. example.com/a routes to application A and example.com/b routes to application B). This need to be set up during cluster creation and will come in handy later.

The `extraPortMappings` allow the local host to make requests to the Ingress controller over ports 80/443, so you can test an application routing with `http://localhost/app-a` for example.

```yaml title="kind-config.yaml"
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
  - role: control-plane
    kubeadmConfigPatches:
      - |
        kind: InitConfiguration
        nodeRegistration:
          kubeletExtraArgs:
            node-labels: "ingress-ready=true"
    extraPortMappings:
      - containerPort: 80
        hostPort: 80
        protocol: TCP
      - containerPort: 443
        hostPort: 443
        protocol: TCP
```

There are many other options you can add, such as giving the cluster a name with the `--name` flag, but by default the cluster is just named `kind` and that's fine to leave it like that. You can also set the number of master and worker nodes to match your production environment, but we wont mess with any of those settings.

Create the cluster and pass it the config file with the command below:

```bash
kind create cluster --config=kind-config.yaml
```

## Hello, Kubernetes!

Okay, we have our K8s cluster with `kind`, and we have `kubectl` to interactive with it. Let's get our first application up and running. We'll keep this section _relatively_ simple, as we'll be using Kubernetes throughout course, so there will be plenty of opportunity to learn more in depth.

We can re-use the `streamlit` application from the Docker [section](../containers/docker-custom-containers#the-app). If you followed along, the container image address would be `<your-dockerhub-username>/mystreamlitapp:0.1.0`, but if not then you can use our pre-made one with `justingodden/mystreamlitapp:0.1.0`

## Most basic version

### Pod

We can start with K8s' lowest abstraction, the `Pod`. This can contain one or more containers. In the manifest below, we have created a `kind: Pod`, named it `my-pod`, given it the specification to have one container named `my-container`, told it to use the image `justingodden/mystreamlitapp:0.1.0` (or replace this with your Dockerhub username), and finally said to expose the container's port 8501 on the pod's port 8501.

Create the yaml file below, named `pod.yaml` in your working directory.

```yaml title="pod.yaml"
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
    - name: my-container
      image: justingodden/mystreamlitapp:0.1.0 # replace with your username if you'd like
      ports:
        - containerPort: 8501
```

To create the resource in our cluster use the following command:

```bash
kubectl create -f pod.yaml
```

The `-f` flag tells `kubectl` to use a file as a manifest for the object that you'd like to create.

We can test if this worked using the command below.

```bash
kubectl get pods
```

Hopefully if it went to plan, you should see an output like below; a pod named `my-pod` in the `Running` state, with `1/1` containers ready:

```
NAME     READY   STATUS    RESTARTS   AGE
my-pod   1/1     Running   0          38s
```

### Port Forward

To view our application, can forward a port on our localhost to the port `8501` on the running pod. W can use local port `8888` with the command below:

```bash
kubectl port-forward pod/my-pod 8888:8501
```

To test this is working correctly, we can use the link [http://localhost:8888](http://localhost:8888) to see the application running.

### Cleanup

Before we continue, we can use `Ctrl+C` to stop the running `port-forward` command, and use the command below to delete the pod resource from the cluster:

```bash
kubectl delete -f pod.yaml
```

Which should return:

```
pod "my-pod" deleted
```

## More Robust Version

Typically, you're not dealing with `pods`, but rather the `deployments` which manage the replication of pods; their auto-healing if a pod fails; and new app version rollouts and rollback etc.

And although port-forwarding in general isn't used in production and we will use it again just to test for this example, the previous example is even less representative of a prod environment as your traffic wouldn't go directly to a pod, it would go through a `service` which load balances across the available replicas of the app.

On top of this, since we didn't specify a `namespace` when creating the pod, the app was created in the `default` namespace which is also not common in production.

So let's improve on those.

### Namespace

First, lets create a namespace for this app's objects to be created in, which we'll call `prod-app`.

```yaml title="namespace.yaml"
apiVersion: v1
kind: Namespace
metadata:
  name: prod-app
```

Create the namespace using the command below:

```bash
kubectl create -f namespace.yaml
```

You should see the below printed to console:

```
namespace/prod-app created
```

### Deployment

Next, let's create a deployment of the app, with 3 replicas (with `spec.replicas: 3`). The `spec.template` is the same as the pod [above](#pod), apart from the added `spec.template.metadata.labels` where we labelled each pod with `app = my-app`. [`Labels`](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/) are a very important topic in Kubernetes. They are key/value pairs that are attached to objects such as pods, and are used to identify objects that are relevant to users or other objects.

`spec.selector.matchLabels` tells the deployment object to manage any pods with the label `app = my-app`, and `spec.template.metadata.labels` applies the label to the pods that it will create (3 replica pods in this case). These have to match.

Also, note than in `metadata.namespace` we have specified to create the deployment object in the `prod-app` namespace that we previously created.

```yaml title="deployment.yaml"
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deployment
  namespace: prod-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: my-container
          image: justingodden/mystreamlitapp:0.1.0
          ports:
            - containerPort: 8501
```

Create the deployment using the command below:

```bash
kubectl create -f deployment.yaml
```

You should see the below printed to console:

```
deployment.apps/my-deployment created
```

### Service

Let's now add a `Service` of type `ClusterIP` (accessible inside the cluster) to load balance requests to our pods. Just like the deployment above, services use `labels` to select which pod to route request traffic to. This is found in `spec.selector` with the value `app: my-app`. **This must be the same as `spec.template.metadata.labels` in the deployment above**.

We've chosen to expose port `8080` on the service, and have traffic directed to port `8501` on all the pods with label `app = my-app`.

```yaml title="service.yaml"
apiVersion: v1
kind: Service
metadata:
  name: my-service
  namespace: prod-app
spec:
  selector:
    app: my-app
  type: ClusterIP
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 8501
```

Create the service using the command below:

```bash
kubectl create -f service.yaml
```

You should see the below printed to console:

```
service/my-service created
```

### Ingress

`Ingress` objects are a relatively large topic to [explore](https://kubernetes.io/docs/concepts/services-networking/ingress/). Simply put, they expose HTTP and HTTPS routes from outside the cluster to services within the cluster. Kubernetes doesn't by default have the ability to handle ingress definitions. Instead, we use a third-party `ingress controller` to manage our path-based routing ingress rules. There are a few options, but the most popular and the one we'll use is Nginx Ingress Controller.

Nginx provide easy ways to install all the components necessary. We can use the specific manifest below which is specifically set up for use with a local `kind` cluster:

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

We can wait until the controller is ready with the command below:

```bash
kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=90s
```

Now we're ready to create an `Ingress` object. As mentioned, ingresses are worth reading up [more on](https://kubernetes.io/docs/concepts/services-networking/ingress/). But for now to highlight the important parts: they can have many routing rules in `spec.rules`. Here we just make one. We specify an `http` rule, with one `path`. We're using the regex `(.*)` to match any string. The rule says that if the url path `/my-app` plus anything else afterwards (e.g. /my-app/anything/else/etc) then route that to `backend.service` with `name` = `my-service` (the one we created [above](#service)) on port `8080`.

Now the problem is, if we go to `http://localhost/my-app`, this would redirect the request to the service as `http://my-service:8080/my-app`. But our app does not have anything set up for path `/my-app/`. It is expecting traffic on the root `/` path. So we use Nginx's `rewrite-target` functionality with the annotation `nginx.ingress.kubernetes.io/rewrite-target: /$1`. `$1` refers to the regex match position, where everything after `/my-app/` goes to the `$1` variable and the url is rewritten to just that. So `/my-app/` would become `/`, and `/my-app/other` would become `/other`

```yaml title="ingress.yaml"
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
  namespace: prod-app
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /$1
spec:
  rules:
    - http:
        paths:
          - path: /my-app/(.*)
            pathType: Prefix
            backend:
              service:
                name: my-service
                port:
                  number: 8080
```

Create the ingress using the command below:

```bash
kubectl create -f ingress.yaml
```

You should see the below printed to console:

```
ingress.networking.k8s.io/my-ingress created
```

Finally, to see if our work paid off, we can navigate to [http://localhost/my-app/](http://localhost/my-app/) and we should see our application running.

## Cleanup

To delete the objects we created:

```bash
kubectl delete -f ingress.yaml
kubectl delete -f service.yaml
kubectl delete -f deployment.yaml
kubectl delete -f namespace.yaml
```

### `kind delete cluster`

:::caution

We would not recommend deleting the cluster now, as we will be using it in the next section (and indeed the rest of the course - unless using a cloud k8s service). But just for your information of how to delete the cluster.

:::
To delete the cluster, we can use the command `kind delete cluster`.
