import {
  BtnWrapper,
  HeaderContainer,
  MoreBtn,
  SearchBtn,
  Title,
  BackBtn,
  EditProfileBtn,
  SearchInp,
} from './headerStyle';

const HeaderTest = () => {
  return (
    <HeaderContainer>
      <BackBtn />
      <Title>테스트</Title>
      <SearchInp type="text" placeholder="계정 검색" />
      <BtnWrapper>
        <SearchBtn />
        <MoreBtn />
        <EditProfileBtn />
      </BtnWrapper>
    </HeaderContainer>
  );
};

export default HeaderTest;
