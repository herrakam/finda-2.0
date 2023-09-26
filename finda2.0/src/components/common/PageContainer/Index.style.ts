import { mixin } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const Containter = styled.section`
  min-height: 100vh;
  min-width: 100%;
  ${mixin.flexbox({
    dir: 'column',
    vertical: 'center',
    horizontal: 'flex-start',
  })}
  background-color:${({ theme }) => theme.pallete.normalBg};
`;
