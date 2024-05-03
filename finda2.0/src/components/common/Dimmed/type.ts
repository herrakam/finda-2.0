export type DimSizeType = {
  width: '100vw' | '200px';
  height: '100vh' | '300px';
};
export type DimmedType = {
  isHover?: boolean;
  size?: 'full' | 'poster';
  optional?: {
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
  };
};

export type DimmedWithChildrenType = DimmedType & {
  children: React.ReactNode;
};
