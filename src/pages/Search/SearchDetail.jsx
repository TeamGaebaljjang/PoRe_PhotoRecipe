// import styled from 'styled-components';
import HeaderBSU from '../../components/header/HeaderBSU';
import { Wrap } from './Search';
import NavBar from '../../components/navBar/NavBar';
import SearchUser from './SearchUser';

const Search = () => {
  return (
    <Wrap>
      <HeaderBSU />
      <SearchUser />
      <SearchUser />
      <SearchUser />
      <NavBar />
    </Wrap>
  );
};

export default Search;
