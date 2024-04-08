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
      <ul class="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-8">
        <CoreCard
          v-for="reason in reasons"
          :key="reason"
          class="transition-transform group/icon hover:scale-105"
        >
          <template #title>
            <Icon icon="material-symbols:check-circle-outline" class="w-8 h-8 lg:w-6 lg:h-6 group-hover/icon:rotate-45" />
          </template>
          <template #content>
            <span class="first-letter:uppercase font-normal font-dynamic">{{ reason }}</span>
          </template>
        </CoreCard>
      </ul>
    </template>
  </SectionWrapper>  
</template>