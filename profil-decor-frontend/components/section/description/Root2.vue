<script setup lang="ts">
const description = useAppConfig().meta.business.description;
</script>

<template>
  <SectionBlocksWrapper id="second-description-section" class-name="pt-20" :is-custom="true" :is-full-screen="false">
    <div class="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-4 lg:self-end">
      <div class="col-start-2 col-span-9 flex flex-col gap-y-8">
        <NuxtImg src="/img/work/work3.jpg" class="object-cover h-1/2 w-full" />
        <h3 class="font-dynamic">
          {{ description.description3 }}
        </h3>
        <CoreButton class="w-auto self-center lg:self-start">spre portofoliu</CoreButton>
      </div>
    </div>
    <CoreMarquee content="@profildecor.business" />
  </SectionBlocksWrapper>
</template>