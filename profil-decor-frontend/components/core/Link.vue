<script setup lang="ts">
import type { NuxtLink } from '#build/components';

// Component configuration
const props = withDefaults(
  defineProps<{
    to: string,
    target?: string,
    variant?: styleVariant & 'default' | 'secondary';
  }>(), 
  {
    variant: 'default'
  }
);

// Component style
const linkVariants = cva(
  'uppercase group relative font-light focus:outline-none \
  focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 \
  focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed \
  disabled:opacity-75 py-0 after:absolute after:bottom-0 after:inset-x-2.5 after:block after:h-[2px] after:mt-2',
  {
    variants: {
      variant: {
        default: 'text-primary',
        secondary: 'text-secondary',
      }
    }
  }
);
</script>

<template>
  <NuxtLink v-bind="props" :class="linkVariants({ variant })">
    <slot></slot>
  </NuxtLink>
</template>