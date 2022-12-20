import { useNavigate } from 'react-router-dom';
import {
  BtnWrapper,
  HeaderProfileContainer,
  MoreBtn,
  BackBtn,
} from './headerStyle';

const HeaderBMProfile = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <HeaderProfileContainer>
      <BackBtn onClick={handleBack} />
      <BtnWrapper>
        <MoreBtn />
      </BtnWrapper>
    </HeaderProfileContainer>
  );
};

export default HeaderBMProfile;
