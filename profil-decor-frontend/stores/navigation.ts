export const useNavigationStore = defineStore('navigation', () => {
  const isNavigationMenuOpen = ref(false);

  function $reset() {
    isNavigationMenuOpen.value = false;
  }

  function toggleNavigationMenu(isOpen = false) {
    isNavigationMenuOpen.value = isOpen;
  }

  return {
    isNavigationMenuOpen,
    toggleNavigationMenu,
    $reset
  }
});