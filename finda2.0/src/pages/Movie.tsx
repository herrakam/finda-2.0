import { db } from '@/Firebase';
import { NormalizedDetailType } from '@/utils/type';
import ContentInfo from '@components/Movie/ContentInfo/Index';
import { mockRankInfo } from '@components/Main/MainBottom/Index';
import PageContainer from '@components/common/PageContainer/Index';
import Rank from '@components/common/Rank';
import { RankType } from '@components/common/Rank/type';
import { useQuery } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import Comments from '@components/Movie/Comments/Index';

function Movie() {
  const { contentTitle } = useParams() as { contentTitle: string };

  const getMovieData = async () => {
    const snap = await getDoc(doc(db, 'movies', contentTitle));
    return snap?.data();
  };

  const getMovieInfo = () => {
    return useQuery(['getMovieInfoQueryKey'], getMovieData);
  };

  const { data } = getMovieInfo();
  const detailData = data as NormalizedDetailType;

  const similarMoviesData: RankType = {
    subject: `${contentTitle}과 비슷한 영화`,
    rankInfo: mockRankInfo,
  };
  return (
    <PageContainer>
      {data && <ContentInfo {...detailData} />}
      <Rank {...similarMoviesData} />
      <Comments />
    </PageContainer>
  );
}

export default Movie;
