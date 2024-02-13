import { mixin, viewSize } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrap = styled.header`
  ${mixin.flexbox({ horizontal: 'space-between', vertical: 'center' })}
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 60px;
  position: fixed;
  padding: 0 20px;
  z-index: 10;
  transition: 0.5s;
`;

export const HeaderLeft = styled.div`
  ${mixin.flexbox({ horizontal: 'flex-start', vertical: 'center' })}
  height: 100%;
  gap: 20px;
`;
export const HeaderRight = styled(HeaderLeft)``;

export const Title = styled(Link)`
  ${({ theme }) => theme.typography.Title}
  color: ${({ theme }) => theme.pallete.white};
  @media screen and (${viewSize.mobile}) {
    ${({ theme }) => theme.typography.SemiTitle}
  }
`;

export const HeaderTab = styled(Link)`
  ${({ theme }) => theme.typography.Bold}
  color:${({ theme }) => theme.pallete.white};
  @media screen and (${viewSize.mobile}) {
    display: none;
  }
`;
