<template>
  <div class="config-edit" v-if="config">
    <cell-group title="地址配置">
      <cell label="当前访问：">
        <a :href="address">{{address}}</a>
      </cell>
      <cell label="域名：">
        <input type="text" v-model="config.urls.hostname" />
      </cell>
      <cell label="当前解析地址：">
        <input type="text" v-model="config.urls.path" />
      </cell>
      <cell label="下一页地址">
        <input type="text" v-model="config.urls.listUrl.nextPage" />
      </cell>
      <cell label="等待时间：">
        <input type="number" v-model="config.urls.timeout" />
      </cell>
      <cell label="列表地址：">
        <input type="text" v-model="config.urls.listUrl.path" />
      </cell>
    </cell-group>
    <cell-group title="选择器配置">
      <cell label="列表容器选择器：">
        <input type="text" v-model="config.selector.list.listBox" />
      </cell>
      <cell label="项目选择器：">
        <input type="text" v-model="config.selector.list.item" />
      </cell>
      <cell label="标题选择器：">
        <input type="text" v-model="config.selector.list.title" />
      </cell>
      <cell label="链接选择器：">
        <input type="text" v-model="config.selector.list.href" />
      </cell>
      <cell label="下一页选择器：">
        <input type="text" v-model="config.selector.list.next" />
      </cell>
      <cell label=" ">
        <div class="text-right">
          <el-button @click="save()">保存</el-button>
        </div>
      </cell>
    </cell-group>
  </div>
</template>

<script>
export default {
  name: "ConfigEdit",
  props: {
    config: {
      type: Object,
      default: null
    }
  },
  methods: {
    save() {
      this.$emit("save", this.config);
    }
  },
  computed: {
    address() {
      return `https://${this.config.urls.hostname}${this.config.urls.path}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.config-edit {
}
</style>