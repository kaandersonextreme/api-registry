# Extreme Platform ONE REST API - Reporting

## Overview

Extreme Platform ONE™ Reporting API provides comprehensive reporting and analytics capabilities for generating, scheduling, and exporting reports on network performance, security, device health, and operational metrics.

## Base URL

```
https://cloudapi.extremecloudiq.com/reporting/v1
```

## Key Features

- **Reports**: Operations for managing, generating, and retrieving reports
- **Report Templates**: Pre-defined report templates and custom template management
- **Scheduled Reports**: Operations for scheduling and managing automated report generation
- **Report Data**: Direct access to raw reporting data and metrics

## Authentication

- **Method**: Bearer Token
- Ensure you include valid credentials in your requests

## Main Endpoints

### Reports
- `GET /reports` - List all reports
- `POST /reports` - Create a new report
- `GET /reports/{reportId}` - Get report details
- `DELETE /reports/{reportId}` - Delete a report
- `GET /reports/{reportId}/download` - Download report

### Report Templates
- `GET /templates` - List report templates

### Scheduled Reports
- `GET /scheduled-reports` - List scheduled reports
- `POST /scheduled-reports` - Schedule a report

### Report Data
- `GET /metrics` - Get available metrics

## Support

For questions or support, contact:
- **Name**: Extreme Networks Support
- **URL**: https://www.extremenetworks.com/support
- **Email**: support@extremenetworks.com

## License

Apache 2.0
