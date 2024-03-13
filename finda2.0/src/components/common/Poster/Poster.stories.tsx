import Poster from '@components/common/Poster/Index';
import { Meta, StoryFn } from '@storybook/react';

export default {
  component: Poster,
  title: 'Poster',
} as Meta;

const Temp: StoryFn<typeof Poster> = args => <Poster {...args} />;

export const Default = Temp.bind({});
Default.args = {
  title: 'sample',
  src: 'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
};
