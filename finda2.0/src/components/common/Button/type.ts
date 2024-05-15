import { FontSizeType } from '../TextField/type';

export interface ButtonProps {
  clickEvent: () => void;
  text: string;
  width?: string;
  fontSize?: FontSizeType;
}
