import { GENREINFO } from '@/assets/static';
import { GenreType } from './type';

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

export const openInNewWindow = (url: string) => window.open(url, '_blank');

export const getGenreText = (genre: number) =>
  GENREINFO.filter((info: GenreType) => info.id === genre)[0].translation;
