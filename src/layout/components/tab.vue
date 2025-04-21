<template>
  <a-tabs
    v-model:activeKey="activeKey"
    hide-add
    type="editable-card"
    size="small"
    @edit="tabStore.editTab"
    @change="tabStore.changeTab"
  >
    <a-tab-pane
      v-for="pane in panes"
      :key="pane.key"
      :tab="pane.title"
      :closable="pane.closable"
    >
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts" setup>
import { useTabStore } from "@/store/tab";
import { storeToRefs } from "pinia";
const tabStore = useTabStore();

const { panes, activeKey } = storeToRefs(tabStore);
</script>
