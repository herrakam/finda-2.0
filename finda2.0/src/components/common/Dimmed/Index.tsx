import * as S from '@components/common/Dimmed/Index.style';

type DimmedType = {
  size: 'full' | 'poster';
  isHover: boolean;
  children: React.ReactNode;
};

function Dimmed({ size, isHover, children }: DimmedType) {
  return (
    <S.DimmedWrap size={size} isHover={isHover}>
      {children}
    </S.DimmedWrap>
  );
}

export default Dimmed;
