#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');

function generateReadmeContent(spec, specFileName) {
  const { info, servers, tags = [], paths = {} } = spec;

  // Extract main endpoints
  const endpoints = [];
  const endpointsByTag = {};

  Object.entries(paths).forEach(([pathName, methods]) => {
    Object.entries(methods).forEach(([method, operation]) => {
      if (operation && operation.operationId) {
        const operationTags = operation.tags || ['Other'];
        operationTags.forEach(tag => {
          if (!endpointsByTag[tag]) {
            endpointsByTag[tag] = [];
          }
          endpointsByTag[tag].push({
            path: pathName,
            method: method.toUpperCase(),
            operationId: operation.operationId,
            summary: operation.summary || ''
          });
        });
      }
    });
  });

  const baseUrl = servers?.[0]?.url || 'https://cloudapi.extremecloudiq.com';
  const description = info.description || '';

  // Determine MCP features from the spec
  const mcpFeatures = [];
  if (spec['x-mcp-server-optimized']) {
    mcpFeatures.push('MCP Server Optimized');
  }
  if (spec['x-mcp-capabilities']) {
    const caps = Object.keys(spec['x-mcp-capabilities']);
    if (caps.length > 0) {
      mcpFeatures.push(...caps.map(c => c.replace(/-/g, ' ')));
    }
  }

  let markdown = `# ${info.title}\n\n`;

  // Overview section
  markdown += `## Overview\n\n`;
  markdown += `${description}\n\n`;

  // Base URL
  markdown += `## Base URL\n\n`;
  markdown += `\`\`\`\n${baseUrl}\n\`\`\`\n\n`;

  // Key Features section - extract from tags
  if (tags.length > 0) {
    markdown += `## Key Features\n\n`;
    tags.forEach(tag => {
      const tagDesc = tag.description || tag.name;
      // Extract first sentence or use the whole description
      const firstSentence = tagDesc.split('.')[0];
      markdown += `- **${tag.name}**: ${firstSentence}\n`;
    });
    markdown += `\n`;
  }

  // MCP Features section
  if (mcpFeatures.length > 0) {
    markdown += `## MCP Features\n\n`;
    mcpFeatures.forEach(feature => {
      markdown += `- ${feature}\n`;
    });
    markdown += `\n`;
  }

  // Authentication
  markdown += `## Authentication\n\n`;
  if (spec.securitySchemes) {
    const schemes = Object.keys(spec.securitySchemes);
    if (schemes.length > 0) {
      const scheme = spec.securitySchemes[schemes[0]];
      if (scheme.type === 'http') {
        markdown += `- **Method**: ${scheme.scheme?.toUpperCase() || 'HTTP Authentication'}\n`;
      } else if (scheme.type === 'apiKey') {
        markdown += `- **Method**: API Key (${scheme.in})\n`;
      } else {
        markdown += `- **Method**: ${scheme.type}\n`;
      }
    }
  } else {
    markdown += `- **Method**: Bearer Token\n`;
  }
  markdown += `- Ensure you include valid credentials in your requests\n\n`;

  // Main Endpoints
  markdown += `## Main Endpoints\n\n`;
  Object.entries(endpointsByTag).forEach(([tag, endpoints]) => {
    markdown += `### ${tag}\n`;
    endpoints.slice(0, 10).forEach(ep => {
      markdown += `- \`${ep.method} ${ep.path}\` - ${ep.summary || ep.operationId}\n`;
    });
    if (endpoints.length > 10) {
      markdown += `- ... and ${endpoints.length - 10} more\n`;
    }
    markdown += `\n`;
  });

  // Support section
  markdown += `## Support\n\n`;
  markdown += `For questions or support, contact:\n`;
  if (info.contact) {
    if (info.contact.name) markdown += `- **Name**: ${info.contact.name}\n`;
    if (info.contact.url) markdown += `- **URL**: ${info.contact.url}\n`;
    if (info.contact.email) markdown += `- **Email**: ${info.contact.email}\n`;
  } else {
    markdown += `- **Name**: Extreme Networks API Support\n`;
    markdown += `- **URL**: https://www.extremenetworks.com/support\n`;
    markdown += `- **Email**: api-support@extremenetworks.com\n`;
  }
  markdown += `\n`;

  // License
  markdown += `## License\n\n`;
  if (info.license) {
    markdown += `${info.license.name}\n`;
  } else {
    markdown += `Apache License 2.0\n`;
  }

  return markdown;
}

function generateReadmes() {
  const specsDir = path.join(__dirname, '../specs');

  // Find all API directories with openapi.yaml but no README.md
  const specDirs = fs.readdirSync(specsDir).filter(dir => {
    const dirPath = path.join(specsDir, dir);
    return fs.statSync(dirPath).isDirectory();
  });

  const apisNeedingReadme = specDirs.filter(dir => {
    const specPath = path.join(specsDir, dir, 'openapi.yaml');
    const readmePath = path.join(specsDir, dir, 'README.md');
    return fs.existsSync(specPath) && !fs.existsSync(readmePath);
  });

  console.log(`Found ${apisNeedingReadme.length} API(s) needing README files...`);

  apisNeedingReadme.forEach(dir => {
    try {
      const specPath = path.join(specsDir, dir, 'openapi.yaml');
      const spec = yaml.load(fs.readFileSync(specPath, 'utf8'));
      const readmePath = path.join(specsDir, dir, 'README.md');

      const content = generateReadmeContent(spec, dir);
      fs.writeFileSync(readmePath, content);

      console.log(`✓ Created README for ${spec.info.title}`);
    } catch (err) {
      console.error(`✗ Error processing ${dir}: ${err.message}`);
    }
  });

  console.log(`\n✅ Completed README generation`);
}

generateReadmes();
