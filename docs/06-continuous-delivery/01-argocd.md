---
sidebar_position: 1
---

# ArgoCD

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

```bash
kubectl -n argocd port-forward svc/argocd-server 8008:80
```

[http://localhost:8008](http://localhost:8008)

Advanced... Accept the Risk and Continue

admin

```bash
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath='{.data.password}' | base64 -d; echo
```

update password
