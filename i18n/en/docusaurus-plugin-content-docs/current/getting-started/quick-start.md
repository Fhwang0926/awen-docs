---
sidebar_position: 0
---

# Quick Start

Step-by-step guide to creating your first service from **My Services**. The flow follows the **Quick Setup** steps on the Create Service page.

## Prerequisites

- Account created and logged in
- Access to **My Services** in the left menu

---

## Step 1: Open the Create Service page

1. Click **My Services** in the left menu.
2. Click **Create service** (➕) to open the Create Service page.

---

## Step 2: Plan selection

Choose **Free** or **Paid** plan.

| Plan | Description | Steps |
|------|-------------|--------|
| **Free** | Start without a credit card. Subdomain is auto-assigned. Custom domain is available only on Paid plan. | **Domain** → **WEB settings** → **Review and create** (web service only). |
| **Paid** | Recommended for production. Own subdomain, custom domain, load balancer, backup, WAF, DB distribution, etc. | **Service type** → type-specific settings (WEB/WAS/DB) → **Domain** → **Review and create**. |

Free plan skips the Service type step and goes straight to Domain.

---

## Step 3: Service type (Paid plan only)

Choose how to run your service.

| Type | Description |
|------|-------------|
| **Web server (Frontend)** | Static/SPA (React, Vue, Angular, etc.) or HTML/CSS/JS. Nginx; no DB. |
| **DB server (dedicated)** | MySQL, MariaDB, PostgreSQL, or MongoDB only. |
| **WAS (Backend)** | Python, Node.js, or Java API only. No frontend or DB. |
| **Unified (Front + Backend + DB)** | Frontend, WAS, and DB in one service. Same domain; `/api` routes to WAS automatically. |
| **WAS+DB** | Backend API and DB only. |

Next steps: Web → WEB settings; DB → DB settings; WAS → WAS settings; Unified → WEB → WAS → DB settings; WAS+DB → WAS → DB settings; then Domain → Review and create.

---

## Step 4: WEB settings (Web or Unified)

Set **deploy source** and **build**, and optionally **resources** (paid).

### Source

- **GitHub**: Select repo and branch after connecting GitHub App.
- **Manual upload**: Upload a ZIP (or TAR, TAR.GZ) of your files (e.g. `dist`). Max 200MB.
- **Public repo URL**: Enter GitHub public repo URL and branch.
- **Configure later**: Create the server first; set source later in the service detail **Manage** tab.

### Build (when using GitHub or public repo)

Choose React, Vue, Angular, Svelte, or **None** for static files only.

### Resources (Paid)

Web server memory and storage are set in the configuration section. Free plan uses fixed specs.

---

## Step 5: WAS settings (WAS, Unified, or WAS+DB)

Set **backend runtime** and **source**.

- **Runtime**: Python, Node.js, or Java; select version and **Start command** (e.g. `npm start`, `python app.py`, `java -jar app.jar`).
- **Source** (Unified/WAS+DB): Same as web, or separate GitHub/public repo; set **backend path** (e.g. `backend`, `api`) if needed.

---

## Step 6: DB settings (DB, Unified, or WAS+DB)

- **Database**: MySQL, MariaDB, PostgreSQL, or MongoDB.
- **Resources** (Paid): Memory and storage. Free plan uses fixed specs.

---

## Step 7: Domain

- **Free**: Subdomain is **auto-generated**. Custom domain is not available.
- **Paid**: Enter **subdomain** (lowercase, numbers, hyphens; 3–63 chars); availability can be checked. **Auto-generate** is available. **Custom domain** (optional): enter your domain; after creation you’ll see DNS (e.g. CNAME) instructions. SSL is issued automatically.

---

## Step 8: Review and create

Review the infrastructure diagram and all inputs, then click **Create service** (or the Free/Paid create button).

When done, the service appears in **My Services** and status goes from **Deploying** to **Ready**. Click the card to open the detail page.

---

## After creation

- **Overview** tab: Status, domain, source, resources.
- **Manage** tab: Restart, source upload, webhook URL, **Open IDE**, **Open SQL** (DB/Unified).
- **Settings** tab: Change source, environment variables, resources, or plan.

---

## Next steps

- [My Services (Hosting)](/user/hosting): List, detail tabs, status, and management
- [Deployment guide](/developer/deploy): GitHub, manual upload, environment variables
- [API](/developer/api): Control services and deployments via API
