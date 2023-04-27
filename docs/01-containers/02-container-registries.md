---
sidebar_position: 2
---

# Container Registries

## Container vs Image

First to clear up some terminology, a container 'image' is the definition, or _blueprint_ for a container. Whereas an actual 'container' is an actual running instance of that packaged software. It is very similar to Object Oriented Programming (OOP) where you can have a `class` definition, and an `object` which is an instantiation of that class, or indeed many objects created from the class definition.

In the [previous page](docker-basics) we used the `nginx` container _image_ to instantiate our own running container that we named `mycontainer`. We could have similarly created a bunch of running containers called `mycontainer1`, `mycontainer2`, `...`, etc. all from that single _image_ definition.

## Container image address

The format for specifying the location of a container image that you want to create a container from is `<registry-address>/<namespace>/<image-name>:<image-tag>`

So we can download a image to our computer using the `docker pull` command, like so:

```bash
docker pull container-registry-website.com:6000/mycontainers/container1:v1.0
```

:::info Note

The above command obviously will not work, so don't run it in your termimal. There's no container registry at `container-registry-website.com`, unless you decide to make one yourself!

:::

## Dockerhub

So where did the Nginx image come from in the previous page's command `docker run --name mycontainer nginx` if we're only specifying the word `nginx` and no other parts of the address?

Well if you don't specify some details, Docker has defaults. [Dockerhub](https://hub.docker.com/) is a container image registry that Docker manage, and if you don't specify a registry address, it assumed you want to access there. The actual registry address is `docker.io`.

Dockerhub uses the `namespace` part of the address to specify which user owns the image. But if you leave out this part too, docker assumes you want their own official images managed by Docker. This technically is under the `library` namespace. The `image-name` is `nginx`, and that still stays. Finally, if you don't specify a `image-tag`, docker assumed you want the image tagged `latest`. If there isn't an image tagged `latest` in the reposity then Docker will throw an error. Similarly when you build an image (which we will see in the [next lesson](docker-custom-containers)) and don't specift a tag, `latest` will be used by default.

So `docker pull nginx` is actually an alias for `docker pull docker.io/library/nginx:latest`.

If you want to get an image that isn't a an oficial docker image, but is still on Dockerhub, you can still leave out the registry address, but just include the namespace, which is the username of the account that manages the image.

For example we can download a container image pre-prepared with the Hugging Face Tranformers [library](https://huggingface.co/docs/transformers/index), with PyTorch dependency, set up for use on a GPU, which is managed by the Hugging Face team on Dockerhub with the command `docker pull huggingface/transformers-pytorch-gpu:4.28.1`

:::info Note

The above image is around 9 GB, so no need to run the command and have it sitting on your computer! If you did run it, you can first have a look at the images you've downloaded with `docker images`. And you can remove it with `docker rmi huggingface/transformers-pytorch-gpu:4.28.1`

:::

Dockerhub allows you to host public images for free so I'd highly recommend making an account to practice. Note - they charge for hosting private image repos.

## AWS ECR - Elastic Container Registry

As mentioned in the [about section](../about#how-much-will-it-cost), we will use free and open-source tooling. But we won't stop there with local toy examples. The goal is to get to production. So in our tutorials we will also (optionally) be using Amazon Web Services (AWS) to get to global scale. We'll learn more about AWS in the [Cloud Computing](../category/-cloud-computing) section, but for now just know they have their own container image registry called **Elastic Container Registry** (ECR) where you can have public and private repos for you own images. This of course costs money, but they have a generous free tier for your first year of use.

## Others

Google Cloud Platform (GCP) and Microsoft Azure also have container registries called Google Container Registry and Azure Container Registry, respectively. Just to make you aware, but we won't be using them.
