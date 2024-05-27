import { TextFieldProps } from '@components/common/TextField/type';
import { FieldErrors, FieldValues, Path } from 'react-hook-form';

export interface SignInFormInfo<T extends FieldValues>
  extends TextFieldProps<T> {
  label: Path<T>;
  errors?: FieldErrors<T>;
  title: string;
}
export interface FormInput {
  eMail: string;
  password: string;
  rePassword: string;
  nickname: string;
}
