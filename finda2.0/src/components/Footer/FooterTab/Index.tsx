import * as S from '@components/Footer/FooterTab/Index.style';
import { FooterTabDataType } from '@components/Footer/Index';

function FooterTab({ url, icon }: FooterTabDataType) {
  return <S.FooterTab to={url}>{icon}</S.FooterTab>;
}

export default FooterTab;
