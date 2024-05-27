import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { TextFieldProps } from './type';
import * as S from '@components/common/TextField/Index.style';
import { FieldValues } from 'react-hook-form';

function TextField<T extends FieldValues>({
  placeholder,
  onChange,
  onEnter,
  fontSize = 'Regular',
  width,
  label,
  registerProps,
}: TextFieldProps<T>) {
  const [value, setValue] = useState<string>('');
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
  const { register, option } = registerProps;

  const reg = { ...register(label, option) };

  return (
    <>
      <S.styledInput
        placeholder={placeholder || '텍스트를 입력해주세요'}
        onKeyDown={e => {
          pressEnter(e);
        }}
        value={value}
        fontSize={fontSize}
        width={width}
        {...reg}
        onChange={changeValue}
      />
    </>
  );
}

export default TextField;
