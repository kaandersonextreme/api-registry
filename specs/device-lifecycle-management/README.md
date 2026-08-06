# Extreme Platform ONE REST API - Device Lifecycle Management

## Overview

The Extreme Platform ONE™ Device Lifecycle Management API provides comprehensive
automation and orchestration for the complete network device lifecycle, from 
initial discovery and zero-touch onboarding through operational management 
and secure decommissioning.

**🔄 Complete Lifecycle Management:**

• **Zero-Touch Device Onboarding** - Fully automated provisioning for wireless 
devices (IQEngine/XIQ) and wired devices (EXOS/VOSS) with intelligent 
configuration validation and compliance checking

• **Intelligent Bulk Operations** - Enterprise-scale batch processing with 
Excel-based import/export, template-driven workflows, and automated 
validation for efficient mass device management

• **Advanced Device Discovery** - Device detection and classification 
with automatic product compatibility checking and network topology analysis

• **Subscription & License Management** - Automated tracking and lifecycle 
management of device subscriptions, software licenses, and service entitlements

• **Secure Lifecycle Transitions** - Complete device state management from 
onboarding through operational phases to secure decommissioning with audit trails


**🏢 Enterprise Integration & Scale:**

Built for enterprise environments with seamless integration capabilities,
comprehensive audit trails, high-performance batch processing, and 
enterprise-grade security controls for large-scale network deployments.

## Base URL

```
https://cloudapi.extremecloudiq.com/device-lifecycle
```

## Key Features

- **Device**: **Advanced Device Lifecycle & Operational Management**


Complete device lifecycle management covering discovery, configuration, 
monitoring and decommissioning

## Authentication

- **Method**: Bearer Token
- Ensure you include valid credentials in your requests

## Main Endpoints

### Device
- `POST /v1/devices` - Get list of all devices
- `POST /v1/devices/:export` - Export Devices List
- `POST /v1/devices/:delete` - Delete devices from management
- `GET /v1/devices/:status` - Get status of delete device operation
- `POST /v1/devices/discovery/{device_sn}/:add` - Add Discovered Device to Management System
- `GET /v1/devices/discovery/{device_sn}/:result` - Get Discovered Devices for a Device
- `POST /v1/devices/discovery/{device_sn}/:result` - Get Discovered Devices for a Device
- `GET /v1/devices/discovery/{device_sn}/filters` - Get Device Discovery Filter Values
- `GET /v1/devices/discovery/{device_sn}/:settings` - Device Discovery Settings
- `POST /v1/devices/discovery/{device_sn}/:start` - Start Discovery for a Device
- ... and 27 more

## Support

For questions or support, contact:
- **Name**: Extreme Networks Support
- **URL**: https://www.extremenetworks.com/support
- **Email**: support@extremenetworks.com

## License

Apache 2.0
