
<template>
  <div id="index">
    <h4>Origin-Plus</h4>

    <div class="panel">
      <div id="container"></div>
      <div class="output">
        <pre v-for="(item,i) in output" :key="i">{{item}}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import TempTool from './TempTool';

export default {
  data() {
    return {
      output: [],
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

    monacoInstance.setValue(new Array(3).fill('姓名 name aaa').join('\n'));

  },
  methods: {
    handle() {
      this.output = [];

      // this.output.push(new TempTool().get('option', this.value, (row) => {
      //   if (row.length > 0) {
      //     row.unshift('<el-option label="全部"></el-option>');
      //   }
      //   return row;
      // }).join('\n'));

      this.output.push(new TempTool().get('form', this.value).join('\n'));

    },
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
      flex: 2;
      background-color: #343434;
      overflow: auto;

      pre {
        color: #fff;
        font-size: 14px;
        border-bottom: 1px solid #222;
        margin: 0;
        padding: 10px;
      }
    }
  }
}
</style>