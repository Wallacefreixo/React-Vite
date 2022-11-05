import { render } from '@testing-library/react';
import { MyThemeProvider } from './MyThemeProvider';

export const renderTheme = (children) =>
  render(<MyThemeProvider>{children}</MyThemeProvider>);
