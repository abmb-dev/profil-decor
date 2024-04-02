<script setup lang='ts'>
// Component configuration
type toggleButtonProps = { isDefaultVariant?: boolean }
const props = withDefaults(defineProps<toggleButtonProps>(), {
  isDefaultVariant: true
});

// Component style
const beforeLine = computed(() => {
  return cn('transition-all before:w-full before:h-[1px]', props.isDefaultVariant ? 'before:bg-primary' : 'before:bg-gray-100');
});

const afterLine = computed(() => {
  return cn('transition-all after:w-full after:h-[1px]', props.isDefaultVariant ? 'after:bg-primary' : 'after:bg-gray-100');
});

// Component business
const emit = defineEmits(['menuClick']);

const onClick = () => {
  emit('menuClick');
};
</script>

<template>
  <button 
    type="button" 
    class="flex flex-col items-center justify-center w-8 lg:hidden"
    @click="onClick"
  >
    <div 
      :class="cn('flex flex-col justify-evenly w-full gap-y-2', 
      beforeLine, 
      afterLine)
    ">
    </div>
  </button>
</template>