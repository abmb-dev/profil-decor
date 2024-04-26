<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useElementVisibility } from '@vueuse/core';

// TODO: Error handling
const { data, pending } = await useFetch('/api/cloudinary/work', {
  transform: (sources) => {
    return sources.map(x => x.src);
  }
});

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
  <SectionWrapper id="first-description-section" :is-custom="true" :is-full-screen="false" class="px-4 xl:px-8">
    <div class="grid grid-cols-1 gap-x-0 gap-y-8 lg:grid-cols-12 lg:gap-x-4 lg:gap-y-8">
      <div class="order-1 relative col-start-1 col-end-2 lg:col-start-2 lg:col-end-12">
        <div class="flex justify-center items-baseline flex-wrap">
          <CoreTypography tag="h1" class="font-semibold mr-4">Bun venit la</CoreTypography>
          <MoleculesBusinessLogo />
        </div>
      </div>
      <div class="order-2 col-start-1 col-end-2 flex justify-center lg:col-start-2 lg:col-end-12 lg:mb-4">
        <CoreTypography tag="h3" class="font-medium">{{ description.description1 }}</CoreTypography>
      </div>
      <div class="order-5 lg:order-3 relative col-start-1 col-end-2 lg:col-start-2 lg:col-span-5 overflow-hidden h-fit">
        <div class="relative overflow-hidden w-full h-auto">
          <CoreImage v-if="data" provider="cloudinary" :src="data.at(0)!" :scale-factor="workScaleFactor" :placeholder="pending" />
        </div>
      </div>
      <div class="order-6 lg:order-3 relative col-start-1 col-end-2 lg:col-start-8 lg:self-start lg:col-span-4">
        <div class="relative overflow-hidden w-full h-full">
          <CoreImage v-if="data" provider="cloudinary" :src="data.at(1)!" :scale-factor="workScaleFactor" :placeholder="pending" />
        </div>
      </div>
      <div class="order-3 lg:order-2 relative col-start-1 col-end-2 lg:col-start-2 lg:col-end-7 xl:col-end-6 flex flex-col gap-y-4" ref="work1">
        <CoreLabel>
          <div class="bg-tertiary-cream flex items-center justify-center p-2 mr-2 rounded-md">
            <Icon icon="carbon:bastion-host" />
          </div>
          <CoreTypography>totul despre profil decor</CoreTypography>
        </CoreLabel>
        <CoreTypography id="description-1">{{ description.description1 }}</CoreTypography>
      </div>
      <div class="order-4 lg:order-5 relative col-start-1 col-end-2 lg:col-start-8 lg:col-end-12" ref="work2">
        <CoreTypography id="description-2">{{ description.description5 }}</CoreTypography>
      </div>
      <div class="order-8 relative col-start-1 col-end-2 lg:col-start-2 lg:col-end-11 h-2/3">
        <div class="relateive overflow-hidden w-full h-full">
          <CoreImage v-if="data" provider="cloudinary" :src="data.at(2)!" :scale-factor="portfolioScaleFactor" :placeholder="pending" />
        </div>
      </div>
      <div class="order-7 relative col-start-1 cold-end-2 lg:col-start-2 lg:col-end-8 flex flex-col gap-y-4" ref="portfolioDescription">
        <CoreLabel>
          <div class="bg-tertiary-cream flex items-center justify-center p-2 mr-2 rounded-md">
            <Icon icon="carbon:portfolio"></Icon>
          </div>
          <CoreTypography class="max-sm:text-sm">un portofoliu cum nu ai mai vazut</CoreTypography>
        </CoreLabel>
        <CoreTypography id="portfolio-description">{{ description.description3 }}</CoreTypography>
        <CoreButton @click="navigateTo('/portfolio')">
          spre portofoliu
        </CoreButton>
      </div>
    </div>
  </SectionWrapper>
</template>