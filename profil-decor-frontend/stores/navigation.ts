export const useNavigationStore = defineStore('navigation', () => {
  const isNavigationMenuOpen = ref(false);

  function $reset() {
    isNavigationMenuOpen.value = false;
  }

  function toggleNavigationMenu() {
    isNavigationMenuOpen.value = !isNavigationMenuOpen.value;
  }

  return {
    isNavigationMenuOpen,
    toggleNavigationMenu,
    $reset
  }
});