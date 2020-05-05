<template>
  <div class="panel-dark" :style="[{'width':width,'padding':padding+'px'}]">
    <div class="panel-header">
      <slot name="header">{{title}}</slot>
    </div>
    <div class="panel-body">
      <slot></slot>
    </div>
    <div class="panel-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PanelDark",
  props: {
    title: {
      type: String,
      default: ""
    },
    width: {
      type: String,
      default: ""
    },
    padding: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.panel-dark {
  background-color: rgb(31, 31, 31);
  margin: 0.5px;
  // border: solid 1px rgb(42, 42, 42);
  border-radius: 0;
  .panel-header {
  }
  .panel-body {
  }
  .panel-footer {
  }
}
</style>