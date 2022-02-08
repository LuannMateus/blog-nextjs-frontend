import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { PostTags } from '.';

import props from './mock';

describe('<PostTags />', () => {
  it('Should render PostTags with 2 tags', () => {
    renderTheme(<PostTags {...props} />);

    expect(screen.getByText(/Tags:/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('Should render PostTags without tags', () => {
    renderTheme(<PostTags {...props} tags={undefined} />);

    expect(screen.queryAllByRole('link')).toHaveLength(0);
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<PostTags {...props} />);

    expect(container).toMatchSnapshot();
  });
});
