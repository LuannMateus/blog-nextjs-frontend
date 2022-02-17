import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { Base, BaseTemplateProps } from '.';

import mock from './mock';

const props: BaseTemplateProps = mock;

describe('<BaseTemplate />', () => {
  it('Should render base elements', () => {
    renderTheme(<Base {...props} />);

    expect(
      screen.getByRole('img', {
        name: 'New Programming - Esse blog é voltado para os amantes de tecnologia que querem aprender sempre um pouco mais.',
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    expect(screen.getByText(props.settings.footerHtml)).toBeInTheDocument();
    expect(screen.getByLabelText('Go to top')).toBeInTheDocument();
  });

  it('Should render base elements', () => {
    const { container } = renderTheme(<Base {...props} />);
    expect(container).toMatchSnapshot();
  });
});
