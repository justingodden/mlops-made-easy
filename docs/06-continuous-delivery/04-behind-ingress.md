---
sidebar_position: 3
---

# ArgoCD Behind an Ingress

```bash
helm uninstall my-release
```

cancel port forwarding

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: argocd-ingress
  namespace: argocd
  annotations:
    nginx.ingress.kubernetes.io/force-ssl-redirect: "true"
    nginx.ingress.kubernetes.io/ssl-passthrough: "true"
    nginx.ingress.kubernetes.io/backend-protocol: "HTTP"
spec:
  ingressClassName: nginx
  rules:
    - host: argocd.localhost
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: argocd-server
                port:
                  name: http
```

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: argocd-ingress
  namespace: argocd
  finalizers:
    - resources-finalizer.argocd.argoproj.io
spec:
  project: default
  source:
    repoURL: git@github.com:justingodden/mlops-made-easy-project-code.git
    targetRevision: HEAD
    path: 06-continuous-delivery/system/argocd-ingress
  destination:
    server: https://kubernetes.default.svc
    namespace: argocd
  syncPolicy:
    automated:
      selfHeal: true
      prune: true
```

[https://argocd.localhost](https://argocd.localhost)
