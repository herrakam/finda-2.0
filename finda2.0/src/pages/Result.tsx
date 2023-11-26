import SearchResult from '@components/Result/SearchResult/Index';
import PageContainer from '@components/common/PageContainer/Index';
import { useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import { GenreType, NormalizedPosterDataType } from '@/utils/type';
import * as S from '@components/Result/SearchResult/Index.style';
import GenreResult from '@components/Result/GenreResult/Index';
import { GENREINFO } from '@/assets/static';

const getGenreText = (genreArr: number[]) => {
  const genreStringArr = genreArr.map(
    (genreNum: number) =>
      GENREINFO.find((info: GenreType) => info.id === genreNum)?.translation,
  );
  return genreStringArr.join(',');
};

function Result() {
  const param = useParams().searchParam;
  const searchInfo = param ? param : '';
  const [startPoint, setStartPoint] = useState<string>();
  const [isAbled, setIsAbled] = useState<boolean>(false);
  const [showedData, setShowedData] = useState<NormalizedPosterDataType[]>([]);
  const pageEndRef = useRef<HTMLDivElement>(null);
  const isGenre =
    new URL(location.href).pathname.split('/').indexOf('genre') === -1
      ? false
      : true;
  const resultTitleText: string = isGenre
    ? `장르가 "${getGenreText(param!.split(',').map(Number))}"인 영화`
    : searchInfo
    ? `"${searchInfo}" 검색 결과`
    : 'FINDA에서 제공하는 영화들';

  const ResultContent = isGenre ? <GenreResult /> : <SearchResult />;
  return (
    <PageContainer>
      <S.ResultTitle>{resultTitleText}</S.ResultTitle>
      {ResultContent}
      <div className="InfinityScrollTrigger" ref={pageEndRef}></div>
    </PageContainer>
  );
}

export default Result;
