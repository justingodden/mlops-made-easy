---
sidebar_position: 2
---

# Container Registries

## Container vs Image

First to clear up some terminology, a container 'image' is the definition, or _blueprint_ for a container. Whereas an actual 'container' is an actual running instance of that packaged software. It is very similar to Object Oriented Programming (OOP) where you can have a `class` definition, and an `object` which is an instantiation of that class, or indeed many objects created from the class definition.

In the [previous page](docker-basics) we used the `nginx` container _image_ to instantiate our own running container that we named `mycontainer`. We could have similarly created a bunch of running containers called `mycontainer1`, `mycontainer2`, `...`, etc. all from that single _image_ definition.

## Where did `nginx` come from

`<container-registry-address>/<image-name>:<image-tag>`

[registry-address]/[your-project-id]/[image]:[tag]

## Dockerhub

text

## AWS ECR - Elastic Container Registry

text

## Others
