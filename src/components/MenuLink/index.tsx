import * as Styled from './styles';
import Link from 'next/link';

export type MenuLinkProps = {
  id: string;
  text: string;
  link: string;
  newTab?: boolean;
};

export const MenuLink = ({ text, link, newTab = false }: MenuLinkProps) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink = link.match(/^\//) ? true : false;

  if (nextLink) {
    return (
      <Link href={link} passHref>
        <Styled.Container target={target}>{text}</Styled.Container>
      </Link>
    );
  }

  return (
    <Link href={link} passHref>
      <Styled.Container target={target}>{text}</Styled.Container>
    </Link>
  );
};
