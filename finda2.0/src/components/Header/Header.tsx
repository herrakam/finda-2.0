import * as S from '@components/Header/Header.style';

function Header() {
  const isLogin = true;
  const PersonalTab = isLogin ? (
    <>
      <S.HeaderTab to="/myPick">MY Pick</S.HeaderTab>
      <S.HeaderTab to="Logout">LogOut</S.HeaderTab>
    </>
  ) : (
    <S.HeaderTab to="/logIn">Login</S.HeaderTab>
  );

  return (
    <S.HeaderWrap>
      <S.HeaderLeft>
        <S.Title to="/">FINDA</S.Title>
        <S.HeaderTab to="/movie">Movie</S.HeaderTab>
        {PersonalTab}
      </S.HeaderLeft>
      <S.HeaderRight></S.HeaderRight>
    </S.HeaderWrap>
  );
}

export default Header;
