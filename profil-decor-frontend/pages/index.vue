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
    <SectionDetailRoot id="detail-section" class="h-screen" />
    <SectionShowcaseRoot />
    <SectionBlocksWrapper variant="secondary" id="dummy2" :is-full-screen="true" />
    <SectionInventoryRoot />
    <SectionFaqRoot />
    <FooterContainer />
  </div>
</template>