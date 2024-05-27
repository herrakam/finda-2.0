import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

export interface TextFieldProps<T extends FieldValues> {
  onChange?: (value: string) => void;
  onEnter?: (value: string) => void;
  fontSize?: FontSizeType;
  width?: string;
  placeholder?: string;
  label: Path<T>;
  registerProps: {
    register: UseFormRegister<T>;
    option: RegisterOptions;
  };
}

export type FontSizeType =
  | 'Title'
  | 'SemiTitle'
  | 'Bold'
  | 'Regular'
  | 'Light'
  | 'Thin';
