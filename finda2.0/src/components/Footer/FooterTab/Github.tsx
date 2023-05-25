import * as S from '@components/Footer/FooterTab/Index.style';
import { BsGithub } from 'react-icons/bs';

function Github() {
  const githubLink = 'https://github.com/herrakam';
  return (
    <S.FooterTab to={githubLink}>
      <BsGithub />
    </S.FooterTab>
  );
}

export default Github;
