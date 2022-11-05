import styled, { css } from 'styled-components';

export const Logos = styled.div`
  ${({ theme }) => css`
    img {
      width: 50px;
      :first-child {
        margin-right: ${theme.spacing.small};
      }
    }`}
`;
