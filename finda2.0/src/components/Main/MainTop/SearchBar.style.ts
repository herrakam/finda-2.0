import { mixin, viewSize } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const SearchBarWrap = styled.div`
  width: 100%;
  ${mixin.flexbox({ dir: 'column', vertical: 'center' })}
`;

export const SearchBar = styled.div`
  ${mixin.flexbox({ horizontal: 'space-between' })};
  ${mixin.checkLayout};
  width: 100%;
  height: 50px;
  border-radius: 10px;
  @media screen and (${viewSize.mobile}) {
    height: 30px;
  }
`;
export const SearchInput = styled.input`
  width: 90%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  text-decoration: none;
  border: none;
  padding-left: 20px;
  ${({ theme }) => theme.typography.Regular}
  @media screen and (${viewSize.mobile}) {
    ${({ theme }) => theme.typography.Thin}
  }
`;

export const SearchStatus = styled.div`
  width: 90%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  text-decoration: none;
  border: none;
  padding-left: 20px;
  ${({ theme }) => theme.typography.Regular};
  background: ${({ theme }) => theme.pallete.white};
  ${mixin.flexbox({ vertical: 'center' })};
`;

export const SearchBtn = styled.button`
  width: 10%;
  height: 100%;
  border-radius: 0 10px 10px 0;
  background: ${({ theme }) => theme.pallete.normalBtn};
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })}
`;

export const ResultContainer = styled.div`
  width: 100%;
  border-radius: 0 0 10px 10px;
  border: 1px solid ${({ theme }) => theme.pallete.grey3};
  background: rgba(255, 255, 255, 0.5);
  ${mixin.flexbox({ dir: 'column', vertical: 'center' })}
  @media screen and (${viewSize.mobile}) {
    ${({ theme }) => theme.typography.Thin}
  }
`;

export const GenreContainer = styled(ResultContainer)`
  display: grid;
  justify-content: space-around;
  grid-gap: 5px;
  padding: 10px;
  grid-template-columns: repeat(5, 1fr);
`;

export const Result = styled.div<{ isLast?: boolean }>`
  width: 95%;
  height: 50px;
  border-bottom: ${({ isLast }) => (isLast ? 'none ' : `2px solid white`)};
  ${mixin.flexbox({ vertical: 'center' })};
  ${({ theme }) => theme.typography.Regular}
  @media screen and (${viewSize.mobile}) {
    ${({ theme }) => theme.typography.Thin}
    height: 30px;
  }
`;
export const SelectedGenre = styled.div`
  ${({ theme }) => theme.typography.SemiTitle};
  ${({ theme }) => theme.pallete.normalBtn};
  margin: 0 15px 0 0;
  @media screen and (${viewSize.mobile}) {
    ${({ theme }) => theme.typography.Light}
    margin: 0 10px 0 0
  }
`;

export const Genre = styled.div`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })};
  color: ${({ theme }) => theme.pallete.normalFont};
  ${({ theme }) => theme.typography.SemiTitle};
  background: ${({ theme }) => theme.pallete.normalBtn};
  border-radius: 10px;
  padding: 10px 0;
  text-align: center;
  @media screen and (${viewSize.mobile}) {
    ${({ theme }) => theme.typography.Thin}
  }
`;
