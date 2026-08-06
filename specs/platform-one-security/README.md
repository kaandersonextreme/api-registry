# Platform ONE Security OpenAPI Specs

## Overview

The OpenAPI specification provides a detailed description of the Platform ONE Security
services API. This API enables seamless integration and interaction with
the platform for managing user groups, device groups, devices,
and access control capabilities.

🔑 Key Features:

**User Group Operations**

  Create, update, retrieve, and manage user groups with detailed access
  control and user association capabilities.

**Device Group Operations**

  Manage device groups with features like creating, updating, deleting,
  and retrieving device group details, including device associations
  and metadata.

**Device Operations**

  Search, filter, and manage devices with advanced query
  capabilities, including action logs and pagination.

**Access Control**

  Manage device access permissions with operations to allow or revoke
  access for specific devices.

**End System Data Management**

  Manage and retrieve End system data.

**Disconnect Client Sessions**

  Disconnect one or more client sessions.

🏢 Enterprise-Ready:

Designed for enterprise-grade environments, this API ensures secure and
scalable operations with support for pagination, filtering, and detailed
response schemas. It also includes vendor extensions for enhanced
documentation and integration capabilities.

## Base URL

```
https://cloudapi.extremecloudiq.com/uztna
```

## Key Features

- **Users**: Users provides a unified layer for managing who can access the platform
- **User Groups**: User groups provide a unified way to manage access by organizing users into logical collections
- **Devices**: Devices represent the endpoints that users access the platform with
- **Device Groups**: Device groups organize related devices into logical collections for policy enforcement
- **Clients**: API for fetching client data with key attributes such as authentication status, compliance state,
and agent status
- **Trigger Client Session Deauthorization**: Triggers de-authorization for the specified client MAC addresses and optionally, 
their associated RADIUS session identifiers

## Authentication

- **Method**: Bearer Token
- Ensure you include valid credentials in your requests

## Main Endpoints

### User Groups
- `GET /admin/resource/api/v2/access-groups` - Get the list of user groups
- `POST /admin/resource/api/v2/access-groups` - Create a user group
- `GET /admin/resource/api/v2/access-groups/{id}` - Get the user group by ID
- `PATCH /admin/resource/api/v2/access-groups/{id}` - Add or remove users from user group
- `GET /admin/resource/api/v2/access-groups/associations/{access_group_id}/details` - Get users associated with user group

### Device Groups
- `GET /admin/resource/api/v2/resources/device-groups` - Get a list of device groups
- `POST /admin/resource/api/v2/resources/device-groups` - Create a device group
- `PATCH /admin/resource/api/v2/resources/device-groups/{device_group_id}` - Update a device group
- `DELETE /admin/resource/api/v2/resources/device-groups/{device_group_id}` - Delete a device group
- `GET /admin/resource/api/v2/resources/device-groups/associations/details` - Get device group associations list

### Devices
- `PATCH /admin/resource/api/v2/resources/devices/access` - Revoke or allow device access
- `GET /admin/resource/api/v2/resources/devices/search-devices` - Retrieve devices list

### Users
- `GET /admin/auth/api/v2/accounts/workspace-users` - List of all End Users

### Clients
- `GET /cnac/endsystem-service/api/endsystems/v2/clients` - Get Client list

### Trigger Client Session Deauthorization
- `POST /cnac/network-policy-engine/api/v1/npe/external/deauth` - Disconnect one or more client sessions

## Support

For questions or support, contact:
- **Name**: Extreme Networks Support
- **URL**: https://www.extremenetworks.com/support
- **Email**: support@extremenetworks.com

## License

Apache 2.0
