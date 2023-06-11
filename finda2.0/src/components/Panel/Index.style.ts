import { mixin } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const PanelWrap = styled.div`
  position: fixed;
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })}
  z-index:50;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.pallete.normalBtn};
  border-radius: 999px;
  ${({ theme }) => theme.typography.Bold};
`;
export const ShowPanelBtn = styled.button`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })}
  text-decoration: none;
  border: none;
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 999px;
  background: ${({ theme }) => theme.pallete.normalBtn};
  ${({ theme }) => theme.typography.Regular};
  z-index: 40;
  color: ${({ theme }) => theme.pallete.normalFont};
`;
