# Webhooks API

## Overview

The Extreme Platform ONE™ Webhooks API enables real-time event notifications and third-party integrations by allowing applications to subscribe to platform events and receive push notifications when events occur.

## Base URL

```
https://cloudapi.extremecloudiq.com/webhooks/v1
```

## Key Features

- Real-time event notifications via webhooks
- Event filtering and subscriptions
- Delivery history and retry management
- Comprehensive event type catalog with schemas
- Flexible authentication options (basic, bearer, custom)
- Customizable retry policies

## Capabilities

- **Webhook Management**: Create, update, and manage webhook endpoints
- **Event Subscriptions**: Subscribe to specific event types
- **Delivery Tracking**: Monitor webhook delivery history and status
- **Retry Management**: Automatic and manual retry of failed deliveries
- **Event Types**: Access comprehensive catalog of available events
- **Custom Headers**: Add custom HTTP headers to webhook requests
- **Event Filtering**: Filter events by type and criteria

## Use Cases

- Real-time system integration and synchronization
- Event-driven automation workflows
- Compliance and audit logging
- Third-party platform integration
- Custom application notifications

## Authentication

- **Method**: Bearer Token (JWT)
- Ensure you include valid credentials in your requests

## Main Endpoints

### Webhooks Management
- `GET /webhooks` - List webhooks with filtering and pagination
- `POST /webhooks` - Create a new webhook
- `GET /webhooks/{webhookId}` - Get webhook details
- `PUT /webhooks/{webhookId}` - Update webhook configuration
- `DELETE /webhooks/{webhookId}` - Delete a webhook
- `POST /webhooks/{webhookId}/test` - Send a test event

### Delivery History
- `GET /webhooks/{webhookId}/deliveries` - List delivery history
- `POST /webhooks/{webhookId}/deliveries/{deliveryId}/retry` - Retry failed delivery

### Event Types
- `GET /event-types` - List available event types
- `GET /event-types/{eventTypeId}` - Get event type schema and documentation

## Webhook Configuration

### Required Fields
- `url`: Target URL for webhook notifications (URI format)
- `eventTypes`: Array of event types to subscribe to

### Optional Fields
- `description`: Webhook description
- `headers`: Custom HTTP headers to include in requests
- `auth`: Authentication configuration
  - `type`: basic, bearer, or custom
  - `credentials`: Authentication credentials
- `retryPolicy`: Retry configuration
  - `maxRetries`: Maximum number of retry attempts (default: 5)
  - `retryDelay`: Delay in seconds between retries (default: 60)
- `status`: Webhook status (active, inactive)

## Event Delivery

### Delivery Status
- `success`: Event delivered and accepted
- `failed`: Event delivery failed
- `pending`: Event delivery in progress

### Response Format
Each webhook delivery includes:
- Event type and payload
- Delivery timestamp
- HTTP status code and response time
- Error details if applicable
- Next retry timestamp if applicable

## Pagination

- `pageToken`: Token for pagination (optional)
- `limit`: Number of results to return (1-100, default: 20)
- `hasMore`: Indicates if more results are available

## Support

For questions or support, contact:
- **Name**: Extreme Networks Support
- **URL**: https://www.extremenetworks.com/support
- **Email**: support@extremenetworks.com

## License

Apache 2.0
