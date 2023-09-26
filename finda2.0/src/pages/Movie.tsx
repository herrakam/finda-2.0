import ContentInfo from '@components/ContentInfo/Index';
import PageContainer from '@components/common/PageContainer/Index';
import { useParams } from 'react-router-dom';

function Movie() {
  const { params } = useParams();
  return (
    <PageContainer>
      <ContentInfo />
    </PageContainer>
  );
}

export default Movie;
