#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function searchApis(query) {
  const indexPath = path.join(__dirname, '../index.json');

  if (!fs.existsSync(indexPath)) {
    console.error('index.json not found. Run generate-index.js first.');
    process.exit(1);
  }

  const catalog = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
  const queryLower = query.toLowerCase();

  const matches = catalog.apis.filter(api =>
    api.title.toLowerCase().includes(queryLower) ||
    api.description.toLowerCase().includes(queryLower) ||
    api.tags.some(tag => tag.toLowerCase().includes(queryLower)) ||
    api.endpoints.some(ep =>
      ep.summary.toLowerCase().includes(queryLower) ||
      ep.operationId.toLowerCase().includes(queryLower)
    )
  );

  if (matches.length === 0) {
    console.log(`No APIs found matching "${query}"`);
    return;
  }

  console.log(`\n✅ Found ${matches.length} matching API(s):\n`);

  matches.forEach((api, idx) => {
    console.log(`${idx + 1}. 📌 ${api.title} (v${api.version})`);
    console.log(`   Description: ${api.description.substring(0, 80)}...`);
    console.log(`   Base URL: ${api.baseUrl}`);
    console.log(`   Tags: ${api.tags.join(', ')}`);

    const matchingEndpoints = api.endpoints.filter(ep =>
      ep.summary.toLowerCase().includes(queryLower) ||
      ep.operationId.toLowerCase().includes(queryLower)
    );

    if (matchingEndpoints.length > 0) {
      console.log(`   Matching Endpoints:`);
      matchingEndpoints.slice(0, 5).forEach(ep => {
        console.log(`     • ${ep.method} ${ep.path} - ${ep.summary}`);
      });
      if (matchingEndpoints.length > 5) {
        console.log(`     ... and ${matchingEndpoints.length - 5} more`);
      }
    } else {
      console.log(`   All Endpoints (${api.endpoints.length}):`);
      api.endpoints.slice(0, 5).forEach(ep => {
        console.log(`     • ${ep.method} ${ep.path} - ${ep.summary}`);
      });
      if (api.endpoints.length > 5) {
        console.log(`     ... and ${api.endpoints.length - 5} more`);
      }
    }

    console.log(`   Spec File: ${api.specFile}`);
    console.log('');
  });
}

// Get search query from command line
const query = process.argv[2];
if (!query) {
  console.log('Usage: node search.js "<query>"');
  console.log('Example: node search.js "audit"');
  process.exit(1);
}

searchApis(query);
