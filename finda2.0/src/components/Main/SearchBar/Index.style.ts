import { mixin } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const SearchBarWrap = styled.div`
  ${mixin.flexbox({ horizontal: 'space-between' })};
  ${mixin.checkLayout};
  width: 80%;
  height: 50px;
  border-radius: 10px;
`;
export const SearchInput = styled.input`
  width: 90%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  text-decoration: none;
  border: none;
`;

export const SearchBtn = styled.button`
  width: 10%;
  height: 100%;
  border-radius: 0 10px 10px 0;
  background: ${({ theme }) => theme.pallete.normalBtn};
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })}
`;
