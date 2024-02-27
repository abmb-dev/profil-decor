<script setup lang="ts">
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const navigationStore = useNavigationStore();
const { isNavigationMenuOpen } = storeToRefs(navigationStore);

const {
  initOpacityAnimation,
  initTextRevealAnimation,
  initLandingTimelineAnimation
} = useGsapAnimation();

useHead({
  bodyAttrs: {
    class: computed(() => {
      return isNavigationMenuOpen.value ? 'hide-overflow' : '';
    })
  }
});

const initializeGsap = () => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({ markers: process.env.NODE_ENV === 'development' });
}

watch(() => isNavigationMenuOpen.value, () => {
  initOpacityAnimation(isNavigationMenuOpen.value).play();
});

onMounted(() => {
  initializeGsap();
  initLandingTimelineAnimation();
  initTextRevealAnimation('#landing-title-profil');

  useLenisScroll(isNavigationMenuOpen);
});
</script>

<template>
  <div id="landing-page">
    <section id="landing-section"
      class="w-screen h-screen bg-gray-100 pt-16 flex items-center justify-center overflow-hidden bg-dot-black/[0.2]">
      <div
        class="absolute pointer-events-none pt-16 inset-0 flex items-center justify-center z-[-1] bg-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_85%,black)]">
      </div>
      <div class="flex flex-col w-full h-full items-center justify-center">
        <span id="landing-title-profil"
          class="text-primary font-semibold tracking-tight leading-[20vw] text-[25vw]">PROFIL</span>
        <div class="flex">
          <span id="landing-title-decor-first"
            class="text-primary font-semibold tracking-tight leading-[25vw] text-[25vw]">DEC</span>
          <ThreeLandingScene />
          <span id="landing-title-decor-second"
            class="text-primary font-semibold tracking-tight leading-[25vw] text-[25vw]">R</span>
        </div>
      </div>
    </section>
    <section class="w-screen h-screen bg-gray-100 bg-dot-black/[0.2]">
    </section>
    <section class="w-screen h-screen bg-primary"></section>
    <section class="w-screen h-screen bg-primary"></section>
    <section class="w-screen h-screen bg-gray-100 bg-dot-black/[0.2]"></section>
    <section class="w-screen h-screen bg-gray-100 bg-dot-black/[0.2]"></section>
    <FooterContainer></FooterContainer>
</div></template>