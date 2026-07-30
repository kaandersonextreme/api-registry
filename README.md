# Extreme Networks API Registry

A centralized repository for Extreme Networks API specifications and documentation. This allows projects to discover and reuse APIs instead of recreating documentation from scratch.

## 📁 Structure

```
api-registry/
├── specs/                    # API specification files
│   ├── audit-log/           # Audit Log API
│   │   └── openapi.yaml     # OpenAPI 3.0.3 specification
│   └── ...
├── tools/                   # Utility scripts
│   ├── search.js           # Search tool for finding APIs
│   ├── generate-index.js   # Auto-generate index.json
│   └── generate-readmes.js # Auto-generate README.md files from OpenAPI specs
├── index.json              # Searchable catalog of all APIs
└── README.md               # This file
```

## 🔍 Searching for APIs

### Option 1: Using the Search Tool

```bash
# Search for APIs
node tools/search.js "audit"

# Search by tag
node tools/search.js "compliance"

# Search by endpoint
node tools/search.js "user-activities"
```

Output:
```
✅ Found 1 matching API(s):

1. 📌 Extreme Platform ONE REST API - Audit Log (v25.11.0)
   Description: Comprehensive tracking of user activities...
   Base URL: https://cloudapi.extremecloudiq.com/auditlog/v1
   Tags: audit, compliance, user-activity, logging
   Matching Endpoints:
     • GET /user-activities - Search user activity audit logs
     • GET /user-activities/export - Export user activity audit logs
   Spec File: specs/audit-log/openapi.yaml
```

### Option 2: Programmatic Search

```javascript
const catalog = require('./index.json');

// Find APIs matching a criteria
const matches = catalog.apis.filter(api => 
  api.tags.includes('audit')
);

console.log(matches[0].baseUrl); // Get base URL
console.log(matches[0].endpoints); // Get available endpoints
```

### Option 3: GitHub Search

Use GitHub's built-in search to find APIs:
- Search spec files: `filename:openapi.yaml`
- Search descriptions: `audit` (full-text search)

## 📝 Adding New APIs

### 1. Create API Directory

```bash
mkdir specs/your-api-name
```

### 2. Add OpenAPI Spec

Place your `openapi.yaml` (OpenAPI 3.0.3) in the directory:

```
specs/your-api-name/
└── openapi.yaml
```

### 3. Generate README Documentation (Optional)

```bash
node tools/generate-readmes.js
```

This will automatically create `README.md` files for any APIs without documentation by:
- Extracting key information from OpenAPI specs (title, description, endpoints, etc.)
- Generating consistent, formatted documentation

### 4. Regenerate Index

```bash
node tools/generate-index.js
```

This will automatically:
- Parse all `openapi.yaml` files
- Extract metadata (title, version, endpoints, tags)
- Update `index.json`

## 🔗 Using APIs in Your Project

### Step 1: Add Registry Reference to CLAUDE.md

In your project's `CLAUDE.md`:

```yaml
apiRegistry:
  repo: kaandersonextreme/api-registry
  branch: main
  searchPath: index.json
```

### Step 2: Search via Claude Code

Ask me to search for an API:
> "Do we have an API for user activity auditing?"

I will:
1. Read your `CLAUDE.md`
2. Clone the registry (if needed)
3. Search `index.json` for matches
4. Return spec locations and usage info

### Step 3: Reference the Spec

Once you've found the API you need, reference it in your code:

```javascript
// Generate client from spec
// npx openapi-generator-cli generate -i https://raw.githubusercontent.com/kaandersonextreme/api-registry/main/specs/audit-log/openapi.yaml -g typescript-fetch -o ./generated

// Or use the spec directly with Swagger UI, Redoc, etc.
```

## 📚 Available APIs

The registry currently includes 13 comprehensive API specifications:

- **Alert Management API** - Real-time network alert monitoring and management
- **Asset Management API** - Device and asset lifecycle management
- **Audit Log API** - User activity tracking and compliance logging
- **Client API** - Client application management and configuration
- **Common Infrastructure API** - Network topology and device management
- **Device Lifecycle Management API** - Device provisioning and management
- **IAM API** - Identity and access management
- **Notification API** - Event notifications and alerting
- **Reporting API** - Business intelligence and reporting
- **Site Management API** - Multi-site deployment management
- **Subscriptions & Licensing API** - License and subscription management
- **Tag Management API** - Resource tagging and organization
- **Webhooks API** - Real-time event notifications via webhooks

Each API has comprehensive documentation including base URL, key features, endpoints, and support information available in their respective `README.md` files.

## 🚀 Quick Commands

```bash
# Search for an API
node tools/search.js "keyword"

# Generate README documentation for all APIs
node tools/generate-readmes.js

# Regenerate index after adding new APIs
node tools/generate-index.js

# View raw index
cat index.json | jq '.apis[] | {title, id, tags}'

# List all available APIs
node tools/search.js "."
```

## 📖 Format Notes

- All specs must be in **OpenAPI 3.0.3** format
- File must be named `openapi.yaml` (not `.json`)
- Include proper `info`, `servers`, `paths`, and `components` sections
- Add descriptive tags for searchability
- Specs are auto-indexed on push

## 🔄 Integration with Claude Code

When you start a new project and ask Claude about available APIs:

```
"Do we have an API that handles user activity tracking?"
```

Claude will automatically:
1. Search this registry
2. Return matching APIs with their specs
3. Show available endpoints
4. Provide links to full documentation

## 📞 Support

For issues or new APIs to add, create an issue or PR in this repository.
