import { mixin, viewSize } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const FormContainer = styled.div`
  ${mixin.flexbox({ dir: 'column', vertical: 'center' })};
  gap: 20px;
  margin-top: 20vh;
  width: 40%;
  @media screen and (${viewSize.mobile}) {
    width: 60%;
  }
`;

export const SignInForm = styled.form`
  width: 100%;
  ${mixin.flexbox({ dir: 'column' })}
  gap: 30px;
`;
export const FormTitle = styled.span`
  ${({ theme }) => theme.typography.SemiTitle};
  color: ${({ theme }) => theme.pallete.normalFont};
`;
export const InputTitle = styled.span`
  ${({ theme }) => theme.typography.Bold};
  color: ${({ theme }) => theme.pallete.normalFont};
  @media screen and (${viewSize.mobile}) {
    ${({ theme }) => theme.typography.Regular};
  }
`;
export const InputContainer = styled.div`
  ${mixin.flexbox({
    dir: 'column',
    vertical: 'space-between',
    horizontal: 'center',
  })};
  gap: 10px;
  width: 100%;
`;
export const BtnContainer = styled.div`
  ${mixin.flexbox({ dir: 'column', vertical: 'center' })};
  margin-top: 40px;
  margin-bottom: 20vh;
`;
