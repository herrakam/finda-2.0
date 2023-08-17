import * as S from '@components/Result/SearchResult/Index.style';
import Poster from '@components/common/Poster/Index';

function SearchResult() {
  const resultMockData = {
    subject: '검색 결과',
    resultInfo: [
      {
        title: 'sample',
        imgSrc:
          'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
      },
      {
        title: 'sample',
        imgSrc:
          'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
      },
      {
        title: 'sample',
        imgSrc:
          'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
      },
      {
        title: 'sample',
        imgSrc:
          'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
      },
      {
        title: 'sample',
        imgSrc:
          'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
      },
      {
        title: 'sample',
        imgSrc:
          'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
      },
      {
        title: 'sample',
        imgSrc:
          'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
      },
      {
        title: 'sample',
        imgSrc:
          'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
      },
      {
        title: 'sample',
        imgSrc:
          'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
      },
      {
        title: 'sample',
        imgSrc:
          'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
      },
      {
        title: 'sample',
        imgSrc:
          'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
      },
      {
        title: 'sample',
        imgSrc:
          'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
      },
      {
        title: 'sample',
        imgSrc:
          'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
      },

      {
        title: 'sample',
        imgSrc:
          'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
      },
      {
        title: 'sample',
        imgSrc:
          'https://i.namu.wiki/i/_33_6GMFJ2tl_JF2as-w_tL9VnmcrHPMFN5IIz88yFIhLOJVEXfTQNltUZT6CHoc8rGIMOFy7bZmsWPIdq5uFQ.webp',
      },
    ],
  };

  const [title, result] = [resultMockData.subject, resultMockData.resultInfo];
  const Contents = result.map(content => (
    <Poster key={content.title} title={content.title} src={content.imgSrc} />
  ));
  return (
    <S.ResultContatiner>
      <S.ResultTitle>{title}</S.ResultTitle>
      <S.ConentsContainer>{Contents}</S.ConentsContainer>
    </S.ResultContatiner>
  );
}
export default SearchResult;
