---
sidebar_position: 3
---

# Deployment guide

How to connect sources and deploy by service type.

## Source options

- **GitHub**: Connect a repo; pushes trigger build and deploy.
- **Manual upload**: Upload a zip to deploy.
- **API**: Deploy by sending artifacts via API.

## GitHub deployment

1. When creating a service, choose **GitHub** under **Source**.
2. Connect GitHub and select repo and branch.
3. Pushing to the repo starts a build; when it finishes, the service is deployed.

## Manual upload

1. When creating a service, choose **Manual upload** under **Source**.
2. Upload a zip of your build output or static files.
3. Deployment runs after the upload completes.

:::tip
For frontend (web), zip the output of `npm run build` or `yarn build` and upload it.
:::

## By service type

- **Web (static)**: HTML/CSS/JS or SPA build output.
- **WAS**: Choose runtime (Python, Node.js, Java) and set start command and build.
- **DB**: Choose MySQL, MariaDB, PostgreSQL, or MongoDB and set resources.
- **Unified**: Web + WAS + DB in one service.

## Environment variables

Add environment variables under the service **Settings** tab. They are available at build and runtime.
