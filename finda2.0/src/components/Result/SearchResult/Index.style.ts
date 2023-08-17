import { mixin } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const ResultContatiner = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.pallete.normalBg};
  ${mixin.flexbox({
    dir: 'column',
    vertical: 'center',
    horizontal: 'flex-start',
  })}
  gap: 20px;
  padding: 100px 10%;
`;

export const ResultTitle = styled.div`
  ${({ theme }) => theme.typography.Title}
  width:100%;
  color: ${({ theme }) => theme.pallete.normalFont};
  margin-bottom: 100px;
`;

export const ConentsContainer = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  place-content: space-between center;
`;
