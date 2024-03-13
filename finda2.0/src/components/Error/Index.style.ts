import { mixin, viewSize } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const ErrorWrap = styled.div`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center', dir: 'column' })};
  background-color: ${({ theme }) => theme.pallete.normalBg};
  padding: 100px;
  gap: 100px;
  height: 100vh;
`;

export const Title = styled.span`
  ${({ theme }) => theme.typography.Title};
  color: ${({ theme }) => theme.pallete.normalFont};
  @media screen and (${viewSize.mobile}) {
    ${({ theme }) => theme.typography.Regular};
  }
`;
export const Content = styled.span`
  ${({ theme }) => theme.typography.Regular};
`;
export const Button = styled.button`
  ${({ theme }) => theme.typography.Bold}
  border:none;
  background: ${({ theme }) => theme.pallete.normalBtn};
`;
export const ImgContainer = styled.figure`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })}
  width: 100%;
  height: 100%;
`;
export const SorryImg = styled.img`
  width: 200px;
  height: 200px;
`;
