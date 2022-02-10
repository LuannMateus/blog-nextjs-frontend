import { MenuLinkProps } from '../components/MenuLink';
import { StrapiImage } from './StrapiImage';

export type SettingsStrapi = {
  id: string;
  blogName: string;
  blogDescription: string;
  logo: StrapiImage;
  menuLink: MenuLinkProps[];
  text: string;
};
