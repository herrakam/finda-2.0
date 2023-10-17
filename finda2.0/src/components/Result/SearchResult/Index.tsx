import { db } from '@/Firebase';
import * as S from '@components/Result/SearchResult/Index.style';
import Poster from '@components/common/Poster/Index';
import { useQuery } from '@tanstack/react-query';
import {
  DocumentData,
  collection,
  getDocs,
  limit,
  query,
  where,
} from 'firebase/firestore';
import NoResult from '@components/NoResult/Index';
import { useParams } from 'react-router-dom';
import { PosterDataType } from '@/utils/type';

function SearchResult() {
  const param = useParams().searchParam;
  const searchInfo = param ? param : '';

  const getResultData = async () => {
    const resultsRef = collection(db, 'poster');
    const snap =
      searchInfo === ''
        ? await getDocs(resultsRef)
        : await getDocs(
            query(
              resultsRef,
              where('title', '>=', searchInfo),
              where('title', '<=', searchInfo + '\uf8ff'),
              limit(100),
            ),
          );
    const resultData: PosterDataType[] = [];
    snap?.forEach((data: DocumentData) => resultData.push(data.data()));
    return resultData;
  };

  const getResultInfo = () => {
    return useQuery(['getResultQueryKey', searchInfo], getResultData);
  };
  const { data } = getResultInfo();

  if (!data?.length)
    return (
      <S.ResultContatiner>
        <NoResult />
      </S.ResultContatiner>
    );
  const Contents = data?.map((content: PosterDataType) => (
    <Poster key={content.title} title={content.title} src={content.poster} />
  ));
  const resultTitleText: string = searchInfo
    ? `${searchInfo} 검색 결과`
    : 'FINDA에서 제공하는 영화들';
  return (
    <S.ResultContatiner>
      <S.ResultTitle>{resultTitleText}</S.ResultTitle>
      <S.ConentsContainer>{Contents}</S.ConentsContainer>
    </S.ResultContatiner>
  );
}
export default SearchResult;
