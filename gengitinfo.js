#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

const [, , ...argv] = process.argv;

const output = execSync('git log -1 --oneline', { encoding: 'utf-8' });
console.log('Output was:\n', output.split(' ')[0]);
fs.writeFileSync(
  './src/main/gitInfo.json',
  JSON.stringify({ r: output.split(' ')[0] }),
  {
    flag: 'w',
  }
);
