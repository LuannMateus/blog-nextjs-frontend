import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Menu } from '.';

import props from './mock';

describe('<Menu />', () => {
  it('Should render OpenMenu button', () => {
    renderTheme(<Menu {...props} />);

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('Should render Menu with links and logoLink', () => {
    renderTheme(<Menu {...props} />);

    const openMenuButton = screen.getByLabelText('Open menu');

    fireEvent.click(openMenuButton);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(
      screen.getByRole('navigation').querySelectorAll('a:not([href="/"])'),
    ).toHaveLength(props.links.length);
    expect(
      screen.getByRole('img', { name: props.blogName }),
    ).toBeInTheDocument();
  });

  it('Should render Menu with no links', () => {
    renderTheme(<Menu {...props} links={undefined} />);

    expect(screen.queryByText('/LINK/gi')).not.toBeInTheDocument();
  });

  it('Should render Menu with open and close events', () => {
    renderTheme(<Menu {...props} />);

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();

    const openMenuButton = screen.getByLabelText('Open menu');
    fireEvent.click(openMenuButton);
    expect(screen.queryByRole('navigation')).toBeInTheDocument();

    const closeMenuButton = screen.getByLabelText('Close menu');
    fireEvent.click(closeMenuButton);
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<Menu {...props} />);

    expect(container).toMatchSnapshot();
  });
});
