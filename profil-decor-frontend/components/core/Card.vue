<script lang="ts" setup>

defineSlots<{ default(): any, title(): any, content(): any }>();

withDefaults(
  defineProps<{ 
    isCustomCard: boolean
  }>(), 
  {
    isCustomCard: false
  }
);

</script>

<template>
  <div class="flex flex-col">
    <slot v-if="isCustomCard"></slot>
    <template v-else>
      <div class="flex border-b border-primary rounded-lg rounded-b-none px-4 py-2">
        <slot name="title"></slot>
      </div>
      <div class="flex p-4">
        <slot name="content"></slot>
      </div>
    </template>
  </div>
</template>