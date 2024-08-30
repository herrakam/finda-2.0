import { auth } from '@/Firebase';
import * as S from '@components/Login/Index.style';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';
import { LoginBtnType, LoginClickEventType, ProviderType } from './type';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { LOGINICONSIZE } from '@/assets/static';
import { useSetAtom } from 'jotai';
import { isLoginAtom, modalPopUpAtom } from '@/atoms/IsLogin';
import { getUserInfo, isAccountInUserData } from '@/utils/API';
import { useCookies } from 'react-cookie';
import { userAtom } from '@/atoms/user';
import { useMove } from '@/hooks/useMove';

function Login() {
  const setIsLogin = useSetAtom(isLoginAtom);

  const setUserInfo = useSetAtom(userAtom);

  const setLoginPopUp = useSetAtom(modalPopUpAtom);

  const [_, setCookie] = useCookies(['token']);

  const closeLoginPopUp = () => setLoginPopUp(false);

  const goToPage = useMove();

  const handleLogin: LoginClickEventType = async loginType => {
    if (loginType === 'google') {
      const googleProvider = new GoogleAuthProvider();
      await LoginWithPopUp(googleProvider)
        .then(async result => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken as string;
          const auth = getAuth();
          const uid = auth.currentUser?.uid as string;

          sessionStorage.setItem('uid', uid);
          setCookie('token', token, { path: '/', maxAge: 21600 });
          await getUserInfo().then(data => {
            const { nickName } = data;
            setUserInfo({ nickName: nickName });
          });
        })

        .catch(e => {
          throw new Error(e);
        });
    } else if (loginType === 'github') {
      const githubProvider = new GithubAuthProvider();
      await LoginWithPopUp(githubProvider)
        .then(() => {
          getUserInfo();
        })
        .catch(e => {
          throw new Error(e);
        });
    }
  };

  const LoginWithPopUp = async (provider: ProviderType) => {
    return await signInWithPopup(auth, provider)
      .then(async result => {
        const uid = result.user.uid as string;
        const isAccountExists = await isAccountInUserData(uid);
        if (isAccountExists) {
          setIsLogin(true);
          closeLoginPopUp();
          return result;
        } else {
          window.alert(
            '등록되지 않은 이메일입니다. 회원가입 페이지로 이동합니다.',
          );
          goToPage({ url: 'signUp' });
          return result;
        }
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
  };

  const loginBtnInfo: LoginBtnType[] = [
    {
      label: 'google',
      clickEvent: () => {
        handleLogin('google');
      },
      icon: <FcGoogle size={LOGINICONSIZE} />,
    },
    // {
    //   label: 'github',
    //   clickEvent: () => {
    //     handleLogin('github');
    //   },
    //   icon: <BsGithub size={LOGINICONSIZE} />,
    // },
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
    <S.LoginContainer>
      <S.Title>로그인</S.Title>
      <S.BtnsContainer>{loginBtns}</S.BtnsContainer>
    </S.LoginContainer>
  );
}

export default Login;
