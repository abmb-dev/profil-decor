<script setup lang="ts">
const { data, pending, error } = useFetch("/api/faq/faq", {
  transform: (items => {
    return items.map((x, index) => { return { title: x.question, content: x.answer, value: index.toString() }}).slice(0, 5)
  })
});

</script>

<template>
  <SectionWrapper id="faq-section" :is-full-screen="true">
    <template #content>
      <p v-if="pending">Loading...</p>
      <template v-else>
        <CoreLabel>
          <div class="bg-tertiary-cream flex items-center justify-center p-2 mr-2 rounded-md">
            <Icon icon="ic:baseline-support-agent"></Icon>
          </div>
          <CoreTypography class="max-sm:text-sm">cateva dintre intrebarile frecvente pe care le primim</CoreTypography>
        </CoreLabel>
        <CoreAccordion :items="data ? data : []" />
      </template>
    </template>
  </SectionWrapper>
</template>