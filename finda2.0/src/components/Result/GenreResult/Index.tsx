import { getSimilarMovies } from '@/utils/API';
import { useEffect, useState } from 'react';
import * as S from '@components/Result/SearchResult/Index.style';
import { useQuery } from '@tanstack/react-query';
import { GenreResultPropsType } from './type';
import { PAGECONTENTCOUNT } from '@/assets/static';
import Poster from '@components/common/Poster/Index';
import { NormalizedPosterDataType } from '@/utils/type';

function GenreResult({
  setShowedData,
  setContentCount,
  showedData,
  genreNumArr,
  isAbled,
  setIsAbled,
}: GenreResultPropsType) {
  const [curPage, setCurPage] = useState<number>(1);

  const getFirstGenreResultInfo = (genreNumArr: number[]) => {
    return useQuery(['getResultQueryKey', genreNumArr], () => {
      return genreNumArr && getSimilarMovies(genreNumArr);
    });
  };

  const getNextDataWithGenre = () => {
    if (data?.resultData && isAbled) {
      const cur = curPage * PAGECONTENTCOUNT;
      const next = (curPage + 1) * PAGECONTENTCOUNT;
      setShowedData([...showedData, ...data.resultData.slice(cur, next)]);
      setCurPage(curPage + 1);
      setIsAbled(false);
    }
  };

  const { data, isLoading, error } = getFirstGenreResultInfo(genreNumArr);
  if (isLoading) <>로딩중</>;
  if (error) <>에러발생!!!</>;

  useEffect(() => {
    if (data) {
      setShowedData([...data.resultData.slice(0, PAGECONTENTCOUNT)]);
      setContentCount(data.countContent);
    }
  }, [data]);
  useEffect(() => {
    if (data) {
      getNextDataWithGenre();
    }
  }, [isAbled]);

  const Contents = showedData.map((content: NormalizedPosterDataType) => (
    <Poster key={content.title} title={content.title} src={content.poster} />
  ));

  return (
    <S.ResultContatiner>
      <S.ConentsContainer>{Contents}</S.ConentsContainer>
    </S.ResultContatiner>
  );
}

export default GenreResult;
