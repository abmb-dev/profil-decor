<script lang="ts" setup>

defineSlots<{ default(): any, title(): any, content(): any }>();
withDefaults(defineProps<{ id: string, className?: string, isCustom?: boolean, isFullScreen?: boolean }>(), { isCustom: false, isFullScreen: false });

const sectionVariants = cva(
  'w-screen h-auto bg-secondary first-of-type:pt-0 pt-16 flex items-center justify-center overflow-hidden z-10',
  {
    variants: {
      isFullScreen: {
        true: 'h-screen',
        false: 'h-auto'
      }
    }
  }
);

const containerVariants = cva(
  'w-full h-full text-primary flex justify-center font-dynamic',
  {
    variants: {
      isCustom: {
        true: 'items-center',
        false: 'gap-y-10 px-[5vw] flex-col items-left'
      }
    }
  }
);

</script>

<template>
  <section :id="id" :class="[sectionVariants({ isFullScreen }), containerVariants()]">
    <div :class="containerVariants({ isCustom })">
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