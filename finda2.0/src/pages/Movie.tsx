import { NormalizedPosterDataType, RankInfoType } from '@/utils/type';
import ContentInfo from '@components/Movie/ContentInfo/Index';
import PageContainer from '@components/common/PageContainer/Index';
import Rank from '@components/common/Rank';
import { RankType } from '@components/common/Rank/type';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Comments from '@components/Movie/Comments/Index';
import { Suspense, useEffect, useState } from 'react';
import {
  getCommentsData,
  getMovieData,
  getSimilarMovies,
  postComments,
} from '@/utils/API';
import { sliceGenreArr } from '@/utils/util';
import Loading from '@components/Loading/Index';

function Movie() {
  const contentTitle = useParams().contentTitle as string;
  const [isSuccess, setIsSuccess] = useState(false);
  const [genreArr, setGenreArr] = useState<number[]>([]);
  const [commentInput, setCommentInput] = useState<string>('');
  const [similarInfo, setSimilarInfo] = useState<RankInfoType[]>([]);

  const updateSimilarInfo = (info: RankInfoType[]) => {
    setSimilarInfo([...info]);
  };
  const updateComment = (comment: string) => {
    setCommentInput(comment);
  };
  const queryClient = useQueryClient();
  const sliceFilteredData = (data: NormalizedPosterDataType[]) => {
    return data
      .filter((data: NormalizedPosterDataType) => data.title !== contentTitle)
      .slice(0, 5);
  };
  const resetComment = () => {
    setCommentInput('');
  };
  const getMovieInfo = () => {
    return useQuery(['getMovieInfoQueryKey', contentTitle], () => {
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
    return useMutation(() => postComments(contentTitle, commentInput));
  };

  const detailData = getMovieInfo().data;
  const commentsData = getCommentInfo().data?.comments;
  const similarData = getSimilarMoviesInfo().data?.resultData;
  const {
    mutate,
    isSuccess: commentSuccess,
    isError: commentError,
  } = postComment();

  const similarMoviesProps: RankType = {
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
  useEffect(() => {
    if (commentSuccess) {
      resetComment();
      window.alert('댓글이 등록되었습니다');
      queryClient.invalidateQueries({ queryKey: ['getCommentsQueryKey'] });
    } else if (commentError)
      window.alert('댓글 달기 실패, 관리자에게 문의하세요');
  }, [commentSuccess, commentError]);

  const detailProps = detailData! && {
    ...detailData,
  };

  const commentProps = commentsData! && {
    commentsData,
    updateComment,
    mutate,
    commentInput,
  };

  return (
    <PageContainer size="space">
      <Suspense fallback={<Loading />}>
        {detailData && <ContentInfo {...detailProps} />}
        {similarData && <Rank {...similarMoviesProps} />}
        {commentsData && <Comments {...commentProps} />}
      </Suspense>
    </PageContainer>
  );
}

export default Movie;
