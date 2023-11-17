import { db } from '@/Firebase';
import { mixin } from '@/globalStyles/GlobalStyle';
import { NormalizedDetailType, NormalizedPosterDataType } from '@/utils/type';
import { useQuery } from '@tanstack/react-query';
import {
  DocumentData,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface posterGenreDataType {
  title: string;
  genreArr: number[];
}

function Scrap() {
  const [posterGenreData, setPosterGenreData] = useState<posterGenreDataType[]>(
    [],
  );
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const postposterData = async (posterData: posterGenreDataType) => {
    await setDoc(
      doc(db, 'poster', posterData.title),
      { genreArr: posterData.genreArr },
      {
        merge: true,
      },
    );
  };

  const postDBData = async () => {
    Promise.all(
      posterGenreData.map((result: posterGenreDataType) => {
        postposterData(result);
      }),
    );
  };

  const getAllData = async () => {
    const posterRef = collection(db, 'poster');
    const detailRef = collection(db, 'movies');
    const posterSnap = await getDocs(query(posterRef, orderBy('title')));
    const detailSnap = await getDocs(query(detailRef, orderBy('title')));
    const posterData: NormalizedPosterDataType[] = [];
    const detailData: NormalizedDetailType[] = [];
    posterSnap?.forEach((data: DocumentData) => posterData.push(data.data()));
    detailSnap?.forEach((data: DocumentData) => detailData.push(data.data()));
    return { posterData, detailData };
  };

  const getAllInfo = () =>
    useQuery(['allQueryKey'], getAllData, {
      enabled: isClicked,
    });

  const { data, error } = getAllInfo();
  if (error) {
    throw new Error('에러 발생');
  }
  useEffect(() => {
    if (data) {
      const { posterData: posterInfo, detailData: detailInfo } = data;
      const newPosterData: posterGenreDataType[] = posterInfo
        .map((data: NormalizedPosterDataType): posterGenreDataType => {
          const genreInfo = detailInfo.find(
            (detail: NormalizedDetailType) =>
              data.title === detail.title && detail.genreArr !== undefined,
          )!.genreArr;
          return { title: data.title, genreArr: genreInfo };
        })
        .filter((data: posterGenreDataType) => data.genreArr !== undefined);
      console.log(newPosterData);
      setPosterGenreData([...posterGenreData, ...newPosterData]);
    }
  }, [data]);

  const showposterData = posterGenreData.map((data: posterGenreDataType) => (
    <div key={data.title}>
      <>{data.title}</>
      {data.genreArr.map((genre: number) => {
        return <div key={genre}>{genre}</div>;
      })}
    </div>
  ));

  return (
    <>
      <Wrap>
        <GetDataBtn
          onClick={() => {
            setIsClicked(true);
          }}
        >
          데이터 가져오기
        </GetDataBtn>
        <PostDataBtn
          onClick={() => {
            postDBData();
          }}
        >
          데이터 보내기
        </PostDataBtn>
      </Wrap>
      <ShowDataContainer>
        {data && <ShowResult>{showposterData}</ShowResult>}
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
