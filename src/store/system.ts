export const useSystemStore = defineStore("system", () => {
  const spinning = ref(false);
  const loading = ref(false);

  // 设置页面加载状态
  const setSpinning = (value: boolean) => {
    spinning.value = value;
  };

  // 设置骨架屏加载状态
  const setSkeleton = (value: boolean) => {
    loading.value = value;
  };

  return {
    spinning,
    setSpinning,
    loading,
    setSkeleton,
  };
});
