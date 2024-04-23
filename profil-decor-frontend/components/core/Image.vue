<script lang="ts" setup>

interface Props {
  provider: string;
  src: string;
  format?: string;
  placeholder?: boolean;
  scaleFactor?: number;
}

const props = withDefaults(
  defineProps<Props>(),
  {
    format: 'avif',
    placeholder: false,
    scaleFactor: 1
  }
);

</script>

<template>
  <div class="relative overflow-hidden w-full h-full">
    <NuxtImg 
      :props
      provider="cloudinary"
      :src="props.src"
      :style="{ transform: `scale(${scaleFactor})`}" 
    />
  </div>
</template>