import * as S from '@/components/Movie/Comments/Index.style';
import { commentDataType } from '@/utils/type';
import { CommentsType } from './type';

function Comments({ commentsData }: CommentsType) {
  const commentContent =
    commentsData.length === 0 ? (
      <>첫 댓글을 입력해주세요</>
    ) : (
      commentsData.map((comment: commentDataType) => {
        return (
          <S.Comment key={comment.comment}>
            <S.CommentId>{comment.nickname}</S.CommentId>
            <S.CommentContent>{comment.comment}</S.CommentContent>
          </S.Comment>
        );
      })
    );
  return (
    <S.Container>
      <S.CommentTitle>한줄리뷰</S.CommentTitle>
      <S.Content>{commentContent}</S.Content>
    </S.Container>
  );
}

export default Comments;
