<script setup lang="ts">
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide';

type showcaseItem = { src: string, title: string, year: number, month: string };

const showcaseData: showcaseItem[] = [
  {
    src: '/img/show/show1.jpg',
    title: 'Scheia',
    year: 2024,
    month: "march"
  },
  {
    src: '/img/show/show2.jpg',
    title: 'Scheia - detaliu',
    year: 2024,
    month: "march"
  },
  {
    src: '/img/show/show3.jpg',
    title: 'Scheia',
    year: 2024,
    month: "march"
  },
  {
    src: '/img/show/show4.jpg',
    title: 'Sf. Ilie',
    year: 2024,
    month: "march"
  }
];

const splide = ref();

const options = ref({
  width: '100%',
  perPage: 1,
  gap: '4rem',
  arrows: false,
  pagination: false
});

const progressPercent = ref();

onMounted(() => {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    options.value.perPage = 3;
  }
  
  if (splide.value && splide.value.splide ) {
    splide.value.splide.on('mounted move', () => {
      const end = splide.value.splide.Components.Controller.getEnd() + 1;
      progressPercent.value = Math.min((splide.value.splide.index + 1) / end, 1) * 100;
    });
  }
});

</script>

<template>
  <div class="my-carousel-progress">
    <div class="bg-primary h-[2px] transition-all w-0" :style="{ width: `${progressPercent}%`}"></div>
  </div>
  <Splide :options ref="splide">
    <SplideSlide v-for="item in showcaseData" :key="item.src">
      <div class="flex flex-col gap-y-4 h-full">
        <NuxtImg :src="item.src" class="w-full max-h-[500px] object-cover" format="webp" />
        <div class="flex flex-col">
          <h2 class="font-normal font-dynamic">{{ item.title }}</h2>
          <h3 class="uppercase">{{ item.month }}, {{ item.year }}</h3>
        </div>
      </div>
    </SplideSlide>
  </Splide>  
</template>