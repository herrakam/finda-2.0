import { mixin } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const MainBottomWrap = styled.div`
  width: 100%;
  min-height: 100vh;
  ${mixin.flexbox({ dir: 'column', vertical: 'center', horizontal: 'center' })}
  gap : 20px;
  background: ${({ theme }) => theme.pallete.normalBg};
  position: relative;
`;
