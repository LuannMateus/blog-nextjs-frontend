import { Meta, Story } from '@storybook/react/types-6-0';
import { Base, BaseTemplateProps } from '.';
import mock from './mock';

export default {
  title: 'Template/Base',
  component: Base,
  args: mock,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: '',
    },
  },
} as Meta;

export const Template: Story<BaseTemplateProps> = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
