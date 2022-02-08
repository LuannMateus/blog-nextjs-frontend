import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu, MenuProps } from '.';

import mock from './mock';

export default {
  title: 'Menu',
  component: Menu,
  args: mock,
} as Meta;

export const Template: Story<MenuProps> = (args) => {
  return (
    <div>
      <Menu {...args} />
      <div style={{ paddingLeft: '6rem' }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
          officiis dolor! Qui, consectetur laboriosam quia consequatur rem,
          atque quaerat amet saepe id incidunt dolor quibusdam eligendi eum?
          Vel, inventore? Hic!
        </p>
      </div>
    </div>
  );
};
