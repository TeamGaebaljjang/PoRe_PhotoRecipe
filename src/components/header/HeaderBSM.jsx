import { HeaderContainer, BackBtn, SearchInp } from './headerStyle';

const HeaderBSM = () => {
  return (
    <HeaderContainer>
      <BackBtn />
      <SearchInp type="text" placeholder="지역 검색" />
    </HeaderContainer>
  );
};

export default HeaderBSM;
