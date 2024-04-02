<script setup lang="ts">
const name = useAppConfig().meta.business.name;
const location = useAppConfig().meta.business.placement.shortLocation;
</script>

<template>
  <div class="flex items-baseline">
    <span class="font-double-dynamic font-semibold mr-1">{{ name }}</span>
    <span class="font-dynamic font-medium">{{ location }}</span>
  </div>
</template>