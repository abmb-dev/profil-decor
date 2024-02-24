export const useNavigationStore = defineStore('navigation', () => {
  const areAssetsLoaded = ref(false);
  const isNavigationMenuOpen = ref(false);
  const columnHeaderModel = null;

  function $reset() {
    isNavigationMenuOpen.value = false;
  }

  function toggleNavigationMenu() {
    isNavigationMenuOpen.value = !isNavigationMenuOpen.value;
  }

  return {
    areAssetsLoaded,
    columnHeaderModel,
    isNavigationMenuOpen,
    toggleNavigationMenu,
    $reset
  }
});