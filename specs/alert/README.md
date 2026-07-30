# Extreme Platform ONE REST API - Alert

## Overview

The Extreme Platform ONE™ Alert API provides comprehensive monitoring and
management of network alerts, enabling proactive detection of issues across
your Extreme network infrastructure through configurable alert policies
and intelligent rule-based alerting.

**🔔 Intelligent Alert Management:**

• **Real-Time Alert Monitoring** - Centralized visibility into network alerts
with filtering by severity, category, site, device, and acknowledgment status
for rapid issue identification and triage

• **Flexible Alert Policies** - Global policies for organization-wide alerting
with optional site-specific policy overrides for customized alerting behavior
per location

• **Configurable Alert Rules** - Event-based and metric-based rules with
multiple trigger types (immediate, deferred, and repeated) to match your
operational requirements

• **Alert Analytics & Reporting** - Statistical analysis by device, location,
severity, and category with exportable reports for compliance and trending

• **Alert Acknowledgment Workflow** - Track alert review status to coordinate
team response and filter out already-addressed alerts from active monitoring


**🏢 Enterprise-Scale Operations:**

Built for enterprise environments with support for multi-site deployments,
hierarchical location-based alerting, bulk alert operations, and
comprehensive audit trails for large-scale network monitoring.

## Base URL

```
https://cloudapi.extremecloudiq.com/alert/v1
```

## Key Features

- **Alert**: **ExtremeCloud Generated Alerts**

The ExtremeCloud Generated Alert functionality provides comprehensive monitoring, tracking, and reporting of system-generated alerts
- **Alert Policy**: **ExtremeCloud Alert Policy Configuration**

The Alert Policy Configuration functionality offers full control over how alerts are generated and managed through policy administration
- **Metadata**: **Alert Metadata**

The Alert Metadata functionality provides structured reference information for understanding and categorizing alerts, messages, and system events

## Authentication

- **Method**: Bearer Token
- Ensure you include valid credentials in your requests

## Main Endpoints

### Alert
- `GET /alerts` - List Alerts
- `POST /alerts` - List alerts with more supporting filters
- `POST /alerts/:acknowledge` - Acknowledge Alerts
- `POST /alerts/:clear` - Clear Alerts
- `GET /alerts/count-by-{group}` - Count Alerts by Group
- `GET /alerts/stats-by-device` - Get Alert Statistics by Device
- `GET /alerts/stats-by-location` - Get Alert Statistics by Location
- `GET /alerts/{deviceId}/stats` - Get Device Alert Statistics
- `POST /alerts/reports` - Create Alert Report
- `GET /alerts/reports/{id}` - Download Alert Report

### Alert Policy
- `GET /alert-policies` - List Alert Policies
- `POST /alert-policies` - Create Site Alert Policy
- `GET /alert-policies/site-policies` - List Site Alert Policies
- `GET /alert-policies/{policyId}` - Get Alert Policy
- `PUT /alert-policies/{policyId}` - Update Site Alert Policy
- `DELETE /alert-policies/{policyId}` - Delete Site Alert Policy
- `GET /alert-policies/available-sites` - List Available Sites
- `GET /alert-policies/sites` - List Sites by Filter
- `GET /alert-policies/{policyId}/rules` - List Alert Policy Rules
- `GET /alert-policies/{policyId}/rules/{ruleId}` - Get Alert Rule
- ... and 3 more

### Metadata
- `GET /metadata/apps` - List Alert Applications
- `GET /metadata/categories` - List Alert Categories
- `GET /metadata/message-types` - List Alert Message Types
- `GET /metadata/severities` - List Alert Severities
- `GET /metadata/source-types` - List Alert Source Types

## Support

For questions or support, contact:
- **Name**: Extreme Networks Support
- **URL**: https://www.extremenetworks.com/support
- **Email**: support@extremenetworks.com

## License

Apache 2.0
