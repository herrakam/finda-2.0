import * as S from '@/components/Main/MainTop/SearchBar.style';
import { MdSearch } from 'react-icons/md';
import { useState } from 'react';
import { GenreType } from '@/utils/type';
import { GENREINFO } from '@/assets/static';

function RecommendSearchBar() {
  const [searchGenre, setSearchGenre] = useState<number[]>([]);

  const addGenre = (genre: number) => {
    setSearchGenre([...searchGenre, genre]);
  };

  const removeGenre = (genre: number) => {
    const removedGenreArr = searchGenre.filter(
      (genreNum: number) => genreNum !== genre,
    );
    setSearchGenre([...removedGenreArr]);
  };

  const genreContent = searchGenre.map((genre: number) => {
    const genreText = GENREINFO.filter(
      (info: GenreType) => info.id === genre,
    )[0].translation;
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
  return (
    <S.SearchBarWrap>
      <S.SearchBar>
        <S.SearchStatus>{genreContent}</S.SearchStatus>
        <S.SearchBtn
          onClick={() => {
            // gotoPage({ url: 'result', detail: searchValue });
          }}
        >
          <MdSearch size="35" />
        </S.SearchBtn>
      </S.SearchBar>
    </S.SearchBarWrap>
  );
}
export default RecommendSearchBar;
