<script setup lang="ts">
import { Icon } from '@iconify/vue'

// Component configuration
const props = defineProps<{
  title: string,
  description: string,
  sources: string[]
}>();

// Sources business logic
const currentSrcIdx = ref(0);

const sourceText: ComputedRef<string> = computed(() => {
  const currentSourceText = (currentSrcIdx.value+1).toString().padStart(2, "0");
  const totalSourcesText = props.sources.length.toString().padStart(2, "0");
  return `${currentSourceText} - ${totalSourcesText}`;
});

const changeSource = (unit: number = 1) => {
  currentSrcIdx.value += unit;
  if (currentSrcIdx.value < 0) {
    currentSrcIdx.value = props.sources.length - 1;
  } else if (currentSrcIdx.value >= props.sources.length) {
    currentSrcIdx.value = 0;
  }
  resetTimer();
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
  <div class="relative h-full">
    <div :class="['w-full h-full', { 'hidden': src !== sources[currentSrcIdx] }]" v-for="src in sources" :key="src" >
      <SectionDetailImage :src />
    </div>
    <div class="absolute bottom-12 left-8 text-primary">
      <MoleculesBusinessLogo :title :description />
    </div>
    <div class="invisible lg:visible lg:absolute lg:bottom-1/2 lg:left-4 lg:flex lg:flex-col lg:items-center lg:gap-y-8 lg:text-primary">
      <Icon icon="bi:chevron-compact-up" class="w-4 h-4 hover:cursor-pointer" @click="() => changeSource(-1)" />
      <div class="lg:-rotate-90">{{ sourceText }}</div>
      <Icon icon="bi:chevron-compact-down" class="w-4 h-4 hover:cursor-pointer" @click="() => changeSource()" />
    </div>
  </div>
</template>