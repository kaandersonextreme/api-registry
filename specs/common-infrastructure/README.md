# Common Infrastructure API

## Overview

The Extreme Networks Common Infrastructure API provides comprehensive access to the Common Infrastructure services for network management. This API enables programmatic access to topology management, device management, service management, and network visualization capabilities.

## Base URL

```
https://cloudapi.extremecloudiq.com/nvo/v1
```

## Key Features

- **Topology Management**: Retrieve and manage network topologies (physical, fabric, service layers)
- **Device Management**: Access device information, interfaces, neighbors, and fabric details
- **Service Management**: Manage L2/L3 VSN, VLAN, and VRF services
- **User Preferences**: Store and retrieve user-specific preferences
- **Real-time Updates**: WebSocket notifications for topology and device changes
- **Service Probing**: VLAN service probe utilities for network validation

## API Design

This API follows RESTful principles and supports JSON payloads. Most operations use POST methods with detailed criteria objects to provide flexible filtering and querying capabilities suitable for complex network topologies.

## MCP Features

- **AI-Friendly Design**: Comprehensive endpoint descriptions with use cases and examples
- **Structured Error Responses**: Better error handling for automated systems
- **Detailed Parameters**: Parameter descriptions for automated API consumption
- **Optimized Schemas**: Response schemas optimized for AI interpretation
- **Automation Support**: Asynchronous operations with proper status tracking
- **Bulk Operations**: Supported where applicable
- **Consistent Formats**: Consistent data formats across endpoints

## Rate Limiting

- **Recommended Rate Limit**: 60 requests per minute
- **Burst Allowance**: 10 requests
- **Best Practice**: Consider caching for topology and device data

## Authentication

- **Method**: Bearer Token
- Authentication and authorization should be handled at the infrastructure level
- API Key authentication recommended for MCP servers

## Main Endpoints

### Topology Management
- `POST /retrieve-topology` - Retrieve network topology data (primary endpoint)
  - Supports multiple topology types: physical, fabric, service, accessLayer, physicalAndFabric
  - Supports different view types: map, abstract, list
  - Includes hierarchical node structures and interconnection data

### Device Management
- `GET /device/physical` - Get physical device information
- `GET /device/fabric` - Get fabric information
- `GET /device/ports` - Get device port information
- `GET /device/lldp-cdp-neighbors` - Get neighbor information

### Service Management
- `POST /retrieve-services` - Retrieve network services
- `GET /services/retrieve-vlans` - Get VLAN services
- `GET /services/retrieve-vrfs` - Get VRF services

### Service Probe
- `POST /utilities/service-probe-vlan/start` - Start VLAN service probe
- `GET /utilities/service-probe-vlan/probe-data` - Get probe data

### User Preferences
- User-specific preference storage and retrieval

### Custom Logging
- Dynamic logging configuration management

### Node and Link Management
- Hide/Unhide operations for topology visualization

## Topology Types

- **Physical**: Physical network topology
- **Fabric**: Fabric topology for infrastructure
- **Service**: Service-layer topology
- **Access Layer**: Access layer topology
- **Physical and Fabric**: Combined physical and fabric topology

## View Types

- **Map**: Map-based visualization
- **Abstract**: Abstract diagram representation
- **List**: List view

## Performance Considerations

- Large topologies may require pagination or filtering
- Consider using specific topology types to reduce response size
- Custom positions are cached and updated incrementally
- **Caching Recommended**: Yes
- **Automation Priority**: High

## Error Handling

The API provides standardized error responses including:
- Error code and message
- Timestamp of error
- Request path
- Correlation ID for tracing
- Additional details where applicable

## Support

For questions or support, contact:
- **Name**: Extreme Networks API Support
- **URL**: https://www.extremenetworks.com/support/
- **Email**: api-support@extremenetworks.com

## License

Extreme Networks Software License
