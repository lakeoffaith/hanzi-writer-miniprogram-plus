const utils = require('./utils/format');
const HanziWriterContext = require('./hanzi-writer-context');

// 导出工具方法
module.exports = {
  // 工具方法
  formatDate: utils.formatDate,
  formatMoney: utils.formatMoney,
  HanziWriterContext: (options) => new HanziWriterContext(options),
  // 组件路径
  CustomButton: './components/custom-button/index',
  HanziWriterView: './components/hanzi-writer-view/index'
};
