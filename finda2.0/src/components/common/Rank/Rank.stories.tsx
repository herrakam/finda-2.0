import Rank from '@components/common/Rank';
import { Meta, StoryFn } from '@storybook/react';

export default {
  component: Rank,
  title: 'Rank',
} as Meta;

const Temp: StoryFn<typeof Rank> = args => <Rank {...args} />;

export const Default = Temp.bind({});
Default.args = {
  subject: 'top 10',
  rankInfo: [
    {
      title: 'sample',
      imgSrc:
        'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
    },
    {
      title: 'sample',
      imgSrc:
        'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
    },
    {
      title: 'sample',
      imgSrc:
        'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
    },
    {
      title: 'sample',
      imgSrc:
        'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
    },
  ],
};
