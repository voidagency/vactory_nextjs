# vactory_nextjs

# Docker

## Build & Run Starter App (project)

```bash
$ docker build -t vactory-app . --target runner_app
$ docker run -p 3000:3000 vactory-app
```

## Build & Run UI

```bash
$ docker build -t vactory-ui . --target runner_ui
$ docker run -p 8080:8080 vactory-ui
```

## Build & Run Docs

```bash
$ docker build -t vactory-docs . --target runner_docs
$ docker run -p 8080:8080 vactory-docs
```

# Capistrano

```bash
$ cd capistrano
$ bundle install
```

## Command-line usage

```bash
# list all available tasks
$ bundle exec cap -T

# deploy to the staging environment
$ bundle exec cap staging deploy

# deploy to the production environment
$ bundle exec cap production deploy

# simulate deploying to the production environment
# does not actually do anything
$ bundle exec cap production deploy --dry-run

# list task dependencies
$ bundle exec cap production deploy --prereqs

# trace through task invocations
$ bundle exec cap production deploy --trace

# lists all config variable before deployment tasks
$ bundle exec cap production deploy --print-config-variables
```

# SSH Passwordless

```bash
$ ssh-copy-id remote_username@server_ip_address
```
