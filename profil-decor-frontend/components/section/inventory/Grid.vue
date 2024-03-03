<script setup lang="ts">
defineProps<{ className?: string }>();
</script>

<template>
  <div :class="cn('grid md:auto-rows-max grid-cols-1 md:grid-cols-5 gap-4 relative', className)">
    <slot></slot>
  </div>
</template>