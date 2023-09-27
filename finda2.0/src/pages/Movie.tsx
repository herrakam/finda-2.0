import { db } from '@/Firebase';
import ContentInfo from '@components/ContentInfo/Index';
import PageContainer from '@components/common/PageContainer/Index';
import { useQuery } from '@tanstack/react-query';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

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
  if (data) {
    console.log(data);
  }

  return (
    <PageContainer>
      <ContentInfo />
    </PageContainer>
  );
}

export default Movie;
