#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');

function generateIndex() {
  const apis = [];
  const specsDir = path.join(__dirname, '../specs');

  // Find all openapi.yaml files
  const specFiles = glob.sync('**/openapi.yaml', { cwd: specsDir });

  if (specFiles.length === 0) {
    console.log('No OpenAPI specs found in specs/ directory');
    return;
  }

  console.log(`Found ${specFiles.length} API spec(s)...`);

  specFiles.forEach(file => {
    try {
      const fullPath = path.join(specsDir, file);
      const spec = yaml.load(fs.readFileSync(fullPath, 'utf8'));
      const id = file.split('/')[0]; // e.g., 'audit-log'

      // Extract endpoints
      const endpoints = [];
      if (spec.paths) {
        Object.entries(spec.paths).forEach(([pathName, methods]) => {
          Object.entries(methods).forEach(([method, operation]) => {
            if (operation && operation.operationId) {
              endpoints.push({
                path: pathName,
                method: method.toUpperCase(),
                operationId: operation.operationId,
                summary: operation.summary || 'No summary',
                tags: operation.tags || []
              });
            }
          });
        });
      }

      apis.push({
        id,
        title: spec.info.title,
        description: spec.info.description || '',
        version: spec.info.version,
        baseUrl: spec.servers?.[0]?.url || '',
        tags: spec.tags?.map(t => t.name) || [],
        endpoints,
        specFile: `specs/${file}`
      });

      console.log(`✓ ${spec.info.title} (${endpoints.length} endpoints)`);
    } catch (err) {
      console.error(`✗ Error parsing ${file}: ${err.message}`);
    }
  });

  // Write index.json
  const indexPath = path.join(__dirname, '../index.json');
  fs.writeFileSync(indexPath, JSON.stringify({ apis }, null, 2));
  console.log(`\n✅ Generated index.json with ${apis.length} API(s)`);
}

generateIndex();
