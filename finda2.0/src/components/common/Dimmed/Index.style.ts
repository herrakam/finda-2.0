import { DimSizeType } from '@components/common/Dimmed/type';
import styled from 'styled-components';

export const DimmedWrap = styled.section<{
  size: DimSizeType;
  isHover: boolean;
}>`
  width: ${({ size }) => size.width};
  height: ${({ size }) => size.height};
  background: ${({ isHover }) => (isHover ? 'rgba(0, 0, 0, 0.5)' : 'none')};
`;
