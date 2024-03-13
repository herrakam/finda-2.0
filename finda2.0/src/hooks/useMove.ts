import { useNavigate } from 'react-router-dom';

interface gotoPageProps {
  url?: 'result' | 'movie';
  detail: string;
}

export const useMove = () => {
  const navigate = useNavigate();

  const gotoPage = ({ url, detail }: gotoPageProps) => {
    navigate(`/${url}/${detail}`);
  };

  return gotoPage;
};
