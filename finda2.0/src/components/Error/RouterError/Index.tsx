import * as S from '@components/Error/Index.style';
import SorryImgSrc from '@/assets/b3fcnnrbp4iaf7epl48ef93vvo-4002569fd195ed02c1467425bb108063.png';
import { useRouteError } from 'react-router-dom';

function RouterError() {
  const error = useRouteError() as Error;
  console.log(error);
  return (
    <S.ErrorWrap>
      <S.Title>에러가 발생했습니다. 이전 페이지로 돌아가 주세요.</S.Title>
      <S.ImgContainer>
        <S.SorryImg src={SorryImgSrc} />
      </S.ImgContainer>
    </S.ErrorWrap>
  );
}

export default RouterError;
