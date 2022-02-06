import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { ArticleHeader } from '.';

import props from './mock';
import { formatDate } from '../../utils/formatData';

describe('<ArticleHeader />', () => {
  it('Should render heading, excerpt, cover img and meta', () => {
    const { container } = renderTheme(<ArticleHeader {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();
    expect(screen.getByText(props.excerpt)).toBeInTheDocument();
    expect(screen.getByText(formatDate(props.createdAt))).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
