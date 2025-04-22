<template>
  <div>
    <h2>keep-alive测试</h2>
    {{ count }}
    <a-divider />
    <div class="flex gap-2">
      <a-button type="primary" @click="add">点击++</a-button>
      <a-button type="primary" @click="sub">点击--</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const count = ref(0);
const add = () => {
  count.value++;
};
const sub = () => {
  count.value--;
};

onMounted(() => {
  const route = useRoute();
  console.log("组件被缓存:",route.meta.keepAlive);
});
defineOptions({
  name: "Test",
});
</script>
