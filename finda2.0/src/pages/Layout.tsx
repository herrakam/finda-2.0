import Footer from '@components/Footer/Index';
import Header from '@components/Header/Index';
import Panel from '@components/Panel/Index';

type IndexType = {
  children: React.ReactNode;
};

function Layout({ children }: IndexType) {
  return (
    <div>
      <Header />
      {children}
      <Panel />
      <Footer />
    </div>
  );
}

export default Layout;
