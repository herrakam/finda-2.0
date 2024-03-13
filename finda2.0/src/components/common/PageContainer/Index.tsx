import * as S from '@components/common/PageContainer/Index.style';

interface PageContainerType {
  children: React.ReactNode;
  size?: 'full' | 'space';
}

function PageContainer({ children, size = 'space' }: PageContainerType) {
  return size === 'space' ? (
    <S.Container>
      <S.InnerContainer>{children}</S.InnerContainer>
    </S.Container>
  ) : (
    <S.Container>{children}</S.Container>
  );
}

export default PageContainer;
