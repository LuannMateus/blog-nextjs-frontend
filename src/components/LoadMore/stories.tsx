import { Meta, Story } from '@storybook/react/types-6-0';
import { LoadMore, LoadMoreProps } from '.';

import mock from './mock';

export default {
  title: 'LoadMore',
  component: LoadMore,
  args: mock,
  argTypes: {
    isDisabled: Boolean,
  },
} as Meta;

export const Template: Story<LoadMoreProps> = (args) => {
  return (
    <div>
      <LoadMore {...args} />
    </div>
  );
};
