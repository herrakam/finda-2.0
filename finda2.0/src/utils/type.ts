export interface NormalizedPosterDataType {
  id: number;
  title: string;
  poster: string;
  objectType: string;
  genreArr: number[];
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

export interface OriginOfferType {
  jw_entity_id: string;
  monetization_type: 'buy' | 'rent' | 'flatrate';
  provider_id: number;
  package_short_name: string;
  retail_price?: number;
  last_change_retail_price?: number;
  last_change_difference?: number;
  last_change_percent?: number;
  last_change_date?: number;
  last_change_date_provider_id?: string;
  currency: string;
  urls: {
    standard_web: string;
    [key: string]: string;
  };
  available_from: string;
  available_to: string;
  presentation_type: string;
  country: string;
}

export interface SearchResultPropsType {
  setShowedData: React.Dispatch<
    React.SetStateAction<NormalizedPosterDataType[]>
  >;
  searchInfo: string;
  setContentCount: React.Dispatch<React.SetStateAction<number>>;
  showedData: NormalizedPosterDataType[];
  isAbled: boolean;
  setIsAbled: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface commentDataType {
  title: string;
  id: string;
  comment: string;
  createdTime: Date;
  nickname: string;
}
