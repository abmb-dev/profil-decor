export const useNavigationStore = defineStore('navigation', () => {
  const isNavigationMenuOpen = ref(false);

  function $reset() {
    isNavigationMenuOpen.value = false;
  }

  function toggleNavigationMenu(isOpen = false) {
    isNavigationMenuOpen.value = !isNavigationMenuOpen.value;
  }

  return {
    isNavigationMenuOpen,
    toggleNavigationMenu,
    $reset
  }
});