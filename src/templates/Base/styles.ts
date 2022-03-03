import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding-left: 4px;
`;

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xhuge};
  `}
`;
export const SearchContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-bottom: ${theme.spacings.xlarge};
    padding: 0 ${theme.spacings.large};
    max-width: 120rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    padding: 0.5rem ${theme.spacings.small};
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
