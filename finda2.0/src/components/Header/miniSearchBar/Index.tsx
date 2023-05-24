import { MdSearch } from 'react-icons/md';
import * as S from '@components/Header/miniSearchBar/Index.style';

function MiniSearchBar() {
  return (
    <S.SearchBox>
      <S.SearchText
        type="text"
        placeholder="Type to search"
        className="SearchText"
      />
      <S.SearchBtn>
        <MdSearch size="35" />
      </S.SearchBtn>
    </S.SearchBox>
  );
}

export default MiniSearchBar;
