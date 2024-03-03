<template>
  <SectionBlocksWrapper 
    id="faq-section"
    :isCustom="false"
  >
    <template #title>Intrebari frecvente</template>
    <template #content>
      <div class="flex w-full relative">
        <CoreAccordion />
        <div class="absolute top-4 left-4 w-full h-full bg-primary z-0"></div>
      </div>
    </template>
  </SectionBlocksWrapper>
</template>