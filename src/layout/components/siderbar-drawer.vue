<template>
  <a-drawer
    width="224"
    placement="left"
    :visible="visible"
    @close="onClose"
    :closable="false"
    :bodyStyle="{ padding: '0' }"
    :destroyOnClose="true"
  >
    <sidebar></sidebar>
  </a-drawer>
</template>
<script setup lang="ts">
import { useSidebarStore } from "@/store/sidebar";
import sidebar from "./sidebar.vue";

const sidebarStore = useSidebarStore();
const visible = computed(() => sidebarStore.collapse && window.innerWidth < 768);

const onClose = () => {
  sidebarStore.setCollapse(false);
};
</script>
