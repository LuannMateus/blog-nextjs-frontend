import styled, { css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles} {
      margin: 0;
      margin-top: calc(${theme.spacings.small} - 0.6rem);
      margin-bottom: ${theme.spacings.small};
    }

    a {
      text-decoration: none;
      color: inherit;
      transition: all 300ms ease-in-out;
    }

    img {
      transition: filter 300ms ease-in-out;
      width: 100%;
      max-width: 100%;
    }

    &:hover a {
      color: ${theme.colors.secondary};
    }

    &:hover img {
      filter: brightness(80%);
    }
  `};
`;

export const Cover = styled.img`
  max-width: 100%;
  transition: opacity 300ms ease-in-out;
`;

export const Excerpt = styled.p``;
