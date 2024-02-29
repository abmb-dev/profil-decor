<script setup lang="ts">
defineProps<{ text?: string }>();
defineSlots<{ default(): any}>();
</script>

<template>
  <div :class="{'group relative': text }">
    <div class="absolute invisible top-8 group-hover:visible min-w-max bg-transparent border border-gray-100 px-1 py-1 text-sm rounded-md z-50">  
      <p class=" leading-2 text-primary px-1">{{ text }}</p>
      <svg class="absolute z-10 bottom-[-10px] " width="16" height="10" viewBox="0 0 16 10" fill="transparent" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10L0 0L16 1.41326e-06L8 10Z" fill="transparent"/>
      </svg>
    </div>
    <slot></slot>
  </div>
</template>