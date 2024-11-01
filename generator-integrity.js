#!/usr/bin/env node

import { createEnv } from 'yeoman-environment';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const env = createEnv();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Register and run the generator programmatically with an absolute path
env.register(resolve(__dirname, './generators/app'), 'integrity');

(async () => {
  try {
    await env.run('integrity');
    console.log('Generator completed successfully.');
  } catch (err) {
    console.error('Error running generator:', err);
  }
})();
