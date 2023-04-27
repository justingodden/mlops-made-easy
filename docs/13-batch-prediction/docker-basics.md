---
sidebar_position: 1
---

# Docker - Basics

Docker is a software tool (a CLI and a [daemon](<https://en.wikipedia.org/wiki/Daemon_(computing)>)) that can create and manage software containers.

## What and why of containers

Containers solve the age-old problem of 'it works on my machine'. Software has become so complex with abstractions and dependencies that there are so many points of failure - wrong OS version, wrong system dependencies, wrong Python interpreter version, wrong Python library version etc.

The first solution to this problem is to use a Virtual Machine (VM)

## Install Docker

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

## Run your first container

```bash
sudo docker run nginx --name mycontainer
```

## Exec into the container

```bash
sudo docker exec -it mycontainer sh
```

## Container logs

Release a version 1.0 of your project:

```bash
npm run docusaurus docs:version 1.0
```

The `docs` folder is copied into `versioned_docs/version-1.0` and `versions.json` is created.

Your docs now have 2 versions:

- `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs
- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**

## Add a Version Dropdown

To navigate seamlessly across versions, add a version dropdown.

Modify the `docusaurus.config.js` file:

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "docsVersionDropdown",
        },
        // highlight-end
      ],
    },
  },
};
```

The docs version dropdown appears in your navbar:

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## Update an existing version

It is possible to edit versioned docs in their respective folder:

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`
