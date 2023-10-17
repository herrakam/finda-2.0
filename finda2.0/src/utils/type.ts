export interface NormalizedPosterDataType {
  id: number;
  title: string;
  poster: string;
  objectType: string;
}

export interface GenreType {
  id: number;
  short_name: string;
  technical_name: string;
  translation: string;
  slug: string;
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

export type OfferType = 'rent' | 'flatrate' | 'buy';
export interface NormalizedOfferType {
  url: string;
  type: OfferType;
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

export interface RankInfoType {
  title: string;
  imgSrc: string;
}

export interface PosterDataType {
  jw_entity_id: string;
  id: number;
  title: string;
  poster: string;
  object_type: string;
}
