import { auth } from '@/Firebase';
import Dimmed from '@components/common/Dimmed/Index';
import { DimmedType } from '@components/common/Dimmed/type';
import * as S from '@components/Login/Index.style';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { LoginBtnType, LoginClickEventType, ProviderType } from './type';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { LOGINICONSIZE } from '@/assets/static';
import { useSetAtom } from 'jotai';
import { isLoginAtom, isLoginPopUp } from '@/atoms/IsLogin';

function Login() {
  const setIsLogin = useSetAtom(isLoginAtom);

  const setLoginPopUp = useSetAtom(isLoginPopUp);

  const closeLoginPopUp = () => setLoginPopUp(false);

  const handleLogin: LoginClickEventType = loginType => {
    if (loginType === 'google') {
      const googleProvider = new GoogleAuthProvider();
      LoginWithPopUp(googleProvider);
    } else if (loginType === 'github') {
      const githubProvider = new GithubAuthProvider();
      LoginWithPopUp(githubProvider);
    }
  };

  const LoginWithPopUp = async (provider: ProviderType) => {
    await signInWithPopup(auth, provider);
    try {
      setIsLogin(true);
      closeLoginPopUp();
    } catch (err) {
      console.error(err);
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
