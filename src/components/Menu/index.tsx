import { LogoLink, LogoLinkProps } from '../LogoLink';
import { MenuLink, MenuLinkProps } from '../MenuLink';
import { Close, Menu as MenuIcon } from '@styled-icons/material-outlined';
import * as Styled from './styles';
import { useState } from 'react';

export type MenuProps = {
  links?: MenuLinkProps[];
} & LogoLinkProps;

export const Menu = ({
  links = [],
  link,
  text,
  srcImg,
  newTab = false,
}: MenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Styled.Wrapper className={isMenuOpen ? 'active' : ''}>
      {isMenuOpen ? (
        <Close onClick={() => setIsMenuOpen(false)} aria-label="Close menu" />
      ) : (
        <MenuIcon
          className="menuIcon"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        />
      )}

      <LogoLink link={link} text={text} srcImg={srcImg} newTab={newTab} />
      <Styled.MenuLinkContainer>
        {links.map((link, index) => {
          return (
            <MenuLink
              key={`menu-link-${index}`}
              link={link.link}
              newTab={link.newTab}
            >
              {link.children}
            </MenuLink>
          );
        })}
      </Styled.MenuLinkContainer>
    </Styled.Wrapper>
  );
};
