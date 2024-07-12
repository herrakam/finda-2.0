import { FontSizeType } from '../TextField/type';

export type ButtonType = 'submit' | 'reset' | 'button';

export interface ButtonProps {
  clickEvent?: () => void;
  text: string;
  width?: string;
  fontSize?: FontSizeType;
  type?: ButtonType;
}
