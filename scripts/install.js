/**
 * 安装后脚本：自动执行构建
 */
const { execSync } = require('child_process');
const path = require('path');

console.log('Running post-install build...');

try {
  execSync('npm run build', {
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit'
  });
  console.log('Post-install build completed!');
} catch (error) {
  console.error('Post-install build failed:', error.message);
  process.exit(1);
}
