import { RefCallBack } from 'react-hook-form';

export interface TextFieldProps {
  onChange?: (...event: any[]) => void;
  onEnter?: (value: string) => void;
  fontSize?: FontSizeType;
  width?: string;
  placeholder?: string;
  label: string;
  type?: string;
  ref: RefCallBack;
  value: string;
}

export type FontSizeType =
  | 'Title'
  | 'SemiTitle'
  | 'Bold'
  | 'Regular'
  | 'Light'
  | 'Thin';
