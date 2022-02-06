import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { ArticleMeta } from '.';

import props from './mock';

describe('<ArticleMeta />', () => {
  it('Should render author and category links', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(screen.getByRole('link', { name: 'Luan Mateus' })).toHaveAttribute(
      'href',
      '/author/luan-mateus',
    );

    expect(screen.getByRole('link', { name: 'Tech' })).toHaveAttribute(
      'href',
      '/category/tech',
    );

    expect(screen.getByRole('link', { name: 'JS' })).toHaveAttribute(
      'href',
      '/category/javascript',
    );
  });

  it('Should format date', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(screen.getByText('2 de mar. de 2021')).toHaveAttribute(
      'datetime',
      props.createdAt,
    );
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<ArticleMeta {...props} />);

    expect(container).toMatchSnapshot();
  });
});
