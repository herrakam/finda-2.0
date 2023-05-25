import * as S from '@components/Footer/FooterTab/Index.style';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';

function Resumei() {
  const resumeiLink =
    'https://jjung5eung.notion.site/9d4d8de76d2c4353ba6aa3b2de6ea4f2';
  return (
    <S.FooterTab to={resumeiLink}>
      <BsFillFileEarmarkPersonFill />
    </S.FooterTab>
  );
}
export default Resumei;
