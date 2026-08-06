# ExtremeCloud MSP API

## Overview

ExtremeCloud MSP RESTful API for external and internal applications.

## Base URL

```
https://cloudapi.extremecloudiq.com/msp/v1
```

## Key Features

- **MSP Login Workflow**: This API initiates the login workflow for MSP
- **Deployed - Data Centers**: Data Centers
- **Customer Management**: Customer accounts management
- **Billing [Beta]**: Billing usage info
- **Customer**: Customer accounts management
- **Customer**: Customer data
- **License management - MSP**: Link license accounts and manage them for customer's VIQ
- **Admin Group Management**: Admin group management

## Authentication

- **Method**: Bearer Token
- Ensure you include valid credentials in your requests

## Main Endpoints

### MSP Login Workflow
- `POST /msp-login-workflow` - Login Workflow

### Customer Management
- `POST /customer/v2/add` - Create a customer
- `PATCH /customer/v2/edit/{customerOwnerId}` - Edit a customer
- `DELETE /customer/delete/{customerOwnerId}` - Delete a customer

### Admin Group Management
- `GET /admingroups` - List admin groups

### License management - MSP
- `GET /licenses-added-to-msp` - Get hard-linked licenses to MSP
- `GET /license/name-for-customers` - Get softlink license name of given accountIDs
- `GET /license/customer-info` - Get License Info for an MSP

### Deployed - Data Centers
- `GET /deployments/datacenters` - Get available data centers

### Customer
- `GET /customers/v2` - Get customer accounts v2
- `GET /customers/list` - Get list of all available customers for MSP admin

### Billing [Beta]
- `GET /billing/monthly` - getMonthlyUsage
- `GET /billing/daily` - getDailyUsage

## Support

For questions or support, contact:
- **Email**: support@extremenetworks.com

## License

Apache 2.0
