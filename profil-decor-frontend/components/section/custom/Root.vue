<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core';

const appConfig = useAppConfig();

// Component configuration
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
  <SectionWrapper id="first-description-section" :is-custom="true" class="py-24 px-8 lg:px-12">
    <div class="grid grid-cols-1 gap-x-0 gap-y-8 lg:grid-cols-12 lg:gap-x-4 pb-16">
      <div class="order-1 relative col-start-1 col-end-2 lg:col-start-2 lg:col-end-7 flex flex-col gap-y-4 lg:self-center py-12" ref="customModelDescription">
        <CoreLabel>
          <div class="bg-tertiary-cream flex items-center justify-center p-2 mr-2 rounded-md">
            <Icon icon="carbon:bastion-host" />
          </div>
          <CoreTypography>viseaza si noi vom creea</CoreTypography>
        </CoreLabel>
        <CoreTypography id="model-description">{{ description.description6 }}</CoreTypography>
        <CoreButton @click="navigateTo('/contact')">
          nu ezita sa ne contactezi
        </CoreButton>
      </div>
      <div class="order-2 relative col-start-1 col-end-2 lg:col-start-8 lg:col-end-12 flex items-center justify-center">
        <SectionCustomWork3D />
      </div>
    </div>
    <CoreDynamicMarquee>
      <p class="uppercase text-primary font-extrabold text-[8vh] xl:text-[8vw]">Nu ezita sa ne contactezi!</p>
    </CoreDynamicMarquee>
    <CoreDynamicMarquee direction="reverse" class="bg-primary">
      <p 
        class="uppercase text-secondary font-extrabold text-[8vh] xl:text-[8vw]"
        @click="navigateTo(`mailto:${appConfig.meta.business.contact.email}`, { external: true })"
      >
        {{ email }}
      </p>
    </CoreDynamicMarquee>
  </SectionWrapper>
</template> 