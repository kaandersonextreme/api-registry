# Extreme Platform ONE REST API - Notification

## Overview

The Extreme Platform ONE™ Notification API provides comprehensive management
of notification subscriptions and delivery rules, enabling automated alerting
across multiple channels to keep your team informed of critical network events,
subscription lifecycle changes, and contract milestones.

**📬 Multi-Channel Notification Delivery:**

• **Email Notifications** - Configure email recipients for alert notifications
with built-in verification workflow to ensure delivery to valid addresses

• **Webhook Integration** - Set up HTTP endpoints to receive real-time JSON
payloads with optional HMAC signature verification for secure integrations

• **ServiceNow Integration** - Automatically create incidents in ServiceNow
when alerts trigger, streamlining IT service management workflows

• **Mobile Push Notifications** - Deliver instant notifications to mobile
applications via APNs (iOS) and FCM (Android) for on-the-go alerting


**📋 Intelligent Notification Rules:**

• **Subscription Lifecycle Rules** - Timeline-based and event-based triggers
for license expiration warnings, renewal reminders, and activation notifications

• **Contract Lifecycle Rules** - Automated notifications for hardware support
contract milestones, warranty expirations, and renewal deadlines

• **Flexible Rule Configuration** - Predefined system rules plus custom
user-defined rules with per-application filtering


**🏢 Enterprise Management:**

Built for enterprise environments with bulk operations for managing multiple
subscriptions, organization-wide notification policies, and comprehensive
audit trails for compliance and operational visibility.

## Base URL

```
https://cloudapi.extremecloudiq.com/notification/v1
```

## Key Features

- **Email Subscription**: Email Subscription Management
- **Webhook Subscription**: Webhook Subscription Management
- **ServiceNow Subscription**: ServiceNow Subscription Management
- **Email Notification**: **Email Notification Management**

The Email Notification Management capabilities support the complete lifecycle of email configurations within the system
- **Webhook Notification**: **Webhook Notification Management**

Webhook Notification Management enables end-to-end control of webhook configurations in the system
- **ServiceNow Notification**: **ServiceNow Notification Management**

ServiceNow Notification Management provides complete administration of ServiceNow integration settings
- **Notification Rules**: **Notification Rules Management**

Notification rule management supports contract-based and subscription-based rule configurations
- **Metadata**: **Notification Rules Metadata**

Metadata access provides structured reference definitions for rule behavior and event processing
- **Mobile Push Notification**: Mobile Push Notification Token Management

## Authentication

- **Method**: Bearer Token
- Ensure you include valid credentials in your requests

## Main Endpoints

### Email Notification
- `GET /email` - List Email Subscriptions
- `POST /email` - Create Email Subscription
- `POST /email/:delete` - Bulk Delete Email Subscriptions
- `POST /email/:enable` - Bulk Enable/Disable Email Subscriptions
- `GET /email/{id}` - Get Email Subscription
- `PUT /email/{id}` - Update Email Subscription
- `PATCH /email/{id}` - Patch Email Subscription
- `POST /email/{id}/:verify` - Send Verification Email
- `POST /email/:verify` - Bulk Send Verification Emails

### Webhook Notification
- `GET /webhook` - List Webhook Subscriptions
- `POST /webhook` - Create Webhook Subscription
- `POST /webhook/:delete` - Bulk Delete Webhook Subscriptions
- `POST /webhook/:enable` - Bulk Enable/Disable Webhook Subscriptions
- `GET /webhook/{id}` - Get Webhook Subscription
- `PUT /webhook/{id}` - Update Webhook Subscription
- `PATCH /webhook/{id}` - Patch Webhook Subscription

### ServiceNow Notification
- `GET /servicenow` - List ServiceNow Subscriptions
- `POST /servicenow` - Create ServiceNow Subscription
- `POST /servicenow/:delete` - Bulk Delete ServiceNow Subscriptions
- `POST /servicenow/:enable` - Bulk Enable/Disable ServiceNow Subscriptions
- `GET /servicenow/{id}` - Get ServiceNow Subscription
- `PUT /servicenow/{id}` - Update ServiceNow Subscription
- `PATCH /servicenow/{id}` - Patch ServiceNow Subscription

### Notification Rules
- `GET /rules/contract` - List Contract Notification Rules
- `POST /rules/contract` - Create Contract Notification Rule
- `POST /rules/contract/:delete` - Delete Contract notification rules in bulk
- `GET /rules/contract/{id}` - Get a specific Contract notification rule
- `PUT /rules/contract/{id}` - Update Contract notification rule
- `PATCH /rules/contract/{id}` - Partial or full update Contract notification rule
- `GET /rules/contract/summary` - Get recipient count for the notification rule
- `GET /rules/subscription` - List Subscription Notification Rules
- `POST /rules/subscription` - Create Subscription Notification Rule
- `POST /rules/subscription/:delete` - Delete Subscription notification rules in bulk
- ... and 4 more

### Metadata
- `GET /metadata/timeline-rules` - List Timeline Rule Templates
- `GET /metadata/event-rules` - List Event Rules

## Support

For questions or support, contact:
- **Name**: Extreme Networks Support
- **URL**: https://www.extremenetworks.com/support
- **Email**: support@extremenetworks.com

## License

Apache 2.0
