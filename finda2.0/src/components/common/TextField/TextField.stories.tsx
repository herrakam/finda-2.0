import TextField from '@components/common/TextField/Index';
import { TextFieldProps } from '@components/common/TextField/type';
import { Meta, StoryFn } from '@storybook/react';
import { FieldValues } from 'react-hook-form';

export default {
  title: 'TextField',
  component: TextField,
} as Meta;

const Temp: StoryFn<TextFieldProps<FieldValues>> = args => (
  <TextField {...args} />
);

export const Default = Temp.bind({});
Default.args = {
  placeholder: '테스트',
  fontSize: 'Regular',
};