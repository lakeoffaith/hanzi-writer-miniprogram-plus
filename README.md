# miniprogram-demo-component

微信小程序npm包Demo，包含简单的页面组件和工具方法。

## 本地开发构建

在项目根目录下执行：

```bash
# 安装依赖
npm install

```

## 安装到微信小程序

在小程序项目根目录下执行：

```bash
npm install --save /Users/lizhengang/githubPrg/hanzi-writer-miniprogram-plus
```

```
npm install --save /Users/lizhengang/githubPrg/hanzi-writer
```

或者在 小程序项目的 `package.json` 中添加依赖：

```json
{
  "dependencies": {
    "hanzi-writer": "^2.3.0",
    "hanzi-writer-miniprogram-plus": "file:../../githubPrg/hanzi-writer-miniprogram-plus"
  }
}

```


然后执行 `npm install`。

## 使用前配置

在小程序开发者工具中：
1. 点击菜单 `工具` -> `构建 npm`
2. 构建完成后，在 `miniprogram_npm` 目录下会生成对应的包

## 使用方法

### 1. 使用工具方法

```javascript
// 在页面或组件中引入
const { formatDate, formatMoney } = require('miniprogram-demo-component');

// 使用 formatDate
const dateStr = formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss');
console.log(dateStr); // 2024-01-15 10:30:00

// 使用 formatMoney
const money = formatMoney(1234.5, 2);
console.log(money); // 1234.50
```

### 2. 使用自定义按钮组件



在页面的 JSON 配置文件中引入组件：

```json
{
  "usingComponents": {
    
    "CustomButton": "/miniprogram_npm/hanzi-writer-miniprogram-plus/components/custom-button",
    "HanziWriterView": "/miniprogram_npm/hanzi-writer-miniprogram-plus/components/hanzi-writer-view"
  }
}
```

在页面的js
```
// index.js

import {formatDate,HanziWriterContext} from 'hanzi-writer-miniprogram-plus';

Page({
  onLoad: function() {
    this.writerCtx = HanziWriterContext({
      id: 'hz-writer',
      page: this,
    });

    // You can call any normal HanziWriter method here
    // this.writerCtx.loopCharacterAnimation();
    var day=new Date();
    console.log(formatDate(day))
  },
  showChar:function(){
    // this.writerCtx.character
    console.log("点击按钮");
    this.writerCtx.setCharacter('拟')
    this.writerCtx.loopCharacterAnimation();
    console.log("点击按钮 end"); 
  }
})


```


在 WXML 中使用：

```xml
<HanziWriterView id="hz-writer" width="300" height="300" />
```
