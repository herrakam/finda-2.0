import { mixin, viewSize } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const OfferTable = styled.div`
  border: 2px solid ${({ theme }) => theme.pallete.normalFont};
`;

export const OfferField = styled.div`
  width: 50%;
  ${mixin.flexbox({ vertical: 'center' })}
  gap:20px;
`;

export const Type = styled.div`
  ${({ theme }) => theme.typography.Bold};
  color: ${({ theme }) => theme.pallete.normalFont};
  min-width: 100px;
  @media screen and (${viewSize.mobile}) {
    min-width: 40px;
    ${({ theme }) => theme.typography.Regular}
  }
`;
export const OfferPlatfrom = styled.div`
  ${mixin.flexbox({})}
  gap: 20px;
  ::-webkit-scrollbar {
    background: ${({ theme }) => theme.pallete.grey2};
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.pallete.grey3};
  }
`;
export const Platform = styled.div`
  ${mixin.flexbox({ dir: 'column', vertical: 'center' })}
  gap: 5px;
  ::-webkit-scrollbar {
    background: ${({ theme }) => theme.pallete.grey2};
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.pallete.grey3};
  }
`;

export const PlatromfIcon = styled.img`
  width: 70px;
  aspect-ratio: 1 / 1;
  border-radius: 20%;
  @media screen and (${viewSize.mobile}) {
    width: 50px;
  }
`;
export const Price = styled.span`
  ${({ theme }) => theme.typography.Regular};
  color: ${({ theme }) => theme.pallete.normalFont};
  @media screen and (${viewSize.mobile}) {
    ${({ theme }) => theme.typography.Light}
  }
`;
