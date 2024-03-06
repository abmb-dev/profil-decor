<script setup lang="ts">
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const navigationStore = useNavigationStore();
const { isNavigationMenuOpen } = storeToRefs(navigationStore);

const {
  initTextRevealAnimation,
  initLandingTimelineAnimation
} = useGsapAnimation();

const initializeGsap = () => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({ markers: process.env.NODE_ENV === 'development' });
}

onMounted(() => {
  initializeGsap();
  initLandingTimelineAnimation();
  initTextRevealAnimation('#landing-title-profil');
  useLenisScroll(isNavigationMenuOpen);
});

</script>

<template>
  <SectionBlocksWrapper id="landing-section" :is-custom="true">
    <div class="flex flex-col w-full h-full items-center justify-center">
      <span id="landing-title-profil" class="text-primary font-semibold tracking-tight leading-[20vw] text-[25vw] font-sketch">PROFIL</span>
      <div class="flex">
        <span id="landing-title-decor-first" class="text-primary font-semibold tracking-tight leading-[25vw] text-[25vw]">DEC</span>
        <SectionLandingScene />
        <span id="landing-title-decor-second"
          class="text-primary font-semibold tracking-tight leading-[25vw] text-[25vw]">R</span>
      </div>
    </div>
  </SectionBlocksWrapper>
</template>