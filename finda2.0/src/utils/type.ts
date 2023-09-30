export interface NormalizedPosterDataType {
  id: number;
  title: string;
  poster: string;
  objectType: string;
}
export interface NormalizedDetailType {
  poster: string;
  backdropImgUrl: string;
  title: string;
  originTitle: string;
  releasedYear: string;
  genreArr: number[];
  runtime: number;
  director: CreditType;
  actors: string[] | '출연진 정보 없음';
  offerArr: NormalizedOfferType[];
  disc: string;
}
export interface NormalizedOfferType {
  url: string;
  type: 'buy' | 'rent' | 'flatrate';
  price?: number;
  provider: string;
  iconSrc: string;
}
export interface CreditType {
  role: string;
  person_id: number;
  charactor_name?: string;
  name: string;
}
