import FooterTab from '@components/Footer/FooterTab/Index';
import * as S from '@components/Footer/Index.style';
import { BsGithub, BsFillFileEarmarkPersonFill } from 'react-icons/bs';

export type FooterTabDataType = {
  url: string;
  icon: JSX.Element;
};

function Footer() {
  const tabInfo: Array<FooterTabDataType> = [
    { url: 'https://github.com/herrakam', icon: <BsGithub /> },
    {
      url: 'https://jjung5eung.notion.site/9d4d8de76d2c4353ba6aa3b2de6ea4f2',
      icon: <BsFillFileEarmarkPersonFill />,
    },
  ];

  const tabs = tabInfo.map(info => {
    return <FooterTab url={info.url} icon={info.icon} />;
  });
  return (
    <S.FooterWrap>
      Developed By SeungHyun Jung
      <S.LinkWrap>{tabs}</S.LinkWrap>
    </S.FooterWrap>
  );
}

export default Footer;
