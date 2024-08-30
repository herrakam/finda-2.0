import { useNavigate } from 'react-router-dom';

interface gotoPageProps {
  url?: 'result' | 'movie' | 'signUp';
  detail?: string;
}

export const useMove = () => {
  const navigate = useNavigate();

  const gotoPage = ({ url, detail }: gotoPageProps) => {
    if (url === undefined) {
      navigate('/');
    } else if (detail === undefined) {
      navigate(`/${url}`);
    } else {
      navigate(`/${url}/${detail}`);
    }
  };

  return gotoPage;
};
