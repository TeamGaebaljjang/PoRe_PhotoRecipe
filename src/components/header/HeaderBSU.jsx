// import axios from 'axios';
// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, BackBtn, SearchInp } from './headerStyle';

const HeaderBSU = ({ search, onSearch, checkInp }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
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
