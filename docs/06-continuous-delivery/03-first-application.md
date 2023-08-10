---
sidebar_position: 3
---

# First Application

```bash
kubectl delete -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

```bash
helm uninstall my-release
```

```yaml
controller:
  updateStrategy:
    type: "RollingUpdate"
    rollingUpdate:
      maxUnavailable: 1
  hostPort:
    enabled: true
  terminationGracePeriodSeconds: 0
  service:
    type: "NodePort"
  watchIngressWithoutClass: true
  nodeSelector:
    ingress-ready: "true"
  tolerations:
    - key: "node-role.kubernetes.io/master"
      operator: "Equal"
      effect: "NoSchedule"
    - key: "node-role.kubernetes.io/control-plane"
      operator: "Equal"
      effect: "NoSchedule"
  publishService:
    enabled: false
  extraArgs:
    publish-status-address: "localhost"
    watch-ingress-without-class: true
    enable-ssl-passthrough: true
```

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: ingress-nginx
  namespace: argocd
  finalizers:
    - resources-finalizer.argocd.argoproj.io
spec:
  project: default
  sources:
    - repoURL: https://kubernetes.github.io/ingress-nginx
      chart: ingress-nginx
      targetRevision: "*"
      helm:
        releaseName: ingress-nginx
        valueFiles:
          - $values/06-continuous-delivery/system/nginx-ingress-controller-kind/values.yaml
    - repoURL: git@github.com:justingodden/mlops-made-easy-project-code.git
      ref: values
  destination:
    server: "https://kubernetes.default.svc"
    namespace: ingress-nginx
  syncPolicy:
    syncOptions:
      - CreateNamespace=true
    automated:
      selfHeal: true
      prune: true
```
