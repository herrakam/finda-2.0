import { db } from '@/Firebase';
import { mixin } from '@/globalStyles/GlobalStyle';
import { commentDataType } from '@/utils/type';
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

function DB() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const [titles, setTitles] = useState<string[]>([]);

  const createComments = async (movieTitle: string) => {
    const sampleComment: commentDataType = {
      comment: '',
      title: movieTitle,
      nickname: 'admin',
      createdTime: new Date(),
    };
    const commentsRef = doc(collection(db, 'movies', movieTitle, 'comments'));
    await setDoc(commentsRef, sampleComment, {
      merge: true,
    });
  };

  //   Promise.all(
  //     posterGenreData.map((result: posterGenreDataType) => {
  //       // postposterData(result);
  //       updatePosterData(result);
  //     }),
  //   );
  // };

  const getAllData = async () => {
    const movieRef = collection(db, 'movies');
    const movieSnap = await getDocs(query(movieRef, orderBy('title')));
    const movieData: string[] = [];
    movieSnap?.forEach((data: DocumentData) =>
      movieData.push(data.data().title),
    );
    console.log(movieData);
    return { movieData };
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
      const { movieData } = data;
      setTitles(movieData);
    }
  }, [data]);

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
            titles.forEach((title: string) => createComments(title));
          }}
        >
          데이터 보내기
        </PostDataBtn>
      </Wrap>
    </>
  );
}

export default DB;

const Wrap = styled.div`
  min-height: 100vh;
  ${mixin.flexbox({ vertical: 'center', horizontal: 'center' })}
  gap: 40px;
`;
// const ShowResult = styled.div``;
const GetDataBtn = styled.button`
  width: 100px;
  height: 50px;
`;
const PostDataBtn = styled(GetDataBtn)``;
// const ShowDataContainer = styled.div`
//   ${mixin.flexbox({ horizontal: 'space-evenly' })}
// `;
