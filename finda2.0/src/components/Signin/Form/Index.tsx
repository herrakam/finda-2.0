import TextField from '@components/common/TextField/Index';
import * as S from '@components/Signin/Form/Index.style';
import { FormInput, SignInFormInfo } from './type';
import Btn from '@components/common/Button/Index';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

function SignInForm() {
  const { handleSubmit, register } = useForm<FormInput>({
    mode: 'onChange',
    defaultValues: {
      eMail: '',
      password: '',
      rePassword: '',
      nickname: '',
    },
  });

  const emailPattern = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/; //계정@도메인.최상위도메인' 형식의 데이터
  const passwordPattern = /^[A-za-z0-9가-힣]{3,10}$/; //'가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자'

  const onSubmit: SubmitHandler<FieldValues> = data => console.log(data);
  const formInfos: SignInFormInfo<FormInput>[] = [
    {
      label: 'eMail',
      title: '이메일',
      placeholder: '이메일을 입력해주세요',
      registerProps: {
        register: register,
        option: {
          required: true,
          pattern: emailPattern,
          validate: {
            messages: v => !v && ['test', 'test2'],
          },
        },
      },
    },
    {
      label: 'password',
      title: '비밀번호',
      placeholder: '비밀번호를 입력해주세요',
      registerProps: {
        register: register,
        option: {
          required: true,
          minLength: {
            value: 8,
            message: '8글자 이상 입력해주세요',
          },
          pattern: {
            value: passwordPattern,
            message: '가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자',
          },
        },
      },
    },
    {
      label: 'rePassword',
      title: '비밀번호 재입력',
      placeholder: '비밀번호를 다시 한번 입력해주세요',
      registerProps: {
        register: register,
        option: {
          validate: {},
        },
      },
    },
    {
      label: 'nickname',
      title: '닉네임',
      placeholder: '닉네임을 입력해주세요',
      registerProps: {
        register: register,
        option: {
          required: true,
          pattern:
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
        },
      },
    },
  ];

  const inputs = formInfos.map((info: SignInFormInfo<FormInput>) => (
    <S.InputContainer key={info.label}>
      <S.InputTitle>{info.title}</S.InputTitle>
      <TextField fontSize="Regular" {...info} />
    </S.InputContainer>
  ));

  const mockBtnEvent = () => window.alert('버튼 클릭됨');

  return (
    <S.FormContainer>
      <S.FormTitle>SIGN IN</S.FormTitle>
      <S.SignInForm onSubmit={handleSubmit(onSubmit)}>{inputs}</S.SignInForm>
      <S.BtnContainer>
        <Btn text="회원가입" clickEvent={mockBtnEvent} />
      </S.BtnContainer>
    </S.FormContainer>
  );
}

export default SignInForm;
