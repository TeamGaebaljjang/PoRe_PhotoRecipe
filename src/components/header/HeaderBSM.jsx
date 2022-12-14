import { HeaderContainer, BackBtn, SearchInp } from './headerStyle';

const HeaderBSU = () => {
  return (
    <HeaderContainer>
      <BackBtn />
      <SearchInp type="text" placeholder="지역 검색" />
    </HeaderContainer>
  );
};

export default HeaderBSU;
