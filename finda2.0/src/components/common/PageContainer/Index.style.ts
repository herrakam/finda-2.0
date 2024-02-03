import { mixin } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const Containter = styled.section`
  min-height: 100vh;
  width: 100%;
  ${mixin.flexbox({
    dir: 'column',
    vertical: 'center',
    horizontal: 'flex-start',
  })}
  background-color: ${({ theme }) => theme.pallete.normalBg};
`;

export const InnerContainer = styled.div`
  width: 80%;
  min-width: 360px;
  ${mixin.flexbox({
    dir: 'column',
    vertical: 'center',
    horizontal: 'flex-start',
  })}
  gap: 30px;
`;
