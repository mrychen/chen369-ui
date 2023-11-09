<template>
  <!-- glass ? 'is-glass' : '', //玻璃态 -->
  <button
    :class="[
      'q-button',
      `q-button--${type}`, // 动态为class绑定不同类名
      `q-button--${size}`,
      plain ? 'is-plain' : '', //朴素按钮
      mimicry ? 'is-mimicry' : '', // 拟态按钮
      round ? 'is-round' : '', //圆角按钮
      circle ? 'is-circle' : '', //圆形按钮
      disabled ? 'is-disabled' : '', //禁用按钮
    ]"
    :style="{
      backgroundColor: backgroundColor ? backgroundColor : '',
      borderColor: backgroundColor ? backgroundColor : '',
      backgroundImage: backgroundImage ? 'url(' + backgroundImage + ')' : '',
      color: color ? color : '',
    }"
    :disabled="disabled"
    @click="handleClick"
  >
    <i :icon="icon" v-if="icon" />
    <!-- tip:根据是否传入内容进行span渲染 -->
    <!-- 默认插槽 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
 
<script>
export default {
  name: "c-button",
  data() {
    return {};
  },
  components: {},
  props: {
    // 按钮类型-实现按钮状态可变，type
    type: {
      type: String,
      default: "default",
      // type值校验
      validator: function (value) {
        return (
          [
            "default",
            "success",
            "primary",
            "danger",
            "warning",
            "info",
          ].indexOf(value) !== -1
        );
      },
    },
    size: {
      type: String,
      default: "medium",
      // type值校验
      validator: function (value) {
        return ["default", "medium", "small", "mini"].indexOf(value) !== -1;
      },
    },
    // 朴素按钮
    plain: {
      type: Boolean,
    },
    // 拟态按钮
    mimicry: {
      type: Boolean,
      default: false,
    },
    // round圆角按钮
    round: {
      type: Boolean,
    },
    // 圆形按钮
    circle: {
      type: Boolean,
    },
    // disabled禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 实现图标icon
    // icon
    icon: {
      // tip：这里icon为数组类型，给它添加一个布尔作为默认值，让fai不渲染
      type: [Array, Boolean],
      default: false,
    },
    // // 玻璃态
    // glass: {
    //   type: Boolean,
    //   default: false,
    // },
    backgroundColor: {
      type: String,
      default: "",
    },
    backgroundImage: {
      type: String,
      default: "",
    },
    color: {
      type: String,
    },
  },
  methods: {
    //定义一个点击事件，这个点击事件的作用是调用父组件中的点击事件，并且回调
    handleClick() {
      // 触发父传子函数
      this.$emit("click");
    },
  },
};
</script>
 
<style lang="scss">
// @import "./c-button.scss";
* {
  box-sizing: border-box;
}
// 变量
$normal-color: #fff;
$normal-active-color: #409eff;
$primary-color: #409eff;
$primary-active-color: #66b1ff;
$info-color: #909399;
$info-active-color: #a6a9ad;
$success-color: #67c23a;
$success-active-color: #85ce61;
$warning-color: #e6a23c;
$warning-active-color: #ebb563;
$danger-color: #f56c6c;
$danger-active-color: #f78989;

// 默认样式
.q-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  background-size: cover;
  background-repeat: no-repeat;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
.q-button--primary {
  color: #fff;
  background-color: $primary-color;
  border-color: $primary-color;
  //   box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
  &:hover,
  &:focus {
    background: $normal-active-color;
    background-color: $normal-active-color;
    color: #fff;
  }
}
.q-button--success {
  color: #fff;
  background-color: $success-color;
  border-color: $success-color;
  &:hover,
  &:focus {
    background: $success-active-color;
    background-color: $success-active-color;
    color: #fff;
  }
}

.q-button--info {
  color: #fff;
  background-color: $info-color;
  border-color: $info-color;
  &:hover,
  &:focus {
    background: $info-active-color;
    background-color: $info-active-color;
    color: #fff;
  }
}
.q-button--warning {
  color: #fff;
  background-color: $warning-color;
  border-color: $warning-color;
  &:hover,
  &:focus {
    background: $warning-active-color;
    background-color: $warning-active-color;
    color: #fff;
  }
}
.q-button--danger {
  color: #fff;
  background-color: $danger-color;
  border-color: $danger-color;
  &:hover,
  &:focus {
    background: $danger-active-color;
    background-color: $danger-active-color;
    color: #fff;
  }
}

// 朴素按钮
.q-button.is-plain {
  box-shadow: unset;
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.q-button--primary.is-plain {
  box-shadow: unset;
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.q-button--success.is-plain {
  box-shadow: unset;
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.q-button--info.is-plain {
  box-shadow: unset;
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.q-button--warning.is-plain {
  box-shadow: unset;
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.q-button--danger.is-plain {
  box-shadow: unset;
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

// mimicry
.q-button.is-mimicry {
  box-shadow: inset 3px 6px 10px #ccc, inset -3px -7px 10px #fff;
}

.q-button--primary.is-mimicry {
  box-shadow: inset 3px 6px 10px #337ecc, inset -3px -7px 10px #4dbeff;
}
.q-button--info.is-mimicry {
  box-shadow: inset 3px 6px 10px #73767a, inset -3px -7px 10px #adb0b8;
}
.q-button--success.is-mimicry {
  box-shadow: inset 3px 6px 10px #6aa54e, inset -3px -7px 10px #a0f774;
}
.q-button--warning.is-mimicry {
  box-shadow: inset 3px 6px 10px #bc914f, inset -3px -7px 10px #ffd977;
}
.q-button--danger.is-mimicry {
  box-shadow: inset 3px 6px 10px #c45656, inset -3px -7px 10px #ff8282;
}

// 让图标和文字之间空开
.q-button [class*="fa-"] + span {
  margin-left: 5px;
}
// round圆角按钮
.q-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// 圆形按钮
.q-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// 禁用
.q-button.q-button.is-disabled .mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(148, 146, 146, 0.39);
  left: 0;
  top: 0;
  box-shadow: 2px 2px 3px rgba(216, 213, 213, 0.3);
  border-radius: 4px;
  z-index: 100;
}
.q-button.is-round .mask {
  border-radius: 20px;
}

.q-button.is-circle .mask {
  border-radius: 50%;
}
.q-button.is-disabled {
  cursor: no-drop;
}

// 字体图标
[class*="q-icon"] {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.q-icon-bluetoothoff:before {
  content: "\e697";
}

// 让图标和文字之间空开
.q-button [class*="fa-"] + span {
  margin-left: 5px;
}

// 玻璃态按钮
.q-button.is-glass {
  background-color: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
}

// 按钮的大小
.q-button--large {
  padding: 16px 24px;
}
.q-button--default {
  padding: 12px 20px;
}
.q-button--medium {
  padding: 10px 20px;
}
.q-button--small {
  padding: 9px 15px;
}
.q-button--mini {
  padding: 7px 15px;
}
</style>