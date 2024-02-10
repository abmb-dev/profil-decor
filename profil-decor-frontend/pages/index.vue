<template>
  <div id="landing-page"> 
    <section id="landing-section" class="w-screen h-screen bg-gray-100 pt-17 flex items-center justify-center overflow-hidden">
      <div class="flex flex-col w-full h-full items-center justify-center">
        <span id="landing-title-profil" class="text-primary leading-[20vw] opacity-0 text-[25vw]">PROFIL</span>
        <div id="landing-title-decor" class="opacity-0">
          <span class="text-primary leading-[20vw] text-[25vw]">D</span>
          <span class="text-primary leading-[20vw] text-[25vw]">E</span>
          <span class="text-primary leading-[20vw] text-[25vw]">C</span>
          <span class="text-white leading-[20vw] text-[25vw]">O</span>
          <span class="text-primary leading-[20vw] text-[25vw]">R</span>
        </div>
      </div>
    </section>
    <section class="w-screen h-screen bg-primary"></section>
    <section class="w-screen h-screen bg-primary"></section>
    <section class="w-screen h-screen bg-gray-100"></section>
    <section class="w-screen h-screen bg-gray-100"></section>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const { initOpacityAnimation } = useGsapAnimation();
const navigationStore = useNavigationStore();
const { isNavigationMenuOpen } = storeToRefs(navigationStore);

useHead({
  bodyAttrs: {
    class: computed(() => {
      return isNavigationMenuOpen.value ? 'hide-overflow' : '';
    })
  }
});

function initializeGsap() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({ markers: process.env.NODE_ENV === 'development' });
}

watch(() => isNavigationMenuOpen.value, () => {
  initOpacityAnimation(isNavigationMenuOpen.value).play();
});

onMounted(() => {
  initializeGsap();
  const { playLandingTitleAnimations } = useGsapAnimation();
  playLandingTitleAnimations();
});
</script>