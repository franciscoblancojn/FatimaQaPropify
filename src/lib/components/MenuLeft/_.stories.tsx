import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Menu, MenuProps } from './index';
import { Home } from "../../svg/home";
import { Payments } from "../../svg/payments";
import { Units } from "../../svg/units";
import { Tenants } from "../../svg/tenants";
import { Maintenance } from "../../svg/maintenance";
import { Funnels } from "../../svg/funnels";



export default {
  component: Menu,
  title: 'Menu/Menu',
} as Meta;

const Menu_: Story<MenuProps> = (args) => <Menu {...args} />;
export const Primary = Menu_.bind({});
Primary.args = {
  items: [
    {
      icon: <> <Home /> </>,
      text: "Home",
      url: "/home",

    },
    {
      icon: <> <Payments /> </>,
      text: "Payments",
      url: "/payments",

    },
    {
      icon: <> <Units /> </>,
      text: "Units",
      url: "/Units",

    },
    {
      icon: <> <Tenants /> </>,
      text: "Tenants",
      url: "/tenants",

    },

    {
      icon: <> <Maintenance /> </>,
      text: "Maintenance",
      url: "/maintenance",
      subItems: [
        {
          text: "Maintenance",
          url: "/maintenance",
          
        },
        {
          text: "Workers",
          url: "/workers",
        }
      ]

    },
    {
      icon: <> <Funnels /> </>,
      text: "Funnels",
      url: "/funnels",

    },
  ]
} as MenuProps;
