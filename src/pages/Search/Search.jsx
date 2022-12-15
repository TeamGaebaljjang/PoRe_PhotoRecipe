import HeaderBSU from '../../components/header/HeaderBSU';
import { Wrap, SearchCont, SearchMsg } from './searchStyle';
import NavBar from '../../components/navBar/NavBar';
import searchMain from '../../assets/icons/icon-feed-search.svg';

const Search = () => {
  return (
    <Wrap>
      <HeaderBSU />
      <SearchCont>
        <img src={searchMain} alt="" />
        <SearchMsg>유저를 검색해 팔로우 해보세요!</SearchMsg>
      </SearchCont>
      <NavBar />
    </Wrap>
  );
};

export default Search;
