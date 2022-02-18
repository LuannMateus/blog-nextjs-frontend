import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding-left: 4px;
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

    @media ${theme.media.lteMedium} {
      width: 100%;
    }
  `}
`;

export const FooterContainer = styled.div`
  ${() => css`
    width: 100%;

    margin: 0 auto;
    padding: 0;
  `}
`;
