import { mixin } from '@/globalStyles/GlobalStyle';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

interface ItemType {
  jw_entity_id: string;
  id: number;
  title: string;
  poster: string;
  object_type: string;
}

// const getDetailData = async (id: number) => {
//   const DETAILURL = `https://apis.justwatch.com/content/titles/movie/${id}/locale/ko_KR?language=ko`;
//   const data = (await axios.get(DETAILURL)).data;
//   // const [genreArr, offerArr, title, discription, runtime, creditsArr];
// };

function Scrap() {
  const [pageNum, setPageNum] = useState(0);
  const [isClicked, setIsclicked] = useState(false);
  const [posterData, setPosterData] = useState<ItemType[]>([]);
  const POSTERTITLEURL = `https://apis.justwatch.com/content/titles/ko_KR/popular?body=%7B%22fields%22:[%22id%22,%22title%22,%22poster%22,%22object_type%22],%22content_types%22:[%22movie%22],%22monetization_types%22:[%22ads%22,%22buy%22,%22flatrate%22,%22rent%22,%22free%22],%22page%22:${pageNum},%22page_size%22:40,%22matching_offers_only%22:false%7D`;

  async function getContentData() {
    const posterData = (await axios.get(POSTERTITLEURL)).data.items;
    return posterData;
  }

  const updateData = (data: ItemType[]) => {
    setPosterData(posterData.concat(data));
  };

  const increasePage = () => {
    setPageNum(pageNum + 1);
  };

  // const [detailData, setDetailData] = useState([]);
  const getContentInfo = () => {
    const { data } = useQuery(['posterQueryKey', pageNum], getContentData, {
      enabled: isClicked,
      onSuccess: data => {
        setIsclicked(false);
        updateData(data);
        console.log(posterData);
      },
    });
    return data as ItemType[];
  };

  getContentInfo();
  return (
    <Wrap>
      <GetDataBtn
        onClick={() => {
          setIsclicked(true);
          increasePage();
        }}
      >
        포스터,제목데이터 가져오기
      </GetDataBtn>
      <GetDetailBtn>디테일 데이터 가져오기</GetDetailBtn>
      <PostDataBtn>데이터 보내기</PostDataBtn>
    </Wrap>
  );
}

export default Scrap;

const Wrap = styled.div`
  min-height: 100vh;
  ${mixin.flexbox({ vertical: 'center', horizontal: 'center' })}
  gap: 40px;
`;

const GetDataBtn = styled.button`
  width: 100px;
  height: 50px;
`;
const GetDetailBtn = styled(GetDataBtn)``;
const PostDataBtn = styled(GetDataBtn)``;
