import { mixin } from '@/globalStyles/GlobalStyle';
import { ShowPanelBtn } from '@components/Panel/Index.style';
import styled from 'styled-components';

export const CircleBtnWrap = styled(ShowPanelBtn)<{ order: number }>`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })}
  text-decoration: none;
  border: none;
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 999px;
  transition: 0.5s;
  background: ${({ theme }) => theme.pallete.normalBtn};
  ${({ theme }) => theme.typography.Bold};
  z-index: ${({ order }) => 5 + order};
`;
