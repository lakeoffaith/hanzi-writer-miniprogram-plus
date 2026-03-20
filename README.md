# miniprogram-demo-component

微信小程序npm包Demo，包含简单的页面组件和工具方法。

## 本地开发构建

在本项目根目录下执行：

```bash
# 安装依赖
npm install

```

## 安装到微信小程序




在 小程序项目的 `package.json` 中添加依赖：

```json
{
  "dependencies": {
    "hanzi-writer": "^2.3.0",
    "hanzi-writer-miniprogram-plus": "^1.0.0"
  }
}

```

在小程序项目根目录下执行：

```bash
npm install 
```


## 使用前配置

在小程序开发者工具中：
1. 点击菜单 `工具` -> `构建 npm`
2. 构建完成后，在 `miniprogram_npm` 目录下会生成对应的包

## 使用方法


在页面的 JSON 配置文件中引入组件：

```json
{
  "usingComponents": {
    
    "HanziWriterView": "/miniprogram_npm/hanzi-writer-miniprogram-plus/components/hanzi-writer-view"
  }
}
```

在页面的js
```
// index.js

import {HanziWriterContext} from 'hanzi-writer-miniprogram-plus';

Page({
  onLoad: function() {
    this.writerCtx = HanziWriterContext({
      id: 'hz-writer',
      page: this,
    });
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
