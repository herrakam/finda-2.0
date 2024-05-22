import { UseFormRegister, FieldValues } from 'react-hook-form';

export interface TextFieldProps {
  label: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onEnter?: (value: string) => void;
  fontSize: FontSizeType;
  width?: string;
  register?: UseFormRegister<FieldValues>;
}

export type FontSizeType =
  | 'Title'
  | 'SemiTitle'
  | 'Bold'
  | 'Regular'
  | 'Light'
  | 'Thin';
