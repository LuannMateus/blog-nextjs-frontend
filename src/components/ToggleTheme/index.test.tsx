import { renderTheme } from '../../styles/renderTheme';
import { ToggleTheme } from '.';
import { theme } from '../../styles/theme';
import { fireEvent, screen } from '@testing-library/react';

describe('<ToggleTheme />', () => {
  beforeEach(() => {
    localStorage.setItem(
      'theme',
      JSON.stringify({ ...theme, name: 'inverted' }),
    );
  });

  afterEach(() => {
    localStorage.removeItem('theme');
  });

  it('Should render input without theme', () => {
    localStorage.removeItem('theme');

    renderTheme(<ToggleTheme />);

    const input = screen.getByRole('checkbox');

    expect(input).not.toBeChecked();
  });

  it('Should render input with default theme', () => {
    localStorage.setItem(
      'theme',
      JSON.stringify({ ...theme, name: 'default' }),
    );

    renderTheme(<ToggleTheme />);

    const input = screen.getByRole('checkbox');

    expect(input).not.toBeChecked();
  });

  it('Should render input checked with inverted theme', () => {
    renderTheme(<ToggleTheme />);

    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('Should render input and toggle between theme when toggling input', () => {
    const { container } = renderTheme(<ToggleTheme />);

    const label = screen.getByLabelText('Toggle light and dark modes');
    const input = screen.getByRole('checkbox');

    fireEvent.click(label);
    expect(input).not.toBeChecked();

    fireEvent.click(label);
    expect(input).toBeChecked();

    expect(container).toMatchSnapshot();
  });
});
