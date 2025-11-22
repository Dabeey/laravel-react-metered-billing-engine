# Laravel React Metered Billing Engine
A modern usage-based SaaS billing starter built with **Laravel 11**, **React**, **TailwindCSS**, **Inertia.js**, and **Stripe**. It demonstrates how to implement metered feature usage, package-based limits, and Stripe-powered subscription billing—similar to pricing engines used by fintech platforms.

---

## Key Features
### 1. Subscription Billing (Stripe)
- Stripe Checkout & Billing integration.
- Automatic subscription creation, renewal, and cancellation.
- Secure payment workflows for users.

### 2. Metered Usage Tracking
- Each user action is recorded as a **transaction**.
- Features have metered counts.
- Usage is tracked and stored in the `UsedFeature` model.

### 3. Package-Based Pricing Logic
- Packages define available features.
- Each feature has a limit per package.
- Users are restricted based on their plan.

### 4. Usage Limits & Enforcement
- System blocks feature access once limits are reached.
- Enforcement happens at the business logic layer.
- Clear errors for exceeded usage.

### 5. Modern Tech Stack
- **Laravel 11** backend.
- **React + Inertia.js** frontend.
- **TailwindCSS** styling.
- SPA-style navigation.

---

## Entities
### **Package**
Defines pricing tiers and feature limits.

### **Feature**
Represents an operation a user can perform.

### **UsedFeature**
Tracks how many times a user has used a feature.

### **Transaction**
Logs each execution of a feature.

---

## Fintech Mapping
| App Concept | Fintech Analogy |
|------------|------------------|
| Feature | API endpoint (e.g. transfer, KYC lookup) |
| UsedFeature | Metered API usage count |
| Package | Pricing tier (Free, Basic, Pro) |
| Transaction | Logged API call |
| Stripe Billing | Merchant subscription billing |

---

## Installation
```bash
git clone <repo-url>
cd project
composer install
npm install
npm run dev
cp .env.example .env
php artisan key:generate
php artisan migrate
```

Configure Stripe keys:
```
STRIPE_KEY=
STRIPE_SECRET=
```

---

## Running
```bash
php artisan serve
npm run dev
```

---

## Usage Flow
1. User registers and logs in.
2. User subscribes to a package via Stripe.
3. Package defines features and limits.
4. When a feature is executed:
   - A transaction is logged.
   - Usage increments.
   - Limits are enforced.

---

## Example Features
- **Addition**: Add two numbers.
- **Multiplication**: Multiply two numbers.

These serve as metered demo operations.

---

## Why This Helps Fintech Roles
- Shows metering logic used by API-based fintechs.
- Demonstrates subscription and usage billing systems.
- Reflects architecture used in fintech pricing engines.

---

## Roadmap
- Per-transaction billing.
- Overage billing.
- Admin dashboard.
- Stripe event webhooks.

---

## License
MIT
