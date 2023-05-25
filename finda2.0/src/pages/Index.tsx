import Footer from '@components/Footer/Index';
import Header from '@components/Header/Index';

type IndexType = {
  children: React.ReactNode;
};

function Index({ children }: IndexType) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Index;
