import styled from 'styled-components';

export const DimmedWrap = styled.section<{
  size: 'full' | 'poster';
  isHover: boolean;
}>`
  width: ${({ size }) => (size === 'full' ? `100vw` : `200px`)};
  height: ${({ size }) => (size === `full` ? `100vh` : `300px`)};
  background: ${({ isHover }) => (isHover ? 'rgba(0, 0, 0, 0.5)' : 'none')};
`;
