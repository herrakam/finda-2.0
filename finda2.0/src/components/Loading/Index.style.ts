import { mixin } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const Container = styled.div`
  ${mixin.flexbox({ dir: 'column', vertical: 'center', horizontal: 'center' })}
  width: 100%;
  margin: 3rem;
  gap: 20px;
`;

export const Spinner = styled.div`
  width: 30px;
  height: 30px;
  border: 4px solid ${({ theme }) => theme.pallete.normalFont};
  border-top: 4px solid ${({ theme }) => theme.pallete.grey4};
  border-radius: 50%;

  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Copy = styled.span`
  ${({ theme }) => theme.typography.Bold}
  color: ${({ theme }) => theme.pallete.normalFont}
`;
