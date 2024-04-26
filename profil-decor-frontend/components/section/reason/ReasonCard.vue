<script setup lang="ts">
const reasons = useAppConfig().meta.business.reason;
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <CoreCard :is-custom-card="true" class="rounded-3xl border leading-relaxed px-8 py-4 hover:bg-primary group">
      <div class="flex flex-col justify-between gap-y-4 group-hover:text-secondary">
        <CoreTypography tag="span" bold>De ce?</CoreTypography>
        <CoreTypography tag="p">{{ reasons.reason1 }}</CoreTypography>
      </div>
    </CoreCard>
    <CoreCard :is-custom-card="true" class="rounded-3xl border leading-relaxed px-8 py-4 hover:bg-primary group">
      <div class="flex flex-col justify-between gap-y-4 group-hover:text-secondary">
        <CoreTypography tag="span" bold>De ce?</CoreTypography>
        <CoreTypography tag="p">{{ reasons.reason2 }}</CoreTypography>
      </div>
    </CoreCard>
    <CoreCard :is-custom-card="true" class="rounded-3xl border leading-relaxed px-8 py-4 hover:bg-primary group">
      <div class="flex flex-col justify-between gap-y-4 group-hover:text-secondary">
        <CoreTypography tag="span" bold>De ce?</CoreTypography>
        <CoreTypography tag="p">{{ reasons.reason1 }}</CoreTypography>
      </div>
    </CoreCard>
    <CoreCard :is-custom-card="true" class="rounded-3xl border leading-relaxed px-8 py-4 hover:bg-primary group">
      <div class="flex flex-col justify-between gap-y-4 group-hover:text-secondary">
        <CoreTypography tag="span" bold>De ce?</CoreTypography>
        <CoreTypography tag="p">{{ reasons.reason1 }}</CoreTypography>
      </div>
    </CoreCard>
  </div>
</template>