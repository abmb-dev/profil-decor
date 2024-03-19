<script setup lang="ts">
</script>

<template>
  <SectionBlocksWrapper id="showcase-section" :is-custom="false" :is-fixed-height="false" variant="secondary" class="p-8">
    <template #title>
      <h1 class="uppercase font-extra-dynamic">cateva dintre lucrarile noastre</h1>
    </template>
    <template #content>
      <MoleculesImageSplide />
    </template>
  </SectionBlocksWrapper>
</template>