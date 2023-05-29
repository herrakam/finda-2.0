import { mixin } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const SearchBox = styled.div`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })}
  padding: 10px;
  height: 40px;
  background: ${({ theme }) => theme.pallete.white};
  /* border: 1px solid ${({ theme }) => theme.pallete.white}; */
  border-radius: 30px;
  transition: 0.4s;
  width: 40px;
  animation-direction: reverse;
  margin: 0 50px 0 0;
  :hover {
    box-shadow: 0px 0px 0.5px 1px ${({ theme }) => theme.pallete.grey5};
    width: 180px;
    animation-direction: reverse;
    .SearchText {
      width: 120px;
      padding: 0 6px;
    }
  }
`;
export const SearchBtn = styled.button`
  text-decoration: none;
  float: right;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.pallete.white};
  border: none;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.pallete.grey3};
`;
export const SearchText = styled.input`
  display: flex;
  padding: 0;
  width: 0px;
  border: none;
  background: none;
  outline: none;
  float: left;
  font-size: 1rem;
  line-height: 20px;
  transition: 0.4s;
`;
