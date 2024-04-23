<script setup lang="ts">

interface CloudinaryImage {
  src: string
}

const { data, error } = await useFetch('/api/cloudinary/details');

const sources: Ref<string[]> = ref([]);

if (data.value) {
  sources.value = data.value.map((image: CloudinaryImage) => image.src)
} else if (error.value) {
  // TODO
}

</script>

<template>
  <SectionWrapper id="showcase-section" :is-custom="true" :is-fixed-height="false" variant="default">
    <SectionDetailImageSlider :sources />
  </SectionWrapper>
</template>