import * as S from '@components/Movie/ContentInfo/Index.style';
import { NormalizedDetailType } from '@/utils/type';
import Offer from '@components/Movie/Offer/Index';
import { getGenreText } from '@/utils/util';

function ContentInfo({
  backdropImgUrl,
  actors,
  director,
  disc,
  genreArr,
  offerArr,
  originTitle,
  releasedYear,
  runtime,
  title,
  poster,
}: NormalizedDetailType) {
  const actorsContent =
    actors === '출연진 정보 없음'
      ? actors
      : actors.map((actor: string) => (
          <S.ItemConentInline key={actor}>{actor}</S.ItemConentInline>
        ));

  const genreContent = genreArr.map((genre: number) => (
    <S.ItemConentInline key={genre}>{getGenreText(genre)}</S.ItemConentInline>
  ));

  return (
    <S.Container>
      <S.BackDropImg src={backdropImgUrl}></S.BackDropImg>
      <S.InfoContainer>
        <S.InfoLeft>
          <S.Poster src={poster} />
          <S.ItemTitle>런타임</S.ItemTitle>
          <S.ItemContent> {runtime}분</S.ItemContent>
          <S.ItemTitle>장르</S.ItemTitle>
          <S.GenreContainer>{genreContent}</S.GenreContainer>
        </S.InfoLeft>
        <S.InfoRight>
          <S.FlexContainer>
            <S.Title>{title}</S.Title>
            <S.ReleasedYear>({releasedYear})</S.ReleasedYear>
          </S.FlexContainer>
          <S.OriginTitle>{originTitle}</S.OriginTitle>
          <S.ItemTitle>director</S.ItemTitle>
          <S.ItemContent>{director.name}</S.ItemContent>
          <S.ItemTitle>actors</S.ItemTitle>
          <S.ActorsContainer>{actorsContent}</S.ActorsContainer>
          <S.OfferTitle>이곳에서 서비스하고 있어요!</S.OfferTitle>
          <Offer offer={offerArr} />
        </S.InfoRight>
      </S.InfoContainer>
      <S.DiscContatiner>
        <S.ItemTitle>시놉시스</S.ItemTitle>
        <S.DiscContent>{disc}</S.DiscContent>
      </S.DiscContatiner>
    </S.Container>
  );
}

export default ContentInfo;
