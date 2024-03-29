import { mixin, viewSize } from '@/globalStyles/GlobalStyle';
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

  @media screen and (${viewSize.mobile}) {
    display: none;
  }
`;
