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
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/Firebase';
import { useMove } from '@/hooks/useMove';

const emailPattern = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/; //계정@도메인.최상위도메인' 형식의 데이터
const passwordPattern = /^[A-za-z0-9가-힣]{3,10}$/; //'가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자'

function SignInForm() {
  const { control, handleSubmit } = useForm<FormInput>({
    mode: 'onChange',
    defaultValues: {
      eMail: '',
      password: '',
      rePassword: '',
      nickname: '',
    },
  });
  const goToPage = useMove();
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
    min: { value: 8, message: '8 미만의 값을 입력할 수 없습니다' },
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
    // signUp(data.email, data.password);
  };
  const onSubmitError: SubmitErrorHandler<FieldValues> = error => {
    const errorObject = error[Object.keys(error)[0]];
    if (errorObject!.message === '') {
      window.alert('입력칸을 전부 체워주세요');
    } else {
      window.alert(errorObject!.message);
    }
  };

  const signUp = async (id: string, password: string) => {
    await createUserWithEmailAndPassword(auth, id, password)
      .then(() => {
        window.alert('성공적으로 가입되었습니다!');
        goToPage({});
      })
      .catch(e => {
        throw new Error(e);
      });
  };

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
    </S.FormContainer>
  );
}

export default SignInForm;
