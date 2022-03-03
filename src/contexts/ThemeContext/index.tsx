import { createContext, ReactNode, useCallback, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

export type ThemeProviderProps = {
  children: ReactNode;
};

export type ThemeProviderContext = {
  theme: DefaultTheme;
  setTheme: (mode: 'default' | 'inverted') => void;
};

export const ThemeContext = createContext<ThemeProviderContext>({
  theme,
  setTheme: () => {
    return;
  },
});

export const BlogThemeProvider = ({ children }: ThemeProviderProps) => {
  const [blogTheme, setBlogTheme] = useState(theme);

  const handleSetTheme: ThemeProviderContext['setTheme'] = useCallback(
    (mode = 'default') => {
      if (mode === 'default') {
        setBlogTheme(theme);
        localStorage.setItem('theme', JSON.stringify(theme));
      } else {
        const newTheme = {
          ...theme,
          name: 'inverted',
          colors: {
            primary: '#FFFFFF',
            darkText: '#F9f9f9',
            secondary: '#dc143c',
            white: '#000000',
            mediumGray: '#f9f9f9',
            darkerGray: '#CCCCCC',
          },
        };

        setBlogTheme(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
      }
    },
    [],
  );

  return (
    <ThemeContext.Provider
      value={{ theme: blogTheme, setTheme: handleSetTheme }}
    >
      <ThemeProvider theme={blogTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
