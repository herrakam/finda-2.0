import * as S from '@components/Main/MainTop/Index.style';
import SearchBar from '@components/Main/MainTop/SearchBar/Index';
import { useState } from 'react';

function MainTop() {
  const [isGenre, setIsGenre] = useState<boolean>(false);

  const toggleGenre = () => setIsGenre(!isGenre);

  const copy = isGenre
    ? '장르를 선택해서 영화를 추천받아보세요!'
    : '영화가 어디서 서비스중인지 찾아보세요!';
  const buttonText = isGenre ? '영화가 어디있지...?' : '영화 뭐보지...?';
  return (
    <S.MaintopWrap>
      <S.Copy>{copy}</S.Copy>
      <S.ChangeSearchBarBtn onClick={toggleGenre}>
        {buttonText}
      </S.ChangeSearchBarBtn>
      <SearchBar></SearchBar>
    </S.MaintopWrap>
  );
}
export default MainTop;
