# miniprogram-demo-component

微信小程序npm包Demo，包含简单的页面组件和工具方法。

## 本地开发构建

在项目根目录下执行：

```bash
# 安装依赖
npm install

# 构建项目（将 src 复制到 miniprogram_dist）
npm run build
```

## 安装到微信小程序

在小程序项目根目录下执行：

```bash
npm install --save /Users/lizhengang/githubPrg/hanzi-writer-miniprogram-plus
```

或者在 小程序项目的 `package.json` 中添加依赖：

```json
{
  "dependencies": {
    "miniprogram-demo-component": "file:/Users/lizhengang/ComateProjects/comate-zulu-demo"
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
    "custom-button": "miniprogram-demo-component/components/custom-button/index"
  }
}
```

在 WXML 中使用：

```xml
<!-- 默认按钮 -->
<custom-button text="默认按钮" bind:tap="onButtonTap" />

<!-- 主要按钮 -->
<custom-button text="主要按钮" type="primary" bind:tap="onButtonTap" />

<!-- 警告按钮 -->
<custom-button text="警告按钮" type="warning" bind:tap="onButtonTap" />

<!-- 不同尺寸 -->
<custom-button text="小按钮" type="primary" size="small" />
<custom-button text="中按钮" type="primary" size="medium" />
<custom-button text="大按钮" type="primary" size="large" />

<!-- 禁用状态 -->
<custom-button text="禁用按钮" disabled="{{true}}" />
```

在 JS 中处理点击事件：

```javascript
Page({
  onButtonTap(e) {
    console.log('按钮被点击了', e);
  }
});
```

## 组件属性

### custom-button 组件

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| text | String | '按钮' | 按钮显示的文字 |
| type | String | 'default' | 按钮类型，可选值：default, primary, warning |
| size | String | 'medium' | 按钮大小，可选值：small, medium, large |
| disabled | Boolean | false | 是否禁用 |

### 事件

| 事件名 | 说明 |
|--------|------|
| tap | 点击按钮时触发 |

## 工具方法

### formatDate(date, format)

格式化日期时间。

**参数：**
- `date`: Date对象、时间戳或日期字符串
- `format`: 格式化模板，默认 'YYYY-MM-DD HH:mm:ss'

**示例：**
```javascript
formatDate(new Date()); // 2024-01-15 10:30:00
formatDate(Date.now(), 'YYYY/MM/DD'); // 2024/01/15
formatDate('2024-01-15', 'MM月DD日'); // 01月15日
```

### formatMoney(amount, decimals)

格式化金额。

**参数：**
- `amount`: 金额数值
- `decimals`: 小数位数，默认 2

**示例：**
```javascript
formatMoney(1234.5); // 1234.50
formatMoney(1234.567, 3); // 1234.567
```

## 目录结构

```
miniprogram-demo-component/
├── package.json              # npm包配置
├── README.md                 # 使用说明文档
├── scripts/                  # 构建脚本
│   ├── build.js              # 构建脚本
│   └── install.js            # 安装后自动构建脚本
├── src/                      # 源码目录
│   ├── index.js              # 入口文件
│   ├── utils/
│   │   └── format.js         # 工具方法
│   └── components/
│       └── custom-button/    # 自定义按钮组件
│           ├── index.js
│           ├── index.json
│           ├── index.wxml
│           └── index.wxss
└── miniprogram_dist/         # 构建输出目录（自动生成）
```

## License

MIT
