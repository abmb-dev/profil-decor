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
  <div class="relative h-auto max-w-full">
    <div class="relative group/pin cursor-pointer">
      <div class="transition-all duration-700 z-10" :style="{perspective: '1000px', transform: 'rotateX(70deg) translateZ(0deg)' }">
        <div class="relative transition-all duration-700" :style="containerStyleConfig">
          <NuxtImg class="h-auto max-w-max" :src />
        </div>
        <div 
          v-if="activePin"
          class="absolute top-4 left-4 w-full h-full bg-secondary bg-dot-black/[0.2] -z-10" 
          :style="containerStyleConfig">
        </div>
      </div>
    </div>
    <div 
      :class="cn('absolute bg-secondary w-px', activePin ? 'h-80' : 'h-0')" 
      :style="{ top: `${activePin?.top}%`, left: `${activePin?.left}%` }">
      <span 
      :class="cn('absolute bg-secondary w-4 h-4 rounded-full tr -translate-x-2 -translate-y-2', activePin ? 'h-4' : 'h-0')"
      ></span>
    </div>
  </div>
</template>