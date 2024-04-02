<script setup lang="ts">

defineProps<{ wrapperConfig?: string[] }>();
defineSlots<{ info(): any, action(): any }>();

</script>

<template>
  <div :class="cn('flex flex-col items-center margin-bottom-dynamic lg:mb-0 lg:flex-row lg:justify-between w-full', wrapperConfig)">
    <slot name="info"></slot>
    <slot name="action"></slot>
  </div>
</template>