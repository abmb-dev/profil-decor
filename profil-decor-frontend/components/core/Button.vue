<script setup lang="ts">
// Component configuration
withDefaults(
  defineProps<
  { 
    variant?: VariantProps<typeof buttonVariants>['variant'], 
    size?: VariantProps<typeof buttonVariants>['size'] 
  }>(), 
  {
    variant: 'default',
    size: 'default',
  }
);

// Component style
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap border border-primary rounded-xl uppercase text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-transparent hover:text-primary",
        outline:
          "bg-secondary"
      },
      size: {
        default: "h-9 px-4 py-6",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Component business
const emit = defineEmits(['click']);

const onClick = () => {
  emit('click');
};
</script>

<template>
  <button 
    :class="buttonVariants({ variant, size })"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>