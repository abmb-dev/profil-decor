<script lang="ts" setup>

defineSlots<{ default(): any, title(): any, content(): any }>();

withDefaults(
  defineProps<{ 
    id: string, 
    variant?: VariantProps<typeof sectionVariants>['variant'],
    isCustom?: boolean,
    isBigger?: boolean,
    className?: string, 
  }>(),
  {
    variant: 'default',
    isCustom: false,
    isBigger: false
  }
);

// Component style
const sectionVariants = cva(
  'w-screen h-screen pt-16 flex items-center justify-center overflow-hidden z-10',
  {
    variants: {
      variant: {
        default: 'bg-section bg-dot-black/[0.2]',
        secondary: 'bg-section-anti'
      },
      isBigger: {
        true: 'h-auto'
      }
    }
  }
);

const containerVariants = cva(
  'w-full h-full flex justify-center font-dynamic',
  {
    variants: {
      variant: {
        default: 'text-primary',
        secondary: 'text-secondary'
      },
      isCustom: {
        true: 'items-center',
        false: 'gap-y-10 px-[5vw] flex-col items-left'
      }
    }
  }
)

</script>

<template>
  <section :id="id" :class="sectionVariants({ variant, isBigger })" >
    <SectionBlocksGradientMask v-if="variant === 'default'" />
    <div :class="containerVariants({ isCustom, variant })">
      <slot v-if="isCustom"></slot>
      <template v-else>
        <h1 class="font-double-dynamic font-normal">
          <slot name="title"></slot>
        </h1>
        <slot name="content"></slot>
      </template>
    </div>
  </section>
</template>