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
  <div id="landing-page" class="relative z-0 lg:pb-[320px]">
    <SectionDetailRoot class="h-screen" />
    <SectionDescriptionRoot />
    <SectionShowcaseRoot />
    <SectionCustomRoot />
    <SectionFaqRoot />
    <FooterRoot />
  </div>
</template>