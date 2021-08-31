<template>
<!-- 对话框的遮罩 阻止冒泡 或者.self .self表示只有点击自己才能触发 -->
  <div class="vv-dialog_wrapper" v-show="visible" @click.self="handleClose">
    <div class="vv-dialog" :style="{width: width,marginTop: top}">
      <div class="vv-dialog_header">
        <!-- 具名插槽 -->
        <slot name="title">
          <span class="vv-dialog__titile">{{title}}</span>
        </slot>
        <button class="vv-dialog_headerbtn">
        </button>
      </div>
      <div class="vv-dialog_body">
        <!-- 内容可能是除span以外的其他内容，比如列表等，所以在这里使用插槽，并且不规定插槽内具体的标签 -->
        <!-- 并且在这里使用匿名插槽，使用匿名插槽的好处就是不用指定名称，这样在不使用<template v-slot>指定插槽内容的时候，也可以自定义内容 -->
          <slot></slot>
      </div>
      <!-- 目前如果不传 footer仍然占位。改成条件渲染 有内容才显示footer -->
      <div class="vv-dialog_footer" v-if="$slots.footer">
        <slot name="footer"></slot>
        <!-- <vv-button>取消</vv-button>
        <vv-button type="primary">确定</vv-button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VvDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      console.log('click');
      // 需要修改props  父组件传的数据
      this.$parent.visible = false; // 或者子传父 $emit 数据验证？
    }
  }
}
</script>

<style lang="scss" scoped>
.vv-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .vv-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .vv-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .vv-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .one-icon-close {
          color: 909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .one-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>