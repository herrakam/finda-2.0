import Dimmed from '@components/common/Dimmed/Index';
import * as S from '@components/common/Poster/Index.style';
import { useState } from 'react';

type posterType = {
  title: string;
  src: string;
};

function Poster({ title, src }: posterType) {
  const [isHover, setHover] = useState(false);

  function showDimmed() {
    setHover(true);
  }
  return (
    <Dimmed size="poster" isHover={isHover}>
      <S.PosterWrap onMouseEnter={showDimmed}>
        <S.Posterimage src={src} />
        <S.PosterTitle isHover={isHover}>{title}</S.PosterTitle>
      </S.PosterWrap>
    </Dimmed>
  );
}

export default Poster;
