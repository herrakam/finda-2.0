import * as S from '@/components/NoResult/Index.style';
import SorryImgSrc from '@/assets/b3fcnnrbp4iaf7epl48ef93vvo-4002569fd195ed02c1467425bb108063.png';

function NoResult() {
  return (
    <S.Container>
      <S.Title>검색 결과를 찾지 못했습니다</S.Title>
      <S.ImageContainer>
        <S.SorryImg src={SorryImgSrc} />
      </S.ImageContainer>
    </S.Container>
  );
}

export default NoResult;
