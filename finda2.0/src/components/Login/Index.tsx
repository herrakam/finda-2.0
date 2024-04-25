import Dimmed from '@components/common/Dimmed/Index';
import { DimmedType } from '@components/common/Dimmed/type';
import * as S from '@components/Login/Index.style';

function Login() {
  const dimmedProps: DimmedType = {
    isHover: true,
  };
  return (
    <Dimmed {...dimmedProps}>
      <S.LoginWrap>로그인 페이지</S.LoginWrap>
    </Dimmed>
  );
}

export default Login;
