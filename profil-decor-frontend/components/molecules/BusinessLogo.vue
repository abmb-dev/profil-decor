<script setup lang="ts">
const name = useAppConfig().meta.business.name;
const location = useAppConfig().meta.business.placement.shortLocation;
</script>

<template>
  <div class="flex items-baseline">
    <span class="text-2xl lg:text-6xl font-semibold mr-1">{{ name }}</span>
    <span class="text-base lg:text-2xl font-medium">{{ location }}</span>
  </div>
</template>