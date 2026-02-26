---
sidebar_position: 1
---

# Frequently asked questions (FAQ)

## Sign up and login

### GitHub / Google login does not work.

Make sure the browser is not blocking popups. If you already have a linked account, log in with the same email.

### I see a message that email verification is required.

Open the verification link sent to the email you used to sign up, then log in again.

## Services (hosting)

### Deployment stays on "Building".

Check the build logs in the service detail page under **Manage**. Common causes include dependency install failures or build script errors.

### I connected a GitHub repo but it does not deploy.

Confirm that the GitHub App is installed and that GitHub is connected under **Account** → SNS. Repository permissions are also required.

### What file format is supported for manual upload?

Upload a zip file. For web services, zip your build output (e.g. `dist`, `build`) and upload it.

## Billing and plans

### I want to change my plan.

Go to **Billing and subscription** → **Plans** to upgrade or downgrade. Annual billing may include a discount.

### Where do I apply a coupon?

View your coupons under **Billing and subscription** → **Coupons** and apply one at checkout.

## API

### I forgot my API Key.

The key is shown only once when created. Delete the existing key and create a new one under **Account** → **API Key**.

### I get 401 or 403 when calling the API.

Check that the `Authorization: Bearer YOUR_API_KEY` header is correct and that the key has not expired. Also verify permissions (full vs read-only).

## Support

### Where can I get more help?

Submit a question under **Support** → **Contact (QnA)** for a reply from the team. You can also check **FAQ** and **Announcements**.
