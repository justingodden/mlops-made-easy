---
sidebar_position: 2
---

# Secrets Management

```bash
wget https://github.com/bitnami-labs/sealed-secrets/releases/download/<release-tag>/kubeseal-<version>-linux-amd64.tar.gz
tar -xvzf kubeseal-<version>-linux-amd64.tar.gz kubeseal
sudo install -m 755 kubeseal /usr/local/bin/kubeseal
```

`v0.21.0`
`0.21.0`

```bash
wget https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.21.0/kubeseal-0.21.0-linux-amd64.tar.gz
tar -xvzf kubeseal-0.21.0-linux-amd64.tar.gz kubeseal
sudo install -m 755 kubeseal /usr/local/bin/kubeseal
```

```
error: cannot get sealed secret service: services "sealed-secrets-controller" not found
```

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: sealed-secrets
  namespace: argocd
  finalizers:
    - resources-finalizer.argocd.argoproj.io
spec:
  project: default
  sources:
    - repoURL: https://bitnami-labs.github.io/sealed-secrets/
      chart: sealed-secrets
      targetRevision: "*"
      helm:
        releaseName: sealed-secrets
  destination:
    server: "https://kubernetes.default.svc"
    namespace: kube-system
  syncPolicy:
    automated:
      selfHeal: true
      prune: true
```

```bash
kubeseal --fetch-cert
-----BEGIN CERTIFICATE-----
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
-----END CERTIFICATE-----
```

```bash
kubeseal --fetch-cert > cert.pem
```

```bash
kubectl create secret generic my-secret --from-literal=my-key=my-value --dry-run=client -o yaml
```

```bash
cat secret.yaml | kubeseal -o yaml --cert=cert.pem > sealed-secret.yaml
```

```bash
kubeseal -f secret.yaml -o yaml --cert=cert.pem > sealed-secret.yaml
```

```bash
kubectl get secret -n kube-system -l sealedsecrets.bitnami.com/sealed-secrets-key -o yaml > master-sealing-key.yaml
```
