import Dimmed from '@components/common/Dimmed/Index';
import { DimmedType } from '@components/common/Dimmed/type';
import * as S from '@components/common/Poster/Index.style';
import { posterType } from '@components/common/Poster/type';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const detailPageLink = `detail/:${title}`;
  return (
    <S.PosterWrap>
      <Link to={detailPageLink}>
        <S.Posterimage src={src} />
        <Dimmed {...dimmedProps}>
          <S.PosterTitle isHover={isHover}>{title}</S.PosterTitle>
        </Dimmed>
      </Link>
    </S.PosterWrap>
  );
}

export default Poster;
