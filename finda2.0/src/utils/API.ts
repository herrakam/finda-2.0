import { NormalizedPosterDataType, commentDataType } from './type';
import {
  DocumentData,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
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
    return {
      resultData: fullFilteredData,
      countContent,
    };
  }
  return {
    resultData: firstFilteredData,
    countContent,
  };
};

export const getNextResultData = async (
  lastContent: string,
  searchInfo: String,
) => {
  const resultsRef = collection(db, 'poster');
  const snap =
    searchInfo === ''
      ? await getDocs(
          query(
            resultsRef,
            orderBy('title'),
            startAfter(lastContent),
            limit(PAGECONTENTCOUNT),
          ),
        )
      : await getDocs(
          query(
            resultsRef,
            where('title', '>=', searchInfo),
            where('title', '<=', searchInfo + '\uf8ff'),
            orderBy('title'),
            startAfter(lastContent),
            limit(PAGECONTENTCOUNT),
          ),
        );
  const nextResultData: NormalizedPosterDataType[] = [];
  snap?.forEach((data: DocumentData) => nextResultData.push(data.data()));
  return nextResultData;
};

export const getFirstResultDataWithInfo = async (info: string) => {
  const resultsRef = collection(db, 'poster');
  const snap = await getDocs(
    query(
      resultsRef,
      where('title', '>=', info),
      where('title', '<=', info + '\uf8ff'),
      orderBy('title'),
      limit(PAGECONTENTCOUNT),
    ),
  );
  const countContent = (
    await getDocs(
      query(
        resultsRef,
        where('title', '>=', info),
        where('title', '<=', info + '\uf8ff'),
        orderBy('title'),
      ),
    )
  ).size;
  const resultData: NormalizedPosterDataType[] = [];
  snap?.forEach((data: DocumentData) => resultData.push(data.data()));
  return { resultData, countContent };
};

export const getFirstResultData = async () => {
  const resultsRef = collection(db, 'poster');
  const snap = await getDocs(
    query(resultsRef, orderBy('title'), limit(PAGECONTENTCOUNT)),
  );
  const countContent = (await getDocs(query(resultsRef, orderBy('title'))))
    .size;
  const resultData: NormalizedPosterDataType[] = [];
  snap?.forEach((data: DocumentData) => resultData.push(data.data()));
  return { resultData, countContent };
};

export const getCommentsData = async (title: string) => {
  const commentsRef = collection(db, 'movies', title, 'comments');
  const commentsSnap = await getDocs(
    query(commentsRef, orderBy('createdTime', 'desc')),
  );
  const comments: commentDataType[] = [];
  commentsSnap!.forEach((data: DocumentData) => comments.push(data.data()));
  comments.splice(0, 1);
  return { comments };
};
