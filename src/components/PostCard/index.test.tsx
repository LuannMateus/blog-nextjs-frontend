import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { PostCard } from '.';

import props from './mock';

describe('<PostCard />', () => {
  it('Should render a heading, cover and excerpt', () => {
    renderTheme(<PostCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();
    expect(screen.getByText(props.excerpt)).toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: props.title })[0],
    ).toHaveAttribute('href', `/posts/${props.slug}`);
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<PostCard {...props} />);

    expect(container).toMatchSnapshot();
  });
});
