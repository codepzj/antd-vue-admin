<template>
  <a-layout class="h-screen flex flex-col overflow-hidden">
    <a-layout-sider
      class="hidden !bg-white"
      :class="{
        'md:block': !sidebarStore.collapse, // 根据 sidebarStore 的 collapse 状态动态显示
      }"
    >
      <!-- 侧边栏内容 -->
      <Sidebar></Sidebar>
    </a-layout-sider>

    <a-layout class="flex-1 overflow-hidden">
      <a-layout-header class="!bg-[#f8f8f8] !h-12 !px-4">
        <Header></Header>
      </a-layout-header>
      <div class="h-[1px] bg-gray-200"></div>
      <a-layout class="my-4 ml-4 mr-0.5">
        <a-layout-content>
          <!-- 标签页 -->
          <tab></tab>
          <!-- 主要内容,二级路由入口,高度超出时出现滚动条 -->
          <Main class="h-full overflow-y-hidden pr-4"></Main>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
  <!-- 侧边栏抽屉 -->
  <SiderbarDrawer />
</template>

<script setup lang="ts">
import Sidebar from "./components/sidebar.vue";
import SiderbarDrawer from "./components/siderbar-drawer.vue";
import Tab from "./components/tab.vue";
import Header from "./components/header.vue";
import Main from "./components/main.vue";
import { useSidebarStore } from "@/store/sidebar";

const sidebarStore = useSidebarStore();
</script>

<style lang="scss" scoped></style>
