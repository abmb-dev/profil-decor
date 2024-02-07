export default defineAppConfig({
  ui: {
    primary: 'roman',
    gray: 'cararra',
  },
  navigationMenu: [
    [ 
      { 
        label: 'ACASA', 
        to: '/' 
      }
    ],
    [ 
      { 
        label: 'DESPRE NOI' 
      }, 
      { 
        label: 'CONTACT'
      }
    ]
  ]
});