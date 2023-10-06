import { NormalizedOfferType, OfferType } from '@/utils/type';
import { OfferInfoType } from './type';
import * as S from '@components/Offer/Index.style';

const translateOffer = (offer: OfferType) =>
  offer === 'buy' ? '구매' : offer === 'flatrate' ? '스트리밍' : '대여';

const goToOfferPage = (url: string) => window.open(url, '_blank');

function Offer({ offer }: OfferInfoType) {
  const offerTypeArr: OfferType[] = [
    ...new Set(offer.map((offer: NormalizedOfferType) => offer.type)),
  ];
  const offerTable = offerTypeArr.map((type: OfferType) => {
    const offerInfo = offer
      .filter((offer: NormalizedOfferType) => offer.type === type)
      .filter(
        (offer: NormalizedOfferType, idx: number, callback) =>
          idx === callback.findIndex(t => t.url === offer.url),
      );

    const platfroms = offerInfo.map((info: NormalizedOfferType) =>
      info.type === 'flatrate' ? (
        <S.Platform>
          <S.PlatromfIcon
            src={info.iconSrc}
            onClick={() => {
              goToOfferPage(info.url);
            }}
          />
          <S.Price>스트리밍</S.Price>
        </S.Platform>
      ) : (
        <S.Platform>
          <S.PlatromfIcon
            src={info.iconSrc}
            onClick={() => {
              goToOfferPage(info.url);
            }}
          />
          <S.Price>{info.price?.toLocaleString()}\</S.Price>
        </S.Platform>
      ),
    );
    return (
      <S.OfferField key={type}>
        <S.Type>{translateOffer(type)}</S.Type>
        <S.OfferPlatfrom>{platfroms}</S.OfferPlatfrom>
      </S.OfferField>
    );
  });
  return <>{offerTable}</>;
}

export default Offer;
