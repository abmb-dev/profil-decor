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
import ScrollTrigger from 'gsap/ScrollTrigger';
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
  if (process.client && ScrollTrigger.isTouch === 0) {
    const lenis = useLenisScroll().getLenisInstance();
    if (isNavigationMenuOpen.value) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }
});

watch(() => isNavigationMenuOpen.value, () => {
  if (route.name === "") {
    initOpacityAnimation('#landing-section', isNavigationMenuOpen.value).play();
  } else if (route.name === 'faq') {
    initOpacityAnimation('#faq-section', isNavigationMenuOpen.value).play();
  }
});

watch(() => route.path, () => {
  isNavigationMenuOpen.value = false;
});

</script>