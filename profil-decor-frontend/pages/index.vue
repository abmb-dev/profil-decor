<script setup lang="ts">
const navigationStore = useNavigationStore();
const { isNavigationMenuOpen } = storeToRefs(navigationStore);

const {
  initOpacityAnimation,
} = useGsapAnimation();

useHead({
  bodyAttrs: {
    class: computed(() => {
      return isNavigationMenuOpen.value ? 'hide-overflow' : '';
    })
  }
});

watch(() => isNavigationMenuOpen.value, () => {
  initOpacityAnimation(isNavigationMenuOpen.value).play();
});

onMounted(() => {
  useLenisScroll(isNavigationMenuOpen);
});
</script>

<template>
  <div id="landing-page" class="relative z-0 lg:pb-[400px]">
    <SectionLandingRoot />
    <SectionBlocksWrapper id="dummy1" :is-fixed-height="true" />
    <SectionShowcaseRoot />
    <SectionBlocksWrapper variant="secondary" id="dummy2" :is-fixed-height="true" />
    <SectionInventoryRoot />
    <SectionFaqRoot />
    <FooterContainer />
  </div>
</template>