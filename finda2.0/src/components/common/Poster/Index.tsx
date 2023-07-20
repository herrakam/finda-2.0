import Dimmed from '@components/common/Dimmed/Index';
import { DimmedType } from '@components/common/Dimmed/type';
import * as S from '@components/common/Poster/Index.style';
import { posterType } from '@components/common/Poster/type';
import { useState } from 'react';

function Poster({ title, src }: posterType) {
  const [isHover, setHover] = useState(false);

  function showDimmed() {
    setHover(true);
  }
  function hideDimmed() {
    setHover(false);
  }

  const dimmedEvent = { onMouseEnter: showDimmed, onMouseLeave: hideDimmed };
  const dimmedProps: DimmedType = {
    isHover: isHover,
    size: 'poster',
    optional: dimmedEvent,
  };
  return (
    <S.PosterWrap>
      <S.Posterimage src={src} />
      <Dimmed {...dimmedProps}>
        <S.PosterTitle isHover={isHover}>{title}</S.PosterTitle>
      </Dimmed>
    </S.PosterWrap>
  );
}

export default Poster;
