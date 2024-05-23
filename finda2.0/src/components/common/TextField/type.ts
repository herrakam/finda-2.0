import { FormInfo } from '@components/Signin/Form/type';

export interface TextFieldProps extends FormInfo {
  onChange?: (value: string) => void;
  onEnter?: (value: string) => void;
  fontSize: FontSizeType;
  width?: string;
}

export type FontSizeType =
  | 'Title'
  | 'SemiTitle'
  | 'Bold'
  | 'Regular'
  | 'Light'
  | 'Thin';
