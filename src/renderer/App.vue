<template>
  <div id="app">
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
export default {
  name: "electron-vue-temp"
};
</script>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
}
.router-view {
  flex: 1;
  overflow: auto;
}
</style>
