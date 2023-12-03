import { db } from '@/Firebase';
import {
  NormalizedDetailType,
  NormalizedPosterDataType,
  RankInfoType,
} from '@/utils/type';
import ContentInfo from '@components/Movie/ContentInfo/Index';
import PageContainer from '@components/common/PageContainer/Index';
import Rank from '@components/common/Rank';
import { RankType } from '@components/common/Rank/type';
import { useQuery } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import Comments from '@components/Movie/Comments/Index';
import { useEffect, useState } from 'react';
import { getSimilarMovies } from '@/utils/API';
import { sliceGenreArr } from '@/utils/util';

function Movie() {
  const contentTitle = useParams().contentTitle as string;
  const [isSuccess, setIsSuccess] = useState(false);
  const [genreArr, setGenreArr] = useState<number[]>([]);
  const [similarInfo, setSimilarInfo] = useState<RankInfoType[]>([]);

  const getMovieData = async () => {
    const snap = await getDoc(doc(db, 'movies', contentTitle));
    return snap?.data();
  };

  const updateSimilarInfo = (info: RankInfoType[]) => setSimilarInfo([...info]);

  const getMovieInfo = () => {
    return useQuery(['getMovieInfoQueryKey'], getMovieData);
  };

  const sliceFilteredData = (data: NormalizedPosterDataType[]) => {
    return data
      .filter((data: NormalizedPosterDataType) => data.title !== contentTitle)
      .slice(0, 5);
  };

  const getSimilarMoviesInfo = () => {
    return useQuery(
      ['getSimilarMoviesQuery', genreArr],
      () => getSimilarMovies(sliceGenreArr(genreArr)),
      {
        enabled: isSuccess,
      },
    );
  };

  const detailData = getMovieInfo().data as NormalizedDetailType;

  const similarData = getSimilarMoviesInfo().data?.resultData;

  const similarMoviesData: RankType = {
    subject: `${contentTitle}과 비슷한 영화`,
    rankInfo: similarInfo,
  };

  useEffect(() => {
    if (detailData) {
      setGenreArr([...detailData.genreArr]);
      setIsSuccess(true);
    }
  }, [detailData, contentTitle]);

  useEffect(() => {
    if (similarData) {
      console.log(similarData);
      const normalizedSimilarData = sliceFilteredData(similarData).map(
        (data: NormalizedPosterDataType) => {
          return {
            title: data.title,
            imgSrc: data.poster,
          };
        },
      );
      updateSimilarInfo(normalizedSimilarData);
    }
  }, [similarData]);

  return (
    <PageContainer>
      {detailData && <ContentInfo {...detailData} />}
      {similarData && <Rank {...similarMoviesData} />}
      <Comments />
    </PageContainer>
  );
}

export default Movie;
