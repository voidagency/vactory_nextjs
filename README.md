# vactory_nextjs

# Docker

## Build & Run UI

```bash
docker build -t vactory-ui . --target runner_ui
docker run -p 8080:8080 vactory-ui
```

## Build & Run Docs

```bash
docker build -t vactory-docs . --target runner_docs
docker run -p 8080:8080 vactory-docs
```
