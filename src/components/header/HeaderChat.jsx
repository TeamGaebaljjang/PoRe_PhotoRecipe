import {
  BtnWrapper,
  HeaderContainer,
  MoreBtn,
  Title,
  BackBtn,
} from './headerStyle';

const HeaderTest = () => {
  return (
    <HeaderContainer>
      <BackBtn />
      <Title>상대닉네임</Title>
      <BtnWrapper>
        <MoreBtn />
      </BtnWrapper>
    </HeaderContainer>
  );
};

export default HeaderTest;
