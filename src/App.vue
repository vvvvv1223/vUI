<template>
  <div id="app">
    <!-- <div class="row">
      <vv-button @click="xx">默认按钮</vv-button>
      <vv-button type="primary">主要按钮</vv-button>
      <vv-button type="success">登陆</vv-button>
      <vv-button type="info">登陆</vv-button>
      <vv-button type="warning">登陆</vv-button>
      <vv-button type="danger">登陆</vv-button>
    </div>
    <div class="row">
      <vv-button>按钮</vv-button>
      <vv-button type="primary" plain>登陆</vv-button>
      <vv-button type="success" plain>登陆</vv-button>
      <vv-button type="info" plain>登陆</vv-button>
      <vv-button type="warning" plain>登陆</vv-button>
      <vv-button type="danger" plain>登陆</vv-button>
    </div>
    <div class="row">
      <vv-button>按钮</vv-button>
      <vv-button type="primary" round>登陆</vv-button>
      <vv-button type="success" round>登陆</vv-button>
      <vv-button type="info" round>登陆</vv-button>
      <vv-button type="warning" round>登陆</vv-button>
      <vv-button type="danger" round>登陆</vv-button>
    </div>
    <div class="row">
      <vv-button>按钮</vv-button>
      <vv-button type="primary" circle>登陆</vv-button>
      <vv-button type="success" circle>登陆</vv-button>
      <vv-button type="info" circle>登陆</vv-button>
      <vv-button type="warning" circle>登陆</vv-button>
      <vv-button type="danger" circle>登陆z</vv-button>
    </div>
    <div class="row">
      <vv-button disabled>按钮</vv-button>
      <vv-button type="primary" disabled>登陆</vv-button>
      <vv-button type="success" disabled>登陆</vv-button>
      <vv-button type="info" disabled>登陆</vv-button>
      <vv-button type="warning" disabled>登陆</vv-button>
      <vv-button type="danger" disabled>登陆</vv-button>
    </div> -->
    <vv-button type="primary" @click="visible=true">对话框</vv-button>
    <vv-dialog width="80%"
      top="10px"
      :visible="visible">
      <ul>
        <li>1</li>
        <li>1</li>
      </ul>
      <template v-slot:footer>
        <vv-button type="primary" @click="visible=false">确定</vv-button>
        <vv-button @click="visible=false">取消</vv-button>
      </template>
    </vv-dialog>

    <!-- <vv-dialog>
      <template v-slot:title>
        <h3>我是标题</h3>
      </template>
    </vv-dialog> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {

  },
}
</script>

<style lang="scss">
// .row {
//   width: 500px;
//   display: flex;
//   justify-content: space-around;
//   margin-top: 10px;
// }
</style>
