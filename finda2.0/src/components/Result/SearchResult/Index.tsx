import { db } from '@/Firebase';
import * as S from '@components/Result/SearchResult/Index.style';
import Poster from '@components/common/Poster/Index';
import { useQuery } from '@tanstack/react-query';
import {
  DocumentData,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore';
import NoResult from '@components/NoResult/Index';
import { useParams } from 'react-router-dom';
import { PosterDataType } from '@/utils/type';
import { useEffect, useState } from 'react';

function SearchResult() {
  const param = useParams().searchParam;
  const searchInfo = param ? param : '';
  const [startPoint, setStartPoint] = useState<string>();
  const [isAbled, setIsAbled] = useState<boolean>(false);
  const [showedData, setShowedData] = useState<PosterDataType[]>([]);

  const getFirstResultData = async () => {
    const resultsRef = collection(db, 'poster');
    const snap =
      searchInfo === ''
        ? await getDocs(query(resultsRef, orderBy('title'), limit(30)))
        : await getDocs(
            query(
              resultsRef,
              where('title', '>=', searchInfo),
              where('title', '<=', searchInfo + '\uf8ff'),
              orderBy('title'),
              limit(30),
            ),
          );
    const resultData: PosterDataType[] = [];
    snap?.forEach((data: DocumentData) => resultData.push(data.data()));
    return resultData;
  };

  const getNextResultData = async (lastContent: string) => {
    const resultsRef = collection(db, 'poster');
    const snap =
      searchInfo === ''
        ? await getDocs(
            query(
              resultsRef,
              orderBy('title'),
              startAfter(lastContent),
              limit(30),
            ),
          )
        : await getDocs(
            query(
              resultsRef,
              where('title', '>=', searchInfo),
              where('title', '<=', searchInfo + '\uf8ff'),
              orderBy('title'),
              startAfter(lastContent),
              limit(30),
            ),
          );
    const nextResultData: PosterDataType[] = [];
    snap?.forEach((data: DocumentData) => nextResultData.push(data.data()));
    return nextResultData;
  };

  const getResultInfo = () => {
    return useQuery(['getResultQueryKey', searchInfo], getFirstResultData);
  };

  const getNextResultInfo = () => {
    return useQuery(
      ['getNextResultQueryKey', startPoint],
      () => {
        return getNextResultData(startPoint!);
      },
      {
        enabled: isAbled,
      },
    );
  };
  const firstData = getResultInfo().data;
  const nextData = getNextResultInfo().data;

  const getNextData = () => {
    setStartPoint(startPoint);
    setIsAbled(true);
  };

  useEffect(() => {
    if (firstData) {
      const firstEndPoint = firstData.at(-1)!.title as string;
      setStartPoint(firstEndPoint);
      setShowedData([...firstData]);
      setIsAbled(true);
    }
  }, [firstData]);
  useEffect(() => {
    if (nextData) {
      const nextEndPoint = nextData.at(-1)!.title as string;
      console.log(nextData);
      setShowedData([...showedData, ...nextData]);
      setStartPoint(nextEndPoint);
      setIsAbled(false);
    }
  }, [nextData, startPoint]);

  if (!firstData?.length)
    return (
      <S.ResultContatiner>
        <NoResult />
      </S.ResultContatiner>
    );
  const Contents = showedData.map((content: PosterDataType) => (
    <Poster key={content.title} title={content.title} src={content.poster} />
  ));
  const resultTitleText: string = searchInfo
    ? `${searchInfo} 검색 결과`
    : 'FINDA에서 제공하는 영화들';
  return (
    <S.ResultContatiner>
      <button onClick={getNextData}>클릭</button>
      <S.ResultTitle>{resultTitleText}</S.ResultTitle>
      <S.ConentsContainer>{Contents}</S.ConentsContainer>
    </S.ResultContatiner>
  );
}
export default SearchResult;
