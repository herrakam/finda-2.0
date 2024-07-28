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
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { auth, db } from '@/Firebase';
import { useMove } from '@/hooks/useMove';
import { useRef } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { BtnsContainer, LoginBtn } from '@components/Login/Index.style';
import { LoginBtnType } from '@components/Login/type';
import { FcGoogle } from 'react-icons/fc';
import { LOGINICONSIZE } from '@/assets/static';
import { BsGithub } from 'react-icons/bs';

const emailPattern = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/; //계정@도메인.최상위도메인' 형식의 데이터
const passwordPattern = /^[A-za-z0-9가-힣]{3,10}$/; //'가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자'

function SignInForm() {
  const { control, handleSubmit, watch } = useForm<FormInput>({
    mode: 'onChange',
    defaultValues: {
      eMail: '',
      password: '',
      rePassword: '',
      nickname: '',
    },
  });
  const goToPage = useMove();

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

  const eMailRules = {
    required: true,
    pattern: {
      value: emailPattern,
      message: '유효하지 않은 이메일 입니다',
    },
  };
  const rePasswordRules = {
    required: true,
    validate: (value: string) =>
      value === passwordRef.current || '비밀번호가 일치하지 않습니다',
  };
  const nicknameRules = {
    required: true,
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
      message: '유효하지 않은 닉네임입니다.',
    },
  };

  const onSubmit: SubmitHandler<FieldValues> = data => {
    console.log(data);
    signUp(data.eMail, data.password);
  };
  const onSubmitError: SubmitErrorHandler<FieldValues> = error => {
    const errorObject = error[Object.keys(error)[0]];
    if (errorObject!.message === '') {
      window.alert('입력칸을 전부 채워주세요');
    } else {
      window.alert(errorObject!.message);
    }
  };

  const signUp = async (id: string, password: string) => {
    console.log(id, password);
    await createUserWithEmailAndPassword(auth, id, password)
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
    return nicknameSnap.empty ? undefined : '이미 사용 중인 닉네임입니다';
  };

  const checkIdExists = async (id: string) => {
    getAuth()
      .getUserByEmail(id)
      .then(userRecord => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
      })
      .catch(error => {
        console.log(error);
        window.alert('이미 사용중인 이메일입니다.');
      });
  };

  const signInBtnInfo: LoginBtnType[] = [
    {
      label: 'google',
      clickEvent: () => {},
      icon: <FcGoogle size={LOGINICONSIZE} />,
    },
    {
      label: 'github',
      clickEvent: () => {},
      icon: <BsGithub size={LOGINICONSIZE} />,
    },
  ];

  const formInfos: SignInFormInfo<FormInput>[] = [
    {
      label: 'eMail',
      title: '이메일',
      placeholder: '이메일을 입력해주세요',
      rules: eMailRules,
    },
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

  const inputs = formInfos.map((info: SignInFormInfo<FormInput>) => (
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
      <S.SignInForm onSubmit={handleSubmit(onSubmit, onSubmitError)}>
        {inputs}
        <S.BtnContainer>
          <Btn text="회원가입" type="submit" />
        </S.BtnContainer>
      </S.SignInForm>
      <S.AuthLoginTitle>간편 회원가입</S.AuthLoginTitle>
      <BtnsContainer>{EasySignInBtns}</BtnsContainer>
    </S.FormContainer>
  );
}

export default SignInForm;
