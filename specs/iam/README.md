# Extreme Platform ONE REST API - IAM

## Overview

Extreme Platform ONE™ IAM (Identity and Access Management) API allows users to manage organization setting, user profile, identities, roles, external Identity Providers (IDPs), Multi-Factor Authentication (MFA), API Keys, etc.

## Base URL

```
https://cloudapi.extremecloudiq.com/iam/v1
```

## Key Features

- **My Account**: My Account Management
- **My Organization**: My Organization Management
- **Security**: Multi-Factor Authentication (MFA)
- **SAML**: External Identity Provider/Service Provider/Certificate
- **Application**: ExtremeCloud Application Management
- **Identity**: Identity management, such as users, user groups and roles
- **API Keys**: ExtremeCloud API Keys Management
- **Redirect**: ExtremeCloud Redirect Management
- **Misc**: Miscellaneous
- **My MSP**: My MSP Management

## Authentication

- **Method**: Bearer Token
- Ensure you include valid credentials in your requests

## Main Endpoints

### My Account
- `GET /myaccount` - Get my account information
- `PUT /myaccount` - Update my account information

### Identity
- `GET /users` - Get page of users
- `POST /users` - Create new user
- `GET /users/{id}` - Get user detail
- `PUT /users/{id}` - Update user detail
- `GET /roles` - List roles
- `POST /roles` - Create a new role
- `GET /user-groups` - List user groups
- `POST /user-groups` - Create new user group

### API Keys
- `POST /api-keys` - Create a new API key
- `GET /api-keys` - Fetch all API keys
- `GET /api-keys/{id}` - Get an API key
- `PATCH /api-keys/{id}` - Update an existing API key
- `DELETE /api-keys/{id}` - Delete an API key

### SAML
- `GET /saml2/asserting-parties` - List external IdPs
- `POST /saml2/asserting-parties` - Create new external IdP

### Application
- `GET /apps` - List applications

### Security
- `GET /security/mfa` - Get MFA authenticators

## Support

For questions or support, contact:
- **Name**: Extreme Networks Support
- **URL**: https://www.extremenetworks.com/support
- **Email**: support@extremenetworks.com

## License

Apache 2.0
