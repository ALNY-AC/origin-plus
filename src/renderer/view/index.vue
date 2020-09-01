
<template>
  <div id="index">
    <h4>Origin-Plus</h4>
    <div></div>
    <div class="panel">
      <div id="container"></div>
      <div class="output">
        <pre>{{output}}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';

export default {
  data() {
    return {
      output: '',
      value: ''
    };
  },
  mounted() {

    const monacoInstance = monaco.editor.create(document.getElementById("container"), {
      // value: "function hello() {\n\talert('Hello world!');\n}",
      language: "javascript"
    });

    monacoInstance.onDidChangeModelContent((event) => {
      let newValue = monacoInstance.getValue();
      this.value = newValue;
      this.handle();
    })

  },
  methods: {
    handle() {
      // this.output = this.option(this.value);


      this.output = this.form(this.value);

    },
    form(v) {
      // <el-form>
      //   <el-form-item label="" prop="">
      //     <el-input v-model=""></el-input>
      //   </el-form-item>
      // </el-form>
      let temp = `<el-form-item prop="$0" label="$1" aaa="$2"></el-form-item>`;
      let row = v.split('\n')
        .filter(el => !!el)
        .map(el => el.split(' ').filter(el => !!el))
        .map(el => {
          let newtemp = temp;
          console.warn(el);
          el.forEach((str, i) => {
            let reg = new RegExp(`\\$${i}`, 'gim');
            newtemp = newtemp.replace(reg, str);
          });
          newtemp = newtemp.replace(/\$[0-9]+/gim, '');
          return newtemp;
        });

      row = row.join('\n');
      return row;
    },
    option(v) {
      let row = v.split('\n')
        .filter(el => !!el)
        .map(el => el.split(' ').filter(el => !!el))
        .map(el => `<el-option value="${el[0]}" label="${el[1]}"></el-option>`);

      if (row.length > 0) {
        row.unshift('<el-option label="全部"></el-option>');
      }
      row = row.join('\n');
      return row;
    }
  },
  watch: {
  }
};
</script>
<style lang="scss" scoped>
#index {
  padding: 0 25px;
  background-color: #f6f6f6;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .panel {
    flex: 1;
    display: flex;
    #container {
      flex: 1;
    }
    .output {
      flex: 1;
      background-color: #f1f1f1;
      font-size: 14px;
      padding: 10px;
      color: #333;
    }
  }
}
</style>