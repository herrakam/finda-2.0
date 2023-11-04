import { db } from '@/Firebase';
import { useMove } from '@/hooks/useMove';
import { PosterDataType } from '@/utils/type';
import { debouncing } from '@/utils/util';
import * as S from '@components/Main/MainTop/SearchBar.style';
import { useQuery } from '@tanstack/react-query';
import {
  DocumentData,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { useState } from 'react';
import { MdSearch } from 'react-icons/md';

function SearchBar() {
  const [searchValue, setSearchValue] = useState<string>('');
  const getInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const gotoPage = useMove();

  const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') gotoPage({ url: 'result', detail: searchValue });
  };

  const getResultData = async (searchValue: string) => {
    const resultsRef = collection(db, 'poster');
    const snap = await getDocs(
      query(
        resultsRef,
        where('title', '>=', searchValue),
        where('title', '<=', searchValue + '\uf8ff'),
        orderBy('title'),
        limit(5),
      ),
    );
    const resultData: PosterDataType[] = [];
    snap?.forEach((data: DocumentData) => resultData.push(data.data()));
    return resultData;
  };

  const getResultInfo = () => {
    return useQuery(
      ['getResultQuery', searchValue],
      () => {
        return getResultData(searchValue);
      },
      {
        enabled: searchValue ? true : false,
      },
    );
  };

  const searchedData = getResultInfo().data;

  const searchedContents = searchedData?.map(
    (data: PosterDataType, idx: number) =>
      idx === searchedData.length - 1 ? (
        <S.Result key={data.jw_entity_id} isLast>
          {data.title}
        </S.Result>
      ) : (
        <S.Result
          key={data.jw_entity_id}
          onClick={() => {
            gotoPage({ url: 'movie', detail: data.title });
          }}
        >
          {data.title}
        </S.Result>
      ),
  );
  return (
    <S.SearchBarWrap>
      <S.SearchBar>
        <S.SearchInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const debounce = debouncing({ callback: () => getInputValue(e) });
            debounce(e);
          }}
          onKeyUp={onPressEnter}
        />
        <S.SearchBtn
          onClick={() => {
            gotoPage({ url: 'result', detail: searchValue });
          }}
        >
          <MdSearch size="35" />
        </S.SearchBtn>
      </S.SearchBar>
      {searchValue && <S.ResultContainer>{searchedContents}</S.ResultContainer>}
    </S.SearchBarWrap>
  );
}
export default SearchBar;
