<script setup lang="ts">
withDefaults(
  defineProps<{
    pauseOnHover: boolean
  }>(),
  {
    pauseOnHover: true
  }
);

defineSlots<{ default(): any }>();
</script>

<template>
  <OMarquee 
    :pauseOnHover
    :clone="true"
    class="bg-primary !w-full flex justify-center items-center cursor-pointer [&>*]:mr-8"
  >
    <slot></slot>
  </OMarquee>
</template>