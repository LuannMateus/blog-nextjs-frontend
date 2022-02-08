import { MenuProps } from '.';

import logoLinkMock from '../LogoLink/mock';

export default {
  links: [
    {
      children: 'LINK 1',
      link: 'https://www.google.com/',
    },
    {
      children: 'LINK 2',
      link: 'https://www.google.com/',
    },
    {
      children: 'LINK 3',
      link: 'https://www.google.com/',
    },
    {
      children: 'LINK 4',
      link: 'https://www.google.com/',
    },
  ],
  ...logoLinkMock,
} as MenuProps;
