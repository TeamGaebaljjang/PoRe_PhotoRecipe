import axios from 'axios';
import { useState, useEffect } from 'react';
import HeaderBSU from '../../components/header/HeaderBSU';
import { Wrap, SearchCont, SearchMsg } from './searchStyle';
import SearchUser from './SearchUser';
import NavBar from '../../components/navBar/NavBar';
import searchMain from '../../assets/icons/icon-feed-search.svg';

const Search = () => {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState([]);

  // 검색 API
  const URL = 'https://mandarin.api.weniv.co.kr';

  useEffect(() => {
    const searchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${URL}/user/searchuser/?keyword=${search}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-type': 'application/json',
            },
          },
        );

        if (response) {
          setUser(response.data);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    searchUser();
  }, [search]);

  // 검색된 값으로 필터링
  const onSearch = (e) => {
    e.preventDefault();
    if (search) {
      const filterData = user.filter((item) =>
        (item.accountname || item.username).includes(search),
      );
      setUser(filterData);
      console.log(user);
    }
    setSearch('');
  };

  // 입력 체크
  const checkInp = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <Wrap>
      <HeaderBSU
        search={search}
        user={user}
        onSearch={onSearch}
        checkInp={checkInp}
      />
      {search ? (
        user.map((item) => <SearchUser props={item} />)
      ) : (
        <SearchCont>
          <img src={searchMain} alt="" />
          <SearchMsg>유저를 검색해 팔로우 해보세요!</SearchMsg>
        </SearchCont>
      )}
      <NavBar />
    </Wrap>
  );
};

export default Search;
