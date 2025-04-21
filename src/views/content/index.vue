<template>
  <div class="md-editor markdown-body">
    <Editor
      :value="content"
      :locale="zhHans"
      :plugins="mdPlugins"
      @change="handleChange"
    />
  </div>
</template>

<script setup>
import { Editor } from "@bytemd/vue-next";
import zhHans from "bytemd/locales/zh_Hans.json";
import "bytemd/dist/index.css";
import "github-markdown-css/github-markdown-light.css";
import "highlight.js/styles/vs.css";

import gfm from "@bytemd/plugin-gfm";
import gemoji from "@bytemd/plugin-gemoji";
import highlight from "@bytemd/plugin-highlight";
import frontmatter from "@bytemd/plugin-frontmatter";
import mediumZoom from "@bytemd/plugin-medium-zoom";
import mermaid from "@bytemd/plugin-mermaid";
import breaks from "@bytemd/plugin-breaks";

const content = ref("");

const mdPlugins = ref([
  gfm(),
  gemoji(),
  highlight(),
  frontmatter(),
  mediumZoom(),
  breaks(),
  mermaid(),
]);

// 获取书写文档内容
const handleChange = v => {
  content.value = v;
};

defineOptions({
  name: "Content",
});
</script>
<style lang="scss" scoped>
.md-editor {
  height: calc(100vh - 125px);
  width: 100%;
  > div {
    height: 100%;
    :deep(.bytemd) {
      height: 100%;
    }
  }
}
</style>
