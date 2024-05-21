export interface TextFieldProps {
  label: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onEnter?: (value: string) => void;
  fontSize: FontSizeType;
  width?: string;
  validation?: (value: string) => boolean;
}

export type FontSizeType =
  | 'Title'
  | 'SemiTitle'
  | 'Bold'
  | 'Regular'
  | 'Light'
  | 'Thin';
