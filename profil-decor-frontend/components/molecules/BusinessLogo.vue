<script setup lang="ts">

defineProps<{
  title: string,
  description: string
}>();

</script>

<template>
  <div class="flex items-baseline">
    <span class="font-double-dynamic font-semibold mr-1">{{ title }}</span>
    <span class="font-dynamic font-medium">{{ description }}</span>
  </div>
</template>