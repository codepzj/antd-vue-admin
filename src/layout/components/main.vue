<template>
  <div>
    <a-skeleton :loading="systemStore.loading" active>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </a-skeleton>
  </div>
</template>

<script setup lang="ts">
import { useSystemStore } from "@/store/system";

const systemStore = useSystemStore();
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
