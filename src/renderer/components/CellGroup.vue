<template>
  <div class="cell-group">
    <div class="cell-group-header" @click="switchs()">
      <span class="open-btn" v-if="isC">
        <i v-if="isShow" class="el-icon-caret-bottom"></i>
        <i v-if="!isShow" class="el-icon-caret-right"></i>
      </span>
      <span class="cell-group-title">
        <slot name="title">{{title}}</slot>
      </span>
    </div>
    <div class="cell-group-body" v-if="isShow">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "CellGroup",
  props: {
    title: {
      type: String,
      default: ""
    },
    isC: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isShow: true
    };
  },
  methods: {
    switch() {
      if (this.isC) {
        this.isShow = !this.isShow;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.cell-group {
  font-size: 12px;
  align-items: center;
  border-bottom: solid 1px rgb(42, 42, 42);
  .cell-group-header {
    display: flex;
    padding: 5px 5px;
    cursor: pointer;
    user-select: none;
    .open-btn {
      display: inline-block;
      font-size: 15px;
      width: 15px;
      height: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: normal;
      font-weight: bold;
    }
    .cell-group-title {
    }
  }
  .cell-group-body {
    padding: 5px 5px;
  }
}
</style>