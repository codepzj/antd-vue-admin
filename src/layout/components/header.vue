<template>
  <div class="flex h-full w-full items-center justify-between">
    <div class="flex items-center gap-2">
      <a-button
        type="text"
        @click="sidebarStore.setCollapse(!sidebarStore.collapse)"
      >
        <MenuOutlined />
      </a-button>
    </div>
    <div class="flex items-center gap-2">
      <a-dropdown>
        <a-avatar>
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
        <template #overlay>
          <a-menu @click="onClick">
            <a-menu-item key="1">退出登录</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { MenuProps } from "ant-design-vue";
import { clearStorage } from "@/utils/clearStorage";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
import { UserOutlined, MenuOutlined } from "@ant-design/icons-vue";
import { useSidebarStore } from "@/store/sidebar";

const sidebarStore = useSidebarStore();
const router = useRouter();

const onClick: MenuProps["onClick"] = ({ key }) => {
  switch (key) {
    case "1":
      clearStorage();
      message.warning("退出成功，请重新登录");
      router.push("/login");
      break;
    case "2":
      break;
  }
};
</script>
