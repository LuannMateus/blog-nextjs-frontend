import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xhuge};
  `}
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;

    margin-bottom: ${theme.spacings.xhuge};
  `}
`;

export const FooterContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    padding: ${theme.spacings.large};
  `}
`;
