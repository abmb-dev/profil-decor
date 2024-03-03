<script setup lang="ts">
defineSlots<{ header(): any, icon(): any, title(): any, description(): any }>();
defineProps<{ title?: string, description?: string, icon?: string, className?: string}>();
</script>

<template>
  <div :class="cn(
    'row-span-1 group/bento transition duration-200 bg-secondary border border-primary justify-between flex flex-col p-4 hover:shadow-lg hover:border-transparent', 
    className)
  ">
    <slot name="header"></slot>
    <div class="group-hover/bento:translate-x-2 transition duration-200">
      <slot name="icon"></slot>
      <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
        <template v-if="title">{{ title }}</template>
        <slot name="title"></slot>
      </div>
      <div class="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
        <template v-if="description">{{ description }}</template>
        <slot name="description"></slot>
      </div>
    </div>
  </div>
</template>