---
sidebar_position: 2
---

# My Services (Hosting)

From **My Services** you can **create**, **deploy**, and **manage** web, WAS, and DB services. Click **My Services** in the left menu to open the service list.

---

## Service list

- **Location**: My Services menu → list view.
- **Features**:
  - **Search/filter**: Filter by service type (web/DB/WAS/unified/WAS+DB) and status.
  - **Service cards**: Each card shows **domain**, **service type**, **status**, and recent deployment info.
  - **Create service**: Click **➕ Create service** to go to the Create Service page. For step-by-step flow, see [Quick Start](/getting-started/quick-start).
- From a card you can open the **service detail** page, or use quick links such as **Open IDE** or **Open SQL** where available.

---

## Create a service

1. On the list, click **Create service**.
2. Choose **plan** (Free/Paid); if Paid, choose **service type**.
3. Complete the steps for that type (WEB settings, WAS settings, DB settings as applicable).
4. Set **domain** (subdomain and, on Paid, optional custom domain).
5. On **Review and create**, confirm and click the create button.

See [Quick Start](/getting-started/quick-start) for detailed options at each step.

---

## Service detail

Click a **card** to open the **detail page**. Tabs vary by **service type**.

### Common tabs

| Tab | Description |
|-----|-------------|
| **Overview** | Status, domain (subdomain/custom), source info (manual/GitHub/API), resource summary, deployment status. |
| **Monitoring** | Traffic, response time, visitors, etc. |
| **Security** | Firewall, WAF, security events. |
| **Settings** | Change source, environment variables, resources, plan, and options (load balancer, web backup, DB backup, WAF, DB distribution). |
| **Manage** | Restart, source upload (ZIP/TAR), webhook URL, **Open IDE**, **Open SQL** (for DB/unified). |

### Type-specific tabs

- **Web**: **WEB settings** (source, build, resources).
- **WAS**: **WAS settings** (runtime, source, environment).
- **Unified**: **WEB settings**, **WAS settings**, **DB** (DB connection info and settings).
- **WAS+DB**: **WAS settings**, **DB**.
- **DB only**: **DB** tab.

For unified services, the **DB** tab shows connection details (host, port, DB name, user, etc.) that are auto-injected into the WAS environment.

---

## Service status

| Status | Meaning |
|--------|---------|
| **Ready** | Deployed successfully; you can use the domain. |
| **Deploying** | Deployment in progress. |
| **Pending** | Deployment queued. |
| **Building** | Build in progress (when using build option). |
| **Failed** | Deploy or build failed; check source/settings and retry. |
| **Delete failed** | Delete request failed. |

Status is shown on list cards and on the detail **Overview** tab.

---

## Manage tab actions

- **Restart**: Restart the service (e.g. after source or config change).
- **Source upload**: Upload a ZIP or TAR to replace deploy source (for manual-upload services). Restart may be required after upload.
- **Webhook URL**: Used to trigger auto-deploy from GitHub etc.; shown in the UI.
- **Open IDE**: Web-based IDE to edit files and use terminal (web, WAS, unified).
- **Open SQL**: Connect to the DB and run queries (DB, unified, WAS+DB services).

---

## Next steps

- [AI Assistant](/user/ai-assistant): AI agent services
- [Tools](/user/tool): IDE, SQL, and other tools
- [Billing](/user/billing): Plan, usage, coupons
