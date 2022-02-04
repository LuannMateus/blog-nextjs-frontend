import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('Should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">Children</MenuLink>);

    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('Should render a link with open new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        Children
      </MenuLink>,
    );

    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('Should render a internal link', () => {
    renderTheme(<MenuLink link="/localhost">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link="http://localhost" newTab={false}>
        Children
      </MenuLink>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
