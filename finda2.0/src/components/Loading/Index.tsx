import * as S from '@components/Loading/Index.style';

function Loading() {
  return (
    <S.Container>
      <S.Spinner />
      <S.Copy>로딩중...</S.Copy>
    </S.Container>
  );
}

export default Loading;
