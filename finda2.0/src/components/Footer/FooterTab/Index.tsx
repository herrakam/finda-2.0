import { openInNewWindow } from '@/utils/util';
import * as S from '@components/Footer/FooterTab/Index.style';
import { FooterTabDataType } from '@components/Footer/Index';

function FooterTab({ url, icon }: FooterTabDataType) {
  return (
    <S.FooterTab
      onClick={() => {
        openInNewWindow(url);
      }}
    >
      {icon}
    </S.FooterTab>
  );
}

export default FooterTab;
