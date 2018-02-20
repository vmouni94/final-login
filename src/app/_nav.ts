export const navigation = [
  {
    name: 'Home',
    url: '/dashboard',
    icon: 'icon-home',
    // badge: {
    //   variant: 'info',
    //   text: 'NEW'
    // }
  },
  // {
  //   title: true,
  //   name: 'Theme'
  // },
  {
    name: 'Cloud Providers',
    url: '/theme/colors',
    icon: 'icon-cloud-download'
  },
  // {
  //   name: 'Projects',
  //   url: '/theme/typography',
  //   // icon: 'icon-settings'
  // },
  // {
  //   title: true,
  //   name: 'Components'
  // },
  {
    title: true,
    name: 'projects'
  },
  {
    name: 'projects',
    url: '/projects',
    icon: 'icon-arrow-down',
    children: [
      {
        name: 'Create New Project',
        url: '/projects/new',
        icon: 'icon-puzzle'
      },
      {
        name: 'Existing Projects',
        url: '/projects/existing',
        icon: 'icon-puzzle'
      }
      // {
      //   name: 'Carousels',
      //   url: '/base/carousels',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Collapses',
      //   url: '/base/collapses',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Forms',
      //   url: '/base/forms',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Pagination',
      //   url: '/base/paginations',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Popovers',
      //   url: '/base/popovers',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Progress',
      //   url: '/base/progress',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Switches',
      //   url: '/base/switches',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Tables',
      //   url: '/base/tables',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Tabs',
      //   url: '/base/tabs',
      //   icon: 'icon-puzzle'
      // },
      // {
      //   name: 'Tooltips',
      //   url: '/base/tooltips',
      //   icon: 'icon-puzzle'
      // }
    ]
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Settings',
  },
  {
    name: 'Settings',
    url: '/buttons',
    icon: 'icon-settings',
    children: [
      {
        name: 'Create User',
        url: '/buttons/buttons',
        icon: 'icon-user'
      },
      // {
      //   name: 'Dropdowns',
      //   url: '/buttons/dropdowns',
      //   icon: 'icon-cursor'
      // },
      // {
      //   name: 'Social Buttons',
      //   url: '/buttons/social-buttons',
      //   icon: 'icon-cursor'
      // }
    ]
  },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Flags',
  //       url: '/icons/flags',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   icon: 'icon-bell',
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/notifications/modals',
  //       icon: 'icon-bell'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  {
    divider: true
  },
  {
    name: 'Help',
    url: '/widgets',
    icon: 'icon-exclamation'
  },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  {
    name: 'Login',
    url: '/pages/login',
    icon: 'icon-star'
  },
  {
    name: 'Register',
    url: '/pages/register',
    icon: 'icon-star'
  },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/pages/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/pages/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/pages/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/pages/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // }
];
