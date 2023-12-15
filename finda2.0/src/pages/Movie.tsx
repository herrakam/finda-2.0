import {
  NormalizedDetailType,
  NormalizedPosterDataType,
  RankInfoType,
} from '@/utils/type';
import ContentInfo from '@components/Movie/ContentInfo/Index';
import PageContainer from '@components/common/PageContainer/Index';
import Rank from '@components/common/Rank';
import { RankType } from '@components/common/Rank/type';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Comments from '@components/Movie/Comments/Index';
import { useEffect, useState } from 'react';
import {
  getCommentsData,
  getMovieData,
  getSimilarMovies,
  postComments,
} from '@/utils/API';
import { sliceGenreArr } from '@/utils/util';

function Movie() {
  const contentTitle = useParams().contentTitle as string;
  const [isSuccess, setIsSuccess] = useState(false);
  const [genreArr, setGenreArr] = useState<number[]>([]);
  const [comment, setComment] = useState<string>('');
  const [similarInfo, setSimilarInfo] = useState<RankInfoType[]>([]);

  const updateSimilarInfo = (info: RankInfoType[]) => setSimilarInfo([...info]);
  const updateComment = (comment: string) => setComment(comment);

  const sliceFilteredData = (data: NormalizedPosterDataType[]) => {
    return data
      .filter((data: NormalizedPosterDataType) => data.title !== contentTitle)
      .slice(0, 5);
  };

  const getMovieInfo = () => {
    return useQuery(['getMovieInfoQueryKey'], () => {
      return getMovieData(contentTitle);
    });
  };

  const getCommentInfo = () => {
    return useQuery(['getCommentsQueryKey', contentTitle], () => {
      return getCommentsData(contentTitle);
    });
  };

  const getSimilarMoviesInfo = () => {
    return useQuery(
      ['getSimilarMoviesQuery', genreArr],
      () => getSimilarMovies(sliceGenreArr(genreArr)),
      {
        enabled: isSuccess,
      },
    );
  };

  const postComment = () => {
    return useMutation(() => postComments(contentTitle, comment));
  };

  const detailData = getMovieInfo().data as NormalizedDetailType;
  const commentsData = getCommentInfo().data?.comments;
  const similarData = getSimilarMoviesInfo().data?.resultData;
  const {
    mutate,
    isSuccess: commentSuccess,
    isError: commentError,
  } = postComment();

  const similarMoviesData: RankType = {
    subject: `${contentTitle}과 비슷한 영화`,
    rankInfo: similarInfo,
  };

  useEffect(() => {
    if (detailData) {
      setGenreArr([...detailData.genreArr]);
      setIsSuccess(true);
    }
  }, [detailData, contentTitle]);

  useEffect(() => {
    if (similarData) {
      const normalizedSimilarData = sliceFilteredData(similarData).map(
        (data: NormalizedPosterDataType) => {
          return {
            title: data.title,
            imgSrc: data.poster,
          };
        },
      );
      updateSimilarInfo(normalizedSimilarData);
    }
  }, [similarData]);

  const commentProps = commentsData! && {
    commentsData,
    updateComment,
    mutate,
  };

  return (
    <PageContainer>
      {detailData && <ContentInfo {...detailData} />}
      {similarData && <Rank {...similarMoviesData} />}
      {commentsData && <Comments {...commentProps} />}
    </PageContainer>
  );
}

export default Movie;
