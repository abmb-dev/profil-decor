export default defineAppConfig({
  ui: {
    primary: 'shark',
    gray: 'bud',
  },
  meta: {
    motto: "designul unic al casei tale",
  },
  navigationMenu: {
    home: {
      label: 'PROFIL DECOR',
      key: 'home',
      to: '/'
    },
    links: [
      {
        label: 'DESPRE NOI',
        key: 'about us',
      },
      {
        label: 'PORTOFOLIU',
        key: 'showcase'
      },
      {
        label: 'CONTACT',
        key: 'contact'
      },
    ]
  }
});