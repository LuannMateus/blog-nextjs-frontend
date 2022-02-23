import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { MenuLink } from '.';

import props from './mock';

describe('<MenuLink />', () => {
  it('Should render a link', () => {
    renderTheme(<MenuLink {...props} />);

    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('Should render a link with open new tab', () => {
    renderTheme(<MenuLink {...props} newTab={true} />);

    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('Should render a internal link', () => {
    renderTheme(<MenuLink {...props} link="/localhost" />);

    expect(screen.getByRole('link', { name: 'MenuLink' })).toHaveAttribute(
      'target',
      '_self',
    );
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink {...props} newTab={false} link="http://localhost" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
