import { NormalizedPosterDataType } from './type';
import {
  DocumentData,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { getFullFilteredInfo } from './util';
import { db } from '@/Firebase';
import { PAGECONTENTCOUNT } from '@/assets/static';

export const getSimilarMovies = async (genreArr: number[]) => {
  const moviesRef = collection(db, 'poster');
  const similarMovieQuery = query(
    moviesRef,
    where('genreArr', 'array-contains', genreArr[0]),
    orderBy('title'),
  );
  const similarSnap = await getDocs(similarMovieQuery);
  const firstFilteredData: NormalizedPosterDataType[] = [];
  similarSnap?.forEach((data: DocumentData) =>
    firstFilteredData.push(data.data()),
  );
  let countContent: number = similarSnap.size;
  if (genreArr.length >= 2) {
    const fullFilteredData = getFullFilteredInfo(genreArr, firstFilteredData);
    countContent = fullFilteredData.length;
    return fullFilteredData.length > PAGECONTENTCOUNT
      ? {
          resultData: fullFilteredData.slice(0, PAGECONTENTCOUNT),
          countContent,
        }
      : { resultData: fullFilteredData, countContent };
  }
  return firstFilteredData.length > PAGECONTENTCOUNT
    ? { resultData: firstFilteredData.slice(0, PAGECONTENTCOUNT), countContent }
    : { resultData: firstFilteredData, countContent };
};
