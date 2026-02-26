---
sidebar_position: 2
---

# My Services (Hosting)

From **My Services** you can create, deploy, and manage web, WAS, and DB services.

## Service list

- Open **Dashboard** or **My Services** in the left menu to see deployed services.
- Each card shows **status** (Ready, Deploying, Building, etc.), **domain**, and recent deployment info.

## Create a service

1. Click **Add** or **Create Server**.
2. Choose **service type**: Web (static), DB, WAS, Unified, etc.
3. Set **source**:
   - **GitHub**: Connect repo and branch
   - **Manual upload**: Upload a zip file
4. Configure subdomain, plan (if paid), runtime/DB type, then click **Create**.

## Service detail

Click a service card to open its detail page.

- **Overview**: Status, domain, source, and resource summary
- **Manage**: Open IDE, SQL (for DB services), logs, etc.
- **Settings**: Change source, environment variables, type, or resources

## Status

| Status   | Meaning        |
|----------|----------------|
| Ready    | Deployed       |
| Deploying| Deployment in progress |
| Building | Build in progress |
| Pending  | Queued         |
| Failed   | Build/deploy failed |
| Deleting | Delete in progress |

## Next

- [AI Assistant](/user/ai-assistant): Use AI agent services
- [Tools](/user/tool): IDE, SQL, and other tools
