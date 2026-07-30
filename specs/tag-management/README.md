# Tag Management API

## Overview

The Tag Management API provides a comprehensive REST API for managing tags, entities, associations, and policies in the Extreme Networks platform. This API enables powerful and flexible systems for organizing and categorizing resources.

## Base URL

```
https://cloudapi.extremecloudiq.com/tagging/v1
```

## Key Features

- **Tags**: Lightweight labels that can be applied to entities for organization and filtering
- **Entities**: The actual resources (devices, services, etc.) that can be tagged
- **Associations**: Bidirectional relationships between tags and entities
- **Policies**: Rule-based automation for tag management
- **Attributes**: Key-value metadata attached to tags for enhanced functionality

## Capabilities

- Bulk operations for creating, updating, and deleting tags and entities
- Flexible search and filtering capabilities with pagination support
- Policy-driven automation for tag lifecycle management
- Rich attribute system for tag metadata
- Owner-based multi-tenancy support
- Comprehensive telemetry and monitoring

## MCP Features

- **Idempotent Operations**: Safe for automated retry scenarios and batch processing
- **Atomic Transactions**: All tags succeed or fail together, ensuring data consistency
- **Rich Error Context**: Detailed error messages for automated error handling and recovery
- **Bulk Optimization**: Efficient processing of large tag sets (recommended: 100-500 per request)

## MCP Use Cases

- Infrastructure auto-discovery: Automatically tag discovered network devices, servers, and services
- Compliance automation: Bulk creation of regulatory, security, and policy compliance tags
- Resource classification: Systematic categorization during cloud migration or datacenter consolidation
- CI/CD integration: Automated tagging during deployment pipelines and environment provisioning
- CMDB synchronization: Import tags from external configuration management databases
- Lifecycle management: Automated tag creation during resource provisioning and decommissioning

## Authentication

All endpoints require proper authentication headers. Ensure you include valid Bearer token credentials in your requests.

## Performance

- **Recommended Batch Size**: 500
- **Maximum Batch Size**: 1000
- **Pagination**: Supported
- **Deep Fetch**: Supported
- **Indexing**: Optimized

## Rate Limiting

API requests are subject to rate limiting. Monitor the response headers for rate limit information.

## Main Endpoints

### Tags
- `POST /tags` - Create one or more tags
- `POST /tags/delete` - Delete multiple tags
- `POST /tags/fetch` - Search and fetch tags
- `PUT /tags/tagId/{tagId}` - Update tag by ID
- `PUT /tags/tagName/{tagName}` - Update tag by name

### Entities
- `POST /entities` - Create entities
- `POST /entities/fetch` - Search and fetch entities

### Associations
- `POST /tags/tagId/entities/associate` - Associate entities to tag
- `POST /tags/tagId/entities/disassociate` - Disassociate entities from tag

### Attributes
- `POST /tags/attributes` - Create tag attributes

### Policies
- `POST /policies` - Create policies

## Support

For questions or support, contact:
- **Name**: Extreme Networks API Support
- **URL**: https://www.extremenetworks.com/support
- **Email**: api-support@extremenetworks.com

## License

Apache License 2.0
