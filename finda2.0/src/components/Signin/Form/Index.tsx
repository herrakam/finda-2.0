import TextField from '@components/common/TextField/Index';
import * as S from '@components/Signin/Form/Index.style';
import { FormInfo } from './type';

function SignInForm() {
  const formInfos: FormInfo[] = [
    {
      label: 'eMail',
      title: '이메일',
      placeholder: '이메일을 입력해주세요',
    },
    {
      label: 'password',
      title: '비밀번호',
      placeholder: '비밀번호를 입력해주세요',
    },
    {
      label: 'rePassword',
      title: '비밀번호 재입력',
      placeholder: '비밀번호를 다시 한번 입력해주세요',
    },
    {
      label: 'nickname',
      title: '닉네임',
      placeholder: '닉네임을 입력해주세요',
    },
  ];

  const inputs = formInfos.map((info: FormInfo) => (
    <S.InputContainer key={info.label}>
      <S.InputTitle>{info.title}</S.InputTitle>
      <TextField fontSize="Regular" placeholder={info.placeholder} />
    </S.InputContainer>
  ));

  return (
    <S.FormContainer>
      <S.FormTitle>회원 가입</S.FormTitle>
      {inputs}
    </S.FormContainer>
  );
}

export default SignInForm;
