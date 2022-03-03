import { GlobalStyles } from '../src/styles/globalStyles';
import { theme } from '../src/styles/theme';
import { BlogThemeProvider } from '../src/contexts/ThemeContext';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.white,
      },
      {
        name: 'dark',
        value: theme.colors.primary,
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <BlogThemeProvider>
      <Story />
      <GlobalStyles />
    </BlogThemeProvider>
  ),
];
