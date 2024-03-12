<script setup lang="ts">
import type { pin } from './types';

const pins = [
  { value: 'pin1', title: 'solbanc', top: 0, left: 0 },
  { value: 'pin2', title: 'ancadrament', top: 100, left: 100 },
  { value: 'pin3', title: 'soclu', top: 25, left: 75 },
  { value: 'pin4', title: 'cornisa', top: 75, left: 25 },
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
      <div class="flex flex-col justify-between items-center gap-x-4">
        <SectionShowcaseListDisplay :items="pins" @hover-item="selectPin" />
        <SectionShowcasePinnedDisplay src="/img/showcase.jpeg" :active-pin="activePin" />
      </div>
    </template>
  </SectionBlocksWrapper>
</template>