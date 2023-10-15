import { mixin } from '@/globalStyles/GlobalStyle';
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
`;
export const OfferPlatfrom = styled.div`
  ${mixin.flexbox({})}
  gap: 20px;
`;
export const Platform = styled.div`
  ${mixin.flexbox({ dir: 'column', vertical: 'center' })}
  gap: 5px;
`;

export const PlatromfIcon = styled.img`
  width: 70px;
  aspect-ratio: 1 / 1;
  border-radius: 20%;
`;
export const Price = styled.span`
  ${({ theme }) => theme.typography.Regular}
  color:${({ theme }) => theme.pallete.normalFont}
`;
