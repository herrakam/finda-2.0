import { mixin, viewSize } from '@/globalStyles/GlobalStyle';
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
  @media screen and (${viewSize.mobile}) {
    height: 30vh;
    /* min-height: 100px; */
  }
`;

export const InfoContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  margin-top: 35vh;
  background: ${({ theme }) => theme.pallete.normalBg};
  border-radius: 25px 25px 0 0;
  z-index: 1;
  ${mixin.flexbox({})};
  gap: 20px;
  margin-bottom: 50px;
  @media screen and (${viewSize.tabletHorizontal}) {
    flex-direction: column;
  }
  @media screen and (${viewSize.mobile}) {
    margin-top: 20vh;
  }
`;
export const InfoLeft = styled.div`
  ${mixin.flexbox({ dir: 'column' })};
  gap: 15px;
  @media screen and (${viewSize.tabletHorizontal}) {
    width: 80%;
    align-items: center;
    display: none;
  }
  @media screen and (${viewSize.tablet}) {
    /* display: none; */
  }
`;
export const InfoRight = styled.div`
  ${mixin.flexbox({ dir: 'column' })};
  gap: 25px;
`;

export const Poster = styled.img`
  border-radius: 5px;
  max-width: 300px;
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
  width: 100%;
  display: grid;
  grid-auto-rows: 15px;
  grid-template-columns: repeat(5, minmax(max-content, max-content));
  place-content: center start;
  gap: 15px;
  overflow-y: hidden;
  padding-bottom: 10px;
  margin-bottom: 5px;
  ::-webkit-scrollbar {
    background: ${({ theme }) => theme.pallete.grey2};
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.pallete.grey3};
  }
`;
export const Title = styled.span`
  ${({ theme }) => theme.typography.Title};
  color: ${({ theme }) => theme.pallete.normalFont};
  @media screen and (${viewSize.tablet}) {
    ${({ theme }) => theme.typography.SemiTitle}
  }
`;

export const ReleasedYear = styled(Title)`
  ${({ theme }) => theme.typography.Bold};
`;
export const OriginTitle = styled.div`
  color: ${({ theme }) => theme.pallete.grey4};
  ${({ theme }) => theme.typography.Light}
`;

export const ItemTitle = styled.div`
  ${({ theme }) => theme.typography.Bold};
  color: ${({ theme }) => theme.pallete.normalFont};
`;

export const OfferTitle = styled(ItemTitle)`
  ${({ theme }) => theme.typography.SemiTitle};
  @media screen and (${viewSize.tablet}) {
    ${({ theme }) => theme.typography.Bold}
  }
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
  line-height: 3rem;
`;
