# Extreme Platform ONE REST API - Asset Management

## Overview

The Extreme Platform ONE™ Asset Management API provides comprehensive
automation and intelligent orchestration for enterprise network asset lifecycle 
management, enabling seamless device inventory tracking, contract management, 
and automated compliance monitoring across complex network infrastructures.

## Base URL

```
https://cloudapi.extremecloudiq.com/assets/v1
```

## Key Features

- **Device**: **Advanced Device Asset Management & Intelligent Inventory Control**

Comprehensive device asset management capabilities providing intelligent  device discovery, automated inventory tracking, lifecycle management,  and advanced analytics for enterprise network infrastructure with  AI-powered optimization and predictive maintenance
- **Contract**: **Intelligent Contract Lifecycle Management & Automation**

Advanced contract management capabilities providing automated contract  tracking, intelligent renewal management, compliance monitoring, and  comprehensive vendor relationship optimization with AI-powered analytics  and predictive contract intelligence
- **Summary**: **Advanced Asset Summary & Firmware Management Operations**

Comprehensive asset summary and firmware management capabilities providing  intelligent device lifecycle tracking, automated firmware upgrade orchestration,  and centralized hardware lifecycle management with AI-powered insights and  predictive maintenance scheduling

## Authentication

- **Method**: Bearer Token
- Ensure you include valid credentials in your requests

## Main Endpoints

### Device
- `POST /devices` - List Devices
- `POST /devices/export` - Export Devices List
- `GET /devices/licenses` - Get License Information
- `POST /devices/column/filters` - List filters for columns
- `GET /devices/subscriptions/unmanaged` - Get count of UNMANAGED devices
- `POST /devices/productTypes` - Get Product Types
- `POST /devices/firmwareMetadatas` - Get Device Firmware Metadatas
- `GET /devices/status/count` - Get Device Status Count
- `POST /devices/licenseCount` - Get License Count Per Location

### Contract
- `POST /contracts` - List Filtered Contracts
- `GET /contracts/export` - Export Contracts (Deprecated)
- `POST /contracts/export` - Export Contracts with filters
- `GET /contracts/{contract_id}/lines` - List Contract Lines
- `GET /contracts/{contract_id}/export` - Export Contract with Lines
- `GET /contracts/filter` - Get Contract Filters

### Summary
- `POST /summary/firmwareStatus` - Get Firmware Status Count
- `POST /summary/firmwareSummary` - Get Firmware Summary
- `POST /summary/firmwareUpgrade` - Initiate Firmware Upgrade
- `POST /summary/firmwareVersions` - Get Firmware Versions
- `POST /summary/hardwareLifeCycle` - Get Hardware Lifecycle Summary
- `POST /summary/history` - Get Device History
- `POST /summary/history/column/filters` - Get History Column Filters
- `POST /summary/psirts/list` - List PSIRTs

## Support

For questions or support, contact:
- **Name**: Extreme Networks Support
- **URL**: https://www.extremenetworks.com/support
- **Email**: support@extremenetworks.com

## License

Apache 2.0
