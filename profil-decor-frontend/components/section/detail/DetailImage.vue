<script setup lang="ts">

defineProps<{
  src: string
}>();

</script>

<template>
  <NuxtImg :src class="object-cover min-h-full pointer-events-none" />
</template>