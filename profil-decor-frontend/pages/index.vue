<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

let lenis: Lenis;
const appConfig = useAppConfig();
const navigationStore = useNavigationStore();
const { isNavigationMenuOpen } = storeToRefs(navigationStore);
const { initOpacityAnimation } = useGsapAnimation();

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

const initializeLenisScroll = () => {
  lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

watch(() => isNavigationMenuOpen.value, () => {
  initOpacityAnimation(isNavigationMenuOpen.value).play();
  if (isNavigationMenuOpen.value) {
    lenis.stop();
  } else {
    lenis.start();
  }
});

onMounted(() => {
  const { playLandingTitleAnimations } = useGsapAnimation();

  initializeGsap();
  initializeLenisScroll();
  playLandingTitleAnimations();
});
</script>

<template>
  <div id="landing-page"> 
    <section
      id="landing-section"
      class="custom-height w-screen h-screen bg-gray-100 pt-16 flex items-center justify-center overflow-hidden"
    >
      <div class="flex flex-col w-full h-full items-center justify-center">
        <span class="text-primary leading-[5vw] mb-[] text-[5vw] lg:leading-[2vw] lg:text-[1.25vw]">{{ appConfig.meta.motto }}</span>
        <span
          id="landing-title-profil"
          class="text-primary leading-[20vw] opacity-0 text-[25vw]"
        >PROFIL</span>
        <div
          id="landing-title-decor"
          class="opacity-0"
        >
          <span class="text-primary leading-[20vw] text-[25vw]">D</span>
          <span class="text-primary leading-[20vw] text-[25vw]">E</span>
          <span class="text-primary leading-[20vw] text-[25vw]">C</span>
          <span class="text-white leading-[20vw] text-[25vw]">O</span>
          <span class="text-primary leading-[20vw] text-[25vw]">R</span>
        </div>
      </div>
    </section>
    <section class="w-screen h-screen bg-primary" />
    <section class="w-screen h-screen bg-primary" />
    <section class="w-screen h-screen bg-gray-100" />
    <section class="w-screen h-screen bg-gray-100" />
  </div>
</template>