#!/usr/bin/env node

/**
 * AgentKit CLI - 435 Professional Agents at Your Fingertips
 * 
 * Usage:
 *   npx agentkit find <query>     Find matching agents
 *   npx agentkit get <agent>      Get agent content
 *   npx agentkit list [category]  List agents by category
 *   npx agentkit search <keyword> Search agent descriptions
 */

import { readFileSync } from 'fs';
import { resolve, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Load registry
const registry = JSON.parse(
  readFileSync(join(__dirname, '../registry.json'), 'utf-8')
);

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
};

function color(c, text) {
  return `${colors[c]}${text}${colors.reset}`;
}

function formatAgent(name, info, maxNameLen = 20) {
  const padding = ' '.repeat(Math.max(0, maxNameLen - name.length));
  return `  ${color('cyan', name)}${padding} ${color('dim', `(${info.category})`)}`;
}

// Command: find
function find(query) {
  const keywords = query.toLowerCase().split(' ');
  const scored = [];
  
  for (const [name, info] of Object.entries(registry.agents)) {
    const allTerms = [
      name,
      ...(info.tags || []),
      ...(info.triggers || []),
      info.category
    ].map(t => t.toLowerCase());
    
    let score = 0;
    for (const kw of keywords) {
      if (allTerms.some(t => t.includes(kw))) score++;
    }
    if (score > 0) {
      scored.push({ name, info, score });
    }
  }
  
  scored.sort((a, b) => b.score - a.score);
  
  console.log(color('bright', '\n🔍 AgentKit Search Results'));
  console.log(color('dim', `   Query: "${query}"\n`));
  
  if (scored.length === 0) {
    console.log('  No agents found. Try broader terms.\n');
    return;
  }
  
  console.log(color('green', `  Found ${scored.length} matching agents:\n`));
  for (const { name, info } of scored.slice(0, 10)) {
    console.log(formatAgent(name, info));
    console.log(color('dim', `    Tags: ${(info.tags || []).slice(0, 5).join(', ')}`));
    console.log();
  }
  
  if (scored.length > 10) {
    console.log(color('dim', `  ... and ${scored.length - 10} more`));
  }
  console.log();
}

// Command: get
function get(agentName) {
  const info = registry.agents[agentName];
  if (!info) {
    console.error(color('yellow', `  Agent "${agentName}" not found.`));
    console.log('  Run "agentkit list" to see all agents.');
    return;
  }
  
  const filePath = join(__dirname, '..', info.file);
  try {
    const content = readFileSync(filePath, 'utf-8');
    console.log(content);
  } catch (err) {
    console.error(`  Error reading agent file: ${err.message}`);
  }
}

// Command: list
function list(category) {
  if (category && registry.categories[category]) {
    const agents = registry.categories[category].agents;
    console.log(color('bright', `\n📁 ${category} (${agents.length} agents)\n`));
    for (const name of agents) {
      const info = registry.agents[name] || {};
      console.log(formatAgent(name, { category }));
      console.log(color('dim', `    ${info.tags ? info.tags.slice(0, 4).join(', ') : ''}`));
    }
    console.log();
    return;
  }
  
  // List all categories
  console.log(color('bright', '\n📦 AgentKit Registry'));
  console.log(color('dim', `   Total: ${registry.total} agents\n`));
  
  for (const [cat, data] of Object.entries(registry.categories)) {
    console.log(color('blue', `  ${cat.padEnd(15)} ${color('green', String(data.count).padStart(3))} agents`));
  }
  console.log();
  console.log(color('dim', '  Run "agentkit list <category>" to see agents in a category.'));
  console.log();
}

// Command: search
function search(keyword) {
  const kw = keyword.toLowerCase();
  const results = [];
  
  for (const [name, info] of Object.entries(registry.agents)) {
    const text = JSON.stringify(info).toLowerCase();
    if (text.includes(kw)) {
      results.push({ name, info });
    }
  }
  
  console.log(color('bright', `\n🔎 Search Results for "${keyword}"\n`));
  
  if (results.length === 0) {
    console.log('  No agents found.\n');
    return;
  }
  
  for (const { name, info } of results) {
    console.log(formatAgent(name, info));
  }
  console.log();
}

// Main CLI
const [cmd, arg1, ...rest] = process.argv.slice(2);

switch (cmd) {
  case 'find':
    if (!arg1) {
      console.log('Usage: agentkit find <query>');
    } else {
      find(arg1);
    }
    break;
    
  case 'get':
    if (!arg1) {
      console.log('Usage: agentkit get <agent-name>');
    } else {
      get(arg1);
    }
    break;
    
  case 'list':
    list(arg1);
    break;
    
  case 'search':
    if (!arg1) {
      console.log('Usage: agentkit search <keyword>');
    } else {
      search(arg1);
    }
    break;
    
  default:
    console.log(color('bright', `
╔═══════════════════════════════════════════════════════╗
║                    AgentKit CLI                       ║
║        435 Professional Agents at Your Fingertips    ║
╚═══════════════════════════════════════════════════════╝

  Usage:
    ${color('cyan', 'agentkit find')} <query>     Find matching agents
    ${color('cyan', 'agentkit get')} <agent>      Get agent content
    ${color('cyan', 'agentkit list')} [category]  List agents by category  
    ${color('cyan', 'agentkit search')} <keyword> Search agent descriptions

  Examples:
    $ agentkit find "python web api"
    $ agentkit get python-pro
    $ agentkit list languages
    $ agentkit search "kubernetes"
`));
}