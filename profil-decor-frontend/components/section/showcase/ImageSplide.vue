<script setup lang="ts">
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide';

defineProps<{
  items: showcaseItem[]
}>();

const splide = ref();
const progressPercent = ref();

const options = ref({
  width: '100%',
  perPage: 1,
  gap: '4rem',
  arrows: false,
  pagination: false
});

const updateSplideProgress = () => {
  if (splide.value && splide.value.splide ) {
    const end = splide.value.splide.Components.Controller.getEnd() + 1;
    progressPercent.value = Math.min((splide.value.splide.index + 1) / end, 1) * 100;
  }
};

onMounted(() => {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    options.value.perPage = 3;
  }
});

</script>

<template>
  <div class="my-carousel-progress">
    <div class="bg-primary h-[2px] transition-all w-0" :style="{ width: `${progressPercent}%`}"></div>
  </div>
  <Splide :options ref="splide" @splide:mounted="updateSplideProgress" @splide:move="updateSplideProgress">
    <SplideSlide v-for="item in items" :key="item.src">
      <div class="flex flex-col gap-y-4 h-full">
        <NuxtImg 
          provider="cloudinary"
          :src="item.src" 
          class="w-full max-h-[500px] object-cover" 
          format="avif" 
        />
        <div class="flex flex-col">
          <h2 class="font-normal font-dynamic">{{ item.title }}</h2>
          <h3 class="uppercase">{{ item.month }}, {{ item.year }}</h3>
        </div>
      </div>
    </SplideSlide>
  </Splide>  
</template>