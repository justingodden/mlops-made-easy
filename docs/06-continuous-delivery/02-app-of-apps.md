---
sidebar_position: 2
---

# App of Apps Pattern

## GitHub SSH Key

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: private-repo
  namespace: argocd
  labels:
    argocd.argoproj.io/secret-type: repository
stringData:
  type: git
  url: git@github.com:justingodden/mlops-made-easy-project-code.git
  sshPrivateKey: |
    -----BEGIN OPENSSH PRIVATE KEY-----
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    -----END OPENSSH PRIVATE KEY-----
```

```bash
kubectl -n argocd create -f secret.yaml
```

## App of Apps

create application

edit as YAML
paste below

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: argo-apps
  namespace: argocd
  finalizers:
    - resources-finalizer.argocd.argoproj.io
spec:
  project: default
  source:
    repoURL: git@github.com:justingodden/mlops-made-easy-project-code.git
    targetRevision: HEAD
    path: 06-continuous-delivery/argocd
    directory:
      recurse: true
  destination:
    server: "https://kubernetes.default.svc"
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
```

remember to save
create
