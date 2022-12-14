import { HeaderContainer, BackBtn, SearchInp } from './headerStyle';

const HeaderBSU = () => {
  return (
    <HeaderContainer>
      <BackBtn />
      <form action="submit">
        <SearchInp type="text" placeholder="계정 검색" />
      </form>
    </HeaderContainer>
  );
};

export default HeaderBSU;
