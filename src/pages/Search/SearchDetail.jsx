// import styled from 'styled-components';
import SearchHeader from '../../components/header/SearchHeader';
import { Wrap } from './Search';
import NavBar from '../../components/navBar/NavBar';
import SearchUser from './SearchUser';

const Search = () => {
  return (
    <Wrap>
      <SearchHeader />
      <SearchUser />
      <SearchUser />
      <SearchUser />
      <NavBar />
    </Wrap>
  );
};

export default Search;
