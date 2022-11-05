import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.colors.primary};
   }
   h1 {
    margin: 0;
  }
`;
