export interface TextFieldProps {
  placeholder?: string;
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
