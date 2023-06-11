import CircleBtn, { infoType } from '@components/Panel/CircleBtn';
import * as S from '@components/Panel/Index.style';
import { MouseEvent, useState } from 'react';

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

  function showHiddenBtn(e: MouseEvent) {
    e.stopPropagation();
    setIsClicked({
      isClicked: true,
      text: '접기',
    });
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
      label: 'mock1',
      clickEvent: () => {},
      text: '더미',
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
