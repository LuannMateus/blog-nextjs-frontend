import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { PostGrid } from '.';

import props from './mock';

describe('<PostGrid />', () => {
  it('Should render PostGrid with 4 posts', () => {
    const { container } = renderTheme(<PostGrid {...props} />);

    expect(screen.queryByText(/Nenhum post/i)).not.toBeInTheDocument();
    expect(container.querySelectorAll('section').length).toBe(4);
  });

  it('Should render PostGrid without posts', () => {
    const { container } = renderTheme(
      <PostGrid {...props} posts={undefined} />,
    );

    expect(screen.getByText(/Nenhum post/i)).toBeInTheDocument();
    expect(container.querySelectorAll('section').length).toBe(0);
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(
      <PostGrid {...props} posts={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});
