import HeaderBSU from '../../components/header/HeaderBSU';
import { Wrap } from './searchStyle';
import SearchUser from './SearchUser';
import NavBar from '../../components/navBar/NavBar';

const SearchDetail = () => {
  return (
    <Wrap>
      <HeaderBSU />
      <SearchUser />
      <SearchUser />
      <SearchUser />
      <SearchUser />
      <NavBar />
    </Wrap>
  );
};

export default SearchDetail;
