<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core';

const description = useAppConfig().meta.business.description;
const email = useAppConfig().meta.business.contact.email;

const { initLineRevealAnimation } = useGsapAnimation();
const { windowY } = useWindowScroll();

// Custom model description animation business logic
const customModelDescription = ref(null);
const isModelDescriptionVisible = useElementVisibility(customModelDescription);
const wasDescriptionAnimated = ref(false);

watch(isModelDescriptionVisible, () => {
  if (isModelDescriptionVisible.value && !wasDescriptionAnimated.value) {
    initLineRevealAnimation('#model-description');
  } else {
    wasDescriptionAnimated.value = true;
  }
});

watch(windowY, () => {
  if (windowY.value === 0) {
    wasDescriptionAnimated.value = false;
  }
});

onMounted(() => {
  if (windowY.value > 0) {
    wasDescriptionAnimated.value = true;
  }
}); 
</script>

<template>
  <SectionBlocksWrapper id="first-description-section" :is-custom="true" :is-full-screen="false" class="px-8">
    <div class="grid grid-cols-1 gap-x-0 gap-y-8 lg:grid-cols-12 lg:gap-x-4 pb-16">
      <div class="order-1 relative col-start-1 col-end-2 lg:col-start-2 lg:col-end-6 flex flex-col gap-y-2 lg:self-center" ref="customModelDescription">
        <span class="font-dynamic uppercase">viseaza si noi vom creea</span>
        <h1 class="font-dynamic leading-dynamic font-normal text-pretty" id="model-description">
          {{ description.description6 }}
        </h1>
      </div>
      <div class="order-2 relative col-start-1 col-end-2 lg:col-start-8 lg:col-end-12 flex items-center justify-center">
        <SectionCustomWork3D />
      </div>
    </div>
    <CoreDynamicMarquee>
      <p class="uppercase text-secondary font-extrabold text-[8vw]">{{ email }}</p>
    </CoreDynamicMarquee>
  </SectionBlocksWrapper>
</template>