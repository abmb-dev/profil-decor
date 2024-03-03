<script setup lang="ts">
import { Icon } from '@iconify/vue';

type placementType = 'shortLocation' | 'adressLine1' | 'adressLine2' | 'postalCode';
type placementMetadata = { type: placementType, info: string };
type socialMediaPlatform = 'facebook' | 'whatsapp' | 'instagram' | 'tiktok';
type socialMediaMetadata = { platform: socialMediaPlatform, link: string };
type contactType = 'telephone1' | 'telephone2' | 'email';
type contactInformation = { type: contactType, info: string }

// Component configuration
const appConfig = useAppConfig();
const navigationMenu = useNavigation().buildNavigationMenu();
const { scrollToSection } = useLenisScroll();

// Contact information business
const contactInformation: ComputedRef<contactInformation[]> = computed(() => {
  return Object
    .entries(appConfig.meta.businessInfo.contactInformation)
    .map(entry => ({
      type: entry[0] as contactType,
      info: entry[1],
    } as contactInformation));
});

const openMailLocalClient = (type: contactType) => {
  if (process.client && type === 'email') {
    window.location.href = `mailto:${appConfig.meta.businessInfo.contactInformation.email}`;
  }
};

// Placement information business
const placementInformation: ComputedRef<placementMetadata[]> = computed(() => {
  return Object
    .entries(appConfig.meta.businessInfo.placementInformation)
    .map(entry => ({
      type: entry[0] as placementType,
      info: entry[1],
    } as placementMetadata)).slice(1);
});

// Social media business
const socialMediaLinks: ComputedRef<socialMediaMetadata[]> = computed(() => {
  return Object
    .entries(appConfig.meta.businessInfo.socialMediaLinks)
    .map(entry => ({
      platform: entry[0] as socialMediaPlatform,
      link: entry[1],
    } as socialMediaMetadata));
});

const isSocialLinkEnabled = (platform: socialMediaPlatform): boolean => {
  return Object.create(appConfig.meta.businessInfo.socialMediaLinks)[platform];
};

</script>

<template>
  <footer class="lg:fixed -z-[1] bottom-0 bg-section-accent flex flex-col items-center w-full padding-x-dynamic padding-y-dynamic gap-y-[2vw]">
    <FooterBlocksInformationRow>
      <template #info>
        <div class="flex items-baseline">
          <span class="text-2xl font-semibold mr-1">{{ appConfig.meta.businessInfo.name }}</span>
          <span class="font-normal">{{ appConfig.meta.businessInfo.placementInformation.shortLocation }}</span>
        </div>
      </template>
      <template #action>
        <div class="font-normal order-first py-[2vw] lg:py-0 lg:ml-auto lg:order-last">
          <CoreButton @click="scrollToSection('top')">
            <Icon icon="iconamoon:arrow-up-2-duotone" style="font-size: 2em;" />Inapoi la start
          </CoreButton>
        </div>
      </template>
    </FooterBlocksInformationRow>    
    <FooterBlocksInformationGrid>
      <template #grid>
        <FooterBlocksInformationItem title="profil decor pe harta" :link="{ label: 'vezi pe harta', to: appConfig.meta.businessInfo.googleMapsLink, external: true}">
          <template #content>
              <address class="leading-dynamic text-sm margin-bottom-dynamic not-italic">
                <template v-for="{ type, info } in placementInformation" :key="type">
                  {{ info }} <br />
                </template>
              </address>
          </template>
        </FooterBlocksInformationItem>
        <FooterBlocksInformationItem title="ore lucratoare">
          <template #content>
            <div class="leading-dynamic text-sm margin-bottom-dynamic">
              {{ appConfig.meta.businessInfo.openingHoursInformation.longInterval }}
            </div>
            <div class="leading-dynamic text-sm">
              <div v-for="{ type, info } in contactInformation" :key="type">
                <span class="mr-2">{{ type.at(0)?.toUpperCase() }}:</span>
                <span 
                  :class="{ 'hover:underline hover:underline-offset-8 hover:cursor-pointer': type === 'email' }"
                  @click="openMailLocalClient(type)"
                >
                  {{ info }}
                </span>
              </div>
            </div>
          </template>
        </FooterBlocksInformationItem>
        <FooterBlocksInformationItem title="social media">
          <template #content>
            <div class="flex justify-center gap-x-4 [&_svg]:hover:cursor-pointer lg:justify-start">
              <CoreTooltip
                v-for="{ platform, link} in socialMediaLinks" 
                side="bottom"
                :sideOffset="16"
                :key="platform"
                :text="isSocialLinkEnabled(platform) ? '' : 'In curand!'"
              >
                <NuxtLink external :to="link" target="_blank">
                  <Icon :icon="`cib:${platform}`" :class="{ 'text-gray-400': !isSocialLinkEnabled(platform)}" />
                </NuxtLink>
              </CoreTooltip>
            </div>
          </template>
        </FooterBlocksInformationItem>
        <FooterBlocksInformationItem>
          <template #content>
            <div class="flex flex-col items-center lg:items-start lg:col-span-3">
              <span class="uppercase leading-dynamic margin-bottom-dynamic">menu</span>
              <NuxtLink class="uppercase leading-dynamic hover:underline hover:underline-offset-8 hover:cursor-pointer" v-for="link in navigationMenu.links" :key="link.to">{{ link.label }}</NuxtLink>
            </div>
          </template>
        </FooterBlocksInformationItem>
      </template>
    </FooterBlocksInformationGrid>
  </footer>
</template>