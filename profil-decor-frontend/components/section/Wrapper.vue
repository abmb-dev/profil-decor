<script lang="ts" setup>

withDefaults(
  defineProps<{ 
    id: string, 
    className?: string, 
    isCustom?: boolean, 
    isFullScreen?: boolean 
  }>(), 
  { 
    isCustom: false, 
    isFullScreen: false 
  }
);

defineSlots<{ 
  default(): any, 
  title(): any, 
  content(): any 
}>();

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
        true: 'flex-col items-center',
        false: 'gap-y-10 px-[6vw] flex-col items-left'
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
        <div class="flex justify-center lg:justify-start">
          <slot name="title"></slot>
        </div>
        <slot name="content"></slot>
      </template>
    </div>
  </section>
</template>