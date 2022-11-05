import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: column;
    padding: ${theme.spacing.large};
    h1 {
      margin-top: ${theme.spacing.medium}
    }
  `};
`;
