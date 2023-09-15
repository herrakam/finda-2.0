import { PLATFORMINFO } from '@/assets/static';
import { mixin } from '@/globalStyles/GlobalStyle';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

interface ResultDataType {
  jw_entity_id: string;
  id: number;
  title: string;
  poster: string;
  object_type: string;
}
interface NormalizedResultDataType {
  id: number;
  title: string;
  poster: string;
  objectType: string;
}
interface CreditType {
  role: string;
  person_id: number;
  name: string;
}
interface OfferType {
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
interface NormalizedOfferType {
  url: string;
  type: 'buy' | 'rent' | 'flatrate';
  price?: number;
  provider: string;
  iconSrc: string;
}
interface NormalizedDetailType {
  backdropImgUrl: string;
  title: string;
  originTitle: string;
  releasedYear: string;
  genreArr: number[];
  runtime: number;
  director: string;
  actors: CreditType[];
  offerArr: NormalizedOfferType[];
  disc: string;
}

const getPriceAndType = (offer: OfferType) => {
  let priceAndType: { type: 'buy' | 'rent' | 'flatrate'; price?: number };
  switch (offer.monetization_type) {
    case 'buy':
      priceAndType = {
        type: offer.monetization_type,
        price: offer.retail_price,
      };
      break;
    case 'flatrate':
      priceAndType = {
        type: offer.monetization_type,
      };
      break;
    case 'rent':
      priceAndType = {
        type: offer.monetization_type,
        price: offer.retail_price,
      };
      break;
  }
  return priceAndType;
};

const getOfferPlatformInfo = (offer: OfferType) => {
  const info = PLATFORMINFO.find(
    platformInfo => offer.provider_id === platformInfo.id,
  );
  return { provider: info?.name!, iconSrc: info?.icon_url! };
};

const getNormalizedOffer = (offers: OfferType[]) => {
  const normalizedOffer: NormalizedOfferType[] = offers.map(
    (offer: OfferType) => {
      return {
        url: offer.urls.standard_web,
        ...getOfferPlatformInfo(offer),
        ...getPriceAndType(offer),
      };
    },
  );

  return normalizedOffer;
};

const getNomalizedResultData = (
  resultData: ResultDataType[],
): NormalizedResultDataType[] => {
  const normalizedResultData: NormalizedResultDataType[] = resultData.map(
    (info: ResultDataType) => {
      return {
        id: info.id,
        title: info.title,
        poster: `https://images.justwatch.com/poster/${info.id}/s332/`,
        objectType: info.object_type,
      };
    },
  );
  return normalizedResultData;
};

// const getNormalizedDetailData = () => {};

function Scrap() {
  const [pageNum, setPageNum] = useState(0);
  const [isClicked, setIsclicked] = useState(false);
  const [isDetailClicked, setIsDetailClicked] = useState(false);
  const [idArr, setIdArr] = useState<number[]>([]);
  const [posterData, setPosterData] = useState<NormalizedResultDataType[]>([]);
  const [detailData, setDetailData] = useState<NormalizedDetailType[]>([]);
  const POSTERTITLEURL = `https://apis.justwatch.com/content/titles/ko_KR/popular?body=%7B%22fields%22:[%22id%22,%22title%22,%22poster%22,%22object_type%22],%22content_types%22:[%22movie%22],%22monetization_types%22:[%22ads%22,%22buy%22,%22flatrate%22,%22rent%22,%22free%22],%22page%22:${pageNum},%22page_size%22:40,%22matching_offers_only%22:false%7D`;

  const getContentData = async () => {
    const posterData = (await axios.get(POSTERTITLEURL)).data.items;
    return posterData;
  };
  const getDetailData = async (id: number) => {
    const DETAILURL = `https://apis.justwatch.com/content/titles/movie/${id}/locale/ko_KR?language=ko`;
    const data = (await axios.get(DETAILURL)).data;
    const normalizedData: NormalizedDetailType = {
      backdropImgUrl: `https://images.justwatch.com/backdrop/${id}/s1440`,
      title: data.title,
      originTitle: data.original_title,
      releasedYear: data.original_release_year,
      genreArr: data.genre_ids,
      runtime: data.runtime,
      director: data.credits.filter(
        (credit: CreditType) => credit.role === 'DIRECTOR',
      ).name,
      actors: data.credits.filter(
        (credit: CreditType, idx: number) =>
          credit.role === 'ACTOR' && idx > 10,
      ).name,
      offerArr: getNormalizedOffer(data.offers),
      disc: data.short_discription,
    };
    return normalizedData;
  };
  const updatePosterData = (data: NormalizedResultDataType[]) => {
    setPosterData([...posterData, ...data]);
  };

  const updateDetailData = (data: NormalizedDetailType[]) => {
    setDetailData([...detailData, ...data]);
  };

  const increasePage = () => {
    setPageNum(pageNum + 1);
  };
  const getIdInfoArr = (data: ResultDataType[]) => {
    const idArrInfo = data.map((item: ResultDataType) => item.id);
    setIdArr(idArrInfo);
  };

  const getContentInfo = () => {
    const { data, status } = useQuery(
      ['posterQueryKey', pageNum],
      getContentData,
      {
        enabled: isClicked,
        retry: false,
        onSuccess: data => {
          const normalizedData: NormalizedResultDataType[] =
            getNomalizedResultData(data);
          setIsclicked(false);
          updatePosterData(normalizedData);
        },
      },
    );
    if (status === 'success') {
      setIsclicked(false);
      updatePosterData(data);
    }
    return data as ResultDataType[];
  };

  const getDetailInfo = () => {
    const { data, isSuccess } = useQuery(
      ['detailQuerykey'],
      () => {
        const resultArr = idArr.map((id: number) => getDetailData(id));
        return Promise.all(resultArr);
      },
      {
        enabled: isDetailClicked,
        retry: false,
      },
    );
    if (isSuccess) {
      setIsDetailClicked(false);
      updateDetailData(data);
      // return data;
    }
    return data;
  };

  const data = getContentInfo();
  getDetailInfo();

  const showDetail = posterData.map(
    (detail: NormalizedResultDataType, idx: number) => (
      <div>{`${idx} ${detail.title}`}</div>
    ),
  );

  return (
    <>
      <Wrap>
        <GetDataBtn
          onClick={() => {
            setIsclicked(true);
            increasePage();
          }}
        >
          포스터,제목데이터 가져오기
        </GetDataBtn>
        <GetDetailBtn
          onClick={() => {
            setIsDetailClicked(true);
            getIdInfoArr(data);
          }}
        >
          디테일 데이터 가져오기
        </GetDetailBtn>
        <PostDataBtn>데이터 보내기</PostDataBtn>
      </Wrap>
      <ShowResult>{showDetail}</ShowResult>
    </>
  );
}

export default Scrap;

const Wrap = styled.div`
  min-height: 100vh;
  ${mixin.flexbox({ vertical: 'center', horizontal: 'center' })}
  gap: 40px;
`;
const ShowResult = styled.div``;
const GetDataBtn = styled.button`
  width: 100px;
  height: 50px;
`;
const GetDetailBtn = styled(GetDataBtn)``;
const PostDataBtn = styled(GetDataBtn)``;
