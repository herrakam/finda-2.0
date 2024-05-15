import TextField from '@components/common/TextField/Index';
import * as S from '@components/Signin/Form/Index.style';
import { FormInfo } from './type';
import Btn from '@components/common/Button/Index';

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

  const mockBtnEvent = () => window.alert('버튼 클릭됨');

  return (
    <S.FormContainer>
      <S.FormTitle>SIGN IN</S.FormTitle>
      {inputs}
      <S.BtnContainer>
        <Btn text="회원가입" clickEvent={mockBtnEvent} />
      </S.BtnContainer>
    </S.FormContainer>
  );
}

export default SignInForm;
