import { mixin } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const PanelWrap = styled.div`
  position: fixed;
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })}
  z-index:40;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
`;
