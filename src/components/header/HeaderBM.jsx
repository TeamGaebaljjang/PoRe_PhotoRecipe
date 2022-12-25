import { useNavigate } from 'react-router-dom';
import { BtnWrapper, HeaderContainer, MoreBtn, BackBtn } from './headerStyle';

const HeaderBMProfile = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <HeaderContainer style={{ border: 'none' }}>
      <BackBtn onClick={handleBack} />
      <BtnWrapper>
        <MoreBtn />
      </BtnWrapper>
    </HeaderContainer>
  );
};

export default HeaderBMProfile;
