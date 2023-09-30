import * as S from '@components/Main/MainBottom/index.style';
import Rank from '@components/common/Rank';
import { RankType } from '@components/common/Rank/type';

function MainBottom() {
  const RankProps: RankType = {
    subject: 'top 5',
    rankInfo: [
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
    ],
  };
  return (
    <S.MainBottomWrap>
      <Rank {...RankProps} />
      <Rank {...RankProps} />
    </S.MainBottomWrap>
  );
}

export default MainBottom;
