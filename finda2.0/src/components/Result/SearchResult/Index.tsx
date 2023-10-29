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
import { useEffect, useRef, useState } from 'react';

function SearchResult() {
  const param = useParams().searchParam;
  const [contentsCount, setContentCount] = useState<number>(0);
  const pageContentCount = 30;
  const searchInfo = param ? param : '';
  const [startPoint, setStartPoint] = useState<string>();
  const [isAbled, setIsAbled] = useState<boolean>(false);
  const [showedData, setShowedData] = useState<PosterDataType[]>([]);
  const pageEndRef = useRef<HTMLDivElement>(null);

  const getFirstResultData = async () => {
    const resultsRef = collection(db, 'poster');
    const snap =
      searchInfo === ''
        ? await getDocs(
            query(resultsRef, orderBy('title'), limit(pageContentCount)),
          )
        : await getDocs(
            query(
              resultsRef,
              where('title', '>=', searchInfo),
              where('title', '<=', searchInfo + '\uf8ff'),
              orderBy('title'),
              limit(pageContentCount),
            ),
          );
    const countContent =
      searchInfo === ''
        ? (await getDocs(query(resultsRef, orderBy('title')))).size
        : (
            await getDocs(
              query(
                resultsRef,
                where('title', '>=', searchInfo),
                where('title', '<=', searchInfo + '\uf8ff'),
                orderBy('title'),
              ),
            )
          ).size;
    const resultData: PosterDataType[] = [];
    snap?.forEach((data: DocumentData) => resultData.push(data.data()));
    return { resultData, countContent };
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

  const getNextData = () => {
    setIsAbled(true);
  };

  const {
    data: firstData,
    isLoading: firstDataLoading,
    error: firstDataError,
  } = getResultInfo();
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

  useEffect(() => {
    if (!pageEndRef.current) return;
    const io = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting && contentsCount > showedData.length) {
          getNextData();
        }
      },
      { threshold: 1 },
    );

    pageEndRef.current && io.observe(pageEndRef.current);

    return () => {
      io.disconnect();
    };
  }, [pageEndRef.current]);

  if (firstDataLoading) {
    return <>로딩중</>;
  }
  if (!firstData?.resultData.length)
    return (
      <S.ResultContatiner>
        <NoResult />
      </S.ResultContatiner>
    );
  const Contents = showedData.map((content: PosterDataType) => (
    <Poster key={content.title} title={content.title} src={content.poster} />
  ));
  const resultTitleText: string = searchInfo
    ? `"${searchInfo}" 검색 결과`
    : 'FINDA에서 제공하는 영화들';
  return (
    <S.ResultContatiner>
      <S.ResultTitle>{resultTitleText}</S.ResultTitle>
      <S.ConentsContainer>{Contents}</S.ConentsContainer>
      <div className="InfinityScrollTrigger" ref={pageEndRef}></div>
    </S.ResultContatiner>
  );
}
export default SearchResult;
