<script setup lang="ts">
// Component configuration
defineSlots<{ default(): any }>();

withDefaults(
  defineProps<{
    pauseOnHover: boolean
  }>(),
  {
    pauseOnHover: true
  }
);
</script>

<template>
  <ODynamicMarquee 
    :pauseOnHover
    :clone="true"
    class="bg-primary !w-[150%] flex justify-center items-center cursor-pointer [&>*]:mr-8"
  >
    <slot></slot>
  </ODynamicMarquee>
</template>