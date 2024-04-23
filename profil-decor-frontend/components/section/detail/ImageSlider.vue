<script setup lang="ts">
// Component configuration
const props = defineProps<{
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
        <NuxtImg 
          :src
          :preload="true"
          format="avif" 
          provider="cloudinary"
          class="min-h-full pointer-events-none object-cover" 
        />
      </div>
    </div>
    <div class="absolute bottom-12 left-8 text-primary">
      <MoleculesBusinessLogo />
    </div>
    <div class="invisible lg:visible lg:absolute lg:bottom-1/2 lg:left-4 lg:flex lg:flex-col lg:items-center lg:gap-y-8 lg:text-primary">
      <div class="lg:-rotate-90">{{ sourceText }}</div>
    </div>
  </div>
</template>