<script setup lang="ts">

withDefaults(
  defineProps<{ wrapperConfig?: string[] }>(), 
  {
    wrapperConfig: () => ['lg:grid-cols-12 lg:gap-x-[1vw]']
  }
);

defineSlots<{ grid(): any }>();

</script>

<template>
  <div :class="cn('flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-[1vw] w-full', wrapperConfig)">
    <slot name="grid"></slot>
  </div>
</template>