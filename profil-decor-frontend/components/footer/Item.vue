<script setup lang="ts">
// Component configuration
withDefaults(
  defineProps<{ title?: string, wrapperConfig?: string[], link?: { label: string, to: string, external?: boolean }}>(), 
  { 
    wrapperConfig: () => ['lg:col-span-3'],
    external: false
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
    <CoreLink 
      v-if="link"
      :to="link.to" 
      :target="link.external ? '_blank' : ''"
      class="uppercase underline lg:no-underline hover:underline hover:cursor-pointer underline-offset-8 text-sm"
    >
      {{ link.label }}
    </CoreLink>
  </div>
</template>