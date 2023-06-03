import { useState } from 'react';
import HeaderBSU from '../../components/header/HeaderBSU';
import { Wrap, SearchCont, SearchMsg } from './searchStyle';
import SearchUser from './SearchUser';
import NavBar from '../../components/navBar/NavBar';
import searchMain from '../../assets/icons/icon-feed-search.svg';
import { api } from '../../axiosInstance';

const Search = () => {
  const [user, setUser] = useState(false);
  const [keyword, setKeyword] = useState('');

  const searchUser = async (search) => {
    try {
      // const regex = new RegExp(search, 'gi');
      const response = await api.get(`/user/searchuser/?keyword=${search}`);

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
        setKeyword(search);
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
          <SearchUser
            key={crypto.randomUUID()}
            props={item}
            keyword={keyword}
          />
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
