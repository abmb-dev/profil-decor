<script lang="ts" setup>

defineSlots<{ title(): any, content(): any }>();

withDefaults(
  defineProps<{ 
    isTitleOnlyBg: boolean
  }>(), 
  {
    isTitleOnlyBg: false
  }
);

</script>

<template>
  <div class="flex flex-col border border-primary rounded-md">
    <div :class="cn('flex border-b border-primary rounded-md rounded-b-none px-4 py-2', isTitleOnlyBg ? 'bg-tertiary-cream' : '')">
      <slot name="title"></slot>
    </div>
    <div class="flex p-4">
      <slot name="content"></slot>
    </div>
  </div>
</template>