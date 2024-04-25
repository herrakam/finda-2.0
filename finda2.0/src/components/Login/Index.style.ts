import styled from 'styled-components';

export const LoginWrap = styled.div`
  width: 70%;
  height: 70%;
  background: ${({ theme }) => theme.pallete.normalBg};
  ${({ theme }) => theme.typography.Regular}
  color: ${({ theme }) => theme.pallete.normalFont}
`;
