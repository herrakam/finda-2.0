import { db } from '@/Firebase';
import { PLATFORMINFO } from '@/assets/static';
import { mixin } from '@/globalStyles/GlobalStyle';
import {
  CreditType,
  NormalizedDetailType,
  NormalizedOfferType,
  NormalizedPosterDataType,
  PosterDataType,
} from '@/utils/type';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

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
  return { provider: info?.name!, iconSrc: info?.iconURL! };
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

const getImgId = (src: string) => {
  return src.split('/')[2];
};
const getNomalizedposterData = (
  posterData: PosterDataType[],
): NormalizedPosterDataType[] => {
  const normalizedposterData: NormalizedPosterDataType[] = posterData.map(
    (info: PosterDataType) => {
      const posterId = getImgId(info.poster);
      return {
        id: info.id,
        title: info.title,
        poster: `https://images.justwatch.com/poster/${posterId}/s332/`,
        objectType: info.object_type,
      };
    },
  );
  return normalizedposterData;
};
const getDirectorName = (credit: CreditType) => credit.role === 'DIRECTOR';
const getNormalizedDetailData = (data: any) => {
  const normalizedDetailData: NormalizedDetailType[] = data.map(
    (detailData: any) => {
      const normalizedData: NormalizedDetailType = {
        poster: `https://images.justwatch.com/poster/${getImgId(
          detailData.poster,
        )}/s332/`,
        backdropImgUrl: detailData.backdrops
          ? `https://images.justwatch.com/backdrop/${getImgId(
              detailData.backdrops[0].backdrop_url,
            )}/s1440`
          : `https://images.justwatch.com/poster/${getImgId(
              detailData.poster,
            )}/s332/`,
        title: detailData.title,
        originTitle: detailData.original_title,
        releasedYear: detailData.original_release_year,
        genreArr: detailData.genre_ids,
        runtime: detailData.runtime,
        director: detailData.credits?.find(getDirectorName),
        actors: detailData.credits
          ?.filter(
            (credit: CreditType, idx: number) =>
              credit.role === 'ACTOR' && idx < 10,
          )
          .map((credit: CreditType) => credit.name),
        offerArr: getNormalizedOffer(detailData.offers),
        disc: detailData.short_description,
      };
      return normalizedData;
    },
  );
  console.log(normalizedDetailData);
  return normalizedDetailData;
};

function Scrap() {
  const [pageNum, setPageNum] = useState(0);
  const [isClicked, setIsclicked] = useState(false);
  const [isDetailClicked, setIsDetailClicked] = useState(false);
  const [idArr, setIdArr] = useState<number[]>([]);
  const [posterData, setposterData] = useState<NormalizedPosterDataType[]>([]);
  const [detailData, setDetailData] = useState<NormalizedDetailType[]>([]);
  const POSTERTITLEURL = `https://apis.justwatch.com/content/titles/ko_KR/popular?body=%7B%22fields%22:[%22id%22,%22title%22,%22poster%22,%22object_type%22],%22content_types%22:[%22movie%22],%22monetization_types%22:[%22ads%22,%22buy%22,%22flatrate%22,%22rent%22,%22free%22],%22page%22:${pageNum},%22page_size%22:40,%22matching_offers_only%22:false%7D`;

  const postposterData = async (posterData: NormalizedPosterDataType) => {
    await setDoc(doc(db, 'poster', posterData.title), posterData);
  };

  const postDetailData = async (detailData: NormalizedDetailType) => {
    await setDoc(doc(db, 'movies', detailData.title), detailData);
  };

  const postDBData = async () => {
    Promise.all(
      posterData.map((result: NormalizedPosterDataType) => {
        postposterData(result);
      }),
    );
    Promise.all(
      detailData.map((detail: NormalizedDetailType) => {
        postDetailData(detail);
      }),
    );
  };
  const resetData = () => {
    setDetailData([]);
    setposterData([]);
  };

  const getContentData = async () => {
    const data = (await axios.get(POSTERTITLEURL)).data.items;
    return data;
  };
  const getDetailData = async (id: number) => {
    const DETAILURL = `https://apis.justwatch.com/content/titles/movie/${id}/locale/ko_KR?language=ko`;
    const data = (await axios.get(DETAILURL)).data;
    return data;
  };

  const updateposterData = (data: NormalizedPosterDataType[]) => {
    setposterData([...posterData, ...data]);
  };

  const updateDetailData = (data: NormalizedDetailType[]) => {
    setDetailData([...detailData, ...data]);
  };

  const increasePage = () => {
    setPageNum(pageNum + 1);
  };
  const getIdInfoArr = (data: PosterDataType[]) => {
    const idArrInfo = data.map((item: PosterDataType) => item.id);
    setIdArr([...idArrInfo]);
  };

  const getContentInfo = () => {
    return useQuery(['posterQueryKey', pageNum], getContentData, {
      enabled: isClicked,
      retry: false,
    });
  };

  const getDetailInfo = () => {
    return useQuery(
      ['detailQuerykey', idArr],
      () => {
        const resultArr = idArr.map((id: number) => getDetailData(id));
        return Promise.all(resultArr);
      },
      {
        enabled: isDetailClicked,
        retry: false,
      },
    );
  };

  const resultInfo = getContentInfo().data;
  const detailInfo = getDetailInfo().data;

  useEffect(() => {
    if (resultInfo) {
      const normalizedData: NormalizedPosterDataType[] =
        getNomalizedposterData(resultInfo);
      getIdInfoArr(resultInfo);
      updateposterData(normalizedData);
      setIsDetailClicked(true);
    }
  }, [resultInfo]);
  useEffect(() => {
    if (detailInfo) {
      const normalizedDetailData = getNormalizedDetailData(detailInfo);
      updateDetailData(normalizedDetailData);
      setIsclicked(false);
      setIsDetailClicked(false);
      window.alert('데이터 패치 완료');
    }
  }, [detailInfo, idArr]);

  const showposterData = posterData.map(
    (detail: NormalizedPosterDataType, idx: number) => (
      <div key={detail.title}>{`${idx} ${detail.title} `}</div>
    ),
  );

  const showDetailData = detailData.map(
    (detail: NormalizedDetailType, idx: number) => (
      <div
        key={detail.title}
      >{`${idx} ${detail.title} ${detail.runtime} ${detail.backdropImgUrl}`}</div>
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
          데이터 가져오기
        </GetDataBtn>
        <PostDataBtn
          onClick={() => {
            postDBData().then(resetData);
          }}
        >
          데이터 보내기
        </PostDataBtn>
      </Wrap>
      <ShowDataContainer>
        <ShowResult>{showposterData}</ShowResult>
        <ShowResult>{showDetailData}</ShowResult>
      </ShowDataContainer>
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
const PostDataBtn = styled(GetDataBtn)``;
const ShowDataContainer = styled.div`
  ${mixin.flexbox({ horizontal: 'space-evenly' })}
`;
