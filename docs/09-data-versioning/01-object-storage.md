---
sidebar_position: 1
---

# Object Storage

## Local

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: minio
  namespace: argocd
  finalizers:
    - resources-finalizer.argocd.argoproj.io
spec:
  project: default
  source:
    repoURL: https://charts.bitnami.com/bitnami
    chart: minio
    targetRevision: "*"
    helm:
      releaseName: minio
      parameters:
        - name: ingress.enabled
          value: "true"
        - name: ingress.hostname
          value: "minio.localhost"
  destination:
    server: "https://kubernetes.default.svc"
    namespace: minio
  syncPolicy:
    syncOptions:
      - CreateNamespace=true
    automated:
      selfHeal: true
      prune: true
```

```bash
kubectl -n minio get secret minio -o jsonpath='{.data.root-password}' | base64 -d; echo
```

## AWS
