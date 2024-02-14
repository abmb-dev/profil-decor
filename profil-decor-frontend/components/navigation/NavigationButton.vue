<script setup lang='ts'>
interface Props { variant?: string }

const props = withDefaults(defineProps<Props>(), {
  variant: 'text-primary'
});

const emit = defineEmits(['menuClick']);

const onClick = () => {
  emit('menuClick');
}

</script>

<template>
  <button 
    type="button" 
    :class="cn('flex items-center justify-center w-[5vw] h-[5vw] lg:hidden')"
    @click="onClick"
  >
    <div :class="cn('flex flex-col justify-evenly w-full h-full')">
      <div :class="cn('h-[1px] w-full inline-block', props.variant)" />
      <div :class="cn('h-[1px] w-full inline-block', props.variant)" />
      <div :class="cn('h-[1px] w-full inline-block', props.variant)" />
    </div>
  </button>
</template>