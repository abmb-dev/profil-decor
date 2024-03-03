<script setup lang="ts">
import { TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'radix-vue';
type tooltipContentProps = InstanceType<typeof TooltipContent>['$props'];

defineSlots<{ default(): any}>();

withDefaults(
  defineProps<{ text?: string, side?: tooltipContentProps['side'], sideOffset?: tooltipContentProps['sideOffset'] }>(),
  {
    side: 'top'
  }
);

// Component style
const tooltipVariants = cva(
  "data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-primary font-light select-none rounded-xl border border-primary bg-secondary px-2 py-2 leading-none will-change-[transform,opacity]"
)
</script>

<template>
<TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger>
        <slot></slot>
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent :class="tooltipVariants()" :side="side" :side-offset="16"
        >
          {{ text }}
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>