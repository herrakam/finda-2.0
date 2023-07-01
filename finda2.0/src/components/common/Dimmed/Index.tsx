import * as S from '@components/common/Dimmed/Index.style';
import {
  DimSizeType,
  DimmedWithChildrenType,
} from '@components/common/Dimmed/type';

function Dimmed({ size = 'full', children, ...props }: DimmedWithChildrenType) {
  const { isHover } = props;
  const dimSize: DimSizeType =
    size === 'poster'
      ? { width: `200px`, height: `300px` }
      : { width: `100vw`, height: `100vh` };
  return props.optional?.onMouseEnter && props.optional.onMouseLeave ? (
    <S.DimmedWrap
      size={dimSize}
      isHover={isHover}
      onMouseEnter={props.optional.onMouseEnter}
      onMouseLeave={props.optional.onMouseLeave}
    >
      {children}
    </S.DimmedWrap>
  ) : (
    <S.DimmedWrap size={dimSize} isHover={isHover}>
      {children}
    </S.DimmedWrap>
  );
}

export default Dimmed;
