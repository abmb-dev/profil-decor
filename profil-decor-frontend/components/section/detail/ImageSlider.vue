<script setup lang="ts">
import { Icon } from '@iconify/vue'

// Component configuration
const props = defineProps<{
  title: string,
  description: string,
  sources: string[]
}>();

// Sources business logic
type source = { source: string, currentIdx: number, previousIdx: number, direction: 'asc' | 'desc' };

const currentSource = ref<source>({
  source: props.sources.at(0)!,
  currentIdx: 0,
  previousIdx: props.sources.length,
  direction: 'asc'
});

const sourceText: ComputedRef<string> = computed(() => {
  const currentSourceText = (currentSource.value.currentIdx+1).toString().padStart(2, "0");
  const totalSourcesText = props.sources.length.toString().padStart(2, "0");
  return `${currentSourceText} - ${totalSourcesText}`;
});

const changeSource = (unit: number = 1) => {
  let previousIdx = currentSource.value.currentIdx;
  let currentIdx = currentSource.value.currentIdx += unit;

  if (currentIdx < 0) {
    currentIdx = props.sources.length - 1;
    previousIdx = 0;
  } else if (currentIdx >= props.sources.length) {
    currentIdx = 0;
    previousIdx = props.sources.length - 1;
  }

  currentSource.value.source = props.sources.at(currentIdx)!;
  currentSource.value.currentIdx = currentIdx;
  currentSource.value.previousIdx = previousIdx;
  resetTimer();
};

const getTranslationUnit = (sourceIndex: number): number => {
  let unit = 0;
  if (sourceIndex === currentSource.value.currentIdx) {
    unit = -sourceIndex * 100;
  } else {
    if (sourceIndex === currentSource.value.previousIdx) {
      if (sourceIndex === props.sources.length - 1) {
        unit = -100;
      } else {
        unit = -sourceIndex * 100;
      }
    } else {
      if (sourceIndex === props.sources.length - 1) {
        unit = -100;
      } else {
        unit = (sourceIndex + 1) * 100;
      }
    }
  }

  return unit;
};

const getVisibilityStatus = (sourceIndex: number): 'visible' | 'hidden' => {
  if (sourceIndex === currentSource.value.currentIdx) {
    return 'visible';
  } else {
    if (sourceIndex === currentSource.value.previousIdx) {
      return 'visible';
    } else {
      return 'hidden';
    }
  }
};

// Timer business logic
const timer = ref<NodeJS.Timeout>();
const delay = 8000;

const resetTimer = () => {
  clearInterval(timer.value);
  startTimer();
};

const startTimer = () => {
  timer.value = setInterval(changeSource, delay);
};

// Lifecycle hooks
onMounted(() => {
  startTimer();
});
</script>

<template>
  <div class="relative h-full w-full">
    <div class="relative w-full h-full flex">

      <div 
        v-for="(src, index) in sources"
        :key="src"
        class="shrink-0 w-full h-full transition-transform duration-1000 invisible"
        :style="{ transform: `translateX(${getTranslationUnit(index)}%)`, visibility: getVisibilityStatus(index) }"
      >
        <NuxtImg :src class="min-h-full pointer-events-none object-cover" format="webp" />
      </div>

      <!-- <div
        :style="{ transform: `translateX(${getTranslationUnit(currentSource])})` }" 
        :class="cn(
        'shrink-0 w-full h-full transition-transform duration-1000 translate-x-full invisible', 
        currentSource.currentIdx === 0 ? 'visible -translate-x-0' : (currentSource.previousIdx === 0 ? 'visible -translate-x-0' : 'invisible translate-x-full'),
      )">
        <NuxtImg :src="sources[0]" class="min-h-full pointer-events-non object-cover" fit="cover" format="webp" />
      </div>

      <div :class="cn('shrink-0 w-full h-full transition-transform duration-1000 translate-x-[200%] invisible', currentSource.currentIdx === 1 ? 'visible -translate-x-full' : (currentSource.previousIdx === 1 ? 'visible -translate-x-full' : 'invisible translate-x-[200%]'))">
        <NuxtImg :src="sources[1]" class="min-h-full pointer-events-non object-cover" fit="cover" format="webp" />
      </div>
      
      <div :class="cn(
        'shrink-0 w-full h-full transition-transform duration-1000 translate-x-[300%] invisible',
        currentSource.currentIdx === 2 ? 'visible -translate-x-[200%]' : (currentSource.previousIdx === 2 ? 'visible -translate-x-full' : 'invisible translate-x-[300%]')
      )">
        <NuxtImg :src="sources[2]" class="min-h-full pointer-events-non object-cover" fit="cover" format="webp" />
      </div> -->
    
    </div>
    <div class="absolute bottom-12 left-8 text-primary">
      <MoleculesBusinessLogo :title :description />
    </div>
    <div class="invisible lg:visible lg:absolute lg:bottom-1/2 lg:left-4 lg:flex lg:flex-col lg:items-center lg:gap-y-8 lg:text-primary">
      <div class="lg:-rotate-90">{{ sourceText }}</div>
    </div>
  </div>
</template>