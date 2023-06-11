import CircleBtn, { infoType } from '@components/Panel/CircleBtn';
import * as S from '@components/Panel/Index.style';
import { MouseEvent, useState } from 'react';
import { useAtom } from 'jotai';
import { darkAtom } from '@/atoms/dark';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export type CircleBtnInfoType = {
  label: string;
  clickEvent: () => void;
  icon?: JSX.Element;
  text?: string;
};
function goTop() {
  window.scrollTo(0, 0);
}

function Panel() {
  const [isClicked, setIsClicked] = useState({
    isClicked: false,
    text: '펼치기',
  });
  const [isDarkMode, setIsDarkMode] = useAtom(darkAtom);

  function showHiddenBtn(e: MouseEvent) {
    e.stopPropagation();
    setIsClicked({
      isClicked: true,
      text: '접기',
    });
  }
  function changeTheme() {
    setIsDarkMode(!isDarkMode);
  }
  function toggleBtn() {
    setIsClicked({
      isClicked: !isClicked,
      text: isClicked ? '펼치기' : '접기',
    });
  }
  const CircleBtnsInfo: CircleBtnInfoType[] = [
    {
      label: '펼치기',
      clickEvent: toggleBtn,
      text: isClicked.text,
    },
    {
      label: '위로',
      clickEvent: goTop,
      text: '위로',
    },
    {
      label: '테마변경',
      clickEvent: changeTheme,
      icon: isDarkMode ? <MdDarkMode /> : <MdLightMode />,
    },
  ];
  const CircleBtns = CircleBtnsInfo.map((info, idx) => {
    const btnInfo: infoType = { ...info, order: idx };
    return <CircleBtn info={btnInfo} key={info.label} isClicked={isClicked} />;
  });
  return (
    <S.PanelWrap onMouseEnter={e => showHiddenBtn(e)}>{CircleBtns}</S.PanelWrap>
  );
}

export default Panel;
