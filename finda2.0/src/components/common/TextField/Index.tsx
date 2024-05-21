import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { TextFieldProps } from './type';
import * as S from '@components/common/TextField/Index.style';
import { useForm } from 'react-hook-form';

function TextField({
  placeholder,
  onChange,
  onEnter,
  fontSize = 'Regular',
  width,
  validation,
  label,
}: TextFieldProps) {
  const [value, setValue] = useState<string>('');
  const { register } = useForm();
  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onChange?.(inputValue);
  };
  const pressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      onEnter?.(value);
    }
  };

  return (
    <S.styledInput
      placeholder={placeholder || '텍스트를 입력해주세요'}
      onKeyDown={e => {
        pressEnter(e);
      }}
      value={value}
      fontSize={fontSize}
      width={width}
      {...register(`${label}`, { validate: validation })}
      onChange={changeValue}
    />
  );
}

export default TextField;
