<script setup lang="ts">
const reasons = useAppConfig().meta.business.reason;
</script>

<template>
  <CoreCard :is-custom-card="true" class="rounded-3xl bg-primary text-secondary leading-relaxed p-12">
    <CoreTypography tag="h2" bold :primary="false">De ce sa ne alegi pe noi in decorarea <br />fatadei casei tale?</CoreTypography>
    <CoreTypography tag="h3" bold :primary="false" class="mt-4">Ai o casa si vrei sa ii oferi un design exterior unic?</CoreTypography>
    <ul class="list-disc flex flex-col gap-y-4 mt-6">
      <CoreTypography tag="li">{{ reasons.reason1 }}</CoreTypography>
      <CoreTypography tag="li">{{ reasons.reason2 }}</CoreTypography>
      <CoreTypography tag="li">{{ reasons.reason3 }}</CoreTypography>
      <CoreTypography tag="li">{{ reasons.reason4 }}</CoreTypography>
    </ul>
  </CoreCard>
</template>