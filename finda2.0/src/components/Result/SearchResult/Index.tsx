import { db } from '@/Firebase';
import * as S from '@components/Result/SearchResult/Index.style';
import Poster from '@components/common/Poster/Index';
import { useQuery } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';
import { ResultDataType } from '@components/Result/SearchResult/type';

async function getResultInfo() {
  const snap = (await getDoc(doc(db, 'result', 'gQHtYLSBK5uTUQfyVlOR'))).data();
  return snap;
}

function getResultData() {
  const { data, isSuccess } = useQuery(['resultQueryKey'], getResultInfo);

  if (isSuccess) return data as ResultDataType;
}

function SearchResult() {
  const { subject, resultInfo } = getResultData()!;
  const Contents = resultInfo.map(content => (
    <Poster key={content.title} title={content.title} src={content.imgSrc} />
  ));
  return (
    <S.ResultContatiner>
      <S.ResultTitle>{subject} 검색 결과</S.ResultTitle>
      <S.ConentsContainer>{Contents}</S.ConentsContainer>
    </S.ResultContatiner>
  );
}
export default SearchResult;
