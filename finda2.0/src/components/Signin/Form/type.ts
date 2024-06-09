import { FieldValues, Path, RegisterOptions } from 'react-hook-form';

export interface SignInFormInfo<T extends FieldValues> {
  label: Path<T>;
  title: string;
  rules: RegisterOptions<T>;
  placeholder: string;
  type?: string;
}
export interface FormInput {
  eMail: string;
  password: string;
  rePassword: string;
  nickname: string;
}
