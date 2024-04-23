<script lang="ts" setup>
import HSCarousel from '@preline/carousel';

const carouselRef = ref(null);
let carousel: HSCarousel;
defineSlots<{ default(): any }>();

onMounted(async () => {
  await nextTick();
  if (carouselRef.value) {
    carousel = new HSCarousel(carouselRef.value, {
      currentIndex: 0,
      isAutoPlay: true
    });
  }
});
</script>

<template>
  <div
    ref="carouselRef"
    class="relative h-full">
    <div class="hs-carousel relative overflow-hidden w-full min-h-[350px] h-full rounded-lg">
      <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
        <slot></slot>
      </div>
    </div>
  </div>
</template>