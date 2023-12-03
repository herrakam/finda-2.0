import { MdSearch } from 'react-icons/md';
import * as S from '@components/Header/miniSearchBar/Index.style';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { debouncing } from '@/utils/util';

function MiniSearchBar() {
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
    <S.SearchBox>
      <S.SearchText
        type="text"
        placeholder="Type to search"
        className="SearchText"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const debounce = debouncing({ callback: () => getInputValue(e) });
          debounce(e);
        }}
        onKeyUp={onPressEnter}
      />
      <S.SearchBtn>
        <MdSearch size="35" onClick={gotoSearch} />
      </S.SearchBtn>
    </S.SearchBox>
  );
}

export default MiniSearchBar;
