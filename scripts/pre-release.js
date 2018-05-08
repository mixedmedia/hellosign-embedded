#!/usr/bin/env node

const fs = require('fs');
const { version } = require('../package');

// Create the "release" directory.
try {
  fs.mkdirSync('release');
} catch (err) {
  // The release directory may already exist.
  // Fail silently.
}

// Copy dist files over to the release directory. These will
// be uploaded to S3 after tests pass and will be available
// on the HelloSign CDN.
fs.copyFileSync('dist/embedded.js', `release/hellosign-embedded.${version}.js`);
fs.copyFileSync('dist/embedded.min.js', `release/hellosign-embedded.${version}.min.js`);
fs.copyFileSync('dist/embedded.js', 'release/hellosign-embedded.LATEST.js');
fs.copyFileSync('dist/embedded.min.js', 'release/hellosign-embedded.LATEST.min.js');
fs.copyFileSync('dist/embedded.min.js', 'release/embedded.js');
