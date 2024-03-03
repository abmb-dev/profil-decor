<script lang="ts" setup>

defineSlots<{ default(): any, title(): any, content(): any }>();

withDefaults(
  defineProps<{ 
    id: string, 
    variant?: VariantProps<typeof sectionVariants>['variant'],
    isCustom?: boolean,
    class?: string, 
  }>(),
  {
    variant: 'default',
    isCustom: false
  }
);

// Component style
const sectionVariants = cva(
  'w-screen h-screen pt-16 flex items-center justify-center overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-section bg-dot-black/[0.2]',
        secondary: 'bg-section-anti'
      }
    }
  }
);

const containerVariants = cva(
  'w-full h-full flex justify-center font-dynamic',
  {
    variants: {
      isCustom: {
        true: 'items-center',
        false: 'gap-y-10 px-[10vw] flex-col items-left'
      }
    }
  }
)

</script>

<template>
  <section :id="id" :class="sectionVariants({ variant })" >
    <SectionBlocksGradientMask v-if="variant === 'default'" />
    <div :class="containerVariants({ isCustom })">
      <slot v-if="isCustom"></slot>
      <template v-else>
        <h1 class="text-2xl font-normal">
          <slot name="title"></slot>
        </h1>
        <slot name="content"></slot>
      </template>
    </div>
  </section>
</template>