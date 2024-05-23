import { UseFormRegister, FieldValues, RegisterOptions } from 'react-hook-form';

export interface FormInfo {
  title: string;
  placeholder: string;
  label: string;
  registerProps: {
    register: UseFormRegister<FieldValues>;
    option: RegisterOptions;
  };
}
export interface FormInput {
  email: string;
  password: string;
  nickname: string;
}
