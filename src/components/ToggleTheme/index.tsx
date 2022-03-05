import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import * as Styled from './styles';

export const ToggleTheme = () => {
  const { setTheme } = useContext(ThemeContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');

    if (!localTheme) return;

    const newTheme = JSON.parse(localTheme);

    if (newTheme.name === 'inverted') setChecked(true);
  }, []);

  useEffect(() => {
    setTheme(checked ? 'inverted' : 'default');
  }, [checked, setTheme]);

  const handleChange = () => {
    setChecked((prevState) => !prevState);
    setTheme(checked ? 'inverted' : 'default');
  };

  return (
    <Styled.Wrapper>
      <Styled.Label aria-label="Toggle light and dark modes">
        <Styled.Input
          type="checkbox"
          value="Toggle light and dark modes"
          onChange={handleChange}
          checked={checked}
        />
        <Styled.Slider />
      </Styled.Label>
    </Styled.Wrapper>
  );
};
