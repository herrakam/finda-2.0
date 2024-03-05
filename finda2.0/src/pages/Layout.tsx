import Error from '@components/Error/Index';
import Footer from '@components/Footer/Index';
import Header from '@components/Header/Index';
import Panel from '@components/Panel/Index';
import { ErrorBoundary } from 'react-error-boundary';

type IndexType = {
  children: React.ReactNode;
};

function Layout({ children }: IndexType) {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <Header />
      {children}
      <Panel />
      <Footer />
    </ErrorBoundary>
  );
}

export default Layout;
