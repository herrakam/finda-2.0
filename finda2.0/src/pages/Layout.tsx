import { modalPopUpAtom } from '@/atoms/IsLogin';
import Error from '@components/Error/Index';
import Footer from '@components/Footer/Index';
import Header from '@components/Header/Index';
import Loading from '@components/Loading/Index';
import Login from '@components/Login/Index';
import Panel from '@components/Panel/Index';
import Modal from '@components/common/Modal/Index';
import { useAtomValue } from 'jotai';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type IndexType = {
  children: React.ReactNode;
};

function Layout({ children }: IndexType) {
  const isModalPopUp = useAtomValue(modalPopUpAtom);

  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Header />
      {isModalPopUp && (
        <Modal label="login">
          <Login />
        </Modal>
      )}
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Panel />
      <Footer />
    </ErrorBoundary>
  );
}

export default Layout;
