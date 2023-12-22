import { mixin } from '@/globalStyles/GlobalStyle';
import styled from 'styled-components';

export const Container = styled.div`
  ${mixin.flexbox({ dir: 'column' })}
  gap: 30px;
  width: 80%;
`;

export const CommentTitle = styled.span`
  ${({ theme }) => theme.typography.Title};
  color: ${({ theme }) => theme.pallete.normalFont};
`;

export const Content = styled.div`
  ${mixin.flexbox({ dir: 'column', vertical: 'center' })};
  min-height: 300px;
  gap: 10px;
`;

export const Comment = styled.div`
  ${mixin.flexbox({ vertical: 'center', horizontal: 'space-between' })};
  width: 100%;
  height: 2rem;
`;

export const CommentId = styled.span`
  ${({ theme }) => theme.typography.Regular};
  color: ${({ theme }) => theme.pallete.normalFont};
  margin-right: 10px;
  width: 5%;
`;

export const CommentContent = styled.span`
  ${({ theme }) => theme.typography.Light};
  color: ${({ theme }) => theme.pallete.normalFont};
  height: 2rem;
  border-bottom: 2px dotted ${({ theme }) => theme.pallete.normalFont};
  width: 90%;
  margin: 0 10px;
`;

export const CommentCreatedTime = styled.span`
  ${({ theme }) => theme.typography.Regular};
  color: ${({ theme }) => theme.pallete.normalFont};
  ${mixin.flexbox({ horizontal: 'flex-end', vertical: 'center' })}
  width: 5%;
  float: right;
`;

export const InputContainer = styled.div`
  ${mixin.flexbox({ horizontal: 'space-between' })};
  height: 3rem;
`;
export const CommentInput = styled.input`
  width: 95%;
`;
export const CommentPostBtn = styled.button`
  ${mixin.flexbox({ horizontal: 'center', vertical: 'center' })}
`;
export const NoComment = styled.span`
  ${({ theme }) => theme.typography.Bold}
  color:${({ theme }) => theme.pallete.normalFont}
`;
