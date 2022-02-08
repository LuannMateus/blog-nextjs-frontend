import styled, { css } from 'styled-components';
import { Container as LogoLinkStyles } from '../LogoLink/styles';

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    width: 27rem;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000;
    border-radius: 4px;

    padding-top: 1.4rem;

    position: fixed;
    left: -26rem;

    transition: all 300ms ease-in-out;

    z-index: 1000;

    .menuIcon {
      position: relative;
      left: 1.5rem;

      background: #000;
      padding: 0;
    }

    svg {
      width: 3rem;
      color: ${theme.colors.secondary};

      align-self: flex-end;

      padding-right: 1.6rem;

      cursor: pointer;
      transition: filter 300ms ease-in-out;
    }

    svg:hover {
      filter: brightness(50%);
    }

    ${LogoLinkStyles} {
      margin-top: ${theme.spacings.xhuge};
    }

    &.active {
      left: 0rem;
    }
  `}
`;

export const MenuLinkContainer = styled.section`
  ${() => css`
    width: 90%;

    margin-top: 4rem;
  `}
`;
