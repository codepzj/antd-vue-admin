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
      <a-skeleton :loading="systemStore.loading" active>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <keep-alive :include="cacheNames">
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </a-skeleton>
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts" setup>
import { useTabStore } from "@/store/tab";
import { storeToRefs } from "pinia";
import { useSystemStore } from "@/store/system";
import { cacheNames } from "@/router/modules/router";
const systemStore = useSystemStore();
const tabStore = useTabStore();

const { panes, activeKey } = storeToRefs(tabStore);
</script>
<style lang="scss" scoped>
// https://cn.vuejs.org/guide/built-ins/transition#css-based-transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
