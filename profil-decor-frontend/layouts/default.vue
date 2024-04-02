<template>
  <div v-if="areAssetsLoaded">
    <header class="flex justify-center">
      <NavigationRoot />
      <NavigationRoot :is-navigation-mask="true" />
      <NavigationMenu v-if="isNavigationMenuOpen" />
    </header>
    <slot></slot>
  </div>
  <Loading v-else @loaded="proceedToNavigation" />
</template>

<script setup lang="ts">
const navigationStore = useNavigationStore();
const { areAssetsLoaded, isNavigationMenuOpen } = storeToRefs(navigationStore);

const proceedToNavigation = (model: any) => {
  areAssetsLoaded.value = true;
  navigationStore.columnHeaderModel = model;
}

watch(isNavigationMenuOpen, () => {
  const lenis = useLenisScroll().getLenisInstance();
  if (isNavigationMenuOpen.value) {
    lenis.stop();
  } else {
    lenis.start();
  }
})
</script>