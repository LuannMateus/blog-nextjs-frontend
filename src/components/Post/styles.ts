import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;

    padding-left: ${theme.spacings.small};
  `}
`;
