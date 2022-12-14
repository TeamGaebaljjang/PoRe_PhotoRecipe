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
        <MoreBtn />
        <EditProfileBtn />
      </BtnWrapper>
    </HeaderProfileContainer>
  );
};

export default HeaderProfile;
