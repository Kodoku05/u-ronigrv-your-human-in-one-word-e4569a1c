const { mkdirSync, writeFileSync } = require('node:fs');
const { join } = require('node:path');

// The human decides whether the work gets through the door.
const output = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(output, { recursive: true });
writeFileSync(join(output, 'entry.txt'), 'Bouncer', 'utf8');
