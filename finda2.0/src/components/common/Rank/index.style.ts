import { mixin } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const RankWrap = styled.div`
  ${mixin.flexbox({
    vertical: 'flex-start',
    horizontal: 'center',
    dir: 'column',
  })}
  padding: 10px;
  width: 80%;
  gap: 30px;
`;

export const RankTitle = styled.span`
  ${({ theme }) => theme.typography.Title}
  color:${({ theme }) => theme.pallete.normalFont}
`;
export const RankContents = styled.div`
  display: grid;
  place-content: center start;
  grid-template-columns: repeat(auto-fit, 200px);
  grid-gap: 40px;
  width: 100%;
`;
