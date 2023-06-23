export type DimSizeType = {
  width: '100vw' | '200px';
  height: '100vh' | '300px';
};
export type DimmedType = {
  size?: 'full' | 'poster';
  isHover: boolean;
  children: React.ReactNode;
};
