<script setup lang="ts">

withDefaults(
  defineProps<{ title?: string, wrapperConfig?: string[], link?: { label: string, to: string }}>(), 
  { 
    wrapperConfig: () => ['lg:col-span-3'],
  }
);

defineSlots<{ content(): any, additional(): any }>();

</script>

<template>
  <div :class="cn('text-center font-normal sm:block mx:auto lg:text-left lg:col-span-3 margin-bottom-dynamic lg:margin-bottom-double-dynamic', wrapperConfig)">
    <div v-if="title" class="uppercase margin-bottom-dynamic">
      {{ title }}
    </div>
    <slot name="content"></slot>
    <NuxtLink 
      v-if="link"
      :to="link.to" 
      class="uppercase underline lg:no-underline hover:underline hover:cursor-pointer underline-offset-8 text-sm"
    >
      {{ link.label }}
    </NuxtLink>
  </div>
</template>