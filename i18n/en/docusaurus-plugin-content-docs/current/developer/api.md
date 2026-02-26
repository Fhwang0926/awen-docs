---
sidebar_position: 2
---

# API

Use the platform API to control services, deployments, and settings programmatically.

## API Key

1. After logging in, go to **Account** → **API Key**.
2. Click **Create API Key** and set name, permissions, and expiry.
3. The key is shown only once; copy and store it securely.

## Permissions

- **Full (ALL)**: Create, update, delete, and read services and related APIs.
- **Read-only (READ_ONLY)**: Read-only APIs only.

## Usage

Send the API key in the request header:

```bash
curl -X GET "https://api.your-awen-site.com/api/v1/hosting" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

## Example endpoints

| Purpose    | Method | Path example           |
|-----------|--------|-------------------------|
| List      | GET    | `/api/v1/hosting`       |
| Detail    | GET    | `/api/v1/hosting/:id`   |
| Create    | POST   | `/api/v1/hosting`       |
| Deploy    | POST   | `/api/v1/hosting/:id/deploy` |

Check your environment for the actual base URL and paths.

## Security

- Keep API keys private.
- Prefer **READ_ONLY** when read-only access is enough.
