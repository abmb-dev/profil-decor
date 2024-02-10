export const useNavigationStore = defineStore('navigation', () => {
  const isNavigationMenuOpen = ref(false);

  function $reset() {
    isNavigationMenuOpen.value = false;
  }

  return {
    isNavigationMenuOpen,
    $reset
  }
});