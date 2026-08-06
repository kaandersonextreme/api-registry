# PerfMonitor Infrastructure API

## Overview

# Performance Monitor Infrastructure API for MCP Servers

This comprehensive API provides advanced network performance monitoring capabilities specifically optimized for MCP (Model Context Protocol) servers and automated monitoring systems.
The API enables sophisticated monitoring of device health, performance metrics, and network analytics across various network components with intelligent automation support.

## MCP Server Integration Features
- **Automated Performance Monitoring**: Continuous collection and analysis of network performance metrics
- **Intelligent Alerting**: AI-driven anomaly detection and automated alert generation
- **Time-Series Analytics**: Advanced time-series data processing for trend analysis and forecasting
- **Real-time Health Monitoring**: Live device health status tracking with automated response capabilities
- **Scalable Data Collection**: High-performance metric collection supporting thousands of devices
- **Integration-Ready**: Designed for seamless integration with monitoring platforms and automation tools

## Key Features
- **Application Discovery**: List supported monitoring applications and their capabilities
- **Metric Collection**: Retrieve time-series performance data from network devices with advanced filtering
- **Device Health Analytics**: Monitor device health status and performance indicators with trend analysis
- **Flexible Filtering**: Advanced filtering and pagination optimized for large-scale monitoring deployments
- **Real-time Data**: Access to current and historical performance metrics with microsecond precision
- **Bulk Operations**: Efficient batch processing for monitoring large network infrastructures

## MCP Use Cases
- **Infrastructure Monitoring**: Automated monitoring of switches, routers, and network devices
- **Performance Optimization**: AI-driven performance analysis and optimization recommendations
- **Capacity Planning**: Predictive analytics for network capacity planning and resource allocation
- **Anomaly Detection**: Machine learning-based anomaly detection for proactive issue identification
- **Compliance Monitoring**: Automated compliance tracking for SLA and performance requirements
- **Integration Workflows**: Seamless integration with ITSM, SIEM, and automation platforms

## Supported Applications
Currently supports monitoring for:
- **Network Infrastructure**: Switches, routers, and network devices with full SNMP and telemetry support
- **Device Stats**: CPU, memory, temperature, and power metrics with threshold monitoring
- **Interface Stats**: Port utilization, errors, and performance data with trend analysis
- **Wireless Stats**: Wireless device and interface monitoring with RF analytics
- **Health Analytics**: Comprehensive device health scoring and predictive maintenance
- **Usage Capacity Analytics**: Comprehensive usage and capacity monitoring across network infrastructure

## Data Formats
All timestamps use ISO 8601 UTC format (e.g., "2024-08-26T19:00:00Z").
Pagination is supported across all list operations for efficient data retrieval.
Time-series data includes microsecond precision for high-frequency monitoring.

## Authentication
This API requires proper authentication and authorization. Contact your system administrator for access credentials.


## Base URL

```
https://cloudapi.extremecloudiq.com/pm/v1
```

## Key Features

- **application management**: Operations for discovering and managing supported monitoring applications
- **metric capabilities**: Operations for retrieving metric capabilities of specific applications
- **Metric Data**: Operations for retrieving historical and real-time metric data from monitored devices
- **Device health data**: Operations for accessing device health analytics and status information
- **Usage capacity data**: Operations for accessing usage and capacity analytics and status information
- **Client health data**: Operations for accessing client health analytics, real-time status, and historical
health stats time-series data

## Authentication

- **Method**: Bearer Token
- Ensure you include valid credentials in your requests

## Main Endpoints

### application management
- `GET /applications` - Discover Supported Monitoring Applications for MCP Integration

### metric capabilities
- `GET /metric-capabilities` - Advanced Metric Capability Discovery for MCP Servers
- `GET /metric-schema` - Get the complete metric capability schema for all groups
- `GET /metric-capabilities/{metricGroup}` - Get detailed metric capability for a specific metric group

### Metric Data
- `POST /metric-data` - Advanced Time-Series Metric Retrieval for MCP Servers

### Device health data
- `POST /analytics/device-health` - Advanced Device Health Analytics for MCP Servers
- `POST /analytics/device-health/port-stats` - Retrieve aggregated port statistics for a device
- `POST /analytics/device-health/port-stats-summary` - Retrieve per-port statistics summary for a device

### Wireless device health data
- `POST /analytics/device-health/wireless` - Wireless Device Health Analytics for MCP Servers
- `POST /analytics/device-health/wireless/access-points` - Retrieve neighboring wireless access points for a device
- `POST /analytics/device-health/wireless/interface-graph` - Retrieve wireless interface time-series graph data for a device
- `POST /analytics/device-health/wireless/interfaces` - Retrieve wireless interface details for a device
- `POST /analytics/device-health/wireless/wired-interfaces` - Retrieve wired interface details for a wireless device

### Usage capacity data
- `POST /analytics/usage-capacity` - Advanced Usage and Capacity Analytics for MCP Servers
- `POST /analytics/usage-capacity/wireless` - Wireless Usage Capacity Analytics for MCP Servers

### Client health data
- `POST /analytics/client-health` - Advanced Client Health Analytics for MCP Servers
- `POST /analytics/client-health/history` - Historical Client Session Data at Network/Site Level
- `POST /analytics/client-health/stats` - Client Health Stats Time-Series Data for MCP Servers
- `POST /analytics/client-health/client-trail/wired` - Retrieve wired client trail data

### Client health data for wireless devices
- `POST /analytics/client-health/wireless` - Advanced Client Health Analytics for MCP Servers
- `POST /analytics/client-health/wireless/issue` - Client Issue Details for Wireless Devices

### Client health data values for wireless devices
- `POST /analytics/client-health/wireless/filter-metadata` - Advanced Client Health Analytics Metadata for MCP Servers

### Client trail data
- `POST /analytics/client-trail/roaming` - Client Trail Roaming Data for AI and MCP Servers
- `POST /analytics/client-trail/connectivity-experience` - Client Trail Connectivity Experience for AI and MCP Servers

### dashboard
- `POST /analytics/dashboard` - Dashboard Summary and Grid Data

### client-health
- `POST /analytics/client-health/qos-data/wireless` - Retrieve wireless client QOS chart data

### IP Routing Analytics
- `GET /analytics/ip-routing/devices/{device_id}` - Retrieve IPv4 routing details for a specific device

## Support

For questions or support, contact:
- **Name**: Extreme Networks Support
- **URL**: https://www.extremenetworks.com/support
- **Email**: support@extremenetworks.com

## License

Apache License 2.0
