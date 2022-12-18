import {
  BtnWrapper,
  HeaderProfileContainer,
  MoreBtn,
  BackBtn,
} from './headerStyle';

const HeaderBMProfile = () => {
  return (
    <HeaderProfileContainer>
      <BackBtn />
      <BtnWrapper>
        <MoreBtn />
      </BtnWrapper>
    </HeaderProfileContainer>
  );
};

export default HeaderBMProfile;
