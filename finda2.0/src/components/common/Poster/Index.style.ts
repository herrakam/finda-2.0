import { mixin } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const PosterWrap = styled.figure`
  width: 200px;
  height: 300px;
  border-radius: 5px;
  transition: 0.5s;
`;
export const Posterimage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
export const PosterTitle = styled.div<{ isHover: boolean }>`
  width: 100%;
  height: 100px;
  ${mixin.flexbox({ vertical: 'center' })}
  padding:10px;
  ${({ theme }) => theme.typography.Light}
  color:${({ theme }) => theme.pallete.normalFont}
`;
