<script setup lang="ts">
interface CloudinaryImage {
  src: string
}

interface ShowcaseImage extends CloudinaryImage {
  title: string;
  year: number;
  month: string;
}

const { data, error } = useFetch('/api/cloudinary/show');
const sources: Ref<ShowcaseImage[]> = ref([]);

if (data.value) {
  sources.value = data.value as ShowcaseImage[];
} else if (error.value) {
  // TODO
}
</script>

<template>
  <SectionWrapper id="showcase-section" :is-custom="false" :is-fixed-height="false" variant="secondary" class="p-8">
    <template #title>
      <h1 class="uppercase font-extra-dynamic">cateva dintre lucrarile noastre</h1>
    </template>
    <template #content>
      <SectionShowcaseImageSplide :items="sources" />
    </template>
  </SectionWrapper>
</template>