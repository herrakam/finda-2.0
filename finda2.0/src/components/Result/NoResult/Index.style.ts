import { mixin } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.pallete.normalBg};
  padding: 100px 10% 0 10%;
`;
export const Title = styled.span`
  ${({ theme }) => theme.typography.Title};
  color: ${({ theme }) => theme.pallete.normalFont};
`;

export const ImageContainer = styled.figure`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })}
  width:100%;
  margin-top: 100px;
`;
export const SorryImg = styled.img`
  width: 30%;
  height: 30%;
`;
