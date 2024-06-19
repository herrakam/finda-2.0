import * as S from '@components/Result/NoResult/Index.style';
import SorryImgSrc from '@/assets/b3fcnnrbp4iaf7epl48ef93vvo-4002569fd195ed02c1467425bb108063.png';
import { NoResultType } from './type';
import { getGenreTextFromArr } from '@/utils/util';

function NoResult({ searchInfo, isGenre }: NoResultType) {
  const title = isGenre ? (
    <S.Title>
      장르가 {getGenreTextFromArr(searchInfo.split(',').map(Number))}인 영화를
      찾지 못했습니다
    </S.Title>
  ) : (
    <S.Title>"{searchInfo}"에 대한 검색 결과를 찾지 못했습니다</S.Title>
  );

  return (
    <S.Container>
      {title}
      <S.ImageContainer>
        <S.SorryImg src={SorryImgSrc} />
      </S.ImageContainer>
    </S.Container>
  );
}

export default NoResult;
