import * as S from '@/components/Movie/Comments/Index.style';
import { commentDataOutType } from '@/utils/type';
import { CommentsType } from './type';
import { extractMonthAndDay } from '@/utils/util';

function Comments({
  commentsData,
  mutate,
  updateComment,
  commentInput,
}: CommentsType) {
  const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') validateAndMutate();
  };

  const validateAndMutate = () => {
    if (commentInput !== '') mutate();
    else window.alert('리뷰를 입력한 뒤 등록해주세요');
  };

  const commentContent =
    commentsData.length === 0 ? (
      <S.NoComment>첫 리뷰를 남겨보세요!!</S.NoComment>
    ) : (
      commentsData.map((comment: commentDataOutType) => {
        const date = extractMonthAndDay(comment.createdTime.toDate());
        return (
          <S.Comment key={comment.comment}>
            {/* <S.CommentId>{comment.nickname}</S.CommentId> */}
            <S.CommentContent>{comment.comment}</S.CommentContent>
            <S.CommentCreatedTime>{date}</S.CommentCreatedTime>
          </S.Comment>
        );
      })
    );

  return (
    <S.Container>
      <S.CommentTitle>한줄리뷰</S.CommentTitle>
      <S.InputContainer>
        <S.CommentInput
          placeholder="한줄 리뷰를 남겨보세요"
          value={commentInput}
          onKeyUp={onPressEnter}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            updateComment(e.target.value);
          }}
        />
        <S.CommentPostBtn
          onClick={() => {
            validateAndMutate();
          }}
        >
          등록
        </S.CommentPostBtn>
      </S.InputContainer>
      <S.Content>{commentContent}</S.Content>
    </S.Container>
  );
}

export default Comments;
