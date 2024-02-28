type navigationLink = {
  to: string
  key: string,
  label?: string,
  alias?: string
};

type navigationMenu = {
  home: navigationLink,
  links: navigationLink[]
};

/**
 * Composable for handling navigation menu and links
 */
export default function () {

  function buildNavigationMenu(): navigationMenu {
    const appConfig = useAppConfig();
    return appConfig.navigationMenu as navigationMenu;
  }

  return {
    buildNavigationMenu
  };
}