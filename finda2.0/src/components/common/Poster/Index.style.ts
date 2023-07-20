import { mixin } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const PosterWrap = styled.figure`
  width: 200px;
  height: 300px;
  border-radius: 5px;
  position: relative;
`;
export const Posterimage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  position: absolute;
`;
export const PosterTitle = styled.div<{ isHover: boolean }>`
  width: 100%;
  height: 100px;
  ${mixin.flexbox({ vertical: 'center' })};
  padding: 10px;
  display: ${({ isHover }) => (isHover ? 'flex' : 'none')};
  ${({ theme }) => theme.typography.Bold};
  color: ${({ theme }) => theme.pallete.white};
  z-index: 2;
  position: absolute;
  bottom: 0;
`;
