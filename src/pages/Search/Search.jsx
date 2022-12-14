import styled from 'styled-components';
import searchMain from '../../assets/icons/icon-feed-search.svg';
import NavBar from '../../components/navBar/NavBar';
import SearchHeader from '../../components/header/SearchHeader';

export const Wrap = styled.div`
  height: 100vh;
  overflow: auto;
`;

const SearchCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 658px;
`;

const SearchMsg = styled.p`
  font-size: 14px;
  color: var(--super-gray);
`;

const Search = () => {
  return (
    <Wrap>
      <SearchHeader />
      <SearchCont>
        <img src={searchMain} alt="" />
        <SearchMsg>유저를 검색해 팔로우 해보세요!</SearchMsg>
      </SearchCont>
      <NavBar />
    </Wrap>
  );
};

export default Search;
