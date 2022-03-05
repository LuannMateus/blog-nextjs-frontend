import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    max-width: ${theme.sizes.max};
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding-left: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.xhuge};
    color: ${theme.colors.darkText};
    font-size: ${theme.font.sizes.small};
    margin: 0 auto;

    ${HeadingStyles} {
      margin-right: calc(${theme.spacings.small} - 1rem);
    }

    @media ${theme.media.lteMedium} {
      margin: 0;

      flex-direction: column;
    }
  `}
`;

export const Content = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    margin-left: ${theme.spacings.medium};

    @media ${theme.media.lteMedium} {
      text-align: center;

      margin-top: ${theme.spacings.small};
    }
  `}
`;
