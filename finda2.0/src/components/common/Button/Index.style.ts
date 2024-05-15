import styled from 'styled-components';
import { FontSizeType } from '../TextField/type';

export const StyledBtn = styled.button<{
  width?: string;
  fontSize: FontSizeType;
}>`
  width: ${({ width }) => (width ? width : `inherit`)};
  ${({ theme, fontSize }) => theme.typography[fontSize]};
  border-radius: 5px;
  background: ${({ theme }) => theme.pallete.normalBtn};
  color: ${({ theme }) => theme.pallete.normalFont};
  border: none;
  padding: 10px;
`;
