import { BtnWrapper, HeaderContainer, SearchBtn, Title } from './headerStyle';

const HeaderFeed = () => {
  return (
    <HeaderContainer>
      <Title>포레 피드</Title>
      <BtnWrapper>
        <SearchBtn />
      </BtnWrapper>
    </HeaderContainer>
  );
};

export default HeaderFeed;
