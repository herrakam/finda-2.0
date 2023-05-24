import * as S from '@components/Main/SearchBar/Index.style';
import { MdSearch } from 'react-icons/md';

function SearchBar() {
  return (
    <S.SearchBarWrap>
      <S.SearchInput />
      <S.SearchBtn>
        <MdSearch size="35" />
      </S.SearchBtn>
    </S.SearchBarWrap>
  );
}
export default SearchBar;
