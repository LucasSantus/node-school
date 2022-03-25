import { ReactNode } from 'react';

import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: 'Dashboards',
    items: [
      {
        name: 'Home',
        link: '/dashboards/tasks',
        icon: BrightnessLowTwoToneIcon
      },
    ]
  }
];

export default menuItems;
