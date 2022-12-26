import axios from 'axios';
import { useState } from 'react';
import HeaderBSU from '../../components/header/HeaderBSU';
import { Wrap, SearchCont, SearchMsg } from './searchStyle';
import SearchUser from './SearchUser';
import NavBar from '../../components/navBar/NavBar';
import searchMain from '../../assets/icons/icon-feed-search.svg';

const Search = () => {
  const [user, setUser] = useState(false);
  // 검색 API
  const URL = 'https://mandarin.api.weniv.co.kr';

  const searchUser = async (search) => {
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

  let timer;
  const checkInp = (e) => {
    const search = e.target.value;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      if (search) {
        searchUser(search);
      } else {
        setUser('');
      }
    }, 200);
  };

  return (
    <Wrap>
      <HeaderBSU checkInp={checkInp} />
      {user ? (
        user.map((item) => (
          <SearchUser key={crypto.randomUUID()} props={item} />
        ))
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
