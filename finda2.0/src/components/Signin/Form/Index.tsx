import TextField from '@components/common/TextField/Index';
import * as S from '@components/Signin/Form/Index.style';
import { FormInfo } from './type';
import Btn from '@components/common/Button/Index';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

function SignInForm() {
  const { handleSubmit, register } = useForm<FieldValues>();

  ('^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'); // 이메일 validation

  const onSubmit: SubmitHandler<FieldValues> = data => console.log(data);
  const formInfos: FormInfo[] = [
    {
      label: 'eMail',
      title: '이메일',
      placeholder: '이메일을 입력해주세요',
      registerProps: {
        register: register,
        option: {
          pattern: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
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
          pattern:
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
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
          pattern:
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
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
          pattern:
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
        },
      },
    },
  ];

  const inputs = formInfos.map((info: FormInfo) => (
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
