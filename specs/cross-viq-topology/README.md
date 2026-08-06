# Cross-VIQ Topology API

⚠️ **Status: BETA** - This API is in beta and depends on MSP device management capabilities that are coming soon. Functionality and endpoint structure may change.

## Overview

The Cross-VIQ Topology API enables unified network topology visualization and management across multiple ExtremeCloud IQ Virtual IQ (VIQ) instances using Tenant Tagging. This API aggregates fabric and physical topology information from all VIQs associated with a specific tenant tag, providing a single unified view of a multi-VIQ network environment.

## Base URL

```
https://cloudapi.extremecloudiq.com
```

(Note: This API is typically accessed through the Extreme Networks Correlation Engine or similar orchestration platform)

## Key Features

- **Unified Multi-VIQ Topology**: Aggregate topology from multiple VIQs tagged with the same tenant tag
- **Tenant Tag Filtering**: Group VIQs logically using MSP Tenant Tagging
- **Fabric Topology Support**: Retrieve fabric attach infrastructure across VIQs
- **VIQ Context Preservation**: Each device and link includes VIQ ID metadata for cross-VIQ identification
- **Scalable Multi-tenant**: Support for hierarchical organization at MSP level

## Authentication

- **Method**: Bearer Token
- Requires valid ExtremeCloud IQ API token with Tag Management and Common Infrastructure permissions

## Prerequisites and Maturity

### Current Status: Beta
This API is currently in **beta** and has the following prerequisites:

- **Tenant Tagging**: MSP Tenant Tagging feature must be available in your ExtremeCloud IQ deployment
- **Tag Management API**: Functional Tag Management API for entity association
- **Multiple VIQs**: At least one tenant tag must be associated with multiple VIQs
- **Future Dependency**: MSP device management and monitoring capabilities (coming soon) will enhance multi-VIQ device federation

### Expected Changes
As MSP features complete, this API will support:
- Direct device federation across VIQs (without requiring topology aggregation)
- Unified device management operations
- Cross-VIQ policy enforcement
- Enhanced multi-tenant isolation controls

Users should not rely on this API for production deployments until it exits beta and full MSP device management support is available.

## Main Endpoints

### Cross-VIQ Topology

- `GET /api/topology/cross-viq` - Get unified topology for all VIQs tagged with a specific tenant tag
  - **Query Parameters**:
    - `tag` (required): The tenant tag name that groups multiple VIQs
  - **Response**: Aggregated topology with nodes, edges, and VIQ context metadata
  - **Supported Topology Types**: Fabric, Physical, Service Layer (configurable)

## Query Parameters

### Tenant Tag
- **Parameter**: `tag`
- **Type**: String
- **Required**: Yes
- **Description**: The tenant tag name used to group VIQs. Multiple VIQs with the same tenant tag are aggregated into a single topology view.
- **Example**: `network-group-prod`, `customer-ABC-sites`

## Response Format

The API returns a unified topology structure with metadata about the VIQ aggregation:

```json
{
  "tag": "network-group-prod",
  "topology": {
    "nodes": [
      {
        "id": "device-123",
        "name": "switch-1",
        "type": "switch",
        "viqId": "viq-abc123",
        "viqTag": "network-group-prod",
        "metadata": { ... }
      }
    ],
    "edges": [
      {
        "source": "device-123",
        "target": "device-456",
        "type": "fabric",
        "viqId": "viq-abc123",
        "viqTag": "network-group-prod"
      }
    ],
    "metadata": {
      "viqCount": 3,
      "deviceCount": 25,
      "totalNodes": 45,
      "totalEdges": 38,
      "entityCount": 3,
      "topologyType": "fabric"
    }
  },
  "entities": [
    {
      "name": "VIQ-1",
      "id": "viq-abc123",
      "type": "viq",
      "metadata": { "owner": "team-a" }
    }
  ]
}
```

## Architecture

### Multi-VIQ Grouping Strategy

The API uses **Tenant Tagging** to group multiple VIQs as a single logical network:

1. **Tenant Tags**: MSP customers or organizational units create tags like `network-group-prod`
2. **VIQ Association**: Multiple VIQs are tagged with the same tenant tag
3. **Topology Aggregation**: Query returns unified topology for all tagged VIQs
4. **Context Preservation**: Each device includes VIQ ID for cross-VIQ identification

### Integration Points

- **Tag Management API**: Retrieves tagged entities
- **Common Infrastructure API**: Fetches fabric/physical topology per VIQ
- **MSP API**: Manages multi-tenant VIQ associations
- **Site API**: Organizes locations hierarchically across VIQs

## Use Cases

### Multi-Site Network Visibility
Manage geographically distributed sites as a single network fabric:
```
Tenant Tag: "company-WAN"
├── VIQ-1 (North America)
├── VIQ-2 (Europe)
└── VIQ-3 (Asia-Pacific)
```

### Customer Network Isolation
Provide unified topology for customers while maintaining tenant isolation:
```
Tenant Tag: "customer-XYZ"
├── VIQ-1 (Customer HQ)
├── VIQ-2 (Customer Branch)
└── VIQ-3 (Managed Services Instance)
```

### Disaster Recovery Coordination
Correlate alerts and coordinate remediation across backup VIQs:
```
Tenant Tag: "dr-cluster"
├── VIQ-1 (Primary)
└── VIQ-2 (Standby)
```

## Performance Considerations

- Large topologies with 1000+ devices may require pagination
- Recommend caching topology queries (30-60 second TTL minimum)
- Bulk operations across tagged VIQs should be staged to prevent API throttling
- Consider filtering topology type (fabric vs. physical) to reduce payload

## Rate Limiting

API requests follow standard Extreme Networks rate limiting:
- **Recommended Rate Limit**: 10 requests per minute per tenant tag
- **Burst Allowance**: 3 requests
- **Caching Recommended**: Yes (topology data changes infrequently)

## Error Handling

Common error scenarios:

| Status | Error | Cause |
|--------|-------|-------|
| 400 | Missing tag parameter | `tag` query parameter not provided |
| 404 | Tag not found | Tenant tag does not exist or has no associated VIQs |
| 401 | Unauthorized | Invalid or expired API token |
| 500 | Aggregation failed | Error retrieving topology from one or more VIQs |

## Typical Workflow

```
1. Create/identify tenant tag
   POST /tags (Tag Management API)
   
2. Associate VIQs with tenant tag
   POST /tags/{tagId}/entities/associate (Tag Management API)
   
3. Query unified topology
   GET /api/topology/cross-viq?tag=network-group-prod
   
4. Use topology for:
   - Network visualization
   - Alert correlation
   - Remediation orchestration
   - Capacity planning
```

## Dependencies

- **Tag Management API**: For tenant tag operations
- **Common Infrastructure API**: For topology retrieval
- **MSP API** (when available): For device management across VIQs

## Support

For questions or support, contact:
- **Name**: Extreme Networks Support
- **URL**: https://www.extremenetworks.com/support
- **Email**: support@extremenetworks.com

## License

Apache License 2.0
