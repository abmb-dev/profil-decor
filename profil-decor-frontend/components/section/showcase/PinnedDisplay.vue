<script setup lang="ts">
import type { pin } from './types';

const props = defineProps<{
  src: string,
  activePin: pin | null
}>();

const containerStyleConfig = reactive({
  transform: 'rotateX(0deg)'
});

watch(() => props.activePin, () => {
  if (props.activePin) {
    containerStyleConfig.transform = 'rotateX(40deg) scale(0.8)';
  } else {
    containerStyleConfig.transform = 'rotateX(0deg) scale(1)';
  }
});
</script>

<template>
  <div class="w-full h-auto flex justify-center">
      <div class="w-full relative flex justify-center transition-all duration-700 z-10" :style="{perspective: '1000px' }">
        <div 
          :class="cn('flex w-full relative transition-all duration-700', activePin ? 'border-transparent' : 'border border-border-secondary')" 
          :style="containerStyleConfig"
        >
          <NuxtImg :class="cn('block max-w-full transition duration-700', activePin ? 'grayscale-0' : 'grayscale' )" :src />
          <div 
            :class="cn('absolute bg-secondary w-px')" 
            :style="{ top: `${activePin?.top}%`, left: `${activePin?.left}%` }">
            <span 
            :class="cn('absolute bg-secondary w-4 h-4 rounded-full tr -translate-x-2 -translate-y-2', activePin ? 'h-4' : 'h-0')"
            ></span>
          </div>
          <div 
            class="bg-dot-black/[0.2]"  
            :class="cn('absolute top-0 left-0 w-full h-full -z-10 opacity-0 transition-all duration-500', activePin ? 'opacity-100 bg-secondary' : 'opacity-0')" 
            :style="{ transform: 'rotateX(40deg)'}"
          >
          </div>
        </div>
      </div>
  </div>
</template>