import * as S from '@components/common/Dimmed/Index.style';
import { DimSizeType, DimmedType } from '@components/common/Dimmed/type';

function Dimmed({ size, isHover, children }: DimmedType) {
  const dimSize: DimSizeType = size
    ? { width: `100vw`, height: `100vh` }
    : { width: `200px`, height: `300px` };
  return (
    <S.DimmedWrap size={dimSize} isHover={isHover}>
      {children}
    </S.DimmedWrap>
  );
}

export default Dimmed;
