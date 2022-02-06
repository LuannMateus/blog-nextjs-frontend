import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Post } from '.';

import props from './mock';
import { formatDate } from '../../utils/formatData';

describe('<Post />', () => {
  it('Should render header, excerpt, cover, metadata and post', () => {
    const { container } = renderTheme(<Post {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();
    expect(
      screen.getByText(/^Fugit aliquip erroribus eu eam/i),
    ).toBeInTheDocument();
    expect(screen.getByText(formatDate(props.createdAt))).toBeInTheDocument();
    expect(
      screen.getByText(/^Blockquote: Et sed legere rationibus/i),
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
