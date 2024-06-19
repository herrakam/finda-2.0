import TitleResult from '@components/Result/TitleResult/Index';
import PageContainer from '@components/common/PageContainer/Index';
import { useParams } from 'react-router-dom';
import { useState, useRef, useEffect, Suspense } from 'react';
import { NormalizedPosterDataType, SearchResultPropsType } from '@/utils/type';
import * as S from '@components/Result/TitleResult/Index.style';
import GenreResult from '@components/Result/GenreResult/Index';
import { GenreResultPropsType } from '@components/Result/GenreResult/type';
import Loading from '@components/Loading/Index';
import { getGenreTextFromArr } from '@/utils/util';

function Result() {
  const param = useParams().searchParam;
  const searchInfo = param ? param : '';
  const [contentsCount, setContentCount] = useState<number>(0);
  const [isAbled, setIsAbled] = useState<boolean>(false);
  const [showedData, setShowedData] = useState<NormalizedPosterDataType[]>([]);
  const pageEndRef = useRef<HTMLDivElement>(null);
  const isGenre =
    new URL(location.href).pathname.split('/').indexOf('genre') === -1
      ? false
      : true;
  const genreNumArr = isGenre ? param!.split(',').map(Number) : [];
  const resultTitleText: string = isGenre
    ? `장르가 "${getGenreTextFromArr(genreNumArr)}"인 영화`
    : searchInfo
    ? `"${searchInfo}" 검색 결과`
    : 'FINDA에서 제공하는 영화들';

  const getNextData = () => {
    setIsAbled(true);
  };

  useEffect(() => {
    if (!pageEndRef.current) return;

    const io = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const titleSearchOption =
          entries[0].isIntersecting && contentsCount > showedData.length;
        switch (isGenre) {
          case true:
            getNextData();
            return;
          case false:
            if (titleSearchOption) {
              getNextData();
              return;
            }
        }
      },
      { threshold: 1 },
    );

    pageEndRef.current && io.observe(pageEndRef.current);

    return () => {
      io.disconnect();
    };
  }, [pageEndRef.current]);

  const titleResultProps: SearchResultPropsType = {
    searchInfo: searchInfo,
    setContentCount: setContentCount,
    setShowedData: setShowedData,
    showedData: showedData,
    isAbled: isAbled,
    setIsAbled: setIsAbled,
  };
  const genreResultProps: GenreResultPropsType = {
    ...titleResultProps,
    genreNumArr: genreNumArr,
  };
  const ResultContent = isGenre ? (
    <GenreResult {...genreResultProps} />
  ) : (
    <TitleResult {...titleResultProps} />
  );

  return (
    <PageContainer size="full">
      <S.ResultContatiner>
        <S.ResultTitle>{resultTitleText}</S.ResultTitle>
        <Suspense fallback={<Loading />}>{ResultContent}</Suspense>
        <div className="InfinityScrollTrigger" ref={pageEndRef}></div>
      </S.ResultContatiner>
    </PageContainer>
  );
}

export default Result;
