<template>
<CoreCard :is-custom-card="true" class="rounded-3xl bg-tertiary-cream p-12 justify-between min-h-fit gap-y-8">
  <CoreCarousel ref="carouselRef">
    <div class="hs-carousel-slide w-full">
      <div class="flex flex-col justify-center lg:justify-start gap-y-8">
        <CoreAvatarImage /> 
        <CoreTypography>Ovidiu</CoreTypography>
      </div>
    </div>
    <div class="hs-carousel-slide w-full">
      <div class="flex flex-col justify-start gap-y-8">
        <CoreAvatarImage class="bg-red-400" />
        <CoreTypography>Magdalena</CoreTypography>
      </div>
    </div>
  </CoreCarousel>
  <div class="flex justify-between items-center">
    <div class="flex gap-x-8">
      <CoreTypography tag="span">Echipa Profil Decor</CoreTypography>
    </div>
  </div>
</CoreCard>
</template>