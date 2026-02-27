---
sidebar_position: 2
---

# AI Features Guide

This page describes only **currently available** AI-related features.  
(My AI Assistant is coming soon.)

---

## AI features in Hosting (Services)

In a service’s **Settings** tab (or **WEB settings** / **DB** tab), an **AI** section is available. Options depend on service type.

### Web: Custom AI auto-build (Paid)

- **Where**: Service detail → **WEB settings** or **Settings** → AI → Web hosting.
- **What**: For GitHub-backed web services, AI analyzes the repo and auto-configures **build options** (React, Vue, Angular, Svelte) and deploys. Each push can trigger analysis and optimal build. Only applies when GitHub + build option are already set; disable to keep using the existing build option.
- **Plan**: Basic and above (paid).

### DB / Unified: DB password auto-rotation (AI)

- **Where**: Service detail → **DB** tab or **Settings** → AI → DB hosting.
- **What**: Periodically rotates DB passwords for security. Available for DB, Unified, and WAS+DB services. You can see next rotation time and optionally schedule rotation (e.g. “in 10 minutes”). Email notification before change; new password visible in service detail (env / DB connection info).
- **Plan**: Available for the applicable service types.

---

## Coming soon

| Feature | Description |
|---------|-------------|
| **My AI Assistant** | Deploy and manage AI agents (e.g. shopping, stylist). Coming soon. |
| **AI cost optimization** | Reduce credit usage during low-usage periods via traffic/resource analysis. Planned for Paid (Pro+). Coming soon. |

---

## Summary

| Area | Feature | Location | Plan / scope |
|------|----------|----------|----------------|
| Hosting | Custom AI auto-build | Service detail → WEB settings / Settings → AI | Paid (Basic+), web/GitHub |
| Hosting | DB password auto-rotation | Service detail → DB tab / Settings → AI | DB / Unified / WAS+DB |

---

## Next steps

- [My Services (Hosting)](/user/hosting): Detail tabs and settings
- [My AI Assistant](/user/ai-assistant): (Coming soon)
