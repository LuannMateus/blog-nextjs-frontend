import styled, { css } from 'styled-components';
import { Title as HeadingStyle } from '../Heading/styles';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xlarge};
    margin-bottom: ${theme.spacings.xlarge};
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};

    ${HeadingStyle} {
      margin: 0;
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;

export const Excerpt = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin: ${theme.spacings.medium} 0;
  `}
`;

export const Cover = styled.img`
  ${({ theme }) => css`
    display: block;
    max-width: 100%;
    margin-bottom: ${theme.spacings.medium};
  `}
`;
