<script lang="ts" setup>

defineSlots<{ title(): any, content(): any }>();

</script>

<template>
  <div class="flex flex-col gap-y-4 border border-primary rounded-md p-4">
    <div class="flex">
      <slot name="title"></slot>
    </div>
    <div class="flex">
      <slot name="content"></slot>
    </div>
  </div>
</template>