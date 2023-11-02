import * as S from '@components/Main/MainTop/Index.style';
import SearchBar from '@components/Main/MainTop/SearchBar/Index';

function MainTop() {
  return (
    <S.MaintopWrap>
      <S.Copy>영화가 어디서 서비스중인지 알려드려요!</S.Copy>
      <SearchBar></SearchBar>
    </S.MaintopWrap>
  );
}
export default MainTop;
