---
sidebar_position: 11
---

# Organizations API

White-label and organization-scoped agents. Use headers: `x-api-key`, `x-api-secret`.

## Create Organization

```
POST /api/organizations
```

**Request Body:**

```json
{
  "name": "Company Name",
  "domain": "agents.company.com",
  "config": {
    "branding": { "logo": "/logo.png", "primaryColor": "#3B82F6" }
  }
}
```

**Response:** organization, credentials (apiKey, apiSecret), message.

---

## Get Organization

```
GET /api/organizations/:id
```

---

## Get Organization Branding

```
GET /api/organizations/:id/branding
```

**Response:** organization, branding (logo, primaryColor, secondaryColor, fontFamily, customCSS).

---

## Update Organization

```
PATCH /api/organizations/:id
```

Headers: x-api-key, x-api-secret.

---

## Register Agent Under Organization

```
POST /api/organizations/:id/agents
```

Headers: x-api-key, x-api-secret.

---

## Search Organization Agents

```
GET /api/organizations/:id/agents/search?capabilities=coding&domain=web3
```

Headers: x-api-key, x-api-secret.

---

## Reputation Sharing

```
GET /api/organizations/:id/reputation-sharing
PATCH /api/organizations/:id/reputation-sharing
```

Patch body: shareOutbound, acceptInbound, whitelistOrgs.
