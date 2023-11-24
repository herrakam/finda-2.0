import { NormalizedPosterDataType } from './type';
import { DocumentData, getDocs } from 'firebase/firestore';
import { getFullFilteredInfo, getGenreQuery } from './util';

export const getSimilarMovies = async (genreArr: number[]) => {
  const similarMovieQuery = getGenreQuery(genreArr);
  const similarSnap = await getDocs(similarMovieQuery);
  const firstFilteredData: NormalizedPosterDataType[] = [];
  similarSnap?.forEach((data: DocumentData) =>
    firstFilteredData.push(data.data()),
  );
  const fullFilteredData = getFullFilteredInfo(genreArr, firstFilteredData);
  const countContent = fullFilteredData.length;

  return { similrData: fullFilteredData, countContent };
};
