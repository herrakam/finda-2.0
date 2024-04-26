import { auth } from '@/Firebase';
import Dimmed from '@components/common/Dimmed/Index';
import { DimmedType } from '@components/common/Dimmed/type';
import * as S from '@components/Login/Index.style';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { LoginBtnType, LoginClickEventType } from './type';

function Login() {
  const handleLogin: LoginClickEventType = loginType => {
    if (loginType === 'google') {
      const googleProvider = new GoogleAuthProvider();
      signInWithPopup(auth, googleProvider);
    } else if (loginType === 'github') {
      const githubProvider = new GithubAuthProvider();
      signInWithPopup(auth, githubProvider);
    }
  };

  const dimmedProps: DimmedType = {
    isHover: true,
  };

  const loginBtnInfo: LoginBtnType[] = [
    {
      label: 'google',
      clickEvent: () => {
        handleLogin('google');
      },
    },
    {
      label: 'github',
      clickEvent: () => {
        handleLogin('github');
      },
    },
  ];

  const loginBtns = loginBtnInfo.map((btnInfo: LoginBtnType) => (
    <S.LoginBtn
      onClick={() => {
        btnInfo.clickEvent(btnInfo.label);
      }}
      label={btnInfo.label}
      key={btnInfo.label}
    />
  ));

  return (
    <Dimmed {...dimmedProps}>
      <S.LoginContainer>
        <S.Title>로그인</S.Title>
        <S.BtnsContainer>{loginBtns}</S.BtnsContainer>
      </S.LoginContainer>
    </Dimmed>
  );
}

export default Login;
