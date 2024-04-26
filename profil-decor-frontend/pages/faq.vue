<script lang="ts" setup>
const { data, error, pending } = useFetch('/api/faq/faq', {
  transform: (items => {
    return items.map((x, index) => { return { title: x.question, content: x.answer, value: index.toString() }});
  })
});
</script>

<template>
  <SectionWrapper id="faq-section" class="mt-[72px] py-24 overflow-y-auto">
    <template #title>
      <CoreTypography tag="h1" class="font-semibold mr-4 pt-12">Intrebari frecvente</CoreTypography>
    </template>
    <template #content>
      <CoreTypography v-if="pending">Loading...</CoreTypography>
      <CoreAccordion v-else :items="data ?? []" />
    </template>
  </SectionWrapper>
</template>