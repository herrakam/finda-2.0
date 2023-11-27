import { getSimilarMovies } from '@/utils/API';
import { useEffect } from 'react';
import * as S from '@components/Result/SearchResult/Index.style';
import { useQuery } from '@tanstack/react-query';
import { GenreResultPropsType } from './type';

function GenreResult({
  contentsCount,
  setContentCount,
  setShowedData,
  showedData,
  genreNumArr,
}: GenreResultPropsType) {
  const getFirstGenreResultInfo = (genreNumArr: number[]) => {
    return useQuery(['getResultQueryKey', genreNumArr], () => {
      return genreNumArr && getSimilarMovies(genreNumArr);
    });
  };

  const { data, isLoading, error } = getFirstGenreResultInfo(genreNumArr);
  if (isLoading) <>로딩중</>;
  useEffect(() => {}, [data]);

  console.log(contentsCount, setContentCount, setShowedData, showedData); // 에러 제거용, 변수들 사용시 제거해야함

  return <S.ResultContatiner></S.ResultContatiner>;
}

export default GenreResult;
