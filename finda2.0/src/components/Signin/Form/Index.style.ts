import { mixin } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const FormContainer = styled.div`
  ${mixin.flexbox({ dir: 'column', vertical: 'center' })};
  gap: 20px;
  margin-top: 20vh;
  width: 40%;
`;
export const FormTitle = styled.span`
  ${({ theme }) => theme.typography.SemiTitle};
  color: ${({ theme }) => theme.pallete.normalFont};
`;
export const InputTitle = styled.span`
  ${({ theme }) => theme.typography.Bold};
  color: ${({ theme }) => theme.pallete.normalFont};
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
