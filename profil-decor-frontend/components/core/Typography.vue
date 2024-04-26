<script lang="ts" setup>
const typograpyVariant = cva('font-light leading-relaxed', {
  variants: {
    tag: {
      h1: "text-3xl lg:text-6xl",
      h2: "text-2xl lg:text-4xl",
      h3: "text-xl lg:text-2xl",
      span: "text-lg lg:text-xl",
      p: "text-base lg:text-lg",
      li: "text-base lg:text-lg",
    },
    bold: {
      true: "!font-medium",
    },
    italic: {
      true: "italic"
    },
    primary: {
      true: "text-primary",
      false: "text-secondary"
    }
  }
})

const props = withDefaults(
  defineProps<{
    tag?: "h1" | "h2" | "h3" | "span" | "p" | "li",
    bold?: boolean,
    italic?: boolean,
    primary?: boolean
  }>(),
  {
    tag: "p",
    bold: false,
    italic: false,
    primary: true
  }
);

</script>

<template>
  <component :is="tag" v-bind="props" :class="typograpyVariant({ tag, bold, italic })">
    <slot></slot>
  </component>
</template>