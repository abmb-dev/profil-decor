<script setup lang="ts">
import type { pin } from './types';

const pins = [
  { value: 'pin1', title: 'solbanc', top: 20, left: 57.5 },
  { value: 'pin2', title: 'ancadrament', top: 8, left: 50 },
  { value: 'pin3', title: 'soclu', top: 8, left: 40 },
  { value: 'pin4', title: 'cornisa', top: 18, left: 34 },
];

const activePin = useState<pin | null>('activePin', () => null);

const selectPin = (preview: pin) => {
  if (preview) {
    const pin = pins.find(x => x.value === preview.value);
    activePin.value = pin || null;
  } else {
    activePin.value = null;
  }
};
</script>

<template>
  <SectionBlocksWrapper id="showcase-section" :is-custom="false" :is-fixed-height="false" variant="secondary">
    <template #title>Printre lucrarile noastre</template>
    <template #content>
      <div class="flex justify-between items-center gap-x-4 p-10">
        <SectionShowcasePinnedDisplay src="/img/showcase.jpeg" :active-pin="activePin" />
        <SectionShowcaseListDisplay :items="pins" @hover-item="selectPin" />
      </div>
    </template>
  </SectionBlocksWrapper>
</template>