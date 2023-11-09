<template>
  <div id="app">
    <h3>状态按钮</h3>
    <ChenButton type="default">default按钮</ChenButton>
    <ChenButton type="success">success按钮</ChenButton>
    <ChenButton type="primary">primary按钮</ChenButton>
    <ChenButton type="danger">danger按钮</ChenButton>
    <ChenButton type="warning">warning按钮</ChenButton>
    <ChenButton type="info">info按钮</ChenButton>

    <h3>朴素按钮</h3>
    <ChenButton type="default" plain>default按钮</ChenButton>
    <ChenButton type="success" plain>success按钮</ChenButton>
    <ChenButton type="primary" plain>primary按钮</ChenButton>
    <ChenButton type="danger" plain>danger按钮</ChenButton>
    <ChenButton type="warning" plain>warning按钮</ChenButton>
    <ChenButton type="info" plain>info按钮</ChenButton>
    <h3>拟态按钮</h3>
    <ChenButton type="default" mimicry round>default按钮</ChenButton>
    <ChenButton type="success" mimicry>success按钮</ChenButton>
    <ChenButton type="primary" mimicry>primary按钮</ChenButton>
    <ChenButton type="danger" mimicry>danger按钮</ChenButton>
    <ChenButton type="warning" mimicry>warning按钮</ChenButton>
    <ChenButton type="info" mimicry>info按钮</ChenButton>
    <h3>圆角按钮</h3>
    <ChenButton type="default" round>default按钮</ChenButton>
    <ChenButton type="success" round>success按钮</ChenButton>
    <ChenButton type="primary" round>primary按钮</ChenButton>
    <ChenButton type="danger" round>danger按钮</ChenButton>
    <ChenButton type="warning" round>warning按钮</ChenButton>
    <ChenButton type="info" round>info按钮</ChenButton>

    <h3>圆形按钮</h3>
    <ChenButton type="default" circle>1</ChenButton>
    <ChenButton type="success" circle>1</ChenButton>
    <ChenButton type="primary" circle>1</ChenButton>
    <ChenButton type="danger" circle>1</ChenButton>
    <ChenButton type="warning" circle>1</ChenButton>
    <ChenButton type="info" circle>1</ChenButton>

    <h3>禁用按钮</h3>
    <ChenButton type="default" disabled>default按钮</ChenButton>
    <ChenButton type="success" disabled>success按钮</ChenButton>
    <ChenButton type="primary" disabled>primary按钮</ChenButton>
    <ChenButton type="danger" disabled>danger按钮</ChenButton>
    <ChenButton type="warning" disabled>warning按钮</ChenButton>
    <ChenButton type="info" disabled>info按钮</ChenButton>
    <h3>实现icon</h3>
    <ChenButton type="default" circle icon="yanjing"></ChenButton>
    <ChenButton type="success" circle icon="guanbi"></ChenButton>
    <ChenButton type="primary" circle icon="huanyipi"></ChenButton>
    <ChenButton type="danger" circle icon="search"></ChenButton>
    <ChenButton type="warning" circle icon="app4"></ChenButton>
    <ChenButton type="info" circle icon="Aa"></ChenButton>
    <h3>函数功能</h3>
    <ChenButton type="default" @click="nihao">default按钮</ChenButton>
    <!-- <h3>玻璃效果</h3>
    <ChenButton type="danger" @click="nihao" glass>default按钮</ChenButton> -->

    <h3>按钮的大小</h3>
    <ChenButton type="danger" size="large">large按钮</ChenButton>
    <ChenButton type="danger" size="default">default按钮</ChenButton>
    <ChenButton type="default" size="medium">default按钮</ChenButton>
    <ChenButton type="success" size="small">success按钮</ChenButton>
    <ChenButton type="primary" size="mini">primary按钮</ChenButton>
    <h3>背景颜色</h3>
    <ChenButton type="danger" size="large" backgroundColor="green"
      >large按钮</ChenButton
    >
    <ChenButton
      type="danger"
      size="default"
      backgroundImage="https://tse4-mm.cn.bing.net/th/id/OIP-C.avb9nDfw3kq7NOoP0grM4wHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      >default按钮</ChenButton
    >
    <ChenButton type="default" size="medium" color="black"
      >default按钮</ChenButton
    >
    <ChenButton type="success" size="small">success按钮</ChenButton>
    <ChenButton type="primary" size="mini">primary按钮</ChenButton>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    nihao() {
      console.log("你好");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
