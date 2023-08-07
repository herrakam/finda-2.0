import Poster from '@components/common/Poster/Index';
import { RankType } from '@components/common/Rank/type';
import * as S from '@components/common/Rank/index.style';

function Rank({ subject, rankInfo }: RankType) {
  const Contents = rankInfo.map(({ title, imgSrc }) => {
    return <Poster key={title} src={imgSrc} title={title} />;
  });
  return (
    <S.RankWrap>
      <S.RankTitle>{subject}</S.RankTitle>
      <S.RankContents>{Contents}</S.RankContents>
    </S.RankWrap>
  );
}

export default Rank;
