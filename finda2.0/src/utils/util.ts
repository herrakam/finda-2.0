import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

interface debouncingType {
  callback: (e: React.ChangeEvent<HTMLInputElement>) => void;
  time?: number;
}

export const debouncing = ({ callback, time = 500 }: debouncingType) => {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => callback(e), time);
  };
};

interface gotoPageProps {
  url?: 'result' | 'movie';
  detail: string;
}

export const gotoPage = ({ url, detail }: gotoPageProps) => {
  navigate(`/${url}/${detail}`);
};
