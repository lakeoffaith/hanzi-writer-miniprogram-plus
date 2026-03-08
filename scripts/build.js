/**
 * 构建脚本：将 src 目录复制到 miniprogram_dist 目录
 */
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const distDir = path.join(__dirname, '..', 'miniprogram_dist');

function copyDir(src, dest) {
  // 确保目标目录存在
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 执行构建
console.log('Building miniprogram package...');

if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true });
}

copyDir(srcDir, distDir);

console.log('Build completed! Output: miniprogram_dist/');
