import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { LoadMore } from '.';

import props from './mock';

describe('<LoadMore />', () => {
  it('Should render LoadMore button', () => {
    renderTheme(<LoadMore {...props} />);

    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('Should render LoadMore button with disabled prop', () => {
    renderTheme(<LoadMore {...props} isDisabled={true} />);

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('Should render LoadMore button without isDisabled prop', () => {
    renderTheme(<LoadMore {...props} isDisabled={undefined} />);

    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<LoadMore {...props} />);

    expect(container).toMatchSnapshot();
  });
});
