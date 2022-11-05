import { theme } from './Theme';
import { ThemeProvider } from 'styled-components';
import P from 'prop-types';

export const MyThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

MyThemeProvider.propTypes = {
  children: P.node.isRequired,
};
