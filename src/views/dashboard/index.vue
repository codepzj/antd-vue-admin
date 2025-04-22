<template>
  <div>
    <h2>一、页面加载状态</h2>
    <div class="flex gap-2">
      <a-button type="primary" @click="handleSetSpinning">
        设置页面加载状态
      </a-button>

      <a-button type="primary" @click="handleSetSkeleton">
        设置骨架屏加载状态
      </a-button>
    </div>
    <a-divider />
    <h2>二、错误页面</h2>
    <div class="flex gap-2">
      <a-button type="primary" @click="$router.push('/error/401')">
        401
      </a-button>
      <a-button type="primary" @click="$router.push('/error/403')">
        403
      </a-button>
      <a-button type="primary" @click="$router.push('/error/404')">
        404
      </a-button>
      <a-button type="primary" @click="$router.push('/error/500')">
        500
      </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSystemStore } from "@/store/system";

const systemStore = useSystemStore();

const handleSetSpinning = () => {
  systemStore.setSpinning(true);
  setTimeout(() => {
    systemStore.setSpinning(false);
  }, 3000);
};

const handleSetSkeleton = () => {
  systemStore.setSkeleton(true);
  setTimeout(() => {
    systemStore.setSkeleton(false);
  }, 3000);
};
</script>
