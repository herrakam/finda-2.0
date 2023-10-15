import { db } from '@/Firebase';
import { NormalizedDetailType, RankInfoType } from '@/utils/type';
import ContentInfo from '@components/Movie/ContentInfo/Index';
import PageContainer from '@components/common/PageContainer/Index';
import Rank from '@components/common/Rank';
import { RankType } from '@components/common/Rank/type';
import { useQuery } from '@tanstack/react-query';
import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  where,
} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import Comments from '@components/Movie/Comments/Index';
import { useEffect, useState } from 'react';

function Movie() {
  const { contentTitle } = useParams() as { contentTitle: string };
  const [isSuccess, setIsSuccess] = useState(false);
  const [genreArr, setGenreArr] = useState<number[]>([]);
  const [similarInfo, setSimilarInfo] = useState<RankInfoType[]>([]);

  const getMovieData = async () => {
    const snap = await getDoc(doc(db, 'movies', contentTitle));
    return snap?.data();
  };

  const updateSimilarInfo = (info: RankInfoType[]) => setSimilarInfo([...info]);

  const getSimilarMovies = async (genreArr: number[]) => {
    const moviesRef = collection(db, 'movies');
    const similarMovieQuery =
      genreArr &&
      query(
        moviesRef,
        where('genreArr', 'array-contains-any', genreArr),
        limit(5),
      );
    const similarSnap = await getDocs(similarMovieQuery);
    const similarData: NormalizedDetailType[] = [];
    similarSnap?.forEach((data: DocumentData) => similarData.push(data.data()));
    return similarData;
  };
  const getMovieInfo = () => {
    return useQuery(['getMovieInfoQueryKey'], getMovieData);
  };

  const getSimilarMoviesInfo = () => {
    return useQuery(
      ['getSimilarMoviesQuery', genreArr],
      () => getSimilarMovies(genreArr),
      {
        enabled: isSuccess,
      },
    );
  };

  const detailData = getMovieInfo().data as NormalizedDetailType;

  const similarData = getSimilarMoviesInfo().data;

  const similarMoviesData: RankType = {
    subject: `${contentTitle}과 비슷한 영화`,
    rankInfo: similarInfo,
  };

  useEffect(() => {
    if (detailData) {
      setGenreArr([...detailData.genreArr]);
      setIsSuccess(true);
      console.log(1);
    }
  }, [detailData]);

  useEffect(() => {
    if (similarData) {
      const normalizedSimilarData = similarData.map(
        (data: NormalizedDetailType) => {
          return {
            title: data.title,
            imgSrc: data.poster,
          };
        },
      );
      updateSimilarInfo(normalizedSimilarData);
      console.log(2);
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
