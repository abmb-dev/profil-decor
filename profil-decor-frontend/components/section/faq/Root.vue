<script setup lang="ts">
import type { CoreAccordion } from '#build/components';

const faqItems = [
  {
    value: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'item-2',
    title: 'Is it unstyled?',
    content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.',
  },
  {
    value: 'item-3',
    title: 'Can it be animated?',
    content: 'Yes! You can use the transition prop to configure the animation.',
  },
];

</script>

<template>
  <SectionWrapper id="faq-section" :is-full-screen="true">
    <template #title>
      <h1 class="font-extra-dynamic uppercase">Intrebari frecvente</h1>
    </template>
    <template #content>
      <CoreAccordion :items="faqItems" />
    </template>
  </SectionWrapper>
</template>