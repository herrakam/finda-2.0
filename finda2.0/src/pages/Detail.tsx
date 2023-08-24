import ContentInfo from '@components/ContentInfo/Index';
import { useParams } from 'react-router-dom';

function Detail() {
  const { params } = useParams();
  return (
    <>
      <ContentInfo />
    </>
  );
}

export default Detail;
