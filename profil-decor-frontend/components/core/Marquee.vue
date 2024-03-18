<script setup lang="ts">
defineProps<{
  content: string
}>();

const isAnimationRunning = ref(true);

const onMarqueeHover = (isHovered: boolean = true) => {
  isAnimationRunning.value = !isHovered;
}

</script>


<template>
  <div 
    class="relative h-[10vw] py-[2vw] bg-primary w-full border border-solid flex justify-center items-center cursor-pointer"
    @mouseenter="() => onMarqueeHover()"
    @mouseleave="() => onMarqueeHover(false)"
  >
    <p 
      class="absolute uppercase text-secondary font-extrabold text-[8vw] translate-x-full" 
      :class="[isAnimationRunning ? 'marquee' : 'marquee marquee-paused']"
    >
      {{ content }}
    </p>
    <p 
      class="absolute uppercase text-secondary font-extrabold text-[8vw] translate-x-full" 
      :class="[isAnimationRunning ? 'marquee' : 'marquee marquee-paused']"
    >
      {{ content }}
    </p>
  </div>
</template>
<style>

.marquee {
  animation-play-state: running;
  animation: marquee 15s linear infinite;
}

.marquee-paused {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
      transform: translate(0);
  }
  100% {
      transform: translate(-100%);
  }
}

</style>