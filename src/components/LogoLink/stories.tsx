import { Meta, Story } from '@storybook/react/types-6-0';
import { LogoLink, LogoLinkProps } from '.';

import mock from './mock';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: mock,
  argTypes: {
    text: { type: 'string' },
    srcImg: { type: 'string' },
    link: { type: 'string' },
  },
} as Meta;

export const ImageOnly: Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly: Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImg: '',
};
