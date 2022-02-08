import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Menu } from '.';

import props from './mock';

describe('<Menu />', () => {
  it('Should render Menu with links and logoLink', () => {
    renderTheme(<Menu {...props} />);

    expect(screen.getByRole('link', { name: 'LINK 1' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.text })).toBeInTheDocument();
  });

  it('Should render Menu with no links', () => {
    renderTheme(<Menu {...props} links={undefined} />);

    expect(screen.queryByText('/LINK/gi')).not.toBeInTheDocument();
  });

  it('Should render Menu with open and close events', () => {
    renderTheme(<Menu {...props} />);

    expect(screen.getByRole('navigation')).toHaveStyleRule('left', '-26rem');

    const openMenuButton = screen.getByLabelText('Open menu');
    fireEvent.click(openMenuButton);
    expect(screen.getByRole('navigation')).toHaveStyle('left: 0rem');

    const closeMenuButton = screen.getByLabelText('Close menu');
    fireEvent.click(closeMenuButton);
    expect(screen.getByRole('navigation')).toHaveStyle('left: -26rem');
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<Menu {...props} />);

    expect(container).toMatchSnapshot();
  });
});
