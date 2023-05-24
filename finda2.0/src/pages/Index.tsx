import Header from '@components/Header/Index';

type IndexType = {
  children: React.ReactNode;
};

function Index({ children }: IndexType) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Index;
