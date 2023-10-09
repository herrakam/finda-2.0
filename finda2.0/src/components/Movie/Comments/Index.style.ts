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
  ${mixin.flexbox({ vertical: 'center' })};
  width: 100%;
`;

export const CommentId = styled.span`
  ${({ theme }) => theme.typography.Regular};
  color: ${({ theme }) => theme.pallete.normalFont};
  margin-right: 30px;
`;

export const CommentContent = styled(CommentId)`
  ${({ theme }) => theme.typography.Light};
  line-height: 2rem;
  border-bottom: 2px dotted ${({ theme }) => theme.pallete.normalFont};
`;
