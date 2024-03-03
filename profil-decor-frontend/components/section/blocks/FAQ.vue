<template>
  <SectionWrapper 
    id="faq-section"
    :isCustom="false"
    title="Intrebari frecvente"
  >
    <template #title>Intrebari frecvente</template>
    <template #content>
      <div class="flex w-full relative">
        <CoreAccordion />
        <div class="absolute top-4 left-4 w-full h-full bg-primary z-0"></div>
      </div>
    </template>
  </SectionWrapper>
  <!-- <section class="w-screen h-screen bg-section bg-dot-black/[0.2] flex flex-col gap-y-10 px-[10vw] font-dynamic justify-center items-left">
      <h1 class="text-2xl font-normal">Intrebari frecvente</h1>
      <div class="flex w-full relative">
        <CoreAccordion />
        <div class="absolute top-4 left-4 w-full h-full bg-primary z-0"></div>
      </div>
    </section> -->
</template>