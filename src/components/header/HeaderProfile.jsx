import {
  BtnWrapper,
  HeaderProfileContainer,
  MoreBtn,
  SearchBtn,
  EditProfileBtn,
} from './headerStyle';

const HeaderProfile = () => {
  return (
    <HeaderProfileContainer>
      <BtnWrapper>
        <SearchBtn />
        <EditProfileBtn />
        <MoreBtn />
      </BtnWrapper>
    </HeaderProfileContainer>
  );
};

export default HeaderProfile;
