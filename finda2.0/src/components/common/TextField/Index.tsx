import { KeyboardEvent } from 'react';
import { TextFieldProps } from './type';
import * as S from '@components/common/TextField/Index.style';

function TextField({
  placeholder,
  onChange,
  onEnter,
  fontSize = 'Regular',
  width,
  type,
  ref,
  value,
}: TextFieldProps) {
  const pressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      onEnter?.(value);
    }
  };
  return (
    <S.styledInput
      type={type}
      placeholder={placeholder || '텍스트를 입력해주세요'}
      onKeyDown={e => {
        pressEnter(e);
      }}
      value={value}
      fontSize={fontSize}
      width={width}
      onChange={onChange}
      ref={ref}
    />
  );
}

export default TextField;
