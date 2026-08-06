# Extreme Platform ONE REST API - Audit Log

## Overview

Extreme Platform ONE&trade; Audit Log API provides comprehensive tracking of user activities within Extreme Platform ONE, ensuring transparency, traceability, and accountability across all applications.

## Base URL

```
https://cloudapi.extremecloudiq.com/auditlog/v1
```

## Key Features

- **User Activity Audit Logs**: Operations for querying, filtering, and exporting user activity audit logs
- **Audit Log Metadata**: The metadata used in audit logs

## Authentication

- **Method**: Bearer Token
- Ensure you include valid credentials in your requests

## Main Endpoints

### User Activity Audit Logs
- `GET /user-activities` - Search user activity audit logs
- `GET /user-activities/export` - Export user activity audit logs
- `GET /my-activities` - Search my activity audit logs

### Audit Log Metadata
- `GET /user-apps` - List supported applications
- `GET /categories` - List supported categories
- `GET /user-operations` - List supported user operations

## Support

For questions or support, contact:
- **Name**: Extreme Networks Support
- **URL**: https://www.extremenetworks.com/support
- **Email**: support@extremenetworks.com

## License

Apache 2.0
