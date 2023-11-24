import { NormalizedPosterDataType } from './type';
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { getFullFilteredInfo } from './util';
import { db } from '@/Firebase';

export const getSimilarMovies = async (genreArr: number[]) => {
  const moviesRef = collection(db, 'poster');
  const similarMovieQuery = query(
    moviesRef,
    where('genreArr', 'array-contains', genreArr[0]),
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
    return { resultData: fullFilteredData, countContent };
  }

  return { resultData: firstFilteredData, countContent };
};
