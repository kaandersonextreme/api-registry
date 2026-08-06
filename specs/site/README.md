# Extreme Platform ONE REST API - Site

## Overview

Extreme Platform ONE&trade; Site API allows users to access and manage Site/Location information, such as Sites, Site Groups, Buildings, Floors, etc.

## Base URL

```
https://cloudapi.extremecloudiq.com/site/v1
```

## Key Features

- **Site**: The Site Service API for managing the ExtremeCloud site related configurations in a geographical area
- **Site Group**: The Site Group API for managing the grouping of sites and/or site groups
- **Building**: The Site Service API for managing building(s) under a site
- **Floor**: The Site Service API for managing floor(s) in a building
- **Tree**: The Site Service API for querying site related configurations on the hierarchy tree
- **Location Management**: The Site Service API for different actions on SiteGroups, Sites, Buildings and Floors
- **Miscellaneous**: The API executes miscellaneous functions

## Authentication

- **Method**: Bearer Token
- Ensure you include valid credentials in your requests

## Main Endpoints

### Site
- `GET /sites` - List sites
- `POST /sites` - Create site
- `GET /sites/{id}` - Get site by ID
- `PUT /sites/{id}` - Update site by ID
- `DELETE /sites/{id}` - Delete site by ID

### Site Group
- `GET /site-groups` - List site groups
- `POST /site-groups` - Create site group
- `GET /site-groups/{id}` - Get site group by ID
- `PUT /site-groups/{id}` - Update site group by ID
- `DELETE /site-groups/{id}` - Delete site group by ID

### Building
- `GET /buildings` - List buildings
- `POST /buildings` - Create building
- `DELETE /buildings` - Delete multiple buildings
- `GET /buildings/{id}` - Get a building by ID
- `PUT /buildings/{id}` - Update building
- `DELETE /buildings/{id}` - Delete building by ID

### Floor
- `GET /floors` - List floors
- `POST /floors` - Create floor
- `DELETE /floors` - Delete multiple floors
- `GET /floors/{id}` - Get a floor by ID
- `PUT /floors/{id}` - Update floor
- `DELETE /floors/{id}` - Delete floor by ID
- `POST /floors/floorplan` - Upload floorplan
- `GET /floors/floorplan` - List floorplan images
- `DELETE /floors/floorplan` - Delete floorplan images by ID
- `POST /floors/floorplan/{id}/:crop` - Crop floorplan image

### Tree
- `GET /tree` - Get site tree
- `GET /tree/devices` - Get devices on the site hierarchy
- `GET /tree/maps` - Get maps on the site hierarchy
- `POST /tree/:import` - Import site tree
- `POST /tree/:export` - Export site tree

### Location Management
- `POST /location/{id}:clone` - Clone a location
- `POST /location/{id}:move` - Move a location
- `PUT /location/{id}:reorder` - Reorder floor

### Miscellaneous
- `GET /status` - Returns tasks status
- `GET /count` - Returns Count of each folderType

## Support

For questions or support, contact:
- **Name**: Extreme Networks Support
- **URL**: https://www.extremenetworks.com/support
- **Email**: support@extremenetworks.com

## License

Apache 2.0
