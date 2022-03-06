import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    max-width: 100%;
    width: 100%;

    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: ${theme.spacings.large};

    padding: ${theme.spacings.large};

    @media ${theme.media.lteSmall} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const NotFound = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.large};

    @media ${theme.media.lteSmall} {
      padding: 0;
    }
  `}
`;
