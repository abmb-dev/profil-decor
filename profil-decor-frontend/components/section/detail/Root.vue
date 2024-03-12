<script setup lang="ts">
const title = useAppConfig().meta.businessInfo.name;
const description = useAppConfig().meta.businessInfo.placementInformation.shortLocation;
const sources = [
  '/img/detail1.jpg',
  '/img/detail2.jpg',
  '/img/detail3.jpg',
];
</script>

<template>
  <SectionBlocksWrapper id="showcase-section" :is-custom="true" :is-fixed-height="false" variant="default">
    <SectionDetailImageSlider :title :description :sources />
  </SectionBlocksWrapper>
</template>