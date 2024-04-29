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
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { LOGINICONSIZE } from '@/assets/static';

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
      icon: <FcGoogle size={LOGINICONSIZE} />,
    },
    {
      label: 'github',
      clickEvent: () => {
        handleLogin('github');
      },
      icon: <BsGithub size={LOGINICONSIZE} />,
    },
  ];

  const loginBtns = loginBtnInfo.map((btnInfo: LoginBtnType) => (
    <S.LoginBtn
      onClick={() => {
        btnInfo.clickEvent(btnInfo.label);
      }}
      label={btnInfo.label}
      key={btnInfo.label}
    >
      {btnInfo.icon}
    </S.LoginBtn>
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
