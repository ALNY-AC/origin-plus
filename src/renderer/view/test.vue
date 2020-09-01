<template>
  <div id="index">
    <div class="df">
      <el-form label-position="top" size="mini">
        <el-form-item v-for="(prop,i) in props" :key="i" :label="`属性${i}`">
          <div class="pro-panel" v-for="(p,x) in prop" :key="x">
            <div class="prop-title">{{x}}</div>
            <div v-if="p.type=='text'">
              <el-input v-model="prop[x].value"></el-input>
            </div>
            <div v-if="p.type=='radio'">
              <el-radio-group v-model="prop[x].value">
                <el-radio :label="opt" v-for="(opt,j) in p.option" :key="j">{{opt}}</el-radio>
              </el-radio-group>
            </div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button @click="push()">增加字段</el-button>
        </el-form-item>
      </el-form>
      <pre v-html="props"></pre>
    </div>

    <el-table ref="table" :data="dataList" height="100px">
      <el-table-column
        v-for="(col,i) in props"
        :key="i"
        :prop="col.prop.value"
        :label="col.label.value"
        :width="col.width.value"
      ></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      props: [],
      dataList: [
        { id: "1", name: "asd" },
        { id: "2", name: "a213ewsd" },
        { id: "2", name: "a213ewsd" }
      ]
    };
  },
  mounted() {
    this.props.push(this.getTableEl());
  },
  methods: {
    push() {
      this.props.push(this.getTableEl());
    },
    getTableEl() {
      let tableEl = {
        prop: this.getProp("text"),
        label: this.getProp("text"),
        width: this.getProp("text"),
        align: this.getProp("radio", ["left", "center", "right"]),
        fixed: this.getProp("radio", ["", "true", "left", "right"])
      };
      return tableEl;
    },
    getProp(type = "text", option = []) {
      let prop = {
        type: type,
        option: option,
        value: ""
      };
      return prop;
    }
  },
  watch: {
    props: {
      handler() {
        this.$refs["table"].doLayout();
      },
      deep: true
    }
  }
};
</script>
<style lang="scss" scoped>
#index {
  padding: 25px;
  background-color: #f6f6f6;
}
.pro-panel {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
}
.prop-title {
  font-size: 11px;
  color: #666;
}
.df {
  display: flex;
  .el-form {
    flex: 1;
  }
  pre {
    margin-left: 10px;
    background-color: #999999;
    padding: 10px;
    border-radius: 5px;
  }
}
</style>