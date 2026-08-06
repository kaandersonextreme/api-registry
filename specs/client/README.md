# Extreme Platform ONE REST API - Client

## Overview

Platform Client Service (PCS) API provides client cache details and wireless/wired client health grid information.

## Base URL

```
https://cloudapi.extremecloudiq.com/client/v1
```

## Key Features

- **Client Details**: Client details and health information
- **Dashboard**: Client health dashboard
- **Routing Details**: Device routing details

## Authentication

- **Method**: Bearer Token
- Ensure you include valid credentials in your requests

## Main Endpoints

### Client Details
- `GET /wireless/details/{client_uuid}` - Get Wireless Client Details Info
- `GET /wired/details/{client_uuid}` - Get Wired Client Details Info
- `POST /mac-lookup` - Lookup clients by MAC addresses
- `POST /rtts-support` - Check RTTS support for multiple clients

### Dashboard
- `POST /wired` - Wired client data
- `POST /wired/grid` - Wired client health grid
- `POST /wireless` - Wireless client data
- `POST /wireless/grid` - Wireless client health grid
- `POST /wired/health-filter-metadata` - Wired client health filter metadata

### Routing Details
- `GET /devices/{device_id}/monitor/ipv4-routing` - Get device IPv4 routing information

## Support

For questions or support, contact:
- **Name**: Extreme Networks Support
- **URL**: https://www.extremenetworks.com/support
- **Email**: support@extremenetworks.com

## License

Apache 2.0
