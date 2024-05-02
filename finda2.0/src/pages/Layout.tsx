import { isLoginPopUp } from '@/atoms/IsLogin';
import Error from '@components/Error/Index';
import Footer from '@components/Footer/Index';
import Header from '@components/Header/Index';
import Loading from '@components/Loading/Index';
import Login from '@components/Login/Index';
import Panel from '@components/Panel/Index';
import { useAtomValue } from 'jotai';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type IndexType = {
  children: React.ReactNode;
};

function Layout({ children }: IndexType) {
  const loginPopUp = useAtomValue(isLoginPopUp);

  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Header />
      {loginPopUp && <Login />}
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Panel />
      <Footer />
    </ErrorBoundary>
  );
}

export default Layout;
