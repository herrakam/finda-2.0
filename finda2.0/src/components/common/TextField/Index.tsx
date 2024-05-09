import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { TextFieldProps } from './type';
import * as S from '@components/common/TextField/Index.style';

function TextField({
  placeholder,
  onChange,
  onEnter,
  fontSize = 'Regular',
  width,
}: TextFieldProps) {
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

  return (
    <S.styledInput
      placeholder={placeholder || '텍스트를 입력해주세요'}
      onChange={e => {
        changeValue(e);
      }}
      onKeyDown={e => {
        pressEnter(e);
      }}
      value={value}
      fontSize={fontSize}
      width={width}
    />
  );
}

export default TextField;
