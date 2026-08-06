# MetaStore Event API

## Overview

## Overview
MetaStore is the event ingestion and query service for the ExtremeCloud platform.
It stores enriched network device events that flow through the MetaFlow telemetry
pipeline (devices → Kafka → MetaFlow enrichment → ClickHouse) and exposes them
via this REST API.

Events originate from **access points, switches, routers, and security devices**.
Each event carries device identity, location context (site/building/floor),
severity, and an `element_data` payload whose fields are event-type-specific.

## Intended Consumers
This API is designed for both human operators and **AI agents / MCP tool hosts**.
AI agents should follow this workflow:

1. **Discover** — Call `GET /catalog` to understand data range and available dimensions.
2. **Identify devices** — If you have a device name but not an ID, call `GET /catalog/devices`.
3. **Understand event types** — Call `GET /events/types` to list known event names,
   then `GET /catalog/event-schema/{event_name}` to understand `element_data` fields.
4. **Aggregate first** — Use `GET /events/summary` or `GET /events/trends` to answer
   counting/trending questions efficiently before paging through raw events.
5. **Query raw events** — Use `GET /events` only when you need individual event records.

## MCP Integration
`GET /mcp/manifest` returns a machine-readable tool manifest that MCP-compatible
hosts can use to auto-register this service as a tool provider.


## Base URL

```
https://cloudapi.extremecloudiq.com/metastore/v1
```

## Key Features

- **events**: Raw event query endpoints
- **analytics**: Aggregation and trend endpoints
- **catalog**: Discovery and schema endpoints
- **mcp**: Machine-readable MCP tool manifest for AI agent registration
- **health**: Service health and readiness probes

## Authentication

- **Method**: Bearer Token
- Ensure you include valid credentials in your requests

## Main Endpoints

### events
- `GET /events` - Query events
- `GET /events/types` - List available event types
- `GET /events/severities` - List available severity levels
- `GET /events/{id}` - Get event by ID

### analytics
- `GET /events/summary` - Summarize events by dimension
- `GET /events/trends` - Get event trends over time

### catalog
- `GET /catalog` - Get service catalog overview
- `GET /catalog/devices` - Discover devices with event activity
- `GET /catalog/event-schema/{event_name}` - Get element_data schema for an event type

### mcp
- `GET /mcp/manifest` - MCP tool manifest

### health
- `GET /health` - Health check
- `GET /ready` - Readiness check

## Support

For questions or support, contact:
- **Name**: MetaStore Team
- **Email**: metastore-support@extremenetworks.com

## License

Proprietary
