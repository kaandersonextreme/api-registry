# ExtremeCloud IQ API

## Overview

ExtremeCloud IQ RESTful API for external and internal applications.

## Base URL

```
https://cloudapi.extremecloudiq.com/xiq/v1
```

## Key Features

- **Authentication**: User login & logout
- **Authorization**: API token and permissions
- **Operation**: Long-Running Operations (LRO) management for asynchronous APIs
- **Account**: ExtremeCloud IQ Account
- **User**: Local and external user management in ExtremeCloud IQ account
- **Use Folder Preferences**: User folder preferences
- **HIQ**: Hierarchical ExtremeCloud IQ
- **Location**: Hierarchical locations and floor plan
- **Device**: Supported device platforms: Cloud Engine, IQ Engine, WiNG, VOSS, EXOS 
- **Network Policy**: Unified configuration management for wireless and wired network devices
- **Client**: The clients associate to the devices of ExtremeCloud IQ
- **Client - Details**: The details of client associate to the devices of ExtremeCloud IQ
- **Switch Inspector Panel**: Get the switch inspector panel
- **D360**: D360 API Endpoint
- **Dashboard**: Dashboard
- **Dashboard Wired Usage and Capacity**: Get the dashboard for usage and capacity
- **Dashboard Wired Client Health**: Get the dashboard for client health
- **Dashboard Wired Device Health**: Get the dashboard for wired device health
- **Dashboard Wireless Usage and Capacity**: Get the dashboard for usage and capacity health
- **Dashboard Wireless Client Health**: Get the dashboard for client health
- **Dashboard Wireless Device Health**: Get the dashboard for device health
- **Geo View**: Geo View API Endpoint
- **Application**: Application management and application metrics
- **Alert**: ExtremeCloud IQ generated alerts and events
- **Log**: Access all kinds of logs in ExtremeCloud IQ
- **Notification**: Push events/logs to users via Webhook, Email, SMS, etc
- **Administration**: API Token Management, 3rd Party API Connections, Credential Distribution Groups
- **NOS**: Get device info by NOS
- **Configuration - Deployment**: Push configuration to devices
- **Configuration - Basic**: VLAN Profile/DHCP Server/
- **Configuration - User Management**: User Group/End User/PCG/PPSK Classification
- **Configuration - Policy**: SSID/User Profile/Classification Rule/CCG/Radio Profile/
- **Configuration - Network**: ExtremeCloud Tunnel Concentrator/
- **Configuration - Authentication**: AD/LDAP/RADIUS/CWP/
- **Configuration - Certificate**: Certificate
- **Copilot - Connectivity Experience**: ExtremeCloud IQ Copilot
- **Copilot - Anomalies**: ExtremeCloud IQ Copilot
- **Packet Capture**: The packet capture sessions in ExtremeCloud IQ
- **Network Scorecard**: The scorecard containing device, client, network, wifi and services health of the selected location
- **Essentials - ExtremeLocation**: The ExtremeLocation and Analytics API
- **Misc**: Metadata - Country/
- **Thread**: The thread mesh network topology
- **NG Reports (Ondemand)**: Supports following metrics
- **NG Reports (Scheduled)**: NG Scheduled Reports & Recipients API Endpoint
- **Universal Compute Platform**: Universal Compute Platform

## Authentication

- **Method**: Bearer Token
- Ensure you include valid credentials in your requests

## Main Endpoints

### Account
- `PUT /v1/account/viq/default-device-password` - Update the default device password in the account (with validation)
- `GET /account/viq/default-device-password` - Get the default device password in the account
- `PUT /account/viq/default-device-password` - Update the default device password in the account
- `PUT /account/vhm/setting/{id}` - Update Vhm Setting
- `POST /backup/history/:restore` - Backup History Restore
- `POST /account/viq/import` - [LRO] Import VIQ data
- `POST /account/viq/export` - [LRO] Export VIQ data
- `POST /account/viq/:reset` - Reset VIQ
- `POST /account/viq/:backup` - Backup VIQ
- `POST /account/:switch` - Switch to another ExtremeCloud IQ account
- ... and 11 more

### Configuration - User Management
- `PUT /usergroups/{id}` - Update user group
- `DELETE /usergroups/{id}` - Delete user group by ID
- `GET /pcgs/key-based/network-policy-{policyId}/users` - Get users for a PCG-enabled network policy
- `PUT /pcgs/key-based/network-policy-{policyId}/users` - Replace all users in a PCG-enabled network policy
- `POST /pcgs/key-based/network-policy-{policyId}/users` - [LRO] Add users to a PCG-enabled network policy
- `DELETE /pcgs/key-based/network-policy-{policyId}/users` - Delete users from a PCG-enabled network policy
- `PUT /endusers/{id}` - Update an end user
- `DELETE /endusers/{id}` - Delete end user by ID
- `GET /usergroups` - List user groups
- `POST /usergroups` - Create user group
- ... and 16 more

### Configuration - Policy
- `GET /user-profiles/{id}` - Get user profile by ID
- `PUT /user-profiles/{id}` - Update user profile
- `DELETE /user-profiles/{id}` - Delete an user profile by ID
- `PUT /ssids/{id}/psk/password` - Change the SSID PSK password
- `PUT /ssids/{id}/mode/wep` - Change the SSID mode to WEP
- `PUT /ssids/{id}/mode/psk` - Change the SSID mode to PSK
- `PUT /ssids/{id}/mode/ppsk` - Change the SSID mode to PPSK
- `PUT /ssids/{id}/mode/open` - Change the SSID mode to open access
- `PUT /ssids/{id}/mode/dot1x` - Change the SSID mode to 802.1x
- `GET /ssids/advanced-settings/{id}` - Get SSID advanced settings
- ... and 98 more

### Configuration - Network
- `GET /tunnel-concentrators/{id}` - Get Tunnel Concentrator by ID
- `PUT /tunnel-concentrators/{id}` - Update TunnelConcentrator by ID
- `DELETE /tunnel-concentrators/{id}` - Delete TunnelConcentrator by ID
- `GET /tunnel-concentrators` - List Tunnel Concentrators
- `POST /tunnel-concentrators` - Create a Tunnel Concentrator
- `GET /network-services` - List Network Services
- `POST /network-services` - Create Network Services
- `DELETE /network-services/{id}` - Delete Network Services

### Administration
- `GET /third-party-api-connection` - List third party api connections
- `PUT /third-party-api-connection` - Update a third party api connection
- `DELETE /third-party-api-connection` - Delete a third party api connection
- `PUT /credential-distribution-groups/{id}` - Update Credential Distribution Group by ID
- `GET /credential-distribution-groups` - List Credential Distribution Groups
- `POST /credential-distribution-groups` - Create a Credential Distribution Group
- `DELETE /credential-distribution-groups` - Delete Credential Distribution Group by ID
- `GET /acct-api-token` - List API Access tokens
- `POST /acct-api-token` - Create an API Access token
- `DELETE /acct-api-token/{id}` - Delete API Access token by ID
- ... and 3 more

### Notification
- `PUT /subscriptions/webhook/{id}` - Update webhook subscription
- `GET /subscriptions/webhook` - List webhook subscriptions
- `POST /subscriptions/webhook` - Create webhook subscriptions
- `GET /subscriptions/webhook/export` - Export all webhook subscriptions to CSV
- `DELETE /subscriptions/webhook/:delete` - Delete webhook subscription

### afc-endpoint
- `GET /site/afc/schedule` - getSiteAfcSchedule
- `PUT /site/afc/schedule` - updateSiteAfcSchedule
- `POST /site/afc/schedule` - createSiteAfcSchedule
- `GET /floor/afc/details` - AFC Related Floor Height and Accuracy data
- `PUT /floor/afc/details` - AFC Related Floor and AP Height and Accuracy data
- `POST /floor/afc/details` - AFC Related Floor and AP Height and Accuracy data
- `POST /site/spectrum/` - getAfcSpectrumPerSite
- `POST /aps/afc/update` - Manual Spectrum request for device(s)
- `GET /aps/afc/query/` - Get AFC APs Summary Data
- `POST /aps/afc/query/` - Get AFC APs Summary Data
- ... and 15 more

### Configuration - Authentication
- `GET /radsec-proxies/{id}` - Get the RADSEC proxy configuration
- `PUT /radsec-proxies/{id}` - Update RADSEC proxy configuration
- `DELETE /radsec-proxies/{id}` - Delete the RADSEC proxy configuration
- `GET /radius-servers/internal/{id}` - Get internal RADIUS server by ID
- `PUT /radius-servers/internal/{id}` - Update internal RADIUS server configuration
- `DELETE /radius-servers/internal/{id}` - Delete internal RADIUS server configuration
- `GET /radius-servers/external/{id}` - Get external RADIUS server by ID
- `PUT /radius-servers/external/{id}` - Update external RADIUS server configuration
- `DELETE /radius-servers/external/{id}` - Delete external RADIUS server configuration
- `GET /radius-proxies/{id}` - Get the RADIUS proxy configuration
- ... and 25 more

### NG Reports (Scheduled)
- `GET /ng-reports/scheduled/{reportId}/recipients` - Get Recipients for Report
- `PUT /ng-reports/scheduled/{reportId}/recipients` - Add Recipients to Report
- `POST /ng-reports/scheduled/{reportId}/recipients` - Delete Recipients from Report
- `GET /ng-reports/scheduled/custom/{reportId}` - Get a custom report schedule
- `PUT /ng-reports/scheduled/custom/{reportId}` - Update a scheduled custom report
- `GET /ng-reports/scheduled/custom` - List Custom Report Schedules
- `POST /ng-reports/scheduled/custom` - Create a scheduled custom report
- `DELETE /ng-reports/scheduled/custom` - Delete scheduled custom reports
- `PATCH /ng-reports/scheduled/{reportScheduleId}` - Enable or Disable Report Schedule
- `GET /ng-reports/scheduled/runs/{reportRunId}/recipients` - Get Recipients for Report Run
- ... and 5 more

### Network Policy
- `GET /network-policies/{id}` - Get the network policy
- `PUT /network-policies/{id}` - Update the network policy
- `DELETE /network-policies/{id}` - Delete the network policy
- `GET /network-policies` - List network policies
- `POST /network-policies` - Create network policy
- `POST /network-policies/{id}/ssids/:remove` - Removes SSIDs from the network policy
- `POST /network-policies/{id}/ssids/:add` - Add SSIDs to a network policy
- `GET /network-policies/{id}/ssids` - List SSIDs for a network policy

### Location
- `PUT /locations/{id}` - Update a location
- `DELETE /locations/{id}` - Delete a location by ID
- `PUT /locations/wall/type/{id}` - Update a wall type
- `DELETE /locations/wall/type/{id}` - Delete a wall type
- `GET /locations/site/{id}` - Get a site by ID
- `PUT /locations/site/{id}` - Update a site by ID
- `DELETE /locations/site/{id}` - Delete a site by ID
- `PUT /locations/folder/zones` - Update zones in folder
- `POST /locations/folder/zones` - Create a zone
- `GET /locations/floor/{id}` - Get a floor by ID
- ... and 28 more

### HIQ
- `GET /hiq/context` - Get HIQ context
- `PUT /hiq/context` - Set HIQ context
- `GET /hiq/context/reading` - Get organizations for reading data
- `PUT /hiq/context/reading` - Set organizations for reading data
- `GET /hiq/context/creating` - Get organization for creating new data
- `PUT /hiq/context/creating` - Set organization for creating new data
- `GET /hiq/organizations` - List all organizations
- `POST /hiq/organizations` - Create a new organization
- `POST /hiq/organizations/{id}/:rename` - Rename an existing organization
- `GET /hiq/status` - Get HIQ status
- ... and 1 more

### Device
- `PUT /devices/{id}/visible` - Update the visible status of a device in a floor
- `GET /devices/{id}/radio-operating-mode` - Get the device radio operating mode
- `PUT /devices/{id}/radio-operating-mode` - Configure radio operating mode of a device
- `GET /devices/{id}/network-policy` - Get network policy for a device
- `PUT /devices/{id}/network-policy` - Assign network policy to a device
- `DELETE /devices/{id}/network-policy` - Revoke network policy for a device
- `PUT /devices/{id}/mobileapp/gps` - Update AP GPS settings
- `GET /devices/{id}/location` - Get location for a device
- `PUT /devices/{id}/location` - Assign location to a device
- `DELETE /devices/{id}/location` - Revoke location for a device
- ... and 74 more

### Configuration - Deployment
- `GET /deployments/{deploymentId}` - Get deployment details by Id
- `PUT /deployments/{deploymentId}` - Update schedule with deployment ID
- `DELETE /deployments/{deploymentId}` - Delete the deployment schedule by ID
- `GET /deployments` - Get list of deployments
- `POST /deployments` - [LRO] Push configuration and upgrade firmware
- `POST /deployments/firmware-metadatas` - Get device firmware metadatas
- `GET /deployments/{deploymentId}/status` - [LRO] Get firmware deployment status by ID
- `GET /deployments/status` - Get configuration deployment status
- `GET /deployments/overview` - Get configuration deployment overview

### Copilot - Anomalies
- `PUT /copilot/anomalies/update-device-action` - [LRO] Update Anomalies and Devices
- `PUT /copilot/anomalies/update-action` - updateAnomalyAction
- `PUT /copilot/anomalies/devices/update-action` - updateAnomalyDeviceAction
- `PUT /copilot/anomalies/devices/feedback` - updateAnomaliesFeedback
- `POST /copilot/anomalies/exclude-vlans` - updateMissingVlanExcludedVlanList
- `POST /copilot/anomalies/exclude-vlans-csv` - updateMissingVlanExcludedVlanCsv
- `GET /copilot/assurance-scans/overview` - getAssuranceScansOverviewData
- `GET /copilot/anomalies/wifi-efficiency/stats` - getWifiEfficiencyStats
- `GET /copilot/anomalies/wifi-efficiency/client-list` - getWifiEfficiencyClientList
- `GET /copilot/anomalies/wifi-capacity/stats` - getWifiCapacityStats
- ... and 21 more

### Client
- `PUT /clients/alias` - Set the aliases for multiple clients
- `POST /clients/disconnect` - Disconnect the clients
- `GET /clients/{id}` - Get client info
- `GET /clients/usage` - Get usage per client
- `GET /clients/summary` - Get client summary metrics
- `GET /clients/byMac/{clientMac}` - Get client info by mac
- `DELETE /clients/byMac/{clientMac}` - Disconnect the client
- `GET /clients/active` - List active clients
- `GET /clients/active/count` - Get active clients count

### Configuration - Certificate
- `GET /certificate-bundles/{id}` - Get Certificate Bundle by ID
- `PUT /certificate-bundles/{id}` - Update Certificate Bundle by ID
- `DELETE /certificate-bundles/{id}` - Delete Certificate Bundle by ID
- `POST /certificates/import` - Import Certificate
- `GET /certificate-bundles` - List Certificate Bundles
- `POST /certificate-bundles` - Create a Certificate Bundle
- `GET /certificates` - List certificates
- `DELETE /certificates/{id}` - Delete Certificate by ID

### Alert
- `GET /alert-subscriptions/webhooks/{id}` - Get alert webhook subscription
- `PUT /alert-subscriptions/webhooks/{id}` - Update alert webhook subscription
- `DELETE /alert-subscriptions/webhooks/{id}` - Delete alert webhook subscription
- `GET /alert-subscriptions/servicenow/{id}` - Get a specific ServiceNow subscription
- `PUT /alert-subscriptions/servicenow/{id}` - Update ServiceNow subscription
- `PATCH /alert-subscriptions/servicenow/{id}` - Partial or full update ServiceNow subscription
- `GET /alert-subscriptions/emails/{id}` - Get alert email subscription
- `PUT /alert-subscriptions/emails/{id}` - Update alert email subscription
- `DELETE /alert-subscriptions/emails/{id}` - Delete alert email subscription
- `GET /alert-policies/{policyId}/rules/{ruleId}` - Get details of an alert rule
- ... and 24 more

### Configuration - Basic
- `GET /vlan-profiles` - List VLAN profiles
- `POST /vlan-profiles` - Create VLAN profile
- `POST /vlan-profiles/:delete` - [LRO] Delete VLAN profiles
- `GET /vlan-profiles/{id}` - Get a VLAN profile
- `DELETE /vlan-profiles/{id}` - Delete a VLAN profile
- `PATCH /vlan-profiles/{id}` - Update a VLAN profile

### User
- `GET /users` - List all users
- `POST /users` - Create new user
- `POST /users/type-distribution` - Get user type distribution
- `POST /users/grid` - List Users
- `POST /users/grid-export` - Export the Users grid data
- `POST /users/filter-metadata` - List user grid filter metadata
- `GET /users/external` - List external access users
- `POST /users/external` - Grant external access
- `POST /users/data-usage` - Get user data usage
- `GET /users/{id}` - Get user info by ID
- ... and 7 more

### Use Folder Preferences
- `POST /user-folder-preferences/{folderId}` - Save user folder preferences values.
- `GET /user-folder-preferences` - Query user folder preferences

### Switch Inspector Panel
- `POST /switch-inspector/diagnostics` - Switch Inspector Panel Diagnostics

### rtts-endpoint
- `POST /rtts` - Create
- `POST /rtts/supported-devices` - List RTTS supported devices
- `DELETE /rtts/{id}` - DeleteRttsSession

### Packet Capture
- `GET /packetcaptures` - List packet capture sessions
- `POST /packetcaptures` - Create a new packet capture session
- `DELETE /packetcaptures` - Delete packet capture sessions
- `POST /packetcaptures/{id}/:upload` - Upload a packet capture session's capture files
- `POST /packetcaptures/{id}/:stop` - Stop a packet capture session
- `GET /packetcaptures/{id}` - Get a packet capture session
- `DELETE /packetcaptures/{id}` - Delete a packet capture session
- `GET /packetcaptures/files` - Get an AP packet capture file

### Operation
- `POST /operations/{operationId}/:cancel` - Cancel Long-Running Operation (LRO)
- `GET /operations/{operationId}` - Get Long-Running Operation (LRO) status and result
- `DELETE /operations/{operationId}` - Delete Long-Running Operation (LRO)

### NG Reports (Ondemand)
- `POST /ng-reports/timeseries` - Get QoE Diagnostics Time Series Data
- `POST /ng-reports/tabledata` - Get QoE Diagnostics Table Data
- `POST /ng-reports/metadata/user` - List of Users for filtering
- `POST /ng-reports/metadata/ssids` - List of SSIDs for filtering
- `POST /ng-reports/metadata/os` - List of OS for filtering
- `POST /ng-reports/metadata/device` - List of Devices for filtering
- `POST /ng-reports/metadata/client` - List of Clients for filtering
- `POST /ng-reports/metadata/bands` - List of Band for filtering
- `POST /ng-reports/metadata/application` - List of Applications for filtering
- `POST /ng-reports/downloads/reports` - Download the Reports
- ... and 3 more

### Log
- `POST /logs/audit/reports` - [LRO] Create audit logs report
- `GET /logs/sms` - List SMS logs
- `GET /logs/email` - List Email logs
- `GET /logs/credential` - List credential logs
- `GET /logs/auth` - List auth logs
- `GET /logs/audit` - List audit logs
- `GET /logs/audit/reports/{id}` - Download audit logs
- `GET /logs/audit/full-descriptions/{id}` - Get audit log full descriptions
- `GET /logs/accounting` - List accounting logs

### Authentication
- `POST /logout` - User logout (Revoke the current access token)
- `POST /login` - User login with username and password

### Dashboard Wireless Usage and Capacity
- `POST /dashboard/wireless/usage-capacity/grid` - Wireless usage & capacity grid
- `POST /dashboard/wireless/usage-capacity/export` - Export all Wireless Usage Capacity Data to CSV
- `POST /dashboard/wireless/usage-capacity/excessive-utilization` - Count of APs with excessive utilization
- `POST /dashboard/wireless/usage-capacity/excessive-retries` - Count of APs with excessive retries
- `POST /dashboard/wireless/usage-capacity/excessive-packet-loss` - Count of APs with excessive packet loss
- `GET /dashboard/wireless/usage-capacity/reports/{id}` - Download the  report

### Dashboard Wireless Device Health
- `POST /dashboard/wireless/device-health/summary` - Device health summary for wireless devices
- `POST /dashboard/wireless/device-health/issues/poe-usage-issues` - PoE usage issues for wireless devices
- `POST /dashboard/wireless/device-health/issues/memory-usage-issues` - Memory usage issues for wireless devices
- `POST /dashboard/wireless/device-health/issues/cpu-usage-issues` - CPU usage issues for wireless devices
- `POST /dashboard/wireless/device-health/grid` - Wireless device health grid
- `POST /dashboard/wireless/device-health/export` - Export all Wireless Device Health Data to CSV
- `GET /dashboard/wireless/device-health/reports/{id}` - Download the  report
- `GET /dashboard/wireless/device-health/reboot/summary` - Device reboot summary for wireless device

### Dashboard
- `GET /dashboard/wireless/dashboard/criteria` - Criteria for Wireless Diagnostics Dashboard
- `POST /dashboard/usage-capacity` - Usage & capacity statistics
- `POST /dashboard/sites-with-issues` - Sites with issues
- `POST /dashboard/export` - Export all dashboard data to CSV
- `POST /dashboard/devices` - Device health statistics
- `POST /dashboard/clients` - Client health statistics
- `POST /dashboard/assets` - Asset statistics
- `POST /dashboard/alerts` - Alert statistics
- `GET /dashboard/reports/{id}` - Download the  report
- `GET /dashboard/device-types` - Get all diagnostics device types

### Dashboard Wireless Client Health
- `POST /dashboard/wireless/client-health/roaming-issues` - Wireless clients count with roaming issues
- `POST /dashboard/wireless/client-health/issue/roaming` - Roaming issue for wireless client
- `POST /dashboard/wireless/client-health/issue/ipaddress` - Ip Address issue for Wireless client
- `POST /dashboard/wireless/client-health/issue/authentication` - Authentication issue for wireless client
- `POST /dashboard/wireless/client-health/issue/association` - Association issue for wireless client
- `POST /dashboard/wireless/client-health/grid` - Wireless client health grid
- `POST /dashboard/wireless/client-health/frequency-distribution` - Wireless clients count with frequency distribution
- `POST /dashboard/wireless/client-health/filter-metadata` - Filter Metadata for Wireless Client Health Grid
- `POST /dashboard/wireless/client-health/export` - Export all Client Health Data to CSV
- `POST /dashboard/wireless/client-health/connectivity-issues` - Wireless clients count with connectivity issues
- ... and 1 more

### Dashboard Wired Usage and Capacity
- `POST /dashboard/wired/usage-capacity/wired-throughput` - Wired devices throughput
- `POST /dashboard/wired/usage-capacity/wired-congestion` - Wired devices congestion
- `POST /dashboard/wired/usage-capacity/usage-utilization` - Wired devices total utilized bandwidth
- `POST /dashboard/wired/usage-capacity/grid` - Wired Usage and Capacity grid

### Dashboard Wired Device Health
- `POST /dashboard/wired/device-health/temperature-status` - Wired Device Health Temperature Status
- `POST /dashboard/wired/device-health/temperature-issues` - Wired Device Health Temperature Issues
- `POST /dashboard/wired/device-health/summary` - Wired Device Health Summary
- `POST /dashboard/wired/device-health/psu-status` - Wired Device Health PSU Status
- `POST /dashboard/wired/device-health/psu-issues` - Wired Device Health PSU Issues
- `POST /dashboard/wired/device-health/poe-usage-status` - Wired Device Health PoE Usage Status
- `POST /dashboard/wired/device-health/poe-usage-issues` - Wired Device Health PoE Usage Issues
- `POST /dashboard/wired/device-health/memory-usage-issues` - Wired Device Health Memory Usage Issues
- `POST /dashboard/wired/device-health/grid` - Wired Device Health Grid
- `POST /dashboard/wired/device-health/fan-status` - Wired Device Health Fan Status
- ... and 2 more

### Dashboard Wired Client Health
- `POST /dashboard/wired/client-health/traffic-anomalies` - Wired clients count with traffic anomalies
- `POST /dashboard/wired/client-health/port-errors` - Wired clients count with port errors
- `POST /dashboard/wired/client-health/port-congestion` - Wired clients count with port congestion issues
- `POST /dashboard/wired/client-health/ip-connectivity-issues` - Wired clients count with IP connectivity issues
- `POST /dashboard/wired/client-health/grid` - Wired client health grid

### D360
- `POST /d360/wireless/surrounding-aps` - Get a list of SurroundingAps
- `POST /d360/client/grid` - Get Client Grid
- `POST /d360/client/graph` - List a list of connected clients for Device 360 API
- `GET /d360/wireless/interfaces-stats` - Get Wifi Information
- `GET /d360/wireless/interfaces-graph` - Get Wireless Interface Graph
- `GET /d360/wired/queue-grid` - Wired QOS queue grid
- `GET /d360/ssid-metadata` - Get SSID Metadata
- `GET /d360/overview/devices-summary` - List the summary of device details
- `GET /d360/event/graph` - Get Client Grid Filter Metadata
- `GET /d360/device/stats` - Get Device Stats
- ... and 5 more

### Authorization
- `POST /auth/permissions/:check` - Check permissions
- `POST /auth/apitoken` - Generate new API token
- `POST /auth/apitoken/:validate` - Validate API token
- `GET /auth/permissions` - Get permissions for current login user
- `GET /auth/apitoken/info` - Get current API token details

### Application
- `POST /applications/usage/summary` - List the application usage summary
- `POST /applications/usage/summary/export` - Export the application usage summary
- `GET /applications` - List the applications
- `GET /applications/{id}/clients/top{n}` - List the TopN clients for a application
- `GET /applications/usage/summary/meta-data` - Application usage summary meta data
- `GET /applications/top{n}` - List the TopN applications
- `GET /applications/reports/{id}` - Download the Export CSV file

### airrm-endpoint
- `POST /airrm/ap/radioInfo/` - Get Devices Radio Information
- `GET /airrm/site/{airrmId}` - Get Site Device Regulatory Config and AFC Spectrum
- `GET /airrm/radio/apInfo/{radioMac}` - Get Device AP Information
- `GET /airrm/device/{serialNumber}` - Get Device Regulatory Config and AFC Spectrum

### Universal Compute Platform
- `GET /ucp/{id}/engines/installed` - Get UCP Engines by ID

### Thread
- `GET /thread/topology` - Get thread network topology
- `GET /thread/routers` - List thread routers
- `GET /thread/networks` - Get active thread networks

### Network Scorecard
- `GET /network-scorecard/wifiHealth/{locationId}` - Get the overall wifi health score
- `GET /network-scorecard/servicesHealth/{locationId}` - Get the overall services health score
- `GET /network-scorecard/networkHealth/{locationId}` - Get the overall network health score
- `GET /network-scorecard/deviceHealth/{locationId}` - Get the overall device health score
- `GET /network-scorecard/clientHealth/{locationId}` - Get the overall client health score

### Geo View
- `GET /geo-view` - Get GeoView Data

### Essentials - ExtremeLocation
- `GET /essentials/eloc/clients/{clientMac}/last-known-location` - Get the last known location of the client
- `GET /essentials/eloc/clients/location/path-in-interval-on-floor` - Get the path of the client in the specified interval
- `GET /essentials/eloc/clients/location/last-known-location-in-interval-on-floor` - Get the last known location of the client in the specified interval
- `GET /essentials/eloc/clients/location/density-map-data` - Get the client density map data
- `GET /essentials/eloc/clients/location/current-on-floor` - Get the current location of the client
- `GET /essentials/eloc/clients/location/current-of-all-on-floor` - Get all connected clients on a floor

### Misc
- `GET /countries` - Get country list
- `GET /countries/{countryCode}/:validate` - Validate country code
- `GET /countries/{countryAlpha2Code}/states` - Get state list by country code

### Copilot - Connectivity Experience
- `GET /copilot/connectivity/wireless/views` - getWirelessViews
- `GET /copilot/connectivity/wireless/time-to-connect` - getWirelessTimeToConnect
- `GET /copilot/connectivity/wireless/quality-index` - getWirelessQualityIndex
- `GET /copilot/connectivity/wireless/performance` - getWirelessPerformance
- `GET /copilot/connectivity/wireless/locations/time-to-connect` - getWirelessTimeToConnectByLocation
- `GET /copilot/connectivity/wireless/locations/quality-index` - getWirelessQualityIndexByLocation
- `GET /copilot/connectivity/wireless/locations/performance` - getWirelessPerformanceByLocation
- `GET /copilot/connectivity/wireless/locations/events` - getWirelessEventsByLocation
- `GET /copilot/connectivity/wireless/experience` - getWirelessConnectivityExperience
- `GET /copilot/connectivity/wireless/events` - getWirelessEvents
- ... and 8 more

### Client - Details
- `GET /client-details/topology/client-trail/{macAddress}` - getConnectionTrail
- `GET /client-details/overview/info/{clientId}` - Get Client Details Info
- `GET /client-details/overview/chart-data/{clientId}` - Get Client chart data
- `GET /client-details/client-trail/roaming-trail/grid/{clientId}` - Get roaming trail grid
- `GET /client-details/client-trail/roaming-trail/count/{clientId}` - Get roaming trail count
- `GET /client-details/client-trail/connectivity-experience/{clientId}` - Get connectivity experience grid

## Support

For questions or support, contact:
- **Name**: Extreme Networks Support
- **URL**: https://www.extremenetworks.com/support
- **Email**: support@extremenetworks.com

## License

Apache 2.0
