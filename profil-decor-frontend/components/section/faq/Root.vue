<script setup lang="ts">
import type { CoreAccordion } from '#build/components';

const items = ref<any[] | []>([]);
const { data, pending, error } = useFetch("/api/faq/faq");

if (data.value) {
  items.value = data.value.map((x, index) => { return { title: x.question, content: x.answer, value: index }}).slice(0, 5);
} else if (error.value) {
  // TODO
}

</script>

<template>
  <SectionWrapper id="faq-section" :is-full-screen="true">
    <template #title>
      <h1 class="font-extra-dynamic uppercase">Intrebari frecvente</h1>
    </template>
    <template #content>
      <span v-if="pending">Loading...</span>
      <CoreAccordion v-else :items />
    </template>
  </SectionWrapper>
</template>