import { useNavigate } from 'react-router-dom';
import {
  BtnWrapper,
  HeaderProfileContainer,
  MoreBtn,
  SearchBtn,
  UploadPostBtn,
} from './headerStyle';

const HeaderProfile = ({ modalHandler }) => {
  const navigate = useNavigate();
  return (
    <HeaderProfileContainer>
      <BtnWrapper>
        <SearchBtn
          onClick={() => {
            navigate('/feed/search');
          }}
        />
        <UploadPostBtn
          onClick={() => {
            navigate(`/profile/uploadpost`);
          }}
        />
        <MoreBtn onClick={modalHandler} />
      </BtnWrapper>
    </HeaderProfileContainer>
  );
};

export default HeaderProfile;
