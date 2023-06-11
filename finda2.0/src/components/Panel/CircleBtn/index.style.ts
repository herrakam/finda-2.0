import { mixin } from '@/globalStyles/GlobalStyle';
import { ShowPanelBtn } from '@components/Panel/Index.style';
import styled from 'styled-components';

export const CircleBtnWrap = styled(ShowPanelBtn)<{
  order: number;
  isClicked: boolean;
}>`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })}
  text-decoration: none;
  border: none;
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 999px;
  transition: 0.5s;
  background: ${({ theme }) => theme.pallete.normalBtn};
  ${({ theme }) => theme.typography.Regular};
  z-index: ${({ order }) => (!order ? 40 : 5 + order)};
  color: ${({ theme }) => theme.pallete.normalFont};
  bottom: ${({ order, isClicked }) => (isClicked ? `${order * 100}px` : '0')};
`;
