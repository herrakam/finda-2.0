import { mixin } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const FooterWrap = styled.footer`
  width: 100%;
  height: 200px;
  background: ${({ theme }) => theme.pallete.black};
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center', dir: 'column' })};
  color: ${({ theme }) => theme.pallete.white};
  ${({ theme }) => theme.typography.Bold};
  gap: 20px;
`;

export const LinkWrap = styled.div`
  ${mixin.flexbox({})};
  gap: 50px;
`;
export const FooterText = styled.span`
  ${({ theme }) => theme.typography.Thin};
  color: ${({ theme }) => theme.pallete.grey3};
`;
