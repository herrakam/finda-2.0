import * as S from '@components/Main/SearchBar/Index.style';
import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchValue, setSearchValue] = useState<string>('');
  const navigate = useNavigate();
  const getInutValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const gotoSearch = () => {
    navigate(`/result/${searchValue}`);
  };

  return (
    <S.SearchBarWrap>
      <S.SearchInput onChange={getInutValue} />
      <S.SearchBtn onClick={gotoSearch}>
        <MdSearch size="35" />
      </S.SearchBtn>
    </S.SearchBarWrap>
  );
}
export default SearchBar;
