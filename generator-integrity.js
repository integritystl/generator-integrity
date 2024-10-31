#!/usr/bin/env node

const yeoman = require('yeoman-environment')
const env = yeoman.createEnv()

// Register and run the generator programmatically
env.register(require.resolve('./generators/app'), 'integrity');
(async () => {
  try {
    await env.run('integrity')
    console.log('Generator completed successfully.')
  } catch (err) {
    console.error('Error running generator:', err)
  }
})()
