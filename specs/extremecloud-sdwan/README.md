# ExtremeCloud SD-WAN API

## Overview

ExtremeCloud SD-WAN API allows customers and partners to configure solutions for the management, monitoring, and provisioning of their SD-WAN environment.

## Base URL

```
https://cloudapi.extremecloudiq.com/sdwan
```

## Key Features

- **Authentication**: Login to XiQ server for authentication
- **Sites**: The sites APIs from common location service
- **Policy Configuration**: SD-WAN Policy configuration
- **Security Configuration**: Security Policy configuration
- **Templates**: Appliance templates
- **Overlay Configuration**: Overlays
- **Application Performance**: Application Performance configuration
- **Onboarding**: Appliance onboarding
- **Appliance Configuration**: Appliance configuration
- **Appliance 360**: Appliance overview
- **Site 360**: Site overview
- **Application 360**: Application overview
- **WAN 360**: WAN overview
- **Topology**: Topology overview
- **Alarms**: Alarms overview
- **Alarm Notification Rules**: Alarm Notification Rules
- **Troubleshooting**: Advanced troubleshooting
- **Scripts**: Run Scripts
- **Dashboard Domain Analysis**: Dashboard domain analysis
- **Audit**: Audit Records
- **RVC Configuration**: RVC Configuration
- **SaaS Configuration**: SaaS Configuration
- **RTG**: Real Time Graph
- **Flows**: Flows
- **Reports**: Reporting

## Authentication

- **Method**: Bearer Token
- Ensure you include valid credentials in your requests

## Main Endpoints

### Authentication
- `POST /login` - User login with username and password
- `POST /logout` - User logout (Revoke the current access token)

### Sites
- `GET /locations/site` - List sites
- `POST /locations/site` - Create site
- `GET /locations/site/{id}` - Get site by ID
- `PUT /locations/site/{id}` - Update site by ID
- `DELETE /locations/site/{id}` - Delete site by ID
- `GET /countries` - Get country list

### Alarms
- `GET /alarms/v1/alarms` - Get alarms with their configuration status
- `GET /alarms/v1/alarms/active-counts` - Get active alarms count per severity
- `GET /alarms/v1/alarms/sites` - Sites Summary
- `GET /alarms/v1/alarms/filters` - Get alarm filter values
- `GET /alarms/v1/alarms/timeline` - Get alarms timeline chart data

### Alarm Notification Rules
- `GET /alarms/v1/alarms/notification-rules` - Get alarm notification rules
- `POST /alarms/v1/alarms/notification-rules` - Create alarm notification rule
- `PUT /alarms/v1/alarms/notification-rules/{id}` - Update alarm notification rule
- `DELETE /alarms/v1/alarms/notification-rules/{id}` - Delete alarm notification rule
- `GET /alarms/v1/alarms/notification-rules/filters` - Get alarm notification rules filters

### Topology
- `GET /monitoring/v1/dashboard/sites-summary` - Get Sites Summary
- `GET /monitoring/v1/dashboard/appliances-summary` - Get Appliance Summary Information
- `GET /monitoring/v1/dashboard/wans-summary` - Get WANs Summary
- `GET /monitoring/v1/dashboard/applications-summary` - Get Applications Summary
- `GET /monitoring/v1/dashboard/site/status` - Get Site Alarms and Appliances status
- `GET /monitoring/v1/dashboard/site/metrics` - Get Site Eqs and Throughput
- `GET /monitoring/v1/connections` - Get Connection Details
- `GET /monitoring/v1/connections/sites` - Get Connection Sites
- `GET /monitoring/v1/connections/appliances/{id}` - Get Appliance Connection Details
- `GET /monitoring/v1/connections/underlays` - Get Underlay Connection
- ... and 1 more

### Application 360
- `GET /monitoring/v1/applications/metrics/summary` - Get application overview Summary API
- `GET /monitoring/v1/applications/eqs/timeseries` - Get Eqs Evolution API
- `GET /monitoring/v1/applications/volume/top` - Get Top 10 Volume API
- `GET /monitoring/v1/applications/eqs/worst` - Get worst 10 Eqs API
- `GET /monitoring/v1/applications/throughput/timeseries` - Get Throughput Evolution API
- `GET /monitoring/v1/saasapplications` - Get Active SaaS Applications API
- `GET /monitoring/v1/saasapplications/filters` - Get Active SaaS Applications API filters
- `GET /monitoring/v1/dpiapplications` - Get Discovered DPI Applications API
- `GET /monitoring/v1/dpiapplications/filters` - Get DPI Applications filters
- `GET /monitoring/v1/compression-metrics/stats/applications` - Get Compression Metrics Per Application
- ... and 12 more

### Site 360
- `GET /monitoring/v1/sites/overview` - Get Sites Overview
- `GET /monitoring/v1/sites/{id}/metrics/wans` - Get Wan Services Informations API
- `GET /monitoring/v1/sites/{id}/eqs/worst` - Get worst 10 Eqs API
- `GET /monitoring/v1/sites/{id}/eqs/worst/timeseries` - Get Eqs Evolution by worst 10 application API
- `GET /monitoring/v1/sites/{id}/volume/top` - Get Top 10 Volume API
- `GET /monitoring/v1/sites/{id}/metrics/wans/throughput` - Get WAN throughput evolution API
- `GET /monitoring/v1/sites/{id}/metrics/wans/eqs` - Get WAN EQS evolution API
- `GET /monitoring/v1/sites/{id}/throughput/timeseries` - Get Throughput Evolution API
- `GET /monitoring/v1/sites/{id}/eqs/timeseries` - Get Eqs Evolution API
- `GET /monitoring/v1/sites/{id}/throughput/top/timeseries` - Get Throughput Evolution by Top 10 application API
- ... and 16 more

### Appliance 360
- `GET /monitoring/v1/metrics/timeseries` - Get Monitoring metrics Evolution API
- `GET /monitoring/v1/appliances/status` - Get Appliance Status List
- `GET /monitoring/v1/appliances/{id}/status` - Get Appliance Status
- `GET /monitoring/v1/appliances/{id}/cpu-usage` - Get Appliance CPU Usage
- `GET /monitoring/v1/appliances/{id}/fabric-peers` - Get Appliance's Fabric Peer Status
- `GET /monitoring/v1/appliances/{id}/system-usage` - Get Appliance System Usage

### WAN 360
- `GET /monitoring/v1/metrics/wans/throughput` - Get throughput evolution API
- `GET /monitoring/v1/metrics/wans` - Get Wan Services Informations API
- `GET /monitoring/v1/metrics/wans/local/availability` - Get local availability and EQS API
- `GET /monitoring/v1/metrics/wans/end-end/availability` - Get end to end availabilty and EQS API
- `GET /monitoring/v1/metrics/wans/eqs` - Get EQS evolution API
- `GET /monitoring/v1/wans/filters` - Get Wan Overview Filters API

### Dashboard Domain Analysis
- `GET /monitoring/v1/network-analysis/metrics` - Get network analysis metrics
- `GET /monitoring/v1/network-analysis/summary` - Get network analysis summary
- `GET /monitoring/v1/network-analysis/filters` - Get network analysis filters
- `GET /monitoring/v1/network-analysis/ethernet-throughput` - Get ethernet throughput metrics
- `GET /monitoring/v1/network-analysis/ip-throughput` - Get IP throughput metrics

### Flows
- `POST /monitoring/v1/flows/live/sessions` - Create Real Time Monitoring Session
- `POST /monitoring/v1/flows/live/sessions/create` - Create Real Time Monitoring Session
- `GET /monitoring/v1/flows/live/sessions/{id}` - Get Real Time Monitoring data
- `DELETE /monitoring/v1/flows/live/sessions/{id}` - Delete Real Time Monitoring Session

### RTG
- `POST /monitoring/v1/rtg/sessions` - Create Real Time Monitoring Session
- `POST /monitoring/v1/rtg/sessions/create` - Create Real Time Monitoring Session
- `GET /monitoring/v1/rtg/sessions/{id}` - Get Real Time Monitoring data
- `DELETE /monitoring/v1/rtg/sessions/{id}` - Delete Real Time Monitoring Session

### Appliance Configuration
- `GET /configuration/v1/manage/devices` - Get devices with their configuration status
- `GET /configuration/v1/manage/devices/{applianceId}` - Get Device by Appliance Id
- `GET /configuration/v1/appliances/{applianceId}/general-settings` - Get general settings of an appliance
- `PUT /configuration/v1/appliances/{applianceId}/general-settings` - Update general settings of an appliance
- `POST /configuration/v1/appliances/{applianceId}/general-settings/reset-to-template` - Reset general settings to template default
- `GET /configuration/v1/appliances/{applianceId}/lan-settings` - Get LAN settings of an appliance
- `PUT /configuration/v1/appliances/{applianceId}/lan-settings` - Update LAN settings for an appliance
- `POST /configuration/v1/appliances/{applianceId}/lan-settings/reset-to-template` - Reset LAN settings to template default
- `GET /configuration/v1/appliances/{applianceId}/wan-settings` - Get all WAN settings of an appliance
- `POST /configuration/v1/appliances/{applianceId}/wan-settings/reset-to-template` - Reset WAN settings to template default
- ... and 23 more

### Security Configuration
- `GET /configuration/v1/network-policies/{policyId}/vpn-zones` - Get VPN Zones
- `POST /configuration/v1/network-policies/{policyId}/vpn-zones` - Add VPN Zones
- `PUT /configuration/v1/network-policies/{policyId}/vpn-zones` - Update VPN Zones
- `DELETE /configuration/v1/network-policies/{policyId}/vpn-zones` - Delete VPN Zones
- `GET /configuration/v1/network-policies/{policyId}/vpn-zones/{id}` - Get a VPN Zone
- `GET /configuration/v1/network-policies/{policyId}/vpn-policies` - Get VPN Policies
- `PUT /configuration/v1/network-policies/{policyId}/vpn-policies` - Update VPN Policies
- `GET /configuration/v1/network-policies/{policyId}/vpn-policies/{id}` - Get a VPN Policy
- `GET /configuration/v1/network-policies/{policyId}/port-based-application-sets` - Get Port Based Application Sets
- `POST /configuration/v1/network-policies/{policyId}/port-based-application-sets` - Create Port Based Application Sets
- ... and 18 more

### Overlay Configuration
- `GET /configuration/v1/network-policies/{policyId}/overlays` - Get Overlay Configuration
- `DELETE /configuration/v1/network-policies/{policyId}/overlays` - Delete Overlay Configuration
- `POST /configuration/v1/network-policies/{policyId}/overlays/hub-and-spokes` - Create Hub and Spoke Overlay Configuration
- `PUT /configuration/v1/network-policies/{policyId}/overlays/hub-and-spokes` - Update Hub and Spoke Overlay Configuration
- `POST /configuration/v1/network-policies/{policyId}/overlays/third-party-vpns` - Create Third Party Vpn Configuration
- `PUT /configuration/v1/network-policies/{policyId}/overlays/third-party-vpns` - Update Third Party Vpn Configuration
- `GET /configuration/v1/network-policies/{policyId}/overlays/{id}` - Get Overlay Configuration by Id
- `GET /configuration/v1/network-policies/{policyId}/overlays/associations` - Get Overlay with Hub/Spoke/WAN Associations

### Application Performance
- `GET /configuration/v1/network-policies/{policyId}/application-performance/application-groups` - Get application groups
- `POST /configuration/v1/network-policies/{policyId}/application-performance/application-groups` - Create application groups
- `PUT /configuration/v1/network-policies/{policyId}/application-performance/application-groups` - Update application groups
- `DELETE /configuration/v1/network-policies/{policyId}/application-performance/application-groups` - Delete application groups
- `GET /configuration/v1/network-policies/{policyId}/application-performance/application-groups/{id}` - Get an application group
- `GET /configuration/v1/network-policies/{policyId}/application-performance/transport-networks` - Get transport networks
- `POST /configuration/v1/network-policies/{policyId}/application-performance/transport-networks` - Add transport networks
- `PUT /configuration/v1/network-policies/{policyId}/application-performance/transport-networks` - Update transport networks
- `DELETE /configuration/v1/network-policies/{policyId}/application-performance/transport-networks` - Delete transport networks
- `GET /configuration/v1/network-policies/{policyId}/application-performance/transport-networks/{id}` - Get a transport network
- ... and 31 more

### Onboarding
- `GET /configuration/v1/appliances` - Get Appliances
- `POST /configuration/v1/appliances` - Onboard Appliances
- `DELETE /configuration/v1/appliances` - Trigger deletion of appliances
- `GET /configuration/v1/appliances/{applianceId}` - Get Appliance by Appliance Id
- `PATCH /configuration/v1/appliances/{applianceId}` - Patch an appliance's name and serial number
- `POST /configuration/v1/appliances-csv` - Onboard Appliances by uploading CSV
- `GET /configuration/v1/appliances/serial-number/{serialNumber}` - Get Appliance by Serial Number
- `GET /configuration/v1/sites` - Get all Sites
- `GET /configuration/v1/sites/{siteId}` - Get Site by Site ID
- `POST /configuration/v1/sites/assign-appliances` - Assign Appliances to Sites
- ... and 11 more

### Templates
- `GET /configuration/v1/templates` - Get Appliance Template
- `POST /configuration/v1/templates` - Create Appliance Template
- `PUT /configuration/v1/templates` - Update Appliance Template
- `DELETE /configuration/v1/templates` - Delete Appliance Template
- `GET /configuration/v1/templates/{id}` - Get Appliance Template by Id
- `GET /configuration/v1/templates/associations` - Get Templates with Associations
- `GET /configuration/v1/lans` - Get all LANs
- `POST /configuration/v1/lans` - Create new LANs
- `PUT /configuration/v1/lans` - Update LANs
- `DELETE /configuration/v1/lans` - Delete LANs
- ... and 6 more

### Policy Configuration
- `GET /configuration/v1/network-policies` - Get SD-WAN Policy
- `POST /configuration/v1/network-policies` - Create SD-WAN Policy
- `PUT /configuration/v1/network-policies` - Update SD-WAN Policy
- `GET /configuration/v1/network-policies/{id}` - Get Network Policy by Id
- `GET /configuration/v1/network-policies/active-policy` - Get Active SD-WAN Policy
- `GET /configuration/v1/network-policies/{policyId}/routing/settings` - Get routing settings
- `PUT /configuration/v1/network-policies/{policyId}/routing/settings` - Update routing settings
- `GET /configuration/v1/network-policies/{policyId}/routing/settings/{id}` - Get a routing settings
- `GET /configuration/v1/policy-advanced-settings` - Get advanced settings
- `POST /configuration/v1/policy-advanced-settings` - Create advanced settings
- ... and 3 more

### RVC Configuration
- `GET /configuration/v1/rvc-destinations` - Get RVC destinations
- `POST /configuration/v1/rvc-destinations` - Add RVC destinations
- `PUT /configuration/v1/rvc-destinations` - Update RVC destinations
- `DELETE /configuration/v1/rvc-destinations` - Delete RVC Destinations
- `GET /configuration/v1/rvc-destinations/{id}` - Get a RVC destination

### SaaS Configuration
- `GET /configuration/v1/saas-catalog` - Get SaaS catalog
- `GET /configuration/v1/saas-catalog/info` - Get SaaS catalog info

### Troubleshooting
- `POST /tools/v1/troubleshooting/start` - Start Appliance troubleshooting
- `GET /tools/v1/troubleshooting/stats` - Appliance troubleshooting stats
- `GET /tools/v1/troubleshooting/graph` - Appliance troubleshooting graph
- `POST /tools/v1/troubleshooting/stop/{request_id}` - Stop Appliance troubleshooting

### Scripts
- `GET /tools/v1/scripts/catalog` - Get scripts catalog
- `POST /tools/v1/scripts/execute/{script_name}` - Run a script
- `GET /tools/v1/scripts/status` - Get script status
- `GET /tools/v1/scripts/result` - Get script result(s)
- `POST /tools/v1/scripts/result/delete` - Delete result(s)
- `GET /tools/v1/scripts/result/download` - Download script result

### Audit
- `GET /system/v1/audit/records` - Get All Audit Records
- `GET /system/v1/audit/records/{id}` - Get Audit Record Details
- `GET /system/v1/audit/filters` - Get Audit Record Filters

### Reports
- `POST /reporting/v1/reports/config` - Create report API
- `GET /reporting/v1/reports` - Get all report configs with generated report list
- `DELETE /reporting/v1/reports` - Delete Report/Reports
- `PUT /reporting/v1/reports/{config_id}` - Put update report config API
- `GET /reporting/v1/reports/{report_id}/download` - download report
- `GET /reporting/v1/reports/components` - Report Widget list API
- `GET /reporting/v1/reports/templates` - Template List API
- `POST /reporting/v1/reports/templates` - Save template API
- `DELETE /reporting/v1/reports/templates` - Template Delete API
- `GET /reporting/v1/reports/templates/{template_id}` - Template metadata API
- ... and 2 more

## Support

For questions or support, contact:
- **Name**: Extreme Networks Support
- **URL**: https://www.extremenetworks.com/support
- **Email**: support@extremenetworks.com

## License

Apache 2.0
