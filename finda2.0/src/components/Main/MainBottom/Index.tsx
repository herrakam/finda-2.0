import * as S from '@components/Main/MainBottom/index.style';
import Rank from '@components/common/Rank';
import { RankType } from '@components/common/Rank/type';

export const mockRankInfo = [
  {
    title: '테넷',
    imgSrc:
      'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
  },
  {
    title: '어벤져스',
    imgSrc:
      'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
  },
  {
    title: '어벤져스',
    imgSrc:
      'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
  },
  {
    title: '어벤져스',
    imgSrc:
      'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
  },
  {
    title: '어벤져스',
    imgSrc:
      'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
  },
];

function MainBottom() {
  const RankProps: RankType = {
    subject: 'top 5',
    rankInfo: mockRankInfo,
  };
  return (
    <S.MainBottomWrap>
      <Rank {...RankProps} />
      <Rank {...RankProps} />
    </S.MainBottomWrap>
  );
}

export default MainBottom;
