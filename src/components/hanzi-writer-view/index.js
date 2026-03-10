Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 按钮文字
    text: {
      type: String,
      value: '按钮'
    },
    // 按钮类型：primary, default, warning
    type: {
      type: String,
      value: 'default'
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      value: false
    },
    // 按钮大小：small, medium, large
    size: {
      type: String,
      value: 'medium'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    pressed: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap(e) {
      if (this.properties.disabled) {
        return;
      }
      this.triggerEvent('tap', e.detail);
    },

    handleTouchStart() {
      if (!this.properties.disabled) {
        this.setData({ pressed: true });
      }
    },

    handleTouchEnd() {
      this.setData({ pressed: false });
    }
  }
});
