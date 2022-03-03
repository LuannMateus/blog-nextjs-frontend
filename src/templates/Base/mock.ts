import { BaseTemplateProps } from '.';

export default {
  settings: {
    id: '61fd5d62845ac9392828c858',
    blogName: 'New Programming',
    blogDescription:
      'Esse blog é voltado para os amantes de tecnologia que querem aprender sempre um pouco mais.',
    logo: {
      id: 'some-id',
      alternativeText: 'New Programming',
      url: '/assets/images/logo.jpg',
    },
    menuLink: [
      {
        id: '61fd600506f225328cbe0647',
        link: 'https://pt-br.reactjs.org/docs/hooks-effect.html',
        text: 'useEffect',
        newTab: true,
      },
    ],
    footerHtml: 'A footer paragraph',
  },
  children: 'Olá mundo',
} as BaseTemplateProps;
