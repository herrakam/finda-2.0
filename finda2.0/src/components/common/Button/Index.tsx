import * as S from '@components/common/Button/Index.style';
import { ButtonProps } from './type';

function Btn({
  clickEvent,
  text,
  fontSize = 'Regular',
  width,
  type = 'button',
}: ButtonProps) {
  return (
    <S.StyledBtn
      type={type}
      onClick={clickEvent}
      fontSize={fontSize}
      width={width}
    >
      {text}
    </S.StyledBtn>
  );
}

export default Btn;
