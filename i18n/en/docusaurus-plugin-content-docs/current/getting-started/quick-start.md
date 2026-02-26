---
sidebar_position: 0
---

# Quick Start

Step-by-step guide to creating your first service from the **My Services** screen. The flow follows the **Create Service** page: plan → service type → WEB/WAS/DB settings → domain → review and create.

## Prerequisites

- Account created and logged in
- Access to **My Services** menu

---

## Step 1: Open the Create Service page

1. Click **My Services** in the left menu.
2. Click **Add** (or **Create Server**) to open the **Create Service** page.

---

## Step 2: Plan selection (paid users only)

Paid users see the **Plan selection** step.

- **Free plan**: Start without a credit card. Subdomain is auto-assigned; custom domain is available only on paid plans.
- **Paid plan**: Recommended for production. Enter your own subdomain, use custom domain, load balancer, backup, WAF, etc.

Free users skip this step and go to **Service type** selection.

---

## Step 3: Service type

Choose how you want to run your service.

| Type | Description |
|------|-------------|
| **Web (Frontend)** | Static/SPA (React, Vue, etc.) or HTML/CSS/JS. Served with Nginx; no DB included. |
| **DB (dedicated)** | Run MySQL, MariaDB, PostgreSQL, or MongoDB only. |
| **WAS (Backend)** | Deploy backend API only (Python, Node.js, Java). No frontend or DB. |
| **Unified (Front + Backend + DB)** | Frontend, WAS, and DB in one service. All are configured automatically. |
| **WAS+DB** | Backend API and DB together. |

Next steps depend on the type:

- **Web**: WEB settings → Domain → Review and create  
- **DB**: DB settings → Domain → Review and create  
- **WAS**: WAS settings → Domain → Review and create  
- **Unified**: WEB settings → WAS settings → DB settings → Domain → Review and create  
- **WAS+DB**: WAS settings → DB settings → Domain → Review and create  

---

## Step 4: WEB settings (for Web or Unified)

Configure **Deploy source & build** and **Server configuration**.

### Source

- **GitHub**: Connect GitHub App, then select repo and branch. If not connected, use **Connect GitHub** and choose from the list.
- **Manual upload**: Upload a zip of your build output (e.g. `dist` for web).
- **Public GitHub**: Enter public repo URL and branch.
- **Configure later**: Set source later in the service detail page.

### Build option (when using GitHub/Public repo)

Choose React, Vue, Angular, Svelte, or **None** for static only.

### Resources (paid plan)

Set web server memory and storage in the configuration tab. Free plan uses fixed specs.

---

## Step 5: WAS settings (for WAS, Unified, or WAS+DB)

Set backend runtime and source.

### Backend runtime

- Choose **Python**, **Node.js**, or **Java**.
- Set version and **Start command** (e.g. `npm start`, `python app.py`, `java -jar app.jar`).

### WAS source (Unified or WAS+DB)

- **Same as web**: Use the same repo as the frontend.
- **GitHub**: Select a separate repo and branch for WAS.
- **Public GitHub**: Enter the public repo URL for WAS.

If the backend lives in a subfolder, enter the **Backend path** (e.g. `backend`, `api`).

---

## Step 6: DB settings (for DB, Unified, or WAS+DB)

- **Database**: Choose MySQL, MariaDB, PostgreSQL, or MongoDB.
- **Resources** (paid): Set memory and storage. Free plan uses fixed specs.

---

## Step 7: Domain

- **Free plan**: Subdomain is auto-assigned. Custom domain is not available.
- **Paid plan**:
  - **Subdomain**: Lowercase letters, numbers, hyphens only (3–63 chars). e.g. `myapp`. Availability is checked after input.
  - **Custom domain** (optional): Enter your domain (e.g. `example.com`). After creation, you’ll see instructions to point it via CNAME to the assigned subdomain.

---

## Step 8: Review and create

- Review the **infrastructure diagram** and all inputs.
- Click **Create service** (or **Create for free** / **Create production service**).

When creation finishes, the new service appears in **My Services** and status moves from **Deploying** to **Ready**.

---

## After creation

- Click the service card in **My Services** to open its detail page.
- **Overview**: Status, domain (subdomain or custom), source, and resources.
- **Manage**: Open IDE, SQL (for DB/Unified), logs, etc.
- **Settings**: Change source, environment variables, resources, or plan.

---

## Next steps

- [My Services (Hosting)](/user/hosting): List, detail, and management  
- [Deployment guide](/developer/deploy): GitHub, manual upload, environment variables  
- [API](/developer/api): Control services and deployments via API
