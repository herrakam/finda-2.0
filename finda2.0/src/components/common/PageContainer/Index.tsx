import * as S from '@components/common/PageContainer/Index.style';

interface PageContainerType {
  children: React.ReactNode;
  size?: 'full' | 'space';
}

function PageContainer({ children, size = 'space' }: PageContainerType) {
  return size === 'space' ? (
    <S.Containter>
      <S.InnerContainer>{children}</S.InnerContainer>
    </S.Containter>
  ) : (
    <S.Containter>{children}</S.Containter>
  );
}

export default PageContainer;
