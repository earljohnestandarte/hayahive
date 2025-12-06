const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, '..', 'src', 'assets', 'hayahive.png');
const destDir = path.resolve(__dirname, '..', 'dist');
const dest = path.join(destDir, 'hayahive.png');

try {
  if (!fs.existsSync(src)) {
    console.warn('copy-assets: source file not found:', src);
    process.exit(0);
  }

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  fs.copyFileSync(src, dest);
  console.log('copy-assets: copied', src, '->', dest);
} catch (err) {
  console.error('copy-assets: error', err);
  process.exit(1);
}
