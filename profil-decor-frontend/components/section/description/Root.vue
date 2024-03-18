<script setup lang="ts">
const description = useAppConfig().meta.business.description;
</script>

<template>
  <SectionBlocksWrapper id="first-description-section" :is-custom="true" :is-full-screen="false" class="px-8">
    <h1 class="font-double-dynamic font-medium indent-8">
      {{ description.description2 }}
    </h1>
    <div class="grid grid-cols-1 gap-x-0 gap-y-8 lg:grid-cols-12 lg:gap-x-4 lg:gap-y-0">
      <div class="relative col-start-1 col-end-2 lg:col-start-2 lg:col-span-5 flex flex-col gap-y-8 lg:self-end overflow-hidden" ref="work1">
        <h3 class="font-dynamic font-normal text-pretty">
          {{ description.description1 }}
        </h3>
        <div class="relative overflow-hidden w-full h-full">
          <NuxtImg src="/img/work/work1.jpg" fit="cover" format="webp" placeholder />
        </div>
      </div>
      <div class="col-start-1 col-end-2 lg:col-start-8 lg:col-span-4 flex flex-col gap-y-8" ref="work2">
        <div class="relative overflow-hidden w-full h-full">
          <NuxtImg src="/img/work/work2.jpg" fit="cover" format="webp" placeholder />
        </div>
        <h3 class="font-dynamic font-normal text-pretty">
          {{ description.description5 }}
        </h3>
      </div>
    </div>
  </SectionBlocksWrapper>
</template>