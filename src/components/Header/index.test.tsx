import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Header } from '.';

import props from './mock';

describe('<Header />', () => {
  it('Should render an image, a heading and text', () => {
    renderTheme(<Header {...props} showText={undefined} />);

    expect(
      screen.getByRole('heading', { name: props.blogName }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /Luan Mateus/i })).toHaveAttribute(
      'src',
      props.logo,
    );
    expect(screen.getByText(props.blogDescription)).toBeInTheDocument();
  });

  it('Should render image only', () => {
    renderTheme(<Header {...props} showText={false} />);

    expect(screen.getByRole('img', { name: /Luan Mateus/i })).toHaveAttribute(
      'src',
      props.logo,
    );
    expect(
      screen.queryByRole('heading', { name: props.blogName }),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(props.blogDescription)).not.toBeInTheDocument();
  });

  it('Should match with snapshot', () => {
    const { container } = renderTheme(
      <Header {...props} showText={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});
