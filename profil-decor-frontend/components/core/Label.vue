<script lang="ts" setup>
defineSlots<{ default(): any}>();
</script>

<template>
  <div class="flex items-center text-base uppercase font-bold tracking-widest">
    <slot></slot>
  </div>
</template>