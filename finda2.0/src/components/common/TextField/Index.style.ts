import styled from 'styled-components';
import { FontSizeType } from './type';

export const styledInput = styled.input<{
  width?: string;
  fontSize: FontSizeType;
}>`
  width: ${({ width }) => (width ? width : `inherit`)};
  text-decoration: none;
  ${({ theme, fontSize }) => `${theme}.typography.${fontSize}`};
  padding: 5px;
  border-radius: 5px;
  border-style: solid;
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.pallete.focus};
    background: ${({ theme }) => theme.pallete.grey6};
  }
`;
