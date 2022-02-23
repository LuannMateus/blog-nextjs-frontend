import { renderTheme } from '../../styles/renderTheme';
import { PostsTemplate } from '.';

import props from './mock';

describe('<PostTemplate />', () => {
  it('Should match snapshot', () => {
    const { container } = renderTheme(<PostsTemplate {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('Should match snapshot without posts', () => {
    const { container } = renderTheme(
      <PostsTemplate {...props} posts={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});
