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
  const [isClicked, setIsClicked] = useState(false);

  function showHiddenBtn(e: MouseEvent) {
    e.stopPropagation();
    setIsClicked(true);
  }

  function toggleBtn(e: MouseEvent) {
    e.stopPropagation();
    setIsClicked(!isClicked);
  }
  const CircleBtnsInfo: CircleBtnInfoType[] = [
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
    const btnInfo: infoType = { ...info, order: idx + 1 };
    return <CircleBtn info={btnInfo} key={info.label} />;
  });
  return (
    <S.PanelWrap onMouseEnter={e => showHiddenBtn(e)}>
      <S.ShowPanelBtn>{isClicked ? '접기' : '펼치기'}</S.ShowPanelBtn>
      {CircleBtns}
    </S.PanelWrap>
  );
}

export default Panel;
