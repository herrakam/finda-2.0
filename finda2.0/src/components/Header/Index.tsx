import { isLoginAtom, modalPopUpAtom } from '@/atoms/IsLogin';
import * as S from '@components/Header/Index.style';
import MiniSearchBar from '@components/Header/miniSearchBar/Index';
import { useAtomValue, useSetAtom } from 'jotai';

function Header() {
  const isLogin = useAtomValue(isLoginAtom);
  const setLoginPopUp = useSetAtom(modalPopUpAtom);

  const popUpLoginPage = () => {
    setLoginPopUp(true);
  };

  const PersonalTab = isLogin ? (
    <>
      <S.HeaderTab to="/myPick">MY Pick</S.HeaderTab>
      <S.LogInOutTab>LogOut</S.LogInOutTab>
    </>
  ) : (
    <S.LogInOutTab onClick={popUpLoginPage}>Login</S.LogInOutTab>
  );

  return (
    <S.HeaderWrap>
      <S.HeaderLeft>
        <S.Title to="/">FINDA</S.Title>
        <S.HeaderTab to="/result">Movie</S.HeaderTab>
        {PersonalTab}
      </S.HeaderLeft>
      <S.HeaderRight>
        <MiniSearchBar />
      </S.HeaderRight>
    </S.HeaderWrap>
  );
}

export default Header;
