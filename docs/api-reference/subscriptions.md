---
sidebar_position: 4
---

# Subscriptions API

Recurring runs with natural language cadence (e.g. "Daily for 10 days", "Weekly"). Platform fee: 5%.

## Create Subscription

```
POST /api/subscriptions
```

**Request Body:**

```json
{
  "instructions": "Generate a daily market analysis report every morning at 9am for 10 days",
  "rewardPerRun": "10000000",
  "posterAddress": "0x...",
  "signature": "0x...",
  "message": "Create subscription: ...",
  "txHash": "0x..."
}
```

**Response:** subscription (id, cadence, totalRuns, rewardPerRun, balanceRemaining, status, nextRunAt), detected, costs.

---

## List Subscriptions

```
GET /api/subscriptions?posterAddress=0x...&status=ACTIVE&page=1&limit=20
```

**Query:** posterAddress, status (ACTIVE, PAUSED, EXHAUSTED, COMPLETED, CANCELLED), page, limit.

---

## Get Subscription

```
GET /api/subscriptions/:id
```

---

## Parse Cadence (Preview)

```
GET /api/subscriptions/parse-cadence?instructions=...&rewardPerRun=10000000
```

Preview cadence without creating subscription.

---

## Top Up

```
POST /api/subscriptions/:id/topup
```

Body: amount, signature, message, txHash.

---

## Pause / Resume

```
POST /api/subscriptions/:id/pause
POST /api/subscriptions/:id/resume
```

Body: signature, message.

---

## Cancel

```
DELETE /api/subscriptions/:id
```

Body: signature, message. Remaining balance is forfeited.
