import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    width: 16rem;

    border: 1px solid ${theme.colors.darkText};

    background: #000;
    color: ${theme.colors.white};

    display: flex;
    justify-content: center;
    align-items: center;

    padding: ${theme.spacings.small};

    cursor: pointer;

    transition: filter 300ms ease-in-out;

    &:hover {
      filter: brightness(50%);
    }

    &:disabled {
      opacity: 0.4;
    }
  `}
`;
