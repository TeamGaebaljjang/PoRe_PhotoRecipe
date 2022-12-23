import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, BackBtn, SearchInp } from './headerStyle';

const HeaderBSU = () => {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

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
          // console.log(response.data);
          setUser(response.data);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    searchUser();
  }, [search]);

  const onSearch = (e) => {
    e.preventDefault();
    if (search) {
      console.log(search);
      const filterData = user.filter((item) =>
        (item.accountname || item.username).includes(search),
      );
      setUser(filterData);
      console.log(user);
    }
    setSearch('');
  };

  const checkInp = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  return (
    <HeaderContainer>
      <BackBtn onClick={handleBack} />
      <form action="submit" onSubmit={(e) => onSearch(e)}>
        <SearchInp
          type="text"
          value={search}
          placeholder="계정 검색"
          onChange={checkInp}
        />
      </form>
    </HeaderContainer>
  );
};

export default HeaderBSU;
