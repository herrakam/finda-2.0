import { modalPopUpAtom } from '@/atoms/IsLogin';
import * as S from '@components/common/Dimmed/Index.style';
import {
  DimSizeType,
  DimmedWithChildrenType,
} from '@components/common/Dimmed/type';
import { useSetAtom } from 'jotai';

function Dimmed({
  size = 'full',
  isHover = true,
  children,
  ...props
}: DimmedWithChildrenType) {
  const setIsClicked = useSetAtom(modalPopUpAtom);

  const closeModal = () => {
    setIsClicked(false);
  };

  const dimSize: DimSizeType =
    size === 'poster'
      ? { width: `200px`, height: `300px` }
      : { width: `100vw`, height: `100vh` };

  return size === 'poster' ? (
    <S.DimmedWrap
      size={dimSize}
      isHover={isHover}
      onMouseEnter={props.optional?.onMouseEnter}
      onMouseLeave={props.optional?.onMouseLeave}
    >
      {children}
    </S.DimmedWrap>
  ) : (
    <S.DimmedWrap size={dimSize} isHover={isHover} onClick={closeModal}>
      {children}
    </S.DimmedWrap>
  );
}

export default Dimmed;
