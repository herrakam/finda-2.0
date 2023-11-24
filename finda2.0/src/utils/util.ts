import { GENREINFO } from '@/assets/static';
import {
  GenreType,
  NormalizedDetailType,
  NormalizedPosterDataType,
} from './type';
import { collection, query, where } from 'firebase/firestore';
import { db } from '@/Firebase';

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

export const getPosterDataFromDetail = (
  detailData: NormalizedDetailType[],
): NormalizedPosterDataType[] => {
  return detailData.map((data: NormalizedDetailType) => {
    return {
      id: Number(data.releasedYear) + data.runtime,
      title: data.title,
      poster: data.poster,
      objectType: 'movie',
      genreArr: data.genreArr.sort((a, b) => a - b),
    };
  });
};

export const getGenreQuery = (genreArr: number[]) => {
  const moviesRef = collection(db, 'poster');
  switch (genreArr.length) {
    case 2:
      return query(
        moviesRef,
        where('genreArr.0', '==', genreArr[0]),
        where('genreArr.1', '==', genreArr[1]),
      );
    case 3:
      return query(
        moviesRef,
        where('genreArr.0', '==', genreArr[0]),
        where('genreArr.1', '==', genreArr[1]),
        where('genreArr.1', '==', genreArr[2]),
      );
  }
  return query(moviesRef, where('genreArr.0', '==', genreArr[0]));
};

export const sliceGenreArr = (genreArr: number[]) => {
  if (genreArr.length >= 3) {
    return genreArr.slice(0, 2);
  } else {
    return genreArr;
  }
};

export const getFullFilteredInfo = (
  genreArr: number[],
  data: NormalizedPosterDataType[],
) =>
  genreArr
    .slice(1)
    .reduce(
      (acc: NormalizedPosterDataType[], genre: number) =>
        acc.filter((item: NormalizedPosterDataType) =>
          item.genreArr.includes(genre),
        ),
      data,
    );
