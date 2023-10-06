import { mixin } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  min-height: 100vh;
  background: ${({ theme }) => theme.pallete.normalBg};
`;
export const BackDropImg = styled.img`
  position: absolute;
  left: 0;
  object-fit: cover;
  object-position: center 25%;
  width: 100%;
  height: 45vh;
  min-height: 200px;
`;

export const InfoContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  min-height: 80vh;
  margin-top: 35vh;
  background: ${({ theme }) => theme.pallete.normalBg};
  border-radius: 25px 25px 0 0;
  z-index: 1;
  ${mixin.flexbox({})};
  gap: 20px;
  margin-bottom: 50px;
`;
export const InfoLeft = styled.div`
  ${mixin.flexbox({ dir: 'column' })};
  gap: 15px;
`;
export const InfoRight = styled(InfoLeft)`
  gap: 10px;
`;

export const Poster = styled.img`
  border-radius: 5px;
  height: 500px;
`;
export const GenreContainer = styled.div`
  ${mixin.flexbox({})}
  gap: 10px;
`;
export const FlexContainer = styled.div`
  ${mixin.flexbox({ vertical: 'flex-end' })};
  gap: 10px;
  margin-bottom: 5px;
`;

export const ActorsContainer = styled.div`
  display: grid;
  grid-auto-rows: 15px;
  grid-template-columns: repeat(5, minmax(max-content, max-content));
  place-content: start center;
  gap: 15px;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-bottom: 5px;
`;
export const Title = styled.span`
  ${({ theme }) => theme.typography.Title};
  color: ${({ theme }) => theme.pallete.normalFont};
`;

export const ReleasedYear = styled(Title)`
  ${({ theme }) => theme.typography.Bold};
`;
export const RealTitle = styled.div`
  color: ${({ theme }) => theme.pallete.grey4};
  margin-bottom: 25px;
`;

export const ItemTitle = styled.div`
  ${({ theme }) => theme.typography.Bold};
  color: ${({ theme }) => theme.pallete.normalFont};
`;

export const OfferTitle = styled(ItemTitle)`
  margin-top: 50px;
  ${({ theme }) => theme.typography.Title}
`;

export const ItemContent = styled.div`
  ${({ theme }) => theme.typography.Regular};
  color: ${({ theme }) => theme.pallete.normalFont};
  margin-bottom: 5px;
`;

export const ItemConentInline = styled.span`
  ${({ theme }) => theme.typography.Regular};
  color: ${({ theme }) => theme.pallete.normalFont};
`;

export const DiscContatiner = styled.div`
  ${mixin.flexbox({ dir: 'column' })};
  padding: 20px;
  gap: 20px;
`;
export const DiscContent = styled(ItemContent)`
  line-height: 2rem;
`;
