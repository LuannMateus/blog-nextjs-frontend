import styled, { css } from 'styled-components';
import { Container as LogoLinkStyles } from '../LogoLink/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 27rem;
    height: 100vh;

    background: ${theme.colors.primary};
    border-radius: 4px;

    padding: ${theme.spacings.xsmall} calc(${theme.spacings.xsmall} - 0.6rem);

    position: fixed;
    left: -26rem;

    transition: all 300ms ease-in-out;

    z-index: 1001;

    ${LogoLinkStyles} {
      margin-top: ${theme.spacings.xhuge};

      img {
        border: 0.5rem solid ${theme.colors.secondary};
      }
    }

    &.active {
      left: 0rem;

      overflow-y: auto;
      overflow-x: hidden;
    }
  `}
`;

export const NavWrapper = styled.nav`
  ${() => css`
    width: 100%;
    max-width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

export const OpenCloseWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    display: flex;
    justify-content: flex-end;

    background-color: ${theme.colors.primary};

    border-radius: 4px;

    left: 2rem;

    svg {
      width: 3rem;
      color: ${theme.colors.secondary};

      padding-right: 3.5rem;
      padding-top: 1rem;

      cursor: pointer;
      transition: filter 300ms ease-in-out;
    }

    svg:hover {
      filter: brightness(50%);
    }

    .menuIcon {
      padding: 0;
    }
  `}
`;

export const MenuLinkContainer = styled.section`
  ${() => css`
    width: 90%;
    margin: 4rem 0;
  `}
`;
