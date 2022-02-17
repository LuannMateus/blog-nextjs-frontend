import { renderTheme } from '../../styles/renderTheme';
import { PostTemplate } from '.';

import props from './mock';

describe('<PostTemplate />', () => {
  it('Should match snapshot', () => {
    const { container } = renderTheme(<PostTemplate {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('Should match snapshot without posts', () => {
    const { container } = renderTheme(
      <PostTemplate {...props} posts={undefined} />,
    );

    expect(container).toMatchSnapshot();
  });
});
