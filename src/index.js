const utils = require('./utils/format');

// 导出工具方法
module.exports = {
  // 工具方法
  formatDate: utils.formatDate,
  formatMoney: utils.formatMoney,
  
  // 组件路径
  CustomButton: './components/custom-button/index',
  HanziWriterView: './components/hanzi-writer-view/index'
};
