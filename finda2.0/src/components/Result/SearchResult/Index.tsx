import { db } from '@/Firebase';
import * as S from '@components/Result/SearchResult/Index.style';
import Poster from '@components/common/Poster/Index';
import { useQuery } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';
import { ResultInfoContentType } from '@components/Result/SearchResult/type';
import NoResult from '@components/NoResult/Index';

async function getResultData() {
  const resultpath = import.meta.env.VITE_RESULT_ID;
  const snap = await getDoc(doc(db, 'result', resultpath));
  return snap?.data();
}

function getResultInfo() {
  return useQuery(['getResultQueryKey'], getResultData);
}

function SearchResult() {
  const { data } = getResultInfo();

  if (!data?.resultInfo.length)
    return (
      <S.ResultContatiner>
        <NoResult />
      </S.ResultContatiner>
    );
  const Contents = data?.resultInfo.map((content: ResultInfoContentType) => (
    <Poster key={content.title} title={content.title} src={content.imgSrc} />
  ));

  return (
    <S.ResultContatiner>
      <S.ResultTitle>{data?.subject} 검색 결과</S.ResultTitle>
      <S.ConentsContainer>{Contents}</S.ConentsContainer>
    </S.ResultContatiner>
  );
}
export default SearchResult;
