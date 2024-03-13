import Error from '@components/Error/Index';
import Footer from '@components/Footer/Index';
import Header from '@components/Header/Index';
import Loading from '@components/Loading/Index';
import Panel from '@components/Panel/Index';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type IndexType = {
  children: React.ReactNode;
};

function Layout({ children }: IndexType) {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Header />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Panel />
      <Footer />
    </ErrorBoundary>
  );
}

export default Layout;
