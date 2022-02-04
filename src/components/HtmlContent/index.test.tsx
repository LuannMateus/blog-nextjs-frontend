import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import { HtmlContent } from '.';

describe('<TextCom  ponent/>', () => {
  it('Should render a paragraph with Children', () => {
    renderTheme(<HtmlContent html="<b>Children</b>" />);

    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<HtmlContent html="<b>Children</b>" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
