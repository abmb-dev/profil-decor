<script setup lang="ts">
const title = useAppConfig().meta.business.name;
const description = useAppConfig().meta.business.placement.shortLocation;
const sources = [
  '/img/detail/detail1.jpg',
  '/img/detail/detail2.jpg',
  '/img/detail/detail3.jpg',
];
</script>

<template>
  <SectionBlocksWrapper id="showcase-section" :is-custom="true" :is-fixed-height="false" variant="default">
    <SectionDetailImageSlider :title :description :sources />
  </SectionBlocksWrapper>
</template>