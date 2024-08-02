import TextField from '@components/common/TextField/Index';
import * as S from '@components/Signin/Form/Index.style';
import { FormInput, SignInFormInfo } from './type';
import Btn from '@components/common/Button/Index';
import {
  useForm,
  SubmitHandler,
  FieldValues,
  Controller,
  SubmitErrorHandler,
} from 'react-hook-form';
import {
  AuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';
import { auth, db } from '@/Firebase';
import { useMove } from '@/hooks/useMove';
import { useRef, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { BtnsContainer, LoginBtn } from '@components/Login/Index.style';
import { LoginBtnType, LoginClickEventType } from '@components/Login/type';
import { FcGoogle } from 'react-icons/fc';
import { LOGINICONSIZE } from '@/assets/static';
import { BsGithub } from 'react-icons/bs';
import { SignInUser } from '@/utils/API';

const passwordPattern = /^[A-za-z0-9가-힣]{3,10}$/; //'가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자'

function SignInForm() {
  const { control, handleSubmit, watch } = useForm<FormInput>({
    mode: 'onChange',
    defaultValues: { password: '', rePassword: '', nickname: '' },
  });
  const goToPage = useMove();
  const [isAuthSuccess, setIsAuthSuccess] = useState<boolean>(false);
  const passwordRef = useRef<string>('');
  passwordRef.current = watch('password');

  const passwordRules = {
    required: true,
    pattern: {
      value: passwordPattern,
      message: '가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자',
    },
    minLength: { value: 8, message: '8글자 이상이어야 합니다' },
  };

  const rePasswordRules = {
    required: true,
    validate: (value: string) =>
      value === passwordRef.current || '비밀번호가 일치하지 않습니다',
  };
  const nicknameRules = {
    required: true,
    validate: (value: string) => checkNickNameExists(value),
  };

  const onSubmit: SubmitHandler<FieldValues> = data => {
    console.log(data);
    signUp(data.eMail, data.password, data.nickname);
  };
  const onSubmitError: SubmitErrorHandler<FieldValues> = error => {
    const errorObject = error[Object.keys(error)[0]];
    if (errorObject!.message === '') {
      window.alert('입력칸을 전부 채워주세요');
    } else {
      window.alert(errorObject!.message);
    }
  };

  const handleAuthSignIn: LoginClickEventType = async loginType => {
    let provider;
    if (loginType === 'google') {
      provider = new GoogleAuthProvider();
    } else if (loginType === 'github') {
      provider = new GithubAuthProvider();
    }
    const auth = getAuth();
    try {
      await signInWithPopup(auth, provider as AuthProvider);
      setIsAuthSuccess(true);
    } catch (error) {}
  };

  const signUp = async (eMail: string, password: string, nickname: string) => {
    console.log(eMail, password);
    await createUserWithEmailAndPassword(auth, eMail, password)
      .then(userCredential => {
        const user = userCredential.user;
        SignInUser({
          uid: user.uid,
          eMail: eMail,
          password: password,
          nickName: nickname,
        });
      })
      .then(() => {
        window.alert('성공적으로 가입되었습니다!');
        goToPage({});
      })
      .catch(e => {
        throw new Error(e);
      });
  };

  const checkNickNameExists = async (nickname: string) => {
    const nicknameSnap = await getDocs(
      query(collection(db, 'users'), where('NickName', '==', nickname)),
    );
    return nicknameSnap.empty
      ? '사용 가능한 닉네임입니다.'
      : '이미 사용 중인 닉네임입니다';
  };

  const signInBtnInfo: LoginBtnType[] = [
    {
      label: 'google',
      clickEvent: () => {
        handleAuthSignIn('google');
      },
      icon: <FcGoogle size={LOGINICONSIZE} />,
    },
    {
      label: 'github',
      clickEvent: () => {
        handleAuthSignIn('github');
      },
      icon: <BsGithub size={LOGINICONSIZE} />,
    },
  ];

  const formInfos: SignInFormInfo<FormInput>[] = [
    {
      label: 'password',
      title: '비밀번호',
      placeholder: '비밀번호를 입력해주세요',
      type: 'password',
      rules: passwordRules,
    },
    {
      label: 'rePassword',
      title: '비밀번호 재입력',
      placeholder: '비밀번호를 다시 한번 입력해주세요',
      type: 'password',
      rules: rePasswordRules,
    },
    {
      label: 'nickname',
      title: '닉네임',
      placeholder: '닉네임을 입력해주세요',
      rules: nicknameRules,
    },
  ];

  const EasySignInBtns = signInBtnInfo.map((btnInfo: LoginBtnType) => (
    <LoginBtn
      onClick={() => {
        btnInfo.clickEvent(btnInfo.label);
      }}
      label={btnInfo.label}
      key={btnInfo.label}
    >
      {btnInfo.icon}
    </LoginBtn>
  ));

  const inputs =
    isAuthSuccess &&
    formInfos.map((info: SignInFormInfo<FormInput>) => (
      <S.InputContainer key={info.label}>
        <S.InputTitle>{info.title}</S.InputTitle>
        <Controller
          name={info.label}
          control={control}
          rules={info.rules}
          render={({ fieldState: { error }, field: { value, onChange } }) => (
            <>
              <TextField
                fontSize="Regular"
                {...info}
                value={value}
                onChange={onChange}
              />
              <S.ErrorMessage>{error?.message}</S.ErrorMessage>
            </>
          )}
        />
      </S.InputContainer>
    ));

  return (
    <S.FormContainer>
      <S.FormTitle>SIGN IN</S.FormTitle>
      {!isAuthSuccess && (
        <>
          <S.BtnText>아이디로 사용할 이메일 계정을 선택해주세요</S.BtnText>
          <BtnsContainer>{EasySignInBtns}</BtnsContainer>
        </>
      )}
      {isAuthSuccess && (
        <S.SignInForm onSubmit={handleSubmit(onSubmit, onSubmitError)}>
          <S.InputContainer>
            <S.InputTitle>이메일</S.InputTitle>
            <S.EmailText>{getAuth().currentUser?.email}</S.EmailText>
          </S.InputContainer>
          {inputs}
          <S.BtnContainer>
            <Btn text="회원가입" type="submit" />
          </S.BtnContainer>
        </S.SignInForm>
      )}
    </S.FormContainer>
  );
}

export default SignInForm;
