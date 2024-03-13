import { mixin, viewSize } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const MaintopWrap = styled.div`
  ${mixin.flexbox({ dir: 'column', horizontal: 'center', vertical: 'center' })}
  height: 100vh;
  width: 100%;
  gap: 50px;
  background: ${({ theme }) => theme.pallete.normalBg};
`;

export const Copy = styled.div`
  ${mixin.flexbox({ horizontal: 'center' })}
  width: 80%;
  ${({ theme }) => theme.typography.Title};
  color: ${({ theme }) => theme.pallete.normalFont};
  line-height: 1.3;
  @media screen and (${viewSize.mobile}) {
    ${({ theme }) => theme.typography.SemiTitle};
    min-width: 300px;
  }
`;

export const ChangeSearchBarBtn = styled.button`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })}
  ${({ theme }) => theme.typography.Regular}
  height: 40px;
  color: ${({ theme }) => theme.pallete.normalFont};
  background: ${({ theme }) => theme.pallete.normalBtn};
  border: none;
  border-radius: 15px;
`;
