<script setup lang="ts">
import { Icon } from '@iconify/vue';
const reasons = useAppConfig().meta.business.reason;
</script>

<template>
  <SectionWrapper id="reason-section" :is-custom="false" :is-full-screen="false" class="pb-4">
    <template #title>
      <h1 class="font-extra-dynamic uppercase">De ce sa ne alegi pe noi?</h1>
    </template>
    <template #content>
      <ul class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-y-8 gap-x-8">
        <CoreCard :is-title-only-bg="true">
          <template #title>
            <Icon icon="material-symbols:check-circle-outline" class="w-8 h-8 lg:w-6 lg:h-6" />
          </template>
          <template #content>
            <span class="first-letter:uppercase font-normal font-dynamic">{{ reasons.reason1 }}</span>
          </template>
        </CoreCard>
        <CoreCard :is-title-only-bg="true">
          <template #title>
            <Icon icon="material-symbols:check-circle-outline" class="w-8 h-8 lg:w-6 lg:h-6" />
          </template>
          <template #content>
            <span class="first-letter:uppercase font-normal font-dynamic">{{ reasons.reason2 }}</span>
          </template>
        </CoreCard>
        <CoreCard :is-title-only-bg="true">
          <template #title>
            <Icon icon="material-symbols:check-circle-outline" class="w-8 h-8 lg:w-6 lg:h-6" />
          </template>
          <template #content>
            <div>
              <span class="first-letter:uppercase font-normal font-dynamic">{{ reasons.reason3_1 }}</span>
              <span class="uppercase font-medium font-dynamic">3d gratuit</span>
              <span class="font-normal font-dynamic">{{ reasons.reason3_2 }}</span>
            </div>
          </template>
        </CoreCard>
        <CoreCard :is-title-only-bg="true">
          <template #title>
            <Icon icon="material-symbols:check-circle-outline" class="w-8 h-8 lg:w-6 lg:h-6" />
          </template>
          <template #content>
            <div>
              <span class="first-letter:uppercase font-normal font-dynamic">{{ reasons.reason4_1 }}</span>
              <span class="uppercase font-medium font-dynamic">plata in rate fixe fara dobanda</span>
              <span class="font-normal font-dynamic">{{ reasons.reason4_2 }}</span>
            </div>
          </template>
        </CoreCard>
      </ul>
    </template>
  </SectionWrapper>  
</template>