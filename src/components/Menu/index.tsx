import { LogoLink } from '../LogoLink';
import { MenuLink, MenuLinkProps } from '../MenuLink';
import { Close, Menu as MenuIcon } from '@styled-icons/material-outlined';
import * as Styled from './styles';
import { useState } from 'react';

export type MenuProps = {
  blogName?: string;
  links?: MenuLinkProps[];
  logo: string;
};

export const Menu = ({ blogName, links = [], logo }: MenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Styled.Wrapper className={isMenuOpen ? 'active' : ''}>
        <Styled.OpenCloseWrapper>
          {isMenuOpen ? (
            <Close
              className="closeIcon"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              title="Close menu"
            />
          ) : (
            <MenuIcon
              className="menuIcon"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              title="Open menu"
            />
          )}
        </Styled.OpenCloseWrapper>
        <Styled.NavWrapper aria-hidden={!isMenuOpen}>
          <LogoLink link="/" text={blogName} srcImg={logo} />

          <Styled.MenuLinkContainer>
            {links.map((link) => {
              return (
                <MenuLink
                  id={link.id}
                  key={`menu-link-${link.id}`}
                  link={link.link}
                  newTab={link.newTab}
                  text={link.text}
                />
              );
            })}
          </Styled.MenuLinkContainer>
        </Styled.NavWrapper>
      </Styled.Wrapper>
    </>
  );
};
