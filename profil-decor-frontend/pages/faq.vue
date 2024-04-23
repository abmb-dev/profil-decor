<script lang="ts" setup>
const { data, error, pending } = useFetch('/api/faq/faq', {
  transform: (items => {
    return items.map((x, index) => { return { title: x.question, content: x.answer, value: index.toString() }});
  })
});
</script>

<template>
  <SectionWrapper id="faq-section" :is-full-screen="true" class="mt-[72px]">
    <template #title>
      <h1 class="text-2xl lg:text-6xl text-primary font-semibold mr-4" v-if="!pending && data">Intrebari frecvente</h1>
    </template>
    <template #content>
      <CoreTypography v-if="pending">Loading...</CoreTypography>
      <CoreAccordion :items="data ?? []" v-else />
    </template>
  </SectionWrapper>
</template>