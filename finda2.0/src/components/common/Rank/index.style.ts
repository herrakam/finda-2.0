import { mixin, viewSize } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const RankWrap = styled.div`
  ${mixin.flexbox({
    vertical: 'flex-start',
    horizontal: 'center',
    dir: 'column',
  })}
  padding: 10px;
  width: 100%;
  gap: 30px;
`;

export const RankTitle = styled.span`
  ${({ theme }) => theme.typography.Title};
  color: ${({ theme }) => theme.pallete.normalFont};
  @media screen and (${viewSize.tablet}) {
    ${({ theme }) => theme.typography.SemiTitle}
  }
`;
export const RankContents = styled.div`
  ${mixin.flexbox({ horizontal: 'flex-start', vertical: 'center' })}
  gap: 40px;
  width: 100%;
  overflow-x: scroll;
  padding-left: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (${viewSize.mobile}) {
    flex-direction: column;
  }
`;
