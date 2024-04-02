<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core';

interface CloudinaryImage {
  src: string
}

const { data, error, pending } = await useFetch('/api/cloudinary/work');

const sources: Ref<string[]> = ref([]);
if (data.value) {
  sources.value = data.value.map((image: CloudinaryImage) => image.src);
} else if (error.value) {
  // TODO
}

const description = useAppConfig().meta.business.description;
const { initLineRevealAnimation } = useGsapAnimation();
const { windowY } = useWindowScroll();

// First work and description animation business logic
const work1 = ref(null);
const isWork1ImageVisible = useElementVisibility(work1);
const wasWork1DescriptionAnimated = ref(false);

watch(isWork1ImageVisible, () => {
  if (isWork1ImageVisible.value && !wasWork1DescriptionAnimated.value) {
    initLineRevealAnimation('#description-1');
  } else {
    wasWork1DescriptionAnimated.value = true;
  }
});

// Second work and description animation business logic
const work2 = ref(null);
const isWork2ImageVisible = useElementVisibility(work2);
const wasWork2DescriptionAnimated = ref(false);

watch(isWork2ImageVisible, () => {
  if (isWork2ImageVisible.value && !wasWork2DescriptionAnimated.value) {
    initLineRevealAnimation('#description-2');
  } else {
    wasWork2DescriptionAnimated.value = true;
  }
}); 

// Portfolio description animation business logic
const portfolioDescription = ref(null);
const isPortfolioDescriptionVisible = useElementVisibility(portfolioDescription);
const wasPortfolioDescriptionAnimated = ref(false);

watch(isPortfolioDescriptionVisible, () => {
  if (isPortfolioDescriptionVisible.value && !wasPortfolioDescriptionAnimated.value) {
    initLineRevealAnimation('#portfolio-description')
  } else {
    wasPortfolioDescriptionAnimated.value = true;
  }
});

const workScaleFactor = ref(1.5);
const portfolioScaleFactor = ref(1.5);

watch(windowY, () => {
  if (windowY.value === 0) {
    wasWork1DescriptionAnimated.value = false;
    wasWork2DescriptionAnimated.value = false;
    wasPortfolioDescriptionAnimated.value = false;
    workScaleFactor.value = 1.5;
  } else {
    workScaleFactor.value = Math.max(1, 1.5 - windowY.value * 0.0001);
    if (isPortfolioDescriptionVisible.value) {
      portfolioScaleFactor.value = Math.max(1, 1.5 - windowY.value * 0.0002);
    }
  }
});

onMounted(() => {
  if (windowY.value > 0) {
    wasWork1DescriptionAnimated.value = true;
    wasWork2DescriptionAnimated.value = true;
    wasPortfolioDescriptionAnimated.value = true;
  }
})
</script>

<template>
  <SectionWrapper id="first-description-section" :is-custom="true" :is-full-screen="false" class="px-8">
    <div class="grid grid-cols-1 gap-x-0 gap-y-8 lg:grid-cols-12 lg:gap-x-4 lg:gap-y-8">
      <div class="order-1 relative col-start-1 col-end-2 lg:col-start-2 lg:col-end-12">
        <h1 class="font-double-dynamic leading-double-dynamic font-normal text-pretty">
          {{ description.description2 }}
        </h1>
      </div>
      <div class="order-4 lg:order-3 relative col-start-1 col-end-2 lg:col-start-2 lg:col-span-5 overflow-hidden h-fit">
        <div class="relative overflow-hidden w-full h-auto">
          <NuxtImg 
            provider="cloudinary"
            :src="sources.at(0)" 
            format="avif"
            :placeholder="pending"
            :style="{ transform: `scale(${workScaleFactor})`}"
          />
        </div>
      </div>
      <div class="order-5 lg:order-3 relative col-start-1 col-end-2 lg:col-start-8 lg:self-start lg:col-span-4">
        <div class="relative overflow-hidden w-full h-full">
          <NuxtImg 
            provider="cloudinary"
            :src="sources.at(1)"
            format="avif"
            :placeholder="pending"
            :style="{ transform: `scale(${workScaleFactor})`}" 
          />
        </div>
      </div>
      <div class="order-2 lg:order-2 relative col-start-1 col-end-2 lg:col-start-2 lg:col-end-5 flex flex-col gap-y-4" ref="work1">
        <span class="font-dynamic uppercase">totul despre profil decor</span>
        <h1 class="font-dynamic leading-dynamic font-normal text-pretty" id="description-1">
          {{ description.description1 }}
        </h1>
      </div>
      <div class="order-3 lg:order-5 relative col-start-1 col-end-2 lg:col-start-8 lg:col-end-12" ref="work2">
        <h1 class="font-dynamic leading-dynamic text-pretty" id="description-2">
          {{ description.description5 }}
        </h1>
      </div>
      <div class="order-7 relative col-start-1 col-end-2 lg:col-start-2 lg:col-end-11 h-2/3">
        <div class="relateive overflow-hidden w-full h-full">
          <NuxtImg 
            provider="cloudinary"
            :src="sources.at(2)"
            format="avif"
            :placeholder="pending"
            :style="{ transform: `scale(${portfolioScaleFactor})`}"
          />
        </div>
      </div>
      <div class="order-6 relative col-start-1 cold-end-2 lg:col-start-2 lg:col-end-7 flex flex-col gap-y-4" ref="portfolioDescription">
        <span class="font-dynamic uppercase font-normal">un portofoliu cum nu ai mai vazut</span>
        <h1 class="font-dynamic text-pretty" id="portfolio-description">
          {{ description.description3 }}
        </h1>
        <CoreButton>spre portofoliu</CoreButton>
      </div>
    </div>
  </SectionWrapper>
</template>