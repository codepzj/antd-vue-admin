<template>
  <div class="h-screen">
    <a-style-provider
      hash-priority="low"
      :transformers="[legacyLogicalPropertiesTransformer]"
    >
      <a-spin
        :spinning="systemStore.spinning"
        tip="加载中"
        size="large"
        class="!max-h-screen"
      >
        <router-view />
      </a-spin>
    </a-style-provider>
  </div>
</template>

<script setup lang="ts">
import { legacyLogicalPropertiesTransformer } from "ant-design-vue";
import { useSystemStore } from "@/store/system";

const systemStore = useSystemStore();
</script>
