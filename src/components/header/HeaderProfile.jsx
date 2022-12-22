import { useNavigate } from 'react-router-dom';
import {
  BtnWrapper,
  HeaderProfileContainer,
  MoreBtn,
  SearchBtn,
  UploadPostBtn,
} from './headerStyle';

const HeaderProfile = () => {
  const navigate = useNavigate();
  return (
    <HeaderProfileContainer>
      <BtnWrapper>
        <SearchBtn />
        <UploadPostBtn
          onClick={() => {
            navigate(`/profile/uploadpost`);
          }}
        />
        <MoreBtn />
      </BtnWrapper>
    </HeaderProfileContainer>
  );
};

export default HeaderProfile;
