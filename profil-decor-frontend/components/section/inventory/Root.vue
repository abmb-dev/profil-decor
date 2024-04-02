<script setup lang="ts">

interface inventoryItem { title: string; description: string; }

const items: inventoryItem[] = [
  { title: "ancadramente", description: "insert description here" },
  { title: "solbancuri", description: "insert description here" },
  { title: "cornise", description: "insert description here" },
  { title: "brauri", description: "insert description here" },
  { title: "panouri decorative", description: "insert description here" },
  { title: "pilastri", description: "insert description here" },
  { title: "bosaje colt", description: "insert description here" },
  { title: "socluri", description: "insert description here" }
];

</script>

<template>
  <SectionWrapper id="inventory-section" :is-custom="false" :is-fixed-height="false">
    <template #title>Articole de baza</template>
    <template #content>
      <SectionInventoryGrid>
        <SectionInventoryItem 
          v-for="(item, index) in items" 
          :key="item.title"
          :title="item.title"
          :description="item.description"
          :className="index === 2 || index === 4 ? 'md:col-span-2' : ''"        
        >
          <template #header>
            <div class="w-full h-full bg-primary flex items-center justify-center">
              <NuxtImg src="/img/solbancpro.png" class="w-1/2 h-auto grayscale hover:grayscale-0" />
            </div>
          </template>
          <template #icon>
            icon
          </template>
        </SectionInventoryItem>
      </SectionInventoryGrid>
    </template>
  </SectionWrapper>
</template>