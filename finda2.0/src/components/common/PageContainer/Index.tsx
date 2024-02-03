import * as S from '@components/common/PageContainer/Index.style';

interface PageContainerType {
  children: React.ReactNode;
}

function PageContainer({ children }: PageContainerType) {
  return (
    <S.Containter>
      <S.InnerContainer>{children}</S.InnerContainer>
    </S.Containter>
  );
}

export default PageContainer;
