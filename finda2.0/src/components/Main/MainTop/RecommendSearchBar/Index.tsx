import * as S from '@/components/Main/MainTop/SearchBar.style';
import { MdSearch } from 'react-icons/md';
import { useState } from 'react';
import { GenreType } from '@/utils/type';
import { GENREINFO } from '@/assets/static';
import { getGenreText } from '@/utils/util';
import { useMove } from '@/hooks/useMove';

function RecommendSearchBar() {
  const [searchGenre, setSearchGenre] = useState<number[]>([]);
  const gotoPage = useMove();

  const addGenre = (genre: number) => {
    setSearchGenre([...searchGenre, genre]);
  };

  const removeGenre = (genre: number) => {
    const removedGenreArr = searchGenre.filter(
      (genreNum: number) => genreNum !== genre,
    );
    setSearchGenre([...removedGenreArr]);
  };

  const selectedGenreContent = searchGenre.map((genre: number) => {
    const genreText = getGenreText(genre);
    return (
      <S.SelectedGenre
        key={genre}
        onClick={() => {
          removeGenre(genre);
        }}
      >
        {genreText}
      </S.SelectedGenre>
    );
  });

  const genre = GENREINFO.map((info: GenreType) => {
    const genreText = getGenreText(info.id);
    return (
      <S.Genre
        key={info.id}
        onClick={() => {
          addGenre(info.id);
        }}
      >
        {genreText}
      </S.Genre>
    );
  });

  const genreUrlDetail = searchGenre.join(',');
  return (
    <S.SearchBarWrap>
      <S.SearchBar>
        <S.SearchStatus>{selectedGenreContent}</S.SearchStatus>
        <S.SearchBtn
          onClick={() => {
            gotoPage({ url: 'result', detail: genreUrlDetail });
          }}
        >
          <MdSearch size="35" />
        </S.SearchBtn>
      </S.SearchBar>
      <S.GenreContainer>{genre}</S.GenreContainer>
    </S.SearchBarWrap>
  );
}
export default RecommendSearchBar;
