import { mixin, viewSize } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.pallete.normalBg};
  padding: 100px 10% 0 10%;
`;
export const Title = styled.span`
  ${({ theme }) => theme.typography.Title};
  color: ${({ theme }) => theme.pallete.normalFont};
  @media screen and (${viewSize.mobile}) {
    ${({ theme }) => theme.typography.Regular}
  }
`;

export const ImageContainer = styled.figure`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })}
  width:100%;
  margin-top: 100px;
`;
export const SorryImg = styled.img`
  width: 40%;
  height: 40%;
  @media screen and (${viewSize.mobile}) {
    width: 80%;
    height: 80%;
  }
`;
