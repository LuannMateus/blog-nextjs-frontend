import styled, { css } from 'styled-components';

export const LoadMoreContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding-left: ${theme.spacings.medium};
    padding-top: ${theme.spacings.small};
  `}
`;
