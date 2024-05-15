import * as S from '@components/common/Button/Index.style';
import { ButtonProps } from './type';

function Btn({ clickEvent, text, fontSize = 'Regular', width }: ButtonProps) {
  return (
    <S.StyledBtn onClick={clickEvent} fontSize={fontSize} width={width}>
      {text}
    </S.StyledBtn>
  );
}

export default Btn;
