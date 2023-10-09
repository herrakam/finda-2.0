import * as S from '@/components/Movie/Comments/Index.style';
import { CommentType } from './type';

function Comments() {
  const mockComments: CommentType[] = [
    { id: '123', comment: '재밌었음' },
    { id: '5123', comment: '노잼' },
  ];

  const commentContent = mockComments.map((Comment: CommentType) => {
    return (
      <S.Comment key={Comment.comment}>
        <S.CommentId>{Comment.id}</S.CommentId>
        <S.CommentContent>{Comment.comment}</S.CommentContent>
      </S.Comment>
    );
  });
  return (
    <S.Container>
      <S.CommentTitle>한줄 평</S.CommentTitle>
      <S.Content>{commentContent}</S.Content>
    </S.Container>
  );
}

export default Comments;
