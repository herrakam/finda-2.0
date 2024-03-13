import { commentDataOutType } from '@/utils/type';
import { UseMutateFunction } from '@tanstack/react-query';

export interface CommentsType {
  commentsData: commentDataOutType[];
  updateComment: (comment: string) => void;
  mutate: UseMutateFunction<void, unknown, void, unknown>;
  commentInput: string;
}
