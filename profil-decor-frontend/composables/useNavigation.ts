import type { HorizontalNavigationLink } from '#ui/types'

export default function () {
  
  function buildNavigationMenu(): HorizontalNavigationLink[][] {
    const appConfig = useAppConfig();
    return appConfig.navigationMenu as HorizontalNavigationLink[][];
  }

  return {
    buildNavigationMenu
  };
}