import { Meta, Story } from '@storybook/react/types-6-0';
import { LoadMore } from '.';

export default {
  title: 'LoadMore',
  component: LoadMore,
  args: {
    isDisabled: false,
  },
  argTypes: {
    isDisabled: Boolean,
  },
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <LoadMore {...args} />
    </div>
  );
};
