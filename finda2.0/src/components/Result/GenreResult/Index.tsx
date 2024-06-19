import { getSimilarMovies } from '@/utils/API';
import { useEffect, useState } from 'react';
import * as S from '@components/Result/TitleResult/Index.style';
import { useQuery } from '@tanstack/react-query';
import { GenreResultPropsType } from './type';
import { PAGECONTENTCOUNT } from '@/assets/static';
import Poster from '@components/common/Poster/Index';
import { NormalizedPosterDataType } from '@/utils/type';
import NoResult from '../NoResult/Index';

function GenreResult({
  setShowedData,
  setContentCount,
  showedData,
  genreNumArr,
  isAbled,
  setIsAbled,
  searchInfo,
}: GenreResultPropsType) {
  const [curPage, setCurPage] = useState<number>(1);

  const getFirstGenreResultInfo = (genreNumArr: number[]) => {
    return useQuery(['getResultQueryKey', genreNumArr], () => {
      return genreNumArr && getSimilarMovies(genreNumArr);
    });
  };

  const getNextDataWithGenre = () => {
    if (isAbled) {
      const cur = curPage * PAGECONTENTCOUNT;
      const next = (curPage + 1) * PAGECONTENTCOUNT;
      setShowedData([...showedData, ...data!.resultData.slice(cur, next)]);
      setCurPage(curPage + 1);
      setIsAbled(false);
    }
  };

  const { data } = getFirstGenreResultInfo(genreNumArr);
  useEffect(() => {
    if (data) {
      console.log(data.resultData.slice(0, PAGECONTENTCOUNT));
      setShowedData([...data.resultData.slice(0, PAGECONTENTCOUNT)]);
      setContentCount(data.countContent);
      setIsAbled(false);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      getNextDataWithGenre();
    }
  }, [isAbled]);

  useEffect(() => {
    if (data) {
      setShowedData([...data.resultData.slice(0, PAGECONTENTCOUNT)]);
      setContentCount(data.countContent);
    }
  }, []);

  const Contents = showedData.map((content: NormalizedPosterDataType) => (
    <Poster key={content.title} title={content.title} src={content.poster} />
  ));
  if (!showedData.length)
    return (
      <S.ResultContatiner>
        <NoResult searchInfo={searchInfo} isGenre />
      </S.ResultContatiner>
    );

  return (
    <S.ResultContatiner>
      <S.ConentsContainer>{Contents}</S.ConentsContainer>
    </S.ResultContatiner>
  );
}

export default GenreResult;
