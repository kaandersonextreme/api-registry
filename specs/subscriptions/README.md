# Extreme Platform ONE REST API - Subscriptions & Licensing

## Overview

The Extreme Platform ONE™ License API provides comprehensive management of software licenses, subscriptions, and entitlements across your Extreme network infrastructure, enabling centralized visibility and control over all licensing aspects from trial activation through operational management.

## Base URL

```
https://cloudapi.extremecloudiq.com/subscription/v1
```

## Key Features

- **Setting**: The Global Setting of Common License API
- **Link and Unlink**: Link/Unlink the Extreme Portal account
- **License Management**: Management the Licenses
- **MSP License Management**: License Management for MSPs
- **Trial License**: Request Trial License
- **Xiq**: For Xiq only
- **License Operation**: License Operation

## Authentication

- **Method**: Bearer Token
- Ensure you include valid credentials in your requests

## Main Endpoints

### Setting
- `GET /setting` - Get License Settings

### License Management
- `GET /license-types` - List License Types
- `GET /summary` - Get License Summary
- `GET /license/apps` - List Licensed Applications
- `GET /entitlements` - List License Entitlements
- `GET /license-details` - List License Details
- `GET /license/report` - Download License Report
- `POST /license/:synchronize` - Synchronize Licenses

### Link and Unlink
- `POST /portal/link-url` - Get Portal Link URL
- `POST /portal/:unlink` - Unlink Portal Account

### Trial License
- `POST /trial-licenses/:request` - Request Trial Licenses

### Xiq
- `GET /nac-entitlements/allocations` - Get NAC Entitlement Allocations
- `PUT /nac-entitlements/allocations` - Set NAC Entitlement Allocations
- `GET /nac-entitlements/stats` - Get NAC Entitlement Statistics

## Support

For questions or support, contact:
- **Name**: Extreme Networks Support
- **URL**: https://www.extremenetworks.com/support
- **Email**: support@extremenetworks.com

## License

Apache 2.0
