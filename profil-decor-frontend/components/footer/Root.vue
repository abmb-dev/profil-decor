<script setup lang="ts">
import { Icon } from '@iconify/vue';

type placementType = 'shortLocation' | 'adressLine1' | 'adressLine2' | 'postalCode';
type placementMetadata = { type: placementType, info: string };
type socialMediaPlatform = 'facebook' | 'whatsapp' | 'instagram' | 'tiktok';
type socialMediaMetadata = { platform: socialMediaPlatform, link: string };
type contactType = 'telephone1' | 'telephone2' | 'email';
type contact = { type: contactType, info: string }

// Component configuration
const appConfig = useAppConfig();
const navigationMenu = useNavigation().buildNavigationMenu();
const { scrollToSection } = useLenisScroll();

// Contact information business
const contact: ComputedRef<contact[]> = computed(() => {
  return Object
    .entries(appConfig.meta.business.contact)
    .map(entry => ({
      type: entry[0] as contactType,
      info: entry[1],
    } as contact));
});

const openMailLocalClient = (type: contactType) => {
  if (process.client && type === 'email') {
    window.location.href = `mailto:${appConfig.meta.business.contact.email}`;
  }
};

// Placement information business
const placement: ComputedRef<placementMetadata[]> = computed(() => {
  return Object
    .entries(appConfig.meta.business.placement)
    .map(entry => ({
      type: entry[0] as placementType,
      info: entry[1],
    } as placementMetadata)).slice(1);
});

// Social media business
const socialMediaLinks: ComputedRef<socialMediaMetadata[]> = computed(() => {
  return Object
    .entries(appConfig.meta.business.socialMediaLinks)
    .map(entry => ({
      platform: entry[0] as socialMediaPlatform,
      link: entry[1],
    } as socialMediaMetadata));
});

const isSocialLinkEnabled = (platform: socialMediaPlatform): boolean => {
  return Object.create(appConfig.meta.business.socialMediaLinks)[platform];
};

</script>

<template>
  <footer class="lg:fixed -z-[1] bottom-0 bg-tertiary flex flex-col items-center w-full padding-x-dynamic padding-y-dynamic gap-y-[2vw]">
    <FooterRow>
      <template #info>
        <MoleculesBusinessLogo :title="appConfig.meta.business.name" :description="appConfig.meta.business.placement.shortLocation" />
      </template>
      <template #action>
        <div class="font-normal order-first py-[2vw] lg:py-0 lg:ml-auto lg:order-last">
          <CoreButton class="group/btn" @click="scrollToSection('top')">
            <Icon class="transition-transform rotate-90 group-hover/btn:-rotate-0" icon="iconamoon:arrow-up-2-duotone" style="font-size: 2em;" />Inapoi la start
          </CoreButton>
        </div>
      </template>
    </FooterRow>    
    <FooterGrid>
      <template #grid>
        <FooterItem title="profil decor pe harta" :link="{ label: 'vezi pe harta', to: appConfig.meta.business.googleMapsLink, external: true}">
          <template #content>
              <address class="leading-dynamic text-sm margin-bottom-dynamic not-italic">
                <template v-for="{ type, info } in placement" :key="type">
                  {{ info }} <br />
                </template>
              </address>
          </template>
        </FooterItem>
        <FooterItem title="ore lucratoare">
          <template #content>
            <div class="leading-dynamic text-sm margin-bottom-dynamic">
              {{ appConfig.meta.business.openingHours.longInterval }}
            </div>
            <div class="leading-dynamic text-sm">
              <div v-for="{ type, info } in contact" :key="type">
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
        </FooterItem>
        <FooterItem title="social media">
          <template #content>
            <div class="flex justify-center gap-x-4 [&_svg]:hover:cursor-pointer lg:justify-start">
              <CoreTooltip
                v-for="{ platform, link} in socialMediaLinks" 
                side="bottom"
                :sideOffset="16"
                :key="platform"
                :text="isSocialLinkEnabled(platform) ? '' : 'In curand!'"
              >
                <CoreLink external :to="link" target="_blank">
                  <Icon :icon="`cib:${platform}`" :class="{ 'text-gray-400': !isSocialLinkEnabled(platform)}" />
                </CoreLink>
              </CoreTooltip>
            </div>
          </template>
        </FooterItem>
        <FooterItem>
          <template #content>
            <div class="flex flex-col items-center lg:items-start lg:col-span-3">
              <span class="uppercase leading-dynamic margin-bottom-dynamic">menu</span>
              <div class="flex flex-col gap-y-2">
                <CoreLink 
                  v-for="link in navigationMenu.links" 
                  :key="link.to"
                  :to="link.to"
                  class="uppercase leading-dynamic hover:underline hover:underline-offset-8 hover:cursor-pointer" 
                > 
                  {{ link.label }}
                </CoreLink>
              </div>
            </div>
          </template>
        </FooterItem>
      </template>
    </FooterGrid>
  </footer>
</template>