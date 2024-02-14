export type NavigationLink = {
  label?: string,
  key: string,
  to: string
};

export type NavigationMenu = {
  home: NavigationLink,
  links: NavigationLink[]
};

export default function () {
  function buildNavigationMenu(): NavigationMenu {
    const appConfig = useAppConfig();
    return appConfig.navigationMenu as NavigationMenu
  }

  return {
    buildNavigationMenu
  };
}