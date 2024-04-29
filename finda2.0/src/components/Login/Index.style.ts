import { mixin } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';
import { HandleLoginType } from './type';

export const LoginContainer = styled.div`
  width: 40%;
  height: 70%;
  background: ${({ theme }) => theme.pallete.normalBg};
  ${({ theme }) => theme.typography.Regular};
  color: ${({ theme }) => theme.pallete.normalFont};
  ${mixin.flexbox({
    vertical: 'center',
    horizontal: 'space-around',
    dir: 'column',
  })};
  gap: 25%;
`;

export const Title = styled.span`
  ${({ theme }) => theme.typography.Title};
  color: ${({ theme }) => theme.pallete.normalFont};
`;

export const BtnsContainer = styled.div`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  gap: 20px;
`;
export const LoginBtn = styled.button<{ label: HandleLoginType }>`
  text-decoration: none;
  border: none;
  background: ${({ label, theme }) =>
    label === 'google'
      ? theme.pallete.white
      : label === 'github'
      ? theme.pallete.grey2
      : theme.pallete.normalBtn};
  color: ${({ theme }) => theme.pallete.normalFont};
  width: 50px;
  height: 50px;
  border-radius: 999px;
`;
