import Github from '@components/Footer/FooterTab/Github';
import Resumei from '@components/Footer/FooterTab/Resumei';
import * as S from '@components/Footer/Index.style';

function Footer() {
  return (
    <S.FooterWrap>
      Developed By SeungHyun Jung
      <S.LinkWrap>
        <Github />
        <Resumei />
      </S.LinkWrap>
    </S.FooterWrap>
  );
}

export default Footer;
