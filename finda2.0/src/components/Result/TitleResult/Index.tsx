import * as S from '@components/Result/TitleResult/Index.style';
import Poster from '@components/common/Poster/Index';
import { useQuery } from '@tanstack/react-query';
import NoResult from '@components/Result/NoResult/Index';
import { NormalizedPosterDataType, SearchResultPropsType } from '@/utils/type';
import { useEffect, useState } from 'react';
import {
  getFirstResultData,
  getFirstResultDataWithInfo,
  getNextResultData,
} from '@/utils/API';

function TitleResult({
  setContentCount,
  setShowedData,
  showedData,
  isAbled,
  setIsAbled,
  searchInfo,
}: SearchResultPropsType) {
  const [startPoint, setStartPoint] = useState<string>('');

  const getResultInfo = () => {
    return useQuery(['getResultQueryKey', searchInfo], () => {
      if (searchInfo === '') {
        return getFirstResultData();
      } else {
        return getFirstResultDataWithInfo(searchInfo);
      }
    });
  };

  const getNextResultInfo = () => {
    return useQuery(
      ['getNextResultQueryKey', startPoint],
      () => {
        return getNextResultData(startPoint!, searchInfo);
      },
      {
        enabled: isAbled,
      },
    );
  };

  const { data: firstData, isLoading: firstDataLoading } = getResultInfo();
  const { data: nextData, isLoading: secondDataLoading } = getNextResultInfo();

  useEffect(() => {
    if (firstData && firstData.resultData.length) {
      const firstEndPoint = firstData.resultData.at(-1)!.title as string;
      setShowedData([...firstData.resultData]);
      setStartPoint(firstEndPoint);
      setContentCount(firstData.countContent);
    }
  }, [firstData]);

  useEffect(() => {
    if (nextData) {
      const nextEndPoint = nextData.at(-1)!.title as string;
      setShowedData([...showedData, ...nextData]);
      setStartPoint(nextEndPoint);
      setIsAbled(false);
    }
  }, [nextData]);

  if (firstDataLoading) <>로딩중</>;
  if (secondDataLoading) <>로딩중</>;
  if (!firstData?.resultData.length)
    return (
      <S.ResultContatiner>
        <NoResult searchInfo={searchInfo} />
      </S.ResultContatiner>
    );
  const Contents = showedData.map((content: NormalizedPosterDataType) => (
    <Poster key={content.title} title={content.title} src={content.poster} />
  ));
  return (
    <S.ResultContatiner>
      <S.ConentsContainer>{Contents}</S.ConentsContainer>
    </S.ResultContatiner>
  );
}
export default TitleResult;
