import { renderTheme } from '../../styles/renderTheme';
import { ToggleTheme } from '.';

describe('<ToggleTheme />', () => {
  it('Should render a toggle button', () => {
    const { container } = renderTheme(<ToggleTheme />);

    expect(container).toBeInTheDocument();
  });
});
