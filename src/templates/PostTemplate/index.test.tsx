import { renderTheme } from '../../styles/renderTheme';
import { PostTemplate } from '.';

import props from './mock';

describe('<PostTemplate />', () => {
  it('should render', () => {
    const { container } = renderTheme(<PostTemplate {...props} />);

    expect(container).toMatchSnapshot();
  });
});
