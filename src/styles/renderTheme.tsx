import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { BlogThemeProvider } from '../contexts/ThemeContext';

export const renderTheme = (children: ReactNode) => {
  return render(<BlogThemeProvider>{children}</BlogThemeProvider>);
};
