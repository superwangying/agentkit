#!/usr/bin/env node

/**
 * AgentKit CLI v3.0 — 463 Professional Agents at Your Fingertips
 *
 * Usage:
 *   agentkit find <query>        Find matching agents
 *   agentkit get <agent>         Get agent content
 *   agentkit list [category]     List agents by category
 *   agentkit search <keyword>    Search agent descriptions
 *   agentkit categories          Show the 15 categories
 *   agentkit stats               Show registry statistics
 *   agentkit verify              Validate format & index consistency
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));

const registry = JSON.parse(readFileSync(join(__dirname, '../registry.json'), 'utf-8'));
let divisions = { categories: {} };
try {
  divisions = JSON.parse(readFileSync(join(__dirname, '../divisions.json'), 'utf-8'));
} catch { /* divisions.json 可选 */ }

const colors = {
  reset: '\x1b[0m', bright: '\x1b[1m', dim: '\x1b[2m',
  cyan: '\x1b[36m', green: '\x1b[32m', yellow: '\x1b[33m',
  blue: '\x1b[34m', magenta: '\x1b[35m',
};
const color = (c, t) => `${colors[c]}${t}${colors.reset}`;

function formatAgent(name, info, maxNameLen = 24) {
  const padding = ' '.repeat(Math.max(0, maxNameLen - name.length));
  return `  ${color('cyan', name)}${padding} ${color('dim', `(${info.category})`)}`;
}

// Command: find
function find(query, showAll = false) {
  const keywords = query.toLowerCase().split(/\s+/).filter(Boolean);
  const scored = [];
  for (const [name, info] of Object.entries(registry.agents)) {
    const allTerms = [name, ...(info.tags || []), ...(info.triggers || []), info.category].map(t => t.toLowerCase());
    let score = 0;
    for (const kw of keywords) if (allTerms.some(t => t.includes(kw))) score++;
    if (score > 0) scored.push({ name, info, score });
  }
  scored.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));

  console.log(color('bright', '\n🔍 AgentKit Search Results'));
  console.log(color('dim', `   Query: "${query}"\n`));
  if (!scored.length) { console.log('  No agents found. Try broader terms.\n'); return; }

  console.log(color('green', `  Found ${scored.length} matching agents:\n`));
  const limit = showAll ? scored.length : 10;
  for (const { name, info } of scored.slice(0, limit)) {
    console.log(formatAgent(name, info));
    console.log(color('dim', `    Tags: ${(info.tags || []).slice(0, 6).join(', ')}`));
    console.log();
  }
  if (scored.length > limit) console.log(color('dim', `  ... and ${scored.length - limit} more (use --all)\n`));
  console.log();
}

// Command: get
function get(agentName) {
  const info = registry.agents[agentName];
  if (!info) {
    console.error(color('yellow', `  Agent "${agentName}" not found.`));
    console.log('  Run "agentkit list" to see all agents.');
    process.exitCode = 1;
    return;
  }
  try {
    process.stdout.write(readFileSync(join(__dirname, '..', info.file), 'utf-8'));
  } catch (err) {
    console.error(`  Error reading agent file: ${err.message}`);
    process.exitCode = 1;
  }
}

// Command: list
function list(category) {
  if (category && registry.categories[category]) {
    const agents = registry.categories[category].agents;
    const meta = divisions.categories?.[category];
    console.log(color('bright', `\n📁 ${category}${meta ? ' · ' + meta.label_zh : ''} (${agents.length} agents)\n`));
    for (const name of agents) {
      const info = registry.agents[name] || {};
      console.log(formatAgent(name, { category }));
      console.log(color('dim', `    ${(info.tags || []).slice(0, 5).join(', ')}`));
    }
    console.log();
    return;
  }
  if (category) {
    console.error(color('yellow', `  Unknown category "${category}".`));
    console.log('  Run "agentkit categories" to see all.\n');
    process.exitCode = 1;
    return;
  }
  console.log(color('bright', '\n📦 AgentKit Registry — v' + registry.version));
  console.log(color('dim', `   Total: ${registry.total} agents / ${Object.keys(registry.categories).length} categories\n`));
  for (const [cat, data] of Object.entries(registry.categories)) {
    const meta = divisions.categories?.[cat];
    const label = meta ? `${meta.icon} ${cat}` : cat;
    console.log(`  ${label.padEnd(30)} ${color('green', String(data.count).padStart(4))} agents`);
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
    if (JSON.stringify(info).toLowerCase().includes(kw)) results.push({ name, info });
  }
  console.log(color('bright', `\n🔎 Search Results for "${keyword}"\n`));
  if (!results.length) { console.log('  No agents found.\n'); return; }
  for (const { name, info } of results) console.log(formatAgent(name, info));
  console.log(color('dim', `\n  ${results.length} agents\n`));
}

// Command: categories
function categories() {
  console.log(color('bright', `\n📂 AgentKit v${registry.version} — ${Object.keys(registry.categories).length} Categories\n`));
  console.log(color('dim', '  #  分类                 label            数量  说明'));
  console.log(color('dim', '  ─────────────────────────────────────────────────────────────────'));
  let i = 0;
  for (const [cat, data] of Object.entries(registry.categories)) {
    i++;
    const meta = divisions.categories?.[cat] || {};
    const icon = meta.icon || ' ';
    const zh = (meta.label_zh || '').padEnd(10);
    console.log(`  ${String(i).padStart(2)}  ${icon} ${cat.padEnd(18)} ${zh} ${color('green', String(data.count).padStart(4))}`);
  }
  console.log();
}

// Command: stats
function stats() {
  const agents = Object.values(registry.agents);
  const cx = {};
  const catCount = {};
  for (const a of agents) {
    cx[a.complexity || 'unknown'] = (cx[a.complexity || 'unknown'] || 0) + 1;
    catCount[a.category] = (catCount[a.category] || 0) + 1;
  }
  const withCN = agents.filter(a => (a.triggers || []).some(t => /[\u4e00-\u9fff]/.test(t))).length;
  const avgTags = (agents.reduce((s, a) => s + (a.tags || []).length, 0) / agents.length).toFixed(1);
  const avgTrig = (agents.reduce((s, a) => s + (a.triggers || []).length, 0) / agents.length).toFixed(1);

  console.log(color('bright', `\n📊 AgentKit v${registry.version} Statistics\n`));
  console.log(`  代理总数            ${color('green', registry.total)}`);
  console.log(`  分类数              ${Object.keys(catCount).length}`);
  console.log(`  上游源              ${registry.upstream || 'N/A'}`);
  console.log(`  含中文触发词的代理   ${color('green', withCN)} / ${registry.total}`);
  console.log(`  平均 tags / triggers ${avgTags} / ${avgTrig}`);
  console.log(`\n  复杂度分布：`);
  for (const [k, v] of Object.entries(cx).sort((a, b) => b[1] - a[1])) {
    console.log(`    ${k.padEnd(14)} ${String(v).padStart(4)}`);
  }
  console.log();
}

// Command: verify
function verify() {
  const r = spawnSync(process.execPath, [join(__dirname, 'verify.js')], { stdio: 'inherit' });
  process.exitCode = r.status ?? 1;
}

const [cmd, arg1] = process.argv.slice(2);

switch (cmd) {
  case 'find':
    if (!arg1) console.log('Usage: agentkit find <query>');
    else find(arg1, process.argv.includes('--all'));
    break;
  case 'get':
    if (!arg1) console.log('Usage: agentkit get <agent-name>');
    else get(arg1);
    break;
  case 'list':
    list(arg1);
    break;
  case 'search':
    if (!arg1) console.log('Usage: agentkit search <keyword>');
    else search(arg1);
    break;
  case 'categories':
    categories();
    break;
  case 'stats':
    stats();
    break;
  case 'verify':
    verify();
    break;
  default:
    console.log(color('bright', `
╔════════════════════════════════════════════════════════════╗
║                     AgentKit CLI v${registry.version}                    ║
║        ${String(registry.total).padStart(3)} Professional Agents at Your Fingertips        ║
╚════════════════════════════════════════════════════════════╝

  Usage:
    ${color('cyan', 'agentkit find')} <query>       Find matching agents (--all)
    ${color('cyan', 'agentkit get')} <agent>        Get agent content
    ${color('cyan', 'agentkit list')} [category]    List agents by category
    ${color('cyan', 'agentkit search')} <keyword>   Search agent metadata
    ${color('cyan', 'agentkit categories')}         Show all 15 categories
    ${color('cyan', 'agentkit stats')}              Show registry statistics
    ${color('cyan', 'agentkit verify')}             Validate format & index

  Examples:
    $ agentkit find "python web api"
    $ agentkit get python-pro
    $ agentkit list game-development
    $ agentkit search "kubernetes"
`));
}
