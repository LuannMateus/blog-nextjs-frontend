import { MenuProps } from '.';

import logoLinkMock from '../LogoLink/mock';

export default {
  links: [
    {
      id: 'link-1',
      children: 'LINK 1',
      newTab: false,
      link: 'https://www.google.com/',
    },
    {
      id: 'link-2',
      children: 'LINK 2',
      newTab: false,
      link: 'https://www.google.com/',
    },
    {
      id: 'link-3',
      children: 'LINK 3',
      newTab: false,
      link: 'https://www.google.com/',
    },
    {
      id: 'link-4',
      children: 'LINK 4',
      newTab: false,
      link: 'https://www.google.com/',
    },
  ],
  ...logoLinkMock,
} as MenuProps;
