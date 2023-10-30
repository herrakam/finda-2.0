import { debouncing } from '@/utils/util';
import * as S from '@components/Main/SearchBar/Index.style';
import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchValue, setSearchValue] = useState<string>('');
  const navigate = useNavigate();
  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const gotoSearch = () => {
    navigate(`/result/${searchValue}`);
  };

  const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') gotoSearch();
  };

  return (
    <S.SearchBarWrap>
      <S.SearchInput
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const debounce = debouncing({ callback: () => getInputValue(e) });
          debounce(e);
        }}
        onKeyUp={onPressEnter}
      />
      <S.SearchBtn onClick={gotoSearch}>
        <MdSearch size="35" />
      </S.SearchBtn>
    </S.SearchBarWrap>
  );
}
export default SearchBar;
