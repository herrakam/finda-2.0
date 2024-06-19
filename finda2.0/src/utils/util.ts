import { GENREINFO } from '@/assets/static';
import {
  GenreType,
  NormalizedDetailType,
  NormalizedPosterDataType,
} from './type';

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

export const extractMonthAndDay = (date: Date) => {
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줌
  const day = date.getDate();

  return `${month}-${day}`;
};
export const getGenreTextFromArr = (genreArr: number[]) => {
  const genreStringArr = genreArr.map(
    (genreNum: number) =>
      GENREINFO.find((info: GenreType) => info.id === genreNum)?.translation,
  );
  return genreStringArr.join(',');
};
