#!/usr/bin/env node
/**
 * AgentKit v3.0 — 格式与索引一致性校验
 *
 * 用法：node src/verify.js
 * 退出码：0 = 全部通过；1 = 存在不合规项
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const FIXED_SECTIONS = ['Purpose', 'Capabilities', 'Behavioral Traits', 'Response Approach'];
const REQUIRED_FM = ['name', 'category', 'tags', 'triggers', 'complexity', 'version'];
const COMPLEXITY = new Set(['entry', 'intermediate', 'expert']);
const CN = /[\u4e00-\u9fff]/;

function walk(dir, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (f.endsWith('.md')) out.push(p);
  }
  return out;
}

function parseFrontMatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([a-z_]+):\s*(.*)$/i);
    if (kv) fm[kv[1]] = kv[2].trim();
  }
  return fm;
}

const agentsDir = join(ROOT, 'agents');
const files = walk(agentsDir);
const errors = [];
const seenNames = new Map();
const catCount = {};

for (const file of files) {
  const rel = relative(ROOT, file).replace(/\\/g, '/');
  const cat = rel.split('/')[1];
  catCount[cat] = (catCount[cat] || 0) + 1;
  const text = readFileSync(file, 'utf-8');
  const fm = parseFrontMatter(text);

  if (!fm) { errors.push(`${rel}: 缺少 front matter`); continue; }
  for (const k of REQUIRED_FM) {
    if (!fm[k]) errors.push(`${rel}: 缺字段 ${k}`);
  }
  if (fm.complexity && !COMPLEXITY.has(fm.complexity)) {
    errors.push(`${rel}: complexity 非法值 "${fm.complexity}"`);
  }
  if (fm.triggers && !CN.test(fm.triggers)) {
    errors.push(`${rel}: triggers 不含中文触发词`);
  }
  if (fm.category && fm.category !== cat) {
    errors.push(`${rel}: category "${fm.category}" 与所在目录 "${cat}" 不一致`);
  }
  const name = fm.name;
  if (name) {
    if (seenNames.has(name)) errors.push(`${rel}: name "${name}" 与 ${seenNames.get(name)} 重复`);
    else seenNames.set(name, rel);
  }

  const h1 = text.match(/^# .+$/gm) || [];
  if (h1.length !== 1) errors.push(`${rel}: 一级标题数量 = ${h1.length}（应为 1）`);

  const h2 = (text.match(/^## (.+)$/gm) || []).map(s => s.replace(/^## /, '').trim());
  if (h2.length !== FIXED_SECTIONS.length || h2.some((s, i) => s !== FIXED_SECTIONS[i])) {
    errors.push(`${rel}: 章节异常 [${h2.join(' | ')}]`);
  }
}

// 索引一致性
let registry = null;
try {
  registry = JSON.parse(readFileSync(join(ROOT, 'registry.json'), 'utf-8'));
} catch (e) {
  errors.push(`registry.json 解析失败: ${e.message}`);
}

if (registry) {
  const regFiles = new Set(Object.values(registry.agents).map(a => a.file));
  const diskFiles = new Set(files.map(f => relative(ROOT, f).replace(/\\/g, '/')));
  for (const f of diskFiles) if (!regFiles.has(f)) errors.push(`registry.json 缺少: ${f}`);
  for (const f of regFiles) if (!diskFiles.has(f)) errors.push(`registry.json 多出: ${f}`);
  if (registry.total !== files.length) {
    errors.push(`registry.total = ${registry.total}，磁盘代理数 = ${files.length}`);
  }
  const regCats = registry.categories || {};
  for (const [c, n] of Object.entries(catCount)) {
    if (!regCats[c]) errors.push(`registry.categories 缺少分类: ${c}`);
    else if (regCats[c].count !== n) {
      errors.push(`registry.categories.${c}.count = ${regCats[c].count}，实际 ${n}`);
    }
  }
}

console.log(`\n🔍 AgentKit v${registry ? registry.version : '?'} 校验\n`);
console.log(`   代理文件：${files.length}`);
console.log(`   分类分布：${Object.entries(catCount).map(([k, v]) => `${k}=${v}`).join('  ')}`);
console.log(`   唯一 name：${seenNames.size}\n`);

if (errors.length === 0) {
  console.log('   ✅ 全部通过：格式合规、索引与磁盘 1:1 一致\n');
  process.exit(0);
} else {
  console.log(`   ❌ 发现 ${errors.length} 项问题：\n`);
  for (const e of errors.slice(0, 50)) console.log(`   • ${e}`);
  if (errors.length > 50) console.log(`   … 其余 ${errors.length - 50} 项省略`);
  console.log();
  process.exit(1);
}
