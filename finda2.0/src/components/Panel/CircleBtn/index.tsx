import * as S from '@components/Panel/CircleBtn/index.style';

export type infoType = {
  clickEvent: () => void;
  icon?: JSX.Element;
  order: number;
  text?: string;
};

type CircleBtnType = {
  info: infoType;
  isClicked: {
    isClicked: boolean;
    text: string;
  };
};

function CircleBtn({ info, isClicked }: CircleBtnType) {
  const [clickEvent, order] = [info.clickEvent, info.order];
  if (info.icon) {
    const icon = info.icon;
    return (
      <S.CircleBtnWrap
        onClick={clickEvent}
        order={order}
        isClicked={isClicked.isClicked}
      >
        {icon}
      </S.CircleBtnWrap>
    );
  }
  const text = info.text;
  return (
    <S.CircleBtnWrap
      onClick={clickEvent}
      order={order}
      isClicked={isClicked.isClicked}
    >
      {text}
    </S.CircleBtnWrap>
  );
}

export default CircleBtn;
