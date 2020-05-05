<template>
  <div class="cell">
    <div class="cell-label">
      <slot name="label">{{label}}</slot>
    </div>
    <div class="cell-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cell",
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.cell {
  display: flex;
  font-size: 12px;
  align-items: center;
  padding: 0 5px;
  margin-bottom: 5px;

  .cell-label {
    width: 150px;
  }
  .cell-body {
    flex: 1;
  }
}
</style>