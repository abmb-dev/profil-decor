
<template>
  <SectionWrapper id="reason-section" class="pb-4 h-auto lg:px-28">
    <template #content>
      <ul class="grid grid-cols-1 gap-y-8 2xl:grid-cols-2 2xl:gap-x-8">
        <SectionReasonCard class="mb-4 lg:mb-0" />
        <SectionReasonTeamCard class="block xl:hidden 2xl:block" />
        <div class="hidden xl:flex xl:justify-between 2xl:hidden gap-x-8">
          <SectionReasonSingleCard description="Ovidiu" class="w-1/2" />
          <SectionReasonSingleCard description="Magdalena" class="w-1/2" />
        </div>
      </ul>
    </template>
  </SectionWrapper>  
</template>
