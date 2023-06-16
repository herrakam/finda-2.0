import { mixin } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const MainBottomWrap = styled.div`
  width: 100%;
  height: 100vh;
  ${mixin.flexbox({ dir: 'column', vertical: 'center', horizontal: 'center' })}
  gap : 20px;
`;
