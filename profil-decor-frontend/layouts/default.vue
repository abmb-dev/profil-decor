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
const {
  initOpacityAnimation,
} = useGsapAnimation();
const route = useRoute();

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
});

watch(() => isNavigationMenuOpen.value, () => {
  initOpacityAnimation('#landing-section', isNavigationMenuOpen.value).play();
  initOpacityAnimation('#faq-section', isNavigationMenuOpen.value).play();
});

watch(() => route.path, () => {
  isNavigationMenuOpen.value = false;
});

</script>