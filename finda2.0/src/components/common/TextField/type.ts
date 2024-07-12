export interface TextFieldProps {
  onChange?: (...event: any[]) => void;
  onEnter?: (value: string) => void;
  fontSize?: FontSizeType;
  width?: string;
  placeholder?: string;
  label: string;
  type?: string;
  value: string;
}

export type FontSizeType =
  | 'Title'
  | 'SemiTitle'
  | 'Bold'
  | 'Regular'
  | 'Light'
  | 'Thin';
